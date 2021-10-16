(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[11626],{22122:function(e,r,t){"use strict";function n(){return(n=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}t.d(r,{Z:function(){return n}})},19756:function(e,r,t){"use strict";function n(e,r){if(null==e)return{};var t,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}t.d(r,{Z:function(){return n}})},3905:function(e,r,t){"use strict";t.d(r,{Zo:function(){return u},kt:function(){return d}});var n=t(67294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=n.createContext({}),l=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},u=function(e){var r=l(e.components);return n.createElement(s.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),f=l(t),d=i,m=f["".concat(s,".").concat(d)]||f[d]||p[d]||a;return t?n.createElement(m,c(c({ref:r},u),{},{components:t})):n.createElement(m,c({ref:r},u))}));function d(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var a=t.length,c=new Array(a);c[0]=f;var o={};for(var s in r)hasOwnProperty.call(r,s)&&(o[s]=r[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,c[1]=o;for(var l=2;l<a;l++)c[l]=t[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},58499:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return c},metadata:function(){return o},toc:function(){return s},default:function(){return u}});var n=t(22122),i=t(19756),a=(t(67294),t(3905)),c={title:"Taro.writeBLECharacteristicValue(OBJECT)",sidebar_label:"writeBLECharacteristicValue"},o={unversionedId:"apis/device/ble/writeBLECharacteristicValue",id:"version-1.x/apis/device/ble/writeBLECharacteristicValue",isDocsHomePage:!1,title:"Taro.writeBLECharacteristicValue(OBJECT)",description:"\u4f7f\u7528\u65b9\u5f0f\u540c wx.writeBLECharacteristicValue\uff0c\u652f\u6301 Promise \u5316\u4f7f\u7528\u3002",source:"@site/versioned_docs/version-1.x/apis/device/ble/writeBLECharacteristicValue.md",sourceDirName:"apis/device/ble",slug:"/apis/device/ble/writeBLECharacteristicValue",permalink:"/taro/docs/1.x/apis/device/ble/writeBLECharacteristicValue",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-1.x/apis/device/ble/writeBLECharacteristicValue.md",version:"1.x",sidebar_label:"writeBLECharacteristicValue",frontMatter:{title:"Taro.writeBLECharacteristicValue(OBJECT)",sidebar_label:"writeBLECharacteristicValue"},sidebar:"version-1.x/API",previous:{title:"Taro.readBLECharacteristicValue(OBJECT)",permalink:"/taro/docs/1.x/apis/device/ble/readBLECharacteristicValue"},next:{title:"Taro.getScreenBrightness(OBJECT)",permalink:"/taro/docs/1.x/apis/device/brightness/getScreenBrightness"}},s=[{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]}],l={toc:s};function u(e){var r=e.components,t=(0,i.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u4f7f\u7528\u65b9\u5f0f\u540c ",(0,a.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth/wx.writeBLECharacteristicValue.html"},(0,a.kt)("inlineCode",{parentName:"a"},"wx.writeBLECharacteristicValue")),"\uff0c\u652f\u6301 ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise")," \u5316\u4f7f\u7528\u3002"),(0,a.kt)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import Taro from '@tarojs/taro'\n\nTaro.writeBLECharacteristicValue(params).then(...)\n")))}u.isMDXComponent=!0}}]);