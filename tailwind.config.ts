import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Light mode
        background: "#F8FAFC",
        foreground: "#0F172A",
        // Dark mode
        "dark-background": "#0F172A",
        "dark-foreground": "#F1F5F9",
        // Brand colors - Blue theme
        primary: {
          DEFAULT: "#3B82F6", // Bright Blue
          light: "#60A5FA",
          dark: "#2563EB",
        },
        secondary: {
          DEFAULT: "#06B6D4", // Cyan
          light: "#22D3EE",
          dark: "#0891B2",
        },
        accent: {
          DEFAULT: "#8B5CF6", // Purple accent
          light: "#A78BFA",
          dark: "#7C3AED",
        },
        neutral: {
          50: "#FAF9F6",
          100: "#E5E5E5",
          200: "#D4D4D4",
          300: "#A3A3A3",
          400: "#737373",
          500: "#525252",
          600: "#404040",
          700: "#262626",
          800: "#1F1F1F",
          900: "#0F0F0F",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      fontSize: {
        "fluid-xs": "clamp(0.75rem, 1.5vw, 0.875rem)",
        "fluid-sm": "clamp(0.875rem, 2vw, 1rem)",
        "fluid-base": "clamp(1rem, 2vw, 1.125rem)",
        "fluid-lg": "clamp(1.125rem, 2.5vw, 1.25rem)",
        "fluid-xl": "clamp(1.25rem, 2.5vw, 1.5rem)",
        "fluid-2xl": "clamp(1.5rem, 3vw, 2rem)",
        "fluid-3xl": "clamp(2rem, 4vw, 3rem)",
        "fluid-4xl": "clamp(2.5rem, 5vw, 4rem)",
      },
      spacing: {
        "18": "4.5rem",
        "88": "22rem",
        "128": "32rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "scale-in": "scaleIn 0.4s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        scaleIn: {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
}

export default config
