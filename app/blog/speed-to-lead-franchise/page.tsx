import type { Metadata } from 'next';
import BlogPostLayout from '@/components/blog/BlogPostLayout';
import MidArticleCTA from '@/components/blog/MidArticleCTA';
import PullQuote from '@/components/blog/PullQuote';
import { pageMetadata } from '@/lib/seo';
import { getPostBySlug } from '../posts';

const post = getPostBySlug('speed-to-lead-franchise')!;

export const metadata: Metadata = pageMetadata({
  title: post.title,
  description: post.excerpt,
  path: `/blog/${post.slug}`,
  keywords: ['speed to lead franchise', 'franchise lead response time', 'franchise SMS automation', 'lead conversion rate'],
});

export default function Post() {
  return (
    <BlogPostLayout post={post}>
      <p className="mb-6">
        Harvard Business Review ran the numbers on lead response time back in 2011. The takeaway has not changed since: a lead contacted within 5 minutes is 21 times more likely to convert than one contacted 30 minutes later. After an hour, conversion drops 80%.
      </p>
      <p className="mb-6">
        Most franchise locations take hours. Some take days. The lead form fires at 9pm on a Saturday, sits in a CRM until the next franchisee shift on Monday, and by then the prospect has already booked with a competitor who answered the phone the same night. You paid for that lead twice: once to acquire it, then again to lose the close.
      </p>

      <h2
        className="font-extrabold mt-14 mb-5 text-tx"
        style={{ fontSize: 'clamp(26px,3vw,34px)', letterSpacing: '-.025em', lineHeight: 1.2 }}
      >
        Why Franchise Leads Are Especially Vulnerable
      </h2>
      <p className="mb-6">
        Franchise leads are higher-intent than most B2C leads. Someone filling out a form for a salon suite, a Pilates membership, or an EMS session has already done the research. They are comparing two or three options. The first one to respond wins by default.
      </p>
      <p className="mb-6">
        But franchise operations are also uniquely bad at speed. Most franchisees are also operators. They are in a session, doing a treatment, or running the floor. They are not sitting on inbox refresh. By the time they get to the lead, it is often hours later. The franchisor sees the lead come in on the dashboard but does not own the follow-up.
      </p>
      <p className="mb-6">
        That gap, between marketing spend and ops execution, is where most franchise marketing budgets die.
      </p>

      <h2
        className="font-extrabold mt-14 mb-5 text-tx"
        style={{ fontSize: 'clamp(26px,3vw,34px)', letterSpacing: '-.025em', lineHeight: 1.2 }}
      >
        The 90-Second Workflow We Deploy on Every Brand
      </h2>
      <p className="mb-6">
        Every franchise we onboard gets the same automated workflow on day one. Whether the lead form fires at 2pm or 2am, the lead gets:
      </p>
      <ul className="space-y-3 mb-8" style={{ fontSize: 17 }}>
        <li className="flex gap-4">
          <span className="text-teal font-extrabold flex-shrink-0">0:00</span>
          <span><strong className="text-tx font-bold">Form submission triggers.</strong> Lead lands in GoHighLevel pipeline, assigned to the right location based on zip code.</span>
        </li>
        <li className="flex gap-4">
          <span className="text-teal font-extrabold flex-shrink-0">0:03</span>
          <span><strong className="text-tx font-bold">SMS fires from the location&apos;s number.</strong> Conversational, signed by the franchisee, asks one question: when works for a call?</span>
        </li>
        <li className="flex gap-4">
          <span className="text-teal font-extrabold flex-shrink-0">0:12</span>
          <span><strong className="text-tx font-bold">Confirmation email lands.</strong> Includes booking link, location details, what to expect on the call. Builds trust while the SMS does the conversion work.</span>
        </li>
        <li className="flex gap-4">
          <span className="text-teal font-extrabold flex-shrink-0">1:30</span>
          <span><strong className="text-tx font-bold">Franchisee gets a task notification.</strong> If the lead has not replied to the SMS in 90 seconds, the franchisee is prompted to call directly. The dashboard shows the lead is hot.</span>
        </li>
      </ul>

      <PullQuote>
        &ldquo;The first time we ran this workflow, our show rate jumped from 41% to 67% in the first month. The leads were not better. We just got to them while they still cared.&rdquo;
      </PullQuote>

      <MidArticleCTA headline="See your real lead-response time in 45 minutes" body="We screen-share your CRM, pull the timestamps, and show you exactly where the leads are dying. Free." />

      <h2
        className="font-extrabold mt-14 mb-5 text-tx"
        style={{ fontSize: 'clamp(26px,3vw,34px)', letterSpacing: '-.025em', lineHeight: 1.2 }}
      >
        What It Actually Costs to NOT Have This
      </h2>
      <p className="mb-6">
        Let us do the math. A typical fitness franchise spends $4,500 a month on Meta ads at a $12 CPL. That is 375 leads a month per location. If 80% of those leads go cold after 60 minutes and you are responding in 4-6 hours, you are converting maybe 8% of them instead of the 25-35% you should be hitting.
      </p>
      <p className="mb-6">
        That is the difference between 30 booked sessions and 100 booked sessions per month. At $200 average ticket and a 60% close rate, you are leaving $8,400 on the table every month. Per location. $100K a year. For not responding to a lead in five minutes.
      </p>
      <p className="mb-6">
        The workflow that fixes this costs less than $200 a month per location to run and takes a week to deploy. There is no franchise marketing tactic with better ROI. None.
      </p>

      <h2
        className="font-extrabold mt-14 mb-5 text-tx"
        style={{ fontSize: 'clamp(26px,3vw,34px)', letterSpacing: '-.025em', lineHeight: 1.2 }}
      >
        Three Things to Audit on Your Own Today
      </h2>
      <ol className="space-y-4 mb-8" style={{ fontSize: 17 }}>
        <li className="flex gap-4">
          <span className="text-teal font-extrabold flex-shrink-0">1.</span>
          <span><strong className="text-tx font-bold">Pull your last 50 leads and time-stamp first contact.</strong> If your median is over 15 minutes, you have a speed-to-lead problem.</span>
        </li>
        <li className="flex gap-4">
          <span className="text-teal font-extrabold flex-shrink-0">2.</span>
          <span><strong className="text-tx font-bold">Check after-hours coverage.</strong> Half of franchise leads come in evenings and weekends. If your franchisees are not getting an SMS or task fired at 9pm Saturday, you are losing all those leads by Monday.</span>
        </li>
        <li className="flex gap-4">
          <span className="text-teal font-extrabold flex-shrink-0">3.</span>
          <span><strong className="text-tx font-bold">Check who owns the lead.</strong> If it is the franchisor watching the dashboard, leads will sit. The lead has to land in the franchisee&apos;s phone, automatically, with a clear next action.</span>
        </li>
      </ol>
      <p className="mb-12">
        Speed is the single highest-leverage thing a franchise system can fix. Better than new creative, better than more budget, better than a new agency. Fix this first, and everything else compounds.
      </p>

      <div className="flex flex-wrap gap-2 pt-10 border-t border-bd">
        {['CRM', 'Speed to Lead', 'SMS Automation', 'Franchise Operations', 'GoHighLevel'].map(t => (
          <span key={t} className="text-[12px] font-bold text-tx-2 bg-off border border-bd px-3 py-1.5 rounded-full">
            {t}
          </span>
        ))}
      </div>
    </BlogPostLayout>
  );
}
