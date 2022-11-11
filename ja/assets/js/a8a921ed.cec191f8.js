"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[1408],{3905:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return d}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),u=p(t),d=a,h=u["".concat(l,".").concat(d)]||u[d]||s[d]||i;return t?r.createElement(h,o(o({ref:n},m),{},{components:t})):r.createElement(h,o({ref:n},m))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=u;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var p=2;p<i;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},22425:function(e,n,t){var r=t(67294);class a extends r.Component{render(){return r.createElement("div",{className:"code-header"},r.createElement("div",null,r.createElement("h5",null,this.props.children)))}}n.Z=a},44035:function(e,n,t){var r=t(67294),a=t(25026);n.Z=function(e){const n=e.noShadow||!1,t=e.width,i=e.height,o=(0,a.Z)(e.imageSource);return n?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:o,target:"_blank"},r.createElement("img",{width:t,height:i,src:o})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:o,target:"_blank"},r.createElement("img",{width:t,height:i,src:o})),r.createElement("p",null,e.children))}},29415:function(e,n,t){var r=t(67294),a=t(88678);const i=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class o extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:i},this.props.children)}}n.Z=o},88678:function(e,n,t){var r=t(67294);class a extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{className:e},r.createElement("div",{className:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{className:"highlight-content"},this.props.children))}}n.Z=a},6771:function(e,n,t){var r=t(67294);class a extends r.Component{render(){return r.createElement("p",null,r.createElement("div",{className:"videoWrapper"},r.createElement("video",{controls:!0},r.createElement("source",{src:this.props.url,type:"video/mp4"}))))}}n.Z=a},3716:function(e,n,t){t.r(n),t.d(n,{assets:function(){return y},contentTitle:function(){return k},default:function(){return x},frontMatter:function(){return v},metadata:function(){return b},toc:function(){return C}});var r=t(3905),a=t(44035),i=t(29415),o=t(39130),c=t(22425),l=t(6771),p=Object.defineProperty,m=Object.defineProperties,s=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,g=(e,n,t)=>n in e?p(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,f=(e,n)=>{for(var t in n||(n={}))d.call(n,t)&&g(e,t,n[t]);if(u)for(var t of u(n))h.call(n,t)&&g(e,t,n[t]);return e};const v={id:"achieving-better-performance-with-cacheable-container",title:"\u30ad\u30e3\u30c3\u30b7\u30e5\u53ef\u80fd\u30b3\u30f3\u30c6\u30ca\u306b\u3088\u308b\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u5411\u4e0a"},k=void 0,b={unversionedId:"development/ui-development/scenarios/achieving-better-performance-with-cacheable-container",id:"development/ui-development/scenarios/achieving-better-performance-with-cacheable-container",title:"\u30ad\u30e3\u30c3\u30b7\u30e5\u53ef\u80fd\u30b3\u30f3\u30c6\u30ca\u306b\u3088\u308b\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u5411\u4e0a",description:"",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/development/ui-development/scenarios/achieving-better-performance-with-cacheable-container.mdx",sourceDirName:"development/ui-development/scenarios",slug:"/development/ui-development/scenarios/achieving-better-performance-with-cacheable-container",permalink:"/touchgfx-test.github.io/ja/docs/development/ui-development/scenarios/achieving-better-performance-with-cacheable-container",draft:!1,tags:[],version:"current",frontMatter:{id:"achieving-better-performance-with-cacheable-container",title:"\u30ad\u30e3\u30c3\u30b7\u30e5\u53ef\u80fd\u30b3\u30f3\u30c6\u30ca\u306b\u3088\u308b\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u5411\u4e0a"},sidebar:"docs",previous:{title:"Scenarios",permalink:"/touchgfx-test.github.io/ja/docs/category/scenarios-1"},next:{title:"\u5b9f\u884c\u6642\u306e\u753b\u50cf\u306e\u8aad\u8fbc\u307f",permalink:"/touchgfx-test.github.io/ja/docs/development/ui-development/scenarios/loading-images-at-runtime"}},y={},C=[{value:"\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u3078\u306e\u5f71\u97ff",id:"performance-impact",level:2},{value:"\u30c6\u30b9\u30c8\uff65\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3",id:"test-application",level:2},{value:"\u8907\u96d1\u306a\u30b3\u30f3\u30c6\u30ca\u306e\u518d\u63cf\u753b\u306e\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9",id:"performance-of-redrawing-complex-containers",level:2},{value:"\u30ad\u30e3\u30c3\u30b7\u30e5\u306b\u3088\u308b\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u306e\u5411\u4e0a",id:"improving-performance-through-caching",level:2},{value:"\u307e\u3068\u3081",id:"conclusion",level:2}],w={toc:C};function x(e){var n,t=e,{components:p}=t,g=((e,n)=>{var t={};for(var r in e)d.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&u)for(var r of u(e))n.indexOf(r)<0&&h.call(e,r)&&(t[r]=e[r]);return t})(t,["components"]);return(0,r.kt)("wrapper",(n=f(f({},w),g),m(n,s({components:p,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"\u3053\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u3067\u306f\u3001\u3044\u304f\u3064\u304b\u306e\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\uff65\u30b7\u30ca\u30ea\u30aa\u306b\u304a\u3044\u3066\u3001RAM\u3092\u4f7f\u7528\u3057\u3066\u4e00\u90e8\u306e\u518d\u5229\u7528\u53ef\u80fd\u306a\u63cf\u753b\u3092\u4fdd\u5b58\u3059\u308b\u3053\u3068\u3067\u3001\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u5411\u4e0a\u3092\u9054\u6210\u3059\u308b\u65b9\u6cd5\u3092\u8aac\u660e\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u30c9\u30e9\u30c3\u30b0\u307e\u305f\u306f\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u306b\u3088\u3063\u3066\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u5185\u3067\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\uff08\u753b\u50cf\u3084\u30c6\u30ad\u30b9\u30c8\uff65\u30a8\u30ea\u30a2\u306a\u3069\uff09\u3092\u79fb\u52d5\u3059\u308b\u5834\u5408\u3001TouchGFX\u3067\u306f\u3059\u3079\u3066\u306e\u30d5\u30ec\u30fc\u30e0\u306e\u65b0\u3057\u3044\u4f4d\u7f6e\u306b\u3053\u308c\u3089\u306e\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3092\u518d\u63cf\u753b\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u3001\u305d\u308c\u307e\u3067\u306e\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u304c\u30ab\u30d0\u30fc\u3057\u3066\u3044\u305f\u30d0\u30c3\u30af\u30b0\u30e9\u30a6\u30f3\u30c9\u90e8\u5206\u3067\u3042\u3063\u3066\u3082\u518d\u63cf\u753b\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u3053\u308c\u3089\u306e\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u304c\u3001\u30c6\u30af\u30b9\u30c1\u30e3\uff65\u30de\u30c3\u30d1\u30fc\uff65\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3001\u30b7\u30a7\u30fc\u30d7\u3001\u307e\u305f\u306f\u5927\u304d\u306a\u900f\u904e\u753b\u50cf\u306a\u3069\u3001\u8907\u96d1\u306a\u8a08\u7b97\u3092\u8981\u3059\u308b\u3082\u306e\u3067\u3042\u308b\u5834\u5408\u3001\u30de\u30a4\u30af\u30ed\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u304c\u52b9\u7387\u7684\u306b\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3059\u308b\u306e\u306f\u56f0\u96e3\u3067\u3059\u3002\u3053\u308c\u3089\u306f\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\uff65\u30a2\u30af\u30bb\u30e9\u30ec\u30fc\u30b7\u30e7\u30f3\u3092\u4f7f\u7528\u305b\u305a\u306b\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3055\u308c\u308b\u304b\u3089\u3067\u3059\u3002 \u3053\u306e\u7d50\u679c\u3001\u30b9\u30af\u30ea\u30fc\u30f3\u306e\u518d\u63cf\u753b\u306b\u4f55\u30df\u30ea\u79d2\u3082\u304b\u304b\u308b\u3088\u3046\u306b\u306a\u308a\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u306b\u3082\u5f71\u97ff\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u3053\u3053\u3067\u306f\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u53ef\u80fd\u30b3\u30f3\u30c6\u30ca\u3092\u4f7f\u7528\u3057\u3066\u3001\u6642\u9593\u306e\u304b\u304b\u308b\u518d\u63cf\u753b\u3092\u907f\u3051\u308b\u3053\u3068\u3067\u3001\u8a08\u7b97\u304c\u8907\u96d1\u306a\u8981\u7d20\u3092\u542b\u3080\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u306e\u901f\u5ea6\u3092\u4e0a\u3052\u308b\u65b9\u6cd5\u306b\u3064\u3044\u3066\u53d6\u308a\u4e0a\u3052\u307e\u3059\u3002  \u3053\u306e\u8a18\u4e8b\u3067\u306e\u6e2c\u5b9a\u306fSTM32F429Discovery\u30dc\u30fc\u30c9\u3092\u4f7f\u7528\u3057\u3066\u884c\u308f\u308c\u307e\u3057\u305f\u304c\u3001\u4e00\u822c\u7684\u306b\u30ad\u30e3\u30c3\u30b7\u30e5\u53ef\u80fd\u30b3\u30f3\u30c6\u30ca\u306b\u3088\u308b\u624b\u6cd5\u306f\u3001\u305d\u306e\u4ed6\u306e\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\uff65\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u306b\u9069\u7528\u3055\u308c\u307e\u3059\u3002 \u63d0\u4f9b\u3055\u308c\u3066\u3044\u308bRAM\u306e\u4e00\u90e8\u306f\u3001\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\uff65\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u4f5c\u6210\u306e\u305f\u3081\u5fc5\u8981\u306b\u306a\u308a\u307e\u3059\u3002"),(0,r.kt)(i.Z,{mdxType:"FurtherReading"},"\u300c",(0,r.kt)(o.Z,{to:"../touchgfx-engine-features/dynamic-bitmaps",mdxType:"Link"},"\u30c0\u30a4\u30ca\u30df\u30c3\u30af\uff65\u30d3\u30c3\u30c8\u30de\u30c3\u30d7"),"\u300d\u3082\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("h2",f({},{id:"performance-impact"}),"\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u3078\u306e\u5f71\u97ff"),(0,r.kt)("p",null,"\u30de\u30a4\u30af\u30ed\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u3067\u306e\u8a08\u7b97\u306b\u6642\u9593\u306e\u304b\u304b\u308b\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u79fb\u52d5\u306f\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u306b\u5f71\u97ff\u3092\u53ca\u307c\u3059\u306e\u3067\u3001\u591a\u304f\u306e\u5c0f\u3055\u3044\u30b9\u30c6\u30c3\u30d7\u3092\u5c55\u958b\u3059\u308b\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u306f\u4f4e\u901f\u304b\u3064\u920d\u3044\u52d5\u4f5c\u3067\u8868\u793a\u3055\u308c\u307e\u3059\u3002\u30d5\u30ec\u30fc\u30e0\u3054\u3068\u306e\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u306b\u6642\u9593\u304c\u304b\u304b\u308b\u304b\u3089\u3067\u3059\u3002 \u9ad8\u901f\u3067\uff08\u6642\u9593\u5185\u306b\uff09\u5b8c\u4e86\u3059\u308b\u3088\u3046\u306b\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u3092\u30d7\u30ed\u30b0\u30e9\u30df\u30f3\u30b0\u3059\u308b\u3068\u3001\u500b\u3005\u306e\u30b9\u30c6\u30c3\u30d7\u304c\u5927\u304d\u304f\u306a\u308a\u3001\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u306f\u30b9\u30e0\u30fc\u30ba\u306b\u8868\u793a\u3055\u308c\u306a\u304f\u306a\u308a\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u6b21\u306b\u793a\u3059\u306e\u306fSTM32F429-DISCO\u30dc\u30fc\u30c9\uff08240x320\uff09\u306e\u5b9f\u884c\u4f8b\u3067\u3001\u30d5\u30eb\u30b9\u30af\u30ea\u30fc\u30f3\u306e\u30b3\u30f3\u30c6\u30ca\u304c\u5782\u76f4\u306b\u4e0a\u5411\u304d\u306b\u79fb\u52d5\u3059\u308b\u3068\u540c\u6642\u306b\u3001\u540c\u69d8\u306e\u30b3\u30f3\u30c6\u30ca\u304c\u4e0b\u304b\u3089\u79fb\u52d5\u3057\u3066\u304d\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u4e0b\u306e\u30d3\u30c7\u30aa\u3067\u306f\u3001",(0,r.kt)("a",f({parentName:"p"},{href:"../ui-components/buttons/toggle-button"}),"ToggleButton"),"\u30b9\u30a4\u30c3\u30c1\u3067\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u53ef\u80fd\u30b3\u30f3\u30c6\u30ca\u306e\u30aa\u30f3/\u30aa\u30d5\u3092\u5207\u308a\u66ff\u3048\u3066\u3044\u307e\u3059\u3002 \u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u306e\u9055\u3044\u304c\u306f\u3063\u304d\u308a\u3068\u898b\u3089\u308c\u307e\u3059\u3002"),(0,r.kt)(l.Z,{url:"http://sw-center-st-com.s3-eu-west-1.amazonaws.com/touchgfx/TouchGFX/knowledgebase/Cacheable%20Container/Cacheable%20Container%20example.mp4",mdxType:"Video"}),(0,r.kt)("p",null,"\u79fb\u52d5\u3059\u308b2\u3064\u306e\u30b3\u30f3\u30c6\u30ca\u306f\u305d\u308c\u305e\u308c\u3001\u30d0\u30c3\u30af\u30b0\u30e9\u30a6\u30f3\u30c9\u306e",(0,r.kt)("a",f({parentName:"p"},{href:"../ui-components/shapes/box"}),"\u30dc\u30c3\u30af\u30b9"),"\u3001",(0,r.kt)("a",f({parentName:"p"},{href:"../ui-components/miscellaneous/text-area"}),"\u30c6\u30ad\u30b9\u30c8\uff65\u30a8\u30ea\u30a2"),"\u3001",(0,r.kt)("a",f({parentName:"p"},{href:"../ui-components/images/texture-mapper"}),"\u30c6\u30af\u30b9\u30c1\u30e3\uff65\u30de\u30c3\u30d1\u30fc"),"\u3067\u69cb\u6210\u3055\u308c\u307e\u3059\u3002 \u30c6\u30af\u30b9\u30c1\u30e3\uff65\u30de\u30c3\u30d1\u30fc\u306f\u3001\u53cc\u7dda\u5f62\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\uff65\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0\u3068\u30b0\u30ed\u30fc\u30d0\u30eb\uff65\u30a2\u30eb\u30d5\u30a1174\u3092\u4f7f\u7528\u3059\u308b\u3088\u3046\u306b\u8a2d\u5b9a\u3055\u308c\u3066\u304a\u308a\u3001\u63cf\u753b\u306b\u975e\u5e38\u306b\u6642\u9593\u304c\u304b\u304b\u308a\u307e\u3059\u3002 \u30b9\u30af\u30ea\u30fc\u30f3\u5168\u4f53\u306e\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u306b\u304b\u304b\u308b\u6642\u9593\u306f\u3001STM32F429-DISCO\u30dc\u30fc\u30c9\u4e0a\u3067\u304a\u3088\u305d100ms\u3067\u3059\u3002"),(0,r.kt)("h2",f({},{id:"test-application"}),"\u30c6\u30b9\u30c8\uff65\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3"),(0,r.kt)("p",null,"\u76f8\u4e92\u306b\u95a2\u9023\u3059\u308b2\u3064\u306e\u8981\u7d20\u3092\u79fb\u52d5\u3055\u305b\u308b\u305f\u3081\u306b\u306f\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"masterContainer"),"\u3068\u3044\u3046\u540d\u524d\u306e\u89aa\u30b3\u30f3\u30c6\u30ca\u5185\u306b\u3053\u308c\u3089\u3092\u914d\u7f6e\u3057\u307e\u3059\u3002\u3053\u306e\u89aa\u30b3\u30f3\u30c6\u30ca\u306f\u3044\u305a\u308c\u304b\u306e\u5b50\u30b3\u30f3\u30c6\u30ca\u306e2\u500d\u306e\u9ad8\u3055\u306b\u6307\u5b9a\u3059\u308b\u306e\u3067\u3001\u3053\u3053\u3067\u306f",(0,r.kt)("inlineCode",{parentName:"p"},"240x640\uff082*320\uff09"),"\u306e\u9ad8\u3055\u306b\u8a2d\u5b9a\u3055\u308c\u307e\u3059\u3002 TouchGFX Designer\u3067\u30b3\u30f3\u30c6\u30ca\u3092\u79fb\u52d5\u30a2\u30cb\u30e1\u30fc\u30bf\u3068\u3057\u3066\u5ba3\u8a00\u3059\u308b\u3053\u3068\u3067\u3001\u3053\u306e\u30b3\u30f3\u30c6\u30ca\u306f\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\uff65\u30c6\u30a3\u30c3\u30af\u3092\u53d7\u3051\u53d6\u308a\u3001\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u6e2c\u5b9a\u4e2d\u306b\u6642\u9593\u306e\u7d4c\u904e\u3068\u3068\u3082\u306b\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u3092\u5b9f\u884c\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002"),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/scenarios/achieving-better-performance-with-cacheable-container/toucgfx-designer-test-application-overview-4.17.png",mdxType:"Figure"},"\u30ad\u30e3\u30c3\u30b7\u30e5\u53ef\u80fd\u30b3\u30f3\u30c6\u30ca\u306e\u30c6\u30b9\u30c8\uff65\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u6982\u8981"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"container1"),"\u3068\u3044\u3046\u540d\u524d\u306e\u4e0a\u65b9\u306e\u30b3\u30f3\u30c6\u30ca\u306f\u3001x=0, y=0\u306b\u914d\u7f6e\u3055\u308c\u3066\u3044\u307e\u3059\u3002 ",(0,r.kt)("inlineCode",{parentName:"p"},"container2"),"\u3068\u3044\u3046\u540d\u524d\u306e\u4e0b\u65b9\u306e\u30b3\u30f3\u30c6\u30ca\u306f\u3001\u89aa\u306e",(0,r.kt)("inlineCode",{parentName:"p"},"masterContainer"),"\u5185\u3067container1\u306e\u771f\u4e0b\u306e\u3001x=0, y=320\u306b\u914d\u7f6e\u3055\u308c\u3066\u3044\u307e\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"container1"),"\u3068",(0,r.kt)("inlineCode",{parentName:"p"},"container2"),"\u306f",(0,r.kt)("inlineCode",{parentName:"p"},"masterContainer"),"\u5185\u306b\u914d\u7f6e\u3055\u308c\u3066\u3044\u308b\u306e\u3067\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"masterContainer"),"\u3092\u79fb\u52d5\u3059\u308b\u3068\u3001\u3053\u306e2\u3064\u306e\u8981\u7d20\u3082\u4e00\u7dd2\u306b\u79fb\u52d5\u3057\u307e\u3059\u3002 \u305f\u3068\u3048\u3070\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"masterContainer"),"\u3092x=0, y=-320\u306e\u4f4d\u7f6e\u306b\u79fb\u52d5\u3059\u308b\u3068\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"container1"),"\u306f\u8868\u793a\u3055\u308c\u306a\u304f\u306a\u308a\u307e\u3059\u304c\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"container2"),"\u306f\u5b8c\u5168\u306b\u8868\u793a\u3055\u308c\u307e\u3059\u3002 \u3053\u308c\u30892\u3064\u306e\u72b6\u614b\u9593\u306e\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u306f\u3001TouchGFX Designer\u306e\u30a4\u30f3\u30bf\u30e9\u30af\u30b7\u30e7\u30f3\u3092\u4f7f\u7528\u3057\u3066\u4f5c\u6210\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u4e0b\u306e\u30b3\u30fc\u30c9\u3067\u306f\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"masterContainer"),"\u3092\u3001\u4e0b\u306b\u3042\u308b\u5834\u5408\u306f\u4e0a\u306b\u3001\u3059\u3067\u306b\u4e0a\u306b\u3042\u308b\u5834\u5408\u306f\u4e0b\u306b\u79fb\u52d5\u3057\u307e\u3059\u3002 \u5206\u304b\u308a\u3084\u3059\u304f\u3059\u308b\u305f\u3081\u306b\u3001\u3053\u306e\u30b3\u30fc\u30c9\u306f\u30d3\u30e5\u30fc\u306e",(0,r.kt)("inlineCode",{parentName:"p"},"handleClickEvent"),"\u30a4\u30d9\u30f3\u30c8\u30cf\u30f3\u30c9\u30e9\u306b\u633f\u5165\u3055\u308c\u3066\u3044\u308b\u306e\u3067\u3001\u30e6\u30fc\u30b6\u304c\u30b9\u30af\u30ea\u30fc\u30f3\u4e0a\u306e\uff08ToggleButton\u306e\u4e0b\u306e\uff09\u3069\u3053\u304b\u3092\u30bf\u30c3\u30c1\u3059\u308b\u3068\u5e38\u306b\u5b9f\u884c\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)(c.Z,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",f({parentName:"pre"},{className:"language-cpp",metastring:"{9-12}","{9-12}":!0}),"void Screen1View::handleClickEvent(const ClickEvent& evt)\n{\n    //Forward event to base View (for the ToggleButton to work)\n    View::handleClickEvent(evt);\n    //If touch is released and y > 50 (below the ToggleButton), move masterContainer\n    if (evt.getType() == ClickEvent::RELEASED && evt.getY() > 50)\n    {\n        const int endPosition = masterContainer.getY() >= 0 ? -320 : 0;\n        masterContainer.startMoveAnimation(masterContainer.getX(), endPosition,\n                            20 /* ticks */,\n                            EasingEquations::cubicEaseInOut,\n                            EasingEquations::cubicEaseInOut);\n    }\n}\n")),(0,r.kt)("h2",f({},{id:"performance-of-redrawing-complex-containers"}),"\u8907\u96d1\u306a\u30b3\u30f3\u30c6\u30ca\u306e\u518d\u63cf\u753b\u306e\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9"),(0,r.kt)("p",null,"\u524d\u306b\u8ff0\u3079\u305f\u3088\u3046\u306b\u3001\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u306e\u5c0f\u3055\u306a\u5404\u30b9\u30c6\u30c3\u30d7\u3054\u3068\u306b\u30de\u30a4\u30af\u30ed\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u304c\u6642\u9593\u304c\u304b\u304b\u308b\u30c6\u30af\u30b9\u30c1\u30e3\uff65\u30de\u30c3\u30d1\u30fc\u3092\u518d\u63cf\u753b\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\u5834\u5408\u30011\u30d5\u30ec\u30fc\u30e0\u306e\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u6642\u9593\u306f\u304a\u3088\u305d100ms\u306b\u306a\u308a\u307e\u3059\u3002 \u3064\u307e\u308a\u3001\u6bce\u79d210\u30d5\u30ec\u30fc\u30e0\uff0810fps\uff09\u3067\u3059\u3002 \u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u5168\u4f53\u306720\u30d5\u30ec\u30fc\u30e0\u306a\u306e\u3067\u3001\u304a\u3088\u305d2\u79d2\u304b\u304b\u308b\u3068\u3044\u3046\u3053\u3068\u3067\u3059\u3002"),(0,r.kt)("p",null,"STM32F429-DISCO\u8a55\u4fa1\u30ad\u30c3\u30c8\u4e0a\u3067\u3001\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u6642\u9593\u306fGPIO G14\u306e\u30c7\u30b8\u30bf\u30eb\u4fe1\u53f7\u3068\u3057\u3066\u5f97\u3089\u308c\u307e\u3059\u3002 VSYNC\u4fe1\u53f7\u306fG13\u3067\u5f97\u3089\u308c\u307e\u3059\u3002 GPIO\u306e\u8a2d\u5b9a\u306f",(0,r.kt)("inlineCode",{parentName:"p"},"GPIO.cpp"),"\u30d5\u30a1\u30a4\u30eb\u3067\u884c\u308f\u308c\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u6b21\u306e\u753b\u50cf\u306f\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"masterContainer"),"\u3092\u4e0a\u5411\u304d\u306b\u79fb\u52d5\u3055\u305b\u305f\u3068\u304d\u306e\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306eVSYNC\u3068RENDER_TIME\u306e\u6e2c\u5b9a\u3092\u793a\u3057\u3066\u3044\u307e\u3059\u3002"),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/scenarios/achieving-better-performance-with-cacheable-container/saleae-logic-software-vsync-and-render-time.png",mdxType:"Figure"},"vsync\u3068\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u6642\u9593\u306e\u6e2c\u5b9a"),(0,r.kt)("p",null,"\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u6642\u9593\u306f\u6700\u521d\u306e\u4fe1\u53f7\uff08\u30a2\u30af\u30c6\u30a3\u30d6\uff65\u30ed\u30fc\uff09\u3067\u3059\u3002 \u79fb\u52d5\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u306e\u6700\u521d\u306e\u30d5\u30ec\u30fc\u30e0\u306e\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u6642\u9593\u306f\u300199.29ms\u3067\u3042\u308b\u3053\u3068\u304c\u78ba\u8a8d\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u4e0b\u306e\u4fe1\u53f7\u306fVSYNC\u3067\u3001\u30d4\u30af\u30bb\u30eb\u304c\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\u306b\u30af\u30ed\u30c3\u30af\u51fa\u529b\u3055\u308c\u308b\u3068\u304d\u306b\u3001\u5404\u30d5\u30ec\u30fc\u30e0\u3067\u30cf\u30a4\uff08\u9ad8\uff09\u304b\u3089\u30ed\u30fc\uff08\u4f4e\uff09\u306b\u9077\u79fb\u3057\u307e\u3059\u3002 \u4e0a\u306e\u6e2c\u5b9a\u3067\u306f\u30011\u30d5\u30ec\u30fc\u30e0\u306e\u63cf\u753b\u6642\u9593\u304c\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\u4e0a\u306e7\u30d5\u30ec\u30fc\u30e0\u5206\u306e\u6642\u9593\u306b\u76f8\u5f53\u3057\u3066\u3044\u308b\u3053\u3068\u304c\u308f\u304b\u308a\u307e\u3059\u3002 8\u756a\u76ee\u306eVSYNC\u4fe1\u53f7\u3067\u3001\u6b21\u306e\u30d5\u30ec\u30fc\u30e0\u306e\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u304c\u958b\u59cb\u3055\u308c\u307e\u3059\u3002 \u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u4e2d\u3001\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\u306b\u306f\uff08\u5225\u306e\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u5185\u306e\uff09\u305d\u308c\u307e\u3067\u306b\u63cf\u753b\u3055\u308c\u305f\u30d5\u30ec\u30fc\u30e0\u304c\u7e70\u308a\u8fd4\u3057\u8868\u793a\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)("h2",f({},{id:"improving-performance-through-caching"}),"\u30ad\u30e3\u30c3\u30b7\u30e5\u306b\u3088\u308b\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u306e\u5411\u4e0a"),(0,r.kt)("p",null,"\u4e0a\u306b\u793a\u3057\u305f\u79fb\u52d5\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u306f\u3001\u30b3\u30f3\u30c6\u30ca\u306e\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3092\u30e1\u30e2\u30ea\u306b\u30ad\u30e3\u30c3\u30b7\u30e5\u3059\u308b\u3053\u3068\u3067\u3001\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u3092\u5411\u4e0a\u3055\u305b\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002 \u30ad\u30e3\u30c3\u30b7\u30e5\u3057\u305f\u5f8c\u306f\u3001\u305d\u306e\u30e1\u30e2\u30ea\u5185\u306b\u914d\u7f6e\u3055\u308c\u3066\u3044\u308b\u30d4\u30af\u30bb\u30eb\u3092\uff08DMA\u3092\u4f7f\u7528\u3057\u3066\uff09\u5358\u7d14\u306b\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u306b\u79fb\u52d5\u3057\u307e\u3059\u3002\u30de\u30a4\u30af\u30ed\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u3092\u4f7f\u7528\u3057\u3066\u8907\u96d1\u306a\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3092\u518d\u63cf\u753b\u3059\u308b\u5fc5\u8981\u306f\u3042\u308a\u307e\u305b\u3093\u3002 \u30de\u30a4\u30af\u30ed\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u306e\u307f\u306e\u4f7f\u7528\u3067\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304c\u6bce\u79d260\u30d5\u30ec\u30fc\u30e0\uff0860fps\uff09\u3092\u9054\u6210\u53ef\u80fd\u3067\u3042\u3063\u3066\u3082\u3001\u540c\u3058\u8a08\u7b97\u3092\u7e70\u308a\u8fd4\u3057\u884c\u3046\u3053\u3068\u3067\u30de\u30a4\u30af\u30ed\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u304c\u30d3\u30b8\u30fc\u72b6\u614b\uff08\u304a\u305d\u3089\u304f\u8ca0\u8377100%\uff09\u306b\u306a\u308b\u53ef\u80fd\u6027\u306f\u9ad8\u304f\u3001\u3088\u308a\u91cd\u8981\u306a\u30bf\u30b9\u30af\u3092\u5b9f\u884c\u3067\u304d\u306a\u304f\u306a\u308a\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u30b3\u30f3\u30c6\u30ca\u306e\u3053\u306e\u300c\u30a4\u30f3\u30e1\u30e2\u30ea\uff65\u30a4\u30e1\u30fc\u30b8\u300d\u3092\u3001\u30b9\u30af\u30ea\u30fc\u30f3\u4e0a\u306e\u3055\u307e\u3056\u307e\u306a\u5834\u6240\u306b\u8868\u793a\u3067\u304d\u307e\u3059\u3002\u30b3\u30f3\u30c6\u30ca\u3092\u518d\u63cf\u753b\u3059\u308b\u5fc5\u8981\u306f\u3042\u308a\u307e\u305b\u3093\u3002"),(0,r.kt)("p",null,"\u6700\u521d\u306b\u884c\u3046\u306e\u306f\u3001TouchGFX Designer\u3067\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u6709\u52b9\u306b\u3059\u308b\u3053\u3068\u3067\u3059\u3002Cacheable\u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"container1"),"\u3068",(0,r.kt)("inlineCode",{parentName:"p"},"container2"),"\u306e2\u3064\u306e\u30b3\u30f3\u30c6\u30ca\u4e0a\u3067\u6709\u52b9\u306b\u3057\u307e\u3059\u3002"),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/scenarios/achieving-better-performance-with-cacheable-container/cacheable-container-option-in-touchgfx-designer-4.17.png",mdxType:"Figure"},"\u30b3\u30f3\u30c6\u30ca\uff65\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u30ad\u30e3\u30c3\u30b7\u30e5\u53ef\u80fd\u30b3\u30f3\u30c6\u30ca\uff65\u30aa\u30d7\u30b7\u30e7\u30f3"),(0,r.kt)("p",null,"\u6b21\u306e\u624b\u9806\u306f\u3001\u3053\u308c\u3089\u306e\u30b3\u30f3\u30c6\u30ca\u306e\u30ad\u30e3\u30c3\u30b7\u30e5\u5148\u3068\u3057\u3066\u3001RAM\u5185\u306b2\u3064\u306e\u30c0\u30a4\u30ca\u30df\u30c3\u30af\uff65\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\u3092\u4f5c\u6210\u3059\u308b\u3053\u3068\u3067\u3059\u3002"),(0,r.kt)("p",null,"\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\uff65\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u914d\u7f6e\u3059\u308bRAM\u5185\u306e\u30a2\u30c9\u30ec\u30b9\u3092\u5272\u308a\u5f53\u3066\u307e\u3059\u3002 \u3053\u3053\u306b\u6319\u3052\u308b\u7279\u5b9a\u306e\u4f8b\u3067\u306f\u3001SDRAM\uff08STM32F429\u3067\u306f\u30a2\u30c9\u30ec\u30b90xd0000000\u304b\u3089\u59cb\u307e\u308b\uff09\u3092\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u306e\u76f4\u5f8c\u306b\u914d\u7f6e\u3057\u3066\u3044\u307e\u3059\u3002"),(0,r.kt)("p",null,"Windows\u30b7\u30df\u30e5\u30ec\u30fc\u30bf\u3067\u306f\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u306f\u30b0\u30ed\u30fc\u30d0\u30eb\u5909\u6570\u5185\u306b\u5272\u308a\u5f53\u3066\u3089\u308c\u307e\u3059\u3002"),(0,r.kt)(c.Z,{mdxType:"CodeHeader"},"Screen1View.hpp"),(0,r.kt)("pre",null,(0,r.kt)("code",f({parentName:"pre"},{className:"language-cpp"}),"#ifdef SIMULATOR\n    uint32_t sdramBuffer[8*1024*1024/4];\n    uint16_t* sdram = (uint16_t*)sdramBuffer;\n#else\n    uint16_t* sdram = (uint16_t*)(0xd0000000 + 320*240*2*2);\n#endif\n")),(0,r.kt)("p",null,"\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\uff65\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u521d\u671f\u5316\u3057\u3066\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u7528\u306b2\u3064\u306e\u30c0\u30a4\u30ca\u30df\u30c3\u30af\uff65\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002"),(0,r.kt)(c.Z,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",f({parentName:"pre"},{className:"language-cpp",metastring:"{2-2}","{2-2}":!0}),"//Create bitmap cache and two dynamic bitmap for caching, each bitmap is 150Kb\nBitmap::setCache(sdram, 320*1024, 2); //320Kb cache\ndynamicBitmap1 = Bitmap::dynamicBitmapCreate(240, 320, Bitmap::RGB565);\ndynamicBitmap2 = Bitmap::dynamicBitmapCreate(240, 320, Bitmap::RGB565);\n")),(0,r.kt)("p",null,"\u30c0\u30a4\u30ca\u30df\u30c3\u30af\uff65\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\u3092\u30b3\u30f3\u30c6\u30ca\u306b\u5272\u308a\u5f53\u3066\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\uff65\u30e2\u30fc\u30c9\u306b\u8a2d\u5b9a\u3057\u307e\u3059\u3002"),(0,r.kt)(c.Z,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",f({parentName:"pre"},{className:"language-cpp"}),"//Assign the bitmaps to the Cacheable Containers\ncontainer1.setCacheBitmap(dynamicBitmap1);\ncontainer2.setCacheBitmap(dynamicBitmap2);\n\n//Enable caching\ncontainer1.enableCachedMode(true);\ncontainer2.enableCachedMode(true);\n\n//Finally update the cached bitmaps\ncontainer1.updateCache();\ncontainer2.updateCache();\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Container::updateCache()"),"\u3092\u547c\u3073\u51fa\u3059\u3068\u30012\u3064\u306e\u30b3\u30f3\u30c6\u30ca\u304c\u305d\u308c\u305e\u308c\u306e\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\u5185\u306b\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3055\u308c\u307e\u3059\u3002 \u30b3\u30f3\u30c6\u30ca\u306e\u5185\u5bb9\u3092\u66f4\u65b0\u3057\u305f\u5834\u5408\u3001\u3053\u306e\u30e1\u30bd\u30c3\u30c9\u3092\u5e38\u306b\u547c\u3073\u51fa\u3057\u307e\u3059\u3002 \u3053\u308c\u306f\u958b\u767a\u8005\u304c\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\uff65\u30b3\u30fc\u30c9\u3067\u51e6\u7406\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"container1"),"\u3068",(0,r.kt)("inlineCode",{parentName:"p"},"container2"),"\u306b\u5bfe\u3057\u3066\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u6709\u52b9\u306b\u3059\u308b\u3068\u3001\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u6e2c\u5b9a\u3067\u306f\u3001\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u6642\u9593\u304c99ms\u304b\u30895ms\u3078\u306820\u500d\u306e\u77ed\u7e2e\u3092\u793a\u3059\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002\u3064\u307e\u308a\u300160fps\u3067\u306e\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3092\u5b9f\u73fe\u53ef\u80fd\u3067\u300120\u30d5\u30ec\u30fc\u30e0\u304b\u3089\u306a\u308b\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u5168\u4f53\u3092\u3088\u308a\u77ed\u6642\u9593\u3067\u51e6\u7406\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/scenarios/achieving-better-performance-with-cacheable-container/saleae-logic-software-comparison.png",mdxType:"Figure"},"vsync\u3068\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u6642\u9593\u306e\u6e2c\u5b9a"),(0,r.kt)("h2",f({},{id:"conclusion"}),"\u307e\u3068\u3081"),(0,r.kt)("p",null,"\uff08\u79fb\u52d5\u983b\u5ea6\u306e\u9ad8\u3044\uff09\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u306e\u5b9f\u884c\u6642\u306b\u30c0\u30a4\u30ca\u30df\u30c3\u30af\uff65\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\u306b\u3088\u308b\u30ad\u30e3\u30c3\u30b7\u30e5\u53ef\u80fd\u30b3\u30f3\u30c6\u30ca\u3092\u4f7f\u7528\u3059\u308b\u3068\u3001\u8a08\u7b97\u304c\u8907\u96d1\u306a\u5bfe\u8c61\u306e\u5834\u5408\u3001\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u6642\u9593\u3092\u5927\u304d\u304f\u5411\u4e0a\u3055\u305b\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u306e\u30b9\u30c6\u30c3\u30d7\u306b\u5909\u66f4\u306f\u3042\u308a\u307e\u305b\u3093\u3002 \u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u30b3\u30f3\u30c6\u30f3\u30c4\u3092\u66f4\u65b0\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\u5834\u5408\uff08\u6642\u9593\u66f4\u65b0\u6642\u306e\u6642\u8a08\u306e\u6587\u5b57\u76e4\u306a\u3069\uff09\u306f\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u3088\u3063\u3066\u5236\u5fa1\u3055\u308c\u308b\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u306e\u5b9f\u884c\u6642\u306e\u7279\u5b9a\u306e\u30dd\u30a4\u30f3\u30c8\u3067\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u30b3\u30f3\u30c6\u30f3\u30c4\u3092\u518d\u8a08\u7b97\u3059\u308b\u3053\u3068\u306b\u306a\u308a\u307e\u3059\u3002"),(0,r.kt)(i.Z,{mdxType:"FurtherReading"},(0,r.kt)("li",null,(0,r.kt)(o.Z,{to:"../touchgfx-engine-features/dynamic-bitmaps",mdxType:"Link"},"\u30c0\u30a4\u30ca\u30df\u30c3\u30af\uff65\u30d3\u30c3\u30c8\u30de\u30c3\u30d7")),(0,r.kt)("li",null,(0,r.kt)(o.Z,{to:"loading-images-at-runtime",mdxType:"Link"},"\u30c0\u30a4\u30ca\u30df\u30c3\u30af\uff65\u30d3\u30c3\u30c8\u30de\u30c3\u30d7: \u5b9f\u884c\u6642\u306e\u753b\u50cf\u306e\u8aad\u8fbc\u307f"))))}x.isMDXComponent=!0}}]);