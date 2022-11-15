"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[1495],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return s}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var c=a.createContext({}),p=function(t){var e=a.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},u=function(t){var e=p(t.components);return a.createElement(c.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,c=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),k=p(n),s=r,m=k["".concat(c,".").concat(s)]||k[s]||d[s]||l;return n?a.createElement(m,o(o({ref:e},u),{},{components:n})):a.createElement(m,o({ref:e},u))}));function s(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=k;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},43861:function(t,e,n){var a=n(67294);class r extends a.Component{render(){const t=/.*#(.*)/.exec(this.props.url)[1];return a.createElement("a",{"aria-hidden":"true",tabindex:"-1",class:"anchor enhancedAnchor_node_modules-@docusaurus-theme-classic-src-theme-Heading-",id:t})}}e.Z=r},8736:function(t,e,n){n.r(e),n.d(e,{assets:function(){return f},contentTitle:function(){return g},default:function(){return b},frontMatter:function(){return m},metadata:function(){return h},toc:function(){return N}});var a=n(3905),r=n(39130),l=n(43861),o=Object.defineProperty,i=Object.defineProperties,c=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,k=(t,e,n)=>e in t?o(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,s=(t,e)=>{for(var n in e||(e={}))u.call(e,n)&&k(t,n,e[n]);if(p)for(var n of p(e))d.call(e,n)&&k(t,n,e[n]);return t};const m={title:"colortype"},g=void 0,h={unversionedId:"api/classes/structtouchgfx_1_1colortype",id:"api/classes/structtouchgfx_1_1colortype",title:"colortype",description:"",source:"@site/docs/api/classes/structtouchgfx_1_1colortype.mdx",sourceDirName:"api/classes",slug:"/api/classes/structtouchgfx_1_1colortype",permalink:"/4.20/ja/docs/api/classes/structtouchgfx_1_1colortype",draft:!1,tags:[],version:"current",frontMatter:{title:"colortype"},sidebar:"docs",previous:{title:"Color",permalink:"/4.20/ja/docs/api/classes/classtouchgfx_1_1_color"},next:{title:"ConstFont",permalink:"/4.20/ja/docs/api/classes/classtouchgfx_1_1_const_font"}},f={},N=[{value:"Public Functions",id:"public-functions",level:2},{value:"Public Attributes",id:"public-attributes",level:2},{value:"Public Functions Documentation",id:"public-functions-documentation",level:2},{value:"colortype",id:"colortype",level:3},{value:"colortype",id:"colortype-1",level:3},{value:"getColor32",id:"getcolor32",level:3},{value:"operator uint32_t",id:"operator-uint32_t",level:3},{value:"Public Attributes Documentation",id:"public-attributes-documentation",level:2},{value:"color",id:"color",level:3}],y={toc:N};function b(t){var e,n=t,{components:o}=n,k=((t,e)=>{var n={};for(var a in t)u.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(null!=t&&p)for(var a of p(t))e.indexOf(a)<0&&d.call(t,a)&&(n[a]=t[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(e=s(s({},y),k),i(e,c({components:o,mdxType:"MDXLayout"}))),(0,a.kt)("p",null," This type can contain a color value.\nNote that in order to maintain backwards compatibility, casting this type to an integral value will yield a 16-bit value. To extract a 24/32-bit color from this type, use the getColor32 function. "),(0,a.kt)("h2",s({},{id:"public-functions"}),"Public Functions"),(0,a.kt)("div",{class:"function-table",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",s({parentName:"tr"},{align:"right"})),(0,a.kt)("th",s({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"})),(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"structtouchgfx_1_1colortype#function-colortype",mdxType:"Link"},"colortype")),"()")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"})),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Default constructor.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"})),(0,a.kt)("td",s({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"})),(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"structtouchgfx_1_1colortype#function-colortype",mdxType:"Link"},"colortype")),"(uint32_t col)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"})),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Constructor which creates a colortype with the given color.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"})),(0,a.kt)("td",s({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"}),"FORCE_INLINE_FUNCTION uint32_t"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"structtouchgfx_1_1colortype#function-getcolor32",mdxType:"Link"},"getColor32")),"() const")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"})),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Gets color as a 32bit value suitable for passing to ",(0,a.kt)("a",s({parentName:"td"},{href:"classtouchgfx_1_1_color#function-getred"}),"Color::getRed()"),", ",(0,a.kt)("a",s({parentName:"td"},{href:"classtouchgfx_1_1_color#function-getgreen"}),"Color::getGreen()")," and ",(0,a.kt)("a",s({parentName:"td"},{href:"classtouchgfx_1_1_color#function-getblue"}),"Color::getBlue()")," which will handle all bitdeptchs.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"})),(0,a.kt)("td",s({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"})),(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"structtouchgfx_1_1colortype#function-operator uint32_t",mdxType:"Link"},"operator uint32_t")),"() const")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"})),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Cast that converts the given colortype to an uint32_t.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"})),(0,a.kt)("td",s({parentName:"tr"},{align:null})))))),(0,a.kt)("h2",s({},{id:"public-attributes"}),"Public Attributes"),(0,a.kt)("div",{class:"function-table",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",s({parentName:"tr"},{align:"right"})),(0,a.kt)("th",s({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"}),"uint32_t"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"structtouchgfx_1_1colortype#variable-color",mdxType:"Link"},"color")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"})),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"The color.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"})),(0,a.kt)("td",s({parentName:"tr"},{align:null})))))),(0,a.kt)("h2",s({},{id:"public-functions-documentation"}),"Public Functions Documentation"),(0,a.kt)(l.Z,{url:"structtouchgfx_1_1colortype#function-colortype",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",s({},{id:"colortype"}),"colortype"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",s({parentName:"tr"},{align:null})),(0,a.kt)("th",s({parentName:"tr"},{align:null})),(0,a.kt)("th",s({parentName:"tr"},{align:null})),(0,a.kt)("th",s({parentName:"tr"},{align:null})),(0,a.kt)("th",s({parentName:"tr"},{align:null})),(0,a.kt)("th",s({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)(r.Z,{to:"structtouchgfx_1_1colortype#function-colortype",mdxType:"Link"},"colortype")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",s({parentName:"tr"},{align:null})),(0,a.kt)("td",s({parentName:"tr"},{align:null})),(0,a.kt)("td",s({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",s({parentName:"tr"},{align:null})))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"Default constructor. "),(0,a.kt)("p",null,"Creates a black (0) color. "))),(0,a.kt)(l.Z,{url:"structtouchgfx_1_1colortype#function-colortype",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",s({},{id:"colortype-1"}),"colortype"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",s({parentName:"tr"},{align:null})),(0,a.kt)("th",s({parentName:"tr"},{align:null})),(0,a.kt)("th",s({parentName:"tr"},{align:null})),(0,a.kt)("th",s({parentName:"tr"},{align:null})),(0,a.kt)("th",s({parentName:"tr"},{align:null})),(0,a.kt)("th",s({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)(r.Z,{to:"structtouchgfx_1_1colortype#function-colortype",mdxType:"Link"},"colortype")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"uint32_t"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"col"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",s({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null})),(0,a.kt)("td",s({parentName:"tr"},{align:null})),(0,a.kt)("td",s({parentName:"tr"},{align:null})),(0,a.kt)("td",s({parentName:"tr"},{align:null})),(0,a.kt)("td",s({parentName:"tr"},{align:null})),(0,a.kt)("td",s({parentName:"tr"},{align:null})))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"Constructor which creates a colortype with the given color. "),(0,a.kt)("p",null,"Use ",(0,a.kt)("a",s({parentName:"p"},{href:"classtouchgfx_1_1_color#function-getcolorfromrgb"}),"Color::getColorFromRGB()")," to create a color that will work on your selected ",(0,a.kt)("a",s({parentName:"p"},{href:"classtouchgfx_1_1_l_c_d"}),"LCD")," type."),(0,a.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,a.kt)("div",{class:"api-content-indented",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",s({parentName:"tr"},{align:null})),(0,a.kt)("th",s({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"col"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"The color."))))),(0,a.kt)("div",{class:"api-content-indented-header",markdown:"1"},"See also:"),(0,a.kt)("div",{class:"api-content-indented",markdown:"1"},(0,a.kt)("p",null,(0,a.kt)("a",s({parentName:"p"},{href:"classtouchgfx_1_1_color#function-getcolorfromrgb"}),"Color::getColorFromRGB"))))),(0,a.kt)(l.Z,{url:"structtouchgfx_1_1colortype#function-getcolor32",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",s({},{id:"getcolor32"}),"getColor32"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",s({parentName:"tr"},{align:null})),(0,a.kt)("th",s({parentName:"tr"},{align:null})),(0,a.kt)("th",s({parentName:"tr"},{align:null})),(0,a.kt)("th",s({parentName:"tr"},{align:null})),(0,a.kt)("th",s({parentName:"tr"},{align:null})),(0,a.kt)("th",s({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"FORCE_INLINE_FUNCTION uint32_t","\xa0",(0,a.kt)(r.Z,{to:"structtouchgfx_1_1colortype#function-getcolor32",mdxType:"Link"},"getColor32")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",s({parentName:"tr"},{align:null})),(0,a.kt)("td",s({parentName:"tr"},{align:null})),(0,a.kt)("td",s({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"const"))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"Gets color as a 32bit value suitable for passing to ",(0,a.kt)("a",s({parentName:"p"},{href:"classtouchgfx_1_1_color#function-getred"}),"Color::getRed()"),", ",(0,a.kt)("a",s({parentName:"p"},{href:"classtouchgfx_1_1_color#function-getgreen"}),"Color::getGreen()")," and ",(0,a.kt)("a",s({parentName:"p"},{href:"classtouchgfx_1_1_color#function-getblue"}),"Color::getBlue()")," which will handle all bitdeptchs. "),(0,a.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),(0,a.kt)("div",{class:"api-content-indented",markdown:"1"},(0,a.kt)("p",null,"The color 32.")),(0,a.kt)("div",{class:"api-content-indented-header",markdown:"1"},"See also:"),(0,a.kt)("div",{class:"api-content-indented",markdown:"1"},(0,a.kt)("p",null,(0,a.kt)("a",s({parentName:"p"},{href:"classtouchgfx_1_1_color#function-getred"}),"Color::getRed"),", ",(0,a.kt)("a",s({parentName:"p"},{href:"classtouchgfx_1_1_color#function-getgreen"}),"Color::getGreen"),", ",(0,a.kt)("a",s({parentName:"p"},{href:"classtouchgfx_1_1_color#function-getblue"}),"Color::getBlue"))))),(0,a.kt)(l.Z,{url:"structtouchgfx_1_1colortype#function-operator uint32_t",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",s({},{id:"operator-uint32_t"}),"operator uint32_t"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",s({parentName:"tr"},{align:null})),(0,a.kt)("th",s({parentName:"tr"},{align:null})),(0,a.kt)("th",s({parentName:"tr"},{align:null})),(0,a.kt)("th",s({parentName:"tr"},{align:null})),(0,a.kt)("th",s({parentName:"tr"},{align:null})),(0,a.kt)("th",s({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)(r.Z,{to:"structtouchgfx_1_1colortype#function-operator uint32_t",mdxType:"Link"},"operator uint32_t")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",s({parentName:"tr"},{align:null})),(0,a.kt)("td",s({parentName:"tr"},{align:null})),(0,a.kt)("td",s({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"const"))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"Cast that converts the given colortype to an uint32_t. "),(0,a.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),(0,a.kt)("div",{class:"api-content-indented",markdown:"1"},(0,a.kt)("p",null,"The result of the operation. ")))),(0,a.kt)("h2",s({},{id:"public-attributes-documentation"}),"Public Attributes Documentation"),(0,a.kt)(l.Z,{url:"structtouchgfx_1_1colortype#variable-color",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",s({},{id:"color"}),"color"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,a.kt)("p",null,"uint32_t color ")),(0,a.kt)("div",{class:"api-container-content",markdown:"1"},(0,a.kt)("p",null,"The color. "))))}b.isMDXComponent=!0}}]);