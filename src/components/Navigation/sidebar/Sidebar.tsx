"use client";

import React, { useContext } from "react";
import { XMarkIcon } from "@/components/icons/XMarkIcon";
import { NavbarContext } from "@/context/NavbarProvider";
import SidebarContent from "./SidebarContent";
import CinCLogo from "@/components/logo/CinCLogo";

export default function Sidebar() {
  const { setIsOpenSidebar } = useContext(NavbarContext);

  return (
    <aside
      className={`w-fit hidden lg:block h-auti tracking-wide bg-white/30 dark:bg-colorDarkFirst/30`}
    >
      <div className="w-72 max-w-[90%] p-8 lg:p-0 bg-white dark:bg-colorDarkFirst h-fit sticky top-[119px]">
        <div className="lg:hidden flex items-center justify-between mb-5">
          <CinCLogo />
          <button
            onClick={() => {
              setIsOpenSidebar(false);
            }}
            className="group"
          >
            <XMarkIcon className="size-6 text-slate-400 group-hover:text-slate-500 group-active:text-sate-400" />
          </button>
        </div>

        <SidebarContent />
      </div>
    </aside>
  );
}
