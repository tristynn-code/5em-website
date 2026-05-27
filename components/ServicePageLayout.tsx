import { ReactNode } from 'react';
import { auditCTA } from '@/lib/site';

export interface FeatureSection {
  eyebrow: string;
  title: string;
  paragraph: string;
  bullets: { label: string; rest: string }[];
  visual: ReactNode;
  reverse?: boolean;
  bgOff?: boolean;
  link?: { href: string; label: string };
}

export interface Testimonial {
  quote: string;
  name: string;
  meta: string;
  avatar: string;
}

interface Props {
  hero: {
    eyebrow: string;
    headline: ReactNode;
    sub: string;
    visual: ReactNode;
    /** Strip the dark frame around the hero visual (used when the visual needs to float on the page background, e.g. /creative-production). */
    bareVisual?: boolean;
  };
  why: {
    eyebrow: string;
    title: ReactNode;
    body: string;
  };
  introHeader: {
    eyebrow: string;
    title: ReactNode;
    body: string;
    extra?: ReactNode;
  };
  /** Optional extra section between intro and features (e.g., platforms strip, pillar cards). */
  beforeFeatures?: ReactNode;
  features: FeatureSection[];
  /** Optional closing dark section (used by Growth Systems). */
  closing?: ReactNode;
  testimonial: Testimonial;
  cta: {
    title: string;
    body: string;
  };
}

export default function ServicePageLayout({
  hero,
  why,
  introHeader,
  beforeFeatures,
  features,
  closing,
  testimonial,
  cta,
}: Props) {
  return (
    <>
      {/* HERO SPLIT */}
      <section
        className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center max-w-mx mx-auto"
        style={{ padding: '140px 24px 80px' }}
      >
        <div>
          <div className="stag">{hero.eyebrow}</div>
          <h1
            className="font-extrabold mb-5"
            style={{ fontSize: 'clamp(36px,5vw,56px)', letterSpacing: '-.03em', lineHeight: 1.08 }}
          >
            {hero.headline}
          </h1>
          <p className="ssub" style={{ marginBottom: 32 }}>
            {hero.sub}
          </p>
          <a href={auditCTA.href} className="bp bpl">
            Book Your Free Audit →
          </a>
        </div>
        {hero.bareVisual ? (
          <div className="relative w-full mx-auto lg:mx-0">{hero.visual}</div>
        ) : (
          <div
            className="rounded-l overflow-hidden flex items-center justify-center mx-auto lg:mx-0 w-full max-w-[560px]"
            style={{
              aspectRatio: '3 / 2',
              background: 'linear-gradient(135deg, #0F1314 0%, #1D2637 100%)',
              boxShadow: '0 24px 60px rgba(0,0,0,.12)',
              padding: 32,
            }}
          >
            {hero.visual}
          </div>
        )}
      </section>

      {/* WHY DIFFERENT */}
      <section className="bg-off" style={{ padding: '100px 24px' }}>
        <div className="max-w-[960px] mx-auto text-center">
          <div className="stag">{why.eyebrow}</div>
          <h2 className="sttl">{why.title}</h2>
          <p className="ssub mx-auto">{why.body}</p>
        </div>
      </section>

      {/* INTRO TO DEEP DIVE */}
      <section className="text-center" style={{ padding: '100px 24px 80px' }}>
        <div className="mx max-w-mx mx-auto">
          <div className="stag inline-block">{introHeader.eyebrow}</div>
          <h2 className="sttl">{introHeader.title}</h2>
          <p className="ssub mx-auto" style={{ maxWidth: 680 }}>
            {introHeader.body}
          </p>
          {introHeader.extra}
        </div>
      </section>

      {beforeFeatures}

      {/* FEATURES */}
      {features.map((f, i) => (
        <section
          key={i}
          className={`overflow-hidden ${f.bgOff ? 'bg-off' : ''}`}
          style={{ padding: '100px 24px' }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center max-w-mx mx-auto">
            <div className={f.reverse ? 'lg:order-2' : ''}>
              <div
                className="text-teal font-bold uppercase mb-3"
                style={{ fontSize: 12, letterSpacing: '.12em' }}
              >
                {f.eyebrow}
              </div>
              <h3
                className="font-extrabold mb-5 text-tx"
                style={{
                  fontSize: 'clamp(28px,3.5vw,40px)',
                  letterSpacing: '-.02em',
                  lineHeight: 1.1,
                }}
              >
                {f.title}
              </h3>
              <p
                className="text-tx-2 mb-6"
                style={{ fontSize: 17, lineHeight: 1.65 }}
              >
                {f.paragraph}
              </p>
              <ul className="list-none p-0 m-0">
                {f.bullets.map((b, j) => (
                  <li
                    key={j}
                    className="relative text-tx-2 mb-3.5"
                    style={{
                      paddingLeft: 28,
                      fontSize: 15,
                      lineHeight: 1.55,
                    }}
                  >
                    <span
                      className="absolute left-0 top-2 w-4 h-4 rounded-full"
                      style={{
                        background:
                          "rgba(0,190,157,.06) url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path fill='none' stroke='%2300BE9D' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round' d='M3 8.5l3 3 7-7'/></svg>\") center no-repeat",
                        border: '1.5px solid #00BE9D',
                      }}
                    />
                    <strong className="text-tx font-bold">{b.label}</strong>
                    {b.rest && <> {b.rest}</>}
                  </li>
                ))}
              </ul>
              {f.link && (
                <a
                  href={f.link.href}
                  className="inline-flex items-center gap-1 mt-2 text-[13px] font-extrabold text-teal hover:gap-2 transition-all"
                  style={{ letterSpacing: '-.01em' }}
                >
                  {f.link.label} →
                </a>
              )}
            </div>
            <div className={`flex items-center justify-center ${f.reverse ? 'lg:order-1' : ''}`}>
              {f.visual}
            </div>
          </div>
        </section>
      ))}

      {closing}

      {/* TESTIMONIAL */}
      <section style={{ padding: '100px 24px' }} className="bg-wh">
        <div className="max-w-[960px] mx-auto">
          <div
            className="text-wh rounded-l text-center relative overflow-hidden"
            style={{
              background: '#0F1314',
              padding: 'clamp(48px, 6vw, 64px) clamp(28px, 5vw, 56px)',
              boxShadow: '0 24px 60px rgba(0,0,0,.12)',
            }}
          >
            <div
              className="absolute -top-10 -right-10 w-[200px] h-[200px] rounded-full pointer-events-none"
              style={{
                background:
                  'radial-gradient(circle, rgba(0,190,157,.12), transparent 70%)',
              }}
            />
            <div className="stag relative z-10" style={{ color: '#00BE9D' }}>
              Real Results
            </div>
            <div
              className="font-semibold relative z-10"
              style={{
                fontSize: 'clamp(22px,3vw,30px)',
                lineHeight: 1.35,
                letterSpacing: '-.02em',
                margin: '24px 0 32px',
              }}
            >
              <span
                style={{
                  color: '#00BE9D',
                  fontSize: 64,
                  lineHeight: 0,
                  verticalAlign: -24,
                  marginRight: 8,
                }}
              >
                &ldquo;
              </span>
              {testimonial.quote}
            </div>
            <div className="flex items-center justify-center gap-3.5 relative z-10">
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full object-cover"
                style={{ border: '2px solid rgba(255,255,255,.1)' }}
              />
              <div className="text-left">
                <div className="font-bold text-[15px]">{testimonial.name}</div>
                <div className="text-[13px]" style={{ color: 'rgba(255,255,255,.5)' }}>
                  {testimonial.meta}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="text-center bg-off"
        style={{ padding: '80px 24px' }}
      >
        <h2
          className="font-extrabold text-tx mb-3"
          style={{
            fontSize: 'clamp(28px,4vw,40px)',
            letterSpacing: '-.02em',
          }}
        >
          {cta.title}
        </h2>
        <p className="text-base text-tx-2 mb-8">{cta.body}</p>
        <a href={auditCTA.href} className="bp bpl">
          Book Your Free Audit →
        </a>
      </section>
    </>
  );
}
