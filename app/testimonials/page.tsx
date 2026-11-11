import type { Metadata } from 'next';
import { auditCTA } from '@/lib/site';
import partners from '@/content/partners.json';
import JsonLd from '@/components/JsonLd';
import TestimonialsBoard from '@/components/testimonials/TestimonialsBoard';
import { pageMetadata } from '@/lib/seo';
import {
  breadcrumbSchema,
  videoTestimonialsSchema,
  testimonialsPageSchema,
} from '@/lib/schema';
import {
  getVideoTestimonials,
  getWrittenTestimonials,
  getTestimonialBrands,
  testimonialCounts,
} from '@/lib/testimonials';

const counts = testimonialCounts();

export const metadata: Metadata = pageMetadata({
  title: 'Client Testimonials | Franchise Owners On Camera',
  description: `${counts.total} testimonials from franchise owners who work with Fifth Element, including ${counts.video} video testimonials recorded by owners themselves. IMAGE Studios, Pilates Addiction, Ultimate Longevity Center and more.`,
  path: '/testimonials',
  keywords: [
    'Fifth Element reviews',
    'franchise marketing testimonials',
    'franchise owner reviews',
    'video testimonials',
    'IMAGE Studios testimonials',
    'Pilates Addiction reviews',
  ],
});

export default function TestimonialsPage() {
  const videos = getVideoTestimonials();
  const written = getWrittenTestimonials();
  const brands = getTestimonialBrands();

  // Only show logos for brands that actually have a testimonial on this page.
  const logos = (partners as Array<{ name: string; logo: string; logoHeight?: number }>).filter(p =>
    brands.includes(p.name)
  );

  return (
    <>
      <JsonLd data={testimonialsPageSchema()} />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Testimonials', path: '/testimonials' },
        ])}
      />
      {videoTestimonialsSchema().map(v => (
        <JsonLd key={v['@id']} data={v} />
      ))}

      {/* HERO */}
      <section
        className="pt-[140px] px-6 pb-12"
        style={{ background: 'linear-gradient(180deg,#F7F7F7 0%,#FFFFFF 100%)' }}
      >
        <div className="max-w-[820px] mx-auto text-center">
          <div className="stag inline-block">What People Are Saying</div>
          <h1
            className="font-extrabold text-tx mt-5 mb-6"
            style={{ fontSize: 'clamp(40px,6vw,68px)', letterSpacing: '-.03em', lineHeight: 1.05 }}
          >
            Real Owners.<br />
            Real Numbers.<br />
            <em className="italic text-teal font-extrabold">Real Stories.</em>
          </h1>
          <p
            className="text-[18px] leading-[1.5] text-tx-2 font-medium mx-auto mb-9"
            style={{ maxWidth: 680 }}
          >
            Every testimonial here comes from a franchise owner who runs a location we market.
            Most of them recorded it themselves, on their own phone, in their own studio.
          </p>

          {/* COUNT STRIP */}
          <div className="flex items-center justify-center flex-wrap gap-3 mb-9">
            {[
              { n: counts.video, label: 'video testimonials' },
              { n: counts.written, label: 'written reviews' },
              { n: counts.brands, label: 'franchise brands' },
            ].map(s => (
              <div
                key={s.label}
                className="px-5 py-3 rounded-[14px] bg-wh border border-bd text-left"
              >
                <div
                  className="font-extrabold text-teal tabular-nums"
                  style={{ fontSize: 26, letterSpacing: '-.02em', lineHeight: 1 }}
                >
                  {s.n}
                </div>
                <div className="text-[11.5px] font-semibold text-tx-3 mt-1">{s.label}</div>
              </div>
            ))}
          </div>

          <a href={auditCTA.href} className="bp bpl">
            Get Your Free Audit →
          </a>
        </div>
      </section>

      {/* FILTER + VIDEO WALL + WRITTEN WALL */}
      <TestimonialsBoard videos={videos} written={written} brands={brands} />

      {/* BRAND LOGOS */}
      <section className="py-20 px-6 bg-wh border-t border-bd">
        <div className="mx">
          <div className="text-center mb-9">
            <div className="stag inline-block">Trusted Across Verticals</div>
            <h2 className="sttl text-center">Franchise Brands We Work With</h2>
          </div>
          <div className="flex items-center justify-center flex-wrap gap-8 md:gap-12 max-w-[1000px] mx-auto">
            {logos.map(p => (
              <img
                key={p.name}
                src={p.logo}
                alt={p.name}
                className="opacity-85 hover:opacity-100 transition-opacity object-contain"
                style={{ height: p.logoHeight ?? 38, width: 'auto', maxWidth: 150 }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center bg-off">
        <h2
          className="font-extrabold tracking-tight mb-3"
          style={{ fontSize: 'clamp(28px,4vw,40px)', letterSpacing: '-.02em' }}
        >
          Want to Be the Next Success Story?
        </h2>
        <p className="text-base text-tx-2 mb-8 mx-auto" style={{ maxWidth: 640 }}>
          Book a free Franchise Lead Engine Audit. We&apos;ll review your campaigns and give you 3+
          specific improvements, or send you a $100 gift card.
        </p>
        <a href={auditCTA.href} className="bp bpl">
          Book Your Free Audit →
        </a>
      </section>
    </>
  );
}
