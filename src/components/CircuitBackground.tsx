"use client";

const traces = [
  "M0,80 H220 L260,120 H520 L560,80 H900",
  "M0,220 H160 L200,260 V420 L240,460 H700 L740,500 H1000",
  "M1200,60 H960 L920,100 V300 L880,340 H600",
  "M1200,500 H980 L940,460 H700 L660,420 V240 L620,200 H420",
  "M0,560 H300 L340,600 H620 L660,640 H1000",
  "M1200,640 H900 L860,600 V400 L820,360 H540",
];

const nodes: [number, number][] = [
  [220, 80], [560, 80], [200, 260], [700, 460], [920, 100], [600, 340],
  [660, 420], [420, 200], [340, 600], [660, 640], [860, 600], [540, 360],
];

export default function CircuitBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-bg">
      <div className="absolute inset-0 bg-grid mask-fade-b" />
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.35]"
        viewBox="0 0 1200 700"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        aria-hidden="true"
      >
        {traces.map((d, i) => (
          <path
            key={i}
            d={d}
            stroke={i % 2 === 0 ? "var(--color-primary)" : "var(--color-secondary)"}
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeDasharray="6 10"
            className="animate-dash"
            style={{ animationDuration: `${8 + i * 2}s` }}
          />
        ))}
        {nodes.map(([x, y], i) => (
          <circle
            key={i}
            cx={x}
            cy={y}
            r={3.2}
            fill={i % 3 === 0 ? "var(--color-accent)" : "var(--color-primary)"}
            className="animate-pulse-slow"
            style={{ animationDelay: `${(i % 5) * 0.4}s` }}
          />
        ))}
      </svg>
      <div className="pointer-events-none absolute inset-0 bg-noise" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_transparent_0%,_var(--color-bg)_78%)]" />
    </div>
  );
}
