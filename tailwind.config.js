/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      base: {
        1: "#fbfcfd",
        2: "#f8f9fa",
        3: "#f1f3f5",
        4: "#eceef0",
        5: "#e6e8eb",
        6: "#dfe3e6",
        7: "#d7dbdf",
        8: "#c1c8cd",
        9: "#889096",
        10: "#7e868c",
        11: "#687076",
        12: "#11181c",
      },
      main: {
        1: "#fdfdfe",
        2: "#f8faff",
        3: "#f0f4ff",
        4: "#e6edfe",
        5: "#d9e2fc",
        6: "#c6d4f9",
        7: "#aec0f5",
        8: "#8da4ef",
        9: "#3e63dd",
        10: "#3a5ccc",
        11: "#3451b2",
        12: "#101d46",
      },
    },
  },
  plugins: [],
};
