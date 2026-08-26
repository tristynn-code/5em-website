import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import JsonLd from '@/components/JsonLd';
import ApplyForm from '@/components/careers/ApplyForm';
import { pageMetadata } from '@/lib/seo';
import { breadcrumbSchema, jobPostingSchema } from '@/lib/schema';
import { getOpenRoles, getRoleBySlug, EMPLOYMENT_SCHEMA, type Role } from '@/app/careers/roles';

export function generateStaticParams() {
  return getOpenRoles().map(r => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const role = getRoleBySlug(slug);
  if (!role) {
    return pageMetadata({
      title: 'Role not found',
      description: 'This role is no longer open.',
      path: `/careers/${slug}`,
      noindex: true,
    });
  }
  return pageMetadata({
    title: `${role.title} - Careers`,
    description: role.summary,
    path: `/careers/${role.slug}`,
    keywords: [role.title, `${role.title} job`, 'Fifth Element careers', 'franchise marketing jobs'],
  });
}

/** Flatten a role's body into plain text for the JobPosting description. */
function roleDescription(role: Role): string {
  const parts: string[] = [...role.intro];
  for (const s of role.sections) {
    parts.push(s.heading);
    if (s.body) parts.push(...s.body);
    if (s.bullets) parts.push(...s.bullets.map(b => `- ${b}`));
  }
  return parts.join('\n\n');
}

export default async function RolePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const role = getRoleBySlug(slug);
  if (!role) notFound();

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Careers', path: '/careers' },
          { name: role.title, path: `/careers/${role.slug}` },
        ])}
      />
      <JsonLd
        data={jobPostingSchema({
          slug: role.slug,
          title: role.title,
          description: roleDescription(role),
          datePosted: role.datePosted,
          closeDate: role.closeDate,
          employmentTypeSchema: EMPLOYMENT_SCHEMA[role.employmentType],
          workStyle: role.workStyle,
          location: role.location,
          payMin: role.payMin,
          payMax: role.payMax,
          payUnit: role.payUnit,
        })}
      />

      <article className="pt-[120px] px-6 pb-24">
        <div className="mx max-w-[1080px] mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-[13px] font-semibold text-tx-3 mb-8">
            <Link href="/careers" className="hover:text-teal transition-colors">Careers</Link>
            <span aria-hidden>·</span>
            <span className="text-teal font-bold">{role.team}</span>
          </div>

          {/* Title + chips */}
          <h1 className="font-extrabold text-tx mb-5" style={{ fontSize: 'clamp(32px,4.6vw,52px)', letterSpacing: '-.03em', lineHeight: 1.06 }}>
            {role.title}
          </h1>
          <div className="flex flex-wrap items-center gap-2.5 mb-12">
            <Chip>{role.workStyle}</Chip>
            <Chip>{role.location}</Chip>
            <Chip>{role.employmentType}</Chip>
          </div>

          {/* Two-column: body + sticky sidebar */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10 lg:gap-14 items-start">
            {/* BODY */}
            <div className="text-tx-2" style={{ fontSize: 17, lineHeight: 1.75 }}>
              {role.intro.map((p, i) => (
                <p key={i} className="mb-5">{p}</p>
              ))}

              {role.sections.map(section => (
                <section key={section.heading} className="mt-10">
                  <h2 className="font-extrabold text-tx mb-4" style={{ fontSize: 22, letterSpacing: '-.02em' }}>
                    {section.heading}
                  </h2>
                  {section.body?.map((p, i) => (
                    <p key={i} className="mb-5">{p}</p>
                  ))}
                  {section.bullets && (
                    <ul className="flex flex-col gap-3">
                      {section.bullets.map((b, i) => (
                        <li key={i} className="flex gap-3">
                          <span className="text-teal font-bold flex-shrink-0 mt-0.5" aria-hidden>→</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}
            </div>

            {/* SIDEBAR */}
            <aside className="lg:sticky lg:top-28">
              <div className="rounded-l border border-bd bg-off p-7">
                <h2 className="text-[11px] uppercase font-extrabold text-tx-3 mb-5" style={{ letterSpacing: '.12em' }}>
                  Role details
                </h2>
                <dl className="flex flex-col gap-4 mb-7">
                  <SidebarItem label="Team" value={role.team} />
                  <SidebarItem label="Work style" value={role.workStyle} />
                  <SidebarItem label="Location" value={role.location} />
                  <SidebarItem label="Type" value={role.employmentType} />
                  {role.payDisplay && <SidebarItem label="Compensation" value={role.payDisplay} />}
                </dl>
                <a href="#apply" className="bp w-full justify-center">Apply now →</a>
              </div>
            </aside>
          </div>

          {/* APPLY */}
          <div id="apply" className="scroll-mt-24 mt-20 max-w-[760px]">
            <ApplyForm roleTitle={role.title} roleSlug={role.slug} applyNote={role.applyNote} requestVideo={role.requestVideo} />
          </div>

          {/* Back link */}
          <div className="mt-12">
            <Link href="/careers" className="text-[14px] font-bold text-tx-2 hover:text-teal transition-colors">
              ← All open roles
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-flex items-center text-[12px] font-extrabold uppercase rounded-full px-3 py-1.5 text-teal"
      style={{ letterSpacing: '.08em', background: 'rgba(0,190,157,.08)', border: '1px solid rgba(0,190,157,.16)' }}
    >
      {children}
    </span>
  );
}

function SidebarItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-[12px] text-tx-3 font-semibold mb-0.5">{label}</dt>
      <dd className="text-[15px] text-tx font-bold">{value}</dd>
    </div>
  );
}
