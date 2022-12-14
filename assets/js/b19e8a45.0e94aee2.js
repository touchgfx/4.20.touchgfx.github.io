"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[1999],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,g=d["".concat(c,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(g,a(a({ref:t},u),{},{components:n})):r.createElement(g,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},44035:function(e,t,n){var r=n(67294),o=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,i=e.height,a=(0,o.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:a,target:"_blank"},r.createElement("img",{width:n,height:i,src:a})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:a,target:"_blank"},r.createElement("img",{width:n,height:i,src:a})),r.createElement("p",null,e.children))}},88678:function(e,t,n){var r=n(67294);class o extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{className:e},r.createElement("div",{className:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{className:"highlight-content"},this.props.children))}}t.Z=o},37793:function(e,t,n){var r=n(67294),o=n(88678);const i=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class a extends r.Component{render(){return r.createElement(o.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:i},this.props.children)}}t.Z=a},75810:function(e,t,n){n.r(t),n.d(t,{assets:function(){return v},contentTitle:function(){return h},default:function(){return P},frontMatter:function(){return g},metadata:function(){return f},toc:function(){return b}});var r=n(3905),o=n(44035),i=n(37793),a=Object.defineProperty,l=Object.defineProperties,c=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&d(e,n,t[n]);if(s)for(var n of s(t))p.call(t,n)&&d(e,n,t[n]);return e};const g={id:"example-gpio",title:"External Events as Triggers"},h=void 0,f={unversionedId:"development/scenarios/example-gpio",id:"development/scenarios/example-gpio",title:"External Events as Triggers",description:"",source:"@site/docs/development/scenarios/example-gpio.mdx",sourceDirName:"development/scenarios",slug:"/development/scenarios/example-gpio",permalink:"/4.20/docs/development/scenarios/example-gpio",draft:!1,tags:[],version:"current",frontMatter:{id:"example-gpio",title:"External Events as Triggers"},sidebar:"docs",previous:{title:"Creating an TouchGFX Board Setup",permalink:"/4.20/docs/development/scenarios/scenarios-create-at"},next:{title:"Running without an RTOS on a TouchGFX Board Setup",permalink:"/4.20/docs/development/scenarios/running-without-rtos"}},v={},b=[{value:"Board Bringup",id:"board-bringup",level:2},{value:"TouchGFX HAL Development",id:"touchgfx-hal-development",level:2},{value:"TouchGFX Designer",id:"touchgfx-designer",level:2},{value:"Running on target",id:"running-on-target",level:2},{value:"Links",id:"links",level:2}],_={toc:b};function P(e){var t,n=e,{components:a}=n,d=((e,t)=>{var n={};for(var r in e)u.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&s)for(var r of s(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=m(m({},_),d),l(t,c({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"This section describes how to use external events, such as physical buttons, as triggers in TouchGFX Designer."),(0,r.kt)("p",null,"Application requirements to respond to input from peripherals, such as physical buttons, requires that GPIO pins on the MCU are configured in accordance with board schematics."),(0,r.kt)("p",null,"In this example the H7B3I-DK is used to show how to make the UI react to the press of a physical button. This example uses polling, while EXTI could also be used instead."),(0,r.kt)(o.Z,{imageSource:"/img/development/board-bring-up/gpio/stm32h7b3i-dk-front.webp",noShadow:!0,mdxType:"Figure"}),(0,r.kt)("p",null,"The schematic can be downloaded here at: ",(0,r.kt)("a",m({parentName:"p"},{href:"https://www.st.com/content/st_com/en/products/evaluation-tools/product-evaluation-tools/mcu-mpu-eval-tools/stm32-mcu-mpu-eval-tools/stm32-discovery-kits/stm32h7b3i-dk.html#"}),"st.com")),(0,r.kt)(i.Z,{mdxType:"Tip"},"If a GPIO pin is readable it is usable as a trigger to an event in TouchGFX Designer."),(0,r.kt)("h2",m({},{id:"board-bringup"}),"Board Bringup"),(0,r.kt)("p",null,"The following images depict a part of the schematics for the STM32H7B3I-DK board, and the examples that follow use STM32CubeMX to configure the appropriate GPIO port and pin as an input to read the state of the button."),(0,r.kt)("p",null,"Start a new application based on the STM32H7B3I-DK TouchGFX board setup.\nAccording to the User Button is attached to GPIO Port C Pin 13 (PC13)."),(0,r.kt)(o.Z,{imageSource:"/img/development/board-bring-up/gpio/schematic-userbutton.webp",noShadow:!0,mdxType:"Figure"}),(0,r.kt)(o.Z,{imageSource:"/img/development/board-bring-up/gpio/schematic-mcu.webp",noShadow:!0,mdxType:"Figure"}),(0,r.kt)("p",null,"In STM32CubeMX PC13 can be configured as an input and configured as a pull-down in the ",(0,r.kt)("strong",{parentName:"p"},"GPIO")," section of the ",(0,r.kt)("strong",{parentName:"p"},"System Core")," category."),(0,r.kt)(o.Z,{imageSource:"/img/development/board-bring-up/gpio/cubemx-pc13.webp",noShadow:!0,mdxType:"Figure"}),(0,r.kt)(o.Z,{imageSource:"/img/development/board-bring-up/gpio/cubemx-gpioconf.webp",noShadow:!0,mdxType:"Figure"}),(0,r.kt)("p",null,"The following code has been generated by STM32CubeMX based on the name given to it in the Pinout View."),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-cpp",metastring:"{4,5}","{4,5}":!0}),"#define MCU_ACTIVE_GPIO_Port GPIOI\n#define VSYNC_FREQ_Pin GPIO_PIN_12\n#define VSYNC_FREQ_GPIO_Port GPIOA\n#define BTN_USER_Pin GPIO_PIN_13\n#define BTN_USER_GPIO_Port GPIOC\n#define LED2_Pin GPIO_PIN_2\n#define LED2_GPIO_Port GPIOG\n#define LCD_INT_Pin GPIO_PIN_2\n")),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-cpp",metastring:"{5,10-14}","{5,10-14}":!0}),"static void MX_GPIO_Init(void)\n  __HAL_RCC_GPIOJ_CLK_ENABLE();\n  __HAL_RCC_GPIOI_CLK_ENABLE();\n  __HAL_RCC_GPIOA_CLK_ENABLE();\n  __HAL_RCC_GPIOC_CLK_ENABLE();\n  __HAL_RCC_GPIOD_CLK_ENABLE();\n  __HAL_RCC_GPIOH_CLK_ENABLE();\n  __HAL_RCC_GPIOB_CLK_ENABLE();\n  ...\n    /*Configure GPIO pin : BTN_USER_Pin */\n  GPIO_InitStruct.Pin = BTN_USER_Pin;\n  GPIO_InitStruct.Mode = GPIO_MODE_INPUT;\n  GPIO_InitStruct.Pull = GPIO_PULLDOWN;\n  HAL_GPIO_Init(BTN_USER_GPIO_Port, &GPIO_InitStruct);\n  }\n")),(0,r.kt)("h2",m({},{id:"touchgfx-hal-development"}),"TouchGFX HAL Development"),(0,r.kt)("p",null,"A part of the rendering cycle of TouchGFX engine is to check for possible input"),(0,r.kt)("p",null,"Once the input state can be read (external event), TouchGFX HAL can now read this event as part of the rendering cycle through the ButtonController interface."),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-cpp"}),"#include <platform/driver/button/ButtonController.hpp>\nclass H7B3ButtonController : public touchgfx::ButtonController\n{\n    virtual void init() {  }\n    virtual bool sample(uint8_t& key)\n    {\n\n      if (HAL_GPIO_ReadPin(GPIOC, GPIO_PIN_13) != GPIO_PIN_RESET)\n      {\n        key = 1;\n        return true;\n      }\n      return false;\n    }\nprivate:\n\n};\n\n...\nH7B3ButtonController bc;\nvoid touchgfx_init()\n{\n  ...\n  hal.initialize();\n  hal.setButtonController(&bc);\n}\n")),(0,r.kt)("h2",m({},{id:"touchgfx-designer"}),"TouchGFX Designer"),(0,r.kt)(o.Z,{imageSource:"/img/development/board-bring-up/gpio/h7b3-at-4-17.webp",noShadow:!0,mdxType:"Figure"}),(0,r.kt)("p",null,"To use a value sampled by the ",(0,r.kt)("inlineCode",{parentName:"p"},"ButtonController")," in interactions from the TouchGFX designer a name/value-mapping must be created in the ",(0,r.kt)("inlineCode",{parentName:"p"},".touchgfx")," project file."),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-json"}),'    "PhysicalButtons": [],\n')),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-json"}),'    "PhysicalButtons": [\n      {\n        "Key": 1,\n        "Name": "BTN_USER"\n      }\n    ],\n')),(0,r.kt)("p",null,'"Hardware Button is clicked" is now available as a trigger when creating an interaction. Selecting the "Key"/"Name" pair defined in the .touchgfx file allows users to specify an action, such as "Change screen".'),(0,r.kt)(o.Z,{imageSource:"/img/development/board-bring-up/gpio/designer-interaction-4-17.webp",noShadow:!0,mdxType:"Figure"}),(0,r.kt)("h2",m({},{id:"running-on-target"}),"Running on target"),(0,r.kt)("p",null,'After pressing "Generate code" in the designer, open the STM32CubeIDE project, configure the debug configuration.'),(0,r.kt)(o.Z,{imageSource:"/img/development/board-bring-up/gpio/cubeide-debug-config.webp",noShadow:!0,mdxType:"Figure"}),(0,r.kt)("h2",m({},{id:"links"}),"Links"),(0,r.kt)("p",null,(0,r.kt)("a",m({parentName:"p"},{href:"https://www.st.com/content/st_com/en/products/evaluation-tools/product-evaluation-tools/mcu-mpu-eval-tools/stm32-mcu-mpu-eval-tools/stm32-discovery-kits/stm32h7b3i-dk.html#"}),"https://www.st.com/content/st_com/en/products/evaluation-tools/product-evaluation-tools/mcu-mpu-eval-tools/stm32-mcu-mpu-eval-tools/stm32-discovery-kits/stm32h7b3i-dk.html#")))}P.isMDXComponent=!0}}]);