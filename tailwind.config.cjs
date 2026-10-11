/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Custom colors based on the new distinctive palette
        ink: '#2c3e50',
        muted: '#7f8c8d',
        paper: '#fdf6e3',
        white: '#ffffff',
        accent: '#e74c3c',
        'accent-dark': '#c0392b',
        line: '#ecf0f1',
        peach: '#f39c12',
        blue: '#3498db',
      },
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}