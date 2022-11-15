"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[4173],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return s}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=r.createContext({}),u=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},p=function(t){var e=u(t.components);return r.createElement(c.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,c=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),m=u(n),s=a,h=m["".concat(c,".").concat(s)]||m[s]||d[s]||l;return n?r.createElement(h,o(o({ref:e},p),{},{components:n})):r.createElement(h,o({ref:e},p))}));function s(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i.mdxType="string"==typeof t?t:a,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},44035:function(t,e,n){var r=n(67294),a=n(25026);e.Z=function(t){const e=t.noShadow||!1,n=t.width,l=t.height,o=(0,a.Z)(t.imageSource);return e?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:o,target:"_blank"},r.createElement("img",{width:n,height:l,src:o})),r.createElement("p",null,t.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:o,target:"_blank"},r.createElement("img",{width:n,height:l,src:o})),r.createElement("p",null,t.children))}},88678:function(t,e,n){var r=n(67294);class a extends r.Component{render(){const t=`highlight highlight-${this.props.type}`;return r.createElement("div",{className:t},r.createElement("div",{className:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{className:"highlight-content"},this.props.children))}}e.Z=a},93054:function(t,e,n){var r=n(67294),a=n(88678);const l=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));class o extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:l},this.props.children)}}e.Z=o},84541:function(t,e,n){n.d(e,{Z:function(){return f}});var r=n(67294),a=n(86010),l=n(99492),o=n(39130),i=n(35096),c=n(33084),u="cardContainer_fWXF",p="cardTitle_rnsV",d="cardDescription_PWke";function m({href:t,children:e}){return r.createElement(o.Z,{href:t,className:(0,a.Z)("card padding--lg",u)},e)}function s({href:t,icon:e,title:n,description:l}){return r.createElement(m,{href:t},r.createElement("h2",{className:(0,a.Z)("text--truncate",p),title:n},e," ",n),l&&r.createElement("p",{className:(0,a.Z)("text--truncate",d),title:l},l))}function h({item:t}){const e=(0,l.Wl)(t);return e?r.createElement(s,{href:e,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,c.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function k({item:t}){var e;const n=(0,i.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,l.xz)(null!=(e=t.docId)?e:void 0);return r.createElement(s,{href:t.href,icon:n,title:t.label,description:null==a?void 0:a.description})}function g({item:t}){switch(t.type){case"link":return r.createElement(k,{item:t});case"category":return r.createElement(h,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function f({items:t,className:e}){return r.createElement("section",{className:(0,a.Z)("row",e)},function(t){return t.filter((t=>"category"!==t.type||!!(0,l.Wl)(t)))}(t).map(((t,e)=>r.createElement("article",{key:e,className:"col col--6 margin-bottom--lg"},r.createElement(g,{item:t})))))}},79665:function(t,e,n){n.r(e),n.d(e,{assets:function(){return N},contentTitle:function(){return f},default:function(){return w},frontMatter:function(){return g},metadata:function(){return b},toc:function(){return y}});var r=n(3905),a=n(44035),l=n(93054),o=n(84541),i=n(99492),c=Object.defineProperty,u=Object.defineProperties,p=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,h=(t,e,n)=>e in t?c(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,k=(t,e)=>{for(var n in e||(e={}))m.call(e,n)&&h(t,n,e[n]);if(d)for(var n of d(e))s.call(e,n)&&h(t,n,e[n]);return t};const g={id:"board-introduction",title:"\u30dc\u30fc\u30c9\u7acb\u3061\u4e0a\u3052\u306e\u6982\u8981"},f=void 0,b={unversionedId:"development/board-bring-up/board-introduction",id:"development/board-bring-up/board-introduction",title:"\u30dc\u30fc\u30c9\u7acb\u3061\u4e0a\u3052\u306e\u6982\u8981",description:"",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/development/board-bring-up/board-introduction.mdx",sourceDirName:"development/board-bring-up",slug:"/development/board-bring-up/board-introduction",permalink:"/4.20/ja/docs/development/board-bring-up/board-introduction",draft:!1,tags:[],version:"current",frontMatter:{id:"board-introduction",title:"\u30dc\u30fc\u30c9\u7acb\u3061\u4e0a\u3052\u306e\u6982\u8981"},sidebar:"docs",previous:{title:"\u5916\u90e8\u30e1\u30e2\u30ea",permalink:"/4.20/ja/docs/development/hardware-selection/hardware-components/hardware-selection-external-memories"},next:{title:"1. \u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u4f5c\u6210",permalink:"/4.20/ja/docs/development/board-bring-up/how-to/01-create-project"}},N={},y=[{value:"\u4f5c\u696d\u7528\u30c4\u30fc\u30eb",id:"tools-of-the-trade",level:2},{value:"\u6a5f\u80fd\u306e\u691c\u8a3c",id:"verification-of-functionality",level:2},{value:"\u5168\u4f53\u306e\u30d7\u30ed\u30bb\u30b9",id:"overall-process",level:2}],v={toc:y};function w(t){var e,n=t,{components:c}=n,h=((t,e)=>{var n={};for(var r in t)m.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&d)for(var r of d(t))e.indexOf(r)<0&&s.call(t,r)&&(n[r]=t[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(e=k(k({},v),h),u(e,p({components:c,mdxType:"MDXLayout"}))),(0,r.kt)(a.Z,{imageSource:"/img/development/board-bring-up/activities-selected-001.png",noShadow:!0,width:"600",mdxType:"Figure"},"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u4f5c\u696d"),(0,r.kt)("p",null,"\u3053\u306e\u7ae0\u3067\u306f\u3001\u65b0\u3057\u3044\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u4e0a\u3067TouchGFX\u306e\u30d7\u30ed\u30b0\u30e9\u30df\u30f3\u30b0\u3092\u958b\u59cb\u3059\u308b\u3001\u30dc\u30fc\u30c9\u306e\u7acb\u3061\u4e0a\u3052\u30d5\u30a7\u30fc\u30ba\u306b\u3064\u3044\u3066\u89e3\u8aac\u3057\u307e\u3059\u3002 \u30dc\u30fc\u30c9\u306e\u7acb\u3061\u4e0a\u3052\u3068\u306f\u3001\u30dc\u30fc\u30c9\u306e\u5fc5\u8981\u90e8\u54c1\u3059\u3079\u3066\u3068\u5bfe\u5fdc\u3059\u308b\u30c9\u30e9\u30a4\u30d0\u304c\u6b63\u5e38\u306b\u6a5f\u80fd\u3059\u308b\u3053\u3068\u3092\u3001TouchGFX\u306e\u5c0e\u5165\u524d\u306b\u78ba\u8a8d\u3059\u308b\u3053\u3068\u3067\u3059\u3002"),(0,r.kt)("p",null,"\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\u3068\u3068\u3082\u306b\u6b63\u5e38\u306b\u6a5f\u80fd\u3059\u308b\u30dc\u30fc\u30c9\u304c\u3059\u3067\u306b\u3042\u308b\u5834\u5408\u3001\u3053\u306e\u30d5\u30a7\u30fc\u30ba\u306e\u4f5c\u696d\u306e\u591a\u304f\u306f\u7c21\u5358\u3067\u3059\u3002 \u5b8c\u5168\u306b\u65b0\u898f\u306e\u30ab\u30b9\u30bf\u30e0\uff65\u30dc\u30fc\u30c9\u306e\u5834\u5408\u306f\u3001\u3053\u306e\u30d5\u30a7\u30fc\u30ba\u3092\u5b8c\u4e86\u3059\u308b\u306b\u306f\u6570\u65e5\u3092\u8981\u3059\u308b\u3053\u3068\u304c\u4e88\u60f3\u3055\u308c\u307e\u3059\u3002 \u3057\u304b\u3057\u3001\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u304c\u4e0d\u5b89\u5b9a\u3067\u306f\u3001\u512a\u308c\u305f\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u4f5c\u6210\u304c\u56f0\u96e3\u306b\u306a\u308b\u305f\u3081\u3001\u901a\u5e38\u3001\u3053\u306e\u4f5c\u696d\u306f\u52b9\u679c\u3092\u3082\u305f\u3089\u3057\u307e\u3059\u3002 \u9006\u306b\u3001\u5b89\u5b9a\u3057\u3066\u5b9f\u7e3e\u306e\u3042\u308b\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u304c\u3042\u308c\u3070\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u4f5c\u6210\u306b\u96c6\u4e2d\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u3053\u306e\u7ae0\u306f\u3001\u30dc\u30fc\u30c9\u4e0a\u306e\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\u304a\u3088\u3073\u4f4e\u30ec\u30d9\u30eb\uff65\u30bd\u30d5\u30c8\u30a6\u30a7\u30a2\u306e\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u304c\u671f\u5f85\u901a\u308a\u306b\u52d5\u4f5c\u3059\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3059\u308b\u30bf\u30b9\u30af\u3092\u62c5\u5f53\u3059\u308b\u958b\u767a\u8005\u5411\u3051\u3067\u3059\u3002 \u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u5b9f\u969b\u306eUI\u958b\u767a\u306e\u307f\u306b\u643a\u308f\u308b\u958b\u767a\u8005\u306f\u5bfe\u8c61\u3068\u3057\u3066\u3044\u307e\u305b\u3093\u3002"),(0,r.kt)("p",null,"\u30dc\u30fc\u30c9\u306e\u7acb\u3061\u4e0a\u3052\u6642\u306b\u306f\u3001\u30dc\u30fc\u30c9\u4e0a\u306e\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3068\u30da\u30ea\u30d5\u30a7\u30e9\u30eb\u3001\u305d\u308c\u3089\u3059\u3079\u3066\u306e\u9593\u306e\u63a5\u7d9a\u3001\u305d\u308c\u3089\u306e\u901a\u4fe1\u306b\u4f7f\u7528\u3055\u308c\u308b\u30d7\u30ed\u30c8\u30b3\u30eb\u3068\u305d\u308c\u305e\u308c\u3067\u4f7f\u7528\u3067\u304d\u308b / \u5fc5\u8981\u3068\u306a\u308b\u30c9\u30e9\u30a4\u30d0\uff65\u30b3\u30fc\u30c9\u306b\u3064\u3044\u3066\u3001\u6df1\u304f\u7406\u89e3\u3057\u3066\u3044\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,r.kt)(o.Z,{items:(0,i.jA)().items,mdxType:"DocCardList"}),(0,r.kt)("p",null,"\u6b21\u7ae0\u300c",(0,r.kt)("a",k({parentName:"p"},{href:"../touchgfx-hal-development/touchgfx-al-development-introduction"}),"TouchGFX AL\uff08\u62bd\u8c61\u5316\u30a2\u30d6\u30b9\u30c8\u30e9\u30af\u30b7\u30e7\u30f3\uff65\u30ec\u30a4\u30e4\uff09\u958b\u767a"),"\u300d\u3067\u306f\u3001\u4f7f\u7528\u3059\u308b\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\u304a\u3088\u3073\u30c9\u30e9\u30a4\u30d0\u4e0a\u3067\u306eTouchGFX\u306e\u52d5\u4f5c\u3092\u53ef\u80fd\u306b\u3059\u308b\u305f\u3081\u306e\u62bd\u8c61\u5316\u30ec\u30a4\u30e4\u306e\u4f5c\u6210\u65b9\u6cd5\u306b\u3064\u3044\u3066\u89e3\u8aac\u3057\u307e\u3059\u3002"),(0,r.kt)("h2",k({},{id:"tools-of-the-trade"}),"\u4f5c\u696d\u7528\u30c4\u30fc\u30eb"),(0,r.kt)("p",null,"\u6b21\u306e\u8868\u306f\u3001STM32\u30d9\u30fc\u30b9\u306e\u30dc\u30fc\u30c9\u306e\u7acb\u3061\u4e0a\u3052\u306b\u4f7f\u7528\u3059\u308b\u91cd\u8981\u306a\u30c4\u30fc\u30eb\u306e\u4e00\u90e8\u3092\u793a\u3057\u305f\u3082\u306e\u3067\u3059\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",k({parentName:"tr"},{align:null}),"\u30c4\u30fc\u30eb"),(0,r.kt)("th",k({parentName:"tr"},{align:null}),"\u8aac\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),"STM32CubeMX"),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"\u30de\u30a4\u30af\u30ed\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u306e\u8a2d\u5b9a\u3068\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u304a\u3088\u3073\u5185\u90e8\u30da\u30ea\u30d5\u30a7\u30e9\u30eb\u306e\u521d\u671f\u5316\u30bd\u30fc\u30b9\uff65\u30b3\u30fc\u30c9\u306e\u751f\u6210\u306e\u305f\u3081\u306e\u4f7f\u3044\u3084\u3059\u3044\u30c4\u30fc\u30eb\u3067\u3059")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),"STM32Cube\u30d5\u30a1\u30fc\u30e0\u30a6\u30a7\u30a2\uff65\u30d1\u30c3\u30b1\u30fc\u30b8"),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"\u4f7f\u7528\u3059\u308b\u30de\u30a4\u30af\u30ed\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\uff65\u30d5\u30a1\u30df\u30ea\u5411\u3051\u306eSTM32Cube\u30d5\u30a1\u30fc\u30e0\u30a6\u30a7\u30a2\uff65\u30d1\u30c3\u30b1\u30fc\u30b8\u306b\u306f\u3001\u5404\u7a2e\u30da\u30ea\u30d5\u30a7\u30e9\u30eb\u306e\u4f7f\u7528\u6cd5\u304c\u308f\u304b\u308b\u591a\u6570\u306e\u30b5\u30f3\u30d7\u30eb\uff65\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u304a\u3088\u3073\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304c\u542b\u307e\u308c\u3066\u3044\u307e\u3059\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),"\u30d9\u30f3\u30c0\u306e\u30c7\u30fc\u30bf\u30b7\u30fc\u30c8"),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\u3084Flash\u306a\u3069\u306e\u5916\u90e8\u30c7\u30d0\u30a4\u30b9\u306e\u30c7\u30fc\u30bf\u30b7\u30fc\u30c8\u306b\u306f\u3001\u30de\u30a4\u30af\u30ed\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9(\u4f8b: STM32CubeMX\u306b\u3088\u308b)\u3068\u5916\u90e8\u30c7\u30d0\u30a4\u30b9\u3092\u9069\u5207\u306b\u521d\u671f\u5316\u3059\u308b\u305f\u3081\u306e\u30bf\u30a4\u30df\u30f3\u30b0\u3084\u96fb\u5727\u306a\u3069\u3001\u91cd\u8981\u306a\u60c5\u5831\u304c\u8a18\u8f09\u3055\u308c\u3066\u3044\u307e\u3059\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),"\u30d9\u30f3\u30c0\u306e\u30c9\u30e9\u30a4\u30d0\uff65\u30b3\u30fc\u30c9"),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"\u6642\u9593\u3092\u7bc0\u7d04\u3059\u308b\u305f\u3081\u3001\u5916\u90e8\u30c7\u30d0\u30a4\u30b9\u306e\u30b5\u30f3\u30d7\u30eb\uff65\u30b3\u30fc\u30c9\u3092\u30d9\u30f3\u30c0\u306b\u8981\u6c42\u3057\u3066\u304f\u3060\u3055\u3044\u3002 \u30c9\u30e9\u30a4\u30d0\uff65\u30b3\u30fc\u30c9\u306f\u3001\u591a\u304f\u306e\u5834\u5408\u3001STM32\u30de\u30a4\u30af\u30ed\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u3078\u306e\u79fb\u690d\u304c\u5fc5\u8981\u3067\u3059\u304c\u3001\u3053\u306e\u65b9\u304c\u30bc\u30ed\u304b\u3089\u4f5c\u6210\u3059\u308b\u3088\u308a\u3082\u7c21\u5358\u306b\u306a\u308b\u3053\u3068\u3082\u3088\u304f\u3042\u308a\u307e\u3059\u3002")))),(0,r.kt)("p",null,"\u30dc\u30fc\u30c9\u306e\u7acb\u3061\u4e0a\u3052\u30d5\u30a7\u30fc\u30ba\u3067\u5b9f\u65bd\u3059\u308b\u4f5c\u696d\u306f\u3001\u3044\u305a\u308c\u3082TouchGFX\u304b\u3089\u306f\u72ec\u7acb\u3057\u3066\u3044\u308b\u305f\u3081\u3001TouchGFX\u306e\u30b3\u30fc\u30c9\u306f\u542b\u3081\u306a\u3044\u3067\u304f\u3060\u3055\u3044\u3002 \u3053\u3053\u3067\u306e\u4f5c\u696d\u304a\u3088\u3073\u5f97\u3089\u308c\u308b\u30b3\u30fc\u30c9\u306f\u3001TouchGFX\u62bd\u8c61\u5316\u30ec\u30a4\u30e4\u306e\u958b\u767a\u306e\u78ba\u56fa\u3068\u3057\u305f\u57fa\u76e4\u3068\u306a\u308a\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u7b2c\u4e00\u306e\u76ee\u6a19\u306f\u3001\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\u3068\u4f4e\u30ec\u30d9\u30eb\u306e\u30bd\u30d5\u30c8\u30a6\u30a7\u30a2\u304c\u6700\u7d42\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u5bfe\u3059\u308b\u671f\u5f85\u901a\u308a\u306b\u5b9f\u969b\u306b\u52d5\u4f5c\u3059\u308b\u3053\u3068\u306e\u78ba\u8a8d\u3067\u3059\u3002"),(0,r.kt)("h2",k({},{id:"verification-of-functionality"}),"\u6a5f\u80fd\u306e\u691c\u8a3c"),(0,r.kt)("p",null,"\u30dc\u30fc\u30c9\u306e\u7acb\u3061\u4e0a\u3052\u306b\u304a\u3044\u3066\u30011\u3064\u4ee5\u4e0a\u306e\u30c6\u30b9\u30c8\uff65\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3068\u3044\u3046\u5f62\u3067\u751f\u6210\u3055\u308c\u308b\u30b3\u30fc\u30c9\u306b\u306f2\u3064\u306e\u76ee\u7684\u304c\u3042\u308a\u307e\u3059\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",k({parentName:"tr"},{align:null})),(0,r.kt)("th",k({parentName:"tr"},{align:null})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),"\u62bd\u8c61\u5316\u30ec\u30a4\u30e4"),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"\u30dc\u30fc\u30c9\u521d\u671f\u5316\u30b3\u30fc\u30c9\u306f\u3001TouchGFX AL\u3001\u304a\u3088\u3073\u6700\u7d42\u7684\u306b\u6a5f\u80fd\u3059\u308bUI\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u69cb\u7bc9\u306e\u305f\u3081\u306e\u57fa\u76e4\u3068\u306a\u308a\u307e\u3059\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),"\u30c6\u30b9\u30c8\uff65\u30b3\u30fc\u30c9"),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"\u30dc\u30fc\u30c9\u521d\u671f\u5316\u30b3\u30fc\u30c9\u3068\u3068\u3082\u306b\u4f5c\u6210\u3055\u308c\u308b\u691c\u8a3c\u30b3\u30fc\u30c9\u306f\u3001\u671f\u5f85\u901a\u308a\u306e\u52d5\u4f5c\u304c\u5f97\u3089\u308c\u306a\u304b\u3063\u305f\u5834\u5408\u306e\u6700\u5f8c\u306e\u3088\u308a\u3069\u3053\u308d\u306b\u306a\u308a\u307e\u3059\u3002 \u30dc\u30fc\u30c9\u306e\u7acb\u3061\u4e0a\u3052\u30d5\u30a7\u30fc\u30ba\u3067\u306f\u3001\u30dc\u30fc\u30c9\u3068\u5404\u7279\u5b9a\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u304c\u671f\u5f85\u901a\u308a\u52d5\u4f5c\u3059\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3059\u308b\u3001\u5c0f\u3055\u306a\u691c\u8a3c\u30d7\u30ed\u30b0\u30e9\u30e0\u3092\u591a\u6570\u4f5c\u6210\u3057\u307e\u3059\u3002 \u3053\u308c\u3089\u306e\u691c\u8a3c\u30d7\u30ed\u30b0\u30e9\u30e0\u306f\u3001\u958b\u767a\u3092\u9032\u3081\u308b\u4e0a\u3067\u6975\u3081\u3066\u8cb4\u91cd\u306a\u3082\u306e\u3068\u306a\u308a\u3001\u4f55\u3089\u304b\u306e\u4e0d\u78ba\u304b\u306a\u6319\u52d5\u304c\u898b\u3089\u308c\u305f\u3068\u304d\u306b\u518d\u5229\u7528\u3057\u305f\u308a\u3001\u5f37\u5316\u3057\u305f\u308a\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002")))),(0,r.kt)("p",null,"\u4e0a\u8a18\u306e2\u3064\u306e\u7406\u7531\u304b\u3089\u3001\u691c\u8a3c\u30d7\u30ed\u30b0\u30e9\u30e0\u3092\u4f53\u7cfb\u7684\u306b\u4fdd\u5b58\u3057\u3066\u304a\u304f\u3053\u3068\u306f\u6975\u3081\u3066\u6709\u52b9\u3067\u3059\u3002 \u3053\u308c\u306b\u3088\u3063\u3066\u3001\u5f8c\u3067\u3001\u30c6\u30b9\u30c8\uff65\u30d7\u30ed\u30b0\u30e9\u30e0\u3092\u518d\u5229\u7528\u3067\u304d\u307e\u3059\u3002 \u305f\u3068\u3048\u3070\u3001\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\u306e\u65b0\u3057\u3044\u30ea\u30d3\u30b8\u30e7\u30f3\u3092\u30c6\u30b9\u30c8\u3059\u308b\u5834\u5408\u3084\u3001\u3088\u308a\u5927\u898f\u6a21\u306a\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3067\u4e88\u671f\u305b\u306c\u969c\u5bb3\u304c\u767a\u751f\u3057\u305f\u3068\u304d\u306b\u6839\u672c\u539f\u56e0\u3092\u7a76\u660e\u3059\u308b\u5834\u5408\u306a\u3069\u306b\u5f79\u7acb\u3061\u307e\u3059\u3002 \u307e\u305f\u3001\u958b\u767a\u4e2d\u306b\u5f97\u3089\u308c\u305f\u6e2c\u5b9a\u5024\uff08\u305f\u3068\u3048\u3070\u30e1\u30e2\u30ea\u5e2f\u57df\u5e45\uff09\u3092\u3001\u7cfb\u7d71\u7684\u306b\u30e1\u30e2\u3057\u3066\u304a\u304f\u3053\u3068\u3082\u63a8\u5968\u3057\u307e\u3059\u3002"),(0,r.kt)(a.Z,{imageSource:"/img/development/board-bring-up/components-selected-001.png",noShadow:!0,width:"600",mdxType:"Figure"},"TouchGFX AL\u306e\u57fa\u76e4\u3068\u306a\u308b\u30dc\u30fc\u30c9\u521d\u671f\u5316\u30b3\u30fc\u30c9"),(0,r.kt)("h2",k({},{id:"overall-process"}),"\u5168\u4f53\u306e\u30d7\u30ed\u30bb\u30b9"),(0,r.kt)("p",null,"\u30e6\u30fc\u30b6\u306e\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\u306e\u5177\u4f53\u7684\u306a\u69cb\u6210\u304c\u4e0d\u660e\u3067\u3042\u308b\u305f\u3081\u3001\u4ee5\u4e0b\u306e\u300c",(0,r.kt)("a",k({parentName:"p"},{href:"how-to/01-create-project"}),"\u7acb\u3061\u4e0a\u3052\u65b9\u6cd5"),"\u300d\u30ac\u30a4\u30c9\u3067\u306f\u3001TouchGFX\u3092\u5b9f\u884c\u3059\u308b\u305f\u3081\u306e\u30dc\u30fc\u30c9\u306e\u7acb\u3061\u4e0a\u3052\u3068\u6e96\u5099\u306b\u5fc5\u8981\u306a\u4e00\u822c\u7684\u306a\u30b9\u30c6\u30c3\u30d7\u3092\u3001\u6bb5\u968e\u3092\u8ffd\u3063\u3066\u793a\u3057\u3066\u3044\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u30ac\u30a4\u30c9\u306e\u5404\u30b9\u30c6\u30c3\u30d7\u304c\u3001\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\u3084\u30bd\u30d5\u30c8\u30a6\u30a7\u30a2\u306e\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u7279\u5b9a\u306e1\u7b87\u6240\u306e\u7acb\u3061\u4e0a\u3052\u65b9\u6cd5\u306b\u5bfe\u5fdc\u3057\u3066\u3044\u307e\u3059\u3002 \u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\u306e\u30ab\u30b9\u30bf\u30e0\uff65\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u90e8\u5206\u306e\u4e00\u4f8b\u304c\u30bf\u30c3\u30c1\uff65\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u3067\u3059\u3002 \u5168\u4f53\u7684\u306a\u76ee\u6a19\u306f\u3001\u30bf\u30c3\u30c1\uff65\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u3092\u64cd\u4f5c\u3057\u3066\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\u4e0a\u306e\u4efb\u610f\u306e\u30bf\u30c3\u30c1\u3067\u60c5\u5831\u3092\u53d6\u5f97\u3059\u308b\u3053\u3068\u3067\u3059\u3002 \u30bf\u30c3\u30c1\uff65\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u306b\u9001\u4fe1\u3059\u308b\u5177\u4f53\u7684\u306a\u30b3\u30de\u30f3\u30c9\u306f\u3001\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\u3067\u4f7f\u7528\u3057\u3066\u3044\u308b\u7279\u5b9a\u306e\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u306b\u3088\u3063\u3066\u6c7a\u307e\u308b\u305f\u3081\u3001\u3053\u306e\u30ac\u30a4\u30c9\u3067\u306f\u305d\u306e\u3059\u3079\u3066\u306e\u65b9\u6cd5\u3092\u793a\u3059\u3053\u3068\u306f\u3067\u304d\u307e\u305b\u3093\u3002 \u3057\u305f\u304c\u3063\u3066\u3001\u672c\u30ac\u30a4\u30c9\u306e\u60c5\u5831\u3068\u3001\u4f7f\u7528\u3059\u308b\u30bf\u30c3\u30c1\uff65\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u306e\u30c7\u30fc\u30bf\u30b7\u30fc\u30c8\u306e\u60c5\u5831\u3092\u7d44\u307f\u5408\u308f\u305b\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,r.kt)(l.Z,{mdxType:"Note"},"\u30ab\u30b9\u30bf\u30e0\uff65\u30dc\u30fc\u30c9\u7acb\u3061\u4e0a\u3052\u306e\u305f\u3081\u306b\u3053\u306e\u30b9\u30c6\u30c3\u30d7\u30d0\u30a4\u30b9\u30c6\u30c3\u30d7\u30ac\u30a4\u30c9\u3092\u8aad\u307f\u3001\u5b9f\u884c\u3059\u308b\u969b\u306f\u3001\u4ee5\u4e0b\u3092\u63a8\u5968\u3057\u307e\u3059\u3002",(0,r.kt)("ul",null,(0,r.kt)("li",null,"\u4e00\u5ea6\u306b1\u30b9\u30c6\u30c3\u30d7\u305a\u3064\u5b9f\u884c\u3059\u308b\u3053\u3068"),(0,r.kt)("li",null,"\u6b21\u306b\u9032\u3080\u524d\u306b\u5404\u30b9\u30c6\u30c3\u30d7\u3092\u5fb9\u5e95\u7684\u306b\u691c\u8a3c\u3059\u308b\u3053\u3068"),(0,r.kt)("li",null,"\u610f\u56f3\u3059\u308b\u52d5\u4f5c\u304c\u5f97\u3089\u308c\u306a\u304b\u3063\u305f\u5834\u5408\u3001\u30ac\u30a4\u30c9\u3092\u30c7\u30d0\u30c3\u30b0\u306e\u624b\u6bb5\u3068\u3057\u3066\u4f7f\u7528\u3059\u308b\u304b\u3001\u524d\u306e\u30b9\u30c6\u30c3\u30d7\u306b\u623b\u3063\u3066\u30df\u30b9\u304c\u306a\u3044\u304b\u3092\u78ba\u8a8d\u3059\u308b\u3053\u3068"),(0,r.kt)("li",null,"\u4e88\u60f3\u5916\u306e\u6319\u52d5\u3092\u793a\u3057\u3066\u3082\u614c\u3066\u306a\u3044\u3053\u3068 - \u30dc\u30fc\u30c9\u306e\u7acb\u3061\u4e0a\u3052\u306f\u305d\u308c\u307b\u3069\u7c21\u5358\u306a\u30bf\u30b9\u30af\u3067\u306f\u3042\u308a\u307e\u305b\u3093\u3002"))),(0,r.kt)("p",null,"\u30ac\u30a4\u30c9\u306e\u5404\u30b9\u30c6\u30c3\u30d7\u306f\u3001\u6b21\u306e\u3088\u3046\u306b\u69cb\u6210\u3055\u308c\u3066\u3044\u307e\u3059\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u76ee\u7684"),": \u3053\u306e\u30d1\u30fc\u30c8\u3067\u306f\u3001\u30b9\u30c6\u30c3\u30d7\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u3001\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\u3067TouchGFX\u3092\u5b9f\u884c\u3059\u308b\u305f\u3081\u306e\u6e96\u5099\u3068\u3057\u3066\u3053\u306e\u30b9\u30c6\u30c3\u30d7\u304c\u91cd\u8981\u3067\u3042\u308b\u7406\u7531\u3092\u793a\u3057\u307e\u3059\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u76ee\u6a19"),": \u3053\u306e\u30d1\u30fc\u30c8\u3067\u306f\u3001\u3053\u306e\u30b9\u30c6\u30c3\u30d7\u306e\u76ee\u6a19\u306e\u4e00\u89a7\u3092\u793a\u3057\u307e\u3059\u3002 \u691c\u8a3c\u30dd\u30a4\u30f3\u30c8\u306e\u4e00\u89a7\u3067\u306f\u3001\u5b9f\u884c\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\u5177\u4f53\u7684\u306a\u30c6\u30b9\u30c8\u306b\u3064\u3044\u3066\u8a73\u8ff0\u3057\u307e\u3059\u3002 \u3053\u308c\u3089\u306e\u691c\u8a3c\u30dd\u30a4\u30f3\u30c8\u306b\u3088\u308a\u3001\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\u3067TouchGFX\u3092\u9069\u5207\u306b\u5b9f\u884c\u3059\u308b\u305f\u3081\u306b\u5fc5\u8981\u306a\u8981\u4ef6\u3092\u3001\u30bd\u30d5\u30c8\u30a6\u30a7\u30a2\u304c\u5b9f\u65bd\u3057\u3066\u3044\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u524d\u63d0\u6761\u4ef6"),": \u3053\u3053\u306b\u306f\u3001\u30bf\u30b9\u30af\u3092\u5b9f\u884c\u3059\u308b\u305f\u3081\u306b\u5fc5\u8981\u306a\u9805\u76ee\u304c\u5217\u6319\u3055\u308c\u3066\u3044\u307e\u3059\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u4f5c\u696d\u5185\u5bb9"),": \u3053\u306e\u30d1\u30fc\u30c8\u3067\u306f\u3001\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\u306e\u8a2d\u5b9a\u3068\u4f7f\u7528\u306b\u5fc5\u8981\u306a\u30bd\u30d5\u30c8\u30a6\u30a7\u30a2\u306e\u4f5c\u6210\u65b9\u6cd5\u3092\u3001\u53ef\u80fd\u306a\u9650\u308a\u5177\u4f53\u7684\u306b\u8aac\u660e\u3057\u307e\u3059\u3002 \u30bd\u30d5\u30c8\u30a6\u30a7\u30a2\u306f\u3001\u4f7f\u7528\u3059\u308b\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\u306b\u5927\u304d\u304f\u4f9d\u5b58\u3059\u308b\u305f\u3081\u3001\u305d\u308c\u307b\u3069\u53b3\u5bc6\u306b\u306f\u8aac\u660e\u3067\u304d\u306a\u3044\u30b9\u30c6\u30c3\u30d7\u3082\u3042\u308a\u307e\u3059\u3002 \u305d\u306e\u3088\u3046\u306a\u5834\u5408\u306f\u3001\u3088\u308a\u304a\u304a\u307e\u304b\u306b\u30b9\u30c6\u30c3\u30d7\u3092\u8a18\u8f09\u3057\u3066\u3044\u308b\u306e\u3067\u3001\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\u306b\u95a2\u9023\u3059\u308b\u8a73\u7d30\u60c5\u5831\u306f\u30e6\u30fc\u30b6\u304c\u81ea\u3089\u53ce\u96c6\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002")),(0,r.kt)("p",null,"\u500b\u3005\u306e\u30cf\u30a6\u30c4\u30fc\uff65\u30b9\u30c6\u30c3\u30d7\u306f\u6b21\u306e\u3068\u304a\u308a\u3067\u3059\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",k({parentName:"tr"},{align:null}),"\u30b9\u30c6\u30c3\u30d7"),(0,r.kt)("th",k({parentName:"tr"},{align:null}),"\u5185\u5bb9"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)("a",k({parentName:"td"},{href:"how-to/01-create-project"}),"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u4f5c\u6210")),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"STM32CubeMX\u306b\u7a7a\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)("a",k({parentName:"td"},{href:"how-to/02-cpu-running"}),"CPU\u52d5\u4f5c")),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"\u30de\u30a4\u30af\u30ed\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u304c\u76ee\u7684\u306e\u30b9\u30d4\u30fc\u30c9\u3067\u52d5\u4f5c\u3057\u3066\u3044\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3057\u307e\u3059\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)("a",k({parentName:"td"},{href:"how-to/03-display-internal"}),"\u5185\u90e8RAM\u306b\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u304c\u914d\u7f6e\u3055\u308c\u305f\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4")),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"\u5185\u90e8RAM\u306b\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u3092\u5272\u308a\u5f53\u3066\u3001\u3053\u308c\u3092\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\u306b\u9001\u4fe1\u3057\u307e\u3059\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)("a",k({parentName:"td"},{href:"how-to/04-enable-external-ram"}),"\u5916\u90e8RAM")),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"\u5916\u90e8RAM\u3092\u6709\u52b9\u5316\u3057\u307e\u3059\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)("a",k({parentName:"td"},{href:"how-to/05-display-external"}),"\u5916\u90e8RAM\u306b\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u304c\u914d\u7f6e\u3055\u308c\u305f\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4")),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u3092\u5916\u90e8RAM\u306b\u79fb\u52d5\u3057\u3066\u3001\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\u306b\u9001\u4fe1\u3057\u307e\u3059\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)("a",k({parentName:"td"},{href:"how-to/06-flash-external-addressable"}),"\u5916\u90e8Flash\uff08\u30e1\u30e2\u30ea\uff65\u30de\u30c3\u30d7\u30c9\uff65\u30e2\u30fc\u30c9\uff09")),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"\u5916\u90e8\u306e\u30e1\u30e2\u30ea\u30de\u30c3\u30d7\u30c9Flash\u3092\u6709\u52b9\u5316\u3057\u307e\u3059\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)("a",k({parentName:"td"},{href:"how-to/07-flash-external-nonaddressable"}),"\u5916\u90e8Flash\uff08\u975e\u30e1\u30e2\u30ea\uff65\u30de\u30c3\u30d7\u30c9\uff65\u30e2\u30fc\u30c9\uff09")),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"\u5916\u90e8\u306e\u30d6\u30ed\u30c3\u30af\u30e2\u30fc\u30c9Flash\u3092\u6709\u52b9\u5316\u3057\u307e\u3059\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)("a",k({parentName:"td"},{href:"how-to/08-hardware-acceleration"}),"\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\uff65\u30a2\u30af\u30bb\u30e9\u30ec\u30fc\u30bf")),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"Chrome-ART\u30b0\u30e9\u30d5\u30a3\u30c3\u30af\uff65\u30a2\u30af\u30bb\u30e9\u30ec\u30fc\u30bf\u3092\u6709\u52b9\u5316\u3057\u307e\u3059\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)("a",k({parentName:"td"},{href:"how-to/09-touch-controller"}),"\u30bf\u30c3\u30c1\uff65\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9")),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"\u30bf\u30c3\u30c1\uff65\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u3068\u306e\u901a\u4fe1\u3092\u8a2d\u5b9a\u3057\u307e\u3059\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)("a",k({parentName:"td"},{href:"how-to/10-physical-buttons"}),"\u7269\u7406\u30dc\u30bf\u30f3")),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"\u7269\u7406\u30dc\u30bf\u30f3\u3078\u306e\u30a2\u30af\u30bb\u30b9\u3092\u8a2d\u5b9a\u3057\u307e\u3059\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)("a",k({parentName:"td"},{href:"how-to/11-flash-loader"}),"Flash\u30ed\u30fc\u30c0")),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"\u5916\u90e8Flash\u306b\u30c7\u30fc\u30bf\u3092\u66f8\u304d\u8fbc\u3080\u65b9\u6cd5\u3092\u958b\u767a\u3057\u307e\u3059\u3002")))))}w.isMDXComponent=!0}}]);