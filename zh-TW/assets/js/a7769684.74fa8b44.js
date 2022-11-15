"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[1657],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return u}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),o=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},m=function(e){var t=o(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),s=o(n),u=i,g=s["".concat(l,".").concat(u)]||s[u]||d[u]||r;return n?a.createElement(g,p(p({ref:t},m),{},{components:n})):a.createElement(g,p({ref:t},m))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,p=new Array(r);p[0]=s;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,p[1]=c;for(var o=2;o<r;o++)p[o]=n[o];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},22425:function(e,t,n){var a=n(67294);class i extends a.Component{render(){return a.createElement("div",{className:"code-header"},a.createElement("div",null,a.createElement("h5",null,this.props.children)))}}t.Z=i},44035:function(e,t,n){var a=n(67294),i=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,r=e.height,p=(0,i.Z)(e.imageSource);return t?a.createElement("div",{className:"figure noshadow"},a.createElement("a",{href:p,target:"_blank"},a.createElement("img",{width:n,height:r,src:p})),a.createElement("p",null,e.children)):a.createElement("div",{className:"figure"},a.createElement("a",{href:p,target:"_blank"},a.createElement("img",{width:n,height:r,src:p})),a.createElement("p",null,e.children))}},60902:function(e,t,n){n.r(t),n.d(t,{assets:function(){return b},contentTitle:function(){return f},default:function(){return v},frontMatter:function(){return g},metadata:function(){return h},toc:function(){return y}});var a=n(3905),i=n(44035),r=n(22425),p=Object.defineProperty,c=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))m.call(t,n)&&s(e,n,t[n]);if(o)for(var n of o(t))d.call(t,n)&&s(e,n,t[n]);return e};const g={id:"dynamic-bitmaps",title:"\u52d5\u614b\u9ede\u9663\u5716"},f=void 0,h={unversionedId:"development/ui-development/touchgfx-engine-features/dynamic-bitmaps",id:"development/ui-development/touchgfx-engine-features/dynamic-bitmaps",title:"\u52d5\u614b\u9ede\u9663\u5716",description:"",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/development/ui-development/touchgfx-engine-features/dynamic-bitmaps.mdx",sourceDirName:"development/ui-development/touchgfx-engine-features",slug:"/development/ui-development/touchgfx-engine-features/dynamic-bitmaps",permalink:"/4.20/zh-TW/docs/development/ui-development/touchgfx-engine-features/dynamic-bitmaps",draft:!1,tags:[],version:"current",frontMatter:{id:"dynamic-bitmaps",title:"\u52d5\u614b\u9ede\u9663\u5716"},sidebar:"docs",previous:{title:"Canvas Widgets",permalink:"/4.20/zh-TW/docs/development/ui-development/touchgfx-engine-features/canvas-widgets"},next:{title:"\u4e8c\u9032\u4f4d\u5b57\u9ad4",permalink:"/4.20/zh-TW/docs/development/ui-development/touchgfx-engine-features/using-binary-fonts"}},b={},y=[{value:"\u52d5\u614b\u9ede\u9663\u5716\u914d\u7f6e",id:"dynamic-bitmap-configuration",level:2},{value:"\u4f7f\u7528\u52d5\u614b\u9ede\u9663\u5716\u7bc4\u4f8b",id:"using-a-dynamic-bitmap-example",level:2},{value:"\u52d5\u614b\u9ede\u9663\u5716\u64cd\u4f5c",id:"dynamic-bitmap-operations",level:2},{value:"\u5275\u5efa\u52d5\u614b\u9ede\u9663\u5716",id:"creating-a-dynamic-bitmap",level:3},{value:"\u522a\u9664\u52d5\u614b\u9ede\u9663\u5716",id:"deleting-a-dynamic-bitmap",level:3},{value:"\u7372\u53d6\u52d5\u614b\u9ede\u9663\u5716\u4e2d\u50cf\u7d20\u7684\u4f4d\u5740",id:"get-the-address-of-the-pixels-in-a-dynamic-bitmap",level:3},{value:"\u8a2d\u7f6e\u52d5\u614b\u9ede\u9663\u5716\u7684\u5be6\u5fc3\u5340\u57df",id:"set-the-solid-area-of-a-dynamic-bitmap",level:3},{value:"\u8c4e\u5c4f\u6a21\u5f0f\u7684\u52d5\u614b\u9ede\u9663\u5716",id:"dynamic-bitmap-in-portrait-mode",level:2}],k={toc:y};function v(e){var t,n=e,{components:p}=n,s=((e,t)=>{var n={};for(var a in e)m.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&o)for(var a of o(e))t.indexOf(a)<0&&d.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=u(u({},k),s),c(t,l({components:p,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"\u672c\u7bc0\u4ecb\u7d39\u5982\u4f55\u4f7f\u7528\u52d5\u614b\u9ede\u9663\u5716\u3002 \u6ce8\u610f\uff0c\u6a19\u6e96\u9ede\u9663\u5716\u6703\u88ab\u7de8\u8b6f\u5230\u61c9\u7528\u4e2d\uff0c\u56e0\u6b64\u5fc5\u9808\u5728\u7de8\u8b6f\u6642\u63d0\u4f9b\u3002 \u9ede\u9663\u5716\u5f9ePNG\u7b49\u683c\u5f0f\u7684\u6a94\u6848\u8f49\u63db\u800c\u4f86\uff0c\u8207\u5927\u5c0f\u548c\u683c\u5f0f\u8cc7\u8a0a\u4e00\u8d77\u4ee5\u5167\u90e8\u683c\u5f0f\u4fdd\u5b58\u3002"),(0,a.kt)("p",null,"\u6b64\u5916\uff0c\u9084\u53ef\u4ee5\u5728\u57f7\u884c\u6642\u9593\u5728RAM\u4e2d\u5275\u5efa\u9ede\u9663\u5716\u3002 \u9019\u88ab\u7a31\u70ba",(0,a.kt)("em",{parentName:"p"},"\u52d5\u614b\u9ede\u9663\u5716"),"\u3002 \u52d5\u614b\u9ede\u9663\u5716\u7684\u4f7f\u7528\u8207\u7de8\u8b6f\u5230\u61c9\u7528\u4e2d\u7684\u975c\u614b\u9ede\u9663\u5716\u76f8\u540c\u3002 \u9019\u610f\u5473\u8457\u60a8\u53ef\u4ee5\u901a\u904e\u5716\u50cf\u548c\u6309\u9215\u7b49\u5c0f\u90e8\u4ef6\u4f7f\u7528\u52d5\u614b\u9ede\u9663\u5716\u3002"),(0,a.kt)("h2",u({},{id:"dynamic-bitmap-configuration"}),"\u52d5\u614b\u9ede\u9663\u5716\u914d\u7f6e"),(0,a.kt)("p",null,"\u5728\u5275\u5efa\u52d5\u614b\u9ede\u9663\u5716\u6642\uff0c\u5f9e\u9ede\u9663\u5716\u5feb\u53d6\u5206\u914d\u50cf\u7d20\u5b58\u5132\u7a7a\u9593\u3002 \u56e0\u6b64\uff0c\u60a8\u5fc5\u9808\u5148\u914d\u7f6e\u9ede\u9663\u5716\u5feb\u53d6\uff0c\u7136\u5f8c\u624d\u80fd\u5275\u5efa\u52d5\u614b\u9ede\u9663\u5716\u3002 \u9019\u662f\u4e00\u500b\u4e0d\u80fd\u5728TouchGFX Designer\u6216Generator\u4e2d\u57f7\u884c\u7684\u624b\u52d5\u904e\u7a0b\u3002"),(0,a.kt)("p",null,"\u53c3\u898b\u95dc\u65bc",(0,a.kt)("a",u({parentName:"p"},{href:"caching-bitmaps"}),"\u9ede\u9663\u5716\u5feb\u53d6"),"\u7684\u6587\u7ae0\u7372\u53d6\u914d\u7f6e\u8aaa\u660e\u3002"),(0,a.kt)("p",null,"\u5fc5\u9808\u5b9a\u7fa9\u61c9\u7528\u4e2d\u4f7f\u7528\u7684\u52d5\u614b\u9ede\u9663\u5716\u7684\u6700\u5927\u6578\u91cf\u3002 \u8a72\u6700\u5927\u503c\u8207\u9ede\u9663\u5716\u5feb\u53d6\u4f4d\u5740\u548c\u5927\u5c0f\u4e00\u8d77\u50b3\u905e\u5230TouchGFX\u3002 \u9019\u88e1\u6211\u5011\u914d\u7f6e\u7684\u662f\u5177\u6709\u6700\u591a",(0,a.kt)("strong",{parentName:"p"},"4"),"\u5f35\u52d5\u614b\u9ede\u9663\u5716\u7684\u9ede\u9663\u5716\u5feb\u53d6\u3002 \u60a8\u53ef\u4ee5\u5728\u61c9\u7528\u4e2d\u7684\u4efb\u4f55\u6a94\u4e2d\u57f7\u884c\u3002 \u5982\u9700\u53ea\u57f7\u884c\u4e00\u6b21\uff0c\u6a94FrontendApplication.cpp\u662f\u500b\u4e0d\u932f\u7684\u9078\u64c7\uff1a"),(0,a.kt)(r.Z,{mdxType:"CodeHeader"},"FrontendApplication.cpp (extract)"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-cpp",metastring:"{2-2,10-10}","{2-2,10-10}":!0}),"#include <gui/common/FrontendApplication.hpp>\n#include <touchgfx/Bitmap.hpp>\n\nFrontendApplication::FrontendApplication(Model& m, FrontendHeap& heap)\n    : FrontendApplicationBase(m, heap)\n{\n    // Place cache start address in SDRAM at address 0xC0008000;\n    uint16_t* const cacheStartAddr = (uint16_t*)0xC0008000;\n    const uint32_t cacheSize = 0x300000; //3 MB, as example\n    Bitmap::setCache(cacheStartAddr, cacheSize, 4);\n}\n")),(0,a.kt)("p",null,"\u5982\u679c\u60a8\u4f7f\u7528Windows\u6a21\u64ec\u5668\uff0c\u5247\u9084\u5fc5\u9808\u5728\u6b64\u5275\u5efa\u9ede\u9663\u5716\u5feb\u53d6\u3002 \u5728Windows\u4e0a\uff0c\u53ef\u4ee5\u5bb9\u6613\u5730\u5ba3\u544a\u5927\u9663\u5217\u6216\u4f7f\u7528malloc\uff1a"),(0,a.kt)(r.Z,{mdxType:"CodeHeader"},"FrontendApplication.cpp (extract)"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-cpp",metastring:"{9-10}","{9-10}":!0}),"#include <gui/common/FrontendApplication.hpp>\n#include <touchgfx/Bitmap.hpp>\n\nFrontendApplication::FrontendApplication(Model& m, FrontendHeap& heap)\n    : FrontendApplicationBase(m, heap)\n{\n#ifdef SIMULATOR\n    const uint32_t cacheSize = 0x300000; //3 MB, as example\n    uint16_t* const cacheStartAddr = (uint16_t*)malloc(cacheSize);\n    Bitmap::setCache(cacheStartAddr, cacheSize, 4);\n#else\n    // Place cache start address in SDRAM at address 0xC0008000;\n    uint16_t* const cacheStartAddr = (uint16_t*)0xC0008000;\n    const uint32_t cacheSize = 0x300000; //3 MB, as example\n    Bitmap::setCache(cacheStartAddr, cacheSize, 4);\n#endif\n}\n")),(0,a.kt)("h2",u({},{id:"using-a-dynamic-bitmap-example"}),"\u4f7f\u7528\u52d5\u614b\u9ede\u9663\u5716\u7bc4\u4f8b"),(0,a.kt)("p",null,"\u70ba\u4e86\u4f7f\u7528\u52d5\u614b\u9ede\u9663\u5716\uff0c\u6211\u5011\u9700\u8981\u4e00\u500b\u5c0f\u90e8\u4ef6\u4f86\u986f\u793a\u5b83\u3002 \u70ba\u6b64\uff0c\u5728\u8996\u5716\uff08\u5728\u7a0b\u5f0f\u78bc\u4e2d\u6216Designer\u4e2d\uff09\u4e2d\u63d2\u5165\u4e00\u500b\u5716\u50cf\u5c0f\u90e8\u4ef6\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-cpp",metastring:"{6-6}","{6-6}":!0}),"#include <touchgfx/widgets/Image.hpp>\nusing namespace touchgfx;\nclass TemplateView : public View\n{\nprivate:\n    Image image;\n}\n")),(0,a.kt)("p",null,"\u6b64\u5c0f\u90e8\u4ef6\u548c\u52d5\u614b\u9ede\u9663\u5716\u7684\u4f7f\u7528\u904e\u7a0b\u5206\u70ba\u4e09\u6b65\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5728\u9ede\u9663\u5716\u5feb\u53d6\u4e2d\u5275\u5efa\u52d5\u614b\u9ede\u9663\u5716"),(0,a.kt)("li",{parentName:"ol"},"\u6e05\u7a7a\u52d5\u614b\u9ede\u9663\u5716\u4f7f\u7528\u7684\u5b58\u5132\u7a7a\u9593"),(0,a.kt)("li",{parentName:"ol"},"\u5c07\u9ede\u9663\u5716\u5206\u914d\u7d66\u5c0f\u90e8\u4ef6")),(0,a.kt)("p",null,"\u5728setupScreen\u4e2d\u5275\u5efa\u52d5\u614b\u9ede\u9663\u5716\u3002 \u9019\u88e1\u6211\u5011\u4f7f\u752816bpp\u683c\u5f0fRGB565\u3002 \u5982\u679c\u5f71\u50cf\u7de9\u885d\u70ba24\u4f4d\uff0c\u5247\u4f7f\u7528RGB888\u3002 \u5982\u9700\u5275\u5efa\u900f\u660e\u9ede\u9663\u5716\uff0c\u4f7f\u7528\u683c\u5f0fARGB8888\u3002"),(0,a.kt)("p",null,"\u901a\u904edynamicBitmapGetAddress\u51fd\u6578\u8fd4\u56de\u52d5\u614b\u9ede\u9663\u5716\u4e2d\u50cf\u7d20\u7684\u4f4d\u5740\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-cpp",metastring:"{9-9,14-14}","{9-9,14-14}":!0}),"#include <touchgfx/Bitmap.hpp>\nvoid TemplateView::setupScreen()\n{\n    BitmapId bmpId;\n\n    //Create (16bit) dynamic bitmap of size 100x150\n    const int width = 100;\n    const int height = 150;\n    bmpId = Bitmap::dynamicBitmapCreate(100, 150, Bitmap::RGB565);\n\n    //set all pixels white\n    if (bmpId != BITMAP_INVALID)\n    {\n       memset(Bitmap::dynamicBitmapGetAddress(bmpId), 0xFF, width*height*2);\n    }\n\n    //Make Image widget show the dynamic bitmap\n    image.setBitmap(Bitmap(bmpId));\n\n    //Position image and add to View\n    image.setXY(20, 20);\n    add(image);\n    ...\n}\n")),(0,a.kt)("p",null,"\u60a8\u5f9e\u9ede\u9663\u5716\u5feb\u53d6\u7372\u5f97\u7684\u50cf\u7d20\u5b58\u5132\u7a7a\u9593\u672a\u6e05\u7a7a\uff0c\u5efa\u8b70\u7acb\u5373\u5c07\u5176\u6e05\u7a7a\u6216\u91cd\u5beb\u3002"),(0,a.kt)("p",null,"\u5982\u9700\u5f9e\u6a94\u6848\u8f09\u5165\u5716\u50cf\uff0c\u53ef\u4ee5\u7528\u8f09\u5165\u5668\u7a0b\u5f0f\u78bc\u66ff\u4ee3\u5c0dmemset\u7684\u547c\u53eb\u3002 \u53c3\u898b\u6587\u7ae0",(0,a.kt)("a",u({parentName:"p"},{href:"../scenarios/loading-images-at-runtime"}),"\u5728\u57f7\u884c\u6642\u9593\u8f09\u5165\u5716\u50cf")),(0,a.kt)("h2",u({},{id:"dynamic-bitmap-operations"}),"\u52d5\u614b\u9ede\u9663\u5716\u64cd\u4f5c"),(0,a.kt)("p",null,"\u52d5\u614b\u9ede\u9663\u5716\u64cd\u4f5c\u5168\u90e8\u4f4d\u65bc",(0,a.kt)("a",u({parentName:"p"},{href:"../../../api/classes/classtouchgfx_1_1_bitmap"}),"Bitmap"),"\u985e\u4e2d\u3002"),(0,a.kt)("h3",u({},{id:"creating-a-dynamic-bitmap"}),"\u5275\u5efa\u52d5\u614b\u9ede\u9663\u5716"),(0,a.kt)("p",null,"\u4ee5\u4e0b\u65b9\u6cd5\u7528\u6307\u5b9a\u7684\u5bec\u5ea6\u3001\u9ad8\u5ea6\u548c\u9ede\u9663\u5716\u683c\u5f0f\u5275\u5efa\u52d5\u614b\u9ede\u9663\u5716\u3002 \u50c5\u7576\u6709\u8db3\u5920\u5927\u7684\u672a\u4f7f\u7528\u5b58\u5132\u7a7a\u9593\u6642\uff0c\u624d\u80fd\u5275\u5efa\u9ede\u9663\u5716\u3002 \u5982\u679c\u672a\u5275\u5efa\u9ede\u9663\u5716\uff0c\u8a72\u65b9\u6cd5\u8fd4\u56deBITMAP_INVALID\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-cpp"}),"static BitmapId Bitmap::dynamicBitmapCreate(const uint16_t width, const uint16_t height, BitmapFormat format, ClutFormat clutFormat)\n")),(0,a.kt)("h3",u({},{id:"deleting-a-dynamic-bitmap"}),"\u522a\u9664\u52d5\u614b\u9ede\u9663\u5716"),(0,a.kt)("p",null,"\u6b64\u65b9\u6cd5\u522a\u9664\u52d5\u614b\u9ede\u9663\u5716\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-cpp"}),"static bool Bitmap::dynamicBitmapDelete(BitmapId id)\n")),(0,a.kt)("h3",u({},{id:"get-the-address-of-the-pixels-in-a-dynamic-bitmap"}),"\u7372\u53d6\u52d5\u614b\u9ede\u9663\u5716\u4e2d\u50cf\u7d20\u7684\u4f4d\u5740"),(0,a.kt)("p",null,"\u4ee5\u4e0b\u65b9\u6cd5\u8fd4\u56de\u52d5\u614b\u9ede\u9663\u5716\u7684\u4f4d\u5740\u3002 \u6a94\u6848\u8f09\u5165\u5668\u4f7f\u7528\u6b64\u65b9\u6cd5\u5c07\u5716\u50cf\u8cc7\u6599\u8907\u88fd\u5230\u9ede\u9663\u5716\u4e2d\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-cpp"}),"static uint8_t* dynamicBitmapGetAddress(BitmapId id)\n")),(0,a.kt)("h3",u({},{id:"set-the-solid-area-of-a-dynamic-bitmap"}),"\u8a2d\u7f6e\u52d5\u614b\u9ede\u9663\u5716\u7684\u5be6\u5fc3\u5340\u57df"),(0,a.kt)("p",null,"\u4ee5\u4e0b\u65b9\u6cd5\u8a2d\u7f6e\u52d5\u614b\u9ede\u9663\u5716\u7684\u5be6\u5fc3\u77e9\u5f62\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-cpp"}),"static bool dynamicBitmapSetSolidRect(BitmapId id, const Rect& solidRect)\n")),(0,a.kt)("p",null,"\u8acb\u95b1\u8b80",(0,a.kt)("a",u({parentName:"p"},{href:"custom-widgets#solid-area"}),"Custom Widget"),"\u4e00\u7bc0\u4e2d\u95dc\u65bc\u201c\u5be6\u5fc3\u5340\u57df\u201d\u6982\u5ff5\u7684\u66f4\u591a\u5167\u5bb9\u3002"),(0,a.kt)("p",null,"\u5c0d\u65bc\u50cfRGB565\u548cRGB888\u9019\u6a23\u7684\u975e\u900f\u660e\u683c\u5f0f\uff0c\u5c07\u5be6\u5fc3\u5340\u57df\u9810\u8a2d\u8a2d\u7f6e\u70ba\u6574\u500b\u9ede\u9663\u5716\u3002 \u5c0d\u65bc\u50cfARGB8888\u9019\u6a23\u7684\u900f\u660e\u683c\u5f0f\uff0c\u5c07\u5be6\u5fc3\u5340\u57df\u8a2d\u7f6e\u70ba\u7a7a\u3002"),(0,a.kt)("h2",u({},{id:"dynamic-bitmap-in-portrait-mode"}),"\u8c4e\u5c4f\u6a21\u5f0f\u7684\u52d5\u614b\u9ede\u9663\u5716"),(0,a.kt)("p",null,"TouchGFX\u80fd\u4ee5\u8c4e\u5c4f\u6a21\u5f0f\u904b\u884c\u3002 \u9019\u9069\u7528\u65bc\u986f\u793a\u5668\u81ea\u5176\u539f\u59cb\u65b9\u5411\u65cb\u8f4990\u5ea6\u5f8c\u5b89\u88dd\u7684\u60c5\u6cc1\u3002 \u5728\u8a72\u6a21\u5f0f\u4e0b\u4f7f\u7528\u52d5\u614b\u9ede\u9663\u5716\u6642\uff0c\u9700\u8981\u683c\u5916\u5c0f\u5fc3\u3002"),(0,a.kt)("p",null,"\u4e0b\u9762\u662fSTM32F746\u7684\u5c08\u6848\u7bc4\u4f8b\u3002 \u5b83\u7684\u986f\u793a\u5668\u5bec\u5ea6\u70ba480\u50cf\u7d20\uff0c\u9ad8\u5ea6\u70ba272\u50cf\u7d20\u3002 \u5f71\u50cf\u7de9\u885d\u5177\u6709\u76f8\u540c\u5927\u5c0f\u3002"),(0,a.kt)(i.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/dynamic-bitmaps/designer-portrait.png",noShadow:"true",width:"480",mdxType:"Figure"},"\u8c4e\u5c4f\u5c08\u6848"),(0,a.kt)("p",null,"\u6c92\u6709\u70baimage1\u5716\u50cf\u5c0f\u90e8\u4ef6\u5206\u914d\u9ede\u9663\u5716\u3002 \u6211\u5011\u5c07\u4f7f\u7528\u5b83\u986f\u793a\u52d5\u614b\u9ede\u9663\u5716\u3002"),(0,a.kt)("p",null,"\u5728\u4f7f\u7528\u8c4e\u5c4f\u6a21\u5f0f\u6642\uff0c\u5750\u6a19\u7cfb\u7d71\u6cbf\u9006\u6642\u91dd\u65b9\u5411\u65cb\u8f4990\u5ea6\u3002 (0, 0) \u5ea7\u6a19\u4f4d\u65bc\u201cD\u201d\u9644\u8fd1\u7684\u5de6\u4e0a\u89d2\u3002 \u5f71\u50cf\u7de9\u885d\u7684\u7b2c\u4e00\u500b\u4f4d\u5143\u7d44\uff08\u5c07\u87a2\u5e55\u4e0a\u7b2c\u4e00\u500b\u50cf\u7d20\u8457\u8272\uff09\uff0c\u4f4d\u65bc\u53f3\u4e0a\u89d2\u3002"),(0,a.kt)("p",null,"\u56e0\u6b64\uff0c\u7576\u4ee5\u8c4e\u5c4f\u6a21\u5f0f\u904b\u884c\u6642\uff0c",(0,a.kt)("em",{parentName:"p"},"\u4e0d"),"\u65cb\u8f49\u5f71\u50cf\u7de9\u885d\u3002 This is also true for dynamic bitmaps. But the pixels we want to be shown on first line on the display (as mounted) must be drawn on the left edge in the framebuffer."),(0,a.kt)("p",null,"\u5728\u4e0b\u9762\u7684\u51fd\u6578\u4e2d\u5275\u5efa\u52d5\u614b\u9ede\u9663\u5716\uff0c\u4f7f\u4e0a\u9762\u4e00\u884c\u70ba\u7da0\u8272\u4e14\u53f3\u908a\u7de3\u70ba\u7d05\u8272\uff1a"),(0,a.kt)(r.Z,{mdxType:"CodeHeader"},"Screen1View.cpp (extract)"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-cpp",metastring:"{13-14,16-21}","{13-14,16-21}":!0}),"void Screen1View::setupScreen()\n{\n    Screen1ViewBase::setupScreen();\n    BitmapId bmpId;\n    bmpId = Bitmap::dynamicBitmapCreate(100, 100, Bitmap::RGB565);\n\n    if (bmpId != BITMAP_INVALID)\n    {\n        //set all pixels white\n        uint16_t* const bitmapPixels = (uint16_t*)Bitmap::dynamicBitmapGetAddress(bmpId);\n        memset(bitmapPixels, 0xFF, 100*100*2);\n\n        //first 200 pixels red, => two column on the right on display\n        for (int i = 0; i<200; i++) bitmapPixels[i] = 0xF800;\n\n        //first two pixels in all rows green in bitmap => top two rows on display\n        for (int i = 0; i<100; i++)\n        {\n            bitmapPixels[i*100]     = 0x07E0;\n            bitmapPixels[i*100 + 1] = 0x07E0;\n        }\n    }\n\n    image1.setBitmap(bmpId);\n}\n")),(0,a.kt)("p",null,"\u986f\u793a\u5668\u986f\u793a\u52d5\u614b\u9ede\u9663\u5716\uff1a"),(0,a.kt)(i.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/dynamic-bitmaps/stm32f746-portrait.png",noShadow:"true",width:"272",mdxType:"Figure"},"\u8c4e\u5c4f\u5c08\u6848\u5f71\u50cf\u7de9\u885d\u5167\u5bb9"))}v.isMDXComponent=!0}}]);