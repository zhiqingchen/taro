(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[95321],{22122:function(e,t,n){"use strict";function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}n.d(t,{Z:function(){return a}})},19756:function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}n.d(t,{Z:function(){return a}})},3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),i=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=i(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=i(n),m=r,k=d["".concat(s,".").concat(m)]||d[m]||p[m]||l;return n?a.createElement(k,o(o({ref:t},u),{},{components:n})):a.createElement(k,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var i=2;i<l;i++)o[i]=n[i];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},14317:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return c},toc:function(){return s},default:function(){return u}});var a=n(22122),r=n(19756),l=(n(67294),n(3905)),o={title:"Taro.onCompassChange(callback)",sidebar_label:"onCompassChange"},c={unversionedId:"apis/device/compass/onCompassChange",id:"apis/device/compass/onCompassChange",isDocsHomePage:!1,title:"Taro.onCompassChange(callback)",description:"Listens on the compass data change event at a frequency of 5 times per second. Listening automatically starts after the API is called. You can use Taro.stopCompass to stop listening.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/apis/device/compass/onCompassChange.md",sourceDirName:"apis/device/compass",slug:"/apis/device/compass/onCompassChange",permalink:"/taro/en/docs/next/apis/device/compass/onCompassChange",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/apis/device/compass/onCompassChange.md",version:"current",sidebar_label:"onCompassChange",frontMatter:{title:"Taro.onCompassChange(callback)",sidebar_label:"onCompassChange"},sidebar:"API",previous:{title:"Taro.startCompass(option)",permalink:"/taro/en/docs/next/apis/device/compass/startCompass"},next:{title:"Taro.offCompassChange(callback)",permalink:"/taro/en/docs/next/apis/device/compass/offCompassChange"}},s=[{value:"Type",id:"type",children:[]},{value:"Parameters",id:"parameters",children:[{value:"Callback",id:"callback",children:[]},{value:"OnCompassChangeCallbackResult",id:"oncompasschangecallbackresult",children:[]},{value:"accuracy",id:"accuracy",children:[]}]},{value:"Sample Code",id:"sample-code",children:[]},{value:"API Support",id:"api-support",children:[]}],i={toc:s};function u(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,a.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Listens on the compass data change event at a frequency of 5 times per second. Listening automatically starts after the API is called. You can use ",(0,l.kt)("inlineCode",{parentName:"p"},"Taro.stopCompass")," to stop listening."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/device/compass/wx.onCompassChange.html"},"Reference"))),(0,l.kt)("h2",{id:"type"},"Type"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"(callback: Callback) => void\n")),(0,l.kt)("h2",{id:"parameters"},"Parameters"),(0,l.kt)("h3",{id:"callback"},"Callback"),(0,l.kt)("p",null,"The callback function for the compass data change event."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"(result: OnCompassChangeCallbackResult) => void\n")),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Property"),(0,l.kt)("th",null,"Type"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"result"),(0,l.kt)("td",null,(0,l.kt)("code",null,"OnCompassChangeCallbackResult"))))),(0,l.kt)("h3",{id:"oncompasschangecallbackresult"},"OnCompassChangeCallbackResult"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Property"),(0,l.kt)("th",null,"Type"),(0,l.kt)("th",null,"Description"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"accuracy"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string | number")),(0,l.kt)("td",null,"The accuracy")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"direction"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number")),(0,l.kt)("td",null,"The degree of the direction faced")))),(0,l.kt)("h3",{id:"accuracy"},"accuracy"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Accuracy Difference Between iOS and Android"),"\nThe accuracy values are different on iOS and Android."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"iOS: The accuracy is a number-type value indicating the deviation from the magnetic north pole. 0 indicates the device points to magnetic north, 90 east, 180 south, and so on."),(0,l.kt)("li",{parentName:"ul"},"Android: The accuracy is a string-type enumerated value.")),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Property"),(0,l.kt)("th",null,"Description"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"high"),(0,l.kt)("td",null,"High accuracy")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"medium"),(0,l.kt)("td",null,"Moderate accuracy")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"low"),(0,l.kt)("td",null,"Low accuracy")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"no-contact"),(0,l.kt)("td",null,"Unreliable. Connection with sensor lost.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"unreliable"),(0,l.kt)("td",null,"Unreliable. Unknown error.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"unknow ","{value}"),(0,l.kt)("td",null,"An unknown accuracy enumerated value. That is, the value returned by the Android system is not a standard enumerated value of accuracy.")))),(0,l.kt)("h2",{id:"sample-code"},"Sample Code"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"Taro.onCompassChange(function (res) {\n  console.log(res.direction)\n})\n")),(0,l.kt)("h2",{id:"api-support"},"API Support"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"API"),(0,l.kt)("th",{parentName:"tr",align:"center"},"WeChat Mini-Program"),(0,l.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,l.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"Taro.onCompassChange"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"})))))}u.isMDXComponent=!0}}]);