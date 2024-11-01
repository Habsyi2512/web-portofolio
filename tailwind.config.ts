import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'colorSky': "rgb(56 189 248)",
        'colorZinc': "rgb(51 65 85)",
        'colorTitle': "rgb(51 65 85)",
        'colorDesc': "rgb(51 65 85)",
      },
    },
  },
  plugins: [],
};
export default config;
