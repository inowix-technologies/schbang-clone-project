import type { Config } from "tailwindcss";

// --- PLUGINS ---
// Import plugins from BOTH projects.
// I've included the one from the file you sent.
const animatePlugin = require("tailwindcss-animate");
// const otherPlugin = require("...add-plugins-from-file-1-here...");

export default {
  darkMode: ["class"],
  
  // --- CONTENT ---
  // You MUST merge the content arrays from both projects
  // to ensure Tailwind scans all your files.
  content: [
    // Paths from your SECOND project (the one you sent)
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    
    // !!! ADD PATHS FROM YOUR FIRST PROJECT HERE !!!
    // e.g., "../project-1/app/**/*.{ts,tsx}",
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
      // --- FONTS ---
      // Merged fonts from BOTH projects
      fontFamily: {
        // From File 2 (Schbang theme)
        heading: ["var(--font-heading)"], // Likely 'Inter'
        body: ["var(--font-body)"],       // Likely 'Inter'
        sans: ["Inter", "system-ui", "sans-serif"],
        
        // From File 1 (Purple/Blue theme)
        sora: ["Sora", "sans-serif"],
        manrope: ["Manrope", "sans-serif"],
      },

      // --- COLORS ---
      // These are all from your SECOND project's config.
      // Your first project's colors were also defined with CSS variables
      // (e.g., --accent-blue), so you don't need to add them here
      // unless you had custom Tailwind names for them.
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        
        // Colors from File 2 CSS
        lightBlue: "var(--light-blue)",
        lightGreen: "var(--light-green)",
        lightRed: "var(--light-red)",
        lightPurple: "var(--light-purple)",
        whiteGreen: "var(--white-green)",
        lightYellow: "var(--light-yellow)",
        lightPink: "var(--light-pink)",
        lightOrenge: "var(--light-orenge)", // Note: 'orange' is likely misspelled
        
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
        
        // Planner theme from File 2
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
        
        // Other colors from File 2
        black: "var(--black)",
        darkBlack: "var(--dark-black)",
        blueBlack: "var(--blue-black)",
        white: "var(--white)",
        lightWhite: "var(--light-white)",
        red: "var(--red-color)",
        borderColor: "var(--border-color)",
        lightOrange: "var(--light-orange)", // Correct spelling
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
      
      // --- KEYFRAMES ---
      // Merged keyframes from BOTH projects
      keyframes: {
        // From File 2
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        // From File 1
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        fadeInUp: {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },

      // --- ANIMATIONS ---
      // Merged animations from BOTH projects
      animation: {
        // From File 2
        'marquee': 'marquee var(--marquee-duration) linear infinite',
        'marquee-reverse': 'marquee-reverse var(--marquee-duration) linear infinite',
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        
        // From File 1
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
      },
    },
  },
  
  // --- PLUGINS ---
  // Merge plugins from both configs
  plugins: [
    animatePlugin,
    // require("...add-plugins-from-file-1-here..."),
  ],
} satisfies Config;