import Image from "next/image";
import { GraduationCap, MapPin } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { education, profile } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          tag="U0"
          title="About the Engineer"
          subtitle="From KiCad schematics to shipped firmware — here's the short version."
        />

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-5">
          <Reveal delay={0.1} className="lg:col-span-2">
            <div className="solder-corner rounded-xl border border-line bg-panel/60 p-6 backdrop-blur-sm">
              <div className="solder-corner relative mb-6 aspect-[4/5] overflow-hidden rounded-lg border border-line-hi bg-bg-soft">
                <Image
                  src={profile.photoDesk}
                  alt={profile.name}
                  fill
                  sizes="(max-width: 1024px) 90vw, 360px"
                  className="object-cover"
                  priority
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent opacity-70" />
                <div className="pointer-events-none absolute inset-0 bg-grid opacity-20 mix-blend-overlay" />
                <div className="absolute right-3 top-3 flex items-center gap-1.5 rounded-full border border-line-hi bg-bg/70 px-2 py-1 font-mono text-[10px] tracking-widest text-primary backdrop-blur">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-slow" />
                  ONLINE
                </div>
                <div className="absolute bottom-3 left-3 rounded-md border border-line-hi bg-bg/70 px-2.5 py-1 font-mono text-[11px] text-text backdrop-blur">
                  MD_KAIF<span className="text-primary">.</span>ELECTRO
                </div>
              </div>
              <div className="flex items-center gap-2 font-mono text-xs tracking-widest text-muted">
                <MapPin size={13} className="text-primary" />
                {profile.location}
              </div>
              <p className="mt-4 text-muted leading-relaxed">{profile.summary}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {["Embedded Systems", "PCB Design", "IoT", "Full-Stack", "Creative Tools"].map(
                  (t) => (
                    <span
                      key={t}
                      className="rounded-md border border-line-hi bg-bg-soft px-2.5 py-1 font-mono text-[11px] text-primary"
                    >
                      {t}
                    </span>
                  )
                )}
              </div>
            </div>
          </Reveal>

          <div className="lg:col-span-3">
            <Reveal>
              <div className="mb-5 flex items-center gap-2 font-mono text-xs tracking-widest text-muted">
                <GraduationCap size={14} className="text-primary" />
                EDUCATION LOG
              </div>
            </Reveal>
            <div className="relative space-y-6 border-l border-line-hi pl-6">
              {education.map((ed, i) => (
                <Reveal key={ed.id} delay={0.1 + i * 0.1}>
                  <div className="relative">
                    <span className="absolute -left-[29px] top-1.5 h-3 w-3 rounded-full border-2 border-primary bg-bg" />
                    <div className="flex flex-col gap-1 rounded-lg border border-line bg-panel/50 p-4 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <h3 className="font-semibold text-text">{ed.school}</h3>
                        <p className="text-sm text-muted">{ed.detail}</p>
                        <p className="mt-1 text-sm text-primary">{ed.degree}</p>
                      </div>
                      <div className="shrink-0 text-left sm:text-right">
                        <div className="font-mono text-xs text-secondary">{ed.period}</div>
                        <div className="font-mono text-sm font-semibold text-accent">
                          {ed.meta}
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
