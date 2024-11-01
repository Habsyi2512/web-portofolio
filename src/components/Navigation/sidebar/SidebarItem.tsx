"use client";

import React, { useContext } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavbarContext } from "@/context/NavbarContext";

export default function SidebarItem({
  children,
  href = "#",
}: {
  children: React.ReactNode;
  href: string;
}) {
  const currentPathname = usePathname();
  const context = useContext(NavbarContext);

  if (!context) {
    throw new Error("Navbar must be used within a NavbarProvider");
  }

  const { setIsOpenSidebar } = context;

  return (
    <li>
      <Link
        href={href}
        onClick={() => setIsOpenSidebar(false)}
        className={`block border-l ${
          currentPathname == href
            ? "text-colorSky border-colorSky"
            : "text-slate-700 hover:text-slate-900 border-slate-400/50 hover:border-slate-400"
        } pl-4 py-1 -ml-px`}
      >
        {children}
      </Link>
    </li>
  );
}
