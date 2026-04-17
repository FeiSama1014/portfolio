import Link from "next/link";
import {
  ArrowRight,
  ExternalLink,
  Film,
  Gamepad2,
  Heart,
  Image as ImageIcon,
  LayoutDashboard,
} from "lucide-react";
import type { Project, ProjectCategory } from "@/lib/content/projects";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const categoryMeta: Record<ProjectCategory, { label: string; icon: typeof Gamepad2 }> = {
  game: { label: "Game", icon: Gamepad2 },
  "ui-ux": { label: "UI / UX", icon: LayoutDashboard },
  motion: { label: "Motion", icon: Film },
  graphic: { label: "Graphic", icon: ImageIcon },
};

// Custom HTML-rendered covers keyed by project id.
// Used when an image cover would be too noisy or off-brand.
const customCovers: Record<string, () => React.ReactNode> = {
  anfou: AnFouCover,
};

export function ProjectCard({ project }: { project: Project }) {
  const meta = categoryMeta[project.category];
  const Icon = meta.icon;

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-foreground/10 bg-foreground/[0.03] transition hover:border-accent/40">
      <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-gradient-to-br from-accent/5 via-foreground/[0.04] to-accent/10">
        {customCovers[project.id] ? (
          customCovers[project.id]()
        ) : project.cover ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={`${basePath}${project.cover}`}
            alt={project.title}
            className="h-full w-full object-cover transition group-hover:scale-105"
          />
        ) : (
          <Icon
            aria-hidden="true"
            className="h-14 w-14 text-accent/30 transition group-hover:scale-110 group-hover:text-accent/50"
          />
        )}
        <span className="absolute left-3 top-3 rounded-full border border-foreground/20 bg-background/70 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider backdrop-blur">
          {meta.label}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-baseline justify-between gap-2">
          <h3 className="text-base font-semibold">{project.title}</h3>
          {project.year && (
            <span className="shrink-0 text-xs opacity-50">{project.year}</span>
          )}
        </div>

        <p className="mt-2 text-sm leading-relaxed opacity-75">
          {project.tagline}
        </p>

        {project.tools && project.tools.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-1.5">
            {project.tools.map((t) => (
              <li
                key={t}
                className="rounded-full border border-foreground/15 px-2.5 py-0.5 text-[10px] uppercase tracking-wider opacity-70"
              >
                {t}
              </li>
            ))}
          </ul>
        )}

        {(project.detailHref || (project.links && project.links.length > 0)) && (
          <div className="mt-4 flex flex-wrap items-center gap-4 border-t border-foreground/10 pt-4">
            {project.detailHref && (
              <Link
                href={project.detailHref}
                className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-widest text-accent hover:underline"
              >
                View Case Study <ArrowRight className="h-3 w-3" />
              </Link>
            )}
            {project.links?.map((l) => (
              <a
                key={l.url}
                href={l.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-xs uppercase tracking-widest text-accent/80 hover:text-accent hover:underline"
              >
                {l.label} <ExternalLink className="h-3 w-3" />
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

function AnFouCover() {
  return (
    <div
      className="flex h-full w-full flex-col items-center justify-center text-white transition group-hover:scale-[1.02]"
      style={{ background: "#E0734A" }}
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/20">
        <Heart className="h-4 w-4 fill-current" />
      </div>
      <h3 className="mt-3 text-3xl font-bold tracking-tight">AnFou</h3>
      <p className="mt-1 text-[10px] uppercase tracking-[0.5em] opacity-80">
        安 · 否
      </p>
    </div>
  );
}
