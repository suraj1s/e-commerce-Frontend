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
          50: "var(--primary-50)",
          100: "var(--primary-100)",
          200: "var(--primary-200)",
          300: "var(--primary-300)",
          400: "var(--primary-400)",
          500: "var(--primary-500)",
          600: "var(--primary-600)",
          700: "var(--primary-700)",
          800: "var(--primary-800)",
          900: "var(--primary-900)",
          950: "var(--primary-950)",
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
