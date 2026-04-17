"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/cn";

export function NavDots() {
  const [active, setActive] = useState<string>(siteConfig.nav[0]?.id ?? "");
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    if (!isHome) return;
    const sections = siteConfig.nav
      .map((n) => document.getElementById(n.id))
      .filter((el): el is HTMLElement => !!el);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [isHome]);

  if (!isHome) return null;

  return (
    <nav
      aria-label="Section navigation"
      className="fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-3 lg:flex"
    >
      {siteConfig.nav.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          className="group flex items-center gap-2"
          aria-label={item.label}
        >
          <span
            className={cn(
              "text-xs font-medium opacity-0 transition group-hover:opacity-100",
              active === item.id && "opacity-100 text-accent"
            )}
          >
            {item.label}
          </span>
          <span
            className={cn(
              "h-2 w-2 rounded-full border border-foreground/40 transition",
              active === item.id && "border-accent bg-accent"
            )}
          />
        </a>
      ))}
    </nav>
  );
}
