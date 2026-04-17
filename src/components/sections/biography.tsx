import { Section } from "../section";
import { siteConfig } from "@/lib/site-config";

export function Biography() {
  const { shortBio, location, availableForWork } = siteConfig;

  return (
    <Section id="about" title="About">
      <div className="grid gap-8 md:grid-cols-[1fr_auto]">
        <div className="space-y-4">
          <p className="text-lg leading-relaxed opacity-85">{shortBio}</p>
          <p className="leading-relaxed opacity-60">
            More about my background, design philosophy, and the work I enjoy
            will land here soon.
          </p>
        </div>

        <dl className="grid grid-cols-1 gap-4 rounded-2xl border border-foreground/10 bg-foreground/[0.03] p-6 text-sm sm:grid-cols-2 md:min-w-[280px] md:grid-cols-1">
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
            <dd className="mt-1 font-medium">{siteConfig.title}</dd>
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
