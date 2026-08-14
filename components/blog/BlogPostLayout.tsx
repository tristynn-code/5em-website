import Link from 'next/link';
import { ReactNode } from 'react';
import JsonLd from '@/components/JsonLd';
import RelatedPosts from '@/components/blog/RelatedPosts';
import { SITE, jsonLd } from '@/lib/seo';
import { breadcrumbSchema } from '@/lib/schema';
import type { Post } from '@/app/blog/posts';
import { getOtherPosts } from '@/app/blog/posts';

/** Square face-centered crop - the author photo renders as a circle. */
const AUTHOR_PHOTO = '/team/tristynn-avatar.jpg';

interface Props {
  post: Post;
  children: ReactNode;
}

/**
 * Standard blog post layout - Sample A "Substack-style wide column" treatment
 * (Tristynn's pick on 2026-05-28). Wraps the rendered post body with:
 *   - Breadcrumb + category + title + meta hero
 *   - Author chip below the title
 *   - Cover image (16/9)
 *   - Content container at max-w-880px
 *   - Article JSON-LD + breadcrumb schema
 *   - Author bio card at the end
 *   - "Keep Reading" rail with the 3 other most recent posts
 *
 * Each post page provides its own JSX body as children. Drop <MidArticleCTA />,
 * <MediaEmbed />, <PullQuote /> inline as needed.
 */
export default function BlogPostLayout({ post, children }: Props) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${SITE.url}/blog/${post.slug}#article`,
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Person',
      '@id': `${SITE.url}/about#tristynn`,
      name: 'Tristynn McGowan',
      url: 'https://www.linkedin.com/in/tristynnmcgowan',
    },
    publisher: { '@id': `${SITE.url}#organization` },
    mainEntityOfPage: `${SITE.url}/blog/${post.slug}`,
    image: post.cover,
    articleSection: post.category,
    keywords: ['franchise marketing', post.category.toLowerCase()],
  };

  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Blog', path: '/blog' },
          { name: post.title, path: `/blog/${post.slug}` },
        ])}
      />

      {/* HEADER */}
      <article className="pt-[120px]">
        <div className="mx max-w-[880px] mx-auto px-6">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-[13px] font-semibold text-tx-3 mb-8">
            <Link href="/blog" className="hover:text-teal transition-colors">Blog</Link>
            <span aria-hidden>·</span>
            <span className="text-teal font-bold">{post.category}</span>
          </div>

          {/* Title */}
          <h1
            className="font-extrabold text-tx mb-6"
            style={{ fontSize: 'clamp(34px,4.8vw,56px)', letterSpacing: '-.03em', lineHeight: 1.06 }}
          >
            {post.title}
          </h1>

          {/* Meta row */}
          <div className="flex items-center gap-4 text-[14px] text-tx-3 mb-10 flex-wrap">
            <div className="flex items-center gap-2.5">
              <img src={AUTHOR_PHOTO} alt="Tristynn McGowan" className="w-12 h-12 rounded-full object-cover" />
              <div>
                <div className="font-bold text-tx text-[14px]">Tristynn McGowan</div>
                <div className="text-[12px] text-tx-3">Founder &amp; CEO, Fifth Element</div>
              </div>
            </div>
            <span aria-hidden className="text-tx-3">·</span>
            <span>{post.dateDisplay}</span>
            <span aria-hidden className="text-tx-3">·</span>
            <span>{post.readTime} read</span>
          </div>
        </div>

        {/* Cover image - wider than the body */}
        <div className="mx max-w-[1100px] mx-auto px-6 mb-14">
          <div className="rounded-l overflow-hidden bg-off" style={{ aspectRatio: '16 / 9' }}>
            <img src={post.cover} alt={post.title} className="w-full h-full object-cover" />
          </div>
        </div>

        {/* BODY */}
        <div className="mx max-w-[880px] mx-auto px-6 text-tx-2" style={{ fontSize: 18, lineHeight: 1.75 }}>
          {children}
        </div>

        {/* AUTHOR BIO CARD - end of post */}
        <div className="px-6 mt-20 mb-24">
          <div className="mx max-w-[880px] mx-auto">
            <div className="rounded-l border border-bd bg-off p-8 md:p-10">
              <div className="flex flex-col md:flex-row gap-6">
                <img
                  src={AUTHOR_PHOTO}
                  alt="Tristynn McGowan"
                  className="w-24 h-24 rounded-full object-cover flex-shrink-0"
                />
                <div className="flex-1">
                  <div
                    className="text-[11px] uppercase font-extrabold text-teal mb-2"
                    style={{ letterSpacing: '.12em' }}
                  >
                    Written By
                  </div>
                  <div className="font-extrabold text-tx mb-1" style={{ fontSize: 20, letterSpacing: '-.01em' }}>
                    Tristynn McGowan
                  </div>
                  <div className="text-[13px] text-tx-3 font-semibold mb-4">
                    Founder &amp; CEO, Fifth Element
                  </div>
                  <p className="text-[15px] text-tx-2 leading-relaxed mb-5">
                    Tristynn built Fifth Element from a college dorm into a franchise marketing agency
                    serving 100+ franchise locations across the United States. He writes about what is actually
                    working in paid social, UGC, and franchise growth - not what sounds clever in a pitch deck.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href="https://www.linkedin.com/in/tristynnmcgowan"
                      className="text-[13px] font-bold text-tx-2 hover:text-teal transition-colors"
                    >
                      LinkedIn →
                    </a>
                    <Link
                      href="/about"
                      className="text-[13px] font-bold text-tx-2 hover:text-teal transition-colors"
                    >
                      More from Tristynn →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* KEEP READING - related posts rail */}
      <RelatedPosts
        posts={getOtherPosts(post.slug, 3).map(p => ({
          href: `/blog/${p.slug}`,
          category: p.category,
          title: p.title,
          readTime: p.readTime,
          date: p.dateDisplay,
          cover: p.cover,
        }))}
      />
    </>
  );
}
