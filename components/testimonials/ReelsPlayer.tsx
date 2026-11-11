'use client';

/**
 * Full-screen, swipeable video testimonial feed - the Instagram/Reels pattern,
 * on our own site.
 *
 * Swipe up/down (or arrow keys, or the on-screen chevrons) to move between
 * owners. Only the active clip loads and plays; everything else is paused and
 * rewound, so a 13-video feed costs one video's worth of bandwidth.
 *
 * The active slide is derived from scroll position maths rather than an
 * IntersectionObserver - it's deterministic, survives fast flicks, and stays
 * testable in a headless browser.
 */

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import type { VideoTestimonial } from '@/lib/testimonials';
import { brandAccent, formatDuration } from '@/lib/testimonials';

export default function ReelsPlayer({
  items,
  startIndex,
  onClose,
}: {
  items: VideoTestimonial[];
  startIndex: number;
  onClose: () => void;
}) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);
  const [active, setActive] = useState(startIndex);
  const [muted, setMuted] = useState(false);
  const [paused, setPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  /* Land on the clicked video before the first paint, so opening the feed
     never flashes the wrong face. */
  useLayoutEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollTop = startIndex * el.clientHeight;
  }, [startIndex]);

  /* Lock the page behind the overlay. */
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  const goTo = useCallback((index: number) => {
    const el = scrollerRef.current;
    if (!el) return;
    const clamped = Math.max(0, Math.min(items.length - 1, index));
    el.scrollTo({ top: clamped * el.clientHeight, behavior: 'smooth' });
  }, [items.length]);

  /* Keyboard: arrows move, Escape leaves, space toggles playback. */
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === 'ArrowRight') {
        e.preventDefault();
        goTo(active + 1);
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp' || e.key === 'ArrowLeft') {
        e.preventDefault();
        goTo(active - 1);
      } else if (e.key === ' ') {
        e.preventDefault();
        togglePlay();
      }
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, goTo, onClose]);

  /* Which slide are we on? Pure scroll maths, rAF-throttled. */
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    let frame = 0;
    function onScroll() {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const h = el!.clientHeight || 1;
        const index = Math.round(el!.scrollTop / h);
        setActive(prev => (prev === index ? prev : index));
      });
    }
    el.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      el.removeEventListener('scroll', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  /* Play exactly one video: the active one. */
  useEffect(() => {
    setProgress(0);
    setPaused(false);
    videoRefs.current.forEach((v, i) => {
      if (!v) return;
      if (i === active) {
        v.muted = muted;
        const p = v.play();
        if (p && typeof p.catch === 'function') {
          // Some browsers refuse unmuted autoplay. Fall back rather than stall.
          p.catch(() => {
            v.muted = true;
            setMuted(true);
            v.play().catch(() => setPaused(true));
          });
        }
      } else {
        v.pause();
        if (v.currentTime > 0) v.currentTime = 0;
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  /* Mute toggle applies to whatever is playing now. */
  useEffect(() => {
    const v = videoRefs.current[active];
    if (v) v.muted = muted;
  }, [muted, active]);

  function togglePlay() {
    const v = videoRefs.current[active];
    if (!v) return;
    if (v.paused) {
      v.play().then(() => setPaused(false)).catch(() => setPaused(true));
    } else {
      v.pause();
      setPaused(true);
    }
  }

  const current = items[active];

  return (
    <div
      className="fixed inset-0 z-[999] bg-black"
      role="dialog"
      aria-modal="true"
      aria-label="Client video testimonials"
    >
      {/* THE FEED - one full-height snap slide per owner */}
      <div
        ref={scrollerRef}
        data-testid="reels-scroller"
        className="h-[100dvh] w-full overflow-y-auto overflow-x-hidden"
        style={{ scrollSnapType: 'y mandatory', scrollbarWidth: 'none' }}
      >
        {items.map((t, i) => {
          const accent = brandAccent(t.brand);
          const near = Math.abs(i - active) <= 1;
          return (
            <section
              key={t.id}
              data-testid="reel-slide"
              className="relative h-[100dvh] w-full flex items-center justify-center overflow-hidden"
              style={{ scrollSnapAlign: 'start', scrollSnapStop: 'always' }}
            >
              {/* Blurred poster fills the gaps on non-9:16 footage. */}
              <div
                aria-hidden
                className="absolute inset-0 bg-center bg-cover"
                style={{
                  backgroundImage: `url(${t.poster})`,
                  filter: 'blur(44px) brightness(.4)',
                  transform: 'scale(1.2)',
                }}
              />
              <video
                ref={el => {
                  videoRefs.current[i] = el;
                }}
                src={near ? t.video : undefined}
                poster={t.poster}
                playsInline
                preload={near ? 'auto' : 'none'}
                controls={false}
                onClick={togglePlay}
                onTimeUpdate={
                  i === active
                    ? e => {
                        const v = e.currentTarget;
                        if (v.duration) setProgress((v.currentTime / v.duration) * 100);
                      }
                    : undefined
                }
                onEnded={i === active ? () => goTo(active + 1) : undefined}
                className={`relative max-h-full max-w-full ${
                  t.vertical ? 'h-full w-auto object-cover' : 'w-full h-auto object-contain'
                }`}
                style={{ maxWidth: t.vertical ? 'min(100vw, 56vh)' : '100vw' }}
              />

              {/* Readability scrim under the caption. */}
              <div
                aria-hidden
                className="absolute inset-x-0 bottom-0 pointer-events-none"
                style={{
                  height: '42%',
                  background:
                    'linear-gradient(to top, rgba(0,0,0,.88) 0%, rgba(0,0,0,.6) 40%, rgba(0,0,0,0) 100%)',
                }}
              />

              {/* WHO IS THIS - the Instagram handle treatment. The safe-area
                  inset keeps the caption clear of the iPhone home indicator. */}
              <div
                className="absolute left-0 bottom-0 w-full px-5 pointer-events-none"
                style={{ paddingBottom: 'calc(44px + env(safe-area-inset-bottom, 0px))' }}
              >
                <div className="mx-auto w-full" style={{ maxWidth: 520 }}>
                  <div className="flex items-center gap-3">
                    <img
                      src={t.avatar}
                      alt=""
                      className="rounded-full object-cover flex-shrink-0"
                      style={{ width: 46, height: 46, border: `2px solid ${accent}` }}
                    />
                    <div className="min-w-0">
                      <div className="text-white font-bold text-[16px] leading-tight truncate">
                        {t.name || t.business}
                      </div>
                      {t.name && (
                        <div className="text-[13px] font-medium truncate" style={{ color: accent }}>
                          {t.business}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="mt-3 flex items-center gap-2 text-[11px] font-semibold text-white/55">
                    <span
                      className="px-2 py-[3px] rounded-full"
                      style={{ background: 'rgba(255,255,255,.12)' }}
                    >
                      {t.brand}
                    </span>
                    <span>{formatDuration(t.seconds)}</span>
                  </div>
                </div>
              </div>

              {/* Paused affordance */}
              {i === active && paused && (
                <button
                  type="button"
                  onClick={togglePlay}
                  aria-label="Play"
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <span
                    className="flex items-center justify-center rounded-full text-white"
                    style={{
                      width: 76,
                      height: 76,
                      background: 'rgba(0,0,0,.45)',
                      backdropFilter: 'blur(6px)',
                      fontSize: 28,
                      paddingLeft: 5,
                    }}
                  >
                    ▶
                  </span>
                </button>
              )}
            </section>
          );
        })}
      </div>

      {/* PROGRESS for the active clip */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-white/15 z-20">
        <div
          className="h-full transition-[width] duration-150"
          style={{ width: `${progress}%`, background: brandAccent(current?.brand ?? '') }}
        />
      </div>

      {/* CONTROLS */}
      <div
        className="absolute right-4 flex items-center gap-2 z-20"
        style={{ top: 'calc(16px + env(safe-area-inset-top, 0px))' }}
      >
        <button
          type="button"
          onClick={() => setMuted(m => !m)}
          aria-label={muted ? 'Unmute' : 'Mute'}
          className="flex items-center justify-center rounded-full text-white text-[15px] transition-colors hover:bg-white/25"
          style={{ width: 42, height: 42, background: 'rgba(0,0,0,.5)', backdropFilter: 'blur(6px)' }}
        >
          {muted ? '🔇' : '🔊'}
        </button>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close testimonials"
          className="flex items-center justify-center rounded-full text-white transition-colors hover:bg-white/25"
          style={{ width: 42, height: 42, background: 'rgba(0,0,0,.5)', backdropFilter: 'blur(6px)', fontSize: 20 }}
        >
          ✕
        </button>
      </div>

      {/* Counter + desktop chevrons. Touch users just swipe. */}
      <div
        className="absolute left-5 z-20 text-[12px] font-bold text-white/70 tabular-nums"
        style={{ top: 'calc(20px + env(safe-area-inset-top, 0px))' }}
      >
        {active + 1} / {items.length}
      </div>

      <div className="hidden md:flex flex-col gap-3 absolute right-6 top-1/2 -translate-y-1/2 z-20">
        <button
          type="button"
          onClick={() => goTo(active - 1)}
          disabled={active === 0}
          aria-label="Previous testimonial"
          className="flex items-center justify-center rounded-full text-white transition-all hover:bg-white/25 disabled:opacity-25 disabled:cursor-not-allowed"
          style={{ width: 46, height: 46, background: 'rgba(0,0,0,.5)', backdropFilter: 'blur(6px)', fontSize: 17 }}
        >
          ↑
        </button>
        <button
          type="button"
          onClick={() => goTo(active + 1)}
          disabled={active === items.length - 1}
          aria-label="Next testimonial"
          className="flex items-center justify-center rounded-full text-white transition-all hover:bg-white/25 disabled:opacity-25 disabled:cursor-not-allowed"
          style={{ width: 46, height: 46, background: 'rgba(0,0,0,.5)', backdropFilter: 'blur(6px)', fontSize: 17 }}
        >
          ↓
        </button>
      </div>

      {/* One-time hint, visible only on the first slide. */}
      {active === 0 && (
        <div
          className="absolute left-0 right-0 text-center text-[11px] font-semibold text-white/40 pointer-events-none z-20"
          style={{ bottom: 'calc(12px + env(safe-area-inset-bottom, 0px))' }}
        >
          Swipe for more <span className="md:hidden">↑</span>
          <span className="hidden md:inline">or use ↑ ↓</span>
        </div>
      )}
    </div>
  );
}
