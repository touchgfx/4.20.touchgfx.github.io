"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[4224],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return s}});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(n),s=l,h=m["".concat(u,".").concat(s)]||m[s]||d[s]||a;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function s(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},70814:function(e,t,n){var r=n(67294),l=n(88678);const a=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},r.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}));class o extends r.Component{render(){return r.createElement(l.Z,{color:"var(--highlight-color-caution)",header:"Caution",type:"caution",icon:a},this.props.children)}}t.Z=o},22425:function(e,t,n){var r=n(67294);class l extends r.Component{render(){return r.createElement("div",{className:"code-header"},r.createElement("div",null,r.createElement("h5",null,this.props.children)))}}t.Z=l},44035:function(e,t,n){var r=n(67294),l=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,a=e.height,o=(0,l.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:o,target:"_blank"},r.createElement("img",{width:n,height:a,src:o})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:o,target:"_blank"},r.createElement("img",{width:n,height:a,src:o})),r.createElement("p",null,e.children))}},29415:function(e,t,n){var r=n(67294),l=n(88678);const a=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class o extends r.Component{render(){return r.createElement(l.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:a},this.props.children)}}t.Z=o},88678:function(e,t,n){var r=n(67294);class l extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{className:e},r.createElement("div",{className:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{className:"highlight-content"},this.props.children))}}t.Z=l},68896:function(e,t,n){n.r(t),n.d(t,{assets:function(){return M},contentTitle:function(){return k},default:function(){return S},frontMatter:function(){return v},metadata:function(){return f},toc:function(){return w}});var r=n(3905),l=n(44035),a=n(29415),o=n(39130),i=n(22425),u=n(70814),c=Object.defineProperty,p=Object.defineProperties,d=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,b=(e,t,n)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,g=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&b(e,n,t[n]);if(m)for(var n of m(t))h.call(t,n)&&b(e,n,t[n]);return e};const v={id:"01-create-project",title:"1. \u5275\u5efa\u5c08\u6848",sidebar_label:"1. \u5275\u5efa\u5c08\u6848"},k=void 0,f={unversionedId:"development/board-bring-up/how-to/01-create-project",id:"development/board-bring-up/how-to/01-create-project",title:"1. \u5275\u5efa\u5c08\u6848",description:"",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/development/board-bring-up/how-to/01-create-project.mdx",sourceDirName:"development/board-bring-up/how-to",slug:"/development/board-bring-up/how-to/01-create-project",permalink:"/4.20/zh-TW/docs/development/board-bring-up/how-to/01-create-project",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"01-create-project",title:"1. \u5275\u5efa\u5c08\u6848",sidebar_label:"1. \u5275\u5efa\u5c08\u6848"},sidebar:"docs",previous:{title:"\u642d\u5efa\u958b\u767c\u677f",permalink:"/4.20/zh-TW/docs/development/board-bring-up/board-introduction"},next:{title:"2. CPU\u7684\u57f7\u884c",permalink:"/4.20/zh-TW/docs/development/board-bring-up/how-to/02-cpu-running"}},M={},w=[{value:"\u52d5\u6a5f",id:"motivation",level:2},{value:"\u76ee\u6a19",id:"goal",level:2},{value:"\u9a57\u8b49",id:"verification",level:3},{value:"\u5148\u6c7a\u689d\u4ef6",id:"prerequisites",level:2},{value:"\u57f7\u884c",id:"do",level:2},{value:"\u4f7f\u7528\u8005\u4ee3\u7a0b\u5f0f\u78bc\u5340\u6bb5",id:"user-code-sections",level:3},{value:"\u9032\u4e00\u6b65\u95b1\u8b80",id:"further-reading",level:2}],y={toc:w};function S(e){var t,n=e,{components:c}=n,b=((e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&m)for(var r of m(e))t.indexOf(r)<0&&h.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=g(g({},y),b),p(t,d({components:c,mdxType:"MDXLayout"}))),(0,r.kt)("h2",g({},{id:"motivation"}),"\u52d5\u6a5f"),(0,r.kt)("p",null,"\u5728\u672c\u7bc0\u4e2d\uff0c\u6211\u5011\u5c07\u4f7f\u7528STM32CubeMX\u751f\u6210\u7279\u5b9aMCU\u7684\u5de5\u7a0b\u5c08\u6848\u3002 \u8a72\u5c08\u6848\u5c07\u4f5c\u70ba\u672c\u4f7f\u7528\u6307\u5357\u4e2d\u7684\u5176\u9918\u6b65\u9a5f\u7684\u57fa\u790e\u3002"),(0,r.kt)("p",null,"\u6211\u5011\u5c07\u5728\u63a5\u4e0b\u4f86\u7684\u6b65\u9a5f\u4e2d\u4f7f\u7528STM32CubeMX\u6539\u5584\u5c08\u6848\uff0c\u4e26\u7de8\u5beb\u548c\u6574\u5408\u7a0b\u5f0f\u78bc\uff0c\u4ee5\u4f7f\u6240\u6709\u5fc5\u9700\u7684\u5468\u908a\u90fd\u6b63\u5e38\u5de5\u4f5c\u3002"),(0,r.kt)("p",null,"\u9019\u500b\u5c08\u6848\u6703\u5c07\u9577\u671f\u5b58\u5728\u4ee5\u4f9b\u53cd\u8986\u4f7f\u7528\u3002 \u60a8\u73fe\u5728\u61c9\u78ba\u5b9a\u4e00\u7a2e\u7b56\u7565\uff0c\u4f7f\u5f97\u4e0d\u540c\u7684\u7248\u672c\u4fdd\u6301\u53ef\u7528\uff0c\u4ee5\u4fbf\u53ef\u4ee5\u8fd4\u56de\u4e26\u518d\u6b21\u57f7\u884c\u3002 \u6216\u8005\u5728\u65b0\u786c\u9ad4\u4e0a\u9032\u884c\uff0c\u6216\u8005\u53ea\u662f\u91cd\u65b0\u6aa2\u67e5\u786c\u9ad4\u3002"),(0,r.kt)("p",null,"\u4e5f\u8a31\u60a8\u9700\u8981\u8a31\u591a\u5c0f\u578b\u6e2c\u8a66\u7a0b\u5f0f\u3002 \u5728\u9019\u7a2e\u60c5\u6cc1\u4e0b\uff0c\u8a72\u5c08\u6848\u662f\u4e00\u500b\u5f88\u597d\u7684\u8d77\u9ede\u3002"),(0,r.kt)("h2",g({},{id:"goal"}),"\u76ee\u6a19"),(0,r.kt)("p",null,"\u5176\u76ee\u6a19\u662f\u5728STM32CubeMX\u4e2d\u5275\u5efa\u4e00\u500b\u53ef\u71d2\u9304\u5230\u60a8\u7684\u958b\u767c\u677f\u4e0a\u4e26\u57f7\u884c\u7684\u5c08\u6848\u3002 \u5982\u679c\u60a8\u6709\u5e36\u9664\u932f\u5668\u7684IDE\uff08\u5982STM32CubeIDE\u6216IAR Embedded Workbench\uff09\uff0c\u5247\u9084\u61c9\u6aa2\u67e5\u662f\u5426\u53ef\u4ee5\u9664\u932f\u4e26\u9010\u6b65\u5b8c\u6210MCU\u4e0a\u7684\u5c08\u6848\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u60a8\u6c92\u6709\u9664\u932f\u5668\uff0c\u5247\u61c9\u627e\u5230\u4e00\u7a2e\u5f9e\u5c08\u6848\u7684\u5404\u500b\u4f4d\u7f6e\u5217\u5370\u51fa\u8abf\u8a66\u8a9e\u53e5\u7684\u65b9\u6cd5\u3002 \u5982 \u4e32\u5217\u9023\u63a5\u57e0\u3002"),(0,r.kt)("h3",g({},{id:"verification"}),"\u9a57\u8b49"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u662f\u672c\u7bc0\u7684\u9a57\u8b49\u9ede\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",g({parentName:"tr"},{align:null}),"\u9a57\u8b49\u9ede"),(0,r.kt)("th",g({parentName:"tr"},{align:null}),"\u57fa\u672c\u539f\u7406"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",g({parentName:"tr"},{align:null}),"\u5728IDE\u4e2d\u958b\u555f\u5c08\u6848"),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"\u5c08\u6848\u7531STM32CubeMX\u751f\u6210\uff0c\u4e26\u53ef\u4ee5\u7528\u4f5c\u5f8c\u7e8c\u958b\u767c\u677f\u958b\u767c\u7684\u8d77\u9ede\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",g({parentName:"tr"},{align:null}),"\u5c08\u6848\u7de8\u8b6f"),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"\u6b64\u5c08\u6848\u9032\u884c\u9a45\u52d5\u7a0b\u5f0f\u5305\u542b\u985e\u5225\u8def\u5f91\u7684\u6b63\u78ba\u8a2d\u5b9a\u3002 \u6211\u5011\u53ef\u4ee5\u7de8\u5beb\u66f4\u591a\u7a0b\u5f0f\u78bc\u4e26\u91cd\u8907\u7de8\u8b6f\u8a72\u5c08\u6848\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",g({parentName:"tr"},{align:null}),"\u9032\u5165\u65b7\u9ede"),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"\u5c08\u6848\u53ef\u4ee5\u8abf\u8a66\u904b\u884c\u4e26\u5728\u65b7\u9ede\u8655\u505c\u6b62\u3002 \u6211\u5011\u53ef\u4ee5\u6aa2\u67e5\u5c08\u6848\u72c0\u614b\u4e26\u8abf\u67e5\u932f\u8aa4\u3002")))),(0,r.kt)("h2",g({},{id:"prerequisites"}),"\u5148\u6c7a\u689d\u4ef6"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u662f\u6b64\u6b65\u9a5f\u7684\u5148\u6c7a\u689d\u4ef6\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u57fa\u65bcSTM32\u958b\u767c\u677f"),(0,r.kt)("li",{parentName:"ul"},"\u7a0b\u5f0f\u78bc/\u9664\u932f\u4ecb\u9762 - ST-LINK\uff0cJLINK\u6216\u985e\u4f3c\u4ecb\u9762"),(0,r.kt)("li",{parentName:"ul"},"\u5b89\u88ddSTM32CubeMX"),(0,r.kt)("li",{parentName:"ul"},"\u5b89\u88ddIDE - STM32CubeIDE\uff0cIAR Embedded Workbench\uff0cKeil uVision\u6216\u985e\u4f3c\u8edf\u9ad4")),(0,r.kt)("h2",g({},{id:"do"}),"\u57f7\u884c"),(0,r.kt)("p",null,"\u73fe\u5728\uff0c\u6211\u5011\u5c07\u5b8c\u6210\u5728STM32CubeMX\u4e2d\u5275\u5efa\u65b0\u5c08\u6848\u7684\u6b65\u9a5f\u3002 \u5728\u8a72\u7bc4\u4f8b\u4e2d\uff0c\u6211\u5011\u5c07\u4f7f\u7528STM32F429 MCU\u3002 \u7576\u7136\uff0c\u60a8\u61c9\u5728\u786c\u9ad4\u4e0a\u9078\u64c7MCU\u3002"),(0,r.kt)("p",null,"\u5728STM32CubeMX\u4e2d\uff0c\u6309\u4e0b\u300c\u5f9eMCU\u555f\u52d5\u6211\u7684\u5c08\u6848\u300d\u7684\u300c\u5b58\u53d6MCU\u9078\u64c7\u5668\u300d\uff1a"),(0,r.kt)(l.Z,{imageSource:"/img/development/board-bring-up/create/cubemx01.png",noShadow:!1,width:"600",mdxType:"Figure"},"\u5275\u5efa\u65b0\u5c08\u6848"),(0,r.kt)("p",null,"\u4e5f\u53ef\u4ee5\u57fa\u65bcSTM32\u8a55\u4f30\u5957\u4ef6\u555f\u52d5\u4e00\u500b\u65b0\u5c08\u6848\uff0c\u5982STM32F429\u63a2\u7d22\u677f\u3002 \u5982\u679c\u60a8\u7684\u786c\u9ad4\u8a2d\u8a08\u57fa\u65bc\u8a55\u4f30\u5957\u4ef6\uff0c\u60a8\u53ef\u4ee5\u6216\u8aaa\u61c9\u7576\u57f7\u884c\u8a72\u64cd\u4f5c\u3002"),(0,r.kt)("p",null,"\u7136\u5f8c\uff0c\u6211\u5011\u9078\u64c7\u76f8\u95dcMCU\u3002 \u5728\u9019\u88e1\u6211\u5011\u9078\u64c7STM32F429ZIT6U\uff1a"),(0,r.kt)(l.Z,{imageSource:"/img/development/board-bring-up/create/cubemx02.png",noShadow:!1,width:"600",mdxType:"Figure"},"\u9078\u64c7MCU"),(0,r.kt)("p",null,"\u8df3\u5230\u5c08\u6848\u7ba1\u7406\u54e1\u9078\u9805\uff0c\u4e26\u70ba\u5c08\u6848\u547d\u540d\u3002 \u7576\u7136\uff0c\u60a8\u4e5f\u53ef\u4ee5\u9078\u64c7\u65b0\u7684\u5c08\u6848\u5132\u5b58\u4f4d\u7f6e\u3002 \u5728\u300c\u61c9\u7528\u7d50\u69cb\u300d\u4e0b\uff0c\u9078\u64c7\u300c\u9032\u968e\u300d\u3002 \u5728\u300c\u5de5\u5177\u93c8/IDE\u300d\u4e0b\uff0c\u60a8\u5fc5\u9808\u9078\u64c7\u8981\u4f7f\u7528\u7684IDE\u3002 \u5728\u7bc4\u4f8b\u4e2d\uff0c\u6211\u5011\u9078\u64c7IAR\uff1a"),(0,r.kt)(l.Z,{imageSource:"/img/development/board-bring-up/create/cubemx03.png",noShadow:!1,width:"600",mdxType:"Figure"},"\u8a2d\u5b9a\u5c08\u6848\u540d\u7a31\u8207IDE"),(0,r.kt)("p",null,"\u73fe\u5728\uff0c\u6309\u4e0b\u53f3\u4e0a\u89d2\u7684\u300c\u7522\u751f\u7a0b\u5f0f\u78bc\u300d\u6309\u9215\u3002 \u5982\u679c\u9019\u662f\u60a8\u9078\u53d6MCU\u7cfb\u5217\uff08F4/F7/H7\uff09\u4e2d\u7684\u9996\u500b\u5c08\u6848\uff0c\u5247STM32CubeMX\u81ea\u52d5\u5efa\u8b70\u4e0b\u8f09\u76f8\u95dcSTM32Cube\u97cc\u9ad4\u5957\u4ef6\u3002 \u63a5\u53d7\u8a72\u9078\u9805\uff0c\u4ee5\u7372\u53d6\u4f9b\u4ee5\u5f8c\u4f7f\u7528\u7684\u6700\u65b0\u7248\u672c\u3002"),(0,r.kt)(l.Z,{imageSource:"/img/development/board-bring-up/create/cubemx04.png",noShadow:!1,width:"600",mdxType:"Figure"},"STM32CubeMX\u53ef\u4e0b\u8f09STM32Cube\u97cc\u9ad4"),(0,r.kt)("p",null,"\u6309\u4e0b\u300c\u958b\u555f\u5c08\u6848\u300d\uff0c\u4ee5\u958b\u555fIDE\u4e2d\u7684\u5c08\u6848\uff1a"),(0,r.kt)(l.Z,{imageSource:"/img/development/board-bring-up/create/cubemx05.png",noShadow:!1,width:"600",mdxType:"Figure"},"\u5c08\u6848\u5df2\u751f\u6210"),(0,r.kt)(l.Z,{imageSource:"/img/development/board-bring-up/create/cubemx06.png",noShadow:!1,width:"600",mdxType:"Figure"},"\u5c08\u6848\u5728IAR Embedded Workbench\u958b\u555f"),(0,r.kt)("p",null,"STM32CubeMX\u751f\u6210\u7684\u5c08\u6848\u5305\u542b\u7279\u5b9aMCU\u555f\u52d5\u7a0b\u5f0f\u78bc\u3001\u4e2d\u65b7\u5411\u91cf\u8868\u3001\u7cfb\u7d71\u521d\u59cb\u5316\u7a0b\u5f0f\u78bc\u4ee5\u53caMCU\u4e2d\u6240\u6709\u5916\u8a2d\u9031\u908a\u7684HAL\u9a45\u52d5\u7a0b\u5f0f\u3002"),(0,r.kt)("p",null,"\u73fe\u5728\u53ef\u901a\u904eIDE\u7de8\u8b6f\u548c\u9664\u932f\u5c08\u6848\u3002 \u5728IAR\u4e2d\uff0c\u9ede\u9078\u300c\u5c08\u6848\u300d->\u300c\u7de8\u8b6f\u300d\u4f86\u7de8\u8b6f\u5c08\u6848\uff0c\u9ede\u9078\u300c\u5c08\u6848\u300d->\u300c\u4e0b\u8f09\u4e26\u9664\u932f\u300d\u4f86\u9664\u932f\u5c08\u6848\uff1a"),(0,r.kt)(l.Z,{imageSource:"/img/development/board-bring-up/create/cubemx07.png",noShadow:!1,width:"600",mdxType:"Figure"},"\u5728IAR Embedded Workbench\u4e2d\u9664\u932f\u5c08\u6848"),(0,r.kt)("p",null,"\u8a2d\u7f6eIAR\u5c08\u6848\uff0c\u4f7f\u7528STLink\u9664\u932f\u5668\u3002 \u5982\u679c\u60a8\u4f7f\u7528\u5176\u4ed6\u9664\u932f\u5668\uff0c\u8acb\u5728IDE\u4e2d\u66f4\u6539\u5c08\u6848\u7684\u300c\u9664\u932f\u5668\u300d\u5c6c\u6027\u3002"),(0,r.kt)(l.Z,{imageSource:"/img/development/board-bring-up/create/cubemx08.png",noShadow:!1,width:"600",mdxType:"Figure"},"\u4e3b\u8ff4\u5708\u7e7c\u7e8c\u904b\u884c"),(0,r.kt)("p",null,"\u5728\u7121\u4f5c\u696d\u7cfb\u7d71\u7684\u60c5\u6cc1\u4e0b\u904b\u884c\u7684\u5c08\u6848\uff0cmain\u7684while\u8ff4\u5708\u901a\u5e38\u5f88\u91cd\u8981\u3002 \u901a\u904e\u8a2d\u7f6e\u65b7\u9ede\u4f86\u6aa2\u67e5\u662f\u5426\u57f7\u884c\u5230\u67d0\u500b\u4f4d\u7f6e\uff0c\u4e5f\u53ef\u4ee5\u5728\u8ff4\u5708\u4e2d\u6dfb\u52a0\u4e00\u4e9b\u7a0b\u5f0f\u78bc\u3002"),(0,r.kt)("p",null,"\u5efa\u8b70\u700f\u89bdIDE\u4e2d\u7684\u5c08\u6848\uff0c\u4ee5\u719f\u6089\u7a0b\u5f0f\u78bc\u7d50\u69cb\u3002 \u53e6\u5916\uff0c\u53ef\u4ee5\u5617\u8a66\u4e00\u4e0b\u8ffd\u8e28SystemInit\u5230main\u7684\u52d5\u4f5c\u6b65\u9a5f\u3002"),(0,r.kt)("h3",g({},{id:"user-code-sections"}),"\u4f7f\u7528\u8005\u4ee3\u7a0b\u5f0f\u78bc\u5340\u6bb5"),(0,r.kt)("p",null,"\u5c0d\u65bc\u6b64\u6b65\u9a5f\uff0c\u5728\u958b\u59cb\u7de8\u8f2f\u5c08\u6848\u4e4b\u524d\uff0c\u81f3\u95dc\u91cd\u8981\u7684\u662f\u77ad\u89e3STM32CubeMX\u4f7f\u7528\u7684\u300c\u4f7f\u7528\u8005\u7a0b\u5f0f\u78bc\u5340\u6bb5\u300d\u9019\u4e00\u6982\u5ff5\u3002 \u5c08\u6848\u7684Core/Src\u8cc7\u6599\u593e\u4e2d\u7684\u6240\u6709\u4f86\u6e90\u6a94\u5747\u7531STM32CubeMX\u7522\u751f\u3002 \u5728\u60a8\u4ee5\u5f8c\u66f4\u6539STM32CubeMX\u4e2d\u7684\u5c08\u6848\u8a2d\u5b9a\u6642\uff08\u5982\u555f\u7528UART\uff09\uff0c\u5c07\u91cd\u65b0\u751f\u6210\u5176\u4e2d\u7684\u4e00\u4e9b\u6a94\u6848\u3002 \u60a8\u53ef\u80fd\u4e5f\u5728\u5176\u4e2d\u7684\u4e00\u4e9b\u6a94\u4e2d\u63d2\u5165\u7a0b\u5f0f\u78bc\u3002 \u9664\u975e\u4f7f\u7528\u5e95\u4e0b\u898f\u5247\uff0c\u4f7f\u7528\u8005\u7a0b\u5f0f\u78bc\u5728\u4f7f\u7528STM32CubeMX\u91cd\u65b0\u7522\u751f\u5c08\u6848\u6642\u6703\u88ab\u79fb\u9664\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u5c07\u7a0b\u5f0f\u78bc\u5beb\u5728\u4f7f\u7528\u8005\u7a0b\u5f0f\u5340\u6bb5"))),(0,r.kt)("p",null,"\u5beb\u5728\u4f7f\u7528\u8005\u7a0b\u5f0f\u5340\u6bb5\u4ee5\u5916\u7684\u4efb\u4f55\u7a0b\u5f0f\u78bc\u90fd\u5c07\u88abSTM32CubeMX\u522a\u9664\u3002"),(0,r.kt)("p",null,"\u5728\u9019\u500b\u7bc4\u4f8b\u4e2d\uff0c\u8b93\u6211\u5011\u770b\u4e00\u4e0bCore/Src/main.c\u4e2d\u7684\u524d\u5e7e\u884c\uff1a"),(0,r.kt)(i.Z,{mdxType:"CodeHeader"},"main.c"),(0,r.kt)("pre",null,(0,r.kt)("code",g({parentName:"pre"},{className:"language-cpp",metastring:"{3-5}","{3-5}":!0}),"int main(void)\n{\n  /* USER CODE BEGIN 1 */\n\n  /* USER CODE END 1 */\n\n\n  /* MCU Configuration--------------------------------------------------------*/\n\n  /* Reset of all peripherals, Initializes the Flash interface and the Systick. */\n  HAL_Init();\n  ...\n}\n")),(0,r.kt)("p",null,"\u5982\u679c\u60a8\u5e0c\u671b\u5728main\u51fd\u6578\u7684\u958b\u982d\u63d2\u5165\u7a0b\u5f0f\u78bc\uff0c\u5fc5\u9808\u5c07\u5176\u653e\u5728\u4f7f\u7528\u8005\u7a0b\u5f0f\u78bc\u958b\u59cb1\u8207\u4f7f\u7528\u8005\u7a0b\u5f0f\u78bc\u7d50\u675f1\u4e4b\u9593\u3002 \u5982\u679c\u5c07\u7a0b\u5f0f\u78bc\u653e\u5728\u6b64\u5340\u4e4b\u5916\uff0c\u5b83\u5c07\u88abSTM32CubeMX\u522a\u9664\u3002"),(0,r.kt)(u.Z,{mdxType:"Caution"},"\u8acb\u52ff\u5728\u4f7f\u7528\u8005\u7a0b\u5f0f\u5340\u6bb5\u4ee5\u5916\u5beb\u7a0b\u5f0f\u78bc\u3002 \u7576STM32CubeMX\u751f\u6210\u7a0b\u5f0f\u78bc\u6642\uff0c\u5c07\u522a\u9664\u6b64\u985e\u7a0b\u5f0f\u78bc\u3002"),(0,r.kt)("h2",g({},{id:"further-reading"}),"\u9032\u4e00\u6b65\u95b1\u8b80"),(0,r.kt)("p",null,"\u6b64\u8655\u7684\u9023\u7d50\u6587\u4ef6\u5305\u542b\u6709\u95dcCubeMX\u7684\u66f4\u591a\u8cc7\u8a0a\uff1a"),(0,r.kt)(a.Z,{mdxType:"FurtherReading"},(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)(o.Z,{to:"https://www.st.com/content/ccc/resource/technical/document/user_manual/10/c5/1a/43/3a/70/43/7d/DM00104712.pdf/files/DM00104712.pdf/jcr:content/translations/en.DM00104712.pdf",mdxType:"Link"},"STM32CubeMX\u4f7f\u7528\u8005\u624b\u518a")),(0,r.kt)("li",null,(0,r.kt)(o.Z,{to:"https://www.st.com/en/development-tools/stm32cubeide.html#resource",mdxType:"Link"},"STM32CubeIDE\u8cc7\u6e90")),(0,r.kt)("li",null,(0,r.kt)(o.Z,{to:"https://www.youtube.com/playlist?list=PLnMKNibPkDnGtuIl5v0CvC81Am7SKpj02",mdxType:"Link"},"\u6709\u95dcSTM32CubeMX\u548cSTM32Cube\u7684\u516c\u958b\u7dda\u4e0a\u8ab2\u7a0b")))))}S.isMDXComponent=!0}}]);