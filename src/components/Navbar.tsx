"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, profile } from "@/lib/content";
import { EASE, Magnetic } from "./motion";
import { getLenis } from "./SmoothScroll";
import LocalTime from "./LocalTime";

export default function Navbar() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(y > 24);
    setHidden(y > 240 && y > prev && !open);
  });

  // Close the menu on navigation, and freeze the page behind it while open.
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- route change closes the menu
    setOpen(false);
  }, [pathname]);
  useEffect(() => {
    const lenis = getLenis();
    if (open) {
      lenis?.stop();
      document.documentElement.style.overflow = "hidden";
    } else {
      lenis?.start();
      document.documentElement.style.overflow = "";
    }
  }, [open]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");

  return (
    <>
      <motion.header
        className="fixed inset-x-0 top-0 z-50"
        style={{ viewTransitionName: "site-header" }}
        animate={{ y: hidden ? "-110%" : "0%" }}
        transition={{ duration: 0.6, ease: EASE }}
      >
        <div
          className={`transition-[background-color,border-color,backdrop-filter] duration-500 ${
            scrolled && !open ? "border-b border-line bg-bg/70 backdrop-blur-xl" : "border-b border-transparent"
          }`}
        >
          <div className="shell flex h-[72px] items-center justify-between gap-6">
            <Link href="/" className="group relative z-10 flex items-center gap-3" aria-label="Md Kaif — home">
              <span className="relative grid h-9 w-9 place-items-center overflow-hidden rounded-full border border-line-2 bg-surface text-[13px] font-semibold tracking-tight">
                <span className="transition-transform duration-500 ease-out-expo group-hover:-translate-y-8">MK</span>
                <span className="serif absolute translate-y-8 text-[17px] text-accent transition-transform duration-500 ease-out-expo group-hover:translate-y-0">
                  k
                </span>
              </span>
              <span className="hidden text-[15px] font-medium tracking-tight sm:block">
                Md Kaif<span className="text-dim">, engineer</span>
              </span>
            </Link>

            <nav className="hidden md:block" aria-label="Main">
              <ul className="flex items-center gap-1 rounded-full border border-line bg-surface/60 p-1 backdrop-blur-xl">
                {nav.map((item) => {
                  const active = isActive(item.href);
                  return (
                    <li key={item.href} className="relative">
                      {active ? (
                        <motion.span
                          layoutId="nav-pill"
                          className="absolute inset-0 rounded-full bg-text"
                          transition={{ type: "spring", stiffness: 380, damping: 32 }}
                        />
                      ) : null}
                      <Link
                        href={item.href}
                        className={`relative block rounded-full px-5 py-2 text-[14px] transition-colors duration-300 ${
                          active ? "text-bg" : "text-muted hover:text-text"
                        }`}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="flex items-center gap-5">
              <span className="hidden font-mono text-[11px] uppercase tracking-[0.16em] text-muted lg:block">
                <LocalTime /> IST
              </span>
              <Magnetic className="hidden md:inline-block">
                <a
                  href={profile.resume}
                  target="_blank"
                  rel="noopener"
                  className="group inline-flex items-center gap-2 rounded-full border border-line-2 px-5 py-2.5 text-[14px] transition-colors duration-300 hover:border-text hover:bg-text hover:text-bg"
                >
                  Résumé
                  <span className="transition-transform duration-300 group-hover:translate-x-0.5">↗</span>
                </a>
              </Magnetic>
              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                className="relative z-10 grid h-11 w-11 place-items-center rounded-full border border-line-2 bg-surface/70 backdrop-blur md:hidden"
                aria-expanded={open}
                aria-controls="mobile-menu"
                aria-label={open ? "Close menu" : "Open menu"}
              >
                <span className="relative block h-3 w-5">
                  <span
                    className={`absolute left-0 h-px w-5 bg-text transition-all duration-500 ease-out-expo ${
                      open ? "top-1.5 rotate-45" : "top-0"
                    }`}
                  />
                  <span
                    className={`absolute left-0 h-px w-5 bg-text transition-all duration-500 ease-out-expo ${
                      open ? "top-1.5 -rotate-45" : "top-3"
                    }`}
                  />
                </span>
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            className="fixed inset-0 z-40 flex flex-col bg-bg md:hidden"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <nav className="shell flex flex-1 flex-col justify-center gap-2 pt-20" aria-label="Mobile">
              {[{ href: "/", label: "Home" }, ...nav].map((item, i) => (
                <div key={item.href} className="overflow-hidden">
                  <motion.div
                    initial={{ y: "100%" }}
                    animate={{ y: "0%" }}
                    exit={{ y: "100%" }}
                    transition={{ duration: 0.8, ease: EASE, delay: 0.15 + i * 0.06 }}
                  >
                    <Link
                      href={item.href}
                      className="flex items-baseline gap-4 py-1 text-[15vw] font-medium leading-[1] tracking-[-0.05em]"
                    >
                      <span className="font-mono text-xs tracking-normal text-dim">0{i + 1}</span>
                      <span className={isActive(item.href) || (item.href === "/" && pathname === "/") ? "serif text-accent" : ""}>
                        {item.label}
                      </span>
                    </Link>
                  </motion.div>
                </div>
              ))}
            </nav>
            <motion.div
              className="shell flex items-end justify-between pb-10 text-sm text-muted"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.5 } }}
              exit={{ opacity: 0 }}
            >
              <a href={`mailto:${profile.email}`} className="link-draw">
                {profile.email}
              </a>
              <a href={profile.resume} target="_blank" rel="noopener" className="link-draw">
                Résumé ↗
              </a>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
