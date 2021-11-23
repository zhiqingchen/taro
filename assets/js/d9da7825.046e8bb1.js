"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[30395],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return u}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=p(r),u=o,f=m["".concat(l,".").concat(u)]||m[u]||d[u]||a;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function u(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8167:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return s},default:function(){return m}});var n=r(83117),o=r(80102),a=(r(67294),r(3905)),i=["components"],c={title:"Taro.chooseVideo(OBJECT)",sidebar_label:"chooseVideo"},l=void 0,p={unversionedId:"apis/multimedia/video/chooseVideo",id:"version-1.x/apis/multimedia/video/chooseVideo",isDocsHomePage:!1,title:"Taro.chooseVideo(OBJECT)",description:"\u4f7f\u7528\u65b9\u5f0f\u540c wx.chooseVideo\uff0c\u652f\u6301 Promise \u5316\u4f7f\u7528\u3002",source:"@site/versioned_docs/version-1.x/apis/multimedia/video/chooseVideo.md",sourceDirName:"apis/multimedia/video",slug:"/apis/multimedia/video/chooseVideo",permalink:"/taro/docs/1.x/apis/multimedia/video/chooseVideo",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-1.x/apis/multimedia/video/chooseVideo.md",tags:[],version:"1.x",frontMatter:{title:"Taro.chooseVideo(OBJECT)",sidebar_label:"chooseVideo"},sidebar:"version-1.x/API",previous:{title:"stopRecord",permalink:"/taro/docs/1.x/apis/multimedia/recording/stopRecord"},next:{title:"saveVideoToPhotosAlbum",permalink:"/taro/docs/1.x/apis/multimedia/video/saveVideoToPhotosAlbum"}},s=[{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[],level:2},{value:"API\u652f\u6301\u5ea6",id:"api\u652f\u6301\u5ea6",children:[],level:2}],d={toc:s};function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u4f7f\u7528\u65b9\u5f0f\u540c ",(0,a.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/wx.chooseVideo.html"},(0,a.kt)("inlineCode",{parentName:"a"},"wx.chooseVideo")),"\uff0c\u652f\u6301 ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise")," \u5316\u4f7f\u7528\u3002"),(0,a.kt)("p",null,"\u6ce8\uff1aRN\u7aef\u8be5API\u4e0d\u652f\u6301 ",(0,a.kt)("inlineCode",{parentName:"p"},"compressed")," \u3001",(0,a.kt)("inlineCode",{parentName:"p"},"maxDuration"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"camera")," \u5c5e\u6027\uff1b\u4e0d\u652f\u6301\u76f8\u518c\u4e0e\u76f8\u673a\u540c\u65f6\u9009\u62e9\uff0c\u53ea\u4f1a\u53d6 ",(0,a.kt)("inlineCode",{parentName:"p"},"sourceType")," \u6570\u7ec4\u91cc\u7684\u7b2c\u4e00\u4e2a\u503c\u3002\u9ed8\u8ba4\u4ece\u76f8\u518c\u9009\u53d6\u89c6\u9891\u3002"),(0,a.kt)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import Taro from '@tarojs/taro'\n\nTaro.chooseVideo(params).then(...)\n")),(0,a.kt)("h2",{id:"api\u652f\u6301\u5ea6"},"API\u652f\u6301\u5ea6"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"API"),(0,a.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,a.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Taro.chooseVideo"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")))))}m.isMDXComponent=!0}}]);