"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[80260],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=u(n),h=r,f=d["".concat(l,".").concat(h)]||d[h]||s[h]||a;return n?o.createElement(f,i(i({ref:t},p),{},{components:n})):o.createElement(f,i({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},75823:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var o=n(83117),r=n(80102),a=(n(67294),n(3905)),i=["components"],c={title:"Taro.onBluetoothAdapterStateChange(CALLBACK)",sidebar_label:"onBluetoothAdapterStateChange"},l=void 0,u={unversionedId:"apis/device/bluetooth/onBluetoothAdapterStateChange",id:"version-1.x/apis/device/bluetooth/onBluetoothAdapterStateChange",title:"Taro.onBluetoothAdapterStateChange(CALLBACK)",description:"\u4f7f\u7528\u65b9\u5f0f\u540c wx.onBluetoothAdapterStateChange\u3002",source:"@site/versioned_docs/version-1.x/apis/device/bluetooth/onBluetoothAdapterStateChange.md",sourceDirName:"apis/device/bluetooth",slug:"/apis/device/bluetooth/onBluetoothAdapterStateChange",permalink:"/taro/docs/1.x/apis/device/bluetooth/onBluetoothAdapterStateChange",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-1.x/apis/device/bluetooth/onBluetoothAdapterStateChange.md",tags:[],version:"1.x",frontMatter:{title:"Taro.onBluetoothAdapterStateChange(CALLBACK)",sidebar_label:"onBluetoothAdapterStateChange"},sidebar:"version-1.x/API",previous:{title:"getConnectedBluetoothDevices",permalink:"/taro/docs/1.x/apis/device/bluetooth/getConnectedBluetoothDevices"},next:{title:"onBluetoothDeviceFound",permalink:"/taro/docs/1.x/apis/device/bluetooth/onBluetoothDeviceFound"}},p=[{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[],level:2}],s={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u4f7f\u7528\u65b9\u5f0f\u540c ",(0,a.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/wx.onBluetoothAdapterStateChange.html"},(0,a.kt)("inlineCode",{parentName:"a"},"wx.onBluetoothAdapterStateChange")),"\u3002"),(0,a.kt)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import Taro from '@tarojs/taro'\n\nTaro.onBluetoothAdapterStateChange(res => {\n  console.log(`adapterState changed, now is`, res)\n})\n")))}d.isMDXComponent=!0}}]);