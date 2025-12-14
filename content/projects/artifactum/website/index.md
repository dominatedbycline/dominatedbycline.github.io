---
title: "Artefactum Games Website"
description: "Building a vintage horror marketing site with Astro - envelope cards, blood splatters, and bilingual chaos"
date: 2024-12-13
tags: ["web-dev", "astro", "i18n", "design", "css-animation", "AI-assisted"]
---

# Artefactum Games Website

**Status:** 70% Complete 🎨
**Framework:** Astro + Tailwind CSS
**Languages:** Portuguese + English (bilingual)
**Vibe:** Vintage horror meets murder mystery elegance

---

## What Is This?

A marketing website for Artefactum Games—showcasing the murder mystery games and serving as a potential future sales platform.

**Live soon at:** artefactum.games (or similar)

---

## The Challenge

How do you make a website that feels like opening a sealed envelope from 1926? That has blood dripping down the sides? That switches seamlessly between Portuguese and English?

And do it all in a week while also finishing two actual games?

---

## What I Built

### 1. Flipping Envelope Cards

The hero feature: sealed envelopes with wax seals that flip to reveal vintage postcards.

```
┌─────────────────────┐     click     ┌─────────────────────┐
│                     │    ───────>   │ Postcard inside:    │
│    🔴 Wax Seal      │               │ - Game description  │
│                     │               │ - Stamps            │
│  "tap to open"      │               │ - Address lines     │
└─────────────────────┘               └─────────────────────┘
```

**The CSS challenge:** 3D transforms, backface-visibility, perspective. Getting it smooth on mobile was... fun.

### 2. Blood Splatter Layer

15+ blood splatters positioned absolutely across the page. Different sizes, opacities, rotations. Subtle but unsettling.

```html
<img src="/images/splatter_lg1.png"
     class="absolute opacity-50"
     style="top: 8%; right: 5%; width: 180px; transform: rotate(25deg);" />
```

### 3. Claw Scratches on Scroll

Scratches that reveal as you scroll down—like something is clawing at the page.

```javascript
// Reveal scratches based on scroll position
const revealPercent = (scrollY / (maxScroll * 0.65)) * 100;
scratchImg.style.clipPath = `inset(${100 - revealPercent}% 0 0 0)`;
```

### 4. Bilingual i18n System

Custom TypeScript i18n without heavy libraries:

```typescript
export function t(lang: Lang, key: string): string {
  // Nested key support: 'home.hero.title'
  // Automatic fallback to English
}
```

**Route mapping:**
- `/pt/jogos/` ↔ `/en/games/`
- `/pt/sobre/` ↔ `/en/about/`
- `/pt/contacto/` ↔ `/en/contact/`

### 5. Design System

Dark theme with vintage accents:

```css
--color-bg-deep: #0a0a0a;
--color-accent-gold: #C9A961;
--color-accent-red: #8B3A3A;
```

Fonts: Cherish (display), Pinyon Script (elegant), JetBrains Mono (body).

---

## What's Been Difficult

### 1. CSS 3D Transforms on Mobile

The envelope flip animation looked perfect on desktop. On mobile Safari? Flickering, z-index wars, backface bleeding through.

**Solution:** Explicit `backface-visibility: hidden` on BOTH sides, higher `perspective` values, and careful transform-origin placement.

### 2. i18n Without Over-Engineering

Didn't want to add a heavy i18n library for 2 languages. Built a minimal system, but then discovered I needed:
- Route translation (`/jogos` vs `/games`)
- Content collections with language variants
- Language switcher that preserves current page

**Current solution:** 50 lines of TypeScript + JSON files. Works, but feels fragile.

### 3. Astro Content Collections + i18n

Each game needs `pt.md` and `en.md`. The content collection config was tricky:

```
src/content/games/
├── christmas-murder-1926/
│   ├── pt.md
│   └── en.md
└── orfanato/
    ├── pt.md
    └── en.md
```

Dynamic routes (`[slug].astro`) had to filter by language AND slug.

### 4. Asset Generation

Blood splatters, wax seals, claw scratches—all needed to be:
- Transparent PNGs
- Multiple sizes for variety
- Consistent style

Used AI image generation (DALL-E, Midjourney) but lots of iteration to get the right "vintage horror" feel.

### 5. Performance vs Aesthetics

15 blood splatters = 15 image requests. Each PNG is 50-100KB.

**Partial solution:** Lazy loading, optimized PNGs, but still working on this.

---

## Current Progress

### Done ✅
- Homepage with envelope cards
- Bilingual routing (PT/EN)
- Blood splatter decorations
- Claw scratch scroll effect
- Header with language switcher
- Footer with links
- Design tokens and dark theme
- Game content pages (basic)

### In Progress 🚧
- About page content
- Contact form
- Newsletter signup (backend needed)
- SEO meta tags
- Image optimization

### Not Started ⏳
- Custom game inquiry form
- Pricing/booking flow
- Blog integration
- Analytics

---

## Tech Stack

| Layer | Choice | Why |
|-------|--------|-----|
| Framework | Astro | Fast, component islands, great for content sites |
| Styling | Tailwind CSS | Rapid iteration, design tokens |
| i18n | Custom TypeScript | Minimal, fits the need |
| Deployment | TBD | Probably Netlify or Vercel |
| Domain | artefactum.games | (Pending) |

---

## File Structure

```
site/
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   └── ScrollToTop.astro
│   ├── content/
│   │   └── games/
│   │       ├── christmas-murder-1926/
│   │       └── orfanato/
│   ├── i18n/
│   │   ├── utils.ts
│   │   ├── en.json
│   │   └── pt.json
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   └── PageLayout.astro
│   ├── pages/
│   │   ├── en/
│   │   └── pt/
│   └── styles/
│       └── global.css
└── public/
    └── images/
        ├── splatter_*.png
        ├── claw_scratches.png
        ├── wax_seal.png
        └── stamp*.jpg
```

---

## Learnings So Far

### 1. Astro is Perfect for This

Zero JS shipped by default. Component islands when needed. Content collections for structured data. Fast builds.

### 2. i18n is Harder Than It Looks

Even with 2 languages, edge cases multiply:
- What's the "canonical" URL?
- How do you handle missing translations?
- Should `/` redirect or show default language?

### 3. CSS Can Do A Lot

The envelope flip, scroll reveals, layered decorations—all pure CSS + vanilla JS. No animation libraries needed.

### 4. AI-Generated Assets Need Curation

Generated 50+ blood splatters. Used maybe 15. The curation takes longer than the generation.

---

## Development Log

| Date | Update |
|------|--------|
| Dec 10, 2024 | Initial Astro setup |
| Dec 13, 2024 | i18n system implemented |
| Dec 13, 2024 | Envelope card prototype |
| Dec 13, 2024 | Blood splatters and claw scratches |
| Dec 13, 2024 | **Major redesign:** Vintage postcard aesthetic |
| Dec 14, 2024 | Stamps, address lines, postcard polish |

---

## What's Next

1. **Finish content pages** - About, Contact, individual game pages
2. **Contact form** - Either Netlify Forms or custom backend
3. **Newsletter** - Integrate with email service
4. **Deploy** - Get it live at artefactum.games
5. **Analytics** - Plausible or similar (privacy-respecting)

---

## Links

- **Repository:** [github.com/marialu1/artefactum_games](https://github.com/marialu1/artefactum_games) (site/ folder)
- **Live preview:** Coming soon

---

*This project is part of the [Artefactum Mystery Crimes](/projects/artifactum/) series.*
