"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[8183],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,h=m["".concat(p,".").concat(d)]||m[d]||s[d]||i;return n?r.createElement(h,a(a({ref:t},u),{},{components:n})):r.createElement(h,a({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},29415:function(e,t,n){var r=n(67294),o=n(88678);const i=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class a extends r.Component{render(){return r.createElement(o.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:i},this.props.children)}}t.Z=a},88678:function(e,t,n){var r=n(67294);class o extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{className:e},r.createElement("div",{className:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{className:"highlight-content"},this.props.children))}}t.Z=o},65407:function(e,t,n){var r=n(67294),o=n(25026);t.Z=function(e){var t,n;const i=(0,o.Z)(e.url),a=null!=(t=e.width)?t:"100%",l=null!=(n=e.height)?n:"100%";return r.createElement("div",{className:"loop-video"},r.createElement("video",{muted:!0,loop:!0,playsInline:!0,autoPlay:!0,width:a,height:l},r.createElement("source",{src:i,type:"video/mp4"}),"Your browser does not support the video tag."),r.createElement("p",null,e.children))}},85905:function(e,t,n){n.r(t),n.d(t,{assets:function(){return x},contentTitle:function(){return g},default:function(){return w},frontMatter:function(){return f},metadata:function(){return v},toc:function(){return y}});var r=n(3905),o=n(29415),i=n(39130),a=n(65407),l=Object.defineProperty,p=Object.defineProperties,c=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,h=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&d(e,n,t[n]);if(u)for(var n of u(t))m.call(t,n)&&d(e,n,t[n]);return e};const f={id:"examples",title:"Examples\uff08\u4f8b\uff09\u3068Board Specific Demos\uff08\u30dc\u30fc\u30c9\u56fa\u6709\u306e\u30c7\u30e2\uff09"},g=void 0,v={unversionedId:"development/ui-development/working-with-touchgfx/examples",id:"development/ui-development/working-with-touchgfx/examples",title:"Examples\uff08\u4f8b\uff09\u3068Board Specific Demos\uff08\u30dc\u30fc\u30c9\u56fa\u6709\u306e\u30c7\u30e2\uff09",description:"",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/development/ui-development/working-with-touchgfx/examples.mdx",sourceDirName:"development/ui-development/working-with-touchgfx",slug:"/development/ui-development/working-with-touchgfx/examples",permalink:"/touchgfx-test.github.io/ja/docs/development/ui-development/working-with-touchgfx/examples",draft:!1,tags:[],version:"current",frontMatter:{id:"examples",title:"Examples\uff08\u4f8b\uff09\u3068Board Specific Demos\uff08\u30dc\u30fc\u30c9\u56fa\u6709\u306e\u30c7\u30e2\uff09"},sidebar:"docs",previous:{title:"\u30c7\u30d0\u30c3\u30b0",permalink:"/touchgfx-test.github.io/ja/docs/development/ui-development/working-with-touchgfx/debugging"},next:{title:"Keyboard Shortcuts\uff08\u30ad\u30fc\u30dc\u30fc\u30c9\uff65\u30b7\u30e7\u30fc\u30c8\u30ab\u30c3\u30c8\uff09",permalink:"/touchgfx-test.github.io/ja/docs/development/ui-development/working-with-touchgfx/keyboard-shortcuts"}},x={},y=[{value:"Examples\uff08\u4f8b\uff09\u3068Demos\uff08\u30c7\u30e2\uff09",id:"ui-templates",level:2},{value:"Board Specific Demos\uff08\u30dc\u30fc\u30c9\u56fa\u6709\u306e\u30c7\u30e2\uff09",id:"online-applications",level:2}],b={toc:y};function w(e){var t,n=e,{components:l}=n,d=((e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&u)for(var r of u(e))t.indexOf(r)<0&&m.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=h(h({},b),d),p(t,c({components:l,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"TouchGFX\u306e\u6a5f\u80fd\u3068\u53ef\u80fd\u6027\u3092\u8a73\u3057\u304f\u63a2\u7d22\u3059\u308b\u305f\u3081\u306b\u3001\u30e6\u30fc\u30b6\u306b\u306f\u4e8b\u524d\u306b\u4f5c\u6210\u3055\u308c\u305f\u8907\u6570\u306eExamples\u3068Demos\u304c\u63d0\u4f9b\u3055\u308c\u3066\u3044\u307e\u3059\u3002 \u3053\u308c\u3089\u306eExamples\u3068Demos\u306b\u306fTouchGFX Designer\u306e",(0,r.kt)("a",h({parentName:"p"},{href:"../designer-user-guide/startup-window"}),"Lobby"),"\u304b\u3089\u30a2\u30af\u30bb\u30b9\u3067\u304d\u3001\u3059\u3079\u3066\u306b\u7121\u6599\u4f7f\u7528\u3067\u304d\u308b\u753b\u50cf\u3084\u30b3\u30fc\u30c9\u306a\u3069\u304c\u542b\u307e\u308c\u3066\u3044\u308b\u306e\u3067\u3001\u30e6\u30fc\u30b6\u304c\u72ec\u81ea\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u69cb\u7bc9\u3059\u308b\u3068\u304d\u306e\u30d9\u30fc\u30b9\u3068\u3057\u3066\u4f7f\u7528\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002 Examples\u3068Demos\u3092",(0,r.kt)("a",h({parentName:"p"},{href:"../../development-introduction#application-templates-ats"}),"TouchGFX Board Setup"),"\u3068\u7d44\u307f\u5408\u308f\u305b\u308b\u3053\u3068\u3067\u3001TouchGFX\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u4f5c\u6210\u3067\u304d\u307e\u3059\u3002 TouchGFX\u3092\u521d\u3081\u3066\u3054\u4f7f\u7528\u306b\u306a\u308b\u5834\u5408\u3001\u3053\u308c\u306fTouchGFX\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u6a5f\u80fd\u306b\u95a2\u3059\u308b\u3072\u3089\u3081\u304d\u3084\u77e5\u8b58\u306e\u6700\u521d\u306e\u4e00\u6b69\u3068\u3057\u3066\u304a\u304a\u3044\u306b\u5f79\u7acb\u3061\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u4e00\u90e8\u306eExamples\u3068Demos\u306f\u5358\u4e00\u306e\u6a5f\u80fd\u306b\u7126\u70b9\u3092\u7d5e\u308a\u3001\u305d\u308c\u4ee5\u5916\u306fTouchGFX\u306b\u3042\u308b\u3044\u304f\u3064\u304b\u306e\u7570\u306a\u308b\u6a5f\u80fd\u3092\u5b9f\u88c5\u3057\u3066\u3044\u307e\u3059\u3002 Demos\u306f\u3001",(0,r.kt)("a",h({parentName:"p"},{href:"#ui-templates"}),"Demo"),"\u3068",(0,r.kt)("a",h({parentName:"p"},{href:"#online-applications"}),"Board Specific Demo"),"\u3068\u3044\u30462\u3064\u306e\u7570\u306a\u308b\u30bf\u30a4\u30d7\u306b\u5206\u5272\u3055\u308c\u3066\u3044\u307e\u3059\u3002"),(0,r.kt)("h2",h({},{id:"ui-templates"}),"Examples\uff08\u4f8b\uff09\u3068Demos\uff08\u30c7\u30e2\uff09"),(0,r.kt)("p",null,"Examples\u306f\u4e00\u822c\u7684\u306b\u5c0f\u578b\u3067\u81ea\u5df1\u5b8c\u7d50\u578b\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3067\u3001\u4e3b\u306b\u3001\u5404\u7a2e\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306a\u3069\u306e\u7279\u5b9a\u306e\u6a5f\u80fd\u306b\u7126\u70b9\u304c\u7d5e\u3089\u308c\u3066\u3044\u307e\u3059\u3002 Examples\u306f\u5404\u7a2eSTM32\u8a55\u4fa1\u30ad\u30c3\u30c8\u304a\u3088\u3073PC\u30b7\u30df\u30e5\u30ec\u30fc\u30bf\u3067\u5b9f\u884c\u53ef\u80fd\u3067\u3059\u304c\u3001\u6700\u9069\u306a\u4f53\u9a13\u3092\u5f97\u308b\u306b\u306f\u3001\u305d\u306eExample\u306e\u89e3\u50cf\u5ea6\u304c\u4f7f\u7528\u3059\u308b\u30dc\u30fc\u30c9\u306e\u89e3\u50cf\u5ea6\u306b\u9069\u5408\u3059\u308b\u3088\u3046\u306a\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u4f5c\u6210\u3059\u308b\u3053\u3068\u3092\u304a\u52e7\u3081\u3057\u307e\u3059\u3002 \u4e00\u90e8\u306eExamples\u306f\u7279\u5b9a\u306e\u8272\u6df1\u5ea6\u3067\u4f5c\u6210\u3055\u308c\u3066\u3044\u308b\u3053\u3068\u306b\u3082\u6ce8\u610f\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u8272\u6df1\u5ea6\u306e\u4f4e\u3044\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\u3067\u306f\u4e0a\u624b\u304f\u8868\u793a\u3055\u308c\u306a\u3044\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002"),(0,r.kt)("p",null,"Demos\u306b\u306f\u3001TouchGFX\u30c1\u30fc\u30e0\u304c\u4f5c\u6210\u3057\u305f\u8907\u6570\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304c\u542b\u307e\u308c\u3066\u304a\u308a\u3001\u3053\u308c\u3089\u306f\u9ad8\u54c1\u8cea\u306eUI\u8a2d\u8a08\u3092\u4f7f\u7528\u3057\u305f\u3088\u308a\u591a\u304f\u306e\u6a5f\u80fd\u3092\u793a\u3057\u3066\u3044\u307e\u3059\u3002 TouchGFX\u306e\u6a5f\u80fd\u306b\u5bfe\u3059\u308b\u611f\u899a\u3092\u3064\u304b\u3080\u305f\u3081\u306e\u6700\u9069\u306a\u51fa\u767a\u70b9\u306b\u306a\u308b\u3068\u8003\u3048\u3089\u308c\u307e\u3059\u3002"),(0,r.kt)("p",null,'Example\u307e\u305f\u306fDemo\u3092\u4f7f\u7528\u3057\u3066\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u4f5c\u6210\u3059\u308b\u306b\u306f\u3001\u307e\u305aLobby\u306e\u5de6\u4e0a\u306b\u3042\u308b"Examples"\u307e\u305f\u306f"Demos"\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u4f7f\u7528\u53ef\u80fd\u306a\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u8868\u793a\u3057\u3001\u3054\u5e0c\u671b\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u304f\u3060\u3055\u3044\u3002 \u5fc5\u8981\u306b\u5fdc\u3058\u3066\u3001\u30c9\u30ed\u30c3\u30d7\u30c0\u30a6\u30f3\u304b\u3089\u4ed6\u306e\u89e3\u50cf\u5ea6\u3068\u8272\u6df1\u5ea6\u3092\u9078\u629e\u3057\u307e\u3059\u3002 \u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u308b\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\u4e0a\u3067\u5b9f\u884c\u3059\u308b\u306b\u306f\u3001\u30a6\u30a3\u30f3\u30c9\u30a6\u4e0a\u90e8\u306e"Select Hardware"\u3092\u30af\u30ea\u30c3\u30af\u3057\u3001\u76ee\u7684\u306e\u30dc\u30fc\u30c9\u3092\u9078\u629e\u3057\u3066"Select"\u3092\u62bc\u3057\u307e\u3059\u3002 \u6700\u5f8c\u306b\u3001\'Create\'\u3092\u62bc\u3057\u3066\u3001\u9078\u629e\u3057\u305fTouchGFX Board Setup\u3068Example\u307e\u305f\u306fDemo\u304b\u3089\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002 \u5b9f\u884c\u3057\u3066\u3044\u308b\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u78ba\u8a8d\u3059\u308b\u306b\u306f\u3001\'Run Simulator\'\u307e\u305f\u306f\'Run Target\'\u3092\u62bc\u3057\u307e\u3059\u3002'),(0,r.kt)("p",null,"\u3053\u308c\u3089\u306e\u624b\u9806\u3092\u793a\u3059\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u3092\u6b21\u306b\u8868\u793a\u3057\u307e\u3059\u3002"),(0,r.kt)(a.Z,{url:"/videos/development/ui-development/working-with-touchgfx/examples/application-template-ui-template.mp4",mdxType:"LoopVideo"},"Example\u3092\u4f7f\u7528\u3057\u305f\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u4f5c\u6210"),(0,r.kt)("h2",h({},{id:"online-applications"}),"Board Specific Demos\uff08\u30dc\u30fc\u30c9\u56fa\u6709\u306e\u30c7\u30e2\uff09"),(0,r.kt)("p",null,"Board Specific Demos\u306f\u3001\u7279\u5b9a\u306e\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\uff65\u30bd\u30ea\u30e5\u30fc\u30b7\u30e7\u30f3\u5411\u3051\u306e\u65e2\u88fd\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306a\u306e\u3067\u3001\u4f5c\u6210\u5bfe\u8c61\u4ee5\u5916\u306eSTM32\u8a55\u4fa1\u30ad\u30c3\u30c8\u4e0a\u3067\u5b9f\u884c\u3059\u308b\u3053\u3068\u306f\u3067\u304d\u307e\u305b\u3093\uff08PC\u30b7\u30df\u30e5\u30ec\u30fc\u30bf\u306f\u5225\uff09\u3002 \u3053\u308c\u3089\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306f\u3001\u4e00\u822c\u7684\u306b\u975e\u5e38\u306b\u5927\u304d\u304f\u3001TouchGFX\u30d5\u30ec\u30fc\u30e0\u30ef\u30fc\u30af\u306e\u8907\u6570\u306e\u7570\u306a\u308b\u6a5f\u80fd\u3092\u63a2\u7d22\u3057\u3001\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\u3068\u30b5\u30f3\u30d7\u30eb\u3092\u7d71\u5408\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("p",null,"Board Specific Demo\u3092\u4f7f\u7528\u3057\u3066\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u4f5c\u6210\u3059\u308b\u306b\u306f\u3001\u307e\u305aLobby\u306e\u5de6\u4e0a\u306b\u3042\u308b'Demos'\u30bf\u30d6\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u30a2\u30af\u30bb\u30b9\u3057\u307e\u3059\u3002 \u30a6\u30a3\u30f3\u30c9\u30a6\u4e0a\u90e8\u306b\u3042\u308b\"Board Specific Demo\"\u30e9\u30d9\u30eb\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u3001\u4f7f\u7528\u53ef\u80fd\u306a\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u8868\u793a\u3057\u307e\u3059\u3002 \u3054\u5e0c\u671b\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u3001'Create'\u3092\u62bc\u3057\u3066\u5b8c\u4e86\u3057\u307e\u3059\u3002 \u5b9f\u884c\u3057\u3066\u3044\u308b\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u78ba\u8a8d\u3059\u308b\u306b\u306f\u3001'Run Simulator'\u307e\u305f\u306f'Run Target'\u3092\u62bc\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u3053\u308c\u3089\u306e\u624b\u9806\u3092\u793a\u3059\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u3092\u6b21\u306b\u8868\u793a\u3057\u307e\u3059\u3002"),(0,r.kt)(a.Z,{url:"/videos/development/ui-development/working-with-touchgfx/examples/online-application.mp4",mdxType:"LoopVideo"},"Board Specific Demo\u3092\u4f7f\u7528\u3057\u305f\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u4f5c\u6210"),(0,r.kt)(o.Z,{mdxType:"FurtherReading"},"Examples\u307e\u305f\u306fDemos\u3092\u4f7f\u7528\u3057\u305f\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u4f5c\u6210\u65b9\u6cd5\u306e\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001",(0,r.kt)(i.Z,{to:"../designer-user-guide/startup-window",mdxType:"Link"},"Lobby\u306e\u30bb\u30af\u30b7\u30e7\u30f3"),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"))}w.isMDXComponent=!0}}]);