/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "mobile": "500px",
      },
      colors: {
        omi: {
          "gray-100": "#EFEFEF",
          "gray-200": "#A4A4A4",
        },
      },
      fontFamily: {
        "permanent-marker": "var(--font-permanent-marker)",
        fredoka: "var(--font-fredoka)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(100%)" },
        },
        "marquee-continuation": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0%)" },
        },
        scale: {
          "0%, 100%": { transform: "scale(1, 1)" },
          "30%": { transform: "scale(1.25, 1.25)" },
        },
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        "marquee-continuation": "marquee-continuation 30s linear infinite",
        scale: "scale 0.3s ease-in",
      },
    },
  },
  plugins: [],
};
