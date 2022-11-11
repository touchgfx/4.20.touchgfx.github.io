"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[6205],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=i.createContext({}),s=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return i.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,g=d["".concat(c,".").concat(m)]||d[m]||p[m]||r;return n?i.createElement(g,l(l({ref:t},u),{},{components:n})):i.createElement(g,l({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var s=2;s<r;s++)l[s]=n[s];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},70814:function(e,t,n){var i=n(67294),o=n(88678);const r=i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},i.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}));class l extends i.Component{render(){return i.createElement(o.Z,{color:"var(--highlight-color-caution)",header:"Caution",type:"caution",icon:r},this.props.children)}}t.Z=l},44035:function(e,t,n){var i=n(67294),o=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,r=e.height,l=(0,o.Z)(e.imageSource);return t?i.createElement("div",{className:"figure noshadow"},i.createElement("a",{href:l,target:"_blank"},i.createElement("img",{width:n,height:r,src:l})),i.createElement("p",null,e.children)):i.createElement("div",{className:"figure"},i.createElement("a",{href:l,target:"_blank"},i.createElement("img",{width:n,height:r,src:l})),i.createElement("p",null,e.children))}},88678:function(e,t,n){var i=n(67294);class o extends i.Component{render(){const e=`highlight highlight-${this.props.type}`;return i.createElement("div",{className:e},i.createElement("div",{className:"highlight-heading"},i.createElement("h5",null,i.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),i.createElement("div",{className:"highlight-content"},this.props.children))}}t.Z=o},31217:function(e,t,n){var i=n(67294);class o extends i.Component{render(){return i.createElement("code",null,this.props.children)}}t.Z=o},82985:function(e,t,n){var i=n(67294);class o extends i.Component{render(){return i.createElement("code",{className:"shortcut"},this.props.children)}}t.Z=o},37793:function(e,t,n){var i=n(67294),o=n(88678);const r=i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},i.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class l extends i.Component{render(){return i.createElement(o.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:r},this.props.children)}}t.Z=l},1663:function(e,t,n){n.r(t),n.d(t,{assets:function(){return w},contentTitle:function(){return b},default:function(){return x},frontMatter:function(){return T},metadata:function(){return y},toc:function(){return v}});var i=n(3905),o=n(44035),r=n(82985),l=n(39130),a=n(37793),c=n(70814),s=n(31217),u=Object.defineProperty,p=Object.defineProperties,d=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,f=(e,t,n)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,k=(e,t)=>{for(var n in t||(t={}))g.call(t,n)&&f(e,n,t[n]);if(m)for(var n of m(t))h.call(t,n)&&f(e,n,t[n]);return e};const T={id:"installation",title:"Installation"},b=void 0,y={unversionedId:"introduction/installation",id:"introduction/installation",title:"Installation",description:"",source:"@site/docs/introduction/installation.mdx",sourceDirName:"introduction",slug:"/introduction/installation",permalink:"/touchgfx-test.github.io/docs/introduction/installation",draft:!1,tags:[],version:"current",frontMatter:{id:"installation",title:"Installation"},sidebar:"docs",previous:{title:"Prerequisites",permalink:"/touchgfx-test.github.io/docs/introduction/prerequisites"},next:{title:"Getting Started",permalink:"/touchgfx-test.github.io/docs/introduction/getting-started"}},w={},v=[{value:"Prototyping on STM32 Evaluation kits",id:"prototyping-on-stm32-evaluation-kits",level:2},{value:"Installing TouchGFX Designer",id:"installing-touchgfx-designer",level:3},{value:"Installing STM32CubeProgrammer",id:"installing-stm32cubeprogrammer",level:3},{value:"Installing STM32 ST-LINK Utility",id:"installing-stm32-st-link-utility",level:3},{value:"Custom Product Development",id:"custom-product-development",level:2},{value:"Installing TouchGFX Generator in STM32CubeMX",id:"installing-touchgfx-generator-in-stm32cubemx",level:3}],C={toc:v};function x(e){var t,n=e,{components:u}=n,f=((e,t)=>{var n={};for(var i in e)g.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&m)for(var i of m(e))t.indexOf(i)<0&&h.call(e,i)&&(n[i]=e[i]);return n})(n,["components"]);return(0,i.kt)("wrapper",(t=k(k({},C),f),p(t,d({components:u,mdxType:"MDXLayout"}))),(0,i.kt)("p",null,"TouchGFX is distributed as an X-CUBE-TOUCHGFX zip file which has the following components inside:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"TouchGFX Designer")," - Build a UI through a Windows-based GUI Builder"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"TouchGFX Generator")," - Create a custom TouchGFX HAL through STM32CubeMX"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"TouchGFX Engine")," - The TouchGFX C++ framework that drives the UI application")),(0,i.kt)("h2",k({},{id:"prototyping-on-stm32-evaluation-kits"}),"Prototyping on STM32 Evaluation kits"),(0,i.kt)("p",null,"If your intention is to simply try TouchGFX Designer and perhaps do some prototyping on STM32 Evaluation kits, refer to the section ",(0,i.kt)("a",k({parentName:"p"},{href:"#installing-touchgfx-designer"}),"Installing TouchGFX Designer"),".\xa0"),(0,i.kt)("h3",k({},{id:"installing-touchgfx-designer"}),"Installing TouchGFX Designer"),(0,i.kt)("p",null,"Download X-CUBE-TOUCHGFX from the ",(0,i.kt)("a",k({parentName:"p"},{href:"https://www.st.com/en/embedded-software/x-cube-touchgfx.html"}),"ST.com official website")," to anywhere on your hard drive and extract it."),(0,i.kt)(o.Z,{imageSource:"/img/introduction/installation/get-software.png",mdxType:"Figure"},"Downloading X-CUBE-TOUCHGFX from st.com"),(0,i.kt)("p",null,"Inside the extracted folder, you will find the TouchGFX .msi installer in the following path:"),(0,i.kt)("pre",null,(0,i.kt)("code",k({parentName:"pre"},{}),"Utilities\\PC_Software\\TouchGFXDesigner\n")),(0,i.kt)("p",null,"Double-clicking the .msi file will bring up the installer. Follow the instructions to complete the installation process."),(0,i.kt)(o.Z,{imageSource:"/img/introduction/installation/designer-installation.png",mdxType:"Figure"},"Installing TouchGFX Designer"),(0,i.kt)(a.Z,{mdxType:"Tip"},"You need the following tools to be able to flash your board directly from within TouchGFX Designer:",(0,i.kt)("ul",null,(0,i.kt)("li",null,(0,i.kt)(l.Z,{to:"https://www.st.com/en/development-tools/stm32cubeprog.html",target:"_blank",mdxType:"Link"},"STM32CubeProgrammer")),(0,i.kt)("li",null,(0,i.kt)(l.Z,{to:"https://www.st.com/en/development-tools/stsw-link004.html",target:"_blank",mdxType:"Link"},"STM32 ST-LINK Utility")))),(0,i.kt)("h3",k({},{id:"installing-stm32cubeprogrammer"}),"Installing STM32CubeProgrammer"),(0,i.kt)("p",null,"After downloading STM32CubeProgrammer from ",(0,i.kt)("a",k({parentName:"p"},{href:"https://www.st.com/en/development-tools/stm32cubeprog.html"}),"STM32CubeProgrammer download location"),", uncompress the downloaded ",(0,i.kt)("inlineCode",{parentName:"p"},".zip")," file and launch the ",(0,i.kt)("inlineCode",{parentName:"p"},".exe")," installer file. Then Follow the instructions to complete the installation process."),(0,i.kt)(o.Z,{imageSource:"/img/introduction/installation/cube-programmer-installer.png",mdxType:"Figure"},"Installing TouchGFX Designer"),(0,i.kt)(c.Z,{mdxType:"Caution"},"In order for the TouchGFX Designer and Makefiles to be able to use STM32CubeProgrammer for flashing target hardware it must be installed at the default install location: ",(0,i.kt)(s.Z,{mdxType:"InlineCode"},"C:\\Program Files\\STMicroelectronics\\STM32Cube\\STM32CubeProgrammer")),(0,i.kt)("h3",k({},{id:"installing-stm32-st-link-utility"}),"Installing STM32 ST-LINK Utility"),(0,i.kt)("p",null,"After downloading STM32 ST-LINK Utility from ",(0,i.kt)("a",k({parentName:"p"},{href:"https://www.st.com/en/development-tools/stsw-link004.html"}),"STM32 ST-LINK utility location"),", simply open the downloaded ",(0,i.kt)("inlineCode",{parentName:"p"},".exe")," file and follow the instructions to complete the installation process."),(0,i.kt)(o.Z,{imageSource:"/img/introduction/installation/st-link-utility-installer.png",mdxType:"Figure"},"Installing STM32 ST-LINK Utility"),(0,i.kt)(c.Z,{mdxType:"Caution"},"In order for the TouchGFX Designer and Makefiles to be able to use STM32 ST-LINK Utility for flashing target hardware it must be installed at the default install location: ",(0,i.kt)(s.Z,{mdxType:"InlineCode"},"C:\\Program Files (x86)\\STMicroelectronics\\STM32 ST-LINK Utility")),(0,i.kt)("h2",k({},{id:"custom-product-development"}),"Custom Product Development"),(0,i.kt)("p",null,"If your intention is to run TouchGFX applications on either ST display kits or your own custom STM32 based platform, refer to the section ",(0,i.kt)("a",k({parentName:"p"},{href:"#installing-touchgfx-generator-in-stm32cubemx"}),"Installing TouchGFX Generator in STM32CubeMX"),"."),(0,i.kt)("h3",k({},{id:"installing-touchgfx-generator-in-stm32cubemx"}),"Installing TouchGFX Generator in STM32CubeMX"),(0,i.kt)("p",null,"To install X-CUBE-TOUCHGFX through ",(0,i.kt)("a",k({parentName:"p"},{href:"https://www.st.com/en/development-tools/stm32cubemx.html"}),"STM32CubeMX"),', start by selecting "Manage Embedded Software Packages" under "Help" (or press ',(0,i.kt)(r.Z,{mdxType:"Shortcut"},"Alt + U"),")."),(0,i.kt)(o.Z,{imageSource:"/img/introduction/installation/manage-packages.png",mdxType:"Figure"},"Help -> Manage embedded software packages"),(0,i.kt)("p",null,'Click "Refresh" to get an updated list of available packages.'),(0,i.kt)(o.Z,{imageSource:"/img/introduction/installation/refresh.png",mdxType:"Figure"},"Refresh to update available packages"),(0,i.kt)("p",null,'Go to the "STMicroelectronics" tab. Scroll until you find "X-CUBE-TOUCHGFX" and expand the node. Check the checkbox for "TouchGFX Generator" and click "Install Now". This will download the package and bring up the license agreement.'),(0,i.kt)(o.Z,{imageSource:"/img/introduction/installation/install-now.png",mdxType:"Figure"},"Finding the TouchGFX Generator package"),(0,i.kt)("p",null,'Read and accept the license agreement and click "Finish" to install TouchGFX Generator inside STM32CubeMX.'),(0,i.kt)(o.Z,{imageSource:"/img/introduction/installation/license-agreement.png",mdxType:"Figure"},"Accepting the license agreement"),(0,i.kt)("p",null,"The X-CUBE-TOUCHGFX distribution is now unpacked to the following path:\xa0"),(0,i.kt)("pre",null,(0,i.kt)("code",k({parentName:"pre"},{}),"C:\\Users\\<user>\\STM32Cube\\Repository\\Packs\\STMicroelectronics\\X-CUBE-TOUCHGFX\\4.13.0\n")),(0,i.kt)(o.Z,{imageSource:"/img/introduction/installation/package-location.png",mdxType:"Figure"},"Location of the X-CUBE-TOUCHGFX package"))}x.isMDXComponent=!0}}]);