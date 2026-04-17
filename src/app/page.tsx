import { CvCard } from "@/components/cv-card";
import { Hero } from "@/components/sections/hero";
import { Biography } from "@/components/sections/biography";
import { Education } from "@/components/sections/education";
import { Experience } from "@/components/sections/experience";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { Contact } from "@/components/sections/contact";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-[320px_minmax(0,1fr)]">
        <CvCard />

        <main className="min-w-0">
          <Hero />
          <Biography />
          <Projects />
          <Experience />
          <Skills />
          <Education />
          <Contact />
        </main>
      </div>
    </div>
  );
}
