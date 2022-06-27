"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[9816],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return h}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),a=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=a(e.components);return r.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=a(t),h=o,f=d["".concat(u,".").concat(h)]||d[h]||p[h]||i;return t?r.createElement(f,l(l({ref:n},c),{},{components:t})):r.createElement(f,l({ref:n},c))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,l=new Array(i);l[0]=d;var s={};for(var u in n)hasOwnProperty.call(n,u)&&(s[u]=n[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,l[1]=s;for(var a=2;a<i;a++)l[a]=t[a];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},22425:function(e,n,t){var r=t(67294);class o extends r.Component{render(){return r.createElement("div",{className:"code-header"},r.createElement("div",null,r.createElement("h5",null,this.props.children)))}}n.Z=o},88678:function(e,n,t){var r=t(67294);class o extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{className:e},r.createElement("div",{className:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{className:"highlight-content"},this.props.children))}}n.Z=o},37793:function(e,n,t){var r=t(67294),o=t(88678);const i=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class l extends r.Component{render(){return r.createElement(o.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:i},this.props.children)}}n.Z=l},78266:function(e,n,t){t.r(n),t.d(n,{assets:function(){return v},contentTitle:function(){return g},default:function(){return y},frontMatter:function(){return f},metadata:function(){return m},toc:function(){return b}});var r=t(3905),o=t(37793),i=t(22425),l=Object.defineProperty,s=Object.defineProperties,u=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,d=(e,n,t)=>n in e?l(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,h=(e,n)=>{for(var t in n||(n={}))c.call(n,t)&&d(e,t,n[t]);if(a)for(var t of a(n))p.call(n,t)&&d(e,t,n[t]);return e};const f={id:"prerequisites",title:"Prerequisites"},g=void 0,m={unversionedId:"introduction/prerequisites",id:"introduction/prerequisites",title:"Prerequisites",description:"",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/introduction/prerequisites.mdx",sourceDirName:"introduction",slug:"/introduction/prerequisites",permalink:"/4.20/zh-CN/docs/introduction/prerequisites",tags:[],version:"current",frontMatter:{id:"prerequisites",title:"Prerequisites"},sidebar:"docs",previous:{title:"\u4ec0\u4e48\u662fTouchGFX\uff1f",permalink:"/4.20/zh-CN/docs/introduction/what-is-touchgfx"},next:{title:"\u5b89\u88c5",permalink:"/4.20/zh-CN/docs/introduction/installation"}},v={},b=[{value:"Using TouchGFX on Windows",id:"using-touchgfx-on-windows",level:2},{value:"Using TouchGFX on Linux",id:"using-touchgfx-on-linux",level:2},{value:"Using TouchGFX on Ubuntu 20.04",id:"using-touchgfx-on-ubuntu-2004",level:3}],w={toc:b};function y(e){var n,t=e,{components:l}=t,d=((e,n)=>{var t={};for(var r in e)c.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&a)for(var r of a(e))n.indexOf(r)<0&&p.call(e,r)&&(t[r]=e[r]);return t})(t,["components"]);return(0,r.kt)("wrapper",(n=h(h({},w),d),s(n,u({components:l,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"TouchGFX is primarily developed for use on Windows 10. The TouchGFX Designer is only running on Windows, but the underlying tools also runs on Linux."),(0,r.kt)("h2",h({},{id:"using-touchgfx-on-windows"}),"Using TouchGFX on Windows"),(0,r.kt)("p",null,"Starting from version 4.18 TouchGFX only runs on Windows 10."),(0,r.kt)("p",null,"TouchGFX comes with all the basic tools required for development. You don't need to install a C++ compiler, since TouchGFX is bundled with g++."),(0,r.kt)("p",null,"See the ",(0,r.kt)("a",h({parentName:"p"},{href:"installation"}),"Installation articles")," for instruction on installation of TouchGFX and extra tools for flashing code."),(0,r.kt)(o.Z,{mdxType:"Tip"},"Continue using version 4.16 if you are running Windows 7. Do not update to newer versions."),(0,r.kt)("h2",h({},{id:"using-touchgfx-on-linux"}),"Using TouchGFX on Linux"),(0,r.kt)("p",null,"TouchGFX can also be used on Linux, and even though the TouchGFX Designer cannot be run natively on Linux, the code generate by the TouchGFX Designer works on both Linux and Windows."),(0,r.kt)("p",null,"The sugested solution to this is to run the TouchGFX Designer in a virtual machine running Windows. This allows the developer to use the Designer when needed, and use the normal Linux environment anywhere else."),(0,r.kt)("p",null,"A few extra tools and libraries are required to use TouchGFX on Linux. The next section gives instructions for Ubuntu. The requirements will be similar for other Linux distributions."),(0,r.kt)("h3",h({},{id:"using-touchgfx-on-ubuntu-2004"}),"Using TouchGFX on Ubuntu 20.04"),(0,r.kt)("p",null,"Before you can use the TouchGFX tools in a fresh Ubuntu 20.04 LTS you need to install the following:"),(0,r.kt)("p",null,"First install ruby: the command is"),(0,r.kt)("pre",null,(0,r.kt)("code",h({parentName:"pre"},{}),"sudo apt install ruby\n")),(0,r.kt)("p",null,"This will give you a ruby version 2.7. TouchGFX for Windows includes version 3.0, but that version is currently not available in the Ubuntu repositories. Version 2.7 should work fine for normal use."),(0,r.kt)("p",null,'Next install the "roo" gem:'),(0,r.kt)("pre",null,(0,r.kt)("code",h({parentName:"pre"},{}),"sudo gem install roo\n")),(0,r.kt)("p",null,"Install make and g++ to allow compilation of C++ programs:"),(0,r.kt)("pre",null,(0,r.kt)("code",h({parentName:"pre"},{}),"sudo  apt install make g++\n")),(0,r.kt)("p",null,"The last part is SDL2 libraries and header files:"),(0,r.kt)("pre",null,(0,r.kt)("code",h({parentName:"pre"},{}),"sudo apt install libsdl2-dev libsdl2-image-dev\n")),(0,r.kt)("p",null,"The default g++ version is 9.3.0. This version uses a warning level different from the g++ for Windows included in TouchGFX. Two changes must be made to the g++ flags and linker flags for the simulator:"),(0,r.kt)(i.Z,{mdxType:"CodeHeader"},"config/gcc/app.mk"),(0,r.kt)("pre",null,(0,r.kt)("code",h({parentName:"pre"},{className:"language-cpp",metastring:"{15-16}","{15-16}":!0}),"# Copyright (c) 2018(-2021) STMicroelectronics.\n# All rights reserved.\n#\n# This file is part of the TouchGFX 4.18.1 distribution.\n#\n# This software is licensed under terms that can be found in the LICENSE file in\n# the root directory of this software component.\n# If no LICENSE file comes with this software, it is provided AS-IS.\n#\n###############################################################################/\n# Relative location of the TouchGFX framework from root of application\ntouchgfx_path := ../../../touchgfx\n\n# Optional additional compiler flags\nuser_cflags := -DUSE_BPP=16 -Wformat-truncation=0\nlinker_options := -no-pie\n")),(0,r.kt)("p",null,"Linux ruby will give you a warning because the TouchGFX files are using Windows line endings:"),(0,r.kt)("pre",null,(0,r.kt)("code",h({parentName:"pre"},{}),"ruby: warning: shebang line ending with \\r may cause problems\n")),(0,r.kt)("p",null,"This warning can be removed by changing two files to Unix line endings (or by removing the entire first line starting with ",(0,r.kt)("inlineCode",{parentName:"p"},"#!"),"):"),(0,r.kt)("pre",null,(0,r.kt)("code",h({parentName:"pre"},{}),"dos2unix touchgfx/framework/tools/textconvert/main.rb\ndos2unix touchgfx/framework/tools/videoconvert/videoconvert.rb\n")))}y.isMDXComponent=!0}}]);