"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[17740],{3905:function(e,t,a){a.d(t,{Zo:function(){return k},kt:function(){return m}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),o=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},k=function(e){var t=o(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,k=p(e,["components","mdxType","originalType","parentName"]),d=o(a),m=r,u=d["".concat(c,".").concat(m)]||d[m]||s[m]||l;return a?n.createElement(u,i(i({ref:t},k),{},{components:a})):n.createElement(u,i({ref:t},k))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var o=2;o<l;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},68297:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return o},toc:function(){return k},default:function(){return d}});var n=a(83117),r=a(80102),l=(a(67294),a(3905)),i=["components"],p={title:"RequestTask",sidebar_label:"RequestTask"},c=void 0,o={unversionedId:"apis/network/request/RequestTask",id:"apis/network/request/RequestTask",title:"RequestTask",description:"\u7f51\u7edc\u8bf7\u6c42\u4efb\u52a1\u5bf9\u8c61",source:"@site/docs/apis/network/request/RequestTask.md",sourceDirName:"apis/network/request",slug:"/apis/network/request/RequestTask",permalink:"/taro/docs/next/apis/network/request/RequestTask",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/apis/network/request/RequestTask.md",tags:[],version:"current",frontMatter:{title:"RequestTask",sidebar_label:"RequestTask"},sidebar:"API",previous:{title:"request",permalink:"/taro/docs/next/apis/network/request/"},next:{title:"addInterceptor",permalink:"/taro/docs/next/apis/network/request/addInterceptor"}},k=[{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",children:[{value:"abort",id:"abort",children:[],level:3},{value:"onHeadersReceived",id:"onheadersreceived",children:[],level:3},{value:"offHeadersReceived",id:"offheadersreceived",children:[],level:3},{value:"onChunkReceived",id:"onchunkreceived",children:[],level:3},{value:"offChunkReceived",id:"offchunkreceived",children:[],level:3}],level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"onHeadersReceived",id:"onheadersreceived-1",children:[{value:"Callback",id:"callback",children:[],level:4},{value:"CallbackResult",id:"callbackresult",children:[],level:4}],level:3},{value:"onChunkReceived",id:"onchunkreceived-1",children:[{value:"Callback",id:"callback-1",children:[],level:4},{value:"CallbackResult",id:"callbackresult-1",children:[],level:4},{value:"Response",id:"response",children:[],level:4}],level:3}],level:2},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[{value:"\u793a\u4f8b 1",id:"\u793a\u4f8b-1",children:[],level:3},{value:"\u793a\u4f8b 2",id:"\u793a\u4f8b-2",children:[],level:3},{value:"\u793a\u4f8b 3",id:"\u793a\u4f8b-3",children:[],level:3}],level:2},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[],level:2}],s={toc:k};function d(e){var t=e.components,p=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},s,p,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u7f51\u7edc\u8bf7\u6c42\u4efb\u52a1\u5bf9\u8c61"),(0,l.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,l.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:a(16710).Z,className:"icon_platform",width:"25px"})," ",(0,l.kt)("img",{title:"\u767e\u5ea6\u5c0f\u7a0b\u5e8f",src:a(94882).Z,className:"icon_platform",width:"25px"})," ",(0,l.kt)("img",{title:"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f",src:a(44090).Z,className:"icon_platform",width:"25px"})," ",(0,l.kt)("img",{title:"\u5b57\u8282\u8df3\u52a8\u5c0f\u7a0b\u5e8f",src:a(62286).Z,className:"icon_platform",width:"25px"})," ",(0,l.kt)("img",{title:"QQ \u5c0f\u7a0b\u5e8f",src:a(82626).Z,className:"icon_platform",width:"25px"})," ",(0,l.kt)("img",{title:"H5",src:a(5030).Z,className:"icon_platform",width:"25px"})," ",(0,l.kt)("img",{title:"React Native",src:a(73555).Z,className:"icon_platform",width:"25px"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/network/request/RequestTask.html"},"\u53c2\u8003\u6587\u6863"))),(0,l.kt)("h2",{id:"\u65b9\u6cd5"},"\u65b9\u6cd5"),(0,l.kt)("h3",{id:"abort"},"abort"),(0,l.kt)("p",null,"\u4e2d\u65ad\u8bf7\u6c42\u4efb\u52a1"),(0,l.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,l.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:a(16710).Z,className:"icon_platform",width:"25px"})," ",(0,l.kt)("img",{title:"H5",src:a(5030).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,l.kt)("img",{title:"React Native",src:a(73555).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/network/request/RequestTask.abort.html"},"\u53c2\u8003\u6587\u6863"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"() => void\n")),(0,l.kt)("h3",{id:"onheadersreceived"},"onHeadersReceived"),(0,l.kt)("p",null,"\u76d1\u542c HTTP Response Header \u4e8b\u4ef6\u3002\u4f1a\u6bd4\u8bf7\u6c42\u5b8c\u6210\u4e8b\u4ef6\u66f4\u65e9"),(0,l.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,l.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:a(16710).Z,className:"icon_platform",width:"25px"})," ",(0,l.kt)("img",{title:"H5",src:a(5030).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,l.kt)("img",{title:"React Native",src:a(73555).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/network/request/RequestTask.onHeadersReceived.html"},"\u53c2\u8003\u6587\u6863"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"(callback: Callback) => void\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"callback"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Callback")),(0,l.kt)("td",{parentName:"tr",align:null},"HTTP Response Header \u4e8b\u4ef6\u7684\u56de\u8c03\u51fd\u6570")))),(0,l.kt)("h3",{id:"offheadersreceived"},"offHeadersReceived"),(0,l.kt)("p",null,"\u53d6\u6d88\u76d1\u542c HTTP Response Header \u4e8b\u4ef6"),(0,l.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,l.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:a(16710).Z,className:"icon_platform",width:"25px"})," ",(0,l.kt)("img",{title:"H5",src:a(5030).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,l.kt)("img",{title:"React Native",src:a(73555).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/network/request/RequestTask.offHeadersReceived.html"},"\u53c2\u8003\u6587\u6863"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"(callback: Callback) => void\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"callback"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Callback")),(0,l.kt)("td",{parentName:"tr",align:null},"HTTP Response Header \u4e8b\u4ef6\u7684\u56de\u8c03\u51fd\u6570")))),(0,l.kt)("h3",{id:"onchunkreceived"},"onChunkReceived"),(0,l.kt)("p",null,"\u76d1\u542c Transfer-Encoding Chunk Received \u4e8b\u4ef6\u3002\u5f53\u63a5\u6536\u5230\u65b0\u7684chunk\u65f6\u89e6\u53d1\u3002"),(0,l.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,l.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:a(16710).Z,className:"icon_platform",width:"25px"})," ",(0,l.kt)("img",{title:"H5",src:a(5030).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,l.kt)("img",{title:"React Native",src:a(73555).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/network/request/RequestTask.onChunkReceived.html"},"\u53c2\u8003\u6587\u6863"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"(callback: Callback) => void\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"callback"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Callback")),(0,l.kt)("td",{parentName:"tr",align:null},"Transfer-Encoding Chunk Received \u4e8b\u4ef6\u7684\u56de\u8c03\u51fd\u6570")))),(0,l.kt)("h3",{id:"offchunkreceived"},"offChunkReceived"),(0,l.kt)("p",null,"\u76d1\u542c Transfer-Encoding Chunk Received \u4e8b\u4ef6\u3002\u5f53\u63a5\u6536\u5230\u65b0\u7684chunk\u65f6\u89e6\u53d1\u3002"),(0,l.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,l.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:a(16710).Z,className:"icon_platform",width:"25px"})," ",(0,l.kt)("img",{title:"H5",src:a(5030).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,l.kt)("img",{title:"React Native",src:a(73555).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/network/request/RequestTask.offChunkReceived.html"},"\u53c2\u8003\u6587\u6863"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"(callback: Callback) => void\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"callback"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Callback")),(0,l.kt)("td",{parentName:"tr",align:null},"Transfer-Encoding Chunk Received \u4e8b\u4ef6\u7684\u56de\u8c03\u51fd\u6570")))),(0,l.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,l.kt)("h3",{id:"onheadersreceived-1"},"onHeadersReceived"),(0,l.kt)("h4",{id:"callback"},"Callback"),(0,l.kt)("p",null,"HTTP Response Header \u4e8b\u4ef6\u7684\u56de\u8c03\u51fd\u6570"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"(result: CallbackResult) => void\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"result"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"CallbackResult"))))),(0,l.kt)("h4",{id:"callbackresult"},"CallbackResult"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"header"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"TaroGeneral.IAnyObject")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f00\u53d1\u8005\u670d\u52a1\u5668\u8fd4\u56de\u7684 HTTP Response Header")))),(0,l.kt)("h3",{id:"onchunkreceived-1"},"onChunkReceived"),(0,l.kt)("h4",{id:"callback-1"},"Callback"),(0,l.kt)("p",null,"Transfer-Encoding Chunk Received \u4e8b\u4ef6\u7684\u56de\u8c03\u51fd\u6570"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"(result: CallbackResult) => void\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"result"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"CallbackResult"))))),(0,l.kt)("h4",{id:"callbackresult-1"},"CallbackResult"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"res"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Response")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f00\u53d1\u8005\u670d\u52a1\u5668\u6bcf\u6b21\u8fd4\u56de\u65b0 chunk \u65f6\u7684 Response")))),(0,l.kt)("h4",{id:"response"},"Response"),(0,l.kt)("p",null,"\u5f00\u53d1\u8005\u670d\u52a1\u5668\u6bcf\u6b21\u8fd4\u56de\u65b0 chunk \u65f6\u7684 Response"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"data"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ArrayBuffer")),(0,l.kt)("td",{parentName:"tr",align:null},"\u8fd4\u56de\u7684chunk buffer")))),(0,l.kt)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),(0,l.kt)("h3",{id:"\u793a\u4f8b-1"},"\u793a\u4f8b 1"),(0,l.kt)("p",null,"\u56de\u8c03\u51fd\u6570(Callback)\u7528\u6cd5\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"const requestTask = Taro.request({\n  url: 'test.php', //\u4ec5\u4e3a\u793a\u4f8b\uff0c\u5e76\u975e\u771f\u5b9e\u7684\u63a5\u53e3\u5730\u5740\n  data: {\n    x: '' ,\n    y: ''\n  },\n  header: {\n    'content-type': 'application/json' // \u9ed8\u8ba4\u503c\n  },\n  success: function (res) {\n    console.log(res.data)\n  }\n})\nrequestTask.abort()\n")),(0,l.kt)("h3",{id:"\u793a\u4f8b-2"},"\u793a\u4f8b 2"),(0,l.kt)("p",null,"Promise \u7528\u6cd5\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"const requestTask = Taro.request({\n  url: 'test.php', //\u4ec5\u4e3a\u793a\u4f8b\uff0c\u5e76\u975e\u771f\u5b9e\u7684\u63a5\u53e3\u5730\u5740\n  data: {\n    x: '' ,\n    y: ''\n  },\n  header: {\n    'content-type': 'application/json' // \u9ed8\u8ba4\u503c\n  },\n  success: function (res) {\n    console.log(res.data)\n  }\n})\nrequestTask.then(res => {\n  console.log(res.data)\n})\nrequestTask.abort()\n")),(0,l.kt)("h3",{id:"\u793a\u4f8b-3"},"\u793a\u4f8b 3"),(0,l.kt)("p",null,"async/await \u7528\u6cd5\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"const requestTask = Taro.request(params)\nconst res = await requestTask\nrequestTask.abort()\n")),(0,l.kt)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"API"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u767e\u5ea6\u5c0f\u7a0b\u5e8f"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u5b57\u8282\u8df3\u52a8\u5c0f\u7a0b\u5e8f"),(0,l.kt)("th",{parentName:"tr",align:"center"},"QQ \u5c0f\u7a0b\u5e8f"),(0,l.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,l.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"RequestTask"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"RequestTask.abort"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"RequestTask.onHeadersReceived"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"RequestTask.offHeadersReceived"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"RequestTask.onChunkReceived"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"RequestTask.offChunkReceived"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"})))))}d.isMDXComponent=!0},44090:function(e,t,a){t.Z=a.p+"assets/images/alipay-ee5545de747ce1ad6e17faec10358975.png"},5030:function(e,t,a){t.Z=a.p+"assets/images/h5-81f73c447874b6528e84ee395bece16e.png"},82626:function(e,t,a){t.Z=a.p+"assets/images/qq-3f77e6fbb490848ab8aa8183e9399110.png"},73555:function(e,t,a){t.Z=a.p+"assets/images/rn-ecec68ba194e4b5e9fc3e853cc00c569.png"},94882:function(e,t,a){t.Z=a.p+"assets/images/swan-566f56d360909d0457073b67b8f48958.png"},62286:function(e,t,a){t.Z=a.p+"assets/images/tt-f4ec120e570f924e7ef763dcaf7fc69d.png"},16710:function(e,t,a){t.Z=a.p+"assets/images/weapp-0e8fbe2d5eb3676de4961b54ee7f5ba4.png"}}]);