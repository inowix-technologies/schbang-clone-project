import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
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
      lightBlue: "var(--light-blue)",
      lightGreen: "var(--light-green)",
      lightRed: "var(--light-red)",
      lightPurple: "var(--light-purple)",
      whiteGreen: "var(--white-green)",
      lightYellow: "var(--light-yellow)",
      lightPink: "var(--light-pink)",
      lightOrange: "var(--light-orange)",
   
      },
      
      spacing: {
        'section': 'var(--section-padding)',
      },
      maxWidth: {
        'container': 'var(--container-max)',
      },
      animation: {
        'marquee': 'marquee var(--marquee-duration) linear infinite',
        'marquee-reverse': 'marquee-reverse var(--marquee-duration) linear infinite',
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
