import { getBrands } from '@/lib/content';

export default function BrandsMarquee() {
  const brands = getBrands();
  // Duplicate for seamless loop
  const items = [...brands, ...brands];

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
