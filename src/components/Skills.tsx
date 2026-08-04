import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { creativeSkills, skillGroups } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          tag="U3"
          title="Component Library"
          subtitle="Technical stack, indexed like a bill of materials — plus the creative tools I bring to the bench."
        />

        <div className="mt-14">
          <div className="mb-5 font-mono text-xs tracking-widest text-muted">
            RESISTOR NETWORK — TECHNICAL SKILLS
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map((group, i) => (
              <Reveal key={group.id} delay={(i % 3) * 0.08}>
                <div className="solder-corner h-full rounded-xl border border-line bg-panel/60 p-5 backdrop-blur-sm transition-colors hover:border-line-hi">
                  <div className="flex items-center gap-2 font-mono text-[11px] tracking-widest">
                    <span className="rounded border border-line-hi bg-bg-soft px-1.5 py-0.5 text-accent">
                      {group.tag}
                    </span>
                    <span className="text-muted">{group.label}</span>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.skills.map((s) => (
                      <span
                        key={s}
                        className="rounded-md border border-line-hi bg-bg-soft px-2.5 py-1 text-xs text-text transition-colors hover:text-primary"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <div className="mb-5 font-mono text-xs tracking-widest text-muted">
            CAPACITOR BANK — CREATIVE &amp; AI SKILLS
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {creativeSkills.map((s, i) => (
              <Reveal key={s.id} delay={i * 0.08}>
                <div className="solder-corner h-full rounded-xl border border-line bg-panel/60 p-5 backdrop-blur-sm transition-colors hover:border-glow">
                  <span className="inline-block rounded border border-line-hi bg-bg-soft px-1.5 py-0.5 font-mono text-[11px] text-secondary">
                    {s.tag}
                  </span>
                  <h3 className="mt-3 font-semibold text-text">{s.label}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
