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
