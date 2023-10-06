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
      font: {
        primary: "#fff",
        secondary: "#FFFFFFCC",
        mild: "#FFFFFF99",
      },
      input: {
        primary: "#FFFFFF1A",
        secondary: "#FFFFFF33",
      },
      background: {
        primary: "#1A1A2B",
        secondary: "#1A1C39",
        blue: "#4F7DF51A",
        bgSettings: "#848AE00D",
        borderColor: "#10182899",
        hover: "#FFFFFF0D",
      },
      badge: {
        progress: "#B99DFFCC",
        completed: "#12B76ACC",
        pending: "#FC7E35CC",
        cancelled: "#9D0912CC",
      },
      notification: {
        primary: "#9D0912",
      },
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
      success: {
        900: "#054F31",
        800: "#05603A",
        700: "#027A48",
        600: "#039855",
        500: "#12B76A",
        400: "#32D583",
        300: "#6CE9A6",
        200: "#A6F4C5",
        100: "#D1FADF",
        50: "#ECFDF3",
        25: "#F6FEF9",
      },
      error: {
        900: "#7A271A",
        800: "#912018",
        700: "#B42318",
        600: "#D92D20",
        500: "#F04438",
        400: "#F97066",
        300: "#FDA29B",
        200: "#FECDCA",
        100: "#FEE4E2",
        50: "#FEF3F2",
        25: "#FFFBFA",
      },
      warning: {
        900: "#7A2E0E",
        800: "#93370D",
        700: "#B54708",
        600: "#DC6803",
        500: "#F79009",
        400: "#FDB022",
        300: "#FEC84B",
        200: "#FEDF89",
        100: "#FEF0C7",
        50: "#FFFAEB",
        25: "#FFFCF5",
      },
      primary: "#4F7DF5",
      btn: {
        primary: "#4F7DF5",
        secondary: "#fff",
      },
    },

    extend: {
      fontSize: {
        xs: "10px",
        sm: "12px",
        md: "14px",
        base: "16px",
        lg: "20px",
        xl: "24px",
        "2xl": "30px",
        "3xl": "36px",
      },
      height: {
        "80vh": "80vh",
      },
      width: {
        73: "73px",
        92: "92px",
        241: "241px",
        322: "322px",
        402: "402px",
        609: "609px",
      },
      padding: {
        31: "31px",
        54: "54px",
        60: "60px",
        79: "79px",
        244: "244px",
      },
      margin: {
        80: "80px",
        90: "90px",
        100: "100px",
        165: "165px",
        244: "244px",
      },
      borderWidth: {
        1: "1px",
        2: "2px",
      },
    },
  },
  plugins: [],
};
