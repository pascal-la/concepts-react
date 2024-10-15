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
        "border-glow": "glow 8s linear infinite",
        "fade-in": "fadeIn 300ms",
      },
    },
  },
  plugins: [],
};
