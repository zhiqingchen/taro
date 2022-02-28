"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[49109],{3905:function(t,e,n){n.d(e,{Zo:function(){return k},kt:function(){return p}});var l=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,l,r=function(t,e){if(null==t)return{};var n,l,r={},a=Object.keys(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var u=l.createContext({}),d=function(t){var e=l.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},k=function(t){var e=d(t.components);return l.createElement(u.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},s=l.forwardRef((function(t,e){var n=t.components,r=t.mdxType,a=t.originalType,u=t.parentName,k=o(t,["components","mdxType","originalType","parentName"]),s=d(n),p=r,m=s["".concat(u,".").concat(p)]||s[p]||c[p]||a;return n?l.createElement(m,i(i({ref:e},k),{},{components:n})):l.createElement(m,i({ref:e},k))}));function p(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=n.length,i=new Array(a);i[0]=s;var o={};for(var u in e)hasOwnProperty.call(e,u)&&(o[u]=e[u]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var d=2;d<a;d++)i[d]=n[d];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}s.displayName="MDXCreateElement"},58215:function(t,e,n){var l=n(67294);e.Z=function(t){var e=t.children,n=t.hidden,r=t.className;return l.createElement("div",{role:"tabpanel",hidden:n,className:r},e)}},9877:function(t,e,n){n.d(e,{Z:function(){return k}});var l=n(83117),r=n(67294),a=n(72389),i=n(24726),o=n(86010),u="tabItem_LplD";function d(t){var e,n,a,d=t.lazy,k=t.block,c=t.defaultValue,s=t.values,p=t.groupId,m=t.className,g=r.Children.map(t.children,(function(t){if((0,r.isValidElement)(t)&&void 0!==t.props.value)return t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof t.type?t.type:t.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=s?s:g.map((function(t){var e=t.props;return{value:e.value,label:e.label,attributes:e.attributes}})),N=(0,i.lx)(h,(function(t,e){return t.value===e.value}));if(N.length>0)throw new Error('Docusaurus error: Duplicate values "'+N.map((function(t){return t.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===c?c:null!=(e=null!=c?c:null==(n=g.find((function(t){return t.props.default})))?void 0:n.props.value)?e:null==(a=g[0])?void 0:a.props.value;if(null!==v&&!h.some((function(t){return t.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+h.map((function(t){return t.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,i.UB)(),b=y.tabGroupChoices,f=y.setTabGroupChoices,P=(0,r.useState)(v),x=P[0],A=P[1],T=[],w=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=p){var E=b[p];null!=E&&E!==x&&h.some((function(t){return t.value===E}))&&A(E)}var L=function(t){var e=t.currentTarget,n=T.indexOf(e),l=h[n].value;l!==x&&(w(e),A(l),null!=p&&f(p,l))},D=function(t){var e,n=null;switch(t.key){case"ArrowRight":var l=T.indexOf(t.currentTarget)+1;n=T[l]||T[0];break;case"ArrowLeft":var r=T.indexOf(t.currentTarget)-1;n=T[r]||T[T.length-1]}null==(e=n)||e.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":k},m)},h.map((function(t){var e=t.value,n=t.label,a=t.attributes;return r.createElement("li",(0,l.Z)({role:"tab",tabIndex:x===e?0:-1,"aria-selected":x===e,key:e,ref:function(t){return T.push(t)},onKeyDown:D,onFocus:L,onClick:L},a,{className:(0,o.Z)("tabs__item",u,null==a?void 0:a.className,{"tabs__item--active":x===e})}),null!=n?n:e)}))),d?(0,r.cloneElement)(g.filter((function(t){return t.props.value===x}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},g.map((function(t,e){return(0,r.cloneElement)(t,{key:e,hidden:t.props.value!==x})}))))}function k(t){var e=(0,a.Z)();return r.createElement(d,(0,l.Z)({key:String(e)},t))}},87331:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return d},contentTitle:function(){return k},metadata:function(){return c},toc:function(){return s},default:function(){return m}});var l=n(83117),r=n(80102),a=(n(67294),n(3905)),i=n(9877),o=n(58215),u=["components"],d={title:"LivePusher",sidebar_label:"LivePusher"},k=void 0,c={unversionedId:"components/media/live-pusher",id:"version-3.x/components/media/live-pusher",title:"LivePusher",description:"Real-time audio/video recording. User Authorization is required for scope.camera and scope.record.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-3.x/components/media/live-pusher.md",sourceDirName:"components/media",slug:"/components/media/live-pusher",permalink:"/taro/en/docs/components/media/live-pusher",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.x/components/media/live-pusher.md",tags:[],version:"3.x",frontMatter:{title:"LivePusher",sidebar_label:"LivePusher"},sidebar:"components",previous:{title:"LivePlayer",permalink:"/taro/en/docs/components/media/live-player"},next:{title:"Video",permalink:"/taro/en/docs/components/media/video"}},s=[{value:"Type",id:"type",children:[],level:2},{value:"Examples",id:"examples",children:[],level:2},{value:"LivePusherProps",id:"livepusherprops",children:[{value:"Property Support",id:"property-support",children:[],level:3},{value:"orientation",id:"orientation",children:[],level:3},{value:"localMirror",id:"localmirror",children:[],level:3},{value:"audioReverbType",id:"audioreverbtype",children:[],level:3},{value:"audioVolumeType",id:"audiovolumetype",children:[],level:3},{value:"onStateChangeEventDetail",id:"onstatechangeeventdetail",children:[],level:3},{value:"onNetstatusEventDetail",id:"onnetstatuseventdetail",children:[],level:3},{value:"onErrorEventDetail",id:"onerroreventdetail",children:[],level:3},{value:"onBgmProgressEventDetail",id:"onbgmprogresseventdetail",children:[],level:3}],level:2},{value:"API Support",id:"api-support",children:[],level:2}],p={toc:s};function m(t){var e=t.components,n=(0,r.Z)(t,u);return(0,a.kt)("wrapper",(0,l.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Real-time audio/video recording. User Authorization is required for ",(0,a.kt)("inlineCode",{parentName:"p"},"scope.camera")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"scope.record"),"."),(0,a.kt)("p",null,"Currently, it is open only to Mini Programs in the following categories owned by Chinese entities. The component needs to pass the category review, and then on the Mini Program Console, you can activate the permissions for this component by choosing ",(0,a.kt)("strong",{parentName:"p"},"Development > API Settings"),"."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/en/dev/component/live-pusher.html"},"Reference"))),(0,a.kt)("h2",{id:"type"},"Type"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"ComponentType<LivePusherProps>\n")),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)(i.Z,{defaultValue:"React",values:[{label:"React",value:"React"},{label:"Vue",value:"Vue"}],mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"React",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"class App extends Components {\n  render () {\n    return (\n      <LivePusher url='url' mode='RTC' autopush  />\n    )\n  }\n}\n"))),(0,a.kt)(o.Z,{value:"Vue",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<template>\n  <live-pusher url="url" mode="RTC" :autopush="true"  />\n</template>\n')))),(0,a.kt)("h2",{id:"livepusherprops"},"LivePusherProps"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Property"),(0,a.kt)("th",null,"Type"),(0,a.kt)("th",{style:{textAlign:"center"}},"Default"),(0,a.kt)("th",{style:{textAlign:"center"}},"Required"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"url"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string")),(0,a.kt)("td",{style:{textAlign:"center"}}),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"The stream pushing address. Only `flv` and `rtmp` formats are supported. ")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"mode"),(0,a.kt)("td",null,(0,a.kt)("code",null,'"SD" | "HD" | "FHD" | "RTC"')),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,'"RTC"')),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"Values include ",(0,a.kt)("code",null,"SD")," (Standard definition), ",(0,a.kt)("code",null,"HD")," (High definition), ",(0,a.kt)("code",null,"FHD")," (Full high definition), and ",(0,a.kt)("code",null,"RTC")," (Real-time call).")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"autopush"),(0,a.kt)("td",null,(0,a.kt)("code",null,"boolean")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"false")),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"Auto stream pushing.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"muted"),(0,a.kt)("td",null,(0,a.kt)("code",null,"boolean")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"false")),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"Specifies whether to mute the component.",(0,a.kt)("br",null),(0,a.kt)("strong",null,"Not recommend"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"enableCamera"),(0,a.kt)("td",null,(0,a.kt)("code",null,"boolean")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"true")),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"Enables the camera.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"autoFocus"),(0,a.kt)("td",null,(0,a.kt)("code",null,"boolean")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"true")),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"Auto focusing.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"orientation"),(0,a.kt)("td",null,(0,a.kt)("code",null,'"vertical" | "horizontal"')),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,'"vertical"')),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"The orientation of the image.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"beauty"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"0")),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"Beautifying. Values range from 0 to 9. 0 indicates disabled.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"whiteness"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"0")),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"Whitening. Values range from 0 to 9. 0 indicates disabled.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"aspect"),(0,a.kt)("td",null,(0,a.kt)("code",null,'"9:16" | "3:4"')),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,'"9:16"')),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"The aspect ratio. Available values include ",(0,a.kt)("code",null,"3:4")," and ",(0,a.kt)("code",null,"9:16"),".")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"minBitrate"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"200")),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"The minimum bitrate.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"maxBitrate"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"1000")),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"The maximum bitrate.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"audioQuality"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,'"high"')),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,'High quality (48KHz) or low quality (16KHz). Values include "high" and "low".')),(0,a.kt)("tr",null,(0,a.kt)("td",null,"waitingImage"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string")),(0,a.kt)("td",{style:{textAlign:"center"}}),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"The waiting image for stream pushing when the component enters the background.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"waitingImageHash"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string")),(0,a.kt)("td",{style:{textAlign:"center"}}),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"The MD5 value of resources on the waiting image.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"zoom"),(0,a.kt)("td",null,(0,a.kt)("code",null,"boolean")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"false")),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"Adjusts the focal length.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"devicePosition"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,'"front"')),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"Front or back. Values include ",(0,a.kt)("code",null,"front")," and ",(0,a.kt)("code",null,"back"),". ")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"backgroundMute"),(0,a.kt)("td",null,(0,a.kt)("code",null,"boolean")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"false")),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"Specifies whether to mute the component after the component enters the background.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"mirror"),(0,a.kt)("td",null,(0,a.kt)("code",null,"boolean")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"false")),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"Specifies whether to mirror the stream pushing image. The effects are reflected in live-player.",(0,a.kt)("br",null),(0,a.kt)("strong",null,"Not recommended."))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"remoteMirror"),(0,a.kt)("td",null,(0,a.kt)("code",null,"boolean")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"false")),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"Specifies whether to mirror the  pushstream screen. ",(0,a.kt)("br",null),(0,a.kt)("strong",null,"Note:")," Same as attribute mirror, Plan to dispose of mirror")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"localMirror"),(0,a.kt)("td",null,(0,a.kt)("code",null,'"auto" | "enable" | "disable"')),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,'"auto"')),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"Specifies whether to mirror the local preview image.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"audioReverbType"),(0,a.kt)("td",null,(0,a.kt)("code",null,"0 | 1 | 2 | 3 | 4 | 5 | 6 | 7")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"0")),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"Audio reverberation types.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"enableMic"),(0,a.kt)("td",null,(0,a.kt)("code",null,"boolean")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"true")),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"Turning the microphone on or off")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"enableAgc"),(0,a.kt)("td",null,(0,a.kt)("code",null,"boolean")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"false")),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"Specifies whether to turn on audio auto gain.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"enableAns"),(0,a.kt)("td",null,(0,a.kt)("code",null,"boolean")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"false")),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"Specifies whether to turn on audio noise suppression")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"audioVolumeType"),(0,a.kt)("td",null,(0,a.kt)("code",null,'"media" | "voicecall"')),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,'"voicecall"')),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"Volume type")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"videoWidth"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"360")),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"The resolution width of the video stream pushed up")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"videoHeight"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"640")),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"The resolution height of the video stream pushed up")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"onStateChange"),(0,a.kt)("td",null,(0,a.kt)("code",null,"BaseEventOrigFunction<onStateChangeEventDetail>")),(0,a.kt)("td",{style:{textAlign:"center"}}),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"The status change event. detail = ","{code}")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"onNetstatus"),(0,a.kt)("td",null,(0,a.kt)("code",null,"BaseEventOrigFunction<onNetstatusEventDetail>")),(0,a.kt)("td",{style:{textAlign:"center"}}),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"The notification of the network status. detail = ","{info}")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"onError"),(0,a.kt)("td",null,(0,a.kt)("code",null,"BaseEventOrigFunction<onErrorEventDetail>")),(0,a.kt)("td",{style:{textAlign:"center"}}),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"The rendering error event. detail = ","{errMsg, errCode}")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"onBgmStart"),(0,a.kt)("td",null,(0,a.kt)("code",null,"BaseEventOrigFunction<any>")),(0,a.kt)("td",{style:{textAlign:"center"}}),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"Triggered when the background music starts playing.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"onBgmProgress"),(0,a.kt)("td",null,(0,a.kt)("code",null,"BaseEventOrigFunction<onBgmProgressEventDetail>")),(0,a.kt)("td",{style:{textAlign:"center"}}),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"Triggered when the progress of the background music changes. detail = ","{progress, duration}")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"onBgmComplete"),(0,a.kt)("td",null,(0,a.kt)("code",null,"BaseEventOrigFunction<any>")),(0,a.kt)("td",{style:{textAlign:"center"}}),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"Triggered when the background music stops playing.")))),(0,a.kt)("h3",{id:"property-support"},"Property Support"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"API"),(0,a.kt)("th",{parentName:"tr",align:"center"},"WeChat Mini-Program"),(0,a.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,a.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"LivePusherProps.url"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"LivePusherProps.mode"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"LivePusherProps.autopush"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"LivePusherProps.muted"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"LivePusherProps.enableCamera"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"LivePusherProps.autoFocus"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"LivePusherProps.orientation"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"LivePusherProps.beauty"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"LivePusherProps.whiteness"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"LivePusherProps.aspect"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"LivePusherProps.minBitrate"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"LivePusherProps.maxBitrate"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"LivePusherProps.audioQuality"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"LivePusherProps.waitingImage"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"LivePusherProps.waitingImageHash"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"LivePusherProps.zoom"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"LivePusherProps.devicePosition"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"LivePusherProps.backgroundMute"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"LivePusherProps.mirror"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"LivePusherProps.remoteMirror"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"LivePusherProps.localMirror"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"LivePusherProps.audioReverbType"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"LivePusherProps.enableMic"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"LivePusherProps.enableAgc"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"LivePusherProps.enableAns"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"LivePusherProps.audioVolumeType"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"LivePusherProps.videoWidth"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"LivePusherProps.videoHeight"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"LivePusherProps.onStateChange"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"LivePusherProps.onNetstatus"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"LivePusherProps.onError"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"LivePusherProps.onBgmStart"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"LivePusherProps.onBgmProgress"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"LivePusherProps.onBgmComplete"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})))),(0,a.kt)("h3",{id:"orientation"},"orientation"),(0,a.kt)("p",null,"Valid values of orientation"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Value"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"vertical"),(0,a.kt)("td",null,"Vertical")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"horizontal"),(0,a.kt)("td",null,"Horizontal")))),(0,a.kt)("h3",{id:"localmirror"},"localMirror"),(0,a.kt)("p",null,"Valid values of localMirror"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Value"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"auto"),(0,a.kt)("td",null,"Front camera mirroring, rear camera not mirroring")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"enable"),(0,a.kt)("td",null,"Both front and rear cameras mirrored")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"disable"),(0,a.kt)("td",null,"Neither the front nor the rear camera is mirrored")))),(0,a.kt)("h3",{id:"audioreverbtype"},"audioReverbType"),(0,a.kt)("p",null,"Valid values of audioReverbType"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Value"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"0"),(0,a.kt)("td",null,"Off")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"1"),(0,a.kt)("td",null,"KTV")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"2"),(0,a.kt)("td",null,"Small room")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"3"),(0,a.kt)("td",null,"Assembly Hall")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"4"),(0,a.kt)("td",null,"The muffled")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"5"),(0,a.kt)("td",null,"Loud and clear")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"6"),(0,a.kt)("td",null,"Metallic sound")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"7"),(0,a.kt)("td",null,"Magnetic")))),(0,a.kt)("h3",{id:"audiovolumetype"},"audioVolumeType"),(0,a.kt)("p",null,"Valid values of audioVolumeType"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Value"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"media"),(0,a.kt)("td",null,"Media volume")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"voicecall"),(0,a.kt)("td",null,"Call volume")))),(0,a.kt)("h3",{id:"onstatechangeeventdetail"},"onStateChangeEventDetail"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Param"),(0,a.kt)("th",null,"Type"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"code"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number")),(0,a.kt)("td",null,"Status Code")))),(0,a.kt)("h3",{id:"onnetstatuseventdetail"},"onNetstatusEventDetail"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Param"),(0,a.kt)("th",null,"Type"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"info"),(0,a.kt)("td",null,(0,a.kt)("code",null,"netStatus")),(0,a.kt)("td",null,"Network Status")))),(0,a.kt)("h3",{id:"onerroreventdetail"},"onErrorEventDetail"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Param"),(0,a.kt)("th",null,"Type"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"errMsg"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string")),(0,a.kt)("td",null,"Error message")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"errCode"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string | number")),(0,a.kt)("td",null,"Error code")))),(0,a.kt)("h3",{id:"onbgmprogresseventdetail"},"onBgmProgressEventDetail"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Param"),(0,a.kt)("th",null,"Type"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"progress"),(0,a.kt)("td",null,(0,a.kt)("code",null,"any")),(0,a.kt)("td",null,"Progress")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"duration"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number")),(0,a.kt)("td",null,"Duration")))),(0,a.kt)("h2",{id:"api-support"},"API Support"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"API"),(0,a.kt)("th",{parentName:"tr",align:"center"},"WeChat Mini-Program"),(0,a.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,a.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"LivePusher"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})))))}m.isMDXComponent=!0}}]);