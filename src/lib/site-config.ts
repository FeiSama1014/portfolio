export type Social = {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "twitter" | "mail" | "instagram" | "youtube";
};

export type SiteConfig = {
  fullName: string;
  firstName: string;
  lastName: string;
  title: string;
  greeting: string;
  shortBio: string;
  /** Long-form narrative bio for the About section. Paragraphs split on \n\n. */
  longBio: string;
  avatar: string;
  location: string;
  phone?: string;
  email?: string;
  availableForWork: boolean;
  socials: Social[];
  nav: { id: string; label: string }[];
};

export const siteConfig: SiteConfig = {
  fullName: "Xiang Sean Yao",
  firstName: "Sean",
  lastName: "Yao",
  title: "Interactive Media Designer & Creative Technologist",
  greeting: "Hello, I'm",
  shortBio:
    "Toronto-based interactive media designer crafting digital experiences where motion, interaction, and visual storytelling converge.",
  longBio: [
    "In 2023 I moved to Toronto with my family and started over — as a designer this time.",
    "For thirteen years before that I ran commercial real estate, film production, and new-media strategy work across China, Australia, and the US. Real teams, real titles, real outcomes. What I kept being pulled back toward was the creative phases — the campaigns, the films, the systems that reach real people. Interactive Media Design is where that pull finally got the tools and discipline it had always needed.",
    "Family is why I'm here. Work I love is why I started over. Both have been the simplest decisions to make.",
  ].join("\n\n"),
  avatar: "/avatar.jpg",
  location: "Toronto, Canada",
  email: "yaoxiang@outlook.com",
  availableForWork: true,
  socials: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/xiang-yao-65a5519b/",
      icon: "linkedin",
    },
  ],
  nav: [
    { id: "about", label: "About" },
    { id: "portfolio", label: "Portfolio" },
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ],
};
