import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/seo';
import { posts } from './blog/posts';
import { getOpenRoles } from './careers/roles';

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
  { path: '/blog', priority: 0.8, changeFrequency: 'weekly' },
  { path: '/careers', priority: 0.7, changeFrequency: 'weekly' },
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
  const staticEntries = ROUTES.map(r => ({
    url: `${SITE.url}${r.path === '/' ? '' : r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
  // Auto-include every blog post from app/blog/posts.ts so new posts hit the
  // sitemap the moment they ship - no manual update required.
  const blogEntries = posts.map(p => ({
    url: `${SITE.url}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));
  // Each open role gets its own indexable URL with JobPosting structured data -
  // exactly what Google wants in the sitemap for job indexing.
  const roleEntries = getOpenRoles().map(r => ({
    url: `${SITE.url}/careers/${r.slug}`,
    lastModified: new Date(r.datePosted),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));
  return [...staticEntries, ...blogEntries, ...roleEntries];
}
