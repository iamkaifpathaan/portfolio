"use client";

import { useRef } from "react";
import { motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, Users } from "lucide-react";
import type { Project } from "@/lib/data";
import { GithubGlyph } from "./icons";
import { useFinePointer } from "@/lib/useFinePointer";

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isFinePointer = useFinePointer();

  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const mouseRotateX = useSpring(useTransform(my, [0, 1], [8, -8]), {
    stiffness: 200,
    damping: 20,
  });
  const mouseRotateY = useSpring(useTransform(mx, [0, 1], [-8, 8]), {
    stiffness: 200,
    damping: 20,
  });
  const glareX = useTransform(mx, [0, 1], ["0%", "100%"]);
  const glareY = useTransform(my, [0, 1], ["0%", "100%"]);

  // No cursor on touch devices — drive the same 3D tilt from scroll position instead.
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scrollRotateX = useSpring(useTransform(scrollYProgress, [0, 0.5, 1], [7, 0, -7]), {
    stiffness: 60,
    damping: 20,
  });
  const scrollRotateY = useSpring(useTransform(scrollYProgress, [0, 0.5, 1], [-5, 0, 5]), {
    stiffness: 60,
    damping: 20,
  });

  const rotateX = isFinePointer ? mouseRotateX : scrollRotateX;
  const rotateY = isFinePointer ? mouseRotateY : scrollRotateY;

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set((e.clientX - rect.left) / rect.width);
    my.set((e.clientY - rect.top) / rect.height);
  };

  const reset = () => {
    mx.set(0.5);
    my.set(0.5);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={isFinePointer ? handleMove : undefined}
      onMouseLeave={isFinePointer ? reset : undefined}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -60px 0px" }}
      transition={{ duration: 0.55, delay: (index % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      className={`group solder-corner relative overflow-hidden rounded-xl border border-line bg-panel/70 p-6 backdrop-blur-sm transition-colors hover:border-line-hi ${
        project.featured ? "sm:col-span-2" : ""
      }`}
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(340px circle at ${glareX} ${glareY}, color-mix(in srgb, var(--color-primary) 14%, transparent), transparent 70%)`,
        }}
      />

      <div style={{ transform: "translateZ(30px)" }} className="relative">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-2 font-mono text-[11px] tracking-widest text-muted">
            <span className="rounded border border-line-hi bg-bg-soft px-1.5 py-0.5 text-primary">
              {project.designator}
            </span>
            <span
              className={`rounded-full px-2 py-0.5 ${
                project.status === "Ongoing"
                  ? "bg-accent/10 text-accent"
                  : "bg-primary/10 text-primary"
              }`}
            >
              {project.status === "Ongoing" ? "● IN PROGRESS" : "✓ SHIPPED"}
            </span>
          </div>
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${project.name} repository on GitHub`}
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-line-hi bg-bg-soft text-muted transition-colors hover:text-primary"
          >
            <GithubGlyph size={15} />
          </a>
        </div>

        <h3 className="mt-4 flex items-center gap-1.5 text-xl font-semibold text-text">
          {project.name}
          <ArrowUpRight
            size={16}
            className="text-primary opacity-0 transition-opacity group-hover:opacity-100"
          />
        </h3>
        <p className="mt-1 text-sm text-secondary">{project.tagline}</p>

        <div className="mt-3 flex flex-wrap items-center gap-3 font-mono text-[11px] text-muted">
          <span>{project.period}</span>
          <span className="text-line-hi">·</span>
          <span className="flex items-center gap-1">
            <Users size={11} />
            {project.team}
          </span>
        </div>

        <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted">
          {project.description.map((d, i) => (
            <li key={i} className="flex gap-2">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
              {d}
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((s) => (
            <span
              key={s}
              className="rounded-md border border-line-hi bg-bg-soft px-2 py-0.5 font-mono text-[10px] text-primary"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
