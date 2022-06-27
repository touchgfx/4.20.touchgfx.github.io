"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[3960],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),g=c(n),d=a,f=g["".concat(u,".").concat(d)]||g[d]||s[d]||l;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=g;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},98398:function(e,t,n){n.r(t),n.d(t,{assets:function(){return h},contentTitle:function(){return d},default:function(){return k},frontMatter:function(){return g},metadata:function(){return f},toc:function(){return m}});var r=n(3905),a=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,s=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&p(e,n,t[n]);if(i)for(var n of i(t))c.call(t,n)&&p(e,n,t[n]);return e};const g={id:"languages-and-characters",title:"\u8a9e\u8a00\u548c\u5b57\u5143"},d=void 0,f={unversionedId:"development/ui-development/touchgfx-engine-features/languages-and-characters",id:"development/ui-development/touchgfx-engine-features/languages-and-characters",title:"\u8a9e\u8a00\u548c\u5b57\u5143",description:"",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/development/ui-development/touchgfx-engine-features/languages-and-characters.mdx",sourceDirName:"development/ui-development/touchgfx-engine-features",slug:"/development/ui-development/touchgfx-engine-features/languages-and-characters",permalink:"/4.20/zh-TW/docs/development/ui-development/touchgfx-engine-features/languages-and-characters",tags:[],version:"current",frontMatter:{id:"languages-and-characters",title:"\u8a9e\u8a00\u548c\u5b57\u5143"},sidebar:"docs",previous:{title:"\u6587\u5b57\u548c\u5b57\u9ad4",permalink:"/4.20/zh-TW/docs/development/ui-development/touchgfx-engine-features/texts-and-fonts"},next:{title:"MJPEG Video",permalink:"/4.20/zh-TW/docs/development/ui-development/touchgfx-engine-features/video"}},h={},m=[{value:"\u8a9e\u8a00",id:"languages",level:2},{value:"\u5b57\u5143",id:"characters",level:2},{value:"\u66f8\u5beb\u65b9\u5411",id:"writing-direction",level:2},{value:"\u4e0a\u4e0b\u6587\u5851\u9020",id:"contextual-shaping",level:2},{value:"\u652f\u63f4\u7684\u8a9e\u8a00\u6e05\u55ae",id:"list-of-supported-languages",level:2},{value:"\u5f9e\u5de6\u5411\u53f3\u5f0f\u8a9e\u8a00",id:"left-to-right-languages",level:3},{value:"\u5f9e\u53f3\u5411\u5de6\u5f0f\u8a9e\u8a00",id:"right-to-left-languages",level:3},{value:"\u4e0d\u652f\u63f4\u7684\u8a9e\u8a00",id:"unsupported-languages",level:2}],v={toc:m};function k(e){var t,n=e,{components:a}=n,p=((e,t)=>{var n={};for(var r in e)u.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&c.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=s(s({},v),p),l(t,o({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"TouchGFX\u652f\u63f4\u61c9\u7528\u7684\u570b\u969b\u5316\u548c\u7576\u5730\u8a9e\u7cfb\u5316\u3002"),(0,r.kt)("h2",s({},{id:"languages"}),"\u8a9e\u8a00"),(0,r.kt)("p",null,"\u652f\u63f4\u7684\u8a9e\u8a00\u662fUnicode\u7684\u57fa\u790e\u591a\u8a9e\u8a00\uff0c\u5177\u6709\u53ea\u652f\u63f4\u5f9e\u5de6\u5411\u53f3\u6216\u5f9e\u53f3\u5411\u5de6\u66f8\u5beb\u9ad4\u7cfb\u7684\u9650\u5236\u3002 \u9019\u610f\u5473\u8457\u652f\u63f4\u963f\u62c9\u4f2f\u8a9e\u3001\u4e2d\u6587\u3001\u82f1\u8a9e\u548c\u8a31\u591a\u5176\u4ed6\u8a9e\u8a00\uff0c\u4f46\u53ef\u80fd\u6709\u4e00\u9ede\u9650\u5236\u3002 \u4f8b\u5982\u76ee\u524d\u4e0d\u652f\u63f4\u70cf\u723e\u90fd\u8a9e\u548c\u7dec\u7538\u8a9e\u3002"),(0,r.kt)("h2",s({},{id:"characters"}),"\u5b57\u5143"),(0,r.kt)("p",null,"\u652f\u63f4\u7684\u8a9e\u8a00\u662fUnicode\u7684\u57fa\u790e\u591a\u8a9e\u8a00\uff0c\u5177\u6709\u53ea\u652f\u63f4\u5f9e\u5de6\u5411\u53f3\u6216\u5f9e\u53f3\u5411\u5de6\u66f8\u5beb\u9ad4\u7cfb\u7684\u9650\u5236\u3002 16-bit Unicodes are supported, i.e. \u4f8b\u5982\u76ee\u524d\u4e0d\u652f\u63f4\u70cf\u723e\u90fd\u8a9e\u548c\u7dec\u7538\u8a9e\u3002 \u4e00\u4e9b\u8a9e\u8a00\u53ef\u80fd\u5c0d\u63a1\u7528\u5b57\u9ad4\u7684\u7279\u6b8a\u5b57\u5143\uff08\u5982\u5929\u57ce\u9ad4\uff09\u4f7f\u75280xE000-0xE3FF\u4e2d\u7684\u79c1\u4eba\u4f7f\u7528\u5340\u3002"),(0,r.kt)("h2",s({},{id:"writing-direction"}),"\u66f8\u5beb\u65b9\u5411"),(0,r.kt)("p",null,"\u5b57\u5143\u7de8\u78bc\u57fa\u65bcUnicode\u6a19\u6e96\u3002 \u652f\u63f416\u4f4d\u5143unicode\uff0c\u5373"),(0,r.kt)("p",null,'TouchGFX\u652f\u63f4\u5f9e\u5de6\u5411\u53f3\uff08LTR\uff09\u548c\u5f9e\u53f3\u5411\u5de6\uff08RTL\uff09\u66f8\u5beb\u9ad4\u7cfb\u3002 \u6c92\u6709\u5167\u5efa\u652f\u63f4\u5f9e\u4e0a\u81f3\u4e0b\u66f8\u5beb\u9ad4\u7cfb\u3002 \u5c0d\u65bc\u963f\u62c9\u4f2f\u8a9e\u548c\u5e0c\u4f2f\u4f86\u8a9e\u800c\u8a00\uff0c\u9019\u662f\u6b63\u78ba\u8a2d\u7f6e\u3002 "TouchGFX" will not be written "XFGhcuoT" but the direction of words (or collection of words) can be controlled using the RTL/LTR setting.'),(0,r.kt)("p",null,"\u61c9\u6ce8\u610f\uff0cRTL\u4e0d\u662f\u6307\u5411\u5f8c\u66f8\u5beb\u6587\u5b57\uff08\u8207LTR\u76f8\u6bd4\uff09\u3002 \u5b83\u8868\u793a\u5f9e\u53f3\u908a\u958b\u59cb\u5411\u5de6\u66f8\u5beb\u6587\u5b57\u3002 \u5c0d\u65bc\u963f\u62c9\u4f2f\u8a9e\u548c\u5e0c\u4f2f\u4f86\u8a9e\u800c\u8a00\uff0c\u9019\u662f\u6b63\u78ba\u8a2d\u7f6e\u3002 \u201cTouchGFX\u201d\u4e0d\u6703\u88ab\u5beb\u6210\u201cXFGhcuoT\u201d\uff0c\u4f46\u53ef\u4ee5\u7528RTL/LTR\u8a2d\u7f6e\u63a7\u5236\u6587\u5b57\u65b9\u5411\uff08\u6216workds\u96c6\u5408\uff09\u3002"),(0,r.kt)("p",null,"TouchGFX\u4e2d\u5c0dLTR\u548cRTL\u66f8\u5beb\u7684\u8655\u7406\u5728\u4e00\u5b9a\u7a0b\u5ea6\u4e0a\u5141\u8a31\u5169\u8005\u6df7\u5408\u4f7f\u7528\u3002 \u9019\u7a31\u70ba\u96d9\u5411\u8173\u672c\u652f\u6301\u3002 TouchGFX\u652f\u63f4\u96d9\u5411\u66f8\u5beb\u7684\u5b98\u65b9\u898f\u5247\u5b50\u96c6\u3002 \u9019\u610f\u5473\u8457\u627f\u8a8d\u8af8\u5982\u201c10:45\u201d\u3001\u201c3.14159\u201d\u3001\u201cSTMicroelectronics TouchGFX\u201d\u7b49\u4ee5\u53ca\u5176\u4ed6\u5beb\u6cd5\uff0c\u751a\u81f3\u5728RTL\u6587\u5b57\u4e2d\u5b8c\u5168\u4f7f\u7528LTR\u66f8\u5beb\u3002"),(0,r.kt)("p",null,"\u8acb\u6ce8\u610f\uff0c\u62c9\u4e01\u5b57\u5143\u96c6\u4e2d\u4f7f\u7528\u7684\u6578\u5b57\uff080-9\uff09\u548c\u963f\u62c9\u4f2f\u8a9e\u5b57\u5143\u96c6\u4e2d\u4f7f\u7528\u7684\u6578\u5b57\u90fd\u6309LTR\u5b57\u5143\u8655\u7406\uff0c\u76ee\u7684\u662f\u78ba\u4fdd\u6578\u5b57\u5728\u986f\u793a\u5668\u4e0a\u6b63\u5e38\u986f\u793a\u3002"),(0,r.kt)("p",null,"\u9084\u61c9\u6ce8\u610f\u7684\u662f\uff0c\u7576\u6587\u5b57\u5305\u542bLTR\u5be6\u9ad4\u548cRTL\u5be6\u9ad4\u7684\u6df7\u5408\u9ad4\u6642\uff0c\u66f8\u5beb\u65b9\u5411\u5341\u5206\u91cd\u8981\u3002 \u53e6\u5916\uff0c\u5982\u679c\u6587\u5b57\u662fRTL\u6216LTR\uff0c\u5c07\u4e0d\u80fd\u901a\u904e\u6aa2\u67e5\u6587\u5b57\u4e2d\u7684\u5b57\u5143\u4f86\u78ba\u5b9a\u3002 If a text contains first a Hebrew word (RTL) and then an English word (LTR), the output on display will depend on the writing direction of the text. \u5982\u679c\u5c07\u6587\u5b57\u8a2d\u7f6e\u70baRTL\uff0c\u8f38\u51fa\u770b\u8d77\u4f86\u6703\u662f\u9019\u6a23\uff1a\u201cEnglish werbeH\u201d\uff0c\u9019\u662f\u56e0\u70ba\u6574\u500b\u6587\u5b57\u662fRTL\uff0c\u56e0\u6b64\u7b2c\u4e00\u500b\u5b57\u5fc5\u9808\u5beb\u5728\u6700\u53f3\u7aef\uff0c\u4f46\u5982\u679c\u5c07\u6587\u5b57\u8a2d\u7f6e\u70baLTR\uff0c\u5247\u8f38\u51fa\u770b\u8d77\u4f86\u6703\u662f\u9019\u6a23\uff1a\u201cwerbeH English\u201d\uff0c\u9019\u662f\u56e0\u70ba\u6587\u5b57\u61c9\u5728\u6700\u5de6\u7aef\u958b\u59cb\u66f8\u5beb\u7b2c\u4e00\u500b\u5b57\u3002 \u7531\u65bc\u82f1\u8a9e\u6587\u5b57\u53ef\u80fd\u5305\u542b\u5e0c\u4f2f\u4f86\u8a9e\u5b57\u8a5e\uff0c\u5c31\u50cf\u5e0c\u4f2f\u4f86\u8a9e\u6587\u5b57\u53ef\u80fd\u5305\u542b\u82f1\u8a9e\u5b57\u8a5e\u4e00\u6a23\uff0c\u56e0\u6b64\u4e0d\u80fd\u81ea\u52d5\u78ba\u5b9a\u63a1\u7528RTL\u9084\u662fLTR\u8a2d\u7f6e\u3002"),(0,r.kt)("p",null,"\u9084\u61c9\u6ce8\u610f\u7684\u662f\uff0c\u7576\u6587\u5b57\u5305\u542bLTR\u5be6\u9ad4\u548cRTL\u5be6\u9ad4\u7684\u6df7\u5408\u9ad4\u6642\uff0c\u66f8\u5beb\u65b9\u5411\u5341\u5206\u91cd\u8981\u3002 \u53e6\u5916\uff0c\u5982\u679c\u6587\u5b57\u662fRTL\u6216LTR\uff0c\u5c07\u4e0d\u80fd\u901a\u904e\u6aa2\u67e5\u6587\u5b57\u4e2d\u7684\u5b57\u5143\u4f86\u78ba\u5b9a\u3002 \u5982\u679c\u6587\u5b57\u4e2d\u7684\u7b2c\u4e00\u500b\u5b57\u662f\u5e0c\u4f2f\u4f86\u8a9e\uff08RTL\uff09\uff0c\u7b2c\u4e8c\u500b\u5b57\u662f\u82f1\u8a9e\uff08LTR\uff09\uff0c\u986f\u793a\u5668\u4e0a\u7684\u8f38\u51fa\u5c07\u53d6\u6c7a\u65bc\u6587\u5b57\u7684\u66f8\u5beb\u65b9\u5411\u3002 \u5982\u679c\u5c07\u6587\u5b57\u8a2d\u7f6e\u70baRTL\uff0c\u8f38\u51fa\u770b\u8d77\u4f86\u6703\u662f\u9019\u6a23\uff1a\u201cEnglish werbeH\u201d\uff0c\u9019\u662f\u56e0\u70ba\u6574\u500b\u6587\u5b57\u662fRTL\uff0c\u56e0\u6b64\u7b2c\u4e00\u500b\u5b57\u5fc5\u9808\u5beb\u5728\u6700\u53f3\u7aef\uff0c\u4f46\u5982\u679c\u5c07\u6587\u5b57\u8a2d\u7f6e\u70baLTR\uff0c\u5247\u8f38\u51fa\u770b\u8d77\u4f86\u6703\u662f\u9019\u6a23\uff1a\u201cwerbeH English\u201d\uff0c\u9019\u662f\u56e0\u70ba\u6587\u5b57\u61c9\u5728\u6700\u5de6\u7aef\u958b\u59cb\u66f8\u5beb\u7b2c\u4e00\u500b\u5b57\u3002 \u7531\u65bc\u82f1\u8a9e\u6587\u5b57\u53ef\u80fd\u5305\u542b\u5e0c\u4f2f\u4f86\u8a9e\u5b57\u8a5e\uff0c\u5c31\u50cf\u5e0c\u4f2f\u4f86\u8a9e\u6587\u5b57\u53ef\u80fd\u5305\u542b\u82f1\u8a9e\u5b57\u8a5e\u4e00\u6a23\uff0c\u56e0\u6b64\u4e0d\u80fd\u81ea\u52d5\u78ba\u5b9a\u63a1\u7528RTL\u9084\u662fLTR\u8a2d\u7f6e\u3002"),(0,r.kt)("h2",s({},{id:"contextual-shaping"}),"\u4e0a\u4e0b\u6587\u5851\u9020"),(0,r.kt)("p",null,"\u53e6\u4e00\u500b\u8207RTL\u6587\u672c\u6709\u95dc\u7684\u91cd\u8981\u554f\u984c\u662f\u62ec\u5f27\u5b57\u5143\u7684\u81ea\u52d5\u66ff\u63db\u3002 \u9019\u4e9b\u5b57\u5143\u70ba(, )\u3001{, }\u3001","[, ]","\u3001","<",", ",">","\u3002 TouchGFX supports such contextual shaping of languages by implementing a simplified set of rules for combining characters. \u8acb\u6ce8\u610f\uff0c\u62c9\u4e01\u6578\u5b57\u4e0d\u6703\u81ea\u52d5\u8f49\u63db\u70ba\u963f\u62c9\u4f2f\u6578\u5b57\u3002"),(0,r.kt)("h2",s({},{id:"list-of-supported-languages"}),"\u652f\u63f4\u7684\u8a9e\u8a00\u6e05\u55ae"),(0,r.kt)("p",null,"\u6839\u64da\u5b57\u5143\u7684\u4e0a\u4e0b\u6587\uff0c\u7279\u5b9a\u8173\u672c\u5c07\u9078\u64c7\u4e0d\u540c\u5f62\u5f0f\u7684\u4e00\u500b\u6216\u591a\u500b\u5b57\u5143/\u5b57\u5f62\u3002 \u4f8b\u5982\uff0c\u6839\u64da\u5b57\u4e32\u4e2d\u7684\u5b57\u6bcd\u4f4d\u7f6e\uff0c\u963f\u62c9\u4f2f\u5b57\u6bcd\u8868\u4e2d\u7684\u5b57\u6bcd\u6709\u4e0d\u540c\u7684\u4e0a\u4e0b\u6587\u5f62\u5f0f\u3002 TouchGFX\u901a\u904e\u5be6\u73fe\u7c21\u5316\u7684\u5b57\u5143\u7d44\u5408\u898f\u5247\u96c6\u5408\uff0c\u652f\u63f4\u8a9e\u8a00\u7684\u4e0a\u4e0b\u6587\u5851\u9020\u3002"),(0,r.kt)("h3",s({},{id:"left-to-right-languages"}),"\u5f9e\u5de6\u5411\u53f3\u5f0f\u8a9e\u8a00"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Simple languages using Latin characters")),(0,r.kt)("p",null,"\u7e3d\u9ad4\u800c\u8a00\uff0c\u652f\u63f4\u4f7f\u7528\u7121\u9700\u5c08\u9580\u91cd\u65b0\u6392\u5217\u6216\u5b9a\u4f4d\u7684\u5b57\u5143\u548c\u5b57\u5f62\u7684\u7c21\u55ae\u8a9e\u8a00\u3002 \u9019\u4e9b\u8a9e\u8a00\u5305\u62ec\u4f46\u4e0d\u9650\u65bc\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Bosnian, Bulgarian, Croatian, Czech, Danish, Dutch, English, Estonian, Finnish, French, German, Hungarian, Italian, Latvian, Lithuanian, Norwegian, Polish, Portuguese, Romanian, Serbian, Slovenian, Slovak, Spanish, Swedish, Turkish, Ukrainian")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u5176\u5b83")),(0,r.kt)("p",null,"\u4e00\u4e9b\u8a9e\u8a00\u4ecd\u7136\u9075\u5faa\u7c21\u55ae\u7684\u5b9a\u4f4d\u898f\u5247\uff0c\u4f46\u4f7f\u7528\u4e0d\u540c\u7684\u5b57\u5143\u548c\u5b57\u5f62\u96c6\u3002 \u6b64\u5916\uff0c\u9084\u652f\u63f4\u548c\u5305\u542b\uff08\u4f46\u4e0d\u9650\u65bc\uff09\u4ee5\u4e0b\u8a9e\u8a00\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4e2d\u6587\u3001\u5e0c\u81d8\u8a9e\u3001\u65e5\u8a9e\u548c\u4fc4\u8a9e")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u5176\u5b83")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6709\u9650\u652f\u6301\u6cf0\u8a9e\u3002 \u4f7f\u7528TouchGFX\u898f\u5247\u5b9a\u4f4d\uff08\u5782\u76f4\uff09\u8072\u8abf\u7b26\u865f\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u6709\u9650\u652f\u6301\u5370\u5730\u8a9e\uff08\u5929\u57ce\u9ad4\uff09\u3002 \u4e00\u4e9b\u5b57\u53ef\u80fd\u7a0d\u5fae\u653e\u932f\uff0c\u4f46\u6587\u5b57\u4ecd\u61c9\u53ef\u8b80\u3002")),(0,r.kt)("h3",s({},{id:"right-to-left-languages"}),"\u5f9e\u53f3\u5411\u5de6\u5f0f\u8a9e\u8a00"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u5176\u5b83")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Hebrew, Indonesian, Kazakh")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u4f7f\u7528\u7279\u6b8a\u5b57\u5143\u96c6\u7684\u7c21\u55ae\u8a9e\u8a00")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u963f\u62c9\u4f2f\u8a9e\uff08\u8d85\u904e\u56db\u500b\u5b57\u5143\u7684\u5e8f\u5217\u4e0d\u6703\u88ab\u8b58\u5225\u548c\u8f49\u63db\u70ba\u4e00\u500b\u9023\u5b57\u3002 \u5305\u62ec\uff1aSallallahou Alayhe Wasallam\u3001Jallajalalouhou\u548cRial Sign\uff09\u3002 \u4e00\u4e9b\u8b8a\u97f3\u7b26\u7684\u4f4d\u7f6e\u53ef\u80fd\u7a0d\u6709\u932f\u8aa4\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u6ce2\u65af\u8a9e"),(0,r.kt)("li",{parentName:"ul"},"\u99ac\u4f86\u8a9e\uff08\u50c5\u652f\u6301\u9694\u96e2\u5f0f\u7684\u0762 \u201c\u4e0a\u65b9\u6709\u9ede\u7684Keheh\u201d\uff09")),(0,r.kt)("h2",s({},{id:"unsupported-languages"}),"\u4e0d\u652f\u63f4\u7684\u8a9e\u8a00"),(0,r.kt)("p",null,"\u5df2\u77e5\u4e0d\u652f\u63f4\u4e0b\u5217\u5927\u91cf\u4f7f\u7528\u9023\u5b57\u3001\u5408\u9ad4\u5b57\u6bcd\u548c\u5782\u76f4\u5b9a\u4f4d\u7684\u8a9e\u8a00\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u70cf\u723e\u90fd\u8a9e\u3001\u7dec\u7538\u8a9e")))}k.isMDXComponent=!0}}]);