import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily:{
        mona: ["var(--font-mona)"],
        serif: ["var(--font-serif)"]
    },
    extend: {
        colors:{
            customs:{
                black: "var(--color-primary)"
            }
        },
        aspectRatio:{
            card: '273 / 340'
        },
        animation:{
            slide: "slide 10s linear infinite"
        }
    },
  },
  plugins: [],
};
export default config;
