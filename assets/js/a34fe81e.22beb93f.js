"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[78393],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return s}});var l=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},r=Object.keys(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=l.createContext({}),d=function(e){var t=l.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=d(e.components);return l.createElement(u.Provider,{value:t},e.children)},i={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},k=l.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,u=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),k=d(a),s=n,h=k["".concat(u,".").concat(s)]||k[s]||i[s]||r;return a?l.createElement(h,o(o({ref:t},c),{},{components:a})):l.createElement(h,o({ref:t},c))}));function s(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=k;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:n,o[1]=p;for(var d=2;d<r;d++)o[d]=a[d];return l.createElement.apply(null,o)}return l.createElement.apply(null,a)}k.displayName="MDXCreateElement"},28630:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return p},contentTitle:function(){return u},metadata:function(){return d},toc:function(){return c},default:function(){return k}});var l=a(83117),n=a(80102),r=(a(67294),a(3905)),o=["components"],p={title:"UpdateManager",sidebar_label:"UpdateManager"},u=void 0,d={unversionedId:"apis/base/update/UpdateManager",id:"version-2.x/apis/base/update/UpdateManager",title:"UpdateManager",description:"UpdateManager \u5bf9\u8c61\uff0c\u7528\u6765\u7ba1\u7406\u66f4\u65b0\uff0c\u53ef\u901a\u8fc7 Taro.getUpdateManager \u63a5\u53e3\u83b7\u53d6\u5b9e\u4f8b\u3002",source:"@site/versioned_docs/version-2.x/apis/base/update/UpdateManager.md",sourceDirName:"apis/base/update",slug:"/apis/base/update/UpdateManager",permalink:"/taro/docs/2.x/apis/base/update/UpdateManager",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-2.x/apis/base/update/UpdateManager.md",tags:[],version:"2.x",frontMatter:{title:"UpdateManager",sidebar_label:"UpdateManager"},sidebar:"version-2.x/API",previous:{title:"getUpdateManager",permalink:"/taro/docs/2.x/apis/base/update/getUpdateManager"},next:{title:"getLaunchOptionsSync",permalink:"/taro/docs/2.x/apis/base/weapp/life-cycle/getLaunchOptionsSync"}},c=[{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",children:[{value:"applyUpdate",id:"applyupdate",children:[],level:3},{value:"onCheckForUpdate",id:"oncheckforupdate",children:[],level:3},{value:"onUpdateFailed",id:"onupdatefailed",children:[],level:3},{value:"onUpdateReady",id:"onupdateready",children:[],level:3}],level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"OnCheckForUpdateCallback",id:"oncheckforupdatecallback",children:[],level:3},{value:"OnCheckForUpdateResult",id:"oncheckforupdateresult",children:[],level:3}],level:2}],i={toc:c};function k(e){var t=e.components,a=(0,n.Z)(e,o);return(0,r.kt)("wrapper",(0,l.Z)({},i,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"UpdateManager \u5bf9\u8c61\uff0c\u7528\u6765\u7ba1\u7406\u66f4\u65b0\uff0c\u53ef\u901a\u8fc7 Taro.getUpdateManager \u63a5\u53e3\u83b7\u53d6\u5b9e\u4f8b\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/update/UpdateManager.html"},"\u53c2\u8003\u6587\u6863"))),(0,r.kt)("h2",{id:"\u65b9\u6cd5"},"\u65b9\u6cd5"),(0,r.kt)("h3",{id:"applyupdate"},"applyUpdate"),(0,r.kt)("p",null,"\u5f3a\u5236\u5c0f\u7a0b\u5e8f\u91cd\u542f\u5e76\u4f7f\u7528\u65b0\u7248\u672c\u3002\u5728\u5c0f\u7a0b\u5e8f\u65b0\u7248\u672c\u4e0b\u8f7d\u5b8c\u6210\u540e\uff08\u5373\u6536\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"onUpdateReady")," \u56de\u8c03\uff09\u8c03\u7528\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/update/UpdateManager.applyUpdate.html"},"\u53c2\u8003\u6587\u6863"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"() => void\n")),(0,r.kt)("h3",{id:"oncheckforupdate"},"onCheckForUpdate"),(0,r.kt)("p",null,"\u76d1\u542c\u5411\u5fae\u4fe1\u540e\u53f0\u8bf7\u6c42\u68c0\u67e5\u66f4\u65b0\u7ed3\u679c\u4e8b\u4ef6\u3002\u5fae\u4fe1\u5728\u5c0f\u7a0b\u5e8f\u51b7\u542f\u52a8\u65f6\u81ea\u52a8\u68c0\u67e5\u66f4\u65b0\uff0c\u4e0d\u9700\u7531\u5f00\u53d1\u8005\u4e3b\u52a8\u89e6\u53d1\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/update/UpdateManager.onCheckForUpdate.html"},"\u53c2\u8003\u6587\u6863"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"(callback: OnCheckForUpdateCallback) => void\n")),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"\u53c2\u6570"),(0,r.kt)("th",null,"\u7c7b\u578b"),(0,r.kt)("th",null,"\u8bf4\u660e"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"callback"),(0,r.kt)("td",null,(0,r.kt)("code",null,"OnCheckForUpdateCallback")),(0,r.kt)("td",null,"\u5411\u5fae\u4fe1\u540e\u53f0\u8bf7\u6c42\u68c0\u67e5\u66f4\u65b0\u7ed3\u679c\u4e8b\u4ef6\u7684\u56de\u8c03\u51fd\u6570")))),(0,r.kt)("h3",{id:"onupdatefailed"},"onUpdateFailed"),(0,r.kt)("p",null,"\u76d1\u542c\u5c0f\u7a0b\u5e8f\u66f4\u65b0\u5931\u8d25\u4e8b\u4ef6\u3002\u5c0f\u7a0b\u5e8f\u6709\u65b0\u7248\u672c\uff0c\u5ba2\u6237\u7aef\u4e3b\u52a8\u89e6\u53d1\u4e0b\u8f7d\uff08\u65e0\u9700\u5f00\u53d1\u8005\u89e6\u53d1\uff09\uff0c\u4e0b\u8f7d\u5931\u8d25\uff08\u53ef\u80fd\u662f\u7f51\u7edc\u539f\u56e0\u7b49\uff09\u540e\u56de\u8c03"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/update/UpdateManager.onUpdateFailed.html"},"\u53c2\u8003\u6587\u6863"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"(callback: (res: CallbackResult) => void) => void\n")),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"\u53c2\u6570"),(0,r.kt)("th",null,"\u7c7b\u578b"),(0,r.kt)("th",null,"\u8bf4\u660e"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"callback"),(0,r.kt)("td",null,(0,r.kt)("code",null,"(res: CallbackResult) => void")),(0,r.kt)("td",null,"\u5c0f\u7a0b\u5e8f\u66f4\u65b0\u5931\u8d25\u4e8b\u4ef6\u7684\u56de\u8c03\u51fd\u6570")))),(0,r.kt)("h3",{id:"onupdateready"},"onUpdateReady"),(0,r.kt)("p",null,"\u76d1\u542c\u5c0f\u7a0b\u5e8f\u6709\u7248\u672c\u66f4\u65b0\u4e8b\u4ef6\u3002\u5ba2\u6237\u7aef\u4e3b\u52a8\u89e6\u53d1\u4e0b\u8f7d\uff08\u65e0\u9700\u5f00\u53d1\u8005\u89e6\u53d1\uff09\uff0c\u4e0b\u8f7d\u6210\u529f\u540e\u56de\u8c03"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/update/UpdateManager.onUpdateReady.html"},"\u53c2\u8003\u6587\u6863"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"(callback: (res: CallbackResult) => void) => void\n")),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"\u53c2\u6570"),(0,r.kt)("th",null,"\u7c7b\u578b"),(0,r.kt)("th",null,"\u8bf4\u660e"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"callback"),(0,r.kt)("td",null,(0,r.kt)("code",null,"(res: CallbackResult) => void")),(0,r.kt)("td",null,"\u5c0f\u7a0b\u5e8f\u6709\u7248\u672c\u66f4\u65b0\u4e8b\u4ef6\u7684\u56de\u8c03\u51fd\u6570")))),(0,r.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,r.kt)("h3",{id:"oncheckforupdatecallback"},"OnCheckForUpdateCallback"),(0,r.kt)("p",null,"\u5411\u5fae\u4fe1\u540e\u53f0\u8bf7\u6c42\u68c0\u67e5\u66f4\u65b0\u7ed3\u679c\u4e8b\u4ef6\u7684\u56de\u8c03\u51fd\u6570"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"(result: OnCheckForUpdateResult) => void\n")),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"\u53c2\u6570"),(0,r.kt)("th",null,"\u7c7b\u578b"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"result"),(0,r.kt)("td",null,(0,r.kt)("code",null,"OnCheckForUpdateResult"))))),(0,r.kt)("h3",{id:"oncheckforupdateresult"},"OnCheckForUpdateResult"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"\u53c2\u6570"),(0,r.kt)("th",null,"\u7c7b\u578b"),(0,r.kt)("th",null,"\u8bf4\u660e"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"hasUpdate"),(0,r.kt)("td",null,(0,r.kt)("code",null,"boolean")),(0,r.kt)("td",null,"\u662f\u5426\u6709\u65b0\u7248\u672c")))))}k.isMDXComponent=!0}}]);