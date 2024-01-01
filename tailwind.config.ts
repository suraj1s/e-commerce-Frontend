import type { Config } from "tailwindcss";
/** @type {import('tailwindcss').Config} */

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background-500)",
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
    
      },

      screens: {
        h_xs: { raw: "(min-height: 500px)" },
        h_sm: { raw: "(min-height: 600px)" },
        h_md: { raw: "(min-height: 700px)" },
        h_lg: { raw: "(min-height: 800px)" },
        h_xl: { raw: "(min-height: 900px)" },
        h_2xl: { raw: "(min-height: 1000px)" },

        // => @media (min-height: 800px) { ... }
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
