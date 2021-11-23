"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[97794],{3905:function(e,t,l){l.d(t,{Zo:function(){return c},kt:function(){return k}});var n=l(67294);function r(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function a(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function i(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?a(Object(l),!0).forEach((function(t){r(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):a(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function o(e,t){if(null==e)return{};var l,n,r=function(e,t){if(null==e)return{};var l,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)l=a[n],t.indexOf(l)>=0||(r[l]=e[l]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)l=a[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),l=t;return e&&(l="function"==typeof e?e(t):i(i({},t),e)),l},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var l=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(l),k=r,m=p["".concat(s,".").concat(k)]||p[k]||d[k]||a;return l?n.createElement(m,i(i({ref:t},c),{},{components:l})):n.createElement(m,i({ref:t},c))}));function k(e,t){var l=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=l.length,i=new Array(a);i[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<a;u++)i[u]=l[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,l)}p.displayName="MDXCreateElement"},46661:function(e,t,l){l.r(t),l.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return p}});var n=l(83117),r=l(80102),a=(l(67294),l(3905)),i=["components"],o={title:"Taro.chooseMessageFile(option)",sidebar_label:"chooseMessageFile"},s=void 0,u={unversionedId:"apis/media/image/chooseMessageFile",id:"apis/media/image/chooseMessageFile",isDocsHomePage:!1,title:"Taro.chooseMessageFile(option)",description:"Selects a file from a client session.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/apis/media/image/chooseMessageFile.md",sourceDirName:"apis/media/image",slug:"/apis/media/image/chooseMessageFile",permalink:"/taro/en/docs/next/apis/media/image/chooseMessageFile",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/apis/media/image/chooseMessageFile.md",tags:[],version:"current",frontMatter:{title:"Taro.chooseMessageFile(option)",sidebar_label:"chooseMessageFile"},sidebar:"API",previous:{title:"compressImage",permalink:"/taro/en/docs/next/apis/media/image/compressImage"},next:{title:"chooseImage",permalink:"/taro/en/docs/next/apis/media/image/chooseImage"}},c=[{value:"Type",id:"type",children:[],level:2},{value:"Parameters",id:"parameters",children:[{value:"Option",id:"option",children:[],level:3},{value:"SuccessCallbackResult",id:"successcallbackresult",children:[],level:3},{value:"ChooseFile",id:"choosefile",children:[],level:3},{value:"selectType",id:"selecttype",children:[],level:3},{value:"selectedType",id:"selectedtype",children:[],level:3}],level:2},{value:"Sample Code",id:"sample-code",children:[],level:2},{value:"API Support",id:"api-support",children:[],level:2}],d={toc:c};function p(e){var t=e.components,l=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Selects a file from a client session."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/media/image/wx.chooseMessageFile.html"},"Reference"))),(0,a.kt)("h2",{id:"type"},"Type"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"(option: Option) => Promise<SuccessCallbackResult>\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("h3",{id:"option"},"Option"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Property"),(0,a.kt)("th",null,"Type"),(0,a.kt)("th",{style:{textAlign:"center"}},"Required"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"count"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number")),(0,a.kt)("td",{style:{textAlign:"center"}},"Yes"),(0,a.kt)("td",null,"The maximum number of files that can be selected. 0-100 is allowed")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"extension"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string[]")),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"Filtered by the file extension name. It takes effect only when type==file. The strings within it cannot be empty. Filtering is not performed by default.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"type"),(0,a.kt)("td",null,(0,a.kt)("code",null,'"all" | "video" | "image" | "file"')),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"The selected file type")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"complete"),(0,a.kt)("td",null,(0,a.kt)("code",null,"(res: any) => void")),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"The callback function used when the API call completed (always executed whether the call succeeds or fails)")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"fail"),(0,a.kt)("td",null,(0,a.kt)("code",null,"(res: any) => void")),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"The callback function for a failed API call")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"success"),(0,a.kt)("td",null,(0,a.kt)("code",null,"(res: Result) => void")),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"The callback function for a successful API call")))),(0,a.kt)("h3",{id:"successcallbackresult"},"SuccessCallbackResult"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Property"),(0,a.kt)("th",null,"Type"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"tempFiles"),(0,a.kt)("td",null,(0,a.kt)("code",null,"ChooseFile[]")),(0,a.kt)("td",null,"Returns an array of local temporary file objects for the selected files")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"errMsg"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string")),(0,a.kt)("td",null,"Call result")))),(0,a.kt)("h3",{id:"choosefile"},"ChooseFile"),(0,a.kt)("p",null,"res.tempFiles is composed as follows"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Property"),(0,a.kt)("th",null,"Type"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"name"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string")),(0,a.kt)("td",null,"The selected file name")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"path"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string")),(0,a.kt)("td",null,"The path to the local temporary file")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"size"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number")),(0,a.kt)("td",null,"The size of a local temporary file, in bytes")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"time"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number")),(0,a.kt)("td",null,"Time when the session of the selected file is sent. It is a Unix timestamp and not supported in WeChat DevTools.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"type"),(0,a.kt)("td",null,(0,a.kt)("code",null,'"video" | "image" | "file"')),(0,a.kt)("td",null,"The selected file type")))),(0,a.kt)("h3",{id:"selecttype"},"selectType"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Property"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"all"),(0,a.kt)("td",null,"All the files can be selected.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"video"),(0,a.kt)("td",null,"Only video files can be selected.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"image"),(0,a.kt)("td",null,"Only image files can be selected.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"file"),(0,a.kt)("td",null,"Files except images and videos can be selected.")))),(0,a.kt)("h3",{id:"selectedtype"},"selectedType"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Property"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"video"),(0,a.kt)("td",null,"A video file is selected.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"image"),(0,a.kt)("td",null,"An image file is selected.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"file"),(0,a.kt)("td",null,"A file except images and videos is selected.")))),(0,a.kt)("h2",{id:"sample-code"},"Sample Code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"Taro.chooseMessageFile({\n  count: 10,\n  type: 'image',\n  success: function (res) {\n    // tempFilePath can be used as the src property of the img tag to display images.\n    const tempFilePaths = res.tempFilePaths\n  }\n})\n")),(0,a.kt)("h2",{id:"api-support"},"API Support"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"API"),(0,a.kt)("th",{parentName:"tr",align:"center"},"WeChat Mini-Program"),(0,a.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,a.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Taro.chooseMessageFile"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})))))}p.isMDXComponent=!0}}]);