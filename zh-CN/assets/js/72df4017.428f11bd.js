"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[1370],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return p}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(r),p=a,m=d["".concat(c,".").concat(p)]||d[p]||f[p]||o;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function p(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},22425:function(e,t,r){var n=r(67294);class a extends n.Component{render(){return n.createElement("div",{className:"code-header"},n.createElement("div",null,n.createElement("h5",null,this.props.children)))}}t.Z=a},44035:function(e,t,r){var n=r(67294),a=r(25026);t.Z=function(e){const t=e.noShadow||!1,r=e.width,o=e.height,i=(0,a.Z)(e.imageSource);return t?n.createElement("div",{className:"figure noshadow"},n.createElement("a",{href:i,target:"_blank"},n.createElement("img",{width:r,height:o,src:i})),n.createElement("p",null,e.children)):n.createElement("div",{className:"figure"},n.createElement("a",{href:i,target:"_blank"},n.createElement("img",{width:r,height:o,src:i})),n.createElement("p",null,e.children))}},88678:function(e,t,r){var n=r(67294);class a extends n.Component{render(){const e=`highlight highlight-${this.props.type}`;return n.createElement("div",{className:e},n.createElement("div",{className:"highlight-heading"},n.createElement("h5",null,n.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),n.createElement("div",{className:"highlight-content"},this.props.children))}}t.Z=a},93054:function(e,t,r){var n=r(67294),a=r(88678);const o=n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},n.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));class i extends n.Component{render(){return n.createElement(a.Z,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:o},this.props.children)}}t.Z=i},37793:function(e,t,r){var n=r(67294),a=r(88678);const o=n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},n.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class i extends n.Component{render(){return n.createElement(a.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:o},this.props.children)}}t.Z=i},35644:function(e,t,r){r.r(t),r.d(t,{assets:function(){return y},contentTitle:function(){return v},default:function(){return F},frontMatter:function(){return g},metadata:function(){return b},toc:function(){return T}});var n=r(3905),a=r(44035),o=r(93054),i=r(37793),l=r(22425),c=Object.defineProperty,s=Object.defineProperties,u=Object.getOwnPropertyDescriptors,f=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,m=(e,t,r)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,h=(e,t)=>{for(var r in t||(t={}))d.call(t,r)&&m(e,r,t[r]);if(f)for(var r of f(t))p.call(t,r)&&m(e,r,t[r]);return e};const g={id:"scenarios-framebuffer-strategies",title:"\u5e27\u7f13\u5b58\u7b56\u7565"},v=void 0,b={unversionedId:"development/touchgfx-hal-development/scenarios/scenarios-framebuffer-strategies",id:"development/touchgfx-hal-development/scenarios/scenarios-framebuffer-strategies",title:"\u5e27\u7f13\u5b58\u7b56\u7565",description:"",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/touchgfx-hal-development/scenarios/scenarios-framebuffer-strategies.mdx",sourceDirName:"development/touchgfx-hal-development/scenarios",slug:"/development/touchgfx-hal-development/scenarios/scenarios-framebuffer-strategies",permalink:"/4.20/zh-CN/docs/development/touchgfx-hal-development/scenarios/scenarios-framebuffer-strategies",draft:!1,tags:[],version:"current",frontMatter:{id:"scenarios-framebuffer-strategies",title:"\u5e27\u7f13\u5b58\u7b56\u7565"},sidebar:"docs",previous:{title:"FMC\u548cSPI\u663e\u793a\u63a5\u53e3",permalink:"/4.20/zh-CN/docs/development/touchgfx-hal-development/scenarios/scenarios-fmc"},next:{title:"\u89c6\u9891\u89e3\u7801",permalink:"/4.20/zh-CN/docs/development/touchgfx-hal-development/scenarios/scenarios-video-decoding"}},y={},T=[{value:"Single Framebuffer",id:"single-frame-buffer",level:2},{value:"\u6309\u5206\u914d\u6765",id:"by-allocation",level:3},{value:"\u6309\u5730\u5740",id:"by-address",level:3},{value:"Double Framebuffer",id:"double-frame-buffer",level:2},{value:"\u6309\u5730\u5740",id:"by-address-1",level:3},{value:"\u6309\u5206\u914d\u6765",id:"by-allocation-1",level:3},{value:"Partial Framebuffer",id:"partial-frame-buffer",level:2}],k={toc:T};function F(e){var t,r=e,{components:c}=r,m=((e,t)=>{var r={};for(var n in e)d.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&f)for(var n of f(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=h(h({},k),m),s(t,u({components:c,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"This section shows how to configure the ",(0,n.kt)("a",h({parentName:"p"},{href:"../touchgfx-generator"}),"TouchGFX Generator")," to generate a TouchGFX HAL that uses one of the following Framebuffer strategies:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5355\u5e27\u7f13\u5b58"),(0,n.kt)("li",{parentName:"ul"},"\u53cc\u5e27\u7f13\u5b58"),(0,n.kt)("li",{parentName:"ul"},"\u90e8\u5206\u5e27\u7f13\u5b58")),(0,n.kt)("p",null,"Read more about framebuffers ",(0,n.kt)("a",h({parentName:"p"},{href:"../../../basic-concepts/framebuffer#amount-of-framebuffers"}),"here"),"."),(0,n.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/framebuffer-all-options.png",width:"500",mdxType:"Figure"},"\u6240\u6709\u5e27\u7f13\u51b2\u533a\u9009\u9879"),(0,n.kt)("h2",h({},{id:"single-frame-buffer"}),"Single Framebuffer"),(0,n.kt)("p",null,"\u901a\u8fc7\u9009\u62e9",(0,n.kt)("em",{parentName:"p"},"\u5355\u5e27\u7f13\u5b58"),"\u4f5c\u4e3a\u7f13\u51b2\u7b56\u7565\uff0c\u5f00\u53d1\u4eba\u5458\u65e2\u53ef\u4ee5\u7531\u7f16\u8bd1\u5668\u5728\u5185\u90e8RAM\u4e2d\u5206\u914d\u5e27\u7f13\u5b58\u533a\u57df\uff0c\u4e5f\u53ef\u4ee5\u81ea\u884c\u5728RAM\u4e2d\u6307\u5b9a\u5e27\u7f13\u5b58\u5b58\u50a8\u4f4d\u7f6e\u3002"),(0,n.kt)("h3",h({},{id:"by-allocation"}),"\u6309\u5206\u914d\u6765"),(0,n.kt)("p",null,"When choosing ",(0,n.kt)("em",{parentName:"p"},"By Allocation")," TouchGFX Generator will allocate an array based on the dimensions and bit depth of the application."),(0,n.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/framebuffer-single-alloc.png",width:"400",mdxType:"Figure"},"\u5355\u5e27\u7f13\u5b58\uff0c\u6309\u4f4d\u7f6e"),(0,n.kt)("p",null,"\u751f\u6210\u7528\u4e8e\u914d\u7f6eHAL\u7684\u4ee3\u7801\uff0c\u5e76\u5c06\u8be5\u6570\u7ec4\u7528\u4f5c\u5e27\u7f13\u5b58\u3002"),(0,n.kt)(l.Z,{mdxType:"CodeHeader"},"TouchGFXGeneratedHAL.cpp"),(0,n.kt)("pre",null,(0,n.kt)("code",h({parentName:"pre"},{className:"language-cpp",metastring:"{1-6,12}","{1-6,12}":!0}),'namespace {\n    // Use the section "TouchGFX_Framebuffer" in the linker script\n    // to specify the placement of the buffer\n    LOCATION_PRAGMA("TouchGFX_Framebuffer")\n    uint32_t frameBuf[(480 * 272 * 2 + 3) / 4] LOCATION_ATTRIBUTE("TouchGFX_Framebuffer");\n}\n\nvoid TouchGFXGeneratedHAL::initialize()\n{\n    HAL::initialize();\n\n    setFrameBufferStartAddresses((void*)frameBuf, (void*)0, (void*)0);\n}\n')),(0,n.kt)("h3",h({},{id:"by-address"}),"\u6309\u5730\u5740"),(0,n.kt)("p",null,"\u5f53\u4e3a\u5e27\u7f13\u5b58\u7684\u4f4d\u7f6e\u9009\u62e9",(0,n.kt)("em",{parentName:"p"},"\u6309\u5730\u5740"),"\u65f6\uff0cTouchGFX Generator\u5c06\u5728HAL\u521d\u59cb\u5316\u671f\u95f4\u4f7f\u7528\u6307\u5b9a\u5176\u8d77\u59cb\u5730\u5740\u3002"),(0,n.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/framebuffer-single-addr.png",width:"400",mdxType:"Figure"},"\u5355\u5e27\u7f13\u5b58\uff0c\u6309\u5730\u5740"),(0,n.kt)(l.Z,{mdxType:"CodeHeader"},"TouchGFXGeneratedHAL.cpp"),(0,n.kt)("pre",null,(0,n.kt)("code",h({parentName:"pre"},{className:"language-cpp",metastring:"{5}","{5}":!0}),"void TouchGFXGeneratedHAL::initialize()\n{\n    HAL::initialize();\n\n    setFrameBufferStartAddresses((void*)0xC0000000, (void*)0, (void*)0);\n}\n")),(0,n.kt)("h2",h({},{id:"double-frame-buffer"}),"Double Framebuffer"),(0,n.kt)("p",null,"In a double framebuffer configuration, code to swap framebuffers will be generated in the HAL by TouchGFX Generator depending on the selected Framebuffer strategy and display interface. This memory interface to framebuffer location is used by the TouchGFX Engine during the main event loop."),(0,n.kt)("h3",h({},{id:"by-address-1"}),"\u6309\u5730\u5740"),(0,n.kt)("p",null,"\u9009\u62e9",(0,n.kt)("em",{parentName:"p"},"\u6309\u5730\u5740"),"\u65f6\uff0cTouchGFX Generator\u5c06\u5728HAL\u521d\u59cb\u5316\u671f\u95f4\u4f7f\u7528\u4e24\u4e2a\u6307\u5b9a\u7684\u8d77\u59cb\u5730\u5740\u3002"),(0,n.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/framebuffer-double.png",width:"400",mdxType:"Figure"},"\u53cc\u5e27\u7f13\u5b58\uff0c\u6309\u5730\u5740"),(0,n.kt)(l.Z,{mdxType:"CodeHeader"},"TouchGFXGeneratedHAL.cpp"),(0,n.kt)("pre",null,(0,n.kt)("code",h({parentName:"pre"},{className:"language-cpp",metastring:"{5}","{5}":!0}),"void TouchGFXGeneratedHAL::initialize()\n{\n    HAL::initialize();\n\n    setFrameBufferStartAddresses((void*)0xC0000000, (void*)0xC003FC00, (void*)0);\n}\n")),(0,n.kt)(i.Z,{mdxType:"Tip"},"\u5c06\u5e76\u884cRGB (LTDC)\u4f5c\u4e3a\u663e\u793a\u63a5\u53e3\u65f6\uff0c\u8d77\u59cb\u5730\u5740\u5c06\u4eceLTDC\u5c42\u8bbe\u7f6e\u4e2d\u7ee7\u627f\u3002"),(0,n.kt)(i.Z,{mdxType:"Tip"},"When using Parallel RGB (LTDC) as display interface in 'By Allocation' mode, the generated TouchGFX HAL will automatically configure the LTDC Layer Color Frame Buffer Start Address at runtime, so you should not set a value in LTDC configuration."),(0,n.kt)("h3",h({},{id:"by-allocation-1"}),"\u6309\u5206\u914d\u6765"),(0,n.kt)("p",null,"When choosing ",(0,n.kt)("em",{parentName:"p"},"By Allocation")," TouchGFX Generator will allocate an array based on the dimensions and bit depth of the application, exactly as with a Single Framebuffer, only twice the size."),(0,n.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/framebuffer-double-alloc.png",width:"400",mdxType:"Figure"},"\u5355\u5e27\u7f13\u5b58\uff0c\u6309\u4f4d\u7f6e"),(0,n.kt)(l.Z,{mdxType:"CodeHeader"},"TouchGFXGeneratedHAL.cpp"),(0,n.kt)("pre",null,(0,n.kt)("code",h({parentName:"pre"},{className:"language-cpp",metastring:"{1-5,11}","{1-5,11}":!0}),'namespace {\n    // Use the section "TouchGFX_Framebuffer" in the linker to specify the placement of the buffer\n    LOCATION_PRAGMA("TouchGFX_Framebuffer")\n    uint32_t frameBuf[(480 * 272 * 2 + 3) / 4 * 2] LOCATION_ATTRIBUTE("TouchGFX_Framebuffer");\n}\n\nvoid TouchGFXGeneratedHAL::initialize()\n{\n    HAL::initialize();\n\n    setFrameBufferStartAddresses((void*)frameBuf, (void*)(frameBuf + sizeof(frameBuf)/(sizeof(uint32_t)*2)), (void*)0);\n}\n')),(0,n.kt)("h2",h({},{id:"partial-frame-buffer"}),"Partial Framebuffer"),(0,n.kt)("p",null,"With the partial framebuffer strategy, TouchGFX does not use a framebuffer in the same size as the display. Instead the user is allowed to choose a number of blocks (of a given size) to be used as framebuffers. TouchGFX uses a ",(0,n.kt)("em",{parentName:"p"},"Frame Buffer Allocator")," object to control the use of these block."),(0,n.kt)("p",null,"With this strategy you don't supply a pointer to external memory (where the framebuffer would be located), nor allocate a framebuffer array in internal memory."),(0,n.kt)("p",null,"See the article on ",(0,n.kt)("a",h({parentName:"p"},{href:"../../../basic-concepts/framebuffer"}),"Framebuffer")," for a general overview of the concept of framebuffers."),(0,n.kt)(i.Z,{mdxType:"Tip"},"Usually, small microcontrollers like STM32G0 does not have enough internal RAM to fit framebuffer. \u201c\u90e8\u5206\u5e27\u7f13\u5b58\u201d\u4e0e\u8be5MCU\u7684\u4f4e\u6210\u672c\u89e3\u51b3\u65b9\u6848\u5b8c\u7f8e\u5339\u914d\u3002"),(0,n.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/generator-partial-fb.png",width:"400",mdxType:"Figure"},"\u90e8\u5206\u5e27\u7f13\u51b2\u5668"),(0,n.kt)("p",null,"\u7531\u4e8e\u90e8\u5206\u5e27\u7f13\u5b58\u901a\u5e38\u4ec5\u7528\u4e8e\u65e0TFT\u63a7\u5236\u5668\u4e14\u5185\u90e8RAM\u5f88\u5c0f\u7684\u4f4e\u6210\u672cMCU\uff0c\u56e0\u6b64\u90e8\u5206\u5e27\u7f13\u5b58\u7b56\u7565\u671f\u671b\u5f00\u53d1\u4eba\u5458\u5b9e\u73b0\u5c06\u5e27\u7f13\u5b58\u5185\u5bb9\u4f20\u8f93\u5230\u663e\u793a\u5c4f\u7684\u64cd\u4f5c\u3002 \u53c2\u89c1",(0,n.kt)("a",h({parentName:"p"},{href:"scenarios-fmc"}),"FMC/SPI\u65b9\u6848"),"\uff0c\u4ee5\u4e86\u89e3\u5982\u4f55\u5c06\u50cf\u7d20\u901a\u8fc7\u65e0TFT\u63a7\u5236\u5668\u7684MCU\u7684\u4e32\u53e3\u4f20\u8f93\u5230\u663e\u793a\u5c4f\u7b49\u3002"),(0,n.kt)("p",null,"In order to link the display with TouchGFX when using the Partial Framebuffer strategy, developers are required to provide implementations for the following two functions. The code displayed below is generated by CubeMX inside ",(0,n.kt)("inlineCode",{parentName:"p"},"TouchGFX/target/generated/TouchGFXGeneratedHAL.cpp")," and defines the interface between the TouchGFX Engine and the display driver."),(0,n.kt)(l.Z,{mdxType:"CodeHeader"},"TouchGFXGeneratedHAL.cpp"),(0,n.kt)("pre",null,(0,n.kt)("code",h({parentName:"pre"},{className:"language-cpp"}),'/* ******************************************************\n* Functions required by Partial Frame Buffer Strategy\n* ******************************************************\n*\n*  int touchgfxDisplayDriverTransmitActive() must return whether or not data is currently being transmitted, over e.g. SPI.\n*  void touchgfxDisplayDriverTransmitBlock(const uint8_t* pixels, uint16_t x, uint16_t y, uint16_t w, uint16_t h) will be called\n*  when the framework wants to send a block. The user must then transfer the data represented by the arguments.\n*/\n\nextern "C" int touchgfxDisplayDriverTransmitActive();\nextern "C" int touchgfxDisplayDriverShouldTransferBlock(uint16_t bottom);\nextern "C" void touchgfxDisplayDriverTransmitBlock(const uint8_t* pixels, uint16_t x, uint16_t y, uint16_t w, uint16_t h);\nextern "C" void touchgfxSignalVSync(void);\n')),(0,n.kt)("p",null,"For the STM32G071 TouchGFX Board Setup available in the TouchGFX Designer these functions are implemented in ",(0,n.kt)("inlineCode",{parentName:"p"},"Core/Src/MB1642BDisplayDriver.c")," (only showing one here):"),(0,n.kt)(l.Z,{mdxType:"CodeHeader"},"Core/Src/MB1642BDisplayDriver.c"),(0,n.kt)("pre",null,(0,n.kt)("code",h({parentName:"pre"},{className:"language-cpp"}),"int touchgfxDisplayDriverTransmitActive(void)\n{\n return IsTransmittingBlock_;\n}\n")),(0,n.kt)("p",null,"With this strategy CubeMX also generates the ",(0,n.kt)("inlineCode",{parentName:"p"},"TouchGFXGeneratedHAL::flushFrameBuffer(Rect&)")," inside the read-only ",(0,n.kt)("inlineCode",{parentName:"p"},"TouchGFXGeneratedHAL")," class in ",(0,n.kt)("inlineCode",{parentName:"p"},"TouchGFX/target/generated/TouchGFXGeneratedHAL.cpp"),"."),(0,n.kt)(o.Z,{mdxType:"Note"},"The flushFrameBuffer(Rect&) function is generally used for MCUs with no TFT Controller. In the case of Partial Framebuffers the TouchGFX Generator can generate a definition for this method specifically for that framebuffer strategy."),(0,n.kt)(l.Z,{mdxType:"CodeHeader"},"TouchGFXGeneratedHAL.cpp"),(0,n.kt)("pre",null,(0,n.kt)("code",h({parentName:"pre"},{className:"language-cpp"}),"void TouchGFXGeneratedHAL::flushFrameBuffer(const touchgfx::Rect& rect)\n{\n    HAL::flushFrameBuffer(rect);\n    // Try transmitting a block\n    PartialFrameBufferManager::tryTransmitBlock();\n}\n")))}F.isMDXComponent=!0}}]);