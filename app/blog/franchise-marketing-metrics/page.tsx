import type { Metadata } from 'next';
import BlogPostLayout from '@/components/blog/BlogPostLayout';
import MidArticleCTA from '@/components/blog/MidArticleCTA';
import PullQuote from '@/components/blog/PullQuote';
import { pageMetadata } from '@/lib/seo';
import { getPostBySlug } from '../posts';

const post = getPostBySlug('franchise-marketing-metrics')!;

export const metadata: Metadata = pageMetadata({
  title: post.title,
  description: post.excerpt,
  path: `/blog/${post.slug}`,
  keywords: ['franchise marketing metrics', 'KPIs for franchise', 'franchise dashboard', 'CPL show rate', 'franchise marketing reporting'],
});

export default function Post() {
  return (
    <BlogPostLayout post={post}>
      <p className="mb-6">
        Most franchise owners check their dashboards once a week. The problem: most of them are looking at the wrong numbers. Impressions, reach, video views, follower count - all of those are vanity. None of them predict whether you will hit your revenue number this quarter.
      </p>
      <p className="mb-6">
        Here are the five metrics we tell every franchise owner in our network to check every week. Each one takes under two minutes to read. Together they tell you exactly where your marketing is healthy and where it is bleeding.
      </p>

      <h2
        className="font-extrabold mt-14 mb-5 text-tx"
        style={{ fontSize: 'clamp(26px,3vw,34px)', letterSpacing: '-.025em', lineHeight: 1.2 }}
      >
        1. Cost Per Lead (CPL) by Source
      </h2>
      <p className="mb-6">
        The single most important number. But not the network-wide average. The per-source, per-market CPL. Meta CPL in Phoenix vs Meta CPL in Austin. Google CPL in Phoenix vs Meta CPL in Phoenix.
      </p>
      <p className="mb-6">
        What healthy looks like: stable or trending down week over week. What unhealthy looks like: climbing 10%+ week over week with no obvious cause. That climbing CPL is your creative going stale or your audience saturating. Catch it early and refresh creative before it becomes a $3,000-a-month problem.
      </p>
      <p className="mb-6">
        How to read it in 30 seconds: look at the four-week trend line per source. If it has a slope going up and to the right, you have a problem developing.
      </p>

      <h2
        className="font-extrabold mt-14 mb-5 text-tx"
        style={{ fontSize: 'clamp(26px,3vw,34px)', letterSpacing: '-.025em', lineHeight: 1.2 }}
      >
        2. Lead-to-Booked-Appointment Rate
      </h2>
      <p className="mb-6">
        Marketing&apos;s job is to deliver leads. Operations&apos; job is to turn those leads into booked appointments. The handoff is where most franchise systems lose 40-60% of paid leads.
      </p>
      <p className="mb-6">
        Healthy benchmark for most consumer franchise verticals: 35-50% of leads should book an appointment within 7 days. Below 25% and you have either a speed-to-lead problem, a follow-up problem, or both.
      </p>

      <PullQuote>
        &ldquo;We have seen identical paid campaigns produce 4x different revenue outcomes across two franchisees in the same network. The difference was always the lead-to-booked rate. Always.&rdquo;
      </PullQuote>

      <h2
        className="font-extrabold mt-14 mb-5 text-tx"
        style={{ fontSize: 'clamp(26px,3vw,34px)', letterSpacing: '-.025em', lineHeight: 1.2 }}
      >
        3. Show Rate
      </h2>
      <p className="mb-6">
        Of the people who book an appointment, how many actually show up? In our network, the show-rate floor we accept is 65%. Healthy is 75%+. Anything under 60% means your booking confirmation flow is broken.
      </p>
      <p className="mb-6">
        Show rate is a marketing problem and an ops problem at the same time. Marketing controls the first impression (did the appointment feel valuable?). Ops controls the reminder sequence (did you actually remind them, twice, with conversational SMS not a clinical email?). Both have to fire to hit 75%+.
      </p>
      <p className="mb-6">
        How to read it in 30 seconds: weekly show-rate trend by location. A single location dipping under 60% is usually a reminder-sequence breakage. A network-wide dip is usually a creative-quality issue at the top of the funnel.
      </p>

      <h2
        className="font-extrabold mt-14 mb-5 text-tx"
        style={{ fontSize: 'clamp(26px,3vw,34px)', letterSpacing: '-.025em', lineHeight: 1.2 }}
      >
        4. Speed-to-Lead Median Response Time
      </h2>
      <p className="mb-6">
        This one is the easiest to fix and the one with the biggest immediate revenue lift. The median time from lead form submission to first human (or automated) outbound contact. Across the location. Across the week.
      </p>
      <p className="mb-6">
        Target: under 5 minutes. Acceptable: under 15 minutes. Anything over 1 hour is a money fire. Most franchises we audit are sitting at 4-6 hours when we first look. Within 30 days of deploying our standard speed-to-lead workflow, they are at 3 minutes.
      </p>
      <p className="mb-6">
        How to read it in 30 seconds: pull this week&apos;s leads, look at the timestamp difference between submitted_at and first_contacted_at. Sort by longest. Anything over an hour is a leak.
      </p>

      <MidArticleCTA headline="Want us to pull these 5 numbers for your franchise?" body="45 minutes, screen-share, free. We will show you exactly where you are leaking revenue and how to plug it." />

      <h2
        className="font-extrabold mt-14 mb-5 text-tx"
        style={{ fontSize: 'clamp(26px,3vw,34px)', letterSpacing: '-.025em', lineHeight: 1.2 }}
      >
        5. Cost Per Booked Appointment (CPA)
      </h2>
      <p className="mb-6">
        The honest version of cost per lead. CPL only tells you what you paid Meta or Google. CPA tells you what you actually paid to get a body in the door. The math is simple: total ad spend divided by total booked appointments.
      </p>
      <p className="mb-6">
        This is the number you should care about most as an owner. CPL can look great while CPA looks terrible. That gap is your funnel leakage. A $10 CPL with a $60 CPA means your lead-to-booked rate is 17%. Fix that, and your CPA halves overnight with the same media spend.
      </p>
      <p className="mb-6">
        How to read it in 30 seconds: this week&apos;s CPA vs last 4 weeks. Trend going down is healthy. Trend going up while CPL stays flat means your funnel is breaking somewhere between lead capture and the appointment slot.
      </p>

      <h2
        className="font-extrabold mt-14 mb-5 text-tx"
        style={{ fontSize: 'clamp(26px,3vw,34px)', letterSpacing: '-.025em', lineHeight: 1.2 }}
      >
        The Two-Minute Weekly Routine
      </h2>
      <p className="mb-6">
        Here is the order we tell franchise owners to check these in, every Monday morning:
      </p>
      <ol className="space-y-4 mb-8" style={{ fontSize: 17 }}>
        <li className="flex gap-4">
          <span className="text-teal font-extrabold flex-shrink-0">1.</span>
          <span><strong className="text-tx font-bold">CPL by source, trend line.</strong> 20 seconds. Anything climbing?</span>
        </li>
        <li className="flex gap-4">
          <span className="text-teal font-extrabold flex-shrink-0">2.</span>
          <span><strong className="text-tx font-bold">Lead-to-booked rate.</strong> 20 seconds. Above 35%?</span>
        </li>
        <li className="flex gap-4">
          <span className="text-teal font-extrabold flex-shrink-0">3.</span>
          <span><strong className="text-tx font-bold">Show rate.</strong> 20 seconds. Above 65%?</span>
        </li>
        <li className="flex gap-4">
          <span className="text-teal font-extrabold flex-shrink-0">4.</span>
          <span><strong className="text-tx font-bold">Speed-to-lead median.</strong> 20 seconds. Under 15 minutes?</span>
        </li>
        <li className="flex gap-4">
          <span className="text-teal font-extrabold flex-shrink-0">5.</span>
          <span><strong className="text-tx font-bold">Cost per booked appointment.</strong> 20 seconds. Trending down or flat?</span>
        </li>
      </ol>
      <p className="mb-6">
        That is two minutes of looking, every Monday. If all five are in the healthy zone, you have a system that compounds. If one is breaking, you know exactly where to send the conversation with your marketing team or agency this week.
      </p>
      <p className="mb-12">
        The franchisors who run this routine across every location in their network are also the franchisors who consistently hit their numbers. Everyone else is guessing.
      </p>

      <div className="flex flex-wrap gap-2 pt-10 border-t border-bd">
        {['Analytics', 'KPIs', 'Dashboards', 'CPL', 'Show Rate', 'Franchise Reporting'].map(t => (
          <span key={t} className="text-[12px] font-bold text-tx-2 bg-off border border-bd px-3 py-1.5 rounded-full">
            {t}
          </span>
        ))}
      </div>
    </BlogPostLayout>
  );
}
