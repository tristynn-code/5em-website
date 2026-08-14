import type { Metadata } from 'next';
import { auditCTA } from '@/lib/site';
import data from '@/content/testimonials-page.json';
import JsonLd from '@/components/JsonLd';
import { pageMetadata } from '@/lib/seo';
import { breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = pageMetadata({
  title: 'Franchise Owner Testimonials | Real Results',
  description:
    '24+ real franchise owners share their results with Fifth Element. 100% occupancy at opening, 900+ leads in 5 months, and stories from IMAGE Studios locations nationwide.',
  path: '/testimonials',
  keywords: ['Fifth Element reviews', 'franchise marketing testimonials', 'franchise owner reviews', 'IMAGE Studios testimonials', 'BODY20 reviews'],
});

export default function TestimonialsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Testimonials', path: '/testimonials' },
        ])}
      />
      {/* HERO */}
      <section
        className="pt-[140px] px-6 pb-[60px]"
        style={{ background: 'linear-gradient(180deg,#F7F7F7 0%,#FFFFFF 100%)' }}
      >
        <div className="max-w-[820px] mx-auto text-center">
          <div className="stag inline-block">What People Are Saying</div>
          <h1
            className="font-extrabold text-tx mt-5 mb-6"
            style={{ fontSize: 'clamp(40px,6vw,68px)', letterSpacing: '-.03em', lineHeight: 1.05 }}
          >
            Real Results.<br />
            Real Franchise Owners.<br />
            <em className="italic text-teal font-extrabold">Real Stories.</em>
          </h1>
          <p
            className="text-[18px] leading-[1.5] text-tx-2 font-medium mx-auto mb-8"
            style={{ maxWidth: 680 }}
          >
            From grand openings with 100% occupancy to franchisees drowning in leads - here&apos;s what happens when franchise brands get the right marketing system.
          </p>
          <a href={auditCTA.href} className="bp bpl">
            Get Your Free Audit →
          </a>
        </div>
      </section>

      {/* FEATURED PULL QUOTE */}
      <section className="py-[60px] px-6 bg-wh">
        <div
          className="max-w-[820px] mx-auto rounded-[20px] px-6 md:px-12 py-10 md:py-14 text-center relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg,#0F1314 0%,#1D2637 100%)' }}
        >
          <div
            aria-hidden
            className="absolute font-extrabold leading-none"
            style={{
              top: -20,
              left: 32,
              fontSize: 180,
              color: 'rgba(0,190,157,.15)',
              fontFamily: 'Georgia, serif',
            }}
          >
            “
          </div>
          <div
            className="text-white font-semibold mb-8 relative z-10"
            style={{ fontSize: 'clamp(20px,2.4vw,28px)', lineHeight: 1.4, letterSpacing: '-.01em' }}
          >
            &ldquo;{data.featured.quote}&rdquo;
          </div>
          <div className="flex gap-3.5 items-center justify-center relative z-10">
            <img
              src={data.featured.avatar}
              alt={data.featured.name}
              className="w-[52px] h-[52px] rounded-full object-cover"
              style={{ border: '2px solid #00BE9D' }}
            />
            <div className="text-left">
              <div className="text-[15px] font-extrabold text-white">{data.featured.name}</div>
              <div className="text-xs text-teal font-semibold mt-0.5">{data.featured.meta}</div>
            </div>
          </div>
        </div>
      </section>

      {/* TOP QUOTES GRID */}
      <section className="pt-[100px] pb-20 px-6 bg-off">
        <div className="mx max-w-mx mx-auto">
          <div className="text-center mb-12">
            <div className="stag inline-block">The Wall of Wins</div>
            <h2 className="sttl text-center">Every Quote. Every Win. Every Franchise.</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {data.shortCards.map((card, i) => (
              <ShortCard key={i} card={card} />
            ))}
          </div>
        </div>
      </section>

      {/* LONG-FORM TESTIMONIALS */}
      <section className="pt-[100px] pb-20 px-6 bg-wh">
        <div className="mx max-w-mx mx-auto">
          <div className="text-center mb-12">
            <div className="stag inline-block">Deep Dives</div>
            <h2 className="sttl text-center">The Full Stories</h2>
            <p className="ssub mx-auto text-center" style={{ maxWidth: 680 }}>
              Longer testimonials from franchise owners who&apos;ve been with us since day one.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {data.longCards.map((c, i) => (
              <article
                key={i}
                className="bg-off border border-bd rounded-[14px] p-7 flex flex-col gap-4 transition-all hover:bg-wh hover:shadow-[0_16px_40px_rgba(0,0,0,.06)] hover:border-teal-bd"
              >
                <Stars />
                <div className="text-[15px] leading-[1.65] text-tx-2 font-medium flex-1">
                  &ldquo;{c.quote}&rdquo;
                </div>
                <div className="pt-3.5 border-t border-bd">
                  <div className="text-[15px] font-extrabold text-tx" style={{ letterSpacing: '-.01em' }}>
                    {c.name}
                  </div>
                  <div
                    className="text-xs font-bold text-teal mt-1"
                    style={{ letterSpacing: '-.01em' }}
                  >
                    {c.loc}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* VIDEO TESTIMONIALS COMING SOON */}
      <section className="pt-[100px] pb-20 px-6 bg-off">
        <div className="mx max-w-mx mx-auto">
          <div className="text-center mb-10">
            <div className="stag inline-block">Coming Soon</div>
            <h2 className="sttl text-center">Video Testimonials</h2>
            <p className="ssub mx-auto text-center" style={{ maxWidth: 680 }}>
              We&apos;ve flown a video crew to franchise owners across the country to capture their stories on camera. Videos launching soon.
            </p>
          </div>
          <div
            className="max-w-[860px] mx-auto rounded-[20px] text-center px-6 py-14 md:px-10 md:py-20"
            style={{
              background: 'linear-gradient(135deg,#0F1314 0%,#1D2637 100%)',
              border: '2px dashed rgba(0,190,157,.35)',
            }}
          >
            <div
              className="w-[72px] h-[72px] rounded-full flex items-center justify-center mx-auto mb-5"
              style={{
                background: 'rgba(0,190,157,.15)',
                color: '#00BE9D',
                fontSize: 26,
                paddingLeft: 5,
              }}
            >
              ▶
            </div>
            <div
              className="text-[22px] font-extrabold text-white mb-2"
              style={{ letterSpacing: '-.02em' }}
            >
              Professional video testimonials dropping soon
            </div>
            <div className="text-sm font-semibold" style={{ color: 'rgba(255,255,255,.6)' }}>
              10+ location owners. Studio quality. Real stories.
            </div>
          </div>
        </div>
      </section>

      {/* BRAND LOGOS */}
      <section className="py-20 px-6 bg-wh border-t border-bd">
        <div className="mx max-w-mx mx-auto">
          <div className="text-center mb-9">
            <div className="stag inline-block">Trusted Across Verticals</div>
            <h2 className="sttl text-center">Franchise Brands We Work With</h2>
          </div>
          <div className="flex items-center justify-center flex-wrap gap-6 md:gap-10 max-w-[1000px] mx-auto">
            {data.brandLogos.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Brand ${i + 1}`}
                className="opacity-90 hover:opacity-100 transition-opacity object-contain"
                style={{ height: 36, width: 'auto', maxWidth: 140 }}
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
        <p
          className="text-base text-tx-2 mb-8 mx-auto"
          style={{ maxWidth: 640 }}
        >
          Book a free Franchise Lead Engine Audit. We&apos;ll review your campaigns and give you 3+ specific improvements - or send you a $100 gift card.
        </p>
        <a href={auditCTA.href} className="bp bpl">
          Book Your Free Audit →
        </a>
      </section>
    </>
  );
}

function Stars() {
  return (
    <div className="text-[16px]" style={{ color: '#FFB800', letterSpacing: '.05em' }}>
      ★★★★★
    </div>
  );
}

function ShortCard({
  card,
}: {
  card: {
    quote: string;
    name: string;
    meta: string;
    avatar?: string;
    initials?: string;
  };
}) {
  return (
    <div className="bg-wh border border-bd rounded-[14px] p-6 flex flex-col gap-3.5 transition-all hover:-translate-y-[3px] hover:shadow-[0_16px_40px_rgba(0,0,0,.08)]">
      <Stars />
      <div
        className="text-[14px] leading-[1.55] text-tx-2 font-medium flex-1 [&_strong]:text-tx [&_strong]:font-bold"
        dangerouslySetInnerHTML={{ __html: `&ldquo;${card.quote}&rdquo;` }}
      />
      <div className="flex gap-3 items-center pt-3.5 border-t border-bd">
        {card.avatar ? (
          <img
            src={card.avatar}
            alt={card.name}
            className="w-10 h-10 rounded-full object-cover flex-shrink-0"
          />
        ) : (
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-extrabold flex-shrink-0"
            style={{
              background: 'rgba(0,190,157,.06)',
              color: '#00BE9D',
              border: '1px solid rgba(0,190,157,.15)',
            }}
          >
            {card.initials}
          </div>
        )}
        <div>
          <div className="text-sm font-extrabold text-tx" style={{ letterSpacing: '-.01em' }}>
            {card.name}
          </div>
          <div className="text-xs text-tx-3 font-semibold mt-0.5">{card.meta}</div>
        </div>
      </div>
    </div>
  );
}
