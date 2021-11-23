"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[18852],{3905:function(e,r,t){t.d(r,{Zo:function(){return s},kt:function(){return d}});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),p=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},s=function(e){var r=p(e.components);return n.createElement(c.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},k=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),k=p(t),d=a,m=k["".concat(c,".").concat(d)]||k[d]||u[d]||o;return t?n.createElement(m,i(i({ref:r},s),{},{components:t})):n.createElement(m,i({ref:r},s))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=k;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}k.displayName="MDXCreateElement"},86357:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return s},default:function(){return k}});var n=t(83117),a=t(80102),o=(t(67294),t(3905)),i=["components"],l={title:"Taro.createWorker(scriptPath)",sidebar_label:"createWorker"},c=void 0,p={unversionedId:"apis/worker/createWorker",id:"version-2.x/apis/worker/createWorker",isDocsHomePage:!1,title:"Taro.createWorker(scriptPath)",description:"\u521b\u5efa\u4e00\u4e2a Worker \u7ebf\u7a0b\u3002\u76ee\u524d\u9650\u5236\u6700\u591a\u53ea\u80fd\u521b\u5efa\u4e00\u4e2a Worker\uff0c\u521b\u5efa\u4e0b\u4e00\u4e2a Worker \u524d\u8bf7\u5148\u8c03\u7528 Worker.terminate",source:"@site/versioned_docs/version-2.x/apis/worker/createWorker.md",sourceDirName:"apis/worker",slug:"/apis/worker/createWorker",permalink:"/taro/docs/2.x/apis/worker/createWorker",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-2.x/apis/worker/createWorker.md",tags:[],version:"2.x",frontMatter:{title:"Taro.createWorker(scriptPath)",sidebar_label:"createWorker"},sidebar:"version-2.x/API",previous:{title:"vibrateLong",permalink:"/taro/docs/2.x/apis/device/vibrate/vibrateLong"},next:{title:"Worker",permalink:"/taro/docs/2.x/apis/worker/Worker"}},s=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[],level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[],level:2},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[],level:2},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[],level:2}],u={toc:s};function k(e){var r=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u521b\u5efa\u4e00\u4e2a Worker \u7ebf\u7a0b\u3002\u76ee\u524d\u9650\u5236\u6700\u591a\u53ea\u80fd\u521b\u5efa\u4e00\u4e2a Worker\uff0c\u521b\u5efa\u4e0b\u4e00\u4e2a Worker \u524d\u8bf7\u5148\u8c03\u7528 ",(0,o.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/worker/Worker.terminate.html"},"Worker.terminate")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/worker/wx.createWorker.html"},"\u53c2\u8003\u6587\u6863"))),(0,o.kt)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"(scriptPath: string) => Worker\n")),(0,o.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,o.kt)("table",null,(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"\u53c2\u6570"),(0,o.kt)("th",null,"\u7c7b\u578b"),(0,o.kt)("th",null,"\u8bf4\u660e"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"scriptPath"),(0,o.kt)("td",null,(0,o.kt)("code",null,"string")),(0,o.kt)("td",null,"worker \u5165\u53e3\u6587\u4ef6\u7684",(0,o.kt)("strong",null,"\u7edd\u5bf9\u8def\u5f84"))))),(0,o.kt)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"const worker = Taro.createWorker('workers/request/index.js') // \u6587\u4ef6\u540d\u6307\u5b9a worker \u7684\u5165\u53e3\u6587\u4ef6\u8def\u5f84\uff0c\u7edd\u5bf9\u8def\u5f84\n  worker.onMessage(function (res) {\n  console.log(res)\n})\nworker.postMessage({\n  msg: 'hello worker'\n})\nworker.terminate()\n")),(0,o.kt)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"API"),(0,o.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,o.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,o.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Taro.createWorker"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,o.kt)("td",{parentName:"tr",align:"center"}),(0,o.kt)("td",{parentName:"tr",align:"center"})))))}k.isMDXComponent=!0}}]);