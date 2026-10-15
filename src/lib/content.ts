/**
 * Every word and fact on the site lives here. Edit this file to update the
 * portfolio — components only lay it out.
 *
 * Sources: the project repos themselves (Electronica, Renewal Tracker app +
 * website, Pabloch Tech, Royal Compass Travels) and the GitHub profile repo.
 */

export type Img = { src: string; w: number; h: number; alt: string };
export type LinkItem = { label: string; href: string };
export type Category = "Product" | "Web" | "Hardware" | "Motion";

export type Project = {
  slug: string;
  index: string;
  title: string;
  kicker: string;
  summary: string;
  year: string;
  role: string;
  type: string;
  status: string;
  categories: Category[];
  /** Tint used for glows and accents on this project's card + page. */
  tint: string;
  cover?: Img;
  /** Generated artwork used when there is no screenshot (hardware builds). */
  art?: "pcb" | "energy";
  gallery: Img[];
  phone?: Img;
  reels?: boolean;
  showreel?: boolean;
  links: LinkItem[];
  stack: string[];
  highlights: { value: string; label: string }[];
  sections: { title: string; body: string[] }[];
  features: string[];
  note?: string;
  featured: boolean;
};

const img = (src: string, w: number, h: number, alt: string): Img => ({ src, w, h, alt });

export const profile = {
  name: "Md Kaif",
  first: "Kaif",
  handle: "iamkaifpathaan",
  role: "Electronics engineer & product builder",
  now: "L1 QA Engineer at OPPO",
  location: "Greater Noida, India",
  email: "p0409athan@gmail.com",
  studioEmail: "hello@pablochtech.com",
  resume: "/Md_Kaif_Resume.pdf",
  photo: img("/profile-desk.jpg", 900, 1125, "Md Kaif at his desk, in a dark suit, with a circuit sketch on the wall behind him."),
  avatar: img("/profile-avatar.jpg", 480, 480, "Portrait of Md Kaif."),
  intro:
    "I’m Md Kaif — an electronics engineer who builds the whole thing: circuit boards and firmware, desktop and web apps, and the videos that explain them. I run Pabloch Tech, my independent studio, and teach electronics to beginners through Electronica.",
  site: "https://kaifportfolio.pablochtech.com",
  socials: {
    github: "https://github.com/iamkaifpathaan",
    linkedin: "https://www.linkedin.com/in/iamkaifpathaan/",
    instagram: "https://instagram.com/iamkaifbaloch",
    x: "https://twitter.com/iamkaifpathaan",
    youtube: "https://www.youtube.com/@iamkaifpathaan",
  },
};

export const disciplines = [
  "PCB Design",
  "ESP32 Firmware",
  "Desktop Apps",
  "Full-Stack Web",
  "Motion Graphics",
  "Quality Assurance",
  "Embedded C",
  "Product Design",
];

export const stats = [
  { value: 98, suffix: "", label: "Electronics reels published" },
  { value: 9, suffix: "", label: "Websites & apps built" },
  { value: 20, suffix: "", label: "Course series running" },
  { value: 3, suffix: "", label: "Companies worked with" },
];

export const services = [
  {
    no: "01",
    title: "Hardware & Embedded",
    body: "Schematics and multi-layer PCBs in KiCad, ESP32 and Arduino firmware, mains-safe isolation — from breadboard to a board you can install.",
    items: ["KiCad", "ESP32", "Embedded C", "AC-DC isolation"],
  },
  {
    no: "02",
    title: "Software & Web",
    body: "Desktop apps, APIs and fast, hand-built websites — designed, engineered, deployed and kept running, with tests and release discipline.",
    items: ["TypeScript", "React / Next.js", "Electron", "Node.js + MySQL"],
  },
  {
    no: "03",
    title: "Motion & Content",
    body: "Code-driven motion graphics: every frame drawn, every sound synthesised. 98 reels so far, and a website that builds itself from them.",
    items: ["Python + Skia", "Sound design", "Voiceover", "FFmpeg"],
  },
];

export const projects: Project[] = [
  {
    slug: "electronica",
    index: "01",
    title: "Electronica",
    kicker: "A free electronics school in 30-second reels — and the engine that makes them.",
    summary:
      "98 code-generated reels across 20 series, a Python engine that draws every frame and synthesises every sound, and a learning website that builds itself from the same repo.",
    year: "2026",
    role: "Creator · Engineer · Designer",
    type: "Own product",
    status: "Live · growing weekly",
    categories: ["Product", "Motion", "Web"],
    tint: "#5eead4",
    cover: img(
      "/work/electronica-desktop-1920.webp",
      1920,
      1200,
      "Electronica homepage: “Learn electronics in 30-second lessons” over a glowing oscilloscope trace.",
    ),
    phone: img(
      "/work/electronica-mobile-780.webp",
      780,
      1688,
      "Electronica’s resistor colour-code lab on a phone, reading 1 kΩ ±5%.",
    ),
    gallery: [
      img("/work/motion-reels-1200.webp", 1200, 750, "A row of Electronica reel covers in their dark neon style."),
    ],
    reels: true,
    links: [
      { label: "learn.pablochtech.com", href: "https://learn.pablochtech.com/" },
      { label: "Instagram · @iam.yourprofessor", href: "https://instagram.com/iam.yourprofessor" },
      { label: "YouTube Shorts", href: "https://www.youtube.com/@iamkaifpathaan" },
    ],
    stack: ["Python", "Skia", "NumPy / SciPy", "FFmpeg", "Kokoro TTS", "GitHub Actions", "Hostinger"],
    highlights: [
      { value: "98", label: "Reels published" },
      { value: "20", label: "Series" },
      { value: "211", label: "Lessons planned" },
      { value: "0", label: "Stock clips used" },
    ],
    sections: [
      {
        title: "One idea, thirty seconds",
        body: [
          "Electronics is usually taught slowly and assumes you already know the words. Electronica teaches one idea per reel, in under thirty seconds, for total beginners anywhere in the world — from a first blinking LED to Embedded C registers, home wiring, buying guides, myths and quizzes.",
          "It publishes on Instagram as @iam.yourprofessor and on YouTube Shorts, with a planned course of 211 lessons in 20 series, and follower requests jump the queue.",
        ],
      },
      {
        title: "A reel engine written in Python",
        body: [
          "There is no editing timeline. Every frame is drawn in code with Skia — kinetic type, neon circuit diagrams, animated components — and every sound is synthesised: original music, effects and a voiceover, mixed to −14 LUFS for streaming.",
          "Each kind of reel has its own visual theme — cyan lessons, amber “Why does…?”, red-and-green Myth or Fact, violet quizzes, teal buying guides, blueprint tech stories — all sharing one brand system.",
        ],
      },
      {
        title: "A website that builds itself",
        body: [
          "learn.pablochtech.com is generated from the same repository. Each new reel becomes a lesson page sorted into its series; a GitHub Action matches it to its YouTube Short every three hours, rebuilds the site and deploys it to Hostinger.",
          "Around the lessons sit a hands-on component lab, a daily quiz drawn from a question bank, and a small arcade of electronics games.",
        ],
      },
    ],
    features: [
      "1080×1920 reels at 30 fps",
      "A visual theme per content type",
      "Synthesised music & voiceover",
      "Lesson pages built from the repo",
      "Auto-linked YouTube Shorts",
      "Component lab, quizzes & games",
    ],
    featured: true,
  },
  {
    slug: "renewal-tracker",
    index: "02",
    title: "Renewal Tracker",
    kicker: "A calm desktop app that remembers every renewal, so you don’t have to.",
    summary:
      "A Windows and Mac app, the API behind it, the daily reminder emails and the website — designed and built end to end.",
    year: "2026",
    role: "Product · Design · Full-stack",
    type: "Own product",
    status: "Live · v1.4.0",
    categories: ["Product", "Web"],
    tint: "#818cf8",
    cover: img(
      "/work/rt-dashboard-dark-2400.webp",
      2400,
      1500,
      "Renewal Tracker dashboard in dark mode: renewals sorted by due date, monthly spend and a Usage & Cost panel.",
    ),
    gallery: [
      img("/work/rt-site.webp", 1920, 1200, "The Renewal Tracker website: “Never forget what you’re paying for.”"),
      img("/work/rt-calendar-dark-2000.webp", 2000, 1288, "Renewal Tracker calendar view with renewals marked on each day."),
      img("/work/rt-add-item-dark-2000.webp", 2000, 1390, "Adding a renewal: name, category, amount, due date and repeat."),
      img("/work/rt-games-dark-2000.webp", 2000, 1288, "The built-in retro games rail: Tetris, Snake and 2048."),
      img("/work/rt-dashboard-light-2400.webp", 2400, 1500, "Renewal Tracker dashboard in light mode."),
    ],
    links: [
      { label: "app.pablochtech.com", href: "https://app.pablochtech.com/" },
      { label: "Download for Windows & Mac", href: "https://app.pablochtech.com/downloads.html" },
    ],
    stack: ["Electron", "JavaScript", "Node.js", "Express", "MySQL", "JWT", "Nodemailer", "GitHub Actions"],
    highlights: [
      { value: "3", label: "Parts: app, API, website" },
      { value: "2", label: "Platforms: Windows & Mac" },
      { value: "8am", label: "Daily reminder email" },
      { value: "1.4", label: "Current version" },
    ],
    sections: [
      {
        title: "The problem",
        body: [
          "Subscriptions, insurance, MOT and car tax, visas, warranties — every renewal lives in a different inbox or calendar, and missing one means a fine, a double charge or being locked out. Renewal Tracker puts all of them in one calm list and warns you before each is due.",
        ],
      },
      {
        title: "The desktop app",
        body: [
          "An Electron app for Windows and Mac. The dashboard sorts everything by urgency and colours what is overdue or due soon, with search, category filters and monthly and yearly spend per currency. Recurring items are marked as renewed and roll forward; one-off items move to History.",
          "A calendar view, a Ctrl+K command palette, tray notifications that keep working when the window is closed, fully designed light and dark themes, automatic background updates — and, because life admin is dull, a rail of retro games.",
        ],
      },
      {
        title: "The API and the reminders",
        body: [
          "A Node.js and Express API with MySQL, live at api.pablochtech.com: JWT sessions, bcrypt-hashed passwords, rate limiting and security headers, and one-time codes by email for verification and password resets.",
          "The host has no cron jobs, so a scheduled GitHub Actions workflow calls a protected endpoint every morning, and the API emails anyone with something coming up — even when their computer is off.",
        ],
      },
      {
        title: "The website",
        body: [
          "app.pablochtech.com carries downloads, pricing, an FAQ, a blog of UK renewal guides, the legal pages and a self-service, code-verified account deletion flow — all static, SEO-tuned and versioned so caches never serve stale styles.",
        ],
      },
    ],
    features: [
      "Urgency-sorted dashboard",
      "Calendar & history",
      "Ctrl+K command palette",
      "Tray notifications",
      "Daily email reminders",
      "Light & dark themes",
    ],
    featured: true,
  },
  {
    slug: "royal-compass-travels",
    index: "03",
    title: "Royal Compass Travels",
    kicker: "A cinematic, compass-led website for a luxury travel planner.",
    summary:
      "Every journey begins with a direction — so the compass became the interface. React and Vite on the front, a lightweight WordPress theme and CI/CD deploys behind it.",
    year: "2026",
    role: "Design · Front-end · DevOps",
    type: "Travel website",
    status: "Built for royalcompasstravels.com",
    categories: ["Web"],
    tint: "#d4b07a",
    cover: img(
      "/work/rct-hero-1550.webp",
      1550,
      700,
      "Royal Compass Travels homepage: “Every journey begins with a direction” over Positano at dusk, with a compass reading 144° SE.",
    ),
    gallery: [
      img(
        "/work/rct-destinations-1550.webp",
        1550,
        616,
        "Destinations section: “Choose a direction. We’ll map the way.” beside a compass reading the Maldives’ coordinates.",
      ),
      img("/work/rct-portrait-720.webp", 720, 620, "Positano at dusk with a gold compass needle and live heading readout."),
    ],
    links: [
      { label: "royalcompasstravels.com", href: "https://royalcompasstravels.com" },
      { label: "Design preview", href: "https://royalcompasstravels.netlify.app" },
    ],
    stack: ["React 18", "TypeScript", "Vite", "Lenis", "WordPress theme", "GitHub Actions", "GoDaddy"],
    highlights: [
      { value: "12", label: "Designed sections" },
      { value: "5", label: "Signature motion moments" },
      { value: "6", label: "Step journey planner" },
      { value: "~150", label: "Lines of motion runtime" },
    ],
    sections: [
      {
        title: "The compass is the interface",
        body: [
          "The hero compass follows the cursor with damping and reads out a live heading. Hover a destination and the needle swings to its real great-circle bearing, the coordinates count up and a route line draws itself.",
          "A flight path draws as you scroll and lights each step it passes; four pillars sit on N, E, S and W of a turning dial; a pinned gallery moves sideways as you scroll down; and a six-step journey planner with validation and focus management replaces the contact form.",
        ],
      },
      {
        title: "Engineered to stay light",
        body: [
          "React 18, TypeScript and Vite with plain CSS design tokens and Lenis smooth scrolling — and no animation library. The whole motion system is about 150 lines, and every effect has a reduced-motion fallback.",
          "In production it runs as a lightweight WordPress theme. Every push to main builds the site and deploys it through GoDaddy’s CI/CD; the theme handles legacy redirects, security headers, journey-planner enquiries and a maintenance switch.",
        ],
      },
    ],
    features: [
      "Live compass & heading",
      "Great-circle bearings",
      "Scroll-drawn flight path",
      "Pinned horizontal gallery",
      "Six-step journey planner",
      "CI/CD to WordPress",
    ],
    featured: true,
  },
  {
    slug: "pabloch-tech",
    index: "04",
    title: "Pabloch Tech",
    kicker: "My independent studio for websites, online stores and digital products.",
    summary:
      "I founded Pabloch Tech to design and hand-build sites for US and UK businesses — with a working draft before anyone pays. The studio site itself is a zero-dependency static build.",
    year: "2026",
    role: "Founder · Design · Engineering",
    type: "Own studio",
    status: "Live · taking projects",
    categories: ["Web", "Product"],
    tint: "#e8b45a",
    cover: img(
      "/work/pabloch-desktop.webp",
      1920,
      1200,
      "Pabloch Tech homepage: “Digital products, crafted line by line.” beside a wireframe browser drawing.",
    ),
    phone: img("/work/pabloch-mobile.webp", 540, 1168, "The Pabloch Tech homepage on a phone."),
    gallery: [],
    links: [{ label: "projects.pablochtech.com", href: "https://projects.pablochtech.com/" }],
    stack: ["TypeScript", "esbuild", "Static generation", "AVIF / WebP", "Web3Forms", "Hostinger"],
    highlights: [
      { value: "0", label: "Runtime dependencies" },
      { value: "7", label: "Builds in the work index" },
      { value: "$21+", label: "Motion graphics from" },
      { value: "24h", label: "Reply time" },
    ],
    sections: [
      {
        title: "The studio",
        body: [
          "Pabloch Tech is an independent digital product studio. It designs and hand-builds websites, online stores and custom tools at fixed prices — and shows each client a working draft before they pay a thing. It also makes code-driven motion graphics videos for brands and creators.",
        ],
      },
      {
        title: "A site with no framework",
        body: [
          "projects.pablochtech.com is plain HTML generated at build time from typed TypeScript components. Styles and scripts are bundled with esbuild and content-hashed, fonts are self-hosted, every screenshot is pre-encoded to AVIF and WebP at several widths, and JavaScript arrives only as small islands: the interactive hero grid, pinned scroll scenes, a horizontal rail and the brief form.",
          "Around it: a journal with an RSS feed, legal pages, a sitemap and llms.txt maps so AI search engines can read the studio correctly.",
        ],
      },
    ],
    features: [
      "Typed static generator",
      "Content-hashed assets",
      "Interactive hero grid",
      "Pinned scroll scenes",
      "Journal + RSS",
      "llms.txt for AI search",
    ],
    featured: true,
  },
  {
    slug: "al-abuzer-perfumes",
    index: "05",
    title: "Al-Abuzer Perfumes",
    kicker: "A complete online store for a perfume house, live in production.",
    summary:
      "Eight collections, cart and checkout, customer accounts and order tracking — opening on a full-bleed product video, because fragrance sells on atmosphere first.",
    year: "Delivered",
    role: "Full-stack developer",
    type: "Client project",
    status: "Live in production",
    categories: ["Web"],
    tint: "#f2c46d",
    cover: img(
      "/work/alabuzer-hero-1568.webp",
      1568,
      566,
      "A gold perfume bottle beside oud wood with Arabic calligraphy glowing through drifting gold dust.",
    ),
    gallery: [
      img("/work/alabuzer-desktop-1568.webp", 1568, 700, "Al-Abuzer Perfumes homepage with products, order tracking, search, account and cart."),
      img("/work/alabuzer-tablet-1200.webp", 1200, 750, "The Al-Abuzer store on a tablet."),
    ],
    links: [
      { label: "alabuzerperfumes.com", href: "https://alabuzerperfumes.com" },
      { label: "Frontend repo", href: "https://github.com/iamkaifpathaan/alabuzer-frontend" },
      { label: "Backend repo", href: "https://github.com/iamkaifpathaan/alabuzer-backend" },
    ],
    stack: ["JavaScript", "HTML & CSS", "Backend API", "Authentication", "Cart & checkout"],
    highlights: [
      { value: "8", label: "Collections" },
      { value: "2", label: "Repos: front + back" },
      { value: "Live", label: "In production" },
      { value: "Video", label: "Full-bleed hero" },
    ],
    sections: [
      {
        title: "Atmosphere before price",
        body: [
          "A fragrance brand sells on mood, so the store opens on a full-bleed product video before a single price appears. Underneath it is a complete shop: eight collections, product search, wishlist, cart and checkout, customer accounts, order tracking and a downloadable catalogue.",
          "I built both halves — the storefront and the backend services behind it — and shipped it to the client’s own domain, where it runs in production today.",
        ],
      },
    ],
    features: ["Cart & checkout", "8 collections", "Order tracking", "Customer accounts", "Product search", "Wishlist"],
    featured: false,
  },
  {
    slug: "motion-graphics",
    index: "06",
    title: "Motion Graphics",
    kicker: "Code-driven motion graphics — every frame drawn, every sound synthesised.",
    summary:
      "The engine behind Electronica, offered as a service through Pabloch Tech: kinetic text, animated diagrams and mock-ups, original music and voiceover.",
    year: "2026",
    role: "Motion designer · Engineer",
    type: "Service",
    status: "Available through Pabloch Tech",
    categories: ["Motion"],
    tint: "#f472b6",
    cover: img("/work/motion-reels-1200.webp", 1200, 750, "A row of motion graphics reel covers."),
    gallery: [],
    showreel: true,
    reels: true,
    links: [
      { label: "Services & prices", href: "https://projects.pablochtech.com/services/" },
      { label: "Watch on YouTube", href: "https://www.youtube.com/@iamkaifpathaan" },
    ],
    stack: ["Python", "Skia", "Synthesised audio", "AI voiceover", "FFmpeg", "Playwright"],
    highlights: [
      { value: "98", label: "Reels rendered" },
      { value: "30", label: "Frames per second" },
      { value: "−14", label: "LUFS loudness" },
      { value: "$21", label: "Reels from" },
    ],
    sections: [
      {
        title: "No timeline, just code",
        body: [
          "Each video is a Python program. Scenes are drawn frame by frame with Skia; music and sound effects are synthesised and beat-synced to the cuts; a voiceover is generated, cleaned and ducked under the music; and the final encode is tuned for Instagram and YouTube upload quality.",
          "Because it is code, every reel is reproducible and every style is reusable — the same engine has produced 98 Electronica reels, website promos and screen-recorded app tours captured with Playwright.",
        ],
      },
      {
        title: "As a service",
        body: [
          "Through Pabloch Tech I make these for other people: music-only reels from $21, voiceover reels from $29, 60-second explainers and promos from $49, and monthly packs planned as a series.",
        ],
      },
    ],
    features: ["Kinetic typography", "Animated diagrams", "Original music", "AI voiceover", "Beat-synced edits", "9:16 and 16:9"],
    featured: false,
  },
  {
    slug: "local-business-previews",
    index: "07",
    title: "Local Business Previews",
    kicker: "Three spec websites for real US and UK businesses, built on my own time.",
    summary:
      "Highly rated local businesses with broken or missing websites. Each preview is built around the one thing their customers actually need.",
    year: "2026",
    role: "Design · Development",
    type: "Spec work",
    status: "Previews · unpublished",
    categories: ["Web"],
    tint: "#86efac",
    cover: img("/work/cq-desktop-1440.webp", 1440, 900, "The Cleaning Queens preview homepage with an instant estimate."),
    gallery: [
      img("/work/cq-estimator-1000.webp", 1000, 1000, "The Cleaning Queens instant estimator pricing a 3-bed deep clean."),
      img("/work/oak-desktop-1440.webp", 1440, 900, "Oak Tree Garden Maintenance preview with a photo-upload quote form."),
      img("/work/dean-desktop-1440.webp", 1440, 900, "Dean the Decorator preview built around his reviews."),
    ],
    links: [
      { label: "The Cleaning Queens", href: "https://cleaningqueens-preview.netlify.app" },
      { label: "Oak Tree Garden Maintenance", href: "https://oaktree-preview.netlify.app" },
      { label: "Dean the Decorator", href: "https://dean-preview.netlify.app" },
    ],
    stack: ["HTML", "CSS", "JavaScript", "Netlify"],
    highlights: [
      { value: "3", label: "Businesses" },
      { value: "2", label: "Countries" },
      { value: "5.0★", label: "Average rating of each" },
      { value: "$0", label: "Asked up front" },
    ],
    sections: [
      {
        title: "Built around one real need",
        body: [
          "The Cleaning Queens (Ohio) had 69 five-star reviews and a website button pointing at a parked domain — their preview answers “how much for a 3-bed deep clean?” on screen with an instant estimator.",
          "Oak Tree Garden Maintenance (Derbyshire) gets a quote form that takes photos of the actual garden. Dean the Decorator wasn’t broken, just indistinguishable — so his page is built around the four words his reviewers keep repeating.",
        ],
      },
    ],
    note: "These are unpaid, unpublished previews. None sits on the business’s own domain, and each carries a banner saying it is a design preview.",
    features: ["Instant estimator", "Photo-upload quote form", "Reviews quoted verbatim", "Mobile-first layouts"],
    featured: false,
  },
  {
    slug: "smart-switch",
    index: "08",
    title: "Smart Switch",
    kicker: "A 4-channel ESP32 controller that installs behind an existing switchboard.",
    summary:
      "Keeps the wall switches working while adding app control — with optocoupler switch sensing, AC-DC isolation and 16 A relays on a multi-layer KiCad board.",
    year: "2025 — now",
    role: "PCB & firmware design",
    type: "Hardware",
    status: "In progress",
    categories: ["Hardware"],
    tint: "#4ade80",
    art: "pcb",
    gallery: [],
    links: [{ label: "Repository", href: "https://github.com/iamkaifpathaan/PCB-Design-of-Automation" }],
    stack: ["ESP32", "KiCad", "Embedded C", "Optocouplers", "16 A relays", "AC-DC isolation"],
    highlights: [
      { value: "4", label: "Channels" },
      { value: "16 A", label: "Relays" },
      { value: "230 V", label: "Mains, isolated" },
      { value: "2", label: "Ways to switch" },
    ],
    sections: [
      {
        title: "Smart, without replacing anything",
        body: [
          "Most smart switches ask you to rip out your switchboard. This one sits behind it. Optocouplers sense the existing wall switches, so they keep working, while the ESP32 adds Wi-Fi control from an app — either one can switch the load.",
          "The board isolates the 230 V mains side from the logic with an AC-DC module, switches loads through 16 A relays, and protects everything with a fuse and surge suppression — laid out as a multi-layer PCB in KiCad.",
        ],
      },
    ],
    features: ["Dual manual + Wi-Fi control", "Optocoupler switch sensing", "AC-DC isolation", "Fuse & surge protection"],
    featured: false,
  },
  {
    slug: "footstep-power",
    index: "09",
    title: "Footstep Power Generation",
    kicker: "Turning footsteps into stored electricity, and measuring every one.",
    summary:
      "A piezoelectric floor that harvests energy from footsteps, with an ESP32 counting steps and showing voltage and energy on an LCD in real time.",
    year: "2025",
    role: "Hardware & firmware",
    type: "Team of 3",
    status: "Working prototype",
    categories: ["Hardware"],
    tint: "#facc15",
    art: "energy",
    gallery: [],
    links: [
      { label: "Repository", href: "https://github.com/iamkaifpathaan/Footstep-Power-Generation" },
      {
        label: "Video demo",
        href: "https://www.linkedin.com/posts/iamkaifpathaan_excited-to-share-our-working-prototype-of-activity-7400474295782662144-vgE2",
      },
    ],
    stack: ["ESP32", "Piezoelectric sensors", "Embedded C/C++", "LCD"],
    highlights: [
      { value: "3", label: "Engineers" },
      { value: "Live", label: "Step & energy readout" },
      { value: "ESP32", label: "Controller" },
      { value: "2025", label: "Built" },
    ],
    sections: [
      {
        title: "Energy you walk on",
        body: [
          "Piezoelectric elements under a floor tile turn the pressure of each footstep into a small electrical charge, which is rectified and stored. An ESP32 monitors the system in real time and shows step count, output voltage and the total energy generated on an LCD.",
        ],
      },
    ],
    features: ["Piezo energy harvesting", "Step counting", "Live voltage & energy", "LCD readout"],
    featured: false,
  },
];

export const lab = [
  {
    title: "Home Automation System",
    note: "Relay-based appliance control from a microcontroller — now being scaled toward a product.",
    tag: "Arduino · Tinkercad",
    href: "https://www.tinkercad.com/things/3hO5JvCXew2-home-automatuion-project?sharecode=elmM8rhA1BWTDu42xHWqdR4HfOw68UhmHlUH1gBQOj4",
  },
  {
    title: "Logic Power Supply",
    note: "A regulated 3.3 V / 5 V supply for microcontrollers and sensors.",
    tag: "Simulation",
    href: "https://www.tinkercad.com/things/0ghuvIkiMWi-logic-power-supply?sharecode=oa8w32qSiaAXm2QzXErjNUC_SaZ25HqGpJAVFvnrZbY",
  },
  {
    title: "Hexapod",
    note: "A six-legged robot — multi-actuator control and embedded coordination.",
    tag: "Robotics · Ongoing",
    href: null,
  },
  {
    title: "PabloCommerce",
    note: "Commerce platform architecture: scalable backend services and a modern frontend.",
    tag: "Platform · Ongoing",
    href: "https://github.com/PablochTech/PabloCommerce",
  },
];

export const reels = [
  { ep: 98, title: "What is 0x20 in decimal?", kind: "Quiz" },
  { ep: 97, title: "ESP-NOW: two ESP32s, no router", kind: "Lesson" },
  { ep: 96, title: "Does voltage or current kill you?", kind: "Myth or Fact" },
  { ep: 95, title: "What is electricity, really?", kind: "Explained Simply" },
  { ep: 94, title: "How a stepper motor works", kind: "Lesson" },
  { ep: 93, title: "How a metal detector works", kind: "Why does…?" },
  { ep: 92, title: "Choosing a home inverter", kind: "Smart Buyer" },
  { ep: 80, title: "LED bulbs: lumens, not watts", kind: "Smart Buyer" },
  { ep: 78, title: "Which bulb uses least power?", kind: "Quiz" },
  { ep: 55, title: "Binary & hex in 24 seconds", kind: "Embedded C" },
  { ep: 43, title: "How a touchscreen feels you", kind: "Everyday Tech" },
  { ep: 36, title: "From sand to a phone chip", kind: "Chips" },
  { ep: 17, title: "How a transformer works", kind: "Basics" },
];

export const experience = [
  {
    company: "OPPO",
    role: "L1 QA Engineer",
    period: "Now",
    location: "India",
    current: true,
    body: "Executing test plans, catching defects early and helping every release ship reliable — bringing a builder’s eye to quality.",
    tags: ["Test execution", "Bug reporting", "Regression", "Device validation"],
  },
  {
    company: "Pabloch Tech",
    role: "Founder",
    period: "2026 — Now",
    location: "Remote · US & UK clients",
    current: true,
    body: "Running my own studio: websites and online stores for businesses, our own products (Renewal Tracker, Electronica) and code-driven motion graphics.",
    tags: ["Product", "Full-stack", "Design", "Motion"],
  },
  {
    company: "Kantar × NeoResearch",
    role: "Research Analyst Intern",
    period: "May 2026",
    location: "Gurgaon · On-site",
    current: false,
    body: "Supported Kantar’s 5-State Election Counting Project — field research and primary data collection across Tamil Nadu constituencies for real-time result tracking.",
    tags: ["Field research", "Data collection", "Reporting"],
  },
  {
    company: "IBM",
    role: "IoT Intern",
    period: "Sep — Nov 2025",
    location: "Remote",
    current: false,
    body: "Virtual IoT internship: circuit simulation and embedded design in Tinkercad and KiCad, schematic capture and PCB layout review.",
    tags: ["Tinkercad", "KiCad", "Schematics", "PCB review"],
  },
];

export const education = [
  {
    school: "Galgotias College of Engineering & Technology",
    degree: "B.Tech, Electronics & Communication Engineering",
    detail: "AKTU · CGPA 7.8",
    period: "2023 — 2027",
  },
  { school: "Government Sarvodaya Vidyalaya, Delhi", degree: "Class XII · CBSE", detail: "89%", period: "2021" },
  { school: "Bal Vidya Model School, Delhi", degree: "Class X · CBSE", detail: "90.6%", period: "2019" },
];

export const skills = [
  {
    title: "Hardware & Embedded",
    items: ["ESP32", "Arduino", "STM32", "Embedded C / C++", "KiCad", "Multi-layer PCB", "AC-DC isolation", "Tinkercad"],
  },
  {
    title: "Software & Web",
    items: ["TypeScript", "JavaScript", "React", "Next.js", "Node.js", "Express", "Electron", "Python", "MySQL", "PostgreSQL", "MongoDB"],
  },
  {
    title: "Quality",
    items: ["Manual testing", "Test case design", "Bug reporting", "Regression testing", "Android"],
  },
  {
    title: "Creative & AI",
    items: ["Motion graphics", "Video editing", "Sound design", "Logo design", "Prompt engineering", "Claude", "GitHub Copilot"],
  },
];

export const certificates = [
  {
    title: "Certificate of Internship — Research Analyst Intern",
    issuer: "NeoResearch × Kantar",
    year: "2026",
    url: null as string | null,
  },
  {
    title: "Virtual Internship — IoT (FSP)",
    issuer: "IBM Developer Skills Network",
    year: "2025",
    url: "https://courses.ibmmooc.skillsnetwork.site/certificates/12ee70e998f54563b148421dfd3ccd47",
  },
  {
    title: "PBEL Virtual Internship — IoT",
    issuer: "IBM Developer Skills Network",
    year: "2025",
    url: "https://courses.ibmmooc.skillsnetwork.site/certificates/23179c7d83394a758e8509749c758e55",
  },
  {
    title: "Introduction to IoT and Digital Transformation",
    issuer: "Cisco Networking Academy",
    year: "2025",
    url: "/certificates/cisco-iot-digital-transformation-2025.pdf",
  },
];

export const hobbies = ["Swimming", "Snooker", "Cricket", "Electronic circuits", "Travelling", "Vibe coding"];

export const nav = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);

export const nextProject = (slug: string) => {
  const i = projects.findIndex((p) => p.slug === slug);
  return projects[(i + 1) % projects.length];
};
