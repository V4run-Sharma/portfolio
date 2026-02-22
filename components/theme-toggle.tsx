"use client";

import { useEffect, useState } from "react";
import { BsMoonStarsFill, BsSunFill } from "react-icons/bs";

type Theme = "light" | "dark";
type ThemeToggleProps = {
  className?: string;
};

const STORAGE_KEY = "portfolio-theme";

const applyTheme = (theme: Theme) => {
  const root = document.documentElement;
  const body = document.body;

  root.classList.toggle("dark", theme === "dark");
  root.setAttribute("data-theme", theme);
  body.classList.toggle("theme-dark", theme === "dark");
};

const getPreferredTheme = (): Theme => {
  if (typeof window === "undefined") return "light";

  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "dark" || stored === "light") return stored;

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

const ThemeToggle = ({ className = "" }: ThemeToggleProps) => {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const initialTheme = getPreferredTheme();
    setTheme(initialTheme);
    applyTheme(initialTheme);
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const nextTheme: Theme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    applyTheme(nextTheme);
    window.localStorage.setItem(STORAGE_KEY, nextTheme);
  };

  if (!mounted) {
    return (
      <div
        aria-hidden="true"
        className={`h-9 w-9 rounded-full border-2 border-white/70 bg-gray-50/70 ${className}`}
      />
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={toggleTheme}
      className={`flex h-9 w-9 items-center justify-center rounded-full border-2 border-white/70 bg-gray-50/80 text-gray-950 shadow-lg backdrop-blur-sm transition hover:scale-105 dark:bg-slate-800/90 dark:text-yellow-300 ${className}`}
    >
      {isDark ? <BsSunFill size={16} /> : <BsMoonStarsFill size={16} />}
    </button>
  );
};

export default ThemeToggle;
