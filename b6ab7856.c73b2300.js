(window.webpackJsonp=window.webpackJsonp||[]).push([[1553],{1617:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return c})),r.d(n,"metadata",(function(){return p})),r.d(n,"rightToc",(function(){return i})),r.d(n,"default",(function(){return u}));var t=r(2188),o=r(2189),a=(r(0),r(2190)),c={title:"Render Props"},p={unversionedId:"render-props",id:"version-3.2.0-canary.1/render-props",isDocsHomePage:!1,title:"Render Props",description:"\u81ea 1.3.5 \u8d77\u652f\u6301",source:"@site/versioned_docs/version-3.2.0-canary.1/render-props.md",slug:"/render-props",permalink:"/taro/docs/3.2.0-canary.1/render-props",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.2.0-canary.1/render-props.md",version:"3.2.0-canary.1"},i=[{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",children:[]}],s={rightToc:i};function u(e){var n=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(t.a)({},s,r,{components:n,mdxType:"MDXLayout"}),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"\u81ea 1.3.5 \u8d77\u652f\u6301")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"render props")," \u662f\u6307\u4e00\u79cd\u5728 Taro \u7ec4\u4ef6\u4e4b\u95f4\u4f7f\u7528\u4e00\u4e2a\u503c\u4e3a\u51fd\u6570\u7684 prop \u5171\u4eab\u4ee3\u7801\u7684\u7b80\u5355\u6280\u672f\u3002"),Object(a.b)("p",null,"\u5177\u6709 render prop \u7684\u7ec4\u4ef6\u63a5\u53d7\u4e00\u4e2a\u51fd\u6570\uff0c\u8be5\u51fd\u6570\u8fd4\u56de\u4e00\u4e2a Taro \u5143\u7d20\u5e76\u8c03\u7528\u5b83\u800c\u4e0d\u662f\u5b9e\u73b0\u81ea\u5df1\u7684\u6e32\u67d3\u903b\u8f91\u3002"),Object(a.b)("p",null,"\u4e3e\u4e2a\u4f8b\u5b50\uff0c\u5047\u8bbe\u6211\u4eec\u6709\u4e00\u4e2a\u7ec4\u4ef6\uff0c\u5b83\u53ef\u4ee5\u5448\u73b0\u4e00\u5f20\u5728\u5c4f\u5e55\u4e0a\u8ffd\u9010\u9f20\u6807\u7684\u732b\u7684\u56fe\u7247\u3002\u6211\u4eec\u6216\u8bb8\u4f1a\u4f7f\u7528 <Cat mouse={{ x, y }} prop \u6765\u544a\u8bc9\u7ec4\u4ef6\u9f20\u6807\u7684\u5750\u6807\u4ee5\u8ba9\u5b83\u77e5\u9053\u56fe\u7247\u5e94\u8be5\u5728\u5c4f\u5e55\u54ea\u4e2a\u4f4d\u7f6e\u3002"),Object(a.b)("p",null,"\u6211\u4eec\u53ef\u4ee5\u63d0\u4f9b\u4e00\u4e2a\u5e26\u6709\u51fd\u6570 prop \u7684 ",Object(a.b)("inlineCode",{parentName:"p"},"<Mouse>")," \u7ec4\u4ef6\uff0c\u5b83\u80fd\u591f\u52a8\u6001\u51b3\u5b9a\u4ec0\u4e48\u9700\u8981\u6e32\u67d3\u7684\uff0c\u800c\u4e0d\u662f\u5c06 ",Object(a.b)("inlineCode",{parentName:"p"},"<Cat>")," \u786c\u7f16\u7801\u5230 ",Object(a.b)("inlineCode",{parentName:"p"},"<Mouse>")," \u7ec4\u4ef6\u91cc\uff0c\u5e76\u6709\u6548\u5730\u6539\u53d8\u5b83\u7684\u6e32\u67d3\u7ed3\u679c\u3002"),Object(a.b)("pre",null,Object(a.b)("code",Object(t.a)({parentName:"pre"},{className:"language-jsx"}),"// cat.js\nimport catImage from './cat.jpg'\nclass Cat extends Taro.Component {\n  static defaultProps = {\n    mouse: {\n      x: 0,\n      y: 0\n    }\n  }\n\n  render() {\n    const { mouse } = this.props;\n    return (\n      <Image src={catImage} style={{ position: 'absolute', left: mouse.x, top: mouse.y }} />\n    );\n  }\n}\n\n// mouse.js\nclass Mouse extends Taro.Component {\n  constructor(props) {\n    super(props);\n    this.handleMouseMove = this.handleClick.bind(this);\n    this.state = { x: 0, y: 0 };\n  }\n\n  handleClick(event) {\n    const { x, y }  = event.detail\n    this.setState({\n      x,\n      y\n    });\n  }\n\n  render() {\n    return (\n      <View style={{ height: '100%' }} onClick={this.handleClick}>\n\n        {/*\n          \u6211\u4eec\u53ef\u4ee5\u628a prop \u5f53\u6210\u4e00\u4e2a\u51fd\u6570\uff0c\u52a8\u6001\u5730\u8c03\u6574\u6e32\u67d3\u5185\u5bb9\u3002\n        */}\n        {this.props.renderCat(this.state)}\n      </View>\n    );\n  }\n}\n\n// MouseTracker.js\nclass MouseTracker extends Taro.Component {\n  render() {\n    return (\n      <View>\n        <View>\u70b9\u51fb\u9f20\u6807!</View>\n        {/*\n          Mouse \u5982\u4f55\u6e32\u67d3\u7531 MouseTracker \u7684\u72b6\u6001\u63a7\u5236\n        */}\n        <Mouse renderCat={mouse => (\n          <Cat mouse={mouse} />\n        )}/>\n      </View>\n    );\n  }\n}\n")),Object(a.b)("p",null,"\u73b0\u5728\uff0c\u6211\u4eec\u63d0\u4f9b\u4e86\u4e00\u4e2a render \u65b9\u6cd5 \u8ba9 ",Object(a.b)("inlineCode",{parentName:"p"},"<Mouse>")," \u80fd\u591f\u52a8\u6001\u51b3\u5b9a\u4ec0\u4e48\u9700\u8981\u6e32\u67d3\uff0c\u800c\u4e0d\u662f\u514b\u9686 ",Object(a.b)("inlineCode",{parentName:"p"},"<Mouse>")," \u7ec4\u4ef6\u7136\u540e\u786c\u7f16\u7801\u6765\u89e3\u51b3\u7279\u5b9a\u7684\u7528\u4f8b\u3002"),Object(a.b)("p",null,"\u66f4\u5177\u4f53\u5730\u8bf4\uff0c",Object(a.b)("strong",{parentName:"p"},"render prop \u662f\u4e00\u4e2a\u7528\u4e8e\u544a\u77e5\u7ec4\u4ef6\u9700\u8981\u6e32\u67d3\u4ec0\u4e48\u5185\u5bb9\u7684\u51fd\u6570 prop"),"\u3002"),Object(a.b)("p",null,"\u8fd9\u9879\u6280\u672f\u4f7f\u6211\u4eec\u5171\u4eab\u884c\u4e3a\u975e\u5e38\u5bb9\u6613\u3002\u8981\u83b7\u5f97\u8fd9\u4e2a\u884c\u4e3a\uff0c\u53ea\u8981\u6e32\u67d3\u4e00\u4e2a\u5e26\u6709 render prop \u7684 ",Object(a.b)("inlineCode",{parentName:"p"},"<Mouse>")," \u7ec4\u4ef6\u5c31\u80fd\u591f\u544a\u8bc9\u5b83\u5f53\u524d\u9f20\u6807\u5750\u6807 (x, y) \u8981\u6e32\u67d3\u4ec0\u4e48\u3002"),Object(a.b)("h3",{id:"\u6ce8\u610f\u4e8b\u9879"},"\u6ce8\u610f\u4e8b\u9879"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},Object(a.b)("inlineCode",{parentName:"strong"},"render props")," \u662f\u57fa\u4e8e\u5c0f\u7a0b\u5e8f ",Object(a.b)("inlineCode",{parentName:"strong"},"slot")," \u673a\u5236\u5b9e\u73b0\u7684\u3002")," \u56e0\u6b64\u5b83\u53d7\u5230\u7684\u9650\u5236\u548c ",Object(a.b)("inlineCode",{parentName:"p"},"children \u4e0e\u7ec4\u5408"),"\u7684\u9650\u5236\u4e00\u6837\u591a\uff0c\u66f4\u591a\u8be6\u60c5\u8bf7\u67e5\u770b\u6587\u6863",Object(a.b)("a",Object(t.a)({parentName:"p"},{href:"/taro/docs/3.2.0-canary.1/children#%E6%B3%A8%E6%84%8F%E4%BA%8B%E9%A1%B9"}),"Children\u4e0e\u7ec4\u5408\n"),"\u3002"))}u.isMDXComponent=!0},2188:function(e,n,r){"use strict";function t(){return(t=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e}).apply(this,arguments)}r.d(n,"a",(function(){return t}))},2189:function(e,n,r){"use strict";function t(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}r.d(n,"a",(function(){return t}))},2190:function(e,n,r){"use strict";r.d(n,"a",(function(){return l})),r.d(n,"b",(function(){return m}));var t=r(0),o=r.n(t);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function c(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function p(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?c(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),u=function(e){var n=o.a.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):p(p({},n),e)),r},l=function(e){var n=u(e.components);return o.a.createElement(s.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},d=o.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,a=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),l=u(r),d=t,m=l["".concat(c,".").concat(d)]||l[d]||b[d]||a;return r?o.a.createElement(m,p(p({ref:n},s),{},{components:r})):o.a.createElement(m,p({ref:n},s))}));function m(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var a=r.length,c=new Array(a);c[0]=d;var p={};for(var i in n)hasOwnProperty.call(n,i)&&(p[i]=n[i]);p.originalType=e,p.mdxType="string"==typeof e?e:t,c[1]=p;for(var s=2;s<a;s++)c[s]=r[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);