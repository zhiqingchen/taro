(window.webpackJsonp=window.webpackJsonp||[]).push([[1330],{1395:function(e,t,b){"use strict";b.r(t),b.d(t,"frontMatter",(function(){return a})),b.d(t,"metadata",(function(){return r})),b.d(t,"rightToc",(function(){return O})),b.d(t,"default",(function(){return o}));var c=b(2188),l=b(2189),n=(b(0),b(2190)),a={title:"SocketTask",sidebar_label:"SocketTask"},r={unversionedId:"apis/network/webSocket/SocketTask",id:"version-3.x/apis/network/webSocket/SocketTask",isDocsHomePage:!1,title:"SocketTask",description:"WebSocket \u4efb\u52a1\uff0c\u53ef\u901a\u8fc7 Taro.connectSocket() \u63a5\u53e3\u521b\u5efa\u8fd4\u56de\u3002",source:"@site/versioned_docs/version-3.x/apis/network/webSocket/SocketTask.md",slug:"/apis/network/webSocket/SocketTask",permalink:"/taro/docs/apis/network/webSocket/SocketTask",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.x/apis/network/webSocket/SocketTask.md",version:"3.x",sidebar_label:"SocketTask",sidebar:"version-3.x/API",previous:{title:"Taro.closeSocket(option)",permalink:"/taro/docs/apis/network/webSocket/closeSocket"},next:{title:"Taro.stopLocalServiceDiscovery(option)",permalink:"/taro/docs/apis/network/mdns/stopLocalServiceDiscovery"}},O=[{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",children:[{value:"close",id:"close",children:[]},{value:"onClose",id:"onclose",children:[]},{value:"onError",id:"onerror",children:[]},{value:"onMessage",id:"onmessage",children:[]},{value:"onOpen",id:"onopen",children:[]},{value:"send",id:"send",children:[]}]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"CloseOption",id:"closeoption",children:[]},{value:"OnCloseCallback",id:"onclosecallback",children:[]},{value:"OnCloseCallbackResult",id:"onclosecallbackresult",children:[]},{value:"OnErrorCallback",id:"onerrorcallback",children:[]},{value:"OnErrorCallbackResult",id:"onerrorcallbackresult",children:[]},{value:"OnMessageCallback",id:"onmessagecallback",children:[]},{value:"OnMessageCallbackResult",id:"onmessagecallbackresult",children:[]},{value:"OnOpenCallback",id:"onopencallback",children:[]},{value:"OnOpenCallbackResult",id:"onopencallbackresult",children:[]},{value:"SendOption",id:"sendoption",children:[]}]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6-6",children:[]}],j={rightToc:O};function o(e){var t=e.components,b=Object(l.a)(e,["components"]);return Object(n.b)("wrapper",Object(c.a)({},j,b,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"WebSocket \u4efb\u52a1\uff0c\u53ef\u901a\u8fc7 ",Object(n.b)("a",Object(c.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/network/websocket/SocketTask.html"}),"Taro.connectSocket()")," \u63a5\u53e3\u521b\u5efa\u8fd4\u56de\u3002"),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},Object(n.b)("a",Object(c.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/network/websocket/SocketTask.html"}),"\u53c2\u8003\u6587\u6863"))),Object(n.b)("h2",{id:"\u65b9\u6cd5"},"\u65b9\u6cd5"),Object(n.b)("table",null,Object(n.b)("thead",null,Object(n.b)("tr",null,Object(n.b)("th",null,"\u53c2\u6570"),Object(n.b)("th",null,"\u7c7b\u578b"),Object(n.b)("th",null,"\u8bf4\u660e"))),Object(n.b)("tbody",null,Object(n.b)("tr",null,Object(n.b)("td",null,"socketTaskId"),Object(n.b)("td",null,Object(n.b)("code",null,"number")),Object(n.b)("td",null,"websocket \u5f53\u524d\u7684\u8fde\u63a5 ID\u3002")),Object(n.b)("tr",null,Object(n.b)("td",null,"readyState"),Object(n.b)("td",null,Object(n.b)("code",null,"number")),Object(n.b)("td",null,"websocket \u5f53\u524d\u7684\u8fde\u63a5\u72b6\u6001\u3002")),Object(n.b)("tr",null,Object(n.b)("td",null,"errMsg"),Object(n.b)("td",null,Object(n.b)("code",null,"string")),Object(n.b)("td",null,"websocket \u63a5\u53e3\u8c03\u7528\u7ed3\u679c\u3002")),Object(n.b)("tr",null,Object(n.b)("td",null,"CONNECTING"),Object(n.b)("td",null,Object(n.b)("code",null,"number")),Object(n.b)("td",null,"websocket \u72b6\u6001\u503c\uff1a\u8fde\u63a5\u4e2d\u3002")),Object(n.b)("tr",null,Object(n.b)("td",null,"OPEN"),Object(n.b)("td",null,Object(n.b)("code",null,"number")),Object(n.b)("td",null,"websocket \u72b6\u6001\u503c\uff1a\u5df2\u8fde\u63a5\u3002")),Object(n.b)("tr",null,Object(n.b)("td",null,"CLOSING"),Object(n.b)("td",null,Object(n.b)("code",null,"number")),Object(n.b)("td",null,"websocket \u72b6\u6001\u503c\uff1a\u5173\u95ed\u4e2d\u3002")),Object(n.b)("tr",null,Object(n.b)("td",null,"CLOSED"),Object(n.b)("td",null,Object(n.b)("code",null,"number")),Object(n.b)("td",null,"websocket \u72b6\u6001\u503c\uff1a\u5df2\u5173\u95ed\u3002")),Object(n.b)("tr",null,Object(n.b)("td",null,"ws"),Object(n.b)("td",null,Object(n.b)("code",null,"WebSocket")),Object(n.b)("td",null,"\u6d4f\u89c8\u5668 websocket \u5b9e\u4f8b\u3002\uff08h5 \u7aef\u72ec\u6709\uff09")))),Object(n.b)("h3",{id:"close"},"close"),Object(n.b)("p",null,"\u5173\u95ed WebSocket \u8fde\u63a5"),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},Object(n.b)("a",Object(c.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/network/websocket/SocketTask.close.html"}),"\u53c2\u8003\u6587\u6863"))),Object(n.b)("pre",null,Object(n.b)("code",Object(c.a)({parentName:"pre"},{className:"language-tsx"}),"(option: CloseOption) => void\n")),Object(n.b)("table",null,Object(n.b)("thead",null,Object(n.b)("tr",null,Object(n.b)("th",null,"\u53c2\u6570"),Object(n.b)("th",null,"\u7c7b\u578b"))),Object(n.b)("tbody",null,Object(n.b)("tr",null,Object(n.b)("td",null,"option"),Object(n.b)("td",null,Object(n.b)("code",null,"CloseOption"))))),Object(n.b)("h4",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"API"),Object(n.b)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(n.b)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"\u767e\u5ea6\u5c0f\u7a0b\u5e8f"),Object(n.b)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f"),Object(n.b)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"H5"),Object(n.b)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"SocketTask.close"),Object(n.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(n.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(n.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(n.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(n.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))),Object(n.b)("h3",{id:"onclose"},"onClose"),Object(n.b)("p",null,"\u76d1\u542c WebSocket \u8fde\u63a5\u5173\u95ed\u4e8b\u4ef6"),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},Object(n.b)("a",Object(c.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/network/websocket/SocketTask.onClose.html"}),"\u53c2\u8003\u6587\u6863"))),Object(n.b)("pre",null,Object(n.b)("code",Object(c.a)({parentName:"pre"},{className:"language-tsx"}),"(callback: OnCloseCallback) => void\n")),Object(n.b)("table",null,Object(n.b)("thead",null,Object(n.b)("tr",null,Object(n.b)("th",null,"\u53c2\u6570"),Object(n.b)("th",null,"\u7c7b\u578b"),Object(n.b)("th",null,"\u8bf4\u660e"))),Object(n.b)("tbody",null,Object(n.b)("tr",null,Object(n.b)("td",null,"callback"),Object(n.b)("td",null,Object(n.b)("code",null,"OnCloseCallback")),Object(n.b)("td",null,"WebSocket \u8fde\u63a5\u5173\u95ed\u4e8b\u4ef6\u7684\u56de\u8c03\u51fd\u6570")))),Object(n.b)("h4",{id:"api-\u652f\u6301\u5ea6-1"},"API \u652f\u6301\u5ea6"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"API"),Object(n.b)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(n.b)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"\u767e\u5ea6\u5c0f\u7a0b\u5e8f"),Object(n.b)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f"),Object(n.b)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"H5"),Object(n.b)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"SocketTask.onClose"),Object(n.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(n.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(n.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(n.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(n.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))),Object(n.b)("h3",{id:"onerror"},"onError"),Object(n.b)("p",null,"\u76d1\u542c WebSocket \u9519\u8bef\u4e8b\u4ef6"),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},Object(n.b)("a",Object(c.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/network/websocket/SocketTask.onError.html"}),"\u53c2\u8003\u6587\u6863"))),Object(n.b)("pre",null,Object(n.b)("code",Object(c.a)({parentName:"pre"},{className:"language-tsx"}),"(callback: OnErrorCallback) => void\n")),Object(n.b)("table",null,Object(n.b)("thead",null,Object(n.b)("tr",null,Object(n.b)("th",null,"\u53c2\u6570"),Object(n.b)("th",null,"\u7c7b\u578b"),Object(n.b)("th",null,"\u8bf4\u660e"))),Object(n.b)("tbody",null,Object(n.b)("tr",null,Object(n.b)("td",null,"callback"),Object(n.b)("td",null,Object(n.b)("code",null,"OnErrorCallback")),Object(n.b)("td",null,"WebSocket \u9519\u8bef\u4e8b\u4ef6\u7684\u56de\u8c03\u51fd\u6570")))),Object(n.b)("h4",{id:"api-\u652f\u6301\u5ea6-2"},"API \u652f\u6301\u5ea6"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"API"),Object(n.b)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(n.b)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"\u767e\u5ea6\u5c0f\u7a0b\u5e8f"),Object(n.b)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f"),Object(n.b)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"H5"),Object(n.b)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"SocketTask.onError"),Object(n.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(n.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(n.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(n.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(n.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))),Object(n.b)("h3",{id:"onmessage"},"onMessage"),Object(n.b)("p",null,"\u76d1\u542c WebSocket \u63a5\u53d7\u5230\u670d\u52a1\u5668\u7684\u6d88\u606f\u4e8b\u4ef6"),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},Object(n.b)("a",Object(c.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/network/websocket/SocketTask.onMessage.html"}),"\u53c2\u8003\u6587\u6863"))),Object(n.b)("pre",null,Object(n.b)("code",Object(c.a)({parentName:"pre"},{className:"language-tsx"}),"<T = any>(callback: OnMessageCallback<T>) => void\n")),Object(n.b)("table",null,Object(n.b)("thead",null,Object(n.b)("tr",null,Object(n.b)("th",null,"\u53c2\u6570"),Object(n.b)("th",null,"\u7c7b\u578b"),Object(n.b)("th",null,"\u8bf4\u660e"))),Object(n.b)("tbody",null,Object(n.b)("tr",null,Object(n.b)("td",null,"callback"),Object(n.b)("td",null,Object(n.b)("code",null,"T")),Object(n.b)("td",null,"WebSocket \u63a5\u53d7\u5230\u670d\u52a1\u5668\u7684\u6d88\u606f\u4e8b\u4ef6\u7684\u56de\u8c03\u51fd\u6570")))),Object(n.b)("h4",{id:"api-\u652f\u6301\u5ea6-3"},"API \u652f\u6301\u5ea6"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"API"),Object(n.b)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(n.b)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"\u767e\u5ea6\u5c0f\u7a0b\u5e8f"),Object(n.b)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f"),Object(n.b)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"H5"),Object(n.b)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"SocketTask.onMessage"),Object(n.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(n.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(n.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(n.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(n.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))),Object(n.b)("h3",{id:"onopen"},"onOpen"),Object(n.b)("p",null,"\u76d1\u542c WebSocket \u8fde\u63a5\u6253\u5f00\u4e8b\u4ef6"),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},Object(n.b)("a",Object(c.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/network/websocket/SocketTask.onOpen.html"}),"\u53c2\u8003\u6587\u6863"))),Object(n.b)("pre",null,Object(n.b)("code",Object(c.a)({parentName:"pre"},{className:"language-tsx"}),"(callback: OnOpenCallback) => void\n")),Object(n.b)("table",null,Object(n.b)("thead",null,Object(n.b)("tr",null,Object(n.b)("th",null,"\u53c2\u6570"),Object(n.b)("th",null,"\u7c7b\u578b"),Object(n.b)("th",null,"\u8bf4\u660e"))),Object(n.b)("tbody",null,Object(n.b)("tr",null,Object(n.b)("td",null,"callback"),Object(n.b)("td",null,Object(n.b)("code",null,"OnOpenCallback")),Object(n.b)("td",null,"WebSocket \u8fde\u63a5\u6253\u5f00\u4e8b\u4ef6\u7684\u56de\u8c03\u51fd\u6570")))),Object(n.b)("h4",{id:"api-\u652f\u6301\u5ea6-4"},"API \u652f\u6301\u5ea6"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"API"),Object(n.b)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(n.b)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"\u767e\u5ea6\u5c0f\u7a0b\u5e8f"),Object(n.b)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f"),Object(n.b)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"H5"),Object(n.b)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"SocketTask.onOpen"),Object(n.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(n.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(n.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(n.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(n.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))),Object(n.b)("h3",{id:"send"},"send"),Object(n.b)("p",null,"\u901a\u8fc7 WebSocket \u8fde\u63a5\u53d1\u9001\u6570\u636e"),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},Object(n.b)("a",Object(c.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/network/websocket/SocketTask.send.html"}),"\u53c2\u8003\u6587\u6863"))),Object(n.b)("pre",null,Object(n.b)("code",Object(c.a)({parentName:"pre"},{className:"language-tsx"}),"(option: SendOption) => void\n")),Object(n.b)("table",null,Object(n.b)("thead",null,Object(n.b)("tr",null,Object(n.b)("th",null,"\u53c2\u6570"),Object(n.b)("th",null,"\u7c7b\u578b"))),Object(n.b)("tbody",null,Object(n.b)("tr",null,Object(n.b)("td",null,"option"),Object(n.b)("td",null,Object(n.b)("code",null,"SendOption"))))),Object(n.b)("h4",{id:"api-\u652f\u6301\u5ea6-5"},"API \u652f\u6301\u5ea6"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"API"),Object(n.b)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(n.b)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"\u767e\u5ea6\u5c0f\u7a0b\u5e8f"),Object(n.b)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f"),Object(n.b)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"H5"),Object(n.b)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"SocketTask.send"),Object(n.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(n.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(n.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(n.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(n.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))),Object(n.b)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(n.b)("h3",{id:"closeoption"},"CloseOption"),Object(n.b)("table",null,Object(n.b)("thead",null,Object(n.b)("tr",null,Object(n.b)("th",null,"\u53c2\u6570"),Object(n.b)("th",null,"\u7c7b\u578b"),Object(n.b)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(n.b)("th",null,"\u8bf4\u660e"))),Object(n.b)("tbody",null,Object(n.b)("tr",null,Object(n.b)("td",null,"code"),Object(n.b)("td",null,Object(n.b)("code",null,"number")),Object(n.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(n.b)("td",null,"\u4e00\u4e2a\u6570\u5b57\u503c\u8868\u793a\u5173\u95ed\u8fde\u63a5\u7684\u72b6\u6001\u53f7\uff0c\u8868\u793a\u8fde\u63a5\u88ab\u5173\u95ed\u7684\u539f\u56e0\u3002")),Object(n.b)("tr",null,Object(n.b)("td",null,"complete"),Object(n.b)("td",null,Object(n.b)("code",null,"(res: CallbackResult) => void")),Object(n.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(n.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),Object(n.b)("tr",null,Object(n.b)("td",null,"fail"),Object(n.b)("td",null,Object(n.b)("code",null,"(res: CallbackResult) => void")),Object(n.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(n.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),Object(n.b)("tr",null,Object(n.b)("td",null,"reason"),Object(n.b)("td",null,Object(n.b)("code",null,"string")),Object(n.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(n.b)("td",null,"\u4e00\u4e2a\u53ef\u8bfb\u7684\u5b57\u7b26\u4e32\uff0c\u8868\u793a\u8fde\u63a5\u88ab\u5173\u95ed\u7684\u539f\u56e0\u3002\u8fd9\u4e2a\u5b57\u7b26\u4e32\u5fc5\u987b\u662f\u4e0d\u957f\u4e8e 123 \u5b57\u8282\u7684 UTF-8 \u6587\u672c\uff08\u4e0d\u662f\u5b57\u7b26\uff09\u3002")),Object(n.b)("tr",null,Object(n.b)("td",null,"success"),Object(n.b)("td",null,Object(n.b)("code",null,"(res: CallbackResult) => void")),Object(n.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(n.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))),Object(n.b)("h3",{id:"onclosecallback"},"OnCloseCallback"),Object(n.b)("p",null,"WebSocket \u8fde\u63a5\u5173\u95ed\u4e8b\u4ef6\u7684\u56de\u8c03\u51fd\u6570"),Object(n.b)("pre",null,Object(n.b)("code",Object(c.a)({parentName:"pre"},{className:"language-tsx"}),"(result: OnCloseCallbackResult) => void\n")),Object(n.b)("table",null,Object(n.b)("thead",null,Object(n.b)("tr",null,Object(n.b)("th",null,"\u53c2\u6570"),Object(n.b)("th",null,"\u7c7b\u578b"))),Object(n.b)("tbody",null,Object(n.b)("tr",null,Object(n.b)("td",null,"result"),Object(n.b)("td",null,Object(n.b)("code",null,"OnCloseCallbackResult"))))),Object(n.b)("h3",{id:"onclosecallbackresult"},"OnCloseCallbackResult"),Object(n.b)("table",null,Object(n.b)("thead",null,Object(n.b)("tr",null,Object(n.b)("th",null,"\u53c2\u6570"),Object(n.b)("th",null,"\u7c7b\u578b"),Object(n.b)("th",null,"\u8bf4\u660e"))),Object(n.b)("tbody",null,Object(n.b)("tr",null,Object(n.b)("td",null,"code"),Object(n.b)("td",null,Object(n.b)("code",null,"number")),Object(n.b)("td",null,"\u4e00\u4e2a\u6570\u5b57\u503c\u8868\u793a\u5173\u95ed\u8fde\u63a5\u7684\u72b6\u6001\u53f7\uff0c\u8868\u793a\u8fde\u63a5\u88ab\u5173\u95ed\u7684\u539f\u56e0\u3002")),Object(n.b)("tr",null,Object(n.b)("td",null,"reason"),Object(n.b)("td",null,Object(n.b)("code",null,"string")),Object(n.b)("td",null,"\u4e00\u4e2a\u53ef\u8bfb\u7684\u5b57\u7b26\u4e32\uff0c\u8868\u793a\u8fde\u63a5\u88ab\u5173\u95ed\u7684\u539f\u56e0\u3002")))),Object(n.b)("h3",{id:"onerrorcallback"},"OnErrorCallback"),Object(n.b)("p",null,"WebSocket \u9519\u8bef\u4e8b\u4ef6\u7684\u56de\u8c03\u51fd\u6570"),Object(n.b)("pre",null,Object(n.b)("code",Object(c.a)({parentName:"pre"},{className:"language-tsx"}),"(result: OnErrorCallbackResult) => void\n")),Object(n.b)("table",null,Object(n.b)("thead",null,Object(n.b)("tr",null,Object(n.b)("th",null,"\u53c2\u6570"),Object(n.b)("th",null,"\u7c7b\u578b"))),Object(n.b)("tbody",null,Object(n.b)("tr",null,Object(n.b)("td",null,"result"),Object(n.b)("td",null,Object(n.b)("code",null,"OnErrorCallbackResult"))))),Object(n.b)("h3",{id:"onerrorcallbackresult"},"OnErrorCallbackResult"),Object(n.b)("table",null,Object(n.b)("thead",null,Object(n.b)("tr",null,Object(n.b)("th",null,"\u53c2\u6570"),Object(n.b)("th",null,"\u7c7b\u578b"),Object(n.b)("th",null,"\u8bf4\u660e"))),Object(n.b)("tbody",null,Object(n.b)("tr",null,Object(n.b)("td",null,"errMsg"),Object(n.b)("td",null,Object(n.b)("code",null,"string")),Object(n.b)("td",null,"\u9519\u8bef\u4fe1\u606f")))),Object(n.b)("h3",{id:"onmessagecallback"},"OnMessageCallback"),Object(n.b)("p",null,"WebSocket \u63a5\u53d7\u5230\u670d\u52a1\u5668\u7684\u6d88\u606f\u4e8b\u4ef6\u7684\u56de\u8c03\u51fd\u6570"),Object(n.b)("pre",null,Object(n.b)("code",Object(c.a)({parentName:"pre"},{className:"language-tsx"}),"(result: OnMessageCallbackResult<T>) => void\n")),Object(n.b)("table",null,Object(n.b)("thead",null,Object(n.b)("tr",null,Object(n.b)("th",null,"\u53c2\u6570"),Object(n.b)("th",null,"\u7c7b\u578b"))),Object(n.b)("tbody",null,Object(n.b)("tr",null,Object(n.b)("td",null,"result"),Object(n.b)("td",null,Object(n.b)("code",null,"OnMessageCallbackResult<T>"))))),Object(n.b)("h3",{id:"onmessagecallbackresult"},"OnMessageCallbackResult"),Object(n.b)("table",null,Object(n.b)("thead",null,Object(n.b)("tr",null,Object(n.b)("th",null,"\u53c2\u6570"),Object(n.b)("th",null,"\u7c7b\u578b"),Object(n.b)("th",null,"\u8bf4\u660e"))),Object(n.b)("tbody",null,Object(n.b)("tr",null,Object(n.b)("td",null,"data"),Object(n.b)("td",null,Object(n.b)("code",null,"T")),Object(n.b)("td",null,"\u670d\u52a1\u5668\u8fd4\u56de\u7684\u6d88\u606f")))),Object(n.b)("h3",{id:"onopencallback"},"OnOpenCallback"),Object(n.b)("p",null,"WebSocket \u8fde\u63a5\u6253\u5f00\u4e8b\u4ef6\u7684\u56de\u8c03\u51fd\u6570"),Object(n.b)("pre",null,Object(n.b)("code",Object(c.a)({parentName:"pre"},{className:"language-tsx"}),"(result: OnOpenCallbackResult) => void\n")),Object(n.b)("table",null,Object(n.b)("thead",null,Object(n.b)("tr",null,Object(n.b)("th",null,"\u53c2\u6570"),Object(n.b)("th",null,"\u7c7b\u578b"))),Object(n.b)("tbody",null,Object(n.b)("tr",null,Object(n.b)("td",null,"result"),Object(n.b)("td",null,Object(n.b)("code",null,"OnOpenCallbackResult"))))),Object(n.b)("h3",{id:"onopencallbackresult"},"OnOpenCallbackResult"),Object(n.b)("table",null,Object(n.b)("thead",null,Object(n.b)("tr",null,Object(n.b)("th",null,"\u53c2\u6570"),Object(n.b)("th",null,"\u7c7b\u578b"),Object(n.b)("th",null,"\u8bf4\u660e"))),Object(n.b)("tbody",null,Object(n.b)("tr",null,Object(n.b)("td",null,"header"),Object(n.b)("td",null,Object(n.b)("code",null,"Record<string, any>")),Object(n.b)("td",null,"\u8fde\u63a5\u6210\u529f\u7684 HTTP \u54cd\u5e94 Header")))),Object(n.b)("h3",{id:"sendoption"},"SendOption"),Object(n.b)("table",null,Object(n.b)("thead",null,Object(n.b)("tr",null,Object(n.b)("th",null,"\u53c2\u6570"),Object(n.b)("th",null,"\u7c7b\u578b"),Object(n.b)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(n.b)("th",null,"\u8bf4\u660e"))),Object(n.b)("tbody",null,Object(n.b)("tr",null,Object(n.b)("td",null,"data"),Object(n.b)("td",null,Object(n.b)("code",null,"string | ArrayBuffer")),Object(n.b)("td",{style:{textAlign:"center"}},"\u662f"),Object(n.b)("td",null,"\u9700\u8981\u53d1\u9001\u7684\u5185\u5bb9")),Object(n.b)("tr",null,Object(n.b)("td",null,"complete"),Object(n.b)("td",null,Object(n.b)("code",null,"(res: CallbackResult) => void")),Object(n.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(n.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),Object(n.b)("tr",null,Object(n.b)("td",null,"fail"),Object(n.b)("td",null,Object(n.b)("code",null,"(res: CallbackResult) => void")),Object(n.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(n.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),Object(n.b)("tr",null,Object(n.b)("td",null,"success"),Object(n.b)("td",null,Object(n.b)("code",null,"(res: CallbackResult) => void")),Object(n.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(n.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))),Object(n.b)("h2",{id:"api-\u652f\u6301\u5ea6-6"},"API \u652f\u6301\u5ea6"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"API"),Object(n.b)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(n.b)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"\u767e\u5ea6\u5c0f\u7a0b\u5e8f"),Object(n.b)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f"),Object(n.b)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"H5"),Object(n.b)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"SocketTask.close"),Object(n.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(n.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(n.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(n.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(n.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"SocketTask.onClose"),Object(n.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(n.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(n.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(n.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(n.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"SocketTask.onError"),Object(n.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(n.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(n.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(n.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(n.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"SocketTask.onMessage"),Object(n.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(n.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(n.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(n.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(n.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"SocketTask.onOpen"),Object(n.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(n.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(n.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(n.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(n.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"SocketTask.send"),Object(n.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(n.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(n.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(n.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(n.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))))}o.isMDXComponent=!0},2188:function(e,t,b){"use strict";function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var b=arguments[t];for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&(e[c]=b[c])}return e}).apply(this,arguments)}b.d(t,"a",(function(){return c}))},2189:function(e,t,b){"use strict";function c(e,t){if(null==e)return{};var b,c,l={},n=Object.keys(e);for(c=0;c<n.length;c++)b=n[c],t.indexOf(b)>=0||(l[b]=e[b]);return l}b.d(t,"a",(function(){return c}))},2190:function(e,t,b){"use strict";b.d(t,"a",(function(){return u})),b.d(t,"b",(function(){return p}));var c=b(0),l=b.n(c);function n(e,t,b){return t in e?Object.defineProperty(e,t,{value:b,enumerable:!0,configurable:!0,writable:!0}):e[t]=b,e}function a(e,t){var b=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),b.push.apply(b,c)}return b}function r(e){for(var t=1;t<arguments.length;t++){var b=null!=arguments[t]?arguments[t]:{};t%2?a(Object(b),!0).forEach((function(t){n(e,t,b[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(b)):a(Object(b)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(b,t))}))}return e}function O(e,t){if(null==e)return{};var b,c,l=function(e,t){if(null==e)return{};var b,c,l={},n=Object.keys(e);for(c=0;c<n.length;c++)b=n[c],t.indexOf(b)>=0||(l[b]=e[b]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(c=0;c<n.length;c++)b=n[c],t.indexOf(b)>=0||Object.prototype.propertyIsEnumerable.call(e,b)&&(l[b]=e[b])}return l}var j=l.a.createContext({}),o=function(e){var t=l.a.useContext(j),b=t;return e&&(b="function"==typeof e?e(t):r(r({},t),e)),b},u=function(e){var t=o(e.components);return l.a.createElement(j.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},i=l.a.forwardRef((function(e,t){var b=e.components,c=e.mdxType,n=e.originalType,a=e.parentName,j=O(e,["components","mdxType","originalType","parentName"]),u=o(b),i=c,p=u["".concat(a,".").concat(i)]||u[i]||d[i]||n;return b?l.a.createElement(p,r(r({ref:t},j),{},{components:b})):l.a.createElement(p,r({ref:t},j))}));function p(e,t){var b=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var n=b.length,a=new Array(n);a[0]=i;var r={};for(var O in t)hasOwnProperty.call(t,O)&&(r[O]=t[O]);r.originalType=e,r.mdxType="string"==typeof e?e:c,a[1]=r;for(var j=2;j<n;j++)a[j]=b[j];return l.a.createElement.apply(null,a)}return l.a.createElement.apply(null,b)}i.displayName="MDXCreateElement"}}]);