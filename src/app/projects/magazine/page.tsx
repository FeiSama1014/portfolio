import Link from "next/link";
import { ArrowLeft, ArrowRight, Download } from "lucide-react";
import type { Metadata } from "next";
import {
  Meta,
  OverviewSection,
} from "@/components/case-study/overview-parts";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const PDF_URL = `${basePath}/projects/magazine/magazine.pdf`;

export const metadata: Metadata = {
  title: "Magazine Editorial · Jang Won-young — Xiang Sean Yao",
  description:
    "An 8-page editorial magazine feature on K-Pop star Jang Won-young — first-semester print and typography project at Seneca INM.",
};

export default function MagazinePage() {
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
          Editorial · Print · Seneca INM100 · 1st Semester
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
          "I will become a Jang Won-young who won't let you down."
        </h1>
        <p className="mt-3 max-w-2xl text-lg opacity-80">
          An editorial magazine feature on the K-Pop princess who took the
          internet by storm — from "Wonyoungsm" to a cultural force redefining
          viral stardom.
        </p>

        <dl className="mt-6 grid grid-cols-2 gap-4 text-sm sm:grid-cols-4">
          <Meta label="Role" value="Solo Designer & Writer" />
          <Meta label="Year" value="2024 · 1st Semester" />
          <Meta label="Format" value="8 pages · spreads" />
          <Meta label="Tools" value="InDesign · Photoshop" />
        </dl>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={PDF_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-background transition hover:opacity-90"
          >
            Download PDF <Download className="h-4 w-4" />
          </a>
        </div>
      </header>

      {/* Brief */}
      <OverviewSection title="The Brief">
        <p className="text-lg leading-relaxed opacity-85">
          First-semester editorial project: design a full-spread magazine
          feature that showcases <strong>typography, image pairing, pull
          quotes, and pacing</strong> across multiple pages. I chose K-Pop
          singer <strong>Jang Won-young</strong> of IVE — her August 2024
          "Wonyoungsm" TikTok moment had just become a cultural flashpoint,
          and the story had layers worth writing about: earned fame, online
          authenticity, and the cost of a viral moment.
        </p>
      </OverviewSection>

      {/* Design Approach */}
      <OverviewSection title="Design Approach">
        <div className="grid gap-4 lg:grid-cols-2">
          <div className="rounded-2xl border border-foreground/10 bg-foreground/[0.03] p-5">
            <h3 className="text-sm font-semibold text-accent">
              Typographic System
            </h3>
            <p className="mt-2 text-sm leading-relaxed opacity-85">
              Serif display for editorial pull quotes (italic, ornamental),
              sans-serif body for legibility at small sizes. A consistent
              vertical rhythm across all spreads. Magenta/pink accent for
              callouts — matches the performer's visual brand without shouting.
            </p>
          </div>
          <div className="rounded-2xl border border-foreground/10 bg-foreground/[0.03] p-5">
            <h3 className="text-sm font-semibold text-accent">
              Image–Text Pairing
            </h3>
            <p className="mt-2 text-sm leading-relaxed opacity-85">
              Each spread anchors on a single hero portrait, with body copy
              set in tall columns to create breathing space. Full-bleed
              imagery on opening spread; editorial whitespace in reading
              spreads; duotone split on closing spread to vary visual
              rhythm across the feature.
            </p>
          </div>
        </div>
      </OverviewSection>

      {/* Spreads */}
      <OverviewSection title="Spreads">
        <ul className="space-y-4">
          {[
            {
              n: "01",
              file: "spread01.jpg",
              title: "Opening Spread · Hero Portrait",
              body: "Full-bleed portrait on the left, introduction copy and title treatment on the right. Sets the tone: intimate, confident, slightly stylized.",
            },
            {
              n: "02",
              file: "spread02.jpg",
              title: "Reading Spread · Body Narrative",
              body: "Dense body copy across three columns with an anchor portrait and embedded pull quote. Designed for sustained reading without visual fatigue.",
            },
            {
              n: "03",
              file: "spread03.jpg",
              title: "Closing Spread · Mood & Reflection",
              body: "Split composition — soft pink mood image on the left, editorial portrait on the right, with a pull-quote block bridging the two.",
            },
          ].map((s) => (
            <li
              key={s.n}
              className="overflow-hidden rounded-2xl border border-foreground/10 bg-foreground/[0.03]"
            >
              <figure>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`${basePath}/projects/magazine/${s.file}`}
                  alt={`Spread ${s.n}: ${s.title}`}
                  className="w-full"
                  loading="lazy"
                />
                <figcaption className="border-t border-foreground/10 p-4">
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-xs opacity-50">
                      Spread {s.n}
                    </span>
                    <h3 className="text-sm font-semibold">{s.title}</h3>
                  </div>
                  <p className="mt-2 text-xs leading-relaxed opacity-75">
                    {s.body}
                  </p>
                </figcaption>
              </figure>
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
          href={PDF_URL}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
        >
          Download PDF <ArrowRight className="h-3 w-3" />
        </a>
      </div>
    </div>
  );
}
