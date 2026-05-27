import Link from 'next/link';
import { getBrands } from '@/lib/content';

export default function CaseStudiesGrid() {
  const brands = getBrands().slice(0, 6);

  return (
    <section className="sec bg-off">
      <div className="mx ctr">
        <div className="stag">Case Studies</div>
        <h2 className="sttl">Franchise Brands We&apos;ve Helped Grow</h2>
        <p className="ssub mx-auto mb-10">
          Real campaigns, real lead numbers, real franchise owners. Here&apos;s a look at the brands we work with every day.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 max-w-[960px] mx-auto">
          {brands.map(b => (
            <Link
              key={b.id}
              href="/case-studies"
              className="p-7 border border-bd rounded-l bg-wh text-center block transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(0,0,0,.05)]"
              style={{ transition: 'all .3s' }}
            >
              <img
                src={b.logo}
                alt={b.name}
                className="mx-auto mb-3.5 h-10 object-contain"
                style={{ width: b.displaySize === 'xl' ? 140 : 120 }}
              />
              <div className="text-sm font-bold text-tx mb-1">{b.name}</div>
              <div className="text-xs text-tx-3">{b.category}</div>
              <div className="mt-3 flex gap-2 justify-center flex-wrap">
                <span className="px-2.5 py-1 bg-teal-bg border border-teal-bd rounded-md text-[11px] font-bold text-teal">
                  {b.tag}
                </span>
              </div>
            </Link>
          ))}
        </div>
        <Link
          href="/case-studies"
          className="inline-flex items-center gap-2 mt-9 text-[15px] font-bold text-teal hover:gap-3 transition-all"
        >
          View All Case Studies →
        </Link>
      </div>
    </section>
  );
}
