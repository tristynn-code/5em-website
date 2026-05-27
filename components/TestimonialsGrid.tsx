import { getFeaturedTestimonials } from '@/lib/content';

interface Props {
  limit?: number;
  tagline?: string;
  title?: string;
}

export default function TestimonialsGrid({ limit = 6, tagline = 'Client Voices', title = 'What Franchise Owners Say' }: Props) {
  const testimonials = getFeaturedTestimonials(limit);

  return (
    <section className="sec">
      <div className="mx ctr">
        <div className="stag">{tagline}</div>
        <h2 className="sttl">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
          {testimonials.map(t => (
            <div
              key={t.id}
              className="bg-wh border border-bd rounded-2xl p-7 flex flex-col transition-all hover:shadow-[0_12px_40px_rgba(0,0,0,.06)] hover:-translate-y-1 hover:[transform:translateY(-3px)_rotate(-.3deg)]"
            >
              <div className="text-[#F2A623] text-sm mb-3.5" style={{ letterSpacing: '2px' }}>
                ★★★★★
              </div>
              <p className="text-[15px] leading-relaxed text-tx-2 flex-1 mb-6">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-3 pt-4 border-t border-bd">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-11 h-11 rounded-full object-cover bg-off flex-shrink-0"
                />
                <div className="text-left">
                  <div className="text-sm font-bold text-tx">{t.name}</div>
                  <div className="text-xs text-tx-3 mt-0.5">{t.role}</div>
                  <div className="text-[11px] text-teal font-semibold mt-0.5">{t.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
