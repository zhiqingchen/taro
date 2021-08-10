(window.webpackJsonp=window.webpackJsonp||[]).push([[133],{1802:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),b=s(n),d=r,f=b["".concat(i,".").concat(d)]||b[d]||u[d]||o;return n?a.a.createElement(f,c(c({ref:t},l),{},{components:n})):a.a.createElement(f,c({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},195:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),o=(n(0),n(1802)),i=["components"],c={title:"RenderingContext",sidebar_label:"RenderingContext"},p={unversionedId:"apis/canvas/RenderingContext",id:"version-3.x/apis/canvas/RenderingContext",isDocsHomePage:!1,title:"RenderingContext",description:"Canvas \u7ed8\u56fe\u4e0a\u4e0b\u6587\u3002",source:"@site/versioned_docs/version-3.x/apis/canvas/RenderingContext.md",slug:"/apis/canvas/RenderingContext",permalink:"/taro/docs/apis/canvas/RenderingContext",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.x/apis/canvas/RenderingContext.md",version:"3.x",sidebar_label:"RenderingContext",sidebar:"version-3.x/API",previous:{title:"OffscreenCanvas",permalink:"/taro/docs/apis/canvas/OffscreenCanvas"},next:{title:"Taro.saveFile(option)",permalink:"/taro/docs/apis/files/saveFile"}},l=[{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],s={rightToc:l};function b(e){var t=e.components,n=Object(a.a)(e,i);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Canvas \u7ed8\u56fe\u4e0a\u4e0b\u6587\u3002"),Object(o.b)("hr",null),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u901a\u8fc7 Canvas.getContext('2d') \u63a5\u53e3\u53ef\u4ee5\u83b7\u53d6 CanvasRenderingContext2D \u5bf9\u8c61\uff0c\u5b9e\u73b0\u4e86 ",Object(o.b)("a",{parentName:"li",href:"https://www.w3.org/TR/2dcontext/"},"HTML Canvas 2D Context")," \u5b9a\u4e49\u7684\u5c5e\u6027\u3001\u65b9\u6cd5\u3002"),Object(o.b)("li",{parentName:"ul"},"\u901a\u8fc7 Canvas.getContext('webgl') \u6216 OffscreenCanvas.getContext('webgl') \u63a5\u53e3\u53ef\u4ee5\u83b7\u53d6 WebGLRenderingContext \u5bf9\u8c61\uff0c\u5b9e\u73b0\u4e86 ",Object(o.b)("a",{parentName:"li",href:"https://www.khronos.org/registry/webgl/specs/latest/1.0/"},"WebGL 1.0")," \u5b9a\u4e49\u7684\u6240\u6709\u5c5e\u6027\u3001\u65b9\u6cd5\u3001\u5e38\u91cf\u3002")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/canvas/RenderingContext.html"},"\u53c2\u8003\u6587\u6863"))),Object(o.b)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:"center"},"API"),Object(o.b)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(o.b)("th",{parentName:"tr",align:"center"},"H5"),Object(o.b)("th",{parentName:"tr",align:"center"},"React Native"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"center"},"RenderingContext"),Object(o.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(o.b)("td",{parentName:"tr",align:"center"}),Object(o.b)("td",{parentName:"tr",align:"center"})))))}b.isMDXComponent=!0}}]);