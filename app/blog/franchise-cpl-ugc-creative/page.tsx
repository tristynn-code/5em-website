import type { Metadata } from 'next';
import BlogPostLayout from '@/components/blog/BlogPostLayout';
import MidArticleCTA from '@/components/blog/MidArticleCTA';
import PullQuote from '@/components/blog/PullQuote';
import { pageMetadata } from '@/lib/seo';
import { getPostBySlug } from '../posts';

const post = getPostBySlug('franchise-cpl-ugc-creative')!;

export const metadata: Metadata = pageMetadata({
  title: post.title,
  description: post.excerpt,
  path: `/blog/${post.slug}`,
  keywords: ['franchise CPL', 'UGC creative for franchises', 'franchise paid ads', 'reduce cost per lead'],
});

export default function Post() {
  return (
    <BlogPostLayout post={post}>
      <p className="mb-6">
        In 2023, a franchisee for one of our partner brands sent me a screenshot of her ad account. Her cost per lead was $31. Her budget was $4,500 a month. She was getting fewer than 150 leads. She was also a month away from giving up on Meta entirely.
      </p>
      <p className="mb-6">
        That conversation kicked off the audit we are going to walk you through. By the end of the next quarter her CPL was $11.40, a 63% drop. We then replicated the same pipeline across 11 more franchise brands. Network-wide average CPL reduction: 40%. Here is exactly what we did, with zero new shoot days, and no expensive production crew.
      </p>

      <h2
        className="font-extrabold mt-14 mb-5 text-tx"
        style={{ fontSize: 'clamp(26px,3vw,34px)', letterSpacing: '-.025em', lineHeight: 1.2 }}
      >
        The $42K Mistake Most Franchise Brands Are Making
      </h2>
      <p className="mb-6">
        Every franchise we audit shows the same line item: studio production. Stock-style hero shots, polished b-roll, an actor reading scripted lines. Average annual spend across our partner brands before they hired us: $42K per location per year on creative production.
      </p>
      <p className="mb-6">
        And that creative does not work the way it used to. Meta and TikTok have actively down-ranked polished, ad-feeling content since 2024. The platforms reward content that looks native to the feed. A franchise spending $42K to look like an ad is paying twice: once to make the content, then again to overcome the algorithm that penalizes it.
      </p>

      <h2
        className="font-extrabold mt-14 mb-5 text-tx"
        style={{ fontSize: 'clamp(26px,3vw,34px)', letterSpacing: '-.025em', lineHeight: 1.2 }}
      >
        Why Stock Creative Stopped Working in 2024
      </h2>
      <p className="mb-5">
        Three things shifted at the same time and nobody told franchise brands:
      </p>
      <ul className="space-y-3 mb-8" style={{ fontSize: 17 }}>
        <li className="flex gap-4">
          <span className="text-teal font-extrabold flex-shrink-0">→</span>
          <span><strong className="text-tx font-bold">Algorithmic preference for native content.</strong> Meta&apos;s auction now rewards UGC-style creative with a meaningful CPM discount. We see 20-35% lower CPM on the same audience when the creative looks shot on a phone.</span>
        </li>
        <li className="flex gap-4">
          <span className="text-teal font-extrabold flex-shrink-0">→</span>
          <span><strong className="text-tx font-bold">Saturation of generic visuals.</strong> Adobe Stock recycles. Your competitors are using the same hero shot. Pattern recognition kills click-through rate.</span>
        </li>
        <li className="flex gap-4">
          <span className="text-teal font-extrabold flex-shrink-0">→</span>
          <span><strong className="text-tx font-bold">The trust gap.</strong> Consumers can spot stock creative in under two seconds. A real franchise owner on camera closes that gap instantly.</span>
        </li>
      </ul>

      <h2
        className="font-extrabold mt-14 mb-5 text-tx"
        style={{ fontSize: 'clamp(26px,3vw,34px)', letterSpacing: '-.025em', lineHeight: 1.2 }}
      >
        The UGC Pipeline That Actually Scales
      </h2>
      <p className="mb-6">
        The pipeline has to work for the franchisee, not against them. A multi-step brief that requires a film crew defeats the entire premise. Our pipeline has three permanent constraints: shoot on a phone, deliver in 48 hours, edit centrally.
      </p>

      <PullQuote>
        &ldquo;The best UGC creative we run is shot by the franchisee, edited by our team, and approved in a Slack thread. End-to-end in 48 hours.&rdquo;
      </PullQuote>

      <p className="mb-8">
        Every Monday, we send each franchisee a one-page brief: hook angle, target objection, three sample lines they can riff on. They film three takes on their phone and drop them in a shared folder. Our editors handle hooks, captions, and platform-specific cuts. By Wednesday, the new variants are in the ad account.
      </p>

      <MidArticleCTA />

      <h2
        className="font-extrabold mt-14 mb-5 text-tx"
        style={{ fontSize: 'clamp(26px,3vw,34px)', letterSpacing: '-.025em', lineHeight: 1.2 }}
      >
        A 5-Step Playbook You Can Run This Week
      </h2>
      <ol className="space-y-4 mb-8" style={{ fontSize: 17 }}>
        <li className="flex gap-4">
          <span className="text-teal font-extrabold flex-shrink-0">1.</span>
          <span><strong className="text-tx font-bold">Pull your last 30 days of creative performance.</strong> Sort by CPL. The bottom 25% is your cost. Pause it.</span>
        </li>
        <li className="flex gap-4">
          <span className="text-teal font-extrabold flex-shrink-0">2.</span>
          <span><strong className="text-tx font-bold">Pick 3 franchisees who are comfortable on camera.</strong> You only need 3. Not all 20.</span>
        </li>
        <li className="flex gap-4">
          <span className="text-teal font-extrabold flex-shrink-0">3.</span>
          <span><strong className="text-tx font-bold">Write a one-page brief per franchisee.</strong> Hook, objection, three angle ideas, three sample lines. That is the entire document.</span>
        </li>
        <li className="flex gap-4">
          <span className="text-teal font-extrabold flex-shrink-0">4.</span>
          <span><strong className="text-tx font-bold">Have them shoot 3 takes on their iPhone.</strong> Vertical, available light, under 30 seconds each. Total time investment: 15 minutes.</span>
        </li>
        <li className="flex gap-4">
          <span className="text-teal font-extrabold flex-shrink-0">5.</span>
          <span><strong className="text-tx font-bold">Edit centrally and ship within 48 hours.</strong> Captions, native aspect ratios, platform-specific cuts. Then deploy as new ad variants against your existing campaigns.</span>
        </li>
      </ol>

      <h2
        className="font-extrabold mt-14 mb-5 text-tx"
        style={{ fontSize: 'clamp(26px,3vw,34px)', letterSpacing: '-.025em', lineHeight: 1.2 }}
      >
        The Results: 40% Lower CPL Across 12 Brands
      </h2>
      <p className="mb-6">
        We have now run this pipeline across 12 franchise brands and over 100 locations. The pattern is consistent: 30-50% reduction in cost per lead within the first 60 days, and a 20-35% lower CPM at the auction level. The brands that resist the most up front are usually the ones with the biggest jump, because their old creative was the most ad-feeling and the algorithm was punishing it hardest.
      </p>
      <p className="mb-6">
        The biggest unlock is not the cost savings. It is the speed. When the pipeline runs every week, you stop being one campaign refresh away from creative fatigue. You always have new variants in the pipeline. CPL stays flat instead of climbing every six weeks.
      </p>
      <p className="mb-12">
        If you want us to look at your account and tell you exactly which creative is dragging your CPL up, the audit is free. It takes 45 minutes. We screen-share, we tell you what we see, you decide what to do with it.
      </p>

      {/* Tag row */}
      <div className="flex flex-wrap gap-2 pt-10 border-t border-bd">
        {['UGC', 'Paid Ads', 'Franchise CPL', 'Meta Ads', 'Creative Strategy'].map(t => (
          <span key={t} className="text-[12px] font-bold text-tx-2 bg-off border border-bd px-3 py-1.5 rounded-full">
            {t}
          </span>
        ))}
      </div>
    </BlogPostLayout>
  );
}
