"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[56606],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),p=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=p(r),d=n,k=u["".concat(c,".").concat(d)]||u[d]||m[d]||l;return r?a.createElement(k,i(i({ref:t},s),{},{components:r})):a.createElement(k,i({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var p=2;p<l;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},28308:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return s},default:function(){return u}});var a=r(83117),n=r(80102),l=(r(67294),r(3905)),i=["components"],o={title:"SelectorQuery",sidebar_label:"SelectorQuery"},c=void 0,p={unversionedId:"apis/wxml/SelectorQuery",id:"apis/wxml/SelectorQuery",title:"SelectorQuery",description:"\u67e5\u8be2\u8282\u70b9\u4fe1\u606f\u7684\u5bf9\u8c61",source:"@site/docs/apis/wxml/SelectorQuery.md",sourceDirName:"apis/wxml",slug:"/apis/wxml/SelectorQuery",permalink:"/taro/docs/next/apis/wxml/SelectorQuery",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/apis/wxml/SelectorQuery.md",tags:[],version:"current",frontMatter:{title:"SelectorQuery",sidebar_label:"SelectorQuery"},sidebar:"API",previous:{title:"NodesRef",permalink:"/taro/docs/next/apis/wxml/NodesRef"},next:{title:"getExtConfigSync",permalink:"/taro/docs/next/apis/ext/getExtConfigSync"}},s=[{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",children:[{value:"exec",id:"exec",children:[],level:3},{value:"in",id:"in",children:[{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[],level:4}],level:3},{value:"select",id:"select",children:[{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801-1",children:[],level:4}],level:3},{value:"selectAll",id:"selectall",children:[],level:3},{value:"selectViewport",id:"selectviewport",children:[{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801-2",children:[],level:4}],level:3}],level:2},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[],level:2}],m={toc:s};function u(e){var t=e.components,o=(0,n.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u67e5\u8be2\u8282\u70b9\u4fe1\u606f\u7684\u5bf9\u8c61"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/wxml/SelectorQuery.html"},"\u53c2\u8003\u6587\u6863"))),(0,l.kt)("h2",{id:"\u65b9\u6cd5"},"\u65b9\u6cd5"),(0,l.kt)("h3",{id:"exec"},"exec"),(0,l.kt)("p",null,"\u6267\u884c\u6240\u6709\u7684\u8bf7\u6c42\u3002\u8bf7\u6c42\u7ed3\u679c\u6309\u8bf7\u6c42\u6b21\u5e8f\u6784\u6210\u6570\u7ec4\uff0c\u5728callback\u7684\u7b2c\u4e00\u4e2a\u53c2\u6570\u4e2d\u8fd4\u56de\u3002"),(0,l.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,l.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:r(16710).Z,className:"icon_platform",width:"25px"})," ",(0,l.kt)("img",{title:"H5",src:r(5030).Z,className:"icon_platform",width:"25px"})," ",(0,l.kt)("img",{title:"React Native",src:r(73555).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/wxml/SelectorQuery.exec.html"},"\u53c2\u8003\u6587\u6863"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"(callback?: (...args: any[]) => any) => NodesRef\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"callback"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(...args: any[]) => any")),(0,l.kt)("td",{parentName:"tr",align:null},"\u56de\u8c03\u51fd\u6570")))),(0,l.kt)("h3",{id:"in"},"in"),(0,l.kt)("p",null,"\u5c06\u9009\u62e9\u5668\u7684\u9009\u53d6\u8303\u56f4\u66f4\u6539\u4e3a\u81ea\u5b9a\u4e49\u7ec4\u4ef6 ",(0,l.kt)("inlineCode",{parentName:"p"},"component")," \u5185\u3002\uff08\u521d\u59cb\u65f6\uff0c\u9009\u62e9\u5668\u4ec5\u9009\u53d6\u9875\u9762\u8303\u56f4\u7684\u8282\u70b9\uff0c\u4e0d\u4f1a\u9009\u53d6\u4efb\u4f55\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u4e2d\u7684\u8282\u70b9\uff09\u3002"),(0,l.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,l.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:r(16710).Z,className:"icon_platform",width:"25px"})," ",(0,l.kt)("img",{title:"H5",src:r(5030).Z,className:"icon_platform",width:"25px"})," ",(0,l.kt)("img",{title:"React Native",src:r(73555).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/wxml/SelectorQuery.in.html"},"\u53c2\u8003\u6587\u6863"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"(component: TaroGeneral.IAnyObject) => SelectorQuery\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"component"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"TaroGeneral.IAnyObject")),(0,l.kt)("td",{parentName:"tr",align:null},"\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u5b9e\u4f8b")))),(0,l.kt)("h4",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"Component({\n  queryMultipleNodes () {\n    const query = Taro.createSelectorQuery().in(this)\n    query.select('#the-id').boundingClientRect(function(res){\n      res.top // \u8fd9\u4e2a\u7ec4\u4ef6\u5185 #the-id \u8282\u70b9\u7684\u4e0a\u8fb9\u754c\u5750\u6807\n    }).exec()\n  }\n})\n")),(0,l.kt)("h3",{id:"select"},"select"),(0,l.kt)("p",null,"\u5728\u5f53\u524d\u9875\u9762\u4e0b\u9009\u62e9\u7b2c\u4e00\u4e2a\u5339\u914d\u9009\u62e9\u5668 ",(0,l.kt)("inlineCode",{parentName:"p"},"selector")," \u7684\u8282\u70b9\u3002\u8fd4\u56de\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"NodesRef")," \u5bf9\u8c61\u5b9e\u4f8b\uff0c\u53ef\u4ee5\u7528\u4e8e\u83b7\u53d6\u8282\u70b9\u4fe1\u606f\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"selector \u8bed\u6cd5")),(0,l.kt)("p",null,"selector\u7c7b\u4f3c\u4e8e CSS \u7684\u9009\u62e9\u5668\uff0c\u4f46\u4ec5\u652f\u6301\u4e0b\u5217\u8bed\u6cd5\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"ID\u9009\u62e9\u5668\uff1a#the-id"),(0,l.kt)("li",{parentName:"ul"},"class\u9009\u62e9\u5668\uff08\u53ef\u4ee5\u8fde\u7eed\u6307\u5b9a\u591a\u4e2a\uff09\uff1a.a-class.another-class"),(0,l.kt)("li",{parentName:"ul"},"\u5b50\u5143\u7d20\u9009\u62e9\u5668\uff1a.the-parent > .the-child"),(0,l.kt)("li",{parentName:"ul"},"\u540e\u4ee3\u9009\u62e9\u5668\uff1a.the-ancestor .the-descendant"),(0,l.kt)("li",{parentName:"ul"},"\u8de8\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u7684\u540e\u4ee3\u9009\u62e9\u5668\uff1a.the-ancestor >>> .the-descendant"),(0,l.kt)("li",{parentName:"ul"},"\u591a\u9009\u62e9\u5668\u7684\u5e76\u96c6\uff1a#a-node, .some-other-nodes")),(0,l.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,l.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:r(16710).Z,className:"icon_platform",width:"25px"})," ",(0,l.kt)("img",{title:"H5",src:r(5030).Z,className:"icon_platform",width:"25px"})," ",(0,l.kt)("img",{title:"React Native",src:r(73555).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/wxml/SelectorQuery.select.html"},"\u53c2\u8003\u6587\u6863"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"(selector: string) => NodesRef\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"selector"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"\u9009\u62e9\u5668")))),(0,l.kt)("h4",{id:"\u793a\u4f8b\u4ee3\u7801-1"},"\u793a\u4f8b\u4ee3\u7801"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"Taro.createSelectorQuery().select('#the-id').fields({\n  dataset: true,\n  size: true,\n  scrollOffset: true,\n  properties: ['scrollX', 'scrollY']\n}, function (res){\n  res.dataset    // \u8282\u70b9\u7684dataset\n  res.width      // \u8282\u70b9\u7684\u5bbd\u5ea6\n  res.height     // \u8282\u70b9\u7684\u9ad8\u5ea6\n  res.scrollLeft // \u8282\u70b9\u7684\u6c34\u5e73\u6eda\u52a8\u4f4d\u7f6e\n  res.scrollTop  // \u8282\u70b9\u7684\u7ad6\u76f4\u6eda\u52a8\u4f4d\u7f6e\n  res.scrollX    // \u8282\u70b9 scroll-x \u5c5e\u6027\u7684\u5f53\u524d\u503c\n  res.scrollY    // \u8282\u70b9 scroll-x \u5c5e\u6027\u7684\u5f53\u524d\u503c\n}).exec()\n")),(0,l.kt)("h3",{id:"selectall"},"selectAll"),(0,l.kt)("p",null,"\u5728\u5f53\u524d\u9875\u9762\u4e0b\u9009\u62e9\u5339\u914d\u9009\u62e9\u5668 selector \u7684\u6240\u6709\u8282\u70b9\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"selector \u8bed\u6cd5")),(0,l.kt)("p",null,"selector\u7c7b\u4f3c\u4e8e CSS \u7684\u9009\u62e9\u5668\uff0c\u4f46\u4ec5\u652f\u6301\u4e0b\u5217\u8bed\u6cd5\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"ID\u9009\u62e9\u5668\uff1a#the-id"),(0,l.kt)("li",{parentName:"ul"},"class\u9009\u62e9\u5668\uff08\u53ef\u4ee5\u8fde\u7eed\u6307\u5b9a\u591a\u4e2a\uff09\uff1a.a-class.another-class"),(0,l.kt)("li",{parentName:"ul"},"\u5b50\u5143\u7d20\u9009\u62e9\u5668\uff1a.the-parent > .the-child"),(0,l.kt)("li",{parentName:"ul"},"\u540e\u4ee3\u9009\u62e9\u5668\uff1a.the-ancestor .the-descendant"),(0,l.kt)("li",{parentName:"ul"},"\u8de8\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u7684\u540e\u4ee3\u9009\u62e9\u5668\uff1a.the-ancestor >>> .the-descendant"),(0,l.kt)("li",{parentName:"ul"},"\u591a\u9009\u62e9\u5668\u7684\u5e76\u96c6\uff1a#a-node, .some-other-nodes")),(0,l.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,l.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:r(16710).Z,className:"icon_platform",width:"25px"})," ",(0,l.kt)("img",{title:"H5",src:r(5030).Z,className:"icon_platform",width:"25px"})," ",(0,l.kt)("img",{title:"React Native",src:r(73555).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/wxml/SelectorQuery.selectAll.html"},"\u53c2\u8003\u6587\u6863"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"(selector: string) => NodesRef\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"selector"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"\u9009\u62e9\u5668")))),(0,l.kt)("h3",{id:"selectviewport"},"selectViewport"),(0,l.kt)("p",null,"\u9009\u62e9\u663e\u793a\u533a\u57df\u3002\u53ef\u7528\u4e8e\u83b7\u53d6\u663e\u793a\u533a\u57df\u7684\u5c3a\u5bf8\u3001\u6eda\u52a8\u4f4d\u7f6e\u7b49\u4fe1\u606f\u3002"),(0,l.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,l.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:r(16710).Z,className:"icon_platform",width:"25px"})," ",(0,l.kt)("img",{title:"H5",src:r(5030).Z,className:"icon_platform",width:"25px"})," ",(0,l.kt)("img",{title:"React Native",src:r(73555).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/wxml/SelectorQuery.selectViewport.html"},"\u53c2\u8003\u6587\u6863"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"() => NodesRef\n")),(0,l.kt)("h4",{id:"\u793a\u4f8b\u4ee3\u7801-2"},"\u793a\u4f8b\u4ee3\u7801"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"Taro.createSelectorQuery().selectViewport().scrollOffset(function (res) {\n  res.id      // \u8282\u70b9\u7684ID\n  res.dataset // \u8282\u70b9\u7684dataset\n  res.scrollLeft // \u8282\u70b9\u7684\u6c34\u5e73\u6eda\u52a8\u4f4d\u7f6e\n  res.scrollTop  // \u8282\u70b9\u7684\u7ad6\u76f4\u6eda\u52a8\u4f4d\u7f6e\n}).exec()\n")),(0,l.kt)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"API"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,l.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,l.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"SelectorQuery.exec"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"SelectorQuery.in"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"SelectorQuery.select"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"SelectorQuery.selectAll"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"SelectorQuery.selectViewport"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"})))))}u.isMDXComponent=!0},5030:function(e,t,r){t.Z=r.p+"assets/images/h5-81f73c447874b6528e84ee395bece16e.png"},73555:function(e,t,r){t.Z=r.p+"assets/images/rn-ecec68ba194e4b5e9fc3e853cc00c569.png"},16710:function(e,t,r){t.Z=r.p+"assets/images/weapp-0e8fbe2d5eb3676de4961b54ee7f5ba4.png"}}]);