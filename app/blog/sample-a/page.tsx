import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import MediaEmbed from '@/components/MediaEmbed';
import RelatedPosts from '@/components/blog/RelatedPosts';
import { pageMetadata } from '@/lib/seo';
import { breadcrumbSchema } from '@/lib/schema';
import { auditCTA } from '@/lib/site';

const relatedPosts = [
  {
    href: '/blog/sample-a',
    category: 'Paid Ads',
    title: 'Why Your Franchise Brand Pays 3x More for Leads Than It Should',
    readTime: '5 min',
    date: 'May 1, 2026',
    cover: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80',
  },
  {
    href: '/blog/sample-a',
    category: 'Creative',
    title: 'The 4 UGC Hooks That Are Outperforming Stock Video Right Now',
    readTime: '7 min',
    date: 'April 22, 2026',
    cover: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=1200&q=80',
  },
  {
    href: '/blog/sample-a',
    category: 'Franchise Growth',
    title: 'How IMAGE Studios Hit 100% Occupancy in 2 Months',
    readTime: '6 min',
    date: 'April 10, 2026',
    cover: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1200&q=80',
  },
];

export const metadata: Metadata = pageMetadata({
  title: 'How to Cut Franchise CPL by 40% with UGC (Template A)',
  description:
    'Template A - substack-style wide column layout. Sample blog post on cutting franchise cost-per-lead by 40% with UGC creative.',
  path: '/blog/sample-a',
  noindex: true,
});

const cover = 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=2000&q=80';
const authorPhoto = 'https://cdn.prod.website-files.com/68f669a6d79edc75f34470f3/693381ab68f812e3e12cf6fa__DSC1638%20Large.jpeg';
const inlineImg = 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1600&q=80';

export default function SampleBlogA() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Blog', path: '/blog' },
          { name: 'How to Cut Franchise CPL by 40% with UGC', path: '/blog/sample-a' },
        ])}
      />

      {/* HEADER */}
      <article className="pt-[120px]">
        <div className="mx max-w-[760px] mx-auto px-6">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-[13px] font-semibold text-tx-3 mb-8">
            <Link href="/" className="hover:text-teal transition-colors">Home</Link>
            <span className="opacity-40">/</span>
            <Link href="/blog" className="hover:text-teal transition-colors">Blog</Link>
            <span className="opacity-40">/</span>
            <span className="text-tx truncate">UGC Creative</span>
          </div>

          {/* Category tag */}
          <Link
            href="/blog"
            className="inline-block text-[11px] uppercase font-extrabold text-teal bg-teal-bg border border-teal-bd px-3 py-1.5 rounded-full mb-7 hover:bg-teal hover:text-dk transition-colors"
            style={{ letterSpacing: '.12em' }}
          >
            Paid Ads
          </Link>

          {/* Title */}
          <h1 className="font-extrabold mb-7" style={{ fontSize: 'clamp(36px,5vw,56px)', letterSpacing: '-.035em', lineHeight: 1.05 }}>
            How to Cut Franchise CPL by 40% with UGC Creative (Without Reshooting Everything)
          </h1>

          {/* Subtitle / deck */}
          <p className="text-tx-2 mb-10" style={{ fontSize: 22, lineHeight: 1.5 }}>
            Stock creative is dying. UGC is winning. Here is the exact pipeline we use across 12 franchise brands to drop CPL without burning a 5-figure production budget.
          </p>

          {/* Author + meta strip */}
          <div className="flex items-center gap-4 pb-10 mb-12 border-b border-bd">
            <img src={authorPhoto} alt="Tristynn McGowan" className="w-12 h-12 rounded-full object-cover" />
            <div className="flex-1">
              <div className="font-bold text-tx text-[15px]">Tristynn McGowan</div>
              <div className="text-[13px] text-tx-3 font-medium">
                <span>Founder &amp; CEO</span> &middot; <span>May 15, 2026</span> &middot; <span>6 min read</span>
              </div>
            </div>
          </div>
        </div>

        {/* COVER IMAGE - full width within mx */}
        <div className="px-6 mb-16">
          <div className="mx max-w-[1100px] mx-auto">
            <figure>
              <div className="rounded-l overflow-hidden" style={{ aspectRatio: '16 / 9' }}>
                <img src={cover} alt="Phone filming UGC content for a franchise ad" className="w-full h-full object-cover" />
              </div>
              <figcaption className="text-[13px] text-tx-3 mt-3 italic text-center">
                The setup: a franchisee, an iPhone, a ring light, and 90 seconds of authentic talking-head footage.
              </figcaption>
            </figure>
          </div>
        </div>

        {/* BODY */}
        <div className="mx max-w-[680px] mx-auto px-6 article-body">
          {/* Lead paragraph */}
          <p className="mb-6 text-tx" style={{ fontSize: 20, lineHeight: 1.65, fontWeight: 500 }}>
            Last quarter, one of our salon-suite franchisees called frantic. Her CPL had ballooned to $31 across all locations. She had just dropped $42K on a glossy brand shoot - and the new ads were performing worse than the iPhone footage we tested as filler.
          </p>
          <p className="mb-10 text-tx-2" style={{ fontSize: 18, lineHeight: 1.7 }}>
            That single conversation triggered the audit we are sharing today. By the end of the next quarter, her CPL was $11.40 - a 63% drop. We replicated the same pipeline across 11 more brands. Average network-wide CPL reduction: 40%. Here is exactly how.
          </p>

          {/* H2 */}
          <h2 className="font-extrabold mt-14 mb-5 text-tx" style={{ fontSize: 'clamp(26px,3vw,34px)', letterSpacing: '-.025em', lineHeight: 1.2 }}>
            The $42K Mistake Most Franchise Brands Are Making
          </h2>
          <p className="mb-5 text-tx-2" style={{ fontSize: 18, lineHeight: 1.7 }}>
            Most franchise brands still treat creative production like it&apos;s 2017. They schedule an annual brand shoot - models, agency, half-day studio rental, post-production - and roll the assets out to every market. The output looks beautiful. The performance is mediocre at best.
          </p>
          <p className="mb-5 text-tx-2" style={{ fontSize: 18, lineHeight: 1.7 }}>
            Meta&apos;s algorithm has been signaling for two years what the data now confirms: vertical, native, raw-feeling UGC outperforms produced creative on a per-dollar basis for nearly every franchise vertical we test. The polish that costs $42K is the same polish the algorithm de-prioritizes.
          </p>
          <p className="mb-8 text-tx-2" style={{ fontSize: 18, lineHeight: 1.7 }}>
            The mistake isn&apos;t the brand shoot. It&apos;s using the brand shoot as the primary paid-social asset. Brand shoots belong on the website and in OOH. UGC belongs in the ad account.
          </p>

          {/* H2 */}
          <h2 className="font-extrabold mt-14 mb-5 text-tx" style={{ fontSize: 'clamp(26px,3vw,34px)', letterSpacing: '-.025em', lineHeight: 1.2 }}>
            Why Stock Creative Stopped Working in 2024
          </h2>
          <p className="mb-5 text-tx-2" style={{ fontSize: 18, lineHeight: 1.7 }}>
            Three things shifted between 2022 and 2024 that made stock and polished creative materially worse on paid social:
          </p>
          <ul className="mb-8 space-y-3 text-tx-2" style={{ fontSize: 18, lineHeight: 1.6 }}>
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

          {/* Inline image */}
          <figure className="my-14">
            <div className="rounded-l overflow-hidden" style={{ aspectRatio: '3 / 2' }}>
              <img src={inlineImg} alt="Iphone shooting talking-head footage" className="w-full h-full object-cover" />
            </div>
            <figcaption className="text-[13px] text-tx-3 mt-3 italic text-center">
              90% of the UGC we put into the ad account is shot on an iPhone, in available light, in under fifteen minutes.
            </figcaption>
          </figure>

          {/* DEMO: YouTube video embed - large size. Drop this in the real CMS too. */}
          <MediaEmbed
            src="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            alt="Sample YouTube embed - replace with the real recording for the post"
            size="lg"
            caption="Large YouTube embed - use this for a hero recording at the top of a post or a key walkthrough."
          />

          {/* H2 */}
          <h2 className="font-extrabold mt-4 mb-5 text-tx" style={{ fontSize: 'clamp(26px,3vw,34px)', letterSpacing: '-.025em', lineHeight: 1.2 }}>
            The UGC Pipeline That Actually Scales
          </h2>
          <p className="mb-5 text-tx-2" style={{ fontSize: 18, lineHeight: 1.7 }}>
            The pipeline has to work for the franchisee, not against them. A multi-step brief that requires a film crew defeats the entire premise. Our pipeline has three permanent constraints: shoot on a phone, deliver in 48 hours, edit centrally.
          </p>

          {/* Blockquote */}
          <blockquote className="my-10 border-l-4 border-teal pl-7 py-2">
            <p className="font-extrabold text-tx mb-4" style={{ fontSize: 'clamp(22px,2.5vw,28px)', letterSpacing: '-.02em', lineHeight: 1.35 }}>
              &ldquo;The best UGC creative we run is shot by the franchisee, edited by our team, and approved in a Slack thread. End-to-end in 48 hours.&rdquo;
            </p>
          </blockquote>

          <p className="mb-8 text-tx-2" style={{ fontSize: 18, lineHeight: 1.7 }}>
            Every Monday, we send each franchisee a one-page brief - hook angle, target objection, three sample lines they can riff on. They film three takes on their phone, drop it in a shared folder, and our editors handle hooks, captions, and platform-specific cuts. By Wednesday, the new variants are in the ad account.
          </p>

          {/* DEMO: Loom video embed - medium size, inline with body */}
          <MediaEmbed
            src="https://www.loom.com/share/d04dee69b56e4b50abc2dd4f0b29e1b8"
            alt="Sample Loom embed - replace with the real screen recording"
            size="md"
            caption="Medium Loom embed - perfect for a screen-recorded walkthrough sized to match body type."
          />

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

          {/* H2 */}
          <h2 className="font-extrabold mt-14 mb-5 text-tx" style={{ fontSize: 'clamp(26px,3vw,34px)', letterSpacing: '-.025em', lineHeight: 1.2 }}>
            A 5-Step Playbook You Can Run This Week
          </h2>
          <p className="mb-6 text-tx-2" style={{ fontSize: 18, lineHeight: 1.7 }}>
            Steal this. Run it on one location for a single 30-day window. Compare CPL on day 30 vs your trailing 90-day average. That comparison is usually all the convincing a franchisor needs.
          </p>
          <ol className="mb-8 space-y-4 text-tx-2 list-decimal list-inside marker:text-teal marker:font-extrabold" style={{ fontSize: 18, lineHeight: 1.6 }}>
            <li><strong className="text-tx font-bold">Pull last 90 days of ad spend by creative.</strong> Sort by CPL ascending. The top quartile is your new control - that is what is actually working.</li>
            <li><strong className="text-tx font-bold">Brief 3 franchisees on a Monday.</strong> One-page brief, three hook angles, single objection per angle. Ask for two takes of each.</li>
            <li><strong className="text-tx font-bold">Edit centrally on Tuesday.</strong> Vertical 9:16, captions burned in, hook in the first 1.2 seconds. No agency timelines.</li>
            <li><strong className="text-tx font-bold">Launch on Wednesday at 50% of control spend.</strong> Same audiences, same landing pages, same offer. The only variable is creative.</li>
            <li><strong className="text-tx font-bold">Measure on day 14, scale on day 21.</strong> If UGC variants beat control on CPL and CVR, shift 70% of spend. Kill the lagging stock creative.</li>
          </ol>

          {/* H2 */}
          <h2 className="font-extrabold mt-14 mb-5 text-tx" style={{ fontSize: 'clamp(26px,3vw,34px)', letterSpacing: '-.025em', lineHeight: 1.2 }}>
            The Results: 40% Lower CPL Across 12 Brands
          </h2>
          <p className="mb-5 text-tx-2" style={{ fontSize: 18, lineHeight: 1.7 }}>
            We have now run this exact playbook across 12 franchise brands - fitness, salon, wellness, beauty, lifestyle. The CPL reductions range from 28% on the low end to 64% on the high end. The median is 40%. The pipeline costs roughly $1.8K/month per brand, including editor time. The brand shoot it replaces averages $35-50K annually.
          </p>
          <p className="mb-5 text-tx-2" style={{ fontSize: 18, lineHeight: 1.7 }}>
            The franchisees who participate consistently win their markets first. The ones who don&apos;t still get the network average creative - which now performs significantly better, because the algorithm learns from the UGC winners and applies those signals to the whole account.
          </p>
          <p className="mb-10 text-tx-2" style={{ fontSize: 18, lineHeight: 1.7 }}>
            If you take one thing from this post: you do not have to reshoot your brand assets. You just need to stop running them as your primary paid creative. Use the brand assets where they shine - and put the franchisees in front of the camera where the algorithm rewards them.
          </p>

          {/* Tag row */}
          <div className="flex flex-wrap gap-2 pt-10 border-t border-bd">
            {['UGC', 'Paid Ads', 'Franchise CPL', 'Meta Ads', 'Creative Strategy'].map(t => (
              <span key={t} className="text-[12px] font-bold text-tx-2 bg-off border border-bd px-3 py-1.5 rounded-full">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* AUTHOR BIO CARD - end of post */}
        <div className="px-6 mt-20 mb-24">
          <div className="mx max-w-[760px] mx-auto">
            <div className="rounded-l border border-bd bg-off p-8 md:p-10">
              <div className="flex flex-col md:flex-row gap-6">
                <img src={authorPhoto} alt="Tristynn McGowan" className="w-24 h-24 rounded-full object-cover flex-shrink-0" />
                <div className="flex-1">
                  <div className="text-[11px] uppercase font-extrabold text-teal mb-2" style={{ letterSpacing: '.12em' }}>Written By</div>
                  <div className="font-extrabold text-tx mb-1" style={{ fontSize: 20, letterSpacing: '-.01em' }}>Tristynn McGowan</div>
                  <div className="text-[13px] text-tx-3 font-semibold mb-4">Founder &amp; CEO, 5th Element Media</div>
                  <p className="text-[15px] text-tx-2 leading-relaxed mb-5">
                    Tristynn built 5th Element Media from a college dorm into a franchise marketing agency serving 100+ franchise locations across the United States. He writes about what is actually working in paid social, UGC, and franchise growth - not what sounds clever in a pitch deck.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a href="https://www.linkedin.com/in/tristynnmcgowan" className="text-[13px] font-bold text-tx-2 hover:text-teal transition-colors">LinkedIn →</a>
                    <Link href="/about" className="text-[13px] font-bold text-tx-2 hover:text-teal transition-colors">More from Tristynn →</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* KEEP READING - related posts rail */}
      <RelatedPosts posts={relatedPosts} />
    </>
  );
}
