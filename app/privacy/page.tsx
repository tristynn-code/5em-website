import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | 5th Element Media',
  description:
    '5th Element Media privacy policy. How we collect, use, and protect your information when you visit our site or engage our franchise marketing services.',
};

export default function PrivacyPage() {
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
            Privacy Policy
          </h1>
          <p className="text-sm text-tx-3 font-semibold">
            Effective Date: April 20, 2026 &middot; Last Updated: April 20, 2026
          </p>
        </div>
      </section>

      {/* Body - first */}
      <section className="px-6 bg-wh pt-[60px]">
        <div className="max-w-[780px] mx-auto">
          <div className="mb-10 pb-8 border-b border-bd">
            <p className="text-[17px] leading-[1.65] text-tx-2 mb-4 font-medium">
              5th Element Media LLC (&ldquo;5th Element,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) respects your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website <strong className="text-tx font-bold">5them.com</strong> (the &ldquo;Site&rdquo;) or engage with our services.
            </p>
            <p className="text-[17px] leading-[1.65] text-tx-2 mb-4 font-medium">
              By using our Site, you agree to the collection and use of information in accordance with this policy. If you do not agree, please do not use the Site.
            </p>
          </div>

          <LegalH2>1. Information We Collect</LegalH2>
          <LegalP>We collect two categories of information:</LegalP>
          <LegalH3>Information You Provide to Us</LegalH3>
          <LegalUL>
            <li><strong>Contact information</strong> (name, email, phone, company) when you fill out a form, request an audit, or contact us.</li>
            <li><strong>Business information</strong> (franchise brand, location details, marketing data) when you engage our services or book a consultation.</li>
            <li><strong>Communications</strong> including emails, messages, and call recordings you send to us.</li>
          </LegalUL>
          <LegalH3>Information Collected Automatically</LegalH3>
          <LegalUL>
            <li><strong>Device and usage data</strong> such as IP address, browser type, pages visited, time on site, referring URLs.</li>
            <li><strong>Cookies and tracking pixels</strong> including Meta Pixel, Google Analytics, and similar technologies to understand how visitors use our Site.</li>
          </LegalUL>

          <LegalH2>2. How We Use Your Information</LegalH2>
          <LegalP>We use collected information to:</LegalP>
          <LegalUL>
            <li>Provide, operate, and improve our services</li>
            <li>Respond to inquiries, schedule audits, and deliver requested information</li>
            <li>Send marketing communications (you can unsubscribe at any time)</li>
            <li>Analyze Site usage and optimize our marketing</li>
            <li>Comply with legal obligations and protect our rights</li>
          </LegalUL>

          <LegalH2>3. How We Share Your Information</LegalH2>
          <LegalP>We do not sell your personal information. We may share information with:</LegalP>
          <LegalUL>
            <li><strong>Service providers</strong> (CRM, email platforms, analytics tools, payment processors) who help us operate our business</li>
            <li><strong>Advertising partners</strong> such as Meta and Google for attribution and audience-building purposes</li>
            <li><strong>Legal authorities</strong> when required by law or to protect our rights</li>
            <li><strong>Business transfers</strong> in connection with a merger, acquisition, or asset sale</li>
          </LegalUL>

          <LegalH2>4. Cookies and Tracking Technologies</LegalH2>
          <LegalP>
            We use cookies, pixels, and similar technologies to improve your experience and measure our marketing. You can disable cookies through your browser settings, but some Site features may not function properly.
          </LegalP>
          <LegalP>
            We specifically use the <strong>Meta Pixel</strong> and <strong>Google Analytics</strong> to track conversions and optimize ad performance. You can opt out of Meta&rsquo;s interest-based advertising via your Facebook ad preferences and Google Analytics via the{' '}
            <a
              href="https://tools.google.com/dlpage/gaoptout"
              target="_blank"
              rel="noopener"
              className="text-teal underline underline-offset-2 font-semibold hover:text-tx"
            >
              Google Analytics Opt-Out Browser Add-on
            </a>
            .
          </LegalP>
        </div>
      </section>

      {/* Body - mid */}
      <section className="px-6 bg-wh">
        <div className="max-w-[780px] mx-auto">
          <LegalH2 first>5. Your Rights and Choices</LegalH2>
          <LegalP>Depending on where you live, you may have the right to:</LegalP>
          <LegalUL>
            <li>Access, correct, or delete your personal information</li>
            <li>Opt out of marketing communications</li>
            <li>Opt out of the sale or sharing of your personal information (we do not sell data)</li>
            <li>Withdraw consent where processing is based on consent</li>
          </LegalUL>
          <LegalP>
            To exercise these rights, email us at{' '}
            <a
              href="mailto:info@5them.com"
              className="text-teal underline underline-offset-2 font-semibold hover:text-tx"
            >
              info@5them.com
            </a>
            .
          </LegalP>

          <LegalH2>6. California Residents</LegalH2>
          <LegalP>
            California residents have specific rights under the California Consumer Privacy Act (CCPA) and CPRA, including the right to know what personal information we collect, the right to delete, and the right to opt out of certain data uses. Contact us at{' '}
            <a
              href="mailto:info@5them.com"
              className="text-teal underline underline-offset-2 font-semibold hover:text-tx"
            >
              info@5them.com
            </a>{' '}
            to exercise these rights.
          </LegalP>

          <LegalH2>7. Data Security</LegalH2>
          <LegalP>
            We use reasonable administrative, technical, and physical safeguards to protect your information. However, no system is 100% secure, and we cannot guarantee absolute security.
          </LegalP>

          <LegalH2>8. Data Retention</LegalH2>
          <LegalP>
            We retain personal information only as long as necessary to fulfill the purposes described in this policy, comply with legal obligations, resolve disputes, and enforce agreements.
          </LegalP>

          <LegalH2>9. Children&rsquo;s Privacy</LegalH2>
          <LegalP>
            Our Site is not directed to individuals under 18. We do not knowingly collect personal information from children.
          </LegalP>
        </div>
      </section>

      {/* Body - last */}
      <section className="px-6 bg-wh pb-[100px]">
        <div className="max-w-[780px] mx-auto">
          <LegalH2 first>10. Third-Party Links</LegalH2>
          <LegalP>
            Our Site may contain links to third-party websites. We are not responsible for the privacy practices of those sites. Please review their privacy policies.
          </LegalP>

          <LegalH2>11. Changes to This Policy</LegalH2>
          <LegalP>
            We may update this Privacy Policy from time to time. The updated version will be posted on this page with a revised &ldquo;Last Updated&rdquo; date. Your continued use of the Site constitutes acceptance of the updated policy.
          </LegalP>

          <LegalH2>12. Contact Us</LegalH2>
          <LegalP>If you have questions about this Privacy Policy or our data practices, contact us at:</LegalP>
          <div className="mt-3 px-6 py-5 bg-off border border-bd rounded-[10px] text-[15px] leading-[1.7] text-tx-2 font-medium">
            <div className="mb-1"><strong className="text-tx font-bold">5th Element Media LLC</strong></div>
            <div className="mb-1">Murrieta, California, USA</div>
            <div className="mb-1">
              Email:{' '}
              <a
                href="mailto:info@5them.com"
                className="text-teal underline underline-offset-2 font-semibold hover:text-tx"
              >
                info@5them.com
              </a>
            </div>
            <div>
              Phone:{' '}
              <a
                href="tel:+19516181304"
                className="text-teal underline underline-offset-2 font-semibold hover:text-tx"
              >
                (951) 618-1304
              </a>
            </div>
          </div>

          <div
            className="mt-10 px-[22px] py-[18px] rounded-lg text-[13px] leading-[1.5] font-medium"
            style={{ background: '#fff9e6', border: '1px solid #f0d878', color: '#7a5a00' }}
          >
            <strong>Disclaimer:</strong> This privacy policy is a template and should be reviewed by qualified legal counsel before publication to ensure compliance with applicable laws in your jurisdiction.
          </div>
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

function LegalH3({ children }: { children: React.ReactNode }) {
  return (
    <h3
      className="text-[17px] font-bold text-tx mt-6 mb-2.5"
      style={{ letterSpacing: '-.01em' }}
    >
      {children}
    </h3>
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
