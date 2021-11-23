"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[17066],{3905:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return p}});var r=n(67294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,r,l=function(t,e){if(null==t)return{};var n,r,l={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var c=r.createContext({}),i=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},d=function(t){var e=i(t.components);return r.createElement(c.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(t,e){var n=t.components,l=t.mdxType,a=t.originalType,c=t.parentName,d=u(t,["components","mdxType","originalType","parentName"]),k=i(n),p=l,m=k["".concat(c,".").concat(p)]||k[p]||s[p]||a;return n?r.createElement(m,o(o({ref:e},d),{},{components:n})):r.createElement(m,o({ref:e},d))}));function p(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var a=n.length,o=new Array(a);o[0]=k;var u={};for(var c in e)hasOwnProperty.call(e,c)&&(u[c]=e[c]);u.originalType=t,u.mdxType="string"==typeof t?t:l,o[1]=u;for(var i=2;i<a;i++)o[i]=n[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},58215:function(t,e,n){var r=n(67294);e.Z=function(t){var e=t.children,n=t.hidden,l=t.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:l},e)}},55064:function(t,e,n){n.d(e,{Z:function(){return k}});var r=n(83117),l=n(67294),a=n(72389),o=n(79443);var u=function(){var t=(0,l.useContext)(o.Z);if(null==t)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return t},c=n(83039),i=n(86010),d="tabItem_1uMI";function s(t){var e,n,r,a=t.lazy,o=t.block,s=t.defaultValue,k=t.values,p=t.groupId,m=t.className,v=l.Children.map(t.children,(function(t){if((0,l.isValidElement)(t)&&void 0!==t.props.value)return t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof t.type?t.type:t.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=k?k:v.map((function(t){var e=t.props;return{value:e.value,label:e.label}})),f=(0,c.lx)(g,(function(t,e){return t.value===e.value}));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((function(t){return t.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===s?s:null!=(e=null!=s?s:null==(n=v.find((function(t){return t.props.default})))?void 0:n.props.value)?e:null==(r=v[0])?void 0:r.props.value;if(null!==y&&!g.some((function(t){return t.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+g.map((function(t){return t.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var h=u(),b=h.tabGroupChoices,x=h.setTabGroupChoices,N=(0,l.useState)(y),A=N[0],E=N[1],w=[],O=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=p){var P=b[p];null!=P&&P!==A&&g.some((function(t){return t.value===P}))&&E(P)}var T=function(t){var e=t.currentTarget,n=w.indexOf(e),r=g[n].value;r!==A&&(O(e),E(r),null!=p&&x(p,r))},C=function(t){var e,n=null;switch(t.key){case"ArrowRight":var r=w.indexOf(t.currentTarget)+1;n=w[r]||w[0];break;case"ArrowLeft":var l=w.indexOf(t.currentTarget)-1;n=w[l]||w[w.length-1]}null==(e=n)||e.focus()};return l.createElement("div",{className:"tabs-container"},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":o},m)},g.map((function(t){var e=t.value,n=t.label;return l.createElement("li",{role:"tab",tabIndex:A===e?0:-1,"aria-selected":A===e,className:(0,i.Z)("tabs__item",d,{"tabs__item--active":A===e}),key:e,ref:function(t){return w.push(t)},onKeyDown:C,onFocus:T,onClick:T},null!=n?n:e)}))),a?(0,l.cloneElement)(v.filter((function(t){return t.props.value===A}))[0],{className:"margin-vert--md"}):l.createElement("div",{className:"margin-vert--md"},v.map((function(t,e){return(0,l.cloneElement)(t,{key:e,hidden:t.props.value!==A})}))))}function k(t){var e=(0,a.Z)();return l.createElement(s,(0,r.Z)({key:String(e)},t))}},79443:function(t,e,n){var r=(0,n(67294).createContext)(void 0);e.Z=r},52386:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return i},contentTitle:function(){return d},metadata:function(){return s},toc:function(){return k},default:function(){return m}});var r=n(83117),l=n(80102),a=(n(67294),n(3905)),o=n(55064),u=n(58215),c=["components"],i={title:"Ad",sidebar_label:"Ad"},d=void 0,s={unversionedId:"components/open/ad",id:"version-3.x/components/open/ad",isDocsHomePage:!1,title:"Ad",description:"Banner \u5e7f\u544a",source:"@site/versioned_docs/version-3.x/components/open/ad.md",sourceDirName:"components/open",slug:"/components/open/ad",permalink:"/taro/docs/components/open/ad",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.x/components/open/ad.md",tags:[],version:"3.x",frontMatter:{title:"Ad",sidebar_label:"Ad"},sidebar:"version-3.x/components",previous:{title:"Canvas",permalink:"/taro/docs/components/canvas/canvas"},next:{title:"OfficialAccount",permalink:"/taro/docs/components/open/official-account"}},k=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[],level:2},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[],level:2},{value:"AdProps",id:"adprops",children:[{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[],level:3},{value:"onErrorEventDetail",id:"onerroreventdetail",children:[],level:3},{value:"AdErrCode",id:"aderrcode",children:[],level:3}],level:2},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6-1",children:[],level:2}],p={toc:k};function m(t){var e=t.components,n=(0,l.Z)(t,c);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Banner \u5e7f\u544a"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/component/ad.html"},"\u53c2\u8003\u6587\u6863"))),(0,a.kt)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"ComponentType<AdProps>\n")),(0,a.kt)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),(0,a.kt)(o.Z,{defaultValue:"React",values:[{label:"React",value:"React"},{label:"Vue",value:"Vue"}],mdxType:"Tabs"},(0,a.kt)(u.Z,{value:"React",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"class App extends Component {\n  render () {\n    return (\n      <Ad\n        unitId=''\n        adIntervals={60}\n        onLoad={() => console.log('ad onLoad')}\n        onError={() => console.log('ad onError')}\n        onClose={() => console.log('ad onClose')}\n      />\n    )\n  }\n}\n"))),(0,a.kt)(u.Z,{value:"Vue",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<template>\n  <ad\n    unit-id=""\n    ad-intervals="60"\n    @load="onLoad"\n    @error="onError"\n    @close="onClose"\n  />\n</template>\n')))),(0,a.kt)("h2",{id:"adprops"},"AdProps"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"\u53c2\u6570"),(0,a.kt)("th",null,"\u7c7b\u578b"),(0,a.kt)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),(0,a.kt)("th",null,"\u8bf4\u660e"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"unitId"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string")),(0,a.kt)("td",{style:{textAlign:"center"}},"\u662f"),(0,a.kt)("td",null,"\u5e7f\u544a\u5355\u5143id\uff0c\u53ef\u5728",(0,a.kt)("a",{href:"https://mp.weixin.qq.com/"},"\u5c0f\u7a0b\u5e8f\u7ba1\u7406\u540e\u53f0"),"\u7684\u6d41\u91cf\u4e3b\u6a21\u5757\u65b0\u5efa")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"adIntervals"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number")),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u5e7f\u544a\u81ea\u52a8\u5237\u65b0\u7684\u95f4\u9694\u65f6\u95f4\uff0c\u5355\u4f4d\u4e3a\u79d2\uff0c\u53c2\u6570\u503c\u5fc5\u987b\u5927\u4e8e\u7b49\u4e8e30\uff08\u8be5\u53c2\u6570\u4e0d\u4f20\u5165\u65f6 Banner \u5e7f\u544a\u4e0d\u4f1a\u81ea\u52a8\u5237\u65b0\uff09")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"onLoad"),(0,a.kt)("td",null,(0,a.kt)("code",null,"BaseEventOrigFunction<any>")),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u5e7f\u544a\u52a0\u8f7d\u6210\u529f\u7684\u56de\u8c03")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"onError"),(0,a.kt)("td",null,(0,a.kt)("code",null,"BaseEventOrigFunction<onErrorEventDetail>")),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u5f53\u5e7f\u544a\u53d1\u751f\u9519\u8bef\u65f6\uff0c\u89e6\u53d1\u7684\u4e8b\u4ef6\uff0c\u53ef\u4ee5\u901a\u8fc7\u8be5\u4e8b\u4ef6\u83b7\u53d6\u9519\u8bef\u7801\u53ca\u539f\u56e0\uff0c\u4e8b\u4ef6\u5bf9\u8c61event.detail = ","{errCode: 1002}")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"onClose"),(0,a.kt)("td",null,(0,a.kt)("code",null,"BaseEventOrigFunction<any>")),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u5e7f\u544a\u5173\u95ed\u7684\u56de\u8c03")))),(0,a.kt)("h3",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"API"),(0,a.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,a.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"AdProps.unitId"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"AdProps.adIntervals"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"AdProps.onLoad"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"AdProps.onError"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"AdProps.onClose"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})))),(0,a.kt)("h3",{id:"onerroreventdetail"},"onErrorEventDetail"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"\u53c2\u6570"),(0,a.kt)("th",null,"\u7c7b\u578b"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"errCode"),(0,a.kt)("td",null,(0,a.kt)("code",null,"1000 | 1001 | 1002 | 1003 | 1004 | 1005 | 1006 | 1007 | 1008"))))),(0,a.kt)("h3",{id:"aderrcode"},"AdErrCode"),(0,a.kt)("p",null,"\u5e7f\u544a\u9519\u8bef\u7801"),(0,a.kt)("p",null,"\u9519\u8bef\u7801\u662f\u901a\u8fc7onError\u83b7\u53d6\u5230\u7684\u9519\u8bef\u4fe1\u606f\u3002\u8c03\u8bd5\u671f\u95f4\uff0c\u53ef\u4ee5\u901a\u8fc7\u5f02\u5e38\u8fd4\u56de\u6765\u6355\u83b7\u4fe1\u606f\u3002\n\u5728\u5c0f\u7a0b\u5e8f\u53d1\u5e03\u4e0a\u7ebf\u4e4b\u540e\uff0c\u5982\u679c\u9047\u5230\u5f02\u5e38\u95ee\u9898\uff0c\u53ef\u4ee5\u5728",(0,a.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/"},"\u201c\u8fd0\u7ef4\u4e2d\u5fc3\u201c"),"\u91cc\u9762\u641c\u5bfb\u9519\u8bef\u65e5\u5fd7\uff0c\u8fd8\u53ef\u4ee5\u9488\u5bf9\u5f02\u5e38\u8fd4\u56de\u52a0\u4e0a\u9002\u5f53\u7684\u76d1\u63a7\u4fe1\u606f\u3002"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"\u53c2\u6570"),(0,a.kt)("th",{style:{textAlign:"center"}},"\u5f02\u5e38\u60c5\u51b5"),(0,a.kt)("th",{style:{textAlign:"center"}},"\u7406\u7531"),(0,a.kt)("th",{style:{textAlign:"center"}},"\u89e3\u51b3\u65b9\u6848"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"1000"),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"\u540e\u7aef\u9519\u8bef\u8c03\u7528\u5931\u8d25")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"\u8be5\u9879\u9519\u8bef\u4e0d\u662f\u5f00\u53d1\u8005\u7684\u5f02\u5e38\u60c5\u51b5")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"\u4e00\u822c\u60c5\u51b5\u4e0b\u5ffd\u7565\u4e00\u6bb5\u65f6\u95f4\u5373\u53ef\u6062\u590d\u3002"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"1001"),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"\u53c2\u6570\u9519\u8bef")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"\u4f7f\u7528\u65b9\u6cd5\u9519\u8bef")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"\u53ef\u4ee5\u524d\u5f80 developers.weixin.qq.com \u786e\u8ba4\u5177\u4f53\u6559\u7a0b\uff08\u5c0f\u7a0b\u5e8f\u548c\u5c0f\u6e38\u620f\u5206\u522b\u6709\u5404\u81ea\u7684\u6559\u7a0b\uff0c\u53ef\u4ee5\u5728\u9876\u90e8\u9009\u9879\u4e2d\uff0c\u201c\u8bbe\u8ba1\u201d\u4e00\u680f\u7684\u53f3\u4fa7\u8fdb\u884c\u5207\u6362\u3002"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"1002"),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"\u5e7f\u544a\u5355\u5143\u65e0\u6548")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"\u53ef\u80fd\u662f\u62fc\u5199\u9519\u8bef\u3001\u6216\u8005\u8bef\u7528\u4e86\u5176\u4ed6APP\u7684\u5e7f\u544aID")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"\u8bf7\u91cd\u65b0\u524d\u5f80 mp.weixin.qq.com \u786e\u8ba4\u5e7f\u544a\u4f4dID\u3002"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"1003"),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"\u5185\u90e8\u9519\u8bef")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"\u8be5\u9879\u9519\u8bef\u4e0d\u662f\u5f00\u53d1\u8005\u7684\u5f02\u5e38\u60c5\u51b5")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"\u4e00\u822c\u60c5\u51b5\u4e0b\u5ffd\u7565\u4e00\u6bb5\u65f6\u95f4\u5373\u53ef\u6062\u590d\u3002"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"1004"),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"\u65e0\u5408\u9002\u7684\u5e7f\u544a")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"\u5e7f\u544a\u4e0d\u662f\u6bcf\u4e00\u6b21\u90fd\u4f1a\u51fa\u73b0\uff0c\u8fd9\u6b21\u6ca1\u6709\u51fa\u73b0\u53ef\u80fd\u662f\u7531\u4e8e\u8be5\u7528\u6237\u4e0d\u9002\u5408\u6d4f\u89c8\u5e7f\u544a")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"\u5c5e\u4e8e\u6b63\u5e38\u60c5\u51b5\uff0c\u4e14\u5f00\u53d1\u8005\u9700\u8981\u9488\u5bf9\u8fd9\u79cd\u60c5\u51b5\u505a\u5f62\u6001\u4e0a\u7684\u517c\u5bb9\u3002"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"1005"),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"\u5e7f\u544a\u7ec4\u4ef6\u5ba1\u6838\u4e2d")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"\u4f60\u7684\u5e7f\u544a\u6b63\u5728\u88ab\u5ba1\u6838\uff0c\u65e0\u6cd5\u5c55\u73b0\u5e7f\u544a")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"\u8bf7\u524d\u5f80 mp.weixin.qq.com \u786e\u8ba4\u5ba1\u6838\u72b6\u6001\uff0c\u4e14\u5f00\u53d1\u8005\u9700\u8981\u9488\u5bf9\u8fd9\u79cd\u60c5\u51b5\u505a\u5f62\u6001\u4e0a\u7684\u517c\u5bb9\u3002"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"1006"),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"\u5e7f\u544a\u7ec4\u4ef6\u88ab\u9a73\u56de")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"\u4f60\u7684\u5e7f\u544a\u5ba1\u6838\u5931\u8d25\uff0c\u65e0\u6cd5\u5c55\u73b0\u5e7f\u544a")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"\u8bf7\u524d\u5f80 mp.weixin.qq.com \u786e\u8ba4\u5ba1\u6838\u72b6\u6001\uff0c\u4e14\u5f00\u53d1\u8005\u9700\u8981\u9488\u5bf9\u8fd9\u79cd\u60c5\u51b5\u505a\u5f62\u6001\u4e0a\u7684\u517c\u5bb9\u3002"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"1007"),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"\u5e7f\u544a\u7ec4\u4ef6\u88ab\u5c01\u7981")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"\u4f60\u7684\u5e7f\u544a\u80fd\u529b\u5df2\u7ecf\u88ab\u5c01\u7981\uff0c\u5c01\u7981\u671f\u95f4\u65e0\u6cd5\u5c55\u73b0\u5e7f\u544a")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"\u8bf7\u524d\u5f80 mp.weixin.qq.com \u786e\u8ba4\u5c0f\u7a0b\u5e8f\u5e7f\u544a\u5c01\u7981\u72b6\u6001\u3002"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"1008"),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"\u5e7f\u544a\u5355\u5143\u5df2\u5173\u95ed")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"\u8be5\u5e7f\u544a\u4f4d\u7684\u5e7f\u544a\u80fd\u529b\u5df2\u7ecf\u88ab\u5173\u95ed")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"\u8bf7\u524d\u5f80 mp.weixin.qq.com \u91cd\u65b0\u6253\u5f00\u5bf9\u5e94\u5e7f\u544a\u4f4d\u7684\u5c55\u73b0\u3002"))))),(0,a.kt)("h2",{id:"api-\u652f\u6301\u5ea6-1"},"API \u652f\u6301\u5ea6"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"API"),(0,a.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,a.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Ad"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})))))}m.isMDXComponent=!0}}]);