"use client";

import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import type { Category, Project } from "@/lib/content";
import ProjectMedia from "../ProjectMedia";
import { EASE, useSpotlight } from "../motion";

const filters: { id: "All" | Category; label: string }[] = [
  { id: "All", label: "All" },
  { id: "Product", label: "Products" },
  { id: "Web", label: "Web" },
  { id: "Hardware", label: "Hardware" },
  { id: "Motion", label: "Motion" },
];

export default function WorkGrid({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<(typeof filters)[number]["id"]>("All");
  const shown = filter === "All" ? projects : projects.filter((p) => p.categories.includes(filter));

  return (
    <section className="shell pt-16 sm:pt-24" aria-label="Projects">
      <LayoutGroup>
        <div className="mb-12 flex flex-wrap items-center justify-between gap-6 border-b border-line pb-6">
          <div role="tablist" aria-label="Filter projects" className="flex flex-wrap gap-1 rounded-full border border-line bg-surface/60 p-1">
            {filters.map((f) => {
              const active = f.id === filter;
              const count = f.id === "All" ? projects.length : projects.filter((p) => p.categories.includes(f.id as Category)).length;
              return (
                <button
                  key={f.id}
                  role="tab"
                  aria-selected={active}
                  onClick={() => setFilter(f.id)}
                  className={`relative rounded-full px-4 py-2 text-[14px] transition-colors duration-300 ${
                    active ? "text-bg" : "text-muted hover:text-text"
                  }`}
                >
                  {active ? (
                    <motion.span
                      layoutId="filter-pill"
                      className="absolute inset-0 rounded-full bg-text"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  ) : null}
                  <span className="relative">
                    {f.label} <sup className="ml-0.5 text-[10px] opacity-60">{count}</sup>
                  </span>
                </button>
              );
            })}
          </div>
          <p className="eyebrow">
            Showing {String(shown.length).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
          </p>
        </div>

        <motion.ul layout className="grid gap-x-6 gap-y-16 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {shown.map((p, i) => (
              <motion.li
                key={p.slug}
                layout
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.7, ease: EASE, delay: (i % 2) * 0.08 }}
                className={i % 2 === 1 ? "md:mt-24" : ""}
              >
                <Card project={p} />
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
      </LayoutGroup>
    </section>
  );
}

function Card({ project }: { project: Project }) {
  const { ref, onPointerMove } = useSpotlight<HTMLAnchorElement>();
  return (
    <Link
      ref={ref}
      onPointerMove={onPointerMove}
      href={`/work/${project.slug}`}
      transitionTypes={["nav-forward"]}
      data-cursor="View"
      className="group block"
      style={{ ["--glow" as string]: project.tint }}
    >
      <div className="spotlight relative aspect-[4/3] overflow-hidden rounded-[22px] border border-line bg-surface">
        <div
          className="absolute inset-0 opacity-50 transition-opacity duration-700 group-hover:opacity-100"
          style={{ background: `radial-gradient(90% 80% at 50% 0%, ${project.tint}30, transparent 70%)` }}
        />
        <div className="absolute inset-x-6 bottom-0 top-8 overflow-hidden rounded-t-[14px] border border-b-0 border-line-2 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.7)] transition-transform duration-[1.1s] ease-out-expo group-hover:-translate-y-2 sm:inset-x-10 sm:top-10">
          <ProjectMedia project={project} sizes="(min-width: 768px) 45vw, 100vw" imgClassName="transition-transform duration-[1.4s] ease-out-expo group-hover:scale-[1.03]" />
        </div>
        <span className="absolute left-5 top-4 font-mono text-[11px] text-dim sm:left-6">{project.index}</span>
        <span className="absolute right-5 top-3 rounded-full border border-line-2 bg-bg/60 px-2.5 py-0.5 text-[11px] text-muted backdrop-blur sm:right-6">
          {project.status}
        </span>
      </div>
      <div className="mt-6 flex items-start justify-between gap-6">
        <div>
          <h2 className="text-[clamp(1.6rem,2.6vw,2.25rem)] font-medium tracking-[-0.035em]">{project.title}</h2>
          <p className="mt-2 max-w-[34rem] text-[15px] leading-relaxed text-muted">{project.kicker}</p>
        </div>
        <span className="mt-2 grid h-10 w-10 shrink-0 place-items-center rounded-full border border-line-2 transition-all duration-500 group-hover:rotate-[-45deg] group-hover:border-text group-hover:bg-text group-hover:text-bg">
          →
        </span>
      </div>
      <p className="mt-4 text-[13px] text-dim">
        {project.type} · {project.year}
      </p>
    </Link>
  );
}
