import React, { useContext } from "react";
import { ThemeContext } from "@/context/ThemeProvider";
import { SunIcon } from "../icons/SunIcon";
import { MoonIcon } from "../icons/MoonIcon";

export default function SelectedIconNavbar() {
  const { theme, systemMode } = useContext(ThemeContext);

  const iconMap: {
    system: React.ReactNode;
    light: React.ReactNode;
    dark: React.ReactNode;
  } = {
    system:
      systemMode === "light" ? (
        <SunIcon className="size-5 text-colorZinc" />
      ) : (
        <MoonIcon className="size-5 text-colorZinc" />
      ),
    light: <SunIcon className="size-5 text-colorSky" />,
    dark: <MoonIcon className="size-5 text-colorSky" />,
  };

  return iconMap[theme];
}
