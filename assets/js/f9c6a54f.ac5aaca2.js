"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[58450],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=u(r),m=o,d=f["".concat(l,".").concat(m)]||f[m]||s[m]||a;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},2271:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return u},assets:function(){return p},toc:function(){return s},default:function(){return m}});var n=r(83117),o=r(80102),a=(r(67294),r(3905)),i=["components"],c={slug:"2021-02-08-taro-jxpp",title:"Taro \u52a9\u529b\u4eac\u559c\u62fc\u62fc\u9879\u76ee\u6027\u80fd\u4f53\u9a8c\u4f18\u5316",author:"JJ",author_url:"https://github.com/Chen-jj",author_image_url:"https://storage.jd.com/cjj-pub-images/11807297.png",tags:["v3"],description:"\u4eac\u559c\u62fc\u62fc\u56e2\u961f\u6280\u672f\u9009\u578b\u4f7f\u7528 Taro \u4ee5\u4fbf\u4e8e\u5b9e\u73b0\u591a\u7aef\u9700\u6c42\uff0c\u56e0\u6b64 Taro \u56e2\u961f\u6709\u5e78\u53c2\u4e0e\u5230 \u201c\u4eac\u559c\u62fc\u62fc\u201d \u5c0f\u7a0b\u5e8f\u7684\u6027\u80fd\u4f53\u9a8c\u4f18\u5316\u5de5\u4f5c\u3002\u672c\u6587\u68b3\u7406\u51fa\u4e00\u7cfb\u5217 Taro3 \u5199\u6cd5\u7684\u6700\u4f73\u5b9e\u8df5\u3002"},l=void 0,u={permalink:"/taro/blog/2021-02-08-taro-jxpp",editUrl:"https://github.com/nervjs/taro/edit/blog/blog/2021-02-08-taro-jxpp.md",source:"@site/blog/2021-02-08-taro-jxpp.md",title:"Taro \u52a9\u529b\u4eac\u559c\u62fc\u62fc\u9879\u76ee\u6027\u80fd\u4f53\u9a8c\u4f18\u5316",description:"\u4eac\u559c\u62fc\u62fc\u56e2\u961f\u6280\u672f\u9009\u578b\u4f7f\u7528 Taro \u4ee5\u4fbf\u4e8e\u5b9e\u73b0\u591a\u7aef\u9700\u6c42\uff0c\u56e0\u6b64 Taro \u56e2\u961f\u6709\u5e78\u53c2\u4e0e\u5230 \u201c\u4eac\u559c\u62fc\u62fc\u201d \u5c0f\u7a0b\u5e8f\u7684\u6027\u80fd\u4f53\u9a8c\u4f18\u5316\u5de5\u4f5c\u3002\u672c\u6587\u68b3\u7406\u51fa\u4e00\u7cfb\u5217 Taro3 \u5199\u6cd5\u7684\u6700\u4f73\u5b9e\u8df5\u3002",date:"2021-02-08T00:00:00.000Z",formattedDate:"2021\u5e742\u67088\u65e5",tags:[{label:"v3",permalink:"/taro/blog/tags/v-3"}],readingTime:20.42,truncated:!0,authors:[{name:"JJ",url:"https://github.com/Chen-jj",imageURL:"https://storage.jd.com/cjj-pub-images/11807297.png"}],prevItem:{title:"Taro \u6b63\u5f0f\u53d1\u5e03 3.1 \u7248\u672c",permalink:"/taro/blog/2021-03-10-taro-3-1-lts"},nextItem:{title:"Taro 3.1 beta \u53d1\u5e03\uff1a \u5f00\u653e\u5f0f\u67b6\u6784\u65b0\u589e 4 \u7aef\u652f\u6301",permalink:"/taro/blog/2020-12-15-taro-3-1-beta"}},p={authorsImageUrls:[void 0]},s=[{value:"\u80cc\u666f",id:"\u80cc\u666f",children:[],level:2},{value:"\u5168\u9762\u4f53\u9a8c - \u68b3\u7406 Taro \u5199\u6cd5\u6700\u4f73\u5b9e\u8df5",id:"\u5168\u9762\u4f53\u9a8c---\u68b3\u7406-taro-\u5199\u6cd5\u6700\u4f73\u5b9e\u8df5",children:[],level:2}],f={toc:s};function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u80cc\u666f"},"\u80cc\u666f"),(0,a.kt)("p",null,"2020 \u5e74\u662f\u793e\u533a\u56e2\u8d2d\u98ce\u8d77\u4e91\u6d8c\u7684\u4e00\u5e74\uff0c\u4e92\u8054\u7f51\u5927\u5382\u7eb7\u7eb7\u6293\u7d27\u4e00\u5206\u4e00\u79d2\u8dd1\u6b65\u8fdb\u573a\u3002\u201c\u4eac\u559c\u62fc\u62fc\u201d\u662f\u4eac\u4e1c\u65d7\u4e0b\u7684\u793e\u533a\u56e2\u8d2d\u5e73\u53f0\uff0c\u4f9d\u6258\u4eac\u4e1c\u4f9b\u5e94\u94fe\u4f53\u7cfb\uff0c\u7cbe\u9009\u4f4e\u4ef7\u597d\u8d27\uff0c\u4e3a\u793e\u533a\u7528\u6237\u63d0\u4f9b\u6b21\u65e5\u8fbe\u7b49\u4f18\u8d28\u670d\u52a1\u3002"),(0,a.kt)("p",null,"\u200b\u4eac\u559c\u62fc\u62fc\u56e2\u961f\u6280\u672f\u9009\u578b\u4f7f\u7528 Taro \u4ee5\u4fbf\u4e8e\u5b9e\u73b0\u591a\u7aef\u9700\u6c42\uff0c\u56e0\u6b64 Taro \u56e2\u961f\u6709\u5e78\u53c2\u4e0e\u5230 \u201c\u4eac\u559c\u62fc\u62fc\u201d \u5c0f\u7a0b\u5e8f\u7684\u6027\u80fd\u4f53\u9a8c\u4f18\u5316\u5de5\u4f5c\u3002"),(0,a.kt)("h2",{id:"\u5168\u9762\u4f53\u9a8c---\u68b3\u7406-taro-\u5199\u6cd5\u6700\u4f73\u5b9e\u8df5"},"\u5168\u9762\u4f53\u9a8c - \u68b3\u7406 Taro \u5199\u6cd5\u6700\u4f73\u5b9e\u8df5"),(0,a.kt)("p",null,"\u6211\u4eec\u5168\u9762\u4f53\u9a8c\u540e\u548c\u719f\u6089\u4e1a\u52a1\u4ee3\u7801\u540e\u68b3\u7406\u51fa\u4e00\u7cfb\u5217 Taro3 \u5199\u6cd5\u7684\u6700\u4f73\u5b9e\u8df5\uff1a"))}m.isMDXComponent=!0}}]);