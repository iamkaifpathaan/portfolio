import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative border-t border-line py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 sm:flex-row sm:px-6">
        <p className="font-mono text-xs text-muted">
          © {new Date().getFullYear()} {profile.name}. Designed &amp; built with Next.js, Three.js
          &amp; Framer Motion.
        </p>
        <a
          href="#top"
          className="font-mono text-xs tracking-widest text-muted transition-colors hover:text-primary"
        >
          BACK TO TOP ↑
        </a>
      </div>
    </footer>
  );
}
