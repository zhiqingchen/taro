(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[98267],{22122:function(t,e,n){"use strict";function a(){return(a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t}).apply(this,arguments)}n.d(e,{Z:function(){return a}})},19756:function(t,e,n){"use strict";function a(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}n.d(e,{Z:function(){return a}})},3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return s},kt:function(){return k}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var i=a.createContext({}),u=function(t){var e=a.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},s=function(t){var e=u(t.components);return a.createElement(i.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},p=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,i=t.parentName,s=c(t,["components","mdxType","originalType","parentName"]),p=u(n),k=r,m=p["".concat(i,".").concat(k)]||p[k]||d[k]||l;return n?a.createElement(m,o(o({ref:e},s),{},{components:n})):a.createElement(m,o({ref:e},s))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=p;var c={};for(var i in e)hasOwnProperty.call(e,i)&&(c[i]=e[i]);c.originalType=t,c.mdxType="string"==typeof t?t:r,o[1]=c;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},25081:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return o},metadata:function(){return c},toc:function(){return i},default:function(){return s}});var a=n(22122),r=n(19756),l=(n(67294),n(3905)),o={title:"Taro.canvasPutImageData(option, component)",sidebar_label:"canvasPutImageData"},c={unversionedId:"apis/canvas/canvasPutImageData",id:"apis/canvas/canvasPutImageData",isDocsHomePage:!1,title:"Taro.canvasPutImageData(option, component)",description:"\u5c06\u50cf\u7d20\u6570\u636e\u7ed8\u5236\u5230\u753b\u5e03\u3002\u5728\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u4e0b\uff0c\u7b2c\u4e8c\u4e2a\u53c2\u6570\u4f20\u5165\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u5b9e\u4f8b this\uff0c\u4ee5\u64cd\u4f5c\u7ec4\u4ef6\u5185 `` \u7ec4\u4ef6",source:"@site/docs/apis/canvas/canvasPutImageData.md",sourceDirName:"apis/canvas",slug:"/apis/canvas/canvasPutImageData",permalink:"/taro/docs/next/apis/canvas/canvasPutImageData",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/apis/canvas/canvasPutImageData.md",version:"current",sidebar_label:"canvasPutImageData",frontMatter:{title:"Taro.canvasPutImageData(option, component)",sidebar_label:"canvasPutImageData"},sidebar:"API",previous:{title:"Taro.canvasToTempFilePath(option, component)",permalink:"/taro/docs/next/apis/canvas/canvasToTempFilePath"},next:{title:"Taro.canvasGetImageData(option, component)",permalink:"/taro/docs/next/apis/canvas/canvasGetImageData"}},i=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Option",id:"option",children:[]}]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],u={toc:i};function s(t){var e=t.components,n=(0,r.Z)(t,["components"]);return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u5c06\u50cf\u7d20\u6570\u636e\u7ed8\u5236\u5230\u753b\u5e03\u3002\u5728\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u4e0b\uff0c\u7b2c\u4e8c\u4e2a\u53c2\u6570\u4f20\u5165\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u5b9e\u4f8b this\uff0c\u4ee5\u64cd\u4f5c\u7ec4\u4ef6\u5185 ",(0,l.kt)("inlineCode",{parentName:"p"},"<canvas>")," \u7ec4\u4ef6"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/canvas/wx.canvasPutImageData.html"},"\u53c2\u8003\u6587\u6863"))),(0,l.kt)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"(option: Option, component?: Record<string, any>) => Promise<CallbackResult>\n")),(0,l.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,l.kt)("h3",{id:"option"},"Option"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"\u53c2\u6570"),(0,l.kt)("th",null,"\u7c7b\u578b"),(0,l.kt)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),(0,l.kt)("th",null,"\u8bf4\u660e"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"canvasId"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",{style:{textAlign:"center"}},"\u662f"),(0,l.kt)("td",null,"\u753b\u5e03\u6807\u8bc6\uff0c\u4f20\u5165 ",(0,l.kt)("a",{href:"https://developers.weixin.qq.com/miniprogram/dev/component/canvas.html"},"canvas")," \u7ec4\u4ef6\u7684 canvas-id \u5c5e\u6027\u3002")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"data"),(0,l.kt)("td",null,(0,l.kt)("code",null,"Uint8ClampedArray")),(0,l.kt)("td",{style:{textAlign:"center"}},"\u662f"),(0,l.kt)("td",null,"\u56fe\u50cf\u50cf\u7d20\u70b9\u6570\u636e\uff0c\u4e00\u7ef4\u6570\u7ec4\uff0c\u6bcf\u56db\u9879\u8868\u793a\u4e00\u4e2a\u50cf\u7d20\u70b9\u7684 rgba")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"height"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number")),(0,l.kt)("td",{style:{textAlign:"center"}},"\u662f"),(0,l.kt)("td",null,"\u6e90\u56fe\u50cf\u6570\u636e\u77e9\u5f62\u533a\u57df\u7684\u9ad8\u5ea6")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"width"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number")),(0,l.kt)("td",{style:{textAlign:"center"}},"\u662f"),(0,l.kt)("td",null,"\u6e90\u56fe\u50cf\u6570\u636e\u77e9\u5f62\u533a\u57df\u7684\u5bbd\u5ea6")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"x"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number")),(0,l.kt)("td",{style:{textAlign:"center"}},"\u662f"),(0,l.kt)("td",null,"\u6e90\u56fe\u50cf\u6570\u636e\u5728\u76ee\u6807\u753b\u5e03\u4e2d\u7684\u4f4d\u7f6e\u504f\u79fb\u91cf\uff08x \u8f74\u65b9\u5411\u7684\u504f\u79fb\u91cf\uff09")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"y"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number")),(0,l.kt)("td",{style:{textAlign:"center"}},"\u662f"),(0,l.kt)("td",null,"\u6e90\u56fe\u50cf\u6570\u636e\u5728\u76ee\u6807\u753b\u5e03\u4e2d\u7684\u4f4d\u7f6e\u504f\u79fb\u91cf\uff08y \u8f74\u65b9\u5411\u7684\u504f\u79fb\u91cf\uff09")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"complete"),(0,l.kt)("td",null,(0,l.kt)("code",null,"(res: CallbackResult) => void")),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"fail"),(0,l.kt)("td",null,(0,l.kt)("code",null,"(res: CallbackResult) => void")),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"success"),(0,l.kt)("td",null,(0,l.kt)("code",null,"(res: CallbackResult) => void")),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))),(0,l.kt)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"const data = new Uint8ClampedArray([255, 0, 0, 1])\nTaro.canvasPutImageData({\n  canvasId: 'myCanvas',\n  x: 0,\n  y: 0,\n  width: 1,\n  data: data,\n  success: function (res) {}\n})\n")),(0,l.kt)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"API"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,l.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,l.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"Taro.canvasPutImageData"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"})))))}s.isMDXComponent=!0}}]);