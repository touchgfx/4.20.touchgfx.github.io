"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[4749],{3905:function(t,e,r){r.d(e,{Zo:function(){return p},kt:function(){return h}});var a=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},o=Object.keys(t);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var s=a.createContext({}),l=function(t){var e=a.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},p=function(t){var e=l(t.components);return a.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,o=t.originalType,s=t.parentName,p=c(t,["components","mdxType","originalType","parentName"]),d=l(r),h=n,f=d["".concat(s,".").concat(h)]||d[h]||u[h]||o;return r?a.createElement(f,i(i({ref:e},p),{},{components:r})):a.createElement(f,i({ref:e},p))}));function h(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var s in e)hasOwnProperty.call(e,s)&&(c[s]=e[s]);c.originalType=t,c.mdxType="string"==typeof t?t:n,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},43861:function(t,e,r){var a=r(67294);class n extends a.Component{render(){const t=/.*#(.*)/.exec(this.props.url)[1];return a.createElement("a",{"aria-hidden":"true",tabindex:"-1",class:"anchor enhancedAnchor_node_modules-@docusaurus-theme-classic-src-theme-Heading-",id:t})}}e.Z=n},67224:function(t,e,r){r.r(e),r.d(e,{assets:function(){return _},contentTitle:function(){return m},default:function(){return y},frontMatter:function(){return f},metadata:function(){return b},toc:function(){return k}});var a=r(3905),n=r(39130),o=r(43861),i=Object.defineProperty,c=Object.defineProperties,s=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,d=(t,e,r)=>e in t?i(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,h=(t,e)=>{for(var r in e||(e={}))p.call(e,r)&&d(t,r,e[r]);if(l)for(var r of l(e))u.call(e,r)&&d(t,r,e[r]);return t};const f={title:"ShapePoint"},m=void 0,b={unversionedId:"api/classes/structtouchgfx_1_1_abstract_shape_1_1_shape_point",id:"api/classes/structtouchgfx_1_1_abstract_shape_1_1_shape_point",title:"ShapePoint",description:"",source:"@site/docs/api/classes/structtouchgfx_1_1_abstract_shape_1_1_shape_point.mdx",sourceDirName:"api/classes",slug:"/api/classes/structtouchgfx_1_1_abstract_shape_1_1_shape_point",permalink:"/touchgfx-test.github.io/zh-TW/docs/api/classes/structtouchgfx_1_1_abstract_shape_1_1_shape_point",draft:!1,tags:[],version:"current",frontMatter:{title:"ShapePoint"},sidebar:"docs",previous:{title:"Shape",permalink:"/touchgfx-test.github.io/zh-TW/docs/api/classes/classtouchgfx_1_1_shape"},next:{title:"SlideMenu",permalink:"/touchgfx-test.github.io/zh-TW/docs/api/classes/classtouchgfx_1_1_slide_menu"}},_={},k=[{value:"Public Attributes",id:"public-attributes",level:2},{value:"Public Attributes Documentation",id:"public-attributes-documentation",level:2},{value:"x",id:"x",level:3},{value:"y",id:"y",level:3}],g={toc:k};function y(t){var e,r=t,{components:i}=r,d=((t,e)=>{var r={};for(var a in t)p.call(t,a)&&e.indexOf(a)<0&&(r[a]=t[a]);if(null!=t&&l)for(var a of l(t))e.indexOf(a)<0&&u.call(t,a)&&(r[a]=t[a]);return r})(r,["components"]);return(0,a.kt)("wrapper",(e=h(h({},g),d),c(e,s({components:i,mdxType:"MDXLayout"}))),(0,a.kt)("p",null," Defines an alias for a single point.\nUsers of the ",(0,a.kt)("a",h({parentName:"p"},{href:"classtouchgfx_1_1_abstract_shape"}),"AbstractShape")," can chose to store the coordinates as int or float depending on the needs. This will help setting up the abstractShape very easily using setAbstractShape()."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Template Parameters"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"T")," Generic type parameter, either int or float.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"See"),": ",(0,a.kt)("a",h({parentName:"p"},{href:"classtouchgfx_1_1_abstract_shape#function-setshape"}),"setShape")),(0,a.kt)("h2",h({},{id:"public-attributes"}),"Public Attributes"),(0,a.kt)("div",{class:"function-table",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",h({parentName:"tr"},{align:"right"})),(0,a.kt)("th",h({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",h({parentName:"tr"},{align:"right"}),"T"),(0,a.kt)("td",h({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(n.Z,{to:"structtouchgfx_1_1_abstract_shape_1_1_shape_point#variable-x",mdxType:"Link"},"x")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",h({parentName:"tr"},{align:"right"})),(0,a.kt)("td",h({parentName:"tr"},{align:null}),"The x coordinate of the points.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",h({parentName:"tr"},{align:"right"})),(0,a.kt)("td",h({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",h({parentName:"tr"},{align:"right"}),"T"),(0,a.kt)("td",h({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(n.Z,{to:"structtouchgfx_1_1_abstract_shape_1_1_shape_point#variable-y",mdxType:"Link"},"y")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",h({parentName:"tr"},{align:"right"})),(0,a.kt)("td",h({parentName:"tr"},{align:null}),"The y coordinate of the points.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",h({parentName:"tr"},{align:"right"})),(0,a.kt)("td",h({parentName:"tr"},{align:null})))))),(0,a.kt)("h2",h({},{id:"public-attributes-documentation"}),"Public Attributes Documentation"),(0,a.kt)(o.Z,{url:"structtouchgfx_1_1_abstract_shape_1_1_shape_point#variable-x",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",h({},{id:"x"}),"x"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,a.kt)("p",null,"T x ")),(0,a.kt)("div",{class:"api-container-content",markdown:"1"},(0,a.kt)("p",null,"The x coordinate of the points. "))),(0,a.kt)(o.Z,{url:"structtouchgfx_1_1_abstract_shape_1_1_shape_point#variable-y",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",h({},{id:"y"}),"y"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,a.kt)("p",null,"T y ")),(0,a.kt)("div",{class:"api-container-content",markdown:"1"},(0,a.kt)("p",null,"The y coordinate of the points. "))))}y.isMDXComponent=!0}}]);