"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[13445],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=r.createContext({}),u=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(a.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,a=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=u(n),f=o,k=p["".concat(a,".").concat(f)]||p[f]||s[f]||l;return n?r.createElement(k,i(i({ref:t},d),{},{components:n})):r.createElement(k,i({ref:t},d))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,i=new Array(l);i[0]=p;var c={};for(var a in t)hasOwnProperty.call(t,a)&&(c[a]=t[a]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},38871:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return a},metadata:function(){return u},toc:function(){return d},default:function(){return p}});var r=n(83117),o=n(80102),l=(n(67294),n(3905)),i=["components"],c={title:"IBeaconInfo",sidebar_label:"IBeaconInfo"},a=void 0,u={unversionedId:"apis/device/ibeacon/IBeaconInfo",id:"version-3.x/apis/device/ibeacon/IBeaconInfo",isDocsHomePage:!1,title:"IBeaconInfo",description:"\u65b9\u6cd5",source:"@site/versioned_docs/version-3.x/apis/device/ibeacon/IBeaconInfo.md",sourceDirName:"apis/device/ibeacon",slug:"/apis/device/ibeacon/IBeaconInfo",permalink:"/taro/docs/apis/device/ibeacon/IBeaconInfo",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.x/apis/device/ibeacon/IBeaconInfo.md",tags:[],version:"3.x",frontMatter:{title:"IBeaconInfo",sidebar_label:"IBeaconInfo"},sidebar:"version-3.x/API",previous:{title:"getBeacons",permalink:"/taro/docs/apis/device/ibeacon/getBeacons"},next:{title:"stopWifi",permalink:"/taro/docs/apis/device/wifi/stopWifi"}},d=[{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",children:[],level:2}],s={toc:d};function p(e){var t=e.components,n=(0,o.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u65b9\u6cd5"},"\u65b9\u6cd5"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"\u53c2\u6570"),(0,l.kt)("th",null,"\u7c7b\u578b"),(0,l.kt)("th",null,"\u8bf4\u660e"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"accuracy"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number")),(0,l.kt)("td",null,"iBeacon \u8bbe\u5907\u7684\u8ddd\u79bb")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"major"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",null,"iBeacon \u8bbe\u5907\u7684\u4e3b id")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"minor"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",null,"iBeacon \u8bbe\u5907\u7684\u6b21 id")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"proximity"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number")),(0,l.kt)("td",null,"\u8868\u793a\u8bbe\u5907\u8ddd\u79bb\u7684\u679a\u4e3e\u503c")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"rssi"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number")),(0,l.kt)("td",null,"\u8868\u793a\u8bbe\u5907\u7684\u4fe1\u53f7\u5f3a\u5ea6")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"uuid"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",null,"iBeacon \u8bbe\u5907\u5e7f\u64ad\u7684 uuid")))))}p.isMDXComponent=!0}}]);