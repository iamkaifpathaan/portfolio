"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { profile } from "@/lib/content";
import { EASE, Magnetic, SplitText, usePointer } from "../motion";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const { x: px, y: py } = usePointer();
  const glowX = useSpring(useTransform(px, [-0.5, 0.5], ["-8%", "8%"]), { stiffness: 40, damping: 20 });
  const glowY = useSpring(useTransform(py, [-0.5, 0.5], ["-6%", "6%"]), { stiffness: 40, damping: 20 });
  const photoY = useTransform(scrollYProgress, [0, 1], ["0%", "-22%"]);

  return (
    <section ref={ref} className="relative flex min-h-[100svh] flex-col overflow-hidden pt-[72px]">
      {/* Ambient light */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{ x: glowX, y: glowY }}
      >
        <div className="absolute -right-[10%] top-[8%] h-[60vmax] w-[60vmax] rounded-full opacity-[0.22] blur-[120px]" style={{ background: "radial-gradient(closest-side, #e8b45a, transparent)" }} />
        <div className="absolute -left-[15%] bottom-[-20%] h-[50vmax] w-[50vmax] rounded-full opacity-[0.12] blur-[120px]" style={{ background: "radial-gradient(closest-side, #818cf8, transparent)" }} />
      </motion.div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.35] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(242,239,233,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(242,239,233,0.05) 1px, transparent 1px)",
          backgroundSize: "88px 88px",
        }}
      />

      <motion.div style={{ y, opacity: fade }} className="shell relative flex flex-1 flex-col justify-between pb-8 pt-8 sm:pt-12">
        <motion.div
          className="flex flex-wrap items-center justify-between gap-4"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: EASE, delay: 0.2 }}
        >
          <p className="eyebrow">Portfolio · {new Date().getFullYear()}</p>
          <p className="inline-flex items-center gap-2.5 rounded-full border border-line bg-surface/60 py-1.5 pl-2.5 pr-4 text-[13px] text-muted backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse-dot" />
            Now — <span className="text-text">{profile.now}</span>
          </p>
        </motion.div>

        <h1 className="display my-10 text-[clamp(3.1rem,8.7vw,9.5rem)] sm:my-12">
          <SplitText text="Engineering" onMount delay={0.35} className="block" />
          <SplitText text="ideas into *products*" onMount delay={0.45} className="block sm:pl-[8vw]" />
          <SplitText text="people *use.*" onMount delay={0.6} className="block" wordClassName="" />
        </h1>

        <div className="grid items-end gap-10 lg:grid-cols-12">
          <motion.p
            className="max-w-[34rem] text-[clamp(1.05rem,1.35vw,1.25rem)] leading-relaxed text-muted lg:col-span-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: EASE, delay: 1 }}
          >
            {profile.intro}
          </motion.p>

          <motion.div
            className="flex flex-wrap items-center gap-4 lg:col-span-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: EASE, delay: 1.1 }}
          >
            <Magnetic>
              <Link
                href="/work"
                className="group inline-flex items-center gap-3 rounded-full bg-text px-7 py-4 text-[15px] font-medium text-bg transition-colors duration-300 hover:bg-accent"
              >
                See my work
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </Magnetic>
            <Link href="/about" className="link-draw px-2 py-4 text-[15px] text-muted hover:text-text">
              More about me
            </Link>
          </motion.div>

          <motion.div
            className="hidden justify-self-end lg:col-span-2 lg:block"
            initial={{ clipPath: "inset(100% 0 0 0)" }}
            animate={{ clipPath: "inset(0% 0 0 0)" }}
            transition={{ duration: 1.4, ease: EASE, delay: 0.9 }}
          >
            <div className="relative h-[230px] w-[184px] overflow-hidden rounded-[22px] border border-line-2">
              <motion.div style={{ y: photoY }} className="absolute inset-[-14%_0]">
                <Image src={profile.photo.src} alt={profile.photo.alt} fill sizes="184px" className="object-cover" priority />
              </motion.div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3 pt-10">
                <p className="text-[12px] font-medium">Md Kaif</p>
                <p className="text-[11px] text-white/60">{profile.location}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="shell relative pb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
      >
        <div className="flex items-center gap-3 text-[12px] text-dim">
          <span className="relative h-8 w-[1px] overflow-hidden bg-line-2">
            <motion.span
              className="absolute left-0 top-0 h-3 w-full bg-text"
              animate={{ y: [-12, 34] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            />
          </span>
          Scroll to explore
        </div>
      </motion.div>
    </section>
  );
}
