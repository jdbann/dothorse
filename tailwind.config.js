/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            "--tw-prose-body": theme("colors.base[11]"),
            "--tw-prose-headings": theme("colors.base[12]"),
            "--tw-prose-lead": theme("colors.base[12]"),
            "--tw-prose-links": theme("colors.main[11]"),
            "--tw-prose-bold": theme("colors.base[12]"),
            "--tw-prose-counters": theme("colors.base[11]"),
            "--tw-prose-bullets": theme("colors.main[9]"),
            "--tw-prose-hr": theme("colors.main[6]"),
            "--tw-prose-quotes": theme("colors.main[11]"),
            "--tw-prose-quote-borders": theme("colors.main[6]"),
            "--tw-prose-captions": theme("colors.base[11]"),
            "--tw-prose-code": theme("colors.base[12]"),
            "--tw-prose-pre-code": theme("colors.main[11]"),
            "--tw-prose-pre-bg": theme("colors.main[2]"),
            "--tw-prose-th-borders": theme("colors.main[8]"),
            "--tw-prose-td-borders": theme("colors.main[6]"),
            "h1, h2, h3, h4, h5, h6": {
              "@apply font-serif": {},
            },
            h1: {
              fontWeight: 600,
            },
            "h1 strong": {
              fontWeight: 700,
            },
          },
        },
      }),
    },
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
    fontFamily: {
      sans: "var(--font-ibm-plex-sans)",
      serif: [
        "var(--font-fraunces)",
        { fontVariationSettings: `"SOFT" 100, "WONK" 1` },
      ],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
