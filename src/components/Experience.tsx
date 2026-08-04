import { Briefcase, MapPin } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          tag="U1"
          title="Experience Trace"
          subtitle="Signal path through internships — from schematic review to field research."
        />

        <div className="relative mt-16">
          <div className="absolute left-[18px] top-2 bottom-2 w-px bg-gradient-to-b from-primary via-line-hi to-transparent sm:left-1/2" />

          <div className="space-y-12">
            {experience.map((exp, i) => (
              <div
                key={exp.id}
                className={`relative flex flex-col gap-4 sm:grid sm:grid-cols-2 sm:gap-10 ${
                  i % 2 === 1 ? "" : ""
                }`}
              >
                <div className="absolute left-[10px] top-2 z-10 flex h-5 w-5 items-center justify-center rounded-full border-2 border-primary bg-bg sm:left-1/2 sm:-translate-x-1/2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-slow" />
                </div>

                <Reveal
                  delay={0.1}
                  className={`pl-10 sm:pl-0 ${
                    i % 2 === 0 ? "sm:col-start-1 sm:text-right sm:pr-10" : "sm:col-start-2 sm:pl-10"
                  }`}
                >
                  <div className="solder-corner rounded-xl border border-line bg-panel/60 p-6 backdrop-blur-sm">
                    <div
                      className={`flex items-center gap-2 font-mono text-xs text-primary ${
                        i % 2 === 0 ? "sm:justify-end" : ""
                      }`}
                    >
                      <span className="rounded bg-bg-soft px-1.5 py-0.5 border border-line-hi">
                        {exp.tag}
                      </span>
                      <span className="text-muted">{exp.period}</span>
                    </div>
                    <h3 className="mt-3 flex items-center gap-2 text-xl font-semibold text-text sm:justify-end">
                      <span className={i % 2 === 0 ? "sm:order-2" : ""}>
                        <Briefcase size={16} className="inline text-secondary mr-1.5 -mt-0.5" />
                        {exp.role}
                      </span>
                    </h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                    <p
                      className={`mt-1 flex items-center gap-1.5 text-xs text-muted ${
                        i % 2 === 0 ? "sm:justify-end" : ""
                      }`}
                    >
                      <MapPin size={12} />
                      {exp.location}
                    </p>

                    <ul
                      className={`mt-4 space-y-2 text-sm leading-relaxed text-muted ${
                        i % 2 === 0 ? "sm:text-right" : ""
                      }`}
                    >
                      {exp.points.map((pt, idx) => (
                        <li key={idx}>{pt}</li>
                      ))}
                    </ul>

                    <div
                      className={`mt-4 flex flex-wrap gap-2 ${
                        i % 2 === 0 ? "sm:justify-end" : ""
                      }`}
                    >
                      {exp.stack.map((s) => (
                        <span
                          key={s}
                          className="rounded-md border border-line-hi bg-bg-soft px-2 py-0.5 font-mono text-[10px] text-secondary"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
