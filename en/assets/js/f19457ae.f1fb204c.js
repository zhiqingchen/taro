"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[1865],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,h=m["".concat(i,".").concat(d)]||m[d]||p[d]||l;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<l;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},58215:function(e,t,n){var a=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},55064:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(83117),r=n(67294),l=n(72389),o=n(79443);var s=function(){var e=(0,r.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=n(83039),c=n(86010),u="tabItem_1uMI";function p(e){var t,n,a,l=e.lazy,o=e.block,p=e.defaultValue,m=e.values,d=e.groupId,h=e.className,f=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=m?m:f.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),k=(0,i.lx)(v,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===p?p:null!=(t=null!=p?p:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(a=f[0])?void 0:a.props.value;if(null!==b&&!v.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=s(),y=g.tabGroupChoices,T=g.setTabGroupChoices,w=(0,r.useState)(b),N=w[0],x=w[1],E=[],L=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var C=y[d];null!=C&&C!==N&&v.some((function(e){return e.value===C}))&&x(C)}var M=function(e){var t=e.currentTarget,n=E.indexOf(t),a=v[n].value;a!==N&&(L(t),x(a),null!=d&&T(d,a))},O=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=E.indexOf(e.currentTarget)+1;n=E[a]||E[0];break;case"ArrowLeft":var r=E.indexOf(e.currentTarget)-1;n=E[r]||E[E.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":o},h)},v.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,className:(0,c.Z)("tabs__item",u,{"tabs__item--active":N===t}),key:t,ref:function(e){return E.push(e)},onKeyDown:O,onFocus:M,onClick:M},null!=n?n:t)}))),l?(0,r.cloneElement)(f.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}function m(e){var t=(0,l.Z)();return r.createElement(p,(0,a.Z)({key:String(t)},e))}},79443:function(e,t,n){var a=(0,n(67294).createContext)(void 0);t.Z=a},1038:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return m},default:function(){return h}});var a=n(83117),r=n(80102),l=(n(67294),n(3905)),o=n(55064),s=n(58215),i=["components"],c={title:"Rendering HTML"},u=void 0,p={unversionedId:"html",id:"version-3.x/html",isDocsHomePage:!1,title:"Rendering HTML",description:"Please note: All the contents of this section will only work on the mini program side.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-3.x/html.mdx",sourceDirName:".",slug:"/html",permalink:"/taro/en/docs/html",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.x/html.mdx",tags:[],version:"3.x",frontMatter:{title:"Rendering HTML"},sidebar:"version-3.x/docs",previous:{title:"Compile configuration Details",permalink:"/taro/en/docs/config-detail"},next:{title:"Using HTML Tags",permalink:"/taro/en/docs/use-h5"}},m=[{value:"Custom HTML styles",id:"custom-html-styles",children:[],level:2},{value:"\bHTML Escape",id:"html-escape",children:[],level:2},{value:"Binding events",id:"binding-events",children:[],level:2},{value:"Advanced Options",id:"advanced-options",children:[{value:"skipElements",id:"skipelements",children:[],level:3},{value:"voidElements",id:"voidelements",children:[],level:3},{value:"closingElements",id:"closingelements",children:[],level:3},{value:"transformText",id:"transformtext",children:[],level:3},{value:"transformElement",id:"transformelement",children:[],level:3},{value:"Example:",id:"example",children:[],level:3}],level:2}],d={toc:m};function h(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Please note: All the contents of this section will only work on the mini program side.")),(0,l.kt)("p",null,"Taro can render HTML directly via ",(0,l.kt)("inlineCode",{parentName:"p"},"Element#innerHTML")," or Vue's ",(0,l.kt)("inlineCode",{parentName:"p"},"v-html")," or React/Nerv's ",(0,l.kt)("inlineCode",{parentName:"p"},"dangerouslySetInnerHTML"),":"),(0,l.kt)(o.Z,{defaultValue:"React",values:[{label:"React",value:"React"},{label:"Vue",value:"Vue"}],mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"React",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'function helloWorld() {\n  const html = `<h1 style="color: red">Wallace is way taller than other reporters.</h1>`\n\n  return <View dangerouslySetInnerHTML={{ __html: html }}></View>\n}\n'))),(0,l.kt)(s.Z,{value:"Vue",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<template>\n  <view v-html="html"></view>\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      html: `<h1 style="color: red">Wallace is way taller than other reporters.</h1>`\n    }\n  }\n}\n<\/script>\n')))),(0,l.kt)("h2",{id:"custom-html-styles"},"Custom HTML styles"),(0,l.kt)("p",null,"Setting HTML directly will not make the HTML tags take on the browser's default style, Taro provides two built-in styles that we can introduce directly to take effect."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"@tarojs/taro/html.css"),": ",(0,l.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/CSS2/sample.html"},"W3C HTML4 built-in styles\n"),", Only HTML4 tag style, smaller size, high compatibility, can adapt to most cases."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"@tarojs/taro/html5.css"),": ",(0,l.kt)("a",{parentName:"li",href:"https://chromium.googlesource.com/chromium/blink/+/master/Source/core/css/html.css"},"Chrome(Blink) HTML5 built-in styles"),", Rich built-in styles, including most HTML5 tags, large size, not necessarily support all mini program containers.")),(0,l.kt)("p",null,"In order for the built-in tag styles to work, we also need to set the CSS class of the HTML container to ",(0,l.kt)("inlineCode",{parentName:"p"},".taro_html"),":"),(0,l.kt)(o.Z,{defaultValue:"React",values:[{label:"React",value:"React"},{label:"Vue",value:"Vue"}],mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"React",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'import \'@tarojs/taro/html.css\'\n\nfunction helloWorld() {\n  const html = `<h1 style="color: red">Wallace is way taller than other reporters.</h1>`\n\n  return <View className="taro_html" dangerouslySetInnerHTML={{ __html: html }}></View>\n}\n'))),(0,l.kt)(s.Z,{value:"Vue",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<template>\n  <view v-html="html" class="taro_html"></view>\n</template>\n\n<script>\nimport \'@tarojs/taro/html.css\'\n\nexport default {\n  data () {\n    return {\n      html: `<h1 style="color: red">Wallace is way taller than other reporters.</h1>`\n    }\n  }\n}\n<\/script>\n')))),(0,l.kt)("p",null,"Likewise, we can write our own CSS styles, and the class names of the HTML tags that Taro renders are consistent with the HTML tag names, for example, if we have a container CSS class named ",(0,l.kt)("inlineCode",{parentName:"p"},"my_css")," and we want to set the style of the ",(0,l.kt)("inlineCode",{parentName:"p"},"h1")," tag, then we do this"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},".my_css .h1 {\n  font-size: 30px;\n}\n")),(0,l.kt)("p",null,"You may prefer the default style of other browsers."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://dxr.mozilla.org/mozilla-central/source/layout/style/res/html.css"},"Firefox")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://web.archive.org/web/20170122223926/https://www.iecss.com/"},"Internet Explorer")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://trac.webkit.org/browser/trunk/Source/WebCore/css/html.css"},"Safari/Chrome(Webkit)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://web.archive.org/web/20161031005401/https://www.iecss.com/opera-10.51.css"},"Opera")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/html5/rendering.html"},"W3C HTML5 Spec")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/necolas/normalize.css/blob/master/normalize.css"},"normalize.css"))),(0,l.kt)("h2",{id:"html-escape"},"\bHTML Escape"),(0,l.kt)("p",null,"By default, Taro's HTML interface only accepts escaped HTML strings, and we recommend returning the escaped HTML directly on the server side."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/he"},"he"),": Larger size, but more relaxed open source protocol"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/entities"},"entities"),": Smaller size, but more stringent open source protocol")),(0,l.kt)("p",null,"You may need ",(0,l.kt)("inlineCode",{parentName:"p"},"transformText")," from ","[Advanced Options]","(#Advanced Options) in conjunction with HTML escaping for string rendering."),(0,l.kt)("h2",{id:"binding-events"},"Binding events"),(0,l.kt)("p",null,"For scoping and security reasons, Taro removes all events and JavaScript from the HTML string. But we still have a way to bind events to HTML:"),(0,l.kt)(o.Z,{defaultValue:"React",values:[{label:"React",value:"React"},{label:"Vue",value:"Vue"}],mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"React",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"import '@tarojs/taro/html.css'\n\nfunction helloWorld() {\n  const html = `<h1 id=\"test\">Wallace is way taller than other reporters.</h1>`\n\n  useEffect(() => {\n    const el = document.getElementById('test')\n    function testOnTap (event) {\n      // do something\n      ...\n    }\n    el.addEventListener('tap', testOnTap)\n\n    return () => {\n      el.removeEventListener('tap', testOnTap)\n    }\n  }, [])\n\n  return <View className=\"taro_html\" dangerouslySetInnerHTML={{ __html: html }}></View>\n}\n"))),(0,l.kt)(s.Z,{value:"Vue",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},"<template>\n  <view v-html=\"html\" class=\"taro_html\"></view>\n</template>\n\n<script>\nimport '@tarojs/taro/html.css'\n\nexport default {\n  data () {\n    return {\n      html: `<h1 id=\"test\">Wallace is way taller than other reporters.</h1>`\n    }\n  },\n  mounted () {\n    const el = document.getElementById('test')\n    el.addEventListener('tap', this.testOnTap)\n  },\n  testOnTap (event) {\n    // do something\n    ...\n  },\n  beforeDestroy () {\n    const el = document.getElementById('test')\n    el.removeEventListener('tap', this.testOnTap)\n  }\n}\n<\/script>\n")))),(0,l.kt)("p",null,"You may need to use ",(0,l.kt)("inlineCode",{parentName:"p"},"transformElement")," in ","[Advanced Options]","(#Advanced Options) if the element to be dynamically bound to the event does not have an ID."),(0,l.kt)("h2",{id:"advanced-options"},"Advanced Options"),(0,l.kt)("p",null,"If the built-in functionality does not meet the needs or the rendering results are not as expected, Taro also provides advanced options for HTML rendering, which can be accessed via ",(0,l.kt)("inlineCode",{parentName:"p"},"Taro.options.html")," :"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"import Taro from '@tarojs/taro'\n\n// Do not parse the contents of the souce tag\nTaro.options.html.skipElements.add('source')\n")),(0,l.kt)("h3",{id:"skipelements"},"skipElements"),(0,l.kt)("p",null,"Type: ",(0,l.kt)("inlineCode",{parentName:"p"},"Set<string>")),(0,l.kt)("p",null,"Default Value: ",(0,l.kt)("inlineCode",{parentName:"p"},"new Set(['style', 'script'])")),(0,l.kt)("p",null,"HTML tags contained in the HashSet will not be parsed."),(0,l.kt)("h3",{id:"voidelements"},"voidElements"),(0,l.kt)("p",null,"Type: ",(0,l.kt)("inlineCode",{parentName:"p"},"Set<string>")),(0,l.kt)("p",null,"Default Value: ",(0,l.kt)("inlineCode",{parentName:"p"},"new Set([\n  '!doctype', 'area', 'base', 'br', 'col', 'command',\n  'embed', 'hr', 'img', 'input', 'keygen', 'link',\n  'meta', 'param', 'source', 'track', 'wbr'\n])")),(0,l.kt)("p",null,"HTML tags contained in a HashSet do not require closure tags, such as ",(0,l.kt)("inlineCode",{parentName:"p"},"<img />"),"."),(0,l.kt)("h3",{id:"closingelements"},"closingElements"),(0,l.kt)("p",null,"Type: ",(0,l.kt)("inlineCode",{parentName:"p"},"Set<string>")),(0,l.kt)("p",null,"Default Value: ",(0,l.kt)("inlineCode",{parentName:"p"},"new Set([\n  'html', 'head', 'body', 'p', 'dt', 'dd', 'li', 'option',\n  'thead', 'th', 'tbody', 'tr', 'td', 'tfoot', 'colgroup'\n])")),(0,l.kt)("p",null,"HTML tags contained in a HashSet can be automatically closed and cannot be nested."),(0,l.kt)("h3",{id:"transformtext"},"transformText"),(0,l.kt)("p",null,"Type: ",(0,l.kt)("inlineCode",{parentName:"p"},"(taroText: TaroText, text: Text) => TaroText")),(0,l.kt)("p",null,"Default Value: ",(0,l.kt)("inlineCode",{parentName:"p"},"void")),(0,l.kt)("p",null,"The first argument to this function takes the value of ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/NervJS/taro/blob/7349f716111accb6a39c72ed0f1e6cbc166fa32b/packages/taro-runtime/src/dom/text.ts#L5"},"TaroText"),", which is processed by Taro by default, the second argument is ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/NervJS/taro/blob/7349f716111accb6a39c72ed0f1e6cbc166fa32b/packages/taro-runtime/src/dom/html/parser.ts#L33-L36"},"Text"),", which is parsed by the HTML parser, and the final ",(0,l.kt)("inlineCode",{parentName:"p"},"TaroText")," object returned is involved in the rendering of the string in HTML."),(0,l.kt)("h3",{id:"transformelement"},"transformElement"),(0,l.kt)("p",null,"Type: ",(0,l.kt)("inlineCode",{parentName:"p"},"(taroElement: TaroElement, element: Element) => TaroElement")),(0,l.kt)("p",null,"Default Value: ",(0,l.kt)("inlineCode",{parentName:"p"},"void")),(0,l.kt)("p",null,"The first parameter of this function takes the value of ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/NervJS/taro/blob/7349f716111accb6a39c72ed0f1e6cbc166fa32b/packages/taro-runtime/src/dom/element.ts#L15"},"TaroElement")," processed by Taro by default, the second parameter is the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/NervJS/taro/blob/7349f716111accb6a39c72ed0f1e6cbc166fa32b/packages/taro-runtime/src/dom/html/parser.ts#L38-L43"},"Element")," parsed by the HTML parser, and the last returned ",(0,l.kt)("inlineCode",{parentName:"p"},"TaroElement")," object participates in the HTML element rendering."),(0,l.kt)("h3",{id:"example"},"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// Adding the aotu class to all img tags\nTaro.options.html.transformElement = (el) => {\n  if (el.nodeName === 'image') {\n    el.setAttribute('class', 'aotu')\n  }\n  return el\n}\n")))}h.isMDXComponent=!0}}]);