import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lexend: ["Lexend", "sans-serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#2D7FF9",
          50: '#EBF3FF',
          100: '#D6E7FF',
          200: '#ADD0FF',
          300: '#85B8FF',
          400: '#5CA1FF',
          500: '#2D7FF9',
          600: '#0A62E6',
          700: '#084BB3',
          800: '#063580',
          900: '#041E4D',
        },
        secondary: {
          DEFAULT: "#22D3EE",
          50: '#F0FDFF',
          100: '#E0FAFE',
          200: '#BAF4FD',
          300: '#7DEAFB',
          400: '#22D3EE',
          500: '#0CB7D0',
          600: '#0892A7',
          700: '#066F7E',
          800: '#044C55',
          900: '#02292C',
        },
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.5s ease-out",
        "fade-up": "fade-up 0.5s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;