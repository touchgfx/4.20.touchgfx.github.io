"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[6828],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return u}});var l=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=l.createContext({}),p=function(e){var t=l.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return l.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},d=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=p(n),u=r,h=d["".concat(c,".").concat(u)]||d[u]||m[u]||a;return n?l.createElement(h,i(i({ref:t},s),{},{components:n})):l.createElement(h,i({ref:t},s))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<a;p++)i[p]=n[p];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}d.displayName="MDXCreateElement"},22425:function(e,t,n){var l=n(67294);class r extends l.Component{render(){return l.createElement("div",{className:"code-header"},l.createElement("div",null,l.createElement("h5",null,this.props.children)))}}t.Z=r},44035:function(e,t,n){var l=n(67294),r=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,a=e.height,i=(0,r.Z)(e.imageSource);return t?l.createElement("div",{className:"figure noshadow"},l.createElement("a",{href:i,target:"_blank"},l.createElement("img",{width:n,height:a,src:i})),l.createElement("p",null,e.children)):l.createElement("div",{className:"figure"},l.createElement("a",{href:i,target:"_blank"},l.createElement("img",{width:n,height:a,src:i})),l.createElement("p",null,e.children))}},29415:function(e,t,n){var l=n(67294),r=n(88678);const a=l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},l.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class i extends l.Component{render(){return l.createElement(r.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:a},this.props.children)}}t.Z=i},88678:function(e,t,n){var l=n(67294);class r extends l.Component{render(){const e=`highlight highlight-${this.props.type}`;return l.createElement("div",{className:e},l.createElement("div",{className:"highlight-heading"},l.createElement("h5",null,l.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),l.createElement("div",{className:"highlight-content"},this.props.children))}}t.Z=r},31217:function(e,t,n){var l=n(67294);class r extends l.Component{render(){return l.createElement("code",null,this.props.children)}}t.Z=r},37793:function(e,t,n){var l=n(67294),r=n(88678);const a=l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},l.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class i extends l.Component{render(){return l.createElement(r.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:a},this.props.children)}}t.Z=i},67171:function(e,t,n){n.r(t),n.d(t,{assets:function(){return w},contentTitle:function(){return S},default:function(){return I},frontMatter:function(){return v},metadata:function(){return b},toc:function(){return N}});var l=n(3905),r=n(44035),a=n(29415),i=n(37793),o=n(31217),c=n(39130),p=n(22425),s=Object.defineProperty,m=Object.defineProperties,d=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,k=(e,t,n)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,f=(e,t)=>{for(var n in t||(t={}))h.call(t,n)&&k(e,n,t[n]);if(u)for(var n of u(t))g.call(t,n)&&k(e,n,t[n]);return e};const v={id:"scroll-wheel",title:"Scroll Wheel\uff08\u30b9\u30af\u30ed\u30fc\u30eb\uff65\u30db\u30a4\u30fc\u30eb\uff09"},S=void 0,b={unversionedId:"development/ui-development/ui-components/containers/scroll-wheel",id:"development/ui-development/ui-components/containers/scroll-wheel",title:"Scroll Wheel\uff08\u30b9\u30af\u30ed\u30fc\u30eb\uff65\u30db\u30a4\u30fc\u30eb\uff09",description:"",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/development/ui-development/ui-components/containers/scroll-wheel.mdx",sourceDirName:"development/ui-development/ui-components/containers",slug:"/development/ui-development/ui-components/containers/scroll-wheel",permalink:"/4.20/ja/docs/development/ui-development/ui-components/containers/scroll-wheel",draft:!1,tags:[],version:"current",frontMatter:{id:"scroll-wheel",title:"Scroll Wheel\uff08\u30b9\u30af\u30ed\u30fc\u30eb\uff65\u30db\u30a4\u30fc\u30eb\uff09"},sidebar:"docs",previous:{title:"Scroll List\uff08\u30b9\u30af\u30ed\u30fc\u30eb\uff65\u30ea\u30b9\u30c8\uff09",permalink:"/4.20/ja/docs/development/ui-development/ui-components/containers/scroll-list"},next:{title:"Slide Menu\uff08\u30b9\u30e9\u30a4\u30c9\uff65\u30e1\u30cb\u30e5\u30fc\uff09",permalink:"/4.20/ja/docs/development/ui-development/ui-components/containers/slide-menu"}},w={},N=[{value:"\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\uff65\u30b0\u30eb\u30fc\u30d7",id:"widget-group",level:2},{value:"\u30d7\u30ed\u30d1\u30c6\u30a3",id:"properties",level:2},{value:"\u30a2\u30a4\u30c6\u30e0\uff65\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8",id:"item-templates",level:3},{value:"\u30a4\u30f3\u30bf\u30e9\u30af\u30b7\u30e7\u30f3",id:"interactions",level:2},{value:"\u30a2\u30af\u30b7\u30e7\u30f3",id:"actions",level:3},{value:"\u30c8\u30ea\u30ac",id:"triggers",level:3},{value:"\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9",id:"performance",level:2},{value:"\u4f8b",id:"examples",level:2},{value:"\u751f\u6210\u6e08\u307f\u30b3\u30fc\u30c9",id:"generated-code",level:3},{value:"\u30e6\u30fc\u30b6\uff65\u30b3\u30fc\u30c9",id:"user-code",level:3},{value:"TouchGFX Designer\u306e\u4f8b",id:"touchgfx-designer-examples",level:3},{value:"API\u53c2\u7167",id:"api-reference",level:2}],C={toc:N};function I(e){var t,n=e,{components:s}=n,k=((e,t)=>{var n={};for(var l in e)h.call(e,l)&&t.indexOf(l)<0&&(n[l]=e[l]);if(null!=e&&u)for(var l of u(e))t.indexOf(l)<0&&g.call(e,l)&&(n[l]=e[l]);return n})(n,["components"]);return(0,l.kt)("wrapper",(t=f(f({},C),k),m(t,d({components:s,mdxType:"MDXLayout"}))),(0,l.kt)("p",null,"Scroll Wheel\u306f\u3001\u8907\u6570\u306e\u30a2\u30a4\u30c6\u30e0\u3092\u542b\u3080\u30b9\u30af\u30ed\u30fc\u30eb\u53ef\u80fd\u306a\u30e1\u30cb\u30e5\u30fc\u3067\u3001\u30db\u30a4\u30fc\u30eb\u5185\u306e\u30a2\u30a4\u30c6\u30e0\u3092\u30b9\u30af\u30ed\u30fc\u30eb\u3059\u308b\u3068\u52d5\u7684\u306b\u66f4\u65b0\u3055\u308c\u3001\u30a2\u30a4\u30c6\u30e0\u3092\u9078\u629e\u3059\u308b\u3068\u305d\u308c\u304c\u30d5\u30a9\u30fc\u30ab\u30b9\u3055\u308c\u307e\u3059\u3002 Scroll Wheel\u3068\u306e\u30a4\u30f3\u30bf\u30e9\u30af\u30b7\u30e7\u30f3\u306b\u53cd\u5fdc\u3059\u308b\u305f\u3081\u306e\u30b3\u30fc\u30c9\u3092\u6709\u52b9\u306b\u3057\u3001\u30db\u30a4\u30fc\u30eb\u5185\u306e\u30a2\u30a4\u30c6\u30e0\u3068\u306e\u30a4\u30f3\u30bf\u30e9\u30af\u30b7\u30e7\u30f3\u306b\u57fa\u3065\u3044\u3066\u3001\u3055\u307e\u3056\u307e\u306a\u30b3\u30fc\u30eb\u30d0\u30c3\u30af\u3092\u547c\u3073\u51fa\u3059\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,l.kt)(r.Z,{imageSource:"/img/development/ui-development/ui-components/scroll-wheel/widget-appearance.gif",mdxType:"Figure"},"\u30b7\u30df\u30e5\u30ec\u30fc\u30bf\u3067\u5b9f\u884c\u3055\u308c\u308bScroll Wheel"),(0,l.kt)("h2",f({},{id:"widget-group"}),"\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\uff65\u30b0\u30eb\u30fc\u30d7"),(0,l.kt)("p",null,"Scroll Wheel\u306f\u3001TouchGFX Designer\u306eContainers\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\uff65\u30b0\u30eb\u30fc\u30d7\u5185\u306b\u3042\u308a\u307e\u3059\u3002"),(0,l.kt)(r.Z,{imageSource:"/img/development/ui-development/ui-components/scroll-wheel/widget-group-v4.17.png",mdxType:"Figure"},"TouchGFX Designer\u306eScroll Wheel"),(0,l.kt)("h2",f({},{id:"properties"}),"\u30d7\u30ed\u30d1\u30c6\u30a3"),(0,l.kt)("p",null,"TouchGFX Designer\u306eScroll Wheel\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u306f\u4ee5\u4e0b\u306e\u3068\u304a\u308a\u3067\u3059\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",f({parentName:"tr"},{align:null}),(0,l.kt)("strong",{parentName:"th"},"\u30d7\u30ed\u30d1\u30c6\u30a3\uff65\u30b0\u30eb\u30fc\u30d7")),(0,l.kt)("th",f({parentName:"tr"},{align:null}),(0,l.kt)("strong",{parentName:"th"},"\u30d7\u30ed\u30d1\u30c6\u30a3\u306e\u8aac\u660e")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",f({parentName:"tr"},{align:null}),(0,l.kt)("strong",{parentName:"td"},"Name")),(0,l.kt)("td",f({parentName:"tr"},{align:null}),"\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u540d\u524d\u3002 Name\u306f\u3001TouchGFX Designer\u304a\u3088\u3073\u30b3\u30fc\u30c9\u3067\u4f7f\u7528\u3055\u308c\u308b\u4e00\u610f\u306e\u8b58\u5225\u5b50\u3067\u3059\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",f({parentName:"tr"},{align:null}),(0,l.kt)("strong",{parentName:"td"},"Type")),(0,l.kt)("td",f({parentName:"tr"},{align:null}),"Type\u306f\u3001Scroll Wheel\u3092\u7e26\u5411\u304d\u306b\u3059\u308b\u306e\u304b\u3001\u6a2a\u5411\u304d\u306b\u3059\u308b\u306e\u304b\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",f({parentName:"tr"},{align:null}),(0,l.kt)("strong",{parentName:"td"},"Location")),(0,l.kt)("td",f({parentName:"tr"},{align:null}),"X\u304a\u3088\u3073Y\u306f\u3001\u89aa\u3092\u57fa\u6e96\u3068\u3057\u3066\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u5de6\u4e0a\u9685\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002",(0,l.kt)("br",null),(0,l.kt)("br",null),"W\u304a\u3088\u3073H\u306f\u3001\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u5e45\u3068\u9ad8\u3055\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002",(0,l.kt)("br",null),(0,l.kt)("br",null),"Lock\u306f\u3001\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3092\u73fe\u5728\u306eX\u3001Y\u3001W\u3001H\u3067\u30ed\u30c3\u30af\u3059\u308b\u304b\u3069\u3046\u304b\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002",(0,l.kt)("br",null),"\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3092\u30ed\u30c3\u30af\u3059\u308b\u3068\u3001\u30b9\u30af\u30ea\u30fc\u30f3\u3092\u901a\u3057\u305f\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3068\u306e\u30a4\u30f3\u30bf\u30e9\u30af\u30b7\u30e7\u30f3\u3082\u7121\u52b9\u306b\u306a\u308a\u307e\u3059\u3002 ",(0,l.kt)("br",null),(0,l.kt)("br",null),"Visible\u306f\u3001\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u53ef\u8996\u6027\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002",(0,l.kt)("br",null),"\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3092\u975e\u8868\u793a\u306b\u3059\u308b\u3068\u3001\u30b9\u30af\u30ea\u30fc\u30f3\u3092\u901a\u3057\u305f\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3068\u306e\u30a4\u30f3\u30bf\u30e9\u30af\u30b7\u30e7\u30f3\u3082\u7121\u52b9\u306b\u306a\u308a\u307e\u3059\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",f({parentName:"tr"},{align:null}),(0,l.kt)("strong",{parentName:"td"},"Item Template")),(0,l.kt)("td",f({parentName:"tr"},{align:null}),"Item Template\u306f\u3001\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3068\u3057\u3066\u4f7f\u7528\u3059\u308bCustomContainer\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002",(0,l.kt)("br",null),(0,l.kt)("br",null),"Number of Items\u306f\u3001Scroll Wheel\u306b\u5b58\u5728\u3059\u308b\u30a2\u30a4\u30c6\u30e0\u306e\u6570\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002",(0,l.kt)("br",null),(0,l.kt)("br",null),"Initial Selected Item\u306f\u3001\u6700\u521d\u306b\u9078\u629e\u3055\u308c\u308b\u30a2\u30a4\u30c6\u30e0\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002",(0,l.kt)("br",null),(0,l.kt)("br",null),"Use Selected Style Template\u306f\u3001\u9078\u629e\u30a2\u30a4\u30c6\u30e0\u306b\u500b\u5225\u306e\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3092\u4f7f\u7528\u3059\u308b\u304b\u3069\u3046\u304b\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002",(0,l.kt)("br",null),(0,l.kt)("br",null),"Selected Style Template\u306f\u3001\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3068\u3057\u3066\u4f7f\u7528\u3059\u308bCustomContainer\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",f({parentName:"tr"},{align:null}),(0,l.kt)("strong",{parentName:"td"},"List Appearance")),(0,l.kt)("td",f({parentName:"tr"},{align:null}),"Circular\u306f\u3001Scroll Wheel\u306e\u30a2\u30a4\u30c6\u30e0\u304c\u6700\u5f8c\u307e\u3067\u5230\u9054\u3057\u305f\u3068\u304d\u306b\u30eb\u30fc\u30d7\u3059\u308b\u304b\u3069\u3046\u304b\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002",(0,l.kt)("br",null),(0,l.kt)("br",null),"Selected Item Offset\u306f\u3001\u9078\u629e\u3057\u305f\u30a2\u30a4\u30c6\u30e0\u306e\u5834\u6240\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002",(0,l.kt)("br",null),(0,l.kt)("br",null),"Item Margin\u306f\u3001\u30a2\u30a4\u30c6\u30e0\u9593\u306e\u9593\u9694\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002",(0,l.kt)("br",null),(0,l.kt)("br",null),"Extra Size Before\u304a\u3088\u3073Extra Size After\u306f\u3001Selected Style Template\u304c\u8868\u793a\u3055\u308c\u308b\u30b5\u30a4\u30ba\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002",(0,l.kt)("br",null),(0,l.kt)("br",null),"Margin Before\u304a\u3088\u3073Margin After\u306f\u3001Selected Style Template\u304c\u8868\u793a\u3055\u308c\u308b\u524d\u5f8c\u306e\u4f59\u767d\u30b5\u30a4\u30ba\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",f({parentName:"tr"},{align:null}),(0,l.kt)("strong",{parentName:"td"},"Animation")),(0,l.kt)("td",f({parentName:"tr"},{align:null}),"Easing\u304a\u3088\u3073Easing Option\u306f\u3001\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u306b\u4f7f\u7528\u3059\u308b\u30a4\u30fc\u30b8\u30f3\u30b0\u5f0f\uff08\u52d5\u304d\u306b\u7de9\u6025\u3092\u3064\u3051\u308b\uff09\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002",(0,l.kt)("br",null),(0,l.kt)("br",null),"Swipe Acc. \u304a\u3088\u3073Drag Acc. \u306f\u3001\u30b9\u30af\u30ed\u30fc\u30eb\u6642\u306e\u52a0\u901f\u5ea6\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",f({parentName:"tr"},{align:null}),(0,l.kt)("strong",{parentName:"td"},"Mixins")),(0,l.kt)("td",f({parentName:"tr"},{align:null}),"Draggable\u306f\u3001\u5b9f\u884c\u6642\u306b\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3092\u30c9\u30e9\u30c3\u30b0\u53ef\u80fd\u306b\u3059\u308b\u304b\u3069\u3046\u304b\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002",(0,l.kt)("br",null),(0,l.kt)("br",null),"ClickListener\u306f\u3001\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u304c\u30af\u30ea\u30c3\u30af\u3055\u308c\u305f\u3068\u304d\u306b\u30b3\u30fc\u30eb\u30d0\u30c3\u30af\u3092\u767a\u884c\u3059\u308b\u304b\u3069\u3046\u304b\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002",(0,l.kt)("br",null),(0,l.kt)("br",null),"MoveAnimator\u306f\u3001\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u304cX\u304a\u3088\u3073Y\u5024\u3078\u306e\u5909\u66f4\u3092\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u5316\u3067\u304d\u308b\u304b\u3069\u3046\u304b\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002")))),(0,l.kt)("h3",f({},{id:"item-templates"}),"\u30a2\u30a4\u30c6\u30e0\uff65\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8"),(0,l.kt)("p",null,"Scroll List\u5185\u306e\u30a2\u30a4\u30c6\u30e0\u306f\u3001\u30b0\u30e9\u30d5\u30a3\u30c3\u30af\u8981\u7d20\u306e\u30d9\u30fc\u30b9\u3068\u3057\u3066\u6a5f\u80fd\u3059\u308b",(0,l.kt)("a",f({parentName:"p"},{href:"../../touchgfx-engine-features/custom-containers"}),"CustomContainer"),"\u3067\u3042\u308b\u30a2\u30a4\u30c6\u30e0\uff65\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306b\u57fa\u3065\u3044\u3066\u3044\u307e\u3059\u3002 \u9078\u629e\u3057\u305f\u30a2\u30a4\u30c6\u30e0\u3092\u30cf\u30a4\u30e9\u30a4\u30c8\u3059\u308b\u305f\u3081\u306b\u3001Scroll Wheel\u306b\u306f\u9078\u629e\u3057\u305f\u30a2\u30a4\u30c6\u30e0\u306b\u306e\u307f\u4f7f\u7528\u3055\u308c\u308bSelected Style Template\u3068\u3044\u3046\u30a2\u30a4\u30c6\u30e0\xb7\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3092\u9078\u629e\u3067\u304d\u308b\u30aa\u30d7\u30b7\u30e7\u30f3\u304c\u3042\u308a\u307e\u3059\u3002 Scroll Wheel\u3092\u4f5c\u6210\u3059\u308b\u524d\u306b\u3001\u30a2\u30a4\u30c6\u30e0\xb7\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306eCustomContainer\u3068\u3001\u6709\u52b9\u306b\u306a\u3063\u3066\u3044\u308b\u5834\u5408\u306fSelected Style Template\u3092\u4f5c\u6210\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,l.kt)("p",null,"Scroll Wheel\u306e\u4f5c\u6210\u5f8c\u3001CustomContainer\u3092ItemTemplate\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u3067\u9078\u629e\u3067\u304d\u307e\u3059\u3002 Item Template\u306e\u30ab\u30b9\u30bf\u30e0\uff65\u30b3\u30f3\u30c6\u30ca\u3092\u9078\u629e\u3059\u308b\u3068\u3001Scroll Wheel\u306f\u9078\u629e\u3055\u308c\u305f\u30ab\u30b9\u30bf\u30e0\uff65\u30b3\u30f3\u30c6\u30ca\u306e\u30b9\u30af\u30ed\u30fc\u30eb\u53ef\u80fd\u306a\u65b9\u5411\u3067\u306f\u306a\u3044\u65b9\uff08\u7e26\u5411\u304d\u306a\u3089\u9ad8\u3055\u3001\u6a2a\u5411\u304d\u306a\u3089\u5e45\uff09\u306e\u30b5\u30a4\u30ba\xb7\u30d7\u30ed\u30d1\u30c6\u30a3\u306b\u5408\u3046\u3088\u3046\u306b\u3001\u30b5\u30a4\u30ba\u304c\u5909\u66f4\u3055\u308c\u307e\u3059\u3002 \u3082\u3046\u4e00\u65b9\u306e\u30b5\u30a4\u30ba\uff65\u30d7\u30ed\u30d1\u30c6\u30a3\uff08\u7e26\u5411\u304d\u306a\u3089\u9ad8\u3055\u3001\u6a2a\u5411\u304d\u306a\u3089\u5e45\uff09\u3092\u5909\u66f4\u3059\u308b\u3068\u3001\u8868\u793a\u3055\u308c\u308b\u30a2\u30a4\u30c6\u30e0\u306e\u6570\u304c\u6c7a\u307e\u308a\u307e\u3059\u3002"),(0,l.kt)("h2",f({},{id:"interactions"}),"\u30a4\u30f3\u30bf\u30e9\u30af\u30b7\u30e7\u30f3"),(0,l.kt)("p",null,"\u4ee5\u4e0b\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u3067\u306f\u3001Scroll Wheel\u306b\u3088\u3063\u3066\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u308b\u30a2\u30af\u30b7\u30e7\u30f3\u3068\u30c8\u30ea\u30ac\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u307e\u3059\u3002"),(0,l.kt)("h3",f({},{id:"actions"}),"\u30a2\u30af\u30b7\u30e7\u30f3"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",f({parentName:"tr"},{align:null}),(0,l.kt)("strong",{parentName:"th"},"\u6a19\u6e96\u306e\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\uff65\u30a2\u30af\u30b7\u30e7\u30f3")),(0,l.kt)("th",f({parentName:"tr"},{align:null}),(0,l.kt)("strong",{parentName:"th"},"\u8aac\u660e")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",f({parentName:"tr"},{align:null}),(0,l.kt)("strong",{parentName:"td"},"Hide widget")),(0,l.kt)("td",f({parentName:"tr"},{align:null}),"\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3092\u975e\u8868\u793a\u306b\u3057\u307e\u3059\uff08\u53ef\u8996\u6027\u3092false\u306b\u8a2d\u5b9a\u3057\u307e\u3059\uff09\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",f({parentName:"tr"},{align:null}),(0,l.kt)("strong",{parentName:"td"},"Show widget")),(0,l.kt)("td",f({parentName:"tr"},{align:null}),"\u975e\u8868\u793a\u306e\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3092\u8868\u793a\u3057\u307e\u3059\uff08\u53ef\u8996\u6027\u3092true\u306b\u8a2d\u5b9a\u3057\u307e\u3059\uff09\u3002")))),(0,l.kt)("h3",f({},{id:"triggers"}),"\u30c8\u30ea\u30ac"),(0,l.kt)("p",null,"Scroll Wheel\u306f\u30c8\u30ea\u30ac\u3092\u767a\u884c\u3057\u307e\u305b\u3093\u3002"),(0,l.kt)("h2",f({},{id:"performance"}),"\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9"),(0,l.kt)("p",null,"Scroll Wheel\u306f",(0,l.kt)("a",f({parentName:"p"},{href:"container"}),"Container"),"\u30bf\u30a4\u30d7\u3067\u3001\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u306f\u63cf\u753b\u30c1\u30a7\u30fc\u30f3\u306b\u8868\u793a\u3055\u308c\u307e\u305b\u3093\u3002 \u3053\u306e\u305f\u3081\u3001\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u306f\u4e3b\u306b\u5b50\u306e\u63cf\u753b\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u306b\u4f9d\u5b58\u3057\u307e\u3059\u3002"),(0,l.kt)("p",null,"\u63cf\u753b\u306e\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u306e\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001\u300c",(0,l.kt)("a",f({parentName:"p"},{href:"../general-ui-component-performance"}),"\u4e00\u822c\u7684\u306aUI\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9"),"\u300d\u30bb\u30af\u30b7\u30e7\u30f3\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,l.kt)("h2",f({},{id:"examples"}),"\u4f8b"),(0,l.kt)("h3",f({},{id:"generated-code"}),"\u751f\u6210\u6e08\u307f\u30b3\u30fc\u30c9"),(0,l.kt)("p",null,"\u30d3\u30e5\u30fc\u306e\u57fa\u5e95\u30af\u30e9\u30b9\u306e\u751f\u6210\u6e08\u307f\u30b3\u30fc\u30c9\u3092\u898b\u308b\u3068\u3001TouchGFX Designer\u306b\u3088\u308bScroll Wheel\u306e\u8a2d\u5b9a\u65b9\u6cd5\u304c\u308f\u304b\u308a\u307e\u3059\u3002"),(0,l.kt)(p.Z,{mdxType:"CodeHeader"},"Screen1ViewBase.cpp"),(0,l.kt)("pre",null,(0,l.kt)("code",f({parentName:"pre"},{className:"language-cpp"}),'#include <gui_generated/screen1_screen/Screen1ViewBase.hpp>\n#include "BitmapDatabase.hpp"\n\nScreen1ViewBase::Screen1ViewBase() :\n    updateItemCallback(this, &Screen1ViewBase::updateItemCallbackHandler)\n{\n    scrollWheel.setPosition(140, 10, 200, 252);\n    scrollWheel.setHorizontal(false);\n    scrollWheel.setCircular(false);\n    scrollWheel.setEasingEquation(touchgfx::EasingEquations::backEaseIn);\n    scrollWheel.setSwipeAcceleration(10);\n    scrollWheel.setDragAcceleration(10);\n    scrollWheel.setNumberOfItems(60);\n    scrollWheel.setSelectedItemOffset(100);\n    scrollWheel.setSelectedItemExtraSize(0, 0);\n    scrollWheel.setSelectedItemMargin(0, 0);\n    scrollWheel.setDrawableSize(50, 3);\n    scrollWheel.setDrawables(scrollWheelListItems, updateItemCallback,\n                              scrollWheelSelectedListItems, updateItemCallback);\n    scrollWheel.animateToItem(0, 0);\n\n    add(scrollWheel);\n}\n\nvoid Screen1ViewBase::setupScreen()\n{\n    scrollWheel.initialize();\n    for (int i = 0; i < scrollWheelListItems.getNumberOfDrawables(); i++)\n    {\n        scrollWheelListItems[i].initialize();\n    }\n    for (int i = 0; i < scrollWheelSelectedListItems.getNumberOfDrawables(); i++)\n    {\n        scrollWheelSelectedListItems[i].initialize();\n    }\n}\n\nvoid Screen1ViewBase::updateItemCallbackHandler(touchgfx::DrawableListItemsInterface* items, int16_t containerIndex, int16_t itemIndex)\n{\n    if (items == &scrollWheelListItems)\n    {\n        touchgfx::Drawable* d = items->getDrawable(containerIndex);\n        TextContainer* cc = (TextContainer*)d;\n        scrollWheelUpdateItem(*cc, itemIndex);\n    }\n    else if (items == &scrollWheelSelectedListItems)\n    {\n        touchgfx::Drawable* d = items->getDrawable(containerIndex);\n        TextCenterContainer* cc = (TextCenterContainer*)d;\n        scrollWheelUpdateCenterItem(*cc, itemIndex);\n    }\n}\n')),(0,l.kt)(i.Z,{mdxType:"Tip"},"\u30e6\u30fc\u30b6\uff65\u30b3\u30fc\u30c9\u3067\u306f\u3001\u3053\u308c\u3089\u306e\u95a2\u6570\u3084\u3001ScrollWheel\u30af\u30e9\u30b9\u3067\u4f7f\u7528\u53ef\u80fd\u306a\u305d\u306e\u4ed6\u306e\u95a2\u6570\u3092\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002 \u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u5916\u89b3\u3092\u5909\u66f4\u3059\u308b\u5834\u5408\u306b\u306f\u3001 ",(0,l.kt)(o.Z,{mdxType:"InlineCode"},"scrollWheel.invalidate()")," \u3092\u547c\u3073\u51fa\u3057\u3066\u3001\u518d\u63cf\u753b\u3092\u884c\u3046\u5fc5\u8981\u304c\u3042\u308b\u3053\u3068\u3092\u5fd8\u308c\u306a\u3044\u3067\u304f\u3060\u3055\u3044\u3002"),(0,l.kt)("h3",f({},{id:"user-code"}),"\u30e6\u30fc\u30b6\uff65\u30b3\u30fc\u30c9"),(0,l.kt)("p",null,"Scroll Wheel\u306e\u30b0\u30e9\u30d5\u30a3\u30c3\u30af\u8981\u7d20\u3068\u305d\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u8a2d\u5b9a\u3057\u305f\u5f8c\u3001\u30e6\u30fc\u30b6\uff65\u30b3\u30fc\u30c9\u3092\u8a18\u8ff0\u3057\u3066Scroll Wheel\u5185\u306e\u30a2\u30a4\u30c6\u30e0\u3092\u66f4\u65b0\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002 TouchGFX Designer\u306b\u3088\u3063\u3066\u751f\u6210\u3055\u308c\u308b\u3001Screen1ViewBase\u30af\u30e9\u30b9\u306e\u30d8\u30c3\u30c0\uff65\u30d5\u30a1\u30a4\u30eb\u306f\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002"),(0,l.kt)(p.Z,{mdxType:"CodeHeader"},"Screen1ViewBase.hpp"),(0,l.kt)("pre",null,(0,l.kt)("code",f({parentName:"pre"},{className:"language-cpp",metastring:"{8-11,13-16}","{8-11,13-16}":!0}),"class Screen1ViewBase : public touchgfx::View\n{\npublic:\n    Screen1ViewBase();\n    virtual ~Screen1ViewBase() {}\n    virtual void setupScreen();\n\n    virtual void scrollWheel1UpdateItem(CustomContainer1& item, int16_t itemIndex)\n    {\n        // Override and implement this function in Screen1\n    }\n\n    virtual void scrollWheel1UpdateCenterItem(CustomContainer2& item, int16_t itemIndex)\n    {\n        // Override and implement this function in Screen1\n    }\n\nprotected:\n    FrontendApplication& application() {\n        return *static_cast<FrontendApplication*>(Application::getInstance());\n    }\n\n    touchgfx::BoxWithBorder boxWithBorder1;\n    touchgfx::ScrollWheelWithSelectionStyle scrollWheel1;\n    touchgfx::DrawableListItems<CustomContainer1, 6> scrollWheel1ListItems;\n    touchgfx::DrawableListItems<CustomContainer2, 2> scrollWheel1SelectedListItems;\n\nprivate:\n    void updateItemCallbackHandler(DrawableListItemsInterface* items, int16_t containerIndex, int16_t itemIndex);\n    touchgfx::Callback<Screen1ViewBase, DrawableListItemsInterface*, int16_t, int16_t> updateItemCallback;\n\n};\n")),(0,l.kt)("p",null,"TouchGFX Designer\u304cScroll Wheel\u306e\u30b3\u30fc\u30c9\u3092\u751f\u6210\u3059\u308b\u3068\u3001\u4e0a\u8a18\u3067\u30cf\u30a4\u30e9\u30a4\u30c8\u8868\u793a\u3055\u308c\u3066\u3044\u308b\u95a2\u6570",(0,l.kt)("inlineCode",{parentName:"p"},"scrollWheel1UpdateItem"),"\u304a\u3088\u3073",(0,l.kt)("inlineCode",{parentName:"p"},"scrollWheel1UpdateCenterItem"),"\u304c\u4f5c\u6210\u3055\u308c\u3001\u30e6\u30fc\u30b6\u304cScroll Wheel\u5185\u306e\u30a2\u30a4\u30c6\u30e0\u3092\u30aa\u30fc\u30d0\u30fc\u30e9\u30a4\u30c9\u304a\u3088\u3073\u66f4\u65b0\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"UpdateItem"),"\u95a2\u6570\u306f\u5e38\u306bScroll Wheel\u7528\u306b\u751f\u6210\u3055\u308c\u3001\u542b\u307e\u308c\u3066\u3044\u308b\u30a2\u30a4\u30c6\u30e0\u3092\u66f4\u65b0\u3059\u308b\u305f\u3081\u306b\u5b9f\u88c5\u3067\u304d\u307e\u3059\u3002",(0,l.kt)("inlineCode",{parentName:"p"},"UpdateCenterItem"),"\u95a2\u6570\u306f\u3001Selected Style Template\u306b\u57fa\u3065\u3044\u3066\u30a2\u30a4\u30c6\u30e0\u3092\u66f4\u65b0\u3059\u308b\u305f\u3081\u3001Selected Style Template\u304c\u9078\u629e\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u306b\u306e\u307f\u751f\u6210\u3055\u308c\u307e\u3059\u3002 \u7570\u306a\u308b\u30a2\u30a4\u30c6\u30e0\u3092\u66f4\u65b0\u3059\u308b\u3053\u3068\u3092\u9664\u3051\u3070\u3001\u3053\u306e2\u3064\u306e\u95a2\u6570\u306b\u306f\u3001Scroll Wheel\u5185\u306e\u30a2\u30a4\u30c6\u30e0\u306e\u66f4\u65b0\u306b\u4f7f\u7528\u3055\u308c\u308b\u540c\u3058\u30d1\u30e9\u30e1\u30fc\u30bf\u304c\u542b\u307e\u308c\u3066\u3044\u307e\u3059\u3002"),(0,l.kt)("p",null,"\u30d1\u30e9\u30e1\u30fc\u30bf",(0,l.kt)("inlineCode",{parentName:"p"},"itemIndex"),"\u306b\u306f\u30a2\u30a4\u30c6\u30e0\u306e\u30a4\u30f3\u30c7\u30c3\u30af\u30b9\u5024\u304c\u542b\u307e\u308c\u3066\u304a\u308a\u3001\u3053\u308c\u306f\u66f4\u65b0\u5bfe\u8c61\u306e\u30a2\u30a4\u30c6\u30e0\u3092\u8b58\u5225\u3059\u308b\u305f\u3081\u306b\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002 \u30d1\u30e9\u30e1\u30fc\u30bf",(0,l.kt)("inlineCode",{parentName:"p"},"item"),"\u306f\u3001Scroll Wheel\u5185\u306b\u8868\u793a\u3055\u308c\u308b\u30a2\u30a4\u30c6\u30e0\u3078\u306e\u53c2\u7167\u3067\u3059\u3002 \u30d1\u30e9\u30e1\u30fc\u30bf",(0,l.kt)("inlineCode",{parentName:"p"},"item"),"\u306e\u5916\u89b3\u3092\u66f4\u65b0\u3059\u308b\u3068\u3001Scroll Wheel\u5185\u306b\u8868\u793a\u3055\u308c\u308b\u30a2\u30a4\u30c6\u30e0\u306e\u63cf\u753b\u304c\u66f4\u65b0\u3055\u308c\u307e\u3059\u3002"),(0,l.kt)("p",null,"\u30e6\u30fc\u30b6\uff65\u30b3\u30fc\u30c9\uff65\u30d5\u30a1\u30a4\u30eb",(0,l.kt)("inlineCode",{parentName:"p"},"Screen1View.hpp"),"\u304a\u3088\u3073",(0,l.kt)("inlineCode",{parentName:"p"},"Screen1View.cpp"),"\u306b\u304a\u3051\u308b\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"scrollWheel1UpdateItem"),"\u304a\u3088\u3073",(0,l.kt)("inlineCode",{parentName:"p"},"scrollWheel1UpdateCenterItem"),"\u306e\u5b9f\u88c5\u4f8b\u3092\u4ee5\u4e0b\u306b\u793a\u3057\u307e\u3059\u3002"),(0,l.kt)(p.Z,{mdxType:"CodeHeader"},"Screen1View.hpp"),(0,l.kt)("pre",null,(0,l.kt)("code",f({parentName:"pre"},{className:"language-cpp"}),"#ifndef SCREEN1_VIEW_HPP\n#define SCREEN1_VIEW_HPP\n\n#include <gui_generated/screen1_screen/Screen1ViewBase.hpp>\n#include <gui/screen1_screen/Screen1Presenter.hpp>\n\nclass Screen1View : public Screen1ViewBase\n{\npublic:\n    Screen1View();\n    virtual~Screen1View() {}\n    virtual void setupScreen();\n    virtual void tearDownScreen();\n\n    virtual void scrollWheel1UpdateItem(CustomContainer1& item, int16_t itemIndex);\n    virtual void scrollWheel1UpdateCenterItem(CustomContainer2& item, int16_t itemIndex);\nprotected:\n};\n\n#endif // SCREEN1_VIEW_HPP\n")),(0,l.kt)(p.Z,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,l.kt)("pre",null,(0,l.kt)("code",f({parentName:"pre"},{className:"language-cpp"}),"#include <gui/screen1_screen/Screen1View.hpp>\n\nScreen1View::Screen1View()\n{\n\n}\n\nvoid Screen1View::setupScreen()\n{\n    Screen1ViewBase::setupScreen();\n}\n\nvoid Screen1View::tearDownScreen()\n{\n    Screen1ViewBase::tearDownScreen();\n}\n\nvoid Screen1View::scrollWheel1UpdateItem(CustomContainer1& item, int16_t itemIndex)\n{\n    item.setIndex(itemIndex);\n}\n\nvoid Screen1View::scrollWheel1UpdateCenterItem(CustomContainer2& item, int16_t itemIndex)\n{\n    item.setIndex(itemIndex);\n}\n")),(0,l.kt)("p",null,"\u30d8\u30c3\u30c0\uff65\u30d5\u30a1\u30a4\u30eb",(0,l.kt)("inlineCode",{parentName:"p"},"Screen1View.hpp"),"\u3067\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"scrollWheel1UpdateItem"),"\u95a2\u6570\u3068",(0,l.kt)("inlineCode",{parentName:"p"},"scrollWheel1UpdateCenterItem"),"\u95a2\u6570\u304c\u30aa\u30fc\u30d0\u30fc\u30e9\u30a4\u30c9\u3055\u308c\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"Screen1View.cpp"),"\u306b\u5b9f\u88c5\u3055\u308c\u3066\u3044\u307e\u3059\u3002"),(0,l.kt)("p",null,"\u3053\u306e\u4f8b\u306e\u76ee\u7684\u306f\u3001",(0,l.kt)("a",f({parentName:"p"},{href:"scroll-wheel"}),"\u3053\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u306e\u5192\u982d"),"\u3067\u793a\u3057\u305f\u4f8b\u306e\u3088\u3046\u306b\u3001\u30a2\u30a4\u30c6\u30e0\uff65\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u5185\u306e\u30c6\u30ad\u30b9\u30c8\u3092\u3001\u8868\u793a\u3055\u308c\u308b\u30a2\u30a4\u30c6\u30e0\u306e\u30a4\u30f3\u30c7\u30c3\u30af\u30b9\u5024\u3067\u66f4\u65b0\u3059\u308b\u3053\u3068\u3067\u3059\u3002 \u30a2\u30a4\u30c6\u30e0\uff65\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3082Selected Style Template\u3082CustomContainer\u306b\u57fa\u3065\u3044\u3066\u3044\u308b\u306e\u3067\u3001\u4e21\u65b9\u306eCustomContainer\u7528\u306b",(0,l.kt)("inlineCode",{parentName:"p"},"setIndex"),"\u95a2\u6570\u304c\u4f5c\u6210\u3055\u308c\u307e\u3059\u3002 ",(0,l.kt)("inlineCode",{parentName:"p"},"setIndex"),"\u95a2\u6570\u306f",(0,l.kt)("inlineCode",{parentName:"p"},"itemIndex"),"\u30d1\u30e9\u30e1\u30fc\u30bf\u3092\u53d6\u5f97\u3057\u3001\u30a2\u30a4\u30c6\u30e0\uff65\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u304a\u3088\u3073Selected Style Template\u5185\u306e\u30c6\u30ad\u30b9\u30c8\u3092\u66f4\u65b0\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002 \u30a2\u30a4\u30c6\u30e0\u306b\u5bfe\u3057\u3066",(0,l.kt)("inlineCode",{parentName:"p"},"setIndex"),"\u3092\u547c\u3073\u51fa\u3059\u3068\u3001\u8868\u793a\u30a2\u30a4\u30c6\u30e0\u306e\u5916\u89b3\u304c\u66f4\u65b0\u3055\u308c\u3001\u305d\u308c\u3089\u306e\u30a4\u30f3\u30c7\u30c3\u30af\u30b9\u5024\u304c\u8868\u793a\u3055\u308c\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002"),(0,l.kt)("h3",f({},{id:"touchgfx-designer-examples"}),"TouchGFX Designer\u306e\u4f8b"),(0,l.kt)("p",null,"Scroll Wheel\u3092\u3055\u3089\u306b\u63a2\u7d22\u3059\u308b\u306b\u306f\u3001\u6b21\u306eUI\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306e\u3044\u305a\u308c\u304b\u3092\u4f7f\u7528\u3057\u3066\u3001TouchGFX Designer\u5185\u3067\u65b0\u3057\u3044\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u4f5c\u6210\u3057\u3066\u307f\u3066\u304f\u3060\u3055\u3044\u3002"),(0,l.kt)(r.Z,{imageSource:"/img/development/ui-development/ui-templates/scroll-wheel-and-list-example-v4.17.png",mdxType:"Figure"},"TouchGFX Designer\u306eScroll Wheel and List Example UI\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8"),(0,l.kt)("h2",f({},{id:"api-reference"}),"API\u53c2\u7167"),(0,l.kt)(a.Z,{mdxType:"FurtherReading"},(0,l.kt)("li",null,(0,l.kt)(c.Z,{to:"../../../../api/classes/classtouchgfx_1_1_scroll_wheel",mdxType:"Link"},"ScrollWheel\u30af\u30e9\u30b9\u306eAPI\u53c2\u7167"))))}I.isMDXComponent=!0}}]);