import { ArrowDown } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function Hero() {
  const { greeting, firstName, lastName, title, shortBio } = siteConfig;

  return (
    <section
      id="hero"
      className="relative flex min-h-[80vh] scroll-mt-24 flex-col justify-center overflow-hidden rounded-3xl"
    >
      {/* Background photo — Sean on a film shoot set */}
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`${basePath}/hero-stage.jpg`}
          alt="Sean on a film production set, stage lights overhead"
          className="h-full w-full object-cover"
          style={{ objectPosition: "65% center" }}
        />
      </div>

      {/* Gradient overlay — dark on left for text legibility, fades out right */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/15"
      />
      {/* Extra bottom vignette for scroll cue legibility */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/70 to-transparent"
      />

      <div className="relative z-10 px-6 py-16 text-white sm:px-10 lg:px-14">
        <p className="text-sm uppercase tracking-[0.3em] text-accent">
          {greeting}
        </p>

        <h1 className="mt-4 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
          <span className="text-accent">{firstName}</span> {lastName}
        </h1>

        <p className="mt-4 text-xl font-light opacity-90 sm:text-2xl">
          {title}
        </p>

        <p className="mt-6 max-w-xl text-base leading-relaxed opacity-80">
          {shortBio}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#portfolio"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-background transition hover:opacity-90"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-medium transition hover:border-accent hover:text-accent"
          >
            Contact
          </a>
        </div>

        <a
          href="#about"
          aria-label="Scroll to About"
          className="mt-20 inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] opacity-60 transition hover:text-accent hover:opacity-100"
        >
          Scroll <ArrowDown className="h-3 w-3" />
        </a>
      </div>

      {/* Photo caption · pinned to bottom-right of image area */}
      <p className="absolute bottom-4 right-6 z-10 text-[10px] uppercase tracking-[0.3em] text-white/55 sm:right-10 lg:right-14">
        2018 · Executive Producer · On a feature-film set
      </p>
    </section>
  );
}
