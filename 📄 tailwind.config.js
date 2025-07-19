/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // 👈 scans everything in src/
  ],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 10s linear infinite", // 👈 custom spin animation
      },
    },
  },
  plugins: [],
};
