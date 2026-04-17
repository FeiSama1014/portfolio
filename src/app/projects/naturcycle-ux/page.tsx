import Link from "next/link";
import { ArrowLeft, Download, ExternalLink, Smartphone } from "lucide-react";
import type { Metadata } from "next";
import { QrCode } from "@/components/qr-code";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const FIGMA_URL =
  "https://www.figma.com/proto/sIZE7sIE4DpSQ1Keys86D7/NatureCycle_Wireframes?node-id=42-661&starting-point-node-id=17%3A688";
const PDF_URL = `${basePath}/projects/naturcycle/case-study.pdf`;

export const metadata: Metadata = {
  title: "NaturCycle · UX Case Study — Xiang Sean Yao",
  description:
    "A 35-page end-to-end UX case study for a fictional sustainable skincare brand. Research, personas, IA, wireframes, and high-fidelity Figma prototype.",
};

export default function NaturCycleCaseStudyPage() {
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
          UX Case Study · Seneca INM300
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
          NaturCycle
        </h1>
        <p className="mt-3 max-w-2xl text-lg opacity-80">
          A sustainable-skincare mobile app: where eco-conscious purchases,
          closed-loop recycling, and personalized skin care live under one
          roof.
        </p>

        <dl className="mt-6 grid grid-cols-2 gap-4 text-sm sm:grid-cols-4">
          <Meta label="Role" value="Sole UX Designer" />
          <Meta label="Year" value="2025" />
          <Meta label="Deliverable" value="35-page case study + prototype" />
          <Meta label="Tools" value="Figma · Adobe Suite" />
        </dl>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={FIGMA_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-background transition hover:opacity-90"
          >
            Open Figma Prototype <ExternalLink className="h-4 w-4" />
          </a>
          <a
            href={PDF_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-5 py-2.5 text-sm font-medium transition hover:border-accent hover:text-accent"
          >
            Download Full PDF (35 pages) <Download className="h-4 w-4" />
          </a>
        </div>
      </header>

      {/* Problem */}
      <Section title="The Challenge">
        <p className="text-lg leading-relaxed opacity-85">
          NaturCycle is a fictional sustainable-skincare brand fighting to be
          heard in a market saturated with{" "}
          <strong>greenwashing</strong>. Consumers struggle to verify
          sustainable claims or believe that eco-friendly products can match
          traditional skincare on efficacy.
        </p>
        <Callout>
          <strong>How might we</strong> help environmentally conscious
          consumers overcome their skepticism about "recycled beauty" and
          easily find products that match their specific skin needs?
        </Callout>
      </Section>

      {/* Approach */}
      <Section title="Approach">
        <p className="opacity-85">
          Translate NaturCycle's values — closed-loop recycling, transparent
          sourcing — into a digital identity built on three pillars:
        </p>
        <ul className="mt-5 grid gap-4 sm:grid-cols-3">
          <Pillar
            title="Seamless Integration"
            body="Merge e-commerce with a physical waste-submission recycling program in one intuitive flow."
          />
          <Pillar
            title="Educational Transparency"
            body="Visualize the impact of sustainable choices; prove recycled ingredients are safe and effective."
          />
          <Pillar
            title="Personalized Care"
            body="AI-driven skin analysis for tailored routines, moving past one-size-fits-all skincare."
          />
        </ul>
      </Section>

      {/* Process */}
      <Section title="Process">
        <ProcessStep
          n="01"
          title="Comparative Analysis"
          body="Benchmarked Caudalie, Lush, Ethique, and The Ordinary across 7 dimensions — registration, catalog, skin analysis, sustainability education, recycling, loyalty, impact tracking — using a success / standard / failure rubric to surface differentiation opportunities."
          image="p10.jpg"
          imageAlt="Comparative matrix benchmarking four competitors"
        />
        <ProcessStep
          n="02"
          title="Personas"
          body="Two personas — Sophie (22, environmental-studies student and explorer archetype) and Lina (34, spa owner and caregiver archetype) — each iterated from Assumptive to Validated after user interviews."
          image="p11.jpg"
          imageAlt="Persona profile for Sophie Tan"
        />
        <ProcessStep
          n="03"
          title="Empathy Mapping"
          body="SAY / HEAR / SEE / DO / PAINS / GAINS mapped for both personas to tie emotional drivers to concrete design decisions."
          image="p14.jpg"
          imageAlt="Empathy map synthesizing user feelings and motivations"
        />
        <ProcessStep
          n="04"
          title="User Flow Iteration"
          body="Assumptive flow tested with users surfaced a key gap: users wanted to jump from community UGC posts directly to product pages. The validated flow adds that shortcut."
          image="p19.jpg"
          imageAlt="User flow before and after iteration"
        />
        <ProcessStep
          n="05"
          title="Information Architecture"
          body="Three interconnected hubs — Shop, Community, Recycling — structured to surface any core feature within 3 taps. Recycling and Skin Analysis elevated to match brand values."
          image="p22.jpg"
          imageAlt="IA site map"
        />
        <ProcessStep
          n="06"
          title="User Journey Map"
          body="A 7-stage emotional arc from Awareness through Complete, naming opportunities at each step (welcome-back badges, 'Shop This Look' overlays on UGC, gamified unboxing posts)."
          image="p23.jpg"
          imageAlt="End-to-end user journey map"
        />
        <ProcessStep
          n="07"
          title="Wireframes — Sketch → A/B → Validated"
          body="Eight 1-minute speed sketches, then two refined concepts A/B-tested with peers. Version A (narrative-driven, hero-led) won — described as 'more peaceful, more natural, and easier to follow' — and advanced to mid- and high-fidelity."
          image="p27.jpg"
          imageAlt="Eight-minute speed sketches and A/B testing"
        />
        <ProcessStep
          n="08"
          title="High-Fidelity Screens"
          body="Eight screens finalized: Sign In / Sign Up, Home, Catalog, Product, Bag, Account, Community, Favorites — all bridged via the validated UX flow."
          image="p30.jpg"
          imageAlt="High-fidelity mobile app screens"
        />
      </Section>

      {/* Prototype */}
      <Section title="Prototype">
        <div className="grid gap-8 rounded-2xl border border-foreground/10 bg-foreground/[0.03] p-6 sm:grid-cols-[auto_1fr] sm:p-8">
          <div className="flex flex-col items-center gap-3">
            <div className="overflow-hidden rounded-xl bg-white p-3">
              <QrCode value={FIGMA_URL} size={160} />
            </div>
            <div className="inline-flex items-center gap-1.5 text-xs opacity-60">
              <Smartphone className="h-3 w-3" /> Scan to open on mobile
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Try it live</h3>
            <p className="mt-2 text-sm leading-relaxed opacity-75">
              A high-fidelity interactive prototype in Figma simulates the full
              app — including the Waste Submission flow, Skin Analysis entry
              points, and the Community-to-Product shortcut added after user
              testing.
            </p>
            <a
              href={FIGMA_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
            >
              Open in Figma <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </Section>

      {/* Reflection */}
      <Section title="Reflection">
        <div className="space-y-4 text-sm leading-relaxed opacity-85">
          <p>
            <strong>What the process taught me.</strong> Researching
            competitors in a space I'd never worked in — Caudalie, Lush,
            Ethique, The Ordinary — trained me to analyze market gaps and
            translate them into digital opportunities. Personas and empathy
            maps were the hinge that kept every screen tied back to a specific
            user goal.
          </p>
          <p>
            <strong>Hardest part.</strong> Balancing content-rich educational
            resources with a streamlined shopping experience inside one IA.
            Iterating the User Flow let me resolve it by splitting the
            experience into distinct but interconnected Shop and Community
            hubs, with bridges between them (like the UGC-to-product shortcut
            surfaced in testing).
          </p>
          <p>
            <strong>Takeaway.</strong> The case study reinforced how much
            continuous evaluation matters — decisions that feel obvious when
            designing often reveal themselves to be wrong the moment a real
            user touches the screen.
          </p>
        </div>
      </Section>

      <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-foreground/10 pt-8">
        <Link
          href="/#portfolio"
          className="inline-flex items-center gap-2 text-sm opacity-70 transition hover:text-accent hover:opacity-100"
        >
          <ArrowLeft className="h-4 w-4" /> More projects
        </Link>
        <div className="flex flex-wrap gap-3">
          <a
            href={FIGMA_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
          >
            Figma Prototype <ExternalLink className="h-3 w-3" />
          </a>
          <a
            href={PDF_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
          >
            Full PDF <Download className="h-3 w-3" />
          </a>
        </div>
      </div>
    </div>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-[10px] uppercase tracking-widest opacity-50">
        {label}
      </dt>
      <dd className="mt-1 text-sm font-medium">{value}</dd>
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-14">
      <h2 className="relative inline-block text-xs font-semibold uppercase tracking-[0.3em]">
        {title}
        <span className="absolute -bottom-2 left-0 h-0.5 w-10 bg-accent" />
      </h2>
      <div className="mt-8">{children}</div>
    </section>
  );
}

function Callout({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="mt-6 rounded-2xl border-l-4 border-accent bg-foreground/[0.04] p-5 text-base leading-relaxed">
      {children}
    </blockquote>
  );
}

function Pillar({ title, body }: { title: string; body: string }) {
  return (
    <li className="rounded-2xl border border-foreground/10 bg-foreground/[0.03] p-5">
      <h3 className="text-sm font-semibold text-accent">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed opacity-80">{body}</p>
    </li>
  );
}

function ProcessStep({
  n,
  title,
  body,
  image,
  imageAlt,
}: {
  n: string;
  title: string;
  body: string;
  image: string;
  imageAlt: string;
}) {
  return (
    <article className="mt-10 first:mt-0">
      <div className="flex items-baseline gap-4">
        <span className="text-xs font-mono opacity-50">{n}</span>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <p className="mt-3 max-w-3xl text-sm leading-relaxed opacity-80">{body}</p>
      <figure className="mt-5 overflow-hidden rounded-2xl border border-foreground/10 bg-foreground/[0.03]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`${basePath}/projects/naturcycle/${image}`}
          alt={imageAlt}
          loading="lazy"
          className="w-full"
        />
      </figure>
    </article>
  );
}
