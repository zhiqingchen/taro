(window.webpackJsonp=window.webpackJsonp||[]).push([[149],{1802:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var b=a.a.createContext({}),p=function(e){var t=a.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},O=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,b=s(e,["components","mdxType","originalType","parentName"]),l=p(r),O=n,m=l["".concat(o,".").concat(O)]||l[O]||u[O]||c;return r?a.a.createElement(m,i(i({ref:t},b),{},{components:r})):a.a.createElement(m,i({ref:t},b))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,o=new Array(c);o[0]=O;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var b=2;b<c;b++)o[b]=r[b];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}O.displayName="MDXCreateElement"},211:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return b})),r.d(t,"default",(function(){return l}));var n=r(3),a=r(7),c=(r(0),r(1802)),o=["components"],i={title:"Taro.createIntersectionObserver(Object component, Object options)",sidebar_label:"createIntersectionObserver"},s={unversionedId:"apis/interface/wxml/createIntersectionObserver",id:"version-1.x/apis/interface/wxml/createIntersectionObserver",isDocsHomePage:!1,title:"Taro.createIntersectionObserver(Object component, Object options)",description:"\u4f7f\u7528\u65b9\u5f0f\u540c\xa0wx.createIntersectionObserver\u3002",source:"@site/versioned_docs/version-1.x/apis/interface/wxml/createIntersectionObserver.md",slug:"/apis/interface/wxml/createIntersectionObserver",permalink:"/taro/docs/1.x/apis/interface/wxml/createIntersectionObserver",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-1.x/apis/interface/wxml/createIntersectionObserver.md",version:"1.x",sidebar_label:"createIntersectionObserver"},b=[{value:"API\u652f\u6301\u5ea6",id:"api\u652f\u6301\u5ea6",children:[]}],p={rightToc:b};function l(e){var t=e.components,r=Object(a.a)(e,o);return Object(c.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"\u4f7f\u7528\u65b9\u5f0f\u540c\xa0",Object(c.b)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/wxml/wx.createIntersectionObserver.html"},Object(c.b)("inlineCode",{parentName:"a"},"wx.createIntersectionObserver")),"\u3002"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"\u793a\u4f8b\u4ee3\u7801\uff1a")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx"},"import\xa0Taro\xa0from\xa0'@tarojs/taro'\n\nconst\xa0observer\xa0=\xa0Taro.createIntersectionObserver(this,\xa0{\xa0thresholds:\xa0[0],\xa0observeAll:\xa0true\xa0})\n")),Object(c.b)("h2",{id:"api\u652f\u6301\u5ea6"},"API\u652f\u6301\u5ea6"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:"center"},"\xa0API\xa0"),Object(c.b)("th",{parentName:"tr",align:"center"},"\xa0\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\xa0"),Object(c.b)("th",{parentName:"tr",align:"center"},"\xa0H5\xa0"),Object(c.b)("th",{parentName:"tr",align:"center"},"\xa0ReactNative\xa0"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"\xa0Taro.createIntersectionObserver\xa0"),Object(c.b)("td",{parentName:"tr",align:"center"},"\xa0\u2714\ufe0f\xa0"),Object(c.b)("td",{parentName:"tr",align:"center"},"\xa0\xa0"),Object(c.b)("td",{parentName:"tr",align:"center"},"\xa0\xa0")))))}l.isMDXComponent=!0}}]);