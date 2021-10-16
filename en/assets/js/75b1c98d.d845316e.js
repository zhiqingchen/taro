(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[28038],{22122:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,{Z:function(){return r}})},19756:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}n.d(t,{Z:function(){return r}})},3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return v}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),v=o,m=d["".concat(u,".").concat(v)]||d[v]||c[v]||i;return n?r.createElement(m,a(a({ref:t},s),{},{components:n})):r.createElement(m,a({ref:t},s))}));function v(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},78996:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},metadata:function(){return l},toc:function(){return u},default:function(){return s}});var r=n(22122),o=n(19756),i=(n(67294),n(3905)),a={title:"Vue DevTools"},l={unversionedId:"vue-devtools",id:"vue-devtools",isDocsHomePage:!1,title:"Vue DevTools",description:"Taro v3.3.2 is supported.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/vue-devtools.md",sourceDirName:".",slug:"/vue-devtools",permalink:"/taro/en/docs/next/vue-devtools",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/vue-devtools.md",version:"current",frontMatter:{title:"Vue DevTools"},sidebar:"docs",previous:{title:"Vue3",permalink:"/taro/en/docs/next/vue3"},next:{title:"Nerv",permalink:"/taro/en/docs/next/nerv"}},u=[{value:"Usage",id:"usage",children:[{value:"1. Installation",id:"1-installation",children:[]},{value:"2. Configuring the Taro Plugin",id:"2-configuring-the-taro-plugin",children:[]},{value:"3. Compile project",id:"3-compile-project",children:[]}]},{value:"Plugin Parameters",id:"plugin-parameters",children:[{value:"enabled",id:"enabled",children:[]},{value:"port",id:"port",children:[]}]},{value:"Caution",id:"caution",children:[]},{value:"Detailed Design",id:"detailed-design",children:[]}],p={toc:u};function s(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Taro v3.3.2 is supported."),(0,i.kt)("p",{parentName:"div"},"Vue2 is not supported at this time."))),(0,i.kt)("p",null,"When developing mini program you can use ",(0,i.kt)("a",{parentName:"p",href:"https://devtools.vuejs.org/guide/installation.html"},"Vue DevTools"),"\u3002"),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("h3",{id:"1-installation"},"1. Installation"),(0,i.kt)("p",null,"Install the Taro plugin in your project ",(0,i.kt)("inlineCode",{parentName:"p"},"@tarojs/plugin-vue-devtools"),"\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"$ yarn add --dev @tarojs/plugin-vue-devtools\n")),(0,i.kt)("h3",{id:"2-configuring-the-taro-plugin"},"2. Configuring the Taro Plugin"),(0,i.kt)("p",null,"Configure the Taro compile configuration to use ",(0,i.kt)("inlineCode",{parentName:"p"},"@tarojs/plugin-vue-devtools"),"\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="config/dev.js"',title:'"config/dev.js"'},"config = {\n  plugins: [\n    '@tarojs/plugin-vue-devtools'\n  ],\n  // ...\n}\n")),(0,i.kt)("h3",{id:"3-compile-project"},"3. Compile project"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"$ taro build --type weapp --watch\n")),(0,i.kt)("h2",{id:"plugin-parameters"},"Plugin Parameters"),(0,i.kt)("p",null,"The plugin ",(0,i.kt)("inlineCode",{parentName:"p"},"@tarojs/plugin-vue-devtools")," has the following parameters."),(0,i.kt)("h3",{id:"enabled"},"enabled"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("p",null,"Default value: ",(0,i.kt)("inlineCode",{parentName:"p"},"true")),(0,i.kt)("p",null,"Controls whether to connect to ",(0,i.kt)("inlineCode",{parentName:"p"},"vue-devtools"),", which will inject backend code into the developer's app when turned on."),(0,i.kt)("h3",{id:"port"},"port"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("p",null,"Default value: ",(0,i.kt)("inlineCode",{parentName:"p"},"8098")),(0,i.kt)("p",null,"The Websocket port used by Vue DevTools."),(0,i.kt)("h2",{id:"caution"},"Caution"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The version of ",(0,i.kt)("inlineCode",{parentName:"li"},"vue-devtools")," is forcibly locked, and the code of the ",(0,i.kt)("inlineCode",{parentName:"li"},"@tarojs/plugin-vue-devtools")," plugin needs to be modified to update the version.")),(0,i.kt)("p",null,"In addition, the current support for devtools is not comprehensive enough, some features need to be magic backend for the mini program environment to achieve, welcome to build ~"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Support element highlighting.")),(0,i.kt)("h2",{id:"detailed-design"},"Detailed Design"),(0,i.kt)("p",null,"For detailed design, see ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/NervJS/taro-rfcs/blob/master/rfcs/0006-vue-devtools.md"},"RFC"),"\u3002"))}s.isMDXComponent=!0}}]);