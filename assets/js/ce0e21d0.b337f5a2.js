"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[96107],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return k}});var l=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,l,r=function(t,e){if(null==t)return{};var n,l,r={},a=Object.keys(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var u=l.createContext({}),d=function(t){var e=l.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=d(t.components);return l.createElement(u.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},s=l.forwardRef((function(t,e){var n=t.components,r=t.mdxType,a=t.originalType,u=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),s=d(n),k=r,m=s["".concat(u,".").concat(k)]||s[k]||p[k]||a;return n?l.createElement(m,o(o({ref:e},c),{},{components:n})):l.createElement(m,o({ref:e},c))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=n.length,o=new Array(a);o[0]=s;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var d=2;d<a;d++)o[d]=n[d];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}s.displayName="MDXCreateElement"},16161:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return d},toc:function(){return c},default:function(){return s}});var l=n(83117),r=n(80102),a=(n(67294),n(3905)),o=["components"],i={title:"Taro.uploadFile(option)",sidebar_label:"uploadFile"},u=void 0,d={unversionedId:"apis/network/upload/uploadFile",id:"version-2.x/apis/network/upload/uploadFile",isDocsHomePage:!1,title:"Taro.uploadFile(option)",description:"\u5c06\u672c\u5730\u8d44\u6e90\u4e0a\u4f20\u5230\u670d\u52a1\u5668\u3002\u5ba2\u6237\u7aef\u53d1\u8d77\u4e00\u4e2a HTTPS POST \u8bf7\u6c42\uff0c\u5176\u4e2d content-type \u4e3a multipart/form-data\u3002\u4f7f\u7528\u524d\u8bf7\u6ce8\u610f\u9605\u8bfb\u76f8\u5173\u8bf4\u660e\u3002",source:"@site/versioned_docs/version-2.x/apis/network/upload/uploadFile.md",sourceDirName:"apis/network/upload",slug:"/apis/network/upload/uploadFile",permalink:"/taro/docs/2.x/apis/network/upload/uploadFile",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-2.x/apis/network/upload/uploadFile.md",tags:[],version:"2.x",frontMatter:{title:"Taro.uploadFile(option)",sidebar_label:"uploadFile"},sidebar:"version-2.x/API",previous:{title:"DownloadTask",permalink:"/taro/docs/2.x/apis/network/download/DownloadTask"},next:{title:"UploadTask",permalink:"/taro/docs/2.x/apis/network/upload/UploadTask"}},c=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[],level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Option",id:"option",children:[{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[],level:4}],level:3},{value:"SuccessCallbackResult",id:"successcallbackresult",children:[],level:3}],level:2},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[{value:"\u793a\u4f8b 1",id:"\u793a\u4f8b-1",children:[],level:3},{value:"\u793a\u4f8b 2",id:"\u793a\u4f8b-2",children:[],level:3}],level:2},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6-1",children:[],level:2}],p={toc:c};function s(t){var e=t.components,n=(0,r.Z)(t,o);return(0,a.kt)("wrapper",(0,l.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5c06\u672c\u5730\u8d44\u6e90\u4e0a\u4f20\u5230\u670d\u52a1\u5668\u3002\u5ba2\u6237\u7aef\u53d1\u8d77\u4e00\u4e2a HTTPS POST \u8bf7\u6c42\uff0c\u5176\u4e2d ",(0,a.kt)("inlineCode",{parentName:"p"},"content-type")," \u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"multipart/form-data"),"\u3002\u4f7f\u7528\u524d\u8bf7\u6ce8\u610f\u9605\u8bfb",(0,a.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/framework/ability/network.html"},"\u76f8\u5173\u8bf4\u660e"),"\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/network/upload/wx.uploadFile.html"},"\u53c2\u8003\u6587\u6863"))),(0,a.kt)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"(option: Option) => Promise<SuccessCallbackResult & UploadTask> & UploadTask\n")),(0,a.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,a.kt)("h3",{id:"option"},"Option"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"\u53c2\u6570"),(0,a.kt)("th",null,"\u7c7b\u578b"),(0,a.kt)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),(0,a.kt)("th",null,"\u8bf4\u660e"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"url"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string")),(0,a.kt)("td",{style:{textAlign:"center"}},"\u662f"),(0,a.kt)("td",null,"\u5f00\u53d1\u8005\u670d\u52a1\u5668\u5730\u5740")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"filePath"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string")),(0,a.kt)("td",{style:{textAlign:"center"}},"\u662f"),(0,a.kt)("td",null,"\u8981\u4e0a\u4f20\u6587\u4ef6\u8d44\u6e90\u7684\u8def\u5f84")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"name"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string")),(0,a.kt)("td",{style:{textAlign:"center"}},"\u662f"),(0,a.kt)("td",null,"\u6587\u4ef6\u5bf9\u5e94\u7684 key\uff0c\u5f00\u53d1\u8005\u5728\u670d\u52a1\u7aef\u53ef\u4ee5\u901a\u8fc7\u8fd9\u4e2a key \u83b7\u53d6\u6587\u4ef6\u7684\u4e8c\u8fdb\u5236\u5185\u5bb9")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"header"),(0,a.kt)("td",null,(0,a.kt)("code",null,"Record<string, any>")),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"HTTP \u8bf7\u6c42 Header\uff0cHeader \u4e2d\u4e0d\u80fd\u8bbe\u7f6e Referer")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"formData"),(0,a.kt)("td",null,(0,a.kt)("code",null,"Record<string, any>")),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"HTTP \u8bf7\u6c42\u4e2d\u5176\u4ed6\u989d\u5916\u7684 form data")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"timeout"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number")),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u8d85\u65f6\u65f6\u95f4\uff0c\u5355\u4f4d\u4e3a\u6beb\u79d2")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"fileName"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string")),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u4e0a\u4f20\u7684\u6587\u4ef6\u540d",(0,a.kt)("br",null),"API \u652f\u6301\u5ea6: h5")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"complete"),(0,a.kt)("td",null,(0,a.kt)("code",null,"(res: CallbackResult) => void")),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"fail"),(0,a.kt)("td",null,(0,a.kt)("code",null,"(res: CallbackResult) => void")),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"success"),(0,a.kt)("td",null,(0,a.kt)("code",null,"(result: SuccessCallbackResult) => void")),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))),(0,a.kt)("h4",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"API"),(0,a.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,a.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Option.fileName"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"})))),(0,a.kt)("h3",{id:"successcallbackresult"},"SuccessCallbackResult"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"\u53c2\u6570"),(0,a.kt)("th",null,"\u7c7b\u578b"),(0,a.kt)("th",null,"\u8bf4\u660e"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"data"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string")),(0,a.kt)("td",null,"\u5f00\u53d1\u8005\u670d\u52a1\u5668\u8fd4\u56de\u7684\u6570\u636e")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"statusCode"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number")),(0,a.kt)("td",null,"\u5f00\u53d1\u8005\u670d\u52a1\u5668\u8fd4\u56de\u7684 HTTP \u72b6\u6001\u7801")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"errMsg"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string")),(0,a.kt)("td",null,"\u8c03\u7528\u7ed3\u679c")))),(0,a.kt)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),(0,a.kt)("h3",{id:"\u793a\u4f8b-1"},"\u793a\u4f8b 1"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"Taro.chooseImage({\n  success (res) {\n    const tempFilePaths = res.tempFilePaths\n    Taro.uploadFile({\n      url: 'https://example.weixin.qq.com/upload', //\u4ec5\u4e3a\u793a\u4f8b\uff0c\u975e\u771f\u5b9e\u7684\u63a5\u53e3\u5730\u5740\n      filePath: tempFilePaths[0],\n      name: 'file',\n      formData: {\n        'user': 'test'\n      },\n      success (res){\n        const data = res.data\n        //do something\n      }\n    })\n  }\n})\n")),(0,a.kt)("h3",{id:"\u793a\u4f8b-2"},"\u793a\u4f8b 2"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const uploadTask = Taro.uploadFile({\n  url: 'https://example.weixin.qq.com/upload', //\u4ec5\u4e3a\u793a\u4f8b\uff0c\u975e\u771f\u5b9e\u7684\u63a5\u53e3\u5730\u5740\n  filePath: tempFilePaths[0],\n  name: 'file',\n  formData:{\n    'user': 'test'\n  },\n  success: function (res){\n    var data = res.data\n    //do something\n  }\n})\nuploadTask.progress((res) => {\n  console.log('\u4e0a\u4f20\u8fdb\u5ea6', res.progress)\n  console.log('\u5df2\u7ecf\u4e0a\u4f20\u7684\u6570\u636e\u957f\u5ea6', res.totalBytesSent)\n  console.log('\u9884\u671f\u9700\u8981\u4e0a\u4f20\u7684\u6570\u636e\u603b\u957f\u5ea6', res.totalBytesExpectedToSend)\n})\nuploadTask.abort() // \u53d6\u6d88\u4e0a\u4f20\u4efb\u52a1\n")),(0,a.kt)("h2",{id:"api-\u652f\u6301\u5ea6-1"},"API \u652f\u6301\u5ea6"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"API"),(0,a.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",{parentName:"tr",align:"center"},"\u767e\u5ea6\u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",{parentName:"tr",align:"center"},"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,a.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Taro.uploadFile"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"})))))}s.isMDXComponent=!0}}]);