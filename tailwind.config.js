/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF6B35',     // Orange cosmique iPhone 17 Pro
        secondary: '#0A84FF',   // Bleu Apple
        accent: '#BF5AF2',      // Violet Apple
        dark: '#000000',        // Noir Apple
        'dark-gray': '#1d1d1f', // Gris foncé Apple
      },
    },
  },
  plugins: [],
}

