"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[23477],{3905:function(t,n,e){e.d(n,{Zo:function(){return p},kt:function(){return s}});var r=e(67294);function l(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function o(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function a(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?o(Object(e),!0).forEach((function(n){l(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):o(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function c(t,n){if(null==t)return{};var e,r,l=function(t,n){if(null==t)return{};var e,r,l={},o=Object.keys(t);for(r=0;r<o.length;r++)e=o[r],n.indexOf(e)>=0||(l[e]=t[e]);return l}(t,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)e=o[r],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(l[e]=t[e])}return l}var i=r.createContext({}),u=function(t){var n=r.useContext(i),e=n;return t&&(e="function"==typeof t?t(n):a(a({},n),t)),e},p=function(t){var n=u(t.components);return r.createElement(i.Provider,{value:n},t.children)},d={inlineCode:"code",wrapper:function(t){var n=t.children;return r.createElement(r.Fragment,{},n)}},k=r.forwardRef((function(t,n){var e=t.components,l=t.mdxType,o=t.originalType,i=t.parentName,p=c(t,["components","mdxType","originalType","parentName"]),k=u(e),s=l,f=k["".concat(i,".").concat(s)]||k[s]||d[s]||o;return e?r.createElement(f,a(a({ref:n},p),{},{components:e})):r.createElement(f,a({ref:n},p))}));function s(t,n){var e=arguments,l=n&&n.mdxType;if("string"==typeof t||l){var o=e.length,a=new Array(o);a[0]=k;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=t,c.mdxType="string"==typeof t?t:l,a[1]=c;for(var u=2;u<o;u++)a[u]=e[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,e)}k.displayName="MDXCreateElement"},1285:function(t,n,e){e.r(n),e.d(n,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return u},toc:function(){return p},default:function(){return k}});var r=e(83117),l=e(80102),o=(e(67294),e(3905)),a=["components"],c={title:"Taro.getAccountInfoSync()",sidebar_label:"getAccountInfoSync"},i=void 0,u={unversionedId:"apis/open-api/account/getAccountInfoSync",id:"apis/open-api/account/getAccountInfoSync",isDocsHomePage:!1,title:"Taro.getAccountInfoSync()",description:"\u83b7\u53d6\u5f53\u524d\u5e10\u53f7\u4fe1\u606f",source:"@site/docs/apis/open-api/account/getAccountInfoSync.md",sourceDirName:"apis/open-api/account",slug:"/apis/open-api/account/getAccountInfoSync",permalink:"/taro/docs/next/apis/open-api/account/getAccountInfoSync",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/apis/open-api/account/getAccountInfoSync.md",tags:[],version:"current",frontMatter:{title:"Taro.getAccountInfoSync()",sidebar_label:"getAccountInfoSync"},sidebar:"API",previous:{title:"navigateBackMiniProgram",permalink:"/taro/docs/next/apis/open-api/navigate/navigateBackMiniProgram"},next:{title:"getUserProfile",permalink:"/taro/docs/next/apis/open-api/user-info/getUserProfile"}},p=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[],level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"AccountInfo",id:"accountinfo",children:[],level:3},{value:"MiniProgram",id:"miniprogram",children:[],level:3},{value:"Plugin",id:"plugin",children:[],level:3}],level:2},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[],level:2},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[],level:2}],d={toc:p};function k(t){var n=t.components,e=(0,l.Z)(t,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,e,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u83b7\u53d6\u5f53\u524d\u5e10\u53f7\u4fe1\u606f"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/open-api/account-info/wx.getAccountInfoSync.html"},"\u53c2\u8003\u6587\u6863"))),(0,o.kt)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"() => AccountInfo\n")),(0,o.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,o.kt)("h3",{id:"accountinfo"},"AccountInfo"),(0,o.kt)("p",null,"\u5e10\u53f7\u4fe1\u606f"),(0,o.kt)("table",null,(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"\u53c2\u6570"),(0,o.kt)("th",null,"\u7c7b\u578b"),(0,o.kt)("th",null,"\u8bf4\u660e"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"miniProgram"),(0,o.kt)("td",null,(0,o.kt)("code",null,"MiniProgram")),(0,o.kt)("td",null,"\u5c0f\u7a0b\u5e8f\u5e10\u53f7\u4fe1\u606f")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"plugin"),(0,o.kt)("td",null,(0,o.kt)("code",null,"Plugin")),(0,o.kt)("td",null,"\u63d2\u4ef6\u5e10\u53f7\u4fe1\u606f\uff08\u4ec5\u5728\u63d2\u4ef6\u4e2d\u8c03\u7528\u65f6\u5305\u542b\u8fd9\u4e00\u9879\uff09")))),(0,o.kt)("h3",{id:"miniprogram"},"MiniProgram"),(0,o.kt)("p",null,"\u5c0f\u7a0b\u5e8f\u5e10\u53f7\u4fe1\u606f"),(0,o.kt)("table",null,(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"\u53c2\u6570"),(0,o.kt)("th",null,"\u7c7b\u578b"),(0,o.kt)("th",null,"\u8bf4\u660e"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"appId"),(0,o.kt)("td",null,(0,o.kt)("code",null,"string")),(0,o.kt)("td",null,"\u5c0f\u7a0b\u5e8f appId")))),(0,o.kt)("h3",{id:"plugin"},"Plugin"),(0,o.kt)("p",null,"\u63d2\u4ef6\u5e10\u53f7\u4fe1\u606f\uff08\u4ec5\u5728\u63d2\u4ef6\u4e2d\u8c03\u7528\u65f6\u5305\u542b\u8fd9\u4e00\u9879\uff09"),(0,o.kt)("table",null,(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"\u53c2\u6570"),(0,o.kt)("th",null,"\u7c7b\u578b"),(0,o.kt)("th",null,"\u8bf4\u660e"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"appId"),(0,o.kt)("td",null,(0,o.kt)("code",null,"string")),(0,o.kt)("td",null,"\u63d2\u4ef6 appId")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"version"),(0,o.kt)("td",null,(0,o.kt)("code",null,"string")),(0,o.kt)("td",null,"\u63d2\u4ef6\u7248\u672c\u53f7")))),(0,o.kt)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"const accountInfo = Taro.getAccountInfoSync();\n\nconsole.log(accountInfo.miniProgram.appId) // \u5c0f\u7a0b\u5e8f appId\nconsole.log(accountInfo.plugin.appId) // \u63d2\u4ef6 appId\nconsole.log(accountInfo.plugin.version) // \u63d2\u4ef6\u7248\u672c\u53f7\uff0c 'a.b.c' \u8fd9\u6837\u7684\u5f62\u5f0f\n")),(0,o.kt)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"API"),(0,o.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,o.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,o.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Taro.getAccountInfoSync"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,o.kt)("td",{parentName:"tr",align:"center"}),(0,o.kt)("td",{parentName:"tr",align:"center"})))))}k.isMDXComponent=!0}}]);