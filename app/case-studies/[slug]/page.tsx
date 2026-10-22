import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import JsonLd from '@/components/JsonLd';
import CaseStudyBody from '@/components/case-studies/CaseStudyBody';
import CaseStudyCard from '@/components/case-studies/CaseStudyCard';
import RichText, { plainText } from '@/components/case-studies/RichText';
import { SITE, pageMetadata } from '@/lib/seo';
import { breadcrumbSchema } from '@/lib/schema';
import { auditCTA } from '@/lib/site';
import { getBrandMeta } from '../brands';
import { getRelatedStudies, getStudy, studies } from '../studies';

export function generateStaticParams() {
  return studies.map(s => ({ slug: s.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const study = getStudy(slug);
  if (!study) {
    return pageMetadata({ title: 'Case study not found', description: 'This case study does not exist.', path: `/case-studies/${slug}`, noindex: true });
  }
  const brand = getBrandMeta(study.brand);
  return pageMetadata({
    title: `${plainText(study.cardTitle ?? study.title)} | ${brand.id === 'network' ? 'Fifth Element Playbook' : `${brand.name} Case Study`}`,
    description: plainText(study.summary),
    path: `/case-studies/${study.slug}`,
    keywords: study.seoKeywords,
  });
}

function formatDate(iso: string) {
  return new Date(`${iso}T12:00:00Z`).toLocaleDateString('en-US', { month: 'long', year: 'numeric', timeZone: 'UTC' });
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = getStudy(slug);
  if (!study) notFound();
  const brand = getBrandMeta(study.brand);
  const related = getRelatedStudies(study.slug);
  const crumb = brand.id === 'network' ? 'Playbooks' : brand.name;
  const heroPhoto = study.cover?.src ?? brand.photo;

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${SITE.url}/case-studies/${study.slug}#article`,
    headline: plainText(study.title),
    description: plainText(study.summary),
    datePublished: study.published,
    dateModified: study.published,
    author: { '@id': `${SITE.url}#organization` },
    publisher: { '@id': `${SITE.url}#organization` },
    mainEntityOfPage: `${SITE.url}/case-studies/${study.slug}`,
    image: heroPhoto ? `${SITE.url}${heroPhoto}` : undefined,
    articleSection: 'Case Studies',
    about: brand.id === 'network' ? undefined : { '@type': 'Organization', name: brand.name },
  };

  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Case Studies', path: '/case-studies' },
          { name: plainText(study.cardTitle ?? study.title), path: `/case-studies/${study.slug}` },
        ])}
      />

      {/* HERO */}
      <section className="relative overflow-hidden" style={{ background: '#0F1314' }}>
        {heroPhoto && (
          <img
            src={heroPhoto}
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-40"
            style={{ objectPosition: study.cover ? study.cover.position : brand.photoPosition }}
          />
        )}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: heroPhoto
              ? 'linear-gradient(180deg,rgba(15,19,20,.55) 0%,rgba(15,19,20,.85) 70%,#0F1314 100%)'
              : 'radial-gradient(circle at 85% 10%,rgba(0,190,157,.22) 0%,transparent 55%)',
          }}
        />
        <div className="relative z-10 px-6 pt-[140px] pb-16 md:pb-20">
          <div className="max-w-[920px] mx-auto">
            <div className="flex items-center gap-2 text-[13px] font-semibold text-white/60 mb-8">
              <Link href="/case-studies" className="hover:text-teal transition-colors">
                Case Studies
              </Link>
              <span className="opacity-40">/</span>
              <Link href={`/case-studies#${brand.id}`} className="hover:text-teal transition-colors">
                {crumb}
              </Link>
            </div>
            <div className="flex items-center gap-3 mb-7 flex-wrap">
              {brand.logoWhite ? (
                <img src={brand.logoWhite} alt={brand.name} style={{ height: brand.logoHeight * 0.8, width: 'auto' }} />
              ) : (
                <span className="text-[13px] uppercase font-extrabold text-teal" style={{ letterSpacing: '.14em' }}>
                  Fifth Element Playbook
                </span>
              )}
              <div className="h-5 w-px bg-white/20" />
              <div className="text-[13px] uppercase font-semibold text-white/60" style={{ letterSpacing: '.1em' }}>
                {study.vertical}
                {study.location ? <> &middot; {study.location}</> : null}
              </div>
            </div>
            <h1
              className="font-extrabold mb-7 text-white"
              style={{ fontSize: 'clamp(38px,5.6vw,68px)', letterSpacing: '-.035em', lineHeight: 1.05 }}
            >
              <RichText text={study.title} strongClassName="text-white" />
            </h1>
            <p className="text-white/75 max-w-[700px]" style={{ fontSize: 'clamp(18px,1.7vw,21px)', lineHeight: 1.55 }}>
              <RichText text={study.dek} strongClassName="text-white" />
            </p>
            <div className="flex flex-wrap items-center gap-x-7 gap-y-3 mt-9 pt-7 border-t border-white/10 text-[13px] text-white/55">
              <div>
                <span className="text-white font-semibold">Published</span> &middot; {formatDate(study.published)}
              </div>
              <div>
                <span className="text-white font-semibold">Reading time</span> &middot; {study.readTime}
              </div>
              <div>
                <span className="text-white font-semibold">{study.kind === 'playbook' ? 'Playbook' : 'Case study'}</span> &middot; Fifth Element
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RESULTS STRIP */}
      <section className="px-6 py-16 md:py-20 border-b border-bd">
        <div className="max-w-[1100px] mx-auto">
          <div className={`grid grid-cols-2 ${study.heroStats.length >= 4 ? 'md:grid-cols-4' : 'md:grid-cols-3'} gap-y-10 gap-x-6`}>
            {study.heroStats.map((s, i) => (
              <div key={i} className="text-center md:text-left md:border-l md:first:border-l-0 md:pl-6 md:first:pl-0 border-bd">
                <div
                  className="text-teal font-extrabold leading-none mb-3"
                  style={{ fontSize: 'clamp(36px,4.5vw,56px)', letterSpacing: '-.04em' }}
                >
                  {s.value}
                </div>
                <div className="text-[15px] font-bold text-tx mb-1">{s.label}</div>
                {s.sub && <div className="text-xs text-tx-3 font-medium">{s.sub}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ARTICLE */}
      <article className="px-6 pt-16 pb-10">
        <div className="max-w-[760px] mx-auto">
          <CaseStudyBody blocks={study.body} />
          <p className="mt-14 pt-6 border-t border-bd text-[13px] text-tx-3 leading-relaxed">
            <span className="font-semibold text-tx-2">About the data.</span> {plainText(study.sources)}
          </p>
        </div>
      </article>

      {/* TIMELINE */}
      {study.timeline && study.timeline.length > 0 && (
        <section className="px-6 py-20 md:py-24 mt-10" style={{ background: '#0F1314' }}>
          <div className="max-w-[1000px] mx-auto">
            <div className="stag">The Timeline</div>
            <h2
              className="font-extrabold text-white mb-12"
              style={{ fontSize: 'clamp(28px,3.5vw,40px)', letterSpacing: '-.025em', lineHeight: 1.15 }}
            >
              How it unfolded
            </h2>
            <div className={`grid grid-cols-1 sm:grid-cols-2 ${study.timeline.length >= 5 ? 'md:grid-cols-5' : 'md:grid-cols-4'} gap-4`}>
              {study.timeline.map((s, i) => (
                <div
                  key={i}
                  className="rounded-s p-5"
                  style={{ background: 'rgba(255,255,255,.04)', border: '1px solid rgba(255,255,255,.08)' }}
                >
                  <div className="text-[11px] font-extrabold text-teal uppercase mb-2" style={{ letterSpacing: '.12em' }}>
                    {s.when}
                  </div>
                  <div className="text-base font-extrabold text-white mb-2" style={{ letterSpacing: '-.01em' }}>
                    {s.title}
                  </div>
                  <div className="text-[13px] text-white/55 leading-snug">{plainText(s.text)}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* STACK */}
      {study.stack && study.stack.length > 0 && (
        <section className="px-6 py-20 bg-wh">
          <div className="max-w-[1100px] mx-auto">
            <div className="stag">What We Ran</div>
            <h2 className="sttl">The stack behind the result</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-10">
              {study.stack.map(t => (
                <div key={t} className="border border-bd rounded-s py-5 px-4 text-center font-bold text-tx">
                  {t}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* RELATED */}
      {related.length > 0 && (
        <section className="px-6 py-20 bg-off print:hidden">
          <div className="max-w-[1100px] mx-auto">
            <div className="stag">Keep Reading</div>
            <h2 className="font-extrabold mb-10" style={{ fontSize: 'clamp(26px,3vw,36px)', letterSpacing: '-.025em' }}>
              More results like this
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {related.map(s => (
                <CaseStudyCard key={s.slug} study={s} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="px-6 py-24 print:hidden">
        <div className="max-w-[1100px] mx-auto">
          <div
            className="rounded-l p-10 md:p-16 text-center relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg,#0F1314 0%,#1D2637 100%)' }}
          >
            <div
              className="absolute -top-20 -right-20 w-[300px] h-[300px] pointer-events-none"
              style={{ background: 'radial-gradient(circle,rgba(0,190,157,.18) 0%,transparent 70%)' }}
            />
            <div className="relative z-10">
              <h2
                className="font-extrabold text-white mb-4"
                style={{ fontSize: 'clamp(28px,3.8vw,44px)', letterSpacing: '-.025em', lineHeight: 1.15 }}
              >
                Want results like this for your brand?
              </h2>
              <p className="text-white/65 mb-8 max-w-[600px] mx-auto" style={{ fontSize: 17, lineHeight: 1.55 }}>
                Book a free 45-minute audit. We screen-share your accounts and show you exactly what we would do.
              </p>
              <a href={auditCTA.href} className="bp bpl">
                Book Your Free Audit →
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
