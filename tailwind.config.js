/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        decreasingWidth: {
          from: { width: "100%" },
          to: { width: 0 },
        },
        slideInFromRight: {
          from: { opacity: 0, transform: "translateX(100%)" },
          to: { opacity: 1, transform: "translateX(0)" },
        },
        slideOutToRight: {
          from: { opacity: 1, transform: "translateX(0)" },
          to: { opacity: 0, transform: "translateX(100%)" },
        },
        glow: {
          "0%": { top: 0, left: 0, transform: "translate(-50%, -50%)" },
          "25%": { top: "100%", left: 0, transform: "translate(-50%, -50%)" },
          "50%": {
            top: "100%",
            left: "100%",
            transform: "translate(-50%, -50%)",
          },
          "75%": { top: 0, left: "100%", transform: "translate(-50%, -50%)" },
          // "95%": { top: 0, left: 0, transform: "translate(-50%, -50%)" },
          "100%": { top: 0, left: 0, transform: "translate(-50%, -50%)" },
        },
      },
      animation: {
        "fade-in": "fadeIn 300ms",
        decreasing: "decreasingWidth linear",
        "slide-in-from-right": "slideInFromRight 300ms",
        "slide-out-to-right": "slideOutToRight 300ms",
        "border-glow": "glow 8s linear infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/container-queries")],
};
