"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[66067],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=l(r),m=a,v=f["".concat(u,".").concat(m)]||f[m]||s[m]||o;return r?n.createElement(v,i(i({ref:t},p),{},{components:r})):n.createElement(v,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},90709:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return l},assets:function(){return p},toc:function(){return s},default:function(){return m}});var n=r(83117),a=r(80102),o=(r(67294),r(3905)),i=["components"],c={slug:"2021-04-08-taro-3.2",title:"Taro 3.2 \u7248\u672c\u6b63\u5f0f\u53d1\u5e03\uff1aReact Native \u652f\u6301\uff0c\u738b\u8005\u5f52\u6765",author:"yechunxi",author_url:"https://github.com/yechunxi",author_image_url:"https://avatars.githubusercontent.com/u/8535673?v=4",tags:["v3"],description:"Taro 3.2 \u7248\u672c\u6b63\u5f0f\u53d1\u5e03\uff1aReact Native \u652f\u6301\uff0c\u738b\u8005\u5f52\u6765"},u=void 0,l={permalink:"/taro/en/blog/2021-04-08-taro-3.2",editUrl:"https://github.com/nervjs/taro/edit/blog/blog/2021-04-08-taro-3.2.md",source:"@site/blog/2021-04-08-taro-3.2.md",title:"Taro 3.2 \u7248\u672c\u6b63\u5f0f\u53d1\u5e03\uff1aReact Native \u652f\u6301\uff0c\u738b\u8005\u5f52\u6765",description:"Taro 3.2 \u7248\u672c\u6b63\u5f0f\u53d1\u5e03\uff1aReact Native \u652f\u6301\uff0c\u738b\u8005\u5f52\u6765",date:"2021-04-08T00:00:00.000Z",formattedDate:"April 8, 2021",tags:[{label:"v3",permalink:"/taro/en/blog/tags/v-3"}],readingTime:11.19,truncated:!0,authors:[{name:"yechunxi",url:"https://github.com/yechunxi",imageURL:"https://avatars.githubusercontent.com/u/8535673?v=4"}],prevItem:{title:"Taro 3.3 alpha \u53d1\u5e03\uff1a\u7528 ant-design \u5f00\u53d1\u5c0f\u7a0b\u5e8f\uff1f",permalink:"/taro/en/blog/2021-04-22-Taro-3.3-alpha"},nextItem:{title:"Taro \u6b63\u5f0f\u53d1\u5e03 3.1 \u7248\u672c",permalink:"/taro/en/blog/2021-03-10-taro-3-1-lts"}},p={authorsImageUrls:[void 0]},s=[],f={toc:s};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Taro")," \u662f\u4e00\u4e2a\u5f00\u653e\u5f0f ",(0,o.kt)("strong",{parentName:"p"},"\u8de8\u7aef\u8de8\u6846\u67b6")," \u89e3\u51b3\u65b9\u6848\uff0c\u652f\u6301\u4f7f\u7528   React/Vue/Nerv \u7b49\u6846\u67b6\u6765\u5f00\u53d1 ",(0,o.kt)("inlineCode",{parentName:"p"},"\u5fae\u4fe1/\u4eac\u4e1c/\u767e\u5ea6/\u652f\u4ed8\u5b9d/\u5b57\u8282\u8df3\u52a8/QQ\u5c0f\u7a0b\u5e8f/H5/React Native")," \u7b49\u5e94\u7528\u3002"),(0,o.kt)("p",null,"\u81ea\u4ece Taro 3 \u53d1\u5e03\u4ee5\u6765\uff0c\u4e0d\u5c11\u5f00\u53d1\u8005\u671f\u5f85 Taro 3 \u53ef\u4ee5\u652f\u6301 React Native\u3002\u57fa\u4e8e 58 \u56e2\u961f\u5728 React Native \u65b9\u5411\u7684\u6280\u672f\u79ef\u7d2f\uff0c\u6211\u4eec\u4e0e Taro \u56e2\u961f\u8fbe\u6210\u6218\u7565\u5408\u4f5c\u4f19\u4f34\u5173\u7cfb\u3002\u7531 58 \u56e2\u961f\u4e3b\u5bfc\u5f00\u53d1 Taro 3 React Native\uff0c\u5171\u540c\u63a8\u8fdb Taro \u7684\u53d1\u5c55\u3002"),(0,o.kt)("p",null,"\u53bb\u5e74 12 \u6708\u5f00\u59cb\uff0c\u5df2\u7ecf\u5b8c\u6210\u4e86 ",(0,o.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/-7G7NMHX8ol99QxkswFOxg"},"Taro 3 React Native \u7684\u652f\u6301"),"\uff0c\u5171\u53d1\u5e03\u4e86 9 \u4e2a canary \u7248\u672c\u4e0e 4 \u4e2a beta \u7248\uff0c\u7ecf\u8fc7\u8f83\u957f\u65f6\u95f4\u7684\u9a8c\u8bc1\uff0c\u5982\u4eca\u7ec8\u4e8e\u8fce\u6765\u4e86 3.2 \u6b63\u5f0f\u7248\u3002"))}m.isMDXComponent=!0}}]);