import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Manuvoo Design System Colors - Mapped to CSS Variables
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        "gradient-background": "var(--gradient-background)",
        "gradient-background-darker": "var(--gradient-background-darker)",
        
        // Text Colors
        "foreground-primary": "var(--foreground-primary)",
        "foreground-secondary": "var(--foreground-secondary)", 
        "foreground-tertiary": "var(--foreground-tertiary)",
        
        // Primary Colors
        "primary-blue-start": "var(--primary-blue-start)",
        "primary-blue-end": "var(--primary-blue-end)",
        "primary-blue-hover-start": "var(--primary-blue-hover-start)",
        "primary-blue-hover-end": "var(--primary-blue-hover-end)",
        
        // Secondary Colors
        "secondary-purple-start": "var(--secondary-purple-start)",
        "secondary-purple-end": "var(--secondary-purple-end)",
        "secondary-purple-hover-start": "var(--secondary-purple-hover-start)",
        "secondary-purple-hover-end": "var(--secondary-purple-hover-end)",
        
        // UI Elements
        "border-glass": "var(--border-glass)",
        "input-background": "var(--input-background)",
        "input-border": "var(--input-border)",
        "accent-background": "var(--accent-background)",
        
        // Shadcn Compatibility
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
          glass: "rgba(255, 255, 255, 0.05)",
        },
        border: {
          DEFAULT: "hsl(var(--border))",
          glass: "rgba(255, 255, 255, 0.2)",
        },
        input: {
          DEFAULT: "hsl(var(--input))",
          background: "rgba(255, 255, 255, 0.1)",
          border: "rgba(255, 255, 255, 0.2)",
        },
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      fontFamily: {
        sans: ["Inter", "var(--font-inter)", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Monaco", "Consolas", "Liberation Mono", "Courier New", "monospace"],
      },
      fontSize: {
        "hero-desktop": ["3.5rem", { lineHeight: "1.1", fontWeight: "800" }],
        "hero-mobile": ["2.25rem", { lineHeight: "1.1", fontWeight: "800" }],
        "section-desktop": ["2.625rem", { lineHeight: "1.2", fontWeight: "700" }],
        "section-mobile": ["2rem", { lineHeight: "1.2", fontWeight: "700" }],
        "subheading-desktop": ["1.5rem", { lineHeight: "1.3", fontWeight: "600" }],
        "subheading-mobile": ["1.25rem", { lineHeight: "1.3", fontWeight: "600" }],
        "body-desktop": ["1.125rem", { lineHeight: "1.6", fontWeight: "400" }],
        "body-mobile": ["1rem", { lineHeight: "1.6", fontWeight: "400" }],
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(135deg, var(--primary-blue-start) 0%, var(--primary-blue-end) 100%)",
        "gradient-primary-hover": "linear-gradient(135deg, var(--primary-blue-hover-start) 0%, var(--primary-blue-hover-end) 100%)",
        "gradient-secondary": "linear-gradient(135deg, var(--secondary-purple-start) 0%, var(--secondary-purple-end) 100%)",
        "gradient-secondary-hover": "linear-gradient(135deg, var(--secondary-purple-hover-start) 0%, var(--secondary-purple-hover-end) 100%)",
        "gradient-background": "var(--gradient-background)",
        "gradient-background-darker": "var(--gradient-background-darker)",
        "gradient-radial": "radial-gradient(ellipse at center, var(--tw-gradient-stops))",
      },
      backdropBlur: {
        glass: "10px",
        "glass-light": "8px",
        "glass-heavy": "16px",
        "glass-ultra": "24px",
      },
      boxShadow: {
        glass: "0 8px 32px rgba(0, 0, 0, 0.3)",
        "glass-hover": "0 12px 48px rgba(0, 0, 0, 0.4)",
        "glass-3d": "inset 0 1px 0 rgba(255, 255, 255, 0.1), inset 0 -1px 0 rgba(0, 0, 0, 0.1), 0 8px 32px rgba(0, 0, 0, 0.2)",
        "glass-border": "inset 0 1px 0 rgba(255, 255, 255, 0.2), inset 0 -1px 0 rgba(0, 0, 0, 0.05)",
        "glass-glow": "0 0 20px rgba(59, 130, 246, 0.15), 0 8px 32px rgba(0, 0, 0, 0.3)",
        button: "0 4px 6px rgba(0, 0, 0, 0.1)",
        "button-hover": "0 10px 20px rgba(0, 0, 0, 0.2)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      spacing: {
        "container-mobile": "20px",
        "container-tablet": "40px",
        "container-desktop": "80px",
        "section-mobile": "80px",
        "section-desktop": "120px",
      },
      maxWidth: {
        container: "1200px",
      },
      animation: {
        "fade-in": "fadeIn 0.3s ease-in-out",
        "slide-up": "slideUp 0.3s ease-out",
        "scale-in": "scaleIn 0.3s ease-out",
        spotlight: "spotlight 2s ease .75s 1 forwards",
        scroll: "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
        "meteor-effect": "meteor 5s linear infinite",
        twinkle: "twinkle 3s ease-in-out infinite",
        "glass-shimmer": "glassShimmer 3s ease-in-out infinite",
        "glass-pulse": "glassPulse 2s ease-in-out infinite",
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
          meteor: {
            "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
            "70%": { opacity: "1" },
            "100%": {
              transform: "rotate(215deg) translateX(-500px)",
              opacity: "0",
            },
          },
          twinkle: {
            "0%, 100%": { 
              opacity: "0.3",
              transform: "scale(1)",
            },
            "50%": { 
              opacity: "1",
              transform: "scale(1.2)",
            },
        },
        glassShimmer: {
          "0%": {
            transform: "translateX(-100%)",
            opacity: "0",
          },
          "50%": {
            opacity: "0.6",
          },
          "100%": {
            transform: "translateX(100%)",
            opacity: "0",
          },
        },
        glassPulse: {
          "0%, 100%": {
            opacity: "0.4",
            transform: "scale(1)",
          },
          "50%": {
            opacity: "0.8",
            transform: "scale(1.02)",
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;