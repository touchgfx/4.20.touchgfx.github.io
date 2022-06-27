"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[603],{3905:function(t,e,a){a.d(e,{Zo:function(){return c},kt:function(){return s}});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function d(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},i=Object.keys(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var o=r.createContext({}),p=function(t){var e=r.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):d(d({},e),t)),a},c=function(t){var e=p(t.components);return r.createElement(o.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,i=t.originalType,o=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),u=p(a),s=n,m=u["".concat(o,".").concat(s)]||u[s]||k[s]||i;return a?r.createElement(m,d(d({ref:e},c),{},{components:a})):r.createElement(m,d({ref:e},c))}));function s(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=a.length,d=new Array(i);d[0]=u;var l={};for(var o in e)hasOwnProperty.call(e,o)&&(l[o]=e[o]);l.originalType=t,l.mdxType="string"==typeof t?t:n,d[1]=l;for(var p=2;p<i;p++)d[p]=a[p];return r.createElement.apply(null,d)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},43861:function(t,e,a){var r=a(67294);class n extends r.Component{render(){const t=/.*#(.*)/.exec(this.props.url)[1];return r.createElement("a",{"aria-hidden":"true",tabindex:"-1",class:"anchor enhancedAnchor_node_modules-@docusaurus-theme-classic-src-theme-Heading-",id:t})}}e.Z=n},99124:function(t,e,a){a.r(e),a.d(e,{assets:function(){return f},contentTitle:function(){return g},default:function(){return b},frontMatter:function(){return m},metadata:function(){return v},toc:function(){return h}});var r=a(3905),n=a(39130),i=a(43861),d=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,u=(t,e,a)=>e in t?d(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,s=(t,e)=>{for(var a in e||(e={}))c.call(e,a)&&u(t,a,e[a]);if(p)for(var a of p(e))k.call(e,a)&&u(t,a,e[a]);return t};const m={title:"Gradients"},g=void 0,v={unversionedId:"api/classes/structtouchgfx_1_1_gradients",id:"api/classes/structtouchgfx_1_1_gradients",title:"Gradients",description:"",source:"@site/docs/api/classes/structtouchgfx_1_1_gradients.mdx",sourceDirName:"api/classes",slug:"/api/classes/structtouchgfx_1_1_gradients",permalink:"/4.20/docs/api/classes/structtouchgfx_1_1_gradients",tags:[],version:"current",frontMatter:{title:"Gradients"},sidebar:"docs",previous:{title:"GPIO",permalink:"/4.20/docs/api/classes/classtouchgfx_1_1_g_p_i_o"},next:{title:"Graph",permalink:"/4.20/docs/api/classes/classtouchgfx_1_1_graph"}},f={},h=[{value:"Public Functions",id:"public-functions",level:2},{value:"Public Attributes",id:"public-attributes",level:2},{value:"Public Functions Documentation",id:"public-functions-documentation",level:2},{value:"Gradients",id:"gradients",level:3},{value:"Public Attributes Documentation",id:"public-attributes-documentation",level:2},{value:"dOneOverZdX",id:"doneoverzdx",level:3},{value:"dOneOverZdY",id:"doneoverzdy",level:3},{value:"dUdXModifier",id:"dudxmodifier",level:3},{value:"dUOverZdX",id:"duoverzdx",level:3},{value:"dUOverZdY",id:"duoverzdy",level:3},{value:"dVdXModifier",id:"dvdxmodifier",level:3},{value:"dVOverZdX",id:"dvoverzdx",level:3},{value:"dVOverZdY",id:"dvoverzdy",level:3},{value:"oneOverZ",id:"oneoverz",level:3},{value:"UOverZ",id:"uoverz",level:3},{value:"VOverZ",id:"voverz",level:3}],N={toc:h};function b(t){var e,a=t,{components:d}=a,u=((t,e)=>{var a={};for(var r in t)c.call(t,r)&&e.indexOf(r)<0&&(a[r]=t[r]);if(null!=t&&p)for(var r of p(t))e.indexOf(r)<0&&k.call(t,r)&&(a[r]=t[r]);return a})(a,["components"]);return(0,r.kt)("wrapper",(e=s(s({},N),u),l(e,o({components:d,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"Gradients contains all the data to interpolate u,v texture coordinates and z coordinates across a planar surface. "),(0,r.kt)("h2",s({},{id:"public-functions"}),"Public Functions"),(0,r.kt)("div",{class:"function-table",markdown:"1"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",s({parentName:"tr"},{align:"right"})),(0,r.kt)("th",s({parentName:"tr"},{align:null})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"})),(0,r.kt)("td",s({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(n.Z,{to:"structtouchgfx_1_1_gradients#function-gradients",mdxType:"Link"},"Gradients")),"(const ",(0,r.kt)("a",s({parentName:"td"},{href:"structtouchgfx_1_1_point3_d"}),"Point3D")," * vertices)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"})),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"Initializes a new instance of the TextureMapTypes class.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"})),(0,r.kt)("td",s({parentName:"tr"},{align:null})))))),(0,r.kt)("h2",s({},{id:"public-attributes"}),"Public Attributes"),(0,r.kt)("div",{class:"function-table",markdown:"1"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",s({parentName:"tr"},{align:"right"})),(0,r.kt)("th",s({parentName:"tr"},{align:null})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"}),"float"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(n.Z,{to:"structtouchgfx_1_1_gradients#variable-doneoverzdx",mdxType:"Link"},"dOneOverZdX")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"})),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"d(1/z)/dX")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"})),(0,r.kt)("td",s({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"}),"float"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(n.Z,{to:"structtouchgfx_1_1_gradients#variable-doneoverzdy",mdxType:"Link"},"dOneOverZdY")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"})),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"d(1/z)/dY")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"})),(0,r.kt)("td",s({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"}),(0,r.kt)("a",s({parentName:"td"},{href:"../namespacetouchgfx#typedef-fixed16_16"}),"fixed16_16")),(0,r.kt)("td",s({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(n.Z,{to:"structtouchgfx_1_1_gradients#variable-dudxmodifier",mdxType:"Link"},"dUdXModifier")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"})),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"The dUdX x coordinate modifier.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"})),(0,r.kt)("td",s({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"}),"float"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(n.Z,{to:"structtouchgfx_1_1_gradients#variable-duoverzdx",mdxType:"Link"},"dUOverZdX")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"})),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"d(u/z)/dX")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"})),(0,r.kt)("td",s({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"}),"float"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(n.Z,{to:"structtouchgfx_1_1_gradients#variable-duoverzdy",mdxType:"Link"},"dUOverZdY")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"})),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"d(u/z)/dY")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"})),(0,r.kt)("td",s({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"}),(0,r.kt)("a",s({parentName:"td"},{href:"../namespacetouchgfx#typedef-fixed16_16"}),"fixed16_16")),(0,r.kt)("td",s({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(n.Z,{to:"structtouchgfx_1_1_gradients#variable-dvdxmodifier",mdxType:"Link"},"dVdXModifier")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"})),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"The dVdX x coordinate modifier.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"})),(0,r.kt)("td",s({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"}),"float"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(n.Z,{to:"structtouchgfx_1_1_gradients#variable-dvoverzdx",mdxType:"Link"},"dVOverZdX")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"})),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"d(v/z)/dX")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"})),(0,r.kt)("td",s({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"}),"float"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(n.Z,{to:"structtouchgfx_1_1_gradients#variable-dvoverzdy",mdxType:"Link"},"dVOverZdY")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"})),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"d(v/z)/dY")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"})),(0,r.kt)("td",s({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"}),"float"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(n.Z,{to:"structtouchgfx_1_1_gradients#variable-oneoverz",mdxType:"Link"},"oneOverZ")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"})),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"1/z for each vertex")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"})),(0,r.kt)("td",s({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"}),"float"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(n.Z,{to:"structtouchgfx_1_1_gradients#variable-uoverz",mdxType:"Link"},"UOverZ")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"})),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"u/z for each vertex")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"})),(0,r.kt)("td",s({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"}),"float"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(n.Z,{to:"structtouchgfx_1_1_gradients#variable-voverz",mdxType:"Link"},"VOverZ")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"})),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"v/z for each vertex")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"})),(0,r.kt)("td",s({parentName:"tr"},{align:null})))))),(0,r.kt)("h2",s({},{id:"public-functions-documentation"}),"Public Functions Documentation"),(0,r.kt)(i.Z,{url:"structtouchgfx_1_1_gradients#function-gradients",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",s({},{id:"gradients"}),"Gradients"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",s({parentName:"tr"},{align:null})),(0,r.kt)("th",s({parentName:"tr"},{align:null})),(0,r.kt)("th",s({parentName:"tr"},{align:null})),(0,r.kt)("th",s({parentName:"tr"},{align:null})),(0,r.kt)("th",s({parentName:"tr"},{align:null})),(0,r.kt)("th",s({parentName:"tr"},{align:null})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),(0,r.kt)(n.Z,{to:"structtouchgfx_1_1_gradients#function-gradients",mdxType:"Link"},"Gradients")),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"("),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"const ",(0,r.kt)("a",s({parentName:"td"},{href:"structtouchgfx_1_1_point3_d"}),"Point3D")," *"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"vertices"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),")"),(0,r.kt)("td",s({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null})),(0,r.kt)("td",s({parentName:"tr"},{align:null})),(0,r.kt)("td",s({parentName:"tr"},{align:null})),(0,r.kt)("td",s({parentName:"tr"},{align:null})),(0,r.kt)("td",s({parentName:"tr"},{align:null})),(0,r.kt)("td",s({parentName:"tr"},{align:null})))))),(0,r.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,r.kt)("p",null,"Initializes a new instance of the TextureMapTypes class. "),(0,r.kt)("p",null,"Construct the gradients using three 3D vertices."),(0,r.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,r.kt)("div",{class:"api-content-indented",markdown:"1"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",s({parentName:"tr"},{align:null})),(0,r.kt)("th",s({parentName:"tr"},{align:null})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"vertices"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"The vertices."))))),(0,r.kt)("div",{class:"api-content-indented-header",markdown:"1"},"See also:"),(0,r.kt)("div",{class:"api-content-indented",markdown:"1"},(0,r.kt)("p",null,(0,r.kt)("a",s({parentName:"p"},{href:"structtouchgfx_1_1_point3_d"}),"Point3D"))))),(0,r.kt)("h2",s({},{id:"public-attributes-documentation"}),"Public Attributes Documentation"),(0,r.kt)(i.Z,{url:"structtouchgfx_1_1_gradients#variable-doneoverzdx",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",s({},{id:"doneoverzdx"}),"dOneOverZdX"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,r.kt)("p",null,"float dOneOverZdX ")),(0,r.kt)("div",{class:"api-container-content",markdown:"1"},(0,r.kt)("p",null,"d(1/z)/dX "))),(0,r.kt)(i.Z,{url:"structtouchgfx_1_1_gradients#variable-doneoverzdy",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",s({},{id:"doneoverzdy"}),"dOneOverZdY"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,r.kt)("p",null,"float dOneOverZdY ")),(0,r.kt)("div",{class:"api-container-content",markdown:"1"},(0,r.kt)("p",null,"d(1/z)/dY "))),(0,r.kt)(i.Z,{url:"structtouchgfx_1_1_gradients#variable-dudxmodifier",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",s({},{id:"dudxmodifier"}),"dUdXModifier"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,r.kt)("p",null,(0,r.kt)("a",s({parentName:"p"},{href:"../namespacetouchgfx#typedef-fixed16_16"}),"fixed16_16")," dUdXModifier ")),(0,r.kt)("div",{class:"api-container-content",markdown:"1"},(0,r.kt)("p",null,"The dUdX x coordinate modifier. "))),(0,r.kt)(i.Z,{url:"structtouchgfx_1_1_gradients#variable-duoverzdx",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",s({},{id:"duoverzdx"}),"dUOverZdX"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,r.kt)("p",null,"float dUOverZdX ")),(0,r.kt)("div",{class:"api-container-content",markdown:"1"},(0,r.kt)("p",null,"d(u/z)/dX "))),(0,r.kt)(i.Z,{url:"structtouchgfx_1_1_gradients#variable-duoverzdy",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",s({},{id:"duoverzdy"}),"dUOverZdY"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,r.kt)("p",null,"float dUOverZdY ")),(0,r.kt)("div",{class:"api-container-content",markdown:"1"},(0,r.kt)("p",null,"d(u/z)/dY "))),(0,r.kt)(i.Z,{url:"structtouchgfx_1_1_gradients#variable-dvdxmodifier",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",s({},{id:"dvdxmodifier"}),"dVdXModifier"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,r.kt)("p",null,(0,r.kt)("a",s({parentName:"p"},{href:"../namespacetouchgfx#typedef-fixed16_16"}),"fixed16_16")," dVdXModifier ")),(0,r.kt)("div",{class:"api-container-content",markdown:"1"},(0,r.kt)("p",null,"The dVdX x coordinate modifier. "))),(0,r.kt)(i.Z,{url:"structtouchgfx_1_1_gradients#variable-dvoverzdx",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",s({},{id:"dvoverzdx"}),"dVOverZdX"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,r.kt)("p",null,"float dVOverZdX ")),(0,r.kt)("div",{class:"api-container-content",markdown:"1"},(0,r.kt)("p",null,"d(v/z)/dX "))),(0,r.kt)(i.Z,{url:"structtouchgfx_1_1_gradients#variable-dvoverzdy",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",s({},{id:"dvoverzdy"}),"dVOverZdY"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,r.kt)("p",null,"float dVOverZdY ")),(0,r.kt)("div",{class:"api-container-content",markdown:"1"},(0,r.kt)("p",null,"d(v/z)/dY "))),(0,r.kt)(i.Z,{url:"structtouchgfx_1_1_gradients#variable-oneoverz",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",s({},{id:"oneoverz"}),"oneOverZ"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,r.kt)("p",null,"float oneOverZ ")),(0,r.kt)("div",{class:"api-container-content",markdown:"1"},(0,r.kt)("p",null,"1/z for each vertex "))),(0,r.kt)(i.Z,{url:"structtouchgfx_1_1_gradients#variable-uoverz",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",s({},{id:"uoverz"}),"UOverZ"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,r.kt)("p",null,"float UOverZ ")),(0,r.kt)("div",{class:"api-container-content",markdown:"1"},(0,r.kt)("p",null,"u/z for each vertex "))),(0,r.kt)(i.Z,{url:"structtouchgfx_1_1_gradients#variable-voverz",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",s({},{id:"voverz"}),"VOverZ"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,r.kt)("p",null,"float VOverZ ")),(0,r.kt)("div",{class:"api-container-content",markdown:"1"},(0,r.kt)("p",null,"v/z for each vertex "))))}b.isMDXComponent=!0}}]);