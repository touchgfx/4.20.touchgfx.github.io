"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[8247],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=i.createContext({}),d=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return i.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},s=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=d(n),m=r,h=s["".concat(c,".").concat(m)]||s[m]||u[m]||a;return n?i.createElement(h,o(o({ref:t},p),{},{components:n})):i.createElement(h,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<a;d++)o[d]=n[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}s.displayName="MDXCreateElement"},44035:function(e,t,n){var i=n(67294),r=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,a=e.height,o=(0,r.Z)(e.imageSource);return t?i.createElement("div",{className:"figure noshadow"},i.createElement("a",{href:o,target:"_blank"},i.createElement("img",{width:n,height:a,src:o})),i.createElement("p",null,e.children)):i.createElement("div",{className:"figure"},i.createElement("a",{href:o,target:"_blank"},i.createElement("img",{width:n,height:a,src:o})),i.createElement("p",null,e.children))}},64979:function(e,t,n){n.r(t),n.d(t,{assets:function(){return g},contentTitle:function(){return h},default:function(){return N},frontMatter:function(){return m},metadata:function(){return f},toc:function(){return k}});var i=n(3905),r=n(44035),a=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,s=(e,t)=>{for(var n in t||(t={}))d.call(t,n)&&u(e,n,t[n]);if(c)for(var n of c(t))p.call(t,n)&&u(e,n,t[n]);return e};const m={id:"scenarios-dsi-video-mode",title:"MIPI-DSI Video Mode"},h=void 0,f={unversionedId:"development/touchgfx-hal-development/scenarios/scenarios-dsi-video-mode",id:"development/touchgfx-hal-development/scenarios/scenarios-dsi-video-mode",title:"MIPI-DSI Video Mode",description:"This section describes how to configure a MIPI DSI interface for Video Mode and how to use this configuration with TouchGFX Generator. The example used in this article will be for 24-bit, RGB888, frame buffer format and generally goes through the following configurations in STM32CubeMX and examplifies with generated code.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/development/touchgfx-hal-development/scenarios/scenarios-dsi-video-mode.mdx",sourceDirName:"development/touchgfx-hal-development/scenarios",slug:"/development/touchgfx-hal-development/scenarios/scenarios-dsi-video-mode",permalink:"/4.20/ko/docs/development/touchgfx-hal-development/scenarios/scenarios-dsi-video-mode",tags:[],version:"current",frontMatter:{id:"scenarios-dsi-video-mode",title:"MIPI-DSI Video Mode"},sidebar:"docs",previous:{title:"Video Decoding",permalink:"/4.20/ko/docs/development/touchgfx-hal-development/scenarios/scenarios-video-decoding"},next:{title:"Performance Measurement",permalink:"/4.20/ko/docs/development/touchgfx-hal-development/scenarios/scenarios-measure-performance"}},g={},k=[{value:"STM32CubeMX - Hardware configuration",id:"stm32cubemx-hardware-configuration",level:2},{value:"LTDC",id:"ltdc",level:3},{value:"DSIHOST Configuration",id:"dsihost-configuration",level:3},{value:"STM32CubeMX - TouchGFX Generator",id:"stm32cubemx-touchgfx-generator",level:2},{value:"DSIHOST / LTDC Initialization sequence",id:"dsihost-ltdc-initialization-sequence",level:2},{value:"Updated TouchGFXHAL class for DSI Video Mode",id:"touchgfxhal-class-for-dsi-video-mode",level:2}],S={toc:k};function N(e){var t,n=e,{components:a}=n,u=((e,t)=>{var n={};for(var i in e)d.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&c)for(var i of c(e))t.indexOf(i)<0&&p.call(e,i)&&(n[i]=e[i]);return n})(n,["components"]);return(0,i.kt)("wrapper",(t=s(s({},S),u),o(t,l({components:a,mdxType:"MDXLayout"}))),(0,i.kt)("p",null,"This section describes how to configure a MIPI DSI interface for Video Mode and how to use this configuration with TouchGFX Generator. The example used in this article will be for 24-bit, RGB888, frame buffer format and generally goes through the following configurations in STM32CubeMX and examplifies with generated code."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"LTDC IP"),(0,i.kt)("li",{parentName:"ul"},"DSI-HOST IP"),(0,i.kt)("li",{parentName:"ul"},"TouchGFX Generator")),(0,i.kt)("h2",s({},{id:"stm32cubemx-hardware-configuration"}),"STM32CubeMX - Hardware configuration"),(0,i.kt)("h3",s({},{id:"ltdc"}),"LTDC"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Mode"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Set ",(0,i.kt)("inlineCode",{parentName:"li"},"Display Type")," to ",(0,i.kt)("em",{parentName:"li"},"RGB888 (24 bits) - DSI Mode")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Layer Settings"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Set ",(0,i.kt)("inlineCode",{parentName:"li"},"Number of layers")," to ",(0,i.kt)("em",{parentName:"li"},"1 layer")),(0,i.kt)("li",{parentName:"ul"},"Set ",(0,i.kt)("inlineCode",{parentName:"li"},"Layer 0 - Pixel Format")," to ",(0,i.kt)("em",{parentName:"li"},"RGB888")),(0,i.kt)("li",{parentName:"ul"},"Set ",(0,i.kt)("inlineCode",{parentName:"li"},"Layer 0 - Alpha constant for blending")," to ",(0,i.kt)("em",{parentName:"li"},"255")," ",(0,i.kt)(r.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/dsi-video-mode/ltdc-config1.png",width:"800",mdxType:"Figure"},"LTDC Configuration")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"NVIC Settings"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Enable LCD-TFT global interrupt ",(0,i.kt)(r.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/dsi-video-mode/ltdc-config2.png",width:"800",mdxType:"Figure"},"LTDC NVIC Settings"))))),(0,i.kt)("h3",s({},{id:"dsihost-configuration"}),"DSIHOST Configuration"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Mode"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Set ",(0,i.kt)("inlineCode",{parentName:"li"},"DSIHost")," to _*Video Mode**"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Display Interface"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Set ",(0,i.kt)("inlineCode",{parentName:"li"},"Color Coding")," to ",(0,i.kt)("em",{parentName:"li"},"RGB888 (24 bits) - DSI mode")),(0,i.kt)("li",{parentName:"ul"},"Remaining configurations depends on the selected LCD HW ",(0,i.kt)(r.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/dsi-video-mode/dsihost-config1.png",width:"800",mdxType:"Figure"},"DSIHOST Configuration")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"NVIC Settings"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"DSIHOST global interrupt is not needed and should be disabled. ",(0,i.kt)(r.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/dsi-video-mode/dsihost-config2.png",width:"800",mdxType:"Figure"},"DSIHOST NVIC Settings"))))),(0,i.kt)("h2",s({},{id:"stm32cubemx-touchgfx-generator"}),"STM32CubeMX - TouchGFX Generator"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Mode"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Enable ",(0,i.kt)("em",{parentName:"li"},"Graphics Application")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"TouchGFX Generator"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Set ",(0,i.kt)("inlineCode",{parentName:"li"},"Display / Interface")," to ",(0,i.kt)("em",{parentName:"li"},"Parallel RGB (LTDC)")," since this is still the controller the application needs to communicate with."),(0,i.kt)("li",{parentName:"ul"},"Set ",(0,i.kt)("inlineCode",{parentName:"li"},"Application Tick Source")," to ",(0,i.kt)("em",{parentName:"li"},"LTDC")," ",(0,i.kt)(r.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/dsi-video-mode/touchgfx-generator-config.png",width:"800",mdxType:"Figure"},"TouchGFX Generator Configuration"))))),(0,i.kt)("h2",s({},{id:"dsihost-ltdc-initialization-sequence"}),"DSIHOST / LTDC Initialization sequence"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The call to ",(0,i.kt)("inlineCode",{parentName:"p"},"MX_DSIHOST_DSI_Init()")," must be done before ",(0,i.kt)("inlineCode",{parentName:"p"},"MX_LTDC_Init()"),". This should be handled by CubeMX.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Call ",(0,i.kt)("inlineCode",{parentName:"p"},"HAL_DSI_Start()")," at the end of ",(0,i.kt)("inlineCode",{parentName:"p"},"MX_DSIHOST_DSI_Init()"),", in a ",(0,i.kt)("em",{parentName:"p"},"User Code")," section.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"After calling ",(0,i.kt)("inlineCode",{parentName:"p"},"HAL_DSI_Start()"),", switch DSIHOST clock to the ",(0,i.kt)("inlineCode",{parentName:"p"},"DSIPHY")," source."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",s({parentName:"pre"},{className:"language-cpp",metastring:"{12,20}","{12,20}":!0}),"/**\n  * @brief DSIHOST Initialization Function\n  * @param None\n  * @retval None\n  */\nstatic void MX_DSIHOST_DSI_Init(void)\n{\n  ...\n\n  /* USER CODE BEGIN DSIHOST_Init 2 */\n  // Start DSI\n  if (HAL_DSI_Start(&hdsi) != HAL_OK)\n  {\n    Error_Handler();\n  }\n\n  /* Switch to DSI PHY PLL clock */\n  RCC_PeriphCLKInitTypeDef PeriphClkInit;\n  PeriphClkInit.PeriphClockSelection = RCC_PERIPHCLK_DSI;\n  PeriphClkInit.DsiClockSelection    = RCC_DSICLKSOURCE_DSIPHY;\n  HAL_RCCEx_PeriphCLKConfig(&PeriphClkInit);\n  /* USER CODE END DSIHOST_Init 2 */\n\n  ...\n}\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"User has to add the required initialization code specific to the used LCD controller at the end of the ",(0,i.kt)("inlineCode",{parentName:"p"},"MX_LTDC_Init()")," function."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"That code will be based on the DSI HAL APIs ",(0,i.kt)("inlineCode",{parentName:"li"},"HAL_DSI_ShortWrite()")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"HAL_DSI_LongWrite()"))),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",s({parentName:"pre"},{className:"language-cpp"}),"/**\n  * @brief LTDC Initialization Function\n  * @param None\n  * @retval None\n  */\nstatic void MX_LTDC_Init(void)\n{\n  ...\n\n  /* USER CODE BEGIN LTDC_Init 2 */\n  // Specific LCD controller's initialization code\n  ...\n\n  // Exit Sleep Mode\n  if (HAL_DSI_ShortWrite(&hdsi, 0, DSI_DCS_SHORT_PKT_WRITE_P0, DSI_EXIT_SLEEP_MODE, 0x00) != HAL_OK)\n  {\n    Error_Handler();\n  }\n\n  HAL_Delay(120);\n  /* USER CODE END LTDC_Init 2 */\n\n  ...\n}\n")))),(0,i.kt)("h2",s({},{id:"touchgfxhal-class-for-dsi-video-mode"}),"Updated TouchGFXHAL class for DSI Video Mode"),(0,i.kt)("p",null,"The code for the LTDC interrupt is identical to the code generated when using Parallel RGB display interface."),(0,i.kt)("p",null,"One way to prevent the MIPI DSI display from turning on until we've rendered the first frame in the application is to guard the function ",(0,i.kt)("inlineCode",{parentName:"p"},"TouchGFXHAL::endFrame")," to keep the display off until first frame is rendered by TouchGFX. The ",(0,i.kt)("inlineCode",{parentName:"p"},"TouchGFXHAL::endFrame()")," could be updated as below, to enable the LCD and its Backlight through a HW Timer configured for PWM output."),(0,i.kt)("pre",null,(0,i.kt)("code",s({parentName:"pre"},{className:"language-cpp",metastring:"{7,9,11}","{7,9,11}":!0}),"void TouchGFXHAL::endFrame()\n{\n    if (!display_on)\n    {\n        display_on = true;\n        /* Enable the LCD, Send Display on DCS command to display */\n        HAL_DSI_ShortWrite(&hdsi, 0, DSI_DCS_SHORT_PKT_WRITE_P1, DSI_SET_DISPLAY_ON, 0x00);\n        /* Start PWM Timer channel */\n        (void)HAL_TIM_PWM_Start(&htim8, TIM_CHANNEL_2);\n        /* Enable Backlight by setting Brightness to 100% */\n        __HAL_TIM_SET_COMPARE(&htim8, TIM_CHANNEL_2, 2U * 100);\n    }\n\n    TouchGFXGeneratedHAL::endFrame();\n}\n")))}N.isMDXComponent=!0}}]);