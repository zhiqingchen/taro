(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[27486],{22122:function(e,t,r){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}r.d(t,{Z:function(){return n}})},19756:function(e,t,r){"use strict";function n(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}r.d(t,{Z:function(){return n}})},3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),d=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),s=d(r),m=a,k=s["".concat(c,".").concat(m)]||s[m]||p[m]||o;return r?n.createElement(k,i(i({ref:t},l),{},{components:r})):n.createElement(k,i({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=s;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var d=2;d<o;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},40249:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return u},toc:function(){return c},default:function(){return l}});var n=r(22122),a=r(19756),o=(r(67294),r(3905)),i={title:"Taro.seekBackgroundAudio(OBJECT)",sidebar_label:"seekBackgroundAudio"},u={unversionedId:"apis/multimedia/backgroundaudio/seekBackgroundAudio",id:"version-1.x/apis/multimedia/backgroundaudio/seekBackgroundAudio",isDocsHomePage:!1,title:"Taro.seekBackgroundAudio(OBJECT)",description:"\u4f7f\u7528\u65b9\u5f0f\u540c wx.seekBackgroundAudio\uff0c\u652f\u6301 Promise \u5316\u4f7f\u7528\u3002",source:"@site/versioned_docs/version-1.x/apis/multimedia/backgroundaudio/seekBackgroundAudio.md",sourceDirName:"apis/multimedia/backgroundaudio",slug:"/apis/multimedia/backgroundaudio/seekBackgroundAudio",permalink:"/taro/docs/1.x/apis/multimedia/backgroundaudio/seekBackgroundAudio",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-1.x/apis/multimedia/backgroundaudio/seekBackgroundAudio.md",version:"1.x",sidebar_label:"seekBackgroundAudio",frontMatter:{title:"Taro.seekBackgroundAudio(OBJECT)",sidebar_label:"seekBackgroundAudio"},sidebar:"version-1.x/API",previous:{title:"Taro.pauseBackgroundAudio()",permalink:"/taro/docs/1.x/apis/multimedia/backgroundaudio/pauseBackgroundAudio"},next:{title:"Taro.stopBackgroundAudio()",permalink:"/taro/docs/1.x/apis/multimedia/backgroundaudio/stopBackgroundAudio"}},c=[{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"API\u652f\u6301\u5ea6",id:"api\u652f\u6301\u5ea6",children:[]}],d={toc:c};function l(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u4f7f\u7528\u65b9\u5f0f\u540c ",(0,o.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/wx.seekBackgroundAudio.html"},(0,o.kt)("inlineCode",{parentName:"a"},"wx.seekBackgroundAudio")),"\uff0c\u652f\u6301 ",(0,o.kt)("inlineCode",{parentName:"p"},"Promise")," \u5316\u4f7f\u7528\u3002"),(0,o.kt)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import Taro from '@tarojs/taro'\n\nTaro.seekBackgroundAudio(params).then(...)\n")),(0,o.kt)("h2",{id:"api\u652f\u6301\u5ea6"},"API\u652f\u6301\u5ea6"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"API"),(0,o.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,o.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,o.kt)("th",{parentName:"tr",align:"center"},"React Native"),(0,o.kt)("th",{parentName:"tr",align:"center"},"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f"),(0,o.kt)("th",{parentName:"tr",align:"center"},"\u767e\u5ea6\u5c0f\u7a0b\u5e8f"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Taro.seekBackgroundAudio"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,o.kt)("td",{parentName:"tr",align:"center"}),(0,o.kt)("td",{parentName:"tr",align:"center"}),(0,o.kt)("td",{parentName:"tr",align:"center"}),(0,o.kt)("td",{parentName:"tr",align:"center"})))))}l.isMDXComponent=!0}}]);