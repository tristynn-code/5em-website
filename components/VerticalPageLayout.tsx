'use client';

import { useEffect, useState } from 'react';
import { auditCTA } from '@/lib/site';
import '@/styles/verticals.css';

export interface HeroSlide {
  src: string;
  alt: string;
}

export interface VerticalBrand {
  src: string;
  alt: string;
  style?: React.CSSProperties;
}

export interface VerticalTestimonial {
  tagline?: string;
  quote: string;
  avatar: string;
  name: string;
  meta: string;
}

export interface VerticalShellProps {
  /** Hero column 1 content */
  heroTag: string;
  heroHeading: React.ReactNode;
  heroSubcopy: string;
  /** Single image OR a slideshow of images. Use one or the other. */
  heroImage?: { src: string; alt: string };
  heroSlides?: HeroSlide[];
  /** If true, hero image uses 3/2 aspect instead of 4/5 */
  heroImageAspect3x2?: boolean;

  /** Why we're different */
  whyTag: string;
  whyTitle: string;
  whyCopy: string;

  /** Intro to deep dive */
  introTag: string;
  introTitle: string;
  introSubtitle: string;

  /** Children = the unique deep-dive feature sections per page */
  children: React.ReactNode;

  /** Brands section (omit entirely by passing brands: undefined) */
  brandsTag?: string;
  brandsTitle?: string;
  brands?: VerticalBrand[];

  /** Testimonial card */
  testimonial: VerticalTestimonial;

  /** Final CTA */
  ctaTitle: string;
  ctaSubtitle: string;
}

/**
 * Shared layout for each vertical page (Fitness, Salon Suites, Wellness,
 * Beauty, Home Services, Lifestyle). Renders the hero, why-different, intro,
 * brands, testimonial and final CTA sections. The unique deep-dive feature
 * sections for each vertical are passed in as children.
 */
export default function VerticalPageLayout(props: VerticalShellProps) {
  const {
    heroTag,
    heroHeading,
    heroSubcopy,
    heroImage,
    heroSlides,
    heroImageAspect3x2,
    whyTag,
    whyTitle,
    whyCopy,
    introTag,
    introTitle,
    introSubtitle,
    children,
    brandsTag,
    brandsTitle,
    brands,
    testimonial,
    ctaTitle,
    ctaSubtitle,
  } = props;

  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    if (!heroSlides || heroSlides.length < 2) return;
    const id = setInterval(() => {
      setActiveSlide(i => (i + 1) % heroSlides.length);
    }, 4000);
    return () => clearInterval(id);
  }, [heroSlides]);

  return (
    <>
      {/* HERO SPLIT */}
      <section className="vp-hero-split">
        <div>
          <div className="stag">{heroTag}</div>
          <h1>{heroHeading}</h1>
          <p className="ssub" style={{ marginBottom: 32 }}>{heroSubcopy}</p>
          <a href={auditCTA.href} className="bp bpl">
            Book Your Free Audit →
          </a>
        </div>
        <div className={`vp-hero-img${heroImageAspect3x2 ? ' vp-hero-img-3-2' : ''}`}>
          {heroSlides && heroSlides.length > 0 ? (
            <div className="vp-hero-slides">
              {heroSlides.map((s, i) => (
                <img
                  key={s.src}
                  className={`vp-hero-slide${i === activeSlide ? ' active' : ''}`}
                  src={s.src}
                  alt={s.alt}
                />
              ))}
            </div>
          ) : heroImage ? (
            <img
              src={heroImage.src}
              alt={heroImage.alt}
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center center' }}
            />
          ) : null}
        </div>
      </section>

      {/* WHY WE'RE DIFFERENT */}
      <section className="vp-why">
        <div className="vp-why-inner">
          <div className="stag">{whyTag}</div>
          <h2 className="sttl">{whyTitle}</h2>
          <p className="ssub" style={{ margin: '0 auto' }}>{whyCopy}</p>
        </div>
      </section>

      {/* INTRO TO DEEP DIVE */}
      <section className="vp-intro">
        <div className="vp-mx">
          <div className="stag">{introTag}</div>
          <h2 className="sttl">{introTitle}</h2>
          <p className="ssub" style={{ margin: '0 auto' }}>{introSubtitle}</p>
        </div>
      </section>

      {/* DEEP-DIVE FEATURE SECTIONS (passed in by each vertical) */}
      {children}

      {/* BRANDS */}
      {brands && brands.length > 0 && (
        <section className="vp-brands">
          <div className="vp-brands-mx">
            {brandsTag && <div className="stag">{brandsTag}</div>}
            {brandsTitle && <h2 className="sttl">{brandsTitle}</h2>}
            <div className="vp-brand-row">
              {brands.map(b => (
                <img key={b.src} src={b.src} alt={b.alt} style={b.style} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* TESTIMONIAL */}
      <section className="vp-testimonial">
        <div className="vp-tst-inner">
          <div className="vp-tst-card">
            <div className="vp-tst-stag">{testimonial.tagline ?? 'Real Results'}</div>
            <div className="vp-tst-quote">{testimonial.quote}</div>
            <div className="vp-tst-attr">
              <img src={testimonial.avatar} alt={testimonial.name} />
              <div className="vp-tst-attr-text">
                <div className="vp-tst-attr-name">{testimonial.name}</div>
                <div className="vp-tst-attr-meta">{testimonial.meta}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="vp-fcta">
        <h2>{ctaTitle}</h2>
        <p>{ctaSubtitle}</p>
        <a href={auditCTA.href} className="bp bpl">
          Book Your Free Audit →
        </a>
      </section>
    </>
  );
}
