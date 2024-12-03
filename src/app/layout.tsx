import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import NavbarProvider from "@/context/NavbarProvider";
import ThemeProvider from "@/context/ThemeProvider";
import Navbar from "@/components/Navigation/Navbar";
import Sidebar from "@/components/Navigation/sidebar/Sidebar";
import MobileSidebar from "@/components/Navigation/sidebar/MobileSidebar";
import InstagramIcon from "@/components/icons/InstagramIcon";
import { FaWhatsapp } from "react-icons/fa";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "CinC Official",
  description: "Ingin menguasai dunia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable}dark:text-colorDarkThird dark:bg-colorDarkFirst antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider>
          <NavbarProvider>
            <Navbar />
            <div className="w-full flex gap-x-2 max-w-7xl mx-auto px-4 sm:px-5 md:px-8 py-10">
              <Sidebar />
              <MobileSidebar />
              <div className="w-full">{children}</div>
            </div>
          </NavbarProvider>
          <footer className="bg-white dark:bg-colorDarkFirst ">
            <div className="dark:bg-colorDarkFirst h-20 flex items-center justify-center gap-x-5">
              <button className="hover:bg-colorLightSecond/30 p-3 rounded-lg group transition-colors">
                <InstagramIcon className="size-8 text-colorDarkFirst/50 dark:text-colorDarkThird" />
              </button>
              <button className="hover:bg-colorLightSecond/30 p-3 rounded-lg group transition-colors">
              <FaWhatsapp className="size-8 text-colorDarkFirst/50 dark:text-colorDarkThird"/>
              </button>
            </div>
            <div className="h-20 border-t dark:border-colorLightSecond/50 flex items-center justify-center">
              <span className="font-semibold text-sm  text-colorDarkThird">
                Made With ❤️ by CinC 😎
              </span>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
