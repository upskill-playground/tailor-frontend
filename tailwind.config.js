/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      orange: {
        900: "#7E2410",
        800: "#9C2A10",
        700: "#C4320A",
        600: "#EC4A0A",
        500: "#FB6514",
        400: "#FD853A",
        300: "#FEB273",
        200: "#FDDCAB",
        100: "#FFEAD5",
        50: "#FFF6ED",
        25: "#FFFAF5",
      },
      gray: {
        900: "#101828",
        800: "#1D2939",
        700: "#344054",
        600: "#475467",
        500: "#667085",
        400: "#98A2B3",
        300: "#D0D5DD",
        200: "#EAECF0",
        100: "#F2F4F7",
        50: "#F9FAFB",
        25: "#FCFCFD",
      },
      blur: "#1D2939BD",
    },

    extend: {
      fontSize: {
        xs: "10px",
        sm: "12px",
        base: "16px",
        lg: "20px",
        xl: "24px",
        "2xl": "30px",
        "3xl": "36px",
      },
    },
  },
  plugins: [],
};
