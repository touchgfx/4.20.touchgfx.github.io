"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[3689],{3905:function(t,e,n){n.d(e,{Zo:function(){return k},kt:function(){return s}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function d(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),p=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},k=function(t){var e=p(t.components);return a.createElement(o.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,k=d(t,["components","mdxType","originalType","parentName"]),u=p(n),s=r,m=u["".concat(o,".").concat(s)]||u[s]||c[s]||l;return n?a.createElement(m,i(i({ref:e},k),{},{components:n})):a.createElement(m,i({ref:e},k))}));function s(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=u;var d={};for(var o in e)hasOwnProperty.call(e,o)&&(d[o]=e[o]);d.originalType=t,d.mdxType="string"==typeof t?t:r,i[1]=d;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},43861:function(t,e,n){var a=n(67294);class r extends a.Component{render(){const t=/.*#(.*)/.exec(this.props.url)[1];return a.createElement("a",{"aria-hidden":"true",tabindex:"-1",class:"anchor enhancedAnchor_node_modules-@docusaurus-theme-classic-src-theme-Heading-",id:t})}}e.Z=r},83537:function(t,e,n){n.r(e),n.d(e,{assets:function(){return N},contentTitle:function(){return h},default:function(){return f},frontMatter:function(){return m},metadata:function(){return g},toc:function(){return v}});var a=n(3905),r=n(39130),l=n(43861),i=Object.defineProperty,d=Object.defineProperties,o=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,k=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(t,e,n)=>e in t?i(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,s=(t,e)=>{for(var n in e||(e={}))k.call(e,n)&&u(t,n,e[n]);if(p)for(var n of p(e))c.call(e,n)&&u(t,n,e[n]);return t};const m={title:"UIEventListener"},h=void 0,g={unversionedId:"api/classes/classtouchgfx_1_1_u_i_event_listener",id:"api/classes/classtouchgfx_1_1_u_i_event_listener",title:"UIEventListener",description:"",source:"@site/docs/api/classes/classtouchgfx_1_1_u_i_event_listener.mdx",sourceDirName:"api/classes",slug:"/api/classes/classtouchgfx_1_1_u_i_event_listener",permalink:"/4.20/ko/docs/api/classes/classtouchgfx_1_1_u_i_event_listener",draft:!1,tags:[],version:"current",frontMatter:{title:"UIEventListener"},sidebar:"docs",previous:{title:"TypedTextData",permalink:"/4.20/ko/docs/api/classes/structtouchgfx_1_1_typed_text_1_1_typed_text_data"},next:{title:"Unicode",permalink:"/4.20/ko/docs/api/classes/classtouchgfx_1_1_unicode"}},N={},v=[{value:"Public Functions",id:"public-functions",level:2},{value:"Public Functions Documentation",id:"public-functions-documentation",level:2},{value:"handleClickEvent",id:"handleclickevent",level:3},{value:"handleDragEvent",id:"handledragevent",level:3},{value:"handleGestureEvent",id:"handlegestureevent",level:3},{value:"handleKeyEvent",id:"handlekeyevent",level:3},{value:"handlePendingScreenTransition",id:"handlependingscreentransition",level:3},{value:"handleTickEvent",id:"handletickevent",level:3},{value:"~UIEventListener",id:"uieventlistener",level:3}],_={toc:v};function f(t){var e,n=t,{components:i}=n,u=((t,e)=>{var n={};for(var a in t)k.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(null!=t&&p)for(var a of p(t))e.indexOf(a)<0&&c.call(t,a)&&(n[a]=t[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(e=s(s({},_),u),d(e,o({components:i,mdxType:"MDXLayout"}))),(0,a.kt)("p",null," This class declares a handler interface for user interface events, i.e.\nevents generated by the users interaction with the device. With the exception of the system timer tick, all other system events, which are not related to the user interface device peripherals (display, keys etc.) are not part of this interface. "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Inherited by"),":  ",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_application",mdxType:"Link"},"Application")),(0,a.kt)("h2",s({},{id:"public-functions"}),"Public Functions"),(0,a.kt)("div",{class:"function-table",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",s({parentName:"tr"},{align:"right"})),(0,a.kt)("th",s({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"}),"virtual","\xa0","void"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_u_i_event_listener#function-handleclickevent",mdxType:"Link"},"handleClickEvent")),"(const ",(0,a.kt)("a",s({parentName:"td"},{href:"classtouchgfx_1_1_click_event"}),"ClickEvent")," & event)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"})),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"This handler is invoked when a mouse click or display touch event has been detected by the system.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"})),(0,a.kt)("td",s({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"}),"virtual","\xa0","void"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_u_i_event_listener#function-handledragevent",mdxType:"Link"},"handleDragEvent")),"(const ",(0,a.kt)("a",s({parentName:"td"},{href:"classtouchgfx_1_1_drag_event"}),"DragEvent")," & event)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"})),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"This handler is invoked when a drag event has been detected by the system.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"})),(0,a.kt)("td",s({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"}),"virtual","\xa0","void"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_u_i_event_listener#function-handlegestureevent",mdxType:"Link"},"handleGestureEvent")),"(const ",(0,a.kt)("a",s({parentName:"td"},{href:"classtouchgfx_1_1_gesture_event"}),"GestureEvent")," & event)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"})),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"This handler is invoked when a gesture event has been detected by the system.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"})),(0,a.kt)("td",s({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"}),"virtual","\xa0","void"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_u_i_event_listener#function-handlekeyevent",mdxType:"Link"},"handleKeyEvent")),"(uint8_t c)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"})),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"This handler is invoked when a key (or button) event has been detected by the system.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"})),(0,a.kt)("td",s({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"}),"virtual","\xa0","void"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_u_i_event_listener#function-handlependingscreentransition",mdxType:"Link"},"handlePendingScreenTransition")),"()")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"})),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"This handler is invoked when a change screen event is pending.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"})),(0,a.kt)("td",s({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"}),"virtual","\xa0","void"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_u_i_event_listener#function-handletickevent",mdxType:"Link"},"handleTickEvent")),"()")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"})),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"This handler is invoked when a system tick event has been generated.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"})),(0,a.kt)("td",s({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"}),"virtual","\xa0"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_u_i_event_listener#function-~uieventlistener",mdxType:"Link"},"~UIEventListener")),"()")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"})),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Finalizes an instance of the ",(0,a.kt)("a",s({parentName:"td"},{href:"classtouchgfx_1_1_u_i_event_listener"}),"UIEventListener")," class.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"})),(0,a.kt)("td",s({parentName:"tr"},{align:null})))))),(0,a.kt)("h2",s({},{id:"public-functions-documentation"}),"Public Functions Documentation"),(0,a.kt)(l.Z,{url:"classtouchgfx_1_1_u_i_event_listener#function-handleclickevent",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",s({},{id:"handleclickevent"}),"handleClickEvent"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",s({parentName:"tr"},{align:null})),(0,a.kt)("th",s({parentName:"tr"},{align:null})),(0,a.kt)("th",s({parentName:"tr"},{align:null})),(0,a.kt)("th",s({parentName:"tr"},{align:null})),(0,a.kt)("th",s({parentName:"tr"},{align:null})),(0,a.kt)("th",s({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"virtual","\xa0","void","\xa0",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_u_i_event_listener#function-handleclickevent",mdxType:"Link"},"handleClickEvent")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"const ",(0,a.kt)("a",s({parentName:"td"},{href:"classtouchgfx_1_1_click_event"}),"ClickEvent")," &"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"event"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",s({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null})),(0,a.kt)("td",s({parentName:"tr"},{align:null})),(0,a.kt)("td",s({parentName:"tr"},{align:null})),(0,a.kt)("td",s({parentName:"tr"},{align:null})),(0,a.kt)("td",s({parentName:"tr"},{align:null})),(0,a.kt)("td",s({parentName:"tr"},{align:null})))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"This handler is invoked when a mouse click or display touch event has been detected by the system. "),(0,a.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,a.kt)("div",{class:"api-content-indented",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",s({parentName:"tr"},{align:null})),(0,a.kt)("th",s({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"event"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"The event data."))))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Reimplemented by"),": ",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_application#function-handleclickevent",mdxType:"Link"},"touchgfx::Application::handleClickEvent")))),(0,a.kt)(l.Z,{url:"classtouchgfx_1_1_u_i_event_listener#function-handledragevent",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",s({},{id:"handledragevent"}),"handleDragEvent"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",s({parentName:"tr"},{align:null})),(0,a.kt)("th",s({parentName:"tr"},{align:null})),(0,a.kt)("th",s({parentName:"tr"},{align:null})),(0,a.kt)("th",s({parentName:"tr"},{align:null})),(0,a.kt)("th",s({parentName:"tr"},{align:null})),(0,a.kt)("th",s({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"virtual","\xa0","void","\xa0",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_u_i_event_listener#function-handledragevent",mdxType:"Link"},"handleDragEvent")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"const ",(0,a.kt)("a",s({parentName:"td"},{href:"classtouchgfx_1_1_drag_event"}),"DragEvent")," &"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"event"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",s({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null})),(0,a.kt)("td",s({parentName:"tr"},{align:null})),(0,a.kt)("td",s({parentName:"tr"},{align:null})),(0,a.kt)("td",s({parentName:"tr"},{align:null})),(0,a.kt)("td",s({parentName:"tr"},{align:null})),(0,a.kt)("td",s({parentName:"tr"},{align:null})))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"This handler is invoked when a drag event has been detected by the system. "),(0,a.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,a.kt)("div",{class:"api-content-indented",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",s({parentName:"tr"},{align:null})),(0,a.kt)("th",s({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"event"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"The event data."))))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Reimplemented by"),": ",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_application#function-handledragevent",mdxType:"Link"},"touchgfx::Application::handleDragEvent")))),(0,a.kt)(l.Z,{url:"classtouchgfx_1_1_u_i_event_listener#function-handlegestureevent",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",s({},{id:"handlegestureevent"}),"handleGestureEvent"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",s({parentName:"tr"},{align:null})),(0,a.kt)("th",s({parentName:"tr"},{align:null})),(0,a.kt)("th",s({parentName:"tr"},{align:null})),(0,a.kt)("th",s({parentName:"tr"},{align:null})),(0,a.kt)("th",s({parentName:"tr"},{align:null})),(0,a.kt)("th",s({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"virtual","\xa0","void","\xa0",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_u_i_event_listener#function-handlegestureevent",mdxType:"Link"},"handleGestureEvent")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"const ",(0,a.kt)("a",s({parentName:"td"},{href:"classtouchgfx_1_1_gesture_event"}),"GestureEvent")," &"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"event"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",s({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null})),(0,a.kt)("td",s({parentName:"tr"},{align:null})),(0,a.kt)("td",s({parentName:"tr"},{align:null})),(0,a.kt)("td",s({parentName:"tr"},{align:null})),(0,a.kt)("td",s({parentName:"tr"},{align:null})),(0,a.kt)("td",s({parentName:"tr"},{align:null})))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"This handler is invoked when a gesture event has been detected by the system. "),(0,a.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,a.kt)("div",{class:"api-content-indented",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",s({parentName:"tr"},{align:null})),(0,a.kt)("th",s({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"event"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"The event data."))))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Reimplemented by"),": ",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_application#function-handlegestureevent",mdxType:"Link"},"touchgfx::Application::handleGestureEvent")))),(0,a.kt)(l.Z,{url:"classtouchgfx_1_1_u_i_event_listener#function-handlekeyevent",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",s({},{id:"handlekeyevent"}),"handleKeyEvent"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",s({parentName:"tr"},{align:null})),(0,a.kt)("th",s({parentName:"tr"},{align:null})),(0,a.kt)("th",s({parentName:"tr"},{align:null})),(0,a.kt)("th",s({parentName:"tr"},{align:null})),(0,a.kt)("th",s({parentName:"tr"},{align:null})),(0,a.kt)("th",s({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"virtual","\xa0","void","\xa0",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_u_i_event_listener#function-handlekeyevent",mdxType:"Link"},"handleKeyEvent")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"uint8_t"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"c"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",s({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null})),(0,a.kt)("td",s({parentName:"tr"},{align:null})),(0,a.kt)("td",s({parentName:"tr"},{align:null})),(0,a.kt)("td",s({parentName:"tr"},{align:null})),(0,a.kt)("td",s({parentName:"tr"},{align:null})),(0,a.kt)("td",s({parentName:"tr"},{align:null})))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"This handler is invoked when a key (or button) event has been detected by the system. "),(0,a.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,a.kt)("div",{class:"api-content-indented",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",s({parentName:"tr"},{align:null})),(0,a.kt)("th",s({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"c"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"The key or button pressed."))))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Reimplemented by"),": ",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_application#function-handlekeyevent",mdxType:"Link"},"touchgfx::Application::handleKeyEvent")))),(0,a.kt)(l.Z,{url:"classtouchgfx_1_1_u_i_event_listener#function-handlependingscreentransition",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",s({},{id:"handlependingscreentransition"}),"handlePendingScreenTransition"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",s({parentName:"tr"},{align:null})),(0,a.kt)("th",s({parentName:"tr"},{align:null})),(0,a.kt)("th",s({parentName:"tr"},{align:null})),(0,a.kt)("th",s({parentName:"tr"},{align:null})),(0,a.kt)("th",s({parentName:"tr"},{align:null})),(0,a.kt)("th",s({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"virtual","\xa0","void","\xa0",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_u_i_event_listener#function-handlependingscreentransition",mdxType:"Link"},"handlePendingScreenTransition")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",s({parentName:"tr"},{align:null})),(0,a.kt)("td",s({parentName:"tr"},{align:null})),(0,a.kt)("td",s({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",s({parentName:"tr"},{align:null})))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"This handler is invoked when a change screen event is pending. "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Reimplemented by"),": ",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_m_v_p_application#function-handlependingscreentransition",mdxType:"Link"},"touchgfx::MVPApplication::handlePendingScreenTransition"),", ",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_application#function-handlependingscreentransition",mdxType:"Link"},"touchgfx::Application::handlePendingScreenTransition")))),(0,a.kt)(l.Z,{url:"classtouchgfx_1_1_u_i_event_listener#function-handletickevent",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",s({},{id:"handletickevent"}),"handleTickEvent"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",s({parentName:"tr"},{align:null})),(0,a.kt)("th",s({parentName:"tr"},{align:null})),(0,a.kt)("th",s({parentName:"tr"},{align:null})),(0,a.kt)("th",s({parentName:"tr"},{align:null})),(0,a.kt)("th",s({parentName:"tr"},{align:null})),(0,a.kt)("th",s({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"virtual","\xa0","void","\xa0",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_u_i_event_listener#function-handletickevent",mdxType:"Link"},"handleTickEvent")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",s({parentName:"tr"},{align:null})),(0,a.kt)("td",s({parentName:"tr"},{align:null})),(0,a.kt)("td",s({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",s({parentName:"tr"},{align:null})))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"This handler is invoked when a system tick event has been generated. "),(0,a.kt)("p",null,"The system tick period is configured in the ",(0,a.kt)("a",s({parentName:"p"},{href:"classtouchgfx_1_1_h_a_l"}),"HAL"),". "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Reimplemented by"),": ",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_application#function-handletickevent",mdxType:"Link"},"touchgfx::Application::handleTickEvent")))),(0,a.kt)(l.Z,{url:"classtouchgfx_1_1_u_i_event_listener#function-~uieventlistener",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",s({},{id:"uieventlistener"}),"~UIEventListener"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",s({parentName:"tr"},{align:null})),(0,a.kt)("th",s({parentName:"tr"},{align:null})),(0,a.kt)("th",s({parentName:"tr"},{align:null})),(0,a.kt)("th",s({parentName:"tr"},{align:null})),(0,a.kt)("th",s({parentName:"tr"},{align:null})),(0,a.kt)("th",s({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"virtual","\xa0",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_u_i_event_listener#function-~uieventlistener",mdxType:"Link"},"~UIEventListener")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",s({parentName:"tr"},{align:null})),(0,a.kt)("td",s({parentName:"tr"},{align:null})),(0,a.kt)("td",s({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",s({parentName:"tr"},{align:null})))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"Finalizes an instance of the ",(0,a.kt)("a",s({parentName:"p"},{href:"classtouchgfx_1_1_u_i_event_listener"}),"UIEventListener")," class. "))))}f.isMDXComponent=!0}}]);