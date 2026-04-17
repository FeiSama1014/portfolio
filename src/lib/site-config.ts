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
  title: "Interactive Media Designer",
  greeting: "Hello, I'm",
  shortBio:
    "Toronto-based interactive media designer crafting digital experiences where motion, interaction, and visual storytelling converge.",
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
    { id: "education", label: "Education" },
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "portfolio", label: "Portfolio" },
    { id: "contact", label: "Contact" },
  ],
};
