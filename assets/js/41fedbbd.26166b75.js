"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[13949],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},27153:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return s},default:function(){return d}});var r=n(83117),a=n(80102),o=(n(67294),n(3905)),i=["components"],l={title:"Taro.reportAnalytics(eventName, data)",sidebar_label:"reportAnalytics"},p=void 0,c={unversionedId:"apis/data-analysis/reportAnalytics",id:"version-3.x/apis/data-analysis/reportAnalytics",title:"Taro.reportAnalytics(eventName, data)",description:"\u81ea\u5b9a\u4e49\u5206\u6790\u6570\u636e\u4e0a\u62a5\u63a5\u53e3\u3002\u4f7f\u7528\u524d\uff0c\u9700\u8981\u5728\u5c0f\u7a0b\u5e8f\u7ba1\u7406\u540e\u53f0\u81ea\u5b9a\u4e49\u5206\u6790\u4e2d\u65b0\u5efa\u4e8b\u4ef6\uff0c\u914d\u7f6e\u597d\u4e8b\u4ef6\u540d\u4e0e\u5b57\u6bb5\u3002",source:"@site/versioned_docs/version-3.x/apis/data-analysis/reportAnalytics.md",sourceDirName:"apis/data-analysis",slug:"/apis/data-analysis/reportAnalytics",permalink:"/taro/docs/apis/data-analysis/reportAnalytics",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.x/apis/data-analysis/reportAnalytics.md",tags:[],version:"3.x",frontMatter:{title:"Taro.reportAnalytics(eventName, data)",sidebar_label:"reportAnalytics"},sidebar:"API",previous:{title:"reportEvent",permalink:"/taro/docs/apis/data-analysis/reportEvent"},next:{title:"getExptInfoSync",permalink:"/taro/docs/apis/data-analysis/getExptInfoSync"}},s=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[],level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[],level:2},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[],level:2}],u={toc:s};function d(e){var t=e.components,l=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u81ea\u5b9a\u4e49\u5206\u6790\u6570\u636e\u4e0a\u62a5\u63a5\u53e3\u3002\u4f7f\u7528\u524d\uff0c\u9700\u8981\u5728\u5c0f\u7a0b\u5e8f\u7ba1\u7406\u540e\u53f0\u81ea\u5b9a\u4e49\u5206\u6790\u4e2d\u65b0\u5efa\u4e8b\u4ef6\uff0c\u914d\u7f6e\u597d\u4e8b\u4ef6\u540d\u4e0e\u5b57\u6bb5\u3002"),(0,o.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,o.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:n(16710).Z,className:"icon_platform",width:"25px"})," ",(0,o.kt)("img",{title:"H5",src:n(5030).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,o.kt)("img",{title:"React Native",src:n(73555).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/data-analysis/wx.reportAnalytics.html"},"\u53c2\u8003\u6587\u6863"))),(0,o.kt)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"(eventName: string, data: TaroGeneral.IAnyObject) => void\n")),(0,o.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,o.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,o.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"eventName"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"string")),(0,o.kt)("td",{parentName:"tr",align:null},"\u4e8b\u4ef6\u540d")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"data"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"TaroGeneral.IAnyObject")),(0,o.kt)("td",{parentName:"tr",align:null},"\u4e0a\u62a5\u7684\u81ea\u5b9a\u4e49\u6570\u636e\uff0ckey \u4e3a\u914d\u7f6e\u4e2d\u7684\u5b57\u6bb5\u540d\uff0cvalue \u4e3a\u4e0a\u62a5\u7684\u6570\u636e\u3002")))),(0,o.kt)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"Taro.reportAnalytics('purchase', {\n  price: 120,\n  color: 'red'\n})\n")))}d.isMDXComponent=!0},5030:function(e,t,n){t.Z=n.p+"assets/images/h5-81f73c447874b6528e84ee395bece16e.png"},73555:function(e,t,n){t.Z=n.p+"assets/images/rn-ecec68ba194e4b5e9fc3e853cc00c569.png"},16710:function(e,t,n){t.Z=n.p+"assets/images/weapp-0e8fbe2d5eb3676de4961b54ee7f5ba4.png"}}]);