"use client";

import Link from "next/link";
import { nav, profile } from "@/lib/content";
import { GithubGlyph, InstagramGlyph, LinkedinGlyph, XGlyph, YoutubeGlyph } from "./icons";
import { Magnetic, Reveal, SplitText } from "./motion";
import { getLenis } from "./SmoothScroll";
import LocalTime from "./LocalTime";

export const socialLinks = [
  { label: "LinkedIn", href: profile.socials.linkedin, Icon: LinkedinGlyph },
  { label: "GitHub", href: profile.socials.github, Icon: GithubGlyph },
  { label: "YouTube", href: profile.socials.youtube, Icon: YoutubeGlyph },
  { label: "Instagram", href: profile.socials.instagram, Icon: InstagramGlyph },
  { label: "X", href: profile.socials.x, Icon: XGlyph },
];

export default function Footer() {
  return (
    <footer className="relative mt-32 overflow-hidden border-t border-line">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[520px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 blur-[120px]"
        style={{ background: "radial-gradient(closest-side, rgba(232,180,90,0.35), transparent)" }}
      />
      <div className="shell relative pt-24 sm:pt-32">
        <p className="eyebrow mb-8">Have an idea?</p>
        <SplitText
          as="h2"
          text="Let’s build *something* worth using."
          className="display block max-w-[14ch] text-[clamp(3rem,9vw,8.5rem)]"
        />
        <Reveal delay={0.2} className="mt-14 flex flex-col gap-6 sm:flex-row sm:items-center">
          <Magnetic>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 rounded-full bg-text px-8 py-5 text-[15px] font-medium text-bg transition-colors duration-300 hover:bg-accent"
            >
              Start a conversation
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </Magnetic>
          <a href={`mailto:${profile.email}`} className="link-draw text-[clamp(1.1rem,2vw,1.5rem)] text-muted hover:text-text">
            {profile.email}
          </a>
        </Reveal>

        <div className="mt-28 grid gap-12 border-t border-line pt-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="eyebrow mb-5">Pages</p>
            <ul className="space-y-2.5">
              {[{ href: "/", label: "Home" }, ...nav].map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="link-draw text-[15px] text-muted hover:text-text">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow mb-5">Elsewhere</p>
            <ul className="space-y-2.5">
              {socialLinks.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a href={href} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2.5 text-[15px] text-muted hover:text-text">
                    <Icon size={14} className="opacity-60 transition-opacity group-hover:opacity-100" />
                    <span className="link-draw">{label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow mb-5">My products</p>
            <ul className="space-y-2.5 text-[15px]">
              <li>
                <a href="https://projects.pablochtech.com/" target="_blank" rel="noopener" className="link-draw text-muted hover:text-text">
                  Pabloch Tech
                </a>
              </li>
              <li>
                <a href="https://learn.pablochtech.com/" target="_blank" rel="noopener" className="link-draw text-muted hover:text-text">
                  Electronica
                </a>
              </li>
              <li>
                <a href="https://app.pablochtech.com/" target="_blank" rel="noopener" className="link-draw text-muted hover:text-text">
                  Renewal Tracker
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="eyebrow mb-5">Based in</p>
            <p className="text-[15px] text-muted">
              {profile.location}
              <br />
              <span className="font-mono text-[13px]">
                <LocalTime /> IST
              </span>
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4 py-10 text-[13px] text-dim sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Md Kaif. Designed & built by hand.</p>
          <button
            type="button"
            onClick={() => {
              const lenis = getLenis();
              if (lenis) lenis.scrollTo(0, { duration: 1.6 });
              else window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="link-draw self-start text-muted hover:text-text sm:self-auto"
          >
            Back to top ↑
          </button>
        </div>
      </div>

      <div aria-hidden="true" className="pointer-events-none select-none overflow-hidden">
        <p className="display translate-y-[18%] whitespace-nowrap text-center text-[23vw] leading-[0.8] text-surface-2">
          Md Kaif
        </p>
      </div>
    </footer>
  );
}
