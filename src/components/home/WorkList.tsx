"use client";

import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import type { Project } from "@/lib/content";
import ProjectArt from "../ProjectArt";
import { Reveal } from "../motion";

/** Index-style rows; on desktop a preview of the project floats beside the pointer. */
export default function WorkList({ projects, title = "More projects" }: { projects: Project[]; title?: string }) {
  const [active, setActive] = useState<Project | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 160, damping: 22, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 160, damping: 22, mass: 0.6 });

  return (
    <section className="shell relative pt-28 sm:pt-36" onPointerMove={(e) => {
      x.set(e.clientX);
      y.set(e.clientY);
    }}>
      <Reveal className="mb-10 flex items-end justify-between">
        <h2 className="eyebrow">{title}</h2>
        <span className="eyebrow hidden sm:block">Type · Year</span>
      </Reveal>
      <ul className="border-t border-line" onPointerLeave={() => setActive(null)}>
        {projects.map((p, i) => (
          <Reveal as="li" key={p.slug} delay={i * 0.05}>
            <Link
              href={`/work/${p.slug}`}
              onPointerEnter={(e) => e.pointerType === "mouse" && setActive(p)}
              className="group grid grid-cols-12 items-center gap-4 border-b border-line py-7 transition-colors duration-500 sm:py-9"
            >
              <span className="col-span-2 font-mono text-[12px] text-dim sm:col-span-1">{p.index}</span>
              <span className="col-span-10 sm:col-span-6">
                <span className="display block text-[clamp(1.75rem,3.6vw,3.25rem)] transition-transform duration-700 ease-out-expo group-hover:translate-x-3">
                  {p.title}
                </span>
                <span className="mt-2 block text-[14px] text-muted sm:hidden">{p.kicker}</span>
              </span>
              <span className="col-span-12 hidden text-[14px] text-muted sm:col-span-3 sm:block">{p.kicker}</span>
              <span className="col-span-12 hidden text-right text-[13px] text-muted sm:col-span-2 sm:block">
                {p.type}
                <br />
                <span className="text-dim">{p.year}</span>
              </span>
            </Link>
          </Reveal>
        ))}
      </ul>

      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-30 hidden lg:block"
        style={{ x: sx, y: sy }}
      >
        <AnimatePresence>
          {active ? (
            <motion.div
              key={active.slug}
              className="-translate-x-1/2 -translate-y-[115%] h-[220px] w-[340px] overflow-hidden rounded-2xl border border-line-2 bg-surface shadow-2xl"
              initial={{ opacity: 0, scale: 0.85, rotate: -4 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative h-full w-full">
                {active.cover ? (
                  // eslint-disable-next-line @next/next/no-img-element -- decorative, already-cached preview
                  <img src={active.cover.src} alt="" className="h-full w-full object-cover object-top" />
                ) : active.art ? (
                  <ProjectArt kind={active.art} tint={active.tint} />
                ) : null}
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
