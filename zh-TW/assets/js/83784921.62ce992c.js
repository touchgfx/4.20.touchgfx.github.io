"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[2678],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),m=p(n),d=o,g=m["".concat(u,".").concat(d)]||m[d]||s[d]||i;return n?r.createElement(g,l(l({ref:t},c),{},{components:n})):r.createElement(g,l({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=m;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},70814:function(e,t,n){var r=n(67294),o=n(88678);const i=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},r.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}));class l extends r.Component{render(){return r.createElement(o.Z,{color:"var(--highlight-color-caution)",header:"Caution",type:"caution",icon:i},this.props.children)}}t.Z=l},44035:function(e,t,n){var r=n(67294),o=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,i=e.height,l=(0,o.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:l,target:"_blank"},r.createElement("img",{width:n,height:i,src:l})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:l,target:"_blank"},r.createElement("img",{width:n,height:i,src:l})),r.createElement("p",null,e.children))}},88678:function(e,t,n){var r=n(67294);class o extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{className:e},r.createElement("div",{className:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{className:"highlight-content"},this.props.children))}}t.Z=o},74361:function(e,t,n){n.r(t),n.d(t,{assets:function(){return k},contentTitle:function(){return h},default:function(){return y},frontMatter:function(){return g},metadata:function(){return f},toc:function(){return v}});var r=n(3905),o=n(70814),i=n(44035),l=Object.defineProperty,a=Object.defineProperties,u=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&m(e,n,t[n]);if(p)for(var n of p(t))s.call(t,n)&&m(e,n,t[n]);return e};const g={id:"file-menu",title:"\u6a94\u6848\u9078\u55ae"},h=void 0,f={unversionedId:"development/ui-development/designer-user-guide/file-menu",id:"development/ui-development/designer-user-guide/file-menu",title:"\u6a94\u6848\u9078\u55ae",description:"",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/development/ui-development/designer-user-guide/file-menu.mdx",sourceDirName:"development/ui-development/designer-user-guide",slug:"/development/ui-development/designer-user-guide/file-menu",permalink:"/4.20/zh-TW/docs/development/ui-development/designer-user-guide/file-menu",tags:[],version:"current",frontMatter:{id:"file-menu",title:"\u6a94\u6848\u9078\u55ae"},sidebar:"docs",previous:{title:"\u4e3b\u4ecb\u9762",permalink:"/4.20/zh-TW/docs/development/ui-development/designer-user-guide/startup-window"},next:{title:"\u4e3b\u8996\u7a97",permalink:"/4.20/zh-TW/docs/development/ui-development/designer-user-guide/main-window"}},k={},v=[{value:"File (\u6587\u4ef6)",id:"file",level:2},{value:"Edit (\u7de8\u8f2f)",id:"edit",level:2},{value:"Help (\u5e6b\u52a9)",id:"help",level:2}],b={toc:v};function y(e){var t,n=e,{components:l}=n,m=((e,t)=>{var n={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&p)for(var r of p(e))t.indexOf(r)<0&&s.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=d(d({},b),m),a(t,u({components:l,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"TouchGFX Designer\u7684\u6a94\u6848\u9078\u55ae\u5305\u542b",(0,r.kt)("a",d({parentName:"p"},{href:"#file"}),"File (\u6a94)"),"\u3001",(0,r.kt)("a",d({parentName:"p"},{href:"#edit"}),"Edit (\u7de8\u8f2f)"),"\u548c",(0,r.kt)("a",d({parentName:"p"},{href:"#help"}),"Help (\u5e6b\u52a9)"),"\u3002"),(0,r.kt)("h2",d({},{id:"file"}),"File (\u6587\u4ef6)"),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/designer-user-guide/file-menu/designer-file-menu-file-4.17.png",mdxType:"Figure"},"\u6a94\u6848\u9078\u55ae\u4e2d\u7684\u9805\u76ee"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"New (\u65b0\u5efa)"),(0,r.kt)("br",null)," \u9ede\u64ca\u201cNew \u201d\u6309\u9215\uff0c\u5c07\u6253\u958b",(0,r.kt)("a",d({parentName:"p"},{href:"startup-window"}),"\u555f\u52d5\u8996\u7a97"),"\uff0c\u5728\u9019\u88e1\u53ef\u4ee5\u5275\u5efa\u65b0\u7684\u5c08\u6848\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Open (\u6253\u958b)"),(0,r.kt)("br",null)," \u9ede\u64ca\u201cOpen\u201d\u6309\u9215\uff0c\u5c07\u6253\u958b\u6a94\u6848\u7ba1\u7406\u54e1\uff0c\u5f9e\u9019\u88e1\u53ef\u4ee5\u5c0e\u822a\u5230TouchGFX Designer\u5c08\u6848\u6a94\u6848\uff08.touchgfx\uff09\u4e26\u8f09\u5165\u6a94\u6848\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Save (\u4fdd\u5b58)"),(0,r.kt)("br",null)," \u9ede\u64ca\u201cSave\u201d\u6309\u9215\uff0c\u53ef\u5c07\u7576\u524d\u6253\u958b\u7684\u5c08\u6848\u4fdd\u5b58\u5230\u5176TouchGFX Designer\u5c08\u6848\u4e2d\u3002",(0,r.kt)("br",null)," \u5728\u904b\u884c\u6a21\u64ec\u5668\u3001\u5feb\u9583\u8a18\u61b6\u9ad4\u5230\u76ee\u6a19\u786c\u9ad4\u548c\u751f\u6210\u4ee3\u78bc\u6642\u4e5f\u6703\u4fdd\u5b58\u5c08\u6848\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Switch to Dark theme (\u5207\u63db\u81f3\u6df1\u8272\u6a21\u5f0f)"),(0,r.kt)("br",null),' \u9ede\u64ca"Switch to Dark theme"\u53ef\u5c07 TouchGFX Designer \u7684\u4e3b\u984c\u5207\u63db\u6210\u6df1\u8272\u6a21\u5f0f\u3002'),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Recent (\u6700\u8fd1\u4f7f\u7528)"),(0,r.kt)("br",null)," \u5c07\u6ed1\u9f20\u505c\u5728\u201cRecent\u201d\u6309\u9215\u4e0a\u6216\u9ede\u64ca\u8a72\u6309\u9215\uff0c\u5c07\u986f\u793a\u6700\u8fd1\u5275\u5efa\u3001\u6253\u958b\u6216\u4fee\u6539\u904e\u7684\u5c08\u6848\uff0c\u9ede\u64ca\u5176\u4e2d\u7684\u4efb\u4f55\u4e00\u500b\u5c07\u8f09\u5165\u8a72\u5c08\u6848\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Exit (\u9000\u51fa)"),(0,r.kt)("br",null)," \u9ede\u64ca\u201cExit \u201d\u6309\u9215\uff0c\u5c07\u95dc\u9589TouchGFX Designer\u3002"),(0,r.kt)("h2",d({},{id:"edit"}),"Edit (\u7de8\u8f2f)"),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/designer-user-guide/file-menu/designer-file-menu-edit-4.17.png",mdxType:"Figure"},"\u6a94\u6848\u9078\u55ae\u4e2d\u7684\u9805\u76ee"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Undo (\u64a4\u92b7)"),(0,r.kt)("br",null)," \u9ede\u64ca\u201cUndo\u201d\u6309\u9215\uff0c\u5c07\u64a4\u92b7\u5728",(0,r.kt)("a",d({parentName:"p"},{href:"canvas-view"}),"\u756b\u5e03\u8996\u5716"),"\u4e2d\u6240\u505a\u7684\u4fee\u6539\u3002 \u5982\u679c\u6c92\u6709\u53ef\u64a4\u92b7\u7684\u4fee\u6539\uff0c\u6216\u8005\u7576\u524d\u672a\u9078\u4e2d\u201c\u756b\u5e03\u8996\u5716\u201d\uff0c\u5247\u8a72\u6309\u9215\u70ba\u7070\u8272\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Redo (\u91cd\u505a)"),(0,r.kt)("br",null)," \u9ede\u64ca\u201cRedo\u201d\u6309\u9215\uff0c\u5c07\u91cd\u505a\u5728",(0,r.kt)("a",d({parentName:"p"},{href:"canvas-view"}),"\u756b\u5e03\u8996\u5716"),"\u4e2d\u6240\u505a\u7684\u4fee\u6539\u3002 \u5982\u679c\u6c92\u6709\u53ef\u91cd\u505a\u7684\u4fee\u6539\uff0c\u6216\u8005\u7576\u524d\u672a\u9078\u4e2d\u201c\u756b\u5e03\u8996\u5716\u201d\uff0c\u5247\u8a72\u6309\u9215\u70ba\u7070\u8272\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Select All (\u5168\u9078)"),(0,r.kt)("br",null)," \u9ede\u64ca\u201cSelect All\u201d\u6309\u9215\uff0c\u53ef\u5c07\u6dfb\u52a0\u5230",(0,r.kt)("a",d({parentName:"p"},{href:"canvas-view"}),"\u756b\u5e03\u8996\u5716"),"\u4e2d\u7576\u524d\u986f\u793a\u7684\u87a2\u5e55\u6216\u81ea\u8a02\u5bb9\u5668\u7684\u6240\u6709\u5c0f\u5de5\u5177\u5168\u90e8\u9078\u4e2d\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Copy (\u8907\u88fd)"),(0,r.kt)("br",null)," \u9ede\u64ca\u201cCopy\u201d\u6309\u9215\uff0c\u5c07",(0,r.kt)("a",d({parentName:"p"},{href:"canvas-view"}),"\u756b\u5e03\u8996\u5716"),"\u4e2d\u7576\u524d\u9078\u4e2d\u7684\u5c0f\u5de5\u5177\u3001\u87a2\u5e55\u6216\u81ea\u8a02\u5bb9\u5668\u6dfb\u52a0\u5230\u8907\u88fd/\u8cbc\u4e0a\u7de9\u885d\u5340\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Paste (\u8cbc\u4e0a)"),(0,r.kt)("br",null)," \u9ede\u64ca\u201cPaste\u201d\u6309\u9215\uff0c\u5c0d\u8907\u88fd/\u8cbc\u4e0a\u7de9\u885d\u5340\u4e2d\u7684\u5c0f\u5de5\u5177\u3001\u87a2\u5e55\u6216\u81ea\u8a02\u5bb9\u5668\u9032\u884c\u8cbc\u4e0a\u3002 \u5982\u679c\u6c92\u6709\u8907\u88fd\u7269\u4ef6\uff0c\u5c07\u7121\u6cd5\u9032\u884c\u8cbc\u4e0a\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Delete (\u522a\u9664)"),(0,r.kt)("br",null)," \u9ede\u64ca\u201cDelete\u201d\u6309\u9215\uff0c\u5c07\u522a\u9664",(0,r.kt)("a",d({parentName:"p"},{href:"canvas-view"}),"\u756b\u5e03\u8996\u5716"),"\u4e2d\u7576\u524d\u9078\u4e2d\u7684\u5c0f\u5de5\u5177\u3001\u87a2\u5e55\u6216\u81ea\u8a02\u5bb9\u5668\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Import GUI (\u532f\u5165GUI)"),(0,r.kt)("br",null)," \u9ede\u64ca\u201cImport GUI\u201d\u6309\u9215\uff0c\u5c07\u6253\u958b\u201c\u532f\u5165GUI\u201d\u8996\u7a97\u3002"),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/designer-user-guide/file-menu/designer-file-menu-import-gui-4.17.png",mdxType:"Figure"},"TouchGFX Designer\u4e2d\u7684\u201c\u5c0e\u5165UI\u201d\u8996\u7a97"),(0,r.kt)("p",null,"\u5728\u9019\u88e1\uff0c\u53ef\u4ee5\u5c07UI\u532f\u5165\u7576\u524d\u6253\u958b\u7684\u9805\u76ee\u4e2d\u3002 \u53ef\u4ee5\u5f9eSTMicroelectronics\u63d0\u4f9b\u7684\u7bc4\u4f8b\u4e2d\u9078\u64c7UI\uff0c\u6216\u8005\u9ede\u64ca\u201cBrowse\u201d\uff0c\u7136\u5f8c\u9078\u64c7\u8981\u532f\u5165\u7576\u524d\u9805\u76ee\u7684TouchGFX Designer\u9805\u76ee\uff08.touchgfx\uff09\u3002"),(0,r.kt)(o.Z,{mdxType:"Caution"},"\u532f\u5165UI\u5c07\u8986\u84cb\u5c08\u6848\u4e2d\u5df2\u6709\u7684UI"),(0,r.kt)("h2",d({},{id:"help"}),"Help (\u5e6b\u52a9)"),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/designer-user-guide/file-menu/designer-file-menu-help-4.17.png",mdxType:"Figure"},"\u6a94\u6848\u9078\u55ae\u4e2d\u7684\u5e6b\u52a9\u9078\u55ae"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Documentation (\u6587\u4ef6)"),(0,r.kt)("br",null)," \u9ede\u64ca\u201cDocumentation \u201d\u6309\u9215\u5c07\u5728\u4f5c\u696d\u7cfb\u7d71\u7684\u9810\u8a2d\u6d41\u89bd\u5668\u4e2d\u6253\u958b\u7db2\u5740",(0,r.kt)("a",d({parentName:"p"},{href:"https://support.touchgfx.com%E3%80%82"}),"https://support.touchgfx.com\u3002")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Q&A (\u554f\u8207\u7b54)"),(0,r.kt)("br",null),"\u9ede\u64ca\u201cQ&A\u201d\u6309\u9215\u5c07\u5728\u4f5c\u696d\u7cfb\u7d71\u7684\u9810\u8a2d\u6d41\u89bd\u5668\u4e2d\u6253\u958b\u7db2\u5740",(0,r.kt)("a",d({parentName:"p"},{href:"https://community.st.com/touchgfx%E3%80%82"}),"https://community.st.com/touchgfx\u3002")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Request Feature (\u8acb\u6c42\u529f\u80fd)"),(0,r.kt)("br",null)," \u9ede\u64ca\u201cRequest Feature\u201d\u6309\u9215\u5c07\u5728\u4f5c\u696d\u7cfb\u7d71\u7684\u9810\u8a2d\u6d41\u89bd\u5668\u4e2d\u6253\u958b\u7db2\u5740",(0,r.kt)("a",d({parentName:"p"},{href:"https://community.st.com/s/ideazone%E3%80%82"}),"https://community.st.com/s/ideazone\u3002")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Keyboard Shortcuts (\u9375\u76e4\u5feb\u901f\u9375)"),(0,r.kt)("br",null)," \u9ede\u64ca\u201cKeyboard Shortcuts\u201d\u6309\u9215\u5c07\u5728\u4f5c\u696d\u7cfb\u7d71\u7684\u9810\u8a2d\u6d41\u89bd\u5668\u4e2d\u6253\u958b\u7db2\u5740",(0,r.kt)("a",d({parentName:"p"},{href:"https://support.touchgfx.com/docs/development/ui-development/working-with-touchgfx/keyboard-shortcuts%E3%80%82"}),"https://support.touchgfx.com/docs/development/ui-development/working-with-touchgfx/keyboard-shortcuts\u3002")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"About (\u95dc\u65bc)"),(0,r.kt)("br",null)," \u9ede\u64ca\u201cAbout\u201d\u6309\u9215\uff0c\u5c07\u6253\u958b\u5305\u542b\u201c\u8edf\u9ad4\u6388\u6b0a\u5408\u7d04\u201d\u7684\u8996\u7a97\u3002"))}y.isMDXComponent=!0}}]);