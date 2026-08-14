import type { Metadata } from 'next';
import { getValues, getTeam } from '@/lib/content';
import FinalCTA from '@/components/FinalCTA';
import JsonLd from '@/components/JsonLd';
import { pageMetadata } from '@/lib/seo';
import { personSchema, breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = pageMetadata({
  title: 'About Us | Franchise Marketing Experts',
  description:
    "We didn't stumble into franchise marketing. We chose it. Meet Tristynn McGowan and the team behind Fifth Element, the franchise marketing agency that builds hyper-local lead engines for 300+ locations.",
  path: '/about',
  keywords: ['Tristynn McGowan', 'franchise marketing agency', 'about Fifth Element', 'franchise marketing experts', 'Murrieta marketing agency'],
});

export default function AboutPage() {
  const values = getValues();
  const team = getTeam();

  return (
    <>
      <JsonLd data={personSchema()} />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'About', path: '/about' },
        ])}
      />
      <section className="pt-[160px] pb-20 px-6 text-center">
        <div className="stag inline-block">About Us</div>
        <h1 className="font-extrabold mb-5" style={{ fontSize: 'clamp(36px,5.5vw,56px)', letterSpacing: '-.03em', lineHeight: 1.08 }}>
          We&apos;re the Agency That
          <br />
          <em className="not-italic text-teal">Franchise Brands Deserve.</em>
        </h1>
        <p className="ssub mx-auto mb-10">
          Fifth Element was built from the inside out. We didn&apos;t stumble into franchise marketing. We chose it because we saw an industry full of cookie-cutter agencies delivering generic results.
        </p>
      </section>

      <section className="px-6 pb-24">
        <div className="mx max-w-mx mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="rounded-l overflow-hidden bg-off" style={{ aspectRatio: '4 / 5' }}>
              <img
                src="/team/tristynn-headshot.jpg"
                alt="Tristynn McGowan — Founder & CEO, Fifth Element"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="stag">The Founder</div>
              <h2 className="text-[28px] font-extrabold mb-2" style={{ letterSpacing: '-.02em' }}>Tristynn McGowan</h2>
              <div className="text-sm text-teal font-semibold mb-6">Founder &amp; CEO, Fifth Element</div>
              <div className="space-y-4 text-base text-tx-2 leading-relaxed">
                <p>
                  I started Fifth Element with nothing but a laptop, a vision, and the belief that I could build something better for business owners. I was 18, working out of my college dorm, saying yes to every opportunity I could find. What began as a one person operation has grown into a full-scale franchise marketing company serving brands and franchisees across the country.
                </p>
                <p>
                  Over the years, we&apos;ve built a reputation for being hands-on, fast-moving, and deeply committed to helping owners fill their locations, improve their systems, and scale with confidence.
                </p>
                <p>
                  Today, I lead a team that specializes in the unique challenges of franchising from high-volume lead generation to automated follow-up, content production, and brand-wide growth systems.
                </p>
                <p>
                  What hasn&apos;t changed since day one is the work ethic, the hunger, and the personal approach that clients say is the reason they trust Fifth Element.
                </p>
              </div>
              <a
                href="https://www.linkedin.com/in/tristynnmcgowan"
                className="inline-flex items-center gap-2 mt-6 px-6 py-3 border border-bd rounded-s text-[15px] font-semibold text-tx hover:border-teal hover:text-teal transition-all"
              >
                Connect on LinkedIn →
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx max-w-mx mx-auto">
          <div
            className="rounded-l p-10 md:p-16 text-center relative overflow-hidden"
            style={{ background: '#0F1314' }}
          >
            <div
              className="absolute top-0 left-[20%] right-[20%] h-px"
              style={{ background: 'linear-gradient(90deg, transparent, #00BE9D, transparent)', opacity: 0.3 }}
            />
            <div className="stag text-teal">Our Mission</div>
            <h3 className="font-extrabold text-white mb-4 leading-tight" style={{ fontSize: 'clamp(24px,3.5vw,36px)', letterSpacing: '-.02em' }}>
              Give Every Franchise Location
              <br />
              the Marketing It Deserves.
            </h3>
            <p className="text-lg text-white/60 leading-relaxed max-w-[700px] mx-auto">
              Most franchise marketing is built for the franchisor, not the franchisee. We flip that. Every location gets hyper-local strategy, custom creative, and data they can actually act on. Because a franchisee in Jacksonville shouldn&apos;t get the same ad as one in Portland.
            </p>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="mx max-w-mx mx-auto text-center">
          <div className="stag">Our Values</div>
          <h2 className="sttl">What We Stand For</h2>
          <p className="ssub mx-auto">
            These aren&apos;t buzzwords on a wall. They&apos;re the operating principles behind every campaign, every call, and every decision.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 text-left">
            {values.map(v => (
              <div
                key={v.number}
                className="p-9 border border-bd rounded-l transition-all hover:border-teal-bd hover:shadow-[0_12px_40px_rgba(0,190,157,.06)]"
              >
                <div className="text-[32px] font-extrabold text-teal mb-4" style={{ letterSpacing: '-.02em' }}>{v.number}</div>
                <h3 className="text-lg font-bold mb-2">{v.title}</h3>
                <p className="text-sm text-tx-2 leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec bg-off">
        <div className="mx max-w-mx mx-auto text-center">
          <div className="stag">The Team</div>
          <h2 className="sttl">Our Team</h2>
          <p className="ssub mx-auto">
            Every person on our team works directly with your brand. No handoffs. No junior reps. Senior-level execution from day one.
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
            {team.map(m => (
              <figure
                key={m.name}
                className="relative rounded-l overflow-hidden bg-dk"
                style={{ aspectRatio: '3 / 4' }}
              >
                <img src={m.photo} alt={m.name} className="w-full h-full object-cover" />
                {/* Scrim across the lower third - the shirts are already black, this
                    just guarantees the name reads on every card. */}
                <div
                  aria-hidden
                  className="absolute inset-x-0 bottom-0 pointer-events-none"
                  style={{
                    height: '50%',
                    background:
                      'linear-gradient(to top, rgba(0,0,0,.82) 0%, rgba(0,0,0,.66) 30%, rgba(0,0,0,.3) 62%, rgba(0,0,0,0) 100%)',
                  }}
                />
                <figcaption className="absolute left-0 bottom-0 p-5 lg:p-6 text-left">
                  <div
                    className="text-white font-extrabold"
                    style={{ fontSize: 'clamp(16px,1.5vw,20px)', letterSpacing: '-.01em', lineHeight: 1.2 }}
                  >
                    {m.name}
                  </div>
                  <div
                    className="mt-1 font-medium"
                    style={{ fontSize: 'clamp(12px,1.05vw,14px)', color: 'rgba(255,255,255,.7)', lineHeight: 1.35 }}
                  >
                    {m.role}
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
