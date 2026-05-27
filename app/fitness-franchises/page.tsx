import type { Metadata } from 'next';
import VerticalPageLayout from '@/components/VerticalPageLayout';
import JsonLd from '@/components/JsonLd';
import { pageMetadata } from '@/lib/seo';
import { serviceSchema, breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = pageMetadata({
  title: 'Fitness Franchise Marketing Agency | EMS, Pilates, HIIT, Gym Ads',
  description:
    'Franchise marketing built for fitness brands. We manage paid ads, UGC creative, and lead generation for EMS, Pilates, HIIT, and gym franchises across 100s of locations.',
  path: '/fitness-franchises',
  keywords: ['fitness franchise marketing', 'EMS franchise marketing', 'Pilates franchise marketing', 'HIIT franchise marketing', 'gym franchise ads', 'BODY20 marketing', 'Pilates Addiction marketing', 'iFlex marketing'],
});

const serviceLd = serviceSchema({
  name: 'Fitness Franchise Marketing',
  description: 'Franchise marketing for fitness brands: EMS, Pilates, HIIT, yoga, CrossFit, stretch and recovery concepts.',
  path: '/fitness-franchises',
  serviceType: 'Fitness Franchise Marketing',
});

export default function FitnessFranchisesPage() {
  return (
    <>
      <JsonLd data={serviceLd} />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Industries', path: '/fitness-franchises' },
          { name: 'Fitness Franchises', path: '/fitness-franchises' },
        ])}
      />
      <VerticalPageLayout
      heroTag="Fitness Franchises"
      heroHeading={
        <>
          Marketing Built to Fill
          <br />
          <em>Fitness Franchises.</em>
        </>
      }
      heroSubcopy="From EMS studios to Pilates reformer classes to HIIT gyms, we know what converts for every fitness modality. Our playbook is built from real data across 100s of fitness franchise locations."
      heroSlides={[
        { src: 'https://assets.cdn.filesafe.space/Bvl8985Bn5drFTi6qZJM/media/69df2ff9190683601a44ef63.jpg', alt: 'Pilates Addiction studio' },
        { src: 'https://assets.cdn.filesafe.space/Bvl8985Bn5drFTi6qZJM/media/69df2ff9243975ecf72e7b90.jpg', alt: 'BODY20 studio' },
        { src: 'https://assets.cdn.filesafe.space/Bvl8985Bn5drFTi6qZJM/media/69e515ec2c135a8c835b2c5b.jpg', alt: 'Pilates Addiction studio interior' },
        { src: 'https://assets.cdn.filesafe.space/Bvl8985Bn5drFTi6qZJM/media/69e51580c56ad27908e910dd.jpg', alt: 'BODY20 training' },
      ]}
      whyTag="Why We're Different"
      whyTitle="We Speak Fitness. Not Generic Marketing."
      whyCopy="Most agencies run the same playbook for a Pilates studio that they do for a pizza franchise. That's why their ads don't work. Every fitness modality has its own audience psychology, its own offer structure, and its own creative language. We've tested it all, and we know what converts."
      introTag="What We Deliver"
      introTitle="The Franchise Lead Engine for Fitness Brands"
      introSubtitle="Every part of our system is tuned for fitness. No generic templates. No copy-paste campaigns."
      brandsTag="Fitness Brands We Work With"
      brandsTitle="Trusted by Leading Fitness Franchises"
      brands={[
        { src: 'https://assets.cdn.filesafe.space/Bvl8985Bn5drFTi6qZJM/media/69c61c1f9619acdae09d4701.svg', alt: 'BODY20' },
        { src: 'https://assets.cdn.filesafe.space/Bvl8985Bn5drFTi6qZJM/media/69c61cd67794bf85bf5349a6.png', alt: 'Pilates Addiction' },
      ]}
      testimonial={{
        quote: 'We have been inundated with leads to the point we can barely keep up. The team at Fifth Element knows fitness inside and out.',
        avatar: 'https://assets.cdn.filesafe.space/Bvl8985Bn5drFTi6qZJM/media/69b5f1ef87f0f23941f78333.jpeg',
        name: 'Richard Mazzarino',
        meta: 'Houston, TX',
      }}
      ctaTitle="Ready to Fill Your Fitness Franchise?"
      ctaSubtitle="Book your free audit and we'll show you exactly how we'd generate leads for your fitness brand."
    >
      {/* FEATURE 1: MODALITY-SPECIFIC CREATIVE */}
      <section className="feat" style={{ background: '#F7F7F7' }}>
        <div className="feat-grid mx">
          <div className="feat-text">
            <div className="feat-eb">Creative That Converts</div>
            <h3 className="feat-h">Modality-Specific Creative</h3>
            <p className="feat-p">EMS leads with education. Pilates leads with aspirational lifestyle. HIIT leads with energy and urgency. We build the right creative language for each fitness modality because what converts for a reformer class will never convert for a boxing franchise.</p>
            <ul className="feat-list">
              <li><strong>Hook libraries</strong> tuned per modality, tested across 100s of locations</li>
              <li><strong>Creative testing cycles</strong> every 2 weeks so ads never go stale</li>
              <li><strong>Brand-compliant design</strong> that still feels native to each platform</li>
            </ul>
          </div>
          <div className="feat-visual">
            <div className="mockup-ad-grid">
              <div className="mockup-ad">
                <div className="mockup-ad-tag" style={{ background: 'rgba(0,190,157,.15)', color: '#00BE9D' }}>EMS</div>
                <div className="mockup-ad-img" style={{ background: 'linear-gradient(135deg,#1a2332,#2d4263)' }}>
                  <div className="mockup-ad-overlay">20 minutes.<br />Full-body results.</div>
                </div>
                <div className="mockup-ad-footer"><span className="mockup-ad-brand">BODY20</span><span className="mockup-ad-cta">Learn More</span></div>
              </div>
              <div className="mockup-ad">
                <div className="mockup-ad-tag" style={{ background: 'rgba(255,107,155,.15)', color: '#ff6b9b' }}>PILATES</div>
                <div className="mockup-ad-img" style={{ background: 'linear-gradient(135deg,#3d2645,#8a4d76)' }}>
                  <div className="mockup-ad-overlay">Stronger. Longer.<br />Leaner.</div>
                </div>
                <div className="mockup-ad-footer"><span className="mockup-ad-brand">Pilates Addiction</span><span className="mockup-ad-cta">Book Class</span></div>
              </div>
              <div className="mockup-ad">
                <div className="mockup-ad-tag" style={{ background: 'rgba(255,159,39,.15)', color: '#ff9f27' }}>HIIT</div>
                <div className="mockup-ad-img" style={{ background: 'linear-gradient(135deg,#2c1810,#8b3a1f)' }}>
                  <div className="mockup-ad-overlay">30 minutes.<br />Zero excuses.</div>
                </div>
                <div className="mockup-ad-footer"><span className="mockup-ad-brand">HIIT Studio</span><span className="mockup-ad-cta">Free Trial</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE 2: HYPER-LOCAL TARGETING */}
      <section className="feat">
        <div className="feat-grid mx feat-reverse">
          <div className="feat-text">
            <div className="feat-eb">Right Audience, Right Zip Code</div>
            <h3 className="feat-h">Hyper-Local Targeting</h3>
            <p className="feat-p">Fitness is a proximity business. Nobody drives 20 miles to a Pilates class. We build campaigns with tight radius targeting tuned to each studio's real drive-time zone, layered with interest and behavioral signals that filter out tire-kickers.</p>
            <ul className="feat-list">
              <li><strong>3-5 mile radius targeting</strong> calibrated per market density</li>
              <li><strong>Behavioral signals</strong> filtered for purchase intent, not just interest</li>
              <li><strong>Location-aware creative</strong> that references the neighborhood by name</li>
            </ul>
          </div>
          <div className="feat-visual">
            <div className="mockup-map">
              <div className="mockup-map-pin">
                <div className="mockup-map-pin-dot"></div>
                <div className="mockup-map-pin-ring"></div>
                <div className="mockup-map-pin-ring mockup-map-pin-ring-2"></div>
              </div>
              <div className="mockup-map-radius"></div>
              <div className="mockup-map-streets"></div>
              <div className="mockup-map-label">
                <div style={{ fontSize: 11, color: '#777', fontWeight: 500 }}>Studio location</div>
                <div style={{ fontSize: 13, color: '#1a1a1a', fontWeight: 700, marginTop: 2 }}>3-mile radius</div>
              </div>
              <div className="mockup-map-stats">
                <div>
                  <div className="mockup-map-stat-num">14,280</div>
                  <div className="mockup-map-stat-lbl">In-market audience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE 3: UGC FROM REAL MEMBERS */}
      <section className="feat" style={{ background: '#F7F7F7' }}>
        <div className="feat-grid mx">
          <div className="feat-text">
            <div className="feat-eb">Authenticity Wins</div>
            <h3 className="feat-h">UGC From Real Members</h3>
            <p className="feat-p">Stock fitness photography is dead. Scrollers can smell it from a mile away. We coach your members, trainers, and franchisees to capture authentic content on their own phones, then we edit it into ad-ready creative that outperforms polished content every single time.</p>
            <ul className="feat-list">
              <li><strong>We brief, they shoot, we edit</strong> — 3-4 new ad-ready clips every cycle</li>
              <li><strong>Creative coaching guide</strong> so franchisees know exactly what to capture</li>
              <li><strong>Testimonial pipeline</strong> turns happy members into your best salespeople</li>
            </ul>
          </div>
          <div className="feat-visual">
            <div className="mockup-phone">
              <div className="mockup-phone-notch"></div>
              <div className="mockup-phone-screen">
                <div className="mockup-reel">
                  <div className="mockup-reel-bg" style={{ background: 'linear-gradient(135deg,#3d2645,#8a4d76)' }}></div>
                  <div className="mockup-reel-top">
                    <div className="mockup-reel-user">
                      <div className="mockup-reel-avatar"></div>
                      <span>pilatesaddiction_bk</span>
                    </div>
                    <div className="mockup-reel-live">LIVE</div>
                  </div>
                  <div className="mockup-reel-caption">Real class. Real members. Real results. 🏻💨</div>
                  <div className="mockup-reel-bottom">
                    <div className="mockup-reel-actions"><span>❤️ 2.4K</span><span>💬 89</span><span>↗ 340</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE 4: INTRO OFFER OPTIMIZATION */}
      <section className="feat">
        <div className="feat-grid mx feat-reverse">
          <div className="feat-text">
            <div className="feat-eb">The Right Offer Converts 3x Higher</div>
            <h3 className="feat-h">Intro Offer Optimization</h3>
            <p className="feat-p">Free class, discounted first month, bundle packages, trial memberships. The offer is often more important than the ad itself. We've tested dozens of intro offers across every fitness modality and we know exactly which ones convert in your market.</p>
            <ul className="feat-list">
              <li><strong>Offer testing framework</strong> across EMS, Pilates, HIIT, and hybrid concepts</li>
              <li><strong>Price anchoring strategies</strong> that make your full membership feel like a deal</li>
              <li><strong>Continuous optimization</strong> based on close rate, not just lead volume</li>
            </ul>
          </div>
          <div className="feat-visual">
            <div className="mockup-offers">
              <div className="mockup-offer">
                <div className="mockup-offer-label">OPTION A</div>
                <div className="mockup-offer-title">Free Intro Class</div>
                <div className="mockup-offer-meta">Low commitment · High lead volume</div>
                <div className="mockup-offer-bar"><div className="mockup-offer-bar-fill" style={{ width: '62%' }}></div></div>
                <div className="mockup-offer-metric">62% lead-to-booked</div>
              </div>
              <div className="mockup-offer mockup-offer-winner">
                <div className="mockup-offer-winner-tag">WINNER</div>
                <div className="mockup-offer-label" style={{ color: '#00BE9D' }}>OPTION B</div>
                <div className="mockup-offer-title">3 Classes for $29</div>
                <div className="mockup-offer-meta">Paid commitment · Higher show rate</div>
                <div className="mockup-offer-bar"><div className="mockup-offer-bar-fill" style={{ width: '87%', background: '#00BE9D' }}></div></div>
                <div className="mockup-offer-metric" style={{ color: '#00BE9D' }}>87% lead-to-booked</div>
              </div>
              <div className="mockup-offer">
                <div className="mockup-offer-label">OPTION C</div>
                <div className="mockup-offer-title">First Month $49</div>
                <div className="mockup-offer-meta">Higher barrier · Better LTV</div>
                <div className="mockup-offer-bar"><div className="mockup-offer-bar-fill" style={{ width: '41%' }}></div></div>
                <div className="mockup-offer-metric">41% lead-to-booked</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE 5: SPEED TO LEAD */}
      <section className="feat" style={{ background: '#F7F7F7' }}>
        <div className="feat-grid mx">
          <div className="feat-text">
            <div className="feat-eb">60 Seconds or Less</div>
            <h3 className="feat-h">Speed to Lead</h3>
            <p className="feat-p">Fitness leads go cold fast. A prospect fills out a form, then 30 seconds later they're looking at your competitor. Our automation contacts every lead within 60 seconds — SMS first, email second, booking link right in the message — so they book with you before they shop anyone else.</p>
            <ul className="feat-list">
              <li><strong>Instant SMS + email</strong> triggered the moment a lead submits</li>
              <li><strong>Automated booking links</strong> with calendar availability built in</li>
              <li><strong>Multi-step nurture</strong> for leads that don't book on the first touch</li>
            </ul>
          </div>
          <div className="feat-visual">
            <div className="mockup-timeline">
              <div className="mockup-timeline-item mockup-timeline-item-done">
                <div className="mockup-timeline-dot"></div>
                <div className="mockup-timeline-content">
                  <div className="mockup-timeline-time">0:00</div>
                  <div className="mockup-timeline-event">Lead submits form</div>
                  <div className="mockup-timeline-detail">sarah.j@email.com</div>
                </div>
              </div>
              <div className="mockup-timeline-item mockup-timeline-item-done">
                <div className="mockup-timeline-dot"></div>
                <div className="mockup-timeline-content">
                  <div className="mockup-timeline-time">0:12</div>
                  <div className="mockup-timeline-event">SMS sent</div>
                  <div className="mockup-timeline-detail">&ldquo;Hey Sarah! Here&apos;s your booking link...&rdquo;</div>
                </div>
              </div>
              <div className="mockup-timeline-item mockup-timeline-item-done">
                <div className="mockup-timeline-dot"></div>
                <div className="mockup-timeline-content">
                  <div className="mockup-timeline-time">0:34</div>
                  <div className="mockup-timeline-event">Email delivered</div>
                  <div className="mockup-timeline-detail">Intro offer + studio welcome</div>
                </div>
              </div>
              <div className="mockup-timeline-item mockup-timeline-item-active">
                <div className="mockup-timeline-dot"></div>
                <div className="mockup-timeline-content">
                  <div className="mockup-timeline-time">2:47</div>
                  <div className="mockup-timeline-event">Class booked</div>
                  <div className="mockup-timeline-detail" style={{ color: '#00BE9D', fontWeight: 700 }}>Saturday, 10am ✓</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE 6: MULTI-LOCATION DASHBOARD */}
      <section className="feat">
        <div className="feat-grid mx feat-reverse">
          <div className="feat-text">
            <div className="feat-eb">See Everything at Once</div>
            <h3 className="feat-h">Multi-Location Dashboard</h3>
            <p className="feat-p">Running one studio is hard. Running 12 across three states without real-time visibility is impossible. Our dashboard shows performance across every location, every campaign, and every creative in a single view, with AI-driven flags that tell you exactly where to focus your attention.</p>
            <ul className="feat-list">
              <li><strong>Live location-by-location view</strong> of CPL, lead volume, and show rates</li>
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
                  <div className="mockup-dash-loc-name">Nichols Hills, OK</div>
                  <div className="mockup-dash-loc-bar"><div className="mockup-dash-loc-bar-fill" style={{ width: '92%', background: '#00BE9D' }}></div></div>
                  <div className="mockup-dash-loc-val">$8.50</div>
                </div>
              </div>
              <div className="mockup-dash-row">
                <div className="mockup-dash-loc">
                  <div className="mockup-dash-loc-name">Bakersfield, CA</div>
                  <div className="mockup-dash-loc-bar"><div className="mockup-dash-loc-bar-fill" style={{ width: '85%', background: '#00BE9D' }}></div></div>
                  <div className="mockup-dash-loc-val">$11.40</div>
                </div>
              </div>
              <div className="mockup-dash-row">
                <div className="mockup-dash-loc">
                  <div className="mockup-dash-loc-name">Houston, TX</div>
                  <div className="mockup-dash-loc-bar"><div className="mockup-dash-loc-bar-fill" style={{ width: '78%', background: '#00BE9D' }}></div></div>
                  <div className="mockup-dash-loc-val">$9.80</div>
                </div>
              </div>
              <div className="mockup-dash-row">
                <div className="mockup-dash-loc">
                  <div className="mockup-dash-loc-name">Palm Beach, FL</div>
                  <div className="mockup-dash-loc-bar"><div className="mockup-dash-loc-bar-fill" style={{ width: '48%', background: '#EF9F27' }}></div></div>
                  <div className="mockup-dash-loc-val" style={{ color: '#EF9F27' }}>$18.20</div>
                </div>
              </div>
              <div className="mockup-dash-alert">
                <span style={{ color: '#EF9F27' }}>⚠</span>
                <span>Palm Beach CPL above network avg — review creative</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </VerticalPageLayout>
    </>
  );
}
