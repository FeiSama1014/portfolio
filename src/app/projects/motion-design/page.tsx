import Link from "next/link";
import { ArrowLeft, ArrowRight, ExternalLink, PlayCircle } from "lucide-react";
import type { Metadata } from "next";
import {
  Meta,
  OverviewSection,
} from "@/components/case-study/overview-parts";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const YT_ID = "_0b6ZvPTN5w";
const YT_WATCH_URL = `https://youtu.be/${YT_ID}`;
const YT_EMBED_URL = `https://www.youtube-nocookie.com/embed/${YT_ID}`;
const MILANOTE_URL =
  "https://app.milanote.com/1VlRTc1jMHYc5P/a4-motion-design-preproduction?p=jAmkty7p2Aa";

export const metadata: Metadata = {
  title: "Under Cloud · Motion Design — Xiang Sean Yao",
  description:
    "A lyrical, atmospheric motion-design piece — the emotional arc of a song translated into color, light, and motion. Solo work for Seneca INM; pre-production planned on a live Milanote board.",
};

export default function MotionDesignPage() {
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
          Motion Design · Seneca INM · Solo
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
          Under Cloud
        </h1>
        <p className="mt-3 max-w-2xl text-lg opacity-80">
          A 50-second lyrical motion piece — a soul looking up through
          drifting clouds, burdened by regret yet reaching for hope. The
          emotional arc of the song rendered as color, light, and motion.
        </p>

        <dl className="mt-6 grid grid-cols-2 gap-4 text-sm sm:grid-cols-4">
          <Meta label="Role" value="Solo Designer & Animator" />
          <Meta label="Year" value="2025" />
          <Meta label="Duration" value="0:50 (song edit)" />
          <Meta label="Tools" value="After Effects · Unity3D" />
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
      <OverviewSection title="Watch the Piece">
        <figure className="overflow-hidden rounded-2xl border border-foreground/10 bg-black">
          <div className="relative aspect-video w-full">
            <iframe
              src={YT_EMBED_URL}
              title="Under Cloud — Motion Design"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
              className="absolute inset-0 h-full w-full border-0"
            />
          </div>
        </figure>
      </OverviewSection>

      {/* Concept */}
      <OverviewSection title="Concept & Intent">
        <p className="text-lg leading-relaxed opacity-85">
          A lyrical, atmospheric interpretation of the song's core idea. The
          goal is <strong>not to illustrate the lyrics literally</strong> but
          to translate their emotional trajectory into abstract visuals,
          minimalist typography, and symbolic imagery.
        </p>
        <blockquote className="mt-6 rounded-2xl border-l-4 border-accent bg-foreground/[0.04] p-5 text-sm italic leading-relaxed">
          "Overcoming even time and space, may my gaze, though fraught with
          sin, lead you on to happiness.
          <br />
          Under the drifting clouds, even though the ages may fade, with this
          unchanging life, I can keep shining for you."
          <footer className="mt-3 text-xs uppercase not-italic tracking-widest opacity-60">
            — Core lyrics, "Under Cloud"
          </footer>
        </blockquote>
      </OverviewSection>

      {/* Three emotional phases */}
      <OverviewSection title="The Emotional Arc">
        <p className="opacity-85">
          Animation is guided by three emotional modes. Each has its own
          pacing, palette, and motion language.
        </p>
        <ul className="mt-6 grid gap-4 sm:grid-cols-3">
          <Phase
            n="01"
            title="Ethereal Entry"
            palette={["#dbe6f0", "#f2f5f8", "#c6d4e1"]}
            motion="Slow, floating. Long ease-ins and ease-outs. Objects glide without obvious gravity."
            body="Weightless, dreamlike calm above the clouds. Pale blues, soft whites, gentle haze."
          />
          <Phase
            n="02"
            title="Melancholic Fall"
            palette={["#3f4f78", "#5b5a84", "#6c7488"]}
            motion="Slightly slower pacing. Subtle downward pulls, small camera drifts, pauses that create stillness."
            body="Emotional gravity, doubt, inner conflict. Deeper blues, muted violets, cool grays."
          />
          <Phase
            n="03"
            title="Redemptive Glow"
            palette={["#e6a85a", "#f3c58b", "#c78a4e"]}
            motion="Gradual increase in brightness and energy. Upward motion, arcs that lift toward the light, gentle accelerations into the climax."
            body="Light breaking through shadows, moving toward peace. Warm golds and soft oranges emerging through the blue."
          />
        </ul>
      </OverviewSection>

      {/* Storyboard · 7 scenes */}
      <OverviewSection title="Storyboard · 7 Scenes">
        <p className="opacity-85">
          The 50-second arc is mapped scene-by-scene, audio-synced, from
          night-atmosphere baseline through emotional drop to calm daytime
          resolution.
        </p>
        <ol className="mt-6 space-y-3">
          {SCENES.map((s) => (
            <li
              key={s.n}
              className="grid gap-x-5 gap-y-3 rounded-xl border border-foreground/10 bg-foreground/[0.03] p-4 sm:grid-cols-[auto_1fr]"
            >
              <div className="flex flex-col">
                <span className="font-mono text-xs opacity-50">
                  Storyboard {s.n}
                </span>
                <span className="mt-1 whitespace-nowrap text-xs uppercase tracking-widest text-accent">
                  {s.phase}
                </span>
              </div>
              <div>
                <p className="text-sm font-semibold">{s.title}</p>
                <p className="mt-1 text-xs leading-relaxed opacity-80">
                  {s.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </OverviewSection>

      {/* Motion principles & type treatment */}
      <OverviewSection title="Motion Principles & Typography">
        <div className="grid gap-4 lg:grid-cols-2">
          <div className="rounded-2xl border border-foreground/10 bg-foreground/[0.03] p-5">
            <h3 className="text-sm font-semibold text-accent">
              Animation Principles
            </h3>
            <ul className="mt-3 space-y-1.5 text-sm leading-relaxed opacity-85">
              <li>
                <strong>Follow-through + Slow In/Out</strong> — breathing,
                organic motion.
              </li>
              <li>
                <strong>Timing & Staging</strong> — emphasize emotional beats.
              </li>
              <li>
                <strong>Gestalt</strong> (proximity, alignment, figure–ground)
                — group phrases into rhythmic clusters.
              </li>
            </ul>
          </div>
          <div className="rounded-2xl border border-foreground/10 bg-foreground/[0.03] p-5">
            <h3 className="text-sm font-semibold text-accent">
              Typography & Lyrics
            </h3>
            <ul className="mt-3 space-y-1.5 text-sm leading-relaxed opacity-85">
              <li>
                <strong>Minimalist, sparing</strong> — only a few key phrases
                from the lyrics.
              </li>
              <li>
                <strong>Serif or serif-like</strong> — to feel poetic and
                timeless.
              </li>
              <li>
                <strong>Disintegration</strong> — occasional text dissolving
                into particles, mirroring "ages may fade."
              </li>
            </ul>
          </div>
        </div>
      </OverviewSection>

      {/* Craft decision callout */}
      <OverviewSection title="A Production Decision">
        <div className="rounded-2xl border-l-4 border-accent bg-foreground/[0.04] p-5 text-sm leading-relaxed opacity-85">
          <p>
            Mid-production I <strong>moved typography from the opening to
            Storyboard 7 (the resolution)</strong>. Text at the top was
            disrupting the slow low-mood build-up and competing with the eye
            trace I wanted the viewer to follow.
          </p>
          <p className="mt-3">
            This fits the wider approach of keeping typography to a minimum
            and relying on <strong>camera language, eye trace, and color</strong>{" "}
            to do the emotional work.
          </p>
        </div>
      </OverviewSection>

      {/* Inspiration */}
      <OverviewSection title="Primary Reference">
        <p className="opacity-85">
          The emotional structure is modeled on the ending sequence (4:03) of
          the official CG promotional video for <strong>Final Fantasy VIII
          — "Eyes On Me"</strong> — one of the most iconic transitions in
          Final Fantasy cinematics: despair → collapse → light emergence →
          emotional resolution.
        </p>
        <ul className="mt-4 grid gap-3 sm:grid-cols-3">
          <MiniTechnique
            title="Color as Emotional State"
            body="Despair: desaturated tones, dark blues, greys. Hope: warm tones emerging. Resolution: bright, soft daylight."
          />
          <MiniTechnique
            title="Light as Narrative Device"
            body="Light enters gradually, not suddenly. Direction shifts upward as mood improves. Brightness maps to emotional openness."
          />
          <MiniTechnique
            title="Motion & Camera"
            body="Darkness scenes: slower, heavier, downward motion. Transition: softer but more dynamic. Resolution: open compositions."
          />
        </ul>
      </OverviewSection>

      {/* Process */}
      <OverviewSection title="Process">
        <p className="opacity-85">
          Every scene, reference, palette, and animation decision was planned
          on a live <strong>Milanote</strong> board before a single keyframe
          was set — brief → mood → storyboards → style frames → rough
          cut → final.
        </p>

        <a
          href={MILANOTE_URL}
          target="_blank"
          rel="noreferrer"
          className="group mt-6 block overflow-hidden rounded-2xl border border-foreground/10 bg-foreground/[0.03] transition hover:border-accent/40"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`${basePath}/projects/motion-design/preproduction-canvas.jpg`}
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

const SCENES = [
  {
    n: "1",
    phase: "Ethereal → Melancholic",
    title: "Establishing Low Mood / Night Atmosphere",
    body: "Introduces the emotional baseline of quietness, nighttime stillness, and subtle uncertainty — the narrative starting point.",
  },
  {
    n: "2",
    phase: "Melancholic",
    title: "Mood Dimming / Increasing Emotional Weight",
    body: "Emotional space becoming heavier and more enclosed. Slipping deeper into emotional darkness; tension builds.",
  },
  {
    n: "3",
    phase: "Melancholic",
    title: "Emotional Descent / Approaching the Low Point",
    body: "Introspective and depressive stage; internal rhythm slows. Aligned with the song's darker, slower section.",
  },
  {
    n: "4",
    phase: "Melancholic",
    title: "Emotional Collapse / The Drop",
    body: "Narrative's breaking point — sudden impact, collapse, or hitting bottom. Emotional control at its lowest.",
  },
  {
    n: "5",
    phase: "Transition",
    title: "First Signs of Warmth / Transition Toward Hope",
    body: "Beginning of emotional recovery — warmth and clarity slowly returning. Lighter tones emerge.",
  },
  {
    n: "6",
    phase: "Redemptive",
    title: "Breakthrough Moment / Rising Energy",
    body: "Point where clarity breaks through, energy rises, and emotional momentum shifts decisively upward.",
  },
  {
    n: "7",
    phase: "Redemptive",
    title: "Calm Daytime Resolution / Emotional Peace",
    body: "Journey concludes with calm, stability, and openness — fully resolving the earlier tension. Typography lands here.",
  },
];

function Phase({
  n,
  title,
  palette,
  motion,
  body,
}: {
  n: string;
  title: string;
  palette: string[];
  motion: string;
  body: string;
}) {
  return (
    <li className="flex flex-col rounded-2xl border border-foreground/10 bg-foreground/[0.03] p-5">
      <span className="font-mono text-xs opacity-50">{n}</span>
      <h3 className="mt-1 text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-xs leading-relaxed opacity-80">{body}</p>

      <div className="mt-4 flex gap-1.5">
        {palette.map((c) => (
          <span
            key={c}
            aria-hidden="true"
            className="h-6 flex-1 rounded"
            style={{ background: c }}
          />
        ))}
      </div>
      <p className="mt-3 border-t border-foreground/10 pt-3 text-[11px] leading-relaxed opacity-70">
        <span className="font-semibold opacity-80">Motion · </span>
        {motion}
      </p>
    </li>
  );
}

function MiniTechnique({ title, body }: { title: string; body: string }) {
  return (
    <li className="rounded-xl border border-foreground/10 bg-foreground/[0.02] p-4">
      <h4 className="text-xs font-semibold uppercase tracking-widest text-accent">
        {title}
      </h4>
      <p className="mt-2 text-xs leading-relaxed opacity-80">{body}</p>
    </li>
  );
}
