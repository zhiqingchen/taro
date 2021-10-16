(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[97838],{22122:function(e,t,r){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}r.d(t,{Z:function(){return n}})},19756:function(e,t,r){"use strict";function n(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}r.d(t,{Z:function(){return n}})},3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=p(r),d=o,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||a;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},21727:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return c},toc:function(){return l},default:function(){return s}});var n=r(22122),o=r(19756),a=(r(67294),r(3905)),i={title:"WeChat Mini Program Convert to Taro"},c={unversionedId:"taroize",id:"version-3.x/taroize",isDocsHomePage:!1,title:"WeChat Mini Program Convert to Taro",description:"Taro can convert native WeChat mini program applications into Taro projects, thus making the project a multi-terminated application.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-3.x/taroize.md",sourceDirName:".",slug:"/taroize",permalink:"/taro/en/docs/taroize",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.x/taroize.md",version:"3.x",frontMatter:{title:"WeChat Mini Program Convert to Taro"},sidebar:"version-3.x/docs",previous:{title:"Native Mini Program Project Using Taro",permalink:"/taro/en/docs/taro-in-miniapp"},next:{title:"Convert to React",permalink:"/taro/en/docs/convert-to-react"}},l=[{value:"Reverse conversion steps",id:"reverse-conversion-steps",children:[]}],p={toc:l};function s(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Taro can convert ",(0,a.kt)("strong",{parentName:"p"},"native WeChat mini program applications into Taro projects"),", thus making the project a multi-terminated application."),(0,a.kt)("p",null,"The converted code is highly readable and can continue to be used for secondary development using ",(0,a.kt)("strong",{parentName:"p"},"React")," (conversion to ",(0,a.kt)("strong",{parentName:"p"},"Vue")," is supported in the future)."),(0,a.kt)("h3",{id:"reverse-conversion-steps"},"Reverse conversion steps"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Install the Taro command line tool.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm i -g @tarojs/cli\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Run the ",(0,a.kt)("inlineCode",{parentName:"li"},"convert")," command in the root directory of the WeChat mini program project to convert.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# The converted code is stored in the `taroConvert` folder in the root directory\n$ taro convert\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Go to the ",(0,a.kt)("inlineCode",{parentName:"li"},"taroConvert")," directory and install the dependencies on.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ cd taroConvert\n$ npm install\n")),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"Run the ",(0,a.kt)("inlineCode",{parentName:"li"},"build")," command to compile the project to any platform.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ taro build --type [platform]\n")))}s.isMDXComponent=!0}}]);