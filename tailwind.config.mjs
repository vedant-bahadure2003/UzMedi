

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        'loop-scroll': 'loopScroll 3s linear infinite',
      },
      keyframes: {
        loopScroll: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
};
