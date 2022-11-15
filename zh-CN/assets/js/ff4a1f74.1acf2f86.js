"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[4868],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,f=d["".concat(p,".").concat(m)]||d[m]||s[m]||o;return n?a.createElement(f,l(l({ref:t},u),{},{components:n})):a.createElement(f,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},22425:function(e,t,n){var a=n(67294);class r extends a.Component{render(){return a.createElement("div",{className:"code-header"},a.createElement("div",null,a.createElement("h5",null,this.props.children)))}}t.Z=r},44035:function(e,t,n){var a=n(67294),r=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,o=e.height,l=(0,r.Z)(e.imageSource);return t?a.createElement("div",{className:"figure noshadow"},a.createElement("a",{href:l,target:"_blank"},a.createElement("img",{width:n,height:o,src:l})),a.createElement("p",null,e.children)):a.createElement("div",{className:"figure"},a.createElement("a",{href:l,target:"_blank"},a.createElement("img",{width:n,height:o,src:l})),a.createElement("p",null,e.children))}},36082:function(e,t,n){n.r(t),n.d(t,{assets:function(){return b},contentTitle:function(){return h},default:function(){return x},frontMatter:function(){return f},metadata:function(){return g},toc:function(){return k}});var a=n(3905),r=n(44035),o=n(22425),l=Object.defineProperty,i=Object.defineProperties,p=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&d(e,n,t[n]);if(c)for(var n of c(t))s.call(t,n)&&d(e,n,t[n]);return e};const f={id:"using-non-memory-mapped-flash",title:"\u4f7f\u7528\u975e\u5185\u5b58\u6620\u5c04\u95ea\u5b58\u5b58\u50a8\u56fe\u50cf"},h=void 0,g={unversionedId:"development/scenarios/using-non-memory-mapped-flash",id:"development/scenarios/using-non-memory-mapped-flash",title:"\u4f7f\u7528\u975e\u5185\u5b58\u6620\u5c04\u95ea\u5b58\u5b58\u50a8\u56fe\u50cf",description:"",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/scenarios/using-non-memory-mapped-flash.mdx",sourceDirName:"development/scenarios",slug:"/development/scenarios/using-non-memory-mapped-flash",permalink:"/4.20/zh-CN/docs/development/scenarios/using-non-memory-mapped-flash",draft:!1,tags:[],version:"current",frontMatter:{id:"using-non-memory-mapped-flash",title:"\u4f7f\u7528\u975e\u5185\u5b58\u6620\u5c04\u95ea\u5b58\u5b58\u50a8\u56fe\u50cf"},sidebar:"docs",previous:{title:"\u901a\u8fc7\u90e8\u5206\u5e27\u7f13\u51b2\u964d\u4f4e\u5185\u5b58\u4f7f\u7528\u7387",permalink:"/4.20/zh-CN/docs/development/scenarios/lowering-memory-usage-with-partial-framebuffer"},next:{title:"\u4f7f\u7528\u4e32\u884c\u95ea\u5b58\u5b58\u50a8\u56fe\u50cf\u548c\u5b57\u4f53",permalink:"/4.20/zh-CN/docs/development/scenarios/using-serial-flash"}},b={},k=[{value:"\u5c06\u95ea\u5b58\u4e2d\u7684\u4f4d\u56fe\u6570\u636e\u590d\u5236\u5230\u7f13\u5b58",id:"copying-bitmap-data-from-flash-to-cache",level:3},{value:"BitmapDatabase\u8868",id:"the-bitmapdatabase-table",level:2},{value:"\u94fe\u63a5\u811a\u672c\u4fee\u6539",id:"linker-script-modifications",level:2},{value:"\u4fee\u6539BlockCopy\u51fd\u6570",id:"modifying-the-blockcopy-function",level:2},{value:"\u5c06\u56fe\u50cf\u94fe\u63a5\u5230RAM",id:"linking-images-to-ram",level:2}],y={toc:k};function x(e){var t,n=e,{components:l}=n,d=((e,t)=>{var n={};for(var a in e)u.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&c)for(var a of c(e))t.indexOf(a)<0&&s.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=m(m({},y),d),i(t,p({components:l,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"\u672c\u8282\u5c06\u8ba8\u8bba\u5982\u4f55\u5c06\u6240\u6709\u56fe\u50cf\u94fe\u63a5\u5230\u4e8c\u8fdb\u5236\u6587\u4ef6\uff0c\u8fd9\u6837\u53ef\u4ee5\u653e\u5165\u975e\u5185\u5b58\u6620\u5c04\u95ea\u5b58\uff0c\u4ee5\u53ca\u5982\u4f55\u5728\u8fd0\u884c\u65f6\u7ed3\u5408\u4f4d\u56fe\u7f13\u5b58\u6765\u4f7f\u7528\u8be5\u6587\u4ef6\u3002 TouchGFX\u4e0d\u80fd\u7ed8\u5236\u5b58\u50a8\u5728\u975e\u5185\u5b58\u6620\u5c04\u95ea\u5b58\u4e2d\u7684\u4f4d\u56fe\uff0c\u4f46\u662f\u901a\u8fc7\u5c06\u4f4d\u56fe\u7f13\u5b58\u5728RAM\u4e2d\uff0c\u5c31\u80fd\u5728\u5e94\u7528\u4e2d\u4f7f\u7528\u4f4d\u56fe\u3002"),(0,a.kt)("p",null,"\u53c2\u89c1",(0,a.kt)("a",m({parentName:"p"},{href:"../ui-development/touchgfx-engine-features/caching-bitmaps"}),"\u7f13\u5b58\u4f4d\u56fe"),"\u4e00\u6587\u4e2d\u5173\u4e8e\u4f4d\u56fe\u7f13\u5b58\u7684\u7efc\u5408\u8ba8\u8bba\u3002"),(0,a.kt)("p",null,"\u5728\u672c\u6587\u4e2d\uff0c\u6211\u4eec\u5047\u8bbe\u60a8\u8bbe\u7f6e\u4e86\u4f4d\u56fe\u7f13\u5b58\uff0c\u5e76\u5e0c\u671b\u5c06\u4f4d\u56fe\u5b58\u50a8\u5728\u975e\u5185\u5b58\u6620\u5c04\u95ea\u5b58\u4e2d\u3002 \u8be5\u95ea\u5b58\u53ef\u4ee5\u662fUSB\u5b58\u50a8\u3001NAND flash\u7b49\u3002"),(0,a.kt)("p",null,"\u76ee\u6807\u662f\u5c06\u56fe\u50cf\u94fe\u63a5\u5230\u7279\u5b9a\u5730\u5740\uff0c\u5c06\u56fe\u50cf\u590d\u5236\u5230\u6587\u4ef6\uff0c\u5e76\u5e2e\u52a9TouchGFX\u5c06\u5176\u4ece\u6587\u4ef6\u590d\u5236\u5230\u7f13\u5b58\u3002"),(0,a.kt)("h3",m({},{id:"copying-bitmap-data-from-flash-to-cache"}),"\u5c06\u95ea\u5b58\u4e2d\u7684\u4f4d\u56fe\u6570\u636e\u590d\u5236\u5230\u7f13\u5b58"),(0,a.kt)("p",null,"\u6ce8\u610f\uff0c\u5728\u7f13\u5b58\u4f4d\u56fe\u65f6\uff0cTouchGFX\u4f1a\u5c06\u50cf\u7d20\u4ece\u539f\u59cb\u4f4d\u7f6e\u590d\u5236\u5230\u4f4d\u56fe\u7f13\u5b58\u3002"),(0,a.kt)("p",null,"\u901a\u8fc7\u4eceHAL\u7c7b\u8c03\u7528\u6b64\u65b9\u6cd5\u6765\u5b8c\u6210\u590d\u5236\uff1a"),(0,a.kt)(o.Z,{mdxType:"CodeHeader"},"HAL.hpp"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-cpp"}),"bool HAL::blockCopy(void* RESTRICT dest, const void* RESTRICT src, uint32_t numBytes);\n")),(0,a.kt)("p",null,"\u5982\u679c\u4f4d\u56fe\u5b58\u50a8\u5728\u666e\u901a\u53ef\u5bfb\u5740\u95ea\u5b58\uff08\u5982\u5185\u90e8\u95ea\u5b58\u6216\u5185\u5b58\u6620\u5c04\u5916\u90e8\u95ea\u5b58\uff09\u4e2d\uff0c\u5219\u4f7f\u7528TouchGFX\u5e93\u4e2d\u63d0\u4f9b\u7684\u666e\u901ablockCopy\u51fd\u6570\u5373\u53ef\uff0c\u60a8\u65e0\u9700\u4efb\u4f55\u64cd\u4f5c\u3002"),(0,a.kt)("p",null,"\u53e6\u4e00\u65b9\u9762\uff0c\u5982\u679c\u4f4d\u56fe\u5b58\u50a8\u5728\u4e0d\u53ef\u5bfb\u5740\u7684\u5b58\u50a8\u4f4d\u7f6e\uff08\u5982\u6587\u4ef6\u7cfb\u7edf\uff09\uff0c\u5219\u666e\u901a\u5b9e\u73b0\u662f\u4e0d\u591f\u7684\uff0c\u60a8\u9700\u8981\u63d0\u4f9b\u66f4\u65b0\u8fc7\u7684\u7248\u672c\uff0c\u4ee5\u4fbf\u80fd\u591f\u4ece\u7279\u5b9a\u95ea\u5b58\u8bfb\u53d6\u3002"),(0,a.kt)("p",null,"\u4f46\u662f\uff0c\u9996\u5148\u6211\u4eec\u9700\u8981\u786e\u4fdd\u4f4d\u56fe\u5df2\u94fe\u63a5\u5230\u56fa\u5b9a\u5730\u5740\u3002"),(0,a.kt)("h2",m({},{id:"the-bitmapdatabase-table"}),"BitmapDatabase\u8868"),(0,a.kt)("p",null,"TouchGFX\u4e2d\u7684\u6240\u6709\u4f4d\u56fe\u90fd\u4f1a\u751f\u6210.cpp\u6587\u4ef6\uff0c\u5b58\u653e\u5230generated/images/src\u6587\u4ef6\u5939\u4e2d\u3002 \u5728\u8fd9\u91cc\uff0c\u4f4d\u56fe\u88ab\u8868\u793a\u4e3a\u5b57\u8282\u6570\u7ec4\u3002"),(0,a.kt)("p",null,"\u4e0e\u5176\u5b83\u6e90\u7801\u6587\u4ef6\u4e00\u6837\uff0c\u8fd9\u4e9b\u4f4d\u56fe\u6570\u7ec4\u4f1a\u88abC++\u7f16\u8bd1\u5668\u94fe\u63a5\u5230\u5e94\u7528\u4e2d\u3002"),(0,a.kt)("p",null,"\u8fd9\u662f\u4e00\u4e2a\u7b80\u5355\u5e94\u7528\u7684\u5c4f\u5e55\u622a\u56fe\uff0c\u8be5\u5e94\u7528\u5305\u542b\u4e00\u4e2a\u6309\u94ae\u548c\u4e00\u4e2aTexture Mapper\u63a7\u4ef6\uff0c\u5176\u4e2dTexture Mapper\u63a7\u4ef6\u7528\u6765\u663e\u793a\u4e00\u4e2a\u65cb\u8f6c\u7684\u5fbd\u6807\uff1a"),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/scenarios/using-non-memory-mapped-flash/screen-shot.png",mdxType:"Figure"},"\u6309\u94ae\u548c\u7eb9\u7406\u6620\u5c04\u5668"),(0,a.kt)("p",null,"\u8be5\u5e94\u7528\u4f7f\u75283\u5f20\u56fe\u50cf\uff1aButton_Pressed\u3001Button_Released\u548cLogo\u3002"),(0,a.kt)("p",null,"\u8fd93\u5f20\u4f4d\u56fe\u88ab\u8f6c\u6362\u4e3a.cpp\u6587\u4ef6\uff0c\u5e76\u94fe\u63a5\u6210\u5e94\u7528\u7684\u4e00\u90e8\u5206\u3002 \u5728\u540d\u4e3abitmap_database\u7684\u8868\u4e2d\u5f15\u7528\u4f4d\u56fe\u3002 \u6b64\u8868\u4f4d\u4e8e\u6587\u4ef6BitmapDatabase.cpp\u4e2d\u3002 \u4e0b\u8868\u6765\u81ea\u4e0a\u9762\u7684\u793a\u4f8b\uff08\u5220\u9664\u4e86\u4e00\u4e9b\u7ec6\u8282\uff09\uff1a"),(0,a.kt)(o.Z,{mdxType:"CodeHeader"},"BitmapDatabase.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-cpp",metastring:"{5-5}","{5-5}":!0}),"extern const unsigned char _blue_buttons_round_edge_small[];\nextern const unsigned char _blue_buttons_round_edge_small_pressed[];\nextern const unsigned char _blue_logo_touchgfx_logo[];\n\nconst touchgfx::Bitmap::BitmapData bitmap_database[] =\n{\n    { _blue_buttons_round_edge_small, ... },\n    { _blue_buttons_round_edge_small_pressed, ... },\n    { _blue_logo_touchgfx_logo, ... }\n};\n\n")),(0,a.kt)("p",null,"\u9996\u5148\u58f0\u660e\u7684\u6570\u7ec4\u662f\u5305\u542b\u5404\u4f4d\u56fe\u7684\u50cf\u7d20\u6570\u636e\u7684\u6570\u7ec4\u3002 \u8fd9\u4e9b\u6570\u7ec4\u5728\u5176\u4ed6.cpp\u6587\u4ef6\u4e2d\u5b9a\u4e49\u3002 bitmap_database\u6570\u7ec4\u4fdd\u5b58\u4e86\u8fd9\u4e9b\u6570\u7ec4\u7684\u5730\u5740\u3002 TouchGFX\u4f7f\u7528\u6b64\u6570\u7ec4\u67e5\u627e\u4f4d\u56fe\u50cf\u7d20\u7684\u5730\u5740\u3002"),(0,a.kt)("p",null,"\u5f53\u7a0b\u5e8f\u5458\u8bf7\u6c42\u7f13\u5b58\u4f4d\u56fe\u65f6\uff0cTouchGFX\u67e5\u627e\u95ea\u5b58\u4e2d\u7684\u4f4d\u56fe\u5730\u5740\uff08\u5728bitmap_database\u6570\u7ec4\u4e2d\uff09\u5e76\u4ece\u8fd9\u91cc\u590d\u5236\u6570\u636e\u3002"),(0,a.kt)("h2",m({},{id:"linker-script-modifications"}),"\u94fe\u63a5\u811a\u672c\u4fee\u6539"),(0,a.kt)("p",null,"\u94fe\u63a5\u5668\u4e3a\u4f4d\u56fe\u9009\u62e9\u5730\u5740\u3002 \u6b64\u7c7b\u9009\u62e9\u57fa\u4e8e\u4f4d\u56fe\u6240\u5728\u7684\u6bb5\u3002 TouchGFX\u4e2d\u7684\u6240\u6709\u4f4d\u56fe\u9ed8\u8ba4\u653e\u5165",(0,a.kt)("strong",{parentName:"p"},"ExtFlashSection"),"\u4e2d\u3002"),(0,a.kt)("p",null,"\u6807\u51c6\u94fe\u63a5\u811a\u672c\uff08\u6b64\u5904\u662f\u5c31GCC\u800c\u8a00\uff09\u5c06\u6b64\u6bb5\u8fde\u540c\u5176\u4ed6\u53ea\u8bfb\u6570\u636e\u4e00\u8d77\u653e\u5165\u95ea\u5b58\u3002"),(0,a.kt)("p",null,"\u5728\u672c\u4f8b\u4e2d\uff0c\u6211\u4eec\u5c06\u56fe\u50cf\u6570\u636e\u653e\u5165ExtFlashSection\u4e2d\uff0c\u5730\u5740\u4e3a",(0,a.kt)("strong",{parentName:"p"},"0x24000000"),"\u3002 \u60a8\u53ef\u4ee5\u9009\u62e9\u672a\u5728\u5176\u4ed6\u5730\u65b9\u4f7f\u7528\u7684\u4efb\u4f55\u5730\u5740\uff08\u4e0d\u662f\u4ee3\u7801\u6216\u6570\u636e\u5730\u5740\u7a7a\u95f4\u7684\u4e00\u90e8\u5206\uff09\u3002"),(0,a.kt)("p",null,"\u9996\u5148\uff0c\u9664\u4e86\u666e\u901a\u7684\u5185\u90e8FLASH\u548cRAM\uff0c\u6211\u4eec\u5b9a\u4e49\u4e00\u4e2a\u65b0\u7684\u5b58\u50a8\u533a\uff08USB\u95ea\u5b58\u5730\u57400x24000000\uff09\uff1a"),(0,a.kt)(o.Z,{mdxType:"CodeHeader"},"STM32F746.ld"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{}),"MEMORY\n{\n  RAM (xrw)      : ORIGIN = 0x20000000, LENGTH = 320K\n  FLASH (rx)     : ORIGIN = 0x08000000, LENGTH = 1024K\n  USB(r)         : ORIGIN = 0x24000000, LENGTH = 1M\n}\n")),(0,a.kt)("p",null,"\u7136\u540e\uff0c\u6211\u4eec\u901a\u8fc7\u94fe\u63a5\u811a\u672c\u5c06ExtFlashSection\u653e\u5165USB\u533a\uff1a"),(0,a.kt)(o.Z,{mdxType:"CodeHeader"},"STM32F746.ld"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{}),"ExtFlashSection :\n{\n   *(ExtFlashSection ExtFlashSection.*)\n} >USB\n")),(0,a.kt)("p",null,"\u5728\u94fe\u63a5\u6210\u529f\u540e\uff0c\u53ef\u901a\u8fc7\u68c0\u67e5.map\u6587\u4ef6\uff08application.map\uff09\u6765\u68c0\u67e5\u4f4d\u56fe\u5730\u5740\u3002 \u4e0b\u9762\u662f\u76f8\u5173\u90e8\u5206\uff1a"),(0,a.kt)(o.Z,{mdxType:"CodeHeader"},"application.map"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{}),"ExtFlashSection\n                0x24000000    0x23ec0\n *(ExtFlashSection ExtFlashSection.*)\n ExtFlashSection\n                0x24000000    0x10000 TouchGFX/build/.../Blue_Logo_touchgfx_logo.o\n                0x24000000                _blue_logo_touchgfx_logo\n ExtFlashSection\n                0x24010000     0x9f60 TouchGFX/build/.../Blue_Buttons_Round_Edge_small.o\n                0x24010000                _blue_buttons_round_edge_small\n ExtFlashSection\n                0x24019f60     0x9f60 TouchGFX/build/.../Blue_Buttons_Round_Edge_small_pressed.o\n                0x24019f60                _blue_buttons_round_edge_small_pressed\n")),(0,a.kt)("p",null,"\u5728\u8fd9\u91cc\u6211\u4eec\u53ef\u4ee5\u770b\u5230\uff0c\u56fe\u50cf\u7684\u603b\u5927\u5c0f\u4e3a0x23ec0 = 147,136\u5b57\u8282\u3002 \u4fdd\u5b58\u4f4d\u56fe\u76843\u4e2a\u6570\u7ec4\u7684\u5730\u5740\u4ece0x24000000\u5f00\u59cb\u76f8\u7ee7\u6392\u5217\u3002"),(0,a.kt)("p",null,"\u73b0\u5728\uff0c\u5047\u8bbe\u60a8\u60f3\u8981\u5c06\u4f4d\u56fe\u6570\u636e\u5b58\u5230SD\u5361\u4e2d\u3002 \u6211\u4eec\u53ef\u4ee5\u7528\u7b80\u5355\u7684objcopy\u6307\u4ee4\u4ece.elf\u6587\u4ef6\u4e2d\u63d0\u53d6\u4f4d\u56fe\u7684\u4e8c\u8fdb\u5236\u6570\u636e\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{}),"$ arm-none-eabi-objcopy.exe --dump-section ExtFlashSection=images.bin TouchGFX/build/bin/target.elf\n$ ls -l images.bin\n-rw-r--r-- 1 christef Administrators 147136 Feb 20 11:56 images.bin\n")),(0,a.kt)("p",null,"\u8fd9\u6837\u53ef\u4ee5\u5f97\u5230\u4e00\u4e2a\u53ea\u5305\u542b\u56fe\u50cf\u5b57\u8282\u6570\u7ec4\u7684\u6587\u4ef6\uff08images.bin\uff09\u3002 \u6b64\u6587\u4ef6\u53ef\u4ee5\u590d\u5236\u5230USB\u95ea\u5b58\u3001SD\u5361\u751a\u81f3\u7f16\u7a0b\u5230\u95ea\u5b58\u82af\u7247\u3002"),(0,a.kt)("p",null,"\u73b0\u5728\u8981\u505a\u7684\u662f\uff0c\u5f53TouchGFX\u8bf7\u6c42\u5730\u57400x24000000\u4ee5\u4e0a\u7684\u6570\u636e\u65f6\uff0c\u6211\u4eec\u4eceSD\u5361\u4e0a\u7684images.bin\u6587\u4ef6\u83b7\u53d6\u6570\u636e\u3002"),(0,a.kt)("h2",m({},{id:"modifying-the-blockcopy-function"}),"\u4fee\u6539BlockCopy\u51fd\u6570"),(0,a.kt)("p",null,"\u8bb0\u4f4f\uff0c\u5728\u5c06\u4f4d\u56fe\u7f13\u5b58\u5230RAM\u65f6\uff0cTouchGFX\u8c03\u7528HAL::BlockCopy\u4ee5\u83b7\u53d6\u6570\u636e\u3002"),(0,a.kt)("p",null,"\u4e3a\u4e86\u5173\u8054\u4e0aSD\u5361\u4e2d\u7684\u6570\u636e\uff0c\u6211\u4eec\u53ef\u4ee5\u5728\u7279\u5b9aHAL\u7c7b\u4e2d\u5b9e\u73b0\u65b0\u7684BlockCopy\u3002 \u8fd9\u91cc\u6211\u4eec\u5047\u8bbe\u7c7b\u7684\u540d\u79f0\u4e3aTouchGFXHAL\uff08\u7531TouchGFX Generator\u751f\u6210\uff09\uff1a"),(0,a.kt)(o.Z,{mdxType:"CodeHeader"},"TouchGFXHal.hpp"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-cpp"}),"class TouchGFXHAL : public TouchGFXGeneratedHAL\n{\npublic:\n    ...\n    virtual bool blockCopy(void* RESTRICT dest, const void* RESTRICT src, uint32_t numBytes);\n}\n")),(0,a.kt)(o.Z,{mdxType:"CodeHeader"},"TouchGFXHal.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-cpp"}),"// This function is called whenever a bitmap is cached. \u5fc5\u987b\u4ece\uff08\u975e\u5185\u5b58\u6620\u5c04\uff09\u6e90//\u590d\u5236\u591a\u4e2a\u5b57\u8282\u5230\u7f13\u5b58\u3002\nbool TouchGFXHAL::blockCopy(void* RESTRICT dest, const void* RESTRICT src, uint32_t numBytes)\n{\n  // If requested data is located within the memory block we have assigned for ExtFlashSection,\n  // provide an implementation for data copying.\n  if (src >= 0x24000000 && src < 0x24100000)\n  {\n    void* dataOffset = src - 0x24000000;\n    // In this example we assume graphics is placed in SD card, and that we have an appropriate function\n    // for copying data from there.\n    sdcard_read(dest, dataOffset, numBytes);\n    return true;\n  }\n  else\n  {\n    // For all other addresses, just use the default implementation.\n    // This is important, as blockCopy is also used for other things in the core framework.\n    return HAL::blockCopy(dest, src, numBytes);\n  }\n}\n")),(0,a.kt)("p",null,"\u73b0\u5728\uff0c\u53ef\u4ee5\u5f00\u59cb\u4eceSD\u5361\u7f13\u5b58\u4f4d\u56fe\u3002"),(0,a.kt)("p",null,"\u5982\u679cTouchGFX\u5c1d\u8bd5\u7ed8\u5236\u6ca1\u6709\u7f13\u5b58\u7684\u4f4d\u56fe\uff0c\u5b83\u5c06\u5c1d\u8bd5\u4ece",(0,a.kt)("inlineCode",{parentName:"p"},"bitmap_database"),"\u8868\u4e2d\u627e\u5230\u7684\u5730\u5740\u8bfb\u53d6\u50cf\u7d20\u3002 \u6b64\u5730\u5740\u5c06\u5904\u4e8e\u8303\u56f40x24000000 - 0x24100000\u4ee5\u5185\uff0c\u76f4\u63a5\u8bfb\u53d6\u5c06\u5bfc\u81f4\u5f02\u5e38\u3002"),(0,a.kt)("h2",m({},{id:"linking-images-to-ram"}),"\u5c06\u56fe\u50cf\u94fe\u63a5\u5230RAM"),(0,a.kt)("p",null,"\u5982\u679c\u53ef\u7528RAM\u8db3\u591f\u5927\uff0c\u80fd\u591f\u5b58\u50a8\u6240\u6709\u56fe\u50cf\uff08\u5728\u4e0a\u9762\u7684\u4f8b\u5b50\u4e2d\uff0cRAM\u5927\u4e8e147,136\u5b57\u8282\uff09\uff0c\u5219\u65e0\u9700\u4f7f\u7528\u4f4d\u56fe\u7f13\u5b58\u6765\u590d\u5236\u56fe\u50cf\u3002"),(0,a.kt)("p",null,"\u7b56\u7565\u5982\u4e0b\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4e3a\u56fe\u50cf\u9009\u62e9RAM\u4e2d\u7684\u56fa\u5b9a\u5730\u5740\u548c\u8303\u56f4"),(0,a.kt)("li",{parentName:"ul"},"\u5728\u94fe\u63a5\u811a\u672c\u4e2d\u5220\u9664RAM\u533a\u4e2d\u7684\u8fd9\u4e00\u8303\u56f4"),(0,a.kt)("li",{parentName:"ul"},"\u521b\u5efa\u5177\u6709\u9009\u5b9a\u5730\u5740\u548c\u5927\u5c0f\u7684\u65b0\u533aIMAGES"),(0,a.kt)("li",{parentName:"ul"},"\u5c06ExtFlashSection\u653e\u5728IMAGES\u533a"),(0,a.kt)("li",{parentName:"ul"},"\u94fe\u63a5\u5e94\u7528\u5e76\u68c0\u67e5.map\u6587\u4ef6"),(0,a.kt)("li",{parentName:"ul"},"\u4eceapplication.elf\u521b\u5efaimages.bin\u6587\u4ef6"),(0,a.kt)("li",{parentName:"ul"},"\u5728\u542f\u52a8TouchGFX\u4e4b\u524d\uff0c\u5c06\u6574\u4e2aimages.bin\u6587\u4ef6\u4eceSD\u5361\u590d\u5236\u5230RAM\u4e2d\u7684\u9009\u5b9a\u5730\u5740")),(0,a.kt)("p",null,"\u8be5\u89e3\u51b3\u65b9\u6848\u8f83\u4e3a\u7b80\u5355\uff0c\u4f46\u6709\u4e00\u4e9b\u7f3a\u70b9\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u53ef\u7528RAM\u5fc5\u987b\u8db3\u591f\u5927\uff0c\u80fd\u591f\u4fdd\u5b58\u6240\u6709\u56fe\u50cf"),(0,a.kt)("li",{parentName:"ul"},"\u7531\u4e8e\u8981\u4eceSD\u5361\u590d\u5236\uff0c\u56e0\u6b64\u542f\u52a8\u65f6\u95f4\u4f1a\u6bd4\u8f83\u957f\uff08\u5146\u5b57\u8282\u53ef\u80fd\u9700\u8981\u6570\u79d2\uff09")))}x.isMDXComponent=!0}}]);