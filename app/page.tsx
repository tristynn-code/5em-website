import HeroDashboard from '@/components/HeroDashboard';
import PartnerShowcase from '@/components/PartnerShowcase';
import ProblemSection from '@/components/ProblemSection';
import ThreePillarSystem from '@/components/ThreePillarSystem';
import HowItWorks from '@/components/HowItWorks';
import IndustriesShowcase from '@/components/IndustriesShowcase';
import CaseStudiesGrid from '@/components/CaseStudiesGrid';
import TestimonialsGrid from '@/components/TestimonialsGrid';
import AuditOffer from '@/components/AuditOffer';
import WhoWeServe from '@/components/WhoWeServe';
import FinalCTA from '@/components/FinalCTA';
import FAQSection from '@/components/FAQSection';
import JsonLd from '@/components/JsonLd';
import { auditCTA } from '@/lib/site';
import { faqSchema } from '@/lib/schema';
import faqs from '@/content/faqs-home.json';

export default function Home() {
  return (
    <>
      <section className="pt-[150px] pb-16 px-8 text-center">
        <div className="inline-flex items-center gap-2 bg-teal-bg border border-teal-bd px-[18px] py-2 rounded-full text-[13px] font-semibold text-teal mb-7">
          ★★★★★ &nbsp;#1 Franchise Marketing Agency
        </div>
        <h1
          className="font-extrabold mb-6 max-w-[900px] mx-auto"
          style={{ fontSize: 'clamp(40px,6vw,72px)', lineHeight: 1.04, letterSpacing: '-.04em' }}
        >
          We Don&apos;t Do Generic.
          <br />
          We Do <em className="not-italic text-teal">Franchise.</em>
        </h1>
        <p
          className="text-tx-2 mx-auto max-w-[620px] mb-10"
          style={{ fontSize: 'clamp(17px,1.8vw,20px)', lineHeight: 1.6 }}
        >
          We help franchise brands generate thousands of leads per month with hyper-local ads, UGC creative, and AI-powered insights.
        </p>
        <div className="flex gap-3 justify-center flex-wrap mb-16">
          <a href={auditCTA.href} className="bp bpl">Book Your Free Franchise Audit →</a>
          <a href="/case-studies" className="bs">See our results →</a>
        </div>
        <HeroDashboard />
      </section>

      <PartnerShowcase />
      <ProblemSection />
      <ThreePillarSystem />
      <HowItWorks />
      <IndustriesShowcase />
      <CaseStudiesGrid />
      <TestimonialsGrid />
      <AuditOffer />
      <WhoWeServe />
      <FAQSection
        faqs={faqs}
        tagline="FAQ"
        title="Franchise Marketing Questions, Answered"
        subtitle="The questions franchise owners and franchisors ask us the most, with straight answers in plain English."
      />
      <JsonLd data={faqSchema(faqs)} />
      <FinalCTA />
    </>
  );
}
