(window.webpackJsonp=window.webpackJsonp||[]).push([[767],{2188:function(e,t,r){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}r.d(t,"a",(function(){return n}))},2189:function(e,t,r){"use strict";function n(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}r.d(t,"a",(function(){return n}))},2190:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return O}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=a.a.createContext({}),p=function(e){var t=a.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):b(b({},t),e)),r},u=function(e){var t=p(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),u=p(r),s=n,O=u["".concat(o,".").concat(s)]||u[s]||d[s]||c;return r?a.a.createElement(O,b(b({ref:t},i),{},{components:r})):a.a.createElement(O,b({ref:t},i))}));function O(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,o=new Array(c);o[0]=s;var b={};for(var l in t)hasOwnProperty.call(t,l)&&(b[l]=t[l]);b.originalType=e,b.mdxType="string"==typeof e?e:n,o[1]=b;for(var i=2;i<c;i++)o[i]=r[i];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},832:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return b})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(2188),a=r(2189),c=(r(0),r(2190)),o={title:"Taro.addInterceptor(callback)",sidebar_label:"addInterceptor"},b={unversionedId:"apis/network/request/addInterceptor",id:"apis/network/request/addInterceptor",isDocsHomePage:!1,title:"Taro.addInterceptor(callback)",description:"\u6700\u4f4e Taro \u7248\u672c: 1.2.16",source:"@site/docs/apis/network/request/addInterceptor.md",slug:"/apis/network/request/addInterceptor",permalink:"/taro/docs/next/apis/network/request/addInterceptor",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/apis/network/request/addInterceptor.md",version:"current",sidebar_label:"addInterceptor",sidebar:"API",previous:{title:"RequestTask",permalink:"/taro/docs/next/apis/network/request/RequestTask"},next:{title:"Taro.downloadFile(option)",permalink:"/taro/docs/next/apis/network/download/downloadFile"}},l=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[{value:"\u793a\u4f8b 1",id:"\u793a\u4f8b-1",children:[]},{value:"\u793a\u4f8b 2",id:"\u793a\u4f8b-2",children:[]}]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],i={rightToc:l};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},i,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"\u6700\u4f4e Taro \u7248\u672c: 1.2.16")),Object(c.b)("p",null,"\u53ef\u4ee5\u4f7f\u7528\u62e6\u622a\u5668\u5728\u8bf7\u6c42\u53d1\u51fa\u524d\u6216\u53d1\u51fa\u540e\u505a\u4e00\u4e9b\u989d\u5916\u64cd\u4f5c\u3002"),Object(c.b)("p",null,"\u5728\u8c03\u7528 ",Object(c.b)("inlineCode",{parentName:"p"},"Taro.request")," \u53d1\u8d77\u8bf7\u6c42\u4e4b\u524d\uff0c\u8c03\u7528 ",Object(c.b)("inlineCode",{parentName:"p"},"Taro.addInterceptor")," \u65b9\u6cd5\u4e3a\u8bf7\u6c42\u6dfb\u52a0\u62e6\u622a\u5668\uff0c\u62e6\u622a\u5668\u7684\u8c03\u7528\u987a\u5e8f\u9075\u5faa\u6d0b\u8471\u6a21\u578b\u3002\n\u62e6\u622a\u5668\u662f\u4e00\u4e2a\u51fd\u6570\uff0c\u63a5\u53d7 chain \u5bf9\u8c61\u4f5c\u4e3a\u53c2\u6570\u3002chain \u5bf9\u8c61\u4e2d\u542b\u6709 ",Object(c.b)("strong",{parentName:"p"},"requestParmas")," \u5c5e\u6027\uff0c\u4ee3\u8868\u8bf7\u6c42\u53c2\u6570\u3002\u62e6\u622a\u5668\u5185\u6700\u540e\u9700\u8981\u8c03\u7528 ",Object(c.b)("inlineCode",{parentName:"p"},"chain.proceed(requestParams)")," \u4ee5\u8c03\u7528\u4e0b\u4e00\u4e2a\u62e6\u622a\u5668\u6216\u53d1\u8d77\u8bf7\u6c42\u3002"),Object(c.b)("p",null,"Taro \u63d0\u4f9b\u4e86\u4e24\u4e2a\u5185\u7f6e\u62e6\u622a\u5668 ",Object(c.b)("inlineCode",{parentName:"p"},"logInterceptor")," \u4e0e ",Object(c.b)("inlineCode",{parentName:"p"},"timeoutInterceptor"),"\uff0c\u5206\u522b\u7528\u4e8e\u6253\u5370\u8bf7\u6c42\u7684\u76f8\u5173\u4fe1\u606f\u548c\u5728\u8bf7\u6c42\u8d85\u65f6\u65f6\u629b\u51fa\u9519\u8bef\u3002"),Object(c.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"(callback: Function) => void\n")),Object(c.b)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u7c7b\u578b"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"callback"),Object(c.b)("td",null,Object(c.b)("code",null,"Function"))))),Object(c.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(c.b)("h3",{id:"\u793a\u4f8b-1"},"\u793a\u4f8b 1"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"const interceptor = function (chain) {\n  const requestParams = chain.requestParams\n  const { method, data, url } = requestParams\n\n  console.log(`http ${method || 'GET'} --\x3e ${url} data: `, data)\n\n  return chain.proceed(requestParams)\n    .then(res => {\n      console.log(`http <-- ${url} result:`, res)\n      return res\n    })\n  }\nTaro.addInterceptor(interceptor)\nTaro.request({ url })\n")),Object(c.b)("h3",{id:"\u793a\u4f8b-2"},"\u793a\u4f8b 2"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"Taro.addInterceptor(Taro.interceptors.logInterceptor)\nTaro.addInterceptor(Taro.interceptors.timeoutInterceptor)\nTaro.request({ url })\n")),Object(c.b)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"API"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"\u767e\u5ea6\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"\u5b57\u8282\u8df3\u52a8\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"QQ \u5c0f\u7a0b\u5e8f"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"H5"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Taro.addInterceptor"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))))))}p.isMDXComponent=!0}}]);