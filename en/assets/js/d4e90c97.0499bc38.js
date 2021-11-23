"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[16014],{3905:function(t,e,r){r.d(e,{Zo:function(){return p},kt:function(){return s}});var n=r(67294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var u=n.createContext({}),l=function(t){var e=n.useContext(u),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},p=function(t){var e=l(t.components);return n.createElement(u.Provider,{value:e},t.children)},f={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,a=t.originalType,u=t.parentName,p=c(t,["components","mdxType","originalType","parentName"]),m=l(r),s=o,b=m["".concat(u,".").concat(s)]||m[s]||f[s]||a;return r?n.createElement(b,i(i({ref:e},p),{},{components:r})):n.createElement(b,i({ref:e},p))}));function s(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=r.length,i=new Array(a);i[0]=m;var c={};for(var u in e)hasOwnProperty.call(e,u)&&(c[u]=e[u]);c.originalType=t,c.mdxType="string"==typeof t?t:o,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},19242:function(t,e,r){r.r(e),r.d(e,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return l},assets:function(){return p},toc:function(){return f},default:function(){return s}});var n=r(83117),o=r(80102),a=(r(67294),r(3905)),i=["components"],c={slug:"2019-02-28-taro-h5-optimize",title:"\u51b3\u6218\u6027\u80fd\u4e4b\u5dc5 - Taro H5 \u8f6c\u6362\u4e0e\u4f18\u5316\u5347\u7ea7",author:"Littly",author_url:"https://github.com/Littly",author_image_url:"https://avatars0.githubusercontent.com/u/5780093?s=460&u=f92cbac202f03815a041541ff06397d5d0130232&v=4"},u=void 0,l={permalink:"/taro/en/blog/2019-02-28-taro-h5-optimize",editUrl:"https://github.com/nervjs/taro/edit/blog/blog/2019-02-28-taro-h5-optimize.md",source:"@site/blog/2019-02-28-taro-h5-optimize.md",title:"\u51b3\u6218\u6027\u80fd\u4e4b\u5dc5 - Taro H5 \u8f6c\u6362\u4e0e\u4f18\u5316\u5347\u7ea7",description:"image",date:"2019-02-28T00:00:00.000Z",formattedDate:"February 28, 2019",tags:[],readingTime:14.68,truncated:!0,authors:[{name:"Littly",url:"https://github.com/Littly",imageURL:"https://avatars0.githubusercontent.com/u/5780093?s=460&u=f92cbac202f03815a041541ff06397d5d0130232&v=4"}],prevItem:{title:"\u5c0f\u7a0b\u5e8f\u6846\u67b6\u5168\u9762\u6d4b\u8bc4",permalink:"/taro/en/blog/2019-03-12-mini-program-framework-full-review"},nextItem:{title:"Taro UI 2.0 \u53d1\u5e03\uff1a\u65b0\u589e\u81ea\u5b9a\u4e49\u4e3b\u9898\u529f\u80fd\uff0c\u9002\u914d\u66f4\u591a\u5c0f\u7a0b\u5e8f",permalink:"/taro/en/blog/2019-02-25-taro-ui-2.0"}},p={authorsImageUrls:[void 0]},f=[],m={toc:f};function s(t){var e=t.components,r=(0,o.Z)(t,i);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img10.360buyimg.com/img/jfs/t1/21860/12/8740/42390/5c790470E1d0bbce9/9f9bb78d01f7564b.png",alt:"image"})),(0,a.kt)("p",null,"\u4f5c\u4e3a\u4e00\u4e2a\u591a\u7aef\u5f00\u53d1\u6846\u67b6\uff0cTaro \u4ece\u9879\u76ee\u53d1\u8d77\u65f6\u5c31\u5df2\u7ecf\u652f\u6301\u7f16\u8bd1\u5230 H5 \u7aef\u3002\u968f\u7740 Taro \u591a\u7aef\u80fd\u529b\u7684\u4e0d\u65ad\u6210\u719f\uff0c\u6211\u4eec\u5bf9 Taro H5 \u7aef\u5e94\u7528\u7684\u8981\u6c42\u4e5f\u4e0d\u65ad\u63d0\u5347\u3002\u6211\u4eec\u5df2\u7ecf\u4e0d\u518d\u6ee1\u8db3\u4e8e\u201c\u80fd\u8dd1\u201d\uff0c\u66f4\u5e0c\u671b Taro \u80fd\u8dd1\u5f97\u5feb\u3002"))}s.isMDXComponent=!0}}]);