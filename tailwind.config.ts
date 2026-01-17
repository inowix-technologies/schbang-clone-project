import type { Config } from "tailwindcss";
const animatePlugin = require("tailwindcss-animate");
const svgToDataUri = require("mini-svg-data-uri");
const { default: flattenColorPalette } = require("tailwindcss/lib/util/flattenColorPalette");

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
  const allColors = theme("colors");
  const newVars = Object.fromEntries(
    Object.entries(allColors).flatMap(([color, val]) => {
      if (typeof val === "string") {
        return [[`--${color}`, val]];
      }
      return Object.entries(val as Record<string, string>).map(([key, value]) => [
        `--${color}-${key}`,
        value,
      ]);
    })
  );

  addBase({
    ":root": newVars,
  });
}

function addSvgPatterns({ matchUtilities, theme }: any) {
  matchUtilities(
    {
      "bg-grid": (value: any) => ({
        backgroundImage: `url("${svgToDataUri(
          `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
        )}")`,
      }),
      "bg-grid-small": (value: any) => ({
        backgroundImage: `url("${svgToDataUri(
          `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 8" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H7.5V8"/></svg>`
        )}")`,
      }),
      "bg-dot": (value: any) => ({
        backgroundImage: `url("${svgToDataUri(
          `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
        )}")`,
      }),
    },
    { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
  );
}

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        heading: ["var(--font-heading)"],
        body: ["var(--font-body)"],
        sans: ["Inter", "system-ui", "sans-serif"],
        sora: ["Sora", "sans-serif"],
        manrope: ["Manrope", "sans-serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        lightBlue: "var(--light-blue)",
        lightGreen: "var(--light-green)",
        lightRed: "var(--light-red)",
        lightPurple: "var(--light-purple)",
        whiteGreen: "var(--white-green)",
        lightYellow: "var(--light-yellow)",
        lightPink: "var(--light-pink)",
        lightOrenge: "var(--light-orenge)",
        lightOrange: "var(--light-orange)",
        
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        planner: {
          bg: "hsl(var(--planner-bg))",
          surface: "hsl(var(--planner-surface))",
          elevated: "hsl(var(--planner-surface-elevated))",
          border: "hsl(var(--planner-border))",
          'border-focus': "hsl(var(--planner-border-focus))",
          'text-primary': "hsl(var(--planner-text-primary))",
          'text-secondary': "hsl(var(--planner-text-secondary))",
          'text-muted': "hsl(var(--planner-text-muted))",
          accent: "hsl(var(--planner-accent))",
          'accent-muted': "hsl(var(--planner-accent-muted))",
          success: "hsl(var(--planner-success))",
          warning: "hsl(var(--planner-warning))",
          error: "hsl(var(--planner-error))",
        },
        black: "var(--black)",
        darkBlack: "var(--dark-black)",
        blueBlack: "var(--blue-black)",
        white: "var(--white)",
        lightWhite: "var(--light-white)",
        red: "var(--red-color)",
        borderColor: "var(--border-color)",
      },
      spacing: {
        'section': 'var(--section-padding)',
      },
      maxWidth: {
        'container': 'var(--container-max)',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        fadeInUp: {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        spotlight: {
          "0%": {
            opacity: "0",
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: "1",
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
        gradient: {
          "0%, 100%": {
            "background-position": "0% 50%",
          },
          "50%": {
            "background-position": "100% 50%",
          },
        },
      },
      animation: {
        'marquee': 'marquee var(--marquee-duration) linear infinite',
        'marquee-reverse': 'marquee-reverse var(--marquee-duration) linear infinite',
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        spotlight: "spotlight 2s ease .75s 1 forwards",
        scroll: "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
        gradient: "gradient 3s ease infinite",
      },

    },
  },
  plugins: [
    animatePlugin,
    addVariablesForColors,
    addSvgPatterns,
  ],
} satisfies Config;
