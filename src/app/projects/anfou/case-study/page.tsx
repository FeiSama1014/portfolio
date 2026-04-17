"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Heart,
} from "lucide-react";
import { cn } from "@/lib/cn";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

// Same-origin relative path — the slideshow has no QR code so this is fine.
const PROTOTYPE_URL = `${basePath}/projects/anfou/index.html`;

function withBase(p: string) {
  return `${basePath}${p}`;
}

const TOTAL = 15;

export default function AnFouCaseStudyPage() {
  const [index, setIndex] = useState(0);

  const go = useCallback((target: number) => {
    const clamped = Math.max(0, Math.min(TOTAL - 1, target));
    setIndex(clamped);
    if (typeof window !== "undefined") {
      window.history.replaceState(null, "", `#${clamped + 1}`);
    }
  }, []);

  const next = useCallback(() => go(index + 1), [go, index]);
  const prev = useCallback(() => go(index - 1), [go, index]);

  // Read hash on mount
  useEffect(() => {
    const h = window.location.hash.replace("#", "");
    const n = parseInt(h, 10);
    if (!Number.isNaN(n) && n >= 1 && n <= TOTAL) setIndex(n - 1);
  }, []);

  // Keyboard nav
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") {
        e.preventDefault();
        next();
      }
      if (e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault();
        prev();
      }
      if (e.key === "Home") {
        e.preventDefault();
        go(0);
      }
      if (e.key === "End") {
        e.preventDefault();
        go(TOTAL - 1);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev, go]);

  return (
    <div className="flex min-h-[100svh] flex-col">
      {/* Top bar */}
      <header className="flex items-center justify-between border-b border-foreground/10 px-4 py-3 sm:px-6">
        <Link
          href="/projects/anfou"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest opacity-60 transition hover:text-accent hover:opacity-100"
        >
          <ArrowLeft className="h-3 w-3" /> Overview
        </Link>
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs opacity-60">
            {String(index + 1).padStart(2, "0")} / {String(TOTAL).padStart(2, "0")}
          </span>
          <a
            href={PROTOTYPE_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-accent hover:underline"
          >
            Prototype <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      </header>

      {/* Slide area */}
      <main className="relative flex flex-1 items-stretch">
        {/* Prev / Next buttons */}
        <button
          type="button"
          onClick={prev}
          disabled={index === 0}
          aria-label="Previous slide"
          className="group absolute left-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-foreground/15 bg-background/70 backdrop-blur transition hover:border-accent hover:text-accent disabled:pointer-events-none disabled:opacity-20 sm:left-4"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={next}
          disabled={index === TOTAL - 1}
          aria-label="Next slide"
          className="group absolute right-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-foreground/15 bg-background/70 backdrop-blur transition hover:border-accent hover:text-accent disabled:pointer-events-none disabled:opacity-20 sm:right-4"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        <div className="mx-auto flex w-full max-w-6xl flex-1 items-center px-6 py-8 sm:px-12 sm:py-12">
          <SlideRenderer index={index} />
        </div>
      </main>

      {/* Dot pagination */}
      <nav
        aria-label="Slide navigation"
        className="flex flex-wrap justify-center gap-1.5 border-t border-foreground/10 px-4 py-4"
      >
        {Array.from({ length: TOTAL }, (_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => go(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={cn(
              "h-1.5 rounded-full transition",
              i === index
                ? "w-6 bg-accent"
                : "w-1.5 bg-foreground/20 hover:bg-foreground/40"
            )}
          />
        ))}
      </nav>
    </div>
  );
}

// -------- Slide renderer --------

function SlideRenderer({ index }: { index: number }) {
  switch (index) {
    case 0: return <SlideCover />;
    case 1: return <SlideProblem />;
    case 2: return <SlideWhyItMatters />;
    case 3: return <SlideBias />;
    case 4: return <SlidePersonaYuki />;
    case 5: return <SlidePersonaMegumi />;
    case 6: return <SlideResearchTriangulation />;
    case 7: return <SlideDesignPrinciples />;
    case 8: return <SlideLowFi />;
    case 9: return <SlideMidFi />;
    case 10: return <SlideTesting />;
    case 11: return <SlideHiFi />;
    case 12: return <SlideWhyWorks />;
    case 13: return <SlideReflection />;
    case 14: return <SlideThankYou />;
    default: return null;
  }
}

// -------- Reusable slide building blocks --------

function SlideShell({
  kicker,
  title,
  children,
  className,
}: {
  kicker?: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("w-full", className)}>
      {kicker && (
        <p className="text-xs uppercase tracking-[0.3em] text-accent">
          {kicker}
        </p>
      )}
      {title && (
        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          {title}
        </h2>
      )}
      <div className={title ? "mt-8" : undefined}>{children}</div>
    </section>
  );
}

function Card({
  title,
  children,
  tone = "default",
  className,
}: {
  title?: string;
  children: React.ReactNode;
  tone?: "default" | "accent" | "muted" | "success" | "danger";
  className?: string;
}) {
  const toneCls: Record<string, string> = {
    default: "border-foreground/10 bg-foreground/[0.03]",
    accent: "border-accent/30 bg-accent/[0.08]",
    muted: "border-foreground/10 bg-foreground/[0.02]",
    success: "border-green-500/30 bg-green-500/[0.06]",
    danger: "border-red-500/30 bg-red-500/[0.06]",
  };
  const titleTone: Record<string, string> = {
    default: "text-foreground/70",
    accent: "text-accent",
    muted: "text-foreground/60",
    success: "text-green-500",
    danger: "text-red-500",
  };
  return (
    <div
      className={cn(
        "rounded-2xl border p-5 text-sm leading-relaxed",
        toneCls[tone],
        className
      )}
    >
      {title && (
        <h3
          className={cn(
            "text-xs font-semibold uppercase tracking-widest",
            titleTone[tone]
          )}
        >
          {title}
        </h3>
      )}
      <div className={title ? "mt-3" : undefined}>{children}</div>
    </div>
  );
}

// -------- 01 · Cover --------
function SlideCover() {
  return (
    <section className="w-full">
      <div className="mb-8 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/20 text-accent">
        <Heart className="h-5 w-5 fill-current" />
      </div>
      <h1 className="text-6xl font-bold tracking-tight sm:text-7xl lg:text-8xl">
        AnFou
      </h1>
      <p className="mt-2 text-sm uppercase tracking-[0.5em] opacity-60">
        安 · 否
      </p>
      <p className="mt-10 max-w-2xl text-2xl font-light opacity-85 sm:text-3xl">
        Let care have a response.
      </p>
      <p className="mt-16 text-xs uppercase tracking-widest opacity-50">
        Xiang Yao · INM400 · April 2026
      </p>
    </section>
  );
}

// -------- 02 · Problem --------
function SlideProblem() {
  return (
    <SlideShell kicker="Area of Opportunity">
      <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr]">
        <div>
          <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
            How might we reduce the friction of staying in touch, so checking
            in feels like{" "}
            <span className="text-accent">a habit rather than an obligation</span>?
          </h2>
          <span className="mt-4 block h-0.5 w-12 bg-accent" />
          <p className="mt-6 leading-relaxed opacity-80">
            We have more communication tools than ever, yet reaching out feels
            harder. Between close family, even sending a simple{" "}
            <em>"I'm okay"</em> can feel like it needs more. The closer the
            relationship, the greater the pressure to respond properly. So we
            say nothing.
          </p>
          <p className="mt-4 font-medium text-accent">
            Not from a lack of care, but from the weight of it.
          </p>
        </div>

        <Card title="Personal Connection" tone="accent">
          <p>
            This project comes from my own daily experience. As an
            international student in Toronto, far from my family, I leave my
            mom's messages unread for hours. Not because I stopped caring,
            but because even <em>"I'm fine"</em> feels like it needs more
            energy than I have at the end of the day.
          </p>
          <p className="mt-3">
            She never asks me to call more. She just wants to know I woke up
            safe. And I want the same for her.
          </p>
        </Card>
      </div>
    </SlideShell>
  );
}

// -------- 03 · Why This Matters --------
function SlideWhyItMatters() {
  return (
    <SlideShell kicker="Area of Opportunity" title="Why This Matters">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        <Stat big="125M+" label="people live alone in China" />
        <Stat big="#1" label="Japan: most aged society on earth" />
        <Stat big="800K+" label="international students in Canada yearly" />
        <Stat big="150M" label="projected single households in China by 2030" />
      </div>

      <div className="mt-8 grid gap-4 lg:grid-cols-3">
        <Card title="The Paradox">
          We are surrounded by tools for staying connected. Yet more and more
          people find that reaching out has become something they put off —
          especially between close family, where the pressure to respond
          properly is the highest.
        </Card>
        <Card title="Existing Solutions">
          <ul className="space-y-2">
            <li>
              <span className="font-semibold">Messaging apps</span> turn
              check-ins into social tasks requiring a reply.
            </li>
            <li>
              <span className="font-semibold">Safety apps</span> (Life360,
              bSafe) feel clinical and surveillance-oriented, not caring.
            </li>
            <li>
              <span className="font-semibold">"Dead Yet?"</span> proved demand
              but its shock-value branding alienates older users.
            </li>
            <li>All depend on stable internet connectivity.</li>
          </ul>
        </Card>
        <Card title="The Gap" tone="accent">
          Between "social media" and "emergency alert" there is room for
          something <strong>quieter, warmer, and more accessible</strong>.
          Something built around <strong>emotional comfort</strong>, not crisis
          response — and accessible regardless of age, language, or internet
          connectivity.
        </Card>
      </div>
    </SlideShell>
  );
}

function Stat({ big, label }: { big: string; label: string }) {
  return (
    <div>
      <div className="text-4xl font-bold tracking-tight text-accent sm:text-5xl">
        {big}
      </div>
      <p className="mt-2 text-xs opacity-70">{label}</p>
    </div>
  );
}

// -------- 04 · Assumptions & Bias Management --------
function SlideBias() {
  const assumptions = [
    "People living alone often feel anxious when they are temporarily unreachable",
    "A lack of simple communication increases worry for both the individual and their trusted contacts",
    "Existing safety or check-in solutions feel too complex or intrusive for everyday use",
    "Elderly and international students have very different comfort levels with technology",
    "Close relationships carry more communication pressure, not less",
  ];
  const biases = [
    {
      title: "Personal bias",
      body: "Assuming safety anxiety is experienced the same way across different age groups and cultural backgrounds",
    },
    {
      title: "Technology bias",
      body: "Assuming all users are comfortable with smartphone-based solutions and notifications",
    },
    {
      title: "Solution bias",
      body: "Leaning toward simplicity before fully understanding whether users prefer automation or manual control",
    },
    {
      title: "Cultural bias",
      body: "Assuming communication norms are similar across Chinese, Japanese, Korean, and Canadian contexts",
    },
  ];
  return (
    <SlideShell kicker="Research + Bias" title="Assumptions & Bias Management">
      <div className="grid gap-6 lg:grid-cols-2">
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-widest opacity-70">
            Initial Assumptions
          </h3>
          <ul className="mt-3 space-y-2">
            {assumptions.map((a) => (
              <li
                key={a}
                className="rounded-xl border border-foreground/10 bg-foreground/[0.02] p-3 text-sm leading-relaxed"
              >
                {a}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-widest opacity-70">
            Biases Identified & Mitigation
          </h3>
          <ul className="mt-3 space-y-2">
            {biases.map((b) => (
              <li
                key={b.title}
                className="rounded-xl border border-accent/20 bg-accent/[0.04] p-3"
              >
                <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                  {b.title}
                </p>
                <p className="mt-1 text-sm leading-relaxed opacity-85">
                  {b.body}
                </p>
              </li>
            ))}
            <li className="rounded-xl border border-green-500/30 bg-green-500/[0.06] p-3">
              <p className="text-xs font-semibold uppercase tracking-widest text-green-500">
                Mitigation Strategy
              </p>
              <p className="mt-1 text-sm leading-relaxed opacity-85">
                Listen to lived experiences rather than validating pre-existing
                ideas. Avoid leading questions. Validate insights across two
                distinct focus groups.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </SlideShell>
  );
}

// -------- 05 · Persona Yuki --------
function SlidePersonaYuki() {
  return (
    <PersonaSlide
      kind="Qualitative Persona"
      name="Yuki Tanaka"
      tag="The Quiet Worrier"
      age="23"
      pronouns="She/Her"
      location="Toronto, ON, Canada"
      role="Graduate Student, Computer Science"
      extra="Single · Japanese"
      photo="/projects/anfou/assets/images/persona_yuki.jpg"
      bio="Yuki moved to Toronto from Osaka for her master's degree. She has always been on the quieter side — prefers small groups, texts over calls, and needs time alone to recharge. Moving abroad amplified this. Her mother sends a LINE message almost every morning. Yuki sees them hours later and knows she should reply, but the longer she waits the more it feels like she needs to say something more. So she puts it off again."
      goals={[
        "Let mom know she is safe without composing a reply",
        "Reduce the guilt of leaving messages unread",
        "Know her mom is okay without initiating a call",
        "Low-energy connection that respects her need for space",
      ]}
      frustrations={[
        "Even simple replies require social energy she runs out of",
        "The longer she delays, the harder it gets to respond",
        "Video calls feel overwhelming; she avoids them",
        "Worries about mom but asking directly feels awkward",
      ]}
      motivations={[
        "Deeply cares about her mom despite the silence",
        "Values independence but not at the cost of connection",
        "Drawn to tools that are simple and non-intrusive",
        "Motivated by reducing guilt and anxiety",
      ]}
      quote="I don't want to ignore her. I just wish 'I'm okay' didn't have to be a conversation."
    />
  );
}

// -------- 06 · Persona Megumi --------
function SlidePersonaMegumi() {
  return (
    <PersonaSlide
      kind="Quantitative Persona"
      name="Megumi Tanaka"
      tag="The Selfless Worrier"
      age="58"
      pronouns="She/Her"
      location="Osaka, Japan"
      role="Part-time Library Assistant"
      extra="Divorced · Lives alone"
      photo="/projects/anfou/assets/images/persona_megumi.jpg"
      bio="Megumi works three days a week at a local library in Osaka. The rest of her time is quiet. Since Yuki left for Canada, the apartment feels emptier than it used to. She sends Yuki a message every morning on LINE, just something small so Yuki knows she is thinking of her. Most days Yuki replies hours later, sometimes not until the next day. Megumi understands — she remembers being young and busy — but the waiting still makes her anxious."
      goals={[
        "Know Yuki is safe every day without asking directly",
        "Let Yuki know she is okay without it feeling like a demand",
        "Have something notice if she does not get up one morning",
        "Maintain her independence and dignity",
      ]}
      frustrations={[
        "Anxious when Yuki does not reply, but hides it",
        "Most apps are too complex for what she needs",
        "Does not want to seem needy or become a burden",
        "Home internet unreliable during typhoon season",
      ]}
      motivations={[
        "Wants to protect Yuki from worrying about her",
        "Values simple tools that do one thing well",
        "Cares deeply about her daughter despite distance",
        "Quietly fears something happening with no one knowing",
      ]}
      quote="I never ask her to call more. I just want to know she woke up safe today."
    />
  );
}

function PersonaSlide(props: {
  kind: string;
  name: string;
  tag: string;
  age: string;
  pronouns: string;
  location: string;
  role: string;
  extra?: string;
  photo: string;
  bio: string;
  goals: string[];
  frustrations: string[];
  motivations: string[];
  quote: string;
}) {
  return (
    <SlideShell kicker={props.kind}>
      <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
        <div>
          <div className="aspect-square w-full overflow-hidden rounded-2xl border border-foreground/10 bg-foreground/5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={withBase(props.photo)}
              alt={props.name}
              className="h-full w-full object-cover"
            />
          </div>
          <h2 className="mt-4 text-3xl font-bold tracking-tight">{props.name}</h2>
          <p className="mt-1 text-xs opacity-60">
            Age: {props.age} · {props.pronouns}
          </p>
          <p className="mt-0.5 text-xs opacity-60">{props.location}</p>
          <p className="mt-0.5 text-xs opacity-60">{props.role}</p>
          {props.extra && (
            <p className="mt-0.5 text-xs opacity-60">{props.extra}</p>
          )}
          <span className="mt-3 inline-block rounded-full bg-accent/15 px-2.5 py-0.5 text-xs font-medium text-accent">
            {props.tag}
          </span>
        </div>

        <div className="space-y-5">
          <p className="text-sm leading-relaxed opacity-85">{props.bio}</p>

          <div className="grid gap-4 sm:grid-cols-3">
            <PersonaList title="Goals" tone="accent" items={props.goals} />
            <PersonaList
              title="Frustrations"
              tone="danger"
              items={props.frustrations}
            />
            <PersonaList
              title="Motivations"
              tone="success"
              items={props.motivations}
            />
          </div>

          <blockquote className="rounded-xl border-l-4 border-accent bg-accent/[0.06] p-4 text-sm italic leading-relaxed">
            "{props.quote}"
          </blockquote>
        </div>
      </div>
    </SlideShell>
  );
}

function PersonaList({
  title,
  tone,
  items,
}: {
  title: string;
  tone: "accent" | "danger" | "success";
  items: string[];
}) {
  const toneCls: Record<typeof tone, string> = {
    accent: "text-accent",
    danger: "text-red-500",
    success: "text-green-500",
  };
  return (
    <div>
      <h4
        className={cn(
          "text-xs font-semibold uppercase tracking-widest",
          toneCls[tone]
        )}
      >
        {title}
      </h4>
      <ul className="mt-2 space-y-1.5 text-xs leading-relaxed opacity-85">
        {items.map((i) => (
          <li key={i} className="flex gap-2">
            <span className={cn("mt-0.5", toneCls[tone])}>•</span>
            <span>{i}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// -------- 07 · Research Triangulation --------
function SlideResearchTriangulation() {
  return (
    <SlideShell kicker="Research + Bias" title="Research Triangulation">
      <p className="max-w-3xl opacity-80">
        Three independent research methods converged on the same core
        findings, each compensating for the blind spots of the others.
      </p>

      <div className="mt-8 grid gap-4 lg:grid-cols-3">
        <ResearchCard
          kicker="Market Research"
          title="Comparative Analysis"
          body={
            <>
              Analyzed <strong>4 products</strong> across 8 dimensions: daily
              check-in, offline support, emotional tone, elderly accessibility,
              privacy, mood tracking, and nudge systems.
            </>
          }
          finding="A clear gap exists. No product combines emotional warmth, minimal friction, and offline capability."
        />
        <ResearchCard
          kicker="Qualitative Research"
          title="Personas & Empathy Maps"
          body={
            <>
              Two personas developed as a <strong>mother–daughter pair</strong>.
              Empathy maps revealed shared pain from opposite directions: Yuki's
              pressure to reply vs. Megumi's anxiety of waiting.
            </>
          }
          finding="Both want the same thing, but existing tools force a conversation neither has energy for."
        />
        <ResearchCard
          kicker="Behavioral Testing"
          title="User Flow Validation"
          body={
            <>
              Assumptive flows tested against real behavior.{" "}
              <strong>4 out of 5 testers forgot</strong> manual check-in by day
              two. Alarm integration moved from secondary to core feature.
            </>
          }
          finding="Caring is not the problem. Remembering is."
        />
      </div>

      <div className="mt-8 rounded-2xl border border-accent/30 bg-accent/[0.08] p-5">
        <p className="text-xs font-semibold uppercase tracking-widest text-accent">
          Core Insight
        </p>
        <p className="mt-2 text-base leading-relaxed">
          The problem is not about technology. It is about the{" "}
          <strong>emotional cost of communication</strong>. The solution must
          cost zero effort, or it becomes part of the problem.
        </p>
      </div>
    </SlideShell>
  );
}

function ResearchCard({
  kicker,
  title,
  body,
  finding,
}: {
  kicker: string;
  title: string;
  body: React.ReactNode;
  finding: string;
}) {
  return (
    <div className="flex flex-col rounded-2xl border border-foreground/10 bg-foreground/[0.03] p-5">
      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">
        {kicker}
      </p>
      <h3 className="mt-2 text-lg font-semibold">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed opacity-80">{body}</p>
      <div className="mt-auto pt-4">
        <div className="rounded-xl bg-foreground/[0.04] p-3 text-xs leading-relaxed">
          <p className="font-semibold opacity-70">Finding:</p>
          <p className="mt-1 opacity-85">{finding}</p>
        </div>
      </div>
    </div>
  );
}

// -------- 08 · Design Principles --------
function SlideDesignPrinciples() {
  const principles = [
    {
      title: "Hick's Law",
      lead: "One button, one action.",
      body: "No menus, no choices to weigh. The check-in screen presents a single button. Fewer decisions means faster, more reliable daily use.",
    },
    {
      title: "Fogg Behavior Model",
      lead: "Motivation + Ability + Prompt at the same moment.",
      body: "The alarm is the prompt. Dismissing it is the ability. Caring is the motivation. All three converge at 7:30 AM.",
    },
    {
      title: "Progressive Disclosure",
      lead: "Complexity is available but never forced.",
      body: "Megumi sees only the alarm. Yuki can explore mood stats and history. Each user gets the depth they want.",
    },
    {
      title: "Inclusive Design",
      lead: "Built for the least capable user first.",
      body: "Large font toggle, SMS fallback, minimal interaction. Accessibility is the default, not an afterthought.",
    },
  ];
  return (
    <SlideShell kicker="Ideation, Testing + Refinement" title="Design Principles">
      <p className="opacity-80">
        Established theory guided every interaction decision in AnFou.
      </p>
      <ul className="mt-6 grid gap-4 sm:grid-cols-2">
        {principles.map((p) => (
          <li
            key={p.title}
            className="rounded-2xl border border-foreground/10 bg-foreground/[0.03] p-5"
          >
            <h3 className="text-lg font-semibold text-accent">{p.title}</h3>
            <p className="mt-2 text-sm font-medium">{p.lead}</p>
            <p className="mt-2 text-sm leading-relaxed opacity-80">{p.body}</p>
          </li>
        ))}
      </ul>
    </SlideShell>
  );
}

// -------- 09 · Low-Fidelity Sketches --------
function SlideLowFi() {
  const items = [
    ["LF01 Splash Welcome.png", "Splash"],
    ["LF02 Register.png", "Login / Register"],
    ["LF03 Home Check in.jpg", "Home (Check-in)"],
    ["LF04 Alarm.jpg", "Alarm"],
    ["LF05 Alarm Dismiss.jpg", "Alarm Dismiss"],
    ["LF06 Contacts.jpg", "Contacts"],
    ["LF07 Contact Detail.jpg", "Contact Detail (Alert)"],
    ["LF08 Settings.jpg", "Settings"],
  ];
  return (
    <SlideShell
      kicker="Ideation, Testing + Refinement · Step 1 of 3"
      title="Low-Fidelity Sketches"
    >
      <p className="max-w-3xl opacity-80">
        Quick hand-drawn concept sketches exploring layout ideas and interaction
        patterns. The focus is on structure, not detail.
      </p>
      <ul className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {items.map(([file, label]) => (
          <li key={file} className="flex flex-col items-center gap-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={withBase(
                `/projects/anfou/assets/images/Low Fi/${file}`
              )}
              alt={label}
              className="w-full rounded-xl border border-foreground/10 bg-foreground/[0.03]"
              loading="lazy"
            />
            <p className="text-xs opacity-60">{label}</p>
          </li>
        ))}
      </ul>
    </SlideShell>
  );
}

// -------- 10 · Mid-Fidelity Wireframes --------
function SlideMidFi() {
  return (
    <SlideShell
      kicker="Ideation, Testing + Refinement · Step 2 of 3"
      title="Mid-Fidelity Wireframes"
    >
      <p className="max-w-3xl opacity-80">
        Structural layout and information hierarchy before visual design is
        applied. Grayscale, no branding, pure architecture.
      </p>
      <figure className="mt-8 overflow-hidden rounded-2xl border border-foreground/10 bg-foreground/[0.03]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={withBase("/projects/anfou/slide10.jpg")}
          alt="Mid-fidelity wireframe grid"
          className="w-full"
          loading="lazy"
        />
      </figure>
    </SlideShell>
  );
}

// -------- 11 · Testing & Iteration --------
function SlideTesting() {
  const issues = [
    {
      title: "Manual check-in fails quickly.",
      body: "4 out of 5 participants forgot to open the app by day two. Caring is not the issue, remembering is.",
    },
    {
      title: "Alarm setup buried in settings.",
      body: "Users who discovered the alarm path found it easier, but most never found it during onboarding.",
    },
    {
      title: "Emergency alert too abrupt.",
      body: "“My mom would panic if she got that message without warning.” The 48h direct alert felt too sudden.",
    },
    {
      title: "Mood felt mandatory.",
      body: "Two testers skipped check-in entirely because they did not want to pick an emoji. No action available when contacts missed days.",
    },
  ];
  const changes = [
    {
      title: "Alarm-first onboarding.",
      body: "Alarm setup moved into onboarding flow, framed as “the easiest way to check in.”",
    },
    {
      title: "Primary path redesigned.",
      body: "Alarm check-in is now the recommended path. Manual remains as secondary. Zero apps opened.",
    },
    {
      title: "Soft nudge with call button.",
      body: "Before emergency alert, contacts see “3 days without check-in” with a one-tap “Call?” button.",
    },
    {
      title: "Mood optional + accessibility.",
      body: "Mood made skippable. Added large font toggle and dark mode for accessibility.",
    },
  ];
  return (
    <SlideShell kicker="Ideation, Testing + Refinement" title="Testing & Iteration">
      <p className="max-w-3xl opacity-80">
        Assumptive designs were tested with five representative users. Feedback
        was integrated into validated versions.
      </p>
      <div className="mt-8 grid gap-4 lg:grid-cols-2">
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-widest text-red-500">
            Issues Identified
          </h3>
          <ul className="mt-3 space-y-2">
            {issues.map((i) => (
              <li
                key={i.title}
                className="rounded-xl border border-red-500/30 bg-red-500/[0.05] p-3"
              >
                <p className="text-sm font-semibold text-red-500">{i.title}</p>
                <p className="mt-1 text-xs leading-relaxed opacity-85">{i.body}</p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-widest text-green-500">
            Changes Implemented
          </h3>
          <ul className="mt-3 space-y-2">
            {changes.map((c) => (
              <li
                key={c.title}
                className="rounded-xl border border-green-500/30 bg-green-500/[0.06] p-3"
              >
                <p className="text-sm font-semibold text-green-500">{c.title}</p>
                <p className="mt-1 text-xs leading-relaxed opacity-85">{c.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SlideShell>
  );
}

// -------- 12 · High-Fidelity Prototype --------
function SlideHiFi() {
  const screens = [
    ["HF01 Splash Welcome.png", "Splash"],
    ["HF02 Register.png", "Login / Register"],
    ["HF03 Home Check in.png", "Home (Check-in)"],
    ["HF04 Alarm.png", "Alarm"],
    ["HF05 Alarm Dismiss.png", "Alarm Dismiss"],
    ["HF06 Contacts.png", "Contacts"],
    ["HF07 Contact Detail.png", "Contact Detail (Alert)"],
    ["HF08 Settings.png", "Settings"],
  ];
  return (
    <SlideShell
      kicker="Ideation, Testing + Refinement · Step 3 of 3"
      title="High-Fidelity Prototype"
    >
      <p className="max-w-3xl opacity-80">
        Final visual design with brand colors, typography, icons, and
        interactive states. Every screen is fully functional in the live HTML
        prototype.
      </p>
      <ul className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {screens.map(([file, label]) => (
          <li key={file} className="flex flex-col items-center gap-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={withBase(
                `/projects/anfou/assets/images/Hi Fi/${file}`
              )}
              alt={label}
              className="w-full rounded-xl border border-foreground/10 bg-foreground/[0.03]"
              loading="lazy"
            />
            <p className="text-xs opacity-60">{label}</p>
          </li>
        ))}
      </ul>
      <div className="mt-6 flex justify-center">
        <a
          href={PROTOTYPE_URL}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-background transition hover:opacity-90"
        >
          Open Live Prototype <ExternalLink className="h-4 w-4" />
        </a>
      </div>
    </SlideShell>
  );
}

// -------- 13 · Why AnFou Works --------
function SlideWhyWorks() {
  const pillars = [
    {
      title: "Alarm = Check-in",
      body: "Dismiss your morning alarm. That's it. Zero apps opened, zero effort, zero friction. The habit is built into something you already do.",
    },
    {
      title: "SMS-First",
      body: "Server-routed when online, native SMS when offline. Works for grandma in rural Japan during typhoon season.",
    },
    {
      title: "Gentle Nudge",
      body: "“3 days without check-in. Call her?” Guides action instead of triggering panic. Care, not crisis.",
    },
    {
      title: "Inclusive by Default",
      body: "Large font, dark mode, multi-language. Built for the least capable user first. Accessibility is not an add-on.",
    },
  ];
  return (
    <SlideShell kicker="Final Solution" title="Why AnFou Works">
      <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {pillars.map((p) => (
          <li
            key={p.title}
            className="flex flex-col rounded-2xl border border-foreground/10 bg-foreground/[0.03] p-5"
          >
            <h3 className="text-lg font-semibold text-accent">{p.title}</h3>
            <p className="mt-3 text-sm leading-relaxed opacity-85">{p.body}</p>
          </li>
        ))}
      </ul>
    </SlideShell>
  );
}

// -------- 14 · Reflection --------
function SlideReflection() {
  return (
    <SlideShell kicker="Final Solution" title="Reflection">
      <div className="max-w-3xl space-y-4 text-sm leading-relaxed opacity-85">
        <p>
          <strong>What the project taught me.</strong> The hardest design
          decisions in AnFou were subtractive. Every feature I could imagine
          — mood tags, photo posts, streak leaderboards — made the product
          heavier, which defeated the whole point. The insight that{" "}
          <em>caring is not the problem; remembering is</em> changed the
          primary path from manual check-in to alarm = check-in in one motion.
        </p>
        <p>
          <strong>What I'd do differently.</strong> Ship a two-platform native
          build earlier rather than investing this much in the HTML prototype.
          The HTML version is great for portfolio review, but the SMS fallback
          path is the one that matters and it is platform-specific.
        </p>
        <p>
          <strong>Takeaway.</strong> The deepest design work happens before
          you open Figma. Naming the bias, naming the emotional cost, and
          choosing the one friction to remove — that is where the product gets
          designed.
        </p>
      </div>
    </SlideShell>
  );
}

// -------- 15 · Thank You --------
function SlideThankYou() {
  return (
    <section className="w-full">
      <div className="mb-8 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/20 text-accent">
        <Heart className="h-5 w-5 fill-current" />
      </div>
      <h2 className="text-6xl font-bold tracking-tight sm:text-7xl">
        Thank You
      </h2>
      <p className="mt-6 text-lg opacity-80">Let care have a response.</p>

      <div className="mt-12 flex flex-wrap gap-3">
        <a
          href={PROTOTYPE_URL}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-background transition hover:opacity-90"
        >
          Open Live Prototype <ExternalLink className="h-4 w-4" />
        </a>
        <Link
          href="/projects/anfou"
          className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-5 py-2.5 text-sm font-medium transition hover:border-accent hover:text-accent"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Overview
        </Link>
        <Link
          href="/#portfolio"
          className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-5 py-2.5 text-sm font-medium transition hover:border-accent hover:text-accent"
        >
          More Work <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <p className="mt-16 text-xs uppercase tracking-widest opacity-50">
        Xiang Yao · INM400 · April 2026
      </p>
    </section>
  );
}
