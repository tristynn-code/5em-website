import type { CaseStudy } from '../types';

export const study: CaseStudy = {
  slug: 'pilates-addiction-after-founders-day',
  kind: 'playbook',
  brand: 'pilates-addiction',
  brandName: 'Pilates Addiction',
  vertical: 'Pilates & Fitness',
  title: 'Life after the presale spike: Davie ran $8.56 per lead in its first 30 days and [[$8.96 six months later]]',
  dek: 'Most agencies are built for the launch spike. The real test is month six, when the Founders 50 sale is over and the ads are no longer new. Across 35 new Pilates Addiction campaigns, cost per lead more than doubled within 16 weeks. These are the rules we run from day one to keep cost per lead in check after Founders Day, and what they did at three studios.',
  cardTitle: 'After the presale spike: $8.56 in month one, $8.96 at month six',
  summary: 'Across 35 new Pilates Addiction campaigns, cost per lead more than doubled within 16 weeks. Davie ran $8.56 per lead in its first 30 days and $8.96 six months later.',
  published: '2026-10-22',
  readTime: '7 min',
  cover: {
    src: '/case-studies/pilates-addiction-after-founders-day/cover.jpg',
    alt: "An instructor with a headset mic cues members leaning into the reformer towers under warm light, from Pilates Addiction's official photography",
    position: '55% 40%',
  },
  heroStats: [
    {
      value: '$8.96',
      label: 'Davie CPL, latest 30 days',
      sub: 'Sep 21 to Oct 20, 2026, on $2,401.33. First 30 days from Apr 22: $8.56 on $4,718.70',
    },
    {
      value: '$14.41',
      label: 'Pilates Addiction CPL, 55 studios',
      sub: 'Sep 2026, vs $13.88 with 6 studios in Mar 2026, on 8.67 times the spend',
    },
    {
      value: '$12.51 to $13.02',
      label: 'White Rock monthly CPL',
      sub: 'Every month Jun to Sep 2026, through its soft opening',
    },
    {
      value: '22',
      label: 'Studios from repeat owners',
      sub: '9 owner groups have brought two or more Pilates Addiction studios to Fifth Element, as of Oct 21, 2026',
    },
  ],
  tags: ['Founders 50', 'Content Coaching', 'Meta Ads'],
  timeline: [
    {
      when: 'Apr 22, 2026',
      title: 'Davie launches',
      text: 'VIP ads go live. The first day, not even a full 24 hours, brings 42 leads, and the budget is doubled on day two with the owner\'s OK.',
    },
    {
      when: 'Apr 23 to 30, 2026',
      title: 'The plan for the decline',
      text: 'On the day-two call, Justin Flores, our Client Success Manager, tells the owner to expect $15 to $20 per lead after VIP, and the status update names local content as the next lever. The first coaching document follows on Apr 30.',
    },
    {
      when: 'Jun 12, 2026',
      title: 'Founders 50',
      text: 'After a budget push and studio-filmed teaser hooks, the owner reports over 70 memberships on Founders 50 day.',
    },
    {
      when: 'Jul 21 to Aug 19, 2026',
      title: 'The valley',
      text: 'Cost per lead reaches $19.80 for the 30-day window. The owner approves new finished ads on Aug 12, and a new local video goes live Aug 28 to 31.',
    },
    {
      when: 'Sep 2026',
      title: 'Back under its first-30-day CPL',
      text: '379 leads at $6.99 CPL. The latest 30 days, Sep 21 to Oct 20, run $8.96.',
    },
  ],
  stack: [
    'Meta Ads',
    'Content Coaching',
    'In-House Creative Production',
    'Phase-Based Campaign Structure',
    'Budget Sprint Pacing',
    'Fatigue Monitoring and Reporting',
  ],
  body: [
    { type: 'h2', kicker: 'The Problem', text: 'Most agencies are built for launch week' },
    {
      type: 'p',
      text: 'A presale launch is the easiest moment to look good on Meta: the campaign is new, the founding offer is urgent, and the local audience has seen none of it. In our data, a Pilates Addiction campaign\'s first 14 days are the cheapest leads a studio will ever buy.',
    },
    {
      type: 'p',
      text: 'Then Founders Day comes and goes, and the studio still has to fill. Alamo Heights sold 84 Founders 50 memberships on Feb 13, 2026; on Jul 14 the owners counted just under 250 members, most of them sold after the spike. That stretch is where owners judge their agency, and where a launch-first playbook runs out of ideas: keep the same campaign, refresh it in place, and explain why the cost per lead (CPL) doubled. We ran that playbook ourselves until August 2026.',
    },
    {
      type: 'p',
      text: 'Davie, in South Florida, is the test case. It launched Apr 22, 2026 and ran **$8.56 per lead over its first 30 days**. On day two we told the owner to expect $15 to $20 once VIP ended. From Sep 21 to Oct 20, 2026, it ran **$8.96**.',
    },
    { type: 'h2', kicker: 'The Evidence', text: 'The decline is predictable, and it is not the auction' },
    {
      type: 'p',
      text: 'Across 35 new Pilates Addiction campaigns with first spend between Mar 28 and Aug 20, 2026, pooled CPL rose at every stage of campaign age. CPM held between $19.77 and $22.44. What fell was the click rate and the share of clickers who submitted a form (LSR, leads per link click), so **this is not an auction-cost problem, and more budget does not fix it**. Two things go wrong after launch. The slow one is fatigue: the same ads, seen too often, earn fewer clicks and fewer forms.',
    },
    {
      type: 'table',
      columns: ['Campaign age', 'CPL', 'CPM', 'CTR', 'LSR'],
      rows: [
        ['Days 1 to 14', '$7.17', '$20.64', '2.90%', '19.25%'],
        ['Days 15 to 28', '$11.00', '$19.77', '2.37%', '14.81%'],
        ['Days 29 to 56', '$14.36', '$20.58', '2.22%', '12.79%'],
        ['Days 57 to 112', '$16.64', '$22.44', '2.21%', '12.26%'],
      ],
      caption: '35 Pilates Addiction locations whose first Meta spend with Fifth Element fell between Mar 28 and Aug 20, 2026 (mostly presale launches), pooled by campaign age, data through Oct 20, 2026. Meta leads, hiring campaigns excluded. CTR is all clicks over impressions.',
    },
    {
      type: 'p',
      text: 'The fast one is the **Founders 50 cliff**. In 17 of our studios on the old single-campaign structure, with Founders 50 sales between Apr 24 and Jul 17, 2026, pooled CPL went from $11.08 in the 14 days before the sale to $18.11 in the 14 days after. It rose at 16 of 17, and days 15 to 28 recovered only partly ($15.00). The campaign was still selling a deadline that had passed: a structure problem, not a creative one.',
    },
    { type: 'h2', kicker: 'What We Do Now', text: 'Plan the decline while the launch still looks perfect' },
    {
      type: 'p',
      text: 'Davie\'s first day, not even a full 24 hours, produced 42 leads. On the day-two call we set expectations for the decline, and the status update named the fix before it was needed.',
    },
    {
      type: 'quote',
      text: 'Looking ahead, the next major lever will be local content. In the next couple of weeks, we\'ll begin layering in simple, authentic videos tied to the local area to maintain performance as initial momentum starts to level out.',
      name: 'Justin Flores',
      role: 'Client Success Manager, Fifth Element (Davie status update, Apr 23, 2026)',
    },
    {
      type: 'steps',
      items: [
        {
          title: 'Front-load the launch, with new footage ready by day 15',
          text: 'Presale spend is front-loaded into the two cheapest weeks the studio will see, and the owner is told up front that CPL will rise after VIP. Since July 2026 we collect local footage right before launch, so the first refresh can land before the curve turns, around day 15.',
        },
        {
          title: 'Launch a new campaign the day Founders 50 ends',
          text: 'On Aug 11, 2026 we made four phases the standing structure for Pilates Addiction presales: VIP list to Founders 50, Founders 50 to soft opening, soft opening to grand opening, then evergreen. Each gets a new campaign at the boundary, not a refresh in place, reported on its own. Our first read covers five studios, too few to claim a result.',
        },
        {
          title: 'New content every 7 to 14 days',
          text: 'Our standard is a one-to-two-page coaching document every 7 to 14 days, built to take 10 to 15 minutes to film on a phone. Weekly uploads are the goal; every other week is the floor.',
        },
        {
          title: 'Refresh before fatigue, not after',
          text: 'Three early warnings: hook rate down 20% to 30% from normal, click rate sliding at flat impressions and audience, and CPL drifting up with nothing else changed. Then change the creative first, body copy and headline next, offers and pricing last.',
        },
        {
          title: 'Use local formats that last',
          text: 'Footage at the studio\'s sign, landmarks by name, drone flyovers, and "Do you shop here?", where the presenter points at businesses locals know. **Good local footage lasts.** At Vintage Park, three ads built on the owners\' Coming Soon one-liners delivered 686 of the account\'s 923 leads from Jul 13 to Oct 21, 2026, at $10.65 per lead against $11.54 for every other ad.',
        },
        {
          title: 'Sprint on confirmed efficiency, not to defend a launch number',
          text: 'Cheap weeks fade on their own: across our network, in 95 week-pairs at 40 locations where a week ran under $10 per lead at flat spend, the next week cost more in 80. So we double a Pilates Addiction budget under $10 after the launch spike, return to $100 a day at $10 to $12, and add budget when a studio falls behind its weekly lead pace. Across 29 sprints at 28 Pilates Addiction, iFlex and Ultimate Longevity Center locations, leads per day rose 65.5% for a 14.8% higher pooled CPL ($13.89 to $15.95).',
        },
      ],
    },
    { type: 'cta' },
    { type: 'h2', kicker: 'The Proof', text: 'Month six, measured against the curve' },
    {
      type: 'p',
      text: 'In March 2026 we ran 6 Pilates Addiction studios at $13.88 per lead. In September 2026 we ran 55 at $14.41: spend up 8.67 times, CPL within 3.8%. The single-studio yardstick is the curve above: $16.64 by days 57 to 112.',
    },
    { type: 'h3', text: 'Davie, FL: still in presale, within $0.40 of its first-30-day CPL' },
    {
      type: 'p',
      text: 'Davie\'s first 30 days ran $4,718.70, 551 leads, **$8.56 CPL**. The first coaching document went out Apr 30, and on Founders 50 day, Jun 12, the owner reported "over 70 memberships so far."',
    },
    {
      type: 'creative',
      title: 'The hook scripts we sent on Apr 30, and two ads the studio filmed from them',
      caption: 'A page from the Pilates Addiction filming coaching guide we sent the Davie owner in Slack on Apr 30, 2026, and two Founders 50 ads the studio filmed from its hook scripts, approved by the owner on Jun 9. The class footage in both ads is Pilates Addiction brand footage, not Davie, which had not opened.',
      items: [
        {
          kind: 'document',
          src: '/case-studies/pilates-addiction-after-founders-day/doc-3.jpg',
          alt: 'Hook scripts page with lines such as "Founders 50 drops on [Date]. Get on the list today." and "[City], we are bringing Pilates to you."',
          label: 'Hook scripts, including #2 and #5',
        },
        {
          kind: 'video',
          src: '/case-studies/pilates-addiction-after-founders-day/ad-3.mp4',
          poster: '/case-studies/pilates-addiction-after-founders-day/ad-3.jpg',
          alt: 'A Pilates Addiction Davie team member at the Welcome to the Town of Davie sign asking Davie if it has heard of Pilates Addiction',
          label: 'Hook #5, filmed at the Davie sign',
          note: 'Founders 50 ad, delivered Jun 8, 2026',
        },
        {
          kind: 'video',
          src: '/case-studies/pilates-addiction-after-founders-day/ad-4.mp4',
          poster: '/case-studies/pilates-addiction-after-founders-day/ad-4.jpg',
          alt: 'A Pilates Addiction Davie team member at the Pine Island Plaza sign announcing the Jun 12 Founders 50 drop',
          label: 'Hook #2, filmed at Pine Island Plaza',
          note: 'Founders 50 ad, delivered Jun 8, 2026',
        },
      ],
    },
    {
      type: 'p',
      text: 'Then Davie followed the curve. Still in presale, it had no Founders 50 deadline and no open studio to show. By days 91 to 120 (Jul 21 to Aug 19), CPL reached $19.80. A new local video went live Aug 28, and on Aug 31 it was relaunched in four new ad sets alongside the "Do you shop here?" and "Do you bank here?" cuts already running.',
    },
    {
      type: 'creative',
      title: 'The local footage in Davie\'s late-August relaunch',
      caption: 'The sign ad is a new cut of the studio\'s June sign footage, shown above. The "Do you shop here?" ad uses clips the studio filmed in early August; Davie had not opened yet, so the class footage in it is not from Davie. Stats are Meta leads for each ad across the four relaunch ad sets.',
      items: [
        {
          kind: 'image',
          src: '/case-studies/pilates-addiction-after-founders-day/ad-1.jpg',
          alt: 'A Pilates Addiction Davie team member at the Welcome to the Town of Davie sign',
          label: 'Welcome to Davie sign ad',
          stat: '393 leads at $7.04',
          note: 'Meta, four relaunch ad sets, Aug 31 to Oct 20, 2026',
        },
        {
          kind: 'video',
          src: '/case-studies/pilates-addiction-after-founders-day/ad-2.mp4',
          poster: '/case-studies/pilates-addiction-after-founders-day/ad-2.jpg',
          alt: 'A Pilates Addiction Davie team member outside the Davie coming soon storefront',
          label: '"Do you shop here?" ad',
          stat: '55 leads at $9.09',
          note: 'Meta, four relaunch ad sets, Aug 31 to Oct 20, 2026',
        },
      ],
    },
    {
      type: 'chart',
      title: 'Pilates Addiction Davie, cost per lead by 30-day window',
      subtitle: 'Lower is better. Launch, the summer valley, then the late-August relaunch',
      prefix: '$',
      data: [
        { label: 'Apr 22 to May 21', value: 8.56, highlight: true },
        { label: 'May 22 to Jun 20', value: 12.88 },
        { label: 'Jun 21 to Jul 20', value: 14.54 },
        { label: 'Jul 21 to Aug 19', value: 19.8 },
        { label: 'Aug 20 to Sep 20', value: 9.31 },
        { label: 'Sep 21 to Oct 20', value: 8.96, highlight: true },
      ],
      note: 'Meta spend divided by Meta leads, Fifth Element reporting data, Apr 22 to Oct 20, 2026. The fifth window is 32 days so the last matches the latest 30 days. Spend $4,718.70 in the first window, $2,401.33 in the last.',
    },
    {
      type: 'p',
      text: 'September: **379 leads at $6.99**, on $2,650.77. The latest 30 days, Sep 21 to Oct 20: 268 leads at $8.96 on $2,401.33, $0.40 above the first 30 days and well under the $15 to $20 we forecast on day two. Its lowest-CPL 90-day stretch on record is the latest: $11.16 from Jul 23 to Oct 20, 24.4% under the $14.76 Pilates Addiction median for the same 90 days (52 studios with at least $500 spend and 30 days of data). We have not isolated how much of the September drop was the new video and how much was the relaunch itself.',
    },
    { type: 'h3', text: 'Dallas White Rock, TX: switched agencies mid-presale and held the line' },
    {
      type: 'p',
      text: 'The White Rock owners moved to Fifth Element from another agency on May 24, 2026, mid-presale. On a Jun 24 call the owner reported about 60 founding memberships from Founders weekend. After that, monthly CPL barely moved: $13.02 in June, $12.51 in July, $12.57 in August and $12.82 in September, through its soft opening, while monthly spend fell from $3,099.56 to $1,986.56.',
    },
    {
      type: 'quote',
      text: 'We\'re basically getting the same numbers with a smaller budget, which is awesome.',
      name: 'Gracie Larach',
      role: 'Owner, Pilates Addiction Dallas White Rock (Jul 22, 2026)',
    },
    {
      type: 'p',
      text: 'October is the next test: Oct 1 to 20 ran $17.88 on 74 leads ahead of the Oct 24 grand opening.',
    },
    { type: 'h3', text: 'Alamo Heights, San Antonio, TX: the second round matters' },
    {
      type: 'p',
      text: 'Alamo Heights, one of our first Pilates Addiction studios, soft-opened Jun 25, 2026 and held its grand opening Aug 1. Monthly CPL went from $15.27 in June to $23.77 in July; the team\'s Jul 28 diagnosis was creative fatigue, with click rate and landing page conversion both down.',
    },
    {
      type: 'p',
      text: 'The owners had called new content the biggest gap, so we changed the creative and left the budget alone. Studio staff filmed new clips, uploaded around Jul 28. The 14 days before (Jul 14 to 27): 68 leads at $26.64. The 14 days after (Jul 28 to Aug 10), which include the Aug 1 grand opening weekend: **98 leads at $18.48**, at flat spend ($1,811.79 vs $1,810.85). The rule does not retire: September ran $21.17 and Oct 1 to 20 ran $27.79.',
    },
    { type: 'h3', text: 'Owners come back' },
    {
      type: 'p',
      text: 'The other month-six test is whether owners come back. As of Oct 21, 2026, **9 owner groups have brought two or more Pilates Addiction studios to Fifth Element, 22 studios in all.** On Aug 14, 2026, three months past a 109-membership Founders Day, Middletown\'s owner told us she intended to use Fifth Element for her second location.',
    },
    { type: 'h2', kicker: 'Why It Works', text: 'The launch number is the campaign\'s novelty talking' },
    {
      type: 'p',
      text: 'A launch CPL is part strategy and part novelty, and novelty fades two ways: slowly, as the same ads tire, and all at once, when Founders 50 ends. New local footage on a schedule, mixed with class footage and offer ads so the click converts, answers the first. A new campaign at each phase answers the second. Budget only sets how many leads you buy at the price the creative sets.',
    },
    {
      type: 'callout',
      title: 'The lesson',
      text: 'Launch-week cost per lead measures how new the campaign is. Month-six cost per lead measures the agency.',
    },
    { type: 'h2', kicker: 'What This Means for Your Brand', text: 'Judge your agency at month six' },
    {
      type: 'p',
      text: 'For a franchisor, launch week is the wrong place to compare agencies: any competent agency buys cheap leads in a new campaign\'s first two weeks. Ask for the month-six numbers, the 14 days after Founders Day, and how often the studio sends new footage.',
    },
    {
      type: 'p',
      text: 'The curve is not unique to Pilates Addiction. Ultimate Longevity Center launches (10 centers, first spend Jun 18 to Aug 3, 2026) went from $5.87 in days 1 to 14 to $14.58 by days 57 to 112, though there CPM rose too ($32.51 to $38.98, peaking at $40.51 in days 29 to 56), so fatigue is only part of it.',
    },
  ],
  sources:
    'Meta Ads Manager data via Fifth Element reporting: Davie 30-day windows and September, Apr 22 to Oct 20, 2026; Davie ad-level, Jul 27 to Sep 30, 2026, and relaunch ads Aug 31 to Oct 20, 2026; Davie best 90 days Jul 23 to Oct 20, 2026; Dallas White Rock May 24 to Oct 20, 2026; Alamo Heights monthly Jun to Oct 20, 2026 and 14-day comparison Jul 14 to Aug 10, 2026; Pilates Addiction brand months Mar and Sep 2026; Vintage Park ad-level Jul 13 to Oct 21, 2026. Campaign-age curves (Pilates Addiction first spend Mar 28 to Aug 20, 2026; Ultimate Longevity Center first spend Jun 18 to Aug 3, 2026), Founders 50 comparison (17 Pilates Addiction studios on the old single-campaign structure, Apr 24 to Jul 17, 2026 sales), weekly CPL pairs and budget sprint analysis from Fifth Element\'s client dashboards (hiring campaigns excluded), Mar 21 to Oct 20, 2026. Member counts for Alamo Heights, Middletown, White Rock and Davie reported by the owners and studios to Fifth Element. Repeat-owner count from Fifth Element billing records, Oct 21, 2026. Leads are Meta-attributed leads.',
  order: 6,
  seoKeywords: [
    'Pilates studio marketing after presale',
    'franchise marketing after grand opening',
    'Pilates Addiction cost per lead',
    'Meta ads creative fatigue',
    'boutique fitness franchise marketing agency',
  ],
};
