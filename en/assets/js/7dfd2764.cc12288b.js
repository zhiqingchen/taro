(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[44307],{22122:function(t,e,n){"use strict";function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}n.d(e,{Z:function(){return r}})},19756:function(t,e,n){"use strict";function r(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}n.d(e,{Z:function(){return r}})},3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=r.createContext({}),d=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=d(t.components);return r.createElement(c.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,c=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),u=d(n),m=a,g=u["".concat(c,".").concat(m)]||u[m]||s[m]||l;return n?r.createElement(g,i(i({ref:e},p),{},{components:n})):r.createElement(g,i({ref:e},p))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var c in e)hasOwnProperty.call(e,c)&&(o[c]=e[c]);o.originalType=t,o.mdxType="string"==typeof t?t:a,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},58215:function(t,e,n){"use strict";var r=n(67294);e.Z=function(t){var e=t.children,n=t.hidden,a=t.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},e)}},41395:function(t,e,n){"use strict";n.d(e,{Z:function(){return p}});var r=n(67294),a=n(80944),l=n(86010),i="tabItem_1uMI",o="tabItemActive_2DSg";var c=37,d=39;var p=function(t){var e=t.lazy,n=t.block,p=t.defaultValue,s=t.values,u=t.groupId,m=t.className,g=(0,a.Z)(),k=g.tabGroupChoices,h=g.setTabGroupChoices,f=(0,r.useState)(p),y=f[0],N=f[1],b=r.Children.toArray(t.children),v=[];if(null!=u){var w=k[u];null!=w&&w!==y&&s.some((function(t){return t.value===w}))&&N(w)}var x=function(t){var e=t.currentTarget,n=v.indexOf(e),r=s[n].value;N(r),null!=u&&(h(u,r),setTimeout((function(){var t,n,r,a,l,i,c,d;(t=e.getBoundingClientRect(),n=t.top,r=t.left,a=t.bottom,l=t.right,i=window,c=i.innerHeight,d=i.innerWidth,n>=0&&l<=d&&a<=c&&r>=0)||(e.scrollIntoView({block:"center",behavior:"smooth"}),e.classList.add(o),setTimeout((function(){return e.classList.remove(o)}),2e3))}),150))},P=function(t){var e,n;switch(t.keyCode){case d:var r=v.indexOf(t.target)+1;n=v[r]||v[0];break;case c:var a=v.indexOf(t.target)-1;n=v[a]||v[v.length-1]}null==(e=n)||e.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},m)},s.map((function(t){var e=t.value,n=t.label;return r.createElement("li",{role:"tab",tabIndex:y===e?0:-1,"aria-selected":y===e,className:(0,l.Z)("tabs__item",i,{"tabs__item--active":y===e}),key:e,ref:function(t){return v.push(t)},onKeyDown:P,onFocus:x,onClick:x},n)}))),e?(0,r.cloneElement)(b.filter((function(t){return t.props.value===y}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},b.map((function(t,e){return(0,r.cloneElement)(t,{key:e,hidden:t.props.value!==y})}))))}},79443:function(t,e,n){"use strict";var r=(0,n(67294).createContext)(void 0);e.Z=r},80944:function(t,e,n){"use strict";var r=n(67294),a=n(79443);e.Z=function(){var t=(0,r.useContext)(a.Z);if(null==t)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return t}},81317:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return c},metadata:function(){return d},toc:function(){return p},default:function(){return u}});var r=n(22122),a=n(19756),l=(n(67294),n(3905)),i=n(41395),o=n(58215),c={title:"Image",sidebar_label:"Image"},d={unversionedId:"components/media/image",id:"version-3.x/components/media/image",isDocsHomePage:!1,title:"Image",description:"Image. This component supports JPG, PNG, and SVG images. Cloud file IDs are supported from 2.3.0 and later.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-3.x/components/media/image.md",sourceDirName:"components/media",slug:"/components/media/image",permalink:"/taro/en/docs/components/media/image",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.x/components/media/image.md",version:"3.x",sidebar_label:"Image",frontMatter:{title:"Image",sidebar_label:"Image"},sidebar:"version-3.x/components",previous:{title:"Audio",permalink:"/taro/en/docs/components/media/audio"},next:{title:"LivePlayer",permalink:"/taro/en/docs/components/media/live-player"}},p=[{value:"Type",id:"type",children:[]},{value:"Examples",id:"examples",children:[]},{value:"ImageProps",id:"imageprops",children:[{value:"Property Support",id:"property-support",children:[]},{value:"mode",id:"mode",children:[]}]},{value:"API Support",id:"api-support",children:[]}],s={toc:p};function u(t){var e=t.components,n=(0,a.Z)(t,["components"]);return(0,l.kt)("wrapper",(0,r.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Image. This component supports JPG, PNG, and SVG images. Cloud file IDs are supported from 2.3.0 and later."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Note:")," To implement the ",(0,l.kt)("inlineCode",{parentName:"p"},"mode")," feature of the mini program, a ",(0,l.kt)("inlineCode",{parentName:"p"},"div")," container is used in the H5 component to corp the display area of the internal ",(0,l.kt)("inlineCode",{parentName:"p"},"img"),", so please do not use the element selector to reset the style of the ",(0,l.kt)("inlineCode",{parentName:"p"},"img"),"! "),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/en/dev/component/image.html"},"Reference"))),(0,l.kt)("h2",{id:"type"},"Type"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"ComponentType<ImageProps>\n")),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)(i.Z,{defaultValue:"React",values:[{label:"React",value:"React"},{label:"Vue",value:"Vue"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"React",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"export default class PageView extends Component {\n  constructor() {\n    super(...arguments)\n  }\n\n  render() {\n    return (\n      <View className='components-page'>\n        <Image\n          style='width: 300px;height: 100px;background: #fff;'\n          src='nerv_logo.png'\n        />\n        <Image\n          style='width: 300px;height: 100px;background: #fff;'\n          src='https://camo.githubusercontent.com/3e1b76e514b895760055987f164ce6c95935a3aa/687474703a2f2f73746f726167652e333630627579696d672e636f6d2f6d74642f686f6d652f6c6f676f2d3278313531333833373932363730372e706e67'\n        />\n      </View>\n    )\n  }\n}\n"))),(0,l.kt)(o.Z,{value:"Vue",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<template>\n  <view class="components-page">\n    <image\n      style="width: 300px;height: 100px;background: #fff;"\n      src="nerv_logo.png"\n    />\n    <image\n      style="width: 300px;height: 100px;background: #fff;"\n      src="https://camo.githubusercontent.com/3e1b76e514b895760055987f164ce6c95935a3aa/687474703a2f2f73746f726167652e333630627579696d672e636f6d2f6d74642f686f6d652f6c6f676f2d3278313531333833373932363730372e706e67"\n    />\n  </view>\n</template>\n')))),(0,l.kt)("h2",{id:"imageprops"},"ImageProps"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Property"),(0,l.kt)("th",null,"Type"),(0,l.kt)("th",{style:{textAlign:"center"}},"Default"),(0,l.kt)("th",{style:{textAlign:"center"}},"Required"),(0,l.kt)("th",null,"Description"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"src"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",{style:{textAlign:"center"}}),(0,l.kt)("td",{style:{textAlign:"center"}},"Yes"),(0,l.kt)("td",null,"The image resource address")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"mode"),(0,l.kt)("td",null,(0,l.kt)("code",null,'"scaleToFill" | "aspectFit" | "aspectFill" | "widthFix" | "heightFix" | "top" | "bottom" | "center" | "left" | "right" | "top left" | "top right" | "bottom left" | "bottom right"')),(0,l.kt)("td",{style:{textAlign:"center"}},(0,l.kt)("code",null,'"scaleToFill"')),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"Specifies the clipping mode or the scale mode of an image")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"webp"),(0,l.kt)("td",null,(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",{style:{textAlign:"center"}},(0,l.kt)("code",null,"false")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"WebP format is not parsed by default, only web resources are supported.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"lazyLoad"),(0,l.kt)("td",null,(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",{style:{textAlign:"center"}},(0,l.kt)("code",null,"false")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"Enables lazy loading of images. An image is not loaded until it enters a specific range (within three consecutive screens).")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"showMenuByLongpress"),(0,l.kt)("td",null,(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",{style:{textAlign:"center"}},(0,l.kt)("code",null,"false")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"Enables the feature of displaying the Mini Program code menu when an image is tapped and held.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"onError"),(0,l.kt)("td",null,(0,l.kt)("code",null,"BaseEventOrigFunction<onErrorEventDetail>")),(0,l.kt)("td",{style:{textAlign:"center"}}),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"Triggered when an error occurs. event.detail = ","{errMsg}")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"onLoad"),(0,l.kt)("td",null,(0,l.kt)("code",null,"BaseEventOrigFunction<onLoadEventDetail>")),(0,l.kt)("td",{style:{textAlign:"center"}}),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"Triggered when an image is completely loaded. event.detail = ","{height, width}")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"imgProps"),(0,l.kt)("td",null,(0,l.kt)("code",null,"ImgHTMLAttributes<HTMLImageElement>")),(0,l.kt)("td",{style:{textAlign:"center"}}),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"Additional attributes for `img` tags")))),(0,l.kt)("h3",{id:"property-support"},"Property Support"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Property"),(0,l.kt)("th",{parentName:"tr",align:"center"},"WeChat Mini-Program"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Baidu Smart-Program"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Alipay Mini-Program"),(0,l.kt)("th",{parentName:"tr",align:"center"},"ByteDance Micro-App"),(0,l.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,l.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"ImageProps.src"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"ImageProps.mode"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f(Partial support scaleToFill, aspectFit, aspectFill, widthFix)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"ImageProps.webp"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"ImageProps.lazyLoad"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"ImageProps.showMenuByLongpress"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"ImageProps.onError"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"ImageProps.onLoad"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"ImageProps.imgProps"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"})))),(0,l.kt)("h3",{id:"mode"},"mode"),(0,l.kt)("p",null,"Valid values of mode"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Value"),(0,l.kt)("th",null,"Description"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"scaleToFill"),(0,l.kt)("td",null,"A scale mode, where the image is scaled without maintaining the aspect ratio to fully stretch to fill the screen with elements of the image.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"aspectFit"),(0,l.kt)("td",null,"A scale mode, where the image is scaled with the aspect ratio unchanged to fully display its longer edge. In this case, the image can be completely displayed.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"aspectFill"),(0,l.kt)("td",null,"A scale mode, where the image is scaled with the aspect ratio unchanged to fully display its shorter edge. In this case, the image is completely displayed in the horizontal or vertical direction, and it is truncated in the other direction.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"widthFix"),(0,l.kt)("td",null,"A scale mode, where the width of the image remains unchanged with the height adjusted automatically, and the aspect ratio of the original image is maintained.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"heightFix"),(0,l.kt)("td",null,"A scale mode, where the height of the image remains unchanged with the width adjusted automatically, and the aspect ratio of the original image is maintained.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"top"),(0,l.kt)("td",null,"A clipping mode, where only the upper area of the image is displayed without scaling.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"bottom"),(0,l.kt)("td",null,"A clipping mode, where only the lower area of the image is displayed without scaling.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"center"),(0,l.kt)("td",null,"A clipping mode, where only the central area of the image is displayed without scaling.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"left"),(0,l.kt)("td",null,"A clipping mode, where only the left area of the image is displayed without scaling.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"right"),(0,l.kt)("td",null,"A clipping mode, where only the right area of the image is displayed without scaling.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"top left"),(0,l.kt)("td",null,"A clipping mode, where only the upper left area of the image is displayed without scaling.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"top right"),(0,l.kt)("td",null,"A clipping mode, where only the upper right area of the image is displayed without scaling.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"bottom left"),(0,l.kt)("td",null,"A clipping mode, where only the lower left area of the image is displayed without scaling.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"bottom right"),(0,l.kt)("td",null,"A clipping mode, where only the lower right area of the image is displayed without scaling.")))),(0,l.kt)("h2",{id:"api-support"},"API Support"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"API"),(0,l.kt)("th",{parentName:"tr",align:"center"},"WeChat Mini-Program"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Baidu Smart-Program"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Alipay Mini-Program"),(0,l.kt)("th",{parentName:"tr",align:"center"},"ByteDance Micro-App"),(0,l.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,l.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"Image"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")))))}u.isMDXComponent=!0},86010:function(t,e,n){"use strict";function r(t){var e,n,a="";if("string"==typeof t||"number"==typeof t)a+=t;else if("object"==typeof t)if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=r(t[e]))&&(a&&(a+=" "),a+=n);else for(e in t)t[e]&&(a&&(a+=" "),a+=e);return a}function a(){for(var t,e,n=0,a="";n<arguments.length;)(t=arguments[n++])&&(e=r(t))&&(a&&(a+=" "),a+=e);return a}n.d(e,{Z:function(){return a}})}}]);