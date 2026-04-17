import Link from "next/link";
import { ArrowLeft, ArrowRight, ExternalLink, PlayCircle } from "lucide-react";
import type { Metadata } from "next";
import {
  Meta,
  OverviewSection,
} from "@/components/case-study/overview-parts";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const YT_ID = "B4P3dQSpa8c";
const YT_WATCH_URL = `https://www.youtube.com/watch?v=${YT_ID}`;
const YT_EMBED_URL = `https://www.youtube-nocookie.com/embed/${YT_ID}`;
const MILANOTE_URL =
  "https://app.milanote.com/1VnrMV1nHG0k9y?p=1Mo4JFRuvUj";

export const metadata: Metadata = {
  title: "Burger_Munch · Unboxing Experience — Xiang Sean Yao",
  description:
    "Tech Launch for a Burger — a fictional brand campaign that presents an everyday meal like a highly-anticipated product unboxing. Three chapters from sterile anticipation to chaotic joy.",
};

export default function BurgerMunchPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
      <Link
        href="/#portfolio"
        className="inline-flex items-center gap-2 text-xs uppercase tracking-widest opacity-60 transition hover:text-accent hover:opacity-100"
      >
        <ArrowLeft className="h-3 w-3" /> Back to Portfolio
      </Link>

      {/* Hero */}
      <header className="mt-8 border-b border-foreground/10 pb-10">
        <p className="text-xs uppercase tracking-[0.3em] text-accent">
          Motion & Video · Seneca INM340 · Team of 3
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
          Burger_Munch{" "}
          <span className="opacity-50">· Unboxing Experience</span>
        </h1>
        <p className="mt-3 max-w-2xl text-lg opacity-80">
          A fictional burger brand launched like a tech product. Three chapters
          from sterile anticipation to chaotic joy.
        </p>

        <dl className="mt-6 grid grid-cols-2 gap-4 text-sm sm:grid-cols-4">
          <Meta label="Role" value="Production Manager" />
          <Meta label="Year" value="2026" />
          <Meta label="Deliverable" value="Short-form brand film" />
          <Meta label="Tools" value="After Effects · Premiere · 3D" />
        </dl>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={YT_WATCH_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-background transition hover:opacity-90"
          >
            Watch on YouTube <ExternalLink className="h-4 w-4" />
          </a>
          <a
            href={MILANOTE_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-5 py-2.5 text-sm font-medium transition hover:border-accent hover:text-accent"
          >
            Pre-production Board <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </header>

      {/* Video embed */}
      <OverviewSection title="Watch the Film">
        <figure className="overflow-hidden rounded-2xl border border-foreground/10 bg-black">
          <div className="relative aspect-video w-full">
            <iframe
              src={YT_EMBED_URL}
              title="Burger_Munch — Unboxing Experience"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
              className="absolute inset-0 h-full w-full border-0"
            />
          </div>
        </figure>
      </OverviewSection>

      {/* The Brief */}
      <OverviewSection title="The Brief">
        <p className="text-lg leading-relaxed opacity-85">
          Burger_Munch is a fictional fast-food brand built for people who{" "}
          <em>live fast and love bold flavors</em>. The mission — deliver small
          bursts of happiness in everyday life — needed a visual identity that
          matches how the audience actually eats today:{" "}
          <strong>between screens, on the go, in short attention windows</strong>.
        </p>
        <p className="mt-4 opacity-80">
          The brief: produce a short-form social spot that makes an ordinary
          meal feel cinematic. The insight: treat it like a{" "}
          <strong>tech product launch</strong>.
        </p>
      </OverviewSection>

      {/* Look & Feel */}
      <OverviewSection title="Look & Feel">
        <p className="opacity-85">
          The style blends the precision of a tech launch with the warmth of
          comfort food. The visual arc transitions from sleek and minimal (cool
          light, symmetrical framing) to colorful, messy, and joyful (warm
          tones, glistening sauces, vibrant textures). The film is about the{" "}
          <strong>ritual of eating</strong> — the anticipation and the reveal —
          transforming a simple burger into a cinematic experience of discovery.
        </p>
        <figure className="mt-6 overflow-hidden rounded-2xl border border-foreground/10 bg-foreground/[0.03]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`${basePath}/projects/burger-munch/deck05.jpg`}
            alt="Three-chapter arc: anticipation → reveal → joy"
            className="w-full"
            loading="lazy"
          />
        </figure>
      </OverviewSection>

      {/* Three-Chapter Arc */}
      <OverviewSection title="Three-Chapter Arc">
        <ul className="grid gap-4 sm:grid-cols-3">
          <ChapterCard
            n="01"
            title="The Anticipation"
            subtitle="Product Launch Mode"
            body="Cool tones, sharp light, minimal composition. The focus is on the sterile, deliberate actions of opening the package — like unveiling a new device."
          />
          <ChapterCard
            n="02"
            title="The Reveal"
            subtitle="From Tech to Taste"
            body="The palette shifts to rich, warm hues. Mechanical precision gives way to pure sensory indulgence — melting cheese, rising steam, glistening sauce."
          />
          <ChapterCard
            n="03"
            title="The Joy"
            subtitle="Unbox Happiness"
            body="The rhythm accelerates. Cool atmosphere explodes into vibrant motion and sound, capturing the moment hunger turns into fast, human joy."
          />
        </ul>
      </OverviewSection>

      {/* Sound & Editing */}
      <OverviewSection title="Sound & Editing">
        <div className="grid gap-4 lg:grid-cols-2">
          <div className="rounded-2xl border border-foreground/10 bg-foreground/[0.03] p-5">
            <h3 className="text-sm font-semibold text-accent">
              Sound as Story
            </h3>
            <p className="mt-2 text-sm leading-relaxed opacity-85">
              Opening: sterile audio — mechanical clicks, seal breaking —
              typical of a tech unboxing. As the burger is revealed, a low
              electronic pulse begins. The first bite triggers warm, immersive
              ASMR (sizzling, crunching, sauce dripping). Sound evolves from{" "}
              <em>cold precision</em> to <em>chaotic joy</em>, designed as
              replayable sonic branding for short-form platforms.
            </p>
          </div>
          <div className="rounded-2xl border border-foreground/10 bg-foreground/[0.03] p-5">
            <h3 className="text-sm font-semibold text-accent">
              Editing Rhythm
            </h3>
            <p className="mt-2 text-sm leading-relaxed opacity-85">
              Cuts start slow and calculated, echoing a luxury reveal. Rhythm
              builds; cuts become quick and dynamic — minimalist cool to
              sensory overload. Transitions follow the experience's logic:
              unwrap → reveal → bite → joy. The final sequence is fast-paced
              and designed to loop.
            </p>
          </div>
        </div>
      </OverviewSection>

      {/* Process */}
      <OverviewSection title="Process">
        <p className="opacity-85">
          A creative deck locked the concept and visual language; a live{" "}
          <strong>Milanote</strong> board planned every scene, reference, and
          production step before shooting.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <figure className="overflow-hidden rounded-2xl border border-foreground/10 bg-foreground/[0.03]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`${basePath}/projects/burger-munch/deck01.jpg`}
              alt="Creative deck cover"
              className="w-full"
              loading="lazy"
            />
            <figcaption className="border-t border-foreground/10 p-3 text-xs uppercase tracking-widest opacity-60">
              Creative Deck · 8 pages
            </figcaption>
          </figure>
          <a
            href={MILANOTE_URL}
            target="_blank"
            rel="noreferrer"
            className="group overflow-hidden rounded-2xl border border-foreground/10 bg-foreground/[0.03] transition hover:border-accent/40"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`${basePath}/projects/burger-munch/preproduction-canvas.jpg`}
              alt="Pre-production Milanote board — click to open"
              className="w-full transition group-hover:opacity-90"
              loading="lazy"
            />
            <div className="flex items-center justify-between border-t border-foreground/10 p-3 text-xs uppercase tracking-widest">
              <span className="opacity-60">
                Pre-production Canvas · Milanote
              </span>
              <span className="inline-flex items-center gap-1 text-accent">
                Open live board <ExternalLink className="h-3 w-3" />
              </span>
            </div>
          </a>
        </div>
      </OverviewSection>

      {/* Reflection · cross-career continuity */}
      <OverviewSection title="A Note on Continuity">
        <div className="rounded-2xl border-l-4 border-accent bg-foreground/[0.04] p-5 text-sm leading-relaxed opacity-85">
          <p>
            I took the <strong>Production Manager</strong> role on this team
            — and it turned out to be a direct cross-validation of my earlier
            years as an <strong>executive producer on feature films</strong>{" "}
            (200+ crew, full pipeline from script through distribution). The
            daily muscles were the same, just miniaturized:{" "}
            <strong>building the shoot schedule, coordinating locations,
            dispatching crew on set, making time-pressure calls</strong>{" "}
            between takes.
          </p>
          <p className="mt-3">
            Interactive Media Design isn't a break from the film track — it's
            where it plugs back in, this time with the tools to design and
            ship the whole thing myself.
          </p>
        </div>
      </OverviewSection>

      {/* Credits */}
      <OverviewSection title="Credits">
        <p className="text-sm opacity-70">
          Seneca INM340 · Team of 3 · Group 10
        </p>
        <ul className="mt-3 flex flex-wrap gap-2 text-sm">
          {["Charles Ramirez", "Jun Cheng", "Xiang Yao"].map((name) => (
            <li
              key={name}
              className="rounded-full border border-foreground/15 bg-foreground/[0.03] px-3 py-1"
            >
              {name}
            </li>
          ))}
        </ul>
      </OverviewSection>

      <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-foreground/10 pt-8">
        <Link
          href="/#portfolio"
          className="inline-flex items-center gap-2 text-sm opacity-70 transition hover:text-accent hover:opacity-100"
        >
          <ArrowLeft className="h-4 w-4" /> More projects
        </Link>
        <a
          href={YT_WATCH_URL}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
        >
          <PlayCircle className="h-4 w-4" /> Watch on YouTube <ArrowRight className="h-3 w-3" />
        </a>
      </div>
    </div>
  );
}

function ChapterCard({
  n,
  title,
  subtitle,
  body,
}: {
  n: string;
  title: string;
  subtitle: string;
  body: string;
}) {
  return (
    <li className="rounded-2xl border border-foreground/10 bg-foreground/[0.03] p-5">
      <div className="flex items-baseline gap-3">
        <span className="font-mono text-xs opacity-50">{n}</span>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <p className="mt-1 text-xs uppercase tracking-widest text-accent">
        {subtitle}
      </p>
      <p className="mt-3 text-sm leading-relaxed opacity-80">{body}</p>
    </li>
  );
}
