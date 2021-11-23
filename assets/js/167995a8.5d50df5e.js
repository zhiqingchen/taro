"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[86946],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),s=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=s(e.components);return a.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},v=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),v=s(t),m=r,d=v["".concat(i,".").concat(m)]||v[m]||u[m]||o;return t?a.createElement(d,l(l({ref:n},p),{},{components:t})):a.createElement(d,l({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=v;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var s=2;s<o;s++)l[s]=t[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}v.displayName="MDXCreateElement"},58215:function(e,n,t){var a=t(67294);n.Z=function(e){var n=e.children,t=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:r},n)}},55064:function(e,n,t){t.d(n,{Z:function(){return v}});var a=t(83117),r=t(67294),o=t(72389),l=t(79443);var c=function(){var e=(0,r.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=t(83039),s=t(86010),p="tabItem_1uMI";function u(e){var n,t,a,o=e.lazy,l=e.block,u=e.defaultValue,v=e.values,m=e.groupId,d=e.className,h=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=v?v:h.map((function(e){var n=e.props;return{value:n.value,label:n.label}})),k=(0,i.lx)(f,(function(e,n){return e.value===n.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===u?u:null!=(n=null!=u?u:null==(t=h.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(a=h[0])?void 0:a.props.value;if(null!==g&&!f.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=c(),w=b.tabGroupChoices,x=b.setTabGroupChoices,y=(0,r.useState)(g),N=y[0],T=y[1],E=[],z=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var M=w[m];null!=M&&M!==N&&f.some((function(e){return e.value===M}))&&T(M)}var V=function(e){var n=e.currentTarget,t=E.indexOf(n),a=f[t].value;a!==N&&(z(n),T(a),null!=m&&x(m,a))},C=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=E.indexOf(e.currentTarget)+1;t=E[a]||E[0];break;case"ArrowLeft":var r=E.indexOf(e.currentTarget)-1;t=E[r]||E[E.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":l},d)},f.map((function(e){var n=e.value,t=e.label;return r.createElement("li",{role:"tab",tabIndex:N===n?0:-1,"aria-selected":N===n,className:(0,s.Z)("tabs__item",p,{"tabs__item--active":N===n}),key:n,ref:function(e){return E.push(e)},onKeyDown:C,onFocus:V,onClick:V},null!=t?t:n)}))),o?(0,r.cloneElement)(h.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},h.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==N})}))))}function v(e){var n=(0,o.Z)();return r.createElement(u,(0,a.Z)({key:String(n)},e))}},79443:function(e,n,t){var a=(0,t(67294).createContext)(void 0);n.Z=a},22999:function(e,n,t){t.d(n,{hn:function(){return r},p6:function(){return o},gQ:function(){return c}});var a=t(67294),r=function(){return a.createElement("span",{className:"footer_link_connect_wrap"},a.createElement("span",{className:"footer_link_connect footer_link_wechat"},"\u5fae\u4fe1\u5f00\u53d1\u8005\u7fa4",a.createElement("span",{className:"wechat_qrcode_icon"},a.createElement("svg",{t:"1554966525626",className:"icon svgicon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"https://www.w3.org/2000/svg","p-id":"2588","data-spm-anchor-id":"a313x.7781069.0.i0"},a.createElement("path",{d:"M240.071 241.095h59.278v59.278h-59.278v-59.278z",fill:"","p-id":"2589"}),a.createElement("path",{d:"M405.959 134.485h-272.611v272.611h106.723v47.445h59.278v-47.445h106.723v-59.278h47.445v-47.445h-47.445l-0.114-165.888zM346.795 347.819h-154.169v-154.055h154.055v154.055h0.114zM240.071 727.154h59.278v59.278h-59.278v-59.278zM726.016 241.095h59.278v59.278h-59.278v-59.278zM512.683 509.042v63.943h59.278v-59.165h47.445v-59.278h-47.445v-47.445h-59.278v101.945zM512.683 725.789v60.643h59.278v-106.723h47.445v-59.278h-106.723v105.358zM571.961 786.432h47.445v47.445h-47.445v-47.445zM453.405 833.877v59.165h118.557v-59.165h-118.557z",fill:"","p-id":"2590"}),a.createElement("path",{d:"M678.685 679.709h-59.278v106.723h106.61v-59.278h-47.331v-47.445zM726.016 893.042h166.002v-59.165h-106.723v-47.445h-59.278v106.61zM892.018 513.821v-59.278h-106.723v59.278h106.723zM832.739 727.154h59.278v59.278h-59.278v-59.278zM453.405 347.819h59.278v59.278h-59.278v-59.278zM726.016 454.542v-47.445h166.002v-272.611h-272.611v59.278h-106.723v47.445h106.723v59.165h-47.445v47.445h47.445v59.278h59.278v47.445h47.331zM678.685 193.763h154.055v154.055h-154.055v-154.055zM678.685 572.985h47.331v47.445h-47.331v-47.445zM785.294 679.709h-59.278v47.445h106.723v-106.723h59.278v-47.445h-106.723v106.723zM453.405 241.095h59.278v59.278h-59.278v-59.278zM299.349 513.821h47.445v59.165h-47.445v-59.165zM453.405 454.542h-106.61v59.278h59.165v59.165h47.445v-118.443z",fill:"","p-id":"2591"}),a.createElement("path",{d:"M405.959 786.432v-106.723h47.445v-59.278h-213.333v-106.61h-106.723v59.278h59.278v47.445h-59.278v272.611h272.611v-59.278h47.445v-47.445h-47.445zM346.795 833.877h-154.169v-154.169h154.055v154.169h0.114zM453.405 572.985h59.278v47.445h-59.278v-47.445zM619.406 513.821h59.278v59.165h-59.278v-59.165zM726.016 513.821h59.278v59.165h-59.278v-59.165z",fill:"","p-id":"2592"})))),a.createElement("span",{className:"footer_link_wechat_img inline"},a.createElement("img",{src:"https://camo.githubusercontent.com/10834a234b99a5880b5dff7c0ca7235e2a0772e7/687474703a2f2f696d6732302e333630627579696d672e636f6d2f7562612f6a66732f7432303139372f3238332f313638373136383837342f3133363034322f32623464383131662f35623330613635634e39643166303366312e706e67"})))};function o(){return a.createElement("span",null,a.createElement("svg",{xmlns:"https://www.w3.org/2000/svg",className:"inline-svg-icon",viewBox:"0 0 1024 1024"},a.createElement("defs",null,a.createElement("style",null)),a.createElement("path",{fill:"#41B883",d:"M615.6 123.6h165.5L512 589.7 242.9 123.6H63.5L512 900.4l448.5-776.9z"}),a.createElement("path",{fill:"#34495E",d:"M781.1 123.6H615.6L512 303 408.4 123.6H242.9L512 589.7z"})),a.createElement("span",{style:{color:l}},"Vue"))}var l="#4fc08d";function c(){return a.createElement("span",null,a.createElement("svg",{xmlns:"https://www.w3.org/2000/svg",width:"200",height:"200",className:"inline-svg-icon",viewBox:"0 0 1024 1024"},a.createElement("defs",null,a.createElement("style",null)),a.createElement("path",{fill:"#61DAFB",d:"M432 511.8a80 80 0 10160 0 80 80 0 10-160 0z"}),a.createElement("path",{fill:"#61DAFB",d:"M960.5 511.8c0-62.8-73.8-117.2-188.5-150.1 28.9-115.8 18.7-206.9-35.7-238.3-54.5-31.4-138.5 5.3-224.3 88.2-85.8-82.9-169.8-119.6-224.3-88.2-54.4 31.4-64.6 122.6-35.7 238.3C137.3 394.6 63.5 449 63.5 511.8S137.3 629 252 661.9c-28.9 115.7-18.7 206.9 35.7 238.3 13.4 7.8 28.6 11.6 45.2 11.6 39.7 0 87.8-21.8 140-64.2 13-10.6 26.1-22.6 39.1-35.2 13 12.6 26.1 24.6 39.1 35.2 52.2 42.4 100.2 64.2 140 64.2 16.6 0 31.8-3.8 45.2-11.6 54.4-31.4 64.6-122.5 35.7-238.3 114.7-32.9 188.5-87.3 188.5-150.1zM716.8 157.2c35.3 20.4 42.7 94.3 17.6 194.8-36.7-8.4-76.7-14.7-119.3-18.6-24.7-34.9-50.2-66.4-75.8-94 59.2-57.3 114.2-88.4 152-88.4 9.6-.1 18.2 2 25.5 6.2zM637 584c-13.8 24-28.4 47-43.3 69-26.1 2-53.3 3.1-81.7 3.1-28.3 0-55.5-1.1-81.6-3.1-15-22-29.5-45.1-43.3-69-14.1-24.5-26.7-48.6-38.1-72.2 11.4-23.6 24-47.7 38.1-72.2 14.1-24.5 28.7-47.4 43.4-69.1 26.1-2 53.3-3.1 81.6-3.1 28.3 0 55.5 1.1 81.6 3.1 14.7 21.6 29.3 44.6 43.4 69 14.1 24.5 26.7 48.6 38.1 72.2-11.5 23.7-24.1 47.8-38.2 72.3zm58.8-26.4c11.2 26.6 20.4 52.1 28 76.5-24.9 5.6-51.7 10.4-80.3 14 9.3-14.5 18.4-29.3 27.3-44.6 8.8-15.4 17.1-30.7 25-45.9zM512 756.5c-17.7-19.2-35.1-40.1-52.2-62.6 17.1.8 34.5 1.3 52.2 1.3 17.7 0 35.1-.5 52.2-1.3-17.1 22.5-34.5 43.4-52.2 62.6zM380.5 648.1c-28.6-3.6-55.3-8.4-80.3-14 7.6-24.4 16.8-49.9 28-76.5 7.9 15.2 16.1 30.5 25 45.9 8.9 15.2 18 30 27.3 44.6zM328.2 466c-11.2-26.6-20.4-52.1-28-76.5 24.9-5.6 51.6-10.4 80.2-14-9.2 14.4-18.4 29.2-27.2 44.6-8.8 15.4-17.1 30.7-25 45.9zM512 267.1c17.3 18.7 34.8 39.8 52.1 62.7-17.1-.8-34.4-1.3-52.1-1.3-17.7 0-35 .5-52.1 1.3 17.3-22.9 34.8-44 52.1-62.7zm158.7 153c-8.9-15.3-18-30.1-27.2-44.6 28.6 3.6 55.3 8.4 80.2 14-7.6 24.4-16.8 49.9-28 76.5-7.8-15.2-16.1-30.5-25-45.9zM307.2 157.2c7.2-4.2 15.8-6.2 25.6-6.2 37.8 0 92.7 31.1 151.9 88.4-25.6 27.6-51.1 59.2-75.8 94-42.5 3.9-82.6 10.2-119.3 18.6-25.1-100.6-17.6-174.5 17.6-194.8zM102.5 511.8c0-40.8 60.3-84.2 160-112.6 11.1 36 25.6 73.8 43.5 112.6-17.8 38.8-32.4 76.6-43.5 112.6-99.7-28.4-160-71.9-160-112.6zm345.8 305.5c-59.7 48.5-111.1 66.4-141.1 49.2-35.3-20.4-42.7-94.3-17.6-194.8 36.7 8.4 76.7 14.7 119.3 18.6 24.4 34.5 49.9 66.1 75.8 94.2-12.1 11.7-24.2 22.9-36.4 32.8zm268.5 49.2c-29.9 17.3-81.4-.6-141.1-49.2-12.1-9.9-24.3-21.1-36.5-32.8 26-28.1 51.4-59.7 75.8-94.2 42.5-3.9 82.6-10.2 119.3-18.7 25.2 100.6 17.7 174.5-17.5 194.9zm44.8-242.1c-11.1-36-25.6-73.8-43.5-112.6 17.8-38.8 32.4-76.6 43.5-112.6 99.7 28.5 160 71.9 160 112.6-.1 40.7-60.4 84.2-160 112.6z"})),a.createElement("span",{style:{color:"#61dafb"}},"React"))}},28428:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return p},contentTitle:function(){return u},metadata:function(){return v},toc:function(){return m},default:function(){return h}});var a=t(83117),r=t(80102),o=(t(67294),t(3905)),l=t(55064),c=t(58215),i=t(22999),s=["components"],p={title:"\u4f7f\u7528 Vant Weapp"},u=void 0,v={unversionedId:"vant",id:"version-3.x/vant",isDocsHomePage:!1,title:"\u4f7f\u7528 Vant Weapp",description:"Taro3 \u652f\u6301\u4f7f\u7528 Vant Weapp \u7ec4\u4ef6\u5e93\u8fdb\u884c\u5f00\u53d1\uff0c\u793a\u4f8b\u4ed3\u5e93\uff1ataro3-vant-sample\u3002",source:"@site/versioned_docs/version-3.x/vant.mdx",sourceDirName:".",slug:"/vant",permalink:"/taro/docs/vant",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.x/vant.mdx",tags:[],version:"3.x",frontMatter:{title:"\u4f7f\u7528 Vant Weapp"},sidebar:"version-3.x/docs",previous:{title:"\u4f7f\u7528  NutUI \u4eac\u4e1c\u98ce\u683c\u7ec4\u4ef6\u5e93",permalink:"/taro/docs/nutui"},next:{title:"\u5c0f\u7a0b\u5e8f\u6301\u7eed\u96c6\u6210",permalink:"/taro/docs/plugin-mini-ci"}},m=[{value:"\u5982\u4f55\u4f7f\u7528",id:"\u5982\u4f55\u4f7f\u7528",children:[{value:"\u914d\u7f6e\u5ffd\u7565 vant \u7684\u6837\u5f0f\u5c3a\u5bf8\u8f6c\u6362",id:"\u914d\u7f6e\u5ffd\u7565-vant-\u7684\u6837\u5f0f\u5c3a\u5bf8\u8f6c\u6362",children:[],level:3},{value:"\u914d\u7f6e copy \u5c0f\u7a0b\u5e8f\u539f\u751f\u6587\u4ef6",id:"\u914d\u7f6e-copy-\u5c0f\u7a0b\u5e8f\u539f\u751f\u6587\u4ef6",children:[],level:3},{value:"\u5f15\u7528 vant \u7ec4\u4ef6",id:"\u5f15\u7528-vant-\u7ec4\u4ef6",children:[],level:3},{value:"\u4f7f\u7528 vant \u7ec4\u4ef6",id:"\u4f7f\u7528-vant-\u7ec4\u4ef6",children:[{value:"1. \u7ed1\u5b9a\u5c5e\u6027",id:"1-\u7ed1\u5b9a\u5c5e\u6027",children:[],level:4},{value:"2. \u7ed1\u5b9a\u4e8b\u4ef6",id:"2-\u7ed1\u5b9a\u4e8b\u4ef6",children:[],level:4},{value:"3. Slot",id:"3-slot",children:[],level:4}],level:3}],level:2}],d={toc:m};function h(e){var n=e.components,t=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Taro3 \u652f\u6301\u4f7f\u7528 ",(0,o.kt)("a",{parentName:"p",href:"https://youzan.github.io/vant-weapp/#/intro"},"Vant Weapp")," \u7ec4\u4ef6\u5e93\u8fdb\u884c\u5f00\u53d1\uff0c\u793a\u4f8b\u4ed3\u5e93\uff1a",(0,o.kt)("a",{parentName:"p",href:"https://github.com/NervJS/taro3-vant-sample"},"taro3-vant-sample"),"\u3002"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a\u4f7f\u7528\u539f\u751f\u7b2c\u4e09\u65b9\u7ec4\u4ef6\u5e93\u8fdb\u884c\u5f00\u53d1\u7684\u9879\u76ee\uff0c",(0,o.kt)("strong",{parentName:"p"},"\u4e0d\u518d\u5177\u6709\u591a\u7aef\u8f6c\u6362\u7684\u80fd\u529b"),"\u3002"),(0,o.kt)("p",{parentName:"blockquote"},"\u4f46\u662f\uff0c\u5982\u679c\u4f60\u60f3\u4f7f\u7528 Vant Weapp \u53c8\u60f3\u62e5\u6709\u591a\u7aef\u8f6c\u6362\u7684\u80fd\u529b\uff0c\u5f3a\u70c8\u63a8\u8350 Vant Weapp \u793e\u533a\u884d\u751f\u5e93 ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/AntmJS/vantui"},"@antmjs/vantui")),"\uff0c \u5b83\u662f\u57fa\u4e8e Vant Weapp \u5f00\u53d1\u7684\u591a\u7aef\u7ec4\u4ef6\u5e93\uff0c\u540c\u65f6\u652f\u6301 Taro \u548c React\u3002\u62e5\u6709 Taro \u591a\u7aef\u8f6c\u6362\u7684\u80fd\u529b\uff0c\u540c\u65f6\u548c Vant Weapp \u7684 UI \u548c API \u9ad8\u5ea6\u4fdd\u6301\u4e00\u81f4\u3002")),(0,o.kt)("h2",{id:"\u5982\u4f55\u4f7f\u7528"},"\u5982\u4f55\u4f7f\u7528"),(0,o.kt)("h3",{id:"\u914d\u7f6e\u5ffd\u7565-vant-\u7684\u6837\u5f0f\u5c3a\u5bf8\u8f6c\u6362"},"\u914d\u7f6e\u5ffd\u7565 vant \u7684\u6837\u5f0f\u5c3a\u5bf8\u8f6c\u6362"),(0,o.kt)("p",null,"\u5982\u679c\u76f4\u63a5\u4f7f\u7528 vant \u7ec4\u4ef6\uff0c\u4f1a\u53d1\u73b0\u6837\u5f0f\u504f\u5c0f\u7684\u60c5\u51b5\uff0c\u8fd9\u662f\u56e0\u4e3a Taro \u9ed8\u8ba4\u5c06 vant \u7684\u6837\u5f0f\u5c3a\u5bf8\u4ece ",(0,o.kt)("strong",{parentName:"p"},"px")," \u8f6c\u6362\u4e3a\u4e86 ",(0,o.kt)("strong",{parentName:"p"},"rpx"),"\uff0c\u53ef\u4ee5\u901a\u8fc7\u914d\u7f6e ",(0,o.kt)("a",{parentName:"p",href:"https://nervjs.github.io/taro/docs/size#selectorblacklist"},"selectorblacklist")," \u6765\u7981\u6b62\u8f6c\u6362\u3002"),(0,o.kt)("p",null,"\u914d\u7f6e\u65b9\u6cd5\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// config/index.js\nconst config = {\n  // ...\n  mini: {\n    postcss: {\n      pxtransform: {\n        enable: true,\n        config: {\n          selectorBlackList: [/van-/]\n        }\n      }\n    }\n  },\n}\n")),(0,o.kt)("h3",{id:"\u914d\u7f6e-copy-\u5c0f\u7a0b\u5e8f\u539f\u751f\u6587\u4ef6"},"\u914d\u7f6e copy \u5c0f\u7a0b\u5e8f\u539f\u751f\u6587\u4ef6"),(0,o.kt)("p",null,"vant \u7ec4\u4ef6\u4e2d\u5305\u542b\u4e00\u4e9b\u5c0f\u7a0b\u5e8f\u539f\u751f\u6587\u4ef6\u7684\u4f9d\u8d56\uff0c\u76ee\u524d Taro \u6ca1\u6709\u5bf9\u8fd9\u4e9b\u4f9d\u8d56\u8fdb\u884c\u5206\u6790\u3002\u56e0\u6b64\u9700\u8981\u914d\u7f6e ",(0,o.kt)("inlineCode",{parentName:"p"},"copy")," \u628a\u8fd9\u4e9b\u4f9d\u8d56\u79fb\u52a8\u5230 ",(0,o.kt)("inlineCode",{parentName:"p"},"dist")," \u76ee\u5f55\u4e2d\uff0c\u4f8b\u5982\u9700\u8981 copy ",(0,o.kt)("inlineCode",{parentName:"p"},"wxs")," \u548c\u6837\u5f0f\u6587\u4ef6\uff0c\u90e8\u5206\u914d\u7f6e\u5982\u4e0b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// config/index.js\nconst config = {\n  // ...\n  copy: {\n    patterns: [\n      { from: 'src/components/vant-weapp/dist/wxs', to: 'dist/components/vant-weapp/dist/wxs' },\n      { from: 'src/components/vant-weapp/dist/common/style', to: 'dist/components/vant-weapp/dist/common/style' },\n      { from: 'src/components/vant-weapp/dist/common/index.wxss', to: 'dist/components/vant-weapp/dist/common/index.wxss' },\n      { from: 'src/components/vant-weapp/dist/calendar/index.wxs', to: 'dist/components/vant-weapp/dist/calendar/index.wxs' },\n      { from: 'src/components/vant-weapp/dist/calendar/utils.wxs', to: 'dist/components/vant-weapp/dist/calendar/utils.wxs' },\n      { from: 'src/components/vant-weapp/dist/calendar/calendar.wxml', to: 'dist/components/vant-weapp/dist/calendar/calendar.wxml' },\n      { from: 'src/components/vant-weapp/dist/calendar/components/month/index.wxs', to: 'dist/components/vant-weapp/dist/calendar/components/month/index.wxs' },\n    ],\n    options: {\n    }\n  },\n}\n")),(0,o.kt)("h3",{id:"\u5f15\u7528-vant-\u7ec4\u4ef6"},"\u5f15\u7528 vant \u7ec4\u4ef6"),(0,o.kt)("p",null,"\u9996\u5148\u9700\u8981\u5728 ",(0,o.kt)("strong",{parentName:"p"},"app \u7684 config")," \u6216",(0,o.kt)("strong",{parentName:"p"},"\u9875\u9762\u7684 config")," \u6587\u4ef6\u4e2d\u914d\u7f6e ",(0,o.kt)("inlineCode",{parentName:"p"},"usingComponents")," \u5b57\u6bb5\uff0c\u5982\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n  navigationBarTitleText: '\u9996\u9875',\n  usingComponents: {\n    'van-button': '../../components/vant-weapp/dist/button/index'\n  }\n}\n")),(0,o.kt)("p",null,"\u7136\u540e\u5728\u9875\u9762\u4e2d\u4fbf\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\u3002"),(0,o.kt)("h3",{id:"\u4f7f\u7528-vant-\u7ec4\u4ef6"},"\u4f7f\u7528 vant \u7ec4\u4ef6"),(0,o.kt)("h4",{id:"1-\u7ed1\u5b9a\u5c5e\u6027"},"1. \u7ed1\u5b9a\u5c5e\u6027"),(0,o.kt)(l.Z,{defaultValue:"React",values:[{label:(0,o.kt)(i.gQ,{mdxType:"ReactIcon"}),value:"React"},{label:(0,o.kt)(i.p6,{mdxType:"VueIcon"}),value:"Vue"}],mdxType:"Tabs"},(0,o.kt)(c.Z,{value:"React",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import React, { Component } from 'react'\nimport { View } from '@tarojs/components'\n\nexport default class Index extends Component {\n  render () {\n    return (\n      <View>\n        <van-button type='primary' loading loading-text='ing'>Button</van-button>\n      </View>\n    )\n  }\n}\n"))),(0,o.kt)(c.Z,{value:"Vue",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"<template>\n  <view>\n    <van-button type='primary' :loading='true' loading-text='ing'>Button</van-button>\n  </view>\n</template>\n\n<script>\nexport default {\n  name: 'index'\n}\n<\/script>\n")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a\u5982\u679c\u7ec4\u4ef6\u7684\u67d0\u4e9b\u5c5e\u6027\u5728 vant \u6587\u6863\u91cc\u5199\u7740\u5e26\u6709\u9ed8\u8ba4\u503c ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),"\uff0c\u5728 Taro \u4e2d\u4f7f\u7528\u65f6\u4ecd\u7136\u9700\u8981",(0,o.kt)("strong",{parentName:"p"},"\u663e\u5f0f\u8bbe\u7f6e\u4e3a true"),"\u3002")),(0,o.kt)("h4",{id:"2-\u7ed1\u5b9a\u4e8b\u4ef6"},"2. \u7ed1\u5b9a\u4e8b\u4ef6"),(0,o.kt)(l.Z,{defaultValue:"React",values:[{label:(0,o.kt)(i.gQ,{mdxType:"ReactIcon"}),value:"React"},{label:(0,o.kt)(i.p6,{mdxType:"VueIcon"}),value:"Vue"}],mdxType:"Tabs"},(0,o.kt)(c.Z,{value:"React",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import React, { Component } from 'react'\nimport { View } from '@tarojs/components'\n\nexport default class Index extends Component {\n  handleClick = () => {\n    console.log('click')\n  }\n\n  onAfterRead = res => {\n    console.log(res)\n  }\n\n  render () {\n    return (\n      <View>\n        // \u5bf9\u5e94 bind:click \u4e8b\u4ef6\n        <van-button type='primary' onClick={this.handleClick} >Button</van-button>\n        // \u5bf9\u5e94 bind:after-read \u4e8b\u4ef6\n        <van-uploader fileList={[]} onAfterRead={this.onAfterRead} />\n      </View>\n    )\n  }\n}\n"))),(0,o.kt)(c.Z,{value:"Vue",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"<template>\n  <view>\n    <van-button type='primary' @click='handleClick'>Button</van-button>\n    <van-uploader :fileList='[]' @after-read='onAfterRead' />\n  </view>\n</template>\n\n<script>\nexport default {\n  methods: {\n    handleClick () {\n      console.log('click')\n    },\n    onAfterRead (res) {\n      console.log(res)\n    }\n  }\n}\n<\/script>\n")))),(0,o.kt)("h4",{id:"3-slot"},"3. Slot"),(0,o.kt)(l.Z,{defaultValue:"React",values:[{label:(0,o.kt)(i.gQ,{mdxType:"ReactIcon"}),value:"React"},{label:(0,o.kt)(i.p6,{mdxType:"VueIcon"}),value:"Vue"}],mdxType:"Tabs"},(0,o.kt)(c.Z,{value:"React",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import React, { Component } from 'react'\nimport { View, Slot } from '@tarojs/components'\n\nexport default class Index extends Component {\n  render () {\n    return (\n      <View>\n        <van-calendar poppable show>\n          <Slot name='title'>\n            <View>Hello world</View>\n          </Slot>\n        </van-calendar>\n      </View>\n    )\n  }\n}\n"))),(0,o.kt)(c.Z,{value:"Vue",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"<template>\n  <view>\n    <van-calendar :poppable='true' :show='true'>\n      <slot-view :name='\"title\"'>\n        <view>Hello world</view>\n      </slot-view>\n    </van-calendar>\n  </view>\n</template>\n\n<script>\nexport default {\n  name: 'index'\n}\n<\/script>\n")))))}h.isMDXComponent=!0}}]);