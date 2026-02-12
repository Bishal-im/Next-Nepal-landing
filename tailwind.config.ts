import type { Config } from "tailwindcss";

<<<<<<< HEAD
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
=======
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
>>>>>>> 1e06c944aa2f7d79d84316c853f4ac051f5e9c83
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
<<<<<<< HEAD
} satisfies Config;
=======
};
export default config;
>>>>>>> 1e06c944aa2f7d79d84316c853f4ac051f5e9c83
