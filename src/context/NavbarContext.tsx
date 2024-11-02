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
  useEffect(() => {
    if (isOpenSidebar) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    // Bersihkan efek saat komponen tidak aktif
    return () => document.body.classList.remove("overflow-hidden");
  }, [isOpenSidebar]);

  return (
    <NavbarContext.Provider value={{ isOpenSidebar, setIsOpenSidebar }}>
      {children}
    </NavbarContext.Provider>
  );
}
