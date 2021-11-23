"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[47884],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),s=l(r),m=o,d=s["".concat(i,".").concat(m)]||s[m]||f[m]||a;return r?n.createElement(d,c(c({ref:t},p),{},{components:r})):n.createElement(d,c({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=s;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:o,c[1]=u;for(var l=2;l<a;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},5675:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return u},contentTitle:function(){return i},metadata:function(){return l},assets:function(){return p},toc:function(){return f},default:function(){return m}});var n=r(83117),o=r(80102),a=(r(67294),r(3905)),c=["components"],u={slug:"2019-10-24-taro-open",title:"Taro \u9080\u4f60\u52a0\u5165\u793e\u533a\u5171\u5efa \u2014 \u793e\u533a\u5171\u5efa\u5021\u8bae\u4e66",author:"luckyadam",author_url:"https://github.com/luckyadam",author_image_url:"https://avatars2.githubusercontent.com/u/1782542?s=400&u=d20514a52100ed1f82282bcfca6f49052793c889&v=4"},i=void 0,l={permalink:"/taro/blog/2019-10-24-taro-open",editUrl:"https://github.com/nervjs/taro/edit/blog/blog/2019-10-24-taro-open.md",source:"@site/blog/2019-10-24-taro-open.md",title:"Taro \u9080\u4f60\u52a0\u5165\u793e\u533a\u5171\u5efa \u2014 \u793e\u533a\u5171\u5efa\u5021\u8bae\u4e66",description:"Taro \u4f5c\u4e3a\u4e00\u4e2a\u591a\u7aef\u7edf\u4e00\u5f00\u53d1\u89e3\u51b3\u65b9\u6848\uff0c\u81ea\u8bde\u751f\u4ee5\u6765\u4e00\u76f4\u4fdd\u6301\u7740\u9ad8\u901f\u7684\u53d1\u5c55\u6001\u52bf\uff0c \u4ece\u4e00\u4e2a\u5355\u4e00\u7684\u5f00\u53d1\u6846\u67b6\u53d1\u5c55\u5230\u5982\u4eca\u670d\u52a1\u6570\u4e07\u540d\u5f00\u53d1\u8005\u7684\u591a\u7aef\u89e3\u51b3\u65b9\u6848\uff0cTaro \u7684\u6210\u957f\u6709 Taro \u56e2\u961f\u4e0d\u5fd8\u521d\u5fc3\u7684\u52aa\u529b\uff0c\u4f46\u66f4\u91cd\u8981\u7684\u662f\uff0c\u79bb\u4e0d\u5f00\u793e\u533a\u5e7f\u5927\u5f00\u53d1\u8005\u7684\u652f\u6301\u548c\u5e2e\u52a9\u3002",date:"2019-10-24T00:00:00.000Z",formattedDate:"2019\u5e7410\u670824\u65e5",tags:[],readingTime:9.59,truncated:!0,authors:[{name:"luckyadam",url:"https://github.com/luckyadam",imageURL:"https://avatars2.githubusercontent.com/u/1782542?s=400&u=d20514a52100ed1f82282bcfca6f49052793c889&v=4"}],prevItem:{title:"\u4eac\u559c\u9996\u9875\uff08\u5fae\u4fe1\u8d2d\u7269\u5165\u53e3\uff09\u8de8\u7aef\u5f00\u53d1\u4e0e\u4f18\u5316\u5b9e\u8df5",permalink:"/taro/blog/2019-12-03-jingxi-index"},nextItem:{title:"\u73a9\u8f6c Taro \u8de8\u7aef\u4e4b flex \u5e03\u5c40\u7bc7",permalink:"/taro/blog/2019-09-25-taro-flex"}},p={authorsImageUrls:[void 0]},f=[],s={toc:f};function m(e){var t=e.components,r=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://taro.jd.com"},"Taro")," \u4f5c\u4e3a\u4e00\u4e2a\u591a\u7aef\u7edf\u4e00\u5f00\u53d1\u89e3\u51b3\u65b9\u6848\uff0c\u81ea\u8bde\u751f\u4ee5\u6765\u4e00\u76f4\u4fdd\u6301\u7740\u9ad8\u901f\u7684\u53d1\u5c55\u6001\u52bf\uff0c \u4ece\u4e00\u4e2a\u5355\u4e00\u7684\u5f00\u53d1\u6846\u67b6\u53d1\u5c55\u5230\u5982\u4eca\u670d\u52a1\u6570\u4e07\u540d\u5f00\u53d1\u8005\u7684\u591a\u7aef\u89e3\u51b3\u65b9\u6848\uff0cTaro \u7684\u6210\u957f\u6709 Taro \u56e2\u961f\u4e0d\u5fd8\u521d\u5fc3\u7684\u52aa\u529b\uff0c\u4f46\u66f4\u91cd\u8981\u7684\u662f\uff0c\u79bb\u4e0d\u5f00\u793e\u533a\u5e7f\u5927\u5f00\u53d1\u8005\u7684\u652f\u6301\u548c\u5e2e\u52a9\u3002"))}m.isMDXComponent=!0}}]);