# Claude Code Migration Prompt — 5th Element Media Website

Copy everything below this line and paste into Claude Code:

---

You are continuing a website migration project for **5th Element Media** (5them.com), a franchise marketing agency. The agency CEO is **Tristynn McGowan**. You're picking up where another Claude instance left off.

## What's Already Done

A scaffolded Next.js 15 project exists in this repo with:

- ✅ Tailwind 3 config with the full 5EM design system (`tailwind.config.ts`)
- ✅ Global styles + custom utility classes (`app/globals.css`) — `.bp`, `.bpl`, `.bs`, `.stag`, `.sttl`, `.ssub`, `.sec`, `.mx`, `.ctr` all defined and ready
- ✅ Plus Jakarta Sans font loaded via `next/font/google`
- ✅ Shared components: `<Nav />`, `<Footer />`, `<BrandsMarquee />`, `<TestimonialsGrid />`, `<FinalCTA />`
- ✅ Content JSON files in `/content/` for testimonials and brands
- ✅ TypeScript content loaders in `/lib/content.ts`
- ✅ Site config in `/lib/site.ts` (nav links, footer links, brand info, audit CTA URL)
- ✅ Root layout (`app/layout.tsx`) wiring Nav + Footer onto every page
- ✅ Homepage stub (`app/page.tsx`) demonstrating the component composition pattern
- ✅ **`/_legacy_html/`** contains all 30 V5 HTML files exported from the current Webflow site — these are the **visual blueprints** for every page

## Your Mission

**Build the live, production-ready website** by:

1. **Finishing the homepage** — Port the remaining sections from `_legacy_html/5EM_Homepage_UPDATED.html` (Hero Dashboard, Problem, 3-Pillar System, How It Works, Industries tabs, Case Studies grid, Audit Offer, Who We Serve). Each section becomes a reusable component in `/components/`.

2. **Creating routes for every V5 page** by extracting content from `_legacy_html/` files:

   | Route | Legacy file |
   |---|---|
   | `/about` | `5EM_About_V5.html` |
   | `/case-studies` | `5EM_CaseStudies_V5.html` |
   | `/contact` | `5EM_Contact_V5.html` |
   | `/blog` | `5EM_Blog_V5.html` |
   | `/testimonials` | `5EM_Testimonials_V5.html` |
   | `/privacy` | `5EM_Privacy_V5.html` |
   | `/paid-ads` | `5EM_PaidAds_V5.html` |
   | `/creative-production` | `5EM_SocialMedia_V5.html` |
   | `/crm-automations` | `5EM_CRM_V5.html` |
   | `/email-sms` | `5EM_EmailSMS_V5.html` |
   | `/reporting-and-analytics` | `5EM_Reporting_V5.html` |
   | `/franchise-growth-systems` | `5EM_GrowthSystems_V5.html` |
   | `/for-franchisors` | `5EM_Franchisors_V5.html` |
   | `/for-franchisees` | `5EM_Franchisees_V5.html` |
   | `/fitness-franchises` | `5EM_Fitness_V5.html` |
   | `/salon-suites` | `5EM_SalonSuites_V5.html` |
   | `/wellness-franchises` | `5EM_Wellness_V5.html` |
   | `/beauty-aesthetics` | `5EM_Beauty_V5.html` |
   | `/home-services` | `5EM_HomeServices_V5.html` |
   | `/lifestyle-entertainment` | `5EM_Lifestyle_V5.html` |
   | `/not-found` (404) | `5EM_404_V5.html` |

3. **Deploy to Vercel** and confirm everything works live.

## Migration Rules — DO NOT BREAK THESE

1. **PRESERVE THE EXACT VISUAL DESIGN.** The V5 HTML files in `_legacy_html/` are the source of truth for how every page should look. Tristynn put massive effort into them. Match them pixel-perfect: same colors, same copy, same layout, same hover states, same animations. Do not "improve" or "simplify" — port faithfully.

2. **Componentize aggressively.** Any visual pattern that repeats across 2+ pages (testimonial card, brand card, problem card, pillar card, CTA section, audit offer, industry showcase) becomes a `/components/*.tsx` component. Pull data from JSON files in `/content/`.

3. **Content lives in JSON, not in JSX.** When you find a list of items in a legacy file (services, pillars, FAQ, case studies, industries), create a `.json` file under `/content/` and a TypeScript loader in `/lib/content.ts`. Components consume the JSON.

4. **Reuse existing utility classes** — `.bp`, `.bpl`, `.stag`, `.sttl`, `.ssub`, `.sec`, `.mx`, `.ctr` are already defined in `app/globals.css`. Don't recreate them. Use Tailwind classes for everything else.

5. **Keep `_legacy_html/` untouched.** It's a permanent reference. Add `_legacy_html/` to `.gitignore` deployment if needed, but never delete or modify those files.

6. **Use the audit CTA URL from `lib/site.ts`** — never hardcode `https://go.5them.com/free-franchise-lead-engine-audit`. Import `auditCTA` and use `{auditCTA.href}`.

7. **Internal links use Next.js `<Link>`** — `import Link from 'next/link'`. External links use `<a>`.

8. **Images** — for now use plain `<img>` tags (matches legacy). Optionally upgrade to `next/image` later, the `remotePatterns` are already configured in `next.config.mjs`.

## Build Order (Recommended)

1. Run `npm install` first
2. Run `npm run dev` and check the scaffolded homepage works at http://localhost:3000
3. **Finish the homepage** completely first (it's the most complex). Build these components from `_legacy_html/5EM_Homepage_UPDATED.html`:
   - `<HeroDashboard />` — the animated live dashboard with bars and metrics
   - `<ProblemSection />` — 3 problem cards + visual stat panel
   - `<ThreePillarSystem />` — the new dark 3-pillar card with SVG visualizations
   - `<HowItWorks />` — horizontal 3-step flow with arrows
   - `<IndustriesShowcase />` — interactive tab switcher with image preview
   - `<CaseStudiesGrid />` — logo grid (pulls from `content/brands.json`)
   - `<AuditOffer />` — dark 2-column glass card section
   - `<WhoWeServe />` — 4-card audience grid
4. **Once homepage is perfect**, port one services page (e.g., `/paid-ads`) to establish the services-page pattern, then crank through the rest.
5. **Verticals** (fitness, salon suites, wellness, etc.) share a common pattern — create a `<VerticalPageLayout />` component that takes props for hero, features, testimonials, and CTA.
6. **Audience pages** (for-franchisors, for-franchisees) similarly share a pattern.

## Tristynn's Style Preferences

- **No stat strips on the site** ("100+ locations", "60K leads", etc.) — these box the brand in and go stale. Proof comes from testimonials, screenshots, and brand logos.
- **Testimonials and screenshots = preferred proof mechanism.**
- **Dark mode aesthetic** for premium sections (Audit Offer, Industries showcase). Light/white for everything else.
- **Plus Jakarta Sans** is the only font.
- **Teal `#00BE9D`** is the only accent color.
- All audit CTAs link to `https://go.5them.com/free-franchise-lead-engine-audit`.

## What to Ask Tristynn

Before you start cranking, confirm:

1. **GitHub repo URL** — does he have an empty repo ready, or does he need you to suggest a name? Default suggestion: `5em-website`.
2. **Vercel project** — does he have one created and linked to the repo? If not, walk him through it.
3. **Domain plan** — is 5them.com going to point at Vercel immediately when ready, or are we deploying to a preview URL first? **Recommend preview URL first** so he can review without breaking the live Webflow site.
4. **Node version** — confirm he's on Node 20+ locally.
5. **Any pages he wants prioritized?** Default order: homepage → about → case-studies → services pages → vertical pages → audience pages → utility (privacy, blog, 404).

## When You're Done

- Deploy to Vercel preview URL
- Send Tristynn the preview URL
- Give him the DNS instructions for pointing 5them.com to Vercel when he's ready to flip
- Document any pages where you had to make judgment calls (e.g., "the legacy file had X but I interpreted it as Y because Z")

## Key Context About 5EM

- Franchise marketing agency, 100+ locations managed
- Clients: IMAGE Studios, BODY20, Pilates Addiction, beem Light Sauna, iFlex, Scramblers Golf, Sequel Brands
- Free audit offer: 45-min Zoom call, 3+ improvements guaranteed or $100 gift card
- 3-Pillar System: Predictable Local Lead Flow, UGC-Powered Creative Engine, 5E Insight Engine
- Tristynn's voice: direct, confident, no em dashes in copy, no fake stat strips

## Important: This is a marketing site, not an app

- No authentication required
- No database needed yet (JSON content is enough until Supabase later)
- All pages should be statically generated for max speed
- SEO matters — every page needs proper `metadata` exports

---

**Start by confirming with Tristynn:**
1. Repo name (suggest `5em-website` if he doesn't have one)
2. He has a Vercel account ready
3. Then run `npm install` and verify the dev server works

**Then crank.** Match the legacy HTML faithfully, componentize ruthlessly, keep content in JSON. Ship.
