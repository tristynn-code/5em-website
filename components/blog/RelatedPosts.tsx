import Link from 'next/link';

interface Post {
  href: string;
  category: string;
  title: string;
  readTime: string;
  date: string;
  cover: string;
}

interface Props {
  /** Section heading. Defaults to "Keep Reading". */
  heading?: string;
  /** 3 posts to feature. */
  posts: Post[];
}

/**
 * Bottom-of-post "Keep Reading" rail.
 * 3-up grid of related/recent posts with cover image, category, title, meta.
 * Used at the bottom of blog detail pages so readers always have a next click.
 */
export default function RelatedPosts({ heading = 'Keep Reading', posts }: Props) {
  return (
    <section className="px-6 py-20 bg-off border-t border-bd">
      <div className="mx max-w-mx mx-auto">
        <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
          <div>
            <div className="stag inline-block">More from the blog</div>
            <h2 className="font-extrabold text-tx" style={{ fontSize: 'clamp(28px,3.5vw,38px)', letterSpacing: '-.02em' }}>
              {heading}
            </h2>
          </div>
          <Link href="/blog" className="text-[14px] font-bold text-teal hover:gap-2 inline-flex items-center gap-1 transition-all">
            All articles →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map(p => (
            <Link
              key={p.href}
              href={p.href}
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
                <div className="text-[11px] uppercase font-extrabold text-teal mb-3" style={{ letterSpacing: '.12em' }}>
                  {p.category}
                </div>
                <h3
                  className="font-extrabold text-tx mb-3 leading-tight flex-1 group-hover:text-teal transition-colors"
                  style={{ fontSize: 19, letterSpacing: '-.015em' }}
                >
                  {p.title}
                </h3>
                <div className="text-[12px] text-tx-3 font-medium flex items-center gap-2">
                  <span>{p.date}</span>
                  <span aria-hidden>·</span>
                  <span>{p.readTime} read</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
