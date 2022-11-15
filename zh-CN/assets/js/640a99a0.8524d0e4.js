"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[7084],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(r),m=o,h=d["".concat(u,".").concat(m)]||d[m]||s[m]||l;return r?n.createElement(h,a(a({ref:t},p),{},{components:r})):n.createElement(h,a({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,a=new Array(l);a[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var c=2;c<l;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},88678:function(e,t,r){var n=r(67294);class o extends n.Component{render(){const e=`highlight highlight-${this.props.type}`;return n.createElement("div",{className:e},n.createElement("div",{className:"highlight-heading"},n.createElement("h5",null,n.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),n.createElement("div",{className:"highlight-content"},this.props.children))}}t.Z=o},93054:function(e,t,r){var n=r(67294),o=r(88678);const l=n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},n.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));class a extends n.Component{render(){return n.createElement(o.Z,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:l},this.props.children)}}t.Z=a},94499:function(e,t,r){r.r(t),r.d(t,{assets:function(){return v},contentTitle:function(){return f},default:function(){return y},frontMatter:function(){return h},metadata:function(){return b},toc:function(){return g}});var n=r(3905),o=r(93054),l=r(39130),a=Object.defineProperty,i=Object.defineProperties,u=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,d=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&d(e,r,t[r]);if(c)for(var r of c(t))s.call(t,r)&&d(e,r,t[r]);return e};const h={id:"11-flash-loader",title:"11. \u95ea\u5b58\u4e0b\u8f7d",sidebar_label:"11. \u95ea\u5b58\u4e0b\u8f7d"},f=void 0,b={unversionedId:"development/board-bring-up/how-to/11-flash-loader",id:"development/board-bring-up/how-to/11-flash-loader",title:"11. \u95ea\u5b58\u4e0b\u8f7d",description:"",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/board-bring-up/how-to/11-flash-loader.mdx",sourceDirName:"development/board-bring-up/how-to",slug:"/development/board-bring-up/how-to/11-flash-loader",permalink:"/4.20/zh-CN/docs/development/board-bring-up/how-to/11-flash-loader",draft:!1,tags:[],version:"current",sidebarPosition:11,frontMatter:{id:"11-flash-loader",title:"11. \u95ea\u5b58\u4e0b\u8f7d",sidebar_label:"11. \u95ea\u5b58\u4e0b\u8f7d"},sidebar:"docs",previous:{title:"10. \u6309\u94ae",permalink:"/4.20/zh-CN/docs/development/board-bring-up/how-to/10-physical-buttons"},next:{title:"TouchGFX\u5f00\u53d1\u7b80\u4ecb",permalink:"/4.20/zh-CN/docs/development/touchgfx-hal-development/touchgfx-al-development-introduction"}},v={},g=[{value:"\u52a8\u673a",id:"motivation",level:2},{value:"\u76ee\u6807",id:"goal",level:2},{value:"\u9a8c\u8bc1",id:"verification",level:3},{value:"\u5148\u51b3\u6761\u4ef6",id:"prerequisites",level:2},{value:"\u6267\u884c",id:"do",level:2},{value:"STM32CubeProgrammer\u7684\u95ea\u5b58\u88c5\u8f7d\u8f6f\u4ef6",id:"flash-loader-for-stm32cubeprogrammer",level:3},{value:"\u57fa\u4e8e\u5e94\u7528\u7a0b\u5e8f\u7684\u4e13\u6709\u89e3\u51b3\u65b9\u6848",id:"proprietary-application-based-solution",level:3},{value:"\u6d4b\u8bd5",id:"testing",level:3}],k={toc:g};function y(e){var t,r=e,{components:a}=r,d=((e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&c)for(var n of c(e))t.indexOf(n)<0&&s.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=m(m({},k),d),i(t,u({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("h2",m({},{id:"motivation"}),"\u52a8\u673a"),(0,n.kt)("p",null,"\u5728\u8be5\u6b65\u9aa4\u4e2d\uff0c\u6211\u4eec\u5c06\u8ba8\u8bba\u5982\u4f55\u628a\u6570\u636e\u52a0\u8f7d\u5230\u5916\u90e8\u95ea\u5b58\u3002 \u7f16\u8bd1\u5668\u5c06\u7f16\u8bd1\u9879\u76ee\u4e2d\u7684\u6587\u5b57\u3001\u5b57\u5e93\u548c\u56fe\u50cf\uff0c\u5e76\u5c06\u8fd9\u4e9b\u6570\u636e\u751f\u6210\u4e8c\u8fdb\u5236\u6216\u5341\u516d\u8fdb\u5236\u6587\u4ef6\u3002 \u6b64\u6570\u636e\u901a\u5e38\u88ab\u653e\u5165\u5916\u90e8\u95ea\u5b58\u3002 \u5185\u90e8\u95ea\u5b58\u88ab\u4fdd\u7559\u7528\u4e8e\u7a0b\u5e8f\u4ee3\u7801\u3002"),(0,n.kt)("p",null,"\u5728\u5f00\u53d1\u8fc7\u7a0b\u4e2d\uff0c\u6211\u4eec\u9700\u8981\u4e00\u79cd\u65b9\u6cd5\u5c06\u6570\u636e\u5199\u5165\u5916\u90e8\u95ea\u5b58\uff0c\u5f53\u7136\uff0c\u4ece\u95ea\u5b58\u8bfb\u53d6\u6570\u636e\u6267\u884c\u7a0b\u5e8f\u65f6\u5c31\u6ca1\u5fc5\u8981\u505a\u5199\u5165\u64cd\u4f5c\u3002"),(0,n.kt)("p",null,"\u5728\u5f00\u53d1\u8fc7\u7a0b\u4e2d\uff0c\u6211\u4eec\u9700\u8981\u4e00\u79cd\u65b9\u6cd5\u5c06\u6570\u636e\u5199\u5165\u5916\u90e8\u95ea\u5b58\uff0c\u5f53\u7136\uff0c\u4ece\u95ea\u5b58\u8bfb\u53d6\u6570\u636e\u6267\u884c\u7a0b\u5e8f\u65f6\u5c31\u6ca1\u5fc5\u8981\u505a\u5199\u5165\u64cd\u4f5c\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u4e3aSTM32CubeProgrammer\u7f16\u5199\u95ea\u5b58\u88c5\u8f7d\u8f6f\u4ef6"),(0,n.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u57fa\u4e8e\u5e94\u7528\u7a0b\u5e8f\u7684\u4e13\u6709\u89e3\u51b3\u65b9\u6848")),(0,n.kt)(o.Z,{mdxType:"Note"},"\u5982\u679c\u4f60\u7684\u5f00\u53d1\u677f\u6ca1\u6709\u5916\u90e8\u95ea\u5b58\uff0c\u8bf7\u8df3\u8fc7\u6b64\u6b65\u9aa4"),(0,n.kt)("h2",m({},{id:"goal"}),"\u76ee\u6807"),(0,n.kt)("p",null,"\u4e24\u79cd\u5c06\u6570\u636e\u5199\u5165\u5916\u90e8\u95ea\u5b58\u7684\u5e38\u89c1\u65b9\u6cd5\uff1a"),(0,n.kt)("h3",m({},{id:"verification"}),"\u9a8c\u8bc1"),(0,n.kt)("p",null,"\u672c\u8282\u65e8\u5728\u9009\u62e9\u5e76\u5f00\u53d1\u4e00\u79cd\u5c06\u6570\u636e\u52a0\u8f7d\u5230\u5916\u90e8\u95ea\u5b58\u7684\u673a\u5236\u3002"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:null}),"\u9a8c\u8bc1\u70b9"),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"\u57fa\u672c\u539f\u7406"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"\u6570\u636e\u53ef\u4ee5\u5237\u5165"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"\u5916\u90e8\u95ea\u5b58\u53ef\u7528\u4e8e\u56fe\u50cf\u5b58\u50a8")))),(0,n.kt)("h2",m({},{id:"prerequisites"}),"\u5148\u51b3\u6761\u4ef6"),(0,n.kt)("p",null,"\u4ee5\u4e0b\u662f\u672c\u8282\u7684\u9a8c\u8bc1\u70b9\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u6709\u5173\u95ea\u5b58\u7684\u4fe1\u606f\uff0c\u67e5\u9605\u6570\u636e\u624b\u518c"),(0,n.kt)("li",{parentName:"ul"},"\u6709\u5173MCU\u548c\u5916\u90e8\u95ea\u5b58\u4e4b\u95f4\u7684\u8fde\u63a5\u7684\u4fe1\u606f")),(0,n.kt)("h2",m({},{id:"do"}),"\u6267\u884c"),(0,n.kt)("h3",m({},{id:"flash-loader-for-stm32cubeprogrammer"}),"STM32CubeProgrammer\u7684\u95ea\u5b58\u88c5\u8f7d\u8f6f\u4ef6"),(0,n.kt)("p",null,(0,n.kt)("a",m({parentName:"p"},{href:"https://www.st.com/en/development-tools/stm32cubeprog.html"}),"STM32CubeProgrammer"),"\u5e26\u6709\u7528\u4e8e\u5404\u79cdSTM32\u8bc4\u4f30\u5957\u4ef6\u7684\u95ea\u5b58\u88c5\u8f7d\u7a0b\u5e8f\u3002 \u95ea\u5b58\u88c5\u8f7d\u8f6f\u4ef6\u662f\u53ef\u88c5\u8f7d\u5230MCU\u7684RAM\u4e2d\u7684\u5c0f\u7a0b\u5e8f\uff0c\u4ee5\u4fbf\u5bf9\u95ea\u5b58\u8fdb\u884c\u7f16\u7a0b\u3002"),(0,n.kt)("p",null,"\u95ea\u5b58\u88c5\u8f7d\u8f6f\u4ef6\u5305\u62ec\u4e24\u90e8\u5206:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u914d\u7f6e\u4e0e\u95ea\u5b58\u901a\u4fe1\u6240\u9700\u7684GPIO\u548c\u95ea\u5b58\u63a5\u53e3"),(0,n.kt)("li",{parentName:"ul"},"\u9002\u914d\u95ea\u5b58\u7f16\u7a0b\u6240\u9700\u7684\u6307\u4ee4\u5e8f\u5217\u7684\u95ea\u5b58\u7b97\u6cd5")),(0,n.kt)("p",null,"\u8fd9\u4e9b\u901a\u5e38\u57fa\u4e8e\u73b0\u6709\u7684\u95ea\u5b58\u88c5\u8f7d\u7a0b\u5e8f\u3002 \u5982\u679c\u60a8\u53ef\u4ee5\u4e3a\u6b63\u5728\u4f7f\u7528\u7684\u95ea\u5b58\u627e\u5230\u95ea\u5b58\u88c5\u8f7d\u8f6f\u4ef6\uff0c\u6700\u597d\u5c06\u8be5\u8f6f\u4ef6\u4f5c\u4e3a\u84dd\u672c\u5e76\u4fee\u6539GPIO\u90e8\u5206\u3002 \u5982\u679c\u60a8\u901a\u8fc7\u590d\u5236\u8bc4\u4f30\u5957\u4ef6\u4e2d\u7684\u95ea\u5b58\u7535\u8def\u6765\u8bbe\u8ba1\u786c\u4ef6\uff0c\u5219\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\u8be5\u5957\u4ef6\u7684\u95ea\u5b58\u88c5\u8f7d\u8f6f\u4ef6\u3002 This is the way."),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"STM32CubeProgrammer"),"\u968f\u9644\u7684\u95ea\u5b58\u88c5\u8f7d\u8f6f\u4ef6\u9879\u76ee\u4f4d\u4e8e\u5b89\u88c5\u6587\u4ef6\u5939\u4e2d\uff0c\u5176\u8def\u5f84\u901a\u5e38\u4e3a\uff1a ",(0,n.kt)("em",{parentName:"p"},"C:\\Program Files\\STMicroelectronics\\STM32Cube\\STM32CubeProgrammer\\bin\\ExternalLoader")),(0,n.kt)("p",null,"Flash loader projects can also be found on github:"),(0,n.kt)(l.Z,{to:"https://github.com/STMicroelectronics/stm32-external-loader",mdxType:"Link"},"STM32 External Flashloaders on GitHub"),(0,n.kt)("h3",m({},{id:"proprietary-application-based-solution"}),"\u57fa\u4e8e\u5e94\u7528\u7a0b\u5e8f\u7684\u4e13\u6709\u89e3\u51b3\u65b9\u6848"),(0,n.kt)("p",null,"\u53e6\u4e00\u79cd\u89e3\u51b3\u65b9\u6848\u662f\u5c06\u95ea\u5b58\u52a0\u8f7d\u4ee3\u7801\u5305\u542b\u5230\u5e94\u7528\u7a0b\u5e8f\u672c\u8eab\u3002 \u8be5\u7406\u5ff5\u662f\uff0c\u60a8\u7684\u5e94\u7528\u7a0b\u5e8f\u4e2d\u5df2\u5b58\u5728\u95ea\u5b58\u914d\u7f6e(\u4ee5\u4fbf\u53ef\u4ee5\u4ece\u5176\u52a0\u8f7d) \uff0c\u4e5f\u8bb8\u60a8\u901a\u8fc7\u4e4b\u524d\u7684\u6d4b\u8bd5\u5df2\u7ecf\u77e5\u9053\u5982\u4f55\u5199\u4e00\u5757\u4ee3\u7801\u5230\u95ea\u5b58\u4e2d\u3002 \u7136\u540e\uff0c\u60a8\u53ea\u9700\u4e00\u79cd\u5c06\u65b0\u7684\u95ea\u5b58\u6570\u636e\u4f20\u8f93\u5230\u60a8\u7684\u5e94\u7528\u7a0b\u5e8f\u7684\u65b9\u6cd5\u3002 \u4e00\u79cd\u65b9\u6cd5\u662f\u901a\u8fc7UART\u3002 \u5e94\u7528\u7a0b\u5e8f\u63a5\u6536\u6570\u636e\u6d41\uff0c\u5e76\u5c06\u6570\u636e\u9010\u5757\u5199\u5165\u95ea\u5b58\u3002"),(0,n.kt)("p",null,"\u5728\u8be5\u64cd\u4f5c\u6267\u884c\u671f\u95f4\uff0c\u95ea\u5b58\u65e0\u6cd5\u5904\u4e8e\u5b58\u50a8\u5668\u6620\u5c04\u6a21\u5f0f\uff0c\u56e0\u6b64\u901a\u5e38\u5fc5\u987b\u5c06\u5e94\u7528\u7a0b\u5e8f\u7f6e\u4e8e\u7279\u6b8a\u6a21\u5f0f\u3002"),(0,n.kt)("p",null,"\u53ef\u5728\u4e92\u8054\u7f51\u4e0a\u627e\u5230\u7528\u4e8e\u5b57\u8282\u4f20\u8f93\u7684\u5f00\u6e90\u89e3\u51b3\u65b9\u6848\u3002 \u4f8b\u5982\uff0cY-modem\u534f\u8bae\u5728\u6570\u636e\u4e0a\u63d0\u4f9b16\u4f4dCRC\u3002"),(0,n.kt)("h3",m({},{id:"testing"}),"\u6d4b\u8bd5"),(0,n.kt)("p",null,"\u53ef\u5728\u4e92\u8054\u7f51\u4e0a\u627e\u5230\u7528\u4e8e\u5b57\u8282\u4f20\u8f93\u7684\u5f00\u6e90\u89e3\u51b3\u65b9\u6848\u3002 \u4f8b\u5982\uff0cY-modem\u534f\u8bae\u5728\u6570\u636e\u4e0a\u63d0\u4f9b16\u4f4dCRC\u3002"),(0,n.kt)("p",null,"\u5efa\u8bae\u7acb\u5373\u5f7b\u5e95\u6d4b\u8bd5\u6574\u4e2a\u95ea\u5b58\uff0c\u4ee5\u5c3d\u65e9\u53d1\u73b0\u53ef\u80fd\u5b58\u5728\u7684\u95ee\u9898\u3002"))}y.isMDXComponent=!0}}]);