"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[9290],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=r,f=u["".concat(p,".").concat(m)]||u[m]||c[m]||o;return n?a.createElement(f,i(i({ref:t},s),{},{components:n})):a.createElement(f,i({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},22425:function(e,t,n){var a=n(67294);class r extends a.Component{render(){return a.createElement("div",{className:"code-header"},a.createElement("div",null,a.createElement("h5",null,this.props.children)))}}t.Z=r},44035:function(e,t,n){var a=n(67294),r=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,o=e.height,i=(0,r.Z)(e.imageSource);return t?a.createElement("div",{className:"figure noshadow"},a.createElement("a",{href:i,target:"_blank"},a.createElement("img",{width:n,height:o,src:i})),a.createElement("p",null,e.children)):a.createElement("div",{className:"figure"},a.createElement("a",{href:i,target:"_blank"},a.createElement("img",{width:n,height:o,src:i})),a.createElement("p",null,e.children))}},60017:function(e,t,n){n.r(t),n.d(t,{assets:function(){return k},contentTitle:function(){return h},default:function(){return F},frontMatter:function(){return f},metadata:function(){return g},toc:function(){return v}});var a=n(3905),r=n(44035),o=n(22425),i=Object.defineProperty,l=Object.defineProperties,p=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&u(e,n,t[n]);if(d)for(var n of d(t))c.call(t,n)&&u(e,n,t[n]);return e};const f={id:"using-serial-flash",title:"\u4f7f\u7528\u4e32\u884c\u95ea\u5b58\u5b58\u50a8\u56fe\u50cf\u548c\u5b57\u4f53"},h=void 0,g={unversionedId:"development/scenarios/using-serial-flash",id:"development/scenarios/using-serial-flash",title:"\u4f7f\u7528\u4e32\u884c\u95ea\u5b58\u5b58\u50a8\u56fe\u50cf\u548c\u5b57\u4f53",description:"",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/scenarios/using-serial-flash.mdx",sourceDirName:"development/scenarios",slug:"/development/scenarios/using-serial-flash",permalink:"/4.20/zh-CN/docs/development/scenarios/using-serial-flash",draft:!1,tags:[],version:"current",frontMatter:{id:"using-serial-flash",title:"\u4f7f\u7528\u4e32\u884c\u95ea\u5b58\u5b58\u50a8\u56fe\u50cf\u548c\u5b57\u4f53"},sidebar:"docs",previous:{title:"\u4f7f\u7528\u975e\u5185\u5b58\u6620\u5c04\u95ea\u5b58\u5b58\u50a8\u56fe\u50cf",permalink:"/4.20/zh-CN/docs/development/scenarios/using-non-memory-mapped-flash"},next:{title:"\u4f7f\u7528\u975e\u5185\u5b58\u6620\u5c04\u95ea\u5b58\u5b58\u50a8\u5b57\u4f53\u6570\u636e",permalink:"/4.20/zh-CN/docs/development/scenarios/fonts-in-unmapped-flash"}},k={},v=[{value:"\u914d\u7f6e",id:"configuration",level:2},{value:"\u5b9e\u73b0",id:"implementation",level:2},{value:"\u56fe\u50cf",id:"images",level:2},{value:"\u5b57\u4f53\u6570\u636e",id:"font-data",level:2}],b={toc:v};function F(e){var t,n=e,{components:i}=n,u=((e,t)=>{var n={};for(var a in e)s.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&d)for(var a of d(e))t.indexOf(a)<0&&c.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=m(m({},b),u),l(t,p({components:i,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"\u672c\u8282\u5c06\u8ba8\u8bba\u5982\u4f55\u4f7f\u7528\u4e32\u884c\u95ea\u5b58\uff08\u6216\u5176\u4ed6\u975e\u6620\u5c04\u5b58\u50a8\u5668\uff09\u6765\u5b58\u50a8\u56fe\u50cf\u548c\u5b57\u4f53\u3002 \u8fd9\u91cc\u63cf\u8ff0\u7684\u6280\u672f\u5728STM32G0\u548c\u5176\u4ed6\u914d\u5907\u6781\u5c0fRAM\u7684\u8bbe\u5907\u4e0a\u7279\u522b\u6709\u7528\u3002"),(0,a.kt)("p",null,"See the article ",(0,a.kt)("a",m({parentName:"p"},{href:"lowering-memory-usage-with-partial-framebuffer"}),"Lowering Memory Usage with Partial Framebuffer")," for a introduction to partial framebuffers which are often used together with a serial flash. See also the article ",(0,a.kt)("a",m({parentName:"p"},{href:"using-non-memory-mapped-flash"}),"Using Non-Memory Mapped Flash for storing images")," for an introduction to caching bitmaps from unmapped flash to RAM."),(0,a.kt)("h2",m({},{id:"configuration"}),"\u914d\u7f6e"),(0,a.kt)("p",null,"\u4e3a\u4e86\u8ba9TouchGFX\u5e94\u7528\u4f7f\u7528\u4e32\u884c\u95ea\u5b58\uff0c\u60a8\u5fc5\u987b\u66f4\u6539TouchGFX Generator\u7684\u914d\u7f6e\uff0c\u542f\u7528\u201cAdditional Features\u201d\u4e2d\u7684\u201cExternal Data Reader\u201d\u3002"),(0,a.kt)(r.Z,{imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/additional-features-data-reader.png",width:"520",noShadow:!0,mdxType:"Figure"},"\u5176\u5b83\u529f\u80fd\uff1a\u6570\u636e\u8bfb\u53d6\u5668"),(0,a.kt)("p",null,"\u542f\u7528\u6b64\u529f\u80fd\u540e\uff0cTouchGFX Generator\u66f4\u6539\u914d\u7f6e\uff0c\u4ee5\u4fbf\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"LCD16bppSerialFlash")," LCD\u7c7b\u3002 \u5b83\u8fd8\u751f\u6210",(0,a.kt)("inlineCode",{parentName:"p"},"touchgfx::FlashDataReader"),"\u7684\u5b50\u7c7b\uff1a"),(0,a.kt)(o.Z,{mdxType:"CodeHeader"},"TouchGFXConfiguration.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-cpp",metastring:"{2-2,8-9}","{2-2,8-9}":!0}),"static TouchGFXDataReader dataReader;\nstatic LCD16bppSerialFlash display(dataReader);\nstatic ApplicationFontProvider fontProvider;\n...\nvoid touchgfx_init()\n{\n    ...\n    hal.setDataReader(&dataReader);\n    fontProvider.setFlashReader(&dataReader);\n    ...\n}\n")),(0,a.kt)("p",null,"\u6b64\u4ee3\u7801\u521b\u5efa",(0,a.kt)("inlineCode",{parentName:"p"},"TouchGFXDataReader"),"\u7c7b\u7684\u5b9e\u4f8b\uff0c\u5e76\u5c06\u8be5\u5b9e\u4f8b\u4f20\u9012\u7ed9\u663e\u793a\u5668\u5bf9\u8c61\u3001HAL\u5bf9\u8c61\u548cApplicationFontProvider\u5bf9\u8c61\u3002 \u8fd9\u4e09\u4e2a\u5bf9\u8c61\u5c06\u4f7f\u7528dataReader\u5bf9\u8c61\u8bbf\u95ee\u4e32\u884c\u95ea\u5b58\u4e2d\u7684\u6570\u636e\u3002 \u8fd9\u4e9b\u6570\u636e\u53ef\u4ee5\u662f\u56fe\u50cf\u548c\u5b57\u4f53\u6570\u636e\u3002"),(0,a.kt)("p",null,"\u7cfb\u7edf\u7a0b\u5e8f\u5458\u5fc5\u987b\u5b8c\u6210 ",(0,a.kt)("inlineCode",{parentName:"p"},"TouchGFXDataReader"),"\u7c7b\u7684\u5b9e\u73b0\uff0c\u624d\u80fd\u771f\u6b63\u4ece\u95ea\u5b58\u4e2d\u8bfb\u53d6\u6570\u636e\u3002"),(0,a.kt)("h2",m({},{id:"implementation"}),"\u5b9e\u73b0"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"TouchGFXDataReader"),"\u7c7b\u5b9e\u73b0 ",(0,a.kt)("a",m({parentName:"p"},{href:"../../api/classes/classtouchgfx_1_1_flash_data_reader/#public-functions"}),(0,a.kt)("em",{parentName:"a"},"touchgfx::FlashDataReader")),"\u63a5\u53e3\u3002 \u8be5\u63a5\u53e3\u6709\u4e0b\u52174\u79cd\u65b9\u6cd5\uff0c\u9700\u8981\u5728\u7279\u5b9a\u786c\u4ef6\u4e0a\u5b9e\u73b0\u3002"),(0,a.kt)(o.Z,{mdxType:"CodeHeader"},"include/touchgfx/hal/FlashDataReader.hpp"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-cpp"}),"    bool addressIsAddressable(const void* address)\n    void copyData(const void* src, void* dst, uint32_t bytes)\n    void startFlashLineRead(const void* src, uint32_t bytes)\n    const uint8_t* waitFlashReadComplete()\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"LCD16bppSerialFlash"),"\u7c7b\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"addressIsAddressable"),"\u6cd5\u6765\u51b3\u5b9a\u67d0\u4e9b\u6570\u636e\u662f\u5426\u53ef\u4ee5\u76f4\u63a5\u8bfb\u53d6\uff08\u5373\u4f4d\u4e8e\u5185\u90e8RAM\u6216\u5185\u90e8\u95ea\u5b58\u4e2d\uff09\u6216\u662f\u5426\u5e94\u901a\u8fc7dataReader\u5bf9\u8c61\u8bfb\u53d6\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"copyData"),"\u65b9\u6cd5\u7528\u4e8e\u4ece\u95ea\u5b58\u540c\u6b65\u590d\u5236\u6570\u636e\u5230RAM\u3002 \u5f53\u4e0d\u5bf9\u6570\u636e\u8fdb\u884c\u8fdb\u4e00\u6b65\u5904\u7406\u65f6\uff0c\u5e38\u4f7f\u7528\u6b64\u51fd\u6570\u3002 \u5982 \u5728\u5c06\u5b9e\u56fe\u590d\u5236\u5230\u5e27\u7f13\u51b2\u65f6\u3002"),(0,a.kt)("p",null,"\u5f53\u9700\u8981\u4ece\u95ea\u5b58\u83b7\u53d6\u591a\u884c\u6570\u636e\u65f6\uff0c\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"startFlashLineRead"),"\u6cd5\u3002 ",(0,a.kt)("inlineCode",{parentName:"p"},"startFlashLineRead"),"\u65b9\u6cd5\u5f00\u59cb\u6570\u636e\u8bfb\u53d6\u3002 \u6b64\u65b9\u6cd5\u53ef\u4ee5\u5f00\u59cb\u5f02\u6b65\u8bfb\u53d6\uff0c\u5e76\u4e14\u5e94\u5728\u5f00\u59cb\u8bfb\u53d6\u540e\u7acb\u5373\u8fd4\u56de\u3002 ",(0,a.kt)("em",{parentName:"p"},"waitFlashReadComplete"),"\u65b9\u6cd5\u5e94\u7b49\u5f85\u8bfb\u53d6\u5b8c\u6210\uff0c\u5e76\u8fd4\u56de\u6307\u5411\u4fdd\u5b58\u6570\u636e\u7684\u7f13\u51b2\u533a\u7684\u6307\u9488\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"LCD16bppSerialFlash"),"\u53ef\u4ee5\u5728\u5904\u7406\u4e4b\u524d\u8bfb\u53d6\u7684\u6570\u636e\u65f6\u53d1\u8d77\u4e00\u6b21\u95ea\u5b58\u8bfb\u53d6\uff08\u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b\uff09\u3002 \u8fd9\u610f\u5473\u7740dataReader\u4e2d\u9700\u8981\u81f3\u5c11\u4e24\u4e2a\u7f13\u51b2\u533a\u6765\u5b9e\u73b0\u5b8c\u5168\u5e76\u53d1\u3002"),(0,a.kt)("p",null,"TouchGFX Generator\u751f\u6210\u5206\u522b\u5c5e\u4e8e\u4e24\u4e2a\u7c7b\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"FlashDataReader"),"\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"TouchGFXGeneratedDataReader"),"\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"TouchGFXDataReader"),"\u3002 ",(0,a.kt)("inlineCode",{parentName:"p"},"TouchGFXGeneratedDataReader"),"\u662f\u4e8c\u8005\u7684\u5b50\u7c7b\uff0c\u5305\u542b\u9ed8\u8ba4\u5b9e\u73b0\u3002 \u5982\u679c\u8be5\u5b9e\u73b0\u4e0d\u5408\u9002\uff0c\u5e94\u7528\u7a0b\u5e8f\u5458\u53ef\u4ee5\u66f4\u6539",(0,a.kt)("inlineCode",{parentName:"p"},"TouchGFXDataReader"),"\u7c7b\u4e2d\u865a\u51fd\u6570\u7684\u5b9e\u73b0\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"TouchGFXGeneratedDataReader"),"\u5b9e\u73b0\u8c03\u7528C\u51fd\u6570\u6765\u5b8c\u6210\u5de5\u4f5c\u3002 \u8fd9\u4e9b\u5e94\u7528\u7531\u7cfb\u7edf\u7a0b\u5e8f\u5458\u5b9e\u73b0\u3002"),(0,a.kt)(o.Z,{mdxType:"CodeHeader"},"TouchGFX/target/generated/TouchGFXGeneratedDataReader.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-cpp"}),'extern "C" __weak void DataReader_WaitForReceiveDone();\nextern "C" __weak void DataReader_ReadData(uint32_t address24, uint8_t* buffer, uint32_t length);\nextern "C" __weak void DataReader_StartDMAReadData(uint32_t address24, uint8_t* buffer, uint32_t length);\n\nvoid TouchGFXGeneratedDataReader::startFlashLineRead(const void* src, uint32_t bytes)\n{\n    /* Start transfer using DMA */\n    DataReader_StartDMAReadData((uint32_t)src, (readToBuffer1 ? buffer1 : buffer2), bytes);\n}\n')),(0,a.kt)("p",null,"\u6b64\u51fd\u6570\u5b9e\u73b0\u4f4d\u4e8e",(0,a.kt)("inlineCode",{parentName:"p"},"MB1642BDataReader.c"),"\u6587\u4ef6\u4e2d\uff1a"),(0,a.kt)(o.Z,{mdxType:"CodeHeader"},"Core/Src/MB1642BDataReader.c"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-cpp"}),"void DataReader_StartDMAReadData(uint32_t address24, uint8_t* buffer, uint32_t length)\n{\n    readDataDMA(address24, buffer, length);\n}\n\nvoid readDataDMA(uint32_t address24, uint8_t* buffer, uint32_t length)\n{\n    // Pull Flash CS pin low\n    isReceivingData = 1;\n    FLASH_CS_GPIO_Port->BRR = FLASH_CS_Pin;\n\n    *((__IO uint8_t*)&hspi2.Instance->DR) = CMD_READ;\n\n    ...\n}\n")),(0,a.kt)("p",null,"\u6b64\u5b9e\u73b0\u7279\u5b9a\u4e8e\u95ea\u5b58\u4f7f\u7528\u7684\u534f\u8bae\u4ee5\u53caSPI\u548cCS\u4f7f\u7528\u7684GPIO\u3002 \u5fc5\u987b\u5b9e\u73b0",(0,a.kt)("inlineCode",{parentName:"p"},"TouchGFXGeneratedDataReader"),"\u7c7b\u7684\u5168\u90e8\u4e09\u4e2aC\u51fd\u6570\u624d\u80fd\u53d1\u6325\u4f5c\u7528\u3002"),(0,a.kt)("h2",m({},{id:"images"}),"\u56fe\u50cf"),(0,a.kt)("p",null,"\u5982\u7b80\u4ecb\u4e2d\u6240\u8ff0\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"LCD16bppSerialFlash"),"\u7c7b\u53ef\u901a\u8fc7dataReader\u5bf9\u8c61\u8bfb\u53d6\u56fe\u50cf\u50cf\u7d20\u3002 \u4e3a\u6b64\uff0c\u5fc5\u987b\u66f4\u6539\u94fe\u63a5\u5668\u811a\u672c\uff0c\u4ee5\u4fbf\u5c06\u56fe\u50cf\u653e\u5728\u5185\u90e8\u95ea\u5b58\u8303\u56f4\u4e4b\u5916\u7684\u5730\u5740\u8303\u56f4\u5185\u3002"),(0,a.kt)("p",null,"\u5728STM32G071\u4e0a\uff0c\u6211\u4eec\u9009\u62e9\u4e86\u5730\u57400x90000000\u4f5c\u4e3a\u4e32\u884c\u95ea\u5b58\u7684\u8d77\u59cb\u5730\u5740\uff1a"),(0,a.kt)(o.Z,{mdxType:"CodeHeader"},"gcc/STM32G071RBTX_FLASH.ld"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{}),"MEMORY\n{\n  RAM        (xrw)    : ORIGIN = 0x20000000,   LENGTH = 36K\n  FLASH      (rx)     : ORIGIN = 0x8000000,    LENGTH = 128K\n  SPI_FLASH  (r)      : ORIGIN = 0x90000000,   LENGTH = 8M\n}\n\n/* Sections */\nSECTIONS\n{\n  ...\n\n  ExtFlashSection :\n  {\n    *(ExtFlashSection ExtFlashSection.*)\n    *(.gnu.linkonce.r.*)\n    . = ALIGN(0x4);\n  } >SPI_FLASH\n\n  FontFlashSection :\n  {\n    *(FontFlashSection FontFlashSection.*)\n    *(.gnu.linkonce.r.*)\n    . = ALIGN(0x4);\n  } >SPI_FLASH\n}\n")),(0,a.kt)("p",null,"\u8fd9\u4f1a\u5c06",(0,a.kt)("inlineCode",{parentName:"p"},"ExtFlashSection"),"\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"FontFlashSection"),"\u653e\u51650x90000000\u5730\u5740\u8303\u56f4\u3002"),(0,a.kt)("p",null,"\u4f59\u4e0b\u7684\u4efb\u52a1\u662f\u7528Flasher\u5de5\u5177\u5c06\u6570\u636e\u5199\u5165\u5916\u90e8\u95ea\u5b58\u3002"),(0,a.kt)("p",null,"\u5173\u4e8eSTM32CubeProgrammer\u7684\u7f16\u5199flash loader\u7684\u7b80\u8981\u8bf4\u660e\uff0c\u53ef\u4ee5\u5728\u4ee5\u4e0b\u6587\u6863\u7684\u7b2c2.3.3\u8282\u4e2d\u627e\u5230\uff1a",(0,a.kt)("a",m({parentName:"p"},{href:"https://www.st.com/resource/en/user_manual/dm00403500-stm32cubeprogrammer-software-description-stmicroelectronics.pdf#page=25"}),"UM2237 STMCubeProgrammer\u7528\u6237\u624b\u518c")),(0,a.kt)("h2",m({},{id:"font-data"}),"\u5b57\u4f53\u6570\u636e"),(0,a.kt)("p",null,"\u4ee5\u4e0a\u94fe\u63a5\u811a\u672c\u5c06\u5b57\u4f53\u50cf\u7d20\u6570\u636e\u548c\u5b57\u4f53\u5b57\u7b26\u5143\u6570\u636e\uff08\u5bbd\u548c\u9ad8\uff09\u653e\u5165\u5916\u90e8\u95ea\u5b58\uff08\u4e24\u7c7b\u6570\u636e\u90fd\u5728FontFlashSection\u4e2d\uff09\u3002 \u5728\u5c4f\u5e55\u4e0a\u7ed8\u5236\u5b57\u7b26\u65f6\uff0c\u4e5f\u901a\u8fc7dataReader\u5bf9\u8c61\u8bfb\u53d6\u6b64\u6570\u636e"),(0,a.kt)("p",null,"\u5982\u679c\u60a8\u672a\u4f7f\u7528\u201c\u975e\u6620\u5c04\u5b58\u50a8\u683c\u5f0f\u201d\uff0c\u5219\u5fc5\u987b\u66f4\u6539\u94fe\u63a5\u811a\u672c\u548c\u6587\u4ef6",(0,a.kt)("inlineCode",{parentName:"p"},"include/touchgfx/hal/Config.hpp"),"\uff0c\u4ee5\u4fbf\u5c06\u5b57\u4f53\u5b57\u7b26\u5143\u6570\u636e\u79fb\u52a8\u5230\u5185\u90e8\u95ea\u5b58\u3002"),(0,a.kt)("p",null,"\u53c2\u89c1",(0,a.kt)("a",m({parentName:"p"},{href:"fonts-in-unmapped-flash"}),"\u975e\u6620\u5c04\u5b58\u50a8\u4e2d\u7684\u5b57\u4f53"),"\u4e00\u6587\u83b7\u53d6\u5173\u4e8e\u5b57\u4f53\u683c\u5f0f\u7684\u66f4\u591a\u4fe1\u606f\u3002"))}F.isMDXComponent=!0}}]);