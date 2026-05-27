import type { Metadata } from 'next';
import { auditCTA } from '@/lib/site';
import '@/styles/audience.css';

export const metadata: Metadata = {
  title: 'Franchise Marketing for Franchisees | Local Lead Generation | 5th Element Media',
  description:
    'Stop leaving money on the table. Hyper-local ads, UGC creative, real-time dashboards, and automated follow-up for franchise owners who want predictable local lead flow.',
};

export default function ForFranchiseesPage() {
  return (
    <>
      {/* HERO */}
      <section className="ap-hero-split">
        <div>
          <div className="stag">For Franchisees</div>
          <h1>
            Your Location<br />
            Deserves<br />
            <em>Better Marketing.</em>
          </h1>
          <p className="ssub" style={{ marginBottom: 32 }}>
            Whether you own one location or ten, your marketing should be generating an abundance of qualified leads every month. If it&apos;s not, you&apos;re leaving money on the table. We fix that — with hyper-local ads, UGC creative, and automated follow-up tuned to your market.
          </p>
          <a href={auditCTA.href} className="bp bpl">Get Your Free Audit →</a>
        </div>
        <div className="ap-hero-img">
          <div className="hero-franchisee">
            <div className="hfe-header">
              <div className="hfe-title">Austin North · Your Location</div>
              <div className="hfe-badge"><span className="hd-dot"></span>Live</div>
            </div>
            <div className="hfe-sub">Last 30 days · Meta + Google</div>
            <div className="hfe-stats">
              <div className="hfe-stat"><div className="hfe-stat-val">127</div><div className="hfe-stat-lbl">New leads</div></div>
              <div className="hfe-stat"><div className="hfe-stat-val">$11.40</div><div className="hfe-stat-lbl">Your CPL</div></div>
              <div className="hfe-stat hfe-stat-up"><div className="hfe-stat-val">78%</div><div className="hfe-stat-lbl">Show rate</div></div>
            </div>
            <div className="hfe-notif">
              <div className="hfe-notif-dot"></div>
              <div className="hfe-notif-content">
                <div className="hfe-notif-title">New lead · Sarah M.</div>
                <div className="hfe-notif-meta">Just submitted · 2s ago</div>
              </div>
              <div className="hfe-notif-ping"></div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY DIFFERENT */}
      <section className="ap-why">
        <div className="ap-why-inner">
          <div className="stag">The Franchisee Problem</div>
          <h2 className="sttl">You&apos;re Leaving Money On the Table.<br />Every. Single. Day.</h2>
          <p className="ssub" style={{ margin: '0 auto' }}>
            Every lead you don&apos;t generate is a membership you don&apos;t sell. Every slow follow-up is a prospect who went somewhere else. Every month of inconsistent marketing is revenue you&apos;ll never get back. The franchisees who win in 2026 aren&apos;t the ones with the biggest budgets — they&apos;re the ones with the best systems. That&apos;s what we build.
          </p>
        </div>
      </section>

      {/* TRANSFORMATION (BEFORE/AFTER) */}
      <section className="ap-section" style={{ background: '#F7F7F7' }}>
        <div className="ap-mx">
          <div style={{ marginBottom: 48 }}>
            <div className="stag" style={{ display: 'inline-block' }}>The Transformation</div>
            <h2 className="sttl">What Changes When You Work With Us</h2>
            <p className="ssub" style={{ margin: '0 auto', maxWidth: 680 }}>We fix the things that are quietly costing you leads every single month.</p>
          </div>
          <div className="transform-grid">
            <div className="tfm-card tfm-card-before">
              <div className="tfm-header">
                <div className="tfm-label">Before 5th Element</div>
                <div className="tfm-tag">Sound familiar?</div>
              </div>
              <ul className="tfm-list">
                <li><span className="tfm-x">×</span>Inconsistent leads. Some months good, most months not.</li>
                <li><span className="tfm-x">×</span>Generic corporate creative that doesn&apos;t resonate locally.</li>
                <li><span className="tfm-x">×</span>No idea what your CPL actually is or if it&apos;s competitive.</li>
                <li><span className="tfm-x">×</span>Agency that treats you like an afterthought.</li>
                <li><span className="tfm-x">×</span>No dashboard. No visibility. Just a monthly invoice.</li>
                <li><span className="tfm-x">×</span>Leads come in but nobody follows up fast enough.</li>
              </ul>
            </div>
            <div className="tfm-arrow"><span>→</span></div>
            <div className="tfm-card tfm-card-after">
              <div className="tfm-header">
                <div className="tfm-label tfm-label-after">After 5th Element</div>
                <div className="tfm-tag tfm-tag-after">This is what&apos;s possible</div>
              </div>
              <ul className="tfm-list">
                <li><span className="tfm-check">✓</span>An abundance of qualified leads every month, like clockwork.</li>
                <li><span className="tfm-check">✓</span>Local UGC creative that outperforms stock by 30-50%.</li>
                <li><span className="tfm-check">✓</span>Real-time dashboard showing your CPL, leads, and ROI.</li>
                <li><span className="tfm-check">✓</span>Dedicated CSM who knows your brand and your market.</li>
                <li><span className="tfm-check">✓</span>Monthly strategy calls and Loom recaps you can actually use.</li>
                <li><span className="tfm-check">✓</span>Automated follow-up so no lead gets left behind.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO + PILLAR CARDS */}
      <section className="ap-section">
        <div className="ap-mx">
          <div className="stag" style={{ display: 'inline-block' }}>What You Get</div>
          <h2 className="sttl">Everything Your Location Needs to Grow</h2>
          <p className="ssub" style={{ margin: '0 auto', maxWidth: 680 }}>
            No matter your franchise brand, vertical, or market size, our system adapts to deliver results for your specific location.
          </p>
          <div className="pillars">
            <div className="pillars-grid">
              <div className="pcard">
                <div className="pcard-viz pcard-viz-local">
                  <div className="plc-map">
                    <div className="plc-ring plc-ring-outer"></div>
                    <div className="plc-ring plc-ring-mid"></div>
                    <div className="plc-ring plc-ring-inner"></div>
                    <div className="plc-pin"><div className="plc-pin-dot"></div></div>
                    <div className="plc-label">3 mi radius</div>
                  </div>
                </div>
                <div className="pcard-body">
                  <div className="pcard-eb">Hyper-Local</div>
                  <div className="pcard-title">Ads Built For Your Market</div>
                  <div className="pcard-desc">Tight-radius targeting tuned to your community, not a nationwide template.</div>
                </div>
              </div>

              <div className="pcard">
                <div className="pcard-viz pcard-viz-ugcsol">
                  <div className="pus-phone">
                    <div className="pus-phone-top"><div className="pus-notch"></div></div>
                    <div className="pus-phone-bg"></div>
                    <div className="pus-play">▶</div>
                    <div className="pus-caption">
                      <div className="pus-handle">Your Location</div>
                      <div className="pus-likes">Local UGC</div>
                    </div>
                  </div>
                  <div className="pus-arrow">→</div>
                  <div className="pus-result">
                    <div className="pus-result-label">CPL vs stock</div>
                    <div className="pus-result-val">↓ 30-50%</div>
                  </div>
                </div>
                <div className="pcard-body">
                  <div className="pcard-eb">UGC Creative</div>
                  <div className="pcard-title">Content That Actually Converts</div>
                  <div className="pcard-desc">We coach you to shoot simple clips that outperform corporate stock creative.</div>
                </div>
              </div>

              <div className="pcard">
                <div className="pcard-viz pcard-viz-yourdash">
                  <div className="pyd-header">Your Dashboard</div>
                  <div className="pyd-stats">
                    <div className="pyd-stat"><div className="pyd-stat-val">127</div><div className="pyd-stat-lbl">Leads</div></div>
                    <div className="pyd-stat"><div className="pyd-stat-val">$11.40</div><div className="pyd-stat-lbl">CPL</div></div>
                    <div className="pyd-stat"><div className="pyd-stat-val">78%</div><div className="pyd-stat-lbl">Show</div></div>
                  </div>
                  <div className="pyd-chart">
                    <svg viewBox="0 0 140 28" preserveAspectRatio="none">
                      <path d="M0,22 L14,20 L28,18 L42,14 L56,15 L70,10 L84,8 L98,10 L112,6 L126,4 L140,2" fill="none" stroke="#00BE9D" strokeWidth="1.5" />
                    </svg>
                  </div>
                </div>
                <div className="pcard-body">
                  <div className="pcard-eb">Real-Time Dashboard</div>
                  <div className="pcard-title">Know What&apos;s Working</div>
                  <div className="pcard-desc">Leads, CPL, show rates, creative performance — all updated live.</div>
                </div>
              </div>

              <div className="pcard">
                <div className="pcard-viz pcard-viz-speed">
                  <div className="psl-step"><div className="psl-step-icon">💬</div><div className="psl-step-bar"></div><div className="psl-step-time">0:47</div></div>
                  <div className="psl-step psl-step-done"><div className="psl-step-icon">✓</div><div className="psl-step-bar psl-step-bar-done"></div><div className="psl-step-time">2:14</div></div>
                  <div className="psl-note">Avg time to first response</div>
                </div>
                <div className="pcard-body">
                  <div className="pcard-eb">Speed to Lead</div>
                  <div className="pcard-title">Every Lead Contacted Fast</div>
                  <div className="pcard-desc">Automated workflows hit leads within minutes, not hours.</div>
                </div>
              </div>

              <div className="pcard">
                <div className="pcard-viz pcard-viz-yourcsm">
                  <div className="pyc-chat">
                    <div className="pyc-avatar">J</div>
                    <div className="pyc-thread">
                      <div className="pyc-name">Justin · Your CSM</div>
                      <div className="pyc-bubble">Crushed it last week! Let&apos;s review Friday and plan the next push.</div>
                    </div>
                  </div>
                </div>
                <div className="pcard-body">
                  <div className="pcard-eb">Dedicated CSM</div>
                  <div className="pcard-title">A Real Human Partner</div>
                  <div className="pcard-desc">Monthly strategy calls, Loom recaps, and Slack access for quick questions.</div>
                </div>
              </div>

              <div className="pcard">
                <div className="pcard-viz pcard-viz-price">
                  <div className="ppr-row ppr-row-header"><div className="ppr-col">What you pay</div><div className="ppr-col ppr-col-val">Crystal clear</div></div>
                  <div className="ppr-row"><div className="ppr-col">Hidden fees</div><div className="ppr-col"><span className="ppr-no">None</span></div></div>
                  <div className="ppr-row"><div className="ppr-col">Long-term lock-in</div><div className="ppr-col"><span className="ppr-no">None</span></div></div>
                  <div className="ppr-row ppr-row-last"><div className="ppr-col">What you get</div><div className="ppr-col"><span className="ppr-yes">Everything</span></div></div>
                </div>
                <div className="pcard-body">
                  <div className="pcard-eb">Transparent Pricing</div>
                  <div className="pcard-title">No Hidden Fees, No Games</div>
                  <div className="pcard-desc">You see exactly what you&apos;re paying for and exactly what you get.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE 1: HYPER-LOCAL */}
      <section className="feat" style={{ background: '#F7F7F7' }}>
        <div className="feat-grid mx">
          <div className="feat-text">
            <div className="feat-eb">Stage 1 · Your Market. Your Audience.</div>
            <h3 className="feat-h">Hyper-Local Ad Campaigns</h3>
            <p className="feat-p">The difference between a local ad that converts and one that wastes your budget isn&apos;t the creative — it&apos;s the targeting. We build campaigns around tight radius targeting (typically 3-5 miles from your location), local demographics, and messaging that speaks directly to people in your community. No generic nationwide templates. No wasted impressions 50 miles away. Every dollar works for your location&apos;s specific market.</p>
            <ul className="feat-list">
              <li><strong>Tight-radius geo-targeting</strong> tuned to your specific trade area</li>
              <li><strong>Local demographic &amp; interest layering</strong> based on your best customer profile</li>
              <li><strong>Location-specific creative</strong> that references your neighborhood and community</li>
            </ul>
          </div>
          <div className="feat-visual">
            <div className="mk-local">
              <div className="mkl-header">
                <div className="mkl-title">Your Trade Area</div>
                <div className="mkl-badge"><span className="hd-dot"></span>Targeting active</div>
              </div>
              <div className="mkl-map">
                <div className="mkl-ring mkl-ring-1"></div>
                <div className="mkl-ring mkl-ring-2"></div>
                <div className="mkl-ring mkl-ring-3"></div>
                <div className="mkl-pin"></div>
                <div className="mkl-pin-label">Your Location</div>
                <div className="mkl-dot mkl-d1"></div>
                <div className="mkl-dot mkl-d2"></div>
                <div className="mkl-dot mkl-d3"></div>
                <div className="mkl-dot mkl-d4"></div>
                <div className="mkl-dot mkl-d5"></div>
                <div className="mkl-dot mkl-d6"></div>
                <div className="mkl-dot mkl-d7"></div>
                <div className="mkl-dot mkl-d8"></div>
              </div>
              <div className="mkl-metrics">
                <div className="mkl-metric"><div className="mkl-metric-val">3-5 mi</div><div className="mkl-metric-lbl">Target radius</div></div>
                <div className="mkl-metric mkl-metric-teal"><div className="mkl-metric-val">127</div><div className="mkl-metric-lbl">Leads in area</div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE 2: UGC */}
      <section className="feat">
        <div className="feat-grid mx feat-reverse">
          <div className="feat-text">
            <div className="feat-eb">Stage 2 · Content People Actually Watch</div>
            <h3 className="feat-h">UGC Creative for Your Location</h3>
            <p className="feat-p">Corporate stock creative works at a pitch deck level but falls flat in local markets. Real people, real locations, real stories — that&apos;s what converts at a fraction of the cost. We coach you through shooting simple phone-recorded content at your location (members, staff, studio moments), edit it into ad-ready clips, and deploy it directly into your active campaigns. Most franchisees see 30-50% lower CPL within 60 days of switching to UGC.</p>
            <ul className="feat-list">
              <li><strong>Simple shoot guides</strong> so you know exactly what to film, no production experience needed</li>
              <li><strong>Pro editing &amp; captions</strong> done by our team so clips are ad-ready, fast</li>
              <li><strong>Continuous creative refresh</strong> so your ads don&apos;t fatigue and CPL stays low</li>
            </ul>
          </div>
          <div className="feat-visual">
            <div className="mk-ugcf">
              <div className="mku2-before-after">
                <div className="mku2-side">
                  <div className="mku2-label">Stock creative</div>
                  <div className="mku2-box mku2-box-stock"></div>
                  <div className="mku2-cpl">$22.40</div>
                  <div className="mku2-cpl-lbl">CPL</div>
                </div>
                <div className="mku2-divider">→</div>
                <div className="mku2-side">
                  <div className="mku2-label mku2-label-teal">Your UGC</div>
                  <div className="mku2-box mku2-box-ugc"><div className="mku2-play">▶</div></div>
                  <div className="mku2-cpl mku2-cpl-teal">$11.40</div>
                  <div className="mku2-cpl-lbl">CPL</div>
                </div>
              </div>
              <div className="mku2-result">↓ 49% CPL in 60 days</div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE 3: YOUR DASHBOARD */}
      <section className="feat" style={{ background: '#F7F7F7' }}>
        <div className="feat-grid mx">
          <div className="feat-text">
            <div className="feat-eb">Stage 3 · Know Exactly What&apos;s Working</div>
            <h3 className="feat-h">Your Real-Time Dashboard</h3>
            <p className="feat-p">Most franchisees are stuck getting monthly PDF reports or worse, no reports at all. You deserve better. Every franchisee we work with gets their own live dashboard showing exactly how your campaigns are performing right now: leads, CPL, show rates, creative performance, budget pacing. Open it on your phone during a busy Saturday, check in between classes, share it with your team. No waiting, no guessing, no black box.</p>
            <ul className="feat-list">
              <li><strong>Live data refresh</strong> across Meta, Google, and your CRM every 15 minutes</li>
              <li><strong>Mobile-friendly view</strong> so you can check performance from anywhere</li>
              <li><strong>Alerts &amp; anomaly detection</strong> that flag issues before they become expensive</li>
            </ul>
          </div>
          <div className="feat-visual">
            <div className="mk-yourdash">
              <div className="mkyd-header">
                <div className="mkyd-title">Austin North Dashboard</div>
                <div className="mkyd-live"><span className="hd-dot"></span>Live · 2m ago</div>
              </div>
              <div className="mkyd-hero">
                <div className="mkyd-hero-val">127</div>
                <div className="mkyd-hero-lbl">Leads this month</div>
                <div className="mkyd-hero-delta">↑ 18% vs last month</div>
              </div>
              <div className="mkyd-split">
                <div className="mkyd-box"><div className="mkyd-box-val">$11.40</div><div className="mkyd-box-lbl">Your CPL</div></div>
                <div className="mkyd-box mkyd-box-teal"><div className="mkyd-box-val">78%</div><div className="mkyd-box-lbl">Show rate</div></div>
                <div className="mkyd-box"><div className="mkyd-box-val">42</div><div className="mkyd-box-lbl">Booked</div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE 4: SPEED TO LEAD */}
      <section className="feat">
        <div className="feat-grid mx feat-reverse">
          <div className="feat-text">
            <div className="feat-eb">Stage 4 · The First 5 Minutes Decide Everything</div>
            <h3 className="feat-h">Automated Speed to Lead</h3>
            <p className="feat-p">Leads contacted within 5 minutes of submission convert 10x higher than leads contacted 30 minutes later. Most franchise front desks can&apos;t consistently hit that window while juggling walk-ins, calls, and classes. We automate the initial touch — SMS and email fire within 60 seconds of every form submission, booking links are in the prospect&apos;s hand before they close the page. Your team focuses on the human conversations that close. The system handles the urgency.</p>
            <ul className="feat-list">
              <li><strong>60-second SMS + email</strong> auto-response on every form submission</li>
              <li><strong>Direct booking link</strong> delivered in every first touch so leads can self-schedule</li>
              <li><strong>Multi-touch nurture</strong> for leads who don&apos;t book right away</li>
            </ul>
          </div>
          <div className="feat-visual">
            <div className="mk-speed">
              <div className="mks-header">Speed-to-Lead Flow</div>
              <div className="mks-steps">
                <div className="mks-step"><div className="mks-time">0:00</div><div className="mks-dot"></div><div className="mks-label">Lead submits form</div></div>
                <div className="mks-step mks-step-done"><div className="mks-time">0:03</div><div className="mks-dot mks-dot-done"></div><div className="mks-label">SMS fired</div></div>
                <div className="mks-step mks-step-done"><div className="mks-time">0:12</div><div className="mks-dot mks-dot-done"></div><div className="mks-label">Email sent with booking link</div></div>
                <div className="mks-step mks-step-active"><div className="mks-time">0:47</div><div className="mks-dot mks-dot-active"></div><div className="mks-label">Lead replied · booking scheduled</div></div>
              </div>
              <div className="mks-result">
                <span className="mks-result-icon">✓</span>
                <span><strong>10x</strong> more likely to convert</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE 5: YOUR CSM */}
      <section className="feat" style={{ background: '#F7F7F7' }}>
        <div className="feat-grid mx">
          <div className="feat-text">
            <div className="feat-eb">Stage 5 · A Partner, Not a Ticket</div>
            <h3 className="feat-h">Your Dedicated CSM</h3>
            <p className="feat-p">Every franchisee we work with gets a dedicated senior Client Success Manager who knows your brand, your market, your goals. Not a revolving door of account reps. Not a ticket queue. A single point of contact you can actually reach. Monthly strategy calls, personalized Loom recaps of your performance, Slack access for quick questions during the week. We pick up the phone because we win when you win.</p>
            <ul className="feat-list">
              <li><strong>One senior CSM assignment</strong> who stays with your account</li>
              <li><strong>Monthly strategy calls &amp; Loom recaps</strong> with clear next steps</li>
              <li><strong>Slack + AI support</strong> for real-time questions and quick wins</li>
            </ul>
          </div>
          <div className="feat-visual">
            <div className="sys-stage">
              <div className="ss-header">
                <div className="ss-icon">👥</div>
                <div className="ss-title">Your CSM</div>
                <div className="ss-badge"><span className="hsys-dot"></span>Online</div>
              </div>
              <div>
                <div className="ss-csm-card">
                  <div className="ss-csm-avatar">J</div>
                  <div className="ss-csm-info">
                    <div className="ss-csm-name">Justin M.</div>
                    <div className="ss-csm-role">Your dedicated CSM</div>
                  </div>
                </div>
                <div className="ss-csm-list">
                  <div className="ss-csm-item"><span className="ss-csm-item-icon">📅</span><span className="ss-csm-item-text">Monthly strategy call</span></div>
                  <div className="ss-csm-item"><span className="ss-csm-item-icon">📺</span><span className="ss-csm-item-text">Personalized Loom recaps</span></div>
                  <div className="ss-csm-item"><span className="ss-csm-item-icon">💬</span><span className="ss-csm-item-text">Slack + AI real-time support</span></div>
                  <div className="ss-csm-item"><span className="ss-csm-item-icon">📈</span><span className="ss-csm-item-text">Quarterly performance review</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE 6: GETTING STARTED */}
      <section className="feat">
        <div className="feat-grid mx feat-reverse">
          <div className="feat-text">
            <div className="feat-eb">Stage 6 · From Audit to Leads in 3 Steps</div>
            <h3 className="feat-h">Getting Started Is Simple</h3>
            <p className="feat-p">We move fast. Most franchisee campaigns are live and generating leads within 2 weeks of signing up. The first step is a free 45-minute audit where we screen-share your current ad accounts and give you 3 or more specific improvements. If we can&apos;t find real improvements, we send you a $100 gift card for your time. No pressure, no pitch unless you ask.</p>
            <ul className="feat-list">
              <li><strong>Step 1: 45-minute free audit</strong> with 3+ guaranteed improvements or $100 gift card</li>
              <li><strong>Step 2: Custom system build</strong> tuned to your location, market, and offer</li>
              <li><strong>Step 3: Campaigns go live</strong> within 2 weeks of signing</li>
            </ul>
          </div>
          <div className="feat-visual">
            <div className="mk-started">
              <div className="mkg-step mkg-step-1">
                <div className="mkg-num">01</div>
                <div className="mkg-info">
                  <div className="mkg-title">Book Your Free Audit</div>
                  <div className="mkg-desc">45-min call · 3+ improvements or $100 gift card</div>
                </div>
              </div>
              <div className="mkg-line"></div>
              <div className="mkg-step mkg-step-2">
                <div className="mkg-num">02</div>
                <div className="mkg-info">
                  <div className="mkg-title">We Build Your System</div>
                  <div className="mkg-desc">Custom strategy, UGC pipeline, automations</div>
                </div>
              </div>
              <div className="mkg-line"></div>
              <div className="mkg-step mkg-step-3">
                <div className="mkg-num">03</div>
                <div className="mkg-info">
                  <div className="mkg-title">Watch Leads Roll In</div>
                  <div className="mkg-desc">Campaigns live in 2 weeks · predictable flow</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL GRID */}
      <section className="ap-section" style={{ background: '#F7F7F7' }}>
        <div className="ap-mx">
          <div style={{ marginBottom: 48 }}>
            <div className="stag" style={{ display: 'inline-block' }}>What People Are Saying</div>
            <h2 className="sttl">Results From Real Franchise Owners</h2>
          </div>
          <div className="tst-grid">
            <div className="tst-card">
              <div className="tst-stars">★★★★★</div>
              <div className="tst-quote">Fifth Element got us to 100% leased before we even opened. Their ability to generate leads and identify the right pros in our market was the best part.</div>
              <div className="tst-author">
                <img src="https://cdn.prod.website-files.com/68f669a6d79edc75f34470f3/692e9562339abd420ce02b28_Screenshot%202025-12-01%20at%2011.29.25%E2%80%AFPM.png" alt="Jared Jamison" />
                <div>
                  <div className="tst-name">Jared Jamison</div>
                  <div className="tst-loc">Bakersfield, CA</div>
                </div>
              </div>
            </div>
            <div className="tst-card">
              <div className="tst-stars">★★★★★</div>
              <div className="tst-quote">We opened with 40 spaces and hit 900+ leads in five months. The minute they said they eat, breathe, and sleep marketing for franchises, I was sold.</div>
              <div className="tst-author">
                <img src="https://cdn.prod.website-files.com/68f669a6d79edc75f34470f3/692e95b04b221fb8065be71e_Screenshot%202025-12-01%20at%2011.30.41%E2%80%AFPM.png" alt="Esther Mazzarino" />
                <div>
                  <div className="tst-name">Esther Mazzarino</div>
                  <div className="tst-loc">Houston, TX</div>
                </div>
              </div>
            </div>
            <div className="tst-card">
              <div className="tst-stars">★★★★★</div>
              <div className="tst-quote">We reached 100% occupancy within just a couple of months, far above the franchise benchmark — hands down because of Fifth Element.</div>
              <div className="tst-author">
                <img src="https://assets.cdn.filesafe.space/Bvl8985Bn5drFTi6qZJM/media/69b5f25fad0276a4e3e39e3b.png" alt="Paul & Elizabeth Cassutti" />
                <div>
                  <div className="tst-name">Paul &amp; Elizabeth</div>
                  <div className="tst-loc">Jacksonville, FL</div>
                </div>
              </div>
            </div>
            <div className="tst-card">
              <div className="tst-stars">★★★★★</div>
              <div className="tst-quote">We have been inundated with leads to the point we can barely keep up. We were about to sign with another company and heard Fifth Element&apos;s pitch instead.</div>
              <div className="tst-author">
                <img src="https://assets.cdn.filesafe.space/Bvl8985Bn5drFTi6qZJM/media/69b5f1ef87f0f23941f78333.jpeg" alt="Richard Mazzarino" />
                <div>
                  <div className="tst-name">Richard Mazzarino</div>
                  <div className="tst-loc">Houston, TX</div>
                </div>
              </div>
            </div>
            <div className="tst-card">
              <div className="tst-stars">★★★★★</div>
              <div className="tst-quote">You cannot go wrong with Fifth Element. They&apos;ve been incredibly attentive and the results speak for themselves across our locations.</div>
              <div className="tst-author">
                <img src="https://assets.cdn.filesafe.space/Bvl8985Bn5drFTi6qZJM/media/69b5f17feaf08161cb663ec0.png" alt="Sierra Smith" />
                <div>
                  <div className="tst-name">Sierra Smith</div>
                  <div className="tst-loc">Boynton Beach, FL</div>
                </div>
              </div>
            </div>
            <div className="tst-card">
              <div className="tst-stars">★★★★★</div>
              <div className="tst-quote">Their data-driven, collaborative approach has been outstanding. We finally have visibility into what&apos;s actually working across our locations.</div>
              <div className="tst-author">
                <img src="https://assets.cdn.filesafe.space/Bvl8985Bn5drFTi6qZJM/media/69b5f20ceaf0810bac666af2.jpeg" alt="Chris Johnson" />
                <div>
                  <div className="tst-name">Chris Johnson</div>
                  <div className="tst-loc">Palm Beach Gardens, FL</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="ap-fcta">
        <h2>Ready to Fill Your Location With Leads?</h2>
        <p>Whether you own one location or ten, our system scales. Book your free audit and we&apos;ll find 3+ improvements — or send you a $100 gift card for your time.</p>
        <a href={auditCTA.href} className="bp bpl">Book Your Free Audit →</a>
      </section>
    </>
  );
}
