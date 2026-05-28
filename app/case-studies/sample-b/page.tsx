import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import { pageMetadata } from '@/lib/seo';
import { breadcrumbSchema } from '@/lib/schema';
import { auditCTA } from '@/lib/site';

export const metadata: Metadata = pageMetadata({
  title: 'IMAGE Studios - 100% Occupancy in 60 Days (Template B)',
  description:
    'Template B - bento data-dense layout. Sample case study showing how IMAGE Studios Jacksonville reached 100% occupancy in 60 days with hyper-local Meta + Google ads, UGC creative, and the 5E Insight Engine.',
  path: '/case-studies/sample-b',
  noindex: true,
});

const galleryImgs = [
  'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1600&q=80',
  'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1400&q=80',
  'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=1400&q=80',
  'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=1400&q=80',
];

export default function SampleCaseStudyB() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Case Studies', path: '/case-studies' },
          { name: 'IMAGE Studios - Jacksonville', path: '/case-studies/sample-b' },
        ])}
      />

      {/* HERO HEADER - compact, data-forward */}
      <section className="pt-[120px] pb-10 px-6">
        <div className="mx max-w-[1280px] mx-auto">
          <div className="flex items-center gap-2 text-[13px] font-semibold text-tx-3 mb-7">
            <Link href="/" className="hover:text-teal transition-colors">Home</Link>
            <span className="opacity-40">/</span>
            <Link href="/case-studies" className="hover:text-teal transition-colors">Case Studies</Link>
            <span className="opacity-40">/</span>
            <span className="text-tx">IMAGE Studios</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8 items-end">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <img
                  src="https://assets.cdn.filesafe.space/Bvl8985Bn5drFTi6qZJM/media/69c61c11861524201c5c5c6b.png"
                  alt="IMAGE Studios"
                  style={{ height: 32, width: 'auto' }}
                />
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-extrabold uppercase bg-teal-bg border border-teal-bd text-teal" style={{ letterSpacing: '.1em' }}>
                  <span className="w-1.5 h-1.5 rounded-full bg-teal" />
                  Live Case Study
                </span>
              </div>
              <h1 className="font-extrabold mb-5" style={{ fontSize: 'clamp(36px,5.5vw,60px)', letterSpacing: '-.035em', lineHeight: 1.04 }}>
                100% Occupancy. <span className="text-teal">60 Days.</span>
                <br />
                <span className="text-tx-2 font-bold" style={{ fontSize: '.8em' }}>One Jacksonville salon suite franchisee.</span>
              </h1>
              <p className="text-tx-2 max-w-[640px]" style={{ fontSize: 17, lineHeight: 1.6 }}>
                How Elizabeth Cassutti turned 22 empty suites into a fully-leased, waitlisted location with a hyper-local Meta + Google playbook, UGC creative starring herself, and a sub-five-minute speed-to-lead engine.
              </p>
            </div>

            {/* META INFO CARD */}
            <div className="rounded-l border border-bd p-5 bg-off">
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <div className="text-[10px] uppercase font-extrabold text-tx-3 mb-1" style={{ letterSpacing: '.1em' }}>Client</div>
                  <div className="text-sm font-bold text-tx">IMAGE Studios</div>
                </div>
                <div>
                  <div className="text-[10px] uppercase font-extrabold text-tx-3 mb-1" style={{ letterSpacing: '.1em' }}>Vertical</div>
                  <div className="text-sm font-bold text-tx">Salon Suites</div>
                </div>
                <div>
                  <div className="text-[10px] uppercase font-extrabold text-tx-3 mb-1" style={{ letterSpacing: '.1em' }}>Location</div>
                  <div className="text-sm font-bold text-tx">Jacksonville, FL</div>
                </div>
                <div>
                  <div className="text-[10px] uppercase font-extrabold text-tx-3 mb-1" style={{ letterSpacing: '.1em' }}>Engagement</div>
                  <div className="text-sm font-bold text-tx">8 months</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENTO RESULTS GRID */}
      <section className="px-6 pb-10">
        <div className="mx max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-6 gap-3 auto-rows-[minmax(180px,auto)]">
            {/* HEADLINE RESULT - dark, wide */}
            <div
              className="md:col-span-4 md:row-span-2 rounded-l p-8 md:p-10 relative overflow-hidden flex flex-col justify-between"
              style={{ background: 'linear-gradient(135deg,#0F1314 0%,#1D2637 100%)' }}
            >
              <div
                className="absolute -top-20 -right-20 w-[300px] h-[300px] pointer-events-none"
                style={{ background: 'radial-gradient(circle,rgba(0,190,157,.18) 0%,transparent 70%)' }}
              />
              <div className="relative z-10">
                <div className="text-[11px] font-extrabold text-teal uppercase mb-3" style={{ letterSpacing: '.12em' }}>Headline Result</div>
                <div className="text-white font-extrabold leading-none" style={{ fontSize: 'clamp(64px,9vw,128px)', letterSpacing: '-.05em' }}>
                  100<span className="text-teal">%</span>
                </div>
                <div className="text-white/80 font-bold mt-3" style={{ fontSize: 'clamp(18px,2vw,24px)', letterSpacing: '-.01em' }}>
                  Suite occupancy in just 60 days
                </div>
              </div>
              <div className="relative z-10 mt-8">
                <div className="text-[13px] text-white/55 font-medium mb-3">vs. franchise benchmark</div>
                <div className="h-2 rounded-full bg-white/10 overflow-hidden mb-2">
                  <div className="h-full bg-teal rounded-full" style={{ width: '100%' }} />
                </div>
                <div className="flex justify-between text-[11px] font-semibold text-white/60">
                  <div>Day 0</div>
                  <div className="text-teal">100% &middot; Day 60</div>
                  <div>Industry avg: 12-18 mo</div>
                </div>
              </div>
            </div>

            {/* CPL */}
            <div className="md:col-span-2 rounded-l p-7 border border-bd bg-wh">
              <div className="text-[11px] font-extrabold text-tx-3 uppercase mb-3" style={{ letterSpacing: '.12em' }}>CPL</div>
              <div className="text-teal font-extrabold leading-none mb-3" style={{ fontSize: 56, letterSpacing: '-.04em' }}>$11.40</div>
              <div className="text-[13px] text-tx-2 font-medium leading-snug">Average cost per qualified lead</div>
              <div className="mt-4 inline-flex items-center gap-1.5 text-[12px] font-bold text-teal bg-teal-bg border border-teal-bd px-2.5 py-1 rounded-full">
                <span>▼</span> 64% vs baseline
              </div>
            </div>

            {/* LEAD VOLUME */}
            <div className="md:col-span-2 rounded-l p-7 border border-bd bg-wh">
              <div className="text-[11px] font-extrabold text-tx-3 uppercase mb-3" style={{ letterSpacing: '.12em' }}>Lead Volume</div>
              <div className="text-teal font-extrabold leading-none mb-3" style={{ fontSize: 56, letterSpacing: '-.04em' }}>320<span className="text-3xl">/mo</span></div>
              <div className="text-[13px] text-tx-2 font-medium leading-snug">Qualified inquiries, steady state</div>
              <div className="mt-4 flex items-end gap-1 h-7">
                {[20, 35, 45, 55, 70, 85, 90, 95, 100, 98, 102, 100].map((h, i) => (
                  <div key={i} className="flex-1 bg-teal rounded-sm" style={{ height: `${h}%`, opacity: i < 4 ? 0.4 : 1 }} />
                ))}
              </div>
            </div>

            {/* CREATIVE SAVINGS - image */}
            <div className="md:col-span-3 rounded-l border border-bd overflow-hidden relative bg-wh" style={{ minHeight: 280 }}>
              <img src={galleryImgs[0]} alt="Salon suite interior" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg,rgba(15,19,20,.1) 0%,rgba(15,19,20,.85) 100%)' }} />
              <div className="absolute bottom-0 left-0 right-0 p-7 text-white">
                <div className="text-[11px] font-extrabold uppercase mb-2 text-teal" style={{ letterSpacing: '.12em' }}>Creative Production</div>
                <div className="font-extrabold leading-none mb-2" style={{ fontSize: 'clamp(34px,4vw,52px)', letterSpacing: '-.04em' }}>$42K saved</div>
                <div className="text-[13px] text-white/75 font-medium leading-snug">UGC pipeline replaced traditional shoots over the 8-month engagement.</div>
              </div>
            </div>

            {/* SPEED TO LEAD */}
            <div className="md:col-span-3 rounded-l p-7 border border-bd bg-off flex flex-col justify-between" style={{ minHeight: 280 }}>
              <div>
                <div className="text-[11px] font-extrabold text-tx-3 uppercase mb-3" style={{ letterSpacing: '.12em' }}>Speed to Lead</div>
                <div className="flex items-baseline gap-2 mb-3">
                  <div className="text-teal font-extrabold leading-none" style={{ fontSize: 72, letterSpacing: '-.04em' }}>90</div>
                  <div className="text-tx-2 font-bold text-2xl">seconds</div>
                </div>
                <div className="text-[14px] text-tx-2 font-medium leading-snug max-w-[320px]">Average SMS response time from lead form submit to first touch via GoHighLevel.</div>
              </div>
              <div className="grid grid-cols-3 gap-2 mt-6">
                {[
                  { l: 'Form fill', v: '0s' },
                  { l: 'SMS sent', v: '90s' },
                  { l: 'Booked', v: '<5m' },
                ].map(s => (
                  <div key={s.l} className="bg-wh border border-bd rounded-s p-3 text-center">
                    <div className="text-[10px] uppercase font-bold text-tx-3 mb-1" style={{ letterSpacing: '.08em' }}>{s.l}</div>
                    <div className="text-sm font-extrabold text-teal">{s.v}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN BODY w/ STICKY SIDEBAR */}
      <section className="px-6 py-20">
        <div className="mx max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-12">
            {/* MAIN COLUMN */}
            <div>
              {/* CHALLENGE */}
              <div className="mb-16">
                <div className="stag">The Challenge</div>
                <h2 className="font-extrabold mb-5" style={{ fontSize: 'clamp(26px,3vw,36px)', letterSpacing: '-.025em', lineHeight: 1.2 }}>
                  Generic corporate ads. A 90-day runway. 22 empty suites.
                </h2>
                <p className="text-tx-2 mb-4" style={{ fontSize: 17, lineHeight: 1.65 }}>
                  Elizabeth Cassutti signed her IMAGE Studios franchise agreement and had three months to fill her location before opening. The corporate ad templates - the same ones the network ran nationally - generated leads at $31 CPL with a 3% closing rate. At that pace, she would open at roughly 40% occupancy.
                </p>
                <p className="text-tx-2" style={{ fontSize: 17, lineHeight: 1.65 }}>
                  Her market was saturated with established booth-rental chains. The corporate creative felt national, not local. She needed leads that knew her name, her location, and trusted her before the first call.
                </p>
              </div>

              {/* APPROACH - cards */}
              <div className="mb-16">
                <div className="stag">The Approach</div>
                <h2 className="font-extrabold mb-8" style={{ fontSize: 'clamp(26px,3vw,36px)', letterSpacing: '-.025em', lineHeight: 1.2 }}>
                  Five moves that rebuilt the entire funnel.
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { n: '01', t: 'Hyper-local geo split', d: 'Nine zip-code clusters, each with bid adjustments and creative variants. Stopped wasting impressions on out-of-market stylists.' },
                    { n: '02', t: 'UGC starring the franchisee', d: '14 short-form videos featuring Elizabeth, refreshed every two weeks. Local face, local voice, local trust.' },
                    { n: '03', t: 'Speed-to-lead engine', d: '90-second SMS auto-response via GoHighLevel. Booked appointments in under five minutes.' },
                    { n: '04', t: 'Per-zip-code dashboard', d: 'The 5E Insight Engine surfaced winners and losers in real time. Reallocated daily, not monthly.' },
                  ].map(c => (
                    <div key={c.n} className="rounded-l border border-bd p-6 bg-wh hover:border-teal-bd hover:shadow-[0_12px_40px_rgba(0,190,157,.06)] transition-all">
                      <div className="text-teal font-extrabold mb-3" style={{ fontSize: 24, letterSpacing: '-.02em' }}>{c.n}</div>
                      <div className="font-extrabold text-tx mb-2" style={{ fontSize: 17, letterSpacing: '-.01em' }}>{c.t}</div>
                      <div className="text-[14px] text-tx-2 leading-snug">{c.d}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* SCREENSHOTS - dashboard mockups */}
              <div className="mb-16">
                <div className="stag">What She Saw Every Morning</div>
                <h2 className="font-extrabold mb-8" style={{ fontSize: 'clamp(26px,3vw,36px)', letterSpacing: '-.025em', lineHeight: 1.2 }}>
                  Real-time visibility into every dollar.
                </h2>
                <div className="rounded-l p-6 md:p-9" style={{ background: 'linear-gradient(135deg,#0F1314 0%,#1D2637 100%)' }}>
                  <div className="flex justify-between items-center pb-4 mb-5" style={{ borderBottom: '1px solid rgba(255,255,255,.08)' }}>
                    <div className="text-white font-extrabold text-sm" style={{ letterSpacing: '-.01em' }}>Jacksonville &middot; Per-Zip Performance</div>
                    <div className="text-xs font-semibold" style={{ color: 'rgba(255,255,255,.7)', background: 'rgba(255,255,255,.08)', border: '1px solid rgba(255,255,255,.12)', padding: '4px 10px', borderRadius: 6 }}>Last 30 days</div>
                  </div>
                  {[
                    { z: '32256', n: 'Mandarin', w: '94%', v: '$9.40', t: '48 leads' },
                    { z: '32207', n: 'San Marco', w: '88%', v: '$10.80', t: '42 leads' },
                    { z: '32202', n: 'Downtown', w: '79%', v: '$12.20', t: '36 leads' },
                    { z: '32246', n: 'Beach Blvd', w: '72%', v: '$13.60', t: '31 leads' },
                    { z: '32218', n: 'Northside', w: '65%', v: '$15.10', t: '27 leads' },
                  ].map((r, i) => (
                    <div key={i} className="grid items-center gap-3 mb-3" style={{ gridTemplateColumns: '60px 1fr 2fr 70px 70px' }}>
                      <div className="text-white/50 text-[11px] font-mono">{r.z}</div>
                      <div className="text-white text-[13px] font-semibold">{r.n}</div>
                      <div className="h-2 rounded overflow-hidden" style={{ background: 'rgba(255,255,255,.08)' }}>
                        <div className="h-full bg-teal rounded" style={{ width: r.w }} />
                      </div>
                      <div className="text-teal text-[13px] font-bold tabular-nums text-right">{r.v}</div>
                      <div className="text-white/60 text-[11px] font-semibold text-right tabular-nums">{r.t}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* TESTIMONIAL */}
              <div className="rounded-l p-8 md:p-10 mb-16" style={{ background: '#0F1314' }}>
                <div className="text-teal font-extrabold mb-2" style={{ fontSize: 56, lineHeight: 0.3 }}>&ldquo;</div>
                <p className="text-white font-extrabold mb-7" style={{ fontSize: 'clamp(20px,2.2vw,26px)', letterSpacing: '-.02em', lineHeight: 1.35 }}>
                  We reached 100% occupancy within just a couple of months, far above the franchise benchmark - hands down because of Fifth Element.
                </p>
                <div className="flex items-center gap-3 pt-5" style={{ borderTop: '1px solid rgba(255,255,255,.08)' }}>
                  <div className="w-11 h-11 rounded-full bg-teal flex items-center justify-center text-dk font-extrabold">EC</div>
                  <div>
                    <div className="text-white font-bold text-sm">Elizabeth Cassutti</div>
                    <div className="text-white/50 text-[12px] font-medium">Franchisee &middot; IMAGE Studios Jacksonville</div>
                  </div>
                </div>
              </div>

              {/* TIMELINE */}
              <div>
                <div className="stag">The Timeline</div>
                <h2 className="font-extrabold mb-8" style={{ fontSize: 'clamp(26px,3vw,36px)', letterSpacing: '-.025em', lineHeight: 1.2 }}>
                  Eight months. Five inflection points.
                </h2>
                <div className="relative pl-7" style={{ borderLeft: '2px solid #e6e6e6' }}>
                  {[
                    { m: 'Month 1', t: 'Audit + strategy', d: 'Account audit, creative brief, zip-code map.' },
                    { m: 'Month 2', t: 'Campaigns live', d: 'Nine local campaigns and UGC batch 1 deployed.' },
                    { m: 'Month 3', t: 'First 100 leads', d: 'CPL drops below $14. Suites filling fast.' },
                    { m: 'Month 5', t: '100% occupancy', d: 'All 22 suites leased. Waitlist begins.' },
                    { m: 'Month 8', t: 'Case study published', d: 'Steady-state 320+ leads/mo. Second location in planning.' },
                  ].map((s, i) => (
                    <div key={i} className="mb-7 last:mb-0 relative">
                      <div className="absolute -left-9 top-1 w-4 h-4 rounded-full bg-teal border-4 border-wh" />
                      <div className="text-[11px] uppercase font-extrabold text-teal mb-1" style={{ letterSpacing: '.12em' }}>{s.m}</div>
                      <div className="font-extrabold text-tx mb-1.5" style={{ fontSize: 17, letterSpacing: '-.01em' }}>{s.t}</div>
                      <div className="text-[14px] text-tx-2 leading-snug">{s.d}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* SIDEBAR */}
            <aside>
              <div className="sticky top-24 flex flex-col gap-4">
                <div className="rounded-l border border-bd p-6 bg-wh">
                  <div className="text-[11px] uppercase font-extrabold text-tx-3 mb-4" style={{ letterSpacing: '.12em' }}>Quick Facts</div>
                  <div className="space-y-3.5">
                    {[
                      ['Client', 'IMAGE Studios'],
                      ['Vertical', 'Salon Suites'],
                      ['Location', 'Jacksonville, FL'],
                      ['Franchisee', 'Elizabeth Cassutti'],
                      ['Suites', '22'],
                      ['Engagement', '8 months'],
                      ['Channels', 'Meta + Google'],
                    ].map(([k, v]) => (
                      <div key={k} className="flex justify-between items-baseline text-[13px] pb-3 border-b border-bd last:border-0 last:pb-0">
                        <div className="text-tx-3 font-medium">{k}</div>
                        <div className="text-tx font-bold text-right">{v}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-l p-6" style={{ background: 'linear-gradient(135deg,#0F1314 0%,#1D2637 100%)' }}>
                  <div className="text-[11px] uppercase font-extrabold text-teal mb-3" style={{ letterSpacing: '.12em' }}>Tools Deployed</div>
                  <div className="flex flex-col gap-2">
                    {['Meta Ads', 'Google Ads', 'GoHighLevel', '5E Insight Engine', 'UGC Creative Engine'].map(t => (
                      <div key={t} className="text-[13px] text-white font-semibold py-2 px-3 rounded-s" style={{ background: 'rgba(255,255,255,.06)', border: '1px solid rgba(255,255,255,.08)' }}>
                        {t}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-l border border-teal-bd bg-teal-bg p-6">
                  <div className="text-[11px] uppercase font-extrabold text-teal mb-3" style={{ letterSpacing: '.12em' }}>Want this for your brand?</div>
                  <div className="text-[14px] text-tx font-bold mb-4 leading-snug">Free 45-min audit. 3+ improvements or we send you $100.</div>
                  <a href={auditCTA.href} className="bp w-full justify-center">Book Free Audit →</a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* IMAGE GALLERY - 3-up */}
      <section className="px-6 pb-24">
        <div className="mx max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {galleryImgs.slice(1).map((src, i) => (
              <div key={i} className="rounded-l overflow-hidden" style={{ aspectRatio: '4 / 5' }}>
                <img src={src} alt={`Studio gallery ${i + 1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24">
        <div className="mx max-w-[1100px] mx-auto">
          <div
            className="rounded-l p-10 md:p-14 text-center relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg,#0F1314 0%,#1D2637 100%)' }}
          >
            <div className="absolute -top-20 -right-20 w-[300px] h-[300px] pointer-events-none" style={{ background: 'radial-gradient(circle,rgba(0,190,157,.18) 0%,transparent 70%)' }} />
            <div className="relative z-10">
              <h2 className="font-extrabold text-white mb-4" style={{ fontSize: 'clamp(28px,3.8vw,44px)', letterSpacing: '-.025em', lineHeight: 1.15 }}>
                Your franchise. Same playbook.
              </h2>
              <p className="text-white/65 mb-8 max-w-[600px] mx-auto" style={{ fontSize: 17, lineHeight: 1.55 }}>
                Book a free audit and we&apos;ll show you the exact moves that worked for IMAGE Studios - mapped to your brand and market.
              </p>
              <a href={auditCTA.href} className="bp bpl">Book Your Free Audit →</a>
            </div>
          </div>
        </div>
      </section>

      {/* NEXT / BACK */}
      <section className="px-6 pb-24">
        <div className="mx max-w-[1100px] mx-auto flex justify-between items-center pt-10 border-t border-bd">
          <Link href="/case-studies/sample-a" className="text-[15px] font-semibold text-tx-2 hover:text-teal transition-colors">
            ← View Layout A
          </Link>
          <Link href="/case-studies" className="text-[15px] font-semibold text-tx-2 hover:text-teal transition-colors">
            All Case Studies →
          </Link>
        </div>
      </section>
    </>
  );
}
