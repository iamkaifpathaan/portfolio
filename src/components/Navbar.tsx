"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { navLinks, profile } from "@/lib/data";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Closing the mobile menu triggers a layout-shrinking exit animation at the
  // same instant the browser tries to run the anchor's native hash-scroll —
  // that race can cancel the scroll entirely on some engines. Doing the
  // scroll ourselves, decoupled from the menu-close render, avoids it.
  const goToSection = (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    history.pushState(null, "", `#${id}`);
    setOpen(false);
    // Let the menu-close render commit and paint first, so it can't collide
    // with (and get cancelled by) the smooth-scroll animation we're about
    // to start.
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 [overflow-anchor:none] transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div
          className={`flex items-center justify-between rounded-xl border px-4 py-2.5 backdrop-blur-xl transition-all duration-300 ${
            scrolled
              ? "border-line-hi bg-bg-soft/80 border-glow"
              : "border-transparent bg-bg-soft/30"
          }`}
        >
          <a href="#top" className="flex items-center gap-2.5 group">
            <span className="relative flex h-9 w-9 items-center justify-center rounded-md border border-line-hi bg-panel font-mono text-sm font-bold text-primary group-hover:animate-flicker">
              {profile.initials}
              <span className="absolute -right-1 -top-1 h-1.5 w-1.5 rounded-full bg-primary animate-pulse-slow" />
            </span>
            <span className="hidden sm:block font-mono text-xs tracking-widest text-muted">
              MD_KAIF<span className="text-primary">.</span>ELECTRO
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={goToSection(link.id)}
                className="group flex items-center gap-1.5 rounded-md px-3 py-2 font-mono text-xs tracking-wider text-muted transition-colors hover:text-primary"
              >
                <span className="text-[10px] text-primary-dim group-hover:text-primary">
                  {link.tag}
                </span>
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={profile.resumeUrl}
              download
              className="hidden sm:inline-flex items-center gap-2 rounded-md border border-line-hi bg-panel px-3 py-2 font-mono text-xs text-primary transition-all hover:border-glow hover:bg-panel-hi"
            >
              <Download size={13} />
              RESUME
            </a>
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen((o) => !o)}
              className="flex h-9 w-9 items-center justify-center rounded-md border border-line-hi bg-panel text-primary md:hidden"
            >
              {open ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden md:hidden"
            >
              <div className="mt-2 flex flex-col gap-1 rounded-xl border border-line-hi bg-bg-soft/95 p-3 backdrop-blur-xl">
                {navLinks.map((link) => (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    onClick={goToSection(link.id)}
                    className="flex items-center gap-2 rounded-md px-3 py-2.5 font-mono text-sm text-muted hover:bg-panel hover:text-primary"
                  >
                    <span className="text-[10px] text-primary-dim">{link.tag}</span>
                    {link.label}
                  </a>
                ))}
                <a
                  href={profile.resumeUrl}
                  download
                  onClick={() => setOpen(false)}
                  className="mt-1 flex items-center justify-center gap-2 rounded-md border border-line-hi bg-panel px-3 py-2.5 font-mono text-sm text-primary"
                >
                  <Download size={14} />
                  DOWNLOAD RESUME
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
