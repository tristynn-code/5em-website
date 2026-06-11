'use client';

import { useEffect, useState } from 'react';
import partnersData from '@/content/partners.json';

interface Partner {
  id: string;
  name: string;
  vertical: string;
  tagline: string;
  logo: string;
  photo: string;
  /** object-position keeping the photo's subject centered in the wide crop */
  photoPosition?: string;
  /** Partner's own brand accent - used on the "Partnered with" eyebrow */
  accent: string;
  /** Official white/on-dark logo asset. When present, rendered directly; otherwise the logo is CSS-inverted. */
  logoWhite?: string;
  /** Per-brand logo height (px). Logos vary wildly in aspect ratio - equal
      heights read as unequal sizes, so each brand gets a height tuned for
      equal visual mass on the card. */
  logoHeight?: number;
}
const partners = partnersData as Partner[];

/**
 * Spotlight carousel - Tristynn's pick (Variant A).
 * One wide rounded card at a time. Full-bleed brand photo with a slow
 * Ken Burns drift, gradient anchored bottom-left where the official brand
 * logo + "Partnered with X" eyebrow (in the partner's own brand color) +
 * tagline sit. Auto-advances with a cross-fade; arrows on hover; dots.
 *
 * `height` lets preview pages compare card heights (A = 440, B = taller).
 */
export default function PartnerSpotlightA({ height = 440 }: { height?: number }) {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = partners.length;

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setIdx(i => (i + 1) % count), 6000);
    return () => clearInterval(id);
  }, [paused, count]);

  const p = partners[idx];

  return (
    <div
      className="relative max-w-mx mx-auto rounded-l overflow-hidden group"
      style={{ height, boxShadow: '0 32px 90px rgba(0,0,0,.12)' }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Photo layer - key remount triggers fade + Ken Burns restart */}
      <div key={p.id} className="absolute inset-0 spotlight-fade">
        <img
          src={p.photo}
          alt={`${p.name} location`}
          className="w-full h-full object-cover kenburns"
          style={{ objectPosition: p.photoPosition ?? '50% 50%' }}
        />
      </div>

      {/* Gradient - strongest bottom-left, like he described */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(to top, rgba(10,14,15,.86) 0%, rgba(10,14,15,.35) 38%, rgba(10,14,15,0) 62%), linear-gradient(to right, rgba(10,14,15,.55) 0%, rgba(10,14,15,0) 55%)',
        }}
      />

      {/* Copy block bottom-left */}
      <div key={`copy-${p.id}`} className="absolute left-0 bottom-0 p-8 lg:p-10 view-in max-w-[640px]">
        <img
          src={p.logoWhite ?? p.logo}
          alt={p.name}
          className="w-auto object-contain object-left mb-5"
          style={{
            height: p.logoHeight ?? 44,
            maxWidth: 320,
            filter: p.logoWhite ? 'none' : 'brightness(0) invert(1)',
          }}
        />
        {/* Eyebrow in the partner's own brand color - their brand inside ours */}
        <div
          className="text-[11px] font-extrabold uppercase mb-2"
          style={{ letterSpacing: '.16em', color: p.accent }}
        >
          Partnered with {p.name}
        </div>
        <div
          className="text-white font-extrabold"
          style={{ fontSize: 'clamp(20px,2.4vw,28px)', letterSpacing: '-.02em', lineHeight: 1.2, textShadow: '0 2px 16px rgba(0,0,0,.35)' }}
        >
          {p.tagline}
        </div>
      </div>

      {/* Vertical chip top-right */}
      <div
        key={`chip-${p.id}`}
        className="absolute top-6 right-6 view-in px-3.5 py-1.5 rounded-full text-[11px] font-extrabold uppercase text-white"
        style={{ letterSpacing: '.1em', background: 'rgba(10,14,15,.45)', border: '1px solid rgba(255,255,255,.22)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}
      >
        {p.vertical}
      </div>

      {/* Arrows - appear on hover */}
      <button
        aria-label="Previous partner"
        onClick={() => { setIdx(i => (i - 1 + count) % count); setPaused(true); }}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity"
        style={{ background: 'rgba(10,14,15,.5)', border: '1px solid rgba(255,255,255,.25)', backdropFilter: 'blur(8px)' }}
      >
        ←
      </button>
      <button
        aria-label="Next partner"
        onClick={() => { setIdx(i => (i + 1) % count); setPaused(true); }}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity"
        style={{ background: 'rgba(10,14,15,.5)', border: '1px solid rgba(255,255,255,.25)', backdropFilter: 'blur(8px)' }}
      >
        →
      </button>

      {/* Progress dots bottom-right */}
      <div className="absolute bottom-7 right-8 flex items-center gap-1.5">
        {partners.map((pt, i) => (
          <button
            key={pt.id}
            aria-label={`Show ${pt.name}`}
            onClick={() => { setIdx(i); setPaused(true); }}
            className="rounded-full transition-all"
            style={{
              width: i === idx ? 22 : 6,
              height: 6,
              background: i === idx ? '#00BE9D' : 'rgba(255,255,255,.4)',
              transitionDuration: '.45s',
            }}
          />
        ))}
      </div>
    </div>
  );
}
