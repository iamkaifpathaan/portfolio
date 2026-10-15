"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { profile } from "@/lib/content";
import { socialLinks } from "./Footer";
import { EASE, Magnetic, Reveal, useSpotlight } from "./motion";

const topics = ["A website or store", "An app or product", "Hardware / PCB", "Motion graphics", "A job opportunity", "Something else"];

export default function ContactPanel() {
  const [copied, setCopied] = useState(false);
  const [topic, setTopic] = useState(topics[0]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const { ref, onPointerMove } = useSpotlight<HTMLFormElement>();

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  const mailto = () => {
    const subject = encodeURIComponent(`${topic} — from ${name || "your portfolio"}`);
    const body = encodeURIComponent(`${message}\n\n— ${name}`);
    return `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section className="shell pt-16 sm:pt-24">
      <Reveal className="flex flex-col gap-6 border-y border-line py-10 sm:flex-row sm:items-center sm:justify-between">
        <a
          href={`mailto:${profile.email}`}
          className="display link-draw break-all text-[clamp(1.75rem,5.4vw,4.75rem)]"
        >
          {profile.email}
        </a>
        <Magnetic>
          <button
            type="button"
            onClick={copy}
            className="relative inline-flex min-w-[150px] items-center justify-center overflow-hidden rounded-full border border-line-2 px-6 py-3.5 text-[14px] transition-colors hover:border-text"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={copied ? "y" : "n"}
                initial={{ y: 16, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -16, opacity: 0 }}
                transition={{ duration: 0.3, ease: EASE }}
              >
                {copied ? "Copied ✓" : "Copy email"}
              </motion.span>
            </AnimatePresence>
          </button>
        </Magnetic>
      </Reveal>

      <div className="grid gap-12 pt-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="eyebrow mb-6">Other ways in</p>
          </Reveal>
          <ul className="border-t border-line">
            {[
              { label: "Studio enquiries", value: profile.studioEmail, href: `mailto:${profile.studioEmail}` },
              ...socialLinks.map((s) => ({ label: s.label, value: s.href.replace(/^https?:\/\/(www\.)?/, ""), href: s.href })),
            ].map((r, i) => (
              <Reveal as="li" key={r.label} delay={i * 0.05}>
                <a
                  href={r.href}
                  target={r.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-4 border-b border-line py-5"
                >
                  <span className="text-[16px]">{r.label}</span>
                  <span className="flex items-center gap-3 truncate text-[14px] text-muted group-hover:text-text">
                    <span className="truncate">{r.value}</span>
                    <span className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">↗</span>
                  </span>
                </a>
              </Reveal>
            ))}
          </ul>
        </div>

        <Reveal delay={0.1} className="lg:col-span-7">
          <form
            ref={ref}
            onPointerMove={onPointerMove}
            className="spotlight rounded-[28px] border border-line bg-surface/50 p-7 sm:p-10"
            onSubmit={(e) => {
              e.preventDefault();
              window.location.href = mailto();
            }}
          >
            <p className="eyebrow mb-6">Write to me</p>
            <fieldset>
              <legend className="mb-4 text-[15px] text-muted">What’s it about?</legend>
              <div className="flex flex-wrap gap-2">
                {topics.map((t) => (
                  <button
                    type="button"
                    key={t}
                    onClick={() => setTopic(t)}
                    aria-pressed={topic === t}
                    className={`rounded-full border px-4 py-2 text-[14px] transition-colors duration-300 ${
                      topic === t ? "border-text bg-text text-bg" : "border-line-2 text-muted hover:border-text hover:text-text"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </fieldset>
            <label className="mt-8 block">
              <span className="text-[15px] text-muted">Your name</span>
              <input
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-2 w-full border-b border-line-2 bg-transparent py-3 text-[18px] outline-none transition-colors placeholder:text-dim focus:border-accent"
                placeholder="Jane Doe"
                autoComplete="name"
              />
            </label>
            <label className="mt-8 block">
              <span className="text-[15px] text-muted">Message</span>
              <textarea
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="mt-2 w-full resize-none border-b border-line-2 bg-transparent py-3 text-[18px] outline-none transition-colors placeholder:text-dim focus:border-accent"
                placeholder="Tell me about the idea, the timeline and anything I should know."
              />
            </label>
            <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
              <p className="text-[13px] text-dim">Opens your email app with everything filled in.</p>
              <button
                type="submit"
                className="group inline-flex items-center gap-3 rounded-full bg-text px-7 py-4 text-[15px] font-medium text-bg transition-colors duration-300 hover:bg-accent"
              >
                Send message
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </button>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
