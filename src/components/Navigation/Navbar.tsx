import React from "react";
import { Bars3Icon } from "../icons/Bars3Icon";

export default function Navbar() {
  return (
    <header className="w-full h-20 border-b border-slate-900/10 sticky top-0 left-0 bg-white/50 backdrop-blur-md">
      <div className="w-full h-full mx-auto max-w-7xl px-4 sm:px-5 md:px-8 py-4">
        <div className="flex h-full items-center gap-x-4">
          <button className="group lg:hidden border border-slate-400 hover:border-slate-500 p-1 rounded-lg">
            <Bars3Icon className="size-6 text-slate-400 group-hover:text-slate-500" />
          </button>
          <div className="h-full flex items-center w-fit">
            <h1 className="text-2xl text-colorSky">
              <span className="font-bold">C</span>
              <span className="text-base">in</span>
              <span className="font-bold">C</span>
              <span className="ordinal ">official</span>
            </h1>
          </div>
        </div>
      </div>
    </header>
  );
}
