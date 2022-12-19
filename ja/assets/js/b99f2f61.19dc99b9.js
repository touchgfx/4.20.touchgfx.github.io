"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[5986],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=l(n),d=o,f=m["".concat(u,".").concat(d)]||m[d]||s[d]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},44035:function(e,t,n){var r=n(67294),o=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,a=e.height,i=(0,o.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:i,target:"_blank"},r.createElement("img",{width:n,height:a,src:i})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:i,target:"_blank"},r.createElement("img",{width:n,height:a,src:i})),r.createElement("p",null,e.children))}},87542:function(e,t,n){n.r(t),n.d(t,{assets:function(){return g},contentTitle:function(){return f},default:function(){return b},frontMatter:function(){return d},metadata:function(){return h},toc:function(){return T}});var r=n(3905),o=n(44035),a=Object.defineProperty,i=Object.defineProperties,c=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&s(e,n,t[n]);if(u)for(var n of u(t))p.call(t,n)&&s(e,n,t[n]);return e};const d={id:"running-without-rtos",title:"TouchGFX Board Setup\u3067RTOS\u3092\u4f7f\u7528\u305b\u305a\u306b\u5b9f\u884c"},f=void 0,h={unversionedId:"development/scenarios/running-without-rtos",id:"development/scenarios/running-without-rtos",title:"TouchGFX Board Setup\u3067RTOS\u3092\u4f7f\u7528\u305b\u305a\u306b\u5b9f\u884c",description:"",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/development/scenarios/running-without-rtos.mdx",sourceDirName:"development/scenarios",slug:"/development/scenarios/running-without-rtos",permalink:"/4.20/ja/docs/development/scenarios/running-without-rtos",draft:!1,tags:[],version:"current",frontMatter:{id:"running-without-rtos",title:"TouchGFX Board Setup\u3067RTOS\u3092\u4f7f\u7528\u305b\u305a\u306b\u5b9f\u884c"},sidebar:"docs",previous:{title:"\u30c8\u30ea\u30ac\u3068\u3057\u3066\u306e\u5916\u90e8\u30a4\u30d9\u30f3\u30c8",permalink:"/4.20/ja/docs/development/scenarios/example-gpio"},next:{title:"STM32CubeMX\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3078\u306e\u30d5\u30a1\u30a4\u30eb\u306e\u8ffd\u52a0",permalink:"/4.20/ja/docs/development/scenarios/adding-files-to-stm32cubemx-projet"}},g={},T=[{value:"TouchGFX Board Setup\u304b\u3089\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u958b\u59cb",id:"starting-a-project-from-a-touchgfx-board-setup",level:2},{value:"\u30d0\u30c3\u30af\u30e9\u30a4\u30c8\u306e\u70b9\u706f",id:"turning-on-the-backlight",level:3},{value:"\u30b3\u30fc\u30c9\u306e\u6d88\u53bb",id:"cleaning-the-code",level:3}],S={toc:T};function b(e){var t,n=e,{components:a}=n,s=((e,t)=>{var n={};for(var r in e)l.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&u)for(var r of u(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=m(m({},S),s),i(t,c({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"\u672c\u30bb\u30af\u30b7\u30e7\u30f3\u3067\u306f\u3001TouchGFX Designer\u3067\u4f7f\u7528\u3067\u304d\u308bST\u30de\u30a4\u30af\u30ed\u30a8\u30ec\u30af\u30c8\u30ed\u30cb\u30af\u30b9\uff08NYSE\uff1aSTM\u3001\u4ee5\u4e0bST\uff09\u306e\u3044\u305a\u308c\u304b\u306e\u958b\u767a\u30ad\u30c3\u30c8\u5411\u3051\u306eTouchGFX Board Setup\u306b\u57fa\u3065\u3044\u3066\u3001\u30aa\u30da\u30ec\u30fc\u30c6\u30a3\u30f3\u30b0\uff65\u30b7\u30b9\u30c6\u30e0\u3092\u4f7f\u7528\u305b\u305a\u306bTouchGFX\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u5b9f\u884c\u3059\u308b\u65b9\u6cd5\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u307e\u3059\u3002 \u3053\u306e\u8a18\u4e8b\u306f\u3001STM32CubeMX\u3084STM32CubeIDE\u304b\u3089\u958b\u59cb\u3057\u305f\u30ab\u30b9\u30bf\u30e0\uff65\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306f\u5bfe\u8c61\u3068\u3057\u3066\u3044\u307e\u305b\u3093\u3002"),(0,r.kt)("h2",m({},{id:"starting-a-project-from-a-touchgfx-board-setup"}),"TouchGFX Board Setup\u304b\u3089\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u958b\u59cb"),(0,r.kt)("p",null,"TouchGFX Designer\u3067\u5229\u7528\u3067\u304d\u308b\u307b\u3068\u3093\u3069\u306eTouchGFX Board Setup\u3067\u306f\u3001FreeRTOS\u3068\u3044\u3046OS\u304c\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u6709\u52b9\u5316\u3055\u308c\u3066\u3044\u307e\u3059\u3002 \u30aa\u30da\u30ec\u30fc\u30c6\u30a3\u30f3\u30b0\uff65\u30b7\u30b9\u30c6\u30e0\u3092\u4f7f\u7528\u305b\u305a\u306b\u5b9f\u884c\u3059\u308b\u306b\u306f\u3001\u3044\u304f\u3064\u304b\u306e\u624b\u9806\u306b\u5f93\u3046\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002 \u3053\u3053\u3067\u306f\u3001STM32H7B3-DK\u30dc\u30fc\u30c9\u5411\u3051\u306eTouchGFX Board Setup\u3092\u4f8b\u3068\u3057\u3066\u4f7f\u7528\u3057\u307e\u3059\u3002"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"STM32H7B3-DK\u30dc\u30fc\u30c9\u5411\u3051TouchGFX Board Setup\u3092\u4f7f\u7528\u3057\u3066TouchGFX Designer\u304b\u3089\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u4f5c\u6210\u3057\u3001\u30b3\u30fc\u30c9\u3092\u751f\u6210\u3057\u307e\u3059\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u63d0\u4f9b\u3055\u308c\u3066\u3044\u308b",(0,r.kt)("inlineCode",{parentName:"p"},".ioc"),"\u30d5\u30a1\u30a4\u30eb\u3092STM32CubeMX\u3067\u958b\u304d\u307e\u3059\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"STM32CubeMX\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9\u3067\u3001Middleware -> FreeRTOS\u8a2d\u5b9a\u306b\u79fb\u52d5\u3057\u3001FreeRTOS\u3092\u7121\u52b9\u5316\u3057\u307e\u3059\u3002"))),(0,r.kt)(o.Z,{imageSource:"/img/development/scenarios/running-without-rtos/disable-freertos-stm32cubemx-417.webp",mdxType:"Figure"},"STM32H7B3-DK\u5411\u3051STM32CubeMX\u3067\u306eFreeRTOS\u8a2d\u5b9a"),(0,r.kt)("h3",m({},{id:"turning-on-the-backlight"}),"\u30d0\u30c3\u30af\u30e9\u30a4\u30c8\u306e\u70b9\u706f"),(0,r.kt)("p",null,"\u307b\u3068\u3093\u3069\u306eTouchGFX Board Setup\u3067\u306f\u3001\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\u306e\u30d0\u30c3\u30af\u30e9\u30a4\u30c8\u306f\u3082\u3068\u3082\u3068\u30aa\u30d5\u306b\u306a\u3063\u3066\u3044\u307e\u3059\u3002 \u3053\u308c\u306f\u3001\u30dc\u30fc\u30c9\u3092\u521d\u3081\u3066\u8d77\u52d5\u3057\u305f\u77ac\u9593\u306b\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\u306e\u4e0d\u5177\u5408\u304c\u8d77\u3053\u308b\u306e\u3092\u9632\u3050\u305f\u3081\u3067\u3059\u3002 \u30d0\u30c3\u30af\u30e9\u30a4\u30c8\u306f\u3001\uff08",(0,r.kt)("inlineCode",{parentName:"p"},"TouchGFX/target"),"\u30d5\u30a9\u30eb\u30c0\u5185\u306e\uff09",(0,r.kt)("inlineCode",{parentName:"p"},"TouchGFXHAL.cpp"),"\u306b\u8a18\u8f09\u3055\u308c\u305f",(0,r.kt)("inlineCode",{parentName:"p"},"taskEntry()"),"\u95a2\u6570\u306b\u3042\u308b\u6700\u521d\u306e\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u306e\u6e96\u5099\u304c\u6574\u3046\u3068\u30aa\u30f3\u306b\u306a\u308a\u307e\u3059\u3002 OS\u3092\u4f7f\u7528\u305b\u305a\u306b\u5b9f\u884c\u3059\u308b\u3068\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"taskEntry()"),"\u95a2\u6570\u306f\u4e00\u5ea6\u3082\u547c\u3073\u51fa\u3055\u308c\u306a\u3044\u305f\u3081\u3001\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u304c\u6b63\u3057\u304f\u66f4\u65b0\u3055\u308c\u3066\u3044\u308b\u9593\u306f\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\u306f\u6c7a\u3057\u3066\u30aa\u30f3\u306b\u306a\u308a\u307e\u305b\u3093\u3002 \u3053\u308c\u3092\u89e3\u6c7a\u3059\u308b\u305f\u3081\u3001LTDC_HSYNC\u30d4\u30f3\u3068VSYNC\u30d4\u30f3\u3092HIGH\u306b\u8a2d\u5b9a\u3057\u3066\u3001\u8d77\u52d5\u6642\u306e\u30d0\u30c3\u30af\u30e9\u30a4\u30c8\u3092\u30aa\u30f3\u306b\u3057\u307e\u3059\u3002"),(0,r.kt)("ol",m({},{start:4}),(0,r.kt)("li",{parentName:"ol"},"System Core -> GPIO\u30bb\u30af\u30b7\u30e7\u30f3\u306b\u3042\u308bGPIO\u8a2d\u5b9a\u306b\u79fb\u52d5\u3057\u307e\u3059\u3002 \u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\u306e\u30d0\u30c3\u30af\u30e9\u30a4\u30c8\u306b\u30ea\u30f3\u30af\u3055\u308c\u305fPIN\u3092\u63a2\u3057\u3001GPIO\u51fa\u529b\u30ec\u30d9\u30eb\u3092HIGH\u306b\u8a2d\u5b9a\u3057\u307e\u3059\u3002 STM32H7B3-DK\u30dc\u30fc\u30c9\u306e\u5834\u5408\u3001\u3053\u306e\u30d4\u30f3\u306fPA1\uff08\u30e6\u30fc\u30b6\uff65\u30e9\u30d9\u30eb: LCD_BL_CTRL\uff09\u3068PA2\uff08\u30e6\u30fc\u30b6\uff65\u30e9\u30d9\u30eb: LCD_ON/OFF\uff09\u3068\u306a\u308a\u307e\u3059\u3002")),(0,r.kt)(o.Z,{imageSource:"/img/development/scenarios/running-without-rtos/set-pins-high-417.webp",mdxType:"Figure"},"STM32H7B3-DK\u5411\u3051\u30d0\u30c3\u30af\u30e9\u30a4\u30c8\u306e\u70b9\u706f"),(0,r.kt)("ol",m({},{start:5}),(0,r.kt)("li",{parentName:"ol"},"STM32CubeMX\u304b\u3089\u30b3\u30fc\u30c9\u3092\u751f\u6210\u3057\u3001\u305d\u306e\u5f8c\u3001TouchGFX Designer\u304b\u3089\u30b3\u30fc\u30c9\u3092\u751f\u6210\u3057\u307e\u3059\u3002")),(0,r.kt)("h3",m({},{id:"cleaning-the-code"}),"\u30b3\u30fc\u30c9\u306e\u6d88\u53bb"),(0,r.kt)("p",null,"STM32CubeMX\u304a\u3088\u3073TouchGFX Generator\u306f\u3001RTOS\u95a2\u6570\u304c\u300cUSER CODE\u300d\u30bb\u30af\u30b7\u30e7\u30f3\u306b\u3042\u308b\u5834\u5408\u3001\u3053\u306e\u95a2\u6570\u306e\u547c\u3073\u51fa\u3057\u3092\u89e3\u9664\u3067\u304d\u307e\u305b\u3093\u3002 \u305d\u306e\u305f\u3081\u3001\u30b3\u30fc\u30c9\u3092\u624b\u52d5\u3067\u6d88\u53bb\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002 STM32H7B3-DK TBS\u306e\u5834\u5408\u306e\u307f\u3001\u30bf\u30c3\u30c1\u30fb\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u3092\u5909\u66f4\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,r.kt)("ol",m({},{start:6}),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e",(0,r.kt)("inlineCode",{parentName:"p"},"TouchGFX/target"),"\u30d5\u30a9\u30eb\u30c0\u306b\u3042\u308b",(0,r.kt)("inlineCode",{parentName:"p"},"STM32TouchController.cpp"),"\u30d5\u30a1\u30a4\u30eb\u3092\u958b\u304d\u307e\u3059\u3002 if\u30b9\u30c6\u30fc\u30c8\u30e1\u30f3\u30c8\u5185\u306b\u3042\u308b",(0,r.kt)("inlineCode",{parentName:"p"},"#include <cmsis_os.h>"),"\u3068",(0,r.kt)("inlineCode",{parentName:"p"},"configASSERT(0)"),"\u3092\u624b\u52d5\u3067\u524a\u9664\u3057\u307e\u3059\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"Core/src"),"\u30d5\u30a9\u30eb\u30c0\u306b\u3042\u308b",(0,r.kt)("inlineCode",{parentName:"p"},"Freertos.c"),"\u30d5\u30a1\u30a4\u30eb\u3092\u524a\u9664\u3057\u307e\u3059\u3002"))),(0,r.kt)("p",null,"TouchGFX Designer\u304b\u3089\u30dc\u30fc\u30c9\u4e0a\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u524a\u9664\u3059\u308b\u306b\u306f\u3001OS\u306b\u95a2\u9023\u3059\u308b\u4f9d\u5b58\u95a2\u4fc2\u3068\u30d1\u30b9\u3092\u524a\u9664\u307e\u305f\u306f\u30b3\u30e1\u30f3\u30c8\u30a2\u30a6\u30c8\u3057\u3066\u3001\uff08",(0,r.kt)("inlineCode",{parentName:"p"},"gcc"),"\u30d5\u30a9\u30eb\u30c0\u306b\u3042\u308b\uff09 ",(0,r.kt)("inlineCode",{parentName:"p"},"Makefile"),"\u3092\u6d88\u53bb\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002 \u307e\u305f\u3001\u4f7f\u7528\u3057\u3066\u3044\u308b\u30c4\u30fc\u30eb\u30c1\u30a7\u30fc\u30f3/IDE\u306e\u305d\u306e\u4ed6\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u5185\u306b\u3042\u308b\u3059\u3079\u3066\u306eOS\u306b\u95a2\u9023\u3059\u308b\u4f9d\u5b58\u95a2\u4fc2\u3068\u30d1\u30b9\u3092\u6d88\u53bb\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u3053\u308c\u3067\u3001TouchGFX Board Setup\u304b\u3089\u958b\u59cb\u3057\u305f\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u4e0a\u3067OS\u3092\u4f7f\u7528\u305b\u305a\u306b\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u5b9f\u884c\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3057\u305f\u3002"))}b.isMDXComponent=!0}}]);