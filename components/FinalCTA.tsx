import { auditCTA } from '@/lib/site';

interface Props {
  title?: string;
  subtitle?: string;
}

export default function FinalCTA({
  title = 'Ready to Fix Your Franchise Marketing?',
  subtitle = "Book your free audit and get 3+ improvements — or we'll send you $100.",
}: Props) {
  return (
    <section className="py-20 px-8 text-center border-t border-bd">
      <h2 className="font-extrabold tracking-tight mb-3 text-tx" style={{ fontSize: 'clamp(28px,3.5vw,40px)', letterSpacing: '-.03em' }}>
        {title}
      </h2>
      <p className="text-base text-tx-2 mb-7">{subtitle}</p>
      <a href={auditCTA.href} className="bp bpl">
        Book Your Free Audit →
      </a>
    </section>
  );
}
