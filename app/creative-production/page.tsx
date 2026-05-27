import type { Metadata } from 'next';
import ServicePageLayout from '@/components/ServicePageLayout';
import data from '@/content/services/creative-production.json';

export const metadata: Metadata = {
  title: 'Franchise Social Media & Creative Production | UGC Content for Franchises | 5th Element Media',
  description:
    'Social media management and UGC content production for franchise brands. UGC outperforms stock creative by 30-50% on CPL. We brief, coach, edit, and deploy authentic content for every location.',
};

/* === Hero: floating social cards === */
function HeroSocialCards() {
  const Card = ({
    name,
    platform,
    avatarGrad,
    rotation,
    type,
    stats,
    style,
    videoUrl,
  }: {
    name: string;
    platform: string;
    avatarGrad: string;
    rotation: number;
    type: string;
    stats: string[];
    style: React.CSSProperties;
    videoUrl: string;
  }) => (
    <div
      className="absolute bg-wh overflow-hidden"
      style={{
        width: 200,
        borderRadius: 16,
        boxShadow: '0 24px 60px rgba(0,0,0,.12), 0 8px 24px rgba(0,0,0,.08)',
        border: '1px solid rgba(0,0,0,.05)',
        transform: `rotate(${rotation}deg)`,
        ...style,
      }}
    >
      <div
        className="flex items-center gap-2"
        style={{ padding: '10px 12px', borderBottom: '1px solid rgba(0,0,0,.07)' }}
      >
        <div className="w-7 h-7 rounded-full flex-shrink-0" style={{ background: avatarGrad }} />
        <div className="flex-1 min-w-0">
          <div className="text-tx font-extrabold text-[11px] truncate" style={{ letterSpacing: '-.01em' }}>
            {name}
          </div>
          <div className="text-teal font-bold text-[9px] uppercase" style={{ letterSpacing: '.05em' }}>
            {platform}
          </div>
        </div>
      </div>
      <div
        className="relative flex items-end p-2.5"
        style={{ aspectRatio: '9/14', background: '#000' }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover z-[1]"
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
        <div
          className="absolute inset-0 z-[2] pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at center 70%,rgba(0,0,0,.15),transparent)',
          }}
        />
        <span
          className="relative z-[3] text-white text-[9px] font-extrabold uppercase"
          style={{
            background: 'rgba(0,0,0,.5)',
            backdropFilter: 'blur(6px)',
            padding: '3px 8px',
            borderRadius: 4,
            letterSpacing: '.08em',
          }}
        >
          {type}
        </span>
      </div>
      <div className="flex gap-2.5 text-tx-3 font-bold text-[10px]" style={{ padding: '10px 12px' }}>
        {stats.map((s, i) => (
          <span key={i}>{s}</span>
        ))}
      </div>
    </div>
  );
  return (
    <div className="relative w-full" style={{ minHeight: 460 }}>
      <Card
        name="body20"
        platform="Instagram"
        avatarGrad="linear-gradient(135deg,#c1272d,#8b1a1f)"
        rotation={-7}
        type="REEL"
        stats={['❤️ 14.2K', '💬 642']}
        style={{ top: '0%', left: '-4%', zIndex: 2 }}
        videoUrl="https://assets.cdn.filesafe.space/Bvl8985Bn5drFTi6qZJM/media/69b60302eaf0812a8e6b30a8.mp4"
      />
      <Card
        name="imagestudios"
        platform="TikTok"
        avatarGrad="linear-gradient(135deg,#e8c4b8,#a67c65)"
        rotation={6}
        type="UGC"
        stats={['❤️ 8.4K', '↗ 2.1K']}
        style={{ top: '8%', right: '-4%', zIndex: 3 }}
        videoUrl="https://assets.cdn.filesafe.space/Bvl8985Bn5drFTi6qZJM/media/69e57b642c135a8c83713667.mov"
      />
      <Card
        name="pilates.addiction"
        platform="Facebook"
        avatarGrad="linear-gradient(135deg,#00be9d,#006a5a)"
        rotation={-3}
        type="UGC"
        stats={['❤️ 5.8K', '↗ 1.4K']}
        style={{ bottom: '-2%', left: '30%', zIndex: 1 }}
        videoUrl="https://assets.cdn.filesafe.space/Bvl8985Bn5drFTi6qZJM/media/69e57aca2c135a8c83711652.mov"
      />
    </div>
  );
}

function BridgeSection() {
  return (
    <section className="bg-wh" style={{ padding: '100px 24px' }}>
      <div className="mx max-w-mx mx-auto">
        <div className="max-w-[920px] mx-auto">
          <div className="stag inline-block mb-3">{data.bridge.eyebrow}</div>
          <h2 className="sttl mb-5">
            Social Media Is the Lab.
            <br />
            Paid Ads Are the Scale.
          </h2>
          <p
            className="text-tx-2 mb-10"
            style={{ fontSize: 'clamp(16px,1.7vw,18px)', lineHeight: 1.65, fontWeight: 500 }}
          >
            {data.bridge.body}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {data.bridge.cards.map((c, i) => (
              <div
                key={i}
                className="relative transition-all"
                style={{
                  padding: 28,
                  background: '#F7F7F7',
                  border: '1px solid rgba(0,0,0,.07)',
                  borderRadius: 24,
                }}
              >
                <div
                  className="absolute font-extrabold text-teal"
                  style={{
                    top: 20,
                    right: 24,
                    fontSize: 48,
                    opacity: 0.15,
                    letterSpacing: '-.04em',
                    lineHeight: 1,
                  }}
                >
                  {c.num}
                </div>
                <div
                  className="text-tx font-extrabold mb-2.5"
                  style={{
                    fontSize: 18,
                    letterSpacing: '-.02em',
                    lineHeight: 1.25,
                    paddingRight: 40,
                  }}
                >
                  {c.title}
                </div>
                <div className="text-tx-2 text-sm font-medium" style={{ lineHeight: 1.6 }}>
                  {c.body}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function MockupPhoneUGC() {
  return (
    <div
      className="relative"
      style={{
        width: 260,
        aspectRatio: '9/19',
        background: '#111',
        borderRadius: 36,
        padding: 10,
        boxShadow: '0 24px 60px rgba(0,0,0,.25)',
        border: '2px solid #2a2a2a',
      }}
    >
      <div
        className="absolute z-[2]"
        style={{
          top: 18,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 100,
          height: 22,
          background: '#000',
          borderRadius: 12,
        }}
      />
      <div
        className="w-full h-full overflow-hidden relative bg-black"
        style={{ borderRadius: 28 }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover z-[1]"
        >
          <source
            src="https://assets.cdn.filesafe.space/Bvl8985Bn5drFTi6qZJM/media/69e57ccc8696a78b8d3ce33f.mp4"
            type="video/mp4"
          />
        </video>
        <div
          className="absolute inset-0 z-[2] pointer-events-none"
          style={{
            background:
              'linear-gradient(180deg,rgba(0,0,0,.4) 0%,rgba(0,0,0,0) 20%,rgba(0,0,0,0) 55%,rgba(0,0,0,.7) 100%)',
          }}
        />
        <div
          className="absolute z-[5] flex justify-between items-center text-white"
          style={{ top: 0, left: 0, right: 0, padding: '14px 14px 10px' }}
        >
          <div className="font-bold" style={{ fontSize: 20, letterSpacing: '-.02em', textShadow: '0 1px 3px rgba(0,0,0,.4)' }}>
            Reels
          </div>
          <div style={{ fontSize: 20, textShadow: '0 1px 3px rgba(0,0,0,.4)' }}>☰</div>
        </div>
        <div
          className="absolute z-[5] flex flex-col gap-4 items-center"
          style={{ right: 10, bottom: 90 }}
        >
          {[
            ['❤', '24.8K'],
            ['💬', '842'],
            ['↗', '5.2K'],
          ].map(([icon, lbl], i) => (
            <div key={i} className="flex flex-col items-center" style={{ gap: 3 }}>
              <div className="text-white text-[22px]" style={{ textShadow: '0 1px 3px rgba(0,0,0,.5)', lineHeight: 1 }}>
                {icon}
              </div>
              <div className="text-white font-bold text-[10px]" style={{ textShadow: '0 1px 3px rgba(0,0,0,.5)' }}>
                {lbl}
              </div>
            </div>
          ))}
        </div>
        <div
          className="absolute text-white z-[5]"
          style={{ left: 0, right: 60, bottom: 16, padding: '0 14px' }}
        >
          <div className="flex items-center gap-2 mb-2">
            <div
              className="w-6 h-6 rounded-full flex-shrink-0"
              style={{
                background: 'linear-gradient(135deg,#00be9d,#1D2637)',
                border: '1.5px solid #fff',
              }}
            />
            <div className="font-bold text-[13px]" style={{ textShadow: '0 1px 3px rgba(0,0,0,.5)' }}>
              imagestudios
            </div>
            <div
              className="font-bold text-[12px] ml-1"
              style={{
                padding: '3px 12px',
                border: '1.5px solid #fff',
                borderRadius: 6,
                textShadow: '0 1px 3px rgba(0,0,0,.5)',
              }}
            >
              Follow
            </div>
          </div>
          <div
            className="text-[12px] mb-2"
            style={{
              lineHeight: 1.4,
              textShadow: '0 1px 3px rgba(0,0,0,.5)',
            }}
          >
            6 weeks in and the results speak for themselves 💪 <span className="opacity-70 font-semibold">...more</span>
          </div>
          <div className="flex items-center gap-1.5 text-[11px] opacity-90" style={{ textShadow: '0 1px 3px rgba(0,0,0,.5)' }}>
            <span>♪</span>
            <span className="font-medium">Original audio · imagestudios</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function MockupStaticAd() {
  return (
    <div
      className="relative overflow-hidden"
      style={{
        background: '#0f1314',
        border: '1px solid #1D2637',
        borderRadius: 24,
        padding: '28px 24px',
        width: '100%',
        maxWidth: 360,
        boxShadow: '0 20px 60px rgba(0,0,0,.3)',
      }}
    >
      <div className="relative pt-2.5 mb-5">
        <div className="absolute h-[3px] bg-teal" style={{ top: -28, left: -24, right: -24 }} />
        <div
          className="text-teal font-extrabold mb-2 uppercase"
          style={{ fontSize: 10, letterSpacing: '.12em' }}
        >
          INTERNAL SOP
        </div>
        <div className="text-white font-extrabold mb-2" style={{ fontSize: 22, letterSpacing: '-.02em', lineHeight: 1.15 }}>
          UGC Brief Template
        </div>
        <div style={{ fontSize: 12, color: '#6B7585', lineHeight: 1.4 }}>
          The exact format we use with 100+ franchise locations
        </div>
      </div>
      <div
        className="flex flex-col gap-2.5 py-4 mb-4"
        style={{
          borderTop: '1px solid rgba(255,255,255,.06)',
          borderBottom: '1px solid rgba(255,255,255,.06)',
        }}
      >
        {[
          '3 camera angles specified',
          'Hook script provided',
          'Lighting & audio notes',
          'Platform-specific formats',
        ].map((t, i) => (
          <div key={i} className="flex items-center gap-2.5 text-white text-[13px] font-medium">
            <div
              className="rounded-full bg-teal flex items-center justify-center flex-shrink-0"
              style={{ width: 18, height: 18, color: '#0F1314', fontSize: 10, fontWeight: 800 }}
            >
              ✓
            </div>
            <span>{t}</span>
          </div>
        ))}
      </div>
      <div
        className="text-center mb-4"
        style={{
          padding: '12px 20px',
          background: '#00BE9D',
          color: '#0F1314',
          borderRadius: 8,
          fontSize: 13,
          fontWeight: 800,
          letterSpacing: '-.01em',
        }}
      >
        Get the Template →
      </div>
      <div className="text-center">
        <img
          src="https://assets.cdn.filesafe.space/Bvl8985Bn5drFTi6qZJM/media/69c61c1f9619acdae09d4701.svg"
          alt="BODY20"
          style={{ height: 14, filter: 'brightness(0) invert(1)', opacity: 0.45, display: 'inline-block' }}
        />
      </div>
    </div>
  );
}

function MockupCalendar() {
  const labels = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
  type DayCell = { d: string | number; kind?: 'ugc' | 'static' | 'reel' };
  const days: DayCell[] = [
    { d: '' }, { d: 3, kind: 'ugc' }, { d: 4 }, { d: 5, kind: 'static' }, { d: 6 }, { d: 7, kind: 'reel' }, { d: 8 },
    { d: 9 }, { d: 10, kind: 'ugc' }, { d: 11, kind: 'static' }, { d: 12 }, { d: 13, kind: 'reel' }, { d: 14, kind: 'ugc' }, { d: 15 },
    { d: 16 }, { d: 17, kind: 'static' }, { d: 18, kind: 'reel' }, { d: 19 }, { d: 20, kind: 'ugc' },
  ];
  const styleFor = (kind?: string) => {
    if (kind === 'ugc') return { background: 'rgba(0,190,157,.06)', borderColor: 'rgba(0,190,157,.15)', color: '#00BE9D' };
    if (kind === 'static') return { background: 'rgba(29,38,55,.08)', borderColor: 'rgba(29,38,55,.15)', color: '#1D2637' };
    if (kind === 'reel') return { background: 'rgba(239,159,39,.1)', borderColor: 'rgba(239,159,39,.2)', color: '#EF9F27' };
    return { background: '#F7F7F7', borderColor: 'rgba(0,0,0,.07)', color: '#777' };
  };
  return (
    <div
      className="w-full bg-wh"
      style={{
        maxWidth: 400,
        border: '1px solid rgba(0,0,0,.07)',
        borderRadius: 24,
        padding: 24,
        boxShadow: '0 12px 40px rgba(0,0,0,.06)',
      }}
    >
      <div
        className="flex justify-between items-baseline mb-4 pb-3.5"
        style={{ borderBottom: '1px solid rgba(0,0,0,.07)' }}
      >
        <div className="text-tx font-extrabold text-sm">Content Calendar</div>
        <div className="text-tx-3 text-[11px] font-semibold">February 2026</div>
      </div>
      <div className="grid grid-cols-7 gap-1.5 mb-4">
        {labels.map((l, i) => (
          <div
            key={i}
            className="aspect-square flex items-center justify-center text-tx-3 font-bold uppercase"
            style={{ fontSize: 10, letterSpacing: '.1em' }}
          >
            {l}
          </div>
        ))}
        {days.map((day, i) => (
          <div
            key={i}
            className="aspect-square flex items-center justify-center font-bold rounded text-xs"
            style={{
              ...styleFor(day.kind),
              border: '1px solid',
            }}
          >
            {day.d}
          </div>
        ))}
      </div>
      <div className="flex gap-3.5 pt-2 flex-wrap">
        {[
          { c: '#00BE9D', l: 'UGC Reel' },
          { c: '#1D2637', l: 'Static' },
          { c: '#EF9F27', l: 'Story' },
        ].map((s, i) => (
          <div key={i} className="flex items-center gap-1.5 text-tx-3 text-[11px] font-semibold">
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: s.c }} />
            {s.l}
          </div>
        ))}
      </div>
    </div>
  );
}

function MockupGuide() {
  return (
    <div
      className="w-full bg-wh"
      style={{
        maxWidth: 400,
        border: '1px solid rgba(0,0,0,.07)',
        borderRadius: 24,
        padding: 24,
        boxShadow: '0 12px 40px rgba(0,0,0,.06)',
      }}
    >
      <div
        className="flex items-center gap-3.5 pb-4 mb-4"
        style={{ borderBottom: '1px solid rgba(0,0,0,.07)' }}
      >
        <div
          className="w-11 h-11 flex items-center justify-center flex-shrink-0 text-xl"
          style={{
            background: 'rgba(0,190,157,.06)',
            border: '1px solid rgba(0,190,157,.15)',
            borderRadius: 10,
          }}
        >
          📚
        </div>
        <div className="flex-1">
          <div className="text-tx font-extrabold text-[15px]" style={{ letterSpacing: '-.01em' }}>
            Content Guide v2.4
          </div>
          <div className="text-tx-3 font-semibold mt-0.5 text-[11px]">Franchisee Onboarding</div>
        </div>
      </div>
      <div className="mb-4">
        <div className="h-1.5 bg-off rounded overflow-hidden mb-1.5">
          <div className="h-full bg-teal rounded" style={{ width: '68%' }} />
        </div>
        <div className="text-teal font-bold uppercase text-[10px]" style={{ letterSpacing: '.05em' }}>
          68% complete
        </div>
      </div>
      <div className="flex flex-col gap-2">
        {[
          { state: 'done', label: 'Module 1: Camera Angles & Framing' },
          { state: 'done', label: 'Module 2: Lighting Without Gear' },
          { state: 'done', label: 'Module 3: Hooks That Work' },
          { state: 'active', label: 'Module 4: Editing Fundamentals' },
          { state: 'locked', label: 'Module 5: Platform Formats' },
        ].map((m, i) => (
          <div
            key={i}
            className="flex items-center gap-2.5 text-xs font-semibold"
            style={{
              padding: '10px 12px',
              background:
                m.state === 'active' ? 'rgba(0,190,157,.06)' : '#F7F7F7',
              border:
                m.state === 'active'
                  ? '1px solid rgba(0,190,157,.15)'
                  : '1px solid rgba(0,0,0,.07)',
              borderRadius: 8,
              color: m.state === 'active' ? '#00BE9D' : m.state === 'done' ? '#1a1a1a' : '#777',
            }}
          >
            {m.state === 'done' && (
              <span
                className="rounded-full flex items-center justify-center flex-shrink-0"
                style={{ width: 18, height: 18, background: '#00BE9D', color: '#0F1314', fontSize: 10, fontWeight: 800 }}
              >
                ✓
              </span>
            )}
            {m.state === 'active' && (
              <span
                className="rounded-full flex items-center justify-center flex-shrink-0"
                style={{ width: 18, height: 18, background: '#00BE9D', color: '#0F1314', fontSize: 8, fontWeight: 800, paddingLeft: 2 }}
              >
                ▶
              </span>
            )}
            {m.state === 'locked' && (
              <span className="flex items-center justify-center flex-shrink-0 text-tx-3 opacity-50" style={{ width: 18, height: 18 }}>
                🔒
              </span>
            )}
            <span>{m.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function MockupTestimonialEngine() {
  const steps = [
    { icon: '📅', name: 'Day 14 · Quick win capture', meta: 'Auto-triggered · 847 this month', active: true, pulse: true },
    { icon: '🏆', name: 'Day 90 · Transformation capture', meta: 'Auto-triggered · 312 this month' },
    { icon: '💥', name: 'Big result moment', meta: 'Manual trigger · 94 this month' },
    { icon: '✓', name: '24 new ad clips deployed', meta: 'This week · across 8 locations', output: true },
  ];
  return (
    <div
      className="w-full bg-wh"
      style={{
        maxWidth: 420,
        border: '1px solid rgba(0,0,0,.07)',
        borderRadius: 24,
        padding: 24,
        boxShadow: '0 12px 40px rgba(0,0,0,.06)',
      }}
    >
      <div className="text-tx font-extrabold text-sm" style={{ letterSpacing: '-.01em' }}>
        Testimonial Engine
      </div>
      <div className="text-tx-3 text-[11px] mb-4">Active triggers</div>
      <div className="flex flex-col gap-2">
        {steps.map((s, i) => (
          <div
            key={i}
            className="relative flex items-center gap-3"
            style={{
              padding: '12px 14px',
              background: s.output
                ? 'rgba(0,190,157,.08)'
                : s.active
                ? 'rgba(0,190,157,.06)'
                : '#F7F7F7',
              border: s.output
                ? '1.5px solid #00BE9D'
                : s.active
                ? '1px solid rgba(0,190,157,.15)'
                : '1px solid rgba(0,0,0,.07)',
              borderRadius: 10,
            }}
          >
            <div
              className="rounded-full flex items-center justify-center flex-shrink-0 text-base"
              style={{
                width: 36,
                height: 36,
                background: s.output ? '#00BE9D' : '#fff',
                color: s.output ? '#0F1314' : 'inherit',
                border: s.output ? '1px solid #00BE9D' : '1px solid rgba(0,0,0,.07)',
              }}
            >
              {s.icon}
            </div>
            <div className="flex-1 min-w-0">
              <div
                className="font-bold leading-tight"
                style={{
                  fontSize: 13,
                  letterSpacing: '-.01em',
                  color: s.output ? '#00BE9D' : '#1a1a1a',
                }}
              >
                {s.name}
              </div>
              <div className="text-tx-3 text-[11px] mt-0.5">{s.meta}</div>
            </div>
            {s.pulse && <div className="w-2 h-2 rounded-full bg-teal animate-pu flex-shrink-0" />}
          </div>
        ))}
      </div>
    </div>
  );
}

function MockupCreativePerf() {
  const items = [
    { kind: 'top', thumb: 'linear-gradient(135deg,#00be9d,#006a5a)', label: 'UGC', name: 'UGC-047 · Member transformation', meta: '12,847 views · 4.2% CTR', score: 'A+' },
    { kind: 'normal', thumb: 'linear-gradient(135deg,#1D2637,#0f1314)', label: 'IMG', name: 'STAT-023 · Results breakdown', meta: '8,420 views · 3.1% CTR', score: 'A' },
    { kind: 'normal', thumb: 'linear-gradient(135deg,#4a7cbf,#2c4a78)', label: 'UGC', name: 'UGC-041 · Day-in-the-life', meta: '6,180 views · 2.8% CTR', score: 'B+' },
    { kind: 'fatigue', thumb: 'linear-gradient(135deg,#6B7585,#3D4654)', label: 'IMG', name: 'STAT-012 · Offer headline', meta: 'Fatigue flagged · replace', score: 'C', fatigue: true },
  ];
  return (
    <div
      className="w-full bg-wh"
      style={{
        maxWidth: 440,
        border: '1px solid rgba(0,0,0,.07)',
        borderRadius: 24,
        padding: 24,
        boxShadow: '0 12px 40px rgba(0,0,0,.06)',
      }}
    >
      <div
        className="flex justify-between items-center mb-4 pb-3.5"
        style={{ borderBottom: '1px solid rgba(0,0,0,.07)' }}
      >
        <div className="text-tx font-extrabold text-sm" style={{ letterSpacing: '-.01em' }}>
          Top Performing Creatives
        </div>
        <div className="text-tx-3 text-[11px] font-semibold">Last 30 days</div>
      </div>
      <div className="flex flex-col gap-2">
        {items.map((it, i) => (
          <div
            key={i}
            className="flex items-center gap-3"
            style={{
              padding: '10px 12px',
              background:
                it.kind === 'top'
                  ? 'rgba(0,190,157,.06)'
                  : it.kind === 'fatigue'
                  ? 'rgba(239,159,39,.04)'
                  : '#F7F7F7',
              border:
                it.kind === 'top'
                  ? '1px solid rgba(0,190,157,.15)'
                  : it.kind === 'fatigue'
                  ? '1px solid rgba(239,159,39,.2)'
                  : '1px solid rgba(0,0,0,.07)',
              borderRadius: 10,
            }}
          >
            <div
              className="rounded flex items-center justify-center flex-shrink-0 text-white font-extrabold"
              style={{
                width: 40,
                height: 40,
                background: it.thumb,
                fontSize: 9,
                letterSpacing: '.06em',
              }}
            >
              {it.label}
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-tx font-bold leading-tight text-xs" style={{ letterSpacing: '-.01em' }}>
                {it.name}
              </div>
              <div
                className="text-[11px] mt-0.5"
                style={{ color: it.fatigue ? '#EF9F27' : '#777' }}
              >
                {it.meta}
              </div>
            </div>
            <div className="flex-shrink-0">
              <div
                className="font-extrabold text-lg leading-none"
                style={{
                  letterSpacing: '-.02em',
                  color: it.fatigue ? '#EF9F27' : '#00BE9D',
                }}
              >
                {it.score}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function CreativeProductionPage() {
  const visuals = [
    <MockupPhoneUGC key="0" />,
    <MockupStaticAd key="1" />,
    <MockupCalendar key="2" />,
    <MockupGuide key="3" />,
    <MockupTestimonialEngine key="4" />,
    <MockupCreativePerf key="5" />,
  ];
  const features = data.features.map((f, i) => ({ ...f, visual: visuals[i] }));

  return (
    <ServicePageLayout
      hero={{
        eyebrow: data.hero.eyebrow,
        headline: (
          <>
            Organic Fuels<br />
            <em className="not-italic text-teal">Paid.</em>
          </>
        ),
        sub: data.hero.sub,
        visual: <HeroSocialCards />,
      }}
      why={data.why}
      introHeader={data.introHeader}
      beforeFeatures={<BridgeSection />}
      features={features}
      testimonial={data.testimonial}
      cta={data.cta}
    />
  );
}
