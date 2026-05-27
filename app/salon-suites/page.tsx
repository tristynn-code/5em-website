import type { Metadata } from 'next';
import VerticalPageLayout from '@/components/VerticalPageLayout';

export const metadata: Metadata = {
  title: 'Salon Suite Marketing Agency | Lease Salon Suites Faster | 5th Element Media',
  description:
    'Marketing for salon suite franchises. We help salon suite brands reach 100% occupancy with hyper-local ads, UGC creative, and automated lead nurture for beauty professionals.',
};

export default function SalonSuitesPage() {
  return (
    <VerticalPageLayout
      heroTag="Salon Suites"
      heroHeading={
        <>
          Fill Every Suite.
          <br />
          <em>Faster.</em>
        </>
      }
      heroSubcopy="Salon suites are our #1 vertical by volume. We've helped franchise locations reach 100% occupancy — some before they even opened their doors. Our playbook is proven across 100s of locations."
      heroImage={{
        src: 'https://assets.cdn.filesafe.space/Bvl8985Bn5drFTi6qZJM/media/69df2ff9109243d2cce7763e.jpg',
        alt: 'Salon suite interior',
      }}
      heroImageAspect3x2
      whyTag="Why We're Different"
      whyTitle="We Speak Salon Suites. Not Generic Marketing."
      whyCopy="Leasing salon suites is a B2B recruitment play, not a consumer acquisition play. Most agencies run the same playbook they use for gyms or restaurants, then wonder why the suites don't fill. Every beauty professional has their own priorities, their own decision triggers, and their own creative language. We've tested it all across 100s of locations, and we know what converts them from commission to suite owner."
      introTag="What We Deliver"
      introTitle="The Franchise Lead Engine for Salon Suites"
      introSubtitle="Every part of our system is tuned for salon suite leasing. No consumer ads. No generic templates. Built to fill your suites, fast."
      brandsTag="Our #1 Vertical"
      brandsTitle="Trusted by the Leading Salon Suite Brand"
      brands={[
        { src: 'https://assets.cdn.filesafe.space/Bvl8985Bn5drFTi6qZJM/media/69c61c11861524201c5c5c6b.png', alt: 'IMAGE Studios', style: { height: 70 } },
      ]}
      testimonial={{
        quote: 'Fifth Element got us to 100% leased before we even opened. Their ability to generate leads and identify the right pros in our market was the best part.',
        avatar: 'https://cdn.prod.website-files.com/68f669a6d79edc75f34470f3/692e9562339abd420ce02b28_Screenshot%202025-12-01%20at%2011.29.25%E2%80%AFPM.png',
        name: 'Jared Jamison',
        meta: 'Bakersfield, CA',
      }}
      ctaTitle="Ready to Fill Your Salon Suites?"
      ctaSubtitle="Book your free audit and we'll show you exactly how we'd get your location to 100% occupancy."
    >
      {/* FEATURE 1: BEAUTY PRO TARGETING */}
      <section className="feat" style={{ background: '#F7F7F7' }}>
        <div className="feat-grid mx">
          <div className="feat-text">
            <div className="feat-eb">Right Audience, Right Market</div>
            <h3 className="feat-h">Beauty Pro Targeting</h3>
            <p className="feat-p">Leasing salon suites isn't about reaching consumers. It's about reaching licensed beauty professionals actively looking to level up their career. We target licensed cosmetologists, estheticians, barbers, nail techs, and lash artists with pinpoint precision so your ad spend goes to real prospects, not people who'll never lease a suite.</p>
            <ul className="feat-list">
              <li><strong>License-verified audiences</strong> built from behavioral and interest data</li>
              <li><strong>Profession-specific creative</strong> that speaks directly to stylists vs. lash artists vs. nail techs</li>
              <li><strong>Exclusion lists</strong> that filter out consumers and irrelevant audiences</li>
            </ul>
          </div>
          <div className="feat-visual">
            <div className="mockup-audience">
              <div className="mockup-audience-title">Target Audience</div>
              <div className="mockup-audience-size">14,280 pros in market</div>
              <div className="mockup-audience-tags">
                <div className="mockup-audience-tag mockup-audience-tag-active">Cosmetologists</div>
                <div className="mockup-audience-tag mockup-audience-tag-active">Estheticians</div>
                <div className="mockup-audience-tag mockup-audience-tag-active">Nail Technicians</div>
                <div className="mockup-audience-tag mockup-audience-tag-active">Lash Artists</div>
                <div className="mockup-audience-tag mockup-audience-tag-active">Barbers</div>
                <div className="mockup-audience-tag">Hair Colorists</div>
                <div className="mockup-audience-tag">Massage Therapists</div>
              </div>
              <div className="mockup-audience-excluded">
                <div className="mockup-audience-excl-label">Excluded</div>
                <div className="mockup-audience-tags">
                  <div className="mockup-audience-tag mockup-audience-tag-excl">Consumers</div>
                  <div className="mockup-audience-tag mockup-audience-tag-excl">Salon owners</div>
                  <div className="mockup-audience-tag mockup-audience-tag-excl">Unlicensed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE 2: PRE-OPENING CAMPAIGNS */}
      <section className="feat">
        <div className="feat-grid mx feat-reverse">
          <div className="feat-text">
            <div className="feat-eb">Leased Before You Open</div>
            <h3 className="feat-h">Pre-Opening Campaigns</h3>
            <p className="feat-p">The biggest mistake salon suite brands make is waiting until doors are open to start marketing. By then, every beauty pro in the market has already signed somewhere else. Our pre-opening campaigns generate lease inquiries months before construction is done so you open at 60%+ occupancy on day one.</p>
            <ul className="feat-list">
              <li><strong>Countdown campaigns</strong> build urgency with &ldquo;founding tenant&rdquo; positioning</li>
              <li><strong>Founder pricing offers</strong> lock in your first wave before you open</li>
              <li><strong>Virtual tour creative</strong> lets pros see the space before it exists</li>
            </ul>
          </div>
          <div className="feat-visual">
            <div className="mockup-preopen">
              <div className="mockup-preopen-bg" style={{ background: 'linear-gradient(135deg,#2d1a3e,#5a2d5e)' }}></div>
              <div className="mockup-preopen-overlay"></div>
              <div className="mockup-preopen-content">
                <div className="mockup-preopen-tag">COMING SOON</div>
                <div className="mockup-preopen-title">Now Leasing Founding Suites</div>
                <div className="mockup-preopen-loc">📍 San Clemente, CA · Opening Q3</div>
                <div className="mockup-preopen-countdown">
                  <div className="mockup-preopen-unit"><div className="mockup-preopen-num">47</div><div className="mockup-preopen-lbl">Days</div></div>
                  <div className="mockup-preopen-unit"><div className="mockup-preopen-num">18</div><div className="mockup-preopen-lbl">Hrs</div></div>
                  <div className="mockup-preopen-unit"><div className="mockup-preopen-num">32</div><div className="mockup-preopen-lbl">Min</div></div>
                </div>
                <div className="mockup-preopen-cta">Reserve Your Suite →</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE 3: UGC FROM REAL SUITE OWNERS */}
      <section className="feat" style={{ background: '#F7F7F7' }}>
        <div className="feat-grid mx">
          <div className="feat-text">
            <div className="feat-eb">Proof That Converts</div>
            <h3 className="feat-h">UGC From Real Suite Owners</h3>
            <p className="feat-p">Beauty pros trust other beauty pros. Polished agency ads feel like sales pitches. Content from a real stylist showing off her suite, talking about why she left the commission chair, and what her revenue looks like now? That converts every single time. We coach your existing tenants to capture it.</p>
            <ul className="feat-list">
              <li><strong>Tenant testimonial pipeline</strong> turns happy suite owners into your best recruiters</li>
              <li><strong>Suite tour reels</strong> let prospects picture themselves in the space</li>
              <li><strong>Before/after stories</strong> showing the income jump from commission to suite</li>
            </ul>
          </div>
          <div className="feat-visual">
            <div className="mockup-phone">
              <div className="mockup-phone-notch"></div>
              <div className="mockup-phone-screen">
                <div className="mockup-reel">
                  <div className="mockup-reel-bg" style={{ background: 'linear-gradient(135deg,#d4859f,#8a4d76)' }}></div>
                  <div className="mockup-reel-top">
                    <div className="mockup-reel-user">
                      <div className="mockup-reel-avatar" style={{ background: 'linear-gradient(135deg,#f5c2d1,#d4859f)' }}></div>
                      <span>jessicabeauty_co</span>
                    </div>
                    <div className="mockup-reel-live" style={{ background: '#00BE9D', color: '#0F1314' }}>✓ TENANT</div>
                  </div>
                  <div className="mockup-reel-caption">I tripled my income after leaving commission. Tour my suite 💨</div>
                  <div className="mockup-reel-bottom">
                    <div className="mockup-reel-actions"><span>❤️ 4.1K</span><span>💬 184</span><span>↗ 620</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE 4: TOUR BOOKING AUTOMATION */}
      <section className="feat">
        <div className="feat-grid mx feat-reverse">
          <div className="feat-text">
            <div className="feat-eb">Turn Leads Into Tours</div>
            <h3 className="feat-h">Tour Booking Automation</h3>
            <p className="feat-p">Suite leads are expensive. Losing one to a slow follow-up is unacceptable. Our automation contacts every lead within 60 seconds, books a tour with one click, and sends a stream of reminders so they actually show up. Because a tour is the sales call — miss the tour, miss the lease.</p>
            <ul className="feat-list">
              <li><strong>Instant SMS + booking link</strong> triggered the moment a form submits</li>
              <li><strong>Automated reminders</strong> at 24hr, 1hr, and 15min to maximize show rate</li>
              <li><strong>No-show recovery sequence</strong> reschedules dropped tours automatically</li>
            </ul>
          </div>
          <div className="feat-visual">
            <div className="mockup-calendar">
              <div className="mockup-calendar-header">
                <div className="mockup-calendar-title">Book Your Tour</div>
                <div className="mockup-calendar-sub">San Clemente Location</div>
              </div>
              <div className="mockup-calendar-week">
                <div className="mockup-cal-day"><div className="mockup-cal-day-name">MON</div><div className="mockup-cal-day-num">14</div></div>
                <div className="mockup-cal-day mockup-cal-day-active"><div className="mockup-cal-day-name">TUE</div><div className="mockup-cal-day-num">15</div></div>
                <div className="mockup-cal-day"><div className="mockup-cal-day-name">WED</div><div className="mockup-cal-day-num">16</div></div>
                <div className="mockup-cal-day"><div className="mockup-cal-day-name">THU</div><div className="mockup-cal-day-num">17</div></div>
                <div className="mockup-cal-day"><div className="mockup-cal-day-name">FRI</div><div className="mockup-cal-day-num">18</div></div>
              </div>
              <div className="mockup-calendar-slots">
                <div className="mockup-slot">10:00 AM</div>
                <div className="mockup-slot">11:30 AM</div>
                <div className="mockup-slot mockup-slot-selected">2:00 PM ✓</div>
                <div className="mockup-slot">3:30 PM</div>
                <div className="mockup-slot mockup-slot-booked">4:30 PM</div>
                <div className="mockup-slot">5:30 PM</div>
              </div>
              <div className="mockup-calendar-confirm">Tour confirmed — text reminder at 1:45 PM</div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE 5: OCCUPANCY TRACKING */}
      <section className="feat" style={{ background: '#F7F7F7' }}>
        <div className="feat-grid mx">
          <div className="feat-text">
            <div className="feat-eb">Know Your Status Every Day</div>
            <h3 className="feat-h">Occupancy Tracking Dashboard</h3>
            <p className="feat-p">How many suites are leased? How many leads came in this week? Which suites are still open? Most salon suite brands guess. We give you a real-time view of every suite, every tour booked, and every lease signed across every location so you can focus marketing dollars where occupancy is lagging.</p>
            <ul className="feat-list">
              <li><strong>Live suite-by-suite occupancy</strong> with lease status per unit</li>
              <li><strong>Tour-to-lease conversion tracking</strong> so you know what's working</li>
              <li><strong>Location comparison view</strong> to spot locations falling behind</li>
            </ul>
          </div>
          <div className="feat-visual">
            <div className="mockup-occupancy">
              <div className="mockup-occ-header">
                <div className="mockup-occ-title">Suite Status — Bakersfield</div>
                <div className="mockup-occ-pct">87% Occupied</div>
              </div>
              <div className="mockup-occ-grid">
                <div className="mockup-occ-unit mockup-occ-leased" title="Leased"></div>
                <div className="mockup-occ-unit mockup-occ-leased" title="Leased"></div>
                <div className="mockup-occ-unit mockup-occ-leased" title="Leased"></div>
                <div className="mockup-occ-unit mockup-occ-leased" title="Leased"></div>
                <div className="mockup-occ-unit mockup-occ-leased" title="Leased"></div>
                <div className="mockup-occ-unit mockup-occ-pending" title="Tour booked"></div>
                <div className="mockup-occ-unit mockup-occ-leased" title="Leased"></div>
                <div className="mockup-occ-unit mockup-occ-leased" title="Leased"></div>
                <div className="mockup-occ-unit mockup-occ-leased" title="Leased"></div>
                <div className="mockup-occ-unit mockup-occ-leased" title="Leased"></div>
                <div className="mockup-occ-unit mockup-occ-open" title="Open"></div>
                <div className="mockup-occ-unit mockup-occ-leased" title="Leased"></div>
                <div className="mockup-occ-unit mockup-occ-leased" title="Leased"></div>
                <div className="mockup-occ-unit mockup-occ-pending" title="Tour booked"></div>
                <div className="mockup-occ-unit mockup-occ-leased" title="Leased"></div>
              </div>
              <div className="mockup-occ-legend">
                <div className="mockup-occ-leg"><div className="mockup-occ-sw mockup-occ-leased"></div>Leased (13)</div>
                <div className="mockup-occ-leg"><div className="mockup-occ-sw mockup-occ-pending"></div>Tour booked (2)</div>
                <div className="mockup-occ-leg"><div className="mockup-occ-sw mockup-occ-open"></div>Open (1)</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE 6: MULTI-LOCATION ROLLOUT */}
      <section className="feat">
        <div className="feat-grid mx feat-reverse">
          <div className="feat-text">
            <div className="feat-eb">Scale Across the Portfolio</div>
            <h3 className="feat-h">Multi-Location Rollout</h3>
            <p className="feat-p">Opening one salon suite location is hard. Opening six in different markets within a year takes a system. Our rollout playbook coordinates pre-opening campaigns, tenant recruitment, and ongoing occupancy support across every market so each new location opens stronger than the last.</p>
            <ul className="feat-list">
              <li><strong>Location-by-location rollout timeline</strong> synced to build-out phases</li>
              <li><strong>Market-specific creative variations</strong> that feel local, not corporate</li>
              <li><strong>Franchisor-level reporting</strong> with network occupancy rollup</li>
            </ul>
          </div>
          <div className="feat-visual">
            <div className="mockup-rollout">
              <div className="mockup-rollout-title">Network Rollout</div>
              <div className="mockup-rollout-item mockup-rollout-done">
                <div className="mockup-rollout-dot"></div>
                <div className="mockup-rollout-body">
                  <div className="mockup-rollout-loc">San Clemente, CA</div>
                  <div className="mockup-rollout-status">Opened · 92% occupied</div>
                </div>
                <div className="mockup-rollout-pct">92%</div>
              </div>
              <div className="mockup-rollout-item mockup-rollout-done">
                <div className="mockup-rollout-dot"></div>
                <div className="mockup-rollout-body">
                  <div className="mockup-rollout-loc">Bakersfield, CA</div>
                  <div className="mockup-rollout-status">Opened · 87% occupied</div>
                </div>
                <div className="mockup-rollout-pct">87%</div>
              </div>
              <div className="mockup-rollout-item mockup-rollout-active">
                <div className="mockup-rollout-dot"></div>
                <div className="mockup-rollout-body">
                  <div className="mockup-rollout-loc">Houston, TX</div>
                  <div className="mockup-rollout-status">Pre-opening campaign live</div>
                </div>
                <div className="mockup-rollout-pct" style={{ color: '#00BE9D' }}>64%</div>
              </div>
              <div className="mockup-rollout-item">
                <div className="mockup-rollout-dot"></div>
                <div className="mockup-rollout-body">
                  <div className="mockup-rollout-loc">Jacksonville, FL</div>
                  <div className="mockup-rollout-status">Launching next month</div>
                </div>
                <div className="mockup-rollout-pct" style={{ color: '#777' }}>—</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </VerticalPageLayout>
  );
}
