import Link from "next/link";
import { ArrowLeft, ArrowRight, ExternalLink, PlayCircle } from "lucide-react";
import type { Metadata } from "next";
import {
  Meta,
  OverviewSection,
} from "@/components/case-study/overview-parts";

const YT_ID = "IUjVTsME2_w";
const YT_WATCH_URL = `https://www.youtube.com/watch?v=${YT_ID}`;
const YT_EMBED_URL = `https://www.youtube-nocookie.com/embed/${YT_ID}`;

export const metadata: Metadata = {
  title: "Show Reel — Xiang Sean Yao",
  description:
    "A compilation reel of illustration, graphic design, motion design, and video editing work from Seneca INM and personal projects.",
};

export default function DemoReelPage() {
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
          Show Reel · Interactive Media Design
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
          Sean · Show Reel
        </h1>
        <p className="mt-3 max-w-2xl text-lg opacity-80">
          A compilation of illustration, graphic design, motion design, and
          video editing — selected work from Seneca INM coursework and
          personal projects.
        </p>

        <dl className="mt-6 grid grid-cols-2 gap-4 text-sm sm:grid-cols-4">
          <Meta label="Role" value="Solo" />
          <Meta label="Year" value="2024 – 2026" />
          <Meta label="Format" value="Short-form compilation" />
          <Meta label="Tools" value="Adobe Suite · Unity · Blender" />
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
        </div>
      </header>

      {/* Video embed */}
      <OverviewSection title="Watch the Reel">
        <figure className="overflow-hidden rounded-2xl border border-foreground/10 bg-black">
          <div className="relative aspect-video w-full">
            <iframe
              src={YT_EMBED_URL}
              title="Sean — Show Reel"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
              className="absolute inset-0 h-full w-full border-0"
            />
          </div>
        </figure>
      </OverviewSection>

      {/* What's Inside */}
      <OverviewSection title="What's Inside">
        <p className="opacity-80">
          Work in the reel spans the{" "}
          <strong>full Adobe Creative Suite plus Unity and Blender</strong>{" "}
          for 3D — picking whichever tool fits the medium best rather than
          forcing one pipeline.
        </p>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          <Category
            title="Illustration"
            tools="Photoshop · Illustrator · Fresco"
            body="Original character and texture-led illustration work — digital drawing, ink-and-print feel, bold color."
          />
          <Category
            title="Graphic Design"
            tools="Illustrator · InDesign · Photoshop"
            body="Layout, editorial, and poster work — typography systems and compositional hierarchy."
          />
          <Category
            title="Motion Design"
            tools="After Effects · Illustrator · Media Encoder"
            body="Motion graphics — animated logos, transitions, kinetic typography, lyrical pieces."
          />
          <Category
            title="Video Editing & Post"
            tools="Premiere Pro · Audition · Lightroom"
            body="Edit pacing and rhythm, color grading, sound-design integration."
          />
          <Category
            title="3D Rendering"
            tools="Unity · Blender"
            body="3D modeling, lighting, and real-time / offline rendering — used both as standalone shots and as raw footage driven into motion pieces."
          />
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
          <PlayCircle className="h-4 w-4" /> Watch on YouTube{" "}
          <ArrowRight className="h-3 w-3" />
        </a>
      </div>
    </div>
  );
}

function Category({
  title,
  tools,
  body,
}: {
  title: string;
  tools: string;
  body: string;
}) {
  return (
    <li className="rounded-2xl border border-foreground/10 bg-foreground/[0.03] p-5">
      <h3 className="text-sm font-semibold text-accent">{title}</h3>
      <p className="mt-1 text-[10px] uppercase tracking-widest opacity-50">
        {tools}
      </p>
      <p className="mt-3 text-sm leading-relaxed opacity-80">{body}</p>
    </li>
  );
}
