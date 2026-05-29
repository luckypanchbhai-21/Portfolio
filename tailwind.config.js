/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#050816",
        panel: "#0c1024",
        line: "rgba(255,255,255,0.12)",
        electric: "#58e6ff",
        coral: "#ff6b6b",
        lime: "#b8ff6a",
      },
      fontFamily: {
        display: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 40px rgba(88, 230, 255, 0.2)",
        card: "0 20px 80px rgba(0, 0, 0, 0.35)",
      },
      backgroundImage: {
        grid:
          "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
