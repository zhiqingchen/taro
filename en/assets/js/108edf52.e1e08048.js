"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[61443],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,g=u["".concat(p,".").concat(d)]||u[d]||c[d]||i;return n?r.createElement(g,o(o({ref:t},m),{},{components:n})):r.createElement(g,o({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7512:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return m},default:function(){return u}});var r=n(83117),a=n(80102),i=(n(67294),n(3905)),o=["components"],l={title:"Write Platform plugins"},p=void 0,s={unversionedId:"platform-plugin-how",id:"platform-plugin-how",isDocsHomePage:!1,title:"Write Platform plugins",description:"Extending a compiled platform requires writing a Taro plugin for compile-time and run-time compatibility respectively.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/platform-plugin-how.md",sourceDirName:".",slug:"/platform-plugin-how",permalink:"/taro/en/docs/next/platform-plugin-how",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/platform-plugin-how.md",tags:[],version:"current",frontMatter:{title:"Write Platform plugins"},sidebar:"docs",previous:{title:"Overview",permalink:"/taro/en/docs/next/platform-plugin"},next:{title:"TaroPlatformBase",permalink:"/taro/en/docs/next/platform-plugin-base"}},m=[{value:"Platform Plugin Architecture",id:"platform-plugin-architecture",children:[{value:"Plugin Directory",id:"plugin-directory",children:[],level:3},{value:"Architecture Diagram",id:"architecture-diagram",children:[],level:3}],level:2},{value:"Compile Time",id:"compile-time",children:[{value:"\u4e00\u3001Writing Taro plugins",id:"\u4e00writing-taro-plugins",children:[{value:"ctx.registerPlatform(options: object)",id:"ctxregisterplatformoptions-object",children:[{value:"options.name",id:"optionsname",children:[],level:5},{value:"options.useConfigName",id:"optionsuseconfigname",children:[],level:5},{value:"options.fn(arg)",id:"optionsfnarg",children:[{value:"arg",id:"arg",children:[],level:6}],level:5}],level:4}],level:3},{value:"\u4e8c\u3001Writing platform classes",id:"\u4e8cwriting-platform-classes",children:[],level:3}],level:2},{value:"Runtime",id:"runtime",children:[{value:"\u4e00\u3001Handling Of Runtime Entry",id:"\u4e00handling-of-runtime-entry",children:[{value:"1. Writing runtime.ts",id:"1-writing-runtimets",children:[],level:4},{value:"2. Connection Plugin Entry",id:"2-connection-plugin-entry",children:[],level:4}],level:3},{value:"\u4e8c\u3001Handling API",id:"\u4e8chandling-api",children:[{value:"1. Configure initNativeApi",id:"1-configure-initnativeapi",children:[],level:4},{value:"2. processApis(taro, global, options)",id:"2-processapistaro-global-options",children:[{value:"Parameters",id:"parameters",children:[{value:"options",id:"options",children:[],level:6}],level:5}],level:4}],level:3}],level:2},{value:"Build Packages",id:"build-packages",children:[],level:2},{value:"Types",id:"types",children:[],level:2}],c={toc:m};function u(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Extending a compiled platform requires writing a ","[Taro plugin]","(. /plugin) for compile-time and run-time compatibility respectively."),(0,i.kt)("h2",{id:"platform-plugin-architecture"},"Platform Plugin Architecture"),(0,i.kt)("h3",{id:"plugin-directory"},"Plugin Directory"),(0,i.kt)("p",null,"Using ",(0,i.kt)("inlineCode",{parentName:"p"},"@tarojs/plugin-platform-weapp")," as an example."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\u251c\u2500\u2500 src                      Source code directory\n|   \u251c\u2500\u2500 index.ts             Plugin entry\n|   \u251c\u2500\u2500 program.ts           Compile entry\n|   \u251c\u2500\u2500 template.ts          Template handling\n|   \u251c\u2500\u2500 runtime.ts           Runtime entry\n|   \u251c\u2500\u2500 runtime-utils.ts     Runtime dependency tools\n|   \u251c\u2500\u2500 apis.ts              API related processing\n|   \u251c\u2500\u2500 apis-list.ts         API list\n|   \u251c\u2500\u2500 components.ts        Component list\n|   \u2514\u2500\u2500 components-react.ts  Types of components for React to use\n\u251c\u2500\u2500 types                    Type\n\u251c\u2500\u2500 index.js                 Compile-time entry\n\u251c\u2500\u2500 tsconfig.json\n\u251c\u2500\u2500 rollup.config.json\n\u251c\u2500\u2500 package.json\n\u2514\u2500\u2500 README.md\n")),(0,i.kt)("h3",{id:"architecture-diagram"},"Architecture Diagram"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://storage.jd.com/cjj-pub-images/platform-plugin-construct.png",alt:null})),(0,i.kt)("h2",{id:"compile-time"},"Compile Time"),(0,i.kt)("p",null,"Handles compile-related operations such as Webpack configuration, template generation rules, etc."),(0,i.kt)("h3",{id:"\u4e00writing-taro-plugins"},"\u4e00\u3001Writing Taro plugins"),(0,i.kt)("p",null,"Pre-reading: ",(0,i.kt)("a",{parentName:"p",href:"./plugin#%E5%A6%82%E4%BD%95%E7%BC%96%E5%86%99%E4%B8%80%E4%B8%AA%E6%8F%92%E4%BB%B6"},"[How to Write a Taro Plugin]"),"\u3002"),(0,i.kt)("p",null,"First we need to write a Taro plugin to register our compilation platform, eg."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="index.ts"',title:'"index.ts"'},"export default (ctx) => {\n  ctx.registerPlatform({\n    name: 'weapp',\n    useConfigName: 'mini',\n    async fn (arg) {\n      // ...\n    }\n  })\n}\n")),(0,i.kt)("h4",{id:"ctxregisterplatformoptions-object"},"ctx.registerPlatform(options: object)"),(0,i.kt)("p",null,"Register a compilation platform"),(0,i.kt)("h5",{id:"optionsname"},"options.name"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"The platform name for the CLI compile command."),(0,i.kt)("p",null,"If 'xxx' is configured, the CLI command to use when compiling this platform:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"taro build --type xxx\ntaro build --type xxx --watch\n")),(0,i.kt)("h5",{id:"optionsuseconfigname"},"options.useConfigName"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"Incorporate the specified fields from the Taro compilation configuration into the compilation."),(0,i.kt)("p",null,"Taro minn program related configuration is placed under the ",(0,i.kt)("inlineCode",{parentName:"p"},"mini")," field by default, so in general it is sufficient to configure ",(0,i.kt)("inlineCode",{parentName:"p"},"usingConfigName: mini"),"."),(0,i.kt)("h5",{id:"optionsfnarg"},"options.fn(arg)"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"function")),(0,i.kt)("p",null,"The entry function for platform compilation accepts an argument ",(0,i.kt)("inlineCode",{parentName:"p"},"arg"),", in which we can start writing the logic for end-platform compilation."),(0,i.kt)("h6",{id:"arg"},"arg"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"object")),(0,i.kt)("p",null,"Integrate the above ",(0,i.kt)("a",{parentName:"p",href:"./platform-plugin-how#optionsuseconfigname"},"options.useConfigName")," specified fields, see ",(0,i.kt)("a",{parentName:"p",href:"/taro/en/docs/next/config-detail"},"compilation configuration details"),"."),(0,i.kt)("h3",{id:"\u4e8cwriting-platform-classes"},"\u4e8c\u3001Writing platform classes"),(0,i.kt)("p",null,"Next add to the plugin entry function mentioned in the previous section."),(0,i.kt)("p",null,"We abstracted the logic commonly used at compile time into a base class ",(0,i.kt)("a",{parentName:"p",href:"./platform-plugin-base"},"TaroPlatformBase"),", which developers can ","[inherit]","(./platform-plugin-base#custom platform class) from this base class to enable platform compilation."),(0,i.kt)("p",null,"The compilation interface of the above custom platform class is then called in the plugin entry function as follows."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="index.ts"',title:'"index.ts"'},"import Weapp from './program'\n\nexport default (ctx) => {\n  ctx.registerPlatform({\n    name: 'weapp',\n    useConfigName: 'mini',\n    async fn (arg) {\n      // Call the start function of the custom platform class to start platform compilation\n      const program = new Weapp(ctx, config)\n      await program.start()\n    }\n  })\n}\n")),(0,i.kt)("h2",{id:"runtime"},"Runtime"),(0,i.kt)("p",null,"Handles runtime-related operations such as APIs, components, Taro runtime logic, etc."),(0,i.kt)("h3",{id:"\u4e00handling-of-runtime-entry"},"\u4e00\u3001Handling Of Runtime Entry"),(0,i.kt)("h4",{id:"1-writing-runtimets"},"1. Writing runtime.ts"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"runtime.ts")," is our runtime entry file, which ",(0,i.kt)("inlineCode",{parentName:"p"},"Webpack")," will inject into ",(0,i.kt)("inlineCode",{parentName:"p"},"app.js")," for reference when it is compiled."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="runtime.ts"',title:'"runtime.ts"'},"import { mergeReconciler, mergeInternalComponents } from '@tarojs/shared'\nimport { hostConfig, components } from './runtime-utils'\n\nmergeReconciler(hostConfig)\nmergeInternalComponents(components)\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="runtime-utils.ts"',title:'"runtime-utils.ts"'},"export * from './components'\nexport const hostConfig = {}\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"runtime.ts")," responsibilities:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Use the ",(0,i.kt)("inlineCode",{parentName:"li"},"mergeReconciler")," function to merge the custom ",(0,i.kt)("inlineCode",{parentName:"li"},"hostConfig")," into the global ",(0,i.kt)("a",{parentName:"li",href:"./platform-plugin-reconciler"},"Reconciler"),"."),(0,i.kt)("li",{parentName:"ul"},"Use the ",(0,i.kt)("inlineCode",{parentName:"li"},"mergeInternalComponents")," function to merge custom component information ",(0,i.kt)("a",{parentName:"li",href:"./platform-plugin-base#31-write-componentsts"},"components.ts")," into the global ",(0,i.kt)("inlineCode",{parentName:"li"},"internalComponents")," component information object.")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The runtime-utils.ts is extracted to make it easier for other plugins to reference")),(0,i.kt)("h4",{id:"2-connection-plugin-entry"},"2. Connection Plugin Entry"),(0,i.kt)("p",null,"In order for ",(0,i.kt)("inlineCode",{parentName:"p"},"Webpack")," to know where to refer to the above runtime entry files, ",(0,i.kt)("inlineCode",{parentName:"p"},"runtimePath")," needs to be configured."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="program.ts"',title:'"program.ts"'},"class Weapp extends TaroPlatformBase {\n  runtimePath = '@tarojs/plugin-platform-weapp/dist/runtime'\n}\n")),(0,i.kt)("h3",{id:"\u4e8chandling-api"},"\u4e8c\u3001Handling API"),(0,i.kt)("p",null,"In Taro, users need to refer to Taro's built-in API and the ",(0,i.kt)("strong",{parentName:"p"},"Promise-ified")," mini program API from ",(0,i.kt)("inlineCode",{parentName:"p"},"@tarojs/taro"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import Taro from '@tarojs/taro'\n\n//  API\nTaro.getCurrentInstance()\n// Mini program API\nTaro.request()\n")),(0,i.kt)("h4",{id:"1-configure-initnativeapi"},"1. Configure initNativeApi"),(0,i.kt)("p",null,"The original ",(0,i.kt)("inlineCode",{parentName:"p"},"@tarojs/taro")," package only provides the built-in API, we need to add the API for the mini program and the API we want to mount on the Taro object by configuring ",(0,i.kt)("inlineCode",{parentName:"p"},"Reconciler")," with ",(0,i.kt)("a",{parentName:"p",href:"./platform-plugin-reconciler#initnativeapi-taro"},"initNativeApi")," option to add APIs for mini program to the global Taro object and the APIs we want to mount on the Taro object."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="apis-list.ts"',title:'"apis-list.ts"'},"// When additional native APIs need to be added, splitting a separate `apis-list.ts` file can be beneficial for maintenance.\n\n// Synchronization API\nexport const noPromiseApis = new Set([\n  'getAccountInfoSync'\n])\n\n// Asynchronous APIs, which can set `success`, `fail`, and `complete` callbacks, need to be Promiseized.\nexport const needPromiseApis = new Set([\n  'addCard'\n])\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="apis.ts"',title:'"apis.ts"'},"import { processApis } from '@tarojs/shared'\nimport { noPromiseApis, needPromiseApis } from './apis-list'\n\ndeclare const wx: any\n\nexport function initNativeApi (taro) {\n  // The following section describes the processApis function in detail\n  processApis(taro, wx, {\n    noPromiseApis,\n    needPromiseApis\n  })\n  // Any API that can be mounted for taro\n  taro.cloud = wx.cloud\n}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="runtime-utils.ts"',title:'"runtime-utils.ts"'},"import { initNativeApi } from './apis'\nexport const hostConfig = { initNativeApi }\n")),(0,i.kt)("h4",{id:"2-processapistaro-global-options"},"2. processApis(taro, global, options)"),(0,i.kt)("h5",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Parameters"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"taro"),(0,i.kt)("td",{parentName:"tr",align:"left"},"object"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Taro Object")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"global"),(0,i.kt)("td",{parentName:"tr",align:"left"},"object"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Mini Program global objects, such as WeChat wx")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"options"),(0,i.kt)("td",{parentName:"tr",align:"left"},"object"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Configuration items")))),(0,i.kt)("h6",{id:"options"},"options"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Parameters"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"noPromiseApis"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Set",(0,i.kt)("inlineCode",{parentName:"td"},"<string>")),(0,i.kt)("td",{parentName:"tr",align:"left"},"New Synchronization API")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"needPromiseApis"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Set",(0,i.kt)("inlineCode",{parentName:"td"},"<string>")),(0,i.kt)("td",{parentName:"tr",align:"left"},"New Asynchronous API")))),(0,i.kt)("p",null,"The above ",(0,i.kt)("inlineCode",{parentName:"p"},"processApis")," function helps us do three things."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"mount all of the platform's common mini program APIs onto a Taro object"),(0,i.kt)("li",{parentName:"ol"},"mount the common mini program global object properties on the Taro object"),(0,i.kt)("li",{parentName:"ol"},"mount the user-input mini program API on the Taro object")),(0,i.kt)("h2",{id:"build-packages"},"Build Packages"),(0,i.kt)("p",null,"The plugin is packaged using ",(0,i.kt)("inlineCode",{parentName:"p"},"Rollup")," and requires the following files to be packaged out."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Entry file"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Mode"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"src/index.ts"),(0,i.kt)("td",{parentName:"tr",align:"left"},"cjs"),(0,i.kt)("td",{parentName:"tr",align:"left"},"YES"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Plugin entry for Taro CLI parsing")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"src/runtime.ts"),(0,i.kt)("td",{parentName:"tr",align:"left"},"es"),(0,i.kt)("td",{parentName:"tr",align:"left"},"YES"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Runtime entry")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"src/runtime-utils.ts"),(0,i.kt)("td",{parentName:"tr",align:"left"},"es"),(0,i.kt)("td",{parentName:"tr",align:"left"},"NO"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Collection of runtime tools for reference by inherited subclasses")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"src/components-react.ts"),(0,i.kt)("td",{parentName:"tr",align:"left"},"es"),(0,i.kt)("td",{parentName:"tr",align:"left"},"NO"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Need to be implemented when there are new components for React to reference")))),(0,i.kt)("p",null,"Note that Taro-related packages need to be configured with ",(0,i.kt)("inlineCode",{parentName:"p"},"external")," to avoid repackaging."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="rollup.config.js"',title:'"rollup.config.js"'},"{\n  external: ['@tarojs/shared', '@tarojs/service']\n}\n")),(0,i.kt)("h2",{id:"types"},"Types"),(0,i.kt)("p",null,"The types maintained by the Taro core library may not include components and APIs added by the current plugin, in which case we need to perform ","[module augmentation (module augmentation)]"," for ",(0,i.kt)("inlineCode",{parentName:"p"},"@tarojs/taro")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"@tarojs/components")," (",(0,i.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/declaration-merging.html#module-augmentation"},"https://www.typescriptlang.org/docs/handbook/declaration-merging.html#module-augmentation"),")."),(0,i.kt)("p",null,"Create a type definition file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="types/shims-iot.d.ts"',title:'"types/shims-iot.d.ts"'},"// Extend new APIs and component definitions for Alipay IOT mini program\nimport { ComponentType } from 'react'\nimport Taro from '@tarojs/taro'\n\ndeclare module '@tarojs/taro' {\n  namespace ix {\n    function onCashierEventReceive (cb: any): void\n  }\n}\n\ninterface PosterProps {\n  posid: string\n  audible?: boolean\n  onSuccess?: () => void\n  onFail?: () => void\n  onChange?: () => void\n}\n\ndeclare module '@tarojs/components' {\n  export const Poster: ComponentType<PosterProps>\n}\n")),(0,i.kt)("p",null,"The developer can simply introduce this file in the type definition file."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="global.d.ts"',title:'"global.d.ts"'},'/// <reference path="node_modules/@tarojs/plugin-platform-alipay-iot/types/shims-iot.d.ts" />\n')))}u.isMDXComponent=!0}}]);