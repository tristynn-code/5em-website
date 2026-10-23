import type { CaseStudy } from '../types';

export const study: CaseStudy = {
  slug: 'landing-page-tests-playbook',
  kind: 'playbook',
  brand: 'network',
  brandName: 'Fifth Element',
  vertical: 'Franchise Marketing',
  title:
    'Leading with a $99 deposit [[cut presale conversion from 8.87% to 4.44%]]: landing page lessons from 28 franchise studios',
  dek:
    'When 7 Ultimate Longevity Center locations led their presale page and new ads with a $99 deposit, conversion fell from 8.87% to 4.44% in a week while 8 control centers held at 10.92%. Once the page led with the discount instead, ads without $99 in the copy converted at 11.66%. Here are the six rules our tests across 28 franchise studios taught us.',
  cardTitle: 'A $99 deposit halved presale conversion: 6 landing page rules',
  summary:
    'When 7 ULC centers led their page and new ads with a $99 deposit, conversion fell from 8.87% to 4.44% in a week while 8 control centers held at 10.92%. Five more rules from 28 studios.',
  published: '2026-10-22',
  readTime: '7 min',
  cover: {
    src: '/case-studies/landing-page-tests-playbook/cover.jpg',
    alt: 'The Playground photo from the Ultimate Longevity Center presale pages: a hyperbaric chamber opening onto a lit hallway with the Ultimate Longevity Center sign',
    position: '50% 50%',
  },
  heroStats: [
    {
      value: '4.44%',
      label: 'Conversion with $99 leading the page and ads',
      sub: 'Oct 7 to 13, 2026, at 7 ULC centers, down from 8.87% (Sep 22 to Oct 4); 8 control centers held at 10.92%',
    },
    {
      value: '11.66%',
      label: 'Ads without $99 in the copy, after the page fix',
      sub: 'Oct 15 to 21, 2026, up from 4.95% the week the page led with the deposit',
    },
    {
      value: '11.98% to 8.72%',
      label: 'Conversion after a vague offer replaced a specific one',
      sub: '3 ULC centers, Sep 4 to 17 vs Sep 19 to Oct 4, 2026, while 11 unchanged centers went from 10.40% to 10.05%',
    },
    {
      value: '34',
      label: 'Location pages live on our builder',
      sub: 'As of Oct 22, 2026, 30 of them for ULC and iFlex. Six locations went from creation to first publish in 0 to 29 minutes',
    },
  ],
  tags: ['Landing Pages', 'Conversion Rate', 'Presale'],
  timeline: [
    {
      when: 'Jun 12, 2026',
      title: 'iFlex rebuild',
      text: 'An iFlex studio in North Carolina moves from an offer-first page to one that explains assisted stretching before it asks for anything.',
    },
    {
      when: 'Jul 2, 2026',
      title: 'ULC teach-first page',
      text: 'ULC’s first presale center moves its ads from the corporate page to ours. ULC asks for it at every center we launch from then on.',
    },
    {
      when: 'Aug 14, 2026',
      title: 'Price after the form',
      text: 'On our draft ULC page, we move the new $99 deposit off the page and onto the thank-you page.',
    },
    {
      when: 'Sep 18, 2026',
      title: 'The vague offer test',
      text: 'Three ULC centers swap "Only the first 50 members get the founding rate" for "Founding memberships are now open." Conversion falls from 11.98% to 8.72%.',
    },
    {
      when: 'Oct 5 to 14, 2026',
      title: 'The $99 page, and the fix',
      text: 'Our page leading with the $99 deposit goes live at 7 centers and conversion halves. Drew flags it Oct 13; on Oct 14 the page is re-led with the discount.',
    },
  ],
  stack: [
    'Fifth Element Landing Page Builder',
    'Presale Landing Page',
    'Meta Ads',
    'Meta Instant Forms',
    'HubSpot Form Routing',
    'Meta Pixel Lead Tracking',
    'Control-Group Analysis',
  ],
  body: [
    { type: 'h2', kicker: 'The Problem', text: 'Most agencies test the ads and leave the page alone' },
    {
      type: 'p',
      text: 'In most franchise marketing, the landing page is built once, approved, and left alone while the testing budget goes to ads. But the page is where a click becomes a lead. Instant Forms tend to be consistent but average. Landing pages sit at the ends of the bell curve: a page can convert at 3%, or at 20%.',
    },
    {
      type: 'p',
      text: 'From June to October 2026 we ran landing pages for 20 Ultimate Longevity Center (ULC) and 8 iFlex Stretch Studios locations. We judge each page on lead submission rate (LSR), the share of people who click an ad and then submit the form. Nothing below is a randomized test: each is a dated change with its confounders stated, and the first has a control group.',
    },
    { type: 'h2', kicker: 'Lesson 1', text: 'The form is a free hand-raise. The price goes after it.' },
    {
      type: 'p',
      text: 'In August, ULC’s founding offer became $99 down, and on August 14 we moved the deposit off our draft page and onto the thank-you page. In October we published a different page that led with the deposit. It went live at 7 centers on October 5 and 6, 2026, while 8 centers stayed on 25%-off founding pages through all three measured windows.',
    },
    {
      type: 'p',
      text: 'From October 7 to 13, the 7 centers spent $3,794.57 on landing page ads and got 115 leads from 2,589 link clicks. Conversion fell to **4.44%**, from 8.87% over September 22 to October 4, and cost per lead (CPL) nearly doubled, from $17.39 to $33.00. The control group held at 10.92%, against 10.97% before.',
    },
    {
      type: 'p',
      text: 'New "$99" ads launched October 8 and 9, so we split them out. Ads whose copy never mentioned $99 fell from 8.87% to 4.95%. Four of the 7 centers also moved page hosts on October 6, with the same pixel and form confirmed.',
    },
    {
      type: 'chart',
      title: 'The $99 page, then the fix',
      subtitle: 'Lead submission rate, ads without $99 in the copy at the 7 test centers vs the 8 control centers, ULC landing page ad sets, 2026',
      suffix: '%',
      data: [
        { label: 'Control, Sep 22 to Oct 4', value: 10.97 },
        { label: 'Test centers, Sep 22 to Oct 4', value: 8.87 },
        { label: 'Control, Oct 7 to 13', value: 10.92 },
        { label: 'Test centers, $99-led page, Oct 7 to 13', value: 4.95, highlight: true },
        { label: 'Control, Oct 15 to 21', value: 9.74 },
        { label: 'Test centers, re-led page, Oct 15 to 21', value: 11.66, highlight: true },
      ],
      note: 'Test centers: ads whose copy never mentioned $99 (5 of the 7 centers ran them Oct 15 to 21); some were new ad sets launched Oct 9 and 12. Ads with "$99" in the copy (3.66%, then 5.76%) are excluded; with them, the 7 centers ran 4.44%, then 9.26%. Control: 8 centers on 25%-off founding pages (7 with spend Oct 15 to 21; 2 moved to a newer 25%-off page on Oct 16 and 20). Meta Ads data, observational comparison.',
    },
    {
      type: 'p',
      text: 'Drew Waelde, our Head of Agency Operations, flagged the drop to ULC on October 13, writing that asking for $99 down up front was too big a commitment at that point in the funnel. Elise Budowanec, Director of Marketing at Ultimate Longevity Center, replied the next morning asking to switch the page back as soon as possible. That day the page was re-led with "Lock in 20% off for life" and "no payment needed," with the $99 further down. From October 15 to 21, ads without $99 in the copy converted at **11.66%** at a $12.06 CPL, above the control’s 9.74% (some were new ad sets from October 9 and 12). Ads with "$99" in the copy reached only 5.76%.',
    },
    {
      type: 'creative',
      title: 'Same center, same pages: a $99 ad and a VIP list ad',
      caption:
        'Both ran in landing page ad sets at East Boca, one of the 7 test centers, every day from Oct 9 to 21, 2026, so their clicks reached the same page on the same days. They sat in different ad sets. Meta-reported leads.',
      items: [
        {
          kind: 'image',
          src: '/case-studies/landing-page-tests-playbook/ad-1.jpg',
          alt: 'Vertical Ultimate Longevity Center ad for Boca Raton: a man having a scan with a handheld device, with $99 Down founding memberships',
          label: '"$99 Down" ad',
          stat: '19 leads at $20.89',
          note: 'Meta, Oct 9 to 21, 2026, this ad only. 6.07% of link clicks became leads',
        },
        {
          kind: 'image',
          src: '/case-studies/landing-page-tests-playbook/ad-2.jpg',
          alt: 'Vertical Ultimate Longevity Center ad: a hyperbaric chamber opening onto a lit hallway, Coming Soon Boca Raton, Join the VIP list for early access',
          label: 'VIP list ad, no price',
          stat: '37 leads at $14.16',
          note: 'Meta, Oct 9 to 21, 2026, this ad only. 10.63% of link clicks became leads',
        },
      ],
    },
    { type: 'h2', kicker: 'Lesson 2', text: 'Teach before you ask' },
    {
      type: 'p',
      text: 'ULC sells a longevity membership, a category most visitors have never bought. At its first presale center with us, the ads first pointed at the corporate page, converting near 3% five days in. On June 23, Nate Chang, Chief Marketing Officer of Sequel Brands, approved a test of our landing pages against corporate’s. Our page explained ULC, walked through its Lab, Playground and Apothecary, leaned on Gary Brecka’s authority, and presented the founding offer, 25% off for the first 50, with no prices.',
    },
    {
      type: 'quote',
      text: 'The primary goal of the page is lead generation, not to close the sale.',
      name: 'Elise Budowanec',
      role: 'Director of Marketing, Ultimate Longevity Center (June 29, 2026)',
    },
    {
      type: 'p',
      text: 'From June 15 to July 31, 2026, ads pointed at the corporate page converted at **2.89%** (13 leads from 450 link clicks) at a $56.49 CPL; ads pointed at ours converted at **8.80%** (166 leads from 1,887 clicks) at $26.61. The windows differ, the corporate sample is small, a boosted post with an unreadable destination is excluded, and the corporate page may not have fired the Lead event reliably. On July 1, Elise asked for our page at the next center and at every center we launch from then on.',
    },
    {
      type: 'p',
      text: 'iFlex pointed the same way, on weaker evidence. At a studio in North Carolina, a June 12 rebuild that taught assisted stretching before the form took conversion from 7.98% (13 leads, June 3 to 11) to 19.05% (44 leads, June 12 to 25); Instant Forms in the same campaign rose 1.37x. But the radius widened from 2 to 4 miles that day, tracking changed with the rebuild, and iFlex counts may be inflated up to 2x by a duplicate Lead event. Treat it as directional.',
    },
    {
      type: 'creative',
      title: 'Teaching the category before the form',
      caption: 'Live pages we built, Oct 22, 2026. Neither is the first ULC center or the North Carolina iFlex studio described above.',
      items: [
        {
          kind: 'page',
          src: '/case-studies/landing-page-tests-playbook/page-1.jpg',
          alt: 'ULC page section Understand. Restore. Optimize., opening with The Lab: precision diagnostics, a biomarker panel, hormonal assessment and IV therapy, beside a photo of a clinician with a client',
          label: 'ULC: what a visit covers, before the form',
          note: 'ULC Overland Park, below the hero and above the form',
        },
        {
          kind: 'page',
          src: '/case-studies/landing-page-tests-playbook/page-2.jpg',
          alt: 'iFlex Richmond Broad Street page section: So, what exactly is assisted stretching? with the 50-minute Full-Body Reset and the 25-minute Targeted Tune-Up',
          label: 'iFlex: what assisted stretching is',
          note: 'iFlex Richmond Broad Street, on the original iFlex page',
        },
      ],
    },
    { type: 'h2', kicker: 'Lesson 3', text: 'A specific offer beats a vague one' },
    {
      type: 'p',
      text: 'On September 18, three ULC centers moved to a version briefed to keep the offer vague, with no specific percentage for founding memberships. "Only the first 50 members get the founding rate" became "Founding memberships are now open." Conversion fell from **11.98% to 8.72%** (September 4 to 17 vs September 19 to October 4) and CPL rose from $11.48 to $16.07, while 11 other ULC centers went from 10.40% to 10.05%. A cap gives a reason to act today; "open" does not. Confounders: the page host changed that day (same pixel and form confirmed), and all three had held their founding membership sales between August 14 and September 4.',
    },
    { type: 'cta' },
    { type: 'h2', kicker: 'Lesson 4', text: 'Pages wear out' },
    {
      type: 'table',
      columns: ['Month, 2026', 'Conversion', 'Cost per lead', 'CPM'],
      rows: [
        ['July', '14.27%', '$7.55', '$35.39'],
        ['August', '12.02%', '$9.20', '$36.53'],
        ['September', '10.77%', '$13.72', '$40.25'],
        ['October 1 to 21', '8.38%', '$18.06', '$41.14'],
      ],
      caption:
        'The 8 ULC centers live by July, landing page ad sets only. From September 18, 3 of them ran the vague-offer page (Lesson 3); October includes the $99 page at 6 of them (Lesson 1).',
    },
    {
      type: 'p',
      text: 'Same centers, lower every month, and the slide began before either page change: 14.27% in July, 12.02% in August. Most of these centers also held founding membership sales in August and September, and some offers then stepped down from 25% to 20%. Rising CPM (the cost to show an ad 1,000 times) explains part of the cost increase, not the conversion drop. One iFlex studio in California went from 13.60% at $7.95 (June 17 to 30, 2026) to 5.45% at $33.40 (October 1 to 21), with the iFlex tracking caveat.',
    },
    { type: 'h2', kicker: 'Lesson 5', text: 'Prettier is not the same as better' },
    {
      type: 'p',
      text: 'In August, two iFlex studios moved to a premium redesign our creative team built on the brand’s design system. Over three weeks before vs after, one fell from 5.98% to 3.54%, the other from 10.54% to 7.33%, while three studios on the original page held at 9.65% to 9.56%. Samples were small (19 and 14 leads after) and budgets were falling. A redesign should beat the incumbent on a slice of traffic before it replaces it.',
    },
    { type: 'h2', kicker: 'Lesson 6', text: 'At ULC, Instant Forms were cheaper per lead, not better leads' },
    {
      type: 'p',
      text: 'From July 1 to October 21, 2026, ULC’s Instant Form ad sets at 6 centers converted at 17.82% at $9.85 per lead, under the page’s $10.87. Then one center ran Instant Forms from September 29 to October 5 at a $7.63 CPL. On October 2 its team told us the latest roughly 45 leads had produced no conversions, with leads from outside the area. We moved the center back to the landing page on October 6.',
    },
    {
      type: 'p',
      text: 'At 8 Pilates Addiction studios on corporate’s own landing pages, converting under 10%, adding Instant Forms beside the page lifted pooled conversion from 7.64% to 14.38% and cut CPL from $20.79 to $13.99 (14 days before vs after each change, changes made April 20 to August 22, 2026). At three studios already at 10% or better, CPL rose from $11.42 to $15.56 (one window overlapped a Founders 50 sprint). We have not yet pulled show or close rates by lead source from the CRMs, so lead quality here is what owners and our team saw, not a measured rate.',
    },
    { type: 'h2', kicker: 'What We Do Now', text: 'The landing page rules we run' },
    {
      type: 'steps',
      items: [
        {
          title: 'Keep the form free',
          text: 'No price or deposit before the form or in the ad.',
        },
        {
          title: 'Teach the category first',
          text: 'Explain the service and what a visit looks like before the form.',
        },
        {
          title: 'Make the offer specific',
          text: 'A percentage and a cap, not an open-ended invitation.',
        },
        {
          title: 'Change one thing and keep a control',
          text: 'Hold some locations on the old page and report LSR by location every week.',
        },
        {
          title: 'Refresh before it fatigues',
          text: 'Plan the next page version before the current one wears out.',
        },
        {
          title: 'Add Instant Forms, do not swap to them',
          text: 'Use them beside the page when conversion drops under 10% or a deadline needs volume, not as the default.',
        },
      ],
    },
    { type: 'h2', kicker: 'The System', text: 'Built so a page test takes minutes' },
    {
      type: 'p',
      text: 'Our landing page builder went live on August 5, 2026. Six locations built on it went from creation to first publish in 0, 1, 1, 2, 3 and 29 minutes. Ralf Ocampo, our Head of Brand and Creative, made 51 of the builder’s 55 location publishes: pages are shipped by a designer, not an engineer.',
    },
    {
      type: 'p',
      text: 'Every location keeps a permanent URL, so swapping a page version never breaks an ad link. Our pages fire the Meta Lead event only on the thank-you page (iFlex’s form vendor adds a second, the known duplicate). A parity check compares pixel, form and thank-you page before a location moves onto the builder; ULC passed 144 of 144 by October 5. Since September 18, 2026, every publish checks the public URL and reports where the page went live. As of October 22, **34 location pages** have a live version, 30 of them for ULC and iFlex.',
    },
    {
      type: 'p',
      text: 'Their landing page ad sets produced 13,705 Meta-reported website leads: 11,715 at ULC (July 1 to October 21, 2026, $10.87 CPL) and 1,990 at iFlex (June 10 to October 21), which may be inflated up to 2x. None is reconciled to CRM records.',
    },
    {
      type: 'callout',
      title: 'The lesson',
      text: 'On a presale page the form is a free hand-raise, and a price in front of it is friction with nothing to buy behind it.',
    },
    { type: 'h2', kicker: 'How to Apply It', text: 'Test offer changes on the page, with a control' },
    {
      type: 'p',
      text: 'For a franchisor, the practical move is to treat any offer change, a deposit or a new price, as a page test at a few locations with the rest held as a control. Ask your agency for lead submission rate by page version every week. A drop like 8.87% to 4.44% shows up in seven days if someone is looking.',
    },
  ],
  sources:
    'Meta Ads data pulled read-only by Fifth Element from the Meta Graph API on Oct 22, 2026, with ad sets split by optimization goal into website (landing page) and Instant Form: ULC $99 test and control, Sep 22 to Oct 21, 2026; ULC offer-wording test, Sep 4 to Oct 4, 2026; ULC first presale center by ad destination, Jun 15 to Jul 31, 2026; ULC monthly trend, Jul 1 to Oct 21, 2026; ULC website leads (11,715 at $10.87) and Instant Form comparison, Jul 1 to Oct 21, 2026; ULC single-center Instant Form test, Sep 29 to Oct 5, 2026, with the center’s report of Oct 2, 2026; one iFlex studio rebuild, Jun 3 to Jun 25, 2026; iFlex studio fatigue example, Jun 17 to Oct 21, 2026; iFlex redesign test, two studios, three weeks either side of each studio’s August 2026 switch; iFlex website leads (1,990), Jun 10 to Oct 21, 2026. iFlex website lead counts may be inflated by up to 2x by a duplicate Lead event. Pilates Addiction Instant Form comparison from Fifth Element reporting data, 14 days before vs 14 days after each change, changes made Apr 20 to Aug 22, 2026 (data Apr 6 to Sep 4, 2026). Leads are Meta-reported and have not been reconciled to CRM records. Conversion = leads divided by link clicks. Page versions, publish times, parity checks, change log and live page counts from the Fifth Element landing page platform, Aug 5 to Oct 22, 2026. These are observational comparisons, not randomized tests. Quote from Slack, Jun 29, 2026; other client correspondence from Slack and email, Jun 23 to Oct 14, 2026.',
  order: 4,
  seoKeywords: [
    'franchise landing page conversion',
    'presale landing page test',
    'landing page vs instant forms',
    'lead submission rate',
    'franchise Meta ads',
    'landing page fatigue',
  ],
};
