import type { LucideIcon } from "lucide-react";
import { CircleDot, CircuitBoard, Plane, Sparkles, Target, Waves } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { hobbies } from "@/lib/data";

const icons: Record<string, LucideIcon> = {
  swimming: Waves,
  snooker: CircleDot,
  cricket: Target,
  circuits: CircuitBoard,
  travelling: Plane,
  vibecoding: Sparkles,
};

export default function Hobbies() {
  return (
    <section id="hobbies" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          tag="U5"
          title="Off the Clock"
          subtitle="What keeps the board powered when I'm away from the bench."
        />

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {hobbies.map((h, i) => {
            const Icon = icons[h.id] ?? Sparkles;
            return (
              <Reveal key={h.id} delay={i * 0.06}>
                <div className="group solder-corner flex flex-col items-center gap-3 rounded-xl border border-line bg-panel/60 p-6 text-center backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-glow">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-line-hi bg-bg-soft text-primary transition-transform group-hover:scale-110 group-hover:text-secondary">
                    <Icon size={20} />
                  </span>
                  <span className="text-xs font-medium text-muted group-hover:text-text">
                    {h.label}
                  </span>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
