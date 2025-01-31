/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        ripple: {
          '0%': { transform: 'scale(0)', opacity: '0.7' },
          '100%': { transform: 'scale(4)', opacity: '0' }
        }
      },
      animation: {
        ripple: 'ripple 0.6s linear'
      }
    }
  },
  plugins: []
}
