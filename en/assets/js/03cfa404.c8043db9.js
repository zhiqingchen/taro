"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[73030],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),f=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=f(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=f(n),d=i,m=u["".concat(c,".").concat(d)]||u[d]||s[d]||a;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var f=2;f<a;f++)o[f]=n[f];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},29161:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return f},toc:function(){return p},default:function(){return u}});var r=n(83117),i=n(80102),a=(n(67294),n(3905)),o=["components"],l={title:"Taro.offGetWifiList(callback)",sidebar_label:"offGetWifiList"},c=void 0,f={unversionedId:"apis/device/wifi/offGetWifiList",id:"version-2.x/apis/device/wifi/offGetWifiList",isDocsHomePage:!1,title:"Taro.offGetWifiList(callback)",description:"\u53d6\u6d88\u76d1\u542c\u83b7\u53d6\u5230 Wi-Fi \u5217\u8868\u6570\u636e\u4e8b\u4ef6\u3002",source:"@site/versioned_docs/version-2.x/apis/device/wifi/offGetWifiList.md",sourceDirName:"apis/device/wifi",slug:"/apis/device/wifi/offGetWifiList",permalink:"/taro/en/docs/2.x/apis/device/wifi/offGetWifiList",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-2.x/apis/device/wifi/offGetWifiList.md",tags:[],version:"2.x",frontMatter:{title:"Taro.offGetWifiList(callback)",sidebar_label:"offGetWifiList"},sidebar:"version-2.x/API",previous:{title:"offWifiConnected",permalink:"/taro/en/docs/2.x/apis/device/wifi/offWifiConnected"},next:{title:"getWifiList",permalink:"/taro/en/docs/2.x/apis/device/wifi/getWifiList"}},p=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[],level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[],level:2},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[],level:2}],s={toc:p};function u(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u53d6\u6d88\u76d1\u542c\u83b7\u53d6\u5230 Wi-Fi \u5217\u8868\u6570\u636e\u4e8b\u4ef6\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/device/wifi/wx.offGetWifiList.html"},"\u53c2\u8003\u6587\u6863"))),(0,a.kt)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"(callback: (...args: any[]) => any) => void\n")),(0,a.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"\u53c2\u6570"),(0,a.kt)("th",null,"\u7c7b\u578b"),(0,a.kt)("th",null,"\u8bf4\u660e"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"callback"),(0,a.kt)("td",null,(0,a.kt)("code",null,"(...args: any[]) => any")),(0,a.kt)("td",null,"\u83b7\u53d6\u5230 Wi-Fi \u5217\u8868\u6570\u636e\u4e8b\u4ef6\u7684\u56de\u8c03\u51fd\u6570")))),(0,a.kt)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"API"),(0,a.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,a.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Taro.offGetWifiList"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})))))}u.isMDXComponent=!0}}]);