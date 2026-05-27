import { getProblems } from '@/lib/content';

export default function ProblemSection() {
  const problems = getProblems();

  return (
    <section className="sec bg-off">
      <div className="mx">
        <div className="stag">The Problem</div>
        <h2 className="sttl">Most Franchise Marketing Is Broken</h2>
        <p className="ssub">If any of these sound familiar, you&apos;re not alone.</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12 items-center">
          <div className="flex flex-col gap-4">
            {problems.map(p => (
              <div
                key={p.id}
                className="bg-wh border border-bd rounded p-6 flex gap-4 items-start transition-all hover:border-teal-bd hover:-translate-y-0.5"
                style={{ transition: 'all .3s' }}
              >
                <div className="w-9 h-9 rounded-[10px] bg-teal-bg border border-teal-bd flex items-center justify-center text-[15px] font-extrabold text-teal flex-shrink-0">
                  {p.number}
                </div>
                <div>
                  <h3 className="text-base font-bold text-tx mb-1">{p.title}</h3>
                  <p className="text-sm text-tx-2 leading-relaxed">{p.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div
            className="rounded-l min-h-[380px] relative overflow-hidden bg-dk"
            style={{
              backgroundImage: 'radial-gradient(ellipse at 50% 50%, rgba(0,190,157,.08) 0%, transparent 70%)',
            }}
          >
            <div className="relative z-[1] flex flex-col items-center justify-center h-full min-h-[380px] p-10 text-center">
              <div className="text-[80px] font-extrabold text-teal leading-none" style={{ letterSpacing: '-.04em' }}>3.2x</div>
              <div className="text-lg text-white/60 mt-3 font-medium max-w-[320px]">what franchises overspend on CPL with generic creative</div>
              <div
                className="mt-6 border border-glassdborder rounded-s py-4 px-5 flex flex-wrap justify-center gap-6"
                style={{ background: 'rgba(255,255,255,.06)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)' }}
              >
                <div className="text-center">
                  <div className="text-xl font-extrabold text-teal">73%</div>
                  <div className="text-[10px] text-white/40 uppercase font-medium mt-0.5" style={{ letterSpacing: '.08em' }}>Use Stock Creative</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-extrabold text-teal">0</div>
                  <div className="text-[10px] text-white/40 uppercase font-medium mt-0.5" style={{ letterSpacing: '.08em' }}>Location-Level Data</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-extrabold text-teal">?</div>
                  <div className="text-[10px] text-white/40 uppercase font-medium mt-0.5" style={{ letterSpacing: '.08em' }}>ROI Visibility</div>
                </div>
              </div>
              <div className="text-[11px] text-white/20 mt-6">Industry benchmarks across 100s of franchise locations</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
