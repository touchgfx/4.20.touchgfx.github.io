"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[7530],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),f=o,h=d["".concat(s,".").concat(f)]||d[f]||u[f]||i;return n?a.createElement(h,r(r({ref:t},p),{},{components:n})):a.createElement(h,r({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},22425:function(e,t,n){var a=n(67294);class o extends a.Component{render(){return a.createElement("div",{className:"code-header"},a.createElement("div",null,a.createElement("h5",null,this.props.children)))}}t.Z=o},44035:function(e,t,n){var a=n(67294),o=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,i=e.height,r=(0,o.Z)(e.imageSource);return t?a.createElement("div",{className:"figure noshadow"},a.createElement("a",{href:r,target:"_blank"},a.createElement("img",{width:n,height:i,src:r})),a.createElement("p",null,e.children)):a.createElement("div",{className:"figure"},a.createElement("a",{href:r,target:"_blank"},a.createElement("img",{width:n,height:i,src:r})),a.createElement("p",null,e.children))}},2089:function(e,t,n){n.r(t),n.d(t,{assets:function(){return y},contentTitle:function(){return m},default:function(){return T},frontMatter:function(){return h},metadata:function(){return g},toc:function(){return b}});var a=n(3905),o=n(44035),i=n(22425),r=Object.defineProperty,l=Object.defineProperties,s=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,f=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&d(e,n,t[n]);if(c)for(var n of c(t))u.call(t,n)&&d(e,n,t[n]);return e};const h={id:"using-binary-fonts",title:"\u4e8c\u9032\u4f4d\u5b57\u9ad4"},m=void 0,g={unversionedId:"development/ui-development/touchgfx-engine-features/using-binary-fonts",id:"development/ui-development/touchgfx-engine-features/using-binary-fonts",title:"\u4e8c\u9032\u4f4d\u5b57\u9ad4",description:"",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/development/ui-development/touchgfx-engine-features/using-binary-fonts.mdx",sourceDirName:"development/ui-development/touchgfx-engine-features",slug:"/development/ui-development/touchgfx-engine-features/using-binary-fonts",permalink:"/4.20/zh-TW/docs/development/ui-development/touchgfx-engine-features/using-binary-fonts",draft:!1,tags:[],version:"current",frontMatter:{id:"using-binary-fonts",title:"\u4e8c\u9032\u4f4d\u5b57\u9ad4"},sidebar:"docs",previous:{title:"\u52d5\u614b\u9ede\u9663\u5716",permalink:"/4.20/zh-TW/docs/development/ui-development/touchgfx-engine-features/dynamic-bitmaps"},next:{title:"\u5b57\u9ad4\u5feb\u53d6",permalink:"/4.20/zh-TW/docs/development/ui-development/touchgfx-engine-features/font-cache"}},y={},b=[{value:"\u5b57\u9ad4\u548c\u6587\u5b57\u7cfb\u7d71\u985e",id:"the-font-and-text-system-classes",level:2},{value:"\u4f7f\u7528\u4e8c\u9032\u4f4d\u5b57\u9ad4",id:"using-binary-fonts",level:2},{value:"\u914d\u7f6e\u5b57\u9ad4\u8f49\u63db\u5668\u4ee5\u751f\u6210\u4e8c\u9032\u4f4d\u5b57\u9ad4",id:"configuring-the-font-converter-to-generate-binary-fonts",level:3},{value:"\u624b\u52d5\u914d\u7f6e",id:"manual-configuration",level:3},{value:"\u5b89\u88dd\u4e8c\u9032\u4f4d\u5b57\u9ad4",id:"installing-the-binary-font",level:3},{value:"\u91cd\u7f6e\u5b57\u9ad4",id:"resetting-a-font",level:3},{value:"Generating binary fonts in another project",id:"generating-binary-fonts-in-another-project",level:2}],v={toc:b};function T(e){var t,n=e,{components:r}=n,d=((e,t)=>{var n={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&c)for(var a of c(e))t.indexOf(a)<0&&u.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=f(f({},v),d),l(t,s({components:r,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"\u672c\u7bc0\u63cf\u8ff0\u5982\u4f55\u5728TouchGFX\u4e2d\u4f7f\u7528\u4e8c\u9032\u4f4d\u5b57\u9ad4\u3002 The first section contains some in-depth information about the font and text system in TouchGFX that can be beneficial to understand when working with binary fonts. The second section explains how to use binary fonts."),(0,a.kt)("p",null,"\u4e8c\u9032\u4f4d\u5b57\u9ad4\u53ef\u7528\u4f5c\u5c07\u5b57\u9ad4\u8cc7\u8a0a\u7de8\u8b6f\u4e26\u9023\u7d50\u5230\u61c9\u7528\uff08",(0,a.kt)("inlineCode",{parentName:"p"},"generated/fonts/src"),"\u4e2d\u7684.cpp\u6a94\uff09\u7684\u50b3\u7d71\u65b9\u5f0f\u7684\u66ff\u4ee3\u65b9\u6848\u3002 The main advantages of this approach is to get a smaller application binary and get flexibility in form of providing different sets of fonts with your devices. For example you can pack the Chinese font with devices going to China, and the Japanese font with devices going there.  The drawback of this approach is that the whole binary font needs to be loaded to RAM (or memory-mapped flash) which can be a problem if the font is large."),(0,a.kt)("p",null,"\u5c07\u5b57\u9ad4\u9023\u7d50\u5230\u61c9\u7528\u7684\u4e3b\u8981\u512a\u52e2\u662f\u61c9\u7528\u59cb\u7d42\u6703\u81ea\u52d5\u5305\u542b\u61c9\u7528\u4e2d\u4f7f\u7528\u7684\u66f4\u65b0\u6587\u5b57\u548c\u5b57\u9ad4\u6392\u5370\u3002 \u56e0\u6b64\uff0c\u4f7f\u7528\u8d77\u4f86\u5341\u5206\u5bb9\u6613\u4e14\u5b89\u5168\u3002 \u5176\u7f3a\u9ede\u5728\u65bc\u5b57\u9ad4\u6703\u4f7f\u61c9\u7528\u7684\u9ad4\u7a4d\u8b8a\u5927\u3002"),(0,a.kt)("h2",f({},{id:"the-font-and-text-system-classes"}),"\u5b57\u9ad4\u548c\u6587\u5b57\u7cfb\u7d71\u985e"),(0,a.kt)("p",null,"\u5728\u9810\u8a2d\u914d\u7f6e\u4e2d\uff0cTouchGFX\u70ba\u61c9\u7528\u4e2d\u4f7f\u7528\u7684\u6240\u6709\u6587\u5b57\u548c\u5b57\u9ad4\u751f\u6210.cpp\u6587\u4ef6\u3002 \u9019\u4e9b\u6a94\u6848\u9023\u540c\u751f\u6210\u7684UI\u548c\u61c9\u7528\u7a0b\u5f0f\u78bc\u4e00\u8d77\u88ab\u7de8\u8b6f\u548c\u9023\u7d50\u5230\u61c9\u7528\u4e2d\u3002"),(0,a.kt)("p",null,"When you show a text on the UI with e.g. a TextArea, you reference the text with a TypedTextId. This TypedTextId is used by the Widgets to find the actual letters in the text. The Widgets will access the texts through the ",(0,a.kt)("em",{parentName:"p"},"touchgfx::Texts")," class in ",(0,a.kt)("inlineCode",{parentName:"p"},"framework/include/touchgfx/Texts.hpp"),"."),(0,a.kt)("p",null,"Text\u985e\u5305\u542b\u6307\u6a19\u9663\u5217\uff0c\u6307\u6a19\u6307\u5411\u61c9\u7528\u4e2d\u6bcf\u7a2e\u8a9e\u8a00\u7684\u7ffb\u8b6f\u8868\u3002 \u7ffb\u8b6f\u8868\u57fa\u672c\u4e0a\u662f\u8a9e\u8a00\u4e2d\u4f7f\u7528\u7684\u6240\u6709\u5b57\u4e32\u7684\u96c6\u5408\uff1a"),(0,a.kt)(o.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/using-binary-fonts/text-class-1.png",noShadow:"true",width:"420",mdxType:"Figure"},"\u5c07\u6587\u5b57\u6620\u5c04\u5230\u7279\u5b9a\u8a9e\u8a00"),(0,a.kt)("p",null,"\u6b64\u8868\u4f7fTouchGFX\u80fd\u5920\u627e\u5230\u4ee5\u9078\u4e2d\u8a9e\u8a00\u66f8\u5beb\u7684\u7d66\u5b9a\u6587\u5b57\u3002"),(0,a.kt)("p",null,"The tables are regenerated whenever you change a text in TouchGFX Designer or directly in the ",(0,a.kt)("inlineCode",{parentName:"p"},"texts.xml")," file and generate your application."),(0,a.kt)("p",null,"Before we can draw the text on the screen we need to know which font to use for the text. This mapping between texts and fonts is controlled by the TypedTextDatabase class found in (",(0,a.kt)("inlineCode",{parentName:"p"},"generated/texts/include/texts/TypedTextDatabase.hpp"),")."),(0,a.kt)("p",null,"\u5728TouchGFX Designer\u7684\u6587\u5b57\u9078\u9805\u5361\u4e0a\uff0c\u53ef\u4ee5\u6307\u5b9a\u6bcf\u7a2e\u6587\u5b57\u7684\u5b57\u9ad4\u6392\u5370\u3001\u66f8\u5beb\u65b9\u5411\uff08\u5f9e\u5de6\u5411\u53f3\u6216\u5f9e\u53f3\u5411\u5de6\uff09\u548c\u5c0d\u9f4a\u65b9\u5f0f\uff08\u5de6\u3001\u53f3\u548c\u4e2d\u5fc3\uff09\u3002 \u6587\u5b57\u7684\u6bcf\u7a2e\u7ffb\u8b6f\u6a94\u7684\u5b57\u9ad4\u6392\u5370\u3001\u66f8\u5beb\u9806\u5e8f\u548c\u5c0d\u9f4a\u65b9\u5f0f\u53ef\u80fd\u4e0d\u540c\u3002 \u6b64\u8cc7\u8a0a\u88ab\u7de8\u8b6f\u5230\u6bcf\u7a2e\u8a9e\u8a00\u7279\u5b9a\u7684\u8868\u683c\u4e2d\u3002 This makes it easy for TouchGFX to find out what font to use for a given text, how to align it, and in what order to  write the letters."),(0,a.kt)(o.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/using-binary-fonts/text-class-2.png",noShadow:"true",width:"600",mdxType:"Figure"},"\u5b57\u9ad4\u6392\u5370\u8cc7\u8a0a\u7279\u5b9a\u65bc\u8a9e\u8a00"),(0,a.kt)("p",null,"\u5728\u4e0a\u5716\u4e2d\uff0cTypedTextData\u8868\u6709\u6307\u5411\u4e09\u500b\u9663\u5217\u7684\u6307\u6a19\u3002 \u6bcf\u500b\u5c0d\u61c9\u65bc\u61c9\u7528\u4e2d\u7684\u4e00\u7a2e\u8a9e\u8a00\u3002 Each of the arrays have 3 elements, one for each text in the system. Each element describes a font, a reading order, and the alignment. We see that in this example the texts use the same font in the three languages, but the texts use different fonts (F1 or F2). The Fonts table has two pointers because two fonts are used in the application."),(0,a.kt)("p",null,"\u7576TouchGFX\u8981\u5728\u87a2\u5e55\u4e0a\u7e6a\u88fd\u6587\u5b57\u6642\uff0c\u6703\u67e5\u627eTypedTextData\u7372\u53d6\u7d66\u5b9a\u6587\u5b57\u3002 This data contains the font index, letter order (LTR/RTL), and the horizontal alignment (Left, Right, Center) of the text as specified in the TouchGFX Designer or the xml document. TouchGFX\u4f7f\u7528TypedTextData\uff08F1\u6216F2\uff09\u4e2d\u7684\u5b57\u9ad4\u7d22\u5f15\u67e5\u627e\u6587\u5b57\u7684\u6b63\u78ba\u5b57\u9ad4\u3002"),(0,a.kt)("p",null,"\u5728\u5c07\u5b57\u9ad4\u7de8\u8b6f\u5230\u61c9\u7528\u4e2d\u6642\uff0c\u6240\u6709\u9019\u4e9b\u64cd\u4f5c\u90fd\u6703\u81ea\u52d5\u767c\u751f\u3002"),(0,a.kt)("h2",f({},{id:"using-binary-fonts"}),"\u4f7f\u7528\u4e8c\u9032\u4f4d\u5b57\u9ad4"),(0,a.kt)("p",null,"\u7576\u61c9\u7528\u4f7f\u7528\u8a31\u591a\u4e0d\u540c\u5b57\u9ad4\u7684\u8a31\u591a\u5b57\u6bcd\u6642\uff0c\u61c9\u7528\u7684\u5927\u5c0f\u6703\u5927\u5927\u589e\u52a0\u3002"),(0,a.kt)("p",null,"\u70ba\u4e86\u7de9\u89e3\u9019\u500b\u554f\u984c\uff0cTouchGFX\u5141\u8a31\u61c9\u7528\u4f7f\u7528\u4e8c\u9032\u4f4d\u5b57\u9ad4\u3002 \u9019\u4e9b\u5b57\u9ad4\u4e0d\u9023\u7d50\u5230\u61c9\u7528\uff0c\u800c\u662f\u7368\u7acb\u4e8e\u61c9\u7528\u4e26\u4fdd\u5b58\u70ba\u55ae\u7368\u7684\u6587\u4ef6\u3002 These files can be loaded and provided to TouchGFX by the application at runtime. \u8209\u4f8b\u4f86\u8aaa\uff0c\u61c9\u7528\u53ef\u4ee5\u5f9e\u5916\u90e8\u8a18\u61b6\u9ad4\uff08\u5982SD\u5361\uff09\u8f09\u5165\u5b57\u9ad4\uff0c\u4e5f\u53ef\u4ee5\u5f9e\u4e92\u806f\u7db2\u4e0b\u8f09\u5b57\u9ad4\u3002"),(0,a.kt)("p",null,"\u5728\u8f09\u5165\u5b57\u9ad4\u5f8c\uff0c\u61c9\u7528\u53ef\u4ee5\u8981\u6c42TouchGFX\u5b89\u88dd\u5b57\u9ad4\u7cfb\u7d71\u4e2d\u7684\u4e8c\u9032\u4f4d\u5b57\u9ad4\uff1a"),(0,a.kt)(o.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/using-binary-fonts/binary-font-1.png",noShadow:"true",width:"600",mdxType:"Figure"},"\u5728\u5b57\u9ad4\u8868\u4e2d\u5b89\u88dd\u4e8c\u9032\u4f4d\u5b57\u9ad4"),(0,a.kt)("p",null,"Here the built-in Font2 is replaced by the binary font loaded by the application. \u6b64\u5f8c\uff0cTouchGFX\u5c07\u4e0d\u4f7f\u7528\u5167\u9023Font2\u3002"),(0,a.kt)("p",null,"Note that nothing changed in the text tables. These still refer to the same fonts (F1 and F2) by index."),(0,a.kt)("h3",f({},{id:"configuring-the-font-converter-to-generate-binary-fonts"}),"\u914d\u7f6e\u5b57\u9ad4\u8f49\u63db\u5668\u4ee5\u751f\u6210\u4e8c\u9032\u4f4d\u5b57\u9ad4"),(0,a.kt)("p",null,"\u70ba\u4e86\u751f\u6210\u4e8c\u9032\u4f4d\u5b57\u9ad4\uff0c\u5fc5\u9808\u914d\u7f6e\u5b57\u9ad4\u8f49\u63db\u5668\u3002 \u9019\u5728TouchGFX Designer\u4e2d\u5f88\u5bb9\u6613\u5be6\u73fe\u3002 \u8f49\u81f3\u201cConfig\u201d\u9078\u9805\u5361\uff0c\u9078\u64c7\u201cText Configuration\u201d\uff0c\u7136\u5f8c\u9ede\u64ca\u201cBinary font files\u201d\uff1a"),(0,a.kt)(o.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/using-binary-fonts/binary-font-2-4.17.png",mdxType:"Figure"},"\u9078\u64c7\u4e8c\u9032\u4f4d\u5b57\u9ad4"),(0,a.kt)("p",null,"When you regenerate the code, TouchGFX will generate binary fonts in the ",(0,a.kt)("inlineCode",{parentName:"p"},"generated/fonts/bin/")," folder, and empty fonts in the normal files in ",(0,a.kt)("inlineCode",{parentName:"p"},"generated/fonts/src/"),"."),(0,a.kt)("p",null,"The generated code will configure TouchGFX to use the empty font. The application is required to install the binary font at runtime."),(0,a.kt)("h3",f({},{id:"manual-configuration"}),"\u624b\u52d5\u914d\u7f6e"),(0,a.kt)("p",null,"\u5982\u679c\u4e0d\u4f7f\u7528TouchGFX Designer\uff0c\u4ecd\u7136\u53ef\u4ee5\u751f\u6210\u4e8c\u9032\u4f4d\u5b57\u9ad4\u3002 \u5728\u5c08\u6848\u7684",(0,a.kt)("em",{parentName:"p"},"application.config"),"\u6a94\u7684text_configuration\u90e8\u5206\u5c07\u9078\u9805\u201cbinary_fonts\u201d\u66f4\u6539\u70ba\u201cyes\u201d\u3002"),(0,a.kt)(i.Z,{mdxType:"CodeHeader"},"application.config"),(0,a.kt)("pre",null,(0,a.kt)("code",f({parentName:"pre"},{className:"language-cpp",metastring:"{5-5}","{5-5}":!0}),'  "text_configuration": {\n    "remap": "yes",\n    "a4": "yes",\n    "binary_translations": "no",\n    "binary_fonts": "yes",\n    "framebuffer_bpp": "16"\n  }\n')),(0,a.kt)("p",null,"\u5728\u4e0b\u4e00\u6b21\u751f\u6210\u6642\uff0c\u4e8c\u9032\u4f4d\u5b57\u9ad4\u5c07\u6703\u51fa\u73fe\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"generated/fonts/bin"),"\u8cc7\u6599\u593e\u4e2d\u3002"),(0,a.kt)("h3",f({},{id:"installing-the-binary-font"}),"\u5b89\u88dd\u4e8c\u9032\u4f4d\u5b57\u9ad4"),(0,a.kt)("p",null,"Before TouchGFX can use a binary font the font data must be made available in addressable memory like RAM or QSPI flash (where it can be directly accessed through a pointer). Typically this involves copying the data from a file or block storage like emmc flash. This can also happen during production where the binary font is flashed to a predefined address in a memory-mapped flash."),(0,a.kt)("p",null,"When the application has loaded the binary font to memory (if not available already), the application must create and install a ",(0,a.kt)("inlineCode",{parentName:"p"},"BinaryFont")," object referring the data in TouchGFX. After this, TouchGFX will use that font and not the compiled in font."),(0,a.kt)("p",null,"The binary font needs to be installed before it is used to draw the text that refers to the font, but it does not need to be installed immediately after booting. The ",(0,a.kt)("em",{parentName:"p"},"FrontendApplication::FrontendApplication(Model& m, FrontendHeap& heap)")," constructor in ",(0,a.kt)("inlineCode",{parentName:"p"},"FrontApplication.cpp")," can be used to install fonts. This constructor is executed once before anything is drawn."),(0,a.kt)("p",null,"Fonts can also be installed in the ",(0,a.kt)("inlineCode",{parentName:"p"},"setupScreen()")," methods. This is useful if you have a font that is only used in a specific screen. The font can then be un-installed in ",(0,a.kt)("inlineCode",{parentName:"p"},"tearDownScreen()")),(0,a.kt)("p",null,"Here is an example of loading a binary font from a file-system to internal RAM:"),(0,a.kt)(i.Z,{mdxType:"CodeHeader"},"FrontendApplication.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",f({parentName:"pre"},{className:"language-cpp",metastring:"{5-5,19-19,22-22}","{5-5,19-19,22-22}":!0}),'//read the file into this array in internal RAM\nuint8_t fontdata[10000];\n\n//binary font object using the data\nBinaryFont bf;\n\nFrontendApplication::FrontendApplication(Model& m, FrontendHeap& heap)\n    : FrontendApplicationBase(m, heap)\n{\n    //read the binary font from a file\n    FILE* font = fopen("generated/fonts/bin/Font_verdana_20_4bpp.bin", "rb");\n    if (font)\n    {\n        //read data from the file\n        fread(fontdata, 1, 10000, font);\n        fclose(font);\n\n        //initialize BinaryFont object in bf using placement new\n        new (&bf) BinaryFont((const struct touchgfx::BinaryFontData*)fontdata);\n\n        //replace application font \'DEFAULT\' with the binary font\n        TypedTextDatabase::setFont(DEFAULT, &bf); //verdana_20_4bpp\n    }\n}\n')),(0,a.kt)("p",null,"\u6253\u958b\u6a94\u6848\u548c\u8b80\u53d6\u8cc7\u6599\u7684\u5177\u9ad4\u7a0b\u5f0f\u78bc\u5c07\u53d6\u6c7a\u65bc\u6a94\u6848\u7cfb\u7d71\u548c\u4f5c\u696d\u7cfb\u7d71\u3002 The basic steps are to make the font data available in memory, initialize a BinaryFont object with a pointer to the data, and finally pass the BinaryFont object to the ",(0,a.kt)("inlineCode",{parentName:"p"},"TypedTextDatabase")," of TouchGFX."),(0,a.kt)("p",null,"After the call to ",(0,a.kt)("em",{parentName:"p"},"setFont")," TouchGFX will use the binary font to draw text on the screen instead of the compiled in font (DEFAULT)."),(0,a.kt)("h3",f({},{id:"resetting-a-font"}),"\u91cd\u7f6e\u5b57\u9ad4"),(0,a.kt)("p",null,"\u5728\u4f7f\u7528\u4e8c\u9032\u4f4d\u5b57\u9ad4\u5f8c\uff0c\u6709\u6642\u6703\u60f3\u8981\u6062\u5fa9\u7de8\u8b6f\u5230\u61c9\u7528\u4e2d\u7684\u539f\u59cb\u5b57\u9ad4\u3002 \u4f8b\u5982\uff0c\u5728\u66f4\u6539\u8a9e\u8a00\u6642\uff0c\u60f3\u8981\u4f7f\u7528\u9810\u8a2d\u5b57\u9ad4\u3002 TypedTextDatabase\u4e2d\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"resetFont()"),"\u51fd\u6578\u5c07\u91cd\u7f6e\u6307\u5411\u5167\u5efa\u5b57\u9ad4\u7684\u5b57\u9ad4\u6307\u6a19\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",f({parentName:"pre"},{className:"language-cpp"}),"//reset to original font\nTypedTextDatabase::resetFont(DEFAULT);\n")),(0,a.kt)("p",null,"\u5728\u547c\u53eb\u5f8c\uff0c\u61c9\u7528\u53ef\u4ee5\u91cd\u8907\u4f7f\u7528\u88ab\u4e8c\u9032\u4f4d\u5b57\u9ad4\u4f54\u7528\u7684\u5b58\u5132\u7a7a\u9593\uff0c\u4ee5\u4fbf\u5206\u914d\u65b0\u5b57\u9ad4\u6216\u7528\u65bc\u5176\u4ed6\u7528\u9014\u3002"),(0,a.kt)("h2",f({},{id:"generating-binary-fonts-in-another-project"}),"Generating binary fonts in another project"),(0,a.kt)("p",null,"In some cases you want to have both normal fonts and binary fonts in a project. For example you want to have English letters in a normal compiled-in font, but Chinese and Japanese characters in binary fonts for optional inclusion in the device. This setup is not configurable in TouchGFX Designer."),(0,a.kt)("p",null,"In this case it is advised to create two TouchGFX projects. In the first project (your normal application) you have all your application code and UI with normal fonts. In the second project you have only enough texts (or wildcard characters) to generate the binary fonts."),(0,a.kt)("p",null,'In the first project, you deselect "Binary font files". In the second project you select "Binary font files".'),(0,a.kt)("p",null,"When you generate code in the second TouchGFX project the binary fonts are generated. The binary fonts can then be copied to the first project (in a folder of your convenience), and be used in the code as shown above."))}T.isMDXComponent=!0}}]);