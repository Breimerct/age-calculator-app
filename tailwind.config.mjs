/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans serif"],
      },

      colors: {
        "primary-purple": "var(--purple)",
        "light-red": "var(--light-red)",
        "custom-white": "var(--white)",
        "off-white": "var(--off-white)",
        "light-grey": "var(--light-grey)",
        "smokey-grey": "var(--smokey-grey)",
        "off-black": "var(--off-black)",
      },
    },
  },
  plugins: [],
};
