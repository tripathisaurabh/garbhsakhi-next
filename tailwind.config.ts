/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#E91E63",
        "primary-dark": "#C2185B",
        "primary-light": "#F8BBD0",
        secondary: "#9C27B0",
        "text-primary": "#1e293b",
        "text-secondary": "#64748b",
        "text-muted": "#94a3b8",
        "bg-primary": "#ffffff",
        "bg-secondary": "#FFF0F5",
        "bg-tertiary": "#f1f5f9",
        border: "#e2e8f0",
        success: "#10b981",
        error: "#ef4444",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        fadeInUp: "fadeInUp 0.8s ease-out",
        float: "float 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
