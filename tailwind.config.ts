import type { Config } from "tailwindcss";

const config: Config = {
  // CRITICAL: This line allows the toggle to work
  darkMode: 'class', 
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        slate: {
          950: '#020617', // Your custom Charcoal color[cite: 3]
        },
      },
    },
  },
  plugins: [],
};
export default config;