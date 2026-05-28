import type { Metadata } from 'next';
import BlogPostLayout from '@/components/blog/BlogPostLayout';
import MidArticleCTA from '@/components/blog/MidArticleCTA';
import PullQuote from '@/components/blog/PullQuote';
import { pageMetadata } from '@/lib/seo';
import { getPostBySlug } from '../posts';

const post = getPostBySlug('franchise-marketing-budget')!;

export const metadata: Metadata = pageMetadata({
  title: post.title,
  description: post.excerpt,
  path: `/blog/${post.slug}`,
  keywords: ['franchise marketing budget', 'how much franchise spends on ads', 'franchise marketing fee', 'franchise ad spend benchmark'],
});

export default function Post() {
  return (
    <BlogPostLayout post={post}>
      <p className="mb-6">
        Every franchise CFO, franchisor, and franchisee has asked us the same question at some point: how much should we be spending on marketing? Usually right before they ask: and how does that compare to what other franchises are spending?
      </p>
      <p className="mb-6">
        We pulled the actual numbers across the 100+ franchise locations we manage. Different verticals. Different brand maturities. Different revenue stages. Here is what real franchise marketing budgets look like, what is actually working at each tier, and what every franchisor should require in their brand standards.
      </p>

      <h2
        className="font-extrabold mt-14 mb-5 text-tx"
        style={{ fontSize: 'clamp(26px,3vw,34px)', letterSpacing: '-.025em', lineHeight: 1.2 }}
      >
        The Quick Answer (Then We Will Show the Math)
      </h2>
      <p className="mb-6">
        Across our network, the median franchise location spends $3,500 to $7,500 per month on marketing once they hit steady-state. New locations in their first 90 days run higher (we typically recommend $6K-$10K for a launch ramp). Mature locations with strong word-of-mouth often dial down to the lower end.
      </p>
      <p className="mb-6">
        Below that floor, you cannot generate meaningful local lead flow against competitors who are spending. Above the ceiling, you start hitting diminishing returns in any given market unless you have unusual demand.
      </p>

      <h2
        className="font-extrabold mt-14 mb-5 text-tx"
        style={{ fontSize: 'clamp(26px,3vw,34px)', letterSpacing: '-.025em', lineHeight: 1.2 }}
      >
        Per-Vertical Benchmarks
      </h2>
      <p className="mb-6">
        Budget varies meaningfully by vertical because the auction prices vary. Here is what we typically see for a single location at steady state:
      </p>
      <ul className="space-y-3 mb-8" style={{ fontSize: 17 }}>
        <li className="flex gap-4">
          <span className="text-teal font-extrabold flex-shrink-0">→</span>
          <span><strong className="text-tx font-bold">Salon suites:</strong> $2,500-$5,000/mo. Low CPM, narrow audience (beauty pros), high-intent. Often punches above its weight.</span>
        </li>
        <li className="flex gap-4">
          <span className="text-teal font-extrabold flex-shrink-0">→</span>
          <span><strong className="text-tx font-bold">EMS / Pilates / boutique fitness:</strong> $4,000-$8,000/mo. Crowded auction, premium pricing, longer sales cycle.</span>
        </li>
        <li className="flex gap-4">
          <span className="text-teal font-extrabold flex-shrink-0">→</span>
          <span><strong className="text-tx font-bold">Wellness and recovery (cryo, light therapy, IV):</strong> $4,500-$9,000/mo. Higher CPM, but high lifetime value justifies it.</span>
        </li>
        <li className="flex gap-4">
          <span className="text-teal font-extrabold flex-shrink-0">→</span>
          <span><strong className="text-tx font-bold">Beauty and aesthetics:</strong> $3,500-$6,500/mo. Strong before/after creative, transformation-first.</span>
        </li>
        <li className="flex gap-4">
          <span className="text-teal font-extrabold flex-shrink-0">→</span>
          <span><strong className="text-tx font-bold">Home services (HVAC, plumbing, cleaning):</strong> $5,000-$12,000/mo. Urgent-demand Google Ads spend pushes the average up.</span>
        </li>
        <li className="flex gap-4">
          <span className="text-teal font-extrabold flex-shrink-0">→</span>
          <span><strong className="text-tx font-bold">Lifestyle and entertainment (golf, recreation, clubs):</strong> $4,000-$10,000/mo. Mix of awareness and direct response.</span>
        </li>
      </ul>

      <PullQuote>
        &ldquo;The brands that win at scale do not have the biggest budgets. They have the most consistent budgets. $5K every month beats $15K in one month and zero in the next two.&rdquo;
      </PullQuote>

      <h2
        className="font-extrabold mt-14 mb-5 text-tx"
        style={{ fontSize: 'clamp(26px,3vw,34px)', letterSpacing: '-.025em', lineHeight: 1.2 }}
      >
        How That Budget Should Be Split
      </h2>
      <p className="mb-6">
        A $5,000 monthly location budget should not all go to one channel. Our default split, which we tune per vertical:
      </p>
      <ul className="space-y-3 mb-8" style={{ fontSize: 17 }}>
        <li className="flex gap-4">
          <span className="text-teal font-extrabold flex-shrink-0">55%</span>
          <span><strong className="text-tx font-bold">Meta Ads media spend.</strong> The workhorse for most consumer franchise verticals. Where new prospects discover the brand.</span>
        </li>
        <li className="flex gap-4">
          <span className="text-teal font-extrabold flex-shrink-0">20%</span>
          <span><strong className="text-tx font-bold">Google Ads media spend.</strong> Capture demand from people who already know they need the service. Heavy for home services, lighter for boutique fitness.</span>
        </li>
        <li className="flex gap-4">
          <span className="text-teal font-extrabold flex-shrink-0">15%</span>
          <span><strong className="text-tx font-bold">Tools and software.</strong> CRM, automation, dashboards, SMS, email. Often underfunded, often the thing that breaks the funnel.</span>
        </li>
        <li className="flex gap-4">
          <span className="text-teal font-extrabold flex-shrink-0">10%</span>
          <span><strong className="text-tx font-bold">Creative production.</strong> Sounds low, but with a UGC pipeline you do not need a big production budget. Most of the spend is editing time.</span>
        </li>
      </ul>

      <MidArticleCTA headline="Want us to benchmark your spend against your vertical?" body="Show us your ad accounts and we will tell you in 45 minutes whether you are over-spending, under-spending, or just spending in the wrong place." />

      <h2
        className="font-extrabold mt-14 mb-5 text-tx"
        style={{ fontSize: 'clamp(26px,3vw,34px)', letterSpacing: '-.025em', lineHeight: 1.2 }}
      >
        The Common Budget Mistakes We See Every Week
      </h2>
      <ol className="space-y-4 mb-8" style={{ fontSize: 17 }}>
        <li className="flex gap-4">
          <span className="text-teal font-extrabold flex-shrink-0">1.</span>
          <span><strong className="text-tx font-bold">All Meta, no Google.</strong> Or vice versa. You need both. Meta captures discovery. Google captures intent. Half the funnel is exposed if you only run one.</span>
        </li>
        <li className="flex gap-4">
          <span className="text-teal font-extrabold flex-shrink-0">2.</span>
          <span><strong className="text-tx font-bold">Zero budget for tools.</strong> A $5K media budget with no CRM is a $5K budget where most of the leads die. The tools layer is the difference between leads and revenue.</span>
        </li>
        <li className="flex gap-4">
          <span className="text-teal font-extrabold flex-shrink-0">3.</span>
          <span><strong className="text-tx font-bold">Inconsistent monthly spend.</strong> Heavy Q1, light Q2, panic Q3. The Meta algorithm needs consistent signal to optimize. Start-stop budgets reset the learning every time.</span>
        </li>
        <li className="flex gap-4">
          <span className="text-teal font-extrabold flex-shrink-0">4.</span>
          <span><strong className="text-tx font-bold">Marketing fee that does not actually buy marketing.</strong> A franchisor collecting a 2% marketing fee that goes to brand-level video production instead of franchisee local lead-gen is the most common complaint we hear in audits.</span>
        </li>
      </ol>

      <h2
        className="font-extrabold mt-14 mb-5 text-tx"
        style={{ fontSize: 'clamp(26px,3vw,34px)', letterSpacing: '-.025em', lineHeight: 1.2 }}
      >
        What Franchisors Should Require in Brand Standards
      </h2>
      <p className="mb-6">
        If you are a franchisor reading this, here is what we recommend baking into your operations manual:
      </p>
      <ul className="space-y-3 mb-8" style={{ fontSize: 17 }}>
        <li className="flex gap-4">
          <span className="text-teal font-extrabold flex-shrink-0">→</span>
          <span>Minimum monthly marketing spend tied to your vertical&apos;s benchmark. Not a percentage of revenue (that punishes growth), but a floor in dollars.</span>
        </li>
        <li className="flex gap-4">
          <span className="text-teal font-extrabold flex-shrink-0">→</span>
          <span>Required participation in centralized ad management. Franchisees running their own ads with no oversight is where the network performance gap shows up.</span>
        </li>
        <li className="flex gap-4">
          <span className="text-teal font-extrabold flex-shrink-0">→</span>
          <span>A CRM standard. Whichever you pick, require it. Lead routing, speed-to-lead, and brand-wide reporting all depend on this.</span>
        </li>
        <li className="flex gap-4">
          <span className="text-teal font-extrabold flex-shrink-0">→</span>
          <span>Quarterly creative refresh tied to UGC participation. Franchisees who shoot get fresher creative in their account.</span>
        </li>
      </ul>
      <p className="mb-12">
        The brands in our network that have these four standards in place hit network-wide CPL targets 70%+ of the time. The brands without them are flying blind.
      </p>

      <div className="flex flex-wrap gap-2 pt-10 border-t border-bd">
        {['Budgets', 'Franchise Operations', 'Franchisor', 'Benchmarks', 'Brand Standards'].map(t => (
          <span key={t} className="text-[12px] font-bold text-tx-2 bg-off border border-bd px-3 py-1.5 rounded-full">
            {t}
          </span>
        ))}
      </div>
    </BlogPostLayout>
  );
}
