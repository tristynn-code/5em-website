import type { CaseStudy } from '../types';

export const study: CaseStudy = {
  slug: 'iflex-local-content-and-fatigue',
  kind: 'playbook',
  brand: 'iflex',
  brandName: 'iFlex Stretch Studios',
  vertical: 'Stretch & Recovery',
  title:
    'One local shoot took an iFlex studio from [[27 to 74 leads a week]]. Six days later it started to wear out.',
  dek: 'Everything in the account was healthy except the price of reach. Footage of a nearby shopping district cut CPM from $37.13 to $28.37 and cost per lead from $42.82 to $20.14 (Jul 14 to 20 vs Jul 21 to 27, 2026). By the third week cost per lead was back at $41.55. One good shoot is a result. A dense market needs a filming cadence.',
  cardTitle: 'One local shoot, 27 to 74 leads a week, and why it was not enough',
  summary:
    'Local footage took an iFlex studio from 27 to 74 leads a week in late July 2026 and cut cost per lead from $42.82 to $20.14. Two weeks later it was back at $41.55.',
  published: '2026-10-22',
  readTime: '7 min',
  cover: {
    src: '/case-studies/iflex-local-content-and-fatigue/cover.jpg',
    alt: 'An iFlex stretch coach guiding a client through an assisted neck stretch',
    position: '56% 15%',
  },
  heroStats: [
    {
      value: '74',
      label: 'Leads in the first week of the local ads',
      sub: 'Up from 27. 7 days before vs 7 days from Jul 21, 2026. Daily spend also rose, $165.17 to $212.88',
    },
    {
      value: '$20.14',
      label: 'Cost per lead that week',
      sub: 'Down from $42.82, same windows',
    },
    {
      value: '$28.37',
      label: 'CPM, the cost to show the ads 1,000 times',
      sub: 'Down from $37.13, same windows',
    },
    {
      value: 'About 6 days',
      label: 'Before the new ads started to wear out',
      sub: 'By Aug 4 to 10, 2026, cost per lead was back at $41.55',
    },
  ],
  tags: ['Local Content', 'Creative Fatigue', 'Meta Ads'],
  timeline: [
    {
      when: 'Jul 15, 2026',
      title: 'The diagnosis',
      text: 'A review call with the studio. Page, audience and click-through rate are not the problem. CPM is $35 against a target below $30, and the creative has no local hook.',
    },
    {
      when: 'Jul 17 to 21, 2026',
      title: 'The shoot',
      text: 'The general manager is scheduled to film a nearby shopping district on Friday, July 17. The first three finished ads are posted for review on July 21.',
    },
    {
      when: 'Jul 21 to 22, 2026',
      title: 'The new ads land',
      text: 'Daily CPM moves from a $32.84 to $42.92 range (Jul 10 to 20) to a $26.29 to $28.04 range (Jul 22 to 29). On July 22 the studio logs 21 leads at $10.14 each, its best day.',
    },
    {
      when: 'Jul 27 to Aug 10, 2026',
      title: 'The fade',
      text: 'A second batch of local ads goes live Jul 27 to 28. Click-through rate and lead submission rate slide anyway. Weekly leads fall from 74 (Jul 21 to 27) to 50 (Jul 28 to Aug 3) and 35 (Aug 4 to 10) at roughly the same spend.',
    },
    {
      when: 'Aug 6, 2026',
      title: 'The rule',
      text: 'We tell iFlex corporate this market needs a steady volume of local footage, not one good shoot.',
    },
  ],
  stack: [
    'Meta Ads',
    'Content Coaching',
    'Local Creative',
    'In-house Editing',
    'Four Metrics Diagnostic',
    'Presale Landing Page',
    'Fifth Element Reporting',
  ],
  body: [
    { type: 'h2', kicker: 'The Problem', text: 'A presale studio well short of its lead pace' },
    {
      type: 'p',
      text: 'In July 2026, an iFlex Stretch Studios location in a dense suburban market, with 129,000 to 150,000 people inside a 2-mile radius, was in presale, collecting VIP leads ahead of its founding membership sale. Our pace target for an iFlex presale is about 50 leads a week. In the weeks of July 7 and July 14, 2026, the studio produced 19 and 27, at $36.91 and $42.82 per lead.',
    },
    {
      type: 'p',
      text: 'The fix was footage of a shopping district a few hundred yards from the studio, and it worked within a day. **Then, about six days in, it started to wear out.** That second part is the one most agencies miss.',
    },

    { type: 'h2', kicker: 'The Diagnosis', text: 'Everything upstream was healthy except CPM' },
    {
      type: 'p',
      text: 'On July 15, 2026 we reviewed the account with the studio\'s owner and general manager, on the four numbers we always read in order: CPM (the cost to show an ad 1,000 times), click-through rate (CTR), lead submission rate (the share of clickers who submit a form) and cost per lead (CPL). Launch to date, as quoted on the call (the account\'s data starts Jun 25, 2026):',
    },
    {
      type: 'list',
      items: [
        { title: 'Landing page:', text: 'converting at 10%, our median target.' },
        { title: 'CTR:', text: '2.3%, above the 1% to 2% average.' },
        { title: 'Audience:', text: '129,000 to 150,000 people inside a 2-mile radius. Plenty.' },
        { title: 'CPM:', text: '$35, against a target below $30 and ideally about $20. This was the problem.' },
      ],
    },
    {
      type: 'p',
      text: 'The week to July 20 was softer, with CTR at 1.98% and lead submission rate at 8.52%, but CPM was still the biggest gap. The ads ran on solid corporate creative, and the only local signal in the hook was the name of the town: no place anyone would recognize, no neighborhood callouts.',
    },
    {
      type: 'p',
      text: 'So CPM was the one broken number, and it was high because the creative had no local hook. That ruled out the usual first move. **With well over 100,000 people already in range, a bigger radius buys distance, not demand.** The lever was footage that looked like the neighborhood, and the people best placed to film it were the studio\'s own team. We also told them what to expect: if CPM halved and nothing else changed, cost per lead would land around $15.',
    },

    { type: 'h2', kicker: 'What We Did', text: 'Film the place the neighborhood already knows' },
    {
      type: 'steps',
      items: [
        {
          title: 'Coach the shoot',
          text: 'The shot list was small and specific: panning shots and storefronts at the shopping district, plus a second nearby neighborhood. 3 to 4 second clips, as many as possible, raw.',
        },
        {
          title: 'Skip the studio',
          text: 'None of the footage had to show the studio. Often the best way to localize a studio is not to show the studio at all.',
        },
        {
          title: 'Edit into variations',
          text: 'The general manager was scheduled to film on Friday, July 17, with edits due Monday, July 20. Our editors cut the clips into ads with a different local hook up front, and the first three were posted for the owner to review on July 21.',
        },
        {
          title: 'Run the hooks side by side',
          text: 'We run local callouts at the same time, not one after another, so the data shows which place the market responds to. Here, one ad, a neighborhood tour, carried most of the first week\'s leads.',
        },
      ],
    },

    { type: 'h2', kicker: 'The Result', text: 'CPM fell the day the new ads landed' },
    {
      type: 'p',
      text: 'Daily CPM had run between $32.84 and $42.92 from July 10 to 20. From July 22 to 29 it ran between $26.29 and $28.04. On July 22, the first full day of the new ads, the studio logged 21 leads at $10.14 each. Through October 21, 2026, that is still its best day.',
    },
    {
      type: 'table',
      columns: ['Week', 'Spend', 'CPM', 'CTR', 'Lead submission rate', 'Leads', 'Cost per lead'],
      rows: [
        ['Jul 7 to 13', '$701.34', '$36.55', '2.16%', '10.33%', '19', '$36.91'],
        ['Jul 14 to 20', '$1,156.17', '$37.13', '1.98%', '8.52%', '27', '$42.82'],
        ['Jul 21 to 27', '$1,490.16', '$28.37', '3.48%', '7.04%', '74', '$20.14'],
        ['Jul 28 to Aug 3', '$1,405.02', '$28.18', '2.86%', '6.06%', '50', '$28.10'],
        ['Aug 4 to 10', '$1,454.40', '$32.95', '2.40%', '5.04%', '35', '$41.55'],
      ],
      caption:
        'Meta delivery data, full 7-day weeks, Jul 7 to Aug 10, 2026. CTR is all clicks divided by impressions. Lead submission rate is leads divided by link clicks, across all lead forms. Leads are Meta-attributed.',
    },
    {
      type: 'p',
      text: 'CPM did not halve. It fell from $37.13 to $28.37, but CTR rose from 1.98% to 3.48% at the same time, and together they cut cost per lead by more than half.',
    },
    {
      type: 'p',
      text: 'Budget rose that week too, from $165.17 to $212.88 a day (7 days before vs 7 days from July 21, 2026), and some of the extra leads came from the extra spend. **But budget does not explain the drop in the price of reach.** July 20 spent $187.28 at a $41.30 CPM; July 22 spent $212.89 at a $27.32 CPM. And the week before, more money behind the old ads (weekly spend $701.34 to $1,156.17) had pushed cost per lead from $36.91 to $42.82.',
    },

    { type: 'h2', kicker: 'The Part Most Agencies Miss', text: 'It started wearing out in about six days' },
    {
      type: 'chart',
      title: 'Cost per lead by week',
      subtitle: 'Jun 30 to Aug 10, 2026. New local ads live from Jul 21. The last three weeks spent $1,490.16, $1,405.02 and $1,454.40.',
      prefix: '$',
      data: [
        { label: 'Jun 30 to Jul 6', value: 24.37 },
        { label: 'Jul 7 to 13', value: 36.91 },
        { label: 'Jul 14 to 20', value: 42.82 },
        { label: 'Jul 21 to 27', value: 20.14, highlight: true },
        { label: 'Jul 28 to Aug 3', value: 28.1 },
        { label: 'Aug 4 to 10', value: 41.55, highlight: true },
      ],
      note: 'Meta-attributed leads. Jun 30 to Jul 6 was the campaign\'s first full week, and across our presale launches a new campaign buys its cheapest leads in its first 14 days.',
    },
    {
      type: 'p',
      text: 'By the week of August 4, cost per lead was $41.55, back near where it started, at about the same weekly spend as the good week. Two things wore out at once. The hooks tired: CTR went from 3.48% to 2.86% to 2.40%, and CPM climbed from $28.18 to $32.95. And fewer clicks became leads: lead submission rate went from 7.04% to 6.06% to 5.04%. That slide began before the shoot (10.33%, then 8.52%). The new ads did not cause it; they sent enough traffic to make it the next problem.',
    },
    {
      type: 'p',
      text: 'The general manager had sent a second batch of footage by July 24, and three more local ads started spending on July 27 and 28. **Meta kept most of the spend on the first ads, the market tired of them, and the new ones did not stop the slide.** New footage within a week was necessary here. On its own, it was not enough. On August 6 we told iFlex corporate that this market needs a steady volume of local footage, not one good shoot.',
    },
    {
      type: 'creative',
      title: 'The three early warnings we watch for',
      caption:
        'From the script of our ad fatigue video for franchise owners (December 2025). Between the weeks of Jul 21 and Aug 4, 2026, this studio showed the second and third: CTR slid and cost per lead climbed at about the same weekly spend.',
      items: [
        {
          kind: 'document',
          src: '/case-studies/iflex-local-content-and-fatigue/doc-2.jpg',
          alt: 'Fifth Element fatigue video script listing three early warning signs: attention drop, click drop and cost per lead drifting up',
          label: 'Fatigue script: three early warnings',
          note: 'Fifth Element ad fatigue video script, December 2025',
        },
      ],
    },

    { type: 'h2', kicker: 'The Principle', text: 'Local is a signal, and signals wear out' },
    {
      type: 'p',
      text: 'The shoot matched the failure. People in range were scrolling past an ad that could have run in any town. A recognizable place told them it was theirs, and reach got cheaper. But a 2-mile radius holds a fixed set of people. In a dense area they see that signal again and again, stop reacting, and the price of reach climbs back. A market that responds fast also tires fast.',
    },
    {
      type: 'callout',
      title: 'The lesson',
      text: 'Local footage fixed this studio\'s CPM in a day and started wearing out in about six. One good shoot is a result. A filming cadence is a strategy.',
    },

    { type: 'h2', kicker: 'The Playbook', text: 'The iFlex rules: creative, targeting or page' },
    {
      type: 'p',
      text: 'The four numbers tell us which lever to pull. Territory rules come first: the franchise agreement\'s radius and corporate approval set the limits on any targeting change.',
    },
    {
      type: 'table',
      columns: ['What we see', 'What it usually means', 'What we change'],
      rows: [
        ['CPM above $30, audience well above 60,000 (130,000+ in our examples)', 'The creative is not resonating locally', 'New local footage, not more budget or radius'],
        ['CPM above $30, audience around 50,000 to 60,000', 'The audience is too small', 'Widen the radius, inside territory rules'],
        ['CTR sliding for 7 days at flat spend and audience', 'Creative fatigue', 'New hooks first, then body copy, then headline. Offer changes come last'],
        ['Lead submission rate under 10% with CPM and CTR healthy', 'The conversion step', 'Fix the page. Test a redesign on part of the traffic first. Add Instant Forms beside the page, not instead of it'],
        ['Every rate healthy, but under about 50 leads a week', 'Under-spending for the market', 'Raise the budget. This is the last check, not the first'],
      ],
      caption: 'Thresholds from Fifth Element\'s iFlex, local-hook and pacing playbooks, 2026.',
    },
    {
      type: 'p',
      text: 'The fatigue row is about the trend, not the floor. Our written iFlex trigger is CTR under 1.5%. This studio never got near it: weekly CTR fell from 3.48% to 2.40% while cost per lead went from $20.14 to $41.55. A week of sliding is the signal.',
    },
    {
      type: 'p',
      text: 'We have seen the radius row fail, too. At another iFlex studio, moving from a 5-mile to a 6-mile radius in August 2026 did not add the reach or lead lift we hoped for, so we moved it back.',
    },
    {
      type: 'p',
      text: 'The page row comes from this studio. On August 11, 2026 it moved to a redesigned, studio-specific page. On landing-page traffic alone, conversion was 3.54% in the three weeks after against 5.98% in the three weeks before, on a small sample (19 leads after) while landing-page spend was coming down. The redesign had replaced the old page outright, and around August 17 we moved the campaign entirely to Instant Forms to protect the presale lead goal. Both broke the rules above, which is why they are written that way.',
    },
    { type: 'h3', text: 'The 7 to 14 day content cadence' },
    {
      type: 'steps',
      items: [
        {
          title: 'Coach every 7 to 14 days, weekly in a dense market',
          text: 'Every Fifth Element engagement commits to coaching every 7 to 14 days: a one to two page guide that takes 10 to 15 minutes to film on a phone. Weekly uploads are the goal, every other week the minimum. A market that tires in six days lives at the weekly end.',
        },
        {
          title: 'Ten different sentences are worth more than the same sentence ten times',
          text: 'Each guide carries 10 to 15 numbered hooks, local callouts by landmark or street rather than a forced city name, so the editors get real variations to test.',
        },
        {
          title: 'Have the next hooks edited before the current ones tire',
          text: 'We read ad sets on a 3-day cycle and refresh before cost per lead spikes. The early warnings: a hook rate 20% to 30% below normal, CTR sliding while impressions and audience hold, cost per lead drifting up with nothing else changed. Put new footage in its own ad sets so Meta funds it, rather than letting older ads soak up the budget.',
        },
        {
          title: 'Keep a mix',
          text: 'Local hooks win the click; studio footage and offer ads help it convert. In 75 Pilates Addiction studio-months where both ran side by side (Jul 13 to Oct 20, 2026), local-named ads had the higher link CTR in 51 but a lower median lead submission rate, 10.6% against 14.8%. In October 2026 Ralf Ocampo, our Head of Brand and Creative, began moving accounts toward about half local content, a quarter studio footage and a quarter offer ads.',
        },
      ],
    },
    {
      type: 'creative',
      title: 'The refresh cycle behind the cadence',
      caption: 'The first page of our 3-day refresh cycle SOP (February 2026), the internal process behind step 3.',
      items: [
        {
          kind: 'document',
          src: '/case-studies/iflex-local-content-and-fatigue/doc-1.jpg',
          alt: 'First page of the Fifth Element 3-day refresh cycle SOP: act on the last 3 days at the ad set level and refresh before cost per lead spikes',
          label: '3-day refresh cycle SOP',
          note: 'Fifth Element internal SOP, February 2026',
        },
      ],
    },
    {
      type: 'p',
      text: 'A fresh round can bring a tired account back. At Pilates Addiction Alamo Heights in San Antonio, the owner uploaded new local footage around July 28, 2026. In the 14 days either side, at flat spend ($1,811.79 vs $1,810.85), cost per lead went from $26.64 to $18.48.',
    },
    { type: 'cta' },

    { type: 'h2', kicker: 'What This Means for Your Brand', text: 'Build the cadence in before the first ad runs' },
    {
      type: 'p',
      text: 'Before approving a budget increase or a radius change for a struggling location, ask which of the four numbers is broken. If it is CPM and the audience is large, the answer is local footage, best filmed by the location\'s own team, who know the places their neighbors recognize. When an owner cannot film, drone footage of the area, sourced by us or by corporate, carries the signal: in Pilates Addiction accounts it is our lowest cost-per-lead ad class, $11.49 per lead pooled from July 13 to October 20, 2026.',
    },
    {
      type: 'p',
      text: 'Then plan for that footage to expire. A dense-market location should aim for fresh local clips every week, with budget behind each new batch, so make filming a habit before launch.',
    },
  ],
  sources:
    'Meta delivery data from Fifth Element\'s reporting database, iFlex Stretch Studios location, daily and 7-day windows from Jun 30 to Aug 10, 2026 (before and after compared as Jul 14 to 20 vs Jul 21 to 27, 2026), ad-level delivery Jul 14 to Aug 10, 2026, and best-day check through Oct 21, 2026. Diagnosis figures (CPM, CTR, landing page rate, audience size) are launch to date as quoted on the Jul 15, 2026 call, from Fifth Element\'s Jul 16, 2026 status update on that call. The go-live date is confirmed by the new ads\' first spend on Jul 21, 2026. Landing page comparison from Meta, landing page ad sets only, 3 weeks either side of Aug 11, 2026. Pilates Addiction ad classes by ad name, Jul 13 to Oct 20, 2026 (data pulled Oct 22, 2026); Alamo Heights 14 days either side of Jul 28, 2026. Leads are Meta-attributed leads from our ads, not CRM records or members. Meta may count some iFlex website leads twice (magnitude unmeasured).',
  order: 2,
  seoKeywords: [
    'local ad creative franchise',
    'Meta ads creative fatigue',
    'iFlex Stretch Studios marketing',
    'franchise CPM',
    'content coaching for franchisees',
    'stretch studio Facebook ads',
  ],
};
