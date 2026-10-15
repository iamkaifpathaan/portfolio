import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal, SplitText } from "@/components/motion";
import PageHeader from "@/components/PageHeader";
import { certificates, education, experience, hobbies, profile, skills } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Md Kaif — electronics engineer, L1 QA Engineer at OPPO, founder of Pabloch Tech and creator of Electronica. Experience, skills, education and certificates.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="I build the *whole* thing."
        aside={
          <p className="text-[16px] leading-relaxed text-muted">
            Electronics engineer, product builder and teacher — from Greater Noida, working with people everywhere.
          </p>
        }
      />

      {/* Portrait + story */}
      <section className="shell pt-20 sm:pt-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] border border-line">
              <Image src={profile.photo.src} alt={profile.photo.alt} fill priority sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
              <div className="absolute inset-x-4 bottom-4 flex items-center justify-between rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-[13px] backdrop-blur-md">
                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse-dot" /> {profile.now}
                </span>
                <span className="text-white/60">{profile.location}</span>
              </div>
            </div>
          </Reveal>
          <div className="space-y-7 lg:col-span-7">
            <SplitText
              as="p"
              text="I like the whole path — schematic to firmware, API to interface, script to finished video — and I like it shipped."
              stagger={0.02}
              className="block text-[clamp(1.6rem,2.8vw,2.4rem)] leading-[1.15] tracking-[-0.025em]"
            />
            {[
              "I’m studying Electronics & Communication Engineering at Galgotias College, and I spend most of my time building. On the hardware side that means KiCad schematics and multi-layer PCBs, ESP32 firmware and mains-safe designs like the Smart Switch I’m developing now.",
              "On the software side I founded Pabloch Tech, an independent studio that designs and hand-builds websites, online stores and digital products. Under it I built Renewal Tracker — a Windows and Mac app with its own API, reminder emails and website — and Electronica, a free electronics school in 30-second reels, made by a Python engine I wrote.",
              "Today I’m also an L1 QA Engineer at OPPO, where I test releases and devices before they reach people. Being on both sides — building and breaking — has made me a more careful engineer.",
            ].map((t, i) => (
              <Reveal key={i} delay={0.1 + i * 0.08}>
                <p className="text-[17px] leading-[1.75] text-muted">{t}</p>
              </Reveal>
            ))}
            <Reveal delay={0.4} className="flex flex-wrap gap-3 pt-4">
              <a
                href={profile.resume}
                target="_blank"
                rel="noopener"
                className="group inline-flex items-center gap-2 rounded-full bg-text px-6 py-3.5 text-[15px] font-medium text-bg transition-colors duration-300 hover:bg-accent"
              >
                Download résumé <span className="transition-transform duration-300 group-hover:translate-y-0.5">↓</span>
              </a>
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-full border border-line-2 px-6 py-3.5 text-[15px] text-muted transition-colors hover:border-text hover:text-text">
                Get in touch
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="shell pt-28 sm:pt-40" aria-labelledby="exp-heading">
        <div className="mb-14 grid gap-8 lg:grid-cols-12">
          <p className="eyebrow lg:col-span-4">Experience</p>
          <SplitText as="h2" text="Where I’ve *worked.*" className="display block text-[clamp(2.5rem,6vw,5.5rem)] lg:col-span-8" />
        </div>
        <ol className="border-t border-line">
          {experience.map((e, i) => (
            <Reveal as="li" key={e.company} delay={i * 0.06}>
              <div className="group grid gap-6 border-b border-line py-10 transition-colors duration-500 hover:bg-surface/30 lg:grid-cols-12 lg:px-4">
                <div className="lg:col-span-4">
                  <p className="flex items-center gap-3 font-mono text-[12px] text-dim">
                    {e.current ? <span className="h-1.5 w-1.5 rounded-full bg-green-400" /> : null}
                    {e.period}
                  </p>
                  <h3 className="mt-3 text-[clamp(1.6rem,2.6vw,2.25rem)] font-medium tracking-[-0.035em]">{e.company}</h3>
                  <p className="mt-1 text-[15px] text-muted">{e.location}</p>
                </div>
                <div className="lg:col-span-8">
                  <p className="serif text-[clamp(1.4rem,2vw,1.75rem)]">{e.role}</p>
                  <p className="mt-3 max-w-[42rem] text-[16px] leading-relaxed text-muted">{e.body}</p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {e.tags.map((t) => (
                      <li key={t} className="rounded-full border border-line px-3 py-1 text-[12px] text-muted">
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </section>

      {/* Skills */}
      <section className="shell pt-28 sm:pt-40" aria-labelledby="skills-heading">
        <div className="mb-14 grid gap-8 lg:grid-cols-12">
          <p className="eyebrow lg:col-span-4">Toolbox</p>
          <SplitText as="h2" text="What I *work* with." className="display block text-[clamp(2.5rem,6vw,5.5rem)] lg:col-span-8" />
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {skills.map((g, i) => (
            <Reveal key={g.title} delay={(i % 2) * 0.08} className="rounded-[24px] border border-line bg-surface/40 p-8 sm:p-10">
              <div className="mb-8 flex items-center justify-between">
                <h3 className="text-[20px] font-medium tracking-[-0.02em]">{g.title}</h3>
                <span className="font-mono text-[12px] text-dim">0{i + 1}</span>
              </div>
              <ul className="flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <li
                    key={s}
                    className="rounded-full border border-line-2 px-4 py-2 text-[14px] text-muted transition-colors duration-300 hover:border-accent hover:text-text"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Education + certificates */}
      <section className="shell pt-28 sm:pt-40">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <Reveal>
              <p className="eyebrow mb-8">Education</p>
            </Reveal>
            <ul className="border-t border-line">
              {education.map((e, i) => (
                <Reveal as="li" key={e.school} delay={i * 0.06}>
                  <div className="border-b border-line py-6">
                    <div className="flex items-baseline justify-between gap-4">
                      <p className="text-[18px] font-medium tracking-[-0.02em]">{e.degree}</p>
                      <span className="shrink-0 font-mono text-[12px] text-dim">{e.period}</span>
                    </div>
                    <p className="mt-1 text-[15px] text-muted">
                      {e.school} · {e.detail}
                    </p>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
          <div>
            <Reveal>
              <p className="eyebrow mb-8">Certificates</p>
            </Reveal>
            <ul className="border-t border-line">
              {certificates.map((c, i) => (
                <Reveal as="li" key={c.title} delay={i * 0.06}>
                  {c.url ? (
                    <a href={c.url} target="_blank" rel="noopener noreferrer" className="group flex items-start justify-between gap-4 border-b border-line py-6">
                      <span>
                        <span className="block text-[17px] tracking-[-0.015em] group-hover:text-accent">{c.title}</span>
                        <span className="mt-1 block text-[14px] text-muted">
                          {c.issuer} · {c.year}
                        </span>
                      </span>
                      <span className="text-muted transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">↗</span>
                    </a>
                  ) : (
                    <div className="border-b border-line py-6">
                      <p className="text-[17px] tracking-[-0.015em]">{c.title}</p>
                      <p className="mt-1 text-[14px] text-muted">
                        {c.issuer} · {c.year}
                      </p>
                    </div>
                  )}
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Beyond work */}
      <section className="shell pt-28 sm:pt-40">
        <Reveal className="rounded-[28px] border border-line p-8 sm:p-14">
          <p className="eyebrow mb-8">Away from the desk</p>
          <ul className="flex flex-wrap gap-x-10 gap-y-4">
            {hobbies.map((h, i) => (
              <li key={h} className="text-[clamp(1.6rem,3.4vw,3rem)] font-medium tracking-[-0.04em]">
                {i % 2 ? <span className="serif text-accent">{h}</span> : h}
              </li>
            ))}
          </ul>
        </Reveal>
      </section>
    </>
  );
}
