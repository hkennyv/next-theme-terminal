module.exports = {
  plugins: [
    "postcss-color-mod-function",
    "postcss-flexbugs-fixes",
    "postcss-mixins", // can bump version when PostCSS 8 is supported in NextJS
    "postcss-nested", // can bump version when PostCSS 8 is supported in NextJS
    [
      "postcss-preset-env",
      {
        autoprefixer: {
          flexbox: "no-2009",
        },
        stage: 1,
        preserve: true,
        features: {
          "custom-properties": true,
        },
      },
    ],
  ],
};
