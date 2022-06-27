"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[1615],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),m=p(n),d=o,g=m["".concat(u,".").concat(d)]||m[d]||s[d]||i;return n?r.createElement(g,l(l({ref:t},c),{},{components:n})):r.createElement(g,l({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=m;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},70814:function(e,t,n){var r=n(67294),o=n(88678);const i=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},r.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}));class l extends r.Component{render(){return r.createElement(o.Z,{color:"var(--highlight-color-caution)",header:"Caution",type:"caution",icon:i},this.props.children)}}t.Z=l},44035:function(e,t,n){var r=n(67294),o=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,i=e.height,l=(0,o.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:l,target:"_blank"},r.createElement("img",{width:n,height:i,src:l})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:l,target:"_blank"},r.createElement("img",{width:n,height:i,src:l})),r.createElement("p",null,e.children))}},88678:function(e,t,n){var r=n(67294);class o extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{className:e},r.createElement("div",{className:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{className:"highlight-content"},this.props.children))}}t.Z=o},41376:function(e,t,n){n.r(t),n.d(t,{assets:function(){return v},contentTitle:function(){return h},default:function(){return y},frontMatter:function(){return g},metadata:function(){return f},toc:function(){return k}});var r=n(3905),o=n(70814),i=n(44035),l=Object.defineProperty,a=Object.defineProperties,u=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&m(e,n,t[n]);if(p)for(var n of p(t))s.call(t,n)&&m(e,n,t[n]);return e};const g={id:"file-menu",title:"File Menu\uff08\u30d5\u30a1\u30a4\u30eb\u30fb\u30e1\u30cb\u30e5\u30fc\uff09"},h=void 0,f={unversionedId:"development/ui-development/designer-user-guide/file-menu",id:"development/ui-development/designer-user-guide/file-menu",title:"File Menu\uff08\u30d5\u30a1\u30a4\u30eb\u30fb\u30e1\u30cb\u30e5\u30fc\uff09",description:"",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/development/ui-development/designer-user-guide/file-menu.mdx",sourceDirName:"development/ui-development/designer-user-guide",slug:"/development/ui-development/designer-user-guide/file-menu",permalink:"/4.20/ja/docs/development/ui-development/designer-user-guide/file-menu",tags:[],version:"current",frontMatter:{id:"file-menu",title:"File Menu\uff08\u30d5\u30a1\u30a4\u30eb\u30fb\u30e1\u30cb\u30e5\u30fc\uff09"},sidebar:"docs",previous:{title:"Lobby\uff08\u30ed\u30d3\u30fc\uff09",permalink:"/4.20/ja/docs/development/ui-development/designer-user-guide/startup-window"},next:{title:"Main Window\uff08\u30e1\u30a4\u30f3\uff65\u30a6\u30a3\u30f3\u30c9\u30a6\uff09",permalink:"/4.20/ja/docs/development/ui-development/designer-user-guide/main-window"}},v={},k=[{value:"File\uff08\u30d5\u30a1\u30a4\u30eb\uff09",id:"file",level:2},{value:"Edit\uff08\u7de8\u96c6\uff09",id:"edit",level:2},{value:"Help\uff08\u30d8\u30eb\u30d7\uff09",id:"help",level:2}],b={toc:k};function y(e){var t,n=e,{components:l}=n,m=((e,t)=>{var n={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&p)for(var r of p(e))t.indexOf(r)<0&&s.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=d(d({},b),m),a(t,u({components:l,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"TouchGFX Designer\u306eFile Menu\u306f\u3001",(0,r.kt)("a",d({parentName:"p"},{href:"#file"}),"File"),"\u3001",(0,r.kt)("a",d({parentName:"p"},{href:"#edit"}),"Edit"),"\u3001",(0,r.kt)("a",d({parentName:"p"},{href:"#help"}),"Help"),"\u30e1\u30cb\u30e5\u30fc\uff65\u30a2\u30a4\u30c6\u30e0\u3067\u69cb\u6210\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)("h2",d({},{id:"file"}),"File\uff08\u30d5\u30a1\u30a4\u30eb\uff09"),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/designer-user-guide/file-menu/designer-file-menu-file-4.17.png",mdxType:"Figure"},"File\u30e1\u30cb\u30e5\u30fc\u306e\u30e1\u30cb\u30e5\u30fc\uff65\u30a2\u30a4\u30c6\u30e0"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"New"),(0,r.kt)("br",null)," New\u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3059\u308b\u3068\u3001",(0,r.kt)("a",d({parentName:"p"},{href:"startup-window"}),"Lobby"),"\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002\u3053\u3053\u3067\u65b0\u3057\u3044\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u4f5c\u6210\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Open"),(0,r.kt)("br",null)," Open\u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3059\u308b\u3068\u3001\u30d5\u30a1\u30a4\u30eb\uff65\u30a8\u30af\u30b9\u30d7\u30ed\u30fc\u30e9\u304c\u958b\u304d\u3001TouchGFX Designer\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\uff65\u30d5\u30a1\u30a4\u30eb\uff08.touchgfx\uff09\u306b\u79fb\u52d5\u3057\u305f\u308a\u8aad\u307f\u8fbc\u3093\u3060\u308a\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Save"),(0,r.kt)("br",null)," Save\u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3059\u308b\u3068\u3001\u73fe\u5728\u958b\u3044\u3066\u3044\u308b\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u304cTouchGFX Designer\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b\u4fdd\u5b58\u3055\u308c\u307e\u3059\u3002",(0,r.kt)("br",null)," \u30b7\u30df\u30e5\u30ec\u30fc\u30bf\u306e\u5b9f\u884c\u4e2d\u3001\u30bf\u30fc\u30b2\u30c3\u30c8\u3078\u306eFlash\u66f8\u8fbc\u307f\u4e2d\u3001\u30b3\u30fc\u30c9\u306e\u751f\u6210\u4e2d\u3067\u3082\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306f\u4fdd\u5b58\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Switch to Dark theme"),(0,r.kt)("br",null)," Switch to Dark theme\u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3059\u308b\u3068\u3001TouchGFX Designer\u306e\u8868\u793a\u30e2\u30fc\u30c9\u304c\u30c0\u30fc\u30af\uff65\u30e2\u30fc\u30c9\u306b\u5909\u66f4\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Recent"),(0,r.kt)("br",null)," Recent\u30dc\u30bf\u30f3\u306b\u30ab\u30fc\u30bd\u30eb\u3092\u5408\u308f\u305b\u308b\u304b\u30af\u30ea\u30c3\u30af\u3059\u308b\u3068\u3001\u76f4\u8fd1\u306b\u4f5c\u6210\u3001\u30aa\u30fc\u30d7\u30f3\u3001\u307e\u305f\u306f\u5909\u66f4\u3055\u308c\u305f\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u304c\u8868\u793a\u3055\u308c\u3001\u3053\u306e\u3044\u305a\u308c\u304b\u3092\u30af\u30ea\u30c3\u30af\u3059\u308b\u3068\u305d\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u304c\u8aad\u307f\u8fbc\u307e\u308c\u307e\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Exit"),(0,r.kt)("br",null)," Exit\u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3059\u308b\u3068\u3001TouchGFX Designer\u304c\u30b7\u30e3\u30c3\u30c8\u30c0\u30a6\u30f3\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)("h2",d({},{id:"edit"}),"Edit\uff08\u7de8\u96c6\uff09"),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/designer-user-guide/file-menu/designer-file-menu-edit-4.17.png",mdxType:"Figure"},"Edit\u30e1\u30cb\u30e5\u30fc\u306e\u30e1\u30cb\u30e5\u30fc\uff65\u30a2\u30a4\u30c6\u30e0"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Undo"),(0,r.kt)("br",null)," Undo\u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3059\u308b\u3068\u3001",(0,r.kt)("a",d({parentName:"p"},{href:"canvas-view"}),"Canvas View"),"\u3067\u884c\u308f\u308c\u305f\u5909\u66f4\u304c\u5143\u306b\u623b\u3055\u308c\u307e\u3059\u3002 \u5143\u306b\u623b\u3059\u5909\u66f4\u304c\u5b58\u5728\u3057\u306a\u3044\u5834\u5408\u3084\u3001Canvas View\u304c\u73fe\u5728\u9078\u629e\u3055\u308c\u3066\u3044\u306a\u3044\u5834\u5408\u306f\u3001\u3053\u306e\u30dc\u30bf\u30f3\u306f\u30b0\u30ec\u30fc\u8868\u793a\u306b\u306a\u308a\u307e\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Redo"),(0,r.kt)("br",null)," Redo\u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3059\u308b\u3068\u3001",(0,r.kt)("a",d({parentName:"p"},{href:"canvas-view"}),"Canvas View"),"\u3067\u884c\u308f\u308c\u305f\u5909\u66f4\u304c\u3084\u308a\u76f4\u3055\u308c\u307e\u3059\u3002 \u3084\u308a\u76f4\u3059\u5909\u66f4\u304c\u5b58\u5728\u3057\u306a\u3044\u5834\u5408\u3084\u3001Canvas View\u304c\u73fe\u5728\u9078\u629e\u3055\u308c\u3066\u3044\u306a\u3044\u5834\u5408\u3001\u3053\u306e\u30dc\u30bf\u30f3\u306f\u30b0\u30ec\u30fc\u8868\u793a\u306b\u306a\u308a\u307e\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Select All"),(0,r.kt)("br",null)," Select All\u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3059\u308b\u3068\u3001",(0,r.kt)("a",d({parentName:"p"},{href:"canvas-view"}),"Canvas View"),"\u306b\u73fe\u5728\u8868\u793a\u3055\u308c\u3066\u3044\u308bScreen\u307e\u305f\u306fCustom Container\u306b\u8ffd\u52a0\u3055\u308c\u305f\u3059\u3079\u3066\u306e\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u304c\u9078\u629e\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Copy"),(0,r.kt)("br",null)," Copy\u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3059\u308b\u3068\u3001",(0,r.kt)("a",d({parentName:"p"},{href:"canvas-view"}),"Canvas View"),"\u3067\u73fe\u5728\u9078\u629e\u3055\u308c\u3066\u3044\u308bWidget\u3001Screen\u3001\u307e\u305f\u306fCustom Container\u304c\u3001\u30b3\u30d4\u30fc / \u8cbc\u308a\u4ed8\u3051\u30d0\u30c3\u30d5\u30a1\u306b\u8ffd\u52a0\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Paste"),(0,r.kt)("br",null)," Paste\u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3059\u308b\u3068\u3001\u30b3\u30d4\u30fc / \u8cbc\u308a\u4ed8\u3051\u30d0\u30c3\u30d5\u30a1\u5185\u306b\u73fe\u5728\u3042\u308bWidget\u3001Screen\u3001\u307e\u305f\u306fCustom Container\u304c\u8cbc\u308a\u4ed8\u3051\u3089\u308c\u307e\u3059\u3002 \u30b3\u30d4\u30fc\u3055\u308c\u305f\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u304c\u5b58\u5728\u3057\u306a\u3044\u5834\u5408\u3001Paste\u306f\u4f7f\u7528\u3067\u304d\u307e\u305b\u3093\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Delete"),(0,r.kt)("br",null)," Delete\u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3059\u308b\u3068\u3001",(0,r.kt)("a",d({parentName:"p"},{href:"canvas-view"}),"Canvas View"),"\u3067\u73fe\u5728\u9078\u629e\u3055\u308c\u3066\u3044\u308bWidget\u3001Screen\u3001\u307e\u305f\u306fCustom Container\u304c\u524a\u9664\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Import GUI"),(0,r.kt)("br",null)," Import Gui\u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3059\u308b\u3068\u3001Import GUI\u30a6\u30a3\u30f3\u30c9\u30a6\u304c\u958b\u304d\u307e\u3059\u3002"),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/designer-user-guide/file-menu/designer-file-menu-import-gui-4.17.png",mdxType:"Figure"},"TouchGFX Designer\u306eImport UI\u30a6\u30a3\u30f3\u30c9\u30a6"),(0,r.kt)("p",null,"\u3053\u3053\u3067\u306f\u3001\u73fe\u5728\u958b\u3044\u3066\u3044\u308b\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306bUI\u3092\u30a4\u30f3\u30dd\u30fc\u30c8\u3067\u304d\u307e\u3059\u3002 UI\u306fST\u304c\u63d0\u4f9b\u3059\u308b\u30b5\u30f3\u30d7\u30eb\u3084\u30c7\u30e2\u304b\u3089\u9078\u629e\u3067\u304d\u307e\u3059\u3002\u307e\u305f\u306f\u3001'Browse'\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u3001\u73fe\u5728\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b\u30a4\u30f3\u30dd\u30fc\u30c8\u3059\u308bTouchGFX Designer\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\uff08.touchgfx\uff09\u3092\u9078\u629e\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)(o.Z,{mdxType:"Caution"},"UI\u3092\u30a4\u30f3\u30dd\u30fc\u30c8\u3059\u308b\u3068\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u65e2\u5b58\u306eUI\u304c\u4e0a\u66f8\u304d\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)("h2",d({},{id:"help"}),"Help\uff08\u30d8\u30eb\u30d7\uff09"),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/designer-user-guide/file-menu/designer-file-menu-help-4.17.png",mdxType:"Figure"},"Help\u30e1\u30cb\u30e5\u30fc\u306e\u30e1\u30cb\u30e5\u30fc\uff65\u30a2\u30a4\u30c6\u30e0"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Documentation"),(0,r.kt)("br",null)," Documentation\u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3059\u308b\u3068\u3001\u304a\u4f7f\u3044\u306e\u30aa\u30da\u30ec\u30fc\u30c6\u30a3\u30f3\u30b0\uff65\u30b7\u30b9\u30c6\u30e0\u306e\u30c7\u30d5\u30a9\u30eb\u30c8\uff65\u30d6\u30e9\u30a6\u30b6\u3067",(0,r.kt)("a",d({parentName:"p"},{href:"https://support.touchgfx.com%E3%81%8C%E9%96%8B%E3%81%8D%E3%81%BE%E3%81%99%E3%80%82"}),"https://support.touchgfx.com\u304c\u958b\u304d\u307e\u3059\u3002")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Q&A"),(0,r.kt)("br",null)," Q&A\u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3059\u308b\u3068\u3001\u304a\u4f7f\u3044\u306e\u30aa\u30da\u30ec\u30fc\u30c6\u30a3\u30f3\u30b0\uff65\u30b7\u30b9\u30c6\u30e0\u306e\u30c7\u30d5\u30a9\u30eb\u30c8\uff65\u30d6\u30e9\u30a6\u30b6\u3067",(0,r.kt)("a",d({parentName:"p"},{href:"https://community.st.com/touchgfx%E3%81%8C%E9%96%8B%E3%81%8D%E3%81%BE%E3%81%99%E3%80%82"}),"https://community.st.com/touchgfx\u304c\u958b\u304d\u307e\u3059\u3002")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Request Feature"),(0,r.kt)("br",null)," Request Feature\u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3059\u308b\u3068\u3001\u304a\u4f7f\u3044\u306e\u30aa\u30da\u30ec\u30fc\u30c6\u30a3\u30f3\u30b0\uff65\u30b7\u30b9\u30c6\u30e0\u306e\u30c7\u30d5\u30a9\u30eb\u30c8\uff65\u30d6\u30e9\u30a6\u30b6\u3067",(0,r.kt)("a",d({parentName:"p"},{href:"https://community.st.com/s/ideazone%E3%81%8C%E9%96%8B%E3%81%8D%E3%81%BE%E3%81%99%E3%80%82"}),"https://community.st.com/s/ideazone\u304c\u958b\u304d\u307e\u3059\u3002")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Keyboard Shortcuts"),(0,r.kt)("br",null)," Keyboard Shortcuts\u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3059\u308b\u3068\u3001\u304a\u4f7f\u3044\u306e\u30aa\u30da\u30ec\u30fc\u30c6\u30a3\u30f3\u30b0\uff65\u30b7\u30b9\u30c6\u30e0\u306e\u30c7\u30d5\u30a9\u30eb\u30c8\uff65\u30d6\u30e9\u30a6\u30b6\u3067",(0,r.kt)("a",d({parentName:"p"},{href:"https://support.touchgfx.com/docs/development/ui-development/working-with-touchgfx/keyboard-shortcuts%E3%81%8C%E9%96%8B%E3%81%8D%E3%81%BE%E3%81%99%E3%80%82"}),"https://support.touchgfx.com/docs/development/ui-development/working-with-touchgfx/keyboard-shortcuts\u304c\u958b\u304d\u307e\u3059\u3002")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"About"),(0,r.kt)("br",null)," About\u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3059\u308b\u3068\u3001\u30bd\u30d5\u30c8\u30a6\u30a7\u30a2\u4f7f\u7528\u8a31\u8afe\u5951\u7d04\u3092\u542b\u3080\u30a6\u30a3\u30f3\u30c9\u30a6\u304c\u958b\u304d\u307e\u3059\u3002"))}y.isMDXComponent=!0}}]);