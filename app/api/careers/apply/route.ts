import { NextResponse } from 'next/server';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const MAX_FILE_BYTES = 4 * 1024 * 1024; // keep under the serverless body cap

const CAREERS_INBOX = process.env.CAREERS_INBOX;
const CAREERS_FROM = process.env.CAREERS_FROM || 'careers@5them.com';
const RESEND_API_KEY = process.env.RESEND_API_KEY;
const SHEETS_WEBHOOK_URL = process.env.SHEETS_WEBHOOK_URL;
const SHEETS_WEBHOOK_SECRET = process.env.SHEETS_WEBHOOK_SECRET || '';

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

interface Application {
  fullName: string;
  email: string;
  phone: string;
  role: string;
  roleSlug: string;
  basedLocation: string;
  linkedin: string;
  resumeLink: string;
  videoLink: string;
  coverNote: string;
  howHeard: string;
  submittedAt: string;
}

/** Append the application to the Google Sheet (and stash the resume in Drive). */
async function postToSheet(
  app: Application,
  resume: { filename: string; mimeType: string; base64: string } | null,
): Promise<{ ok: boolean; driveUrl?: string }> {
  if (!SHEETS_WEBHOOK_URL) return { ok: false };
  try {
    const res = await fetch(SHEETS_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ secret: SHEETS_WEBHOOK_SECRET, ...app, resume }),
    });
    if (!res.ok) return { ok: false };
    // The Apps Script always returns HTTP 200 (ContentService can't set a
    // status), so a mismatched secret or a Drive/Sheet error still arrives as
    // 200. Gate real success on the JSON body's own ok flag.
    const json = await res.json().catch(() => ({}));
    if (json.ok !== true) return { ok: false };
    return { ok: true, driveUrl: json.driveUrl };
  } catch {
    return { ok: false };
  }
}

/** Email the application to the hiring inbox via Resend's REST API. */
async function sendEmail(
  app: Application,
  resume: { filename: string; mimeType: string; base64: string } | null,
  driveUrl?: string,
): Promise<boolean> {
  if (!RESEND_API_KEY || !CAREERS_INBOX) return false;

  const row = (label: string, value: string) =>
    value
      ? `<tr><td style="padding:6px 16px 6px 0;color:#777;font-size:13px;white-space:nowrap;vertical-align:top">${label}</td><td style="padding:6px 0;color:#1a1a1a;font-size:14px">${escapeHtml(value)}</td></tr>`
      : '';

  const resumeRow = driveUrl
    ? `<tr><td style="padding:6px 16px 6px 0;color:#777;font-size:13px">Resume</td><td style="padding:6px 0;font-size:14px"><a href="${escapeHtml(driveUrl)}" style="color:#00BE9D;font-weight:700">View in Drive →</a></td></tr>`
    : '';

  const html = `<!doctype html><html><body style="margin:0;background:#F7F7F7;font-family:-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif">
    <div style="max-width:560px;margin:0 auto;padding:32px 20px">
      <div style="background:#fff;border:1px solid rgba(0,0,0,.07);border-radius:16px;padding:28px 28px 8px">
        <div style="font-size:12px;font-weight:800;letter-spacing:.1em;text-transform:uppercase;color:#00BE9D;margin-bottom:6px">New application</div>
        <div style="font-size:22px;font-weight:800;color:#1a1a1a;letter-spacing:-.02em;margin-bottom:20px">${escapeHtml(app.role)}</div>
        <table style="border-collapse:collapse;width:100%">
          ${row('Name', app.fullName)}
          ${row('Email', app.email)}
          ${row('Phone', app.phone)}
          ${row('Based in', app.basedLocation)}
          ${row('LinkedIn / portfolio', app.linkedin)}
          ${row('Resume link', app.resumeLink)}
          ${resumeRow}
          ${row('Video intro', app.videoLink)}
          ${row('How they heard', app.howHeard)}
        </table>
        ${app.coverNote ? `<div style="margin-top:18px;padding-top:16px;border-top:1px solid rgba(0,0,0,.07)"><div style="color:#777;font-size:13px;margin-bottom:6px">Why 5th Element</div><div style="color:#444;font-size:14px;line-height:1.6">${escapeHtml(app.coverNote)}</div></div>` : ''}
      </div>
      <div style="text-align:center;color:#777;font-size:12px;margin-top:16px">Submitted ${escapeHtml(app.submittedAt)} via 5them.com/careers</div>
    </div>
  </body></html>`;

  const payload: Record<string, unknown> = {
    from: `5th Element Careers <${CAREERS_FROM}>`,
    to: [CAREERS_INBOX],
    reply_to: app.email,
    subject: `New application: ${app.role} - ${app.fullName}`,
    html,
  };
  if (resume) {
    payload.attachments = [{ filename: resume.filename, content: resume.base64 }];
  }

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
    return res.ok;
  } catch {
    return false;
  }
}

export async function POST(req: Request) {
  let form: FormData;
  try {
    form = await req.formData();
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid form submission.' }, { status: 400 });
  }

  // Trim and hard-cap each field so an unauthenticated caller can't bloat the
  // email, the webhook payload, or the sheet row with megabytes of text.
  const get = (k: string, max = 300) => ((form.get(k) as string | null)?.trim() ?? '').slice(0, max);

  // Honeypot: real users never see/fill this. Pretend success, do nothing.
  if (get('company')) {
    return NextResponse.json({ ok: true, delivered: false });
  }

  const app: Application = {
    fullName: get('fullName', 120),
    email: get('email', 200),
    phone: get('phone', 40),
    role: get('role', 160) || 'General application',
    roleSlug: get('roleSlug', 160),
    basedLocation: get('basedLocation', 160),
    linkedin: get('linkedin', 500),
    resumeLink: get('resumeLink', 500),
    videoLink: get('videoLink', 500),
    coverNote: get('coverNote', 5000),
    howHeard: get('howHeard', 300),
    submittedAt: new Date().toISOString(),
  };

  // Required fields
  if (!app.fullName || !app.email || !app.phone) {
    return NextResponse.json({ ok: false, error: 'Please fill in your name, email, and phone.' }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(app.email)) {
    return NextResponse.json({ ok: false, error: 'Please enter a valid email address.' }, { status: 400 });
  }

  // Resume file (optional if a link is provided)
  let resume: { filename: string; mimeType: string; base64: string } | null = null;
  const file = form.get('resume');
  if (file && file instanceof File && file.size > 0) {
    if (file.size > MAX_FILE_BYTES) {
      return NextResponse.json({ ok: false, error: 'Resume file is too large (max 4MB).' }, { status: 400 });
    }
    const buf = Buffer.from(await file.arrayBuffer());
    resume = { filename: file.name, mimeType: file.type || 'application/octet-stream', base64: buf.toString('base64') };
  }

  if (!resume && !app.resumeLink) {
    return NextResponse.json({ ok: false, error: 'Please attach a resume or paste a resume / portfolio link.' }, { status: 400 });
  }

  // Deliver: sheet first (to grab the Drive link), then email.
  const sheet = await postToSheet(app, resume);
  const emailed = await sendEmail(app, resume, sheet.driveUrl);

  const configured = Boolean(SHEETS_WEBHOOK_URL || (RESEND_API_KEY && CAREERS_INBOX));
  if (configured && !sheet.ok && !emailed) {
    return NextResponse.json(
      { ok: false, error: 'We could not submit your application right now. Please try again shortly.' },
      { status: 502 },
    );
  }

  // When nothing is configured yet (e.g. preview before secrets are set) we
  // still return success so the form UX is reviewable; delivered:false signals
  // it was not actually sent anywhere.
  return NextResponse.json({ ok: true, delivered: sheet.ok || emailed });
}
