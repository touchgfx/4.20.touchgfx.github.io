"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[614],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=c(n),d=a,g=f["".concat(u,".").concat(d)]||f[d]||p[d]||o;return n?r.createElement(g,i(i({ref:t},s),{},{components:n})):r.createElement(g,i({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},44035:function(e,t,n){var r=n(67294),a=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,o=e.height,i=(0,a.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:i,target:"_blank"},r.createElement("img",{width:n,height:o,src:i})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:i,target:"_blank"},r.createElement("img",{width:n,height:o,src:i})),r.createElement("p",null,e.children))}},6498:function(e,t,n){n.r(t),n.d(t,{assets:function(){return h},contentTitle:function(){return g},default:function(){return b},frontMatter:function(){return d},metadata:function(){return m},toc:function(){return y}});var r=n(3905),a=n(44035),o=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,f=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&p(e,n,t[n]);if(u)for(var n of u(t))s.call(t,n)&&p(e,n,t[n]);return e};const d={id:"using-binary-translations",title:"\u4e8c\u8fdb\u5236\u7ffb\u8bd1"},g=void 0,m={unversionedId:"development/ui-development/touchgfx-engine-features/using-binary-translations",id:"development/ui-development/touchgfx-engine-features/using-binary-translations",title:"\u4e8c\u8fdb\u5236\u7ffb\u8bd1",description:"",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/ui-development/touchgfx-engine-features/using-binary-translations.mdx",sourceDirName:"development/ui-development/touchgfx-engine-features",slug:"/development/ui-development/touchgfx-engine-features/using-binary-translations",permalink:"/4.20/zh-CN/docs/development/ui-development/touchgfx-engine-features/using-binary-translations",draft:!1,tags:[],version:"current",frontMatter:{id:"using-binary-translations",title:"\u4e8c\u8fdb\u5236\u7ffb\u8bd1"},sidebar:"docs",previous:{title:"\u5b57\u4f53\u7f13\u5b58",permalink:"/4.20/zh-CN/docs/development/ui-development/touchgfx-engine-features/font-cache"},next:{title:"\u540e\u7aef\u901a\u4fe1",permalink:"/4.20/zh-CN/docs/development/ui-development/touchgfx-engine-features/backend-communication"}},h={},y=[{value:"\u7ffb\u8bd1",id:"translations",level:3},{value:"\u914d\u7f6e\u6587\u672c\u8f6c\u6362\u5668",id:"configuring-the-text-converter",level:3},{value:"\u5b89\u88c5\u4e8c\u8fdb\u5236\u7ffb\u8bd1",id:"installing-a-binary-translation",level:3}],v={toc:y};function b(e){var t,n=e,{components:o}=n,p=((e,t)=>{var n={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&u)for(var r of u(e))t.indexOf(r)<0&&s.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=f(f({},v),p),i(t,l({components:o,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"\u672c\u8282\u63cf\u8ff0\u5982\u4f55\u5728TouchGFX\u4e2d\u4f7f\u7528\u4e8c\u8fdb\u5236\u7ffb\u8bd1\u3002 \u6b63\u5e38\u60c5\u51b5\u4e0b\uff0c\u6587\u672c\u7ffb\u8bd1\u6587\u4ef6\u4f1a\u88ab\u7f16\u8bd1\u5230\u5e94\u7528\u4e2d\u3002 \u8fd9\u4e00\u539f\u5219\u9ad8\u6548\u4e14\u6613\u4e8e\u4f7f\u7528\u3002 \u4e8c\u8fdb\u5236\u7ffb\u8bd1\u4f7f\u5e94\u7528\u7a0b\u5e8f\u4e0d\u542b\u6587\u672c\u7ffb\u8bd1\u3002 \u4e8c\u8fdb\u5236\u7ffb\u8bd1\u5728\u5355\u72ec\u7684\u4e8c\u8fdb\u5236\u6587\u4ef6\u4e2d\u751f\u6210\uff0c\u8be5\u6587\u4ef6\u53ef\u7f16\u7a0b\u5230\u95ea\u5b58\u4e2d\u6216\u5b58\u50a8\u5728SD\u5361\u7b49\u5b58\u50a8\u8bbe\u5907\u4e0a\u3002  \u5728\u5904\u7406\u5927\u91cf\u7ffb\u8bd1\u6587\u4ef6\u65f6\uff0c\u4e3a\u5e94\u7528\u5f00\u53d1\u8005\u5e26\u6765\u4e86\u66f4\u5927\u7075\u6d3b\u6027\u3002"),(0,r.kt)("h3",f({},{id:"translations"}),"\u7ffb\u8bd1"),(0,r.kt)("p",null,"TouchGFX\u4e2d\u7684Text\u7c7b\u5305\u542b\u6307\u9488\u9635\u5217\uff0c\u6307\u9488\u6307\u5411\u5e94\u7528\u4e2d\u6bcf\u79cd\u8bed\u8a00\u7684\u7ffb\u8bd1\u8868\u3002 \u7ffb\u8bd1\u8868\u57fa\u672c\u4e0a\u662f\u8bed\u8a00\u4e2d\u4f7f\u7528\u7684\u6240\u6709\u5b57\u7b26\u4e32\u7684\u96c6\u5408\uff1a"),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/using-binary-fonts/text-class-1.webp",noShadow:"true",width:"420",mdxType:"Figure"},"\u5c06\u6587\u672c\u6620\u5c04\u5230\u7279\u5b9a\u8bed\u8a00"),(0,r.kt)("p",null,"\u6b64\u8868\u4f7fTouchGFX\u80fd\u591f\u627e\u5230\u4ee5\u9009\u4e2d\u8bed\u8a00\u4e66\u5199\u7684\u7ed9\u5b9a\u6587\u672c\u3002"),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/using-binary-translations/binary-translation.webp",noShadow:"true",width:"600",mdxType:"Figure"},"\u6620\u5c04\u5230\u4e8c\u8fdb\u5236\u7ffb\u8bd1"),(0,r.kt)("p",null,"\u5728\u8fd0\u884c\u65f6\u95f4\u4f7f\u7528\u4e8c\u8fdb\u5236\u7ffb\u8bd1\u65f6\uff0c\u53ef\u4ee5\u5c06\u6620\u5c04\u4ece\u5185\u7f16\u8bd1\u7ffb\u8bd1\u66f4\u6539\u4e3a\u4e8c\u8fdb\u5236\u7ffb\u8bd1\u3002 \u5fc5\u987b\u5728\u53ef\u5bfb\u5740\u5b58\u50a8\u5668\uff08\u95ea\u5b58\u6216RAM\uff09\u4e2d\u63d0\u4f9b\u4e8c\u8fdb\u5236\u7ffb\u8bd1\u3002 \u4f8b\u5982\uff0c\u53ef\u4ee5\u4ece\u78c1\u76d8\u52a0\u8f7d\u6216\u5728\u751f\u4ea7\u8fc7\u7a0b\u4e2d\u5199\u5165\u95ea\u5b58\u3002"),(0,r.kt)("h3",f({},{id:"configuring-the-text-converter"}),"\u914d\u7f6e\u6587\u672c\u8f6c\u6362\u5668"),(0,r.kt)("p",null,"\u53ef\u5c06TouchGFX\u6587\u672c\u8f6c\u6362\u5668\u914d\u7f6e\u4e3a\u751f\u6210\u4e8c\u8fdb\u5236\u7ffb\u8bd1\u3002 \u8fd9\u5728TouchGFX Designer 4.13\u4e2d\u5f88\u5bb9\u6613\u505a\u5230\u3002 \u8f6c\u81f3\u201c\u914d\u7f6e\u201d\u9009\u9879\u5361\uff0c\u9009\u62e9\u201c\u6587\u672c\u914d\u7f6e\u201d\uff0c\u7136\u540e\u70b9\u51fb\u201c\u4e8c\u8fdb\u5236\u7ffb\u8bd1\u6587\u4ef6\u201d"),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/using-binary-translations/designer-text-config-4.17.webp",noShadow:"true",width:"900",mdxType:"Figure"},"\u542f\u7528\u4e8c\u8fdb\u5236\u7ffb\u8bd1"),(0,r.kt)("p",null,"\u5728\u4e0b\u4e00\u6b21\u751f\u6210\u4ee3\u7801\u65f6\uff0c\u4e8c\u8fdb\u5236\u7ffb\u8bd1\u5c06\u4f1a\u51fa\u73b0\u5728generated/texts/binary\u6587\u4ef6\u5939\u4e2d\u3002"),(0,r.kt)("p",null,"\u5728\u751f\u6210\u4e8c\u8fdb\u5236\u7ffb\u8bd1\u65f6\uff0c\u7f16\u8bd1\u5230\u5e94\u7528\u4e2d\u7684\u7ffb\u8bd1\u6587\u4ef6\u4e3a\u7a7a\u3002 \u56e0\u6b64\uff0c\u9664\u975e\u52a0\u8f7d\u4e8c\u8fdb\u5236\u7ffb\u8bd1\uff0c\u5426\u5219\u4e0d\u663e\u793a\u6587\u672c\u3002"),(0,r.kt)("h3",f({},{id:"installing-a-binary-translation"}),"\u5b89\u88c5\u4e8c\u8fdb\u5236\u7ffb\u8bd1"),(0,r.kt)("p",null,"\u5982\u679c\u5b58\u50a8\u5668\u4e2d\u5df2\u6709\u5e94\u7528\u7684\u4e8c\u8fdb\u5236\u7ffb\u8bd1\uff0c\u5219\u53ef\u4ee5\u5728TouchGFX\u4e2d\u52a0\u8f7d\u5b83\u3002 \u73b0\u5728\uff0cTouchGFX\u5c06\u4f7f\u7528\u8be5\u7ffb\u8bd1\u6587\u4ef6\u3002 \u6839\u636e\u5e94\u7528\uff0c\u53ef\u4ee5\u5728\u4e0d\u540c\u4f4d\u7f6e\u6216\u65f6\u95f4\u8fdb\u884c\uff08\u53ef\u4f7f\u7528",(0,r.kt)("em",{parentName:"p"},"gui/src/common/FrontApplication.cpp"),"\u4e2d\u7684",(0,r.kt)("em",{parentName:"p"},"FrontendApplication::FrontendApplication(Model& m, FrontendHeap& heap)"),"\u6784\u9020\u51fd\u6570\uff09\u3002"),(0,r.kt)("p",null,"\u5728\u4e0b\u9762\u7684\u793a\u4f8b\u4e2d\uff0c\u6211\u4eec\u4ece\u6587\u4ef6\u7cfb\u7edf\u8bfb\u53d6\u82f1\u8bed\u7684\u7ffb\u8bd1\u6587\u4ef6\u5e76\u5c06\u5176\u5b89\u88c5\u4e3a\u8bed\u8a00\u201cGB\u201d\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",f({parentName:"pre"},{className:"language-cpp",metastring:"{11-11,15-15,19-19}","{11-11,15-15,19-19}":!0}),'//read the translation into this global array\nuint8_t translation[10000];\n...\n\n//read the translation from a file, or change array to a pointer that points\n//to the translation data in internal or addressable external flash\nFILE* file = fopen("generated/texts/binary/LanguageGb.bin", "rb");\nif (file)\n{\n    //read data from file\n    fread(translation, 1, 10000, file);\n    fclose(file);\n\n    //replace empty translation with the binary data\n    Texts::setTranslation(GB, translation);\n\n    //always change language to get TouchGFX changed from the\n    //empty translation compiled in to the binary translation\n    Texts::setLanguage(GB);\n}\n')),(0,r.kt)("p",null,"\u6ce8\u610f\uff0c\u5728\u5b89\u88c5\u7ffb\u8bd1\u6587\u4ef6\u540e\uff0c\u5fc5\u987b\u66f4\u6539\u8bed\u8a00\u3002 \u5426\u5219\uff0cTouchGFX\u4ecd\u5c06\u4f7f\u7528\u4e4b\u524d\u7684\u7ffb\u8bd1\u6587\u4ef6\u3002 \u9605\u8bfb ",(0,r.kt)("a",f({parentName:"p"},{href:"texts-and-fonts#switching-language"}),"\u6b64\u5904"),"\u5173\u4e8e\u66f4\u6539\u8bed\u8a00\u7684\u66f4\u591a\u5185\u5bb9\u3002"),(0,r.kt)("p",null,"\u53e6\u5916\uff0c\u8fd8\u5fc5\u987b\u5f3a\u5236\u91cd\u7ed8\u5f53\u524d\u5c4f\u5e55\u6216\u66f4\u6362\u5c4f\u5e55\uff0c\u4ee5\u4fbf\u67e5\u770b\u6700\u65b0\u6587\u672c\uff08\u5982\u679c\u5728\u4e3a\u663e\u793a\u5c4f\u4e0a\u4f7f\u7528\u7684\u8bed\u8a00\u52a0\u8f7d\u7ffb\u8bd1\u6587\u4ef6\uff09\u3002 TouchGFX\u4e0d\u4f1a\u81ea\u52a8\u91cd\u7ed8\u4efb\u4f55\u5185\u5bb9\u3002"),(0,r.kt)("p",null,"\u53ef\u901a\u8fc7\u8ba9\u6839\u5bb9\u5668\u65e0\u6548\u6765\u91cd\u7ed8\u5f53\u524d\u5c4f\u5e55\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",f({parentName:"pre"},{className:"language-cpp"}),"invalidate();\n")),(0,r.kt)("p",null,"\u8fd9\u5c06\u5f3a\u5236\u91cd\u7ed8\u3002 \u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b\uff0c\u6700\u597d\u66f4\u6362\u5c4f\u5e55\uff0c\u4ee5\u4fbf\u4ece\u5934\u8fdb\u884c\u8bbe\u7f6e\uff08\u5982\u91cd\u65b0\u8ba1\u7b97TextArea\u5927\u5c0f\uff09\u3002 \u901a\u8fc7\u5728TouchGFX Designer\u4e2d\u521b\u5efa\u5177\u6709\u201c\u66f4\u6362\u5c4f\u5e55\u201d\u64cd\u4f5c\u7684\u4ea4\u4e92\uff0c\u53ef\u4ee5\u66f4\u6362\u5c4f\u5e55\u3002 \u53c2\u89c1\u76f8\u5173",(0,r.kt)("a",f({parentName:"p"},{href:"../designer-user-guide/interactions-view"}),"\u6587\u7ae0"),"\u3002"))}b.isMDXComponent=!0}}]);