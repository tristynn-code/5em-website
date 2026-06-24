/**
 * Open roles data - the single source of truth for the Careers page and each
 * job detail page (/careers/[slug]). Add a role = add an entry here; the
 * careers index, the dynamic route, the sitemap, and the JobPosting schema all
 * read from this list. Set `active: false` to take a role down without deleting
 * it (its page 404s and it drops off the index).
 */

export type WorkStyle = 'In-person' | 'Hybrid' | 'Remote';
export type EmploymentType = 'Full-time' | 'Part-time' | 'Contract' | 'Internship';

/** Maps our friendly employment label to the schema.org JobPosting enum. */
export const EMPLOYMENT_SCHEMA: Record<EmploymentType, string> = {
  'Full-time': 'FULL_TIME',
  'Part-time': 'PART_TIME',
  Contract: 'CONTRACTOR',
  Internship: 'INTERN',
};

export interface RoleSection {
  heading: string;
  /** Paragraphs of body copy. */
  body?: string[];
  /** Bullet list items. */
  bullets?: string[];
}

export interface Role {
  slug: string;
  title: string;
  /** Internal team / department, e.g. "Client Success". */
  team: string;
  workStyle: WorkStyle;
  /** Human location, e.g. "Temecula, CA" or "Remote (US)". */
  location: string;
  employmentType: EmploymentType;
  /** Display pay string, e.g. "$30 - $35 / hour". Optional. */
  payDisplay?: string;
  /** Structured pay for JobPosting schema (optional, drives Google rich result). */
  payMin?: number;
  payMax?: number;
  payUnit?: 'YEAR' | 'MONTH' | 'HOUR';
  /** ISO date the role was posted - used by JobPosting datePosted. */
  datePosted: string;
  /** Optional ISO close date. Drives JobPosting validThrough so Google retires
      the listing on time. If omitted, defaults to 60 days after datePosted. */
  closeDate?: string;
  /** One-line hook shown on the careers index card. */
  summary: string;
  /** Optional callout shown above the apply form (extra steps, e.g. a video). */
  applyNote?: string;
  /** Opening paragraphs at the top of the detail page body. */
  intro: string[];
  /** The full job description, as titled sections. */
  sections: RoleSection[];
  active: boolean;
}

export const roles: Role[] = [
  {
    slug: 'client-success-manager',
    title: 'Client Success Manager',
    team: 'Client Success',
    workStyle: 'Hybrid',
    location: 'Temecula, CA',
    employmentType: 'Full-time',
    payDisplay: '$30 - $35 / hour, depending on experience',
    payMin: 30,
    payMax: 35,
    payUnit: 'HOUR',
    datePosted: '2026-06-23',
    summary:
      'Be the face of 5th Element to a portfolio of 50 to 75 franchisee accounts. Own the relationship, lead your pod, and keep clients renewing.',
    applyNote:
      'Heads up: this role requires a 60 to 90 second video introduction. Record a quick selfie video (your phone is perfect) and paste the link in the form below. No video, no interview - it is that simple.',
    intro: [
      'The Client Success Manager is the face of 5th Element to our clients, and one of the most important roles in the company. You are not a support rep, and you are not an ad manager. You are the person our clients trust - you walk them through their numbers, field the hard questions, catch problems before they become churn, and make every client feel like they are our only client.',
      'This is a high-visibility, high-trust role. You will own a portfolio of 50 to 75 franchisee accounts, from single-unit owners to multi-unit operators running a dozen or more locations, from onboarding through every renewal. You run recurring performance calls, translate campaign data into plain English, advocate for clients inside our team, and keep retention high.',
      'You also lead your pod. Each pod pairs you with an ad manager who runs the media buying and a creative team member who produces the ads and content. You set the strategy, direct the work clearly, hold the timeline, and make sure what you promise the client actually gets executed. You are the bridge between the client and the people doing the work - the results and the relationship are yours to own. When a client is happy, it is largely because of you. When a client is frustrated, you are the one who turns it around.',
    ],
    sections: [
      {
        heading: 'About 5th Element Media',
        body: [
          '5th Element Media is a franchise-focused marketing agency. We build and run the Franchise Lead Engine, a full-service paid lead generation system for franchise brands and multi-unit operators. We manage paid ads on Meta, Google, and TikTok, organic social, content coaching and creation, and performance reporting across hundreds of franchise locations for recognizable national brands in fitness, wellness, beauty, and lifestyle.',
          'Our clients pay us every month because we deliver leads that turn into tours, bookings, members, and revenue. That means relationships are everything. We are a tight, high-output team that cares about results and treats clients like partners, not ticket numbers.',
        ],
      },
      {
        heading: 'Key responsibilities',
        bullets: [
          'Own the client relationship. Be the primary point of contact for the franchisees you manage, across a book of 50 to 75 accounts, and build real trust with the decision-makers behind each one.',
          'Lead your pod. Direct the work for your accounts to your ad manager and creative team member, set clear priorities, hold timelines, and make sure the strategy you promise actually gets executed.',
          'Run recurring performance calls. Walk clients through cost per lead, lead volume, tour and conversion trends, and exactly what the team is doing to improve them.',
          'Turn data into a story. Pull insights from our reporting tools, then explain what the numbers mean and what happens next. No jargon dumps - clients should leave every call knowing more than when they joined.',
          'Drive retention. Spot at-risk accounts early, address concerns before they escalate, and keep clients renewing month after month.',
          'Be the bridge. Translate client needs into clear direction for your pod, relay feedback in Asana and Slack, and follow up so nothing slips through the cracks.',
          'Lead onboarding. Take new clients through a smooth first 30 to 60 days so they understand exactly what we do and feel confident fast.',
          'Handle the hard conversations. Performance dips, expectation resets, scope questions - stay calm, honest, and focused on solutions.',
          'Keep the system tight. Document calls, log action items, and maintain accurate client records and pipeline notes in Asana and GoHighLevel.',
        ],
      },
      {
        heading: 'Who you are',
        bullets: [
          'You stay calm under pressure and you genuinely like people.',
          'You can read a performance report and explain it to a busy franchise owner in two sentences.',
          'You follow up before anyone has to ask.',
          'You take ownership of outcomes instead of pointing at other teams.',
          'You write and speak clearly, professionally, and like a real person.',
        ],
      },
      {
        heading: 'Soft skills',
        bullets: [
          'Emotional intelligence. You read the room, manage your own reactions, and navigate other people’s emotions well.',
          'Empathy. A client-first mindset and an understanding of the pressure franchise owners are under.',
          'Exceptional communication. Clear, concise, professional writing and speaking.',
          'Adaptability. Comfort with shifting priorities in a fast-paced environment.',
          'Relationship building. A proven ability to earn trust with clients and teammates.',
          'Problem-solving. You identify the real issue quickly and move toward a fix.',
          'Time management. You juggle 50 to 75 accounts without dropping a ball.',
          'Conflict resolution. You address tough client moments while protecting the relationship.',
        ],
      },
      {
        heading: 'Qualifications',
        bullets: [
          'Experience: 3+ years in client success, account management, or a client-facing role. Marketing, media, or agency experience strongly preferred.',
          'Project management: a strong sense of project management - you keep clients and work on pace, hold timelines, and make sure nothing falls behind.',
          'Comfort with data: you can interpret performance metrics and present them with confidence.',
          'Communication: excellent written and verbal communication is non-negotiable for this role.',
          'Relationship management: a track record of building and keeping long-term client relationships.',
          'Organization: highly organized, able to prioritize and manage a large portfolio of accounts at once.',
          'Technical fluency: comfortable with Google Workspace, Slack, Asana, and reporting tools. A background in Meta or Google Ads, media buying, GoHighLevel, or the franchise industry is a strong bonus.',
        ],
      },
      {
        heading: 'Work arrangement and home office',
        body: [
          'This is a hybrid role, in-person first: four days per week in our office in Temecula, CA, and one day per week working from home. You must live within commuting distance of Temecula and be able to be in our office four days a week. This is not a remote position, so please only apply if you can reliably be in-office.',
          'Because you will be on camera with clients regularly, your work-from-home day requires a professional setup. On every client call you represent 5th Element, so your audio, video, and background need to look and sound polished. In-office equipment is provided; your home setup is on you, and it matters.',
        ],
        bullets: [
          'Reliable high-speed internet with strong upload and download speeds for clean video calls',
          'A quiet, distraction-free, professional-looking space',
          'A high-quality camera and microphone, or a quality headset, for clear audio and video',
          'A computer powerful enough to run reporting tools, dashboards, and video calls at the same time without lag',
          'Dual monitors strongly preferred',
        ],
      },
      {
        heading: 'Why join 5th Element Media',
        bullets: [
          'Own one of the most important and most visible roles in a fast-growing franchise marketing agency.',
          'Work with real clients getting real results, not vanity metrics.',
          'Join a tight, collaborative, high-output team that values your ideas.',
          'Enjoy hybrid flexibility with a real in-office culture in the Temecula Valley.',
          'Grow with us as we scale, including a clear path toward senior client management and leadership roles.',
        ],
      },
      {
        heading: 'Compensation and benefits',
        bullets: [
          'Pay: $30 to $35 per hour depending on experience, with performance-based reviews and room for raises tied to your results and the company’s growth.',
          'Benefits: a full benefits package is in active development and will be shared during the interview process.',
          'Growth: a clear path to senior client management and leadership roles as we scale.',
          'Culture: a tight-knit, fast-paced, in-person team where your work has a direct, visible impact.',
        ],
      },
      {
        heading: 'How to apply',
        body: [
          'Apply with the form below. We need three things, and all three matter:',
        ],
        bullets: [
          'Your resume.',
          'A short cover note. Tell us anything you want us to know - your background, your experience. If you want a prompt: tell us about a time you kept a client from walking away and what you did to turn it around.',
          'A 60 to 90 second video introduction. This is the most important part. The role is client-facing and on camera every single week, so we want to see and hear you before we ever meet. Tell us who you are, why this role fits you, and how you think about taking care of clients. A selfie video or quick screen recording is perfect - record it on your phone if you want. We are not looking for studio production. We are looking for someone warm, clear, and confident on camera, because that is the job. Upload it to Google Drive or any link we can open, and paste the link in the form. No video, no interview.',
        ],
      },
    ],
    active: true,
  },
];

export function getOpenRoles(): Role[] {
  return roles.filter(r => r.active);
}

export function getRoleBySlug(slug: string): Role | undefined {
  return roles.find(r => r.slug === slug && r.active);
}
