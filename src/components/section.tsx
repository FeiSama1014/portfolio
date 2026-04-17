import { cn } from "@/lib/cn";

type Props = {
  id: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
};

export function Section({ id, title, children, className }: Props) {
  return (
    <section id={id} className={cn("scroll-mt-24 py-12", className)}>
      {title && (
        <div className="mb-8">
          <h2 className="relative inline-block text-2xl font-semibold uppercase tracking-widest">
            {title}
            <span className="absolute -bottom-2 left-0 h-0.5 w-12 bg-accent" />
          </h2>
        </div>
      )}
      {children}
    </section>
  );
}
