"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[15254],{3905:function(t,e,n){n.d(e,{Zo:function(){return k},kt:function(){return s}});var l=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function d(t,e){if(null==t)return{};var n,l,r=function(t,e){if(null==t)return{};var n,l,r={},a=Object.keys(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=l.createContext({}),i=function(t){var e=l.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):u(u({},e),t)),n},k=function(t){var e=i(t.components);return l.createElement(o.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},p=l.forwardRef((function(t,e){var n=t.components,r=t.mdxType,a=t.originalType,o=t.parentName,k=d(t,["components","mdxType","originalType","parentName"]),p=i(n),s=r,m=p["".concat(o,".").concat(s)]||p[s]||c[s]||a;return n?l.createElement(m,u(u({ref:e},k),{},{components:n})):l.createElement(m,u({ref:e},k))}));function s(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=n.length,u=new Array(a);u[0]=p;var d={};for(var o in e)hasOwnProperty.call(e,o)&&(d[o]=e[o]);d.originalType=t,d.mdxType="string"==typeof t?t:r,u[1]=d;for(var i=2;i<a;i++)u[i]=n[i];return l.createElement.apply(null,u)}return l.createElement.apply(null,n)}p.displayName="MDXCreateElement"},58215:function(t,e,n){var l=n(67294);e.Z=function(t){var e=t.children,n=t.hidden,r=t.className;return l.createElement("div",{role:"tabpanel",hidden:n,className:r},e)}},55064:function(t,e,n){n.d(e,{Z:function(){return p}});var l=n(83117),r=n(67294),a=n(72389),u=n(79443);var d=function(){var t=(0,r.useContext)(u.Z);if(null==t)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return t},o=n(83039),i=n(86010),k="tabItem_1uMI";function c(t){var e,n,l,a=t.lazy,u=t.block,c=t.defaultValue,p=t.values,s=t.groupId,m=t.className,g=r.Children.map(t.children,(function(t){if((0,r.isValidElement)(t)&&void 0!==t.props.value)return t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof t.type?t.type:t.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=p?p:g.map((function(t){var e=t.props;return{value:e.value,label:e.label}})),N=(0,o.lx)(h,(function(t,e){return t.value===e.value}));if(N.length>0)throw new Error('Docusaurus error: Duplicate values "'+N.map((function(t){return t.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===c?c:null!=(e=null!=c?c:null==(n=g.find((function(t){return t.props.default})))?void 0:n.props.value)?e:null==(l=g[0])?void 0:l.props.value;if(null!==b&&!h.some((function(t){return t.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+h.map((function(t){return t.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var v=d(),f=v.tabGroupChoices,y=v.setTabGroupChoices,x=(0,r.useState)(b),T=x[0],A=x[1],P=[],E=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=s){var w=f[s];null!=w&&w!==T&&h.some((function(t){return t.value===w}))&&A(w)}var C=function(t){var e=t.currentTarget,n=P.indexOf(e),l=h[n].value;l!==T&&(E(e),A(l),null!=s&&y(s,l))},O=function(t){var e,n=null;switch(t.key){case"ArrowRight":var l=P.indexOf(t.currentTarget)+1;n=P[l]||P[0];break;case"ArrowLeft":var r=P.indexOf(t.currentTarget)-1;n=P[r]||P[P.length-1]}null==(e=n)||e.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":u},m)},h.map((function(t){var e=t.value,n=t.label;return r.createElement("li",{role:"tab",tabIndex:T===e?0:-1,"aria-selected":T===e,className:(0,i.Z)("tabs__item",k,{"tabs__item--active":T===e}),key:e,ref:function(t){return P.push(t)},onKeyDown:O,onFocus:C,onClick:C},null!=n?n:e)}))),a?(0,r.cloneElement)(g.filter((function(t){return t.props.value===T}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},g.map((function(t,e){return(0,r.cloneElement)(t,{key:e,hidden:t.props.value!==T})}))))}function p(t){var e=(0,a.Z)();return r.createElement(c,(0,l.Z)({key:String(e)},t))}},79443:function(t,e,n){var l=(0,n(67294).createContext)(void 0);e.Z=l},44441:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return i},contentTitle:function(){return k},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var l=n(83117),r=n(80102),a=(n(67294),n(3905)),u=n(55064),d=n(58215),o=["components"],i={title:"Textarea",sidebar_label:"Textarea"},k=void 0,c={unversionedId:"components/forms/textarea",id:"components/forms/textarea",isDocsHomePage:!1,title:"Textarea",description:"\u591a\u884c\u8f93\u5165\u6846\u3002\u8be5\u7ec4\u4ef6\u662f\u539f\u751f\u7ec4\u4ef6\uff0c\u4f7f\u7528\u65f6\u8bf7\u6ce8\u610f\u76f8\u5173\u9650\u5236",source:"@site/docs/components/forms/textarea.md",sourceDirName:"components/forms",slug:"/components/forms/textarea",permalink:"/taro/docs/next/components/forms/textarea",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/components/forms/textarea.md",tags:[],version:"current",frontMatter:{title:"Textarea",sidebar_label:"Textarea"},sidebar:"components",previous:{title:"Switch",permalink:"/taro/docs/next/components/forms/switch"},next:{title:"Navigator",permalink:"/taro/docs/next/components/navig/navigator"}},p=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[],level:2},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[],level:2},{value:"TextareaProps",id:"textareaprops",children:[{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[],level:3},{value:"onFocusEventDetail",id:"onfocuseventdetail",children:[],level:3},{value:"onBlurEventDetail",id:"onblureventdetail",children:[],level:3},{value:"onLineChangeEventDetail",id:"onlinechangeeventdetail",children:[],level:3},{value:"onInputEventDetail",id:"oninputeventdetail",children:[],level:3},{value:"onConfirmEventDetail",id:"onconfirmeventdetail",children:[],level:3},{value:"onKeyboardHeightChangeEventDetail",id:"onkeyboardheightchangeeventdetail",children:[],level:3}],level:2},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6-1",children:[],level:2}],s={toc:p};function m(t){var e=t.components,n=(0,r.Z)(t,o);return(0,a.kt)("wrapper",(0,l.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u591a\u884c\u8f93\u5165\u6846\u3002\u8be5\u7ec4\u4ef6\u662f\u539f\u751f\u7ec4\u4ef6\uff0c\u4f7f\u7528\u65f6\u8bf7\u6ce8\u610f\u76f8\u5173\u9650\u5236"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/component/textarea.html"},"\u53c2\u8003\u6587\u6863"))),(0,a.kt)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"ComponentType<TextareaProps>\n")),(0,a.kt)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),(0,a.kt)(u.Z,{defaultValue:"React",values:[{label:"React",value:"React"},{label:"Vue",value:"Vue"}],mdxType:"Tabs"},(0,a.kt)(d.Z,{value:"React",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"export default class PageView extends Component {\n  constructor() {\n    super(...arguments)\n  }\n\n  render() {\n    return (\n      <View className='components-page'>\n        <Text>\u8f93\u5165\u533a\u57df\u9ad8\u5ea6\u81ea\u9002\u5e94\uff0c\u4e0d\u4f1a\u51fa\u73b0\u6eda\u52a8\u6761</Text>\n        <Textarea style='background:#fff;width:100%;min-height:80px;padding:0 30rpx;' autoHeight/>\n        <Text>\u8fd9\u662f\u4e00\u4e2a\u53ef\u4ee5\u81ea\u52a8\u805a\u7126\u7684 textarea</Text>\n        <Textarea style='background:#fff;width:100%;height:80px;padding:0 30rpx;' autoFocus/>\n      </View>\n    )\n  }\n}\n"))),(0,a.kt)(d.Z,{value:"Vue",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<template>\n  <view class="components-page">\n    <text>\u8f93\u5165\u533a\u57df\u9ad8\u5ea6\u81ea\u9002\u5e94\uff0c\u4e0d\u4f1a\u51fa\u73b0\u6eda\u52a8\u6761</text>\n    <textarea style="background:#efefef;width:100%;min-height:80px;padding:0 30rpx;" :auto-height="true" />\n    <text>\u8fd9\u662f\u4e00\u4e2a\u53ef\u4ee5\u81ea\u52a8\u805a\u7126\u7684 textarea</text>\n    <textarea style="background:#efefef;width:100%;height:80px;padding:0 30rpx;" :auto-focusd="true" />\n  </view>\n</template>\n')))),(0,a.kt)("h2",{id:"textareaprops"},"TextareaProps"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"\u53c2\u6570"),(0,a.kt)("th",null,"\u7c7b\u578b"),(0,a.kt)("th",{style:{textAlign:"center"}},"\u9ed8\u8ba4\u503c"),(0,a.kt)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),(0,a.kt)("th",null,"\u8bf4\u660e"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"value"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string")),(0,a.kt)("td",{style:{textAlign:"center"}}),(0,a.kt)("td",{style:{textAlign:"center"}},"\u662f"),(0,a.kt)("td",null,"\u8f93\u5165\u6846\u7684\u5185\u5bb9")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"placeholder"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string")),(0,a.kt)("td",{style:{textAlign:"center"}}),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u8f93\u5165\u6846\u4e3a\u7a7a\u65f6\u5360\u4f4d\u7b26")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"placeholderStyle"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string")),(0,a.kt)("td",{style:{textAlign:"center"}}),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u6307\u5b9a placeholder \u7684\u6837\u5f0f")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"placeholderClass"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,'"textarea-placeholder"')),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u6307\u5b9a placeholder \u7684\u6837\u5f0f\u7c7b")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"disabled"),(0,a.kt)("td",null,(0,a.kt)("code",null,"boolean")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"false")),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u662f\u5426\u7981\u7528")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"maxlength"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"140")),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u6700\u5927\u8f93\u5165\u957f\u5ea6\uff0c\u8bbe\u7f6e\u4e3a -1 \u7684\u65f6\u5019\u4e0d\u9650\u5236\u6700\u5927\u957f\u5ea6")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"autoFocus"),(0,a.kt)("td",null,(0,a.kt)("code",null,"boolean")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"false")),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u81ea\u52a8\u805a\u7126\uff0c\u62c9\u8d77\u952e\u76d8")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"focus"),(0,a.kt)("td",null,(0,a.kt)("code",null,"boolean")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"false")),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u83b7\u53d6\u7126\u70b9")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"autoHeight"),(0,a.kt)("td",null,(0,a.kt)("code",null,"boolean")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"false")),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u662f\u5426\u81ea\u52a8\u589e\u9ad8\uff0c\u8bbe\u7f6e autoHeight \u65f6\uff0cstyle.height\u4e0d\u751f\u6548")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"fixed"),(0,a.kt)("td",null,(0,a.kt)("code",null,"boolean")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"false")),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u5982\u679c Textarea \u662f\u5728\u4e00\u4e2a ",(0,a.kt)("code",null,"position:fixed")," \u7684\u533a\u57df\uff0c\u9700\u8981\u663e\u793a\u6307\u5b9a\u5c5e\u6027 fixed \u4e3a true")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"cursorSpacing"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"0")),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u6307\u5b9a\u5149\u6807\u4e0e\u952e\u76d8\u7684\u8ddd\u79bb\uff0c\u5355\u4f4d px \u3002\u53d6 Textarea \u8ddd\u79bb\u5e95\u90e8\u7684\u8ddd\u79bb\u548c cursorSpacing \u6307\u5b9a\u7684\u8ddd\u79bb\u7684\u6700\u5c0f\u503c\u4f5c\u4e3a\u5149\u6807\u4e0e\u952e\u76d8\u7684\u8ddd\u79bb")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"cursor"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"-1")),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u6307\u5b9a focus \u65f6\u7684\u5149\u6807\u4f4d\u7f6e")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"showConfirmBar"),(0,a.kt)("td",null,(0,a.kt)("code",null,"boolean")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"true")),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u662f\u5426\u663e\u793a\u952e\u76d8\u4e0a\u65b9\u5e26\u6709\u201d\u5b8c\u6210\u201c\u6309\u94ae\u90a3\u4e00\u680f")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"selectionStart"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"-1")),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u5149\u6807\u8d77\u59cb\u4f4d\u7f6e\uff0c\u81ea\u52a8\u805a\u96c6\u65f6\u6709\u6548\uff0c\u9700\u4e0e selectionEnd \u642d\u914d\u4f7f\u7528")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"selectionEnd"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"-1")),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u5149\u6807\u7ed3\u675f\u4f4d\u7f6e\uff0c\u81ea\u52a8\u805a\u96c6\u65f6\u6709\u6548\uff0c\u9700\u4e0e selectionStart \u642d\u914d\u4f7f\u7528")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"adjustPosition"),(0,a.kt)("td",null,(0,a.kt)("code",null,"boolean")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"true")),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u952e\u76d8\u5f39\u8d77\u65f6\uff0c\u662f\u5426\u81ea\u52a8\u4e0a\u63a8\u9875\u9762")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"holdKeyboard"),(0,a.kt)("td",null,(0,a.kt)("code",null,"boolean")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"false")),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"focus \u65f6\uff0c\u70b9\u51fb\u9875\u9762\u7684\u65f6\u5019\u4e0d\u6536\u8d77\u952e\u76d8")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"disableDefaultPadding"),(0,a.kt)("td",null,(0,a.kt)("code",null,"boolean")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"false")),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u662f\u5426\u53bb\u6389 iOS \u4e0b\u7684\u9ed8\u8ba4\u5185\u8fb9\u8ddd")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"onFocus"),(0,a.kt)("td",null,(0,a.kt)("code",null,"BaseEventOrigFunction<onFocusEventDetail>")),(0,a.kt)("td",{style:{textAlign:"center"}}),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u8f93\u5165\u6846\u805a\u7126\u65f6\u89e6\u53d1")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"onBlur"),(0,a.kt)("td",null,(0,a.kt)("code",null,"BaseEventOrigFunction<onBlurEventDetail>")),(0,a.kt)("td",{style:{textAlign:"center"}}),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u8f93\u5165\u6846\u5931\u53bb\u7126\u70b9\u65f6\u89e6\u53d1")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"onLineChange"),(0,a.kt)("td",null,(0,a.kt)("code",null,"BaseEventOrigFunction<onLineChangeEventDetail>")),(0,a.kt)("td",{style:{textAlign:"center"}}),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u8f93\u5165\u6846\u884c\u6570\u53d8\u5316\u65f6\u8c03\u7528\uff0cevent.detail = ","{height: 0, heightRpx: 0, lineCount: 0}")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"onInput"),(0,a.kt)("td",null,(0,a.kt)("code",null,"BaseEventOrigFunction<onInputEventDetail>")),(0,a.kt)("td",{style:{textAlign:"center"}}),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u5f53\u952e\u76d8\u8f93\u5165\u65f6\uff0c\u89e6\u53d1 input \u4e8b\u4ef6\uff0cevent.detail = ","{value, cursor, keyCode}",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("strong",null,"onInput \u5904\u7406\u51fd\u6570\u7684\u8fd4\u56de\u503c\u5e76\u4e0d\u4f1a\u53cd\u6620\u5230 textarea \u4e0a"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"onConfirm"),(0,a.kt)("td",null,(0,a.kt)("code",null,"BaseEventOrigFunction<onConfirmEventDetail>")),(0,a.kt)("td",{style:{textAlign:"center"}}),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u70b9\u51fb\u5b8c\u6210\u65f6\uff0c \u89e6\u53d1 confirm \u4e8b\u4ef6\uff0cevent.detail = ","{value: value}")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"onKeyboardHeightChange"),(0,a.kt)("td",null,(0,a.kt)("code",null,"BaseEventOrigFunction<onKeyboardHeightChangeEventDetail>")),(0,a.kt)("td",{style:{textAlign:"center"}}),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u952e\u76d8\u9ad8\u5ea6\u53d1\u751f\u53d8\u5316\u7684\u65f6\u5019\u89e6\u53d1\u6b64\u4e8b\u4ef6")))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"H5 \u5c5e\u6027")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"\u5c5e\u6027\u540d"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"nativeProps"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Object"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"{}")),(0,a.kt)("td",{parentName:"tr",align:"left"},"H5 \u72ec\u6709\uff0c\u7528\u4e8e\u900f\u4f20 ",(0,a.kt)("inlineCode",{parentName:"td"},"WebComponents")," \u4e0a\u7684\u5c5e\u6027\u5230\u5185\u90e8 H5 \u6807\u7b7e\u4e0a")))),(0,a.kt)("h3",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"API"),(0,a.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,a.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"TextareaProps.value"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"TextareaProps.placeholder"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"TextareaProps.placeholderStyle"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"TextareaProps.placeholderClass"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"TextareaProps.disabled"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"TextareaProps.maxlength"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"TextareaProps.autoFocus"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"TextareaProps.focus"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"TextareaProps.autoHeight"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"TextareaProps.fixed"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"TextareaProps.cursorSpacing"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"TextareaProps.cursor"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"TextareaProps.showConfirmBar"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"TextareaProps.selectionStart"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"TextareaProps.selectionEnd"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"TextareaProps.adjustPosition"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"TextareaProps.holdKeyboard"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"TextareaProps.disableDefaultPadding"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"TextareaProps.onFocus"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"TextareaProps.onBlur"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"TextareaProps.onLineChange"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"TextareaProps.onInput"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"TextareaProps.onConfirm"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"TextareaProps.onKeyboardHeightChange"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})))),(0,a.kt)("h3",{id:"onfocuseventdetail"},"onFocusEventDetail"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"\u53c2\u6570"),(0,a.kt)("th",null,"\u7c7b\u578b"),(0,a.kt)("th",null,"\u8bf4\u660e"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"value"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string")),(0,a.kt)("td",null,"\u8f93\u5165\u503c")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"height"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number")),(0,a.kt)("td",null,"\u952e\u76d8\u9ad8\u5ea6")))),(0,a.kt)("h3",{id:"onblureventdetail"},"onBlurEventDetail"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"\u53c2\u6570"),(0,a.kt)("th",null,"\u7c7b\u578b"),(0,a.kt)("th",null,"\u8bf4\u660e"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"value"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string")),(0,a.kt)("td",null,"\u8f93\u5165\u503c")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"cursor"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number")),(0,a.kt)("td",null,"\u5149\u6807\u4f4d\u7f6e")))),(0,a.kt)("h3",{id:"onlinechangeeventdetail"},"onLineChangeEventDetail"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"\u53c2\u6570"),(0,a.kt)("th",null,"\u7c7b\u578b"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"height"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"heightRpx"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"lineCount"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number"))))),(0,a.kt)("h3",{id:"oninputeventdetail"},"onInputEventDetail"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"\u53c2\u6570"),(0,a.kt)("th",null,"\u7c7b\u578b"),(0,a.kt)("th",null,"\u8bf4\u660e"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"value"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string")),(0,a.kt)("td",null,"\u8f93\u5165\u503c")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"cursor"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number")),(0,a.kt)("td",null,"\u5149\u6807\u4f4d\u7f6e")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"keyCode"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number")),(0,a.kt)("td",null,"\u952e\u503c")))),(0,a.kt)("h3",{id:"onconfirmeventdetail"},"onConfirmEventDetail"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"\u53c2\u6570"),(0,a.kt)("th",null,"\u7c7b\u578b"),(0,a.kt)("th",null,"\u8bf4\u660e"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"value"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string")),(0,a.kt)("td",null,"\u8f93\u5165\u503c")))),(0,a.kt)("h3",{id:"onkeyboardheightchangeeventdetail"},"onKeyboardHeightChangeEventDetail"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"\u53c2\u6570"),(0,a.kt)("th",null,"\u7c7b\u578b"),(0,a.kt)("th",null,"\u8bf4\u660e"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"height"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number")),(0,a.kt)("td",null,"\u952e\u76d8\u9ad8\u5ea6")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"duration"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number")),(0,a.kt)("td",null,"\u6301\u7eed\u65f6\u95f4")))),(0,a.kt)("h2",{id:"api-\u652f\u6301\u5ea6-1"},"API \u652f\u6301\u5ea6"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"API"),(0,a.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,a.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Textarea"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")))))}m.isMDXComponent=!0}}]);