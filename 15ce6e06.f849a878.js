(window.webpackJsonp=window.webpackJsonp||[]).push([[158],{1802:function(e,r,t){"use strict";t.d(r,"a",(function(){return l})),t.d(r,"b",(function(){return d}));var n=t(0),a=t.n(n);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function b(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),s=function(e){var r=a.a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=s(e.components);return a.a.createElement(p.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},f=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=b(e,["components","mdxType","originalType","parentName"]),l=s(t),f=n,d=l["".concat(c,".").concat(f)]||l[f]||u[f]||o;return t?a.a.createElement(d,i(i({ref:r},p),{},{components:t})):a.a.createElement(d,i({ref:r},p))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,c=new Array(o);c[0]=f;var i={};for(var b in r)hasOwnProperty.call(r,b)&&(i[b]=r[b]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var p=2;p<o;p++)c[p]=t[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},220:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return i})),t.d(r,"metadata",(function(){return b})),t.d(r,"rightToc",(function(){return p})),t.d(r,"default",(function(){return l}));var n=t(3),a=t(7),o=(t(0),t(1802)),c=["components"],i={title:"base64ToArrayBuffer",sidebar_label:"base64ToArrayBuffer"},b={unversionedId:"apis/extend-apis/base64ToArrayBuffer",id:"version-1.x/apis/extend-apis/base64ToArrayBuffer",isDocsHomePage:!1,title:"base64ToArrayBuffer",description:"\u5c06 Base64 \u5b57\u7b26\u4e32\u8f6c\u6210 ArrayBuffer \u6570\u636e\u3002(\u5c0f\u7a0b\u5e8f\u7aef\u57fa\u7840\u5e93 1.1.0 \u5f00\u59cb\u652f\u6301\uff0c\u4f4e\u7248\u672c\u9700\u505a\u517c\u5bb9\u5904\u7406)",source:"@site/versioned_docs/version-1.x/apis/extend-apis/base64ToArrayBuffer.md",slug:"/apis/extend-apis/base64ToArrayBuffer",permalink:"/taro/docs/1.x/apis/extend-apis/base64ToArrayBuffer",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-1.x/apis/extend-apis/base64ToArrayBuffer.md",version:"1.x",sidebar_label:"base64ToArrayBuffer",sidebar:"version-1.x/API",previous:{title:"arrayBufferToBase64",permalink:"/taro/docs/1.x/apis/extend-apis/arrayBufferToBase64"},next:{title:"Taro.getFileInfo(OBJECT)",permalink:"/taro/docs/1.x/apis/files/getFileInfo"}},p=[],s={rightToc:p};function l(e){var r=e.components,t=Object(a.a)(e,c);return Object(o.b)("wrapper",Object(n.a)({},s,t,{components:r,mdxType:"MDXLayout"}),Object(o.b)("p",null,"\u5c06 Base64 \u5b57\u7b26\u4e32\u8f6c\u6210 ArrayBuffer \u6570\u636e\u3002(\u5c0f\u7a0b\u5e8f\u7aef\u57fa\u7840\u5e93 1.1.0 \u5f00\u59cb\u652f\u6301\uff0c\u4f4e\u7248\u672c\u9700\u505a\u517c\u5bb9\u5904\u7406)"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"\u793a\u4f8b\u4ee3\u7801\uff1a")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"import Taro from '@tarojs/taro'\n\nconst base64 = 'CxYh'\nconst arrayBuffer = Taro.base64ToArrayBuffer(base64)\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"API \u652f\u6301\u5ea6")),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:"center"},"API"),Object(o.b)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(o.b)("th",{parentName:"tr",align:"center"},"H5"),Object(o.b)("th",{parentName:"tr",align:"center"},"React Native"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"center"},"Taro.arrayBufferToBase64"),Object(o.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(o.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(o.b)("td",{parentName:"tr",align:"center"})),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"center"},"Taro.base64ToArrayBuffer"),Object(o.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(o.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(o.b)("td",{parentName:"tr",align:"center"})))))}l.isMDXComponent=!0}}]);