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
  const [theme, setTheme] = useState<AllowedThemes>(() => {
    const storedTheme = localStorage.getItem("theme") as AllowedThemes | null;
    return storedTheme ?? "system";
  });

  const [systemMode, setSystemMode] = useState<SystemMode>(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    return mediaQuery.matches ? "dark" : "light";
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

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

  return (
    <ThemeContext.Provider value={{ theme, setTheme, systemMode }}>
      {children}
    </ThemeContext.Provider>
  );
}
