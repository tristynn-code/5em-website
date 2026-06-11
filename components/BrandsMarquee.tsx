import { getBrands } from '@/lib/content';

export default function BrandsMarquee() {
  const brands = getBrands();

  // One self-contained strip of all logos. Each strip carries its own
  // trailing gap (pr equals the inter-logo gap), so N strips tile with
  // perfectly even spacing and translateX(-50%) lands exactly on a strip
  // boundary - the old flat [...brands, ...brands] + flex gap version
  // drifted off-boundary and exposed a blank stretch on wide screens
  // before the loop reset.
  const Strip = ({ ariaHidden }: { ariaHidden?: boolean }) => (
    <div className="flex items-center gap-[72px] pr-[72px] flex-none" aria-hidden={ariaHidden}>
      {brands.map(b => (
        <img
          key={b.id}
          src={b.logo}
          alt={ariaHidden ? '' : b.name}
          className="h-auto flex-shrink-0 object-contain opacity-100 hover:opacity-70 transition-opacity"
          style={{ width: '140px' }}
        />
      ))}
    </div>
  );

  return (
    <section className="sec" style={{ background: 'var(--off, #F7F7F7)' }}>
      <div className="mx ctr">
        <div className="stag">Our Partners</div>
        <h2 className="sttl">Franchise Brands That Trust Us</h2>
        <p className="ssub" style={{ margin: '0 auto' }}>
          We don&apos;t just run ads. We become an extension of your team.
        </p>
      </div>
      <div className="overflow-hidden mt-12 py-10 relative">
        <div
          className="absolute inset-y-0 left-0 w-[120px] z-[2] pointer-events-none"
          style={{ background: 'linear-gradient(to right, #F7F7F7, transparent)' }}
        />
        <div
          className="absolute inset-y-0 right-0 w-[120px] z-[2] pointer-events-none"
          style={{ background: 'linear-gradient(to left, #F7F7F7, transparent)' }}
        />
        {/* 6 strips; -50% scrolls exactly 3 of them (a strip boundary), so the
            wrap is seamless. 3 strips (~4400px+) also exceed even ultrawide
            viewports, so the tail never runs dry like the old 2x version.
            Duration scaled 3x vs the old 35s to keep the same px/sec pace. */}
        <div className="flex animate-brandscroll w-max" style={{ animationDuration: '105s' }}>
          <Strip />
          <Strip ariaHidden />
          <Strip ariaHidden />
          <Strip ariaHidden />
          <Strip ariaHidden />
          <Strip ariaHidden />
        </div>
      </div>
    </section>
  );
}
