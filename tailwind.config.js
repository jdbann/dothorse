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
        1: "var(--slate-1)",
        2: "var(--slate-2)",
        3: "var(--slate-3)",
        4: "var(--slate-4)",
        5: "var(--slate-5)",
        6: "var(--slate-6)",
        7: "var(--slate-7)",
        8: "var(--slate-8)",
        9: "var(--slate-9)",
        10: "var(--slate-10)",
        11: "var(--slate-11)",
        12: "var(--slate-12)",
      },
      main: {
        1: "var(--indigo-1)",
        2: "var(--indigo-2)",
        3: "var(--indigo-3)",
        4: "var(--indigo-4)",
        5: "var(--indigo-5)",
        6: "var(--indigo-6)",
        7: "var(--indigo-7)",
        8: "var(--indigo-8)",
        9: "var(--indigo-9)",
        10: "var(--indigo-10)",
        11: "var(--indigo-11)",
        12: "var(--indigo-12)",
      },
    },
    fontFamily: {
      sans: "var(--font-ibm-plex-sans)",
      serif: [
        "var(--font-fraunces)",
        { fontVariationSettings: `"SOFT" 100, "WONK" 1` },
      ],
    },
  },
  plugins: [],
};
