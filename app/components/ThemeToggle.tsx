"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return <div className="w-9 h-9" />;

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle theme"
      className="
        relative flex items-center justify-center
        w-9 h-9 rounded-xl
        border border-[var(--border-hi)]
        bg-[var(--bg2)]
        text-[var(--text-2)]
        hover:border-sky-400 hover:text-sky-400
        transition-all duration-200
        cursor-pointer
      "
    >
      {isDark ? (
        <Sun size={16} className="transition-transform duration-300 rotate-0" />
      ) : (
        <Moon size={16} className="transition-transform duration-300 rotate-0" />
      )}
    </button>
  );
}
