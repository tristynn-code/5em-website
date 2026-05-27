import type { Metadata } from 'next';
import { auditCTA } from '@/lib/site';
import '@/styles/audience.css';

export const metadata: Metadata = {
  title: 'Franchise Marketing for Franchisors | Grow Your Franchise System | 5th Element Media',
  description:
    'The marketing system for franchise brands. Sell more franchise units, fill every location with leads, and unify brand performance with the 5E Insight Engine — from 20 locations to 200.',
};

export default function ForFranchisorsPage() {
  return (
    <>
      {/* HERO */}
      <section className="ap-hero-split">
        <div>
          <div className="stag">For Franchisors</div>
          <h1>
            Sell More Units.<br />
            Fill More Locations.<br />
            <em>Scale Your Franchise Brand.</em>
          </h1>
          <p className="ssub" style={{ marginBottom: 32 }}>
            Whether you need to attract new franchisees or generate leads across your existing network, we build the marketing systems that grow franchise brands from 20 locations to 200. One team. One dashboard. One source of truth.
          </p>
          <a href={auditCTA.href} className="bp bpl">Book a Franchisor Strategy Call →</a>
        </div>
        <div className="ap-hero-img">
          <div className="hero-franchisor">
            <div className="hf-header">
              <div className="hf-title">Network Rollup</div>
              <div className="hf-badge"><span className="hd-dot"></span>Live</div>
            </div>
            <div className="hf-sub">28 locations · 6 markets · Last 30 days</div>
            <div className="hf-stats">
              <div className="hf-stat"><div className="hf-stat-val">2,847</div><div className="hf-stat-lbl">Network leads</div></div>
              <div className="hf-stat"><div className="hf-stat-val">$14.20</div><div className="hf-stat-lbl">Avg CPL</div></div>
              <div className="hf-stat hf-stat-up"><div className="hf-stat-val">↑ 23%</div><div className="hf-stat-lbl">MoM</div></div>
            </div>
            <div>
              <div className="hf-market-header">Top markets</div>
              <div className="hf-market-row"><span className="hf-market-name">Texas</span><div className="hf-market-bar"><div className="hf-market-fill" style={{ width: '95%' }}></div></div><span className="hf-market-val">$11.40</span></div>
              <div className="hf-market-row"><span className="hf-market-name">Florida</span><div className="hf-market-bar"><div className="hf-market-fill" style={{ width: '82%' }}></div></div><span className="hf-market-val">$12.80</span></div>
              <div className="hf-market-row"><span className="hf-market-name">California</span><div className="hf-market-bar"><div className="hf-market-fill" style={{ width: '68%' }}></div></div><span className="hf-market-val">$14.90</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY DIFFERENT */}
      <section className="ap-why">
        <div className="ap-why-inner">
          <div className="stag">The Franchisor Problem</div>
          <h2 className="sttl">Your Franchisees Struggle. That Reflects On You.</h2>
          <p className="ssub" style={{ margin: '0 auto' }}>
            When individual locations can&apos;t generate leads, they blame the brand. When they blame the brand, they don&apos;t renew. When they don&apos;t renew, growth stalls. The franchise brands winning right now have figured out how to give every location the same marketing engine on day one — and a centralized system that shows brand leadership exactly what&apos;s working across the entire network. That&apos;s what we build.
          </p>
        </div>
      </section>

      {/* INTRO + PILLAR CARDS */}
      <section className="ap-section">
        <div className="ap-mx">
          <div className="stag" style={{ display: 'inline-block' }}>What You Get</div>
          <h2 className="sttl">A Marketing Partner Built for Franchise Scale</h2>
          <p className="ssub" style={{ margin: '0 auto', maxWidth: 680 }}>
            Everything your brand needs to grow the network and fill every location. One system. One team. One unified view.
          </p>
          <div className="pillars">
            <div className="pillars-grid">
              <div className="pcard">
                <div className="pcard-viz pcard-viz-fdev">
                  <div className="pfd-funnel">
                    <div className="pfd-stage"><div className="pfd-stage-bar" style={{ width: '100%' }}></div><div className="pfd-stage-lbl">Awareness</div><div className="pfd-stage-val">12,847</div></div>
                    <div className="pfd-stage"><div className="pfd-stage-bar" style={{ width: '72%' }}></div><div className="pfd-stage-lbl">FDD request</div><div className="pfd-stage-val">342</div></div>
                    <div className="pfd-stage"><div className="pfd-stage-bar pfd-stage-bar-teal" style={{ width: '38%' }}></div><div className="pfd-stage-lbl">Discovery day</div><div className="pfd-stage-val">47</div></div>
                  </div>
                </div>
                <div className="pcard-body">
                  <div className="pcard-eb">Franchise Dev</div>
                  <div className="pcard-title">Sell More Franchise Units</div>
                  <div className="pcard-desc">Targeted ads, qualified candidate funnels, and FDD automation.</div>
                </div>
              </div>

              <div className="pcard">
                <div className="pcard-viz pcard-viz-network">
                  <div className="pnw-map">
                    <div className="pnw-hub"></div>
                    <div className="pnw-node pnw-n1"></div>
                    <div className="pnw-node pnw-n2"></div>
                    <div className="pnw-node pnw-n3"></div>
                    <div className="pnw-node pnw-n4"></div>
                    <div className="pnw-node pnw-n5"></div>
                    <div className="pnw-node pnw-n6"></div>
                    <div className="pnw-node pnw-n7"></div>
                    <div className="pnw-node pnw-n8"></div>
                    <svg className="pnw-lines" viewBox="0 0 220 110" preserveAspectRatio="none">
                      <line x1="110" y1="55" x2="30" y2="25" stroke="#00BE9D" strokeWidth="1" strokeOpacity=".4" />
                      <line x1="110" y1="55" x2="55" y2="80" stroke="#00BE9D" strokeWidth="1" strokeOpacity=".4" />
                      <line x1="110" y1="55" x2="180" y2="20" stroke="#00BE9D" strokeWidth="1" strokeOpacity=".4" />
                      <line x1="110" y1="55" x2="200" y2="85" stroke="#00BE9D" strokeWidth="1" strokeOpacity=".4" />
                      <line x1="110" y1="55" x2="75" y2="15" stroke="#00BE9D" strokeWidth="1" strokeOpacity=".4" />
                      <line x1="110" y1="55" x2="165" y2="90" stroke="#00BE9D" strokeWidth="1" strokeOpacity=".4" />
                      <line x1="110" y1="55" x2="15" y2="60" stroke="#00BE9D" strokeWidth="1" strokeOpacity=".4" />
                      <line x1="110" y1="55" x2="205" y2="50" stroke="#00BE9D" strokeWidth="1" strokeOpacity=".4" />
                    </svg>
                  </div>
                </div>
                <div className="pcard-body">
                  <div className="pcard-eb">Location Marketing</div>
                  <div className="pcard-title">Fill Every Location With Leads</div>
                  <div className="pcard-desc">Centralized ad management across your entire franchise network.</div>
                </div>
              </div>

              <div className="pcard">
                <div className="pcard-viz pcard-viz-ugcs">
                  <div className="pug-row">
                    <div className="pug-phone pug-p1"></div>
                    <div className="pug-phone pug-p2"></div>
                    <div className="pug-phone pug-p3"></div>
                    <div className="pug-phone pug-p4"></div>
                  </div>
                  <div className="pug-caption">Shipping 40+ clips this month · across 28 locations</div>
                </div>
                <div className="pcard-body">
                  <div className="pcard-eb">UGC at Scale</div>
                  <div className="pcard-title">Local Content, Every Market</div>
                  <div className="pcard-desc">Authentic franchisee content that outperforms stock creative by 30-50%.</div>
                </div>
              </div>

              <div className="pcard">
                <div className="pcard-viz pcard-viz-brand">
                  <div className="pbr-header">Brand-Wide View</div>
                  <div className="pbr-kpis">
                    <div className="pbr-kpi"><div className="pbr-kpi-val">28</div><div className="pbr-kpi-lbl">Locations</div></div>
                    <div className="pbr-kpi"><div className="pbr-kpi-val">6</div><div className="pbr-kpi-lbl">Markets</div></div>
                    <div className="pbr-kpi"><div className="pbr-kpi-val">18:1</div><div className="pbr-kpi-lbl">LTV:CAC</div></div>
                  </div>
                </div>
                <div className="pcard-body">
                  <div className="pcard-eb">5E Insight Engine</div>
                  <div className="pcard-title">Brand-Wide Dashboard</div>
                  <div className="pcard-desc">Bird&apos;s-eye view across every location, campaign, and market.</div>
                </div>
              </div>

              <div className="pcard">
                <div className="pcard-viz pcard-viz-onboard">
                  <div className="pob-steps">
                    <div className="pob-step pob-step-done"><div className="pob-step-dot">✓</div><div className="pob-step-name">Day 1: System installed</div></div>
                    <div className="pob-step pob-step-done"><div className="pob-step-dot">✓</div><div className="pob-step-name">Day 7: Ads live</div></div>
                    <div className="pob-step pob-step-active"><div className="pob-step-dot"></div><div className="pob-step-name">Day 14: First leads</div></div>
                    <div className="pob-step"><div className="pob-step-dot"></div><div className="pob-step-name">Day 30: Full pipeline</div></div>
                  </div>
                </div>
                <div className="pcard-body">
                  <div className="pcard-eb">Onboarding</div>
                  <div className="pcard-title">Every Franchisee, Launched</div>
                  <div className="pcard-desc">New locations go live in 30 days with the same proven engine.</div>
                </div>
              </div>

              <div className="pcard">
                <div className="pcard-viz pcard-viz-bcsm">
                  <div className="pbc-chat">
                    <div className="pbc-avatar">T</div>
                    <div className="pbc-thread">
                      <div className="pbc-name">Your Brand CSM</div>
                      <div className="pbc-bubble">Q3 recap is ready. Network hit 2,847 leads — up 23%. Let&apos;s review Friday.</div>
                    </div>
                  </div>
                </div>
                <div className="pcard-body">
                  <div className="pcard-eb">Dedicated CSM</div>
                  <div className="pcard-title">A Brand-Level Partner</div>
                  <div className="pcard-desc">One senior point of contact who knows your entire franchise system.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE 1: FRANCHISE DEV LEAD GEN */}
      <section className="feat" style={{ background: '#F7F7F7' }}>
        <div className="feat-grid mx">
          <div className="feat-text">
            <div className="feat-eb">Stage 1 · Sell More Franchise Units</div>
            <h3 className="feat-h">Franchise Development Lead Gen</h3>
            <p className="feat-p">Growing a franchise brand means attracting qualified candidates who have the capital, the drive, and the right fit for your system. We run targeted Meta and Google campaigns built specifically to reach franchise buyers — people actively researching franchise opportunities in your vertical. Landing pages are optimized for FDD downloads, discovery day bookings, and long-term nurture sequences that turn cold interest into signed agreements.</p>
            <ul className="feat-list">
              <li><strong>Meta &amp; Google ad campaigns</strong> targeting franchise buyers with the right capital and intent</li>
              <li><strong>FDD download &amp; discovery day funnels</strong> built to convert research into real conversations</li>
              <li><strong>Candidate qualification workflows</strong> that filter out the tire-kickers before they hit your team</li>
            </ul>
          </div>
          <div className="feat-visual">
            <div className="mk-fdev">
              <div className="mkf-header">
                <div className="mkf-title">Franchise Dev Funnel</div>
                <div className="mkf-period">Last 90 days</div>
              </div>
              <div className="mkf-funnel">
                <div className="mkf-stage"><div className="mkf-stage-bar" style={{ width: '100%' }}><div className="mkf-stage-inner"><span className="mkf-stage-label">Ad impressions</span><span className="mkf-stage-val">847K</span></div></div></div>
                <div className="mkf-stage"><div className="mkf-stage-bar" style={{ width: '82%' }}><div className="mkf-stage-inner"><span className="mkf-stage-label">Candidate leads</span><span className="mkf-stage-val">1,284</span></div></div></div>
                <div className="mkf-stage"><div className="mkf-stage-bar" style={{ width: '58%' }}><div className="mkf-stage-inner"><span className="mkf-stage-label">FDD downloads</span><span className="mkf-stage-val">342</span></div></div></div>
                <div className="mkf-stage"><div className="mkf-stage-bar mkf-stage-bar-won" style={{ width: '32%' }}><div className="mkf-stage-inner"><span className="mkf-stage-label">Discovery days</span><span className="mkf-stage-val">47</span></div></div></div>
                <div className="mkf-stage"><div className="mkf-stage-bar mkf-stage-bar-won" style={{ width: '14%' }}><div className="mkf-stage-inner"><span className="mkf-stage-label">Signed agreements</span><span className="mkf-stage-val">12</span></div></div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE 2: NETWORK AD MANAGEMENT */}
      <section className="feat">
        <div className="feat-grid mx feat-reverse">
          <div className="feat-text">
            <div className="feat-eb">Stage 2 · Fill Every Location</div>
            <h3 className="feat-h">Centralized Network Ad Management</h3>
            <p className="feat-p">Every franchise location needs its own hyper-local ad engine — but managed from one central command. We run Meta and Google campaigns for every location in your network, optimized daily, with creative tuned to local markets. Your franchisor team gets one dashboard, one team, one source of truth. No more one-off vendors per location, no more inconsistent execution, no more markets getting left behind.</p>
            <ul className="feat-list">
              <li><strong>Hyper-local targeting</strong> tuned to each location&apos;s specific market and demographics</li>
              <li><strong>Unified campaign architecture</strong> that deploys consistently across every franchisee</li>
              <li><strong>Centralized optimization</strong> so when one location&apos;s creative wins, every location benefits</li>
            </ul>
          </div>
          <div className="feat-visual">
            <div className="mk-network">
              <div className="mkn-header">
                <div className="mkn-title">28 Locations · Live</div>
                <div className="mkn-badge"><span className="hd-dot"></span>All active</div>
              </div>
              <div className="mkn-grid">
                <div className="mkn-cell mkn-cell-good"><div className="mkn-cell-name">Austin N</div><div className="mkn-cell-val">$9.40</div></div>
                <div className="mkn-cell mkn-cell-good"><div className="mkn-cell-name">Dallas C</div><div className="mkn-cell-val">$11.20</div></div>
                <div className="mkn-cell"><div className="mkn-cell-name">Houston W</div><div className="mkn-cell-val">$13.80</div></div>
                <div className="mkn-cell mkn-cell-good"><div className="mkn-cell-name">Miami</div><div className="mkn-cell-val">$12.10</div></div>
                <div className="mkn-cell"><div className="mkn-cell-name">Tampa</div><div className="mkn-cell-val">$14.40</div></div>
                <div className="mkn-cell"><div className="mkn-cell-name">Orlando</div><div className="mkn-cell-val">$13.90</div></div>
                <div className="mkn-cell mkn-cell-good"><div className="mkn-cell-name">Denver</div><div className="mkn-cell-val">$10.80</div></div>
                <div className="mkn-cell"><div className="mkn-cell-name">Phoenix</div><div className="mkn-cell-val">$15.20</div></div>
                <div className="mkn-cell mkn-cell-more">+20</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE 3: UGC AT SCALE */}
      <section className="feat" style={{ background: '#F7F7F7' }}>
        <div className="feat-grid mx">
          <div className="feat-text">
            <div className="feat-eb">Stage 3 · Content That Converts</div>
            <h3 className="feat-h">UGC Creative at Scale</h3>
            <p className="feat-p">Your polished brand assets look great in a pitch deck but underperform in local markets where authentic content wins. We coach your franchisees to shoot real local content — members, staff, moments inside the actual studio — and our editing team ships it into live campaigns every cycle. The result: creative that outperforms stock photography by 30-50%, without adding headcount at either the franchisor or the franchisee level.</p>
            <ul className="feat-list">
              <li><strong>Franchisee coaching</strong> with briefs, guides, and 1:1 support</li>
              <li><strong>Network-wide creative library</strong> where winning clips get redeployed across markets</li>
              <li><strong>Continuous refresh cadence</strong> that keeps every location&apos;s ad account performing</li>
            </ul>
          </div>
          <div className="feat-visual">
            <div className="mk-ugcs">
              <div className="mku-header">Creative Shipped · This Month</div>
              <div className="mku-grid">
                <div className="mku-cell mku-c1"></div>
                <div className="mku-cell mku-c2"></div>
                <div className="mku-cell mku-c3"></div>
                <div className="mku-cell mku-c4"></div>
                <div className="mku-cell mku-c5"></div>
                <div className="mku-cell mku-c6"></div>
                <div className="mku-cell mku-c7"></div>
                <div className="mku-cell mku-c8"></div>
                <div className="mku-cell mku-c9"></div>
                <div className="mku-cell mku-c10"></div>
                <div className="mku-cell mku-c11"></div>
                <div className="mku-cell mku-more">+28</div>
              </div>
              <div className="mku-footer">
                <div className="mku-stat"><span className="mku-stat-val">40+</span><span className="mku-stat-lbl">Clips deployed</span></div>
                <div className="mku-stat"><span className="mku-stat-val">32%</span><span className="mku-stat-lbl">Lower CPL vs stock</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE 4: BRAND-WIDE DASHBOARD */}
      <section className="feat">
        <div className="feat-grid mx feat-reverse">
          <div className="feat-text">
            <div className="feat-eb">Stage 4 · Total Network Visibility</div>
            <h3 className="feat-h">Brand-Wide Dashboard</h3>
            <p className="feat-p">Most franchisors are flying blind. They get monthly PDFs from their agency (or nothing at all) and make brand-level decisions based on lagging indicators. The 5E Insight Engine gives franchise leadership the same real-time visibility we use internally — every location&apos;s CPL, lead volume, creative performance, and franchise dev pipeline, all rolled up into one executive view. Network-level strategy decisions backed by network-level data.</p>
            <ul className="feat-list">
              <li><strong>Real-time network rollup</strong> aggregating every location into one strategic view</li>
              <li><strong>Market-by-market breakdowns</strong> that flag underperformers before they become problems</li>
              <li><strong>Executive-ready exports</strong> built for board decks and leadership reviews</li>
            </ul>
          </div>
          <div className="feat-visual">
            <div className="mk-brand">
              <div className="mkb-head">
                <div className="mkb-title">Brand Rollup</div>
                <div className="mkb-sub">Executive view · 28 locations</div>
              </div>
              <div className="mkb-hero-stat">
                <div className="mkb-hero-val">2,847</div>
                <div className="mkb-hero-lbl">Total network leads · 30d</div>
                <div className="mkb-hero-delta">↑ 23% vs prior period</div>
              </div>
              <div className="mkb-split">
                <div className="mkb-box"><div className="mkb-box-val">$14.20</div><div className="mkb-box-lbl">Avg Network CPL</div></div>
                <div className="mkb-box mkb-box-teal"><div className="mkb-box-val">18:1</div><div className="mkb-box-lbl">LTV:CAC Ratio</div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE 5: FRANCHISEE ONBOARDING */}
      <section className="feat" style={{ background: '#F7F7F7' }}>
        <div className="feat-grid mx">
          <div className="feat-text">
            <div className="feat-eb">Stage 5 · Every Location Gets the Engine</div>
            <h3 className="feat-h">New Franchisee Onboarding System</h3>
            <p className="feat-p">When a new franchisee signs, they shouldn&apos;t have to figure out marketing from scratch. We give every new location the same proven engine on day one — ad accounts set up, CRM configured, creative library loaded, CSM assigned. Day 30, they&apos;re running the same system as your best-performing location. Day 90, they&apos;re on track with the network average. Brand consistency at scale, without brand leadership doing the heavy lifting.</p>
            <ul className="feat-list">
              <li><strong>30-day launch playbook</strong> that goes from signed agreement to live campaigns</li>
              <li><strong>Pre-configured tech stack</strong> with ad accounts, CRM, automations, and dashboards ready</li>
              <li><strong>Franchisee training &amp; enablement</strong> so every location owner knows how to work with us</li>
            </ul>
          </div>
          <div className="feat-visual">
            <div className="mk-onboard">
              <div className="mko-header">
                <div className="mko-title">New Franchisee Launch</div>
                <div className="mko-location">Austin North · Started Mar 1</div>
              </div>
              <div className="mko-timeline">
                <div className="mko-step mko-step-done"><div className="mko-step-indicator"><span className="mko-step-num">✓</span></div><div className="mko-step-info"><div className="mko-step-day">DAY 1</div><div className="mko-step-name">System installed</div></div></div>
                <div className="mko-step mko-step-done"><div className="mko-step-indicator"><span className="mko-step-num">✓</span></div><div className="mko-step-info"><div className="mko-step-day">DAY 7</div><div className="mko-step-name">Ads launched live</div></div></div>
                <div className="mko-step mko-step-active"><div className="mko-step-indicator"><span className="mko-step-num">3</span></div><div className="mko-step-info"><div className="mko-step-day">DAY 14</div><div className="mko-step-name">First leads landing</div></div></div>
                <div className="mko-step"><div className="mko-step-indicator"><span className="mko-step-num">4</span></div><div className="mko-step-info"><div className="mko-step-day">DAY 30</div><div className="mko-step-name">Full pipeline active</div></div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE 6: DEDICATED BRAND CSM */}
      <section className="feat">
        <div className="feat-grid mx feat-reverse">
          <div className="feat-text">
            <div className="feat-eb">Stage 6 · Partnership at the Brand Level</div>
            <h3 className="feat-h">Dedicated Brand CSM</h3>
            <p className="feat-p">Every franchise brand we work with gets a dedicated senior Client Success Manager who operates at the franchisor level — not just the franchisee level. They know your entire system: your locations, your offers, your franchise dev pipeline, your leadership priorities. Monthly strategy calls with brand leadership, quarterly business reviews, Loom recaps on network performance. You&apos;re not a ticket in a queue. You&apos;re a partner with a dedicated team that owns your network&apos;s outcome.</p>
            <ul className="feat-list">
              <li><strong>Senior CSM assignment</strong> with franchise industry experience at the brand level</li>
              <li><strong>Monthly strategy calls &amp; QBRs</strong> with your brand leadership team</li>
              <li><strong>Slack + AI support</strong> for real-time questions and network-wide decisions</li>
            </ul>
          </div>
          <div className="feat-visual">
            <div className="sys-stage">
              <div className="ss-header">
                <div className="ss-icon">👥</div>
                <div className="ss-title">Brand CSM</div>
                <div className="ss-badge"><span className="hsys-dot"></span>Online</div>
              </div>
              <div>
                <div className="ss-csm-card">
                  <div className="ss-csm-avatar">T</div>
                  <div className="ss-csm-info">
                    <div className="ss-csm-name">Tristynn M.</div>
                    <div className="ss-csm-role">Your Brand CSM</div>
                  </div>
                </div>
                <div className="ss-csm-list">
                  <div className="ss-csm-item"><span className="ss-csm-item-icon">📅</span><span className="ss-csm-item-text">Monthly brand strategy call</span></div>
                  <div className="ss-csm-item"><span className="ss-csm-item-icon">📺</span><span className="ss-csm-item-text">Quarterly business review</span></div>
                  <div className="ss-csm-item"><span className="ss-csm-item-icon">📈</span><span className="ss-csm-item-text">Network-wide performance</span></div>
                  <div className="ss-csm-item"><span className="ss-csm-item-icon">💬</span><span className="ss-csm-item-text">Slack + AI real-time support</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="ap-testimonial">
        <div className="ap-tst-inner">
          <div className="ap-tst-card">
            <div className="ap-tst-stag">Proven at Scale</div>
            <div className="ap-tst-quote">Fifth Element got us to 100% leased before we even opened. The entire system just worked from day one.</div>
            <div className="ap-tst-attr">
              <img src="https://cdn.prod.website-files.com/68f669a6d79edc75f34470f3/692e9562339abd420ce02b28_Screenshot%202025-12-01%20at%2011.29.25%E2%80%AFPM.png" alt="Jared Jamison" />
              <div className="ap-tst-attr-text">
                <div className="ap-tst-attr-name">Jared Jamison</div>
                <div className="ap-tst-attr-meta">IMAGE Studios · Bakersfield, CA</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="ap-fcta">
        <h2>Ready to Scale Your Franchise Brand?</h2>
        <p>Book a free strategy call. We&apos;ll show you how to sell more units and fill more locations with one integrated marketing system. No pitch unless you ask.</p>
        <a href={auditCTA.href} className="bp bpl">Book Your Free Audit →</a>
      </section>
    </>
  );
}
