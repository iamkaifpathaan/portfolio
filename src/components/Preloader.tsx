"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const BOOT_LINES = [
  "INIT KAIF_OS v2.7...",
  "MOUNTING /dev/pcb0 ... OK",
  "LOADING FIRMWARE: esp32_main.bin",
  "CALIBRATING SIGNAL TRACES...",
  "LINKING KICAD LAYERS [1/4] [2/4] [3/4] [4/4]",
  "PORTFOLIO.EXE READY",
];

export default function Preloader() {
  const [visible, setVisible] = useState(true);
  const [lineIndex, setLineIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined" && sessionStorage.getItem("kaif-booted")) {
      const skip = setTimeout(() => setVisible(false), 0);
      return () => clearTimeout(skip);
    }

    const lineTimer = setInterval(() => {
      setLineIndex((i) => Math.min(i + 1, BOOT_LINES.length - 1));
    }, 260);

    const progressTimer = setInterval(() => {
      setProgress((p) => Math.min(p + Math.random() * 14 + 4, 100));
    }, 130);

    const done = setTimeout(() => {
      setVisible(false);
      sessionStorage.setItem("kaif-booted", "1");
    }, 1900);

    return () => {
      clearInterval(lineTimer);
      clearInterval(progressTimer);
      clearTimeout(done);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-bg font-mono text-primary"
          exit={{ opacity: 0, filter: "blur(6px)" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <div className="absolute inset-0 bg-grid opacity-40" />
          <div className="relative z-10 w-[min(420px,86vw)]">
            <div className="mb-6 flex items-center gap-2 text-xs tracking-[0.3em] text-muted">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse-slow" />
              SYSTEM BOOT
            </div>
            <div className="h-28 text-xs sm:text-sm leading-6 space-y-0.5">
              {BOOT_LINES.slice(0, lineIndex + 1).map((line, i) => (
                <div key={i} className="opacity-90">
                  <span className="text-muted">$</span> {line}
                </div>
              ))}
            </div>
            <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-panel border-glow">
              <motion.div
                className="h-full bg-primary"
                style={{ width: `${progress}%` }}
                transition={{ ease: "easeOut" }}
              />
            </div>
            <div className="mt-2 flex justify-between text-[10px] text-muted tracking-widest">
              <span>MD_KAIF.ELECTRO</span>
              <span>{Math.floor(progress)}%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
