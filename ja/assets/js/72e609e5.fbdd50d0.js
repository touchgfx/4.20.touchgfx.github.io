"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[912],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,h=d["".concat(l,".").concat(m)]||d[m]||s[m]||o;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},22425:function(e,t,n){var r=n(67294);class a extends r.Component{render(){return r.createElement("div",{className:"code-header"},r.createElement("div",null,r.createElement("h5",null,this.props.children)))}}t.Z=a},44035:function(e,t,n){var r=n(67294),a=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,o=e.height,i=(0,a.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:i,target:"_blank"},r.createElement("img",{width:n,height:o,src:i})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:i,target:"_blank"},r.createElement("img",{width:n,height:o,src:i})),r.createElement("p",null,e.children))}},29415:function(e,t,n){var r=n(67294),a=n(88678);const o=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class i extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:o},this.props.children)}}t.Z=i},88678:function(e,t,n){var r=n(67294);class a extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{className:e},r.createElement("div",{className:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{className:"highlight-content"},this.props.children))}}t.Z=a},86850:function(e,t,n){n.r(t),n.d(t,{assets:function(){return v},contentTitle:function(){return E},default:function(){return I},frontMatter:function(){return g},metadata:function(){return P},toc:function(){return O}});var r=n(3905),a=n(44035),o=n(29415),i=n(22425),c=n(39130),l=Object.defineProperty,p=Object.defineProperties,u=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,h=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,f=(e,t)=>{for(var n in t||(t={}))d.call(t,n)&&h(e,n,t[n]);if(s)for(var n of s(t))m.call(t,n)&&h(e,n,t[n]);return e};const g={id:"scenarios-measure-performance",title:"\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u306e\u6e2c\u5b9a"},E=void 0,P={unversionedId:"development/touchgfx-hal-development/scenarios/scenarios-measure-performance",id:"development/touchgfx-hal-development/scenarios/scenarios-measure-performance",title:"\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u306e\u6e2c\u5b9a",description:"",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/development/touchgfx-hal-development/scenarios/scenarios-measure-performance.mdx",sourceDirName:"development/touchgfx-hal-development/scenarios",slug:"/development/touchgfx-hal-development/scenarios/scenarios-measure-performance",permalink:"/4.20/ja/docs/development/touchgfx-hal-development/scenarios/scenarios-measure-performance",draft:!1,tags:[],version:"current",frontMatter:{id:"scenarios-measure-performance",title:"\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u306e\u6e2c\u5b9a"},sidebar:"docs",previous:{title:"MIPI-DSI\u30d3\u30c7\u30aa\uff65\u30e2\u30fc\u30c9",permalink:"/4.20/ja/docs/development/touchgfx-hal-development/scenarios/scenarios-dsi-video-mode"},next:{title:"UI\u958b\u767a\u306e\u6982\u8981",permalink:"/4.20/ja/docs/development/ui-development/ui-development-introduction"}},v={},O=[{value:"TouchGFX\u30b3\u30a2\u3067\u516c\u958b\u3055\u308c\u3066\u3044\u308b\u4fe1\u53f7",id:"performance-metrics",level:2},{value:"STM32CubeMX GPIO\u306e\u8a2d\u5b9a",id:"stm32cubmx-gpio-configuration",level:2},{value:"TouchGFXGPIO\u30af\u30e9\u30b9",id:"touchgfxgpio-class",level:2}],_={toc:O};function I(e){var t,n=e,{components:l}=n,h=((e,t)=>{var n={};for(var r in e)d.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&s)for(var r of s(e))t.indexOf(r)<0&&m.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=f(f({},_),h),p(t,u({components:l,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"TouchGFX\u30b3\u30a2\u306f\u3001\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u306e\u6e2c\u5b9a\u306b\u4f7f\u7528\u3067\u304d\u308b\u3044\u304f\u3064\u304b\u306e\u4fe1\u53f7\u3092\u516c\u958b\u3057\u3066\u3044\u307e\u3059\u3002 \u30e6\u30fc\u30b6\u306f\u3001\u3053\u308c\u3089\u306e\u4fe1\u53f7\u304c\u5185\u90e8\u3067\u30c8\u30ea\u30ac\u3055\u308c\u308b\u3068\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u4f7f\u7528\u3057\u3066\u500b\u3005\u306eGPIO\u3092\u30c8\u30ea\u30ac\u3057\u3001\u300c\u63cf\u753b\u6642\u9593\u300d\u3068\u305d\u306e\u4ed6\u306e\u6709\u7528\u306a\u4fe1\u53f7\u3092\u8996\u899a\u5316\u3067\u304d\u307e\u3059\u3002 \u3053\u306e\u8a18\u4e8b\u3067\u306f\u3001CubeMX\u3067GPIO\u3092\u8a2d\u5b9a\u3059\u308b\u65b9\u6cd5\u3068\u516c\u958b\u3055\u308c\u305f\u5404\u4fe1\u53f7\u306e\u6a5f\u80fd\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u307e\u3059\u3002"),(0,r.kt)(o.Z,{mdxType:"FurtherReading"},(0,r.kt)(c.Z,{to:"../../../basic-concepts/performance",mdxType:"Link"},"\u57fa\u672c\u6982\u5ff5: \u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9")),(0,r.kt)("h2",f({},{id:"performance-metrics"}),"TouchGFX\u30b3\u30a2\u3067\u516c\u958b\u3055\u308c\u3066\u3044\u308b\u4fe1\u53f7"),(0,r.kt)("p",null,"\u6b21\u306e\u4fe1\u53f7\u306f\u3001TouchGFX\u30b3\u30a2\u306e\u30d8\u30c3\u30c0\u30d5\u30a1\u30a4\u30eb",(0,r.kt)("inlineCode",{parentName:"p"},"GPIO.hpp"),"\u306b\u5b9a\u7fa9\u3055\u308c\u3066\u3044\u307e\u3059\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",f({parentName:"tr"},{align:null}),"\u4fe1\u53f7"),(0,r.kt)("th",f({parentName:"tr"},{align:null}),"\u8aac\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null}),"VSYNC_FREQ"),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"TouchGFX\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306f\u3001LTDC\u3001\u5916\u90e8\u30da\u30ea\u30d5\u30a7\u30e9\u30eb\u3001\u307e\u305f\u306f\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\uff65\u30bf\u30a4\u30de\u304b\u3089\u306e\u5272\u8fbc\u307f\u306a\u3069\u306e\u5185\u90e8\u307e\u305f\u306f\u5916\u90e8\u306e\u30a4\u30d9\u30f3\u30c8\u306b\u3088\u3063\u3066\u99c6\u52d5\u3055\u308c\u307e\u3059\u3002 TouchGFX\u30a8\u30f3\u30b8\u30f3\u306f\u63cf\u753b\u3092\u7d42\u4e86\u3057\u305f\u3068\u304d\u306b\u3001",(0,r.kt)("inlineCode",{parentName:"td"},"VSYNC"),"\u4fe1\u53f7\u3092\u5f85\u3061\u307e\u3059\u3002 \u3053\u306e\u4fe1\u53f7\u306f\u3001\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\u304c\u66f4\u65b0\u3092\u7d42\u4e86\u3057\u305f\u3053\u3068\u3092\u793a\u3057\u3001TouchGFX\u306f\u6b21\u306e\u30d5\u30ec\u30fc\u30e0\u306e\u63cf\u753b\u3092\u958b\u59cb\u3067\u304d\u307e\u3059\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null}),"RENDER_TIME"),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"\u3053\u308c\u306f\u3001\u30d5\u30ec\u30fc\u30e0\u304cTouchGFX\u306b\u8ee2\u9001\u958b\u59cb\u3055\u308c\u3066\u304b\u3089\u3001\u63cf\u753b\u30d5\u30a7\u30fc\u30ba\u7d42\u4e86\u307e\u3067\u306e\u6642\u9593\u3067\u3059\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null}),"FRAME_RATE"),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"\u30e6\u30fc\u30b6\uff65\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u30d5\u30ec\u30fc\u30e0\u30ec\u30fc\u30c8\u3067\u3059\u3002 \u30d5\u30ec\u30fc\u30e0\u304c\u66f4\u65b0\u3055\u308c\u308b\u3068\u3001\u4fe1\u53f7\u304c\u30c8\u30b0\u30eb\u3057\u307e\u3059\u3002 \u63cf\u753b\u6642\u9593\u304c\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\u3067\u5b9a\u7fa9\u3055\u308c\u3066\u3044\u308b\u6700\u5927\u63cf\u753b\u6642\u9593\u3092\u8d85\u3048\u308b\u3068\u3001\u30d5\u30ec\u30fc\u30e0\u30ec\u30fc\u30c8\u304c\u4f4e\u4e0b\u3057\u307e\u3059\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null}),"MCU_ACTIVE"),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"\u3053\u306e\u4fe1\u53f7\u306f\u3001TouchGFX\u304c\u30de\u30a4\u30af\u30ed\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u3092\u4f7f\u7528\u3057\u3066\u3044\u308b\u6642\u306b\u306f\u3001\u5e38\u306b\u30cf\u30a4\u30ec\u30d9\u30eb\u306b\u306a\u3063\u3066\u3044\u307e\u3059\u3002 \u30de\u30a4\u30af\u30ed\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u306f\u3001\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u304c\u8ee2\u9001\u3055\u308c\u305f\u308a\u3001TouchGFX\u304c\u52d5\u4f5c\u3057\u3066\u3044\u308b\uff08\u30a2\u30a4\u30c9\u30eb\u30bf\u30b9\u30af\u306b\u306a\u3044\uff09\u5834\u5408\u306b\u306f\u3001\u30a2\u30af\u30c6\u30a3\u30d6\u3067\u3059\u3002")))),(0,r.kt)("h2",f({},{id:"stm32cubmx-gpio-configuration"}),"STM32CubeMX GPIO\u306e\u8a2d\u5b9a"),(0,r.kt)("p",null,"STM32CubeMX\u3092\u4f7f\u7528\u3057\u3066\u3001GPIO\u51fa\u529b\u30d4\u30f3\u306e\u8a2d\u5b9a\u3092\u7c21\u5358\u306b\u3067\u304d\u307e\u3059\u3002 \u5404\u30d4\u30f3\u306b",(0,r.kt)("i",null,"\u30e6\u30fc\u30b6\u30e9\u30d9\u30eb"),"\u3092\u4ed8\u3051\u308b\u3053\u3068\u306b\u3088\u308a\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"TouchGFXGPIO.cpp"),"\u306eTouchGFX Generator\u3067\u751f\u6210\u3055\u308c\u308b\u30b3\u30fc\u30c9\u306f\u3001TouchGFX\u30b3\u30a2\u304b\u3089\u306e\u4fe1\u53f7\u304c\u5185\u90e8\u3067\u53d7\u4fe1\u3055\u308c\u305f\u6642\u306b\u3069\u306e\u30d4\u30f3\u3092\u30c8\u30b0\u30eb\u3059\u308b\u306e\u304b\u8a8d\u8b58\u3057\u307e\u3059\u3002"),(0,r.kt)("i",null,"\uff3bPinout\uff3d"),"\u30d3\u30e5\u30fc\u3067\u30014\u672c\u306e\u672a\u4f7f\u7528\u306eGPIO\u30d4\u30f3\u3092\u51fa\u529b\u3068\u3057\u3066\u8a2d\u5b9a\u3057\u307e\u3059\u3002 ",(0,r.kt)("i",null,"\uff3bSTM32CubeMX GPIO IP\uff3d"),"\u3067\u3001GPIO\u3092\u901a\u3058\u3066\u30c8\u30ea\u30ac\u3055\u308c\u308b\u5404\u30d4\u30f3\u306b`User Label`\u3092\u4ed8\u3051\u307e\u3059\u3002\u3053\u306e\u30e9\u30d9\u30eb\u306fTouchGFX\u30b3\u30a2\u306b\u3088\u3063\u3066\u5b9a\u7fa9\u3055\u308c\u305f\u7279\u5b9a\u306e\u540d\u524d\u3068\u4e00\u81f4\u3055\u305b\u307e\u3059\uff08`VSYNC_FREQ`\u3001`RENDER_TIME`\u3001`FRAME_RATE`\u307e\u305f\u306f`MCU_ACTIVE`\u306a\u3069\uff09\u3002 ).",(0,r.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/performance-measure-gpio-config.webp",mdxType:"Figure"}),(0,r.kt)("h2",f({},{id:"touchgfxgpio-class"}),"TouchGFXGPIO\u30af\u30e9\u30b9"),(0,r.kt)("p",null,"TouchGFX Generator\u306f\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"TouchGFXGPIO.cpp"),"\u30d5\u30a1\u30a4\u30eb\u3067GPIO\u30af\u30e9\u30b9\u306e\u95a2\u6570\u3092\u751f\u6210\u3057\u307e\u3059\u3002 TouchGFX\u30b3\u30a2\u306f",(0,r.kt)("inlineCode",{parentName:"p"},"TouchGFXGPIO"),"\u30af\u30e9\u30b9\u306e\u95a2\u6570\u3092\u547c\u3073\u51fa\u3057\u307e\u3059\u3002\u6b21\u306b\u3001\u3053\u306e\u30af\u30e9\u30b9\u306fSTM32CubeMX\u306e\u30e6\u30fc\u30b6\u8a2d\u5b9a\u306b\u57fa\u3065\u3044\u3066\u30d4\u30f3\u3092\u30c8\u30b0\u30eb\u3057\u307e\u3059\u3002 ",(0,r.kt)("inlineCode",{parentName:"p"},"GPIO::set"),"\u3092\u3001\u4ee5\u4e0b\u306e\u30b9\u30cb\u30da\u30c3\u30c8\u3067\u793a\u3057\u307e\u3059\u3002"),(0,r.kt)(i.Z,{mdxType:"CodeHeader"},"TouchGFXGPIO.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",f({parentName:"pre"},{className:"language-cpp",metastring:"{11}","{11}":!0}),"void GPIO::set(GPIO_ID id)\n{\n    switch (id)\n    {\n    case GPIO::VSYNC_FREQ:\n#if defined(VSYNC_FREQ_GPIO_Port) && defined(VSYNC_FREQ_Pin)\n        HAL_GPIO_WritePin(VSYNC_FREQ_GPIO_Port, VSYNC_FREQ_Pin, GPIO_PIN_SET);\n#endif\n        break;\n    case GPIO::RENDER_TIME:\n#if defined(RENDER_TIME_GPIO_Port) && defined(RENDER_TIME_Pin)\n        HAL_GPIO_WritePin(RENDER_TIME_GPIO_Port, RENDER_TIME_Pin, GPIO_PIN_SET);\n#endif\n        break;\n    case GPIO::FRAME_RATE:\n#if defined(FRAME_RATE_GPIO_Port) && defined(FRAME_RATE_Pin)\n        HAL_GPIO_WritePin(FRAME_RATE_GPIO_Port, FRAME_RATE_Pin, GPIO_PIN_SET);\n#endif\n        break;\n    case GPIO::MCU_ACTIVE:\n#if defined(MCU_ACTIVE_GPIO_Port) && defined(MCU_ACTIVE_Pin)\n        HAL_GPIO_WritePin(MCU_ACTIVE_GPIO_Port, MCU_ACTIVE_Pin, GPIO_PIN_SET);\n#endif\n        break;\n    }\n}\n")),(0,r.kt)("p",null,"\u3042\u308b\u30d4\u30f3\u306b\u30e6\u30fc\u30b6\u30e9\u30d9\u30eb",(0,r.kt)("inlineCode",{parentName:"p"},"VSYNC_FREQ"),"\u304c\u4ed8\u3051\u3089\u308c\u3066\u3044\u308b\u5834\u5408\u306f\u3001CubeMX\u306f\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"VSYNC_FREQ_GPIO_Port"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"VSYNC_FREQ_Pin"),"\u306a\u3069\u3001\u30dd\u30fc\u30c8\u3001\u30d4\u30f3\u306b\u4e00\u81f4\u3059\u308b\u30b7\u30f3\u30dc\u30eb\u3092\u81ea\u52d5\u7684\u306b\u751f\u6210\u3057\u307e\u3059\u3002 \u8a2d\u5b9a\u6e08\u307f\u306e\u4fe1\u53f7\u3092\u6e2c\u5b9a\u3059\u308b\u306b\u306f\u3001\u30aa\u30b7\u30ed\u30b9\u30b3\u30fc\u30d7\u3084\u30ed\u30b8\u30c3\u30af\uff65\u30a2\u30ca\u30e9\u30a4\u30b6\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002 \u4ee5\u4e0b\u306e\u753b\u50cf\u306f\u3001\u30ed\u30b8\u30c3\u30af\uff65\u30a2\u30ca\u30e9\u30a4\u30b6\u304c\u8868\u793a\u3059\u308b4\u3064\u306e\u5404\u4fe1\u53f7\u3092\u793a\u3057\u3066\u3044\u307e\u3059\u3002 \u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306f\u3001Animated Image UI Example\u3092\u4f7f\u7528\u3057\u3066\u3001STM32F746G-DISCO\u4e0a\u3067\u5b9f\u884c\u3055\u308c\u3066\u3044\u307e\u3059\u3002 \u3053\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e",(0,r.kt)("inlineCode",{parentName:"p"},"VSYNC"),"\u4fe1\u53f7\u306f\u300116ms\u3054\u3068\u306bLTDC\u306b\u3088\u3063\u3066\u751f\u6210\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/performance-measurement-example.webp",mdxType:"Figure"}))}I.isMDXComponent=!0}}]);