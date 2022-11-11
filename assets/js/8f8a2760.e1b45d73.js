"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[632],{3905:function(e,t,o){o.d(t,{Zo:function(){return u},kt:function(){return h}});var n=o(67294);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,i=function(e,t){if(null==e)return{};var o,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(i[o]=e[o]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var c=n.createContext({}),s=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(o),h=i,m=d["".concat(c,".").concat(h)]||d[h]||p[h]||r;return o?n.createElement(m,a(a({ref:t},u),{},{components:o})):n.createElement(m,a({ref:t},u))}));function h(e,t){var o=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=o.length,a=new Array(r);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var s=2;s<r;s++)a[s]=o[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},29415:function(e,t,o){var n=o(67294),i=o(88678);const r=n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},n.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class a extends n.Component{render(){return n.createElement(i.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:r},this.props.children)}}t.Z=a},88678:function(e,t,o){var n=o(67294);class i extends n.Component{render(){const e=`highlight highlight-${this.props.type}`;return n.createElement("div",{className:e},n.createElement("div",{className:"highlight-heading"},n.createElement("h5",null,n.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),n.createElement("div",{className:"highlight-content"},this.props.children))}}t.Z=i},31217:function(e,t,o){var n=o(67294);class i extends n.Component{render(){return n.createElement("code",null,this.props.children)}}t.Z=i},93054:function(e,t,o){var n=o(67294),i=o(88678);const r=n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},n.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));class a extends n.Component{render(){return n.createElement(i.Z,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:r},this.props.children)}}t.Z=a},37793:function(e,t,o){var n=o(67294),i=o(88678);const r=n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},n.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class a extends n.Component{render(){return n.createElement(i.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:r},this.props.children)}}t.Z=a},49201:function(e,t,o){o.r(t),o.d(t,{assets:function(){return w},contentTitle:function(){return b},default:function(){return T},frontMatter:function(){return v},metadata:function(){return k},toc:function(){return y}});var n=o(3905),i=o(29415),r=o(31217),a=o(37793),l=o(93054),c=o(39130),s=Object.defineProperty,u=Object.defineProperties,p=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,f=(e,t,o)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,g=(e,t)=>{for(var o in t||(t={}))h.call(t,o)&&f(e,o,t[o]);if(d)for(var o of d(t))m.call(t,o)&&f(e,o,t[o]);return e};const v={id:"using-ides-with-touchgfx",title:"Using IDEs with TouchGFX"},b=void 0,k={unversionedId:"development/ui-development/working-with-touchgfx/using-ides-with-touchgfx",id:"development/ui-development/working-with-touchgfx/using-ides-with-touchgfx",title:"Using IDEs with TouchGFX",description:"",source:"@site/docs/development/ui-development/working-with-touchgfx/using-ides-with-touchgfx.mdx",sourceDirName:"development/ui-development/working-with-touchgfx",slug:"/development/ui-development/working-with-touchgfx/using-ides-with-touchgfx",permalink:"/touchgfx-test.github.io/docs/development/ui-development/working-with-touchgfx/using-ides-with-touchgfx",draft:!1,tags:[],version:"current",frontMatter:{id:"using-ides-with-touchgfx",title:"Using IDEs with TouchGFX"},sidebar:"docs",previous:{title:"Working with TouchGFX",permalink:"/touchgfx-test.github.io/docs/category/working-with-touchgfx"},next:{title:"Widgets and Containers",permalink:"/touchgfx-test.github.io/docs/development/ui-development/working-with-touchgfx/widgets-and-containers"}},w={},y=[{value:"Prerequisite: GCC version",id:"prerequisite-gcc-version",level:2},{value:"Invoke TouchGFX Makefile from IDE",id:"invoke-touchgfx-makefile-from-ide",level:2},{value:"Add TouchGFX code files to your own project",id:"add-touchgfx-code-files-to-your-own-project",level:2},{value:"Required files",id:"required-files",level:3},{value:"Include paths",id:"include-paths",level:3},{value:"Compiler switches",id:"compiler-switches",level:3},{value:"Cortex-M0 cores",id:"cortex-m0-cores",level:4},{value:"Cortex-M4f cores",id:"cortex-m4f-cores",level:4},{value:"Cortex-M7 cores",id:"cortex-m7-cores",level:4},{value:"Cortex-M33 cores",id:"cortex-m33-cores",level:4},{value:"Linker",id:"linker",level:3},{value:"Core library",id:"core-library",level:4},{value:"Linker options",id:"linker-options",level:4},{value:"Asset generation",id:"asset-generation",level:2},{value:"Flashing and debugging",id:"flashing-and-debugging",level:2}],x={toc:y};function T(e){var t,o=e,{components:s}=o,f=((e,t)=>{var o={};for(var n in e)h.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&d)for(var n of d(e))t.indexOf(n)<0&&m.call(e,n)&&(o[n]=e[n]);return o})(o,["components"]);return(0,n.kt)("wrapper",(t=g(g({},x),f),u(t,p({components:s,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"When creating a new TouchGFX project, either through the TouchGFX Designer or STM32CubeMX, the following project files and libraries for using proprietary IDEs are available:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Keil uVision ",(0,n.kt)("em",{parentName:"li"},"(Target only)")),(0,n.kt)("li",{parentName:"ul"},"IAR Embedded Workbench ",(0,n.kt)("em",{parentName:"li"},"(Target only)")),(0,n.kt)("li",{parentName:"ul"},"STM32CubeIDE ",(0,n.kt)("em",{parentName:"li"},"(Target only)")),(0,n.kt)("li",{parentName:"ul"},"Microsoft Visual Studio ",(0,n.kt)("em",{parentName:"li"},"(Simulator only)"))),(0,n.kt)("p",null,"Note that not all project files are present in your project at the same time. The tool chain selected in STM32CubeMX is the one that will be generated, by default STM32CubeIDE is selected."),(0,n.kt)(i.Z,{mdxType:"FurtherReading"},"How to change the tool chain is described ",(0,n.kt)(c.Z,{to:"../../board-bring-up/how-to/01-create-project",mdxType:"Link"},"here"),"."),(0,n.kt)("p",null,"In addition makefiles and libraries for shell-based compilation with a GCC cross compiler for ARM targets are also provided. This article will help you configure third-party GCC-based IDEs for TouchGFX application development. Basically any IDE which is able to invoke the GCC cross compiler should be useable."),(0,n.kt)(l.Z,{mdxType:"Note"},"Please note that this article describes only the setup procedure in general terms - support for all the various IDEs cannot be provided, but hopefully the information presented here is sufficient for you to use TouchGFX with your favorite IDE."),(0,n.kt)("p",null,"This article will describe two different approaches to getting TouchGFX to work with other IDEs. One approach is to invoke the TouchGFX Makefile from within the IDE. This is probably the easiest approach, but is not always desirable if you want to have more control over the compilation process and file locations. Alternatively you can manually add the necessary TouchGFX files and configuration options to your existing project."),(0,n.kt)("h2",g({},{id:"prerequisite-gcc-version"}),"Prerequisite: GCC version"),(0,n.kt)("p",null,"This article assumes that you will use either the GCC cross compiler toolchain distributed with the TouchGFX environment shell, or alternatively your own GCC toolchain of a flavor that is able to link with the TouchGFX core library compiled using the environment shell toolchain."),(0,n.kt)("p",null,"The GCC compiler used:"),(0,n.kt)("pre",null,(0,n.kt)("code",g({parentName:"pre"},{}),"$ arm-none-eabi-gcc.exe -v\nTarget: arm-none-eabi\nThread model: single\ngcc version 7.3.1 20180622 (release) [ARM/embedded-7-branch revision 261907] (GNU Tools for Arm Embedded Processors 7-2018-q2-update)\n")),(0,n.kt)("p",null,"The compiler can be obtained from ",(0,n.kt)("a",g({parentName:"p"},{href:"https://launchpad.net/gcc-arm-embedded"}),"https://launchpad.net/gcc-arm-embedded"),"."),(0,n.kt)("h2",g({},{id:"invoke-touchgfx-makefile-from-ide"}),"Invoke TouchGFX Makefile from IDE"),(0,n.kt)("p",null,"A hopefully quick-and-dirty way of compiling TouchGFX applications from within your IDE is to simply invoke the Makefile included in the projects created by the TouchGFX Designer.\nTo use the TouchGFX environment shell to compile an application for target, you must navigate to the TouchGFX application root directory and execute the following command:"),(0,n.kt)("pre",null,(0,n.kt)("code",g({parentName:"pre"},{}),"$ make -f gcc/Makefile\n")),(0,n.kt)("p",null,"Now, instead of invoking the make command from the TouchGFX environment shell, it is also possible to invoke it from within your IDE. The executables used by the shell (make, arm-none-eabi-gcc, ..) are actually normal Windows x86 executables, so the make application can be executed by a normal command prompt, provided that the following environment variables have been configured."),(0,n.kt)("pre",null,(0,n.kt)("code",g({parentName:"pre"},{}),"C:\\TouchGFX\\4.18.0\\env\\MinGW\\bin\nC:\\TouchGFX\\4.18.0\\env\\MinGW\\msys\\1.0\\Ruby30-x64\\bin\nC:\\TouchGFX\\4.18.0\\env\\MinGW\\msys\\1.0\\bin\nC:\\TouchGFX\\4.18.0\\env\\MinGW\\msys\\1.0\\gnu-arm-gcc\\bin\n")),(0,n.kt)("p",null,"After setting up the needed Windows environment variables it is now possible to invoke the ",(0,n.kt)("inlineCode",{parentName:"p"},"make")," command on the appropriate TouchGFX makefile directly from within your IDE. The exact command you need to execute is the same as when compiling from the shell, namely:"),(0,n.kt)("pre",null,(0,n.kt)("code",g({parentName:"pre"},{}),"$ make -f gcc/Makefile\n")),(0,n.kt)(l.Z,{mdxType:"Note"},"Please note that your current directory must be the root directory of the application you want to compile."),(0,n.kt)("h2",g({},{id:"add-touchgfx-code-files-to-your-own-project"}),"Add TouchGFX code files to your own project"),(0,n.kt)("p",null,"If you instead wish to have more control over the build process and file locations, you can instead integrate the relevant TouchGFX code files into your own existing project, and add the necessary include paths and compiler switches in order to make it compile."),(0,n.kt)("h3",g({},{id:"required-files"}),"Required files"),(0,n.kt)("p",null,"Basically you will need to add the same TouchGFX files to your IDE project as are compiled when building with make from the TouchGFX environment shell. Exactly which files to include depend on your target board, since the low-level drivers are different for each board. In order to determine what files you need, the recommended approach is to simply try compiling the application using the TouchGFX environment shell for the appropriate board. The compilation process will mention each file being compiled, thereby giving you a list of exactly the files you need to add."),(0,n.kt)("h3",g({},{id:"include-paths"}),"Include paths"),(0,n.kt)("p",null,"You will need to add the following include paths to your compilation:"),(0,n.kt)("pre",null,(0,n.kt)("code",g({parentName:"pre"},{}),".../TouchGFX/gui/include\n.../TouchGFX/generated/gui_generated/include\n.../TouchGFX/platform/os\n.../TouchGFX/generated/fonts/include\n.../TouchGFX/generated/images/include\n.../TouchGFX/generated/texts/include\n.../TouchGFX/generated/videos/include\n.../Middlewares/ST/touchgfx/framework/include\n")),(0,n.kt)(a.Z,{mdxType:"Tip"},"In addition to the above include paths, you also need to add include paths for the board specific code. Take a look in the ",(0,n.kt)(r.Z,{mdxType:"InlineCode"},"gcc/Makefile")," for this information."),(0,n.kt)("h3",g({},{id:"compiler-switches"}),"Compiler switches"),(0,n.kt)("p",null,"Like with include paths, there are some generic compiler switches which must be enabled, and also some that are specific for the processor core and concrete board. The compiler switches used to compile the TouchGFX core library are listed below, for each core. Some of these options will be mandatory for the compilation of your code as well in order for the linker to work, and some are optional. Those that are known to be mandatory are marked in bold."),(0,n.kt)("h4",g({},{id:"cortex-m0-cores"}),"Cortex-M0 cores"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},'-fno-rtti -fno-exceptions -mfpu=fpv4-sp-d16 -mfloat-abi=softfp -mcpu=cortex-m0plus -D__irq=""')," -mthumb -mno-thumb-interwork -std=c99 -Os -fno-strict-aliasing -fdata-sections -ffunction-sections -Wno-psabi -DCORE_M0PLUS"),(0,n.kt)("h4",g({},{id:"cortex-m4f-cores"}),"Cortex-M4f cores"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},'-fno-rtti -fno-exceptions -mfpu=fpv4-sp-d16 -mfloat-abi=softfp -mcpu=cortex-m4 -D__irq=""')," -mthumb -mno-thumb-interwork -std=c99 -Os -fno-strict-aliasing -fdata-sections -ffunction-sections -Wno-psabi -DCORE_M4 -march=armv7e-m"),(0,n.kt)("h4",g({},{id:"cortex-m7-cores"}),"Cortex-M7 cores"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},'-fno-rtti -fno-exceptions -mfpu=fpv5-sp-d16 -mfloat-abi=softfp -mcpu=cortex-m7 -D__irq=""')," -mthumb -mno-thumb-interwork -std=c99 -Os -fno-strict-aliasing -fdata-sections -ffunction-sections -Wno-psabi -DCORE_M7"),(0,n.kt)("h4",g({},{id:"cortex-m33-cores"}),"Cortex-M33 cores"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},'-fno-rtti -fno-exceptions -mfpu=fpv5-sp-d16 -mfloat-abi=softfp -mcpu=cortex-m33 -D__irq=""')," -mthumb -mno-thumb-interwork -std=c99 -Os -fno-strict-aliasing -fdata-sections -ffunction-sections -Wno-psabi -DCORE_M33"),(0,n.kt)("h3",g({},{id:"linker"}),"Linker"),(0,n.kt)("h4",g({},{id:"core-library"}),"Core library"),(0,n.kt)("p",null,"You must link with the TouchGFX core library. Depending on your MCU, this would be either"),(0,n.kt)("pre",null,(0,n.kt)("code",g({parentName:"pre"},{}),".../Middlewares/ST/touchgfx/lib/core/cortex-m0/gcc/libtouchgfx.a\n.../Middlewares/ST/touchgfx/lib/core/cortex-m4f/gcc/libtouchgfx.a\n.../Middlewares/ST/touchgfx/lib/core/cortex-m7/gcc/libtouchgfx.a\n.../Middlewares/ST/touchgfx/lib/core/cortex-m33/gcc/libtouchgfx.a\n")),(0,n.kt)("h4",g({},{id:"linker-options"}),"Linker options"),(0,n.kt)("p",null,"In addition, you will need a few linker options. The following options are what TouchGFX uses:"),(0,n.kt)("pre",null,(0,n.kt)("code",g({parentName:"pre"},{}),"Cortex-M0: -Wl,-static -nostartfiles -mthumb -mno-thumb-interwork -fno-exceptions -fno-rtti -Wl,--gc-sections -mcpu=cortex-m0plus -Wno-psabi -mfpu=fpv4-sp-d16 -mfloat-abi=softfp\nCortex-M4f: -Wl,-static -nostartfiles -mthumb -mno-thumb-interwork -fno-exceptions -fno-rtti -Wl,--gc-sections -mcpu=cortex-m4 -march=armv7e-m -Wno-psabi -mfpu=fpv4-sp-d16 -mfloat-abi=softfp\nCortex-M7: -Wl,-static -nostartfiles -mthumb -mno-thumb-interwork -fno-exceptions -fno-rtti -Wl,--gc-sections -mcpu=cortex-m7 -Wno-psabi -mfpu=fpv5-sp-d16 -mfloat-abi=softfp\nCortex-M33: -Wl,-static -nostartfiles -mthumb -mno-thumb-interwork -fno-exceptions -fno-rtti -Wl,--gc-sections -mcpu=cortex-m33 -Wno-psabi -mfpu=fpv5-sp-d16 -mfloat-abi=softfp\n")),(0,n.kt)("h2",g({},{id:"asset-generation"}),"Asset generation"),(0,n.kt)("p",null,"To compile a project, assets must be generated as well. This can be done either by invoking the generated Makefile with the option 'assets':"),(0,n.kt)("pre",null,(0,n.kt)("code",g({parentName:"pre"},{}),"make -f TouchGFX/simulator/gcc/Makefile assets\n")),(0,n.kt)("p",null,"Another way to generate assets, is to use the image-, text/font- and video-converter directly."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Imageconverter"),"\nThe imageconverter can be found in your projects touchgfx folder ",(0,n.kt)("inlineCode",{parentName:"p"},"Middlewares/ST/touchgfx/framework/tools/imageconvert/build")," built for Linux and Windows."),(0,n.kt)("pre",null,(0,n.kt)("code",g({parentName:"pre"},{}),"usage: imageconvert [-c configfile] [-f inputfile -o outputfile | -r inputdir -w outputdir]\n")),(0,n.kt)("p",null,"When calling the imageconvert.out executable, it will look for a configfile (",(0,n.kt)("inlineCode",{parentName:"p"},"application.config"),") file in the folder it is called from."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Textconverter"),"\nThe textconverter can be found in your projects touchgfx folder ",(0,n.kt)("inlineCode",{parentName:"p"},"Middlewares/ST/touchgfx/framework/tools/textconvert")," as a ruby file: ",(0,n.kt)("inlineCode",{parentName:"p"},"main.rb"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",g({parentName:"pre"},{}),"usage: main.rb file.xml path/to/fontconvert.out path/to/fonts_output_dir path/to/localization_output_dir path/to/font/asset calling_path\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Videoconverter"),"\nThe videoconverter can be found in your projects touchgfx folder ",(0,n.kt)("inlineCode",{parentName:"p"},"Middlewares/ST/touchgfx/framework/tools/videoconvert")," as a ruby file: ",(0,n.kt)("inlineCode",{parentName:"p"},"videoconvert.rb"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",g({parentName:"pre"},{}),"usage: videoconvert.rb path/to/project_root_dir path/to/video_assets_dir path/to/generated_output_dir\n")),(0,n.kt)("h2",g({},{id:"flashing-and-debugging"}),"Flashing and debugging"),(0,n.kt)("p",null,"Depending on your linker settings, you will most likely get an ",(0,n.kt)("inlineCode",{parentName:"p"},".elf")," or ",(0,n.kt)("inlineCode",{parentName:"p"},".hex")," file produced as output. It is possible to deploy and debug TouchGFX applications from within most IDEs, typically using a GDB server, or whichever other approach your IDE provides. Concrete pointers for each available IDE cannot be provided, but you might find inspiration in the ",(0,n.kt)("a",g({parentName:"p"},{href:"compiling-and-flashing"}),"Compiling & Flashing")," article, which explains how to flash a board with a GCC-produced ELF/HEX file."))}T.isMDXComponent=!0}}]);