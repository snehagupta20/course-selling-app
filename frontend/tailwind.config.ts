import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "beige": "#fffbf3",
        "mustard-yellow": "#fec56b",
        "light-gray" : "#f2efe7",
        "light-pink-beige" : "#fffcf7",
      },
    },
  },
  plugins: [],
} satisfies Config;
