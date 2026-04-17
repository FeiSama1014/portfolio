import { Section } from "../section";
import { siteConfig } from "@/lib/site-config";

export function Biography() {
  const { longBio, location, title, availableForWork } = siteConfig;
  const paragraphs = longBio.split(/\n\n+/);

  return (
    <Section id="about" title="About">
      <div className="grid gap-8 md:grid-cols-[1fr_auto]">
        <div className="space-y-4 text-base leading-relaxed opacity-85">
          {paragraphs.map((p, i) => (
            <p key={i} className={i === 0 ? "text-lg" : undefined}>
              {p}
            </p>
          ))}
        </div>

        <dl className="grid grid-cols-1 gap-4 rounded-2xl border border-foreground/10 bg-foreground/[0.03] p-6 text-sm sm:grid-cols-2 md:min-w-[240px] md:grid-cols-1">
          <div>
            <dt className="text-xs uppercase tracking-widest opacity-50">
              Location
            </dt>
            <dd className="mt-1 font-medium">{location}</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-widest opacity-50">
              Role
            </dt>
            <dd className="mt-1 font-medium">{title}</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-widest opacity-50">
              Status
            </dt>
            <dd className="mt-1 font-medium">
              {availableForWork ? "Open to opportunities" : "Not available"}
            </dd>
          </div>
        </dl>
      </div>
    </Section>
  );
}
