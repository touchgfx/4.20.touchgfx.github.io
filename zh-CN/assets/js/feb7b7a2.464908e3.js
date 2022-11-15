"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[776],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return s}});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,u=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),g=p(n),s=l,d=g["".concat(u,".").concat(s)]||g[s]||c[s]||i;return n?r.createElement(d,a(a({ref:t},m),{},{components:n})):r.createElement(d,a({ref:t},m))}));function s(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,a=new Array(i);a[0]=g;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:l,a[1]=o;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},44035:function(e,t,n){var r=n(67294),l=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,i=e.height,a=(0,l.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:a,target:"_blank"},r.createElement("img",{width:n,height:i,src:a})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:a,target:"_blank"},r.createElement("img",{width:n,height:i,src:a})),r.createElement("p",null,e.children))}},29415:function(e,t,n){var r=n(67294),l=n(88678);const i=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class a extends r.Component{render(){return r.createElement(l.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:i},this.props.children)}}t.Z=a},88678:function(e,t,n){var r=n(67294);class l extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{className:e},r.createElement("div",{className:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{className:"highlight-content"},this.props.children))}}t.Z=l},82985:function(e,t,n){var r=n(67294);class l extends r.Component{render(){return r.createElement("code",{className:"shortcut"},this.props.children)}}t.Z=l},82558:function(e,t,n){n.r(t),n.d(t,{assets:function(){return b},contentTitle:function(){return v},default:function(){return y},frontMatter:function(){return f},metadata:function(){return h},toc:function(){return N}});var r=n(3905),l=n(44035),i=n(82985),a=n(29415),o=n(39130),u=Object.defineProperty,p=Object.defineProperties,m=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,k=(e,t)=>{for(var n in t||(t={}))g.call(t,n)&&d(e,n,t[n]);if(c)for(var n of c(t))s.call(t,n)&&d(e,n,t[n]);return e};const f={id:"config-view",title:"\u914d\u7f6e\u89c6\u56fe"},v=void 0,h={unversionedId:"development/ui-development/designer-user-guide/config-view",id:"development/ui-development/designer-user-guide/config-view",title:"\u914d\u7f6e\u89c6\u56fe",description:"",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/ui-development/designer-user-guide/config-view.mdx",sourceDirName:"development/ui-development/designer-user-guide",slug:"/development/ui-development/designer-user-guide/config-view",permalink:"/4.20/zh-CN/docs/development/ui-development/designer-user-guide/config-view",draft:!1,tags:[],version:"current",frontMatter:{id:"config-view",title:"\u914d\u7f6e\u89c6\u56fe"},sidebar:"docs",previous:{title:"\u6587\u672c\u89c6\u56fe",permalink:"/4.20/zh-CN/docs/development/ui-development/designer-user-guide/texts-view"},next:{title:"\u4ea4\u4e92",permalink:"/4.20/zh-CN/docs/development/ui-development/designer-user-guide/interactions-view"}},b={},N=[{value:"\u5e38\u89c4\u8bbe\u7f6e",id:"general",level:2},{value:"\u5c4f\u663e\u8bbe\u7f6e",id:"display",level:2},{value:"\u9ed8\u8ba4\u56fe\u50cf\u8bbe\u7f6e",id:"default-image-configuration",level:2},{value:"\u6587\u672c\u8bbe\u7f6e",id:"text-configuration",level:2},{value:"\u4eff\u771f\u5668\u8bbe\u7f6e",id:"simulator",level:2},{value:"\u521b\u5efa\u8bbe\u7f6e",id:"build",level:2},{value:"\u6846\u67b6\u7279\u6027",id:"framework-features",level:2}],w={toc:N};function y(e){var t,n=e,{components:u}=n,d=((e,t)=>{var n={};for(var r in e)g.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&c)for(var r of c(e))t.indexOf(r)<0&&s.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=k(k({},w),d),p(t,m({components:u,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"\u5728\u201c\u914d\u7f6e\u89c6\u56fe\u201d\u4e2d\uff0c\u5305\u542b\u5de5\u7a0b\u7684\u5404\u79cd\u8bbe\u7f6e\uff1a",(0,r.kt)("a",k({parentName:"p"},{href:"#general"}),"\u5e38\u89c4"),", ",(0,r.kt)("a",k({parentName:"p"},{href:"#display"}),"\u5c4f\u663e"),", ",(0,r.kt)("a",k({parentName:"p"},{href:"#default-image-configuration"}),"\u9ed8\u8ba4\u56fe\u50cf\u8bbe\u7f6e"),", ",(0,r.kt)("a",k({parentName:"p"},{href:"#text-configuration"}),"\u6587\u672c\u8bbe\u7f6e"),", ",(0,r.kt)("a",k({parentName:"p"},{href:"#simulator"}),"\u4eff\u771f\u5668"),", ",(0,r.kt)("a",k({parentName:"p"},{href:"#simulator"}),"\u521b\u5efa")," \u4ee5\u53ca ",(0,r.kt)("a",k({parentName:"p"},{href:"#framework-features"}),"\u6846\u67b6\u7279\u6027"),"."),(0,r.kt)(l.Z,{imageSource:"/img/development/ui-development/designer-user-guide/config-view/designer-config-view-4.17.png",mdxType:"Figure"},"\u201c\u914d\u7f6e\u89c6\u56fe\u201d\u4e2d\u7684\u5e38\u89c4\u8bbe\u7f6e"),(0,r.kt)("h2",k({},{id:"general"}),"\u5e38\u89c4\u8bbe\u7f6e"),(0,r.kt)(l.Z,{imageSource:"/img/development/ui-development/designer-user-guide/config-view/designer-config-view-general-4.17.png",mdxType:"Figure"},"\u201c\u914d\u7f6e\u89c6\u56fe\u201d\u4e2d\u7684\u5e38\u89c4\u8bbe\u7f6e"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u5e94\u7528\u540d\u79f0"),(0,r.kt)("br",null)," \u5e94\u7528\u540d\u79f0\u662f\u4e00\u4e2a\u53ea\u8bfb\u5b57\u6bb5\uff0c\u663e\u793a\u521b\u5efa\u5e94\u7528\u65f6\u4e3a\u5e94\u7528\u9009\u5b9a\u7684\u540d\u79f0\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"TouchGFX\u677f\u8bbe\u7f6e"),(0,r.kt)("br",null)," \u8be5\u5b57\u6bb5\u663e\u793a\u521b\u5efa\u5e94\u7528\u65f6\u4f7f\u7528\u7684TouchGFX\u677f\u8bbe\u7f6e\uff0c\u5982\u679c\u6b64\u4fe1\u606f\u4e0d\u53ef\u7528\uff0c\u5c06\u663e\u793a\u201cN/A\u201d\u3002",(0,r.kt)("br",null)," \u5982\u679c\u6b64\u4fe1\u606f\u53ef\u7528\uff0c\u5219\u663e\u793aTouchGFX\u677f\u8bbe\u7f6e\u7684\u540d\u79f0\u548c\u7248\u672c\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u8bed\u8a00\u9009\u62e9"),(0,r.kt)("br",null)," \u6b64\u4e0b\u62c9\u5217\u8868\u5305\u542b",(0,r.kt)("a",k({parentName:"p"},{href:"texts-view"}),"\u6587\u672c"),"\u89c6\u56fe\u4e2d\u914d\u7f6e\u7684\u8bed\u8a00\uff0c\u7528\u4e8e\u9009\u62e9\u5de5\u7a0b\u542f\u52a8\u65f6\u4f7f\u7528\u7684\u8bed\u8a00\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u76ae\u80a4"),(0,r.kt)("br",null)," \u6b64\u4e0b\u62c9\u5217\u8868\u542b\u6709\u4e24\u79cd\u5185\u7f6e\u7684\u98ce\u683c\u8bbe\u7f6e\uff0c\u4f9b\u652f\u6301\u98ce\u683c\u8bbe\u7f6e\u7684\u63a7\u4ef6\u4f7f\u7528\uff0c\u53ef\u4ee5\u9009\u62e9\u201c\u84dd\u8272\u201d\u6216\u201c\u9ed1\u8272\u201d\u3002 ",(0,r.kt)("em",{parentName:"p"},"\u5982\u679c\u63a7\u4ef6\u914d\u7f6e\u4e3a\u201c\u84dd\u8272\u201d\u76ae\u80a4\u7684\u98ce\u683c\uff0c\u5f53\u66f4\u6539\u4e3a\u201c\u9ed1\u8272\u201d\u76ae\u80a4\u65f6\uff0c\u8be5\u63a7\u4ef6\u5c06\u81ea\u52a8\u5207\u6362\u81f3\u201c\u9ed1\u8272\u201d\u76ae\u80a4\u7684\u76f8\u5e94\u98ce\u683c\u3002")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u542f\u52a8\u5c4f\u5e55"),(0,r.kt)("br",null)," \u6b64\u4e0b\u62c9\u5217\u8868\u542b\u6709\u6240\u6709\u5df2\u6dfb\u52a0\u5230\u9879\u76ee\u7684\u5c4f\u5e55\uff0c\u7528\u4e8e\u914d\u7f6e\u5728\u5de5\u7a0b\u542f\u52a8\u65f6\u663e\u793a\u7684\u5c4f\u5e55\u3002"),(0,r.kt)("h2",k({},{id:"display"}),"\u5c4f\u663e\u8bbe\u7f6e"),(0,r.kt)("p",null,"\u8be5\u90e8\u5206\uff0c\u53ef\u4ee5\u914d\u7f6e\u5c4f\u663e\u53c2\u6570\u3002"),(0,r.kt)(l.Z,{imageSource:"/img/development/ui-development/designer-user-guide/config-view/designer-config-view-display-4.17.png",mdxType:"Figure"},"\u201c\u914d\u7f6e\u89c6\u56fe\u201d\u4e2d\u7684\u5c4f\u663e\u8bbe\u7f6e"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u5c3a\u5bf8"),(0,r.kt)("br",null)," \u663e\u793a\u7684\u5927\u5c0f\u53ef\u4ee5\u901a\u8fc7 ",(0,r.kt)("em",{parentName:"p"},"W(\u5bbd\u5ea6)")," \u548c",(0,r.kt)("em",{parentName:"p"},"H(\u9ad8\u5ea6)")," \u5c5e\u6027\u8fdb\u884c\u8bbe\u7f6e\u3002 \u4f46\u662f\uff0c\u5982\u679c\u5df2\u7ecf\u901a\u8fc7TouchGFX\u677f\u8bbe\u7f6e\u914d\u7f6e\u4e86\u5c3a\u5bf8\uff0c\u6b64\u5904\u7684\u5c3a\u5bf8\u914d\u7f6e\u529f\u80fd\u5c06\u4f1a\u88ab\u7981\u7528\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u5c4f\u663e\u65b9\u5411"),(0,r.kt)("br",null)," \u5c4f\u663e\u65b9\u5411\u53ef\u4ee5\u5728\u6a2a\u5c4f\u548c\u7ad6\u5c4f\u4e4b\u95f4\u5207\u6362\u3002 \u8be5\u5c5e\u6027\u4f1a\u5f71\u54cd\u5230\u5de5\u7a0b\u4e2d\u7684\u6240\u7528\u56fe\u50cf\u8f6c\u6362\u4e3acpp\u6587\u4ef6\u7684\u65b9\u5f0f\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u8272\u6df1"),(0,r.kt)("br",null)," \u6b64\u4e0b\u62c9\u5217\u8868\u63d0\u4f9b\u53ef\u4f9b\u5de5\u7a0b\u4f7f\u7528\u7684\u8272\u6df1\u9009\u9879\u3002 \u8fd9\u4e9b\u8bbe\u7f6e\u53d6\u51b3\u4e8e\u5de5\u7a0b\u521b\u5efa\u65f6\u4f7f\u7528\u7684TouchGFX\u677f\u7ea7\u8bbe\u7f6e\u3002"),(0,r.kt)("h2",k({},{id:"default-image-configuration"}),"\u9ed8\u8ba4\u56fe\u50cf\u8bbe\u7f6e"),(0,r.kt)("p",null,"\u5728\u8be5\u90e8\u5206\uff0c\u53ef\u4ee5\u8bbe\u7f6e\u5de5\u7a0b\u4f7f\u7528\u7684\u56fe\u50cf\u9ed8\u8ba4\u8bbe\u7f6e\u3002 \u8fd9\u4e9b\u8bbe\u7f6e\u5c06\u5bf9\u5de5\u7a0b\u4e2d\u7684\u6240\u6709\u56fe\u50cf\u751f\u6548\uff0c\u9664\u975e\u5b83\u4eec\u5728",(0,r.kt)("a",k({parentName:"p"},{href:"images-view"}),"\u56fe\u50cf"),"\u89c6\u56fe\u4e2d\u88ab\u8986\u76d6"),(0,r.kt)(l.Z,{imageSource:"/img/development/ui-development/designer-user-guide/config-view/designer-config-view-default-image-configuration-4.17.png",mdxType:"Figure"},"\u201c\u914d\u7f6e\u89c6\u56fe\u201d\u4e2d\u7684\u201c\u9ed8\u8ba4\u56fe\u50cf\u8bbe\u7f6e\u201d"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u4e0d\u900f\u660e\u56fe\u50cf\u683c\u5f0f"),(0,r.kt)("br",null)," \u6b64\u4e0b\u62c9\u5217\u8868\u7528\u4e8e\u8bbe\u7f6e\u53ea\u6709\u4e0d\u900f\u660e\u50cf\u7d20\u6570\u636e\u7684\u56fe\u50cf\u5e94\u4ee5\u54ea\u79cd\u683c\u5f0f\u751f\u6210\u3002 \u6b64\u4e0b\u62c9\u5217\u8868\u4e2d\u7684\u53ef\u7528\u56fe\u50cf\u683c\u5f0f\u53d6\u51b3\u4e8e\u5de5\u7a0b\u9009\u5b9a\u7684\u8272\u6df1\u53c2\u6570\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u900f\u660e\u56fe\u50cf\u683c\u5f0f"),(0,r.kt)("br",null)," \u6b64\u4e0b\u62c9\u5217\u8868\u7528\u4e8e\u8bbe\u7f6e\u62e5\u6709\u900f\u660e\u50cf\u7d20\u6570\u636e\u7684\u56fe\u50cf\u5e94\u4ee5\u54ea\u79cd\u683c\u5f0f\u751f\u6210\u3002 \u6b64\u4e0b\u62c9\u5217\u8868\u4e2d\u7684\u53ef\u7528\u56fe\u50cf\u683c\u5f0f\u53d6\u51b3\u4e8e\u5de5\u7a0b\u9009\u5b9a\u7684\u8272\u6df1\u53c2\u6570\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u5b58\u50a8\u533a"),(0,r.kt)("br",null)," \u6b64\u4e0b\u62c9\u5217\u8868\u8bbe\u7f6e\u56fe\u50cf\u6570\u636e\u5728\u76ee\u6807\u786c\u4ef6\u4e0a\u7684\u5b58\u50a8\u4f4d\u7f6e\u3002 \u6b64\u4e0b\u62c9\u5217\u8868\u4e2d\u7684\u53ef\u4f9b\u9009\u62e9\u7684\u5b58\u50a8\u533a\u53d6\u51b3\u4e8e\u521b\u5efa\u5de5\u7a0b\u65f6\u4f7f\u7528\u7684TouchGFX\u677f\u8bbe\u7f6e\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u989d\u5916\u5b58\u50a8\u533a"),(0,r.kt)("br",null)," \u5f53\u4f7f\u7528L8\u56fe\u50cf\u683c\u5f0f\u65f6\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528\u8be5\u4e0b\u62c9\u5217\u8868\u7684\u9009\u9879\u5c06\u989c\u8272\u8868\u5b58\u50a8\u5230\u4e0d\u540c\u7684\u5b58\u50a8\u533a\u3002 \u6b64\u4e0b\u62c9\u5217\u8868\u4e2d\u7684\u53ef\u4f9b\u9009\u62e9\u7684\u5b58\u50a8\u533a\u53d6\u51b3\u4e8e\u521b\u5efa\u5de5\u7a0b\u65f6\u4f7f\u7528\u7684TouchGFX\u677f\u8bbe\u7f6e\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u6296\u8272\u7b97\u6cd5"),(0,r.kt)("br",null)," \u6b64\u4e0b\u62c9\u5217\u8868\u8bbe\u7f6e\u56fe\u50cf\u4f7f\u7528\u7684\u6296\u8272\u7b97\u6cd5\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4e0d\u6296\u8272: ",(0,r.kt)("em",{parentName:"li"},"\u5bf9\u56fe\u50cf\u4e0d\u4f7f\u7528\u6296\u8272\u7b97\u6cd5\uff0c \u7531\u4e8e\u4e0d\u4f7f\u7528\u56fe\u50cf\u5904\u7406\uff0c\u6240\u4ee5\u8be5\u8bbe\u7f6e\u6027\u80fd\u6700\u9ad8\u3002 \u7136\u800c\uff0c\u5f53\u8272\u6df1\u8f83\u4f4e\u65f6\u53ef\u80fd\u4f1a\u770b\u5230\u56fe\u50cf\u8d28\u91cf\u4e0b\u964d\uff0c\u8fd9\u5177\u4f53\u53d6\u51b3\u4e8e\u56fe\u50cf\u672c\u8eab\u3002")),(0,r.kt)("li",{parentName:"ul"},"\u5f17\u6d1b\u4f0a\u5fb7-\u65af\u5766\u4f2f\u683c\u7b97\u6cd5: ",(0,r.kt)("em",{parentName:"li"},"\u5c06\u8bef\u5dee\u6269\u6563\u4e8e\u76f8\u90bb\u50cf\u7d20\uff0c\u7ec6\u7c92\u5ea6\u6296\u8272\uff0c\u4f46\u4f1a\u727a\u7272\u6e05\u6670\u5ea6\u3002")),(0,r.kt)("li",{parentName:"ul"},"\u8d3e\u7ef4\u65af, \u6731\u8fea\u65af\u548c\u5c3c\u514b\u7b97\u6cd5\uff1a ",(0,r.kt)("em",{parentName:"li"},"\u4e0e\u5f17\u6d1b\u4f0a\u5fb7-\u65af\u5766\u4f2f\u683c\u7b97\u6cd5\u76f8\u6bd4\uff0c\u4f1a\u5c06\u8bef\u5dee\u8fdb\u4e00\u6b65\u6269\u6563\u5230\u66f4\u8fdc\u50cf\u7d20\uff0c\u56e0\u6b64\u6296\u8272\u66f4\u7c97\u7cd9\uff0c\u4f46\u56fe\u50cf\u66f4\u6e05\u6670\u3002 \u662f3\u79cd\u8bef\u5dee\u6269\u6563\u6296\u8272\u7b97\u6cd5\u4e2d\u6700\u6162\u7684\u4e00\u79cd\u3002")),(0,r.kt)("li",{parentName:"ul"},"\u65af\u5854\u57fa\u7b97\u6cd5\uff1a",(0,r.kt)("em",{parentName:"li"},"\u57fa\u4e8e\u6700\u5c0f\u5e73\u5747\u8bef\u5dee\u6296\u8272\uff0c\u4f46\u66f4\u5feb\u66f4\u6e05\u6670\u3002"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u963f\u5c14\u6cd5\u6296\u8272"),(0,r.kt)("br",null)," \u6b64\u4e0b\u62c9\u5217\u8868\u8bbe\u7f6e\u662f\u5426\u901a\u8fc7\u963f\u5c14\u6cd5\u901a\u9053\u4f7f\u7528\u6296\u8272\u7b97\u6cd5\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u5e03\u5c40\u65cb\u8f6c"),(0,r.kt)("br",null)," \u6b64\u4e0b\u62c9\u5217\u8868\u6307\u5b9a\u56fe\u50cf\u6570\u636e\u751f\u6210\u65f6\u7684\u65cb\u8f6c\u89d2\u5ea6\u3002 \u5982\u679c\u5c4f\u663e\u65b9\u5411\u53d1\u751f\u6539\u53d8\uff0c\u4f7f\u7528\u6b64\u9009\u9879\u6309\u65b0\u5c4f\u663e\u65b9\u5411\u6b63\u786e\u6e32\u67d3\u56fe\u50cf\u3002"),(0,r.kt)("h2",k({},{id:"text-configuration"}),"\u6587\u672c\u8bbe\u7f6e"),(0,r.kt)("p",null,"\u8be5\u90e8\u5206\u9009\u9879\uff0c\u4ee5\u590d\u9009\u6846\u5f62\u5f0f\u5c55\u73b0\uff0c\u7528\u6237\u53ef\u4ee5\u9009\u62e9\u6765\u8bbe\u7f6e\u6587\u672c\u6e32\u67d3\u548c\u5b58\u50a8\u5f62\u5f0f\u3002"),(0,r.kt)(l.Z,{imageSource:"/img/development/ui-development/designer-user-guide/config-view/designer-config-view-text-configuration-4.17.png",mdxType:"Figure"},"\u201c\u914d\u7f6e\u89c6\u56fe\u201d\u4e2d\u7684\u201c\u6587\u672c\u8bbe\u7f6e\u201d"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u91cd\u65b0\u6620\u5c04\u6587\u672c"),(0,r.kt)("br",null)," \u6b64\u9009\u9879\u5b9a\u4e49\u76f8\u540c\u8f6c\u6362\u662f\u5426\u5e94\u91cd\u65b0\u6620\u5c04\u3002 \u91cd\u65b0\u6620\u5c04\u6587\u672c\u5c06\u5728\u6240\u6709\u8bed\u8a00\uff0c\u5b57\u7b26\u8868\u4ee5\u53ca\u5bf9\u9f50\u65b9\u5f0f\u4e2d\u5c06\u76f8\u540c\u7684\u7ffb\u8bd1\u53ca\u540e\u7f00\u7edf\u4e00\u8d77\u6765\uff0c\u8fd9\u5c06\u7f29\u51cf\u6570\u636e\u5927\u5c0f\u3002",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"p"},"\u8be5\u9009\u9879\u4e0e'\u4e8c\u8fdb\u5236\u7ffb\u8bd1\u6587\u4ef6'\u9009\u9879\u4e92\u65a5\u3002")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"A4"),(0,r.kt)("br",null)," \u6b64\u9009\u9879\u5b9a\u4e49\u5b57\u5f62\u7684\u6c34\u5e73\u50cf\u7d20\u6570\u636e\u662f\u5426\u91c7\u7528A4\u683c\u5f0f",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"p"},"\u8be5\u9009\u9879\u53ea\u5f71\u54cd\u914d\u7f6e\u4e3a4bp\u7684\u5b57\u5f62\u8868")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u4e8c\u8fdb\u5236\u7ffb\u8bd1\u6587\u4ef6"),(0,r.kt)("br",null)," \u6b64\u9009\u9879\u5b9a\u4e49\u662f\u5426\u5c06\u9879\u76ee\u4e2d\u7684\u8bd1\u6587\u79fb\u52a8\u5230\u53ef\u5728\u8fd0\u884c\u65f6\u95f4\u52a0\u8f7d\u7684\u4e8c\u8fdb\u5236\u6587\u4ef6\u4e2d\u3002",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"p"},"\u8be5\u9009\u9879\u4e0e\u2018\u91cd\u65b0\u6620\u5c04\u6587\u672c\u2019\u9009\u9879\u4e92\u65a5\u3002")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u4e8c\u8fdb\u5236\u5b57\u4f53\u6587\u4ef6"),(0,r.kt)("br",null)," \u6b64\u9009\u9879\u5b9a\u4e49\u662f\u5426\u5e94\u5c06\u9879\u76ee\u4e2d\u7684\u5b57\u4f53\u6587\u4ef6\u79fb\u5230\u53ef\u5728\u8fd0\u884c\u65f6\u95f4\u52a0\u8f7d\u7684\u4e8c\u8fdb\u5236\u6587\u4ef6\u4e2d\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u6620\u5c04\u5b58\u50a8\u683c\u5f0f"),(0,r.kt)("br",null)," \u6b64\u9009\u9879\u786e\u5b9a\u662f\u5426\u5e94\u5c06\u9879\u76ee\u4e2d\u7684\u5b57\u4f53\u6587\u4ef6\u4ee5\u6620\u5c04\u5b58\u50a8\u683c\u5f0f\u8f93\u51fa\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u975e\u6620\u5c04\u5b58\u50a8\u683c\u5f0f"),(0,r.kt)("br",null)," \u6b64\u9009\u9879\u786e\u5b9a\u662f\u5426\u5e94\u5c06\u9879\u76ee\u4e2d\u7684\u5b57\u4f53\u6587\u4ef6\u4ee5\u975e\u6620\u5c04\u5b58\u50a8\u683c\u5f0f\u8f93\u51fa\u3002"),(0,r.kt)(a.Z,{mdxType:"FurtherReading"},(0,r.kt)(o.Z,{to:"../touchgfx-engine-features/texts-and-fonts",mdxType:"Link"},"\u6587\u672c\u548c\u5b57\u4f53")),(0,r.kt)("h2",k({},{id:"simulator"}),"\u4eff\u771f\u5668\u8bbe\u7f6e"),(0,r.kt)("p",null,"\u5728\u8be5\u90e8\u5206\uff0c\u53ef\u4ee5\u5728\u8fd0\u884c\u4eff\u771f\u5668\u65f6\u4e3a\u5176\u6dfb\u52a0\u76ae\u80a4\u3002 \u6a2a\u5c4f\u548c\u7ad6\u5c4f\u663e\u793a\u9879\u76ee\u5747\u53ef\u3002 ",(0,r.kt)("em",{parentName:"p"},"X")," \u548c",(0,r.kt)("em",{parentName:"p"},"Y")," \u5c5e\u6027\u51b3\u5b9a\u4eff\u771f\u5668\u5728\u76ae\u80a4\u4e2d\u7684\u4f4d\u7f6e\u3002"),(0,r.kt)(l.Z,{imageSource:"/img/development/ui-development/designer-user-guide/config-view/designer-config-view-simulator-4.17.png",mdxType:"Figure"},"\u201c\u914d\u7f6e\u89c6\u56fe\u201d\u4e2d\u7684\u4eff\u771f\u5668\u8bbe\u7f6e"),(0,r.kt)("p",null,"\u4e0b\u9762\u5c31\u662f\u4e00\u4e2a\u5e26\u76ae\u80a4\u4eff\u771f\u5668\u8fd0\u884c\u65f6\u7684\u793a\u4f8b\u3002",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"p"},"\u5f53\u5e26\u76ae\u80a4\u7684\u4eff\u771f\u5668\u8fd0\u884c\u65f6\uff0c\u6807\u51c6\u7a97\u53e3\u63a7\u4ef6\u4f1a\u88ab\u9690\u85cf\u8d77\u6765\u3002 \u5173\u95ed\u4eff\u771f\u5668\u8bf7\u6309")," ",(0,r.kt)(i.Z,{mdxType:"Shortcut"},"Esc\u952e\u3002")),(0,r.kt)(l.Z,{imageSource:"/img/development/ui-development/designer-user-guide/config-view/designer-config-view-simulator-skin.gif",mdxType:"Figure"},"\u5e26\u76ae\u80a4\u7684\u4eff\u771f\u5668\u8fd0\u884c\u5c55\u793a"),(0,r.kt)("h2",k({},{id:"build"}),"\u521b\u5efa\u8bbe\u7f6e"),(0,r.kt)("p",null,"\u5728\u8fd9\u91cc\uff0c\u53ef\u4ee5\u66f4\u6539\u5f53\u70b9\u51fb",(0,r.kt)("a",k({parentName:"p"},{href:"main-window#run-simulator"}),"\u201c\u4eff\u771f\u5668\u8fd0\u884c\u201d"),"\u3001",(0,r.kt)("a",k({parentName:"p"},{href:"main-window#run-target"}),"\u201c\u76ee\u6807\u677f\u8fd0\u884c\u201d"),"\u548c",(0,r.kt)("a",k({parentName:"p"},{href:"main-window#generate-code"}),"\u201c\u751f\u6210\u4ee3\u7801\u201d"),"\u65f6\u6267\u884c\u7684\u6307\u4ee4\u3002"),(0,r.kt)("p",null,"\u5982\u9700\u91cd\u5199\u6307\u4ee4\uff0c\u53ef\u5728\u6587\u672c\u6846\u4e2d\u5199\u5165\u3002 \u5982\u9700\u590d\u539f\uff0c\u70b9\u51fb\u6307\u4ee4\u540d\u79f0\u65c1\u8fb9\u7684\u201c\u91cd\u7f6e\u201d\u6807\u7b7e\u5373\u53ef\u3002"),(0,r.kt)(l.Z,{imageSource:"/img/development/ui-development/designer-user-guide/config-view/designer-config-view-build-4.17.png",mdxType:"Figure"},"\u201c\u914d\u7f6e\u89c6\u56fe\u201d\u4e2d\u7684\u521b\u5efa\u8bbe\u7f6e"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u751f\u6210\u8d44\u6e90\u6307\u4ee4"),(0,r.kt)("br",null)),(0,r.kt)("p",null,"\u901a\u5e38\u8bbe\u7f6e\u6b64\u6307\u4ee4\u6765\u751f\u6210\u6587\u672c\u548c\u56fe\u50cf\u8d44\u6e90\uff0c\u5728TouchGFX Designer\u751f\u6210\u4ee3\u7801\u540e\u6267\u884c\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u751f\u6210\u4ee3\u7801\u6307\u4ee4\u7684\u8ddf\u968f\u6307\u4ee4"),(0,r.kt)("br",null)," \u8be5\u6307\u4ee4\u901a\u5e38\u5728\u751f\u6210\u4ee3\u7801\u6307\u4ee4\u8fd0\u884c\u540e\u8fd0\u884c\uff0c\u7528\u4e8e\u66f4\u65b0\u5404\u79cd\u9879\u76ee\u6587\u4ef6\u3002 \u5185\u7f6e\u547d\u4ee4\u884c\u5de5\u5177",(0,r.kt)("inlineCode",{parentName:"p"},"touchgfx update_project"),"\u652f\u6301\u66f4\u65b0\u4ee5\u4e0b\u9879\u76ee\u6587\u4ef6\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Visual Studio (.vcxproj)"),(0,r.kt)("li",{parentName:"ul"},"Keil (.uvprojx)"),(0,r.kt)("li",{parentName:"ul"},"IAR (.ewp & .ipcf)"),(0,r.kt)("li",{parentName:"ul"},"STM32CubeIDE (.project & .cproject)"),(0,r.kt)("li",{parentName:"ul"},"STM32CubeMX (.ioc)")),(0,r.kt)("p",null,"\u5f53\u7136\uff0c\u5728\u8fd9\u91cc\u53ef\u4ee5\u5199\u5165\u4efb\u4f55\u9700\u8981\u5728\u751f\u6210\u4ee3\u7801\u540e\u6267\u884c\u7684\u6307\u4ee4\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u7f16\u8bd1\u4eff\u771f\u5668\u6307\u4ee4"),(0,r.kt)("br",null)," \u8be5\u6307\u4ee4\u901a\u5e38\u901a\u8fc7\u6267\u884cTouchGFX Designer\u751f\u6210\u7684Makefile\u6765\u6267\u884c\u5de5\u7a0b\u7684\u4eff\u771f\u5668\u7f16\u8bd1\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u8fd0\u884c\u4eff\u771f\u5668\u6307\u4ee4"),(0,r.kt)("br",null)," \u8be5\u6307\u4ee4\u542f\u52a8\u6267\u884csimulator.exe\u6587\u4ef6\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u751f\u6210\u76ee\u6807\u4ee3\u7801\u6307\u4ee4\u7684\u8ddf\u968f\u8d28\u91cf"),(0,r.kt)("br",null)," \u8be5\u6307\u4ee4\u5728\u751f\u6210\u76ee\u6807\u4ee3\u7801\u6307\u4ee4\u8fd0\u884c\u540e\u6267\u884c\uff0c\u901a\u5e38\u7528\u4e8e\u66f4\u65b0\u5404\u79cd\u9879\u76ee\u6587\u4ef6\uff0c\u591a\u6570\u4e3aSTM32CubeMX (.ioc) \u9879\u76ee\u6587\u4ef6\u3002"),(0,r.kt)("p",null,"\u5f53\u7136\uff0c\u5728\u8fd9\u91cc\u53ef\u4ee5\u5199\u5165\u4efb\u4f55\u9700\u8981\u5728\u751f\u6210\u4ee3\u7801\u540e\u6267\u884c\u7684\u6307\u4ee4\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u7f16\u8bd1\u76ee\u6807\u6307\u4ee4"),(0,r.kt)("br",null)," \u8be5\u6307\u4ee4\u7528\u4e8e\u6267\u884c\u76ee\u6807\u786c\u4ef6\u7684\u5de5\u7a0b\u7f16\u8bd1\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u70e7\u5f55\u76ee\u6807\u95ea\u5b58\u6307\u4ee4"),(0,r.kt)("br",null)," \u8be5\u6307\u4ee4\u6267\u884c\u70e7\u5f55\u5de5\u7a0b\u5230\u76ee\u6807\u786c\u4ef6\u95ea\u5b58\u547d\u4ee4\u3002"),(0,r.kt)("h2",k({},{id:"framework-features"}),"\u6846\u67b6\u7279\u6027"),(0,r.kt)("p",null,"\u5728\u8fd9\u91cc\uff0c\u53ef\u4ee5\u542f\u7528/\u7981\u7528\u6846\u67b6\u4e2d\u7684\u7279\u6027\uff0c\u7279\u522b\u662f\u7eb9\u7406\u6620\u5c04\u5668\u63a7\u4ef6\u652f\u6301\u7684\u56fe\u50cf\u683c\u5f0f\u7279\u6027\u3002 \u53ef\u7528\u4e8e\u4f18\u5316\u76ee\u6807\u786c\u4ef6\u5de5\u7a0b\u4ee3\u7801\u91cf\u3002"),(0,r.kt)("p",null,"\u8fd9\u91cc\u663e\u793a\u51fa\u6765\u7684\u53ef\u7528\u9009\u9879\u53d6\u51b3\u4e8e\u4e3a\u5de5\u7a0b\u9009\u62e9\u7684\u8272\u6df1\u3002 \u4e0b\u56fe\u663e\u793a\u4e8624\u4f4d\u8272\u6df1\u7eb9\u7406\u6620\u5c04\u5668\u7684\u56fe\u50cf\u683c\u5f0f\u3002"),(0,r.kt)(l.Z,{imageSource:"/img/development/ui-development/designer-user-guide/config-view/designer-config-view-framework-features-4.17.png",mdxType:"Figure"},"\u201c\u914d\u7f6e\u89c6\u56fe\u201d\u4e2d24bpp\u7684\u6846\u67b6\u7279\u6027\u8bbe\u7f6e"))}y.isMDXComponent=!0}}]);