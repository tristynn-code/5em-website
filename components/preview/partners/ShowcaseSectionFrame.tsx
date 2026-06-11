import { ReactNode } from 'react';
import { getBrands } from '@/lib/content';

/**
 * Wraps a showcase carousel variant in the real homepage section context:
 * the "Franchise Brands That Trust Us" header above, the auto-scrolling
 * logo marquee below - exactly how it would sit on the live homepage.
 */
export default function ShowcaseSectionFrame({ children }: { children: ReactNode }) {
  const brands = getBrands();
  const items = [...brands, ...brands];

  return (
    <section className="sec bg-off">
      <div className="mx ctr">
        <div className="stag">Our Partners</div>
        <h2 className="sttl">Franchise Brands That Trust Us</h2>
        <p className="ssub" style={{ margin: '0 auto' }}>
          We don&apos;t just run ads. We become an extension of your team.
        </p>
      </div>

      {/* The carousel variant under review */}
      <div className="mt-12 px-6">{children}</div>

      {/* Existing logo marquee below, per Tristynn: showcase rides "along with the sliding logos" */}
      <div className="overflow-hidden mt-12 py-8 relative">
        <div className="absolute inset-y-0 left-0 w-[120px] z-[2] pointer-events-none" style={{ background: 'linear-gradient(to right, #F7F7F7, transparent)' }} />
        <div className="absolute inset-y-0 right-0 w-[120px] z-[2] pointer-events-none" style={{ background: 'linear-gradient(to left, #F7F7F7, transparent)' }} />
        <div className="flex gap-[72px] items-center animate-brandscroll w-max">
          {items.map((b, i) => (
            <img
              key={`${b.id}-${i}`}
              src={b.logo}
              alt={b.name}
              className="h-auto flex-shrink-0 object-contain opacity-100 hover:opacity-70 transition-opacity"
              style={{ width: '140px' }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
