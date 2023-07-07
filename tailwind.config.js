/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}", // Note the addition of the `app` directory.
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      baseColor: {
        black: "#0B0D17",
        white: "#FFFFFF",
        "light-gray": "#D0D6F9",
      },
    },
    fontFamily: {
      head: ["var(--font-bellefair)"],
      subhead: ["var(--font-barlow_condensed)"],
      body: ["var(--font-barlow)"],
      barlow_condensed: "Barlow Condensed",
    },
    fontSize: {
      "head-1-sm": ["80px", "100px"],
      "head-1-md": ["150px", "150px"],
      "head-1-lg": ["150px", "171.9px"],
      "head-2-sm": ["56px", "64.18px"],
      "head-2-md": ["80px", "91.68px"],
      "head-2-lg": ["100px", "114.6px"],
      "head-3-sm": ["24px", "27.5px"],
      "head-3-md": ["40px", "45.84px"],
      "head-3-lg": ["56px", "64.18px"],
      "head-4-sm": ["16px", "18.34px"],
      "head-4-md": ["24px", "27.5px"],
      "head-4-lg": ["32px", "36.67px"],
      "head-5-sm": [
        "16px",
        {
          lineHeight: "19.2px",
          letterSpacing: "2.7px",
        },
      ],
      "head-5-md": [
        "20px",
        {
          lineHeight: "24px",
          letterSpacing: "3.38",
        },
      ],
      "head-5-lg": [
        "28px",
        {
          lineHeight: "33.6px",
          letterSpacing: "4.72px",
        },
      ],
      "subhead-1": ["28px", "32.09px"],
      "subhead-2": [
        "14px",
        {
          lineHeight: "16.8px",
          letterSpacing: "2.36px",
        },
      ],
      "nav-text-sm": [
        "16px",
        {
          lineHeight: "19.2px",
          letterSpacing: "2.7px",
        },
      ],
      "nav-text-md": [
        "14px",
        {
          lineHeight: "16.8px",
          letterSpacing: "2.36px",
        },
      ],
      "nav-text-lg": [
        "16px",
        {
          lineHeight: "19.2px",
          letterSpacing: "2.7px",
        },
      ],
      "nav-body-text-sm": [
        "14px",
        {
          lineHeight: "16.8px",
          letterSpacing: "2.36px",
        },
      ],
      "nav-body-text-md": [
        "16px",
        {
          lineHeight: "19.2px",
          letterSpacing: "2.7px",
        },
      ],
      "body-text-sm": ["15px", "25px"],
      "body-text-md": ["16px", "28px"],
      "body-text-lg": ["18px", "32px"],
      "btn-cta-sm": [
        "20px",
        {
          lineHeight: "auto",
          letterSpacing: "1.25px",
        },
      ],
      "btn-cta": [
        "32px",
        {
          lineHeight: "auto",
          letterSpacing: "2px",
        },
      ],
    },
    extend: {
      backgroundImage: {
        "home-desktop":
          "url('/assets/images/home/background-home-desktop.jpg')",
        "home-tablet": "url('/assets/images/home/background-home-tablet.jpg')",
        "home-mobile": "url('/assets/images/home/background-home-mobile.jpg')",
        "destination-desktop":
          "url('/assets/images/destination/background-destination-desktop.jpg')",
        "destination-tablet":
          "url('/assets/images/destination/background-destination-tablet.jpg')",
        "destination-mobile":
          "url('/assets/images/destination/background-destination-mobile.jpg')",
        "crew-desktop":
          "url('/assets/images/crew/background-crew-desktop.jpg')",
        "crew-tablet": "url('/assets/images/crew/background-crew-tablet.jpg')",
        "crew-mobile": "url('/assets/images/crew/background-crew-mobile.jpg')",
        "tech-desktop":
          "url('/assets/images/technology/background-technology-desktop.jpg')",
        "tech-tablet":
          "url('/assets/images/technology/background-technology-tablet.jpg')",
        "tech-mobile":
          "url('/assets/images/technology/background-technology-mobile.jpg')",
        "launch-vehicle-portrait":
          "url('/assets/images/technology/image-launch-vehicle-portrait.jpg')",
        "launch-vehicle-landscape":
          "url('/assets/images/technology/image-launch-vehicle-landscape.jpg')",
        "space-capsule-portrait":
          "url('/assets/images/technology/image-space-capsule-portrait.jpg')",
        "space-capsule-landscape":
          "url('/assets/images/technology/image-space-capsule-landscape.jpg')",
        "spaceport-portrait":
          "url('/assets/images/technology/image-spaceport-portrait.jpg')",
        "spaceport-landscape":
          "url('/assets/images/technology/image-spaceport-landscape.jpg')",
      },
      spacing: {
        "horizontal-page-sm": "1.5rem",
        "horizontal-page-md": "2.5rem",
        "horizontal-page-lg": "5rem",
        "vertical-page": "0px",
        "vertical-page-lg": "40px",
        "vertical-nav": "24px",
        "gap-top-content-sm": "4rem",
        "gap-top-content-md": "5rem",
        "gap-top-content-lg": "7.5rem",
        "margin-destination-img-sm": "170px",
        "margin-destination-img-md": "300px",
      },
      width: {
        "btn-cta-sm": "150px",
        "btn-cta-md": "242px",
        "btn-cta-lg": "274px",
        "btn-cta-xl": "274px",
        "icon-space-sm": "40px",
        "icon-space": "48px",
        "img-destination-sm": "170px",
        "img-destination-md": "300px",
        "img-destination-lg": "445px",
      },
      height: {
        "nav-height-sm": "4rem",
        "nav-height-md": "5rem",
        "nav-height-lg": "7.5rem",
        "content-wrapper-height-sm": "calc(100vh - 4rem)",
        "content-wrapper-height-md": "calc(100vh - 5rem)",
        "content-wrapper-height-lg": "calc(100vh - 7.5rem)",
        "btn-cta-sm": "150px",
        "btn-cta-md": "242px",
        "btn-cta-lg": "274px",
        "btn-cta-xl": "274px",
        "icon-space-sm": "40px",
        "icon-space": "48px",
        "img-destination-sm": "170px",
        "img-destination-md": "300px",
        "img-destination-lg": "445px",
      },
      screens: {
        tall: { raw: "((min-height: 800px) and (min-width: 1024px))" },
        short: { raw: "((max-height: 600px) and (min-width: 1024px))" },
        medium: { raw: "(min-width: 1280px)" },
        mediumLarge: { raw: "(min-width: 1366px)" },
        large: { raw: "(min-width: 1440px)" },
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
