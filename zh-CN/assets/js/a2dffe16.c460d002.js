"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[1871],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(n),h=a,f=d["".concat(c,".").concat(h)]||d[h]||m[h]||l;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},44035:function(e,t,n){var r=n(67294),a=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,l=e.height,o=(0,a.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:o,target:"_blank"},r.createElement("img",{width:n,height:l,src:o})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:o,target:"_blank"},r.createElement("img",{width:n,height:l,src:o})),r.createElement("p",null,e.children))}},84541:function(e,t,n){n.d(t,{Z:function(){return k}});var r=n(67294),a=n(86010),l=n(99492),o=n(39130),i=n(35096),c=n(33084),u="cardContainer_fWXF",p="cardTitle_rnsV",m="cardDescription_PWke";function d({href:e,children:t}){return r.createElement(o.Z,{href:e,className:(0,a.Z)("card padding--lg",u)},t)}function h({href:e,icon:t,title:n,description:l}){return r.createElement(d,{href:e},r.createElement("h2",{className:(0,a.Z)("text--truncate",p),title:n},t," ",n),l&&r.createElement("p",{className:(0,a.Z)("text--truncate",m),title:l},l))}function f({item:e}){const t=(0,l.Wl)(e);return t?r.createElement(h,{href:t,icon:"\ud83d\uddc3\ufe0f",title:e.label,description:(0,c.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e.items.length})}):null}function s({item:e}){var t;const n=(0,i.Z)(e.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,l.xz)(null!=(t=e.docId)?t:void 0);return r.createElement(h,{href:e.href,icon:n,title:e.label,description:null==a?void 0:a.description})}function g({item:e}){switch(e.type){case"link":return r.createElement(s,{item:e});case"category":return r.createElement(f,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}function k({items:e,className:t}){return r.createElement("section",{className:(0,a.Z)("row",t)},function(e){return e.filter((e=>"category"!==e.type||!!(0,l.Wl)(e)))}(e).map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(g,{item:e})))))}},38379:function(e,t,n){n.r(t),n.d(t,{assets:function(){return b},contentTitle:function(){return g},default:function(){return N},frontMatter:function(){return s},metadata:function(){return k},toc:function(){return v}});var r=n(3905),a=n(44035),l=n(84541),o=n(99492),i=Object.defineProperty,c=Object.defineProperties,u=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,h=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,f=(e,t)=>{for(var n in t||(t={}))m.call(t,n)&&h(e,n,t[n]);if(p)for(var n of p(t))d.call(t,n)&&h(e,n,t[n]);return e};const s={id:"touchgfx-al-development-introduction",title:"TouchGFX\u5f00\u53d1\u7b80\u4ecb"},g=void 0,k={unversionedId:"development/touchgfx-hal-development/touchgfx-al-development-introduction",id:"development/touchgfx-hal-development/touchgfx-al-development-introduction",title:"TouchGFX\u5f00\u53d1\u7b80\u4ecb",description:"",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/touchgfx-hal-development/touchgfx-al-development-introduction.mdx",sourceDirName:"development/touchgfx-hal-development",slug:"/development/touchgfx-hal-development/touchgfx-al-development-introduction",permalink:"/touchgfx-test.github.io/zh-CN/docs/development/touchgfx-hal-development/touchgfx-al-development-introduction",draft:!1,tags:[],version:"current",frontMatter:{id:"touchgfx-al-development-introduction",title:"TouchGFX\u5f00\u53d1\u7b80\u4ecb"},sidebar:"docs",previous:{title:"11. \u95ea\u5b58\u4e0b\u8f7d",permalink:"/touchgfx-test.github.io/zh-CN/docs/development/board-bring-up/how-to/11-flash-loader"},next:{title:"\u62bd\u8c61\u5c42\u67b6\u6784",permalink:"/touchgfx-test.github.io/zh-CN/docs/development/touchgfx-hal-development/touchgfx-architecture"}},b={},v=[{value:"\u62bd\u8c61\u5c42\u7684\u804c\u8d23",id:"responsibilities-of-the-abstraction-layer",level:2},{value:"\u793a\u4f8b\u8bbe\u7f6e: \u4e24\u4e2a\u5e27\u7f13\u5b58\u5e76\u5185\u7f6eLTDC\u7684MCU",id:"example-setup-two-framebuffers---mcu-with-ltdc",level:2}],y={toc:v};function N(e){var t,n=e,{components:i}=n,h=((e,t)=>{var n={};for(var r in e)m.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&p)for(var r of p(e))t.indexOf(r)<0&&d.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=f(f({},y),h),c(t,u({components:i,mdxType:"MDXLayout"}))),(0,r.kt)(a.Z,{imageSource:"/img/development/touchgfx-hal-development/activities-selected-002.png",noShadow:!0,width:"600",mdxType:"Figure"},"\u9879\u76ee\u6d3b\u52a8"),(0,r.kt)("p",null,"TouchGFX\u5e94\u7528\u7a0b\u5e8f\u4e2d\u7684TouchGFX\u62bd\u8c61\u5c42\uff08AL\uff09\u662f\u4f4d\u4e8e\u677f\u542f\u52a8\u9636\u6bb5\u5f00\u53d1\u7684\u677f\u7ea7\u521d\u59cb\u5316\u4ee3\u7801\u4e0eTouchGFX Engine\u4e4b\u95f4\u7684\u8f6f\u4ef6\u7ec4\u4ef6\u3002 \u5176\u4e3b\u8981\u4efb\u52a1\u662f\u5c06\u5f15\u64ce\u4e0e\u5e95\u5c42\u786c\u4ef6\u548c\u64cd\u4f5c\u7cfb\u7edf\u76f8\u7ed3\u5408\u3002 \u8fd9\u901a\u8fc7\u62bd\u8c61\u5e95\u5c42\u786c\u4ef6\u548c\u64cd\u4f5c\u7cfb\u7edf\u7684\u7279\u6027\u6765\u5b8c\u6210\uff0c\u4ee5\u4fbf\u5f15\u64ce\u53ef\u5bf9\u5176\u8fdb\u884c\u7edf\u4e00\u8bbf\u95ee\u53ca\u5904\u7406\u3002"),(0,r.kt)("p",null,"AL\u7531\u4e24\u4e2a\u4e0d\u540c\u7684\u90e8\u5206\u7ec4\u6210\uff0c\u5206\u522b\u4e3a\u786c\u4ef6\u62bd\u8c61\u5c42\uff08HAL\uff09\u548c\u64cd\u4f5c\u7cfb\u7edf\u62bd\u8c61\u5c42\uff08OSAL\uff09\u3002"),(0,r.kt)(a.Z,{imageSource:"/img/development/touchgfx-hal-development/components-selected-002.png",noShadow:!0,width:"600",mdxType:"Figure"},"\u9879\u76ee\u7ec4\u4ef6"),(0,r.kt)("p",null,"\u672c\u8282\u5c06\u6982\u8ff0\u62bd\u8c61\u5c42\u7684\u539f\u7406\u548c\u804c\u8d23\uff0c\u4ee5\u53ca\u5b83\u4e0eTouchGFX Engine\u7684\u4ea4\u4e92\u65b9\u5f0f\u3002 \u4ee5\u4e0b\u5404\u8282\u4ecb\u7ecd\u4e86\u5982\u4f55\u9488\u5bf9\u7279\u5b9a\u786c\u4ef6\u5b9e\u73b0\u4e0a\u8ff0\u76ee\u7684\u7684\u8be6\u7ec6\u4fe1\u606f\u3002"),(0,r.kt)(l.Z,{items:(0,o.jA)().items,mdxType:"DocCardList"}),(0,r.kt)("h2",f({},{id:"responsibilities-of-the-abstraction-layer"}),"\u62bd\u8c61\u5c42\u7684\u804c\u8d23"),(0,r.kt)("p",null,"\u5982\u5728\u57fa\u672c\u6982\u5ff5\u7ae0\u8282\u4e2d\u7684",(0,r.kt)("a",f({parentName:"p"},{href:"../../basic-concepts/rendering"}),"\u4e3b\u5faa\u73af"),"\u90e8\u5206\u6240\u8ff0\uff0cTouchGFX Engine\u5177\u6709\u6267\u884c\u4e09\u4e2a\u57fa\u672c\u6b65\u9aa4\u7684\u4e3b\u5faa\u73af\u3002"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u6536\u96c6\u8f93\u5165\uff08\u89e6\u6478\u5750\u6807\u3001\u6309\u94ae\uff09"),(0,r.kt)("li",{parentName:"ol"},"\u66f4\u65b0\u573a\u666f\u6a21\u578b"),(0,r.kt)("li",{parentName:"ol"},"\u5c06\u573a\u666f\u6a21\u578b\u6e32\u67d3\u5230\u5e27\u7f13\u5b58")),(0,r.kt)("p",null,"\u8fd9\u4e09\u4e2a\u6b65\u9aa4\u4e3a\u5c65\u884cTouchGFX Engine\u7684\u4e3b\u8981\u804c\u8d23\u63d0\u4f9b\u4e86\u4fdd\u969c\uff0c\u5373\u901a\u8fc7\u66f4\u65b0\u5e27\u7f13\u5b58\u6765\u63ed\u793a\u5e94\u7528\u7a0b\u5e8f\u7684\u5f53\u524d\u72b6\u6001\u3002"),(0,r.kt)("p",null,"\u5e27\u7f13\u5b58\u6570\u636e\u5230\u663e\u793a\u5668\u7684\u5b9e\u9645\u4f20\u8f93\u4ee5\u53ca\u5bf9\u5916\u90e8\u8f93\u5165\u7684\u6536\u96c6\u5e76\u975e\u7531\u5f15\u64ce\u76f4\u63a5\u5904\u7406\uff0c\u800c\u540e\u7531\u5f15\u64ce\u59d4\u6258\u7ed9TouchGFX AL\u5b9e\u73b0\u3002"),(0,r.kt)("p",null,"\u4e3b\u5faa\u73af\u5c06\u53cd\u590d\u4e0d\u65ad\u5730\u66f4\u65b0\u5e27\u7f13\u5b58\u6570\u636e\u3002 \u6b64\u8fc7\u7a0b\u5fc5\u987b\u4e0e\u5b9e\u9645\u66f4\u65b0\u9891\u7387\u548c\u663e\u793a\u5668\u5c31\u7eea\u72b6\u6001\u4fdd\u6301\u540c\u6b65\uff0c\u4ee5\u786e\u4fdd\u6240\u6709\u5e27\u5747\u88ab\u4f20\u8f93\u5e76\u663e\u793a\u5728\u663e\u793a\u5668\u4e0a\u3002 \u5982\u679c\u6ca1\u6709\u53d1\u751f\u540c\u6b65\uff0c\u5219\u4e3b\u5faa\u73af\u5c06\u4e0d\u65ad\u66f4\u65b0\uff0c\u5e76\u6709\u53ef\u80fd\u5728\u4f20\u8f93\u4e4b\u524d\u8986\u76d6\u5e27\u7f13\u5b58\u3002 \u6b64\u540c\u6b65\u7531AL\u8d1f\u8d23\u3002"),(0,r.kt)("p",null,"TouchGFX AL\u8fd8\u8d1f\u8d23\u63a7\u5236\u548c\u8bbf\u95ee\u5e27\u7f13\u51b2\u5b58\u50a8\u533a\u3002 \u8fd9\u610f\u5473\u7740\u5e27\u7f13\u51b2\u7684\u6240\u6709\u8bbf\u95ee\u90fd\u901a\u8fc7AL\u8fdb\u884c\u3002"),(0,r.kt)("p",null,"\u5177\u4f53\u800c\u8a00\uff0cTouchGFX AL\u7684\u804c\u8d23\u4e3a\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",f({parentName:"tr"},{align:null}),"\u804c\u8d23"),(0,r.kt)("th",f({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null}),"\u5c06TouchGFX Engine\u4e3b\u5faa\u73af\u4e0e\u663e\u793a\u5668\u4f20\u8f93\u540c\u6b65"),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"\u5f53\u4e0b\u4e00\u5e27\u5df2\u8ba1\u7b97\u5e76\u5728\u53ef\u7528\u7684\u5e27\u7f13\u5b58\u4e2d\u6e32\u67d3\u65f6\uff0c\u5f15\u64ce\u4e3b\u5faa\u73af\u5fc5\u987b\u505c\u6b62\uff0c\u4ece\u800c\u786e\u4fdd\u66f4\u65b0\u7684\u5e27\u7f13\u5b58\u5185\u5bb9\u5728\u88ab\u4f20\u8f93\u5230\u663e\u793a\u5668\u4e4b\u524d\u4e0d\u4f1a\u88ab\u8986\u76d6\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null}),"\u62a5\u544a\u89e6\u6478\u4e0e\u7269\u7406\u6309\u94ae\u4e8b\u4ef6"),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"\u901a\u8fc7\u91c7\u6837\u6765\u786e\u5b9a\u89e6\u6478\u4e8b\u4ef6\u7684\u53d1\u751f\u53ca\u5750\u6807\u4fe1\u606f\u7684\u83b7\u53d6\u3002 \u901a\u8fc7\u91c7\u6837\u6765\u786e\u5b9a\u7269\u7406\u6309\u94ae\u6216\u7c7b\u4f3c\u90e8\u5206\u662f\u5426\u88ab\u6fc0\u6d3b\u3002 \u5411\u5f15\u64ce\u62a5\u544a\u8fd9\u4e9b\u4e8b\u4ef6\u3002 ",(0,r.kt)("br",null),"\u8bf7\u6ce8\u610f\uff0c\u53ef\u901a\u8fc7\u4e0d\u540c\u7684\u673a\u5236\u5c06\u5176\u4ed6\u5916\u90e8\u4e8b\u4ef6\u4f20\u64ad\u5230TouchGFX\u5e94\u7528\u7a0b\u5e8f\u3002 \u5728",(0,r.kt)("a",f({parentName:"td"},{href:"../ui-development/touchgfx-engine-features/backend-communication"}),"\u540e\u7aef\u901a\u4fe1"),"\u7ae0\u8282\u4e86\u89e3\u6709\u5173\u8be5\u4e3b\u9898\u7684\u66f4\u591a\u4fe1\u606f\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null}),"\u540c\u6b65\u5e27\u7f13\u51b2\u8bbf\u95ee"),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"\u5e27\u7f13\u5b58\u7531TouchGFX AL\u8d1f\u8d23\uff0c\u7531\u4e8e\u5b83\u53ef\u80fd\u88ab\u4e0d\u540c\u7684\u6267\u884c\u5355\u5143\uff08\u5982\u4e3b\u5faa\u73af\u7ebf\u7a0b\u548cDMA\uff09\u8bbf\u95ee\uff0cTouchGFX AL\u5fc5\u987b\u63d0\u4f9b\u4e00\u79cd\u4fdd\u62a4\u8be5\u5b58\u50a8\u5668\u7684\u65b9\u5f0f\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null}),"\u62a5\u544a\u4e0b\u4e00\u4e2a\u53ef\u7528\u7684\u5e27\u7f13\u51b2\u533a"),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"AL\u5fc5\u987b\u80fd\u591f\u56de\u7b54\u63a5\u4e0b\u6765\u53ef\u66f4\u65b0\u5f53\u524d\u5e27\u7f13\u51b2\u7684\u54ea\u4e00\u90e8\u5206\u3002 \u5728\u6807\u51c6\u7684\u53cc\u5e27\u7f13\u51b2\u8bbe\u7f6e\u4e2d\uff0c\u59cb\u7ec8\u6709\u4e2a\u5b8c\u6574\u7684\u5e27\u7f13\u51b2\u533a\uff0c\u56e0\u4e3a\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u59cb\u7ec8\u6709\u4e00\u4e2a\u5b8c\u6574\u7684\u5e27\u7f13\u51b2\u533a\u4e13\u7528\u4e8e\u6e32\u67d3\uff0c\u53e6\u4e00\u4e2a\u5e27\u7f13\u51b2\u533a\u7528\u4e8e\u5230\u663e\u793a\u5668\u7684\u4f20\u8f93\u3002 \u5728\u5355\u5e27\u7f13\u5b58\u533a\u6216\u90e8\u5206\u5e27\u7f13\u5b58\u8bbe\u7f6e\u4e2d\uff0c\u60c5\u51b5\u66f4\u590d\u6742\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null}),"\u6267\u884c\u6e32\u67d3\u64cd\u4f5c"),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"\u5728\u6e32\u67d3\u573a\u666f\u6a21\u578b\u65f6\uff0c\u5f15\u64ce\u4e3b\u5faa\u73af\u8bf7\u6c42AL\u6e32\u67d3\u4e00\u90e8\u5206\u3002 \u7279\u5b9aTouchGFX AL\u5b9e\u73b0\u5c06\u5229\u7528\u5e95\u5c42\u786c\u4ef6\u6765\u6e32\u67d3\u56fe\u5f62\u57fa\u5143\u3002 \u4e00\u4e2a\u793a\u4f8b\u4f7f\u7528Chrom-ART\u56fe\u5f62\u52a0\u901f\u5668\u6765\u6e32\u67d3MCU\u4e0a\u7684\u4f4d\u56fe\u3002 TouchGFX\u968f\u9644\u4e13\u4e3a\u6240\u6709\u53ef\u7528\u5e73\u53f0\u800c\u6784\u5efa\u7684\u4f18\u5316\u6e32\u67d3\u65b9\u6cd5\uff0c\u56e0\u6b64\u65e0\u9700\u5bf9\u5176\u8fdb\u884c\u5b9a\u5236\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null}),"\u5904\u7406\u5c06\u5e27\u7f13\u51b2\u4f20\u8f93\u5230\u663e\u793a\u5668"),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"\u5f15\u64ce\u901a\u77e5AL\u5fc5\u987b\u4f20\u8f93\u54ea\u4e2a\u5e27\u7f13\u51b2\u7684\u54ea\u4e00\u90e8\u5206\u3002 AL\u542f\u52a8\u6b64\u4f20\u8f93\uff0c\u786e\u4fdd\u50cf\u7d20\u6700\u7ec8\u51fa\u73b0\u5728\u663e\u793a\u5668\u4e0a\u3002")))),(0,r.kt)("p",null,"\u7531\u4e8eTouchGFX AL\u662f\u4e00\u79cd\u6ca1\u6709\u81ea\u8eab\u7ebf\u7a0b\u6216\u7c7b\u4f3c\u7ebf\u7a0b\u7684\u88ab\u52a8\u8f6f\u4ef6\u6a21\u5757\uff0c\u56e0\u6b64\u5b83\u5fc5\u987b\u901a\u8fc7\u4eceTouchGFX Engine\u4e3b\u5faa\u73af\u8c03\u7528\u7279\u5b9a\u94a9\u5b50\uff08\u51fd\u6570\uff09\u6216\u901a\u8fc7\u4e2d\u65ad\u6765\u6267\u884c\u5176\u64cd\u4f5c\u3002"),(0,r.kt)("p",null,"\u53ef\u7528\u7684\u94a9\u5b50\u548c\u4e2d\u65ad\u96c6\u5982\u4e0b\u6240\u8ff0\u3002"),(0,r.kt)(a.Z,{imageSource:"/img/development/touchgfx-hal-development/al-introduction/al-hooks-00.png",noShadow:!0,mdxType:"Figure"},"\u53ef\u7528\u7684\u94a9\u5b50\u548c\u4e2d\u65ad"),(0,r.kt)("p",null,"\u7531AL\u5f00\u53d1\u4eba\u5458\u6765\u5b9e\u73b0\u8fd9\u4e9b\u94a9\u5b50\uff0c\u4ee5\u4fbf\u5728\u7ed9\u5b9a\u5e95\u5c42\u786c\u4ef6\u548c\u64cd\u4f5c\u7cfb\u7edf\u4e0b\u4f53\u73b0AL\u7684\u804c\u80fd\u3002 \u5982\u679cAL\u5f00\u53d1\u4eba\u5458\u9700\u8981\u5176\u4ed6\u65b9\u6cd5\u6765\u652f\u6301\u804c\u80fd\uff0c\u5219\u5f00\u53d1\u4eba\u5458\u53ef\u4ee5\u8bbe\u7f6e\u4e2d\u65ad\uff0c\u5e76\u5728\u7279\u5b9a\u65f6\u523b\u6fc0\u6d3b\u3002 \u8fd9\u65b9\u9762\u7684\u793a\u4f8b\u901a\u8fc7\u786c\u4ef6\u5b9a\u65f6\u5668\u7ed3\u5408LTDC\u573a\u540c\u6b65\u4e2d\u65ad\u3002 ",(0,r.kt)("em",{parentName:"p"},"\u663e\u793a\u5c31\u7eea"),"\u4e2d\u65ad\u4e3a\u573a\u540c\u6b65\u4e2d\u65ad\u7684\u4e00\u4e2a\u793a\u4f8b\u3002 \u8bf7\u6ce8\u610f\uff0c\u8fd9\u4e9b\u4e2d\u65ad\u7684\u8bbe\u7f6e\u88ab\u89c6\u4e3aAL\u5f00\u53d1\u7684\u4e00\u90e8\u5206\u3002"),(0,r.kt)("h2",f({},{id:"example-setup-two-framebuffers---mcu-with-ltdc"}),"\u793a\u4f8b\u8bbe\u7f6e: \u4e24\u4e2a\u5e27\u7f13\u5b58\u5e76\u5185\u7f6eLTDC\u7684MCU"),(0,r.kt)("p",null,"\u4e00\u79cd\u5e38\u89c1\u8bbe\u7f6e\u662f\u4f7f\u7528\u5177\u6709LTDC\u7684MCU\u7684\u4e24\u4e2a\u5e27\u7f13\u5b58\u3002 \u5728\u8be5\u8bbe\u7f6e\u4e2d\uff0c\u6bcf\u4e2a\u94a9\u5b50\u7684AL\u64cd\u4f5c\u901a\u5e38\u5982\u4e0b\u3002"),(0,r.kt)("p",null,"\u8bbe\u7f6eAL\u4ee5\u54cd\u5e94LTDC VSYNC\u4e2d\u65ad\uff0c\u4ee5\u4fbf\u663e\u793a\u5668\u6bcf\u6b21\u51c6\u5907\u63a5\u6536\u65b0\u5e27\u65f6\u90fd\u6267\u884cI1\u3002 \u8fd9\u7528\u4e8e\u5c06\u4e3b\u5faa\u73af\u4e0e\u663e\u793a\u540c\u6b65\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",f({parentName:"tr"},{align:null}),"\u94a9\u5b50\u548c\u4e2d\u65ad"),(0,r.kt)("th",f({parentName:"tr"},{align:null}),"\u52a8\u4f5c"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null}),"I1: \u663e\u793a\u5c31\u7eea"),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"\u8bbe\u7f6eLTDC VSYNC\u4e2d\u65ad\uff0c\u4ee5\u89e6\u53d1\u8be5\u64cd\u4f5c\u3002",(0,r.kt)("br",null),"\u53d6\u6d88\u963b\u585e\u4e3b\u5faa\u73af\uff0c\u5e76\u542f\u52a8\u5728\u4e0a\u4e00\u5e27\u4e2d\u51c6\u5907\u597d\u7684\u5e27\u7f13\u5b58\u6570\u636e\u4f20\u8f93")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null}),"H1: \u62a5\u544a\u89e6\u6478\u4e0e\u7269\u7406\u6309\u94ae\u4e8b\u4ef6"),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"\u8fd4\u56de\u6709\u5173\u89e6\u6478\u4e8b\u4ef6\u6216\u7269\u7406\u6309\u94ae\u5355\u51fb\u7684\u4efb\u4f55\u4fe1\u606f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null}),"H2: \u83b7\u53d6\u4e0b\u4e00\u4e2a\u53ef\u7528\u7684\u5e27\u7f13\u51b2\u533a"),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"\u4f7f\u7528\u53cc\u7f13\u51b2\u8bbe\u7f6e\uff0c\u53ea\u9700\u8fd4\u56de\u5f53\u524d\u672a\u4f20\u8f93\u81f3\u663e\u793a\u5668\u7684\u5e27\u7f13\u51b2\u7684\u6574\u4e2a\u5e27\u7f13\u51b2\u533a")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null}),"H3: \u6267\u884c\u6e32\u67d3\u64cd\u4f5c"),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"\u53d6\u51b3\u4e8eMCU\u7684\u6027\u80fd\u3002 \u6267\u884c\u5176\u4f59\u7684\u786c\u4ef6\u8f85\u52a9\u6e32\u67d3\u64cd\u4f5c\u548c\u8f6f\u4ef6\u56de\u9000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null}),"H4: \u533a\u57df\u6e32\u67d3\u5b8c\u6210"),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"\u65e0\u64cd\u4f5c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null}),"H5: \u6e32\u67d3\u5b8c\u6210"),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"\u963b\u585e\u4e3b\u5faa\u73af")))),(0,r.kt)("p",null,"\u6b64\u8bbe\u7f6e\u63d0\u4f9b\u4ee5\u4e0b\u6267\u884c\u6d41\u7a0b\uff1a"),(0,r.kt)(a.Z,{imageSource:"/img/development/touchgfx-hal-development/al-introduction/al-actions-00.png",noShadow:!0,mdxType:"Figure"},"\u4f7f\u7528\u4e24\u4e2a\u5e27\u7f13\u5b58\u548c\u5e26\u6709LTDC\u7684MCU\u7684\u8bbe\u7f6e\u4e2d\u7684\u6267\u884c\u6d41\u7a0b"),(0,r.kt)("p",null,"\u8fd9\u91cc\u63cf\u8ff0\u4e86AL\u8bbe\u7f6e\u7684\u603b\u4f53\u8bbe\u8ba1\u3002 \u4ee5\u4e0b\u5404\u8282\u6df1\u5165\u4ecb\u7ecd\u4e86\u5982\u4f55\u5b9e\u73b0\u62bd\u8c61\u5c42\u3002"))}N.isMDXComponent=!0}}]);