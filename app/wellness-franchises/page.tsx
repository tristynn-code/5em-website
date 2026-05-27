import type { Metadata } from 'next';
import VerticalPageLayout from '@/components/VerticalPageLayout';
import JsonLd from '@/components/JsonLd';
import { pageMetadata } from '@/lib/seo';
import { serviceSchema, breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = pageMetadata({
  title: 'Wellness Franchise Marketing | Light Therapy, Cryo, IV, Stretch',
  description:
    'Premium franchise marketing for wellness brands. Education-first creative, affluent audience targeting, and LTV-focused strategy for light therapy, cryotherapy, IV, and recovery franchises.',
  path: '/wellness-franchises',
  keywords: ['wellness franchise marketing', 'beem Light Sauna marketing', 'cryotherapy franchise marketing', 'IV therapy franchise marketing', 'recovery franchise ads'],
});

const serviceLd = serviceSchema({
  name: 'Wellness & Recovery Franchise Marketing',
  description: 'Premium marketing for wellness and recovery franchise brands: light therapy, cryotherapy, IV, med spa, and stretch concepts.',
  path: '/wellness-franchises',
  serviceType: 'Wellness Franchise Marketing',
});

export default function WellnessFranchisesPage() {
  return (
    <>
      <JsonLd data={serviceLd} />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Industries', path: '/wellness-franchises' },
          { name: 'Wellness & Recovery', path: '/wellness-franchises' },
        ])}
      />
      <VerticalPageLayout
      heroTag="Wellness & Recovery"
      heroHeading={
        <>
          Premium Wellness Brands
          <br />
          <em>Deserve Premium Marketing.</em>
        </>
      }
      heroSubcopy="Light therapy, cryotherapy, IV drips, infrared saunas, stretch studios, med spas. The wellness space is booming, but the marketing needs to match the premium experience you deliver. We've built the playbook across 100s of wellness locations."
      heroSlides={[
        { src: 'https://assets.cdn.filesafe.space/Bvl8985Bn5drFTi6qZJM/media/69df2ff9243975ecf72e7b8f.jpg', alt: 'Wellness studio' },
        { src: 'https://assets.cdn.filesafe.space/Bvl8985Bn5drFTi6qZJM/media/69e522dbc56ad27908ec14e7.jpg', alt: 'Wellness studio interior' },
        { src: 'https://assets.cdn.filesafe.space/Bvl8985Bn5drFTi6qZJM/media/69e522db8696a78b8d293c73.jpg', alt: 'Wellness treatment' },
        { src: 'https://assets.cdn.filesafe.space/Bvl8985Bn5drFTi6qZJM/media/69e522db38381eafa8991caf.jpg', alt: 'Light therapy' },
        { src: 'https://assets.cdn.filesafe.space/Bvl8985Bn5drFTi6qZJM/media/69e522db50b9a3263a1d79e1.jpg', alt: 'Wellness recovery' },
        { src: 'https://assets.cdn.filesafe.space/Bvl8985Bn5drFTi6qZJM/media/69e522db2c135a8c835e1065.jpg', alt: 'Wellness member' },
      ]}
      whyTag="Why We're Different"
      whyTitle="We Speak Wellness. Not Generic Marketing."
      whyCopy="Wellness consumers are educated, research-driven, and willing to pay premium prices — but only if the marketing builds trust first. Most agencies run the same urgency-driven playbook they use for gyms and restaurants, then wonder why premium wellness brands don't convert. We create campaigns that educate, build credibility, and drive high-LTV membership signups."
      introTag="What We Deliver"
      introTitle="The Franchise Lead Engine for Wellness Brands"
      introSubtitle="Every part of our system is tuned for premium wellness. Education-first creative. High-intent audiences. LTV-focused strategy."
      brandsTag="Wellness Brands We Work With"
      brandsTitle="Trusted by Leading Wellness Franchises"
      brands={[
        { src: 'https://assets.cdn.filesafe.space/Bvl8985Bn5drFTi6qZJM/media/69c61ce7861524e9a15c68c3.png', alt: 'beem Light Sauna' },
        { src: 'https://assets.cdn.filesafe.space/Bvl8985Bn5drFTi6qZJM/media/69c61c507794bf3a895341c1.png', alt: 'iFlex' },
      ]}
      testimonial={{
        quote: 'You cannot go wrong with Fifth Element. They understand the wellness space and the kind of clients we need to attract.',
        avatar: 'https://assets.cdn.filesafe.space/Bvl8985Bn5drFTi6qZJM/media/69b5f17feaf08161cb663ec0.png',
        name: 'Sierra Smith',
        meta: 'Boynton Beach, FL',
      }}
      ctaTitle="Ready to Grow Your Wellness Franchise?"
      ctaSubtitle="Book your free audit and we'll show you how to attract premium wellness clients at scale."
    >
      {/* FEATURE 1: EDUCATION-FIRST CREATIVE */}
      <section className="feat" style={{ background: '#F7F7F7' }}>
        <div className="feat-grid mx">
          <div className="feat-text">
            <div className="feat-eb">Teach First, Sell Second</div>
            <h3 className="feat-h">Education-First Creative</h3>
            <p className="feat-p">Wellness consumers don't buy on impulse. They research for weeks before booking their first session. Light therapy, cryo, IV therapy, infrared — these are premium experiences that require context. Our creative leads with education: how the science works, what the benefits are, who it's for. Then conversion follows.</p>
            <ul className="feat-list">
              <li><strong>Science-backed messaging</strong> that builds credibility at every touchpoint</li>
              <li><strong>Modality explainer content</strong> tailored to each wellness category</li>
              <li><strong>Trust-first ad structure</strong> that outperforms urgency-driven creative</li>
            </ul>
          </div>
          <div className="feat-visual">
            <div className="mockup-ad-grid">
              <div className="mockup-ad">
                <div className="mockup-ad-tag" style={{ background: 'rgba(0,190,157,.15)', color: '#00BE9D' }}>LIGHT THERAPY</div>
                <div className="mockup-ad-img" style={{ background: 'linear-gradient(135deg,#1a3a3a,#0f2d2d)' }}>
                  <div className="mockup-ad-overlay">Red light therapy.<br />The science explained.</div>
                </div>
                <div className="mockup-ad-footer"><span className="mockup-ad-brand">beem Light Sauna</span><span className="mockup-ad-cta">Learn More</span></div>
              </div>
              <div className="mockup-ad">
                <div className="mockup-ad-tag" style={{ background: 'rgba(120,191,255,.15)', color: '#78bfff' }}>CRYOTHERAPY</div>
                <div className="mockup-ad-img" style={{ background: 'linear-gradient(135deg,#1e3a8a,#5b8def)' }}>
                  <div className="mockup-ad-overlay">3 minutes.<br />Recovery, amplified.</div>
                </div>
                <div className="mockup-ad-footer"><span className="mockup-ad-brand">Cryo Studio</span><span className="mockup-ad-cta">How It Works</span></div>
              </div>
              <div className="mockup-ad">
                <div className="mockup-ad-tag" style={{ background: 'rgba(239,159,39,.15)', color: '#EF9F27' }}>STRETCH</div>
                <div className="mockup-ad-img" style={{ background: 'linear-gradient(135deg,#4a2e1f,#8b5a3c)' }}>
                  <div className="mockup-ad-overlay">Stretch therapy.<br />Feel the difference.</div>
                </div>
                <div className="mockup-ad-footer"><span className="mockup-ad-brand">iFlex</span><span className="mockup-ad-cta">Free Consult</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE 2: AFFLUENT AUDIENCE TARGETING */}
      <section className="feat">
        <div className="feat-grid mx feat-reverse">
          <div className="feat-text">
            <div className="feat-eb">Reach the Right Clients</div>
            <h3 className="feat-h">Affluent Audience Targeting</h3>
            <p className="feat-p">Premium wellness isn't for everyone. A $200 IV drip or $150 cryo session requires an audience that can afford it and values it. We build campaigns targeting demographics with the income profile, lifestyle signals, and research behavior that match premium wellness consumers — not broad-spray ads that waste spend.</p>
            <ul className="feat-list">
              <li><strong>Income-verified targeting</strong> layered with wellness interest signals</li>
              <li><strong>Lifestyle behavioral data</strong> filtering for high-intent wellness seekers</li>
              <li><strong>Lookalike modeling</strong> from your existing premium member base</li>
            </ul>
          </div>
          <div className="feat-visual">
            <div className="mockup-audience">
              <div className="mockup-audience-title">Target Audience</div>
              <div className="mockup-audience-size">24,840 premium wellness seekers</div>
              <div className="mockup-audience-tags">
                <div className="mockup-audience-tag mockup-audience-tag-active">Income $120K+</div>
                <div className="mockup-audience-tag mockup-audience-tag-active">Wellness enthusiasts</div>
                <div className="mockup-audience-tag mockup-audience-tag-active">Longevity focused</div>
                <div className="mockup-audience-tag mockup-audience-tag-active">Biohackers</div>
                <div className="mockup-audience-tag mockup-audience-tag-active">Recovery-minded</div>
                <div className="mockup-audience-tag mockup-audience-tag-active">Health conscious</div>
                <div className="mockup-audience-tag">Casual browsers</div>
              </div>
              <div className="mockup-audience-excluded">
                <div className="mockup-audience-excl-label">Excluded</div>
                <div className="mockup-audience-tags">
                  <div className="mockup-audience-tag mockup-audience-tag-excl">Deal seekers</div>
                  <div className="mockup-audience-tag mockup-audience-tag-excl">Sub-$50K income</div>
                  <div className="mockup-audience-tag mockup-audience-tag-excl">One-time buyers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE 3: UGC TESTIMONIALS */}
      <section className="feat" style={{ background: '#F7F7F7' }}>
        <div className="feat-grid mx">
          <div className="feat-text">
            <div className="feat-eb">Real Results, Real People</div>
            <h3 className="feat-h">UGC Client Testimonials</h3>
            <p className="feat-p">In wellness, trust is everything. Before-and-after stories, recovery journeys, honest reviews from real members. That's what converts a skeptical prospect into a paying client. We build a testimonial pipeline that turns your happiest members into your best marketing, then deploy it as high-converting ad creative.</p>
            <ul className="feat-list">
              <li><strong>Structured testimonial capture</strong> at key membership milestones</li>
              <li><strong>Recovery journey stories</strong> that resonate with your target audience</li>
              <li><strong>Video-first testimonials</strong> edited into ad-ready creative</li>
            </ul>
          </div>
          <div className="feat-visual">
            <div className="mockup-phone">
              <div className="mockup-phone-notch"></div>
              <div className="mockup-phone-screen">
                <div className="mockup-reel">
                  <div className="mockup-reel-bg" style={{ background: 'linear-gradient(135deg,#2d4e4e,#5a8a8a)' }}></div>
                  <div className="mockup-reel-top">
                    <div className="mockup-reel-user">
                      <div className="mockup-reel-avatar" style={{ background: 'linear-gradient(135deg,#c2e0e0,#5a8a8a)' }}></div>
                      <span>rachelwellness</span>
                    </div>
                    <div className="mockup-reel-live" style={{ background: '#00BE9D', color: '#0F1314' }}>✓ MEMBER</div>
                  </div>
                  <div className="mockup-reel-caption">3 months of red light changed my skin forever ⚡</div>
                  <div className="mockup-reel-bottom">
                    <div className="mockup-reel-actions"><span>❤️ 3.2K</span><span>💬 147</span><span>↗ 480</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE 4: CONSULTATION BOOKING FLOW */}
      <section className="feat">
        <div className="feat-grid mx feat-reverse">
          <div className="feat-text">
            <div className="feat-eb">From Interest to Consultation</div>
            <h3 className="feat-h">Consultation Booking Flow</h3>
            <p className="feat-p">Wellness leads don't buy memberships from an ad — they book consultations. So we optimize every step: the ad educates, the landing page converts to a booked consult, and automated pre-visit content arrives before they walk in. By the time they're in the studio, they're already sold.</p>
            <ul className="feat-list">
              <li><strong>Consultation-focused funnels</strong> designed for premium decision journeys</li>
              <li><strong>Pre-visit education drip</strong> that warms leads before they arrive</li>
              <li><strong>Automated reminders</strong> at 24hr, 1hr, and 15min to maximize show rate</li>
            </ul>
          </div>
          <div className="feat-visual">
            <div className="mockup-calendar">
              <div className="mockup-calendar-header">
                <div className="mockup-calendar-title">Book Your Free Consult</div>
                <div className="mockup-calendar-sub">30 min · Virtual or in-studio</div>
              </div>
              <div className="mockup-calendar-week">
                <div className="mockup-cal-day"><div className="mockup-cal-day-name">MON</div><div className="mockup-cal-day-num">14</div></div>
                <div className="mockup-cal-day"><div className="mockup-cal-day-name">TUE</div><div className="mockup-cal-day-num">15</div></div>
                <div className="mockup-cal-day mockup-cal-day-active"><div className="mockup-cal-day-name">WED</div><div className="mockup-cal-day-num">16</div></div>
                <div className="mockup-cal-day"><div className="mockup-cal-day-name">THU</div><div className="mockup-cal-day-num">17</div></div>
                <div className="mockup-cal-day"><div className="mockup-cal-day-name">FRI</div><div className="mockup-cal-day-num">18</div></div>
              </div>
              <div className="mockup-calendar-slots">
                <div className="mockup-slot">9:00 AM</div>
                <div className="mockup-slot">10:30 AM</div>
                <div className="mockup-slot mockup-slot-selected">12:00 PM ✓</div>
                <div className="mockup-slot mockup-slot-booked">1:30 PM</div>
                <div className="mockup-slot">3:00 PM</div>
                <div className="mockup-slot">4:30 PM</div>
              </div>
              <div className="mockup-calendar-confirm">Consult confirmed — pre-visit guide incoming</div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE 5: LTV-FOCUSED STRATEGY */}
      <section className="feat" style={{ background: '#F7F7F7' }}>
        <div className="feat-grid mx">
          <div className="feat-text">
            <div className="feat-eb">Revenue Beyond Lead Volume</div>
            <h3 className="feat-h">LTV-Focused Strategy</h3>
            <p className="feat-p">A one-time cryo session is nice. A membership that generates $2,400/year for the next three years is the real win. We optimize for lifetime value, not just lead volume. That means targeting audiences with membership intent, creative that sells the ongoing benefit, and reporting that tracks revenue months out — not just the initial conversion.</p>
            <ul className="feat-list">
              <li><strong>Membership-first messaging</strong> that attracts long-term members, not one-offs</li>
              <li><strong>Cohort retention tracking</strong> to see how each campaign performs over time</li>
              <li><strong>LTV-optimized bidding</strong> that pays more for high-value customers</li>
            </ul>
          </div>
          <div className="feat-visual">
            <div className="mockup-ltv">
              <div className="mockup-ltv-header">
                <div className="mockup-ltv-title">Member Lifetime Value</div>
                <div className="mockup-ltv-period">Last 12 months</div>
              </div>
              <div className="mockup-ltv-main">
                <div className="mockup-ltv-value">$2,847</div>
                <div className="mockup-ltv-label">Avg LTV per member</div>
              </div>
              <div className="mockup-ltv-bars">
                <div className="mockup-ltv-row">
                  <div className="mockup-ltv-row-label">Month 1</div>
                  <div className="mockup-ltv-row-bar"><div className="mockup-ltv-row-fill" style={{ width: '22%' }}></div></div>
                  <div className="mockup-ltv-row-val">$189</div>
                </div>
                <div className="mockup-ltv-row">
                  <div className="mockup-ltv-row-label">Month 3</div>
                  <div className="mockup-ltv-row-bar"><div className="mockup-ltv-row-fill" style={{ width: '45%' }}></div></div>
                  <div className="mockup-ltv-row-val">$568</div>
                </div>
                <div className="mockup-ltv-row">
                  <div className="mockup-ltv-row-label">Month 6</div>
                  <div className="mockup-ltv-row-bar"><div className="mockup-ltv-row-fill" style={{ width: '68%' }}></div></div>
                  <div className="mockup-ltv-row-val">$1,240</div>
                </div>
                <div className="mockup-ltv-row">
                  <div className="mockup-ltv-row-label">Month 12</div>
                  <div className="mockup-ltv-row-bar"><div className="mockup-ltv-row-fill" style={{ width: '100%', background: '#00BE9D' }}></div></div>
                  <div className="mockup-ltv-row-val" style={{ color: '#00BE9D', fontWeight: 700 }}>$2,847</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE 6: PREMIUM BRAND DASHBOARD */}
      <section className="feat">
        <div className="feat-grid mx feat-reverse">
          <div className="feat-text">
            <div className="feat-eb">See Everything at Once</div>
            <h3 className="feat-h">Multi-Location Dashboard</h3>
            <p className="feat-p">Running one wellness studio is already a juggling act. Running 10 across different markets without real-time visibility is impossible. Our dashboard shows performance across every location, every campaign, and every creative in a single view — with AI-driven flags that tell you exactly where to focus.</p>
            <ul className="feat-list">
              <li><strong>Live location-by-location view</strong> of CPL, consults booked, and membership conversions</li>
              <li><strong>AI-flagged performance alerts</strong> when any location dips below benchmark</li>
              <li><strong>Franchisor-level rollup</strong> with brand-wide reporting for corporate teams</li>
            </ul>
          </div>
          <div className="feat-visual">
            <div className="mockup-dash">
              <div className="mockup-dash-header">
                <div className="mockup-dash-title">Network Performance</div>
                <div className="mockup-dash-filter">Last 30 days</div>
              </div>
              <div className="mockup-dash-row">
                <div className="mockup-dash-loc">
                  <div className="mockup-dash-loc-name">Scottsdale, AZ</div>
                  <div className="mockup-dash-loc-bar"><div className="mockup-dash-loc-bar-fill" style={{ width: '94%', background: '#00BE9D' }}></div></div>
                  <div className="mockup-dash-loc-val">$18.40</div>
                </div>
              </div>
              <div className="mockup-dash-row">
                <div className="mockup-dash-loc">
                  <div className="mockup-dash-loc-name">Austin, TX</div>
                  <div className="mockup-dash-loc-bar"><div className="mockup-dash-loc-bar-fill" style={{ width: '88%', background: '#00BE9D' }}></div></div>
                  <div className="mockup-dash-loc-val">$22.10</div>
                </div>
              </div>
              <div className="mockup-dash-row">
                <div className="mockup-dash-loc">
                  <div className="mockup-dash-loc-name">Miami, FL</div>
                  <div className="mockup-dash-loc-bar"><div className="mockup-dash-loc-bar-fill" style={{ width: '76%', background: '#00BE9D' }}></div></div>
                  <div className="mockup-dash-loc-val">$26.80</div>
                </div>
              </div>
              <div className="mockup-dash-row">
                <div className="mockup-dash-loc">
                  <div className="mockup-dash-loc-name">Denver, CO</div>
                  <div className="mockup-dash-loc-bar"><div className="mockup-dash-loc-bar-fill" style={{ width: '44%', background: '#EF9F27' }}></div></div>
                  <div className="mockup-dash-loc-val" style={{ color: '#EF9F27' }}>$38.20</div>
                </div>
              </div>
              <div className="mockup-dash-alert">
                <span style={{ color: '#EF9F27' }}>⚠</span>
                <span>Denver CPL above network avg — review creative</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </VerticalPageLayout>
    </>
  );
}
