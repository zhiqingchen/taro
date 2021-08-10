(window.webpackJsonp=window.webpackJsonp||[]).push([[447],{1802:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return f}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),l=function(e){var n=o.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=l(e.components);return o.a.createElement(s.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},d=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(t),d=r,f=u["".concat(c,".").concat(d)]||u[d]||b[d]||a;return t?o.a.createElement(f,i(i({ref:n},s),{},{components:t})):o.a.createElement(f,i({ref:n},s))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,c=new Array(a);c[0]=d;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<a;s++)c[s]=t[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},515:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return p})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return u}));var r=t(3),o=t(7),a=(t(0),t(1802)),c=["components"],i={title:"\u5c0f\u7a0b\u5e8f\u539f\u751f\u4f5c\u7528\u57df\u83b7\u53d6"},p={unversionedId:"relations",id:"version-3.x/relations",isDocsHomePage:!1,title:"\u5c0f\u7a0b\u5e8f\u539f\u751f\u4f5c\u7528\u57df\u83b7\u53d6",description:"\u5728 Taro \u7684\u9875\u9762\u548c\u7ec4\u4ef6\u7c7b\u4e2d\uff0cthis \u6307\u5411\u7684\u662f Taro \u9875\u9762\u6216\u7ec4\u4ef6\u7684\u5b9e\u4f8b\uff0c\u4f8b\u5982",source:"@site/versioned_docs/version-3.x/relations.md",slug:"/relations",permalink:"/taro/docs/relations",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.x/relations.md",version:"3.x"},s=[],l={rightToc:s};function u(e){var n=e.components,t=Object(o.a)(e,c);return Object(a.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"\u5728 Taro \u7684\u9875\u9762\u548c\u7ec4\u4ef6\u7c7b\u4e2d\uff0c",Object(a.b)("inlineCode",{parentName:"p"},"this")," \u6307\u5411\u7684\u662f Taro \u9875\u9762\u6216\u7ec4\u4ef6\u7684\u5b9e\u4f8b\uff0c\u4f8b\u5982"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},"import Taro, { Component } from '@tarojs/taro'\nimport { View } from '@tarojs/components'\n\nexport default class Menu extends Component {\n  static defaultProps = {\n    data: []\n  }\n\n  constructor(props) {\n    super(props)\n    this.state = {\n      checked: props.checked\n    }\n  }\n\n  componentWillMount () {\n    console.log(this) // this -> \u7ec4\u4ef6 Menu \u7684\u5b9e\u4f8b\n  }\n\n  render () {\n    return <View />\n  }\n}\n")),Object(a.b)("p",null,"\u4f46\u662f\u4e00\u822c\u6211\u4eec\u9700\u8981\u83b7\u53d6 Taro \u7684\u9875\u9762\u548c\u7ec4\u4ef6\u6240\u5bf9\u5e94\u7684\u5c0f\u7a0b\u5e8f\u539f\u751f\u9875\u9762\u548c\u7ec4\u4ef6\u7684\u5b9e\u4f8b\uff0c\u8fd9\u4e2a\u65f6\u5019\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7 ",Object(a.b)("inlineCode",{parentName:"p"},"this.$scope")," \u5c31\u80fd\u8bbf\u95ee\u5230\u5b83\u4eec\u3002"),Object(a.b)("p",null,"\u6240\u4ee5\u5f53\u8c03\u7528\u4e00\u4e9b API \u9700\u8981\u4f20\u5165\u5c0f\u7a0b\u5e8f\u7684\u9875\u9762\u6216\u8005\u7ec4\u4ef6\u5b9e\u4f8b\u65f6\uff0c\u53ef\u4ee5\u76f4\u63a5\u4f20\u5165 ",Object(a.b)("inlineCode",{parentName:"p"},"this.$scope"),"\uff0c\u4f8b\u5982 ",Object(a.b)("inlineCode",{parentName:"p"},"Taro.createCanvasContext(canvasId, this)")," \u8fd9\u4e2a API\uff0c\u7b2c\u4e8c\u4e2a\u53c2\u6570\u5c31\u662f\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u5b9e\u4f8b ",Object(a.b)("inlineCode",{parentName:"p"},"this"),"\uff0c\u5728 Taro \u4e2d\u5c31\u53ef\u4ee5\u5982\u4e0b\u4f7f\u7528"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},"Taro.createCanvasContext(canvasId, this.$scope)\n")))}u.isMDXComponent=!0}}]);