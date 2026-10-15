import Link from "next/link";

export default function NotFound() {
  return (
    <section className="shell flex min-h-[80svh] flex-col justify-center pt-32">
      <p className="eyebrow mb-8">Error 404</p>
      <h1 className="display text-[clamp(3.5rem,12vw,11rem)]">
        Open <span className="serif text-accent">circuit.</span>
      </h1>
      <p className="mt-8 max-w-[32rem] text-[17px] leading-relaxed text-muted">
        This page doesn’t exist — the trace ends here. Let’s get you back to something that works.
      </p>
      <div className="mt-10 flex flex-wrap gap-4">
        <Link href="/" className="rounded-full bg-text px-7 py-4 text-[15px] font-medium text-bg transition-colors hover:bg-accent">
          Back home
        </Link>
        <Link href="/work" className="rounded-full border border-line-2 px-7 py-4 text-[15px] text-muted transition-colors hover:border-text hover:text-text">
          See the work
        </Link>
      </div>
    </section>
  );
}
