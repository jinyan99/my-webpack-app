## 官方webpack 指南 DEMO

<!-- TOC -->

- [官方webpack 指南 DEMO](#%E5%AE%98%E6%96%B9webpack-%E6%8C%87%E5%8D%97-demo)
  - [要点](#%E8%A6%81%E7%82%B9)
  - [记录](#%E8%AE%B0%E5%BD%95)
    - [概念解析](#%E6%A6%82%E5%BF%B5%E8%A7%A3%E6%9E%90)
  - [模块热替换](#%E6%A8%A1%E5%9D%97%E7%83%AD%E6%9B%BF%E6%8D%A2)
  - [tree shaking](#tree-shaking)
    - [sideEffects副作用](#sideeffects%E5%89%AF%E4%BD%9C%E7%94%A8)
  - [生产环境](#%E7%94%9F%E4%BA%A7%E7%8E%AF%E5%A2%83)
    - [common配置](#common%E9%85%8D%E7%BD%AE)
    - [指定mode & 环境变量](#%E6%8C%87%E5%AE%9Amode--%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F)
    - [minification压缩](#minification%E5%8E%8B%E7%BC%A9)
    - [source mapping 源码映射](#source-mapping-%E6%BA%90%E7%A0%81%E6%98%A0%E5%B0%84)
    - [最小化CSS](#%E6%9C%80%E5%B0%8F%E5%8C%96css)
    - [CLI替代选项 @TODO 暂时没跑通版本问题](#cli%E6%9B%BF%E4%BB%A3%E9%80%89%E9%A1%B9-todo-%E6%9A%82%E6%97%B6%E6%B2%A1%E8%B7%91%E9%80%9A%E7%89%88%E6%9C%AC%E9%97%AE%E9%A2%98)
  - [代码分离](#%E4%BB%A3%E7%A0%81%E5%88%86%E7%A6%BB)
    - [防止重复分包就用SplitChunksPlugin插件](#%E9%98%B2%E6%AD%A2%E9%87%8D%E5%A4%8D%E5%88%86%E5%8C%85%E5%B0%B1%E7%94%A8splitchunksplugin%E6%8F%92%E4%BB%B6)
    - [动态导入](#%E5%8A%A8%E6%80%81%E5%AF%BC%E5%85%A5)
    - [bundle分析工具](#bundle%E5%88%86%E6%9E%90%E5%B7%A5%E5%85%B7)
  - [懒加载](#%E6%87%92%E5%8A%A0%E8%BD%BD)
    - [代码分离的问题？](#%E4%BB%A3%E7%A0%81%E5%88%86%E7%A6%BB%E7%9A%84%E9%97%AE%E9%A2%98)
    - [定义](#%E5%AE%9A%E4%B9%89)
    - [实践操作](#%E5%AE%9E%E8%B7%B5%E6%93%8D%E4%BD%9C)
    - [结论](#%E7%BB%93%E8%AE%BA)
  - [缓存](#%E7%BC%93%E5%AD%98)
    - [输出文件的文件名](#%E8%BE%93%E5%87%BA%E6%96%87%E4%BB%B6%E7%9A%84%E6%96%87%E4%BB%B6%E5%90%8D)
    - [提取引导模版extracting boilerplate](#%E6%8F%90%E5%8F%96%E5%BC%95%E5%AF%BC%E6%A8%A1%E7%89%88extracting-boilerplate)
    - [模块标识符module identifier](#%E6%A8%A1%E5%9D%97%E6%A0%87%E8%AF%86%E7%AC%A6module-identifier)
  - [创建library](#%E5%88%9B%E5%BB%BAlibrary)
  - [shim预置依赖](#shim%E9%A2%84%E7%BD%AE%E4%BE%9D%E8%B5%96)
    - [shim预置全局变量](#shim%E9%A2%84%E7%BD%AE%E5%85%A8%E5%B1%80%E5%8F%98%E9%87%8F)
    - [细粒度shim](#%E7%BB%86%E7%B2%92%E5%BA%A6shim)
    - [全局export](#%E5%85%A8%E5%B1%80export)
    - [加载polyfill](#%E5%8A%A0%E8%BD%BDpolyfill)
    - [进一步优化](#%E8%BF%9B%E4%B8%80%E6%AD%A5%E4%BC%98%E5%8C%96)
    - [Node内置工具](#node%E5%86%85%E7%BD%AE%E5%B7%A5%E5%85%B7)
    - [其他工具](#%E5%85%B6%E4%BB%96%E5%B7%A5%E5%85%B7)
  - [渐进式网络应用程序](#%E6%B8%90%E8%BF%9B%E5%BC%8F%E7%BD%91%E7%BB%9C%E5%BA%94%E7%94%A8%E7%A8%8B%E5%BA%8F)
  - [添加Woekbox插件](#%E6%B7%BB%E5%8A%A0woekbox%E6%8F%92%E4%BB%B6)
  - [注册Service Worker](#%E6%B3%A8%E5%86%8Cservice-worker)
  - [TypeScript](#typescript)
    - [基础配置](#%E5%9F%BA%E7%A1%80%E9%85%8D%E7%BD%AE)
    - [loader](#loader)
    - [source map](#source-map)
    - [使用third party library](#%E4%BD%BF%E7%94%A8third-party-library)
    - [导入其他资源](#%E5%AF%BC%E5%85%A5%E5%85%B6%E4%BB%96%E8%B5%84%E6%BA%90)
    - [构建性能](#%E6%9E%84%E5%BB%BA%E6%80%A7%E8%83%BD)
  - [环境变量](#%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F)
  - [构建性能](#%E6%9E%84%E5%BB%BA%E6%80%A7%E8%83%BD)
    - [通用环境 优化手段](#%E9%80%9A%E7%94%A8%E7%8E%AF%E5%A2%83-%E4%BC%98%E5%8C%96%E6%89%8B%E6%AE%B5)
    - [开发环境 优化手段](#%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83-%E4%BC%98%E5%8C%96%E6%89%8B%E6%AE%B5)
    - [生产环境 优化手段](#%E7%94%9F%E4%BA%A7%E7%8E%AF%E5%A2%83-%E4%BC%98%E5%8C%96%E6%89%8B%E6%AE%B5)
    - [工具相关问题](#%E5%B7%A5%E5%85%B7%E7%9B%B8%E5%85%B3%E9%97%AE%E9%A2%98)
  - [内容安全策略](#%E5%86%85%E5%AE%B9%E5%AE%89%E5%85%A8%E7%AD%96%E7%95%A5)
    - [添加nonce](#%E6%B7%BB%E5%8A%A0nonce)
    - [启用CSP](#%E5%90%AF%E7%94%A8csp)
  - [开发 - Vagrant](#%E5%BC%80%E5%8F%91---vagrant)
  - [管理依赖](#%E7%AE%A1%E7%90%86%E4%BE%9D%E8%B5%96)
    - [带表达式的require语句](#%E5%B8%A6%E8%A1%A8%E8%BE%BE%E5%BC%8F%E7%9A%84require%E8%AF%AD%E5%8F%A5)
    - [require.context](#requirecontext)
    - [context module API](#context-module-api)
  - [公共路径](#%E5%85%AC%E5%85%B1%E8%B7%AF%E5%BE%84)
    - [基于环境设置](#%E5%9F%BA%E4%BA%8E%E7%8E%AF%E5%A2%83%E8%AE%BE%E7%BD%AE)
    - [在运行时设置](#%E5%9C%A8%E8%BF%90%E8%A1%8C%E6%97%B6%E8%AE%BE%E7%BD%AE)
    - [以下是对资源使用 CDN 和 hash 的复杂示例：](#%E4%BB%A5%E4%B8%8B%E6%98%AF%E5%AF%B9%E8%B5%84%E6%BA%90%E4%BD%BF%E7%94%A8-cdn-%E5%92%8C-hash-%E7%9A%84%E5%A4%8D%E6%9D%82%E7%A4%BA%E4%BE%8B)
  - [集成](#%E9%9B%86%E6%88%90)
    - [npm scripts](#npm-scripts)
    - [Grunt](#grunt)
    - [Gulp](#gulp)
    - [Mocha](#mocha)
    - [Karma](#karma)

<!-- /TOC -->

### 要点

- [参考链接](https://v4.webpack.docschina.org/guides/output-management/) 是基于webpack4.0版本的，与安装5.0版本可能会有些api失效错误

### 记录

- packagejson中：如果main未设置，则默认为包根目录下的index.js。
- "private":"true", packagejson中设它npm拒绝发布它，防止意外发布你的代码
- 执行 npx webpack，会默认将我们的脚本 src/index.js 作为 入口起点，也会生成 dist/main.js 作为
- 加载数据时，是直接解析完后赋给你的import的变量，不会在dist目录下创建相应的文件 -----> 就加载资源时：字体和图片会在dist下创建对应文件返回路径
  - import Data from './data.json' 默认将正常运行。要导入 CSV、TSV 和 XML，你可以使用 csv-loader 和 xml-loader。
- 想要在项目调试中看到sourcemap功能得在配置文件中 加devtool: 'inline-source-map', 和 mode: 'development', // 用于开发环境模式下源映射sourcemap使用
- 监听文件自动build的3种可选方式
  - webpack watch mode(webpack 观察模式)：你可以指示 webpack "watch" 依赖图中所有文件的更改。如果其中一个文件被更新，代码将被重新编译，所以你不必再去手动运行整个构建。
    - 缺点：得手动刷新浏览器
  - webpack-dev-server 为你提供了一个简单的 web server，并且具有 live reloading(实时重新加载) 功能。自动刷新浏览器`npm install --save-dev webpack-dev-server`
    - 修改配置文件，告诉 dev server，从什么位置查找文件+devServer属性
    - webpack-dev-server 在编译之后不会写入到任何输出文件如dist目录中。而是将 bundle 文件保留在内存中，然后将它们 serve 到 server 中，就好像它们是挂载在 server 根路径上的真实文件一样。
    - 如果你的页面希望在其他不同路径中找到 bundle 文件，则可以通过 dev server 配置中的 publicPath 选项进行修改。
    - ⚠️：这个版本可能不太合适，用这个插件会报错
  - webpack-dev-middleware: 是个封装器(wrapper)，**作用就是实现打包结果在内存中**；它可以把 webpack 处理过的文件发送到一个 server。 webpack-dev-server 在内部使用了它，然而它也可以作为一个单独的 package 来使用，以便根据需求进行更多自定义设置。下面是一个 webpack-dev-middleware 配合 express server 的示例(值得一提的是，被 webpack-dev-server 及众多其他包依赖的 webpack-dev-middleware 就是通过自定义文件系统这种方式如可以使用 memory-fs 替换默认的 outputFileSystem，以将文件写入到内存中，而不是写入到磁盘；，将你的文件神秘地隐藏起来，但却仍然可以用它们为浏览器提供服务！)
    - 缺点：有内容修改时也不会自动刷新浏览器

#### 概念解析

- **webpack-dev-middleware**：是一个容器，它的作用是将webpack处理后的文件传递给server（webpack-dev-middleware 依赖于memory-fs，它将 webpack 原本的 outputFileSystem 替换成了MemoryFileSystem 实例，这样webpack编译的结果是放置在内存中而不是直接生成文件）。webpack-dev-server也是通过webpack-dev-middleware实现，同时，webpack-dev-middleware本身可以作为一个单独的包来使用。
- **webpack-hot-middleware**： 实现热更新必须使用webpack-hot-middleware插件，该插件通过webpack的HMR API，浏览器和服务器之间建立连接并接收更新。它只专注于webpack和浏览器之间的通信机制。


### 模块热替换

  模块热替换(hot module replacement 或 HMR)是 webpack 提供的最有用的功能之一。它允许在运行时更新所有类型的模块，而无需完全刷新。本页面重点介绍其实现
> HMR 不适用于生产环境，这意味着它应当用于开发环境。
  
  - 现在还在报错 版本不兼容问题---再说吧 @TODO

### [tree shaking](https://v4.webpack.docschina.org/guides/tree-shaking/)

通常用于描述移除 JavaScript 上下文中的未引用代码(dead-code)。它依赖于 ES2015 模块语法的 静态结构 特性，例如 import 和 export。这个术语和概念实际上是由 ES2015 模块打包工具 rollup 普及起来的。

- packagejson中：加"sideEffects": false,意思就是，对所有的模块都进行Tree Shaking也就是将没有引入的方法等不进行打包到打包输出文件中
- 在webpack.config.js中进行下面的配置：optimization属性对象中加usedExprots: true属性 意思就是我们去查看哪些导出的模块被使用，然后再进行打包这里需要注意的是，我们下面的配置在开发模式下的配置mode为development

> 一般我们在配置sideEffects选项的时候会配置成下面的：意思就是除了我们通过这种import "./strle.css"也不进行Tree Shaking检查，其他的对进行Tree Shaking检查，因为如果进行检查，会忽略我们的样式。

#### sideEffects副作用

- 这个属性，可以设置false和数组，false指确定项目代码都不含副作用，你可以放心大胆的去删除未用到的export，摇树，
- 数组是数组中的路径文件含了一些副作用，摇树的时候略过他们就好了
> 这里的"sideEffects有很大的用途，比如我们在使用@babel/polyfill的时候，他的内部并没有使用export导出任何模块，他只是通过类似windows.Promise这样给全局T添加一些函数，但是我们使用Tree Shaking这种去打包的时候，他会发现这个模块我们并没有通过import引入任何模块，他会以为，我们并没有使用这个模块，不会对他进行打包，这时候，我们需要这样配置：添加"sideEffects": ["@babel/polyfill"]这样，我们在打包的时候不会对这个模块进行Tree Shaking检查。

> "side effect(副作用)" 的定义是，在导入时会执行特殊行为的代码，而不是仅仅暴露一个 export 或多个 export。举例说明，例如 polyfill，它影响全局作用域，并且通常不提供 export。

- **注意**，所有导入文件都会受到 tree shaking 的影响。这意味着，如果在项目中使用类似 css-loader 并 import 一个 CSS 文件，则需要将其添加到 side effect 列表中，以免在生产模式中无意中将它删除

- **真正运行** tree shaking 还需要 ModuleConcatenationPlugin。通过 mode: "production" 可以添加此插件。如果你没有使用 mode 设置，记得手动添加 ModuleConcatenationPlugin。bundleq全部压缩成编码了


### 生产环境

在开发环境中，我们需要：强大的 source map 和一个有着 live reloading(实时重新加载) 或 hot module replacement(热模块替换) 能力的 localhost server。而生产环境目标则转移至其他方面，关注点在于压缩 bundle、更轻量
的 source map、资源优化等，通过这些优化方式改善加载时间。由于要遵循逻辑分离，我们通常建议为每个环境编写彼此独立的 webpack 配置。

#### common配置
虽然，以上我们将生产环境和开发环境做了略微区分，但是，请注意，我们还是会遵循不重复原则(Don't repeat yourself - DRY)，保留一个 "common(通用)" 配置。为了将这些配置合并在一起，我们将使用一个名为 webpack-merge 的工具。
此工具会引用 "common" 配置，因此我们不必再在环境特定(environment-specific)的配置中编写重复代码

我们先从安装 webpack-merge 开始，并将之前指南中已经成型的那些代码进行分离：---新建webpack.common.js/webpack.dev.js/webpack.prod.js
`npm install --save-dev webpack-merge`

#### 指定mode & 环境变量

- 经过webpack编译阶段默认是读取不到node提供的环境变量或配置的全局变量，得通过DefinePlugin插件设置
```js
import webpack from 'webpack';

// 尝试使用环境变量，否则使用根路径
const ASSET_PATH = process.env.ASSET_PATH || '/';

export default {
  output: {
    publicPath: ASSET_PATH
  },

  plugins: [
    // 这可以帮助我们在代码中安全地使用环境变量
    new webpack.DefinePlugin({
      'process.env.ASSET_PATH': JSON.stringify(ASSET_PATH)
    })
  ]
};
```
- 从 webpack v4 开始, 指定 mode 会根据mode值自动地配置 [DefinePlugin](https://v4.webpack.docschina.org/plugins/define-plugin)插件的初始process值，以供在/src下能当问到process.env.NODE_ENV变量
  - (这个变量是Define插件初始化直接以这个字符串为属性设值的，并不是对象形式，所以直接访问process.env为空对象是获取不到的)
- v5版本中否则设置mode为none时，src文件夹下访问不到process值的，不设mode的话会默认设为production值--能访问到。v4版本中设none访问到的就是none

**执行脚本系统环境变量**：node全局变量node提供的process有个env环境变量属性，会内置一个NODE_ENV值，标识当前环境
> 技术上讲，NODE_ENV 是一个由 Node.js 暴露给执行脚本的系统环境变量。通常用于决定在开发环境与生产环境(dev-vs-prod)下，server tools(服务期工具)、build scripts(构建脚本) 和 client-side libraries(客户端库) 
> 的行为。然而，与预期相反，无法在构建脚本 webpack.config.js 中，将 process.env.NODE_ENV 设置为 "production"，

> 添加了这个插件后：任何位于 /src 的浏览器环境下本地代码都可以关联到 process.env.NODE_ENV 环境变量，都可以读取到这个变量；src外的根目录下配置文件node环境下执行的如webpack配置文件等是取不到由插件定义的全局变量的。
- **思考**：用cross-env包时候，可以直接写NODE_ENV变量直接process.env.NODE_ENV访问，编译阶段src文件夹下都是可以直接访问到，`"dev": "cross-env NODE_ENV=development webpack"`
- 如果要根据 webpack.config.js 中的 mode 变量更改打包行为，则必须将配置导出为一个函数，而不是导出为一个对象：
```js
var config = {
  entry: './app.js'
  //...
};

module.exports = (env, argv) => {

  if (argv.mode === 'development') {
    config.devtool = 'source-map';
  }

  if (argv.mode === 'production') {
    //...
  }

  return config;
};
```

- 下面webpack提供的env环境变量设置 是只能在编译时配置文件中能取到，在src文件下是取不到的，，src文件下只能取到node提供的process中env的NODE_ENV值，两者是不一样的

#### minification压缩

设置 production mode 配置后，webpack v4+ 会默认压缩你的代码。

注意，虽然生产环境下默认使用 TerserPlugin ，并且也是代码压缩方面比较好的选择，但是还有一些其他可选择项。以下有几个同样很受欢迎的插件：

BabelMinifyWebpackPlugin
ClosureCompilerPlugin
如果决定尝试一些其他压缩插件，只要确保新插件也会按照 tree shake 指南中所陈述的具有删除未引用代码(dead code)的能力，以及提供 optimization.minimizer。

#### source mapping 源码映射

我们鼓励你在生产环境中启用 source map，因为它们对 debug(调试源码) 和运行 benchmark tests(基准测试) 很有帮助；
我们将在生产环境中使用 source-map 选项，我们在开发环境中用到的 inline-source-map：

```js
const merge = require('webpack-merge');
  const common = require('./webpack.common.js');

  module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map' // 生产环境下开启sourcemap
  });
  // mode: 'development',
  // devtool: 'inline-source-map', // 用于开发环境模式下源映射sourcemap使用
```

#### 最小化CSS

将生产环境下的 CSS 进行压缩会非常重要，请查看 [在生产环境下压缩](https://v4.webpack.docschina.org/plugins/mini-css-extract-plugin/#minimizing-for-production) 章节。

#### CLI替代选项 @TODO 暂时没跑通版本问题

以上所述也可以通过命令行实现。例如，--optimize-minimize 标记将在幕后引用 TerserPlugin。和以上描述的 DefinePlugin 实例相同，--define process.env.NODE_ENV="'production'" 也会做同样的事情。
而且，webpack -p 将自动地配置上述这两个标记，从而调用需要引入的插件。

虽然这种简短的方式很好，但通常我们建议只使用配置方式，因为在这两种方式中，配置方式能够更准确地理解现在正在做的事情。配置方式还为可以让你更加细微地控制这两个插件中的其他选项

### 代码分离

此特性能够把代码分离到不同的 bundle 中，然后可以按需加载或并行加载这些文件。代码分离可以用于获取更小的 bundle，以及控制资源加载优先级，如果使用合理，会极大影响加载时间。
- 常用的代码分离方法有三种：

  - 入口起点：使用 entry 配置手动地分离代码。
    - 缺点：如果入口 chunk 之间包含一些重复的模块，那些重复模块都会被引入到各个 bundle 中。\n
    - 另外：这种方法不够灵活，并且不能动态地将核心应用程序逻辑中的代码拆分出来。
  - 防止重复：使用 SplitChunksPlugin 去重和分离 chunk。
  - 动态导入：通过模块中的内联函数调用来分离代码。

#### 防止重复分包就用SplitChunksPlugin插件

默认自带SplitChunksPlugin 插件可以将公共的依赖模块提取到已有的 entry chunk 中，或者提取到一个新生成的 chunk。让我们使用这个插件，将前面示例中重复的 lodash 模块去除

- 现在webapck.prod配置文件中添加optimization属性对像splitChunks属性

#### 动态导入
当涉及到动态代码拆分时，webpack 提供了两个类似的技术。第一种，也是推荐选择的方式是，使用符合 ECMAScript 提案 的 import() 语法 来实现动态导入。第二种，则是 webpack 的遗留功能，使用 webpack 特定的 require.ensure。让我们先尝试使用第一种

- import(): import() 调用会在内部用到 promises。如果在旧版本浏览器中使用 import()，记得使用一个 polyfill 库（例如 es6-promise 或 promise-polyfill），来 shim Promise。
  - webpack v4.6.0+ 添加了预取和预加载的支持。
  - 在声明 import 时，使用下面这些内置指令，可以让 webpack 输出 "resource hint(资源提示)"，来告知浏览器：
      - prefetch(预取)：将来某些导航下可能需要的资源
      - preload(预加载)：当前导航下可能需要资源
      - 下面这个 prefetch 的简单示例中，有一个 HomePage 组件，其内部渲染一个 LoginButton 组件，然后在点击后按需加载 LoginModal 组件。
LoginButton.js文件： `import(/* webpackPrefetch: true */ 'LoginModal');`
这后面会生成 <link rel="prefetch" href="login-modal-chunk.js"> 并追加到页面头部，指示着浏览器在闲置时间预取 login-modal-chunk.js 文件。

只要父 chunk 完成加载，webpack 就会添加 prefetch hint(预取提示)。


#### bundle分析工具

如果我们以分离代码作为开始，那么就应该以检查模块的输出结果作为结束，对其进行分析是很有用处,可视化并分析你的 bundle，检查哪些模块占用空间，哪些可能是重复使用的。
[链接](https://v4.webpack.docschina.org/guides/code-splitting/#bundle-%E5%88%86%E6%9E%90-bundle-analysis-)


### 懒加载

#### 代码分离的问题？
之前代码分离那里的代码确实会在脚本运行的时候产生一个分离的代码块 lodash.bundle.js ，在技术概念上“懒加载”它。
问题是加载这个包并不需要用户的交互 -- 意思是每次加载页面的时候都会请求它。这样做并没有对我们有很多帮助，还会对性能产生负面影响。

因此提出懒加载概念来提升性能,就是在代码分离的基础上通过交互去触发动态加载导入包

#### 定义
懒加载或者按需加载，是一种很好的优化网页或应用的方式。这种方式实际上是先把你的代码在一些逻辑断点处分离开，然后在一些代码块中完成某些操作后，立即引用或即将引用另外一些新的代码块。
这样加快了应用的初始加载速度，减轻了它的总体体积，因为某些代码块可能永远不会被加载。

#### 实践操作
我们增加一个交互，当用户点击按钮的时候用 console 打印一些文字。但是会等到第一次交互的时候再加载那个代码块（print.js）。为此，我们返回到代码分离的例子中，把 lodash 放到主代码块中，重新运行代码分离中的代码

#### 结论
懒加载其实很简单，原理就是利用交互去按需触发包的动态加载import()，还是基于代码分离动态导入import()的原理。

### 缓存
本节重点在于通过必要的配置，以确保 webpack 编译生成的文件能够被客户端缓存，而在文件内容变化后，能够请求到新的文件。

#### 输出文件的文件名
webpack 提供了一种使用称为 substitution(可替换模板字符串) 的方式，通过带括号字符串来模板化文件名。其中，[contenthash] substitution 将根据资源内容创建出唯一 hash。当资源内容发生变化时，[contenthash] 也会发生变化。
#### 提取引导模版extracting boilerplate
- webpack 还提供了一个优化功能，可使用 optimization.runtimeChunk 选项将 runtime 代码拆分为一个单独的 chunk。将其设置为 single 来为所有 chunk 创建一个 runtime bundle
- 用来提取运行时代码分包 作缓存优化

**建议：**
- 将第三方库(library)（例如 lodash 或 react）提取到单独的 vendor chunk 文件中，是比较推荐的做法，这是因为，它们很少像本地的源代码那样频繁修改。因此通过实现以上步骤，利用 client 的长效缓存机制，命中缓存来消除请求，并减少向 server 获取资源，同时还能保证 client 代码和 server 代码版本一致
- 这可以通过使用 SplitChunksPlugin 示例 2 中演示的 SplitChunksPlugin 插件的 cacheGroups 选项来实现。我们在 optimization.splitChunks 添加如下 cacheGroups 参数并构建：
- 用来提取三方依赖库代码分包 作缓存优化

#### 模块标识符module identifier
这是因为每个 module.id 会默认地基于解析顺序(resolve order)进行增量。也就是说，当解析顺序发生变化，ID 也会随之改变。因此，简要概括：

- main bundle 会随着自身的新增内容的修改，而发生变化。
- vendor bundle 会随着自身的 module.id 的变化，而发生变化。
- manifest bundle 会因为现在包含一个新模块的引用，而发生变化。
第一个和最后一个都是符合预期的行为 - 而 vendor hash 发生变化是我们要修复的。幸运的是，可以使用两个插件来解决这个问题。第一个插件是 NamedModulesPlugin，将使用模块的路径，而不是一个数字 identifier。虽然此插件有助于在开发环境下产生更加可读的输出结果，然而其执行时间会有些长。第二个选择是使用 HashedModuleIdsPlugin，推荐用于生产环境构建：

### 创建library
除了打包应用程序，webpack 还可以用于打包 JavaScript library。以下指南适用于希望简化打包策略的 library 作者

> 见 我github下 lib-numbers-webpack项目

### shim预置依赖

> shim 是一个库(library)，它将一个新的 API 引入到一个旧的环境中，而且仅靠旧的环境中已有的手段实现。polyfill 就是一个用在浏览器 API 上的 shim。我们通常的做法是先检查当前浏览器是否支持某个 API，如果不支持的话就按需加载对应的 polyfill。然后新旧浏览器就都可以使用这个 API 了。


- webpack compiler 能够识别遵循 ES2015 模块语法、CommonJS 或 AMD 规范编写的模块。然而，一些 third party(第三方库) 可能会引用一些全局依赖（例如 jQuery 中的 $）。因此这些 library 也可能会创建一些需要导出的全局变量。这些 "broken modules(不符合规范的模块)" 就是 shim(预置依赖) 发挥作用的地方
- shim 另外一个极其有用的使用场景就是：当你希望 polyfill 扩展浏览器能力，来支持到更多用户时。在这种情况下，你可能只是想要将这些 polyfills 提供给需要修补(patch)的浏览器（也就是实现按需加载）

#### shim预置全局变量

让我们开始第一个 shim 全局变量的用例。在此之前，先看下我们的项目：

还记得我们之前用过的 lodash 吗？出于演示目的，例如把这个应用程序中的模块依赖，改为一个全局变量依赖。要实现这些，我们需要使用 webpack内置的ProvidePlugin 插件。

- **使用 ProvidePlugin 后，能够在 webpack 编译的每个模块中，通过访问一个变量来获取一个 package。如果 webpack 看到模块中用到这个变量，它将在最终 bundle 中引入给定的 package。让我们先移除 lodash 的 import 语句，改为通过插件提供它**

> 我们本质上所做的，就是告诉 webpack: 如果你遇到了至少一处用到 _ 变量的模块实例，那请你将 lodash package 引入进来，并将其提供给需要用到它的模块,赋给_为全局变量。

- 还可以使用 ProvidePlugin 暴露出某个模块中单个导出，通过配置一个“数组路径”（例如 [module, child, ...children?]）实现此功能。所以，我们假想如下，无论 join 方法在何处调用，我们都只会获取到 lodash 中提供的 join 方法。
(这样就能很好的与 tree shaking 配合，将 lodash library 中的其余没有用到的导出去除。)

#### 细粒度shim

- 当模块运行在 CommonJS 上下文中，这将会变成一个问题，也就是说此时的 this 指向的是 module.exports。在这种情况下，你可以通过使用 imports-loader 覆盖 this 指向
- 可以在配置文件中加条module的rules规则使用imports loader `use: imports-loader?this=>window`

#### 全局export

- 让我们假设，某个 library 创建出一个全局变量，它期望 consumer(使用者) 使用这个变量-就是将某个模块文件的全局变量作为一个普通的模块来导出。为此，我们可以在项目配置中，添加一个小模块来演示说明：
- 详见global.js文件
- 通过利用exports-loader来实现`use: exports-loader?file,parse=helpers.parse`
- 现在，在我们的 entry 入口文件中（即 src/index.js），我们能 import { file, parse } from './globals.js'; ，然后一切将顺利运行。

#### 加载polyfill

- 有很多方法来加载 polyfill。例如，想要引入 babel-polyfill 我们只需如下操作：`npm install --save babel-polyfill`
- 然后，使用 import 将其引入到我们的主 bundle 文件：`import 'babel-polyfill'`
- **一般项目中不建议直接引用babel-polyfill，具体原因及解决办法见百度文章**
- 还有个`npm install --save whatwg-fetch`包和babel-polyfill包单独放到一个babel.js文件 实现按需加载polyfill ====》解决非现代浏览器的需加载所有polyfill/shim，具体见[链接](https://v4.webpack.docschina.org/guides/shimming/#%E5%8A%A0%E8%BD%BD-polyfill)

#### 进一步优化
babel-preset-env package 通过 browserslist 来转译那些你浏览器中不支持的特性。这个 preset 使用 useBuiltIns 选项，默认值是 false，**这种方式可以将全局 babel-polyfill 导入，改进为更细粒度的 import 格式**：
```js
import 'core-js/modules/es7.string.pad-start';
import 'core-js/modules/es7.string.pad-end';
import 'core-js/modules/web.timers';
import 'core-js/modules/web.immediate';
import 'core-js/modules/web.dom.iterable';
```

#### Node内置工具
待看---> 像 process 这种 Node 内置模块，能直接根据配置文件进行正确的 polyfill，而不需要任何特定的 loader 或者 plugin。查看 node 配置页面获取更多信息。
#### 其他工具

script-loader的使用

### 渐进式网络应用程序

渐进式网络应用程序(progressive web application - PWA)，是一种可以提供类似于native app(原生应用程序) 体验的 web app(网络应用程序)。PWA 可以用来做很多事。其中最重要的是，在离线(offline)时应用程序能够继续运行功能。这是通过使用名为 Service Workers 的 web 技术来实现的。

本章将重点介绍，如何为我们的应用程序添加离线体验。我们将使用名为 Workbox 的 Google 项目来实现此目的，该项目提供的工具可帮助我们更简单地为 web app 提供离线支持- 

### 添加Woekbox插件

- 添加 workbox-webpack-plugin 插件，然后调整 webpack.config.js 文件
`npm install workbox-webpack-plugin --save-dev`
- 后面待看 @TODO

### 注册Service Worker 
 
@TODO


你已经使用 Workbox 项目构建了一个离线应用程序。开始进入将 web app 改造为 PWA 的旅程

### TypeScript
TypeScript 是 JavaScript 的超集，为其增加了类型系统，可以编译为普通 JavaScript 代码。这篇指南里我们将会学习是如何将 webpack 和 TypeScript 进行集成。

- 需要再看

#### 基础配置

#### loader

#### source map

#### 使用third party library

#### 导入其他资源

#### 构建性能

### 环境变量
想要消除 开发环境 和 生产环境 之间的 webpack.config.js 差异，你可能需要环境变量(environment variable)。

- webpack 命令行 环境配置 的 --env 参数，可以允许你传入任意数量的环境变量。而在 webpack.config.js 中可以访问到这些环境变量。例如，--env.production 或 --env.NODE_ENV=local（NODE_ENV 通常约定用于定义环境类型，查看 这里）。

`webpack --env.NODE_ENV=local --env.production --progress`

> 如果设置 env 变量，却没有赋值，--env.production 默认表示将 --env.production 设置为 true。还有许多其他可以使用的语法。更多详细信息，请查看 webpack CLI 文档。

- 对于我们的 webpack 配置，有一个必须要修改之处。通常，module.exports 指向配置对象。要使用 env 变量，你必须将 module.exports 转换成一个函数：
```js
const path = require('path');

module.exports = env => {
  // Use env.<YOUR VARIABLE> here:
  console.log('NODE_ENV: ', env.NODE_ENV); // 'local'
  console.log('Production: ', env.production); // true

  return {
    entry: './src/index.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist')
    }
  };
};


// 如果要根据 webpack.config.js 中的 mode 变量更改打包行为，则必须将配置导出为一个函数，而不是导出为一个对象 
// 如 `webpack --mode=production`
var config = {
  entry: './app.js'
  //...
};
// 这个argv参数是webpack命令行中输入的所有参数的一个集合，有env值也有自定义的值 custom，都能在编译阶段能获取到的
module.exports = (env, argv) => {

  if (argv.mode === 'development') {
    config.devtool = 'source-map';
  }

  if (argv.mode === 'production') {
    //...
  }

  return config;
};
```

> 这个webpack提供的env环境变量设置 只能在编译时配置文件中能取到，在src文件下是取不到的，，src文件下只能取到node提供的process中env的NODE_ENV值，两者是不一样的

### 构建性能

本指南包含一些构建/编译性能的实用技巧，无论你是在 开发环境 还是在 生产环境 下运行构建脚本，以下最佳实践都应该有所帮助。

都是一些webpack的优化手段

#### 通用环境 优化手段
- 更新到最新版本
- 对最少的数量的必要模块使用loader，利用rules的include字段
- 引导时间：每个额外的loader/plugin都有其启动时间，尽量少使用工具
- 解析：
  - 减少 resolve.modules, resolve.extensions, resolve.mainFiles, resolve.descriptionFiles 中 items 数量，因为他们会增加文件系统调用的次数
  - 如果你不使用 symlinks（例如 npm link 或者 yarn link），可以设置 resolve.symlinks: false。
  - 如果你使用自定义 resolve plugin 规则，并且没有指定 context 上下文，可以设置 resolve.cacheWithContext: false
- dll：使用 DllPlugin 为更改不频繁的代码生成单独编译结果。这可以提高应用程序的编译速度，尽管它确实增加了构建过程的复杂度
- 小即是快：减少编译结果的整体大小，以提高性能，尽量保持chunk体积小
  - 使用数量更少/体积更小的 library
  - 在多页面应用程序中使用 CommonsChunkPlugin。
  - 在多页面应用程序中使用 CommonsChunkPlugin，并开启 async 模式
  - 移除未引用代码
  只编译你当前正在开发的那些代码
- worker池：thread-loader 可以将非常消耗资源的 loader 分流给一个 worker pool。
  - 不要使用太多的 worker，因为 Node.js 的 runtime 和 loader 都有启动开销。最小化 worker 和 main process(主进程) 之间的模块传输。进程间通讯(IPC, inter process communication)是非常消耗资源的
- 持久化缓存：使用cache-loader启用持久化缓存，使用package.json中的"postinstall"清除缓存目录`https://www.jianshu.com/p/e63878798e0e`
- 自定义plugin/loader

#### 开发环境 优化手段
- 增量编译（使用 webpack 的 watch mode(监听模式)。而不使用其他工具来 watch 文件和调用 webpack 。内置的 watch mode 会记录时间戳并将此信息传递给 compilation 以使缓存失效。
在某些配置环境中，watch mode 会回退到 poll mode(轮询模式)。监听许多文件会导致 CPU 大量负载。在这些情况下，可以使用 watchOptions.poll 来增加轮询的间隔）
- 在内存中编译（下面几个工具通过在内存中（而不是写入磁盘）编译和 serve 资源来提高性能：）
  - `webpack-dev-server`
  - `webpack-hot-middleware`
  - `webpack-dev-middleware`
- [stats](https://blog.csdn.net/scorpio_h/article/details/94591529).toJson加速
  - webpack 4 默认使用 stats.toJson() 输出大量数据。除非在增量步骤中做必要的统计，否则请避免获取 stats 对象的部分内容。webpack-dev-server 在 v3.1.3 以后的版本，包含一个重要的性能修复，即最小化每个增量构建步骤中，从 stats 对象获取的数据量
- devtool：需要注意的是不同的 devtool 设置，会导致不同的性能差异
  - "eval" 具有最好的性能，但并不能帮助你转译代码。
  - 如果你能接受稍差一些的 map 质量，可以使用 cheap-source-map 变体配置来提高性能
  - 使用 eval-source-map 变体配置进行增量编译。
  - => 在大多数情况下，最佳选择是 cheap-module-eval-source-map
- 避免在生产环境下才会用到的工具：某些 utility, plugin 和 loader 都只用于生产环境。例如，在开发环境下使用 TerserPlugin 来 minify(压缩) 和 mangle(混淆破坏) 代码是没有意义的。通常在开发环境下，应该排除以下这些工具
  - TerserPlugin
  - ExtractTextPlugin
  - [hash]/[chunkhash]
  - AggressiveSplittingPlugin
  - AggressiveMergingPlugin
  - ModuleConcatenationPlugin
- 最小化entry chunk：webpack 只会在文件系统中生成已经更新的 chunk。某些配置选项（HMR, output.chunkFilename 的 [name]/[chunkhash], [hash]）来说，除了对更新的 chunk 无效之外，对于 entry chunk 也不会生效。
确保在生成 entry chunk 时，尽量减少其体积以提高性能。下面的代码块将只提取包含 runtime 的 chunk，其他 chunk 都作为其子 chunk:
  - ```js
  new CommonsChunkPlugin({
  name: 'manifest',
  minChunks: Infinity
});
    ```
- 避免额外的优化步骤：webpack 通过执行额外的算法任务，来优化输出结果的体积和加载性能。这些优化适用于小型代码库，但是在大型代码库中却非常耗费性能
```js
module.exports = {
  // ...
  optimization: {
    removeAvailableModules: false,
    removeEmptyChunks: false,
    splitChunks: false,
  }
};
```
- 输出结果中不携带路径信息：webpack 会在输出的 bundle 中生成路径信息。然而，在打包数千个模块的项目中，这会导致造成垃圾回收性能压力。在 options.output.pathinfo 设置中关闭
```js
module.exports = {
  // ...
  output: {
    pathinfo: false
  }
};
```
- Nodejs版本
- TypeScript loader

#### 生产环境 优化手段

> 不要为了很小的性能收益，牺牲应用程序的质量！注意，在大多数情况下，优化代码质量比构建性能更重要。
- 多个compilation(编译时)
  - 在进行多个编译时，以下工具可以帮到你
    - parallel-webpack：它允许在 worker 池中运行 compilation。
    - cache-loader：可以在多个 compilation 之间共享缓存。
- source map：相当消耗资源，真的需要他们？

#### 工具相关问题
- Babel：最小化项目中的preset/plugins数量
- TypeScript：
  - 在单独的进程中使用 fork-ts-checker-webpack-plugin 进行类型检查
  - 配置 loader 跳过类型检查。
  - 使用 ts-loader 时，设置 happyPackMode: true / transpileOnly: true。
- Sass
  - node-sass中有个来自Nodejs线程池的阻塞线程的bug。当使用thread-loader时，需要设置workerParallelJobs: 2。

### 内容安全策略

#### 添加nonce

#### 启用CSP

### 开发 - Vagrant
如果你在开发一个更加高级的项目，并且使用 Vagrant 来实现在虚拟机(Virtual Machine)上运行你的开发环境，当可能需要在虚拟机中运行webpack。

### 管理依赖
> es6modules + commonjs + amd

#### 带表达式的require语句
这意味着 webpack 能够支持动态地 require，但会导致所有可能用到的模块都包含在 bundle 中。
#### require.context
你还可以通过 require.context() 函数来创建自己的 context。

可以给这个函数传入三个参数：一个要搜索的目录，一个标记表示是否还搜索其子目录， 以及一个匹配文件的正则表达式。

webpack 会在构建中解析代码中的 require.context() 。
```js
require.context(directory, useSubdirectories = false, regExp = /^\.\//);

// 示例
require.context('./test', false, /\.test\.js$/);
// （创建出）一个 context，其中文件来自 test 目录，request 以 `.test.js` 结尾。

require.context('../', true, /\.stories\.js$/);
// （创建出）一个 context，其中所有文件都来自父文件夹及其所有子级文件夹，request 以 `.stories.js` 结尾。
```
#### context module API
一个 context module 会导出一个（require）函数，此函数可以接收一个参数：request。

此导出函数有三个属性：resolve, keys, id。

resolve 是一个函数，它返回 request 被解析后得到的模块 id。
keys 也是一个函数，它返回一个数组，由所有可能被此 context module 处理的请求（译者注：参考下面第二段代码中的 key）组成。
如果想引入一个文件夹下面的所有文件，或者引入能匹配一个正则表达式的所有文件，这个功能就会很有帮助，例如：
```js
function importAll (r) {
  r.keys().forEach(r);
}

importAll(require.context('../components/', true, /\.js$/));
// =====
var cache = {};

function importAll (r) {
  r.keys().forEach(key => cache[key] = r(key));
}

importAll(require.context('../components/', true, /\.js$/));
// 在构建时(build-time)，所有被 require 的模块都会被填充到 cache 对象中。
```
- id 是 context module 里面所包含的模块 id. 它可能在你使用 module.hot.accept 时会用到。

### 公共路径
publicPath 配置选项在各种场景中都非常有用。你可以通过它来指定应用程序中所有资源的基础路径。
```js
output: {
    // filename: 'bundle.js',
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),// 实质上，发送到 output.path 目录的每个文件，都将从 output.publicPath 位置引用。就是从dist的/跟路径下引用
    // 以确保起devServer服务时候 文件资源能够正确地 serve 在 http://localhost:3000 下，稍后我们会指定 port number(端口号)。接下来是设置自定义 express server：
    publicPath: '/'// 公共路径若写'www.baidu.com/' ===> 则加载最终脚本文件时就要从'www.baidu.com/app.js' 来寻找资源了，若设成‘/’，则就在dist目录下根路径下寻找appjs脚本
  },
```
#### 基于环境设置
#### 在运行时设置
通过运行时设置 __webpack_public_path__ 变量即可自动同步到output中的publicPath属性上
#### 以下是对资源使用 CDN 和 hash 的复杂示例：
```js
// 以下是对资源使用 CDN 和 hash 的复杂示例：

config.js

module.exports = {
  //...
  output: {
    path: '/home/proj/cdn/assets/[hash]',
    publicPath: 'http://cdn.example.com/assets/[hash]/'
  }
};

// 如果在编译时，不知道最终输出文件的 publicPath 是什么地址，则可以将其留空，并且在运行时通过入口起点文件中的 __webpack_public_path__ 动态设置。
__webpack_public_path__ = myRuntimePublicPath;

// 应用程序入口的其余部分
```
### 集成

首先，我们要消除一个常见的误解。webpack 是一个模块打包工具(module bundler)（例如，Browserify 或 Brunch）。而不是一个任务执行工具(task runner)（例如，Make, Grunt 或者 Gulp ）。任务执行工具用来自动化处理常见的开发任务，例如，lint(代码检测)、build(构建)、test(测试)。相比模块打包工具，任务执行工具则聚焦在偏重上层的问题上面。你仍然可以得益于这种用法：使用上层的工具，而将打包部分的问题留给 webpack。

**打包工具帮助你取得准备用于部署的 JavaScript 和 stylesheet，将它们转换为适合浏览器的可用格式。例如，可以通过 压缩、分离 chunk 和 惰性加载 我们的 JavaScript 来提高性能。打包是 web 开发中最重要的挑战之一，解决此问题可以消除开发过程中的大部分痛点。**

好的消息是，虽然有一些功能重叠，但是如果使用方式正确，任务运行工具和模块打包工具还是能够一起协同工作。本指南提供了关于如何将 webpack 与一些流行的任务运行工具集成在一起的高度概述。

#### npm scripts
通常 webpack 用户使用 npm scripts 来作为任务执行工具。这是比较好的开始。然而跨平台支持可能是个问题，但是有几种解决方案。许多用户（但不是大多数用户）直接使用 npm scripts 和各种级别的 webpack 配置和工具。

#### Grunt
对于那些使用 Grunt 的人，我们推荐使用 grunt-webpack package。使用 grunt-webpack 你可以将 webpack 或 webpack-dev-server 作为一项任务(task)执行，访问 grunt template tags 中的统计信息，拆分开发和生产配置等等。如果还没有安装 grunt-webpack 和 webpack，请先安装它们：
```js
npm install --save-dev grunt-webpack webpack


// Gruntfile.js文件
const webpackConfig = require('./webpack.config.js');

module.exports = function(grunt) {
  grunt.initConfig({
    webpack: {
      options: {
        stats: !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
      },
      prod: webpackConfig,
      dev: Object.assign({ watch: true }, webpackConfig)
    }
  });

  grunt.loadNpmTasks('grunt-webpack');
};
```
#### Gulp
在 webpack-stream package（也称作 gulp-webpack） 的帮助下，可以相当直接地将 Gulp 与 webpack 集成。在这种情况下，不需要单独安装 webpack，因为它是 webpack-stream 直接依赖：
```js
npm install --save-dev webpack-stream
// gulpfile.js文件
var gulp = require('gulp');
var webpack = require('webpack-stream');
gulp.task('default', function() {
  return gulp.src('src/entry.js')
    .pipe(webpack({
      // 所有配置选项……
    }))
    .pipe(gulp.dest('dist/'));
});
```
#### Mocha
mocha-webpack 可以将 Mocha 与 webpack 完全集成。这个仓库提供了很多关于其优势和劣势的细节，基本上 mocha-webpack 只是一个简单封装，提供与 Mocha 几乎相同的 CLI，并提供各种 webpack 功能，例如改进了 watch mode 和改进了路径分析。这里是一个如何安装并使用它来运行测试套件的示例（在 ./test 中找到）
```js
npm install --save-dev webpack mocha mocha-webpack
mocha-webpack 'test/**/*.js'
```
#### Karma

karma-webpack package 允许你使用 webpack 预处理 Karma 中的文件。它也可以使用 webpack-dev-middleware，并允许传递两者的配置。下面是一个简单的示例：

