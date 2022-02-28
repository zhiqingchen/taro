"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[89158],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return k}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),s=u(n),k=a,b=s["".concat(i,".").concat(k)]||s[k]||p[k]||l;return n?r.createElement(b,o(o({ref:t},d),{},{components:n})):r.createElement(b,o({ref:t},d))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=s;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},56709:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return u},toc:function(){return d},default:function(){return s}});var r=n(83117),a=n(80102),l=(n(67294),n(3905)),o=["components"],c={title:"Taro.onBLEConnectionStateChange(callback)",sidebar_label:"onBLEConnectionStateChange"},i=void 0,u={unversionedId:"apis/device/ble/onBLEConnectionStateChange",id:"version-2.x/apis/device/ble/onBLEConnectionStateChange",title:"Taro.onBLEConnectionStateChange(callback)",description:"\u76d1\u542c\u4f4e\u529f\u8017\u84dd\u7259\u8fde\u63a5\u72b6\u6001\u7684\u6539\u53d8\u4e8b\u4ef6\u3002\u5305\u62ec\u5f00\u53d1\u8005\u4e3b\u52a8\u8fde\u63a5\u6216\u65ad\u5f00\u8fde\u63a5\uff0c\u8bbe\u5907\u4e22\u5931\uff0c\u8fde\u63a5\u5f02\u5e38\u65ad\u5f00\u7b49\u7b49",source:"@site/versioned_docs/version-2.x/apis/device/ble/onBLEConnectionStateChange.md",sourceDirName:"apis/device/ble",slug:"/apis/device/ble/onBLEConnectionStateChange",permalink:"/taro/docs/2.x/apis/device/ble/onBLEConnectionStateChange",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-2.x/apis/device/ble/onBLEConnectionStateChange.md",tags:[],version:"2.x",frontMatter:{title:"Taro.onBLEConnectionStateChange(callback)",sidebar_label:"onBLEConnectionStateChange"},sidebar:"version-2.x/API",previous:{title:"readBLECharacteristicValue",permalink:"/taro/docs/2.x/apis/device/ble/readBLECharacteristicValue"},next:{title:"onBLECharacteristicValueChange",permalink:"/taro/docs/2.x/apis/device/ble/onBLECharacteristicValueChange"}},d=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[],level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"CallbackResult",id:"callbackresult",children:[],level:3},{value:"Callback",id:"callback",children:[],level:3}],level:2},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[],level:2},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[],level:2}],p={toc:d};function s(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u76d1\u542c\u4f4e\u529f\u8017\u84dd\u7259\u8fde\u63a5\u72b6\u6001\u7684\u6539\u53d8\u4e8b\u4ef6\u3002\u5305\u62ec\u5f00\u53d1\u8005\u4e3b\u52a8\u8fde\u63a5\u6216\u65ad\u5f00\u8fde\u63a5\uff0c\u8bbe\u5907\u4e22\u5931\uff0c\u8fde\u63a5\u5f02\u5e38\u65ad\u5f00\u7b49\u7b49"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-ble/wx.onBLEConnectionStateChange.html"},"\u53c2\u8003\u6587\u6863"))),(0,l.kt)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"(callback: Callback) => void\n")),(0,l.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,l.kt)("h3",{id:"callbackresult"},"CallbackResult"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"\u53c2\u6570"),(0,l.kt)("th",null,"\u7c7b\u578b"),(0,l.kt)("th",null,"\u8bf4\u660e"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"connected"),(0,l.kt)("td",null,(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",null,"\u662f\u5426\u5904\u4e8e\u5df2\u8fde\u63a5\u72b6\u6001")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"deviceId"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",null,"\u84dd\u7259\u8bbe\u5907ID")))),(0,l.kt)("h3",{id:"callback"},"Callback"),(0,l.kt)("p",null,"\u4f4e\u529f\u8017\u84dd\u7259\u8fde\u63a5\u72b6\u6001\u7684\u6539\u53d8\u4e8b\u4ef6\u7684\u56de\u8c03\u51fd\u6570"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"(result: CallbackResult) => void\n")),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"\u53c2\u6570"),(0,l.kt)("th",null,"\u7c7b\u578b"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"result"),(0,l.kt)("td",null,(0,l.kt)("code",null,"CallbackResult"))))),(0,l.kt)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"Taro.onBLEConnectionStateChange(function (res) {\n  // \u8be5\u65b9\u6cd5\u56de\u8c03\u4e2d\u53ef\u4ee5\u7528\u4e8e\u5904\u7406\u8fde\u63a5\u610f\u5916\u65ad\u5f00\u7b49\u5f02\u5e38\u60c5\u51b5\n  console.log(`device ${res.deviceId} state has changed, connected: ${res.connected}`)\n})\n")),(0,l.kt)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"API"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,l.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,l.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"Taro.onBLEConnectionStateChange"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"})))))}s.isMDXComponent=!0}}]);