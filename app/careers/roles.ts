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
  /** Display pay string, e.g. "$29 - $35 / hour". Optional. */
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
  /** Optional callout shown above the apply form (extra steps, deadlines, etc). */
  applyNote?: string;
  /** Show the "Video introduction link" field on the apply form. Off unless a
      role actually asks for a video, so applicants are not prompted for one. */
  requestVideo?: boolean;
  /** Opening paragraphs at the top of the detail page body. */
  intro: string[];
  /** The full job description, as titled sections. */
  sections: RoleSection[];
  active: boolean;
}

export const roles: Role[] = [
  {
    slug: 'client-success-manager',
    title: 'Jr. Client Success Manager',
    team: 'Client Success',
    workStyle: 'Hybrid',
    location: 'Temecula, CA',
    employmentType: 'Full-time',
    payDisplay: '$29 - $35 / hour ($60,000 - $72,000 annually)',
    payMin: 29,
    payMax: 35,
    payUnit: 'HOUR',
    datePosted: '2026-08-26',
    summary:
      'Build trusted, long-term partnerships across a portfolio of 50+ franchisee accounts. Lead your pod, turn performance data into strategy, and drive measurable client growth.',
    intro: [
      'As a results-driven Jr. Client Success Manager at Fifth Element, you will build trusted, long-term partnerships with our clients by delivering proactive, strategic support that helps them achieve their marketing goals. You will leverage campaign performance data, lead quality insights, and strategic marketing recommendations to uncover growth opportunities, optimize campaign performance, and ensure every program delivers measurable business results.',
    ],
    sections: [
      {
        heading: 'About Fifth Element',
        body: [
          'Fifth Element is a franchise-focused marketing agency that helps franchise brands and multi-unit operators drive predictable growth through our proprietary Franchise Lead Engine. Fifth Element’s fully managed lead generation system is designed to deliver qualified leads and measurable business results.',
          'Our team manages every aspect of a client’s digital marketing strategy, including paid advertising across Meta, Google, and TikTok, organic social media management, content strategy and creative development, and performance reporting. We support hundreds of franchise locations across nationally recognized brands in the fitness, wellness, beauty, and lifestyle industries.',
          'Our clients partner with us because we consistently deliver more than leads. We generate qualified opportunities that convert into tours, appointments, memberships, and revenue.',
          'At Fifth Element, client relationships are at the center of everything we do. We are a collaborative, high-performing team that takes ownership, communicates proactively, and serves as a trusted extension of our clients’ businesses. We do not just manage campaigns, we help our clients grow.',
        ],
      },
      {
        heading: 'Key responsibilities',
        bullets: [
          'Own the client relationship. Serve as the primary point of contact for a portfolio of 50+ franchisee accounts, ranging from single-unit owners to multi-unit operators. Build trusted relationships with key decision-makers and serve as a strategic partner focused on their growth and success.',
          'Lead your pod. Direct the day-to-day execution for your accounts, working closely with your Ad Manager and Creative team member. Establish clear priorities, manage timelines, and ensure the strategy communicated to the client is executed effectively. Orchestration is a skill you enjoy.',
          'Lead performance conversations. Facilitate recurring client calls that are organized, insightful, and action-oriented. Clearly communicate performance across cost per lead, lead volume, tour activity, conversion trends, and other key metrics, while outlining the team’s strategy for continued improvement.',
          'Turn data into strategy. Leverage reporting tools and dashboards to identify meaningful insights and translate performance data into clear recommendations. Help clients understand not only what the numbers say, but what they mean and what actions we are taking next.',
          'Drive client retention. Proactively monitor account health, identify risks early, and address concerns before they escalate. Build the trust and demonstrate the value that keeps clients engaged and partnered with Fifth Element month after month.',
          'Be the bridge. Translate client goals, feedback, and requests into a clear direction for your pod. Maintain strong communication across Asana and Slack, follow through on commitments, and ensure nothing falls through the cracks.',
          'Lead client onboarding. Guide new clients through a seamless first 30 to 60 days, setting clear expectations, establishing strong communication, and ensuring they quickly understand the value of our programs.',
          'Handle challenging conversations. Navigate performance concerns, expectation resets, scope questions, and other difficult conversations with confidence and professionalism. Communicate openly, stay solution-oriented, and maintain trust even when conversations are challenging.',
          'Keep the system tight. Maintain accurate client records, document meeting notes and action items, manage follow-ups, and hold your pod accountable to timelines and commitments across Asana and GoHighLevel.',
          'Educate and add value. Stay current on franchise marketing trends, strategies, and best practices. Bring proactive insights and provide consultative recommendations.',
        ],
      },
      {
        heading: 'What we’re looking for',
        bullets: [
          'Digital marketing experience: 1 to 2 years of experience in digital marketing, advertising, or a related field.',
          'Client relationship management: proven ability to build, maintain, and grow long-term client relationships, with a focus on retention, renewals, and expansion.',
          'In-person, high-accountability environment: this is a hybrid role with an in-person-first approach, requiring one day remote and four days per week in our Temecula, CA office.',
          'Data and analytics: comfortable interpreting performance data, identifying trends, and confidently translating insights into clear, actionable recommendations.',
          'Communication: exceptional written and verbal communication skills, with the ability to communicate effectively with everyone from General Managers to multi-unit franchise owners.',
          'Project management: highly organized and proactive, able to manage multiple accounts, priorities, and timelines while ensuring nothing falls behind.',
          'Leadership and accountability: calm under pressure, takes ownership, and proactively addresses challenges to ensure client satisfaction and success.',
          'Marketing knowledge: strong conceptual understanding of digital marketing strategies; experience with Meta Ads, Google Ads, media buying, or franchise marketing is a strong plus.',
          'Technology and organization: comfortable with Google Workspace, Slack, Asana, reporting and presentation tools, and platforms such as GoHighLevel.',
        ],
      },
      {
        heading: 'Why join Fifth Element',
        body: [
          'At Fifth Element, you will have the opportunity to play a highly visible and impactful role within a young, energetic, and rapidly growing franchise marketing agency. You will work directly with clients, influence meaningful business outcomes, and help drive results that go far beyond vanity metrics, all while working alongside a collaborative team that values initiative, ideas, and accountability.',
          'With a hybrid, in-office-first culture in the Temecula Valley, this is an exciting time to join us before we substantially scale our teams and operations, giving you the opportunity to make an immediate impact, grow your expertise, take on greater responsibility, and grow with the company.',
        ],
      },
      {
        heading: 'Compensation and transparency',
        body: [
          'Compensation: $29 to $35 per hour ($60,000 to $72,000 annually) with clear opportunities to advance into senior client management and leadership roles as we scale. A comprehensive benefits package is currently in development and will be shared during the interview process.',
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
