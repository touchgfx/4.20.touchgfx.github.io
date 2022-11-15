"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[6925],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=u(r),f=o,d=m["".concat(l,".").concat(f)]||m[f]||s[f]||a;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},44035:function(e,t,r){var n=r(67294),o=r(25026);t.Z=function(e){const t=e.noShadow||!1,r=e.width,a=e.height,i=(0,o.Z)(e.imageSource);return t?n.createElement("div",{className:"figure noshadow"},n.createElement("a",{href:i,target:"_blank"},n.createElement("img",{width:r,height:a,src:i})),n.createElement("p",null,e.children)):n.createElement("div",{className:"figure"},n.createElement("a",{href:i,target:"_blank"},n.createElement("img",{width:r,height:a,src:i})),n.createElement("p",null,e.children))}},9926:function(e,t,r){r.r(t),r.d(t,{assets:function(){return g},contentTitle:function(){return d},default:function(){return y},frontMatter:function(){return f},metadata:function(){return v},toc:function(){return h}});var n=r(3905),o=r(44035),a=Object.defineProperty,i=Object.defineProperties,c=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))u.call(t,r)&&s(e,r,t[r]);if(l)for(var r of l(t))p.call(t,r)&&s(e,r,t[r]);return e};const f={id:"model-view-presenter-design-pattern",title:"\u30e2\u30c7\u30eb\uff65\u30d3\u30e5\u30fc\uff65\u30d7\u30ec\u30bc\u30f3\u30bf\uff08MVP: Model-View-Presenter\uff09\u306e\u8a2d\u8a08\u30d1\u30bf\u30fc\u30f3"},d=void 0,v={unversionedId:"development/ui-development/software-architecture/model-view-presenter-design-pattern",id:"development/ui-development/software-architecture/model-view-presenter-design-pattern",title:"\u30e2\u30c7\u30eb\uff65\u30d3\u30e5\u30fc\uff65\u30d7\u30ec\u30bc\u30f3\u30bf\uff08MVP: Model-View-Presenter\uff09\u306e\u8a2d\u8a08\u30d1\u30bf\u30fc\u30f3",description:"",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/development/ui-development/software-architecture/model-view-presenter-design-pattern.mdx",sourceDirName:"development/ui-development/software-architecture",slug:"/development/ui-development/software-architecture/model-view-presenter-design-pattern",permalink:"/4.20/ja/docs/development/ui-development/software-architecture/model-view-presenter-design-pattern",draft:!1,tags:[],version:"current",frontMatter:{id:"model-view-presenter-design-pattern",title:"\u30e2\u30c7\u30eb\uff65\u30d3\u30e5\u30fc\uff65\u30d7\u30ec\u30bc\u30f3\u30bf\uff08MVP: Model-View-Presenter\uff09\u306e\u8a2d\u8a08\u30d1\u30bf\u30fc\u30f3"},sidebar:"docs",previous:{title:"Software Architecture",permalink:"/4.20/ja/docs/category/software-architecture"},next:{title:"\u30b9\u30af\u30ea\u30fc\u30f3\u306e\u6982\u5ff5",permalink:"/4.20/ja/docs/development/ui-development/software-architecture/screen-definition-and-mvp"}},g={},h=[],w={toc:h};function y(e){var t,r=e,{components:a}=r,s=((e,t)=>{var r={};for(var n in e)u.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=m(m({},w),s),i(t,c({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"TouchGFX\u306e\u30e6\u30fc\u30b6\uff65\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9\u306f\u3001\u30e2\u30c7\u30eb-\u30d3\u30e5\u30fc-\u30d7\u30ec\u30bc\u30f3\u30bf\uff08MVP\uff09\u3068\u3057\u3066\u77e5\u3089\u308c\u3066\u3044\u308b\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3\uff65\u30d1\u30bf\u30fc\u30f3\u306b\u5f93\u3063\u3066\u3044\u307e\u3059\u3002\u3053\u308c\u306f\u30e2\u30c7\u30eb-\u30d3\u30e5\u30fc-\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\uff08MVC: Model-View-Controller\uff09\u30d1\u30bf\u30fc\u30f3\u304b\u3089\u6d3e\u751f\u3057\u305f\u3082\u306e\u3067\u3059\u3002 \u3069\u3061\u3089\u306e\u30d1\u30bf\u30fc\u30f3\u3082\u3001\u30e6\u30fc\u30b6\uff65\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9\uff65\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u69cb\u7bc9\u306b\u5e83\u304f\u4f7f\u7528\u3055\u308c\u3066\u3044\u307e\u3059\u3002"),(0,n.kt)("p",null,"MVP\u30d1\u30bf\u30fc\u30f3\u306e\u4e3b\u306a\u5229\u70b9\u306f\u4ee5\u4e0b\u306e\u3068\u304a\u308a\u3067\u3059\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u95a2\u9023\u306e\u5206\u96e2"),": \u30b3\u30fc\u30c9\u3092\u3070\u3089\u3070\u3089\u306e\u30d1\u30fc\u30c4\u306b\u5206\u5272\u3057\u3066\u3001\u305d\u308c\u305e\u308c\u72ec\u81ea\u306b\u8cac\u4efb\u3092\u6301\u305f\u305b\u307e\u3059\u3002 \u3053\u308c\u306b\u3088\u308a\u30b3\u30fc\u30c9\u304c\u5358\u7d14\u5316\u3055\u308c\u3001\u518d\u5229\u7528\u3084\u7dad\u6301\u304c\u5bb9\u6613\u306b\u306a\u308a\u307e\u3059\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u5358\u4f53\u30c6\u30b9\u30c8"),": UI\u306e\u30ed\u30b8\u30c3\u30af\uff08\u30d7\u30ec\u30bc\u30f3\u30bf\uff09\u304c\u8996\u899a\u30ec\u30a4\u30e4\uff08\u30d3\u30e5\u30fc\uff09\u304b\u3089\u5207\u308a\u96e2\u3055\u308c\u3066\u3044\u308b\u306e\u3067\u3001\u3053\u308c\u3089\u306e\u30d1\u30fc\u30c4\u3092\u5206\u96e2\u3055\u305b\u3066\u5bb9\u6613\u306b\u30c6\u30b9\u30c8\u3067\u304d\u307e\u3059\u3002")),(0,n.kt)("p",null,"MVP\u3067\u306f\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306b3\u3064\u306e\u30af\u30e9\u30b9\u304c\u5b9a\u7fa9\u3055\u308c\u307e\u3059\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"\u30e2\u30c7\u30eb"),"\u306f\u3001\u30e6\u30fc\u30b6\uff65\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9\u306b\u8868\u793a\u3055\u308c\u308b\u3001\u3042\u308b\u3044\u306f\u30e6\u30fc\u30b6\uff65\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9\u5185\u3067\u4f5c\u7528\u3059\u308b\u30c7\u30fc\u30bf\u3092\u5b9a\u7fa9\u3059\u308b\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9\u3067\u3059\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"\u30d3\u30e5\u30fc"),"\u306f\u3001\uff08\u30e2\u30c7\u30eb\u304b\u3089\u306e\uff09\u30c7\u30fc\u30bf\u3092\u8868\u793a\u3057\u3001\u305d\u306e\u30c7\u30fc\u30bf\u306b\u4f5c\u7528\u3055\u305b\u308b\u30e6\u30fc\u30b6\uff65\u30b3\u30de\u30f3\u30c9\uff08\u30a4\u30d9\u30f3\u30c8\uff09\u3092\u30d7\u30ec\u30bc\u30f3\u30bf\u306b\u30eb\u30fc\u30c6\u30a3\u30f3\u30b0\u3059\u308b\u30d1\u30c3\u30b7\u30d6\uff65\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9\u3067\u3059\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"\u30d7\u30ec\u30bc\u30f3\u30bf"),"\u306f\u3001\u30e2\u30c7\u30eb\u304a\u3088\u3073\u30d3\u30e5\u30fc\u306b\u4f5c\u7528\u3057\u307e\u3059\u3002 \u30ea\u30dd\u30b8\u30c8\u30ea\uff08\u30e2\u30c7\u30eb\uff09\u304b\u3089\u30c7\u30fc\u30bf\u3092\u53d6\u5f97\u3057\u3001\u30d3\u30e5\u30fc\u306b\u8868\u793a\u3059\u308b\u305f\u3081\u306b\u66f8\u5f0f\u8a2d\u5b9a\u3057\u307e\u3059\u3002")),(0,n.kt)(o.Z,{imageSource:"/img/basic-concepts/software-architecture-mvp/mvp.png",noShadow:!0,mdxType:"Figure"},"\u30e2\u30c7\u30eb\uff65\u30d3\u30e5\u30fc\uff65\u30d7\u30ec\u30bc\u30f3\u30bf\uff08MVP: Model-View-Presenter\uff09\u306e\u8a2d\u8a08\u30d1\u30bf\u30fc\u30f3"),(0,n.kt)("p",null,"TouchGFX\u3067\u306f\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u975eUI\u90e8\u5206\uff08\u3053\u3053\u3067\u306f\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\uff65\u30b7\u30b9\u30c6\u30e0\u3068\u547c\u3073\u307e\u3059\uff09\u3068\u306e\u901a\u4fe1\u306f\u3001\u30e2\u30c7\u30eb\uff65\u30af\u30e9\u30b9\u304b\u3089\u5b9f\u884c\u3055\u308c\u307e\u3059\u3002 \u30d0\u30c3\u30af\u30a8\u30f3\u30c9\uff65\u30b7\u30b9\u30c6\u30e0\u306f\u3001UI\u304b\u3089\u306e\u30a4\u30d9\u30f3\u30c8\u306e\u53d6\u5f97\u3068\u3001\u30a4\u30d9\u30f3\u30c8\uff08\u30bb\u30f3\u30b5\u304b\u3089\u306e\u65b0\u3057\u3044\u6e2c\u5b9a\u5024\u306a\u3069\uff09\u306eUI\u3078\u306e\u4f9b\u7d66\u3092\u4e21\u65b9\u3092\u884c\u3046\u30bd\u30d5\u30c8\u30a6\u30a7\u30a2\uff65\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3067\u3059\u3002 \u30d0\u30c3\u30af\u30a8\u30f3\u30c9\uff65\u30b7\u30b9\u30c6\u30e0\u306f\u540c\u3058\u30de\u30a4\u30af\u30ed\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u4e0a\u3001\u3042\u308b\u3044\u306f\u5225\u306e\u30d7\u30ed\u30bb\u30c3\u30b5\u3001\u30af\u30e9\u30a6\u30c9\uff65\u30e2\u30b8\u30e5\u30fc\u30eb\u3001\u305d\u306e\u4ed6\u306b\u304a\u3044\u3066\u3001\u5225\u306e\u30bf\u30b9\u30af\u3068\u3057\u3066\u5b9f\u884c\u3067\u304d\u307e\u3059\u3002 TouchGFX\u304b\u3089\u898b\u308c\u3070\u3001\u305d\u308c\u304c\u901a\u4fe1\u53ef\u80fd\u306a\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3067\u3042\u308b\u9650\u308a\u3001\u5b9f\u969b\u306b\u306f\u554f\u984c\u3067\u306f\u3042\u308a\u307e\u305b\u3093\u3002"),(0,n.kt)("p",null,"\u4f7f\u7528\u3055\u308c\u308b\u7279\u5b9a\u306e\u901a\u4fe1\u30d7\u30ed\u30c8\u30b3\u30eb\u306f\u3001TouchGFX\u3067\u306f\u7ba1\u7406\u3057\u307e\u305b\u3093\u3002 \u5358\u306b\u3001TouchGFX\u306e\u5404\u30c6\u30a3\u30c3\u30af\u306e\u5f8c\u306b\u547c\u3073\u51fa\u3055\u308c\u308b\u95a2\u6570\u3092\u4f9b\u7d66\u3059\u308b\u3060\u3051\u3067\u3059\u3002\u3053\u308c\u3067\u5fc5\u8981\u306a\u901a\u4fe1\u306f\u51e6\u7406\u3067\u304d\u308b\u304b\u3089\u3067\u3059\u3002 \u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001\u300c",(0,n.kt)("a",m({parentName:"p"},{href:"../touchgfx-engine-features/backend-communication"}),"\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u901a\u4fe1"),"\u300d\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,n.kt)(o.Z,{imageSource:"/img/basic-concepts/software-architecture-mvp/mvp-2.png",noShadow:!0,mdxType:"Figure"},"\u30e2\u30c7\u30eb-\u30d3\u30e5\u30fc-\u30d7\u30ec\u30bc\u30f3\u30bf\u3068\u5916\u90e8\u901a\u4fe1"),(0,n.kt)("p",null,"MVP\u3092\u5b9f\u88c5\u3057\u3066TouchGFX\u306eUI\u958b\u767a\u3067\u4f7f\u7528\u3059\u308b\u5177\u4f53\u7684\u306a\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001\u300c",(0,n.kt)("a",m({parentName:"p"},{href:"code-structure"}),"\u30b3\u30fc\u30c9\u69cb\u9020"),"\u300d\u30bb\u30af\u30b7\u30e7\u30f3\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"))}y.isMDXComponent=!0}}]);