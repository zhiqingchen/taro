(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[37119],{22122:function(t,e,l){"use strict";function n(){return(n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var l=arguments[e];for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n])}return t}).apply(this,arguments)}l.d(e,{Z:function(){return n}})},19756:function(t,e,l){"use strict";function n(t,e){if(null==t)return{};var l,n,r={},u=Object.keys(t);for(n=0;n<u.length;n++)l=u[n],e.indexOf(l)>=0||(r[l]=t[l]);return r}l.d(e,{Z:function(){return n}})},3905:function(t,e,l){"use strict";l.d(e,{Zo:function(){return c},kt:function(){return p}});var n=l(67294);function r(t,e,l){return e in t?Object.defineProperty(t,e,{value:l,enumerable:!0,configurable:!0,writable:!0}):t[e]=l,t}function u(t,e){var l=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),l.push.apply(l,n)}return l}function a(t){for(var e=1;e<arguments.length;e++){var l=null!=arguments[e]?arguments[e]:{};e%2?u(Object(l),!0).forEach((function(e){r(t,e,l[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(l)):u(Object(l)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(l,e))}))}return t}function o(t,e){if(null==t)return{};var l,n,r=function(t,e){if(null==t)return{};var l,n,r={},u=Object.keys(t);for(n=0;n<u.length;n++)l=u[n],e.indexOf(l)>=0||(r[l]=t[l]);return r}(t,e);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(t);for(n=0;n<u.length;n++)l=u[n],e.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(t,l)&&(r[l]=t[l])}return r}var i=n.createContext({}),d=function(t){var e=n.useContext(i),l=e;return t&&(l="function"==typeof t?t(e):a(a({},e),t)),l},c=function(t){var e=d(t.components);return n.createElement(i.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var l=t.components,r=t.mdxType,u=t.originalType,i=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),s=d(l),p=r,m=s["".concat(i,".").concat(p)]||s[p]||k[p]||u;return l?n.createElement(m,a(a({ref:e},c),{},{components:l})):n.createElement(m,a({ref:e},c))}));function p(t,e){var l=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var u=l.length,a=new Array(u);a[0]=s;var o={};for(var i in e)hasOwnProperty.call(e,i)&&(o[i]=e[i]);o.originalType=t,o.mdxType="string"==typeof t?t:r,a[1]=o;for(var d=2;d<u;d++)a[d]=l[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,l)}s.displayName="MDXCreateElement"},70433:function(t,e,l){"use strict";l.r(e),l.d(e,{frontMatter:function(){return a},metadata:function(){return o},toc:function(){return i},default:function(){return c}});var n=l(22122),r=l(19756),u=(l(67294),l(3905)),a={title:"Taro.chooseMedia(option)",sidebar_label:"chooseMedia"},o={unversionedId:"apis/media/image/chooseMedia",id:"apis/media/image/chooseMedia",isDocsHomePage:!1,title:"Taro.chooseMedia(option)",description:"\u62cd\u6444\u6216\u4ece\u624b\u673a\u76f8\u518c\u4e2d\u9009\u62e9\u56fe\u7247\u6216\u89c6\u9891\u3002",source:"@site/docs/apis/media/image/chooseMedia.md",sourceDirName:"apis/media/image",slug:"/apis/media/image/chooseMedia",permalink:"/taro/docs/next/apis/media/image/chooseMedia",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/apis/media/image/chooseMedia.md",version:"current",sidebar_label:"chooseMedia",frontMatter:{title:"Taro.chooseMedia(option)",sidebar_label:"chooseMedia"}},i=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Option",id:"option",children:[]},{value:"SuccessCallbackResult",id:"successcallbackresult",children:[]},{value:"ChooseMedia",id:"choosemedia",children:[]},{value:"mediaType",id:"mediatype",children:[]},{value:"sourceType",id:"sourcetype",children:[]},{value:"camera",id:"camera",children:[]}]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],d={toc:i};function c(t){var e=t.components,l=(0,r.Z)(t,["components"]);return(0,u.kt)("wrapper",(0,n.Z)({},d,l,{components:e,mdxType:"MDXLayout"}),(0,u.kt)("p",null,"\u62cd\u6444\u6216\u4ece\u624b\u673a\u76f8\u518c\u4e2d\u9009\u62e9\u56fe\u7247\u6216\u89c6\u9891\u3002"),(0,u.kt)("blockquote",null,(0,u.kt)("p",{parentName:"blockquote"},(0,u.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/media/video/wx.chooseMedia.html"},"\u53c2\u8003\u6587\u6863"))),(0,u.kt)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-tsx"},"(option: Option) => Promise<SuccessCallbackResult>\n")),(0,u.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,u.kt)("h3",{id:"option"},"Option"),(0,u.kt)("table",null,(0,u.kt)("thead",null,(0,u.kt)("tr",null,(0,u.kt)("th",null,"\u53c2\u6570"),(0,u.kt)("th",null,"\u7c7b\u578b"),(0,u.kt)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),(0,u.kt)("th",null,"\u8bf4\u660e"))),(0,u.kt)("tbody",null,(0,u.kt)("tr",null,(0,u.kt)("td",null,"count"),(0,u.kt)("td",null,(0,u.kt)("code",null,"number")),(0,u.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,u.kt)("td",null,"\u6700\u591a\u53ef\u4ee5\u9009\u62e9\u7684\u6587\u4ef6\u4e2a\u6570")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"mediaType"),(0,u.kt)("td",null,(0,u.kt)("code",null,'("video" | "image")[]')),(0,u.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,u.kt)("td",null,"\u6587\u4ef6\u7c7b\u578b")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"sourceType"),(0,u.kt)("td",null,(0,u.kt)("code",null,'("album" | "camera")[]')),(0,u.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,u.kt)("td",null,"\u56fe\u7247\u548c\u89c6\u9891\u9009\u62e9\u7684\u6765\u6e90")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"maxDuration"),(0,u.kt)("td",null,(0,u.kt)("code",null,"number")),(0,u.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,u.kt)("td",null,"\u62cd\u6444\u89c6\u9891\u6700\u957f\u62cd\u6444\u65f6\u95f4\uff0c\u5355\u4f4d\u79d2\u3002\u65f6\u95f4\u8303\u56f4\u4e3a 3s \u81f3 30s \u4e4b\u95f4")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"sizeType"),(0,u.kt)("td",null,(0,u.kt)("code",null,'("original" | "compressed")[]')),(0,u.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,u.kt)("td",null,"\u4ec5\u5bf9 mediaType \u4e3a image \u65f6\u6709\u6548\uff0c\u662f\u5426\u538b\u7f29\u6240\u9009\u6587\u4ef6")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"camera"),(0,u.kt)("td",null,(0,u.kt)("code",null,"string")),(0,u.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,u.kt)("td",null,"\u4ec5\u5728 sourceType \u4e3a camera \u65f6\u751f\u6548\uff0c\u4f7f\u7528\u524d\u7f6e\u6216\u540e\u7f6e\u6444\u50cf\u5934")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"fail"),(0,u.kt)("td",null,(0,u.kt)("code",null,"(res: CallbackResult) => void")),(0,u.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,u.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"success"),(0,u.kt)("td",null,(0,u.kt)("code",null,"(result: SuccessCallbackResult) => void")),(0,u.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,u.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))),(0,u.kt)("h3",{id:"successcallbackresult"},"SuccessCallbackResult"),(0,u.kt)("table",null,(0,u.kt)("thead",null,(0,u.kt)("tr",null,(0,u.kt)("th",null,"\u53c2\u6570"),(0,u.kt)("th",null,"\u7c7b\u578b"),(0,u.kt)("th",null,"\u8bf4\u660e"))),(0,u.kt)("tbody",null,(0,u.kt)("tr",null,(0,u.kt)("td",null,"tempFiles"),(0,u.kt)("td",null,(0,u.kt)("code",null,"ChooseMedia[]")),(0,u.kt)("td",null,"\u672c\u5730\u4e34\u65f6\u6587\u4ef6\u5217\u8868")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"type"),(0,u.kt)("td",null,(0,u.kt)("code",null,"string")),(0,u.kt)("td",null,"\u6587\u4ef6\u7c7b\u578b\uff0c\u6709\u6548\u503c\u6709 image \u3001video")))),(0,u.kt)("h3",{id:"choosemedia"},"ChooseMedia"),(0,u.kt)("p",null,"\u672c\u5730\u4e34\u65f6\u6587\u4ef6\u5217\u8868"),(0,u.kt)("table",null,(0,u.kt)("thead",null,(0,u.kt)("tr",null,(0,u.kt)("th",null,"\u53c2\u6570"),(0,u.kt)("th",null,"\u7c7b\u578b"),(0,u.kt)("th",null,"\u8bf4\u660e"))),(0,u.kt)("tbody",null,(0,u.kt)("tr",null,(0,u.kt)("td",null,"tempFilePath"),(0,u.kt)("td",null,(0,u.kt)("code",null,"string")),(0,u.kt)("td",null,"\u672c\u5730\u4e34\u65f6\u6587\u4ef6\u8def\u5f84 (\u672c\u5730\u8def\u5f84)")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"size"),(0,u.kt)("td",null,(0,u.kt)("code",null,"number")),(0,u.kt)("td",null,"\u672c\u5730\u4e34\u65f6\u6587\u4ef6\u5927\u5c0f\uff0c\u5355\u4f4d B")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"duration"),(0,u.kt)("td",null,(0,u.kt)("code",null,"number")),(0,u.kt)("td",null,"\u89c6\u9891\u7684\u65f6\u95f4\u957f\u5ea6")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"height"),(0,u.kt)("td",null,(0,u.kt)("code",null,"number")),(0,u.kt)("td",null,"\u89c6\u9891\u7684\u9ad8\u5ea6")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"width"),(0,u.kt)("td",null,(0,u.kt)("code",null,"number")),(0,u.kt)("td",null,"\u89c6\u9891\u7684\u5bbd\u5ea6")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"thumbTempFilePath"),(0,u.kt)("td",null,(0,u.kt)("code",null,"string")),(0,u.kt)("td",null,"\u89c6\u9891\u7f29\u7565\u56fe\u4e34\u65f6\u6587\u4ef6\u8def\u5f84")))),(0,u.kt)("h3",{id:"mediatype"},"mediaType"),(0,u.kt)("table",null,(0,u.kt)("thead",null,(0,u.kt)("tr",null,(0,u.kt)("th",null,"\u53c2\u6570"),(0,u.kt)("th",null,"\u8bf4\u660e"))),(0,u.kt)("tbody",null,(0,u.kt)("tr",null,(0,u.kt)("td",null,"video"),(0,u.kt)("td",null,"\u53ea\u80fd\u62cd\u6444\u89c6\u9891\u6216\u4ece\u76f8\u518c\u9009\u62e9\u89c6\u9891")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"image"),(0,u.kt)("td",null,"\u53ea\u80fd\u62cd\u6444\u56fe\u7247\u6216\u4ece\u76f8\u518c\u9009\u62e9\u56fe\u7247")))),(0,u.kt)("h3",{id:"sourcetype"},"sourceType"),(0,u.kt)("table",null,(0,u.kt)("thead",null,(0,u.kt)("tr",null,(0,u.kt)("th",null,"\u53c2\u6570"),(0,u.kt)("th",null,"\u8bf4\u660e"))),(0,u.kt)("tbody",null,(0,u.kt)("tr",null,(0,u.kt)("td",null,"album"),(0,u.kt)("td",null,"\u4ece\u76f8\u518c\u9009\u62e9")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"camera"),(0,u.kt)("td",null,"\u4f7f\u7528\u76f8\u673a\u62cd\u6444")))),(0,u.kt)("h3",{id:"camera"},"camera"),(0,u.kt)("table",null,(0,u.kt)("thead",null,(0,u.kt)("tr",null,(0,u.kt)("th",null,"\u53c2\u6570"),(0,u.kt)("th",null,"\u8bf4\u660e"))),(0,u.kt)("tbody",null,(0,u.kt)("tr",null,(0,u.kt)("td",null,"back"),(0,u.kt)("td",null,"\u4f7f\u7528\u540e\u7f6e\u6444\u50cf\u5934")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"front"),(0,u.kt)("td",null,"\u4f7f\u7528\u524d\u7f6e\u6444\u50cf\u5934")))),(0,u.kt)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-tsx"},"Taro.chooseMedia({\n  count: 9,\n  mediaType: ['image','video'],\n  sourceType: ['album', 'camera'],\n  maxDuration: 30,\n  camera: 'back',\n  success: (res) => {\n    console.log(res.tempFiles)\n    console.log(res.type)\n  }\n})\n")),(0,u.kt)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),(0,u.kt)("table",null,(0,u.kt)("thead",{parentName:"table"},(0,u.kt)("tr",{parentName:"thead"},(0,u.kt)("th",{parentName:"tr",align:"center"},"API"),(0,u.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,u.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,u.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,u.kt)("tbody",{parentName:"table"},(0,u.kt)("tr",{parentName:"tbody"},(0,u.kt)("td",{parentName:"tr",align:"center"},"Taro.chooseMedia"),(0,u.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,u.kt)("td",{parentName:"tr",align:"center"}),(0,u.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")))))}c.isMDXComponent=!0}}]);