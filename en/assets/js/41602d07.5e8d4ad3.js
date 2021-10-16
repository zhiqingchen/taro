(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[43073],{22122:function(t,e,n){"use strict";function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}n.d(e,{Z:function(){return r}})},19756:function(t,e,n){"use strict";function r(t,e){if(null==t)return{};var n,r,o={},u=Object.keys(t);for(r=0;r<u.length;r++)n=u[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}n.d(e,{Z:function(){return r}})},3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},u=Object.keys(t);for(r=0;r<u.length;r++)n=u[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(t);for(r=0;r<u.length;r++)n=u[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var a=r.createContext({}),c=function(t){var e=r.useContext(a),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=c(t.components);return r.createElement(a.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,u=t.originalType,a=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),s=c(n),m=o,f=s["".concat(a,".").concat(m)]||s[m]||d[m]||u;return n?r.createElement(f,i(i({ref:e},p),{},{components:n})):r.createElement(f,i({ref:e},p))}));function m(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var u=n.length,i=new Array(u);i[0]=s;var l={};for(var a in e)hasOwnProperty.call(e,a)&&(l[a]=e[a]);l.originalType=t,l.mdxType="string"==typeof t?t:o,i[1]=l;for(var c=2;c<u;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},93929:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return a},default:function(){return p}});var r=n(22122),o=n(19756),u=(n(67294),n(3905)),i={title:"Taro.getMenuButtonBoundingClientRect()",sidebar_label:"getMenuButtonBoundingClientRect"},l={unversionedId:"apis/ui/menu/getMenuButtonBoundingClientRect",id:"apis/ui/menu/getMenuButtonBoundingClientRect",isDocsHomePage:!1,title:"Taro.getMenuButtonBoundingClientRect()",description:"Gets the location of the menu button (the Mini Program control button in the upper right corner). The top left corner of the screen is the origin.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/apis/ui/menu/getMenuButtonBoundingClientRect.md",sourceDirName:"apis/ui/menu",slug:"/apis/ui/menu/getMenuButtonBoundingClientRect",permalink:"/taro/en/docs/next/apis/ui/menu/getMenuButtonBoundingClientRect",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/apis/ui/menu/getMenuButtonBoundingClientRect.md",version:"current",sidebar_label:"getMenuButtonBoundingClientRect",frontMatter:{title:"Taro.getMenuButtonBoundingClientRect()",sidebar_label:"getMenuButtonBoundingClientRect"},sidebar:"API",previous:{title:"Taro.nextTick(callback)",permalink:"/taro/en/docs/next/apis/ui/custom-component/nextTick"},next:{title:"Taro.onWindowResize(callback)",permalink:"/taro/en/docs/next/apis/ui/window/onWindowResize"}},a=[{value:"Type",id:"type",children:[]},{value:"Parameters",id:"parameters",children:[{value:"Rect",id:"rect",children:[]}]},{value:"API Support",id:"api-support",children:[]}],c={toc:a};function p(t){var e=t.components,n=(0,o.Z)(t,["components"]);return(0,u.kt)("wrapper",(0,r.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,u.kt)("p",null,"Gets the location of the menu button (the Mini Program control button in the upper right corner). The top left corner of the screen is the origin."),(0,u.kt)("blockquote",null,(0,u.kt)("p",{parentName:"blockquote"},(0,u.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/ui/menu/wx.getMenuButtonBoundingClientRect.html"},"Reference"))),(0,u.kt)("h2",{id:"type"},"Type"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-tsx"},"() => Rect\n")),(0,u.kt)("h2",{id:"parameters"},"Parameters"),(0,u.kt)("h3",{id:"rect"},"Rect"),(0,u.kt)("p",null,"The location of the menu button"),(0,u.kt)("table",null,(0,u.kt)("thead",null,(0,u.kt)("tr",null,(0,u.kt)("th",null,"Property"),(0,u.kt)("th",null,"Type"),(0,u.kt)("th",null,"Description"))),(0,u.kt)("tbody",null,(0,u.kt)("tr",null,(0,u.kt)("td",null,"width"),(0,u.kt)("td",null,(0,u.kt)("code",null,"number")),(0,u.kt)("td",null,"Width (in px)")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"height"),(0,u.kt)("td",null,(0,u.kt)("code",null,"number")),(0,u.kt)("td",null,"Height (in px)")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"top"),(0,u.kt)("td",null,(0,u.kt)("code",null,"number")),(0,u.kt)("td",null,"The coordinate of the upper boundary (in px)")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"right"),(0,u.kt)("td",null,(0,u.kt)("code",null,"number")),(0,u.kt)("td",null,"The coordinate of the right boundary (in px)")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"left"),(0,u.kt)("td",null,(0,u.kt)("code",null,"number")),(0,u.kt)("td",null,"The coordinate of the left boundary (in px)")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"bottom"),(0,u.kt)("td",null,(0,u.kt)("code",null,"number")),(0,u.kt)("td",null,"The coordinate of the bottom boundary (in px)")))),(0,u.kt)("h2",{id:"api-support"},"API Support"),(0,u.kt)("table",null,(0,u.kt)("thead",{parentName:"table"},(0,u.kt)("tr",{parentName:"thead"},(0,u.kt)("th",{parentName:"tr",align:"center"},"API"),(0,u.kt)("th",{parentName:"tr",align:"center"},"WeChat Mini-Program"),(0,u.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,u.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,u.kt)("tbody",{parentName:"table"},(0,u.kt)("tr",{parentName:"tbody"},(0,u.kt)("td",{parentName:"tr",align:"center"},"Taro.getMenuButtonBoundingClientRect"),(0,u.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,u.kt)("td",{parentName:"tr",align:"center"}),(0,u.kt)("td",{parentName:"tr",align:"center"})))))}p.isMDXComponent=!0}}]);