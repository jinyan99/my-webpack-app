const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

console.log("现在在开发模式", process.env);

module.exports = {
  entry: {
    app: "./src/index.js",
    // another: './src/another-module.js'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Production",
    }),
    new webpack.HashedModuleIdsPlugin(), // 对于三方依赖前后构建的hash值能不随自身的module.id引起变化，随模块路径，这样就能达到依赖版本不变，构建出的vendor文件hash值就不变
    new webpack.ProvidePlugin({
      // 我们本质上所做的，就是告诉 webpack: 如果你遇到了至少一处用到 _ 变量的模块实例，那请你将 lodash package 引入进来，并将其提供给需要用到它的模块。
      // _: 'lodash'// 赋给_为全局变量
      join: ["lodash", "join"], // 暴漏模块的单个导出 赋在全局作用域内可直接使用join------> 这样就能很好的与 tree shaking 配合，将 lodash library 中的其余没有用到的导出去除。
    }),
  ],
  module: {
    rules: [
      // 都是正则匹配的文件名进行特定加载
      /**
       * 这块作用是：模块-规则这一栏中根据test的正则表达式查找到匹配的文件。并将其提供给指定的loader，如下面的
       * 所有css结尾的文件都将提供给style-loader 和 css-loader加载器执行：在此模块执行过程中，会变成含有 CSS 字符串的 <style> 标签，将被插入到 html 文件的 <head> 中。
       */
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        /*
         * ，在 import MyImage from './my-image.png' 时，此图像将被处理并添加到 output 目录，_并且_ MyImage 变量将包含该图像在处理后的最终 url。在使用 css-loader 时，如前所示，会使用类似过程处理你的 CSS 中的 url('./my-image.png')。loader 会识别这是一个本地文件，并将 './my-image.png' 路径，替换为 output 目录中图像的最终路径。而 html-loader 以相同的方式处理 <img src="./my-image.png" />
         *   查看 image-webpack-loader 和 url-loader，以了解更多关于如果增强加载处理图像功能。
         */
        test: /\.(png|svg|png|gif)$/,
        use: [
          "file-loader", // file-loader 和 url-loader 可以接收并加载任何文件，然后将其输出到构建目录,import 他们时能返回dist环境下的url
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ["file-loader"],
      },
      {
        test: /\.(csv|tsv)$/,
        use: ["csv-loader"],
      },
      {
        test: /\.xml$/,
        use: ["xml-loader"],
      },
      {
        test: require.resolve("index.js"),
        use: "imports-loader?this=>window",
      },
      {
        test: require.resolve("global.js"),
        use: "exports-loader?file,parse=helpers.parse",
      },
    ],
  },
  output: {
    // filename: '[name].bundle.js',
    filename: "[name].[contenthash].js",
    // 这个属性决定了non-entry chunk非入口chunk的名称
    chunkFilename: "[name].[contenthash].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
};
