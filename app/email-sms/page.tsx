import type { Metadata } from 'next';
import ServicePageLayout from '@/components/ServicePageLayout';
import data from '@/content/services/email-sms.json';

export const metadata: Metadata = {
  title: 'Franchise Email & SMS Marketing | Automated Follow-Up for Franchises | 5th Element Media',
  description:
    'Automated email and SMS follow-up sequences for franchise brands. New lead confirmations, appointment reminders, no-show recovery, and nurture sequences that run 24/7 across every location.',
};

function HeroMessageStack() {
  const msgs = [
    { icon: '📱', iconBg: '#34c759', from: 'Austin South', time: 'now', body: <>Hey Sarah! Thanks for your interest. Ready to book your first session?</>, rotate: -2, translate: 20 },
    { icon: '✉', iconBg: '#00BE9D', iconColor: '#0F1314', from: 'tristynn@5them.com', time: '2m', body: <><strong>Your appointment is confirmed</strong><br />Thursday, April 24 at 2:00 PM</>, rotate: 1, translate: -20 },
    { icon: '⏰', iconBg: '#EF9F27', from: 'Reminder', time: '24h', body: 'See you tomorrow at 2pm! Reply STOP to cancel, Y to confirm.', rotate: -1, translate: 15 },
  ];
  return (
    <div className="flex flex-col gap-2.5 w-full relative" style={{ maxWidth: 340 }}>
      {msgs.map((m, i) => (
        <div
          key={i}
          className="flex gap-2.5 items-start"
          style={{
            background: 'rgba(255,255,255,.95)',
            borderRadius: 14,
            padding: '12px 14px',
            boxShadow: '0 8px 28px rgba(0,0,0,.3)',
            transform: `translateX(${m.translate}px) rotate(${m.rotate}deg)`,
          }}
        >
          <div
            className="rounded-lg flex items-center justify-center flex-shrink-0 text-white"
            style={{
              width: 32,
              height: 32,
              background: m.iconBg,
              color: m.iconColor || '#fff',
              fontSize: 14,
            }}
          >
            {m.icon}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex justify-between items-center mb-0.5">
              <span className="text-[#0f1314] font-extrabold text-[11px]" style={{ letterSpacing: '-.01em' }}>
                {m.from}
              </span>
              <span className="text-[#6B7585] font-medium text-[10px]">{m.time}</span>
            </div>
            <div className="text-[#3D4654] text-[11px]" style={{ lineHeight: 1.35 }}>
              {m.body}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function MockupMsgPreview() {
  return (
    <div
      className="w-full bg-wh"
      style={{
        maxWidth: 400,
        border: '1px solid rgba(0,0,0,.07)',
        borderRadius: 24,
        padding: 22,
        boxShadow: '0 12px 40px rgba(0,0,0,.06)',
      }}
    >
      <div
        className="flex justify-between items-center mb-3.5 pb-3"
        style={{ borderBottom: '1px solid rgba(0,0,0,.07)' }}
      >
        <div className="text-tx font-extrabold text-[13px]" style={{ letterSpacing: '-.01em' }}>
          New Lead Confirmation
        </div>
        <div className="flex items-center gap-1.5 text-teal font-bold text-[11px]">
          <span className="w-2 h-2 rounded-full bg-teal animate-pu" /> Live
        </div>
      </div>
      <div className="flex gap-2 mb-3.5">
        {[
          { icon: '✉', name: 'Email' },
          { icon: '📱', name: 'SMS' },
        ].map((c, i) => (
          <div
            key={i}
            className="flex-1 flex items-center justify-center gap-1.5 font-bold"
            style={{
              padding: 8,
              background: 'rgba(0,190,157,.06)',
              border: '1px solid rgba(0,190,157,.15)',
              borderRadius: 8,
              fontSize: 11,
              color: '#00BE9D',
            }}
          >
            <span style={{ fontSize: 13 }}>{c.icon}</span>
            {c.name}
          </div>
        ))}
      </div>
      <div
        className="mb-3.5"
        style={{
          padding: 14,
          background: '#F7F7F7',
          borderRadius: 10,
          border: '1px solid rgba(0,0,0,.07)',
        }}
      >
        <div className="text-tx-3 font-semibold mb-1" style={{ fontSize: 10 }}>
          From: hello@yourbrand.com
        </div>
        <div className="text-tx font-extrabold mb-2" style={{ fontSize: 13 }}>
          Thanks for reaching out, Sarah!
        </div>
        <div className="text-tx-2 mb-2.5" style={{ fontSize: 11, lineHeight: 1.45 }}>
          Hey Sarah, thanks for your interest in our Austin South location. We&apos;d love to get you booked for your first session. Click below to pick a time that works best for you.
        </div>
        <div
          className="inline-block text-teal font-bold"
          style={{
            padding: '6px 10px',
            background: 'rgba(0,190,157,.06)',
            borderRadius: 6,
            border: '1px solid rgba(0,190,157,.15)',
            fontSize: 11,
          }}
        >
          Book My First Session →
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {[
          { val: '94%', lbl: 'Open rate' },
          { val: '41%', lbl: 'Click rate' },
          { val: '18%', lbl: 'Booked on first touch' },
        ].map((s, i) => (
          <div
            key={i}
            className="text-center"
            style={{
              padding: '10px 6px',
              background: '#F7F7F7',
              borderRadius: 8,
              border: '1px solid rgba(0,0,0,.07)',
            }}
          >
            <div className="text-teal font-extrabold" style={{ fontSize: 16, letterSpacing: '-.02em', lineHeight: 1 }}>
              {s.val}
            </div>
            <div className="text-tx-3 font-bold uppercase mt-1" style={{ fontSize: 9, letterSpacing: '.04em' }}>
              {s.lbl}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function MockupReminderFlow() {
  const steps = [
    { time: '-24h', channel: 'SMS + Email', preview: '"Hey Sarah! Confirming your appt tomorrow at 2pm. Reply Y to confirm."', sent: true },
    { time: '-1h', channel: 'SMS', preview: '"See you soon! Your appt is in 1 hour at Austin South."', sent: true },
    { time: '-5m', channel: 'SMS', preview: '"On your way? Here\'s the address + parking info: ..."', active: true },
  ];
  return (
    <div
      className="w-full bg-wh"
      style={{
        maxWidth: 420,
        border: '1px solid rgba(0,0,0,.07)',
        borderRadius: 24,
        padding: 22,
        boxShadow: '0 12px 40px rgba(0,0,0,.06)',
      }}
    >
      <div className="text-tx font-extrabold text-[13px] mb-1" style={{ letterSpacing: '-.01em' }}>
        Reminder Sequence
      </div>
      <div
        className="text-teal font-bold mb-4 pb-3"
        style={{ fontSize: 11, borderBottom: '1px solid rgba(0,0,0,.07)' }}
      >
        Appointment: Thu 4/24 at 2:00 PM
      </div>
      <div className="flex flex-col gap-2.5 mb-3.5">
        {steps.map((s, i) => (
          <div
            key={i}
            className="grid items-start gap-2.5"
            style={{
              gridTemplateColumns: '50px 14px 1fr',
              padding: 10,
              background: s.active ? 'rgba(0,190,157,.06)' : '#F7F7F7',
              border: s.active ? '1px solid rgba(0,190,157,.15)' : '1px solid rgba(0,0,0,.07)',
              borderRadius: 10,
              opacity: s.sent ? 0.7 : 1,
            }}
          >
            <div
              className="font-extrabold"
              style={{
                fontSize: 11,
                color: s.active ? '#00BE9D' : '#777',
                letterSpacing: '.02em',
                paddingTop: 2,
              }}
            >
              {s.time}
            </div>
            <div
              className="rounded-full justify-self-center mt-1.5"
              style={{
                width: 10,
                height: 10,
                background: s.active ? '#00BE9D' : '#777',
                boxShadow: s.active ? '0 0 0 4px rgba(0,190,157,.2)' : undefined,
              }}
            />
            <div>
              <div
                className="text-teal font-extrabold uppercase mb-1"
                style={{ fontSize: 10, letterSpacing: '.04em' }}
              >
                {s.channel}
              </div>
              <div className="text-tx-2 italic" style={{ fontSize: 11, lineHeight: 1.4 }}>
                {s.preview}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div
        className="flex items-center gap-2 text-tx text-xs"
        style={{
          padding: '10px 14px',
          background: 'rgba(0,190,157,.06)',
          border: '1px solid rgba(0,190,157,.15)',
          borderRadius: 8,
        }}
      >
        <div
          className="rounded-full bg-teal flex items-center justify-center flex-shrink-0"
          style={{ width: 20, height: 20, color: '#0F1314', fontSize: 11, fontWeight: 800 }}
        >
          ✓
        </div>
        <span>
          No-show rate down <strong>38%</strong> since automation
        </span>
      </div>
    </div>
  );
}

function MockupRecovery() {
  return (
    <div
      className="w-full bg-wh"
      style={{
        maxWidth: 380,
        border: '1px solid rgba(0,0,0,.07)',
        borderRadius: 24,
        padding: 22,
        boxShadow: '0 12px 40px rgba(0,0,0,.06)',
      }}
    >
      <div
        className="flex justify-between items-center mb-4 pb-3"
        style={{ borderBottom: '1px solid rgba(0,0,0,.07)' }}
      >
        <div className="text-tx font-extrabold text-[13px]" style={{ letterSpacing: '-.01em' }}>
          Recovery Sequence Active
        </div>
        <div
          className="font-bold"
          style={{
            fontSize: 10,
            color: '#EF9F27',
            padding: '3px 8px',
            background: 'rgba(239,159,39,.1)',
            borderRadius: 6,
          }}
        >
          15 min after missed appt
        </div>
      </div>
      <div
        className="flex flex-col gap-2 mb-3.5"
        style={{ background: '#F7F7F7', borderRadius: 14, padding: 14 }}
      >
        <div className="flex justify-start">
          <div
            className="text-tx text-xs"
            style={{
              padding: '10px 14px',
              background: '#e5e7eb',
              borderRadius: '16px 16px 16px 4px',
              maxWidth: '85%',
              lineHeight: 1.4,
            }}
          >
            Hey Sarah, no worries — we missed you today! Life happens.
          </div>
        </div>
        <div className="flex justify-start">
          <div
            className="text-tx text-xs"
            style={{
              padding: '10px 14px',
              background: '#e5e7eb',
              borderRadius: '16px 16px 16px 4px',
              maxWidth: '85%',
              lineHeight: 1.4,
            }}
          >
            Want to grab a new time that works better? Here&apos;s a link to rebook in 30 seconds:{' '}
            <span className="text-teal font-bold underline">book.link/sarah</span>
          </div>
        </div>
        <div className="flex justify-start">
          <div
            className="flex gap-1"
            style={{ padding: '14px 16px', background: '#e5e7eb', borderRadius: 16 }}
          >
            {[0, 1, 2].map(i => (
              <span
                key={i}
                className="w-1.5 h-1.5 rounded-full bg-tx-3 inline-block"
                style={{ animation: `pu 1.4s ease-in-out ${i * 0.2}s infinite` }}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2.5">
        {[
          { val: '42%', lbl: 'Recovery rate' },
          { val: '8 min', lbl: 'Avg response time' },
        ].map((s, i) => (
          <div
            key={i}
            className="text-center"
            style={{
              padding: 12,
              background: 'rgba(0,190,157,.06)',
              border: '1px solid rgba(0,190,157,.15)',
              borderRadius: 10,
            }}
          >
            <div className="text-teal font-extrabold" style={{ fontSize: 22, letterSpacing: '-.02em', lineHeight: 1 }}>
              {s.val}
            </div>
            <div
              className="text-tx-3 font-bold uppercase mt-1"
              style={{ fontSize: 10, letterSpacing: '.04em' }}
            >
              {s.lbl}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function MockupNurture() {
  const events = [
    { day: 'Day 1', name: 'Welcome + intro video', channel: 'Email · Sent', state: 'done' },
    { day: 'Day 3', name: '5 common questions', channel: 'Email · Opened', state: 'done' },
    { day: 'Day 7', name: 'Client transformation story', channel: 'Email · Opened', state: 'done' },
    { day: 'Day 14', name: 'Limited-time offer drop', channel: 'Email + SMS · Sending now', state: 'active' },
    { day: 'Day 30', name: 'Re-engagement sequence', channel: 'Behavior-triggered', state: '' },
    { day: 'Day 60', name: 'Testimonial + CTA', channel: 'Email', state: '' },
  ];
  return (
    <div
      className="w-full bg-wh"
      style={{
        maxWidth: 420,
        border: '1px solid rgba(0,0,0,.07)',
        borderRadius: 24,
        padding: 22,
        boxShadow: '0 12px 40px rgba(0,0,0,.06)',
      }}
    >
      <div
        className="text-tx font-extrabold text-[13px] mb-4 pb-3"
        style={{ letterSpacing: '-.01em', borderBottom: '1px solid rgba(0,0,0,.07)' }}
      >
        90-Day Nurture Timeline
      </div>
      <div className="flex flex-col relative" style={{ paddingLeft: 20 }}>
        <div
          className="absolute"
          style={{
            top: 12,
            bottom: 12,
            left: 5,
            width: 2,
            background: 'rgba(0,0,0,.07)',
          }}
        />
        {events.map((e, i) => (
          <div
            key={i}
            className="grid relative"
            style={{
              gridTemplateColumns: '54px 1fr',
              gap: 12,
              padding: '6px 0',
              opacity: e.state === 'done' ? 0.6 : 1,
            }}
          >
            <div
              className="absolute rounded-full"
              style={{
                left: -20,
                top: 9,
                width: 10,
                height: 10,
                background: e.state === 'active' ? '#00BE9D' : e.state === 'done' ? '#00BE9D' : 'rgba(0,0,0,.07)',
                border: '2px solid #fff',
                boxShadow: e.state === 'active' ? '0 0 0 4px rgba(0,190,157,.25)' : undefined,
              }}
            />
            <div
              className="font-extrabold uppercase"
              style={{
                fontSize: 10,
                color: e.state === 'active' ? '#00BE9D' : '#777',
                letterSpacing: '.04em',
                paddingTop: 2,
              }}
            >
              {e.day}
            </div>
            <div>
              <div className="text-tx font-bold leading-tight" style={{ fontSize: 12, letterSpacing: '-.01em' }}>
                {e.name}
              </div>
              <div className="text-tx-3 font-semibold mt-0.5" style={{ fontSize: 10 }}>
                {e.channel}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function MockupReviewReq() {
  return (
    <div
      className="w-full bg-wh"
      style={{
        maxWidth: 400,
        border: '1px solid rgba(0,0,0,.07)',
        borderRadius: 24,
        padding: 22,
        boxShadow: '0 12px 40px rgba(0,0,0,.06)',
      }}
    >
      <div
        className="flex justify-between items-center mb-4 pb-3"
        style={{ borderBottom: '1px solid rgba(0,0,0,.07)' }}
      >
        <div className="text-tx font-extrabold text-[13px]" style={{ letterSpacing: '-.01em' }}>
          Review Request Performance
        </div>
        <div className="text-tx-3 font-semibold" style={{ fontSize: 10 }}>Last 30 days</div>
      </div>
      <div
        className="text-center mb-4 pt-3.5 pb-4.5"
        style={{ borderBottom: '1px solid rgba(0,0,0,.07)' }}
      >
        <div className="text-tx font-extrabold" style={{ fontSize: 44, letterSpacing: '-.03em', lineHeight: 1 }}>
          4.9
        </div>
        <div style={{ color: '#FFB800', fontSize: 16, margin: '6px 0 4px', letterSpacing: '.04em' }}>
          ★★★★★
        </div>
        <div className="text-tx-3 font-semibold" style={{ fontSize: 11 }}>
          487 Google reviews · +48 this month
        </div>
      </div>
      <div className="mb-4">
        <div
          className="rounded"
          style={{
            padding: '12px 14px',
            background: '#F7F7F7',
            border: '1px solid rgba(0,0,0,.07)',
            borderRadius: '14px 14px 14px 4px',
          }}
        >
          <div className="text-tx-2 mb-2" style={{ fontSize: 11, lineHeight: 1.45 }}>
            Hey Sarah! So glad you had a great first session. If you have 30 seconds, would you leave us a quick Google review? It means the world to our team.
          </div>
          <div className="text-teal font-bold" style={{ fontSize: 11 }}>
            Leave a Review →
          </div>
        </div>
      </div>
      <div className="pt-3.5" style={{ borderTop: '1px solid rgba(0,0,0,.07)' }}>
        <div
          className="text-tx-3 font-bold uppercase mb-2"
          style={{ fontSize: 10, letterSpacing: '.04em' }}
        >
          Review count growth
        </div>
        <div className="flex items-end gap-1.5 mb-1.5" style={{ height: 60 }}>
          {[30, 48, 62, 78, 100].map((h, i) => (
            <div
              key={i}
              className="flex-1"
              style={{
                height: `${h}%`,
                background: i === 4 ? '#00BE9D' : '#F7F7F7',
                border: i === 4 ? '1px solid #00BE9D' : '1px solid rgba(0,0,0,.07)',
                borderRadius: '4px 4px 0 0',
              }}
            />
          ))}
        </div>
        <div className="flex gap-1.5">
          {['Dec', 'Jan', 'Feb', 'Mar', 'Apr'].map((m, i) => (
            <span
              key={i}
              className="flex-1 text-tx-3 font-bold text-center uppercase"
              style={{ fontSize: 9, letterSpacing: '.04em' }}
            >
              {m}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function MockupPerf() {
  const items = [
    { name: 'New Lead Confirmation', meta: '847 sent', metrics: [{ v: '94%', l: 'Open' }, { v: '41%', l: 'Click' }, { v: '18%', l: 'Booked', good: true }] },
    { name: 'Appointment Reminder 24hr', meta: '624 sent', metrics: [{ v: '89%', l: 'Open' }, { v: '24%', l: 'Click' }, { v: '72%', l: 'Confirmed', good: true }] },
    { name: 'No-Show Recovery', meta: '87 sent', metrics: [{ v: '91%', l: 'Open' }, { v: '38%', l: 'Click' }, { v: '42%', l: 'Rebooked', good: true }] },
  ];
  return (
    <div
      className="w-full bg-wh"
      style={{
        maxWidth: 460,
        border: '1px solid rgba(0,0,0,.07)',
        borderRadius: 24,
        padding: 22,
        boxShadow: '0 12px 40px rgba(0,0,0,.06)',
      }}
    >
      <div
        className="flex justify-between items-center mb-3.5 pb-3"
        style={{ borderBottom: '1px solid rgba(0,0,0,.07)' }}
      >
        <div className="text-tx font-extrabold text-[13px]" style={{ letterSpacing: '-.01em' }}>
          Sequence Performance
        </div>
        <div
          className="text-tx-3 font-semibold"
          style={{ fontSize: 10, padding: '3px 8px', background: '#F7F7F7', borderRadius: 6 }}
        >
          All locations · 30d
        </div>
      </div>
      <div className="flex flex-col gap-2">
        {items.map((it, i) => (
          <div
            key={i}
            className="flex items-center gap-3"
            style={{
              padding: '12px 14px',
              background: '#F7F7F7',
              border: '1px solid rgba(0,0,0,.07)',
              borderRadius: 10,
            }}
          >
            <div className="flex-1 min-w-0">
              <div className="text-tx font-bold text-xs leading-tight" style={{ letterSpacing: '-.01em' }}>
                {it.name}
              </div>
              <div className="text-tx-3 font-semibold mt-0.5" style={{ fontSize: 10 }}>
                {it.meta}
              </div>
            </div>
            <div className="flex gap-3.5 flex-shrink-0">
              {it.metrics.map((m, j) => (
                <div key={j} className="flex flex-col items-center" style={{ minWidth: 32 }}>
                  <span
                    className="font-extrabold leading-none"
                    style={{
                      fontSize: 13,
                      letterSpacing: '-.02em',
                      color: m.good ? '#00BE9D' : '#1a1a1a',
                    }}
                  >
                    {m.v}
                  </span>
                  <span
                    className="text-tx-3 font-bold uppercase mt-1"
                    style={{ fontSize: 9, letterSpacing: '.04em' }}
                  >
                    {m.l}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function EmailSMSPage() {
  const visuals = [
    <MockupMsgPreview key="0" />,
    <MockupReminderFlow key="1" />,
    <MockupRecovery key="2" />,
    <MockupNurture key="3" />,
    <MockupReviewReq key="4" />,
    <MockupPerf key="5" />,
  ];
  const features = data.features.map((f, i) => ({ ...f, visual: visuals[i] }));

  return (
    <ServicePageLayout
      hero={{
        eyebrow: data.hero.eyebrow,
        headline: (
          <>
            Follow-Up That<br />
            <em className="not-italic text-teal">Never Sleeps.</em>
          </>
        ),
        sub: data.hero.sub,
        visual: <HeroMessageStack />,
      }}
      why={data.why}
      introHeader={data.introHeader}
      features={features}
      testimonial={data.testimonial}
      cta={data.cta}
    />
  );
}
