import type { CaseStudy } from '../types';

export const study: CaseStudy = {
  slug: 'image-studios-small-budget-playbook',
  kind: 'playbook',
  brand: 'image-studios',
  brandName: 'IMAGE Studios',
  vertical: 'Salon Suites',
  title:
    'Subtract before you add: three friction cuts at two IMAGE presale studios, and [[cost per lead fell by more than half each time]]',
  dek: 'On a small IMAGE budget every dollar has to work. When two studios were paying more than three times the brand\'s $39.55 median cost per lead, our first move was not a bigger budget: we cut ad sets, a form screen and a form question, then decided how much friction to put back when the new leads did not book tours.',
  cardTitle: 'Filling salon suites on a small budget: subtract before you add',
  summary:
    'At two IMAGE presale studios, fewer ad sets, no intro screen and one form question instead of two each cut cost per lead by more than half (Jul to Oct 2026). The rules we use to fill salon suites on small budgets, judged on tours.',
  published: '2026-10-22',
  readTime: '7 min',
  cover: {
    src: '/case-studies/image-studios-small-budget-playbook/cover.jpg',
    alt: 'An open salon suite at IMAGE Studios Myrtle Beach, SC, with a shampoo bowl, styling chair and round mirror by a window',
    position: '50% 50%',
  },
  heroStats: [
    {
      value: '5 to 13',
      label: 'Leads after consolidating ad sets, with no budget increase',
      sub: 'Florida presale studio, 14 days before vs from Jul 14, 2026. Cost per lead $118.97 to $56.99',
    },
    {
      value: '3 of 3',
      label: 'Changes followed by a cost per lead drop of more than half',
      sub: 'Fewer ad sets, no intro screen, one question instead of two. 14 days before vs after each, Jun 30 to Oct 7, 2026. Other changes ran alongside each one',
    },
    {
      value: '$22.80',
      label: 'Cost per lead in the Florida studio\'s best two weeks since March',
      sub: '31 leads on $706.73, Oct 5 to 18, 2026, after form, creative and offer changes, with the Meta budget held at $50 a day',
    },
    {
      value: '$39.55',
      label: 'Median IMAGE cost per lead',
      sub: 'Across 30 IMAGE locations with at least $500 spend and 30 days of data, Jul 23 to Oct 20, 2026. An IMAGE lead is a beauty pro asking about a suite',
    },
  ],
  tags: ['Salon Suites', 'Meta Ads', 'Instant Forms'],
  timeline: [
    {
      when: 'Jul 14, 2026',
      title: 'Consolidate',
      text: 'A Florida presale studio has gone almost a week without a lead. We fold the budget into fewer ad sets, with no budget increase, refresh the form headline and description, and add a phone-verification step for lead quality.',
    },
    {
      when: 'Aug 5, 2026',
      title: 'One question, not two',
      text: 'At a second presale studio, the Instant Form drops from two qualification questions to one multiple-choice question the owner picked.',
    },
    {
      when: 'Aug 27, 2026',
      title: 'Take the phone check out',
      text: 'Lead volume at the Florida studio has dropped. We remove the verification step from the form to cut friction.',
    },
    {
      when: 'Sep 24, 2026',
      title: 'Remove the intro screen',
      text: 'Back at the Florida studio, we cut the intro section from the Instant Form and reset the ads.',
    },
    {
      when: 'Oct 14, 2026',
      title: 'Put one line back',
      text: 'Few of the new Florida leads are booking appointments. We add one self-qualifying line to the form, aimed at lead quality, not the budget.',
    },
  ],
  stack: [
    'Meta Ads',
    'Meta Instant Forms',
    'Instagram DM Outreach',
    'Vacancy-Specific Creative',
    'Content Coaching',
    'Weekly Tour Reporting',
  ],
  body: [
    { type: 'h2', kicker: 'The Problem', text: 'Small budgets break the usual agency reflex' },
    {
      type: 'p',
      text: 'On July 14, 2026, a Florida IMAGE studio in presale had gone almost a week without a lead: the last one came in on July 7. That day we folded the budget into fewer ad sets instead of adding money. In the 14 days from that change the studio got 13 Meta leads instead of 5, and its cost per lead fell from $118.97 to $56.99.',
    },
    {
      type: 'quote',
      text: 'We did not increase the overall budget. We\'re simply concentrating the existing spend so Meta has more resources in each area and a better opportunity to deliver the ads consistently.',
      name: 'Drew Waelde',
      role: 'Head of Agency Operations, Fifth Element, to the owner of the Florida studio, Jul 14, 2026',
    },
    {
      type: 'p',
      text: 'An IMAGE Studios lead is not a consumer. It is a beauty professional asking about a suite of her own, and there are only so many of them within driving distance of any one building. Across the 30 IMAGE locations with at least $500 spend and 30 days of data from July 23 to October 20, 2026, the median cost per lead was **$39.55**. Our pacing target for an IMAGE account is about 5 leads a week.',
    },
    {
      type: 'p',
      text: 'Leads are not the scoreboard either. IMAGE corporate judges marketing on tours and occupancy, and its 2026 goal is to raise opening occupancy above 45%. At one IMAGE studio in March 2026, break-even was 19 occupied suites out of 24. A building fills one pro at a time, on budgets of $40 to $50 a day.',
    },
    {
      type: 'p',
      text: 'When an account like that goes quiet, the usual reflex is to add: more budget, more ad sets to "test" audiences, more form steps to "qualify" leads. We have made that last mistake ourselves: on July 14 we added a phone check to the Florida form for quality, and took it out on August 27. **Our rule is to subtract before we add, and to ask for budget last.**',
    },

    { type: 'h2', kicker: 'The Evidence', text: 'Three changes, one direction' },
    {
      type: 'p',
      text: 'Between July and October 2026 we made three friction changes at two IMAGE studios in presale. For each, we compared the 14 days before the change with the 14 days from the day it went live. Lead submission rate (LSR) is the share of people who click an ad and then submit the form.',
    },
    {
      type: 'table',
      columns: ['Change', 'Spend before / after', 'Leads', 'Cost per lead', 'Lead submission rate'],
      rows: [
        [
          'Florida studio: budget consolidated into fewer ad sets, form headline refreshed, phone verification added for lead quality (Jul 14)',
          '$594.87 / $740.93',
          '5 / 13',
          '$118.97 / $56.99',
          '2.48% / 6.40%',
        ],
        [
          'Second studio: two qualification questions cut to one (Aug 5)',
          '$784.10 / $942.57',
          '6 / 17',
          '$130.68 / $55.45',
          '3.19% / 5.54%',
        ],
        [
          'Florida studio: intro section removed from the Instant Form, ads reset (Sep 24)',
          '$693.90 / $718.56',
          '6 / 15',
          '$115.65 / $47.90',
          '2.16% / 4.82%',
        ],
      ],
      caption:
        'Meta leads, 14 days before vs 14 days from each change date, 2026. We did not raise the budget with the July change; delivered spend moves with how well the ads deliver.',
    },
    {
      type: 'p',
      text: 'These are small numbers, so we read them as patterns, not proof, and each has confounders. The July change also refreshed the form description, added a phone-verification step (removed August 27), and new creative went into the campaign on July 21. The second studio got a full creative relaunch with refreshed form creative on August 13, and its cost per thousand impressions fell from $66.37 to $38.96, which a form change cannot do; its Google ads were paused from August 1 to 27 and Meta spend rose 20%. The September change followed a dip: September 1 to 14 had 14 leads at $48.68, so the 15 after it mostly restored the early-September pace. Still, the direction was the same three times out of three: **the conversion rate rose and cost per lead fell by more than half.**',
    },
    { type: 'h3', text: 'Structure restored delivery. The price came down later, and not from one change.' },
    {
      type: 'p',
      text: 'The weekly view of the Florida studio adds what the 14-day windows miss. Consolidating ended a dry spell: the two weeks before produced 4 and 3 leads, and the nine weeks from July 20 to September 20 produced 51, above our pace target. But leads stayed expensive: $64.52 each over those nine weeks, with the phone check on the form until August 27 and weak ad sets replaced on September 1.',
    },
    {
      type: 'p',
      text: 'In the 11 days after the intro screen came out (September 24 to October 4), the studio had 10 leads at $54.71. On September 29 we planned a further round: a simpler form, a clearer offer, possibly a new banner. Then came its best two weeks since the first half of March: 31 leads on $706.73 from October 5 to 18, or **$22.80 per lead**. Link click-through rate rose from 1.41% to 3.04% between those periods, which a form change cannot cause, and the form changed again on October 14. Creative, offer and form share the credit.',
    },
    {
      type: 'chart',
      title: 'Leads per week at a Florida presale studio',
      subtitle: 'Meta leads by week, weeks starting Jun 29 to Oct 12, 2026. Weekly spend stayed between $291.37 and $411.94.',
      suffix: ' leads',
      data: [
        { label: 'Jun 29', value: 4 },
        { label: 'Jul 6', value: 3 },
        { label: 'Jul 13', value: 6 },
        { label: 'Jul 20', value: 4 },
        { label: 'Jul 27', value: 9 },
        { label: 'Aug 3', value: 5 },
        { label: 'Aug 10', value: 5 },
        { label: 'Aug 17', value: 3 },
        { label: 'Aug 24', value: 6 },
        { label: 'Aug 31', value: 10 },
        { label: 'Sep 7', value: 4 },
        { label: 'Sep 14', value: 5 },
        { label: 'Sep 21', value: 6 },
        { label: 'Sep 28', value: 4 },
        { label: 'Oct 5', value: 15, highlight: true },
        { label: 'Oct 12', value: 16, highlight: true },
      ],
      note: 'Ad sets consolidated and phone verification added Jul 14 (week of Jul 13). Phone verification removed Aug 27 (week of Aug 24). Instant Form intro removed and ads reset Sep 24 (week of Sep 21). Further form, offer and banner changes planned Sep 29. Self-qualifying line added Oct 14 (week of Oct 12).',
    },
    { type: 'h3', text: 'How much friction to put back' },
    {
      type: 'p',
      text: 'Cutting friction brings in more people, and not all of them are ready to tour. At the Florida studio, few of the leads after the simplified form booked appointments, and some did not realize they had submitted it. On October 14 we put one line back: a self-qualifier in which the lead confirms they are a beauty or wellness professional interested in the studio\'s suites. At the second studio we kept one question from the start, and on August 31 agreed with the owner to add an intent question. That is the dial, and the vacancy list sets it. With 11 suites open in February 2026, Myrtle Beach kept a deliberately simple form. Near the end of a lease-up we turn it the other way (rule 5). **Wide while many suites are open, narrow when a few are left, and tours decide which way to turn it.**',
    },

    { type: 'h2', kicker: 'What We Do Now', text: 'Six rules for filling suites on a small budget' },
    {
      type: 'steps',
      items: [
        {
          title: 'Start six months before opening',
          text: 'Bakersfield signed with us on January 11, 2024, about six months before it opened, and opened 92% leased, per IMAGE corporate\'s records. On a small budget, time is the cheapest resource an owner has.',
        },
        {
          title: 'Message local pros during construction',
          text: 'We message local salon pros on Instagram while the building is still going up, and keep it going at renewal time. At IMAGE Houston Memorial that meant 1,378 direct messages while the studio was under construction.',
        },
        {
          title: 'Concentrate the budget',
          text: 'One or two ad sets per campaign, one optimization goal. We wrote that rule after finding an iFlex presale campaign spending about $18 a day across 10 near-duplicate ad sets, at $34.50 per thousand impressions against $16 to $28 for comparable campaigns.',
        },
        {
          title: 'Keep the form short',
          text: 'No intro screen. One short multiple-choice qualification question, chosen with the owner. The second studio dropped "How long have you been a licensed beauty professional?" and kept "What services do you offer?" as checkboxes, which is faster to answer and still sorts pros by specialty. When tours lag, we add back one intent question before we touch the budget.',
        },
        {
          title: 'Write creative for the vacancy, not the building',
          text: 'When the last open suites are one type, the ads, the organic posts and the form narrow to that pro. When Rock Hill, SC was down to six suites in May 2025, all for hair, we moved to hair-pros-only ad creative and asked for the form to target hairstylists only.',
        },
        {
          title: 'Judge the work on tours',
          text: 'Owners get a weekly tours email, and a friction cut only counts if tour bookings hold up. For scale: at Bakersfield our launch tracker logged 266 leads and 79 scheduled tours, and 32.14% of tours held became leases (January 11 to October 14, 2024).',
        },
      ],
    },
    {
      type: 'creative',
      title: 'Two of the rules on real accounts',
      caption:
        'A reel of the hair suites we made for Rock Hill, SC in June 2025, after the studio was down to six suites, all for hair, and the weekly form owners fill in to report suites filled, tours scheduled and completed, applications and new leases. No ad stats for either.',
      items: [
        {
          kind: 'video',
          src: '/case-studies/image-studios-small-budget-playbook/ad-3.mp4',
          poster: '/case-studies/image-studios-small-budget-playbook/ad-3.jpg',
          alt: 'Vertical reel titled IMAGE Studios Rock Hill, walking down the suite hallway and through furnished hair suites',
          label: 'Hair suites reel, Rock Hill',
          note: 'Reel dated Jun 18, 2025',
        },
        {
          kind: 'page',
          src: '/case-studies/image-studios-small-budget-playbook/page-1.jpg',
          alt: 'IMAGE Studios weekly form asking for total suites, occupied suites, tours scheduled and completed, applications and new leases in the past 7 days',
          label: 'Weekly tour and occupancy form',
          note: 'Sent to owners every week',
        },
      ],
    },
    {
      type: 'quote',
      text: 'The best time that I found to start working with Fifth Element was about six months before I opened my studios. This allowed us an opportunity to become known in the local market.',
      name: 'Chris Chamberlin',
      role: 'Owner, IMAGE Studios Rock Hill, SC (video testimonial, April 2025)',
    },

    { type: 'h2', kicker: 'Proof Points', text: 'What the rules look like on named accounts' },
    {
      type: 'list',
      items: [
        {
          title: 'Myrtle Beach, SC: a short form while filling',
          text: 'On February 3, 2026, the studio had 22 of 33 suites filled and was spending $50 a day, and the owner set 28 as his main goal for spring. With 11 suites open, we agreed to keep the simpler, low-friction lead form to maximize volume, and the owner committed to weekly trips so tours could happen at any time. From March 2 to April 26, weekly Meta spend held between $169.87 and $175.09. From February 14 to April 28, the ads produced 69 Meta leads at $30.33 each on $2,092.88 (our reporting for this account starts February 14). On April 28 the owner reported 28 of 33, and on May 12 we agreed to move the account to our maintenance plan.',
        },
        {
          title: 'Bakersfield, CA: the last suite',
          text: 'We started about six months out and messaged local salon pros on Instagram through construction; the studio opened 92% leased in July 2024. On February 27, 2025, one suite was left, an esthetician suite. We pointed the awareness ads and organic posts at estheticians only and tested a boosted post. By March 11, 2025, the owner reported 100% occupancy, ahead of his May 2, 2025 grand opening. Owner Jarrett Jamieson credits the outreach: "They were able to really identify the salon pros that are in Bakersfield and create a great way of communicating through Instagram and through our social media posts."',
        },
        {
          title: 'Richardson West, TX: a late start, shared credit',
          text: 'The owner signed with us on November 18, 2025, about two months before a January 2026 opening, and reported 37 of 38 suites leased by August 4, 2026. Credit is shared: he had messaged local pros himself for four months and hosted a mixer that drew more than 25 pros. A late start can work when the owner has already done the construction-phase outreach.',
        },
      ],
    },
    {
      type: 'creative',
      title: 'Myrtle Beach reels from the weeks it was filling suites',
      caption:
        'Weekly reels we made for the studio in March 2026, while it still had suites to fill. No ad stats are attached to these reels.',
      items: [
        {
          kind: 'video',
          src: '/case-studies/image-studios-small-budget-playbook/ad-1.mp4',
          poster: '/case-studies/image-studios-small-budget-playbook/ad-1.jpg',
          alt: 'Vertical reel opening on the IMAGE Studios Myrtle Beach building, then walking through an empty suite captioned The views of your work day',
          label: 'Open suite walkthrough',
          note: 'Delivered Mar 10, 2026',
        },
        {
          kind: 'video',
          src: '/case-studies/image-studios-small-budget-playbook/ad-2.mp4',
          poster: '/case-studies/image-studios-small-budget-playbook/ad-2.jpg',
          alt: 'Vertical reel titled IMAGE Studios Myrtle Beach, walking through hair and esthetics suites',
          label: 'Suite tour reel',
          note: 'Delivered Mar 4, 2026',
        },
      ],
    },

    { type: 'cta' },

    { type: 'h2', kicker: 'Why It Works', text: 'On a small account, fix friction before you add budget' },
    {
      type: 'p',
      text: 'Our diagnostic order for an account that is off pace: ad fatigue, then the landing page and the Instant Form, and only then budget, which our pacing rules call the most common cause. The Florida studio never got to the last step: its Meta budget stayed at $50 a day from July to October. An ad set getting a few dollars a day never delivers enough to learn, and every extra form screen gives the few pros who tapped the ad another place to stop. Removing them costs the owner nothing. Adding budget costs the owner every day.',
    },
    {
      type: 'callout',
      title: 'The lesson',
      text: 'Before you add budget, take something away. Then let the open suites decide how much the form asks, and count the win in tours, not leads.',
    },

    { type: 'h2', kicker: 'How to Apply It', text: 'What this means for your brand' },
    {
      type: 'p',
      text: 'For a franchisor whose owners lease space or sell high-consideration memberships on modest budgets, the transferable part is the defaults. Write one or two ad sets and a one-question form into the launch template for every new location. Put local outreach on the construction calendar six months before opening. Ask your agency for a 14-day before and after on every structural change, and for the vacancy list and weekly tour count on every call.',
    },
    {
      type: 'p',
      text: 'At the Florida studio, the answer to an empty week was fewer ad sets, and the answer to leads that did not book was one more line on the form. Neither was a bigger budget.',
    },
  ],
  sources:
    'Meta Ads data via Fifth Element reporting: 14-day before/after windows Jun 30 to Oct 7, 2026; Florida studio weekly series and windows Jun 29 to Oct 18, 2026; IMAGE 90-day median of per-location Meta cost per lead for locations with at least $500 spend and 30 days of data, Jul 23 to Oct 20, 2026; Myrtle Beach Feb 14 to Apr 28, 2026; second-studio Google spend Jul 13 to Aug 30, 2026. Form, budget and lead-quality changes from Fifth Element Slack and call notes, Jul 14 to Oct 14, 2026, and Feb 3, 2026 (Myrtle Beach); vacancy-specific creative from call notes, Feb 27 to Mar 11, 2025 (Bakersfield) and May 27, 2025 (Rock Hill). Suite counts and occupancy reported by the owners to Fifth Element (Bakersfield 2025; Rock Hill 2025; Myrtle Beach and Richardson West 2026). Bakersfield opening occupancy from IMAGE corporate\'s opening-occupancy sheet (as of Sep 23, 2025); Bakersfield contract start, leads, tours and leases per tour from Fifth Element\'s launch tracker, Jan 11 to Oct 14, 2024. Houston Memorial direct-message count from Fifth Element\'s 2024 showcase. iFlex campaign-structure example (June 2026 diagnosis) from Fifth Element\'s presale campaign-structure playbook. IMAGE\'s 2026 opening-occupancy goal as shared by IMAGE corporate with Fifth Element. Owner quotes from video testimonials (Rock Hill, Apr 2025; Bakersfield, Mar 2025).',
  order: 5,
  seoKeywords: [
    'salon suite marketing',
    'IMAGE Studios leasing',
    'salon suite leads',
    'Meta Instant Form optimization',
    'small budget Facebook ads',
    'franchise presale marketing',
  ],
};
