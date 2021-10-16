(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[58087],{22122:function(e,t,r){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}r.d(t,{Z:function(){return n}})},19756:function(e,t,r){"use strict";function n(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}r.d(t,{Z:function(){return n}})},3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return v}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(r),v=a,d=u["".concat(s,".").concat(v)]||u[v]||f[v]||c;return r?n.createElement(d,o(o({ref:t},p),{},{components:r})):n.createElement(d,o({ref:t},p))}));function v(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,o=new Array(c);o[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var l=2;l<c;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},8095:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return o},metadata:function(){return i},toc:function(){return s},default:function(){return p}});var n=r(22122),a=r(19756),c=(r(67294),r(3905)),o={title:"Taro.createOffscreenCanvas()",sidebar_label:"createOffscreenCanvas"},i={unversionedId:"apis/canvas/createOffscreenCanvas",id:"version-2.x/apis/canvas/createOffscreenCanvas",isDocsHomePage:!1,title:"Taro.createOffscreenCanvas()",description:"\u521b\u5efa\u79bb\u5c4f canvas \u5b9e\u4f8b",source:"@site/versioned_docs/version-2.x/apis/canvas/createOffscreenCanvas.md",sourceDirName:"apis/canvas",slug:"/apis/canvas/createOffscreenCanvas",permalink:"/taro/docs/2.x/apis/canvas/createOffscreenCanvas",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-2.x/apis/canvas/createOffscreenCanvas.md",version:"2.x",sidebar_label:"createOffscreenCanvas",frontMatter:{title:"Taro.createOffscreenCanvas()",sidebar_label:"createOffscreenCanvas"},sidebar:"version-2.x/API",previous:{title:"Taro.getShareInfo(option)",permalink:"/taro/docs/2.x/apis/share/getShareInfo"},next:{title:"Taro.createCanvasContext(canvasId, component)",permalink:"/taro/docs/2.x/apis/canvas/createCanvasContext"}},s=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],l={toc:s};function p(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,c.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"\u521b\u5efa\u79bb\u5c4f canvas \u5b9e\u4f8b"),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},(0,c.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/canvas/wx.createOffscreenCanvas.html"},"\u53c2\u8003\u6587\u6863"))),(0,c.kt)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-tsx"},"() => OffscreenCanvas\n")),(0,c.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,c.kt)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),(0,c.kt)("table",null,(0,c.kt)("thead",{parentName:"table"},(0,c.kt)("tr",{parentName:"thead"},(0,c.kt)("th",{parentName:"tr",align:"center"},"API"),(0,c.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,c.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,c.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,c.kt)("tbody",{parentName:"table"},(0,c.kt)("tr",{parentName:"tbody"},(0,c.kt)("td",{parentName:"tr",align:"center"},"Taro.createOffscreenCanvas"),(0,c.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,c.kt)("td",{parentName:"tr",align:"center"}),(0,c.kt)("td",{parentName:"tr",align:"center"})))))}p.isMDXComponent=!0}}]);