import Reveal from "./Reveal";

export default function SectionHeading({
  tag,
  title,
  subtitle,
  align = "left",
}: {
  tag: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}) {
  return (
    <Reveal className={align === "center" ? "text-center" : "text-left"}>
      <div
        className={`flex items-center gap-3 text-xs tracking-[0.3em] text-primary font-mono ${
          align === "center" ? "justify-center" : ""
        }`}
      >
        <span className="border-glow rounded-sm bg-panel px-2 py-1 text-primary">{tag}</span>
        <span className="h-px flex-1 max-w-16 bg-line-hi" />
        <span className="text-muted">SECTION</span>
      </div>
      <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-text text-glow">
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-3 max-w-2xl text-muted ${align === "center" ? "mx-auto" : ""}`}>
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
