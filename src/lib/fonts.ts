import { GeistMono } from "geist/font/mono";
import {
  Caveat as FontHandwriting,
  // IBM_Plex_Mono as FontMono,
  IBM_Plex_Sans as FontSans,
} from "next/font/google";

// Only used by the PullCord hint, so keep it to the one weight that needs.
export const fontHandwriting = FontHandwriting({
  weight: ["600"],
  display: "swap",
  subsets: ["latin"],
  variable: "--font-handwriting",
});

import { Silkscreen as FontPixel } from "next/font/google";

export const fontPixel = FontPixel({
  weight: ["400"],
  display: "swap",
  subsets: ["latin"],
  variable: "--font-pixel",
});

export const fontSans = FontSans({
  weight: ["400", "500", "600"],
  display: "swap",
  subsets: ["latin"],
  variable: "--font-sans",
});

// export const fontMono = FontMono({
//   weight: ["400", "500", "600"],
//   display: "swap",
//   subsets: ["latin"],
//   variable: "--font-mono",
// });

export const fontMono = GeistMono;
