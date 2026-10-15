import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal, SplitText } from "@/components/motion";
import ProjectArt from "@/components/ProjectArt";
import CaseHero from "@/components/work/CaseHero";
import { getProject, nextProject, projects, reels } from "@/lib/content";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) return {};
  return {
    title: p.title,
    description: `${p.kicker} ${p.summary}`,
    openGraph: p.cover ? { images: [{ url: p.cover.src, width: p.cover.w, height: p.cover.h, alt: p.cover.alt }] } : undefined,
  };
}

export default async function CaseStudy({ params }: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const next = nextProject(slug);
  const [first, ...restSections] = project.sections;
  const [g0, ...gRest] = project.gallery;

  return (
    <article style={{ ["--glow" as string]: project.tint }}>
      <CaseHero project={project} />

      {/* Overview */}
      <section className="shell pt-24 sm:pt-36">
        <div className="grid gap-10 lg:grid-cols-12">
          <p className="eyebrow lg:col-span-4">Overview</p>
          <div className="lg:col-span-8">
            <SplitText as="p" text={project.summary} stagger={0.018} className="block text-[clamp(1.5rem,2.8vw,2.5rem)] leading-[1.18] tracking-[-0.025em]" />
          </div>
        </div>
        <div className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-[22px] border border-line bg-line lg:grid-cols-4">
          {project.highlights.map((h, i) => (
            <Reveal key={h.label} delay={i * 0.07} className="bg-bg p-6 sm:p-8">
              <p className="display text-[clamp(2.25rem,4.5vw,3.75rem)]" style={{ color: i === 0 ? project.tint : undefined }}>
                {h.value}
              </p>
              <p className="mt-2 text-[14px] text-muted">{h.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {first ? <Chapter n={1} title={first.title} body={first.body} /> : null}

      {g0 ? <Figure img={g0} /> : null}

      {project.phone ? (
        <section className="shell pt-24 sm:pt-36">
          <div className="grid items-center gap-12 overflow-hidden rounded-[28px] border border-line bg-surface/50 p-8 sm:p-14 lg:grid-cols-12">
            <Reveal className="lg:col-span-6">
              <p className="eyebrow mb-6">On the phone</p>
              <p className="text-[clamp(1.4rem,2.4vw,2rem)] leading-snug tracking-[-0.02em]">
                Designed mobile-first, so it feels native in the hand — not a shrunk-down desktop page.
              </p>
            </Reveal>
            <Reveal delay={0.15} className="flex justify-center lg:col-span-6">
              <div className="relative w-[min(72vw,300px)] rounded-[44px] border border-line-2 bg-bg p-3 shadow-[0_50px_100px_-30px_rgba(0,0,0,0.9)]">
                <div className="absolute left-1/2 top-5 z-10 h-6 w-24 -translate-x-1/2 rounded-full bg-black" />
                <div className="relative overflow-hidden rounded-[34px]" style={{ aspectRatio: `${project.phone.w} / ${project.phone.h}` }}>
                  <Image src={project.phone.src} alt={project.phone.alt} fill sizes="300px" className="object-cover object-top" />
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      ) : null}

      {restSections.map((s, i) => (
        <div key={s.title}>
          <Chapter n={i + 2} title={s.title} body={s.body} />
          {gRest[i] ? <Figure img={gRest[i]} /> : null}
        </div>
      ))}
      {gRest.length > restSections.length ? (
        <section className="shell grid gap-6 pt-16 md:grid-cols-2">
          {gRest.slice(restSections.length).map((g, i) => (
            <Reveal key={g.src} delay={i * 0.08}>
              <div className="relative overflow-hidden rounded-[20px] border border-line" style={{ aspectRatio: `${g.w} / ${g.h}` }}>
                <Image src={g.src} alt={g.alt} fill sizes="(min-width: 768px) 45vw, 100vw" className="object-cover object-top" />
              </div>
            </Reveal>
          ))}
        </section>
      ) : null}

      {project.showreel ? (
        <section className="shell pt-24 sm:pt-36">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <p className="eyebrow mb-6">Showreel</p>
              <p className="text-[clamp(1.4rem,2.4vw,2rem)] leading-snug tracking-[-0.02em]">
                Twelve seconds cut from real reels: a quiz countdown, sand becoming a chip, a touchscreen grid, a transformer, a bulb colour slider and binary lighting up.
              </p>
            </Reveal>
            <Reveal delay={0.15} className="flex justify-center lg:col-span-7">
              <div className="relative w-[min(70vw,340px)] overflow-hidden rounded-[28px] border border-line-2 shadow-[0_50px_100px_-30px_rgba(0,0,0,0.9)]">
                <video
                  className="block aspect-[9/16] w-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  poster="/video/showreel-poster.webp"
                  aria-label="A 12-second silent showreel of motion graphics reels."
                >
                  <source src="/video/showreel.webm" type="video/webm" />
                  <source src="/video/showreel.mp4" type="video/mp4" />
                </video>
              </div>
            </Reveal>
          </div>
        </section>
      ) : null}

      {project.reels ? (
        <section className="shell pt-24 sm:pt-36" aria-label="Recent reels">
          <Reveal className="mb-10 flex items-end justify-between">
            <p className="eyebrow">Recent reels</p>
            <a href="https://instagram.com/iam.yourprofessor" target="_blank" rel="noopener" className="link-draw text-[14px] text-muted hover:text-text">
              @iam.yourprofessor ↗
            </a>
          </Reveal>
          <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {reels.slice(0, 12).map((r, i) => (
              <Reveal as="li" key={r.ep} delay={(i % 6) * 0.05} className="group">
                <div className="relative aspect-[9/16] overflow-hidden rounded-[16px] border border-line">
                  <Image src={`/work/reels/ep${r.ep}.webp`} alt={`EP.${r.ep}: ${r.title}`} fill sizes="(min-width: 1024px) 16vw, 45vw" className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-105" />
                </div>
                <p className="mt-2 text-[12px] text-muted">{r.title}</p>
              </Reveal>
            ))}
          </ul>
        </section>
      ) : null}

      {/* Features & stack */}
      <section className="shell pt-24 sm:pt-36">
        <div className="grid gap-12 rounded-[28px] border border-line p-8 sm:p-12 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow mb-6">What’s inside</p>
            <ul className="grid gap-x-6 sm:grid-cols-2">
              {project.features.map((f) => (
                <li key={f} className="flex items-center gap-3 border-b border-line py-3.5 text-[15px]">
                  <span className="h-1.5 w-1.5 rounded-full" style={{ background: project.tint }} />
                  {f}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="eyebrow mb-6">Built with</p>
            <ul className="flex flex-wrap gap-2">
              {project.stack.map((s) => (
                <li key={s} className="rounded-full border border-line-2 px-4 py-2 text-[14px] text-muted">
                  {s}
                </li>
              ))}
            </ul>
            {project.note ? <p className="mt-10 border-l-2 border-accent/60 pl-4 text-[14px] leading-relaxed text-muted">{project.note}</p> : null}
          </Reveal>
        </div>
      </section>

      {/* Next project */}
      <section className="shell pt-28 sm:pt-40" aria-label="Next project">
        <Link
          href={`/work/${next.slug}`}
          transitionTypes={["nav-forward"]}
          data-cursor="Next"
          className="group relative block overflow-hidden rounded-[28px] border border-line bg-surface"
        >
          <div className="absolute inset-0 opacity-30 transition-opacity duration-700 group-hover:opacity-60">
            {next.cover ? (
              <Image src={next.cover.src} alt="" fill sizes="100vw" className="object-cover object-top blur-[2px] transition-transform duration-[1.6s] ease-out-expo group-hover:scale-105" />
            ) : next.art ? (
              <ProjectArt kind={next.art} tint={next.tint} />
            ) : null}
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/70 to-bg/20" />
          <div className="relative flex min-h-[48vh] flex-col justify-end p-8 sm:p-14">
            <p className="eyebrow mb-4">Next project</p>
            <p className="display text-[clamp(2.75rem,8vw,7.5rem)] transition-transform duration-700 ease-out-expo group-hover:translate-x-4">
              {next.title} <span className="serif inline-block text-accent transition-transform duration-700 group-hover:translate-x-3">→</span>
            </p>
            <p className="mt-4 max-w-[40rem] text-[16px] text-muted">{next.kicker}</p>
          </div>
        </Link>
      </section>
    </article>
  );
}

function Chapter({ n, title, body }: { n: number; title: string; body: string[] }) {
  return (
    <section className="shell pt-24 sm:pt-36">
      <div className="grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <p className="font-mono text-[12px] text-accent">{String(n).padStart(2, "0")}</p>
            <SplitText as="h2" text={title} className="mt-4 block text-[clamp(1.75rem,3vw,2.5rem)] font-medium leading-[1.05] tracking-[-0.035em]" />
          </div>
        </div>
        <div className="space-y-6 lg:col-span-7 lg:col-start-6">
          {body.map((para, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <p className="text-[clamp(1.05rem,1.4vw,1.2rem)] leading-[1.75] text-muted first-letter:text-text">{para}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Figure({ img }: { img: { src: string; w: number; h: number; alt: string } }) {
  return (
    <figure className="shell pt-20 sm:pt-28">
      <Reveal y={50}>
        <div className="relative overflow-hidden rounded-[24px] border border-line-2 bg-surface" style={{ aspectRatio: `${img.w} / ${img.h}` }}>
          <Image src={img.src} alt={img.alt} fill sizes="(min-width: 1440px) 1340px, 100vw" className="object-cover object-top" />
        </div>
        <figcaption className="mt-4 text-[13px] text-dim">{img.alt}</figcaption>
      </Reveal>
    </figure>
  );
}
