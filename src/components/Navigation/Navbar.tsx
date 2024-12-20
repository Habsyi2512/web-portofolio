"use client";

import React, { useState, useContext } from "react";
import { NavbarContext } from "@/context/NavbarProvider";
import { AllowedThemes } from "@/context/ThemeProvider";
import { Bars3Icon } from "../icons/Bars3Icon";
import { MoonIcon } from "../icons/MoonIcon";
import { SunIcon } from "../icons/SunIcon";
import { ComputerDesktopIcon } from "../icons/ComputerDesktopIcon";
import { motion } from "framer-motion";
import { ThemeContext } from "@/context/ThemeProvider";
import CinCLogo from "../logo/CinCLogo";
import SelectedIconNavbar from "./SelectedIconNavbar";

export default function Navbar() {
  const [displayMode, setDisplayMode] = useState(false);
  const { setIsOpenSidebar } = useContext(NavbarContext);
  const { theme, setTheme } = useContext(ThemeContext);

  const listIcon: { icon: JSX.Element; label: AllowedThemes }[] = [
    { icon: <SunIcon className="size-5" />, label: "light" },
    { icon: <MoonIcon className="size-5" />, label: "dark" },
    { icon: <ComputerDesktopIcon className="size-5" />, label: "system" },
  ];

  return (
    <header className="w-full h-20 border-b border-slate-900/10 dark:border-colorDarkThird/50 sticky lg:z-10 top-0 left-0 bg-white/50 dark:bg-colorDarkFirst/50 backdrop-blur-md">
      <div className="w-full h-full mx-auto max-w-7xl px-4 sm:px-5 md:px-8 py-4">
        <div className="flex h-full justify-between items-center gap-x-4">
          <div className="w-fit h-full flex items-center gap-x-4">
            <button
              onClick={() => setIsOpenSidebar(true)}
              className="group lg:hidden border border-slate-400 hover:border-slate-500 p-1 rounded-md active:border-slate-400"
            >
              <Bars3Icon className="size-6 text-slate-400 group-hover:text-slate-500 group-active:text-slate-400" />
            </button>
            <CinCLogo />
          </div>

          <div className="relative h-full w-fit flex items-center">
            <button
              onClick={() => setDisplayMode(!displayMode)}
              className="group p-1 rounded-md active:border-slate-400"
            >
              <SelectedIconNavbar />
            </button>
            <motion.ul
              initial={{ scale: 0 }}
              animate={{ scale: displayMode ? 1 : 0 }}
              className="border dark:border-colorDarkThird shadow bg-white dark:bg-colorDarkFirst rounded-lg absolute top-11 right-0 py-2"
            >
              {listIcon.map((item) => {
                return (
                  <li key={item.label}>
                    <button
                      onClick={() => {
                        setTheme(item.label);
                        setDisplayMode(false);
                      }}
                      className={`w-28 text-left py-2 ${
                        item.label == theme
                          ? "text-colorSky"
                          : "text-colorDarkSecond"
                      } hover:bg-slate-100 dark:hover:bg-colorDarkThird px-2 flex items-center gap-x-1`}
                    >
                      {item.icon}
                      <span className="font-semibold text-sm capitalize">
                        {item.label}
                      </span>
                    </button>
                  </li>
                );
              })}
            </motion.ul>
          </div>
        </div>
      </div>
    </header>
  );
}
