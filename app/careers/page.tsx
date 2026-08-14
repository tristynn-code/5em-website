import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import Avatar from '@/components/careers/Avatar';
import { pageMetadata, SITE } from '@/lib/seo';
import { breadcrumbSchema } from '@/lib/schema';
import { getOpenRoles } from '@/app/careers/roles';
import employees from '@/content/employee-testimonials.json';

export const metadata: Metadata = pageMetadata({
  title: 'Careers at Fifth Element',
  description:
    'Join the franchise marketing agency behind 300+ locations. See what it is like to work at Fifth Element, hear from the team, and apply for an open role.',
  path: '/careers',
  keywords: ['Fifth Element careers', 'franchise marketing jobs', 'marketing agency careers', 'client success manager job'],
});

const values = [
  {
    title: 'Results are the culture',
    body: 'We are obsessed with our clients’ growth. Wins are shared, owned, and celebrated by the whole team - not siloed.',
  },
  {
    title: 'Grow faster here',
    body: 'A front-row seat at a fast-scaling agency means real responsibility early and direct mentorship from senior strategists and the founder.',
  },
  {
    title: 'Make work you’re proud of',
    body: 'We trust our people to take swings. The creative, the campaigns, the systems - they carry your fingerprints, not a template’s.',
  },
  {
    title: 'No busywork',
    body: 'You are judged on what you ship and the outcomes you drive, not the hours you log. Focused work, real impact, zero theater.',
  },
];

export default function CareersPage() {
  const openRoles = getOpenRoles();

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Careers', path: '/careers' },
        ])}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          '@id': `${SITE.url}/careers#page`,
          name: 'Careers at Fifth Element',
          url: `${SITE.url}/careers`,
          isPartOf: { '@id': `${SITE.url}#website` },
          about: { '@id': `${SITE.url}#organization` },
          mainEntity: {
            '@type': 'ItemList',
            itemListElement: openRoles.map((r, i) => ({
              '@type': 'ListItem',
              position: i + 1,
              url: `${SITE.url}/careers/${r.slug}`,
              name: r.title,
            })),
          },
        }}
      />

      {/* HERO */}
      <section className="pt-[150px] pb-16 px-8 text-center">
        <div className="stag inline-block">Careers</div>
        <h1
          className="font-extrabold mb-6 max-w-[860px] mx-auto"
          style={{ fontSize: 'clamp(40px,6vw,68px)', lineHeight: 1.05, letterSpacing: '-.04em' }}
        >
          Build the future of <span className="text-teal">franchise marketing.</span>
        </h1>
        <p
          className="text-tx-2 mx-auto max-w-[620px] mb-10"
          style={{ fontSize: 'clamp(17px,1.8vw,20px)', lineHeight: 1.6 }}
        >
          We are the marketing engine behind 300+ franchise locations - and we are growing fast. If you want real ownership, real mentorship, and work you are proud of, you will fit right in.
        </p>
        <div className="flex gap-3 justify-center flex-wrap">
          <a href="#open-roles" className="bp bpl">See open roles →</a>
          <Link href="/about" className="bs">Meet the team →</Link>
        </div>
      </section>

      {/* WHY 5EM - culture cards */}
      <section className="sec bg-off">
        <div className="mx ctr">
          <div className="stag">Why Fifth Element</div>
          <h2 className="sttl">What it’s like to work here</h2>
          <p className="ssub" style={{ margin: '0 auto' }}>
            A small, sharp team that moves fast and actually likes working together.
          </p>
        </div>
        <div className="mx mt-14 grid grid-cols-1 md:grid-cols-2 gap-5">
          {values.map(v => (
            <div key={v.title} className="rounded-l border border-bd bg-wh p-8">
              <h3 className="font-extrabold text-tx mb-3" style={{ fontSize: 21, letterSpacing: '-.02em' }}>
                {v.title}
              </h3>
              <p className="text-[15px] text-tx-2 leading-relaxed">{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TEAM TESTIMONIALS */}
      <section className="sec">
        <div className="mx ctr">
          <div className="stag">From the team</div>
          <h2 className="sttl">In their words</h2>
          <p className="ssub" style={{ margin: '0 auto' }}>
            The people who make Fifth Element run, on why they stay.
          </p>
        </div>

        {employees.length === 1 ? (
          // Featured single voice - reads as intentional, not a lonely card.
          <figure className="mx max-w-[820px] mx-auto mt-14 rounded-l border border-bd bg-off p-9 md:p-12 text-center">
            <div aria-hidden className="text-teal font-extrabold mb-3" style={{ fontSize: 56, lineHeight: 1 }}>
              &ldquo;
            </div>
            <blockquote
              className="text-tx font-extrabold mx-auto max-w-[680px]"
              style={{ fontSize: 'clamp(20px,2.4vw,26px)', lineHeight: 1.4, letterSpacing: '-.01em' }}
            >
              {employees[0].quote}
            </blockquote>
            {employees[0].secondary && (
              <p className="text-tx-2 mx-auto max-w-[620px] mt-6" style={{ fontSize: 16, lineHeight: 1.65 }}>
                {employees[0].secondary}
              </p>
            )}
            <figcaption className="flex items-center justify-center gap-3.5 mt-9">
              <Avatar name={employees[0].name} photo={employees[0].photo} size={56} />
              <div className="text-left">
                <div className="font-bold text-tx text-[15px]">{employees[0].name}</div>
                <div className="text-[13px] text-tx-3">{employees[0].role}</div>
              </div>
            </figcaption>
          </figure>
        ) : (
          <div className="mx mt-14 grid grid-cols-1 md:grid-cols-2 gap-5">
            {employees.map(emp => (
              <figure key={emp.id} className="rounded-l border border-bd bg-off p-8">
                <blockquote className="text-tx-2 mb-6" style={{ fontSize: 17, lineHeight: 1.6 }}>
                  &ldquo;{emp.quote}&rdquo;
                </blockquote>
                <figcaption className="flex items-center gap-3.5">
                  <Avatar name={emp.name} photo={emp.photo} size={52} />
                  <div>
                    <div className="font-bold text-tx text-[15px]">{emp.name}</div>
                    <div className="text-[13px] text-tx-3">{emp.role}</div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        )}
      </section>

      {/* OPEN ROLES */}
      <section id="open-roles" className="sec bg-off scroll-mt-24">
        <div className="mx ctr">
          <div className="stag">Open roles</div>
          <h2 className="sttl">Come build with us</h2>
          <p className="ssub" style={{ margin: '0 auto' }}>
            {openRoles.length > 0
              ? 'Find your seat below. Don’t see a perfect fit? Reach out anyway - we are always growing.'
              : 'No open roles right now, but we are always growing. Reach out and introduce yourself.'}
          </p>
        </div>

        <div className="mx mt-14 max-w-[920px] mx-auto flex flex-col gap-4">
          {openRoles.map(role => (
            <Link
              key={role.slug}
              href={`/careers/${role.slug}`}
              className="group block rounded-l border border-bd bg-wh p-7 md:p-8 transition-all hover:-translate-y-1 hover:border-teal-bd hover:shadow-[0_16px_48px_rgba(0,190,157,.08)]"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2.5 mb-2.5">
                    <span className="text-[11px] uppercase font-extrabold text-teal" style={{ letterSpacing: '.12em' }}>
                      {role.team}
                    </span>
                    <span className="text-tx-3" aria-hidden>·</span>
                    <WorkStyleChip workStyle={role.workStyle} />
                    <span className="text-[12px] text-tx-3">{role.location}</span>
                  </div>
                  <h3 className="font-extrabold text-tx mb-2" style={{ fontSize: 23, letterSpacing: '-.02em' }}>
                    {role.title}
                  </h3>
                  <p className="text-[15px] text-tx-2 leading-relaxed max-w-[620px]">{role.summary}</p>
                </div>
                <span className="inline-flex items-center gap-1 text-[14px] font-bold text-teal group-hover:gap-2 transition-all flex-shrink-0 whitespace-nowrap">
                  View role →
                </span>
              </div>
            </Link>
          ))}

          {/* Open application catch-all */}
          <div className="rounded-l border border-dashed border-bd bg-wh/60 p-7 text-center">
            <p className="text-[15px] text-tx-2">
              Don’t see your role?{' '}
              <a href="mailto:careers@5them.com?subject=Open application - Fifth Element" className="font-bold text-teal hover:underline">
                Send us your info
              </a>{' '}
              and we will keep you in mind.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

/** Small work-style chip shared with the index card. Teal-tinted, on brand. */
function WorkStyleChip({ workStyle }: { workStyle: 'In-person' | 'Hybrid' | 'Remote' }) {
  return (
    <span
      className="inline-flex items-center text-[11px] font-extrabold uppercase rounded-full px-2.5 py-1 text-teal"
      style={{ letterSpacing: '.08em', background: 'rgba(0,190,157,.08)', border: '1px solid rgba(0,190,157,.16)' }}
    >
      {workStyle}
    </span>
  );
}
