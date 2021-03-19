const { merge } = require("webpack-merge");
const { EnvironmentPlugin } = require("webpack");
const commonConfig = require("./webpack.common.js");

const prodConfig = {
  mode: "production",
  plugins: [
    new EnvironmentPlugin({
      API: "https://bradgarropy.com",
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
