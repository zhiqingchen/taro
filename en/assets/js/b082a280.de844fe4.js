(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[16359],{22122:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,{Z:function(){return r}})},19756:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}n.d(t,{Z:function(){return r}})},3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,k=d["".concat(c,".").concat(m)]||d[m]||u[m]||l;return n?r.createElement(k,i(i({ref:t},p),{},{components:n})):r.createElement(k,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},58215:function(e,t,n){"use strict";var r=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},41395:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var r=n(67294),a=n(80944),l=n(86010),i="tabItem_1uMI",o="tabItemActive_2DSg";var c=37,s=39;var p=function(e){var t=e.lazy,n=e.block,p=e.defaultValue,u=e.values,d=e.groupId,m=e.className,k=(0,a.Z)(),f=k.tabGroupChoices,g=k.setTabGroupChoices,v=(0,r.useState)(p),h=v[0],x=v[1],y=r.Children.toArray(e.children),w=[];if(null!=d){var N=f[d];null!=N&&N!==h&&u.some((function(e){return e.value===N}))&&x(N)}var b=function(e){var t=e.currentTarget,n=w.indexOf(t),r=u[n].value;x(r),null!=d&&(g(d,r),setTimeout((function(){var e,n,r,a,l,i,c,s;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,l=e.right,i=window,c=i.innerHeight,s=i.innerWidth,n>=0&&l<=s&&a<=c&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(o),setTimeout((function(){return t.classList.remove(o)}),2e3))}),150))},V=function(e){var t,n;switch(e.keyCode){case s:var r=w.indexOf(e.target)+1;n=w[r]||w[0];break;case c:var a=w.indexOf(e.target)-1;n=w[a]||w[w.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},m)},u.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:h===t?0:-1,"aria-selected":h===t,className:(0,l.Z)("tabs__item",i,{"tabs__item--active":h===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:V,onFocus:b,onClick:b},n)}))),t?(0,r.cloneElement)(y.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==h})}))))}},79443:function(e,t,n){"use strict";var r=(0,n(67294).createContext)(void 0);t.Z=r},80944:function(e,t,n){"use strict";var r=n(67294),a=n(79443);t.Z=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},55793:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var r=n(22122),a=n(19756),l=(n(67294),n(3905)),i=n(41395),o=n(58215),c={title:"View",sidebar_label:"View"},s={unversionedId:"components/viewContainer/view",id:"version-3.x/components/viewContainer/view",isDocsHomePage:!1,title:"View",description:"View container.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-3.x/components/viewContainer/view.md",sourceDirName:"components/viewContainer",slug:"/components/viewContainer/view",permalink:"/taro/en/docs/components/viewContainer/view",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.x/components/viewContainer/view.md",version:"3.x",sidebar_label:"View",frontMatter:{title:"View",sidebar_label:"View"},sidebar:"version-3.x/components",previous:{title:"Description",permalink:"/taro/en/docs/components-desc"},next:{title:"ScrollView",permalink:"/taro/en/docs/components/viewContainer/scroll-view"}},p=[{value:"Type",id:"type",children:[]},{value:"Examples",id:"examples",children:[]},{value:"ViewProps",id:"viewprops",children:[{value:"Property Support",id:"property-support",children:[]}]},{value:"API Support",id:"api-support",children:[]}],u={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"View container."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/en/dev/component/view.html"},"Reference"))),(0,l.kt)("h2",{id:"type"},"Type"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"ComponentType<ViewProps>\n")),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)(i.Z,{defaultValue:"React",values:[{label:"React",value:"React"},{label:"Vue",value:"Vue"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"React",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"\nexport default class PageView extends Component {\n  constructor() {\n    super(...arguments)\n  }\n\n  render() {\n    return (\n      <View className='components-page'>\n        <Text>flex-direction: row</Text>\n        <View className='flex-wrp' style='flex-direction:row;'>\n          <View className='flex-item demo-text-1'/>\n          <View className='flex-item demo-text-2'/>\n          <View className='flex-item demo-text-3'/>\n        </View>\n        <Text>flex-direction: column</Text>\n        <View className='flex-wrp' style='flex-direction:column;'>\n          <View className='flex-item flex-item-V demo-text-1'/>\n          <View className='flex-item flex-item-V demo-text-2'/>\n          <View className='flex-item flex-item-V demo-text-3'/>\n        </View>\n      </View>\n    )\n  }\n}\n"))),(0,l.kt)(o.Z,{value:"Vue",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<template>\n  <view class="components-page">\n    <text>flex-direction: row</text>\n    <view class="flex-wrp flex-wrp-row" hover-class="hover" >\n      <view class="flex-item demo-text-1" :hover-stop-propagation="true" />\n      <view class="flex-item demo-text-2" hover-start-time="1000" hover-class="hover" />\n      <view class="flex-item demo-text-3" hover-stayTime="1000" hover-class="hover" />\n    </view>\n    <text>flex-direction: column</text>\n    <view class="flex-wrp flex-wrp-column">\n      <view class="flex-item flex-item-V demo-text-1" />\n      <view class="flex-item flex-item-V demo-text-2" />\n      <view class="flex-item flex-item-V demo-text-3" />\n    </view>\n  </view>\n</template>\n\n<style>\n.flex-wrp { display: flex; }\n.flex-wrp-column{ flex-direction: column; }\n.flex-wrp-row { flex-direction:row; padding: 20px; background: #f1f1f1; }\n.flex-item { width: 180px; height: 90px; }\n.demo-text-1 { background: #ccc; }\n.demo-text-2 { background: #999; }\n.demo-text-3 { background: #666; }\n.hover {\n  background: #000;\n}\n</style>\n')))),(0,l.kt)("h2",{id:"viewprops"},"ViewProps"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Property"),(0,l.kt)("th",null,"Type"),(0,l.kt)("th",{style:{textAlign:"center"}},"Default"),(0,l.kt)("th",{style:{textAlign:"center"}},"Required"),(0,l.kt)("th",null,"Description"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"hoverClass"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",{style:{textAlign:"center"}},(0,l.kt)("code",null,"none")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null," The style class of the button that is tapped. When ",(0,l.kt)("code",null,'hover-class="none"')," , the tap state is not displayed.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"hoverStyle"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",{style:{textAlign:"center"}},(0,l.kt)("code",null,"none")),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"Since RN does not support Class, the View component on the RN side implements the ",(0,l.kt)("code",null,"hoverStyle"),"property. ",(0,l.kt)("code",null,"hoverStyle")," is written similarly to style, except that it specifies the style to be pressed.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"hoverStopPropagation"),(0,l.kt)("td",null,(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",{style:{textAlign:"center"}},(0,l.kt)("code",null,"fasle")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"Specifies whether to block the tapped state from the ancestor node of this node.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"hoverStartTime"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number")),(0,l.kt)("td",{style:{textAlign:"center"}},(0,l.kt)("code",null,"50")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"Specifies the time elapsed after tapping but before the tapped state occurs. It is measured in milliseconds.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"hoverStayTime"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number")),(0,l.kt)("td",{style:{textAlign:"center"}},(0,l.kt)("code",null,"400")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"Specifies the duration when the tapped state retains after stopping tapping. It is measured in milliseconds.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"catchMove"),(0,l.kt)("td",null,(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",{style:{textAlign:"center"}},(0,l.kt)("code",null,"false")),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"Block scrolling events from penetrating.")))),(0,l.kt)("h3",{id:"property-support"},"Property Support"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Property"),(0,l.kt)("th",{parentName:"tr",align:"center"},"WeChat Mini-Program"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Baidu Smart-Program"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Alipay Mini-Program"),(0,l.kt)("th",{parentName:"tr",align:"center"},"ByteDance Micro-App"),(0,l.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,l.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"ViewProps.hoverClass"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"ViewProps.hoverStyle"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"ViewProps.hoverStopPropagation"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"ViewProps.hoverStartTime"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"ViewProps.hoverStayTime"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")))),(0,l.kt)("h2",{id:"api-support"},"API Support"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"API"),(0,l.kt)("th",{parentName:"tr",align:"center"},"WeChat Mini-Program"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Baidu Smart-Program"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Alipay Mini-Program"),(0,l.kt)("th",{parentName:"tr",align:"center"},"ByteDance Micro-App"),(0,l.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,l.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"View"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")))))}d.isMDXComponent=!0},86010:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})}}]);