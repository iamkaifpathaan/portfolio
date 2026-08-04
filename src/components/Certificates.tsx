import { Award, Trophy } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { certificates } from "@/lib/data";

export default function Certificates() {
  return (
    <section id="certificates" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          tag="U4"
          title="Certificates &amp; Achievements"
          subtitle="Verified checkpoints along the way."
        />

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {certificates.map((c, i) => (
            <Reveal key={c.id} delay={i * 0.08}>
              <div className="solder-corner h-full rounded-xl border border-line bg-panel/60 p-5 backdrop-blur-sm transition-colors hover:border-line-hi">
                <Award size={18} className="text-primary" />
                <h3 className="mt-3 text-sm font-semibold leading-snug text-text">{c.title}</h3>
                <p className="mt-1.5 text-xs text-muted">{c.issuer}</p>
                <p className="mt-3 font-mono text-[11px] text-secondary">{c.year}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3} className="mt-6">
          <div className="solder-corner flex flex-col items-start gap-3 rounded-xl border border-line-hi bg-panel/60 p-6 backdrop-blur-sm sm:flex-row sm:items-center">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-line-hi bg-bg-soft text-accent">
              <Trophy size={20} />
            </span>
            <p className="text-sm leading-relaxed text-muted">
              Completed the <span className="text-text">IBM IoT Internship</span> (PCB design,
              embedded systems) and a <span className="text-text">Kantar Research Analyst</span>{" "}
              internship on a national election study; delivered a full-stack e-commerce site for
              a client and multiple ESP32 / Tinkercad / KiCad embedded prototypes.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
