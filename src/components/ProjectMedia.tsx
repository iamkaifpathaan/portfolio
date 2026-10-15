import Image from "next/image";
import { ViewTransition } from "react";
import type { Project } from "@/lib/content";
import ProjectArt from "./ProjectArt";

/**
 * A project's cover — screenshot or drawn artwork — filling its parent.
 * The same `cover-<slug>` name on the card and the case-study hero lets the
 * browser morph one into the other when you navigate.
 */
export default function ProjectMedia({
  project,
  sizes,
  priority = false,
  className = "",
  imgClassName = "",
}: {
  project: Project;
  sizes: string;
  priority?: boolean;
  className?: string;
  imgClassName?: string;
}) {
  return (
    <ViewTransition name={`cover-${project.slug}`} share="morph" default="none">
      <div className={`relative h-full w-full overflow-hidden ${className}`}>
        {project.cover ? (
          <Image
            src={project.cover.src}
            alt={project.cover.alt}
            fill
            sizes={sizes}
            priority={priority}
            className={`object-cover object-left-top ${imgClassName}`}
          />
        ) : project.art ? (
          <div className={`absolute inset-0 ${imgClassName}`}>
            <ProjectArt kind={project.art} tint={project.tint} />
          </div>
        ) : null}
      </div>
    </ViewTransition>
  );
}
