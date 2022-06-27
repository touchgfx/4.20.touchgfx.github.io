"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[4111],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var i=a.createContext({}),u=function(t){var e=a.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},p=function(t){var e=u(t.components);return a.createElement(i.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,i=t.parentName,p=c(t,["components","mdxType","originalType","parentName"]),d=u(n),m=r,h=d["".concat(i,".").concat(m)]||d[m]||s[m]||l;return n?a.createElement(h,o(o({ref:e},p),{},{components:n})):a.createElement(h,o({ref:e},p))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=d;var c={};for(var i in e)hasOwnProperty.call(e,i)&&(c[i]=e[i]);c.originalType=t,c.mdxType="string"==typeof t?t:r,o[1]=c;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},44035:function(t,e,n){var a=n(67294),r=n(25026);e.Z=function(t){const e=t.noShadow||!1,n=t.width,l=t.height,o=(0,r.Z)(t.imageSource);return e?a.createElement("div",{className:"figure noshadow"},a.createElement("a",{href:o,target:"_blank"},a.createElement("img",{width:n,height:l,src:o})),a.createElement("p",null,t.children)):a.createElement("div",{className:"figure"},a.createElement("a",{href:o,target:"_blank"},a.createElement("img",{width:n,height:l,src:o})),a.createElement("p",null,t.children))}},83211:function(t,e,n){n.r(e),n.d(e,{assets:function(){return g},contentTitle:function(){return h},default:function(){return F},frontMatter:function(){return m},metadata:function(){return k},toc:function(){return b}});var a=n(3905),r=n(44035),l=Object.defineProperty,o=Object.defineProperties,c=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,s=(t,e,n)=>e in t?l(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,d=(t,e)=>{for(var n in e||(e={}))u.call(e,n)&&s(t,n,e[n]);if(i)for(var n of i(e))p.call(e,n)&&s(t,n,e[n]);return t};const m={id:"memory-usage",title:"\u30e1\u30e2\u30ea\u4f7f\u7528\u91cf"},h=void 0,k={unversionedId:"basic-concepts/memory-usage",id:"basic-concepts/memory-usage",title:"\u30e1\u30e2\u30ea\u4f7f\u7528\u91cf",description:"",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/basic-concepts/memory-usage.mdx",sourceDirName:"basic-concepts",slug:"/basic-concepts/memory-usage",permalink:"/4.20/ja/docs/basic-concepts/memory-usage",tags:[],version:"current",frontMatter:{id:"memory-usage",title:"\u30e1\u30e2\u30ea\u4f7f\u7528\u91cf"},sidebar:"docs",previous:{title:"\u30aa\u30da\u30ec\u30fc\u30c6\u30a3\u30f3\u30b0\uff65\u30b7\u30b9\u30c6\u30e0",permalink:"/4.20/ja/docs/basic-concepts/operating-system"},next:{title:"\u958b\u767a\u306e\u6982\u8981",permalink:"/4.20/ja/docs/development/development-introduction"}},g={},b=[{value:"\u6982\u8981",id:"introduction",level:2},{value:"\u9759\u7684\u306a\u30e1\u30e2\u30ea\u5272\u308a\u5f53\u3066",id:"static-memory-allocation",level:2},{value:"\u30b9\u30af\u30ea\u30fc\u30f3\u3068\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8",id:"screens-and-widgets",level:3},{value:"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\uff65\u30b3\u30fc\u30c9",id:"application-code",level:3},{value:"\u30a2\u30bb\u30c3\u30c8",id:"assets",level:3},{value:"\u30e1\u30e2\u30ea\u4f7f\u7528\u91cf\u306e\u30c1\u30a7\u30c3\u30af",id:"checking-memory-usage",level:2},{value:"\u5185\u90e8RAM",id:"internal-ram",level:3},{value:"\u5185\u90e8Flash",id:"internal-flash",level:3},{value:"\u5916\u90e8Flash",id:"external-flash",level:3},{value:"\u30b5\u30de\u30ea",id:"summary",level:3},{value:"\u30c7\u30e21",id:"demo-1",level:2},{value:"\u30b5\u30de\u30ea",id:"summary-1",level:3}],f={toc:b};function F(t){var e,n=t,{components:l}=n,s=((t,e)=>{var n={};for(var a in t)u.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(null!=t&&i)for(var a of i(t))e.indexOf(a)<0&&p.call(t,a)&&(n[a]=t[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(e=d(d({},f),s),o(e,c({components:l,mdxType:"MDXLayout"}))),(0,a.kt)("h2",d({},{id:"introduction"}),"\u6982\u8981"),(0,a.kt)("p",null,"\u3053\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u3067\u306f\u3001TouchGFX\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u30e1\u30e2\u30ea\u4f7f\u7528\u91cf\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u307e\u3059\u3002 \u4e00\u822c\u7684\u306aTouchGFX\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306f4\u30bf\u30a4\u30d7\u306e\u30e1\u30e2\u30ea\u3092\u4f7f\u7528\u3057\u307e\u3059\u304c\u3001\u3053\u308c\u306f\u4f7f\u7528\u3059\u308b\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\u306b\u3088\u3063\u3066\u7570\u306a\u308a\u307e\u3059\u3002"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",d({parentName:"tr"},{align:null}),"\u30e1\u30e2\u30ea\uff65\u30bf\u30a4\u30d7"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"\u4f7f\u7528\u6cd5"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"\u5185\u90e8RAM"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"\u5185\u90e8RAM\u306f\u3001\u3059\u3079\u3066\u306e\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u5ea7\u6a19\u3084\u8272\u306a\u3069\u306e\u8a2d\u5b9a\u30c7\u30fc\u30bf\u306b\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002 \u3053\u3053\u306b\u306f\u73fe\u5728\u306e\u30b9\u30af\u30ea\u30fc\u30f3\u306e\u3044\u304f\u3064\u304b\u306e\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u304c\u5272\u308a\u5f53\u3066\u3089\u308c\u307e\u3059\u3002",(0,a.kt)("br",null),"UI\u30bf\u30b9\u30af\u306e\u5b9f\u884c\u6642\u30b9\u30bf\u30c3\u30af\u3092\u542b\u3080\u3001\u30aa\u30da\u30ec\u30fc\u30c6\u30a3\u30f3\u30b0\uff65\u30b7\u30b9\u30c6\u30e0\u306e\u30e1\u30e2\u30ea\u3082\u5185\u90e8RAM\u306b\u3042\u308a\u307e\u3059\u3002 \u30d5\u30a1\u30a4\u30eb\u30b7\u30b9\u30c6\u30e0\u3084\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\uff65\u30c9\u30e9\u30a4\u30d0\u306a\u3069\u3001\u4ed6\u306e\u30bd\u30d5\u30c8\u30a6\u30a7\u30a2\uff65\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u30c7\u30fc\u30bf\u3082\u3059\u3079\u3066\u5185\u90e8RAM\u306b\u914d\u7f6e\u3055\u308c\u307e\u3059\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"\u5185\u90e8Flash"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"\u5185\u90e8Flash\u306f\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3001TouchGFX\u30e9\u30a4\u30d6\u30e9\u30ea\u3001\u4f7f\u7528\u3055\u308c\u308b\u305d\u306e\u4ed6\u306e\u30e9\u30a4\u30d6\u30e9\u30ea\u306e\u30d7\u30ed\u30b0\u30e9\u30e0\uff65\u30b3\u30fc\u30c9\u7528\u306b\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"\u5916\u90e8RAM"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"\u5916\u90e8RAM\u306f\u3001\u901a\u5e38\u306f\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u7528\u306b\u4f7f\u7528\u3055\u308c\u3001\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\uff65\u30ad\u30e3\u30c3\u30b7\u30e5\u306b\u4f7f\u7528\u3055\u308c\u308b\u3053\u3068\u3082\u3042\u308a\u307e\u3059\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"\u5916\u90e8Flash"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"\u5916\u90e8Flash\u306f\u3001\u753b\u50cf\u3001\u30d5\u30a9\u30f3\u30c8\u3001\u30c6\u30ad\u30b9\u30c8\u306e\u4fdd\u5b58\u306b\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002")))),(0,a.kt)("h2",d({},{id:"static-memory-allocation"}),"\u9759\u7684\u306a\u30e1\u30e2\u30ea\u5272\u308a\u5f53\u3066"),(0,a.kt)("p",null,"TouchGFX\u3067\u306f\u9759\u7684\u306a\u30e1\u30e2\u30ea\u5272\u308a\u5f53\u3066\u306e\u307f\u3092\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002 \u3064\u307e\u308a\u3001\u3059\u3079\u3066\u306e\u30e1\u30e2\u30ea\u306f\u4e8b\u524d\u306b\u5272\u308a\u5f53\u3066\u6e08\u307f\u3067\u3042\u308b\u3068\u3044\u3046\u3053\u3068\u3067\u3059\u3002 TouchGFX\u306b\u3088\u3063\u3066\u5b9f\u884c\u6642\u306b\u5272\u308a\u5f53\u3066\u3089\u308c\u308b\u30e1\u30e2\u30ea\u306f\u3042\u308a\u307e\u305b\u3093\u3002 \u3053\u306e\u305f\u3081\u3001\u958b\u59cb\u6642\u306b\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304c\u30e1\u30e2\u30ea\u306e\u30b5\u30a4\u30ba\u306b\u9069\u5408\u3057\u3066\u3044\u308c\u3070\u3001\u30e1\u30e2\u30ea\u4e0d\u8db3\u306b\u9665\u308b\u3053\u3068\u306f\u3042\u308a\u307e\u305b\u3093\u3002"),(0,a.kt)("h3",d({},{id:"screens-and-widgets"}),"\u30b9\u30af\u30ea\u30fc\u30f3\u3068\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8"),(0,a.kt)("p",null,"TouchGFX\u306e\u30e6\u30fc\u30b6\uff65\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9\u306f\u3001\u591a\u6570\u306eC++\u30af\u30e9\u30b9\u3092\u958b\u767a\u3059\u308b\u3053\u3068\u3067\u4f5c\u6210\u3055\u308c\u307e\u3059\u3002 \u30af\u30e9\u30b9\u306f\u3001\u30b9\u30af\u30ea\u30fc\u30f3\u306e\u8a2d\u8a08\u6642\u306bTouchGFX Designer\u306b\u3088\u3063\u3066\u4f5c\u6210\u3055\u308c\u307e\u3059\u3002 For each screen designed in TouchGFX Designer you automatically get a number of classes (the ",(0,a.kt)("a",d({parentName:"p"},{href:"../development/ui-development/software-architecture/model-view-presenter-design-pattern"}),"MVP")," architecture). When you show a screen on the display objects of the classes is automatically allocated by TouchGFX in internal RAM."),(0,a.kt)("p",null,"\u30b9\u30af\u30ea\u30fc\u30f3\u304b\u3089\u5225\u306e\u30b9\u30af\u30ea\u30fc\u30f3\u306b\u5909\u66f4\u3059\u308b\u3068\u3001\u524d\u306e\u30b9\u30af\u30ea\u30fc\u30f3\u306b\u5272\u308a\u5f53\u3066\u3089\u308c\u3066\u3044\u305f\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f\u4f7f\u7528\u3055\u308c\u306a\u304f\u306a\u308a\u3001\u65b0\u3057\u3044\u30b9\u30af\u30ea\u30fc\u30f3\u306e\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306e\u307f\u304c\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002 \u3057\u305f\u304c\u3063\u3066\u3001\u65b0\u3057\u3044\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f\u3001\u524d\u306e\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u304c\u5272\u308a\u5f53\u3066\u3089\u308c\u3066\u3044\u305f\u5185\u90e8RAM\u306e\u5834\u6240\u306b\u5272\u308a\u5f53\u3066\u3089\u308c\u307e\u3059\uff08\u524d\u306e\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u304c\u4e0a\u66f8\u304d\u3055\u308c\u307e\u3059\uff09\u3002 \u5185\u90e8RAM\u306f\u4e00\u5ea6\u306b1\u3064\u306e\u30b9\u30af\u30ea\u30fc\u30f3\u306e\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306e\u307f\u3092\u4fdd\u6301\u3057\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u5b9a\u7fa9\u3055\u308c\u305f\u30af\u30e9\u30b9\u306b\u57fa\u3065\u3044\u3066\u3001C++\u30b3\u30f3\u30d1\u30a4\u30e9\u306f\u6700\u3082\u5927\u304d\u3044\u30b9\u30af\u30ea\u30fc\u30f3\u306e\u30af\u30e9\u30b9\u306e\u30b5\u30a4\u30ba\u3092\u8a08\u7b97\u3057\u3001\u305d\u308c\u3089\u306e\u30af\u30e9\u30b9\u7528\u306b\u30e1\u30e2\u30ea\u3092\u4e88\u7d04\u3057\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u3064\u307e\u308a\u3001\u5185\u90e8RAM\u306e\u30e1\u30e2\u30ea\u4f7f\u7528\u91cf\u306f\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u5185\u306e\u30b9\u30af\u30ea\u30fc\u30f3\u306e\u6570\u306b\u3088\u3063\u3066\u6c7a\u307e\u308b\u306e\u3067\u306f\u306a\u304f\u3001\u6700\u3082\u5927\u304d\u3044\u30b9\u30af\u30ea\u30fc\u30f3\u306e\u30b5\u30a4\u30ba\u306b\u3088\u3063\u3066\u6c7a\u307e\u308a\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u3053\u308c\u3089\u306e\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u7528\u306b\u78ba\u4fdd\u3055\u308c\u308b\u30e1\u30e2\u30ea\u306f\u3001FrontendHeap\u3068\u547c\u3070\u308c\u307e\u3059\u3002"),(0,a.kt)("p",null,"TouchGFX"),(0,a.kt)("h3",d({},{id:"application-code"}),"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\uff65\u30b3\u30fc\u30c9"),(0,a.kt)("p",null,"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\uff65\u30b3\u30fc\u30c9\u306f\u901a\u5e38\u306f\u5185\u90e8Flash\u5185\u306b\u914d\u7f6e\u3055\u308c\u307e\u3059\u3002 \u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\uff65\u30b3\u30fc\u30c9\u306f\u3001\u30e6\u30fc\u30b6\u8a18\u8ff0\u306e\u30b3\u30fc\u30c9\u3001TouchGFX Designer\u306b\u3088\u3063\u3066\u751f\u6210\u3055\u308c\u308b\u30b3\u30fc\u30c9\u3001TouchGFX\u30e9\u30a4\u30d6\u30e9\u30ea\u3084\u30e6\u30fc\u30b6\u304c\u4f7f\u7528\u3059\u308b\u4ed6\u306e\u30e9\u30a4\u30d6\u30e9\u30ea\u304b\u3089\u306e\u30b3\u30fc\u30c9\u3067\u69cb\u6210\u3055\u308c\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u30e6\u30fc\u30b6\u304c\u591a\u304f\u306e\u30b3\u30fc\u30c9\u3092\u8a18\u8ff0\u3057\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u591a\u304f\u306e\u30b9\u30af\u30ea\u30fc\u30f3\u3092\u8ffd\u52a0\u3059\u308c\u3070\u3001\u5f53\u7136\u306a\u304c\u3089\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\uff65\u30b3\u30fc\u30c9\u306e\u91cf\u3082\u5897\u5927\u3057\u307e\u3059\u3002 \u30e9\u30a4\u30d6\u30e9\u30ea\u304b\u3089\u53d6\u5f97\u3055\u308c\u308b\u30b3\u30fc\u30c9\u306e\u91cf\u306f\u3001\u6a5f\u80fd\u3092\u6700\u521d\u306b\u4f7f\u7528\u3059\u308b\u6642\u70b9\u3067\u5897\u5927\u3057\u307e\u3059\u3002 \u305f\u3068\u3048\u3070\u3001\u6700\u521d\u306b\u3042\u308bButton\u3092\u30b9\u30af\u30ea\u30fc\u30f3\u306b\u8ffd\u52a0\u3059\u308b\u3068\u3001TouchGFX\u30e9\u30a4\u30d6\u30e9\u30ea\u306eButton\u30b3\u30fc\u30c9\u304c\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u542b\u3081\u3089\u308c\u3001\u30b3\u30fc\u30c9\u91cf\u304c\u5897\u5927\u3057\u307e\u3059\u3002 2\u56de\u76ee\u306bButton\u3092\u540c\u3058\uff08\u307e\u305f\u306f\u5225\u306e\uff09\u30b9\u30af\u30ea\u30fc\u30f3\u306b\u8ffd\u52a0\u3059\u308b\u3068\u304d\u306b\u306f\u3001TouchGFX\u30e9\u30a4\u30d6\u30e9\u30ea\u304b\u3089\u8ffd\u52a0\u306e\u30b3\u30fc\u30c9\u306f\u53d6\u5f97\u3055\u308c\u306a\u3044\u306e\u3067\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u30b3\u30fc\u30c9\u91cf\u306f\u3001\u30e6\u30fc\u30b6\u304c\u8a18\u8ff0\u3057\u305f\u30b3\u30fc\u30c9\u5206\u304bTouchGFX Designer\u306b\u3088\u3063\u3066\u751f\u6210\u3055\u308c\u305f\u5206\u3057\u304b\u5897\u5927\u3057\u307e\u305b\u3093\u3002"),(0,a.kt)("h3",d({},{id:"assets"}),"\u30a2\u30bb\u30c3\u30c8"),(0,a.kt)("p",null,"\u753b\u50cf\u3001\u30c6\u30ad\u30b9\u30c8\u3001\u30d5\u30a9\u30f3\u30c8\u306a\u3069\u306e\u30a2\u30bb\u30c3\u30c8\u306f\u3001c++\u30d5\u30a1\u30a4\u30eb\u306b\u5909\u63db\u3055\u308c\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u30ea\u30f3\u30af\u3055\u308c\u307e\u3059\u3002 \u30a2\u30bb\u30c3\u30c8\u306e\u30c7\u30fc\u30bf\u306f\u3001\u901a\u5e38\u306f\u5916\u90e8Flash\u306b\u914d\u7f6e\u3055\u308c\u307e\u3059\u304c\u3001\u5185\u90e8Flash\u306b\u3082\u914d\u7f6e\u3055\u308c\u308b\u3053\u3068\u304c\u3042\u308a\u307e\u3059\u3002 \u3053\u308c\u306f\u30ea\u30f3\u30ab\uff65\u30b9\u30af\u30ea\u30d7\u30c8\u3067\u6307\u5b9a\u3057\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u753b\u50cf\u3092\u8ffd\u52a0\u3059\u308b\u3068\u3001\u753b\u50cf\u306e\u30b5\u30a4\u30ba\u306b\u6bd4\u4f8b\u3057\u3066\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u30b5\u30a4\u30ba\u304c\u5897\u5927\u3057\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u30c6\u30ad\u30b9\u30c8\u3092\u8ffd\u52a0\u3059\u308b\u3068\u3001\u30c6\u30ad\u30b9\u30c8\u306e1\u6587\u5b57\u306b\u3064\u304d2\u30d0\u30a4\u30c8\u305a\u3064\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304c\u5897\u5927\u3057\u307e\u3059\u3002 \u540c\u3058\u6587\u5b57\u5217\u30922\u56de\u4f7f\u7528\u3059\u308b\u5834\u5408\u3001\u542b\u3081\u3089\u308c\u308b\u306e\u306f1\u56de\u3060\u3051\u3067\u3059\u3002"),(0,a.kt)("p",null,"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3067\u4f7f\u7528\u3055\u308c\u308b\u6587\u5b57\u306e\u307f\u304c\u3001\u30d5\u30a9\u30f3\u30c8\uff65\u30d5\u30a1\u30a4\u30eb\u304b\u3089\u53d6\u5f97\u3055\u308c\u307e\u3059\u3002 \u3064\u307e\u308a\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3067\u5927\u6587\u5b57\u306eA\u304b\u3089Z\u306e\u307f\u3092\u4f7f\u7528\u3059\u308b\u5834\u5408\u3001\u5c0f\u6587\u5b57\u306ea\u304b\u3089z\u306e\u30d5\u30a9\u30f3\u30c8\u306f\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u542b\u3081\u3089\u308c\u307e\u305b\u3093\u3002 \u3053\u308c\u3089\u306e\u5c0f\u6587\u5b57\u3092\u4f7f\u7528\u3059\u308b\u30c6\u30ad\u30b9\u30c8\u3092\u5f8c\u3067\u8ffd\u52a0\u3057\u305f\u5834\u5408\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u30d5\u30a9\u30f3\u30c8\uff65\u30c7\u30fc\u30bf\u306e\u30b5\u30a4\u30ba\u304c\u5897\u5927\u3057\u307e\u3059\u3002"),(0,a.kt)("p",null,"Flash\u5185\u306e\u6587\u5b57\u306e\u30b5\u30a4\u30ba\u306f\u3001\u9078\u629e\u3055\u308c\u305f\u30d5\u30a9\u30f3\u30c8\uff65\u30b5\u30a4\u30ba\u306b\u3088\u3063\u3066\u7570\u306a\u308a\u307e\u3059\u3002 \u30d5\u30a9\u30f3\u30c8\uff65\u30b5\u30a4\u30ba\u3092\u5897\u3084\u3059\u3068\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u30b5\u30a4\u30ba\u3082\u5897\u3048\u307e\u3059\u3002"),(0,a.kt)("h2",d({},{id:"checking-memory-usage"}),"\u30e1\u30e2\u30ea\u4f7f\u7528\u91cf\u306e\u30c1\u30a7\u30c3\u30af"),(0,a.kt)("p",null,"\u7279\u5b9a\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u30e1\u30e2\u30ea\u4f7f\u7528\u91cf\u306f\u3001\u30ea\u30f3\u30ab\u306b\u3088\u3063\u3066\u751f\u6210\u3055\u308c\u308b\u30de\u30c3\u30d7\uff65\u30d5\u30a1\u30a4\u30eb\u3092\u8abf\u3079\u308b\u3068\u308f\u304b\u308a\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u3053\u3053\u3067\u306f\u3001IAR Embedded Workbench\u306b\u3088\u3063\u3066\u751f\u6210\u3055\u308c\u305f\u30de\u30c3\u30d7\uff65\u30d5\u30a1\u30a4\u30eb\u3092\u8abf\u3079\u3066\u307f\u307e\u3059\u3002 \u4ed6\u306e\u30b3\u30f3\u30d1\u30a4\u30e9\u3067\u3082\u540c\u3058\u3088\u3046\u306a\u30de\u30c3\u30d7\uff65\u30d5\u30a1\u30a4\u30eb\u304c\u751f\u6210\u3055\u308c\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u6700\u521d\u306b\u3001TouchGFX Designer\u3067\u3001STM32F746Discovery\u8a55\u4fa1\u30ad\u30c3\u30c8\u7528\u306e\u7a7a\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002"),(0,a.kt)(r.Z,{imageSource:"/img/basic-concepts/memory-usage/create-project-4.17.png",noShadow:"true",mdxType:"Figure"},"Box\u3068Button\u3092\u542b\u3080STM32F746\u30d7\u30ed\u30b8\u30a7\u30af\u30c8"),(0,a.kt)("p",null,"\u3053\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092IAR\u3067\u958b\u3044\u305f\u5f8c\u3001IAR\u306b\u3088\u3063\u3066.MAP\u30d5\u30a1\u30a4\u30eb\u304c\u751f\u6210\u3055\u308c\u305f\u3053\u3068\u3092\u30d7\u30ed\u30d1\u30c6\u30a3\u3067\u78ba\u8a8d\u3057\u307e\u3059\u3002"),(0,a.kt)(r.Z,{imageSource:"/img/basic-concepts/memory-usage/enable-map-file.png",noShadow:"true",mdxType:"Figure"},"\u30ea\u30f3\u30ab\uff65\u30de\u30c3\u30d7\uff65\u30d5\u30a1\u30a4\u30eb\u3092\u751f\u6210"),(0,a.kt)("p",null,"IAR\u3067\u306e\u30b3\u30f3\u30d1\u30a4\u30eb\u5f8c\u3001\u30ea\u30f3\u30ab\uff65\u30de\u30c3\u30d7\uff65\u30d5\u30a1\u30a4\u30ebSTM32F746G_DISCO.map\u304c\u3001EWARM/STM32F746G_DISCO/List\u30d5\u30a9\u30eb\u30c0\u5185\u306b\u3042\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3067\u304d\u307e\u3059\u3002"),(0,a.kt)("p",null,"IAR\u306e\u30ea\u30f3\u30ab\uff65\u30de\u30c3\u30d7\uff65\u30d5\u30a1\u30a4\u30eb\u306b\u306f\u3001\u308f\u304b\u308a\u3084\u3059\u3044\u30b5\u30de\u30ea\u304c\u542b\u307e\u308c\u3066\u3044\u307e\u3059\u3002 MODULE SUMMARY\u3092\u898b\u3066\u307f\u307e\u3057\u3087\u3046\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-cpp"}),"*******************************************************************************\n*** MODULE SUMMARY\n***\n\n    Module                                   ro code  ro data  rw data\n    ------                                   -------  -------  -------\ncommand line/config:\n    ------------------------------------------------------------------\n    Total:\n\nC:\\TouchGFXProjectsDocumentation\\STM32F746MemoryUsage\\EWARM\\STM32F746G_DISCO\\Obj: [1]\n    ApplicationFontProvider.o                              20\n    BitmapDatabase.o                              12       40\n    Blue_Buttons_Round_Edge_small.o                    40'800\n    Blue_Buttons_Round_Edge_small_pressed.o            40'800\n    Font_verdana_10_4bpp_0.o                               24\n    Font_verdana_20_4bpp_0.o                               72\n    Font_verdana_40_4bpp_0.o                              280\n    FrontendApplication.o                         46       60\n    FrontendApplicationBase.o                    706      816\n    GeneratedFont.o                               84       84\n    Kerning_verdana_10_4bpp.o                               4\n    Kerning_verdana_20_4bpp.o                               4\n    Kerning_verdana_40_4bpp.o                               4\n    Model.o                                       10\n    OSWrappers.o                                 156        1        9\n    STM32DMA.o                                   898      176\n    STM32TouchController.o                       162       24        4\n...\n    heap_4.o                                     444            32'792\n...\ntouchgfx_core.a: [7]\n    AbstractButton.o                             136\n    AbstractPartition.o                            8\n    Application.o                              2'218      290       28\n    Bitmap.o                                   1'064      604       36\n    Box.o                                        108      104\n    Button.o                                     276      308\n    ConstFont.o                                   62\n    Container.o                                  510      396\n    DMA.o                                        558      252\n    DisplayTransformation.o                      192\n    Drawable.o                                   418\n    FontManager.o                                 12                 4\n    Gestures.o                                   364       60\n    HAL.o                                      1'758      544       18\n    LCD24bpp.o                                 2'732    1'604       80\n    Screen.o                                   1'924      124\n    TouchCalibration.o                           252                76\n    TypedText.o                                                     14\n    ------------------------------------------------------------------\n    Total:                                    12'728    4'286      256\n\n    Gaps                                                    4        3\n    Linker created                                         36    2'560\n----------------------------------------------------------------------\n    Grand Total:                              38'676   88'973   42'731\n")),(0,a.kt)("p",null,"\u3053\u306e\u30c6\u30fc\u30d6\u30eb\u306b\u306f3\u5217\u306e\u6570\u5024\u304c\u3042\u308a\u307e\u3059\u3002 ro code\u3068ro data\u306f\u8aad\u53d6\u308a\u5c02\u7528\u3067\u3001Flash\u5185\u306b\u914d\u7f6e\u3055\u308c\u3066\u3044\u307e\u3059\u3002 rw data\u306f\u975e\u5b9a\u6570\u306e\u8aad\u307f\u66f8\u304d\u5909\u6570\u3067\u3001RAM\u306b\u914d\u7f6e\u3055\u308c\u3066\u3044\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u30c6\u30fc\u30d6\u30eb\u5185\u306e\u884c\u306f\u30017\u30d6\u30ed\u30c3\u30af\u306b\u5206\u5272\u3055\u308c\u3066\u3044\u307e\u3059\u3002 \u6700\u521d\u306e\u30d6\u30ed\u30c3\u30af\u306f\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u5185\u306e\u3059\u3079\u3066\u306e.cpp\u30d5\u30a1\u30a4\u30eb\u3067\u3059\u3002 \u6b21\u306e6\u30d6\u30ed\u30c3\u30af\u306f\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3067\u4f7f\u7528\u3055\u308c\u308b\u30e9\u30a4\u30d6\u30e9\u30ea\u3067\u3059\uff08.a\u30d5\u30a1\u30a4\u30eb\uff09\u3002 \u6700\u5f8c\u306e1\u3064\u304cTouchGFX\u30e9\u30a4\u30d6\u30e9\u30ea\u3067\u3059\u3002"),(0,a.kt)("p",null,'\u4e0a\u8a18\u304b\u3089\u306f\u3001TouchGFX\u30e9\u30a4\u30d6\u30e9\u30ea\uff08"touchgfx_core.a: ',"[7]",'"\u30bb\u30af\u30b7\u30e7\u30f3\uff09\u306b\u3088\u3063\u306612,728\u30d0\u30a4\u30c8\u306e\u30b3\u30fc\u30c9\uff08\u304a\u3088\u30734,286\u30d0\u30a4\u30c8\u306e\u5b9a\u6570\u30c7\u30fc\u30bf\uff09\u304c\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u8ffd\u52a0\u3055\u308c\u3066\u3044\u308b\u3053\u3068\u304c\u308f\u304b\u308a\u307e\u3059\u3002'),(0,a.kt)("h3",d({},{id:"internal-ram"}),"\u5185\u90e8RAM"),(0,a.kt)("p",null,"\u5185\u90e8RAM\u306e\u5408\u8a08\u4f7f\u7528\u91cf\u3092\u898b\u3064\u3051\u308b\u306b\u306f\u3001Module Summary\u30c6\u30fc\u30d6\u30eb\u306e\u4e00\u756a\u4e0b\u306eGrand Total\u884c\u3092\u78ba\u8a8d\u3057\u307e\u3059\u3002 3\u3064\u76ee\u306e\u5217\u304c\u5185\u90e8RAM\u3067\u3059\u3002 \u3064\u307e\u308a\u3001\u3053\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3067\u306f42,731\u30d0\u30a4\u30c8\u306e\u5185\u90e8RAM\u304c\u4f7f\u7528\u3055\u308c\u3066\u3044\u307e\u3059\u3002 TouchGFX\u30e9\u30a4\u30d6\u30e9\u30ea\u306e\u5408\u8a08\u3092\u898b\u308b\u3068\u3001TouchGFX\u30e9\u30a4\u30d6\u30e9\u30ea","[7]","\u306b\u3088\u3063\u3066\u4f7f\u7528\u3055\u308c\u3066\u3044\u308b\u306e\u306f256\u30d0\u30a4\u30c8\u3067\u3042\u308b\u3053\u3068\u304c\u308f\u304b\u308a\u307e\u3059\u3002 32,792\u30d0\u30a4\u30c8\u304cheap_4.o\u306b\u3088\u3063\u3066\u4f7f\u7528\u3055\u308c\u3066\u3044\u307e\u3059\u3002 \u3053\u308c\u306fFREERTOS\u7528\u306e\u30c0\u30a4\u30ca\u30df\u30c3\u30af\uff65\u30e1\u30e2\u30ea\uff65\u30d2\u30fc\u30d7\u3067\u3059\u3002 32 KB\u304c\u30c7\u30d5\u30a9\u30eb\u30c8\u5024\u3067\u3059\u304c\u3001\u3053\u306e\u30d2\u30fc\u30d7\uff65\u30b5\u30a4\u30ba\u306fSTM32CubeMX\u3067\u8a2d\u5b9a\u53ef\u80fd\u3067\u3059\u3002 \u901a\u5e38\u306eTouchGFX\u30d7\u30ed\u30b0\u30e9\u30e0\u3067\u306f\u3001\u4e3b\u306b\u30e6\u30fc\u30b6\uff65\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9\uff65\u30bf\u30b9\u30af\u7528\u306e\u30b9\u30bf\u30c3\u30af\u3092\u5272\u308a\u5f53\u3066\u308b\u305f\u3081\u306b\u3001\u3053\u306e\u30d2\u30fc\u30d7\u304b\u3089\u6570Kb\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002"),(0,a.kt)("p",null,"FrontendHeap\u3092\u691c\u7d22\u3059\u308b\u3068\u3001\u30b9\u30af\u30ea\u30fc\u30f3\uff65\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306e\u30b5\u30a4\u30ba\u3092\u898b\u3064\u3051\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-cpp"}),"FrontendHeap::getInstance()::instance\n                        0x2000'95d0   0x240  Data  Gb  TouchGFXConfiguration.o [1]\n")),(0,a.kt)("p",null,"\u30e6\u30fc\u30b6\uff65\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9\u306b\u5fc5\u8981\u306a\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u304c\u30010x240\u30d0\u30a4\u30c8= 576\u30d0\u30a4\u30c8\u3092\u5360\u3081\u3066\u3044\u307e\u3059\u3002"),(0,a.kt)("h3",d({},{id:"internal-flash"}),"\u5185\u90e8Flash"),(0,a.kt)("p",null,"Grand Total\u884c\u304b\u3089\u3001\u3053\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304c38,676\u30d0\u30a4\u30c8\u306e\u30b3\u30fc\u30c9\u306888,973\u30d0\u30a4\u30c8\u306e\u30c7\u30fc\u30bf\u3092\u4f7f\u7528\u3057\u3066\u3044\u308b\u3053\u3068\u304c\u308f\u304b\u308a\u307e\u3059\u3002 \u3053\u306e\u3046\u3061\u5185\u90e8Flash\u306f\u4e00\u90e8\u306e\u307f\u3067\u3059\u3002 \u5c11\u306a\u304f\u3068\u3082Button\u306e2\u3064\u306e\u753b\u50cf\u306f\u5916\u90e8Flash\u306b\u3042\u308a\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u5185\u90e8Flash\u306b\u53ce\u3081\u3089\u308c\u308b\u30b3\u30fc\u30c9\u3068\u30c7\u30fc\u30bf\u306e\u91cf\u3092\u78ba\u8a8d\u3059\u308b\u305f\u3081\u3001\u6700\u521d\u306bPLACEMENT SUMMARY\u3092\u30c1\u30a7\u30c3\u30af\u3057\u3066\u307f\u307e\u3059\uff08\u3044\u304f\u3064\u304b\u306e\u8a73\u7d30\u90e8\u5206\u306f\u524a\u9664\u3057\u3066\u3042\u308a\u307e\u3059\uff09\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-cpp"}),'*******************************************************************************\n*** PLACEMENT SUMMARY\n***\n\n"A0":  place at address 0x800\'0000 { ro section .intvec };\n"P1":  place in [from 0x800\'0000 to 0x80f\'ffff] { ro };\n"P2":  place in [from 0x2000\'0000 to 0x2004\'ffff] { rw };\n"P3":  place in [from 0x9000\'0000 to 0x90ff\'ffff] {\n          section ExtFlashSection, section FontFlashSection,\n          section TextFlashSection };\n')),(0,a.kt)("p",null,'\u5185\u90e8Flash\u306f\u3001\u30a2\u30c9\u30ec\u30b90x08000000\u304b\u3089\u59cb\u307e\u308b\u90e8\u5206\u3067\u3059\u3002 "A0"\u3068"P1"\u3068\u3044\u30462\u3064\u306e\u9818\u57df\u306b\u5bfe\u5fdc\u3057\u307e\u3059\u3002'),(0,a.kt)("p",null,"\u30de\u30c3\u30d7\uff65\u30d5\u30a1\u30a4\u30eb\u3092\u5c11\u3057\u8a73\u3057\u304f\u898b\u3066\u307f\u308b\u3068\u3001\u3053\u308c\u3089\u306e\u9818\u57df\u306b\u4f55\u304c\u914d\u7f6e\u3055\u308c\u3066\u3044\u308b\u306e\u304b\u308f\u304b\u308a\u307e\u3059\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-cpp",metastring:"{5-5,15-15}","{5-5,15-15}":!0}),"  Section                Kind         Address      Size  Object\n  -------                ----         -------      ----  ------\n\"A0\":                                             0x1c8\n  .intvec                ro code   0x800'0000     0x1c8  startup_stm32f746xx.o [1]\n                                 - 0x800'01c8     0x1c8\n\n\"P1\":                                             0xb05d\n  .text                   ro code   0x800'01c8     0x9b8  main.o [1]\n  .text                   ro code   0x800'0b80      0x14  memset.o [5]\n...\n  .text                   ro code   0x800'b17a       0x2  AbstractButton.o [7]\n  .rodata                 const     0x800'b17c       0x1  unwind_debug.o [6]\n  .rodata                 const     0x800'b17d       0x0  zero_init3.o [5]\n  .rodata                 const     0x800'b17d       0x0  lz77_init_single.o [5]\n  Initializer bytes       const     0x800'b17d      0xa8  <for P2-1>\n                                  - 0x800'b225    0xb05d\n")),(0,a.kt)("p",null,'\u3053\u3053\u306b\u306f\u30010x1c8\u30d0\u30a4\u30c8= 456\u30d0\u30a4\u30c8\u304c"A0"\u306b\u3088\u3063\u3066\u4f7f\u7528\u3055\u308c\u30010xb05d\u30d0\u30a4\u30c8= 45,149\u30d0\u30a4\u30c8\u304c"P1"\u306b\u3088\u3063\u3066\u4f7f\u7528\u3055\u308c\u3066\u3044\u308b\u3053\u3068\u304c\u793a\u3055\u308c\u3066\u3044\u307e\u3059\u3002 \u3057\u305f\u304c\u3063\u3066\u3001\u5185\u90e8Flash\u306e\u5408\u8a08\u4f7f\u7528\u91cf\u306f45,605\u30d0\u30a4\u30c8\u306b\u306a\u308a\u307e\u3059\u3002'),(0,a.kt)("h3",d({},{id:"external-flash"}),"\u5916\u90e8Flash"),(0,a.kt)("p",null,'\u5916\u90e8Flash\u306f\u3001"P3"\u9818\u57df\uff08\u30a2\u30c9\u30ec\u30b90x90000000\u304b\u3089\u958b\u59cb\uff09\u3067\u3059\u3002 \u3053\u306e\u9818\u57df\u306e\u30b3\u30f3\u30c6\u30f3\u30c4\u306f\u4ee5\u4e0b\u306e\u3068\u304a\u308a\u3067\u3059\u3002'),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-cpp",metastring:"{14-14}","{14-14}":!0}),"\"P3\":                                          0x1'4076\n  ExtFlashSection        const    0x9000'0000    0x9f60  Blue_Buttons_Round_Edge_small.o [1]\n  ExtFlashSection        const    0x9000'9f60    0x9f60  Blue_Buttons_Round_Edge_small_pressed.o [1]\n  FontFlashSection       const    0x9001'3ec0     0x118  Font_verdana_40_4bpp_0.o [1]\n  FontFlashSection       const    0x9001'3fd8      0x48  Font_verdana_20_4bpp_0.o [1]\n  FontFlashSection       const    0x9001'4020      0x18  Font_verdana_10_4bpp_0.o [1]\n  FontFlashSection       const    0x9001'4038      0x10  Table_verdana_10_4bpp.o [1]\n  FontFlashSection       const    0x9001'4048      0x10  Table_verdana_20_4bpp.o [1]\n  FontFlashSection       const    0x9001'4058      0x10  Table_verdana_40_4bpp.o [1]\n  FontFlashSection       const    0x9001'4068       0x4  Kerning_verdana_10_4bpp.o [1]\n  FontFlashSection       const    0x9001'406c       0x4  Kerning_verdana_20_4bpp.o [1]\n  FontFlashSection       const    0x9001'4070       0x4  Kerning_verdana_40_4bpp.o [1]\n  TextFlashSection       const    0x9001'4074       0x2  Texts.o [1]\n                                - 0x9001'4076  0x1'4076\n")),(0,a.kt)("p",null,"\u5916\u90e8Flash\u306e\u5408\u8a08\u4f7f\u7528\u91cf\u306f\u30010x14076\u30d0\u30a4\u30c8= 82,038\u30d0\u30a4\u30c8\u3067\u3042\u308b\u3053\u3068\u304c\u308f\u304b\u308a\u307e\u3059\u3002 \u3053\u306e\u5927\u90e8\u5206\u306f\u3001Button\u306e2\u3064\u306e\u753b\u50cf\u306b\u3088\u3063\u3066\u4f7f\u7528\u3055\u308c\u3066\u3044\u307e\u3059\uff080x9f60\u30d0\u30a4\u30c8\u306e2\u500d= 40,800\u30d0\u30a4\u30c8\uff09\u3002 \u6b8b\u308a\u306e\u30c7\u30fc\u30bf\u306f3\u3064\u306e\u30d5\u30a9\u30f3\u30c8\u7528\u3067\u3059\u3002 \u3053\u306e\u4f8b\u306b\u306f'?'\u3068\u3044\u3046\u6587\u5b57\u3057\u304b\u542b\u307e\u308c\u3066\u3044\u306a\u3044\u306e\u3067\u3001\u3055\u307b\u3069\u591a\u304f\u306e\u30b9\u30da\u30fc\u30b9\u3092\u4f7f\u7528\u3057\u3066\u3044\u307e\u305b\u3093\u3002\u3053\u306e\u4f8b\u3067\u306f\u30c6\u30ad\u30b9\u30c8\u3092\u4f7f\u7528\u3057\u3066\u3044\u306a\u3044\u304b\u3089\u3067\u3059\u3002"),(0,a.kt)("h3",d({},{id:"summary"}),"\u30b5\u30de\u30ea"),(0,a.kt)("p",null,"\u5916\u90e8RAM\u306b\u914d\u7f6e\u3055\u308c\u308b\u306e\u306f\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u306e\u307f\u3067\u3059\u3002 \u3053\u308c\u3089\u306f\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u5185\u3067\u5909\u6570\u3068\u3057\u3066\u5b9a\u7fa9\u3055\u308c\u3066\u3044\u306a\u3044\u306e\u3067\u3001\u30ea\u30f3\u30ab\uff65\u30b9\u30af\u30ea\u30d7\u30c8\u3067\u898b\u3064\u3051\u308b\u3053\u3068\u306f\u3067\u304d\u307e\u305b\u3093\u3002 \u89e3\u50cf\u5ea6\u306f\u3001480x272\u30d4\u30af\u30bb\u30eb\u300124\u30d3\u30c3\u30c8\u3067\u3059\u3002 \u3053\u3053\u3067\u306f2\u3064\u306e\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u304c\u3042\u308b\u306e\u3067\u3001\u5408\u8a08\u4f7f\u7528\u91cf\u306f480 x 272 x 3 x 2 = 786,360\u30d0\u30a4\u30c8\u3067\u3059\u3002"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",d({parentName:"tr"},{align:null}),"\u30e1\u30e2\u30ea\uff65\u30bf\u30a4\u30d7"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"\u4f7f\u7528\u6cd5"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"\u5185\u90e8RAM"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"42,731\u30d0\u30a4\u30c8")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"TouchGFX\u30b9\u30af\u30ea\u30fc\u30f3\u306e\u30aa\u30d6\u30b8\u30a7\u30af\u30c8"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"576\u30d0\u30a4\u30c8")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"\u5185\u90e8Flash"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"45,605\u30d0\u30a4\u30c8")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"TouchGFX\u30d5\u30ec\u30fc\u30e0\u30ef\u30fc\u30af"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"12,728\u30d0\u30a4\u30c8\u306e\u30b3\u30fc\u30c9")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"\u5916\u90e8RAM"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"786,360\u30d0\u30a4\u30c8")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"\u5916\u90e8Flash"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"82,028\u30d0\u30a4\u30c8")))),(0,a.kt)("h2",d({},{id:"demo-1"}),"\u30c7\u30e21"),(0,a.kt)("p",null,"\u5225\u306e\u4f8b\u3068\u3057\u3066\u3001\u3053\u3053\u3067\u306fTouchGFX Designer\u306b\u542b\u307e\u308c\u3066\u3044\u308b\u3001TouchGFX\u30c7\u30e21\u306e\u6570\u5024\u3092\u793a\u3057\u307e\u3059\u3002 \u3053\u3053\u306b\u306f5\u3064\u306e\u30b9\u30af\u30ea\u30fc\u30f3\u3068\u3001100\u3092\u8d85\u3048\u308b\u753b\u50cf\u304c\u683c\u7d0d\u3055\u308c\u3066\u3044\u307e\u3059\u3002"),(0,a.kt)(r.Z,{imageSource:"/img/basic-concepts/memory-usage/demo1.png",noShadow:"true",mdxType:"Figure"},"STM32F746\u30c7\u30e21"),(0,a.kt)("h3",d({},{id:"summary-1"}),"\u30b5\u30de\u30ea"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",d({parentName:"tr"},{align:null}),"\u30e1\u30e2\u30ea\uff65\u30bf\u30a4\u30d7"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"\u4f7f\u7528\u6cd5"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"\u5185\u90e8RAM"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"51,387\u30d0\u30a4\u30c8")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"TouchGFX\u30b9\u30af\u30ea\u30fc\u30f3\u306e\u30aa\u30d6\u30b8\u30a7\u30af\u30c8"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"10,772\u30d0\u30a4\u30c8")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"\u5185\u90e8Flash"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"187,768\u30d0\u30a4\u30c8")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"TouchGFX\u30d5\u30ec\u30fc\u30e0\u30ef\u30fc\u30af\u306e\u30b3\u30fc\u30c9"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"85,174\u30d0\u30a4\u30c8\u306e\u30b3\u30fc\u30c9")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"\u5916\u90e8RAM"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"786,360\u30d0\u30a4\u30c8")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"\u5916\u90e8Flash"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"5,281,812\u30d0\u30a4\u30c8")))))}F.isMDXComponent=!0}}]);