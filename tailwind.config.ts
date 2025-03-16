import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/contexts/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        "brand-primary": {
          DEFAULT: "var(--brand-primary)",
          light: "#4caf4f",
          dark: "#5cbe5f",
        },
        "background-silver": {
          DEFAULT: "var(--background-silver)",
          light: "#f5f7fa",
          dark: "#1e1e1e",
        },
        "background-white": {
          DEFAULT: "var(--background)",
          light: "#ffffff",
          dark: "#121212",
        },
        "text-headers": {
          DEFAULT: "var(--text-headers)",
          light: "#4d4d4d",
          dark: "#ffffff",
        },
        "text-body": {
          DEFAULT: "var(--text-body)",
          light: "#717171",
          dark: "#a3a3a3",
        },
      },
      fontFamily: {
        inter: ["var(--font-inter)", "sans-serif"],
        archivo: ["var(--font-archivo)", "sans-serif"],
      },
      fontSize: {
        h1: ["64px", "76px"],
        h2: ["36px", "44px"],
        h3: ["28px", "36px"],
        h4: ["20px", "28px"],
        "body-xl": ["18px", "28px"],
        "body-lg": ["16px", "24px"],
        "body-md": ["14px", "20px"],
        "body-sm": ["12px", "16px"],
      },
      fontWeight: {
        normal: "400",
        medium: "500",
        semibold: "600",
      },
    },
  },
  plugins: [],
  presets: [{
    theme: {
      extend: {
        textStyles: {
          h1: 'font-semibold text-4xl md:text-5xl lg:text-6xl text-text-headers leading-tight',
          h2: 'font-semibold text-2xl md:text-3xl lg:text-4xl text-text-headers',
          p: 'font-normal text-base md:text-body-lg text-text-body leading-relaxed'
        }
      }
    }
  }]
};

export default config;