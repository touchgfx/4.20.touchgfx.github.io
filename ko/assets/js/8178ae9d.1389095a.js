"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[5423],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var a=o.createContext({}),u=function(e){var t=o.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return o.createElement(a.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,f=d["".concat(a,".").concat(m)]||d[m]||s[m]||i;return n?o.createElement(f,c(c({ref:t},p),{},{components:n})):o.createElement(f,c({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=d;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var u=2;u<i;u++)c[u]=n[u];return o.createElement.apply(null,c)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},29415:function(e,t,n){var o=n(67294),r=n(88678);const i=o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},o.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class c extends o.Component{render(){return o.createElement(r.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:i},this.props.children)}}t.Z=c},88678:function(e,t,n){var o=n(67294);class r extends o.Component{render(){const e=`highlight highlight-${this.props.type}`;return o.createElement("div",{className:e},o.createElement("div",{className:"highlight-heading"},o.createElement("h5",null,o.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),o.createElement("div",{className:"highlight-content"},this.props.children))}}t.Z=r},31217:function(e,t,n){var o=n(67294);class r extends o.Component{render(){return o.createElement("code",null,this.props.children)}}t.Z=r},93054:function(e,t,n){var o=n(67294),r=n(88678);const i=o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},o.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));class c extends o.Component{render(){return o.createElement(r.Z,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:i},this.props.children)}}t.Z=c},37793:function(e,t,n){var o=n(67294),r=n(88678);const i=o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},o.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class c extends o.Component{render(){return o.createElement(r.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:i},this.props.children)}}t.Z=c},97531:function(e,t,n){n.r(t),n.d(t,{assets:function(){return b},contentTitle:function(){return v},default:function(){return y},frontMatter:function(){return k},metadata:function(){return x},toc:function(){return w}});var o=n(3905),r=n(29415),i=n(31217),c=n(37793),l=n(93054),a=n(39130),u=Object.defineProperty,p=Object.defineProperties,s=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,h=(e,t,n)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,g=(e,t)=>{for(var n in t||(t={}))m.call(t,n)&&h(e,n,t[n]);if(d)for(var n of d(t))f.call(t,n)&&h(e,n,t[n]);return e};const k={id:"using-ides-with-touchgfx",title:"TouchGFX\uc5d0\uc11c IDE \uc0ac\uc6a9\ud558\uae30"},v=void 0,x={unversionedId:"development/ui-development/working-with-touchgfx/using-ides-with-touchgfx",id:"development/ui-development/working-with-touchgfx/using-ides-with-touchgfx",title:"TouchGFX\uc5d0\uc11c IDE \uc0ac\uc6a9\ud558\uae30",description:"",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/development/ui-development/working-with-touchgfx/using-ides-with-touchgfx.mdx",sourceDirName:"development/ui-development/working-with-touchgfx",slug:"/development/ui-development/working-with-touchgfx/using-ides-with-touchgfx",permalink:"/4.20/ko/docs/development/ui-development/working-with-touchgfx/using-ides-with-touchgfx",tags:[],version:"current",frontMatter:{id:"using-ides-with-touchgfx",title:"TouchGFX\uc5d0\uc11c IDE \uc0ac\uc6a9\ud558\uae30"},sidebar:"docs",previous:{title:"Working with TouchGFX",permalink:"/4.20/ko/docs/category/working-with-touchgfx"},next:{title:"\uc704\uc82f \ubc0f \ucee8\ud14c\uc774\ub108",permalink:"/4.20/ko/docs/development/ui-development/working-with-touchgfx/widgets-and-containers"}},b={},w=[{value:"\uc804\uc81c \uc870\uac74: GCC \ubc84\uc804",id:"prerequisite-gcc-version",level:2},{value:"IDE\uc5d0\uc11c TouchGFX Makefile \ud638\ucd9c\ud558\uae30",id:"invoke-touchgfx-makefile-from-ide",level:2},{value:"TouchGFX \ucf54\ub4dc \ud30c\uc77c\uc744 \uc790\uccb4 \ud504\ub85c\uc81d\ud2b8\uc5d0 \ucd94\uac00\ud558\uae30",id:"add-touchgfx-code-files-to-your-own-project",level:2},{value:"\ud544\uc694\ud55c \ud30c\uc77c",id:"required-files",level:3},{value:"Include \uacbd\ub85c",id:"include-paths",level:3},{value:"\ucef4\ud30c\uc77c\ub7ec \uc2a4\uc704\uce58",id:"compiler-switches",level:3},{value:"Cortex-M0 cores",id:"cortex-m0-cores",level:4},{value:"Cortex-M4f cores",id:"cortex-m4f-cores",level:4},{value:"Cortex-M7 cores",id:"cortex-m7-cores",level:4},{value:"Cortex-M33 cores",id:"cortex-m33-cores",level:4},{value:"\ub9c1\ucee4",id:"linker",level:3},{value:"\ucf54\uc5b4 \ub77c\uc774\ube0c\ub7ec\ub9ac",id:"core-library",level:4},{value:"\ub9c1\ucee4 \uc635\uc158",id:"linker-options",level:4},{value:"\uc560\uc14b \uc0dd\uc131",id:"asset-generation",level:2},{value:"\ud50c\ub798\uc2f1 \ubc0f \ub514\ubc84\uae45",id:"flashing-and-debugging",level:2}],T={toc:w};function y(e){var t,n=e,{components:u}=n,h=((e,t)=>{var n={};for(var o in e)m.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&d)for(var o of d(e))t.indexOf(o)<0&&f.call(e,o)&&(n[o]=e[o]);return n})(n,["components"]);return(0,o.kt)("wrapper",(t=g(g({},T),h),p(t,s({components:u,mdxType:"MDXLayout"}))),(0,o.kt)("p",null,"TouchGFX Designer \ub610\ub294 STM32CubeMX\ub97c \ud1b5\ud574 TouchGFX \ud504\ub85c\uc81d\ud2b8\ub97c \uc0c8\ub85c \uc0dd\uc131\ud560 \ub54c\ub294 \ub2e4\uc74c\uacfc \uac19\uc774 \uc804\uc6a9 IDE\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 \ud504\ub85c\uc81d\ud2b8 \ud30c\uc77c\uacfc \ub77c\uc774\ube0c\ub7ec\ub9ac\uac00 \uc81c\uacf5\ub429\ub2c8\ub2e4."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Keil uVision ",(0,o.kt)("em",{parentName:"li"},"(\ud0c0\uac9f \uc804\uc6a9)")),(0,o.kt)("li",{parentName:"ul"},"IAR Embedded Workbench ",(0,o.kt)("em",{parentName:"li"},"(\ud0c0\uac9f \uc804\uc6a9)")),(0,o.kt)("li",{parentName:"ul"},"STM32CubeIDE ",(0,o.kt)("em",{parentName:"li"},"(\ud0c0\uac9f \uc804\uc6a9)")),(0,o.kt)("li",{parentName:"ul"},"Microsoft Visual Studio ",(0,o.kt)("em",{parentName:"li"},"(\uc2dc\ubbac\ub808\uc774\ud130 \uc804\uc6a9)"))),(0,o.kt)("p",null,"\ub2e8, \uc77c\ubd80 \ud504\ub85c\uc81d\ud2b8 \ud30c\uc77c\uc740 \ud504\ub85c\uc81d\ud2b8\uc5d0 \ud55c \ubc88\uc5d0 \ud45c\uc2dc\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. STM32CubeMX\uc5d0\uc11c \uc120\ud0dd\ub41c \ub3c4\uad6c \uccb4\uc778\uc774 \uc0dd\uc131\ub418\uba70, \uae30\ubcf8\uc801\uc73c\ub85c STM32CubeIDE\uac00 \uc120\ud0dd\ub429\ub2c8\ub2e4."),(0,o.kt)(r.Z,{mdxType:"FurtherReading"},"\ub3c4\uad6c \uccb4\uc778 \ubcc0\uacbd \ubc29\ubc95\uc740 ",(0,o.kt)(a.Z,{to:"../../board-bring-up/how-to/01-create-project",mdxType:"Link"},"\uc5ec\uae30"),"\uc5d0\uc11c \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("p",null,"\ub610\ud55c ARM \ud0c0\uac9f\uc6a9 GCC \ud06c\ub85c\uc2a4 \ucef4\ud30c\uc77c\ub7ec\ub97c \ud1b5\ud55c \uc258 \uae30\ubc18 \ucef4\ud30c\uc77c\uc5d0 \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 makefile\uacfc \ub77c\uc774\ube0c\ub7ec\ub9ac\ub3c4 \uc81c\uacf5\ub429\ub2c8\ub2e4. \uc774 \uc139\uc158\uc740 TouchGFX \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uac1c\ubc1c\uc5d0 \uc788\uc5b4 \ud0c0\uc0ac GCC \uae30\ubc18 IDE\ub97c \uad6c\uc131\ud558\ub294 \ub370 \ub3c4\uc6c0\uc774 \ub420 \uac83\uc785\ub2c8\ub2e4. \uae30\ubcf8\uc801\uc73c\ub85c GCC \ud06c\ub85c\uc2a4 \ucef4\ud30c\uc77c\ub7ec\ub97c \ud638\ucd9c\ud560 \uc218 \uc788\ub294 IDE\ub77c\uba74 \ubb34\uc5c7\uc774\ub4e0 \uc0ac\uc6a9 \uac00\ub2a5\ud569\ub2c8\ub2e4."),(0,o.kt)(l.Z,{mdxType:"Note"},"\uc774 \uc139\uc158\uc5d0\uc11c\ub294 \uc77c\ubc18 \uc6a9\uc5b4\ub97c \uc0ac\uc6a9\ud574 \uc124\uc815 \uc808\ucc28\ub97c \uc124\uba85\ud569\ub2c8\ub2e4. \ubaa8\ub4e0 IDE\ub97c \uc9c0\uc6d0\ud558\uc9c0\ub294 \uc54a\uc9c0\ub9cc \uc5ec\uae30\uc11c \uc81c\uacf5\ud558\ub294 \uc815\ubcf4\uac00 \uc990\uaca8 \uc0ac\uc6a9\ud558\ub294 IDE\uc640 \ud568\uaed8 TouchGFX\ub97c \uc0ac\uc6a9\ud558\ub294 \ub370 \ub3c4\uc6c0\uc774 \ub420 \uc218 \uc788\uae30\ub97c \ubc14\ub78d\ub2c8\ub2e4."),(0,o.kt)("p",null,"\uc774 \uc139\uc158\uc5d0\uc11c\ub294 TouchGFX\uc5d0\uc11c \ub2e4\ub978 IDE\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 \ub450 \uac00\uc9c0 \uc811\uadfc \ubc29\uc2dd\uc744 \uc124\uba85\ud569\ub2c8\ub2e4. \ud55c \uac00\uc9c0\ub294 IDE\uc5d0\uc11c TouchGFX Makefile\uc744 \ud638\ucd9c\ud558\ub294 \ubc29\uc2dd\uc785\ub2c8\ub2e4. \uc5b4\uca4c\uba74 \uac00\uc7a5 \uc26c\uc6b4 \ubc29\uc2dd\uc77c \uc218 \uc788\uc9c0\ub9cc, \ucef4\ud30c\uc77c \ud504\ub85c\uc138\uc2a4\uc640 \ud30c\uc77c \uc704\uce58\ub97c \uc880 \ub354 \ud655\uc2e4\ud558\uac8c \uc81c\uc5b4\ud558\uace0\uc790 \ud560 \uacbd\uc6b0\uc5d0\ub294 \ubc14\ub78c\uc9c1\ud55c \ubc29\ubc95\uc774 \uc544\ub2d9\ub2c8\ub2e4. \uc544\ub2c8\uba74 \ud544\uc694\ud55c TouchGFX \ud30c\uc77c\uacfc \uad6c\uc131 \uc635\uc158\uc744 \uae30\uc874 \ud504\ub85c\uc81d\ud2b8\uc5d0 \uc9c1\uc811 \ucd94\uac00\ud558\ub294 \ubc29\ubc95\ub3c4 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("h2",g({},{id:"prerequisite-gcc-version"}),"\uc804\uc81c \uc870\uac74: GCC \ubc84\uc804"),(0,o.kt)("p",null,"\uc774 \uc139\uc158\uc740 TouchGFX \ud658\uacbd \uc258\uc5d0\uc11c \ubc30\ud3ec\ub418\ub294 GCC \ud06c\ub85c\uc2a4 \ucef4\ud30c\uc77c\ub7ec \ub3c4\uad6c \uccb4\uc778\uc744 \uc0ac\uc6a9\ud558\uac70\ub098, \ud639\uc740 \ud658\uacbd \uc258 \ub3c4\uad6c \uccb4\uc778\uc744 \uc0ac\uc6a9\ud574 \ucef4\ud30c\uc77c\ub41c TouchGFX \ucf54\uc5b4 \ub77c\uc774\ube0c\ub7ec\ub9ac\uc640 \uc5f0\uacb0\ub418\ub294 GCC \ub3c4\uad6c \uccb4\uc778\uc744 \uc120\ud0dd\ud558\uc5ec \uc0ac\uc6a9\ud558\ub294 \uac83\uc73c\ub85c \uac00\uc815\ud569\ub2c8\ub2e4."),(0,o.kt)("p",null,"\uc0ac\uc6a9\ub418\ub294 GCC \ucef4\ud30c\uc77c\ub7ec:"),(0,o.kt)("pre",null,(0,o.kt)("code",g({parentName:"pre"},{}),"$ arm-none-eabi-gcc.exe -v\nTarget: arm-none-eabi\nThread model: single\ngcc version 7.3.1 20180622 (release) [ARM/embedded-7-branch revision 261907] (GNU Tools for Arm Embedded Processors 7-2018-q2-update)\n")),(0,o.kt)("p",null,"\uc704\uc758 \ucef4\ud30c\uc77c\ub7ec\ub294 ",(0,o.kt)("a",g({parentName:"p"},{href:"https://launchpad.net/gcc-arm-embedded"}),"https://launchpad.net/gcc-arm-embedded"),"\uc5d0\uc11c \ub2e4\uc6b4\ub85c\ub4dc\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("h2",g({},{id:"invoke-touchgfx-makefile-from-ide"}),"IDE\uc5d0\uc11c TouchGFX Makefile \ud638\ucd9c\ud558\uae30"),(0,o.kt)("p",null,"TouchGFX Designer\uc5d0\uc11c \uc0dd\uc131\ud55c \ud504\ub85c\uc81d\ud2b8\uc5d0 \ud3ec\ud568\ub41c Makefile\uc744 \ud638\ucd9c\ud558\uae30\ub9cc \ud558\uba74 IDE\uc5d0\uc11c TouchGFX \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \ube60\ub974\uace0 \uac04\ud3b8\ud558\uac8c \ucef4\ud30c\uc77c\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. To use the TouchGFX environment shell to compile an application for target, you must navigate to the TouchGFX application root directory and execute the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",g({parentName:"pre"},{}),"$ make -f gcc/Makefile\n")),(0,o.kt)("p",null,"\ub610\ud55c \uc774\uc81c\ub294 TouchGFX \ud658\uacbd \uc258\uc5d0\uc11c make \uba85\ub839\uc744 \ud638\ucd9c\ud558\uc9c0 \uc54a\uace0 IDE\uc5d0\uc11c \ud638\ucd9c\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc258(make, arm-none-eabi-gcc, ..)\uc5d0\uc11c \uc0ac\uc6a9\ud558\ub294 \uc2e4\ud589 \ud30c\uc77c\uc740 \uc77c\ubc18\uc801\uc778 Windows x86 \uc2e4\ud589 \ud30c\uc77c\uc785\ub2c8\ub2e4. \ub530\ub77c\uc11c \uc77c\ubc18\uc801\uc778 \uba85\ub839 \ud504\ub86c\ud504\ud2b8\ub85c\ub3c4 make \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uc2e4\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub2e8, \uc544\ub798\uc640 \uac19\uc774 \ud658\uacbd \ubcc0\uc218\uac00 \uad6c\uc131\ub418\uc5b4 \uc788\uc5b4\uc57c \ud569\ub2c8\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",g({parentName:"pre"},{}),"C:\\TouchGFX\\4.18.0\\env\\MinGW\\bin\nC:\\TouchGFX\\4.18.0\\env\\MinGW\\msys\\1.0\\Ruby30-x64\\bin\nC:\\TouchGFX\\4.18.0\\env\\MinGW\\msys\\1.0\\bin\nC:\\TouchGFX\\4.18.0\\env\\MinGW\\msys\\1.0\\gnu-arm-gcc\\bin\n")),(0,o.kt)("p",null,"\ud544\uc694\ud55c Windows \ud658\uacbd \ubcc0\uc218\ub97c \uc124\uc815\ud588\ub2e4\uba74 \uc774\uc81c IDE\uc5d0\uc11c \ud574\ub2f9\ud558\ub294 TouchGFX Makefile\uc758 ",(0,o.kt)("inlineCode",{parentName:"p"},"make")," \uba85\ub839\uc744 \ubc14\ub85c \ud638\ucd9c\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc2e4\ud589\ud574\uc57c \ud560 \uc815\ud655\ud55c \uba85\ub839\uc740 \uc258\uc5d0\uc11c \ucef4\ud30c\uc77c\ud560 \ub54c\uc640 \ub3d9\uc77c\ud558\uba70, \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",g({parentName:"pre"},{}),"$ make -f gcc/Makefile\n")),(0,o.kt)(l.Z,{mdxType:"Note"},"\uc774\ub54c \ud604\uc7ac \ub514\ub809\ud130\ub9ac\uac00 \ucef4\ud30c\uc77c\ud560 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc758 \ub8e8\ud2b8 \ub514\ub809\ud130\ub9ac\uc774\uc5b4\uc57c \ud569\ub2c8\ub2e4."),(0,o.kt)("h2",g({},{id:"add-touchgfx-code-files-to-your-own-project"}),"TouchGFX \ucf54\ub4dc \ud30c\uc77c\uc744 \uc790\uccb4 \ud504\ub85c\uc81d\ud2b8\uc5d0 \ucd94\uac00\ud558\uae30"),(0,o.kt)("p",null,"\uadf8\ub807\uc9c0 \uc54a\uace0 \ube4c\ub4dc \ud504\ub85c\uc138\uc2a4\uc640 \ud30c\uc77c \uc704\uce58\uc5d0 \ub300\ud55c \uc81c\uc5b4\ub97c \uac15\ud654\ud558\uace0 \uc2f6\ub2e4\uba74 \uad00\ub828 TouchGFX \ucf54\ub4dc \ud30c\uc77c\uc744 \uae30\uc874 \ud504\ub85c\uc81d\ud2b8\uc5d0 \ud1b5\ud569\ud55c \ud6c4 \ucef4\ud30c\uc77c\uc5d0 \ud544\uc694\ud55c include \uacbd\ub85c\uc640 \ucef4\ud30c\uc77c\ub7ec \uc2a4\uc704\uce58\ub97c \ucd94\uac00\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("h3",g({},{id:"required-files"}),"\ud544\uc694\ud55c \ud30c\uc77c"),(0,o.kt)("p",null,"\uae30\ubcf8\uc801\uc73c\ub85c IDE \ud504\ub85c\uc81d\ud2b8\uc5d0 \ucd94\uac00\ud558\ub294 TouchGFX \ud30c\uc77c\uc740 TouchGFX \ud658\uacbd \uc258\uc5d0\uc11c make\ub97c \uc0ac\uc6a9\ud574 \ube4c\ub4dc\ud560 \ub54c \ucef4\ud30c\uc77c\ud558\ub294 \ud30c\uc77c\uacfc \ub3d9\uc77c\ud574\uc57c \ud569\ub2c8\ub2e4. \ucd94\uac00\ub418\ub294 \ud30c\uc77c\uc740 \ub300\uc0c1 \ubcf4\ub4dc\uc5d0 \ub530\ub77c \ub2e4\ub978\ub370, \uc774\ub294 \uac01 \ubcf4\ub4dc\ub9c8\ub2e4 \ud558\uc704 \ub808\ubca8(low-level) \ub4dc\ub77c\uc774\ubc84\uac00 \ub2e4\ub974\uae30 \ub54c\ubb38\uc785\ub2c8\ub2e4. \ud544\uc694\ud55c \ud30c\uc77c\uc744 \uc54c\uace0 \uc2f6\ub2e4\uba74 \ud574\ub2f9\ud558\ub294 \ubcf4\ub4dc\uc5d0 TouchGFX \ud658\uacbd \uc258\uc744 \uc0ac\uc6a9\ud574 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \ucef4\ud30c\uc77c\ud574\ubcf4\ub294 \uac83\uc774 \uc88b\uc2b5\ub2c8\ub2e4. \ucef4\ud30c\uc77c \ud504\ub85c\uc138\uc2a4\uc5d0\uc11c \ucef4\ud30c\uc77c\ub418\ub294 \ud30c\uc77c\uc744 \ubaa8\ub450 \uc54c\ub824\uc8fc\uae30 \ub54c\ubb38\uc5d0 \ucd94\uac00\ud574\uc57c \ud560 \ud30c\uc77c \ubaa9\ub85d\uc744 \uc815\ud655\ud788 \uc54c \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("h3",g({},{id:"include-paths"}),"Include \uacbd\ub85c"),(0,o.kt)("p",null,"You will need to add the following include paths to your compilation:"),(0,o.kt)("pre",null,(0,o.kt)("code",g({parentName:"pre"},{}),".../TouchGFX/gui/include\n.../TouchGFX/generated/gui_generated/include\n.../TouchGFX/platform/os\n.../TouchGFX/generated/fonts/include\n.../TouchGFX/generated/images/include\n.../TouchGFX/generated/texts/include\n.../TouchGFX/generated/videos/include\n.../Middlewares/ST/touchgfx/framework/include\n")),(0,o.kt)(c.Z,{mdxType:"Tip"},"\uc704\uc758 include \uacbd\ub85c \uc678\uc5d0 \ubcf4\ub4dc \uc804\uc6a9 \ucf54\ub4dc\uc5d0\ub3c4 include \uacbd\ub85c\ub97c \ucd94\uac00\ud574\uc57c \ud569\ub2c8\ub2e4. \uad00\ub828 \uc815\ubcf4\ub294 ",(0,o.kt)(i.Z,{mdxType:"InlineCode"},"gcc/Makefile")," \ud30c\uc77c\uc5d0\uc11c \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("h3",g({},{id:"compiler-switches"}),"\ucef4\ud30c\uc77c\ub7ec \uc2a4\uc704\uce58"),(0,o.kt)("p",null,"include \uacbd\ub85c\uc640 \ub9c8\ucc2c\uac00\uc9c0\ub85c \ud65c\uc131\ud654\ud574\uc57c \ud558\ub294 \uc77c\ubc18 \ucef4\ud30c\uc77c\ub7ec \uc2a4\uc704\uce58\uac00 \uc788\uc2b5\ub2c8\ub2e4. \ub610\ud55c \ud504\ub85c\uc138\uc11c \ucf54\uc5b4 \ubc0f \uc2e4\uc81c \ubcf4\ub4dc \uc804\uc6a9 \ucef4\ud30c\uc77c\ub7ec \uc2a4\uc704\uce58\ub3c4 \uc788\uc2b5\ub2c8\ub2e4. TouchGFX \ucf54\uc5b4 \ub77c\uc774\ube0c\ub7ec\ub9ac\ub97c \ucef4\ud30c\uc77c\ud558\ub294 \ub370 \uc0ac\uc6a9\ub418\ub294 \ucef4\ud30c\uc77c\ub7ec \uc2a4\uc704\uce58\ub294 \uac01 \ucf54\uc5b4\ubcc4\ub85c \uc544\ub798\uc640 \uac19\uc2b5\ub2c8\ub2e4. \uc774\ub4e4 \uc635\uc158 \uc911\uc5d0\ub294 \ucf54\ub4dc\ub97c \ucef4\ud30c\uc77c\ud560 \ub54c \ub9c1\ucee4\uac00 \uc815\uc0c1\uc801\uc73c\ub85c \uc2e4\ud589\ub418\uac8c \ud558\ub294 \ud544\uc218 \uc635\uc158\uacfc \uc120\ud0dd \uc0ac\ud56d\uc778 \uc635\uc158\uc774 \uc788\uc2b5\ub2c8\ub2e4. \ubc18\ub4dc\uc2dc \ud544\uc694\ud55c \uac83\uc73c\ub85c \uc54c\ub824\uc9c4 \uc635\uc158\uc740 \uad75\uac8c \ud45c\uc2dc\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("h4",g({},{id:"cortex-m0-cores"}),"Cortex-M0 cores"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},'-fno-rtti -fno-exceptions -mfpu=fpv4-sp-d16 -mfloat-abi=softfp -mcpu=cortex-m0plus -D__irq=""')," -mthumb -mno-thumb-interwork -std=c99 -Os -fno-strict-aliasing -fdata-sections -ffunction-sections -Wno-psabi -DCORE_M0PLUS"),(0,o.kt)("h4",g({},{id:"cortex-m4f-cores"}),"Cortex-M4f cores"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},'-fno-rtti -fno-exceptions -mfpu=fpv4-sp-d16 -mfloat-abi=softfp -mcpu=cortex-m4 -D__irq=""')," -mthumb -mno-thumb-interwork -std=c99 -Os -fno-strict-aliasing -fdata-sections -ffunction-sections -Wno-psabi -DCORE_M4 -march=armv7e-m"),(0,o.kt)("h4",g({},{id:"cortex-m7-cores"}),"Cortex-M7 cores"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},'-fno-rtti -fno-exceptions -mfpu=fpv5-sp-d16 -mfloat-abi=softfp -mcpu=cortex-m7 -D__irq=""')," -mthumb -mno-thumb-interwork -std=c99 -Os -fno-strict-aliasing -fdata-sections -ffunction-sections -Wno-psabi -DCORE_M7"),(0,o.kt)("h4",g({},{id:"cortex-m33-cores"}),"Cortex-M33 cores"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},'-fno-rtti -fno-exceptions -mfpu=fpv5-sp-d16 -mfloat-abi=softfp -mcpu=cortex-m33 -D__irq=""')," -mthumb -mno-thumb-interwork -std=c99 -Os -fno-strict-aliasing -fdata-sections -ffunction-sections -Wno-psabi -DCORE_M33"),(0,o.kt)("h3",g({},{id:"linker"}),"\ub9c1\ucee4"),(0,o.kt)("h4",g({},{id:"core-library"}),"\ucf54\uc5b4 \ub77c\uc774\ube0c\ub7ec\ub9ac"),(0,o.kt)("p",null,"TouchGFX \ucf54\uc5b4 \ub77c\uc774\ube0c\ub7ec\ub9ac\uc640 \uc5f0\uacb0\ud574\uc57c \ud569\ub2c8\ub2e4. MCU\uc5d0 \ub530\ub77c \ub2e4\ub974\uc9c0\ub9cc \ub2e4\uc74c \uc911 \ud558\ub098\ub97c \uc5f0\uacb0\ud569\ub2c8\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",g({parentName:"pre"},{}),".../Middlewares/ST/touchgfx/lib/core/cortex-m0/gcc/libtouchgfx.a\n.../Middlewares/ST/touchgfx/lib/core/cortex-m4f/gcc/libtouchgfx.a\n.../Middlewares/ST/touchgfx/lib/core/cortex-m7/gcc/libtouchgfx.a\n.../Middlewares/ST/touchgfx/lib/core/cortex-m33/gcc/libtouchgfx.a\n")),(0,o.kt)("h4",g({},{id:"linker-options"}),"\ub9c1\ucee4 \uc635\uc158"),(0,o.kt)("p",null,"\ub610\ud55c \uc77c\ubd80 \ub9c1\ucee4 \uc635\uc158\ub3c4 \ud544\uc694\ud569\ub2c8\ub2e4. TouchGFX\uc5d0\uc11c \uc0ac\uc6a9\ub418\ub294 \uc635\uc158\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",g({parentName:"pre"},{}),"Cortex-M0: -Wl,-static -nostartfiles -mthumb -mno-thumb-interwork -fno-exceptions -fno-rtti -Wl,--gc-sections -mcpu=cortex-m0plus -Wno-psabi -mfpu=fpv4-sp-d16 -mfloat-abi=softfp\nCortex-M4f: -Wl,-static -nostartfiles -mthumb -mno-thumb-interwork -fno-exceptions -fno-rtti -Wl,--gc-sections -mcpu=cortex-m4 -march=armv7e-m -Wno-psabi -mfpu=fpv4-sp-d16 -mfloat-abi=softfp\nCortex-M7: -Wl,-static -nostartfiles -mthumb -mno-thumb-interwork -fno-exceptions -fno-rtti -Wl,--gc-sections -mcpu=cortex-m7 -Wno-psabi -mfpu=fpv5-sp-d16 -mfloat-abi=softfp\nCortex-M33: -Wl,-static -nostartfiles -mthumb -mno-thumb-interwork -fno-exceptions -fno-rtti -Wl,--gc-sections -mcpu=cortex-m33 -Wno-psabi -mfpu=fpv5-sp-d16 -mfloat-abi=softfp\n")),(0,o.kt)("h2",g({},{id:"asset-generation"}),"\uc560\uc14b \uc0dd\uc131"),(0,o.kt)("p",null,"\ud504\ub85c\uc81d\ud2b8\ub97c \ucef4\ud30c\uc77c\ud558\ub824\uba74 \uc560\uc14b(asset)\ub3c4 \ubc18\ub4dc\uc2dc \uc0dd\uc131\ud574\uc57c \ud569\ub2c8\ub2e4. \ud55c \uac00\uc9c0 \ubc29\ubc95\uc740 \uc544\ub798\uc640 \uac19\uc774 'assets\u2019 \uc635\uc158\uc744 \uc0ac\uc6a9\ud574 \uc0dd\uc131\ub41c Makefile\uc744 \ud638\ucd9c\ud558\ub294 \uac83\uc785\ub2c8\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",g({parentName:"pre"},{}),"make -f TouchGFX/simulator/gcc/Makefile assets\n")),(0,o.kt)("p",null,"Another way to generate assets, is to use the image-, text/font- and video-converter directly."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Imageconverter")," The imageconverter can be found in your projects touchgfx folder ",(0,o.kt)("inlineCode",{parentName:"p"},"Middlewares/ST/touchgfx/framework/tools/imageconvert/build")," built for Linux and Windows."),(0,o.kt)("pre",null,(0,o.kt)("code",g({parentName:"pre"},{}),"usage: imageconvert [-c configfile] [-f inputfile -o outputfile | -r inputdir -w outputdir]\n")),(0,o.kt)("p",null,"Imageconvert.out \uc2e4\ud589 \ud30c\uc77c\uc744 \ud638\ucd9c\ud558\uba74 imageconverter\uac00 \ud638\ucd9c\ub41c \ud3f4\ub354\uc5d0\uc11c configfile(",(0,o.kt)("inlineCode",{parentName:"p"},"application.config"),") \ud30c\uc77c\uc744 \ucc3e\uc2b5\ub2c8\ub2e4."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Textconverter")," The textconverter can be found in your projects touchgfx folder ",(0,o.kt)("inlineCode",{parentName:"p"},"Middlewares/ST/touchgfx/framework/tools/textconvert")," as a ruby file: ",(0,o.kt)("inlineCode",{parentName:"p"},"main.rb"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",g({parentName:"pre"},{}),"usage: main.rb file.xml path/to/fontconvert.out path/to/fonts_output_dir path/to/localization_output_dir path/to/font/asset calling_path\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Videoconverter")," The videoconverter can be found in your projects touchgfx folder ",(0,o.kt)("inlineCode",{parentName:"p"},"Middlewares/ST/touchgfx/framework/tools/videoconvert")," as a ruby file: ",(0,o.kt)("inlineCode",{parentName:"p"},"videoconvert.rb"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",g({parentName:"pre"},{}),"usage: videoconvert.rb path/to/project_root_dir path/to/video_assets_dir path/to/generated_output_dir\n")),(0,o.kt)("h2",g({},{id:"flashing-and-debugging"}),"\ud50c\ub798\uc2f1 \ubc0f \ub514\ubc84\uae45"),(0,o.kt)("p",null,"\ub9c1\ucee4 \uc124\uc815\uc5d0 \ub530\ub77c \ub2e4\ub974\uc9c0\ub9cc ",(0,o.kt)("inlineCode",{parentName:"p"},".elf")," \ub610\ub294 ",(0,o.kt)("inlineCode",{parentName:"p"},".hex")," \ud30c\uc77c\uc774 \uc0dd\uc131\ub420 \uac00\ub2a5\uc131\uc774 \ub9e4\uc6b0 \ub192\uc2b5\ub2c8\ub2e4. TouchGFX \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc740 \ub300\ubd80\ubd84 IDE\uc5d0\uc11c \ubc30\ud3ec\ud558\uc5ec \ub514\ubc84\uae45\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub54c \uc77c\ubc18\uc801\uc73c\ub85c GDB \uc11c\ubc84\uac00 \ub514\ubc84\uae45\uc5d0 \uc0ac\uc6a9\ub418\uc9c0\ub9cc \uadf8 \ubc16\uc5d0 IDE\uc5d0\uc11c \uc81c\uacf5\ud558\ub294 \ubc29\uc2dd\uc774 \uc0ac\uc6a9\ub418\uae30\ub3c4 \ud569\ub2c8\ub2e4. \uc0ac\uc6a9\ub418\ub294 IDE\ub9c8\ub2e4 \uc77c\uc77c\uc774 \ud3ec\uc778\ud130\ub97c \uad6c\uccb4\uc801\uc73c\ub85c \uc5b8\uae09\ud560 \uc218\ub294 \uc5c6\uc9c0\ub9cc ",(0,o.kt)("a",g({parentName:"p"},{href:"compiling-and-flashing"}),"\ucef4\ud30c\uc77c \ubc0f \ud50c\ub798\uc2f1")," \uc139\uc158\uc5d0\uc11c \uc88b\uc740 \ubc29\ubc95\uc744 \ucc3e\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc5ec\uae30\uc5d0\ub294 GCC\uc5d0\uc11c \uc0dd\uc131\ub41c ELF/HEX \ud30c\uc77c\uc744 \uc0ac\uc6a9\ud574 \ubcf4\ub4dc\ub97c \ud50c\ub798\uc2f1\ud558\ub294 \ubc29\ubc95\uc774 \uc124\uba85\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4."))}y.isMDXComponent=!0}}]);