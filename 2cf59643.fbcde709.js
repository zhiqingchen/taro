(window.webpackJsonp=window.webpackJsonp||[]).push([[323],{1802:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return O}));var n=r(0),b=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,b=function(e,t){if(null==e)return{};var r,n,b={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(b[r]=e[r]);return b}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(b[r]=e[r])}return b}var i=b.a.createContext({}),u=function(e){var t=b.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},d=function(e){var t=u(e.components);return b.a.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},p=b.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),d=u(r),p=n,O=d["".concat(l,".").concat(p)]||d[p]||s[p]||a;return r?b.a.createElement(O,c(c({ref:t},i),{},{components:r})):b.a.createElement(O,c({ref:t},i))}));function O(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,l=new Array(a);l[0]=p;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var i=2;i<a;i++)l[i]=r[i];return b.a.createElement.apply(null,l)}return b.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},391:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return o})),r.d(t,"rightToc",(function(){return i})),r.d(t,"default",(function(){return d}));var n=r(3),b=r(7),a=(r(0),r(1802)),l=["components"],c={title:"Taro.setTabBarStyle(option)",sidebar_label:"setTabBarStyle"},o={unversionedId:"apis/ui/tab-bar/setTabBarStyle",id:"version-2.x/apis/ui/tab-bar/setTabBarStyle",isDocsHomePage:!1,title:"Taro.setTabBarStyle(option)",description:"\u52a8\u6001\u8bbe\u7f6e tabBar \u7684\u6574\u4f53\u6837\u5f0f",source:"@site/versioned_docs/version-2.x/apis/ui/tab-bar/setTabBarStyle.md",slug:"/apis/ui/tab-bar/setTabBarStyle",permalink:"/taro/docs/2.x/apis/ui/tab-bar/setTabBarStyle",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-2.x/apis/ui/tab-bar/setTabBarStyle.md",version:"2.x",sidebar_label:"setTabBarStyle",sidebar:"version-2.x/API",previous:{title:"Taro.showTabBar(option)",permalink:"/taro/docs/2.x/apis/ui/tab-bar/showTabBar"},next:{title:"Taro.setTabBarItem(option)",permalink:"/taro/docs/2.x/apis/ui/tab-bar/setTabBarItem"}},i=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Option",id:"option",children:[]}]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],u={rightToc:i};function d(e){var t=e.components,r=Object(b.a)(e,l);return Object(a.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"\u52a8\u6001\u8bbe\u7f6e tabBar \u7684\u6574\u4f53\u6837\u5f0f"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/ui/tab-bar/wx.setTabBarStyle.html"},"\u53c2\u8003\u6587\u6863"))),Object(a.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-tsx"},"(option?: Option) => Promise<CallbackResult>\n")),Object(a.b)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(a.b)("h3",{id:"option"},"Option"),Object(a.b)("table",null,Object(a.b)("thead",null,Object(a.b)("tr",null,Object(a.b)("th",null,"\u53c2\u6570"),Object(a.b)("th",null,"\u7c7b\u578b"),Object(a.b)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(a.b)("th",null,"\u8bf4\u660e"))),Object(a.b)("tbody",null,Object(a.b)("tr",null,Object(a.b)("td",null,"backgroundColor"),Object(a.b)("td",null,Object(a.b)("code",null,"string")),Object(a.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(a.b)("td",null,"tab \u7684\u80cc\u666f\u8272\uff0cHexColor")),Object(a.b)("tr",null,Object(a.b)("td",null,"borderStyle"),Object(a.b)("td",null,Object(a.b)("code",null,"string")),Object(a.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(a.b)("td",null,"tabBar\u4e0a\u8fb9\u6846\u7684\u989c\u8272\uff0c \u4ec5\u652f\u6301 black/white")),Object(a.b)("tr",null,Object(a.b)("td",null,"color"),Object(a.b)("td",null,Object(a.b)("code",null,"string")),Object(a.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(a.b)("td",null,"tab \u4e0a\u7684\u6587\u5b57\u9ed8\u8ba4\u989c\u8272\uff0cHexColor")),Object(a.b)("tr",null,Object(a.b)("td",null,"complete"),Object(a.b)("td",null,Object(a.b)("code",null,"(res: CallbackResult) => void")),Object(a.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(a.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),Object(a.b)("tr",null,Object(a.b)("td",null,"fail"),Object(a.b)("td",null,Object(a.b)("code",null,"(res: CallbackResult) => void")),Object(a.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(a.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),Object(a.b)("tr",null,Object(a.b)("td",null,"selectedColor"),Object(a.b)("td",null,Object(a.b)("code",null,"string")),Object(a.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(a.b)("td",null,"tab \u4e0a\u7684\u6587\u5b57\u9009\u4e2d\u65f6\u7684\u989c\u8272\uff0cHexColor")),Object(a.b)("tr",null,Object(a.b)("td",null,"success"),Object(a.b)("td",null,Object(a.b)("code",null,"(res: CallbackResult) => void")),Object(a.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(a.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))),Object(a.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-tsx"},"Taro.setTabBarStyle({\n  color: '#FF0000',\n  selectedColor: '#00FF00',\n  backgroundColor: '#0000FF',\n  borderStyle: 'white'\n})\n")),Object(a.b)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",{parentName:"tr",align:"center"},"API"),Object(a.b)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(a.b)("th",{parentName:"tr",align:"center"},"H5"),Object(a.b)("th",{parentName:"tr",align:"center"},"React Native"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:"center"},"Taro.setTabBarStyle"),Object(a.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(a.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(a.b)("td",{parentName:"tr",align:"center"})))))}d.isMDXComponent=!0}}]);