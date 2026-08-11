"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-9 h-9" />; // Placeholder to prevent layout shift
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-full border border-border bg-background hover:bg-secondary/20 transition-colors flex items-center justify-center relative w-9 h-9 group"
      aria-label="Toggle theme"
    >
      <Sun className="h-4 w-4 absolute scale-100 transition-all dark:scale-0 text-foreground group-hover:opacity-70" />
      <Moon className="h-4 w-4 absolute scale-0 transition-all dark:scale-100 text-foreground group-hover:opacity-70" />
    </button>
  );
}
