(window.webpackJsonp=window.webpackJsonp||[]).push([[896],{2188:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))},2189:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}n.d(t,"a",(function(){return r}))},2190:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var b=o.a.createContext({}),s=function(e){var t=o.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return o.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,b=a(e,["components","mdxType","originalType","parentName"]),p=s(n),d=r,m=p["".concat(c,".").concat(d)]||p[d]||u[d]||i;return n?o.a.createElement(m,l(l({ref:t},b),{},{components:n})):o.a.createElement(m,l({ref:t},b))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=d;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var b=2;b<i;b++)c[b]=n[b];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},961:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return a})),n.d(t,"default",(function(){return s}));var r=n(2188),o=n(2189),i=(n(0),n(2190)),c={title:"AuthSetting",sidebar_label:"AuthSetting"},l={unversionedId:"apis/open-api/settings/AuthSetting",id:"version-3.x/apis/open-api/settings/AuthSetting",isDocsHomePage:!1,title:"AuthSetting",description:"\u7528\u6237\u6388\u6743\u8bbe\u7f6e\u4fe1\u606f\uff0c\u8be6\u60c5\u53c2\u8003\u6743\u9650",source:"@site/versioned_docs/version-3.x/apis/open-api/settings/AuthSetting.md",slug:"/apis/open-api/settings/AuthSetting",permalink:"/taro/docs/apis/open-api/settings/AuthSetting",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.x/apis/open-api/settings/AuthSetting.md",version:"3.x",sidebar_label:"AuthSetting",sidebar:"version-3.x/API",previous:{title:"Taro.getSetting(option)",permalink:"/taro/docs/apis/open-api/settings/getSetting"},next:{title:"Taro.chooseAddress(option)",permalink:"/taro/docs/apis/open-api/address/chooseAddress"}},a=[{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",children:[]}],b={rightToc:a};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"\u7528\u6237\u6388\u6743\u8bbe\u7f6e\u4fe1\u606f\uff0c\u8be6\u60c5\u53c2\u8003",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/authorize.html"}),"\u6743\u9650")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/authorize.html"}),"\u53c2\u8003\u6587\u6863"))),Object(i.b)("h2",{id:"\u65b9\u6cd5"},"\u65b9\u6cd5"),Object(i.b)("table",null,Object(i.b)("thead",null,Object(i.b)("tr",null,Object(i.b)("th",null,"\u53c2\u6570"),Object(i.b)("th",null,"\u7c7b\u578b"),Object(i.b)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(i.b)("th",null,"\u8bf4\u660e"))),Object(i.b)("tbody",null,Object(i.b)("tr",null,Object(i.b)("td",null,"scope.address"),Object(i.b)("td",null,Object(i.b)("code",null,"boolean")),Object(i.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(i.b)("td",null,"\u662f\u5426\u6388\u6743\u901a\u8baf\u5730\u5740\uff0c\u5bf9\u5e94\u63a5\u53e3 ",Object(i.b)("a",{href:"https://developers.weixin.qq.com/miniprogram/dev/api/open-api/address/wx.chooseAddress.html"},"wx.chooseAddress"))),Object(i.b)("tr",null,Object(i.b)("td",null,"scope.camera"),Object(i.b)("td",null,Object(i.b)("code",null,"boolean")),Object(i.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(i.b)("td",null,"\u662f\u5426\u6388\u6743\u6444\u50cf\u5934\uff0c\u5bf9\u5e94[",Object(i.b)("a",{href:"https://developers.weixin.qq.com/miniprogram/dev/component/camera.html"},"camera"),"](https://developers.weixin.qq.com/miniprogram/dev/component/camera.html) \u7ec4\u4ef6")),Object(i.b)("tr",null,Object(i.b)("td",null,"scope.invoice"),Object(i.b)("td",null,Object(i.b)("code",null,"boolean")),Object(i.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(i.b)("td",null,"\u662f\u5426\u6388\u6743\u83b7\u53d6\u53d1\u7968\uff0c\u5bf9\u5e94\u63a5\u53e3 ",Object(i.b)("a",{href:"https://developers.weixin.qq.com/miniprogram/dev/api/open-api/invoice/wx.chooseInvoice.html"},"wx.chooseInvoice"))),Object(i.b)("tr",null,Object(i.b)("td",null,"scope.invoiceTitle"),Object(i.b)("td",null,Object(i.b)("code",null,"boolean")),Object(i.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(i.b)("td",null,"\u662f\u5426\u6388\u6743\u53d1\u7968\u62ac\u5934\uff0c\u5bf9\u5e94\u63a5\u53e3 ",Object(i.b)("a",{href:"https://developers.weixin.qq.com/miniprogram/dev/api/open-api/invoice/wx.chooseInvoiceTitle.html"},"wx.chooseInvoiceTitle"))),Object(i.b)("tr",null,Object(i.b)("td",null,"scope.record"),Object(i.b)("td",null,Object(i.b)("code",null,"boolean")),Object(i.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(i.b)("td",null,"\u662f\u5426\u6388\u6743\u5f55\u97f3\u529f\u80fd\uff0c\u5bf9\u5e94\u63a5\u53e3 ",Object(i.b)("a",{href:"https://developers.weixin.qq.com/miniprogram/dev/api/media/recorder/wx.startRecord.html"},"wx.startRecord"))),Object(i.b)("tr",null,Object(i.b)("td",null,"scope.userInfo"),Object(i.b)("td",null,Object(i.b)("code",null,"boolean")),Object(i.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(i.b)("td",null,"\u662f\u5426\u6388\u6743\u7528\u6237\u4fe1\u606f\uff0c\u5bf9\u5e94\u63a5\u53e3 ",Object(i.b)("a",{href:"https://developers.weixin.qq.com/miniprogram/dev/api/open-api/user-info/wx.getUserInfo.html"},"wx.getUserInfo"))),Object(i.b)("tr",null,Object(i.b)("td",null,"scope.userLocation"),Object(i.b)("td",null,Object(i.b)("code",null,"boolean")),Object(i.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(i.b)("td",null,"\u662f\u5426\u6388\u6743\u5730\u7406\u4f4d\u7f6e\uff0c\u5bf9\u5e94\u63a5\u53e3 ",Object(i.b)("a",{href:"https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.getLocation.html"},"wx.getLocation"),", ",Object(i.b)("a",{href:"https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.chooseLocation.html"},"wx.chooseLocation"))),Object(i.b)("tr",null,Object(i.b)("td",null,"scope.werun"),Object(i.b)("td",null,Object(i.b)("code",null,"boolean")),Object(i.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(i.b)("td",null,"\u662f\u5426\u6388\u6743\u5fae\u4fe1\u8fd0\u52a8\u6b65\u6570\uff0c\u5bf9\u5e94\u63a5\u53e3 ",Object(i.b)("a",{href:"https://developers.weixin.qq.com/miniprogram/dev/api/open-api/werun/wx.getWeRunData.html"},"wx.getWeRunData"))),Object(i.b)("tr",null,Object(i.b)("td",null,"scope.writePhotosAlbum"),Object(i.b)("td",null,Object(i.b)("code",null,"boolean")),Object(i.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(i.b)("td",null,"\u662f\u5426\u6388\u6743\u4fdd\u5b58\u5230\u76f8\u518c ",Object(i.b)("a",{href:"https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.saveImageToPhotosAlbum.html"},"wx.saveImageToPhotosAlbum"),", ",Object(i.b)("a",{href:"https://developers.weixin.qq.com/miniprogram/dev/api/media/video/wx.saveVideoToPhotosAlbum.html"},"wx.saveVideoToPhotosAlbum"))))))}s.isMDXComponent=!0}}]);