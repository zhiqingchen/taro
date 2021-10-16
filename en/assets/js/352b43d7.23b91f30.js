(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[71468],{22122:function(e,n,t){"use strict";function a(){return(a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}t.d(n,{Z:function(){return a}})},19756:function(e,n,t){"use strict";function a(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}t.d(n,{Z:function(){return a}})},3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return l},kt:function(){return m}});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},l=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=c(t),m=o,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return t?a.createElement(g,r(r({ref:n},l),{},{components:t})):a.createElement(g,r({ref:n},l))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,r=new Array(i);r[0]=d;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,r[1]=p;for(var c=2;c<i;c++)r[c]=t[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},65561:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return r},metadata:function(){return p},toc:function(){return s},default:function(){return l}});var a=t(22122),o=t(19756),i=(t(67294),t(3905)),r={title:"Native Mini Program Project Using Taro"},p={unversionedId:"taro-in-miniapp",id:"taro-in-miniapp",isDocsHomePage:!1,title:"Native Mini Program Project Using Taro",description:"Partial use of Taro in native projects has been supported since 3.0.25.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/taro-in-miniapp.md",sourceDirName:".",slug:"/taro-in-miniapp",permalink:"/taro/en/docs/next/taro-in-miniapp",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/taro-in-miniapp.md",version:"current",frontMatter:{title:"Native Mini Program Project Using Taro"},sidebar:"docs",previous:{title:"Taro Uses Native Modules",permalink:"/taro/en/docs/next/hybrid"},next:{title:"WeChat Mini Program Convert to Taro",permalink:"/taro/en/docs/next/taroize"}},s=[{value:"Basic Hybrid Usage",id:"basic-hybrid-usage",children:[{value:"App Entry",id:"app-entry",children:[]},{value:"Referencing JS files from native projects",id:"referencing-js-files-from-native-projects",children:[]},{value:"Referencing native components of native projects",id:"referencing-native-components-of-native-projects",children:[]}]},{value:"Subpackage some pages of the Taro project",id:"subpackage-some-pages-of-the-taro-project",children:[{value:"Dependency Segmentation",id:"dependency-segmentation",children:[]}]},{value:"Taro project as a complete subcontract",id:"taro-project-as-a-complete-subcontract",children:[{value:"Using",id:"using",children:[]},{value:"Splitting Taro projects into multiple subcontracts",id:"splitting-taro-projects-into-multiple-subcontracts",children:[]}]},{value:"Compile Taro components as native custom components",id:"compile-taro-components-as-native-custom-components",children:[{value:"Usage",id:"usage",children:[]},{value:"Pass props",id:"pass-props",children:[]}]}],c={toc:s};function l(e){var n=e.components,t=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Partial use of Taro in native projects has been supported since ",(0,i.kt)("inlineCode",{parentName:"p"},"3.0.25"),"."),(0,i.kt)("h4",{id:"sample-project"},"Sample Project:"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/NervJS/taro-blended"},"taro-blended")),(0,i.kt)("h2",{id:"basic-hybrid-usage"},"Basic Hybrid Usage"),(0,i.kt)("h3",{id:"app-entry"},"App Entry"),(0,i.kt)("h4",{id:"1-packaged-in-mixed-mode"},"1. Packaged in mixed mode"),(0,i.kt)("p",null,"Use the ",(0,i.kt)("inlineCode",{parentName:"p"},"-blended")," argument when compiling the project to output mixed-mode code."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"taro build --type weapp --blended\ntaro build --type weapp --watch --blended\n")),(0,i.kt)("h4",{id:"2-move-the-output-directory-of-the-taro-project-to-the-native-project"},"2. Move the output directory of the Taro project to the native project"),(0,i.kt)("p",null,"It is possible to write a ",(0,i.kt)("strong",{parentName:"p"}," Taro plugin")," for automatic movement, see ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/NervJS/taro-blended/blob/master/taro-project/plugin-mv/index.js"},"plugin-mv"),"\u3002"),(0,i.kt)("h4",{id:"3-referencing-the-taro-entry-file-in-the-native-projects-appjs"},"3. Referencing the Taro entry file in the native project's app.js"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="app.config.js"',title:'"app.config.js"'},"// the entry file of the Taro project must be referenced\nconst taroApp = require('./taro/app.js').taroApp\n\nApp({\n  onShow () {\n    // Optionally, call the onShow lifecycle of the Taro project app\n    taroApp.onShow()\n  },\n\n  onHide () {\n    // Optionally, call the onHide lifecycle of the Taro project app\n    taroApp.onHide()\n  }\n})\n")),(0,i.kt)("h3",{id:"referencing-js-files-from-native-projects"},"Referencing JS files from native projects"),(0,i.kt)("p",null,"Sometimes we need to reference public js modules in the native project in the Taro project, such as the reported sdk, but Webpack packages these public modules together, resulting in two copies of the public module (one in the Taro product and one in the native project)."),(0,i.kt)("p",null,"To optimize package size, we want to not package into Taro products, but instead reference code directly from the native project, which can be done using Webpack's ",(0,i.kt)("a",{parentName:"p",href:"https://webpack.js.org/configuration/externals/"},"externals")," configuration."),(0,i.kt)("h4",{id:"example"},"Example"),(0,i.kt)("p",null,"Assume the following project structure:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\u251c\u2500\u2500 miniapp           Natvie Project\n|   \u2514\u2500\u2500 utils\n|       \u2514\u2500\u2500 util.js\n\u2514\u2500\u2500 taro-project      Taro Project\n    \u2514\u2500\u2500 src\n        \u2514\u2500\u2500 pages\n            \u2514\u2500\u2500 index this page need miniapp/utils/util.js\n")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Configure ",(0,i.kt)("inlineCode",{parentName:"li"},"alias")," to make it easier for ",(0,i.kt)("inlineCode",{parentName:"li"},"externals")," to filter out dependencies that don't need to be packaged."),(0,i.kt)("li",{parentName:"ol"},"Configure Webpack ",(0,i.kt)("inlineCode",{parentName:"li"},"externals")," to select the dependencies that do not need to be packaged and calculate the relative paths."),(0,i.kt)("li",{parentName:"ol"},"Set the environment variable ",(0,i.kt)("inlineCode",{parentName:"li"},"process.env.NODE_ENV")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"production")," for externals to take effect. (When no environment variable is set manually, the default environment variable is ",(0,i.kt)("inlineCode",{parentName:"li"},"development")," in ",(0,i.kt)("inlineCode",{parentName:"li"},"watch")," mode, otherwise it is ",(0,i.kt)("inlineCode",{parentName:"li"},"production"),")")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="config/index.js"',title:'"config/index.js"'},"const config = {\n  alias: {\n    // The development environment directly references the dependencies under the native project for easy development\n    '@/utils': process.env.NODE_ENV === 'production' ? path.resolve(__dirname, '../utils') : path.resolve(__dirname, '../../miniapp/utils')\n  },\n  mini: {\n    webpackChain (chain) {\n      chain.merge({\n        externals: [\n          (context, request, callback) => {\n            const externalDirs = ['@/utils']\n            const externalDir = externalDirs.find(dir => request.startsWith(dir))\n\n            if (process.env.NODE_ENV === 'production' && externalDir) {\n              const externalDirPath = config.alias[externalDir]\n              const res = request.replace('@/utils', path.relative(context, externalDirPath))\n\n              return callback(null, `commonjs ${res}`)\n            }\n\n            callback()\n          },\n        ]\n      })\n    }\n  }\n}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="taro-project/src/pages/index/index.js"',title:'"taro-project/src/pages/index/index.js"'},"import { logSomething } from '@/utils/util'\nlogSomething()\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="webpack Packing results"',title:'"webpack',Packing:!0,'results"':!0},'{\n  "./src/pages/index/index.jsx": (function(m, e, __webpack_require__) {\n    var _utils_util = __webpack_require__("@/utils/util");\n    // ...\n  }),\n  "@/utils/util": (function(module, exports) {\n    module.exports = require("../../../utils/util");\n  })\n}\n')),(0,i.kt)("h3",{id:"referencing-native-components-of-native-projects"},"Referencing native components of native projects"),(0,i.kt)("p",null,"Sometimes we need to reference a public custom component in a native project in a Taro project."),(0,i.kt)("p",null,"As with ",(0,i.kt)("a",{parentName:"p",href:"./taro-in-miniapp#reference-native-project-js-file"},"referencing the native project's js file"),", we want to resolve the component paths correctly in the development environment and reference the native project components directly in the production environment instead of repackaging them, which can be done using Taro's ",(0,i.kt)("a",{parentName:"p",href:"./config-detail#alias"},"alias")," configuration to achieve this."),(0,i.kt)("h4",{id:"example-1"},"Example"),(0,i.kt)("p",null,"Assume the following project structure:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\u251c\u2500\u2500 miniapp                 Natvie Project\n|   \u2514\u2500\u2500 components\n|       \u2514\u2500\u2500 title\n|           \u251c\u2500\u2500 index.js\n|           \u251c\u2500\u2500 index.wxml\n|           \u251c\u2500\u2500 index.wxss\n|           \u2514\u2500\u2500 index.json\n\u2514\u2500\u2500 taro-project           Taro Project\n    \u2514\u2500\u2500 src\n        \u251c\u2500\u2500 components     Copy the components from the native project so that the development environment can parse the components correctly\n        |   \u2514\u2500\u2500 title      \n        \u2514\u2500\u2500 pages\n            \u2514\u2500\u2500 index      You want to refer to miniapp/components/title in this page\n")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Copy the components from the native project to the Taro project so that the development environment can resolve the components correctly."),(0,i.kt)("li",{parentName:"ol"},"Configure ",(0,i.kt)("inlineCode",{parentName:"li"},"alias")," correctly according to the development environment and production environment.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="config/index.js"',title:'"config/index.js"'},"const config = {\n  alias: {\n    '@/components': process.env.NODE_ENV === 'production' ? path.resolve(__dirname, '../components') : path.resolve(__dirname, '../../miniapp/components')\n  }\n}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="taro-project/src/pages/index/index.config.js"',title:'"taro-project/src/pages/index/index.config.js"'},"export default {\n  usingComponents: {\n    title: '@/components/title/index'\n  }\n}\n")),(0,i.kt)("h2",{id:"subpackage-some-pages-of-the-taro-project"},"Subpackage some pages of the Taro project"),(0,i.kt)("p",null,"Subpackage ",(0,i.kt)("strong",{parentName:"p"},"some pages")," of the Taro project."),(0,i.kt)("h3",{id:"dependency-segmentation"},"Dependency Segmentation"),(0,i.kt)("p",null,"By default, Taro will package common dependencies shared by pages into ",(0,i.kt)("inlineCode",{parentName:"p"},"common.js")," and node_modules dependencies into ",(0,i.kt)("inlineCode",{parentName:"p"},"vendor.js"),"."),(0,i.kt)("p",null,"However, when subpackaging, we will want to package ",(0,i.kt)("strong",{parentName:"p"},"only dependencies that are common to the subpackage")," into the subpackage, rather than hitting ",(0,i.kt)("inlineCode",{parentName:"p"},"common.js")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"vendor.js")," in the main package. This requires us to subdivide the dependencies, which can be done with Webpack's ",(0,i.kt)("a",{parentName:"p",href:"https://webpack.js.org/plugins/split-chunks-plugin/"},"splitChunk")," and Taro's ","[addChunkPages]","(. /config-detail#miniaddchunkpages) to do this."),(0,i.kt)("h4",{id:"example-2"},"Example"),(0,i.kt)("p",null,"Assume the following project structure:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\u251c\u2500\u2500 dist\n|   |\u2500\u2500 common.js     Public Dependence\n|   |\u2500\u2500 vendors.js    node_modules Dependence\n|   \u2514\u2500\u2500 subPackages\n|       \u251c\u2500\u2500 foo\n|       \u251c\u2500\u2500 bar\n|       \u2514\u2500\u2500 common.js Only public dependencies used in subPackages subpackages\n\u2514\u2500\u2500 src\n    \u2514\u2500\u2500 subPackages\n        \u251c\u2500\u2500 foo\n        \u2514\u2500\u2500 bar\n")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Use ",(0,i.kt)("strong",{parentName:"li"},"Webpack splitChunks")," to package the dependencies unique to only the ",(0,i.kt)("inlineCode",{parentName:"li"},"subpackages")," subpackage into ",(0,i.kt)("inlineCode",{parentName:"li"},"subpackages/common.js"),"."),(0,i.kt)("li",{parentName:"ol"},"Use ",(0,i.kt)("strong",{parentName:"li"},"Taro addChunkPages")," configuration to add references to ",(0,i.kt)("inlineCode",{parentName:"li"},"subpackages/common.js")," in the headers of all pages in the subpackage.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="config/index.js"',title:'"config/index.js"'},"const config = {\n  mini: {\n    addChunkPages (pages) {\n      pages.set('subpackages/bar/index', ['subpackages/common']),\n      pages.set('subpackages/foo/index', ['subpackages/common'])\n    },\n    webpackChain (chain) {\n      chain.merge({\n        optimization: {\n          splitChunks: {\n            cacheGroups: {\n              subpackagesCommon: {\n                name: 'subpackages/common',\n                minChunks: 2,\n                test: (module, chunks) => {\n                  const isNoOnlySubpackRequired = chunks.find(chunk => !(/\\bsubpackages\\b/.test(chunk.name)))\n                  return !isNoOnlySubpackRequired\n                },\n                priority: 200\n              }\n            }\n          }\n        }\n      })\n    }\n  }\n}\n")),(0,i.kt)("h2",{id:"taro-project-as-a-complete-subcontract"},"Taro project as a complete subcontract"),(0,i.kt)("h3",{id:"using"},"Using"),(0,i.kt)("h4",{id:"1-installing-and-using-the-plugin"},"1. Installing and using the plugin"),(0,i.kt)("p",null,"Installing Plugins ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/NervJS/taro-plugin-indie"},"@tarojs/plugin-indie")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm i @tarojs/plugin-indie --save-dev\n")),(0,i.kt)("p",null,"Using plugin"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="config/index.js"',title:'"config/index.js"'},"const config = {\n  plugins: [\n    '@tarojs/plugin-indie'\n  ]\n}\n")),(0,i.kt)("h4",{id:"2-packaged-in-mixed-mode"},"2. Packaged in mixed mode"),(0,i.kt)("p",null,"Use the ",(0,i.kt)("inlineCode",{parentName:"p"},"-blended")," argument when compiling the project to output mixed-mode code."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"taro build --type weapp --blended\ntaro build --type weapp --watch --blended\n")),(0,i.kt)("h4",{id:"3-move-the-output-directory-of-the-taro-project-to-the-native-project"},"3. Move the output directory of the Taro project to the native project"),(0,i.kt)("p",null,"It is possible to write a ",(0,i.kt)("strong",{parentName:"p"},"Taro plugin")," for automatic movement, see ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/NervJS/taro-blended/blob/master/taro-project/plugin-mv/index.js"},"plugin-mv"),"\u3002"),(0,i.kt)("h4",{id:"4-set-the-subcontract-configuration-for-the-native-project"},"4. Set the subcontract configuration for the native project"),(0,i.kt)("h3",{id:"splitting-taro-projects-into-multiple-subcontracts"},"Splitting Taro projects into multiple subcontracts"),(0,i.kt)("p",null,"Suppose we have a Taro project with page A and page B. We need to add page A to one of the native project's subpackages, M, and page B to another subpackage, N. To do this, we first need to configure Webpack's ",(0,i.kt)("inlineCode",{parentName:"p"},"output.jsonpFunction")," to avoid conflicts with ",(0,i.kt)("inlineCode",{parentName:"p"},"chunkid"),"."),(0,i.kt)("p",null,"To do this, unlike normal typing ",(0,i.kt)("strong",{parentName:"p"},"a subpackage"),", you first need to configure Webpack's ",(0,i.kt)("inlineCode",{parentName:"p"},"output.jsonpFunction")," configuration to avoid ",(0,i.kt)("inlineCode",{parentName:"p"},"chunkid")," conflicts."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="config/index.js"',title:'"config/index.js"'},'config = {\n  // ...\n  mini: {\n    webpackChain (chain) {\n      chain.merge({\n        output: {\n          // can be dynamically modified with npm script and environment variables\n          jsonpFunction: process.env.JSONP_NAME || "webpackJsonp"\n        }\n      })\n    }\n  }\n}\n')),(0,i.kt)("p",null,"Then package the A and B pages separately using mixed mode, in the same way as ",(0,i.kt)("a",{parentName:"p",href:"./taro-in-miniapp#taro-projects-as-a-complete-subpackage"},"Taro project as a complete sub-package"),"."),(0,i.kt)("h2",{id:"compile-taro-components-as-native-custom-components"},"Compile Taro components as native custom components"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"v3.1.2+, only React is supported for now")),(0,i.kt)("p",null,"Taro supports compiling components into ",(0,i.kt)("strong",{parentName:"p"},"native mini program custom components")," for use in native projects."),(0,i.kt)("h3",{id:"usage"},"Usage"),(0,i.kt)("h4",{id:"1-configuring-component-paths"},"1. Configuring Component Paths"),(0,i.kt)("p",null,"Modify ",(0,i.kt)("inlineCode",{parentName:"p"},"app.config.js")," to add ",(0,i.kt)("inlineCode",{parentName:"p"},"components")," configuration, pointing to the path of the component entry file."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="app.config.js"',title:'"app.config.js"'},"export default {\n  // ...\n  components: [\n    'pages/index/index',\n    'components/picker/index'\n  ]\n}\n")),(0,i.kt)("h4",{id:"2-start-compiling"},"2. Start compiling"),(0,i.kt)("p",null,"Use the ",(0,i.kt)("inlineCode",{parentName:"p"},"taro build native-components")," command with the parameter ",(0,i.kt)("inlineCode",{parentName:"p"},"type")," to compile a custom component for the corresponding platform."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"taro build native-components --type [platform] [--watch]\n")),(0,i.kt)("h3",{id:"pass-props"},"Pass props"),(0,i.kt)("p",null,"When passing props to the native custom components compiled by Taro, they need to be passed uniformly via the ",(0,i.kt)("inlineCode",{parentName:"p"},"props")," parameter."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="page/index/index.js"',title:'"page/index/index.js"'},"Page({\n  data: {\n    pickerProps: {\n      mode: 'format',\n      value: [0, 0, 0],\n      onInitial (value, index) {\n        console.log('onInitial')\n      }\n    }\n  }\n})\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="page/index/index.wxml"',title:'"page/index/index.wxml"'},'\x3c!--index.wxml--\x3e\n<view>\n  <picker props="{{pickerProps}}"></picker>\n</view>\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Taro Component - Picker"',title:'"Taro',Component:!0,"-":!0,'Picker"':!0},"function Picker ({ mode, value, onInitial }) {\n  return (\n    // ...\n  )\n}\n")))}l.isMDXComponent=!0}}]);