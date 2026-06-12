import PartnerSpotlight from '@/components/PartnerSpotlight';
import { getBrands } from '@/lib/content';

/**
 * "Franchise Brands That Trust Us" homepage section: the partner Spotlight
 * carousel with the auto-scrolling logo marquee sliding underneath it.
 * Replaces the old marquee-only BrandsMarquee section.
 *
 * `height` is passed through to the Spotlight so the preview pages can
 * compare card heights against the shipped 520.
 */
export default function PartnerShowcase({ height }: { height?: number }) {
  const brands = getBrands();

  // Self-contained strip with its own trailing gap: 6 strips and a -50%
  // keyframe means the wrap lands exactly on a strip boundary (seamless),
  // and 3 strips out-span even ultrawide viewports.
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
    <section className="sec bg-off">
      <div className="mx ctr">
        <div className="stag">Our Partners</div>
        <h2 className="sttl">Franchise Brands That Trust Us</h2>
        <p className="ssub" style={{ margin: '0 auto' }}>
          We don&apos;t just run ads. We become an extension of your team.
        </p>
      </div>

      <div className="mt-12 px-6">
        <PartnerSpotlight height={height} />
      </div>

      <div className="overflow-hidden mt-12 py-8 relative">
        <div className="absolute inset-y-0 left-0 w-[120px] z-[2] pointer-events-none" style={{ background: 'linear-gradient(to right, #F7F7F7, transparent)' }} />
        <div className="absolute inset-y-0 right-0 w-[120px] z-[2] pointer-events-none" style={{ background: 'linear-gradient(to left, #F7F7F7, transparent)' }} />
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
