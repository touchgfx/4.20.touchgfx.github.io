"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[4999],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return m}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var i=a.createContext({}),p=function(t){var e=a.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},u=function(t){var e=p(t.components);return a.createElement(i.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,i=t.parentName,u=c(t,["components","mdxType","originalType","parentName"]),d=p(n),m=r,k=d["".concat(i,".").concat(m)]||d[m]||s[m]||o;return n?a.createElement(k,l(l({ref:e},u),{},{components:n})):a.createElement(k,l({ref:e},u))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,l=new Array(o);l[0]=d;var c={};for(var i in e)hasOwnProperty.call(e,i)&&(c[i]=e[i]);c.originalType=t,c.mdxType="string"==typeof t?t:r,l[1]=c;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},44035:function(t,e,n){var a=n(67294),r=n(25026);e.Z=function(t){const e=t.noShadow||!1,n=t.width,o=t.height,l=(0,r.Z)(t.imageSource);return e?a.createElement("div",{className:"figure noshadow"},a.createElement("a",{href:l,target:"_blank"},a.createElement("img",{width:n,height:o,src:l})),a.createElement("p",null,t.children)):a.createElement("div",{className:"figure"},a.createElement("a",{href:l,target:"_blank"},a.createElement("img",{width:n,height:o,src:l})),a.createElement("p",null,t.children))}},35885:function(t,e,n){n.r(e),n.d(e,{assets:function(){return h},contentTitle:function(){return k},default:function(){return x},frontMatter:function(){return m},metadata:function(){return g},toc:function(){return b}});var a=n(3905),r=n(44035),o=Object.defineProperty,l=Object.defineProperties,c=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,s=(t,e,n)=>e in t?o(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,d=(t,e)=>{for(var n in e||(e={}))p.call(e,n)&&s(t,n,e[n]);if(i)for(var n of i(e))u.call(e,n)&&s(t,n,e[n]);return t};const m={id:"memory-usage",title:"\u5185\u5b58\u4f7f\u7528"},k=void 0,g={unversionedId:"basic-concepts/memory-usage",id:"basic-concepts/memory-usage",title:"\u5185\u5b58\u4f7f\u7528",description:"",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/basic-concepts/memory-usage.mdx",sourceDirName:"basic-concepts",slug:"/basic-concepts/memory-usage",permalink:"/4.20/zh-CN/docs/basic-concepts/memory-usage",draft:!1,tags:[],version:"current",frontMatter:{id:"memory-usage",title:"\u5185\u5b58\u4f7f\u7528"},sidebar:"docs",previous:{title:"\u64cd\u4f5c\u7cfb\u7edf",permalink:"/4.20/zh-CN/docs/basic-concepts/operating-system"},next:{title:"\u5f00\u53d1\u7b80\u4ecb",permalink:"/4.20/zh-CN/docs/development/development-introduction"}},h={},b=[{value:"\u5f15\u8a00",id:"introduction",level:2},{value:"\u9759\u6001\u5b58\u50a8\u5206\u914d",id:"static-memory-allocation",level:2},{value:"Screen\u548cWidget",id:"screens-and-widgets",level:3},{value:"\u5e94\u7528\u4ee3\u7801",id:"application-code",level:3},{value:"\u8d44\u6e90",id:"assets",level:3},{value:"\u68c0\u67e5\u5b58\u50a8\u7a7a\u95f4\u4f7f\u7528\u91cf",id:"checking-memory-usage",level:2},{value:"\u5185\u90e8RAM",id:"internal-ram",level:3},{value:"\u5185\u90e8\u95ea\u5b58",id:"internal-flash",level:3},{value:"\u5916\u90e8Flash",id:"external-flash",level:3},{value:"\u603b\u7ed3",id:"summary",level:3},{value:"Demo 1",id:"demo-1",level:2},{value:"\u603b\u7ed3",id:"summary-1",level:3}],f={toc:b};function x(t){var e,n=t,{components:o}=n,s=((t,e)=>{var n={};for(var a in t)p.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(null!=t&&i)for(var a of i(t))e.indexOf(a)<0&&u.call(t,a)&&(n[a]=t[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(e=d(d({},f),s),l(e,c({components:o,mdxType:"MDXLayout"}))),(0,a.kt)("h2",d({},{id:"introduction"}),"\u5f15\u8a00"),(0,a.kt)("p",null,"\u5728\u672c\u8282\u4e2d\uff0c\u6211\u4eec\u5c06\u8ba8\u8bbaTouchGFX\u5e94\u7528\u7684\u5b58\u50a8\u7a7a\u95f4\u4f7f\u7528\u91cf\u3002 \u5178\u578b\u7684TouchGFX\u5e94\u7528\u4f7f\u75284\u7c7b\u5b58\u50a8\u5668\uff0c\u4f46\u8fd9\u53d6\u51b3\u4e8e\u4f7f\u7528\u7684\u786c\u4ef6\uff1a"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",d({parentName:"tr"},{align:null}),"\u5b58\u50a8\u5668\u7c7b\u578b"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"\u4f7f\u7528"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"\u5185\u90e8RAM"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"\u5185\u90e8RAM\u7528\u4e8e\u5b58\u50a8\u914d\u7f6e\u6570\u636e\uff0c\u5982\u6240\u6709Widget\u7684\u5750\u6807\u548c\u8272\u5f69\u3002 \u8fd9\u91cc\u5b58\u50a8\u4e86\u5f53\u524d\u5c4f\u5e55\u7684\u51e0\u4e2a\u5bf9\u8c61\u3002",(0,a.kt)("br",null),"\u5305\u542bUI\u4efb\u52a1\u8fd0\u884c\u65f6\u95f4\u6808\u7684\u64cd\u4f5c\u7cfb\u7edf\u6240\u9700\u5185\u5b58\u4e5f\u4f4d\u4e8e\u5185\u90e8RAM\u4e2d\u3002 \u5176\u4ed6\u8f6f\u4ef6\u7ec4\u4ef6\u7684\u6240\u6709\u6570\u636e\uff08\u5982\u6587\u4ef6\u7cfb\u7edf\u548c\u663e\u793a\u5668\u9a71\u52a8\uff09\u540c\u6837\u4f4d\u4e8e\u5185\u90e8RAM\u4e2d\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"\u5185\u90e8\u95ea\u5b58"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"\u5185\u90e8\u95ea\u5b58\u7528\u4e8e\u5b58\u50a8\u5e94\u7528\u7a0b\u5e8f\u4ee3\u7801\u3001TouchGFX\u5e93\u548c\u4f7f\u7528\u7684\u5176\u4ed6\u5e93\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"\u5916\u90e8RAM"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"\u5916\u90e8RAM\u901a\u5e38\u7528\u4e8e\u63d0\u4f9b\u5e27\u7f13\u51b2\uff0c\u4e5f\u53ef\u4ee5\u662f\u4f4d\u56fe\u7f13\u5b58\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"\u5916\u90e8Flash"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"\u5916\u90e8\u95ea\u5b58\u7528\u4e8e\u5b58\u50a8\u56fe\u50cf\u3001\u5b57\u4f53\u548c\u6587\u672c\u3002")))),(0,a.kt)("h2",d({},{id:"static-memory-allocation"}),"\u9759\u6001\u5b58\u50a8\u5206\u914d"),(0,a.kt)("p",null,"TouchGFX\u53ea\u4f7f\u7528\u9759\u6001\u5b58\u50a8\u5206\u914d\u3002 \u8fd9\u610f\u5473\u7740\u6240\u6709\u5b58\u50a8\u7a7a\u95f4\u90fd\u662f\u9884\u5148\u5206\u914d\u7684\u3002 TouchGFX\u5728\u8fd0\u884c\u65f6\u4e0d\u4ece\u5b58\u50a8\u7a7a\u95f4\u4e2d\u83b7\u53d6\u5206\u914d\u3002 \u5982\u679c\u5e94\u7528\u53ef\u4ee5\u4e00\u5f00\u59cb\u5c31\u5206\u914d\u597d\u5b58\u50a8\u7a7a\u95f4\uff0c\u5219\u53ef\u786e\u4fdd\u6c38\u8fdc\u4e0d\u4f1a\u4f7f\u7528\u5185\u5b58\u65f6\u4ea7\u751f\u8d8a\u754c\u3002"),(0,a.kt)("h3",d({},{id:"screens-and-widgets"}),"Screen\u548cWidget"),(0,a.kt)("p",null,"\u5728TouchGFX\u4e2d\uff0c\u901a\u8fc7\u5f00\u53d1\u8bb8\u591aC++\u7c7b\u6765\u521b\u5efa\u7528\u6237\u754c\u9762\u3002 TouchGFX Designer\u5728\u60a8\u8bbe\u8ba1\u754c\u9762\u65f6\u521b\u5efa\u7c7b\u3002 For each screen designed in TouchGFX Designer you automatically get a number of classes (the ",(0,a.kt)("a",d({parentName:"p"},{href:"../development/ui-development/software-architecture/model-view-presenter-design-pattern"}),"MVP")," architecture). When you show a screen on the display objects of the classes is automatically allocated by TouchGFX in internal RAM."),(0,a.kt)("p",null,"\u5f53\u4ece\u4e00\u4e2a\u754c\u9762\u5207\u6362\u5230\u53e6\u4e00\u4e2a\u754c\u9762\u65f6\uff0c\u4e0d\u518d\u4f7f\u7528\u4e3a\u4e0a\u4e00\u4e2a\u754c\u9762\u5206\u914d\u7684\u5bf9\u8c61\uff0c\u800c\u53ea\u4f7f\u7528\u65b0\u754c\u9762\u7684\u5bf9\u8c61\u3002 \u56e0\u6b64\uff0c\u5c06\u5728\u5185\u90e8RAM\u4e2d\u65e7\u5bf9\u8c61\u6240\u5728\u7684\u4f4d\u7f6e\u5206\u914d\u65b0\u5bf9\u8c61\uff08\u65e7\u5bf9\u8c61\u88ab\u8986\u76d6\uff09\u3002 \u5728\u4e00\u4e2a\u65f6\u95f4\u70b9\uff0c\u5185\u90e8RAM\u53ea\u4fdd\u5b58\u4e00\u4e2a\u754c\u9762\u7684\u5bf9\u8c61\u3002"),(0,a.kt)("p",null,"\u6839\u636e\u5b9a\u4e49\u7684\u7c7b\uff0cC++\u7f16\u8bd1\u5668\u80fd\u591f\u8ba1\u7b97\u6700\u5927\u754c\u9762\u7c7b\u7684\u5927\u5c0f\uff0c\u5e76\u4e3a\u8fd9\u4e9b\u7c7b\u9884\u7559\u5b58\u50a8\u7a7a\u95f4\u3002"),(0,a.kt)("p",null,"\u56e0\u6b64\uff0c\u5185\u90e8RAM\u4e2d\u7684\u5b58\u50a8\u7a7a\u95f4\u4f7f\u7528\u91cf\u4e0d\u53d6\u51b3\u4e8e\u5e94\u7528\u4e2d\u754c\u9762\u7684\u6570\u91cf\uff0c\u800c\u662f\u53d6\u51b3\u4e8e\u6700\u5927\u754c\u9762\u7684\u5927\u5c0f\u3002"),(0,a.kt)("p",null,"\u4e3a\u8fd9\u4e9b\u5bf9\u8c61\u7559\u51fa\u7684\u5b58\u50a8\u7a7a\u95f4\u79f0\u4e3aFrontendHeap\u3002"),(0,a.kt)("p",null,"TouchGFX"),(0,a.kt)("h3",d({},{id:"application-code"}),"\u5e94\u7528\u4ee3\u7801"),(0,a.kt)("p",null,"\u5e94\u7528\u4ee3\u7801\u901a\u5e38\u5b58\u50a8\u5728\u5185\u90e8\u95ea\u5b58\u4e2d\u3002 \u5e94\u7528\u4ee3\u7801\u5305\u62ec\u60a8\u7f16\u5199\u7684\u7a0b\u5e8f\u4ee3\u7801\u3001TouchGFX Designer\u751f\u6210\u7684\u4ee3\u7801\u3001\u6765\u81eaTouchGFX Designer\u5e93\u548c\u60a8\u4f7f\u7528\u7684\u5176\u4ed6\u5e93\u7684\u4ee3\u7801\u3002"),(0,a.kt)("p",null,"\u968f\u7740\u60a8\u7f16\u5199\u7684\u4ee3\u7801\u548c\u6dfb\u52a0\u5230\u5e94\u7528\u7684\u754c\u9762\u8d8a\u6765\u8d8a\u591a\uff0c\u5e94\u7528\u4ee3\u7801\u7684\u6570\u91cf\u5fc5\u7136\u589e\u52a0\u3002 \u5728\u60a8\u9996\u6b21\u4f7f\u7528\u67d0\u4e2a\u529f\u80fd\u65f6\uff0c\u4ece\u5e93\u4e2d\u53d6\u51fa\u7684\u4ee3\u7801\u7684\u91cf\u968f\u4e4b\u589e\u52a0\u3002 \u4f8b\u5982\uff0c\u5728\u60a8\u9996\u6b21\u5c06Button\u6dfb\u52a0\u5230\u754c\u9762\u65f6\uff0cTouchGFX\u5e93\u4e2d\u7684Button\u4ee3\u7801\u5c31\u4f1a\u5305\u542b\u5728\u60a8\u7684\u5e94\u7528\u4e2d\uff0c\u5bfc\u81f4\u4ee3\u7801\u91cf\u589e\u52a0\u3002 \u5728\u60a8\u7b2c\u4e8c\u6b21\u4e3a\u540c\u4e00\u4e2a\u6216\u53e6\u4e00\u4e2a\u754c\u9762\u6dfb\u52a0Button\u65f6\uff0c\u4e0d\u4f1a\u518d\u6b21\u4eceTouchGFX\u5e93\u83b7\u53d6\u4ee3\u7801\uff0c\u5e94\u7528\u4e2d\u589e\u52a0\u7684\u53ea\u6709\u60a8\u7f16\u5199\u7684\u6216TouchGFX \u8bbe\u8ba1\u5668\u751f\u6210\u7684\u4ee3\u7801\u3002"),(0,a.kt)("h3",d({},{id:"assets"}),"\u8d44\u6e90"),(0,a.kt)("p",null,"\u8bf8\u5982\u56fe\u50cf\u3001\u6587\u672c\u548c\u5b57\u4f53\u4e4b\u7c7b\u7684\u8d44\u6e90\u4ea7\u4f1a\u88ab\u8f6c\u6362\u4e3aC++\u6587\u4ef6\u5e76\u94fe\u63a5\u5230\u5e94\u7528\u4e2d\u3002 \u8d44\u6e90\u7684\u6570\u636e\u901a\u5e38\u5b58\u50a8\u5728\u5916\u90e8\u95ea\u5b58\u4e2d\uff0c\u4f46\u4e5f\u53ef\u5b58\u50a8\u5728\u5185\u90e8\u95ea\u5b58\u4e2d\u3002 \u8fd9\u662f\u901a\u8fc7\u94fe\u63a5\u5668\u811a\u672c\u6765\u63a7\u5236\u7684\u3002"),(0,a.kt)("p",null,"\u5728\u6dfb\u52a0\u56fe\u50cf\u65f6\uff0c\u5e94\u7528\u5927\u5c0f\u7684\u589e\u91cf\u4e0e\u56fe\u50cf\u5927\u5c0f\u6210\u6b63\u6bd4\u3002"),(0,a.kt)("p",null,"\u5728\u6dfb\u52a0\u6587\u672c\u65f6\uff0c\u6587\u672c\u4e2d\u7684\u6bcf\u4e2a\u5b57\u7b26\u4f1a\u5bfc\u81f4\u5e94\u7528\u5927\u5c0f\u589e\u52a0\u4e24\u4e2a\u5b57\u8282\u3002 \u5982\u679c\u540c\u4e00\u4e2a\u5b57\u7b26\u4e32\u4f7f\u7528\u4e86\u4e24\u6b21\uff0c\u5e94\u7528\u5927\u5c0f\u53ea\u589e\u52a0\u4e00\u6b21\u3002"),(0,a.kt)("p",null,"\u53ea\u6709\u5e94\u7528\u4e2d\u4f7f\u7528\u7684\u5b57\u7b26\uff0c\u624d\u4f1a\u4ece\u5b57\u7b26\u6587\u4ef6\u4e2d\u83b7\u53d6\u3002 \u8fd9\u610f\u5473\u7740\u5982\u679c\u5e94\u7528\u4e2d\u53ea\u4f7f\u7528\u5927\u5199\u5b57\u6bcdA-Z\uff0c\u5219\u5e94\u7528\u4e2d\u4e0d\u5305\u542b\u5b57\u4f53\u4e2d\u7684\u5c0f\u5199\u5b57\u6bcda-z\u3002 \u5982\u679c\u540e\u7eed\u6dfb\u52a0\u4f7f\u7528\u8fd9\u4e9b\u5b57\u6bcd\u7684\u6587\u672c\uff0c\u5219\u5e94\u7528\u4e2d\u5b57\u4f53\u6570\u636e\u7684\u91cf\u4f1a\u589e\u52a0\u3002"),(0,a.kt)("p",null,"\u95ea\u5b58\u4e2d\u5b57\u7b26\u7684\u5927\u5c0f\u53d6\u51b3\u4e8e\u9009\u62e9\u7684\u5b57\u4f53\u5927\u5c0f\u3002 \u5982\u679c\u5b57\u4f53\u589e\u5927\uff0c\u5e94\u7528\u5927\u5c0f\u4e5f\u4f1a\u589e\u52a0\u3002"),(0,a.kt)("h2",d({},{id:"checking-memory-usage"}),"\u68c0\u67e5\u5b58\u50a8\u7a7a\u95f4\u4f7f\u7528\u91cf"),(0,a.kt)("p",null,"\u901a\u8fc7\u68c0\u67e5\u94fe\u63a5\u5668\u751f\u6210\u7684\u6620\u5c04\u6587\u4ef6\uff0c\u53ef\u4ee5\u627e\u5230\u7279\u5b9a\u5e94\u7528\u7684\u5b58\u50a8\u7a7a\u95f4\u4f7f\u7528\u91cf\u3002"),(0,a.kt)("p",null,"\u4e0b\u9762\u6211\u4eec\u6765\u68c0\u67e5IAR Embedded Workbench\u751f\u6210\u7684\u6620\u5c04\u6587\u4ef6\u3002 \u5176\u4ed6\u7f16\u8bd1\u5668\u4e5f\u4f1a\u751f\u6210\u7c7b\u4f3c\u7684\u6620\u5c04\u6587\u4ef6\u3002"),(0,a.kt)("p",null,"\u9996\u5148\u5728TouchGFX Designer\u4e2d\u4e3aSTM32F746Discovery\u8bc4\u4f30\u5957\u4ef6\u521b\u5efa\u4e00\u4e2a\u7a7a\u9879\u76ee\uff1a"),(0,a.kt)(r.Z,{imageSource:"/img/basic-concepts/memory-usage/create-project-4.17.png",noShadow:"true",mdxType:"Figure"},"\u5177\u6709\u4e00\u4e2aBox\u548c\u4e00\u4e2aButton\u7684STM32F746\u9879\u76ee"),(0,a.kt)("p",null,"\u5728IAR\u4e2d\u6253\u5f00\u9879\u76ee\u540e\uff0c\u67e5\u770b\u5173\u4e8eIAR\u751f\u6210.MAP\u6587\u4ef6\u7684\u5c5e\u6027\uff1a"),(0,a.kt)(r.Z,{imageSource:"/img/basic-concepts/memory-usage/enable-map-file.png",noShadow:"true",mdxType:"Figure"},"\u751f\u6210\u94fe\u63a5\u5668\u6620\u5c04\u6587\u4ef6"),(0,a.kt)("p",null,"\u5728IAR\u4e2d\u8fdb\u884c\u7f16\u8bd1\u540e\uff0c\u53ef\u4ee5\u68c0\u67e5\u94fe\u63a5\u5668\u6620\u5c04\u6587\u4ef6STM32F746G_DISCO.map\uff0c\u8be5\u6587\u4ef6\u4f4d\u4e8e",(0,a.kt)("em",{parentName:"p"},"EWARM/STM32F746G_DISCO/List"),"\u6587\u4ef6\u5939\u3002"),(0,a.kt)("p",null,"IAR\u94fe\u63a5\u5668\u6620\u5c04\u6587\u4ef6\u5305\u542b\u4e00\u4e2a\u6781\u4f73\u7684\u603b\u7ed3\u3002 \u67e5\u627e",(0,a.kt)("em",{parentName:"p"},"\u201c\u6a21\u5757\u603b\u7ed3\u201d"),"\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-cpp"}),"*******************************************************************************\n*** MODULE SUMMARY\n***\n\n    Module                                   ro code  ro data  rw data\n    ------                                   -------  -------  -------\ncommand line/config:\n    ------------------------------------------------------------------\n    Total:\n\nC:\\TouchGFXProjectsDocumentation\\STM32F746MemoryUsage\\EWARM\\STM32F746G_DISCO\\Obj: [1]\n    ApplicationFontProvider.o                              20\n    BitmapDatabase.o                              12       40\n    Blue_Buttons_Round_Edge_small.o                    40'800\n    Blue_Buttons_Round_Edge_small_pressed.o            40'800\n    Font_verdana_10_4bpp_0.o                               24\n    Font_verdana_20_4bpp_0.o                               72\n    Font_verdana_40_4bpp_0.o                              280\n    FrontendApplication.o                         46       60\n    FrontendApplicationBase.o                    706      816\n    GeneratedFont.o                               84       84\n    Kerning_verdana_10_4bpp.o                               4\n    Kerning_verdana_20_4bpp.o                               4\n    Kerning_verdana_40_4bpp.o                               4\n    Model.o                                       10\n    OSWrappers.o                                 156        1        9\n    STM32DMA.o                                   898      176\n    STM32TouchController.o                       162       24        4\n...\n    heap_4.o                                     444            32'792\n...\ntouchgfx_core.a: [7]\n    AbstractButton.o                             136\n    AbstractPartition.o                            8\n    Application.o                              2'218      290       28\n    Bitmap.o                                   1'064      604       36\n    Box.o                                        108      104\n    Button.o                                     276      308\n    ConstFont.o                                   62\n    Container.o                                  510      396\n    DMA.o                                        558      252\n    DisplayTransformation.o                      192\n    Drawable.o                                   418\n    FontManager.o                                 12                 4\n    Gestures.o                                   364       60\n    HAL.o                                      1'758      544       18\n    LCD24bpp.o                                 2'732    1'604       80\n    Screen.o                                   1'924      124\n    TouchCalibration.o                           252                76\n    TypedText.o                                                     14\n    ------------------------------------------------------------------\n    Total:                                    12'728    4'286      256\n\n    Gaps                                                    4        3\n    Linker created                                         36    2'560\n----------------------------------------------------------------------\n    Grand Total:                              38'676   88'973   42'731\n")),(0,a.kt)("p",null,"\u6b64\u8868\u5305\u542b\u4e09\u5217\u6570\u5b57\uff0c \u5176\u4e2d\u7684",(0,a.kt)("em",{parentName:"p"},"ro\u4ee3\u7801"),"\u548c",(0,a.kt)("em",{parentName:"p"},"ro\u6570\u636e"),"\u4e3a\u53ea\u8bfb\uff0c\u4f4d\u4e8e\u95ea\u5b58\u4e2d\uff0c ",(0,a.kt)("em",{parentName:"p"},"rw\u6570\u636e"),"\u4e3a\u975e\u5e38\u91cf\u8bfb\u5199\u53d8\u91cf\uff0c\u4f4d\u4e8eRAM\u4e2d\u3002"),(0,a.kt)("p",null,"\u8868\u4e2d\u7684\u884c\u5212\u5206\u4e3a7\u5757\u3002 \u7b2c\u4e00\u5757\u4e3a\u9879\u76ee\u4e2d\u7684\u6240\u6709.cpp\u6587\u4ef6\u3002 \u540e\u9762\u7684\u516d\u5757\u4e3a\u9879\u76ee\u4e2d\u4f7f\u7528\u7684\u5e93\uff08.a\u6587\u4ef6\uff09\u3002 \u6700\u540e\u4e00\u4e2a\u662fTouchGFX\u5e93\u3002"),(0,a.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u770b\u5230TouchGFX\u5e93\uff08\u201ctouchgfx_core.a: ","[7]","\u201d\u90e8\u5206\uff09\u4e3a\u5e94\u7528\u589e\u52a0\u4e8612,728\u5b57\u8282\u7684\u4ee3\u7801\uff08\u548c4,286\u5b57\u8282\u7684\u5e38\u91cf\u6570\u636e\uff09\u3002"),(0,a.kt)("h3",d({},{id:"internal-ram"}),"\u5185\u90e8RAM"),(0,a.kt)("p",null,"\u4e3a\u4e86\u627e\u5230\u5185\u90e8RAM\u7684\u603b\u4f7f\u7528\u91cf\uff0c\u6211\u4eec\u6765\u770b\u6a21\u5757\u603b\u7ed3\u8868\u5e95\u90e8\u7684",(0,a.kt)("em",{parentName:"p"},"\u201c\u603b\u8ba1\u201d"),"\u4e00\u884c\u3002 \u7b2c\u4e09\u5217\u662f\u5185\u90e8RAM\u3002 \u8fd9\u8868\u793a\u9879\u76ee\u4f7f\u7528\u4e86\u5185\u90e8RAM\u768442,731\u5b57\u8282\u7a7a\u95f4\u3002 \u6211\u4eec\u6765\u770bTouchGFX\u5e93\u7684\u603b\u503c\uff0c\u53ef\u4ee5\u770b\u5230TouchGFX\u5e93","[7]","\u4f7f\u7528\u4e86256\u5b57\u8282\u3002 heap_4.o\u4f7f\u7528\u4e8632,792\u5b57\u8282\u3002 \u8fd9\u662f\u4e3aFREERTOS\u9884\u7559\u7684\u52a8\u6001\u5185\u5b58\u5806\u3002 32Kb\u662f\u9ed8\u8ba4\u503c\uff0c\u4f46\u5806\u7684\u5927\u5c0f\u53ef\u5728STM32CubeMX\u4e2d\u914d\u7f6e\u3002 \u5178\u578b\u7684TouchGFX\u7a0b\u5e8f\u4f7f\u7528\u6b64\u5806\u4e2d\u51e0Kb\u7684\u7a7a\u95f4\uff0c\u4e3b\u8981\u7528\u6765\u4e3a\u7528\u6237\u754c\u9762\u4efb\u52a1\u5206\u914d\u6808\u3002"),(0,a.kt)("p",null,"\u901a\u8fc7\u641c\u7d22FrontendHeap\uff0c\u6211\u4eec\u53ef\u4ee5\u627e\u5230\u754c\u9762\u5bf9\u8c61\u7684\u5927\u5c0f\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-cpp"}),"FrontendHeap::getInstance()::instance\n                        0x2000'95d0   0x240  Data  Gb  TouchGFXConfiguration.o [1]\n")),(0,a.kt)("p",null,"\u7528\u6237\u754c\u9762\u6240\u9700\u7684\u5bf9\u8c61\u5360\u7528\u4e860x240\u5b57\u8282 = 576\u5b57\u8282\u7684\u7a7a\u95f4\u3002"),(0,a.kt)("h3",d({},{id:"internal-flash"}),"\u5185\u90e8\u95ea\u5b58"),(0,a.kt)("p",null,"\u4ece",(0,a.kt)("em",{parentName:"p"},"\u201c\u603b\u8ba1\u201d"),"\u4e00\u884c\u4e2d\u53ef\u4ee5\u770b\u5230\uff0c\u6b64\u5e94\u7528\u4f7f\u7528\u4e8638,676\u5b57\u8282\u4ee3\u7801 + 88,973\u5b57\u8282\u6570\u636e\u3002 \u5176\u4e2d\u53ea\u6709\u4e00\u90e8\u5206\u662f\u5185\u90e8\u95ea\u5b58\u3002 \u81f3\u5c11\u4e24\u5f20Button\u56fe\u50cf\u4f4d\u4e8e\u5916\u90e8\u95ea\u5b58\u4e2d\u3002"),(0,a.kt)("p",null,"\u4e3a\u4e86\u627e\u51fa\u4f1a\u6709\u591a\u5c11\u4ee3\u7801\u548c\u6570\u636e\u5b58\u50a8\u5728\u5185\u90e8\u95ea\u5b58\u4e2d\uff0c\u6211\u4eec\u9996\u5148\u68c0\u67e5",(0,a.kt)("em",{parentName:"p"},"\u201c\u5b58\u50a8\u603b\u7ed3\u201d"),"\uff08\u5220\u9664\u4e86\u4e00\u4e9b\u7ec6\u8282\uff09\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-cpp"}),'*******************************************************************************\n*** PLACEMENT SUMMARY\n***\n\n"A0":  place at address 0x800\'0000 { ro section .intvec };\n"P1":  place in [from 0x800\'0000 to 0x80f\'ffff] { ro };\n"P2":  place in [from 0x2000\'0000 to 0x2004\'ffff] { rw };\n"P3":  place in [from 0x9000\'0000 to 0x90ff\'ffff] {\n          section ExtFlashSection, section FontFlashSection,\n          section TextFlashSection };\n')),(0,a.kt)("p",null,"\u5185\u90e8\u95ea\u5b58\u7684\u8d77\u59cb\u5730\u5740\u4e3a0x08000000\u3002 \u5b83\u6709\u4e24\u4e2a\u533a\u57df\u201cA0\u201d\u548c\u201dP1\u201d\u3002"),(0,a.kt)("p",null,"\u7ee7\u7eed\u770b\u6620\u5c04\u6587\u4ef6\uff0c\u53ef\u4ee5\u770b\u5230\u8fd9\u4e9b\u533a\u57df\u4e2d\u7684\u5185\u5bb9\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-cpp",metastring:"{5-5,15-15}","{5-5,15-15}":!0}),"  Section                Kind         Address      Size  Object\n  -------                ----         -------      ----  ------\n\"A0\":                                             0x1c8\n  .intvec                ro code   0x800'0000     0x1c8  startup_stm32f746xx.o [1]\n                                 - 0x800'01c8     0x1c8\n\n\"P1\":                                             0xb05d\n  .text                   ro code   0x800'01c8     0x9b8  main.o [1]\n  .text                   ro code   0x800'0b80      0x14  memset.o [5]\n...\n  .text                   ro code   0x800'b17a       0x2  AbstractButton.o [7]\n  .rodata                 const     0x800'b17c       0x1  unwind_debug.o [6]\n  .rodata                 const     0x800'b17d       0x0  zero_init3.o [5]\n  .rodata                 const     0x800'b17d       0x0  lz77_init_single.o [5]\n  Initializer bytes       const     0x800'b17d      0xa8  <for P2-1>\n                                  - 0x800'b225    0xb05d\n")),(0,a.kt)("p",null,"\u8fd9\u8868\u793a\u201dA0\u201d\u4f7f\u7528\u4e860x1c8\u5b57\u8282 = 456\u5b57\u8282\uff0c\u201dP1\u201d\u4f7f\u7528\u4e860xb05d\u5b57\u8282 = 45,149\u5b57\u8282\u3002 \u5185\u90e8\u95ea\u5b58\u7684\u603b\u4f7f\u7528\u91cf\u4e3a45,605\u5b57\u8282\u3002"),(0,a.kt)("h3",d({},{id:"external-flash"}),"\u5916\u90e8Flash"),(0,a.kt)("p",null,"\u5916\u90e8\u95ea\u5b58\u4e3a\u201dP3\u201d\u533a\u57df\uff08\u8d77\u59cb\u5730\u5740\u4e3a0x90000000\uff09\u3002 \u4e0b\u9762\u662f\u8be5\u533a\u57df\u7684\u5185\u5bb9\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-cpp",metastring:"{14-14}","{14-14}":!0}),"\"P3\":                                          0x1'4076\n  ExtFlashSection        const    0x9000'0000    0x9f60  Blue_Buttons_Round_Edge_small.o [1]\n  ExtFlashSection        const    0x9000'9f60    0x9f60  Blue_Buttons_Round_Edge_small_pressed.o [1]\n  FontFlashSection       const    0x9001'3ec0     0x118  Font_verdana_40_4bpp_0.o [1]\n  FontFlashSection       const    0x9001'3fd8      0x48  Font_verdana_20_4bpp_0.o [1]\n  FontFlashSection       const    0x9001'4020      0x18  Font_verdana_10_4bpp_0.o [1]\n  FontFlashSection       const    0x9001'4038      0x10  Table_verdana_10_4bpp.o [1]\n  FontFlashSection       const    0x9001'4048      0x10  Table_verdana_20_4bpp.o [1]\n  FontFlashSection       const    0x9001'4058      0x10  Table_verdana_40_4bpp.o [1]\n  FontFlashSection       const    0x9001'4068       0x4  Kerning_verdana_10_4bpp.o [1]\n  FontFlashSection       const    0x9001'406c       0x4  Kerning_verdana_20_4bpp.o [1]\n  FontFlashSection       const    0x9001'4070       0x4  Kerning_verdana_40_4bpp.o [1]\n  TextFlashSection       const    0x9001'4074       0x2  Texts.o [1]\n                                - 0x9001'4076  0x1'4076\n")),(0,a.kt)("p",null,"\u53ef\u4ee5\u770b\u5230\u5916\u90e8\u95ea\u5b58\u7684\u603b\u4f7f\u7528\u91cf\u4e3a0x14076\u5b57\u8282 = 82,038\u5b57\u8282\u3002 \u4e24\u5f20Button\u56fe\u50cf\uff082 x 0x9f60\u5b57\u8282 = 40,800\u5b57\u8282\uff09\u4f7f\u7528\u4e86\u5176\u4e2d\u7684\u5927\u90e8\u5206\u3002 \u5176\u4f59\u7a7a\u95f4\u88ab3\u79cd\u5b57\u4f53\u4f7f\u7528\u3002 \u5728\u672c\u4f8b\u4e2d\uff0c\u7531\u4e8e\u4e0d\u4f7f\u7528\u4efb\u4f55\u6587\u672c\uff0c\u53ea\u5305\u542b\u201c?\u201d\u5b57\u7b26\uff0c\u56e0\u6b64\u5b83\u4eec\u7528\u4e0d\u4e86\u591a\u5c11\u7a7a\u95f4\u3002"),(0,a.kt)("h3",d({},{id:"summary"}),"\u603b\u7ed3"),(0,a.kt)("p",null,"\u5916\u90e8RAM\u4e2d\u53ea\u6709\u5e27\u7f13\u51b2\u3002 \u7531\u4e8e\u5b83\u4eec\u672a\u88ab\u5b9a\u4e49\u4e3a\u5e94\u7528\u4e2d\u7684\u53d8\u91cf\uff0c\u56e0\u6b64\u5728\u94fe\u63a5\u5668\u811a\u672c\u4e2d\u627e\u4e0d\u5230\u5b83\u4eec\u3002 \u5206\u8fa8\u7387\u4e3a480x272\u50cf\u7d20\uff0824\u4f4d\uff09\u3002 \u6709\u4e24\u4e2a\u5e27\u7f13\u51b2\uff0c\u603b\u4f7f\u7528\u91cf\u4e3a480 ","*"," 272 ","*"," 3 * 2 = 786,360\u5b57\u8282\u3002"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",d({parentName:"tr"},{align:null}),"\u5b58\u50a8\u5668\u7c7b\u578b"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"\u4f7f\u7528"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"\u5185\u90e8RAM"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"42731 \u5b57\u8282")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"TouchGFX\u754c\u9762\u5bf9\u8c61"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"576\u5b57\u8282")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"\u5185\u90e8\u95ea\u5b58"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"45605 \u5b57\u8282")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"TouchGFX\u6846\u67b6"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"12,728\u5b57\u8282\u4ee3\u7801")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"\u5916\u90e8RAM"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"786,360 \u5b57\u8282")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"\u5916\u90e8Flash"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"82,028 \u5b57\u8282")))),(0,a.kt)("h2",d({},{id:"demo-1"}),"Demo 1"),(0,a.kt)("p",null,"\u4e0b\u9762\u662f\u53e6\u4e00\u4e2a\u793a\u4f8b\uff1aTouchGFX Designer\u4e2d\u53ef\u4ee5\u627e\u5230\u7684TouchGFX Demo1\u7684\u6570\u636e\u91cf\u3002 \u5b83\u5305\u542b5\u4e2a\u754c\u9762\u548c100\u591a\u5f20\u56fe\u50cf\uff1a"),(0,a.kt)(r.Z,{imageSource:"/img/basic-concepts/memory-usage/demo1.png",noShadow:"true",mdxType:"Figure"},"STM32F746 Demo 1"),(0,a.kt)("h3",d({},{id:"summary-1"}),"\u603b\u7ed3"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",d({parentName:"tr"},{align:null}),"\u5b58\u50a8\u5668\u7c7b\u578b"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"\u4f7f\u7528"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"\u5185\u90e8RAM"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"51,387 \u5b57\u8282")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"TouchGFX\u754c\u9762\u5bf9\u8c61"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"10,772 \u5b57\u8282")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"\u5185\u90e8\u95ea\u5b58"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"187,768 \u5b57\u8282")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"TouchGFX\u6846\u67b6\u4ee3\u7801"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"85,174\u5b57\u8282\u4ee3\u7801")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"\u5916\u90e8RAM"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"786,360 \u5b57\u8282")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"\u5916\u90e8Flash"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"5,281,812\u5b57\u8282")))))}x.isMDXComponent=!0}}]);