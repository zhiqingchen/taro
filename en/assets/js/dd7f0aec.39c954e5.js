"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[51867],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return p}});var l=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,l,r=function(t,e){if(null==t)return{};var n,l,r={},a=Object.keys(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var i=l.createContext({}),d=function(t){var e=l.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=d(t.components);return l.createElement(i.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},s=l.forwardRef((function(t,e){var n=t.components,r=t.mdxType,a=t.originalType,i=t.parentName,c=u(t,["components","mdxType","originalType","parentName"]),s=d(n),p=r,m=s["".concat(i,".").concat(p)]||s[p]||k[p]||a;return n?l.createElement(m,o(o({ref:e},c),{},{components:n})):l.createElement(m,o({ref:e},c))}));function p(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=n.length,o=new Array(a);o[0]=s;var u={};for(var i in e)hasOwnProperty.call(e,i)&&(u[i]=e[i]);u.originalType=t,u.mdxType="string"==typeof t?t:r,o[1]=u;for(var d=2;d<a;d++)o[d]=n[d];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}s.displayName="MDXCreateElement"},58215:function(t,e,n){var l=n(67294);e.Z=function(t){var e=t.children,n=t.hidden,r=t.className;return l.createElement("div",{role:"tabpanel",hidden:n,className:r},e)}},55064:function(t,e,n){n.d(e,{Z:function(){return s}});var l=n(83117),r=n(67294),a=n(72389),o=n(79443);var u=function(){var t=(0,r.useContext)(o.Z);if(null==t)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return t},i=n(83039),d=n(86010),c="tabItem_1uMI";function k(t){var e,n,l,a=t.lazy,o=t.block,k=t.defaultValue,s=t.values,p=t.groupId,m=t.className,v=r.Children.map(t.children,(function(t){if((0,r.isValidElement)(t)&&void 0!==t.props.value)return t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof t.type?t.type:t.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=s?s:v.map((function(t){var e=t.props;return{value:e.value,label:e.label}})),g=(0,i.lx)(h,(function(t,e){return t.value===e.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(t){return t.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===k?k:null!=(e=null!=k?k:null==(n=v.find((function(t){return t.props.default})))?void 0:n.props.value)?e:null==(l=v[0])?void 0:l.props.value;if(null!==y&&!h.some((function(t){return t.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+h.map((function(t){return t.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var f=u(),b=f.tabGroupChoices,N=f.setTabGroupChoices,P=(0,r.useState)(y),x=P[0],A=P[1],w=[],T=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=p){var C=b[p];null!=C&&C!==x&&h.some((function(t){return t.value===C}))&&A(C)}var E=function(t){var e=t.currentTarget,n=w.indexOf(e),l=h[n].value;l!==x&&(T(e),A(l),null!=p&&N(p,l))},S=function(t){var e,n=null;switch(t.key){case"ArrowRight":var l=w.indexOf(t.currentTarget)+1;n=w[l]||w[0];break;case"ArrowLeft":var r=w.indexOf(t.currentTarget)-1;n=w[r]||w[w.length-1]}null==(e=n)||e.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,d.Z)("tabs",{"tabs--block":o},m)},h.map((function(t){var e=t.value,n=t.label;return r.createElement("li",{role:"tab",tabIndex:x===e?0:-1,"aria-selected":x===e,className:(0,d.Z)("tabs__item",c,{"tabs__item--active":x===e}),key:e,ref:function(t){return w.push(t)},onKeyDown:S,onFocus:E,onClick:E},null!=n?n:e)}))),a?(0,r.cloneElement)(v.filter((function(t){return t.props.value===x}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},v.map((function(t,e){return(0,r.cloneElement)(t,{key:e,hidden:t.props.value!==x})}))))}function s(t){var e=(0,a.Z)();return r.createElement(k,(0,l.Z)({key:String(e)},t))}},79443:function(t,e,n){var l=(0,n(67294).createContext)(void 0);e.Z=l},24281:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return d},contentTitle:function(){return c},metadata:function(){return k},toc:function(){return s},default:function(){return m}});var l=n(83117),r=n(80102),a=(n(67294),n(3905)),o=n(55064),u=n(58215),i=["components"],d={title:"LivePlayer",sidebar_label:"LivePlayer"},c=void 0,k={unversionedId:"components/media/live-player",id:"version-3.x/components/media/live-player",isDocsHomePage:!1,title:"LivePlayer",description:"Real-time audio/video playback. Related API: Taro.createLivePlayerContext",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-3.x/components/media/live-player.md",sourceDirName:"components/media",slug:"/components/media/live-player",permalink:"/taro/en/docs/components/media/live-player",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.x/components/media/live-player.md",tags:[],version:"3.x",frontMatter:{title:"LivePlayer",sidebar_label:"LivePlayer"},sidebar:"version-3.x/components",previous:{title:"Image",permalink:"/taro/en/docs/components/media/image"},next:{title:"LivePusher",permalink:"/taro/en/docs/components/media/live-pusher"}},s=[{value:"Type",id:"type",children:[],level:2},{value:"Examples",id:"examples",children:[],level:2},{value:"LivePlayerProps",id:"liveplayerprops",children:[{value:"Property Support",id:"property-support",children:[],level:3},{value:"mode",id:"mode",children:[],level:3},{value:"orientation",id:"orientation",children:[],level:3},{value:"objectFit",id:"objectfit",children:[],level:3},{value:"soundMode",id:"soundmode",children:[],level:3},{value:"onStateChangeEventDetail",id:"onstatechangeeventdetail",children:[],level:3},{value:"onFullScreenChangeEventDetail",id:"onfullscreenchangeeventdetail",children:[],level:3},{value:"onNetStatusEventDetail",id:"onnetstatuseventdetail",children:[],level:3},{value:"status",id:"status",children:[],level:3}],level:2},{value:"API Support",id:"api-support",children:[],level:2}],p={toc:s};function m(t){var e=t.components,n=(0,r.Z)(t,i);return(0,a.kt)("wrapper",(0,l.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Real-time audio/video playback. Related API: ",(0,a.kt)("inlineCode",{parentName:"p"},"Taro.createLivePlayerContext")),(0,a.kt)("p",null,"Currently, it is open only to Mini Programs in the following categories owned by Chinese entities. The component needs to pass the category review, and then on the Mini Program Console, you can activate the permissions for this component by choosing ",(0,a.kt)("strong",{parentName:"p"},"Development > API Settings"),"."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/en/dev/component/live-player.html"},"Reference"))),(0,a.kt)("h2",{id:"type"},"Type"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"ComponentType<LivePlayerProps>\n")),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)(o.Z,{defaultValue:"React",values:[{label:"React",value:"React"},{label:"Vue",value:"Vue"}],mdxType:"Tabs"},(0,a.kt)(u.Z,{value:"React",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"class App extends Components {\n  render () {\n    return (\n      <LivePlayer src='url' mode='live' autoplay  />\n    )\n  }\n}\n"))),(0,a.kt)(u.Z,{value:"Vue",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<template>\n  <live-player src="url" mode="live" :autoplay="true"  />\n</template>\n')))),(0,a.kt)("h2",{id:"liveplayerprops"},"LivePlayerProps"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Property"),(0,a.kt)("th",null,"Type"),(0,a.kt)("th",{style:{textAlign:"center"}},"Default"),(0,a.kt)("th",{style:{textAlign:"center"}},"Required"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"src"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string")),(0,a.kt)("td",{style:{textAlign:"center"}}),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"Audio/video address. Only flv and rtmp formats are supported.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"mode"),(0,a.kt)("td",null,(0,a.kt)("code",null,'"live" | "RTC"')),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,'"live"')),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"Mode")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"autoplay"),(0,a.kt)("td",null,(0,a.kt)("code",null,"boolean")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"false")),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"Auto playback")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"muted"),(0,a.kt)("td",null,(0,a.kt)("code",null,"boolean")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"false")),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"Specifies whether to mute the component.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"orientation"),(0,a.kt)("td",null,(0,a.kt)("code",null,'"vertical" | "horizontal"')),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,'"vertical"')),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"The orientation of the image.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"objectFit"),(0,a.kt)("td",null,(0,a.kt)("code",null,'"contain" | "fillCrop"')),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,'"contain"')),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"Filling mode. Available values include `contain` and `fillCrop`.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"backgroundMute"),(0,a.kt)("td",null,(0,a.kt)("code",null,"boolean")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"false")),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"Specifies whether to mute the component when it enters the background. ",(0,a.kt)("br",null),"(This property has been discarded. By default, the component is muted when entering the background.)")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"minCache"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"1")),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"Minimum buffer (in s)")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"maxCache"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"3")),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"Minimum buffer (in s)")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"soundMode"),(0,a.kt)("td",null,(0,a.kt)("code",null,'"speaker" | "ear"')),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,'"speaker"')),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"Sound output mode")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"autoPauseIfNavigate"),(0,a.kt)("td",null,(0,a.kt)("code",null,"boolean")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"true")),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"Specifies whether to automatically pause the real-time audio/video playback on the current page upon the navigation to another Mini Program page.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"autoPauseIfOpenNavigate"),(0,a.kt)("td",null,(0,a.kt)("code",null,"boolean")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"true")),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"Specifies whether to automatically pause the real-time audio/video playback on the current page upon the navigation to another native page of WeChat.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"onStateChange"),(0,a.kt)("td",null,(0,a.kt)("code",null,"BaseEventOrigFunction<onStateChangeEventDetail>")),(0,a.kt)("td",{style:{textAlign:"center"}}),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"A playback status change. detail = ","{code}")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"onFullScreenChange"),(0,a.kt)("td",null,(0,a.kt)("code",null,"BaseEventOrigFunction<onFullScreenChangeEventDetail>")),(0,a.kt)("td",{style:{textAlign:"center"}}),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"A full-screen mode change. detail = ","{direction, fullScreen}")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"onNetstatus"),(0,a.kt)("td",null,(0,a.kt)("code",null,"BaseEventOrigFunction<onNetStatusEventDetail>")),(0,a.kt)("td",{style:{textAlign:"center"}}),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"The notification of the network status. detail = ","{info}")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"onAudioVolumenotify"),(0,a.kt)("td",null,(0,a.kt)("code",null,"BaseEventOrigFunction<",">")),(0,a.kt)("td",{style:{textAlign:"center"}}),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"Playback volume level change. detail = ","{}")))),(0,a.kt)("h3",{id:"property-support"},"Property Support"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"Property"),(0,a.kt)("th",{parentName:"tr",align:"center"},"WeChat Mini-Program"),(0,a.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,a.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"LivePlayerProps.src"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"LivePlayerProps.mode"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"LivePlayerProps.autoplay"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"LivePlayerProps.muted"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"LivePlayerProps.orientation"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"LivePlayerProps.objectFit"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"LivePlayerProps.backgroundMute"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"LivePlayerProps.minCache"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"LivePlayerProps.maxCache"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"LivePlayerProps.soundMode"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"LivePlayerProps.autoPauseIfNavigate"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"LivePlayerProps.autoPauseIfOpenNavigate"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"LivePlayerProps.onStateChange"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"LivePlayerProps.onFullScreenChange"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"LivePlayerProps.onNetstatus"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"LivePlayerProps.onAudioVolumenotify"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})))),(0,a.kt)("h3",{id:"mode"},"mode"),(0,a.kt)("p",null,"Valid values of mode"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Value"),(0,a.kt)("th",null,"Description "))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"live"),(0,a.kt)("td",null,"Live stream")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"RTC"),(0,a.kt)("td",null,"Real-time call. The latency is lower in this mode.")))),(0,a.kt)("h3",{id:"orientation"},"orientation"),(0,a.kt)("p",null,"Valid values of orientation"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Value"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"vertical"),(0,a.kt)("td",null,"Vertical")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"horizontal"),(0,a.kt)("td",null,"Horizontal")))),(0,a.kt)("h3",{id:"objectfit"},"objectFit"),(0,a.kt)("p",null,"Valid values of object-fit"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Value"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"contain"),(0,a.kt)("td",null,"Indicates that the longer edge of the image fills the screen, and the shorter edge is filled with black.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"fillCrop"),(0,a.kt)("td",null,"Indicates that the image fills the screen, and the part out of the display area will be truncated.")))),(0,a.kt)("h3",{id:"soundmode"},"soundMode"),(0,a.kt)("p",null,"Valid values of soundMode"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Value"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"speaker"),(0,a.kt)("td",null,"Loudspeaker")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"ear"),(0,a.kt)("td",null,"Receiver")))),(0,a.kt)("h3",{id:"onstatechangeeventdetail"},"onStateChangeEventDetail"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Param"),(0,a.kt)("th",null,"Type"),(0,a.kt)("th",null,"Decription"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"code"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number")),(0,a.kt)("td",null,"status code")))),(0,a.kt)("h3",{id:"onfullscreenchangeeventdetail"},"onFullScreenChangeEventDetail"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Param"),(0,a.kt)("th",null,"Type"),(0,a.kt)("th",null,"Decription"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"direction"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number")),(0,a.kt)("td",null,"Screen orientation")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"fullScreen"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number | boolean")),(0,a.kt)("td",null,"Full screen or not")))),(0,a.kt)("h3",{id:"onnetstatuseventdetail"},"onNetStatusEventDetail"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Param"),(0,a.kt)("th",null,"Type"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"info"),(0,a.kt)("td",null,(0,a.kt)("code",null,"netStatus"))))),(0,a.kt)("h3",{id:"status"},"status"),(0,a.kt)("p",null,"Status codes"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Code"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"2001"),(0,a.kt)("td",null,"Connected to the server")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"2002"),(0,a.kt)("td",null,"Connected to the server. Pull started.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"2003"),(0,a.kt)("td",null,"The network has received the first video packet (IDR)")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"2004"),(0,a.kt)("td",null,"Video playback started")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"2005"),(0,a.kt)("td",null,"Video playback in progress")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"2006"),(0,a.kt)("td",null,"Video playback ended")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"2007"),(0,a.kt)("td",null,"Video playback loading")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"2008"),(0,a.kt)("td",null,"Decoder started")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"2009"),(0,a.kt)("td",null,"Video resolution changed")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"-2301"),(0,a.kt)("td",null,"Network disconnected. Too many failed reconnection attempts. Restart the playback for more retries.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"-2302"),(0,a.kt)("td",null,"Failed to get the accelerated pull address")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"2101"),(0,a.kt)("td",null,"Failed to decode the current video frame")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"2102"),(0,a.kt)("td",null,"Failed to decode the current audio frame")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"2103"),(0,a.kt)("td",null,"Network disconnected and auto reconnection has started")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"2104"),(0,a.kt)("td",null,"Unstable inbound packet: This may be caused by insufficient downstream bandwidth, or inconsistent outbound stream from the VJ end.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"2105"),(0,a.kt)("td",null,"Stutter occurred during the video playback")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"2106"),(0,a.kt)("td",null,"Failed to start hard decoding. Soft decoding is used instead.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"2107"),(0,a.kt)("td",null,"Discontinuous sequence of video frames. Some frames may be dropped.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"2108"),(0,a.kt)("td",null,"Hard decoding of the first I-frame of current stream failed. Switched to soft decoding automatically.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"3001"),(0,a.kt)("td",null,"RTMP DNS resolution failed")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"3002"),(0,a.kt)("td",null,"Failed to connect to the RTMP server")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"3003"),(0,a.kt)("td",null,"Failed to shake hands with the RTMP server")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"3005"),(0,a.kt)("td",null,"Failed to read/write data on the RTMP server")))),(0,a.kt)("h2",{id:"api-support"},"API Support"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"API"),(0,a.kt)("th",{parentName:"tr",align:"center"},"WeChat Mini-Program"),(0,a.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,a.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"LivePlayer"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})))))}m.isMDXComponent=!0}}]);