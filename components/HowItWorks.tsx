import { Fragment } from 'react';

const steps = [
  {
    number: 1,
    title: 'Book Your Free Audit',
    description: '45-minute call where we screen-share your ad accounts and identify 3+ improvements. If we can’t, we send you $100.',
    final: false,
  },
  {
    number: 2,
    title: 'Get Your Custom Plan',
    description: 'We build a hyper-local strategy for every location — custom creative, targeted audiences, and automated follow-up.',
    final: false,
  },
  {
    number: 3,
    title: 'Watch Leads Roll In',
    description: 'Campaigns launch within 2 weeks. Dedicated CSM, real-time dashboard, monthly strategy calls. Results from day one.',
    final: true,
  },
];

export default function HowItWorks() {
  return (
    <section className="py-[100px] px-6 bg-wh">
      <div className="mx">
        <div className="text-center mb-12">
          <div className="stag inline-block">How It Works</div>
          <h2 className="sttl text-center">From Audit to Results in 3 Steps</h2>
          <p className="ssub mx-auto text-center" style={{ maxWidth: 680 }}>
            No long onboarding. No months of &ldquo;ramp-up.&rdquo; We move fast because franchise owners don&apos;t have time to wait.
          </p>
        </div>
        <div
          className="grid grid-cols-1 gap-3.5 max-w-[1100px] mx-auto items-stretch"
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(0, 1fr))' }}
        >
          <div className="hidden md:grid gap-3.5 col-span-full" style={{ gridTemplateColumns: '1fr auto 1fr auto 1fr' }}>
            {steps.map((step, idx) => (
              <Fragment key={step.number}>
                <StepCard step={step} />
                {idx < steps.length - 1 && (
                  <div className="flex items-center justify-center text-2xl text-teal font-extrabold py-2">→</div>
                )}
              </Fragment>
            ))}
          </div>
          <div className="md:hidden flex flex-col gap-3.5">
            {steps.map((step, idx) => (
              <Fragment key={step.number}>
                <StepCard step={step} />
                {idx < steps.length - 1 && (
                  <div className="flex items-center justify-center text-2xl text-teal font-extrabold rotate-90 py-2">→</div>
                )}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StepCard({ step }: { step: { number: number; title: string; description: string; final: boolean } }) {
  return (
    <div
      className={`rounded p-7 text-center flex flex-col items-center transition-all border hover:-translate-y-0.5 ${
        step.final ? 'bg-teal-bg border-teal-bd' : 'bg-wh border-bd hover:border-teal-bd'
      }`}
      style={{ transition: 'all .3s' }}
    >
      <div className="w-11 h-11 rounded-full bg-teal text-dk flex items-center justify-center text-lg font-extrabold mb-4" style={{ letterSpacing: '-.02em' }}>
        {step.number}
      </div>
      <h3 className="text-lg font-extrabold text-tx mb-2 leading-tight" style={{ letterSpacing: '-.02em' }}>{step.title}</h3>
      <p className="text-[13px] leading-relaxed font-medium text-tx-2">{step.description}</p>
    </div>
  );
}
