"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[7059],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,h=m["".concat(p,".").concat(d)]||m[d]||s[d]||o;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},22425:function(e,t,n){var r=n(67294);class a extends r.Component{render(){return r.createElement("div",{className:"code-header"},r.createElement("div",null,r.createElement("h5",null,this.props.children)))}}t.Z=a},44035:function(e,t,n){var r=n(67294),a=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,o=e.height,i=(0,a.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:i,target:"_blank"},r.createElement("img",{width:n,height:o,src:i})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:i,target:"_blank"},r.createElement("img",{width:n,height:o,src:i})),r.createElement("p",null,e.children))}},88678:function(e,t,n){var r=n(67294);class a extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{className:e},r.createElement("div",{className:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{className:"highlight-content"},this.props.children))}}t.Z=a},37793:function(e,t,n){var r=n(67294),a=n(88678);const o=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class i extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:o},this.props.children)}}t.Z=i},90460:function(e,t,n){n.r(t),n.d(t,{assets:function(){return v},contentTitle:function(){return f},default:function(){return N},frontMatter:function(){return g},metadata:function(){return k},toc:function(){return T}});var r=n(3905),a=n(44035),o=n(37793),i=n(22425),l=Object.defineProperty,p=Object.defineProperties,c=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,h=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&d(e,n,t[n]);if(u)for(var n of u(t))m.call(t,n)&&d(e,n,t[n]);return e};const g={id:"scenarios-create-at",title:"TouchGFX\u30dc\u30fc\u30c9\u8a2d\u5b9a\u306e\u4f5c\u6210"},f=void 0,k={unversionedId:"development/scenarios/scenarios-create-at",id:"development/scenarios/scenarios-create-at",title:"TouchGFX\u30dc\u30fc\u30c9\u8a2d\u5b9a\u306e\u4f5c\u6210",description:"",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/development/scenarios/scenarios-create-at.mdx",sourceDirName:"development/scenarios",slug:"/development/scenarios/scenarios-create-at",permalink:"/4.20/ja/docs/development/scenarios/scenarios-create-at",draft:!1,tags:[],version:"current",frontMatter:{id:"scenarios-create-at",title:"TouchGFX\u30dc\u30fc\u30c9\u8a2d\u5b9a\u306e\u4f5c\u6210"},sidebar:"docs",previous:{title:"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u30d4\u30af\u30bb\u30eb\uff65\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u306e\u5909\u66f4",permalink:"/4.20/ja/docs/development/scenarios/scenarios-change-pixelformat-bpp"},next:{title:"\u30c8\u30ea\u30ac\u3068\u3057\u3066\u306e\u5916\u90e8\u30a4\u30d9\u30f3\u30c8",permalink:"/4.20/ja/docs/development/scenarios/example-gpio"}},v={},T=[{value:"TouchGFX\u30dc\u30fc\u30c9\u8a2d\u5b9a\u306e\u8a18\u8ff0",id:"describe-application-template",level:2},{value:"TouchGFX\u30dc\u30fc\u30c9\u8a2d\u5b9a\u306e\u4f5c\u6210",id:"create-touchgfx-board-setup",level:2},{value:"\u30c6\u30b9\u30c8\u3068\u691c\u8a3c",id:"test-verify",level:2},{value:"\u6700\u5f8c\u306e\u6ce8\u610f\u70b9",id:"final-notes",level:2},{value:"\u4e00\u822c\u7684\u306a\u6ce8\u610f\u70b9",id:"general-tips",level:3},{value:"\u30d0\u30fc\u30b8\u30e7\u30f3\u7ba1\u7406",id:"version-control",level:3}],y={toc:T};function N(e){var t,n=e,{components:l}=n,d=((e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&u)for(var r of u(e))t.indexOf(r)<0&&m.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=h(h({},y),d),p(t,c({components:l,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"TouchGFX\u30dc\u30fc\u30c9\u8a2d\u5b9a\uff08TBS\uff09\u3068\u306f\u3001TouchGFX\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304c\u5b9f\u884c\u3055\u308c\u308b\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u3092\u5b9a\u7fa9\u3059\u308b",(0,r.kt)("inlineCode",{parentName:"p"},".tpa"),"\u30d5\u30a1\u30a4\u30eb\u306e\u3053\u3068\u3067\u3059\u3002 \u3053\u306e\u30a2\u30d7\u30ed\u30fc\u30c1\u306f\u3001\u4f7f\u3044\u3084\u3059\u3044TBS\u3092\u3001\u305d\u306e\u4e0a\u3067\u5b9f\u884c\u3055\u308c\u308bUI\u30b3\u30fc\u30c9\u3068\u306f\u5225\u306b\u914d\u5e03\u3057\u305f\u3044\u958b\u767a\u8005\u306b\u5411\u3051\u305f\u3082\u306e\u3067\u3059\u3002 \u3053\u306e\u8a18\u4e8b\u3067\u306f\u3001\u7d44\u8fbc\u307f\u30c4\u30fc\u30eb",(0,r.kt)("inlineCode",{parentName:"p"},"tgfx.exe"),'\u3092\u4f7f\u7528\u3057\u3066\u3001\u65e2\u5b58\u306eTouchGFX\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u518d\u914d\u5e03\u53ef\u80fd\u306aTBS\u306b\u30d1\u30c3\u30b1\u30fc\u30b8\u5316\u3059\u308b\u65b9\u6cd5\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u307e\u3059\u3002 \u3053\u306e\u8a18\u4e8b\u3067\u306f\u3001"MyApplication"\u3068\u3044\u3046\u540d\u524d\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u30d9\u30fc\u30b9\u306b\u3057\u3066\u4f8b\u3092\u793a\u3057\u307e\u3059\u3002'),(0,r.kt)("p",null,"\u5b8c\u5168\u306b\u6a5f\u80fd\u3059\u308bTouchGFX\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u7528\u610f\u3057\u305f\u5f8c\u3001TBS\u3092\u4f5c\u6210\u3059\u308b\u306b\u306f\u6b21\u306e\u624b\u9806\u3092\u5b9f\u884c\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"TouchGFX\u30dc\u30fc\u30c9\u8a2d\u5b9a\u306e\u8a18\u8ff0"),"  ",(0,r.kt)("inlineCode",{parentName:"li"},"tgfx.exe"),"\u3092\u547c\u3073\u51fa\u3057\u3066\u3001json\u30d5\u30a1\u30a4\u30eb\uff08.touchgfx\u304b\u3089\u5f15\u304d\u7d99\u3050\uff09\u3092\u7de8\u96c6\u3059\u308b"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"TouchGFX\u30dc\u30fc\u30c9\u8a2d\u5b9a\u306e\u4f5c\u6210")," ",(0,r.kt)("inlineCode",{parentName:"li"},"tgfx.exe"),"\u3092\u547c\u3073\u51fa\u3057\u3066",(0,r.kt)("inlineCode",{parentName:"li"},".tpa"),"\u3092\u5b8c\u6210\u3055\u305b\u308b"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u30c6\u30b9\u30c8\u3068\u691c\u8a3c")," \u30c7\u30b6\u30a4\u30ca\u306b\u30a4\u30f3\u30dd\u30fc\u30c8\u3057\u3066\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u4f5c\u6210\u3057\u3066\u691c\u8a3c\u3059\u308b")),(0,r.kt)("h2",h({},{id:"describe-application-template"}),"TouchGFX\u30dc\u30fc\u30c9\u8a2d\u5b9a\u306e\u8a18\u8ff0"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"tgfx.exe"),"\u30c4\u30fc\u30eb\u306b\u3088\u308a\u3001TBS\u306e\u5185\u90e8\u69cb\u6210\u3092\u8a18\u8ff0\u3059\u308b\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\uff08.json\uff09\u304c\u751f\u6210\u3055\u308c\u307e\u3059\u3002 \u3053\u306e\u60c5\u5831\u304cTouchGFX Designer\u306b\u3088\u3063\u3066\u8aad\u307f\u53d6\u3089\u308c\u3001\u30e6\u30fc\u30b6\u306b\u8868\u793a\u3055\u308c\u307e\u3059\u3002 TouchGFX Environment\u30b3\u30f3\u30bd\u30fc\u30eb\u3092\u958b\u304d\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u89aa\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u3067\u4ee5\u4e0b\u306e\u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3057\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",h({parentName:"pre"},{}),"$ /d/TouchGFX/4.13.0/designer/tgfx.exe pack -d MyApplication\n")),(0,r.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/create-at-tgfx-zip.png",width:"550px",mdxType:"Figure"},".tpa\u306e\u305f\u3081\u306e\u30d5\u30a1\u30a4\u30eb\u3092\u6e96\u5099"),(0,r.kt)("p",null,"\u30b3\u30de\u30f3\u30c9\u304c\u5b9f\u884c\u3055\u308c\u305f\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306b\u3001\u4ee5\u4e0b\u306e\u30d5\u30a1\u30a4\u30eb\u304c\u4f5c\u6210\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/create-at-desc-files.png",width:"240px",mdxType:"Figure"},"\u751f\u6210\u3055\u308c\u305f\u30d5\u30a1\u30a4\u30eb\u306e\u30ea\u30b9\u30c8"),(0,r.kt)("p",null,"\u6700\u7d42\u7684\u306a",(0,r.kt)("inlineCode",{parentName:"p"},".tpa"),"\u30d5\u30a1\u30a4\u30eb\u3092\u4f5c\u6210\u3059\u308b\u524d\u306b\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"MyApplication.json"),"\u3092\u7de8\u96c6\u3057\u3066\u3001TouchGFX Designer\u3067TBS\u304c\u30e6\u30fc\u30b6\u306b\u3069\u306e\u3088\u3046\u306b\u8868\u793a\u3055\u308c\u308b\u304b\u3092\u8a2d\u5b9a\u3057\u307e\u3059\u3002 \u30e6\u30fc\u30b6\u306f\u4ee5\u4e0b\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u3092\u7de8\u96c6\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Author"),"\uff1a Author\u30bb\u30af\u30b7\u30e7\u30f3\u306e\u30d5\u30a3\u30fc\u30eb\u30c9\u3092\u4f7f\u7528\u3057\u3066\u3001\u4f5c\u8005\u540d\u3001\u9023\u7d61\u5148\u306e\u96fb\u5b50\u30e1\u30fc\u30eb\u3001URL\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Data"),"\uff1a Data\u30bb\u30af\u30b7\u30e7\u30f3\u306e\u30d5\u30a3\u30fc\u30eb\u30c9\u3092\u4f7f\u7528\u3057\u3066\u3001TBS\u30d0\u30fc\u30b8\u30e7\u30f3\u3001\u753b\u50cf\u3001\u30dc\u30fc\u30c9\u540d\u3001\u30d9\u30f3\u30c0\u3001\u8aac\u660e\u3001\u8a73\u7d30\u60c5\u5831\u3078\u306e\u30ea\u30f3\u30af\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002")),(0,r.kt)(i.Z,{mdxType:"CodeHeader"},"MyApplication.json"),(0,r.kt)("pre",null,(0,r.kt)("code",h({parentName:"pre"},{className:"language-json"}),'   ...\n    "Author": [\n      {\n        "Name": "Chad Brody",\n        "Contact": "chad.brody@mycompany.com",\n        "URL": "http://mycompany.com/"\n      }\n    ],\n  ...\n  "Data": {\n    "Version": {\n      "Major": 1,\n      "Minor": 0,\n      "Build": 0\n    },\n    "Name": "MyApplication",\n    "HumanFriendlyName": "MyApplication",\n    "BoardName": "Custom STM32 Board",\n    "Type": "TGAT",\n    "Vendor": "MyCompany",\n    "Description": "This is a working project on which to base your UI on top of.",\n    "DocumentationLink": "",\n    "Category": "",\n    "Images": [\n      "http://mysite.com/MyCustomBoard-front.png",\n      "http://mysite.com/MyCustomBoard-back.png"\n    ],\n    ...\n  }\n}\n')),(0,r.kt)(o.Z,{mdxType:"Tip"},"'Type'\u5c5e\u6027\u306f\u5fc5\u305a",(0,r.kt)("b",null,"TGAT"),"\u3068\u6307\u5b9a\u3057\u3066\u304f\u3060\u3055\u3044\u3002 \u6307\u5b9a\u3057\u306a\u3044\u5834\u5408\u3001TouchGFX Designer\u306bTBS\u304c\u8868\u793a\u3055\u308c\u307e\u305b\u3093\u306e\u3067\u3001\u6ce8\u610f\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)(o.Z,{mdxType:"Tip"},"UI\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u307e\u305f\u306fBoard Specific Demo\u3092\u4f5c\u6210\u3059\u308b\u5834\u5408\u3001\u305d\u306e\u300cType\u300d\u5c5e\u6027\u306f\u305d\u308c\u305e\u308c",(0,r.kt)("b",null,"TGUI"),"\u3068",(0,r.kt)("b",null,"TGAPP"),"\u3067\u3059\u3002"),(0,r.kt)(o.Z,{mdxType:"Tip"},"TBS\u306e\u62e1\u5f35\u60c5\u5831\u30ab\u30fc\u30c9\u3092\u8868\u793a\u3059\u308b\u3068\u304d\u306b\u3001TouchGFX Designer\u306b\u306f\u3053\u306e\u30ea\u30b9\u30c8\u304b\u3089\u6700\u59273\u3064\u306e\u753b\u50cf\uff08\u753b\u50cf\u306e\u53c2\u7167\u306fURL\u306b\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\uff09\u3092\u8868\u793a\u3067\u304d\u307e\u3059\u3002 \u753b\u50cf\u306e\u6700\u9069\u306a\u89e3\u50cf\u5ea6\u306f400x280\u30d4\u30af\u30bb\u30eb\u3067\u3059\u3002 "),(0,r.kt)("h2",h({},{id:"create-touchgfx-board-setup"}),"TouchGFX\u30dc\u30fc\u30c9\u8a2d\u5b9a\u306e\u4f5c\u6210"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u306e\u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3057\u3066\u3001\u6700\u7d42\u7684\u306a'.tpa'\u30d5\u30a1\u30a4\u30eb\u3092\u4f5c\u6210\u3057\u3001TouchGFX\u30dc\u30fc\u30c9\u8a2d\u5b9a\u3092\u5b8c\u4e86\u3057\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",h({parentName:"pre"},{}),"$ /d/TouchGFX/4.13.0/designer/tgfx.exe pack -rc -d MyApplication\n")),(0,r.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/create-at-tgfx-tpa.png",width:"570px",mdxType:"Figure"},"TouchGFX\u30dc\u30fc\u30c9\u8a2d\u5b9a\u306e\u4f5c\u6210"),(0,r.kt)("h2",h({},{id:"test-verify"}),"\u30c6\u30b9\u30c8\u3068\u691c\u8a3c"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},".tpa"),"\u30d5\u30a1\u30a4\u30eb\u304cTouchGFX Designer\u306bTBS\u3068\u3057\u3066\u8868\u793a\u3055\u308c\u3001\u65b0\u3057\u3044\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u4f5c\u6210\u306b\u4f7f\u7528\u3055\u308c\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3059\u308b\u306b\u306f\u3001\u4ee5\u4e0b\u306e\u624b\u9806\u3092\u5b9f\u884c\u3057\u307e\u3059\u3002"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},".tpa"),"\u30d5\u30a1\u30a4\u30eb\u306e\u540d\u524d\u3092\u8981\u4ef6\u306b\u5408\u308f\u305b\u3066\u5909\u66f4\u3057\u307e\u3059\u3002"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},".tpa"),"\u30d5\u30a1\u30a4\u30eb\u3092\u3001",(0,r.kt)("inlineCode",{parentName:"li"},"C:\\TouchGFX\\4.13.0\\app\\packages"),"\u306b\u30b3\u30d4\u30fc\u307e\u305f\u306f\u79fb\u52d5\u3057\u307e\u3059\u3002 \u3053\u308c\u306b\u3088\u308a\u3001\u30e6\u30fc\u30b6\u304cTBS\u3092\u30ed\u30fc\u30ab\u30eb\uff65\u30d5\u30a9\u30eb\u30c0\u304b\u3089TouchGFX Designer\u306b\u30a4\u30f3\u30dd\u30fc\u30c8\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002")),(0,r.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/create-at-mv-to-pkg.png",width:"550",mdxType:"Figure"},"TBS\u3092\u30ed\u30fc\u30ab\u30eb\uff65\u30d5\u30a9\u30eb\u30c0\u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"),(0,r.kt)("ol",h({},{start:3}),(0,r.kt)("li",{parentName:"ol"},"Designer\u3092\u958b\u304d\u3001By Partners\u30bf\u30d6\u306e\u4e0b\u3067TBS\u3092\u9078\u629e\u3057\u307e\u3059\u3002")),(0,r.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/create-at-designer-main-info-4-17.png",width:"550",mdxType:"Figure"},"TBS\u306b\u95a2\u3059\u308b\u60c5\u5831"),(0,r.kt)("h2",h({},{id:"final-notes"}),"\u6700\u5f8c\u306e\u6ce8\u610f\u70b9"),(0,r.kt)("p",null,"\u3053\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u3067\u306f\u3001\u30b3\u30fc\u30c9\u306e\u958b\u767a\u307e\u305f\u306fTBS\u306e\u914d\u5e03\u3092\u884c\u3046\u3068\u304d\u306e\u6ce8\u610f\u70b9\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u307e\u3059\u3002"),(0,r.kt)("h3",h({},{id:"general-tips"}),"\u4e00\u822c\u7684\u306a\u6ce8\u610f\u70b9"),(0,r.kt)("p",null,"\u4e00\u822c\u7684\u306b\u3001",(0,r.kt)("inlineCode",{parentName:"p"},".tpa"),"\u3092\u914d\u5e03\u3059\u308b\u524d\u306b\u306f\u6b21\u306e\u3053\u3068\u3092\u884c\u3046\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u3059\u3079\u3066\u306eIDE\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u304c\u671f\u5f85\u3069\u304a\u308a\u306b\u52d5\u4f5c\u3059\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3059\u308b\u3002"),(0,r.kt)("li",{parentName:"ol"},"build\u30d5\u30a9\u30eb\u30c0\u3068generated\u30d5\u30a9\u30eb\u30c0\u3092\u524a\u9664\u3057\u3066\u3001TBS\u306e\u30b5\u30a4\u30ba\u3092\u524a\u6e1b\u3059\u308b\u3002"),(0,r.kt)("li",{parentName:"ol"},"TouchGFX\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\uff65\u30d5\u30a1\u30a4\u30eb",(0,r.kt)("inlineCode",{parentName:"li"},".touchgfx"),"\u3067\u5b9a\u7fa9\u3057\u305f\u30ab\u30b9\u30bf\u30e0\uff65\u30b3\u30de\u30f3\u30c9\uff08PostGenerate\u306a\u3069\uff09\u304c\u671f\u5f85\u3069\u304a\u308a\u306b\u52d5\u4f5c\u3059\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3059\u308b\u3002"),(0,r.kt)("li",{parentName:"ol"},"TBS\u304cTouchGFX Designer\u306b\u3088\u3063\u3066\u8aad\u307f\u53d6\u308a\u53ef\u80fd\u3067\u3001\u65b0\u3057\u3044\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u4f5c\u6210\u306b\u4f7f\u7528\u3067\u304d\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3059\u308b\u3002"),(0,r.kt)("li",{parentName:"ol"},"TBS\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u9593\u306e\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9\u624b\u9806\u3092\u6307\u5b9a\u3059\u308b\u76f4\u63a5\u7684\u306a\u65b9\u6cd5\u306f\u3042\u308a\u307e\u305b\u3093\u3002")),(0,r.kt)(o.Z,{mdxType:"Tip"},"TouchGFX\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u307e\u305f\u306f.json\u30d5\u30a1\u30a4\u30eb\u306e\u30b3\u30f3\u30c6\u30f3\u30c4\u3092\u5909\u66f4\u3057\u305f\u5f8c\u306f\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\uff65\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3092\u5fc5\u305a\u518d\u30d1\u30c3\u30af\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},".tpa"),"\u306e\u914d\u5e03\u5f8c\u306f\u3001",(0,r.kt)("inlineCode",{parentName:"p"},".tpa"),"\u30d5\u30a1\u30a4\u30eb\u3092",(0,r.kt)("inlineCode",{parentName:"p"},"C:\\TouchGFX\\4.13.0\\app\\packages"),"\u306b\u30b3\u30d4\u30fc\u3057\u3066\u3001Designer\u304c\u958b\u3044\u3066\u3044\u308b\u5834\u5408\u306f\u518d\u8d77\u52d5\u3059\u308b\u3088\u3046\u306b\u3001\u30e6\u30fc\u30b6\u306b\u6307\u793a\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,r.kt)("h3",h({},{id:"version-control"}),"\u30d0\u30fc\u30b8\u30e7\u30f3\u7ba1\u7406"),(0,r.kt)("p",null,"\u901a\u5e38\u3001\u958b\u767a\u8005\u306f\u958b\u767a\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u5168\u4f53\uff08Board bringup\u3001TouchGFX AL\u3001TouchGFX UI\uff09\u3092\u540c\u3058\u30ea\u30dd\u30b8\u30c8\u30ea\u5185\u306b\u4fdd\u6301\u3059\u308b\u306e\u3067\u3001\u914d\u5e03\u53ef\u80fd\u306a",(0,r.kt)("inlineCode",{parentName:"p"},".tpa"),"\u30d5\u30a1\u30a4\u30eb\u306f\u5fc5\u8981\u3042\u308a\u307e\u305b\u3093\u3002 \u305f\u3060\u3057\u3001\u30c1\u30fc\u30e0\u306e\u30e1\u30f3\u30d0\u30fc\u304c\u65b0\u3057\u3044TouchGFX\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u958b\u59cb\u3067\u304d\u308b\u3088\u3046\u306b\u3059\u308b\u306b\u306f\u3001\u7d71\u4e00\u3055\u308c\u305f\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\uff65\u30b3\u30fc\u30c9\u304c\u30c6\u30b9\u30c8\u3084\u691c\u8a3c\u306e\u969b\u306b\u5f79\u306b\u7acb\u3061\u307e\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},".tpa"),"\u30d5\u30a1\u30a4\u30eb\u3092\u914d\u5e03\u3057\u305f\u308a\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"repo"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"git submodules"),"\u306a\u3069\u306e\u30c4\u30fc\u30eb\u3092\u4f7f\u7528\u3057\u3066\u30b3\u30fc\u30c9\u30d9\u30fc\u30b9\u3092\u30e2\u30b8\u30e5\u30e9\u30fc\u5316\u3057\u305f\u308a\u3059\u308b\u5834\u5408\u306b\u306f\u3001\u3053\u306e\u8a18\u4e8b\u306e\u524d\u3067\u53d6\u308a\u4e0a\u3052\u305f\u3088\u3046\u306b\u3001TBS\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u3092",(0,r.kt)("inlineCode",{parentName:"p"},".json"),"\u30c7\u30a3\u30b9\u30af\u30ea\u30d7\u30bf\u3067\u6307\u5b9a\u3055\u308c\u305f\u30d0\u30fc\u30b8\u30e7\u30f3\u306b\u5408\u308f\u305b\u308b\u65b9\u304c\u8ce2\u660e\u3067\u3059\u3002 \u30e2\u30b8\u30e5\u30e9\u30fc\u578b\u306e\u30a2\u30d7\u30ed\u30fc\u30c1\u3092\u4f7f\u7528\u3059\u308b\u5834\u5408\u3001platform\u306e\u30b3\u30fc\u30c9\u306f\u3001\u914d\u5e03\u53ef\u80fd\u306a",(0,r.kt)("inlineCode",{parentName:"p"},".tpa"),"\u30d5\u30a1\u30a4\u30eb\u3092\u4f5c\u6210\u3059\u308b\u305f\u3081\u306b\u4f7f\u7528\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u304c\u3001\u30e1\u30a4\u30f3\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u69cb\u6210\u5185\u306e\u30e2\u30b8\u30e5\u30fc\u30eb\u3068\u3057\u3066\u4f7f\u7528\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",h({parentName:"pre"},{className:"language-json"}),'  "Data": {\n    "Version": {\n      "Major": 3,\n      "Minor": 0,\n      "Build": 0\n    },\n')),(0,r.kt)("pre",null,(0,r.kt)("code",h({parentName:"pre"},{}),"$ git tag\nv1.1.0\nv2.0.0\nv2.1.0\nv3.0.0\n")))}N.isMDXComponent=!0}}]);