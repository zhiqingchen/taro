(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[29435],{22122:function(e,r,t){"use strict";function a(){return(a=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}t.d(r,{Z:function(){return a}})},19756:function(e,r,t){"use strict";function a(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}t.d(r,{Z:function(){return a}})},3905:function(e,r,t){"use strict";t.d(r,{Zo:function(){return c},kt:function(){return y}});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function f(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=a.createContext({}),u=function(e){var r=a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=u(e.components);return a.createElement(s.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},l=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=f(e,["components","mdxType","originalType","parentName"]),l=u(t),y=n,d=l["".concat(s,".").concat(y)]||l[y]||p[y]||o;return t?a.createElement(d,i(i({ref:r},c),{},{components:t})):a.createElement(d,i({ref:r},c))}));function y(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=l;var f={};for(var s in r)hasOwnProperty.call(r,s)&&(f[s]=r[s]);f.originalType=e,f.mdxType="string"==typeof e?e:n,i[1]=f;for(var u=2;u<o;u++)i[u]=t[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}l.displayName="MDXCreateElement"},11453:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return i},metadata:function(){return f},toc:function(){return s},default:function(){return c}});var a=t(22122),n=t(19756),o=(t(67294),t(3905)),i={title:"arrayBufferToBase64",sidebar_label:"arrayBufferToBase64"},f={unversionedId:"apis/extend-apis/arrayBufferToBase64",id:"version-1.x/apis/extend-apis/arrayBufferToBase64",isDocsHomePage:!1,title:"arrayBufferToBase64",description:"Taro.arrayBufferToBase64(arrayBuffer)",source:"@site/versioned_docs/version-1.x/apis/extend-apis/arrayBufferToBase64.md",sourceDirName:"apis/extend-apis",slug:"/apis/extend-apis/arrayBufferToBase64",permalink:"/taro/docs/1.x/apis/extend-apis/arrayBufferToBase64",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-1.x/apis/extend-apis/arrayBufferToBase64.md",version:"1.x",sidebar_label:"arrayBufferToBase64",frontMatter:{title:"arrayBufferToBase64",sidebar_label:"arrayBufferToBase64"},sidebar:"version-1.x/API",previous:{title:"Taro.stopWifi(OBJECT)",permalink:"/taro/docs/1.x/apis/device/wifi/stopWifi"},next:{title:"base64ToArrayBuffer",permalink:"/taro/docs/1.x/apis/extend-apis/base64ToArrayBuffer"}},s=[{value:"Taro.arrayBufferToBase64(arrayBuffer)",id:"taroarraybuffertobase64arraybuffer",children:[]}],u={toc:s};function c(e){var r=e.components,t=(0,n.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"taroarraybuffertobase64arraybuffer"},"Taro.arrayBufferToBase64(arrayBuffer)"),(0,o.kt)("p",null,"\u5c06 ArrayBuffer \u6570\u636e\u8f6c\u6210 Base64 \u5b57\u7b26\u4e32\u3002(\u5c0f\u7a0b\u5e8f\u7aef\u57fa\u7840\u5e93 1.1.0 \u5f00\u59cb\u652f\u6301\uff0c\u4f4e\u7248\u672c\u9700\u505a\u517c\u5bb9\u5904\u7406)"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u793a\u4f8b\u4ee3\u7801\uff1a")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import Taro from '@tarojs/taro'\n\nconst arrayBuffer = new Uint8Array([11, 22, 33])\nconst base64 = Taro.arrayBufferToBase64(arrayBuffer)\n")))}c.isMDXComponent=!0}}]);