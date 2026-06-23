'use client';

import { useRef, useState } from 'react';

const MAX_FILE_MB = 4;
const ACCEPTED = '.pdf,.doc,.docx';

type Status = 'idle' | 'submitting' | 'success' | 'error';

const fieldClass =
  'w-full rounded-s border border-bd bg-wh px-4 py-3 text-[15px] text-tx placeholder:text-tx-3 outline-none transition-colors focus:border-teal focus:ring-2 focus:ring-teal-bd';
const labelClass = 'block text-[13px] font-bold text-tx mb-1.5';

export default function ApplyForm({ roleTitle, roleSlug }: { roleTitle: string; roleSlug: string }) {
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState<string>('');
  const [fileName, setFileName] = useState<string>('');
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError('');
    const form = e.currentTarget;
    const data = new FormData(form);

    // Client-side file guard - keep the request under the serverless body cap.
    const file = data.get('resume') as File | null;
    if (file && file.size > 0) {
      if (file.size > MAX_FILE_MB * 1024 * 1024) {
        setError(`That resume is over ${MAX_FILE_MB}MB. Please attach a smaller file or paste a link instead.`);
        return;
      }
    }

    // Require a resume one way or another.
    const link = (data.get('resumeLink') as string)?.trim();
    if ((!file || file.size === 0) && !link) {
      setError('Please attach a resume file or paste a link to your resume / portfolio.');
      return;
    }

    setStatus('submitting');
    try {
      const res = await fetch('/api/careers/apply', { method: 'POST', body: data });
      const json = await res.json().catch(() => ({}));
      if (!res.ok || !json.ok) {
        throw new Error(json.error || 'Something went wrong. Please try again.');
      }
      setStatus('success');
      form.reset();
      setFileName('');
    } catch (err) {
      setStatus('error');
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-l border border-teal-bd bg-teal-bg p-8 md:p-10 text-center">
        <div
          className="mx-auto mb-4 flex items-center justify-center rounded-full text-teal"
          style={{ width: 56, height: 56, background: 'rgba(0,190,157,.12)', fontSize: 26 }}
          aria-hidden
        >
          ✓
        </div>
        <h3 className="font-extrabold text-tx mb-2" style={{ fontSize: 22, letterSpacing: '-.02em' }}>
          Application received
        </h3>
        <p className="text-[15px] text-tx-2 max-w-[440px] mx-auto">
          Thanks for applying to be our {roleTitle}. Our team will review your application and reach out if it’s a fit. Keep an eye on your inbox.
        </p>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate className="rounded-l border border-bd bg-off p-6 md:p-9">
      <input type="hidden" name="role" value={roleTitle} />
      <input type="hidden" name="roleSlug" value={roleSlug} />

      <h3 className="font-extrabold text-tx mb-1" style={{ fontSize: 24, letterSpacing: '-.02em' }}>
        Apply for this role
      </h3>
      <p className="text-[14px] text-tx-3 mb-7">
        Tell us about yourself. Fields marked with <span className="text-teal">*</span> are required.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className={labelClass} htmlFor="fullName">Full name <span className="text-teal">*</span></label>
          <input id="fullName" name="fullName" type="text" required maxLength={120} autoComplete="name" className={fieldClass} placeholder="Jordan Rivera" />
        </div>
        <div>
          <label className={labelClass} htmlFor="email">Email <span className="text-teal">*</span></label>
          <input id="email" name="email" type="email" required maxLength={200} autoComplete="email" className={fieldClass} placeholder="you@email.com" />
        </div>
        <div>
          <label className={labelClass} htmlFor="phone">Phone <span className="text-teal">*</span></label>
          <input id="phone" name="phone" type="tel" required maxLength={40} autoComplete="tel" className={fieldClass} placeholder="(555) 123-4567" />
        </div>
        <div>
          <label className={labelClass} htmlFor="basedLocation">Where are you based?</label>
          <input id="basedLocation" name="basedLocation" type="text" maxLength={160} className={fieldClass} placeholder="City, State" />
        </div>
      </div>

      <div className="mt-5">
        <label className={labelClass} htmlFor="linkedin">LinkedIn or portfolio URL</label>
        <input id="linkedin" name="linkedin" type="url" maxLength={500} className={fieldClass} placeholder="https://linkedin.com/in/you" />
      </div>

      {/* Resume - file and/or link */}
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className={labelClass} htmlFor="resume">Resume file</label>
          <label
            htmlFor="resume"
            className="flex items-center gap-3 rounded-s border border-dashed border-bd bg-wh px-4 py-3 cursor-pointer transition-colors hover:border-teal"
          >
            <span className="inline-flex items-center justify-center rounded-s bg-teal-bg text-teal font-bold flex-shrink-0" style={{ width: 32, height: 32 }} aria-hidden>↑</span>
            <span className="text-[14px] text-tx-2 truncate">{fileName || `Upload PDF or Word (max ${MAX_FILE_MB}MB)`}</span>
          </label>
          <input
            id="resume"
            name="resume"
            type="file"
            accept={ACCEPTED}
            className="sr-only"
            onChange={e => setFileName(e.target.files?.[0]?.name ?? '')}
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="resumeLink">…or paste a resume link</label>
          <input id="resumeLink" name="resumeLink" type="url" maxLength={500} className={fieldClass} placeholder="https://drive.google.com/…" />
        </div>
      </div>

      <div className="mt-5">
        <label className={labelClass} htmlFor="coverNote">Why 5th Element? (optional)</label>
        <textarea id="coverNote" name="coverNote" rows={4} maxLength={5000} className={fieldClass} style={{ resize: 'vertical' }} placeholder="A few sentences on why you’d be a great fit." />
      </div>

      <div className="mt-5">
        <label className={labelClass} htmlFor="howHeard">How did you hear about us? (optional)</label>
        <input id="howHeard" name="howHeard" type="text" maxLength={300} className={fieldClass} placeholder="LinkedIn, a friend, our podcast…" />
      </div>

      {/* Honeypot - hidden from humans, bots fill it; server rejects if present. */}
      <div aria-hidden className="hidden" style={{ position: 'absolute', left: '-9999px' }}>
        <label htmlFor="company">Company</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {/* Persistent live region so repeated errors always re-announce to AT.
          Error red here is a functional system state, not a brand accent. */}
      <div aria-live="assertive" className="empty:hidden mt-5">
        {error && (
          <p
            className="text-[14px] font-semibold rounded-s px-4 py-3"
            style={{ color: '#B42318', background: 'rgba(217,45,32,.07)', border: '1px solid rgba(217,45,32,.18)' }}
          >
            {error}
          </p>
        )}
      </div>

      <button type="submit" disabled={status === 'submitting'} className="bp bpl mt-7 w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed">
        {status === 'submitting' ? 'Submitting…' : 'Submit application →'}
      </button>
      <p className="mt-3 text-[12px] text-tx-3 text-center">
        By applying you consent to 5th Element Media storing your application for hiring purposes.
      </p>
    </form>
  );
}
