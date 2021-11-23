"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[68568],{3905:function(t,e,i){i.d(e,{Zo:function(){return s},kt:function(){return f}});var n=i(67294);function r(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function o(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function a(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?o(Object(i),!0).forEach((function(e){r(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function l(t,e){if(null==t)return{};var i,n,r=function(t,e){if(null==t)return{};var i,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)i=o[n],e.indexOf(i)>=0||(r[i]=t[i]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)i=o[n],e.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(t,i)&&(r[i]=t[i])}return r}var c=n.createContext({}),p=function(t){var e=n.useContext(c),i=e;return t&&(i="function"==typeof t?t(e):a(a({},e),t)),i},s=function(t){var e=p(t.components);return n.createElement(c.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var i=t.components,r=t.mdxType,o=t.originalType,c=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),d=p(i),f=r,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||o;return i?n.createElement(m,a(a({ref:e},s),{},{components:i})):n.createElement(m,a({ref:e},s))}));function f(t,e){var i=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=i.length,a=new Array(o);a[0]=d;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l.mdxType="string"==typeof t?t:r,a[1]=l;for(var p=2;p<o;p++)a[p]=i[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,i)}d.displayName="MDXCreateElement"},86478:function(t,e,i){i.r(e),i.d(e,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return s},default:function(){return d}});var n=i(83117),r=i(80102),o=(i(67294),i(3905)),a=["components"],l={title:"Taro.getWifiList(option)",sidebar_label:"getWifiList"},c=void 0,p={unversionedId:"apis/device/wifi/getWifiList",id:"version-2.x/apis/device/wifi/getWifiList",isDocsHomePage:!1,title:"Taro.getWifiList(option)",description:"\u8bf7\u6c42\u83b7\u53d6 Wi-Fi \u5217\u8868\u3002\u5728 onGetWifiList \u6ce8\u518c\u7684\u56de\u8c03\u4e2d\u8fd4\u56de wifiList \u6570\u636e\u3002 Android \u8c03\u7528\u524d\u9700\u8981 \u7528\u6237\u6388\u6743 scope.userLocation\u3002",source:"@site/versioned_docs/version-2.x/apis/device/wifi/getWifiList.md",sourceDirName:"apis/device/wifi",slug:"/apis/device/wifi/getWifiList",permalink:"/taro/docs/2.x/apis/device/wifi/getWifiList",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-2.x/apis/device/wifi/getWifiList.md",tags:[],version:"2.x",frontMatter:{title:"Taro.getWifiList(option)",sidebar_label:"getWifiList"},sidebar:"version-2.x/API",previous:{title:"offGetWifiList",permalink:"/taro/docs/2.x/apis/device/wifi/offGetWifiList"},next:{title:"getConnectedWifi",permalink:"/taro/docs/2.x/apis/device/wifi/getConnectedWifi"}},s=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[],level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Option",id:"option",children:[],level:3}],level:2},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[],level:2}],u={toc:s};function d(t){var e=t.components,i=(0,r.Z)(t,a);return(0,o.kt)("wrapper",(0,n.Z)({},u,i,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u8bf7\u6c42\u83b7\u53d6 Wi-Fi \u5217\u8868\u3002\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"onGetWifiList")," \u6ce8\u518c\u7684\u56de\u8c03\u4e2d\u8fd4\u56de ",(0,o.kt)("inlineCode",{parentName:"p"},"wifiList")," \u6570\u636e\u3002 ",(0,o.kt)("strong",{parentName:"p"},"Android \u8c03\u7528\u524d\u9700\u8981 ",(0,o.kt)("a",{parentName:"strong",href:"https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/authorize.html"},"\u7528\u6237\u6388\u6743")," scope.userLocation\u3002")),(0,o.kt)("p",null,"iOS \u5c06\u8df3\u8f6c\u5230\u7cfb\u7edf\u7684 Wi-Fi \u754c\u9762\uff0cAndroid \u4e0d\u4f1a\u8df3\u8f6c\u3002 iOS 11.0 \u53ca iOS 11.1 \u4e24\u4e2a\u7248\u672c\u56e0\u7cfb\u7edf\u95ee\u9898\uff0c\u8be5\u65b9\u6cd5\u5931\u6548\u3002\u4f46\u5728 iOS 11.2 \u4e2d\u5df2\u4fee\u590d\u3002"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/device/wifi/wx.getWifiList.html"},"\u53c2\u8003\u6587\u6863"))),(0,o.kt)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"(option?: Option) => Promise<WifiError>\n")),(0,o.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,o.kt)("h3",{id:"option"},"Option"),(0,o.kt)("table",null,(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"\u53c2\u6570"),(0,o.kt)("th",null,"\u7c7b\u578b"),(0,o.kt)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),(0,o.kt)("th",null,"\u8bf4\u660e"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"complete"),(0,o.kt)("td",null,(0,o.kt)("code",null,"(res: WifiError) => void")),(0,o.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,o.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"fail"),(0,o.kt)("td",null,(0,o.kt)("code",null,"(res: WifiError) => void")),(0,o.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,o.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"success"),(0,o.kt)("td",null,(0,o.kt)("code",null,"(res: WifiError) => void")),(0,o.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,o.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))),(0,o.kt)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"API"),(0,o.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,o.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,o.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Taro.getWifiList"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,o.kt)("td",{parentName:"tr",align:"center"}),(0,o.kt)("td",{parentName:"tr",align:"center"})))))}d.isMDXComponent=!0}}]);