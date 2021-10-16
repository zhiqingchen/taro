(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[82926],{22122:function(t,e,n){"use strict";function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}n.d(e,{Z:function(){return r}})},19756:function(t,e,n){"use strict";function r(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}n.d(e,{Z:function(){return r}})},3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function k(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function d(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var u=r.createContext({}),o=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):k(k({},e),t)),n},c=function(t){var e=o(t.components);return r.createElement(u.Provider,{value:e},t.children)},i={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},p=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,u=t.parentName,c=d(t,["components","mdxType","originalType","parentName"]),p=o(n),m=a,g=p["".concat(u,".").concat(m)]||p[m]||i[m]||l;return n?r.createElement(g,k(k({ref:e},c),{},{components:n})):r.createElement(g,k({ref:e},c))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,k=new Array(l);k[0]=p;var d={};for(var u in e)hasOwnProperty.call(e,u)&&(d[u]=e[u]);d.originalType=t,d.mdxType="string"==typeof t?t:a,k[1]=d;for(var o=2;o<l;o++)k[o]=n[o];return r.createElement.apply(null,k)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},79057:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return k},metadata:function(){return d},toc:function(){return u},default:function(){return c}});var r=n(22122),a=n(19756),l=(n(67294),n(3905)),k={title:"RecorderManager",sidebar_label:"RecorderManager"},d={unversionedId:"apis/media/recorder/RecorderManager",id:"apis/media/recorder/RecorderManager",isDocsHomePage:!1,title:"RecorderManager",description:"\u5168\u5c40\u552f\u4e00\u7684\u5f55\u97f3\u7ba1\u7406\u5668",source:"@site/docs/apis/media/recorder/RecorderManager.md",sourceDirName:"apis/media/recorder",slug:"/apis/media/recorder/RecorderManager",permalink:"/taro/docs/next/apis/media/recorder/RecorderManager",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/apis/media/recorder/RecorderManager.md",version:"current",sidebar_label:"RecorderManager",frontMatter:{title:"RecorderManager",sidebar_label:"RecorderManager"},sidebar:"API",previous:{title:"Taro.getRecorderManager()",permalink:"/taro/docs/next/apis/media/recorder/getRecorderManager"},next:{title:"Taro.createCameraContext()",permalink:"/taro/docs/next/apis/media/camera/createCameraContext"}},u=[{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",children:[{value:"onError",id:"onerror",children:[]},{value:"onFrameRecorded",id:"onframerecorded",children:[]},{value:"onInterruptionBegin",id:"oninterruptionbegin",children:[]},{value:"onInterruptionEnd",id:"oninterruptionend",children:[]},{value:"onPause",id:"onpause",children:[]},{value:"onResume",id:"onresume",children:[]},{value:"onStart",id:"onstart",children:[]},{value:"onStop",id:"onstop",children:[]},{value:"pause",id:"pause",children:[]},{value:"resume",id:"resume",children:[]},{value:"start",id:"start",children:[]},{value:"stop",id:"stop",children:[]}]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"OnErrorCallback",id:"onerrorcallback",children:[]},{value:"OnErrorCallbackResult",id:"onerrorcallbackresult",children:[]},{value:"OnFrameRecordedCallback",id:"onframerecordedcallback",children:[]},{value:"OnFrameRecordedCallbackResult",id:"onframerecordedcallbackresult",children:[]},{value:"OnStopCallback",id:"onstopcallback",children:[]},{value:"OnStopCallbackResult",id:"onstopcallbackresult",children:[]},{value:"StartOption",id:"startoption",children:[]},{value:"audioSource",id:"audiosource",children:[]},{value:"format",id:"format",children:[]},{value:"numberOfChannels",id:"numberofchannels",children:[]},{value:"sampleRate",id:"samplerate",children:[]}]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6-12",children:[]}],o={toc:u};function c(t){var e=t.components,n=(0,a.Z)(t,["components"]);return(0,l.kt)("wrapper",(0,r.Z)({},o,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u5168\u5c40\u552f\u4e00\u7684\u5f55\u97f3\u7ba1\u7406\u5668"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/media/recorder/RecorderManager.html"},"\u53c2\u8003\u6587\u6863"))),(0,l.kt)("h2",{id:"\u65b9\u6cd5"},"\u65b9\u6cd5"),(0,l.kt)("h3",{id:"onerror"},"onError"),(0,l.kt)("p",null,"\u76d1\u542c\u5f55\u97f3\u9519\u8bef\u4e8b\u4ef6"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/media/recorder/RecorderManager.onError.html"},"\u53c2\u8003\u6587\u6863"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"(callback: OnErrorCallback) => void\n")),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"\u53c2\u6570"),(0,l.kt)("th",null,"\u7c7b\u578b"),(0,l.kt)("th",null,"\u8bf4\u660e"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"callback"),(0,l.kt)("td",null,(0,l.kt)("code",null,"OnErrorCallback")),(0,l.kt)("td",null,"\u5f55\u97f3\u9519\u8bef\u4e8b\u4ef6\u7684\u56de\u8c03\u51fd\u6570")))),(0,l.kt)("h4",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"API"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,l.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,l.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"RecorderManager.onError"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")))),(0,l.kt)("h3",{id:"onframerecorded"},"onFrameRecorded"),(0,l.kt)("p",null,"\u76d1\u542c\u5df2\u5f55\u5236\u5b8c\u6307\u5b9a\u5e27\u5927\u5c0f\u7684\u6587\u4ef6\u4e8b\u4ef6\u3002\u5982\u679c\u8bbe\u7f6e\u4e86 frameSize\uff0c\u5219\u4f1a\u56de\u8c03\u6b64\u4e8b\u4ef6\u3002"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/media/recorder/RecorderManager.onFrameRecorded.html"},"\u53c2\u8003\u6587\u6863"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"(callback: OnFrameRecordedCallback) => void\n")),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"\u53c2\u6570"),(0,l.kt)("th",null,"\u7c7b\u578b"),(0,l.kt)("th",null,"\u8bf4\u660e"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"callback"),(0,l.kt)("td",null,(0,l.kt)("code",null,"OnFrameRecordedCallback")),(0,l.kt)("td",null,"\u5df2\u5f55\u5236\u5b8c\u6307\u5b9a\u5e27\u5927\u5c0f\u7684\u6587\u4ef6\u4e8b\u4ef6\u7684\u56de\u8c03\u51fd\u6570")))),(0,l.kt)("h4",{id:"api-\u652f\u6301\u5ea6-1"},"API \u652f\u6301\u5ea6"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"API"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,l.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,l.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"RecorderManager.onFrameRecorded"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"})))),(0,l.kt)("h3",{id:"oninterruptionbegin"},"onInterruptionBegin"),(0,l.kt)("p",null,"\u76d1\u542c\u5f55\u97f3\u56e0\u4e3a\u53d7\u5230\u7cfb\u7edf\u5360\u7528\u800c\u88ab\u4e2d\u65ad\u5f00\u59cb\u4e8b\u4ef6\u3002\u4ee5\u4e0b\u573a\u666f\u4f1a\u89e6\u53d1\u6b64\u4e8b\u4ef6\uff1a\u5fae\u4fe1\u8bed\u97f3\u804a\u5929\u3001\u5fae\u4fe1\u89c6\u9891\u804a\u5929\u3002\u6b64\u4e8b\u4ef6\u89e6\u53d1\u540e\uff0c\u5f55\u97f3\u4f1a\u88ab\u6682\u505c\u3002pause \u4e8b\u4ef6\u5728\u6b64\u4e8b\u4ef6\u540e\u89e6\u53d1"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/media/recorder/RecorderManager.onInterruptionBegin.html"},"\u53c2\u8003\u6587\u6863"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"(callback: (res: CallbackResult) => void) => void\n")),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"\u53c2\u6570"),(0,l.kt)("th",null,"\u7c7b\u578b"),(0,l.kt)("th",null,"\u8bf4\u660e"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"callback"),(0,l.kt)("td",null,(0,l.kt)("code",null,"(res: CallbackResult) => void")),(0,l.kt)("td",null,"\u5f55\u97f3\u56e0\u4e3a\u53d7\u5230\u7cfb\u7edf\u5360\u7528\u800c\u88ab\u4e2d\u65ad\u5f00\u59cb\u4e8b\u4ef6\u7684\u56de\u8c03\u51fd\u6570")))),(0,l.kt)("h4",{id:"api-\u652f\u6301\u5ea6-2"},"API \u652f\u6301\u5ea6"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"API"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,l.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,l.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"RecorderManager.onInterruptionBegin"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"})))),(0,l.kt)("h3",{id:"oninterruptionend"},"onInterruptionEnd"),(0,l.kt)("p",null,"\u76d1\u542c\u5f55\u97f3\u4e2d\u65ad\u7ed3\u675f\u4e8b\u4ef6\u3002\u5728\u6536\u5230 interruptionBegin \u4e8b\u4ef6\u4e4b\u540e\uff0c\u5c0f\u7a0b\u5e8f\u5185\u6240\u6709\u5f55\u97f3\u4f1a\u6682\u505c\uff0c\u6536\u5230\u6b64\u4e8b\u4ef6\u4e4b\u540e\u624d\u53ef\u518d\u6b21\u5f55\u97f3\u6210\u529f\u3002"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/media/recorder/RecorderManager.onInterruptionEnd.html"},"\u53c2\u8003\u6587\u6863"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"(callback: (res: CallbackResult) => void) => void\n")),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"\u53c2\u6570"),(0,l.kt)("th",null,"\u7c7b\u578b"),(0,l.kt)("th",null,"\u8bf4\u660e"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"callback"),(0,l.kt)("td",null,(0,l.kt)("code",null,"(res: CallbackResult) => void")),(0,l.kt)("td",null,"\u5f55\u97f3\u4e2d\u65ad\u7ed3\u675f\u4e8b\u4ef6\u7684\u56de\u8c03\u51fd\u6570")))),(0,l.kt)("h4",{id:"api-\u652f\u6301\u5ea6-3"},"API \u652f\u6301\u5ea6"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"API"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,l.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,l.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"RecorderManager.onInterruptionEnd"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"})))),(0,l.kt)("h3",{id:"onpause"},"onPause"),(0,l.kt)("p",null,"\u76d1\u542c\u5f55\u97f3\u6682\u505c\u4e8b\u4ef6"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/media/recorder/RecorderManager.onPause.html"},"\u53c2\u8003\u6587\u6863"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"(callback: (res: CallbackResult) => void) => void\n")),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"\u53c2\u6570"),(0,l.kt)("th",null,"\u7c7b\u578b"),(0,l.kt)("th",null,"\u8bf4\u660e"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"callback"),(0,l.kt)("td",null,(0,l.kt)("code",null,"(res: CallbackResult) => void")),(0,l.kt)("td",null,"\u5f55\u97f3\u6682\u505c\u4e8b\u4ef6\u7684\u56de\u8c03\u51fd\u6570")))),(0,l.kt)("h4",{id:"api-\u652f\u6301\u5ea6-4"},"API \u652f\u6301\u5ea6"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"API"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,l.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,l.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"RecorderManager.onPause"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")))),(0,l.kt)("h3",{id:"onresume"},"onResume"),(0,l.kt)("p",null,"\u76d1\u542c\u5f55\u97f3\u7ee7\u7eed\u4e8b\u4ef6"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/media/recorder/RecorderManager.onResume.html"},"\u53c2\u8003\u6587\u6863"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"(callback: (res: CallbackResult) => void) => void\n")),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"\u53c2\u6570"),(0,l.kt)("th",null,"\u7c7b\u578b"),(0,l.kt)("th",null,"\u8bf4\u660e"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"callback"),(0,l.kt)("td",null,(0,l.kt)("code",null,"(res: CallbackResult) => void")),(0,l.kt)("td",null,"\u5f55\u97f3\u7ee7\u7eed\u4e8b\u4ef6\u7684\u56de\u8c03\u51fd\u6570")))),(0,l.kt)("h4",{id:"api-\u652f\u6301\u5ea6-5"},"API \u652f\u6301\u5ea6"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"API"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,l.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,l.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"RecorderManager.onResume"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")))),(0,l.kt)("h3",{id:"onstart"},"onStart"),(0,l.kt)("p",null,"\u76d1\u542c\u5f55\u97f3\u5f00\u59cb\u4e8b\u4ef6"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/media/recorder/RecorderManager.onStart.html"},"\u53c2\u8003\u6587\u6863"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"(callback: (res: CallbackResult) => void) => void\n")),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"\u53c2\u6570"),(0,l.kt)("th",null,"\u7c7b\u578b"),(0,l.kt)("th",null,"\u8bf4\u660e"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"callback"),(0,l.kt)("td",null,(0,l.kt)("code",null,"(res: CallbackResult) => void")),(0,l.kt)("td",null,"\u5f55\u97f3\u5f00\u59cb\u4e8b\u4ef6\u7684\u56de\u8c03\u51fd\u6570")))),(0,l.kt)("h4",{id:"api-\u652f\u6301\u5ea6-6"},"API \u652f\u6301\u5ea6"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"API"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,l.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,l.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"RecorderManager.onStart"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")))),(0,l.kt)("h3",{id:"onstop"},"onStop"),(0,l.kt)("p",null,"\u76d1\u542c\u5f55\u97f3\u7ed3\u675f\u4e8b\u4ef6"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/media/recorder/RecorderManager.onStop.html"},"\u53c2\u8003\u6587\u6863"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"(callback: OnStopCallback) => void\n")),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"\u53c2\u6570"),(0,l.kt)("th",null,"\u7c7b\u578b"),(0,l.kt)("th",null,"\u8bf4\u660e"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"callback"),(0,l.kt)("td",null,(0,l.kt)("code",null,"OnStopCallback")),(0,l.kt)("td",null,"\u5f55\u97f3\u7ed3\u675f\u4e8b\u4ef6\u7684\u56de\u8c03\u51fd\u6570")))),(0,l.kt)("h4",{id:"api-\u652f\u6301\u5ea6-7"},"API \u652f\u6301\u5ea6"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"API"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,l.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,l.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"RecorderManager.onStop"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")))),(0,l.kt)("h3",{id:"pause"},"pause"),(0,l.kt)("p",null,"\u6682\u505c\u5f55\u97f3"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/media/recorder/RecorderManager.pause.html"},"\u53c2\u8003\u6587\u6863"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"() => void\n")),(0,l.kt)("h4",{id:"api-\u652f\u6301\u5ea6-8"},"API \u652f\u6301\u5ea6"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"API"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,l.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,l.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"RecorderManager.pause"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")))),(0,l.kt)("h3",{id:"resume"},"resume"),(0,l.kt)("p",null,"\u7ee7\u7eed\u5f55\u97f3"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/media/recorder/RecorderManager.resume.html"},"\u53c2\u8003\u6587\u6863"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"() => void\n")),(0,l.kt)("h4",{id:"api-\u652f\u6301\u5ea6-9"},"API \u652f\u6301\u5ea6"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"API"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,l.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,l.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"RecorderManager.resume"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")))),(0,l.kt)("h3",{id:"start"},"start"),(0,l.kt)("p",null,"\u5f00\u59cb\u5f55\u97f3"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/media/recorder/RecorderManager.start.html"},"\u53c2\u8003\u6587\u6863"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"(option: StartOption) => void\n")),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"\u53c2\u6570"),(0,l.kt)("th",null,"\u7c7b\u578b"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"option"),(0,l.kt)("td",null,(0,l.kt)("code",null,"StartOption"))))),(0,l.kt)("h4",{id:"api-\u652f\u6301\u5ea6-10"},"API \u652f\u6301\u5ea6"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"API"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,l.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,l.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"RecorderManager.start"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")))),(0,l.kt)("h3",{id:"stop"},"stop"),(0,l.kt)("p",null,"\u505c\u6b62\u5f55\u97f3"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/media/recorder/RecorderManager.stop.html"},"\u53c2\u8003\u6587\u6863"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"() => void\n")),(0,l.kt)("h4",{id:"api-\u652f\u6301\u5ea6-11"},"API \u652f\u6301\u5ea6"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"API"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,l.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,l.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"RecorderManager.stop"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")))),(0,l.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,l.kt)("h3",{id:"onerrorcallback"},"OnErrorCallback"),(0,l.kt)("p",null,"\u5f55\u97f3\u9519\u8bef\u4e8b\u4ef6\u7684\u56de\u8c03\u51fd\u6570"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"(result: OnErrorCallbackResult) => void\n")),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"\u53c2\u6570"),(0,l.kt)("th",null,"\u7c7b\u578b"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"result"),(0,l.kt)("td",null,(0,l.kt)("code",null,"OnErrorCallbackResult"))))),(0,l.kt)("h3",{id:"onerrorcallbackresult"},"OnErrorCallbackResult"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"\u53c2\u6570"),(0,l.kt)("th",null,"\u7c7b\u578b"),(0,l.kt)("th",null,"\u8bf4\u660e"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"errMsg"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",null,"\u9519\u8bef\u4fe1\u606f")))),(0,l.kt)("h3",{id:"onframerecordedcallback"},"OnFrameRecordedCallback"),(0,l.kt)("p",null,"\u5df2\u5f55\u5236\u5b8c\u6307\u5b9a\u5e27\u5927\u5c0f\u7684\u6587\u4ef6\u4e8b\u4ef6\u7684\u56de\u8c03\u51fd\u6570"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"(result: OnFrameRecordedCallbackResult) => void\n")),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"\u53c2\u6570"),(0,l.kt)("th",null,"\u7c7b\u578b"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"result"),(0,l.kt)("td",null,(0,l.kt)("code",null,"OnFrameRecordedCallbackResult"))))),(0,l.kt)("h3",{id:"onframerecordedcallbackresult"},"OnFrameRecordedCallbackResult"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"\u53c2\u6570"),(0,l.kt)("th",null,"\u7c7b\u578b"),(0,l.kt)("th",null,"\u8bf4\u660e"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"frameBuffer"),(0,l.kt)("td",null,(0,l.kt)("code",null,"ArrayBuffer")),(0,l.kt)("td",null,"\u5f55\u97f3\u5206\u7247\u6570\u636e")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"isLastFrame"),(0,l.kt)("td",null,(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",null,"\u5f53\u524d\u5e27\u662f\u5426\u6b63\u5e38\u5f55\u97f3\u7ed3\u675f\u524d\u7684\u6700\u540e\u4e00\u5e27")))),(0,l.kt)("h3",{id:"onstopcallback"},"OnStopCallback"),(0,l.kt)("p",null,"\u5f55\u97f3\u7ed3\u675f\u4e8b\u4ef6\u7684\u56de\u8c03\u51fd\u6570"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"(result: OnStopCallbackResult) => void\n")),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"\u53c2\u6570"),(0,l.kt)("th",null,"\u7c7b\u578b"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"result"),(0,l.kt)("td",null,(0,l.kt)("code",null,"OnStopCallbackResult"))))),(0,l.kt)("h3",{id:"onstopcallbackresult"},"OnStopCallbackResult"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"\u53c2\u6570"),(0,l.kt)("th",null,"\u7c7b\u578b"),(0,l.kt)("th",null,"\u8bf4\u660e"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"duration"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number")),(0,l.kt)("td",null,"\u5f55\u97f3\u603b\u65f6\u957f\uff0c\u5355\u4f4d\uff1ams")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"fileSize"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number")),(0,l.kt)("td",null,"\u5f55\u97f3\u6587\u4ef6\u5927\u5c0f\uff0c\u5355\u4f4d\uff1aByte")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"tempFilePath"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",null,"\u5f55\u97f3\u6587\u4ef6\u7684\u4e34\u65f6\u8def\u5f84")))),(0,l.kt)("h3",{id:"startoption"},"StartOption"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"\u53c2\u6570"),(0,l.kt)("th",null,"\u7c7b\u578b"),(0,l.kt)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),(0,l.kt)("th",null,"\u8bf4\u660e"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"audioSource"),(0,l.kt)("td",null,(0,l.kt)("code",null,'"auto" | "buildInMic" | "headsetMic" | "mic" | "camcorder" | "voice_communication" | "voice_recognition"')),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u6307\u5b9a\u5f55\u97f3\u7684\u97f3\u9891\u8f93\u5165\u6e90\uff0c\u53ef\u901a\u8fc7 ",(0,l.kt)("a",{href:"https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/wx.getAvailableAudioSources.html"},"wx.getAvailableAudioSources()")," \u83b7\u53d6\u5f53\u524d\u53ef\u7528\u7684\u97f3\u9891\u6e90")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"duration"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number")),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u5f55\u97f3\u7684\u65f6\u957f\uff0c\u5355\u4f4d ms\uff0c\u6700\u5927\u503c 600000\uff0810 \u5206\u949f\uff09")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"encodeBitRate"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number")),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u7f16\u7801\u7801\u7387\uff0c\u6709\u6548\u503c\u89c1\u4e0b\u8868\u683c")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"format"),(0,l.kt)("td",null,(0,l.kt)("code",null,'"mp3" | "aac"')),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u97f3\u9891\u683c\u5f0f")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"frameSize"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number")),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u6307\u5b9a\u5e27\u5927\u5c0f\uff0c\u5355\u4f4d KB\u3002\u4f20\u5165 frameSize \u540e\uff0c\u6bcf\u5f55\u5236\u6307\u5b9a\u5e27\u5927\u5c0f\u7684\u5185\u5bb9\u540e\uff0c\u4f1a\u56de\u8c03\u5f55\u5236\u7684\u6587\u4ef6\u5185\u5bb9\uff0c\u4e0d\u6307\u5b9a\u5219\u4e0d\u4f1a\u56de\u8c03\u3002\u6682\u4ec5\u652f\u6301 mp3 \u683c\u5f0f\u3002")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"numberOfChannels"),(0,l.kt)("td",null,(0,l.kt)("code",null,"1 | 2")),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u5f55\u97f3\u901a\u9053\u6570")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"sampleRate"),(0,l.kt)("td",null,(0,l.kt)("code",null,"8000 | 11025 | 12000 | 16000 | 22050 | 24000 | 32000 | 44100 | 48000")),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u91c7\u6837\u7387")))),(0,l.kt)("h3",{id:"audiosource"},"audioSource"),(0,l.kt)("p",null,"\u6307\u5b9a\u5f55\u97f3\u7684\u97f3\u9891\u8f93\u5165\u6e90"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"\u53c2\u6570"),(0,l.kt)("th",null,"\u8bf4\u660e"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"auto"),(0,l.kt)("td",null,"\u81ea\u52a8\u8bbe\u7f6e\uff0c\u9ed8\u8ba4\u4f7f\u7528\u624b\u673a\u9ea6\u514b\u98ce\uff0c\u63d2\u4e0a\u8033\u9ea6\u540e\u81ea\u52a8\u5207\u6362\u4f7f\u7528\u8033\u673a\u9ea6\u514b\u98ce\uff0c\u6240\u6709\u5e73\u53f0\u9002\u7528")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"buildInMic"),(0,l.kt)("td",null,"\u624b\u673a\u9ea6\u514b\u98ce\uff0c\u4ec5\u9650 iOS")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"headsetMic"),(0,l.kt)("td",null,"\u8033\u673a\u9ea6\u514b\u98ce\uff0c\u4ec5\u9650 iOS")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"mic"),(0,l.kt)("td",null,"\u9ea6\u514b\u98ce\uff08\u6ca1\u63d2\u8033\u9ea6\u65f6\u662f\u624b\u673a\u9ea6\u514b\u98ce\uff0c\u63d2\u8033\u9ea6\u65f6\u662f\u8033\u673a\u9ea6\u514b\u98ce\uff09\uff0c\u4ec5\u9650 Android")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"camcorder"),(0,l.kt)("td",null,"\u540c mic\uff0c\u9002\u7528\u4e8e\u5f55\u5236\u97f3\u89c6\u9891\u5185\u5bb9\uff0c\u4ec5\u9650 Android")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"voice_communication"),(0,l.kt)("td",null,"\u540c mic\uff0c\u9002\u7528\u4e8e\u5b9e\u65f6\u6c9f\u901a\uff0c\u4ec5\u9650 Android")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"voice_recognition"),(0,l.kt)("td",null,"\u540c mic\uff0c\u9002\u7528\u4e8e\u8bed\u97f3\u8bc6\u522b\uff0c\u4ec5\u9650 Android")))),(0,l.kt)("h3",{id:"format"},"format"),(0,l.kt)("p",null,"\u97f3\u9891\u683c\u5f0f"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"\u53c2\u6570"),(0,l.kt)("th",null,"\u8bf4\u660e"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"mp3"),(0,l.kt)("td",null,"mp3 \u683c\u5f0f")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"aac"),(0,l.kt)("td",null,"aac \u683c\u5f0f")))),(0,l.kt)("h3",{id:"numberofchannels"},"numberOfChannels"),(0,l.kt)("p",null,"\u5f55\u97f3\u901a\u9053\u6570"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"\u53c2\u6570"),(0,l.kt)("th",null,"\u8bf4\u660e"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"1"),(0,l.kt)("td",null,"1 \u4e2a\u901a\u9053")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"2"),(0,l.kt)("td",null,"2 \u4e2a\u901a\u9053")))),(0,l.kt)("h3",{id:"samplerate"},"sampleRate"),(0,l.kt)("p",null,"\u91c7\u6837\u7387"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"\u53c2\u6570"),(0,l.kt)("th",null,"\u8bf4\u660e"),(0,l.kt)("th",null,"\u7f16\u7801\u7801\u7387"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"8000"),(0,l.kt)("td",null,"8000 \u91c7\u6837\u7387"),(0,l.kt)("td",null,(0,l.kt)("code",null,"16000 ~ 48000"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,"11025"),(0,l.kt)("td",null,"11025 \u91c7\u6837\u7387"),(0,l.kt)("td",null,(0,l.kt)("code",null,"16000 ~ 48000"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,"12000"),(0,l.kt)("td",null,"12000 \u91c7\u6837\u7387"),(0,l.kt)("td",null,(0,l.kt)("code",null,"24000 ~ 64000"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,"16000"),(0,l.kt)("td",null,"16000 \u91c7\u6837\u7387"),(0,l.kt)("td",null,(0,l.kt)("code",null,"24000 ~ 96000"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,"22050"),(0,l.kt)("td",null,"22050 \u91c7\u6837\u7387"),(0,l.kt)("td",null,(0,l.kt)("code",null,"32000 ~ 128000"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,"24000"),(0,l.kt)("td",null,"24000 \u91c7\u6837\u7387"),(0,l.kt)("td",null,(0,l.kt)("code",null,"32000 ~ 128000"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,"32000"),(0,l.kt)("td",null,"32000 \u91c7\u6837\u7387"),(0,l.kt)("td",null,(0,l.kt)("code",null,"48000 ~ 192000"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,"44100"),(0,l.kt)("td",null,"44100 \u91c7\u6837\u7387"),(0,l.kt)("td",null,(0,l.kt)("code",null,"64000 ~ 320000"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,"48000"),(0,l.kt)("td",null,"48000 \u91c7\u6837\u7387"),(0,l.kt)("td",null,(0,l.kt)("code",null,"64000 ~ 320000"))))),(0,l.kt)("h2",{id:"api-\u652f\u6301\u5ea6-12"},"API \u652f\u6301\u5ea6"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"API"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,l.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,l.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"RecorderManager.onError"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"RecorderManager.onFrameRecorded"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"RecorderManager.onInterruptionBegin"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"RecorderManager.onInterruptionEnd"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"RecorderManager.onPause"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"RecorderManager.onResume"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"RecorderManager.onStart"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"RecorderManager.onStop"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"RecorderManager.pause"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"RecorderManager.resume"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"RecorderManager.start"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"RecorderManager.stop"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")))))}c.isMDXComponent=!0}}]);