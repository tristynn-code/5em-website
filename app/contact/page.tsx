import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import { pageMetadata } from '@/lib/seo';
import { breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = pageMetadata({
  title: 'Contact 5th Element Media',
  description:
    "Get in touch with 5th Element Media. We help franchise brands generate predictable leads across every location. Call (951) 618-1304 or book your free Franchise Lead Engine Audit.",
  path: '/contact',
  keywords: ['contact franchise marketing agency', '5th Element Media contact', 'franchise marketing consultation'],
});

export default function ContactPage() {
  return (
    <div className="max-w-[1200px] mx-auto px-6 md:px-10 pt-[140px] md:pt-[180px] pb-10 md:pb-20">
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Contact', path: '/contact' },
        ])}
      />
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-start">
        {/* LEFT */}
        <div className="ct-left">
          <div className="stag">Contact Us</div>
          <h1
            className="font-extrabold mb-4"
            style={{ fontSize: 'clamp(36px,5vw,56px)', letterSpacing: '-.04em', lineHeight: 1.04 }}
          >
            Let&apos;s Grow Your<br />
            <em className="not-italic text-teal">Franchise Brand.</em>
          </h1>
          <p className="text-[17px] text-tx-2 leading-[1.7] mb-12 max-w-[440px]">
            Whether you&apos;re a franchisor, a multi-unit operator, or a single-location owner ready for better marketing - we&apos;d love to hear from you.
          </p>

          <div className="flex flex-col">
            {/* Email row */}
            <div className="flex items-center gap-4 py-5 border-t border-bd">
              <IconBubble>
                <svg viewBox="0 0 24 24" fill="none" stroke="#00BE9D" strokeWidth={1.5} className="w-5 h-5">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <path d="M22 6l-10 7L2 6" />
                </svg>
              </IconBubble>
              <div>
                <div className="text-xs font-bold text-tx-3 uppercase mb-0.5" style={{ letterSpacing: '.08em' }}>Email</div>
                <div className="text-[16px] font-semibold text-tx">
                  <a href="mailto:info@5them.com" className="hover:text-teal transition-colors">
                    info@5them.com
                  </a>
                </div>
              </div>
            </div>

            {/* Phone row */}
            <div className="flex items-center gap-4 py-5 border-t border-b border-bd">
              <IconBubble>
                <svg viewBox="0 0 24 24" fill="none" stroke="#00BE9D" strokeWidth={1.5} className="w-5 h-5">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13.81.36 1.6.68 2.35a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.75.32 1.54.55 2.35.68A2 2 0 0122 16.92z" />
                </svg>
              </IconBubble>
              <div>
                <div className="text-xs font-bold text-tx-3 uppercase mb-0.5" style={{ letterSpacing: '.08em' }}>Phone</div>
                <div className="text-[16px] font-semibold text-tx">
                  <a href="tel:+19516181304" className="hover:text-teal transition-colors">
                    (951) 618-1304
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Socials */}
          <div className="mt-7">
            <div className="text-xs font-bold text-tx-3 uppercase mb-3" style={{ letterSpacing: '.08em' }}>Follow Us</div>
            <div className="flex gap-3">
              <SocialLink href="https://www.linkedin.com/company/5th-element-media" title="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </SocialLink>
              <SocialLink href="https://www.instagram.com/fifthelement.agency/" title="Instagram">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </SocialLink>
              <SocialLink href="https://www.youtube.com/@Tristynn.McGowan" title="YouTube">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </SocialLink>
            </div>
          </div>
        </div>

        {/* RIGHT: Form */}
        <div className="w-full">
          <iframe
            suppressHydrationWarning
            src="https://api.leadconnectorhq.com/widget/form/okkpZ3dTs2Iw7arapHj3"
            style={{ width: '100%', height: 552, border: 'none', borderRadius: 15 }}
            id="inline-okkpZ3dTs2Iw7arapHj3"
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="5them.com website form"
            data-height="552"
            data-layout-iframe-id="inline-okkpZ3dTs2Iw7arapHj3"
            data-form-id="okkpZ3dTs2Iw7arapHj3"
            title="5them.com website form"
          />
          {/* eslint-disable-next-line @next/next/no-sync-scripts */}
          <script src="https://link.msgsndr.com/js/form_embed.js" async />
        </div>
      </div>
    </div>
  );
}

function IconBubble({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
      style={{ background: 'rgba(0,190,157,.06)', border: '1px solid rgba(0,190,157,.15)' }}
    >
      {children}
    </div>
  );
}

function SocialLink({ href, title, children }: { href: string; title: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      title={title}
      className="w-11 h-11 rounded-xl border border-bd flex items-center justify-center text-tx-2 transition-all hover:border-teal hover:bg-teal-bg hover:text-teal"
    >
      {children}
    </a>
  );
}
