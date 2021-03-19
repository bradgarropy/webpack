const { merge } = require("webpack-merge");
const { EnvironmentPlugin } = require("webpack");
const commonConfig = require("./webpack.common.js");

const devConfig = {
  mode: "development",
  plugins: [
    new EnvironmentPlugin({
      API: "https://dev.bradgarropy.com",
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
