"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[48367],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=c(n),h=r,k=d["".concat(i,".").concat(h)]||d[h]||s[h]||o;return n?a.createElement(k,l(l({ref:t},u),{},{components:n})):a.createElement(k,l({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3159:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return i},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var a=n(83117),r=n(80102),o=(n(67294),n(3905)),l=["components"],p={title:"Taro.onPageNotFound(callback)",sidebar_label:"onPageNotFound"},i=void 0,c={unversionedId:"apis/base/weapp/app-event/onPageNotFound",id:"apis/base/weapp/app-event/onPageNotFound",title:"Taro.onPageNotFound(callback)",description:"Listens on the event that a page to be opened by the Mini Program does not exist. The callback timing for this event is consistent with that of App.onPageNotFound.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/apis/base/weapp/app-event/onPageNotFound.md",sourceDirName:"apis/base/weapp/app-event",slug:"/apis/base/weapp/app-event/onPageNotFound",permalink:"/taro/en/docs/next/apis/base/weapp/app-event/onPageNotFound",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/apis/base/weapp/app-event/onPageNotFound.md",tags:[],version:"current",frontMatter:{title:"Taro.onPageNotFound(callback)",sidebar_label:"onPageNotFound"},sidebar:"API",previous:{title:"onThemeChange",permalink:"/taro/en/docs/next/apis/base/weapp/app-event/onThemeChange"},next:{title:"onError",permalink:"/taro/en/docs/next/apis/base/weapp/app-event/onError"}},u=[{value:"Type",id:"type",children:[],level:2},{value:"Parameters",id:"parameters",children:[{value:"Result",id:"result",children:[],level:3},{value:"Callback",id:"callback",children:[],level:3}],level:2},{value:"API Support",id:"api-support",children:[],level:2}],s={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Listens on the event that a page to be opened by the Mini Program does not exist. The callback timing for this event is consistent with that of ",(0,o.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/en/dev/reference/api/App.html#onpagenotfoundobject-object"},(0,o.kt)("inlineCode",{parentName:"a"},"App.onPageNotFound")),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"NOTE")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Developers can implement page redirection during callback only when the callback processing is synchronous. This approach is invalid for asynchronous processing (such as the asynchronous execution of setTimeout)."),(0,o.kt)("li",{parentName:"ul"},"If the developer neither calls the ",(0,o.kt)("a",{parentName:"li",href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/base/app/app-event/wx.onPageNotFound.html"},"Taro.onPageNotFound")," for listening nor declares App.onPageNotFound, when the redirected page does not exist, the WeChat app's native 404 page is pushed."),(0,o.kt)("li",{parentName:"ul"},"If the callback redirects to another page that does not exist, the WeChat app's native 404 page is pushed and the API is not called back again.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/base/app/app-event/wx.onPageNotFound.html"},"Reference"))),(0,o.kt)("h2",{id:"type"},"Type"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"(callback: Callback) => void\n")),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("h3",{id:"result"},"Result"),(0,o.kt)("table",null,(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Property"),(0,o.kt)("th",null,"Type"),(0,o.kt)("th",null,"Description"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"isEntryPage"),(0,o.kt)("td",null,(0,o.kt)("code",null,"boolean")),(0,o.kt)("td",null,"Indicates whether this is the first page for this launch (for example, from sharing and other entries, the first page is the shared page configured by the developer).")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"path"),(0,o.kt)("td",null,(0,o.kt)("code",null,"string")),(0,o.kt)("td",null,"The path to the nonexistent page")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"query"),(0,o.kt)("td",null,(0,o.kt)("code",null,"Record<string, any>")),(0,o.kt)("td",null,"The query parameter for the nonexistent page")))),(0,o.kt)("h3",{id:"callback"},"Callback"),(0,o.kt)("p",null,"The callback function for the event that a page to be opened by the Mini Program does not exist."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"(res: Result) => void\n")),(0,o.kt)("table",null,(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Property"),(0,o.kt)("th",null,"Type"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"res"),(0,o.kt)("td",null,(0,o.kt)("code",null,"Result"))))),(0,o.kt)("h2",{id:"api-support"},"API Support"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"API"),(0,o.kt)("th",{parentName:"tr",align:"center"},"WeChat Mini-Program"),(0,o.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,o.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Taro.onPageNotFound"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,o.kt)("td",{parentName:"tr",align:"center"}),(0,o.kt)("td",{parentName:"tr",align:"center"})))))}d.isMDXComponent=!0}}]);