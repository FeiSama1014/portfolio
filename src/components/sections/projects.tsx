"use client";

import { useMemo, useState } from "react";
import { Section } from "../section";
import { ProjectCard } from "../project-card";
import { projects, type ProjectCategory } from "@/lib/content/projects";
import { cn } from "@/lib/cn";

type FilterId = "all" | ProjectCategory;

const FILTERS: { id: FilterId; label: string }[] = [
  { id: "all", label: "All" },
  { id: "game", label: "Games" },
  { id: "ui-ux", label: "UI / UX" },
  { id: "motion", label: "Motion / Video" },
  { id: "graphic", label: "Graphic" },
];

export function Projects() {
  const [active, setActive] = useState<FilterId>("all");

  const filtered = useMemo(
    () => (active === "all" ? projects : projects.filter((p) => p.category === active)),
    [active]
  );

  if (projects.length === 0) return null;

  return (
    <Section id="portfolio" title="Portfolio">
      <div className="mb-8 flex flex-wrap gap-2">
        {FILTERS.map((f) => {
          const isActive = f.id === active;
          const count =
            f.id === "all"
              ? projects.length
              : projects.filter((p) => p.category === f.id).length;
          return (
            <button
              key={f.id}
              type="button"
              onClick={() => setActive(f.id)}
              className={cn(
                "rounded-full border px-4 py-1.5 text-xs font-medium uppercase tracking-widest transition",
                isActive
                  ? "border-accent bg-accent/10 text-accent"
                  : "border-foreground/15 opacity-70 hover:border-foreground/30 hover:opacity-100"
              )}
            >
              {f.label}
              <span className="ml-2 text-[10px] opacity-60">{count}</span>
            </button>
          );
        })}
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </Section>
  );
}
