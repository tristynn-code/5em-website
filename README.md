# 5th Element Media — Website

Next.js 15 + Tailwind CSS + Vercel. Powered by Claude.

## Quick Start

```bash
npm install
npm run dev
```

Site runs at http://localhost:3000

## Project Structure

```
app/                  # Next.js routes (each folder = a route)
  layout.tsx          # Root layout with Nav + Footer
  page.tsx            # Homepage
  globals.css         # Custom utility classes (.bp, .stag, etc.)
components/           # Reusable UI components
  Nav.tsx             # Top nav (used everywhere)
  Footer.tsx          # Footer (used everywhere)
  BrandsMarquee.tsx   # Auto-scrolling brand logos
  TestimonialsGrid.tsx # Testimonials section
  FinalCTA.tsx        # Bottom CTA bar
content/              # JSON content — edit to add testimonials, brands, etc.
  testimonials.json
  brands.json
lib/                  # Helpers and config
  content.ts          # Content loaders
  site.ts             # Nav, footer, brand config — single source of truth
_legacy_html/         # 30 V5 HTML files from Webflow — visual blueprints
public/               # Static assets
tailwind.config.ts    # Design tokens (colors, fonts)
```

## Adding New Content

**New testimonial?** Edit `content/testimonials.json`, push to GitHub. Vercel deploys automatically. Every page using testimonials updates.

**New brand partner?** Edit `content/brands.json`, push, done.

**Change the nav?** Edit `lib/site.ts`, push. Every page nav updates simultaneously.

## Deploying

1. Push to GitHub (Vercel auto-deploys on push to `main`)
2. Or run `npx vercel` for manual deploy

## Stack

- **Next.js 15** (App Router)
- **React 19**
- **Tailwind CSS 3**
- **TypeScript**
- **Plus Jakarta Sans** (Google Fonts via `next/font`)

## Brand

- Teal accent: `#00BE9D`
- Dark: `#0F1314`
- Audit CTA: `https://go.5them.com/free-franchise-lead-engine-audit`

## For Future Migrations

See `CLAUDE_CODE_PROMPT.md` for the full migration brief.
