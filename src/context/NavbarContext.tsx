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
  const [isOpenSidebar, setIsOpenSidebar] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpenSidebar(true);
      } else {
        setIsOpenSidebar(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <NavbarContext.Provider value={{ isOpenSidebar, setIsOpenSidebar }}>
      {children}
    </NavbarContext.Provider>
  );
}
