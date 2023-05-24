/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: { aria: { current: `current="page"` } },
    fontFamily: {
      mono: "var(--font-ibm-plex-mono)",
      sans: "var(--font-ibm-plex-sans)",
      serif: [
        "var(--font-fraunces)",
        { fontVariationSettings: `"SOFT" 100, "WONK" 1` },
      ],
    },
  },
  corePlugins: { container: false },
  plugins: [require("./lib/utopiaPlugin"), require("./lib/radixColorsPlugin")],
};
