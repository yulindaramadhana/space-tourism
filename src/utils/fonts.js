import localFont from "next/font/local";

export const bellefair = localFont({
  variable: "--font-bellefair",
  display: "swap",
  src: [
    {
      path: "../../public/fonts/Bellefair/Bellefair-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
});
export const barlow_condensed = localFont({
  variable: "--font-barlow_condensed",
  display: "swap",
  src: [
    {
      path: "../../public/fonts/Barlow_Condensed/BarlowCondensed-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Barlow_Condensed/BarlowCondensed-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/Barlow_Condensed/BarlowCondensed-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../../public/fonts/Barlow_Condensed/BarlowCondensed-Italic.ttf",
      weight: "400",
      style: "italic",
    },
  ],
});
export const barlow = localFont({
  variable: "--font-barlow",
  display: "swap",
  src: [
    {
      path: "../../public/fonts/Barlow/Barlow-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Barlow/Barlow-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/Barlow/Barlow-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../../public/fonts/Barlow/Barlow-Italic.ttf",
      weight: "400",
      style: "italic",
    },
  ],
});

// export const bellefair = Bellefair({
//   subsets: ["latin"],
//   variable: "--font-bellefair",
//   display: "swap",
//   weight: "400",
//   adjustFontFallback: false,
// });
// export const barlow_condensed = Barlow_Condensed({
//   subsets: ["latin"],
//   variable: "--font-barlow_condensed",
//   display: "swap",
//   weight: "400",
//   adjustFontFallback: false,
// });
// export const barlow = Barlow({
//   subsets: ["latin"],
//   variable: "--font-barlow",
//   display: "swap",
//   weight: "400",
//   adjustFontFallback: false,
// });
