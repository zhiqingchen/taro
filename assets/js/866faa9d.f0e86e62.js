(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[48090],{22122:function(t,e,n){"use strict";function a(){return(a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t}).apply(this,arguments)}n.d(e,{Z:function(){return a}})},19756:function(t,e,n){"use strict";function a(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}n.d(e,{Z:function(){return a}})},3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return p},kt:function(){return v}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var l=a.createContext({}),s=function(t){var e=a.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):c(c({},e),t)),n},p=function(t){var e=s(t.components);return a.createElement(l.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,l=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),d=s(n),v=r,m=d["".concat(l,".").concat(v)]||d[v]||u[v]||o;return n?a.createElement(m,c(c({ref:e},p),{},{components:n})):a.createElement(m,c({ref:e},p))}));function v(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var l in e)hasOwnProperty.call(e,l)&&(i[l]=e[l]);i.originalType=t,i.mdxType="string"==typeof t?t:r,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},56566:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return c},metadata:function(){return i},toc:function(){return l},default:function(){return p}});var a=n(22122),r=n(19756),o=(n(67294),n(3905)),c={title:"Taro.createCanvasContext(canvasId, component)",sidebar_label:"createCanvasContext"},i={unversionedId:"apis/canvas/createCanvasContext",id:"apis/canvas/createCanvasContext",isDocsHomePage:!1,title:"Taro.createCanvasContext(canvasId, component)",description:"\u521b\u5efa canvas \u7684\u7ed8\u56fe\u4e0a\u4e0b\u6587 CanvasContext \u5bf9\u8c61",source:"@site/docs/apis/canvas/createCanvasContext.md",sourceDirName:"apis/canvas",slug:"/apis/canvas/createCanvasContext",permalink:"/taro/docs/next/apis/canvas/createCanvasContext",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/apis/canvas/createCanvasContext.md",version:"current",sidebar_label:"createCanvasContext",frontMatter:{title:"Taro.createCanvasContext(canvasId, component)",sidebar_label:"createCanvasContext"},sidebar:"API",previous:{title:"Taro.createOffscreenCanvas()",permalink:"/taro/docs/next/apis/canvas/createOffscreenCanvas"},next:{title:"Taro.canvasToTempFilePath(option, component)",permalink:"/taro/docs/next/apis/canvas/canvasToTempFilePath"}},l=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],s={toc:l};function p(t){var e=t.components,n=(0,r.Z)(t,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u521b\u5efa canvas \u7684\u7ed8\u56fe\u4e0a\u4e0b\u6587 ",(0,o.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.html"},"CanvasContext")," \u5bf9\u8c61"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Tip"),": \u9700\u8981\u6307\u5b9a canvasId\uff0c\u8be5\u7ed8\u56fe\u4e0a\u4e0b\u6587\u53ea\u4f5c\u7528\u4e8e\u5bf9\u5e94\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"<canvas/>")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/canvas/wx.createCanvasContext.html"},"\u53c2\u8003\u6587\u6863"))),(0,o.kt)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"(canvasId: string, component?: Record<string, any>) => CanvasContext\n")),(0,o.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,o.kt)("table",null,(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"\u53c2\u6570"),(0,o.kt)("th",null,"\u7c7b\u578b"),(0,o.kt)("th",null,"\u8bf4\u660e"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"canvasId"),(0,o.kt)("td",null,(0,o.kt)("code",null,"string")),(0,o.kt)("td",null,"\u8981\u83b7\u53d6\u4e0a\u4e0b\u6587\u7684 ",(0,o.kt)("a",{href:"https://developers.weixin.qq.com/miniprogram/dev/component/canvas.html"},"canvas")," \u7ec4\u4ef6 canvas-id \u5c5e\u6027")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"component"),(0,o.kt)("td",null,(0,o.kt)("code",null,"Record<string, any>")),(0,o.kt)("td",null,"\u5728\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u4e0b\uff0c\u5f53\u524d\u7ec4\u4ef6\u5b9e\u4f8b\u7684this\uff0c\u8868\u793a\u5728\u8fd9\u4e2a\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u4e0b\u67e5\u627e\u62e5\u6709 canvas-id \u7684 ",(0,o.kt)("a",{href:"https://developers.weixin.qq.com/miniprogram/dev/component/canvas.html"},"canvas")," \uff0c\u5982\u679c\u7701\u7565\u5219\u4e0d\u5728\u4efb\u4f55\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u5185\u67e5\u627e")))),(0,o.kt)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"API"),(0,o.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,o.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,o.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Taro.createCanvasContext"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,o.kt)("td",{parentName:"tr",align:"center"})))))}p.isMDXComponent=!0}}]);