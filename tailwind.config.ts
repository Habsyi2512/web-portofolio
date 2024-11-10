import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        colorSky: "rgb(56 189 248)",
        colorDarkFirst: "rgb(15 23 42)",
        colorDarkSecond: "rgb(51 65 85)",
        colorDarkThird: "rgb(100 116 139)",
      },
    },
  },
  plugins: [],
};
export default config;
