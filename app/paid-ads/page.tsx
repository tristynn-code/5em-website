import type { Metadata } from 'next';
import ServicePageLayout from '@/components/ServicePageLayout';
import data from '@/content/services/paid-ads.json';
import JsonLd from '@/components/JsonLd';
import { pageMetadata } from '@/lib/seo';
import { serviceSchema, breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = pageMetadata({
  title: 'Franchise Paid Ads Management | Meta & Google Ads for Franchises',
  description:
    'Hyper-local Meta and Google Ads management for franchise brands. Every location gets its own targeting strategy, UGC creative pipeline, and real-time performance dashboard.',
  path: '/paid-ads',
  keywords: ['franchise paid ads', 'Meta ads for franchises', 'Google ads for franchises', 'franchise PPC', 'multi-location ad management', 'franchise CPL'],
});

const serviceLd = serviceSchema({
  name: 'Franchise Paid Ads Management',
  description:
    'Hyper-local Meta and Google Ads management for franchise brands across every market.',
  path: '/paid-ads',
  serviceType: 'Paid Advertising Management',
});

/* ============ MOCKUPS (specific to Paid Ads) ============ */

function HeroDashMockup() {
  const rows = [
    { name: 'Phoenix, AZ', width: '92%', val: '$9.40' },
    { name: 'Austin, TX', width: '88%', val: '$11.20' },
    { name: 'Dallas, TX', width: '82%', val: '$13.80' },
    { name: 'Miami, FL', width: '76%', val: '$15.60' },
  ];
  return (
    <div
      className="w-full"
      style={{
        maxWidth: 460,
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: 24,
        padding: 24,
      }}
    >
      <div
        className="flex justify-between items-center pb-4 mb-4"
        style={{ borderBottom: '1px solid rgba(255,255,255,.08)' }}
      >
        <div className="text-white font-extrabold text-sm" style={{ letterSpacing: '-.01em' }}>
          Network CPL
        </div>
        <div
          className="text-xs font-semibold"
          style={{
            color: 'rgba(255,255,255,.7)',
            background: 'rgba(255,255,255,.08)',
            border: '1px solid rgba(255,255,255,.12)',
            padding: '4px 10px',
            borderRadius: 6,
            fontSize: 11,
          }}
        >
          Last 30 days
        </div>
      </div>
      {rows.map((r, i) => (
        <div
          key={i}
          className="grid items-center gap-3 mb-3"
          style={{ gridTemplateColumns: '1fr 2fr auto' }}
        >
          <div className="text-white text-xs font-semibold">{r.name}</div>
          <div
            className="h-2 rounded overflow-hidden"
            style={{ background: 'rgba(255,255,255,.08)' }}
          >
            <div className="h-full bg-teal rounded" style={{ width: r.width }} />
          </div>
          <div className="text-teal text-[13px] font-bold tabular-nums">{r.val}</div>
        </div>
      ))}
    </div>
  );
}

function MockupGeo() {
  return (
    <div
      className="w-full bg-wh"
      style={{
        maxWidth: 420,
        border: '1px solid rgba(0,0,0,.07)',
        borderRadius: 24,
        padding: 20,
        boxShadow: '0 12px 40px rgba(0,0,0,.06)',
      }}
    >
      <div
        className="flex justify-between items-center mb-4 pb-3"
        style={{ borderBottom: '1px solid rgba(0,0,0,.07)' }}
      >
        <div className="text-tx font-extrabold text-sm" style={{ letterSpacing: '-.01em' }}>
          Location Targeting
        </div>
        <div
          className="text-teal font-bold"
          style={{
            fontSize: 11,
            background: 'rgba(0,190,157,.06)',
            border: '1px solid rgba(0,190,157,.15)',
            padding: '4px 10px',
            borderRadius: 6,
          }}
        >
          3-mile radius
        </div>
      </div>
      <div
        className="relative mb-4 overflow-hidden"
        style={{
          aspectRatio: '4/3',
          background:
            'repeating-linear-gradient(0deg,#f5f5f5 0,#f5f5f5 1px,transparent 1px,transparent 28px),repeating-linear-gradient(90deg,#f5f5f5 0,#f5f5f5 1px,transparent 1px,transparent 28px),#fafafa',
          borderRadius: 10,
          border: '1px solid rgba(0,0,0,.07)',
        }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center" style={{ width: '80%', height: '80%' }}>
          <div
            className="w-[18px] h-[18px] rounded-full absolute z-[3] bg-teal"
            style={{ boxShadow: '0 0 0 4px rgba(0,190,157,.25)' }}
          />
          <div
            className="absolute rounded-full"
            style={{
              border: '2px solid #00BE9D',
              opacity: 0.3,
              width: '40%',
              height: '40%',
            }}
          />
          <div
            className="absolute rounded-full"
            style={{
              border: '2px solid #00BE9D',
              opacity: 0.18,
              width: '65%',
              height: '65%',
            }}
          />
          <div
            className="absolute rounded-full"
            style={{
              border: '2px solid #00BE9D',
              opacity: 0.1,
              width: '95%',
              height: '95%',
              background: 'rgba(0,190,157,.05)',
            }}
          />
        </div>
        <div className="absolute text-[18px] opacity-50" style={{ top: '20%', left: '28%', filter: 'grayscale(1) brightness(0.3)' }}>📍</div>
        <div className="absolute text-[18px] opacity-50" style={{ top: '35%', left: '68%', filter: 'grayscale(1) brightness(0.3)' }}>📍</div>
        <div className="absolute text-[18px] opacity-50" style={{ top: '62%', left: '22%', filter: 'grayscale(1) brightness(0.3)' }}>📍</div>
        <div className="absolute text-[18px] opacity-50" style={{ top: '70%', left: '75%', filter: 'grayscale(1) brightness(0.3)' }}>📍</div>
        <div className="absolute text-[18px] text-teal" style={{ top: '45%', left: '48%' }}>📍</div>
      </div>
      <div className="grid grid-cols-3 gap-2.5">
        {[
          { val: '24,800', lbl: 'In radius' },
          { val: '18-54', lbl: 'Age range' },
          { val: '$85K+', lbl: 'HH income' },
        ].map((s, i) => (
          <div
            key={i}
            className="text-center"
            style={{
              padding: '10px 8px',
              background: '#F7F7F7',
              borderRadius: 8,
              border: '1px solid rgba(0,0,0,.07)',
            }}
          >
            <div className="font-extrabold text-tx" style={{ fontSize: 16, letterSpacing: '-.02em', lineHeight: 1 }}>
              {s.val}
            </div>
            <div
              className="text-tx-3 font-bold uppercase mt-1"
              style={{ fontSize: 10, letterSpacing: '.05em' }}
            >
              {s.lbl}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function MockupPhoneReel() {
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
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg,#00be9d,#1D2637)' }} />
        <div
          className="absolute flex justify-between items-center z-[2]"
          style={{ top: 50, left: 12, right: 12 }}
        >
          <div className="flex items-center gap-2 text-white text-[11px] font-semibold">
            <div
              className="w-7 h-7 rounded-full"
              style={{
                background: 'linear-gradient(135deg,#00be9d,#006a5a)',
                border: '2px solid white',
              }}
            />
            <span>franchisee_local</span>
          </div>
          <div
            className="text-[9px] font-bold"
            style={{
              background: '#00BE9D',
              color: '#0F1314',
              padding: '3px 8px',
              borderRadius: 4,
              letterSpacing: '.05em',
            }}
          >
            ✓ UGC
          </div>
        </div>
        <div
          className="absolute text-white text-[12px] font-medium z-[2]"
          style={{
            bottom: 80,
            left: 14,
            right: 60,
            lineHeight: 1.4,
            textShadow: '0 1px 4px rgba(0,0,0,.5)',
          }}
        >
          This is what 6 weeks at our studio looks like — results like this are why I love what we do 💪
        </div>
        <div
          className="absolute z-[2]"
          style={{ bottom: 20, left: 14, right: 14 }}
        >
          <div
            className="flex gap-4 text-white text-[11px] font-semibold"
            style={{ textShadow: '0 1px 4px rgba(0,0,0,.5)' }}
          >
            <span>❤️ 14.2K</span>
            <span>💬 512</span>
            <span>↗ 3.1K</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function MockupInsight() {
  const kpis = [
    { lbl: 'Network CPL', val: '$12.40', delta: '↓ 18%', good: true },
    { lbl: 'Leads / Mo', val: '2,847', delta: '↑ 24%', good: true },
    { lbl: 'Show Rate', val: '68%', delta: '↑ 6%', good: true },
    { lbl: 'Active Creatives', val: '142', delta: '8 new', good: false },
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
      <div
        className="flex justify-between items-center mb-4 pb-3.5"
        style={{ borderBottom: '1px solid rgba(0,0,0,.07)' }}
      >
        <div className="text-tx font-extrabold text-sm">5E Insight Engine</div>
        <div className="flex items-center gap-1.5 text-teal font-bold text-[11px]">
          <span className="w-2 h-2 rounded-full bg-teal animate-pu" />
          Live
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2.5 mb-3.5">
        {kpis.map((k, i) => (
          <div
            key={i}
            style={{
              padding: 14,
              background: '#F7F7F7',
              border: '1px solid rgba(0,0,0,.07)',
              borderRadius: 10,
            }}
          >
            <div
              className="text-tx-3 font-bold uppercase mb-1.5"
              style={{ fontSize: 10, letterSpacing: '.05em' }}
            >
              {k.lbl}
            </div>
            <div className="text-tx font-extrabold" style={{ fontSize: 22, letterSpacing: '-.02em', lineHeight: 1, marginBottom: 6 }}>
              {k.val}
            </div>
            <div className={`text-[11px] font-bold ${k.good ? 'text-teal' : 'text-tx-3'}`}>
              {k.delta}
            </div>
          </div>
        ))}
      </div>
      <div
        className="flex items-center gap-2 text-tx text-xs font-semibold"
        style={{
          padding: '10px 14px',
          background: 'rgba(0,190,157,.06)',
          border: '1px solid rgba(0,190,157,.15)',
          borderRadius: 8,
        }}
      >
        <span className="text-teal">✓</span>
        <span>Top creative: UGC-047 outperforming network by 42%</span>
      </div>
    </div>
  );
}

function MockupRouting() {
  const steps = [
    { icon: '📈', name: 'New lead: Sarah M.', meta: 'Zip 78704 · 0:00', tealBg: false },
    { icon: '🏨', name: 'Matched: Austin South', meta: 'Location CRM · 0:02', tealBg: true },
    { icon: '📱', name: 'SMS sent to location', meta: 'Team notified · 0:04', tealBg: true },
    { icon: '✓', name: 'Call made to lead', meta: 'Response time: 47s', done: true },
  ];
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
      <div className="text-tx font-extrabold text-sm" style={{ letterSpacing: '-.01em' }}>
        Lead Routing
      </div>
      <div className="text-tx-3 text-[11px] mb-4">Last 60 seconds</div>
      <div className="flex flex-col gap-0">
        {steps.map((s, i) => (
          <div key={i}>
            <div
              className="flex items-center gap-3"
              style={{
                padding: '10px 14px',
                background: '#F7F7F7',
                border: '1px solid rgba(0,0,0,.07)',
                borderRadius: 10,
              }}
            >
              <div
                className="rounded-full flex items-center justify-center text-base flex-shrink-0"
                style={{
                  width: 36,
                  height: 36,
                  background: s.done ? '#00BE9D' : s.tealBg ? 'rgba(0,190,157,.06)' : '#fff',
                  color: s.done ? '#0F1314' : s.tealBg ? '#00BE9D' : 'inherit',
                  border: s.done ? '1px solid #00BE9D' : s.tealBg ? '1px solid rgba(0,190,157,.15)' : '1px solid rgba(0,0,0,.07)',
                }}
              >
                {s.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div
                  className={`text-[13px] font-bold leading-tight ${s.done ? 'text-teal' : 'text-tx'}`}
                  style={{ letterSpacing: '-.01em' }}
                >
                  {s.name}
                </div>
                <div className="text-tx-3 text-[11px] mt-0.5">{s.meta}</div>
              </div>
            </div>
            {i < steps.length - 1 && (
              <div className="w-0.5 h-2.5 ml-[31px] bg-bd" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function MockupCSM() {
  return (
    <div
      className="w-full bg-wh"
      style={{
        maxWidth: 400,
        border: '1px solid rgba(0,0,0,.07)',
        borderRadius: 24,
        padding: 20,
        boxShadow: '0 12px 40px rgba(0,0,0,.06)',
      }}
    >
      <div
        className="flex items-center gap-3 pb-3.5 mb-3.5"
        style={{ borderBottom: '1px solid rgba(0,0,0,.07)' }}
      >
        <div
          className="w-10 h-10 rounded-full flex-shrink-0"
          style={{ background: 'linear-gradient(135deg,#00be9d,#1D2637)' }}
        />
        <div className="flex-1">
          <div className="text-tx font-extrabold text-sm" style={{ letterSpacing: '-.01em' }}>
            Justin Flores
          </div>
          <div className="text-tx-3 text-[11px] mt-0.5">Head of Client Success</div>
        </div>
        <div className="flex items-center gap-1.5 text-teal font-bold text-[11px]">
          <span className="w-2 h-2 rounded-full bg-teal animate-pu" />
          Online
        </div>
      </div>
      <div className="flex flex-col gap-2.5">
        <div className="flex flex-col self-start" style={{ maxWidth: '85%' }}>
          <div
            className="text-tx text-[13px]"
            style={{
              padding: '10px 14px',
              background: '#F7F7F7',
              border: '1px solid rgba(0,0,0,.07)',
              borderRadius: '14px 14px 14px 4px',
              lineHeight: 1.4,
            }}
          >
            Hey, wrapped your weekly Loom — CPL down another 12% this week. UGC-047 is still crushing it.
          </div>
          <div className="text-tx-3 mt-1 px-1" style={{ fontSize: 10 }}>9:42 AM</div>
        </div>
        <div className="flex flex-col self-end" style={{ maxWidth: '85%' }}>
          <div
            className="text-tx text-[13px]"
            style={{
              padding: '10px 14px',
              background: 'rgba(0,190,157,.06)',
              border: '1px solid rgba(0,190,157,.15)',
              borderRadius: '14px 14px 4px 14px',
              lineHeight: 1.4,
            }}
          >
            Awesome. Can we push more budget there?
          </div>
          <div className="text-tx-3 mt-1 px-1 text-right" style={{ fontSize: 10 }}>9:44 AM</div>
        </div>
        <div className="flex flex-col self-start" style={{ maxWidth: '85%' }}>
          <div
            className="text-tx text-[13px]"
            style={{
              padding: '10px 14px',
              background: '#F7F7F7',
              border: '1px solid rgba(0,0,0,.07)',
              borderRadius: '14px 14px 14px 4px',
              lineHeight: 1.4,
            }}
          >
            Already scaled +30% overnight. New Loom dropping Friday with the plan for next week.
          </div>
          <div className="text-tx-3 mt-1 px-1" style={{ fontSize: 10 }}>9:45 AM</div>
        </div>
      </div>
    </div>
  );
}

function MockupTimeline() {
  const events = [
    { time: '0:00', label: 'Form submitted', state: 'inactive' as const },
    { time: '0:03', label: 'SMS auto-sent · "Thanks Sarah, book here..."', state: 'active' as const },
    { time: '0:47', label: 'Lead replies · "What times are open?"', state: 'active' as const },
    { time: '1:12', label: 'Booking link delivered', state: 'active' as const },
    { time: '2:38', label: 'Appointment booked ✓', state: 'booked' as const },
  ];
  return (
    <div
      className="w-full bg-wh"
      style={{
        maxWidth: 420,
        border: '1px solid rgba(0,0,0,.07)',
        borderRadius: 24,
        padding: 28,
        boxShadow: '0 12px 40px rgba(0,0,0,.06)',
      }}
    >
      <div
        className="text-tx font-extrabold text-sm pb-3.5 mb-3.5"
        style={{
          letterSpacing: '-.01em',
          borderBottom: '1px solid rgba(0,0,0,.07)',
        }}
      >
        Speed-to-Lead Timeline
      </div>
      <div className="flex flex-col gap-4">
        {events.map((e, i) => (
          <div key={i} className="grid items-start gap-3" style={{ gridTemplateColumns: '48px 16px 1fr' }}>
            <div className="text-teal font-bold tabular-nums text-[11px]" style={{ letterSpacing: '.02em' }}>
              {e.time}
            </div>
            <div
              className="rounded-full justify-self-center"
              style={{
                width: 10,
                height: 10,
                background: e.state === 'inactive' ? '#F7F7F7' : '#00BE9D',
                border: '2px solid',
                borderColor: e.state === 'inactive' ? 'rgba(0,0,0,.07)' : '#00BE9D',
                boxShadow: e.state === 'booked' ? '0 0 0 4px rgba(0,190,157,.2)' : undefined,
                marginTop: 4,
              }}
            />
            <div
              className={`text-xs font-medium ${e.state === 'booked' ? 'text-teal font-bold' : 'text-tx'}`}
            >
              {e.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function PlatformsStrip() {
  return (
    <section className="text-center bg-wh" style={{ padding: '0 24px 60px' }}>
      <div className="mx max-w-mx mx-auto">
        <div
          className="max-w-[900px] mx-auto"
          style={{ paddingTop: 20, borderTop: '1px solid rgba(0,0,0,.07)' }}
        >
          <div className="stag inline-block" style={{ marginTop: 32 }}>
            Platforms We Manage
          </div>
          <h3
            className="font-extrabold text-tx"
            style={{
              fontSize: 'clamp(22px,3vw,28px)',
              letterSpacing: '-.02em',
              margin: '8px 0 32px',
              lineHeight: 1.2,
            }}
          >
            We Run Ads Where Your Customers Are
          </h3>
          <div
            className="flex items-center justify-center flex-wrap"
            style={{ gap: 'clamp(48px,10vw,112px)', padding: 24 }}
          >
            <img
              src="https://assets.cdn.filesafe.space/Bvl8985Bn5drFTi6qZJM/media/69d56b88f5ebf27de323dfde.svg"
              alt="Meta"
              style={{ height: 80, maxWidth: '100%' }}
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Google_Ads_logo.svg"
              alt="Google Ads"
              style={{ height: 104, maxWidth: '100%' }}
            />
            <img
              src="https://assets.cdn.filesafe.space/Bvl8985Bn5drFTi6qZJM/media/69d56c5cebf1a608430ee619.svg"
              alt="TikTok"
              style={{ height: 80, maxWidth: '100%' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default function PaidAdsPage() {
  const features = data.features.map((f, i) => ({
    ...f,
    visual: [<MockupGeo key="0" />, <MockupPhoneReel key="1" />, <MockupInsight key="2" />, <MockupRouting key="3" />, <MockupCSM key="4" />, <MockupTimeline key="5" />][i],
  }));

  return (
    <>
      <JsonLd data={serviceLd} />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Services', path: '/paid-ads' },
          { name: 'Paid Ads', path: '/paid-ads' },
        ])}
      />
      <ServicePageLayout
        hero={{
          eyebrow: data.hero.eyebrow,
          headline: (
            <>
              Every Location.<br />
              <em className="not-italic text-teal">Optimized.</em>
            </>
          ),
          sub: data.hero.sub,
          visual: <HeroDashMockup />,
        }}
        why={data.why}
        introHeader={data.introHeader}
        beforeFeatures={<PlatformsStrip />}
        features={features}
        testimonial={data.testimonial}
        cta={data.cta}
      />
    </>
  );
}
