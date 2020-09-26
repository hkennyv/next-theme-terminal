module.exports = {
  plugins: [
    "postcss-color-mod-function",
    "postcss-flexbugs-fixes",
    "postcss-mixins",
    "postcss-nested",
    [
      "postcss-preset-env",
      {
        autoprefixer: {
          flexbox: "no-2009",
        },
        stage: 3,
        features: {
          "custom-properties": false,
        },
      },
    ],
  ],
};
