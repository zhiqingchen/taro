(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[94153],{22122:function(t,e,n){"use strict";function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}n.d(e,{Z:function(){return r}})},19756:function(t,e,n){"use strict";function r(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}n.d(e,{Z:function(){return r}})},3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return u},kt:function(){return k}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=r.createContext({}),d=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},u=function(t){var e=d(t.components);return r.createElement(c.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},p=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,c=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),p=d(n),k=a,m=p["".concat(c,".").concat(k)]||p[k]||s[k]||l;return n?r.createElement(m,o(o({ref:e},u),{},{components:n})):r.createElement(m,o({ref:e},u))}));function k(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,o=new Array(l);o[0]=p;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i.mdxType="string"==typeof t?t:a,o[1]=i;for(var d=2;d<l;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},58215:function(t,e,n){"use strict";var r=n(67294);e.Z=function(t){var e=t.children,n=t.hidden,a=t.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},e)}},41395:function(t,e,n){"use strict";n.d(e,{Z:function(){return u}});var r=n(67294),a=n(80944),l=n(86010),o="tabItem_1uMI",i="tabItemActive_2DSg";var c=37,d=39;var u=function(t){var e=t.lazy,n=t.block,u=t.defaultValue,s=t.values,p=t.groupId,k=t.className,m=(0,a.Z)(),g=m.tabGroupChoices,f=m.setTabGroupChoices,y=(0,r.useState)(u),h=y[0],b=y[1],v=r.Children.toArray(t.children),N=[];if(null!=p){var x=g[p];null!=x&&x!==h&&s.some((function(t){return t.value===x}))&&b(x)}var E=function(t){var e=t.currentTarget,n=N.indexOf(e),r=s[n].value;b(r),null!=p&&(f(p,r),setTimeout((function(){var t,n,r,a,l,o,c,d;(t=e.getBoundingClientRect(),n=t.top,r=t.left,a=t.bottom,l=t.right,o=window,c=o.innerHeight,d=o.innerWidth,n>=0&&l<=d&&a<=c&&r>=0)||(e.scrollIntoView({block:"center",behavior:"smooth"}),e.classList.add(i),setTimeout((function(){return e.classList.remove(i)}),2e3))}),150))},O=function(t){var e,n;switch(t.keyCode){case d:var r=N.indexOf(t.target)+1;n=N[r]||N[0];break;case c:var a=N.indexOf(t.target)-1;n=N[a]||N[N.length-1]}null==(e=n)||e.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},k)},s.map((function(t){var e=t.value,n=t.label;return r.createElement("li",{role:"tab",tabIndex:h===e?0:-1,"aria-selected":h===e,className:(0,l.Z)("tabs__item",o,{"tabs__item--active":h===e}),key:e,ref:function(t){return N.push(t)},onKeyDown:O,onFocus:E,onClick:E},n)}))),e?(0,r.cloneElement)(v.filter((function(t){return t.props.value===h}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},v.map((function(t,e){return(0,r.cloneElement)(t,{key:e,hidden:t.props.value!==h})}))))}},79443:function(t,e,n){"use strict";var r=(0,n(67294).createContext)(void 0);e.Z=r},80944:function(t,e,n){"use strict";var r=n(67294),a=n(79443);e.Z=function(){var t=(0,r.useContext)(a.Z);if(null==t)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return t}},89849:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return c},metadata:function(){return d},toc:function(){return u},default:function(){return p}});var r=n(22122),a=n(19756),l=(n(67294),n(3905)),o=n(41395),i=n(58215),c={title:"Editor",sidebar_label:"Editor"},d={unversionedId:"components/forms/editor",id:"components/forms/editor",isDocsHomePage:!1,title:"Editor",description:"\u5bcc\u6587\u672c\u7f16\u8f91\u5668\uff0c\u53ef\u4ee5\u5bf9\u56fe\u7247\u3001\u6587\u5b57\u8fdb\u884c\u7f16\u8f91\u3002",source:"@site/docs/components/forms/editor.md",sourceDirName:"components/forms",slug:"/components/forms/editor",permalink:"/taro/docs/next/components/forms/editor",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/components/forms/editor.md",version:"current",sidebar_label:"Editor",frontMatter:{title:"Editor",sidebar_label:"Editor"},sidebar:"components",previous:{title:"Checkbox",permalink:"/taro/docs/next/components/forms/checkbox"},next:{title:"Form",permalink:"/taro/docs/next/components/forms/form"}},u=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"EditorProps",id:"editorprops",children:[{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]},{value:"editorEventDetail",id:"editoreventdetail",children:[]}]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6-1",children:[]}],s={toc:u};function p(t){var e=t.components,n=(0,a.Z)(t,["components"]);return(0,l.kt)("wrapper",(0,r.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u5bcc\u6587\u672c\u7f16\u8f91\u5668\uff0c\u53ef\u4ee5\u5bf9\u56fe\u7247\u3001\u6587\u5b57\u8fdb\u884c\u7f16\u8f91\u3002"),(0,l.kt)("p",null,"\u7f16\u8f91\u5668\u5bfc\u51fa\u5185\u5bb9\u652f\u6301\u5e26\u6807\u7b7e\u7684 html\u548c\u7eaf\u6587\u672c\u7684 text\uff0c\u7f16\u8f91\u5668\u5185\u90e8\u91c7\u7528 delta \u683c\u5f0f\u8fdb\u884c\u5b58\u50a8\u3002"),(0,l.kt)("p",null,"\u901a\u8fc7 setContents \u63a5\u53e3\u8bbe\u7f6e\u5185\u5bb9\u65f6\uff0c\u89e3\u6790\u63d2\u5165\u7684 html \u53ef\u80fd\u4f1a\u7531\u4e8e\u4e00\u4e9b\u975e\u6cd5\u6807\u7b7e\u5bfc\u81f4\u89e3\u6790\u9519\u8bef\uff0c\u5efa\u8bae\u5f00\u53d1\u8005\u5728\u5c0f\u7a0b\u5e8f\u5185\u4f7f\u7528\u65f6\u901a\u8fc7 delta \u8fdb\u884c\u63d2\u5165\u3002"),(0,l.kt)("p",null,"\u5bcc\u6587\u672c\u7ec4\u4ef6\u5185\u90e8\u5f15\u5165\u4e86\u4e00\u4e9b\u57fa\u672c\u7684\u6837\u5f0f\u4f7f\u5f97\u5185\u5bb9\u53ef\u4ee5\u6b63\u786e\u7684\u5c55\u793a\uff0c\u5f00\u53d1\u65f6\u53ef\u4ee5\u8fdb\u884c\u8986\u76d6\u3002\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u5728\u5176\u5b83\u7ec4\u4ef6\u6216\u73af\u5883\u4e2d\u4f7f\u7528\u5bcc\u6587\u672c\u7ec4\u4ef6\u5bfc\u51fa\u7684 html \u65f6\uff0c\u9700\u8981\u989d\u5916\u5f15\u5165 \u8fd9\u6bb5\u6837\u5f0f\uff0c\u5e76\u7ef4\u62a4 ",(0,l.kt)("inlineCode",{parentName:"p"},"<ql-container><ql-editor></ql-editor></ql-container>")," \u7684\u7ed3\u6784\u3002"),(0,l.kt)("p",null,"\u56fe\u7247\u63a7\u4ef6\u4ec5\u521d\u59cb\u5316\u65f6\u8bbe\u7f6e\u6709\u6548\u3002"),(0,l.kt)("p",null,"*\u7f16\u8f91\u5668\u5185\u652f\u6301\u90e8\u5206 HTML \u6807\u7b7e\u548c\u5185\u8054\u6837\u5f0f\uff0c\u4e0d\u652f\u6301 ",(0,l.kt)("strong",{parentName:"p"},"class")," \u548c ",(0,l.kt)("strong",{parentName:"p"},"id*")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/component/editor.html"},"\u53c2\u8003\u6587\u6863"))),(0,l.kt)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"ComponentType<EditorProps>\n")),(0,l.kt)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),(0,l.kt)(o.Z,{defaultValue:"React",values:[{label:"React",value:"React"},{label:"Vue",value:"Vue"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"React",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"class App extends Components {\n  state = {\n    placeholder: '\u6765\uff0c\u8f93\u5165\u9694\u58c1\u7684\u540d\u5b57\u8bd5\u8bd5...'\n  }\n\n  editorReady = e => {\n    Taro.createSelectorQuery().select('#editor').context((res) => {\n      this.editorCtx = res.context\n    }).exec()\n  }\n\n  undo = e => {\n    this.editorCtx.undo()\n  }\n\n  render () {\n    return (\n      <View>\n        <Editor id='editor' className='editor' placeholder={this.state.placeholder} onReady={this.editorReady}></Editor>\n        <Button type='warn' onClick={this.undo}>\u64a4\u9500</Button>\n      </View>\n    )\n  }\n}\n"))),(0,l.kt)(i.Z,{value:"Vue",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<template>\n  <view class="container">\n    <editor id="editor" class="editor" :placeholder="placeholder" @ready="editorReady"></editor>\n    <button type="warn" @tap="undo">\u64a4\u9500</button>\n  </view>\n</template>\n\n<script>\n  import Taro from \'@tarojs/taro\'\n  export default {\n    data() {\n      return {\n        placeholder: \'\u6765\uff0c\u8f93\u5165\u9694\u58c1\u7684\u540d\u5b57\u8bd5\u8bd5...\'\n      }\n    },\n    methods: {\n      editorReady() {\n        Taro.createSelectorQuery().select(\'#editor\').context((res) => {\n          this.editorCtx = res.context\n        }).exec()\n      },\n      undo() {\n        this.editorCtx.undo()\n      }\n    }\n  }\n<\/script>\n')))),(0,l.kt)("h2",{id:"editorprops"},"EditorProps"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"\u53c2\u6570"),(0,l.kt)("th",null,"\u7c7b\u578b"),(0,l.kt)("th",{style:{textAlign:"center"}},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),(0,l.kt)("th",null,"\u8bf4\u660e"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"readOnly"),(0,l.kt)("td",null,(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",{style:{textAlign:"center"}},(0,l.kt)("code",null,"false")),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u8bbe\u7f6e\u7f16\u8f91\u5668\u4e3a\u53ea\u8bfb")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"placeholder"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",{style:{textAlign:"center"}}),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u63d0\u793a\u4fe1\u606f")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"showImgSize"),(0,l.kt)("td",null,(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",{style:{textAlign:"center"}},(0,l.kt)("code",null,"false")),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u70b9\u51fb\u56fe\u7247\u65f6\u663e\u793a\u56fe\u7247\u5927\u5c0f\u63a7\u4ef6")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"showImgToolbar"),(0,l.kt)("td",null,(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",{style:{textAlign:"center"}},(0,l.kt)("code",null,"false")),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u70b9\u51fb\u56fe\u7247\u65f6\u663e\u793a\u5de5\u5177\u680f\u63a7\u4ef6")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"showImgResize"),(0,l.kt)("td",null,(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",{style:{textAlign:"center"}},(0,l.kt)("code",null,"false")),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u70b9\u51fb\u56fe\u7247\u65f6\u663e\u793a\u4fee\u6539\u5c3a\u5bf8\u63a7\u4ef6")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"onReady"),(0,l.kt)("td",null,(0,l.kt)("code",null,"BaseEventOrigFunction<any>")),(0,l.kt)("td",{style:{textAlign:"center"}}),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u7f16\u8f91\u5668\u521d\u59cb\u5316\u5b8c\u6210\u65f6\u89e6\u53d1")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"onFocus"),(0,l.kt)("td",null,(0,l.kt)("code",null,"BaseEventOrigFunction<editorEventDetail>")),(0,l.kt)("td",{style:{textAlign:"center"}}),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u7f16\u8f91\u5668\u805a\u7126\u65f6\u89e6\u53d1",(0,l.kt)("br",null),"event.detail = ","{ html, text, delta }")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"onBlur"),(0,l.kt)("td",null,(0,l.kt)("code",null,"BaseEventOrigFunction<editorEventDetail>")),(0,l.kt)("td",{style:{textAlign:"center"}}),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u7f16\u8f91\u5668\u5931\u53bb\u7126\u70b9\u65f6\u89e6\u53d1",(0,l.kt)("br",null),"detail = ","{ html, text, delta }")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"onInput"),(0,l.kt)("td",null,(0,l.kt)("code",null,"BaseEventOrigFunction<editorEventDetail>")),(0,l.kt)("td",{style:{textAlign:"center"}}),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u7f16\u8f91\u5668\u5185\u5bb9\u6539\u53d8\u65f6\u89e6\u53d1",(0,l.kt)("br",null),"detail = ","{ html, text, delta }")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"onStatuschange"),(0,l.kt)("td",null,(0,l.kt)("code",null,"BaseEventOrigFunction<any>")),(0,l.kt)("td",{style:{textAlign:"center"}}),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u901a\u8fc7 Context \u65b9\u6cd5\u6539\u53d8\u7f16\u8f91\u5668\u5185\u6837\u5f0f\u65f6\u89e6\u53d1\uff0c\u8fd4\u56de\u9009\u533a\u5df2\u8bbe\u7f6e\u7684\u6837\u5f0f")))),(0,l.kt)("h3",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"API"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,l.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,l.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"EditorProps.readOnly"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"EditorProps.placeholder"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"EditorProps.showImgSize"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"EditorProps.showImgToolbar"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"EditorProps.showImgResize"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"EditorProps.onReady"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"EditorProps.onFocus"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"EditorProps.onBlur"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"EditorProps.onInput"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"EditorProps.onStatuschange"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"})))),(0,l.kt)("h3",{id:"editoreventdetail"},"editorEventDetail"),(0,l.kt)("h2",{id:"api-\u652f\u6301\u5ea6-1"},"API \u652f\u6301\u5ea6"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"API"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,l.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,l.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"Editor"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"})))))}p.isMDXComponent=!0},86010:function(t,e,n){"use strict";function r(t){var e,n,a="";if("string"==typeof t||"number"==typeof t)a+=t;else if("object"==typeof t)if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=r(t[e]))&&(a&&(a+=" "),a+=n);else for(e in t)t[e]&&(a&&(a+=" "),a+=e);return a}function a(){for(var t,e,n=0,a="";n<arguments.length;)(t=arguments[n++])&&(e=r(t))&&(a&&(a+=" "),a+=e);return a}n.d(e,{Z:function(){return a}})}}]);