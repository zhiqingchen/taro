"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[62209],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return k}});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=u(n),k=l,m=s["".concat(c,".").concat(k)]||s[k]||d[k]||a;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=s;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},8890:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return s}});var r=n(83117),l=n(80102),a=(n(67294),n(3905)),o=["components"],i={title:"Taro.onMemoryWarning(callback)",sidebar_label:"onMemoryWarning"},c=void 0,u={unversionedId:"apis/device/performance/onMemoryWarning",id:"version-2.x/apis/device/performance/onMemoryWarning",isDocsHomePage:!1,title:"Taro.onMemoryWarning(callback)",description:"\u76d1\u542c\u5185\u5b58\u4e0d\u8db3\u544a\u8b66\u4e8b\u4ef6\u3002",source:"@site/versioned_docs/version-2.x/apis/device/performance/onMemoryWarning.md",sourceDirName:"apis/device/performance",slug:"/apis/device/performance/onMemoryWarning",permalink:"/taro/docs/2.x/apis/device/performance/onMemoryWarning",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-2.x/apis/device/performance/onMemoryWarning.md",tags:[],version:"2.x",frontMatter:{title:"Taro.onMemoryWarning(callback)",sidebar_label:"onMemoryWarning"},sidebar:"version-2.x/API",previous:{title:"offGyroscopeChange",permalink:"/taro/docs/2.x/apis/device/gyroscope/offGyroscopeChange"},next:{title:"scanCode",permalink:"/taro/docs/2.x/apis/device/scan/scancode"}},p=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[],level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Callback",id:"callback",children:[],level:3},{value:"CallbackResult",id:"callbackresult",children:[],level:3},{value:"level",id:"level",children:[],level:3}],level:2},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[],level:2},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[],level:2}],d={toc:p};function s(e){var t=e.components,n=(0,l.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u76d1\u542c\u5185\u5b58\u4e0d\u8db3\u544a\u8b66\u4e8b\u4ef6\u3002"),(0,a.kt)("p",null,"\u5f53 iOS/Android \u5411\u5c0f\u7a0b\u5e8f\u8fdb\u7a0b\u53d1\u51fa\u5185\u5b58\u8b66\u544a\u65f6\uff0c\u89e6\u53d1\u8be5\u4e8b\u4ef6\u3002\u89e6\u53d1\u8be5\u4e8b\u4ef6\u4e0d\u610f\u5473\u5c0f\u7a0b\u5e8f\u88ab\u6740\uff0c\u5927\u90e8\u5206\u60c5\u51b5\u4e0b\u4ec5\u4ec5\u662f\u544a\u8b66\uff0c\u5f00\u53d1\u8005\u53ef\u5728\u6536\u5230\u901a\u77e5\u540e\u56de\u6536\u4e00\u4e9b\u4e0d\u5fc5\u8981\u8d44\u6e90\u907f\u514d\u8fdb\u4e00\u6b65\u52a0\u5267\u5185\u5b58\u7d27\u5f20\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/device/performance/wx.onMemoryWarning.html"},"\u53c2\u8003\u6587\u6863"))),(0,a.kt)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"(callback: Callback) => void\n")),(0,a.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,a.kt)("h3",{id:"callback"},"Callback"),(0,a.kt)("p",null,"\u5185\u5b58\u4e0d\u8db3\u544a\u8b66\u4e8b\u4ef6\u7684\u56de\u8c03\u51fd\u6570"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"(result: CallbackResult) => void\n")),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"\u53c2\u6570"),(0,a.kt)("th",null,"\u7c7b\u578b"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"result"),(0,a.kt)("td",null,(0,a.kt)("code",null,"CallbackResult"))))),(0,a.kt)("h3",{id:"callbackresult"},"CallbackResult"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"\u53c2\u6570"),(0,a.kt)("th",null,"\u7c7b\u578b"),(0,a.kt)("th",null,"\u8bf4\u660e"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"level"),(0,a.kt)("td",null,(0,a.kt)("code",null,"5 | 10 | 15")),(0,a.kt)("td",null,"\u5185\u5b58\u544a\u8b66\u7b49\u7ea7\uff0c\u53ea\u6709 Android \u624d\u6709\uff0c\u5bf9\u5e94\u7cfb\u7edf\u5b8f\u5b9a\u4e49")))),(0,a.kt)("h3",{id:"level"},"level"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"\u53c2\u6570"),(0,a.kt)("th",null,"\u8bf4\u660e"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"5"),(0,a.kt)("td",null,"TRIM_MEMORY_RUNNING_MODERATE")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"10"),(0,a.kt)("td",null,"TRIM_MEMORY_RUNNING_LOW")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"15"),(0,a.kt)("td",null,"TRIM_MEMORY_RUNNING_CRITICAL")))),(0,a.kt)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"Taro.onMemoryWarning(function () {\n  console.log('onMemoryWarningReceive')\n})\n")),(0,a.kt)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"API"),(0,a.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,a.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Taro.onMemoryWarning"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})))))}s.isMDXComponent=!0}}]);