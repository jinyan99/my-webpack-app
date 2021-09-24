const {merge} = require("webpack-merge");
const common = require("./webpack.common.js");
console.log('现在在开发模式', process.env.NODE_ENV)
module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist",
    port: 3040
  },
});
