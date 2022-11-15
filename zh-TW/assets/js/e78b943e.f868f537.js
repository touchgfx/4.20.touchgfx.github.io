"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[8747],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return h}});var n=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var o=n.createContext({}),u=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,a=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=u(r),h=l,d=m["".concat(o,".").concat(h)]||m[h]||s[h]||a;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function h(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=r.length,i=new Array(a);i[0]=m;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:l,i[1]=c;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},44035:function(e,t,r){var n=r(67294),l=r(25026);t.Z=function(e){const t=e.noShadow||!1,r=e.width,a=e.height,i=(0,l.Z)(e.imageSource);return t?n.createElement("div",{className:"figure noshadow"},n.createElement("a",{href:i,target:"_blank"},n.createElement("img",{width:r,height:a,src:i})),n.createElement("p",null,e.children)):n.createElement("div",{className:"figure"},n.createElement("a",{href:i,target:"_blank"},n.createElement("img",{width:r,height:a,src:i})),n.createElement("p",null,e.children))}},29415:function(e,t,r){var n=r(67294),l=r(88678);const a=n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},n.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class i extends n.Component{render(){return n.createElement(l.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:a},this.props.children)}}t.Z=i},88678:function(e,t,r){var n=r(67294);class l extends n.Component{render(){const e=`highlight highlight-${this.props.type}`;return n.createElement("div",{className:e},n.createElement("div",{className:"highlight-heading"},n.createElement("h5",null,n.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),n.createElement("div",{className:"highlight-content"},this.props.children))}}t.Z=l},6138:function(e,t,r){r.r(t),r.d(t,{assets:function(){return v},contentTitle:function(){return k},default:function(){return b},frontMatter:function(){return f},metadata:function(){return g},toc:function(){return y}});var n=r(3905),l=r(39130),a=r(29415),i=r(44035),c=Object.defineProperty,o=Object.defineProperties,u=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,h=(e,t,r)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&h(e,r,t[r]);if(p)for(var r of p(t))m.call(t,r)&&h(e,r,t[r]);return e};const f={id:"engine-architecture",title:"\u5f15\u64ce\u67b6\u69cb"},k=void 0,g={unversionedId:"basic-concepts/engine-architecture",id:"basic-concepts/engine-architecture",title:"\u5f15\u64ce\u67b6\u69cb",description:"",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/basic-concepts/engine-architecture.mdx",sourceDirName:"basic-concepts",slug:"/basic-concepts/engine-architecture",permalink:"/4.20/zh-TW/docs/basic-concepts/engine-architecture",draft:!1,tags:[],version:"current",frontMatter:{id:"engine-architecture",title:"\u5f15\u64ce\u67b6\u69cb"}},v={},y=[{value:"\u56db\u500b\u7d44\u6210\u90e8\u5206",id:"the-four-parts",level:2},{value:"MCU",id:"mcu",level:3},{value:"RAM",id:"ram",level:3},{value:"Flash",id:"flash",level:3},{value:"\u986f\u793a",id:"display",level:3},{value:"\u6027\u80fd",id:"performance",level:2},{value:"\u4e00\u822c\u7b56\u7565",id:"general-strategy",level:3},{value:"\u8a2d\u7f6e\u7279\u5b9a\u7b56\u7565",id:"setup-specific-strategy",level:3}],M={toc:y};function b(e){var t,r=e,{components:c}=r,h=((e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&p)for(var n of p(e))t.indexOf(n)<0&&m.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=d(d({},M),h),o(t,u({components:c,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"\u6b78\u6839\u7d50\u5e95\uff0c\u7e6a\u5716\u7cfb\u7d71\u5c31\u662f\u8b93\u67d0\u4e9b\u5167\u5bb9\u986f\u793a\u5728\u986f\u793a\u5668\u4e0a\u3002  ")),(0,n.kt)("p",null,"\u201c\u5d4c\u5165\u5f0f\u7e6a\u5716\u7cfb\u7d71\u201d\u4e00\u8a5e\u6709\u8a31\u591a\u7a2e\u542b\u7fa9\u3002"),(0,n.kt)("p",null,"\u9996\u5148\uff0c\u4e0d\u540c\u7684\u4eba\u5c0d\u201c\u5d4c\u5165\u5f0f\u7cfb\u7d71\u201d\u4e00\u8a5e\u6709\u4e0d\u540c\u7684\u7406\u89e3\u3002 \u5c0d\u67d0\u4e9b\u4eba\u4f86\u8aaa\uff0c\u5d4c\u5165\u5f0f\u7cfb\u7d71\u610f\u5473\u8457\u5341\u5206\u53ef\u9760\u7684\u820a\u5f0f8\u4f4d\u5143\u5fae\u63a7\u5236\u5668\uff0c\u7121\u4f5c\u696d\u7cfb\u7d71\uff0c\u5be6\u969b\u4e0a\u4e5f\u7121RAM\u3001ROM\u6216GPIO\u3002 \u5c0d\u5176\u4ed6\u4eba\u4f86\u8aaa\uff0c\u5b83\u53ef\u80fd\u610f\u5473\u8457\u529f\u80fd\u5f37\u5927\u7684\u73fe\u4ee3\u667a\u6167\u624b\u6a5f\u3002"),(0,n.kt)("p",null,"\u5176\u6b21\uff0c\u201c\u7e6a\u5716\u7cfb\u7d71\u201d\u4e00\u8a5e\u6709\u8a31\u591a\u7a2e\u89e3\u91cb\u3002 \u5c0d\u67d0\u4e9b\u4eba\u4f86\u8aaa\uff0c\u5b83\u8868\u793a\u5728\u559c\u6b61\u7684\u7e6a\u756b\u7a0b\u5f0f\u4e2d\u7e6a\u50cf\u7d20\u9ede\u3002 \u5c0d\u5176\u4ed6\u4eba\u4f86\u8aaa\uff0c\u5b83\u8868\u793a\u904a\u6232\u6a5f\u4e0a\u904b\u884c\u76843D\u6e32\u67d3\u8edf\u9ad4\u3002"),(0,n.kt)("p",null,"\u5c0dTouchGFX\u800c\u8a00\uff0c\u5d4c\u5165\u5f0f\u7cfb\u7d71\u8868\u793aSTM32\u5fae\u63a7\u5236\u5668\u4e0a\u7684\u4efb\u610f\u7cfb\u7d71\u3002 \u7e6a\u5716\u7cfb\u7d71\u8868\u793a\u904b\u884c\u983b\u7387\u70ba60\u5e40\u6bcf\u79d2\u7684\u4e92\u52d5\u5f0f\u61c9\u7528\u3002"),(0,n.kt)("h2",d({},{id:"the-four-parts"}),"\u56db\u500b\u7d44\u6210\u90e8\u5206"),(0,n.kt)("p",null,"\u70ba\u4e86\u5728\u6b64\u985e\u5e73\u81fa\u4e0a\u5be6\u73fe\u7e6a\u5716\u61c9\u7528\uff0c\u6211\u5011\u63a2\u5957\u56db\u500b\u76f4\u63a5\u76f8\u95dc\u7684\u4e3b\u8981\u5143\u4ef6\u3002 \u7576\u7136\uff0c\u5d4c\u5165\u5f0f\u7cfb\u7d71\u53ef\u80fd\u5305\u542b\u8a31\u591a\u5176\u4ed6\u5143\u4ef6\uff0c\u4f46\u5176\u4ed6\u5143\u4ef6\u8207\u5716\u5f62\u986f\u793a\u7684\u76f8\u95dc\u6027\u8f03\u5c0f\u3002"),(0,n.kt)(i.Z,{imageSource:"/img/basic-concepts/four-parts.svg",noShadow:"true",width:480,mdxType:"Figure"},"MCU\u3001RAM\u3001\u5feb\u9583\u8a18\u61b6\u9ad4\u548c\u986f\u793a\u5668"),(0,n.kt)("p",null,"\u7c21\u800c\u8a00\u4e4b\uff0cTouchGFX\u4f7f\u7528MCU\uff0c\u901a\u904e\u5c0d\u5feb\u9583\u8a18\u61b6\u9ad4\u4e2d\u7684\u5404\u500b\u90e8\u5206\u9032\u884c\u7d44\u5408\uff0c\u5275\u5efa\u548c\u66f4\u65b0RAM\u4e2d\u7684\u5716\u50cf\u3002 \u7d44\u5408\u5716\u50cf\u6703\u88ab\u50b3\u8f38\u5230\u986f\u793a\u5668\u3002 \u7cfb\u7d71\u6703\u8996\u9700\u8981\u76e1\u53ef\u80fd\u591a\u5730\u91cd\u8907\u6b64\u904e\u7a0b\u3002"),(0,n.kt)("h3",d({},{id:"mcu"}),"MCU"),(0,n.kt)("p",null,"\u5728\u9019\u500b\u904e\u7a0b\u4e2d\uff0cMCU\u627f\u64d4\u4e86\u6240\u6709\u91cd\u8981\u4efb\u52d9\u3002 \u5b83\u8b80\u53d6\u5feb\u9583\u8a18\u61b6\u9ad4\u4e2d\u7684\u5716\u50cf\uff0c\u4e26\u5c07\u5b83\u5011\u5beb\u5165RAM\u3002 \u5728\u5c07\u534a\u900f\u660e\u7d05\u8272\u6587\u5b57\u878d\u5408\u5230\u5716\u50cf\u4e0a\u6642\uff0c\u5b83\u8a08\u7b97\u5f97\u5230\u7684\u8272\u5f69\u4e26\u5c07\u5176\u5b58\u5132\u5230RAM\u3002 \u5b83\u5c0d\u5713\u7684\u6240\u6709\u50cf\u7d20\u9032\u884c\u6e32\u67d3\u4e26\u5b58\u5132\u5230RAM\u3002"),(0,n.kt)("p",null,"STM32 MCU\u5177\u6709\u7279\u5b9a\u529f\u80fd\uff0c\u80fd\u5920\u70ba\u7e6a\u5716\u7cfb\u7d71\u7684\u5be6\u73fe\u63d0\u4f9b\u5354\u52a9\u3002 \u53c3\u898b",(0,n.kt)("a",d({parentName:"p"},{href:"../development/hardware-selection/hardware-components/hardware-selection-mcu"}),"\u201cMCU\u201d"),"\u90e8\u5206\u77ad\u89e3\u4e0d\u540cMCU\u7684\u8a73\u7d30\u8cc7\u8a0a\u3002"),(0,n.kt)("h3",d({},{id:"ram"}),"RAM"),(0,n.kt)("p",null,"\u8a08\u7b97\u5f8c\u7684\u5716\u50cf\u5b58\u5132\u5728RAM\u4e2d\u3002 MCU\u5c0dRAM\u57f7\u884c\u8b80\u548c\u5beb\u64cd\u4f5c\u3002 \u5728\u5c07\u6240\u5f97\u5716\u50cf\u50b3\u8f38\u7d66\u986f\u793a\u5668\u6642\uff0c\u518d\u6b21\u57f7\u884c\u8b80\u64cd\u4f5c\u3002"),(0,n.kt)("p",null,"RAM\u901a\u5e38\u4f4d\u65bcMCU\u5167\u90e8\u3002 \u5982\u679c\u5c07\u6240\u5f97\u5716\u50cf\u5b58\u5132\u5728\u5167\u90e8RAM\u4e2d\u7684\u65b9\u6cd5\u4e0d\u53ef\u884c\uff0c\u53ef\u4ee5\u6dfb\u52a0\u5916\u90e8RAM\u3002"),(0,n.kt)("h3",d({},{id:"flash"}),"Flash"),(0,n.kt)("p",null,"\u6240\u6709\u975c\u614b\u8cc7\u6599\u5747\u5b58\u5132\u5728\u5feb\u9583\u8a18\u61b6\u9ad4\u4e2d\u3002 \u5716\u50cf\u3001\u5b57\u9ad4\u548c\u6587\u5b57\u3002 \u5feb\u9583\u8a18\u61b6\u9ad4\u7531MCU\u8b80\u53d6\uff0c\u5176\u5167\u5bb9\u88ab\u5beb\u5165RAM\u6216\u8207RAM\u7684\u5167\u5bb9\u9032\u884c\u7d44\u5408\u3002"),(0,n.kt)("p",null,"\u5728\u5927\u591a\u6578\u60c5\u6cc1\u4e0b\uff0c\u7531\u65bc\u5167\u90e8\u5feb\u9583\u8a18\u61b6\u9ad4\u5f88\u5c11\u80fd\u5920\u5bb9\u7d0d\u4e0b\u6240\u6709\u5716\u5f62\u8cc7\u7522\uff0c\u56e0\u6b64\u8a2d\u7f6e\u4e2d\u6703\u589e\u52a0\u5916\u90e8\u5feb\u9583\u8a18\u61b6\u9ad4\u3002"),(0,n.kt)("p",null,"\u7406\u60f3\u7684\u505a\u6cd5\u662f\u5c0d\u5feb\u9583\u8a18\u61b6\u9ad4\u9032\u884c\u8a18\u61b6\u9ad4\u6620\u5c04\uff0c\u4ee5\u4fbf\u5f9e\u5feb\u9583\u8a18\u61b6\u9ad4\u76f4\u63a5\u8b80\u53d6\u50cf\u7d20\u4e26\u5beb\u5165RAM\u3002 \u6216\u8005\uff0c\u53ef\u5c07\u5feb\u9583\u8a18\u61b6\u9ad4\u5167\u5bb9\u5b58\u5728RAM\u4e2d\uff0c\u7136\u5f8c\u518d\u5f9eRAM\u8b80\u53d6\u3002"),(0,n.kt)("h3",d({},{id:"display"}),"\u986f\u793a"),(0,n.kt)("p",null,"\u986f\u793a\u5668\u5c07\u5716\u50cf\u5be6\u969b\u986f\u793a\u51fa\u4f86\u3002"),(0,n.kt)("p",null,"RAM\u4e2d\u5132\u5b58\u7684\u5716\u50cf\u7531MCU\u6309\u56fa\u5b9a\u6642\u9593\u9593\u9694\u767c\u9001\u5230\u986f\u793a\u5668\u3002"),(0,n.kt)("h2",d({},{id:"performance"}),"\u6027\u80fd"),(0,n.kt)("p",null,"\u70ba\u4e86\u5728\u9019\u7a2e\u8a2d\u7f6e\u548c\u6700\u7d42\u7684\u986f\u793a\u5668\u4e0a\u7372\u5f97\u6d41\u66a2\u7684\u52d5\u756b\u6548\u679c\uff0c\u5728\u5be6\u73fe\u5d4c\u5165\u5f0f\u7e6a\u5716\u7cfb\u7d71\u6642\u5fc5\u9808\u6ce8\u610f\u4e00\u4e9b\u4e8b\u9805\u3002"),(0,n.kt)("h3",d({},{id:"general-strategy"}),"\u4e00\u822c\u7b56\u7565"),(0,n.kt)("p",null,"\u901a\u5e38\u52d9\u5fc5\u8003\u616e\u7684\u5e7e\u9ede\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u4e0d\u5728\u7121\u8b8a\u5316\u7684\u90e8\u5206\u82b1\u8cbb\u6642\u9593"),(0,n.kt)("li",{parentName:"ul"},"\u5f9e\u5feb\u9583\u8a18\u61b6\u9ad4\u50b3\u8f38\u5230RAM\u7684\u8cc7\u6599\u61c9\u76e1\u53ef\u80fd\u5c11"),(0,n.kt)("li",{parentName:"ul"},"\u5f9eRAM\u50b3\u8f38\u5230\u986f\u793a\u5668\u7684\u8cc7\u6599\u61c9\u76e1\u53ef\u80fd\u5c11"),(0,n.kt)("li",{parentName:"ul"},"\u5728\u5716\u5f62\u54c1\u8cea\u8207\u52d5\u756b\u901f\u5ea6\u4e4b\u9593\u5c0b\u6c42\u9069\u7576\u5e73\u8861"),(0,n.kt)("li",{parentName:"ul"},"\u5229\u7528\u786c\u9ad4\u529f\u80fd")),(0,n.kt)("p",null,"TouchGFX Engine\u6709\u52a9\u65bc\u89e3\u6c7a\u6240\u6709\u9019\u4e9b\u554f\u984c\uff0c\u4f46\u958b\u767c\u4eba\u54e1\u4e5f\u5fc5\u9808\u6ce8\u610f\u3002"),(0,n.kt)("h3",d({},{id:"setup-specific-strategy"}),"\u8a2d\u7f6e\u7279\u5b9a\u7b56\u7565"),(0,n.kt)("p",null,"\u5927\u91cf\u53ef\u80fd\u7684\u5d4c\u5165\u5f0f\u8a2d\u7f6e\u610f\u5473\u8457\u57fa\u65bc\u7279\u5b9a\u8a2d\u7f6e\u8207\u57fa\u65bc\u5176\u4ed6\u8a2d\u7f6e\u80fd\u5920\u5be6\u73fe\u7684\u6548\u679c\u4e4b\u9593\u53ef\u80fd\u5b58\u5728\u5de8\u5927\u5dee\u7570\u3002"),(0,n.kt)("p",null,"\u53ef\u80fd\u7684\u8a2d\u7f6e\u6982\u89bd"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"STM32 MCU",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"50\u81f3500 MHz\u6642\u9418\u983b\u7387"),(0,n.kt)("li",{parentName:"ul"},"\u5716\u5f62\u76f8\u95dcIP\u7684\u53ef\u80fd\u7bc4\u570d\uff1a"))),(0,n.kt)("li",{parentName:"ul"},"RAM",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"0\u81f31 MB\uff08\u5167\u90e8\uff09"),(0,n.kt)("li",{parentName:"ul"},"0\u81f3100 MB\uff08\u5916\u90e8\uff09"))),(0,n.kt)("li",{parentName:"ul"},"Flash",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"0\u81f31 MB\uff08\u5167\u90e8\uff09"),(0,n.kt)("li",{parentName:"ul"},"0\u81f31 GB\uff08\u5916\u90e8\uff09"))),(0,n.kt)("li",{parentName:"ul"},"\u986f\u793a",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"1\u81f324\u4f4d\u8272\u5f69"),(0,n.kt)("li",{parentName:"ul"},"100x100\u81f31000x1000\u50cf\u7d20")))),(0,n.kt)("p",null,"\u986f\u7136\uff0c\u5728\u4e00\u7a2e\u8a2d\u7f6e\u4e0a\u53ef\u5be6\u73fe\u7684UI\u61c9\u7528\uff0c\u5728\u53e6\u4e00\u7a2e\u8a2d\u7f6e\u4e0a\u53ef\u80fd\u6839\u672c\u7121\u6cd5\u5be6\u73fe\u3002 \u56e0\u6b64\uff0c\u5fc5\u9808\u6ce8\u610f\u8b93\u9700\u8981\u7684UI\u61c9\u7528\u8207\u5be6\u969b\u8a2d\u7f6e\u4fdd\u6301\u4e00\u81f4\u3002"),(0,n.kt)("p",null,"TouchGFX\u662f\u70ba\u9019\u4e9b\u8a2d\u7f6e\u91cd\u65b0\u8a2d\u8a08\u7684\uff0c\u5074\u91cd\u4e8e\u6700\u5927\u7a0b\u5ea6\u5229\u7528STM32 MCU\u7684\u80fd\u529b\u4e26\u76e1\u53ef\u80fd\u6e1b\u5c11\u5c0dRAM\u548c\u5feb\u9583\u8a18\u61b6\u9ad4\u7684\u9700\u6c42\u3002"),(0,n.kt)(a.Z,{mdxType:"FurtherReading"},(0,n.kt)("li",null,"\u8acb\u53c3\u8003 ",(0,n.kt)(l.Z,{to:"https://www.st.com/en/microcontrollers-microprocessors/stm32-32-bit-arm-cortex-mcus.html",mdxType:"Link"},"STM32 32\u4f4dArm Cortex MCUs")," \u77ad\u89e3\u53ef\u7528\u7684STM32\u5fae\u63a7\u5236\u5668\u3002"),(0,n.kt)("li",null,"\u53c3\u898b",(0,n.kt)(l.Z,{to:"../development/hardware-selection/hardware-components/hardware-selection-display",mdxType:"Link"},"\u201c\u986f\u793a\u5668\u201d"),"\u90e8\u5206\u77ad\u89e3\u95dc\u65bc\u53ef\u80fd\u7684\u986f\u793a\u5668\u9078\u9805\u7684\u8a73\u7d30\u8cc7\u8a0a\u3002"),(0,n.kt)("li",null,"\u53c3\u898b",(0,n.kt)(l.Z,{to:"../development/hardware-selection/hardware-components/hardware-selection-mcu",mdxType:"Link"},"\u201cMCU\u201d"),"\u90e8\u5206\u77ad\u89e3\u95dc\u65bc\u53ef\u80fd\u7684MCU\u9078\u9805\u7684\u8a73\u7d30\u8cc7\u8a0a\u3002"),(0,n.kt)("li",null,"\u53c3\u898b",(0,n.kt)(l.Z,{to:"../development/hardware-selection/hardware-components/hardware-selection-external-memories",mdxType:"Link"},"\u201c\u5916\u90e8\u8a18\u61b6\u9ad4\u201d"),"\u90e8\u5206\u77ad\u89e3\u95dc\u65bc\u53ef\u80fd\u7684\u5916\u90e8\u8a18\u61b6\u9ad4\u9078\u9805\u7684\u8a73\u7d30\u8cc7\u8a0a\u3002")))}b.isMDXComponent=!0}}]);