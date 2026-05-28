import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/seo';

const ROUTES: Array<{
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'];
}> = [
  { path: '/', priority: 1.0, changeFrequency: 'weekly' },
  { path: '/about', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/case-studies', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/contact', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/testimonials', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/blog', priority: 0.5, changeFrequency: 'weekly' },
  { path: '/privacy', priority: 0.3, changeFrequency: 'yearly' },

  // Services
  { path: '/services', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/paid-ads', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/creative-production', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/crm-automations', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/email-sms', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/reporting-and-analytics', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/franchise-growth-systems', priority: 0.9, changeFrequency: 'monthly' },

  // Verticals
  { path: '/fitness-franchises', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/salon-suites', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/wellness-franchises', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/beauty-aesthetics', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/home-services', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/lifestyle-entertainment', priority: 0.8, changeFrequency: 'monthly' },

  // Audience
  { path: '/for-franchisors', priority: 0.85, changeFrequency: 'monthly' },
  { path: '/for-franchisees', priority: 0.85, changeFrequency: 'monthly' },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return ROUTES.map(r => ({
    url: `${SITE.url}${r.path === '/' ? '' : r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
