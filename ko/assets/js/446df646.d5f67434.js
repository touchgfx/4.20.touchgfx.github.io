"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[2059],{3905:function(t,e,r){r.d(e,{Zo:function(){return u},kt:function(){return y}});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var c=n.createContext({}),l=function(t){var e=n.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},u=function(t){var e=l(t.components);return n.createElement(c.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,i=t.originalType,c=t.parentName,u=p(t,["components","mdxType","originalType","parentName"]),d=l(r),y=a,k=d["".concat(c,".").concat(y)]||d[y]||s[y]||i;return r?n.createElement(k,o(o({ref:e},u),{},{components:r})):n.createElement(k,o({ref:e},u))}));function y(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=r.length,o=new Array(i);o[0]=d;var p={};for(var c in e)hasOwnProperty.call(e,c)&&(p[c]=e[c]);p.originalType=t,p.mdxType="string"==typeof t?t:a,o[1]=p;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},43861:function(t,e,r){var n=r(67294);class a extends n.Component{render(){const t=/.*#(.*)/.exec(this.props.url)[1];return n.createElement("a",{"aria-hidden":"true",tabindex:"-1",class:"anchor enhancedAnchor_node_modules-@docusaurus-theme-classic-src-theme-Heading-",id:t})}}e.Z=a},73413:function(t,e,r){r.r(e),r.d(e,{assets:function(){return b},contentTitle:function(){return m},default:function(){return h},frontMatter:function(){return k},metadata:function(){return _},toc:function(){return f}});var n=r(3905),a=r(39130),i=r(43861),o=Object.defineProperty,p=Object.defineProperties,c=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,d=(t,e,r)=>e in t?o(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,y=(t,e)=>{for(var r in e||(e={}))u.call(e,r)&&d(t,r,e[r]);if(l)for(var r of l(e))s.call(e,r)&&d(t,r,e[r]);return t};const k={title:"KeyMappingList"},m=void 0,_={unversionedId:"api/classes/structtouchgfx_1_1_keyboard_1_1_key_mapping_list",id:"api/classes/structtouchgfx_1_1_keyboard_1_1_key_mapping_list",title:"KeyMappingList",description:"",source:"@site/docs/api/classes/structtouchgfx_1_1_keyboard_1_1_key_mapping_list.mdx",sourceDirName:"api/classes",slug:"/api/classes/structtouchgfx_1_1_keyboard_1_1_key_mapping_list",permalink:"/4.20/ko/docs/api/classes/structtouchgfx_1_1_keyboard_1_1_key_mapping_list",tags:[],version:"current",frontMatter:{title:"KeyMappingList"},sidebar:"docs",previous:{title:"KeyMapping",permalink:"/4.20/ko/docs/api/classes/structtouchgfx_1_1_keyboard_1_1_key_mapping"},next:{title:"Layout",permalink:"/4.20/ko/docs/api/classes/structtouchgfx_1_1_keyboard_1_1_layout"}},b={},f=[{value:"Public Attributes",id:"public-attributes",level:2},{value:"Public Attributes Documentation",id:"public-attributes-documentation",level:2},{value:"keyMappingArray",id:"keymappingarray",level:3},{value:"numberOfKeys",id:"numberofkeys",level:3}],g={toc:f};function h(t){var e,r=t,{components:o}=r,d=((t,e)=>{var r={};for(var n in t)u.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&l)for(var n of l(t))e.indexOf(n)<0&&s.call(t,n)&&(r[n]=t[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(e=y(y({},g),d),p(e,c({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"List of KeyMappings to use. "),(0,n.kt)("h2",y({},{id:"public-attributes"}),"Public Attributes"),(0,n.kt)("div",{class:"function-table",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",y({parentName:"tr"},{align:"right"})),(0,n.kt)("th",y({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",y({parentName:"tr"},{align:"right"}),"const ",(0,n.kt)("a",y({parentName:"td"},{href:"structtouchgfx_1_1_keyboard_1_1_key_mapping"}),"KeyMapping")," *"),(0,n.kt)("td",y({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(a.Z,{to:"structtouchgfx_1_1_keyboard_1_1_key_mapping_list#variable-keymappingarray",mdxType:"Link"},"keyMappingArray")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",y({parentName:"tr"},{align:"right"})),(0,n.kt)("td",y({parentName:"tr"},{align:null}),"The array of key mappings used by the keyboard.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",y({parentName:"tr"},{align:"right"})),(0,n.kt)("td",y({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",y({parentName:"tr"},{align:"right"}),"uint8_t"),(0,n.kt)("td",y({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(a.Z,{to:"structtouchgfx_1_1_keyboard_1_1_key_mapping_list#variable-numberofkeys",mdxType:"Link"},"numberOfKeys")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",y({parentName:"tr"},{align:"right"})),(0,n.kt)("td",y({parentName:"tr"},{align:null}),"The number of keys in the list.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",y({parentName:"tr"},{align:"right"})),(0,n.kt)("td",y({parentName:"tr"},{align:null})))))),(0,n.kt)("h2",y({},{id:"public-attributes-documentation"}),"Public Attributes Documentation"),(0,n.kt)(i.Z,{url:"structtouchgfx_1_1_keyboard_1_1_key_mapping_list#variable-keymappingarray",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",y({},{id:"keymappingarray"}),"keyMappingArray"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,n.kt)("p",null,"const ",(0,n.kt)("a",y({parentName:"p"},{href:"structtouchgfx_1_1_keyboard_1_1_key_mapping"}),"KeyMapping")," * keyMappingArray ")),(0,n.kt)("div",{class:"api-container-content",markdown:"1"},(0,n.kt)("p",null,"The array of key mappings used by the keyboard. "))),(0,n.kt)(i.Z,{url:"structtouchgfx_1_1_keyboard_1_1_key_mapping_list#variable-numberofkeys",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",y({},{id:"numberofkeys"}),"numberOfKeys"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,n.kt)("p",null,"uint8_t numberOfKeys ")),(0,n.kt)("div",{class:"api-container-content",markdown:"1"},(0,n.kt)("p",null,"The number of keys in the list. "))))}h.isMDXComponent=!0}}]);