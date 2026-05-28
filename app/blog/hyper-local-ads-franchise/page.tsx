import type { Metadata } from 'next';
import BlogPostLayout from '@/components/blog/BlogPostLayout';
import MidArticleCTA from '@/components/blog/MidArticleCTA';
import PullQuote from '@/components/blog/PullQuote';
import { pageMetadata } from '@/lib/seo';
import { getPostBySlug } from '../posts';

const post = getPostBySlug('hyper-local-ads-franchise')!;

export const metadata: Metadata = pageMetadata({
  title: post.title,
  description: post.excerpt,
  path: `/blog/${post.slug}`,
  keywords: ['hyper-local ads', 'franchise paid ads', 'multi-location targeting', 'franchise Meta ads', 'per-market campaigns'],
});

export default function Post() {
  return (
    <BlogPostLayout post={post}>
      <p className="mb-6">
        Here is the easiest way to spot a franchise brand that is overpaying for leads: look at how many ad campaigns they are running. If a brand with 40 locations is running 1 Meta campaign and 1 Google campaign, they are setting fire to budget. Their CPL is at least 2x what it should be. Often 3x.
      </p>
      <p className="mb-6">
        The whole premise of franchise marketing is hyper-local. Each location has a different demand curve, a different competitor set, a different cost per click, a different demographic mix. Treating all those markets like one big audience is the single most expensive mistake in this category.
      </p>

      <h2
        className="font-extrabold mt-14 mb-5 text-tx"
        style={{ fontSize: 'clamp(26px,3vw,34px)', letterSpacing: '-.025em', lineHeight: 1.2 }}
      >
        The Math: Why One National Campaign Breaks Down at 20+ Locations
      </h2>
      <p className="mb-6">
        Meta&apos;s algorithm optimizes against the auction within an ad set. If your ad set is targeting the entire United States and bidding for the same outcome, the algorithm will spend most of your budget in the cheapest markets where conversions happen fastest. That sounds efficient. It is not.
      </p>
      <p className="mb-6">
        What happens in practice: 60-70% of your spend funnels into 4-6 markets that already have brand awareness. The other 30+ markets get crumbs. The franchisees in those markets see their dashboards and complain that they are paying their marketing fee for nothing. Because they are.
      </p>

      <PullQuote>
        &ldquo;Every market we audit, the franchisees with the loudest complaints about leads are the ones whose markets got starved by a centralized campaign optimizing somewhere else.&rdquo;
      </PullQuote>

      <h2
        className="font-extrabold mt-14 mb-5 text-tx"
        style={{ fontSize: 'clamp(26px,3vw,34px)', letterSpacing: '-.025em', lineHeight: 1.2 }}
      >
        What Hyper-Local Actually Means at the Campaign Level
      </h2>
      <p className="mb-6">
        Hyper-local does not mean a different ad image per market. That is creative-level personalization. It is a piece of the puzzle, not the whole thing.
      </p>
      <p className="mb-6">
        At the campaign level, hyper-local means:
      </p>
      <ul className="space-y-3 mb-8" style={{ fontSize: 17 }}>
        <li className="flex gap-4">
          <span className="text-teal font-extrabold flex-shrink-0">→</span>
          <span><strong className="text-tx font-bold">One campaign per location, or per cluster of 2-3 nearby zip codes.</strong> Each campaign has its own daily budget, its own bid strategy, its own audience.</span>
        </li>
        <li className="flex gap-4">
          <span className="text-teal font-extrabold flex-shrink-0">→</span>
          <span><strong className="text-tx font-bold">Geographic targeting tightened to the actual drive-time radius.</strong> A salon suite operator does not care about leads 25 miles away. 3-5 miles is the real catchment area.</span>
        </li>
        <li className="flex gap-4">
          <span className="text-teal font-extrabold flex-shrink-0">→</span>
          <span><strong className="text-tx font-bold">Per-market creative variants.</strong> The franchisee on camera. The local landmark in the background. The neighborhood mentioned in the hook.</span>
        </li>
        <li className="flex gap-4">
          <span className="text-teal font-extrabold flex-shrink-0">→</span>
          <span><strong className="text-tx font-bold">Per-market budget that reflects local CPM and demand.</strong> Phoenix runs at $9 CPM in our network. Manhattan runs at $24 CPM. Same budget yields wildly different lead volume. Allocate accordingly.</span>
        </li>
      </ul>

      <MidArticleCTA />

      <h2
        className="font-extrabold mt-14 mb-5 text-tx"
        style={{ fontSize: 'clamp(26px,3vw,34px)', letterSpacing: '-.025em', lineHeight: 1.2 }}
      >
        The Per-Market Structure We Run Across 100+ Locations
      </h2>
      <p className="mb-6">
        Here is the structure we run, by default, on every franchise we onboard. It works for fitness, salon suites, wellness, home services, beauty, and lifestyle brands. The mechanics are the same:
      </p>
      <ol className="space-y-4 mb-8" style={{ fontSize: 17 }}>
        <li className="flex gap-4">
          <span className="text-teal font-extrabold flex-shrink-0">1.</span>
          <span><strong className="text-tx font-bold">One Meta campaign per location.</strong> Named with location and zip cluster. CBO budget per campaign, set to the per-market opportunity size, not split equally.</span>
        </li>
        <li className="flex gap-4">
          <span className="text-teal font-extrabold flex-shrink-0">2.</span>
          <span><strong className="text-tx font-bold">Two ad sets per campaign.</strong> Cold prospecting (lookalike of existing customers if data is good, broad interest if not) and warm retargeting (site visitors, lead form abandoners, engagement audiences).</span>
        </li>
        <li className="flex gap-4">
          <span className="text-teal font-extrabold flex-shrink-0">3.</span>
          <span><strong className="text-tx font-bold">Four to six creative variants per ad set.</strong> All UGC. Refreshed every 14 days from the franchisee&apos;s phone footage.</span>
        </li>
        <li className="flex gap-4">
          <span className="text-teal font-extrabold flex-shrink-0">4.</span>
          <span><strong className="text-tx font-bold">Centralized reporting that rolls up to the franchisor.</strong> They see network-wide performance plus per-location detail in one dashboard. No more digging through 40 ad accounts.</span>
        </li>
        <li className="flex gap-4">
          <span className="text-teal font-extrabold flex-shrink-0">5.</span>
          <span><strong className="text-tx font-bold">Weekly optimization at the campaign level.</strong> Underperforming markets get creative refreshes first. Outperforming markets get budget increases.</span>
        </li>
      </ol>

      <h2
        className="font-extrabold mt-14 mb-5 text-tx"
        style={{ fontSize: 'clamp(26px,3vw,34px)', letterSpacing: '-.025em', lineHeight: 1.2 }}
      >
        What the Numbers Look Like When You Switch
      </h2>
      <p className="mb-6">
        Brands switching from one-national-campaign to per-location campaigns typically see:
      </p>
      <ul className="space-y-3 mb-8" style={{ fontSize: 17 }}>
        <li className="flex gap-4">
          <span className="text-teal font-extrabold flex-shrink-0">→</span>
          <span><strong className="text-tx font-bold">CPL drops 35-60%</strong> in the markets that were previously starved.</span>
        </li>
        <li className="flex gap-4">
          <span className="text-teal font-extrabold flex-shrink-0">→</span>
          <span><strong className="text-tx font-bold">Lead volume per market becomes predictable.</strong> Franchisees can finally forecast and staff.</span>
        </li>
        <li className="flex gap-4">
          <span className="text-teal font-extrabold flex-shrink-0">→</span>
          <span><strong className="text-tx font-bold">Franchisee NPS goes up.</strong> Sounds soft but matters: happy franchisees pay their marketing fee, sign more units, refer more candidates.</span>
        </li>
        <li className="flex gap-4">
          <span className="text-teal font-extrabold flex-shrink-0">→</span>
          <span><strong className="text-tx font-bold">Total network spend stays the same.</strong> You are not spending more, you are spending smarter.</span>
        </li>
      </ul>
      <p className="mb-12">
        If you are running a single national campaign across 20+ franchise locations right now, you are leaving 30-50% of your potential leads on the table. The fix is not more budget. It is a different structure.
      </p>

      <div className="flex flex-wrap gap-2 pt-10 border-t border-bd">
        {['Paid Ads', 'Meta Ads', 'Google Ads', 'Hyper-Local', 'Multi-Location'].map(t => (
          <span key={t} className="text-[12px] font-bold text-tx-2 bg-off border border-bd px-3 py-1.5 rounded-full">
            {t}
          </span>
        ))}
      </div>
    </BlogPostLayout>
  );
}
