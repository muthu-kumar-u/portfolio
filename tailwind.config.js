/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        base: {
          950: "rgb(var(--base-950) / <alpha-value>)",
          900: "rgb(var(--base-900) / <alpha-value>)",
          800: "rgb(var(--base-800) / <alpha-value>)",
          700: "rgb(var(--base-700) / <alpha-value>)",
          600: "rgb(var(--base-600) / <alpha-value>)",
        },
        border: {
          subtle: "rgb(var(--line-subtle) / <alpha-value>)",
          DEFAULT: "rgb(var(--line) / <alpha-value>)",
        },
        accent: {
          purple: {
            DEFAULT: "rgb(var(--accent-violet) / <alpha-value>)",
            light: "rgb(var(--accent-violet-light) / <alpha-value>)",
            dark: "rgb(var(--accent-violet-dark) / <alpha-value>)",
          },
          cyan: {
            DEFAULT: "rgb(var(--accent-signal) / <alpha-value>)",
            light: "rgb(var(--accent-signal-light) / <alpha-value>)",
            dark: "rgb(var(--accent-signal-dark) / <alpha-value>)",
          },
        },
        ink: {
          primary: "rgb(var(--ink-primary) / <alpha-value>)",
          secondary: "rgb(var(--ink-secondary) / <alpha-value>)",
          muted: "rgb(var(--ink-muted) / <alpha-value>)",
        },
      },
      fontFamily: {
        display: ["'Manrope'", "system-ui", "sans-serif"],
        sans: ["'Manrope'", "system-ui", "sans-serif"],
        editorial: ["'Newsreader'", "Georgia", "serif"],
        mono: ["'IBM Plex Mono'", "monospace"],
      },
      backgroundImage: {
        "gradient-brand": "linear-gradient(135deg, rgb(var(--accent-violet)) 0%, rgb(var(--accent-signal)) 100%)",
        "gradient-radial-glow":
          "radial-gradient(circle at center, rgb(var(--accent-violet) / 0.2), rgb(var(--accent-signal) / 0.08) 45%, transparent 70%)",
        "grid-pattern":
          "linear-gradient(rgb(var(--line) / 0.24) 1px, transparent 1px), linear-gradient(90deg, rgb(var(--line) / 0.24) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "48px 48px",
      },
      boxShadow: {
        glow: "0 20px 70px rgb(var(--accent-violet) / 0.22)",
        "glow-cyan": "0 20px 70px rgb(var(--accent-signal) / 0.18)",
        card: "0 24px 80px rgb(var(--shadow) / 0.16)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 9s ease-in-out infinite",
        "pulse-soft": "pulse-soft 3s ease-in-out infinite",
        "gradient-x": "gradient-x 8s ease infinite",
        blink: "blink 1s step-end infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        "gradient-x": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
      maxWidth: {
        content: "1280px",
      },
    },
  },
  plugins: [],
};
