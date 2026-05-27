import type { Metadata } from 'next';
import { WaitlistButton, NewsletterToast } from '@/components/BlogWaitlistButton';
import upcoming from '@/content/upcoming-posts.json';
import JsonLd from '@/components/JsonLd';
import { pageMetadata } from '@/lib/seo';
import { breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = pageMetadata({
  title: 'Franchise Marketing Blog (Launching Soon)',
  description:
    'The 5th Element Media blog launches soon. Real franchise marketing insights, tactical breakdowns, and case studies from 100+ locations. Join the waitlist.',
  path: '/blog',
  keywords: ['franchise marketing blog', 'franchise lead generation tips', 'multi-location marketing insights'],
});

export default function BlogPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Blog', path: '/blog' },
        ])}
      />
      {/* HERO */}
      <section
        className="px-6 pt-[100px] pb-[60px]"
        style={{ background: 'linear-gradient(180deg,#F7F7F7 0%,#FFFFFF 100%)' }}
      >
        <div className="max-w-[820px] mx-auto text-center">
          <div className="stag inline-block">The 5EM Blog</div>
          <h1
            className="font-extrabold text-tx mb-5 mt-5"
            style={{ fontSize: 'clamp(38px,5.5vw,62px)', letterSpacing: '-.03em', lineHeight: 1.08 }}
          >
            Franchise Marketing, Decoded.
          </h1>
          <p className="text-[18px] leading-[1.55] text-tx-2 font-medium max-w-[640px] mx-auto">
            Tactical breakdowns, data-driven insights, and real-world playbooks from managing 100+ franchise locations. No fluff. Just what&apos;s working right now.
          </p>
        </div>
      </section>

      {/* COMING SOON HERO CARD */}
      <section className="px-6 bg-wh pt-10 pb-20">
        <div className="mx max-w-mx mx-auto">
          <div
            className="max-w-[880px] mx-auto rounded-[22px] relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg,#0F1314 0%,#1D2637 100%)',
              border: '1px solid rgba(0,190,157,.2)',
              boxShadow: '0 20px 60px rgba(0,0,0,.1)',
              padding: 'clamp(36px,5vw,56px) clamp(24px,4vw,48px)',
            }}
          >
            <div
              className="absolute pointer-events-none"
              style={{
                top: -60,
                right: -60,
                width: 220,
                height: 220,
                background: 'radial-gradient(circle,rgba(0,190,157,.15) 0%,transparent 70%)',
              }}
            />
            <div
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-extrabold uppercase mb-5 relative z-10"
              style={{
                background: 'rgba(0,190,157,.12)',
                border: '1px solid rgba(0,190,157,.35)',
                color: '#00BE9D',
                letterSpacing: '.14em',
              }}
            >
              <span className="w-[7px] h-[7px] rounded-full bg-teal animate-pu" />
              In Production
            </div>
            <h2
              className="font-extrabold text-white mb-4 relative z-10"
              style={{ fontSize: 'clamp(34px,4.5vw,52px)', letterSpacing: '-.03em', lineHeight: 1.1 }}
            >
              The Blog Is Brewing.
            </h2>
            <p
              className="text-[17px] leading-[1.55] font-medium max-w-[640px] mb-9 relative z-10"
              style={{ color: 'rgba(255,255,255,.75)' }}
            >
              We&apos;re writing tactical breakdowns, real case studies, and franchise marketing playbooks built from what actually works across our 100+ franchise locations. Launching soon. No fluff, no recycled AI slop - just the real stuff.
            </p>

            <div
              className="p-7 rounded-[14px] mb-8 relative z-10"
              style={{ background: 'rgba(255,255,255,.04)', border: '1px solid rgba(255,255,255,.08)' }}
            >
              <div
                className="text-[11px] font-extrabold text-teal mb-4 uppercase"
                style={{ letterSpacing: '.14em' }}
              >
                Coming up first:
              </div>
              <div className="flex flex-col gap-3.5">
                {upcoming.map(item => (
                  <div
                    key={item.num}
                    className="flex gap-4 items-start p-3.5 rounded-[10px] transition-all"
                    style={{ background: 'rgba(255,255,255,.03)', border: '1px solid rgba(255,255,255,.06)' }}
                  >
                    <div
                      className="text-[13px] font-extrabold text-teal flex-shrink-0 w-7 tabular-nums"
                      style={{ letterSpacing: '.04em', paddingTop: 1 }}
                    >
                      {item.num}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div
                        className="text-[14px] font-bold text-white mb-1"
                        style={{ letterSpacing: '-.01em', lineHeight: 1.35 }}
                      >
                        {item.title}
                      </div>
                      <div
                        className="text-[11px] font-bold uppercase"
                        style={{ color: 'rgba(255,255,255,.55)', letterSpacing: '.04em' }}
                      >
                        {item.category}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="flex items-center justify-between gap-5 flex-wrap pt-7 relative z-10"
              style={{ borderTop: '1px solid rgba(255,255,255,.08)' }}
            >
              <div
                className="text-[15px] font-semibold flex-1 min-w-[200px]"
                style={{ color: 'rgba(255,255,255,.85)', letterSpacing: '-.01em' }}
              >
                Want these in your inbox the moment they drop?
              </div>
              <WaitlistButton className="bp bpl">Join the Waitlist →</WaitlistButton>
            </div>
          </div>
        </div>
      </section>

      {/* NEWSLETTER CTA */}
      <section className="px-6 bg-wh py-20">
        <div className="mx max-w-mx mx-auto">
          <div
            className="rounded-[20px] max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-10 items-center"
            style={{
              background: 'linear-gradient(135deg,#0F1314 0%,#1D2637 100%)',
              padding: 'clamp(36px,4vw,52px) clamp(28px,4vw,48px)',
            }}
          >
            <div>
              <div
                className="stag inline-block"
                style={{
                  color: '#fff',
                  background: 'rgba(0,190,157,.2)',
                  border: '1px solid rgba(0,190,157,.4)',
                  padding: '4px 12px',
                  borderRadius: 100,
                }}
              >
                Weekly Newsletter
              </div>
              <h2
                className="font-extrabold text-white mt-4 mb-3.5"
                style={{ fontSize: 'clamp(26px,3vw,38px)', letterSpacing: '-.02em', lineHeight: 1.15 }}
              >
                Get The Franchise Marketing Insider
              </h2>
              <p
                className="text-[15px] leading-[1.55] font-medium"
                style={{ color: 'rgba(255,255,255,.7)' }}
              >
                Tactical breakdowns, what&apos;s working right now, and the playbooks we use with 100+ franchise locations. Delivered every Wednesday.
              </p>
            </div>
            <div className="flex flex-col gap-2.5 items-start">
              <WaitlistButton className="bp bpl">Subscribe Free →</WaitlistButton>
              <div className="text-[12px] font-semibold" style={{ color: 'rgba(255,255,255,.5)' }}>
                No spam. Unsubscribe any time.
              </div>
            </div>
          </div>
        </div>
      </section>

      <NewsletterToast />
    </>
  );
}
