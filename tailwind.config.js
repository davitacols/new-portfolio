/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0f0f0f',
          light: '#ffffff',
        },
        secondary: {
          DEFAULT: '#e1e1e1',
          light: '#1a1a1a',
        },
        accent: {
          DEFAULT: '#3d3d3d',
          light: '#6366f1',
        },
        surface: {
          DEFAULT: '#141414',
          light: '#f8fafc',
        },
      },
      boxShadow: {
        subtle: '0 2px 10px rgba(0, 0, 0, 0.1)',
      },
      screens: {
        xs: '450px',
      },
      fontFamily: {
        sans: ['League Spartan', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};