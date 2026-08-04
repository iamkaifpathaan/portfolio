"use client";

import { useEffect, useState } from "react";

/** True when the device has a mouse-like pointer that can hover (desktop). */
function queryIsFine() {
  if (typeof window === "undefined") return true;
  return window.matchMedia("(hover: hover) and (pointer: fine)").matches;
}

export function useFinePointer() {
  const [isFine, setIsFine] = useState(queryIsFine);

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    const onChange = (e: MediaQueryListEvent) => setIsFine(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return isFine;
}
