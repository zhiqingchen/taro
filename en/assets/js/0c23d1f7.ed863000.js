(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[34310],{22122:function(e,t,r){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}r.d(t,{Z:function(){return n}})},19756:function(e,t,r){"use strict";function n(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}r.d(t,{Z:function(){return n}})},3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,g=d["".concat(c,".").concat(m)]||d[m]||s[m]||i;return r?n.createElement(g,l(l({ref:t},u),{},{components:r})):n.createElement(g,l({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1458:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return l},metadata:function(){return o},toc:function(){return c},default:function(){return u}});var n=r(22122),a=r(19756),i=(r(67294),r(3905)),l={title:"Taro.previewImage(option)",sidebar_label:"previewImage"},o={unversionedId:"apis/media/image/previewImage",id:"version-3.x/apis/media/image/previewImage",isDocsHomePage:!1,title:"Taro.previewImage(option)",description:"Previews the image in full screen on a new page. You can save or send it to others while preview.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-3.x/apis/media/image/previewImage.md",sourceDirName:"apis/media/image",slug:"/apis/media/image/previewImage",permalink:"/taro/en/docs/apis/media/image/previewImage",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.x/apis/media/image/previewImage.md",version:"3.x",sidebar_label:"previewImage",frontMatter:{title:"Taro.previewImage(option)",sidebar_label:"previewImage"},sidebar:"version-3.x/API",previous:{title:"Taro.saveImageToPhotosAlbum(option)",permalink:"/taro/en/docs/apis/media/image/saveImageToPhotosAlbum"},next:{title:"Taro.getImageInfo(option)",permalink:"/taro/en/docs/apis/media/image/getImageInfo"}},c=[{value:"Type",id:"type",children:[]},{value:"Parameters",id:"parameters",children:[{value:"Option",id:"option",children:[]}]},{value:"Sample Code",id:"sample-code",children:[]},{value:"API Support",id:"api-support",children:[]}],p={toc:c};function u(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Previews the image in full screen on a new page. You can save or send it to others while preview."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/media/image/wx.previewImage.html"},"Reference"))),(0,i.kt)("h2",{id:"type"},"Type"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"(option: Option) => Promise<CallbackResult>\n")),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("h3",{id:"option"},"Option"),(0,i.kt)("table",null,(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,"Property"),(0,i.kt)("th",null,"Type"),(0,i.kt)("th",{style:{textAlign:"center"}},"Required"),(0,i.kt)("th",null,"Description"))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,"urls"),(0,i.kt)("td",null,(0,i.kt)("code",null,"string[]")),(0,i.kt)("td",{style:{textAlign:"center"}},"Yes"),(0,i.kt)("td",null,"The URLs of images to preview.")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"current"),(0,i.kt)("td",null,(0,i.kt)("code",null,"string")),(0,i.kt)("td",{style:{textAlign:"center"}},"No"),(0,i.kt)("td",null,"The URL of the current image")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"complete"),(0,i.kt)("td",null,(0,i.kt)("code",null,"(res: any) => void")),(0,i.kt)("td",{style:{textAlign:"center"}},"No"),(0,i.kt)("td",null,"The callback function used when the API call completed (always executed whether the call succeeds or fails)")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"fail"),(0,i.kt)("td",null,(0,i.kt)("code",null,"(res: any) => void")),(0,i.kt)("td",{style:{textAlign:"center"}},"No"),(0,i.kt)("td",null,"The callback function for a failed API call")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"success"),(0,i.kt)("td",null,(0,i.kt)("code",null,"(res: Result) => void")),(0,i.kt)("td",{style:{textAlign:"center"}},"No"),(0,i.kt)("td",null,"The callback function for a successful API call")))),(0,i.kt)("h2",{id:"sample-code"},"Sample Code"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"Taro.previewImage({\n  current: '', // The http link of the current image\n  urls: [] // The http links of the images to preview\n})\n")),(0,i.kt)("h2",{id:"api-support"},"API Support"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"API"),(0,i.kt)("th",{parentName:"tr",align:"center"},"WeChat Mini-Program"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Baidu Smart-Program"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Alipay Mini-Program"),(0,i.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,i.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Taro.previewImage"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")))))}u.isMDXComponent=!0}}]);