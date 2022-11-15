"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[9187],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return s}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),m=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=m(e.components);return a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),c=m(n),s=r,k=c["".concat(o,".").concat(s)]||c[s]||u[s]||l;return n?a.createElement(k,i(i({ref:t},p),{},{components:n})):a.createElement(k,i({ref:t},p))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var d={};for(var o in t)hasOwnProperty.call(t,o)&&(d[o]=t[o]);d.originalType=e,d.mdxType="string"==typeof e?e:r,i[1]=d;for(var m=2;m<l;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},22425:function(e,t,n){var a=n(67294);class r extends a.Component{render(){return a.createElement("div",{className:"code-header"},a.createElement("div",null,a.createElement("h5",null,this.props.children)))}}t.Z=r},44035:function(e,t,n){var a=n(67294),r=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,l=e.height,i=(0,r.Z)(e.imageSource);return t?a.createElement("div",{className:"figure noshadow"},a.createElement("a",{href:i,target:"_blank"},a.createElement("img",{width:n,height:l,src:i})),a.createElement("p",null,e.children)):a.createElement("div",{className:"figure"},a.createElement("a",{href:i,target:"_blank"},a.createElement("img",{width:n,height:l,src:i})),a.createElement("p",null,e.children))}},29415:function(e,t,n){var a=n(67294),r=n(88678);const l=a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class i extends a.Component{render(){return a.createElement(r.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:l},this.props.children)}}t.Z=i},88678:function(e,t,n){var a=n(67294);class r extends a.Component{render(){const e=`highlight highlight-${this.props.type}`;return a.createElement("div",{className:e},a.createElement("div",{className:"highlight-heading"},a.createElement("h5",null,a.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),a.createElement("div",{className:"highlight-content"},this.props.children))}}t.Z=r},31217:function(e,t,n){var a=n(67294);class r extends a.Component{render(){return a.createElement("code",null,this.props.children)}}t.Z=r},37793:function(e,t,n){var a=n(67294),r=n(88678);const l=a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class i extends a.Component{render(){return a.createElement(r.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:l},this.props.children)}}t.Z=i},27534:function(e,t,n){n.r(t),n.d(t,{assets:function(){return y},contentTitle:function(){return f},default:function(){return x},frontMatter:function(){return v},metadata:function(){return b},toc:function(){return C}});var a=n(3905),r=n(44035),l=n(29415),i=n(37793),d=n(31217),o=n(39130),m=n(22425),p=Object.defineProperty,u=Object.defineProperties,c=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,k=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,h=(e,t,n)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,N=(e,t)=>{for(var n in t||(t={}))k.call(t,n)&&h(e,n,t[n]);if(s)for(var n of s(t))g.call(t,n)&&h(e,n,t[n]);return e};const v={id:"slider",title:"\u6ed1\u5757"},f=void 0,b={unversionedId:"development/ui-development/ui-components/miscellaneous/slider",id:"development/ui-development/ui-components/miscellaneous/slider",title:"\u6ed1\u5757",description:"",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/ui-development/ui-components/miscellaneous/slider.mdx",sourceDirName:"development/ui-development/ui-components/miscellaneous",slug:"/development/ui-development/ui-components/miscellaneous/slider",permalink:"/4.20/zh-CN/docs/development/ui-development/ui-components/miscellaneous/slider",draft:!1,tags:[],version:"current",frontMatter:{id:"slider",title:"\u6ed1\u5757"},sidebar:"docs",previous:{title:"Miscellaneous",permalink:"/4.20/zh-CN/docs/category/miscellaneous"},next:{title:"\u6587\u672c\u533a\u57df",permalink:"/4.20/zh-CN/docs/development/ui-development/ui-components/miscellaneous/text-area"}},y={},C=[{value:"\u63a7\u4ef6\u7ec4",id:"widget-group",level:2},{value:"\u5c5e\u6027",id:"properties",level:2},{value:"\u4ea4\u4e92",id:"interactions",level:2},{value:"\u52a8\u4f5c",id:"actions",level:3},{value:"\u89e6\u53d1",id:"triggers",level:3},{value:"\u6027\u80fd",id:"performance",level:2},{value:"\u793a\u4f8b",id:"examples",level:2},{value:"\u751f\u6210\u4ee3\u7801",id:"generated-code",level:3},{value:"\u7528\u6237\u4ee3\u7801",id:"user-code",level:3},{value:"TouchGFX Designer\u793a\u4f8b",id:"touchgfx-designer-examples",level:3},{value:"API\u53c2\u8003",id:"api-reference",level:2}],w={toc:C};function x(e){var t,n=e,{components:p}=n,h=((e,t)=>{var n={};for(var a in e)k.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&s)for(var a of s(e))t.indexOf(a)<0&&g.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=N(N({},w),h),u(t,c({components:p,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"\u6ed1\u5757\u4f7f\u7528\u4e09\u5e45\u56fe\u50cf\u5728\u5782\u76f4\u6216\u6c34\u5e73\u65b9\u5411\u663e\u793a\u6ed1\u5757\u3002 \u53ef\u4ee5\u62d6\u52a8\u6ed1\u5757\u7684\u6307\u793a\u56fe\u50cf\u4fee\u6539\u901a\u8fc7\u56de\u8c03\u51fd\u6570\u5e7f\u64ad\u7684\u5185\u90e8\u6574\u6570\u503c\u3002 \u5e7f\u64ad\u7684\u503c\u4f4d\u4e8e\u4e00\u4e2a\u6574\u6570\u503c\u8303\u56f4",(0,a.kt)("em",{parentName:"p"},"\uff08\u4f8b\u59820-100\uff09\u5185"),"\u3002"),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/ui-components/slider/widget-appearance.gif",mdxType:"Figure"},"\u5728\u6a21\u62df\u5668\u4e2d\u8fd0\u884c\u7684\u6ed1\u5757"),(0,a.kt)("h2",N({},{id:"widget-group"}),"\u63a7\u4ef6\u7ec4"),(0,a.kt)("p",null,"\u6ed1\u5757\u4f4d\u4e8eTouchGFX Designer\u4e2d\u7684Miscellaneous\u63a7\u4ef6\u7ec4\u4e2d\u3002"),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/ui-components/slider/widget-group-v4.17.png",mdxType:"Figure"},"TouchGFX Designer\u4e2d\u7684\u6ed1\u5757"),(0,a.kt)("h2",N({},{id:"properties"}),"\u5c5e\u6027"),(0,a.kt)("p",null,"TouchGFX Designer\u4e2d\u6ed1\u5757\u7684\u5c5e\u6027\u3002"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",N({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\u5c5e\u6027\u7ec4")),(0,a.kt)("th",N({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\u5c5e\u6027\u8bf4\u660e")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",N({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"\u540d\u79f0")),(0,a.kt)("td",N({parentName:"tr"},{align:null}),"\u63a7\u4ef6\u7684",(0,a.kt)("em",{parentName:"td"},"\u540d\u79f0"),"\u3002 ",(0,a.kt)("em",{parentName:"td"},"\u540d\u79f0\u662fTouchGFX Designer\u548c\u4ee3\u7801\u4e2d\u4f7f\u7528\u7684\u552f\u4e00\u6807\u8bc6\u7b26"),"\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",N({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"\u7c7b\u578b")),(0,a.kt)("td",N({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"\u7c7b\u578b"),"\u6307\u5b9a\u6ed1\u5757\u5e94\u8be5\u662f\u5782\u76f4\u65b9\u5411\u8fd8\u662f\u6c34\u5e73\u65b9\u5411\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",N({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"\u4f4d\u7f6e")),(0,a.kt)("td",N({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"X"),"\u548c",(0,a.kt)("em",{parentName:"td"},"Y"),"\u6307\u5b9a\u63a7\u4ef6\u5de6\u4e0a\u89d2\u76f8\u5bf9\u4e8e\u5176\u7236\u7684\u4f4d\u7f6e\u3002",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"W"),"\u548c",(0,a.kt)("em",{parentName:"td"},"H"),"\u6307\u5b9a\u63a7\u4ef6\u7684\u5bbd\u5ea6\u548c\u9ad8\u5ea6\u3002",(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"\u6ed1\u5757\u7684\u5927\u5c0f\u662f\u4ece\u5173\u8054\u56fe\u50cf\u7684\u5927\u5c0f\u83b7\u53d6\u7684\uff0c\u5176\u5927\u5c0f\u65e0\u6cd5\u66f4\u6539\uff08\u9664\u975e\u66f4\u6539\u56fe\u50cf\uff09\u3002"),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"\u9501\u5b9a"),"\u6307\u5b9a\u63a7\u4ef6\u662f\u5426\u5e94\u9501\u5b9a\u4e3a\u5176\u5f53\u524d\u7684X\u3001Y\u3001W\u548cH\u3002",(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"\u5982\u679c\u9501\u5b9a\u63a7\u4ef6\uff0c\u8fd8\u4f1a\u7981\u6b62\u901a\u8fc7\u5c4f\u5e55\u4e0e\u63a7\u4ef6\u8fdb\u884c\u4ea4\u4e92\u3002"),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"\u53ef\u89c1"),"\u6307\u5b9a\u63a7\u4ef6\u7684\u53ef\u89c1\u6027\u3002",(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"\u5982\u679c\u5c06\u63a7\u4ef6\u6807\u8bb0\u4e3a\u4e0d\u53ef\u89c1\uff0c\u8fd8\u4f1a\u7981\u6b62\u901a\u8fc7\u5c4f\u5e55\u4e0e\u63a7\u4ef6\u8fdb\u884c\u4ea4\u4e92\u3002"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",N({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"\u6837\u5f0f")),(0,a.kt)("td",N({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"\u6837\u5f0f"),"\u6307\u5b9a\u63a7\u4ef6\u7684\u9884\u5b9a\u4e49\u8bbe\u7f6e\uff0c\u7528\u4e8e\u5c06\u6240\u9009\u5c5e\u6027\u8bbe\u4e3a\u9884\u5b9a\u4e49\u7684\u503c\u3002",(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"\u8fd9\u4e9b\u6837\u5f0f\u5305\u542b\u53ef\u514d\u8d39\u4f7f\u7528\u7684\u56fe\u50cf\u3002"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",N({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"\u56fe\u50cf")),(0,a.kt)("td",N({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"\u80cc\u666f\u56fe\u50cf"),"\u6307\u5b9a\u6307\u793a\u5668\u6ed1\u8fc7\u7684\u80cc\u666f\u56fe\u50cf\u3002",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"\u80cc\u666f\u586b\u5145\u56fe\u50cf"),"\u6307\u5b9a\u586b\u5145\u6307\u793a\u5668\u540e\u9762\u80cc\u666f\u56fe\u50cf\u9876\u90e8\u533a\u57df\u7684\u56fe\u50cf\u3002",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"\u6307\u793a\u56fe\u50cf"),"\u6307\u5b9a\u53ef\u62d6\u52a8\u4ee5\u66f4\u6539\u6ed1\u5757\u503c\u7684\u56fe\u50cf\u3002",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"\u80cc\u666f\u56fe\u50cf\u548c\u80cc\u666f\u586b\u5145\u56fe\u50cf\u7684\u5927\u5c0f\u5fc5\u987b\u4e00\u81f4\u3002"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",N({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"\u4f4d\u7f6e")),(0,a.kt)("td",N({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"X\u8f74\u80cc\u666f\u4f4d\u7f6e"),"\u548c",(0,a.kt)("em",{parentName:"td"},"Y\u8f74\u80cc\u666f\u4f4d\u7f6e"),"\u6307\u5b9a",(0,a.kt)("em",{parentName:"td"},"\u80cc\u666f\u56fe\u50cf"),"\u548c",(0,a.kt)("em",{parentName:"td"},"\u80cc\u666f\u586b\u5145\u56fe\u50cf"),"\u7684\u5de6\u4e0a\u89d2\u4f4d\u7f6e\u3002",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"\u6307\u793a\u5668\u4f4d\u7f6e\u6700\u5c0f\u503c"),"\u548c",(0,a.kt)("em",{parentName:"td"},"\u6307\u793a\u5668\u4f4d\u7f6e\u6700\u5927\u503c"),"\u6307\u5b9a",(0,a.kt)("em",{parentName:"td"},"\u6307\u793a\u5668\u56fe\u50cf"),"\u4f4d\u7f6e\u7684\u6700\u5c0f\u503c\u548c\u6700\u5927\u503c\u3002",(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"\u5bf9\u4e8e\u6c34\u5e73\u6ed1\u5757\uff0c\u8fd9\u4e24\u4e2a\u503c\u5728x\u8f74\u4e0a\uff1b\u5bf9\u4e8e\u5782\u76f4\u6ed1\u5757\uff0c\u8fd9\u4e24\u4e2a\u503c\u5728y\u8f74\u4e0a"),"\u3002",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"Y\u8f74\u6307\u793a\u5668\u4f4d\u7f6e"),"\u6307\u5b9a\u6307\u793a\u5668\u56fe\u50cf\u5728Y\u8f74\u4e0a\u7684\u4f4d\u7f6e\u3002",(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"\u5982\u679c\u6ed1\u5757\u662f\u5782\u76f4\u79fb\u52a8\u7684\uff0c\u5219\u8be5\u503c\u5e94\u5728X\u8f74\u4e0a\u8fdb\u884c\u8c03\u6574\u3002"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",N({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"\u503c")),(0,a.kt)("td",N({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"\u6700\u5c0f\u503c"),"\u548c",(0,a.kt)("em",{parentName:"td"},"\u6700\u5927\u503c"),"\u6307\u5b9a\u4f7f\u7528\u56de\u8c03\u51fd\u6570\u4ece\u6ed1\u5757\u8fdb\u884c\u5e7f\u64ad\u7684\u5185\u90e8\u6574\u6570\u503c\u8303\u56f4\u3002",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"\u521d\u59cb"),"\u6307\u5b9a\u6ed1\u5757\u4e2d\u7684\u521d\u59cb\u5185\u90e8\u503c\u3002 ",(0,a.kt)("em",{parentName:"td"},"\u8fd9\u540c\u6837\u4f1a\u6539\u53d8\u6307\u793a\u5668\u7684\u521d\u59cb\u4f4d\u7f6e\u3002"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",N({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Mixin")),(0,a.kt)("td",N({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"\u53ef\u62d6\u52a8")," \u6307\u5b9a\u5728\u8fd0\u884c\u65f6\u63a7\u4ef6\u662f\u5426\u53ef\u62d6\u52a8\u3002",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"ClickListener")," \u6307\u5b9a\u63a7\u4ef6\u88ab\u70b9\u51fb\u65f6\u662f\u5426\u4f1a\u8c03\u7528\u56de\u8c03\u51fd\u6570\u3002",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"MoveAnimator")," \u6307\u5b9a\u63a7\u4ef6\u662f\u5426\u53ef\u7ed8\u5236 ",(0,a.kt)("em",{parentName:"td"},"X")," \u548c ",(0,a.kt)("em",{parentName:"td"},"Y")," \u503c\u53d8\u5316\u7684\u52a8\u753b\u3002")))),(0,a.kt)("h2",N({},{id:"interactions"}),"\u4ea4\u4e92"),(0,a.kt)("p",null,"\u4e0b\u9762\u7684\u90e8\u5206\u4ecb\u7ecd\u4e86\u6ed1\u5757\u652f\u6301\u7684\u64cd\u4f5c\u548c\u89e6\u53d1\u6761\u4ef6\u3002"),(0,a.kt)("h3",N({},{id:"actions"}),"\u52a8\u4f5c"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",N({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\u6807\u51c6\u63a7\u4ef6\u52a8\u4f5c")),(0,a.kt)("th",N({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\u8bf4\u660e")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",N({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"\u79fb\u52a8\u63a7\u4ef6")),(0,a.kt)("td",N({parentName:"tr"},{align:null}),"\u968f\u65f6\u95f4\u7684\u63a8\u79fb\u5c06\u63a7\u4ef6\u79fb\u52a8\u5230\u65b0\u4f4d\u7f6e\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",N({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"\u9690\u85cf\u63a7\u4ef6")),(0,a.kt)("td",N({parentName:"tr"},{align:null}),"\u9690\u85cf\u63a7\u4ef6\uff08\u5c06\u53ef\u89c1\u6027\u8bbe\u7f6e\u4e3afalse\uff09\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",N({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"\u663e\u793a\u63a7\u4ef6")),(0,a.kt)("td",N({parentName:"tr"},{align:null}),"\u4f7f\u9690\u85cf\u7684\u63a7\u4ef6\u53ef\u89c1\uff08\u5c06\u53ef\u89c1\u6027\u8bbe\u7f6e\u4e3atrue\uff09\u3002")))),(0,a.kt)("h3",N({},{id:"triggers"}),"\u89e6\u53d1"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",N({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\u89e6\u53d1")),(0,a.kt)("th",N({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\u8bf4\u660e")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",N({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"\u542f\u52a8\u6ed1\u5757\u8c03\u6574")),(0,a.kt)("td",N({parentName:"tr"},{align:null}),"\u6ed1\u5757\u5df2\u88ab\u70b9\u51fb\u6216\u62d6\u52a8\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",N({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"\u6ed1\u5757\u8c03\u6574\u5df2\u786e\u8ba4")),(0,a.kt)("td",N({parentName:"tr"},{align:null}),"\u6ed1\u5757\u6307\u793a\u5668\u4e0d\u518d\u88ab\u62d6\u52a8\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",N({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"\u6ed1\u5757\u503c\u5df2\u66f4\u6539")),(0,a.kt)("td",N({parentName:"tr"},{align:null}),"\u6ed1\u5757\u503c\u5df2\u66f4\u6539\u3002")))),(0,a.kt)("h2",N({},{id:"performance"}),"\u6027\u80fd"),(0,a.kt)("p",null,"\u6ed1\u5757\u7531\u4e09\u5e45\u56fe\u50cf\u7ec4\u6210\u3002 \u56e0\u6b64\uff0c\u6ed1\u5757\u53d6\u51b3\u4e8e\u56fe\u50cf\u7ed8\u5236\uff0c\u5728\u5927\u90e8\u5206\u5e73\u53f0\u4e0a\uff0c\u4f1a\u88ab\u89c6\u4e3a\u6267\u884c\u901f\u5ea6\u8f83\u5feb\u7684\u63a7\u4ef6\u3002"),(0,a.kt)("p",null,"\u5173\u4e8e\u56fe\u50cf\u7ed8\u5236\u6027\u80fd\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u9605\u8bfb",(0,a.kt)("a",N({parentName:"p"},{href:"../general-ui-component-performance"}),"\u901a\u7528UI\u7ec4\u4ef6\u6027\u80fd"),"\u4e00\u8282\u3002"),(0,a.kt)("h2",N({},{id:"examples"}),"\u793a\u4f8b"),(0,a.kt)("h3",N({},{id:"generated-code"}),"\u751f\u6210\u4ee3\u7801"),(0,a.kt)("p",null,"\u5728\u751f\u6210\u7684\u89c6\u56fe\u57fa\u7c7b\u7684\u4ee3\u7801\u4e2d\uff0c\u53ef\u4ee5\u67e5\u770bTouchGFX Designer\u662f\u5982\u4f55\u521b\u5efa\u6ed1\u5757\u7684\u3002"),(0,a.kt)(m.Z,{mdxType:"CodeHeader"},"mainViewBase.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",N({parentName:"pre"},{className:"language-cpp"}),'#include <gui_generated/main_screen/mainViewBase.hpp>\n#include "BitmapDatabase.hpp"\n#include <texts/TextKeysAndLanguages.hpp>\n#include <touchgfx/Color.hpp>\n\nmainViewBase::mainViewBase()\n{\n    slider.setXY(71, 173);\n    slider.setBitmaps(touchgfx::Bitmap(BITMAP_BLUE_SLIDER_HORIZONTAL_MEDIUM_SLIDER2_ROUND_BACK_ID), touchgfx::Bitmap(BITMAP_BLUE_SLIDER_HORIZONTAL_MEDIUM_SLIDER2_ROUND_FILL_ID), touchgfx::Bitmap(BITMAP_BLUE_SLIDER_HORIZONTAL_MEDIUM_INDICATORS_SLIDER2_ROUND_NOB_ID));\n    slider.setupHorizontalSlider(2, 6, 0, 0, 284);\n    slider.setValueRange(0, 100);\n    slider.setValue(0);\n\n    add(slider);\n}\n\nvoid mainViewBase::setupScreen()\n{\n\n}\n')),(0,a.kt)(i.Z,{mdxType:"Tip"},"\u53ef\u5728\u7528\u6237\u4ee3\u7801\u4e2d\u4f7f\u7528\u8fd9\u4e9b\u51fd\u6570\u4ee5\u53caSlider\u7c7b\u4e2d\u63d0\u4f9b\u7684\u5176\u4ed6\u51fd\u6570\u3002 \u5982\u679c\u66f4\u6539\u63a7\u4ef6\u7684\u5916\u89c2\uff0c\u8bf7\u5fc5\u987b\u8c03\u7528 ",(0,a.kt)(d.Z,{mdxType:"InlineCode"},"slider.invalidate()")," \u5f3a\u5236\u8fdb\u884c\u91cd\u65b0\u7ed8\u5236\u3002"),(0,a.kt)("h3",N({},{id:"user-code"}),"\u7528\u6237\u4ee3\u7801"),(0,a.kt)("p",null,"\u4ee5\u4e0b\u4ee3\u7801\u793a\u4f8b\u6f14\u793a\u4e86\u5982\u4f55\u8bbe\u7f6e\u6ed1\u5757\u7684\u4e09\u4e2a\u56de\u8c03\u51fd\u6570\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)(d.Z,{mdxType:"InlineCode"},"setStartValueCallback")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)(d.Z,{mdxType:"InlineCode"},"setNewValueCallback")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)(d.Z,{mdxType:"InlineCode"},"setStopValueCallback"))),(0,a.kt)(m.Z,{mdxType:"CodeHeader"},"mainView.hpp"),(0,a.kt)("pre",null,(0,a.kt)("code",N({parentName:"pre"},{className:"language-cpp"}),"#ifndef MAINVIEW_HPP\n#define MAINVIEW_HPP\n\n#include <gui_generated/main_screen/mainViewBase.hpp>\n#include <gui/main_screen/mainPresenter.hpp>\n\nclass mainView : public mainViewBase\n{\npublic:\n    mainView();\n    virtual ~mainView() {}\n    virtual void setupScreen();\n    virtual void tearDownScreen();\nprotected:\n\n    /*\n     * Callback Declarations\n     */\n    touchgfx::Callback<mainView, const touchgfx::Slider&, int> sliderValueStartedChangeCallback;\n    touchgfx::Callback<mainView, const touchgfx::Slider&, int> sliderValueChangedCallback;\n    touchgfx::Callback<mainView, const touchgfx::Slider&, int> sliderValueConfirmedCallback;\n\n    /*\n     * Callback Handler Declarations\n     */\n    void sliderValueStartedChangeCallbackHandler(const touchgfx::Slider& src, int value);\n    void sliderValueChangedCallbackHandler(const touchgfx::Slider& src, int value);\n    void sliderValueConfirmedCallbackHandler(const touchgfx::Slider& src, int value);\n};\n\n#endif // MAINVIEW_HPP\n")),(0,a.kt)(m.Z,{mdxType:"CodeHeader"},"mainView.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",N({parentName:"pre"},{className:"language-cpp"}),"#include <gui/main_screen/mainView.hpp>\n\nmainView::mainView():\n    sliderValueStartedChangeCallback(this, &mainView::sliderValueStartedChangeCallbackHandler),\n    sliderValueChangedCallback(this, &mainView::sliderValueChangedCallbackHandler),\n    sliderValueConfirmedCallback(this, &mainView::sliderValueConfirmedCallbackHandler)\n{\n\n}\n\nvoid mainView::setupScreen()\n{\n    mainViewBase::setupScreen();\n    slider.setStartValueCallback(sliderValueStartedChangeCallback);\n    slider.setNewValueCallback(sliderValueChangedCallback);\n    slider.setStopValueCallback(sliderValueConfirmedCallback);\n}\n\nvoid mainView::tearDownScreen()\n{\n    mainViewBase::tearDownScreen();\n}\n\nvoid mainView::sliderValueStartedChangeCallbackHandler(const touchgfx::Slider& src, int value)\n{\n    if (&src == &slider)\n    {\n        //execute code whenever the slider starts changing value.\n    }\n}\n\nvoid mainView::sliderValueChangedCallbackHandler(const touchgfx::Slider& src, int value)\n{\n    if (&src == &slider)\n    {\n        //execute code whenever the value of the slider changes.\n    }\n}\n\nvoid mainView::sliderValueConfirmedCallbackHandler(const touchgfx::Slider& src, int value)\n{\n    if (&src == &slider)\n    {\n        //execute code whenever the slider stops the changing value.\n    }\n}\n")),(0,a.kt)("h3",N({},{id:"touchgfx-designer-examples"}),"TouchGFX Designer\u793a\u4f8b"),(0,a.kt)("p",null,"\u5982\u9700\u8fdb\u4e00\u6b65\u4e86\u89e3\u6ed1\u5757\uff0c\u8bf7\u5c1d\u8bd5\u5728TouchGFX Designer\u4e2d\u4f7f\u7528\u4e0b\u5217\u793a\u4f8b\u4e4b\u4e00\u521b\u5efa\u65b0\u5e94\u7528\uff1a"),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/ui-templates/slider-example-v4.17.png",mdxType:"Figure"},"TouchGFX Designer\u4e2d\u7684\u6ed1\u5757\u793a\u4f8b"),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/ui-templates/pool-demo-v4.17.png",mdxType:"Figure"},"TouchGFX Designer\u4e2d\u7684Pool Demo"),(0,a.kt)("h2",N({},{id:"api-reference"}),"API\u53c2\u8003"),(0,a.kt)(l.Z,{mdxType:"FurtherReading"},(0,a.kt)("li",null,(0,a.kt)(o.Z,{to:"../../../../api/classes/classtouchgfx_1_1_slider",mdxType:"Link"},"Slider\u7c7b\u7684API\u53c2\u8003"))))}x.isMDXComponent=!0}}]);