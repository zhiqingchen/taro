(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[90463],{22122:function(t,e,r){"use strict";function n(){return(n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}r.d(e,{Z:function(){return n}})},19756:function(t,e,r){"use strict";function n(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}r.d(e,{Z:function(){return n}})},3905:function(t,e,r){"use strict";r.d(e,{Zo:function(){return s},kt:function(){return y}});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var p=n.createContext({}),c=function(t){var e=n.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},s=function(t){var e=c(t.components);return n.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,p=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),d=c(r),y=a,m=d["".concat(p,".").concat(y)]||d[y]||u[y]||o;return r?n.createElement(m,i(i({ref:e},s),{},{components:r})):n.createElement(m,i({ref:e},s))}));function y(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},32786:function(t,e,r){"use strict";r.r(e),r.d(e,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p},default:function(){return s}});var n=r(22122),a=r(19756),o=(r(67294),r(3905)),i={title:"Taro.reportAnalytics(eventName, data)",sidebar_label:"reportAnalytics"},l={unversionedId:"apis/open-api/data-analysis/reportAnalytics",id:"version-3.x/apis/open-api/data-analysis/reportAnalytics",isDocsHomePage:!1,title:"Taro.reportAnalytics(eventName, data)",description:"\u81ea\u5b9a\u4e49\u5206\u6790\u6570\u636e\u4e0a\u62a5\u63a5\u53e3\u3002\u4f7f\u7528\u524d\uff0c\u9700\u8981\u5728\u5c0f\u7a0b\u5e8f\u7ba1\u7406\u540e\u53f0\u81ea\u5b9a\u4e49\u5206\u6790\u4e2d\u65b0\u5efa\u4e8b\u4ef6\uff0c\u914d\u7f6e\u597d\u4e8b\u4ef6\u540d\u4e0e\u5b57\u6bb5\u3002",source:"@site/versioned_docs/version-3.x/apis/open-api/data-analysis/reportAnalytics.md",sourceDirName:"apis/open-api/data-analysis",slug:"/apis/open-api/data-analysis/reportAnalytics",permalink:"/taro/docs/apis/open-api/data-analysis/reportAnalytics",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.x/apis/open-api/data-analysis/reportAnalytics.md",version:"3.x",sidebar_label:"reportAnalytics",frontMatter:{title:"Taro.reportAnalytics(eventName, data)",sidebar_label:"reportAnalytics"},sidebar:"version-3.x/API",previous:{title:"Taro.reportMonitor(name, value)",permalink:"/taro/docs/apis/open-api/report/reportMonitor"},next:{title:"Taro.requestPayment(option)",permalink:"/taro/docs/apis/open-api/payment/requestPayment"}},p=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],c={toc:p};function s(t){var e=t.components,r=(0,a.Z)(t,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u81ea\u5b9a\u4e49\u5206\u6790\u6570\u636e\u4e0a\u62a5\u63a5\u53e3\u3002\u4f7f\u7528\u524d\uff0c\u9700\u8981\u5728\u5c0f\u7a0b\u5e8f\u7ba1\u7406\u540e\u53f0\u81ea\u5b9a\u4e49\u5206\u6790\u4e2d\u65b0\u5efa\u4e8b\u4ef6\uff0c\u914d\u7f6e\u597d\u4e8b\u4ef6\u540d\u4e0e\u5b57\u6bb5\u3002"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/open-api/data-analysis/wx.reportAnalytics.html"},"\u53c2\u8003\u6587\u6863"))),(0,o.kt)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"(eventName: string, data: Record<string, any>) => void\n")),(0,o.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,o.kt)("table",null,(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"\u53c2\u6570"),(0,o.kt)("th",null,"\u7c7b\u578b"),(0,o.kt)("th",null,"\u8bf4\u660e"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"eventName"),(0,o.kt)("td",null,(0,o.kt)("code",null,"string")),(0,o.kt)("td",null,"\u4e8b\u4ef6\u540d")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"data"),(0,o.kt)("td",null,(0,o.kt)("code",null,"Record<string, any>")),(0,o.kt)("td",null,"\u4e0a\u62a5\u7684\u81ea\u5b9a\u4e49\u6570\u636e\uff0ckey \u4e3a\u914d\u7f6e\u4e2d\u7684\u5b57\u6bb5\u540d\uff0cvalue \u4e3a\u4e0a\u62a5\u7684\u6570\u636e\u3002")))),(0,o.kt)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"Taro.reportAnalytics('purchase', {\n  price: 120,\n  color: 'red'\n})\n")),(0,o.kt)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"API"),(0,o.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,o.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,o.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Taro.reportAnalytics"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,o.kt)("td",{parentName:"tr",align:"center"}),(0,o.kt)("td",{parentName:"tr",align:"center"})))))}s.isMDXComponent=!0}}]);