"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import type { Project } from "@/lib/content";
import ProjectMedia from "../ProjectMedia";
import { EASE, SplitText } from "../motion";

export default function CaseHero({ project }: { project: Project }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0.2, 0.8], [1, 1.06]);
  const radius = useTransform(scrollYProgress, [0.3, 0.6], [28, 12]);

  const meta = [
    { k: "Role", v: project.role },
    { k: "Year", v: project.year },
    { k: "Type", v: project.type },
    { k: "Status", v: project.status },
  ];

  return (
    <header className="relative pt-36 sm:pt-44">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[640px] w-[min(1100px,120vw)] -translate-x-1/2 rounded-full opacity-30 blur-[130px]"
        style={{ background: `radial-gradient(closest-side, ${project.tint}, transparent)` }}
      />
      <div className="shell relative">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: EASE }}
          className="mb-12 flex items-center justify-between"
        >
          <Link href="/work" transitionTypes={["nav-back"]} className="group inline-flex items-center gap-2 text-[14px] text-muted hover:text-text">
            <span className="transition-transform duration-300 group-hover:-translate-x-1">←</span>
            <span className="link-draw">All work</span>
          </Link>
          <span className="eyebrow">
            Case study {project.index}
          </span>
        </motion.div>

        <SplitText as="h1" text={project.title} onMount delay={0.1} className="display block text-[clamp(3rem,9.5vw,9rem)]" />
        <motion.p
          className="serif mt-6 max-w-[24ch] text-[clamp(1.6rem,3.2vw,2.75rem)] leading-[1.1] text-muted"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: EASE, delay: 0.45 }}
        >
          {project.kicker}
        </motion.p>

        <motion.dl
          className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: EASE, delay: 0.6 }}
        >
          {meta.map((m) => (
            <div key={m.k} className="bg-bg px-5 py-5">
              <dt className="eyebrow mb-2">{m.k}</dt>
              <dd className="text-[15px]">{m.v}</dd>
            </div>
          ))}
        </motion.dl>

        {project.links.length ? (
          <motion.div
            className="mt-8 flex flex-wrap gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            {project.links.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group inline-flex items-center gap-2 rounded-full px-5 py-3 text-[14px] transition-colors duration-300 ${
                  i === 0 ? "bg-text text-bg hover:bg-accent" : "border border-line-2 text-muted hover:border-text hover:text-text"
                }`}
              >
                {l.label}
                <span className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">↗</span>
              </a>
            ))}
          </motion.div>
        ) : null}
      </div>

      <div ref={ref} className="shell mt-16 sm:mt-24">
        <motion.div
          style={{ borderRadius: radius }}
          className="relative aspect-[16/10] overflow-hidden border border-line-2 bg-surface shadow-[0_60px_120px_-40px_rgba(0,0,0,0.8)]"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3, ease: EASE, delay: 0.5 }}
        >
          <motion.div style={{ scale }} className="absolute inset-0">
            <ProjectMedia project={project} sizes="(min-width: 1440px) 1340px, 100vw" priority />
          </motion.div>
        </motion.div>
      </div>
    </header>
  );
}
