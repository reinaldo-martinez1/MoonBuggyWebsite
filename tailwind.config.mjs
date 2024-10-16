/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors';
/**
 * The following code defines several color constants to be used
 * throughout the website. Team-specific colors have been added to
 * align with the team's logo and theme. The existing colors in the template
 * were retained to avoid potential errors or conflicts within the code.
 * 
*/

export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/preline/preline.js",
  ],
  darkMode: "class",
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#000000",
      white: "#ffffff",
      gray: colors.gray,
      indigo: colors.indigo,
      neutral: colors.neutral,  // Used mainly for text color
      yellow: {
        50: "#fefce8",
        100: "#fef9c3",
        400: "#facc15",
        500: "#eab308",
      }, // Accent colors, used mainly for star color, heading and buttons
      orange: {
        100: "#ffedd5",
        200: "#fed7aa",
        300: "#fb713b",
        400: "#fa5a15",
        500: "#e14d0b",
        600: "#ea580c",
      }, // Primary colors, used mainly for links, buttons and svg icons
      red: colors.red, // Used for bookmark icon
      zinc: colors.zinc, // Used mainly for box-shadow
      //Team colors:
      darkGrayTeam: "#5a5a59",
      lightGrayTeam: "#c1c1c1",
      superLightGrayTeam: "#ebebeb",
      greenTeam: "#88c677",
      greenColegio: "#337137",
      darkbronze: "#906323",
      bronze: "#B87333",
      silver: "#C0C0C0"
    },
    extend: {},
  },
  plugins: [
    require("tailwindcss/nesting"),
    require("preline/plugin"),
    require("@tailwindcss/forms"),
  ],
};
