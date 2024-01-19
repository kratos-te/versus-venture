import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        sm: "480px", // Custom small breakpoint
        xs: "640px",
        md: "768px", // Custom medium breakpoint
        mv: "881px", // Custom mobile design
        lg: "1080px", // Custom large breakpoint
        xl: "1240px", // Custom extra large breakpoint
        xld: "1400px",
        "2xl": "1648px",
        "2xld": "1700px",
      },
      colors: {
        light: {
          100: "#F2F3F4",
          200: "#B4BBC0",
          300: "#F2F2F2",
          400: "#687681",
        },
        dark: {
          100: "#041B2D",
          200: "#161616",
          300: "#1C1C1D",
          400: "#333333",
          500: "#292929",
          600: "#373737",
          700: "#555",
        },
        main: "#E4FC22",
        third: "#B3B3B3",
      },
      fontFamily: {
        rubik: "var(--font-rubik)",
        cairo: "var(--font-cairo)",
      },
    },
  },
  plugins: [],
};
export default config
