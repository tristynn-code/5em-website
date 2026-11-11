'use client';

/**
 * The video testimonial cards, in either of two layouts:
 *
 *  - `rail` (homepage): a horizontally swipeable row of 9:16 cards. Drag or
 *    swipe left/right, or use the chevrons on desktop.
 *  - `grid` (testimonials page): the whole wall at once.
 *
 * Either way, tapping a card opens <ReelsPlayer /> at that owner and you swipe
 * up/down through the rest of the feed.
 *
 * Cards are poster images, not <video> tags: thirteen autoplaying clips would
 * cost a visitor hundreds of megabytes before they chose to watch anything.
 */

import { useRef, useState } from 'react';
import type { VideoTestimonial } from '@/lib/testimonials';
import { brandAccent, formatDuration } from '@/lib/testimonials';
import ReelsPlayer from './ReelsPlayer';

export default function VideoWall({
  items,
  layout = 'rail',
}: {
  items: VideoTestimonial[];
  layout?: 'rail' | 'grid';
}) {
  const [openAt, setOpenAt] = useState<number | null>(null);
  const railRef = useRef<HTMLDivElement>(null);

  function nudge(dir: 1 | -1) {
    const el = railRef.current;
    if (!el) return;
    // One card plus its gap, so the rail always lands on a card edge.
    const step = (el.firstElementChild as HTMLElement | null)?.offsetWidth ?? 260;
    el.scrollBy({ left: dir * (step + 16), behavior: 'smooth' });
  }

  const cards = items.map((t, i) => {
    const accent = brandAccent(t.brand);
    return (
      <button
        key={t.id}
        type="button"
        data-testid="video-card"
        onClick={() => setOpenAt(i)}
        aria-label={`Play ${t.name}'s video testimonial, ${t.business}`}
        className={`group relative overflow-hidden rounded-[20px] bg-dk text-left transition-transform duration-300 hover:-translate-y-1 focus-visible:-translate-y-1 ${
          layout === 'rail'
            ? 'flex-shrink-0 w-[214px] md:w-[240px]'
            : 'w-full'
        }`}
        style={{ aspectRatio: '9 / 16', scrollSnapAlign: 'start' }}
      >
        <img
          src={t.poster}
          alt=""
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to top, rgba(0,0,0,.9) 0%, rgba(0,0,0,.45) 38%, rgba(0,0,0,.05) 65%, rgba(0,0,0,.25) 100%)',
          }}
        />

        {/* Duration badge */}
        <span
          className="absolute top-3 right-3 px-2 py-[3px] rounded-full text-[11px] font-bold text-white tabular-nums"
          style={{ background: 'rgba(0,0,0,.55)', backdropFilter: 'blur(4px)' }}
        >
          {formatDuration(t.seconds)}
        </span>

        {/* Play affordance */}
        <span
          aria-hidden
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center rounded-full text-white transition-all duration-300 group-hover:scale-110"
          style={{
            width: 54,
            height: 54,
            background: 'rgba(255,255,255,.16)',
            backdropFilter: 'blur(8px)',
            border: '1.5px solid rgba(255,255,255,.5)',
            fontSize: 17,
            paddingLeft: 4,
          }}
        >
          ▶
        </span>

        {/* Name + studio, the little profile-row treatment */}
        <span className="absolute left-0 bottom-0 w-full p-4 flex items-center gap-2.5">
          <img
            src={t.avatar}
            alt=""
            loading="lazy"
            className="rounded-full object-cover flex-shrink-0"
            style={{ width: 34, height: 34, border: `2px solid ${accent}` }}
          />
          <span className="min-w-0 block">
            <span className="block text-white font-bold text-[13.5px] leading-tight truncate">
              {t.name}
            </span>
            <span className="block text-[11.5px] font-medium truncate" style={{ color: accent }}>
              {t.business}
            </span>
          </span>
        </span>
      </button>
    );
  });

  return (
    <>
      {layout === 'rail' ? (
        <div className="relative">
          <div
            ref={railRef}
            data-testid="video-rail"
            className="flex gap-4 overflow-x-auto pb-2 -mx-6 px-6 md:mx-0 md:px-0"
            style={{ scrollSnapType: 'x mandatory', scrollbarWidth: 'none' }}
          >
            {cards}
          </div>

          {/* Desktop nudge buttons. Touch users just swipe. */}
          <button
            type="button"
            onClick={() => nudge(-1)}
            aria-label="Scroll testimonials left"
            className="hidden md:flex items-center justify-center absolute -left-5 top-1/2 -translate-y-1/2 rounded-full bg-wh border border-bd text-tx transition-all hover:border-teal hover:text-teal shadow-[0_6px_24px_rgba(0,0,0,.1)]"
            style={{ width: 44, height: 44 }}
          >
            ←
          </button>
          <button
            type="button"
            onClick={() => nudge(1)}
            aria-label="Scroll testimonials right"
            className="hidden md:flex items-center justify-center absolute -right-5 top-1/2 -translate-y-1/2 rounded-full bg-wh border border-bd text-tx transition-all hover:border-teal hover:text-teal shadow-[0_6px_24px_rgba(0,0,0,.1)]"
            style={{ width: 44, height: 44 }}
          >
            →
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">{cards}</div>
      )}

      {openAt !== null && (
        <ReelsPlayer items={items} startIndex={openAt} onClose={() => setOpenAt(null)} />
      )}
    </>
  );
}
