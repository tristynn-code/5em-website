import { getAudiences } from '@/lib/content';

export default function WhoWeServe() {
  const audiences = getAudiences();

  return (
    <section className="sec bg-off">
      <div className="mx">
        <div className="stag">Who We Serve</div>
        <h2 className="sttl">Built for Franchise Brands</h2>
        <p className="ssub">We work with franchise systems at every stage &mdash; from pre-launch to 100s of locations.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
          {audiences.map(a => (
            <div
              key={a.id}
              className="bg-wh border border-bd rounded p-7 transition-all hover:border-teal-bd hover:-translate-y-px"
              style={{ transition: 'all .25s' }}
            >
              <h3 className="text-base font-bold text-tx mb-1.5">{a.title}</h3>
              <p className="text-sm text-tx-2 leading-relaxed">{a.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
