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
        modernBlack: "#000000b0",
        modernBlue: "#1E65DB",
        blueCard: "#21d4fd",
        primary: {
          DEFAULT: "#0A0B12"
        },
      },
      fontFamily: {
        abril: ["Abril Fatface", "serif"],
        poppins: ["Poppins", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"]
      }
    },
  },
  plugins: [],
};
export default config;
