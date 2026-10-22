import type { CaseStudy } from '../types';

export const study: CaseStudy = {
  slug: 'budget-sprints-playbook',
  kind: 'playbook',
  brand: 'network',
  brandName: 'Fifth Element',
  vertical: 'Franchise Marketing',
  title: 'Budget sprints: [[65.5% more leads a day]] for a 14.8% higher cost per lead',
  dek: 'We found 29 budget sprints at 28 franchise locations, each 4 or more days at 1.7 times the usual daily spend or more. Leads per day rose in all 29, by 65.5% pooled, for a 14.8% higher cost per lead. Here is when we start, when we stop, and what we tell the owner.',
  cardTitle: 'Budget sprints: 65.5% more leads a day for 14.8% more per lead',
  summary:
    'Across 29 budget sprints at 28 franchise locations (Mar to Oct 2026), 1.90x daily spend lifted leads per day 65.5% for a 14.8% higher cost per lead. When to start, stop, and tell the owner.',
  published: '2026-10-22',
  readTime: '7 min',
  heroStats: [
    {
      value: '+65.5%',
      label: 'Leads per day during a sprint',
      sub: 'Pooled, 29 sprints at 28 locations vs the 7 days before (8.44 to 13.97 a day), at 1.90x the daily spend. Mar 21 to Oct 20, 2026',
    },
    {
      value: '+14.8%',
      label: 'Cost per lead during a sprint',
      sub: 'Pooled $13.89 before vs $15.95 during. The median sprint paid 24% more.',
    },
    {
      value: '29 of 29',
      label: 'Sprints where leads per day rose',
      sub: 'Median sprint: 1.49x the leads per day. Smallest gain: under 0.1 lead a day',
    },
    {
      value: '80 of 95',
      label: 'Cheap weeks that got pricier at flat spend',
      sub: 'Weeks under $10 per lead followed by a flat-budget week, 40 locations, Mar 21 to Oct 20, 2026',
    },
  ],
  tags: ['Budget Sprints', 'Meta Ads', 'Presale'],
  timeline: [
    {
      when: 'May 15 to 18, 2026',
      title: 'Vintage Park steps to $300 a day',
      text: 'The daily budget goes from the $100 standard start to $200 on day four and $300 on day seven, each step approved by the owner off the numbers.',
    },
    {
      when: 'May 18 to 19, 2026',
      title: 'We change our own rule',
      text: 'A healthy Georgia studio had been held at baseline because our trigger was under $10. Studios at brand-average cost per lead now get budget recommendations too.',
    },
    {
      when: 'May 21, 2026',
      title: 'Sequel\'s Chief Growth Officer backs it',
      text: 'On the weekly sync, Sequel\'s Chief Growth Officer backs pushing budget whenever a campaign is working.',
    },
    {
      when: 'Jul 11 to 15, 2026',
      title: 'Brighton sprints into Founders Day',
      text: 'Leads per day go from 18.1 to 38.2 against the week before, and cost per lead from $10.49 to $7.01. The owner reports 117 members by July 21.',
    },
    {
      when: 'Jul 17, 2026',
      title: 'Pace becomes the trigger',
      text: 'We agree to manage every presale account to a weekly lead-pace target instead of a cost-per-lead threshold.',
    },
  ],
  stack: [
    'Meta Ads',
    'Budget Sprints',
    'Weekly Lead-Pace Targets',
    'Content Coaching',
    'Location Dashboards',
    'Owner Budget Approvals',
  ],
  body: [
    { type: 'h2', kicker: 'The Problem', text: 'A cheap week is a window, not a new normal' },
    {
      type: 'p',
      text: 'When a location\'s cost per lead drops, the easy call is to leave the budget alone. Tristynn McGowan, our Founder and CEO, tells owners why some agencies do: "It\'s a double-edged sword... the reason that your budget sprint ended in the first place is because your cost per lead started increasing." We take that trade on purpose, because holding still does not keep the cheap week.',
    },
    {
      type: 'p',
      text: 'Between March 21 and October 20, 2026, we found 95 weeks at 40 locations that came in under $10 cost per lead (CPL), on at least $350 and 10 leads, followed by a week at flat spend (within 10%). **In 80 of the 95, CPL rose the following week**, from $7.39 to $9.42 pooled, and in the median case weekly leads fell to 0.83 times the week before. Holding the budget did not protect the cheap leads.',
    },
    {
      type: 'p',
      text: 'Presale is where it matters most. Across 14 Pilates Addiction presales with Founders Days between April and October 2026, leads going into Founders Day, the day founding memberships go on sale, tracked the day-one memberships studios reported to us at r = 0.80. The seven that sold 100 or more went in with a median 893 leads at $6.59; the rest, 575 at $10.81. And new campaigns are cheapest: across 35 Pilates Addiction launches (first spend March 28 to August 20, 2026), pooled CPL was $7.17 in days 1 to 14 and $11.00 in days 15 to 28.',
    },
    { type: 'h2', kicker: 'The Evidence', text: '29 sprints, 28 locations, more leads every time' },
    {
      type: 'p',
      text: 'We counted a sprint as 4 or more days in a row at 1.7 times or more a location\'s daily spend from 8 to 14 days earlier (baseline at least $60 a day), against the prior 7 days, on our dashboards data with hiring campaigns taken out. From March 21 to October 20, 2026, that found 29 sprints at 28 locations, 174 days in all: 23 at Pilates Addiction, 5 at iFlex Stretch Studios, 1 at an Ultimate Longevity Center. They are spend jumps, whatever the cause; five began under $10 per lead.',
    },
    {
      type: 'stats',
      items: [
        { value: '1.86x', label: 'Median daily spend in a sprint', sub: 'vs the 7 days before' },
        { value: '1.49x', label: 'Median leads per day', sub: 'Rose in 29 of 29' },
        { value: '1.24x', label: 'Median cost per lead', sub: 'Pooled rise: 14.8%' },
        { value: '7 of 29', label: 'Sprints where cost per lead fell', sub: 'Cheaper leads at higher spend' },
      ],
    },
    {
      type: 'p',
      text: 'A skeptic should see the rest. The median sprint paid 24% more per lead, more than the pooled 14.8%, and the extra leads cost $19.09 each against $13.89 before. These are not controlled tests. Still, **leads per day rose in all 29**, including all six iFlex and ULC sprints.',
    },
    {
      type: 'p',
      text: 'Pilates Addiction Brighton shows it day by day. On July 8, 2026, nine days before its Founders Day, spend stepped up from $141.24 to $250.25 and leads went from 11 to 36. For July 11 to 15 against the 7 days before (three of them already at the higher budget), leads per day went from 18.1 to 38.2 and CPL fell from $10.49 to $7.01. Founders Day offer ads ran too, so budget was not the only change. The owner reported 117 members on July 21.',
    },
    {
      type: 'chart',
      title: 'Pilates Addiction Brighton: leads per day into Founders Day',
      subtitle: 'Meta leads per day, Jul 4 to 17, 2026. Founders Day was Jul 17.',
      suffix: ' leads',
      data: [
        { label: 'Jul 4', value: 5 },
        { label: 'Jul 5', value: 12 },
        { label: 'Jul 6', value: 7 },
        { label: 'Jul 7', value: 11 },
        { label: 'Jul 8', value: 36, highlight: true },
        { label: 'Jul 9', value: 27 },
        { label: 'Jul 10', value: 29 },
        { label: 'Jul 11', value: 40 },
        { label: 'Jul 12', value: 35 },
        { label: 'Jul 13', value: 35 },
        { label: 'Jul 14', value: 45 },
        { label: 'Jul 15', value: 36 },
        { label: 'Jul 16', value: 25 },
        { label: 'Jul 17', value: 26 },
      ],
      note: 'Daily spend: $141.24 on Jul 7, $250.25 on Jul 8, $234.17 to $322.73 through Jul 16.',
    },
    { type: 'h2', kicker: 'Two Ways to Get It Wrong', text: 'Under-spending, and sprinting off a launch spike' },
    { type: 'h3', text: 'Failure one: holding a healthy studio at baseline' },
    {
      type: 'p',
      text: 'On May 19, 2026, the owners of a Pilates Addiction studio in Georgia came to a review worried they were behind. They were not: since its April 23 launch the studio was at $10.29 per lead with a 15% lead submission rate, both brand average. It had sat near $100 a day because our sprint trigger was CPL under $10, and it never crossed the line. Tristynn McGowan\'s notes after the review put it on us:',
    },
    {
      type: 'quote',
      text: 'This is a Tristynn / Fifth Element systems issue, not a [studio] performance issue. Our team\'s been holding studios at baseline spend because we\'re targeting under-$10 CPL before triggering budget sprints.',
      name: 'Tristynn McGowan',
      role: 'Founder & CEO, Fifth Element. Account notes, May 19, 2026',
    },
    {
      type: 'p',
      text: 'With the owners\' approval, budget went from $3,000 to $5,000 a month, at $200 to $300 a day, that night. In the 14 days from May 20 against the 14 before, spend per day went from $103.00 to $233.10 and **leads went from 114 to 185, up 62%**, while CPL rose 39%, from $12.65 to $17.64. We also widened the targeting, so not all of the lift is budget. It counts in our sprint data, but it was a new baseline, not a burst: a studio behind pace at a fair price needs a bigger standing budget, judged on pace. We changed our rule that week.',
    },
    {
      type: 'p',
      text: 'Two days later, on our May 21 weekly sync with Sequel Brands, its Chief Growth Officer picked up our rule of pushing budget when a campaign is working:',
    },
    {
      type: 'quote',
      text: 'Do it... If there\'s an opportunity, take it... those opportunities don\'t last.',
      name: 'Jeff Miller',
      role: 'Chief Growth Officer, Sequel Brands',
    },
    {
      type: 'p',
      text: 'On that call, Tristynn described a studio where we eased off after a strong run and the owner asked if we were doing something wrong. His notes: "Not doing that again."',
    },
    { type: 'h3', text: 'Failure two: reading launch week as the new normal' },
    {
      type: 'p',
      text: 'A Pennsylvania studio launched on June 8, 2026 and pulled 124 leads in four days at $3.75 each. We recommended a sprint, and the owner approved it on June 12. For June 12 to 18, spend rose to $152.37 a day from $116.32, CPL came in at $11.85, and leads per day fell from 31.0 to 12.9. **The $3.75 was the new-campaign effect, not a level more budget could hold.**',
    },
    {
      type: 'p',
      text: 'Pilates Addiction Vintage Park sprinted in its first week too, and it worked, so the rule is not "never sprint at launch." The CPL we reported climbed between steps, from about $2.45 to $4.12, but stayed far under $10, so each step held: 982 leads at $3.32 in 14 days, and the owner reported 170 memberships on Founders Day, June 26. The Pennsylvania sprint landed at $11.85, where our rule says go back to baseline, and by June 19 to 25 spend was down to $109.81 a day.',
    },
    {
      type: 'p',
      text: 'Pilates Addiction Pacifica ran the full cycle. It launched June 11, 2026, went to $300 a day on day two, and drew 580 leads at $1.86 in five days. When CPL rose, we cut budget and refreshed the creative: $10.15 from June 26 to July 5, then $4.89 from July 6 to 9. It reached Founders Day on July 10 with 1,076 leads at $4.97; the owner reported 165 members and $31K in subscriptions.',
    },
    { type: 'h2', kicker: 'What We Do Now', text: 'The sprint rule, step by step' },
    {
      type: 'steps',
      items: [
        {
          title: 'Manage to pace',
          text: 'Each presale account has a weekly lead target: about 75 to 100 for Pilates Addiction, 50 to 75 for ULC, about 50 for iFlex. We check 3-day and 7-day averages every 24 to 72 hours.',
        },
        {
          title: 'Start on a confirmed signal',
          text: 'For a Pilates Addiction presale, the trigger is CPL under $10 on a 3-day rolling average; ULC uses the same line. We recommend doubling, $100 to $200 a day, for 24 hours. A brand-average studio behind pace gets a higher standing budget instead.',
        },
        {
          title: 'Step up, then re-read',
          text: 'Judge each step on the days after it, not on the launch-week price. Vintage Park\'s daily budget went from $100 to $300 in a week because each step held.',
        },
        {
          title: 'Feed it creative, and staff it',
          text: 'More spend wears ads out faster, so fresh hooks go in as budget rises. More leads need callers: Vintage Park dropped to $200 a day on June 4 until staffing was in place, then ran $300 from June 22 to Founders Day.',
        },
        {
          title: 'Stop on the signal',
          text: 'A sprint ends when CPL starts climbing. We taper as it rises; for Pilates Addiction, $10 to $12 means back to $100 a day, and a spike means baseline immediately. Our 29 sprints ran 4 to 11 days. Still short of pace? New creative, not more spend.',
        },
        {
          title: 'Pitch every step with the receipts',
          text: 'Each increase is a short message with numbers and an ask. Vintage Park: "165 leads at a ~$2.45 CPL," approved at $200; "117 leads since Saturday at a $4.12 CPL," approved at $300. Pacifica, day two: "210 leads generated at just a $0.68 CPL all-time." The owner: "Go as high as you need to if we are getting results." Our rule is to tell the owner before budget comes back down, and why.',
        },
      ],
    },
    { type: 'cta' },
    { type: 'h2', kicker: 'Why It Works', text: 'Cheap leads are perishable' },
    {
      type: 'p',
      text: 'A sprint does not buy cheaper leads. It buys more leads while the price is still low, because the low price is leaving either way. Tristynn\'s version for owners: "It\'s not luck, and it\'s not rocket science. It is simply doing the budget sprints, so getting as many leads as you can when things are good."',
    },
    {
      type: 'callout',
      title: 'The lesson',
      text: 'A cheap week is not a new normal. Spend into it a step at a time, stop when cost per lead starts to climb, and tell the owner both moves before you make them.',
    },
    { type: 'h2', kicker: 'What This Means for Your Brand', text: 'Put the sprint in the plan before launch' },
    {
      type: 'p',
      text: 'For a franchisor, what transfers is the agreement, not the math. Write the sprint into the launch plan with a trigger and an exit, and the agency can move the day the signal shows up, while the owner reads the higher cost per lead afterward as the plan working, not the ads breaking.',
    },
    {
      type: 'p',
      text: 'Ask any agency running your locations: how many are at or under target cost per lead but behind on lead pace right now, and what did you recommend? And what is your signal to end a sprint?',
    },
  ],
  sources:
    'Meta Ads data via Fifth Element client dashboards (Meta-attributed leads, hiring campaigns excluded, location accounts only), Mar 21 to Oct 20, 2026: sprint episodes, flat-spend week-pairs, the launch curve (first spend Mar 28 to Aug 20, 2026), the Georgia before/after (May 6 to Jun 2, 2026), the Brighton chart and Jul 11 to 15 sprint, Vintage Park and Pacifica launch windows, and the Pennsylvania launch (Jun 8 to 25, 2026). Vintage Park step-up figures and the Pacifica day-two figure as reported by Fifth Element to the owners in Slack (May 15 and 18, and Jun 12, 2026). Member and subscription counts reported by the studio owners to Fifth Element (Vintage Park, Slack Jun 29, 2026; Pacifica, Slack Jul 13, 2026, Pacific time; Brighton, call Jul 21, 2026). The Georgia studio\'s $10.29 launch-to-date cost per lead and 15% lead submission rate as recorded in Fifth Element account notes, May 19, 2026. Founders Day correlation and 100+ split from 14 Pilates Addiction presales with day-one counts reported by the studios (owner Slack and calls, and Fifth Element account notes).',
  order: 3,
  seoKeywords: [
    'budget sprint',
    'franchise Meta ads budget',
    'franchise cost per lead',
    'presale lead generation',
    'scaling Facebook ads for franchises',
    'franchise marketing agency',
  ],
};
