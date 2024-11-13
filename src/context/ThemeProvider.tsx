"use client";

import React, { createContext, useEffect, useState } from "react";

export type AllowedThemes = "light" | "dark" | "system";
export type SystemMode = "light" | "dark";

interface ThemeContextProps {
  theme: AllowedThemes;
  systemMode: SystemMode;
  setTheme: (theme: AllowedThemes) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
  theme: "system",
  systemMode: "light",
  setTheme: () => {},
});

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState<AllowedThemes>("system");

  const [systemMode, setSystemMode] = useState<SystemMode>(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    return mediaQuery.matches ? "dark" : "light";
  });

  useEffect(() => {
    if (theme != "system") {
      localStorage.setItem("theme", theme);
    } else {
      localStorage.setItem("theme", systemMode);
    }
  }, [theme, systemMode]);

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark" || (theme === "system" && systemMode === "dark")) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme, systemMode]);

  useEffect(() => {
    if (theme === "system") {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      const handleChange = () =>
        setSystemMode(mediaQuery.matches ? "dark" : "light");
      mediaQuery.addEventListener("change", handleChange);
      handleChange();

      return () => mediaQuery.removeEventListener("change", handleChange);
    }
  }, [theme]);

  function getStoredTheme(): AllowedThemes {
    const storedTheme = localStorage.getItem("theme");
    if (
      storedTheme === "light" ||
      storedTheme === "dark" ||
      storedTheme === "system"
    ) {
      return storedTheme;
    }
    return "system";
  }

  useEffect(() => {
    setTheme(getStoredTheme());
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, systemMode }}>
      {children}
    </ThemeContext.Provider>
  );
}
