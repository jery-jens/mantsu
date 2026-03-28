# Mantsu

Modular production software for modern factories. Deploy production apps in months, not years.

## Tech Stack

- **Framework**: Next.js 16 (App Router) + React 19
- **Styling**: Tailwind CSS v4
- **Animation**: GSAP (SplitText, ScrollTrigger) + Lenis smooth scroll
- **Typography**: Geist Sans, Geist Mono, Martina Plantijn (serif)
- **Icons**: Remix Icon

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
app/
  layout.tsx              # Root layout (header, banner, scroll, back-to-top)
  page.tsx                # Homepage
  product/page.tsx        # Product page
  pricing/page.tsx        # Pricing (base fee + modules)
  pricing-v2/page.tsx     # Pricing calculator (interactive)
  contact/page.tsx        # Contact / demo request
  insights/page.tsx       # Resources (case studies + blog)
  insights/[slug]/page.tsx # Article / case study detail
  privacy/page.tsx        # Privacy policy
  terms/page.tsx          # Terms of service
  globals.css             # Design tokens, fonts, gradient utility
  components/
    Header.tsx            # Nav with dark/light mode (auto-detects homepage)
    Banner.tsx            # Top announcement bar
    Hero.tsx              # Split hero with tabbed widget slider
    HeroWidget.tsx        # Animated data table with live status swaps
    Stats.tsx             # Metrics bar (light/dark variants, count-up)
    Logos.tsx              # Client logo grid
    Statement.tsx         # Large serif quote with scroll reveal
    Platform.tsx          # Mockup + 3-column features
    Workflow.tsx           # Modular building blocks grid
    Testimonials.tsx      # Stacked quotes with alternating logo panels
    ForWho.tsx            # 4-column use case grid
    Video.tsx             # Video section with thumbnail + play overlay
    Faq.tsx               # Accordion FAQ
    Cta.tsx               # Call-to-action section
    Footer.tsx            # Footer with links + newsletter CTA
    Features.tsx          # Feature tabs + enterprise section (product page)
    Templates.tsx         # Template showcase (product page)
    ScrollProgress.tsx    # Gradient scroll progress bar (bottom)
    BackToTop.tsx         # Fixed back-to-top button
    ShareBar.tsx          # Social share buttons (X, LinkedIn, copy)
    InsightsGrid.tsx      # Resource card grid with type badges
    ContactForm.tsx       # Contact form
    CookieBanner.tsx      # Cookie consent
    SmoothScroll.tsx      # Lenis smooth scroll provider
    Wrapper.tsx           # Max-width container with side borders
    Divider.tsx           # Dotted divider (light/dark)
    ButtonGradient.tsx    # Gradient CTA button (default/lg)
    ButtonOutline.tsx     # Outline button (light/dark, default/lg)
```

## Design Tokens

- **Background**: `#f8fafc` (light) / `#1e293b` (dark)
- **Accent gradient**: `#E8824F` to `#C70C5B` (coral to magenta)
- **Font serif**: Martina Plantijn (headlines)
- **Font sans**: Geist Sans (body, UI)
- **Font mono**: Geist Mono (labels, metadata)

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage with dark hero, stats, logos, statement, platform, workflow, testimonials, FAQ, video, CTA |
| `/product` | Product features, templates, enterprise section, stats |
| `/pricing` | Base fee + module pricing with hosting options |
| `/pricing-v2` | Interactive pricing calculator with user slider and module picker |
| `/insights` | Resources hub (case studies + blog) |
| `/insights/[slug]` | Article/case study detail with author bar and share buttons |
| `/contact` | Demo request form |
| `/privacy` | Privacy policy |
| `/terms` | Terms of service |
