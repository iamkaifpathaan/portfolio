"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { disciplines, experience, profile, reels, services, stats } from "@/lib/content";
import { Counter, Reveal, SplitText, useSpotlight } from "../motion";

/** Two rows of disciplines drifting in opposite directions. */
export function Marquee() {
  const row = [...disciplines, ...disciplines];
  return (
    <section aria-label="What I do" className="relative overflow-hidden border-y border-line py-7 [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
      <div className="flex w-max animate-marquee items-center gap-10" style={{ ["--marquee-duration" as string]: "50s" }}>
        {row.map((d, i) => (
          <span key={i} className="flex items-center gap-10 text-[clamp(1.5rem,3vw,2.5rem)] font-medium tracking-[-0.03em] text-muted">
            {i % 2 ? <span className="serif text-text">{d}</span> : d}
            <span className="text-accent">✦</span>
          </span>
        ))}
      </div>
    </section>
  );
}

export function Stats() {
  return (
    <section className="shell pt-28 sm:pt-40" aria-label="In numbers">
      <div className="grid grid-cols-2 gap-px overflow-hidden rounded-[24px] border border-line bg-line lg:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08} className="bg-bg p-7 sm:p-10">
            <p className="display text-[clamp(3rem,7vw,6rem)]">
              <Counter to={s.value} suffix={s.suffix} />
            </p>
            <p className="mt-3 max-w-[14ch] text-[14px] text-muted">{s.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function ServiceCard({ s, i }: { s: (typeof services)[number]; i: number }) {
  const { ref, onPointerMove } = useSpotlight<HTMLDivElement>();
  return (
    <Reveal delay={i * 0.1} className="h-full">
      <div
        ref={ref}
        onPointerMove={onPointerMove}
        className="spotlight flex h-full flex-col rounded-[24px] border border-line bg-surface/50 p-8 transition-colors duration-500 hover:border-line-2 sm:p-10"
      >
        <span className="font-mono text-[12px] text-accent">{s.no}</span>
        <h3 className="mt-14 text-[clamp(1.6rem,2.4vw,2.1rem)] font-medium tracking-[-0.03em]">{s.title}</h3>
        <p className="mt-4 flex-1 text-[15px] leading-relaxed text-muted">{s.body}</p>
        <ul className="mt-8 flex flex-wrap gap-2">
          {s.items.map((it) => (
            <li key={it} className="rounded-full border border-line px-3 py-1.5 text-[12px] text-muted">
              {it}
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}

export function Services() {
  return (
    <section className="shell pt-28 sm:pt-40" aria-labelledby="services-heading">
      <div className="mb-14 grid gap-8 lg:grid-cols-12">
        <p className="eyebrow lg:col-span-4">What I do</p>
        <SplitText
          as="h2"
          text="Three crafts, *one* way of working: understand it, build it properly, ship it."
          className="display block text-[clamp(2rem,4.2vw,3.75rem)] leading-[1] lg:col-span-8"
        />
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        {services.map((s, i) => (
          <ServiceCard key={s.no} s={s} i={i} />
        ))}
      </div>
    </section>
  );
}

/** Reel covers sliding sideways as the page scrolls. */
export function ReelStrip() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x1 = useTransform(scrollYProgress, [0, 1], ["4%", "-28%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["-26%", "2%"]);
  const half = Math.ceil(reels.length / 2);
  const rows = [reels.slice(0, half + 1), reels.slice(half - 1)];

  return (
    <section ref={ref} className="relative overflow-hidden pt-28 sm:pt-40" aria-labelledby="reels-heading">
      <div className="shell mb-14 grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p className="eyebrow mb-6">Electronica · @iam.yourprofessor</p>
          <SplitText
            as="h2"
            text="98 reels. Every frame *drawn in code.*"
            className="display block text-[clamp(2.5rem,6vw,5.75rem)]"
          />
        </div>
        <Reveal delay={0.15} className="self-end lg:col-span-5">
          <p className="max-w-[30rem] text-[16px] leading-relaxed text-muted">
            A free electronics school in 30-second lessons, from a first LED to Embedded C. I wrote the Python engine that draws every
            frame and synthesises every sound — and the website that builds itself from it.
          </p>
          <div className="mt-6 flex flex-wrap gap-5 text-[15px]">
            <Link href="/work/electronica" className="link-draw">
              Read the case study →
            </Link>
            <a href="https://learn.pablochtech.com/" target="_blank" rel="noopener" className="link-draw text-muted hover:text-text">
              learn.pablochtech.com ↗
            </a>
          </div>
        </Reveal>
      </div>
      <div className="space-y-5">
        {rows.map((row, r) => (
          <motion.ul key={r} style={{ x: r ? x2 : x1 }} className="flex w-max gap-5 px-5">
            {row.map((reel) => (
              <li key={reel.ep} className="group relative w-[min(46vw,230px)] shrink-0">
                <div className="relative aspect-[9/16] overflow-hidden rounded-[18px] border border-line">
                  <Image
                    src={`/work/reels/ep${reel.ep}.webp`}
                    alt={`Electronica EP.${reel.ep}: ${reel.title}`}
                    fill
                    sizes="230px"
                    className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-105"
                  />
                </div>
                <p className="mt-3 flex items-center justify-between text-[12px] text-dim">
                  <span>EP.{reel.ep}</span>
                  <span>{reel.kind}</span>
                </p>
              </li>
            ))}
          </motion.ul>
        ))}
      </div>
    </section>
  );
}

export function AboutTeaser() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  return (
    <section className="shell pt-28 sm:pt-40" aria-labelledby="about-heading">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <div ref={ref} className="relative aspect-[4/5] overflow-hidden rounded-[28px] border border-line">
            <motion.div style={{ y }} className="absolute inset-[-10%_0]">
              <Image src={profile.photo.src} alt={profile.photo.alt} fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
            </motion.div>
          </div>
        </Reveal>
        <div className="flex flex-col justify-center lg:col-span-7">
          <p className="eyebrow mb-6">About</p>
          <SplitText
            as="h2"
            text="Engineer by training. *Builder* by habit."
            className="display block text-[clamp(2.5rem,5.5vw,5rem)]"
          />
          <Reveal delay={0.15}>
            <p className="mt-8 max-w-[38rem] text-[17px] leading-relaxed text-muted">
              I’m finishing a B.Tech in Electronics & Communication while working as an L1 QA Engineer at OPPO and running my own studio.
              Building things and testing them for a living has taught me the same lesson twice: the details people never see are what
              make a product feel finished.
            </p>
          </Reveal>
          <ul className="mt-10 border-t border-line">
            {experience.map((e, i) => (
              <Reveal as="li" key={e.company} delay={0.1 + i * 0.06}>
                <div className="flex items-baseline justify-between gap-6 border-b border-line py-4">
                  <span className="text-[16px]">
                    {e.role} <span className="text-muted">· {e.company}</span>
                  </span>
                  <span className="shrink-0 font-mono text-[12px] text-dim">{e.period}</span>
                </div>
              </Reveal>
            ))}
          </ul>
          <Reveal delay={0.3} className="mt-10">
            <Link href="/about" className="group inline-flex items-center gap-2 text-[15px]">
              <span className="link-draw">The full story</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
