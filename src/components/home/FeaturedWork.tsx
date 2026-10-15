"use client";

import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import type { Project } from "@/lib/content";
import ProjectMedia from "../ProjectMedia";
import { Reveal, SplitText } from "../motion";

/** Full-height cards that stack on top of each other as you scroll. */
export default function FeaturedWork({ projects }: { projects: Project[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  return (
    <section className="relative pt-28 sm:pt-40" aria-labelledby="featured-heading">
      <div className="shell mb-14 flex flex-wrap items-end justify-between gap-8 sm:mb-20">
        <div>
          <p className="eyebrow mb-6">Selected work · {String(projects.length).padStart(2, "0")}</p>
          <SplitText
            as="h2"
            text="Things I’ve *designed,* built and shipped."
            className="display block max-w-[16ch] text-[clamp(2.5rem,6vw,5.75rem)]"
          />
        </div>
        <Reveal delay={0.2}>
          <Link href="/work" className="group inline-flex items-center gap-2 text-[15px] text-muted hover:text-text">
            <span className="link-draw">All projects</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </Reveal>
      </div>

      <div ref={ref} className="shell relative">
        {projects.map((p, i) => (
          <StackCard key={p.slug} project={p} i={i} total={projects.length} progress={scrollYProgress} />
        ))}
      </div>
    </section>
  );
}

function StackCard({
  project,
  i,
  total,
  progress,
}: {
  project: Project;
  i: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const start = i / total;
  const scale = useTransform(progress, [start, 1], [1, 1 - (total - i - 1) * 0.04]);
  const dim = useTransform(progress, [start, Math.min(1, start + 1 / total)], [0, i === total - 1 ? 0 : 0.45]);

  return (
    <div className="lg:sticky lg:top-[11vh] lg:h-[82vh] mb-8 lg:mb-[12vh]" style={{ zIndex: i + 1 }}>
      <motion.article
        style={{ scale, top: `${i * 18}px`, ["--glow" as string]: project.tint }}
        className="group relative h-full origin-top overflow-hidden rounded-[28px] border border-line bg-surface lg:relative"
      >
        <Link
          href={`/work/${project.slug}`}
          className="grid h-full lg:grid-cols-12"
          data-cursor="View"
          transitionTypes={["nav-forward"]}
        >
          <div className="relative z-10 flex flex-col justify-between gap-10 p-7 sm:p-10 lg:col-span-5 lg:p-12">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[12px] text-dim">{project.index}</span>
              <span className="rounded-full border border-line-2 px-3 py-1 text-[12px] text-muted">{project.type}</span>
            </div>
            <div>
              <h3 className="display text-[clamp(2.25rem,4.4vw,4.25rem)]">{project.title}</h3>
              <p className="serif mt-4 text-[clamp(1.25rem,1.8vw,1.75rem)] leading-snug text-muted">{project.kicker}</p>
              <ul className="mt-8 flex flex-wrap gap-2">
                {project.stack.slice(0, 4).map((s) => (
                  <li key={s} className="rounded-full bg-surface-2 px-3 py-1.5 text-[12px] text-muted">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex items-center justify-between border-t border-line pt-6 text-[14px]">
              <span className="text-muted">
                <span className="hidden sm:inline">{project.role} · </span>
                {project.year}
              </span>
              <span className="inline-flex items-center gap-2">
                Case study
                <span className="grid h-9 w-9 place-items-center rounded-full border border-line-2 transition-all duration-500 group-hover:rotate-[-45deg] group-hover:border-text group-hover:bg-text group-hover:text-bg">
                  →
                </span>
              </span>
            </div>
          </div>
          <div className="relative aspect-[16/11] overflow-hidden lg:col-span-7 lg:aspect-auto lg:h-full">
            <div
              className="absolute inset-0 opacity-60 transition-opacity duration-700 group-hover:opacity-100"
              style={{ background: `radial-gradient(80% 70% at 70% 30%, ${project.tint}33, transparent 70%)` }}
            />
            <div className="absolute inset-4 overflow-hidden rounded-[18px] border border-line-2 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)] sm:inset-8 lg:inset-y-12 lg:left-0 lg:right-12">
              <ProjectMedia
                project={project}
                sizes="(min-width: 1024px) 55vw, 100vw"
                imgClassName="transition-transform duration-[1.4s] ease-out-expo group-hover:scale-[1.04]"
              />
            </div>
          </div>
        </Link>
        <motion.div aria-hidden="true" style={{ opacity: dim }} className="pointer-events-none absolute inset-0 bg-bg" />
      </motion.article>
    </div>
  );
}
