/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Custom colors based on the original site's CSS variables
        ink: '#17211f',
        muted: '#65716d',
        paper: '#f4f3ed',
        white: '#fffef9',
        accent: '#d4f36a',
        accentDark: '#5f7019',
        line: '#d9ddd4',
        peach: '#f5b99d',
        blue: '#b9d5e4',
      },
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}