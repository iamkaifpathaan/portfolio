# Md Kaif — Portfolio

The personal portfolio of **Md Kaif** — electronics engineer, founder of [Pabloch Tech](https://projects.pablochtech.com), creator of [Electronica](https://learn.pablochtech.com) and L1 QA Engineer at OPPO.

A calm, editorial dark design: big type, one champagne-gold accent, smooth scrolling and motion that stays out of the way.

## Pages

| URL | What's on it |
| --- | --- |
| `/` | Hero, stacked featured projects, the full project index with hover previews, numbers, Electronica reel strip, what I do, about teaser |
| `/work` | Every project with category filters (Products · Web · Hardware · Motion), plus lab & experiments |
| `/work/[slug]` | A case study per project: overview, highlights, chapters, screenshots, phone view, showreel / reels, stack, next project |
| `/about` | Story, experience timeline, toolbox, education, certificates, hobbies, résumé |
| `/contact` | Email (with copy), studio + social links, and a message form that opens your email app |

## Stack

- [Next.js 16](https://nextjs.org) (App Router, fully static) + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com)
- [Framer Motion](https://motion.dev) — split-text reveals, sticky stacking cards, magnetic buttons, cursor, scroll parallax
- [Lenis](https://lenis.darkroom.engineering) — smooth scrolling
- React `<ViewTransition>` — project covers morph from the card into the case-study hero
- Fonts: Geist, Geist Mono, Instrument Serif

Everything respects `prefers-reduced-motion`.

## Editing content

All words, projects, experience, skills and links live in **`src/lib/content.ts`**. Add a project to the `projects` array and it gets a card, a case-study page and a sitemap entry automatically.

- Screenshots: `public/work/` (WebP). Reel covers: `public/work/reels/epNN.webp`.
- Showreel video: `public/video/`.
- Résumé: replace `public/Md_Kaif_Resume.pdf`.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start
```

Deploy on Vercel (or any Next.js host) — no configuration needed.
