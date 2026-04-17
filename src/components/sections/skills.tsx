import { Palette, Code2, Compass, Languages as LanguagesIcon } from "lucide-react";
import { Section } from "../section";
import { skillGroups, type SkillGroup } from "@/lib/content/skills";

const iconMap = {
  design: Palette,
  tech: Code2,
  strategy: Compass,
  language: LanguagesIcon,
} as const;

export function Skills() {
  if (skillGroups.length === 0) return null;

  return (
    <Section id="skills" title="Skills">
      <div className="grid gap-4 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <SkillCard key={group.id} group={group} />
        ))}
      </div>
    </Section>
  );
}

function SkillCard({ group }: { group: SkillGroup }) {
  const Icon = iconMap[group.icon];
  return (
    <article className="group rounded-2xl border border-foreground/10 bg-foreground/[0.03] p-6 transition hover:border-accent/40">
      <div className="flex items-center gap-3">
        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-accent/30 bg-accent/10 text-accent">
          <Icon className="h-4 w-4" />
        </span>
        <h3 className="text-base font-semibold uppercase tracking-wide">
          {group.title}
        </h3>
      </div>

      <ul className="mt-5 flex flex-wrap gap-2">
        {group.skills.map((s) => (
          <li
            key={s}
            className="rounded-full border border-foreground/15 px-3 py-1 text-xs opacity-85 transition group-hover:border-foreground/25"
          >
            {s}
          </li>
        ))}
      </ul>

      {group.note && (
        <p className="mt-4 text-xs leading-relaxed opacity-60">{group.note}</p>
      )}
    </article>
  );
}
