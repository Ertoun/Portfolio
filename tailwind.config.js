/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "rgb(from var(--bg-primary) r g b / <alpha-value>)",
        secondary: "rgb(from var(--bg-secondary) r g b / <alpha-value>)",
        primary: "rgb(from var(--text-primary) r g b / <alpha-value>)",
        muted: "rgb(from var(--text-secondary) r g b / <alpha-value>)",
        accent: "rgb(from var(--accent-primary) r g b / <alpha-value>)",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      transitionDuration: {
        '800': '800ms',
      },
    },
  },
  plugins: [],
};
