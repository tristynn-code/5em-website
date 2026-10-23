import Link from 'next/link';
import CaseStudyCard from '@/components/case-studies/CaseStudyCard';
import { getFeaturedStudies, studies } from '@/app/case-studies/studies';

/** Homepage case studies section: the featured studies, linking into /case-studies. */
export default function CaseStudiesGrid() {
  const featured = getFeaturedStudies().slice(0, 3);
  if (featured.length === 0) return null;

  return (
    <section className="sec bg-off">
      <div className="mx">
        <div className="ctr">
          <div className="stag">Case Studies</div>
          <h2 className="sttl">Real Studios. Real Numbers.</h2>
          <p className="ssub mx-auto mb-12">
            Presale records, founding-member launches, and cost per lead turnarounds from the franchise locations we run.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-[1100px] mx-auto">
          {featured.map(s => (
            <CaseStudyCard key={s.slug} study={s} />
          ))}
        </div>
        <div className="ctr">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 mt-10 text-[15px] font-bold text-teal hover:gap-3 transition-all"
          >
            View all {studies.length} case studies →
          </Link>
        </div>
      </div>
    </section>
  );
}
