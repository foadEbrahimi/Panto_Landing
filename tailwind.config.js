/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        gilroyBold: ['gilroyBold'],
        gilroyHeavy: ['gilroyHeavy'],
        gilroyLight: ['gilroyLight'],
        gilroyMedium: ['gilroyMedium'],
        gilroyRegular: ['gilroyRegular'],
      },
    },
  },
  plugins: [],
};
