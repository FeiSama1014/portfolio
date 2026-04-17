export type Education = {
  school: string;
  degree: string;
  credential?: string;
  campus?: string;
  location?: string;
  start: string;
  end: string;
  description?: string;
  focusAreas?: string[];
  url?: string;
};

export const education: Education[] = [
  {
    school: "Seneca Polytechnic",
    degree: "Interactive Media Design",
    credential: "Ontario College Diploma",
    campus: "Seneca@York",
    location: "Toronto, Canada",
    start: "2024",
    end: "2026",
    description:
      "Two-year program balancing creative, business, and technical approaches to designing, developing, and managing digital media and multimedia applications.",
    focusAreas: [
      "UX/UI Design",
      "Motion Graphics",
      "Web & App Development",
      "3D Environments",
      "Audio & Video",
      "Interactive & Immersive Design",
      "Gamification",
    ],
    url: "https://www.senecapolytechnic.ca/programs/fulltime/INM.html",
  },
];
