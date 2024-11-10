"use client";

import React, { createContext, useState } from "react";

// Memperbarui tipe setTheme agar dapat menerima parameter theme
interface ThemeContextProps {
  theme: "light" | "dark" | "system"; 
  setTheme: (theme: "light" | "dark" | "system") => void; 
}

export const DarkModeContext = createContext<ThemeContextProps>({
  theme: "system", 
  setTheme: () => {}, 
});

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState<"light" | "dark" | "system">("light");

  const setNewTheme = (theme: "light" | "dark" | "system") => {
    setTheme(theme);
  };

  return (
    <DarkModeContext.Provider
      value={{
        theme, // memberikan nilai theme
        setTheme: setNewTheme, // memberikan setTheme yang menerima parameter
      }}
    >
      {children}
    </DarkModeContext.Provider>
  );
}
