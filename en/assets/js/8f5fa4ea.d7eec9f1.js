(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[67015],{22122:function(e,t,r){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}r.d(t,{Z:function(){return n}})},19756:function(e,t,r){"use strict";function n(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}r.d(t,{Z:function(){return n}})},3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,y=d["".concat(i,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(y,l(l({ref:t},s),{},{components:r})):n.createElement(y,l({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},66358:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return l},metadata:function(){return c},toc:function(){return i},default:function(){return s}});var n=r(22122),a=r(19756),o=(r(67294),r(3905)),l={title:"Taro.setStorageSync(key, data)",sidebar_label:"setStorageSync"},c={unversionedId:"apis/storage/setStorageSync",id:"apis/storage/setStorageSync",isDocsHomePage:!1,title:"Taro.setStorageSync(key, data)",description:"The synchronous version of Taro.setStorage.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/apis/storage/setStorageSync.md",sourceDirName:"apis/storage",slug:"/apis/storage/setStorageSync",permalink:"/taro/en/docs/next/apis/storage/setStorageSync",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/apis/storage/setStorageSync.md",version:"current",sidebar_label:"setStorageSync",frontMatter:{title:"Taro.setStorageSync(key, data)",sidebar_label:"setStorageSync"},sidebar:"API",previous:{title:"UDPSocket",permalink:"/taro/en/docs/next/apis/network/udp/UDPSocket"},next:{title:"Taro.setStorage(option)",permalink:"/taro/en/docs/next/apis/storage/setStorage"}},i=[{value:"Type",id:"type",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Sample Code",id:"sample-code",children:[{value:"Example 1",id:"example-1",children:[]},{value:"Example 2",id:"example-2",children:[]}]},{value:"API Support",id:"api-support",children:[]}],p={toc:i};function s(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The synchronous version of ",(0,o.kt)("inlineCode",{parentName:"p"},"Taro.setStorage"),"."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/storage/wx.setStorageSync.html"},"Reference"))),(0,o.kt)("h2",{id:"type"},"Type"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"(key: string, data: any) => void\n")),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Property"),(0,o.kt)("th",null,"Type"),(0,o.kt)("th",null,"Description"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"key"),(0,o.kt)("td",null,(0,o.kt)("code",null,"string")),(0,o.kt)("td",null,"The specified key in the local cache")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"data"),(0,o.kt)("td",null,(0,o.kt)("code",null,"any")),(0,o.kt)("td",null,"Contents to be stored can only be native types, dates, and objects that can be serialized via ",(0,o.kt)("code",null,"JSON.stringify"),".")))),(0,o.kt)("h2",{id:"sample-code"},"Sample Code"),(0,o.kt)("h3",{id:"example-1"},"Example 1"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'Taro.setStorage({\n  key:"key",\n  data:"value"\n})\n')),(0,o.kt)("h3",{id:"example-2"},"Example 2"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"try {\n  Taro.setStorageSync('key', 'value')\n} catch (e) { }\n")),(0,o.kt)("h2",{id:"api-support"},"API Support"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"API"),(0,o.kt)("th",{parentName:"tr",align:"center"},"WeChat Mini-Program"),(0,o.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,o.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Taro.setStorageSync"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,o.kt)("td",{parentName:"tr",align:"center"})))))}s.isMDXComponent=!0}}]);