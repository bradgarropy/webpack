const {merge} = require("webpack-merge");
const commonConfig = require("./webpack.common.js");

const devConfig = {
    mode: "development",
}

module.exports = merge(commonConfig, devConfig)
