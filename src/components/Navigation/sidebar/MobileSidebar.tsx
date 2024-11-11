"use client";

import React, { useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavbarContext } from "@/context/NavbarProvider";
import { XMarkIcon } from "@/components/icons/XMarkIcon";
import SidebarContent from "./SidebarContent";
import CinCLogo from "@/components/logo/CinCLogo";
export default function MobileSidebar() {
  const { isOpenSidebar, setIsOpenSidebar } = useContext(NavbarContext);

  const handleClickOutside = (event: React.MouseEvent<HTMLElement>) => {
    if (
      event.target instanceof HTMLElement &&
      event.target.tagName === "ASIDE"
    ) {
      setIsOpenSidebar(false);
    }
  };
  return (
    <AnimatePresence>
      <motion.aside
        initial={{ opacity: 0, zIndex: -10 }}
        animate={{
          opacity: isOpenSidebar ? 1 : 0,
          zIndex: isOpenSidebar ? 10 : -10,
        }}
        transition={{ delay: isOpenSidebar ? 0 : 0.2 }}
        onClick={handleClickOutside}
        className={`fixed w-full h-screen top-0 left-0 bg-white/30 backdrop-blur-sm dark:bg-colorDarkFirst/30`}
      >
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: isOpenSidebar ? 0 : "-100%" }}
          className="w-72 max-w-[90%] p-8 lg:p-0 bg-white dark:bg-colorDarkFirst border-r dark:border-colorDarkSecond rounded-r-lg h-full lg:h-fit lg:border-r-0 sticky top-[119px]"
        >
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
        </motion.div>
      </motion.aside>
    </AnimatePresence>
  );
}
