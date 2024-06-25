/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: true, // Ensure preflight is enabled
  },
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addBase }) {
      addBase({
        'html': { margin: '0', padding: '0' },
        'body': { margin: '0', padding: '0' },
      });
    },
  ],
}

