(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[21298],{22122:function(t,e,n){"use strict";function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}n.d(e,{Z:function(){return r}})},19756:function(t,e,n){"use strict";function r(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}n.d(e,{Z:function(){return r}})},3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return p},kt:function(){return k}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var i=r.createContext({}),c=function(t){var e=r.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},p=function(t){var e=c(t.components);return r.createElement(i.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,i=t.parentName,p=u(t,["components","mdxType","originalType","parentName"]),s=c(n),k=a,m=s["".concat(i,".").concat(k)]||s[k]||d[k]||l;return n?r.createElement(m,o(o({ref:e},p),{},{components:n})):r.createElement(m,o({ref:e},p))}));function k(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,o=new Array(l);o[0]=s;var u={};for(var i in e)hasOwnProperty.call(e,i)&&(u[i]=e[i]);u.originalType=t,u.mdxType="string"==typeof t?t:a,o[1]=u;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},58215:function(t,e,n){"use strict";var r=n(67294);e.Z=function(t){var e=t.children,n=t.hidden,a=t.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},e)}},41395:function(t,e,n){"use strict";n.d(e,{Z:function(){return p}});var r=n(67294),a=n(80944),l=n(86010),o="tabItem_1uMI",u="tabItemActive_2DSg";var i=37,c=39;var p=function(t){var e=t.lazy,n=t.block,p=t.defaultValue,d=t.values,s=t.groupId,k=t.className,m=(0,a.Z)(),f=m.tabGroupChoices,g=m.setTabGroupChoices,y=(0,r.useState)(p),v=y[0],b=y[1],h=r.Children.toArray(t.children),N=[];if(null!=s){var O=f[s];null!=O&&O!==v&&d.some((function(t){return t.value===O}))&&b(O)}var x=function(t){var e=t.currentTarget,n=N.indexOf(e),r=d[n].value;b(r),null!=s&&(g(s,r),setTimeout((function(){var t,n,r,a,l,o,i,c;(t=e.getBoundingClientRect(),n=t.top,r=t.left,a=t.bottom,l=t.right,o=window,i=o.innerHeight,c=o.innerWidth,n>=0&&l<=c&&a<=i&&r>=0)||(e.scrollIntoView({block:"center",behavior:"smooth"}),e.classList.add(u),setTimeout((function(){return e.classList.remove(u)}),2e3))}),150))},A=function(t){var e,n;switch(t.keyCode){case c:var r=N.indexOf(t.target)+1;n=N[r]||N[0];break;case i:var a=N.indexOf(t.target)-1;n=N[a]||N[N.length-1]}null==(e=n)||e.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},k)},d.map((function(t){var e=t.value,n=t.label;return r.createElement("li",{role:"tab",tabIndex:v===e?0:-1,"aria-selected":v===e,className:(0,l.Z)("tabs__item",o,{"tabs__item--active":v===e}),key:e,ref:function(t){return N.push(t)},onKeyDown:A,onFocus:x,onClick:x},n)}))),e?(0,r.cloneElement)(h.filter((function(t){return t.props.value===v}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},h.map((function(t,e){return(0,r.cloneElement)(t,{key:e,hidden:t.props.value!==v})}))))}},79443:function(t,e,n){"use strict";var r=(0,n(67294).createContext)(void 0);e.Z=r},80944:function(t,e,n){"use strict";var r=n(67294),a=n(79443);e.Z=function(){var t=(0,r.useContext)(a.Z);if(null==t)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return t}},83918:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p},default:function(){return s}});var r=n(22122),a=n(19756),l=(n(67294),n(3905)),o=n(41395),u=n(58215),i={title:"OpenData",sidebar_label:"OpenData"},c={unversionedId:"components/open/open-data",id:"components/open/open-data",isDocsHomePage:!1,title:"OpenData",description:"\u7528\u4e8e\u5c55\u793a\u5fae\u4fe1\u5f00\u653e\u7684\u6570\u636e",source:"@site/docs/components/open/open-data.md",sourceDirName:"components/open",slug:"/components/open/open-data",permalink:"/taro/docs/next/components/open/open-data",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/components/open/open-data.md",version:"current",sidebar_label:"OpenData",frontMatter:{title:"OpenData",sidebar_label:"OpenData"},sidebar:"components",previous:{title:"OfficialAccount",permalink:"/taro/docs/next/components/open/official-account"},next:{title:"WebView",permalink:"/taro/docs/next/components/open/web-view"}},p=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"OpenDataProps",id:"opendataprops",children:[{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]},{value:"type",id:"type",children:[]},{value:"lang",id:"lang",children:[]}]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6-1",children:[]}],d={toc:p};function s(t){var e=t.components,n=(0,a.Z)(t,["components"]);return(0,l.kt)("wrapper",(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u7528\u4e8e\u5c55\u793a\u5fae\u4fe1\u5f00\u653e\u7684\u6570\u636e"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/component/open-data.html"},"\u53c2\u8003\u6587\u6863"))),(0,l.kt)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"ComponentType<OpenDataProps>\n")),(0,l.kt)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),(0,l.kt)(o.Z,{defaultValue:"React",values:[{label:"React",value:"React"},{label:"Vue",value:"Vue"}],mdxType:"Tabs"},(0,l.kt)(u.Z,{value:"React",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"class App extends Component {\n  render () {\n    return (\n      <OpenData type='userAvatarUrl'/>\n    )\n  }\n}\n"))),(0,l.kt)(u.Z,{value:"Vue",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<template>\n  <open-data type="userAvatarUrl" />\n</template>\n')))),(0,l.kt)("h2",{id:"opendataprops"},"OpenDataProps"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"\u53c2\u6570"),(0,l.kt)("th",null,"\u7c7b\u578b"),(0,l.kt)("th",{style:{textAlign:"center"}},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),(0,l.kt)("th",null,"\u8bf4\u660e"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"type"),(0,l.kt)("td",null,(0,l.kt)("code",null,'"groupName" | "userNickName" | "userAvatarUrl" | "userGender" | "userCity" | "userProvince" | "userCountry" | "userLanguage"')),(0,l.kt)("td",{style:{textAlign:"center"}}),(0,l.kt)("td",{style:{textAlign:"center"}},"\u662f"),(0,l.kt)("td",null,"\u5f00\u653e\u6570\u636e\u7c7b\u578b")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"openGid"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",{style:{textAlign:"center"}}),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,'\u5f53 type="groupName" \u65f6\u751f\u6548, \u7fa4id')),(0,l.kt)("tr",null,(0,l.kt)("td",null,"lang"),(0,l.kt)("td",null,(0,l.kt)("code",null,'"en" | "zh_CN" | "zh_TW"')),(0,l.kt)("td",{style:{textAlign:"center"}},(0,l.kt)("code",null,'"en"')),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,'\u5f53 type="user*" \u65f6\u751f\u6548\uff0c\u4ee5\u54ea\u79cd\u8bed\u8a00\u5c55\u793a userInfo')),(0,l.kt)("tr",null,(0,l.kt)("td",null,"defaultText"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",{style:{textAlign:"center"}}),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u6570\u636e\u4e3a\u7a7a\u65f6\u7684\u9ed8\u8ba4\u6587\u6848")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"defaultAvatar"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",{style:{textAlign:"center"}}),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u7528\u6237\u5934\u50cf\u4e3a\u7a7a\u65f6\u7684\u9ed8\u8ba4\u56fe\u7247\uff0c\u652f\u6301\u76f8\u5bf9\u8def\u5f84\u548c\u7f51\u7edc\u56fe\u7247\u8def\u5f84")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"onError"),(0,l.kt)("td",null,(0,l.kt)("code",null,"BaseEventOrigFunction<any>")),(0,l.kt)("td",{style:{textAlign:"center"}}),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u7fa4\u540d\u79f0\u6216\u7528\u6237\u4fe1\u606f\u4e3a\u7a7a\u65f6\u89e6\u53d1")))),(0,l.kt)("h3",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"API"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,l.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,l.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"OpenDataProps.type"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"OpenDataProps.openGid"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"OpenDataProps.lang"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"OpenDataProps.defaultText"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"OpenDataProps.defaultAvatar"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"OpenDataProps.onError"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"})))),(0,l.kt)("h3",{id:"type"},"type"),(0,l.kt)("p",null,"type \u7684\u5408\u6cd5\u503c"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"\u53c2\u6570"),(0,l.kt)("th",null,"\u8bf4\u660e"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"groupName"),(0,l.kt)("td",null,"\u62c9\u53d6\u7fa4\u540d\u79f0")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"userNickName"),(0,l.kt)("td",null,"\u7528\u6237\u6635\u79f0")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"userAvatarUrl"),(0,l.kt)("td",null,"\u7528\u6237\u5934\u50cf")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"userGender"),(0,l.kt)("td",null,"\u7528\u6237\u6027\u522b")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"userCity"),(0,l.kt)("td",null,"\u7528\u6237\u6240\u5728\u57ce\u5e02")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"userProvince"),(0,l.kt)("td",null,"\u7528\u6237\u6240\u5728\u7701\u4efd")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"userCountry"),(0,l.kt)("td",null,"\u7528\u6237\u6240\u5728\u56fd\u5bb6")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"userLanguage"),(0,l.kt)("td",null,"\u7528\u6237\u7684\u8bed\u8a00")))),(0,l.kt)("h3",{id:"lang"},"lang"),(0,l.kt)("p",null,"lang \u7684\u5408\u6cd5\u503c"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"\u53c2\u6570"),(0,l.kt)("th",null,"\u8bf4\u660e"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"en"),(0,l.kt)("td",null,"\u82f1\u6587")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"zh_CN"),(0,l.kt)("td",null,"\u7b80\u4f53\u4e2d\u6587")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"zh_TW"),(0,l.kt)("td",null,"\u7e41\u4f53\u4e2d\u6587")))),(0,l.kt)("h2",{id:"api-\u652f\u6301\u5ea6-1"},"API \u652f\u6301\u5ea6"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"API"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,l.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,l.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"OpenData"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"})))))}s.isMDXComponent=!0},86010:function(t,e,n){"use strict";function r(t){var e,n,a="";if("string"==typeof t||"number"==typeof t)a+=t;else if("object"==typeof t)if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=r(t[e]))&&(a&&(a+=" "),a+=n);else for(e in t)t[e]&&(a&&(a+=" "),a+=e);return a}function a(){for(var t,e,n=0,a="";n<arguments.length;)(t=arguments[n++])&&(e=r(t))&&(a&&(a+=" "),a+=e);return a}n.d(e,{Z:function(){return a}})}}]);