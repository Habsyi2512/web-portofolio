"use client";

import React, {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  ReactNode,
  useEffect,
} from "react";

interface NavbarContextType {
  isOpenSidebar: boolean;
  setIsOpenSidebar: Dispatch<SetStateAction<boolean>>;
}

export const NavbarContext = createContext<NavbarContextType | undefined>(
  undefined
);

export default function NavbarContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);
  // const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    if (isOpenSidebar) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [isOpenSidebar]);

  // useEffect(() => {
  //   const handleResize = () => {
  //     clearTimeout(timeoutId);
  //     timeoutId = setTimeout(() => {
  //       setWindowWidth(window.innerWidth);
  //     }, 100);
  //   };

  //   let timeoutId: NodeJS.Timeout;
  //   window.addEventListener("resize", handleResize);
  //   return () => {
  //     clearTimeout(timeoutId);
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);
  useEffect(() => {
    let previousWidth = window.innerWidth;

    const handleResize = () => {
      const currentWidth = window.innerWidth;

      if (previousWidth >= 1024 && currentWidth < 1024 && isOpenSidebar) {
        setIsOpenSidebar(false);
      }

      // Update previousWidth untuk digunakan pada event resize berikutnya
      previousWidth = currentWidth;
    };

    window.addEventListener("resize", handleResize);

    // Bersihkan event listener saat komponen dilepas
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpenSidebar]);

  return (
    <NavbarContext.Provider value={{ isOpenSidebar, setIsOpenSidebar }}>
      {children}
    </NavbarContext.Provider>
  );
}
