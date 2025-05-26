/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './app/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
      './assets/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
      extend: {
        colors: {
          'brand-purple': '#24135F', // Figma dark purple
          'brand-red': '#F94239',   // Figma red/pink
          'brand-light': '#FFFFFF',
          // You can keep or remove your existing primary, accent, background if they are not used
          // primary: '#2B0A3D',
          // accent: '#FF3B6D',
          // background: '#1A0033',
          light: '#FFFFFF', // Retained for existing 'text-light' if used elsewhere
        },
        fontFamily: {
          sans: ['var(--font-geist-sans)', 'Arial', 'sans-serif'], // Keep your Geist setup
          mono: ['var(--font-geist-mono)', 'monospace'],       // Keep your Geist setup
          handicraft: ['TheYearofHandicrafts', 'sans-serif'], // Added for clarity if you want to call it explicitly
        },
        borderRadius: {
          '4xl': '2rem',
          '5xl': '3rem',
          '6xl': '4rem', // For very rounded blob shapes
        }
      },
    },
    plugins: [require('tailwindcss-rtl')],
  };