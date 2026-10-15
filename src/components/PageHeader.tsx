"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { EASE, SplitText } from "./motion";

export default function PageHeader({
  eyebrow,
  title,
  aside,
  children,
}: {
  eyebrow: string;
  title: string;
  aside?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <header className="shell relative pt-40 sm:pt-48">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-0 h-[520px] w-[520px] rounded-full opacity-25 blur-[120px]"
        style={{ background: "radial-gradient(closest-side, #e8b45a, transparent)" }}
      />
      <motion.p
        className="eyebrow mb-8"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: EASE, delay: 0.1 }}
      >
        {eyebrow}
      </motion.p>
      <div className="flex flex-wrap items-end justify-between gap-10">
        <SplitText as="h1" text={title} onMount delay={0.15} className="display block max-w-[15ch] text-[clamp(3.25rem,10vw,9.5rem)]" />
        {aside ? (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: EASE, delay: 0.6 }}
            className="max-w-[26rem]"
          >
            {aside}
          </motion.div>
        ) : null}
      </div>
      {children}
    </header>
  );
}
