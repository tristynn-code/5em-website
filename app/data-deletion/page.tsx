import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Data Deletion Instructions',
  description:
    'How to request deletion of your personal data or your advertising data from Fifth Element.',
  path: '/data-deletion',
});

export default function DataDeletionPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-[100px] pb-10 px-6 bg-off border-b border-bd">
        <div className="max-w-[780px] mx-auto">
          <div className="stag inline-block">Legal</div>
          <h1
            className="font-extrabold text-tx mb-3 mt-3"
            style={{ fontSize: 'clamp(36px,5vw,56px)', letterSpacing: '-.03em', lineHeight: 1.05 }}
          >
            Data Deletion Instructions
          </h1>
          <p className="text-sm text-tx-3 font-semibold">Last Updated: July 26, 2026</p>
        </div>
      </section>

      <section className="px-6 bg-wh pt-[60px] pb-[100px]">
        <div className="max-w-[780px] mx-auto">
          <div className="mb-10 pb-8 border-b border-bd">
            <p className="text-[17px] leading-[1.65] text-tx-2 mb-4 font-medium">
              You can ask us to delete your data at any time, and we will. This page explains exactly how, what happens next, and what we are and are not able to delete.
            </p>
          </div>

          <LegalH2 first>How to Request Deletion</LegalH2>
          <LegalP>
            Email{' '}
            <a
              href="mailto:info@5them.com?subject=Data%20Deletion%20Request"
              className="text-teal underline underline-offset-2 font-semibold hover:text-tx"
            >
              info@5them.com
            </a>{' '}
            with the subject line <strong className="text-tx font-bold">Data Deletion Request</strong>, and tell us:
          </LegalP>
          <LegalUL>
            <li>The email address, phone number, or business name your data is associated with</li>
            <li>Whether you are a website visitor, a lead, a client, or a client&rsquo;s customer</li>
          </LegalUL>
          <LegalP>
            We do not require an account, and there is nothing to log into. An email is enough.
          </LegalP>

          <LegalH2>What Happens, and When</LegalH2>
          <LegalUL>
            <li><strong>Within 5 business days</strong> we acknowledge your request and confirm what we hold.</li>
            <li><strong>Within 30 days</strong> we delete it from our active systems and confirm in writing.</li>
            <li><strong>Backups</strong> are purged on their normal rotation, which can take up to a further 90 days. Deleted data is not restored from backups.</li>
          </LegalUL>

          <LegalH2>If You Are a Lead or a Customer of One of Our Clients</LegalH2>
          <LegalP>
            Fifth Element runs advertising on behalf of franchise brands and their local owners. If you filled in a form or clicked an ad for one of those businesses, your information typically belongs to <strong className="text-tx font-bold">that business</strong>, not to us. They are the controller of it; we process it on their behalf.
          </LegalP>
          <LegalP>
            You can still email us and we will act on it. We will delete what we hold, and we will forward your request to the business your information belongs to so they can delete their copy. If you already know which location or brand it was, telling us speeds this up considerably.
          </LegalP>

          <LegalH2>Deleting Data Held Through Meta or Google</LegalH2>
          <LegalP>
            We access advertising data through the Meta Marketing API and the Google Ads API on behalf of our clients. If you want the data those platforms themselves hold about you removed, that request goes to the platform, not to us:
          </LegalP>
          <LegalUL>
            <li>
              Meta:{' '}
              <a
                href="https://www.facebook.com/help/delete_account"
                target="_blank"
                rel="noopener"
                className="text-teal underline underline-offset-2 font-semibold hover:text-tx"
              >
                Facebook account and data deletion
              </a>
              , or Settings and Privacy, then Your Facebook Information.
            </li>
            <li>
              Google:{' '}
              <a
                href="https://myaccount.google.com/delete-services-or-account"
                target="_blank"
                rel="noopener"
                className="text-teal underline underline-offset-2 font-semibold hover:text-tx"
              >
                Delete a Google service or your account
              </a>
              .
            </li>
          </LegalUL>
          <LegalP>
            Deleting your data with a platform does not automatically delete it from our systems, and deleting it from ours does not delete it from theirs. If you want both, make both requests.
          </LegalP>

          <LegalH2>What We May Have to Keep</LegalH2>
          <LegalP>
            A small amount of information can survive a deletion request, and only for these reasons:
          </LegalP>
          <LegalUL>
            <li><strong>Legal and tax records</strong> such as invoices and contracts, retained for the period the law requires.</li>
            <li><strong>Suppression records</strong>, meaning the minimum needed to remember that you asked not to be contacted. Deleting this entirely would mean we could not honour your own opt-out.</li>
            <li><strong>Aggregated and de-identified statistics</strong> that can no longer be traced back to you as an individual.</li>
          </LegalUL>
          <LegalP>
            We will tell you plainly if any of these apply to your request, and why.
          </LegalP>

          <LegalH2>Contact</LegalH2>
          <LegalP>
            5th Element Media LLC, Murrieta, California, USA
            <br />
            Email:{' '}
            <a
              href="mailto:info@5them.com"
              className="text-teal underline underline-offset-2 font-semibold hover:text-tx"
            >
              info@5them.com
            </a>
            <br />
            Phone:{' '}
            <a
              href="tel:+19516181304"
              className="text-teal underline underline-offset-2 font-semibold hover:text-tx"
            >
              (951) 618-1304
            </a>
          </LegalP>
          <LegalP>
            See also our{' '}
            <a href="/privacy" className="text-teal underline underline-offset-2 font-semibold hover:text-tx">
              Privacy Policy
            </a>
            .
          </LegalP>
        </div>
      </section>
    </>
  );
}

function LegalH2({ children, first }: { children: React.ReactNode; first?: boolean }) {
  return (
    <h2
      className="text-[24px] font-extrabold text-tx leading-[1.25] mb-4"
      style={{ letterSpacing: '-.02em', marginTop: first ? 40 : 40 }}
    >
      {children}
    </h2>
  );
}

function LegalP({ children }: { children: React.ReactNode }) {
  return <p className="text-[15px] leading-[1.7] text-tx-2 mb-3.5 font-medium">{children}</p>;
}

function LegalUL({ children }: { children: React.ReactNode }) {
  return (
    <ul className="pl-[22px] my-3 mb-5 list-disc text-[15px] leading-[1.7] text-tx-2 font-medium [&>li]:mb-2 [&_strong]:text-tx [&_strong]:font-bold">
      {children}
    </ul>
  );
}
