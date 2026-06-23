# Careers page - going live checklist

The careers pages work the moment they ship. The **application form** also works
in preview, but it won't actually deliver anywhere until you do the two setups
below (about 15 minutes total, one time). Until then, a submitted application
shows the success screen but is not sent.

There are two destinations for each application, exactly as you asked:

1. **A Google Sheet** (your running list for interview scheduling) - resumes are
   auto-saved to a private Drive folder with the link in the row (visible to you,
   plus any teammates you list in the script).
2. **An email to your team** (instant heads-up, resume attached).

You can set up either or both. Here's how.

---

## Part 1 - Google Sheet (the running applicant list)

1. Create a new Google Sheet (name it e.g. "5EM Job Applications").
2. In the sheet, go to **Extensions → Apps Script**.
3. Delete whatever's in the editor and paste the entire contents of
   [`scripts/careers-sheet.gs`](../scripts/careers-sheet.gs).
4. At the top of the script, change `SECRET` to a long random string
   (e.g. mash the keyboard - 30+ characters). **Keep this - you'll need it in
   Part 3.** Resumes are saved privately to your Drive by default. To let
   specific teammates open the resume links, add their Google emails to
   `SHARE_RESUMES_WITH` (e.g. `['hiring@5them.com']`). Never make them public.
5. Click **Deploy → New deployment**. Choose type **Web app**.
   - Description: "Careers receiver"
   - Execute as: **Me**
   - Who has access: **Anyone**
   - Click **Deploy**, authorize when prompted (it needs Sheets + Drive access).
6. Copy the **Web app URL** it gives you (ends in `/exec`). That's your
   `SHEETS_WEBHOOK_URL`. **Keep this - Part 3.**

That's it. The script auto-creates the "Applications" tab + headers and a
"5EM Job Applications" Drive folder on the first submission.

---

## Part 2 - Email notifications via Resend

You already use Resend. You just need an API key and a verified sender on the
`5them.com` domain.

1. In Resend, confirm `5them.com` is a **verified domain** (Domains tab). If not,
   add it and follow the DNS steps.
2. Create an **API key** (API Keys tab). Copy it - that's `RESEND_API_KEY`.
3. Decide:
   - `CAREERS_FROM` - the sender, e.g. `careers@5them.com` (must be on the
     verified domain).
   - `CAREERS_INBOX` - where applications land, e.g. `careers@5them.com` or your
     own inbox.

---

## Part 3 - Add the environment variables in Vercel

In the Vercel project (`5em-website`) → **Settings → Environment Variables**, add
these for **Production** (and Preview if you want to test there):

| Name | Value |
| --- | --- |
| `SHEETS_WEBHOOK_URL` | the `/exec` URL from Part 1 |
| `SHEETS_WEBHOOK_SECRET` | the same `SECRET` string from Part 1 |
| `RESEND_API_KEY` | your Resend API key |
| `CAREERS_FROM` | `careers@5them.com` |
| `CAREERS_INBOX` | where applications should be emailed |

Redeploy (or it picks them up on the next deploy). Submit a test application from
`/careers/client-success-manager` and confirm: a new row appears in the sheet,
the resume link works, and the email lands in `CAREERS_INBOX`.

---

## Adding / editing / closing roles

All roles live in [`app/careers/roles.ts`](../app/careers/roles.ts).

- **Add a role:** copy an existing entry, change the fields, give it a unique
  `slug`. It automatically appears on `/careers`, gets its own page, joins the
  sitemap, and emits Google Jobs (`JobPosting`) structured data.
- **Close a role:** set `active: false`. Its page 404s and it drops off the index
  - no deletion needed.
- **Pay:** `payDisplay` is what people see; `payMin`/`payMax`/`payUnit` feed the
  Google rich result. All optional.

## Employee testimonials

Live in [`content/employee-testimonials.json`](../content/employee-testimonials.json).
Replace the sample names/roles/quotes with real ones, and fill the `photo` field
with an image URL to swap the initials chip for a real headshot.
