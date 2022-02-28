"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[47081],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,k=d["".concat(p,".").concat(m)]||d[m]||u[m]||l;return r?n.createElement(k,o(o({ref:t},s),{},{components:r})):n.createElement(k,o({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},77385:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return s},default:function(){return d}});var n=r(83117),a=r(80102),l=(r(67294),r(3905)),o=["components"],i={title:"Taro.onCopyUrl(callback)",sidebar_label:"onCopyUrl"},p=void 0,c={unversionedId:"apis/share/onCopyUrl",id:"version-3.x/apis/share/onCopyUrl",title:"Taro.onCopyUrl(callback)",description:"\u76d1\u542c\u7528\u6237\u70b9\u51fb\u53f3\u4e0a\u89d2\u83dc\u5355\u7684\u300c\u590d\u5236\u94fe\u63a5\u300d\u6309\u94ae\u65f6\u89e6\u53d1\u7684\u4e8b\u4ef6",source:"@site/versioned_docs/version-3.x/apis/share/onCopyUrl.md",sourceDirName:"apis/share",slug:"/apis/share/onCopyUrl",permalink:"/taro/docs/apis/share/onCopyUrl",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.x/apis/share/onCopyUrl.md",tags:[],version:"3.x",frontMatter:{title:"Taro.onCopyUrl(callback)",sidebar_label:"onCopyUrl"},sidebar:"API",previous:{title:"shareFileMessage",permalink:"/taro/docs/apis/share/shareFileMessage"},next:{title:"offCopyUrl",permalink:"/taro/docs/apis/share/offCopyUrl"}},s=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[],level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Callback",id:"callback",children:[],level:3},{value:"CallbackResult",id:"callbackresult",children:[],level:3}],level:2}],u={toc:s};function d(e){var t=e.components,i=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u76d1\u542c\u7528\u6237\u70b9\u51fb\u53f3\u4e0a\u89d2\u83dc\u5355\u7684\u300c\u590d\u5236\u94fe\u63a5\u300d\u6309\u94ae\u65f6\u89e6\u53d1\u7684\u4e8b\u4ef6"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u672c\u63a5\u53e3\u4e3a Beta \u7248\u672c\uff0c\u6682\u53ea\u5728 Android \u5e73\u53f0\u652f\u6301\u3002")),(0,l.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,l.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:r(16710).Z,className:"icon_platform",width:"25px"})," ",(0,l.kt)("img",{title:"H5",src:r(5030).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,l.kt)("img",{title:"React Native",src:r(73555).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/share/wx.onCopyUrl.html"},"\u53c2\u8003\u6587\u6863"))),(0,l.kt)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"(callback: Callback) => void\n")),(0,l.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"callback"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Callback")),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u70b9\u51fb\u53f3\u4e0a\u89d2\u83dc\u5355\u7684\u300c\u590d\u5236\u94fe\u63a5\u300d\u6309\u94ae\u65f6\u89e6\u53d1\u7684\u4e8b\u4ef6\u7684\u56de\u8c03\u51fd\u6570")))),(0,l.kt)("h3",{id:"callback"},"Callback"),(0,l.kt)("p",null,"\u7528\u6237\u70b9\u51fb\u53f3\u4e0a\u89d2\u83dc\u5355\u7684\u300c\u590d\u5236\u94fe\u63a5\u300d\u6309\u94ae\u65f6\u89e6\u53d1\u7684\u4e8b\u4ef6\u7684\u56de\u8c03\u51fd\u6570"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"(result: CallbackResult) => void\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"result"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"CallbackResult"))))),(0,l.kt)("h3",{id:"callbackresult"},"CallbackResult"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"query"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u77ed\u94fe\u6253\u5f00\u5c0f\u7a0b\u5e8f\u65f6\u5f53\u524d\u9875\u9762\u643a\u5e26\u7684\u67e5\u8be2\u5b57\u7b26\u4e32\u3002\u5c0f\u7a0b\u5e8f\u4e2d\u4f7f\u7528\u65f6\uff0c\u5e94\u5728\u8fdb\u5165\u9875\u9762\u65f6\u8c03\u7528 ",(0,l.kt)("inlineCode",{parentName:"td"},"Taro.onCopyUrl")," \u81ea\u5b9a\u4e49 ",(0,l.kt)("inlineCode",{parentName:"td"},"query"),"\uff0c\u9000\u51fa\u9875\u9762\u65f6\u8c03\u7528 ",(0,l.kt)("inlineCode",{parentName:"td"},"Taro.offCopyUrl"),"\uff0c\u9632\u6b62\u5f71\u54cd\u5176\u5b83\u9875\u9762\u3002")))))}d.isMDXComponent=!0},5030:function(e,t,r){t.Z=r.p+"assets/images/h5-81f73c447874b6528e84ee395bece16e.png"},73555:function(e,t,r){t.Z=r.p+"assets/images/rn-ecec68ba194e4b5e9fc3e853cc00c569.png"},16710:function(e,t,r){t.Z=r.p+"assets/images/weapp-0e8fbe2d5eb3676de4961b54ee7f5ba4.png"}}]);