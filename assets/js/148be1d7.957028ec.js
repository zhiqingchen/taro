"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[59524],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=p(r),f=a,b=m["".concat(s,".").concat(f)]||m[f]||u[f]||o;return r?n.createElement(b,c(c({ref:t},l),{},{components:r})):n.createElement(b,c({ref:t},l))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var p=2;p<o;p++)c[p]=r[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},68544:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return l},default:function(){return m}});var n=r(83117),a=r(80102),o=(r(67294),r(3905)),c=["components"],i={title:"Taro.createIntersectionObserver(Object component, Object options)",sidebar_label:"createIntersectionObserver"},s=void 0,p={unversionedId:"apis/interface/wxml/createIntersectionObserver",id:"version-1.x/apis/interface/wxml/createIntersectionObserver",title:"Taro.createIntersectionObserver(Object component, Object options)",description:"\u4f7f\u7528\u65b9\u5f0f\u540c\xa0wx.createIntersectionObserver\u3002",source:"@site/versioned_docs/version-1.x/apis/interface/wxml/createIntersectionObserver.md",sourceDirName:"apis/interface/wxml",slug:"/apis/interface/wxml/createIntersectionObserver",permalink:"/taro/docs/1.x/apis/interface/wxml/createIntersectionObserver",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-1.x/apis/interface/wxml/createIntersectionObserver.md",tags:[],version:"1.x",frontMatter:{title:"Taro.createIntersectionObserver(Object component, Object options)",sidebar_label:"createIntersectionObserver"}},l=[{value:"API\u652f\u6301\u5ea6",id:"api\u652f\u6301\u5ea6",children:[],level:2}],u={toc:l};function m(e){var t=e.components,r=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u4f7f\u7528\u65b9\u5f0f\u540c\xa0",(0,o.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/wxml/wx.createIntersectionObserver.html"},(0,o.kt)("inlineCode",{parentName:"a"},"wx.createIntersectionObserver")),"\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u793a\u4f8b\u4ee3\u7801\uff1a")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import\xa0Taro\xa0from\xa0'@tarojs/taro'\n\nconst\xa0observer\xa0=\xa0Taro.createIntersectionObserver(this,\xa0{\xa0thresholds:\xa0[0],\xa0observeAll:\xa0true\xa0})\n")),(0,o.kt)("h2",{id:"api\u652f\u6301\u5ea6"},"API\u652f\u6301\u5ea6"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"\xa0API\xa0"),(0,o.kt)("th",{parentName:"tr",align:"center"},"\xa0\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\xa0"),(0,o.kt)("th",{parentName:"tr",align:"center"},"\xa0H5\xa0"),(0,o.kt)("th",{parentName:"tr",align:"center"},"\xa0ReactNative\xa0"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"\xa0Taro.createIntersectionObserver\xa0"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\xa0\u2714\ufe0f\xa0"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\xa0\xa0"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\xa0\xa0")))))}m.isMDXComponent=!0}}]);