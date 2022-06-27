"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[5847],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var a=o.createContext({}),u=function(e){var t=o.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=u(e.components);return o.createElement(a.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,h=d["".concat(a,".").concat(m)]||d[m]||p[m]||i;return n?o.createElement(h,c(c({ref:t},s),{},{components:n})):o.createElement(h,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=d;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var u=2;u<i;u++)c[u]=n[u];return o.createElement.apply(null,c)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},29415:function(e,t,n){var o=n(67294),r=n(88678);const i=o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},o.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class c extends o.Component{render(){return o.createElement(r.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:i},this.props.children)}}t.Z=c},88678:function(e,t,n){var o=n(67294);class r extends o.Component{render(){const e=`highlight highlight-${this.props.type}`;return o.createElement("div",{className:e},o.createElement("div",{className:"highlight-heading"},o.createElement("h5",null,o.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),o.createElement("div",{className:"highlight-content"},this.props.children))}}t.Z=r},31217:function(e,t,n){var o=n(67294);class r extends o.Component{render(){return o.createElement("code",null,this.props.children)}}t.Z=r},93054:function(e,t,n){var o=n(67294),r=n(88678);const i=o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},o.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));class c extends o.Component{render(){return o.createElement(r.Z,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:i},this.props.children)}}t.Z=c},37793:function(e,t,n){var o=n(67294),r=n(88678);const i=o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},o.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class c extends o.Component{render(){return o.createElement(r.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:i},this.props.children)}}t.Z=c},32475:function(e,t,n){n.r(t),n.d(t,{assets:function(){return b},contentTitle:function(){return v},default:function(){return y},frontMatter:function(){return k},metadata:function(){return x},toc:function(){return w}});var o=n(3905),r=n(29415),i=n(31217),c=n(37793),l=n(93054),a=n(39130),u=Object.defineProperty,s=Object.defineProperties,p=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,f=(e,t,n)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,g=(e,t)=>{for(var n in t||(t={}))m.call(t,n)&&f(e,n,t[n]);if(d)for(var n of d(t))h.call(t,n)&&f(e,n,t[n]);return e};const k={id:"using-ides-with-touchgfx",title:"\u5c07IDE\u8207TouchGFX\u7d44\u5408\u4f7f\u7528"},v=void 0,x={unversionedId:"development/ui-development/working-with-touchgfx/using-ides-with-touchgfx",id:"development/ui-development/working-with-touchgfx/using-ides-with-touchgfx",title:"\u5c07IDE\u8207TouchGFX\u7d44\u5408\u4f7f\u7528",description:"",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/development/ui-development/working-with-touchgfx/using-ides-with-touchgfx.mdx",sourceDirName:"development/ui-development/working-with-touchgfx",slug:"/development/ui-development/working-with-touchgfx/using-ides-with-touchgfx",permalink:"/4.20/zh-TW/docs/development/ui-development/working-with-touchgfx/using-ides-with-touchgfx",tags:[],version:"current",frontMatter:{id:"using-ides-with-touchgfx",title:"\u5c07IDE\u8207TouchGFX\u7d44\u5408\u4f7f\u7528"},sidebar:"docs",previous:{title:"Working with TouchGFX",permalink:"/4.20/zh-TW/docs/category/working-with-touchgfx"},next:{title:"\u5c0f\u90e8\u4ef6\u548c\u5bb9\u5668",permalink:"/4.20/zh-TW/docs/development/ui-development/working-with-touchgfx/widgets-and-containers"}},b={},w=[{value:"\u5148\u6c7a\u689d\u4ef6\uff1aGCC\u7248",id:"prerequisite-gcc-version",level:2},{value:"\u5f9eIDE\u547c\u53ebTouchGFX Makefile",id:"invoke-touchgfx-makefile-from-ide",level:2},{value:"\u5c07TouchGFX\u7a0b\u5f0f\u78bc\u6a94\u6dfb\u52a0\u5230\u81ea\u5df1\u7684\u5c08\u6848\u4e2d",id:"add-touchgfx-code-files-to-your-own-project",level:2},{value:"\u6240\u9700\u7684\u6587\u4ef6",id:"required-files",level:3},{value:"\u5305\u542b\u8def\u5f91",id:"include-paths",level:3},{value:"\u7de8\u8b6f\u5668\u958b\u95dc",id:"compiler-switches",level:3},{value:"Cortex-M0 cores",id:"cortex-m0-cores",level:4},{value:"Cortex-M4f\u5167\u6838",id:"cortex-m4f-cores",level:4},{value:"Cortex-M7\u5167\u6838",id:"cortex-m7-cores",level:4},{value:"Cortex-M33 cores",id:"cortex-m33-cores",level:4},{value:"\u9023\u7d50\u5668",id:"linker",level:3},{value:"\u6838\u5fc3\u5eab",id:"core-library",level:4},{value:"\u9023\u7d50\u5668\u9078\u9805",id:"linker-options",level:4},{value:"\u8cc7\u7522\u751f\u6210",id:"asset-generation",level:2},{value:"\u71d2\u9304\u548c\u9664\u932f",id:"flashing-and-debugging",level:2}],T={toc:w};function y(e){var t,n=e,{components:u}=n,f=((e,t)=>{var n={};for(var o in e)m.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&d)for(var o of d(e))t.indexOf(o)<0&&h.call(e,o)&&(n[o]=e[o]);return n})(n,["components"]);return(0,o.kt)("wrapper",(t=g(g({},T),f),s(t,p({components:u,mdxType:"MDXLayout"}))),(0,o.kt)("p",null,"\u7576\u5275\u5efa\u65b0\u7684TouchGFX\u5c08\u6848\u6642\uff0c\u7121\u8ad6\u662f\u901a\u904eTouchGFX Designer\u9084\u662fSTM32CubeMX\uff0c\u63d0\u4f9b\u4ee5\u4e0b\u5c08\u6848\u6a94\u6848\u548c\u5eab\u4ee5\u4fbf\u4f7f\u7528\u5c08\u6709\u7684IDE\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Keil uVision",(0,o.kt)("em",{parentName:"li"},"\uff08\u50c5\u76ee\u6a19\uff09")),(0,o.kt)("li",{parentName:"ul"},"IAR Embedded Workbench",(0,o.kt)("em",{parentName:"li"},"\uff08\u50c5\u76ee\u6a19\uff09")),(0,o.kt)("li",{parentName:"ul"},"STM32CubeIDE",(0,o.kt)("em",{parentName:"li"},"\uff08\u50c5\u76ee\u6a19\uff09")),(0,o.kt)("li",{parentName:"ul"},"Microsoft Visual Studio",(0,o.kt)("em",{parentName:"li"}," (\u50c5\u6a21\u64ec\u5668)"))),(0,o.kt)("p",null,"\u6ce8\u610f\uff01\u4e26\u975e\u6240\u6709\u5c08\u6848\u6a94\u6848\u90fd\u540c\u6642\u51fa\u73fe\u5728\u5c08\u6848\u4e2d\u3002 \u5728STM32CubeMX\u4e2d\u9078\u64c7\u7684\u5de5\u5177\u93c8\u5c31\u662f\u5c07\u8981\u751f\u6210\u7684\u5de5\u5177\u93c8\uff0c\u9810\u8a2d\u60c5\u6cc1\u4e0b\u9078\u64c7STM32CubeIDE\u3002"),(0,o.kt)(r.Z,{mdxType:"FurtherReading"},"\u5982\u4f55\u66f4\u6539\u5de5\u5177\u93c8\u5728",(0,o.kt)(a.Z,{to:"../../board-bring-up/how-to/01-create-project",mdxType:"Link"},"\u6b64\u8655"),"\u4ecb\u7d39\u3002"),(0,o.kt)("p",null,"\u6b64\u5916\uff0c\u9084\u63d0\u4f9b\u751f\u6210\u6a94\u548c\u5eab\uff08\u7528\u65bc\u57fa\u65bcshell\u7684\u7de8\u8b6f\uff09\u548cGCC\u4ea4\u53c9\u7de8\u8b6f\u5668\uff08\u7528\u65bcARM\u76ee\u6a19\uff09\u3002 \u672c\u6587\u5c07\u8aaa\u660e\u60a8\u914d\u7f6e\u7528\u65bcTouchGFX\u61c9\u7528\u958b\u767c\u7684\u7684\u7b2c\u4e09\u65b9\u5ee0\u5546\u7684GCC-based IDE\u3002 \u57fa\u672c\u4e0a\uff0c\u4efb\u4f55\u80fd\u5920\u547c\u53ebGCC\u4ea4\u53c9\u7de8\u8b6f\u5668\u7684IDE\u90fd\u662f\u53ef\u7528\u7684\u3002"),(0,o.kt)(l.Z,{mdxType:"Note"},"\u8acb\u6ce8\u610f\uff0c\u672c\u6587\u53ea\u662f\u6982\u8ff0\u8a2d\u7f6e\u904e\u7a0b\uff08\u7121\u6cd5\u63d0\u4f9b\u5c0d\u6240\u6709\u5404\u7a2eIDE\u7684\u652f\u63f4\uff09\uff0c\u4f46\u5e0c\u671b\u6b64\u8655\u63d0\u4f9b\u7684\u8cc7\u8a0a\u8db3\u4ee5\u8b93\u60a8\u5728\u6700\u559c\u6b61\u7684IDE\u4e2d\u4f7f\u7528TouchGFX\u3002"),(0,o.kt)("p",null,"\u672c\u6587\u5c07\u63cf\u8ff0\u5169\u7a2e\u5c07TouchGFX\u8207\u5176\u4ed6IDE\u7d44\u5408\u4f7f\u7528\u7684\u65b9\u6cd5\u3002 \u4e00\u7a2e\u65b9\u6cd5\u662f\u5f9eIDE\u5167\u90e8\u8abf\u547c\u53ebTouchGFX Makefile\u3002 \u9019\u53ef\u80fd\u662f\u6700\u7c21\u55ae\u7684\u65b9\u6cd5\uff0c\u4f46\u5982\u679c\u60a8\u60f3\u66f4\u597d\u5730\u63a7\u5236\u7de8\u8b6f\u904e\u7a0b\u548c\u6a94\u6848\u4f4d\u7f6e\uff0c\u9019\u7a2e\u65b9\u6cd5\u4e26\u975e\u7e3d\u662f\u9069\u7576\u7684\u9078\u64c7\u3002 \u6216\u8005\uff0c\u53ef\u4ee5\u624b\u52d5\u5c07\u5fc5\u8981\u7684TouchGFX\u6a94\u6848\u548c\u914d\u7f6e\u9078\u9805\u6dfb\u52a0\u5230\u73fe\u6709\u5c08\u6848\u4e2d\u3002"),(0,o.kt)("h2",g({},{id:"prerequisite-gcc-version"}),"\u5148\u6c7a\u689d\u4ef6\uff1aGCC\u7248"),(0,o.kt)("p",null,"\u672c\u6587\u5047\u8a2d\u60a8\u5c07\u4f7f\u7528\u901a\u904eTouchGFX\u74b0\u5883shell\u5206\u767c\u7684GCC\u4ea4\u53c9\u7de8\u8b6f\u5668\u5de5\u5177\u93c8\uff0c\u6216\u8005\u4f7f\u7528\u60a8\u81ea\u5df1\u7279\u6709\u7684GCC\u5de5\u5177\u93c8\uff08\u80fd\u5920\u9023\u7d50\u4f7f\u7528\u74b0\u5883shell\u5de5\u5177\u93c8\u7de8\u8b6f\u7684TouchGFX\u6838\u5fc3\u5eab\uff09\u3002"),(0,o.kt)("p",null,"\u4f7f\u7528\u7684GCC\u7de8\u8b6f\u5668\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",g({parentName:"pre"},{}),"$ arm-none-eabi-gcc.exe -v\nTarget: arm-none-eabi\nThread model: single\ngcc version 7.3.1 20180622 (release) [ARM/embedded-7-branch revision 261907] (GNU Tools for Arm Embedded Processors 7-2018-q2-update)\n")),(0,o.kt)("p",null,"\u8a72\u7de8\u8b6f\u5668\u53ef\u4ee5\u5f9e",(0,o.kt)("a",g({parentName:"p"},{href:"https://launchpad.net/gcc-arm-embedded"}),"https://launchpad.net/gcc-arm-embedded"),"\u7372\u5f97\u3002"),(0,o.kt)("h2",g({},{id:"invoke-touchgfx-makefile-from-ide"}),"\u5f9eIDE\u547c\u53ebTouchGFX Makefile"),(0,o.kt)("p",null,"\u5728IDE\u4e2d\u7de8\u8b6fTouchGFX\u61c9\u7528\u7a0b\u5f0f\u7684\u4e00\u7a2e\u5feb\u901f\u800c\u7c97\u7565\u7684\u65b9\u6cd5\u662f\u76f4\u63a5\u547c\u53ebTouchGFX Designer\u6240\u5275\u5efa\u7684\u5c08\u6848\u4e2d\u5305\u542b\u7684Makefile\u3002 To use the TouchGFX environment shell to compile an application for target, you must navigate to the TouchGFX application root directory and execute the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",g({parentName:"pre"},{}),"$ make -f gcc/Makefile\n")),(0,o.kt)("p",null,"\u73fe\u5728\uff0c\u9664\u4e86\u5f9eTouchGFX\u74b0\u5883shell\u547c\u53ebmake\u547d\u4ee4\uff0c\u9084\u53ef\u4ee5\u5f9eIDE\u4e2d\u547c\u53eb\u3002 Shell\u4f7f\u7528\u7684\u53ef\u57f7\u884c\u6a94\uff08make, arm-none-eabi-gcc\uff0c ..\uff09\u5be6\u969b\u4e0a\u662f\u666e\u901a\u7684Windows x86\u53ef\u57f7\u884c\u6a94\uff0c\u6240\u4ee5make\u61c9\u7528\u7a0b\u5f0f\u53ef\u4ee5\u901a\u904e\u666e\u901a\u7684\u547d\u4ee4\u63d0\u793a\u7b26\u57f7\u884c\uff0c\u524d\u63d0\u662f\u5df2\u7d93\u914d\u7f6e\u4e86\u4ee5\u4e0b\u74b0\u5883\u8b8a\u6578\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",g({parentName:"pre"},{}),"C:\\TouchGFX\\4.18.0\\env\\MinGW\\bin\nC:\\TouchGFX\\4.18.0\\env\\MinGW\\msys\\1.0\\Ruby30-x64\\bin\nC:\\TouchGFX\\4.18.0\\env\\MinGW\\msys\\1.0\\bin\nC:\\TouchGFX\\4.18.0\\env\\MinGW\\msys\\1.0\\gnu-arm-gcc\\bin\n")),(0,o.kt)("p",null,"\u5728\u8a2d\u7f6e\u4e86\u6240\u9700\u7684Windows\u74b0\u5883\u8b8a\u6578\u4e4b\u5f8c\uff0c\u73fe\u5728\u53ef\u4ee5\u76f4\u63a5\u5f9eIDE\u4e2d\u547c\u53eb",(0,o.kt)("inlineCode",{parentName:"p"},"make"),"\u547d\u4ee4\u4f5c\u7528\u65bc\u9069\u7576\u7684TouchGFX\u751f\u6210\u6587\u4ef6\u3002 \u60a8\u9700\u8981\u57f7\u884c\u7684\u6307\u4ee4\u8207\u5f9eshell\u7de8\u8b6f\u6642\u76f8\u540c\uff0c\u5373\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",g({parentName:"pre"},{}),"$ make -f gcc/Makefile\n")),(0,o.kt)(l.Z,{mdxType:"Note"},"\u8acb\u6ce8\u610f\uff0c\u76ee\u524d\u7684\u76ee\u9304\u5fc5\u9808\u662f\u8981\u7de8\u8b6f\u7684\u61c9\u7528\u7a0b\u5f0f\u7684\u6839\u76ee\u9304\u3002"),(0,o.kt)("h2",g({},{id:"add-touchgfx-code-files-to-your-own-project"}),"\u5c07TouchGFX\u7a0b\u5f0f\u78bc\u6a94\u6dfb\u52a0\u5230\u81ea\u5df1\u7684\u5c08\u6848\u4e2d"),(0,o.kt)("p",null,"\u5982\u679c\u60a8\u60f3\u66f4\u597d\u5730\u63a7\u5236\u7de8\u8b6f\u904e\u7a0b\u548c\u6a94\u6848\u4f4d\u7f6e\uff0c\u53ef\u4ee5\u5c07\u76f8\u95dc\u7684TouchGFX\u7a0b\u5f0f\u78bc\u6a94\u96c6\u6210\u5230\u81ea\u5df1\u7684\u73fe\u6709\u5c08\u6848\u4e2d\uff0c\u4e26\u6dfb\u52a0\u5fc5\u8981\u7684\u5305\u542b\u8def\u5f91\u548c\u7de8\u8b6f\u5668\u958b\u95dc\u4ee5\u4f7f\u5176\u80fd\u5920\u7de8\u8b6f\u3002"),(0,o.kt)("h3",g({},{id:"required-files"}),"\u6240\u9700\u7684\u6587\u4ef6"),(0,o.kt)("p",null,"\u57fa\u672c\u4e0a\uff0c\u60a8\u9700\u8981\u5411IDE\u5c08\u6848\u6dfb\u52a0\u7684TouchGFX\u6a94\u8207\u4f7f\u7528make\u6307\u4ee4\u5f9eTouchGFX\u74b0\u5883shell\u7de8\u8b6f\u6642\u76f8\u540c\u3002 \u5177\u9ad4\u5305\u542b\u54ea\u4e9b\u6a94\u53d6\u6c7a\u65bc\u60a8\u7684\u76ee\u6a19\u958b\u767c\u677f\uff0c\u56e0\u70ba\u6bcf\u500b\u958b\u767c\u677f\u7684\u5e95\u5c64\u9a45\u52d5\u7a0b\u5f0f\u4e0d\u540c\u3002 \u70ba\u4e86\u78ba\u5b9a\u60a8\u9700\u8981\u54ea\u4e9b\u6a94\u6848\uff0c\u5efa\u8b70\u76f4\u63a5\u4f7f\u7528TouchGFX\u74b0\u5883shell\u7de8\u8b6f\u5c0d\u9069\u7576\u958b\u767c\u677f\u7684\u61c9\u7528\u7a0b\u5f0f\u3002 \u7de8\u8b6f\u904e\u7a0b\u6703\u63d0\u5230\u6b63\u5728\u7de8\u8b6f\u7684\u6bcf\u500b\u6a94\uff0c\u5f9e\u800c\u5217\u51fa\u60a8\u9700\u8981\u6dfb\u52a0\u7684\u6a94\u3002"),(0,o.kt)("h3",g({},{id:"include-paths"}),"\u5305\u542b\u8def\u5f91"),(0,o.kt)("p",null,"You will need to add the following include paths to your compilation:"),(0,o.kt)("pre",null,(0,o.kt)("code",g({parentName:"pre"},{}),".../TouchGFX/gui/include\n.../TouchGFX/generated/gui_generated/include\n.../TouchGFX/platform/os\n.../TouchGFX/generated/fonts/include\n.../TouchGFX/generated/images/include\n.../TouchGFX/generated/texts/include\n.../TouchGFX/generated/videos/include\n.../Middlewares/ST/touchgfx/framework/include\n")),(0,o.kt)(c.Z,{mdxType:"Tip"},"\u9664\u4e86\u4e0a\u9762\u7684\u5305\u542b\u8def\u5f91\uff0c\u60a8\u9084\u9700\u8981\u70ba\u7279\u5b9a\u958b\u767c\u677f\u7684\u7a0b\u5f0f\u78bc\u6dfb\u52a0\u5305\u542b\u8def\u5f91\u3002 \u53ef\u4ee5\u5728 ",(0,o.kt)(i.Z,{mdxType:"InlineCode"},"gcc/Makefile")," \u4e2d\u77ad\u89e3\u76f8\u95dc\u8cc7\u8a0a\u3002"),(0,o.kt)("h3",g({},{id:"compiler-switches"}),"\u7de8\u8b6f\u5668\u958b\u95dc"),(0,o.kt)("p",null,"\u8207\u5305\u542b\u8def\u5f91\u4e00\u6a23\uff0c\u6709\u4e00\u4e9b\u5fc5\u9808\u555f\u7528\u7684\u901a\u7528\u7de8\u8b6f\u5668\u958b\u95dc\uff0c\u9084\u6709\u4e00\u4e9b\u7279\u5b9a\u65bc\u8655\u7406\u5668\u5167\u6838\u548c\u5177\u9ad4\u958b\u767c\u677f\u7684\u7de8\u8b6f\u5668\u958b\u95dc\u3002 \u4e0b\u9762\u91dd\u5c0d\u6bcf\u7a2e\u5167\u6838\u5217\u51fa\u4e86\u7528\u65bc\u7de8\u8b6fTouchGFX\u6838\u5fc3\u5eab\u7684\u7de8\u8b6f\u5668\u958b\u95dc\u3002 \u70ba\u4e86\u8b93\u9023\u7d50\u5668\u5de5\u4f5c\uff0c\u5176\u4e2d\u4e00\u4e9b\u9078\u9805\u4e2d\u5c0d\u65bc\u7a0b\u5f0f\u78bc\u7de8\u8b6f\u4e5f\u662f\u5f37\u5236\u6027\u7684\uff0c\u800c\u6709\u4e9b\u9078\u9805\u662f\u53ef\u9078\u7684\u3002 \u90a3\u4e9b\u5df2\u77e5\u7684\u5f37\u5236\u6027\u9078\u9805\u4ee5\u7c97\u9ad4\u986f\u793a\u3002"),(0,o.kt)("h4",g({},{id:"cortex-m0-cores"}),"Cortex-M0 cores"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},'-fno-rtti -fno-exceptions -mfpu=fpv4-sp-d16 -mfloat-abi=softfp -mcpu=cortex-m0plus -D__irq=""')," -mthumb -mno-thumb-interwork -std=c99 -Os -fno-strict-aliasing -fdata-sections -ffunction-sections -Wno-psabi -DCORE_M0PLUS"),(0,o.kt)("h4",g({},{id:"cortex-m4f-cores"}),"Cortex-M4f\u5167\u6838"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},'-fno-rtti -fno-exceptions -mfpu=fpv4-sp-d16 -mfloat-abi=softfp -mcpu=cortex-m4 -D__irq=""')," -mthumb -mno-thumb-interwork -std=c99 -Os -fno-strict-aliasing -fdata-sections -ffunction-sections -Wno-psabi -DCORE_M4 -march=armv7e-m"),(0,o.kt)("h4",g({},{id:"cortex-m7-cores"}),"Cortex-M7\u5167\u6838"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},'-fno-rtti -fno-exceptions -mfpu=fpv5-sp-d16 -mfloat-abi=softfp -mcpu=cortex-m7 -D__irq=""')," -mthumb -mno-thumb-interwork -std=c99 -Os -fno-strict-aliasing -fdata-sections -ffunction-sections -Wno-psabi -DCORE_M7"),(0,o.kt)("h4",g({},{id:"cortex-m33-cores"}),"Cortex-M33 cores"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},'-fno-rtti -fno-exceptions -mfpu=fpv5-sp-d16 -mfloat-abi=softfp -mcpu=cortex-m33 -D__irq=""')," -mthumb -mno-thumb-interwork -std=c99 -Os -fno-strict-aliasing -fdata-sections -ffunction-sections -Wno-psabi -DCORE_M33"),(0,o.kt)("h3",g({},{id:"linker"}),"\u9023\u7d50\u5668"),(0,o.kt)("h4",g({},{id:"core-library"}),"\u6838\u5fc3\u5eab"),(0,o.kt)("p",null,"\u60a8\u5fc5\u9808\u9023\u7d50TouchGFX\u6838\u5fc3\u5eab\u3002 \u9019\u61c9\u8a72\u662f\u4e8c\u8005\u9078\u4e00\uff0c\u5177\u9ad4\u53d6\u6c7a\u65bc\u60a8\u7684MCU"),(0,o.kt)("pre",null,(0,o.kt)("code",g({parentName:"pre"},{}),".../Middlewares/ST/touchgfx/lib/core/cortex-m0/gcc/libtouchgfx.a\n.../Middlewares/ST/touchgfx/lib/core/cortex-m4f/gcc/libtouchgfx.a\n.../Middlewares/ST/touchgfx/lib/core/cortex-m7/gcc/libtouchgfx.a\n.../Middlewares/ST/touchgfx/lib/core/cortex-m33/gcc/libtouchgfx.a\n")),(0,o.kt)("h4",g({},{id:"linker-options"}),"\u9023\u7d50\u5668\u9078\u9805"),(0,o.kt)("p",null,"\u6b64\u5916\uff0c\u60a8\u9084\u9700\u8981\u4e00\u4e9b\u9023\u7d50\u5668\u9078\u9805\u3002 \u4ee5\u4e0b\u662fTouchGFX\u4f7f\u7528\u7684\u9078\u9805\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",g({parentName:"pre"},{}),"Cortex-M0: -Wl,-static -nostartfiles -mthumb -mno-thumb-interwork -fno-exceptions -fno-rtti -Wl,--gc-sections -mcpu=cortex-m0plus -Wno-psabi -mfpu=fpv4-sp-d16 -mfloat-abi=softfp\nCortex-M4f: -Wl,-static -nostartfiles -mthumb -mno-thumb-interwork -fno-exceptions -fno-rtti -Wl,--gc-sections -mcpu=cortex-m4 -march=armv7e-m -Wno-psabi -mfpu=fpv4-sp-d16 -mfloat-abi=softfp\nCortex-M7: -Wl,-static -nostartfiles -mthumb -mno-thumb-interwork -fno-exceptions -fno-rtti -Wl,--gc-sections -mcpu=cortex-m7 -Wno-psabi -mfpu=fpv5-sp-d16 -mfloat-abi=softfp\nCortex-M33: -Wl,-static -nostartfiles -mthumb -mno-thumb-interwork -fno-exceptions -fno-rtti -Wl,--gc-sections -mcpu=cortex-m33 -Wno-psabi -mfpu=fpv5-sp-d16 -mfloat-abi=softfp\n")),(0,o.kt)("h2",g({},{id:"asset-generation"}),"\u8cc7\u7522\u751f\u6210"),(0,o.kt)("p",null,"\u5982\u8981\u7de8\u8b6f\u5c08\u6848\uff0c\u9084\u5fc5\u9808\u751f\u6210\u8cc7\u7522\u3002 \u53ef\u4ee5\u4f7f\u7528\u2018assets\u2019\u9078\u64c7\u547c\u53eb\u751f\u6210\u7684Makefile\u4ee5\u5be6\u73fe\u8a72\u76ee\u6a19\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",g({parentName:"pre"},{}),"make -f TouchGFX/simulator/gcc/Makefile assets\n")),(0,o.kt)("p",null,"Another way to generate assets, is to use the image-, text/font- and video-converter directly."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Imageconverter")," The imageconverter can be found in your projects touchgfx folder ",(0,o.kt)("inlineCode",{parentName:"p"},"Middlewares/ST/touchgfx/framework/tools/imageconvert/build")," built for Linux and Windows."),(0,o.kt)("pre",null,(0,o.kt)("code",g({parentName:"pre"},{}),"usage: imageconvert [-c configfile] [-f inputfile -o outputfile | -r inputdir -w outputdir]\n")),(0,o.kt)("p",null,"\u7576\u547c\u53ebimageconvert.out\u53ef\u57f7\u884c\u6a94\u6642\uff0c\u5b83\u5c07\u5728\u547c\u53eb\u5b83\u7684\u8cc7\u6599\u593e\u4e2d\u5c0b\u627e\u4e00\u500b\u8a2d\u5b9a\u6a94(",(0,o.kt)("inlineCode",{parentName:"p"},"application.config"),")\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Textconverter")," The textconverter can be found in your projects touchgfx folder ",(0,o.kt)("inlineCode",{parentName:"p"},"Middlewares/ST/touchgfx/framework/tools/textconvert")," as a ruby file: ",(0,o.kt)("inlineCode",{parentName:"p"},"main.rb"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",g({parentName:"pre"},{}),"usage: main.rb file.xml path/to/fontconvert.out path/to/fonts_output_dir path/to/localization_output_dir path/to/font/asset calling_path\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Videoconverter")," The videoconverter can be found in your projects touchgfx folder ",(0,o.kt)("inlineCode",{parentName:"p"},"Middlewares/ST/touchgfx/framework/tools/videoconvert")," as a ruby file: ",(0,o.kt)("inlineCode",{parentName:"p"},"videoconvert.rb"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",g({parentName:"pre"},{}),"usage: videoconvert.rb path/to/project_root_dir path/to/video_assets_dir path/to/generated_output_dir\n")),(0,o.kt)("h2",g({},{id:"flashing-and-debugging"}),"\u71d2\u9304\u548c\u9664\u932f"),(0,o.kt)("p",null,"\u60a8\u5f88\u53ef\u80fd\u8f38\u51fa\u4e00\u500b ",(0,o.kt)("inlineCode",{parentName:"p"},".elf"),"\u6216",(0,o.kt)("inlineCode",{parentName:"p"},".hex")," \uff0c\u5177\u9ad4\u53d6\u6c7a\u65bc\u60a8\u7684\u9023\u7d50\u5668\u8a2d\u7f6e\u3002 \u53ef\u4ee5\u5f9e\u5927\u591a\u6578IDE\u4e2d\u914d\u7f6e\u548c\u9664\u932fTouchGFX\u61c9\u7528\u7a0b\u5f0f\uff0c\u901a\u5e38\u4f7f\u7528GDB\u4f3a\u670d\u5668\u6216IDE\u63d0\u4f9b\u7684\u4efb\u4f55\u5176\u4ed6\u65b9\u6cd5\u3002 \u7121\u6cd5\u70ba\u6bcf\u500b\u53ef\u7528\u7684IDE\u63d0\u4f9b\u5177\u9ad4\u6307\u91dd\uff0c\u4f46\u60a8\u53ef\u80fd\u80fd\u5728 ",(0,o.kt)("a",g({parentName:"p"},{href:"compiling-and-flashing"}),"\u7de8\u8b6f & \u71d2\u9304")," \u4e2d\u627e\u5230\u9748\u611f\uff0c\u8a72\u6587\u89e3\u91cb\u5982\u4f55\u4f7f\u7528 GCC \u751f\u6210\u7684 ELF/HEX \u6a94\u9032\u884c\u71d2\u9304\u3002"))}y.isMDXComponent=!0}}]);