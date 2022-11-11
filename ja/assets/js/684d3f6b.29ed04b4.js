"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[7943],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return s}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(n),s=a,g=m["".concat(u,".").concat(s)]||m[s]||d[s]||l;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},22425:function(e,t,n){var r=n(67294);class a extends r.Component{render(){return r.createElement("div",{className:"code-header"},r.createElement("div",null,r.createElement("h5",null,this.props.children)))}}t.Z=a},44035:function(e,t,n){var r=n(67294),a=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,l=e.height,i=(0,a.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:i,target:"_blank"},r.createElement("img",{width:n,height:l,src:i})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:i,target:"_blank"},r.createElement("img",{width:n,height:l,src:i})),r.createElement("p",null,e.children))}},88678:function(e,t,n){var r=n(67294);class a extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{className:e},r.createElement("div",{className:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{className:"highlight-content"},this.props.children))}}t.Z=a},93054:function(e,t,n){var r=n(67294),a=n(88678);const l=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));class i extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:l},this.props.children)}}t.Z=i},85898:function(e,t,n){n.r(t),n.d(t,{assets:function(){return k},contentTitle:function(){return f},default:function(){return A},frontMatter:function(){return h},metadata:function(){return b},toc:function(){return v}});var r=n(3905),a=n(44035),l=n(93054),i=n(22425),o=Object.defineProperty,u=Object.defineProperties,c=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,g=(e,t)=>{for(var n in t||(t={}))d.call(t,n)&&s(e,n,t[n]);if(p)for(var n of p(t))m.call(t,n)&&s(e,n,t[n]);return e};const h={id:"04-enable-external-ram",title:"4. \u5916\u90e8RAM",sidebar_label:"4. \u5916\u90e8RAM"},f=void 0,b={unversionedId:"development/board-bring-up/how-to/04-enable-external-ram",id:"development/board-bring-up/how-to/04-enable-external-ram",title:"4. \u5916\u90e8RAM",description:"",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/development/board-bring-up/how-to/04-enable-external-ram.mdx",sourceDirName:"development/board-bring-up/how-to",slug:"/development/board-bring-up/how-to/04-enable-external-ram",permalink:"/touchgfx-test.github.io/ja/docs/development/board-bring-up/how-to/04-enable-external-ram",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"04-enable-external-ram",title:"4. \u5916\u90e8RAM",sidebar_label:"4. \u5916\u90e8RAM"},sidebar:"docs",previous:{title:"3. \u5185\u90e8RAM\u306b\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u304c\u914d\u7f6e\u3055\u308c\u305f\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4",permalink:"/touchgfx-test.github.io/ja/docs/development/board-bring-up/how-to/03-display-internal"},next:{title:"5. \u5916\u90e8RAM\u306b\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u304c\u914d\u7f6e\u3055\u308c\u305f\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4",permalink:"/touchgfx-test.github.io/ja/docs/development/board-bring-up/how-to/05-display-external"}},k={},v=[{value:"\u52d5\u6a5f",id:"motivation",level:2},{value:"\u76ee\u6a19",id:"goal",level:2},{value:"\u691c\u8a3c",id:"verification",level:3},{value:"\u524d\u63d0\u6761\u4ef6",id:"prerequisites",level:2},{value:"\u4f5c\u696d\u5185\u5bb9",id:"do",level:2},{value:"\u8a73\u7d30\u8a2d\u5b9a",id:"further-configuration",level:3},{value:"RAM\u306e\u30c6\u30b9\u30c8",id:"testing-the-ram",level:3},{value:"\u30c7\u30d0\u30c3\u30ac\u3067RAM\u3092\u8a8d\u8b58\u3067\u304d\u308b\u3053\u3068",id:"test-ram-is-visible-in-the-debugger",level:4},{value:"RAM\u306e\u3059\u3079\u3066\u306e\u7bc4\u56f2\u306b\u5bfe\u3057\u3066\u8aad\u51fa\u3057 / \u66f8\u8fbc\u307f\u304c\u53ef\u80fd\u3067\u3042\u308b\u3053\u3068",id:"ram-is-readable-and-writeable-in-the-whole-range",level:4},{value:"\u671f\u5f85\u901a\u308a\u306e\u6027\u80fd\u304c\u5f97\u3089\u308c\u308b\u3053\u3068",id:"performance-is-as-expected",level:4}],M={toc:v};function A(e){var t,n=e,{components:o}=n,s=((e,t)=>{var n={};for(var r in e)d.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&p)for(var r of p(e))t.indexOf(r)<0&&m.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=g(g({},M),s),u(t,c({components:o,mdxType:"MDXLayout"}))),(0,r.kt)("h2",g({},{id:"motivation"}),"\u52d5\u6a5f"),(0,r.kt)("p",null,"\u3053\u306e\u30b9\u30c6\u30c3\u30d7\u3067\u306f\u3001\u5916\u90e8SDRAM\u3092\u6709\u52b9\u5316\u3057\u307e\u3059\u3002 \u591a\u304f\u306e\u89e3\u50cf\u5ea6\u3067\u306f\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u304c\u5927\u304d\u3059\u304e\u3066\u5185\u90e8RAM\u306b\u53ce\u307e\u308a\u304d\u3089\u306a\u3044\u305f\u3081\u3001\u30b0\u30e9\u30d5\u30a3\u30ab\u30eb\uff65\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3067\u306f\u5916\u90e8RAM\u304c\u5fc5\u8981\u306b\u306a\u308b\u3053\u3068\u304c\u3088\u304f\u3042\u308a\u307e\u3059\u3002 \u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u3088\u3063\u3066\u306f\u30012\u3064\u307e\u305f\u306f3\u3064\u306e\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u3092\u4f7f\u7528\u3059\u308b\u305f\u3081\u3001\u5916\u90e8RAM\u304c\u3055\u3089\u306b\u5fc5\u8981\u306b\u306a\u308a\u307e\u3059\u3002"),(0,r.kt)(l.Z,{mdxType:"Note"},"\u5916\u4ed8\u3051RAM\u304c\u3054\u4f7f\u7528\u306e\u30dc\u30fc\u30c9\u306b\u95a2\u4fc2\u306a\u3044\u5834\u5408\u306f\u3001\u3053\u306e\u30b9\u30c6\u30c3\u30d7\u3092\u30b9\u30ad\u30c3\u30d7\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("p",null,"\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u3092\u5916\u90e8RAM\u306b\u914d\u7f6e\u3059\u308b\u5834\u5408\u3001\u5916\u90e8RAM\u304c\u4e0b\u8a18\u306e\u6761\u4ef6\u3092\u6e80\u305f\u3059\u3053\u3068\u304c\u91cd\u8981\u3067\u3059\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u8aad\u51fa\u3057 / \u66f8\u8fbc\u307f\u304c\u53ef\u80fd\u3067\u3042\u308b\u3053\u3068\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u76ee\u7684\u306e\u901f\u5ea6(\u901a\u5e38\u306f\u6700\u5927) \u3067\u52d5\u4f5c\u3059\u308b\u3053\u3068\u3002")),(0,r.kt)("h2",g({},{id:"goal"}),"\u76ee\u6a19"),(0,r.kt)("p",null,"\u672c\u30bb\u30af\u30b7\u30e7\u30f3\u306e\u76ee\u6a19\u306f\u3001\u5916\u90e8RAM\u3092\u6709\u52b9\u5316\u3057\u3001\u30c7\u30fc\u30bf\u306e\u8aad\u51fa\u3057 / \u66f8\u8fbc\u307f\u3092\u884c\u3046\u3053\u3068\u3067\u3059\u3002"),(0,r.kt)("h3",g({},{id:"verification"}),"\u691c\u8a3c"),(0,r.kt)("p",null,"\u6b21\u306e\u8868\u306b\u3001\u3053\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u306e\u691c\u8a3c\u30dd\u30a4\u30f3\u30c8\u3092\u793a\u3057\u307e\u3059\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",g({parentName:"tr"},{align:null}),"\u691c\u8a3c\u30dd\u30a4\u30f3\u30c8"),(0,r.kt)("th",g({parentName:"tr"},{align:null}),"\u691c\u8a3c\u5185\u5bb9"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",g({parentName:"tr"},{align:null}),"\u5916\u90e8RAM\u3092\u8aad\u307f\u51fa\u305b\u308b"),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"\u5916\u90e8RAM\u3092\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u306e\u683c\u7d0d\u5834\u6240\u3068\u3057\u3066\u4f7f\u7528\u3067\u304d\u308b\u3053\u3068\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",g({parentName:"tr"},{align:null}),"\u5916\u90e8RAM\u306b\u66f8\u304d\u8fbc\u3081\u308b"),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"\u5916\u90e8RAM\u3092\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u306e\u683c\u7d0d\u5834\u6240\u3068\u3057\u3066\u4f7f\u7528\u3067\u304d\u308b\u3053\u3068\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",g({parentName:"tr"},{align:null}),"\u5916\u90e8RAM\u306e\u6027\u80fd"),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"\u5916\u90e8RAM\u5185\u306e\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u3067\u8a31\u5bb9\u3067\u304d\u308b\u30b0\u30e9\u30d5\u30a3\u30c3\u30af\u6027\u80fd\u304c\u5f97\u3089\u308c\u308b\u3053\u3068\u3002")))),(0,r.kt)("h2",g({},{id:"prerequisites"}),"\u524d\u63d0\u6761\u4ef6"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u306b\u3001\u3053\u306e\u30b9\u30c6\u30c3\u30d7\u306e\u524d\u63d0\u6761\u4ef6\u3092\u793a\u3057\u307e\u3059"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"RAM\u306b\u95a2\u3059\u308b\u60c5\u5831(\u901a\u5e38\u306f\u30c7\u30fc\u30bf\u30b7\u30fc\u30c8)"),(0,r.kt)("li",{parentName:"ul"},"\u30de\u30a4\u30af\u30ed\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u3068\u5916\u90e8RAM\u306e\u63a5\u7d9a\u306b\u95a2\u3059\u308b\u60c5\u5831")),(0,r.kt)("h2",g({},{id:"do"}),"\u4f5c\u696d\u5185\u5bb9"),(0,r.kt)("p",null,"\u5916\u90e8SDRAM\u306e\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u306f\u3001STM32CubeMX\u306e\uff3bConnectivity\uff3d> FMC -> \uff3bSDRAM1\uff3d\u3067\u8a2d\u5b9a\u3057\u307e\u3059\u3002"),(0,r.kt)(a.Z,{imageSource:"/img/development/board-bring-up/external-ram/cubemx-01.png",noShadow:!1,width:"600",mdxType:"Figure"},"SDRAM\u306e\u8a2d\u5b9a"),(0,r.kt)("p",null,"AHB\u30af\u30ed\u30c3\u30af(HCLK) \u306f\u3001FMC\u30e1\u30e2\u30ea\uff65\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u306e\u30ea\u30d5\u30a1\u30ec\u30f3\u30b9\uff65\u30af\u30ed\u30c3\u30af\u3067\u3059\u3002 \uff3bClock Configuration\uff3d\u3067\u30af\u30ed\u30c3\u30af\u5468\u6ce2\u6570\u3092\u78ba\u8a8d\u3057\u3001\u305d\u306e\u5024\u3092\u5404\u7a2eSDRAM\u306e\u30af\u30ed\u30c3\u30af\uff65\u30b5\u30a4\u30af\u30eb\u306e\u8a08\u7b97\u306b\u4f7f\u7528\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,"SDRAM\u3067\u4f7f\u7528\u3059\u308bGPIO\u3092\u3059\u3079\u3066\u8a2d\u5b9a\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)(a.Z,{imageSource:"/img/development/board-bring-up/external-ram/cubemx-02.png",noShadow:!1,width:"600",mdxType:"Figure"},"SDRAM\u306eGPIO\u306e\u8a2d\u5b9a"),(0,r.kt)("h3",g({},{id:"further-configuration"}),"\u8a73\u7d30\u8a2d\u5b9a"),(0,r.kt)("p",null,"RAM\u30c1\u30c3\u30d7\u306e\u4e2d\u306b\u306f\u3001\u3055\u3089\u306b\u30c7\u30d0\u30a4\u30b9\u56fa\u6709\u306e\u8a2d\u5b9a\u304c\u5fc5\u8981\u306b\u306a\u308b\u3082\u306e\u304c\u3042\u308a\u307e\u3059\u3002 \u3053\u308c\u306fSTM32CubeMX\u3067\u306f\u8a2d\u5b9a\u3067\u304d\u305a\u3001C\u30b3\u30fc\u30c9\u3067\u8a18\u8ff0\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059 STM32Cube HAL\u306b\u306f\u3001\u30c7\u30d0\u30a4\u30b9\u306b\u30b3\u30de\u30f3\u30c9\u3092\u9001\u4fe1\u3059\u308b\u95a2\u6570\u304c\u3042\u308a\u307e\u3059\u3002 \u4ee5\u4e0b\u306b\u4f8b\u3092\u793a\u3057\u307e\u3059\u3002"),(0,r.kt)(i.Z,{mdxType:"CodeHeader"},"main.c"),(0,r.kt)("pre",null,(0,r.kt)("code",g({parentName:"pre"},{className:"language-cpp"}),"FMC_SDRAM_CommandTypeDef Command;\n\n/* Step 1: Configure a clock configuration enable command */\nCommand.CommandMode            = FMC_SDRAM_CMD_CLK_ENABLE;\nCommand.CommandTarget          = FMC_SDRAM_CMD_TARGET_BANK1;\nCommand.AutoRefreshNumber      = 1;\nCommand.ModeRegisterDefinition = 0;\n\n/* Send the command */\nHAL_SDRAM_SendCommand(&hsdram1, &Command, SDRAM_TIMEOUT);\n")),(0,r.kt)("h3",g({},{id:"testing-the-ram"}),"RAM\u306e\u30c6\u30b9\u30c8"),(0,r.kt)("p",null,"\u5916\u90e8RAM\u3092\u8a2d\u5b9a\u3057\u305f\u5f8c\u306f\u3001\u30c6\u30b9\u30c8\u3059\u308b\u3053\u3068\u304c\u91cd\u8981\u3067\u3059\u3002 \u5c11\u306a\u304f\u3068\u3082\u3001\u4ee5\u4e0b\u306e\u9805\u76ee\u306b\u3064\u3044\u3066\u306f\u30c6\u30b9\u30c8\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u30c7\u30d0\u30c3\u30ac\u3067RAM\u3092\u8a8d\u8b58\u3067\u304d\u308b\u3053\u3068"),(0,r.kt)("li",{parentName:"ul"},"RAM\u306e\u3059\u3079\u3066\u306e\u7bc4\u56f2\u306b\u5bfe\u3057\u3066\u8aad\u51fa\u3057 / \u66f8\u8fbc\u307f\u304c\u53ef\u80fd\u3067\u3042\u308b\u3053\u3068"),(0,r.kt)("li",{parentName:"ul"},"\u671f\u5f85\u901a\u308a\u306e\u6027\u80fd\u304c\u5f97\u3089\u308c\u308b\u3053\u3068")),(0,r.kt)("p",null,"\u30e1\u30e2\u30ea\uff65\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u306f\u3001\u30e1\u30e2\u30ea\u306e\u30bf\u30a4\u30d7\u306b\u57fa\u3065\u3044\u3066\u3001\u5916\u90e8\u30e1\u30e2\u30ea\u306e\u56fa\u5b9a\u30a2\u30c9\u30ec\u30b9\uff65\u30de\u30c3\u30d4\u30f3\u30b0\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002 \u30a2\u30c9\u30ec\u30b9\u306b\u3064\u3044\u3066\u306f\u3001\u4f7f\u7528\u3059\u308b\u30de\u30a4\u30af\u30ed\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u306e\u30c7\u30fc\u30bf\u30b7\u30fc\u30c8\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002 SDRAM\u306f\u901a\u5e38\u30010xC0000000(\u30d0\u30f3\u30af1) \u307e\u305f\u306f0xD0000000(\u30d0\u30f3\u30af2) \u306b\u30de\u30c3\u30d4\u30f3\u30b0\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)("h4",g({},{id:"test-ram-is-visible-in-the-debugger"}),"\u30c7\u30d0\u30c3\u30ac\u3067RAM\u3092\u8a8d\u8b58\u3067\u304d\u308b\u3053\u3068"),(0,r.kt)("p",null,"RAM\u3092\u6709\u52b9\u5316\u3057\u3066\u6700\u521d\u306b\u884c\u3046\u30c6\u30b9\u30c8\u306f\u30c7\u30d0\u30c3\u30ac\u304b\u3089\u306e\u30a2\u30af\u30bb\u30b9\u3067\u3059\u3002 \u3053\u308c\u3067\u3001\u30e1\u30e2\u30ea\u306b\u5bfe\u3059\u308b\u8aad\u51fa\u3057 / \u66f8\u8fbc\u307f\u304c\u53ef\u80fd\u304b\u3069\u3046\u304b\u304c\u7c21\u5358\u306b\u308f\u304b\u308a\u307e\u3059\u3002 \u30e1\u30e2\u30ea\uff65\u30d3\u30e5\u30fc\u30a2\u3092\u958b\u304d\u3001\u8a72\u5f53\u3059\u308b\u30a2\u30c9\u30ec\u30b9\u3092\u8868\u793a\u3057\u307e\u3059\u3002"),(0,r.kt)(a.Z,{imageSource:"/img/development/board-bring-up/external-ram/iar-01.png",noShadow:!1,width:"600",mdxType:"Figure"},"\u30c7\u30d0\u30c3\u30ac\u306b\u304a\u3051\u308b\u30d0\u30f3\u30af2\u30010xD0000000\u306e\u30e1\u30e2\u30ea\u306e\u30c6\u30b9\u30c8"),(0,r.kt)("h4",g({},{id:"ram-is-readable-and-writeable-in-the-whole-range"}),"RAM\u306e\u3059\u3079\u3066\u306e\u7bc4\u56f2\u306b\u5bfe\u3057\u3066\u8aad\u51fa\u3057 / \u66f8\u8fbc\u307f\u304c\u53ef\u80fd\u3067\u3042\u308b\u3053\u3068"),(0,r.kt)("p",null,"\u6b21\u306e\u30c6\u30b9\u30c8\u3067\u306f\u3001\u5916\u90e8\u30e1\u30e2\u30ea\u306b\u3088\u308a\u591a\u304f\u306e\u30c7\u30fc\u30bf\u3092\u66f8\u304d\u8fbc\u3080\u5c0f\u3055\u306a\u30d7\u30ed\u30b0\u30e9\u30e0\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002 \u306a\u308b\u3079\u304f\u3001\u30e1\u30e2\u30ea\u5168\u4f53\u3092\u30c6\u30b9\u30c8\u3057\u3066\u304f\u3060\u3055\u3044\u3002 \u624b\u59cb\u3081\u306b\u3001\u6b21\u306e\u3088\u3046\u306a\u30b3\u30fc\u30c9\u3092\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",g({parentName:"pre"},{className:"language-cpp"}),"uint32_t *externalRAM = 0xC000000;\nconst uint32_t size = 1000;\n\n//write external RAM\nfor(int i = 0; i < size; i++)\n{\n    externalRAM[i] = i;\n}\n")),(0,r.kt)("p",null,"\u30c7\u30d0\u30c3\u30ac\u3067\u518d\u5ea6\u30e1\u30e2\u30ea\u3092\u78ba\u8a8d\u3057\u307e\u3059\u3002 \u3053\u3053\u3067\u3001\u30a2\u30c9\u30ec\u30b9\uff65\u30d4\u30f3\u306e\u4e00\u90e8\u304c\u672a\u63a5\u7d9a\u3060\u3063\u305f\u308a\u3001\u5165\u308c\u66ff\u308f\u3063\u305f\u308a\u3057\u3066\u3044\u308b\u306a\u3069\u3001\u3044\u304f\u3064\u304b\u306e\u7a2e\u985e\u306e\u306e\u30a8\u30e9\u30fc\u304c\u660e\u3089\u304b\u306b\u306a\u308b\u5834\u5408\u304c\u3042\u308a\u307e\u3059\u3002 \u5024\u306e\u30d1\u30bf\u30fc\u30f3\u3092\u5909\u66f4\u3057\u305f\u30c6\u30b9\u30c8\u3082\u5fc5\u8981\u3067\u3059\u3002 \u307e\u305f\u30010\u30011\u30012\u30013\u306a\u3069\u306e\u5c0f\u3055\u306a\u5024\u3057\u304b\u66f8\u304d\u8fbc\u307e\u306a\u3044\u3068\u3001\u30c7\u30fc\u30bf\uff65\u30d4\u30f3\u306e\u4e00\u90e8\u306b\u4e0d\u5177\u5408\u304c\u3042\u3063\u3066\u3082\u691c\u51fa\u3067\u304d\u307e\u305b\u3093\u3002"),(0,r.kt)("p",null,"\u6b21\u306e\u3088\u3046\u306a\u3001\u5c0f\u3055\u306a\u30d7\u30ed\u30b0\u30e9\u30e0\u306b\u3088\u3063\u3066\u30e1\u30e2\u30ea\u306e\u8aad\u51fa\u3057\u3082\u53ef\u80fd\u3067\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",g({parentName:"pre"},{className:"language-cpp"}),'uint32_t *externalRAM = 0xC000000;\nconst uint32_t size = 1000;\n\n//read external RAM\nfor(int i = 0; i < size; i++)\n{\n    ASSERT(externalRAM[i] == i, "external RAM not as expected");\n}\n')),(0,r.kt)("p",null,"\u3053\u306e\u3088\u3046\u306a\u30c6\u30b9\u30c8\u3067\u306f\u3001\u30a2\u30c9\u30ec\u30b9\u304c\u4e0d\u6b63\u78ba\u3067\u3042\u308b\u304b\u3069\u3046\u304b\u306f\u308f\u304b\u308a\u307e\u305b\u3093\u3002"),(0,r.kt)("p",null,"\u30eb\u30fc\u30d7\u3092\u9577\u304f\u3059\u308b\u304b\u3001 \u958b\u59cb\u30a2\u30c9\u30ec\u30b9\u3092\u5909\u66f4\u3057\u3066\u3001\u3059\u3079\u3066\u306e\u30e1\u30e2\u30ea\uff65\u30bb\u30eb\u3092\u30c6\u30b9\u30c8\u3057\u307e\u3059\u3002"),(0,r.kt)("h4",g({},{id:"performance-is-as-expected"}),"\u671f\u5f85\u901a\u308a\u306e\u6027\u80fd\u304c\u5f97\u3089\u308c\u308b\u3053\u3068"),(0,r.kt)("p",null,"\u6b21\u306b\u3001\u5916\u90e8RAM\u306e\u6027\u80fd\u3092\u30c6\u30b9\u30c8\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002 \u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u3092\u5916\u90e8\u30e1\u30e2\u30ea\u306b\u914d\u7f6e\u3059\u308b\u5834\u5408\u306f\u3001\u6027\u80fd\u304c\u91cd\u8981\u3067\u3059\u3002 \u30e1\u30e2\u30ea\u304c\u9045\u3044\u3068\u3001\u30b7\u30b9\u30c6\u30e0\u306e\u30b0\u30e9\u30d5\u30a3\u30c3\u30af\u6027\u80fd\u304c\u52a3\u5316\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,"RAM\u306e\u8aad\u51fa\u3057\u3001\u66f8\u8fbc\u307f\u3001\u66f8\u63db\u3048\u306e\u901f\u5ea6\u3092\u30c6\u30b9\u30c8\u3057\u307e\u3059\u3002 \u901a\u5e38\u3001\u30b0\u30e9\u30d5\u30a3\u30c3\u30af\uff65\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306f\u30e1\u30e2\u30ea\u9593\u3067\u5927\u91cf\u306e\u30c7\u30fc\u30bf\u3092\u30b3\u30d4\u30fc\u3057\u307e\u3059\u3002 \u63cf\u753b\u52d5\u4f5c\u6642\u306b\u3001\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u306b\u591a\u6570\u306e\u66f8\u8fbc\u307f\u3092\u5b9f\u884c\u3057\u3001\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\u3078\u306e\u9001\u4fe1\u6642\u306b\u3001\u591a\u6570\u306e\u8aad\u51fa\u3057\u3092\u5b9f\u884c\u3057\u307e\u3059\u3002 \u30c6\u30b9\u30c8\uff65\u30d7\u30ed\u30b0\u30e9\u30e0\u3067\u306f\u3001\u3053\u308c\u3089\u306e\u52d5\u4f5c\u3092\u6a21\u64ec\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",g({parentName:"pre"},{className:"language-cpp"}),"volatile uint32_t *externalRAM = 0xC000000;\nuint32_t sourcedata[10000];\nconst uint32_t size = 10000;\n\nint begin = HAL_GetTick();\n//write external RAM\nfor(int i = 0; i < size; i++)\n{\n    externalRAM[i] = sourcedata[i];\n}\nint end = HAL_GetTick();\n")),(0,r.kt)("pre",null,(0,r.kt)("code",g({parentName:"pre"},{className:"language-cpp"}),"int begin = HAL_GetTick();\n//Read external RAM\nfor(int i = 0; i < size; i++)\n{\n    sourcedata[i] = externalRAM[i];\n}\nint end = HAL_GetTick();\n")),(0,r.kt)("p",null,"\u30b0\u30e9\u30d5\u30a3\u30c3\u30af\uff65\u30bd\u30d5\u30c8\u30a6\u30a7\u30a2\u306f\u3001\u30d0\u30c3\u30af\u30b0\u30e9\u30a6\u30f3\u30c9\u306e\u753b\u50cf\u3092\u30d6\u30ec\u30f3\u30c9\u3059\u308b\u5834\u5408\u306a\u3069\u306b\u3001\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u306b\u5bfe\u3057\u3066\u30c7\u30fc\u30bf\u3092\u8aad\u307f\u66f8\u304d\u3057\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",g({parentName:"pre"},{className:"language-cpp"}),"//Time modifying external RAM\nint begin = HAL_GetTick();\nfor(int i = 0; i < size; i++)\n{\n    externalRAM[i] += 2;\n}\nint end = HAL_GetTick();\n")),(0,r.kt)("p",null,"\u30e1\u30e2\u30ea\u306e\u901f\u5ea6\u304a\u3088\u3073\u5fc5\u8981\u306a\u7cbe\u5ea6\u306b\u5fdc\u3058\u3066\u3001\u30c6\u30b9\u30c8\u3092\u305f\u3068\u3048\u3070100\u56de\u30eb\u30fc\u30d7\u3055\u305b\u308b\u3053\u3068\u3067\u3001\u7d50\u679c\u306e\u4fe1\u983c\u6027\u3092\u9ad8\u3081\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u5916\u90e8RAM\u306b\u4f9b\u7d66\u3055\u308c\u308b\u30af\u30ed\u30c3\u30af\u304c\u9ad8\u901f\u3059\u304e\u308b\u3068\u3001\u8aad\u51fa\u3057\u307e\u305f\u306f\u66f8\u8fbc\u307f\u52d5\u4f5c\u4e2d\u306b\u8aa4\u3063\u305f\u5024\u304c\u5f97\u3089\u308c\u308b\u5834\u5408\u304c\u3042\u308a\u307e\u3059\u3002 \u3053\u3046\u3057\u305f\u30a8\u30e9\u30fc\u306f\u3001\u4e0a\u8a18\u306e\u3088\u3046\u306a\u5358\u7d14\u306a\u30c6\u30b9\u30c8\u3067\u306f\u691c\u51fa\u304c\u56f0\u96e3\u306a\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u304c\u3001\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\u3067\u306f\u78ba\u8a8d\u3067\u304d\u307e\u3059\u3002"))}A.isMDXComponent=!0}}]);