(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[77786],{22122:function(t,e,n){"use strict";function a(){return(a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t}).apply(this,arguments)}n.d(e,{Z:function(){return a}})},19756:function(t,e,n){"use strict";function a(t,e){if(null==t)return{};var n,a,l={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(l[n]=t[n]);return l}n.d(e,{Z:function(){return a}})},3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return s},kt:function(){return p}});var a=n(67294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,l=function(t,e){if(null==t)return{};var n,a,l={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var u=a.createContext({}),i=function(t){var e=a.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):c(c({},e),t)),n},s=function(t){var e=i(t.components);return a.createElement(u.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,l=t.mdxType,r=t.originalType,u=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),k=i(n),p=l,m=k["".concat(u,".").concat(p)]||k[p]||d[p]||r;return n?a.createElement(m,c(c({ref:e},s),{},{components:n})):a.createElement(m,c({ref:e},s))}));function p(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=n.length,c=new Array(r);c[0]=k;var o={};for(var u in e)hasOwnProperty.call(e,u)&&(o[u]=e[u]);o.originalType=t,o.mdxType="string"==typeof t?t:l,c[1]=o;for(var i=2;i<r;i++)c[i]=n[i];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},77077:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return c},metadata:function(){return o},toc:function(){return u},default:function(){return s}});var a=n(22122),l=n(19756),r=(n(67294),n(3905)),c={title:"Taro.canvasGetImageData(option, component)",sidebar_label:"canvasGetImageData"},o={unversionedId:"apis/canvas/canvasGetImageData",id:"version-2.x/apis/canvas/canvasGetImageData",isDocsHomePage:!1,title:"Taro.canvasGetImageData(option, component)",description:"\u83b7\u53d6 canvas \u533a\u57df\u9690\u542b\u7684\u50cf\u7d20\u6570\u636e\u3002",source:"@site/versioned_docs/version-2.x/apis/canvas/canvasGetImageData.md",sourceDirName:"apis/canvas",slug:"/apis/canvas/canvasGetImageData",permalink:"/taro/en/docs/2.x/apis/canvas/canvasGetImageData",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-2.x/apis/canvas/canvasGetImageData.md",version:"2.x",sidebar_label:"canvasGetImageData",frontMatter:{title:"Taro.canvasGetImageData(option, component)",sidebar_label:"canvasGetImageData"},sidebar:"version-2.x/API",previous:{title:"Taro.canvasPutImageData(option, component)",permalink:"/taro/en/docs/2.x/apis/canvas/canvasPutImageData"},next:{title:"Canvas",permalink:"/taro/en/docs/2.x/apis/canvas/Canvas"}},u=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Option",id:"option",children:[]},{value:"SuccessCallbackResult",id:"successcallbackresult",children:[]}]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],i={toc:u};function s(t){var e=t.components,n=(0,l.Z)(t,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},i,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u83b7\u53d6 canvas \u533a\u57df\u9690\u542b\u7684\u50cf\u7d20\u6570\u636e\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/canvas/wx.canvasGetImageData.html"},"\u53c2\u8003\u6587\u6863"))),(0,r.kt)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"(option: Option, component?: Record<string, any>) => Promise<SuccessCallbackResult>\n")),(0,r.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,r.kt)("h3",{id:"option"},"Option"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"\u53c2\u6570"),(0,r.kt)("th",null,"\u7c7b\u578b"),(0,r.kt)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),(0,r.kt)("th",null,"\u8bf4\u660e"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"canvasId"),(0,r.kt)("td",null,(0,r.kt)("code",null,"string")),(0,r.kt)("td",{style:{textAlign:"center"}},"\u662f"),(0,r.kt)("td",null,"\u753b\u5e03\u6807\u8bc6\uff0c\u4f20\u5165 ",(0,r.kt)("a",{href:"https://developers.weixin.qq.com/miniprogram/dev/component/canvas.html"},"canvas")," \u7ec4\u4ef6\u7684 ",(0,r.kt)("code",null,"canvas-id")," \u5c5e\u6027\u3002")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"height"),(0,r.kt)("td",null,(0,r.kt)("code",null,"number")),(0,r.kt)("td",{style:{textAlign:"center"}},"\u662f"),(0,r.kt)("td",null,"\u5c06\u8981\u88ab\u63d0\u53d6\u7684\u56fe\u50cf\u6570\u636e\u77e9\u5f62\u533a\u57df\u7684\u9ad8\u5ea6")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"width"),(0,r.kt)("td",null,(0,r.kt)("code",null,"number")),(0,r.kt)("td",{style:{textAlign:"center"}},"\u662f"),(0,r.kt)("td",null,"\u5c06\u8981\u88ab\u63d0\u53d6\u7684\u56fe\u50cf\u6570\u636e\u77e9\u5f62\u533a\u57df\u7684\u5bbd\u5ea6")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"x"),(0,r.kt)("td",null,(0,r.kt)("code",null,"number")),(0,r.kt)("td",{style:{textAlign:"center"}},"\u662f"),(0,r.kt)("td",null,"\u5c06\u8981\u88ab\u63d0\u53d6\u7684\u56fe\u50cf\u6570\u636e\u77e9\u5f62\u533a\u57df\u7684\u5de6\u4e0a\u89d2\u6a2a\u5750\u6807")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"y"),(0,r.kt)("td",null,(0,r.kt)("code",null,"number")),(0,r.kt)("td",{style:{textAlign:"center"}},"\u662f"),(0,r.kt)("td",null,"\u5c06\u8981\u88ab\u63d0\u53d6\u7684\u56fe\u50cf\u6570\u636e\u77e9\u5f62\u533a\u57df\u7684\u5de6\u4e0a\u89d2\u7eb5\u5750\u6807")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"complete"),(0,r.kt)("td",null,(0,r.kt)("code",null,"(res: CallbackResult) => void")),(0,r.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,r.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"fail"),(0,r.kt)("td",null,(0,r.kt)("code",null,"(res: CallbackResult) => void")),(0,r.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,r.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"success"),(0,r.kt)("td",null,(0,r.kt)("code",null,"(result: SuccessCallbackResult) => void")),(0,r.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,r.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))),(0,r.kt)("h3",{id:"successcallbackresult"},"SuccessCallbackResult"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"\u53c2\u6570"),(0,r.kt)("th",null,"\u7c7b\u578b"),(0,r.kt)("th",null,"\u8bf4\u660e"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"data"),(0,r.kt)("td",null,(0,r.kt)("code",null,"Uint8ClampedArray")),(0,r.kt)("td",null,"\u56fe\u50cf\u50cf\u7d20\u70b9\u6570\u636e\uff0c\u4e00\u7ef4\u6570\u7ec4\uff0c\u6bcf\u56db\u9879\u8868\u793a\u4e00\u4e2a\u50cf\u7d20\u70b9\u7684 rgba")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"height"),(0,r.kt)("td",null,(0,r.kt)("code",null,"number")),(0,r.kt)("td",null,"\u56fe\u50cf\u6570\u636e\u77e9\u5f62\u7684\u9ad8\u5ea6")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"width"),(0,r.kt)("td",null,(0,r.kt)("code",null,"number")),(0,r.kt)("td",null,"\u56fe\u50cf\u6570\u636e\u77e9\u5f62\u7684\u5bbd\u5ea6")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"errMsg"),(0,r.kt)("td",null,(0,r.kt)("code",null,"string")),(0,r.kt)("td",null,"\u8c03\u7528\u7ed3\u679c")))),(0,r.kt)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"Taro.canvasGetImageData({\n  canvasId: 'myCanvas',\n  x: 0,\n  y: 0,\n  width: 100,\n  height: 100,\n  success: function (res) {\n    console.log(res.width) // 100\n    console.log(res.height) // 100\n    console.log(res.data instanceof Uint8ClampedArray) // true\n    console.log(res.data.length) // 100 * 100 * 4\n  }\n})\n")),(0,r.kt)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"API"),(0,r.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,r.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,r.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Taro.canvasGetImageData"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"center"})))))}s.isMDXComponent=!0}}]);