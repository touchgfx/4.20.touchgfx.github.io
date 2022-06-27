"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[4718],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return m}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),d=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=d(t.components);return a.createElement(o.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,u=p(t,["components","mdxType","originalType","parentName"]),c=d(n),m=r,s=c["".concat(o,".").concat(m)]||c[m]||k[m]||l;return n?a.createElement(s,i(i({ref:e},u),{},{components:n})):a.createElement(s,i({ref:e},u))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=c;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},43861:function(t,e,n){var a=n(67294);class r extends a.Component{render(){const t=/.*#(.*)/.exec(this.props.url)[1];return a.createElement("a",{"aria-hidden":"true",tabindex:"-1",class:"anchor enhancedAnchor_node_modules-@docusaurus-theme-classic-src-theme-Heading-",id:t})}}e.Z=r},10579:function(t,e,n){n.r(e),n.d(e,{assets:function(){return h},contentTitle:function(){return g},default:function(){return v},frontMatter:function(){return s},metadata:function(){return N},toc:function(){return f}});var a=n(3905),r=n(39130),l=n(43861),i=Object.defineProperty,p=Object.defineProperties,o=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,c=(t,e,n)=>e in t?i(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,m=(t,e)=>{for(var n in e||(e={}))u.call(e,n)&&c(t,n,e[n]);if(d)for(var n of d(e))k.call(e,n)&&c(t,n,e[n]);return t};const s={title:"Globals"},g=void 0,N={unversionedId:"api/namespacetouchgfx_1_1paint",id:"api/namespacetouchgfx_1_1paint",title:"Globals",description:"",source:"@site/docs/api/namespacetouchgfx_1_1paint.mdx",sourceDirName:"api",slug:"/api/namespacetouchgfx_1_1paint",permalink:"/4.20/docs/api/namespacetouchgfx_1_1paint",tags:[],version:"current",frontMatter:{title:"Globals"}},h={},f=[{value:"Functions",id:"functions",level:2},{value:"alphaBlend",id:"alphablend",level:3},{value:"alphaBlend",id:"alphablend-1",level:3},{value:"getNativeColor",id:"getnativecolor",level:3},{value:"Variables",id:"variables",level:2},{value:"BMASK",id:"bmask",level:3},{value:"GMASK",id:"gmask",level:3},{value:"RMASK",id:"rmask",level:3}],b={toc:f};function v(t){var e,n=t,{components:i}=n,c=((t,e)=>{var n={};for(var a in t)u.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(null!=t&&d)for(var a of d(t))e.indexOf(a)<0&&k.call(t,a)&&(n[a]=t[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(e=m(m({},b),c),p(e,o({components:i,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"The global touchgfx namespace.",(0,a.kt)("br",null),"\nAll TouchGFX framework enums, Type definitions, global functions and global variables are placed in this namespace."),(0,a.kt)("h2",m({},{id:"functions"}),"Functions"),(0,a.kt)(l.Z,{url:"namespacetouchgfx_1_1paint#function-alphablend",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",m({},{id:"alphablend"}),"alphaBlend"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null})),(0,a.kt)("th",m({parentName:"tr"},{align:null})),(0,a.kt)("th",m({parentName:"tr"},{align:null})),(0,a.kt)("th",m({parentName:"tr"},{align:null})),(0,a.kt)("th",m({parentName:"tr"},{align:null})),(0,a.kt)("th",m({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"FORCE_INLINE_FUNCTION uint16_t","\xa0",(0,a.kt)(r.Z,{to:"namespacetouchgfx_1_1paint#function-alphablend",mdxType:"Link"},"alphaBlend")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"uint16_t"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"newpix ,"),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"uint16_t"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"bufpix ,"),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"uint8_t"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"alpha"),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null})))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"Mix colors from a new pixel and a buffer pixel with the given alpha applied to the new pixel, and the inverse alpha applied to the buffer pixel. "),(0,a.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,a.kt)("div",{class:"api-content-indented",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null})),(0,a.kt)("th",m({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"newpix"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"The new pixel value.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"bufpix"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"The buffer pixel value.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"alpha"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"The alpha to apply to the new pixel."))))),(0,a.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),(0,a.kt)("div",{class:"api-content-indented",markdown:"1"},(0,a.kt)("p",null,"The result of blending the two colors into a new color. ")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Location:")," ",(0,a.kt)("inlineCode",{parentName:"p"},"touchgfx/hal/Paint.hpp")))),(0,a.kt)(l.Z,{url:"namespacetouchgfx_1_1paint#function-alphablend",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",m({},{id:"alphablend-1"}),"alphaBlend"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null})),(0,a.kt)("th",m({parentName:"tr"},{align:null})),(0,a.kt)("th",m({parentName:"tr"},{align:null})),(0,a.kt)("th",m({parentName:"tr"},{align:null})),(0,a.kt)("th",m({parentName:"tr"},{align:null})),(0,a.kt)("th",m({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"FORCE_INLINE_FUNCTION uint16_t","\xa0",(0,a.kt)(r.Z,{to:"namespacetouchgfx_1_1paint#function-alphablend",mdxType:"Link"},"alphaBlend")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"uint16_t"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"R ,"),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"uint16_t"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"G ,"),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"uint16_t"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"B ,"),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"uint16_t"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"bufpix ,"),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"uint8_t"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"alpha"),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null})))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"Mix colors from a new pixel and a buffer pixel with the given alpha applied to the new pixel, and the inverse alpha applied to the buffer pixel. "),(0,a.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,a.kt)("div",{class:"api-content-indented",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null})),(0,a.kt)("th",m({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"R"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"The red color (0-31 shifted into RMASK).")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"G"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"The green color (0-63 shifted into GMASK).")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"B"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"The blue color (0-31 shifted into BMASK).")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"bufpix"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"The buffer pixel value.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"alpha"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"The alpha of the R,G,B."))))),(0,a.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),(0,a.kt)("div",{class:"api-content-indented",markdown:"1"},(0,a.kt)("p",null,"The result of blending the two colors into a new color. ")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Location:")," ",(0,a.kt)("inlineCode",{parentName:"p"},"touchgfx/hal/Paint.hpp")))),(0,a.kt)(l.Z,{url:"namespacetouchgfx_1_1paint#function-getnativecolor",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",m({},{id:"getnativecolor"}),"getNativeColor"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null})),(0,a.kt)("th",m({parentName:"tr"},{align:null})),(0,a.kt)("th",m({parentName:"tr"},{align:null})),(0,a.kt)("th",m({parentName:"tr"},{align:null})),(0,a.kt)("th",m({parentName:"tr"},{align:null})),(0,a.kt)("th",m({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"FORCE_INLINE_FUNCTION uint16_t","\xa0",(0,a.kt)(r.Z,{to:"namespacetouchgfx_1_1paint#function-getnativecolor",mdxType:"Link"},"getNativeColor")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("a",m({parentName:"td"},{href:"classes/structtouchgfx_1_1colortype"}),"colortype")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"color"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null})))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"Generates a color representation to be used on the ",(0,a.kt)("a",m({parentName:"p"},{href:"classes/classtouchgfx_1_1_l_c_d"}),"LCD"),", based on 24 bit RGB values. "),(0,a.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,a.kt)("div",{class:"api-content-indented",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null})),(0,a.kt)("th",m({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"color"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"The color."))))),(0,a.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),(0,a.kt)("div",{class:"api-content-indented",markdown:"1"},(0,a.kt)("p",null,"The color representation depending on ",(0,a.kt)("a",m({parentName:"p"},{href:"classes/classtouchgfx_1_1_l_c_d"}),"LCD")," color format. ")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Location:")," ",(0,a.kt)("inlineCode",{parentName:"p"},"touchgfx/hal/Paint.hpp")))),(0,a.kt)("h2",m({},{id:"variables"}),"Variables"),(0,a.kt)(l.Z,{url:"namespacetouchgfx_1_1paint#variable-bmask",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",m({},{id:"bmask"}),"BMASK"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,a.kt)("p",null,"const uint16_t BMASK  = 0x001F")),(0,a.kt)("div",{class:"api-container-content",markdown:"1"},(0,a.kt)("p",null,"Mask for blue (0000000000011111) "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Location:")," ",(0,a.kt)("inlineCode",{parentName:"p"},"touchgfx/hal/Paint.hpp")))),(0,a.kt)(l.Z,{url:"namespacetouchgfx_1_1paint#variable-gmask",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",m({},{id:"gmask"}),"GMASK"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,a.kt)("p",null,"const uint16_t GMASK  = 0x07E0")),(0,a.kt)("div",{class:"api-container-content",markdown:"1"},(0,a.kt)("p",null,"Mask for green (0000011111100000) "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Location:")," ",(0,a.kt)("inlineCode",{parentName:"p"},"touchgfx/hal/Paint.hpp")))),(0,a.kt)(l.Z,{url:"namespacetouchgfx_1_1paint#variable-rmask",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",m({},{id:"rmask"}),"RMASK"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,a.kt)("p",null,"const uint16_t RMASK  = 0xF800")),(0,a.kt)("div",{class:"api-container-content",markdown:"1"},(0,a.kt)("p",null,"Mask for red (1111100000000000) "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Location:")," ",(0,a.kt)("inlineCode",{parentName:"p"},"touchgfx/hal/Paint.hpp")))))}v.isMDXComponent=!0}}]);