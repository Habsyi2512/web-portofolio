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
  const [systemMode, setSystemMode] = useState<SystemMode>(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const currentTheme = mediaQuery.matches ? "dark" : "light";
    return currentTheme;
  });
  const [theme, setTheme] = useState<AllowedThemes>(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      return storedTheme as AllowedThemes;
    }
    return "system";
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    if (theme === "system") {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      const handleChange = () => {
        const currentTheme = mediaQuery.matches ? "dark" : "light";
        setSystemMode(currentTheme);
      };
      mediaQuery.addEventListener("change", handleChange);
      handleChange();
      return () => {
        mediaQuery.removeEventListener("change", handleChange);
      };
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, systemMode }}>
      {children}
    </ThemeContext.Provider>
  );
}
