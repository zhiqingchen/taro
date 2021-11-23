"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[18765],{3905:function(t,e,a){a.d(e,{Zo:function(){return s},kt:function(){return N}});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},o=Object.keys(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var i=r.createContext({}),m=function(t){var e=r.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):p(p({},e),t)),a},s=function(t){var e=m(t.components);return r.createElement(i.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,o=t.originalType,i=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),k=m(a),N=n,c=k["".concat(i,".").concat(N)]||k[N]||d[N]||o;return a?r.createElement(c,p(p({ref:e},s),{},{components:a})):r.createElement(c,p({ref:e},s))}));function N(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=a.length,p=new Array(o);p[0]=k;var l={};for(var i in e)hasOwnProperty.call(e,i)&&(l[i]=e[i]);l.originalType=t,l.mdxType="string"==typeof t?t:n,p[1]=l;for(var m=2;m<o;m++)p[m]=a[m];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},89458:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return m},toc:function(){return s},default:function(){return k}});var r=a(83117),n=a(80102),o=(a(67294),a(3905)),p=["components"],l={},i=void 0,m={unversionedId:"CONTRIBUTING",id:"version-2.x/CONTRIBUTING",isDocsHomePage:!1,title:"CONTRIBUTING",description:"\u6211\u4eec\u975e\u5e38\u6b22\u8fce\u793e\u533a\u7684\u5f00\u53d1\u8005\u5411 Taro \u505a\u51fa\u8d21\u732e\u3002\u5728\u63d0\u4ea4\u8d21\u732e\u4e4b\u524d\uff0c\u8bf7\u82b1\u4e00\u4e9b\u65f6\u95f4\u9605\u8bfb\u4ee5\u4e0b\u5185\u5bb9\uff0c\u4fdd\u8bc1\u8d21\u732e\u662f\u7b26\u5408\u89c4\u8303\u5e76\u4e14\u80fd\u5e2e\u52a9\u5230\u793e\u533a\u3002",source:"@site/versioned_docs/version-2.x/CONTRIBUTING.md",sourceDirName:".",slug:"/CONTRIBUTING",permalink:"/taro/docs/2.x/CONTRIBUTING",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-2.x/CONTRIBUTING.md",tags:[],version:"2.x",frontMatter:{},sidebar:"version-2.x/docs",previous:{title:"\u52a0\u5165\u793e\u533a\u5171\u5efa",permalink:"/taro/docs/2.x/join-in"}},s=[{value:"Taro \u7ec4\u6210",id:"taro-\u7ec4\u6210",children:[],level:2},{value:"Issue \u62a5\u544a\u6307\u5357",id:"issue-\u62a5\u544a\u6307\u5357",children:[],level:2},{value:"\u5f00\u53d1\u914d\u7f6e",id:"\u5f00\u53d1\u914d\u7f6e",children:[],level:2},{value:"\u63d0\u4ea4 commit",id:"\u63d0\u4ea4-commit",children:[],level:2},{value:"\u4ee3\u7801\u98ce\u683c",id:"\u4ee3\u7801\u98ce\u683c",children:[],level:2},{value:"Pull Request \u6307\u5357",id:"pull-request-\u6307\u5357",children:[],level:2},{value:"Credits",id:"credits",children:[],level:2}],d={toc:s};function k(t){var e=t.components,a=(0,n.Z)(t,p);return(0,o.kt)("wrapper",(0,r.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u6211\u4eec\u975e\u5e38\u6b22\u8fce\u793e\u533a\u7684\u5f00\u53d1\u8005\u5411 Taro \u505a\u51fa\u8d21\u732e\u3002\u5728\u63d0\u4ea4\u8d21\u732e\u4e4b\u524d\uff0c\u8bf7\u82b1\u4e00\u4e9b\u65f6\u95f4\u9605\u8bfb\u4ee5\u4e0b\u5185\u5bb9\uff0c\u4fdd\u8bc1\u8d21\u732e\u662f\u7b26\u5408\u89c4\u8303\u5e76\u4e14\u80fd\u5e2e\u52a9\u5230\u793e\u533a\u3002"),(0,o.kt)("h2",{id:"taro-\u7ec4\u6210"},"Taro \u7ec4\u6210"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"NPM \u5305"),(0,o.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://www.npmjs.com/package/@tarojs/taro"},(0,o.kt)("inlineCode",{parentName:"a"},"@tarojs/taro"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"Taro \u8fd0\u884c\u65f6\u6846\u67b6")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://www.npmjs.com/package/@tarojs/taro-h5"},(0,o.kt)("inlineCode",{parentName:"a"},"@tarojs/taro-h5"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"Taro H5 \u8fd0\u884c\u65f6\u6846\u67b6")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://www.npmjs.com/package/@tarojs/taro-rn"},(0,o.kt)("inlineCode",{parentName:"a"},"@tarojs/taro-rn"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"Taro React Native \u8fd0\u884c\u65f6\u6846\u67b6")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://www.npmjs.com/package/@tarojs/taro-weapp"},(0,o.kt)("inlineCode",{parentName:"a"},"@tarojs/taro-weapp"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"Taro \u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u8fd0\u884c\u65f6\u6846\u67b6")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://www.npmjs.com/package/@tarojs/taro-swan"},(0,o.kt)("inlineCode",{parentName:"a"},"@tarojs/taro-swan"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"Taro \u767e\u5ea6\u667a\u80fd\u5c0f\u7a0b\u5e8f\u8fd0\u884c\u65f6\u6846\u67b6")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://www.npmjs.com/package/@tarojs/taro-tt"},(0,o.kt)("inlineCode",{parentName:"a"},"@tarojs/taro-tt"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"Taro \u5b57\u8282\u8df3\u52a8\u5c0f\u7a0b\u5e8f\u8fd0\u884c\u65f6\u6846\u67b6")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://www.npmjs.com/package/@tarojs/taro-alipay"},(0,o.kt)("inlineCode",{parentName:"a"},"@tarojs/taro-alipay"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"Taro \u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f\u8fd0\u884c\u65f6\u6846\u67b6")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://www.npmjs.com/package/@tarojs/taro-qq"},(0,o.kt)("inlineCode",{parentName:"a"},"@tarojs/taro-qq"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"Taro QQ \u5c0f\u7a0b\u5e8f\u8fd0\u884c\u65f6\u6846\u67b6")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://www.npmjs.com/package/@tarojs/taro-jd"},(0,o.kt)("inlineCode",{parentName:"a"},"@tarojs/taro-jd"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"Taro \u4eac\u4e1c\u5c0f\u7a0b\u5e8f\u8fd0\u884c\u65f6\u6846\u67b6")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://www.npmjs.com/package/@tarojs/taro-quiciapp"},(0,o.kt)("inlineCode",{parentName:"a"},"@tarojs/taro-quickapp"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"Taro \u5feb\u5e94\u7528 \u8fd0\u884c\u65f6\u6846\u67b6")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://www.npmjs.com/package/@tarojs/redux"},(0,o.kt)("inlineCode",{parentName:"a"},"@tarojs/redux"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"Taro \u5c0f\u7a0b\u5e8f Redux \u652f\u6301")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://www.npmjs.com/package/@tarojs/redux-h5"},(0,o.kt)("inlineCode",{parentName:"a"},"@tarojs/redux-h5"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"Taro H5 Redux \u652f\u6301")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://www.npmjs.com/package/@tarojs/redux-rn"},(0,o.kt)("inlineCode",{parentName:"a"},"@tarojs/redux-rn"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"Taro React Native Redux \u652f\u6301")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://www.npmjs.com/package/@tarojs/mobx-common"},(0,o.kt)("inlineCode",{parentName:"a"},"@tarojs/mobx-common"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"Taro MobX \u516c\u5171\u6a21\u5757")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://www.npmjs.com/package/@tarojs/mobx"},(0,o.kt)("inlineCode",{parentName:"a"},"@tarojs/mobx"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"Taro \u5c0f\u7a0b\u5e8f MobX \u652f\u6301")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://www.npmjs.com/package/@tarojs/mobx-h5"},(0,o.kt)("inlineCode",{parentName:"a"},"@tarojs/mobx-h5"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"Taro H5 MobX \u652f\u6301")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://www.npmjs.com/package/@tarojs/mobx-rn"},(0,o.kt)("inlineCode",{parentName:"a"},"@tarojs/mobx-rn"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"Taro React Native MobX \u652f\u6301")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://www.npmjs.com/package/@tarojs/router"},(0,o.kt)("inlineCode",{parentName:"a"},"@tarojs/router"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"Taro H5 \u8def\u7531")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://www.npmjs.com/package/@tarojs/async-await"},(0,o.kt)("inlineCode",{parentName:"a"},"@tarojs/async-await"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u652f\u6301\u4f7f\u7528 async/await \u8bed\u6cd5")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://www.npmjs.com/package/@tarojs/cli"},(0,o.kt)("inlineCode",{parentName:"a"},"@tarojs/cli"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"Taro \u5f00\u53d1\u5de5\u5177")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://www.npmjs.com/package/@tarojs/transformer-wx"},(0,o.kt)("inlineCode",{parentName:"a"},"@tarojs/transformer-wx"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"Taro \u5c0f\u7a0b\u5e8f\u8f6c\u6362\u5668")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://www.npmjs.com/package/@tarojs/taroize"},(0,o.kt)("inlineCode",{parentName:"a"},"@tarojs/taroize"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"Taro \u5c0f\u7a0b\u5e8f\u7f16\u8bd1\u5668")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://www.npmjs.com/package/@tarojs/rn-runner"},(0,o.kt)("inlineCode",{parentName:"a"},"@tarojs/taro-rn-runner"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"Taro React Native \u6253\u5305\u7f16\u8bd1\u5de5\u5177")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://www.npmjs.com/package/@tarojs/webpack-runner"},(0,o.kt)("inlineCode",{parentName:"a"},"@tarojs/webpack-runner"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"Taro H5 \u7aef Webpack \u6253\u5305\u7f16\u8bd1\u5de5\u5177")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://www.npmjs.com/package/@tarojs/components"},(0,o.kt)("inlineCode",{parentName:"a"},"@tarojs/components"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"Taro \u6807\u51c6\u7ec4\u4ef6\u5e93\uff0cH5 \u7248")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://www.npmjs.com/package/@tarojs/components-rn"},(0,o.kt)("inlineCode",{parentName:"a"},"@tarojs/components-rn"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"Taro \u6807\u51c6\u7ec4\u4ef6\u5e93\uff0cReact Native \u7248")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://www.npmjs.com/package/@tarojs/components-qa"},(0,o.kt)("inlineCode",{parentName:"a"},"@tarojs/components-qa"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"Taro \u6807\u51c6\u7ec4\u4ef6\u5e93\uff0c\u5feb\u5e94\u7528 \u7248")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://www.npmjs.com/package/@tarojs/plugin-babel"},(0,o.kt)("inlineCode",{parentName:"a"},"@tarojs/plugin-babel"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"Taro Babel \u7f16\u8bd1\u63d2\u4ef6")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://www.npmjs.com/package/@tarojs/plugin-sass"},(0,o.kt)("inlineCode",{parentName:"a"},"@tarojs/plugin-sass"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"Taro Sass \u7f16\u8bd1\u63d2\u4ef6")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://www.npmjs.com/package/@tarojs/plugin-less"},(0,o.kt)("inlineCode",{parentName:"a"},"@tarojs/plugin-less"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"Taro Less \u7f16\u8bd1\u63d2\u4ef6")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://www.npmjs.com/package/@tarojs/plugin-stylus"},(0,o.kt)("inlineCode",{parentName:"a"},"@tarojs/plugin-stylus"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"Taro Stylus \u7f16\u8bd1\u63d2\u4ef6")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://www.npmjs.com/package/@tarojs/plugin-csso"},(0,o.kt)("inlineCode",{parentName:"a"},"@tarojs/plugin-csso"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"Taro CSS \u538b\u7f29\u63d2\u4ef6")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://www.npmjs.com/package/@tarojs/plugin-uglifyjs"},(0,o.kt)("inlineCode",{parentName:"a"},"@tarojs/plugin-uglifyjs"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"Taro JS \u538b\u7f29\u63d2\u4ef6")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://www.npmjs.com/package/eslint-config-taro"},(0,o.kt)("inlineCode",{parentName:"a"},"eslint-config-taro"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"Taro ESLint \u89c4\u5219")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://www.npmjs.com/package/eslint-plugin-taro"},(0,o.kt)("inlineCode",{parentName:"a"},"eslint-plugin-taro"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"Taro ESLint \u63d2\u4ef6")))),(0,o.kt)("h2",{id:"issue-\u62a5\u544a\u6307\u5357"},"Issue \u62a5\u544a\u6307\u5357"),(0,o.kt)("p",null,"\u5982\u679c\u63d0\u4ea4\u7684\u662f Bug \u62a5\u544a\uff0c\u8bf7\u52a1\u5fc5\u9075\u5b88 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/NervJS/taro/blob/master/.github/ISSUE_TEMPLATE/bug_report.md"},(0,o.kt)("inlineCode",{parentName:"a"},"Bug report"))," \u6a21\u677f\u3002"),(0,o.kt)("p",null,"\u5982\u679c\u63d0\u4ea4\u7684\u662f\u529f\u80fd\u9700\u6c42\uff0c\u8bf7\u5728 issue \u7684\u6807\u9898\u7684\u8d77\u59cb\u5904\u589e\u52a0 ",(0,o.kt)("inlineCode",{parentName:"p"},"[Feature request]")," \u5b57\u7b26\u3002"),(0,o.kt)("h2",{id:"\u5f00\u53d1\u914d\u7f6e"},"\u5f00\u53d1\u914d\u7f6e"),(0,o.kt)("p",null,"\u4f60\u9700\u8981\u4fdd\u8bc1\u4f60\u7684 Node.js \u7248\u672c\u5927\u4e8e 8\uff0c\u628a\u4ed3\u5e93 Clone \u5230\u672c\u5730\u3002\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm install # or yarn\n$ npm run bootstrap\n")),(0,o.kt)("h2",{id:"\u63d0\u4ea4-commit"},"\u63d0\u4ea4 commit"),(0,o.kt)("p",null,"\u6574\u4e2a Taro \u4ed3\u5e93\u9075\u4ece ",(0,o.kt)("a",{parentName:"p",href:"https://gist.github.com/stephenparish/9941e89d80e2bc58a153"},"Angular Style Commit Message Conventions"),"\uff0c\u5728\u8f93\u5165 commit message \u7684\u65f6\u5019\u8bf7\u52a1\u5fc5\u9075\u4ece\u6b64\u89c4\u8303\u3002"),(0,o.kt)("h2",{id:"\u4ee3\u7801\u98ce\u683c"},"\u4ee3\u7801\u98ce\u683c"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"JavaScript"),"\uff1aJavaScript \u98ce\u683c\u9075\u4ece ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/standard/standard"},"JavaScript Standard Style"),"\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"TypeScript"),"\uff1aTypeScript \u98ce\u683c\u4e5f\u662f ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/standard/standard"},"JavaScript Standard Style")," \u7684\u53d8\u79cd\uff0c\u8be6\u60c5\u8bf7\u770b\u76f8\u5173\u5305\u76ee\u5f55\u4e0b\u7684 ",(0,o.kt)("inlineCode",{parentName:"li"},"tslint.json")," \u548c ",(0,o.kt)("inlineCode",{parentName:"li"},"tsconfig.json"),"\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u6837\u5f0f\uff1a\u9075\u5faa\u76f8\u5173\u5305\u76ee\u5f55\u4e0b\u7684 ",(0,o.kt)("inlineCode",{parentName:"li"},".stylelintrc")," \u98ce\u683c\u3002")),(0,o.kt)("h2",{id:"pull-request-\u6307\u5357"},"Pull Request \u6307\u5357"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u52a1\u5fc5\u4fdd\u8bc1 ",(0,o.kt)("inlineCode",{parentName:"li"},"npm run build")," \u80fd\u591f\u7f16\u8bd1\u6210\u529f\uff1b"),(0,o.kt)("li",{parentName:"ol"},"\u52a1\u5fc5\u4fdd\u8bc1\u63d0\u4ea4\u5230\u4ee3\u7801\u9075\u5faa\u76f8\u5173\u5305\u4e2d\u7684 ",(0,o.kt)("inlineCode",{parentName:"li"},".eslintrc"),", ",(0,o.kt)("inlineCode",{parentName:"li"},".tslintrc"),", ",(0,o.kt)("inlineCode",{parentName:"li"},".stylelintrc")," \u6240\u89c4\u5b9a\u7684\u89c4\u8303\uff1b"),(0,o.kt)("li",{parentName:"ol"},"\u5f53\u76f8\u5173\u5305\u7684 ",(0,o.kt)("inlineCode",{parentName:"li"},"package.json")," \u542b\u6709 ",(0,o.kt)("inlineCode",{parentName:"li"},"npm test")," \u547d\u4ee4\u65f6\uff0c\u5fc5\u987b\u4fdd\u8bc1\u6240\u6709\u6d4b\u8bd5\u7528\u4f8b\u90fd\u9700\u8981\u901a\u8fc7\uff1b"),(0,o.kt)("li",{parentName:"ol"},"\u5f53\u76f8\u5173\u5305\u6709\u6d4b\u8bd5\u7528\u4f8b\u65f6\uff0c\u8bf7\u7ed9\u4f60\u63d0\u4ea4\u7684\u4ee3\u7801\u4e5f\u6dfb\u52a0\u76f8\u5e94\u7684\u6d4b\u8bd5\u7528\u4f8b\uff1b"),(0,o.kt)("li",{parentName:"ol"},"\u63d0\u4ea4\u4ee3\u7801 commit \u65f6\uff0ccommit \u4fe1\u606f\u9700\u8981\u9075\u5faa ",(0,o.kt)("a",{parentName:"li",href:"https://gist.github.com/stephenparish/9941e89d80e2bc58a153"},"Angular Style Commit Message Conventions"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5982\u679c\u63d0\u4ea4\u5230\u4ee3\u7801\u975e\u5e38\u591a\u6216\u529f\u80fd\u590d\u6742\uff0c\u53ef\u4ee5\u628a PR \u5206\u6210\u51e0\u4e2a commit \u4e00\u8d77\u63d0\u4ea4\u3002\u6211\u4eec\u5728\u5408\u5e76\u65f6\u4f1a\u4f1a\u6839\u636e\u60c5\u51b5 squash\u3002")),(0,o.kt)("h2",{id:"credits"},"Credits"),(0,o.kt)("p",null,"\u611f\u8c22\u4ee5\u4e0b\u6240\u6709\u7ed9 Taro \u8d21\u732e\u8fc7\u4ee3\u7801\u7684\u5f00\u53d1\u8005\uff1a"),(0,o.kt)("a",{href:"https://github.com/NervJS/taro/graphs/contributors"},(0,o.kt)("img",{src:"https://opencollective.com/taro/contributors.svg?width=890&button=false"})))}k.isMDXComponent=!0}}]);