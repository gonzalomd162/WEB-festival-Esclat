import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{vue,ts}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Neue Haas Grotesk Text"', "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
