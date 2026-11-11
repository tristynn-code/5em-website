'use client';

/**
 * The body of /testimonials: one brand filter driving both the video wall and
 * the written wall, so "show me only Pilates Addiction" does what you'd
 * expect across the whole page.
 */

import { useMemo, useState } from 'react';
import type { VideoTestimonial, WrittenTestimonial } from '@/lib/testimonials';
import { brandAccent } from '@/lib/testimonials';
import VideoWall from './VideoWall';

export default function TestimonialsBoard({
  videos,
  written,
  brands,
}: {
  videos: VideoTestimonial[];
  written: WrittenTestimonial[];
  brands: string[];
}) {
  const [filter, setFilter] = useState<string>('all');

  const shownVideos = useMemo(
    () => (filter === 'all' ? videos : videos.filter(v => v.brand === filter)),
    [filter, videos]
  );
  const shownWritten = useMemo(
    () => (filter === 'all' ? written : written.filter(w => w.brand === filter)),
    [filter, written]
  );

  const options = ['all', ...brands];

  return (
    <>
      {/* FILTER */}
      <section className="px-6 pt-4 pb-2 bg-wh">
        <div className="mx">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {options.map(opt => {
              const on = filter === opt;
              const label = opt === 'all' ? 'All brands' : opt;
              const count =
                opt === 'all'
                  ? videos.length + written.length
                  : videos.filter(v => v.brand === opt).length +
                    written.filter(w => w.brand === opt).length;
              return (
                <button
                  key={opt}
                  type="button"
                  onClick={() => setFilter(opt)}
                  aria-pressed={on}
                  className={`px-4 py-2 rounded-full text-[13.5px] font-semibold border transition-all ${
                    on
                      ? 'border-teal text-teal bg-teal-bg'
                      : 'border-bd text-tx-2 hover:border-teal-bd hover:text-tx'
                  }`}
                >
                  {opt !== 'all' && (
                    <span
                      aria-hidden
                      className="inline-block rounded-full mr-2 align-middle"
                      style={{ width: 7, height: 7, background: brandAccent(opt) }}
                    />
                  )}
                  {label}
                  <span className="ml-1.5 text-tx-3 font-bold tabular-nums">{count}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* VIDEO WALL */}
      <section className="px-6 pt-14 pb-16 bg-wh">
        <div className="mx">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
            <div>
              <div className="stag">On Camera</div>
              <h2
                className="font-extrabold text-tx"
                style={{ fontSize: 'clamp(26px,3.4vw,38px)', letterSpacing: '-.02em', lineHeight: 1.1 }}
              >
                Video Testimonials
              </h2>
            </div>
            <p className="text-[14px] text-tx-3 font-medium max-w-[340px]">
              Recorded by owners themselves, straight from their phones. Tap any face, then swipe
              up and down through the feed.
            </p>
          </div>

          {shownVideos.length > 0 ? (
            <VideoWall key={filter} items={shownVideos} layout="grid" />
          ) : (
            <p className="text-[15px] text-tx-3 py-10 text-center">
              No video testimonials for this brand yet.
            </p>
          )}
        </div>
      </section>

      {/* WRITTEN WALL */}
      <section className="px-6 pt-16 pb-24 bg-off">
        <div className="mx">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
            <div>
              <div className="stag">In Their Words</div>
              <h2
                className="font-extrabold text-tx"
                style={{ fontSize: 'clamp(26px,3.4vw,38px)', letterSpacing: '-.02em', lineHeight: 1.1 }}
              >
                Written Reviews
              </h2>
            </div>
            <p className="text-[14px] text-tx-3 font-medium max-w-[340px]">
              Collected through our client satisfaction surveys and from owners who wrote in.
            </p>
          </div>

          {shownWritten.length > 0 ? (
            <div className="columns-1 md:columns-2 lg:columns-3 gap-4 md:gap-5">
              {shownWritten.map(t => {
                const accent = brandAccent(t.brand);
                return (
                  <figure
                    key={t.id}
                    className="break-inside-avoid mb-4 md:mb-5 bg-wh border border-bd rounded-[20px] p-7 transition-all hover:shadow-[0_12px_40px_rgba(0,0,0,.06)]"
                  >
                    <div className="text-[#F2A623] text-sm mb-3.5" style={{ letterSpacing: '2px' }}>
                      ★★★★★
                    </div>
                    <blockquote className="text-[15px] leading-relaxed text-tx-2 mb-6">
                      &ldquo;{t.quote}&rdquo;
                    </blockquote>
                    <figcaption className="flex items-center gap-3 pt-4 border-t border-bd">
                      {t.avatar ? (
                        <img
                          src={t.avatar}
                          alt=""
                          loading="lazy"
                          className="w-11 h-11 rounded-full object-cover bg-off flex-shrink-0"
                        />
                      ) : (
                        <span
                          aria-hidden
                          className="w-11 h-11 rounded-full flex-shrink-0 flex items-center justify-center text-[14px] font-extrabold"
                          style={{
                            background: 'rgba(0,190,157,.10)',
                            border: '1px solid rgba(0,190,157,.18)',
                            color: '#00BE9D',
                          }}
                        >
                          {t.name.split(' ').map(w => w[0]).filter(Boolean).slice(0, 2).join('')}
                        </span>
                      )}
                      <span className="block min-w-0">
                        <span className="block text-sm font-bold text-tx truncate">{t.name}</span>
                        <span className="flex items-center gap-1.5 text-xs text-tx-3 mt-0.5">
                          <span
                            aria-hidden
                            className="inline-block rounded-full flex-shrink-0"
                            style={{ width: 7, height: 7, background: accent }}
                          />
                          <span className="truncate">
                            {t.brand}
                            {t.location ? ` · ${t.location}` : ''}
                          </span>
                        </span>
                      </span>
                    </figcaption>
                  </figure>
                );
              })}
            </div>
          ) : (
            <p className="text-[15px] text-tx-3 py-10 text-center">
              No written reviews for this brand yet.
            </p>
          )}
        </div>
      </section>
    </>
  );
}
