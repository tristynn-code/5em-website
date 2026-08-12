import type { Metadata } from 'next';
import BlogPostLayout from '@/components/blog/BlogPostLayout';
import MidArticleCTA from '@/components/blog/MidArticleCTA';
import PullQuote from '@/components/blog/PullQuote';
import { pageMetadata } from '@/lib/seo';
import { getPostBySlug } from '../posts';

const post = getPostBySlug('ultimate-longevity-center-partnership')!;

export const metadata: Metadata = pageMetadata({
  title: post.title,
  description: post.excerpt,
  path: `/blog/${post.slug}`,
  keywords: ['Ultimate Longevity Center', 'longevity center Boulder', 'longevity franchise marketing', 'Sequel Brands', 'wellness franchise launch'],
});

export default function Post() {
  return (
    <BlogPostLayout post={post}>
      <p className="mb-6">
        Some news we have been sitting on for a few weeks: 5th Element Media is officially the launch marketing partner for Ultimate Longevity Center. The first location opens in Boulder, Colorado, and we are running the lead engine from day one - actually, from well before day one.
      </p>
      <p className="mb-6">
        If you have followed what we do with the Sequel Brands portfolio - Pilates Addiction, BODY20, beem Light Sauna, iFlex - you already know why this partnership makes sense. Same team, same operating playbook, a brand new category we genuinely believe in.
      </p>

      <h2
        className="font-extrabold mt-14 mb-5 text-tx"
        style={{ fontSize: 'clamp(26px,3vw,34px)', letterSpacing: '-.025em', lineHeight: 1.2 }}
      >
        Why Longevity, and Why Now
      </h2>
      <p className="mb-6">
        Longevity is where boutique fitness was a decade ago: massive consumer demand, science maturing fast, and almost nobody doing the local marketing well. People are not just trying to live longer anymore. They are actively shopping for places that help them measure, manage, and improve their healthspan - recovery, diagnostics, performance, all of it under one roof.
      </p>
      <p className="mb-6">
        That is exactly what Ultimate Longevity Center is building. A single destination for longevity services, designed to franchise. And Boulder is about the most on-brand launch market imaginable: one of the healthiest, most performance-obsessed cities in the country.
      </p>

      <h2
        className="font-extrabold mt-14 mb-5 text-tx"
        style={{ fontSize: 'clamp(26px,3vw,34px)', letterSpacing: '-.025em', lineHeight: 1.2 }}
      >
        The Unfair Advantage: We Already Run This Playbook
      </h2>
      <p className="mb-6">
        This is not a cold start. Ultimate Longevity Center is part of the Sequel Brands family, and we have been the marketing engine across that portfolio for a while now. The pre-opening fill playbook we are bringing to Boulder is the same one that took IMAGE Studios franchisees to 100% occupancy before opening day and put beem Light Sauna locations in the leads from the first week.
      </p>

      <PullQuote>
        &ldquo;The best time to start marketing a location is months before the doors open. Founding-member demand is the cheapest demand you will ever buy.&rdquo;
      </PullQuote>

      <p className="mb-5">What we are deploying for Boulder, in order:</p>
      <ul className="space-y-3 mb-8" style={{ fontSize: 17 }}>
        <li className="flex gap-4">
          <span className="text-teal font-extrabold flex-shrink-0">→</span>
          <span><strong className="text-tx font-bold">Pre-opening founding-member campaigns.</strong> Hyper-local Meta and Google ads targeting Boulder by zip cluster, built around early-access offers that fill the calendar before launch.</span>
        </li>
        <li className="flex gap-4">
          <span className="text-teal font-extrabold flex-shrink-0">→</span>
          <span><strong className="text-tx font-bold">UGC creative engine from the build-out.</strong> Construction progress, equipment install, the team - real footage from the actual location, not stock wellness imagery. The hyper-local reveal is the scroll-stopper.</span>
        </li>
        <li className="flex gap-4">
          <span className="text-teal font-extrabold flex-shrink-0">→</span>
          <span><strong className="text-tx font-bold">Speed-to-lead automation on day one.</strong> Every inquiry gets an SMS inside 90 seconds, an email confirmation, and a booking link. Longevity is a considered purchase - the first responder wins.</span>
        </li>
        <li className="flex gap-4">
          <span className="text-teal font-extrabold flex-shrink-0">→</span>
          <span><strong className="text-tx font-bold">The 5E Insight Engine.</strong> Real-time dashboards from the first dollar of spend, so the ULC team sees exactly which offers, creatives, and neighborhoods are converting.</span>
        </li>
      </ul>

      <MidArticleCTA
        headline="Launching a location of your own?"
        body="The pre-opening playbook works for any franchise vertical. Book a free 45-minute audit and we will map it to your launch."
      />

      <h2
        className="font-extrabold mt-14 mb-5 text-tx"
        style={{ fontSize: 'clamp(26px,3vw,34px)', letterSpacing: '-.025em', lineHeight: 1.2 }}
      >
        What Happens Next
      </h2>
      <p className="mb-6">
        Campaigns are spinning up now. We will share the launch numbers the same way we always do - real lead counts, real CPL, real occupancy math - once Boulder is open and the data is in. If the rest of the Sequel portfolio is any indication, this is going to be a fun one to watch.
      </p>
      <p className="mb-12">
        And if you are a franchisor eyeing the longevity space, or a franchisee trying to fill a location before the doors open, this is literally the work we do every day. Come talk to us.
      </p>

      <div className="flex flex-wrap gap-2 pt-10 border-t border-bd">
        {['News', 'Ultimate Longevity Center', 'Sequel Brands', 'Boulder', 'Pre-Opening Playbook', 'Wellness'].map(t => (
          <span key={t} className="text-[12px] font-bold text-tx-2 bg-off border border-bd px-3 py-1.5 rounded-full">
            {t}
          </span>
        ))}
      </div>
    </BlogPostLayout>
  );
}
