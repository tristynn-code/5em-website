import type { Metadata } from 'next';
import VerticalPageLayout from '@/components/VerticalPageLayout';

export const metadata: Metadata = {
  title: 'Home Services Franchise Marketing | HVAC, Plumbing, Cleaning Ads | 5th Element Media',
  description:
    'Lead generation for home services franchises. Urgent-demand capture, territory targeting, real-tech UGC, and lead-to-booked-job tracking for HVAC, plumbing, restoration, and more.',
};

export default function HomeServicesPage() {
  return (
    <VerticalPageLayout
      heroTag="Home Services"
      heroHeading={
        <>
          Phones Ringing.
          <br />
          <em>Jobs Booked.</em>
        </>
      }
      heroSubcopy="HVAC, plumbing, cleaning, pest control, restoration, and more. We build lead engines that capture urgent demand in your exact service area and convert callers into booked jobs, fast. Proven across 100s of home services franchise locations."
      heroImage={{
        src: 'https://assets.cdn.filesafe.space/Bvl8985Bn5drFTi6qZJM/media/69df308d190683601a450c83.jpg',
        alt: 'Home services technician',
      }}
      whyTag="Why We're Different"
      whyTitle="We Speak Home Services. Not Generic Marketing."
      whyCopy="Home services is a different game. When someone's AC goes out in July, they're not browsing, they're panicking. When a pipe bursts at midnight, they're calling whoever shows up first in Google. Most agencies miss that. They run the same tired playbook they'd use for a restaurant. We don't. Home services has its own seasonality, its own urgency signals, and its own territory dynamics — and we know what converts."
      introTag="What We Deliver"
      introTitle="The Franchise Lead Engine for Home Services"
      introSubtitle="Every part of our system is tuned for home services. Urgent demand capture. Territory precision. Phone-first conversion."
      testimonial={{
        quote: 'We have been inundated with leads to the point we can barely keep up. Their system just works.',
        avatar: 'https://assets.cdn.filesafe.space/Bvl8985Bn5drFTi6qZJM/media/69b5f1ef87f0f23941f78333.jpeg',
        name: 'Richard Mazzarino',
        meta: 'Houston, TX',
      }}
      ctaTitle="Ready to Keep Your Techs Booked?"
      ctaSubtitle="Book your free audit and we'll show you how to capture urgent demand and convert calls into jobs."
    >
      {/* FEATURE 1: URGENT DEMAND CAPTURE */}
      <section className="feat" style={{ background: '#F7F7F7' }}>
        <div className="feat-grid mx">
          <div className="feat-text">
            <div className="feat-eb">Be There When It Breaks</div>
            <h3 className="feat-h">Urgent Demand Capture</h3>
            <p className="feat-p">When a homeowner's water heater floods the basement, they're not comparing brands. They're calling the first company that looks trustworthy and available. Your ads need to show up at the exact moment of panic, with creative that signals speed, trust, and a real person on the other end of the phone. We build campaigns around urgent search terms, emergency keywords, and intent signals that capture high-value service calls the moment they happen.</p>
            <ul className="feat-list">
              <li><strong>Emergency keyword targeting</strong> built around real homeowner panic moments</li>
              <li><strong>Call-extension ads</strong> that drive directly to your dispatch team</li>
              <li><strong>24/7 availability signaling</strong> so urgent callers pick you first</li>
            </ul>
          </div>
          <div className="feat-visual">
            <div className="mockup-urgent">
              <div className="mockup-urgent-header">
                <div className="mockup-urgent-brand">Google</div>
                <div className="mockup-urgent-query">emergency plumber near me</div>
              </div>
              <div className="mockup-urgent-ad">
                <div className="mockup-urgent-sponsored">Sponsored</div>
                <div className="mockup-urgent-title">24/7 Emergency Plumbing — Available Now</div>
                <div className="mockup-urgent-url">yourplumbing.com · (555) 123-4567</div>
                <div className="mockup-urgent-desc">Same-day service. Licensed techs on call. Free estimates. Call now for immediate dispatch.</div>
                <div className="mockup-urgent-ext">
                  <div className="mockup-urgent-ext-item">✆ Call Now</div>
                  <div className="mockup-urgent-ext-item">★ 4.9 (847)</div>
                  <div className="mockup-urgent-ext-item">⏲ 30 min response</div>
                </div>
              </div>
              <div className="mockup-urgent-pulse">
                <span className="mockup-urgent-dot"></span>Live calls incoming
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE 2: TERRITORY PRECISION */}
      <section className="feat">
        <div className="feat-grid mx feat-reverse">
          <div className="feat-text">
            <div className="feat-eb">Every Dollar in the Right Zip Code</div>
            <h3 className="feat-h">Territory Precision Targeting</h3>
            <p className="feat-p">Home services franchises have hard territory boundaries. A lead in the wrong zip code isn't just wasted, it's a compliance issue that can break franchise agreements. We map your ad targeting to your exact territory boundaries, zip-code by zip-code, and split-test within territories to find the neighborhoods that convert best. No more wasted spend on leads you can't legally service.</p>
            <ul className="feat-list">
              <li><strong>Zip-code-level territory mapping</strong> synced to your franchise agreement</li>
              <li><strong>High-value neighborhood identification</strong> based on home value and ticket size</li>
              <li><strong>Multi-territory rollouts</strong> for franchisees running multiple zones</li>
            </ul>
          </div>
          <div className="feat-visual">
            <div className="mockup-territory">
              <div className="mockup-territory-header">
                <div className="mockup-territory-title">Service Territory</div>
                <div className="mockup-territory-badge">4 zips · 1 franchise</div>
              </div>
              <div className="mockup-territory-map">
                <div className="mockup-territory-zone mockup-territory-zone-active" style={{ top: '15%', left: '18%', width: '32%', height: '38%' }}><span className="mockup-territory-zip">92562</span></div>
                <div className="mockup-territory-zone mockup-territory-zone-active" style={{ top: '18%', left: '52%', width: '30%', height: '35%' }}><span className="mockup-territory-zip">92563</span></div>
                <div className="mockup-territory-zone mockup-territory-zone-active" style={{ top: '55%', left: '22%', width: '34%', height: '34%' }}><span className="mockup-territory-zip">92584</span></div>
                <div className="mockup-territory-zone mockup-territory-zone-active" style={{ top: '58%', left: '58%', width: '28%', height: '30%' }}><span className="mockup-territory-zip">92596</span></div>
                <div className="mockup-territory-blocked" style={{ top: '8%', left: '76%' }}><span>×</span></div>
                <div className="mockup-territory-blocked" style={{ top: '72%', left: '4%' }}><span>×</span></div>
              </div>
              <div className="mockup-territory-legend">
                <div className="mockup-territory-legend-item"><span className="mockup-territory-legend-dot" style={{ background: '#00BE9D' }}></span>Active</div>
                <div className="mockup-territory-legend-item"><span className="mockup-territory-legend-dot" style={{ background: '#ef4444' }}></span>Blocked</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE 3: REAL TECH UGC */}
      <section className="feat" style={{ background: '#F7F7F7' }}>
        <div className="feat-grid mx">
          <div className="feat-text">
            <div className="feat-eb">Trust Is the Whole Game</div>
            <h3 className="feat-h">Real Technician UGC</h3>
            <p className="feat-p">Homeowners are inviting strangers into their homes. That's a massive trust hurdle most home services brands never clear. Stock footage of a guy in a clean uniform doesn't cut it anymore. We coach your real technicians to capture short, authentic videos showing who they are, how they work, and what a service call actually looks like. The result: ads that build trust before the phone even rings.</p>
            <ul className="feat-list">
              <li><strong>Technician-led content pipeline</strong> featuring your actual team</li>
              <li><strong>Job-site walkthroughs</strong> that pre-sell your process</li>
              <li><strong>Customer reaction clips</strong> captured right after the job is done</li>
            </ul>
          </div>
          <div className="feat-visual">
            <div className="mockup-phone">
              <div className="mockup-phone-notch"></div>
              <div className="mockup-phone-screen">
                <div className="mockup-reel">
                  <div className="mockup-reel-bg" style={{ background: 'linear-gradient(135deg,#4a7cbf,#2c4a78)' }}></div>
                  <div className="mockup-reel-top">
                    <div className="mockup-reel-user">
                      <div className="mockup-reel-avatar" style={{ background: 'linear-gradient(135deg,#d4d4d8,#71717a)' }}></div>
                      <span>mike_the_tech</span>
                    </div>
                    <div className="mockup-reel-live" style={{ background: '#00BE9D', color: '#0F1314' }}>✓ TECH</div>
                  </div>
                  <div className="mockup-reel-caption">Saved this homeowner $2,400 today — here&apos;s what I found 🚨</div>
                  <div className="mockup-reel-bottom">
                    <div className="mockup-reel-actions"><span>❤️ 12.4K</span><span>💬 438</span><span>↗ 2.8K</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE 4: SEASONAL DEMAND STRATEGY */}
      <section className="feat">
        <div className="feat-grid mx feat-reverse">
          <div className="feat-text">
            <div className="feat-eb">Own the Peaks. Survive the Valleys.</div>
            <h3 className="feat-h">Seasonal Demand Strategy</h3>
            <p className="feat-p">Home services is brutally seasonal. HVAC peaks in the first heatwave. Plumbing spikes in January freezes. Cleaning services boom before holidays. The brands that win plan for it, pre-load creative for every peak, and ramp spend exactly when their audience is ready to pick up the phone. The ones that lose get caught flat-footed when demand hits.</p>
            <ul className="feat-list">
              <li><strong>Annual demand calendar</strong> built around your specific service line</li>
              <li><strong>Weather-triggered campaigns</strong> that activate on heatwaves, cold snaps, storms</li>
              <li><strong>Off-season maintenance campaigns</strong> that keep techs booked year-round</li>
            </ul>
          </div>
          <div className="feat-visual">
            <div className="mockup-seasonal">
              <div>
                <span className="mockup-seasonal-title">Demand Forecast</span>
                <span className="mockup-seasonal-year">2026</span>
              </div>
              <div className="mockup-seasonal-row mockup-seasonal-row-active">
                <div className="mockup-seasonal-month">Jan</div>
                <div>
                  <div className="mockup-seasonal-name">Freeze Response</div>
                  <div className="mockup-seasonal-status">Live now</div>
                </div>
                <div className="mockup-seasonal-bar"><div className="mockup-seasonal-fill" style={{ width: '92%' }}></div></div>
              </div>
              <div className="mockup-seasonal-row">
                <div className="mockup-seasonal-month">May</div>
                <div>
                  <div className="mockup-seasonal-name">AC Tune-Up Push</div>
                  <div className="mockup-seasonal-status">Scheduled</div>
                </div>
                <div className="mockup-seasonal-bar"><div className="mockup-seasonal-fill" style={{ width: '0%' }}></div></div>
              </div>
              <div className="mockup-seasonal-row">
                <div className="mockup-seasonal-month">Jul</div>
                <div>
                  <div className="mockup-seasonal-name">Heatwave Capture</div>
                  <div className="mockup-seasonal-status">Scheduled</div>
                </div>
                <div className="mockup-seasonal-bar"><div className="mockup-seasonal-fill" style={{ width: '0%' }}></div></div>
              </div>
              <div className="mockup-seasonal-row">
                <div className="mockup-seasonal-month">Oct</div>
                <div>
                  <div className="mockup-seasonal-name">Fall Maintenance</div>
                  <div className="mockup-seasonal-status">Planning</div>
                </div>
                <div className="mockup-seasonal-bar"><div className="mockup-seasonal-fill" style={{ width: '0%' }}></div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE 5: LEAD-TO-JOB TRACKING */}
      <section className="feat" style={{ background: '#F7F7F7' }}>
        <div className="feat-grid mx">
          <div className="feat-text">
            <div className="feat-eb">Leads Don&apos;t Pay. Booked Jobs Do.</div>
            <h3 className="feat-h">Lead-to-Booked-Job Tracking</h3>
            <p className="feat-p">Most home services agencies report on leads. That's not enough. A lead that never turns into a dispatched job is worthless. We integrate your ad platforms directly with your dispatch software and CRM so every lead gets tracked from click, to call, to booked job, to completed service. You see exactly which campaigns drive real revenue, not just inbound phone calls.</p>
            <ul className="feat-list">
              <li><strong>Call-tracking integration</strong> that ties every call back to the source ad</li>
              <li><strong>Job booking attribution</strong> synced to your dispatch software</li>
              <li><strong>Cost-per-booked-job reporting</strong> instead of vanity cost-per-lead</li>
            </ul>
          </div>
          <div className="feat-visual">
            <div className="mockup-funnel">
              <div className="mockup-funnel-title">Lead-to-Job Funnel</div>
              <div className="mockup-funnel-sub">Last 30 days</div>
              <div className="mockup-funnel-step">
                <div className="mockup-funnel-label">Ad Clicks</div>
                <div className="mockup-funnel-bar" style={{ width: '100%' }}><span>3,842</span></div>
              </div>
              <div className="mockup-funnel-step">
                <div className="mockup-funnel-label">Phone Calls</div>
                <div className="mockup-funnel-bar" style={{ width: '72%' }}><span>487</span></div>
              </div>
              <div className="mockup-funnel-step">
                <div className="mockup-funnel-label">Booked Jobs</div>
                <div className="mockup-funnel-bar" style={{ width: '52%', background: '#00BE9D' }}><span style={{ color: '#0F1314' }}>312</span></div>
              </div>
              <div className="mockup-funnel-step">
                <div className="mockup-funnel-label">Completed</div>
                <div className="mockup-funnel-bar" style={{ width: '44%', background: '#00BE9D' }}><span style={{ color: '#0F1314' }}>294</span></div>
              </div>
              <div className="mockup-funnel-metric">
                <div className="mockup-funnel-metric-label">Cost per booked job</div>
                <div className="mockup-funnel-metric-val">$47</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE 6: MULTI-LOCATION DASHBOARD */}
      <section className="feat">
        <div className="feat-grid mx feat-reverse">
          <div className="feat-text">
            <div className="feat-eb">See Every Territory. Every Tech. Every Job.</div>
            <h3 className="feat-h">Multi-Location Dashboard</h3>
            <p className="feat-p">Running one home services franchise is a full-time operation. Running a network of territories across multiple states without real-time visibility is impossible. Our dashboard shows performance across every territory, every campaign, and every service line in a single view, with AI-driven flags that tell you exactly where demand is spiking and where spend needs to shift.</p>
            <ul className="feat-list">
              <li><strong>Live territory-by-territory view</strong> of calls, bookings, and revenue</li>
              <li><strong>AI-flagged demand spikes</strong> that trigger instant budget reallocation</li>
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
                  <div className="mockup-dash-loc-name">Dallas, TX</div>
                  <div className="mockup-dash-loc-bar"><div className="mockup-dash-loc-bar-fill" style={{ width: '94%', background: '#00BE9D' }}></div></div>
                  <div className="mockup-dash-loc-val">$38</div>
                </div>
              </div>
              <div className="mockup-dash-row">
                <div className="mockup-dash-loc">
                  <div className="mockup-dash-loc-name">Phoenix, AZ</div>
                  <div className="mockup-dash-loc-bar"><div className="mockup-dash-loc-bar-fill" style={{ width: '87%', background: '#00BE9D' }}></div></div>
                  <div className="mockup-dash-loc-val">$44</div>
                </div>
              </div>
              <div className="mockup-dash-row">
                <div className="mockup-dash-loc">
                  <div className="mockup-dash-loc-name">Atlanta, GA</div>
                  <div className="mockup-dash-loc-bar"><div className="mockup-dash-loc-bar-fill" style={{ width: '78%', background: '#00BE9D' }}></div></div>
                  <div className="mockup-dash-loc-val">$52</div>
                </div>
              </div>
              <div className="mockup-dash-row">
                <div className="mockup-dash-loc">
                  <div className="mockup-dash-loc-name">Minneapolis, MN</div>
                  <div className="mockup-dash-loc-bar"><div className="mockup-dash-loc-bar-fill" style={{ width: '42%', background: '#EF9F27' }}></div></div>
                  <div className="mockup-dash-loc-val" style={{ color: '#EF9F27' }}>$89</div>
                </div>
              </div>
              <div className="mockup-dash-alert">
                <span style={{ color: '#EF9F27' }}>⚠</span>
                <span>Minneapolis CPL above network avg — review creative</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </VerticalPageLayout>
  );
}
