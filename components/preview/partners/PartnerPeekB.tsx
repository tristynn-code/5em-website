'use client';

import { useEffect, useRef, useState } from 'react';
import partners from '@/content/partners.json';

/**
 * Variant B - Peek carousel.
 * A horizontal track where the active card is centered and the neighbors
 * peek in from the edges, so it's obvious there's more to swipe. The whole
 * track physically slides (translateX) on auto-advance - real motion left
 * to right, not a cross-fade. Drag/click the peeking cards to navigate.
 *
 * PLACEHOLDER PHOTOS: swap photo URLs in content/partners.json when
 * Tristynn supplies the curated brand photography.
 */
export default function PartnerPeekB() {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = partners.length;
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setIdx(i => (i + 1) % count), 5500);
    return () => clearInterval(id);
  }, [paused, count]);

  // Card takes 78% of container; track shifts so active card is centered.
  const CARD_PCT = 78;
  const GAP_PCT = 2;
  const offset = idx * (CARD_PCT + GAP_PCT) - (100 - CARD_PCT) / 2;

  return (
    <div
      className="relative max-w-[1280px] mx-auto overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      style={{ padding: '8px 0' }}
    >
      <div
        ref={trackRef}
        className="flex"
        style={{
          gap: `${GAP_PCT}%`,
          transform: `translateX(-${offset}%)`,
          transition: 'transform .7s cubic-bezier(.65,.05,.36,1)',
        }}
      >
        {partners.map((p, i) => {
          const active = i === idx;
          return (
            <button
              key={p.id}
              onClick={() => { setIdx(i); setPaused(true); }}
              className="relative rounded-l overflow-hidden flex-shrink-0 text-left"
              style={{
                width: `${CARD_PCT}%`,
                height: 420,
                transform: active ? 'scale(1)' : 'scale(.94)',
                opacity: active ? 1 : 0.55,
                transition: 'transform .7s cubic-bezier(.65,.05,.36,1), opacity .7s',
                boxShadow: active ? '0 28px 80px rgba(0,0,0,.16)' : '0 12px 32px rgba(0,0,0,.08)',
              }}
              aria-label={`Show ${p.name}`}
            >
              <img src={p.photo} alt={`${p.name} location`} className="absolute inset-0 w-full h-full object-cover" />
              <div
                aria-hidden
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    'linear-gradient(to top, rgba(10,14,15,.88) 0%, rgba(10,14,15,.32) 40%, rgba(10,14,15,0) 64%), linear-gradient(to right, rgba(10,14,15,.5) 0%, rgba(10,14,15,0) 50%)',
                }}
              />
              <div className="absolute left-0 bottom-0 p-7 lg:p-9 max-w-[600px]">
                <img
                  src={p.logo}
                  alt={p.name}
                  className="h-8 lg:h-10 w-auto object-contain object-left mb-4"
                  style={{ filter: 'brightness(0) invert(1)', maxWidth: 220 }}
                />
                {/* Eyebrow in the partner's own accent color (ULC Yellow for ULC) */}
                <div className="text-[11px] font-extrabold uppercase mb-1.5" style={{ letterSpacing: '.16em', color: p.accent }}>
                  Partnered with {p.name}
                </div>
                <div
                  className="text-white font-extrabold"
                  style={{ fontSize: 'clamp(18px,2.1vw,25px)', letterSpacing: '-.02em', lineHeight: 1.25, textShadow: '0 2px 16px rgba(0,0,0,.35)' }}
                >
                  {p.tagline}
                </div>
              </div>
              <div
                className="absolute top-5 right-5 px-3 py-1.5 rounded-full text-[10px] font-extrabold uppercase text-white"
                style={{ letterSpacing: '.1em', background: 'rgba(10,14,15,.45)', border: '1px solid rgba(255,255,255,.22)' }}
              >
                {p.vertical}
              </div>
            </button>
          );
        })}
      </div>

      {/* Progress dots centered below */}
      <div className="mt-6 flex items-center justify-center gap-1.5">
        {partners.map((pt, i) => (
          <button
            key={pt.id}
            aria-label={`Show ${pt.name}`}
            onClick={() => { setIdx(i); setPaused(true); }}
            className="rounded-full transition-all"
            style={{
              width: i === idx ? 22 : 6,
              height: 6,
              background: i === idx ? '#00BE9D' : 'rgba(0,0,0,.15)',
              transitionDuration: '.45s',
            }}
          />
        ))}
      </div>
    </div>
  );
}
