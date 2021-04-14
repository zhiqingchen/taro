(window.webpackJsonp=window.webpackJsonp||[]).push([[1401],{1466:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return o})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return l}));var n=r(1763),i=r(1764),c=(r(0),r(1765)),a={title:"Taro.getBLEDeviceCharacteristics(OBJECT)",sidebar_label:"getBLEDeviceCharacteristics"},o={unversionedId:"apis/device/ble/getBLEDeviceCharacteristics",id:"version-1.x/apis/device/ble/getBLEDeviceCharacteristics",isDocsHomePage:!1,title:"Taro.getBLEDeviceCharacteristics(OBJECT)",description:"\u4f7f\u7528\u65b9\u5f0f\u540c wx.getBLEDeviceCharacteristics\uff0c\u652f\u6301 Promise \u5316\u4f7f\u7528\u3002",source:"@site/versioned_docs/version-1.x/apis/device/ble/getBLEDeviceCharacteristics.md",slug:"/apis/device/ble/getBLEDeviceCharacteristics",permalink:"/taro/docs/1.x/apis/device/ble/getBLEDeviceCharacteristics",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-1.x/apis/device/ble/getBLEDeviceCharacteristics.md",version:"1.x",sidebar_label:"getBLEDeviceCharacteristics",sidebar:"version-1.x/API",previous:{title:"Taro.createBLEConnection(OBJECT)",permalink:"/taro/docs/1.x/apis/device/ble/createBLEConnection"},next:{title:"Taro.getBLEDeviceServices(OBJECT)",permalink:"/taro/docs/1.x/apis/device/ble/getBLEDeviceServices"}},s=[{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]}],p={rightToc:s};function l(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"\u4f7f\u7528\u65b9\u5f0f\u540c ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth/wx.getBLEDeviceCharacteristics.html"}),Object(c.b)("inlineCode",{parentName:"a"},"wx.getBLEDeviceCharacteristics")),"\uff0c\u652f\u6301 ",Object(c.b)("inlineCode",{parentName:"p"},"Promise")," \u5316\u4f7f\u7528\u3002"),Object(c.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"import Taro from '@tarojs/taro'\n\nTaro.getBLEDeviceCharacteristics(params).then(...)\n")))}l.isMDXComponent=!0},1763:function(e,t,r){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}r.d(t,"a",(function(){return n}))},1764:function(e,t,r){"use strict";function n(e,t){if(null==e)return{};var r,n,i={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}r.d(t,"a",(function(){return n}))},1765:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return d}));var n=r(0),i=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=i.a.createContext({}),l=function(e){var t=i.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=l(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},v={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,a=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),b=n,d=u["".concat(a,".").concat(b)]||u[b]||v[b]||c;return r?i.a.createElement(d,o(o({ref:t},p),{},{components:r})):i.a.createElement(d,o({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,a=new Array(c);a[0]=b;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,a[1]=o;for(var p=2;p<c;p++)a[p]=r[p];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);