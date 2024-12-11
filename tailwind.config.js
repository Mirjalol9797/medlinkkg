/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(#fff 0%,#fefdfd 19.72%,#fdfcfc 34.2%,#f2f1f1 77.26%)",
      },
    },
    screens: {
      420: { max: "420px" },
      480: { max: "480px" },
      640: { max: "640px" },
      768: { max: "768px" },
      960: { max: "960px" },
      1024: { max: "1024px" },
      1200: { max: "1200px" },
      1400: { max: "1400px" },
    },
  },
  plugins: [],
};
