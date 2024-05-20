/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#E900E7",
        },
        background: {
          DEFAULT: "#030929",
        },
      },
    },
  },
  plugins: [],
}
