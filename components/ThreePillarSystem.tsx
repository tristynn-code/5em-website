import { getPillars, type Pillar } from '@/lib/content';

export default function ThreePillarSystem() {
  const pillars = getPillars();

  return (
    <section className="py-[100px] px-6 bg-off">
      <div className="mx">
        <div className="text-center mb-12">
          <div className="stag inline-block">Our System</div>
          <h2 className="sttl text-center">The 3-Pillar Franchise Growth System</h2>
          <p className="ssub mx-auto text-center" style={{ maxWidth: 680 }}>
            Every franchise gets the same proven framework — customized to their brand, market, and goals.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-mx mx-auto">
          {pillars.map(p => (
            <PillarCard key={p.id} pillar={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PillarCard({ pillar }: { pillar: Pillar }) {
  return (
    <div
      className="rounded-[18px] p-8 flex flex-col relative overflow-hidden border transition-all hover:-translate-y-1"
      style={{
        background: 'linear-gradient(135deg, #0F1314 0%, #1D2637 100%)',
        borderColor: 'rgba(255,255,255,.08)',
      }}
    >
      <div className="text-[48px] font-extrabold text-teal leading-none mb-4" style={{ letterSpacing: '-.04em', opacity: 0.3 }}>
        {pillar.number}
      </div>
      <div
        className="h-[70px] mb-5 p-3.5 rounded-[10px] flex items-center justify-center"
        style={{ background: 'rgba(255,255,255,.03)', border: '1px solid rgba(255,255,255,.06)' }}
      >
        <PillarViz viz={pillar.viz} />
      </div>
      <div className="text-[11px] font-extrabold text-teal uppercase mb-2.5" style={{ letterSpacing: '.14em' }}>
        {pillar.label}
      </div>
      <h3 className="text-[22px] font-extrabold text-white leading-tight mb-3" style={{ letterSpacing: '-.02em' }}>
        {pillar.title}
      </h3>
      <p className="text-sm leading-relaxed font-medium text-white/65">{pillar.description}</p>
    </div>
  );
}

function PillarViz({ viz }: { viz: 'line' | 'creative' | 'bars' }) {
  if (viz === 'line') {
    return (
      <svg viewBox="0 0 120 60" preserveAspectRatio="none" className="w-full h-full max-w-[140px] block">
        <path d="M0,50 L15,45 L30,38 L45,32 L60,28 L75,22 L90,18 L105,10 L120,4" fill="none" stroke="#00BE9D" strokeWidth="2" />
      </svg>
    );
  }
  if (viz === 'creative') {
    return (
      <div className="flex items-center justify-center gap-2.5 w-full h-full">
        <div
          className="w-[34px] h-[54px] rounded-[7px] flex items-center justify-center flex-shrink-0"
          style={{ background: 'linear-gradient(135deg, #f093fb, #00BE9D)', border: '1.5px solid rgba(255,255,255,.15)' }}
        >
          <div className="w-4 h-4 rounded-full bg-white/95 text-dk flex items-center justify-center text-[7px] pl-0.5">▶</div>
        </div>
        <div className="flex gap-1">
          <div className="w-[18px] h-[26px] rounded-[3px]" style={{ background: 'linear-gradient(135deg, #667eea, #764ba2)' }} />
          <div className="w-[18px] h-[26px] rounded-[3px]" style={{ background: 'linear-gradient(135deg, #4facfe, #00f2fe)' }} />
          <div className="w-[18px] h-[26px] rounded-[3px]" style={{ background: 'linear-gradient(135deg, #fa709a, #fee140)' }} />
        </div>
      </div>
    );
  }
  return (
    <div className="flex items-end gap-1 h-[42px] justify-center w-full">
      {[30, 50, 45, 70, 90].map((h, i, arr) => (
        <div
          key={i}
          className="w-2 bg-teal rounded-t-[2px]"
          style={{
            height: `${h}%`,
            opacity: i === arr.length - 1 ? 1 : 0.8,
            boxShadow: i === arr.length - 1 ? '0 0 10px rgba(0,190,157,.5)' : 'none',
          }}
        />
      ))}
    </div>
  );
}
