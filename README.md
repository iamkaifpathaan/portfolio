# Md Kaif — Portfolio

A super-responsive, animated portfolio for **Md Kaif** — Electronics & Communication Engineer, PCB/embedded systems designer, and creative technologist. The design theme is built around a PCB / circuit-board aesthetic: a 3D animated chip in the hero, silkscreen-style reference designators (`U0`, `R1`, `C1`...) as section labels, glowing traces, and a boot-sequence preloader.

## Stack

- [Next.js 16](https://nextjs.org) (App Router) + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com)
- [Framer Motion](https://motion.dev) for scroll reveals and micro-interactions
- [React Three Fiber](https://r3f.docs.pmnd.rs) + [drei](https://github.com/pmndrs/drei) + postprocessing (Bloom) for the animated 3D chip in the hero
- [lucide-react](https://lucide.dev) for icons

## Structure

- `src/lib/data.ts` — all portfolio content (profile, experience, projects, skills, certificates, hobbies). Edit this file to update the site's content without touching components.
- `src/components/` — one component per section (`Hero`, `About`, `Experience`, `Projects`, `Skills`, `Certificates`, `Hobbies`, `Contact`), plus shared pieces (`Navbar`, `Footer`, `CircuitBackground`, `Preloader`, `Scene3D`, `Reveal`, `SectionHeading`).
- `public/Md_Kaif_Resume.pdf` — resume served for the "Download Resume" buttons. Replace this file to update the downloadable resume.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm run start
```

## Deploy on Vercel

Push this repo to GitHub and [import it on Vercel](https://vercel.com/new) — no extra configuration needed, it's a standard Next.js app.
