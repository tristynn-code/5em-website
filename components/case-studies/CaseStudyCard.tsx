import Link from 'next/link';
import { getBrandMeta } from '@/app/case-studies/brands';
import type { CaseStudy } from '@/app/case-studies/types';
import { plainText } from './RichText';

/** Grid card linking to a case study. `large` is the featured treatment. */
export default function CaseStudyCard({ study, large }: { study: CaseStudy; large?: boolean }) {
  const brand = getBrandMeta(study.brand);
  const lead = study.heroStats[0];

  return (
    <Link
      href={`/case-studies/${study.slug}`}
      className={`group border border-bd rounded-l overflow-hidden bg-wh flex flex-col transition-all hover:-translate-y-[3px] hover:shadow-[0_16px_48px_rgba(0,190,157,.08)] hover:border-teal-bd ${
        large ? 'md:col-span-2 md:flex-row' : ''
      }`}
    >
      <div
        className={`relative overflow-hidden ${large ? 'md:w-1/2 aspect-[16/10] md:aspect-auto' : 'aspect-[16/9]'}`}
        style={{ background: 'linear-gradient(135deg,#0F1314 0%,#1D2637 100%)' }}
      >
        {(study.cover?.src ?? brand.photo) && (
          <img
            src={study.cover?.src ?? brand.photo}
            alt=""
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            style={{ objectPosition: study.cover ? study.cover.position : brand.photoPosition }}
          />
        )}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(180deg,rgba(15,19,20,.15) 0%,rgba(15,19,20,.78) 100%)' }}
        />
        <div className="absolute left-6 right-6 bottom-5 text-white">
          {lead && (
            <>
              <div
                className="font-extrabold leading-none mb-1.5"
                style={{ fontSize: large ? 'clamp(48px,5vw,64px)' : 40, letterSpacing: '-.04em' }}
              >
                {lead.value}
              </div>
              <div className="text-[13px] font-semibold text-white/80">{lead.label}</div>
            </>
          )}
        </div>
        <div className="absolute top-5 left-6">
          {brand.logoWhite ? (
            <img src={brand.logoWhite} alt={brand.name} style={{ height: Math.round(brand.logoHeight * 0.6), width: 'auto' }} />
          ) : (
            <span className="text-[11px] uppercase font-extrabold text-teal" style={{ letterSpacing: '.14em' }}>
              Fifth Element Playbook
            </span>
          )}
        </div>
      </div>
      <div className={`p-6 md:p-7 flex flex-col flex-1 ${large ? 'md:w-1/2 md:p-10 justify-center' : ''}`}>
        <div className="text-[11px] uppercase font-semibold text-tx-3 mb-3" style={{ letterSpacing: '.14em' }}>
          {study.kind === 'playbook' ? 'Playbook' : 'Case Study'} &middot; {brand.id === 'network' ? 'Multi-brand' : brand.name}
          {study.location ? ` · ${study.location}` : ''}
        </div>
        <h3
          className="font-extrabold text-tx mb-3"
          style={{ fontSize: large ? 'clamp(24px,2.6vw,32px)' : 21, letterSpacing: '-.02em', lineHeight: 1.2 }}
        >
          {plainText(study.cardTitle ?? study.title)}
        </h3>
        <p className="text-[15px] text-tx-2 leading-[1.6] mb-5 flex-1">{plainText(study.summary)}</p>
        <div className="flex gap-2 flex-wrap mb-5">
          {study.tags.slice(0, 3).map(t => (
            <span key={t} className="px-3 py-1.5 bg-teal-bg border border-teal-bd rounded-lg text-[11px] font-bold text-teal">
              {t}
            </span>
          ))}
        </div>
        <span className="text-[14px] font-bold text-teal inline-flex items-center gap-1 group-hover:gap-2 transition-all">
          Read the {study.kind === 'playbook' ? 'playbook' : 'case study'} →
        </span>
      </div>
    </Link>
  );
}
