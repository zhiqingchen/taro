(window.webpackJsonp=window.webpackJsonp||[]).push([[162],{1763:function(e,t,r){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}r.d(t,"a",(function(){return n}))},1764:function(e,t,r){"use strict";function n(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}r.d(t,"a",(function(){return n}))},1765:function(e,t,r){"use strict";r.d(t,"a",(function(){return f})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},f=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),f=p(r),b=n,m=f["".concat(c,".").concat(b)]||f[b]||s[b]||a;return r?o.a.createElement(m,i(i({ref:t},l),{},{components:r})):o.a.createElement(m,i({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=b;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var l=2;l<a;l++)c[l]=r[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},222:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return u})),r.d(t,"default",(function(){return p}));var n=r(1763),o=r(1764),a=(r(0),r(1765)),c={slug:"2020-04-27-taro-vs-jd",title:"\u4eac\u4e1c\u5c0f\u7a0b\u5e8f Taro \u5f00\u53d1\u5bf9\u6bd4\u539f\u751f\u5f00\u53d1\u6d4b\u8bc4",author:"JJ",author_url:"https://github.com/Chen-jj",author_image_url:"https://storage.jd.com/cjj-pub-images/11807297.png"},i={permalink:"/taro/blog/2020-04-27-taro-vs-jd",editUrl:"https://github.com/nervjs/taro/edit/blog/blog/2020-04-27-taro-vs-jd.md",source:"@site/blog/2020-04-27-taro-vs-jd.md",description:"Taro \u5df2\u7ecf 100% \u652f\u6301\u8f6c\u6362\u4eac\u4e1c\u5c0f\u7a0b\u5e8f\uff0c\u53d7\u5230\u4e86\u5f88\u591a\u540c\u5b66\u7684\u5173\u6ce8\u3002\u5f53\u4e2d\u6709\u6b22\u547c\u96c0\u8dc3\u7684\u58f0\u97f3\uff1a\u201c\u4e00\u952e\u8f6c\u6362\u4e3a\u4eac\u4e1c\u5c0f\u7a0b\u5e8f\uff0c\u7ec8\u4e8e\u53ef\u4ee5\u51c6\u65f6\u4e0b\u73ed\u5566\u201d\u3002\u4e5f\u6709\u5bf9 Taro \u4e0d\u592a\u4e86\u89e3\u7684\u540c\u5b66\u63d0\u51fa\u4e86\u4e00\u4e9b\u7591\u95ee\uff1a\u201c\u8f6c\u6362\u7684\u6548\u679c\u5982\u4f55\uff1f\u201d\u3001\u201c\u8f6c\u6362\u540e\u4ee3\u7801\u7684\u6027\u80fd\u662f\u5426\u8fbe\u6807\uff1f\u201d \u7b49\u7b49\u3002",date:"2020-04-27T00:00:00.000Z",tags:[],title:"\u4eac\u4e1c\u5c0f\u7a0b\u5e8f Taro \u5f00\u53d1\u5bf9\u6bd4\u539f\u751f\u5f00\u53d1\u6d4b\u8bc4",readingTime:2.015,truncated:!0,prevItem:{title:"Taro 3.0 RC\uff1aReact/Vue/Nerv \u4efb\u4f60\u9009",permalink:"/taro/blog/2020-05-26-taro-3-rc"},nextItem:{title:"\u4f7f\u7528 Taro \u5feb\u901f\u5f00\u53d1\u4eac\u4e1c\u5c0f\u7a0b\u5e8f",permalink:"/taro/blog/2020-04-27-taro-build-jd"}},u=[],l={rightToc:u};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("img",Object(n.a)({parentName:"p"},{src:"https://img10.360buyimg.com/ling/jfs/t1/112290/35/2116/67015/5e9eee51E11ea7938/886d7ddc2e9e6026.png",alt:null}))),Object(a.b)("p",null,"Taro \u5df2\u7ecf 100% \u652f\u6301\u8f6c\u6362",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://taro.jd.com/jdmp/index.html"}),"\u4eac\u4e1c\u5c0f\u7a0b\u5e8f"),"\uff0c\u53d7\u5230\u4e86\u5f88\u591a\u540c\u5b66\u7684\u5173\u6ce8\u3002\u5f53\u4e2d\u6709\u6b22\u547c\u96c0\u8dc3\u7684\u58f0\u97f3\uff1a\u201c\u4e00\u952e\u8f6c\u6362\u4e3a\u4eac\u4e1c\u5c0f\u7a0b\u5e8f\uff0c\u7ec8\u4e8e\u53ef\u4ee5\u51c6\u65f6\u4e0b\u73ed\u5566\u201d\u3002\u4e5f\u6709\u5bf9 Taro \u4e0d\u592a\u4e86\u89e3\u7684\u540c\u5b66\u63d0\u51fa\u4e86\u4e00\u4e9b\u7591\u95ee\uff1a\u201c\u8f6c\u6362\u7684\u6548\u679c\u5982\u4f55\uff1f\u201d\u3001\u201c\u8f6c\u6362\u540e\u4ee3\u7801\u7684\u6027\u80fd\u662f\u5426\u8fbe\u6807\uff1f\u201d \u7b49\u7b49\u3002"),Object(a.b)("p",null,"\u9488\u5bf9\u5404\u79cd\u7591\u95ee\uff0c\u6211\u4eec\u4ece\u6027\u80fd\u4e0e\u5f00\u53d1\u4f53\u9a8c\u7684\u89d2\u5ea6\u5207\u5165\uff0c\u628a\u4eac\u4e1c\u5c0f\u7a0b\u5e8f\u539f\u751f\u5f00\u53d1\u4e0e Taro \u5f00\u53d1\u8fdb\u884c\u4e86\u4e00\u756a\u5bf9\u6bd4\u3002"))}p.isMDXComponent=!0}}]);