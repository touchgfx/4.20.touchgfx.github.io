"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[9108],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return g}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),m=c(n),g=i,h=m["".concat(u,".").concat(g)]||m[g]||p[g]||o;return n?r.createElement(h,l(l({ref:t},s),{},{components:n})):r.createElement(h,l({ref:t},s))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=m;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:i,l[1]=a;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},44035:function(e,t,n){var r=n(67294),i=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,o=e.height,l=(0,i.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:l,target:"_blank"},r.createElement("img",{width:n,height:o,src:l})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:l,target:"_blank"},r.createElement("img",{width:n,height:o,src:l})),r.createElement("p",null,e.children))}},39487:function(e,t,n){var r=n(67294),i=n(25026);t.Z=function(e){const t=e.width,n=e.height,o=e.points||[],l=(0,i.Z)(e.imageSource);return r.createElement("div",{style:{position:"relative"}},r.createElement("div",{className:"figure"},r.createElement("a",{href:l,target:"_blank"},r.createElement("img",{width:t,height:n,src:l})),o.map((function(e,t){return r.createElement("svg",{style:{position:"absolute",top:0,left:0,pointerEvents:"none"},viewBox:"0 0 500 500"},r.createElement("g",{transform:"translate("+e[0]+", "+e[1]+")"},r.createElement("path",{id:"p1",d:"M12 2c3.196 0 6 2.618 6 5.602 0 2.238-1.058 3.488-2.659 5.381-1.078 1.274-2.303 2.722-3.341 4.697-1.038-1.976-2.263-3.423-3.341-4.697-1.601-1.893-2.659-3.143-2.659-5.381 0-2.984 2.804-5.602 6-5.602z",fill:"white",stroke:"black"}),r.createElement("text",{x:"11.7",y:"9.5","font-size":"x-small","dominant-baseline":"middle","text-anchor":"middle"},t+1)))})),r.createElement("p",null,e.children)))}},88678:function(e,t,n){var r=n(67294);class i extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{className:e},r.createElement("div",{className:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{className:"highlight-content"},this.props.children))}}t.Z=i},93054:function(e,t,n){var r=n(67294),i=n(88678);const o=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));class l extends r.Component{render(){return r.createElement(i.Z,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:o},this.props.children)}}t.Z=l},82985:function(e,t,n){var r=n(67294);class i extends r.Component{render(){return r.createElement("code",{className:"shortcut"},this.props.children)}}t.Z=i},93580:function(e,t,n){n.r(t),n.d(t,{assets:function(){return y},contentTitle:function(){return T},default:function(){return S},frontMatter:function(){return k},metadata:function(){return v},toc:function(){return x}});var r=n(3905),i=n(44035),o=n(39487),l=n(82985),a=n(93054),u=n(39130),c=Object.defineProperty,s=Object.defineProperties,p=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,f=(e,t)=>{for(var n in t||(t={}))g.call(t,n)&&d(e,n,t[n]);if(m)for(var n of m(t))h.call(t,n)&&d(e,n,t[n]);return e};const k={id:"tutorial-01",title:"\u6559\u7a0b1\uff1a\u5c1d\u8bd5\u4f7f\u7528\u793a\u4f8b"},T=void 0,v={unversionedId:"tutorials/tutorial-01",id:"tutorials/tutorial-01",title:"\u6559\u7a0b1\uff1a\u5c1d\u8bd5\u4f7f\u7528\u793a\u4f8b",description:"",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/tutorials/tutorial-01.mdx",sourceDirName:"tutorials",slug:"/tutorials/tutorial-01",permalink:"/4.20/zh-CN/docs/tutorials/tutorial-01",tags:[],version:"current",frontMatter:{id:"tutorial-01",title:"\u6559\u7a0b1\uff1a\u5c1d\u8bd5\u4f7f\u7528\u793a\u4f8b"},sidebar:"docs",previous:{title:"Tutorials",permalink:"/4.20/zh-CN/docs/category/tutorials"},next:{title:"\u6559\u7a0b2\uff1a\u521b\u5efa\u60a8\u81ea\u5df1\u7684\u5e94\u7528",permalink:"/4.20/zh-CN/docs/tutorials/tutorial-02"}},y={},x=[{value:"\u5165\u95e8",id:"getting-started",level:2},{value:"\u4f7f\u7528TouchGFX Simulator\u8fd0\u884c\u793a\u4f8b",id:"running-an-example-using-touchgfx-simulator",level:2},{value:"\u9009\u62e9\u4e3b\u9898",id:"selecting-theme",level:3},{value:"\u9009\u62e9UI\u6a21\u677f",id:"selecting-a-ui-template",level:3},{value:"\u521b\u5efa\u9879\u76ee",id:"creating-a-project",level:3},{value:"\u8fd0\u884cTouchGFX Simulator",id:"running-touchgfx-simulator",level:3},{value:"\u5728STM32\u8bc4\u4f30\u5957\u4ef6\u4e0a\u8fd0\u884c\u793a\u4f8b",id:"running-an-example-on-an-stm32-evaluation-kit",level:2}],b={toc:x};function S(e){var t,n=e,{components:c}=n,d=((e,t)=>{var n={};for(var r in e)g.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&m)for(var r of m(e))t.indexOf(r)<0&&h.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=f(f({},b),d),s(t,p({components:c,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"\u8bf7\u8ddf\u968f\u672c\u6559\u7a0b\u5b66\u4e60TouchGFX\u7684\u57fa\u672c\u77e5\u8bc6\u3002 \u672c\u6559\u7a0b\u5c06\u5c55\u793a\u5982\u4f55\u5b89\u88c5TouchGFX\uff0c\u4ee5\u53ca\u5982\u4f55\u8fd0\u884c\u968f\u9644\u7684TouchGFX Simulator\u548cSTM32\u8bc4\u4f30\u5957\u4ef6\u793a\u4f8b\u3002"),(0,r.kt)("h2",f({},{id:"getting-started"}),"\u5165\u95e8"),(0,r.kt)("p",null,"\u9996\u5148\uff0c\u786e\u4fdd\u60a8\u5df2\u5b89\u88c5\u4e86TouchGFX Designer\u3002 \u70b9\u51fb",(0,r.kt)("a",f({parentName:"p"},{href:"../introduction/installation"}),"\u6b64\u5904"),"\u9605\u8bfb\u5173\u4e8e\u5982\u4f55\u4e0b\u8f7d\u548c\u5b89\u88c5TouchGFX\u7684\u66f4\u591a\u5185\u5bb9\u3002"),(0,r.kt)("h2",f({},{id:"running-an-example-using-touchgfx-simulator"}),"\u4f7f\u7528TouchGFX Simulator\u8fd0\u884c\u793a\u4f8b"),(0,r.kt)("p",null,"\u901a\u8fc7TouchGFX Designer\u53ef\u83b7\u53d6TouchGFX\u7684\u8bb8\u591aUI\u793a\u4f8b\u3002 \u8fd9\u4e9b\u793a\u4f8b\u53ef\u4ee5\u5e2e\u52a9\u60a8\u5b66\u4e60\u66f4\u591a\u5177\u4f53\u7684TouchGFX\u4e3b\u9898\uff0c\u5b83\u4eec\u90fd\u4e13\u6ce8\u4e8e\u4e00\u4e2a\u7279\u5b9a\u7684TouchGFX\u4e3b\u9898\u6216\u63a7\u4ef6"),(0,r.kt)("h3",f({},{id:"selecting-theme"}),"\u9009\u62e9\u4e3b\u9898"),(0,r.kt)("p",null,"TouchGFX Designer\u6709\u6d45\u8272\u548c\u6df1\u8272\u4e24\u79cd\u8272\u5f69\u65b9\u6848\u3002 \u5728\u60a8\u7b2c\u4e00\u6b21\u542f\u52a8TouchGFX Designer\u65f6\uff0c\u60a8\u4f1a\u88ab\u8981\u6c42\u9009\u62e9\u4e00\u4e2a\u65b9\u6848\u3002 \u9009\u62e9\u65b9\u6848\u5728\u4ee5\u540e\u662f\u53ef\u4ee5\u66f4\u6539\u7684\u3002"),(0,r.kt)(o.Z,{points:[[270,172]],imageSource:"/img/tutorials/tutorial-01/select-theme.png",mdxType:"FigureWithPoints"},"\u9009\u62e9\u4e3b\u9898"),(0,r.kt)("p",null,"\u9009\u62e9\u4e00\u4e2a\u4e3b\u9898\u5e76\u70b9\u51fb \u201c\u786e\u5b9a\u201d (1)\u3002 \u5728\u672c\u6559\u7a0b\u4e2d\uff0c\u6211\u4eec\u5c06\u4f7f\u7528\u6d45\u8272\u65b9\u6848\u3002"),(0,r.kt)("h3",f({},{id:"selecting-a-ui-template"}),"\u9009\u62e9UI\u6a21\u677f"),(0,r.kt)("p",null,"\u60a8\u65e2\u53ef\u4ee5\u5c06\u793a\u4f8b\u4f5c\u4e3a\u9879\u76ee\u7684\u8d77\u70b9\uff0c\u4e5f\u53ef\u4ee5\u5c06\u5b83\u4eec\u4f5c\u4e3a\u53c2\u8003\u793a\u4f8b\u3002 \u60a8\u53ef\u4ee5\u5728PC\u4e0a\uff08\u4f7f\u7528TouchGFX Simulator\uff09\u3001STM32\u8bc4\u4f30\u5957\u4ef6\u4e0a\u751a\u81f3\u662f\u57fa\u4e8eSTM32\u7684\u5b9a\u5236\u786c\u4ef6\u4e0a\u8fd0\u884c\u793a\u4f8b\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4e3a\u4e86\u4ece\u793a\u4f8b\u542f\u52a8\u9879\u76ee\uff0c\u70b9\u51fb\u5de6\u4e0a\u89d2\u7684\u201c\u793a\u4f8b\u201d\u56fe\u6807 (1)\uff1a")),(0,r.kt)(o.Z,{points:[[10,30]],imageSource:"/img/tutorials/tutorial-01/select-examples.png",mdxType:"FigureWithPoints"},"\u6253\u5f00\u793a\u4f8b"),(0,r.kt)("p",null,"\u73b0\u5728\uff0cTouchGFX Designer\u5c06\u663e\u793a\u5305\u542b\u53ef\u7528UI\u793a\u4f8b\u7684\u7a97\u53e3\u3002"),(0,r.kt)(o.Z,{points:[[110,50]],imageSource:"/img/tutorials/tutorial-01/all-examples.png",mdxType:"FigureWithPoints"},"\u9009\u62e9\u4e00\u4e2a\u793a\u4f8b"),(0,r.kt)("p",null,"\u9009\u62e9\u201c\u52a8\u753b\u56fe\u50cf\u793a\u4f8b\u201d(1)\u3002"),(0,r.kt)(o.Z,{points:[[420,200]],imageSource:"/img/tutorials/tutorial-01/animated-image-selected.png",mdxType:"FigureWithPoints"},"\u52a8\u753b\u56fe\u50cf\u793a\u4f8b\u5df2\u9009\u4e2d"),(0,r.kt)("h3",f({},{id:"creating-a-project"}),"\u521b\u5efa\u9879\u76ee"),(0,r.kt)("p",null,"\u73b0\u5728\uff0c\u60a8\u53ef\u4ee5\u7528TouchGFX Designer\u521b\u5efa\u9879\u76ee\u3002 \u6211\u4eec\u5728\u53f3\u4fa7\u7ed9\u51fa\u4e86\u9879\u76ee\u540d\u79f0\u201cMyAnimatedImageExample\u201d\u3002 \u8bf7\u6ce8\u610f\uff0c\u60a8\u8fd8\u53ef\u4ee5\u9009\u62e9\u9879\u76ee\u6240\u5c5e\u7684\u6587\u4ef6\u5939 (1)\u3002"),(0,r.kt)("p",null,"\u70b9\u51fb\u201c\u521b\u5efa\u201d\u521b\u5efa\u9879\u76ee\u3002 \u73b0\u5728\uff0cTouchGFX Designer\u5c06\u57fa\u4e8e\u793a\u4f8b\u521b\u5efa\u5b8c\u6574\u9879\u76ee\u3002 \u6b64\u8fc7\u7a0b\u9700\u8981\u7684\u65f6\u95f4\u968f\u4e0b\u8f7d\u901f\u5ea6\u800c\u53d8\u5316\u3002"),(0,r.kt)("h3",f({},{id:"running-touchgfx-simulator"}),"\u8fd0\u884cTouchGFX Simulator"),(0,r.kt)("p",null,"TouchGFX Designer\u73b0\u5df2\u663e\u793a\u7ec4\u5408\u9879\u76ee\u3002 \u4e3a\u4e86\u8fd0\u884cWindows\u6a21\u62df\u5668\uff0c\u70b9\u51fb\u53f3\u4e0b\u89d2\u7684\u201c\u8fd0\u884c\u6a21\u62df\u5668\u201d\u6309\u94ae (1) \u6216\u8005 ",(0,r.kt)(l.Z,{mdxType:"Shortcut"},"\u6309\u4e0b")," \u952e\u76d8\u4e0a\u7684F5\u952e"),(0,r.kt)(o.Z,{points:[[463,245]],imageSource:"/img/tutorials/tutorial-01/the-project-is-ready-4-17.png",mdxType:"FigureWithPoints"},"\u9879\u76ee\u5c31\u7eea"),(0,r.kt)("p",null,"TouchGFX Simulator\u73b0\u5728\u663e\u793a\u4e3a\u5e38\u89c4\u7684Windows\u5e94\u7528\u3002 \u6807\u9898\u680f\u663e\u793a\u5e94\u7528\u540d\u79f0\u3002 \u70b9\u51fb\u201c\u5f00\u59cb\u201d\u6309\u94ae\u53ef\u4e0e\u793a\u4f8b\u4ea4\u4e92\u3002"),(0,r.kt)(i.Z,{width:"50%",imageSource:"/img/tutorials/tutorial-01/the-touchgfx-simulator-4-17.png",mdxType:"Figure"},"TouchGFX Simulator"),(0,r.kt)("p",null,"\u5728\u7ee7\u7eed\u5b66\u4e60\u6559\u7a0b\u4e4b\u524d\uff0c\u5982\u679c\u60a8\u613f\u610f\uff0c\u53ef\u4ee5\u518d\u5c1d\u8bd5\u4e00\u4e9b\u793a\u4f8b\u3002 \u4e0e\u4e4b\u524d\u4e00\u6837\uff0c\u53ea\u9700\u70b9\u51fb\u201c\u6587\u4ef6->\u65b0\u5efa\u201d\u5e76\u9009\u62e9\u65b0\u7684UI\u6a21\u677f\u3002"),(0,r.kt)("h2",f({},{id:"running-an-example-on-an-stm32-evaluation-kit"}),"\u5728STM32\u8bc4\u4f30\u5957\u4ef6\u4e0a\u8fd0\u884c\u793a\u4f8b"),(0,r.kt)("p",null,"\u5728\u8fd9\u4e00\u6b65\u4e2d\uff0c\u60a8\u5c06\u5b66\u4e60\u5982\u4f55\u542f\u52a8STM32F746-Disco\u677f\u7684\u9879\u76ee\uff0c\u4ee5\u53ca\u5982\u4f55\u5728\u8be5\u677f\u5361\u4e0a\u8fd0\u884c\u4e00\u4e2aTouchGFX\u793a\u4f8b\u3002 \u5982\u679c\u60a8\u6ca1\u6709STM32\u8bc4\u4f30\u5957\u4ef6\uff0c\u53ef\u4ee5\u76f4\u63a5\u8df3\u8fc7\u8fd9\u4e00\u6b65\u3002 \u5982\u679c\u60a8\u6709\u5176\u4ed6SMT32\u8bc4\u4f30\u5957\u4ef6\uff0c\u8bf7\u67e5\u770b\u652f\u6301\u7684\u677f\u5361\u5217\u8868\u4e2d\u662f\u5426\u5305\u542b\u60a8\u7684\u5957\u4ef6\u3002"),(0,r.kt)("p",null,"TouchGFX Designer\u6709\u4e00\u4e2a\u9884\u5236\u5e94\u7528\u6a21\u677f\u5217\u8868\uff0c\u5176\u4e2d\u5305\u542b\u5404\u79cd\u4e0d\u540cSMT32\u8bc4\u4f30\u5957\u4ef6\u7684\u5bf9\u5e94\u6a21\u677f\u3002 \u4e3a\u4e86\u57fa\u4e8e\u8fd9\u6837\u7684\u6a21\u677f\u521b\u5efa\u9879\u76ee\uff0c\u70b9\u51fb\u5de6\u4e0a\u89d2\u7684\u201c\u793a\u4f8b\u201d\u56fe\u6807\uff0c\u5728TouchGFX Designer\u4e2d\u91cd\u65b0\u5f00\u59cb\u65b0\u5efa\u9879\u76ee\u3002"),(0,r.kt)(o.Z,{points:[[10,30]],imageSource:"/img/tutorials/tutorial-01/select-examples.png",mdxType:"FigureWithPoints"},"\u4ece\u793a\u4f8b\u5f00\u59cb"),(0,r.kt)("p",null,"\u9009\u62e9\u201c\u52a8\u753b\u56fe\u50cf\u793a\u4f8b\u201d\uff08\u82e5\u5c1a\u672a\u9009\u4e2d\uff09\u3002 \u70b9\u51fb\u201c\u9009\u62e9\u786c\u4ef6\u201d\u6309\u94ae\u9009\u62e9\u5177\u4f53\u786c\u4ef6\u3002 \u9ed8\u8ba4\u7684\u201c\u6a21\u62df\u5668\u201d\u53ea\u5141\u8bb8\u5728Windows\u4e0a\u8fd0\u884c\u3002"),(0,r.kt)(o.Z,{points:[[70,10]],imageSource:"/img/tutorials/tutorial-01/animated-image-selected.png",mdxType:"FigureWithPoints"},"\u52a8\u753b\u56fe\u50cf\u793a\u4f8b\u5df2\u9009\u4e2d"),(0,r.kt)("p",null,"TouchGFX Designer\u73b0\u5df2\u663e\u793a\u53ef\u7528\u7684\u786c\u4ef6\u914d\u7f6e\uff1a"),(0,r.kt)(o.Z,{points:[[176,140],[440,215]],imageSource:"/img/tutorials/tutorial-01/select-hardware.png",mdxType:"FigureWithPoints"},"\u52a8\u753b\u56fe\u50cf\u793a\u4f8b\u5df2\u9009\u4e2d"),(0,r.kt)("p",null,"\u5bf9\u4e8e\u8fd9\u4e00\u6b65\uff0c\u6211\u4eec\u5c06\u4f7f\u7528STM32F746-Disco\u677f\uff0c\u56e0\u6b64\u70b9\u51fb\u201cSTM32F746G\u63a2\u7d22\u5957\u4ef6\u201d(1) \u5e76\u70b9\u51fb\u201c\u9009\u62e9\u201d(2)\u3002"),(0,r.kt)("p",null,"\u73b0\u5728\u53ef\u4ee5\u521b\u5efa\u9879\u76ee\u3002 \u5982\u679c\u60a8\u613f\u610f\uff0c\u53ef\u4ee5\u66f4\u6539\u5e94\u7528\u540d\u79f0\u3002 \u8fd9\u91cc\u6211\u4eec\u5c06\u5b83\u6539\u6210\u4e86\u201cMyAnimatedImageExample746\u201d\u3002 \u70b9\u51fb\u201c\u521b\u5efa\u201d\u6309\u94ae\u7ee7\u7eed\u3002"),(0,r.kt)(o.Z,{points:[[460,240]],imageSource:"/img/tutorials/tutorial-01/create-the-final-project-4-17.png",mdxType:"FigureWithPoints"},"\u521b\u5efa\u9879\u76ee"),(0,r.kt)("p",null,"\u9879\u76ee\u7684\u5916\u89c2\u4e0e\u6211\u4eec\u5728\u4e0a\u4e00\u6b65\u4e2d\u770b\u5230\u7684\u7c7b\u4f3c\u3002 \u552f\u4e00\u7684\u533a\u522b\u662f\uff0c\u73b0\u5728\u201c\u8fd0\u884c\u6a21\u62df\u5668\u201d\u6309\u94ae (2) \u7684\u65c1\u8fb9\u591a\u4e86\u4e00\u4e2a\u201c\u8fd0\u884c\u76ee\u6807\u201d\u6309\u94ae (1)\u3002 \u5728\u60a8\u6309\u4e0b\u6b64\u6309\u94ae\uff08\u6216 ",(0,r.kt)(l.Z,{mdxType:"Shortcut"},"\u952e\u76d8\u4e0a\u7684F6")," >\u65f6\uff0cTouchGFX Designer\u4f7f\u7528GNU ARM C++\u7f16\u8bd1\u5668\u7f16\u8bd1\u9879\u76ee\uff0c\u5e76\u5c06\u5e94\u7528\u5237\u5199\u5230\u76ee\u6807\u786c\u4ef6\u3002 \u6b64\u8fc7\u7a0b\u53ef\u80fd\u9700\u8981\u51e0\u5206\u949f\uff0c\u5177\u4f53\u53d6\u51b3\u4e8e\u8ba1\u7b97\u673a\u7684\u901f\u5ea6\u548c\u5e94\u7528\u7684\u590d\u6742\u5ea6\u3002 TouchGFX Designer\u5e95\u90e8\u7684\u72b6\u6001\u680f\u5c06\u8f93\u51fa\u8fdb\u5ea6\u3002 \u5982\u9700\u5173\u4e8e\u6784\u5efa\u548c\u5237\u5199\u6b65\u9aa4\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u53ef\u6309\u4e0b\u201c\u8be6\u7ec6\u65e5\u5fd7\u201d\u6309\u94ae (3)\uff08\u6216 ",(0,r.kt)(l.Z,{mdxType:"Shortcut"},"CTRL + L")," \u7684Alt + L\u952e\uff09\u3002"),(0,r.kt)(o.Z,{points:[[480,250],[465,250],[100,250],[0,240]],imageSource:"/img/tutorials/tutorial-01/the-project-is-ready-2-4-17.png",mdxType:"FigureWithPoints"},"\u9879\u76ee\u5c31\u7eea"),(0,r.kt)("p",null,"\u5f53\u70e7\u5f55\u5b8c\u6210\u65f6\uff0cTouchGFX Designer\u5c06\u5728\u72b6\u6001\u680f\u4e2d\u5199\u5165\u201c\u70e7\u5f55\u5b8c\u6210\u201d\u3002 \u73b0\u5728\uff0c\u60a8\u5e94\u770b\u5230\u5e94\u7528\u5728\u677f\u4e0a\u8fd0\u884c\u3002"),(0,r.kt)(a.Z,{mdxType:"Note"},"\u4e3a\u4e86\u70e7\u5f55\u76ee\u6807\u786c\u4ef6\uff0c\u60a8\u9700\u8981\u5b89\u88c5STM32CubeProgrammer \u6216\u8005 ST-Link Utility\uff1a",(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)(u.Z,{to:"https://www.st.com/en/development-tools/stm32cubeprog.html",target:"_blank",mdxType:"Link"},"STM32CubeProgrammer")),(0,r.kt)("li",null,(0,r.kt)(u.Z,{to:"https://www.st.com/en/development-tools/stsw-link004.html",target:"_blank",mdxType:"Link"},"STM32 ST-LINK Utility")))),(0,r.kt)("p",null,"\u5982\u679c\u60a8\u70b9\u51fb\u53f3\u4e0b\u89d2\u7684\u201c\u6587\u4ef6\u201d\u6309\u94ae (4)\uff0cTouchGFX Designer\u5c06\u6253\u5f00\u6587\u4ef6\u6d4f\u89c8\u5668\uff0c\u5176\u4e2d\u663e\u793a\u4e86\u65b0\u9879\u76ee\u6240\u5728\u7684\u76ee\u5f55\u3002 \u5bfc\u822a\u5230",(0,r.kt)("inlineCode",{parentName:"p"},"build\\bin"),"\uff0c\u53ef\u4ee5\u770b\u5230\u4ee5\u4e0b\u6587\u4ef6\uff1a"),(0,r.kt)(i.Z,{imageSource:"/img/tutorials/tutorial-01/the-projects-binary-files.png",mdxType:"Figure"},"\u9879\u76ee\u7684\u4e8c\u8fdb\u5236\u6587\u4ef6\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"target.hex"),"\u6587\u4ef6\u662f\u76ee\u6807\u677f\u7684STM32\u5e94\u7528\u3002 \u8fd9\u662fTouchGFX Designer\u521a\u624d\u7f16\u7a0b\u5230\u677f\u5361\u4e0a\u7684\u6587\u4ef6\u3002"),(0,r.kt)("p",null,"\u60a8\u8fd8\u53ef\u4ee5\u4f7f\u7528STM32CubeProgrammer\u6216ST-Link Utility\u624b\u52a8\u70e7\u5f55\u677f\u5361\u3002 \u53c2\u89c1",(0,r.kt)("a",f({parentName:"p"},{href:"../development/ui-development/working-with-touchgfx/compiling-and-flashing"}),"\u201c\u7f16\u8bd1&\u70e7\u5f55\u201d\u9875\u9762"),"\u4e86\u89e3\u8be6\u7ec6\u4fe1\u606f\u3002"))}S.isMDXComponent=!0}}]);