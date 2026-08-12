/**
 * Single source of truth for all blog posts. Used by the blog index page,
 * each individual post page, and the "Keep Reading" related-posts rail.
 *
 * Posts are listed newest-first. Add new posts at the top.
 */
export interface Post {
  slug: string;
  title: string;
  category: string;
  date: string;          // ISO YYYY-MM-DD for sorting
  dateDisplay: string;   // "May 25, 2026" for rendering
  readTime: string;      // "6 min"
  excerpt: string;       // 1-2 sentence summary for cards + meta description
  cover: string;         // Hero image URL (Unsplash or production CDN)
  /** Optional Unsplash query attribution (for future replacement with real assets). */
  coverAlt: string;
}

export const posts: Post[] = [
  {
    slug: 'ultimate-longevity-center-partnership',
    title: "We're Helping Launch the First Ultimate Longevity Center in Boulder, Colorado",
    category: 'News',
    date: '2026-06-11',
    dateDisplay: 'June 11, 2026',
    readTime: '4 min',
    excerpt:
      '5th Element Media just signed on as the launch marketing partner for Ultimate Longevity Center. First location: Boulder, CO. Here is why we are all-in on longevity, and the exact playbook we are bringing from the rest of the Sequel Brands portfolio.',
    cover: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1600&q=80',
    coverAlt: 'Modern wellness and recovery treatment space',
  },
  {
    slug: 'franchise-marketing-metrics',
    title: 'The 5 Metrics Every Franchise Owner Should Check Every Week',
    category: 'Analytics',
    date: '2026-05-25',
    dateDisplay: 'May 25, 2026',
    readTime: '7 min',
    excerpt:
      'Most franchise owners check vanity metrics weekly and miss the ones that actually predict revenue. Here are the five that do, and how to read each one in under two minutes.',
    cover: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&q=80',
    coverAlt: 'Dashboard with charts and KPIs',
  },
  {
    slug: 'franchise-marketing-budget',
    title: 'Franchise Marketing Budgets: What 100+ Locations Actually Spend Per Month',
    category: 'Franchise Growth',
    date: '2026-05-18',
    dateDisplay: 'May 18, 2026',
    readTime: '8 min',
    excerpt:
      'The honest numbers from 100+ franchise locations across fitness, salon suites, wellness, and home services. What works, what wastes, and what every franchisor should require in their brand standards.',
    cover: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1600&q=80',
    coverAlt: 'Calculator and budget spreadsheet on a desk',
  },
  {
    slug: 'hyper-local-ads-franchise',
    title: 'Why Running One Ad Across Every Franchise Location Costs You 3x More',
    category: 'Paid Ads',
    date: '2026-05-11',
    dateDisplay: 'May 11, 2026',
    readTime: '6 min',
    excerpt:
      'The math on why generic corporate creative breaks down past 20 locations, what hyper-local actually means at the campaign level, and the per-market structure we use across 100+ locations.',
    cover: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&q=80',
    coverAlt: 'Map dotted with location pins',
  },
  {
    slug: 'speed-to-lead-franchise',
    title: 'Why Franchise Leads Go Cold in 5 Minutes (and the SMS Fix That Closes Them)',
    category: 'CRM & Automation',
    date: '2026-05-04',
    dateDisplay: 'May 4, 2026',
    readTime: '5 min',
    excerpt:
      'Lead conversion drops 80% after the first five minutes. Most franchises take hours. Here is the automated speed-to-lead workflow we deploy on every brand, and what it costs to NOT have it.',
    cover: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1600&q=80',
    coverAlt: 'Person checking a phone notification',
  },
  {
    slug: 'franchise-cpl-ugc-creative',
    title: 'How to Cut Franchise CPL by 40% with UGC Creative (Without Reshooting Everything)',
    category: 'Creative',
    date: '2026-04-27',
    dateDisplay: 'April 27, 2026',
    readTime: '6 min',
    excerpt:
      'Stock creative stopped working in 2024 but most franchise brands have not caught up. Here is the UGC pipeline we run across 12+ franchise brands that consistently cuts cost-per-lead by 40%.',
    cover: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=1600&q=80',
    coverAlt: 'Phone filming user-generated content',
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find(p => p.slug === slug);
}

/** Return all posts except the one with the given slug. Used for related-posts rail. */
export function getOtherPosts(currentSlug: string, limit = 3): Post[] {
  return posts.filter(p => p.slug !== currentSlug).slice(0, limit);
}
