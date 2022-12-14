"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[4450],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=i.createContext({}),c=function(e){var t=i.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},s=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=c(n),m=a,h=s["".concat(d,".").concat(m)]||s[m]||u[m]||r;return n?i.createElement(h,o(o({ref:t},p),{},{components:n})):i.createElement(h,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=s;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}s.displayName="MDXCreateElement"},44035:function(e,t,n){var i=n(67294),a=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,r=e.height,o=(0,a.Z)(e.imageSource);return t?i.createElement("div",{className:"figure noshadow"},i.createElement("a",{href:o,target:"_blank"},i.createElement("img",{width:n,height:r,src:o})),i.createElement("p",null,e.children)):i.createElement("div",{className:"figure"},i.createElement("a",{href:o,target:"_blank"},i.createElement("img",{width:n,height:r,src:o})),i.createElement("p",null,e.children))}},83049:function(e,t,n){n.r(t),n.d(t,{assets:function(){return g},contentTitle:function(){return h},default:function(){return N},frontMatter:function(){return m},metadata:function(){return f},toc:function(){return k}});var i=n(3905),a=n(44035),r=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,s=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&u(e,n,t[n]);if(d)for(var n of d(t))p.call(t,n)&&u(e,n,t[n]);return e};const m={id:"scenarios-dsi-video-mode",title:"MIPI-DSI Video Mode"},h=void 0,f={unversionedId:"development/touchgfx-hal-development/scenarios/scenarios-dsi-video-mode",id:"development/touchgfx-hal-development/scenarios/scenarios-dsi-video-mode",title:"MIPI-DSI Video Mode",description:"This section describes how to configure a MIPI DSI interface for Video Mode and how to use this configuration with TouchGFX Generator. The example used in this article will be for 24-bit, RGB888, frame buffer format and generally goes through the following configurations in STM32CubeMX and examplifies with generated code.",source:"@site/docs/development/touchgfx-hal-development/scenarios/scenarios-dsi-video-mode.mdx",sourceDirName:"development/touchgfx-hal-development/scenarios",slug:"/development/touchgfx-hal-development/scenarios/scenarios-dsi-video-mode",permalink:"/4.20/docs/development/touchgfx-hal-development/scenarios/scenarios-dsi-video-mode",draft:!1,tags:[],version:"current",frontMatter:{id:"scenarios-dsi-video-mode",title:"MIPI-DSI Video Mode"},sidebar:"docs",previous:{title:"Video Decoding",permalink:"/4.20/docs/development/touchgfx-hal-development/scenarios/scenarios-video-decoding"},next:{title:"Performance Measurement",permalink:"/4.20/docs/development/touchgfx-hal-development/scenarios/scenarios-measure-performance"}},g={},k=[{value:"STM32CubeMX - Hardware configuration",id:"stm32cubemx-hardware-configuration",level:2},{value:"LTDC",id:"ltdc",level:3},{value:"DSIHOST Configuration",id:"dsihost-configuration",level:3},{value:"STM32CubeMX - TouchGFX Generator",id:"stm32cubemx-touchgfx-generator",level:2},{value:"DSIHOST / LTDC Initialization sequence",id:"dsihost-ltdc-initialization-sequence",level:2},{value:"Updated TouchGFXHAL class for DSI Video Mode",id:"touchgfxhal-class-for-dsi-video-mode",level:2}],S={toc:k};function N(e){var t,n=e,{components:r}=n,u=((e,t)=>{var n={};for(var i in e)c.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&d)for(var i of d(e))t.indexOf(i)<0&&p.call(e,i)&&(n[i]=e[i]);return n})(n,["components"]);return(0,i.kt)("wrapper",(t=s(s({},S),u),o(t,l({components:r,mdxType:"MDXLayout"}))),(0,i.kt)("p",null,"This section describes how to configure a MIPI DSI interface for Video Mode and how to use this configuration with TouchGFX Generator. The example used in this article will be for 24-bit, RGB888, frame buffer format and generally goes through the following configurations in STM32CubeMX and examplifies with generated code."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"LTDC IP"),(0,i.kt)("li",{parentName:"ul"},"DSI-HOST IP"),(0,i.kt)("li",{parentName:"ul"},"TouchGFX Generator")),(0,i.kt)("h2",s({},{id:"stm32cubemx-hardware-configuration"}),"STM32CubeMX - Hardware configuration"),(0,i.kt)("h3",s({},{id:"ltdc"}),"LTDC"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Mode"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Set ",(0,i.kt)("inlineCode",{parentName:"li"},"Display Type")," to ",(0,i.kt)("em",{parentName:"li"},"RGB888 (24 bits) - DSI Mode")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Layer Settings"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Set ",(0,i.kt)("inlineCode",{parentName:"li"},"Number of layers")," to ",(0,i.kt)("em",{parentName:"li"},"1 layer")),(0,i.kt)("li",{parentName:"ul"},"Set ",(0,i.kt)("inlineCode",{parentName:"li"},"Layer 0 - Pixel Format")," to ",(0,i.kt)("em",{parentName:"li"},"RGB888")),(0,i.kt)("li",{parentName:"ul"},"Set ",(0,i.kt)("inlineCode",{parentName:"li"},"Layer 0 - Alpha constant for blending")," to ",(0,i.kt)("em",{parentName:"li"},"255"),(0,i.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/dsi-video-mode/ltdc-config1.webp",width:"800",mdxType:"Figure"},"LTDC Configuration")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"NVIC Settings"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Enable LCD-TFT global interrupt",(0,i.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/dsi-video-mode/ltdc-config2.webp",width:"800",mdxType:"Figure"},"LTDC NVIC Settings"))))),(0,i.kt)("h3",s({},{id:"dsihost-configuration"}),"DSIHOST Configuration"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Mode"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Set ",(0,i.kt)("inlineCode",{parentName:"li"},"DSIHost")," to ",(0,i.kt)("em",{parentName:"li"},(0,i.kt)("em",{parentName:"em"},"Video Mode"))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Display Interface"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Set ",(0,i.kt)("inlineCode",{parentName:"li"},"Color Coding")," to ",(0,i.kt)("em",{parentName:"li"},"RGB888 (24 bits) - DSI mode")),(0,i.kt)("li",{parentName:"ul"},"Remaining configurations depends on the selected LCD HW",(0,i.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/dsi-video-mode/dsihost-config1.webp",width:"800",mdxType:"Figure"},"DSIHOST Configuration")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"NVIC Settings"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"DSIHOST global interrupt is not needed and should be disabled.",(0,i.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/dsi-video-mode/dsihost-config2.webp",width:"800",mdxType:"Figure"},"DSIHOST NVIC Settings"))))),(0,i.kt)("h2",s({},{id:"stm32cubemx-touchgfx-generator"}),"STM32CubeMX - TouchGFX Generator"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Mode"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Enable ",(0,i.kt)("em",{parentName:"li"},"Graphics Application")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"TouchGFX Generator"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Set ",(0,i.kt)("inlineCode",{parentName:"li"},"Display / Interface")," to ",(0,i.kt)("em",{parentName:"li"},"Parallel RGB (LTDC)")," since this is still the controller the application needs to communicate with."),(0,i.kt)("li",{parentName:"ul"},"Set ",(0,i.kt)("inlineCode",{parentName:"li"},"Application Tick Source")," to ",(0,i.kt)("em",{parentName:"li"},"LTDC"),(0,i.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/dsi-video-mode/touchgfx-generator-config.webp",width:"800",mdxType:"Figure"},"TouchGFX Generator Configuration"))))),(0,i.kt)("h2",s({},{id:"dsihost-ltdc-initialization-sequence"}),"DSIHOST / LTDC Initialization sequence"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The call to ",(0,i.kt)("inlineCode",{parentName:"p"},"MX_DSIHOST_DSI_Init()")," must be done before ",(0,i.kt)("inlineCode",{parentName:"p"},"MX_LTDC_Init()"),". This should be handled by CubeMX.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Call ",(0,i.kt)("inlineCode",{parentName:"p"},"HAL_DSI_Start()")," at the end of ",(0,i.kt)("inlineCode",{parentName:"p"},"MX_DSIHOST_DSI_Init()"),", in a ",(0,i.kt)("em",{parentName:"p"},"User Code")," section.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"After calling ",(0,i.kt)("inlineCode",{parentName:"p"},"HAL_DSI_Start()"),", switch DSIHOST clock to the ",(0,i.kt)("inlineCode",{parentName:"p"},"DSIPHY")," source."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",s({parentName:"pre"},{className:"language-cpp",metastring:"{12,20}","{12,20}":!0}),"/**\n  * @brief DSIHOST Initialization Function\n  * @param None\n  * @retval None\n  */\nstatic void MX_DSIHOST_DSI_Init(void)\n{\n  ...\n\n  /* USER CODE BEGIN DSIHOST_Init 2 */\n  // Start DSI\n  if (HAL_DSI_Start(&hdsi) != HAL_OK)\n  {\n    Error_Handler();\n  }\n\n  /* Switch to DSI PHY PLL clock */\n  RCC_PeriphCLKInitTypeDef PeriphClkInit;\n  PeriphClkInit.PeriphClockSelection = RCC_PERIPHCLK_DSI;\n  PeriphClkInit.DsiClockSelection    = RCC_DSICLKSOURCE_DSIPHY;\n  HAL_RCCEx_PeriphCLKConfig(&PeriphClkInit);\n  /* USER CODE END DSIHOST_Init 2 */\n\n  ...\n}\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"User has to add the required initialization code specific to the used LCD controller at the end of the ",(0,i.kt)("inlineCode",{parentName:"p"},"MX_LTDC_Init()")," function."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"That code will be based on the DSI HAL APIs ",(0,i.kt)("inlineCode",{parentName:"li"},"HAL_DSI_ShortWrite()")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"HAL_DSI_LongWrite()"))),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",s({parentName:"pre"},{className:"language-cpp"}),"/**\n  * @brief LTDC Initialization Function\n  * @param None\n  * @retval None\n  */\nstatic void MX_LTDC_Init(void)\n{\n  ...\n\n  /* USER CODE BEGIN LTDC_Init 2 */\n  // Specific LCD controller's initialization code\n  ...\n  \n  // Exit Sleep Mode\n  if (HAL_DSI_ShortWrite(&hdsi, 0, DSI_DCS_SHORT_PKT_WRITE_P0, DSI_EXIT_SLEEP_MODE, 0x00) != HAL_OK)\n  {\n    Error_Handler();\n  }\n\n  HAL_Delay(120);\n  /* USER CODE END LTDC_Init 2 */\n\n  ...\n}\n")))),(0,i.kt)("h2",s({},{id:"touchgfxhal-class-for-dsi-video-mode"}),"Updated TouchGFXHAL class for DSI Video Mode"),(0,i.kt)("p",null,"The code for the LTDC interrupt is identical to the code generated when using Parallel RGB display interface."),(0,i.kt)("p",null,"One way to prevent the MIPI DSI display from turning on until we've rendered the first frame in the application is to guard the function ",(0,i.kt)("inlineCode",{parentName:"p"},"TouchGFXHAL::endFrame")," to keep the display off until first frame is rendered by TouchGFX. The ",(0,i.kt)("inlineCode",{parentName:"p"},"TouchGFXHAL::endFrame()")," could be updated as below, to enable the LCD and its Backlight through a HW Timer configured for PWM output."),(0,i.kt)("pre",null,(0,i.kt)("code",s({parentName:"pre"},{className:"language-cpp",metastring:"{7,9,11}","{7,9,11}":!0}),"void TouchGFXHAL::endFrame()\n{\n    if (!display_on)\n    {\n        display_on = true;\n        /* Enable the LCD, Send Display on DCS command to display */\n        HAL_DSI_ShortWrite(&hdsi, 0, DSI_DCS_SHORT_PKT_WRITE_P1, DSI_SET_DISPLAY_ON, 0x00);\n        /* Start PWM Timer channel */\n        (void)HAL_TIM_PWM_Start(&htim8, TIM_CHANNEL_2);\n        /* Enable Backlight by setting Brightness to 100% */\n        __HAL_TIM_SET_COMPARE(&htim8, TIM_CHANNEL_2, 2U * 100);\n    }\n\n    TouchGFXGeneratedHAL::endFrame();\n}\n")))}N.isMDXComponent=!0}}]);