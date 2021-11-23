"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[51444],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},35457:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return s},default:function(){return m}});var r=n(83117),a=n(80102),o=(n(67294),n(3905)),i=["components"],l={title:"\u7f16\u8bd1\u4f18\u5316"},p=void 0,c={unversionedId:"compile-optimized",id:"compile-optimized",isDocsHomePage:!1,title:"\u7f16\u8bd1\u4f18\u5316",description:"Taro \u4f7f\u7528 Webpack \u8fdb\u884c\u6253\u5305\uff0c\u5f53\u5de5\u7a0b\u8d8a\u6765\u8d8a\u5e9e\u5927\u65f6\uff0c\u4f1a\u51fa\u73b0\u6253\u5305\u65f6\u95f4\u8fc7\u957f\u7b49\u95ee\u9898\u3002\u53e6\u5916\uff0c\u5c0f\u7a0b\u5e8f\u4e25\u683c\u7684\u4f53\u79ef\u8981\u6c42\u3001\u4e0d\u652f\u6301\u70ed\u66f4\u65b0\u7b49\u95ee\u9898\u4e5f\u5bf9\u5927\u578b\u5e94\u7528\u7684\u5de5\u7a0b\u5316\u6d41\u7a0b\u63d0\u51fa\u4e86\u975e\u5e38\u5927\u7684\u4f18\u5316\u6311\u6218\u3002",source:"@site/docs/compile-optimized.mdx",sourceDirName:".",slug:"/compile-optimized",permalink:"/taro/en/docs/next/compile-optimized",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/compile-optimized.mdx",tags:[],version:"current",frontMatter:{title:"\u7f16\u8bd1\u4f18\u5316"},sidebar:"docs",previous:{title:"Virtual List",permalink:"/taro/en/docs/next/virtual-list"},next:{title:"Taro Uses Native Modules",permalink:"/taro/en/docs/next/hybrid"}},s=[{value:"\u4f18\u5316\u7f16\u8bd1\u901f\u5ea6",id:"\u4f18\u5316\u7f16\u8bd1\u901f\u5ea6",children:[{value:"\u7528\u6cd5",id:"\u7528\u6cd5",children:[],level:4},{value:"\u6548\u679c\u5c55\u793a",id:"\u6548\u679c\u5c55\u793a",children:[],level:4}],level:2},{value:"\u89e3\u51b3\u5305\u4f53\u79ef\u8fc7\u5927\u65e0\u6cd5\u8fdb\u884c\u9884\u89c8\u7684\u95ee\u9898",id:"\u89e3\u51b3\u5305\u4f53\u79ef\u8fc7\u5927\u65e0\u6cd5\u8fdb\u884c\u9884\u89c8\u7684\u95ee\u9898",children:[],level:2},{value:"\u901a\u8fc7webpackChain\u914d\u7f6e\u89e3\u51b3\u5f00\u53d1\u73af\u5883\u4e0b\u5c0f\u7a0b\u5e8f\u5305\u4f53\u79ef\u8fc7\u5927\u65e0\u6cd5\u8fdb\u884c\u9884\u89c8\u4e0a\u4f20\u7684\u95ee\u9898(\u4e0d\u5f71\u54cddevtools\u7684\u4f7f\u7528)",id:"\u901a\u8fc7webpackchain\u914d\u7f6e\u89e3\u51b3\u5f00\u53d1\u73af\u5883\u4e0b\u5c0f\u7a0b\u5e8f\u5305\u4f53\u79ef\u8fc7\u5927\u65e0\u6cd5\u8fdb\u884c\u9884\u89c8\u4e0a\u4f20\u7684\u95ee\u9898\u4e0d\u5f71\u54cddevtools\u7684\u4f7f\u7528",children:[],level:2}],u={toc:s};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Taro \u4f7f\u7528 Webpack \u8fdb\u884c\u6253\u5305\uff0c\u5f53\u5de5\u7a0b\u8d8a\u6765\u8d8a\u5e9e\u5927\u65f6\uff0c\u4f1a\u51fa\u73b0\u6253\u5305\u65f6\u95f4\u8fc7\u957f\u7b49\u95ee\u9898\u3002\u53e6\u5916\uff0c\u5c0f\u7a0b\u5e8f\u4e25\u683c\u7684\u4f53\u79ef\u8981\u6c42\u3001\u4e0d\u652f\u6301\u70ed\u66f4\u65b0\u7b49\u95ee\u9898\u4e5f\u5bf9\u5927\u578b\u5e94\u7528\u7684\u5de5\u7a0b\u5316\u6d41\u7a0b\u63d0\u51fa\u4e86\u975e\u5e38\u5927\u7684\u4f18\u5316\u6311\u6218\u3002"),(0,o.kt)("h2",{id:"\u4f18\u5316\u7f16\u8bd1\u901f\u5ea6"},"\u4f18\u5316\u7f16\u8bd1\u901f\u5ea6"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u7f13\u5b58"),"\u4e0e",(0,o.kt)("strong",{parentName:"p"},"\u5e76\u884c"),"\u662f\u8fdb\u884c\u6027\u80fd\u4f18\u5316\u7684\u4e24\u4e2a\u91cd\u8981\u5207\u5165\u89d2\u5ea6\u3002\u667a\u884c\u5c0f\u7a0b\u5e8f\u56e2\u961f\u501f\u52a9 ",(0,o.kt)("inlineCode",{parentName:"p"},"cache-loader"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"thread-loader")," \u5f00\u53d1\u4e86 ",(0,o.kt)("a",{parentName:"p",href:"treasures#%E6%8F%92%E4%BB%B6"},"taro-plugin-compiler-optimization")," \u63d2\u4ef6\u8ba9 Taro \u9879\u76ee\u7684\u7f16\u8bd1\u65f6\u957f\u51cf\u5c11\u4e3a\u539f\u6765\u7684\u4e09\u5206\u4e4b\u4e00\u3002"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u8be6\u60c5\u8bf7\u9605\u8bfb\u6587\u7ae0",(0,o.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/Z79QhAlP8tBQn3mXQ11byQ"},"\u300a\u7f16\u5199\u63d2\u4ef6\uff0c\u5c06 Taro \u7f16\u8bd1\u6253\u5305\u8017\u65f6\u7f29\u77ed\u81f3\u4e09\u5206\u4e4b\u4e00\u300b"),"\u3002")),(0,o.kt)("h4",{id:"\u7528\u6cd5"},"\u7528\u6cd5"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="\u5b89\u88c5\u4f9d\u8d56"',title:'"\u5b89\u88c5\u4f9d\u8d56"'},"npm install --save-dev thread-loader cache-loader taro-plugin-compiler-optimization\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="\u4f7f\u7528\u63d2\u4ef6"',title:'"\u4f7f\u7528\u63d2\u4ef6"'},"// config/index.js\nconfig = {\n  // ...\n  plugins: ['taro-plugin-compiler-optimization']\n}\n")),(0,o.kt)("h4",{id:"\u6548\u679c\u5c55\u793a"},"\u6548\u679c\u5c55\u793a"),(0,o.kt)("p",null,"\u4f18\u5316\u524d ",(0,o.kt)("strong",{parentName:"p"},"3m9s"),"\uff0c\u4f18\u5316\u540e ",(0,o.kt)("strong",{parentName:"p"},"56.8s"),"\uff0c\u5c06\u8017\u65f6\u7f29\u77ed\u81f3\u4e09\u5206\u4e4b\u4e00\u3002"),(0,o.kt)("p",null,"\u4f18\u5316\u524d\u8017\u65f6\uff1a"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://gitee.com/canntyield/cand_md_image/raw/master/2021_10/before.PNG",alt:"\u4f18\u5316\u524d"})),(0,o.kt)("p",null,"\u4f18\u5316\u540e\u8017\u65f6\uff1a"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://gitee.com/canntyield/cand_md_image/raw/master/2021_10/after.PNG",alt:"\u4f18\u5316\u540e"})),(0,o.kt)("h2",{id:"\u89e3\u51b3\u5305\u4f53\u79ef\u8fc7\u5927\u65e0\u6cd5\u8fdb\u884c\u9884\u89c8\u7684\u95ee\u9898"},"\u89e3\u51b3\u5305\u4f53\u79ef\u8fc7\u5927\u65e0\u6cd5\u8fdb\u884c\u9884\u89c8\u7684\u95ee\u9898"),(0,o.kt)("p",null,"\u667a\u884c\u5c0f\u7a0b\u5e8f\u56e2\u961f\u901a\u8fc7\u5728\u5f00\u53d1\u73af\u5883\u4e0b\u914d\u7f6e\u538b\u7f29\u6307\u5b9a\u6587\u4ef6\uff0c\u89e3\u51b3\u4e86\u5c0f\u7a0b\u5e8f\u7aef\u5305\u4f53\u79ef\u8fc7\u5927\u65e0\u6cd5\u8fdb\u884c\u9884\u89c8\u7684\u95ee\u9898\u3002\u8be6\u60c5\u8bf7\u9605\u8bfb\u6587\u7ae0",(0,o.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/Z79QhAlP8tBQn3mXQ11byQ"},"\u300a\u7f16\u5199\u63d2\u4ef6\uff0c\u5c06 Taro \u7f16\u8bd1\u6253\u5305\u8017\u65f6\u7f29\u77ed\u81f3\u4e09\u5206\u4e4b\u4e00\u300b"),"\u3002"),(0,o.kt)("h2",{id:"\u901a\u8fc7webpackchain\u914d\u7f6e\u89e3\u51b3\u5f00\u53d1\u73af\u5883\u4e0b\u5c0f\u7a0b\u5e8f\u5305\u4f53\u79ef\u8fc7\u5927\u65e0\u6cd5\u8fdb\u884c\u9884\u89c8\u4e0a\u4f20\u7684\u95ee\u9898\u4e0d\u5f71\u54cddevtools\u7684\u4f7f\u7528"},"\u901a\u8fc7webpackChain\u914d\u7f6e\u89e3\u51b3\u5f00\u53d1\u73af\u5883\u4e0b\u5c0f\u7a0b\u5e8f\u5305\u4f53\u79ef\u8fc7\u5927\u65e0\u6cd5\u8fdb\u884c\u9884\u89c8\u4e0a\u4f20\u7684\u95ee\u9898(\u4e0d\u5f71\u54cddevtools\u7684\u4f7f\u7528)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// config/dev.sj\nmodule.exports = {\n mini: {\n    webpackChain: (chain, webpack) => {\n      chain.merge({\n        plugin: {\n          install: {\n            plugin: require('terser-webpack-plugin'),\n            args: [{\n              terserOptions: {\n                compress: true, // \u9ed8\u8ba4\u4f7f\u7528terser\u538b\u7f29\n                // mangle: false,\n                keep_classnames: true, // \u4e0d\u6539\u53d8class\u540d\u79f0\n                keep_fnames: true // \u4e0d\u6539\u53d8\u51fd\u6570\u540d\u79f0\n              }\n            }]\n          }\n        }\n      })\n    }\n  }\n}\n")))}m.isMDXComponent=!0}}]);