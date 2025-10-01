/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF6B9D',     // Rose doux Apple Intelligence
        secondary: '#5AC8FA',   // Bleu cyan Apple Intelligence
        accent: '#AF52DE',      // Violet pastel Apple Intelligence
      },
    },
  },
  plugins: [],
}

