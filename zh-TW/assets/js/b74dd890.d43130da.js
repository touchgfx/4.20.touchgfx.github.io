"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[7948],{3905:function(t,e,a){a.d(e,{Zo:function(){return s},kt:function(){return d}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function c(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),u=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},s=function(t){var e=u(t.components);return n.createElement(o.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,s=c(t,["components","mdxType","originalType","parentName"]),k=u(a),d=r,_=k["".concat(o,".").concat(d)]||k[d]||p[d]||l;return a?n.createElement(_,i(i({ref:e},s),{},{components:a})):n.createElement(_,i({ref:e},s))}));function d(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=k;var c={};for(var o in e)hasOwnProperty.call(e,o)&&(c[o]=e[o]);c.originalType=t,c.mdxType="string"==typeof t?t:r,i[1]=c;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},43861:function(t,e,a){var n=a(67294);class r extends n.Component{render(){const t=/.*#(.*)/.exec(this.props.url)[1];return n.createElement("a",{"aria-hidden":"true",tabindex:"-1",class:"anchor enhancedAnchor_node_modules-@docusaurus-theme-classic-src-theme-Heading-",id:t})}}e.Z=r},1438:function(t,e,a){a.r(e),a.d(e,{assets:function(){return b},contentTitle:function(){return m},default:function(){return v},frontMatter:function(){return _},metadata:function(){return h},toc:function(){return g}});var n=a(3905),r=a(39130),l=a(43861),i=Object.defineProperty,c=Object.defineProperties,o=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,k=(t,e,a)=>e in t?i(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,d=(t,e)=>{for(var a in e||(e={}))s.call(e,a)&&k(t,a,e[a]);if(u)for(var a of u(e))p.call(e,a)&&k(t,a,e[a]);return t};const _={title:"GenericCallback<void>"},m=void 0,h={unversionedId:"api/classes/classtouchgfx_1_1_generic_callback_3_01void_01_4",id:"api/classes/classtouchgfx_1_1_generic_callback_3_01void_01_4",title:"GenericCallback<void>",description:"",source:"@site/docs/api/classes/classtouchgfx_1_1_generic_callback_3_01void_01_4.mdx",sourceDirName:"api/classes",slug:"/api/classes/classtouchgfx_1_1_generic_callback_3_01void_01_4",permalink:"/4.20/zh-TW/docs/api/classes/classtouchgfx_1_1_generic_callback_3_01void_01_4",draft:!1,tags:[],version:"current",frontMatter:{title:"GenericCallback<void>"},sidebar:"docs",previous:{title:"GenericCallback<T1,void,void>",permalink:"/4.20/zh-TW/docs/api/classes/classtouchgfx_1_1_generic_callback_3_01_t1_00_01void_00_01void_01_4"},next:{title:"GestureEvent",permalink:"/4.20/zh-TW/docs/api/classes/classtouchgfx_1_1_gesture_event"}},b={},g=[{value:"Public Functions",id:"public-functions",level:2},{value:"Public Functions Documentation",id:"public-functions-documentation",level:2},{value:"execute",id:"execute",level:3},{value:"isValid",id:"isvalid",level:3},{value:"~GenericCallback",id:"genericcallback",level:3}],f={toc:g};function v(t){var e,a=t,{components:i}=a,k=((t,e)=>{var a={};for(var n in t)s.call(t,n)&&e.indexOf(n)<0&&(a[n]=t[n]);if(null!=t&&u)for(var n of u(t))e.indexOf(n)<0&&p.call(t,n)&&(a[n]=t[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(e=d(d({},f),k),c(e,o({components:i,mdxType:"MDXLayout"}))),(0,n.kt)("p",null," ",(0,n.kt)("a",d({parentName:"p"},{href:"classtouchgfx_1_1_generic_callback"}),"GenericCallback")," is the base class for callbacks.\nThe reason this base class exists, is that a normal ",(0,n.kt)("a",d({parentName:"p"},{href:"structtouchgfx_1_1_callback"}),"Callback")," requires the class type where the callback function resides to be known. This is problematic for ie. framework widgets like ",(0,n.kt)("a",d({parentName:"p"},{href:"classtouchgfx_1_1_abstract_button"}),"AbstractButton"),", on which it should be possible to register a callback on object types that are user-specific and thus unknown to ",(0,n.kt)("a",d({parentName:"p"},{href:"classtouchgfx_1_1_abstract_button"}),"AbstractButton"),". This is solved by having ",(0,n.kt)("a",d({parentName:"p"},{href:"classtouchgfx_1_1_abstract_button"}),"AbstractButton")," contain a pointer to a ",(0,n.kt)("a",d({parentName:"p"},{href:"classtouchgfx_1_1_generic_callback"}),"GenericCallback")," instead. This pointer must then be initialized to point on an instance of ",(0,n.kt)("a",d({parentName:"p"},{href:"structtouchgfx_1_1_callback"}),"Callback"),", created by the user, which is initialized with the appropriate object type."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"See"),": ",(0,n.kt)("a",d({parentName:"p"},{href:"structtouchgfx_1_1_callback"}),"Callback")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note"),": As with ",(0,n.kt)("a",d({parentName:"p"},{href:"structtouchgfx_1_1_callback"}),"Callback"),", this class exists in four versions to support callback functions taking zero, one, two or three arguments. "),(0,n.kt)("h2",d({},{id:"public-functions"}),"Public Functions"),(0,n.kt)("div",{class:"function-table",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:"right"})),(0,n.kt)("th",d({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:"right"}),"virtual","\xa0","void"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_generic_callback_3_01void_01_4#function-execute",mdxType:"Link"},"execute")),"() =0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:"right"})),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Calls the member function.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:"right"})),(0,n.kt)("td",d({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:"right"}),"virtual","\xa0","bool"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_generic_callback_3_01void_01_4#function-isvalid",mdxType:"Link"},"isValid")),"() const =0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:"right"})),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Function to check whether the ",(0,n.kt)("a",d({parentName:"td"},{href:"structtouchgfx_1_1_callback"}),"Callback")," has been initialized with values.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:"right"})),(0,n.kt)("td",d({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:"right"}),"virtual","\xa0"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_generic_callback_3_01void_01_4#function-~genericcallback",mdxType:"Link"},"~GenericCallback")),"()")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:"right"})),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Finalizes an instance of the ",(0,n.kt)("a",d({parentName:"td"},{href:"classtouchgfx_1_1_generic_callback_3_01void_01_4"}),"GenericCallback","<","void",">")," class.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:"right"})),(0,n.kt)("td",d({parentName:"tr"},{align:null})))))),(0,n.kt)("h2",d({},{id:"public-functions-documentation"}),"Public Functions Documentation"),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_generic_callback_3_01void_01_4#function-execute",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",d({},{id:"execute"}),"execute"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:null})),(0,n.kt)("th",d({parentName:"tr"},{align:null})),(0,n.kt)("th",d({parentName:"tr"},{align:null})),(0,n.kt)("th",d({parentName:"tr"},{align:null})),(0,n.kt)("th",d({parentName:"tr"},{align:null})),(0,n.kt)("th",d({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"virtual","\xa0","void","\xa0",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_generic_callback_3_01void_01_4#function-execute",mdxType:"Link"},"execute")),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",d({parentName:"tr"},{align:null})),(0,n.kt)("td",d({parentName:"tr"},{align:null})),(0,n.kt)("td",d({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"=0"))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Calls the member function. "),(0,n.kt)("p",null,"Do not call execute unless ",(0,n.kt)("a",d({parentName:"p"},{href:"classtouchgfx_1_1_generic_callback_3_01void_01_4#function-isvalid"}),"isValid()")," returns true (ie. a pointer to the object and the function has been set). "))),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_generic_callback_3_01void_01_4#function-isvalid",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",d({},{id:"isvalid"}),"isValid"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:null})),(0,n.kt)("th",d({parentName:"tr"},{align:null})),(0,n.kt)("th",d({parentName:"tr"},{align:null})),(0,n.kt)("th",d({parentName:"tr"},{align:null})),(0,n.kt)("th",d({parentName:"tr"},{align:null})),(0,n.kt)("th",d({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"virtual","\xa0","bool","\xa0",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_generic_callback_3_01void_01_4#function-isvalid",mdxType:"Link"},"isValid")),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",d({parentName:"tr"},{align:null})),(0,n.kt)("td",d({parentName:"tr"},{align:null})),(0,n.kt)("td",d({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"const =0"))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Function to check whether the ",(0,n.kt)("a",d({parentName:"p"},{href:"structtouchgfx_1_1_callback"}),"Callback")," has been initialized with values. "),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("p",null,"true If the callback is valid (i.e. safe to call execute). ")))),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_generic_callback_3_01void_01_4#function-~genericcallback",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",d({},{id:"genericcallback"}),"~GenericCallback"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:null})),(0,n.kt)("th",d({parentName:"tr"},{align:null})),(0,n.kt)("th",d({parentName:"tr"},{align:null})),(0,n.kt)("th",d({parentName:"tr"},{align:null})),(0,n.kt)("th",d({parentName:"tr"},{align:null})),(0,n.kt)("th",d({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"virtual","\xa0",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_generic_callback_3_01void_01_4#function-~genericcallback",mdxType:"Link"},"~GenericCallback")),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",d({parentName:"tr"},{align:null})),(0,n.kt)("td",d({parentName:"tr"},{align:null})),(0,n.kt)("td",d({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",d({parentName:"tr"},{align:null})))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Finalizes an instance of the ",(0,n.kt)("a",d({parentName:"p"},{href:"classtouchgfx_1_1_generic_callback_3_01void_01_4"}),"GenericCallback","<","void",">")," class. "))))}v.isMDXComponent=!0}}]);