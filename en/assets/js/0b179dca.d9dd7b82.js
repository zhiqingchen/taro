(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[67124],{22122:function(t,e,n){"use strict";function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}n.d(e,{Z:function(){return r}})},19756:function(t,e,n){"use strict";function r(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}n.d(e,{Z:function(){return r}})},3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return s},kt:function(){return k}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var u=r.createContext({}),c=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},s=function(t){var e=c(t.components);return r.createElement(u.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},p=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,u=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),p=c(n),k=a,m=p["".concat(u,".").concat(k)]||p[k]||d[k]||o;return n?r.createElement(m,l(l({ref:e},s),{},{components:n})):r.createElement(m,l({ref:e},s))}));function k(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,l=new Array(o);l[0]=p;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i.mdxType="string"==typeof t?t:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},12535:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return l},metadata:function(){return i},toc:function(){return u},default:function(){return s}});var r=n(22122),a=n(19756),o=(n(67294),n(3905)),l={title:"Taro.setNavigationBarColor(option)",sidebar_label:"setNavigationBarColor"},i={unversionedId:"apis/ui/navigation-bar/setNavigationBarColor",id:"apis/ui/navigation-bar/setNavigationBarColor",isDocsHomePage:!1,title:"Taro.setNavigationBarColor(option)",description:"Sets the color of the navigation bar in the page.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/apis/ui/navigation-bar/setNavigationBarColor.md",sourceDirName:"apis/ui/navigation-bar",slug:"/apis/ui/navigation-bar/setNavigationBarColor",permalink:"/taro/en/docs/next/apis/ui/navigation-bar/setNavigationBarColor",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/apis/ui/navigation-bar/setNavigationBarColor.md",version:"current",sidebar_label:"setNavigationBarColor",frontMatter:{title:"Taro.setNavigationBarColor(option)",sidebar_label:"setNavigationBarColor"},sidebar:"API",previous:{title:"Taro.setNavigationBarTitle(option)",permalink:"/taro/en/docs/next/apis/ui/navigation-bar/setNavigationBarTitle"},next:{title:"Taro.hideNavigationBarLoading(option)",permalink:"/taro/en/docs/next/apis/ui/navigation-bar/hideNavigationBarLoading"}},u=[{value:"Type",id:"type",children:[]},{value:"Parameters",id:"parameters",children:[{value:"Option",id:"option",children:[]},{value:"AnimationOption",id:"animationoption",children:[]}]},{value:"Sample Code",id:"sample-code",children:[]},{value:"API Support",id:"api-support",children:[]}],c={toc:u};function s(t){var e=t.components,n=(0,a.Z)(t,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Sets the color of the navigation bar in the page."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/ui/navigation-bar/wx.setNavigationBarColor.html"},"Reference"))),(0,o.kt)("h2",{id:"type"},"Type"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"(option: Option) => Promise<CallbackResult>\n")),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("h3",{id:"option"},"Option"),(0,o.kt)("table",null,(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Property"),(0,o.kt)("th",null,"Type"),(0,o.kt)("th",{style:{textAlign:"center"}},"Required"),(0,o.kt)("th",null,"Description"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"backgroundColor"),(0,o.kt)("td",null,(0,o.kt)("code",null,"string")),(0,o.kt)("td",{style:{textAlign:"center"}},"Yes"),(0,o.kt)("td",null,"Background color value, whose valid value is hexadecimal color")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"frontColor"),(0,o.kt)("td",null,(0,o.kt)("code",null,"string")),(0,o.kt)("td",{style:{textAlign:"center"}},"Yes"),(0,o.kt)("td",null,"Foreground color values, including colors of button, title, and status bar; only #ffffff and #000000 are supported.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"animation"),(0,o.kt)("td",null,(0,o.kt)("code",null,"AnimationOption")),(0,o.kt)("td",{style:{textAlign:"center"}},"No"),(0,o.kt)("td",null,"Animation effects")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"complete"),(0,o.kt)("td",null,(0,o.kt)("code",null,"(res: CallbackResult) => void")),(0,o.kt)("td",{style:{textAlign:"center"}},"No"),(0,o.kt)("td",null,"The callback function used when the API call completed (always executed whether the call succeeds or fails)")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"fail"),(0,o.kt)("td",null,(0,o.kt)("code",null,"(res: CallbackResult) => void")),(0,o.kt)("td",{style:{textAlign:"center"}},"No"),(0,o.kt)("td",null,"The callback function for a failed API call")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"success"),(0,o.kt)("td",null,(0,o.kt)("code",null,"(res: CallbackResult) => void")),(0,o.kt)("td",{style:{textAlign:"center"}},"No"),(0,o.kt)("td",null,"The callback function for a successful API call")))),(0,o.kt)("h3",{id:"animationoption"},"AnimationOption"),(0,o.kt)("p",null,"object.animation is composed as follows"),(0,o.kt)("table",null,(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Property"),(0,o.kt)("th",null,"Type"),(0,o.kt)("th",{style:{textAlign:"center"}},"Required"),(0,o.kt)("th",null,"Description"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"duration"),(0,o.kt)("td",null,(0,o.kt)("code",null,"number")),(0,o.kt)("td",{style:{textAlign:"center"}},"No"),(0,o.kt)("td",null,"Animation change time (in ms)")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"timingFunc"),(0,o.kt)("td",null,(0,o.kt)("code",null,'"linear" | "easeIn" | "easeOut" | "easeInOut"')),(0,o.kt)("td",{style:{textAlign:"center"}},"No"),(0,o.kt)("td",null,"Animation change mode.",(0,o.kt)("br",null),(0,o.kt)("br",null),"Enum: ",(0,o.kt)("br",null),"- 'linear': The animation keeps the same speed from start to end;",(0,o.kt)("br",null),"- 'easeIn': The animation starts at low speed;",(0,o.kt)("br",null),"- 'easeOut': The animation ends at low speed;",(0,o.kt)("br",null),"- 'easeInOut': The animation starts and ends at low speed;")))),(0,o.kt)("h2",{id:"sample-code"},"Sample Code"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"Taro.setNavigationBarColor({\n    frontColor: '#ffffff',\n    backgroundColor: '#ff0000',\n    animation: {\n        duration: 400,\n        timingFunc: 'easeIn'\n    }\n})\n")),(0,o.kt)("h2",{id:"api-support"},"API Support"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"API"),(0,o.kt)("th",{parentName:"tr",align:"center"},"WeChat Mini-Program"),(0,o.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,o.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Taro.setNavigationBarColor"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f(The ",(0,o.kt)("inlineCode",{parentName:"td"},"animation")," is not supported)")))))}s.isMDXComponent=!0}}]);