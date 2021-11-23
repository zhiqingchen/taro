"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[14396],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=s(r),d=a,h=f["".concat(l,".").concat(d)]||f[d]||p[d]||i;return r?n.createElement(h,o(o({ref:t},u),{},{components:r})):n.createElement(h,o({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},46511:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return f}});var n=r(83117),a=r(80102),i=(r(67294),r(3905)),o=["components"],c={title:"Taro.notifyBLECharacteristicValueChange(OBJECT)",sidebar_label:"notifyBLECharacteristicValueChange"},l=void 0,s={unversionedId:"apis/device/ble/notifyBLECharacteristicValueChange",id:"version-1.x/apis/device/ble/notifyBLECharacteristicValueChange",isDocsHomePage:!1,title:"Taro.notifyBLECharacteristicValueChange(OBJECT)",description:"\u4f7f\u7528\u65b9\u5f0f\u540c wx.notifyBLECharacteristicValueChange\uff0c\u652f\u6301 Promise \u5316\u4f7f\u7528\u3002",source:"@site/versioned_docs/version-1.x/apis/device/ble/notifyBLECharacteristicValueChange.md",sourceDirName:"apis/device/ble",slug:"/apis/device/ble/notifyBLECharacteristicValueChange",permalink:"/taro/docs/1.x/apis/device/ble/notifyBLECharacteristicValueChange",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-1.x/apis/device/ble/notifyBLECharacteristicValueChange.md",tags:[],version:"1.x",frontMatter:{title:"Taro.notifyBLECharacteristicValueChange(OBJECT)",sidebar_label:"notifyBLECharacteristicValueChange"},sidebar:"version-1.x/API",previous:{title:"getBLEDeviceServices",permalink:"/taro/docs/1.x/apis/device/ble/getBLEDeviceServices"},next:{title:"onBLECharacteristicValueChange",permalink:"/taro/docs/1.x/apis/device/ble/onBLECharacteristicValueChange"}},u=[{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[],level:2}],p={toc:u};function f(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u4f7f\u7528\u65b9\u5f0f\u540c ",(0,i.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth/wx.notifyBLECharacteristicValueChange.html"},(0,i.kt)("inlineCode",{parentName:"a"},"wx.notifyBLECharacteristicValueChange")),"\uff0c\u652f\u6301 ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise")," \u5316\u4f7f\u7528\u3002"),(0,i.kt)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"import Taro from '@tarojs/taro'\n\nTaro.notifyBLECharacteristicValueChange(params).then(...)\n")))}f.isMDXComponent=!0}}]);