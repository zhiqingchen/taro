"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[95556],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return k}});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=r.createContext({}),s=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,c=e.originalType,o=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=s(n),k=l,v=p["".concat(o,".").concat(k)]||p[k]||d[k]||c;return n?r.createElement(v,i(i({ref:t},u),{},{components:n})):r.createElement(v,i({ref:t},u))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var c=n.length,i=new Array(c);i[0]=p;var a={};for(var o in t)hasOwnProperty.call(t,o)&&(a[o]=t[o]);a.originalType=e,a.mdxType="string"==typeof e?e:l,i[1]=a;for(var s=2;s<c;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},51958:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return o},metadata:function(){return s},toc:function(){return u},default:function(){return p}});var r=n(83117),l=n(80102),c=(n(67294),n(3905)),i=["components"],a={title:"Taro.getBLEDeviceServices(option)",sidebar_label:"getBLEDeviceServices"},o=void 0,s={unversionedId:"apis/device/ble/getBLEDeviceServices",id:"apis/device/ble/getBLEDeviceServices",isDocsHomePage:!1,title:"Taro.getBLEDeviceServices(option)",description:"Gets all services of a Bluetooth device.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/apis/device/ble/getBLEDeviceServices.md",sourceDirName:"apis/device/ble",slug:"/apis/device/ble/getBLEDeviceServices",permalink:"/taro/en/docs/next/apis/device/ble/getBLEDeviceServices",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/apis/device/ble/getBLEDeviceServices.md",tags:[],version:"current",frontMatter:{title:"Taro.getBLEDeviceServices(option)",sidebar_label:"getBLEDeviceServices"},sidebar:"API",previous:{title:"notifyBLECharacteristicValueChange",permalink:"/taro/en/docs/next/apis/device/ble/notifyBLECharacteristicValueChange"},next:{title:"getBLEDeviceCharacteristics",permalink:"/taro/en/docs/next/apis/device/ble/getBLEDeviceCharacteristics"}},u=[{value:"Type",id:"type",children:[],level:2},{value:"Parameters",id:"parameters",children:[{value:"Option",id:"option",children:[],level:3},{value:"SuccessCallbackResult",id:"successcallbackresult",children:[],level:3},{value:"BLEService",id:"bleservice",children:[],level:3}],level:2},{value:"Sample Code",id:"sample-code",children:[],level:2},{value:"API Support",id:"api-support",children:[],level:2}],d={toc:u};function p(e){var t=e.components,n=(0,l.Z)(e,i);return(0,c.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"Gets all services of a Bluetooth device."),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},(0,c.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/device/bluetooth-ble/wx.getBLEDeviceServices.html"},"Reference"))),(0,c.kt)("h2",{id:"type"},"Type"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-tsx"},"(option: Option) => Promise<SuccessCallbackResult>\n")),(0,c.kt)("h2",{id:"parameters"},"Parameters"),(0,c.kt)("h3",{id:"option"},"Option"),(0,c.kt)("table",null,(0,c.kt)("thead",null,(0,c.kt)("tr",null,(0,c.kt)("th",null,"Property"),(0,c.kt)("th",null,"Type"),(0,c.kt)("th",{style:{textAlign:"center"}},"Required"),(0,c.kt)("th",null,"Description"))),(0,c.kt)("tbody",null,(0,c.kt)("tr",null,(0,c.kt)("td",null,"deviceId"),(0,c.kt)("td",null,(0,c.kt)("code",null,"string")),(0,c.kt)("td",{style:{textAlign:"center"}},"Yes"),(0,c.kt)("td",null,"The Bluetooth device ID")),(0,c.kt)("tr",null,(0,c.kt)("td",null,"complete"),(0,c.kt)("td",null,(0,c.kt)("code",null,"(res: any) => void")),(0,c.kt)("td",{style:{textAlign:"center"}},"No"),(0,c.kt)("td",null,"The callback function used when the API call completed (always executed whether the call succeeds or fails)")),(0,c.kt)("tr",null,(0,c.kt)("td",null,"fail"),(0,c.kt)("td",null,(0,c.kt)("code",null,"(res: any) => void")),(0,c.kt)("td",{style:{textAlign:"center"}},"No"),(0,c.kt)("td",null,"The callback function for a failed API call")),(0,c.kt)("tr",null,(0,c.kt)("td",null,"success"),(0,c.kt)("td",null,(0,c.kt)("code",null,"(res: Result) => void")),(0,c.kt)("td",{style:{textAlign:"center"}},"No"),(0,c.kt)("td",null,"The callback function for a successful API call")))),(0,c.kt)("h3",{id:"successcallbackresult"},"SuccessCallbackResult"),(0,c.kt)("table",null,(0,c.kt)("thead",null,(0,c.kt)("tr",null,(0,c.kt)("th",null,"Property"),(0,c.kt)("th",null,"Type"),(0,c.kt)("th",null,"Description"))),(0,c.kt)("tbody",null,(0,c.kt)("tr",null,(0,c.kt)("td",null,"services"),(0,c.kt)("td",null,(0,c.kt)("code",null,"BLEService[]")),(0,c.kt)("td",null,"The device service list")),(0,c.kt)("tr",null,(0,c.kt)("td",null,"errMsg"),(0,c.kt)("td",null,(0,c.kt)("code",null,"string")),(0,c.kt)("td",null,"success: ok\uff0cfail: error message")))),(0,c.kt)("h3",{id:"bleservice"},"BLEService"),(0,c.kt)("p",null,"res.services is composed as follows"),(0,c.kt)("table",null,(0,c.kt)("thead",null,(0,c.kt)("tr",null,(0,c.kt)("th",null,"Property"),(0,c.kt)("th",null,"Type"),(0,c.kt)("th",null,"Description"))),(0,c.kt)("tbody",null,(0,c.kt)("tr",null,(0,c.kt)("td",null,"isPrimary"),(0,c.kt)("td",null,(0,c.kt)("code",null,"boolean")),(0,c.kt)("td",null,"Indicates whether this service is the primary service")),(0,c.kt)("tr",null,(0,c.kt)("td",null,"uuid"),(0,c.kt)("td",null,(0,c.kt)("code",null,"string")),(0,c.kt)("td",null,"The Bluetooth device service UUID")))),(0,c.kt)("h2",{id:"sample-code"},"Sample Code"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-tsx"},"Taro.getBLEDeviceServices({\n  // This deviceId must have been used to connect the appropriate device via createBLEConnection.\n  deviceId,\n  success: function (res) {\n    console.log('device services:', res.services)\n  }\n})\n")),(0,c.kt)("h2",{id:"api-support"},"API Support"),(0,c.kt)("table",null,(0,c.kt)("thead",{parentName:"table"},(0,c.kt)("tr",{parentName:"thead"},(0,c.kt)("th",{parentName:"tr",align:"center"},"API"),(0,c.kt)("th",{parentName:"tr",align:"center"},"WeChat Mini-Program"),(0,c.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,c.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,c.kt)("tbody",{parentName:"table"},(0,c.kt)("tr",{parentName:"tbody"},(0,c.kt)("td",{parentName:"tr",align:"center"},"Taro.getBLEDeviceServices"),(0,c.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,c.kt)("td",{parentName:"tr",align:"center"}),(0,c.kt)("td",{parentName:"tr",align:"center"})))))}p.isMDXComponent=!0}}]);