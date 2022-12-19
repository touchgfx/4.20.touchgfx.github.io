"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[3996],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(r),d=o,g=m["".concat(u,".").concat(d)]||m[d]||s[d]||a;return r?n.createElement(g,l(l({ref:t},p),{},{components:r})):n.createElement(g,l({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},44035:function(e,t,r){var n=r(67294),o=r(25026);t.Z=function(e){const t=e.noShadow||!1,r=e.width,a=e.height,l=(0,o.Z)(e.imageSource);return t?n.createElement("div",{className:"figure noshadow"},n.createElement("a",{href:l,target:"_blank"},n.createElement("img",{width:r,height:a,src:l})),n.createElement("p",null,e.children)):n.createElement("div",{className:"figure"},n.createElement("a",{href:l,target:"_blank"},n.createElement("img",{width:r,height:a,src:l})),n.createElement("p",null,e.children))}},39487:function(e,t,r){var n=r(67294),o=r(25026);t.Z=function(e){const t=e.width,r=e.height,a=e.points||[],l=(0,o.Z)(e.imageSource);return n.createElement("div",{style:{position:"relative"}},n.createElement("div",{className:"figure"},n.createElement("a",{href:l,target:"_blank"},n.createElement("img",{width:t,height:r,src:l})),a.map((function(e,t){return n.createElement("svg",{style:{position:"absolute",top:0,left:0,pointerEvents:"none"},viewBox:"0 0 500 500"},n.createElement("g",{transform:"translate("+e[0]+", "+e[1]+")"},n.createElement("path",{id:"p1",d:"M12 2c3.196 0 6 2.618 6 5.602 0 2.238-1.058 3.488-2.659 5.381-1.078 1.274-2.303 2.722-3.341 4.697-1.038-1.976-2.263-3.423-3.341-4.697-1.601-1.893-2.659-3.143-2.659-5.381 0-2.984 2.804-5.602 6-5.602z",fill:"white",stroke:"black"}),n.createElement("text",{x:"11.7",y:"9.5","font-size":"x-small","dominant-baseline":"middle","text-anchor":"middle"},t+1)))})),n.createElement("p",null,e.children)))}},82985:function(e,t,r){var n=r(67294);class o extends n.Component{render(){return n.createElement("code",{className:"shortcut"},this.props.children)}}t.Z=o},2664:function(e,t,r){r.r(t),r.d(t,{assets:function(){return b},contentTitle:function(){return f},default:function(){return v},frontMatter:function(){return k},metadata:function(){return h},toc:function(){return y}});var n=r(3905),o=r(44035),a=r(39487),l=r(82985),i=Object.defineProperty,u=Object.defineProperties,c=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,d=(e,t,r)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,g=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&d(e,r,t[r]);if(p)for(var r of p(t))m.call(t,r)&&d(e,r,t[r]);return e};const k={id:"tutorial-05",title:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb5: \u30ab\u30b9\u30bf\u30e0\uff65\u30c8\u30ea\u30ac\u3068\u30ab\u30b9\u30bf\u30e0\uff65\u30a2\u30af\u30b7\u30e7\u30f3\u306e\u4f5c\u6210"},f=void 0,h={unversionedId:"tutorials/tutorial-05",id:"tutorials/tutorial-05",title:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb5: \u30ab\u30b9\u30bf\u30e0\uff65\u30c8\u30ea\u30ac\u3068\u30ab\u30b9\u30bf\u30e0\uff65\u30a2\u30af\u30b7\u30e7\u30f3\u306e\u4f5c\u6210",description:"",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/tutorials/tutorial-05.mdx",sourceDirName:"tutorials",slug:"/tutorials/tutorial-05",permalink:"/4.20/ja/docs/tutorials/tutorial-05",draft:!1,tags:[],version:"current",frontMatter:{id:"tutorial-05",title:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb5: \u30ab\u30b9\u30bf\u30e0\uff65\u30c8\u30ea\u30ac\u3068\u30ab\u30b9\u30bf\u30e0\uff65\u30a2\u30af\u30b7\u30e7\u30f3\u306e\u4f5c\u6210"},sidebar:"docs",previous:{title:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb4: \u30ab\u30b9\u30bf\u30e0\u52d5\u4f5c\u3092\u5099\u3048\u305f\u30b9\u30af\u30ed\u30fc\u30eb\uff65\u30db\u30a4\u30fc\u30eb\u306e\u4f5c\u6210",permalink:"/4.20/ja/docs/tutorials/tutorial-04"},next:{title:"AbstractButton",permalink:"/4.20/ja/docs/api/classes/classtouchgfx_1_1_abstract_button"}},b={},y=[{value:"\u30ab\u30b9\u30bf\u30e0\uff65\u30a2\u30af\u30b7\u30e7\u30f3\u3092\u30b9\u30af\u30ea\u30fc\u30f3\u306b\u8ffd\u52a0",id:"adding-a-custom-action-to-a-screen",level:2},{value:"\u30ab\u30b9\u30bf\u30e0\uff65\u30a2\u30af\u30b7\u30e7\u30f3\u306b\u5024\u3092\u6e21\u3059\u65b9\u6cd5",id:"passing-a-value-to-a-custom-action",level:2},{value:"\u30ab\u30b9\u30bf\u30e0\uff65\u30b3\u30f3\u30c6\u30ca\u5185\u306e\u30ab\u30b9\u30bf\u30e0\uff65\u30c8\u30ea\u30ac\u306e\u4f7f\u7528",id:"using-custom-triggers-in-custom-containers",level:2}],C={toc:y};function v(e){var t,r=e,{components:i}=r,d=((e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&p)for(var n of p(e))t.indexOf(n)<0&&m.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=g(g({},C),d),u(t,c({components:i,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"TouchGFX Designer\u3067\u306f\u3001\u30ab\u30b9\u30bf\u30e0\uff65\u30c8\u30ea\u30ac\u3068\u30ab\u30b9\u30bf\u30e0\uff65\u30a2\u30af\u30b7\u30e7\u30f3\u306b\u3088\u3063\u3066\u3001\u72ec\u81ea\u306e\u30a4\u30f3\u30bf\u30e9\u30af\u30b7\u30e7\u30f3\uff65\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u5b9a\u7fa9\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002 \u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u5404\u30b9\u30af\u30ea\u30fc\u30f3\u306b\u306f\u3001\u30a2\u30af\u30b7\u30e7\u30f3\u306e\u30b3\u30ec\u30af\u30b7\u30e7\u30f3",(0,n.kt)("strong",{parentName:"p"},"\uff08C++\u306e\u30b7\u30f3\u30d7\u30eb\u306avoid\u30e1\u30bd\u30c3\u30c9\uff09\u3092\u542b\u3080\u3053\u3068\u304c\u3067\u304d\u3001\u3053\u308c\u3089\u306fTouchGFX Designer\u5185\u304b\u3089\u3001\u307e\u305f\u306f\u30b3\u30fc\u30c9\u3067\u3082\u547c\u3073\u51fa\u3059\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u540c\u6642\u306b\u3001\u30ab\u30b9\u30bf\u30e0\uff65\u30b3\u30f3\u30c6\u30ca\u306b\u3082\u30c8\u30ea\u30ac\u306e\u30b3\u30ec\u30af\u30b7\u30e7\u30f3"),"\uff08C++\u306e\u30b3\u30fc\u30eb\u30d0\u30c3\u30af\u3068\u7b49\u3057\u3044\uff09\u3092\u542b\u3080\u3053\u3068\u304c\u3067\u304d\u3001\u3053\u308c\u306b\u5bfe\u3057\u3066\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3067\u53cd\u5fdc\u3067\u304d\u307e\u3059\u3002"),(0,n.kt)("p",null,"\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u306f\u3001\u3053\u306e\u6a5f\u80fd\u3092\u5229\u7528\u3057\u3066\u3001\u975e\u5e38\u306b\u30af\u30ea\u30fc\u30f3\u3067\u30c0\u30a4\u30ca\u30df\u30c3\u30af\u306aTouchGFX\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u4f5c\u6210\u3059\u308b\u65b9\u6cd5\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u307e\u3059\u3002"),(0,n.kt)("p",null,"\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u306f\u3001TouchGFX\u3092\u521d\u3081\u3066\u4f7f\u7528\u3059\u308b\u30e6\u30fc\u30b6\u306b\u306f\u9069\u3057\u3066\u3044\u307e\u305b\u3093\u3002 \u5f8c\u3067\u518d\u3073\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3092\u3054\u89a7\u306b\u306a\u308b\u3053\u3068\u3092\u304a\u52e7\u3081\u3057\u307e\u3059\u3002"),(0,n.kt)("h2",g({},{id:"adding-a-custom-action-to-a-screen"}),"\u30ab\u30b9\u30bf\u30e0\uff65\u30a2\u30af\u30b7\u30e7\u30f3\u3092\u30b9\u30af\u30ea\u30fc\u30f3\u306b\u8ffd\u52a0"),(0,n.kt)("p",null,"\u3053\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u3067\u306f\u4ee5\u4e0b\u306e\u64cd\u4f5c\u3092\u5b9f\u884c\u3057\u307e\u3059\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"1\u3064\u306e\u30d0\u30c3\u30af\u30b0\u30e9\u30a6\u30f3\u30c9\u306e\u30dc\u30c3\u30af\u30b9\u30681\u3064\u306e\u30dc\u30bf\u30f3\u306b\u3088\u308b\u3001\u65b0\u3057\u3044\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u30ab\u30b9\u30bf\u30e0\uff65\u30a2\u30af\u30b7\u30e7\u30f3\u3092\u8ffd\u52a0\u3057\u307e\u3059\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u30dc\u30bf\u30f3\u304c\u62bc\u3055\u308c\u305f\u3068\u304d\u306b\u3001\u30ab\u30b9\u30bf\u30e0\uff65\u30a2\u30af\u30b7\u30e7\u30f3\u3092\u4f7f\u7528\u3057\u3066\u30d0\u30c3\u30af\u30b0\u30e9\u30a6\u30f3\u30c9\u306e\u8272\u3092\u5909\u66f4\u3057\u307e\u3059\u3002")),(0,n.kt)("p",null,'\u6700\u521d\u306b\u3001\u89e3\u50cf\u5ea6\u304c480 x 272\u306e\u65b0\u3057\u3044\u7a7a\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\uff08\u305f\u3068\u3048\u3070STM32F746\u307e\u305f\u306f\u30b7\u30df\u30e5\u30ec\u30fc\u30bf\u5411\u3051\uff09\u3092\u4f5c\u6210\u3057\u3001\u30d0\u30c3\u30af\u30b0\u30e9\u30a6\u30f3\u30c9\u306e\u30dc\u30c3\u30af\u30b9\uff08"background"\u3068\u3044\u3046\u540d\u524d\uff091\u3064\u3068\u30dc\u30bf\u30f3\uff08"button"\u3068\u3044\u3046\u540d\u524d\uff091\u3064\u3092\u633f\u5165\u3057\u307e\u3059\u3002 \u4e0b\u306e\u753b\u50cf\u306e\u3088\u3046\u306a\u72b6\u614b\u306b\u306a\u308b\u306f\u305a\u3067\u3059\u3002'),(0,n.kt)(a.Z,{points:[[420,85]],imageSource:"/img/tutorials/tutorial-05/white-background-and-button-4-17.webp",mdxType:"FigureWithPoints"},"\u767d\u3044\u30d0\u30c3\u30af\u30b0\u30e9\u30a6\u30f3\u30c9\u306e\u30dc\u30c3\u30af\u30b9\u3068\u30dc\u30bf\u30f3\u3092\u8ffd\u52a0"),(0,n.kt)("p",null,'\u6b21\u306b\u3001\u30b9\u30af\u30ea\u30fc\u30f3\u306b\u30ab\u30b9\u30bf\u30e0\uff65\u30a2\u30af\u30b7\u30e7\u30f3\u3092\u8ffd\u52a0\u3057\u307e\u3057\u3087\u3046\u3002 \u3053\u306e\u64cd\u4f5c\u3092\u5b9f\u884c\u3059\u308b\u306b\u306f\u3001\u30b9\u30af\u30ea\u30fc\u30f3\u306eProperties\u30bf\u30d6\u3067\u3001\u30b9\u30af\u30ea\u30fc\u30f3\u3092\u9078\u629e\u3057\u3066\u3001"Actions"\u30b0\u30eb\u30fc\u30d7\uff08\u4e0a\u8a18\u306e1\uff09\u306e+\u30dc\u30bf\u30f3\u3092\u62bc\u3057\u307e\u3059\u3002 \u3053\u306e\u30a2\u30af\u30b7\u30e7\u30f3\u306b"setBackgroundColor"\u3068\u3044\u3046\u540d\u524d\u3092\u4ed8\u3051\u3001"Sets the background color"\u306a\u3069\u306e\u8aac\u660e\u3092\u5165\u529b\u3057\u307e\u3059\u3002 \u3053\u306e\u30a2\u30af\u30b7\u30e7\u30f3\u306b\u306f\u30bf\u30a4\u30d7\u3092\u8a2d\u5b9a\u3057\u307e\u305b\u3093\u3002'),(0,n.kt)(o.Z,{imageSource:"/img/tutorials/tutorial-05/adding-custom-action-to-screen-4-17.webp",mdxType:"Figure"},"\u30b9\u30af\u30ea\u30fc\u30f3\u306b\u65b0\u3057\u3044\u30ab\u30b9\u30bf\u30e0\uff65\u30a2\u30af\u30b7\u30e7\u30f3\u3092\u8ffd\u52a0"),(0,n.kt)("p",null,"F4 ",(0,n.kt)(l.Z,{mdxType:"Shortcut"},"\u30ad\u30fc")," \u3092\u62bc\u3057\u3066\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u30b3\u30fc\u30c9\u3092\u751f\u6210\u3057\u307e\u3059\u3002 \u3053\u308c\u306b\u3088\u308a\u3001",(0,n.kt)("inlineCode",{parentName:"p"},"TouchGFX/generated/gui_generated/include/gui_generated/screen1_screen/Screen1ViewBase.hpp"),"\u306b\u3001",(0,n.kt)("inlineCode",{parentName:"p"},"setBackgroundColor()"),"\u3068\u547c\u3070\u308c\u308b\u4eee\u60f3\u30e1\u30bd\u30c3\u30c9\u304c\u751f\u6210\u3055\u308c\u3001",(0,n.kt)("inlineCode",{parentName:"p"},"Screen1ViewBase.cpp"),"\u5185\u306b\u7a7a\u306e\u5b9f\u88c5\u304c\u751f\u6210\u3055\u308c\u307e\u3059\u3002"),(0,n.kt)("p",null,"\u3053\u306e\u30e1\u30bd\u30c3\u30c9\u306b\u6a5f\u80fd\u3092\u8ffd\u52a0\u3059\u308b\u306b\u306f\u3001 ",(0,n.kt)("inlineCode",{parentName:"p"},"Screen1View.cpp"),"\u30d5\u30a1\u30a4\u30eb\u5185\u306e\u30e6\u30fc\u30b6\uff65\u30b3\u30fc\u30c9\u3067\u3053\u308c\u3092\u30aa\u30fc\u30d0\u30fc\u30e9\u30a4\u30c9\u3059\u308b\u304b\u3001TouchGFX Designer\u3092\u4f7f\u7528\u3057\u3066\u30a4\u30f3\u30bf\u30e9\u30af\u30b7\u30e7\u30f3\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002 \u3053\u3053\u3067\u306f\u5f8c\u8005\u306e\u65b9\u6cd5\u3092\u8a66\u3057\u3066\u307f\u307e\u3057\u3087\u3046\u3002\u3053\u306e\u305f\u3081\u306b\u306f\u3001\u30b9\u30af\u30ea\u30fc\u30f3\u306eInteractions\u30bf\u30d6\u306b\u79fb\u52d5\u3057\u3066\u3001\u30dc\u30bf\u30f3\u304c\u30af\u30ea\u30c3\u30af\u3055\u308c\u305f\u3089\u65b0\u3057\u3044\u30e1\u30bd\u30c3\u30c9\u3092\u547c\u3073\u51fa\u3059\u30a4\u30f3\u30bf\u30e9\u30af\u30b7\u30e7\u30f3\u3092\u8ffd\u52a0\u3057\u307e\u3059\u3002"),(0,n.kt)(o.Z,{imageSource:"/img/tutorials/tutorial-05/calling-setbackgroundcolor-on-click-4-17.webp",mdxType:"Figure"},"\u30dc\u30bf\u30f3\u306e\u30af\u30ea\u30c3\u30af\u6642\u306bsetBackgroundColor\u3092\u547c\u3073\u51fa\u3059"),(0,n.kt)("p",null,"\u6b21\u306b\u3001",(0,n.kt)("inlineCode",{parentName:"p"},"setBackgroundColor"),"\u304c\u547c\u3073\u51fa\u3055\u308c\u305f\u3068\u304d\u306b\u3001\u5b9f\u969b\u306b\u5b9f\u884c\u3055\u308c\u308b\u5185\u5bb9\u3092\u6307\u5b9a\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002 \u3053\u306e\u305f\u3081\u306b\u3001\u65b0\u3057\u304f\u4f5c\u6210\u3057\u305f\u30ab\u30b9\u30bf\u30e0\uff65\u30a2\u30af\u30b7\u30e7\u30f3\uff081\uff09\u3092\u3001\u5225\u306e\u30a4\u30f3\u30bf\u30e9\u30af\u30b7\u30e7\u30f3\u306e\u30c8\u30ea\u30ac\u3068\u3057\u3066\u4f7f\u7528\u3057\u307e\u3059\u3002 \u307e\u305a\u306f\u3001\u30c8\u30ea\u30ac",(0,n.kt)("strong",{parentName:"p"},'"setBackgroundColor is called"\u306e\u767a\u751f\u6642\u306b\u3001'),'"Change box color"\u3068\u3044\u3046\u30a2\u30af\u30b7\u30e7\u30f3\uff082\uff09\u3092\u4f7f\u7528\u3057\u3066\u3001\u5358\u7d14\u306b\u30d0\u30c3\u30af\u30b0\u30e9\u30a6\u30f3\u30c9\u306e\u30dc\u30c3\u30af\u30b9\u306e\u8272\u3092\u9ed2\u306b\u8a2d\u5b9a\u3057\u307e\u3059\u3002'),(0,n.kt)(a.Z,{points:[[355,60],[410,76]],imageSource:"/img/tutorials/tutorial-05/implementing-setbackgroundcolor-functionality-4-17.webp",mdxType:"FigureWithPoints"},"\u30ab\u30b9\u30bf\u30e0\uff65\u30a2\u30af\u30b7\u30e7\u30f3setBackgroundColor\u306e\u6a5f\u80fd\u306e\u5b9f\u88c5"),(0,n.kt)("p",null,"\u3053\u3053\u3067\u30b7\u30df\u30e5\u30ec\u30fc\u30bf\u3092\u5b9f\u884c\u3057\u3001\u30dc\u30bf\u30f3\u3092\u62bc\u3057\u307e\u3059\u3002\u30d0\u30c3\u30af\u30b0\u30e9\u30a6\u30f3\u30c9\u304c\u9ed2\u8272\u306b\u306a\u308b\u306f\u305a\u3067\u3059\u3002 \u3053\u308c\u30671\u3064\u76ee\u306e\u30ab\u30b9\u30bf\u30e0\uff65\u30a2\u30af\u30b7\u30e7\u30f3\u304c\u6b63\u5e38\u306b\u4f5c\u6210\u3055\u308c\u307e\u3057\u305f\u3002"),(0,n.kt)(o.Z,{imageSource:"/img/tutorials/tutorial-05/black-color-result-4-17.webp",mdxType:"Figure"},"\u30dc\u30bf\u30f3\u3092\u62bc\u3059\u3068\u30d0\u30c3\u30af\u30b0\u30e9\u30a6\u30f3\u30c9\u304c\u9ed2\u8272\u306b\u5909\u5316"),(0,n.kt)("h2",g({},{id:"passing-a-value-to-a-custom-action"}),"\u30ab\u30b9\u30bf\u30e0\uff65\u30a2\u30af\u30b7\u30e7\u30f3\u306b\u5024\u3092\u6e21\u3059\u65b9\u6cd5"),(0,n.kt)("p",null,"\u3053\u3053\u307e\u3067\u306b\u4f5c\u6210\u3057\u305f\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u57fa\u306b\u3057\u3066\u3001\u3053\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u3067\u306f\u3001\u4ee5\u4e0b\u306e\u64cd\u4f5c\u3092\u884c\u3046\u3053\u3068\u3067\u30ab\u30b9\u30bf\u30e0\uff65\u30a2\u30af\u30b7\u30e7\u30f3\u306e\u6982\u5ff5\u3092\u62e1\u5f35\u3055\u305b\u3066\u3044\u304d\u307e\u3059\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"setBackgroundColor\u30ab\u30b9\u30bf\u30e0\uff65\u30a2\u30af\u30b7\u30e7\u30f3\u306b\u30d1\u30e9\u30e1\u30fc\u30bf\u3092\u8ffd\u52a0\u3059\u308b"),(0,n.kt)("li",{parentName:"ul"},"setBackgroundColor\u306b\u30e9\u30f3\u30c0\u30e0\u306a\u8272\u3092\u6e21\u3059"),(0,n.kt)("li",{parentName:"ul"},"\u3053\u308c\u3092\u4f7f\u7528\u3057\u3066\u3001\u30dc\u30bf\u30f3\u306e\u62bc\u4e0b\u6642\u306b\u30d0\u30c3\u30af\u30b0\u30e9\u30a6\u30f3\u30c9\u3092\u30e9\u30f3\u30c0\u30e0\u306a\u8272\u306b\u5909\u66f4\u3059\u308b")),(0,n.kt)("p",null,"\u3067\u306f\u3001",(0,n.kt)("inlineCode",{parentName:"p"},"setBackgroundColor"),"\u30ab\u30b9\u30bf\u30e0\uff65\u30a2\u30af\u30b7\u30e7\u30f3\u306b\u5024\u3092\u6e21\u3057\u3066\u3001\u3088\u308a\u52d5\u7684\u306b\u3059\u308b\u3053\u3068\u3067\u3001\u3053\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u3082\u3046\u5c11\u3057\u8208\u5473\u6df1\u3044\u3082\u306e\u306b\u3057\u3066\u307f\u307e\u3057\u3087\u3046\u3002"),(0,n.kt)("p",null,"\u65b0\u3057\u3044\u30a4\u30f3\u30bf\u30e9\u30af\u30b7\u30e7\u30f3\u3092\u8a2d\u5b9a\u3059\u308b\u305f\u3081\u306b\u3001\u30b9\u30af\u30ea\u30fc\u30f3\u306eInteractions\u30bf\u30d6\u306b\u79fb\u52d5\u3057\u30012\u3064\u306e\u73fe\u5728\u306e\u30a4\u30f3\u30bf\u30e9\u30af\u30b7\u30e7\u30f3\u306e\u305d\u308c\u305e\u308c\u306ex\u30dc\u30bf\u30f3\u3092\u62bc\u3057\u3066\u4e21\u65b9\u3092\u524a\u9664\u3057\u307e\u3059\u3002"),(0,n.kt)("p",null,"\u30b9\u30af\u30ea\u30fc\u30f3\u306eProperties\u30bf\u30d6\u304b\u3089",(0,n.kt)("inlineCode",{parentName:"p"},"setBackgroundColor"),'\u3068\u3044\u3046\u30ab\u30b9\u30bf\u30e0\uff65\u30a2\u30af\u30b7\u30e7\u30f3\u306b\u79fb\u52d5\u3057\u3066\u3001Type\u306e\u30c1\u30a7\u30c3\u30af\u30dc\u30c3\u30af\u30b9\u3092\u30aa\u30f3\u306b\u3057\u3066"colortype"\u3068\u5165\u529b\u3057\u307e\u3059\u3002\u3053\u308c\u304c\u3001\u30a2\u30af\u30b7\u30e7\u30f3\u306b\u6e21\u3059\u30d1\u30e9\u30e1\u30fc\u30bf\u306e\u30bf\u30a4\u30d7\u306b\u306a\u308a\u307e\u3059\uff08colortype\u306f\u8272\u3092\u8a18\u8ff0\u3059\u308b\u305f\u3081\u306e\u7d44\u8fbc\u307f\u306eTouchGFX\u30bf\u30a4\u30d7\u3067\u3059\uff09\u3002 \u30d1\u30e9\u30e1\u30fc\u30bf\u306b\u540d\u524d\u3092\u4ed8\u3051\u308b\u3053\u3068\u306f\u3067\u304d\u306a\u3044\u306e\u3067\u3001\u81ea\u52d5\u7684\u306b**"value"\u3068\u3044\u3046\u540d\u524d\u306b\u306a\u308a\u307e\u3059\u3002'),(0,n.kt)(o.Z,{imageSource:"/img/tutorials/tutorial-05/adding-type-to-action-4-17.webp",mdxType:"Figure"},"\u30ab\u30b9\u30bf\u30e0\uff65\u30a2\u30af\u30b7\u30e7\u30f3\u306e\u30d1\u30e9\u30e1\u30fc\u30bf\u3092\u8a2d\u5b9a"),(0,n.kt)("p",null,'\u6b21\u306b\u3001\u65b0\u3057\u304f\u8ffd\u52a0\u3057\u305f\u30d1\u30e9\u30e1\u30fc\u30bf\u5024\u3092\u4f7f\u7528\u3059\u308b\u30a4\u30f3\u30bf\u30e9\u30af\u30b7\u30e7\u30f3\u3092\u8a2d\u5b9a\u3057\u307e\u3057\u3087\u3046\u3002 \u3053\u308c\u306b\u306f\u3001"setBackgroundColor is called"\u3068\u3044\u3046\u30c8\u30ea\u30ac\u3068\u3001"Execute C++ code"\u3068\u3044\u3046\u30a2\u30af\u30b7\u30e7\u30f3\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002 \u307e\u305f\u3001\u65b0\u3057\u3044\u30d1\u30e9\u30e1\u30fc\u30bf\u3092\u4f7f\u7528\u3057\u3066\u3001\u30d0\u30c3\u30af\u30b0\u30e9\u30a6\u30f3\u30c9\uff65\u30dc\u30c3\u30af\u30b9\u306e\u8272\u3092\u8a2d\u5b9a\u3057\u305f\u3044\u306e\u3067\u3001\u5b9f\u884c\u3059\u308b\u30b3\u30fc\u30c9\u306f\u6b21\u306e\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002'),(0,n.kt)("pre",null,(0,n.kt)("code",g({parentName:"pre"},{className:"language-cpp"}),"background.setColor(value);\nbackground.invalidate();\n")),(0,n.kt)("p",null,"2\u884c\u76ee\u3067\u3001\u30d0\u30c3\u30af\u30b0\u30e9\u30a6\u30f3\u30c9\u304c\u65b0\u3057\u3044\u8272\u3067\u5f37\u5236\u7684\u306b\u518d\u63cf\u753b\u3055\u308c\u307e\u3059\u3002"),(0,n.kt)(o.Z,{imageSource:"/img/tutorials/tutorial-05/set-color-execute-code-4-17.webp",mdxType:"Figure"},"\u6e21\u3055\u308c\u305f\u5024\u3092\u4f7f\u7528\u3057\u3066\u30d0\u30c3\u30af\u30b0\u30e9\u30a6\u30f3\u30c9\u306e\u8272\u3092\u5909\u66f4"),(0,n.kt)("p",null,'\u30c8\u30ea\u30ac\u306b\u30d1\u30e9\u30e1\u30fc\u30bf\u306e\u540d\u524d\u3068\u30bf\u30a4\u30d7\uff08"value : colortype"\uff09\u304c\u8868\u793a\u3055\u308c\u3066\u3044\u308b\u3053\u3068\u306b\u6ce8\u76ee\u3057\u3066\u304f\u3060\u3055\u3044\u3002'),(0,n.kt)("p",null,'\u6b21\u306b\u3001\u30dc\u30bf\u30f3\u306e\u30af\u30ea\u30c3\u30af\u6642\u306b\u5b9f\u969b\u306bsetBackgroundColor\u3092\u547c\u3073\u51fa\u3059\u30a4\u30f3\u30bf\u30e9\u30af\u30b7\u30e7\u30f3\u3092\u8a2d\u5b9a\u3057\u307e\u3059\u3002 \u30c8\u30ea\u30ac"Button is clicked"\u3068\u30a2\u30af\u30b7\u30e7\u30f3"Call Screen1 setBackgroundColor"\u306b\u5225\u306e\u30a4\u30f3\u30bf\u30e9\u30af\u30b7\u30e7\u30f3\u3092\u8ffd\u52a0\u3059\u308b\u3068\u3001\u5024\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u306b\u671f\u5f85\u3055\u308c\u308b\u30bf\u30a4\u30d7\u3082\u8868\u793a\u3055\u308c\u308b\u3053\u3068\u306b\u6ce8\u610f\u3057\u3066\u304f\u3060\u3055\u3044\u3002 ',(0,n.kt)("inlineCode",{parentName:"p"},"stdlib.h"),"\u306b\u3042\u308b\u30e9\u30f3\u30c0\u30e0\u5316\u30e1\u30bd\u30c3\u30c9",(0,n.kt)("inlineCode",{parentName:"p"},"rand()"),"\u3092\u5229\u7528\u3057\u3066\u30010\uff5e255\u306e\u7bc4\u56f2\u304b\u30893\u3064\u306e\u6570\u5b57\u3092\u7121\u4f5c\u70ba\u306b\u53d6\u5f97\u3057\u3001\u3053\u308c\u3089\u3092\u4f7f\u7528\u3057\u3066\u8272\u3092\u6307\u5b9a\u3057setBackgroundColor\u306b\u30e9\u30f3\u30c0\u30e0\u306a\u8272\u3092\u6e21\u3057\u307e\u3059\u3002 ",(0,n.kt)("inlineCode",{parentName:"p"},"rand()"),'\u306b\u30a2\u30af\u30bb\u30b9\u3059\u308b\u306b\u306f\u3001\u3053\u308c\u3092\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u542b\u3081\u308b\uff08\u30a4\u30f3\u30af\u30eb\u30fc\u30c9\u3059\u308b\uff09\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002 \u30b9\u30af\u30ea\u30fc\u30f3\u3068\u30ab\u30b9\u30bf\u30e0\uff65\u30b3\u30f3\u30c6\u30ca\u306e\u4e21\u65b9\u306b\u3001TouchGFX Designer\u5185\u304b\u3089\u30e6\u30fc\u30b6\u72ec\u81ea\u306e\u30a4\u30f3\u30af\u30eb\u30fc\u30c9\u3092\u63d0\u4f9b\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002\u3053\u306e\u4f8b\u3067\u306f\u3053\u308c\u3092\u5b9f\u884c\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002 \u30b9\u30af\u30ea\u30fc\u30f3\u306eProperties\u30bf\u30d6\u306b\u79fb\u52d5\u3057\u3001"INCLUDES"\u30b0\u30eb\u30fc\u30d7\u306b\u6b21\u306e\u3088\u3046\u306b\u5165\u529b\u3057\u307e\u3059\u3002'),(0,n.kt)("pre",null,(0,n.kt)("code",g({parentName:"pre"},{className:"language-cpp"}),"#include <stdlib.h>\n")),(0,n.kt)(o.Z,{imageSource:"/img/tutorials/tutorial-05/include-stdlib-4-17.webp",mdxType:"Figure"},"rand()\u306b\u30a2\u30af\u30bb\u30b9\u3059\u308b\u305f\u3081\u306bstdlib\u3092\u30a4\u30f3\u30af\u30eb\u30fc\u30c9"),(0,n.kt)("p",null,"\u6b21\u306b\u3001Value\u30d7\u30ed\u30d1\u30c6\u30a3\u306b\u3001\u6b21\u306e\u3088\u3046\u306b\u5165\u529b\u3057\u307e\u3059\uff081\uff09\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",g({parentName:"pre"},{className:"language-cpp"}),"touchgfx::Color::getColorFromRGB(rand()%256, rand()%256, rand()%256)\n")),(0,n.kt)(a.Z,{points:[[355,110]],imageSource:"/img/tutorials/tutorial-05/pass-random-color-to-action-4-17.webp",mdxType:"FigureWithPoints"},"\u30dc\u30bf\u30f3\u306e\u30af\u30ea\u30c3\u30af\u6642\u306b\u30e9\u30f3\u30c0\u30e0\u306a\u8272\u306e\u5024\u3092\u6e21\u3059"),(0,n.kt)("p",null,"\u3053\u3053\u3067\u30b7\u30df\u30e5\u30ec\u30fc\u30bf\u3092\u5b9f\u884c\u3057\u3001\u4f55\u5ea6\u304b\u30dc\u30bf\u30f3\u3092\u62bc\u3057\u3066\u307f\u307e\u3059\u3002 \u305d\u3057\u3066\u3001\u30d0\u30c3\u30af\u30b0\u30e9\u30a6\u30f3\u30c9\u304c\u30e9\u30f3\u30c0\u30e0\u306a\u8272\u306b\u5909\u5316\u3059\u308b\u306e\u3092\u78ba\u8a8d\u3057\u307e\u3059\u3002"),(0,n.kt)(o.Z,{imageSource:"/img/tutorials/tutorial-05/random-color-result-initial-4-17.webp",mdxType:"Figure"},"\u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u305f\u7d50\u679c\u3001\u30e9\u30f3\u30c0\u30e0\u306a\u8272\u306b\u306a\u308b"),(0,n.kt)("h2",g({},{id:"using-custom-triggers-in-custom-containers"}),"\u30ab\u30b9\u30bf\u30e0\uff65\u30b3\u30f3\u30c6\u30ca\u5185\u306e\u30ab\u30b9\u30bf\u30e0\uff65\u30c8\u30ea\u30ac\u306e\u4f7f\u7528"),(0,n.kt)("p",null,"\u6700\u5f8c\u306b\u3001\u30ab\u30b9\u30bf\u30e0\uff65\u30b3\u30f3\u30c6\u30ca\u3067\u306f\u30ab\u30b9\u30bf\u30e0\uff65\u30c8\u30ea\u30ac\u306e\u30b3\u30ec\u30af\u30b7\u30e7\u30f3\u3082\u5b9a\u7fa9\u3067\u304d\u308b\u306e\u3067\u3001\u3053\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u3067\u306f\u3001\u6b21\u306e\u64cd\u4f5c\u3092\u5b9f\u884c\u3059\u308b\u3053\u3068\u3067\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u767a\u5c55\u3055\u305b\u3066\u3044\u304d\u307e\u3059\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"ColorEmitter\u3068\u3044\u3046\u540d\u524d\u306e\u65b0\u3057\u3044\u30ab\u30b9\u30bf\u30e0\uff65\u30b3\u30f3\u30c6\u30ca\u3092\u4f5c\u6210\u3059\u308b"),(0,n.kt)("li",{parentName:"ul"},'ColorEmitter\u306b"colorChanged"\u3068\u3044\u3046\u540d\u524d\u306e\u30ab\u30b9\u30bf\u30e0\uff65\u30c8\u30ea\u30ac\u3092\u8ffd\u52a0\u3059\u308b'),(0,n.kt)("li",{parentName:"ul"},"colorChanged\u30c8\u30ea\u30ac\u3092\u4f7f\u7528\u3057\u3066\u3001\u30dc\u30bf\u30f3\u304c\u62bc\u3055\u308c\u305f\u3068\u304d\u306b\u30e9\u30f3\u30c0\u30e0\u306a\u8272\u3092\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u4fe1\u53f7\u3067\u9001\u308b"),(0,n.kt)("li",{parentName:"ul"},"colorChanged\u30c8\u30ea\u30ac\u3092\u53d7\u3051\u53d6\u308b\u305f\u3081\u306e\u30a4\u30f3\u30bf\u30e9\u30af\u30b7\u30e7\u30f3\u3092\u30b9\u30af\u30ea\u30fc\u30f3\u3067\u8a2d\u5b9a\u3059\u308b"),(0,n.kt)("li",{parentName:"ul"},"ColorEmitter\u304c\u9001\u4fe1\u3057\u305f\u8272\u3092\u4f7f\u7528\u3057\u3066\u3001\u30d0\u30c3\u30af\u30b0\u30e9\u30a6\u30f3\u30c9\u306e\u30dc\u30c3\u30af\u30b9\u306e\u8272\u3092\u8a2d\u5b9a\u3059\u308b")),(0,n.kt)("p",null,"\u30ab\u30b9\u30bf\u30e0\uff65\u30c8\u30ea\u30ac\u3092\u4f7f\u7528\u3057\u3066\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3067\u30a4\u30d9\u30f3\u30c8\u3092\u4f55\u304b\u9001\u3063\u3066\u307f\u307e\u3057\u3087\u3046\u3002 \u30dc\u30bf\u30f3\u306e\u30a4\u30f3\u30bf\u30e9\u30af\u30b7\u30e7\u30f3\u3067\u30e9\u30f3\u30c0\u30e0\u306a\u8272\u3092",(0,n.kt)("inlineCode",{parentName:"p"},"setBackgroundColor"),"\u306b\u6e21\u3059\u4ee3\u308f\u308a\u306b\u3001\u30ab\u30b9\u30bf\u30e0\uff65\u30b3\u30f3\u30c6\u30ca\u304b\u3089\u30e9\u30f3\u30c0\u30e0\u306a\u8272\u3092\u30b9\u30af\u30ea\u30fc\u30f3\u306b\u9001\u308a\u3001\u305d\u306e\u5024\u3092\u30b9\u30af\u30ea\u30fc\u30f3\u304c\u4f7f\u7528\u3059\u308b\u3088\u3046\u306b\u3057\u3066\u307f\u307e\u3057\u3087\u3046\u3002 \u3053\u308c\u306f\u6700\u7d42\u7684\u306b\u30011\u3064\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u5185\u3067\u3055\u307e\u3056\u307e\u306aUI\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u304c\u76f8\u4e92\u306b\u3084\u308a\u53d6\u308a\u3057\u3001\u3088\u308a\u5c0f\u3055\u304f\u3001\u3088\u308a\u518d\u5229\u7528\u53ef\u80fd\u306a\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u4f5c\u308a\u51fa\u3059\u30b7\u30f3\u30d7\u30eb\u306a\u4f8b\u306b\u306a\u308b\u306f\u305a\u3067\u3059\u3002"),(0,n.kt)("p",null,'\u6700\u521d\u306b\u3001\u65b0\u3057\u3044\u30ab\u30b9\u30bf\u30e0\uff65\u30b3\u30f3\u30c6\u30ca\u3092\u4f5c\u6210\u3057\u3001"ColorEmitter"\u3068\u3044\u3046\u540d\u524d\u3092\u4ed8\u3051\u307e\u3059\u3002 \u30dc\u30bf\u30f3\u3092\u633f\u5165\u3057\u3001"button"\u3068\u3044\u3046\u540d\u524d\u3092\u4ed8\u3051\u307e\u3059\u3002 \u4e0b\u306e\u753b\u50cf\u306e\u3088\u3046\u306a\u72b6\u614b\u306b\u306a\u308b\u306f\u305a\u3067\u3059\u3002'),(0,n.kt)(o.Z,{imageSource:"/img/tutorials/tutorial-05/color-emitter-custom-container-4-17.webp",mdxType:"Figure"},"ColorEmitter\u30ab\u30b9\u30bf\u30e0\uff65\u30b3\u30f3\u30c6\u30ca"),(0,n.kt)("p",null,"\u6b21\u306b\u3001\u30dc\u30bf\u30f3\u304c\u30af\u30ea\u30c3\u30af\u3055\u308c\u308b\u305f\u3073\u306b\u3001ColorEmitter\u304c\u30e9\u30f3\u30c0\u30e0\u306a\u8272\u3092\u5916\u754c\u306b\u653e\u3064\uff08\u30a8\u30df\u30c3\u30c8\uff09\u3088\u3046\u306b\u3057\u307e\u3059\u3002 \u3053\u308c\u3067\u8ab0\u3082\u304c\u3053\u306e\u653e\u305f\u308c\u305f\u8272\u3092\u541f\u5473\u3057\u3066\u3001\u76ee\u7684\u306b\u5408\u3063\u305f\u8272\u3092\u4f7f\u7528\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002 \u3053\u306e\u4f8b\u3067\u306f\u3001\u3053\u306e\u8272\u3092\u4f7f\u7528\u3057\u3066\u30d0\u30c3\u30af\u30b0\u30e9\u30a6\u30f3\u30c9\u306e\u8272\u3092\u8a2d\u5b9a\u3057\u3001\u524d\u306b\u5b9f\u884c\u3057\u305f\u52d5\u4f5c\u3068\u540c\u3058\u3088\u3046\u306a\u3053\u3068\u3092\u3059\u308b\u3060\u3051\u3067\u3059\u3002"),(0,n.kt)("p",null,'\u30ab\u30b9\u30bf\u30e0\uff65\u30b3\u30f3\u30c6\u30ca\u3067\u8272\u3092\u653e\u3064\u3088\u3046\u306b\u3059\u308b\u305f\u3081\u306b\u306f\u3001\u307e\u305a\u30ab\u30b9\u30bf\u30e0\uff65\u30c8\u30ea\u30ac\u3092\u4f5c\u6210\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002 \u30ab\u30b9\u30bf\u30e0\uff65\u30b3\u30f3\u30c6\u30ca\u306eProperties\u30bf\u30d6\u306b\u79fb\u52d5\u3057\u3066\u3001"Triggers"\u30b0\u30eb\u30fc\u30d7\uff081\uff09\u3067+\u30dc\u30bf\u30f3\u3092\u62bc\u3057\u307e\u3059\u3002 \u30c8\u30ea\u30ac\u306b"colorChanged"\u3068\u3044\u3046\u540d\u524d\u3092\u4ed8\u3051\u3001"The color has changed"\u3068\u3044\u3046\u8aac\u660e\u3092\u5165\u529b\u3057\u3066\u3001\u30bf\u30a4\u30d7\u3092"colortype"\u306b\u8a2d\u5b9a\u3057\u307e\u3059\u3002'),(0,n.kt)(a.Z,{points:[[420,78]],imageSource:"/img/tutorials/tutorial-05/adding-custom-trigger-to-custom-container-4-17.webp",mdxType:"FigureWithPoints"},"\u30ab\u30b9\u30bf\u30e0\uff65\u30b3\u30f3\u30c6\u30ca\u306b\u30ab\u30b9\u30bf\u30e0\uff65\u30c8\u30ea\u30ac\u3092\u8ffd\u52a0"),(0,n.kt)("p",null,'\u6b21\u306b\u3001\u30ab\u30b9\u30bf\u30e0\uff65\u30b3\u30f3\u30c6\u30ca\u306eInteractions\u30bf\u30d6\u306b\u79fb\u52d5\u3057\u3066\u3001\u65b0\u3057\u3044\u30a4\u30f3\u30bf\u30e9\u30af\u30b7\u30e7\u30f3\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002 \u30c8\u30ea\u30ac"Button is clicked"\u3068\u3001\u30a2\u30af\u30b7\u30e7\u30f3"Emit colorChanged"\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002 \u3053\u3053\u3067\u306f\u30e9\u30f3\u30c0\u30e0\u306a\u8272\u3092\u4f1d\u3048\u305f\u3044\u306e\u3067\u3001Value\u30d7\u30ed\u30d1\u30c6\u30a3\u306b\u524d\u3068\u540c\u3058\u30b3\u30fc\u30c9\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002'),(0,n.kt)("pre",null,(0,n.kt)("code",g({parentName:"pre"},{className:"language-cpp"}),"touchgfx::Color::getColorFromRGB(rand()%256, rand()%256, rand()%256)\n")),(0,n.kt)(o.Z,{imageSource:"/img/tutorials/tutorial-05/emitting-color-changed-4-17.webp",mdxType:"Figure"},"\u30ab\u30b9\u30bf\u30e0\uff65\u30c8\u30ea\u30ac\u306e\u767a\u884c"),(0,n.kt)("p",null,"\u305f\u3060\u3057\u3001\u3053\u308c\u306f\u6700\u521d\u306f\u6a5f\u80fd\u3057\u307e\u305b\u3093\u3002\u30cd\u30fc\u30e0\u30b9\u30da\u30fc\u30b9",(0,n.kt)("inlineCode",{parentName:"p"},"touchgfx::Color"),'\u304c\u30ab\u30b9\u30bf\u30e0\uff65\u30b3\u30f3\u30c6\u30ca\u5185\u306b\u81ea\u52d5\u7684\u306b\u30a4\u30f3\u30af\u30eb\u30fc\u30c9\u3055\u308c\u306a\u3044\u304b\u3089\u3067\u3059\u3002 \u305d\u3053\u3067\u524d\u3068\u540c\u3058\u3088\u3046\u306b\u3001\u30ab\u30b9\u30bf\u30e0\uff65\u30b3\u30f3\u30c6\u30ca\u306b\u72ec\u81ea\u306e\u30a4\u30f3\u30af\u30eb\u30fc\u30c9\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002 \u30ab\u30b9\u30bf\u30e0\uff65\u30b3\u30f3\u30c6\u30ca\u306eProperties\u30bf\u30d6\u306b\u79fb\u52d5\u3057\u3001"Includes"\u30b0\u30eb\u30fc\u30d7\uff081\uff09\u306b\u6b21\u306e\u3088\u3046\u306b\u5165\u529b\u3057\u307e\u3059\u3002'),(0,n.kt)("pre",null,(0,n.kt)("code",g({parentName:"pre"},{className:"language-cpp"}),"#include <touchgfx/Color.hpp>\n")),(0,n.kt)(a.Z,{points:[[420,115]],imageSource:"/img/tutorials/tutorial-05/extra-includes-4-17.webp",mdxType:"FigureWithPoints"},"\u8ffd\u52a0\u306e\u30a4\u30f3\u30af\u30eb\u30fc\u30c9\u306e\u63d0\u4f9b"),(0,n.kt)("p",null,'\u6b21\u306b\u3001\u53e4\u3044\u30dc\u30bf\u30f3\u3092\u3001\u3053\u3053\u3067\u4f5c\u6210\u3057\u305f\u65b0\u3057\u3044ColorEmitter\u30ab\u30b9\u30bf\u30e0\uff65\u30b3\u30f3\u30c6\u30ca\u306b\u7f6e\u304d\u63db\u3048\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002 Screen1\u3092\u9078\u629e\u3057\u3001\u3053\u3053\u306b\u3042\u308b\u30dc\u30bf\u30f3\u3092\u524a\u9664\u3057\u307e\u3059\u3002 \u3053\u308c\u306b\u3088\u308a\u3001\u3053\u306e\u30dc\u30bf\u30f3\u3092\u4f7f\u7528\u3057\u3066\u3044\u305f\u30a4\u30f3\u30bf\u30e9\u30af\u30b7\u30e7\u30f3\u3067\u30c9\u30e1\u30a4\u30f3\uff65\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3059\u308b\u306e\u3067\u3001\u305d\u306e\u30a4\u30f3\u30bf\u30e9\u30af\u30b7\u30e7\u30f3\u3082\u524a\u9664\u3057\u307e\u3059\u3002\u305d\u3057\u3066\u3001ColorEmitter\u7528\u306b\u65b0\u3057\u3044\u30a4\u30f3\u30bf\u30e9\u30af\u30b7\u30e7\u30f3\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002 ColorEmitter\u306e\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3092Screen1\u306b\u633f\u5165\u3057\u3001Screen1\u306b\u65b0\u3057\u3044\u30a4\u30f3\u30bf\u30e9\u30af\u30b7\u30e7\u30f3\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002 \u30c8\u30ea\u30ac\u306b\u306f\u3001"ColorEmitter colorChanged happens"\u3068\u3044\u3046\u30aa\u30d7\u30b7\u30e7\u30f3\u304c\u8868\u793a\u3055\u308c\u308b\u306f\u305a\u3067\u3059\u3002 \u3053\u308c\u3092\u9078\u629e\u3057\u3001\u30a2\u30af\u30b7\u30e7\u30f3\u306b\u306f"Call Screen1 setBackgroundColor"\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002 \u6b21\u306b\u3001colorChanged\u30a8\u30df\u30c3\u30c8\u304b\u3089\u306e\u5024\u3092\u4f7f\u7528\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u304c\u3001\u3053\u308c\u306f\u5e38\u306b"value"\u3068\u3044\u3046\u540d\u524d\u306b\u306a\u308a\u307e\u3059\uff08\u3053\u306e\u8a18\u4e8b\u306e\u524d\u534a\u306e\u8aac\u660e\u3092\u53c2\u7167\uff09\u3002 \u3057\u305f\u304c\u3063\u3066\u3001Value\u30d7\u30ed\u30d1\u30c6\u30a3\u306b\u306f"value"\u3068\u5165\u529b\u3057\u307e\u3059\u3002'),(0,n.kt)(o.Z,{imageSource:"/img/tutorials/tutorial-05/emit-colorchanged-happens-interaction-4-17.webp",mdxType:"Figure"},"colorChanged\u30ab\u30b9\u30bf\u30e0\uff65\u30c8\u30ea\u30ac\u3092\u541f\u5473\u3059\u308b\u305f\u3081\u306e\u30a4\u30f3\u30bf\u30e9\u30af\u30b7\u30e7\u30f3\u3092\u8a2d\u5b9a"),(0,n.kt)("p",null,"\u3053\u3053\u3067\u30b7\u30df\u30e5\u30ec\u30fc\u30bf\u3092\u5b9f\u884c\u3057\u3001\u518d\u3073\u30dc\u30bf\u30f3\u3092\u62bc\u3057\u3066\u307f\u307e\u3059\u3002 \u540c\u3058\u52d5\u4f5c\u304c\u73fe\u308c\u3001\u30d0\u30c3\u30af\u30b0\u30e9\u30a6\u30f3\u30c9\u304c\u30e9\u30f3\u30c0\u30e0\u306a\u8272\u306b\u5909\u5316\u3057\u307e\u3059\u3002 \u305f\u3060\u3057\u4eca\u5ea6\u306f\u3001\u30b9\u30af\u30ea\u30fc\u30f3\u306b\u3059\u3079\u3066\u306e\u6a5f\u80fd\u3092\u5b9f\u88c5\u3059\u308b\u3060\u3051\u3067\u306a\u304f\u3001\u30b9\u30af\u30ea\u30fc\u30f3\u3068\u3088\u308a\u5c0f\u578b\u3067\u518d\u5229\u7528\u53ef\u80fd\u306a\u3044\u304f\u3064\u304b\u306e\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\uff08\u3059\u306a\u308f\u3061\u3001\u30b7\u30f3\u30d7\u30eb\u306aColorEmitter\uff09\u3068\u306e\u9593\u3067\u3001\u72ec\u81ea\u306e\u3084\u308a\u53d6\u308a\u304c\u3046\u307e\u304f\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3057\u305f\u3002"),(0,n.kt)(o.Z,{imageSource:"/img/tutorials/tutorial-05/random-color-result-final-4-17.webp",mdxType:"Figure"},"\u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3059\u308b\u3068\u30e9\u30f3\u30c0\u30e0\u306a\u8272\u306b\u306a\u308b"))}v.isMDXComponent=!0}}]);