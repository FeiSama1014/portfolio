import Link from "next/link";
import { ArrowLeft, ArrowRight, ExternalLink, Smartphone } from "lucide-react";
import type { Metadata } from "next";
import { QrCode } from "@/components/qr-code";
import {
  Callout,
  Meta,
  OverviewSection,
  Pillar,
  ProcessStep,
} from "@/components/case-study/overview-parts";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "";

// Relative path for same-origin links (works in dev and prod).
const PROTOTYPE_PATH = `${basePath}/projects/anfou/prototype/index.html`;
const CASE_STUDY_URL = `${basePath}/projects/anfou/case-study`;

// Absolute URL for QR codes and anything that must resolve without context.
const PROTOTYPE_ABSOLUTE_URL = `${siteUrl}${PROTOTYPE_PATH}`;

export const metadata: Metadata = {
  title: "AnFou · UX Case Study — Xiang Sean Yao",
  description:
    "A quiet, warm, SMS-first mobile check-in app built around one daily friction: letting the people who care about you know you're okay, without the pressure of a conversation.",
};

export default function AnFouOverviewPage() {
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
          UX Case Study · Seneca INM400 · Self-directed
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
          AnFou <span className="opacity-50">· 安否</span>
        </h1>
        <p className="mt-3 max-w-2xl text-lg opacity-80">
          Let care have a response. A quiet, warm, SMS-first check-in app for
          people separated from the ones who worry about them.
        </p>

        <dl className="mt-6 grid grid-cols-2 gap-4 text-sm sm:grid-cols-4">
          <Meta label="Role" value="Sole Designer & Developer" />
          <Meta label="Year" value="2026" />
          <Meta label="Deliverable" value="Working HTML prototype + slideshow" />
          <Meta label="Tools" value="HTML · CSS · JS · Figma" />
        </dl>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/projects/anfou/case-study"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-background transition hover:opacity-90"
          >
            Read Full Case Study <ArrowRight className="h-4 w-4" />
          </Link>
          <a
            href={PROTOTYPE_PATH}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-5 py-2.5 text-sm font-medium transition hover:border-accent hover:text-accent"
          >
            Open Prototype <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </header>

      {/* The Challenge */}
      <OverviewSection title="The Challenge">
        <p className="text-lg leading-relaxed opacity-85">
          We have more communication tools than ever, yet{" "}
          <strong>reaching out has gotten harder</strong> — especially between
          people who care most. The closer the relationship, the more pressure
          we feel to respond <em>properly</em>. So we say nothing. Not from a
          lack of care, but from the <strong>weight of it</strong>.
        </p>
        <Callout>
          <strong>How might we</strong> reduce the friction of staying in
          touch, so checking in feels like <strong>a habit rather than an
          obligation</strong>?
        </Callout>
      </OverviewSection>

      {/* Personal Connection */}
      <OverviewSection title="Personal Connection">
        <p className="opacity-85">
          This project comes from my own daily experience. As an international
          student in Toronto, far from my family, I leave my mom's messages
          unread for hours — not because I stopped caring, but because even{" "}
          <em>"I'm fine"</em> feels like it needs more energy than I have at
          the end of the day.
        </p>
        <p className="mt-4 opacity-85">
          She never asks me to call more. She just wants to know I woke up
          safe. And I want the same for her.
        </p>
      </OverviewSection>

      {/* Approach */}
      <OverviewSection title="Why AnFou Works">
        <p className="opacity-85">
          Four decisions shape the entire product — each aimed at the
          emotional cost of communication, not the technology of it.
        </p>
        <ul className="mt-5 grid gap-4 sm:grid-cols-2">
          <Pillar
            title="Alarm = Check-in"
            body="Dismiss your morning alarm — that's it. Zero apps opened, zero effort, zero friction. The habit is built into something you already do."
          />
          <Pillar
            title="SMS-First"
            body="Server-routed when online; native SMS when offline. Works for grandma in rural Japan during typhoon season."
          />
          <Pillar
            title="Gentle Nudge"
            body="“3 days without check-in. Call her?” Guides action instead of triggering panic. Care, not crisis."
          />
          <Pillar
            title="Inclusive by Default"
            body="Large font, dark mode, multi-language. Built for the least capable user first. Accessibility is not an add-on."
          />
        </ul>
      </OverviewSection>

      {/* Process */}
      <OverviewSection title="Process">
        <ProcessStep
          n="01"
          title="Why This Matters"
          body="Anchored the opportunity in scale. Existing solutions (messaging apps, safety apps, shock-value check-ins) all depend on stable internet and feel clinical rather than caring. The gap: something quieter, warmer, and more accessible."
        >
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            <MiniStat big="125M+" label="live alone in China" />
            <MiniStat big="#1" label="Japan: most aged society" />
            <MiniStat big="800K+" label="int'l students in Canada / yr" />
            <MiniStat big="150M" label="single households in China by 2030" />
          </div>
        </ProcessStep>

        <ProcessStep
          n="02"
          title="Assumptions & Bias Management"
          body="Before talking to users, wrote down initial assumptions and named four biases with explicit mitigation strategies — listening to lived experience, avoiding leading questions, validating across two distinct focus groups."
        >
          <ul className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            {["Personal", "Technology", "Solution", "Cultural"].map((b) => (
              <li
                key={b}
                className="rounded-xl border border-accent/30 bg-accent/[0.06] px-3 py-2 text-center text-xs font-semibold uppercase tracking-widest text-accent"
              >
                {b} bias
              </li>
            ))}
          </ul>
          <p className="mt-4 rounded-xl border-l-4 border-green-500 bg-green-500/[0.06] p-3 text-xs leading-relaxed">
            <span className="font-semibold text-green-500">
              Mitigation ·
            </span>
            Listen to lived experiences. Avoid leading questions. Validate
            insights across two distinct focus groups.
          </p>
        </ProcessStep>

        <ProcessStep
          n="03"
          title="Personas · A Mother–Daughter Pair"
          body="Two personas built as opposite sides of the same relationship. Empathy maps surfaced that both want the same thing — but existing tools force a conversation neither has energy for."
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <MiniPersona
              photo="/projects/anfou/prototype/assets/images/persona_yuki.jpg"
              name="Yuki Tanaka"
              tag="The Quiet Worrier"
              meta="23 · Grad student · Toronto"
              quote="I don't want to ignore her. I just wish 'I'm okay' didn't have to be a conversation."
            />
            <MiniPersona
              photo="/projects/anfou/prototype/assets/images/persona_megumi.jpg"
              name="Megumi Tanaka"
              tag="The Selfless Worrier"
              meta="58 · Library assistant · Osaka"
              quote="I never ask her to call more. I just want to know she woke up safe today."
            />
          </div>
        </ProcessStep>

        <ProcessStep
          n="04"
          title="Research Triangulation"
          body="Three independent methods converged on the same core insight. Behavioral testing was the sharpest signal — 4 of 5 testers forgot manual check-in by day two, so alarm integration became the core feature, not a nice-to-have."
        >
          <div className="grid gap-3 sm:grid-cols-3">
            <MiniMethod
              kicker="Market"
              title="Comparative Analysis"
              finding="No product combines warmth, minimal friction, and offline capability."
            />
            <MiniMethod
              kicker="Qualitative"
              title="Personas + Empathy Maps"
              finding="Both want the same thing, but existing tools force a conversation."
            />
            <MiniMethod
              kicker="Behavioral"
              title="User Flow Validation"
              finding="Caring is not the problem. Remembering is."
            />
          </div>
          <p className="mt-4 rounded-xl border-l-4 border-accent bg-accent/[0.06] p-3 text-sm leading-relaxed">
            <span className="font-semibold text-accent">Core Insight · </span>
            The problem is the <strong>emotional cost of communication</strong>,
            not the technology. The solution must cost zero effort, or it
            becomes part of the problem.
          </p>
        </ProcessStep>

        <ProcessStep
          n="05"
          title="Design Principles"
          body="Every interaction decision was grounded in theory."
        >
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            <MiniPrinciple title="Hick's Law" lead="One button, one action." />
            <MiniPrinciple
              title="Fogg Behavior Model"
              lead="Motivation + Ability + Prompt converge at 7:30 AM."
            />
            <MiniPrinciple
              title="Progressive Disclosure"
              lead="Complexity available but never forced."
            />
            <MiniPrinciple
              title="Inclusive Design"
              lead="Built for the least capable user first."
            />
          </ul>
        </ProcessStep>

        <ProcessStep
          n="06"
          title="Wireframes · Low → Mid → High Fidelity"
          body="Hand-drawn low-fi for structure, grayscale mid-fi for hierarchy, coral high-fi for brand — 8 screens fully functional in the live prototype."
        >
          <div className="grid grid-cols-4 gap-2">
            {[
              "HF01 Splash Welcome.png",
              "HF03 Home Check in.png",
              "HF04 Alarm.png",
              "HF06 Contacts.png",
            ].map((f) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={f}
                src={`${basePath}/projects/anfou/prototype/assets/images/Hi Fi/${f}`}
                alt=""
                loading="lazy"
                className="w-full rounded-xl border border-foreground/10 bg-foreground/[0.03]"
              />
            ))}
          </div>
        </ProcessStep>

        <ProcessStep
          n="07"
          title="Testing & Iteration"
          body="Assumptive designs tested with five representative users. Four issues surfaced; each drove a concrete change."
        >
          <div className="grid gap-2">
            {[
              [
                "Manual check-in failed by day 2",
                "Alarm-first onboarding as primary path",
              ],
              [
                "Alarm setup buried in settings",
                "Moved to onboarding; zero apps opened",
              ],
              [
                "Emergency alert felt abrupt",
                "Soft nudge with one-tap 'Call?' button",
              ],
              [
                "Mood felt mandatory",
                "Made skippable; added font size + dark mode",
              ],
            ].map(([issue, fix]) => (
              <div
                key={issue}
                className="grid gap-2 sm:grid-cols-[1fr_auto_1fr] sm:items-center"
              >
                <div className="rounded-lg border border-red-500/25 bg-red-500/[0.05] px-3 py-2 text-xs leading-relaxed">
                  <span className="font-semibold text-red-500">Issue · </span>
                  {issue}
                </div>
                <span
                  aria-hidden="true"
                  className="mx-auto text-xs opacity-30 sm:mx-0"
                >
                  →
                </span>
                <div className="rounded-lg border border-green-500/25 bg-green-500/[0.06] px-3 py-2 text-xs leading-relaxed">
                  <span className="font-semibold text-green-500">Fix · </span>
                  {fix}
                </div>
              </div>
            ))}
          </div>
        </ProcessStep>
      </OverviewSection>

      {/* Prototype */}
      <OverviewSection title="Prototype">
        <div className="grid gap-8 rounded-2xl border border-foreground/10 bg-foreground/[0.03] p-6 sm:grid-cols-[auto_1fr] sm:p-8">
          <div className="flex flex-col items-center gap-3">
            <div className="overflow-hidden rounded-xl bg-white p-3">
              <QrCode value={PROTOTYPE_ABSOLUTE_URL} size={160} />
            </div>
            <div className="inline-flex items-center gap-1.5 text-xs opacity-60">
              <Smartphone className="h-3 w-3" /> Scan to open on mobile
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Try it live</h3>
            <p className="mt-2 text-sm leading-relaxed opacity-75">
              The prototype is a self-contained HTML/CSS/JS app — no backend,
              no install. It walks through the full flow: splash, register,
              home check-in, alarm setup, alarm dismiss (= check-in), contacts
              with status, a gentle-nudge contact detail, and settings with
              language and accessibility toggles.
            </p>
            <a
              href={PROTOTYPE_PATH}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
            >
              Open Prototype <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </OverviewSection>

      {/* Reflection */}
      <OverviewSection title="Reflection">
        <div className="space-y-4 text-sm leading-relaxed opacity-85">
          <p>
            <strong>What the project taught me.</strong> The hardest design
            decisions in AnFou were subtractive. Every feature I could imagine
            — mood tags, photo posts, streak leaderboards — made the product
            heavier, which defeated the whole point. The insight that{" "}
            <em>caring is not the problem; remembering is</em> changed the
            primary path from "manual check-in" to "alarm = check-in" in one
            motion.
          </p>
          <p>
            <strong>What I'd do differently.</strong> Ship a two-platform
            native build (iOS + Android) earlier rather than investing this
            much in the HTML prototype. The HTML version is great for
            portfolio, but the SMS-fallback path is the one that matters and
            it's platform-specific.
          </p>
          <p>
            <strong>Takeaway.</strong> The deepest design work happens before
            you open Figma. Naming the bias, naming the emotional cost, and
            choosing the one friction to remove — that's where the product
            gets designed.
          </p>
        </div>
      </OverviewSection>

      {/* spacer */}
      <div aria-hidden="true" className="h-0" />
      {/* footer */}
      <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-foreground/10 pt-8">
        <Link
          href="/#portfolio"
          className="inline-flex items-center gap-2 text-sm opacity-70 transition hover:text-accent hover:opacity-100"
        >
          <ArrowLeft className="h-4 w-4" /> More projects
        </Link>
        <div className="flex flex-wrap gap-3">
          <Link
            href={CASE_STUDY_URL}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
          >
            Full Case Study <ArrowRight className="h-3 w-3" />
          </Link>
          <a
            href={PROTOTYPE_PATH}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
          >
            Prototype <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      </div>
    </div>
  );
}

// -------- Mini preview components for Process steps --------

function MiniStat({ big, label }: { big: string; label: string }) {
  return (
    <div>
      <div className="text-2xl font-bold tracking-tight text-accent sm:text-3xl">
        {big}
      </div>
      <p className="mt-1 text-[11px] leading-snug opacity-70">{label}</p>
    </div>
  );
}

function MiniPersona({
  photo,
  name,
  tag,
  meta,
  quote,
}: {
  photo: string;
  name: string;
  tag: string;
  meta: string;
  quote: string;
}) {
  return (
    <div className="flex gap-4">
      <div className="h-20 w-20 shrink-0 overflow-hidden rounded-xl border border-foreground/10 bg-foreground/5">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`${basePath}${photo}`}
          alt={name}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="min-w-0">
        <p className="text-sm font-semibold">{name}</p>
        <p className="mt-0.5 text-[11px] opacity-60">{meta}</p>
        <span className="mt-1.5 inline-block rounded-full bg-accent/15 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-accent">
          {tag}
        </span>
        <p className="mt-2 text-xs italic leading-relaxed opacity-75">
          "{quote}"
        </p>
      </div>
    </div>
  );
}

function MiniMethod({
  kicker,
  title,
  finding,
}: {
  kicker: string;
  title: string;
  finding: string;
}) {
  return (
    <div className="flex flex-col rounded-xl border border-foreground/10 bg-foreground/[0.02] p-3">
      <p className="text-[10px] font-semibold uppercase tracking-widest text-accent">
        {kicker}
      </p>
      <p className="mt-1 text-sm font-semibold">{title}</p>
      <p className="mt-2 text-xs leading-relaxed opacity-75">{finding}</p>
    </div>
  );
}

function MiniPrinciple({ title, lead }: { title: string; lead: string }) {
  return (
    <li className="rounded-xl border border-foreground/10 bg-foreground/[0.02] p-3">
      <p className="text-xs font-semibold text-accent">{title}</p>
      <p className="mt-1 text-[11px] leading-relaxed opacity-75">{lead}</p>
    </li>
  );
}
