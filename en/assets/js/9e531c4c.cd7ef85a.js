(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[83825],{22122:function(t,e,l){"use strict";function n(){return(n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var l=arguments[e];for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n])}return t}).apply(this,arguments)}l.d(e,{Z:function(){return n}})},19756:function(t,e,l){"use strict";function n(t,e){if(null==t)return{};var l,n,a={},r=Object.keys(t);for(n=0;n<r.length;n++)l=r[n],e.indexOf(l)>=0||(a[l]=t[l]);return a}l.d(e,{Z:function(){return n}})},3905:function(t,e,l){"use strict";l.d(e,{Zo:function(){return i},kt:function(){return s}});var n=l(67294);function a(t,e,l){return e in t?Object.defineProperty(t,e,{value:l,enumerable:!0,configurable:!0,writable:!0}):t[e]=l,t}function r(t,e){var l=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),l.push.apply(l,n)}return l}function o(t){for(var e=1;e<arguments.length;e++){var l=null!=arguments[e]?arguments[e]:{};e%2?r(Object(l),!0).forEach((function(e){a(t,e,l[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(l)):r(Object(l)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(l,e))}))}return t}function u(t,e){if(null==t)return{};var l,n,a=function(t,e){if(null==t)return{};var l,n,a={},r=Object.keys(t);for(n=0;n<r.length;n++)l=r[n],e.indexOf(l)>=0||(a[l]=t[l]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)l=r[n],e.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(t,l)&&(a[l]=t[l])}return a}var c=n.createContext({}),k=function(t){var e=n.useContext(c),l=e;return t&&(l="function"==typeof t?t(e):o(o({},e),t)),l},i=function(t){var e=k(t.components);return n.createElement(c.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},p=n.forwardRef((function(t,e){var l=t.components,a=t.mdxType,r=t.originalType,c=t.parentName,i=u(t,["components","mdxType","originalType","parentName"]),p=k(l),s=a,h=p["".concat(c,".").concat(s)]||p[s]||d[s]||r;return l?n.createElement(h,o(o({ref:e},i),{},{components:l})):n.createElement(h,o({ref:e},i))}));function s(t,e){var l=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var r=l.length,o=new Array(r);o[0]=p;var u={};for(var c in e)hasOwnProperty.call(e,c)&&(u[c]=e[c]);u.originalType=t,u.mdxType="string"==typeof t?t:a,o[1]=u;for(var k=2;k<r;k++)o[k]=l[k];return n.createElement.apply(null,o)}return n.createElement.apply(null,l)}p.displayName="MDXCreateElement"},78366:function(t,e,l){"use strict";l.r(e),l.d(e,{frontMatter:function(){return o},metadata:function(){return u},toc:function(){return c},default:function(){return i}});var n=l(22122),a=l(19756),r=(l(67294),l(3905)),o={title:"MapContext",sidebar_label:"MapContext"},u={unversionedId:"apis/media/map/MapContext",id:"apis/media/map/MapContext",isDocsHomePage:!1,title:"MapContext",description:"MapContext instance, which can be obtained by Taro.createMapContext.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/apis/media/map/MapContext.md",sourceDirName:"apis/media/map",slug:"/apis/media/map/MapContext",permalink:"/taro/en/docs/next/apis/media/map/MapContext",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/apis/media/map/MapContext.md",version:"current",sidebar_label:"MapContext",frontMatter:{title:"MapContext",sidebar_label:"MapContext"},sidebar:"API",previous:{title:"Taro.createMapContext(mapId, component)",permalink:"/taro/en/docs/next/apis/media/map/createMapContext"},next:{title:"Taro.saveImageToPhotosAlbum(option)",permalink:"/taro/en/docs/next/apis/media/image/saveImageToPhotosAlbum"}},c=[{value:"Methods",id:"methods",children:[{value:"getCenterLocation",id:"getcenterlocation",children:[]},{value:"getRegion",id:"getregion",children:[]},{value:"getRotate",id:"getrotate",children:[]},{value:"getScale",id:"getscale",children:[]},{value:"getSkew",id:"getskew",children:[]},{value:"includePoints",id:"includepoints",children:[]},{value:"moveToLocation",id:"movetolocation",children:[]},{value:"translateMarker",id:"translatemarker",children:[]}]},{value:"Parameters",id:"parameters",children:[{value:"GetCenterLocationOption",id:"getcenterlocationoption",children:[]},{value:"GetCenterLocationSuccessCallback",id:"getcenterlocationsuccesscallback",children:[]},{value:"GetCenterLocationSuccessCallbackResult",id:"getcenterlocationsuccesscallbackresult",children:[]},{value:"GetRegionOption",id:"getregionoption",children:[]},{value:"GetRegionSuccessCallback",id:"getregionsuccesscallback",children:[]},{value:"GetRegionSuccessCallbackResult",id:"getregionsuccesscallbackresult",children:[]},{value:"GetRotateOption",id:"getrotateoption",children:[]},{value:"GetRotateSuccessCallback",id:"getrotatesuccesscallback",children:[]},{value:"GetRotateSuccessCallbackResult",id:"getrotatesuccesscallbackresult",children:[]},{value:"GetScaleOption",id:"getscaleoption",children:[]},{value:"GetScaleSuccessCallback",id:"getscalesuccesscallback",children:[]},{value:"GetScaleSuccessCallbackResult",id:"getscalesuccesscallbackresult",children:[]},{value:"GetSkewOption",id:"getskewoption",children:[]},{value:"GetSkewSuccessCallback",id:"getskewsuccesscallback",children:[]},{value:"GetSkewSuccessCallbackResult",id:"getskewsuccesscallbackresult",children:[]},{value:"IncludePointsOption",id:"includepointsoption",children:[]},{value:"MapPostion",id:"mappostion",children:[]},{value:"MoveToLocationOption",id:"movetolocationoption",children:[]},{value:"TranslateMarkerOption",id:"translatemarkeroption",children:[]},{value:"DestinationOption",id:"destinationoption",children:[]}]},{value:"API Support",id:"api-support-8",children:[]}],k={toc:c};function i(t){var e=t.components,l=(0,a.Z)(t,["components"]);return(0,r.kt)("wrapper",(0,n.Z)({},k,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"MapContext")," instance, which can be obtained by Taro.createMapContext.\n",(0,r.kt)("inlineCode",{parentName:"p"},"MapContext")," is bound to a ","<","map/",">"," component by id, to operate the corresponding ","<","map/",">"," component."),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"getcenterlocation"},"getCenterLocation"),(0,r.kt)("p",null,"Obtain the altitude and longitude of the current map center. The gcj02 coordinate system is returned, which can be used for ",(0,r.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/location/wx.openLocation.html"},"wx.openLocation()")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/media/map/MapContext.getCenterLocation.html"},"Reference"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"(option?: GetCenterLocationOption) => void\n")),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Property"),(0,r.kt)("th",null,"Type"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"option"),(0,r.kt)("td",null,(0,r.kt)("code",null,"GetCenterLocationOption"))))),(0,r.kt)("h4",{id:"api-support"},"API Support"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"API"),(0,r.kt)("th",{parentName:"tr",align:"center"},"WeChat Mini-Program"),(0,r.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,r.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"MapContext.getCenterLocation"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"})))),(0,r.kt)("h3",{id:"getregion"},"getRegion"),(0,r.kt)("p",null,"Acquire the scope of the field of view of the current map"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/media/map/MapContext.getRegion.html"},"Reference"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"(option?: GetRegionOption) => void\n")),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Property"),(0,r.kt)("th",null,"Type"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"option"),(0,r.kt)("td",null,(0,r.kt)("code",null,"GetRegionOption"))))),(0,r.kt)("h4",{id:"api-support-1"},"API Support"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"API"),(0,r.kt)("th",{parentName:"tr",align:"center"},"WeChat Mini-Program"),(0,r.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,r.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"MapContext.getRegion"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"})))),(0,r.kt)("h3",{id:"getrotate"},"getRotate"),(0,r.kt)("p",null,"Acquire the rotation angle of the current map"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/media/map/MapContext.getRotate.html"},"Reference"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"(option?: GetRotateOption) => void\n")),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Property"),(0,r.kt)("th",null,"Type"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"option"),(0,r.kt)("td",null,(0,r.kt)("code",null,"GetRotateOption"))))),(0,r.kt)("h4",{id:"api-support-2"},"API Support"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"API"),(0,r.kt)("th",{parentName:"tr",align:"center"},"WeChat Mini-Program"),(0,r.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,r.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"MapContext.getRotate"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"})))),(0,r.kt)("h3",{id:"getscale"},"getScale"),(0,r.kt)("p",null,"Obtains the zoom level of the current map"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/media/map/MapContext.getScale.html"},"Reference"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"(option?: GetScaleOption) => void\n")),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Property"),(0,r.kt)("th",null,"Type"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"option"),(0,r.kt)("td",null,(0,r.kt)("code",null,"GetScaleOption"))))),(0,r.kt)("h4",{id:"api-support-3"},"API Support"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"API"),(0,r.kt)("th",{parentName:"tr",align:"center"},"WeChat Mini-Program"),(0,r.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,r.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"MapContext.getScale"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"})))),(0,r.kt)("h3",{id:"getskew"},"getSkew"),(0,r.kt)("p",null,"Acquire the tilt angle of the current map"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/media/map/MapContext.getSkew.html"},"Reference"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"(option?: GetSkewOption) => void\n")),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Property"),(0,r.kt)("th",null,"Type"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"option"),(0,r.kt)("td",null,(0,r.kt)("code",null,"GetSkewOption"))))),(0,r.kt)("h4",{id:"api-support-4"},"API Support"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"API"),(0,r.kt)("th",{parentName:"tr",align:"center"},"WeChat Mini-Program"),(0,r.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,r.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"MapContext.getSkew"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"})))),(0,r.kt)("h3",{id:"includepoints"},"includePoints"),(0,r.kt)("p",null,"Zooms in/out the view to show all latitudes and longitudes."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/media/map/MapContext.includePoints.html"},"Reference"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"(option: IncludePointsOption) => void\n")),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Property"),(0,r.kt)("th",null,"Type"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"option"),(0,r.kt)("td",null,(0,r.kt)("code",null,"IncludePointsOption"))))),(0,r.kt)("h4",{id:"api-support-5"},"API Support"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"API"),(0,r.kt)("th",{parentName:"tr",align:"center"},"WeChat Mini-Program"),(0,r.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,r.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"MapContext.includePoints"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"})))),(0,r.kt)("h3",{id:"movetolocation"},"moveToLocation"),(0,r.kt)("p",null,"Moves the map center to the current location. Use with the show-location of the map component."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/media/map/MapContext.moveToLocation.html"},"Reference"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"(option: MoveToLocationOption) => void\n")),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Property"),(0,r.kt)("th",null,"Type"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"option"),(0,r.kt)("td",null,(0,r.kt)("code",null,"MoveToLocationOption"))))),(0,r.kt)("h4",{id:"api-support-6"},"API Support"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"API"),(0,r.kt)("th",{parentName:"tr",align:"center"},"WeChat Mini-Program"),(0,r.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,r.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"MapContext.moveToLocation"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"})))),(0,r.kt)("h3",{id:"translatemarker"},"translateMarker"),(0,r.kt)("p",null,"Translates marker with animation."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/media/map/MapContext.translateMarker.html"},"Reference"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"(option: TranslateMarkerOption) => void\n")),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Property"),(0,r.kt)("th",null,"Type"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"option"),(0,r.kt)("td",null,(0,r.kt)("code",null,"TranslateMarkerOption"))))),(0,r.kt)("h4",{id:"api-support-7"},"API Support"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"API"),(0,r.kt)("th",{parentName:"tr",align:"center"},"WeChat Mini-Program"),(0,r.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,r.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"MapContext.translateMarker"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"})))),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("h3",{id:"getcenterlocationoption"},"GetCenterLocationOption"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Property"),(0,r.kt)("th",null,"Type"),(0,r.kt)("th",{style:{textAlign:"center"}},"Required"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"complete"),(0,r.kt)("td",null,(0,r.kt)("code",null,"(res: any) => void")),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"The callback function used when the API call completed (always executed whether the call succeeds or fails)")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"fail"),(0,r.kt)("td",null,(0,r.kt)("code",null,"(res: any) => void")),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"The callback function for a failed API call")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"success"),(0,r.kt)("td",null,(0,r.kt)("code",null,"(res: Result) => void")),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"The callback function for a successful API call")))),(0,r.kt)("h3",{id:"getcenterlocationsuccesscallback"},"GetCenterLocationSuccessCallback"),(0,r.kt)("p",null,"The callback function for a successful API call"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"(result: GetCenterLocationSuccessCallbackResult) => void\n")),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Property"),(0,r.kt)("th",null,"Type"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"result"),(0,r.kt)("td",null,(0,r.kt)("code",null,"GetCenterLocationSuccessCallbackResult"))))),(0,r.kt)("h3",{id:"getcenterlocationsuccesscallbackresult"},"GetCenterLocationSuccessCallbackResult"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Property"),(0,r.kt)("th",null,"Type"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"latitude"),(0,r.kt)("td",null,(0,r.kt)("code",null,"number")),(0,r.kt)("td",null,"Latitude")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"longitude"),(0,r.kt)("td",null,(0,r.kt)("code",null,"number")),(0,r.kt)("td",null,"Longitude")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"errMsg"),(0,r.kt)("td",null,(0,r.kt)("code",null,"string")),(0,r.kt)("td",null,"Call result")))),(0,r.kt)("h3",{id:"getregionoption"},"GetRegionOption"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Property"),(0,r.kt)("th",null,"Type"),(0,r.kt)("th",{style:{textAlign:"center"}},"Required"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"complete"),(0,r.kt)("td",null,(0,r.kt)("code",null,"(res: any) => void")),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"The callback function used when the API call completed (always executed whether the call succeeds or fails)")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"fail"),(0,r.kt)("td",null,(0,r.kt)("code",null,"(res: any) => void")),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"The callback function for a failed API call")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"success"),(0,r.kt)("td",null,(0,r.kt)("code",null,"(res: Result) => void")),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"The callback function for a successful API call")))),(0,r.kt)("h3",{id:"getregionsuccesscallback"},"GetRegionSuccessCallback"),(0,r.kt)("p",null,"The callback function for a successful API call"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"(result: GetRegionSuccessCallbackResult) => void\n")),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Property"),(0,r.kt)("th",null,"Type"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"result"),(0,r.kt)("td",null,(0,r.kt)("code",null,"GetRegionSuccessCallbackResult"))))),(0,r.kt)("h3",{id:"getregionsuccesscallbackresult"},"GetRegionSuccessCallbackResult"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Property"),(0,r.kt)("th",null,"Type"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"northeast"),(0,r.kt)("td",null,(0,r.kt)("code",null,"number")),(0,r.kt)("td",null,"Altitude and longitude of the Northeast corner")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"southwest"),(0,r.kt)("td",null,(0,r.kt)("code",null,"number")),(0,r.kt)("td",null,"Altitude and longitude of the Southwest corner")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"errMsg"),(0,r.kt)("td",null,(0,r.kt)("code",null,"string")),(0,r.kt)("td",null,"Call result")))),(0,r.kt)("h3",{id:"getrotateoption"},"GetRotateOption"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Property"),(0,r.kt)("th",null,"Type"),(0,r.kt)("th",{style:{textAlign:"center"}},"Required"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"complete"),(0,r.kt)("td",null,(0,r.kt)("code",null,"(res: any) => void")),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"The callback function used when the API call completed (always executed whether the call succeeds or fails)")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"fail"),(0,r.kt)("td",null,(0,r.kt)("code",null,"(res: any) => void")),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"The callback function for a failed API call")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"success"),(0,r.kt)("td",null,(0,r.kt)("code",null,"(res: Result) => void")),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"The callback function for a successful API call")))),(0,r.kt)("h3",{id:"getrotatesuccesscallback"},"GetRotateSuccessCallback"),(0,r.kt)("p",null,"The callback function for a successful API call"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"(result: GetRotateSuccessCallbackResult) => void\n")),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Property"),(0,r.kt)("th",null,"Type"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"result"),(0,r.kt)("td",null,(0,r.kt)("code",null,"GetRotateSuccessCallbackResult"))))),(0,r.kt)("h3",{id:"getrotatesuccesscallbackresult"},"GetRotateSuccessCallbackResult"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Property"),(0,r.kt)("th",null,"Type"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"rotate"),(0,r.kt)("td",null,(0,r.kt)("code",null,"number")),(0,r.kt)("td",null,"The rotation angle")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"errMsg"),(0,r.kt)("td",null,(0,r.kt)("code",null,"string")),(0,r.kt)("td",null,"Call result")))),(0,r.kt)("h3",{id:"getscaleoption"},"GetScaleOption"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Property"),(0,r.kt)("th",null,"Type"),(0,r.kt)("th",{style:{textAlign:"center"}},"Required"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"complete"),(0,r.kt)("td",null,(0,r.kt)("code",null,"(res: any) => void")),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"The callback function used when the API call completed (always executed whether the call succeeds or fails)")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"fail"),(0,r.kt)("td",null,(0,r.kt)("code",null,"(res: any) => void")),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"The callback function for a failed API call")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"success"),(0,r.kt)("td",null,(0,r.kt)("code",null,"(res: Result) => void")),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"The callback function for a successful API call")))),(0,r.kt)("h3",{id:"getscalesuccesscallback"},"GetScaleSuccessCallback"),(0,r.kt)("p",null,"The callback function for a successful API call"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"(result: GetScaleSuccessCallbackResult) => void\n")),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Property"),(0,r.kt)("th",null,"Type"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"result"),(0,r.kt)("td",null,(0,r.kt)("code",null,"GetScaleSuccessCallbackResult"))))),(0,r.kt)("h3",{id:"getscalesuccesscallbackresult"},"GetScaleSuccessCallbackResult"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Property"),(0,r.kt)("th",null,"Type"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"scale"),(0,r.kt)("td",null,(0,r.kt)("code",null,"number")),(0,r.kt)("td",null,"Scaling value")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"errMsg"),(0,r.kt)("td",null,(0,r.kt)("code",null,"string")),(0,r.kt)("td",null,"Call result")))),(0,r.kt)("h3",{id:"getskewoption"},"GetSkewOption"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Property"),(0,r.kt)("th",null,"Type"),(0,r.kt)("th",{style:{textAlign:"center"}},"Required"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"complete"),(0,r.kt)("td",null,(0,r.kt)("code",null,"(res: any) => void")),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"The callback function used when the API call completed (always executed whether the call succeeds or fails)")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"fail"),(0,r.kt)("td",null,(0,r.kt)("code",null,"(res: any) => void")),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"The callback function for a failed API call")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"success"),(0,r.kt)("td",null,(0,r.kt)("code",null,"(res: Result) => void")),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"The callback function for a successful API call")))),(0,r.kt)("h3",{id:"getskewsuccesscallback"},"GetSkewSuccessCallback"),(0,r.kt)("p",null,"The callback function for a successful API call"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"(result: GetSkewSuccessCallbackResult) => void\n")),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Property"),(0,r.kt)("th",null,"Type"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"result"),(0,r.kt)("td",null,(0,r.kt)("code",null,"GetSkewSuccessCallbackResult"))))),(0,r.kt)("h3",{id:"getskewsuccesscallbackresult"},"GetSkewSuccessCallbackResult"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Property"),(0,r.kt)("th",null,"Type"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"skew"),(0,r.kt)("td",null,(0,r.kt)("code",null,"number")),(0,r.kt)("td",null,"Skewing value")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"errMsg"),(0,r.kt)("td",null,(0,r.kt)("code",null,"string")),(0,r.kt)("td",null,"Call result")))),(0,r.kt)("h3",{id:"includepointsoption"},"IncludePointsOption"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Property"),(0,r.kt)("th",null,"Type"),(0,r.kt)("th",{style:{textAlign:"center"}},"Required"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"points"),(0,r.kt)("td",null,(0,r.kt)("code",null,"MapPostion[]")),(0,r.kt)("td",{style:{textAlign:"center"}},"Yes"),(0,r.kt)("td",null,"List of coordinate points to be displayed in the visible area")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"padding"),(0,r.kt)("td",null,(0,r.kt)("code",null,"number[]")),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"Distance between the edge of the rectangle formed by coordinate points and the edge of the map (in pixel). The format is [top, right, bottom, left]. Only the first item of the array can be identified on Android. The padding is consistent for top, bottom, left, and right. Padding parameters are currently not supported on developer tools.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"complete"),(0,r.kt)("td",null,(0,r.kt)("code",null,"(res: any) => void")),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"The callback function used when the API call completed (always executed whether the call succeeds or fails)")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"fail"),(0,r.kt)("td",null,(0,r.kt)("code",null,"(res: any) => void")),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"The callback function for a failed API call")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"success"),(0,r.kt)("td",null,(0,r.kt)("code",null,"(res: Result) => void")),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"The callback function for a successful API call")))),(0,r.kt)("h3",{id:"mappostion"},"MapPostion"),(0,r.kt)("p",null,"List of coordinate points to be displayed in the visual area"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Property"),(0,r.kt)("th",null,"Type"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"latitude"),(0,r.kt)("td",null,(0,r.kt)("code",null,"number")),(0,r.kt)("td",null,"Latitude")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"longitude"),(0,r.kt)("td",null,(0,r.kt)("code",null,"number")),(0,r.kt)("td",null,"Longitude")))),(0,r.kt)("h3",{id:"movetolocationoption"},"MoveToLocationOption"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Property"),(0,r.kt)("th",null,"Type"),(0,r.kt)("th",{style:{textAlign:"center"}},"Required"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"latitude"),(0,r.kt)("td",null,(0,r.kt)("code",null,"number")),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"Latitude")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"longitude"),(0,r.kt)("td",null,(0,r.kt)("code",null,"number")),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"Longitude")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"complete"),(0,r.kt)("td",null,(0,r.kt)("code",null,"(res: any) => void")),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"The callback function used when the API call completed (always executed whether the call succeeds or fails)")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"fail"),(0,r.kt)("td",null,(0,r.kt)("code",null,"(res: any) => void")),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"The callback function for a failed API call")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"success"),(0,r.kt)("td",null,(0,r.kt)("code",null,"(res: Result) => void")),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"The callback function for a successful API call")))),(0,r.kt)("h3",{id:"translatemarkeroption"},"TranslateMarkerOption"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Property"),(0,r.kt)("th",null,"Type"),(0,r.kt)("th",{style:{textAlign:"center"}},"Required"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"autoRotate"),(0,r.kt)("td",null,(0,r.kt)("code",null,"boolean")),(0,r.kt)("td",{style:{textAlign:"center"}},"Yes"),(0,r.kt)("td",null,"Specifies whether to automatically rotate the marker when moving")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"destination"),(0,r.kt)("td",null,(0,r.kt)("code",null,"DestinationOption")),(0,r.kt)("td",{style:{textAlign:"center"}},"Yes"),(0,r.kt)("td",null,"Specifies the destination to which the marker will move")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"markerId"),(0,r.kt)("td",null,(0,r.kt)("code",null,"number")),(0,r.kt)("td",{style:{textAlign:"center"}},"Yes"),(0,r.kt)("td",null,"Specifies the marker")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"rotate"),(0,r.kt)("td",null,(0,r.kt)("code",null,"number")),(0,r.kt)("td",{style:{textAlign:"center"}},"Yes"),(0,r.kt)("td",null,"The rotation angle of the marker")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"animationEnd"),(0,r.kt)("td",null,(0,r.kt)("code",null,"(...args: any[]) => any")),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"The callback function used when an animation ends")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"duration"),(0,r.kt)("td",null,(0,r.kt)("code",null,"number")),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"Animation duration, calculated separately for translation and rotation")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"complete"),(0,r.kt)("td",null,(0,r.kt)("code",null,"(res: any) => void")),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"The callback function used when the API call completed (always executed whether the call succeeds or fails)")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"fail"),(0,r.kt)("td",null,(0,r.kt)("code",null,"(res: any) => void")),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"The callback function for a failed API call")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"success"),(0,r.kt)("td",null,(0,r.kt)("code",null,"(res: Result) => void")),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"The callback function for a successful API call")))),(0,r.kt)("h3",{id:"destinationoption"},"DestinationOption"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Property"),(0,r.kt)("th",null,"Type"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"latitude"),(0,r.kt)("td",null,(0,r.kt)("code",null,"number")),(0,r.kt)("td",null,"Latitude")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"longitude"),(0,r.kt)("td",null,(0,r.kt)("code",null,"number")),(0,r.kt)("td",null,"Longitude")))),(0,r.kt)("h2",{id:"api-support-8"},"API Support"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"API"),(0,r.kt)("th",{parentName:"tr",align:"center"},"WeChat Mini-Program"),(0,r.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,r.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"MapContext.getCenterLocation"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"MapContext.getRegion"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"MapContext.getRotate"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"MapContext.getScale"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"MapContext.getSkew"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"MapContext.includePoints"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"MapContext.moveToLocation"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"MapContext.translateMarker"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"})))))}i.isMDXComponent=!0}}]);