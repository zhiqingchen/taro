(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[41143],{22122:function(t,e,n){"use strict";function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}n.d(e,{Z:function(){return r}})},19756:function(t,e,n){"use strict";function r(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}n.d(e,{Z:function(){return r}})},3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return c},kt:function(){return p}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var i=r.createContext({}),d=function(t){var e=r.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):u(u({},e),t)),n},c=function(t){var e=d(t.components);return r.createElement(i.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,i=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),s=d(n),p=a,g=s["".concat(i,".").concat(p)]||s[p]||k[p]||l;return n?r.createElement(g,u(u({ref:e},c),{},{components:n})):r.createElement(g,u({ref:e},c))}));function p(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,u=new Array(l);u[0]=s;var o={};for(var i in e)hasOwnProperty.call(e,i)&&(o[i]=e[i]);o.originalType=t,o.mdxType="string"==typeof t?t:a,u[1]=o;for(var d=2;d<l;d++)u[d]=n[d];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},92840:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return u},metadata:function(){return o},toc:function(){return i},default:function(){return c}});var r=n(22122),a=n(19756),l=(n(67294),n(3905)),u={title:"Taro.getBackgroundAudioPlayerState(option)",sidebar_label:"getBackgroundAudioPlayerState"},o={unversionedId:"apis/media/background-audio/getBackgroundAudioPlayerState",id:"version-2.x/apis/media/background-audio/getBackgroundAudioPlayerState",isDocsHomePage:!1,title:"Taro.getBackgroundAudioPlayerState(option)",description:"\u83b7\u53d6\u540e\u53f0\u97f3\u4e50\u64ad\u653e\u72b6\u6001\u3002",source:"@site/versioned_docs/version-2.x/apis/media/background-audio/getBackgroundAudioPlayerState.md",sourceDirName:"apis/media/background-audio",slug:"/apis/media/background-audio/getBackgroundAudioPlayerState",permalink:"/taro/docs/2.x/apis/media/background-audio/getBackgroundAudioPlayerState",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-2.x/apis/media/background-audio/getBackgroundAudioPlayerState.md",version:"2.x",sidebar_label:"getBackgroundAudioPlayerState",frontMatter:{title:"Taro.getBackgroundAudioPlayerState(option)",sidebar_label:"getBackgroundAudioPlayerState"},sidebar:"version-2.x/API",previous:{title:"Taro.onBackgroundAudioPause(callback)",permalink:"/taro/docs/2.x/apis/media/background-audio/onBackgroundAudioPause"},next:{title:"Taro.getBackgroundAudioManager()",permalink:"/taro/docs/2.x/apis/media/background-audio/getBackgroundAudioManager"}},i=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Option",id:"option",children:[]},{value:"SuccessCallbackResult",id:"successcallbackresult",children:[]},{value:"status",id:"status",children:[]}]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],d={toc:i};function c(t){var e=t.components,n=(0,a.Z)(t,["components"]);return(0,l.kt)("wrapper",(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u83b7\u53d6\u540e\u53f0\u97f3\u4e50\u64ad\u653e\u72b6\u6001\u3002\n",(0,l.kt)("strong",{parentName:"p"},"\u6ce8\u610f\uff1a1.2.0 \u7248\u672c\u5f00\u59cb\uff0c\u672c\u63a5\u53e3\u4e0d\u518d\u7ef4\u62a4\u3002\u5efa\u8bae\u4f7f\u7528\u80fd\u529b\u66f4\u5f3a\u7684 ",(0,l.kt)("a",{parentName:"strong",href:"https://developers.weixin.qq.com/miniprogram/dev/api/media/background-audio/wx.getBackgroundAudioManager.html"},"Taro.getBackgroundAudioManager")," \u63a5\u53e3")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/media/background-audio/wx.getBackgroundAudioPlayerState.html"},"\u53c2\u8003\u6587\u6863"))),(0,l.kt)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"(option?: Option) => Promise<SuccessCallbackResult>\n")),(0,l.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,l.kt)("h3",{id:"option"},"Option"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"\u53c2\u6570"),(0,l.kt)("th",null,"\u7c7b\u578b"),(0,l.kt)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),(0,l.kt)("th",null,"\u8bf4\u660e"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"complete"),(0,l.kt)("td",null,(0,l.kt)("code",null,"(res: CallbackResult) => void")),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"fail"),(0,l.kt)("td",null,(0,l.kt)("code",null,"(res: CallbackResult) => void")),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"success"),(0,l.kt)("td",null,(0,l.kt)("code",null,"(result: SuccessCallbackResult) => void")),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))),(0,l.kt)("h3",{id:"successcallbackresult"},"SuccessCallbackResult"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"\u53c2\u6570"),(0,l.kt)("th",null,"\u7c7b\u578b"),(0,l.kt)("th",null,"\u8bf4\u660e"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"currentPosition"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number")),(0,l.kt)("td",null,"\u9009\u5b9a\u97f3\u9891\u7684\u64ad\u653e\u4f4d\u7f6e\uff08\u5355\u4f4d\uff1as\uff09\uff0c\u53ea\u6709\u5728\u97f3\u4e50\u64ad\u653e\u4e2d\u65f6\u8fd4\u56de")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"dataUrl"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",null,"\u6b4c\u66f2\u6570\u636e\u94fe\u63a5\uff0c\u53ea\u6709\u5728\u97f3\u4e50\u64ad\u653e\u4e2d\u65f6\u8fd4\u56de")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"downloadPercent"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number")),(0,l.kt)("td",null,"\u97f3\u9891\u7684\u4e0b\u8f7d\u8fdb\u5ea6\u767e\u5206\u6bd4\uff0c\u53ea\u6709\u5728\u97f3\u4e50\u64ad\u653e\u4e2d\u65f6\u8fd4\u56de")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"duration"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number")),(0,l.kt)("td",null,"\u9009\u5b9a\u97f3\u9891\u7684\u957f\u5ea6\uff08\u5355\u4f4d\uff1as\uff09\uff0c\u53ea\u6709\u5728\u97f3\u4e50\u64ad\u653e\u4e2d\u65f6\u8fd4\u56de")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"status"),(0,l.kt)("td",null,(0,l.kt)("code",null,"0 | 1 | 2")),(0,l.kt)("td",null,"\u64ad\u653e\u72b6\u6001")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"errMsg"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",null,"\u8c03\u7528\u7ed3\u679c")))),(0,l.kt)("h3",{id:"status"},"status"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"\u53c2\u6570"),(0,l.kt)("th",null,"\u8bf4\u660e"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"0"),(0,l.kt)("td",null,"\u6682\u505c\u4e2d")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"1"),(0,l.kt)("td",null,"\u64ad\u653e\u4e2d")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"2"),(0,l.kt)("td",null,"\u6ca1\u6709\u97f3\u4e50\u64ad\u653e")))),(0,l.kt)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"Taro.getBackgroundAudioPlayerState({\n  success: function (res) {\n    var status = res.status\n    var dataUrl = res.dataUrl\n    var currentPosition = res.currentPosition\n    var duration = res.duration\n    var downloadPercent = res.downloadPercent\n  }\n})\n")),(0,l.kt)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"API"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,l.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,l.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"Taro.getBackgroundAudioPlayerState"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"})))))}c.isMDXComponent=!0}}]);