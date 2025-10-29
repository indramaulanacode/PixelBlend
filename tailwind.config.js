/** @type {import('tailwindcss').Config} */
import {heroui} from "@heroui/react";
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
    },
  },
  darkMode: "dark",
  plugins: [heroui({
    defaultTheme: "dark", // default theme from the themes object
    defaultExtendTheme: "dark",
  })]
}
