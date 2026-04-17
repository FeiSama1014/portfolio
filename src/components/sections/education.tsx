import { ExternalLink, GraduationCap } from "lucide-react";
import { Section } from "../section";
import { education } from "@/lib/content/education";

export function Education() {
  if (education.length === 0) return null;

  return (
    <Section id="education" title="Education">
      <ul className="space-y-4">
        {education.map((item, i) => (
          <li
            key={`${item.school}-${i}`}
            className="group relative rounded-2xl border border-foreground/10 bg-foreground/[0.03] p-6 transition hover:border-accent/40"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-base font-semibold uppercase tracking-wide">
                {item.school}
              </h3>
              <span className="text-xs uppercase tracking-[0.2em] opacity-60">
                {item.start} — {item.end}
              </span>
            </div>

            <p className="mt-3 text-xl font-medium text-accent">
              {item.degree}
            </p>

            <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm opacity-60">
              {item.credential && <span>{item.credential}</span>}
              {item.credential && (item.campus || item.location) && (
                <span aria-hidden="true">·</span>
              )}
              {item.campus && <span>{item.campus}</span>}
              {item.campus && item.location && <span aria-hidden="true">·</span>}
              {item.location && <span>{item.location}</span>}
            </div>

            {item.description && (
              <p className="mt-4 text-sm leading-relaxed opacity-80">
                {item.description}
              </p>
            )}

            {item.focusAreas && item.focusAreas.length > 0 && (
              <ul className="mt-4 flex flex-wrap gap-2">
                {item.focusAreas.map((area) => (
                  <li
                    key={area}
                    className="rounded-full border border-foreground/15 px-3 py-1 text-xs opacity-80"
                  >
                    {area}
                  </li>
                ))}
              </ul>
            )}

            {item.url && (
              <a
                href={item.url}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-accent hover:underline"
              >
                Program page <ExternalLink className="h-3 w-3" />
              </a>
            )}

            <GraduationCap
              aria-hidden="true"
              className="absolute right-6 top-6 h-8 w-8 opacity-10 transition group-hover:opacity-30 group-hover:text-accent"
            />
          </li>
        ))}
      </ul>
    </Section>
  );
}
