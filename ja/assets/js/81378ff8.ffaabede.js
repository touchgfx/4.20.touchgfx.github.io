"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[1267],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return g}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(r),g=a,m=d["".concat(s,".").concat(g)]||d[g]||u[g]||l;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},22425:function(e,t,r){var n=r(67294);class a extends n.Component{render(){return n.createElement("div",{className:"code-header"},n.createElement("div",null,n.createElement("h5",null,this.props.children)))}}t.Z=a},44035:function(e,t,r){var n=r(67294),a=r(25026);t.Z=function(e){const t=e.noShadow||!1,r=e.width,l=e.height,i=(0,a.Z)(e.imageSource);return t?n.createElement("div",{className:"figure noshadow"},n.createElement("a",{href:i,target:"_blank"},n.createElement("img",{width:r,height:l,src:i})),n.createElement("p",null,e.children)):n.createElement("div",{className:"figure"},n.createElement("a",{href:i,target:"_blank"},n.createElement("img",{width:r,height:l,src:i})),n.createElement("p",null,e.children))}},26235:function(e,t,r){r.r(t),r.d(t,{assets:function(){return v},contentTitle:function(){return k},default:function(){return h},frontMatter:function(){return m},metadata:function(){return b},toc:function(){return f}});var n=r(3905),a=r(44035),l=r(22425),i=Object.defineProperty,o=Object.defineProperties,s=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,d=(e,t,r)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,g=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&d(e,r,t[r]);if(c)for(var r of c(t))u.call(t,r)&&d(e,r,t[r]);return e};const m={id:"circle-progress",title:"Circle Progress\uff08\u30b5\u30fc\u30af\u30eb\uff65\u30d7\u30ed\u30b0\u30ec\u30b9\uff09"},k=void 0,b={unversionedId:"development/ui-development/ui-components/progress-indicators/circle-progress",id:"development/ui-development/ui-components/progress-indicators/circle-progress",title:"Circle Progress\uff08\u30b5\u30fc\u30af\u30eb\uff65\u30d7\u30ed\u30b0\u30ec\u30b9\uff09",description:"",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/development/ui-development/ui-components/progress-indicators/circle-progress.mdx",sourceDirName:"development/ui-development/ui-components/progress-indicators",slug:"/development/ui-development/ui-components/progress-indicators/circle-progress",permalink:"/4.20/ja/docs/development/ui-development/ui-components/progress-indicators/circle-progress",tags:[],version:"current",frontMatter:{id:"circle-progress",title:"Circle Progress\uff08\u30b5\u30fc\u30af\u30eb\uff65\u30d7\u30ed\u30b0\u30ec\u30b9\uff09"},sidebar:"docs",previous:{title:"Line Progress\uff08\u30e9\u30a4\u30f3\uff65\u30d7\u30ed\u30b0\u30ec\u30b9\uff09",permalink:"/4.20/ja/docs/development/ui-development/ui-components/progress-indicators/line-progress"},next:{title:"Shapes",permalink:"/4.20/ja/docs/category/shapes"}},v={},f=[{value:"\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\uff65\u30b0\u30eb\u30fc\u30d7",id:"widget-group",level:2},{value:"\u30d7\u30ed\u30d1\u30c6\u30a3",id:"properties",level:2},{value:"\u30a4\u30f3\u30bf\u30e9\u30af\u30b7\u30e7\u30f3",id:"interactions",level:2},{value:"\u30a2\u30af\u30b7\u30e7\u30f3",id:"actions",level:3},{value:"\u30c8\u30ea\u30ac",id:"triggers",level:3},{value:"\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9",id:"performance",level:2},{value:"\u4f8b",id:"examples",level:2},{value:"\u751f\u6210\u6e08\u307f\u30b3\u30fc\u30c9",id:"generated-code",level:3},{value:"\u30e6\u30fc\u30b6\uff65\u30b3\u30fc\u30c9",id:"user-code",level:3}],N={toc:f};function h(e){var t,r=e,{components:i}=r,d=((e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&c)for(var n of c(e))t.indexOf(n)<0&&u.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=g(g({},N),d),o(t,s({components:i,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"Circle Progress\u306f\u3001\u30d0\u30c3\u30af\u30b0\u30e9\u30a6\u30f3\u30c9",(0,n.kt)("a",g({parentName:"p"},{href:"../images/image"}),"Image\uff08\u753b\u50cf\uff09"),"\u4e0a\u3067",(0,n.kt)("a",g({parentName:"p"},{href:"../shapes/circle"}),"Circle\uff08\u30b5\u30fc\u30af\u30eb\uff09"),"\u3092\u9032\u6357\u30a4\u30f3\u30b8\u30b1\u30fc\u30bf\u3068\u3057\u3066\u4f7f\u7528\u3057\u3066\u3001\u73fe\u5728\u306e\u9032\u6357\u72b6\u6cc1\u3092\u793a\u3057\u307e\u3059\u3002 \u8272\u3001\u30a2\u30eb\u30d5\u30a1\u5024\u3001\u305d\u306e\u4ed6\u30b5\u30fc\u30af\u30eb\u306b\u95a2\u3059\u308b\u3059\u3079\u3066\u306e\u30d1\u30e9\u30e1\u30fc\u30bf\u3092\u8a2d\u5b9a\u3067\u304d\u307e\u3059\u3002 \u30ab\u30b9\u30bf\u30e0\uff65\u30d0\u30c3\u30af\u30b0\u30e9\u30a6\u30f3\u30c9\u753b\u50cf\u3092\u4f5c\u6210\u3057\u3001\u305d\u308c\u306b\u5408\u3046\u3088\u3046\u306b\u3001\u9032\u6357\u30a4\u30f3\u30b8\u30b1\u30fc\u30bf\u306e\u3055\u307e\u3056\u307e\u306a\u30d1\u30e9\u30e1\u30fc\u30bf\uff08\u4f4d\u7f6e\u3084\u30b5\u30a4\u30ba\u306a\u3069\uff09\u3092\u5909\u66f4\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,n.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-components/circle-progress/widget-appearance.gif",mdxType:"Figure"},"\u30b7\u30df\u30e5\u30ec\u30fc\u30bf\u3067\u5b9f\u884c\u3055\u308c\u308bCircle Progress"),(0,n.kt)("h2",g({},{id:"widget-group"}),"\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\uff65\u30b0\u30eb\u30fc\u30d7"),(0,n.kt)("p",null,"Circle Progress\u306f\u3001TouchGFX Designer\u306eProgress Indicators\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\uff65\u30b0\u30eb\u30fc\u30d7\u5185\u306b\u3042\u308a\u307e\u3059\u3002"),(0,n.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-components/circle-progress/widget-group-v4.17.png",mdxType:"Figure"},"TouchGFX Designer\u306eCircle Progress"),(0,n.kt)("h2",g({},{id:"properties"}),"\u30d7\u30ed\u30d1\u30c6\u30a3"),(0,n.kt)("p",null,"TouchGFX Designer\u306eCircle Progress\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u306f\u4ee5\u4e0b\u306e\u3068\u304a\u308a\u3067\u3059\u3002"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",g({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"th"},"\u30d7\u30ed\u30d1\u30c6\u30a3\uff65\u30b0\u30eb\u30fc\u30d7")),(0,n.kt)("th",g({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"th"},"\u30d7\u30ed\u30d1\u30c6\u30a3\u306e\u8aac\u660e")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Name")),(0,n.kt)("td",g({parentName:"tr"},{align:null}),"\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u540d\u524d\u3002 Name\u306f\u3001TouchGFX Designer\u304a\u3088\u3073\u30b3\u30fc\u30c9\u3067\u4f7f\u7528\u3055\u308c\u308b\u4e00\u610f\u306e\u8b58\u5225\u5b50\u3067\u3059\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Location")),(0,n.kt)("td",g({parentName:"tr"},{align:null}),"X\u304a\u3088\u3073Y\u306f\u3001\u89aa\u3092\u57fa\u6e96\u3068\u3057\u3066\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u5de6\u4e0a\u9685\u306e\u4f4d\u7f6e\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002",(0,n.kt)("br",null),(0,n.kt)("br",null),"W\u304a\u3088\u3073H\u306f\u3001\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u5e45\u3068\u9ad8\u3055\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002",(0,n.kt)("br",null),"Circle Progress\u306e\u30b5\u30a4\u30ba\u306f\u3001\u9078\u629e\u3057\u305f\u30d0\u30c3\u30af\u30b0\u30e9\u30a6\u30f3\u30c9\u753b\u50cf\u306e\u30b5\u30a4\u30ba\u306b\u3088\u3063\u3066\u6c7a\u307e\u308a\u307e\u3059\u3002",(0,n.kt)("br",null),(0,n.kt)("br",null),"Lock\u306f\u3001\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3092\u73fe\u5728\u306eX\u3001Y\u3001W\u3001H\u3067\u30ed\u30c3\u30af\u3059\u308b\u304b\u3069\u3046\u304b\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002",(0,n.kt)("br",null),"\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3092\u30ed\u30c3\u30af\u3059\u308b\u3068\u3001\u30b9\u30af\u30ea\u30fc\u30f3\u3092\u901a\u3057\u305f\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3068\u306e\u30a4\u30f3\u30bf\u30e9\u30af\u30b7\u30e7\u30f3\u3082\u7121\u52b9\u306b\u306a\u308a\u307e\u3059\u3002",(0,n.kt)("br",null),(0,n.kt)("br",null),"Visible\u306f\u3001\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u53ef\u8996\u6027\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002 \u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3092\u975e\u8868\u793a\u306b\u3059\u308b\u3068\u3001\u30b9\u30af\u30ea\u30fc\u30f3\u3092\u901a\u3057\u305f\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3068\u306e\u30a4\u30f3\u30bf\u30e9\u30af\u30b7\u30e7\u30f3\u3082\u7121\u52b9\u306b\u306a\u308a\u307e\u3059\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Style")),(0,n.kt)("td",g({parentName:"tr"},{align:null}),"Style\u306f\u3001\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u4e8b\u524d\u5b9a\u7fa9\u306e\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002\u9078\u629e\u30d7\u30ed\u30d1\u30c6\u30a3\u304c\u4e8b\u524d\u5b9a\u7fa9\u3055\u308c\u305f\u5024\u306b\u8a2d\u5b9a\u3055\u308c\u307e\u3059\u3002",(0,n.kt)("br",null),"\u3053\u308c\u3089\u306e\u30b9\u30bf\u30a4\u30eb\u306b\u306f\u3001\u81ea\u7531\u306b\u4f7f\u7528\u3067\u304d\u308b\u753b\u50cf\u304c\u542b\u307e\u308c\u3066\u3044\u307e\u3059\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Image & Color")),(0,n.kt)("td",g({parentName:"tr"},{align:null}),"Background\u306f\u3001\u30d0\u30c3\u30af\u30b0\u30e9\u30a6\u30f3\u30c9\u753b\u50cf\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002",(0,n.kt)("br",null),(0,n.kt)("br",null),"Progress\u306f\u3001\u30b5\u30fc\u30af\u30eb\u306e\u5857\u308a\u3064\u3076\u3057\u306b\u4f7f\u7528\u3059\u308b\u8272\u307e\u305f\u306f\u753b\u50cf\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Values")),(0,n.kt)("td",g({parentName:"tr"},{align:null}),"Range Min\u304a\u3088\u3073Range Max\u306f\u3001\u30a4\u30f3\u30b8\u30b1\u30fc\u30bf\u306e\u6700\u5c0f\u304a\u3088\u3073\u6700\u5927\u6574\u6570\u5024\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002",(0,n.kt)("br",null),(0,n.kt)("br",null),"Initial\u306f\u3001\u9032\u6357\u30a4\u30f3\u30b8\u30b1\u30fc\u30bf\u306e\u521d\u671f\u5024\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002Steps Total\u306f\u3001\u9032\u6357\u30a4\u30f3\u30b8\u30b1\u30fc\u30bf\u304c\u65b0\u3057\u3044\u5024\u3092\u30ec\u30dd\u30fc\u30c8\u3059\u308b\u3068\u304d\u306e\u9593\u9694\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002 \u305f\u3068\u3048\u3070\u3001\u9032\u6357\u30920%\u300110%\u300120%\u3001...100%\u3068\u3044\u3046\u7c92\u5ea6\u3067\u30ec\u30dd\u30fc\u30c8\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\u5834\u5408\u3001\u30c8\u30fc\u30bf\u30eb\u5024\u306f10\u306b\u8a2d\u5b9a\u3057\u307e\u3059\u3002",(0,n.kt)("br",null),(0,n.kt)("br",null),"Steps Min\u306f\u3001\u9032\u6357\u30a4\u30f3\u30b8\u30b1\u30fc\u30bf\u304c\u793a\u3059\u6700\u5c0f\u30b9\u30c6\u30c3\u30d7\u6570\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Appearance")),(0,n.kt)("td",g({parentName:"tr"},{align:null}),"Center Position X\u304a\u3088\u3073Center Position Y\u306f\u3001\u89aa\u306eCircle Progress\u3092\u57fa\u6e96\u3068\u3057\u3066\u9032\u6357\u30b5\u30fc\u30af\u30eb\u306e\u4e2d\u5fc3\u4f4d\u7f6e\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002",(0,n.kt)("br",null),(0,n.kt)("br",null),"Start & End Angle\u306f\u3001\u63cf\u753b\u3059\u308b\u30b5\u30fc\u30af\u30eb\u306e\u958b\u59cb\u89d2\u5ea6\u3068\u7d42\u4e86\u89d2\u5ea6\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002",(0,n.kt)("br",null),(0,n.kt)("br",null),"Radius\u306f\u3001\u9032\u6357\u30b5\u30fc\u30af\u30eb\u306e\u30b5\u30a4\u30ba\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002",(0,n.kt)("br",null),(0,n.kt)("br",null),"Line Width\u306f\u3001\u9032\u6357\u30b5\u30fc\u30af\u30eb\u306e\u30e9\u30a4\u30f3\u5e45\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002 \u3053\u306e\u5024\u304c0\u306e\u5834\u5408\u3001\u9032\u6357\u30b5\u30fc\u30af\u30eb\u306f\u534a\u5f84\uff08Radius\uff09\u3068\u540c\u3058\u5927\u304d\u3055\u306b\u306a\u308a\u307e\u3059\u3002 \u305d\u3046\u3067\u306a\u3044\u5834\u5408\u3001\u3053\u3053\u3067\u6307\u5b9a\u3059\u308b\u5e45\u306b\u3088\u3063\u3066\u3001\u5916\u5074\u304b\u3089\u5185\u5074\u306b\u5411\u304b\u3046\u9032\u6357\u30b5\u30fc\u30af\u30eb\u306e\u5e45\u304c\u8a2d\u5b9a\u3055\u308c\u307e\u3059\u3002",(0,n.kt)("br",null),(0,n.kt)("br",null),"Cap Style\u306f\u3001\u30e9\u30a4\u30f3\u306e\u672b\u5c3e\u306e\u30b9\u30bf\u30a4\u30eb\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002",(0,n.kt)("br",null),(0,n.kt)("br",null),"Alpha\u306f\u3001\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u900f\u660e\u5ea6\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002 \u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u30a2\u30eb\u30d5\u30a1\u5024\u306e\u7bc4\u56f2\u306f\u30010\uff5e255\u3067\u3059\u3002 0\u306f\u5b8c\u5168\u306b\u900f\u660e\u3067\u3001255\u306f\u5857\u308a\u3064\u3076\u3055\u308c\u305f\u72b6\u614b\u3067\u3059\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Mixins")),(0,n.kt)("td",g({parentName:"tr"},{align:null}),"Draggable\u306f\u3001\u5b9f\u884c\u6642\u306b\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3092\u30c9\u30e9\u30c3\u30b0\u53ef\u80fd\u306b\u3059\u308b\u304b\u3069\u3046\u304b\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002",(0,n.kt)("br",null),(0,n.kt)("br",null),"ClickListener\u306f\u3001\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u304c\u30af\u30ea\u30c3\u30af\u3055\u308c\u305f\u3068\u304d\u306b\u30b3\u30fc\u30eb\u30d0\u30c3\u30af\u3092\u767a\u884c\u3059\u308b\u304b\u3069\u3046\u304b\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002",(0,n.kt)("br",null),(0,n.kt)("br",null),"FadeAnimator\u306f\u3001\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u304cAlpha\u5024\u3078\u306e\u5909\u66f4\u3092\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u5316\u3067\u304d\u308b\u304b\u3069\u3046\u304b\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002",(0,n.kt)("br",null),(0,n.kt)("br",null),"MoveAnimator\u306f\u3001\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u304cX\u304a\u3088\u3073Y\u5024\u3078\u306e\u5909\u66f4\u3092\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u5316\u3067\u304d\u308b\u304b\u3069\u3046\u304b\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002")))),(0,n.kt)("h2",g({},{id:"interactions"}),"\u30a4\u30f3\u30bf\u30e9\u30af\u30b7\u30e7\u30f3"),(0,n.kt)("p",null,"\u4ee5\u4e0b\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u3067\u306f\u3001Circle Progress\u306b\u3088\u3063\u3066\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u308b\u30a2\u30af\u30b7\u30e7\u30f3\u3068\u30c8\u30ea\u30ac\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u307e\u3059\u3002"),(0,n.kt)("h3",g({},{id:"actions"}),"\u30a2\u30af\u30b7\u30e7\u30f3"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",g({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"th"},"\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u56fa\u6709\u306e\u30a2\u30af\u30b7\u30e7\u30f3")),(0,n.kt)("th",g({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"th"},"\u8aac\u660e")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Set value")),(0,n.kt)("td",g({parentName:"tr"},{align:null}),"\u9032\u6357\u30a4\u30f3\u30b8\u30b1\u30fc\u30bf\u306e\u5024\u3092\u8a2d\u5b9a\u3057\u307e\u3059\u3002")))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",g({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"th"},"\u6a19\u6e96\u306e\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\uff65\u30a2\u30af\u30b7\u30e7\u30f3")),(0,n.kt)("th",g({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"th"},"\u8aac\u660e")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Move widget")),(0,n.kt)("td",g({parentName:"tr"},{align:null}),"\u6642\u9593\u306e\u7d4c\u904e\u306b\u4f34\u3063\u3066\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3092\u65b0\u3057\u3044\u4f4d\u7f6e\u306b\u79fb\u52d5\u3057\u307e\u3059\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Fade widget")),(0,n.kt)("td",g({parentName:"tr"},{align:null}),"\u6642\u9593\u306e\u7d4c\u904e\u306b\u4f34\u3063\u3066\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u30a2\u30eb\u30d5\u30a1\u5024\u3092\u5909\u66f4\u3057\u307e\u3059\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Hide widget")),(0,n.kt)("td",g({parentName:"tr"},{align:null}),"\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3092\u975e\u8868\u793a\u306b\u3057\u307e\u3059\uff08\u53ef\u8996\u6027\u3092false\u306b\u8a2d\u5b9a\u3057\u307e\u3059\uff09\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Show widget")),(0,n.kt)("td",g({parentName:"tr"},{align:null}),"\u975e\u8868\u793a\u306e\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3092\u8868\u793a\u3057\u307e\u3059\uff08\u53ef\u8996\u6027\u3092true\u306b\u8a2d\u5b9a\u3057\u307e\u3059\uff09\u3002")))),(0,n.kt)("h3",g({},{id:"triggers"}),"\u30c8\u30ea\u30ac"),(0,n.kt)("p",null,"Circle Progress\u306f\u30c8\u30ea\u30ac\u3092\u767a\u884c\u3057\u307e\u305b\u3093\u3002"),(0,n.kt)("h2",g({},{id:"performance"}),"\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9"),(0,n.kt)("p",null,"Circle Progress\u306f\u30b5\u30fc\u30af\u30eb\u3068\u30d0\u30c3\u30af\u30b0\u30e9\u30a6\u30f3\u30c9\u753b\u50cf\u3067\u69cb\u6210\u3055\u308c\u307e\u3059\u3002 \u30b5\u30fc\u30af\u30eb\u306fCanvasWidget\u306b\u57fa\u3065\u304f\u306e\u3067\u3001\u63cf\u753b\u3067\u306f\u30de\u30a4\u30af\u30ed\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u306b\u5927\u304d\u304f\u4f9d\u5b58\u3057\u307e\u3059\u3002 \u3053\u306e\u305f\u3081\u3001Circle Progress\u306f\u3001\u307b\u3068\u3093\u3069\u306e\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u4e0a\u3067\u8981\u6c42\u306e\u53b3\u3057\u3044\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3067\u3042\u308b\u3068\u898b\u306a\u3055\u308c\u307e\u3059\u3002"),(0,n.kt)("p",null,"CanvasWidget\u306e\u63cf\u753b\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u306e\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001\u300c",(0,n.kt)("a",g({parentName:"p"},{href:"../general-ui-component-performance"}),"\u4e00\u822c\u7684\u306aUI\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9"),"\u300d\u30bb\u30af\u30b7\u30e7\u30f3\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,n.kt)("h2",g({},{id:"examples"}),"\u4f8b"),(0,n.kt)("h3",g({},{id:"generated-code"}),"\u751f\u6210\u6e08\u307f\u30b3\u30fc\u30c9"),(0,n.kt)("p",null,"\u30d3\u30e5\u30fc\u306e\u57fa\u5e95\u30af\u30e9\u30b9\u306e\u751f\u6210\u6e08\u307f\u30b3\u30fc\u30c9\u3092\u898b\u308b\u3068\u3001TouchGFX Designer\u306b\u3088\u308bCircle Progress\u306e\u8a2d\u5b9a\u65b9\u6cd5\u304c\u308f\u304b\u308a\u307e\u3059\u3002"),(0,n.kt)(l.Z,{mdxType:"CodeHeader"},"Screen1ViewBase.cpp"),(0,n.kt)("pre",null,(0,n.kt)("code",g({parentName:"pre"},{className:"language-cpp"}),"circleProgress.setXY(188, 84);\ncircleProgress.setProgressIndicatorPosition(0, 0, 104, 104);\ncircleProgress.setRange(0, 100);\ncircleProgress.setCenter(52, 52);\ncircleProgress.setRadius(50);\ncircleProgress.setLineWidth(0);\ncircleProgress.setStartEndAngle(0, 360);\ncircleProgress.setBackground(touchgfx::Bitmap(BITMAP_BLUE_PROGRESSINDICATORS_BG_MEDIUM_CIRCLE_INDICATOR_BG_FULL_ID));\ncircleProgressPainter.setBitmap(touchgfx::Bitmap(BITMAP_BLUE_PROGRESSINDICATORS_FILL_MEDIUM_CIRCLE_INDICATOR_FILL_FULL_ID));\ncircleProgress.setPainter(circleProgress1Painter);\ncircleProgress.setValue(0);\n")),(0,n.kt)("h3",g({},{id:"user-code"}),"\u30e6\u30fc\u30b6\uff65\u30b3\u30fc\u30c9"),(0,n.kt)("p",null,"\u6b21\u306e\u4f8b\u306f\u3001\u9032\u6357\u3092\u30b7\u30df\u30e5\u30ec\u30fc\u30b7\u30e7\u30f3\u3059\u308b\u305f\u3081\u306b\u3001",(0,n.kt)("inlineCode",{parentName:"p"},"handleTickEvent()"),"\u95a2\u6570\u3092\u5b9f\u88c5\u3059\u308b\u65b9\u6cd5\u3092\u793a\u3057\u3066\u3044\u307e\u3059\u3002 \u3053\u306e\u30b3\u30fc\u30c9\u3092\u5b9f\u884c\u3059\u308b\u3068\u3001",(0,n.kt)("a",g({parentName:"p"},{href:"circle-progress"}),"\u3053\u306e\u8a18\u4e8b\u306e\u5192\u982d"),"\u3067\u793a\u3057\u305f\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304c\u4f5c\u6210\u3055\u308c\u307e\u3059\u3002"),(0,n.kt)(l.Z,{mdxType:"CodeHeader"},"Screen1View.hpp"),(0,n.kt)("pre",null,(0,n.kt)("code",g({parentName:"pre"},{className:"language-cpp"}),"class Screen1View : public Screen1ViewBase\n{\npublic:\n    Screen1View();\n    virtual ~Screen1View() {}\n    virtual void setupScreen();\n    virtual void tearDownScreen();\n    virtual void handleTickEvent();\nprotected:\n    bool increase = true;\n};\n")),(0,n.kt)(l.Z,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,n.kt)("pre",null,(0,n.kt)("code",g({parentName:"pre"},{className:"language-cpp"}),'void Screen1View::handleTickEvent()\n{\n    int currentValue = circleProgress.getValue();\n    int16_t max;\n    int16_t min;\n    circleProgress.getRange(min, max);\n\n    if (currentValue == min)\n    {\n        increase = true;\n    }\n    else if (currentValue == max)\n    {\n        increase = false;\n    }\n\n    int nextValue = increase == true ? currentValue+1 : currentValue-1;\n\n    circleProgress.setValue(nextValue);\n}```\n currentValue+1 : currentValue-1; circleProgress.setValue(nextValue); } </code></pre>\n\n<Tip>\n\u30e6\u30fc\u30b6\uff65\u30b3\u30fc\u30c9\u3067\u306f\u3001\u3053\u308c\u3089\u306e\u95a2\u6570\u3084\u3001CircleProgress\u30af\u30e9\u30b9\u3067\u4f7f\u7528\u53ef\u80fd\u306a\u305d\u306e\u4ed6\u306e\u95a2\u6570\u3092\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002 \u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u5916\u89b3\u3092\u5909\u66f4\u3059\u308b\u5834\u5408\u306b\u306f\u3001 <InlineCode>circleProgress1.invalidate()</InlineCode> \u3092\u547c\u3073\u51fa\u3057\u3066\u3001\u518d\u63cf\u753b\u3092\u884c\u3046\u5fc5\u8981\u304c\u3042\u308b\u3053\u3068\u3092\u5fd8\u308c\u306a\u3044\u3067\u304f\u3060\u3055\u3044\u3002\n</Tip>\n\n### TouchGFX Designer\u306e\u4f8b {#touchgfx-designer-examples}\n\nCircle Progress\u3092\u3055\u3089\u306b\u63a2\u7d22\u3059\u308b\u306b\u306f\u3001\u6b21\u306eUI\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3092\u4f7f\u7528\u3057\u3066\u3001TouchGFX Designer\u5185\u3067\u65b0\u3057\u3044\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u4f5c\u6210\u3057\u3066\u307f\u3066\u304f\u3060\u3055\u3044\u3002\n\n<Figure imageSource="/img/development/ui-development/ui-templates/progress-indicator-example-v4.17.png">TouchGFX Designer\u306eProgress Indicator Example UI\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8</Figure>\n\n## API\u53c2\u7167 {#api-reference}\n\n<FurtherReading>\n  <li>\n    <Link to="../../../../api/classes/classtouchgfx_1_1_circle_progress">CircleProgress\u30af\u30e9\u30b9\u306eAPI\u53c2\u7167</Link>\n  </li>\n</FurtherReading>\n')))}h.isMDXComponent=!0}}]);