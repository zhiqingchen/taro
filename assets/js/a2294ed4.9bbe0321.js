(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[44617],{22122:function(e,r,t){"use strict";function a(){return(a=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}t.d(r,{Z:function(){return a}})},19756:function(e,r,t){"use strict";function a(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}t.d(r,{Z:function(){return a}})},3905:function(e,r,t){"use strict";t.d(r,{Zo:function(){return s},kt:function(){return m}});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var p=a.createContext({}),l=function(e){var r=a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},s=function(e){var r=l(e.components);return a.createElement(p.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},d=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=l(t),m=n,b=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return t?a.createElement(b,i(i({ref:r},s),{},{components:t})):a.createElement(b,i({ref:r},s))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=d;var c={};for(var p in r)hasOwnProperty.call(r,p)&&(c[p]=r[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<o;l++)i[l]=t[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},50465:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p},default:function(){return s}});var a=t(22122),n=t(19756),o=(t(67294),t(3905)),i={title:"Taro.removeTabBarBadge(OBJECT)",sidebar_label:"removeTabBarBadge"},c={unversionedId:"apis/interface/tabbar/removeTabBarBadge",id:"version-1.x/apis/interface/tabbar/removeTabBarBadge",isDocsHomePage:!1,title:"Taro.removeTabBarBadge(OBJECT)",description:"\u4f7f\u7528\u65b9\u5f0f\u540c wx.removeTabBarBadge\uff0c\u652f\u6301 Promise \u5316\u4f7f\u7528\u3002",source:"@site/versioned_docs/version-1.x/apis/interface/tabbar/removeTabBarBadge.md",sourceDirName:"apis/interface/tabbar",slug:"/apis/interface/tabbar/removeTabBarBadge",permalink:"/taro/docs/1.x/apis/interface/tabbar/removeTabBarBadge",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-1.x/apis/interface/tabbar/removeTabBarBadge.md",version:"1.x",sidebar_label:"removeTabBarBadge",frontMatter:{title:"Taro.removeTabBarBadge(OBJECT)",sidebar_label:"removeTabBarBadge"},sidebar:"version-1.x/API",previous:{title:"Taro.setTabBarBadge(OBJECT)",permalink:"/taro/docs/1.x/apis/interface/tabbar/setTabBarBadge"},next:{title:"Taro.showTabBarRedDot(OBJECT)",permalink:"/taro/docs/1.x/apis/interface/tabbar/showTabBarRedDot"}},p=[{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"API\u652f\u6301\u5ea6",id:"api\u652f\u6301\u5ea6",children:[]}],l={toc:p};function s(e){var r=e.components,t=(0,n.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u4f7f\u7528\u65b9\u5f0f\u540c ",(0,o.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/wx.removeTabBarBadge.html"},(0,o.kt)("inlineCode",{parentName:"a"},"wx.removeTabBarBadge")),"\uff0c\u652f\u6301 ",(0,o.kt)("inlineCode",{parentName:"p"},"Promise")," \u5316\u4f7f\u7528\u3002"),(0,o.kt)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import Taro from '@tarojs/taro'\n\nTaro.removeTabBarBadge(params).then(...)\n")),(0,o.kt)("h2",{id:"api\u652f\u6301\u5ea6"},"API\u652f\u6301\u5ea6"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"API"),(0,o.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,o.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,o.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Taro.removeTabBarBadge"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,o.kt)("td",{parentName:"tr",align:"center"})))))}s.isMDXComponent=!0}}]);