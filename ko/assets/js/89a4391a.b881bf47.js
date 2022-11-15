"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[6311],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=p(n),f=a,h=m["".concat(l,".").concat(f)]||m[f]||s[f]||o;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},70814:function(e,t,n){var r=n(67294),a=n(88678);const o=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},r.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}));class i extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-caution)",header:"Caution",type:"caution",icon:o},this.props.children)}}t.Z=i},44035:function(e,t,n){var r=n(67294),a=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,o=e.height,i=(0,a.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:i,target:"_blank"},r.createElement("img",{width:n,height:o,src:i})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:i,target:"_blank"},r.createElement("img",{width:n,height:o,src:i})),r.createElement("p",null,e.children))}},88678:function(e,t,n){var r=n(67294);class a extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{className:e},r.createElement("div",{className:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{className:"highlight-content"},this.props.children))}}t.Z=a},93054:function(e,t,n){var r=n(67294),a=n(88678);const o=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));class i extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:o},this.props.children)}}t.Z=i},37793:function(e,t,n){var r=n(67294),a=n(88678);const o=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class i extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:o},this.props.children)}}t.Z=i},52452:function(e,t,n){n.r(t),n.d(t,{assets:function(){return T},contentTitle:function(){return v},default:function(){return y},frontMatter:function(){return g},metadata:function(){return k},toc:function(){return C}});var r=n(3905),a=n(44035),o=n(93054),i=n(37793),c=n(70814),l=Object.defineProperty,p=Object.defineProperties,u=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,h=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))m.call(t,n)&&h(e,n,t[n]);if(s)for(var n of s(t))f.call(t,n)&&h(e,n,t[n]);return e};const g={id:"scenarios-fmc",title:"FMC \ubc0f SPI \ub514\uc2a4\ud50c\ub808\uc774 \uc778\ud130\ud398\uc774\uc2a4"},v=void 0,k={unversionedId:"development/touchgfx-hal-development/scenarios/scenarios-fmc",id:"development/touchgfx-hal-development/scenarios/scenarios-fmc",title:"FMC \ubc0f SPI \ub514\uc2a4\ud50c\ub808\uc774 \uc778\ud130\ud398\uc774\uc2a4",description:"",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/development/touchgfx-hal-development/scenarios/scenarios-fmc.mdx",sourceDirName:"development/touchgfx-hal-development/scenarios",slug:"/development/touchgfx-hal-development/scenarios/scenarios-fmc",permalink:"/4.20/ko/docs/development/touchgfx-hal-development/scenarios/scenarios-fmc",draft:!1,tags:[],version:"current",frontMatter:{id:"scenarios-fmc",title:"FMC \ubc0f SPI \ub514\uc2a4\ud50c\ub808\uc774 \uc778\ud130\ud398\uc774\uc2a4"},sidebar:"docs",previous:{title:"LTDC/Parallel RGB",permalink:"/4.20/ko/docs/development/touchgfx-hal-development/scenarios/scenarios-ltdc-parallel-rgb"},next:{title:"Framebuffer Strategies",permalink:"/4.20/ko/docs/development/touchgfx-hal-development/scenarios/scenarios-framebuffer-strategies"}},T={},C=[{value:"\ud504\ub808\uc784 \ubc84\ud37c \uc804\uc1a1",id:"transferring-the-framebuffer",level:2},{value:"FMC",id:"fmc",level:3},{value:"HAL::flushFrameBuffer()\uc5d0\uc11c \ubc18\ud658",id:"returning-from-halflushframebuffer",level:2},{value:"TouchGFX Driver/Te(Tearing Effect) \uc2e0\ud638",id:"touchgfx-driver--tearing-effect-signal",level:2},{value:"\uacb0\ub860",id:"conclusion",level:2}],F={toc:C};function y(e){var t,n=e,{components:l}=n,h=((e,t)=>{var n={};for(var r in e)m.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&s)for(var r of s(e))t.indexOf(r)<0&&f.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=d(d({},F),h),p(t,u({components:l,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"\ub2e4\uc74c \uc2dc\ub098\ub9ac\uc624\ub4e4\uc740 \uc77c\ubc18\uc801\uc73c\ub85c FMC \ub610\ub294 SPI\ub97c \ud1b5\ud574 \uc5f0\uacb0\ub41c LCD\uc5d0 \ud53d\uc140\uc744 \uc804\uc1a1\ud558\ub294 \ub2e8\uacc4\ub4e4\uc744 \ubcf4\uc5ec\uc90d\ub2c8\ub2e4. \ub450 \ubc29\ubc95\uc740 \uba87 \uac00\uc9c0 \uc694\uc18c\ub4e4\uc744 \uacf5\uc720\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4. \uc774 \uc139\uc158\uc5d0 \uae30\uc220\ub41c \uc2dc\ub098\ub9ac\uc624\uc5d0\uc11c\ub294 \uc608\uc99d\uc744 \uc704\ud574 ST7789H2 LCD \ucee8\ud2b8\ub864\ub7ec\ub97c \uc0ac\uc6a9\ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"STM32CubeMX\uc758 \ubcf4\ub4dc \uc0ac\uc591\uc5d0 \ub530\ub77c FMC \ub610\ub294 SPI\uac00 \uad6c\uc131\ub418\uace0 \ub098\uba74, \uac1c\ubc1c\uc790\uac00 \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \ud504\ub808\uc784 \ubc84\ud37c\uc758 \uc5c5\ub370\uc774\ud2b8\ub41c \ubd80\ubd84\uc744 \uc5f0\uacb0\ub41c \ub514\uc2a4\ud50c\ub808\uc774\ub85c \uc804\uc1a1\ud558\ub294 \ucf54\ub4dc\ub97c \uc791\uc131\ud560 \uc218 \uc788\ub3c4\ub85d TouchGFX Generator\ub97c \uc0ac\uc6a9\ud574 TouchGFX HAL\uc744 \uc0dd\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc544\ub798 \uadf8\ub9bc\uc5d0\ub294 Custom Display Interface\uac00 \uc120\ud0dd\ub41c TouchGFX Generator \uad6c\uc131\uc774 \ub098\uc640 \uc788\uc2b5\ub2c8\ub2e4. \uc774\uac83\uc740 \uac1c\ubc1c\uc790\uac00 \ud53d\uc140\uc744 \uad6c\uc131\ud558\uc5ec \ud504\ub808\uc784 \ubc84\ud37c \uba54\ubaa8\ub9ac\uc5d0\uc11c \ub514\uc2a4\ud50c\ub808\uc774\ub85c ",(0,r.kt)("strong",{parentName:"p"},"\uc218\ub3d9"),"\uc73c\ub85c \uc804\uc1a1\ud558\uae30\ub97c \uc6d0\ud55c\ub2e4\ub294 \uac83\uc744 TouchGFX Generator\uc5d0\uac8c \uc54c\ub824 \uc8fc\uace0 \uc774\ub97c \uc218\ud589\ud558\uae30 \uc704\ud55c \ud578\ub4e4\uc774 \uc0dd\uc131\ub429\ub2c8\ub2e4."),(0,r.kt)(a.Z,{imageSource:"/img/development/touchgfx-hal-development/scenarios/custom-interface.png",noShadow:!1,mdxType:"Figure"},"TouchGFX Generator \uad6c\uc131"),(0,r.kt)(i.Z,{mdxType:"Tip"},"SPI\ub97c \ud1b5\ud574 \uc5f0\uacb0\ub41c \ub514\uc2a4\ud50c\ub808\uc774\uc758 \uacbd\uc6b0, \ub9de\ucda4\ud615 \ub514\uc2a4\ud50c\ub808\uc774 \uc778\ud130\ud398\uc774\uc2a4\ub97c \uc120\ud0dd\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc77c\ubc18\uc801\uc73c\ub85c \uc784\ubca0\ub514\ub4dc GRAM\uc774 \uc7a5\ucc29\ub41c \ub514\uc2a4\ud50c\ub808\uc774\uc758 \uacbd\uc6b0\uc5d0\ub294 \uc0dd\uc131\ub41c TouchGFX HAL\uc5d0\uc11c \uc0ac\uc6a9\uc790\uac00 \uc791\uc131\ud55c \ucf54\ub4dc\uac00 \ub2e4\uc74c \ub2e8\uacc4\ub97c \uc218\ud589\ud558\uac8c \ub429\ub2c8\ub2e4."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},'\ub2e4\uc2dc \uadf8\ub9ac\uac8c \ub420 \ud504\ub808\uc784 \ubc84\ud37c\uc758 \uc601\uc5ed\uc5d0 \ub530\ub77c "display cursor"\uc640 "active window"\ub97c \uc774 \uc601\uc5ed\uacfc \uc77c\uce58\ud558\ub294 GRAM\uc758 \uc704\uce58\ub85c \uc62e\uae41\ub2c8\ub2e4.'),(0,r.kt)("li",{parentName:"ol"},"GRAM\uc5d0 \uc785\ub825\ub418\ub294 \ud53d\uc140 \ub370\uc774\ud130\ub97c \uae30\ub85d\ud560 \uc900\ube44\ub97c \ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ol"},"\ud53d\uc140 \ub370\uc774\ud130\ub97c \uc804\uc1a1\ud569\ub2c8\ub2e4.")),(0,r.kt)("h2",d({},{id:"transferring-the-framebuffer"}),"\ud504\ub808\uc784 \ubc84\ud37c \uc804\uc1a1"),(0,r.kt)("p",null,"\ud504\ub808\uc784 \ubc84\ud37c\uc758 \uc601\uc5ed\uc774 \uc5c5\ub370\uc774\ud2b8\ub418\uba74 TouchGFX Engine\uc5d0\uc11c\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"HAL::flushFrameBuffer(Rect r)"),"\ub97c \ud638\ucd9c\ud569\ub2c8\ub2e4. \uac1c\ubc1c\uc790\uac00 SPI \ubc0f FMC\uc758 \uacbd\uc6b0\uc640 \ub9c8\ucc2c\uac00\uc9c0\ub85c \ud53d\uc140\uc744 \ub514\uc2a4\ud50c\ub808\uc774\uc5d0 \uc218\ub3d9\uc73c\ub85c \uc804\uc1a1\ud558\ub294 \ucf54\ub4dc\ub97c \uad6c\ud604\ud574\uc57c \ud558\ub294 \uacbd\uc6b0\uc5d0\ub294 \uc774 \ud568\uc218\ub97c \uc7ac\uc815\uc758\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc55e\uc73c\ub85c \uc0b4\ud3b4\ubcf4\uaca0\uc9c0\ub9cc, FMC \ubc45\ud06c\ub97c \ud1b5\ud574 \ud53d\uc140\uc744 \uc804\uc1a1\ud558\ub294 \ud568\uc218\ub294 TouchGFX Generator\uc5d0\uc11c \uc0dd\uc131\ub429\ub2c8\ub2e4."),(0,r.kt)(o.Z,{mdxType:"Note"},"\uc774 \uc139\uc158\uc5d0 \ub098\uc640 \uc788\ub294 ST7789H2\ub97c \uc704\ud55c \ub4dc\ub77c\uc774\ubc84 \ucf54\ub4dc\ub294 \ubcf4\ub4dc \ube0c\ub9c1\uc5c5 \ub2e8\uacc4\uc5d0\uc11c \uac1c\ubc1c\ub418\uc5c8\uace0, \uc77c\ub2e8 \uc791\ub3d9\uc774 \ub418\uba74 \ub300\uac1c\ub294 TouchGFX Generator\uc5d0\uc11c \uc0dd\uc131\ub41c HAL \ud074\ub798\uc2a4\uc5d0 \ubcf5\uc0ac\uac00 \uac00\ub2a5\ud569\ub2c8\ub2e4.",(0,r.kt)("p",null,"\ub4dc\ub77c\uc774\ubc84\ub294 \ud53d\uc140\uc744 \ub514\uc2a4\ud50c\ub808\uc774\uc5d0 \uc804\uc1a1\ud558\uace0 \ub514\uc2a4\ud50c\ub808\uc774\uc758 \uba54\ubaa8\ub9ac \uc791\uc131 \uc704\uce58\ub97c \uc81c\uc5b4\ud560 \uc218 \uc788\uc5b4\uc57c \ud569\ub2c8\ub2e4. \uc790\uc138\ud55c \ub0b4\uc6a9\uc740 \ub514\uc2a4\ud50c\ub808\uc774\uc758 \ub370\uc774\ud130\uc2dc\ud2b8\ub97c \ud655\uc778\ud558\uc2ed\uc2dc\uc624.")),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-cpp"}),"void  TouchGFXHAL::flushFrameBuffer(const Rect& rect)\n{\n    /* Set Cursor */\n    ST7789H2_SetDisplayWindow(rect.x, rect.y, rect.width, rect.height);\n\n    /* Prepare to write to LCD RAM */\n    __ST7789H2_WriteReg(ST7789H2_WRITE_RAM, (uint8_t*)NULL, 0);\n\n    /* Send Pixels - User defined function */\n    this->copyFrameBufferBlockToLCD(rect);\n}\n")),(0,r.kt)("p",null,"\uc544\ub798\uc758 ",(0,r.kt)("inlineCode",{parentName:"p"},"ST7789H2_SetDisplayWindow"),' \ud568\uc218\ub294 GRAM\uc744 \uc0ac\uc6a9\ud574  \ub514\uc2a4\ud50c\ub808\uc774\uc5d0 \uc77c\ubc18\uc801\uc73c\ub85c \uc0ac\uc6a9\ub418\ub294 \ud2b9\uc815 \ub808\uc9c0\uc2a4\ud130\uc5d0 \uae30\ub85d\ud558\ub294 \ubc29\ubc95\uc73c\ub85c GRAM\uc758 \uac00\uc0c1 "\ucee4\uc11c"\uc5d0 \ub300\ud55c ',(0,r.kt)("inlineCode",{parentName:"p"},"x")," \ubc0f ",(0,r.kt)("inlineCode",{parentName:"p"},"y")," \uc88c\ud45c\ub97c \uc124\uc815\ud569\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-c"}),'extern "C"\nvoid ST7789H2_SetDisplayWindow(uint16_t Xpos, uint16_t Ypos, uint16_t Width, uint16_t Height)\n{\n    uint8_t   parameter[4];\n\n    /* CASET: Column Address Set */\n    parameter[0] = 0x00;\n    parameter[1] = Xpos;\n    parameter[2] = 0x00;\n    parameter[3] = Xpos + Width - 1;\n    ST7789H2_WriteReg(ST7789H2_CASET, parameter, 4);\n\n    /* RASET: Row Address Set */\n    parameter[0] = 0x00;\n    parameter[1] = Ypos;\n    parameter[2] = 0x00;\n    parameter[3] = Ypos + Height - 1;\n    ST7789H2_WriteReg(ST7789H2_RASET, parameter, 4);\n}\n')),(0,r.kt)("p",null,"\uc544\ub798\uc758 ",(0,r.kt)("inlineCode",{parentName:"p"},"TouchGFXHAL::copyFrameBufferBlockToLCD")," \ud568\uc218\ub294 \uc774 \uc608\uc2dc\uc5d0\uc11c \ud55c \ubc88\uc5d0 \ud55c \uc904\uc758 \uc5c5\ub370\uc774\ud2b8\ub41c \uc601\uc5ed(",(0,r.kt)("inlineCode",{parentName:"p"},"Rect"),")\uc744 \uc804\uc1a1\ud558\uace0 \uc774\uc5d0 \ub530\ub77c \ud504\ub808\uc784 \ubc84\ud37c \ud3ec\uc778\ud130\uac00 \uc9c4\ud589\ub418\ub3c4\ub85d \uc0ac\uc6a9\uc790\uac00 \uc815\uc758\ud55c \ud568\uc218\uc785\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-cpp"}),"void TouchGFXHAL::copyFrameBufferBlockToLCD(const Rect& rect)\n{\n    __IO uint16_t* ptr;\n    uint32_t height;\n\n    // This can be accelerated using regular DMA hardware\n    for (height = 0; height < rect.height ; height++)\n    {\n        ptr = getClientFrameBuffer() + rect.x + (height + rect.y) * HAL::DISPLAY_WIDTH;\n        LCD_IO_WriteMultipleData((uint16_t*)ptr, rect.width);\n    }\n}\n")),(0,r.kt)("p",null,"TouchGFX Generator\ub294",(0,r.kt)("inlineCode",{parentName:"p"}," ptr"),"\uc744 \uc218\ub3d9\uc73c\ub85c \uc804\uc9c4\uc2dc\ud0a4\ub294 \ub300\uc2e0, \ud504\ub808\uc784 \ubc84\ud37c\uc5d0\uc11c ",(0,r.kt)("inlineCode",{parentName:"p"},"Rect"),"\uc758 \uc704\uce58\uc5d0 \ub530\ub77c ",(0,r.kt)("inlineCode",{parentName:"p"},"ptr"),"\uc744 \uc804\uc9c4\uc2dc\ud0a4\ub3c4\ub85d ",(0,r.kt)("inlineCode",{parentName:"p"},"advanceFrameBufferToRect\xa0"),"\ud568\uc218\ub97c \uc0dd\uc131\ud569\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-cpp"}),"inline uint8_t* TouchGFXGeneratedHAL::advanceFrameBufferToRect(uint8_t* fbPtr, const touchgfx::Rect& rect) const\n{\n    //       Advance vertically                   Advance horizontally\n    fbPtr += rect.y * lcd().framebufferStride() + rect.x * 2;\n    return fbPtr;\n}\n")),(0,r.kt)("h3",d({},{id:"fmc"}),"FMC"),(0,r.kt)("p",null,"\ub610\ud55c, TouchGFX Generator\ub294 FMC \ubc45\ud06c\uac00 \ud558\ub098 \uc774\uc0c1 \uc62c\ubc14\ub974\uac8c \uad6c\uc131\ub41c \uacbd\uc6b0\uc5d0 FMC \ub514\uc2a4\ud50c\ub808\uc774 \uc778\ud130\ud398\uc774\uc2a4\ub3c4 \uc9c0\uc6d0\ud569\ub2c8\ub2e4. \uc774 \uacbd\uc6b0, TouchGFX Generator\uc5d0\uc11c \uc0dd\uc131\ud55c \ucf54\ub4dc\ub294 \ub514\uc2a4\ud50c\ub808\uc774\uc5d0 \uc5f0\uacb0\ub41c FMC \ubc45\ud06c\ub97c \ud1b5\ud574 \uc0c1\ud638 \uc791\uc6a9\uc744 \ud558\ub3c4\ub85d ",(0,r.kt)("inlineCode",{parentName:"p"},"LCD_IO_WriteMultipleData")," \ud568\uc218\uac00 \uc0dd\uc131\ub41c\ub2e4\ub294 \uc810\uc744 \uc81c\uc678\ud558\uace0  ",(0,r.kt)("em",{parentName:"p"},"\ub9de\ucda4\ud615")," \ub514\uc2a4\ud50c\ub808\uc774 \uc778\ud130\ud398\uc774\uc2a4\uc758 \ucf54\ub4dc\uc640 \ube44\uc2b7\ud569\ub2c8\ub2e4.  ",(0,r.kt)("inlineCode",{parentName:"p"},"copyFrameBufferBlockToLCD")," \ud568\uc218\uc5d0 \ub300\ud574 \uc55e\uc11c \ubcf4\uc5ec\ub4dc\ub9b0 \ucf54\ub4dc\ub97c \ub2e4\uc2dc \ubc29\ubb38\ud558\uba74 \uc0dd\uc131\ub41c \ud568\uc218\ub97c \uc0ac\uc6a9\ud55c\ub2e4\ub294 \uac83\uc744 \ud655\uc778\ud558\uac8c \ub420 \uac83\uc785\ub2c8\ub2e4."),(0,r.kt)(i.Z,{mdxType:"Tip"},"SPI \ubc0f FMC \ub514\uc2a4\ud50c\ub808\uc774 \uc778\ud130\ud398\uc774\uc2a4 \ubaa8\ub450\uc5d0\uc11c \uac1c\ubc1c\uc790\ub294 1) \ucee4\uc11c \uc124\uc815, 2) GRAM\uc5d0 \uc4f0\uae30 \uc900\ube44, 3) \ub9de\ucda4\ud615 SPI \ub514\uc2a4\ud50c\ub808\uc774 \ub4dc\ub77c\uc774\ubc84\ub098 \uc0dd\uc131\ub41c FMC \ubc45\ud06c \ud568\uc218\ub97c \ud1b5\ud55c \ud53d\uc140 \uc804\uc1a1\uc744 \uc704\ud574 flushFrameBuffer() \ud568\uc218\ub97c \uc218\uc815\ud558\uac8c \ub429\ub2c8\ub2e4. "),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-c"}),"    __weak void LCD_IO_WriteMultipleData(uint16_t* pData, uint32_t Size)\n    {\n        uint32_t  i;\n\n        for (i = 0; i < Size; i++)\n        {\n            FMC_BANK1_WriteData(pData[i]);\n        }\n    }\n")),(0,r.kt)("p",null,"\ub2e4\uc74c \uadf8\ub9bc\uc740 FMC \ubc45\ud06c 2(\ub458 \uc911 \ud558\ub098 \uc0ac\uc6a9 \uac00\ub2a5)\uc758 \uc720\ud6a8\ud55c 16\ube44\ud2b8(\ud544\uc218) \uad6c\uc131\uc744 \ubcf4\uc5ec\uc90d\ub2c8\ub2e4."),(0,r.kt)(a.Z,{imageSource:"/img/development/touchgfx-hal-development/scenarios/fmc-bank-configuration.png",width:"600",noShadow:!1,mdxType:"Figure"},"FMC \ubc45\ud06c \uad6c\uc131"),(0,r.kt)("p",null,"\uc720\ud6a8\ud55c \uad6c\uc131\uc774 \ucda9\uc871\ub418\uba74 TouchGFX Generator\uc5d0\uc11c \uc774 \ubc45\ud06c\ub97c \uc120\ud0dd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. MCU\uc5d0 \ub300\ud55c FMC \ubc45\ud06c \ub808\uc9c0\uc2a4\ud130\uc758 \uc2dc\uc791 \uc8fc\uc18c\ub97c \ud655\uc778\ud558\uc2ed\uc2dc\uc624."),(0,r.kt)(a.Z,{imageSource:"/img/development/touchgfx-hal-development/scenarios/fmc-interface-selection.png",width:"500",noShadow:!1,mdxType:"Figure"},"FMC \uc778\ud130\ud398\uc774\uc2a4 \uc120\ud0dd"),(0,r.kt)("p",null,"TouchGFX Generator\ub294 FMC \ubc45\ud06c\uc758 \uad6c\uc131\uc744 \ud655\uc778\ud558\uace0 \ud655\uc778\ud55c \ubb38\uc81c\ub97c \ubcf4\uace0\ud569\ub2c8\ub2e4."),(0,r.kt)(a.Z,{imageSource:"/img/development/touchgfx-hal-development/scenarios/fmc-bank-configuration-8bit.png",noShadow:!1,mdxType:"Figure"},"FMC \uad6c\uc131 \uc624\ub958"),(0,r.kt)("h2",d({},{id:"returning-from-halflushframebuffer"}),"HAL::flushFrameBuffer()\uc5d0\uc11c \ubc18\ud658"),(0,r.kt)("p",null,"\ud568\uc218\uac00 \uac12\uc744 \ubc18\ud658\ud558\uba74 TouchGFX Engine\uc740 \uacc4\uc18d\ud574\uc11c \ud504\ub808\uc784\uc758 \ub098\uba38\uc9c0 \ubd80\ubd84\uc744 \uadf8\ub9bd\ub2c8\ub2e4. DMA\ub97c \uc0ac\uc6a9\ud574 \ud53d\uc140\uc744 \ub514\uc2a4\ud50c\ub808\uc774\ub85c \uc804\uc1a1\ud558\uace0 \uc2f6\uc740 \uac1c\ubc1c\uc790\ub294 \uc608\ub97c \ub4e4\uc5b4 ",(0,r.kt)("em",{parentName:"p"},"DMA Completed"),"\xa0\uc778\ud130\ub7fd\ud2b8\uc5d0 \uc758\ud574 \uc2dc\uadf8\ub110\ub9c1\ub41c \uc138\ub9c8\ud3ec\uc5b4\uc5d0\uc11c \ub300\uae30\ub97c \ud558\ub294 \ubc29\uc2dd\uc73c\ub85c",(0,r.kt)("inlineCode",{parentName:"p"}," HAL::flushFrameBuffer(Rect& rect)"),"\uac00 \uac12\uc744 \uc989\uc2dc \ubc18\ud658\ud558\uc9c0 \uc54a\ub3c4\ub85d \ud574\uc57c \ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc544\ub798\uc758 \uc758\uc0ac \ucf54\ub4dc\ub294 DMA\uac00 \uc0ac\uc6a9\ub418\ub294 \uacbd\uc6b0\uc5d0\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"HAL::flushFrameBuffer()"),"\ub97c \uad6c\uc131\ud558\ub294 \ubc29\ubc95\uc5d0 \ub300\ud55c \uc608\ub97c \ubcf4\uc5ec\uc90d\ub2c8\ub2e4. \uc774 \ucf54\ub4dc\ub294 FreeRTOS \uc138\ub9c8\ud3ec\uc5b4\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"screen_frame_buffer_sem"),"\uc744 \uc0ac\uc6a9\ud569\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-cpp"}),"void TouchGFXHAL::flushFrameBuffer(const touchgfx::Rect& rect)\n{\n    uint16_t* fb = HAL::lockFrameBuffer();\n\n    //Prepare display: Set cursor, write to display gram as described previously in this scenario\n\n    //Try to take a display semaphore - Always free at this point\n    xSemaphoreTake(screen_frame_buffer_sem, portMAX_DELAY);\n\n    //Set up DMA\n    screenDMAEnable();\n\n    // Wait for the DMA transfer to complete\n    xSemaphoreTake(screen_frame_buffer_sem, portMAX_DELAY);\n\n    //Unlock framebuffer and give semaphore back\n    HAL::unlockFrameBuffer();\n    xSemaphoreGive(screen_frame_buffer_sem);\n}\n")),(0,r.kt)(c.Z,{mdxType:"Caution"},"TouchGFX Generator\uc5d0\uc11c \uc0dd\uc131\ub41c FMC \ucf54\ub4dc\ub294 DMA\ub97c \uc0ac\uc6a9\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h2",d({},{id:"touchgfx-driver--tearing-effect-signal"}),"TouchGFX Driver/Te(Tearing Effect) \uc2e0\ud638"),(0,r.kt)("p",null,'\uc704\uc758 TouchGFX Generator \uad6c\uc131\uc5d0\uc11c \uc54c \uc218 \uc788\ub4ef\uc774 \uc784\ubca0\ub514\ub4dc TFT \ucee8\ud2b8\ub864\ub7ec\uac00 \uc7a5\ucc29\ub418\uc9c0 \uc54a\uc740 MCU\uc5d0\uc11c \ubcf4\ud1b5 \uadf8\ub7ec\ud558\ub4ef "Application Tick Source" \uc5ed\uc2dc "Custom"\uc73c\ub85c \uc124\uc815\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4.'),(0,r.kt)("p",null,"AL(Abstraction Layer) \uc544\ud0a4\ud14d\ucc98 \uc139\uc158\uc5d0\uc11c \uc124\uba85\ud588\ub4ef\uc774 TouchGFX Engine \uba54\uc778 \ub8e8\ud504\ub294 \ubcf4\ud1b5 \ub514\uc2a4\ud50c\ub808\uc774\uc5d0\uc11c \uc2dc\uadf8\ub110\ub9c1\uc774 \uc218\ud589\ub420 \ub54c ",(0,r.kt)("inlineCode",{parentName:"p"},"OSWrappers::signalVSync()"),"\ub97c \ud638\ucd9c\ud558\ub294 \ubc29\uc2dd\uc73c\ub85c \ucc28\ub2e8\uc774 \ud574\uc81c\ub429\ub2c8\ub2e4."),(0,r.kt)("p",null,'\uc2dc\ub9ac\uc5bc \ub610\ub294 8080 \ub514\uc2a4\ud50c\ub808\uc774 \uc778\ud130\ud398\uc774\uc2a4\ub97c \uac16\ucd98 \ub514\uc2a4\ud50c\ub808\uc774\uc758 \uacbd\uc6b0, \ubcf4\ud1b5 \uc784\ubca0\ub514\ub4dc \ub514\uc2a4\ud50c\ub808\uc774 \ucee8\ud2b8\ub864\ub7ec\uac00 MCU\uc758 GPIO\uc5d0 \uc5f0\uacb0\ud560 \uc218 \uc788\ub294 TE(Tearing Effect) \uc2e0\ud638\ub97c \ubc1c\uc0dd\uc2dc\ud0b5\ub2c8\ub2e4. \uc774 \uacbd\uc6b0, \uc77c\ubc18\uc801\uc73c\ub85c GPIO\uac00 \uc2dc\uadf8\ub110\ub9c1\ub420 \ub54c \uc778\ud130\ub7fd\ud2b8\ub97c \uc0dd\uc131\ud558\ub3c4\ub85d MCU\uac00 \uad6c\uc131\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub7ec\ud55c "Tearing Effect" \uc778\ud130\ub7fd\ud2b8\ub294 \ub2e4\uc74c \ud504\ub808\uc784\uc744 \ub80c\ub354\ub9c1\ud558\ub3c4\ub85d TouchGFX Engine \uba54\uc778 \ub8e8\ud504\uc758 \ucc28\ub2e8\uc744 \ud574\uc81c\ud569\ub2c8\ub2e4. \ubc18\ub4dc\uc2dc STM32CubeMX\uc758 \ud540\uc5d0 \ub300\ud55c \uc678\ubd80 \uc778\ud130\ub7fd\ud2b8\ub97c \uc785\ub825\ud558\uace0 \ud65c\uc131\ud654\ud558\ub3c4\ub85d GPIO\ub97c \uad6c\uc131\ud558\uc2ed\uc2dc\uc624.'),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-cpp"}),'extern "C"\nvoid TE_Handler(void)\n{\n    ...\n    /* Unblock TouchGFX Engine Main Loop to render next frame */\n    OSWrappers::signalVSync();\n    ...\n}\n\n')),(0,r.kt)("h2",d({},{id:"conclusion"}),"\uacb0\ub860"),(0,r.kt)("p",null,"TouchGFX Generator\ub97c \ud1b5\ud574",(0,r.kt)("em",{parentName:"p"}," Custom "),"Display Interface\ub97c \uc120\ud0dd\ud55c\ub2e4\ub294 \uac83\uc740 \uac1c\ubc1c\uc790\uac00 \uc9c1\uc811 \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \ud504\ub808\uc784 \ubc84\ud37c\uc5d0\uc11c \ub514\uc2a4\ud50c\ub808\uc774\ub85c \ud53d\uc140\uc744 \uc804\uc1a1\ud558\ub3c4\ub85d \ucf54\ub4dc\ub97c \uc791\uc131\ud558\uaca0\ub2e4\ub294 \uc758\uc0ac\ub97c \ud45c\ud604\ud558\ub294 \uac83\uc785\ub2c8\ub2e4."),(0,r.kt)("p",null,"TouchGFX Generator\ub294 \ud504\ub808\uc784 \ubc84\ud37c\uc758 \uc601\uc5ed\uc744 \ub80c\ub354\ub9c1\ud55c \uc774\ud6c4\uc5d0 TouchGFX\uc5d0\uc11c \uc790\ub3d9\uc73c\ub85c \ud638\ucd9c\ub418\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"TouchGFXHAL::flushFrameBuffer(Rect& rect)"),"\xa0\ud568\uc218\ub97c \uc0dd\uc131\ud569\ub2c8\ub2e4. \uac1c\ubc1c\uc790\ub294 \uc601\ud5a5\uc744 \ubc1b\ub294 \ud53d\uc140\uc744 \ub514\uc2a4\ud50c\ub808\uc774, SPI, FMC \ub4f1\uc5d0 \uc804\uc1a1\ud558\ub294 \ub370 \uc774 \ud568\uc218\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uadf8\ub7fc\uc5d0\ub3c4 \ubd88\uad6c\ud558\uace0, \ub450 \uacbd\uc6b0 \ubaa8\ub450 \uc544\ub798\uc758 \ub2e8\uacc4\ub4e4\uc744 \uc644\ub8cc\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},'\ub2e4\uc2dc \uadf8\ub9ac\uac8c \ub420 \ud504\ub808\uc784 \ubc84\ud37c\uc758 \uc601\uc5ed\uc5d0 \ub530\ub77c "display cursor"\uc640 "active window"\ub97c \uc774 \uc601\uc5ed\uacfc \uc77c\uce58\ud558\ub294 GRAM\uc758 \uc704\uce58\ub85c \uc62e\uae41\ub2c8\ub2e4.'),(0,r.kt)("li",{parentName:"ol"},"GRAM\uc5d0 \uc785\ub825\ub418\ub294 \ud53d\uc140 \ub370\uc774\ud130\ub97c \uae30\ub85d\ud560 \uc900\ube44\ub97c \ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ol"},"\ud53d\uc140 \ub370\uc774\ud130\ub97c \uc804\uc1a1\ud569\ub2c8\ub2e4. FMC \ub514\uc2a4\ud50c\ub808\uc774 \uc778\ud130\ud398\uc774\uc2a4\uc758 \uacbd\uc6b0, \uac1c\ubc1c\uc790\ub97c \uc704\ud574 \uc774 \ud568\uc218\uac00 \uc790\ub3d9 \uc0dd\uc131\ub418\uc5b4 ",(0,r.kt)("inlineCode",{parentName:"li"},"flushFrameBuffer(Rect& rect)")," \ub0b4\uc5d0\uc11c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4(\uc774 \ubb38\uc11c\uc758 \uc55e\ubd80\ubd84 \ucc38\uc870).")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"\ub9de\ucda4\ud615")," \ub610\ub294 ",(0,r.kt)("em",{parentName:"p"},"FMC")," \ub514\uc2a4\ud50c\ub808\uc774 \uc778\ud130\ud398\uc774\uc2a4\ub97c \uc120\ud0dd\ud558\ub824\uba74 \uac1c\ubc1c\uc790\uac00 ",(0,r.kt)("inlineCode",{parentName:"p"},"OSWrappers::signalVSync()"),"\uc5d0 \uc2e0\ud638\ub97c \uc804\uc1a1\ud558\ub3c4\ub85d \ub9de\ucda4\ud615 TouchGFX Application Tick \ub4dc\ub77c\uc774\ubc84\ub97c \uad6c\ud604\ud558\uc5ec TouchGFX Engine \uba54\uc778 \ub8e8\ud504\uc5d0 \ub300\ud55c \ucc28\ub2e8\uc744 \ud574\uc81c\ud574\uc57c \ud569\ub2c8\ub2e4.  \uc77c\ubc18\uc801\uc73c\ub85c TFT \ucee8\ud2b8\ub864\ub7ec\uac00 \uc7a5\ucc29\ub418\uc9c0 \uc54a\uc740 MCU\uc5d0\uc11c \uc0ac\uc6a9\ub418\ub294 \ub514\uc2a4\ud50c\ub808\uc774\ub294 MCU\uc5d0 \uc5f0\uacb0\ub41c ",(0,r.kt)("em",{parentName:"p"},"TE "),"\uc2e0\ud638\ub97c \uc81c\uacf5\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."))}y.isMDXComponent=!0}}]);