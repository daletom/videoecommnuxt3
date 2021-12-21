module.exports = {
    mode: "jit",
  purge: [
    "./assets/**/*.{css}",
    "./components/*.{vue,js}",
    "./components/**/*.{vue,js}",
    "./pages/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./*.{vue,js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  variants: {
    extend: {},
  },
  content: [],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'),
  require('@tailwindcss/aspect-ratio'),],
};
