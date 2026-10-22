import type { CaseStudy } from '../types';

export const study: CaseStudy = {
  slug: 'pilates-addiction-instant-forms-conversion-fix',
  kind: 'playbook',
  brand: 'pilates-addiction',
  brandName: 'Pilates Addiction',
  vertical: 'Pilates & Fitness',
  title:
    'The conversion fix: how Instant Forms nearly doubled the share of ad clicks becoming leads at 8 Pilates Addiction studios, [[7.64% to 14.38%]] combined',
  dek: 'When clicks at 8 Pilates Addiction studios stopped turning into leads, we added a Meta Instant Form beside the landing page, and combined cost per lead fell from $20.79 to $13.99 on less spend, April to September 2026. At 3 studios whose pages already converted, the same move raised it from $11.42 to $15.56.',
  cardTitle: 'The conversion fix: 8 of 8 studios cut cost per lead',
  summary:
    'At 8 Pilates Addiction studios where under 10% of ad clicks became leads, adding an Instant Form beside the page lifted that rate from 7.64% to 14.38% and cut cost per lead from $20.79 to $13.99.',
  published: '2026-10-22',
  readTime: '7 min',
  cover: {
    src: '/case-studies/pilates-addiction-instant-forms-conversion-fix/cover.jpg',
    alt: 'Two Pilates Addiction Southwest Las Vegas team members smiling in studio shirts, from a May 2026 local ad',
    position: '50% 40%',
  },
  heroStats: [
    {
      value: '14.38%',
      label: 'Of ad clicks became leads, up from 7.64%',
      sub: '8 Pilates Addiction studios combined, 14 days before vs 14 days after each change, first full days Apr 20 to Aug 22, 2026',
    },
    {
      value: '$13.99',
      label: 'Cost per lead, down from $20.79',
      sub: 'Spend $14,778.98 before, $13,524.21 after. All 8 studios in the cohort paid less per lead',
    },
    {
      value: '64 to 176',
      label: 'Leads at Southwest Las Vegas',
      sub: 'May 29 to Jun 11 vs Jun 12 to 25, 2026, on $1,407.15 and $1,407.27 of spend',
    },
    {
      value: '$11.42 to $15.56',
      label: 'Cost per lead where the page already worked',
      sub: '3 studios converting at 10% or better, combined, same 14-day method, changes May 18 to Jun 6, 2026',
    },
  ],
  tags: ['Meta Ads', 'Instant Forms', 'Conversion Rate'],
  timeline: [
    {
      when: 'Apr 20, 2026',
      title: 'First studio',
      text: 'Instant Forms go live at the first studio in the cohort, which was converting 7.81% of clicks into leads.',
    },
    {
      when: 'May 18 to Jun 6, 2026',
      title: 'The counter-example',
      text: 'Three studios already converting at 10% or better get Instant Forms. Their combined cost per lead rises from $11.42 to $15.56.',
    },
    {
      when: 'Jun 9 to 12, 2026',
      title: 'Southwest Las Vegas',
      text: 'Drew Waelde flags the drop to the studio team on June 9. The form goes live the evening of June 11. Over the next 14 days leads go from 64 to 176 at the same spend.',
    },
    {
      when: 'Jun 24, 2026',
      title: 'Bad phone numbers',
      text: 'Bad phone numbers at a Texas studio lead us to build a form that verifies the number before it submits, and to plan a shift of spend toward the landing page.',
    },
    {
      when: 'Aug 21, 2026',
      title: 'Eighth studio',
      text: 'The last studio in the cohort goes live that afternoon (first full day Aug 22). All 8 convert better and pay less per lead.',
    },
  ],
  stack: [
    'Meta Ads',
    'Meta Instant Forms',
    'Pilates Addiction Corporate Landing Pages',
    'Four Metrics Diagnostic',
    'Fifth Element Reporting',
  ],
  body: [
    { type: 'h2', kicker: 'The Problem', text: 'A high cost per lead is a symptom, not a diagnosis' },
    {
      type: 'p',
      text: 'In the four days ending June 11, 2026, a Pilates Addiction studio in southwest Las Vegas spent $391.61 on Meta ads and got 7 leads. People were still clicking its ads, at a 3.12% click-through rate over the prior two weeks. The step after the click had stalled. The usual agency reflex is to pull the nearest big lever: raise the budget, widen the radius, swap the creative, or move every ad to Meta Instant Forms because they are "cheaper." Each can work, and each can make things worse, because none starts by asking which part of the funnel broke.',
    },
    {
      type: 'creative',
      title: 'Local ads made for Southwest Las Vegas in May',
      caption:
        'Fifth Element finished these VIP list ads for the studio on May 15, 2026, ten days before our ads started on May 25. Our ad-level data for this studio starts July 13, so no results are shown, and we cannot confirm which of them ran in May or June.',
      items: [
        {
          kind: 'video',
          src: '/case-studies/pilates-addiction-instant-forms-conversion-fix/ad-1.mp4',
          poster: '/case-studies/pilates-addiction-instant-forms-conversion-fix/ad-1.jpg',
          alt: 'Two Southwest Las Vegas team members in Pilates Addiction shirts cheering outside a Las Vegas building, with the caption Las Vegas',
          label: 'Studio team welcome ad',
          note: 'Finished May 15, 2026',
        },
        {
          kind: 'video',
          src: '/case-studies/pilates-addiction-instant-forms-conversion-fix/ad-2.mp4',
          poster: '/case-studies/pilates-addiction-instant-forms-conversion-fix/ad-2.jpg',
          alt: 'A Southwest Las Vegas team member in a Pilates Addiction shirt outside a Las Vegas building, with the caption Hey Vegas, ready',
          label: 'Hey Vegas local hook ad',
          note: 'Finished May 15, 2026',
        },
      ],
    },
    {
      type: 'p',
      text: 'We read every account on four numbers, in order: cost per thousand impressions (CPM), click-through rate (CTR), lead submission rate (LSR, the share of people who click through and then submit a form), and cost per lead (CPL). They are one equation: cost per lead is CPM divided by the product of 1,000, the link click-through rate and the lead submission rate. **CPL tells you something is wrong. The other three tell you what.**',
    },
    {
      type: 'p',
      text: 'The eight studios in this playbook had the same profile. Combined over the two weeks before each change, their CPM was $20.61 and their CTR 2.32%, in line with or better than the Pilates Addiction medians of $23.67 and 2.43% across 52 studios with at least $500 spend and 30 days of data, July 23 to October 20, 2026. Their lead submission rate was 7.64%, against a written floor of 10%. The ads were working. The step after the click was not.',
    },

    { type: 'h2', kicker: 'What We Did', text: 'Add a second path, leave the page alone' },
    {
      type: 'p',
      text: 'In these windows every studio\'s landing page was a Pilates Addiction corporate page, not one we build. So the lever in our hands was a second way to convert: a Meta Instant Form **alongside the landing page, not instead of it**. A prospect could submit their details inside Facebook or Instagram, or click through to the page exactly as before.',
    },
    {
      type: 'p',
      text: 'If the diagnosis was right, CPM and CTR would hold, lead submission rate would jump, and cost per lead would follow it down. That is a prediction the numbers can prove wrong. Other work did not stop, so this is an observational comparison, not a controlled test, and we list each other change below.',
    },

    { type: 'h2', kicker: 'The Evidence', text: 'Eight studios, eight improvements' },
    {
      type: 'p',
      text: 'Between April 20 and August 21, 2026, we added Instant Forms at eight Pilates Addiction studios that were under 10% and whose go-live date our client channels confirm. Other studios got forms too and are not counted. For each we compared the 14 days before with the 14 days from the first full day live. All eight converted better afterward. All eight paid less per lead.',
    },
    {
      type: 'table',
      columns: ['Metric', '14 days before', '14 days after', 'What it tells us'],
      rows: [
        ['Spend', '$14,778.98', '$13,524.21', 'Less money after'],
        ['CPM', '$20.61', '$22.06', 'Reach got slightly more expensive'],
        ['CTR (all clicks)', '2.32%', '2.11%', 'Slightly fewer people clicked'],
        ['Link clicks', '9,306', '6,723', 'Fewer people clicked through'],
        ['Link CTR', '1.30%', '1.10%', 'The ads did not get better'],
        ['Lead submission rate', '7.64%', '14.38%', 'Nearly twice the share of clickers converted'],
        ['Leads', '711', '967', 'More leads for less money'],
        ['Cost per lead', '$20.79', '$13.99', 'The gain came from one step'],
      ],
      caption:
        'Combined across 8 Pilates Addiction studios, 14 days before vs 14 days after Instant Forms went live, first full days Apr 20 to Aug 22, 2026. 107 studio-days before and 112 after, because one studio\'s campaign had launched 9 days before its change. After the change, lead submission rate counts Instant Form and landing page leads together over all link clicks.',
    },
    {
      type: 'p',
      text: 'Read the table top to bottom and the diagnosis holds. **CPM went up and CTR went down, so the ads did not get better. The improvement showed up in the conversion step**, the rung the form targets. Fewer people clicked through, 6,723 against 9,306, and they produced 967 leads instead of 711. At the median studio, lead submission rate rose 2.01 times and cost per lead fell to 0.72 times its old level.',
    },
    { type: 'h3', text: 'Studio by studio' },
    {
      type: 'table',
      columns: ['Studio (first full day live)', 'Spend before / after', 'Leads', 'Cost per lead', 'Lead submission rate'],
      rows: [
        ['Studio 1 (Apr 20)', '$1,746.01 / $2,354.45', '51 / 98', '$34.24 / $24.03', '7.81% / 13.86%'],
        ['Studio 2 (about Apr 30)', '$2,626.22 / $2,110.93', '148 / 219', '$17.74 / $9.64', '8.17% / 16.82%'],
        ['Studio 3 (May 19)', '$1,437.16 / $1,256.39', '50 / 61', '$28.74 / $20.60', '6.54% / 14.25%'],
        ['Southwest Las Vegas (Jun 12)', '$1,407.15 / $1,407.27', '64 / 176', '$21.99 / $8.00', '5.88% / 21.73%'],
        ['Studio 4 (Jun 26)', '$2,362.97 / $1,411.52', '107 / 83', '$22.08 / $17.01', '6.79% / 13.32%'],
        ['Studio 5 (Jul 10)', '$961.11 / $1,424.38', '23 / 47', '$41.79 / $30.31', '4.70% / 9.79%'],
        ['Studio 6 (Aug 15)', '$2,853.78 / $2,177.82', '164 / 147', '$17.40 / $14.82', '9.07% / 10.72%'],
        ['Studio 7 (Aug 22)', '$1,384.58 / $1,381.45', '104 / 136', '$13.31 / $10.16', '9.34% / 13.57%'],
      ],
      caption:
        'Each row is 14 days before vs 14 days from the first full day live, 2026. Studio 2\'s go-live date is approximate. Studio 5\'s campaign had launched 9 days before its change, so its before window is 9 days. Studios 4 and 6 got fewer leads after because their spend fell; their conversion and cost per lead still improved.',
    },
    {
      type: 'p',
      text: 'Other changes inside these windows: Studio 1 ran the form in most of its ad sets, not beside the page in all of them. Studio 2 got a creative refresh the same week. At Studio 3 the form started on half the ads, the offer moved into the ad copy, and Memorial Day and local creative followed within days. Studio 6\'s budget rose $50 a day on its go-live day. A new campaign started at Studio 7 on its first full day.',
    },
    {
      type: 'p',
      text: 'Most of the calendar works against the result. Studios 2 and 7 held their Founders 50 sale in the before window, normally the cheapest stretch of a presale ($11.08 combined cost per lead in the 14 days before Founders 50 and $18.11 in the 14 days after, 17 studios on the old single-campaign structure, April to July 2026). Studio 5 and Southwest Las Vegas got their forms on days 10 and 18 of our campaigns, so their before windows fell mostly in the stretch when new campaigns buy their cheapest leads. One thing cuts the other way: Studio 6\'s Founders Day, August 21, fell in its after window.',
    },

    { type: 'h3', text: 'Southwest Las Vegas: same budget, 176 leads instead of 64' },
    {
      type: 'p',
      text: 'The studio in the opening is Southwest Las Vegas. Fifth Element started its ads on May 25, 2026, on the landing page alone, after its Founders 50 sale. By early June the page had stopped converting: 64 leads in the 14 days to June 11, 32 a week, against the 75 to 100 a week we now pace Pilates Addiction studios to. On June 9 Drew Waelde told the studio team what we would change.',
    },
    {
      type: 'quote',
      text: 'We\'re not replacing the website. We\'re simply adding another conversion method to help capture more opportunities and improve overall campaign efficiency. We\'ll continue monitoring lead quality closely and make further optimizations as data comes in.',
      name: 'Drew Waelde',
      role: 'Head of Agency Operations, Fifth Element, to the Southwest Las Vegas studio team, Jun 9, 2026',
    },
    {
      type: 'p',
      text: 'The form went live on the evening of June 11, Pacific time. The next day the studio got 14 leads, after 3 in the two days before. Over 14 days it got 176, 88 a week, on $1,407.27 of spend against $1,407.15 before.',
    },
    {
      type: 'chart',
      title: 'Southwest Las Vegas: leads every two days',
      subtitle: 'May 25 to Jun 25, 2026. Instant Form live from the evening of Jun 11.',
      suffix: ' leads',
      data: [
        { label: 'May 25-26', value: 10 },
        { label: 'May 27-28', value: 17 },
        { label: 'May 29-30', value: 14 },
        { label: 'May 31-Jun 1', value: 11 },
        { label: 'Jun 2-3', value: 12 },
        { label: 'Jun 4-5', value: 14 },
        { label: 'Jun 6-7', value: 6 },
        { label: 'Jun 8-9', value: 4 },
        { label: 'Jun 10-11', value: 3, highlight: true },
        { label: 'Jun 12-13', value: 24, highlight: true },
        { label: 'Jun 14-15', value: 27 },
        { label: 'Jun 16-17', value: 26 },
        { label: 'Jun 18-19', value: 24 },
        { label: 'Jun 20-21', value: 16 },
        { label: 'Jun 22-23', value: 32 },
        { label: 'Jun 24-25', value: 27 },
      ],
      note: 'Meta-attributed leads. Fifth Element\'s ads started May 25. Spend was $1,407.15 from May 29 to Jun 11 and $1,407.27 from Jun 12 to 25.',
    },
    {
      type: 'p',
      text: 'CPM was flat, $23.08 before and $23.03 after, and CTR slipped from 3.12% to 2.75%. Our June 18 status update also credited a targeting refresh and the removal of weaker ad sets in the same stretch. Refreshed creative was not previewed until June 22, so it cannot explain the day-one jump, though it may have run in the final days of the after window.',
    },
    {
      type: 'creative',
      title: 'The refreshed local ads previewed June 22',
      caption:
        'Previewed to the studio on June 22, 2026, 11 days after the form went live. Results are totals for every ad that ran each video, from July 13, when our ad-level data starts, to October 21. They come from later windows and do not describe the June comparison.',
      items: [
        {
          kind: 'video',
          src: '/case-studies/pilates-addiction-instant-forms-conversion-fix/ad-3.mp4',
          poster: '/case-studies/pilates-addiction-instant-forms-conversion-fix/ad-3.jpg',
          alt: 'A Southwest Las Vegas team member outside a nearby Walmart with the caption Southwest Vegas, the hook of a local landmark ad',
          label: 'Local landmark hook ad',
          stat: '273 leads at $14.32',
          note: 'Meta, 12 ads running this video, Jul 13 to Oct 21, 2026',
        },
        {
          kind: 'video',
          src: '/case-studies/pilates-addiction-instant-forms-conversion-fix/ad-4.mp4',
          poster: '/case-studies/pilates-addiction-instant-forms-conversion-fix/ad-4.jpg',
          alt: 'A Southwest Las Vegas team member in a Blue Diamond shirt in front of the studio under construction, with the caption Hey Vegas',
          label: 'Build-out sneak peek ad',
          stat: '348 leads at $14.60',
          note: 'Meta, 12 ads running this video, Jul 13 to Oct 21, 2026',
        },
      ],
    },
    { type: 'cta' },

    { type: 'h2', kicker: 'Where It Does Not Work', text: 'The same move, made for the wrong reason, costs money' },
    {
      type: 'p',
      text: 'We have hit three limits, each in a live account.',
    },
    {
      type: 'list',
      items: [
        {
          title: 'When the page already converts.',
          text: 'Three Pilates Addiction studios got Instant Forms between May 18 and June 6, 2026 while already at 10% or higher. Combined conversion barely moved, 12.48% to 12.69%, and **cost per lead went up, from $11.42 to $15.56**. All three windows straddle a Founders 50 date, so read it as directional. On a page that already converts, the form has nothing to fix.',
        },
        {
          title: 'When it made no difference.',
          text: 'Two iFlex Stretch Studios locations added Instant Forms on July 24 and 25, 2026. Over the next 14 days, neither cost per lead nor lead submission rate moved in a way we could measure. We do not know why, and iFlex website leads can be double-counted by its tracking, which makes the comparison less reliable.',
        },
        {
          title: 'When the form replaces the page.',
          text: 'At one location that ran almost entirely on Instant Forms for a week, leads got cheaper, and within days the location told us they were coming from outside the area and were not turning into members. We moved the budget back to the landing page that week.',
        },
      ],
    },
    {
      type: 'p',
      text: 'Every number here is a lead-volume or lead-cost number. We do not yet have show or close rates by lead source for these studios. That gap is why the guardrails below exist.',
    },

    { type: 'h2', kicker: 'What We Do Now', text: 'The Instant Form rules' },
    {
      type: 'steps',
      items: [
        {
          title: 'Read the ladder first',
          text: 'Our first trigger for a form is CPM and CTR in range with lead submission rate under the brand floor. A CPM problem calls for a larger audience or local creative. A sliding CTR calls for new creative.',
        },
        {
          title: 'Start on the landing page',
          text: 'Every studio starts on the landing page. We add a form when the page is under the floor, or in the last stretch before a Founders Day when volume matters more than intent, as at Studio 6, a week out and at the studio\'s request. Vintage Park ran only on landing pages through its Founders Day, June 26, 2026, when the owner reported 170 memberships.',
        },
        {
          title: 'Add, never replace',
          text: 'The form runs beside the page, and the page stays ready to take the budget back.',
        },
        {
          title: 'Watch the phone numbers',
          text: 'At a Pilates Addiction studio in Texas, the form went live the same week we widened the radius, and more than 70 of roughly 546 leads from our ads came back with bad phone numbers. Spend was split 50/50 between form and page, so we could not pin it on the form alone. We built a version that texts the prospect a code before it submits and planned to move the split toward 60/40 or 80/20 in favor of the page. Verification is now an option we weigh against the friction it adds.',
        },
        {
          title: 'Name the studio in the form header',
          text: 'In May 2026 an owner told us the form was sending leads from outside the area. The next day the studio\'s name was in the form header. Ralf Ocampo, our Head of Brand and Creative, describes it as a soft layer of friction that qualifies leads without shrinking the ads\' local reach.',
        },
        {
          title: 'Ask the studio about quality within days',
          text: 'Owners notice lead quality before any dashboard does. We check in right after the change.',
        },
      ],
    },
    {
      type: 'quote',
      text: 'We tend to never go exclusive to one or the other. We\'ll run both, and then put budget into the one that\'s getting you better results. Better results could either be volume, or it could also be quality.',
      name: 'Tristynn McGowan',
      role: 'Founder & CEO, Fifth Element, on a sales call, Aug 28, 2026',
    },

    { type: 'h2', kicker: 'Why It Worked', text: 'The fix matched the failure' },
    {
      type: 'p',
      text: 'Instant Forms did not make these ads better; CPM and CTR say so. They worked because the failure sat between the click and the lead, and the change went exactly there. Made where the funnel was healthy, the same change cost money.',
    },
    {
      type: 'callout',
      title: 'The lesson',
      text: 'An Instant Form rescues a landing page that has stopped converting. Beside a page that already converts, it tends to raise your cost per lead, so check the conversion rate before you add one.',
    },

    { type: 'h2', kicker: 'What This Means for Your Brand', text: 'Size the fix to the failure' },
    {
      type: 'p',
      text: 'What transfers to your brand is the order of operations, not the form. Every location is read on the same four numbers, the broken rung gets named before anything changes, and the fix is sized to the failure. None of it required changing the brand\'s landing page. That is how one change produced 8 improvements where the diagnosis called for it, raised combined cost per lead across 3 studios where it did not, and made no measurable difference at another brand.',
    },
    {
      type: 'p',
      text: 'Most locations will not need it: in the 90 days to October 20, 2026, 44 of the 52 Pilates Addiction studios we measured (at least $500 spend and 30 days of data) converted at 10% or better. The test for any brand: check each location\'s last seven days, flag those with CPM and CTR in band and lead submission rate under the floor, and fix that one step. Where locations already convert at 10% or better, our data says Instant Forms are unlikely to lower cost per lead.',
    },
  ],
  sources:
    'Meta delivery data from Fifth Element\'s client dashboards (Meta platform, summed per studio per day), comparing the 14 days before with the 14 days from the first full day Instant Forms were live, first full days Apr 20 to Aug 22, 2026; go-live dates and other changes in each window from Fifth Element Slack client channels and status updates. Counter-examples use the same 14-day method (Pilates Addiction, changes May 18 to Jun 6, 2026; iFlex, Jul 24 and 25, 2026). Founders 50 comparison: 17 Pilates Addiction studios on the old single-campaign structure with Founders 50 dates Apr 24 to Jul 17, 2026; new-campaign comparison: 35 Pilates Addiction launches with first spend Mar 28 to Aug 20, 2026, both from Fifth Element\'s reporting database. Brand medians: location-level 90-day totals, Jul 23 to Oct 20, 2026, locations with at least $500 spend and 30 days of data (the same set as our Four Metrics benchmarks). Lead-quality notes from Fifth Element status updates and client channels, May to Oct 2026. Vintage Park membership count reported by the owner (Slack, Jun 29, 2026). Tristynn McGowan quote from a sales call, Aug 28, 2026. Leads are Meta-attributed leads, not CRM records or members.',
  order: 4,
  seoKeywords: [
    'Meta Instant Forms vs landing page',
    'lead submission rate',
    'franchise cost per lead',
    'Pilates studio Facebook ads',
    'Instant Forms lead quality',
    'franchise marketing agency',
  ],
};
