"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[8050],{3905:function(t,a,n){n.d(a,{Zo:function(){return p},kt:function(){return s}});var e=n(67294);function r(t,a,n){return a in t?Object.defineProperty(t,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[a]=n,t}function l(t,a){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);a&&(e=e.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),n.push.apply(n,e)}return n}function i(t){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?l(Object(n),!0).forEach((function(a){r(t,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))}))}return t}function o(t,a){if(null==t)return{};var n,e,r=function(t,a){if(null==t)return{};var n,e,r={},l=Object.keys(t);for(e=0;e<l.length;e++)n=l[e],a.indexOf(n)>=0||(r[n]=t[n]);return r}(t,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(e=0;e<l.length;e++)n=l[e],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var m=e.createContext({}),d=function(t){var a=e.useContext(m),n=a;return t&&(n="function"==typeof t?t(a):i(i({},a),t)),n},p=function(t){var a=d(t.components);return e.createElement(m.Provider,{value:a},t.children)},k={inlineCode:"code",wrapper:function(t){var a=t.children;return e.createElement(e.Fragment,{},a)}},u=e.forwardRef((function(t,a){var n=t.components,r=t.mdxType,l=t.originalType,m=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),u=d(n),s=r,f=u["".concat(m,".").concat(s)]||u[s]||k[s]||l;return n?e.createElement(f,i(i({ref:a},p),{},{components:n})):e.createElement(f,i({ref:a},p))}));function s(t,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var m in a)hasOwnProperty.call(a,m)&&(o[m]=a[m]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return e.createElement.apply(null,i)}return e.createElement.apply(null,n)}u.displayName="MDXCreateElement"},43861:function(t,a,n){var e=n(67294);class r extends e.Component{render(){const t=/.*#(.*)/.exec(this.props.url)[1];return e.createElement("a",{"aria-hidden":"true",tabindex:"-1",class:"anchor enhancedAnchor_node_modules-@docusaurus-theme-classic-src-theme-Heading-",id:t})}}a.Z=r},16753:function(t,a,n){n.r(a),n.d(a,{assets:function(){return g},contentTitle:function(){return c},default:function(){return b},frontMatter:function(){return f},metadata:function(){return N},toc:function(){return y}});var e=n(3905),r=n(39130),l=n(43861),i=Object.defineProperty,o=Object.defineProperties,m=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,u=(t,a,n)=>a in t?i(t,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[a]=n,s=(t,a)=>{for(var n in a||(a={}))p.call(a,n)&&u(t,n,a[n]);if(d)for(var n of d(a))k.call(a,n)&&u(t,n,a[n]);return t};const f={title:"DisplayTransformation"},c=void 0,N={unversionedId:"api/classes/classtouchgfx_1_1_display_transformation",id:"api/classes/classtouchgfx_1_1_display_transformation",title:"DisplayTransformation",description:"",source:"@site/docs/api/classes/classtouchgfx_1_1_display_transformation.mdx",sourceDirName:"api/classes",slug:"/api/classes/classtouchgfx_1_1_display_transformation",permalink:"/4.20/docs/api/classes/classtouchgfx_1_1_display_transformation",draft:!1,tags:[],version:"current",frontMatter:{title:"DisplayTransformation"},sidebar:"docs",previous:{title:"DigitalClock",permalink:"/4.20/docs/api/classes/classtouchgfx_1_1_digital_clock"},next:{title:"DMA_Interface",permalink:"/4.20/docs/api/classes/classtouchgfx_1_1_d_m_a___interface"}},g={},y=[{value:"Public Functions",id:"public-functions",level:2},{value:"Public Functions Documentation",id:"public-functions-documentation",level:2},{value:"transformDisplayToFrameBuffer",id:"transformdisplaytoframebuffer",level:3},{value:"transformDisplayToFrameBuffer",id:"transformdisplaytoframebuffer-1",level:3},{value:"transformDisplayToFrameBuffer",id:"transformdisplaytoframebuffer-2",level:3},{value:"transformDisplayToFrameBuffer",id:"transformdisplaytoframebuffer-3",level:3},{value:"transformDisplayToFrameBuffer",id:"transformdisplaytoframebuffer-4",level:3},{value:"transformDisplayToFrameBuffer",id:"transformdisplaytoframebuffer-5",level:3},{value:"transformFrameBufferToDisplay",id:"transformframebuffertodisplay",level:3},{value:"transformFrameBufferToDisplay",id:"transformframebuffertodisplay-1",level:3}],h={toc:y};function b(t){var a,n=t,{components:i}=n,u=((t,a)=>{var n={};for(var e in t)p.call(t,e)&&a.indexOf(e)<0&&(n[e]=t[e]);if(null!=t&&d)for(var e of d(t))a.indexOf(e)<0&&k.call(t,e)&&(n[e]=t[e]);return n})(n,["components"]);return(0,e.kt)("wrapper",(a=s(s({},h),u),o(a,m({components:i,mdxType:"MDXLayout"}))),(0,e.kt)("p",null," Defines transformations from display space to framebuffer space.\nThe display might be (considered) in portrait mode from 0,0 to 272,480, while the actual framebuffer is from 0,0 to 480,272. This class handles the transformations. "),(0,e.kt)("h2",s({},{id:"public-functions"}),"Public Functions"),(0,e.kt)("div",{class:"function-table",markdown:"1"},(0,e.kt)("table",null,(0,e.kt)("thead",{parentName:"table"},(0,e.kt)("tr",{parentName:"thead"},(0,e.kt)("th",s({parentName:"tr"},{align:"right"})),(0,e.kt)("th",s({parentName:"tr"},{align:null})))),(0,e.kt)("tbody",{parentName:"table"},(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",s({parentName:"tr"},{align:"right"}),"void"),(0,e.kt)("td",s({parentName:"tr"},{align:null}),(0,e.kt)("strong",{parentName:"td"},(0,e.kt)(r.Z,{to:"classtouchgfx_1_1_display_transformation#function-transformdisplaytoframebuffer",mdxType:"Link"},"transformDisplayToFrameBuffer")),"(float & x, float & y)")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",s({parentName:"tr"},{align:"right"})),(0,e.kt)("td",s({parentName:"tr"},{align:null}),"Transform x,y from display to framebuffer coordinates.")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",s({parentName:"tr"},{align:"right"})),(0,e.kt)("td",s({parentName:"tr"},{align:null}))),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",s({parentName:"tr"},{align:"right"}),"void"),(0,e.kt)("td",s({parentName:"tr"},{align:null}),(0,e.kt)("strong",{parentName:"td"},(0,e.kt)(r.Z,{to:"classtouchgfx_1_1_display_transformation#function-transformdisplaytoframebuffer",mdxType:"Link"},"transformDisplayToFrameBuffer")),"(float & x, float & y, const ",(0,e.kt)("a",s({parentName:"td"},{href:"classtouchgfx_1_1_rect"}),"Rect")," & in)")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",s({parentName:"tr"},{align:"right"})),(0,e.kt)("td",s({parentName:"tr"},{align:null}),"Transform x,y from coordinates relative to the in rect to framebuffer coordinates.")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",s({parentName:"tr"},{align:"right"})),(0,e.kt)("td",s({parentName:"tr"},{align:null}))),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",s({parentName:"tr"},{align:"right"}),"void"),(0,e.kt)("td",s({parentName:"tr"},{align:null}),(0,e.kt)("strong",{parentName:"td"},(0,e.kt)(r.Z,{to:"classtouchgfx_1_1_display_transformation#function-transformdisplaytoframebuffer",mdxType:"Link"},"transformDisplayToFrameBuffer")),"(int16_t & x, int16_t & y)")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",s({parentName:"tr"},{align:"right"})),(0,e.kt)("td",s({parentName:"tr"},{align:null}),"Transform x,y from display to framebuffer coordinates.")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",s({parentName:"tr"},{align:"right"})),(0,e.kt)("td",s({parentName:"tr"},{align:null}))),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",s({parentName:"tr"},{align:"right"}),"void"),(0,e.kt)("td",s({parentName:"tr"},{align:null}),(0,e.kt)("strong",{parentName:"td"},(0,e.kt)(r.Z,{to:"classtouchgfx_1_1_display_transformation#function-transformdisplaytoframebuffer",mdxType:"Link"},"transformDisplayToFrameBuffer")),"(int16_t & x, int16_t & y, const ",(0,e.kt)("a",s({parentName:"td"},{href:"classtouchgfx_1_1_rect"}),"Rect")," & in)")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",s({parentName:"tr"},{align:"right"})),(0,e.kt)("td",s({parentName:"tr"},{align:null}),"Transform x,y from coordinates relative to the in rect to framebuffer coordinates.")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",s({parentName:"tr"},{align:"right"})),(0,e.kt)("td",s({parentName:"tr"},{align:null}))),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",s({parentName:"tr"},{align:"right"}),"void"),(0,e.kt)("td",s({parentName:"tr"},{align:null}),(0,e.kt)("strong",{parentName:"td"},(0,e.kt)(r.Z,{to:"classtouchgfx_1_1_display_transformation#function-transformdisplaytoframebuffer",mdxType:"Link"},"transformDisplayToFrameBuffer")),"(",(0,e.kt)("a",s({parentName:"td"},{href:"classtouchgfx_1_1_rect"}),"Rect")," & r)")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",s({parentName:"tr"},{align:"right"})),(0,e.kt)("td",s({parentName:"tr"},{align:null}),"Transform rectangle from display to framebuffer coordinates.")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",s({parentName:"tr"},{align:"right"})),(0,e.kt)("td",s({parentName:"tr"},{align:null}))),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",s({parentName:"tr"},{align:"right"}),"void"),(0,e.kt)("td",s({parentName:"tr"},{align:null}),(0,e.kt)("strong",{parentName:"td"},(0,e.kt)(r.Z,{to:"classtouchgfx_1_1_display_transformation#function-transformdisplaytoframebuffer",mdxType:"Link"},"transformDisplayToFrameBuffer")),"(",(0,e.kt)("a",s({parentName:"td"},{href:"classtouchgfx_1_1_rect"}),"Rect")," & r, const ",(0,e.kt)("a",s({parentName:"td"},{href:"classtouchgfx_1_1_rect"}),"Rect")," & in)")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",s({parentName:"tr"},{align:"right"})),(0,e.kt)("td",s({parentName:"tr"},{align:null}),"Transform rectangle r from coordinates relative to the in rect to framebuffer coordinates.")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",s({parentName:"tr"},{align:"right"})),(0,e.kt)("td",s({parentName:"tr"},{align:null}))),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",s({parentName:"tr"},{align:"right"}),"void"),(0,e.kt)("td",s({parentName:"tr"},{align:null}),(0,e.kt)("strong",{parentName:"td"},(0,e.kt)(r.Z,{to:"classtouchgfx_1_1_display_transformation#function-transformframebuffertodisplay",mdxType:"Link"},"transformFrameBufferToDisplay")),"(int16_t & x, int16_t & y)")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",s({parentName:"tr"},{align:"right"})),(0,e.kt)("td",s({parentName:"tr"},{align:null}),"Transform x,y from framebuffer to display coordinates.")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",s({parentName:"tr"},{align:"right"})),(0,e.kt)("td",s({parentName:"tr"},{align:null}))),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",s({parentName:"tr"},{align:"right"}),"void"),(0,e.kt)("td",s({parentName:"tr"},{align:null}),(0,e.kt)("strong",{parentName:"td"},(0,e.kt)(r.Z,{to:"classtouchgfx_1_1_display_transformation#function-transformframebuffertodisplay",mdxType:"Link"},"transformFrameBufferToDisplay")),"(",(0,e.kt)("a",s({parentName:"td"},{href:"classtouchgfx_1_1_rect"}),"Rect")," & r)")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",s({parentName:"tr"},{align:"right"})),(0,e.kt)("td",s({parentName:"tr"},{align:null}),"Transform rectangle from framebuffer to display coordinates.")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",s({parentName:"tr"},{align:"right"})),(0,e.kt)("td",s({parentName:"tr"},{align:null})))))),(0,e.kt)("h2",s({},{id:"public-functions-documentation"}),"Public Functions Documentation"),(0,e.kt)(l.Z,{url:"classtouchgfx_1_1_display_transformation#function-transformdisplaytoframebuffer",mdxType:"DoxybookHeaderLink"}),(0,e.kt)("h3",s({},{id:"transformdisplaytoframebuffer"}),"transformDisplayToFrameBuffer"),(0,e.kt)("div",{class:"api-container",markdown:"1"},(0,e.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,e.kt)("table",null,(0,e.kt)("thead",{parentName:"table"},(0,e.kt)("tr",{parentName:"thead"},(0,e.kt)("th",s({parentName:"tr"},{align:null})),(0,e.kt)("th",s({parentName:"tr"},{align:null})),(0,e.kt)("th",s({parentName:"tr"},{align:null})),(0,e.kt)("th",s({parentName:"tr"},{align:null})),(0,e.kt)("th",s({parentName:"tr"},{align:null})),(0,e.kt)("th",s({parentName:"tr"},{align:null})))),(0,e.kt)("tbody",{parentName:"table"},(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",s({parentName:"tr"},{align:null}),"static","\xa0","void","\xa0",(0,e.kt)(r.Z,{to:"classtouchgfx_1_1_display_transformation#function-transformdisplaytoframebuffer",mdxType:"Link"},"transformDisplayToFrameBuffer")),(0,e.kt)("td",s({parentName:"tr"},{align:null}),"("),(0,e.kt)("td",s({parentName:"tr"},{align:null}),"float &"),(0,e.kt)("td",s({parentName:"tr"},{align:null}),"x ,"),(0,e.kt)("td",s({parentName:"tr"},{align:null})),(0,e.kt)("td",s({parentName:"tr"},{align:null}))),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",s({parentName:"tr"},{align:null})),(0,e.kt)("td",s({parentName:"tr"},{align:null})),(0,e.kt)("td",s({parentName:"tr"},{align:null}),"float &"),(0,e.kt)("td",s({parentName:"tr"},{align:null}),"y"),(0,e.kt)("td",s({parentName:"tr"},{align:null})),(0,e.kt)("td",s({parentName:"tr"},{align:null}))),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",s({parentName:"tr"},{align:null})),(0,e.kt)("td",s({parentName:"tr"},{align:null})),(0,e.kt)("td",s({parentName:"tr"},{align:null}),")"),(0,e.kt)("td",s({parentName:"tr"},{align:null})),(0,e.kt)("td",s({parentName:"tr"},{align:null})),(0,e.kt)("td",s({parentName:"tr"},{align:null})))))),(0,e.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,e.kt)("p",null,"Transform x,y from display to framebuffer coordinates. "),(0,e.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,e.kt)("div",{class:"api-content-indented",markdown:"1"},(0,e.kt)("table",null,(0,e.kt)("thead",{parentName:"table"},(0,e.kt)("tr",{parentName:"thead"},(0,e.kt)("th",s({parentName:"tr"},{align:null})),(0,e.kt)("th",s({parentName:"tr"},{align:null})))),(0,e.kt)("tbody",{parentName:"table"},(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",s({parentName:"tr"},{align:null}),"x"),(0,e.kt)("td",s({parentName:"tr"},{align:null}),"the x part to translate.")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",s({parentName:"tr"},{align:null}),"y"),(0,e.kt)("td",s({parentName:"tr"},{align:null}),"the y part to translate."))))))),(0,e.kt)(l.Z,{url:"classtouchgfx_1_1_display_transformation#function-transformdisplaytoframebuffer",mdxType:"DoxybookHeaderLink"}),(0,e.kt)("h3",s({},{id:"transformdisplaytoframebuffer-1"}),"transformDisplayToFrameBuffer"),(0,e.kt)("div",{class:"api-container",markdown:"1"},(0,e.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,e.kt)("table",null,(0,e.kt)("thead",{parentName:"table"},(0,e.kt)("tr",{parentName:"thead"},(0,e.kt)("th",s({parentName:"tr"},{align:null})),(0,e.kt)("th",s({parentName:"tr"},{align:null})),(0,e.kt)("th",s({parentName:"tr"},{align:null})),(0,e.kt)("th",s({parentName:"tr"},{align:null})),(0,e.kt)("th",s({parentName:"tr"},{align:null})),(0,e.kt)("th",s({parentName:"tr"},{align:null})))),(0,e.kt)("tbody",{parentName:"table"},(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",s({parentName:"tr"},{align:null}),"static","\xa0","void","\xa0",(0,e.kt)(r.Z,{to:"classtouchgfx_1_1_display_transformation#function-transformdisplaytoframebuffer",mdxType:"Link"},"transformDisplayToFrameBuffer")),(0,e.kt)("td",s({parentName:"tr"},{align:null}),"("),(0,e.kt)("td",s({parentName:"tr"},{align:null}),"float &"),(0,e.kt)("td",s({parentName:"tr"},{align:null}),"x ,"),(0,e.kt)("td",s({parentName:"tr"},{align:null})),(0,e.kt)("td",s({parentName:"tr"},{align:null}))),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",s({parentName:"tr"},{align:null})),(0,e.kt)("td",s({parentName:"tr"},{align:null})),(0,e.kt)("td",s({parentName:"tr"},{align:null}),"float &"),(0,e.kt)("td",s({parentName:"tr"},{align:null}),"y ,"),(0,e.kt)("td",s({parentName:"tr"},{align:null})),(0,e.kt)("td",s({parentName:"tr"},{align:null}))),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",s({parentName:"tr"},{align:null})),(0,e.kt)("td",s({parentName:"tr"},{align:null})),(0,e.kt)("td",s({parentName:"tr"},{align:null}),"const ",(0,e.kt)("a",s({parentName:"td"},{href:"classtouchgfx_1_1_rect"}),"Rect")," &"),(0,e.kt)("td",s({parentName:"tr"},{align:null}),"in"),(0,e.kt)("td",s({parentName:"tr"},{align:null})),(0,e.kt)("td",s({parentName:"tr"},{align:null}))),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",s({parentName:"tr"},{align:null})),(0,e.kt)("td",s({parentName:"tr"},{align:null})),(0,e.kt)("td",s({parentName:"tr"},{align:null}),")"),(0,e.kt)("td",s({parentName:"tr"},{align:null})),(0,e.kt)("td",s({parentName:"tr"},{align:null})),(0,e.kt)("td",s({parentName:"tr"},{align:null})))))),(0,e.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,e.kt)("p",null,"Transform x,y from coordinates relative to the in rect to framebuffer coordinates. "),(0,e.kt)("p",null,"Transform x,y from coordinates relative to the in rect to framebuffer coordinates."),(0,e.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,e.kt)("div",{class:"api-content-indented",markdown:"1"},(0,e.kt)("table",null,(0,e.kt)("thead",{parentName:"table"},(0,e.kt)("tr",{parentName:"thead"},(0,e.kt)("th",s({parentName:"tr"},{align:null})),(0,e.kt)("th",s({parentName:"tr"},{align:null})))),(0,e.kt)("tbody",{parentName:"table"},(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",s({parentName:"tr"},{align:null}),"x"),(0,e.kt)("td",s({parentName:"tr"},{align:null}),"the x part to translate.")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",s({parentName:"tr"},{align:null}),"y"),(0,e.kt)("td",s({parentName:"tr"},{align:null}),"the y part to translate.")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",s({parentName:"tr"},{align:null}),"in"),(0,e.kt)("td",s({parentName:"tr"},{align:null}),"the rectangle defining the coordinate space."))))))),(0,e.kt)(l.Z,{url:"classtouchgfx_1_1_display_transformation#function-transformdisplaytoframebuffer",mdxType:"DoxybookHeaderLink"}),(0,e.kt)("h3",s({},{id:"transformdisplaytoframebuffer-2"}),"transformDisplayToFrameBuffer"),(0,e.kt)("div",{class:"api-container",markdown:"1"},(0,e.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,e.kt)("table",null,(0,e.kt)("thead",{parentName:"table"},(0,e.kt)("tr",{parentName:"thead"},(0,e.kt)("th",s({parentName:"tr"},{align:null})),(0,e.kt)("th",s({parentName:"tr"},{align:null})),(0,e.kt)("th",s({parentName:"tr"},{align:null})),(0,e.kt)("th",s({parentName:"tr"},{align:null})),(0,e.kt)("th",s({parentName:"tr"},{align:null})),(0,e.kt)("th",s({parentName:"tr"},{align:null})))),(0,e.kt)("tbody",{parentName:"table"},(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",s({parentName:"tr"},{align:null}),"static","\xa0","void","\xa0",(0,e.kt)(r.Z,{to:"classtouchgfx_1_1_display_transformation#function-transformdisplaytoframebuffer",mdxType:"Link"},"transformDisplayToFrameBuffer")),(0,e.kt)("td",s({parentName:"tr"},{align:null}),"("),(0,e.kt)("td",s({parentName:"tr"},{align:null}),"int16_t &"),(0,e.kt)("td",s({parentName:"tr"},{align:null}),"x ,"),(0,e.kt)("td",s({parentName:"tr"},{align:null})),(0,e.kt)("td",s({parentName:"tr"},{align:null}))),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",s({parentName:"tr"},{align:null})),(0,e.kt)("td",s({parentName:"tr"},{align:null})),(0,e.kt)("td",s({parentName:"tr"},{align:null}),"int16_t &"),(0,e.kt)("td",s({parentName:"tr"},{align:null}),"y"),(0,e.kt)("td",s({parentName:"tr"},{align:null})),(0,e.kt)("td",s({parentName:"tr"},{align:null}))),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",s({parentName:"tr"},{align:null})),(0,e.kt)("td",s({parentName:"tr"},{align:null})),(0,e.kt)("td",s({parentName:"tr"},{align:null}),")"),(0,e.kt)("td",s({parentName:"tr"},{align:null})),(0,e.kt)("td",s({parentName:"tr"},{align:null})),(0,e.kt)("td",s({parentName:"tr"},{align:null})))))),(0,e.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,e.kt)("p",null,"Transform x,y from display to framebuffer coordinates. "),(0,e.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,e.kt)("div",{class:"api-content-indented",markdown:"1"},(0,e.kt)("table",null,(0,e.kt)("thead",{parentName:"table"},(0,e.kt)("tr",{parentName:"thead"},(0,e.kt)("th",s({parentName:"tr"},{align:null})),(0,e.kt)("th",s({parentName:"tr"},{align:null})))),(0,e.kt)("tbody",{parentName:"table"},(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",s({parentName:"tr"},{align:null}),"x"),(0,e.kt)("td",s({parentName:"tr"},{align:null}),"the x part to translate.")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",s({parentName:"tr"},{align:null}),"y"),(0,e.kt)("td",s({parentName:"tr"},{align:null}),"the y part to translate."))))))),(0,e.kt)(l.Z,{url:"classtouchgfx_1_1_display_transformation#function-transformdisplaytoframebuffer",mdxType:"DoxybookHeaderLink"}),(0,e.kt)("h3",s({},{id:"transformdisplaytoframebuffer-3"}),"transformDisplayToFrameBuffer"),(0,e.kt)("div",{class:"api-container",markdown:"1"},(0,e.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,e.kt)("table",null,(0,e.kt)("thead",{parentName:"table"},(0,e.kt)("tr",{parentName:"thead"},(0,e.kt)("th",s({parentName:"tr"},{align:null})),(0,e.kt)("th",s({parentName:"tr"},{align:null})),(0,e.kt)("th",s({parentName:"tr"},{align:null})),(0,e.kt)("th",s({parentName:"tr"},{align:null})),(0,e.kt)("th",s({parentName:"tr"},{align:null})),(0,e.kt)("th",s({parentName:"tr"},{align:null})))),(0,e.kt)("tbody",{parentName:"table"},(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",s({parentName:"tr"},{align:null}),"static","\xa0","void","\xa0",(0,e.kt)(r.Z,{to:"classtouchgfx_1_1_display_transformation#function-transformdisplaytoframebuffer",mdxType:"Link"},"transformDisplayToFrameBuffer")),(0,e.kt)("td",s({parentName:"tr"},{align:null}),"("),(0,e.kt)("td",s({parentName:"tr"},{align:null}),"int16_t &"),(0,e.kt)("td",s({parentName:"tr"},{align:null}),"x ,"),(0,e.kt)("td",s({parentName:"tr"},{align:null})),(0,e.kt)("td",s({parentName:"tr"},{align:null}))),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",s({parentName:"tr"},{align:null})),(0,e.kt)("td",s({parentName:"tr"},{align:null})),(0,e.kt)("td",s({parentName:"tr"},{align:null}),"int16_t &"),(0,e.kt)("td",s({parentName:"tr"},{align:null}),"y ,"),(0,e.kt)("td",s({parentName:"tr"},{align:null})),(0,e.kt)("td",s({parentName:"tr"},{align:null}))),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",s({parentName:"tr"},{align:null})),(0,e.kt)("td",s({parentName:"tr"},{align:null})),(0,e.kt)("td",s({parentName:"tr"},{align:null}),"const ",(0,e.kt)("a",s({parentName:"td"},{href:"classtouchgfx_1_1_rect"}),"Rect")," &"),(0,e.kt)("td",s({parentName:"tr"},{align:null}),"in"),(0,e.kt)("td",s({parentName:"tr"},{align:null})),(0,e.kt)("td",s({parentName:"tr"},{align:null}))),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",s({parentName:"tr"},{align:null})),(0,e.kt)("td",s({parentName:"tr"},{align:null})),(0,e.kt)("td",s({parentName:"tr"},{align:null}),")"),(0,e.kt)("td",s({parentName:"tr"},{align:null})),(0,e.kt)("td",s({parentName:"tr"},{align:null})),(0,e.kt)("td",s({parentName:"tr"},{align:null})))))),(0,e.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,e.kt)("p",null,"Transform x,y from coordinates relative to the in rect to framebuffer coordinates. "),(0,e.kt)("p",null,"Transform x,y from coordinates relative to the in rect to framebuffer coordinates."),(0,e.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,e.kt)("div",{class:"api-content-indented",markdown:"1"},(0,e.kt)("table",null,(0,e.kt)("thead",{parentName:"table"},(0,e.kt)("tr",{parentName:"thead"},(0,e.kt)("th",s({parentName:"tr"},{align:null})),(0,e.kt)("th",s({parentName:"tr"},{align:null})))),(0,e.kt)("tbody",{parentName:"table"},(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",s({parentName:"tr"},{align:null}),"x"),(0,e.kt)("td",s({parentName:"tr"},{align:null}),"the x part to translate.")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",s({parentName:"tr"},{align:null}),"y"),(0,e.kt)("td",s({parentName:"tr"},{align:null}),"the y part to translate.")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",s({parentName:"tr"},{align:null}),"in"),(0,e.kt)("td",s({parentName:"tr"},{align:null}),"the rectangle defining the coordinate space."))))))),(0,e.kt)(l.Z,{url:"classtouchgfx_1_1_display_transformation#function-transformdisplaytoframebuffer",mdxType:"DoxybookHeaderLink"}),(0,e.kt)("h3",s({},{id:"transformdisplaytoframebuffer-4"}),"transformDisplayToFrameBuffer"),(0,e.kt)("div",{class:"api-container",markdown:"1"},(0,e.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,e.kt)("table",null,(0,e.kt)("thead",{parentName:"table"},(0,e.kt)("tr",{parentName:"thead"},(0,e.kt)("th",s({parentName:"tr"},{align:null})),(0,e.kt)("th",s({parentName:"tr"},{align:null})),(0,e.kt)("th",s({parentName:"tr"},{align:null})),(0,e.kt)("th",s({parentName:"tr"},{align:null})),(0,e.kt)("th",s({parentName:"tr"},{align:null})),(0,e.kt)("th",s({parentName:"tr"},{align:null})))),(0,e.kt)("tbody",{parentName:"table"},(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",s({parentName:"tr"},{align:null}),"static","\xa0","void","\xa0",(0,e.kt)(r.Z,{to:"classtouchgfx_1_1_display_transformation#function-transformdisplaytoframebuffer",mdxType:"Link"},"transformDisplayToFrameBuffer")),(0,e.kt)("td",s({parentName:"tr"},{align:null}),"("),(0,e.kt)("td",s({parentName:"tr"},{align:null}),(0,e.kt)("a",s({parentName:"td"},{href:"classtouchgfx_1_1_rect"}),"Rect")," &"),(0,e.kt)("td",s({parentName:"tr"},{align:null}),"r"),(0,e.kt)("td",s({parentName:"tr"},{align:null}),")"),(0,e.kt)("td",s({parentName:"tr"},{align:null}))),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",s({parentName:"tr"},{align:null})),(0,e.kt)("td",s({parentName:"tr"},{align:null})),(0,e.kt)("td",s({parentName:"tr"},{align:null})),(0,e.kt)("td",s({parentName:"tr"},{align:null})),(0,e.kt)("td",s({parentName:"tr"},{align:null})),(0,e.kt)("td",s({parentName:"tr"},{align:null})))))),(0,e.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,e.kt)("p",null,"Transform rectangle from display to framebuffer coordinates. "),(0,e.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,e.kt)("div",{class:"api-content-indented",markdown:"1"},(0,e.kt)("table",null,(0,e.kt)("thead",{parentName:"table"},(0,e.kt)("tr",{parentName:"thead"},(0,e.kt)("th",s({parentName:"tr"},{align:null})),(0,e.kt)("th",s({parentName:"tr"},{align:null})))),(0,e.kt)("tbody",{parentName:"table"},(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",s({parentName:"tr"},{align:null}),"r"),(0,e.kt)("td",s({parentName:"tr"},{align:null}),"the rectangle to translate."))))))),(0,e.kt)(l.Z,{url:"classtouchgfx_1_1_display_transformation#function-transformdisplaytoframebuffer",mdxType:"DoxybookHeaderLink"}),(0,e.kt)("h3",s({},{id:"transformdisplaytoframebuffer-5"}),"transformDisplayToFrameBuffer"),(0,e.kt)("div",{class:"api-container",markdown:"1"},(0,e.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,e.kt)("table",null,(0,e.kt)("thead",{parentName:"table"},(0,e.kt)("tr",{parentName:"thead"},(0,e.kt)("th",s({parentName:"tr"},{align:null})),(0,e.kt)("th",s({parentName:"tr"},{align:null})),(0,e.kt)("th",s({parentName:"tr"},{align:null})),(0,e.kt)("th",s({parentName:"tr"},{align:null})),(0,e.kt)("th",s({parentName:"tr"},{align:null})),(0,e.kt)("th",s({parentName:"tr"},{align:null})))),(0,e.kt)("tbody",{parentName:"table"},(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",s({parentName:"tr"},{align:null}),"static","\xa0","void","\xa0",(0,e.kt)(r.Z,{to:"classtouchgfx_1_1_display_transformation#function-transformdisplaytoframebuffer",mdxType:"Link"},"transformDisplayToFrameBuffer")),(0,e.kt)("td",s({parentName:"tr"},{align:null}),"("),(0,e.kt)("td",s({parentName:"tr"},{align:null}),(0,e.kt)("a",s({parentName:"td"},{href:"classtouchgfx_1_1_rect"}),"Rect")," &"),(0,e.kt)("td",s({parentName:"tr"},{align:null}),"r ,"),(0,e.kt)("td",s({parentName:"tr"},{align:null})),(0,e.kt)("td",s({parentName:"tr"},{align:null}))),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",s({parentName:"tr"},{align:null})),(0,e.kt)("td",s({parentName:"tr"},{align:null})),(0,e.kt)("td",s({parentName:"tr"},{align:null}),"const ",(0,e.kt)("a",s({parentName:"td"},{href:"classtouchgfx_1_1_rect"}),"Rect")," &"),(0,e.kt)("td",s({parentName:"tr"},{align:null}),"in"),(0,e.kt)("td",s({parentName:"tr"},{align:null})),(0,e.kt)("td",s({parentName:"tr"},{align:null}))),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",s({parentName:"tr"},{align:null})),(0,e.kt)("td",s({parentName:"tr"},{align:null})),(0,e.kt)("td",s({parentName:"tr"},{align:null}),")"),(0,e.kt)("td",s({parentName:"tr"},{align:null})),(0,e.kt)("td",s({parentName:"tr"},{align:null})),(0,e.kt)("td",s({parentName:"tr"},{align:null})))))),(0,e.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,e.kt)("p",null,"Transform rectangle r from coordinates relative to the in rect to framebuffer coordinates. "),(0,e.kt)("p",null,"Transform rectangle r from coordinates relative to the in rect to framebuffer coordinates."),(0,e.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,e.kt)("div",{class:"api-content-indented",markdown:"1"},(0,e.kt)("table",null,(0,e.kt)("thead",{parentName:"table"},(0,e.kt)("tr",{parentName:"thead"},(0,e.kt)("th",s({parentName:"tr"},{align:null})),(0,e.kt)("th",s({parentName:"tr"},{align:null})))),(0,e.kt)("tbody",{parentName:"table"},(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",s({parentName:"tr"},{align:null}),"r"),(0,e.kt)("td",s({parentName:"tr"},{align:null}),"the rectangle to translate.")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",s({parentName:"tr"},{align:null}),"in"),(0,e.kt)("td",s({parentName:"tr"},{align:null}),"the rectangle defining the coordinate space."))))))),(0,e.kt)(l.Z,{url:"classtouchgfx_1_1_display_transformation#function-transformframebuffertodisplay",mdxType:"DoxybookHeaderLink"}),(0,e.kt)("h3",s({},{id:"transformframebuffertodisplay"}),"transformFrameBufferToDisplay"),(0,e.kt)("div",{class:"api-container",markdown:"1"},(0,e.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,e.kt)("table",null,(0,e.kt)("thead",{parentName:"table"},(0,e.kt)("tr",{parentName:"thead"},(0,e.kt)("th",s({parentName:"tr"},{align:null})),(0,e.kt)("th",s({parentName:"tr"},{align:null})),(0,e.kt)("th",s({parentName:"tr"},{align:null})),(0,e.kt)("th",s({parentName:"tr"},{align:null})),(0,e.kt)("th",s({parentName:"tr"},{align:null})),(0,e.kt)("th",s({parentName:"tr"},{align:null})))),(0,e.kt)("tbody",{parentName:"table"},(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",s({parentName:"tr"},{align:null}),"static","\xa0","void","\xa0",(0,e.kt)(r.Z,{to:"classtouchgfx_1_1_display_transformation#function-transformframebuffertodisplay",mdxType:"Link"},"transformFrameBufferToDisplay")),(0,e.kt)("td",s({parentName:"tr"},{align:null}),"("),(0,e.kt)("td",s({parentName:"tr"},{align:null}),"int16_t &"),(0,e.kt)("td",s({parentName:"tr"},{align:null}),"x ,"),(0,e.kt)("td",s({parentName:"tr"},{align:null})),(0,e.kt)("td",s({parentName:"tr"},{align:null}))),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",s({parentName:"tr"},{align:null})),(0,e.kt)("td",s({parentName:"tr"},{align:null})),(0,e.kt)("td",s({parentName:"tr"},{align:null}),"int16_t &"),(0,e.kt)("td",s({parentName:"tr"},{align:null}),"y"),(0,e.kt)("td",s({parentName:"tr"},{align:null})),(0,e.kt)("td",s({parentName:"tr"},{align:null}))),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",s({parentName:"tr"},{align:null})),(0,e.kt)("td",s({parentName:"tr"},{align:null})),(0,e.kt)("td",s({parentName:"tr"},{align:null}),")"),(0,e.kt)("td",s({parentName:"tr"},{align:null})),(0,e.kt)("td",s({parentName:"tr"},{align:null})),(0,e.kt)("td",s({parentName:"tr"},{align:null})))))),(0,e.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,e.kt)("p",null,"Transform x,y from framebuffer to display coordinates. "),(0,e.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,e.kt)("div",{class:"api-content-indented",markdown:"1"},(0,e.kt)("table",null,(0,e.kt)("thead",{parentName:"table"},(0,e.kt)("tr",{parentName:"thead"},(0,e.kt)("th",s({parentName:"tr"},{align:null})),(0,e.kt)("th",s({parentName:"tr"},{align:null})))),(0,e.kt)("tbody",{parentName:"table"},(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",s({parentName:"tr"},{align:null}),"x"),(0,e.kt)("td",s({parentName:"tr"},{align:null}),"the x part to translate.")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",s({parentName:"tr"},{align:null}),"y"),(0,e.kt)("td",s({parentName:"tr"},{align:null}),"the y part to translate."))))))),(0,e.kt)(l.Z,{url:"classtouchgfx_1_1_display_transformation#function-transformframebuffertodisplay",mdxType:"DoxybookHeaderLink"}),(0,e.kt)("h3",s({},{id:"transformframebuffertodisplay-1"}),"transformFrameBufferToDisplay"),(0,e.kt)("div",{class:"api-container",markdown:"1"},(0,e.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,e.kt)("table",null,(0,e.kt)("thead",{parentName:"table"},(0,e.kt)("tr",{parentName:"thead"},(0,e.kt)("th",s({parentName:"tr"},{align:null})),(0,e.kt)("th",s({parentName:"tr"},{align:null})),(0,e.kt)("th",s({parentName:"tr"},{align:null})),(0,e.kt)("th",s({parentName:"tr"},{align:null})),(0,e.kt)("th",s({parentName:"tr"},{align:null})),(0,e.kt)("th",s({parentName:"tr"},{align:null})))),(0,e.kt)("tbody",{parentName:"table"},(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",s({parentName:"tr"},{align:null}),"static","\xa0","void","\xa0",(0,e.kt)(r.Z,{to:"classtouchgfx_1_1_display_transformation#function-transformframebuffertodisplay",mdxType:"Link"},"transformFrameBufferToDisplay")),(0,e.kt)("td",s({parentName:"tr"},{align:null}),"("),(0,e.kt)("td",s({parentName:"tr"},{align:null}),(0,e.kt)("a",s({parentName:"td"},{href:"classtouchgfx_1_1_rect"}),"Rect")," &"),(0,e.kt)("td",s({parentName:"tr"},{align:null}),"r"),(0,e.kt)("td",s({parentName:"tr"},{align:null}),")"),(0,e.kt)("td",s({parentName:"tr"},{align:null}))),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",s({parentName:"tr"},{align:null})),(0,e.kt)("td",s({parentName:"tr"},{align:null})),(0,e.kt)("td",s({parentName:"tr"},{align:null})),(0,e.kt)("td",s({parentName:"tr"},{align:null})),(0,e.kt)("td",s({parentName:"tr"},{align:null})),(0,e.kt)("td",s({parentName:"tr"},{align:null})))))),(0,e.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,e.kt)("p",null,"Transform rectangle from framebuffer to display coordinates. "),(0,e.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,e.kt)("div",{class:"api-content-indented",markdown:"1"},(0,e.kt)("table",null,(0,e.kt)("thead",{parentName:"table"},(0,e.kt)("tr",{parentName:"thead"},(0,e.kt)("th",s({parentName:"tr"},{align:null})),(0,e.kt)("th",s({parentName:"tr"},{align:null})))),(0,e.kt)("tbody",{parentName:"table"},(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",s({parentName:"tr"},{align:null}),"r"),(0,e.kt)("td",s({parentName:"tr"},{align:null}),"the rectangle to translate."))))))))}b.isMDXComponent=!0}}]);