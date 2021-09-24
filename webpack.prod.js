const {merge} = require('webpack-merge');
const common = require('./webpack.common.js');
console.log('现在在开发模式', process.env)
module.exports = merge(common, {
   mode: 'production',
   devtool: 'source-map',
   optimization: {
    //  splitChunks: {
    //    chunks: 'all'
    //  }
    runtimeChunk: 'single', // 运行时代码分离 作内容hash缓存优化
    splitChunks: {
      cacheGroups: {
        vendor: { // 用来正则出三方依赖包分离 作内容hash缓存优化
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
   }
 });