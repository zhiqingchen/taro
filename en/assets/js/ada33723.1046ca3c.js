(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[84265],{22122:function(t,e,r){"use strict";function n(){return(n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}r.d(e,{Z:function(){return n}})},19756:function(t,e,r){"use strict";function n(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}r.d(e,{Z:function(){return n}})},3905:function(t,e,r){"use strict";r.d(e,{Zo:function(){return p},kt:function(){return m}});var n=r(67294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var u=n.createContext({}),l=function(t){var e=n.useContext(u),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},p=function(t){var e=l(t.components);return n.createElement(u.Provider,{value:e},t.children)},f={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,a=t.originalType,u=t.parentName,p=c(t,["components","mdxType","originalType","parentName"]),s=l(r),m=o,b=s["".concat(u,".").concat(m)]||s[m]||f[m]||a;return r?n.createElement(b,i(i({ref:e},p),{},{components:r})):n.createElement(b,i({ref:e},p))}));function m(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=r.length,i=new Array(a);i[0]=s;var c={};for(var u in e)hasOwnProperty.call(e,u)&&(c[u]=e[u]);c.originalType=t,c.mdxType="string"==typeof t?t:o,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},95652:function(t,e,r){"use strict";r.r(e),r.d(e,{frontMatter:function(){return i},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var n=r(22122),o=r(19756),a=(r(67294),r(3905)),i={slug:"2018-09-11-taro-in-jd",title:"Taro \u5728\u4eac\u4e1c\u8d2d\u7269\u5c0f\u7a0b\u5e8f\u4e0a\u7684\u5b9e\u8df5",author:"hihuimin",author_url:"https://github.com/hihuimin",author_image_url:"https://avatars1.githubusercontent.com/u/3112601?s=460&v=4"},c={permalink:"/taro/en/blog/2018-09-11-taro-in-jd",editUrl:"https://github.com/nervjs/taro/edit/blog/blog/2018-09-11-taro-in-jd.md",source:"@site/blog/2018-09-11-taro-in-jd.md",title:"Taro \u5728\u4eac\u4e1c\u8d2d\u7269\u5c0f\u7a0b\u5e8f\u4e0a\u7684\u5b9e\u8df5",description:"\u5728 Taro \u53d1\u5e03\u4e4b\u540e\uff0c\u4eac\u4e1c\u8d2d\u7269\u5c0f\u7a0b\u5e8f\u4e5f\u5f00\u59cb\u4e86\u90e8\u5206\u9875\u9762\u57fa\u4e8e Taro \u7684\u91cd\u6784.",date:"2018-09-11T00:00:00.000Z",formattedDate:"September 11, 2018",tags:[],readingTime:2.2,truncated:!0,prevItem:{title:"\u591a\u7aef\u7edf\u4e00\u5f00\u53d1\u6846\u67b6 Taro 1.0 \u6b63\u5f0f\u53d1\u5e03",permalink:"/taro/en/blog/2018-09-18-taro-1-0-0"},nextItem:{title:"\u9996\u4e2a\u591a\u7aef UI \u7ec4\u4ef6\u5e93 - Taro UI \u53d1\u5e03",permalink:"/taro/en/blog/2018-08-24-the-birth-of-taro-ui"}},u=[],l={toc:u};function p(t){var e=t.components,r=(0,o.Z)(t,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5728 Taro \u53d1\u5e03\u4e4b\u540e\uff0c\u4eac\u4e1c\u8d2d\u7269\u5c0f\u7a0b\u5e8f\u4e5f\u5f00\u59cb\u4e86\u90e8\u5206\u9875\u9762\u57fa\u4e8e Taro \u7684\u91cd\u6784."))}p.isMDXComponent=!0}}]);