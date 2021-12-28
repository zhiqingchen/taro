"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[27231],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return s}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),f=c(r),s=o,d=f["".concat(l,".").concat(s)]||f[s]||u[s]||a;return r?n.createElement(d,i(i({ref:t},m),{},{components:r})):n.createElement(d,i({ref:t},m))}));function s(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},67535:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return m},default:function(){return f}});var n=r(83117),o=r(80102),a=(r(67294),r(3905)),i=["components"],p={title:"Project Configuration"},l=void 0,c={unversionedId:"project-config",id:"version-3.x/project-config",isDocsHomePage:!1,title:"Project Configuration",description:"Each type of mini-program platform has its own project profile, for example",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-3.x/project-config.md",sourceDirName:".",slug:"/project-config",permalink:"/taro/en/docs/project-config",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.x/project-config.md",tags:[],version:"3.x",frontMatter:{title:"Project Configuration"},sidebar:"version-3.x/docs",previous:{title:"\u9875\u9762\u914d\u7f6e",permalink:"/taro/en/docs/page-config"},next:{title:"Babel Configuration",permalink:"/taro/en/docs/babel-config"}},m=[],u={toc:m};function f(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Each type of mini-program platform has its own project profile, for example"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"WeChat mini-program, ",(0,a.kt)("a",{parentName:"li",href:"https://developers.weixin.qq.com/miniprogram/dev/devtools/projectconfig.html?search-key=%E9%A1%B9%E7%9B%AE%E9%85%8D%E7%BD%AE"},"project.config.json")),(0,a.kt)("li",{parentName:"ul"},"Baidu smart mini-program, ",(0,a.kt)("a",{parentName:"li",href:"https://smartprogram.baidu.com/docs/develop/devtools/projectconfig/"},"project.swan.json")),(0,a.kt)("li",{parentName:"ul"},"ByteDance mini-program, ",(0,a.kt)("a",{parentName:"li",href:"https://microapp.bytedance.com/docs/zh-CN/mini-app/develop/framework/basic-reference/catalog-structure/#projectconfigjson-%E9%85%8D%E7%BD%AE%E4%BB%8B%E7%BB%8D"},"project.config.json")),(0,a.kt)("li",{parentName:"ul"},"QQ mini-program, project.config.json"),(0,a.kt)("li",{parentName:"ul"},"Alipay mini-program,",(0,a.kt)("a",{parentName:"li",href:"https://opendocs.alipay.com/mini/framework/project"},"mini.project.json")),(0,a.kt)("li",{parentName:"ul"},"Jingdong mini-program, Not found")),(0,a.kt)("p",null,"To be able to adapt to the different profiles of different mini-program platforms, Taro supports adding individual project profiles for each mini-program platform."),(0,a.kt)("p",null,"Projects created through the Taro template will have a project configuration file ",(0,a.kt)("inlineCode",{parentName:"p"},"project.config.json")," by default, which ",(0,a.kt)("strong",{parentName:"p"},"can only be used for WeChat mini-program"),", to be compatible with other  mini-program platforms, please add the configuration file of the corresponding platform according to the following corresponding rules, and the configuration is consistent with the requirements of the respective mini-program platforms."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Mini-program Platform"),(0,a.kt)("th",{parentName:"tr",align:null},"Configuration File"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"WeChat mini-program"),(0,a.kt)("td",{parentName:"tr",align:null},"project.config.json")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Baidu smart mini-program"),(0,a.kt)("td",{parentName:"tr",align:null},"project.swan.json")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ByteDance mini-program"),(0,a.kt)("td",{parentName:"tr",align:null},"project.tt.json")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"QQ mini-program"),(0,a.kt)("td",{parentName:"tr",align:null},"project.qq.json")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Alipay mini-program"),(0,a.kt)("td",{parentName:"tr",align:null},"project.alipay.json")))))}f.isMDXComponent=!0}}]);