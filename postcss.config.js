module.exports = {
  plugins: [
    "postcss-flexbugs-fixes",
    "postcss-mixins",
    "postcss-color-mod-function",
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
