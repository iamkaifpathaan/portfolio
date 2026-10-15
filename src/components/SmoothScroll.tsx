"use client";

import Lenis from "lenis";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

let instance: Lenis | null = null;

/** The page-wide Lenis instance (null on reduced motion or before mount). */
export const getLenis = () => instance;

export default function SmoothScroll() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({ lerp: 0.1, wheelMultiplier: 1, autoRaf: true, anchors: true });
    instance = lenis;
    return () => {
      lenis.destroy();
      instance = null;
    };
  }, []);

  useEffect(() => {
    instance?.scrollTo(0, { immediate: true, force: true });
  }, [pathname]);

  return null;
}
