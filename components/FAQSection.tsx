'use client';

import { useState } from 'react';

export interface FAQ {
  question: string;
  answer: string;
}

interface Props {
  faqs: FAQ[];
  tagline?: string;
  title?: string;
  subtitle?: string;
  background?: 'white' | 'off';
}

export default function FAQSection({
  faqs,
  tagline = 'Common Questions',
  title = 'Frequently Asked Questions',
  subtitle = 'Quick answers to the most common questions franchise owners ask before working with us.',
  background = 'off',
}: Props) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className={`sec ${background === 'off' ? 'bg-off' : 'bg-wh'}`}>
      <div className="mx max-w-mx mx-auto">
        <div className="text-center mb-12">
          <div className="stag inline-block">{tagline}</div>
          <h2 className="sttl">{title}</h2>
          <p className="ssub mx-auto">{subtitle}</p>
        </div>
        <div className="max-w-[860px] mx-auto flex flex-col gap-3">
          {faqs.map((f, i) => {
            const open = openIdx === i;
            return (
              <div
                key={i}
                className="bg-wh border border-bd rounded-l overflow-hidden transition-all"
                style={{ borderColor: open ? 'rgba(0,190,157,.25)' : undefined }}
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(open ? null : i)}
                  className="w-full text-left flex items-start justify-between gap-4 px-6 py-5 hover:bg-off transition-colors"
                  aria-expanded={open}
                >
                  <span className="text-[17px] md:text-[18px] font-extrabold text-tx leading-snug" style={{ letterSpacing: '-.015em' }}>
                    {f.question}
                  </span>
                  <span
                    className="flex-shrink-0 w-7 h-7 rounded-full bg-teal-bg border border-teal-bd flex items-center justify-center text-teal font-extrabold transition-transform"
                    style={{ transform: open ? 'rotate(45deg)' : 'rotate(0)' }}
                    aria-hidden
                  >
                    +
                  </span>
                </button>
                <div
                  className="px-6 overflow-hidden transition-all"
                  style={{
                    maxHeight: open ? 600 : 0,
                    paddingBottom: open ? 24 : 0,
                    opacity: open ? 1 : 0,
                  }}
                >
                  <p className="text-[15px] leading-relaxed text-tx-2">{f.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
