import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import { pageMetadata } from '@/lib/seo';
import { breadcrumbSchema } from '@/lib/schema';
import { auditCTA } from '@/lib/site';

export const metadata: Metadata = pageMetadata({
  title: 'How to Cut Franchise CPL by 40% with UGC (Template B)',
  description:
    'Template B - magazine layout with TOC sidebar + related posts rail. Sample blog post on cutting franchise cost-per-lead by 40% with UGC creative.',
  path: '/blog/sample-b',
  noindex: true,
});

const cover = 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=2000&q=80';
const authorPhoto = 'https://cdn.prod.website-files.com/68f669a6d79edc75f34470f3/693381ab68f812e3e12cf6fa__DSC1638%20Large.jpeg';
const inlineImg = 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1400&q=80';

const sections = [
  { id: 'mistake', n: '01', t: 'The $42K Mistake' },
  { id: 'stock', n: '02', t: 'Why Stock Stopped Working' },
  { id: 'pipeline', n: '03', t: 'The UGC Pipeline' },
  { id: 'playbook', n: '04', t: '5-Step Playbook' },
  { id: 'results', n: '05', t: 'The Results' },
];

const related = [
  {
    tag: 'Local SEO',
    title: 'Why Every Franchise Location Needs Its Own GBP Strategy',
    read: '5 min',
  },
  {
    tag: 'Reporting',
    title: 'The Multi-Location KPI Dashboard Every Franchisor Should Build',
    read: '8 min',
  },
  {
    tag: 'Speed to Lead',
    title: '90 Seconds or Lose the Lead: A Franchise SMS Playbook',
    read: '4 min',
  },
  {
    tag: 'Case Study',
    title: 'IMAGE Studios: 100% Occupancy in 60 Days',
    read: '7 min',
  },
];

export default function SampleBlogB() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Blog', path: '/blog' },
          { name: 'How to Cut Franchise CPL by 40% with UGC', path: '/blog/sample-b' },
        ])}
      />

      {/* HEADER - compact magazine */}
      <section className="pt-[120px] pb-10 px-6 bg-off">
        <div className="mx max-w-[1280px] mx-auto">
          <div className="flex items-center gap-2 text-[13px] font-semibold text-tx-3 mb-7">
            <Link href="/" className="hover:text-teal transition-colors">Home</Link>
            <span className="opacity-40">/</span>
            <Link href="/blog" className="hover:text-teal transition-colors">Blog</Link>
            <span className="opacity-40">/</span>
            <span className="text-tx truncate">UGC Creative</span>
          </div>
          <div className="max-w-[860px]">
            <Link
              href="/blog"
              className="inline-block text-[11px] uppercase font-extrabold text-teal bg-teal-bg border border-teal-bd px-3 py-1.5 rounded-full mb-5 hover:bg-teal hover:text-dk transition-colors"
              style={{ letterSpacing: '.12em' }}
            >
              Paid Ads
            </Link>
            <h1 className="font-extrabold mb-5" style={{ fontSize: 'clamp(32px,4.5vw,52px)', letterSpacing: '-.035em', lineHeight: 1.06 }}>
              How to Cut Franchise CPL by 40% with UGC Creative (Without Reshooting Everything)
            </h1>
            <p className="text-tx-2 mb-7" style={{ fontSize: 19, lineHeight: 1.5 }}>
              Stock creative is dying. UGC is winning. Here is the exact pipeline we use across 12 franchise brands to drop CPL without burning a 5-figure production budget.
            </p>
            <div className="flex items-center gap-3 flex-wrap">
              <img src={authorPhoto} alt="Tristynn McGowan" className="w-10 h-10 rounded-full object-cover" />
              <div className="text-[14px] font-semibold text-tx">Tristynn McGowan</div>
              <span className="text-tx-3">&middot;</span>
              <div className="text-[13px] text-tx-3 font-medium">May 15, 2026</div>
              <span className="text-tx-3">&middot;</span>
              <div className="text-[13px] text-tx-3 font-medium">6 min read</div>
            </div>
          </div>
        </div>
      </section>

      {/* COVER */}
      <section className="px-6 -mt-2">
        <div className="mx max-w-[1280px] mx-auto">
          <div className="rounded-l overflow-hidden" style={{ aspectRatio: '21 / 8' }}>
            <img src={cover} alt="Phone filming UGC content for a franchise ad" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* 3-COLUMN BODY: TOC | Article | Related */}
      <section className="px-6 py-16">
        <div className="mx max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-10">
            {/* TOC SIDEBAR LEFT */}
            <aside className="hidden lg:block">
              <div className="sticky top-24">
                <div className="text-[11px] uppercase font-extrabold text-tx-3 mb-4" style={{ letterSpacing: '.12em' }}>Contents</div>
                <ul className="space-y-1.5">
                  {sections.map((s, i) => (
                    <li key={s.id}>
                      <a
                        href={`#${s.id}`}
                        className={`flex gap-3 py-2 text-[13px] font-semibold transition-colors hover:text-teal ${i === 0 ? 'text-teal border-l-2 border-teal pl-3 -ml-px' : 'text-tx-2 pl-3'}`}
                      >
                        <span className="text-tx-3 tabular-nums">{s.n}</span>
                        <span>{s.t}</span>
                      </a>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-6 border-t border-bd">
                  <div className="text-[11px] uppercase font-extrabold text-tx-3 mb-3" style={{ letterSpacing: '.12em' }}>Share</div>
                  <div className="flex gap-2">
                    {['Twitter', 'LinkedIn', 'Copy'].map(s => (
                      <button key={s} className="text-[12px] font-bold text-tx-2 border border-bd rounded-s px-3 py-1.5 hover:border-teal hover:text-teal transition-colors">
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mt-8 p-5 rounded-l border border-teal-bd bg-teal-bg">
                  <div className="text-[11px] uppercase font-extrabold text-teal mb-2" style={{ letterSpacing: '.12em' }}>Newsletter</div>
                  <div className="text-[13px] text-tx font-bold leading-snug mb-3">Get tactical breakdowns like this every Wednesday.</div>
                  <a href="/blog" className="text-[12px] font-extrabold text-teal hover:underline">Subscribe Free →</a>
                </div>
              </div>
            </aside>

            {/* MAIN ARTICLE - middle */}
            <article className="min-w-0 max-w-[680px] lg:max-w-none">
              <p className="mb-6 text-tx" style={{ fontSize: 19, lineHeight: 1.65, fontWeight: 500 }}>
                Last quarter, one of our salon-suite franchisees called frantic. Her CPL had ballooned to $31 across all locations. She had just dropped $42K on a glossy brand shoot - and the new ads were performing worse than the iPhone footage we tested as filler.
              </p>
              <p className="mb-10 text-tx-2" style={{ fontSize: 17, lineHeight: 1.7 }}>
                That single conversation triggered the audit we are sharing today. By the end of the next quarter, her CPL was $11.40 - a 63% drop. We replicated the same pipeline across 11 more brands. Average network-wide CPL reduction: 40%. Here is exactly how.
              </p>

              {/* H2 - section 01 */}
              <h2 id="mistake" className="font-extrabold mt-12 mb-5 text-tx scroll-mt-24" style={{ fontSize: 'clamp(24px,2.8vw,32px)', letterSpacing: '-.025em', lineHeight: 1.2 }}>
                <span className="text-teal font-extrabold mr-3">01.</span>
                The $42K Mistake Most Franchise Brands Are Making
              </h2>
              <p className="mb-5 text-tx-2" style={{ fontSize: 17, lineHeight: 1.7 }}>
                Most franchise brands still treat creative production like it&apos;s 2017. They schedule an annual brand shoot - models, agency, half-day studio rental, post-production - and roll the assets out to every market. The output looks beautiful. The performance is mediocre at best.
              </p>
              <p className="mb-5 text-tx-2" style={{ fontSize: 17, lineHeight: 1.7 }}>
                Meta&apos;s algorithm has been signaling for two years what the data now confirms: vertical, native, raw-feeling UGC outperforms produced creative on a per-dollar basis for nearly every franchise vertical we test. The polish that costs $42K is the same polish the algorithm de-prioritizes.
              </p>
              <p className="mb-8 text-tx-2" style={{ fontSize: 17, lineHeight: 1.7 }}>
                The mistake isn&apos;t the brand shoot. It&apos;s using the brand shoot as the primary paid-social asset. Brand shoots belong on the website and in OOH. UGC belongs in the ad account.
              </p>

              {/* H2 - section 02 */}
              <h2 id="stock" className="font-extrabold mt-12 mb-5 text-tx scroll-mt-24" style={{ fontSize: 'clamp(24px,2.8vw,32px)', letterSpacing: '-.025em', lineHeight: 1.2 }}>
                <span className="text-teal font-extrabold mr-3">02.</span>
                Why Stock Creative Stopped Working in 2024
              </h2>
              <p className="mb-5 text-tx-2" style={{ fontSize: 17, lineHeight: 1.7 }}>
                Three things shifted between 2022 and 2024 that made stock and polished creative materially worse on paid social:
              </p>
              <ul className="mb-8 space-y-3 text-tx-2" style={{ fontSize: 17, lineHeight: 1.55 }}>
                <li className="flex gap-4">
                  <span className="text-teal font-extrabold flex-shrink-0">→</span>
                  <span><strong className="text-tx font-bold">Algorithmic preference for native formats.</strong> Reels and Shorts dominate the impression supply. Stock landscape creative gets compressed, downranked, and skipped.</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-teal font-extrabold flex-shrink-0">→</span>
                  <span><strong className="text-tx font-bold">Saturation of generic visuals.</strong> Adobe Stock recycles - your competitors are using the same hero shot. Pattern recognition kills click-through.</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-teal font-extrabold flex-shrink-0">→</span>
                  <span><strong className="text-tx font-bold">Trust gap.</strong> Consumers can spot stock in under two seconds. Local owners on camera close that gap instantly.</span>
                </li>
              </ul>

              <figure className="my-10">
                <div className="rounded-l overflow-hidden" style={{ aspectRatio: '3 / 2' }}>
                  <img src={inlineImg} alt="iPhone shooting talking-head footage" className="w-full h-full object-cover" />
                </div>
                <figcaption className="text-[13px] text-tx-3 mt-3 italic">
                  90% of the UGC we put into the ad account is shot on an iPhone, in available light, in under fifteen minutes.
                </figcaption>
              </figure>

              {/* H2 - section 03 */}
              <h2 id="pipeline" className="font-extrabold mt-12 mb-5 text-tx scroll-mt-24" style={{ fontSize: 'clamp(24px,2.8vw,32px)', letterSpacing: '-.025em', lineHeight: 1.2 }}>
                <span className="text-teal font-extrabold mr-3">03.</span>
                The UGC Pipeline That Actually Scales
              </h2>
              <p className="mb-5 text-tx-2" style={{ fontSize: 17, lineHeight: 1.7 }}>
                The pipeline has to work for the franchisee, not against them. A multi-step brief that requires a film crew defeats the entire premise. Our pipeline has three permanent constraints: shoot on a phone, deliver in 48 hours, edit centrally.
              </p>

              <blockquote className="my-8 border-l-4 border-teal pl-6 py-2">
                <p className="font-extrabold text-tx mb-3" style={{ fontSize: 'clamp(20px,2.2vw,24px)', letterSpacing: '-.02em', lineHeight: 1.35 }}>
                  &ldquo;The best UGC creative we run is shot by the franchisee, edited by our team, and approved in a Slack thread. End-to-end in 48 hours.&rdquo;
                </p>
              </blockquote>

              <p className="mb-8 text-tx-2" style={{ fontSize: 17, lineHeight: 1.7 }}>
                Every Monday, we send each franchisee a one-page brief - hook angle, target objection, three sample lines they can riff on. They film three takes on their phone, drop it in a shared folder, and our editors handle hooks, captions, and platform-specific cuts. By Wednesday, the new variants are in the ad account.
              </p>

              {/* MID-ARTICLE CTA CARD */}
              <div className="my-10 rounded-l p-7 md:p-9 relative overflow-hidden" style={{ background: 'linear-gradient(135deg,#0F1314 0%,#1D2637 100%)' }}>
                <div className="absolute -top-16 -right-16 w-[220px] h-[220px] pointer-events-none" style={{ background: 'radial-gradient(circle,rgba(0,190,157,.2) 0%,transparent 70%)' }} />
                <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-5">
                  <div className="flex-1">
                    <div className="text-[11px] uppercase font-extrabold text-teal mb-2" style={{ letterSpacing: '.12em' }}>Free Audit</div>
                    <div className="text-white font-extrabold mb-2" style={{ fontSize: 'clamp(20px,2.2vw,26px)', letterSpacing: '-.02em', lineHeight: 1.2 }}>
                      Want us to audit your franchise ad account?
                    </div>
                    <div className="text-white/70 text-[14px] leading-snug">
                      45 minutes. 3+ improvements. $100 gift card guarantee.
                    </div>
                  </div>
                  <a href={auditCTA.href} className="bp flex-shrink-0">Book Audit →</a>
                </div>
              </div>

              {/* H2 - section 04 */}
              <h2 id="playbook" className="font-extrabold mt-12 mb-5 text-tx scroll-mt-24" style={{ fontSize: 'clamp(24px,2.8vw,32px)', letterSpacing: '-.025em', lineHeight: 1.2 }}>
                <span className="text-teal font-extrabold mr-3">04.</span>
                A 5-Step Playbook You Can Run This Week
              </h2>
              <p className="mb-6 text-tx-2" style={{ fontSize: 17, lineHeight: 1.7 }}>
                Steal this. Run it on one location for a single 30-day window. Compare CPL on day 30 vs your trailing 90-day average. That comparison is usually all the convincing a franchisor needs.
              </p>
              <div className="mb-8 space-y-3">
                {[
                  ['Pull last 90 days of ad spend by creative.', 'Sort by CPL ascending. The top quartile is your new control - that is what is actually working.'],
                  ['Brief 3 franchisees on a Monday.', 'One-page brief, three hook angles, single objection per angle. Ask for two takes of each.'],
                  ['Edit centrally on Tuesday.', 'Vertical 9:16, captions burned in, hook in the first 1.2 seconds. No agency timelines.'],
                  ['Launch on Wednesday at 50% of control spend.', 'Same audiences, same landing pages, same offer. The only variable is creative.'],
                  ['Measure on day 14, scale on day 21.', 'If UGC variants beat control on CPL and CVR, shift 70% of spend. Kill the lagging stock creative.'],
                ].map(([h, b], i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-s border border-bd hover:border-teal-bd transition-colors bg-wh">
                    <div className="w-7 h-7 rounded-full bg-teal text-dk flex items-center justify-center text-[13px] font-extrabold flex-shrink-0">{i + 1}</div>
                    <div className="flex-1 min-w-0">
                      <div className="font-bold text-tx mb-1 text-[15px] leading-snug">{h}</div>
                      <div className="text-[14px] text-tx-2 leading-snug">{b}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* H2 - section 05 */}
              <h2 id="results" className="font-extrabold mt-12 mb-5 text-tx scroll-mt-24" style={{ fontSize: 'clamp(24px,2.8vw,32px)', letterSpacing: '-.025em', lineHeight: 1.2 }}>
                <span className="text-teal font-extrabold mr-3">05.</span>
                The Results: 40% Lower CPL Across 12 Brands
              </h2>
              <p className="mb-5 text-tx-2" style={{ fontSize: 17, lineHeight: 1.7 }}>
                We have now run this exact playbook across 12 franchise brands - fitness, salon, wellness, beauty, lifestyle. The CPL reductions range from 28% on the low end to 64% on the high end. The median is 40%. The pipeline costs roughly $1.8K/month per brand, including editor time. The brand shoot it replaces averages $35-50K annually.
              </p>
              <p className="mb-5 text-tx-2" style={{ fontSize: 17, lineHeight: 1.7 }}>
                The franchisees who participate consistently win their markets first. The ones who don&apos;t still get the network average creative - which now performs significantly better, because the algorithm learns from the UGC winners and applies those signals to the whole account.
              </p>
              <p className="mb-10 text-tx-2" style={{ fontSize: 17, lineHeight: 1.7 }}>
                If you take one thing from this post: you do not have to reshoot your brand assets. You just need to stop running them as your primary paid creative. Use the brand assets where they shine - and put the franchisees in front of the camera where the algorithm rewards them.
              </p>

              {/* Tag row */}
              <div className="flex flex-wrap gap-2 pt-8 mt-8 border-t border-bd">
                {['UGC', 'Paid Ads', 'Franchise CPL', 'Meta Ads', 'Creative Strategy'].map(t => (
                  <span key={t} className="text-[12px] font-bold text-tx-2 bg-off border border-bd px-3 py-1.5 rounded-full">
                    {t}
                  </span>
                ))}
              </div>

              {/* AUTHOR mini-bio */}
              <div className="mt-10 rounded-l border border-bd bg-off p-6">
                <div className="flex items-center gap-4">
                  <img src={authorPhoto} alt="Tristynn McGowan" className="w-14 h-14 rounded-full object-cover flex-shrink-0" />
                  <div>
                    <div className="font-bold text-tx text-[15px]">Tristynn McGowan</div>
                    <div className="text-[12px] text-tx-3 font-medium">Founder &amp; CEO, 5th Element Media</div>
                  </div>
                  <Link href="/about" className="ml-auto text-[12px] font-bold text-tx-2 hover:text-teal transition-colors">More →</Link>
                </div>
              </div>
            </article>

            {/* RELATED POSTS RAIL - right */}
            <aside className="hidden lg:block">
              <div className="sticky top-24">
                <div className="text-[11px] uppercase font-extrabold text-tx-3 mb-5" style={{ letterSpacing: '.12em' }}>Related Reading</div>
                <div className="flex flex-col gap-3">
                  {related.map(r => (
                    <a
                      key={r.title}
                      href="/blog"
                      className="block rounded-s border border-bd p-4 bg-wh hover:border-teal-bd hover:-translate-y-0.5 transition-all"
                    >
                      <div className="text-[10px] uppercase font-extrabold text-teal mb-2" style={{ letterSpacing: '.1em' }}>{r.tag}</div>
                      <div className="text-[14px] font-bold text-tx leading-snug mb-3" style={{ letterSpacing: '-.01em' }}>{r.title}</div>
                      <div className="text-[11px] text-tx-3 font-semibold">{r.read} read →</div>
                    </a>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-bd">
                  <div className="text-[11px] uppercase font-extrabold text-tx-3 mb-3" style={{ letterSpacing: '.12em' }}>This Issue</div>
                  <div className="text-[13px] text-tx-2 leading-snug">
                    <div className="font-semibold text-tx mb-1">Vol. 14, Issue 02</div>
                    <div>Published May 15, 2026 - Murrieta, CA</div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="px-6 py-20" style={{ background: '#0F1314' }}>
        <div className="mx max-w-[1100px] mx-auto text-center">
          <div className="stag text-teal">Get the Insider</div>
          <h2 className="font-extrabold text-white mb-4" style={{ fontSize: 'clamp(28px,3.5vw,40px)', letterSpacing: '-.025em', lineHeight: 1.2 }}>
            Tactical breakdowns. Every Wednesday.
          </h2>
          <p className="text-white/60 mb-8 max-w-[560px] mx-auto" style={{ fontSize: 16, lineHeight: 1.55 }}>
            What is actually working across 100+ franchise locations - written for owners and operators, not pitch decks.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <a href={auditCTA.href} className="bp bpl">Book Free Audit →</a>
            <Link href="/blog" className="bs text-white/80 hover:text-white">Browse the Blog →</Link>
          </div>
        </div>
      </section>

      {/* NEXT / BACK */}
      <section className="px-6 py-12">
        <div className="mx max-w-[1100px] mx-auto flex justify-between items-center text-[15px]">
          <Link href="/blog/sample-a" className="font-semibold text-tx-2 hover:text-teal transition-colors">
            ← View Layout A
          </Link>
          <Link href="/blog" className="font-semibold text-tx-2 hover:text-teal transition-colors">
            All Posts →
          </Link>
        </div>
      </section>
    </>
  );
}
