import { ArrowDown } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function Hero() {
  const { greeting, firstName, lastName, title, shortBio } = siteConfig;

  return (
    <section
      id="hero"
      className="relative flex min-h-[80vh] scroll-mt-24 flex-col justify-center py-16"
    >
      <div className="relative z-10">
        <p className="text-sm uppercase tracking-[0.3em] text-accent">
          {greeting}
        </p>

        <h1 className="mt-4 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
          <span className="text-accent">{firstName}</span> {lastName}
        </h1>

        <p className="mt-4 text-xl font-light opacity-80 sm:text-2xl">
          {title}
        </p>

        <p className="mt-6 max-w-xl text-base leading-relaxed opacity-70">
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
            className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-6 py-3 text-sm font-medium transition hover:border-accent hover:text-accent"
          >
            Contact
          </a>
        </div>

        <a
          href="#about"
          aria-label="Scroll to About"
          className="mt-20 inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] opacity-50 transition hover:text-accent hover:opacity-100"
        >
          Scroll <ArrowDown className="h-3 w-3" />
        </a>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-accent/10 blur-3xl"
      />
    </section>
  );
}
