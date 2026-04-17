import { MapPin, Phone, Mail, CircleDot } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { SocialIcon } from "./social-icon";

export function CvCard() {
  const {
    firstName,
    lastName,
    fullName,
    shortBio,
    avatar,
    location,
    phone,
    email,
    availableForWork,
    socials,
  } = siteConfig;

  return (
    <aside className="flex flex-col gap-6 rounded-2xl border border-foreground/10 bg-foreground/[0.03] p-6 lg:sticky lg:top-6 lg:max-h-[calc(100vh-3rem)] lg:overflow-y-auto">
      <div className="flex flex-col items-center text-center">
        <div
          className="flex h-32 w-32 items-center justify-center rounded-full border-2 border-accent/40 bg-foreground/5 bg-cover bg-center text-3xl font-semibold text-accent"
          style={{ backgroundImage: `url(${avatar})` }}
          role="img"
          aria-label={fullName}
        >
          <span className="select-none opacity-60">
            {firstName[0]}
            {lastName[0]}
          </span>
        </div>

        <h3 className="mt-4 text-2xl font-semibold">
          <span className="text-accent">{firstName}</span> {lastName}
        </h3>
        <p className="mt-1 text-xs uppercase tracking-[0.2em] opacity-60">
          {fullName}
        </p>

        {availableForWork && (
          <span className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-green-500/30 bg-green-500/10 px-2.5 py-0.5 text-xs text-green-500">
            <CircleDot className="h-3 w-3" />
            Available for work
          </span>
        )}

        <p className="mt-4 text-sm leading-relaxed opacity-75">
          {shortBio}{" "}
          <a
            href="#contact"
            className="text-accent underline-offset-4 hover:underline"
          >
            Get in touch
          </a>
        </p>
      </div>

      <ul className="space-y-3 text-sm">
        <li className="flex items-start gap-3">
          <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
          <span>{location}</span>
        </li>
        {phone && (
          <li className="flex items-start gap-3">
            <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
            <a href={`tel:${phone}`} className="hover:text-accent">
              {phone}
            </a>
          </li>
        )}
        {email && (
          <li className="flex items-start gap-3">
            <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
            <a href={`mailto:${email}`} className="break-all hover:text-accent">
              {email}
            </a>
          </li>
        )}
      </ul>

      {socials.length > 0 && (
        <ul className="flex flex-wrap justify-center gap-2">
          {socials.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target="_blank"
                rel="noreferrer"
                title={s.label}
                aria-label={s.label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-foreground/15 transition hover:border-accent hover:text-accent"
              >
                <SocialIcon icon={s.icon} />
              </a>
            </li>
          ))}
        </ul>
      )}
    </aside>
  );
}
