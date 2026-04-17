export type ProjectCategory = "game" | "ui-ux" | "motion" | "graphic";

export type ProjectLink = {
  label: string;
  url: string;
};

export type Project = {
  id: string;
  title: string;
  category: ProjectCategory;
  tagline: string;
  description?: string;
  year?: string;
  role?: string;
  cover?: string;
  tools?: string[];
  tags?: string[];
  links?: ProjectLink[];
  /** Internal detail page path (e.g. `/projects/naturcycle-ux`). */
  detailHref?: string;
};

export const projects: Project[] = [
  {
    id: "rhythm-game-vr",
    title: "Rhythm Game · VR/XR",
    category: "game",
    tagline:
      "Solo-built music rhythm title widely regarded by players as AAA-caliber (~60 GB of 3D content) — 30+ original 3D stages and a custom DMX-emulated audio-reactive lighting system. 1M+ views and 400K+ downloads.",
    description:
      "Solo Unity/C# development across gameplay, UX/UI, beat-sync visualization, and multi-platform release (VR / XR / desktop). Features **30+ custom 3D stage environments** (Ancient Egypt, traditional Eastern, modern industrial, and more) and a **DMX-emulated audio-reactive lighting system** driven by a C# audio-analysis backend — the core of the 60 GB asset footprint. Multiple full-game UX revisions shipped based on community feedback; regarded within the player community as a AAA-caliber production.",
    year: "2023 – Present",
    role: "Solo Designer & Developer",
    tools: ["Unity", "C#", "Blender", "After Effects"],
    tags: [
      "Rhythm Game",
      "VR/XR",
      "3D Environment Design",
      "Audio-Reactive Lighting",
      "UX/UI",
      "User-Centered Design",
    ],
    links: [],
  },
  {
    id: "card-game-vr",
    title: "Casino Suite · VR/XR",
    category: "game",
    tagline:
      "Casual casino-style suite of 11 card and table games — Dou Dizhu, Blackjack, Texas Hold'em, and more — unified by a full achievement and collection system. DouZero + custom AI drive the opponents.",
    description:
      "Solo-developed casual casino suite. Shared game-loop, turn-state UI, and bot-behavior interface across 11 classic card/table modules, unified by a full achievement and collection progression system that drives long-term engagement. Integrated DouZero (Kuaishou's open-source deep-RL model) for Dou Dizhu plus custom AI decision logic for poker-family and house-edge games.",
    year: "2023 – Present",
    role: "Solo Designer & Developer",
    tools: ["Unity", "C#", "Neural Network AI"],
    tags: [
      "Card Game",
      "VR/XR",
      "AI Integration",
      "Game Suite",
      "Achievement System",
    ],
    links: [],
  },
  {
    id: "rhythm-ux-redesign",
    title: "Rhythm Game UX Redesign · v1 → v2",
    category: "ui-ux",
    tagline:
      "Two-version redesign of a shipped rhythm game — full UX rebuild driven entirely by community user research.",
    description:
      "Case study covering the original v1 design, a structured community playtest program, synthesis of user feedback, and the shipped v2 UX/UI system. Documents how a globally distributed player community drove wholesale design decisions rather than internal aesthetics.",
    year: "2024",
    role: "Designer (community-driven)",
    tools: ["Figma", "Unity"],
    tags: ["UX Research", "UI Redesign", "Case Study", "User-Centered Design"],
    links: [],
  },
  {
    id: "naturcycle-ux",
    title: "NaturCycle · UX Case Study",
    category: "ui-ux",
    tagline:
      "End-to-end UX case study for a fictional sustainable skincare brand — 35-page deliverable with interactive Figma prototype.",
    description:
      "Research, personas, competitive analysis, user flows, information architecture, wireframes, and high-fidelity prototype for a fictional skincare brand NaturCycle. Seneca INM300 coursework.",
    year: "2025",
    role: "UX Designer",
    cover: "/projects/naturcycle/p01.jpg",
    tools: ["Figma", "Adobe Suite"],
    tags: ["UX Case Study", "Sustainability", "Prototype", "Research"],
    links: [],
    detailHref: "/projects/naturcycle-ux",
  },
  {
    id: "anfou",
    title: "AnFou · 安否",
    category: "ui-ux",
    tagline:
      "A quiet, warm, SMS-first check-in app — dismiss your morning alarm to let the people who care know you're safe. Solo HTML prototype.",
    description:
      "Self-directed UX + UI + front-end project. Research, personas, assumption-and-bias management, design principles (Hick, Fogg, Progressive Disclosure, Inclusive Design), low-to-hi-fi wireframes, and a working HTML prototype. Seneca INM400 coursework.",
    year: "2026",
    role: "Sole Designer & Developer",
    cover: "/projects/anfou/slide01.jpg",
    tools: ["HTML", "CSS", "JavaScript", "Figma"],
    tags: ["UX Research", "SMS-First", "Accessibility", "Self-Directed"],
    links: [],
    detailHref: "/projects/anfou",
  },
  {
    id: "demo-reel",
    title: "Sean · Show Reel",
    category: "motion",
    tagline:
      "A compilation of illustration, graphic design, motion, and video editing — work across the full Adobe Creative Suite.",
    year: "2024 – 2026",
    role: "Solo",
    cover: "/projects/demo-reel/cover.jpg",
    tools: ["Adobe Suite", "Unity", "Blender"],
    tags: ["Showreel", "Illustration", "Graphic Design", "Motion", "Video", "3D"],
    links: [
      { label: "YouTube", url: "https://www.youtube.com/watch?v=IUjVTsME2_w" },
    ],
    detailHref: "/projects/demo-reel",
  },
  {
    id: "motion-design",
    title: "Under Cloud · Motion Design",
    category: "motion",
    tagline:
      "A 50-second lyrical motion piece — the emotional arc of a song rendered as color, light, and motion. Solo work with a live Milanote board.",
    year: "2025",
    role: "Solo Designer & Animator",
    cover: "/projects/motion-design/preproduction-canvas.jpg",
    tools: ["After Effects", "Unity3D"],
    tags: ["Motion Design", "Lyrical Animation", "Color Script", "Solo"],
    links: [
      { label: "YouTube", url: "https://youtu.be/_0b6ZvPTN5w" },
    ],
    detailHref: "/projects/motion-design",
  },
  {
    id: "burger-munch",
    title: "Burger_Munch · Unboxing Experience",
    category: "motion",
    tagline:
      "Tech launch for a burger. Three-chapter social spot from sterile anticipation to chaotic joy. Seneca INM340 team project.",
    year: "2026",
    role: "Production Manager",
    cover: "/projects/burger-munch/deck01.jpg",
    tools: ["After Effects", "Premiere", "3D"],
    tags: ["Production Management", "Brand Campaign", "Short-form", "Team"],
    links: [
      { label: "YouTube", url: "https://www.youtube.com/watch?v=B4P3dQSpa8c" },
    ],
    detailHref: "/projects/burger-munch",
  },
  {
    id: "magazine-design",
    title: "Editorial · Jang Won-young Feature",
    category: "graphic",
    tagline:
      "An 8-page magazine editorial on K-Pop star Jang Won-young — typography, image pairing, pull quotes, and pacing across three spreads.",
    year: "2024",
    role: "Solo Designer & Writer",
    cover: "/projects/magazine/spread01.jpg",
    tools: ["InDesign", "Photoshop"],
    tags: ["Editorial", "Print Layout", "Typography", "K-Pop"],
    links: [],
    detailHref: "/projects/magazine",
  },
];
