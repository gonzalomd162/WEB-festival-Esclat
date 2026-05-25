import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{vue,ts}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"39504"', "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
