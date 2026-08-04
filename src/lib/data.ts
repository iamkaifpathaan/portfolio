export const profile = {
  name: "Md Kaif",
  initials: "MK",
  role: "Electronics & Embedded Systems Engineer",
  roles: [
    "PCB Designer",
    "ESP32 Firmware Engineer",
    "IoT Product Builder",
    "Video Editor",
    "Prompt Engineer",
    "Logo Designer",
  ],
  location: "Greater Noida, UP, India",
  email: "p0409athan@gmail.com",
  phone: "+91-9310746928",
  summary:
    "Electronics & Communication Engineering undergraduate with hands-on experience in embedded systems, PCB design, and IoT product development. Skilled in ESP32-based firmware and KiCad schematic/PCB layout, with a track record of taking hardware projects from concept to working prototype. Internship experience spans IoT engineering at IBM and applied research at Kantar, complemented by full-stack web development delivered for a live client project.",
  resumeUrl: "/Md_Kaif_Resume.pdf",
  photoDesk: "/profile-desk.jpg",
  photoAvatar: "/profile-avatar.jpg",
  socials: {
    github: "https://github.com/iamkaifpathaan",
    linkedin: "https://linkedin.com/in/iamkaifpathaan",
    instagram: "https://instagram.com/iamkaifbaloch",
    twitter: "https://twitter.com/iamkaifpathaan",
    email: "mailto:p0409athan@gmail.com",
  },
};

export const stats = [
  { label: "CGPA", value: "7.8", suffix: "/10" },
  { label: "Projects Shipped", value: "5", suffix: "+" },
  { label: "Internships", value: "2", suffix: "" },
  { label: "PCB Layers Routed", value: "4", suffix: "L" },
];

export const education = [
  {
    id: "btech",
    school: "Galgotias College of Engineering & Technology",
    detail: "AKTU Affiliated · Greater Noida, UP",
    degree: "B.Tech — Electronics & Communication Engineering",
    meta: "CGPA: 7.8",
    period: "2023 – 2027",
  },
  {
    id: "xii",
    school: "Government Sarvodaya Vidyalaya, Delhi",
    detail: "CBSE Board",
    degree: "Class XII",
    meta: "89%",
    period: "2021",
  },
  {
    id: "x",
    school: "Bal Vidya Model School, Delhi",
    detail: "CBSE Board",
    degree: "Class X",
    meta: "90.6%",
    period: "2019",
  },
];

export const experience = [
  {
    id: "ibm",
    company: "IBM",
    role: "IoT Intern",
    location: "Remote",
    period: "Sep 2025 – Nov 2025",
    tag: "U1",
    points: [
      "Completed a structured virtual IoT internship, applying circuit simulation and embedded design workflows using Tinkercad and KiCad.",
      "Designed and reviewed electronic schematics and PCB layouts as part of hands-on embedded systems learning modules.",
      "Documented design workflows and validated circuit behavior, strengthening schematic capture and PCB review skills.",
    ],
    stack: ["Tinkercad", "KiCad", "Schematic Capture", "PCB Review"],
  },
  {
    id: "kantar",
    company: "Kantar (with NeoResearch)",
    role: "Research Analyst Intern",
    location: "Gurgaon, Haryana · On-site",
    period: "May 2026",
    tag: "U2",
    points: [
      "Supported Kantar's 5-State Election Counting Project, contributing to real-time election result tracking for a national election study.",
      "Conducted field research and collected primary data across assigned survey areas in Tamil Nadu constituencies.",
      "Collaborated with the research team at Kantar's DLF Cyber City office to ensure accurate, timely data collection and reporting.",
    ],
    stack: ["Field Research", "Data Collection", "Reporting"],
  },
];

export type Project = {
  id: string;
  name: string;
  tagline: string;
  designator: string;
  period: string;
  role: string;
  status: "Ongoing" | "Completed";
  team: string;
  description: string[];
  stack: string[];
  repo: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    id: "smart-switch",
    name: "Smart Switch",
    tagline: "ESP32-Based 4-Channel Smart Home Controller PCB",
    designator: "PCB-01",
    period: "Sep 2025 – Present",
    role: "PCB & Firmware Designer",
    status: "Ongoing",
    team: "Individual Project",
    description: [
      "Designing a 4-channel ESP32 smart home controller PCB for 230V AC Indian wiring that installs behind existing switchboards, keeping wall switches functional alongside app control.",
      "Implementing dual manual/WiFi control via optocoupler-based switch sensing, with AC-DC isolation, 16A relays, and mains surge/fuse protection, laid out as a multi-layer KiCad PCB.",
    ],
    stack: ["ESP32", "KiCad", "PCB Design", "Embedded C", "AC-DC Isolation"],
    repo: "https://github.com/iamkaifpathaan/PCB-Design-of-Automation",
    featured: true,
  },
  {
    id: "alabuzer",
    name: "Alabuzer Perfumes",
    tagline: "E-Commerce Website — Client Project",
    designator: "WEB-01",
    period: "Delivered",
    role: "Full-Stack Developer",
    status: "Completed",
    team: "Individual Client Project",
    description: [
      "Built and deployed a full-stack e-commerce website for a real client, covering frontend UI and backend services.",
      "Implemented product catalog, cart, wishlist, and user authentication for a live production site.",
    ],
    stack: ["JavaScript", "HTML/CSS", "Full-Stack"],
    repo: "https://github.com/iamkaifpathaan/alabuzer-frontend",
    featured: true,
  },
  {
    id: "footstep",
    name: "Footstep Power Generation",
    tagline: "Piezoelectric Energy Harvesting System",
    designator: "PCB-02",
    period: "Oct 2025 – Nov 2025",
    role: "Hardware & Firmware Design",
    status: "Completed",
    team: "Team of 3",
    description: [
      "Designed a piezoelectric footstep energy harvesting system that converts mechanical footstep pressure into stored electrical energy.",
      "Built ESP32-based real-time monitoring of step count, output voltage, and cumulative energy generated, displayed on an LCD.",
    ],
    stack: ["ESP32", "Piezoelectric Sensors", "Embedded C/C++", "LCD"],
    repo: "https://github.com/iamkaifpathaan/Footstep-Power-Generation",
    featured: false,
  },
  {
    id: "logic-supply",
    name: "Logic Power Supply",
    tagline: "Regulated Logic-Level Power Supply",
    designator: "SIM-01",
    period: "Completed",
    role: "Circuit Design",
    status: "Completed",
    team: "Individual Project",
    description: [
      "Simulated a regulated 3.3V/5V logic-level power supply in Tinkercad, focusing on voltage regulation and component selection for microcontroller and sensor loads.",
    ],
    stack: ["Tinkercad", "Circuit Simulation", "Voltage Regulation"],
    repo: "https://github.com/iamkaifpathaan",
    featured: false,
  },
  {
    id: "home-automation",
    name: "Home Automation System",
    tagline: "Microcontroller-Based Device Control",
    designator: "SIM-02",
    period: "Completed",
    role: "Hardware & Firmware Design",
    status: "Completed",
    team: "Team of 4",
    description: [
      "Built and simulated a home automation circuit enabling relay-based control of household appliances via microcontroller logic.",
    ],
    stack: ["Arduino Uno R3", "Tinkercad", "Embedded C"],
    repo: "https://github.com/iamkaifpathaan",
    featured: false,
  },
];

export const skillGroups = [
  {
    id: "languages",
    label: "Programming Languages",
    tag: "R1",
    skills: ["C", "C++", "Python", "JavaScript", "HTML/CSS"],
  },
  {
    id: "embedded",
    label: "Embedded Systems",
    tag: "R2",
    skills: ["ESP32", "Arduino Uno R3", "Embedded C/C++", "Firmware Development"],
  },
  {
    id: "pcb",
    label: "PCB Design",
    tag: "R3",
    skills: ["KiCad (Schematic & Layout)", "Multi-Layer PCB Design", "AC-DC Isolation Design"],
  },
  {
    id: "electronics",
    label: "Electronics",
    tag: "R4",
    skills: ["Circuit Design", "Schematic Capture", "Analog & Digital Circuits"],
  },
  {
    id: "data",
    label: "Databases & Version Control",
    tag: "R5",
    skills: ["PostgreSQL", "MongoDB", "Git", "GitHub"],
  },
  {
    id: "tools",
    label: "Tools & Platforms",
    tag: "R6",
    skills: ["VS Code", "Tinkercad", "Arduino IDE"],
  },
  {
    id: "ai",
    label: "AI Tools",
    tag: "R7",
    skills: ["GitHub Copilot", "Claude", "ChatGPT", "Prompt Engineering"],
  },
];

export const creativeSkills = [
  {
    id: "video",
    label: "Video Editing",
    tag: "C1",
    desc: "Cutting, pacing, color and sound design for content and social-first video.",
  },
  {
    id: "content",
    label: "Content Creation",
    tag: "C2",
    desc: "Planning and producing content across formats — from concept to publish.",
  },
  {
    id: "prompt",
    label: "Prompt Engineering",
    tag: "C3",
    desc: "Designing prompts and AI workflows to ship real product and creative work faster.",
  },
  {
    id: "logo",
    label: "Logo Design",
    tag: "C4",
    desc: "Self-taught brand mark and logo design for personal and client projects.",
  },
];

export const certificates = [
  {
    id: "kantar-cert",
    title: "Certificate of Internship — Research Analyst Intern",
    issuer: "NeoResearch, in collaboration with Kantar",
    meta: "Cert No. NEO/2026/RA/55",
    year: "May 2026",
    url: null,
  },
  {
    id: "ibm-fsp-cert",
    title: "Virtual Internship via FSP (6 Sept – 7 Nov 2025) — IoT",
    issuer: "IBMCEP · IBM Developer Skills Network",
    meta: "Verify certificate",
    year: "Dec 2025",
    url: "https://courses.ibmmooc.skillsnetwork.site/certificates/12ee70e998f54563b148421dfd3ccd47",
  },
  {
    id: "ibm-pbel-cert",
    title: "PBEL Equivalent to Virtual Internship — IoT",
    issuer: "IBMCEP · IBM Developer Skills Network",
    meta: "Verify certificate",
    year: "Aug 2025",
    url: "https://courses.ibmmooc.skillsnetwork.site/certificates/23179c7d83394a758e8509749c758e55",
  },
  {
    id: "cisco-cert",
    title: "Introduction to IoT and Digital Transformation",
    issuer: "Cisco Networking Academy (EdCreate Foundation)",
    meta: "View certificate",
    year: "Jul 2025",
    url: "/certificates/cisco-iot-digital-transformation-2025.pdf",
  },
];

export const hobbies = [
  { id: "swimming", label: "Swimming" },
  { id: "snooker", label: "Snooker" },
  { id: "cricket", label: "Cricket" },
  { id: "circuits", label: "Electronic Circuits" },
  { id: "travelling", label: "Travelling" },
  { id: "vibecoding", label: "Vibe Coding" },
];

export const navLinks = [
  { id: "about", label: "About", tag: "00" },
  { id: "experience", label: "Experience", tag: "01" },
  { id: "projects", label: "Projects", tag: "02" },
  { id: "skills", label: "Skills", tag: "03" },
  { id: "certificates", label: "Certs", tag: "04" },
  { id: "contact", label: "Contact", tag: "05" },
];
