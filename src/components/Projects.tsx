import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";
import { profile, projects } from "@/lib/data";
import { GithubGlyph } from "./icons";

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            tag="U2"
            title="Projects Fabricated"
            subtitle="Hardware, firmware and full-stack builds — from schematic to shipped."
          />
          <Reveal delay={0.15}>
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-line-hi bg-panel px-4 py-2.5 font-mono text-xs text-primary transition-colors hover:border-glow"
            >
              <GithubGlyph size={14} />
              ALL REPOSITORIES
            </a>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
