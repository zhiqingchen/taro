(window.webpackJsonp=window.webpackJsonp||[]).push([[265],{1763:function(e,t,n){"use strict";function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(e[c]=n[c])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return c}))},1764:function(e,t,n){"use strict";function c(e,t){if(null==e)return{};var n,c,l={},r=Object.keys(e);for(c=0;c<r.length;c++)n=r[c],t.indexOf(n)>=0||(l[n]=e[n]);return l}n.d(t,"a",(function(){return c}))},1765:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return j}));var c=n(0),l=n.n(c);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,c)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,c,l=function(e,t){if(null==e)return{};var n,c,l={},r=Object.keys(e);for(c=0;c<r.length;c++)n=r[c],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(c=0;c<r.length;c++)n=r[c],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=l.a.createContext({}),u=function(e){var t=l.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=u(e.components);return l.a.createElement(i.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},d=l.a.forwardRef((function(e,t){var n=e.components,c=e.mdxType,r=e.originalType,b=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),s=u(n),d=c,j=s["".concat(b,".").concat(d)]||s[d]||O[d]||r;return n?l.a.createElement(j,a(a({ref:t},i),{},{components:n})):l.a.createElement(j,a({ref:t},i))}));function j(e,t){var n=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var r=n.length,b=new Array(r);b[0]=d;var a={};for(var o in t)hasOwnProperty.call(t,o)&&(a[o]=t[o]);a.originalType=e,a.mdxType="string"==typeof e?e:c,b[1]=a;for(var i=2;i<r;i++)b[i]=n[i];return l.a.createElement.apply(null,b)}return l.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1766:function(e,t,n){"use strict";function c(e){var t,n,l="";if("string"==typeof e||"number"==typeof e)l+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=c(e[t]))&&(l&&(l+=" "),l+=n);else for(t in e)e[t]&&(l&&(l+=" "),l+=t);return l}t.a=function(){for(var e,t,n=0,l="";n<arguments.length;)(e=arguments[n++])&&(t=c(e))&&(l&&(l+=" "),l+=t);return l}},1767:function(e,t,n){"use strict";var c=n(0),l=n(1768);t.a=function(){var e=Object(c.useContext)(l.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},1768:function(e,t,n){"use strict";var c=n(0),l=Object(c.createContext)(void 0);t.a=l},1769:function(e,t,n){"use strict";var c=n(0),l=n.n(c),r=n(1767),b=n(1766),a=n(51),o=n.n(a),i=37,u=39;t.a=function(e){var t=e.lazy,n=e.block,a=e.children,s=e.defaultValue,O=e.values,d=e.groupId,j=e.className,p=Object(r.a)(),m=p.tabGroupChoices,h=p.setTabGroupChoices,f=Object(c.useState)(s),v=f[0],g=f[1];if(null!=d){var y=m[d];null!=y&&y!==v&&O.some((function(e){return e.value===y}))&&g(y)}var x=function(e){g(e),null!=d&&h(d,e)},N=[];return l.a.createElement("div",null,l.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(b.a)("tabs",{"tabs--block":n},j)},O.map((function(e){var t=e.value,n=e.label;return l.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":v===t,className:Object(b.a)("tabs__item",o.a.tabItem,{"tabs__item--active":v===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case u:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case i:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(N,e.target,e)},onFocus:function(){return x(t)},onClick:function(){x(t)}},n)}))),t?Object(c.cloneElement)(a.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):l.a.createElement("div",{className:"margin-vert--md"},a.map((function(e,t){return Object(c.cloneElement)(e,{key:t,hidden:e.props.value!==v})}))))}},1770:function(e,t,n){"use strict";var c=n(1763),l=n(0),r=n.n(l);t.a=function(e){var t=e.children,n=e.hidden,l=e.className;return r.a.createElement("div",Object(c.a)({role:"tabpanel"},{hidden:n,className:l}),t)}},331:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return O}));var c=n(1763),l=n(1764),r=(n(0),n(1765)),b=n(1769),a=n(1770),o={title:"RichText",sidebar_label:"RichText"},i={unversionedId:"components/base/rich-text",id:"version-3.x/components/base/rich-text",isDocsHomePage:!1,title:"RichText",description:"\u5bcc\u6587\u672c",source:"@site/versioned_docs/version-3.x/components/base/rich-text.md",slug:"/components/base/rich-text",permalink:"/taro/docs/components/base/rich-text",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.x/components/base/rich-text.md",version:"3.x",sidebar_label:"RichText",sidebar:"version-3.x/components",previous:{title:"Progress",permalink:"/taro/docs/components/base/progress"},next:{title:"Button",permalink:"/taro/docs/components/forms/button"}},u=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"RichTextProps",id:"richtextprops",children:[{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]},{value:"TSpace",id:"tspace",children:[]},{value:"Text",id:"text",children:[]},{value:"HTMLElement",id:"htmlelement",children:[]}]},{value:"Nodes",id:"nodes",children:[{value:"\u7c7b\u578b",id:"\u7c7b\u578b-1",children:[]}]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6-1",children:[]}],s={rightToc:u};function O(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(r.b)("wrapper",Object(c.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"\u5bcc\u6587\u672c"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("a",Object(c.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/component/rich-text.html"}),"\u53c2\u8003\u6587\u6863"))),Object(r.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(r.b)("pre",null,Object(r.b)("code",Object(c.a)({parentName:"pre"},{className:"language-tsx"}),"ComponentType<RichTextProps>\n")),Object(r.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(r.b)(b.a,{defaultValue:"React",values:[{label:"React",value:"React"},{label:"Vue",value:"Vue"}],mdxType:"Tabs"},Object(r.b)(a.a,{value:"React",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(c.a)({parentName:"pre"},{className:"language-tsx"}),"class App extends Components {\n  state = {\n    nodes: [{\n      name: 'div',\n      attrs: {\n        class: 'div_class',\n        style: 'line-height: 60px; color: red;'\n      },\n      children: [{\n        type: 'text',\n        text: 'Hello World!'\n      }]\n    }]\n  }\n  render () {\n    return (\n      <RichText nodes={this.state.nodes} />\n    )\n  }\n}\n"))),Object(r.b)(a.a,{value:"Vue",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(c.a)({parentName:"pre"},{className:"language-html"}),"<template>\n  <view class=\"components-page\">\n    <rich-text :nodes=\"nodes\"></rich-text>\n  </view>\n</template>\n\n<script>\nexport default {\n  name: 'Index',\n  data() {\n    return {\n      nodes: [{\n        name: 'div',\n        attrs: {\n          class: 'div_class',\n          style: 'line-height: 60px; color: red;'\n        },\n        children: [{\n          type: 'text',\n          text: 'Hello World!'\n        }]\n      }]\n    }\n  },\n  onReady () {\n    console.log('onReady')\n  }\n}\n<\/script>\n")))),Object(r.b)("h2",{id:"richtextprops"},"RichTextProps"),Object(r.b)("table",null,Object(r.b)("thead",null,Object(r.b)("tr",null,Object(r.b)("th",null,"\u53c2\u6570"),Object(r.b)("th",null,"\u7c7b\u578b"),Object(r.b)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(r.b)("th",null,"\u8bf4\u660e"))),Object(r.b)("tbody",null,Object(r.b)("tr",null,Object(r.b)("td",null,"nodes"),Object(r.b)("td",null,Object(r.b)("code",null,"Nodes")),Object(r.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(r.b)("td",null,"\u8282\u70b9\u5217\u8868/ HTML String")),Object(r.b)("tr",null,Object(r.b)("td",null,"space"),Object(r.b)("td",null,Object(r.b)("code",null,'"ensp" | "emsp" | "nbsp"')),Object(r.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(r.b)("td",null,"\u663e\u793a\u8fde\u7eed\u7a7a\u683c")))),Object(r.b)("h3",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"API"),Object(r.b)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(r.b)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"H5"),Object(r.b)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"RichTextProps.space"),Object(r.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(r.b)("td",Object(c.a)({parentName:"tr"},{align:"center"})),Object(r.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}))))),Object(r.b)("h3",{id:"tspace"},"TSpace"),Object(r.b)("p",null,"space \u7684\u5408\u6cd5\u503c"),Object(r.b)("table",null,Object(r.b)("thead",null,Object(r.b)("tr",null,Object(r.b)("th",null,"\u53c2\u6570"),Object(r.b)("th",null,"\u8bf4\u660e"))),Object(r.b)("tbody",null,Object(r.b)("tr",null,Object(r.b)("td",null,"ensp"),Object(r.b)("td",null,"\u4e2d\u6587\u5b57\u7b26\u7a7a\u683c\u4e00\u534a\u5927\u5c0f")),Object(r.b)("tr",null,Object(r.b)("td",null,"emsp"),Object(r.b)("td",null,"\u4e2d\u6587\u5b57\u7b26\u7a7a\u683c\u5927\u5c0f")),Object(r.b)("tr",null,Object(r.b)("td",null,"nbsp"),Object(r.b)("td",null,"\u6839\u636e\u5b57\u4f53\u8bbe\u7f6e\u7684\u7a7a\u683c\u5927\u5c0f")))),Object(r.b)("h3",{id:"text"},"Text"),Object(r.b)("p",null,"\u6587\u672c\u8282\u70b9"),Object(r.b)("table",null,Object(r.b)("thead",null,Object(r.b)("tr",null,Object(r.b)("th",null,"\u53c2\u6570"),Object(r.b)("th",null,"\u7c7b\u578b"),Object(r.b)("th",{style:{textAlign:"center"}},"\u9ed8\u8ba4\u503c"),Object(r.b)("th",null,"\u8bf4\u660e"),Object(r.b)("th",null,"\u5907\u6ce8"))),Object(r.b)("tbody",null,Object(r.b)("tr",null,Object(r.b)("td",null,"type"),Object(r.b)("td",null,Object(r.b)("code",null,'"text"')),Object(r.b)("td",{style:{textAlign:"center"}}),Object(r.b)("td",null,"\u6587\u672c\u7c7b\u578b"),Object(r.b)("td",null)),Object(r.b)("tr",null,Object(r.b)("td",null,"text"),Object(r.b)("td",null,Object(r.b)("code",null,"string")),Object(r.b)("td",{style:{textAlign:"center"}},Object(r.b)("code",null,'""')),Object(r.b)("td",null,"\u6587\u672c\u5b57\u7b26\u4e32"),Object(r.b)("td",null,Object(r.b)("code",null,"\u652f\u6301 entities"))))),Object(r.b)("h3",{id:"htmlelement"},"HTMLElement"),Object(r.b)("p",null,"\u5143\u7d20\u8282\u70b9\uff0c\u9ed8\u8ba4\u4e3a\u5143\u7d20\u8282\u70b9\n\u5168\u5c40\u652f\u6301class\u548cstyle\u5c5e\u6027\uff0c\u4e0d\u652f\u6301 id \u5c5e\u6027\u3002"),Object(r.b)("table",null,Object(r.b)("thead",null,Object(r.b)("tr",null,Object(r.b)("th",null,"\u53c2\u6570"),Object(r.b)("th",null,"\u7c7b\u578b"),Object(r.b)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(r.b)("th",null,"\u8bf4\u660e"),Object(r.b)("th",null,"\u5907\u6ce8"))),Object(r.b)("tbody",null,Object(r.b)("tr",null,Object(r.b)("td",null,"type"),Object(r.b)("td",null,Object(r.b)("code",null,'"node"')),Object(r.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(r.b)("td",null,"HTML \u7c7b\u578b"),Object(r.b)("td",null)),Object(r.b)("tr",null,Object(r.b)("td",null,"name"),Object(r.b)("td",null,Object(r.b)("code",null,"string")),Object(r.b)("td",{style:{textAlign:"center"}},"\u662f"),Object(r.b)("td",null,"\u6807\u7b7e\u540d"),Object(r.b)("td",null,Object(r.b)("code",null,"\u652f\u6301\u90e8\u5206\u53d7\u4fe1\u4efb\u7684 HTML \u8282\u70b9"))),Object(r.b)("tr",null,Object(r.b)("td",null,"attrs"),Object(r.b)("td",null,Object(r.b)("code",null,"Object")),Object(r.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(r.b)("td",null,"\u5c5e\u6027"),Object(r.b)("td",null,Object(r.b)("code",null,"\u652f\u6301\u90e8\u5206\u53d7\u4fe1\u4efb\u7684\u5c5e\u6027\uff0c\u9075\u5faa Pascal \u547d\u540d\u6cd5"))),Object(r.b)("tr",null,Object(r.b)("td",null,"children"),Object(r.b)("td",null,Object(r.b)("code",null,"Nodes")),Object(r.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(r.b)("td",null,"\u5b50\u8282\u70b9\u5217\u8868"),Object(r.b)("td",null,Object(r.b)("code",null,"\u7ed3\u6784\u548c nodes \u4e00\u81f4"))))),Object(r.b)("h2",{id:"nodes"},"Nodes"),Object(r.b)("p",null,"\u8282\u70b9\u7c7b\u578b"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"\u73b0\u652f\u6301\u4e24\u79cd\u8282\u70b9\uff0c\u901a\u8fc7type\u6765\u533a\u5206\uff0c\u5206\u522b\u662f\u5143\u7d20\u8282\u70b9\u548c\u6587\u672c\u8282\u70b9\uff0c\u9ed8\u8ba4\u662f\u5143\u7d20\u8282\u70b9\uff0c\u5728\u5bcc\u6587\u672c\u533a\u57df\u91cc\u663e\u793a\u7684HTML\u8282\u70b9 \u5143\u7d20\u8282\u70b9\uff1atype = node*")),Object(r.b)("h3",{id:"\u7c7b\u578b-1"},"\u7c7b\u578b"),Object(r.b)("pre",null,Object(r.b)("code",Object(c.a)({parentName:"pre"},{className:"language-tsx"}),"(Text | HTMLElement)[] | string\n")),Object(r.b)("h2",{id:"api-\u652f\u6301\u5ea6-1"},"API \u652f\u6301\u5ea6"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"API"),Object(r.b)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(r.b)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"\u767e\u5ea6\u5c0f\u7a0b\u5e8f"),Object(r.b)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f"),Object(r.b)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"\u5b57\u8282\u8df3\u52a8\u5c0f\u7a0b\u5e8f"),Object(r.b)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"H5"),Object(r.b)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"RichText"),Object(r.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(r.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(r.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(r.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(r.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(r.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))))}O.isMDXComponent=!0}}]);