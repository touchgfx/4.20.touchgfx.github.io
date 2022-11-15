"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[4804],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return s}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),m=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=m(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=m(n),s=a,g=u["".concat(p,".").concat(s)]||u[s]||d[s]||l;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var m=2;m<l;m++)i[m]=n[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},22425:function(e,t,n){var r=n(67294);class a extends r.Component{render(){return r.createElement("div",{className:"code-header"},r.createElement("div",null,r.createElement("h5",null,this.props.children)))}}t.Z=a},44035:function(e,t,n){var r=n(67294),a=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,l=e.height,i=(0,a.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:i,target:"_blank"},r.createElement("img",{width:n,height:l,src:i})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:i,target:"_blank"},r.createElement("img",{width:n,height:l,src:i})),r.createElement("p",null,e.children))}},29415:function(e,t,n){var r=n(67294),a=n(88678);const l=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class i extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:l},this.props.children)}}t.Z=i},88678:function(e,t,n){var r=n(67294);class a extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{className:e},r.createElement("div",{className:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{className:"highlight-content"},this.props.children))}}t.Z=a},31217:function(e,t,n){var r=n(67294);class a extends r.Component{render(){return r.createElement("code",null,this.props.children)}}t.Z=a},37793:function(e,t,n){var r=n(67294),a=n(88678);const l=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class i extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:l},this.props.children)}}t.Z=i},83143:function(e,t,n){n.r(t),n.d(t,{assets:function(){return w},contentTitle:function(){return f},default:function(){return O},frontMatter:function(){return v},metadata:function(){return b},toc:function(){return y}});var r=n(3905),a=n(44035),l=n(29415),i=n(37793),o=n(31217),p=n(39130),m=n(22425),c=Object.defineProperty,d=Object.defineProperties,u=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,h=(e,t,n)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,N=(e,t)=>{for(var n in t||(t={}))g.call(t,n)&&h(e,n,t[n]);if(s)for(var n of s(t))k.call(t,n)&&h(e,n,t[n]);return e};const v={id:"swipe-container",title:"\u6ed1\u52d5\u5bb9\u5668"},f=void 0,b={unversionedId:"development/ui-development/ui-components/containers/swipe-container",id:"development/ui-development/ui-components/containers/swipe-container",title:"\u6ed1\u52d5\u5bb9\u5668",description:"",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/development/ui-development/ui-components/containers/swipe-container.mdx",sourceDirName:"development/ui-development/ui-components/containers",slug:"/development/ui-development/ui-components/containers/swipe-container",permalink:"/4.20/zh-TW/docs/development/ui-development/ui-components/containers/swipe-container",draft:!1,tags:[],version:"current",frontMatter:{id:"swipe-container",title:"\u6ed1\u52d5\u5bb9\u5668"},sidebar:"docs",previous:{title:"\u53ef\u6efe\u52d5\u5bb9\u5668",permalink:"/4.20/zh-TW/docs/development/ui-development/ui-components/containers/scrollable-container"},next:{title:"\u5217\u8868\u4f48\u5c40",permalink:"/4.20/zh-TW/docs/development/ui-development/ui-components/containers/list-layout"}},w={},y=[{value:"\u5c0f\u90e8\u4ef6\u7d44",id:"widget-group",level:2},{value:"\u5c6c\u6027",id:"properties",level:2},{value:"\u4ea4\u4e92",id:"interactions",level:2},{value:"\u64cd\u4f5c",id:"actions",level:3},{value:"\u89f8\u767c\u689d\u4ef6",id:"triggers",level:3},{value:"\u6027\u80fd",id:"performance",level:2},{value:"\u7bc4\u4f8b",id:"examples",level:2},{value:"\u751f\u6210\u7a0b\u5f0f\u78bc",id:"generated-code",level:3},{value:"TouchGFX Designer\u7bc4\u4f8b",id:"touchgfx-designer-examples",level:3},{value:"API\u53c3\u8003",id:"api-reference",level:2}],C={toc:y};function O(e){var t,n=e,{components:c}=n,h=((e,t)=>{var n={};for(var r in e)g.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&s)for(var r of s(e))t.indexOf(r)<0&&k.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=N(N({},C),h),d(t,u({components:c,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"TouchGFX\u4e2d\u7684\u6ed1\u52d5\u5bb9\u5668(Swipe Container)\u662f\u7531\u591a\u500b\u9801\u9762\u69cb\u6210\u5c08\u9580\u5316\u7684",(0,r.kt)("a",N({parentName:"p"},{href:"container"}),"\u5bb9\u5668"),"\uff0c\u53ef\u5728\u5404\u9801\u4e4b\u9593\u6ed1\u52d5\u9032\u884c\u5b58\u53d6\u3002 \u6ed1\u52d5\u5bb9\u5668\u4e2d\u7684\u9801\u9762\u53ef\u5305\u542b\u5176\u4ed6\u5c0f\u90e8\u4ef6\uff0c\u8207\u5bb9\u5668\u985e\u4f3c\u3002"),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-components/swipe-container/widget-appearance.gif",mdxType:"Figure"},"\u5728\u6a21\u64ec\u5668\u4e2d\u904b\u884c\u7684\u6ed1\u52d5\u5bb9\u5668"),(0,r.kt)("h2",N({},{id:"widget-group"}),"\u5c0f\u90e8\u4ef6\u7d44"),(0,r.kt)("p",null,"\u6ed1\u52d5\u5bb9\u5668\u4f4d\u65bcTouchGFX Designer\u4e2d\u7684Containers\u5c0f\u90e8\u4ef6\u7d44\u4e2d\u3002"),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-components/swipe-container/widget-group-v4.17.png",mdxType:"Figure"},"TouchGFX Designer\u4e2d\u7684\u6ed1\u52d5\u5bb9\u5668"),(0,r.kt)("h2",N({},{id:"properties"}),"\u5c6c\u6027"),(0,r.kt)("p",null,"\u4e0b\u9762\u7684\u90e8\u5206\u4ecb\u7d39\u4e86\u6ed1\u52d5\u5bb9\u5668\u7684\u5c6c\u6027\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",N({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u5c6c\u6027\u7d44")),(0,r.kt)("th",N({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u5c6c\u6027\u8aaa\u660e")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",N({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Name")),(0,r.kt)("td",N({parentName:"tr"},{align:null}),"\u5c0f\u90e8\u4ef6\u7684",(0,r.kt)("em",{parentName:"td"},"\u540d\u7a31"),"\u3002 ",(0,r.kt)("em",{parentName:"td"},"Name\u662fTouchGFX Designer\u548c\u7a0b\u5f0f\u78bc\u4e2d\u4f7f\u7528\u7684\u552f\u4e00\u8b58\u5225\u78bc"),"\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",N({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Location")),(0,r.kt)("td",N({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"X")," \u548c",(0,r.kt)("em",{parentName:"td"},"Y"),"\u6307\u5b9a\u5c0f\u90e8\u4ef6\u5de6\u4e0a\u89d2\u76f8\u5c0d\u4e8e\u5176\u7236\u7684\u4f4d\u7f6e\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"W")," \u548c ",(0,r.kt)("em",{parentName:"td"},"H")," \u6307\u5b9a\u5c0f\u90e8\u4ef6\u7684\u5bec\u5ea6\u548c\u9ad8\u5ea6\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"\u9396\u5b9a"),"\u6307\u5b9a\u5c0f\u90e8\u4ef6\u662f\u5426\u61c9\u9396\u5b9a\u70ba\u5176\u7576\u524d\u7684X\u3001Y\u3001W\u548cH\u3002",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"\u5982\u679c\u9396\u5b9a\u5c0f\u90e8\u4ef6\uff0c\u9084\u6703\u7981\u6b62\u901a\u904e\u87a2\u5e55\u8207\u5c0f\u90e8\u4ef6\u9032\u884c\u4ea4\u4e92\u3002"),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"\u53ef\u898b"),"\u6307\u5b9a\u5c0f\u90e8\u4ef6\u7684\u53ef\u898b\u6027\u3002",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"\u5982\u679c\u5c07\u5c0f\u90e8\u4ef6\u6a19\u8a18\u70ba\u4e0d\u53ef\u898b\uff0c\u9084\u6703\u7981\u6b62\u901a\u904e\u87a2\u5e55\u8207\u5c0f\u90e8\u4ef6\u9032\u884c\u4ea4\u4e92\u3002"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",N({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Pages")),(0,r.kt)("td",N({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"\u5df2\u9078\u9801")," \u6307\u5b9a\u756b\u5e03\u4e0a\u986f\u793a\u7684\u9801\u9762\u3002 \u8a72\u9801\u4e5f\u5c07\u4f5c\u70ba\u5c08\u6848\u904b\u884c\u6642\u7684\u8d77\u59cb\u9801\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),"\u9ede\u64ca",(0,r.kt)("em",{parentName:"td"},"+"),"\u6309\u9215\u6642\u6703\u5275\u5efa\u65b0\u9801\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",N({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Page indicator")),(0,r.kt)("td",N({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"\u986f\u793a\u9801\u6307\u793a\u7b26"),"\u6307\u5b9a\u9801\u6307\u793a\u7b26\u7684\u53ef\u898b\u6027\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"X"),"\u548c",(0,r.kt)("em",{parentName:"td"},"Y"),"\u6307\u5b9a\u9801\u6307\u793a\u7b26\u5de6\u4e0a\u89d2\u76f8\u5c0d\u4e8e\u5c0f\u90e8\u4ef6\u5de6\u4e0a\u89d2\u7684\u4f4d\u7f6e\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"\u6c34\u5e73\u5c45\u4e2d"),"\u6307\u5b9a\u9801\u6307\u793a\u7b26\u7684\u4f4d\u7f6e\u662f\u5426\u61c9\u5728\u5c0f\u90e8\u4ef6\u7684x\u8ef8\u4e0a\u5c45\u4e2d\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"\u6a23\u5f0f"),"\u6307\u5b9a\u5c0f\u90e8\u4ef6\u7684\u9810\u5b9a\u7fa9\u8a2d\u7f6e\uff0c\u7528\u65bc\u5c07\u6240\u9078\u5c6c\u6027\u8a2d\u70ba\u9810\u5b9a\u7fa9\u7684\u503c\u3002",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"\u9019\u4e9b\u6a23\u5f0f\u5305\u542b\u53ef\u514d\u8cbb\u4f7f\u7528\u7684\u5716\u50cf\u3002"),".",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"\u6b63\u5e38\u5716\u50cf"),"\u548c",(0,r.kt)("em",{parentName:"td"},"\u9ad8\u4eae\u5716\u50cf"),"\u6307\u5b9a\u5206\u914d\u7d66PageIndicator\u7684\u6b63\u5e38\u548c\u9ad8\u4eae\u72c0\u614b\u7684\u5716\u50cf\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",N({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Swipe settings")),(0,r.kt)("td",N({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"\u6ed1\u52d5\u95be\u503c"),"\u6307\u5b9a\u5207\u63db\u9801\u524d\u4f7f\u7528\u8005\u9700\u8981\u6ed1\u52d5\u7684\u8ddd\u96e2\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"\u7d50\u675f\u6ed1\u52d5\u5f48\u6027\u5bec\u5ea6"),"\u6307\u5b9a\u53ef\u5c07\u7b2c\u4e00\u9801\u548c\u6700\u5f8c\u4e00\u9801\u6ed1\u52d5\u5230\u5c0f\u90e8\u4ef6\u908a\u754c\u4ee5\u5916\u800c\u4e0d\u505c\u6b62\u7684\u8ddd\u96e2\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",N({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Mixin")),(0,r.kt)("td",N({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"\u53ef\u62d6\u52d5")," \u6307\u5b9a\u5728\u904b\u884c\u6642\u5c0f\u90e8\u4ef6\u662f\u5426\u53ef\u62d6\u52d5\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"ClickListener")," \u6307\u5b9a\u5c0f\u90e8\u4ef6\u88ab\u9ede\u64ca\u6642\u662f\u5426\u6703\u547c\u53ebcallback\u51fd\u6578\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"FadeAnimator")," \u6307\u5b9a\u5c0f\u90e8\u4ef6\u662f\u5426\u53ef\u7e6a\u88fd\u5176 ",(0,r.kt)("em",{parentName:"td"},"Alpha")," \u503c\u8b8a\u5316\u7684\u52d5\u756b\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"MoveAnimator")," \u6307\u5b9a\u5c0f\u90e8\u4ef6\u662f\u5426\u53ef\u7e6a\u88fd ",(0,r.kt)("em",{parentName:"td"},"X")," \u548c ",(0,r.kt)("em",{parentName:"td"},"Y")," \u503c\u8b8a\u5316\u7684\u52d5\u756b\u3002")))),(0,r.kt)("h2",N({},{id:"interactions"}),"\u4ea4\u4e92"),(0,r.kt)("p",null,"\u4e0b\u9762\u7684\u90e8\u5206\u4ecb\u7d39\u4e86\u6ed1\u52d5\u5bb9\u5668\u652f\u63f4\u7684\u64cd\u4f5c\u548c\u89f8\u767c\u689d\u4ef6\u3002"),(0,r.kt)("h3",N({},{id:"actions"}),"\u64cd\u4f5c"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",N({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u5c0f\u90e8\u4ef6\u7279\u6709\u7684\u64cd\u4f5c")),(0,r.kt)("th",N({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u8aaa\u660e")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",N({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Resize widget")),(0,r.kt)("td",N({parentName:"tr"},{align:null}),"\u8abf\u6574\u5c0f\u90e8\u4ef6\u7684\u5bec\u5ea6\u548c\u9ad8\u5ea6\u3002")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",N({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u6a19\u6e96\u5c0f\u90e8\u4ef6\u64cd\u4f5c")),(0,r.kt)("th",N({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u8aaa\u660e")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",N({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Move widget")),(0,r.kt)("td",N({parentName:"tr"},{align:null}),"\u96a8\u6642\u9593\u7684\u63a8\u79fb\u5c07\u5c0f\u90e8\u4ef6\u79fb\u52d5\u5230\u65b0\u4f4d\u7f6e\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",N({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Hide widget")),(0,r.kt)("td",N({parentName:"tr"},{align:null}),"\u96b1\u85cf\u5c0f\u90e8\u4ef6\uff08\u5c07\u53ef\u898b\u6027\u8a2d\u7f6e\u70bafalse\uff09\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",N({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Show widget")),(0,r.kt)("td",N({parentName:"tr"},{align:null}),"\u4f7f\u96b1\u85cf\u7684\u5c0f\u90e8\u4ef6\u53ef\u898b\uff08\u5c07\u53ef\u898b\u6027\u8a2d\u7f6e\u70batrue\uff09\u3002")))),(0,r.kt)("h3",N({},{id:"triggers"}),"\u89f8\u767c\u689d\u4ef6"),(0,r.kt)("p",null,"\u6ed1\u52d5\u5bb9\u5668\u4e0d\u6703\u7522\u751f\u4efb\u4f55\u89f8\u767c\u689d\u4ef6\u3002"),(0,r.kt)("h2",N({},{id:"performance"}),"\u6027\u80fd"),(0,r.kt)("p",null,"\u6ed1\u52d5\u5bb9\u5668\u70ba",(0,r.kt)("a",N({parentName:"p"},{href:"container"}),"Container"),"\u985e\u578b\uff0c\u9810\u8a2d\u60c5\u6cc1\u4e0b\u4e0d\u6703\u51fa\u73fe\u5728\u7e6a\u5716\u93c8\u4e2d\u3002 \u56e0\u6b64\uff0c\u6027\u80fd\u4e3b\u8981\u53d6\u6c7a\u65bc\u5b50\u90e8\u4ef6\u7684\u7e6a\u5716\u6027\u80fd\uff0c\u4f46\u6ed1\u52d5\u5bb9\u5668\u9084\u6703\u4ee5\u5176PageIndicator\u7684\u5f62\u5f0f\u7e6a\u88fd\u4e00\u4e9b\u5716\u50cf\u3002"),(0,r.kt)("p",null,"\u95dc\u65bc\u6587\u5b57\u7e6a\u88fd\u6027\u80fd\u7684\u66f4\u591a\u8cc7\u8a0a\uff0c\u8acb\u95b1\u8b80",(0,r.kt)("a",N({parentName:"p"},{href:"../general-ui-component-performance"}),"\u901a\u7528UI\u5143\u4ef6\u6027\u80fd"),"\u4e00\u7bc0\u3002"),(0,r.kt)("h2",N({},{id:"examples"}),"\u7bc4\u4f8b"),(0,r.kt)("h3",N({},{id:"generated-code"}),"\u751f\u6210\u7a0b\u5f0f\u78bc"),(0,r.kt)("p",null,"\u5728\u751f\u6210\u7684\u8996\u5716\u57fa\u985e\u7684\u7a0b\u5f0f\u78bc\u4e2d\uff0c\u53ef\u4ee5\u67e5\u770bTouchGFX Designer\u5982\u4f55\u5275\u5efa\u7531\u5169\u500b\u9801\u9762\u69cb\u6210\u7684\u9801\u9762\u6307\u793a\u7b26\u6c34\u5e73\u5c45\u4e2d\u7684\u6ed1\u52d5\u5bb9\u5668\u3002"),(0,r.kt)(m.Z,{mdxType:"CodeHeader"},"Screen1ViewBase.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",N({parentName:"pre"},{className:"language-cpp"}),'#include <gui_generated/screen1_screen/Screen1ViewBase.hpp>\n#include "BitmapDatabase.hpp"\n\nScreen1ViewBase::Screen1ViewBase()\n{\n    swipeContainerName.setXY(15, 10);\n    swipeContainerName.setPageIndicatorBitmaps(touchgfx::Bitmap(BITMAP_BLUE_PAGEINDICATOR_DOT_INDICATOR_SMALL_NORMAL_ID), touchgfx::Bitmap(BITMAP_BLUE_PAGEINDICATOR_DOT_INDICATOR_SMALL_HIGHLIGHT_ID));\n    swipeContainerName.setPageIndicatorXY(210, 0);\n    swipeContainerName.setSwipeCutoff(50);\n    swipeContainerName.setEndSwipeElasticWidth(50);\n\n    swipeContainerNamePage1.setWidth(450);\n    swipeContainerNamePage1.setHeight(250);\n    swipeContainerName.add(swipeContainerNamePage1);\n\n    swipeContainerNamePage2.setWidth(450);\n    swipeContainerNamePage2.setHeight(250);\n    swipeContainerName.add(swipeContainerNamePage2);\n\n    swipeContainerName.setSelectedPage(0);\n\n    add(swipeContainerName);\n}\n')),(0,r.kt)(i.Z,{mdxType:"Tip"},"\u60a8\u53ef\u4ee5\u5728\u7528\u6236\u7a0b\u5f0f\u78bc\u4e2d\u4f7f\u7528SwipeContainer\u985e\u4e2d\u7684\u9019\u4e9b\u51fd\u6578\u548c\u5176\u4ed6\u53ef\u7528\u51fd\u6578\u3002 \u5982\u679c\u66f4\u6539\u5c0f\u90e8\u4ef6\u7684\u5916\u89c0\uff0c\u8acb\u5fc5\u9808\u547c\u53eb ",(0,r.kt)(o.Z,{mdxType:"InlineCode"},"swipeContainerName.invalidate()")," \u4ee5\u5f37\u5236\u91cd\u7e6a\u3002"),(0,r.kt)("h3",N({},{id:"touchgfx-designer-examples"}),"TouchGFX Designer\u7bc4\u4f8b"),(0,r.kt)("p",null,"\u5982\u9700\u9032\u4e00\u6b65\u77ad\u89e3\u6ed1\u52d5\u5bb9\u5668\uff0c\u8acb\u5617\u8a66\u5728TouchGFX Designer\u4e2d\u4f7f\u7528\u4ee5\u4e0bUI\u7bc4\u672c\u5275\u5efa\u65b0\u61c9\u7528\uff1a"),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-templates/swipe-container-example-v4.17.png",mdxType:"Figure"},"TouchGFX Designer\u4e2d\u7684\u6ed1\u52d5\u5bb9\u5668UI\u7bc4\u672c"),(0,r.kt)("h2",N({},{id:"api-reference"}),"API\u53c3\u8003"),(0,r.kt)(l.Z,{mdxType:"FurtherReading"},(0,r.kt)("li",null,(0,r.kt)(p.Z,{to:"../../../../api/classes/classtouchgfx_1_1_swipe_container",mdxType:"Link"},"SwipeContainer\u985e\u7684API\u53c3\u8003"))))}O.isMDXComponent=!0}}]);