import type { Config } from "tailwindcss";
const plugin = require("tailwindcss/plugin");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  corePlugins: {
    fontFamily: false,
    fontSize: false,
    fontStyle: false,
    fontVariantNumeric: false,
    fontWeight: false,
  },
  theme: {
    colors: {
      current: "currentColor",
      inherit: "inherit",
      primary: {
        "bold-amber": "#b05d24",
        dark: "#2b2626",
        "dark-forest-green": "#064b44",
        "forest-green": "#086057",
        "light-forest-green": "#EBFAF8",
        "light-amber": "#faeee6",
        white: "#ffffff",
      },
      shades: {
        gray: {
          10: "#fbfbfb",
          20: "#efefef",
          30: "#cccccc",
          40: "#8d9091",
          50: "#626465",
        },
      },
      tones: {
        green: "#22b02e",
        red: "#c13536",
        yellow: "#e9c96b",
      },
      transparent: "transparent",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }: { addUtilities: any }) {
      addUtilities({
        /** Desktop typography */
        ".text-desktop-h1-700": { font: "700 56px/72px var(--font-kollektif), sans-serif" },
        ".text-desktop-h1-400": { font: "400 56px/72px var(--font-kollektif), sans-serif" },
        ".text-desktop-h2-700": { font: "700 48px/48px var(--font-kollektif), sans-serif" },
        ".text-desktop-h2-400": { font: "400 48px/48px var(--font-kollektif), sans-serif" },
        ".text-desktop-h3-700": { font: "700 40px/56px var(--font-kollektif), sans-serif" },
        ".text-desktop-h3-400": { font: "400 40px/56px var(--font-kollektif), sans-serif" },
        ".text-desktop-h4-700": { font: "700 32px/48px var(--font-kollektif), sans-serif" },
        ".text-desktop-h4-400": { font: "400 32px/48px var(--font-kollektif), sans-serif" },
        ".text-desktop-h5-700": { font: "700 24px/40px var(--font-kollektif), sans-serif" },
        ".text-desktop-h5-400": { font: "400 24px/40px var(--font-kollektif), sans-serif" },
        ".text-desktop-h6-700": { font: "700 20px/36px var(--font-kollektif), sans-serif" },
        ".text-desktop-h6-400": { font: "400 20px/36px var(--font-kollektif), sans-serif" },
        ".text-desktop-p-700": { font: "700 18px/24px var(--font-montserrat), sans-serif" },
        ".text-desktop-p-400": { font: "400 18px/24px var(--font-montserrat), sans-serif" },
        ".text-desktop-b1-700": { font: "700 16px/20px var(--font-montserrat), sans-serif" },
        ".text-desktop-b1-400": { font: "400 16px/20px var(--font-montserrat), sans-serif" },
        ".text-desktop-b2-700": { font: "700 14px/16px var(--font-montserrat), sans-serif" },
        ".text-desktop-b2-400": { font: "400 14px/16px var(--font-montserrat), sans-serif" },
        ".text-desktop-sm-700": { font: "700 12px/14px var(--font-montserrat), sans-serif" },
        ".text-desktop-sm-400": { font: "400 12px/14px var(--font-montserrat), sans-serif" },
        /** Mobile typography */
        ".text-mobile-h1-700": { font: "700 40px/56px var(--font-kollektif), sans-serif" },
        ".text-mobile-h1-400": { font: "400 40px/56px var(--font-kollektif), sans-serif" },
        ".text-mobile-h2-700": { font: "700 32px/48px var(--font-kollektif), sans-serif" },
        ".text-mobile-h2-400": { font: "400 32px/48px var(--font-kollektif), sans-serif" },
        ".text-mobile-h3-700": { font: "700 24px/40px var(--font-kollektif), sans-serif" },
        ".text-mobile-h3-400": { font: "400 24px/40px var(--font-kollektif), sans-serif" },
        ".text-mobile-h4-700": { font: "700 20px/36px var(--font-kollektif), sans-serif" },
        ".text-mobile-h4-400": { font: "400 20px/36px var(--font-kollektif), sans-serif" },
        ".text-mobile-h5-700": { font: "700 18px/32px var(--font-kollektif), sans-serif" },
        ".text-mobile-h5-400": { font: "400 18px/32px var(--font-kollektif), sans-serif" },
        ".text-mobile-h6-700": { font: "700 16px/32px var(--font-kollektif), sans-serif" },
        ".text-mobile-h6-400": { font: "400 16px/32px var(--font-kollektif), sans-serif" },
        ".text-mobile-p-700": { font: "700 16px/20px var(--font-montserrat), sans-serif" },
        ".text-mobile-p-400": { font: "400 16px/20px var(--font-montserrat), sans-serif" },
        ".text-mobile-b1-700": { font: "700 14px/16px var(--font-montserrat), sans-serif" },
        ".text-mobile-b1-400": { font: "400 14px/16px var(--font-montserrat), sans-serif" },
        ".text-mobile-b2-700": { font: "700 12px/14px var(--font-montserrat), sans-serif" },
        ".text-mobile-b2-400": { font: "400 12px/14px var(--font-montserrat), sans-serif" },
        ".text-mobile-sm-700": { font: "700 10px/12px var(--font-montserrat), sans-serif" },
        ".text-mobile-sm-400": { font: "400 10px/12px var(--font-montserrat), sans-serif" },
      });
    }),
    require("@tailwindcss/container-queries"),
    require("@tailwindcss/typography"),
  ],
};

export default config;
