"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[5439],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return k}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=u(n),k=a,d=m["".concat(i,".").concat(k)]||m[k]||c[k]||l;return n?r.createElement(d,o(o({ref:t},s),{},{components:n})):r.createElement(d,o({ref:t},s))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},22425:function(e,t,n){var r=n(67294);class a extends r.Component{render(){return r.createElement("div",{className:"code-header"},r.createElement("div",null,r.createElement("h5",null,this.props.children)))}}t.Z=a},45075:function(e,t,n){n.r(t),n.d(t,{assets:function(){return f},contentTitle:function(){return d},default:function(){return v},frontMatter:function(){return k},metadata:function(){return g},toc:function(){return h}});var r=n(3905),a=n(22425),l=Object.defineProperty,o=Object.defineProperties,p=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&c(e,n,t[n]);if(i)for(var n of i(t))s.call(t,n)&&c(e,n,t[n]);return e};const k={id:"operating-system",title:"\u30aa\u30da\u30ec\u30fc\u30c6\u30a3\u30f3\u30b0\uff65\u30b7\u30b9\u30c6\u30e0"},d=void 0,g={unversionedId:"basic-concepts/operating-system",id:"basic-concepts/operating-system",title:"\u30aa\u30da\u30ec\u30fc\u30c6\u30a3\u30f3\u30b0\uff65\u30b7\u30b9\u30c6\u30e0",description:"",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/basic-concepts/operating-system.mdx",sourceDirName:"basic-concepts",slug:"/basic-concepts/operating-system",permalink:"/touchgfx-test.github.io/ja/docs/basic-concepts/operating-system",draft:!1,tags:[],version:"current",frontMatter:{id:"operating-system",title:"\u30aa\u30da\u30ec\u30fc\u30c6\u30a3\u30f3\u30b0\uff65\u30b7\u30b9\u30c6\u30e0"},sidebar:"docs",previous:{title:"\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9",permalink:"/touchgfx-test.github.io/ja/docs/basic-concepts/performance"},next:{title:"\u30e1\u30e2\u30ea\u4f7f\u7528\u91cf",permalink:"/touchgfx-test.github.io/ja/docs/basic-concepts/memory-usage"}},f={},h=[{value:"\u6982\u8981",id:"introduction",level:2},{value:"\u4ed6\u306e\u30bf\u30b9\u30af\u3078\u306e\u30e6\u30fc\u30b6\uff65\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9\u306e\u30a4\u30f3\u30bf\u30ea\u30fc\u30d6",id:"interleaving-other-tasks-with-the-user-interface",level:3},{value:"\u4f8b",id:"an-example",level:3},{value:"RTOS",id:"rtos",level:2},{value:"\u30bf\u30b9\u30af\u306e\u901a\u4fe1",id:"task-communication",level:3},{value:"\u5272\u8fbc\u307f\u306e\u51e6\u7406",id:"handling-interrupts",level:3},{value:"FreeRTOS",id:"freertos",level:3},{value:"TouchGFX OS Wrappers",id:"touchgfx-os-wrappers",level:3},{value:"RTOS\u3092\u4f7f\u7528\u3057\u306a\u3044\u5834\u5408",id:"no-rtos",level:2},{value:"Model::tick",id:"modeltick",level:3},{value:"OSWrappers",id:"oswrappers",level:3}],y={toc:h};function v(e){var t,n=e,{components:l}=n,c=((e,t)=>{var n={};for(var r in e)u.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&s.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=m(m({},y),c),o(t,p({components:l,mdxType:"MDXLayout"}))),(0,r.kt)("h2",m({},{id:"introduction"}),"\u6982\u8981"),(0,r.kt)("p",null,"\u3053\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u3067\u306f\u3001\u30b0\u30e9\u30d5\u30a3\u30ab\u30eb\uff65\u30e6\u30fc\u30b6\uff65\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u304a\u3051\u308b\u30aa\u30da\u30ec\u30fc\u30c6\u30a3\u30f3\u30b0\uff65\u30b7\u30b9\u30c6\u30e0\u306e\u4f7f\u7528\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u7d44\u8fbc\u307f\u30c7\u30d0\u30a4\u30b9\u306f\u9032\u5316\u3092\u7d9a\u3051\u3066\u3044\u307e\u3059\u3002 \u307b\u3068\u3093\u3069\u306e\u30b7\u30b9\u30c6\u30e0\u3067\u3001\u30b0\u30e9\u30d5\u30a3\u30ab\u30eb\uff65\u30e6\u30fc\u30b6\uff65\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9\u3092\u51e6\u7406\u3059\u308b\u3060\u3051\u3067\u306a\u304f\u3001\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0\u3084\u30bf\u30b9\u30af\u306e\u8907\u96d1\u306a\u5236\u5fa1\u3092\u884c\u3046\u3053\u3068\u304c\u591a\u304f\u3042\u308a\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u3053\u308c\u3089\u306e\u30bf\u30b9\u30af\u306e\u4f8b\u306b\u306f\u3001\u30e2\u30fc\u30bf\u5236\u5fa1\u3001\u30c7\u30fc\u30bf\u53ce\u96c6\u3001\u307e\u305f\u306f\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u95a2\u9023\u30bf\u30b9\u30af\u306a\u3069\u304c\u3042\u308a\u307e\u3059\u3002 \u591a\u304f\u306e\u6700\u65b0\u30c7\u30d0\u30a4\u30b9\u306b\u306f\u3001\u30c7\u30fc\u30bf\uff65\u30bb\u30f3\u30bf\u30fc\u3068\u306e\u901a\u4fe1\u7528\u306eTCP/IP\u306a\u3069\u306e\u901a\u4fe1\u30d7\u30ed\u30c8\u30b3\u30eb\uff65\u30b9\u30bf\u30c3\u30af\u3084\u3001\u4ed6\u306e\u30ed\u30fc\u30ab\u30eb\uff65\u30c7\u30d0\u30a4\u30b9\u3068\u306e\u901a\u4fe1\u7528\u306eBluetooth\u306a\u3069\u306e\u7121\u7dda\u30b9\u30bf\u30c3\u30af\u304c\u542b\u307e\u308c\u3066\u3044\u307e\u3059\u3002"),(0,r.kt)("h3",m({},{id:"interleaving-other-tasks-with-the-user-interface"}),"\u4ed6\u306e\u30bf\u30b9\u30af\u3078\u306e\u30e6\u30fc\u30b6\uff65\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9\u306e\u30a4\u30f3\u30bf\u30ea\u30fc\u30d6"),(0,r.kt)("p",null,"\u30b0\u30e9\u30d5\u30a3\u30ab\u30eb\uff65\u30e6\u30fc\u30b6\uff65\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9\u3068\u5c11\u6570\u306e\u5358\u7d14\u306a\u30b5\u30dd\u30fc\u30c8\uff65\u30bf\u30b9\u30af\u306b\u3088\u308b\u3001\u5358\u7d14\u306a\u30c7\u30d0\u30a4\u30b9\uff08\u30a8\u30c3\u30b0\uff65\u30bf\u30a4\u30de\u30fc\u306a\u3069\uff09\u3067\u306f\u3001\u30e6\u30fc\u30b6\uff65\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9\uff65\u30b3\u30fc\u30c9\u306b\u57fa\u3065\u3044\u3066\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u5168\u4f53\u3092\u69cb\u7bc9\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002 \u5b9a\u671f\u7684\u306a\u30e6\u30fc\u30b6\uff65\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9\u306e\u66f4\u65b0\u306e\u4ed6\u306b\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304c\u5b9f\u884c\u3059\u308b\u30bf\u30b9\u30af\u306f\u307b\u3068\u3093\u3069\u306a\u3044\u306e\u3067\u3001\u4ed6\u306e\u30bf\u30b9\u30af\u306e\u5b9f\u884c\u306f\u3001\u30e6\u30fc\u30b6\uff65\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9\uff65\u30b3\u30fc\u30c9\u306b\u304b\u306a\u308a\u4e0a\u624b\u304f\u7d44\u307f\u8fbc\u3080\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u305f\u3060\u3057\u3001\u30e2\u30fc\u30bf\u306e\u8abf\u7bc0\u306a\u3069\u3001\u500b\u5225\u306e\u30bf\u30a4\u30df\u30f3\u30b0\u3067\u300c\u30d0\u30c3\u30af\u30b0\u30e9\u30a6\u30f3\u30c9\u3067\u5b9f\u884c\u300d\u3055\u308c\u308b\u975e\u5e38\u306b\u9ad8\u5ea6\u306a\u6a5f\u80fd\u304c\u30c7\u30d0\u30a4\u30b9\u306b\u542b\u307e\u308c\u305f\u9014\u7aef\u306b\u3001\u305d\u3046\u3057\u305f\u8981\u4ef6\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u304c\u30892\u3064\u306e\u30bf\u30b9\u30af\u30921\u3064\u306b\u7d71\u5408\u3059\u308b\u3053\u3068\u306f\u56f0\u96e3\u306b\u306a\u308a\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u524d\u306e\u8a18\u4e8b\u3067\u8aac\u660e\u3057\u305f\u3088\u3046\u306b\u3001\u30b0\u30e9\u30d5\u30a3\u30c3\u30af\uff65\u30a8\u30f3\u30b8\u30f3\u306f\u6ed1\u3089\u304b\u306a\u30e6\u30fc\u30b6\uff65\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9\u3092\u30b5\u30dd\u30fc\u30c8\u3059\u308b\u305f\u3081\u306b\u3001\u65b0\u3057\u3044\u30d5\u30ec\u30fc\u30e0\u3092\u63cf\u753b\u3057\u7d9a\u3051\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002 \u4ed6\u306e\u30bf\u30b9\u30af\u306e\u5b9f\u884c\u4e2d\u306b\u30b0\u30e9\u30d5\u30a3\u30c3\u30af\uff65\u30a8\u30f3\u30b8\u30f3\u304c\u3053\u308c\u3092\u4e00\u6642\u505c\u6b62\u3059\u308b\u3068\u3001\u30d5\u30ec\u30fc\u30e0\uff65\u30ec\u30fc\u30c8\u304c\u4f4e\u4e0b\u3057\u307e\u3059\u3002 \u540c\u69d8\u306b\u3001\u4ed6\u306e\u30bf\u30b9\u30af\u3092\u30d5\u30ec\u30fc\u30e0\u3068\u30d5\u30ec\u30fc\u30e0\u306e\u9593\uff08\u30a2\u30a4\u30c9\u30eb\u6642\u9593\uff09\u306b\u306e\u307f\u5b9f\u884c\u3059\u308b\u5834\u5408\u306f\u3001\u30e6\u30fc\u30b6\uff65\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9\u304c\u8907\u96d1\u306a\u30b7\u30fc\u30f3\u3092\u63cf\u753b\u3057\u3066\u3044\u3066\u30a2\u30a4\u30c9\u30eb\u6642\u9593\u304c\u5c11\u306a\u304f\u306a\u308b\u3068\u3001\u3053\u308c\u3089\u306e\u30bf\u30b9\u30af\u306b\u652f\u969c\u304c\u51fa\u307e\u3059\u3002 \u3053\u3046\u3057\u305f\u5f71\u97ff\u304b\u3089\u3001UI\u30bf\u30b9\u30af\u306b\u4ed6\u306e\u8907\u96d1\u306a\u30bf\u30b9\u30af\u3092\u624b\u52d5\u3067\u30a4\u30f3\u30bf\u30ea\u30fc\u30d6\u3059\u308b\u3053\u3068\u306f\u56f0\u96e3\u3067\u3059\u3002"),(0,r.kt)("h3",m({},{id:"an-example"}),"\u4f8b"),(0,r.kt)("p",null,"\u3053\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u306e\u6b8b\u308a\u306e\u90e8\u5206\u3067\u306f\u3001\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\u4ed8\u304d\u306eBluetooth\u30b9\u30d4\u30fc\u30ab\u3092\u69cb\u7bc9\u3059\u308b\u3053\u3068\u306b\u3057\u307e\u3059\u3002 \u6b21\u306e3\u3064\u306e\u4e3b\u306a\u30bf\u30b9\u30af\u3092\u5b9f\u884c\u3057\u307e\u3059\u3002\u30b0\u30e9\u30d5\u30a3\u30ab\u30eb\uff65\u30e6\u30fc\u30b6\uff65\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9\u3092\u5b9f\u884c\u3059\u308b\u3001\u97f3\u697d\u3092\u30b9\u30d4\u30fc\u30ab\u306b\u9001\u308b\u3001\u4ed6\u306e\u30c7\u30d0\u30a4\u30b9\u3068\u901a\u4fe1\u3059\u308b\u305f\u3081\u306bBluetooth\u30b9\u30bf\u30c3\u30af\u3092\u51e6\u7406\u3059\u308b\u3001\u3068\u3044\u30463\u3064\u3067\u3059\u3002"),(0,r.kt)("p",null,"\u30e6\u30fc\u30b6\uff65\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9\u3092\u4e2d\u5fc3\u306b\u3057\u305f\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\uff65\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3\u304c\u3001\u3053\u306e\u30b1\u30fc\u30b9\u3067\u306f\u9069\u3057\u3066\u3044\u306a\u3044\u3053\u3068\u306f\u3059\u3050\u306b\u308f\u304b\u308b\u3067\u3057\u3087\u3046\u3002\u305f\u3068\u3048\u3070\u3001\u97f3\u697d\u306e\u30b3\u30fc\u30c9\u3068\u30e6\u30fc\u30b6\uff65\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9\u3092\u30d6\u30ec\u30f3\u30c9\u3057\u3001\u518d\u751f\u958b\u59cb\u7528\u306e\u30b3\u30fc\u30c9\u3092\u30e6\u30fc\u30b6\uff65\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9\u5185\u306e\u30dc\u30bf\u30f3\u7528\u306e\u30a4\u30d9\u30f3\u30c8\u30cf\u30f3\u30c9\u30e9\u306b\u914d\u7f6e\u3059\u308b\u3088\u3046\u306a\u3053\u3068\u3092\u60f3\u50cf\u3057\u3066\u307f\u3066\u304f\u3060\u3055\u3044\u3002 \u97f3\u697d\u304c\u59cb\u307e\u308b\u307e\u3067\u306e\u6642\u9593\u3001\u30e6\u30fc\u30b6\uff65\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9\u304c\u30ed\u30c3\u30af\u3055\u308c\u3066\u3057\u307e\u3044\u307e\u3059\u3002 \u5b9f\u884c\u4e2d\u306e\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u304c\u3057\u3070\u3089\u304f\u306e\u9593\u505c\u6b62\u3057\u3066\u3057\u307e\u3046\u306e\u3067\u3059\u3002"),(0,r.kt)("p",null,"\u4e00\u822c\u7684\u306b\u3001\u30e6\u30fc\u30b6\uff65\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9\u306e\u5fdc\u7b54\u6027\u306f\u3001\u97f3\u697d\u306e\u30bf\u30b9\u30af\uff08\u958b\u59cb\u3001\u505c\u6b62\u3001\u6b21\u3078\u306a\u3069\uff09\u306e\u5b9f\u884c\u6642\u9593\u306b\u4f9d\u5b58\u3059\u308b\u3053\u3068\u306b\u306a\u308a\u307e\u3059\u3002 \u3053\u308c\u306f\u4e00\u822c\u7684\u306a\u554f\u984c\u306a\u306e\u3067\u3001\u3053\u308c\u304b\u3089\u8aac\u660e\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u3067\u306f\u3001Bluetooth\u304b\u3089\u97f3\u697d\u3082\u958b\u59cb\u3067\u304d\u308b\u3088\u3046\u306b\u3059\u308b\u5834\u5408\u306f\u3069\u3046\u306a\u308b\u3067\u3057\u3087\u3046\u304b\uff1f \u4f55\u3089\u304b\u306e\u65b9\u6cd5\u3067\u30e6\u30fc\u30b6\uff65\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9\u3092\u95a2\u4e0e\u3055\u305b\u308b\u5fc5\u8981\u304c\u3042\u308b\u3067\u3057\u3087\u3046\u304b\uff1f"),(0,r.kt)("p",null,"\u307e\u305f\u3001\u97f3\u697d\u306e\u30bf\u30b9\u30af\u306e\u512a\u5148\u5ea6\u3092\u4e0a\u3052\u3066\u3001\u97f3\u697d\u304c\u9014\u5207\u308c\u306a\u3044\u3088\u3046\u306b\u3059\u308b\u306b\u306f\u3069\u3046\u3057\u305f\u3089\u3088\u3044\u3067\u3057\u3087\u3046\u304b\uff1f \u540c\u6642\u306b\u3001\u97f3\u697d\u306e\u30bf\u30b9\u30af\u304c\u5b9f\u884c\u3055\u308c\u3066\u3044\u306a\u3044\u3068\u304d\u306b\u306f\u3001\u30e6\u30fc\u30b6\uff65\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9\u304c\u6700\u9ad8\u306e\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u3067\u5b9f\u884c\u3055\u308c\u308b\u3088\u3046\u306b\u3059\u308b\u5fc5\u8981\u3082\u3042\u308a\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u3053\u308c\u3089\u3059\u3079\u3066\u306f\u3001\u30bf\u30b9\u30af\u51e6\u7406\u3001\u901a\u4fe1\u624b\u6bb5\u3001\u540c\u671f\u5316\u3092\u5099\u3048\u305f\u30aa\u30da\u30ec\u30fc\u30c6\u30a3\u30f3\u30b0\uff65\u30b7\u30b9\u30c6\u30e0\u3092\u3001\u4f7f\u7528\u3059\u308b\u3053\u3068\u3067\u89e3\u6c7a\u3057\u307e\u3059\u3002"),(0,r.kt)("h2",m({},{id:"rtos"}),"RTOS"),(0,r.kt)("p",null,"\u30ea\u30a2\u30eb\u30bf\u30a4\u30e0\uff65\u30aa\u30da\u30ec\u30fc\u30c6\u30a3\u30f3\u30b0\uff65\u30b7\u30b9\u30c6\u30e0\uff08RTOS\uff09\u306f\u3001\u3055\u307e\u3056\u307e\u306a\u30b5\u30fc\u30d3\u30b9\u3067\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u5185\u306e\u30bf\u30b9\u30af\u306b\u30b3\u30f3\u30d4\u30e5\u30fc\u30c6\u30a3\u30f3\u30b0\uff65\u30ea\u30bd\u30fc\u30b9\u3092\u914d\u5e03\u3059\u308b\u5c0f\u898f\u6a21\u306e\u30bd\u30d5\u30c8\u30a6\u30a7\u30a2\u3067\u3059\u3002"),(0,r.kt)("p",null,"RTOS\u3092\u4f7f\u7528\u3059\u308b\u3068\u3001\u72ec\u7acb\u3057\u306a\u304c\u3089\u3082\u9023\u643a\u3057\u3042\u3046\u591a\u6570\u306e\u30bf\u30b9\u30af\u3067\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u69cb\u7bc9\u3067\u304d\u307e\u3059\u3002 \u3053\u308c\u3089\u306e\u30bf\u30b9\u30af\u306f\u3001\u4f5c\u696d\u767a\u751f\u6642\u306b\u3001RTOS\u306b\u3088\u3063\u3066\u512a\u5148\u5ea6\u306b\u5f93\u3063\u3066\u540c\u6642\u5b9f\u884c\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)("p",null,"1\u3064\u306e\u30b8\u30e7\u30d6\u3092\u3001\u512a\u5148\u5ea6\u306e\u9ad8\u3044\u30bf\u30b9\u30af\u3068\u512a\u5148\u5ea6\u306e\u4f4e\u3044\u30bf\u30b9\u30af\u306b\u5206\u5272\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002 Bluetooth\u30c7\u30fc\u30bf\u304c\u5230\u7740\u3057\u305f\u3089\u3001\u30d0\u30c3\u30d5\u30a1\u304b\u3089\u975e\u5e38\u306b\u9ad8\u901f\u3067\u8aad\u307f\u53d6\u308a\u3001\u3088\u308a\u5927\u304d\u3044\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\uff65\u30d0\u30c3\u30d5\u30a1\u306b\u305d\u308c\u3092\u914d\u7f6e\u3059\u308b\u3053\u3068\u3092\u8003\u3048\u3066\u307f\u3066\u304f\u3060\u3055\u3044\u3002 \u30c7\u30fc\u30bf\u306e\u51e6\u7406\u306f\u3001\u5c11\u3057\u5ef6\u671f\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002 \u3053\u306e\u3088\u3046\u306b\u3001\u6700\u7d42\u7684\u306b\u306f2\u3064\u306eBluetooth\u30bf\u30b9\u30af\u306b\u306a\u308a\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u3053\u306e\u4f8b\u3067\u306f\u3001\u30e1\u30a4\u30f3\u95a2\u6570\u304b\u30894\u3064\u306e\u30bf\u30b9\u30af\u3092\u958b\u59cb\u3057\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-cpp"}),"int main() {\n  ...\n  os_start_task(gui_task,      medium_priority);\n  os_start_task(music_task,    low_priority);\n  os_start_task(bt_comm_task,  high_priority);\n  os_start_task(bt_appl_task,  low_priority);\n  os_start_scheduler();\n}\n")),(0,r.kt)("p",null,"\u30df\u30e5\u30fc\u30b8\u30c3\u30af\uff65\u30bf\u30b9\u30af\u3067\u3082\u3001\u540c\u3058\u3088\u3046\u306a\u5206\u5272\u3092\u884c\u3046\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u30c7\u30fc\u30bf\u3092\u30b9\u30d4\u30fc\u30ab\u306b\u9001\u308b\u30bf\u30b9\u30af\u306f\u512a\u5148\u5ea6\u304c\u9ad8\u304f\u3001\u518d\u751f\u4e2d\u306e\u6b4c\u3092\u5236\u5fa1\u3057\u3001\u30e6\u30fc\u30b6\uff65\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9\u306b\u901a\u77e5\u3092\u9001\u308b\u30bf\u30b9\u30af\u306f\u512a\u5148\u5ea6\u304c\u4f4e\u304f\u306a\u308a\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u4e0a\u8a18\u306e\u3088\u3046\u306b\u7570\u306a\u308b\u512a\u5148\u5ea6\u3092\u4f7f\u7528\u3057\u305f\u7d50\u679c\u3001\u51e6\u7406\u3059\u3079\u304d\u30c7\u30fc\u30bf\u304c\u5b58\u5728\u3059\u308b\u3068\u304d\u306b\u306fbt_comm_task\u304c\u5b9f\u884c\u3055\u308c\u3001\u305d\u308c\u4ee5\u5916\u306f\u30e6\u30fc\u30b6\u30fb\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9\uff65\u30bf\u30b9\u30af\u304c\u5b9f\u884c\u3055\u308c\u308b\u3053\u3068\u306b\u306a\u308a\u307e\u3059\u3002 \u30e6\u30fc\u30b6\uff65\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9\uff65\u30bf\u30b9\u30af\u304c\u8868\u793a\u3092\u5f85\u6a5f\u3057\u3066\u3044\u308b\u9593\u306b\u30012\u3064\u306e\u512a\u5148\u5ea6\u306e\u4f4e\u3044\u30bf\u30b9\u30af\u3092\u5b9f\u884c\u3067\u304d\u307e\u3059\u3002 \u30aa\u30da\u30ec\u30fc\u30c6\u30a3\u30f3\u30b0\uff65\u30b7\u30b9\u30c6\u30e0\u306e\u30b9\u30b1\u30b8\u30e5\u30fc\u30e9\u304c\u3001\u3053\u306e\u6642\u9593\u914d\u5206\u3092\u81ea\u52d5\u7684\u306b\u51e6\u7406\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u901a\u5e38\u306eTouchGFX\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3067\u306f\u3001\u30e6\u30fc\u30b6\uff65\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9\u306f\u3059\u3079\u3066\u306e\u30d5\u30ec\u30fc\u30e0\u306e\u8868\u793a\u3092\u5f85\u6a5f\u3057\u3001\u30b0\u30e9\u30d5\u30a3\u30c3\u30af\uff65\u30a2\u30af\u30bb\u30e9\u30ec\u30fc\u30bf\uff08ChromArt\uff09\u304c\u8981\u7d20\u306e\u63cf\u753b\u3092\u5b8c\u4e86\u3059\u308b\u306e\u3092\u5fc5\u305a\u5f85\u6a5f\u3057\u307e\u3059\u3002 \u3064\u307e\u308a\u3001\u512a\u5148\u5ea6\u306e\u4f4e\u3044\u30bf\u30b9\u30af\u3092\u5b9f\u884c\u3067\u304d\u308b\u3001\u7d30\u5207\u308c\u306e\u4e00\u6642\u505c\u6b62\u304c\u591a\u6570\u767a\u751f\u3059\u308b\u3068\u3044\u3046\u3053\u3068\u3067\u3059\u3002 \u30aa\u30da\u30ec\u30fc\u30c6\u30a3\u30f3\u30b0\uff65\u30b7\u30b9\u30c6\u30e0\u306e\u30b9\u30b1\u30b8\u30e5\u30fc\u30e9\u306f\u3001\u512a\u5148\u5ea6\u306e\u9ad8\u3044\u30bf\u30b9\u30af\u304c\u5f85\u6a5f\u4e2d\u3067\u3042\u308c\u3070\u3001\u30de\u30a4\u30af\u30ed\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u304c\u3053\u308c\u3089\u306e\u30bf\u30b9\u30af\u3092\u5b9f\u884c\u3059\u308b\u3088\u3046\u306b\u81ea\u52d5\u7684\u306b\u5909\u66f4\u3057\u307e\u3059\u3002"),(0,r.kt)("h3",m({},{id:"task-communication"}),"\u30bf\u30b9\u30af\u306e\u901a\u4fe1"),(0,r.kt)("p",null,"\u8907\u6570\u306e\u30bf\u30b9\u30af\u3092\u4f7f\u7528\u3059\u308b\u5834\u5408\u306f\u3001\u3053\u308c\u3089\u306e\u30bf\u30b9\u30af\u9593\u306e\u901a\u4fe1\u304c\u5b89\u5168\u306b\u884c\u308f\u308c\u308b\u305f\u3081\u306e\u65b9\u6cd5\u3082\u5fc5\u8981\u306b\u306a\u308a\u307e\u3059\u3002 1\u3064\u306e\u7c21\u5358\u306a\u4f8b\u3068\u3057\u3066\u3001\u30e6\u30fc\u30b6\uff65\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9\u304b\u3089\u30df\u30e5\u30fc\u30b8\u30c3\u30af\u30fb\u30bf\u30b9\u30af\u3078\u306e\u901a\u4fe1\u304c\u6319\u3052\u3089\u308c\u307e\u3059\u3002 \u3053\u306e\u4f8b\u3067\u306f\u7279\u306b\u3001gui_task\u306b\u3088\u3063\u3066\u6b4c\u306e\u518d\u751f\u958b\u59cb\u304c\u8981\u6c42\u3055\u308c\u308b\u307e\u3067\u3001\u30df\u30e5\u30fc\u30b8\u30c3\u30af\u30fb\u30bf\u30b9\u30af\u304c\u5f85\u6a5f\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002 \u3053\u308c\u3092\u5b9f\u88c5\u3059\u308b\u305f\u3081\u306e\u7c21\u5358\u306a\u65b9\u6cd5\u306f\u3001\u30e1\u30c3\u30bb\u30fc\u30b8\uff65\u30ad\u30e5\u30fc\u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\u3067\u3059\u3002 \u30df\u30e5\u30fc\u30b8\u30c3\u30af\u30fb\u30bf\u30b9\u30af\u306f\u3001\u30ad\u30e5\u30fc\u306b\u30e1\u30c3\u30bb\u30fc\u30b8\u304c\u5165\u308c\u3089\u308c\u308b\u307e\u3067\u3001\u30b9\u30ea\u30fc\u30d7\u72b6\u614b\u306b\u306a\u3063\u3066\u3044\u307e\u3059\u3002 \u30ad\u30e5\u30fc\u306b\u30e1\u30c3\u30bb\u30fc\u30b8\u304c\u5165\u308c\u3089\u308c\u3001\u512a\u5148\u5ea6\u306e\u9ad8\u3044\u30bf\u30b9\u30af\u304c\u30d3\u30b8\u30fc\u72b6\u614b\u3067\u306a\u3051\u308c\u3070\u3001\u30b9\u30b1\u30b8\u30e5\u30fc\u30e9\u304c\u30bf\u30b9\u30af\u3092\u30a6\u30a7\u30a4\u30af\u30a2\u30c3\u30d7\u3057\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-cpp"}),"   ...\n   music_task_input_queue = os_create_queue(10); //10 element queue\n   ...\n")),(0,r.kt)("p",null,'\u30e6\u30fc\u30b6\uff65\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9\u3067"Play"\u304c\u62bc\u3055\u308c\u305f\u3089\u3001\u30df\u30e5\u30fc\u30b8\u30c3\u30af\uff65\u30bf\u30b9\u30af\u306e\u30ad\u30e5\u30fc\u306b\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u9001\u308a\u307e\u3059\u3002'),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-cpp"}),"void ScreenMusic::handlePlayPressed()\n{\n   os_send_message(music_task_input_queue, play_message);\n}\n")),(0,r.kt)("p",null,"\u30df\u30e5\u30fc\u30b8\u30c3\u30af\uff65\u30bf\u30b9\u30af\u306f\u3001\u30ad\u30e5\u30fc\u3092\u8aad\u307f\u8fbc\u307f\u306a\u304c\u3089\u30e1\u30c3\u30bb\u30fc\u30b8\u306e\u5230\u7740\u3092\u5f85\u3061\u307e\u3059\u3002 \u3053\u308c\u306b\u3088\u308a\u3001\u30e1\u30c3\u30bb\u30fc\u30b8\u304c\u5230\u7740\u3059\u308b\u307e\u3067\u30bf\u30b9\u30af\u304c\u30d6\u30ed\u30c3\u30af\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-cpp"}),"...\nMessage message;\nos_receive_message(music_task_input_queue, &message);\n")),(0,r.kt)("p",null,"\u30df\u30e5\u30fc\u30b8\u30c3\u30af\uff65\u30bf\u30b9\u30af\u306e\u30ad\u30e5\u30fc\u306b\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u5165\u308c\u305f\u5f8c\u3001\u30e6\u30fc\u30b6\uff65\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9\u306f\u5b9f\u884c\u3092\u7d9a\u3051\u3001\u3067\u304d\u308b\u9650\u308a\u9ad8\u901f\u3067\u30d5\u30ec\u30fc\u30e0\u3092\u63cf\u753b\u3057\u307e\u3059\u3002 \u518d\u751f\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u3059\u3050\u306b\u51e6\u7406\u3059\u308b\u306e\u306b\u3001\u6642\u9593\u3092\u7121\u99c4\u306b\u3059\u308b\u3053\u3068\u306f\u3042\u308a\u307e\u305b\u3093\u3002 \u3057\u304b\u3057\u3001\u305d\u306e\u63cf\u753b\u304c\u5b8c\u4e86\u3057\u3001\u6b21\u306e\u30d5\u30ec\u30fc\u30e0\u306e\u63cf\u753b\u306e\u524d\u306bUI\u30bf\u30b9\u30af\u304c\u5f85\u6a5f\u4e2d\u3067\u3042\u308c\u3070\u3001\u30b9\u30b1\u30b8\u30e5\u30fc\u30e9\u304c\u5b9f\u884c\u5bfe\u8c61\u3092\u30df\u30e5\u30fc\u30b8\u30c3\u30af\uff65\u30bf\u30b9\u30af\u306b\u5909\u66f4\u3057\u3001\u7740\u4fe1\u30e1\u30c3\u30bb\u30fc\u30b8\u304c\u51e6\u7406\u3055\u308c\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u540c\u69d8\u306b\u3001\u30e6\u30fc\u30b6\uff65\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9\u306b\u5165\u529b\u30ad\u30e5\u30fc\u3092\u5272\u308a\u5f53\u3066\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002 \u3053\u308c\u3067\u30df\u30e5\u30fc\u30b8\u30c3\u30af\uff65\u30bf\u30b9\u30af\u306f\u3001\u6b4c\u304c\u7d42\u4e86\u3057\u305f\u3068\u304d\u306a\u3069\u306b\u3001\u901a\u77e5\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u9001\u308b\u3053\u3068\u304c\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002 \u30e6\u30fc\u30b6\uff65\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9\uff65\u30bf\u30b9\u30af\u306f\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u5f85\u3064\u306e\u3067\u306f\u306a\u304f\u3001\u30d6\u30ed\u30c3\u30af\u3059\u308b\u3053\u3068\u306a\u304f\u30e1\u30c3\u30bb\u30fc\u30b8\u304c\u7740\u4fe1\u3057\u3066\u3044\u308b\u304b\u3059\u3070\u3084\u304f\u30c1\u30a7\u30c3\u30af\u3057\u3001\u7740\u4fe1\u3057\u3066\u3044\u308c\u3070\u3053\u308c\u3092\u8aad\u307f\u8fbc\u307f\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u3053\u306e\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u306f\u3001\u30b7\u30b9\u30c6\u30e0\u5185\u306e\u30bf\u30b9\u30af\u9593\u306b\u975e\u5e38\u306b\u7de9\u3044\u3064\u306a\u304c\u308a\u3092\u3082\u305f\u3089\u3057\u307e\u3059\u3002 \u5b9f\u969b\u306b\u306f\u30e6\u30fc\u30b6\uff65\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9\u3092\u4f7f\u7528\u305b\u305a\u306b\u30df\u30e5\u30fc\u30b8\u30c3\u30af\uff65\u30bf\u30b9\u30af\u3092\u30c6\u30b9\u30c8\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u3001Bluetooth\u30bf\u30b9\u30af\u304b\u3089\u97f3\u697d\u3092\u7c21\u5358\u306b\u958b\u59cb\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("h3",m({},{id:"handling-interrupts"}),"\u5272\u8fbc\u307f\u306e\u51e6\u7406"),(0,r.kt)("p",null,"\u4e00\u90e8\u306e\u30bf\u30b9\u30af\u306f\u3001\u5272\u8fbc\u307f\u3078\u306e\u5fdc\u7b54\u3068\u3057\u3066\u5b9f\u884c\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002 \u3053\u3053\u3067\u306f\u3001\u3053\u306e\u4f8b\u3068\u3057\u3066Bluetooth\u901a\u4fe1\u30bf\u30b9\u30af\u3092\u6319\u3052\u3066\u3044\u307e\u3059\u3002 \u3053\u306e\u30bf\u30b9\u30af\u306f\u3001Bluetooth\u30c1\u30c3\u30d7\u306b\u65b0\u3057\u3044\u30d1\u30c3\u30b1\u30fc\u30b8\u304c\u63d0\u4f9b\u3055\u308c\u305f\u3068\u304d\u306b\u5b9f\u884c\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002 \u3053\u306e\u5834\u5408\u3001\u5272\u8fbc\u307f\u3092\u53d7\u3051\u53d6\u3063\u305f\u3068\u304d\u3001\u5272\u8fbc\u307f\u30cf\u30f3\u30c9\u30e9\u304b\u3089\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u9001\u308b\u3053\u3068\u306b\u306a\u308a\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-cpp"}),"void BT_DataAvailable_Handler(void)\n{\n  os_send_message(bt_data_queue, data_available_message);\n}\n")),(0,r.kt)("p",null,"\u30ad\u30e5\u30fc\u4ee5\u5916\u306e\u540c\u671f\u30d7\u30ea\u30df\u30c6\u30a3\u30d6\u3082\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002 \u305f\u3068\u3048\u3070\u3001\u30bb\u30de\u30d5\u30a9\u3084\u30df\u30e5\u30fc\u30c6\u30c3\u30af\u30b9\u306a\u3069\u304c\u591a\u304f\u306e\u30aa\u30da\u30ec\u30fc\u30c6\u30a3\u30f3\u30b0\uff65\u30b7\u30b9\u30c6\u30e0\u3067\u898b\u53d7\u3051\u3089\u308c\u307e\u3059\u3002"),(0,r.kt)("h3",m({},{id:"freertos"}),"FreeRTOS"),(0,r.kt)("p",null,"TouchGFX\u306f\u958b\u767a\u6642\u306b\u3001FreeRTOS\u30aa\u30da\u30ec\u30fc\u30c6\u30a3\u30f3\u30b0\uff65\u30b7\u30b9\u30c6\u30e0\u3067\u30c6\u30b9\u30c8\u3055\u308c\u3066\u3044\u307e\u3059\u3002 TouchGFX\u306f\u8981\u4ef6\u304c\u975e\u5e38\u306b\u5c11\u306a\u304f\u3001\u4ed6\u306e\u591a\u304f\u306e\u30aa\u30da\u30ec\u30fc\u30c6\u30a3\u30f3\u30b0\uff65\u30b7\u30b9\u30c6\u30e0\u4e0a\u3067\u5b9f\u884c\u3067\u304d\u307e\u3059\u304c\u3001\u30e6\u30fc\u30b6\u304cOS\u306b\u95a2\u3057\u3066\u7279\u5b9a\u306e\u8981\u4ef6\u3092\u6301\u3063\u3066\u3044\u306a\u3051\u308c\u3070\u3001FreeRTOS\u3067\u958b\u59cb\u3059\u308b\u306e\u304c\u3088\u3044\u3067\u3057\u3087\u3046\u3002"),(0,r.kt)("p",null,"FreeRTOS\u306f\u3001\u5e02\u8ca9\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3067\u7121\u6599\u3067\u4f7f\u7528\u3067\u304d\u308b\u30b7\u30f3\u30d7\u30eb\u306a\u30aa\u30da\u30ec\u30fc\u30c6\u30a3\u30f3\u30b0\uff65\u30b7\u30b9\u30c6\u30e0\u3067\u3059\u3002 STM32Cube\u30d5\u30a1\u30fc\u30e0\u30a6\u30a7\u30a2\u3068\u5171\u306b\u30bd\u30fc\u30b9\uff65\u30b3\u30fc\u30c9\u3067\u63d0\u4f9b\u3055\u308c\u3001\u3059\u3079\u3066\u306eSTM32\u30de\u30a4\u30af\u30ed\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u5411\u3051\u306b\u3059\u3050\u5229\u7528\u3067\u304d\u308b\u30b5\u30f3\u30d7\u30eb\u3082\u63d0\u4f9b\u3055\u308c\u3066\u3044\u307e\u3059\u3002"),(0,r.kt)("p",null,"FreeRTOS\u306b\u95a2\u3059\u308b\u8a73\u7d30\u3068\u30e9\u30a4\u30bb\u30f3\u30b9\u6761\u9805\u306b\u3064\u3044\u3066\u306f\u3001",(0,r.kt)("a",m({parentName:"p"},{href:"https://www.freertos.org/"}),"freertos.org"),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("h3",m({},{id:"touchgfx-os-wrappers"}),"TouchGFX OS Wrappers"),(0,r.kt)("p",null,"TouchGFX\u306e\u30c7\u30d5\u30a9\u30eb\u30c8\u8a2d\u5b9a\u3067\u306f\u3001FreeRTOS\u4e0a\u3067\u5b9f\u884c\u3055\u308c\u30011\u3064\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\uff65\u30ad\u30e5\u30fc\u3092\u4f7f\u7528\u3057\u3066\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\uff65\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u304a\u3088\u3073\u30bb\u30de\u30d5\u30a9\u3068\u306e\u540c\u671f\u3092\u53d6\u308a\u3001\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u3078\u306e\u30a2\u30af\u30bb\u30b9\u304c\u4fdd\u8b77\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u3053\u308c\u306f\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"touchgfx/os/OSWrappers.cpp"),"\u3067\u5b9a\u7fa9\u3055\u308c\u3066\u3044\u308bOSWrappers\u30af\u30e9\u30b9\u3067\u51e6\u7406\u3055\u308c\u307e\u3059\u3002 \u3053\u306e\u30af\u30e9\u30b9\u306b\u306f\u4ee5\u4e0b\u306e\u30e1\u30bd\u30c3\u30c9\u304c\u3042\u308a\u307e\u3059\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",m({parentName:"tr"},{align:null}),"\u30e1\u30bd\u30c3\u30c9"),(0,r.kt)("th",m({parentName:"tr"},{align:null}),"\u8aac\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"signalVSync()"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\u304c\u6b21\u306e\u30d5\u30ec\u30fc\u30e0\u3078\u306e\u6e96\u5099\u304c\u3067\u304d\u305f\u3089\u3001\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\uff65\u30c9\u30e9\u30a4\u30d0\u304b\u3089\u547c\u3073\u51fa\u3055\u308c\u308b\u30e1\u30bd\u30c3\u30c9\u3067\u3059\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"waitForVSync()"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"\u5f85\u6a5f\u306e\u305f\u3081\u306b\u3001\u30b0\u30e9\u30d5\u30a3\u30c3\u30af\uff65\u30a8\u30f3\u30b8\u30f3\u306b\u3088\u3063\u3066\u547c\u3073\u51fa\u3055\u308c\u307e\u3059\u3002 signalVSync\u304c\u547c\u3073\u51fa\u3055\u308c\u308b\u307e\u3067\u3001\u623b\u308a\u307e\u305b\u3093\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"isVSyncAvailable()"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"\uff08\u30aa\u30d7\u30b7\u30e7\u30f3\uff09VSync\u304c\u767a\u51fa\u3057\u305f\u3089true\u3092\u8fd4\u3057\u307e\u3059\u3002 waitForVSync\u3067\u306e\u30d6\u30ed\u30c3\u30af\u3092\u9632\u3050\u305f\u3081\u306b\u4f7f\u7528\u3057\u307e\u3059\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"signalRenderingDone()"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"\uff08\u30aa\u30d7\u30b7\u30e7\u30f3\uff09\u672a\u51e6\u7406\u306eVSync\u4fe1\u53f7\u3092\u3059\u3079\u3066\u524a\u9664\u3057\u307e\u3059\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"takeFrameBufferSemaphore()"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u306b\u30c0\u30a4\u30ec\u30af\u30c8\uff65\u30a2\u30af\u30bb\u30b9\u3059\u308b\u305f\u3081\u306b\u3001\u30b0\u30e9\u30d5\u30a3\u30c3\u30af\uff65\u30a8\u30f3\u30b8\u30f3\u3068\u30a2\u30af\u30bb\u30e9\u30ec\u30fc\u30bf\u306b\u3088\u3063\u3066\u547c\u3073\u51fa\u3055\u308c\u307e\u3059\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"giveFrameBufferSemaphore()"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"\u30c0\u30a4\u30ec\u30af\u30c8\uff65\u30a2\u30af\u30bb\u30b9\u3092\u518d\u5ea6\u89e3\u653e\u3059\u308b\u305f\u3081\u306b\u547c\u3073\u51fa\u3055\u308c\u307e\u3059\u3002")))),(0,r.kt)("p",null,"\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u5b9f\u88c5\u3067\u306f\u3001VSync\uff08\u30d5\u30ec\u30fc\u30e0\uff09\u540c\u671f\u3092\u5b9f\u88c5\u3059\u308b\u305f\u3081\u306b\u30e1\u30c3\u30bb\u30fc\u30b8\uff65\u30ad\u30e5\u30fc\u304c\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002 \u30b0\u30e9\u30d5\u30a3\u30c3\u30af\uff65\u30a8\u30f3\u30b8\u30f3\uff65\u30bf\u30b9\u30af\u306f\u3001\u6b21\u306eVSync\u304c\u767a\u51fa\u3055\u308c\u308b\u307e\u3067\u30b9\u30ea\u30fc\u30d7\u72b6\u614b\u306b\u306a\u308a\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u3053\u306eOSWrapper\u30af\u30e9\u30b9\u306f\u3001TouchGFX Generator\u306b\u3088\u3063\u3066\u751f\u6210\u3055\u308c\u307e\u3059\u3002 Generator\u306e\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001",(0,r.kt)("a",m({parentName:"p"},{href:"../development/touchgfx-hal-development/touchgfx-generator#real-time-operating-system"}),"\u3053\u3061\u3089"),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("h2",m({},{id:"no-rtos"}),"RTOS\u3092\u4f7f\u7528\u3057\u306a\u3044\u5834\u5408"),(0,r.kt)("p",null,"TouchGFX\u306f\u3001\u30aa\u30da\u30ec\u30fc\u30c6\u30a3\u30f3\u30b0\uff65\u30b7\u30b9\u30c6\u30e0\u306a\u3057\u3067\u3082\u5b9f\u884c\u3067\u304d\u307e\u3059\u3002 \u3053\u306e\u5834\u5408\u306b\u306f\u3001\u30e1\u30a4\u30f3\u95a2\u6570\u5185\u3067\u30b0\u30e9\u30d5\u30a3\u30c3\u30af\uff65\u30a8\u30f3\u30b8\u30f3\u306e\u30e1\u30a4\u30f3\uff65\u30eb\u30fc\u30d7\u3092\u76f4\u63a5\u958b\u59cb\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-cpp"}),"int main()\n{\n    ...\n    touchgfx::HAL::getInstance()->taskEntry();\n\n    //never returns\n}\n")),(0,r.kt)("p",null,"RTOS\u3092\u4f7f\u7528\u3057\u306a\u304f\u3066\u3082\u3001TouchGFX\u306e\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u306f\u4f4e\u4e0b\u3057\u307e\u305b\u3093\u3002 \u305f\u3060\u3001\u30de\u30a4\u30af\u30ed\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u306e\u8ca0\u8377\u304c\u5897\u3048\u308b\u53ef\u80fd\u6027\u304c\u3042\u308a\u3001TouchGFX\u3068\u4e00\u7dd2\u306b\u4ed6\u306e\u30bf\u30b9\u30af\u3092\u5b9f\u884c\u3059\u308b\u3053\u3068\u304c\u96e3\u3057\u304f\u306a\u308a\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u524d\u8ff0\u3057\u305f\u3088\u3046\u306b\u3001\u30e1\u30a4\u30f3\u95a2\u6570\u5185\u3067\u30e6\u30fc\u30b6\uff65\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9\u3092\u5b9f\u884c\u4e2d\u306b\u3001\u4ed6\u306e\u30bf\u30b9\u30af\u3092\u624b\u52d5\u3067\u99c6\u52d5\u3055\u305b\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,r.kt)("h3",m({},{id:"modeltick"}),"Model::tick"),(0,r.kt)("p",null,"1\u3064\u306e\u65b9\u6cd5\u306f\u3001\u30d5\u30ec\u30fc\u30e0\u3054\u3068\u306b1\u56de\u305a\u3064Model\u30af\u30e9\u30b9\u5185\u3067\u30bf\u30b9\u30af\uff65\u30c1\u30a7\u30c3\u30af\u3092\u5b9f\u884c\u3059\u308b\u3053\u3068\u3067\u3059\u3002"),(0,r.kt)(a.Z,{mdxType:"CodeHeader"},"Model.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-cpp"}),"void Model::tick()\n{\n   //run other tasks here\n   music_task_tick();\n   bluetooth_task_tick();\n}\n")),(0,r.kt)("p",null,"\u3053\u306e\u30e1\u30bd\u30c3\u30c9\u3092\u4f7f\u7528\u3059\u308b\u3068\u3001\u30d5\u30ec\u30fc\u30e0\u3054\u3068\u306b1\u56de\u305a\u3064\u3001\u3059\u3079\u3066\u306e\u30bf\u30b9\u30af\u304c\u5b9f\u884c\u3055\u308c\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002 \u30e6\u30fc\u30b6\uff65\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9\u306e\u63cf\u753b\u6642\u9593\u306b\u3001\u30bf\u30b9\u30af\u306e\u5b9f\u884c\u306b\u304b\u304b\u308b\u6642\u9593\u304c\u8ffd\u52a0\u3055\u308c\u307e\u3059\u3002 \u3059\u3079\u3066\u306e\u30bf\u30b9\u30af\u304c\u3059\u3070\u3084\u304f\u7d42\u4e86\u3059\u308b\u3088\u3046\u306a\u5358\u7d14\u306a\u30b7\u30b9\u30c6\u30e0\u3067\u3042\u308c\u3070\u3001\u3053\u308c\u306f\u30b7\u30f3\u30d7\u30eb\u3067\u8a31\u5bb9\u3067\u304d\u308b\u30bd\u30ea\u30e5\u30fc\u30b7\u30e7\u30f3\u3067\u3059\u3002"),(0,r.kt)("h3",m({},{id:"oswrappers"}),"OSWrappers"),(0,r.kt)("p",null,"\u3082\u30461\u3064\u306e\u30e1\u30bd\u30c3\u30c9\u306f\u3001OSWrappers\u30af\u30e9\u30b9\u5185\u3067\u30d5\u30c3\u30af\u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\u3067\u3059\u3002 \u524d\u8ff0\u306e\u3068\u304a\u308a\u3001\u30b0\u30e9\u30d5\u30a3\u30c3\u30af\uff65\u30a8\u30f3\u30b8\u30f3\u306f\u3001\u30a4\u30d9\u30f3\u30c8\u3092\u5f85\u6a5f\u3059\u308b\u5fc5\u8981\u304c\u751f\u3058\u308b\u3068\u3001\u3053\u306e\u30af\u30e9\u30b9\u3067\u30e1\u30bd\u30c3\u30c9\u3092\u547c\u3073\u51fa\u3057\u307e\u3059\u3002 \u3053\u308c\u3092\u5229\u7528\u3057\u3066\u3001\u3053\u3046\u3057\u305f\u30a4\u30d9\u30f3\u30c8\u3092\u5f85\u6a5f\u3059\u308b\u9593\u306b\u5225\u306e\u4f5c\u696d\u3092\u5b9f\u884c\u3059\u308b\u306e\u3067\u3059\u3002"),(0,r.kt)(a.Z,{mdxType:"CodeHeader"},"OSWrappers.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-cpp"}),"static volatile uint8_t vsync_sem = 0;\n\nvoid OSWrappers::signalVSync()\n{\n    vsync_sem = 1;\n}\n\nvoid OSWrappers::waitForVSync()\n{\n    vsync_sem = 0; //clear the flag, so we wait for the next vsync\n    do {\n        // Perform other work while waiting\n        music_task_tick();\n        bluetooth_task_tick();\n    } while(!vsync_sem);\n}\n")),(0,r.kt)("p",null,"\u3053\u306e\u30e1\u30bd\u30c3\u30c9\u3092\u4f7f\u7528\u3059\u308b\u3068\u3001\u30d5\u30ec\u30fc\u30e0\u9593\u306e\u30a2\u30a4\u30c9\u30eb\uff65\u30bf\u30b9\u30af\u3092\u4ed6\u306e\u30bf\u30b9\u30af\u306b\u3088\u3063\u3066\u5b8c\u5168\u306b\u5229\u7528\u3067\u304d\u307e\u3059\u3002\u305f\u3060\u3057\u3001\u30bf\u30b9\u30af\u304c\u53d6\u5f97\u3059\u308b\u6642\u9593\u306e\u9577\u3055\u306f\u3055\u307e\u3056\u307e\u3067\u3059\u3002"),(0,r.kt)("p",null,"\u3082\u30461\u3064\u306e\u30bd\u30ea\u30e5\u30fc\u30b7\u30e7\u30f3\u306f\u3001OSWrappers::isVSyncAvailable\u95a2\u6570\u3068OSWrappers::signalRenderingDone\u95a2\u6570\u306e\u4f7f\u7528\u3067\u3059\u3002 \u3053\u308c\u306b\u3088\u308a\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306f\u3001\u8907\u6570\u306ewhile\u30eb\u30fc\u30d7\u3092\u6301\u3064\u3053\u3068\u3092\u56de\u907f\u3067\u304d\u307e\u3059\u3002 \u3053\u308c\u3089\u306e\u95a2\u6570\u306f\u3001No-operating-system\u8a2d\u5b9a\u304c\u9078\u629e\u3055\u308c\u305f\u3068\u304d\u306b\u3001TouchGFXGenerator\u306b\u3088\u3063\u3066\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u91cd\u8981\u306a\u3053\u3068\u306f\u3001\u30bf\u30b9\u30af\u304c\u305d\u306e\u4f5c\u696d\u3092\u3001\u304a\u3088\u305d1\u30df\u30ea\u79d2\u306e\u5c0f\u3055\u306a\u30b9\u30c6\u30c3\u30d7\u306b\u5206\u5272\u3067\u304d\u308b\u3088\u3046\u306b\u3059\u308b\u3053\u3068\u3067\u3059\u3002 \u305d\u3046\u3067\u306a\u3044\u3068\u3001\u30e6\u30fc\u30b6\uff65\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9\u306e\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u304c\u963b\u5bb3\u3055\u308c\u3066\u3057\u307e\u3044\u307e\u3059\u3002"))}v.isMDXComponent=!0}}]);