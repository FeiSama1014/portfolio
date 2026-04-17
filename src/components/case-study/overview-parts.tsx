import { cn } from "@/lib/cn";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-[10px] uppercase tracking-widest opacity-50">
        {label}
      </dt>
      <dd className="mt-1 text-sm font-medium">{value}</dd>
    </div>
  );
}

export function OverviewSection({
  title,
  children,
  className,
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("mt-14", className)}>
      <h2 className="relative inline-block text-xs font-semibold uppercase tracking-[0.3em]">
        {title}
        <span className="absolute -bottom-2 left-0 h-0.5 w-10 bg-accent" />
      </h2>
      <div className="mt-8">{children}</div>
    </section>
  );
}

export function Callout({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="mt-6 rounded-2xl border-l-4 border-accent bg-foreground/[0.04] p-5 text-base leading-relaxed">
      {children}
    </blockquote>
  );
}

export function Pillar({
  title,
  body,
}: {
  title: string;
  body: string;
}) {
  return (
    <li className="rounded-2xl border border-foreground/10 bg-foreground/[0.03] p-5">
      <h3 className="text-sm font-semibold text-accent">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed opacity-80">{body}</p>
    </li>
  );
}

export function ProcessStep({
  n,
  title,
  body,
  image,
  imageAlt,
  children,
}: {
  n: string;
  title: string;
  body: string;
  image?: string;
  imageAlt?: string;
  children?: React.ReactNode;
}) {
  return (
    <article className="mt-10 first:mt-0">
      <div className="flex items-baseline gap-4">
        <span className="font-mono text-xs opacity-50">{n}</span>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <p className="mt-3 max-w-3xl text-sm leading-relaxed opacity-80">
        {body}
      </p>
      {image && (
        <figure className="mt-5 overflow-hidden rounded-2xl border border-foreground/10 bg-foreground/[0.03]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`${basePath}${image}`}
            alt={imageAlt ?? ""}
            loading="lazy"
            className="w-full"
          />
        </figure>
      )}
      {children && (
        <div className="mt-5 rounded-2xl border border-foreground/10 bg-foreground/[0.03] p-5">
          {children}
        </div>
      )}
    </article>
  );
}
