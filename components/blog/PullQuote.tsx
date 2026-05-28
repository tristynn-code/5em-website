import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  /** Optional attribution line below the quote. */
  attribution?: string;
}

/** Big editorial-style blockquote for blog posts and case studies. */
export default function PullQuote({ children, attribution }: Props) {
  return (
    <blockquote className="my-10 border-l-4 border-teal pl-7 py-2">
      <p
        className="font-extrabold text-tx mb-4"
        style={{ fontSize: 'clamp(22px,2.5vw,28px)', letterSpacing: '-.02em', lineHeight: 1.35 }}
      >
        {children}
      </p>
      {attribution && <div className="text-[14px] text-tx-3 font-semibold">{attribution}</div>}
    </blockquote>
  );
}
