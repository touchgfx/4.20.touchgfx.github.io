"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[6952],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return s}});var n=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,a=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(r),s=l,k=d["".concat(p,".").concat(s)]||d[s]||m[s]||a;return r?n.createElement(k,o(o({ref:t},u),{},{components:r})):n.createElement(k,o({ref:t},u))}));function s(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=r.length,o=new Array(a);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},44035:function(e,t,r){var n=r(67294),l=r(25026);t.Z=function(e){const t=e.noShadow||!1,r=e.width,a=e.height,o=(0,l.Z)(e.imageSource);return t?n.createElement("div",{className:"figure noshadow"},n.createElement("a",{href:o,target:"_blank"},n.createElement("img",{width:r,height:a,src:o})),n.createElement("p",null,e.children)):n.createElement("div",{className:"figure"},n.createElement("a",{href:o,target:"_blank"},n.createElement("img",{width:r,height:a,src:o})),n.createElement("p",null,e.children))}},29415:function(e,t,r){var n=r(67294),l=r(88678);const a=n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},n.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class o extends n.Component{render(){return n.createElement(l.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:a},this.props.children)}}t.Z=o},88678:function(e,t,r){var n=r(67294);class l extends n.Component{render(){const e=`highlight highlight-${this.props.type}`;return n.createElement("div",{className:e},n.createElement("div",{className:"highlight-heading"},n.createElement("h5",null,n.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),n.createElement("div",{className:"highlight-content"},this.props.children))}}t.Z=l},93054:function(e,t,r){var n=r(67294),l=r(88678);const a=n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},n.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));class o extends n.Component{render(){return n.createElement(l.Z,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:a},this.props.children)}}t.Z=o},4661:function(e,t,r){r.r(t),r.d(t,{assets:function(){return v},contentTitle:function(){return M},default:function(){return T},frontMatter:function(){return g},metadata:function(){return f},toc:function(){return C}});var n=r(3905),l=r(44035),a=r(29415),o=r(39130),i=r(93054),p=Object.defineProperty,c=Object.defineProperties,u=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,k=(e,t,r)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,h=(e,t)=>{for(var r in t||(t={}))d.call(t,r)&&k(e,r,t[r]);if(m)for(var r of m(t))s.call(t,r)&&k(e,r,t[r]);return e};const g={id:"hardware-selection-mcu",title:"MCU"},M=void 0,f={unversionedId:"development/hardware-selection/hardware-components/hardware-selection-mcu",id:"development/hardware-selection/hardware-components/hardware-selection-mcu",title:"MCU",description:"",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/development/hardware-selection/hardware-components/hardware-selection-mcu.mdx",sourceDirName:"development/hardware-selection/hardware-components",slug:"/development/hardware-selection/hardware-components/hardware-selection-mcu",permalink:"/touchgfx-test.github.io/zh-TW/docs/development/hardware-selection/hardware-components/hardware-selection-mcu",draft:!1,tags:[],version:"current",frontMatter:{id:"hardware-selection-mcu",title:"MCU"},sidebar:"docs",previous:{title:"Hardware Components",permalink:"/touchgfx-test.github.io/zh-TW/docs/category/hardware-components"},next:{title:"\u986f\u793a\u5668",permalink:"/touchgfx-test.github.io/zh-TW/docs/development/hardware-selection/hardware-components/hardware-selection-display"}},v={},C=[{value:"\u983b\u7387",id:"frequency",level:2},{value:"\u5716\u5f62\u5b50\u7cfb\u7d71\u983b\u7387",id:"graphic-subsystem-frequency",level:3},{value:"\u7bc4\u4f8b",id:"example",level:3},{value:"\u5d4c\u5165\u5f0f\u786c\u9ad4\u52a0\u901f\u529f\u80fd",id:"embedded-hardware-acceleration-features",level:2},{value:"Chrom-ART",id:"chrom-art",level:3},{value:"JPEG\u786c\u9ad4\u8f49\u78bc\u5668",id:"jpeg-hardware-codec",level:3},{value:"Chrom-GRC",id:"chrom-grc",level:3},{value:"\u5167\u90e8\u5feb\u9583\u8a18\u61b6\u9ad4",id:"internal-flash",level:2},{value:"\u5167\u90e8RAM",id:"internal-ram",level:2},{value:"LCD\u63a7\u5236\u5668",id:"lcd-controller",level:2},{value:"\u5c01\u88dd\u548cI/O",id:"packages--io",level:2},{value:"\u8a18\u61b6\u9ad4\u4ecb\u9762",id:"memory-interfacing",level:2},{value:"\u53ef\u8b8a\u5b58\u5132\u63a7\u5236\u5668 &amp; \u53ef\u8b8a\u975c\u614b\u5b58\u5132\u63a7\u5236\u5668\uff08FMC/FSMC\uff09",id:"flexible-memory-controller--flexible-static-memory-controller-fmcfsmc",level:3},{value:"\u4e32\u5217\u8a18\u61b6\u9ad4\u4ecb\u9762",id:"serial-memory-interface",level:3},{value:"STM32\u8d85\u503c\u7cfb\u5217\u7522\u54c1",id:"stm32-value-line-products",level:3},{value:"Cortex\xae-M Cores",id:"cortex-m-cores",level:2},{value:"Cortex\xae-M0+",id:"cortex-m0",level:3},{value:"Cortex\xae-M4",id:"cortex-m4",level:3},{value:"Cortex\xae-M7",id:"cortex-m7",level:3},{value:"\u7279\u6027\u6982\u8ff0",id:"feature-overview",level:3},{value:"\u4e00\u7d1a\u7de9\u5b58\uff1a",id:"level-1-cache",level:3},{value:"\u96d9\u6838",id:"dual-core",level:3},{value:"\u532f\u6d41\u6392\u67b6\u69cb",id:"bus-architecture",level:2},{value:"\u50f9\u683c",id:"price",level:2}],N={toc:C};function T(e){var t,r=e,{components:p}=r,k=((e,t)=>{var r={};for(var n in e)d.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&m)for(var n of m(e))t.indexOf(n)<0&&s.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=h(h({},N),k),c(t,u({components:p,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"\u5fae\u63a7\u5236\u5668\u55ae\u5143\uff08MCU\uff09\u662f\u6240\u6709\u5d4c\u5165\u5f0f\u89e3\u6c7a\u65b9\u6848\u7684\u6838\u5fc3\u6240\u5728\uff0c\u5728\u6210\u672c\u548c\u7279\u6027\u65b9\u9762\u6709\u8a31\u591a\u4e0d\u540c\u7684\u9078\u64c7\u3002"),(0,n.kt)("p",null,"\u5728\u9078\u64c7\u5716\u5f62\u7528MCU\u6642\uff0c\u61c9\u8003\u616e\u652f\u63f4\u7684\u986f\u793a\u5668\u4ecb\u9762\u3001MCU\u5c01\u88dd\u3001\u5c3a\u5bf8\u548c\u53ef\u7372\u5f97\u7684\u5716\u5f62\u6027\u80fd\uff0c\u6700\u5f8c\u4e00\u9ede\u53d6\u6c7a\u65bc\u5169\u500b\u4e3b\u8981\u56e0\u7d20\uff1a"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u5716\u50cf\u5408\u6210")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"MCU\u4e2d\u96c6\u6210\u7684\u5716\u5f62\u52a0\u901f\u5668\u7684\u53ef\u7528\u6027\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u7cfb\u7d71\u4e2d\u7de9\u5b58\u8a18\u61b6\u9ad4\u7684\u53ef\u7528\u6027\u3002")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u8a18\u61b6\u9ad4\u5b58\u53d6\u548c\u983b\u5bec")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u6642\u8108\u983b\u7387\u548c\u5b50\u7cfb\u7d71\u532f\u6d41\u6392\u983b\u7387"),(0,n.kt)("li",{parentName:"ul"},"\u5c0d\u5167\u90e8\u5feb\u9583\u8a18\u61b6\u9ad4\u548cRAM\u8a18\u61b6\u9ad4\u7684\u5b58\u53d6\u3002")),(0,n.kt)("p",null,"\u9664\u4e86\u5716\u5f62\u5916\uff0c\u9084\u5fc5\u9808\u8003\u616e\u61c9\u7528\u4e0a\u7684\u5176\u4ed6\u65b9\u9762\uff08\u99ac\u9054\u63a7\u5236\u548c\u7121\u7dda\u6280\u8853\u7b49\uff09\u3002 \u9019\u4e9b\u56e0\u7d20\u90fd\u53ef\u80fd\u5f71\u97ffMCU\u7684\u9078\u64c7\u3002"),(0,n.kt)("p",null,"\u672c\u9801\u5c07\u9010\u4e00\u4ecb\u7d39\u4e0d\u540cMCU\u9078\u9805\uff0c\u4ee5\u53ca\u6c7a\u5b9a\u70baGUI\u61c9\u7528\u9078\u64c7\u54ea\u7a2eSTM32 MCU\u6642\u61c9\u8003\u616e\u7684\u53c3\u6578\u3002"),(0,n.kt)(l.Z,{imageSource:"/img/development/hardware-selection/mcu/mcu-portfolio-graphics.png",noShadow:!0,width:"600",mdxType:"Figure"},"STM32 MCU"),(0,n.kt)(a.Z,{mdxType:"FurtherReading"},(0,n.kt)("li",null,"\u95dc\u65bc\u6240\u6709\u7522\u54c1\u7cfb\u5217\u3001\u5916\u8a2d\u548c\u50f9\u683c\u7b49\u8cc7\u8a0a\u7684\u66f4\u5b8c\u6574\u8cc7\u8a0a\uff0c",(0,n.kt)(o.Z,{to:"https://www.st.com/en/development-tools/st-mcu-finder.html",mdxType:"Link"},"\u53ef\u901a\u904eST MCU Finder\u7372\u53d6"),"\u3002")),(0,n.kt)("h2",h({},{id:"frequency"}),"\u983b\u7387"),(0,n.kt)("p",null,"\u6838\u5fc3\u983b\u7387\u6703\u5287\u70c8\u5f71\u97ff\u5716\u5f62\u61c9\u7528\u5728\u87a2\u5e55\u5237\u65b0\u4ee5\u53ca\u87a2\u5e55\u548c\u52d5\u756b\u7684\u6d41\u66a2\u6027\u65b9\u9762\u7684\u6027\u80fd\u3002"),(0,n.kt)("p",null,"\u5b83\u6703\u5f71\u97ff\u5f9e\u5167\u90e8\u6216\u5916\u90e8\u8a18\u61b6\u9ad4\u50b3\u8f38\u5230\u986f\u793a\u5668\u5f71\u50cf\u7de9\u885d\u7684\u5927\u91cf\u8cc7\u6599\uff0c\u9084\u53ef\u80fd\u5f71\u97ff\u8a08\u7b97\u548c\u52d5\u756b\u3002"),(0,n.kt)("p",null,"\u983b\u7387\u8d8a\u9ad8\uff0c\u5728\u7279\u5b9a\u6642\u9593\u7bc4\u570d\u5167\u80fd\u5920\u50b3\u8f38\u7684\u8cc7\u6599\u5c31\u8d8a\u591a\uff0c\u5c31\u80fd\u5be6\u73fe\u66f4\u8907\u96dc\u7684\u52d5\u756b\u3002"),(0,n.kt)("p",null,"STM32\u7522\u54c1\u7684\u6838\u5fc3\u983b\u7387\u6700\u9ad8\u70ba",(0,n.kt)("strong",{parentName:"p"},"480MHz"),"\u3002"),(0,n.kt)(i.Z,{mdxType:"Note"},"\u983b\u7387\u8d8a\u9ad8\uff0c\u529f\u8017\u8d8a\u5927\u3002"),(0,n.kt)("h3",h({},{id:"graphic-subsystem-frequency"}),"\u5716\u5f62\u5b50\u7cfb\u7d71\u983b\u7387"),(0,n.kt)("p",null,"\u5fc5\u9808\u5c07\u6838\u5fc3CPU\u983b\u7387\u8207\u5716\u5f62\u5b50\u7cfb\u7d71\u983b\u7387\u5340\u5225\u958b\u4f86\u3002 \u5716\u5f62\u5b50\u7cfb\u7d71\u983b\u7387\u5305\u62ec\u5167\u90e8\u532f\u6d41\u6392\u983b\u7387\u548c\u5716\u5f62\u52a0\u901f\u5668\u983b\u7387\uff0c\u4ee5\u53ca\u5167\u90e8\u548c\u5916\u90e8\u8a18\u61b6\u9ad4\u7684\u5b58\u53d6\u901f\u5ea6\u3002"),(0,n.kt)("p",null,"\u5716\u5f62\u5b50\u7cfb\u7d71\u983b\u7387\u9084\u6703\u5287\u70c8\u5730\u5f71\u97ff\u6574\u9ad4\u5716\u5f62\u6027\u80fd\u3002"),(0,n.kt)("h3",h({},{id:"example"}),"\u7bc4\u4f8b"),(0,n.kt)("p",null,"\u4e0b\u9762\u662f\u5f9eSTM32H7\u4e0a\u7684\u5167\u90e8RAM\u904b\u884c\u6642\uff0c\u5f9e\u7406\u8ad6\u4e0a\u8a55\u4f30\u6838\u5fc3\u548c\u5b50\u7cfb\u7d71\u6027\u80fd\u7684\u7bc4\u4f8b\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"CPU\u6838\u5fc3\u7684\u904b\u884c\u983b\u7387\u70ba",(0,n.kt)("strong",{parentName:"li"},"480MHz"),"\u3002"),(0,n.kt)("li",{parentName:"ul"},"64\u4f4d\u5143AXI\u532f\u6d41\u6392\u983b\u7387\u70ba",(0,n.kt)("strong",{parentName:"li"},"240MHz"),"\u3002"),(0,n.kt)("li",{parentName:"ul"},"LCD-TFT\u986f\u793a\u5668\u63a7\u5236\u5668\uff08LTDC\uff09\u4f7f\u752864\u4f4d\u5143AXI\u532f\u6d41\u6392\uff0c\u572810\u500b\u9031\u671f\u5167\u57f7\u884c8\u6b21\u50b3\u8f38\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u5167\u90e8RAM\u4e0d\u6703\u5c0e\u81f4\u660e\u986f\u5ef6\u9072\uff0c\u53730\u7b49\u5019\u72c0\u614b\u3002")),(0,n.kt)("p",null,"\u56e0\u6b64\uff0cLTDC\u7576\u5916\u8a2d\u8a2a\u554f\u6642\u5167\u90e8RAM\u7684\u983b\u5bec\u70ba\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u983b\u5bec= 240 MHz x 8/10 x 8 \u4f4d\u5143\u7d44 = ",(0,n.kt)("strong",{parentName:"li"},"1.536MB/s"),"\u3002")),(0,n.kt)("p",null,"\u6709\u4e86\u9019\u6a23\u7684\u983b\u5bec\uff0c\u7576\u89e3\u6790\u5ea6\u70ba800x480\u4e14\u8272\u6df1\u70ba32bpp\u6642\uff0c\u5167\u90e8RAM\u53ef\u78ba\u4fdd1000\u5e40/\u79d2\uff08fps\uff09\u7684\u5237\u65b0\u7387\u3002 \u901a\u5e38\u6703\u5c07\u5c0d\u986f\u793a\u5668\u7684\u50b3\u8f38\u9650\u5236\u5728\u6bcf\u79d260\u5e40\uff08\u901a\u904e\u8abf\u6574\u50cf\u7d20\u6642\u8108\u3001\u6cbf\u7b49\uff09\uff0c\u4ee5\u514dLTDC\u548c\u5167\u90e8RAM\u7684\u983b\u5bec\u6210\u70ba\u74f6\u9838\u3002"),(0,n.kt)("h2",h({},{id:"embedded-hardware-acceleration-features"}),"\u5d4c\u5165\u5f0f\u786c\u9ad4\u52a0\u901f\u529f\u80fd"),(0,n.kt)("p",null,"\u4e0d\u540c\u7684STM32 MCU\u5177\u6709\u4e0d\u540c\u7684\u5167\u7f6e\u786c\u9ad4\u52a0\u901f\u529f\u80fd\uff0c\u6709\u52a9\u65bc\u7372\u5f97\u9ad8\u6027\u80fd\u7684\u5716\u5f62\u61c9\u7528\u3002"),(0,n.kt)("h3",h({},{id:"chrom-art"}),"Chrom-ART"),(0,n.kt)("p",null,"Chrom-ART\u662f\u4e00\u7a2e\u5148\u9032\u7684DMA\uff0c\u53ef\u4ee5\u70ba\u57f7\u884c\u5716\u5f62\u64cd\u4f5c\u63d0\u4f9b\u8f14\u52a9\u3002 \u5b83\u4e5f\u88ab\u7a31\u70baDMA2D\u3002"),(0,n.kt)("p",null,"\u8a31\u591aSTM32\u5e73\u81fa\u4e2d\u96c6\u6210\u4e86Chrom-ART\u52a0\u901f\u5668\uff0c\u5b83\u80fd\u5920\u63a7\u5236\u548c\u50b3\u8f38\u5716\u50cf\uff0c\u800c\u4e0d\u6703\u589e\u52a0CPU\u8ca0\u8f09\u3002 \u5b83\u80fd\u5920\u52a0\u5feb\u5927\u591a\u6578\u5716\u5f62\u64cd\u4f5c\u7684\u901f\u5ea6\uff0c\u5982\u984f\u8272\u586b\u5145\u3001\u5716\u50cf\u8907\u88fd\u3001\u6df7\u5408\u548c\u50cf\u7d20\u683c\u5f0f\u8f49\u63db\u3002"),(0,n.kt)("p",null,"Chrom-ART\u52a0\u901f\u5668\u80fd\u5920\u5728\u4e00\u9805\u64cd\u4f5c\u4e2d\u57f7\u884c\u5169\u500b\u5716\u5c64\u7684\u6df7\u5408\uff0c\u4e26\u5c07\u521d\u59cb\u50cf\u7d20\u683c\u5f0f\u8f49\u63db\u70ba\u9700\u8981\u7684\u8f38\u51fa\u50cf\u7d20\u683c\u5f0f\uff0c\u4e26\u5c07\u7d50\u679c\u50b3\u8f38\u5230\u8a18\u61b6\u9ad4\u76ee\u6a19\u4f4d\u7f6e\u3002"),(0,n.kt)("p",null,"Chrom-ART\u52a0\u901f\u5668\u9084\u652f\u63f4\u6709\u984f\u8272\u67e5\u95b1\u8cc7\u6599\u8868\uff08CLUT\uff09\u7684\u984f\u8272\u6a21\u5f0f\u3002 \u9019\u6709\u52a9\u65bc\u7bc0\u7701\u5b58\u5132\u7a7a\u9593\u3002"),(0,n.kt)("p",null,"\u4ee5\u5728 ",(0,n.kt)("strong",{parentName:"p"},"STM32F496-EVAL")," \u677f\u4e0a\u904b\u884c\u7684\u61c9\u7528\u70ba\u4f8b\uff0c\u7576\u555f\u7528Chrom-ART\u6642\uff0cCPU\u8ca0\u8f09\u5f9e ",(0,n.kt)("strong",{parentName:"p"},"82%"),"\u964d\u81f3 ",(0,n.kt)("strong",{parentName:"p"},"4%")," \uff1a"),(0,n.kt)(l.Z,{imageSource:"/img/development/hardware-selection/mcu/birdeatcoin.gif",mdxType:"Figure"},"Bird-Eat-Coin Chrom-ART\u7bc4\u4f8b"),(0,n.kt)("p",null,"\u6b64\u5916\uff0cSTM32H7\u7522\u54c1\u70baChrom-ART\u5916\u8a2d\u589e\u52a0\u4e86\u5f9e",(0,n.kt)("strong",{parentName:"p"},"YCbCr")," \u6a21\u5f0f\u8f49\u63db\u81f3",(0,n.kt)("strong",{parentName:"p"},"RGB"),"\u6a21\u5f0f\u7684\u80fd\u529b\u3002 \u6b64\u7279\u6027\u7d50\u5408JPEG\u786c\u9ad4\u8f49\u78bc\u5668\uff0c\u53ef\u6e1b\u8f15JPEG\u5716\u50cf\u7de8\u78bc\u548c\u89e3\u78bc\u6642\u7684CPU\u8ca0\u8f09\u3002"),(0,n.kt)(l.Z,{imageSource:"/img/development/hardware-selection/mcu/chrom-art-acceleration.png",noShadow:!0,width:"500",mdxType:"Figure"},"YCbCr\u8f49RGB\u786c\u9ad4\u6027\u80fd"),(0,n.kt)("p",null,"\u5177\u6709\u4e0a\u8ff0\u7279\u6027\u7684Chrom-ART\u52a0\u901f\u5668\u70ba\u5716\u5f62\u61c9\u7528\u63d0\u4f9b\u4e86\u5de8\u5927\u512a\u52e2\u3002 TouchGFX\uff08\u82e5\u9078\u64c7\u7684MCU\u4e2d\u6709\u63d0\u4f9b\uff09\u8655\u7406\u6240\u6709Chrom-ART\u7279\u6027\uff0c\u4e26\u5c07\u6240\u6709\u53ef\u80fd\u7684\u7e6a\u5716\u64cd\u4f5c\u91cd\u5b9a\u5411\u81f3Chrom-ART\u5916\u8a2d\u800c\u975eCPU\u3002"),(0,n.kt)("p",null,"\u70ba\u9ad8\u6027\u80fdSTM32\u7cfb\u5217\u63d0\u4f9b\u4e86Chrom-ART\u5916\u8a2d\u3002"),(0,n.kt)(a.Z,{mdxType:"FurtherReading"},(0,n.kt)("li",null,"\u8acb\u53c3\u8003AN4943\u61c9\u7528\u8aaa\u660e\u7372\u53d6\u66f4\u591a\u8cc7\u8a0a\uff1a\uff0c ",(0,n.kt)(o.Z,{to:"https://www.st.com/content/ccc/resource/technical/document/application_note/group0/17/82/73/f8/b8/8a/47/c7/DM00338361/files/DM00338361.pdf/jcr:content/translations/en.DM00338361.pdf",mdxType:"Link"},"Chrom-ART\u786c\u9ad4\u52a0\u901f"),".")),(0,n.kt)("h3",h({},{id:"jpeg-hardware-codec"}),"JPEG\u786c\u9ad4\u8f49\u78bc\u5668"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"STM32H7")," \u548c",(0,n.kt)("strong",{parentName:"p"},"STM32F7")," \u7cfb\u5217\u63d0\u4f9b\u786c\u9ad4JPEG\u8f49\u78bc\u5668\uff0c\u7528\u65bc\u5716\u50cf\u548c\u5f71\u7247\u7684\u7de8\u78bc\u548c\u89e3\u78bc\u3002"),(0,n.kt)("p",null,"\u5982\u679cUI\u61c9\u7528\u9700\u8981\u64ad\u653e\u5f71\u7247\u6a94\u6216\u986f\u793aJPEG\u5716\u50cf\uff0c\u5247\u6b64\u7279\u6027\u5341\u5206\u91cd\u8981\u3002"),(0,n.kt)("p",null,"JPEG\u5716\u50cf\u4f54\u7528\u7684\u5b58\u5132\u7a7a\u9593\u901a\u5e38\u8f03\u5c0f\u3002 JPEG\u786c\u9ad4\u8f49\u78bc\u5668\u78ba\u4fdd\u5728\u57f7\u884c\u6642\u9593\u89e3\u78bc\u5716\u50cf\uff0c\u800c\u4e0d\u6703\u767c\u751fCPU\u8d85\u8f09\u3002"),(0,n.kt)("p",null,"\u4e00\u4e9bTouchGFX\u6f14\u793a\u5229\u7528JPEG\u786c\u9ad4\u8f49\u78bc\u5668\uff0c\u6e1b\u8f15\u64ad\u653eMJPEG\u5f71\u7247\u6642\u7684CPU\u8ca0\u8f09\u3002"),(0,n.kt)(l.Z,{imageSource:"/img/development/hardware-selection/mcu/jpeg-codec-acceleration.png",noShadow:!0,width:"500",mdxType:"Figure"},"\u786c\u9ad4JPEG\u8f49\u78bc\u5668\u6027\u80fd"),(0,n.kt)(a.Z,{mdxType:"FurtherReading"},(0,n.kt)("li",null,"\u8acb\u53c3\u8003AN4996\u61c9\u7528\u8aaa\u660e\u7372\u53d6\u66f4\u591a\u8cc7\u8a0a\uff1a ",(0,n.kt)(o.Z,{to:"https://www.st.com/content/ccc/resource/technical/document/application_note/group0/a5/9d/22/46/61/6d/4a/ab/DM00356635/files/DM00356635.pdf/jcr:content/translations/en.DM00356635.pdf",mdxType:"Link"},"\u786c\u9ad4JPEG\u8f49\u78bc\u5668"),"\u3002")),(0,n.kt)("h3",h({},{id:"chrom-grc"}),"Chrom-GRC"),(0,n.kt)("p",null,"\u5728\u4e00\u4e9bSTM32\u5fae\u63a7\u5236\u5668\u4e2d\uff0c\u5916\u8a2dSTM32 Chrom-GRC\u2122\uff08GFXMMU\uff09\u65e8\u5728\u70ba\u5411\u975e\u77e9\u5f62\u986f\u793a\u5668\u767c\u5c55\u7684\u65b0\u8da8\u52e2\u63d0\u4f9b\u9ad8\u6548\u652f\u63f4\u3002"),(0,n.kt)("p",null,"\u5728\u5b9a\u5740\u975e\u77e9\u5f62\u986f\u793a\u5668\u6642\uff0cChrom-GRC\u2122\u5916\u8a2d\u53ef\u6e1b\u5c11\u5b58\u5132\u5f71\u50cf\u7de9\u885d\u6240\u9700\u7684RAM\u7a7a\u9593\u3002"),(0,n.kt)("p",null,"\u5c0d\u65bc\u5713\u5f62\u986f\u793a\u5668\uff0c\u5916\u8a2d\u53ef\u5c07\u5b58\u5132\u7a7a\u9593\u8981\u6c42\u964d\u4f4e",(0,n.kt)("strong",{parentName:"p"},"20%"),"\u3002"),(0,n.kt)("p",null,"\u5728\u63a7\u5236\u975e\u65b9\u5f62\u87a2\u5e55\u6642\uff0c\u5efa\u8b70\u4f46\u4e0d\u5f37\u5236\u4f7f\u7528Chrom-GRC\u2122\u5916\u8a2d\u3002"),(0,n.kt)(l.Z,{imageSource:"/img/development/hardware-selection/mcu/stm-32-chrom-grc.png",noShadow:!0,width:"600",mdxType:"Figure"},"\u901a\u904eChrom-GRC\u5916\u8a2d\u512a\u5316\u8a18\u61b6\u9ad4"),(0,n.kt)(a.Z,{mdxType:"FurtherReading"},(0,n.kt)("li",null,"\u8acb\u53c3\u8003AN5051\u61c9\u7528\u8aaa\u660e\u7372\u53d6\u66f4\u591a\u8cc7\u8a0a\uff1a",(0,n.kt)(o.Z,{to:"https://www.st.com/content/ccc/resource/technical/document/application_note/group0/74/21/86/42/af/d5/4f/58/DM00407777/files/DM00407777.pdf/jcr:content/translations/en.DM00407777.pdf",mdxType:"Link"},"\u5716\u5f62\u8a18\u61b6\u9ad4\u512a\u5316"),"\u3002")),(0,n.kt)("h2",h({},{id:"internal-flash"}),"\u5167\u90e8\u5feb\u9583\u8a18\u61b6\u9ad4"),(0,n.kt)("p",null,"\u4f7f\u7528\u9ede\u9663\u5716\u8cc7\u6e90\u7684\u5716\u5f62\u5316\u4f7f\u7528\u8005\u4ecb\u9762\u61c9\u7528\u9700\u8981\u4f7f\u7528\u975e\u63ee\u767c\u6027\u8a18\u61b6\u9ad4\u4f86\u5b58\u5132\u8cc7\u6599\u3002 \u5728\u67d0\u4e9b\u60c5\u6cc1\u4e0b\uff0c\u5f9e\u5167\u90e8\u5feb\u9583\u8a18\u61b6\u9ad4\u57f7\u884c\u548c\u8a2a\u554f\u5167\u90e8\u5feb\u9583\u8a18\u61b6\u9ad4\u6703\u6bd4\u5916\u90e8\u5feb\u9583\u8a18\u61b6\u9ad4\u5feb\u6700\u591a\u5169\u500d\u3002"),(0,n.kt)("p",null,"\u7531\u65bc\u5167\u90e8\u5feb\u9583\u8a18\u61b6\u9ad4\u7684\u5927\u5c0f\u6709\u9650\uff0c\u5f88\u591a\u6642\u5019\u6703\u7528\u5167\u90e8\u5feb\u9583\u8a18\u61b6\u9ad4\u4f86\u5b58\u5132TouchGFX\u6846\u67b6\u3001\u87a2\u5e55\u5b9a\u7fa9\u548cUI\u908f\u8f2f\uff0c\u800c\u9ede\u9663\u5716\u8cc7\u6599\u5247\u5b58\u5132\u5728\u5916\u90e8\u5feb\u9583\u8a18\u61b6\u9ad4\u4e2d\u3002"),(0,n.kt)("p",null,"\u5c0d\u5716\u5f62\u61c9\u7528\u4f7f\u7528\u7684STM32\u7522\u54c1\u7d44\u5408\u7684\u5167\u90e8\u5feb\u9583\u8a18\u61b6\u9ad4\u5927\u5c0f\u4ecb\u65bc",(0,n.kt)("strong",{parentName:"p"},"\u5e7eKB"),"\u548c",(0,n.kt)("strong",{parentName:"p"},"\u5e7eMB"),"\u4e4b\u9593\u3002"),(0,n.kt)("p",null,"\u7576\u9ede\u9663\u5716\u8cc7\u6599\u91cf\u8207\u5167\u90e8\u5feb\u9583\u8a18\u61b6\u9ad4\u4e0d\u5339\u914d\u6642\uff0c\u53ef\u80fd\u9700\u8981\u7528\u5230\u5916\u90e8\u8a18\u61b6\u9ad4\u3002"),(0,n.kt)(a.Z,{mdxType:"FurtherReading"},"\u8acb\u53c3\u8003",(0,n.kt)(o.Z,{to:"hardware-selection-external-memories",mdxType:"Link"},"\u5916\u90e8\u8a18\u61b6\u9ad4")," \u77ad\u89e3\u66f4\u591a\u8cc7\u8a0a\u3002"),(0,n.kt)("p",null,"TouchGFX\u5feb\u9583\u8a18\u61b6\u9ad4\u8981\u6c42\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u6846\u67b6\uff1a                      ",(0,n.kt)("strong",{parentName:"li"},"60 KB")," \u81f3 ",(0,n.kt)("strong",{parentName:"li"},"100 KB"),"\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u87a2\u5e55\u5b9a\u7fa9\u548cGUI\u908f\u8f2f\uff1a ",(0,n.kt)("strong",{parentName:"li"},"1"),"\u81f3 ",(0,n.kt)("strong",{parentName:"li"},"100KB"),"\u3002")),(0,n.kt)("p",null,"\u9019\u4e9b\u6578\u4f4d\u53d6\u6c7a\u65bc\u4f7f\u7528\u7684\u6846\u67b6\u7279\u6027\uff0c\u4ee5\u53ca\u61c9\u7528\u7684\u5927\u5c0f\u548c\u8907\u96dc\u5ea6\u3002"),(0,n.kt)("h2",h({},{id:"internal-ram"}),"\u5167\u90e8RAM"),(0,n.kt)("p",null,"\u5167\u90e8RAM\u53ef\u7528\u65bc\u5b58\u5132\u5f71\u50cf\u7de9\u885d\u7684\u524d\u63d0\u662f\u5132\u5f71\u7de9\u885d\u7684\u5927\u5c0f\u80fd\u5920\u653e\u5165\u53ef\u7528\u8a18\u61b6\u9ad4\u3002 \u6216\u8005\uff0c\u4e5f\u53ef\u4ee5\u70ba\u8a2d\u7f6e\u589e\u52a0\u5916\u90e8\u8a18\u61b6\u9ad4\u3002"),(0,n.kt)("p",null,"\u6839\u64da\u5bec\u5ea6\u3001\u9ad8\u5ea6\u548c\u8272\u6df1\u8a08\u7b97\u5f71\u50cf\u7de9\u885d\u7684\u5927\u5c0f\u3002 \u4f8b\u5982\uff0c\u5c0d\u65bc\u5177\u6709HVGA\u89e3\u6790\u5ea6\uff08480x320\uff09\u548c16\u4f4d\u8272\u7684\u986f\u793a\u5668\uff0c\u4e00\u500b\u5f71\u50cf\u7de9\u885d\u6240\u9700\u7684\u5b58\u5132\u7a7a\u9593\u70ba\uff1a"),(0,n.kt)("p",null,"1\u500b\u5f71\u50cf\u7de9\u885d\u7684\u5927\u5c0f= ",(0,n.kt)("strong",{parentName:"p"},"480 x 320 x 2")," =  ",(0,n.kt)("strong",{parentName:"p"},"307.200 \u4f4d\u5143\u7d44")),(0,n.kt)("p",null,"\u5c0d\u5716\u5f62\u61c9\u7528\u4f7f\u7528\u7684STM32\u7522\u54c1\u7684\u5167\u90e8RAM\u5927\u5c0f\u4ecb\u65bc",(0,n.kt)("strong",{parentName:"p"},"\u5e7eKB"),"\u548c",(0,n.kt)("strong",{parentName:"p"},"\u5e7eMB"),"\u4e4b\u9593\u3002"),(0,n.kt)(a.Z,{mdxType:"FurtherReading"},"\u8acb\u53c3\u8003",(0,n.kt)(o.Z,{to:"hardware-selection-external-memories",mdxType:"Link"},"\u5916\u90e8\u8a18\u61b6\u9ad4")," \u4e00\u7bc0\uff0c\u77ad\u89e3\u95dc\u65bc\u5916\u90e8\u8a18\u61b6\u9ad4\u4e2d\u5f71\u50cf\u7de9\u885d\u7684\u66f4\u591a\u8cc7\u8a0a\u3002"),(0,n.kt)("p",null,"TouchGFX RAM\u8981\u6c42\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u6846\u67b6\uff1a          ",(0,n.kt)("strong",{parentName:"li"},"10 KB"),"\u81f3",(0,n.kt)("strong",{parentName:"li"},"30 KB")),(0,n.kt)("li",{parentName:"ul"},"\u5c0f\u90e8\u4ef6\uff1a            ",(0,n.kt)("strong",{parentName:"li"},"1 KB")," \u81f3 ",(0,n.kt)("strong",{parentName:"li"},"15 KB"))),(0,n.kt)("p",null,"\u4e0d\u540c\u61c9\u7528\u7684\u5b58\u5132\u7a7a\u9593\u8981\u6c42\u53ef\u80fd\u4e0d\u540c\u3002"),(0,n.kt)("h2",h({},{id:"lcd-controller"}),"LCD\u63a7\u5236\u5668"),(0,n.kt)("p",null,"MCU\u7684\u9078\u64c7\u9084\u53d6\u6c7a\u65bc\u8981\u4f7f\u7528\u7684\u986f\u793a\u5668\u4ecb\u9762\u548c\u89e3\u6790\u5ea6\u3002 \u4ee5800x480\u7684\u89e3\u6790\u5ea6\u70ba\u4f8b\uff0c\u53ea\u80fd\u901a\u904e\u9ad8\u6548\u7684\u8cc7\u6599\u50b3\u8f38\u8db3\u5920\u4ecb\u9762\u4f86\u5be6\u73fe\u3002 RGB-TFT\u548cMPI-DSI\u4ecb\u9762\u901a\u5e38\u7528\u65bc\u66f4\u9ad8\u89e3\u6790\u5ea6\uff0c\u539f\u56e0\u662f\u5728\u8a31\u591a\u60c5\u6cc1\u4e0b\uff0c\u983b\u5bec\u9ad8\u65bcSPI\u6216\u5e73\u884c8080/6800\u3002 \u4f4e\u89e3\u6790\u5ea6\u986f\u793a\u5668\u901a\u5e38\u5167\u7f6e\u63a7\u5236\u5668\u548cGRAM\uff0c\u53ef\u901a\u904e\u7c21\u55ae\u7684SPI\u62168080/6800\u4ecb\u9762\u9032\u884c\u9023\u63a5\u3002"),(0,n.kt)("p",null,"\u9ad8\u89e3\u6790\u5ea6\u986f\u793a\u5668\uff08WQVGA\u53ca\u4ee5\u4e0a\uff09\u901a\u5e38\u6c92\u6709\u5167\u7f6e\u63a7\u5236\u5668\u548cGRAM\uff0c\u56e0\u6b64\u63a7\u5236\u5668\u9700\u4f4d\u65bc\u5fae\u63a7\u5236\u5668\u5074\u3002 \u5167\u7f6eRGB-TFT\u548cMIPI DSI\u4ecb\u9762\u7684STM32 MCU\u4e0a\u6709\u63a7\u5236\u5668\u3002"),(0,n.kt)(l.Z,{imageSource:"/img/development/hardware-selection/mcu/display-interfaces.png",noShadow:!0,width:"600",mdxType:"Figure"},"\u5716\u4e2d\u986f\u793a\u4e86\u6709/\u6c92\u6709GRAM\u548c\u986f\u793a\u5668\u63a7\u5236\u5668\u7684\u4e0d\u540c\u986f\u793a\u5668\u4ecb\u9762\u76844\u500b\u7bc4\u4f8b\u3002"),(0,n.kt)(a.Z,{mdxType:"FurtherReading"},"\u8acb\u53c3\u8003 ",(0,n.kt)(o.Z,{to:"hardware-selection-display",mdxType:"Link"},"\u986f\u793a\u5668")," \u4e00\u7bc0\u77ad\u89e3\u66f4\u591a\u8cc7\u8a0a\u3002"),(0,n.kt)("h2",h({},{id:"packages--io"}),"\u5c01\u88dd\u548cI/O"),(0,n.kt)("p",null,"\u9700\u8981\u7684I/O\u6578\u91cf\u53d6\u6c7a\u65bc\u9078\u64c7\u7684\u986f\u793a\u5668\u548c\u5916\u90e8\u8a18\u61b6\u9ad4\u3002 \u904b\u884c\u5177\u6709\u5e73\u884cRAM\u548c\u5feb\u9583\u8a18\u61b6\u9ad4\u7684\u5e73\u884c\u986f\u793a\u5668\u53ef\u80fd\u9700\u8981\u5927\u91cfI/O\uff0c\u5c0e\u81f4\u5c01\u88dd\u5c3a\u5bf8\u8b8a\u5927\u3002"),(0,n.kt)("h2",h({},{id:"memory-interfacing"}),"\u8a18\u61b6\u9ad4\u4ecb\u9762"),(0,n.kt)("p",null,"\u7576\u5fae\u63a7\u5236\u5668\u4e2d\u7684\u5167\u90e8\u5feb\u9583\u8a18\u61b6\u9ad4\u548cRAM\u4e0d\u5920\u7528\u6642\uff0c\u9078\u64c7\u5177\u6709\u6700\u5408\u9069\u5916\u90e8\u8a18\u61b6\u9ad4\u4ecb\u9762\u7684\u5408\u9069MCU\u5c31\u8b8a\u5f97\u5341\u5206\u91cd\u8981\u3002 STM32\u7522\u54c1\u63d0\u4f9b\u4e86\u4e0d\u540c\u7684\u8a18\u61b6\u9ad4\u63a7\u5236\u5668\u5916\u8a2d\uff0c\u7528\u65bc\u9023\u63a5NOR\u3001NAND\u3001SRAM\u3001SDRAM\u3001LPSDR SDRAM\u548cPSRAM\u8a18\u61b6\u9ad4\u3002"),(0,n.kt)("h3",h({},{id:"flexible-memory-controller--flexible-static-memory-controller-fmcfsmc"}),"\u53ef\u8b8a\u5b58\u5132\u63a7\u5236\u5668 & \u53ef\u8b8a\u975c\u614b\u5b58\u5132\u63a7\u5236\u5668\uff08FMC/FSMC\uff09"),(0,n.kt)("p",null,"\u9664\u4e86\u652f\u63f4\u975c\u614bRAM\uff0cFMC\u9084\u70baFSMC\u589e\u52a0\u4e86\u52d5\u614bRAM\u652f\u63f4\uff08SDRAM\uff09\u3002 \u53ef\u8b8a\u5b58\u5132\u63a7\u5236\u5668\uff08FMC\uff09\u5177\u6709\u5f88\u9ad8\u7684\u5916\u90e8\u5b58\u53d6\u901f\u7387\u548c8\u300116\u7279\u5225\u662f32\u4f4d\u5143\u8cc7\u6599\u532f\u6d41\u6392\uff0c\u53ef\u5be6\u73fe\u8207\u5916\u90e8RAM\u4e4b\u9593\u7684\u66f4\u9ad8\u541e\u5410\u7387\uff0c\u5f9e\u800c\u66f4\u597d\u5730\u652f\u6301\u66f4\u9ad8\u89e3\u6790\u5ea6\u3002 FMC\u7684\u6bcf\u500b\u5b58\u5132\u5340\u6709\u7368\u7acb\u7684\u6676\u7247\u9078\u64c7\u3002 FMC\u53ef\u4ee5\u63a7\u5236\u7528\u65bc\u8cc7\u6599\u7684\u5916\u90e8\u5feb\u9583\u8a18\u61b6\u9ad4\u3001\u7528\u65bc\u5e40\u7de9\u885d\u7684\u5916\u90e8RAM\u8a18\u61b6\u9ad4\u548c\u7528\u65bc\u5716\u5f62\u68e7\u7684\u5806\u64f4\u5c55\u3002"),(0,n.kt)("h3",h({},{id:"serial-memory-interface"}),"\u4e32\u5217\u8a18\u61b6\u9ad4\u4ecb\u9762"),(0,n.kt)("p",null,"\u6839\u64da\u9078\u64c7\u7684STM32\u7522\u54c1\uff0c\u53ef\u80fd\u6709\u5167\u7f6e\u4e32\u5217\u8a18\u61b6\u9ad4\u4ecb\u9762\uff0c\u9664\u4e86QSPI\u3001PSRAM\u3001OPI PSRAM\u548cHyper RAM\u8a18\u61b6\u9ad4\uff0c\u9084\u53ef\u4ee5\u9023\u63a5\u55ae\u7dda\u3001\u96d9\u7dda\u3001\u56db\u7dda\u3001\u516b\u7dda\u548chyperBus\u5feb\u9583\u8a18\u61b6\u9ad4\u3002 \u4e32\u5217\u9ad8\u901f\u8a18\u61b6\u9ad4\u4ecb\u9762\u5728\u8655\u65bc\u8a18\u61b6\u9ad4\u6620\u5c04\u6a21\u5f0f\u6642\u53ef\u63a7\u5236\u6700\u5927 ",(0,n.kt)("strong",{parentName:"p"},"256 MB")," \u7684\u8a18\u61b6\u9ad4\uff1b\u7576\u8655\u65bc\u76f4\u63a5\u6a21\u5f0f\u6642\u70ba ",(0,n.kt)("strong",{parentName:"p"},"4 GB"),"\u3002"),(0,n.kt)("p",null,"\u76f8\u6bd4\u65bc\u5e73\u884c\u4ecb\u9762\uff0c\u4e32\u5217\u8a18\u61b6\u9ad4\u4ecb\u9762\u53ef\u5c07\u6210\u672c\u8f03\u4f4e\u7684\u5916\u90e8\u5feb\u9583\u8a18\u61b6\u9ad4\u9023\u63a5\u5230\u5c0f\u578b\u5c01\u88dd\uff0c\u540c\u6642\u6e1b\u5c11\u4f7f\u7528\u7684\u5f15\u8173\u6578\u3002"),(0,n.kt)(a.Z,{mdxType:"FurtherReading"},"\u8acb\u53c3\u8003AN4760\u61c9\u7528\u8aaa\u660e\u7372\u53d6\u66f4\u591a\u8cc7\u8a0a\uff1a",(0,n.kt)(o.Z,{to:"https://www.st.com/content/ccc/resource/technical/document/application_note/group0/b0/7e/46/a8/5e/c1/48/01/DM00227538/files/DM00227538.pdf/jcr:content/translations/en.DM00227538.pdf",mdxType:"Link"},"STM32\u5fae\u63a7\u5236\u5668\u4e0a\u7684\u56db\u7ddaSPI\u4ecb\u9762"),"."),(0,n.kt)("h3",h({},{id:"stm32-value-line-products"}),"STM32\u8d85\u503c\u7cfb\u5217\u7522\u54c1"),(0,n.kt)("p",null,"\u70ba\u4e86\u512a\u5316\u50f9\u683c\uff0cSTM32H7\u548cSTM32F7\u5e73\u81fa\u63d0\u4f9b\u4e86\u5177\u6709\u6709\u9650\u5167\u90e8\u5feb\u9583\u8a18\u61b6\u9ad4\u7684\u8d85\u503c\u7cfb\u5217\u7522\u54c1\u3002 \u4f7f\u7528\u9019\u4e9b\u7522\u54c1\u6642\uff0c\u5716\u5f62\u8cc7\u6e90\u5c07\u4fdd\u5b58\u5728\u5916\u90e8\u5feb\u9583\u8a18\u61b6\u9ad4\u4e2d\u3002"),(0,n.kt)("h2",h({},{id:"cortex-m-cores"}),"Cortex\xae-M Cores"),(0,n.kt)("p",null,"STM32 MCU\u63a1\u7528\u4e0d\u540c\u7684ARC Cortex\xae-M\u67b6\u69cb\u3002 \u4e0b\u9762\u662fSTM32\u4e0a\u904b\u884c\u5716\u5f62\u6642\u6700\u5e38\u7528\u7684\u5167\u6838\u3002"),(0,n.kt)("h3",h({},{id:"cortex-m0"}),"Cortex\xae-M0+"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Cortex\xae-M0+"),"\u7684\u7279\u9ede\u5728\u65bc\u5b83\u67b6\u69cb\u7c21\u55ae\u4e14\u50f9\u683c\u4f4e\u5ec9\u3002 \u5efa\u8b70\u5c07\u5176\u61c9\u7528\u65bc\u4ee5\u8f03\u4f4e\u89e3\u6790\u5ea6\u904b\u884c\u7684\u8f03\u5c0f\u7684\u975c\u614b\u5716\u5f62\u61c9\u7528\u3002"),(0,n.kt)("h3",h({},{id:"cortex-m4"}),"Cortex\xae-M4"),(0,n.kt)("p",null,"\u8207",(0,n.kt)("strong",{parentName:"p"},"Cortex\xae-M4"),"\u76f8\u6bd4\uff0c",(0,n.kt)("strong",{parentName:"p"},"M0+"),"\u5305\u542b\u66f4\u591a\u529f\u80fd\uff0c\u4e26\u52a0\u5feb\u4e86\u8a08\u7b97\u901f\u5ea6\u3002 \u5b83\u5305\u542bDSP\u6307\u4ee4\u96c6\u548c\u55ae\u7cbe\u78ba\u5ea6FPU\u55ae\u5143\u3002 \u9019\u4e9b\u6307\u4ee4\u53ef\u6e1b\u8f15CPU\u8ca0\u8f09\u4e26\u63d0\u9ad8\u8a08\u7b97\u901f\u5ea6\u3002"),(0,n.kt)("h3",h({},{id:"cortex-m7"}),"Cortex\xae-M7"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Cortex\xae-M7"),"\u5305\u542b\u66f4\u8907\u96dc\u7684\u67b6\u69cb\uff0c\u4e5f\u5305\u542bDSP\u6307\u4ee4\u96c6\uff0c\u4e26\u5177\u6709\u66f4\u9ad8\u6548\u7684\u96d9\u7cbe\u5ea6FPU\u55ae\u5143\uff0c\u4ee5\u53ca\u53ef\u5bb9\u7d0d\u6700\u591a",(0,n.kt)("strong",{parentName:"p"},"16KB"),"\u7684\u8cc7\u6599\u548c\u6307\u4ee4\u7684\u4e00\u7d1a\u7de9\u885d\u8a18\u61b6\u9ad4\u3002 \u7de9\u885d\u8a18\u61b6\u9ad4\u63d0\u4f9b\u4e86\u4f7f\u8cc7\u6599\u548c\u6307\u4ee4\u7dca\u9130\u8a08\u7b97\u55ae\u5143\u4ee5\u4fbf\u512a\u5316\u63d0\u53d6\u6642\u9593\u7684\u53ef\u80fd\u6027\u3002"),(0,n.kt)("h3",h({},{id:"feature-overview"}),"\u7279\u6027\u6982\u8ff0"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",h({parentName:"tr"},{align:null}),"\u7279\u5fb5"),(0,n.kt)("th",h({parentName:"tr"},{align:null}),"Cortex-M0+"),(0,n.kt)("th",h({parentName:"tr"},{align:null}),"Cortex-M4"),(0,n.kt)("th",h({parentName:"tr"},{align:null}),"Cortex-M7"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",h({parentName:"tr"},{align:null}),"DMIPS/MHz\u7bc4\u570d"),(0,n.kt)("td",h({parentName:"tr"},{align:null}),"0.95-1.36"),(0,n.kt)("td",h({parentName:"tr"},{align:null}),"1.25-1.95"),(0,n.kt)("td",h({parentName:"tr"},{align:null}),"2.14-3.23")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",h({parentName:"tr"},{align:null}),"Core Mark\xae/MHz"),(0,n.kt)("td",h({parentName:"tr"},{align:null}),"2.46"),(0,n.kt)("td",h({parentName:"tr"},{align:null}),"3.42"),(0,n.kt)("td",h({parentName:"tr"},{align:null}),"5.01")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",h({parentName:"tr"},{align:null}),"\u6578\u4f4d\u4fe1\u865f\u8655\u7406\uff08DSP\uff09\u64f4\u5c55"),(0,n.kt)("td",h({parentName:"tr"},{align:null}),"\u7121"),(0,n.kt)("td",h({parentName:"tr"},{align:null}),"\u6709"),(0,n.kt)("td",h({parentName:"tr"},{align:null}),"\u6709")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",h({parentName:"tr"},{align:null}),"\u6d6e\u9ede\u6578\u786c\u9ad4"),(0,n.kt)("td",h({parentName:"tr"},{align:null}),"\u7121"),(0,n.kt)("td",h({parentName:"tr"},{align:null}),"\u6709\uff08SP\uff09"),(0,n.kt)("td",h({parentName:"tr"},{align:null}),"\u6709\uff08SP + DP\uff09")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",h({parentName:"tr"},{align:null}),"\u5167\u7f6e\u7de9\u5b58"),(0,n.kt)("td",h({parentName:"tr"},{align:null}),"\u7121"),(0,n.kt)("td",h({parentName:"tr"},{align:null}),"\u7121"),(0,n.kt)("td",h({parentName:"tr"},{align:null}),"\u6709\uff08\u53ef\u90784-64KB\uff09\uff0cI-Cachen D-Cache")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",h({parentName:"tr"},{align:null}),"\u532f\u6d41\u6392\u5354\u5b9a"),(0,n.kt)("td",h({parentName:"tr"},{align:null}),"AHB Lite\uff0cFast I/O"),(0,n.kt)("td",h({parentName:"tr"},{align:null}),"AHB Lite\uff0c APB"),(0,n.kt)("td",h({parentName:"tr"},{align:null}),"AXI4\uff0cAHB Lite\uff0cAPB\uff0cTCM")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",h({parentName:"tr"},{align:null}),"\u96d9\u6838\u9396\u6b65\u652f\u6301"),(0,n.kt)("td",h({parentName:"tr"},{align:null}),"\u7121"),(0,n.kt)("td",h({parentName:"tr"},{align:null}),"\u7121"),(0,n.kt)("td",h({parentName:"tr"},{align:null}),"\u6709")))),(0,n.kt)("h3",h({},{id:"level-1-cache"}),"\u4e00\u7d1a\u7de9\u5b58\uff1a"),(0,n.kt)("p",null,"STM32H7\u548cSTM32F7\u7cfb\u5217\u5305\u542b\u6700\u5927",(0,n.kt)("strong",{parentName:"p"},"16 KB"),"\u7684\u4e00\u7d1a\u7de9\u5b58\uff0c\u7528\u65bc\u6307\u4ee4\u548c\u8cc7\u6599\u7de9\u5b58\u3002 \u4e00\u7d1a\u7de9\u5b58\u5728CPU\u9644\u8fd1\u4fdd\u5b58\u4e86\u8cc7\u6599\u6216\u6307\u4ee4\u96c6\uff0c\u56e0\u6b64CPU\u7121\u9700\u4e0d\u65b7\u5730\u63d0\u53d6\u91cd\u8907\u4f7f\u7528\u7684\u540c\u4e00\u8cc7\u6599\u3002"),(0,n.kt)(a.Z,{mdxType:"FurtherReading"},"\u8acb\u53c3\u8003AN4839\u61c9\u7528\u8aaa\u660e\u7372\u53d6\u66f4\u591a\u8cc7\u8a0a\uff1a",(0,n.kt)(o.Z,{to:"https://www.st.com/content/ccc/resource/technical/document/application_note/group0/08/dd/25/9c/4d/83/43/12/DM00272913/files/DM00272913.pdf/jcr:content/translations/en.DM00272913.pdf",mdxType:"Link"},"\u4e00\u7d1a\u7de9\u5b58"),"."),(0,n.kt)("h3",h({},{id:"dual-core"}),"\u96d9\u6838"),(0,n.kt)("p",null,"STM32H7\u7cfb\u5217\u5305\u542b\u96d9\u6838\u7cfb\u5217\uff1a"),(0,n.kt)("p",null,"Arm\xae Cortex\xae-M7\u548cCortex\xae-M4\u5167\u6838\u7684\u904b\u884c\u983b\u7387\u5206\u5225\u53ef\u9054\u5230480 MHz\u548c240 MHz\uff0c\u53ef\u4ee5\u652f\u63f4\u66f4\u591a\u7684\u8655\u7406\u548c\u61c9\u7528\u7a0b\u5f0f\u5206\u5340\u3002 \u96d9\u6838STM32H7\u7522\u54c1\u7cfb\u5217\u53ef\u8207\u5d4c\u5165\u5f0fSMPS\u4e00\u8d77\u4f7f\u7528\uff0c\u4ee5\u63d0\u9ad8\u52d5\u614b\u96fb\u6e90\u6548\u7387\u3002"),(0,n.kt)("p",null,"\u7b2c\u4e8c\u500bCortex\xae-M4\u53ef\u4ee5\u6e1b\u8f15\u8a08\u7b97\u91cf\uff0c\u4ee5\u4fbf\u958b\u653eM7\u5167\u6838\u7528\u65bc\u7e6a\u5716/\u5716\u5f62\u64cd\u4f5c\u3002"),(0,n.kt)(i.Z,{mdxType:"Note"},"\u5c0d\u65bc\u96d9\u6838MCU\uff0c\u5fc5\u9808\u91dd\u5c0d\u7279\u5b9a\u74b0\u5883\u555f\u7528TouchGFX Generator\u3002 Only a single concurrent context is supported. \u8acb\u53c3\u8003",(0,n.kt)(o.Z,{to:"../../touchgfx-hal-development/touchgfx-generator",mdxType:"Link"},"TouchGFX Generator\u4f7f\u7528\u8005\u6307\u5357")," \u7372\u53d6\u66f4\u591a\u8cc7\u8a0a\u3002"),(0,n.kt)("h2",h({},{id:"bus-architecture"}),"\u532f\u6d41\u6392\u67b6\u69cb"),(0,n.kt)("p",null,"\u5927\u591a\u6578STM32\u5fae\u63a7\u5236\u5668\u63d0\u4f9b ",(0,n.kt)("strong",{parentName:"p"},"32\u4f4d\u5143\u591aAHB")," \u532f\u6d41\u6392\u77e9\u9663\uff0c\u7528\u65bc\u4e92\u9023\u6240\u6709\u4e3b\u8a2d\u5099\uff08CPU\u3001DMA\u7b49\uff09\u548c\u5f9e\u8a2d\u5099\uff08\u5feb\u9583\u8a18\u61b6\u9ad4\u3001RAM\u3001FSMC\u3001AHB\u548cAPB\u5916\u8a2d\uff09\u3002 \u9019\u6a23\u4e00\u4f86\uff0c\u5373\u4f7f\u591a\u500b\u9ad8\u901f\u5916\u8a2d\u540c\u6642\u5de5\u4f5c\uff0c\u4e5f\u80fd\u78ba\u4fdd\u7121\u7e2b\u3001\u9ad8\u6548\u7684\u64cd\u4f5c\u3002"),(0,n.kt)("p",null,"\u9664\u4e86\u591aAHB\u4e92\u9023\uff0c\u4e00\u4e9bSTM32\uff08Cortex\xae-M7\uff09\u7522\u54c1\u9084\u5167\u7f6e",(0,n.kt)("strong",{parentName:"p"},"64\u4f4d"),"AXI\uff0c\u7528\u65bc\u64f4\u5c55\u983b\u5bec\u3002 \u56e0\u6b64\uff0c\u5728\u6027\u80fd\u548c\u529f\u8017\u4e4b\u9593\u5be6\u73fe\u4e86\u6700\u4f73\u5e73\u8861\u3002"),(0,n.kt)("h2",h({},{id:"price"}),"\u50f9\u683c"),(0,n.kt)("p",null,"\u5167\u90e8\u5feb\u9583\u8a18\u61b6\u9ad4\u548c\u5167\u90e8RAM\u7684\u5927\u5c0f\u4ee5\u53ca\u5c01\u88dd\u4e2d\u7684\u53ef\u7528\u5f15\u8173\u6578\u90fd\u6703\u5f71\u97ffMCU\u7684\u50f9\u683c\u3002 \u4f7f\u7528\u8005\u53ef\u4ee5\u6839\u64da\u4ecb\u9762\u3001\u89e3\u6790\u5ea6\u548c\u6027\u80fd\u7b49\u65b9\u9762\u7684\u8981\u6c42\uff0c\u6700\u7d42\u627e\u5230\u5408\u9069\u7684MCU\u548c\u4f30\u50f9\u3002"),(0,n.kt)(a.Z,{mdxType:"FurtherReading"},(0,n.kt)("li",null,"\u8acb\u53c3\u8003 ",(0,n.kt)(o.Z,{to:"https://www.st.com/en/microcontrollers-microprocessors/stm32-32-bit-arm-cortex-mcus.html",mdxType:"Link"},"STM32 32\u4f4dArm Cortex MCUs")," \u77ad\u89e3\u53ef\u7528\u7684STM32\u5fae\u63a7\u5236\u5668\u3002")))}T.isMDXComponent=!0}}]);