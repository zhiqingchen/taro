(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[50654],{22122:function(t,e,n){"use strict";function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}n.d(e,{Z:function(){return r}})},19756:function(t,e,n){"use strict";function r(t,e){if(null==t)return{};var n,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}n.d(e,{Z:function(){return r}})},3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return d},kt:function(){return f}});var r=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var a=r.createContext({}),u=function(t){var e=r.useContext(a),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},d=function(t){var e=u(t.components);return r.createElement(a.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var n=t.components,i=t.mdxType,o=t.originalType,a=t.parentName,d=c(t,["components","mdxType","originalType","parentName"]),s=u(n),f=i,k=s["".concat(a,".").concat(f)]||s[f]||p[f]||o;return n?r.createElement(k,l(l({ref:e},d),{},{components:n})):r.createElement(k,l({ref:e},d))}));function f(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var o=n.length,l=new Array(o);l[0]=s;var c={};for(var a in e)hasOwnProperty.call(e,a)&&(c[a]=e[a]);c.originalType=t,c.mdxType="string"==typeof t?t:i,l[1]=c;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},8570:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return l},metadata:function(){return c},toc:function(){return a},default:function(){return d}});var r=n(22122),i=n(19756),o=(n(67294),n(3905)),l={title:"Taro.connectWifi(option)",sidebar_label:"connectWifi"},c={unversionedId:"apis/device/wifi/connectWifi",id:"version-2.x/apis/device/wifi/connectWifi",isDocsHomePage:!1,title:"Taro.connectWifi(option)",description:"\u8fde\u63a5 Wi-Fi\u3002\u82e5\u5df2\u77e5 Wi-Fi \u4fe1\u606f\uff0c\u53ef\u4ee5\u76f4\u63a5\u5229\u7528\u8be5\u63a5\u53e3\u8fde\u63a5\u3002\u4ec5 Android \u4e0e iOS 11 \u4ee5\u4e0a\u7248\u672c\u652f\u6301\u3002",source:"@site/versioned_docs/version-2.x/apis/device/wifi/connectWifi.md",sourceDirName:"apis/device/wifi",slug:"/apis/device/wifi/connectWifi",permalink:"/taro/en/docs/2.x/apis/device/wifi/connectWifi",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-2.x/apis/device/wifi/connectWifi.md",version:"2.x",sidebar_label:"connectWifi",frontMatter:{title:"Taro.connectWifi(option)",sidebar_label:"connectWifi"},sidebar:"version-2.x/API",previous:{title:"Taro.getConnectedWifi(option)",permalink:"/taro/en/docs/2.x/apis/device/wifi/getConnectedWifi"},next:{title:"WifiInfo",permalink:"/taro/en/docs/2.x/apis/device/wifi/WifiInfo"}},a=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Option",id:"option",children:[]}]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],u={toc:a};function d(t){var e=t.components,n=(0,i.Z)(t,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u8fde\u63a5 Wi-Fi\u3002\u82e5\u5df2\u77e5 Wi-Fi \u4fe1\u606f\uff0c\u53ef\u4ee5\u76f4\u63a5\u5229\u7528\u8be5\u63a5\u53e3\u8fde\u63a5\u3002\u4ec5 Android \u4e0e iOS 11 \u4ee5\u4e0a\u7248\u672c\u652f\u6301\u3002"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/device/wifi/wx.connectWifi.html"},"\u53c2\u8003\u6587\u6863"))),(0,o.kt)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"(option: Option) => Promise<WifiError>\n")),(0,o.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,o.kt)("h3",{id:"option"},"Option"),(0,o.kt)("table",null,(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"\u53c2\u6570"),(0,o.kt)("th",null,"\u7c7b\u578b"),(0,o.kt)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),(0,o.kt)("th",null,"\u8bf4\u660e"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"SSID"),(0,o.kt)("td",null,(0,o.kt)("code",null,"string")),(0,o.kt)("td",{style:{textAlign:"center"}},"\u662f"),(0,o.kt)("td",null,"Wi-Fi \u8bbe\u5907 SSID")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"password"),(0,o.kt)("td",null,(0,o.kt)("code",null,"string")),(0,o.kt)("td",{style:{textAlign:"center"}},"\u662f"),(0,o.kt)("td",null,"Wi-Fi \u8bbe\u5907\u5bc6\u7801")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"BSSID"),(0,o.kt)("td",null,(0,o.kt)("code",null,"string")),(0,o.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,o.kt)("td",null,"Wi-Fi \u8bbe\u5907 BSSID")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"complete"),(0,o.kt)("td",null,(0,o.kt)("code",null,"(res: WifiError) => void")),(0,o.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,o.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"fail"),(0,o.kt)("td",null,(0,o.kt)("code",null,"(res: WifiError) => void")),(0,o.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,o.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"success"),(0,o.kt)("td",null,(0,o.kt)("code",null,"(res: WifiError) => void")),(0,o.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,o.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))),(0,o.kt)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"Taro.connectWifi({\n  SSID: '',\n  BSSID: '',\n  success: function (res) {\n    console.log(res.errMsg)\n  }\n})\n")),(0,o.kt)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"API"),(0,o.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,o.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,o.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Taro.connectWifi"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,o.kt)("td",{parentName:"tr",align:"center"}),(0,o.kt)("td",{parentName:"tr",align:"center"})))))}d.isMDXComponent=!0}}]);