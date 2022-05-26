const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");
const postcssPresetEnv  = require('postcss-preset-env')

const config = {
  plugins: [
    postcssPresetEnv({
      stage: 0,
      features: {
      'logical-properties-and-values': false, 
      'prefers-color-scheme-query': false, 
      'gap-properties': false,
      'custom-properties': false,
      'dir-pseudo-class': false,
      'focus-within-pseudo-class': false,
      'focus-visible-pseudo-class': false,
      'color-functional-notation': false,
    }
  }),
  tailwindcss,
  autoprefixer
 ] //Some plugins, like tailwindcss/nesting, need to run before Tailwind, tailwindcss(), //But others, like autoprefixer, need to run after, autoprefixer],
};

module.exports = config;
