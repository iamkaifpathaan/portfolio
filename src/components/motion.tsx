"use client";

import { motion, useInView, useMotionValue, useSpring, useReducedMotion, animate } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode, type ElementType } from "react";

export const EASE = [0.22, 1, 0.36, 1] as const;

/** Fades and lifts its children into place the first time they scroll into view. */
export function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "section" | "li" | "span" | "p" | "article";
}) {
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ duration: 1, ease: EASE, delay }}
    >
      {children}
    </Tag>
  );
}

/**
 * Splits a line of text into words that rise out of a mask, one after another.
 * Wrap words in *asterisks* to set them in the italic serif.
 */
export function SplitText({
  text,
  className,
  wordClassName,
  delay = 0,
  stagger = 0.06,
  onMount = false,
  as = "span",
}: {
  text: string;
  className?: string;
  wordClassName?: string;
  delay?: number;
  stagger?: number;
  onMount?: boolean;
  as?: ElementType;
}) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
  const show = onMount || inView;
  const Tag = as;
  const words = text.split(" ");
  return (
    <Tag ref={ref} className={className} aria-label={text.replace(/\*/g, "")}>
      {words.map((raw, i) => {
        const italic = raw.startsWith("*");
        const word = raw.replace(/\*/g, "");
        return (
          <span key={i} aria-hidden="true" className="inline-block overflow-hidden pb-[0.12em] -mb-[0.12em] align-bottom">
            <motion.span
              className={`inline-block will-change-transform ${italic ? "serif pr-[0.06em]" : ""} ${wordClassName ?? ""}`}
              initial={{ y: "110%", rotate: 4 }}
              animate={show ? { y: "0%", rotate: 0 } : undefined}
              transition={{ duration: 1.1, ease: EASE, delay: delay + i * stagger }}
            >
              {word}
            </motion.span>
            {i < words.length - 1 ? " " : null}
          </span>
        );
      })}
    </Tag>
  );
}

/** Pulls its child gently toward the pointer. */
export function Magnetic({ children, strength = 0.35, className }: { children: ReactNode; strength?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const x = useSpring(0, { stiffness: 180, damping: 16, mass: 0.4 });
  const y = useSpring(0, { stiffness: 180, damping: 16, mass: 0.4 });
  return (
    <motion.div
      ref={ref}
      className={`inline-block ${className ?? ""}`}
      style={{ x, y }}
      onPointerMove={(e) => {
        if (reduce || e.pointerType !== "mouse" || !ref.current) return;
        const r = ref.current.getBoundingClientRect();
        x.set((e.clientX - (r.left + r.width / 2)) * strength);
        y.set((e.clientY - (r.top + r.height / 2)) * strength);
      }}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {children}
    </motion.div>
  );
}

/** Counts up to `to` once it scrolls into view. */
export function Counter({ to, suffix = "", className }: { to: number; suffix?: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -15% 0px" });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, { duration: 1.8, ease: EASE, onUpdate: (v) => setVal(Math.round(v)) });
    return () => controls.stop();
  }, [inView, to]);
  return (
    <span ref={ref} className={className}>
      {val}
      {suffix}
    </span>
  );
}

/** Sets --mx / --my on the element so `.spotlight` can follow the pointer. */
export function useSpotlight<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const onPointerMove = (e: React.PointerEvent<T>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  };
  return { ref, onPointerMove };
}

/** A motion value that follows the pointer across the window (for parallax). */
export function usePointer() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  useEffect(() => {
    const move = (e: PointerEvent) => {
      x.set(e.clientX / window.innerWidth - 0.5);
      y.set(e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, [x, y]);
  return { x, y };
}
