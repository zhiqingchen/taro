(window.webpackJsonp=window.webpackJsonp||[]).push([[1140],{1208:function(e,t,b){"use strict";b.r(t),b.d(t,"frontMatter",(function(){return a})),b.d(t,"metadata",(function(){return u})),b.d(t,"rightToc",(function(){return s})),b.d(t,"default",(function(){return o}));var l=b(3),n=b(7),r=(b(0),b(1806)),c=["components"],a={title:"Taro.requestSubscribeMessage(option)",sidebar_label:"requestSubscribeMessage"},u={unversionedId:"apis/open-api/subscribe-message/requestSubscribeMessage",id:"version-3.x/apis/open-api/subscribe-message/requestSubscribeMessage",isDocsHomePage:!1,title:"Taro.requestSubscribeMessage(option)",description:"\u8bf7\u6c42\u8ba2\u9605\u6d88\u606f",source:"@site/versioned_docs/version-3.x/apis/open-api/subscribe-message/requestSubscribeMessage.md",slug:"/apis/open-api/subscribe-message/requestSubscribeMessage",permalink:"/taro/docs/apis/open-api/subscribe-message/requestSubscribeMessage",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.x/apis/open-api/subscribe-message/requestSubscribeMessage.md",version:"3.x",sidebar_label:"requestSubscribeMessage",sidebar:"version-3.x/API",previous:{title:"Taro.getWeRunData(option)",permalink:"/taro/docs/apis/open-api/werun/getWeRunData"},next:{title:"Taro.stopBeaconDiscovery(option)",permalink:"/taro/docs/apis/device/ibeacon/stopBeaconDiscovery"}},s=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Option",id:"option",children:[]},{value:"FailCallbackResult",id:"failcallbackresult",children:[]},{value:"SuccessCallbackResult",id:"successcallbackresult",children:[]},{value:"template_reflex",id:"template_reflex",children:[]}]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801-1",children:[]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],i={rightToc:s};function o(e){var t=e.components,b=Object(n.a)(e,c);return Object(r.b)("wrapper",Object(l.a)({},i,b,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"\u8bf7\u6c42\u8ba2\u9605\u6d88\u606f"),Object(r.b)("p",null,"\u6ce8\u610f\uff1a",Object(r.b)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html"},"2.8.2")," \u7248\u672c\u5f00\u59cb\uff0c\u7528\u6237\u53d1\u751f\u70b9\u51fb\u884c\u4e3a\u6216\u8005\u53d1\u8d77\u652f\u4ed8\u56de\u8c03\u540e\uff0c\u624d\u53ef\u4ee5\u8c03\u8d77\u8ba2\u9605\u6d88\u606f\u754c\u9762\u3002"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/open-api/subscribe-message/wx.requestSubscribeMessage.html"},"\u53c2\u8003\u6587\u6863"))),Object(r.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-tsx"},"(option: Option) => Promise<SuccessCallbackResult | FailCallbackResult>\n")),Object(r.b)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(r.b)("h3",{id:"option"},"Option"),Object(r.b)("table",null,Object(r.b)("thead",null,Object(r.b)("tr",null,Object(r.b)("th",null,"\u53c2\u6570"),Object(r.b)("th",null,"\u7c7b\u578b"),Object(r.b)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(r.b)("th",null,"\u8bf4\u660e"))),Object(r.b)("tbody",null,Object(r.b)("tr",null,Object(r.b)("td",null,"tmplIds"),Object(r.b)("td",null,Object(r.b)("code",null,"any[]")),Object(r.b)("td",{style:{textAlign:"center"}},"\u662f"),Object(r.b)("td",null,"\u9700\u8981\u8ba2\u9605\u7684\u6d88\u606f\u6a21\u677f\u7684id\u7684\u96c6\u5408\uff08\u6ce8\u610f\uff1aiOS\u5ba2\u6237\u7aef7.0.6\u7248\u672c\u3001Android\u5ba2\u6237\u7aef7.0.7\u7248\u672c\u4e4b\u540e\u7684\u4e00\u6b21\u6027\u8ba2\u9605/\u957f\u671f\u8ba2\u9605\u624d\u652f\u6301\u591a\u4e2a\u6a21\u677f\u6d88\u606f\uff0ciOS\u5ba2\u6237\u7aef7.0.5\u7248\u672c\u3001Android\u5ba2\u6237\u7aef7.0.6\u7248\u672c\u4e4b\u524d\u7684\u4e00\u6b21\u8ba2\u9605\u53ea\u652f\u6301\u4e00\u4e2a\u6a21\u677f\u6d88\u606f\uff09\u6d88\u606f\u6a21\u677fid\u5728[\u5fae\u4fe1\u516c\u4f17\u5e73\u53f0(mp.weixin.qq.com)-\u529f\u80fd-\u8ba2\u9605\u6d88\u606f]\u4e2d\u914d\u7f6e")),Object(r.b)("tr",null,Object(r.b)("td",null,"complete"),Object(r.b)("td",null,Object(r.b)("code",null,"(res: CallbackResult) => void")),Object(r.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(r.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),Object(r.b)("tr",null,Object(r.b)("td",null,"fail"),Object(r.b)("td",null,Object(r.b)("code",null,"(result: FailCallbackResult) => void")),Object(r.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(r.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),Object(r.b)("tr",null,Object(r.b)("td",null,"success"),Object(r.b)("td",null,Object(r.b)("code",null,"(result: SuccessCallbackResult) => void")),Object(r.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(r.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))),Object(r.b)("h3",{id:"failcallbackresult"},"FailCallbackResult"),Object(r.b)("table",null,Object(r.b)("thead",null,Object(r.b)("tr",null,Object(r.b)("th",null,"\u53c2\u6570"),Object(r.b)("th",null,"\u7c7b\u578b"),Object(r.b)("th",null,"\u8bf4\u660e"))),Object(r.b)("tbody",null,Object(r.b)("tr",null,Object(r.b)("td",null,"errCode"),Object(r.b)("td",null,Object(r.b)("code",null,"number")),Object(r.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u9519\u8bef\u7801")),Object(r.b)("tr",null,Object(r.b)("td",null,"errMsg"),Object(r.b)("td",null,Object(r.b)("code",null,"string")),Object(r.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u9519\u8bef\u4fe1\u606f")))),Object(r.b)("h3",{id:"successcallbackresult"},"SuccessCallbackResult"),Object(r.b)("table",null,Object(r.b)("thead",null,Object(r.b)("tr",null,Object(r.b)("th",null,"\u53c2\u6570"),Object(r.b)("th",null,"\u7c7b\u578b"),Object(r.b)("th",null,"\u8bf4\u660e"))),Object(r.b)("tbody",null,Object(r.b)("tr",null,Object(r.b)("td",null,"[TEMPLATE_ID]"),Object(r.b)("td",null,Object(r.b)("code",null,'"accept" | "reject" | "ban"')),Object(r.b)("td",null,"\u52a8\u6001\u7684\u952e\uff0c\u5373\u6a21\u677fid")),Object(r.b)("tr",null,Object(r.b)("td",null,"errMsg"),Object(r.b)("td",null,Object(r.b)("code",null,"string")),Object(r.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u65f6errMsg\u503c\u4e3a'requestSubscribeMessage:ok'")))),Object(r.b)("h4",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(r.b)("p",null,"\u8868\u793a\u7528\u6237\u540c\u610f\u8ba2\u9605 zun-LzcQyW-edafCVvzPkK4de2Rllr1fFpw2A_x0oXE \u8fd9\u6761\u6d88\u606f"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},'{\n  "errMsg": "requestSubscribeMessage:ok",\n  "zun-LzcQyW-edafCVvzPkK4de2Rllr1fFpw2A_x0oXE": "accept"\n}\n')),Object(r.b)("h3",{id:"template_reflex"},"template_reflex"),Object(r.b)("p",null,"\u6a21\u7248\u6d88\u606f\u8ba2\u9605\u7c7b\u578b"),Object(r.b)("table",null,Object(r.b)("thead",null,Object(r.b)("tr",null,Object(r.b)("th",null,"\u53c2\u6570"),Object(r.b)("th",null,"\u8bf4\u660e"))),Object(r.b)("tbody",null,Object(r.b)("tr",null,Object(r.b)("td",null,"accept"),Object(r.b)("td",null,"\u8868\u793a\u7528\u6237\u540c\u610f\u8ba2\u9605\u8be5\u6761id\u5bf9\u5e94\u7684\u6a21\u677f\u6d88\u606f")),Object(r.b)("tr",null,Object(r.b)("td",null,"reject"),Object(r.b)("td",null,"\u8868\u793a\u7528\u6237\u62d2\u7edd\u8ba2\u9605\u8be5\u6761id\u5bf9\u5e94\u7684\u6a21\u677f\u6d88\u606f")),Object(r.b)("tr",null,Object(r.b)("td",null,"ban"),Object(r.b)("td",null,"\u8868\u793a\u5df2\u88ab\u540e\u53f0\u5c01\u7981")))),Object(r.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801-1"},"\u793a\u4f8b\u4ee3\u7801"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-tsx"},"Taro.requestSubscribeMessage({\n  tmplIds: [''],\n  success: function (res) { }\n})\n")),Object(r.b)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:"center"},"API"),Object(r.b)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(r.b)("th",{parentName:"tr",align:"center"},"H5"),Object(r.b)("th",{parentName:"tr",align:"center"},"React Native"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},"Taro.requestSubscribeMessage"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(r.b)("td",{parentName:"tr",align:"center"}),Object(r.b)("td",{parentName:"tr",align:"center"})))))}o.isMDXComponent=!0},1806:function(e,t,b){"use strict";b.d(t,"a",(function(){return o})),b.d(t,"b",(function(){return O}));var l=b(0),n=b.n(l);function r(e,t,b){return t in e?Object.defineProperty(e,t,{value:b,enumerable:!0,configurable:!0,writable:!0}):e[t]=b,e}function c(e,t){var b=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),b.push.apply(b,l)}return b}function a(e){for(var t=1;t<arguments.length;t++){var b=null!=arguments[t]?arguments[t]:{};t%2?c(Object(b),!0).forEach((function(t){r(e,t,b[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(b)):c(Object(b)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(b,t))}))}return e}function u(e,t){if(null==e)return{};var b,l,n=function(e,t){if(null==e)return{};var b,l,n={},r=Object.keys(e);for(l=0;l<r.length;l++)b=r[l],t.indexOf(b)>=0||(n[b]=e[b]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)b=r[l],t.indexOf(b)>=0||Object.prototype.propertyIsEnumerable.call(e,b)&&(n[b]=e[b])}return n}var s=n.a.createContext({}),i=function(e){var t=n.a.useContext(s),b=t;return e&&(b="function"==typeof e?e(t):a(a({},t),e)),b},o=function(e){var t=i(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},p=n.a.forwardRef((function(e,t){var b=e.components,l=e.mdxType,r=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),o=i(b),p=l,O=o["".concat(c,".").concat(p)]||o[p]||d[p]||r;return b?n.a.createElement(O,a(a({ref:t},s),{},{components:b})):n.a.createElement(O,a({ref:t},s))}));function O(e,t){var b=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=b.length,c=new Array(r);c[0]=p;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:l,c[1]=a;for(var s=2;s<r;s++)c[s]=b[s];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,b)}p.displayName="MDXCreateElement"}}]);