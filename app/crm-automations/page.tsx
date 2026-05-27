import type { Metadata } from 'next';
import ServicePageLayout from '@/components/ServicePageLayout';
import data from '@/content/services/crm-automations.json';

export const metadata: Metadata = {
  title: 'Franchise CRM & Marketing Automation | GoHighLevel for Franchises | 5th Element Media',
  description:
    'Franchise CRM and marketing automation built on GoHighLevel. Speed-to-lead workflows, pipeline management, and lead routing that keep every franchisee booked and every lead warm.',
};

function TimelineDark() {
  const events = [
    { time: '0:00', label: 'Form submitted', state: 'inactive' },
    { time: '0:03', label: 'SMS fired', state: 'active' },
    { time: '0:12', label: 'Email sent', state: 'active' },
    { time: '0:34', label: 'Lead replied', state: 'active' },
    { time: '0:47', label: 'Appointment booked ✓', state: 'booked' },
  ];
  return (
    <div
      className="w-full"
      style={{
        maxWidth: 400,
        background: 'rgba(255,255,255,.03)',
        border: '1px solid rgba(255,255,255,.08)',
        borderRadius: 16,
        padding: 24,
      }}
    >
      <div className="mb-4 pb-3.5" style={{ borderBottom: '1px solid rgba(255,255,255,.08)' }}>
        <div className="text-white font-extrabold text-sm" style={{ letterSpacing: '-.01em' }}>
          Speed-to-Lead Flow
        </div>
        <div style={{ fontSize: 11, color: 'rgba(255,255,255,.6)', marginTop: 2 }}>
          Triggered 0:00 → 0:47
        </div>
      </div>
      <div className="flex flex-col gap-3">
        {events.map((e, i) => (
          <div key={i} className="grid items-center gap-2.5" style={{ gridTemplateColumns: '48px 16px 1fr' }}>
            <div className="text-teal font-bold tabular-nums" style={{ fontSize: 11, letterSpacing: '.02em' }}>
              {e.time}
            </div>
            <div
              className="rounded-full justify-self-center"
              style={{
                width: 10,
                height: 10,
                background: e.state === 'inactive' ? 'rgba(255,255,255,.15)' : '#00BE9D',
                border:
                  e.state === 'inactive'
                    ? '2px solid rgba(255,255,255,.1)'
                    : '2px solid #00BE9D',
                boxShadow: e.state === 'booked' ? '0 0 0 4px rgba(0,190,157,.2)' : undefined,
              }}
            />
            <div
              className="font-medium text-xs"
              style={{
                color: e.state === 'booked' ? '#00BE9D' : 'rgba(255,255,255,.75)',
                fontWeight: e.state === 'booked' ? 700 : 500,
              }}
            >
              {e.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function MockupTimeline() {
  const events = [
    { time: '0:00', label: 'Form submitted', state: 'inactive' as const },
    { time: '0:03', label: 'SMS auto-sent · "Thanks Sarah..."', state: 'active' as const },
    { time: '0:12', label: 'Welcome email delivered', state: 'active' as const },
    { time: '0:47', label: 'Lead replied · "What times are open?"', state: 'active' as const },
    { time: '1:12', label: 'Booking link sent', state: 'active' as const },
    { time: '2:38', label: 'Appointment booked ✓', state: 'booked' as const },
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
      <div className="pb-3.5 mb-3.5" style={{ borderBottom: '1px solid rgba(0,0,0,.07)' }}>
        <div className="text-tx font-extrabold text-sm" style={{ letterSpacing: '-.01em' }}>
          Speed-to-Lead Timeline
        </div>
      </div>
      <div className="flex flex-col gap-3">
        {events.map((e, i) => (
          <div key={i} className="grid items-center gap-2.5" style={{ gridTemplateColumns: '48px 16px 1fr' }}>
            <div className="text-teal font-bold tabular-nums" style={{ fontSize: 11, letterSpacing: '.02em' }}>
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
              }}
            />
            <div
              className="text-xs font-medium"
              style={{ color: e.state === 'booked' ? '#00BE9D' : '#1a1a1a', fontWeight: e.state === 'booked' ? 700 : 500 }}
            >
              {e.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function MockupRoutingViz() {
  const steps = [
    { icon: '📈', name: 'New lead: Marcus T.', meta: 'Zip 73301 · 0:00' },
    { icon: '🏨', name: 'Matched: Austin South', meta: 'Location CRM · 0:02', teal: true },
    { icon: '📱', name: 'Team notified', meta: 'SMS + email + app · 0:04', teal: true },
    { icon: '✓', name: 'Response sent', meta: 'Front desk · 0:38', done: true },
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
      <div
        className="flex justify-between items-center mb-4 pb-3.5"
        style={{ borderBottom: '1px solid rgba(0,0,0,.07)' }}
      >
        <div className="text-tx font-extrabold text-sm" style={{ letterSpacing: '-.01em' }}>
          Lead Routing
        </div>
        <div className="flex items-center gap-1.5 text-teal font-bold text-[11px]">
          <span className="w-2 h-2 rounded-full bg-teal animate-pu" /> Live
        </div>
      </div>
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
                  background: s.done ? '#00BE9D' : s.teal ? 'rgba(0,190,157,.06)' : '#fff',
                  color: s.done ? '#0F1314' : s.teal ? '#00BE9D' : 'inherit',
                  border: s.done
                    ? '1px solid #00BE9D'
                    : s.teal
                    ? '1px solid rgba(0,190,157,.15)'
                    : '1px solid rgba(0,0,0,.07)',
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
            {i < steps.length - 1 && <div className="w-0.5 h-2.5 ml-[31px] bg-bd" />}
          </div>
        ))}
      </div>
    </div>
  );
}

function MockupKanban() {
  return (
    <div
      className="w-full bg-wh"
      style={{
        maxWidth: 440,
        border: '1px solid rgba(0,0,0,.07)',
        borderRadius: 24,
        padding: 20,
        boxShadow: '0 12px 40px rgba(0,0,0,.06)',
      }}
    >
      <div
        className="text-tx font-extrabold mb-3.5 pb-3"
        style={{ fontSize: 13, letterSpacing: '-.01em', borderBottom: '1px solid rgba(0,0,0,.07)' }}
      >
        Pipeline · This Week
      </div>
      <div className="grid grid-cols-3 gap-2.5">
        {[
          {
            name: 'New',
            count: '12',
            cards: [
              { name: 'Sarah M.', meta: 'Austin · Today' },
              { name: 'Kevin R.', meta: 'Denver · Today' },
              { ghost: true },
            ],
          },
          {
            name: 'Contacted',
            count: '8',
            cards: [
              { name: 'James L.', meta: 'Phoenix · 2d ago' },
              { name: 'Rachel W.', meta: 'Miami · Now', active: true },
            ],
          },
          {
            name: 'Booked',
            count: '24',
            tealCount: true,
            cards: [{ name: 'Maya P.', meta: 'Dallas · Fri 2pm', won: true }],
          },
        ].map((col, i) => (
          <div
            key={i}
            style={{ background: '#F7F7F7', borderRadius: 10, padding: 10, minHeight: 180 }}
          >
            <div
              className="flex justify-between items-center mb-2.5 pb-2"
              style={{ borderBottom: '1px solid rgba(0,0,0,.07)' }}
            >
              <span
                className="text-tx-3 font-bold uppercase"
                style={{ fontSize: 11, letterSpacing: '.05em' }}
              >
                {col.name}
              </span>
              <span
                className="font-extrabold text-center"
                style={{
                  fontSize: 12,
                  color: col.tealCount ? '#00BE9D' : '#1a1a1a',
                  background: col.tealCount ? 'rgba(0,190,157,.06)' : '#fff',
                  border: col.tealCount ? '1px solid rgba(0,190,157,.15)' : '1px solid rgba(0,0,0,.07)',
                  padding: '2px 8px',
                  borderRadius: 6,
                  minWidth: 28,
                }}
              >
                {col.count}
              </span>
            </div>
            {col.cards.map((c, j) =>
              c.ghost ? (
                <div
                  key={j}
                  style={{
                    height: 30,
                    background: 'transparent',
                    border: '1.5px dashed rgba(0,0,0,.07)',
                    borderRadius: 8,
                    opacity: 0.5,
                    marginBottom: 8,
                  }}
                />
              ) : (
                <div
                  key={j}
                  style={{
                    background: c.won ? 'rgba(0,190,157,.06)' : '#fff',
                    border: c.active
                      ? '1px solid #00BE9D'
                      : c.won
                      ? '1px solid rgba(0,190,157,.15)'
                      : '1px solid rgba(0,0,0,.07)',
                    borderRadius: 8,
                    padding: 10,
                    marginBottom: 8,
                    transform: c.active ? 'rotate(-1deg)' : undefined,
                    boxShadow: c.active ? '0 2px 12px rgba(0,190,157,.15)' : undefined,
                  }}
                >
                  <div className="text-tx font-bold text-xs" style={{ letterSpacing: '-.01em' }}>
                    {c.name}
                  </div>
                  <div className="text-tx-3 mt-0.5" style={{ fontSize: 10 }}>
                    {c.meta}
                  </div>
                </div>
              )
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function MockupNotify() {
  return (
    <div className="w-full flex justify-center" style={{ maxWidth: 320 }}>
      <div
        className="relative"
        style={{
          width: '100%',
          maxWidth: 280,
          background: '#0f1314',
          borderRadius: 32,
          padding: '14px 12px',
          boxShadow: '0 24px 60px rgba(0,0,0,.25)',
          border: '2px solid #2a2a2a',
        }}
      >
        <div
          className="flex justify-between items-center text-white font-bold"
          style={{ padding: '4px 14px 12px', fontSize: 11 }}
        >
          <div style={{ letterSpacing: '-.01em' }}>9:42</div>
          <div className="opacity-70" style={{ fontSize: 10 }}>📶 🔋</div>
        </div>
        {[
          { icon: '📱', iconBg: '#34c759', app: 'Messages', time: 'now', title: 'New Lead - Austin South', body: 'Sarah M. just submitted a form. Respond within 5 min.' },
          { icon: '#', iconBg: '#4a154b', app: 'Slack', time: 'now', title: '#austin-leads', body: '📈 New opportunity in pipeline — 5EM Bot', bold: true },
          { icon: '🏨', iconBg: '#00BE9D', iconColor: '#0F1314', app: 'LeadConnector', time: '1m ago', title: 'Pipeline Update', body: '1 new lead assigned to your queue' },
        ].map((n, i) => (
          <div
            key={i}
            className="flex gap-2.5 items-start mb-2"
            style={{
              background: 'rgba(255,255,255,.95)',
              borderRadius: 14,
              padding: '10px 12px',
              boxShadow: '0 2px 8px rgba(0,0,0,.1)',
            }}
          >
            <div
              className="rounded-lg flex items-center justify-center flex-shrink-0 text-white"
              style={{ width: 32, height: 32, background: n.iconBg, fontSize: 14, color: n.iconColor || '#fff', fontWeight: n.bold ? 800 : undefined }}
            >
              {n.icon}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-center mb-0.5">
                <span className="text-[#0f1314] font-bold" style={{ fontSize: 11, letterSpacing: '-.01em' }}>
                  {n.app}
                </span>
                <span className="text-[#6B7585] font-medium" style={{ fontSize: 10 }}>{n.time}</span>
              </div>
              <div className="text-[#0f1314] font-bold" style={{ fontSize: 12, letterSpacing: '-.01em', lineHeight: 1.2 }}>
                {n.title}
              </div>
              <div className="text-[#3D4654]" style={{ fontSize: 11, lineHeight: 1.3, marginTop: 2 }}>
                {n.body}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function MockupWorkflows() {
  const items = [
    { icon: '📅', name: 'Booking Confirmation', meta: 'Triggered 847 times · Last 30 days' },
    { icon: '⏰', name: '24hr Appointment Reminder', meta: 'Triggered 624 times · Last 30 days' },
    { icon: '🔴', name: 'No-Show Recovery', meta: 'Triggered 87 times · Last 30 days' },
    { icon: '⭐', name: 'Post-Visit Review Request', meta: 'Triggered 412 times · Last 30 days' },
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
        className="text-tx font-extrabold text-sm mb-3.5 pb-3"
        style={{ letterSpacing: '-.01em', borderBottom: '1px solid rgba(0,0,0,.07)' }}
      >
        Active Workflows
      </div>
      <div className="flex flex-col gap-2">
        {items.map((it, i) => (
          <div
            key={i}
            className="flex items-center gap-3"
            style={{
              padding: '12px 14px',
              background: 'rgba(0,190,157,.06)',
              border: '1px solid rgba(0,190,157,.15)',
              borderRadius: 10,
            }}
          >
            <div
              className="rounded-lg flex items-center justify-center flex-shrink-0 text-base"
              style={{
                width: 36,
                height: 36,
                background: '#fff',
                border: '1px solid rgba(0,0,0,.07)',
              }}
            >
              {it.icon}
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-tx font-bold text-[13px] leading-tight" style={{ letterSpacing: '-.01em' }}>
                {it.name}
              </div>
              <div className="text-tx-3 mt-0.5 text-[11px]">{it.meta}</div>
            </div>
            <div className="flex items-center gap-1.5 text-teal font-bold text-[11px] flex-shrink-0">
              <span className="w-2 h-2 rounded-full bg-teal animate-pu" /> Live
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function MockupGHL() {
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
      <div className="mb-5 pb-3.5" style={{ borderBottom: '1px solid rgba(0,0,0,.07)' }}>
        <div className="text-tx font-extrabold text-sm" style={{ letterSpacing: '-.01em' }}>
          GHL Network
        </div>
        <div className="text-tx-3 mt-0.5 text-[11px]">Multi-location infrastructure</div>
      </div>
      <div className="flex flex-col items-center relative mb-5">
        <div
          className="relative flex flex-col items-center text-center mb-4"
          style={{
            padding: '10px 14px',
            background: 'rgba(0,190,157,.06)',
            border: '2px solid #00BE9D',
            borderRadius: 10,
            minWidth: 130,
          }}
        >
          <div className="text-teal mb-1" style={{ fontSize: 14 }}>●</div>
          <div className="text-tx font-extrabold text-xs" style={{ letterSpacing: '-.01em' }}>Franchisor HQ</div>
          <div className="text-tx-3 font-medium mt-0.5" style={{ fontSize: 10 }}>Brand agency account</div>
          <div
            className="absolute"
            style={{
              bottom: -16,
              left: '50%',
              width: 2,
              height: 16,
              background: 'rgba(0,190,157,.15)',
            }}
          />
        </div>
        <div className="grid grid-cols-4 gap-2 w-full relative">
          <div
            className="absolute"
            style={{ top: -8, left: '12%', right: '12%', height: 2, background: 'rgba(0,190,157,.15)' }}
          />
          {[
            { icon: '🏨', name: 'Austin South' },
            { icon: '🏨', name: 'Dallas North' },
            { icon: '🏨', name: 'Houston West' },
            { more: true, name: '+ 24 more' },
          ].map((b, i) => (
            <div key={i} className="flex flex-col items-center relative pt-2">
              <div
                className="absolute"
                style={{ top: 0, width: 2, height: 8, background: 'rgba(0,190,157,.15)' }}
              />
              <div
                className="flex flex-col items-center w-full text-center"
                style={{
                  padding: '8px 4px',
                  background: b.more ? 'transparent' : '#F7F7F7',
                  border: b.more ? '1.5px dashed rgba(0,0,0,.07)' : '1px solid rgba(0,0,0,.07)',
                  borderRadius: 10,
                }}
              >
                {!b.more && (
                  <div className="text-teal mb-1" style={{ fontSize: 12 }}>{b.icon}</div>
                )}
                <div
                  className="font-extrabold"
                  style={{
                    fontSize: 10,
                    letterSpacing: '-.01em',
                    color: b.more ? '#777' : '#1a1a1a',
                  }}
                >
                  {b.name}
                </div>
              </div>
              {!b.more && (
                <div
                  className="text-tx-3 font-semibold uppercase mt-1"
                  style={{ fontSize: 9, letterSpacing: '.03em' }}
                >
                  Sub-account
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div
        className="grid grid-cols-3 gap-2 pt-3.5"
        style={{ borderTop: '1px solid rgba(0,0,0,.07)' }}
      >
        {[
          { val: '27', lbl: 'Sub-accounts' },
          { val: '142', lbl: 'Workflows' },
          { val: '1', lbl: 'Unified view' },
        ].map((s, i) => (
          <div key={i} className="text-center">
            <div className="text-teal font-extrabold" style={{ fontSize: 20, letterSpacing: '-.02em', lineHeight: 1 }}>
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

export default function CRMAutomationsPage() {
  const visuals = [
    <MockupTimeline key="0" />,
    <MockupRoutingViz key="1" />,
    <MockupKanban key="2" />,
    <MockupNotify key="3" />,
    <MockupWorkflows key="4" />,
    <MockupGHL key="5" />,
  ];
  const features = data.features.map((f, i) => ({ ...f, visual: visuals[i] }));

  return (
    <ServicePageLayout
      hero={{
        eyebrow: data.hero.eyebrow,
        headline: (
          <>
            Never Lose a Lead.<br />
            <em className="not-italic text-teal">Automate Everything.</em>
          </>
        ),
        sub: data.hero.sub,
        visual: <TimelineDark />,
      }}
      why={data.why}
      introHeader={data.introHeader}
      features={features}
      testimonial={data.testimonial}
      cta={data.cta}
    />
  );
}
