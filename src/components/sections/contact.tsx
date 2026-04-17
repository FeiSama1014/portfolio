import { ArrowUpRight, CircleDot, Mail, MapPin } from "lucide-react";
import { Section } from "../section";
import { siteConfig } from "@/lib/site-config";
import { SocialIcon } from "../social-icon";

export function Contact() {
  const { email, location, availableForWork, socials, firstName } = siteConfig;

  return (
    <Section id="contact" title="Contact">
      <div className="grid gap-8 rounded-2xl border border-foreground/10 bg-foreground/[0.03] p-6 sm:p-8 lg:grid-cols-[1fr_auto]">
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Let&apos;s work together.
          </h3>
          <p className="max-w-xl leading-relaxed opacity-80">
            {availableForWork ? (
              <>
                I&apos;m currently <strong>open to opportunities</strong> —
                Toronto, North America, or remote. The fastest way to reach me
                is email. I reply within a day or two.
              </>
            ) : (
              <>
                Not actively looking right now, but always happy to talk about
                good design, film, or a project that genuinely needs both.
              </>
            )}
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            {email && (
              <a
                href={`mailto:${email}`}
                className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-background transition hover:opacity-90"
              >
                <Mail className="h-4 w-4" />
                {email}
              </a>
            )}
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-5 py-2.5 text-sm font-medium transition hover:border-accent hover:text-accent"
              >
                <SocialIcon icon={s.icon} />
                {s.label}
                <ArrowUpRight className="h-3.5 w-3.5 opacity-60" />
              </a>
            ))}
          </div>
        </div>

        <aside className="flex flex-col gap-4 rounded-xl border border-foreground/10 bg-foreground/[0.04] p-5 text-sm lg:min-w-[240px]">
          {availableForWork && (
            <div className="inline-flex items-center gap-2 self-start rounded-full border border-green-500/30 bg-green-500/10 px-2.5 py-0.5 text-xs text-green-500">
              <CircleDot className="h-3 w-3" />
              Open to opportunities
            </div>
          )}
          <div>
            <p className="text-[10px] uppercase tracking-widest opacity-50">
              Based in
            </p>
            <p className="mt-1 flex items-center gap-2 text-sm font-medium">
              <MapPin className="h-3.5 w-3.5 text-accent" />
              {location}
            </p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-widest opacity-50">
              Go-by
            </p>
            <p className="mt-1 text-sm font-medium">{firstName}</p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-widest opacity-50">
              Time zone
            </p>
            <p className="mt-1 text-sm font-medium">Eastern (Toronto)</p>
          </div>
        </aside>
      </div>
    </Section>
  );
}
