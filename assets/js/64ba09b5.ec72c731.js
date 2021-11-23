"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[18097],{3905:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return p}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var i=r.createContext({}),u=function(t){var e=r.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},d=function(t){var e=u(t.components);return r.createElement(i.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,i=t.parentName,d=c(t,["components","mdxType","originalType","parentName"]),s=u(n),p=a,g=s["".concat(i,".").concat(p)]||s[p]||k[p]||o;return n?r.createElement(g,l(l({ref:e},d),{},{components:n})):r.createElement(g,l({ref:e},d))}));function p(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,l=new Array(o);l[0]=s;var c={};for(var i in e)hasOwnProperty.call(e,i)&&(c[i]=e[i]);c.originalType=t,c.mdxType="string"==typeof t?t:a,l[1]=c;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},94578:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return u},toc:function(){return d},default:function(){return s}});var r=n(83117),a=n(80102),o=(n(67294),n(3905)),l=["components"],c={title:"Taro.setBackgroundFetchToken(option)",sidebar_label:"setBackgroundFetchToken"},i=void 0,u={unversionedId:"apis/storage/background-fetch/setBackgroundFetchToken",id:"apis/storage/background-fetch/setBackgroundFetchToken",isDocsHomePage:!1,title:"Taro.setBackgroundFetchToken(option)",description:"\u8bbe\u7f6e\u81ea\u5b9a\u4e49\u767b\u5f55\u6001\uff0c\u5728\u5468\u671f\u6027\u62c9\u53d6\u6570\u636e\u65f6\u5e26\u4e0a\uff0c\u4fbf\u4e8e\u7b2c\u4e09\u65b9\u670d\u52a1\u5668\u9a8c\u8bc1\u8bf7\u6c42\u5408\u6cd5\u6027",source:"@site/docs/apis/storage/background-fetch/setBackgroundFetchToken.md",sourceDirName:"apis/storage/background-fetch",slug:"/apis/storage/background-fetch/setBackgroundFetchToken",permalink:"/taro/docs/next/apis/storage/background-fetch/setBackgroundFetchToken",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/apis/storage/background-fetch/setBackgroundFetchToken.md",tags:[],version:"current",frontMatter:{title:"Taro.setBackgroundFetchToken(option)",sidebar_label:"setBackgroundFetchToken"},sidebar:"API",previous:{title:"clearStorage",permalink:"/taro/docs/next/apis/storage/clearStorage"},next:{title:"onBackgroundFetchData",permalink:"/taro/docs/next/apis/storage/background-fetch/onBackgroundFetchData"}},d=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[],level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Option",id:"option",children:[],level:3}],level:2},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[],level:2}],k={toc:d};function s(t){var e=t.components,n=(0,a.Z)(t,l);return(0,o.kt)("wrapper",(0,r.Z)({},k,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u8bbe\u7f6e\u81ea\u5b9a\u4e49\u767b\u5f55\u6001\uff0c\u5728\u5468\u671f\u6027\u62c9\u53d6\u6570\u636e\u65f6\u5e26\u4e0a\uff0c\u4fbf\u4e8e\u7b2c\u4e09\u65b9\u670d\u52a1\u5668\u9a8c\u8bc1\u8bf7\u6c42\u5408\u6cd5\u6027"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/storage/background-fetch/wx.setBackgroundFetchToken.html"},"\u53c2\u8003\u6587\u6863"))),(0,o.kt)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"(option: Option) => void\n")),(0,o.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,o.kt)("h3",{id:"option"},"Option"),(0,o.kt)("table",null,(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"\u53c2\u6570"),(0,o.kt)("th",null,"\u7c7b\u578b"),(0,o.kt)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),(0,o.kt)("th",null,"\u8bf4\u660e"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"token"),(0,o.kt)("td",null,(0,o.kt)("code",null,"string")),(0,o.kt)("td",{style:{textAlign:"center"}},"\u662f"),(0,o.kt)("td",null,"\u81ea\u5b9a\u4e49\u7684\u767b\u5f55\u6001")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"complete"),(0,o.kt)("td",null,(0,o.kt)("code",null,"(res: CallbackResult) => void")),(0,o.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,o.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"fail"),(0,o.kt)("td",null,(0,o.kt)("code",null,"(res: CallbackResult) => void")),(0,o.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,o.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"success"),(0,o.kt)("td",null,(0,o.kt)("code",null,"(res: CallbackResult) => void")),(0,o.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,o.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))),(0,o.kt)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"API"),(0,o.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,o.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,o.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Taro.setBackgroundFetchToken"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,o.kt)("td",{parentName:"tr",align:"center"}),(0,o.kt)("td",{parentName:"tr",align:"center"})))))}s.isMDXComponent=!0}}]);