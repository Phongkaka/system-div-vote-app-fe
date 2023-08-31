/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      lineHeight: {
        1.8: '1.8'
      },
      colors: {
        pink: '#fc2e9e',
        green: '#BDF738',
        black: '#111111',
        dark: '#9C9C9C',
        green_text: '#A4DF1B'
      }
    }
  },
  plugins: []
}
