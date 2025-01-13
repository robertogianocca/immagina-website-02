/** @type {import('tailwindcss').Config} */

const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: ["custom-indent", "italic"],
  theme: {
    extend: {
      screens: {
        xs: "412px",
        "3xl": "1750px",
      },
      aspectRatio: {
        cover: "1920 / 2150",
        home: "4 / 3",
      },
      fontSize: {
        "2xs": ["0.8rem", "1.1rem"],
        xs: ["0.868rem", "1.1875rem"],
        sm: [
          "1.042rem",
          {
            lineHeight: "1.375rem",
            letterSpacing: "0.0em",
          },
        ],
        base: ["1.25rem", "1.6875rem"],
        lg: ["1.5rem", "normal"],
        xl: ["1.8rem", "normal"],
        "2xl": ["2.16rem", "normal"],
        "3xl": ["2.592rem", "normal"],
        "4xl": ["3.11rem", "normal"],
      },
      fontFamily: {
        courier: ["var(--customCourier)"],
        main: ["var(--customMain)"],
      },
      colors: {
        customWhite: "#F8F8F8",
        customRed: "#dc2626",
        customGreen: "#16a34a",
        customYellow: "#fbbf24",
        customBlue: "#0066B3",
        customGrey: "#E4E4E7",
        customBrown: "#653D28",
        customBrownRed: "#AE201E",
      },
      cursor: {
        redPoint: "url(/images/cursore.png), auto",
      },
      boxShadow: {
        button: "0px 4px 10px 3px rgb(0 0 0 / 0.1)",
        buttonTwo: "0px 4px 10px 3px rgb(0 0 0 / 0.2)",
      },
    },
  },
  plugins: [],
};

export default config;
