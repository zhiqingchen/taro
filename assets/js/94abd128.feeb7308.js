(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[12134],{22122:function(t,e,n){"use strict";function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}n.d(e,{Z:function(){return r}})},19756:function(t,e,n){"use strict";function r(t,e){if(null==t)return{};var n,r,l={},u=Object.keys(t);for(r=0;r<u.length;r++)n=u[r],e.indexOf(n)>=0||(l[n]=t[n]);return l}n.d(e,{Z:function(){return r}})},3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return d},kt:function(){return k}});var r=n(67294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,l=function(t,e){if(null==t)return{};var n,r,l={},u=Object.keys(t);for(r=0;r<u.length;r++)n=u[r],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(t);for(r=0;r<u.length;r++)n=u[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var a=r.createContext({}),c=function(t){var e=r.useContext(a),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},d=function(t){var e=c(t.components);return r.createElement(a.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var n=t.components,l=t.mdxType,u=t.originalType,a=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),s=c(n),k=l,m=s["".concat(a,".").concat(k)]||s[k]||p[k]||u;return n?r.createElement(m,o(o({ref:e},d),{},{components:n})):r.createElement(m,o({ref:e},d))}));function k(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var u=n.length,o=new Array(u);o[0]=s;var i={};for(var a in e)hasOwnProperty.call(e,a)&&(i[a]=e[a]);i.originalType=t,i.mdxType="string"==typeof t?t:l,o[1]=i;for(var c=2;c<u;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},66935:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return o},metadata:function(){return i},toc:function(){return a},default:function(){return d}});var r=n(22122),l=n(19756),u=(n(67294),n(3905)),o={title:"Taro.getMenuButtonBoundingClientRect()",sidebar_label:"getMenuButtonBoundingClientRect"},i={unversionedId:"apis/ui/menu/getMenuButtonBoundingClientRect",id:"version-2.x/apis/ui/menu/getMenuButtonBoundingClientRect",isDocsHomePage:!1,title:"Taro.getMenuButtonBoundingClientRect()",description:"\u83b7\u53d6\u83dc\u5355\u6309\u94ae\uff08\u53f3\u4e0a\u89d2\u80f6\u56ca\u6309\u94ae\uff09\u7684\u5e03\u5c40\u4f4d\u7f6e\u4fe1\u606f\u3002\u5750\u6807\u4fe1\u606f\u4ee5\u5c4f\u5e55\u5de6\u4e0a\u89d2\u4e3a\u539f\u70b9\u3002",source:"@site/versioned_docs/version-2.x/apis/ui/menu/getMenuButtonBoundingClientRect.md",sourceDirName:"apis/ui/menu",slug:"/apis/ui/menu/getMenuButtonBoundingClientRect",permalink:"/taro/docs/2.x/apis/ui/menu/getMenuButtonBoundingClientRect",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-2.x/apis/ui/menu/getMenuButtonBoundingClientRect.md",version:"2.x",sidebar_label:"getMenuButtonBoundingClientRect",frontMatter:{title:"Taro.getMenuButtonBoundingClientRect()",sidebar_label:"getMenuButtonBoundingClientRect"},sidebar:"version-2.x/API",previous:{title:"Taro.nextTick(callback)",permalink:"/taro/docs/2.x/apis/ui/custom-component/nextTick"},next:{title:"Taro.onWindowResize(callback)",permalink:"/taro/docs/2.x/apis/ui/window/onWindowResize"}},a=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Rect",id:"rect",children:[]}]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],c={toc:a};function d(t){var e=t.components,n=(0,l.Z)(t,["components"]);return(0,u.kt)("wrapper",(0,r.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,u.kt)("p",null,"\u83b7\u53d6\u83dc\u5355\u6309\u94ae\uff08\u53f3\u4e0a\u89d2\u80f6\u56ca\u6309\u94ae\uff09\u7684\u5e03\u5c40\u4f4d\u7f6e\u4fe1\u606f\u3002\u5750\u6807\u4fe1\u606f\u4ee5\u5c4f\u5e55\u5de6\u4e0a\u89d2\u4e3a\u539f\u70b9\u3002"),(0,u.kt)("blockquote",null,(0,u.kt)("p",{parentName:"blockquote"},(0,u.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/ui/menu/wx.getMenuButtonBoundingClientRect.html"},"\u53c2\u8003\u6587\u6863"))),(0,u.kt)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-tsx"},"() => Rect\n")),(0,u.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,u.kt)("h3",{id:"rect"},"Rect"),(0,u.kt)("p",null,"\u83dc\u5355\u6309\u94ae\u7684\u5e03\u5c40\u4f4d\u7f6e\u4fe1\u606f"),(0,u.kt)("table",null,(0,u.kt)("thead",null,(0,u.kt)("tr",null,(0,u.kt)("th",null,"\u53c2\u6570"),(0,u.kt)("th",null,"\u7c7b\u578b"),(0,u.kt)("th",null,"\u8bf4\u660e"))),(0,u.kt)("tbody",null,(0,u.kt)("tr",null,(0,u.kt)("td",null,"bottom"),(0,u.kt)("td",null,(0,u.kt)("code",null,"number")),(0,u.kt)("td",null,"\u4e0b\u8fb9\u754c\u5750\u6807\uff0c\u5355\u4f4d\uff1apx")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"height"),(0,u.kt)("td",null,(0,u.kt)("code",null,"number")),(0,u.kt)("td",null,"\u9ad8\u5ea6\uff0c\u5355\u4f4d\uff1apx")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"left"),(0,u.kt)("td",null,(0,u.kt)("code",null,"number")),(0,u.kt)("td",null,"\u5de6\u8fb9\u754c\u5750\u6807\uff0c\u5355\u4f4d\uff1apx")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"right"),(0,u.kt)("td",null,(0,u.kt)("code",null,"number")),(0,u.kt)("td",null,"\u53f3\u8fb9\u754c\u5750\u6807\uff0c\u5355\u4f4d\uff1apx")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"top"),(0,u.kt)("td",null,(0,u.kt)("code",null,"number")),(0,u.kt)("td",null,"\u4e0a\u8fb9\u754c\u5750\u6807\uff0c\u5355\u4f4d\uff1apx")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"width"),(0,u.kt)("td",null,(0,u.kt)("code",null,"number")),(0,u.kt)("td",null,"\u5bbd\u5ea6\uff0c\u5355\u4f4d\uff1apx")))),(0,u.kt)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),(0,u.kt)("table",null,(0,u.kt)("thead",{parentName:"table"},(0,u.kt)("tr",{parentName:"thead"},(0,u.kt)("th",{parentName:"tr",align:"center"},"API"),(0,u.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,u.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,u.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,u.kt)("tbody",{parentName:"table"},(0,u.kt)("tr",{parentName:"tbody"},(0,u.kt)("td",{parentName:"tr",align:"center"},"Taro.getMenuButtonBoundingClientRect"),(0,u.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,u.kt)("td",{parentName:"tr",align:"center"}),(0,u.kt)("td",{parentName:"tr",align:"center"})))))}d.isMDXComponent=!0}}]);