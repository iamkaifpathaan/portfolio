import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { Reveal } from "@/components/motion";
import WorkGrid from "@/components/work/WorkGrid";
import { lab, projects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected work by Md Kaif: Electronica, Renewal Tracker, Royal Compass Travels, Pabloch Tech, Al-Abuzer Perfumes, motion graphics and hardware builds.",
};

export default function WorkPage() {
  return (
    <>
      <PageHeader
        eyebrow={`Work · ${projects.length} projects`}
        title="Selected *work*"
        aside={
          <p className="text-[16px] leading-relaxed text-muted">
            Products I own, sites built for real businesses, circuit boards, and the motion graphics engine behind 98 reels. Each one has
            its own case study.
          </p>
        }
      />
      <WorkGrid projects={projects} />

      <section className="shell pt-32" aria-labelledby="lab-heading">
        <Reveal className="mb-10 grid gap-6 lg:grid-cols-12">
          <h2 id="lab-heading" className="eyebrow lg:col-span-4">
            Lab & experiments
          </h2>
          <p className="max-w-[36rem] text-[16px] text-muted lg:col-span-8">
            Smaller builds, simulations and things still on the bench.
          </p>
        </Reveal>
        <ul className="border-t border-line">
          {lab.map((item, i) => {
            const inner = (
              <>
                <span className="col-span-12 text-[clamp(1.25rem,2vw,1.6rem)] font-medium tracking-[-0.025em] sm:col-span-4">{item.title}</span>
                <span className="col-span-12 text-[15px] text-muted sm:col-span-5">{item.note}</span>
                <span className="col-span-12 text-[13px] text-dim sm:col-span-3 sm:text-right">
                  {item.tag} {item.href ? "↗" : ""}
                </span>
              </>
            );
            return (
              <Reveal as="li" key={item.title} delay={i * 0.05}>
                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="grid grid-cols-12 items-baseline gap-2 border-b border-line py-6 transition-colors duration-300 hover:bg-surface/40 sm:gap-6 sm:px-2"
                  >
                    {inner}
                  </a>
                ) : (
                  <div className="grid grid-cols-12 items-baseline gap-2 border-b border-line py-6 sm:gap-6 sm:px-2">{inner}</div>
                )}
              </Reveal>
            );
          })}
        </ul>
      </section>
    </>
  );
}
