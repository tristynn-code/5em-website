import type { CaseStudy } from '../types';

export const study: CaseStudy = {
  slug: 'ultimate-longevity-center-landing-page-that-teaches',
  kind: 'result',
  brand: 'ultimate-longevity-center',
  brandName: 'Ultimate Longevity Center',
  vertical: 'Longevity & Wellness',
  title:
    'How a page that teaches took our first Ultimate Longevity Center from [[2.89% to 8.80%]] lead conversion',
  dek:
    'At the first Ultimate Longevity Center we launched, ads sent to the original page turned 2.89% of clicks into leads. We rebuilt the page to explain what a longevity center is before asking for anything, and it became the page for 20 centers. In October, a version that led with a $99 deposit cut conversion in half within a week.',
  cardTitle: 'Our first ULC center: 2.89% to 8.80% with a page that teaches',
  summary:
    'An education-first page took our first ULC center from 2.89% to 8.80% lead conversion (Jun 15 to Jul 31, 2026), then drew 11,715 Meta leads at $10.87 across 20 centers, Jul 1 to Oct 21.',
  published: '2026-10-22',
  readTime: '6 min',
  cover: {
    src: '/case-studies/ultimate-longevity-center-landing-page-that-teaches/cover.jpg',
    alt: 'A clinician draws blood from a seated client in a lit arch, the Lab photo from the Ultimate Longevity Center landing page',
    position: '45% 30%',
  },
  heroStats: [
    {
      value: '8.80%',
      label: 'Lead conversion on our page',
      sub: 'vs 2.89% on the original page, first center, ad level, Jun 15 to Jul 31, 2026',
    },
    {
      value: '11,715',
      label: 'Website leads across 20 centers',
      sub: '$10.87 cost per lead, 11.42% conversion, Jul 1 to Oct 21, 2026 (Meta-reported)',
    },
    {
      value: '4.05% to 10.55%',
      label: 'First center, every landing page ad set, June to July',
      sub: 'June vs July 2026, boosted Gary Brecka post included. Cost per lead $26.46 to $19.35',
    },
    {
      value: '4 of 4',
      label: 'New centers published in two minutes or less',
      sub: 'From created to published on our landing page builder, live since Aug 5, 2026. One edit to the shared page reaches every center on it',
    },
  ],
  tags: ['Landing Pages', 'Presale', 'Meta Ads'],
  timeline: [
    {
      when: 'Jun 18, 2026',
      title: 'First center goes live',
      text: 'ULC’s first center with Fifth Element starts presale ads, sending clicks to ULC’s own landing page.',
    },
    {
      when: 'Jun 23, 2026',
      title: 'Test approved',
      text: 'We flag a 3% lead submission rate and propose our own page. Sequel Brands’ CMO approves the test the same day.',
    },
    {
      when: 'Jul 1 to 31, 2026',
      title: 'Asked for before it ran',
      text: 'ULC asks for the page at every center Fifth Element launches, a day before the first ad points to it. Ads switch on Jul 2, and pages for 11 locations are built by month end, 8 of them live in ads.',
    },
    {
      when: 'Aug 13, 2026',
      title: 'Price after the form',
      text: 'Tristynn McGowan writes to ULC that using "$99 down" as the submit button would tank conversion.',
    },
    {
      when: 'Oct 5 to 14, 2026',
      title: 'The $99 test, and the fix',
      text: 'We publish a page that leads with the new $99-down offer at 7 centers. Conversion halves, our weekly alert flags it on Oct 13, and the page is re-led with 20% off for life on Oct 14.',
    },
  ],
  stack: [
    'Meta Ads',
    'Presale Landing Page',
    'Fifth Element Landing Page Builder',
    'HubSpot Form Routing',
    'Meta Pixel Lead Tracking',
    'Weekly LSR Alerts',
  ],
  body: [
    { type: 'h2', kicker: 'The Situation', text: 'People clicked. Few signed up.' },
    {
      type: 'p',
      text: 'Ultimate Longevity Center, a Sequel Brands franchise built around Gary Brecka, sells something most people have never bought: a longevity membership. It is a new category, and most visitors arrive not knowing what one includes. Its first center to launch presale with Fifth Element started ads on June 18, 2026, and the ads sent people to ULC’s own landing page.',
    },
    {
      type: 'p',
      text: 'Five days in, Tristynn McGowan, Fifth Element’s Founder and CEO, reported to ULC and Sequel Brands that the page was sitting at a **3% lead submission rate** (LSR): about 3 leads for every 100 visits, against a norm of around 10%. Tristynn’s read was that the problem sat between the click and the form.',
    },
    {
      type: 'quote',
      text: 'My theory is that ULC is just hard to explain. Since we’re creating a new category in longevity, the landing page might not be explaining ULC the best.',
      name: 'Tristynn McGowan',
      role: 'Founder & CEO, Fifth Element',
    },
    {
      type: 'p',
      text: 'The same day, Nate Chang, Chief Marketing Officer of Sequel Brands, replied: "Yes, let’s proceed with testing your landing pages vs ours for now."',
    },
    { type: 'h2', kicker: 'What We Did', text: 'Teach first, then ask' },
    {
      type: 'p',
      text: 'The non-obvious decision was to spend the page on explaining, not selling. The form is a free hand-raise. A visitor who does not know what ULC is has no reason to raise a hand, so the page had to answer that before it asked for anything.',
    },
    {
      type: 'steps',
      items: [
        {
          title: 'Explain the category',
          text: 'Open with what Ultimate Longevity Center is and who it is for, in plain language, before any offer.',
        },
        {
          title: 'Show the three spaces',
          text: 'Walk through the Lab, the Playground and the Apothecary so a visitor can picture a visit.',
        },
        {
          title: 'Keep the face from the ad',
          text: 'The ads featured Gary Brecka, the name ULC is built around, so the page did too: visitors met the same person after the click.',
        },
        {
          title: 'Give a reason to act now',
          text: 'Present the founding offer as 25% off for life for the first 50 members, with **no prices on the page**.',
        },
        {
          title: 'Keep the plumbing exact',
          text: 'One permanent URL per center, the HubSpot form carrying each center’s routing, and the Meta Lead event firing only on the thank-you page.',
        },
      ],
    },
    {
      type: 'creative',
      title: 'From the ad to a page that explains first',
      caption:
        'Chandler, AZ, a later center on the same page, as live on Oct 22, 2026; the first center is not shown. Chandler drew 1,286 leads at $7.94 from this page, Jun 1 to Oct 21, 2026.',
      items: [
        {
          kind: 'image',
          src: '/case-studies/ultimate-longevity-center-landing-page-that-teaches/ad-1.jpg',
          alt: 'Vertical Ultimate Longevity Center ad for Chandler with Gary Brecka in a sauna and the line Join the VIP List',
          label: 'Gary Brecka VIP list ad, Chandler',
          stat: '35 leads at $5.94',
          note: 'Meta, Jul 13 to Oct 21, 2026, one of 3 ad sets that ran this image. 13.31% of link clicks became leads on the landing page',
        },
        {
          kind: 'image',
          src: '/case-studies/ultimate-longevity-center-landing-page-that-teaches/page-1.jpg',
          alt: 'Chandler landing page on a phone: The Future of Longevity, with a plain paragraph on what Ultimate Longevity Center is and no price or form on the first screen',
          label: 'First screen after the click: what ULC is',
        },
        {
          kind: 'image',
          src: '/case-studies/ultimate-longevity-center-landing-page-that-teaches/page-2.jpg',
          alt: 'Chandler landing page on a phone: Understand. Restore. Optimize., explaining how the three spaces work, starting with The Lab',
          label: 'Then the three spaces, starting with the Lab',
        },
      ],
    },
    {
      type: 'p',
      text: 'Leaving prices off was ULC’s call as much as ours. Elise Budowanec, ULC’s Director of Marketing, put it plainly on June 29: "The primary goal of the page is lead generation, not to close the sale."',
    },
    {
      type: 'p',
      text: 'Elise did not wait for results. On July 1, a day before the first ad pointed to the new page, she asked:',
    },
    {
      type: 'quote',
      text: 'Can you launch this landing page for Cherry Knolls as well? And any center you launch moving forward?',
      name: 'Elise Budowanec',
      role: 'Director of Marketing, Ultimate Longevity Center',
    },
    {
      type: 'p',
      text: 'The first center’s ads switched to the new page on July 2. By July 31, 2026, pages for 11 ULC locations had been built on it, and 8 centers were running ads to it that month. Since our landing page builder went live on August 5, four new ULC centers went from created to published in two minutes or less, and one edit to the shared page reaches every center on it.',
    },
    { type: 'h2', kicker: 'The Result', text: 'From 2.89% to 8.80%, then 20 centers' },
    {
      type: 'table',
      columns: ['Destination', 'Ads', 'Spend', 'Link clicks', 'Leads', 'Conversion'],
      rows: [
        ['ULC’s original page', '44', '$734.33', '450', '13', '2.89%'],
        ['Fifth Element page', '25', '$4,416.75', '1,887', '166', '8.80%'],
      ],
      caption:
        'Our first ULC center, ads by destination, Jun 15 to Jul 31, 2026, Meta Ads data at the ad level. Ads with a readable destination only: excludes a boosted Gary Brecka announcement post (8 ads, $4,314.73, 293 leads) whose link Meta does not report. Conversion = leads divided by link clicks.',
    },
    {
      type: 'p',
      text: 'At the same center, ads sent to our page converted at **8.80%**, against 2.89% for ads sent to the original. Three honest caveats. The windows differ (the original page ran mostly June 18 to July 2, ours from July 2). The new page launched alongside new ad sets and ads, some adding an income filter, so not all of the lift is the page. And we cannot confirm the original page fired the Lead event as reliably as ours, so its rate may be understated. Counting every landing page ad set at that center by month, the Gary post included, conversion went from 4.05% in June to 10.55% in July, and cost per lead from $26.46 to $19.35.',
    },
    {
      type: 'p',
      text: 'The bigger proof is what happened when the page went to every center we launched. From July 1 to October 21, 2026, landing page ad sets across **20 ULC centers** spent $127,324.22, drew 102,548 link clicks and produced **11,715 leads at $10.87**, an 11.42% conversion rate. On a September 18 call, Elise told the team that the centers launched after the first one had "reaped the rewards of that page," and that it was "doing a lot in terms of our lead submission rate." On the same call she added: "I think lead quality is good."',
    },
    { type: 'cta' },
    { type: 'h2', kicker: 'The Proof', text: 'Lead with the price, and conversion halves' },
    {
      type: 'p',
      text: 'The cleanest evidence came from a test that did not work. ULC’s founding offer had moved to $99 down by mid-August, and ULC cleared it for pages and ads. On October 5 and 6 our team published a page that led with it at 7 centers. Eight other centers stayed on the 25%-off page (two briefly took the $99 version on October 5 and 6). That gave us a control group.',
    },
    {
      type: 'chart',
      title: 'Leading with $99 halved conversion. The control group held.',
      subtitle: 'Leads per link click, landing page ad sets only, 2026',
      suffix: '%',
      data: [
        { label: 'Sep 22 to Oct 4: 7 test centers', value: 8.87 },
        { label: 'Sep 22 to Oct 4: 8 control centers', value: 10.97 },
        { label: 'Oct 7 to 13: test ($99-led page)', value: 4.44, highlight: true },
        { label: 'Oct 7 to 13: control', value: 10.92 },
        { label: 'Oct 15 to 21: test (20% off leads)', value: 9.26, highlight: true },
        { label: 'Oct 15 to 21: control', value: 9.74 },
      ],
      note: 'Test: 7 centers moved to the $99-led page on Oct 5 and 6. Control: 8 centers on the 25%-off founding page (7 with spend Oct 15 to 21; two were briefly published to the $99 version Oct 5 to 6). Four test centers also moved onto the page builder on Oct 6 with the same pixel and form. Meta Ads data, observational comparison.',
    },
    {
      type: 'p',
      text: 'Conversion at the 7 centers fell from 8.87% to **4.44%** and cost per lead (CPL) nearly doubled, from $17.39 to $33.00, while the control group went from 10.97% to 10.92%. New "$99" ads also launched that week, so we split them out. The ads that did not change at all went from 8.87% to 4.95% while the page led with the deposit, then to 11.66% once it did not. The new ads with "$99" in the copy were still converting at 5.76% after the page was fixed. Four of the seven centers also moved onto our page builder that week, but a parity check confirmed the same pixel and form (144 of 144), and conversion recovered on that host once the page changed. That points at the price, not the ads or the plumbing.',
    },
    {
      type: 'p',
      text: 'Our weekly performance alert caught it. On October 13, Drew Waelde, Head of Agency Operations, wrote to ULC that "asking for $99 down upfront is too big of a commitment at this point in the funnel." Elise answered the next morning: "I think we should switch the landing page back as soon as possible." That day the page was re-led with "Lock in 20% off for life" and "no payment needed," with the $99 still on the page, further down. What changed was what came first. The next week the 7 centers converted at **9.26%**.',
    },
    {
      type: 'creative',
      title: 'The re-led page: 20% off for life first, the $99 further down',
      caption:
        'Chapel Hill, NC, one of the 7 test centers, as live on Oct 22, 2026, after the Oct 14 change. The $99-led version that ran there Oct 6 to 14 was not kept, so it is not shown.',
      items: [
        {
          kind: 'page',
          src: '/case-studies/ultimate-longevity-center-landing-page-that-teaches/page-3.jpg',
          alt: 'Chapel Hill landing page hero reading Lock in 20% off for life, with Claim your spot in 30 seconds, no payment needed, next to an empty sign-up form',
          label: 'Hero after the fix: 20% off, no payment needed',
        },
        {
          kind: 'page',
          src: '/case-studies/ultimate-longevity-center-landing-page-that-teaches/page-4.jpg',
          alt: 'How it works card: claim your spot with no payment, the team reaches out, then step 3, reserve your founding spot with $99 down',
          label: 'Step 3: the $99 deposit, after the form',
        },
      ],
    },
    {
      type: 'p',
      text: 'It matched a risk the team had named in August. On August 13, Tristynn wrote to ULC: "We know that if we use ‘$99 down’ as the CTA button ... our LSR will tank." He proposed explaining the $99 on the page and keeping it off the button. In October, the control group showed the cost within a week.',
    },
    { type: 'h2', kicker: 'Why It Worked', text: 'A new category has to teach before it asks' },
    {
      type: 'p',
      text: 'A visitor arriving from an ad for something unfamiliar is asking one question: what is this? A page that answers it earns the form fill. A page that skips it, or asks for money first, turns curiosity into a bounce. Wording mattered too. When three centers swapped the specific 25%-off, first-50 offer for a vaguer "founding memberships are now open," conversion fell from 11.98% to 8.72% (Sep 4 to 17 vs Sep 19 to Oct 4, 2026) while 11 other centers went from 10.40% to 10.05%. The three also moved to the page builder that day, with the same pixel and form.',
    },
    {
      type: 'callout',
      title: 'The lesson',
      text: 'A new category has to teach before it asks. Explain what the visitor is signing up for, ask for a name, and keep the price for after the form.',
    },
    { type: 'h2', kicker: 'What This Means for Your Brand', text: 'Treat the page as part of the offer' },
    {
      type: 'p',
      text: 'Tristynn put it to ULC this way on September 18: Meta’s Instant Forms are "consistent, but consistently average," while "we view landing pages as the ends of the bell curve," landing near 3% or near 20%. That spread is why the page deserves the same testing as the ads. Build one strong page, roll it out on permanent URLs so every location gets the improvement at once, and keep a control group so you can tell a page problem from an ad problem in days, not months. Across brands, 51 of the 55 studio publishes in our builder were done by our Head of Brand and Creative, a designer, not an engineer.',
    },
    {
      type: 'p',
      text: 'Pages also wear out. The 8 ULC centers live by July went from 14.27% conversion in July to 12.02% in August and 10.77% in September, while the cost per thousand impressions (CPM) rose from $35.39 to $40.25 and three of them moved to the vaguer offer page on September 18. October 1 to 21 fell to 8.38%, a window that includes the $99 page. Treat page refreshes like new creative, and keep the price out of the headline and the button.',
    },
  ],
  sources:
    'Meta Ads data pulled read-only by Fifth Element from the Meta Graph API on Oct 22, 2026, landing-page-optimized ad sets only (Instant Form ad sets excluded): first ULC center, ad level by destination, Jun 15 to Jul 31, 2026 (excludes 8 boosted-post ads whose destination Meta does not report), and the same center by month at the ad set level, June and July 2026; 20 ULC centers, Jul 1 to Oct 21, 2026 (includes the first center’s early-July original-page ads and the boosted post); $99 test and control windows, Sep 22 to Oct 21, 2026; offer-wording comparison, Sep 4 to Oct 4, 2026; monthly trend for the 8 July centers, Jul 1 to Oct 21, 2026. Leads are Meta-reported (pixel Lead event on the thank-you page) and have not been reconciled to ULC’s CRM. Conversion = leads divided by link clicks. Page launch dates from the Fifth Element landing page platform and repository commit history; first spend dates from Fifth Element reporting. These are observational comparisons, not randomized tests. Quotes from Slack, email and a recorded call, Jun 23 to Oct 14, 2026.',
  order: 4,
  seoKeywords: [
    'franchise landing page conversion',
    'presale landing page',
    'Ultimate Longevity Center marketing',
    'lead submission rate',
    'franchise Meta ads',
    'landing page price test',
  ],
};
