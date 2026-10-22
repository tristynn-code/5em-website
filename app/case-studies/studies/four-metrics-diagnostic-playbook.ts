import type { CaseStudy } from '../types';

export const study: CaseStudy = {
  slug: 'four-metrics-diagnostic-playbook',
  kind: 'playbook',
  brand: 'network',
  brandName: 'Fifth Element',
  vertical: 'Franchise Marketing',
  title:
    'The Four Metrics: why one studio got [[106 leads and another got 26]] on the same budget',
  dek: 'Two Pilates Addiction studios spent $740.61 and $726.92 in the same week of May 2026 and got 26 leads and 106, and cost per lead could not say why. Here is the four-number ladder that could, what happened when we fixed the broken rung, and 90-day benchmarks for six brands to hold your locations against.',
  cardTitle: 'Same budget, 106 leads vs 26: the Four Metrics diagnosis',
  summary:
    'Two Pilates Addiction studios, May 12 to 18, 2026, same budget: 106 leads vs 26. The four-number ladder we use to find the broken step, the fix for each, and benchmarks by brand.',
  published: '2026-10-22',
  readTime: '8 min',
  cover: {
    src: '/case-studies/four-metrics-diagnostic-playbook/cover.jpg',
    alt: 'A full reformer class under lit arches and the Pilates Addiction wall sign, a frame from a Pilates Addiction studio-tour ad',
    position: '50% 50%',
  },
  heroStats: [
    {
      value: '106 vs 26',
      label: 'Leads, same week, same budget',
      sub: 'Two Pilates Addiction studios, May 12 to 18, 2026, on $726.92 and $740.61 of spend',
    },
    {
      value: '19.45% vs 6.68%',
      label: 'Lead submission rate',
      sub: 'May 12 to 18, 2026. The rung that explained most of the gap. CPM was $17.98 vs $19.44',
    },
    {
      value: '174',
      label: 'Studio A leads in July 2026, two rungs later',
      sub: '$14.18 cost per lead and an 18.24% lead submission rate, on less spend than June ($2,467.18 vs $3,207.01)',
    },
    {
      value: '185 to 293',
      label: 'Leads after a fatigue reset, same spend',
      sub: 'A Pilates Addiction studio, May vs June 2026 ($3,149.35 vs $3,146.88); cost per lead $17.02 to $10.74',
    },
  ],
  tags: ['Meta Ads', 'Diagnostics', 'Benchmarks'],
  timeline: [
    {
      when: 'May 12 to 18, 2026',
      title: 'The diagnosis',
      text: 'Studio A gets 26 leads to Studio B\'s 106 on the same budget. Its LSR is 6.68%, under the 10% floor.',
    },
    {
      when: 'May 18, 2026',
      title: 'Rung 3 fixed',
      text: 'An Instant Form goes live beside Studio A\'s landing page. LSR goes from 6.54% to 14.25%, 14 days either side.',
    },
    {
      when: 'Jun 15, 2026',
      title: 'The next rung breaks',
      text: 'With CTR at 1.35% (Jun 1 to 14), under the 1.5% trigger, Sequel approves widening Studio A from 2 to 5 miles. CTR is 1.89% over the next 14 days.',
    },
    {
      when: 'Jun 24, 2026',
      title: 'A radius change that hurt',
      text: 'Our review finds that a Texas studio\'s earlier radius expansion, from a 2-mile audience of more than 500,000 people to past 750,000, alongside new Instant Forms, drew leads who live too far away.',
    },
    {
      when: 'Jul 2026',
      title: 'Studio A, two rungs later',
      text: '174 leads at a $14.18 cost per lead for the month, with LSR at 18.24%, on less spend than June ($2,467.18 vs $3,207.01).',
    },
  ],
  stack: [
    'Meta Ads',
    'Four Metrics Diagnostic',
    'Meta Instant Forms',
    'Landing Pages',
    'Local Creative',
    '3-Day Refresh Cycle',
    'Meta Change Log',
    'Fifth Element Reporting',
  ],
  body: [
    { type: 'h2', kicker: 'The Problem', text: 'Cost per lead is an alarm, not a diagnosis' },
    {
      type: 'p',
      text: 'From May 12 to 18, 2026, two Pilates Addiction studios in different states spent $740.61 and $726.92 on Meta. Studio A got 26 leads. Studio B got 106. Our working target for a Pilates Addiction studio is 75 to 100 leads a week.',
    },
    {
      type: 'p',
      text: 'The usual answers to Studio A\'s $28.49 cost per lead (CPL) are more budget, a wider radius or new ads. Each is a guess until you know which step of the funnel broke. Four numbers tell you.',
    },
    {
      type: 'table',
      columns: ['Metric', 'Studio A', 'Studio B', 'Pilates Addiction band', 'Studio A read'],
      rows: [
        ['Spend', '$740.61', '$726.92', 'n/a', 'Same budget'],
        ['CPM (cost per 1,000 impressions)', '$19.44', '$17.98', '$20 to $25', 'Below band. Healthy'],
        ['CTR (all clicks)', '1.86%', '3.08%', 'Fatigue trigger under 1.5%', 'Above trigger, behind B'],
        ['Link CTR', '1.02%', '1.35%', 'n/a', 'Used in the formula'],
        ['Lead submission rate (LSR, leads per link click)', '6.68%', '19.45%', 'Floor 10%', 'Under the floor. The broken rung'],
        ['Leads', '26', '106', 'n/a', 'About a quarter of B\'s'],
        ['Cost per lead', '$28.49', '$6.86', 'n/a', 'The alarm, not the cause'],
      ],
      caption:
        'Two Pilates Addiction studios, May 12 to 18, 2026, Meta data. Studio A: 38,088 impressions, 389 link clicks. Studio B: 40,440 impressions, 545 link clicks. Bands are Fifth Element\'s written Pilates Addiction triggers. The formula uses link CTR because LSR is measured per link click; the trigger and the benchmarks below use all-click CTR.',
    },
    {
      type: 'p',
      text: 'One rung was out of band: fewer than 7 in 100 link clicks became a lead. An Instant Form had gone live beside the landing page on May 18, and the May 19 review call made it the primary lever. "The 7% funnel conversion rate is the bigger issue than CTR," our status update from that call said. In the 14 days from May 19, against the 14 before, LSR went from 6.54% to 14.25% and cost per lead from $28.74 to $20.60, on less spend ($1,256.39 vs $1,437.16).',
    },
    {
      type: 'p',
      text: 'Then the next rung broke. In the first 14 days of June, CTR fell to 1.35%, under the 1.5% trigger, and CPM rose to $27.28, above the band, on an audience Sequel had held to the 2-mile franchise radius. Sequel approved 5 miles on June 15. At flat spend ($1,515.50 vs $1,500.02, 14 days either side of June 15), CTR went to 1.89%, leads from 50 to 66 and cost per lead from $30.31 to $22.73. CPM did not move ($27.88), so the radius worked through CTR, not cheaper reach.',
    },
    {
      type: 'p',
      text: 'In July, Studio A ran **174 leads at a $14.18 cost per lead** (LSR 18.24%) on less spend than June ($2,467.18 vs $3,207.01). We cannot pin July on one change. The point is the order: fix the rung that is out of band, then read the ladder again, because the broken rung moves.',
    },
    {
      type: 'chart',
      title: 'Studio A cost per lead, week by week',
      subtitle: 'Seven-day periods, May 5 to Jul 20, 2026, Meta leads',
      prefix: '$',
      data: [
        { label: 'May 5 to 11', value: 29.02 },
        { label: 'May 12 to 18', value: 28.49, highlight: true },
        { label: 'May 19 to 25', value: 17.84 },
        { label: 'May 26 to Jun 1', value: 25.16 },
        { label: 'Jun 2 to 8', value: 29.44, highlight: true },
        { label: 'Jun 9 to 15', value: 29.71 },
        { label: 'Jun 16 to 22', value: 23.89 },
        { label: 'Jun 23 to 29', value: 19.61 },
        { label: 'Jun 30 to Jul 6', value: 19.06 },
        { label: 'Jul 7 to 13', value: 12.24 },
        { label: 'Jul 14 to 20', value: 13.75 },
      ],
      note: 'Highlighted: the two alarm weeks. May 12 to 18: LSR under the 10% floor; Instant Form live May 18. Early June: CTR under the 1.5% trigger; radius widened Jun 15. Weekly spend stayed between $578.59 and $794.93.',
    },

    { type: 'h2', kicker: 'The Math', text: 'One equation, three dials' },
    {
      type: 'p',
      text: 'The four numbers are one equation: **CPL = CPM / (1,000 x link CTR x LSR)**. Studio A paid $740.61 for 38,088 impressions, a $19.44 CPM. The ads drew 389 link clicks, a 1.02% link CTR, and 26 leads, a 6.68% LSR: $28.49 per lead. **CPL tells you something is wrong. The other three tell you what.**',
    },
    {
      type: 'creative',
      title: 'The math, as we teach it to our own team',
      caption:
        'A slide from The Four Metrics, the Fifth Element team training deck (September 2026). It uses round example numbers, not client data. CTR here means link CTR, as in the formula above.',
      items: [
        {
          kind: 'document',
          src: '/case-studies/four-metrics-diagnostic-playbook/doc-2.jpg',
          alt: 'Training slide table showing that halving CPM, CTR or LSR each doubles cost per lead from $5 to $10',
          label: 'Halving any one rung doubles the cost per lead',
          note: 'Team training deck, slide 6',
        },
      ],
    },
    {
      type: 'quote',
      text: 'There\'s four metrics to track. CPL is the fourth, but CPL doesn\'t do anything. It\'s just a conclusion of the other three. So you really only need to know three: CPM, click rate, and lead submission rate.',
      name: 'Tristynn McGowan',
      role: 'Founder & CEO, Fifth Element, on a call with a prospective client, Sep 16, 2026',
    },

    { type: 'h2', kicker: 'The Ladder', text: 'Read top to bottom. Fix one rung at a time.' },
    {
      type: 'steps',
      items: [
        {
          title: 'CPM above the brand band',
          text: 'Check audience size first. Too small: widen it, inside territory rules. Adequate: make local creative. Budget does not fix a CPM problem.',
        },
        {
          title: 'CTR at or below the floor and falling for 7 days',
          text: 'Creative fatigue: replace the creative, do not tweak targeting. Triggers: under 1.5% for Pilates Addiction, iFlex and BODY20, under 2.5% for Ultimate Longevity Center.',
        },
        {
          title: 'LSR under the brand floor, with CPM and CTR healthy',
          text: 'The conversion step (Pilates Addiction floor: 10%). Landing page only: add a Meta Instant Form beside it. Custom page: edit the copy, form length or offer.',
        },
        {
          title: 'CPL off target',
          text: 'Read it against the weekly lead target. Healthy rungs but off pace usually means under-spending for the market.',
        },
      ],
    },

    { type: 'h3', text: 'Rung 1: check the audience before you touch the radius' },
    {
      type: 'list',
      items: [
        {
          title: 'A BODY20 studio, 3 miles to 7 miles.',
          text: 'CPM was around $43 in late June 2026, and the studio team said many members already drove 15 to 20 minutes or more. With BODY20 corporate\'s approval we went to 7 miles on July 7, 2026. In the 14 days either side, at flat spend ($992.97 vs $965.66), leads went from 11 to 28, **cost per lead from $90.27 to $34.49**, and CPM from $46.15 to $35.13, inside BODY20\'s $30 to $40 band. Not all of that is the radius: a testimonial ad and refined Instant Form copy went in the same window, and LSR rose from 5.12% to 8.95%. By September 2026, CPM was back at $46.93.',
        },
        {
          title: 'A Pilates Addiction studio in Texas, where widening hurt.',
          text: 'Its 2-mile radius already reached about 504,000 to 595,000 people. The expansion we approved pushed it past 750,000. It was a contributing factor, not the whole story: Instant Forms went on at the same time, in a slow, saturated market. Our fix: phone-number verification on the form, more spend toward the landing page, and a radius review.',
        },
      ],
    },
    {
      type: 'quote',
      text: 'A bigger audience can lower CPM, but for a hyper-local studio it pulls in outer-edge leads who say the studio is too far, which burns spend and tanks conversion. I own this one.',
      name: 'Tristynn McGowan',
      role: 'Founder & CEO, Fifth Element, status update on the Texas studio, Jun 24, 2026',
    },
    {
      type: 'p',
      text: 'When the audience is big enough, the fix is creative. An iFlex Stretch Studios location had 129,000 to 150,000 people inside 2 miles, a CPM around $35 and, our July 16, 2026 review found, healthy numbers everywhere else and ads with no local hook. Its general manager filmed a shopping district 0.2 miles away. Over 7 days either side of July 21, CPM fell from $37.13 to $28.37, leads went from 27 to 74 and cost per lead from $42.82 to $20.14, with daily spend also up ($165.17 to $212.88). Our rule of thumb: **under about 60,000 people, widening lowers CPM. At 130,000 or more we change the creative first; at 500,000 or more, widening bought distance, not demand.**',
    },

    { type: 'h3', text: 'Rung 2: a falling CTR means tired creative' },
    {
      type: 'p',
      text: 'Another Pilates Addiction studio was the one account we rated red in our late-May 2026 review with Pilates Addiction corporate. Our diagnosis was ad fatigue, so we hard-reset the whole campaign with new static creative and left the budget where it was. At the same monthly spend ($3,149.35 in May, $3,146.88 in June), CTR went from 1.69% to 2.34%, leads from 185 to 293 and **cost per lead from $17.02 to $10.74**. LSR rose too.',
    },
    {
      type: 'p',
      text: 'Fatigue is predictable enough to schedule. Across 35 Pilates Addiction launches (first spend Mar 28 to Aug 20, 2026, data through Oct 20), CPM barely moved from days 1 to 14 to days 57 to 112 ($20.64 to $22.44) while CTR fell from 2.90% to 2.21%, LSR from 19.25% to 12.26%, and cost per lead rose from $7.17 to $16.64. So we plan the first refresh around day 15: the creative first, then body copy, then headline, and only later the offer.',
    },

    { type: 'h3', text: 'Rung 3: LSR under the floor means the conversion step' },
    {
      type: 'p',
      text: 'Studio A (Studio 3 in our Instant Forms playbook) was one of eight Pilates Addiction studios where we added an Instant Form while LSR sat under 10%. Pooled over up to 14 days either side of changes dated April 20 to August 22, 2026, LSR went from 7.64% to 14.38% and cost per lead from $20.79 to $13.99, while CPM and CTR got slightly worse. At three studios already at 10% or better, pooled conversion barely moved (12.48% to 12.69%) and pooled cost per lead rose from $11.42 to $15.56, though one of the three was in a Founders 50 sprint during that window.',
    },
    {
      type: 'creative',
      title: 'A practice card from our team training',
      caption:
        'Ladder card numbers are illustrative practice numbers inside Pilates Addiction\'s real bands, not a client\'s results.',
      items: [
        {
          kind: 'document',
          src: '/case-studies/four-metrics-diagnostic-playbook/doc-4.jpg',
          alt: 'Practice ladder card for a Pilates Addiction presale in week 3: CPM $23, CTR 2.1%, LSR 6%, CPL $18, with blanks for rung, owner, first check and first hypothesis',
          label: 'Ladder card 1: a 3-day readout drill',
          note: 'Practice card. LSR at 6% is the broken rung, as at Studio A',
        },
      ],
    },
    {
      type: 'p',
      text: 'On a custom page, the lever is the page, and the words matter. On September 18, 2026, three Ultimate Longevity Center centers swapped "Only the first 50 members get the founding rate" for "Founding memberships are now open." On landing-page ad sets, their LSR fell from 11.98% to 8.72% and cost per lead rose from $11.48 to $16.07 (Sep 4 to 17 vs Sep 19 to Oct 4), while 11 unchanged centers went from 10.40% to 10.05%. The page host also changed that day, with the same pixel and form.',
    },
    { type: 'cta' },

    { type: 'h2', kicker: 'The Benchmarks', text: 'What normal looks like, brand by brand' },
    {
      type: 'p',
      text: 'A band only means something for its own brand. Here is where our live accounts sat over the last 90 days, at the median location.',
    },
    {
      type: 'table',
      columns: ['Brand', 'Locations', 'Median CPL (middle half)', 'Median CPM', 'Median CTR', 'Median link CTR', 'Median LSR'],
      rows: [
        ['Pilates Addiction', '52', '$14.76 ($13.04 to $18.64)', '$23.67', '2.43%', '1.27%', '11.77%'],
        ['Ultimate Longevity Center', '15', '$11.02 ($9.55 to $13.27)', '$36.36', '6.37%', '3.02%', '11.34%'],
        ['iFlex Stretch Studios', '10', '$22.34 ($20.64 to $24.93)', '$28.91', '2.45%', '1.37%', '8.86%'],
        ['BODY20', '12', '$36.13 ($25.31 to $38.56)', '$43.80', '2.89%', '1.67%', '8.47%'],
        ['IMAGE Studios', '30', '$39.55 ($33.24 to $58.76)', '$25.93', '1.84%', '1.03%', '6.32%'],
        ['beem Light Sauna', '3', '$15.06 ($13.92 to $17.92)', '$37.22', '2.69%', '1.60%', '12.82%'],
        ['All six brands', '122', '$20.01 ($13.61 to $32.62)', '$26.47', '2.42%', '1.31%', '10.45%'],
      ],
      caption:
        'Fifth Element reporting, Meta, Jul 23 to Oct 20, 2026. Medians of each location\'s 90-day totals, for locations with at least $500 spend and 30 days of data in the window. The CPL range is the middle half of locations (25th to 75th percentile). CTR counts all clicks; link CTR is link clicks per impression. Because these are medians by location, the columns do not multiply into the CPL column.',
    },
    {
      type: 'p',
      text: 'Compare rungs, not just CPL. Ultimate Longevity Center pays one of the highest CPMs, $36.36, yet has the lowest median cost per lead, $11.02, on a 6.37% median CTR. **A CPM in the high thirties is a warning at a Pilates Addiction studio, where the band is $20 to $25, and normal at Ultimate Longevity Center.** The beem row is three locations. Our review only ever raises a band: a missed benchmark is never a reason to loosen it.',
    },

    { type: 'h2', kicker: 'Why It Works', text: 'The fix matches the failure' },
    {
      type: 'p',
      text: 'The same radius change helped one studio and, alongside other changes, hurt another. The same form nearly doubled pooled conversion across eight studios and did nothing for conversion at three others. Which one a lever does depends on the rung.',
    },
    {
      type: 'p',
      text: 'Lower friction has a price. At the Texas studio, where Instant Forms and the wider radius went on together, 70-plus of about 546 presale leads came back with bad phone numbers. So we add the form beside the landing page, never in place of it, with phone-number verification on and the location\'s name in the form header. Lead quality is not in this data; owners are the check, and after a conversion change they tell us within days. These are Meta-attributed leads from before-and-after comparisons, not controlled tests.',
    },
    {
      type: 'callout',
      title: 'The lesson',
      text: 'Cost per lead is the alarm. CPM, CTR and lead submission rate are the diagnosis. Fix the one rung that is out of band, then read the ladder again, because the broken rung moves.',
    },

    { type: 'h2', kicker: 'What This Means for Your Brand', text: 'Put every location on the same ladder' },
    {
      type: 'p',
      text: 'Radius requests land on the franchisor\'s desk. Here, Sequel approved one that worked through CTR, BODY20 corporate approved another, and we approved one that hurt. The ladder turns each request into two questions: is CPM above the brand band, and is the audience genuinely small? Two yeses, widen. If the audience already reaches hundreds of thousands, fix the creative first. Then hold each location\'s last 90 days against the table above and mark the rung outside your brand\'s band.',
    },
    {
      type: 'creative',
      title: 'The cheat sheet our team trains on',
      caption: 'From the Fifth Element Four Metrics cheat sheet, September 2026.',
      items: [
        {
          kind: 'document',
          src: '/case-studies/four-metrics-diagnostic-playbook/doc-3.jpg',
          alt: 'Fifth Element Four Metrics cheat sheet: eight steps to read a campaign in order, and a table of what each pair of metrics usually means and where to look',
          label: 'Four Metrics cheat sheet: the eight steps and the pairs',
          note: 'The eight steps we read in order, every time',
        },
      ],
    },

    { type: 'h2', kicker: 'The Discipline', text: 'No silent changes, and a 3-day cycle' },
    {
      type: 'p',
      text: 'Our change-log SOP requires a four-field entry for every budget, targeting, creative, optimization or structure change: there are no silent changes permitted. The fields are the change made ("Increased daily budget from $40 to $55 in Leads campaign," never "Adjusted budget"), the reason, the expected impact and the monitoring plan, so nobody stacks a second change on the first.',
    },
    {
      type: 'creative',
      title: 'The change-log rule, from our SOP',
      caption: 'From the Fifth Element Meta Ads Change Log SOP.',
      items: [
        {
          kind: 'document',
          src: '/case-studies/four-metrics-diagnostic-playbook/doc-5.jpg',
          alt: 'Change log SOP table of good and vague examples: "Increased daily budget from $40 to $55 in Leads campaign" versus "Adjusted budget"',
          label: 'Change log SOP: good vs vague entries',
          note: 'Every entry starts with the mechanical change',
        },
      ],
    },
    {
      type: 'p',
      text: 'A change we cannot date is a change we cannot grade. A ninth Pilates Addiction studio\'s Instant Form looked like the other eight (LSR 8.08% to 15.76%, 14 days either side of September 10, 2026, at flat spend), but it is in none of the counts above: we could not confirm the day it went live.',
    },
    {
      type: 'p',
      text: 'The ladder runs on a 3-day cycle at the ad set level: act on the last 3 days, check health on the last 7.',
    },
    {
      type: 'steps',
      items: [
        { title: 'No leads in 3 days', text: 'Off, then relaunch, often with a small targeting tweak to force a fresh learning phase.' },
        { title: 'Momentum declining', text: 'Refresh before CPL spikes, not after a bad 7-day average.' },
        { title: 'Expensive and thin', text: 'One lead at $75 or more, or two leads after 7 days and fading: off.' },
        { title: 'Winning', text: 'Leave it alone and move budget to it.' },
        { title: 'Several failed cycles', text: 'Hard-reset the whole campaign, as in Rung 2.' },
      ],
    },
  ],
  sources:
    'Meta data from Fifth Element reporting (client dashboards). Studio pair: May 12 to 18, 2026. Studio A: Instant Form 14 days either side of May 19, radius 14 days either side of Jun 15, monthly totals for June and July 2026, weekly chart May 5 to Jul 20, 2026. Other before and after comparisons: up to 14 days either side of each dated change (Instant Forms, changes dated Apr 20 to Aug 22, 2026, windows Apr 6 to Sep 4; ninth studio, Sep 10, 2026; BODY20 radius, Jul 7, 2026, with BODY20 monthly CPM for Sep 2026); 7 days either side of Jul 21, 2026 for the iFlex creative change, a date read from the daily data; May vs June 2026 monthly totals for the fatigue reset. Launch curve: 35 Pilates Addiction launches with first spend Mar 28 to Aug 20, 2026, data through Oct 20, 2026. Landing page figures: Meta ad set data for Ultimate Longevity Center landing-page ad sets, Sep 4 to Oct 4, 2026. Benchmarks: location-level medians, Jul 23 to Oct 20, 2026, locations with at least $500 spend and 30 days of data. Audience sizes, diagnoses and approvals from Fifth Element status updates and client channels, May to Aug 2026. Leads are Meta-attributed leads, not CRM records or members.',
  order: 2,
  seoKeywords: [
    'franchise ad account audit',
    'Meta ads cost per lead diagnosis',
    'CPM CTR lead submission rate',
    'franchise marketing benchmarks',
    'Facebook ads radius targeting',
    'franchise marketing agency',
  ],
};
