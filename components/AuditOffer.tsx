import { auditCTA } from '@/lib/site';

const features = [
  {
    icon: '✓',
    title: 'Full Campaign Structure Review',
    description: 'We dig into your existing ads, creatives, audiences, and targeting',
  },
  {
    icon: '✓',
    title: 'Creative vs. UGC Analysis',
    description: 'We compare your current creative performance against what UGC could do',
  },
  {
    icon: '✓',
    title: '3+ Actionable Improvements',
    description: 'You leave with specific changes you can implement immediately',
  },
  {
    icon: '$',
    title: '$100 Gift Card Guarantee',
    description: "If we can’t find at least 3 improvements, we send you a $100 gift card",
  },
];

export default function AuditOffer() {
  return (
    <section className="py-20 px-6 bg-wh">
      <div className="mx">
        <div
          className="max-w-[1100px] mx-auto rounded-[22px] p-10 md:p-14 relative overflow-hidden border"
          style={{
            background: 'linear-gradient(135deg, #0F1314 0%, #1D2637 100%)',
            borderColor: 'rgba(0,190,157,.2)',
            boxShadow: '0 30px 80px rgba(0,0,0,.15)',
          }}
        >
          <div
            className="absolute -top-20 -right-20 w-[300px] h-[300px] pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(0,190,157,.15) 0%, transparent 70%)' }}
          />
          <div className="grid md:grid-cols-[1.2fr_1fr] grid-cols-1 gap-12 items-center relative z-[1]">
            <div>
              <div
                className="stag inline-block mb-5"
                style={{ color: '#fff', background: 'rgba(0,190,157,.15)', borderColor: 'rgba(0,190,157,.35)', padding: '4px 12px', borderRadius: 100, border: '1px solid' }}
              >
                Free for Franchise Brands
              </div>
              <h2 className="font-extrabold text-white mb-3.5 leading-[1.15]" style={{ fontSize: 'clamp(28px,3.5vw,42px)', letterSpacing: '-.02em' }}>
                Get Your Free Franchise Lead Engine Audit
              </h2>
              <p className="text-lg text-teal font-extrabold mb-3.5" style={{ letterSpacing: '-.01em' }}>
                45 minutes. 3+ improvements. $100 gift card guarantee.
              </p>
              <p className="text-[15px] leading-relaxed font-medium text-white/70">
                We&apos;ll screen-share your ad accounts, review your campaigns, and give you specific, actionable improvements. If we can&apos;t find at least 3, we send you $100.
                <br />
                No pitch unless you ask.
              </p>
              <a href={auditCTA.href} className="bp bpl mt-6 inline-flex">
                Book Your Free Audit Now →
              </a>
            </div>
            <div className="flex flex-col gap-3">
              {features.map(f => (
                <div
                  key={f.title}
                  className="flex gap-3.5 p-4 rounded-s items-start"
                  style={{ background: 'rgba(255,255,255,.04)', border: '1px solid rgba(255,255,255,.08)' }}
                >
                  <div className="w-[26px] h-[26px] rounded-full bg-teal text-dk flex items-center justify-center text-[13px] font-extrabold flex-shrink-0">
                    {f.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-extrabold text-white mb-0.5 leading-tight" style={{ letterSpacing: '-.01em' }}>
                      {f.title}
                    </div>
                    <div className="text-xs leading-snug font-medium text-white/60">{f.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
