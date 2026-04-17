"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "./theme-provider";

export function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle theme"
      aria-pressed={isDark}
      className="fixed top-4 right-4 z-50 flex items-center gap-2 rounded-full border border-foreground/15 bg-background/70 px-3 py-2 backdrop-blur transition hover:border-accent hover:text-accent"
    >
      {isDark ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
      <span className="text-xs font-medium">{isDark ? "Dark" : "Light"}</span>
    </button>
  );
}
