/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "progress-bkg": "#013564",
        "button-bkg": "#fe4a5a;",
        "button-secondary": "#2a64ad;",
        "button-secondary-hover": "#0091ff",
        "semi-transparent": "rgba(246, 245, 240, 0.7)",
        "contrast-color": "#f4943d",
        "heading-color": "#5c647a",
        "skills-bkg": "#aeb3bb",
        "gradient-from": "#E92085",
        "gradient-to": "#FD7521",
      },
    },
  },
  plugins: [],
};
