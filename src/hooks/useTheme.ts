"use client";
import { useCallback, useEffect, useState } from "react";

type Theme = "dark" | "light";

export function useTheme() {
  const [theme, setThemeState] = useState<Theme>("dark");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("oyin-theme") as Theme | null;
      if (saved === "light" || saved === "dark") {
        setThemeState(saved);
        document.documentElement.setAttribute("data-theme", saved);
      }
    } catch {}
  }, []);

  const setTheme = useCallback((t: Theme) => {
    setThemeState(t);
    document.documentElement.setAttribute("data-theme", t);
    try {
      localStorage.setItem("oyin-theme", t);
    } catch {}
  }, []);

  const toggle = useCallback(() => {
    setTheme(theme === "dark" ? "light" : "dark");
  }, [theme, setTheme]);

  return { theme, toggle };
}
