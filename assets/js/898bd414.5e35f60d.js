(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[716],{22122:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,{Z:function(){return r}})},19756:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}n.d(t,{Z:function(){return r}})},3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return k}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=c(n),k=a,m=p["".concat(u,".").concat(k)]||p[k]||d[k]||l;return n?r.createElement(m,o(o({ref:t},s),{},{components:n})):r.createElement(m,o({ref:t},s))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=p;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},58215:function(e,t,n){"use strict";var r=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},41395:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(67294),a=n(80944),l=n(86010),o="tabItem_1uMI",i="tabItemActive_2DSg";var u=37,c=39;var s=function(e){var t=e.lazy,n=e.block,s=e.defaultValue,d=e.values,p=e.groupId,k=e.className,m=(0,a.Z)(),b=m.tabGroupChoices,v=m.setTabGroupChoices,f=(0,r.useState)(s),g=f[0],h=f[1],w=r.Children.toArray(e.children),y=[];if(null!=p){var N=b[p];null!=N&&N!==g&&d.some((function(e){return e.value===N}))&&h(N)}var O=function(e){var t=e.currentTarget,n=y.indexOf(t),r=d[n].value;h(r),null!=p&&(v(p,r),setTimeout((function(){var e,n,r,a,l,o,u,c;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,l=e.right,o=window,u=o.innerHeight,c=o.innerWidth,n>=0&&l<=c&&a<=u&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(i),setTimeout((function(){return t.classList.remove(i)}),2e3))}),150))},E=function(e){var t,n;switch(e.keyCode){case c:var r=y.indexOf(e.target)+1;n=y[r]||y[0];break;case u:var a=y.indexOf(e.target)-1;n=y[a]||y[y.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},k)},d.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:g===t?0:-1,"aria-selected":g===t,className:(0,l.Z)("tabs__item",o,{"tabs__item--active":g===t}),key:t,ref:function(e){return y.push(e)},onKeyDown:E,onFocus:O,onClick:O},n)}))),t?(0,r.cloneElement)(w.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},w.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))}},79443:function(e,t,n){"use strict";var r=(0,n(67294).createContext)(void 0);t.Z=r},80944:function(e,t,n){"use strict";var r=n(67294),a=n(79443);t.Z=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},64809:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return u},metadata:function(){return c},toc:function(){return s},default:function(){return p}});var r=n(22122),a=n(19756),l=(n(67294),n(3905)),o=n(41395),i=n(58215),u={title:"WebView",sidebar_label:"WebView"},c={unversionedId:"components/open/web-view",id:"components/open/web-view",isDocsHomePage:!1,title:"WebView",description:"web-view \u7ec4\u4ef6\u662f\u4e00\u4e2a\u53ef\u4ee5\u7528\u6765\u627f\u8f7d\u7f51\u9875\u7684\u5bb9\u5668\uff0c\u4f1a\u81ea\u52a8\u94fa\u6ee1\u6574\u4e2a\u5c0f\u7a0b\u5e8f\u9875\u9762\u3002\u4e2a\u4eba\u7c7b\u578b\u4e0e\u6d77\u5916\u7c7b\u578b\u7684\u5c0f\u7a0b\u5e8f\u6682\u4e0d\u652f\u6301\u4f7f\u7528\u3002",source:"@site/docs/components/open/web-view.md",sourceDirName:"components/open",slug:"/components/open/web-view",permalink:"/taro/docs/next/components/open/web-view",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/components/open/web-view.md",version:"current",sidebar_label:"WebView",frontMatter:{title:"WebView",sidebar_label:"WebView"},sidebar:"components",previous:{title:"OpenData",permalink:"/taro/docs/next/components/open/open-data"},next:{title:"\u5176\u4ed6",permalink:"/taro/docs/next/components/open/others"}},s=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"WebViewProps",id:"webviewprops",children:[{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]},{value:"onMessageEventDetail",id:"onmessageeventdetail",children:[]},{value:"onLoadEventDetail",id:"onloadeventdetail",children:[]},{value:"onErrorEventDetail",id:"onerroreventdetail",children:[]}]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6-1",children:[]}],d={toc:s};function p(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"web-view \u7ec4\u4ef6\u662f\u4e00\u4e2a\u53ef\u4ee5\u7528\u6765\u627f\u8f7d\u7f51\u9875\u7684\u5bb9\u5668\uff0c\u4f1a\u81ea\u52a8\u94fa\u6ee1\u6574\u4e2a\u5c0f\u7a0b\u5e8f\u9875\u9762\u3002\u4e2a\u4eba\u7c7b\u578b\u4e0e\u6d77\u5916\u7c7b\u578b\u7684\u5c0f\u7a0b\u5e8f\u6682\u4e0d\u652f\u6301\u4f7f\u7528\u3002"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/component/web-view.html"},"\u53c2\u8003\u6587\u6863"))),(0,l.kt)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"ComponentType<WebViewProps>\n")),(0,l.kt)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),(0,l.kt)(o.Z,{defaultValue:"React",values:[{label:"React",value:"React"},{label:"Vue",value:"Vue"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"React",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"class App extends Component {\n  handleMessage () {}\n  \n  render () {\n    return (\n      <WebView src='https://mp.weixin.qq.com/' onMessage={this.handleMessage} />\n    )\n  }\n}\n"))),(0,l.kt)(i.Z,{value:"Vue",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},"<template>\n  <web-view src='https://mp.weixin.qq.com/' @message=\"handleMessage\" />\n</template>\n")))),(0,l.kt)("h2",{id:"webviewprops"},"WebViewProps"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"\u53c2\u6570"),(0,l.kt)("th",null,"\u7c7b\u578b"),(0,l.kt)("th",null,"\u5fc5\u586b"),(0,l.kt)("th",null,"\u8bf4\u660e"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"src"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",null,"\u662f"),(0,l.kt)("td",null,"webview \u6307\u5411\u7f51\u9875\u7684\u94fe\u63a5\u3002\u53ef\u6253\u5f00\u5173\u8054\u7684\u516c\u4f17\u53f7\u7684\u6587\u7ae0\uff0c\u5176\u5b83\u7f51\u9875\u9700\u767b\u5f55\u5c0f\u7a0b\u5e8f\u7ba1\u7406\u540e\u53f0\u914d\u7f6e\u4e1a\u52a1\u57df\u540d\u3002")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"onMessage"),(0,l.kt)("td",null,(0,l.kt)("code",null,"BaseEventOrigFunction<onMessageEventDetail>")),(0,l.kt)("td",null,"\u5426"),(0,l.kt)("td",null,"\u7f51\u9875\u5411\u5c0f\u7a0b\u5e8f postMessage \u65f6\uff0c\u4f1a\u5728\u7279\u5b9a\u65f6\u673a\uff08\u5c0f\u7a0b\u5e8f\u540e\u9000\u3001\u7ec4\u4ef6\u9500\u6bc1\u3001\u5206\u4eab\uff09\u89e6\u53d1\u5e76\u6536\u5230\u6d88\u606f\u3002e.detail = ","{ data }")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"onLoad"),(0,l.kt)("td",null,(0,l.kt)("code",null,"BaseEventOrigFunction<onLoadEventDetail>")),(0,l.kt)("td",null,"\u5426"),(0,l.kt)("td",null,"\u7f51\u9875\u52a0\u8f7d\u6210\u529f\u65f6\u5019\u89e6\u53d1\u6b64\u4e8b\u4ef6\u3002e.detail = ","{ src }")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"onError"),(0,l.kt)("td",null,(0,l.kt)("code",null,"BaseEventOrigFunction<onErrorEventDetail>")),(0,l.kt)("td",null,"\u5426"),(0,l.kt)("td",null,"\u7f51\u9875\u52a0\u8f7d\u5931\u8d25\u7684\u65f6\u5019\u89e6\u53d1\u6b64\u4e8b\u4ef6\u3002e.detail = ","{ src }")))),(0,l.kt)("h3",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"API"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,l.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,l.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"WebViewProps.src"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"WebViewProps.onMessage"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"WebViewProps.onLoad"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"WebViewProps.onError"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"})))),(0,l.kt)("h3",{id:"onmessageeventdetail"},"onMessageEventDetail"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"\u53c2\u6570"),(0,l.kt)("th",null,"\u7c7b\u578b"),(0,l.kt)("th",null,"\u8bf4\u660e"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"data"),(0,l.kt)("td",null,(0,l.kt)("code",null,"any[]")),(0,l.kt)("td",null,"\u6d88\u606f\u6570\u636e\uff0c\u662f\u591a\u6b21 postMessage \u7684\u53c2\u6570\u7ec4\u6210\u7684\u6570\u7ec4")))),(0,l.kt)("h3",{id:"onloadeventdetail"},"onLoadEventDetail"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"\u53c2\u6570"),(0,l.kt)("th",null,"\u7c7b\u578b"),(0,l.kt)("th",null,"\u8bf4\u660e"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"src"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",null,"\u7f51\u9875\u94fe\u63a5")))),(0,l.kt)("h3",{id:"onerroreventdetail"},"onErrorEventDetail"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"\u53c2\u6570"),(0,l.kt)("th",null,"\u7c7b\u578b"),(0,l.kt)("th",null,"\u8bf4\u660e"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"src"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",null,"\u7f51\u9875\u94fe\u63a5")))),(0,l.kt)("h2",{id:"api-\u652f\u6301\u5ea6-1"},"API \u652f\u6301\u5ea6"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"API"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,l.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,l.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"WebView"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")))))}p.isMDXComponent=!0},86010:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})}}]);