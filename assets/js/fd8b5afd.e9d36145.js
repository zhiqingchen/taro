"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[3347],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,f=d["".concat(i,".").concat(m)]||d[m]||s[m]||c;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,o=new Array(c);o[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<c;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},54468:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var n=r(83117),a=r(80102),c=(r(67294),r(3905)),o=["components"],l={title:"Taro.onUserCaptureScreen(callback)",sidebar_label:"onUserCaptureScreen"},i=void 0,p={unversionedId:"apis/device/screen/onUserCaptureScreen",id:"apis/device/screen/onUserCaptureScreen",isDocsHomePage:!1,title:"Taro.onUserCaptureScreen(callback)",description:"\u76d1\u542c\u7528\u6237\u4e3b\u52a8\u622a\u5c4f\u4e8b\u4ef6\uff0c\u7528\u6237\u4f7f\u7528\u7cfb\u7edf\u622a\u5c4f\u6309\u952e\u622a\u5c4f\u65f6\u89e6\u53d1\u6b64\u4e8b\u4ef6",source:"@site/docs/apis/device/screen/onUserCaptureScreen.md",sourceDirName:"apis/device/screen",slug:"/apis/device/screen/onUserCaptureScreen",permalink:"/taro/docs/next/apis/device/screen/onUserCaptureScreen",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/apis/device/screen/onUserCaptureScreen.md",tags:[],version:"current",frontMatter:{title:"Taro.onUserCaptureScreen(callback)",sidebar_label:"onUserCaptureScreen"},sidebar:"API",previous:{title:"setKeepScreenOn",permalink:"/taro/docs/next/apis/device/screen/setKeepScreenOn"},next:{title:"offUserCaptureScreen",permalink:"/taro/docs/next/apis/device/screen/offUserCaptureScreen"}},u=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[],level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[],level:2},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[],level:2},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[],level:2}],s={toc:u};function d(e){var t=e.components,r=(0,a.Z)(e,o);return(0,c.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"\u76d1\u542c\u7528\u6237\u4e3b\u52a8\u622a\u5c4f\u4e8b\u4ef6\uff0c\u7528\u6237\u4f7f\u7528\u7cfb\u7edf\u622a\u5c4f\u6309\u952e\u622a\u5c4f\u65f6\u89e6\u53d1\u6b64\u4e8b\u4ef6"),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},(0,c.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/device/screen/wx.onUserCaptureScreen.html"},"\u53c2\u8003\u6587\u6863"))),(0,c.kt)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-tsx"},"(callback: (res: CallbackResult) => void) => void\n")),(0,c.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,c.kt)("table",null,(0,c.kt)("thead",null,(0,c.kt)("tr",null,(0,c.kt)("th",null,"\u53c2\u6570"),(0,c.kt)("th",null,"\u7c7b\u578b"),(0,c.kt)("th",null,"\u8bf4\u660e"))),(0,c.kt)("tbody",null,(0,c.kt)("tr",null,(0,c.kt)("td",null,"callback"),(0,c.kt)("td",null,(0,c.kt)("code",null,"(res: CallbackResult) => void")),(0,c.kt)("td",null,"\u7528\u6237\u4e3b\u52a8\u622a\u5c4f\u4e8b\u4ef6\u7684\u56de\u8c03\u51fd\u6570")))),(0,c.kt)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-tsx"},"Taro.onUserCaptureScreen(function (res) {\n    console.log('\u7528\u6237\u622a\u5c4f\u4e86')\n})\n")),(0,c.kt)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),(0,c.kt)("table",null,(0,c.kt)("thead",{parentName:"table"},(0,c.kt)("tr",{parentName:"thead"},(0,c.kt)("th",{parentName:"tr",align:"center"},"API"),(0,c.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,c.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,c.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,c.kt)("tbody",{parentName:"table"},(0,c.kt)("tr",{parentName:"tbody"},(0,c.kt)("td",{parentName:"tr",align:"center"},"Taro.onUserCaptureScreen"),(0,c.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,c.kt)("td",{parentName:"tr",align:"center"}),(0,c.kt)("td",{parentName:"tr",align:"center"})))))}d.isMDXComponent=!0}}]);