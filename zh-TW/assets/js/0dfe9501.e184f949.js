"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[6696],{3905:function(t,a,e){e.d(a,{Zo:function(){return c},kt:function(){return k}});var n=e(67294);function r(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function l(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,n)}return e}function i(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?l(Object(e),!0).forEach((function(a){r(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function o(t,a){if(null==t)return{};var e,n,r=function(t,a){if(null==t)return{};var e,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)e=l[n],a.indexOf(e)>=0||(r[e]=t[e]);return r}(t,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)e=l[n],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var p=n.createContext({}),_=function(t){var a=n.useContext(p),e=a;return t&&(e="function"==typeof t?t(a):i(i({},a),t)),e},c=function(t){var a=_(t.components);return n.createElement(p.Provider,{value:a},t.children)},u={inlineCode:"code",wrapper:function(t){var a=t.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(t,a){var e=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),d=_(e),k=r,m=d["".concat(p,".").concat(k)]||d[k]||u[k]||l;return e?n.createElement(m,i(i({ref:a},c),{},{components:e})):n.createElement(m,i({ref:a},c))}));function k(t,a){var e=arguments,r=a&&a.mdxType;if("string"==typeof t||r){var l=e.length,i=new Array(l);i[0]=d;var o={};for(var p in a)hasOwnProperty.call(a,p)&&(o[p]=a[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var _=2;_<l;_++)i[_]=e[_];return n.createElement.apply(null,i)}return n.createElement.apply(null,e)}d.displayName="MDXCreateElement"},43861:function(t,a,e){var n=e(67294);class r extends n.Component{render(){const t=/.*#(.*)/.exec(this.props.url)[1];return n.createElement("a",{"aria-hidden":"true",tabindex:"-1",class:"anchor enhancedAnchor_node_modules-@docusaurus-theme-classic-src-theme-Heading-",id:t})}}a.Z=r},43312:function(t,a,e){e.r(a),e.d(a,{assets:function(){return N},contentTitle:function(){return s},default:function(){return b},frontMatter:function(){return m},metadata:function(){return g},toc:function(){return h}});var n=e(3905),r=e(39130),l=e(43861),i=Object.defineProperty,o=Object.defineProperties,p=Object.getOwnPropertyDescriptors,_=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,d=(t,a,e)=>a in t?i(t,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[a]=e,k=(t,a)=>{for(var e in a||(a={}))c.call(a,e)&&d(t,e,a[e]);if(_)for(var e of _(a))u.call(a,e)&&d(t,e,a[e]);return t};const m={title:"Q10"},s=void 0,g={unversionedId:"api/classes/classtouchgfx_1_1_c_w_r_util_1_1_q10",id:"api/classes/classtouchgfx_1_1_c_w_r_util_1_1_q10",title:"Q10",description:"",source:"@site/docs/api/classes/classtouchgfx_1_1_c_w_r_util_1_1_q10.mdx",sourceDirName:"api/classes",slug:"/api/classes/classtouchgfx_1_1_c_w_r_util_1_1_q10",permalink:"/4.20/zh-TW/docs/api/classes/classtouchgfx_1_1_c_w_r_util_1_1_q10",tags:[],version:"current",frontMatter:{title:"Q10"},sidebar:"docs",previous:{title:"Presenter",permalink:"/4.20/zh-TW/docs/api/classes/classtouchgfx_1_1_presenter"},next:{title:"Q15",permalink:"/4.20/zh-TW/docs/api/classes/classtouchgfx_1_1_c_w_r_util_1_1_q15"}},N={},h=[{value:"Public Functions",id:"public-functions",level:2},{value:"Public Functions Documentation",id:"public-functions-documentation",level:2},{value:"operator int",id:"operator-int",level:3},{value:"operator*",id:"operator",level:3},{value:"operator+",id:"operator-1",level:3},{value:"operator-",id:"operator-",level:3},{value:"operator/",id:"operator-2",level:3},{value:"Q10",id:"q10",level:3},{value:"Q10",id:"q10-1",level:3},{value:"to",id:"to",level:3}],f={toc:h};function b(t){var a,e=t,{components:i}=e,d=((t,a)=>{var e={};for(var n in t)c.call(t,n)&&a.indexOf(n)<0&&(e[n]=t[n]);if(null!=t&&_)for(var n of _(t))a.indexOf(n)<0&&u.call(t,n)&&(e[n]=t[n]);return e})(e,["components"]);return(0,n.kt)("wrapper",(a=k(k({},f),d),o(a,p({components:i,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,' Defines a "floating point number" with 10 bits reserved for the fractional part of the decimal number.\n',(0,n.kt)("a",k({parentName:"p"},{href:"classtouchgfx_1_1_c_w_r_util_1_1_q10"}),"Q10")," implements some simple arithmetic operations, most yielding a ",(0,n.kt)("a",k({parentName:"p"},{href:"classtouchgfx_1_1_c_w_r_util_1_1_q10"}),"Q10")," number and some yielding a ",(0,n.kt)("a",k({parentName:"p"},{href:"classtouchgfx_1_1_c_w_r_util_1_1_q5"}),"Q5")," number or a ",(0,n.kt)("a",k({parentName:"p"},{href:"classtouchgfx_1_1_c_w_r_util_1_1_q15"}),"Q15")," number as a result."),(0,n.kt)("p",null,"Q5*Q5=",(0,n.kt)("a",k({parentName:"p"},{href:"classtouchgfx_1_1_c_w_r_util_1_1_q10"}),"Q10"),", Q10/Q5=",(0,n.kt)("a",k({parentName:"p"},{href:"classtouchgfx_1_1_c_w_r_util_1_1_q5"}),"Q5"),", ..."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"See"),": ",(0,n.kt)("a",k({parentName:"p"},{href:"classtouchgfx_1_1_c_w_r_util_1_1_q5"}),"Q5"),", ",(0,n.kt)("a",k({parentName:"p"},{href:"classtouchgfx_1_1_c_w_r_util_1_1_q15"}),"Q15")),(0,n.kt)("h2",k({},{id:"public-functions"}),"Public Functions"),(0,n.kt)("div",{class:"function-table",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:"right"})),(0,n.kt)("th",k({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_c_w_r_util_1_1_q10#function-operator int",mdxType:"Link"},"operator int")),"() const")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"Gets the ",(0,n.kt)("a",k({parentName:"td"},{href:"classtouchgfx_1_1_c_w_r_util_1_1_q10"}),"Q10")," as an integer without conversion.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"}),(0,n.kt)("a",k({parentName:"td"},{href:"classtouchgfx_1_1_c_w_r_util_1_1_q15"}),"Q15")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_c_w_r_util_1_1_q10#function-operator*",mdxType:"Link"},"operator*")),"(const ",(0,n.kt)("a",k({parentName:"td"},{href:"classtouchgfx_1_1_c_w_r_util_1_1_q5"}),"Q5")," & q5) const")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"Multiplication operator.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"}),(0,n.kt)("a",k({parentName:"td"},{href:"classtouchgfx_1_1_c_w_r_util_1_1_q10"}),"Q10")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_c_w_r_util_1_1_q10#function-operator+",mdxType:"Link"},"operator+")),"(const ",(0,n.kt)("a",k({parentName:"td"},{href:"classtouchgfx_1_1_c_w_r_util_1_1_q10"}),"Q10")," & q10) const")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"Addition operator.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"}),(0,n.kt)("a",k({parentName:"td"},{href:"classtouchgfx_1_1_c_w_r_util_1_1_q10"}),"Q10")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_c_w_r_util_1_1_q10#function-operator-",mdxType:"Link"},"operator-")),"() const")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"Negation operator.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"}),(0,n.kt)("a",k({parentName:"td"},{href:"classtouchgfx_1_1_c_w_r_util_1_1_q5"}),"Q5")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_c_w_r_util_1_1_q10#function-operator/",mdxType:"Link"},"operator/")),"(const ",(0,n.kt)("a",k({parentName:"td"},{href:"classtouchgfx_1_1_c_w_r_util_1_1_q5"}),"Q5")," & q5) const")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"Division operator.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_c_w_r_util_1_1_q10#function-q10",mdxType:"Link"},"Q10")),"()")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"Initializes a new instance of the ",(0,n.kt)("a",k({parentName:"td"},{href:"classtouchgfx_1_1_c_w_r_util_1_1_q10"}),"Q10")," class.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_c_w_r_util_1_1_q10#function-q10",mdxType:"Link"},"Q10")),"(int i)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"Constructor from integer.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"}),"template ","<","typename T ",">",(0,n.kt)("br",null),"T"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_c_w_r_util_1_1_q10#function-to",mdxType:"Link"},"to")),"() const")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"Converts the ",(0,n.kt)("a",k({parentName:"td"},{href:"classtouchgfx_1_1_c_w_r_util_1_1_q10"}),"Q10")," value to an int or a float.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null})))))),(0,n.kt)("h2",k({},{id:"public-functions-documentation"}),"Public Functions Documentation"),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_c_w_r_util_1_1_q10#function-operator int",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",k({},{id:"operator-int"}),"operator int"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_c_w_r_util_1_1_q10#function-operator int",mdxType:"Link"},"operator int")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"const"))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Gets the ",(0,n.kt)("a",k({parentName:"p"},{href:"classtouchgfx_1_1_c_w_r_util_1_1_q10"}),"Q10")," as an integer without conversion. "),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("p",null,"The unconverted ",(0,n.kt)("a",k({parentName:"p"},{href:"classtouchgfx_1_1_c_w_r_util_1_1_q10"}),"Q10")," value. ")))),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_c_w_r_util_1_1_q10#function-operator*",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",k({},{id:"operator"}),"operator*"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"Q15","\xa0",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_c_w_r_util_1_1_q10#function-operator*",mdxType:"Link"},"operator*")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"const ",(0,n.kt)("a",k({parentName:"td"},{href:"classtouchgfx_1_1_c_w_r_util_1_1_q5"}),"Q5")," &"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"q5"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null})))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Multiplication operator. "),(0,n.kt)("p",null,"The result is a ",(0,n.kt)("a",k({parentName:"p"},{href:"classtouchgfx_1_1_c_w_r_util_1_1_q15"}),"Q15"),", not a ",(0,n.kt)("a",k({parentName:"p"},{href:"classtouchgfx_1_1_c_w_r_util_1_1_q10"}),"Q10"),", for increased precision."),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"q5"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"The ",(0,n.kt)("a",k({parentName:"td"},{href:"classtouchgfx_1_1_c_w_r_util_1_1_q5"}),"Q5")," to multiply this with."))))),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("p",null,"The result of the operation. ")))),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_c_w_r_util_1_1_q10#function-operator+",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",k({},{id:"operator-1"}),"operator+"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"Q10","\xa0",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_c_w_r_util_1_1_q10#function-operator+",mdxType:"Link"},"operator+")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"const ",(0,n.kt)("a",k({parentName:"td"},{href:"classtouchgfx_1_1_c_w_r_util_1_1_q10"}),"Q10")," &"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"q10"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null})))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Addition operator. "),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"q10"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"The ",(0,n.kt)("a",k({parentName:"td"},{href:"classtouchgfx_1_1_c_w_r_util_1_1_q10"}),"Q10")," to add to this."))))),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("p",null,"The result of the operation. ")))),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_c_w_r_util_1_1_q10#function-operator-",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",k({},{id:"operator-"}),"operator-"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"Q10","\xa0",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_c_w_r_util_1_1_q10#function-operator-",mdxType:"Link"},"operator-")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"const"))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Negation operator. "),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("p",null,"The negative value of this. ")))),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_c_w_r_util_1_1_q10#function-operator/",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",k({},{id:"operator-2"}),"operator/"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"Q5","\xa0",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_c_w_r_util_1_1_q10#function-operator/",mdxType:"Link"},"operator/")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"const ",(0,n.kt)("a",k({parentName:"td"},{href:"classtouchgfx_1_1_c_w_r_util_1_1_q5"}),"Q5")," &"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"q5"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null})))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Division operator. "),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"q5"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"The ",(0,n.kt)("a",k({parentName:"td"},{href:"classtouchgfx_1_1_c_w_r_util_1_1_q5"}),"Q5")," to divide this by."))))),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("p",null,"The result of the operation. ")))),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_c_w_r_util_1_1_q10#function-q10",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",k({},{id:"q10"}),"Q10"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_c_w_r_util_1_1_q10#function-q10",mdxType:"Link"},"Q10")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",k({parentName:"tr"},{align:null})))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Initializes a new instance of the ",(0,n.kt)("a",k({parentName:"p"},{href:"classtouchgfx_1_1_c_w_r_util_1_1_q10"}),"Q10")," class. "))),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_c_w_r_util_1_1_q10#function-q10",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",k({},{id:"q10-1"}),"Q10"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"explicit","\xa0",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_c_w_r_util_1_1_q10#function-q10",mdxType:"Link"},"Q10")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"int"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"i"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null})))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Constructor from integer. "),(0,n.kt)("p",null,"No conversion is done - the integer is assumed to already be in ",(0,n.kt)("a",k({parentName:"p"},{href:"classtouchgfx_1_1_c_w_r_util_1_1_q10"}),"Q10")," format."),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"i"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"int pre-formattet in ",(0,n.kt)("a",k({parentName:"td"},{href:"classtouchgfx_1_1_c_w_r_util_1_1_q10"}),"Q10")," format."))))))),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_c_w_r_util_1_1_q10#function-to",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",k({},{id:"to"}),"to"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"T","\xa0",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_c_w_r_util_1_1_q10#function-to",mdxType:"Link"},"to")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"const"))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Converts the ",(0,n.kt)("a",k({parentName:"p"},{href:"classtouchgfx_1_1_c_w_r_util_1_1_q10"}),"Q10")," value to an int or a float. "),(0,n.kt)("p",null,"Convert the ",(0,n.kt)("a",k({parentName:"p"},{href:"classtouchgfx_1_1_c_w_r_util_1_1_q10"}),"Q10")," value to an integer by removing the 10 bits used for the fraction, or to a floating point value by dividing by 32 * 32, depending on the type specified as T."),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Template Parameters:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"T"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"Either int or float."))))),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("p",null,(0,n.kt)("a",k({parentName:"p"},{href:"classtouchgfx_1_1_c_w_r_util_1_1_q10"}),"Q10")," value as a type T. ")))))}b.isMDXComponent=!0}}]);