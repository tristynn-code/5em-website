import Link from 'next/link';

export default function PreviewShell({
  label,
  title,
  children,
}: {
  label: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Compact label bar so the section reads in isolation */}
      <section className="pt-[120px] pb-6 px-6 bg-off">
        <div className="mx flex flex-col md:flex-row md:items-end md:justify-between gap-3">
          <div>
            <div className="text-[11px] uppercase font-extrabold text-teal mb-1.5" style={{ letterSpacing: '.14em' }}>
              {label}
            </div>
            <h1 className="text-tx font-extrabold leading-tight" style={{ fontSize: 'clamp(22px,2.6vw,30px)', letterSpacing: '-.02em' }}>
              {title}
            </h1>
          </div>
          <Link href="/preview/sections" className="bs self-start md:self-auto">← All variants</Link>
        </div>
      </section>

      {/* Isolated section */}
      {children}
    </>
  );
}
