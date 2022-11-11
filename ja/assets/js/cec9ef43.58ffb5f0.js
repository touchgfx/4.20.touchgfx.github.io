"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[9152],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return h}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var c=a.createContext({}),u=function(t){var e=a.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},p=function(t){var e=u(t.components);return a.createElement(c.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,c=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),d=u(n),h=r,m=d["".concat(c,".").concat(h)]||d[h]||s[h]||l;return n?a.createElement(m,o(o({ref:e},p),{},{components:n})):a.createElement(m,o({ref:e},p))}));function h(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},43861:function(t,e,n){var a=n(67294);class r extends a.Component{render(){const t=/.*#(.*)/.exec(this.props.url)[1];return a.createElement("a",{"aria-hidden":"true",tabindex:"-1",class:"anchor enhancedAnchor_node_modules-@docusaurus-theme-classic-src-theme-Heading-",id:t})}}e.Z=r},2e4:function(t,e,n){n.r(e),n.d(e,{assets:function(){return _},contentTitle:function(){return k},default:function(){return b},frontMatter:function(){return m},metadata:function(){return g},toc:function(){return f}});var a=n(3905),r=n(39130),l=n(43861),o=Object.defineProperty,i=Object.defineProperties,c=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,d=(t,e,n)=>e in t?o(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,h=(t,e)=>{for(var n in e||(e={}))p.call(e,n)&&d(t,n,e[n]);if(u)for(var n of u(e))s.call(e,n)&&d(t,n,e[n]);return t};const m={title:"TouchController"},k=void 0,g={unversionedId:"api/classes/classtouchgfx_1_1_touch_controller",id:"api/classes/classtouchgfx_1_1_touch_controller",title:"TouchController",description:"",source:"@site/docs/api/classes/classtouchgfx_1_1_touch_controller.mdx",sourceDirName:"api/classes",slug:"/api/classes/classtouchgfx_1_1_touch_controller",permalink:"/touchgfx-test.github.io/ja/docs/api/classes/classtouchgfx_1_1_touch_controller",draft:!1,tags:[],version:"current",frontMatter:{title:"TouchController"},sidebar:"docs",previous:{title:"TouchCalibration",permalink:"/touchgfx-test.github.io/ja/docs/api/classes/classtouchgfx_1_1_touch_calibration"},next:{title:"Transition",permalink:"/touchgfx-test.github.io/ja/docs/api/classes/classtouchgfx_1_1_transition"}},_={},f=[{value:"Public Functions",id:"public-functions",level:2},{value:"Public Functions Documentation",id:"public-functions-documentation",level:2},{value:"init",id:"init",level:3},{value:"sampleTouch",id:"sampletouch",level:3},{value:"~TouchController",id:"touchcontroller",level:3}],N={toc:f};function b(t){var e,n=t,{components:o}=n,d=((t,e)=>{var n={};for(var a in t)p.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(null!=t&&u)for(var a of u(t))e.indexOf(a)<0&&s.call(t,a)&&(n[a]=t[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(e=h(h({},N),d),i(e,c({components:o,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"Basic Touch Controller interface. "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Inherited by"),":  ",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_i2_c_touch_controller",mdxType:"Link"},"I2CTouchController"),",  ",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_no_touch_controller",mdxType:"Link"},"NoTouchController"),",  ",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_s_d_l2_touch_controller",mdxType:"Link"},"SDL2TouchController"),",  ",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_s_d_l_touch_controller",mdxType:"Link"},"SDLTouchController")),(0,a.kt)("h2",h({},{id:"public-functions"}),"Public Functions"),(0,a.kt)("div",{class:"function-table",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",h({parentName:"tr"},{align:"right"})),(0,a.kt)("th",h({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",h({parentName:"tr"},{align:"right"}),"virtual","\xa0","void"),(0,a.kt)("td",h({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_touch_controller#function-init",mdxType:"Link"},"init")),"() =0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",h({parentName:"tr"},{align:"right"})),(0,a.kt)("td",h({parentName:"tr"},{align:null}),"Initializes touch controller.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",h({parentName:"tr"},{align:"right"})),(0,a.kt)("td",h({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",h({parentName:"tr"},{align:"right"}),"virtual","\xa0","bool"),(0,a.kt)("td",h({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_touch_controller#function-sampletouch",mdxType:"Link"},"sampleTouch")),"(int32_t & x, int32_t & y) =0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",h({parentName:"tr"},{align:"right"})),(0,a.kt)("td",h({parentName:"tr"},{align:null}),"Checks whether the touch screen is being touched, and if so, what coordinates.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",h({parentName:"tr"},{align:"right"})),(0,a.kt)("td",h({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",h({parentName:"tr"},{align:"right"}),"virtual","\xa0"),(0,a.kt)("td",h({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_touch_controller#function-~touchcontroller",mdxType:"Link"},"~TouchController")),"()")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",h({parentName:"tr"},{align:"right"})),(0,a.kt)("td",h({parentName:"tr"},{align:null}),"Finalizes an instance of the ",(0,a.kt)("a",h({parentName:"td"},{href:"classtouchgfx_1_1_touch_controller"}),"TouchController")," class.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",h({parentName:"tr"},{align:"right"})),(0,a.kt)("td",h({parentName:"tr"},{align:null})))))),(0,a.kt)("h2",h({},{id:"public-functions-documentation"}),"Public Functions Documentation"),(0,a.kt)(l.Z,{url:"classtouchgfx_1_1_touch_controller#function-init",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",h({},{id:"init"}),"init"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",h({parentName:"tr"},{align:null})),(0,a.kt)("th",h({parentName:"tr"},{align:null})),(0,a.kt)("th",h({parentName:"tr"},{align:null})),(0,a.kt)("th",h({parentName:"tr"},{align:null})),(0,a.kt)("th",h({parentName:"tr"},{align:null})),(0,a.kt)("th",h({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",h({parentName:"tr"},{align:null}),"virtual","\xa0","void","\xa0",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_touch_controller#function-init",mdxType:"Link"},"init")),(0,a.kt)("td",h({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",h({parentName:"tr"},{align:null})),(0,a.kt)("td",h({parentName:"tr"},{align:null})),(0,a.kt)("td",h({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",h({parentName:"tr"},{align:null}),"=0"))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"Initializes touch controller. "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Reimplemented by"),": ",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_no_touch_controller#function-init",mdxType:"Link"},"touchgfx::NoTouchController::init"),", ",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_s_d_l2_touch_controller#function-init",mdxType:"Link"},"touchgfx::SDL2TouchController::init"),", ",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_s_d_l_touch_controller#function-init",mdxType:"Link"},"touchgfx::SDLTouchController::init"),", ",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_i2_c_touch_controller#function-init",mdxType:"Link"},"touchgfx::I2CTouchController::init")))),(0,a.kt)(l.Z,{url:"classtouchgfx_1_1_touch_controller#function-sampletouch",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",h({},{id:"sampletouch"}),"sampleTouch"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",h({parentName:"tr"},{align:null})),(0,a.kt)("th",h({parentName:"tr"},{align:null})),(0,a.kt)("th",h({parentName:"tr"},{align:null})),(0,a.kt)("th",h({parentName:"tr"},{align:null})),(0,a.kt)("th",h({parentName:"tr"},{align:null})),(0,a.kt)("th",h({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",h({parentName:"tr"},{align:null}),"virtual","\xa0","bool","\xa0",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_touch_controller#function-sampletouch",mdxType:"Link"},"sampleTouch")),(0,a.kt)("td",h({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",h({parentName:"tr"},{align:null}),"int32_t &"),(0,a.kt)("td",h({parentName:"tr"},{align:null}),"x ,"),(0,a.kt)("td",h({parentName:"tr"},{align:null})),(0,a.kt)("td",h({parentName:"tr"},{align:null}),"=0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",h({parentName:"tr"},{align:null})),(0,a.kt)("td",h({parentName:"tr"},{align:null})),(0,a.kt)("td",h({parentName:"tr"},{align:null}),"int32_t &"),(0,a.kt)("td",h({parentName:"tr"},{align:null}),"y"),(0,a.kt)("td",h({parentName:"tr"},{align:null})),(0,a.kt)("td",h({parentName:"tr"},{align:null}),"=0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",h({parentName:"tr"},{align:null})),(0,a.kt)("td",h({parentName:"tr"},{align:null})),(0,a.kt)("td",h({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",h({parentName:"tr"},{align:null}),"=0"),(0,a.kt)("td",h({parentName:"tr"},{align:null})),(0,a.kt)("td",h({parentName:"tr"},{align:null})))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"Checks whether the touch screen is being touched, and if so, what coordinates. "),(0,a.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,a.kt)("div",{class:"api-content-indented",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",h({parentName:"tr"},{align:null})),(0,a.kt)("th",h({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",h({parentName:"tr"},{align:null}),"x"),(0,a.kt)("td",h({parentName:"tr"},{align:null}),"The x position of the touch.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",h({parentName:"tr"},{align:null}),"y"),(0,a.kt)("td",h({parentName:"tr"},{align:null}),"The y position of the touch."))))),(0,a.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),(0,a.kt)("div",{class:"api-content-indented",markdown:"1"},(0,a.kt)("p",null,"True if a touch has been detected, otherwise false. ")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Reimplemented by"),": ",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_no_touch_controller#function-sampletouch",mdxType:"Link"},"touchgfx::NoTouchController::sampleTouch"),", ",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_s_d_l2_touch_controller#function-sampletouch",mdxType:"Link"},"touchgfx::SDL2TouchController::sampleTouch"),", ",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_s_d_l_touch_controller#function-sampletouch",mdxType:"Link"},"touchgfx::SDLTouchController::sampleTouch"),", ",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_i2_c_touch_controller#function-sampletouch",mdxType:"Link"},"touchgfx::I2CTouchController::sampleTouch")))),(0,a.kt)(l.Z,{url:"classtouchgfx_1_1_touch_controller#function-~touchcontroller",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",h({},{id:"touchcontroller"}),"~TouchController"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",h({parentName:"tr"},{align:null})),(0,a.kt)("th",h({parentName:"tr"},{align:null})),(0,a.kt)("th",h({parentName:"tr"},{align:null})),(0,a.kt)("th",h({parentName:"tr"},{align:null})),(0,a.kt)("th",h({parentName:"tr"},{align:null})),(0,a.kt)("th",h({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",h({parentName:"tr"},{align:null}),"virtual","\xa0",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_touch_controller#function-~touchcontroller",mdxType:"Link"},"~TouchController")),(0,a.kt)("td",h({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",h({parentName:"tr"},{align:null})),(0,a.kt)("td",h({parentName:"tr"},{align:null})),(0,a.kt)("td",h({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",h({parentName:"tr"},{align:null})))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"Finalizes an instance of the ",(0,a.kt)("a",h({parentName:"p"},{href:"classtouchgfx_1_1_touch_controller"}),"TouchController")," class. "))))}b.isMDXComponent=!0}}]);