"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[812],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return h}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),d=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=d(r),h=a,s=u["".concat(c,".").concat(h)]||u[h]||m[h]||o;return r?n.createElement(s,l(l({ref:t},p),{},{components:r})):n.createElement(s,l({ref:t},p))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var d=2;d<o;d++)l[d]=r[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},22425:function(e,t,r){var n=r(67294);class a extends n.Component{render(){return n.createElement("div",{className:"code-header"},n.createElement("div",null,n.createElement("h5",null,this.props.children)))}}t.Z=a},44035:function(e,t,r){var n=r(67294),a=r(25026);t.Z=function(e){const t=e.noShadow||!1,r=e.width,o=e.height,l=(0,a.Z)(e.imageSource);return t?n.createElement("div",{className:"figure noshadow"},n.createElement("a",{href:l,target:"_blank"},n.createElement("img",{width:r,height:o,src:l})),n.createElement("p",null,e.children)):n.createElement("div",{className:"figure"},n.createElement("a",{href:l,target:"_blank"},n.createElement("img",{width:r,height:o,src:l})),n.createElement("p",null,e.children))}},29415:function(e,t,r){var n=r(67294),a=r(88678);const o=n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},n.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class l extends n.Component{render(){return n.createElement(a.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:o},this.props.children)}}t.Z=l},88678:function(e,t,r){var n=r(67294);class a extends n.Component{render(){const e=`highlight highlight-${this.props.type}`;return n.createElement("div",{className:e},n.createElement("div",{className:"highlight-heading"},n.createElement("h5",null,n.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),n.createElement("div",{className:"highlight-content"},this.props.children))}}t.Z=a},93054:function(e,t,r){var n=r(67294),a=r(88678);const o=n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},n.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));class l extends n.Component{render(){return n.createElement(a.Z,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:o},this.props.children)}}t.Z=l},37793:function(e,t,r){var n=r(67294),a=r(88678);const o=n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},n.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class l extends n.Component{render(){return n.createElement(a.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:o},this.props.children)}}t.Z=l},21116:function(e,t,r){r.r(t),r.d(t,{assets:function(){return y},contentTitle:function(){return C},default:function(){return T},frontMatter:function(){return b},metadata:function(){return k},toc:function(){return w}});var n=r(3905),a=r(22425),o=r(44035),l=r(29415),i=r(39130),c=r(93054),d=r(37793),p=Object.defineProperty,m=Object.defineProperties,u=Object.getOwnPropertyDescriptors,h=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,f=(e,t,r)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,v=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&f(e,r,t[r]);if(h)for(var r of h(t))g.call(t,r)&&f(e,r,t[r]);return e};const b={id:"08-hardware-acceleration",title:"8. \u786c\u4ef6\u52a0\u901f\u5668",sidebar_label:"8. \u786c\u4ef6\u52a0\u901f\u5668"},C=void 0,k={unversionedId:"development/board-bring-up/how-to/08-hardware-acceleration",id:"development/board-bring-up/how-to/08-hardware-acceleration",title:"8. \u786c\u4ef6\u52a0\u901f\u5668",description:"",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/board-bring-up/how-to/08-hardware-acceleration.mdx",sourceDirName:"development/board-bring-up/how-to",slug:"/development/board-bring-up/how-to/08-hardware-acceleration",permalink:"/4.20/zh-CN/docs/development/board-bring-up/how-to/08-hardware-acceleration",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{id:"08-hardware-acceleration",title:"8. \u786c\u4ef6\u52a0\u901f\u5668",sidebar_label:"8. \u786c\u4ef6\u52a0\u901f\u5668"},sidebar:"docs",previous:{title:"7. \u5757\u6a21\u5f0f\u4e0b\u7684\u5916\u90e8\u95ea\u5b58",permalink:"/4.20/zh-CN/docs/development/board-bring-up/how-to/07-flash-external-nonaddressable"},next:{title:"9. \u89e6\u6478\u63a7\u5236\u5668",permalink:"/4.20/zh-CN/docs/development/board-bring-up/how-to/09-touch-controller"}},y={},w=[{value:"\u52a8\u673a",id:"motivation",level:2},{value:"\u76ee\u6807",id:"goal",level:2},{value:"\u9a8c\u8bc1",id:"verification",level:3},{value:"\u5148\u51b3\u6761\u4ef6",id:"prerequisites",level:2},{value:"\u6267\u884c",id:"do",level:2},{value:"\u5199\u5165\u5e27\u7f13\u5b58",id:"write-to-framebuffer-memory",level:3},{value:"\u6027\u80fd\u7b26\u5408\u9884\u671f",id:"performance-is-as-expected",level:3}],M={toc:w};function T(e){var t,r=e,{components:p}=r,f=((e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&h)for(var n of h(e))t.indexOf(n)<0&&g.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=v(v({},M),f),m(t,u({components:p,mdxType:"MDXLayout"}))),(0,n.kt)("h2",v({},{id:"motivation"}),"\u52a8\u673a"),(0,n.kt)("p",null,"Chrom-ART (DMA2D)\u56fe\u5f62\u52a0\u901f\u5668\u80fd\u591f\u4f20\u8f93\u6765\u81ea\u5b58\u50a8\u5668\u7684\u90e8\u5206\u56fe\u50cf\u6570\u636e\uff0c\u5e76\u5c06\u5176\u653e\u5165\u6216\u5148\u6df7\u5408\u540e\u518d\u653e\u5165\u5e27\u7f13\u5b58\u3002 Chrom-ART\u53ef\u4ece\u5185\u90e8\u6216\u5916\u90e8\u5b58\u50a8\u5668\u8bfb\u53d6\u6570\u636e\u3002 \u540c\u6837\uff0c\u5b83\u53ef\u4ee5\u5199\u5165\u5185\u90e8\u6216\u5916\u90e8\u5b58\u50a8\u5668\u3002 \u5728\u7ed8\u5236\u56fe\u5f62\u65f6\u53ef\u4f7f\u7528\u6b64\u529f\u80fd\uff0c\u4ee5\u663e\u8457\u63d0\u9ad8\u663e\u793a\u6027\u80fd\uff0c\u540c\u65f6\u660e\u663e\u964d\u4f4e\u5e94\u7528\u7a0b\u5e8f\u7684MCU\u5360\u7528\u7387\u3002"),(0,n.kt)("p",null,"\u8bb8\u591aSTM32\u63a7\u5236\u5668\u5305\u542bChrom-ART\u52a0\u901f\u5668\uff0c\u5f53\u7136\u4e0d\u662f\u6240\u6709\u7684\u3002 \u68c0\u67e5\u60a8\u7684\u6570\u636e\u624b\u518c\u3002 DMA2D\u662fChrom-ART\u7684\u4ee3\u53f7\uff0c\u5e76\u5728\u4ee3\u7801\u548c\u6587\u6863\u4e2d\u4f7f\u7528\u3002"),(0,n.kt)(c.Z,{mdxType:"Note"},"\u5982\u679c\u7684\u677f\u8f7d\u82af\u7247\u4e0d\u652f\u6301Chrom-ART\u786c\u4ef6\u52a0\u901f\u5668\uff0c\u5219\u8df3\u8fc7\u6b64\u6b65\u3002"),(0,n.kt)("h2",v({},{id:"goal"}),"\u76ee\u6807"),(0,n.kt)("p",null,"\u8be5\u6b65\u9aa4\u7684\u76ee\u6807\u662f\u4f7f\u80fdChrom-ART\u5e76\u4f7f\u7528\u5b83\u6765\u8bfb\u5199\u6570\u636e\u3002 \u76ee\u6807",(0,n.kt)("strong",{parentName:"p"},"\u4e0d\u5728\u4e8e"),"\u68c0\u67e5Chrom-ART\u82af\u7247\u7684\u529f\u80fd\uff0c\u800c\u662f\u8981\u4eceChrom-ART\u7684\u89d2\u5ea6\u9a8c\u8bc1\u5b58\u50a8\u5668\u63a5\u53e3\u662f\u5426\u6b63\u5e38\u5de5\u4f5c\u3002"),(0,n.kt)("h3",v({},{id:"verification"}),"\u9a8c\u8bc1"),(0,n.kt)("p",null,"\u4ee5\u4e0b\u662f\u672c\u8282\u7684\u9a8c\u8bc1\u70b9\uff1a"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",v({parentName:"tr"},{align:null}),"\u9a8c\u8bc1\u70b9"),(0,n.kt)("th",v({parentName:"tr"},{align:null}),"\u57fa\u672c\u539f\u7406"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",v({parentName:"tr"},{align:null}),"Chrom-ART\u5df2\u914d\u7f6e"),(0,n.kt)("td",v({parentName:"tr"},{align:null}),"Chrom-ART\u53ef\u7528\u4e8e\u7ed8\u5236\u6240\u9700\u56fe\u5f62")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",v({parentName:"tr"},{align:null}),"Chrom-ART\u53ef\u8bfb\u53d6\u5b58\u50a8\u5668"),(0,n.kt)("td",v({parentName:"tr"},{align:null}),"Chrom-ART\u53ef\u7528\u4e8e\u7ed8\u5236\u56fe\u5f62\uff08M2M\uff09")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",v({parentName:"tr"},{align:null}),"Chrom-ART\u53ef\u5199\u5165\u5b58\u50a8\u5668"),(0,n.kt)("td",v({parentName:"tr"},{align:null}),"Chrom-ART\u53ef\u7528\u4e8e\u7ed8\u5236\u56fe\u5f62\uff08M2M\u548cR2M\uff09")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",v({parentName:"tr"},{align:null}),"Chrom-ART\u6027\u80fd"),(0,n.kt)("td",v({parentName:"tr"},{align:null}),"Chrom-ART\u4ea7\u751f\u6240\u9700\u7684\u56fe\u5f62\u6027\u80fd")))),(0,n.kt)("h2",v({},{id:"prerequisites"}),"\u5148\u51b3\u6761\u4ef6"),(0,n.kt)("p",null,"\u4ee5\u4e0b\u662f\u6b64\u6b65\u9aa4\u7684\u5148\u51b3\u6761\u4ef6\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5e26Chrom-ART\u7684MCU\u3002")),(0,n.kt)("h2",v({},{id:"do"}),"\u6267\u884c"),(0,n.kt)("p",null,"\u5728STM32CubeMX\u4e2d\uff0cChrom-ART\u5728",(0,n.kt)("em",{parentName:"p"},"\u201cMultimedia \u201d->\u201cDMA2D\u201d"),"\u7c7b\u522b\u4e0b\u8fdb\u884c\u914d\u7f6e\u3002 \u6fc0\u6d3bDMA2D\uff0c\u5e76\u6839\u636e\u60a8\u7684\u663e\u793a\u5668\u914d\u7f6e",(0,n.kt)("em",{parentName:"p"},"\u4f20\u8f93\u6a21\u5f0f"),"\u548c",(0,n.kt)("em",{parentName:"p"},"\u989c\u8272\u6a21\u5f0f"),"\u3002"),(0,n.kt)("p",null,"\u5728\u4e0b\u56fe\u4e2d\uff0c\u6fc0\u6d3bDMA2D\uff0c\u5e76\u5c06\u5176\u914d\u7f6e\u4e3a\u5b58\u50a8\u5668\u5230\u5b58\u50a8\u5668\u4f20\u8f93\u6a21\u5f0f\u548cRGB565\u989c\u8272\u6a21\u5f0f\u3002 \u9009\u62e9\u4e0e\u60a8\u7684\u663e\u793a\u5668\u5339\u914d\u7684\u989c\u8272\u6a21\u5f0f\u3002"),(0,n.kt)(o.Z,{imageSource:"/img/development/board-bring-up/hwaccel/cubemx-dma2d.png",noShadow:!0,width:"600",mdxType:"Figure"},"\u914d\u7f6eChrom-ART"),(0,n.kt)("p",null,"DMA2D\u5168\u5c40\u4e2d\u65ad\u5bf9\u4e8eTouchGFX\u5e94\u7528\u4e2d\u7684\u5e27\u7f13\u5b58\u8bbf\u95ee\u540c\u6b65\u81f3\u5173\u91cd\u8981\u3002 \u786e\u4fdd\u5728STM32CubeMX NVIC\u8bbe\u7f6e\u4e2d\u4f7f\u80fd\u5168\u5c40\u4e2d\u65ad\uff08NVIC\u9009\u9879\u5361\uff09\uff0c\u5e76\u4e3a\u4e2d\u65ad\u5904\u7406\u7a0b\u5e8f\u4f7f\u80fd\u4e86\u4ee3\u7801\u751f\u6210\uff08\u201c\u4ee3\u7801\u751f\u6210\u201d\u9009\u9879\u5361\uff09\uff0c\u5982\u4e0b\u6240\u793a\u3002 \u5728\u8be5\u9636\u6bb5\uff0c\u4f18\u5148\u7ea7\u5e76\u4e0d\u91cd\u8981\u3002"),(0,n.kt)(o.Z,{imageSource:"/img/development/board-bring-up/hwaccel/cubemx-nvic-dma2d.png",noShadow:!0,width:"600",mdxType:"Figure"},"\u4f7f\u80fdChrom-ART\u4e2d\u65ad"),(0,n.kt)(o.Z,{imageSource:"/img/development/board-bring-up/hwaccel/cubemx-nvic-dma2d-codegen.png",noShadow:!0,width:"600",mdxType:"Figure"},"\u4f7f\u80fdChrom-ART\u4e2d\u65ad\u5904\u7406\u7a0b\u5e8f\u7684\u4ee3\u7801\u751f\u6210"),(0,n.kt)("h3",v({},{id:"write-to-framebuffer-memory"}),"\u5199\u5165\u5e27\u7f13\u5b58"),(0,n.kt)("p",null,"\u4e0b\u6587\u6982\u8ff0\u4e86\u5728\u76ee\u6807\u5b58\u50a8\u5668\u4e2d\u5c06\u7279\u5b9a\u989c\u8272\u586b\u5145\u5230\u77e9\u5f62\u4e2d\uff08\u5bc4\u5b58\u5668\u5230\u5b58\u50a8\u5668\u6a21\u5f0f\uff09\u3002 \u5728STM32Cube\u56fa\u4ef6\u5305\u4e2d\u67e5\u627e\u9002\u7528\u4e8e\u60a8\u7684MCU\u7684\u5177\u4f53\u5de5\u7a0b\u3002"),(0,n.kt)(a.Z,{mdxType:"CodeHeader"},"main.c"),(0,n.kt)("pre",null,(0,n.kt)("code",v({parentName:"pre"},{className:"language-cpp"}),'#include "stm32f7xx_hal.h"\n#include "stm32f7xx_hal_dma2d.h"\n...\n\nuint32_t color = 0xF800; //Red in RGB565\n\nhdma2d.Init.Mode = DMA2D_R2M;\nhdma2d.Init.ColorMode = DMA2D_RGB565;\n\nMODIFY_REG(hdma2d.Instance->CR, DMA2D_CR_MODE, DMA2D_R2M);\nMODIFY_REG(hdma2d.Instance->OPFCCR, DMA2D_OPFCCR_CM, DMA2D_RGB565);\nMODIFY_REG(hdma2d.Instance->OOR, DMA2D_OOR_LO, displayWidth - rectangleWidth);\n\nhdma2d.LayerCfg[1].InputColorMode = CM_RGB565;\nhdma2d.LayerCfg[1].InputOffset = 0;\n\nHAL_DMA2D_ConfigLayer(&hdma2d, 1);\n\nHAL_DMA2D_Start_IT(&hdma2d, color, (unsigned int)dstPtr, rectangleWidth, rectangleHeight);\n\n')),(0,n.kt)("p",null,"\u5982\u679c\u5728STM32CubeMX\u4e2d\u6b63\u786e\u914d\u7f6e\u4e86\u201c\u4f20\u8f93\u5b8c\u6210\u201d\u8bbe\u7f6e\uff0c\u5219\u53ef\u4ee5\u5206\u914d\u4e00\u4e2a\u81ea\u5b9a\u4e49\u5904\u7406\u7a0b\u5e8f\u6765\u5904\u7406\u8be5\u4e8b\u4ef6\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",v({parentName:"pre"},{className:"language-cpp"}),"    hdma2d.XferCpltCallback = DMA2D_XferCpltCallback;\n")),(0,n.kt)("p",null,"\u53ef\u4ee5\u6309\u4ee5\u4e0b\u65b9\u5f0f\u5b9a\u4e49\u5904\u7406\u7a0b\u5e8f\uff0c\u4ee5\u9a8c\u8bc1\u201c\u4f20\u8f93\u5b8c\u6210\u201d\u4e2d\u65ad\u914d\u7f6e\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",v({parentName:"pre"},{className:"language-cpp"}),'extern "C" {\n    static void DMA2D_XferCpltCallback(DMA2D_HandleTypeDef* handle)\n    {\n        //Ensure that you this callback is called\n    }\n}\n')),(0,n.kt)("p",null,"More examples of using ChromART can be found in the CubeFW examples. Link to examples for the STM32F429 Discovery board is given below."),(0,n.kt)(l.Z,{mdxType:"FurtherReading"},(0,n.kt)("li",null,(0,n.kt)(i.Z,{to:"https://github.com/STMicroelectronics/STM32CubeF4/tree/master/Projects/STM32F429I-Discovery/Examples/DMA2D",mdxType:"Link"},"STM32F429I-Discovery Examples for DMA2D on GitHub"))),(0,n.kt)("h3",v({},{id:"performance-is-as-expected"}),"\u6027\u80fd\u7b26\u5408\u9884\u671f"),(0,n.kt)("p",null,"\u5c06Chrom-ART\u7684\u6027\u80fd\u4e0e\u5148\u524d\u4ec5CPU\u8bfb\u5199\u5b58\u50a8\u5668\u7684\u6027\u80fd\u7ed3\u679c\u8fdb\u884c\u6bd4\u8f83\u3002 \u6211\u4eec\u53ef\u4ee5\u671f\u5f85\u4f7f\u7528Chrom-ART\u7684\u4ee3\u7801\u6bd4\u4e4b\u524d\u57fa\u4e8eCPU\u8bfb/\u5199\u64cd\u4f5c\u7684\u8bfb\u53d6\u6027\u80fd\u66f4\u9ad8\u3002"),(0,n.kt)(d.Z,{mdxType:"Tip"},"\u76f8\u6bd4\u6beb\u79d2\u7ea7\u8ba1\u6570\u7684sysTick\uff0c\u4f7f\u7528\u201cCCSTEP\u201d\u65f6\u949f\u5468\u671f\u5bc4\u5b58\u5668\u7684\u503c\u53ef\u4ee5\u66f4\u7cbe\u786e\u5730\u6d4b\u91cf\u65ad\u70b9\u4e4b\u95f4\u6240\u82b1\u8d39\u7684\u65f6\u949f\u6570\u3002"))}T.isMDXComponent=!0}}]);