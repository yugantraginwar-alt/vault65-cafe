/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#080808',
        surface: '#121212',
        surfaceHighlight: '#1f1f1f',
        primary: '#D4AF37', /* Gold neon accent */
        secondary: '#4A3B32', /* Warm coffee brown */
        text: '#f2f2f2',
        muted: '#8e8e8e',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px #D4AF37' },
          '100%': { boxShadow: '0 0 20px #D4AF37' },
        }
      }
    },
  },
  plugins: [],
}
