"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[320],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return s}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=d(n),s=a,g=c["".concat(p,".").concat(s)]||c[s]||m[s]||l;return n?r.createElement(g,o(o({ref:t},u),{},{components:n})):r.createElement(g,o({ref:t},u))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var d=2;d<l;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},22425:function(e,t,n){var r=n(67294);class a extends r.Component{render(){return r.createElement("div",{className:"code-header"},r.createElement("div",null,r.createElement("h5",null,this.props.children)))}}t.Z=a},44035:function(e,t,n){var r=n(67294),a=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,l=e.height,o=(0,a.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:o,target:"_blank"},r.createElement("img",{width:n,height:l,src:o})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:o,target:"_blank"},r.createElement("img",{width:n,height:l,src:o})),r.createElement("p",null,e.children))}},29415:function(e,t,n){var r=n(67294),a=n(88678);const l=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class o extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:l},this.props.children)}}t.Z=o},88678:function(e,t,n){var r=n(67294);class a extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{className:e},r.createElement("div",{className:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{className:"highlight-content"},this.props.children))}}t.Z=a},31217:function(e,t,n){var r=n(67294);class a extends r.Component{render(){return r.createElement("code",null,this.props.children)}}t.Z=a},37793:function(e,t,n){var r=n(67294),a=n(88678);const l=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class o extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:l},this.props.children)}}t.Z=o},51690:function(e,t,n){n.r(t),n.d(t,{assets:function(){return y},contentTitle:function(){return f},default:function(){return x},frontMatter:function(){return b},metadata:function(){return v},toc:function(){return w}});var r=n(3905),a=n(44035),l=n(29415),o=n(37793),i=n(31217),p=n(39130),d=n(22425),u=Object.defineProperty,m=Object.defineProperties,c=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,h=(e,t,n)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,N=(e,t)=>{for(var n in t||(t={}))g.call(t,n)&&h(e,n,t[n]);if(s)for(var n of s(t))k.call(t,n)&&h(e,n,t[n]);return e};const b={id:"radio-button",title:"\u9078\u9805\u6309\u9215"},f=void 0,v={unversionedId:"development/ui-development/ui-components/buttons/radio-button",id:"development/ui-development/ui-components/buttons/radio-button",title:"\u9078\u9805\u6309\u9215",description:"",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/development/ui-development/ui-components/buttons/radio-button.mdx",sourceDirName:"development/ui-development/ui-components/buttons",slug:"/development/ui-development/ui-components/buttons/radio-button",permalink:"/touchgfx-test.github.io/zh-TW/docs/development/ui-development/ui-components/buttons/radio-button",draft:!1,tags:[],version:"current",frontMatter:{id:"radio-button",title:"\u9078\u9805\u6309\u9215"},sidebar:"docs",previous:{title:"\u96d9\u614b\u6309\u9215",permalink:"/touchgfx-test.github.io/zh-TW/docs/development/ui-development/ui-components/buttons/toggle-button"},next:{title:"\u91cd\u8907\u6309\u9215",permalink:"/touchgfx-test.github.io/zh-TW/docs/development/ui-development/ui-components/buttons/repeat-button"}},y={},w=[{value:"\u5c0f\u90e8\u4ef6\u7d44",id:"widget-group",level:2},{value:"\u5c6c\u6027",id:"properties",level:2},{value:"\u4ea4\u4e92",id:"interactions",level:2},{value:"\u64cd\u4f5c",id:"actions",level:3},{value:"\u89f8\u767c\u689d\u4ef6",id:"triggers",level:3},{value:"\u6027\u80fd",id:"performance",level:2},{value:"\u7bc4\u4f8b",id:"examples",level:2},{value:"\u751f\u6210\u7a0b\u5f0f\u78bc",id:"generated-code",level:3},{value:"TouchGFX Designer\u7bc4\u4f8b",id:"touchgfx-designer-examples",level:2},{value:"API\u53c3\u8003",id:"api-reference",level:2}],E={toc:w};function x(e){var t,n=e,{components:u}=n,h=((e,t)=>{var n={};for(var r in e)g.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&s)for(var r of s(e))t.indexOf(r)<0&&k.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=N(N({},E),h),m(t,c({components:u,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"TouchGFX\u4e2d\u7684\u9078\u9805\u6309\u9215(Radio Button)\u662f\u4e00\u7a2e\u611f\u61c9\u89f8\u63a7\u4e8b\u4ef6\u7684\u5c0f\u90e8\u4ef6\uff0c\u80fd\u5920\u5728\u9078\u9805\u6309\u9215\u88ab\u9ede\u64ca\u6642\u767c\u9001callback\u3002 \u9078\u9805\u6309\u9215\u5305\u542b\u56db\u5e45\u5716\u50cf\uff0c\u5c0d\u61c9\u65bc\u6309\u4e0b\u6216\u91cb\u653e\u72c0\u614b\u4e0b\u7684\u9078\u4e2d\u6216\u672a\u9078\u4e2d\u6309\u9215\u3002 \u53ef\u4ee5\u5c07\u9078\u9805\u6309\u9215\u6dfb\u52a0\u5230\u9078\u9805\u6309\u9215\u7d44\uff0c\u5f8c\u8005\u5728\u4f5c\u51fa\u65b0\u9078\u64c7\u6642\u8655\u7406\u9078\u9805\u6309\u9215\u7684\u9078\u64c7\u3002"),(0,r.kt)("p",null,"\u9078\u9805\u6309\u9215\u53ef\u901a\u904e",(0,r.kt)("a",N({parentName:"p"},{href:"flex-button"}),"\u9748\u6d3b\u6309\u9215"),"\u9032\u884c\u8907\u88fd\u3002 \u9748\u6d3b\u6309\u9215\u662f\u4e00\u7a2e\u53ef\u914d\u7f6e\u6027\u66f4\u9ad8\u7684\u6309\u9215\uff0c\u70ba\u4e86\u7372\u5f97\u9748\u6d3b\u6027\u800c\u9700\u8981\u591a\u4f54\u7528\u4e00\u4e9bRAM\u3002"),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-components/radio-button/widget-appearance.png",mdxType:"Figure"},"\u5728\u6a21\u64ec\u5668\u4e2d\u904b\u884c\u7684\u9078\u9805\u6309\u9215"),(0,r.kt)("h2",N({},{id:"widget-group"}),"\u5c0f\u90e8\u4ef6\u7d44"),(0,r.kt)("p",null,"\u9078\u9805\u6309\u9215\u53ef\u4ee5\u5728TouchGFX Designer\u4e2d\u7684\u201cButtons\u201d\u5c0f\u90e8\u4ef6\u7d44\u4e2d\u627e\u5230\u3002"),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-components/radio-button/widget-group-v4.17.png",mdxType:"Figure"},"TouchGFX Designer\u4e2d\u7684\u9078\u9805\u6309\u9215"),(0,r.kt)("h2",N({},{id:"properties"}),"\u5c6c\u6027"),(0,r.kt)("p",null,"\u4e0b\u9762\u5e7e\u7bc0\u5c07\u63cf\u8ff0\u9078\u9805\u6309\u9215\u7684\u5c6c\u6027\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",N({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u5c6c\u6027\u7d44")),(0,r.kt)("th",N({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u5c6c\u6027\u8aaa\u660e")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",N({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Name")),(0,r.kt)("td",N({parentName:"tr"},{align:null}),"\u5c0f\u90e8\u4ef6\u7684",(0,r.kt)("em",{parentName:"td"},"\u540d\u7a31"),"\u3002 ",(0,r.kt)("em",{parentName:"td"},"Name\u662fTouchGFX Designer\u548c\u7a0b\u5f0f\u78bc\u4e2d\u4f7f\u7528\u7684\u552f\u4e00\u8b58\u5225\u78bc"),"\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",N({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Location")),(0,r.kt)("td",N({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"X"),"\u548c",(0,r.kt)("em",{parentName:"td"},"Y")," \u6307\u5b9a\u5c0f\u90e8\u4ef6\u5de6\u4e0a\u89d2\u76f8\u5c0d\u4e8e\u5176\u7236\u7684\u4f4d\u7f6e\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"W")," \u548c ",(0,r.kt)("em",{parentName:"td"},"H")," \u6307\u5b9a\u5c0f\u90e8\u4ef6\u7684\u5bec\u5ea6\u548c\u9ad8\u5ea6\u3002",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"\u9078\u9805\u6309\u9215\u7684\u5c3a\u5bf8\u53d6\u6c7a\u65bc\u6240\u9078\u5716\u50cf\u7684\u5c3a\u5bf8\u3002"),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"\u9396\u5b9a"),"\u6307\u5b9a\u5c0f\u90e8\u4ef6\u662f\u5426\u61c9\u9396\u5b9a\u70ba\u5176\u7576\u524d\u7684X\u3001Y\u3001W\u548cH\u3002",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"\u5982\u679c\u9396\u5b9a\u5c0f\u90e8\u4ef6\uff0c\u9084\u6703\u7981\u6b62\u901a\u904e\u87a2\u5e55\u8207\u5c0f\u90e8\u4ef6\u9032\u884c\u4ea4\u4e92\u3002"),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"\u53ef\u898b"),"\u6307\u5b9a\u5c0f\u90e8\u4ef6\u7684\u53ef\u898b\u6027\u3002",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"\u5982\u679c\u5c07\u5c0f\u90e8\u4ef6\u6a19\u8a18\u70ba\u4e0d\u53ef\u898b\uff0c\u9084\u6703\u7981\u6b62\u901a\u904e\u87a2\u5e55\u8207\u5c0f\u90e8\u4ef6\u9032\u884c\u4ea4\u4e92\u3002"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",N({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Selection")),(0,r.kt)("td",N({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"\u9078\u4e2d")," \u6307\u5b9a\u6309\u9215\u7684\u521d\u59cb\u9078\u64c7\u72c0\u614b\u3002 ",(0,r.kt)("em",{parentName:"td"},"\u53ef\u53d6\u6d88\u9078\u4e2d")," \u6307\u5b9a\u5728\u9078\u4e2d\u72c0\u614b\u4e0b\u901a\u904e\u9ede\u64ca\u6309\u9215\u53d6\u6d88\u9078\u4e2d\u6309\u9215\u7684\u80fd\u529b\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",N({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Group")),(0,r.kt)("td",N({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"\u7d44\u5225"),"\u6307\u5b9a\u8a72\u6309\u9215\u6703\u88ab\u5206\u914d\u5230\u7684\u7d44\u7684\u540d\u7a31\u3002 \u9078\u4e2d\u548c\u53d6\u6d88\u9078\u4e2d\u884c\u70ba\u5305\u542b\u5728\u9019\u4e9b\u9078\u9805\u6309\u9215\u7d44\u4e2d\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",N({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Style")),(0,r.kt)("td",N({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"\u6a23\u5f0f"),"\u6307\u5b9a\u5c0f\u90e8\u4ef6\u7684\u9810\u5b9a\u7fa9\u8a2d\u7f6e\uff0c\u7528\u65bc\u5c07\u6240\u9078\u5c6c\u6027\u8a2d\u70ba\u9810\u5b9a\u7fa9\u7684\u503c\u3002",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"\u9019\u4e9b\u6a23\u5f0f\u5305\u542b\u53ef\u514d\u8cbb\u4f7f\u7528\u7684\u5716\u50cf\u3002"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",N({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Image")),(0,r.kt)("td",N({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"\u91cb\u653e\u5716\u50cf")," \u548c ",(0,r.kt)("em",{parentName:"td"},"\u6309\u4f4f\u5716\u50cf")," \u6307\u5b9a\u5206\u914d\u7d66\u6309\u4e0b\u548c\u91cb\u653e\u72c0\u614b\u7684\u4f86\u81eaDesigner\u76ae\u819a\u5eab\u6216Project\u8cc7\u6599\u593e\u7684\u5716\u50cf\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",N({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Appearance")),(0,r.kt)("td",N({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"Alpha")," \u6307\u5b9a\u5c0f\u90e8\u4ef6\u7684\u900f\u660e\u5ea6\u3002",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"\u5c0f\u90e8\u4ef6Alpha\u503c\u7684\u7bc4\u570d\u662f0\u5230255\u3002 0\u70ba\u5b8c\u5168\u900f\u660e\uff0c255\u70ba\u5be6\u5fc3\u3002"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",N({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Mixin")),(0,r.kt)("td",N({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"\u53ef\u62d6\u52d5")," \u6307\u5b9a\u5728\u904b\u884c\u6642\u5c0f\u90e8\u4ef6\u662f\u5426\u53ef\u62d6\u52d5\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"ClickListener")," \u6307\u5b9a\u5c0f\u90e8\u4ef6\u88ab\u9ede\u64ca\u6642\u662f\u5426\u6703\u547c\u53ebcallback\u51fd\u6578\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"FadeAnimator")," \u6307\u5b9a\u5c0f\u90e8\u4ef6\u662f\u5426\u53ef\u7e6a\u88fd\u5176 ",(0,r.kt)("em",{parentName:"td"},"Alpha")," \u503c\u8b8a\u5316\u7684\u52d5\u756b\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"MoveAnimator")," \u6307\u5b9a\u5c0f\u90e8\u4ef6\u662f\u5426\u53ef\u7e6a\u88fd ",(0,r.kt)("em",{parentName:"td"},"X")," \u548c ",(0,r.kt)("em",{parentName:"td"},"Y")," \u503c\u8b8a\u5316\u7684\u52d5\u756b\u3002")))),(0,r.kt)("h2",N({},{id:"interactions"}),"\u4ea4\u4e92"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u7ae0\u7bc0\u5c07\u63cf\u8ff0\u9078\u9805\u6309\u9215\u652f\u63f4\u7684\u64cd\u4f5c\u548c\u89f8\u767c\u689d\u4ef6\u3002"),(0,r.kt)("h3",N({},{id:"actions"}),"\u64cd\u4f5c"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",N({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u6a19\u6e96\u5c0f\u90e8\u4ef6\u64cd\u4f5c")),(0,r.kt)("th",N({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u8aaa\u660e")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",N({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Move widget")),(0,r.kt)("td",N({parentName:"tr"},{align:null}),"\u96a8\u6642\u9593\u7684\u63a8\u79fb\u5c07\u5c0f\u90e8\u4ef6\u79fb\u52d5\u5230\u65b0\u4f4d\u7f6e\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",N({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Fade widget")),(0,r.kt)("td",N({parentName:"tr"},{align:null}),"\u96a8\u6642\u9593\u7684\u63a8\u79fb\u6539\u8b8a\u5c0f\u90e8\u4ef6\u7684Alpha\u503c\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",N({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Hide widget")),(0,r.kt)("td",N({parentName:"tr"},{align:null}),"\u96b1\u85cf\u5c0f\u90e8\u4ef6\uff08\u5c07\u53ef\u898b\u6027\u8a2d\u7f6e\u70bafalse\uff09\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",N({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Show widget")),(0,r.kt)("td",N({parentName:"tr"},{align:null}),"\u4f7f\u96b1\u85cf\u7684\u5c0f\u90e8\u4ef6\u53ef\u898b\uff08\u5c07\u53ef\u898b\u6027\u8a2d\u7f6e\u70batrue\uff09\u3002")))),(0,r.kt)("h3",N({},{id:"triggers"}),"\u89f8\u767c\u689d\u4ef6"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",N({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u89f8\u767c\u689d\u4ef6")),(0,r.kt)("th",N({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u8aaa\u660e")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",N({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Radio Button is selected")),(0,r.kt)("td",N({parentName:"tr"},{align:null}),"\u9078\u9805\u6309\u9215\u5df2\u88ab\u53d6\u6d88\u9078\u4e2d\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",N({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Radio Button is deselected")),(0,r.kt)("td",N({parentName:"tr"},{align:null}),"\u9078\u9805\u6309\u9215\u5df2\u88ab\u9078\u4e2d\u3002")))),(0,r.kt)("h2",N({},{id:"performance"}),"\u6027\u80fd"),(0,r.kt)("p",null,"\u9078\u9805\u6309\u9215\u5305\u542b\u56db\u5e45\u5716\u50cf\u4e26\u4f9d\u8cf4\u65bc\u5716\u50cf\u7e6a\u88fd\u3002 \u56e0\u6b64\uff0c\u5728\u5927\u591a\u6578\u5e73\u81fa\u4e0a\uff0c\u9078\u9805\u6309\u9215\u90fd\u88ab\u8996\u70ba\u5feb\u901f\u57f7\u884c\u7684\u5c0f\u90e8\u4ef6\u3002"),(0,r.kt)("p",null,"\u95dc\u65bc\u5716\u50cf\u7e6a\u88fd\u6027\u80fd\u7684\u66f4\u591a\u8cc7\u8a0a\uff0c\u8acb\u95b1\u8b80",(0,r.kt)("a",N({parentName:"p"},{href:"../general-ui-component-performance"}),"\u901a\u7528UI\u5143\u4ef6\u6027\u80fd"),"\u4e00\u7bc0\u3002"),(0,r.kt)("h2",N({},{id:"examples"}),"\u7bc4\u4f8b"),(0,r.kt)("h3",N({},{id:"generated-code"}),"\u751f\u6210\u7a0b\u5f0f\u78bc"),(0,r.kt)("p",null,"\u5728\u70baView\u57fa\u985e\u751f\u6210\u7684\u7a0b\u5f0f\u78bc\u4e2d\uff0c\u53ef\u4ee5\u770b\u5230TouchGFX Designer\u5982\u4f55\u8a2d\u7f6e\u9078\u9805\u6309\u9215\u3002"),(0,r.kt)(d.Z,{mdxType:"CodeHeader"},"Screen1ViewBase.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",N({parentName:"pre"},{className:"language-cpp"}),'#include <gui_generated/screen1_screen/Screen1ViewBase.hpp>\n#include "BitmapDatabase.hpp"\n\ncreen1ViewBase::Screen1ViewBase() :\n    radioButtonSelectedCallback(this, &Screen1ViewBase::radioButtonSelectedCallbackHandler)\n{\n    radioButtonName.setXY(136, 114);\n    radioButtonName.setBitmaps(touchgfx::Bitmap(BITMAP_BLUE_CHECK_BUTTONS_CHECK_MARK_INACTIVE_ID), touchgfx::Bitmap(BITMAP_BLUE_CHECK_BUTTONS_CHECK_MARK_PRESSED_ID), touchgfx::Bitmap(BITMAP_BLUE_CHECK_BUTTONS_CHECK_MARK_ACTIVE_ID), touchgfx::Bitmap(BITMAP_BLUE_CHECK_BUTTONS_CHECK_MARK_NORMAL_ID));\n    radioButtonName.setSelected(false);\n    radioButtonName.setDeselectionEnabled(true);\n\n    add(radioButtonName);\n    radioButtonGroupName.add(radioButtonName);\n\n    radioButtonGroupName.setRadioButtonSelectedHandler(radioButtonSelectedCallback);\n}\n\nvoid Screen1ViewBase::radioButtonSelectedCallbackHandler(const touchgfx::AbstractButton& src)\n{\n    if (&src == &radioButtonName)\n    {\n        //InteractionName\n        //When buttonName clicked calls the new virtual function "functionName()" set by the user\n        functionName();\n    }\n}\n')),(0,r.kt)(o.Z,{mdxType:"Tip"},"\u60a8\u53ef\u4ee5\u5728\u7528\u6236\u7a0b\u5f0f\u78bc\u4e2d\u4f7f\u7528RadioButton\u985e\u4e2d\u7684\u9019\u4e9b\u51fd\u6578\u548c\u5176\u4ed6\u53ef\u7528\u51fd\u6578\u3002 \u5982\u679c\u4fee\u6539\u4e86\u5c0f\u90e8\u4ef6\u7684\u5916\u89c0\uff0c\u8a18\u5f97\u547c\u53eb ",(0,r.kt)(i.Z,{mdxType:"InlineCode"},"radioButtonName.invalidate()")," \u4ee5\u5f37\u5236\u91cd\u7e6a\u3002"),(0,r.kt)("h2",N({},{id:"touchgfx-designer-examples"}),"TouchGFX Designer\u7bc4\u4f8b"),(0,r.kt)("p",null,"\u70ba\u4e86\u9032\u4e00\u6b65\u63a2\u7d22\u9078\u9805\u6309\u9215\uff0c\u5617\u8a66\u5728TouchGFX Designer\u4e2d\u7528\u4ee5\u4e0bUI\u7bc4\u672c\u65b0\u5efa\u61c9\u7528\uff1a"),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-templates/radio-button-example-v4.17.png",mdxType:"Figure"},"TouchGFX Designer\u4e2d\u7684\u9078\u9805\u6309\u9215UI\u7bc4\u672c"),(0,r.kt)("h2",N({},{id:"api-reference"}),"API\u53c3\u8003"),(0,r.kt)(l.Z,{mdxType:"FurtherReading"},(0,r.kt)("li",null,(0,r.kt)(p.Z,{to:"../../../../api/classes/classtouchgfx_1_1_radio_button",mdxType:"Link"},"RadioButton\u985e\u7684API\u53c3\u8003"))))}x.isMDXComponent=!0}}]);