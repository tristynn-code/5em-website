import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import MediaEmbed from '@/components/MediaEmbed';
import { pageMetadata } from '@/lib/seo';
import { breadcrumbSchema } from '@/lib/schema';
import { auditCTA } from '@/lib/site';

export const metadata: Metadata = pageMetadata({
  title: 'IMAGE Studios - 100% Occupancy in 60 Days (Template A)',
  description:
    'Template A - editorial layout. Sample case study showing how IMAGE Studios Jacksonville reached 100% occupancy in 60 days with hyper-local Meta + Google ads, UGC creative, and the 5E Insight Engine.',
  path: '/case-studies/sample-a',
  noindex: true,
});

const heroImg =
  'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=2000&q=80';
const galleryImgs = [
  'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1400&q=80',
  'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=1400&q=80',
  'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=1400&q=80',
];

export default function SampleCaseStudyA() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Case Studies', path: '/case-studies' },
          { name: 'IMAGE Studios - Jacksonville', path: '/case-studies/sample-a' },
        ])}
      />

      {/* HERO - editorial full-bleed image w/ overlaid title */}
      <section className="relative pt-[120px]">
        <div className="mx px-6">
          <div className="max-w-[920px] mx-auto">
            <div className="flex items-center gap-2 text-[13px] font-semibold text-tx-3 mb-8">
              <Link href="/" className="hover:text-teal transition-colors">Home</Link>
              <span className="opacity-40">/</span>
              <Link href="/case-studies" className="hover:text-teal transition-colors">Case Studies</Link>
              <span className="opacity-40">/</span>
              <span className="text-tx">IMAGE Studios</span>
            </div>
            <div className="flex items-center gap-3 mb-7">
              <img
                src="https://assets.cdn.filesafe.space/Bvl8985Bn5drFTi6qZJM/media/69c61c11861524201c5c5c6b.png"
                alt="IMAGE Studios"
                style={{ height: 36, width: 'auto' }}
              />
              <div className="h-5 w-px bg-bd" />
              <div className="text-[13px] uppercase font-semibold text-tx-3" style={{ letterSpacing: '.1em' }}>
                Salon Suites &middot; Jacksonville, FL
              </div>
            </div>
            <h1
              className="font-extrabold mb-7"
              style={{ fontSize: 'clamp(40px,6vw,72px)', letterSpacing: '-.035em', lineHeight: 1.04 }}
            >
              From Empty Suites to <em className="not-italic text-teal">100% Occupancy</em> in Sixty Days.
            </h1>
            <p className="text-tx-2 max-w-[680px]" style={{ fontSize: 'clamp(18px,1.7vw,21px)', lineHeight: 1.55 }}>
              How a brand-new IMAGE Studios location in Jacksonville filled every suite before competitors knew it existed - with hyper-local Meta + Google ads, a UGC pipeline starring the franchisee herself, and a speed-to-lead engine that closed deals in under five minutes.
            </p>
            <div className="flex flex-wrap items-center gap-x-7 gap-y-3 mt-9 pt-7 border-t border-bd text-[13px] text-tx-3">
              <div>
                <span className="text-tx font-semibold">Published</span> &middot; May 2026
              </div>
              <div>
                <span className="text-tx font-semibold">Engagement</span> &middot; 8 months
              </div>
              <div>
                <span className="text-tx font-semibold">Reading time</span> &middot; 7 min
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 px-6">
          <div className="mx max-w-[1400px] mx-auto">
            <div className="rounded-l overflow-hidden relative" style={{ aspectRatio: '21 / 9' }}>
              <img src={heroImg} alt="IMAGE Studios salon suite interior" className="w-full h-full object-cover" />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: 'linear-gradient(180deg,transparent 55%,rgba(15,19,20,.55) 100%)' }}
              />
              <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-center justify-between gap-4 text-white">
                <div className="text-[13px] font-semibold uppercase" style={{ letterSpacing: '.12em' }}>
                  IMAGE Studios &middot; Jacksonville
                </div>
                <div className="text-[12px] font-medium opacity-80">
                  Photo: Editorial sample
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RESULTS STRIP - editorial typographic */}
      <section className="px-6 py-20 mt-4">
        <div className="mx max-w-[1100px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6">
            {[
              { v: '100%', l: 'Occupancy in 60 days', s: 'Industry avg: 12-18 mo' },
              { v: '320+', l: 'Qualified leads / month', s: 'Steady-state' },
              { v: '$11.40', l: 'Average cost per lead', s: 'Down 64% from baseline' },
              { v: '$42K', l: 'Saved on creative', s: 'Vs. traditional shoots' },
            ].map((s, i) => (
              <div key={i} className="text-center md:text-left md:border-l md:first:border-l-0 md:pl-6 md:first:pl-0 border-bd">
                <div className="text-teal font-extrabold leading-none mb-3" style={{ fontSize: 'clamp(38px,4.5vw,56px)', letterSpacing: '-.04em' }}>
                  {s.v}
                </div>
                <div className="text-[15px] font-bold text-tx mb-1">{s.l}</div>
                <div className="text-xs text-tx-3 font-medium">{s.s}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ARTICLE BODY - magazine */}
      <article className="px-6 pb-10">
        <div className="mx max-w-[760px] mx-auto">
          {/* Section: Challenge */}
          <div className="stag">The Challenge</div>
          <h2 className="font-extrabold mb-6" style={{ fontSize: 'clamp(28px,3.5vw,40px)', letterSpacing: '-.025em', lineHeight: 1.15 }}>
            A new location, a crowded market, and generic ads that wouldn&apos;t move the needle.
          </h2>
          <p className="text-tx-2 mb-6" style={{ fontSize: 18, lineHeight: 1.75 }}>
            When Elizabeth Cassutti signed her IMAGE Studios franchise agreement, she had a 90-day runway to fill 22 salon suites in a market saturated with established booth-rental shops. The corporate ad templates - the same ones running across the network - were generating leads at $31 CPL, with a 3% closing rate. At that pace, she would open at 40% occupancy.
          </p>
          <p className="text-tx-2 mb-10" style={{ fontSize: 18, lineHeight: 1.75 }}>
            The leads that did come in were generic - stylists shopping every suite chain in town, never converting. Worse, the corporate creative felt like a national brand, not a local studio Elizabeth was about to operate herself. She needed leads that knew her name, knew her location, and trusted her before the first phone call.
          </p>

          {/* Image inline */}
          <figure className="my-12">
            <div className="rounded-l overflow-hidden" style={{ aspectRatio: '16 / 9' }}>
              <img src={galleryImgs[0]} alt="Hair stylist working in salon suite" className="w-full h-full object-cover" />
            </div>
            <figcaption className="text-[13px] text-tx-3 mt-3 italic text-center">
              A stylist working out of an IMAGE Studios suite in the Jacksonville market.
            </figcaption>
          </figure>

          {/* Section: Approach */}
          <div className="stag">The Approach</div>
          <h2 className="font-extrabold mb-6" style={{ fontSize: 'clamp(28px,3.5vw,40px)', letterSpacing: '-.025em', lineHeight: 1.15 }}>
            Hyper-local ads, the franchisee as the face of the brand, and a five-minute response time.
          </h2>
          <p className="text-tx-2 mb-6" style={{ fontSize: 18, lineHeight: 1.75 }}>
            We rebuilt the entire funnel from the suite up. Instead of national IMAGE Studios creative, we ran ads featuring Elizabeth - her face, her voice, her promise to local stylists. Instead of one campaign for all of Jacksonville, we split it into nine zip-code clusters with bid adjustments and creative variants per neighborhood.
          </p>
          <p className="text-tx-2 mb-6" style={{ fontSize: 18, lineHeight: 1.75 }}>
            Every lead hit her GoHighLevel pipeline and triggered an SMS within 90 seconds. The 5E Insight Engine fed a real-time dashboard that showed her, by zip code, which creatives were winning and which were burning budget.
          </p>

          {/* Pull quote */}
          <blockquote className="my-12 border-l-4 border-teal pl-7 py-4">
            <p className="font-extrabold mb-5" style={{ fontSize: 'clamp(22px,2.5vw,30px)', letterSpacing: '-.02em', lineHeight: 1.3 }}>
              &ldquo;Within three weeks we knew which neighborhoods would fill first and which needed a creative refresh. We had never had that kind of visibility before.&rdquo;
            </p>
            <div className="text-[14px] text-tx-3 font-semibold">
              <span className="text-tx">Elizabeth Cassutti</span> &middot; Franchisee, IMAGE Studios Jacksonville
            </div>
          </blockquote>

          {/* Bullet list */}
          <h3 className="text-2xl font-extrabold mb-5 mt-12" style={{ letterSpacing: '-.02em' }}>What we deployed in the first 60 days</h3>
          <ul className="space-y-3 text-tx-2 mb-10" style={{ fontSize: 17, lineHeight: 1.6 }}>
            {[
              ['Meta + Google Ads', '9 hyper-local campaigns split by zip-code cluster, each with creative variants and bid ladders.'],
              ['UGC Creative Pipeline', '14 short-form videos featuring Elizabeth herself, refreshed every two weeks.'],
              ['GoHighLevel CRM', 'Automated speed-to-lead SMS + appointment booking within 90 seconds.'],
              ['5E Insight Engine', 'Real-time per-zip-code performance dashboard - what is converting, what is burning.'],
              ['UGC Creative Engine', 'Library of plug-and-play templates the franchisee could iterate on weekly.'],
            ].map(([h, b]) => (
              <li key={h} className="flex gap-4">
                <div className="w-6 h-6 rounded-full bg-teal-bg border border-teal-bd text-teal flex items-center justify-center text-[11px] font-extrabold flex-shrink-0 mt-0.5">✓</div>
                <div>
                  <span className="font-bold text-tx">{h}.</span> {b}
                </div>
              </li>
            ))}
          </ul>

          {/* Image two-up */}
          <div className="grid grid-cols-2 gap-4 my-12">
            <div className="rounded-l overflow-hidden" style={{ aspectRatio: '1 / 1' }}>
              <img src={galleryImgs[1]} alt="Salon styling chair detail" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-l overflow-hidden" style={{ aspectRatio: '1 / 1' }}>
              <img src={galleryImgs[2]} alt="Beauty professional workspace" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* MID-ARTICLE CTA CARD */}
          <div className="my-14 rounded-l p-8 md:p-10 relative overflow-hidden" style={{ background: 'linear-gradient(135deg,#0F1314 0%,#1D2637 100%)' }}>
            <div className="absolute -top-20 -right-20 w-[260px] h-[260px] pointer-events-none" style={{ background: 'radial-gradient(circle,rgba(0,190,157,.18) 0%,transparent 70%)' }} />
            <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-6">
              <div className="flex-1">
                <div className="text-[11px] uppercase font-extrabold text-teal mb-3" style={{ letterSpacing: '.12em' }}>Free Audit</div>
                <div className="text-white font-extrabold mb-2" style={{ fontSize: 'clamp(22px,2.5vw,28px)', letterSpacing: '-.02em', lineHeight: 1.2 }}>
                  Want us to audit your franchise ad account?
                </div>
                <div className="text-white/70 text-[15px] leading-snug">
                  45 minutes. 3+ improvements. $100 gift card guarantee if we can&apos;t find them.
                </div>
              </div>
              <a href={auditCTA.href} className="bp bpl flex-shrink-0">Book Free Audit →</a>
            </div>
          </div>

          {/* Results section */}
          <div className="stag">The Results</div>
          <h2 className="font-extrabold mb-6" style={{ fontSize: 'clamp(28px,3.5vw,40px)', letterSpacing: '-.025em', lineHeight: 1.15 }}>
            Every suite leased before opening day. Then it just kept compounding.
          </h2>
          <p className="text-tx-2 mb-6" style={{ fontSize: 18, lineHeight: 1.75 }}>
            By month two, all 22 suites were leased - more than a year ahead of the franchise benchmark. Lead volume held at 320+ qualified inquiries per month, and CPL settled at $11.40, a 64% reduction against the original corporate baseline. The UGC pipeline replaced an estimated $42K in traditional creative production over the 8-month engagement.
          </p>
          <p className="text-tx-2 mb-10" style={{ fontSize: 18, lineHeight: 1.75 }}>
            Eight months in, Elizabeth had a four-deep waitlist and was already scouting a second location.
          </p>
        </div>
      </article>

      {/* TIMELINE - dark section */}
      <section className="px-6 py-24" style={{ background: '#0F1314' }}>
        <div className="mx max-w-[1000px] mx-auto">
          <div className="stag text-teal">The Timeline</div>
          <h2 className="font-extrabold text-white mb-12" style={{ fontSize: 'clamp(28px,3.5vw,40px)', letterSpacing: '-.025em', lineHeight: 1.15 }}>
            8 Months. 5 Inflection Points.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              { m: 'Month 1', t: 'Audit + strategy', d: 'Account audit, creative brief, zip-code map' },
              { m: 'Month 2', t: 'Campaigns live', d: '9 local campaigns + UGC batch 1 deploy' },
              { m: 'Month 3', t: 'First 100 leads', d: 'CPL drops below $14, suites filling fast' },
              { m: 'Month 5', t: '100% occupancy', d: 'All 22 suites leased, waitlist begins' },
              { m: 'Month 8', t: 'Case study', d: 'Steady-state 320+ leads/mo, second location planning' },
            ].map((s, i) => (
              <div
                key={i}
                className="rounded-s p-5 relative"
                style={{ background: 'rgba(255,255,255,.04)', border: '1px solid rgba(255,255,255,.08)' }}
              >
                <div className="text-[11px] font-extrabold text-teal uppercase mb-2" style={{ letterSpacing: '.12em' }}>{s.m}</div>
                <div className="text-base font-extrabold text-white mb-2" style={{ letterSpacing: '-.01em' }}>{s.t}</div>
                <div className="text-[13px] text-white/55 leading-snug">{s.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL - editorial pull quote + video embed, light */}
      <section className="px-6 py-24 bg-off">
        <div className="mx max-w-[900px] mx-auto text-center">
          <div className="text-teal font-extrabold mb-6" style={{ fontSize: 72, lineHeight: 0.5 }}>&ldquo;</div>
          <p className="font-extrabold mb-8 text-tx" style={{ fontSize: 'clamp(24px,3vw,36px)', letterSpacing: '-.025em', lineHeight: 1.3 }}>
            We reached 100% occupancy within just a couple of months, far above the franchise benchmark - hands down because of Fifth Element.
          </p>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 rounded-full bg-teal flex items-center justify-center text-dk font-extrabold text-lg">EC</div>
            <div className="text-left">
              <div className="font-bold text-tx">Elizabeth Cassutti</div>
              <div className="text-[13px] text-tx-3">Franchisee &middot; IMAGE Studios Jacksonville</div>
            </div>
          </div>

          {/* DEMO: Testimonial video embed - large size. Drop a real YouTube/Loom URL here in the real CMS. */}
          <MediaEmbed
            src="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            alt="Elizabeth Cassutti video testimonial - IMAGE Studios Jacksonville"
            size="lg"
            caption="Watch Elizabeth share the full story - 8 months from launch audit to 100% occupancy."
          />
        </div>
      </section>

      {/* TOOLS DEPLOYED */}
      <section className="px-6 py-20 bg-wh">
        <div className="mx max-w-[1100px] mx-auto">
          <div className="stag">Tools Deployed</div>
          <h2 className="sttl">The Stack Behind the Results</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mt-10">
            {['Meta Ads', 'Google Ads', 'GoHighLevel', '5E Insight Engine', 'UGC Creative Engine'].map(t => (
              <div key={t} className="border border-bd rounded-s py-5 px-4 text-center font-bold text-tx hover:border-teal hover:text-teal transition-all">
                {t}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24">
        <div className="mx max-w-[1100px] mx-auto">
          <div
            className="rounded-l p-10 md:p-16 text-center relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg,#0F1314 0%,#1D2637 100%)' }}
          >
            <div
              className="absolute -top-20 -right-20 w-[300px] h-[300px] pointer-events-none"
              style={{ background: 'radial-gradient(circle,rgba(0,190,157,.18) 0%,transparent 70%)' }}
            />
            <div className="relative z-10">
              <h2 className="font-extrabold text-white mb-4" style={{ fontSize: 'clamp(28px,3.8vw,44px)', letterSpacing: '-.025em', lineHeight: 1.15 }}>
                Want results like this for your franchise?
              </h2>
              <p className="text-white/65 mb-8 max-w-[600px] mx-auto" style={{ fontSize: 17, lineHeight: 1.55 }}>
                Book your free 45-minute audit. We&apos;ll screen-share your accounts and show you exactly what we&apos;d do.
              </p>
              <a href={auditCTA.href} className="bp bpl">Book Your Free Audit →</a>
            </div>
          </div>
        </div>
      </section>

      {/* NEXT / BACK */}
      <section className="px-6 pb-24">
        <div className="mx max-w-[1100px] mx-auto flex justify-between items-center pt-10 border-t border-bd">
          <Link href="/case-studies" className="text-[15px] font-semibold text-tx-2 hover:text-teal transition-colors">
            ← All Case Studies
          </Link>
          <a href={auditCTA.href} className="text-[15px] font-semibold text-teal hover:gap-2 inline-flex items-center gap-1 transition-all">
            Book Your Free Audit →
          </a>
        </div>
      </section>
    </>
  );
}
