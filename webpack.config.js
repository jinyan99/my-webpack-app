const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = (env, args) => {
  console.log(env.NODE_ENV,'7看env', args) // args含webpack命令行执行时所有传入参数
return {
  // mode: 'development', // 设置它确保为生成的dist下bundle是未压缩版本
  mode: 'production',
  // optimization: { // 优化选项
  //   usedExports: true // 意思就是我们去查看哪些导出的模块被使用，然后再进行打包,会在打的包中未使用的exports代码块处作出特定标记，供摇树使用
  // },
  // entry: './src/index.js',
  entry: {
    app: './src/index.js',
    // print: './src/print.js' 已经在indexjs等模块调用它的化，就不用在入口处定义它了

  },
  stats: 'errors-only', // 显示日志 ：只在发生错误时输出 默认是“verbose”全部输出
  devtool: 'inline-source-map', // 用于开发环境模式下源映射sourcemap使用
  // devtool: 'source-map' // 生产环境下开启sourcemap
  // devServer: { // 监听功能：修改配置文件，告诉 dev server，从什么位置查找文件
  //   contentBase: './dist',
  //   hot: true
  // },
  output: {
    // filename: 'bundle.js',
    filename: '[name].bundle.js', // [name]就是入口文件名app这个属性key
    path: path.resolve(__dirname, 'dist'),// 实质上，发送到 output.path 目录的每个文件，都将从 output.publicPath 位置引用。默认/ 就是从dist的/根路径下引用寻找资源
    // 以确保起devServer服务时候 文件资源能够正确地 serve 在 http://localhost:3000 下，稍后我们会指定 port number(端口号)。接下来是设置自定义 express server：
    publicPath: '/'
  },
  module: {
    rules: [// 都是正则匹配的文件名进行特定加载
      /**
       * 这块作用是：模块-规则这一栏中根据test的正则表达式查找到匹配的文件。并将其提供给指定的loader，如下面的
       * 所有css结尾的文件都将提供给style-loader 和 css-loader加载器执行：在此模块执行过程中，会变成含有 CSS 字符串的 <style> 标签，将被插入到 html 文件的 <head> 中。
       */
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        /*
         * ，在 import MyImage from './my-image.png' 时，此图像将被处理并添加到 output 目录，_并且_ MyImage 变量将包含该图像在处理后的最终 url。在使用 css-loader 时，如前所示，会使用类似过程处理你的 CSS 中的 url('./my-image.png')。loader 会识别这是一个本地文件，并将 './my-image.png' 路径，替换为 output 目录中图像的最终路径。而 html-loader 以相同的方式处理 <img src="./my-image.png" /> 
         *   查看 image-webpack-loader 和 url-loader，以了解更多关于如果增强加载处理图像功能。
         */
        test: /\.(png|svg|png|gif)$/,
        use: [
          'file-loader' // file-loader 和 url-loader 可以接收并加载任何文件，然后将其输出到构建目录,import 他们时能返回dist环境下的url
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(csv|tsv)$/,
        use: [
          'csv-loader'
        ]
      },
      {
        test: /\.xml$/,
        use: [
          'xml-loader'
        ]
      }
    ]
  },
  // colors: {
  //   green: '\u001b[32m',
  // },
  plugins: [
    new CleanWebpackPlugin(), // 每次构建前清理 /dist 文件夹
    new HtmlWebpackPlugin({
      title: '管理输出'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'jinyan': 4, // 在项目代码中定义全局变量，就可以在src代码中可以直接访问jinyan这个变量为true,
      'process.env.NODE_ENV': JSON.stringify('jinyan')
      // 在这显示设置时，就会覆盖掉 webpack初始化这个字符串属性的mode值,设字符串为值会编译时报错没有这个变量，解决方案用JSON.stringify序列化以下即可
    }),
    new webpack.ProvidePlugin({
      // 我们本质上所做的，就是告诉 webpack: 如果你遇到了至少一处用到 _ 变量的模块实例，那请你将 lodash package 引入进来，并将其提供给需要用到它的模块。
      // _: 'lodash'// 赋给_为全局变量
      join: ["lodash", "join"], // 暴漏模块的单个导出 赋在全局作用域内可直接使用join------> 这样就能很好的与 tree shaking 配合，将 lodash library 中的其余没有用到的导出去除。
    }),
  ]
}}