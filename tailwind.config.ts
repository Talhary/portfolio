import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";
import defaultTheme from "tailwindcss/defaultTheme";
 import daisyui from 'daisyui'
import colors from "tailwindcss/colors";
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");
 
const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
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
      
      colors: {
        'radial-light-to-light': "linear-gradient(to right, #FFF2F0, #ECFDF9)", // Replace with actual color code
        'radial-gradient': '#F0F8FF', // Replace with actual color code
        'shade': '#FFE8E8', // Replace with actual color code
        'dark-bg': '#3A3A3A', // Replace with actual color code
        'text-primary': '#00BBDE', // Replace with actual color code
        'text-white': '#FFFFFF', // Replace with actual color code
        'card-bg': '#545454', // Replace with actual color code

        primary1: {
          'light-hover': '#E3F8FB', // Replace with actual color code
          'light-active': '#C5F0F7', // Replace with actual color code
          'normal': '#43CFE6', // Replace with actual color code
          'normal-hover': '#3CBACF', // Replace with actual color code
          'normal-active': '#36A6B8', // Replace with actual color code
          'dark': '#329BAD', // Replace with actual color code
          'dark-hover': '#287C8A', // Replace with actual color code
          'dark-active': '#1E5D67', // Replace with actual color code
          'darker': '#174851', // Replace with actual color code
          'light': '#ECFAFD', // Replace with actual color code
        },

        secondary1: {
          'light': '#ECFDF9', // Replace with actual color code
          'light-hover': '#E3FBF6', // Replace with actual color code
          'light-active': '#C5F7ED', // Replace with actual color code
          'normal': '#43E6C6', // Replace with actual color code
          'normal-hover': '#3CCFB2', // Replace with actual color code
          'normal-active': '#36B89E', // Replace with actual color code
          'dark': '#32AD95', // Replace with actual color code
          'dark-hover': '#288A77', // Replace with actual color code
          'dark-active': '#1E6759', // Replace with actual color code
          'darker': '#175145', // Replace with actual color code
        },

        tertiary: {
          'light': '#FFF2F0', // Replace with actual color code
          'light-hover': '#FFEBE9', // Replace with actual color code
          'light-active': '#FFD6D1', // Replace with actual color code
          'normal': '#FF7C69', // Replace with actual color code
          'normal-hover': '#E6705F', // Replace with actual color code
          'normal-active': '#CC6354', // Replace with actual color code
          'dark': '#BF5D4F', // Replace with actual color code
          'dark-hover': '#994A3F', // Replace with actual color code
          'dark-active': '#73382F', // Replace with actual color code
          'darker': '#800000', // Replace with actual color code
        },

        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
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
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [tailwindcssAnimate,addVariablesForColors,daisyui],
};

export default config;

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}