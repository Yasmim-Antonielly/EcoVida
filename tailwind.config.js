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
        "brand-primary": "#4caf4f",
        "background-silver": "#f5f7fa",
        "background-white": "#ffffff",
        "text-headers": "#4d4d4d",
        "text-body": "#717171",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        archivo: ["Archivo", "sans-serif"],
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
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      fontWeight: {
        normal: "400",
        medium: "500",
        semibold: "600",
      },
    },
  },
  plugins: [],
};

export default config;
