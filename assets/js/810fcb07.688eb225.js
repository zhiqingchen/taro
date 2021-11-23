"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[63870],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return k}});var l=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,l,r=function(t,e){if(null==t)return{};var n,l,r={},o=Object.keys(t);for(l=0;l<o.length;l++)n=o[l],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(l=0;l<o.length;l++)n=o[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var u=l.createContext({}),c=function(t){var e=l.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},p=function(t){var e=c(t.components);return l.createElement(u.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},s=l.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,u=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),s=c(n),k=r,m=s["".concat(u,".").concat(k)]||s[k]||d[k]||o;return n?l.createElement(m,a(a({ref:e},p),{},{components:n})):l.createElement(m,a({ref:e},p))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,a=new Array(o);a[0]=s;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i.mdxType="string"==typeof t?t:r,a[1]=i;for(var c=2;c<o;c++)a[c]=n[c];return l.createElement.apply(null,a)}return l.createElement.apply(null,n)}s.displayName="MDXCreateElement"},53477:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return p},default:function(){return s}});var l=n(83117),r=n(80102),o=(n(67294),n(3905)),a=["components"],i={title:"Taro.openDocument(option)",sidebar_label:"openDocument"},u=void 0,c={unversionedId:"apis/files/openDocument",id:"version-3.x/apis/files/openDocument",isDocsHomePage:!1,title:"Taro.openDocument(option)",description:"\u65b0\u5f00\u9875\u9762\u6253\u5f00\u6587\u6863\uff0c\u652f\u6301\u683c\u5f0f",source:"@site/versioned_docs/version-3.x/apis/files/openDocument.md",sourceDirName:"apis/files",slug:"/apis/files/openDocument",permalink:"/taro/docs/apis/files/openDocument",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.x/apis/files/openDocument.md",tags:[],version:"3.x",frontMatter:{title:"Taro.openDocument(option)",sidebar_label:"openDocument"},sidebar:"version-3.x/API",previous:{title:"removeSavedFile",permalink:"/taro/docs/apis/files/removeSavedFile"},next:{title:"getSavedFileList",permalink:"/taro/docs/apis/files/getSavedFileList"}},p=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[],level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Option",id:"option",children:[],level:3},{value:"fileType",id:"filetype",children:[],level:3}],level:2},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[],level:2},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[],level:2}],d={toc:p};function s(t){var e=t.components,n=(0,r.Z)(t,a);return(0,o.kt)("wrapper",(0,l.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u65b0\u5f00\u9875\u9762\u6253\u5f00\u6587\u6863\uff0c\u652f\u6301\u683c\u5f0f"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/file/wx.openDocument.html"},"\u53c2\u8003\u6587\u6863"))),(0,o.kt)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"(option: Option) => Promise<CallbackResult>\n")),(0,o.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,o.kt)("h3",{id:"option"},"Option"),(0,o.kt)("table",null,(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"\u53c2\u6570"),(0,o.kt)("th",null,"\u7c7b\u578b"),(0,o.kt)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),(0,o.kt)("th",null,"\u8bf4\u660e"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"filePath"),(0,o.kt)("td",null,(0,o.kt)("code",null,"string")),(0,o.kt)("td",{style:{textAlign:"center"}},"\u662f"),(0,o.kt)("td",null,"\u6587\u4ef6\u8def\u5f84\uff0c\u53ef\u901a\u8fc7 downloadFile \u83b7\u5f97")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"complete"),(0,o.kt)("td",null,(0,o.kt)("code",null,"(res: CallbackResult) => void")),(0,o.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,o.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"fail"),(0,o.kt)("td",null,(0,o.kt)("code",null,"(res: CallbackResult) => void")),(0,o.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,o.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"fileType"),(0,o.kt)("td",null,(0,o.kt)("code",null,'"doc" | "docx" | "xls" | "xlsx" | "ppt" | "pptx" | "pdf"')),(0,o.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,o.kt)("td",null,"\u6587\u4ef6\u7c7b\u578b\uff0c\u6307\u5b9a\u6587\u4ef6\u7c7b\u578b\u6253\u5f00\u6587\u4ef6")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"success"),(0,o.kt)("td",null,(0,o.kt)("code",null,"(res: CallbackResult) => void")),(0,o.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,o.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))),(0,o.kt)("h3",{id:"filetype"},"fileType"),(0,o.kt)("p",null,"\u6587\u4ef6\u7c7b\u578b"),(0,o.kt)("table",null,(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"\u53c2\u6570"),(0,o.kt)("th",null,"\u8bf4\u660e"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"doc"),(0,o.kt)("td",null,"doc \u683c\u5f0f")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"docx"),(0,o.kt)("td",null,"docx \u683c\u5f0f")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"xls"),(0,o.kt)("td",null,"xls \u683c\u5f0f")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"xlsx"),(0,o.kt)("td",null,"xlsx \u683c\u5f0f")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"ppt"),(0,o.kt)("td",null,"ppt \u683c\u5f0f")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"pptx"),(0,o.kt)("td",null,"pptx \u683c\u5f0f")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"pdf"),(0,o.kt)("td",null,"pdf \u683c\u5f0f")))),(0,o.kt)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"Taro.downloadFile({\n  url: 'https://example.com/somefile.pdf',\n  success: function (res) {\n    var filePath = res.tempFilePath\n    Taro.openDocument({\n      filePath: filePath,\n      success: function (res) {\n        console.log('\u6253\u5f00\u6587\u6863\u6210\u529f')\n      }\n    })\n  }\n})\n")),(0,o.kt)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"API"),(0,o.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,o.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,o.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Taro.openDocument"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,o.kt)("td",{parentName:"tr",align:"center"}),(0,o.kt)("td",{parentName:"tr",align:"center"})))))}s.isMDXComponent=!0}}]);