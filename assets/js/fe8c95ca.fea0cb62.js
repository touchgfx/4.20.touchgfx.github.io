"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[7969],{3905:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return d}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),k=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},s=function(t){var e=k(t.components);return a.createElement(o.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,s=c(t,["components","mdxType","originalType","parentName"]),u=k(n),d=r,m=u["".concat(o,".").concat(d)]||u[d]||p[d]||l;return n?a.createElement(m,i(i({ref:e},s),{},{components:n})):a.createElement(m,i({ref:e},s))}));function d(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=u;var c={};for(var o in e)hasOwnProperty.call(e,o)&&(c[o]=e[o]);c.originalType=t,c.mdxType="string"==typeof t?t:r,i[1]=c;for(var k=2;k<l;k++)i[k]=n[k];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},43861:function(t,e,n){var a=n(67294);class r extends a.Component{render(){const t=/.*#(.*)/.exec(this.props.url)[1];return a.createElement("a",{"aria-hidden":"true",tabindex:"-1",class:"anchor enhancedAnchor_node_modules-@docusaurus-theme-classic-src-theme-Heading-",id:t})}}e.Z=r},10047:function(t,e,n){n.r(e),n.d(e,{assets:function(){return f},contentTitle:function(){return h},default:function(){return _},frontMatter:function(){return m},metadata:function(){return g},toc:function(){return N}});var a=n(3905),r=n(39130),l=n(43861),i=Object.defineProperty,c=Object.defineProperties,o=Object.getOwnPropertyDescriptors,k=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(t,e,n)=>e in t?i(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,d=(t,e)=>{for(var n in e||(e={}))s.call(e,n)&&u(t,n,e[n]);if(k)for(var n of k(e))p.call(e,n)&&u(t,n,e[n]);return t};const m={title:"ClickListener"},h=void 0,g={unversionedId:"api/classes/classtouchgfx_1_1_click_listener",id:"api/classes/classtouchgfx_1_1_click_listener",title:"ClickListener",description:"",source:"@site/docs/api/classes/classtouchgfx_1_1_click_listener.mdx",sourceDirName:"api/classes",slug:"/api/classes/classtouchgfx_1_1_click_listener",permalink:"/touchgfx-test.github.io/docs/api/classes/classtouchgfx_1_1_click_listener",draft:!1,tags:[],version:"current",frontMatter:{title:"ClickListener"},sidebar:"docs",previous:{title:"ClickEvent",permalink:"/touchgfx-test.github.io/docs/api/classes/classtouchgfx_1_1_click_event"},next:{title:"Color",permalink:"/touchgfx-test.github.io/docs/api/classes/classtouchgfx_1_1_color"}},f={},N=[{value:"Public Functions",id:"public-functions",level:2},{value:"Protected Attributes",id:"protected-attributes",level:2},{value:"Public Functions Documentation",id:"public-functions-documentation",level:2},{value:"ClickListener",id:"clicklistener",level:3},{value:"handleClickEvent",id:"handleclickevent",level:3},{value:"setClickAction",id:"setclickaction",level:3},{value:"Protected Attributes Documentation",id:"protected-attributes-documentation",level:2},{value:"clickAction",id:"clickaction",level:3}],b={toc:N};function _(t){var e,n=t,{components:i}=n,u=((t,e)=>{var n={};for(var a in t)s.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(null!=t&&k)for(var a of k(t))e.indexOf(a)<0&&p.call(t,a)&&(n[a]=t[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(e=d(d({},b),u),c(e,o({components:i,mdxType:"MDXLayout"}))),(0,a.kt)("p",null," Mix-in class that extends a class with a click action event that is called when the class receives a click event. "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Template Parameters"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"T")," specifies the type to extend with the ",(0,a.kt)("a",d({parentName:"li"},{href:"classtouchgfx_1_1_click_listener"}),"ClickListener")," behavior. ")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Inherits from"),": T"),(0,a.kt)("h2",d({},{id:"public-functions"}),"Public Functions"),(0,a.kt)("div",{class:"function-table",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",d({parentName:"tr"},{align:"right"})),(0,a.kt)("th",d({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:"right"})),(0,a.kt)("td",d({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_click_listener#function-clicklistener",mdxType:"Link"},"ClickListener")),"()")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:"right"})),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Initializes a new instance of the ",(0,a.kt)("a",d({parentName:"td"},{href:"classtouchgfx_1_1_click_listener"}),"ClickListener")," class.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:"right"})),(0,a.kt)("td",d({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:"right"}),"virtual","\xa0","void"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_click_listener#function-handleclickevent",mdxType:"Link"},"handleClickEvent")),"(const ",(0,a.kt)("a",d({parentName:"td"},{href:"classtouchgfx_1_1_click_event"}),"ClickEvent")," & event)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:"right"})),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Ensures that the clickEvent is propagated to the super class T and to the clickAction listener.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:"right"})),(0,a.kt)("td",d({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:"right"}),"void"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_click_listener#function-setclickaction",mdxType:"Link"},"setClickAction")),"(",(0,a.kt)("a",d({parentName:"td"},{href:"classtouchgfx_1_1_generic_callback"}),"GenericCallback"),"<"," const T <, const ",(0,a.kt)("a",d({parentName:"td"},{href:"classtouchgfx_1_1_click_event"}),"ClickEvent")," & ",">"," & callback)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:"right"})),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Associates an action to be performed when the class T is clicked.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:"right"})),(0,a.kt)("td",d({parentName:"tr"},{align:null})))))),(0,a.kt)("h2",d({},{id:"protected-attributes"}),"Protected Attributes"),(0,a.kt)("div",{class:"function-table",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",d({parentName:"tr"},{align:"right"})),(0,a.kt)("th",d({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:"right"}),(0,a.kt)("a",d({parentName:"td"},{href:"classtouchgfx_1_1_generic_callback"}),"GenericCallback"),"<"," const T <, const ",(0,a.kt)("a",d({parentName:"td"},{href:"classtouchgfx_1_1_click_event"}),"ClickEvent")," & ",">"," *"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_click_listener#variable-clickaction",mdxType:"Link"},"clickAction")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:"right"})),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"The callback to be executed when T is clicked.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:"right"})),(0,a.kt)("td",d({parentName:"tr"},{align:null})))))),(0,a.kt)("h2",d({},{id:"public-functions-documentation"}),"Public Functions Documentation"),(0,a.kt)(l.Z,{url:"classtouchgfx_1_1_click_listener#function-clicklistener",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",d({},{id:"clicklistener"}),"ClickListener"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",d({parentName:"tr"},{align:null})),(0,a.kt)("th",d({parentName:"tr"},{align:null})),(0,a.kt)("th",d({parentName:"tr"},{align:null})),(0,a.kt)("th",d({parentName:"tr"},{align:null})),(0,a.kt)("th",d({parentName:"tr"},{align:null})),(0,a.kt)("th",d({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_click_listener#function-clicklistener",mdxType:"Link"},"ClickListener")),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",d({parentName:"tr"},{align:null})),(0,a.kt)("td",d({parentName:"tr"},{align:null})),(0,a.kt)("td",d({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",d({parentName:"tr"},{align:null})))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"Initializes a new instance of the ",(0,a.kt)("a",d({parentName:"p"},{href:"classtouchgfx_1_1_click_listener"}),"ClickListener")," class. "),(0,a.kt)("p",null,"Make the object touchable. "))),(0,a.kt)(l.Z,{url:"classtouchgfx_1_1_click_listener#function-handleclickevent",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",d({},{id:"handleclickevent"}),"handleClickEvent"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",d({parentName:"tr"},{align:null})),(0,a.kt)("th",d({parentName:"tr"},{align:null})),(0,a.kt)("th",d({parentName:"tr"},{align:null})),(0,a.kt)("th",d({parentName:"tr"},{align:null})),(0,a.kt)("th",d({parentName:"tr"},{align:null})),(0,a.kt)("th",d({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"virtual","\xa0","void","\xa0",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_click_listener#function-handleclickevent",mdxType:"Link"},"handleClickEvent")),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"const ",(0,a.kt)("a",d({parentName:"td"},{href:"classtouchgfx_1_1_click_event"}),"ClickEvent")," &"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"event"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",d({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null})),(0,a.kt)("td",d({parentName:"tr"},{align:null})),(0,a.kt)("td",d({parentName:"tr"},{align:null})),(0,a.kt)("td",d({parentName:"tr"},{align:null})),(0,a.kt)("td",d({parentName:"tr"},{align:null})),(0,a.kt)("td",d({parentName:"tr"},{align:null})))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"Ensures that the clickEvent is propagated to the super class T and to the clickAction listener. "),(0,a.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,a.kt)("div",{class:"api-content-indented",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",d({parentName:"tr"},{align:null})),(0,a.kt)("th",d({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"event"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Information about the click."))))))),(0,a.kt)(l.Z,{url:"classtouchgfx_1_1_click_listener#function-setclickaction",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",d({},{id:"setclickaction"}),"setClickAction"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",d({parentName:"tr"},{align:null})),(0,a.kt)("th",d({parentName:"tr"},{align:null})),(0,a.kt)("th",d({parentName:"tr"},{align:null})),(0,a.kt)("th",d({parentName:"tr"},{align:null})),(0,a.kt)("th",d({parentName:"tr"},{align:null})),(0,a.kt)("th",d({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"void","\xa0",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_click_listener#function-setclickaction",mdxType:"Link"},"setClickAction")),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",d({parentName:"tr"},{align:null}),(0,a.kt)("a",d({parentName:"td"},{href:"classtouchgfx_1_1_generic_callback"}),"GenericCallback"),"<"," const T <, const ",(0,a.kt)("a",d({parentName:"td"},{href:"classtouchgfx_1_1_click_event"}),"ClickEvent")," & ",">"," &"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"callback"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",d({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null})),(0,a.kt)("td",d({parentName:"tr"},{align:null})),(0,a.kt)("td",d({parentName:"tr"},{align:null})),(0,a.kt)("td",d({parentName:"tr"},{align:null})),(0,a.kt)("td",d({parentName:"tr"},{align:null})),(0,a.kt)("td",d({parentName:"tr"},{align:null})))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"Associates an action to be performed when the class T is clicked. "),(0,a.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,a.kt)("div",{class:"api-content-indented",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",d({parentName:"tr"},{align:null})),(0,a.kt)("th",d({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"callback"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"The callback to be executed. The callback will be given a reference to T."))))))),(0,a.kt)("h2",d({},{id:"protected-attributes-documentation"}),"Protected Attributes Documentation"),(0,a.kt)(l.Z,{url:"classtouchgfx_1_1_click_listener#variable-clickaction",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",d({},{id:"clickaction"}),"clickAction"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,a.kt)("p",null,(0,a.kt)("a",d({parentName:"p"},{href:"classtouchgfx_1_1_generic_callback"}),"GenericCallback"),"<"," const T <, const ",(0,a.kt)("a",d({parentName:"p"},{href:"classtouchgfx_1_1_click_event"}),"ClickEvent")," & ",">"," * clickAction ")),(0,a.kt)("div",{class:"api-container-content",markdown:"1"},(0,a.kt)("p",null,"The callback to be executed when T is clicked. "))))}_.isMDXComponent=!0}}]);