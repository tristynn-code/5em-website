import type { Metadata } from 'next';
import VerticalPageLayout from '@/components/VerticalPageLayout';

export const metadata: Metadata = {
  title: 'Beauty Franchise Marketing | Lash, Skincare, Aesthetics Ads | 5th Element Media',
  description:
    'Marketing for beauty and aesthetics franchises. Transformation-first creative, before/after content, seasonal campaigns, and review generation for lash, skincare, and cosmetic brands.',
};

export default function BeautyAestheticsPage() {
  return (
    <VerticalPageLayout
      heroTag="Beauty & Aesthetics"
      heroHeading={
        <>
          Less Guessing.
          <br />
          <em>More Bookings.</em>
        </>
      }
      heroSubcopy="Lash studios, skincare clinics, cosmetic services, and aesthetics franchises. We build campaigns that attract clients who value quality and are willing to invest in themselves. Proven across 100s of beauty franchise locations."
      heroImage={{
        src: 'https://assets.cdn.filesafe.space/Bvl8985Bn5drFTi6qZJM/media/69df31a3190683601a453d5d.jpg',
        alt: 'Beauty studio',
      }}
      whyTag="Why We're Different"
      whyTitle="We Speak Beauty. Not Generic Marketing."
      whyCopy="In beauty, the creative is the campaign. Stock photos don't cut it. Your audience needs to see real results, real transformations, and real clients at your location. Most agencies run the same generic playbook for a lash studio that they run for a pizza franchise. We don't. Every beauty service has its own visual language, its own seasonal rhythm, and its own trust signals — and we know what converts."
      introTag="What We Deliver"
      introTitle="The Franchise Lead Engine for Beauty Brands"
      introSubtitle="Every part of our system is tuned for beauty. Transformation-first creative. Visual proof. Seasonal strategy."
      testimonial={{
        quote: 'Their data-driven, collaborative approach has been outstanding. They truly understand how to market a premium experience.',
        avatar: 'https://assets.cdn.filesafe.space/Bvl8985Bn5drFTi6qZJM/media/69b5f20ceaf0810bac666af2.jpeg',
        name: 'Chris Johnson',
        meta: 'Palm Beach Gardens, FL',
      }}
      ctaTitle="Ready to Grow Your Beauty Franchise?"
      ctaSubtitle="Book your free audit and we'll show you how to attract beauty clients who value quality."
    >
      {/* FEATURE 1: TRANSFORMATION CONTENT */}
      <section className="feat" style={{ background: '#F7F7F7' }}>
        <div className="feat-grid mx">
          <div className="feat-text">
            <div className="feat-eb">Proof You Can See</div>
            <h3 className="feat-h">Transformation Content</h3>
            <p className="feat-p">Before-and-after content is the number one converter in beauty marketing. A skeptical prospect scrolling through their feed doesn't care about claims. They care about results. We build creative pipelines around real client transformations at your location — because one authentic before-and-after outperforms a hundred stock photos.</p>
            <ul className="feat-list">
              <li><strong>Before/after creative systems</strong> built around your real client results</li>
              <li><strong>Consent-first capture process</strong> that respects client privacy</li>
              <li><strong>Transformation storytelling</strong> that converts the skeptics on the fence</li>
            </ul>
          </div>
          <div className="feat-visual">
            <div className="mockup-ba">
              <div className="mockup-ba-label">Real Client Result</div>
              <div className="mockup-ba-split">
                <div className="mockup-ba-before">
                  <div className="mockup-ba-tag">BEFORE</div>
                  <div className="mockup-ba-img" style={{ background: 'linear-gradient(135deg,#d4b5a0,#a88c75)' }}></div>
                </div>
                <div className="mockup-ba-after">
                  <div className="mockup-ba-tag mockup-ba-tag-after">AFTER</div>
                  <div className="mockup-ba-img" style={{ background: 'linear-gradient(135deg,#e8d4c4,#d4b5a0)' }}></div>
                </div>
              </div>
              <div className="mockup-ba-caption">&ldquo;I finally feel confident again.&rdquo; — Maya, member since March</div>
              <div className="mockup-ba-meta"><span>❤️ 8.2K</span><span>💬 341</span><span>↗ 1.2K</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE 2: LOCAL BEAUTY AUDIENCE */}
      <section className="feat">
        <div className="feat-grid mx feat-reverse">
          <div className="feat-text">
            <div className="feat-eb">The Right Clients, Not Just Clicks</div>
            <h3 className="feat-h">Local Beauty Audience</h3>
            <p className="feat-p">Not all beauty traffic is equal. Someone casually browsing for lash extensions is different from someone actively ready to book an appointment. We target beauty-conscious consumers in your exact market by demographics, interests, and buying behaviors, filtering out the tire-kickers so your ad spend goes to real prospects.</p>
            <ul className="feat-list">
              <li><strong>Interest-layered targeting</strong> beyond broad beauty audiences</li>
              <li><strong>Purchase intent signals</strong> that identify ready-to-book prospects</li>
              <li><strong>Radius precision</strong> tuned to your client's realistic drive time</li>
            </ul>
          </div>
          <div className="feat-visual">
            <div className="mockup-audience">
              <div className="mockup-audience-title">Target Audience</div>
              <div className="mockup-audience-size">18,460 beauty clients in market</div>
              <div className="mockup-audience-tags">
                <div className="mockup-audience-tag mockup-audience-tag-active">Beauty enthusiasts</div>
                <div className="mockup-audience-tag mockup-audience-tag-active">Self-care focused</div>
                <div className="mockup-audience-tag mockup-audience-tag-active">Premium shoppers</div>
                <div className="mockup-audience-tag mockup-audience-tag-active">Ages 25-54</div>
                <div className="mockup-audience-tag mockup-audience-tag-active">Lash &amp; brow</div>
                <div className="mockup-audience-tag mockup-audience-tag-active">Skincare buyers</div>
                <div className="mockup-audience-tag">Casual browsers</div>
              </div>
              <div className="mockup-audience-excluded">
                <div className="mockup-audience-excl-label">Excluded</div>
                <div className="mockup-audience-tags">
                  <div className="mockup-audience-tag mockup-audience-tag-excl">Deal-only shoppers</div>
                  <div className="mockup-audience-tag mockup-audience-tag-excl">Out-of-market</div>
                  <div className="mockup-audience-tag mockup-audience-tag-excl">One-time buyers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE 3: UGC FROM REAL CLIENTS */}
      <section className="feat" style={{ background: '#F7F7F7' }}>
        <div className="feat-grid mx">
          <div className="feat-text">
            <div className="feat-eb">Authenticity Converts</div>
            <h3 className="feat-h">UGC From Real Clients</h3>
            <p className="feat-p">Beauty clients trust other beauty clients. Polished ads from the brand feel like marketing. Real clients showing their results, their experience, and their routine in their own words? That converts. We coach your existing clients to capture content we can deploy directly into ad campaigns that feel native to the feed.</p>
            <ul className="feat-list">
              <li><strong>Client content pipeline</strong> that keeps fresh creative flowing every week</li>
              <li><strong>Day-in-the-life reels</strong> showing the full client experience</li>
              <li><strong>Review-to-reel system</strong> that turns happy clients into ad creative</li>
            </ul>
          </div>
          <div className="feat-visual">
            <div className="mockup-phone">
              <div className="mockup-phone-notch"></div>
              <div className="mockup-phone-screen">
                <div className="mockup-reel">
                  <div className="mockup-reel-bg" style={{ background: 'linear-gradient(135deg,#e8c4b8,#c49789)' }}></div>
                  <div className="mockup-reel-top">
                    <div className="mockup-reel-user">
                      <div className="mockup-reel-avatar" style={{ background: 'linear-gradient(135deg,#f5d9cc,#c49789)' }}></div>
                      <span>mayabeauty_la</span>
                    </div>
                    <div className="mockup-reel-live" style={{ background: '#00BE9D', color: '#0F1314' }}>✓ CLIENT</div>
                  </div>
                  <div className="mockup-reel-caption">My lash refill experience — obsessed with the results ✨</div>
                  <div className="mockup-reel-bottom">
                    <div className="mockup-reel-actions"><span>❤️ 5.8K</span><span>💬 227</span><span>↗ 840</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE 4: SEASONAL CAMPAIGN STRATEGY */}
      <section className="feat">
        <div className="feat-grid mx feat-reverse">
          <div className="feat-text">
            <div className="feat-eb">Capture Demand When It Peaks</div>
            <h3 className="feat-h">Seasonal Campaign Strategy</h3>
            <p className="feat-p">Beauty is a seasonal business. Wedding season, prom, holidays, back-to-school, vacation prep. Demand spikes at specific times of year, and the brands that win are the ones ready to capture it. We plan campaigns around the calendar, pre-load creative for each seasonal moment, and ramp spend exactly when your audience is ready to buy.</p>
            <ul className="feat-list">
              <li><strong>Annual content calendar</strong> mapped to seasonal demand spikes</li>
              <li><strong>Pre-built campaign templates</strong> ready to deploy for each season</li>
              <li><strong>Demand-based budget scaling</strong> that maximizes peak periods</li>
            </ul>
          </div>
          <div className="feat-visual">
            <div className="mockup-seasonal">
              <div>
                <span className="mockup-seasonal-title">Campaign Calendar</span>
                <span className="mockup-seasonal-year">2026</span>
              </div>
              <div className="mockup-seasonal-row mockup-seasonal-row-active">
                <div className="mockup-seasonal-month">Feb</div>
                <div>
                  <div className="mockup-seasonal-name">Valentine&apos;s Glow</div>
                  <div className="mockup-seasonal-status">Live now</div>
                </div>
                <div className="mockup-seasonal-bar"><div className="mockup-seasonal-fill" style={{ width: '78%' }}></div></div>
              </div>
              <div className="mockup-seasonal-row">
                <div className="mockup-seasonal-month">Apr</div>
                <div>
                  <div className="mockup-seasonal-name">Wedding Season</div>
                  <div className="mockup-seasonal-status">Scheduled</div>
                </div>
                <div className="mockup-seasonal-bar"><div className="mockup-seasonal-fill" style={{ width: '0%' }}></div></div>
              </div>
              <div className="mockup-seasonal-row">
                <div className="mockup-seasonal-month">May</div>
                <div>
                  <div className="mockup-seasonal-name">Prom Week</div>
                  <div className="mockup-seasonal-status">Scheduled</div>
                </div>
                <div className="mockup-seasonal-bar"><div className="mockup-seasonal-fill" style={{ width: '0%' }}></div></div>
              </div>
              <div className="mockup-seasonal-row">
                <div className="mockup-seasonal-month">Jun</div>
                <div>
                  <div className="mockup-seasonal-name">Summer Ready</div>
                  <div className="mockup-seasonal-status">Planning</div>
                </div>
                <div className="mockup-seasonal-bar"><div className="mockup-seasonal-fill" style={{ width: '0%' }}></div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE 5: REVIEW GENERATION */}
      <section className="feat" style={{ background: '#F7F7F7' }}>
        <div className="feat-grid mx">
          <div className="feat-text">
            <div className="feat-eb">Reviews Are Everything</div>
            <h3 className="feat-h">Automated Review Generation</h3>
            <p className="feat-p">In beauty, reviews are the whole game. Prospects will read 20 Google reviews before booking their first appointment. Most salons leave this to chance — hoping happy clients remember to leave a review. We automate it. Post-visit review requests timed perfectly, synced to your booking system, rolling up into a review engine that compounds your social proof month over month.</p>
            <ul className="feat-list">
              <li><strong>Post-visit automation</strong> triggered at the optimal response window</li>
              <li><strong>Multi-channel requests</strong> across SMS, email, and booking system</li>
              <li><strong>Review monitoring</strong> that flags negative reviews for immediate response</li>
            </ul>
          </div>
          <div className="feat-visual">
            <div className="mockup-reviews">
              <div className="mockup-reviews-header">
                <div className="mockup-reviews-rating">
                  <div className="mockup-reviews-stars">★★★★★</div>
                  <div className="mockup-reviews-score">4.9</div>
                </div>
                <div className="mockup-reviews-count">487 Google reviews</div>
              </div>
              <div className="mockup-reviews-growth">
                <div className="mockup-reviews-growth-bar"><div className="mockup-reviews-growth-fill" style={{ width: '32%' }}><span>Q1</span></div></div>
                <div className="mockup-reviews-growth-bar"><div className="mockup-reviews-growth-fill" style={{ width: '54%' }}><span>Q2</span></div></div>
                <div className="mockup-reviews-growth-bar"><div className="mockup-reviews-growth-fill" style={{ width: '78%' }}><span>Q3</span></div></div>
                <div className="mockup-reviews-growth-bar"><div className="mockup-reviews-growth-fill" style={{ width: '100%', background: '#00BE9D' }}><span style={{ color: '#0F1314' }}>Q4</span></div></div>
              </div>
              <div className="mockup-reviews-preview">
                <div className="mockup-reviews-quote">&ldquo;Best lash artist in the city. The whole experience is next level.&rdquo;</div>
                <div className="mockup-reviews-author">Jessica R. · 2 days ago</div>
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
            <p className="feat-p">Running one beauty studio is hard. Running a network of locations across multiple markets without real-time visibility is impossible. Our dashboard shows performance across every location, every campaign, and every creative in a single view, with AI-driven flags that tell you exactly where to focus your attention.</p>
            <ul className="feat-list">
              <li><strong>Live location-by-location view</strong> of CPL, bookings, and retention</li>
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
                  <div className="mockup-dash-loc-name">Beverly Hills, CA</div>
                  <div className="mockup-dash-loc-bar"><div className="mockup-dash-loc-bar-fill" style={{ width: '91%', background: '#00BE9D' }}></div></div>
                  <div className="mockup-dash-loc-val">$14.20</div>
                </div>
              </div>
              <div className="mockup-dash-row">
                <div className="mockup-dash-loc">
                  <div className="mockup-dash-loc-name">Nashville, TN</div>
                  <div className="mockup-dash-loc-bar"><div className="mockup-dash-loc-bar-fill" style={{ width: '84%', background: '#00BE9D' }}></div></div>
                  <div className="mockup-dash-loc-val">$16.80</div>
                </div>
              </div>
              <div className="mockup-dash-row">
                <div className="mockup-dash-loc">
                  <div className="mockup-dash-loc-name">Scottsdale, AZ</div>
                  <div className="mockup-dash-loc-bar"><div className="mockup-dash-loc-bar-fill" style={{ width: '76%', background: '#00BE9D' }}></div></div>
                  <div className="mockup-dash-loc-val">$18.40</div>
                </div>
              </div>
              <div className="mockup-dash-row">
                <div className="mockup-dash-loc">
                  <div className="mockup-dash-loc-name">Charlotte, NC</div>
                  <div className="mockup-dash-loc-bar"><div className="mockup-dash-loc-bar-fill" style={{ width: '46%', background: '#EF9F27' }}></div></div>
                  <div className="mockup-dash-loc-val" style={{ color: '#EF9F27' }}>$28.60</div>
                </div>
              </div>
              <div className="mockup-dash-alert">
                <span style={{ color: '#EF9F27' }}>⚠</span>
                <span>Charlotte CPL above network avg — review creative</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </VerticalPageLayout>
  );
}
