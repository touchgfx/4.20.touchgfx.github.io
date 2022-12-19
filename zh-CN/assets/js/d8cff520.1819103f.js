"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[6020],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=p(n),d=a,g=s["".concat(c,".").concat(d)]||s[d]||m[d]||l;return n?r.createElement(g,o(o({ref:t},u),{},{components:n})):r.createElement(g,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=s;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},22425:function(e,t,n){var r=n(67294);class a extends r.Component{render(){return r.createElement("div",{className:"code-header"},r.createElement("div",null,r.createElement("h5",null,this.props.children)))}}t.Z=a},44035:function(e,t,n){var r=n(67294),a=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,l=e.height,o=(0,a.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:o,target:"_blank"},r.createElement("img",{width:n,height:l,src:o})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:o,target:"_blank"},r.createElement("img",{width:n,height:l,src:o})),r.createElement("p",null,e.children))}},29415:function(e,t,n){var r=n(67294),a=n(88678);const l=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class o extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:l},this.props.children)}}t.Z=o},88678:function(e,t,n){var r=n(67294);class a extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{className:e},r.createElement("div",{className:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{className:"highlight-content"},this.props.children))}}t.Z=a},47581:function(e,t,n){n.r(t),n.d(t,{assets:function(){return y},contentTitle:function(){return k},default:function(){return G},frontMatter:function(){return f},metadata:function(){return v},toc:function(){return b}});var r=n(3905),a=n(44035),l=n(22425),o=n(29415),i=n(39130),c=Object.defineProperty,p=Object.defineProperties,u=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,g=(e,t,n)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,h=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&g(e,n,t[n]);if(m)for(var n of m(t))d.call(t,n)&&g(e,n,t[n]);return e};const f={id:"scenarios-change-pixelformat-bpp",title:"\u66f4\u6539\u5e94\u7528\u7684\u50cf\u7d20\u683c\u5f0f"},k=void 0,v={unversionedId:"development/scenarios/scenarios-change-pixelformat-bpp",id:"development/scenarios/scenarios-change-pixelformat-bpp",title:"\u66f4\u6539\u5e94\u7528\u7684\u50cf\u7d20\u683c\u5f0f",description:"",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/scenarios/scenarios-change-pixelformat-bpp.mdx",sourceDirName:"development/scenarios",slug:"/development/scenarios/scenarios-change-pixelformat-bpp",permalink:"/4.20/zh-CN/docs/development/scenarios/scenarios-change-pixelformat-bpp",draft:!1,tags:[],version:"current",frontMatter:{id:"scenarios-change-pixelformat-bpp",title:"\u66f4\u6539\u5e94\u7528\u7684\u50cf\u7d20\u683c\u5f0f"},sidebar:"docs",previous:{title:"\u4f7f\u7528\u975e\u5185\u5b58\u6620\u5c04\u95ea\u5b58\u5b58\u50a8\u5b57\u4f53\u6570\u636e",permalink:"/4.20/zh-CN/docs/development/scenarios/fonts-in-unmapped-flash"},next:{title:"\u521b\u5efaTouchGFX\u5e94\u7528\u6a21\u677f",permalink:"/4.20/zh-CN/docs/development/scenarios/scenarios-create-at"}},y={},b=[{value:"\u677f\u5361\u8c03\u8bd5\u4e0e\u542f\u52a8",id:"board-bring-up",level:2},{value:"HAL\u5f00\u53d1",id:"hal-development",level:2},{value:"TouchGFX Designer",id:"touchgfx-designer",level:2},{value:"\u7ed3\u8bba",id:"conclusion",level:2}],N={toc:b};function G(e){var t,n=e,{components:c}=n,g=((e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&m)for(var r of m(e))t.indexOf(r)<0&&d.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=h(h({},N),g),p(t,u({components:c,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"\u672c\u6587\u5c06\u4ecb\u7ecd\u5728\u521b\u5efa\u9879\u76ee\u540e\uff0c\u5982\u4f55\u66f4\u6539\u5e94\u7528\u7684\u50cf\u7d20\u683c\u5f0f\u3002 \u5177\u4f53\u5730\u8bf4\uff0c\u672c\u6587\u5c06\u4e3e\u4f8b\u8bf4\u660e\u5982\u4f55\u901a\u8fc7TouchGFX Generator\u5c0624\u4f4dRGB888\u5e94\u7528\u4fee\u6539\u4e3a16\u4f4dRGB565\uff0c\u8fd8\u5c06\u4ecb\u7ecd\u5bf9TouchGFX\u9879\u76ee\u914d\u7f6e\u7684\u5f71\u54cd\u3002 \u66f4\u6539\u50cf\u7d20\u683c\u5f0f\u7684\u539f\u56e0\u53ef\u80fd\u662f\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u4fee\u6539\u4e86\u663e\u793a\u5c4f\u8981\u6c42"),(0,r.kt)("li",{parentName:"ol"},"\u4fee\u6539\u4e86\u5e94\u7528\u8981\u6c42"),(0,r.kt)("li",{parentName:"ol"},"\u9879\u76ee\u6700\u521d\u521b\u5efa\u671f\u95f4\u7684\u9519\u8bef")),(0,r.kt)(o.Z,{mdxType:"FurtherReading"},"\u8bf7\u9605\u8bfb\u5173\u4e8e",(0,r.kt)(i.Z,{to:"../../basic-concepts/color-formats",mdxType:"Link"},"\u989c\u8272\u6a21\u5f0f"),"\u7684\u6587\u7ae0\u3002"),(0,r.kt)("p",null,"\u4e00\u822c\u800c\u8a00\uff0c\u66f4\u6539\u4e86\u5e94\u7528\u7684\u50cf\u7d20\u683c\u5f0f\uff0c\u8fd8\u9700\u8981\u8fdb\u884c\u4e0b\u5217\u66f4\u6539\u3002"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"\u677f\u542f\u52a8\u642d\u5efa\uff1a"),"\u66f4\u6539LTDC\u7684\u50cf\u7d20\u683c\u5f0f\u3002"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"HAL\u5f00\u53d1\uff1a"),"\u4fee\u6539TouchGFX Generator\u8bbe\u7f6e\uff0c\u4ee5\u53cd\u6620LTDC\u8bbe\u7f6e\u6216\u5e27\u7f13\u51b2\u5728\u5b58\u50a8\u5668\u4e2d\u7684\u4f4d\u7f6e\u3002"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"TouchGFX Designer"),": \u786e\u4fdd\u6240\u6709\u56fe\u50cf\u90fd\u4f7f\u7528\u65b0\u8f6c\u6362\u7684\u4f4d\u6df1\uff0c\u4ee5\u53ca\u4f7f\u7528\u6b63\u786e\u683c\u5f0f\u3002")),(0,r.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u4ecedesigner\u8f6f\u4ef6\u5f00\u59cb\uff0c\u68c0\u67e5",(0,r.kt)("em",{parentName:"p"},"\u663e\u793a\u5c4f"),"\u548c",(0,r.kt)("em",{parentName:"p"},"\u56fe\u50cf"),"\u7684\u5f53\u524d\u914d\u7f6e\uff0c\u7a0d\u540e\u518d\u8fd4\u56de\u8fd9\u4e9b\u5c4f\u5e55\u8fdb\u884c\u786e\u8ba4\u3002"),(0,r.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/designer-config-image-4-17.webp",width:"600",mdxType:"Figure"},"\u56fe\u50cf\u914d\u7f6eRGB888"),(0,r.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/designer-config-display-4-17.webp",width:"600",mdxType:"Figure"},"\u663e\u793a\u5c4f\u914d\u7f6e24\u4f4d"),(0,r.kt)("h2",h({},{id:"board-bring-up"}),"\u677f\u5361\u8c03\u8bd5\u4e0e\u542f\u52a8"),(0,r.kt)("p",null,"\u5982\u679cSTM32CubeMX\u9879\u76ee\u4e2d\u7684\u7279\u5b9a\u8bbe\u7f6e\u53ef\u80fd\u5f71\u54cd\u5e94\u7528\u9700\u8981\u7684\u50cf\u7d20\u683c\u5f0f\uff0c\u5c31\u50cfLTDC\u4e00\u6837\uff0c\u5219\u5f00\u53d1\u8005\u9700\u8981\u5728\u6b64\u8fdb\u884c\u9002\u5f53\u66f4\u6539\uff0c\u4ee5\u4f7fTouchGFX\u4ee5LTDC\u671f\u671b\u7684\u683c\u5f0f\u8fdb\u884c\u6e32\u67d3\u3002"),(0,r.kt)(o.Z,{mdxType:"FurtherReading"},"\u8bf7\u9605\u8bfb\u5173\u4e8e",(0,r.kt)(i.Z,{to:"../touchgfx-hal-development/scenarios/scenarios-ltdc-parallel-rgb",mdxType:"Link"},"LTDC"),"\u7684\u6587\u7ae0\u4e86\u89e3TouchGFX\u5e94\u7528\u6709\u6548\u50cf\u7d20\u683c\u5f0f\u8bbe\u7f6e\u7684\u8be6\u7ec6\u4fe1\u606f\u3002"),(0,r.kt)("h2",h({},{id:"hal-development"}),"HAL\u5f00\u53d1"),(0,r.kt)("p",null,"\u5982\u679c\u5e94\u7528\u7684\u4f4d\u6df1\u968f\u5e27\u7f13\u51b2\u7684\u50cf\u7d20\u683c\u5f0f\u800c\u53d8\u5316\uff08\u4f8b\u5982\uff0c\u5c06ARGB2222\u66f4\u6539\u4e3aBRGA2222\u540e\u4ecd\u5c06\u5f97\u52308\u4f4d\u5e94\u7528\uff09\uff0c\u5219\u5f00\u53d1\u8005",(0,r.kt)("em",{parentName:"p"},"\u53ef\u80fd"),"\u9700\u8981\u4fee\u6539\u5e27\u7f13\u51b2\u7684\u5b58\u50a8\u4f4d\u7f6e\u3002 \u5728\u4ee5\u4e0b\u60c5\u51b5\u4e0b\uff1a"),(0,r.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/framebuffer-chage-px-fmt.webp",width:"400",mdxType:"Figure"},"\u4fee\u6539\u50cf\u7d20\u683c\u5f0f"),(0,r.kt)("p",null,"\u4f7f\u7528\u6b64\u914d\u7f6e\u751f\u6210\u4ee3\u7801\u5c06\u751f\u6210\u4f7f\u752816\u4f4dTouchGFX ",(0,r.kt)("inlineCode",{parentName:"p"},"LCD"),"\u7c7b\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"TouchGFXConfiguration"),"\u3002"),(0,r.kt)(l.Z,{mdxType:"CodeHeader"},"TouchGFXConfiguration.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",h({parentName:"pre"},{className:"language-cpp"}),' static LCD16bpp display;```\n\n\u5982\u679c\u9879\u76ee\u5df2\u5728TouchGFX Designer\u4e2d\u6253\u5f00\uff0c\u5c06\u63d0\u793a\u5f00\u53d1\u8005\u66f4\u65b0\uff0c\u4ee5\u53cd\u6620\u65b0\u751f\u6210\u7684\u914d\u7f6e\u66f4\u6539\u3002\n\n```json {7-8}\n{\n  "image_configuration": {\n    "images": {},\n    "dither_algorithm": "2",\n    "alpha_dither": "yes",\n    "layout_rotation": "0",\n    "opaque_image_format": "RGB565",\n    "nonopaque_image_format": "ARGB8888",\n    "section": "ExtFlashSection",\n    "extra_section": "ExtFlashSection"\n  },\n')),(0,r.kt)("p",null,"\u4e0b\u8868\u5217\u51fa\u4e86\u5728\u7ed9\u5b9a\u50cf\u7d20\u683c\u5f0f\u4e0b\u5bf9\u4e0d\u900f\u660e\u548c\u900f\u660e\u56fe\u50cf\u683c\u5f0f\u7684\u5f71\u54cd\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",h({parentName:"tr"},{align:null}),"\u5e27\u7f13\u51b2\u50cf\u7d20\u683c\u5f0f"),(0,r.kt)("th",h({parentName:"tr"},{align:null}),"\u4e0d\u900f\u660e\u683c\u5f0f"),(0,r.kt)("th",h({parentName:"tr"},{align:null}),"\u900f\u660e\u683c\u5f0f"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",h({parentName:"tr"},{align:null}),"Gray2"),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"Gray2"),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"Gray2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",h({parentName:"tr"},{align:null}),"Gray4"),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"Gray4"),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"Gray4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",h({parentName:"tr"},{align:null}),"ABGR2222"),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"ABGR2222"),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"ABGR2222")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",h({parentName:"tr"},{align:null}),"ARGB2222"),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"ARGB2222"),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"ARGB2222")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",h({parentName:"tr"},{align:null}),"BGRA2222"),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"BGRA2222"),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"BGRA2222")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",h({parentName:"tr"},{align:null}),"RGBA2222"),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"RGBA2222"),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"RGBA2222")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",h({parentName:"tr"},{align:null}),"RGB565"),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"RGB565"),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"ARGB8888")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",h({parentName:"tr"},{align:null}),"RGB888"),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"RGB888"),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"ARGB8888")))),(0,r.kt)("h2",h({},{id:"touchgfx-designer"}),"TouchGFX Designer"),(0,r.kt)("p",null,"\u5728\u57fa\u4e8e\u65b0\u7684TouchGFX Generator\u8bbe\u7f6e\uff08\u5728STM32CubeMX\u4e2d\u5b9a\u4e49\uff09\u66f4\u65b0\u4e86TouchGFX\u9879\u76ee\u540e\uff0c\u5f00\u53d1\u8005\u4f1a\u53d1\u73b0TouchGFX Designer\u7684\u914d\u7f6e\u5df2\u7ecf\u66f4\u6539\uff0c\u4ee5\u4fbf\u4e0e\u4e4b\u5339\u914d\u3002"),(0,r.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/designer-config-image-16bpp-4-17.webp",width:"600",mdxType:"Figure"},"\u56fe\u50cf\u914d\u7f6eRGB565"),(0,r.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/designer-config-display-16bpp-4-17.webp",width:"600",mdxType:"Figure"},"\u663e\u793a\u5c4f\u914d\u7f6e16\u4f4d"),(0,r.kt)("p",null,"\u5728\u4eceTouchGFX Designer\u5185\u90e8\u751f\u6210\u4ee3\u7801\u540e\uff0c\u56fe\u50cf\u8d44\u6e90\u7684\u4ee3\u7801\u73b0\u5df2\u53cd\u6620\u4e86\u66f4\u65b0\u540e\u7684\u50cf\u7d20\u683c\u5f0f\uff1a"),(0,r.kt)(l.Z,{mdxType:"CodeHeader"},"TouchGFX\\generated\\images\\src\\my_image.png"),(0,r.kt)("pre",null,(0,r.kt)("code",h({parentName:"pre"},{className:"language-cpp"}),'LOCATION_PRAGMA("ExtFlashSection")\nKEEP extern const unsigned char my_image[] LOCATION_ATTRIBUTE("ExtFlashSection") = // 320x240 RGB565 pixels.\n')),(0,r.kt)("h2",h({},{id:"conclusion"}),"\u7ed3\u8bba"),(0,r.kt)("p",null,"\u53ea\u9700\u4f7f\u7528TouchGFX Generator\u5373\u53ef\u4fee\u6539\u5e94\u7528\u7684\u5f53\u524d\u50cf\u7d20\u683c\u5f0f\u3002 \u5bf9\u4e8e\u5177\u6709LTDC\u7684MCU\uff0c\u8fd0\u884cTouchGFX\u7684\u5c42\u5fc5\u987b\u4e0e\u5728TouchGFX Generator\uff08\u5c31LTDC\u800c\u8a00\uff0c\u4ec5\u9650\u4e8eRGB565\u548cRGB888\uff09\u8bbe\u7f6e\u4e2d\u5b9a\u4e49\u7684\u5e27\u7f13\u51b2\u50cf\u7d20\u683c\u5f0f\u76f8\u5339\u914d\uff0c\u4ee5\u786e\u4fdd\u4e0eTouchGFX Core\u6e32\u67d3\u7684\u683c\u5f0f\u76f8\u4e00\u81f4\u3002"),(0,r.kt)("p",null,"\u5728\u4eceSTM32CubeMX\u751f\u6210\u4ee3\u7801\u540e\uff0c\u5c06\u66f4\u65b0TouchGFX\u9879\u76ee\uff0c\u540e\u7eed\u5728TouchGFX Designer\u4e2d\u751f\u6210\u4ee3\u7801\u540e\uff0c\u56fe\u50cf\u8d44\u6e90\u548c\u5e27\u7f13\u51b2\u9a71\u52a8\u7a0b\u5e8f\u90fd\u5c06\u5177\u6709\u6307\u5b9a\u7684\u683c\u5f0f\u3002"))}G.isMDXComponent=!0}}]);