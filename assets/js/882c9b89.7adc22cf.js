"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[98165],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=c(n),m=r,k=s["".concat(p,".").concat(m)]||s[m]||d[m]||l;return n?a.createElement(k,o(o({ref:t},u),{},{components:n})):a.createElement(k,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=s;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},66650:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return u},default:function(){return s}});var a=n(83117),r=n(80102),l=(n(67294),n(3905)),o=["components"],i={title:"Taro.navigateTo(option)",sidebar_label:"navigateTo"},p=void 0,c={unversionedId:"apis/route/navigateTo",id:"version-3.x/apis/route/navigateTo",title:"Taro.navigateTo(option)",description:"\u4fdd\u7559\u5f53\u524d\u9875\u9762\uff0c\u8df3\u8f6c\u5230\u5e94\u7528\u5185\u7684\u67d0\u4e2a\u9875\u9762\u3002\u4f46\u662f\u4e0d\u80fd\u8df3\u5230 tabbar \u9875\u9762\u3002\u4f7f\u7528 Taro.navigateBack \u53ef\u4ee5\u8fd4\u56de\u5230\u539f\u9875\u9762\u3002\u5c0f\u7a0b\u5e8f\u4e2d\u9875\u9762\u6808\u6700\u591a\u5341\u5c42\u3002",source:"@site/versioned_docs/version-3.x/apis/route/navigateTo.md",sourceDirName:"apis/route",slug:"/apis/route/navigateTo",permalink:"/taro/docs/apis/route/navigateTo",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.x/apis/route/navigateTo.md",tags:[],version:"3.x",frontMatter:{title:"Taro.navigateTo(option)",sidebar_label:"navigateTo"},sidebar:"API",previous:{title:"redirectTo",permalink:"/taro/docs/apis/route/redirectTo"},next:{title:"navigateBack",permalink:"/taro/docs/apis/route/navigateBack"}},u=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[],level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Option",id:"option",children:[],level:3}],level:2},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[],level:2}],d={toc:u};function s(e){var t=e.components,i=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u4fdd\u7559\u5f53\u524d\u9875\u9762\uff0c\u8df3\u8f6c\u5230\u5e94\u7528\u5185\u7684\u67d0\u4e2a\u9875\u9762\u3002\u4f46\u662f\u4e0d\u80fd\u8df3\u5230 tabbar \u9875\u9762\u3002\u4f7f\u7528 Taro.navigateBack \u53ef\u4ee5\u8fd4\u56de\u5230\u539f\u9875\u9762\u3002\u5c0f\u7a0b\u5e8f\u4e2d\u9875\u9762\u6808\u6700\u591a\u5341\u5c42\u3002"),(0,l.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,l.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:n(16710).Z,className:"icon_platform",width:"25px"})," ",(0,l.kt)("img",{title:"H5",src:n(5030).Z,className:"icon_platform",width:"25px"})," ",(0,l.kt)("img",{title:"React Native",src:n(73555).Z,className:"icon_platform",width:"25px"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/route/wx.navigateTo.html"},"\u53c2\u8003\u6587\u6863"))),(0,l.kt)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"(option: Option) => Promise<TaroGeneral.CallbackResult>\n")),(0,l.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"option"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Option"))))),(0,l.kt)("h3",{id:"option"},"Option"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u5fc5\u586b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"url"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u9700\u8981\u8df3\u8f6c\u7684\u5e94\u7528\u5185\u975e tabBar \u7684\u9875\u9762\u7684\u8def\u5f84, \u8def\u5f84\u540e\u53ef\u4ee5\u5e26\u53c2\u6570\u3002\u53c2\u6570\u4e0e\u8def\u5f84\u4e4b\u95f4\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"td"},"?")," \u5206\u9694\uff0c\u53c2\u6570\u952e\u4e0e\u53c2\u6570\u503c\u7528 ",(0,l.kt)("inlineCode",{parentName:"td"},"=")," \u76f8\u8fde\uff0c\u4e0d\u540c\u53c2\u6570\u7528 ",(0,l.kt)("inlineCode",{parentName:"td"},"&")," \u5206\u9694\uff1b\u5982 'path?key=value&key2=value2'")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"complete"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(res: TaroGeneral.CallbackResult) => void")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"events"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"TaroGeneral.IAnyObject")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u9875\u9762\u95f4\u901a\u4fe1\u63a5\u53e3\uff0c\u7528\u4e8e\u76d1\u542c\u88ab\u6253\u5f00\u9875\u9762\u53d1\u9001\u5230\u5f53\u524d\u9875\u9762\u7684\u6570\u636e\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"fail"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(res: TaroGeneral.CallbackResult) => void")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"success"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(res: any) => void")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))),(0,l.kt)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"Taro.navigateTo({\n  url: 'test?id=1',\n  events: {\n    // \u4e3a\u6307\u5b9a\u4e8b\u4ef6\u6dfb\u52a0\u4e00\u4e2a\u76d1\u542c\u5668\uff0c\u83b7\u53d6\u88ab\u6253\u5f00\u9875\u9762\u4f20\u9001\u5230\u5f53\u524d\u9875\u9762\u7684\u6570\u636e\n    acceptDataFromOpenedPage: function(data) {\n      console.log(data)\n    },\n    someEvent: function(data) {\n      console.log(data)\n    }\n    ...\n  },\n  success: function (res) {\n    // \u901a\u8fc7eventChannel\u5411\u88ab\u6253\u5f00\u9875\u9762\u4f20\u9001\u6570\u636e\n    res.eventChannel.emit('acceptDataFromOpenerPage', { data: 'test' })\n  }\n})\n")))}s.isMDXComponent=!0},5030:function(e,t,n){t.Z=n.p+"assets/images/h5-81f73c447874b6528e84ee395bece16e.png"},73555:function(e,t,n){t.Z=n.p+"assets/images/rn-ecec68ba194e4b5e9fc3e853cc00c569.png"},16710:function(e,t,n){t.Z=n.p+"assets/images/weapp-0e8fbe2d5eb3676de4961b54ee7f5ba4.png"}}]);