(window.webpackJsonp=window.webpackJsonp||[]).push([[987],{1053:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return a})),n.d(t,"default",(function(){return u}));var c=n(1763),l=n(1764),r=(n(0),n(1765)),b={title:"Taro.chooseLocation(option)",sidebar_label:"chooseLocation"},o={unversionedId:"apis/location/chooseLocation",id:"version-3.x/apis/location/chooseLocation",isDocsHomePage:!1,title:"Taro.chooseLocation(option)",description:"\u6253\u5f00\u5730\u56fe\u9009\u62e9\u4f4d\u7f6e\u3002",source:"@site/versioned_docs/version-3.x/apis/location/chooseLocation.md",slug:"/apis/location/chooseLocation",permalink:"/taro/docs/apis/location/chooseLocation",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.x/apis/location/chooseLocation.md",version:"3.x",sidebar_label:"chooseLocation",sidebar:"version-3.x/API",previous:{title:"Taro.getLocation(option)",permalink:"/taro/docs/apis/location/getLocation"},next:{title:"Taro.updateShareMenu(option)",permalink:"/taro/docs/apis/share/updateShareMenu"}},a=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Option",id:"option",children:[]},{value:"SuccessCallbackResult",id:"successcallbackresult",children:[]}]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],i={rightToc:a};function u(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(r.b)("wrapper",Object(c.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"\u6253\u5f00\u5730\u56fe\u9009\u62e9\u4f4d\u7f6e\u3002"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"chooseLocation")," api\u529f\u80fd\u662f\u4f9d\u8d56\u4e8e\u817e\u8baf\u4f4d\u7f6e\u670d\u52a1\uff0c\u6240\u4ee5\u9700\u8981\u4f7f\u7528 api \u5bc6\u94a5\u3002\u5982\u679c\u60a8\u6ca1\u6709\uff0c\u53ef\u4ee5\u524d\u5f80\u817e\u8baf\u4f4d\u7f6e\u670d\u52a1",Object(r.b)("a",Object(c.a)({parentName:"p"},{href:"https://lbs.qq.com/console/mykey.html?console=mykey"}),"\u5f00\u53d1\u8005\u63a7\u5236\u53f0"),"\u8fdb\u884c\u7533\u8bf7\u3002"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("a",Object(c.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.chooseLocation.html"}),"\u53c2\u8003\u6587\u6863"))),Object(r.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(r.b)("pre",null,Object(r.b)("code",Object(c.a)({parentName:"pre"},{className:"language-tsx"}),"(option: Option) => Promise<SuccessCallbackResult>\n")),Object(r.b)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(r.b)("h3",{id:"option"},"Option"),Object(r.b)("table",null,Object(r.b)("thead",null,Object(r.b)("tr",null,Object(r.b)("th",null,"\u53c2\u6570"),Object(r.b)("th",null,"\u7c7b\u578b"),Object(r.b)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(r.b)("th",null,"\u8bf4\u660e"))),Object(r.b)("tbody",null,Object(r.b)("tr",null,Object(r.b)("td",null,"complete"),Object(r.b)("td",null,Object(r.b)("code",null,"(res: CallbackResult) => void")),Object(r.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(r.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),Object(r.b)("tr",null,Object(r.b)("td",null,"fail"),Object(r.b)("td",null,Object(r.b)("code",null,"(res: CallbackResult) => void")),Object(r.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(r.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),Object(r.b)("tr",null,Object(r.b)("td",null,"latitude"),Object(r.b)("td",null,Object(r.b)("code",null,"number")),Object(r.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(r.b)("td",null,"\u76ee\u6807\u5730\u7eac\u5ea6")),Object(r.b)("tr",null,Object(r.b)("td",null,"longitude"),Object(r.b)("td",null,Object(r.b)("code",null,"number")),Object(r.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(r.b)("td",null,"\u76ee\u6807\u5730\u7ecf\u5ea6")),Object(r.b)("tr",null,Object(r.b)("td",null,"success"),Object(r.b)("td",null,Object(r.b)("code",null,"(result: SuccessCallbackResult) => void")),Object(r.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(r.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))),Object(r.b)("h3",{id:"successcallbackresult"},"SuccessCallbackResult"),Object(r.b)("table",null,Object(r.b)("thead",null,Object(r.b)("tr",null,Object(r.b)("th",null,"\u53c2\u6570"),Object(r.b)("th",null,"\u7c7b\u578b"),Object(r.b)("th",null,"\u8bf4\u660e"))),Object(r.b)("tbody",null,Object(r.b)("tr",null,Object(r.b)("td",null,"address"),Object(r.b)("td",null,Object(r.b)("code",null,"string")),Object(r.b)("td",null,"\u8be6\u7ec6\u5730\u5740")),Object(r.b)("tr",null,Object(r.b)("td",null,"latitude"),Object(r.b)("td",null,Object(r.b)("code",null,"string")),Object(r.b)("td",null,"\u7eac\u5ea6\uff0c\u6d6e\u70b9\u6570\uff0c\u8303\u56f4\u4e3a-90~90\uff0c\u8d1f\u6570\u8868\u793a\u5357\u7eac\u3002\u4f7f\u7528 gcj02 \u56fd\u6d4b\u5c40\u5750\u6807\u7cfb")),Object(r.b)("tr",null,Object(r.b)("td",null,"longitude"),Object(r.b)("td",null,Object(r.b)("code",null,"string")),Object(r.b)("td",null,"\u7ecf\u5ea6\uff0c\u6d6e\u70b9\u6570\uff0c\u8303\u56f4\u4e3a-180~180\uff0c\u8d1f\u6570\u8868\u793a\u897f\u7ecf\u3002\u4f7f\u7528 gcj02 \u56fd\u6d4b\u5c40\u5750\u6807\u7cfb")),Object(r.b)("tr",null,Object(r.b)("td",null,"name"),Object(r.b)("td",null,Object(r.b)("code",null,"string")),Object(r.b)("td",null,"\u4f4d\u7f6e\u540d\u79f0")),Object(r.b)("tr",null,Object(r.b)("td",null,"errMsg"),Object(r.b)("td",null,Object(r.b)("code",null,"string")),Object(r.b)("td",null,"\u8c03\u7528\u7ed3\u679c")))),Object(r.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(r.b)("pre",null,Object(r.b)("code",Object(c.a)({parentName:"pre"},{className:"language-tsx"}),"// config/index.js\n\n// \u83b7\u5f97 api \u5bc6\u94a5\u540e\uff0c\u60a8\u9700\u8981\u5c06\u5b83\u586b\u5165\u9879\u76ee\u7684\u5e38\u91cf\u914d\u7f6e`defineConstants.LOCATION_APIKEY`\u4e2d\uff1a\nconst config = {\n  defineConstants: {\n    LOCATION_APIKEY: JSON.stringify('XXXXX-XXXXX-XXXXX-XXXXX-XXXXX-XXXXX')\n  },\n  // ...\n}\n")),Object(r.b)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"API"),Object(r.b)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(r.b)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"H5"),Object(r.b)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"Taro.chooseLocation"),Object(r.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(r.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(r.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}))))))}u.isMDXComponent=!0},1763:function(e,t,n){"use strict";function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(e[c]=n[c])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return c}))},1764:function(e,t,n){"use strict";function c(e,t){if(null==e)return{};var n,c,l={},r=Object.keys(e);for(c=0;c<r.length;c++)n=r[c],t.indexOf(n)>=0||(l[n]=e[n]);return l}n.d(t,"a",(function(){return c}))},1765:function(e,t,n){"use strict";n.d(t,"a",(function(){return O})),n.d(t,"b",(function(){return j}));var c=n(0),l=n.n(c);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,c)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,c,l=function(e,t){if(null==e)return{};var n,c,l={},r=Object.keys(e);for(c=0;c<r.length;c++)n=r[c],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(c=0;c<r.length;c++)n=r[c],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=l.a.createContext({}),u=function(e){var t=l.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},O=function(e){var t=u(e.components);return l.a.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},d=l.a.forwardRef((function(e,t){var n=e.components,c=e.mdxType,r=e.originalType,b=e.parentName,i=a(e,["components","mdxType","originalType","parentName"]),O=u(n),d=c,j=O["".concat(b,".").concat(d)]||O[d]||s[d]||r;return n?l.a.createElement(j,o(o({ref:t},i),{},{components:n})):l.a.createElement(j,o({ref:t},i))}));function j(e,t){var n=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var r=n.length,b=new Array(r);b[0]=d;var o={};for(var a in t)hasOwnProperty.call(t,a)&&(o[a]=t[a]);o.originalType=e,o.mdxType="string"==typeof e?e:c,b[1]=o;for(var i=2;i<r;i++)b[i]=n[i];return l.a.createElement.apply(null,b)}return l.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);