module.exports = {
  target: "serverless",
  webpack: function (config) {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader",
    });
    return config;
  },
  // https://nextjs.org/docs/messages/webpack5
  future: {
    webpack5: true,
  },
};
