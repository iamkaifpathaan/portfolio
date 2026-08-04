"use client";

import { useEffect, useState } from "react";

export default function RoleCycler({ roles }: { roles: string[] }) {
  const [index, setIndex] = useState(0);
  const [display, setDisplay] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[index];
    const speed = deleting ? 35 : 60;
    const holdAtFull = !deleting && display === current;
    const holdAtEmpty = deleting && display === "";

    if (holdAtFull) {
      const t = setTimeout(() => setDeleting(true), 1400);
      return () => clearTimeout(t);
    }
    if (holdAtEmpty) {
      const t = setTimeout(() => {
        setDeleting(false);
        setIndex((i) => (i + 1) % roles.length);
      }, 0);
      return () => clearTimeout(t);
    }

    const t = setTimeout(() => {
      setDisplay((d) =>
        deleting ? current.slice(0, d.length - 1) : current.slice(0, d.length + 1)
      );
    }, speed);
    return () => clearTimeout(t);
  }, [display, deleting, index, roles]);

  return (
    <span className="font-mono text-secondary text-glow-cyan">
      {display}
      <span className="animate-blink text-secondary">_</span>
    </span>
  );
}
