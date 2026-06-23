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
  /** Human location, e.g. "Murrieta, CA" or "Remote (US)". */
  location: string;
  employmentType: EmploymentType;
  /** Display pay string, e.g. "$60,000 - $75,000 / year". Optional. */
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
  /** Opening paragraphs at the top of the detail page body. */
  intro: string[];
  /** The full job description, as titled sections. */
  sections: RoleSection[];
  active: boolean;
}

export const roles: Role[] = [
  {
    // PLACEHOLDER COPY - Tristynn is sending the real Client Success Manager
    // description; swap intro + sections when it lands. Structure is final.
    slug: 'client-success-manager',
    title: 'Client Success Manager',
    team: 'Client Success',
    workStyle: 'Hybrid',
    location: 'Murrieta, CA',
    employmentType: 'Full-time',
    payDisplay: '$60,000 - $75,000 / year + performance bonus',
    payMin: 60000,
    payMax: 75000,
    payUnit: 'YEAR',
    datePosted: '2026-06-23',
    summary:
      'Own the relationship with a portfolio of franchise brands - keep them informed, ahead of problems, and renewing because the results speak for themselves.',
    intro: [
      'We are looking for a Client Success Manager who treats our clients’ growth like their own. You will be the day-to-day partner for a portfolio of franchise brands - the person who keeps them confident, informed, and one step ahead at every stage of the engagement.',
      'This is a relationship and results role, not a support ticket queue. You will sit between our clients and our media, creative, and automation teams, translating goals into action and turning campaign performance into a story clients actually understand.',
    ],
    sections: [
      {
        heading: 'What you’ll do',
        bullets: [
          'Own the relationship with a portfolio of franchise clients from onboarding through renewal',
          'Run weekly and monthly check-ins, translating ad performance into clear, plain-English wins and next steps',
          'Coordinate with paid media, creative, and CRM teams to make sure every client’s deliverables ship on time',
          'Spot risks early - flat lead flow, slow speed-to-lead, quiet stakeholders - and get ahead of them before they become churn',
          'Build the kind of trust that turns one-location pilots into full-portfolio rollouts',
        ],
      },
      {
        heading: 'What we’re looking for',
        bullets: [
          '2+ years in account management, client success, or a similar client-facing role (agency or franchise experience is a big plus)',
          'A natural communicator who can lead a call, calm a worried owner, and make complex data feel simple',
          'Organized to a fault - you keep dozens of moving pieces straight without dropping any',
          'Comfortable reading marketing metrics: cost per lead, show rate, ROAS, speed-to-lead',
          'Genuinely energized by other people’s wins',
        ],
      },
      {
        heading: 'Nice to have',
        bullets: [
          'Experience with GoHighLevel, Meta Ads Manager, or similar tools',
          'A background in franchising, fitness, wellness, or local services',
          'You have run client-facing reporting or QBRs before',
        ],
      },
      {
        heading: 'What we offer',
        bullets: [
          'A front-row seat at a fast-growing franchise marketing agency serving 100+ locations',
          'Direct mentorship from the founder and senior strategists',
          'Performance bonuses tied to client retention and growth',
          'A team that actually likes working together',
        ],
      },
      {
        heading: 'About 5th Element Media',
        body: [
          '5th Element Media is the franchise marketing agency behind hundreds of franchise locations across the United States. We build predictable local lead flow with hyper-local ads, UGC-powered creative, and AI-driven insights - and we become a true extension of every client’s team.',
          'We are scaling fast, and the people we hire now will shape what this company becomes.',
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
