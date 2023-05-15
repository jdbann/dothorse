import { NextFontWithVariable } from "next/dist/compiled/@next/font";
import { Fraunces, IBM_Plex_Sans } from "next/font/google";

const fraunces = Fraunces({
  axes: ["SOFT", "WONK", "opsz"],
  fallback: [
    "ui-serif",
    "Georgia",
    "Cambria",
    "Times New Roman",
    "Times",
    "serif",
  ],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-fraunces",
});

const ibm_plex_sans = IBM_Plex_Sans({
  fallback: [
    "ui-sans-serif",
    "system-ui",
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "Helvetica Neue",
    "Arial",
    "Noto Sans",
    "sans-serif",
    "Apple Color Emoji",
    "Segoe UI Emoji",
    "Segoe UI Symbol",
    "Noto Color Emoji",
  ],
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-ibm-plex-sans",
  weight: ["400"],
});

export const fonts: NextFontWithVariable[] = [fraunces, ibm_plex_sans];
