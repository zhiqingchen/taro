"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[24104],{3905:function(t,e,l){l.d(e,{Zo:function(){return k},kt:function(){return p}});var n=l(67294);function r(t,e,l){return e in t?Object.defineProperty(t,e,{value:l,enumerable:!0,configurable:!0,writable:!0}):t[e]=l,t}function o(t,e){var l=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),l.push.apply(l,n)}return l}function u(t){for(var e=1;e<arguments.length;e++){var l=null!=arguments[e]?arguments[e]:{};e%2?o(Object(l),!0).forEach((function(e){r(t,e,l[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(l)):o(Object(l)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(l,e))}))}return t}function a(t,e){if(null==t)return{};var l,n,r=function(t,e){if(null==t)return{};var l,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)l=o[n],e.indexOf(l)>=0||(r[l]=t[l]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)l=o[n],e.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(t,l)&&(r[l]=t[l])}return r}var d=n.createContext({}),i=function(t){var e=n.useContext(d),l=e;return t&&(l="function"==typeof t?t(e):u(u({},e),t)),l},k=function(t){var e=i(t.components);return n.createElement(d.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var l=t.components,r=t.mdxType,o=t.originalType,d=t.parentName,k=a(t,["components","mdxType","originalType","parentName"]),c=i(l),p=r,m=c["".concat(d,".").concat(p)]||c[p]||s[p]||o;return l?n.createElement(m,u(u({ref:e},k),{},{components:l})):n.createElement(m,u({ref:e},k))}));function p(t,e){var l=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=l.length,u=new Array(o);u[0]=c;var a={};for(var d in e)hasOwnProperty.call(e,d)&&(a[d]=e[d]);a.originalType=t,a.mdxType="string"==typeof t?t:r,u[1]=a;for(var i=2;i<o;i++)u[i]=l[i];return n.createElement.apply(null,u)}return n.createElement.apply(null,l)}c.displayName="MDXCreateElement"},27233:function(t,e,l){l.r(e),l.d(e,{frontMatter:function(){return a},contentTitle:function(){return d},metadata:function(){return i},toc:function(){return k},default:function(){return c}});var n=l(83117),r=l(80102),o=(l(67294),l(3905)),u=["components"],a={title:"Taro.getSystemInfo(res)",sidebar_label:"getSystemInfo"},d=void 0,i={unversionedId:"apis/base/system/getSystemInfo",id:"version-2.x/apis/base/system/getSystemInfo",isDocsHomePage:!1,title:"Taro.getSystemInfo(res)",description:"\u83b7\u53d6\u7cfb\u7edf\u4fe1\u606f\uff0c\u652f\u6301 Promise \u5316\u4f7f\u7528\u3002",source:"@site/versioned_docs/version-2.x/apis/base/system/getSystemInfo.md",sourceDirName:"apis/base/system",slug:"/apis/base/system/getSystemInfo",permalink:"/taro/en/docs/2.x/apis/base/system/getSystemInfo",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-2.x/apis/base/system/getSystemInfo.md",tags:[],version:"2.x",frontMatter:{title:"Taro.getSystemInfo(res)",sidebar_label:"getSystemInfo"},sidebar:"version-2.x/API",previous:{title:"arrayBufferToBase64",permalink:"/taro/en/docs/2.x/apis/base/arrayBufferToBase64"},next:{title:"getSystemInfoSync",permalink:"/taro/en/docs/2.x/apis/base/system/getSystemInfoSync"}},k=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[],level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Option",id:"option",children:[],level:3},{value:"Result",id:"result",children:[],level:3}],level:2},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[{value:"\u793a\u4f8b 1",id:"\u793a\u4f8b-1",children:[],level:3},{value:"\u793a\u4f8b 2",id:"\u793a\u4f8b-2",children:[],level:3}],level:2},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[],level:2}],s={toc:k};function c(t){var e=t.components,l=(0,r.Z)(t,u);return(0,o.kt)("wrapper",(0,n.Z)({},s,l,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u83b7\u53d6\u7cfb\u7edf\u4fe1\u606f\uff0c\u652f\u6301 ",(0,o.kt)("inlineCode",{parentName:"p"},"Promise")," \u5316\u4f7f\u7528\u3002"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/system/system-info/wx.getSystemInfo.html"},"\u53c2\u8003\u6587\u6863"))),(0,o.kt)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"(res?: Option) => Promise<Result>\n")),(0,o.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,o.kt)("h3",{id:"option"},"Option"),(0,o.kt)("table",null,(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"\u53c2\u6570"),(0,o.kt)("th",null,"\u7c7b\u578b"),(0,o.kt)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),(0,o.kt)("th",null,"\u8bf4\u660e"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"complete"),(0,o.kt)("td",null,(0,o.kt)("code",null,"(res: any) => void")),(0,o.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,o.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"fail"),(0,o.kt)("td",null,(0,o.kt)("code",null,"(res: any) => void")),(0,o.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,o.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"success"),(0,o.kt)("td",null,(0,o.kt)("code",null,"(res: Result) => void")),(0,o.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,o.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))),(0,o.kt)("h3",{id:"result"},"Result"),(0,o.kt)("p",null,"\u6ce8\u610f\uff1a",(0,o.kt)("strong",{parentName:"p"},"H5")," \u7aef\u4e0d\u652f\u6301 version\u3001statusBarHeight\u3001fontSizeSetting\u3001SDKVersion"),(0,o.kt)("table",null,(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"\u53c2\u6570"),(0,o.kt)("th",null,"\u7c7b\u578b"),(0,o.kt)("th",null,"\u8bf4\u660e"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"SDKVersion"),(0,o.kt)("td",null,(0,o.kt)("code",null,"string")),(0,o.kt)("td",null,"\u5ba2\u6237\u7aef\u57fa\u7840\u5e93\u7248\u672c")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"albumAuthorized"),(0,o.kt)("td",null,(0,o.kt)("code",null,"boolean")),(0,o.kt)("td",null,"\u5141\u8bb8\u5fae\u4fe1\u4f7f\u7528\u76f8\u518c\u7684\u5f00\u5173\uff08\u4ec5 iOS \u6709\u6548\uff09")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"benchmarkLevel"),(0,o.kt)("td",null,(0,o.kt)("code",null,"number")),(0,o.kt)("td",null,"\u8bbe\u5907\u6027\u80fd\u7b49\u7ea7\uff08\u4ec5Android\u5c0f\u6e38\u620f\uff09\u3002\u53d6\u503c\u4e3a\uff1a-2 \u6216 0\uff08\u8be5\u8bbe\u5907\u65e0\u6cd5\u8fd0\u884c\u5c0f\u6e38\u620f\uff09\uff0c-1\uff08\u6027\u80fd\u672a\u77e5\uff09\uff0c>=1\uff08\u8bbe\u5907\u6027\u80fd\u503c\uff0c\u8be5\u503c\u8d8a\u9ad8\uff0c\u8bbe\u5907\u6027\u80fd\u8d8a\u597d\uff0c\u76ee\u524d\u6700\u9ad8\u4e0d\u523050\uff09")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"bluetoothEnabled"),(0,o.kt)("td",null,(0,o.kt)("code",null,"boolean")),(0,o.kt)("td",null,"\u84dd\u7259\u7684\u7cfb\u7edf\u5f00\u5173")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"brand"),(0,o.kt)("td",null,(0,o.kt)("code",null,"string")),(0,o.kt)("td",null,"\u8bbe\u5907\u54c1\u724c")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"cameraAuthorized"),(0,o.kt)("td",null,(0,o.kt)("code",null,"boolean")),(0,o.kt)("td",null,"\u5141\u8bb8\u5fae\u4fe1\u4f7f\u7528\u6444\u50cf\u5934\u7684\u5f00\u5173")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"fontSizeSetting"),(0,o.kt)("td",null,(0,o.kt)("code",null,"number")),(0,o.kt)("td",null,"\u7528\u6237\u5b57\u4f53\u5927\u5c0f\uff08\u5355\u4f4dpx\uff09\u3002\u4ee5\u5fae\u4fe1\u5ba2\u6237\u7aef\u300c\u6211-\u8bbe\u7f6e-\u901a\u7528-\u5b57\u4f53\u5927\u5c0f\u300d\u4e2d\u7684\u8bbe\u7f6e\u4e3a\u51c6")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"language"),(0,o.kt)("td",null,(0,o.kt)("code",null,"string")),(0,o.kt)("td",null,"\u5fae\u4fe1\u8bbe\u7f6e\u7684\u8bed\u8a00")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"locationAuthorized"),(0,o.kt)("td",null,(0,o.kt)("code",null,"boolean")),(0,o.kt)("td",null,"\u5141\u8bb8\u5fae\u4fe1\u4f7f\u7528\u5b9a\u4f4d\u7684\u5f00\u5173")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"locationEnabled"),(0,o.kt)("td",null,(0,o.kt)("code",null,"boolean")),(0,o.kt)("td",null,"\u5730\u7406\u4f4d\u7f6e\u7684\u7cfb\u7edf\u5f00\u5173")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"microphoneAuthorized"),(0,o.kt)("td",null,(0,o.kt)("code",null,"boolean")),(0,o.kt)("td",null,"\u5141\u8bb8\u5fae\u4fe1\u4f7f\u7528\u9ea6\u514b\u98ce\u7684\u5f00\u5173")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"model"),(0,o.kt)("td",null,(0,o.kt)("code",null,"string")),(0,o.kt)("td",null,"\u8bbe\u5907\u578b\u53f7")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"notificationAlertAuthorized"),(0,o.kt)("td",null,(0,o.kt)("code",null,"boolean")),(0,o.kt)("td",null,"\u5141\u8bb8\u5fae\u4fe1\u901a\u77e5\u5e26\u6709\u63d0\u9192\u7684\u5f00\u5173\uff08\u4ec5 iOS \u6709\u6548\uff09")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"notificationAuthorized"),(0,o.kt)("td",null,(0,o.kt)("code",null,"boolean")),(0,o.kt)("td",null,"\u5141\u8bb8\u5fae\u4fe1\u901a\u77e5\u7684\u5f00\u5173")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"notificationBadgeAuthorized"),(0,o.kt)("td",null,(0,o.kt)("code",null,"boolean")),(0,o.kt)("td",null,"\u5141\u8bb8\u5fae\u4fe1\u901a\u77e5\u5e26\u6709\u6807\u8bb0\u7684\u5f00\u5173\uff08\u4ec5 iOS \u6709\u6548\uff09")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"notificationSoundAuthorized"),(0,o.kt)("td",null,(0,o.kt)("code",null,"boolean")),(0,o.kt)("td",null,"\u5141\u8bb8\u5fae\u4fe1\u901a\u77e5\u5e26\u6709\u58f0\u97f3\u7684\u5f00\u5173\uff08\u4ec5 iOS \u6709\u6548\uff09")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"pixelRatio"),(0,o.kt)("td",null,(0,o.kt)("code",null,"number")),(0,o.kt)("td",null,"\u8bbe\u5907\u50cf\u7d20\u6bd4")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"platform"),(0,o.kt)("td",null,(0,o.kt)("code",null,"string")),(0,o.kt)("td",null,"\u5ba2\u6237\u7aef\u5e73\u53f0")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"safeArea"),(0,o.kt)("td",null,(0,o.kt)("code",null,"SafeAreaResult")),(0,o.kt)("td",null,"\u5728\u7ad6\u5c4f\u6b63\u65b9\u5411\u4e0b\u7684\u5b89\u5168\u533a\u57df")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"screenHeight"),(0,o.kt)("td",null,(0,o.kt)("code",null,"number")),(0,o.kt)("td",null,"\u5c4f\u5e55\u9ad8\u5ea6\uff0c\u5355\u4f4dpx")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"screenWidth"),(0,o.kt)("td",null,(0,o.kt)("code",null,"number")),(0,o.kt)("td",null,"\u5c4f\u5e55\u5bbd\u5ea6\uff0c\u5355\u4f4dpx")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"statusBarHeight"),(0,o.kt)("td",null,(0,o.kt)("code",null,"number")),(0,o.kt)("td",null,"\u72b6\u6001\u680f\u7684\u9ad8\u5ea6\uff0c\u5355\u4f4dpx")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"system"),(0,o.kt)("td",null,(0,o.kt)("code",null,"string")),(0,o.kt)("td",null,"\u64cd\u4f5c\u7cfb\u7edf\u53ca\u7248\u672c")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"version"),(0,o.kt)("td",null,(0,o.kt)("code",null,"string")),(0,o.kt)("td",null,"\u5fae\u4fe1\u7248\u672c\u53f7")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"wifiEnabled"),(0,o.kt)("td",null,(0,o.kt)("code",null,"boolean")),(0,o.kt)("td",null,"Wi-Fi \u7684\u7cfb\u7edf\u5f00\u5173")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"windowHeight"),(0,o.kt)("td",null,(0,o.kt)("code",null,"number")),(0,o.kt)("td",null,"\u53ef\u4f7f\u7528\u7a97\u53e3\u9ad8\u5ea6\uff0c\u5355\u4f4dpx")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"windowWidth"),(0,o.kt)("td",null,(0,o.kt)("code",null,"number")),(0,o.kt)("td",null,"\u53ef\u4f7f\u7528\u7a97\u53e3\u5bbd\u5ea6\uff0c\u5355\u4f4dpx")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"errMsg"),(0,o.kt)("td",null,(0,o.kt)("code",null,"string")),(0,o.kt)("td",null,"\u8c03\u7528\u7ed3\u679c")))),(0,o.kt)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),(0,o.kt)("h3",{id:"\u793a\u4f8b-1"},"\u793a\u4f8b 1"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"Taro.getSystemInfo({\n  success: res => console.log(res)\n})\n.then(res => console.log(res))\n")),(0,o.kt)("h3",{id:"\u793a\u4f8b-2"},"\u793a\u4f8b 2"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"Taro.getSystemInfo({\n  success: function (res) {\n    console.log(res.model)\n    console.log(res.pixelRatio)\n    console.log(res.windowWidth)\n    console.log(res.windowHeight)\n    console.log(res.language)\n    console.log(res.version)\n    console.log(res.platform)\n  }\n})\n")),(0,o.kt)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"API"),(0,o.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,o.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,o.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Taro.getSystemInfo"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")))))}c.isMDXComponent=!0}}]);