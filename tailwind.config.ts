import type { Config } from "tailwindcss";
/** @type {import('tailwindcss').Config} */

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    darkMode: 'class',
    extend: {
      colors: {
        background: "var(--background-primary)",
        primary: {
          100: "var(--primary-100)",
          500: "var(--primary-500)",
          600: "var(--primary-600)",
          700: "var(--primary-700)",
        },
        gray: {
          25: "var(--gray-25)",
          50: "var(--gray-50)",
          100: "var(--gray-100)",
          200: "var(--gray-200)",
          300: "var(--gray-300)",
          400: "var(--gray-400)",
          500: "var(--gray-500)",
          600: "var(--gray-600)",
          700: "var(--gray-700)",
          800: "var(--gray-800)",
          900: "var(--gray-900)",
        },
        blue: {
          light: {
            50: "var(--blue-light-50)",
            600: "var(--blue-light-600)",
            700: "var(--blue-light-700)",
          },
          gray: {
            600: "var(--blue-gray-600)",
          },
        },
        success: {
          50: "var(--success-50)",
          500: "var(--success-500)",
          600: "var(--success-600)",
          700: "var(--success-700)",
        },
        error: {
          50: "var(--error-50)",
          600: "var(--error-600)",
          500: "var(--error-500)",
          700: "var(--error-700)",
        },
        brand: {
          50: "var(--brand-50)",
          100: "var(--brand-100)",
          300: "var(--brand-300)",
          400: "var(--brand-400)",
          500: "var(--brand-500)",
          600: "var(--brand-600)",
          700: "var(--brand-700)",
          800: "var(--brand-800)",
        },
        warning: {
          50: "var(--warning-50)",
          100: "var(--warning-100)",
          600: "var(--warning-600)",
          700: "var(--warning-700)",
        },
        orange: {
          600: "var(--orange-600)",
        },
        pink: {
          50: "var(--pink-50)",
          600: "var(--pink-600)",
          700: "var(--pink-700)",
        },
        indigo: {
          50: "var(--indigo-50)",
          700: "var(--indigo-700)",
        },
    
      },

      screens: {
        // h_xs: { raw: "(min-height: 500px)" },
        // h_sm: { raw: "(min-height: 600px)" },
        // h_md: { raw: "(min-height: 700px)" },
        // h_lg: { raw: "(min-height: 800px)" },
        // h_xl: { raw: "(min-height: 900px)" },
        // h_2xl: { raw: "(min-height: 1000px)" },
       "small-mobiles" : "320px",
       // => @media (min-width: 320px) { ... }

      'mobile': '520px',
      // => @media (min-width: 520px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
      },
      
      container: {
        center: true,
      },
    },
  },
  plugins: [
    require("@tailwindcss/container-queries"),
      function ({ addUtilities  } : { addUtilities: any}) {
        addUtilities({
          ".container": {
            maxWidth: "100%",
            marginLeft: "auto",
            marginRight: "auto",
            paddingLeft: "1rem",
            paddingRight: "1rem",
  
            "@screen sm": {
              maxWidth: "100%",
            },
            "@screen md": {
              maxWidth: "100%",
              paddingLeft: "2rem",
              paddingRight: "2rem",
            },
            "@screen lg": {
              maxWidth: "100%",
              paddingLeft: "3rem",
              paddingRight: "3rem",
            },
            "@screen xl": {
              maxWidth: "100%",
              paddingLeft: "6rem",
              paddingRight: "6rem",
            },
          },
        });
      },
  ],
};
export default config;
