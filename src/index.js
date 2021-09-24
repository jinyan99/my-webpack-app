// import _ from 'lodash';
import {cube} from './math.js';
import './style.css';
// import Icon from './icon.png';
import Data from './data.xml';
import printMe from './print.js';
import * as libNumbersWebpack from 'lib-numbers-webpack';

console.log('测试webpack打的lib包', libNumbersWebpack.wordToNum('Two'))

console.log('现在在开发模式-indexjs',process.env.NODE_ENV, jinyan)
// 任何位于 /src 的本地代码都可以关联到 process.env.NODE_ENV 环境变量，
if (process.env.NODE_ENV !== 'production') {
  console.log('现在在开发模式indexjs')
}



function component () {
  let element = document.createElement('div');
  var btn = document.createElement('button');

  // lodash（通过一个 script 引入）对于执行这一行是必需的
  // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.innerHTML = join(['Hello', 'webpack'], ' '); // 可以直接使用join，是shim预置了lodash的全局模块
  element.classList.add('hello')

  // // 将图像添加到我们已经存在的div中
  // var myIcon = new Image();
  // myIcon.src = Icon;

  // element.appendChild(myIcon);

  console.log(Data,'----------xml数据', cube(2))

  btn.innerHTML = '点击这里，然后查看console';
  // 这就是懒加载，原理就是利用交互去按需触发包的动态加载，还是基于代码分离动态导入的原理。
  btn.onclick = e => import(/* webpackChunkName: "print" */ './print').then(module => {
    var print = module.default;
    print();
  });

  element.appendChild(btn);

  return element;
}

// // 练习分包场景之动态导入import()方法
// function getComponent() {
//   // 动态引入加了注释来指定分包后俄包名，默认是[id].bundle.js
//   return import(/* webpackChunkName: "lodash" */'lodash')
//     .then(({default: _}) => {
//       var element = document.createElement('div');
//       element.innerHTML = _.join(['Hello', 'webpack'], ' ');

//       return element;
//     })
//     .catch(err => '动态加载组件时错误')
// }


document.body.appendChild(component())

// getComponent().then(component => {
//   document.body.appendChild(component);
// })





/**
 * 没有从 src/math.js 模块中 import 另外一个 square 方法。这个函数就是所谓的“未引用代码(dead code)”，也就是说，应该删除掉未被引用的 export。现在运行 npm script npm run build，并查看输出的 bundle：
 */