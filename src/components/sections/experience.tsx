import { Briefcase } from "lucide-react";
import { Fragment } from "react";
import { Section } from "../section";
import { experience } from "@/lib/content/experience";

function renderBullet(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-semibold text-foreground">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return <Fragment key={i}>{part}</Fragment>;
  });
}

export function Experience() {
  if (experience.length === 0) return null;

  return (
    <Section id="experience" title="Experience">
      <ol className="relative space-y-6 border-l border-foreground/10 pl-8">
        {experience.map((exp, i) => (
          <li key={`${exp.company}-${i}`} className="relative">
            <span
              aria-hidden="true"
              className="absolute -left-[34px] top-6 h-3 w-3 rounded-full border-2 border-background bg-accent ring-2 ring-accent/30"
            />
            <article className="group relative rounded-2xl border border-foreground/10 bg-foreground/[0.03] p-6 transition hover:border-accent/40">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-base font-semibold uppercase tracking-wide">
                  {exp.company}
                </h3>
                <span className="text-xs uppercase tracking-[0.2em] opacity-60">
                  {exp.start} — {exp.end}
                </span>
              </div>

              <p className="mt-3 text-lg font-medium text-accent">{exp.role}</p>

              {exp.location && (
                <p className="mt-1 text-sm opacity-60">{exp.location}</p>
              )}

              {exp.summary && (
                <p className="mt-4 text-sm italic leading-relaxed opacity-80">
                  {exp.summary}
                </p>
              )}

              {exp.bullets && exp.bullets.length > 0 && (
                <ul className="mt-4 space-y-2 text-sm leading-relaxed">
                  {exp.bullets.map((b, bi) => (
                    <li key={bi} className="flex gap-3">
                      <span aria-hidden="true" className="mt-1 text-accent">
                        ▸
                      </span>
                      <span className="opacity-85">{renderBullet(b)}</span>
                    </li>
                  ))}
                </ul>
              )}

              {exp.tags && exp.tags.length > 0 && (
                <ul className="mt-5 flex flex-wrap gap-2">
                  {exp.tags.map((t) => (
                    <li
                      key={t}
                      className="rounded-full border border-foreground/15 px-3 py-1 text-xs opacity-80"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              )}

              <Briefcase
                aria-hidden="true"
                className="absolute right-6 top-6 h-8 w-8 opacity-10 transition group-hover:text-accent group-hover:opacity-30"
              />
            </article>
          </li>
        ))}
      </ol>
    </Section>
  );
}
