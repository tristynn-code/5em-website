import type { CaseStudy } from '../types';

export const study: CaseStudy = {
  slug: 'pilates-addiction-founders-day-playbook',
  kind: 'playbook',
  brand: 'pilates-addiction',
  brandName: 'Pilates Addiction',
  vertical: 'Pilates & Fitness',
  title: 'What 14 Pilates Addiction presales taught us about selling [[100+ memberships on day one]]',
  dek: 'Seven of 14 Pilates Addiction studios sold 100 or more founding memberships on Founders Day. The number that predicted it was set weeks earlier: how many leads each studio had going in. The cheapest time to buy them was the first two weeks.',
  cardTitle: 'What 14 presales taught us about selling 100+ memberships on day one',
  summary:
    '7 of 14 Pilates Addiction studios sold 100+ memberships on Founders Day. Leads going in predicted it (r = 0.80): a median 893 for the seven, 575 for the rest.',
  published: '2026-10-22',
  readTime: '7 min',
  cover: {
    src: '/case-studies/pilates-addiction-founders-day-playbook/cover.jpg',
    alt: "A group of Pilates Addiction instructors and members posed in front of the lit arched mirrors, from the brand's official photography",
    position: '50% 30%',
  },
  heroStats: [
    {
      value: '7 of 14',
      label: 'Studios that sold 100+ memberships on Founders Day',
      sub: 'Of the 14 Pilates Addiction studios with a reported day-one count and a full presale ad record, Founders Days Apr 24 to Oct 2, 2026',
    },
    {
      value: 'r = 0.80',
      label: 'Leads going in vs day-one memberships',
      sub: 'Median 893 Meta leads for the 100+ studios vs 575 for the other seven',
    },
    {
      value: '$7.17',
      label: 'Cost per lead in campaign days 1 to 14',
      sub: 'vs $16.64 in days 57 to 112, across 35 Pilates Addiction launches (first spend Mar 28 to Aug 20, 2026; data through Oct 20, 2026)',
    },
    {
      value: '16 of 17',
      label: 'Studios whose cost per lead rose after Founders 50',
      sub: 'Pooled $11.08 in the 14 days before vs $18.11 in the 14 days after; 17 studios on the old single-campaign structure, Founders 50 dates Apr 24 to Jul 17, 2026',
    },
  ],
  tags: ['Presale', 'Meta Ads', 'Budget Sprints'],
  timeline: [
    {
      when: 'May 8, 2026',
      title: 'Middletown sells 109',
      text: '759 leads in 32 days of VIP at $7.12. The first of the seven studios in this set to clear 100 on Founders Day.',
    },
    {
      when: 'Jun 26, 2026',
      title: 'Vintage Park sells 170 in one day',
      text: '2,023 leads from our ads in 45 days of VIP at a $5.33 cost per lead. 171 by the end of the weekend.',
    },
    {
      when: 'Jul 10, 2026',
      title: 'Pacifica sells 165 in one day',
      text: '1,076 leads in 29 days of VIP at a $4.97 cost per lead.',
    },
    {
      when: 'Jul 27 to Aug 11, 2026',
      title: 'Four-phase presale adopted',
      text: 'Proposed to Sequel on July 27, three days after a weekly roll-up showed brand-wide leads down 27.5%. The standing structure for every Pilates Addiction presale from August 11.',
    },
    {
      when: 'Oct 2, 2026',
      title: 'Christenbury sells 128',
      text: '1,238 leads in 49 days of VIP at $6.59.',
    },
  ],
  stack: [
    'Meta Ads',
    'Content Coaching',
    'Presale Landing Page',
    'Budget Sprints',
    'Four-Phase Presale Campaigns',
    'Phase-Level Reporting',
  ],
  body: [
    { type: 'h2', kicker: 'The Problem', text: 'Founders Day is decided weeks before the doors open' },
    {
      type: 'p',
      text: 'Before a Pilates Addiction studio opens, it sells founding memberships with a Founders 50 offer. The first day of that sale, Founders Day, sets the studio’s starting membership base and its early cash. On August 19, 2026, Sequel Brands, the franchisor, showed its agencies the brand’s latest Founders Day average: 76 memberships.',
    },
    {
      type: 'p',
      text: 'On Vintage Park’s Founders Day, June 26, 2026, Sequel’s Chief Growth Officer, Jeff Miller, wrote that we needed to “bottle that secret sauce and replicate it for 300 more studios.”',
    },
    {
      type: 'p',
      text: 'The cautious way to run a presale is to start small, test into it, and judge each week on its cost per lead. Across 14 Pilates Addiction presales, the data pointed somewhere else. **The best single predictor of day-one memberships was the number of leads a studio had going in.** Budget mattered through the list it bought.',
    },
    { type: 'h2', kicker: 'The Evidence', text: 'What 14 Founders Days showed' },
    {
      type: 'p',
      text: 'We lined up every Pilates Addiction studio with both a day-one membership count and a full presale ad record: 14 studios, Founders Days April 24 to October 2, 2026. For each, we counted Meta leads from our ads between first spend and the day before Founders Day.',
    },
    {
      type: 'table',
      columns: ['Day-one memberships', 'Meta leads going in'],
      rows: [
        ['170', '2,023'],
        ['165', '1,076'],
        ['128', '1,238'],
        ['117', '893'],
        ['109', '759'],
        ['109', '728'],
        ['105', '633'],
        ['98', '856'],
        ['85', '696'],
        ['83', '539'],
        ['66', '575'],
        ['60', '303'],
        ['57', '637'],
        ['20', '520'],
      ],
      caption:
        '14 Pilates Addiction studios, Founders Days Apr 24 to Oct 2, 2026, one row per studio. Leads from first spend to the day before Founders Day, hiring campaigns excluded. Memberships as reported by owners or recorded in our client success notes; day-one counts, except one studio (98) where only the Founders weekend total was reported. Pearson r = 0.80.',
    },
    {
      type: 'p',
      text: 'Leads going in and day-one memberships correlated at **r = 0.80**. The seven studios that cleared 100 went in with a median of 893 leads at a median CPL of $6.59; the other seven, 575 at $10.81. Medians do not lean on Vintage Park’s 2,023, so the gap is not one outlier.',
    },
    { type: 'h3', text: 'Spend alone does not explain it' },
    {
      type: 'p',
      text: 'A Pilates Addiction studio in Texas outspent Pacifica’s $5,352.85 before its Founders Day and sold 20 memberships. At a $15.45 CPL against Pacifica’s $4.97, the larger budget bought a smaller list: 520 leads against 1,076. That list also converted worst in the set, at 3.8 per 100, and a radius expansion we approved had pulled in leads who said the studio was too far away. Vintage Park spent the most, $10,788.59, at a $5.33 CPL. Among 46 Pilates Addiction launches with a full first 30 days of data (first spend Apr 3 to Sep 22, 2026), it ranked first on first-30-day leads, cost per lead and spend. **The record pattern is cheap leads, bought aggressively.**',
    },
    { type: 'h3', text: 'Conversion moves less than the list does' },
    {
      type: 'p',
      text: 'Twelve of the 14 studios sold between 8 and 17 memberships per 100 Meta leads going in (memberships count every source, so this is a ratio, not our conversion rate). The exceptions sit at the ends: the Texas studio at 3.8, and a 26-day presale that turned 303 leads into 60, the best rate in the set at 19.8 and still one of the smallest totals. Vintage Park needed no unusual ratio: its 2,023-lead list carried it to what its owner called a new Pilates Addiction record. **When the ratio holds that steady, the list is the lever you control.**',
    },
    {
      type: 'p',
      text: 'Speed mattered too. Vintage Park had 1,266 leads in its first 21 days and Pacifica 949; every other studio in the set was under 860. By our rough count, the record studios did not film more. What they shared was timing: hooks announcing the sale date went live in the last days before it. Vintage Park’s owners filmed local footage before launch, but Pacifica’s early surge ran on corporate creative, so owner footage is part of the pattern, not all of it.',
    },
    { type: 'h2', kicker: 'The Economics', text: 'Launch weeks are the cheapest leads in our data' },
    {
      type: 'p',
      text: 'A new Meta campaign is at its cheapest in its first two weeks. Pooling 35 Pilates Addiction locations whose first spend with us fell between March 28 and August 20, 2026, cost per lead climbed with every stretch of campaign age.',
    },
    {
      type: 'table',
      columns: ['Campaign age', 'Cost per lead', 'CPM', 'CTR', 'Lead rate (LSR)'],
      rows: [
        ['Days 1 to 14', '$7.17', '$20.64', '2.90%', '19.25%'],
        ['Days 15 to 28', '$11.00', '$19.77', '2.37%', '14.81%'],
        ['Days 29 to 56', '$14.36', '$20.58', '2.22%', '12.79%'],
        ['Days 57 to 112', '$16.64', '$22.44', '2.21%', '12.26%'],
      ],
      caption:
        'Pooled Meta results for 35 Pilates Addiction locations, first spend Mar 28 to Aug 20, 2026, data through Oct 20, 2026, hiring campaigns excluded. CTR is all clicks over impressions. LSR is leads over link clicks.',
    },
    {
      type: 'p',
      text: 'CPM, what we pay to reach people, barely moves. What fades is the share who click and the share of clickers who sign up. That fits creative fatigue more than a costlier auction, though the later weeks also include each studio’s post-sale period. The first month is not a warm-up.',
    },
    {
      type: 'p',
      text: 'Cheap weeks also fade on their own. Across our accounts, when a week came in under $10 per lead at flat spend, cost per lead rose the next week in 80 of 95 cases (95 week-pairs at 40 locations, Mar 21 to Oct 20, 2026). **So when a week comes in cheap, we spend more, not less.**',
    },
    {
      type: 'p',
      text: 'Across 16 Pilates Addiction studios with a documented Founders 50 date and first spend April 6 to July 20, 2026, launch to the day before Founders 50 produced 12,206 leads on $114,061.31, a pooled $9.34 cost per lead, in a median of 43 days. Eight of the 16 crossed our working target of 700 leads, and 14 crossed 500. Sequel now trains its studios to go big in the first month instead of testing into it.',
    },
    { type: 'h2', kicker: 'The Cliff', text: 'What happens after Founders 50' },
    {
      type: 'p',
      text: 'Until August 11, 2026, one campaign carried each Pilates Addiction presale from the first VIP ad to soft opening, refreshed in place with new copy and creative at each step.',
    },
    {
      type: 'p',
      text: 'We pooled all 17 studios on that structure with documented Founders 50 dates between April 24 and July 17, 2026, Vintage Park and Pacifica included. **Cost per lead rose after Founders 50 at 16 of 17.**',
    },
    {
      type: 'stats',
      items: [
        { value: '$11.08', label: 'Pooled CPL, 14 days before Founders 50', sub: '16.12 leads per studio per day' },
        { value: '$18.11', label: 'Days 1 to 14 after', sub: '6.29 leads per studio per day' },
        { value: '$15.00', label: 'Days 15 to 28 after', sub: '7.40 leads per studio per day' },
      ],
    },
    {
      type: 'p',
      text: 'Part of the drop is planned: sprints end, and spend per studio-day fell from $178.63 to $113.98 across the 17 studios. But efficiency fell too: the median studio’s cost per lead rose 1.68x, and weeks three and four recovered only partly. Our diagnosis was structural: Meta kept optimizing on what the campaign learned selling Founders 50, while the offer and the prospect’s mindset had moved on.',
    },
    {
      type: 'p',
      text: 'After the weekly roll-up for July 24, 2026 showed leads across 35 Pilates Addiction studios down 27.5% on 8.8% less spend, Drew Waelde, our Head of Agency Operations, sent Sequel a phase-based structure on July 27; its Chief Growth Officer signed off the next day. From August 11, 2026, every Pilates Addiction presale runs in four phases:',
    },
    {
      type: 'list',
      items: [
        { title: 'VIP list to Founders 50', text: 'Build the list: local hooks first, drop-date hooks at the end.' },
        {
          title: 'Founders 50 to soft opening',
          text: 'A new campaign, live as soon as the Founders 50 promotion ends, leading with the value of a founding membership.',
        },
        { title: 'Soft opening to grand opening', text: 'Its own campaign, its own objective, its own report.' },
        { title: 'Evergreen', text: 'The sustained campaign once the studio is open.' },
      ],
    },
    {
      type: 'p',
      text: 'The order matters: the records came first, under the old structure, and the four-phase build is what the post-sale cliff taught us. Only a handful of studios have reached Founders 50 since, and we have not confirmed each got the dedicated post-sale campaign, so we are not publishing a result.',
    },
    { type: 'cta' },
    { type: 'h2', kicker: 'What We Do Now', text: 'The Founders Day playbook' },
    {
      type: 'steps',
      items: [
        {
          title: 'Collect local content before launch',
          text: 'Content coaching now starts before launch, so local footage is in hand when ads go live: the owner on camera at a landmark the neighborhood names, with the property’s permission. For Vintage Park, Ralf Ocampo, our Head of Brand and Creative, picked a spot locals would recognize and sent the owners one-liners to film there. They filmed May 9 and 10; ads went live May 12.',
        },
        {
          title: 'Front-load spend against a lead count',
          text: 'Spend is heaviest in month one, and pace is checked against 700 leads by Founders 50, counted from that studio’s own launch date.',
        },
        {
          title: 'Sprint while leads are cheap',
          text: 'Under $10 cost per lead, we double the daily budget; back at $10 to $12, we bring it down. Vintage Park went from $100 a day to $200 on day four and $300 on day seven. Across 29 sprints we detected at 28 Pilates Addiction, iFlex and Ultimate Longevity Center locations (Mar 21 to Oct 20, 2026), leads per day rose 65.5% for a 14.8% higher pooled cost per lead.',
        },
        {
          title: 'Refresh before the curve turns, then switch to the date',
          text: 'Plan the first creative refresh before day 15. About a week before Founders Day, the owner films 10 to 15 short hooks announcing the date. Vintage Park’s owners sent 13 clips on June 17; four finished Founders 50 ads were delivered June 18 and live by about June 19. At Pacifica, after a refresh on July 6 and drop-date hooks on July 8, cost per lead went from $10.15 (June 26 to July 5) to $4.89 (July 6 to 9).',
        },
        {
          title: 'Work the whole list on Founders Day',
          text: 'Vintage Park’s owners texted their whole list, about 2,000 people by their count, and had hired a studio manager with sales experience before the sale. Just past lunch, Sequel counted 120 memberships.',
        },
        {
          title: 'Start a new campaign when Founders 50 ends',
          text: 'As soon as the Founders 50 promotion ends, a dedicated campaign for the run to soft opening goes live, instead of a refresh. Each phase is reported on its own.',
        },
      ],
    },
    {
      type: 'creative',
      title: 'Local hooks from two 100+ studios',
      caption:
        'Delivered ads from Flemington (Founders Day Aug 21, 2026) and Christenbury (Founders Day Oct 2, 2026). Each stat is that ad’s Meta result before its studio’s Founders Day.',
      items: [
        {
          kind: 'video',
          src: '/case-studies/pilates-addiction-founders-day-playbook/ad-1.mp4',
          poster: '/case-studies/pilates-addiction-founders-day-playbook/ad-1.jpg',
          alt: 'A Pilates Addiction team member at the Flemington Circle Shopping Center sign saying Hey Flemington, New Jersey, followed by studio class footage',
          label: 'Hey Flemington hook at the shopping center sign',
          stat: '149 leads at $9.80',
          note: 'Meta, Jul 22 to Aug 20, 2026 (Flemington VIP period)',
        },
        {
          kind: 'video',
          src: '/case-studies/pilates-addiction-founders-day-playbook/ad-3.mp4',
          poster: '/case-studies/pilates-addiction-founders-day-playbook/ad-3.jpg',
          alt: 'A Pilates Addiction team member under a covered walkway saying Concord, Christenbury founding rates are limited, followed by class footage',
          label: 'Founding rates are limited hook',
          stat: '116 leads at $9.79',
          note: 'Meta, Sep 11 to Oct 1, 2026 (Christenbury VIP period)',
        },
      ],
    },
    {
      type: 'quote',
      text: 'Thanks for all the support cranking the leads in and adjusting the spend to maximize our windows.',
      name: 'Joni Cook',
      role: 'Owner, Pilates Addiction Middletown',
    },
    { type: 'h2', kicker: 'Proof Points', text: 'The 100+ club' },
    {
      type: 'p',
      text: 'Every studio in the 100+ club went in with at least 633 leads, and four had 893 or more. Four of the seven spent between $5,352.85 and $5,647.09 before the sale. Lititz is the useful outlier: its $12.66 CPL was the club’s highest, but a 64-day VIP period still built 728 leads.',
    },
    {
      type: 'table',
      columns: [
        'Studio',
        'Founders Day',
        'Day-one memberships',
        'Days of VIP',
        'Ad spend before Founders Day',
        'Meta leads going in',
        'Cost per lead',
      ],
      rows: [
        ['Vintage Park, TX', 'Jun 26, 2026', '170 (171 by end of weekend)', '45', '$10,788.59', '2,023', '$5.33'],
        ['Pacifica, CA', 'Jul 10, 2026', '165', '29', '$5,352.85', '1,076', '$4.97'],
        ['Christenbury, NC', 'Oct 2, 2026', '128', '49', '$8,154.72', '1,238', '$6.59'],
        ['Brighton, MI', 'Jul 17, 2026', '117', '31', '$5,430.12', '893', '$6.08'],
        ['Middletown, KY', 'May 8, 2026', '109', '32', '$5,407.53', '759', '$7.12'],
        ['Lititz, PA', 'Sep 22, 2026', '109', '64', '$9,215.66', '728', '$12.66'],
        ['Flemington, NJ', 'Aug 21, 2026', '105', '32', '$5,647.09', '633', '$8.92'],
        ['Median, 100+ studios', '', '', '', '', '893', '$6.59'],
        ['Median, the other seven', '', '', '', '', '575', '$10.81'],
      ],
      caption:
        'Day-one memberships are as reported by each studio’s owner to Fifth Element or recorded in our client success notes, not from the ad platform. Leads, cost per lead and ad spend are Meta results from first spend to the day before Founders Day, hiring campaigns excluded.',
    },
    {
      type: 'creative',
      title: 'The flyover ads behind two of the 100+ lists',
      caption:
        'The Christenbury flyover brought in more than half of the studio’s 1,238 leads going into Founders Day. Stills are the ads’ Meta thumbnails.',
      items: [
        {
          kind: 'image',
          src: '/case-studies/pilates-addiction-founders-day-playbook/ad-4.jpg',
          alt: 'Aerial town view from the Pilates Addiction Christenbury flyover video ad',
          label: 'Christenbury flyover ad (still)',
          stat: '640 leads at $5.11',
          note: 'Meta, Aug 14 to Oct 1, 2026 (Christenbury VIP period)',
        },
        {
          kind: 'image',
          src: '/case-studies/pilates-addiction-founders-day-playbook/ad-5.jpg',
          alt: 'Aerial town view with the words Coming Soon, from the Pilates Addiction Flemington flyover video ad',
          label: 'Flemington flyover ad, launch week (still)',
          stat: '92 leads at $2.82',
          note: 'Meta, Jul 20 to 28, 2026 (first nine days of Flemington’s VIP period)',
        },
      ],
    },
    { type: 'h2', kicker: 'Why It Worked', text: 'The list is the product' },
    {
      type: 'p',
      text: 'A Founders Day converts a list, and the ratio barely moves. So the presale’s job is a lead count by the sale date, bought at a price that holds and as early as the market allows. When the sale ends, the campaign needs a new job.',
    },
    {
      type: 'callout',
      title: 'The lesson',
      text: 'Founders Day sells the list you bring to it. Judge a presale by its lead count going into the sale, not by its cost per lead in any one week.',
    },
    { type: 'h2', kicker: 'What This Means for Your Brand', text: 'How to apply it' },
    {
      type: 'p',
      text: 'For a franchisor, measure each launch against a lead count by its sale date, counted from its own launch, next to its cost per lead. A studio behind pace in week three still has time; one found the week before Founders Day does not. And decide the post-sale campaign before the sale.',
    },
    {
      type: 'p',
      text: 'Ultimate Longevity Center shows the same curve: across the 10 centers with first spend June 18 to August 3, 2026, cost per lead rose from $5.87 in days 1 to 14 to $14.58 in days 57 to 112. In both brands, **the first weeks are the window**.',
    },
  ],
  sources:
    'Meta Ads data via Fifth Element reporting (dashboards table, hiring campaigns excluded): each studio’s first spend to the day before its Founders Day, Mar 18 to Oct 1, 2026; launch curve for 35 Pilates Addiction launches with first spend Mar 28 to Aug 20, 2026; launch-to-Founders-50 totals for first spend Mar 18 to Aug 20, 2026; Founders 50 comparisons for 17 Pilates Addiction studios on the old single-campaign structure with Founders 50 dates Apr 24 to Jul 17, 2026 (14 days before vs days 1 to 14 and 15 to 28 after); data through Oct 20, 2026. Ultimate Longevity Center launch curve from the same table, 10 centers with first spend Jun 18 to Aug 3, 2026. Budget-sprint and week-pair stats from the same table (location accounts only; sprints in Pilates Addiction, iFlex and Ultimate Longevity Center), Mar 21 to Oct 20, 2026. Launch ranking among 46 Pilates Addiction launches with a full first 30 days and first spend Apr 3 to Sep 22, 2026. Day-one membership counts reported by studio owners to Fifth Element or recorded in Fifth Element client success notes; first-day count at lunch per Sequel Brands corporate. Brand-wide Founders Day average and Sequel’s first-month guidance for studios as presented by Sequel Brands on its agency call, Aug 19, 2026. Weekly Pilates Addiction roll-up, Jul 24, 2026, and Sequel correspondence, Jul 27 to Jul 29, 2026.',
  featured: 3,
  order: 3,
  seoKeywords: [
    'Pilates presale marketing',
    'founding membership sale',
    'franchise presale Meta ads',
    'Pilates Addiction Founders Day',
    'fitness franchise launch marketing',
  ],
};
