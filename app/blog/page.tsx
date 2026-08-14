import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import { pageMetadata, SITE } from '@/lib/seo';
import { breadcrumbSchema } from '@/lib/schema';
import { posts } from './posts';

export const metadata: Metadata = pageMetadata({
  title: 'Franchise Marketing Blog | Fifth Element',
  description:
    'Real franchise marketing insights from the agency behind 300+ franchise locations. Tactical breakdowns of paid ads, UGC creative, CRM automation, and franchise growth systems - no fluff.',
  path: '/blog',
  keywords: [
    'franchise marketing blog',
    'franchise lead generation tips',
    'multi-location marketing insights',
    'franchise marketing strategy',
    'franchise ads',
    'franchise CPL',
  ],
});

const featured = posts[0];
const rest = posts.slice(1);

const blogSchema = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  '@id': `${SITE.url}/blog#blog`,
  url: `${SITE.url}/blog`,
  name: 'Franchise Marketing Blog | Fifth Element',
  description:
    'Real franchise marketing insights from the agency behind 300+ franchise locations.',
  publisher: { '@id': `${SITE.url}#organization` },
  blogPost: posts.map(p => ({
    '@type': 'BlogPosting',
    '@id': `${SITE.url}/blog/${p.slug}#article`,
    headline: p.title,
    description: p.excerpt,
    datePublished: p.date,
    url: `${SITE.url}/blog/${p.slug}`,
    image: p.cover,
    articleSection: p.category,
    author: {
      '@type': 'Person',
      '@id': `${SITE.url}/about#tristynn`,
      name: 'Tristynn McGowan',
    },
  })),
};

export default function BlogPage() {
  return (
    <>
      <JsonLd data={blogSchema} />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Blog', path: '/blog' },
        ])}
      />

      {/* HERO */}
      <section
        className="px-6 pt-[140px] pb-[60px]"
        style={{ background: 'linear-gradient(180deg,#F7F7F7 0%,#FFFFFF 100%)' }}
      >
        <div className="max-w-[1200px] mx-auto text-center">
          <div className="stag inline-block">The 5EM Blog</div>
          <h1
            className="font-extrabold mb-5"
            style={{ fontSize: 'clamp(40px,5.5vw,64px)', letterSpacing: '-.04em', lineHeight: 1.05 }}
          >
            Franchise Marketing,<br />
            <em className="not-italic text-teal">Unfiltered.</em>
          </h1>
          <p
            className="text-tx-2 mx-auto max-w-[640px]"
            style={{ fontSize: 'clamp(17px,1.7vw,19px)', lineHeight: 1.6 }}
          >
            Tactical breakdowns from the agency behind 300+ franchise locations. Paid ads, UGC creative, CRM automation, and franchise growth systems. No fluff.
          </p>
        </div>
      </section>

      {/* FEATURED POST */}
      <section className="px-6 pb-16">
        <div className="max-w-[1200px] mx-auto">
          <Link
            href={`/blog/${featured.slug}`}
            className="group grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center bg-wh border border-bd rounded-l p-6 lg:p-10 transition-all hover:border-teal-bd hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(0,0,0,.06)]"
          >
            <div className="rounded-l overflow-hidden bg-off order-first lg:order-last" style={{ aspectRatio: '16 / 10' }}>
              <img
                src={featured.cover}
                alt={featured.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="text-[11px] uppercase font-extrabold text-teal"
                  style={{ letterSpacing: '.12em' }}
                >
                  Latest
                </span>
                <span className="text-tx-3" aria-hidden>·</span>
                <span className="text-[12px] uppercase font-bold text-tx-2" style={{ letterSpacing: '.08em' }}>
                  {featured.category}
                </span>
              </div>
              <h2
                className="font-extrabold text-tx mb-4 group-hover:text-teal transition-colors"
                style={{ fontSize: 'clamp(26px,3.2vw,36px)', letterSpacing: '-.025em', lineHeight: 1.1 }}
              >
                {featured.title}
              </h2>
              <p className="text-tx-2 mb-6" style={{ fontSize: 17, lineHeight: 1.6 }}>
                {featured.excerpt}
              </p>
              <div className="flex items-center gap-3 text-[13px] text-tx-3 font-medium">
                <span>{featured.dateDisplay}</span>
                <span aria-hidden>·</span>
                <span>{featured.readTime} read</span>
              </div>
              <div className="mt-6 inline-flex items-center gap-1 text-[14px] font-bold text-teal group-hover:gap-2 transition-all">
                Read article →
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* REST OF POSTS */}
      <section className="px-6 pb-24">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
            <div>
              <div className="stag inline-block">More articles</div>
              <h2 className="font-extrabold text-tx" style={{ fontSize: 'clamp(28px,3.5vw,38px)', letterSpacing: '-.02em' }}>
                Recent Posts
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map(p => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="group bg-wh border border-bd rounded-l overflow-hidden flex flex-col transition-all hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(0,0,0,.06)] hover:border-teal-bd"
              >
                <div className="aspect-[16/10] overflow-hidden bg-off">
                  <img
                    src={p.cover}
                    alt={p.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div
                    className="text-[11px] uppercase font-extrabold text-teal mb-3"
                    style={{ letterSpacing: '.12em' }}
                  >
                    {p.category}
                  </div>
                  <h3
                    className="font-extrabold text-tx mb-3 leading-tight group-hover:text-teal transition-colors"
                    style={{ fontSize: 20, letterSpacing: '-.015em' }}
                  >
                    {p.title}
                  </h3>
                  <p className="text-[14px] text-tx-2 leading-relaxed flex-1 mb-4">{p.excerpt}</p>
                  <div className="text-[12px] text-tx-3 font-medium flex items-center gap-2">
                    <span>{p.dateDisplay}</span>
                    <span aria-hidden>·</span>
                    <span>{p.readTime} read</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
