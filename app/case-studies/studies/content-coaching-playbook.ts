import type { CaseStudy } from '../types';

export const study: CaseStudy = {
  slug: 'content-coaching-playbook',
  kind: 'playbook',
  brand: 'network',
  brandName: 'Fifth Element',
  vertical: 'Franchise Marketing',
  title:
    'Why we coach owners instead of hiring film crews: local footage out-clicked stock footage in [[51 of 75 same-studio matchups]]',
  dek: 'Polished brand footage could run in any town, so we send franchise owners a one to two page coaching document every 7 to 14 days, built to take 10 to 15 minutes to film on a phone, and our editors do the rest. At Pilates Addiction that local footage out-clicked stock footage in 51 of 75 same-studio matchups, but it did not lower cost per lead on its own, which is why we pair it with the brand\'s footage and an offer.',
  cardTitle: 'Content coaching: why we coach owners to film local ads',
  summary:
    'Ads built on local footage, classified by ad name, out-clicked stock ads in 51 of 75 same-studio, same-month Pilates Addiction matchups, Jul 13 to Oct 20, 2026. How we coach owners to film it.',
  published: '2026-10-22',
  readTime: '7 min',
  cover: {
    src: '/case-studies/content-coaching-playbook/cover.jpg',
    alt: 'Tristynn McGowan, Fifth Element founder, recording the five shots filming script for franchisees, Mar 18, 2026',
    position: '50% 40%',
  },
  heroStats: [
    {
      value: '51 of 75',
      label: 'Same-studio matchups where local ads won the click',
      sub: 'Same studio, same month, both ad types spending at least $150, across 33 studios, classified by ad name. Median link CTR 1.19% vs 1.01%. Pilates Addiction, Jul 13 to Oct 20, 2026',
    },
    {
      value: '$11.49',
      label: 'Cost per lead on aerial flyover ads',
      sub: 'Lowest of any ad class: 3,671 leads, Pilates Addiction, Jul 13 to Oct 20, 2026. Stock and brand footage: $16.04',
    },
    {
      value: '2,733',
      label: 'Raw files uploaded from 78 locations',
      sub: 'Logged by our upload tracker from its start on Sep 10 to Oct 22, 2026, across six brands. An undercount: IMAGE alerts were down Sep 17 to Oct 13',
    },
    {
      value: '10 to 15 min',
      label: 'Filming time each coaching document is built for',
      sub: 'One to two pages, every 7 to 14 days, filmed on a phone',
    },
  ],
  tags: ['Content Coaching', 'Local Creative', 'Meta Ads'],
  timeline: [
    {
      when: 'Summer 2025',
      title: 'One-on-one coaching begins',
      text: 'Coaching decks go out every one to two weeks, but only to locations on our higher-priced plans.',
    },
    {
      when: 'Feb 2026',
      title: 'Local takes over at Pilates Addiction',
      text: 'Pilates Addiction Alamo Heights in San Antonio adds short local hooks filmed by its own team. Our Feb 10 status update counts 32 of the studio\'s 37 leads that day from the new local videos, a few hours after they went live. By Feb 23 our creative team\'s read across the brand is "localized is king."',
    },
    {
      when: 'Mar 2026',
      title: 'Coaching moves into the base package',
      text: 'We start covering coaching in the base package for new Pilates Addiction studios. On Mar 18 Tristynn records the "five shots" filming script for franchisees.',
    },
    {
      when: 'May 8 to 19, 2026',
      title: 'Vintage Park films before launch',
      text: 'First coaching document on May 8, owner footage on May 9 and 10, ads live on May 12 on the brand\'s flyover ads. The first localized ads are previewed on May 19.',
    },
    {
      when: 'Jul to Oct 2026',
      title: 'Capture moves before launch',
      text: 'By Jul 15, new Pilates Addiction locations are asked to film before their ads go live. An upload tracker (Sep 10), a coaching follow-up report and a proposed 50/25/25 creative mix follow.',
    },
  ],
  stack: [
    'Content Coaching',
    'Meta Ads',
    'In-house Editing',
    'Local Creative',
    'Content Upload Tracker',
    'Four Metrics Diagnostic',
    'Fifth Element Reporting',
  ],
  body: [
    { type: 'h2', kicker: 'The Problem', text: 'Most franchise ads could run in any town' },
    {
      type: 'p',
      text: 'The usual agency answer to franchise creative is production. Pull the franchisor\'s brand library, maybe book a videographer for a day, and run the polished result in every market. The ads look good. They also look like they could be from anywhere, and a new franchise location is, by definition, a business nobody in town recognizes yet.',
    },
    {
      type: 'p',
      text: 'We made a different bet. The footage that makes an ad local is filmed by the owner or a staff member, on a phone, off a short coaching document from us. Our editors do everything else. **We coach the person who already lives there instead of hiring a crew that does not.**',
    },
    {
      type: 'quote',
      text: 'The fact that you guys are providing coaching is, I would say, something I haven\'t seen from other agencies.',
      name: 'Gabi Khowploum',
      role: 'Marketing Director, iFlex Stretch Studios, on her first call with Fifth Element, Apr 30, 2026',
    },

    { type: 'h2', kicker: 'The Evidence', text: 'What the ad data shows' },
    {
      type: 'p',
      text: 'We sorted every Pilates Addiction ad that spent from Jul 13 to Oct 20, 2026 by its name: local footage, stock or brand footage, and aerial flyovers. Then we compared like with like: the same studio in the same month, wherever both local and stock ads had spent at least $150 and drawn at least one lead. That gave us 75 matchups across 33 studios. All of it is Pilates Addiction, our largest brand (59 locations spent through us in the 30 days to Oct 20, 2026); the coaching runs at every brand.',
    },
    {
      type: 'stats',
      items: [
        { value: '51 of 75', label: 'Local ads had the higher link click-through rate', sub: 'Median 1.19% vs 1.01%' },
        { value: '34 of 75', label: 'Local ads had the lower cost per lead', sub: 'Stock won the other 41. Median $18.71 local vs $18.47 stock' },
        { value: '10.6% vs 14.8%', label: 'Median lead submission rate, local vs stock', sub: 'Share of clickers who filled out the form' },
      ],
    },
    {
      type: 'p',
      text: '**Local footage wins the click, and the brand\'s footage converts the click better**, 14.8% of clickers against 10.6%, so cost per lead comes out about even. Local stops the scroll and fixes ad fatigue; on its own it does not lower cost per lead (CPL) across a network, and we do not promise owners it will. Pooled by ad class, with stricter name rules:',
    },
    {
      type: 'table',
      columns: ['Ad class', 'Spend', 'Leads', 'Cost per lead', 'Link CTR'],
      rows: [
        ['Aerial flyover', '$42,194', '3,671', '$11.49', '1.50%'],
        ['All other ads', '$324,628', '20,705', '$15.68', '1.26%'],
        ['Stock and brand footage', '$112,299', '7,001', '$16.04', '1.06%'],
        ['Named "UGC" (user-generated content)', '$28,904', '1,631', '$17.72', '1.22%'],
      ],
      caption:
        'Pilates Addiction ads, Jul 13 to Oct 20, 2026 (data pulled Oct 22, 2026), classified by ad name with stricter rules than the same-month comparison above: ads named for local shots (shop here, sign, event) sit in "all other" unless named UGC. Leads are Meta-attributed leads.',
    },
    {
      type: 'p',
      text: 'Two rows need a plain reading. Flyovers, the cheapest leads, are drone and aerial shots of the town that we or the brand usually source, not owner footage; in 37 same-studio, same-month pairs across 21 studios they beat stock ads on cost per lead 22 times. Ads named UGC, the class most likely to be pure owner footage, had the highest cost per lead. So owner footage does not win on its own. **The town earns the attention; the brand\'s footage and the offer close it.** That is why our edits open on a local hook and run into the brand\'s footage: "Almost all of our top creatives are local content in the hook," as Tristynn told Sequel Brands in April 2026.',
    },
    {
      type: 'p',
      text: 'In October 2026, when one account asked for more of the studio and the offer, Ralf Ocampo, our Head of Brand and Creative, proposed moving it from about 80% local footage to about 50% local content (staff and landmarks), 25% studio footage showing the class and 25% static offer ads. The data points the same way.',
    },

    { type: 'h2', kicker: 'What We Do Now', text: 'The coaching loop, step by step' },
    {
      type: 'p',
      text: 'Two decisions in 2026 shaped the method. Through fall 2025, one-on-one coaching came only on our higher-priced plans. In March 2026 we started covering it in the base package for new Pilates Addiction studios because, as Tristynn told a prospect that month, "it\'s so necessary, we don\'t want owners not getting it." There is now no cap on coaching, edits or revisions. And in July, after Vintage Park, we moved filming before launch.',
    },
    {
      type: 'steps',
      items: [
        {
          title: 'Coach before launch',
          text: 'New Pilates Addiction locations film before their ads go live, not a week or two after. Our Head of Brand and Creative joins the client\'s Slack channel at onboarding and the first coaching document goes out right away.',
        },
        {
          title: 'Send one to two pages every 7 to 14 days',
          text: 'Each document has a short filming checklist (vertical, eye level, audio matters most, look at the lens, keep rolling), 3 to 5 concepts with shot lists, and 10 to 15 numbered hooks. It covers only what to say, where to stand and how to send it in; editing, lighting, strategy and data are our job. Ralf judges hooks by completion rate, not just whether they stop the scroll. Weekly uploads are the goal, every other week the minimum. Guides change by stage: under construction, VIP list, founding sale, open studio.',
        },
        {
          title: 'Film the five shots',
          text: 'Slow pans of every corner. The middle of the room and what makes it different, like the front desk. The storefront, including walking in. The same owner or manager on camera with a hook, a middle and a call to action, so viewers learn the face. And local landmarks, which Tristynn calls "the magic one": freeway exits, town squares, the building everyone in town recognizes, plus aerials if the owner has a drone. Otherwise we source them.',
        },
        {
          title: 'Write hooks of 12 words or fewer',
          text: 'One breath, 3 to 4 seconds, in the presenter\'s own voice. Name the pain, never the audience. Call out a landmark or street rather than forcing the city name. About 7 days before a founding sale, the hooks switch to the drop date: "Founders 50 drops on [Date]. Get on the list today."',
        },
        {
          title: 'Upload raw, edit in-house',
          text: 'Owners drop 3 to 4 second clips into a shared folder, and a bot posts each upload to a tracker (2,733 raw files from 78 locations, Sep 10 to Oct 22, 2026). Editors cut about 20 clips into about 5 ads, and the owner approves them in Slack. Our service agreement commits to a 7-day turnaround. From Aug 31 to Oct 4, 2026, between 900 and 1,233 new Meta ads started spending each week across the network (ad objects, so one edit in several ad sets counts more than once).',
        },
        {
          title: 'Close the loop',
          text: 'Within 72 hours we tell the owner which two ads are winning. When cost per lead rises, we read it down a ladder: cost per thousand impressions (CPM), then link click-through rate, then the share of clickers who become leads. High CPM on a big enough audience means the creative is not landing, so the next document asks for new local footage. Our status updates carry a creative action line for the creative team.',
        },
      ],
    },
    {
      type: 'quote',
      text: 'The best way to localize your studio is not show your studio at all. We have to remember everyone in a five to 20 mile radius recognizes something. And if you\'re a brand new franchise in town, they\'re not going to recognize you.',
      name: 'Tristynn McGowan',
      role: 'Founder & CEO, Fifth Element, in the "five shots" script for franchisees, Mar 18, 2026',
    },
    {
      type: 'creative',
      title: 'The five shots script and the filming guide owners work from',
      caption:
        'A 22-second excerpt of Tristynn\'s Mar 18, 2026 "five shots" video for franchisees, cropped to vertical, and the first page of our Pilates Addiction filming guide.',
      items: [
        {
          kind: 'video',
          src: '/case-studies/content-coaching-playbook/ad-1.mp4',
          poster: '/case-studies/content-coaching-playbook/ad-1.jpg',
          alt: 'Tristynn McGowan on camera in a Fifth Element cap, explaining that owners only need a hook, a middle and a call to action of one or two sentences each',
          label: 'The "five shots" video: hook, middle, call to action',
          note: 'Mar 18, 2026, Tristynn\'s filming script for franchisees',
        },
        {
          kind: 'document',
          src: '/case-studies/content-coaching-playbook/doc-1.jpg',
          alt: 'Page 1 of the Fifth Element filming guide: film vertically at eye level, audio is the most important element, and do not stop recording after a mistake',
          label: 'Filming coaching guide, page 1',
          note: 'Technical checklist and performance tips from our March 2026 Pilates Addiction filming guide',
        },
      ],
    },

    { type: 'h2', kicker: 'Proof Points', text: 'Where coached footage moved the numbers' },
    { type: 'h3', text: 'Pilates Addiction Vintage Park: filmed before it launched' },
    {
      type: 'p',
      text: 'Vintage Park, in the Houston area, got its first coaching document on May 8, 2026, four days before its ads went live; the owners filmed on their phones on May 9 and 10. The campaign opened on the brand\'s flyover ads of the area, and Ralf previewed "the next wave of localized ad creatives" on May 19. For the Founders 50 push his Jun 16 document asked for 10 to 15 drop-date hooks; the next day the owners uploaded 13 video files, and he wrote back: "I love the clear audio and your print out of the coaching."',
    },
    {
      type: 'p',
      text: 'Of 46 Pilates Addiction launches since late March 2026, Vintage Park ranked first on leads and on cost per lead in its first 30 days: 1,553 leads at $4.80, from May 12. The owners reported 170 memberships on Founders Day, Jun 26. It was also the biggest spender, and we ran budget sprints into it. Sequel Brands\' Chief Growth Officer, Jeff Miller, called it a "combination of local content and a high budget." The content argument is narrower: cost per lead normally rises with spend, yet Vintage Park spent the most of the 46 and had the lowest. **After Vintage Park, we started asking every new Pilates Addiction location to film before its ads go live.**',
    },
    { type: 'h3', text: 'Three studios, before and after new local footage' },
    {
      type: 'p',
      text: 'Each row compares a 14-day window before a content change with a 14-day window after it, using the dates in our status updates. These are cases our team flagged, not a random sample, and something else changed in two of the three (last column).',
    },
    {
      type: 'table',
      columns: ['Studio', 'Content change', 'Before', 'After', 'What else changed'],
      rows: [
        ['Pilates Addiction South Austin, TX', 'Studio team\'s local footage moved into its own ad sets, Jun 30', '113 leads at $14.32 (Jun 16 to 29)', '250 leads at $6.67 (Jun 30 to Jul 13)', 'Audience widened by about 60,000 the same day; three neighborhood territories added by Jul 9. The before window is the account\'s first 14 days. Spend $1,618.44 vs $1,667.90'],
        ['Pilates Addiction Ann Arbor, MI', 'New studio uploads Jul 29 and Aug 2 to 3, ads refreshed', '44 leads at $32.19 (Jul 21 to Aug 3)', '103 leads at $13.80 (Aug 5 to 18)', 'Little else. Spend $1,416.37 vs $1,421.39'],
        ['Pilates Addiction Alamo Heights, TX', 'New clips from the studio team, about Jul 28', '68 leads at $26.64 (Jul 14 to 27)', '98 leads at $18.48 (Jul 28 to Aug 10)', 'Official grand opening weekend (scheduled Aug 1) falls in the after window. Spend $1,811.79 vs $1,810.85'],
      ],
      caption: 'Meta delivery data, 14-day windows in 2026. Cost per lead shown after the lead count. Leads are Meta-attributed leads.',
    },
    {
      type: 'p',
      text: 'At South Austin older ads were soaking up the budget, and across our Pilates Addiction matchups Meta gave local ads a median 38% of spend. On Jun 30 we moved the new footage into its own ad sets so Meta would fund it. **One good shoot is not a strategy, which is why the cadence is every 7 to 14 days.**',
    },
    {
      type: 'creative',
      title: 'South Austin: a raw clip from the studio team and two finished ads',
      caption:
        'Results are Meta ad-level data, which for this account starts on Jul 13, 2026, the last day of the table\'s after window, so they describe the weeks that followed, not the 14-day windows. The "Do you shop here?" ad was finished Jul 8, after the Jun 30 change. The JuiceLand flyer ad drew the most leads of any single South Austin ad in that data and uses different footage from the raw clip.',
      items: [
        {
          kind: 'video',
          src: '/case-studies/content-coaching-playbook/ad-2.mp4',
          poster: '/case-studies/content-coaching-playbook/ad-2.jpg',
          alt: 'Raw phone clip: a South Austin team member in a Pilates Addiction shirt waves at the door of a neighboring juice bar and asks if viewers get their smoothie there',
          label: 'Raw clip from the studio team',
          note: 'Three seconds, filmed on a phone, uploaded Jun 30, 2026',
        },
        {
          kind: 'video',
          src: '/case-studies/content-coaching-playbook/ad-3.mp4',
          poster: '/case-studies/content-coaching-playbook/ad-3.jpg',
          alt: 'Finished ad: a South Austin team member outside a neighborhood grocery store asks "Do you shop here?", then the juice bar clip, then the team at the studio door, then studio class footage',
          label: '"Do you shop here?" ad built from the team\'s clips',
          stat: '43 leads at $13.26',
          note: 'Best of 4 ads with this video\'s name. Meta, Jul 13 to Aug 6, 2026',
        },
        {
          kind: 'video',
          src: '/case-studies/content-coaching-playbook/ad-4.mp4',
          poster: '/case-studies/content-coaching-playbook/ad-4.jpg',
          alt: 'Finished ad: a Pilates Addiction South Austin Coming Soon flyer held up in front of the shopping center sign with JuiceLand at the top, then studio class footage',
          label: 'Coming Soon flyer at the JuiceLand sign',
          stat: '107 leads at $10.42',
          note: 'Best of several ads with this video\'s name. Meta, Jul 13 to Aug 21, 2026',
        },
      ],
    },
    {
      type: 'quote',
      text: 'I do think you have done a great job in terms of educating our franchise partners on local content and getting that local content from them, and the proof is in the pudding with the ads as well.',
      name: 'Elise Budowanec',
      role: 'Director of Marketing, Ultimate Longevity Center, Sep 18, 2026',
    },
    {
      type: 'p',
      text: 'On the same call she singled out two owners who "aren\'t necessarily used to being face to camera," and said the guide we gave them "has been incredibly helpful."',
    },

    { type: 'h3', text: 'Where it goes wrong' },
    {
      type: 'list',
      items: [
        {
          title: 'Footage that never comes back.',
          text: 'When we review our weakest accounts, missing owner footage is the most common thread, so we built a follow-up report that flags any coaching document with no upload after it.',
        },
        {
          title: 'The wrong product on screen.',
          text: 'At one studio the best-performing local ads showed a room that read as a mat class. Leads expected a mat studio, not a reformer studio, so we pulled the ads. Local footage still has to show the right product.',
        },
        {
          title: 'Expecting local to do everything.',
          text: 'One June 2026 Pilates Addiction launch drew 580 leads at $1.86 each in its first 5 days on corporate creative alone, before the owner\'s footage went live. Local is one lever, used alongside budget and offer creative.',
        },
      ],
    },

    { type: 'h2', kicker: 'Why It Works', text: 'Budget buys reach. Footage buys recognition.' },
    {
      type: 'p',
      text: 'Tristynn\'s filming script ends on the point: "The serious ROI isn\'t in fancy production, it\'s in being relevant." A new location has no recognition in its own town, so its ads borrow it from places people already know. We can source aerials ourselves. We cannot source the owner standing at the shopping center everyone drives past, saying a line in their own voice every week or two. That only happens if the ask is small, specific and followed up.',
    },
    {
      type: 'callout',
      title: 'The lesson',
      text: 'Relevance beats production: film what the neighbors already recognize, every 7 to 14 days, and let the brand\'s footage and the offer close the click.',
    },
    { type: 'cta' },

    { type: 'h2', kicker: 'How to Apply It', text: 'Make filming part of opening the location' },
    {
      type: 'p',
      text: 'For a franchisor, the transferable part is when and how often. Put filming on the opening checklist next to signage and staffing, and ask for the five shots before the first ad runs. Spend on editing, not on a shoot day. Plan for each good batch to fade within weeks, and judge an agency by whether it keeps the footage coming.',
    },
  ],
  sources:
    'Meta delivery data from Fifth Element\'s reporting database: Pilates Addiction ad-level comparisons Jul 13 to Oct 20, 2026 (ads classified by name; data pulled Oct 22, 2026); 14-day before and after windows Jun 16 to Aug 18, 2026 as listed; Vintage Park\'s first 30 days from May 12, 2026 and its rank among 46 Pilates Addiction launches since late March 2026; a June 2026 Pilates Addiction launch\'s first 5 days; Pilates Addiction locations with spend in the 30 days to Oct 20, 2026. New-ad counts Aug 31 to Oct 4, 2026 and upload counts Sep 10 to Oct 22, 2026 from Fifth Element\'s ad data and content upload tracker. Alamo Heights Feb 10, 2026 lead split from Fifth Element\'s status update that day. Vintage Park membership count reported by the owners. Corporate quotes from calls with iFlex Stretch Studios (Apr 30, 2026), Sequel Brands (Jun 17, 2026) and Ultimate Longevity Center (Sep 18, 2026). Leads are Meta-attributed leads, not CRM records or members.',
  featured: 6,
  order: 1,
  seoKeywords: [
    'franchise content coaching',
    'local ad creative for franchises',
    'franchisee video content',
    'Meta ads for franchise locations',
    'franchise marketing agency',
    'Pilates studio Facebook ads',
  ],
};
