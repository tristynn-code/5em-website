/** Single source of truth for nav + footer link structure. */

export const services = [
  {
    label: 'Paid Ads',
    href: '/paid-ads',
    description: 'Hyper-local Meta and Google Ads per location.',
  },
  {
    label: 'Social Media & Creative',
    href: '/creative-production',
    description: 'UGC content production that outperforms stock.',
  },
  {
    label: 'CRM & Automations',
    href: '/crm-automations',
    description: 'Speed-to-lead workflows on GoHighLevel.',
  },
  {
    label: 'Email & SMS',
    href: '/email-sms',
    description: 'Automated follow-up that runs 24/7.',
  },
  {
    label: 'Reporting & Analytics',
    href: '/reporting-and-analytics',
    description: 'Real-time multi-location dashboards.',
  },
  {
    label: 'Franchise Growth Systems',
    href: '/franchise-growth-systems',
    description: 'The complete integrated lead engine.',
  },
] as const;

export const industries = [
  { label: 'Fitness Franchises', href: '/fitness-franchises' },
  { label: 'Salon Suites', href: '/salon-suites' },
  { label: 'Wellness & Recovery', href: '/wellness-franchises' },
  { label: 'Beauty & Aesthetics', href: '/beauty-aesthetics' },
  { label: 'Home Services', href: '/home-services' },
  { label: 'Lifestyle & Entertainment', href: '/lifestyle-entertainment' },
] as const;

export const audience = [
  { label: 'For Franchisors', href: '/for-franchisors' },
  { label: 'For Franchisees', href: '/for-franchisees' },
] as const;

export const navLinks = [
  { label: 'About', href: '/about' },
  { label: 'Case Studies', href: '/case-studies' },
  // Note: Services is rendered as a special dropdown in <Nav /> — not via this list
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export const servicesNav = {
  label: 'Services',
  href: '/services',
};

export const auditCTA = {
  href: 'https://go.5them.com/free-franchise-lead-engine-audit',
  label: 'Book Free Audit',
};

export const contact = {
  phone: '(951) 618-1304',
  phoneHref: 'tel:+19516181304',
};

export const footerLinks = {
  company: [
    { label: 'About', href: '/about' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Testimonials', href: '/testimonials' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
    { label: 'Privacy', href: '/privacy' },
  ],
  services: services.map(s => ({ label: s.label, href: s.href })),
  industries: [...industries],
  audience: [...audience],
  connect: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/company/5th-element-media' },
    { label: 'Instagram', href: 'https://www.instagram.com/5th.element.media' },
    { label: 'YouTube', href: 'https://www.youtube.com/@Tristynn.McGowan' },
  ],
};

export const brand = {
  name: '5th Element Media',
  shortName: 'Fifth Element',
  logo: 'https://cdn.prod.website-files.com/68f669a6d79edc75f34470f3/6921faef19de659f7d5b81f6_FifthElement%207.png',
  description: 'The franchise marketing agency behind 100s of franchise locations. Predictable lead flow, UGC creative, and AI-driven insights.',
};
