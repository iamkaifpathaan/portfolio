/**
 * Drawn artwork for hardware projects that have no screenshot.
 * Pure SVG + CSS animation, so it stays crisp at any size.
 */
export default function ProjectArt({ kind, tint }: { kind: "pcb" | "energy"; tint: string }) {
  return kind === "pcb" ? <Pcb tint={tint} /> : <Energy tint={tint} />;
}

function Pcb({ tint }: { tint: string }) {
  const traces = [
    "M120 300 H300 V180 H420",
    "M120 340 H330 V420 H470",
    "M120 380 H260 V520 H420",
    "M620 230 H760 V150 H900",
    "M620 300 H820 V260 H960",
    "M620 370 H840 V430 H960",
    "M620 440 H760 V540 H900",
    "M420 180 V120 H620",
    "M470 420 V480 H620",
  ];
  return (
    <svg viewBox="0 0 1080 680" preserveAspectRatio="xMidYMid slice" className="h-full w-full" role="img" aria-label="Illustration of an ESP32 smart switch circuit board with four relays.">
      <defs>
        <pattern id="pcb-grid" width="24" height="24" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="1" fill="#f2efe9" opacity="0.07" />
        </pattern>
        <radialGradient id="pcb-glow" cx="50%" cy="45%" r="60%">
          <stop offset="0" stopColor={tint} stopOpacity="0.22" />
          <stop offset="1" stopColor={tint} stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="1080" height="680" fill="#0c120f" />
      <rect width="1080" height="680" fill="url(#pcb-grid)" />
      <rect width="1080" height="680" fill="url(#pcb-glow)" />
      <rect x="70" y="70" width="940" height="540" rx="28" fill="none" stroke={tint} strokeOpacity="0.25" />
      {traces.map((d, i) => (
        <g key={d}>
          <path d={d} fill="none" stroke={tint} strokeOpacity="0.22" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
          <path
            d={d}
            fill="none"
            stroke={tint}
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray="40 600"
            className="animate-[trace_3.6s_linear_infinite]"
            style={{ animationDelay: `${i * 0.4}s` }}
          />
        </g>
      ))}
      {/* ESP32 module */}
      <rect x="420" y="190" width="200" height="300" rx="14" fill="#141416" stroke="#f2efe9" strokeOpacity="0.2" />
      <rect x="445" y="215" width="150" height="70" rx="6" fill="none" stroke={tint} strokeOpacity="0.5" strokeDasharray="6 6" />
      <rect x="455" y="310" width="130" height="130" rx="8" fill="#1b1b1e" stroke="#f2efe9" strokeOpacity="0.14" />
      <text x="520" y="382" textAnchor="middle" fill="#f2efe9" fillOpacity="0.75" fontFamily="monospace" fontSize="20" letterSpacing="3">
        ESP32
      </text>
      {Array.from({ length: 9 }).map((_, i) => (
        <g key={i}>
          <rect x="408" y={232 + i * 28} width="12" height="8" rx="2" fill={tint} fillOpacity="0.6" />
          <rect x="620" y={232 + i * 28} width="12" height="8" rx="2" fill={tint} fillOpacity="0.6" />
        </g>
      ))}
      {/* Four relays */}
      {[110, 230, 350, 470].map((y, i) => (
        <g key={y}>
          <rect x="900" y={y + 10} width="90" height="80" rx="10" fill="#141416" stroke="#f2efe9" strokeOpacity="0.18" />
          <text x="945" y={y + 56} textAnchor="middle" fill="#f2efe9" fillOpacity="0.6" fontFamily="monospace" fontSize="14">
            K{i + 1}
          </text>
          <circle cx="978" cy={y + 24} r="4" fill={tint} className="animate-[blink_2.4s_ease-in-out_infinite]" style={{ animationDelay: `${i * 0.6}s` }} />
        </g>
      ))}
      {/* Optocouplers + mains block */}
      {[260, 340, 420].map((y) => (
        <rect key={y} x="90" y={y + 20} width="40" height="28" rx="4" fill="#1b1b1e" stroke="#f2efe9" strokeOpacity="0.16" />
      ))}
      <rect x="150" y="120" width="190" height="90" rx="12" fill="#141416" stroke="#fb7185" strokeOpacity="0.35" strokeDasharray="8 6" />
      <text x="245" y="160" textAnchor="middle" fill="#fb7185" fillOpacity="0.7" fontFamily="monospace" fontSize="13" letterSpacing="2">
        230V AC
      </text>
      <text x="245" y="184" textAnchor="middle" fill="#f2efe9" fillOpacity="0.4" fontFamily="monospace" fontSize="11" letterSpacing="2">
        ISOLATED
      </text>
      <text x="90" y="640" fill="#f2efe9" fillOpacity="0.3" fontFamily="monospace" fontSize="12" letterSpacing="3">
        PCB-01 · SMART SWITCH · REV A
      </text>
    </svg>
  );
}

function Energy({ tint }: { tint: string }) {
  return (
    <svg viewBox="0 0 1080 680" preserveAspectRatio="xMidYMid slice" className="h-full w-full" role="img" aria-label="Illustration of piezoelectric floor tiles turning footsteps into energy.">
      <defs>
        <radialGradient id="en-glow" cx="50%" cy="60%" r="60%">
          <stop offset="0" stopColor={tint} stopOpacity="0.2" />
          <stop offset="1" stopColor={tint} stopOpacity="0" />
        </radialGradient>
        <linearGradient id="en-wave" x1="0" x2="1">
          <stop offset="0" stopColor={tint} stopOpacity="0" />
          <stop offset="0.5" stopColor={tint} />
          <stop offset="1" stopColor={tint} stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="1080" height="680" fill="#11100b" />
      <rect width="1080" height="680" fill="url(#en-glow)" />
      {/* Tiles in perspective */}
      {Array.from({ length: 4 }).map((_, i) => (
        <g key={i} className="animate-[press_3.2s_ease-in-out_infinite]" style={{ animationDelay: `${i * 0.8}s`, transformOrigin: `${200 + i * 200}px 470px` }}>
          <path d={`M${120 + i * 200} 500 L${290 + i * 200} 500 L${270 + i * 200} 430 L${140 + i * 200} 430 Z`} fill="#1b1b1e" stroke="#f2efe9" strokeOpacity="0.16" />
          <ellipse cx={205 + i * 200} cy={465} rx="42" ry="12" fill="none" stroke={tint} strokeOpacity="0.7" />
          <ellipse cx={205 + i * 200} cy={465} rx="20" ry="6" fill={tint} fillOpacity="0.35" />
        </g>
      ))}
      {/* Voltage spikes */}
      <path
        d="M80 260 H200 L215 200 L230 300 L245 260 H400 L415 180 L430 320 L445 260 H600 L615 210 L630 300 L645 260 H800 L815 190 L830 320 L845 260 H1000"
        fill="none"
        stroke="url(#en-wave)"
        strokeWidth="3"
        strokeDasharray="1400"
        className="animate-[wave_4s_linear_infinite]"
      />
      {/* LCD readout */}
      <rect x="380" y="70" width="320" height="110" rx="12" fill="#0d1a12" stroke={tint} strokeOpacity="0.4" />
      <text x="405" y="112" fill={tint} fontFamily="monospace" fontSize="20" letterSpacing="2">
        STEPS  1,284
      </text>
      <text x="405" y="150" fill={tint} fillOpacity="0.75" fontFamily="monospace" fontSize="20" letterSpacing="2">
        V 4.82  E 3.1 J
      </text>
      <text x="80" y="620" fill="#f2efe9" fillOpacity="0.3" fontFamily="monospace" fontSize="12" letterSpacing="3">
        PCB-02 · PIEZO HARVESTER · ESP32 MONITOR
      </text>
    </svg>
  );
}
