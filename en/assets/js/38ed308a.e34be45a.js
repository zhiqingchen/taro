(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[93594],{22122:function(t,e,n){"use strict";function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}n.d(e,{Z:function(){return r}})},19756:function(t,e,n){"use strict";function r(t,e){if(null==t)return{};var n,r,l={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(l[n]=t[n]);return l}n.d(e,{Z:function(){return r}})},3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return d},kt:function(){return k}});var r=n(67294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,l=function(t,e){if(null==t)return{};var n,r,l={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var c=r.createContext({}),u=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},d=function(t){var e=u(t.components);return r.createElement(c.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var n=t.components,l=t.mdxType,a=t.originalType,c=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),s=u(n),k=l,m=s["".concat(c,".").concat(k)]||s[k]||p[k]||a;return n?r.createElement(m,o(o({ref:e},d),{},{components:n})):r.createElement(m,o({ref:e},d))}));function k(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var a=n.length,o=new Array(a);o[0]=s;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i.mdxType="string"==typeof t?t:l,o[1]=i;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},81440:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return o},metadata:function(){return i},toc:function(){return c},default:function(){return d}});var r=n(22122),l=n(19756),a=(n(67294),n(3905)),o={title:"WebView",sidebar_label:"WebView"},i={unversionedId:"components/open/web-view",id:"version-2.x/components/open/web-view",isDocsHomePage:!1,title:"WebView",description:"web-view \u7ec4\u4ef6\u662f\u4e00\u4e2a\u53ef\u4ee5\u7528\u6765\u627f\u8f7d\u7f51\u9875\u7684\u5bb9\u5668\uff0c\u4f1a\u81ea\u52a8\u94fa\u6ee1\u6574\u4e2a\u5c0f\u7a0b\u5e8f\u9875\u9762\u3002\u4e2a\u4eba\u7c7b\u578b\u4e0e\u6d77\u5916\u7c7b\u578b\u7684\u5c0f\u7a0b\u5e8f\u6682\u4e0d\u652f\u6301\u4f7f\u7528\u3002",source:"@site/versioned_docs/version-2.x/components/open/web-view.md",sourceDirName:"components/open",slug:"/components/open/web-view",permalink:"/taro/en/docs/2.x/components/open/web-view",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-2.x/components/open/web-view.md",version:"2.x",sidebar_label:"WebView",frontMatter:{title:"WebView",sidebar_label:"WebView"},sidebar:"version-2.x/components",previous:{title:"OpenData",permalink:"/taro/en/docs/2.x/components/open/open-data"},next:{title:"\u5176\u4ed6",permalink:"/taro/en/docs/2.x/components/open/others"}},c=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"WebViewProps",id:"webviewprops",children:[{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]},{value:"onMessageEventDetail",id:"onmessageeventdetail",children:[]},{value:"onLoadEventDetail",id:"onloadeventdetail",children:[]},{value:"onErrorEventDetail",id:"onerroreventdetail",children:[]}]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6-1",children:[]}],u={toc:c};function d(t){var e=t.components,n=(0,l.Z)(t,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"web-view \u7ec4\u4ef6\u662f\u4e00\u4e2a\u53ef\u4ee5\u7528\u6765\u627f\u8f7d\u7f51\u9875\u7684\u5bb9\u5668\uff0c\u4f1a\u81ea\u52a8\u94fa\u6ee1\u6574\u4e2a\u5c0f\u7a0b\u5e8f\u9875\u9762\u3002\u4e2a\u4eba\u7c7b\u578b\u4e0e\u6d77\u5916\u7c7b\u578b\u7684\u5c0f\u7a0b\u5e8f\u6682\u4e0d\u652f\u6301\u4f7f\u7528\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/component/web-view.html"},"\u53c2\u8003\u6587\u6863"))),(0,a.kt)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"ComponentType<WebViewProps>\n")),(0,a.kt)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"class App extends Component {\n  handleMessage () {}\n  \n  render () {\n    return (\n      <WebView src='https://mp.weixin.qq.com/' onMessage={this.handleMessage} />\n    )\n  }\n}\n")),(0,a.kt)("h2",{id:"webviewprops"},"WebViewProps"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"\u53c2\u6570"),(0,a.kt)("th",null,"\u7c7b\u578b"),(0,a.kt)("th",null,"\u5fc5\u586b"),(0,a.kt)("th",null,"\u8bf4\u660e"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"src"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string")),(0,a.kt)("td",null,"\u662f"),(0,a.kt)("td",null,"webview \u6307\u5411\u7f51\u9875\u7684\u94fe\u63a5\u3002\u53ef\u6253\u5f00\u5173\u8054\u7684\u516c\u4f17\u53f7\u7684\u6587\u7ae0\uff0c\u5176\u5b83\u7f51\u9875\u9700\u767b\u5f55\u5c0f\u7a0b\u5e8f\u7ba1\u7406\u540e\u53f0\u914d\u7f6e\u4e1a\u52a1\u57df\u540d\u3002")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"onMessage"),(0,a.kt)("td",null,(0,a.kt)("code",null,"BaseEventOrigFunction<onMessageEventDetail>")),(0,a.kt)("td",null,"\u5426"),(0,a.kt)("td",null,"\u7f51\u9875\u5411\u5c0f\u7a0b\u5e8f postMessage \u65f6\uff0c\u4f1a\u5728\u7279\u5b9a\u65f6\u673a\uff08\u5c0f\u7a0b\u5e8f\u540e\u9000\u3001\u7ec4\u4ef6\u9500\u6bc1\u3001\u5206\u4eab\uff09\u89e6\u53d1\u5e76\u6536\u5230\u6d88\u606f\u3002e.detail = ","{ data }")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"onLoad"),(0,a.kt)("td",null,(0,a.kt)("code",null,"BaseEventOrigFunction<onLoadEventDetail>")),(0,a.kt)("td",null,"\u5426"),(0,a.kt)("td",null,"\u7f51\u9875\u52a0\u8f7d\u6210\u529f\u65f6\u5019\u89e6\u53d1\u6b64\u4e8b\u4ef6\u3002e.detail = ","{ src }")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"onError"),(0,a.kt)("td",null,(0,a.kt)("code",null,"BaseEventOrigFunction<onErrorEventDetail>")),(0,a.kt)("td",null,"\u5426"),(0,a.kt)("td",null,"\u7f51\u9875\u52a0\u8f7d\u5931\u8d25\u7684\u65f6\u5019\u89e6\u53d1\u6b64\u4e8b\u4ef6\u3002e.detail = ","{ src }")))),(0,a.kt)("h3",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"API"),(0,a.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,a.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"WebViewProps.src"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"WebViewProps.onMessage"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"WebViewProps.onLoad"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"WebViewProps.onError"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"})))),(0,a.kt)("h3",{id:"onmessageeventdetail"},"onMessageEventDetail"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"\u53c2\u6570"),(0,a.kt)("th",null,"\u7c7b\u578b"),(0,a.kt)("th",null,"\u8bf4\u660e"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"data"),(0,a.kt)("td",null,(0,a.kt)("code",null,"any[]")),(0,a.kt)("td",null,"\u6d88\u606f\u6570\u636e\uff0c\u662f\u591a\u6b21 postMessage \u7684\u53c2\u6570\u7ec4\u6210\u7684\u6570\u7ec4")))),(0,a.kt)("h3",{id:"onloadeventdetail"},"onLoadEventDetail"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"\u53c2\u6570"),(0,a.kt)("th",null,"\u7c7b\u578b"),(0,a.kt)("th",null,"\u8bf4\u660e"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"src"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string")),(0,a.kt)("td",null,"\u7f51\u9875\u94fe\u63a5")))),(0,a.kt)("h3",{id:"onerroreventdetail"},"onErrorEventDetail"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"\u53c2\u6570"),(0,a.kt)("th",null,"\u7c7b\u578b"),(0,a.kt)("th",null,"\u8bf4\u660e"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"src"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string")),(0,a.kt)("td",null,"\u7f51\u9875\u94fe\u63a5")))),(0,a.kt)("h2",{id:"api-\u652f\u6301\u5ea6-1"},"API \u652f\u6301\u5ea6"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"API"),(0,a.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,a.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"WebView"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")))))}d.isMDXComponent=!0}}]);