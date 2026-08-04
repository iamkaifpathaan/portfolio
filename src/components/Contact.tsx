"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, Phone, Download, ArrowUpRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { profile } from "@/lib/data";
import { GithubGlyph, InstagramGlyph, LinkedinGlyph, XGlyph } from "./icons";

const socialLinks = [
  { id: "github", label: "GitHub", handle: "iamkaifpathaan", href: profile.socials.github, Icon: GithubGlyph },
  { id: "linkedin", label: "LinkedIn", handle: "iamkaifpathaan", href: profile.socials.linkedin, Icon: LinkedinGlyph },
  { id: "instagram", label: "Instagram", handle: "iamkaifbaloch", href: profile.socials.instagram, Icon: InstagramGlyph },
  { id: "twitter", label: "Twitter / X", handle: "iamkaifpathaan", href: profile.socials.twitter, Icon: XGlyph },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="flex justify-center">
          <div className="relative h-20 w-20 shrink-0 rounded-full border-2 border-primary/70 p-1 border-glow">
            <div className="relative h-full w-full overflow-hidden rounded-full bg-bg-soft">
              <Image
                src={profile.photoAvatar}
                alt={profile.name}
                fill
                sizes="80px"
                className="object-cover"
              />
            </div>
            <span className="absolute -right-0.5 -bottom-0.5 flex h-4 w-4 items-center justify-center rounded-full border-2 border-bg bg-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-bg" />
            </span>
          </div>
        </Reveal>

        <div className="mt-4">
          <SectionHeading tag="U6" title="Close the Circuit" align="center" />
        </div>

        <Reveal delay={0.1} className="mt-6 text-center">
          <p className="mx-auto max-w-xl text-muted">
            Have a hardware idea, a video that needs editing, or a prompt-engineering problem to
            solve? My inbox is always live.
          </p>
        </Reveal>

        <Reveal delay={0.2} className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href={profile.socials.email}
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-lg bg-primary px-6 py-3.5 font-mono text-sm font-semibold text-bg"
          >
            <Mail size={16} />
            {profile.email}
            <motion.span
              className="absolute inset-0 -z-10 bg-secondary"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </a>
          <a
            href={`tel:${profile.phone}`}
            className="inline-flex items-center gap-2 rounded-lg border border-line-hi bg-panel px-6 py-3.5 font-mono text-sm text-text transition-colors hover:border-glow"
          >
            <Phone size={16} />
            {profile.phone}
          </a>
          <a
            href={profile.resumeUrl}
            download
            className="inline-flex items-center gap-2 rounded-lg border border-line-hi bg-panel px-6 py-3.5 font-mono text-sm text-text transition-colors hover:border-glow"
          >
            <Download size={16} />
            Resume
          </a>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {socialLinks.map((s, i) => (
            <Reveal key={s.id} delay={0.1 + i * 0.06}>
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group solder-corner flex items-center justify-between rounded-xl border border-line bg-panel/60 p-5 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-glow"
              >
                <span className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-line-hi bg-bg-soft text-primary">
                    <s.Icon size={17} />
                  </span>
                  <span>
                    <span className="block text-sm font-medium text-text">{s.label}</span>
                    <span className="block font-mono text-xs text-muted">@{s.handle}</span>
                  </span>
                </span>
                <ArrowUpRight
                  size={16}
                  className="text-muted opacity-0 transition-opacity group-hover:opacity-100 group-hover:text-primary"
                />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
