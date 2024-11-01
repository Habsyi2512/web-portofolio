"use client";

import React, { useContext } from "react";
import SidebarGroup from "./SidebarGroup";
import SidebarGroupLabel from "./SidebarGroupLabel";
import SidebarMenu from "./SidebarGroupContent";
import SidebarItem from "./SidebarItem";
import { XMarkIcon } from "@/components/icons/XMarkIcon";
import { NavbarContext } from "@/context/NavbarContext";

export default function Sidebar() {
  const context = useContext(NavbarContext);

  if (!context) {
    throw new Error("Navbar must be used within a NavbarProvider");
  }

  const { isOpenSidebar, setIsOpenSidebar } = context;

  const handleClickOutside = (event: React.MouseEvent<HTMLElement>) => {
    if (
      event.target instanceof HTMLElement &&
      event.target.tagName === "ASIDE"
    ) {
      setIsOpenSidebar(false);
    }
  };
  return (
    isOpenSidebar && (
      <aside
        onClick={handleClickOutside}
        className={`fixed w-full lg:w-fit h-screen lg:h-auto top-0 left-0 lg:static tracking-wide lg:block bg-white/50 backdrop-blur-sm`}
      >
        <div className="w-72 max-w-[90%] p-8 lg:p-0 bg-white lg:bg-auto border-r h-full lg:h-fit lg:border-r-0 relative">
          <button
            onClick={() => {
              setIsOpenSidebar(false);
            }}
            className="absolute group top-8 right-8 lg:hidden"
          >
            <XMarkIcon className="size-6 text-slate-400 group-hover:text-slate-500 group-active:text-sate-400" />
          </button>

          <SidebarGroup>
            <SidebarGroupLabel>About</SidebarGroupLabel>
            <SidebarMenu>
              <SidebarItem href="/menu/menu1">Introduction</SidebarItem>
              <SidebarItem href="/menu/menu2">Work Experience</SidebarItem>
            </SidebarMenu>
          </SidebarGroup>
          <SidebarGroup>
            <SidebarGroupLabel>Project</SidebarGroupLabel>
            <SidebarMenu>
              <SidebarItem href="#">Portofolio</SidebarItem>
              <SidebarItem href="#">Current Project</SidebarItem>
              <SidebarItem href="#">Paid Project</SidebarItem>
            </SidebarMenu>
          </SidebarGroup>
          <SidebarGroup>
            <SidebarGroupLabel>Blog</SidebarGroupLabel>
            <SidebarMenu>
              <SidebarItem href="#">Sharing Session</SidebarItem>
            </SidebarMenu>
          </SidebarGroup>
          <SidebarGroup>
            <SidebarGroupLabel>Contact</SidebarGroupLabel>
            <SidebarMenu>
              <SidebarItem href="#">Menu 1</SidebarItem>
              <SidebarItem href="#">Menu 2</SidebarItem>
            </SidebarMenu>
          </SidebarGroup>
        </div>
      </aside>
    )
  );
}
