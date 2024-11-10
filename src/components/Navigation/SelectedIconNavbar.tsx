import React, { useContext } from "react";
import { ThemeContext } from "@/context/ThemeProvider";
import { SunIcon } from "../icons/SunIcon";
import { MoonIcon } from "../icons/MoonIcon";
// import { ComputerDesktopIcon } from "../icons/ComputerDesktopIcon";

export default function SelectedIconNavbar() {
  const { theme, systemMode } = useContext(ThemeContext);

  //   const iconsTheme: { [key in AllowedThemes]: React.ReactNode } = {
  //     light: <SunIcon className="size-5 text-blue-500" />,
  //     dark: <MoonIcon className="size-5 text-blue-500" />,
  //     system: <ComputerDesktopIcon className="size-5" />,
  //   };

  //   const icon = iconsTheme[theme];

  return (
    <div>
      {theme == "system" ? (
        systemMode == "light" ? (
          <SunIcon className={`size-5`} />
        ) : (
          <MoonIcon className={`size-5`} />
        )
      ) : theme == "light" ? (
        <SunIcon className={`size-5 text-colorSky`} />
      ) : (
        <MoonIcon className={`size-5 text-colorSky`} />
      )}
    </div>
  );
}
