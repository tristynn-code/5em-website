/**
 * "Hear From Our Clients" - the homepage testimonial section.
 *
 * Sits high on the page, straight after the partner showcase: real owners,
 * on camera, before we've made a single claim about ourselves. The rail is
 * swipeable; tapping a face opens the full-screen feed.
 */
import VideoWall from './VideoWall';
import { getFeaturedVideos, getFeaturedWritten, testimonialCounts, brandAccent } from '@/lib/testimonials';

export default function ClientVoices() {
  const videos = getFeaturedVideos(8);
  const written = getFeaturedWritten(2);
  const counts = testimonialCounts();

  return (
    <section className="sec bg-off">
      <div className="mx">
        <div className="text-center">
          <div className="stag">Hear From Our Clients</div>
          <h2 className="sttl">Real Owners. Unscripted.</h2>
          <p className="ssub mx-auto">
            No actors and no script. These are franchise owners telling you what changed, some on
            their own phone, some on camera in their studio. Swipe through, then tap to watch.
          </p>
        </div>

        <div className="mt-12">
          <VideoWall items={videos} layout="rail" />
        </div>

        {/* A couple of written quotes so the section still says something
            substantial to anyone who will not press play. */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          {written.map(t => {
            const accent = brandAccent(t.brand);
            return (
              <figure
                key={t.id}
                className="bg-wh border border-bd rounded-[20px] p-7 flex flex-col"
              >
                <div className="text-[#F2A623] text-sm mb-3.5" style={{ letterSpacing: '2px' }}>
                  ★★★★★
                </div>
                <blockquote className="text-[15px] leading-relaxed text-tx-2 flex-1 mb-6">
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
                      style={{ background: 'rgba(0,190,157,.10)', border: '1px solid rgba(0,190,157,.18)', color: '#00BE9D' }}
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

        <div className="text-center mt-10">
          <a href="/testimonials" className="bs">
            See all {counts.total} client testimonials →
          </a>
        </div>
      </div>
    </section>
  );
}
