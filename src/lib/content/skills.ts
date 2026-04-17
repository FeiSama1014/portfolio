export type SkillGroup = {
  id: string;
  title: string;
  icon: "design" | "tech" | "strategy" | "language";
  skills: string[];
  note?: string;
};

export const skillGroups: SkillGroup[] = [
  {
    id: "design",
    title: "Design",
    icon: "design",
    skills: [
      "Graphic Design",
      "Editorial & Print Layout",
      "UI / UX Design",
      "Web Design",
      "Web Development",
      "3D Design",
      "Level Design (Unity)",
      "Motion Design",
      "Video Editing & VFX",
      "Sound Design",
    ],
  },
  {
    id: "technical",
    title: "Technical & Tools",
    icon: "tech",
    skills: [
      "Photoshop",
      "Illustrator",
      "InDesign",
      "After Effects",
      "Premiere Pro",
      "Audition",
      "Lightroom",
      "Figma",
      "Blender",
      "Unity",
      "C#",
      "HTML / CSS",
      "JavaScript",
    ],
  },
  {
    id: "strategy",
    title: "Strategy & Leadership",
    icon: "strategy",
    skills: [
      "Project Management",
      "Strategic Planning",
      "Feasibility Studies",
      "Due Diligence",
      "Market Research",
      "User Research",
      "Brand Strategy",
      "Cross-cultural Business Consulting",
      "International Business",
      "Team Leadership",
      "Community Management",
    ],
  },
  {
    id: "languages",
    title: "Languages",
    icon: "language",
    skills: ["Chinese — Native", "English — Fluent"],
  },
];
