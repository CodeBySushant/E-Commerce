/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./client/index.html",
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: "var(--color-primary, #4fbf8b)",
          "primary-dull": "var(--color-primary-dull, #44ae7c)",
        },
      },
    },
    plugins: [],
  }