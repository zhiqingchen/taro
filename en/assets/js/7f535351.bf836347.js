"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[37117],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=p(r),d=a,m=f["".concat(i,".").concat(d)]||f[d]||u[d]||c;return r?n.createElement(m,o(o({ref:t},s),{},{components:r})):n.createElement(m,o({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,o=new Array(c);o[0]=f;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<c;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},219:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return p},toc:function(){return s},default:function(){return f}});var n=r(83117),a=r(80102),c=(r(67294),r(3905)),o=["components"],l={title:"Taro.offUserCaptureScreen(callback)",sidebar_label:"offUserCaptureScreen"},i=void 0,p={unversionedId:"apis/device/screen/offUserCaptureScreen",id:"apis/device/screen/offUserCaptureScreen",title:"Taro.offUserCaptureScreen(callback)",description:"Un-listens on the event that the user actively takes screenshots.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/apis/device/screen/offUserCaptureScreen.md",sourceDirName:"apis/device/screen",slug:"/apis/device/screen/offUserCaptureScreen",permalink:"/taro/en/docs/next/apis/device/screen/offUserCaptureScreen",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/apis/device/screen/offUserCaptureScreen.md",tags:[],version:"current",frontMatter:{title:"Taro.offUserCaptureScreen(callback)",sidebar_label:"offUserCaptureScreen"},sidebar:"API",previous:{title:"onUserCaptureScreen",permalink:"/taro/en/docs/next/apis/device/screen/onUserCaptureScreen"},next:{title:"getScreenBrightness",permalink:"/taro/en/docs/next/apis/device/screen/getScreenBrightness"}},s=[{value:"Type",id:"type",children:[],level:2},{value:"Parameters",id:"parameters",children:[],level:2},{value:"API Support",id:"api-support",children:[],level:2}],u={toc:s};function f(e){var t=e.components,r=(0,a.Z)(e,o);return(0,c.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"Un-listens on the event that the user actively takes screenshots."),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},(0,c.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/device/screen/wx.offUserCaptureScreen.html"},"Reference"))),(0,c.kt)("h2",{id:"type"},"Type"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-tsx"},"(callback: (...args: any[]) => any) => void\n")),(0,c.kt)("h2",{id:"parameters"},"Parameters"),(0,c.kt)("table",null,(0,c.kt)("thead",null,(0,c.kt)("tr",null,(0,c.kt)("th",null,"Property"),(0,c.kt)("th",null,"Type"),(0,c.kt)("th",null,"Description"))),(0,c.kt)("tbody",null,(0,c.kt)("tr",null,(0,c.kt)("td",null,"callback"),(0,c.kt)("td",null,(0,c.kt)("code",null,"(...args: any[]) => any")),(0,c.kt)("td",null,"The callback function for the event that the user actively takes screenshots.")))),(0,c.kt)("h2",{id:"api-support"},"API Support"),(0,c.kt)("table",null,(0,c.kt)("thead",{parentName:"table"},(0,c.kt)("tr",{parentName:"thead"},(0,c.kt)("th",{parentName:"tr",align:"center"},"API"),(0,c.kt)("th",{parentName:"tr",align:"center"},"WeChat Mini-Program"),(0,c.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,c.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,c.kt)("tbody",{parentName:"table"},(0,c.kt)("tr",{parentName:"tbody"},(0,c.kt)("td",{parentName:"tr",align:"center"},"Taro.offUserCaptureScreen"),(0,c.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,c.kt)("td",{parentName:"tr",align:"center"}),(0,c.kt)("td",{parentName:"tr",align:"center"})))))}f.isMDXComponent=!0}}]);