export type Experience = {
  role: string;
  company: string;
  location?: string;
  start: string;
  end: string;
  summary?: string;
  bullets?: string[];
  tags?: string[];
};

export const experience: Experience[] = [
  {
    role: "Independent VR/XR Game Designer & Developer",
    company: "Independent",
    location: "Remote",
    start: "2023",
    end: "Present",
    summary:
      "Solo developer of VR/XR interactive experiences across rhythm/music and card-game genres, shipped on a dedicated VR creator community platform; collaborated with character artists on visual assets.",
    bullets: [
      "Sole designer and developer — UX/UI, gameplay systems, and release — across multiple Unity (C#) VR/XR titles spanning **rhythm/music** and **card-game** genres; flagship **rhythm game** (**~60 GB of 3D content, widely regarded by players as AAA-caliber**) reached **1M+ views and 400K+ downloads**, top-tier in its niche ecosystem",
      "Owned end-to-end UX/UI architecture: game lobby, onboarding flow, in-session HUD, **beat-sync visualization, song selection**, settings, EN/CN localization, plus dialog/branching narrative and in-game economy systems",
      "For the rhythm title: designed and built **30+ original 3D stage environments** (Ancient Egypt, traditional Eastern, modern industrial, and more) — the dominant source of the 60 GB asset footprint — paired with a custom **DMX-emulated audio-reactive virtual stage-lighting system** (C# beat-and-frequency analysis backend feeding a real-time virtual lighting front-end)",
      "Shipped a **casual casino-style suite of 11 card and table games** (Dou Dizhu, Blackjack, Texas Hold'em, and more) unified by a **full achievement / collection progression system**; integrated **DouZero** (Kuaishou's open-source deep-RL model) plus custom AI decision models to power single-player opponents across modules. Designed the shared game-loop, turn-state UI, and bot-behavior interface",
      "Engineered **cross-platform architecture** spanning **VR, XR (mixed reality), and desktop** — plugin/modular framework, VR controller + gesture input, and shared UI/input abstraction layer",
      "Operate (with a **5-person moderator team**) a **3,000-member international Discord community** — the primary user-research and feedback channel. **Multiple full-game UI/UX revisions shipped were driven directly by community playtests and feedback**",
      "Cultivated a **player-contributed creator ecosystem**: volunteer-driven localization (**EN / CN / JA / KR**), user-built mods and companion apps, and **category-leading fan UGC on bilibili** (China's second-largest video platform)",
    ],
    tags: [
      "Unity",
      "C#",
      "VR/XR",
      "UX/UI Design",
      "User-Centered Design",
      "Game Design",
      "Rhythm Game",
      "Card Game",
      "AI Integration",
      "Community Management",
      "Localization",
    ],
  },
  {
    role: "Head, New Media Division · Western Media",
    company: "Shaanxi Culture Industry Investment Group",
    location: "Xi'an, China",
    start: "2019",
    end: "2023",
    summary:
      "Head of a 70-person new-media advisory and production division at a state-owned cultural investment group. Served as lead consultant on enterprise brand and media-transformation programs for central state-owned enterprise (SOE) clients.",
    bullets: [
      "China National Agricultural Group (\"New Farmer\"): won the engagement via competitive tender; built and scaled a farmer-facing short-video content matrix across Douyin, Kuaishou, and adjacent platforms, reaching 6M+ aggregate followers and still in delivery today",
      "**CHINA RAILWAY — Chengdu Group** (the Southwest China regional subsidiary of China State Railway, operating rail networks across **Sichuan, Chongqing, and Guizhou**): led the engagement as Chief Consultant; authored a 5-year media-upgrade strategy; stood up the client's 50-person internal execution team; delivered Phase 1 upgrades at **Chengdu East Station**, one of China's new-generation high-speed rail hubs at **90,000+ daily passengers** — **~100 LED displays refitted** plus dozens of new-retail media/vending installations",
      "Invited by the client's in-house media subsidiary to join as VP during the engagement; declined to maintain independent advisory role",
      "Directed 5 direct reports and divisional delivery across 70 FTEs; project budgets averaged several million RMB; client roster anchored by central SOE accounts",
    ],
    tags: [
      "Media Strategy",
      "Team Leadership",
      "Client Management",
      "Brand Strategy",
      "Digital Transformation",
      "Enterprise",
    ],
  },
  {
    role: "Partner & General Manager",
    company: "Hubei Starlight Legend Pictures",
    location: "Wuhan, China",
    start: "2018",
    end: "2019",
    summary:
      "Co-led a 50-person theatrical and digital film production studio with full P&L and slate responsibility.",
    bullets: [
      "Operated a 50-person film production studio across TV series, web drama, and theatrical features",
      "Served as Executive Producer / Producer on feature film productions, coordinating 200+ crew across multi-location shoots",
      "Hands-on daily production management: scheduling, call sheets, location transitions, crew coordination, vendor negotiation",
      "Owned full pipeline: financing, script development, casting, on-set production, post-production, and distribution",
    ],
    tags: [
      "Film Production",
      "Executive Producer",
      "Team Leadership",
      "P&L Management",
      "Operations",
    ],
  },
  {
    role: "Commercial Director → EVP → President",
    company: "Fuxing Huiyu Real Estate Group (Starryland)",
    location: "Wuhan · Melbourne / Sydney · Los Angeles",
    start: "2013",
    end: "2017",
    summary:
      "Four years across three markets within one listed real-estate group — from commercial planning in Wuhan, to standing up a 20-person Australian office from a 2-person founding team while executing the group's first Australian project (one of Sydney's largest land deals of that cycle), to heading the group's US entity from Los Angeles.",
    bullets: [
      "2015–2017 · Los Angeles · **President**, Starryland USA LLC (20-person US entity) — reported directly to Group CEO and Board; led joint-venture partnerships with US homebuilders including **New Home Co.** (Nasdaq-listed) on prospective projects in the Bay Area and Seattle",
      "2014–2015 · Melbourne / Sydney · **Director & Executive Vice President**, Starryland (Australia) Pty Ltd — **arrived with a 2-person founding team; scaled the local entity to 20 people (HQ Melbourne)** while simultaneously executing the group's first Australian project",
      "**Closed land acquisition within 3 months of arrival** for **Promenade Parramatta** in Sydney — a **774-apartment three-stage waterfront development** on the Parramatta River (1.2 ha of landscaped foreshore) in Sydney's emerging dual CBD; **moved from acquisition through planning approval to Phase 1 pre-sale launch in 6 months**, with **Phase 1 (277 apartments) selling out in 2 days**; performance triggered promotion to the US role",
      "2013 · Wuhan · **Commercial Project Director** (15-person team) — partnered with a Japanese consultancy (portfolio includes Fukuoka's landmark Canal City Hakata) on **STAR CITY (群星城)**, a 90,000 sqm commercial development in Wuhan",
    ],
    tags: [
      "Commercial Real Estate",
      "Cross-border Investment",
      "Land Acquisition",
      "Due Diligence",
      "US Market",
      "Australian Market",
      "Executive Leadership",
      "Team Building",
      "International Business",
    ],
  },
  {
    role: "Marketing Planning Supervisor → Manager",
    company: "Wanda Commercial Properties",
    location: "Wuhan, China",
    start: "2011",
    end: "2013",
    summary:
      "Led marketing planning for Wanda's flagship Wuhan Central Cultural District — Hanjie (Han Street), a 130,000 sqm outdoor pedestrian street and indoor shopping complex.",
    bullets: [
      "Grew the marketing planning team from **3 FTEs (as Supervisor) to 12 FTEs (as Manager)** while owning the project's brand positioning and campaign strategy",
      "Authored the project's signature **culture-commerce integration campaign**, fusing Wuhan's heritage and arts with retail promotion; pioneered integration of traditional ground activation with emerging new-media channels (Weibo, early social platforms)",
      "Campaign presented at Wanda Group's annual conference; **Chairman Wang Jianlin personally approved the plan and expanded annual budget from ¥3M to ¥8M on the spot**. Led end-to-end execution as the campaign became a **group-wide flagship / benchmark project**",
    ],
    tags: [
      "Brand Marketing",
      "Campaign Strategy",
      "Team Leadership",
      "New Media",
      "Real Estate Marketing",
      "Retail & Commercial",
    ],
  },
];
