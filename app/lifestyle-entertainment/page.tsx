import type { Metadata } from 'next';
import VerticalPageLayout from '@/components/VerticalPageLayout';
import JsonLd from '@/components/JsonLd';
import { pageMetadata } from '@/lib/seo';
import { serviceSchema, breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = pageMetadata({
  title: 'Lifestyle Franchise Marketing | Golf, Recreation, Entertainment',
  description:
    'Marketing for lifestyle franchises. Experience-first creative, lifestyle audience targeting, and LTV-driven strategy for golf, recreation, entertainment, and membership concepts.',
  path: '/lifestyle-entertainment',
  keywords: ['lifestyle franchise marketing', 'golf franchise marketing', 'entertainment franchise ads', 'recreation franchise ads', 'Scramblers Golf marketing'],
});

const serviceLd = serviceSchema({
  name: 'Lifestyle & Entertainment Franchise Marketing',
  description: 'Marketing for lifestyle and entertainment franchise brands: golf, recreation, experiential concepts.',
  path: '/lifestyle-entertainment',
  serviceType: 'Lifestyle Franchise Marketing',
});

export default function LifestyleEntertainmentPage() {
  return (
    <>
      <JsonLd data={serviceLd} />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Industries', path: '/lifestyle-entertainment' },
          { name: 'Lifestyle & Entertainment', path: '/lifestyle-entertainment' },
        ])}
      />
      <VerticalPageLayout
      heroTag="Lifestyle Franchises"
      heroHeading={
        <>
          More Members.
          <br />
          <em>More Memories.</em>
        </>
      }
      heroSubcopy="Pet services, tutoring centers, entertainment venues, and membership clubs. We build campaigns that fill your space with the right members, students, and guests — and keep them coming back. Proven across 100s of lifestyle franchise locations."
      heroImage={{
        src: 'https://assets.cdn.filesafe.space/Bvl8985Bn5drFTi6qZJM/media/69df2ff9190683601a44ef62.png',
        alt: 'Lifestyle franchise experience',
      }}
      heroImageAspect3x2
      whyTag="Why We're Different"
      whyTitle="We Speak Lifestyle. Not Generic Marketing."
      whyCopy="Lifestyle franchises sell experiences, not products. Parents choosing a tutoring center are trusting you with their kid's confidence. Pet owners picking a daycare are leaving their family member with you. Club members want to belong. Entertainment guests want a memory. That emotional buy-in is where most agencies completely miss the mark with generic, performance-only ads. We build campaigns that speak to why people actually buy — and back it up with the systems that keep them coming back."
      introTag="What We Deliver"
      introTitle="The Franchise Lead Engine for Lifestyle Brands"
      introSubtitle="Every part of our system is tuned for lifestyle. Experience-first creative. Community-driven growth. Recurring revenue strategy."
      testimonial={{
        quote: 'You cannot go wrong with Fifth Element. They understand how to build a brand people actually want to be part of.',
        avatar: 'https://assets.cdn.filesafe.space/Bvl8985Bn5drFTi6qZJM/media/69b5f17feaf08161cb663ec0.png',
        name: 'Sierra Smith',
        meta: 'Boynton Beach, FL',
      }}
      ctaTitle="Ready to Fill Your Space?"
      ctaSubtitle="Book your free audit and we'll show you how to build a membership base that keeps coming back."
    >
      {/* FEATURE 1: EXPERIENCE-FIRST CREATIVE */}
      <section className="feat" style={{ background: '#F7F7F7' }}>
        <div className="feat-grid mx">
          <div className="feat-text">
            <div className="feat-eb">Sell the Feeling, Not the Features</div>
            <h3 className="feat-h">Experience-First Creative</h3>
            <p className="feat-p">Lifestyle franchises don't sell services, they sell moments. A kid's face lighting up when they finally crack a math problem. A dog tired and happy after a full day of play. Friends laughing their way out of an escape room. Members finding their people in your space. That's what moves prospects, and that's what your creative needs to capture. We build content systems around the emotional payoff, not just the features list.</p>
            <ul className="feat-list">
              <li><strong>Emotional moment capture</strong> framed around real member and guest experiences</li>
              <li><strong>Story-driven ad formats</strong> that stop the scroll with feeling, not claims</li>
              <li><strong>Seasonal emotional beats</strong> tied to the moments that matter most to your audience</li>
            </ul>
          </div>
          <div className="feat-visual">
            <div className="mockup-phone">
              <div className="mockup-phone-notch"></div>
              <div className="mockup-phone-screen">
                <div className="mockup-reel">
                  <div className="mockup-reel-bg" style={{ background: 'linear-gradient(135deg,#f4a261,#e76f51)' }}></div>
                  <div className="mockup-reel-top">
                    <div className="mockup-reel-user">
                      <div className="mockup-reel-avatar" style={{ background: 'linear-gradient(135deg,#ffd60a,#f4a261)' }}></div>
                      <span>brooklynclub_chi</span>
                    </div>
                    <div className="mockup-reel-live" style={{ background: '#00BE9D', color: '#0F1314' }}>✓ MEMBER</div>
                  </div>
                  <div className="mockup-reel-caption">This place became my Tuesday night ritual — I found my people here ✨</div>
                  <div className="mockup-reel-bottom">
                    <div className="mockup-reel-actions"><span>❤️ 9.4K</span><span>💬 382</span><span>↗ 1.9K</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE 2: LIFESTYLE AUDIENCE TARGETING */}
      <section className="feat">
        <div className="feat-grid mx feat-reverse">
          <div className="feat-text">
            <div className="feat-eb">Reach the Right Households</div>
            <h3 className="feat-h">Lifestyle Audience Targeting</h3>
            <p className="feat-p">A pet daycare prospect looks completely different from a tutoring center parent or a social club member. Same household might buy all three, but each needs to be reached at the right moment with the right message. We build custom audiences layered by life stage, interests, and buying signals so your budget hits parents, pet owners, club-seekers, and experience-buyers at the exact moment they're ready to sign up.</p>
            <ul className="feat-list">
              <li><strong>Life-stage segmentation</strong> that targets new parents, new pet owners, new residents</li>
              <li><strong>Interest-based layering</strong> beyond broad demographics</li>
              <li><strong>Intent signal capture</strong> that identifies research-phase buyers ready to convert</li>
            </ul>
          </div>
          <div className="feat-visual">
            <div className="mockup-audience">
              <div className="mockup-audience-title">Target Audience</div>
              <div className="mockup-audience-size">26,840 households in market</div>
              <div className="mockup-audience-tags">
                <div className="mockup-audience-tag mockup-audience-tag-active">Active parents 28-45</div>
                <div className="mockup-audience-tag mockup-audience-tag-active">Pet owners</div>
                <div className="mockup-audience-tag mockup-audience-tag-active">New residents</div>
                <div className="mockup-audience-tag mockup-audience-tag-active">Experience seekers</div>
                <div className="mockup-audience-tag mockup-audience-tag-active">Community focused</div>
                <div className="mockup-audience-tag mockup-audience-tag-active">Premium spenders</div>
                <div className="mockup-audience-tag">Deal-only shoppers</div>
              </div>
              <div className="mockup-audience-excluded">
                <div className="mockup-audience-excl-label">Excluded</div>
                <div className="mockup-audience-tags">
                  <div className="mockup-audience-tag mockup-audience-tag-excl">Out-of-market</div>
                  <div className="mockup-audience-tag mockup-audience-tag-excl">Price-sensitive only</div>
                  <div className="mockup-audience-tag mockup-audience-tag-excl">One-time trials</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE 3: MEMBER SPOTLIGHT */}
      <section className="feat" style={{ background: '#F7F7F7' }}>
        <div className="feat-grid mx">
          <div className="feat-text">
            <div className="feat-eb">Real People Beat Polished Ads</div>
            <h3 className="feat-h">Member &amp; Guest UGC Pipeline</h3>
            <p className="feat-p">Nothing sells a lifestyle experience like real people having it. A parent raving about their kid's progress. A pet owner showing off their happy dog. A club member introducing their new friends. An escape room group losing their minds over a solve. We coach your existing members, guests, and clients to capture authentic content we can deploy straight into ad campaigns that feel native, not manufactured.</p>
            <ul className="feat-list">
              <li><strong>Member spotlight system</strong> that turns happy customers into ad creative</li>
              <li><strong>Parent testimonial framework</strong> for education and kids-focused franchises</li>
              <li><strong>Group experience capture</strong> for entertainment and social venues</li>
            </ul>
          </div>
          <div className="feat-visual">
            <div className="mockup-spotlight">
              <div className="mockup-spotlight-badge">Member Spotlight · Week 47</div>
              <div className="mockup-spotlight-card">
                <div className="mockup-spotlight-header">
                  <div className="mockup-spotlight-avatar" style={{ background: 'linear-gradient(135deg,#84cc16,#22c55e)' }}></div>
                  <div className="mockup-spotlight-info">
                    <div className="mockup-spotlight-name">Sarah &amp; Bailey</div>
                    <div className="mockup-spotlight-meta">Member since 2024 · Austin, TX</div>
                  </div>
                  <div className="mockup-spotlight-stars">★★★★★</div>
                </div>
                <div className="mockup-spotlight-quote">&ldquo;Bailey runs to the door every morning. This place changed our whole routine.&rdquo;</div>
                <div className="mockup-spotlight-tags">
                  <span className="mockup-spotlight-tag">Daycare</span>
                  <span className="mockup-spotlight-tag">5-day plan</span>
                  <span className="mockup-spotlight-tag">6 months</span>
                </div>
              </div>
              <div className="mockup-spotlight-footer">
                <div className="mockup-spotlight-stat"><div className="mockup-spotlight-stat-val">184</div><div className="mockup-spotlight-stat-lbl">Shares</div></div>
                <div className="mockup-spotlight-stat"><div className="mockup-spotlight-stat-val">2.3K</div><div className="mockup-spotlight-stat-lbl">Reach</div></div>
                <div className="mockup-spotlight-stat"><div className="mockup-spotlight-stat-val">28</div><div className="mockup-spotlight-stat-lbl">Signups</div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE 4: RECURRING REVENUE PLAYBOOK */}
      <section className="feat">
        <div className="feat-grid mx feat-reverse">
          <div className="feat-text">
            <div className="feat-eb">Lifetime Value Beats First Purchase</div>
            <h3 className="feat-h">Recurring Revenue Playbook</h3>
            <p className="feat-p">Lifestyle franchises live and die on retention. A member who quits after 2 months cost you more to acquire than they paid. The brands that win are the ones tracking LTV, building onboarding sequences that convert trials into long-term members, and measuring every ad dollar against lifetime value, not first purchase. We build the systems that turn one-time prospects into multi-year revenue.</p>
            <ul className="feat-list">
              <li><strong>LTV-based bidding strategy</strong> that optimizes for long-term customers</li>
              <li><strong>Trial-to-member conversion campaigns</strong> during the critical first 30 days</li>
              <li><strong>Retention nurture flows</strong> that reduce churn through the first year</li>
            </ul>
          </div>
          <div className="feat-visual">
            <div className="mockup-ltv">
              <div className="mockup-ltv-title">Member Lifetime Value</div>
              <div className="mockup-ltv-label">Tracked across 12 months</div>
              <div className="mockup-ltv-value">$3,142</div>
              <div className="mockup-ltv-label" style={{ marginBottom: 20, paddingBottom: 16, borderBottom: '1px solid rgba(0,0,0,.07)' }}>Average LTV per member</div>
              <div className="mockup-ltv-bars-v2">
                <div className="mockup-ltv-bar-item">
                  <div className="mockup-ltv-bar-label">M1</div>
                  <div className="mockup-ltv-bar-tall"><div className="mockup-ltv-bar-fill-tall" style={{ height: '18%' }}></div></div>
                  <div className="mockup-ltv-bar-val">$247</div>
                </div>
                <div className="mockup-ltv-bar-item">
                  <div className="mockup-ltv-bar-label">M3</div>
                  <div className="mockup-ltv-bar-tall"><div className="mockup-ltv-bar-fill-tall" style={{ height: '38%' }}></div></div>
                  <div className="mockup-ltv-bar-val">$689</div>
                </div>
                <div className="mockup-ltv-bar-item">
                  <div className="mockup-ltv-bar-label">M6</div>
                  <div className="mockup-ltv-bar-tall"><div className="mockup-ltv-bar-fill-tall" style={{ height: '62%' }}></div></div>
                  <div className="mockup-ltv-bar-val">$1,420</div>
                </div>
                <div className="mockup-ltv-bar-item">
                  <div className="mockup-ltv-bar-label">M9</div>
                  <div className="mockup-ltv-bar-tall"><div className="mockup-ltv-bar-fill-tall" style={{ height: '82%' }}></div></div>
                  <div className="mockup-ltv-bar-val">$2,180</div>
                </div>
                <div className="mockup-ltv-bar-item">
                  <div className="mockup-ltv-bar-label">M12</div>
                  <div className="mockup-ltv-bar-tall"><div className="mockup-ltv-bar-fill-tall" style={{ height: '100%', background: '#00BE9D' }}></div></div>
                  <div className="mockup-ltv-bar-val">$3,142</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE 5: TRIAL & BOOKING CONVERSION */}
      <section className="feat" style={{ background: '#F7F7F7' }}>
        <div className="feat-grid mx">
          <div className="feat-text">
            <div className="feat-eb">From Interest to Booked in Seconds</div>
            <h3 className="feat-h">Trial &amp; Booking Conversion</h3>
            <p className="feat-p">Lifestyle prospects move fast. A parent researching tutoring at 9 PM wants to book a consult tonight. A pet owner comparing daycares wants to tour this week. A club prospect who fills out a form expects to hear back in minutes. We build booking flows, trial signups, and automation sequences that capture interest at its peak and convert it into booked consultations, tours, and trial classes, fast.</p>
            <ul className="feat-list">
              <li><strong>Instant-booking landing pages</strong> that convert scrollers into scheduled visits</li>
              <li><strong>60-second SMS speed-to-lead</strong> automation that hits while interest is hot</li>
              <li><strong>Trial conversion sequences</strong> designed around the specific lifestyle offer</li>
            </ul>
          </div>
          <div className="feat-visual">
            <div className="mockup-booking">
              <div className="mockup-booking-header">
                <div className="mockup-booking-title">Book a Tour</div>
                <div className="mockup-booking-sub">First visit free · 30 minutes</div>
              </div>
              <div className="mockup-booking-calendar">
                <div className="mockup-booking-day"><div className="mockup-booking-day-name">Thu</div><div className="mockup-booking-day-num">24</div></div>
                <div className="mockup-booking-day mockup-booking-day-active"><div className="mockup-booking-day-name">Fri</div><div className="mockup-booking-day-num">25</div></div>
                <div className="mockup-booking-day"><div className="mockup-booking-day-name">Sat</div><div className="mockup-booking-day-num">26</div></div>
                <div className="mockup-booking-day"><div className="mockup-booking-day-name">Sun</div><div className="mockup-booking-day-num">27</div></div>
              </div>
              <div className="mockup-booking-slots">
                <div className="mockup-booking-slot">10:00 AM</div>
                <div className="mockup-booking-slot mockup-booking-slot-active">11:30 AM</div>
                <div className="mockup-booking-slot">2:00 PM</div>
                <div className="mockup-booking-slot">3:30 PM</div>
              </div>
              <div className="mockup-booking-cta">Confirm Tour →</div>
              <div className="mockup-booking-speed"><span className="mockup-booking-speed-dot"></span>Auto-confirmation in 12 seconds</div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE 6: MULTI-LOCATION DASHBOARD */}
      <section className="feat">
        <div className="feat-grid mx feat-reverse">
          <div className="feat-text">
            <div className="feat-eb">See Every Location. Every Member. Every Metric.</div>
            <h3 className="feat-h">Multi-Location Dashboard</h3>
            <p className="feat-p">Running one lifestyle location is rewarding. Running a network of locations across multiple markets without real-time visibility is chaos. Our dashboard shows performance across every location, every membership tier, and every campaign in a single view, with AI-driven flags that surface churn risk, spend inefficiency, and opportunity exactly where you need to focus.</p>
            <ul className="feat-list">
              <li><strong>Live location-by-location view</strong> of signups, retention, and revenue per member</li>
              <li><strong>AI-flagged churn risk alerts</strong> that catch declining locations early</li>
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
                  <div className="mockup-dash-loc-name">Austin, TX</div>
                  <div className="mockup-dash-loc-bar"><div className="mockup-dash-loc-bar-fill" style={{ width: '92%', background: '#00BE9D' }}></div></div>
                  <div className="mockup-dash-loc-val">$18</div>
                </div>
              </div>
              <div className="mockup-dash-row">
                <div className="mockup-dash-loc">
                  <div className="mockup-dash-loc-name">Denver, CO</div>
                  <div className="mockup-dash-loc-bar"><div className="mockup-dash-loc-bar-fill" style={{ width: '85%', background: '#00BE9D' }}></div></div>
                  <div className="mockup-dash-loc-val">$22</div>
                </div>
              </div>
              <div className="mockup-dash-row">
                <div className="mockup-dash-loc">
                  <div className="mockup-dash-loc-name">Raleigh, NC</div>
                  <div className="mockup-dash-loc-bar"><div className="mockup-dash-loc-bar-fill" style={{ width: '74%', background: '#00BE9D' }}></div></div>
                  <div className="mockup-dash-loc-val">$28</div>
                </div>
              </div>
              <div className="mockup-dash-row">
                <div className="mockup-dash-loc">
                  <div className="mockup-dash-loc-name">Boise, ID</div>
                  <div className="mockup-dash-loc-bar"><div className="mockup-dash-loc-bar-fill" style={{ width: '44%', background: '#EF9F27' }}></div></div>
                  <div className="mockup-dash-loc-val" style={{ color: '#EF9F27' }}>$54</div>
                </div>
              </div>
              <div className="mockup-dash-alert">
                <span style={{ color: '#EF9F27' }}>⚠</span>
                <span>Boise signups below network avg — review creative</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </VerticalPageLayout>
    </>
  );
}
