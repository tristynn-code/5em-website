import type { CreativeItem } from '@/app/case-studies/types';
import RichText from './RichText';

/**
 * The real work behind a study: ad videos in phone frames (native controls,
 * nothing loads until play), static ads, coaching doc pages and landing page
 * screenshots, each with its result underneath.
 */
export default function CreativeGallery({ title, caption, items }: { title: string; caption?: string; items: CreativeItem[] }) {
  const phones = items.every(i => i.kind === 'video' || i.kind === 'image');
  // Phones keep a fixed width so two-up rows never turn into giant frames.
  const layout = phones
    ? 'flex flex-wrap justify-center'
    : `grid ${items.length >= 2 ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'}`;
  const itemWidth = phones ? 'w-[46%] sm:w-[220px] md:w-[230px]' : '';

  return (
    <figure className="my-14 -mx-2 md:-mx-16">
      <div className="px-2 md:px-16 mb-5">
        <div className="text-[11px] uppercase font-extrabold text-teal mb-2" style={{ letterSpacing: '.14em' }}>
          The actual work
        </div>
        <div className="text-[19px] font-extrabold text-tx" style={{ letterSpacing: '-.015em' }}>
          {title}
        </div>
      </div>
      <div className={`${layout} gap-4 md:gap-6 px-2 md:px-16`}>
        {items.map((it, i) => (
          <div key={i} className={`flex flex-col ${itemWidth}`}>
            <Frame item={it} />
            <div className="mt-3">
              <div className="text-[14px] font-bold text-tx leading-snug">{it.label}</div>
              {it.stat && <div className="text-[14px] font-extrabold text-teal mt-0.5">{it.stat}</div>}
              {it.note && <div className="text-[12px] text-tx-3 mt-0.5 leading-snug">{it.note}</div>}
            </div>
          </div>
        ))}
      </div>
      {caption && (
        <figcaption className="px-2 md:px-16 mt-5 text-[13px] text-tx-3 leading-relaxed">
          <RichText text={caption} />
        </figcaption>
      )}
    </figure>
  );
}

function Frame({ item }: { item: CreativeItem }) {
  if (item.kind === 'video') {
    return (
      <div className="rounded-[22px] overflow-hidden bg-dk border-[5px] border-dk shadow-[0_12px_32px_rgba(15,19,20,.12)] aspect-[9/16]">
        <video
          src={item.src}
          poster={item.poster}
          controls
          playsInline
          preload="none"
          className="w-full h-full object-cover bg-dk"
          aria-label={item.alt}
        />
      </div>
    );
  }
  if (item.kind === 'image') {
    return (
      <div className="rounded-[22px] overflow-hidden bg-dk border-[5px] border-dk shadow-[0_12px_32px_rgba(15,19,20,.12)]">
        <img src={item.src} alt={item.alt} loading="lazy" className="w-full h-auto block" />
      </div>
    );
  }
  if (item.kind === 'page') {
    return (
      <div className="rounded-s overflow-hidden border border-bd bg-wh shadow-[0_12px_32px_rgba(15,19,20,.08)]">
        <div className="flex items-center gap-1.5 px-3 py-2 border-b border-bd bg-off" aria-hidden>
          <span className="w-2 h-2 rounded-full bg-[#E5E7EB]" />
          <span className="w-2 h-2 rounded-full bg-[#E5E7EB]" />
          <span className="w-2 h-2 rounded-full bg-[#E5E7EB]" />
        </div>
        <img src={item.src} alt={item.alt} loading="lazy" className="w-full h-auto block" />
      </div>
    );
  }
  return (
    <div className="rounded-s overflow-hidden border border-bd bg-wh shadow-[0_12px_32px_rgba(15,19,20,.08)]">
      <img src={item.src} alt={item.alt} loading="lazy" className="w-full h-auto block" />
    </div>
  );
}
