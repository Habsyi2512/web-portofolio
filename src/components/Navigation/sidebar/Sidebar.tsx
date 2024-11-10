"use client";

import React, { useContext, useEffect, useState } from "react";
import SidebarGroup from "./SidebarGroup";
import SidebarGroupLabel from "./SidebarGroupLabel";
import SidebarMenu from "./SidebarGroupContent";
import SidebarItem from "./SidebarItem";
import { XMarkIcon } from "@/components/icons/XMarkIcon";
import { NavbarContext } from "@/context/NavbarProvider";
import { motion } from "framer-motion";

export default function Sidebar() {
  const { isOpenSidebar, setIsOpenSidebar } = useContext(NavbarContext);
  // const [isMobile, setIsMobile] = useState(false);
  // const [isResizing, setIsResizing] = useState(false);

  const handleClickOutside = (event: React.MouseEvent<HTMLElement>) => {
    if (
      event.target instanceof HTMLElement &&
      event.target.tagName === "ASIDE"
    ) {
      setIsOpenSidebar(false);
    }
  };

  return (
    <motion.aside
      onClick={handleClickOutside}
      className={`fixed w-full lg:w-fit h-screen lg:h-auto top-0 left-0 lg:relative tracking-wide bg-white/30 dark:bg-colorDarkFirst/30 backdrop-blur-sm`}
    >
      <div className="w-72 max-w-[90%] p-8 lg:p-0 bg-white dark:bg-colorDarkFirst border-r dark:border-colorDarkSecond rounded-r-lg h-full lg:h-fit lg:border-r-0 sticky top-[119px]">
        <div className="lg:hidden flex items-center justify-between mb-5">
          <div className="h-full flex items-center w-fit">
            <h1 className="text-2xl text-colorSky">
              <span className="font-bold">C</span>
              <span className="text-base">in</span>
              <span className="font-bold">C</span>
              <span className="ordinal ">official</span>
            </h1>
          </div>
          <button
            onClick={() => {
              setIsOpenSidebar(false);
            }}
            className="group"
          >
            <XMarkIcon className="size-6 text-slate-400 group-hover:text-slate-500 group-active:text-sate-400" />
          </button>
        </div>

        <SidebarGroup>
          <SidebarGroupLabel>About</SidebarGroupLabel>
          <SidebarMenu>
            <SidebarItem href="/">Introduction</SidebarItem>
            <SidebarItem href="/work-experience">Work Experience</SidebarItem>
          </SidebarMenu>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Project</SidebarGroupLabel>
          <SidebarMenu>
            <SidebarItem href="/portofolio">Portofolio</SidebarItem>
            <SidebarItem href="/current-project">Current Project</SidebarItem>
            <SidebarItem href="/paid-project">Paid Project</SidebarItem>
          </SidebarMenu>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Blog</SidebarGroupLabel>
          <SidebarMenu>
            <SidebarItem href="/sharing-session">Sharing Session</SidebarItem>
          </SidebarMenu>
        </SidebarGroup>
      </div>
    </motion.aside>
  );
}
