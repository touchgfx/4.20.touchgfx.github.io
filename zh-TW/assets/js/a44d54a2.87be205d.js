"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[5482],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return u}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=c(r),u=a,g=d["".concat(p,".").concat(u)]||d[u]||m[u]||l;return r?n.createElement(g,i(i({ref:t},s),{},{components:r})):n.createElement(g,i({ref:t},s))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},22425:function(e,t,r){var n=r(67294);class a extends n.Component{render(){return n.createElement("div",{className:"code-header"},n.createElement("div",null,n.createElement("h5",null,this.props.children)))}}t.Z=a},44035:function(e,t,r){var n=r(67294),a=r(25026);t.Z=function(e){const t=e.noShadow||!1,r=e.width,l=e.height,i=(0,a.Z)(e.imageSource);return t?n.createElement("div",{className:"figure noshadow"},n.createElement("a",{href:i,target:"_blank"},n.createElement("img",{width:r,height:l,src:i})),n.createElement("p",null,e.children)):n.createElement("div",{className:"figure"},n.createElement("a",{href:i,target:"_blank"},n.createElement("img",{width:r,height:l,src:i})),n.createElement("p",null,e.children))}},29415:function(e,t,r){var n=r(67294),a=r(88678);const l=n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},n.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class i extends n.Component{render(){return n.createElement(a.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:l},this.props.children)}}t.Z=i},88678:function(e,t,r){var n=r(67294);class a extends n.Component{render(){const e=`highlight highlight-${this.props.type}`;return n.createElement("div",{className:e},n.createElement("div",{className:"highlight-heading"},n.createElement("h5",null,n.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),n.createElement("div",{className:"highlight-content"},this.props.children))}}t.Z=a},31217:function(e,t,r){var n=r(67294);class a extends n.Component{render(){return n.createElement("code",null,this.props.children)}}t.Z=a},37793:function(e,t,r){var n=r(67294),a=r(88678);const l=n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},n.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class i extends n.Component{render(){return n.createElement(a.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:l},this.props.children)}}t.Z=i},7557:function(e,t,r){r.r(t),r.d(t,{assets:function(){return y},contentTitle:function(){return f},default:function(){return P},frontMatter:function(){return v},metadata:function(){return b},toc:function(){return w}});var n=r(3905),a=r(44035),l=r(29415),i=r(37793),o=r(31217),p=r(39130),c=r(22425),s=Object.defineProperty,m=Object.defineProperties,d=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,h=(e,t,r)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,N=(e,t)=>{for(var r in t||(t={}))g.call(t,r)&&h(e,r,t[r]);if(u)for(var r of u(t))k.call(t,r)&&h(e,r,t[r]);return e};const v={id:"circle-progress",title:"\u5713\u5f62\u9032\u5ea6\u689d"},f=void 0,b={unversionedId:"development/ui-development/ui-components/progress-indicators/circle-progress",id:"development/ui-development/ui-components/progress-indicators/circle-progress",title:"\u5713\u5f62\u9032\u5ea6\u689d",description:"",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/development/ui-development/ui-components/progress-indicators/circle-progress.mdx",sourceDirName:"development/ui-development/ui-components/progress-indicators",slug:"/development/ui-development/ui-components/progress-indicators/circle-progress",permalink:"/4.20/zh-TW/docs/development/ui-development/ui-components/progress-indicators/circle-progress",tags:[],version:"current",frontMatter:{id:"circle-progress",title:"\u5713\u5f62\u9032\u5ea6\u689d"},sidebar:"docs",previous:{title:"\u7dda\u578b\u9032\u5ea6\u689d",permalink:"/4.20/zh-TW/docs/development/ui-development/ui-components/progress-indicators/line-progress"},next:{title:"Shapes",permalink:"/4.20/zh-TW/docs/category/shapes"}},y={},w=[{value:"\u5c0f\u90e8\u4ef6\u7d44",id:"widget-group",level:2},{value:"\u5c6c\u6027",id:"properties",level:2},{value:"\u4ea4\u4e92",id:"interactions",level:2},{value:"\u64cd\u4f5c",id:"actions",level:3},{value:"\u89f8\u767c\u689d\u4ef6",id:"triggers",level:3},{value:"\u6027\u80fd",id:"performance",level:2},{value:"\u7bc4\u4f8b",id:"examples",level:2},{value:"\u751f\u6210\u7a0b\u5f0f\u78bc",id:"generated-code",level:3},{value:"\u7528\u6236\u7a0b\u5f0f\u78bc",id:"user-code",level:3},{value:"TouchGFX Designer\u7bc4\u4f8b",id:"touchgfx-designer-examples",level:3},{value:"API\u53c3\u8003",id:"api-reference",level:2}],x={toc:w};function P(e){var t,r=e,{components:s}=r,h=((e,t)=>{var r={};for(var n in e)g.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&u)for(var n of u(e))t.indexOf(n)<0&&k.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=N(N({},x),h),m(t,d({components:s,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"\u5713\u5f62\u9032\u5ea6\u689d(Circle Progress)\u986f\u793a\u76ee\u524d\u9032\u5ea6\uff0c\u65b9\u6cd5\u662f\u5c07",(0,n.kt)("a",N({parentName:"p"},{href:"../shapes/circle"}),"\u5713\u5f62"),"\u7f6e\u65bc\u80cc\u666f",(0,n.kt)("a",N({parentName:"p"},{href:"../images/image"}),"\u5716\u50cf"),"\u4e0a\u65b9\u4f5c\u70ba\u9032\u5ea6\u6307\u793a\u5668\u3002 \u5713\u74b0\u7684",(0,n.kt)("em",{parentName:"p"},"\u984f\u8272"),"\u3001",(0,n.kt)("em",{parentName:"p"},"Alpha"),"\u3001\u4ee5\u53ca\u6574\u9ad4\u53c3\u6578\u90fd\u53ef\u4ee5\u914d\u7f6e\u3002 \u53ef\u4ee5\u5275\u5efa\u81ea\u8a02\u7684\u80cc\u666f\u5716\u50cf\uff0c\u4e26\u66f4\u6539\u9032\u5ea6\u6307\u793a\u5668\u7684\u4e0d\u540c\u53c3\u6578\uff08\u6bd4\u5982\u4f4d\u7f6e\u548c\u5927\u5c0f\uff09\uff0c\u4ee5\u9069\u61c9\u81ea\u8a02\u7684\u80cc\u666f\u5716\u50cf\u3002"),(0,n.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-components/circle-progress/widget-appearance.gif",mdxType:"Figure"},"\u5728\u6a21\u64ec\u5668\u4e2d\u904b\u884c\u7684\u5713\u5f62\u9032\u5ea6\u689d"),(0,n.kt)("h2",N({},{id:"widget-group"}),"\u5c0f\u90e8\u4ef6\u7d44"),(0,n.kt)("p",null,"\u5713\u5f62\u9032\u5ea6\u689d\u4f4d\u65bcTouchGFX Designer\u4e2d\u7684Progress Indicators\u5c0f\u90e8\u4ef6\u7d44\u4e2d\u3002"),(0,n.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-components/circle-progress/widget-group-v4.17.png",mdxType:"Figure"},"TouchGFX Designer\u4e2d\u7684\u5713\u5f62\u9032\u5ea6\u689d"),(0,n.kt)("h2",N({},{id:"properties"}),"\u5c6c\u6027"),(0,n.kt)("p",null,"TouchGFX Designer\u4e2d\u5713\u5f62\u9032\u5ea6\u689d\u7684\u5c6c\u6027\u3002"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",N({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"th"},"\u5c6c\u6027\u7d44")),(0,n.kt)("th",N({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"th"},"\u5c6c\u6027\u8aaa\u660e")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",N({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Name")),(0,n.kt)("td",N({parentName:"tr"},{align:null}),"\u5c0f\u90e8\u4ef6\u7684",(0,n.kt)("em",{parentName:"td"},"\u540d\u7a31"),"\u3002 ",(0,n.kt)("em",{parentName:"td"},"Name\u662fTouchGFX Designer\u548c\u7a0b\u5f0f\u78bc\u4e2d\u4f7f\u7528\u7684\u552f\u4e00\u8b58\u5225\u78bc"),"\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",N({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Location")),(0,n.kt)("td",N({parentName:"tr"},{align:null}),(0,n.kt)("em",{parentName:"td"},"X")," \u548c",(0,n.kt)("em",{parentName:"td"},"Y")," \u6307\u5b9a\u5c0f\u90e8\u4ef6\u5de6\u4e0a\u89d2\u76f8\u5c0d\u4e8e\u5176\u7236\u7684\u4f4d\u7f6e\u3002",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("em",{parentName:"td"},"W")," \u548c ",(0,n.kt)("em",{parentName:"td"},"H")," \u6307\u5b9a\u5c0f\u90e8\u4ef6\u7684\u5bec\u5ea6\u548c\u9ad8\u5ea6\u3002",(0,n.kt)("br",null),(0,n.kt)("em",{parentName:"td"},"\u5713\u5f62\u9032\u5ea6\u689d\u7684\u5927\u5c0f\u7531\u6240\u9078\u80cc\u666f\u5716\u50cf\u7684\u5927\u5c0f\u6c7a\u5b9a\u3002"),(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("em",{parentName:"td"},"\u9396\u5b9a"),"\u6307\u5b9a\u5c0f\u90e8\u4ef6\u662f\u5426\u61c9\u9396\u5b9a\u70ba\u5176\u7576\u524d\u7684X\u3001Y\u3001W\u548cH\u3002",(0,n.kt)("br",null),(0,n.kt)("em",{parentName:"td"},"\u5982\u679c\u9396\u5b9a\u5c0f\u90e8\u4ef6\uff0c\u9084\u6703\u7981\u6b62\u901a\u904e\u87a2\u5e55\u8207\u5c0f\u90e8\u4ef6\u9032\u884c\u4ea4\u4e92\u3002"),(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("em",{parentName:"td"},"\u53ef\u898b")," \u6307\u5b9a\u5c0f\u90e8\u4ef6\u7684\u53ef\u898b\u6027\u3002 ",(0,n.kt)("em",{parentName:"td"},"\u4f7f\u5c0f\u90e8\u4ef6\u4e0d\u53ef\u898b\u9084\u5c07\u7981\u7528\u8207\u5c0f\u90e8\u4ef6\u4e4b\u9593\u901a\u904e\u87a2\u5e55\u9032\u884c\u7684\u4ea4\u4e92\u3002"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",N({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Style")),(0,n.kt)("td",N({parentName:"tr"},{align:null}),(0,n.kt)("em",{parentName:"td"},"\u6a23\u5f0f")," \u6307\u5b9a\u5c0f\u90e8\u4ef6\u7684\u9810\u5b9a\u7fa9\u8a2d\u7f6e\uff0c\u7528\u65bc\u5c07\u6240\u9078\u5c6c\u6027\u8a2d\u70ba\u9810\u5b9a\u7fa9\u7684\u503c\u3002",(0,n.kt)("br",null),(0,n.kt)("em",{parentName:"td"},"\u9019\u4e9b\u6a23\u5f0f\u5305\u542b\u53ef\u514d\u8cbb\u4f7f\u7528\u7684\u5716\u50cf"),"\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",N({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Image & Color")),(0,n.kt)("td",N({parentName:"tr"},{align:null}),(0,n.kt)("em",{parentName:"td"},"\u80cc\u666f"),"\u6307\u5b9a\u80cc\u666f\u5716\u50cf\u3002",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("em",{parentName:"td"},"\u9032\u5ea6"),"\u6307\u5b9a\u7528\u65bc\u586b\u5145\u5713\u74b0\u7684\u984f\u8272\u6216\u5716\u50cf\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",N({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Values")),(0,n.kt)("td",N({parentName:"tr"},{align:null}),(0,n.kt)("em",{parentName:"td"},"\u6700\u5c0f\u503c"),"\u548c",(0,n.kt)("em",{parentName:"td"},"\u6700\u5927\u503c"),"\u6307\u5b9a\u6307\u793a\u5668\u7684\u6700\u5c0f\u548c\u6700\u5927\u6574\u6578\u503c\u3002",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("em",{parentName:"td"},"\u521d\u59cb"),"\u6307\u5b9a\u9032\u5ea6\u6307\u793a\u5668\u7684\u521d\u59cb\u503c\u3002",(0,n.kt)("em",{parentName:"td"},"\u7e3d\u6b65\u6578"),"\u6307\u5b9a\u9032\u5ea6\u6307\u793a\u5668\u5831\u544a\u65b0\u503c\u7684\u7d30\u5fae\u6027\u3002 \u4f8b\u5982\uff0c\u5982\u679c\u9700\u8981\u4ee50%\u300110%\u300120%\u3001...\u3001100%\u7684\u5f62\u5f0f\u5831\u544a\u9032\u5ea6\uff0c\u7e3d\u503c\u61c9\u8a72\u8a2d\u70ba10\u3002",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("em",{parentName:"td"},"\u6700\u5c0f\u6b65\u6578"),"\u6307\u5b9a\u9032\u5ea6\u6307\u793a\u5668\u986f\u793a\u7684\u6700\u5c0f\u6b65\u6578\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",N({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Appearance")),(0,n.kt)("td",N({parentName:"tr"},{align:null}),(0,n.kt)("em",{parentName:"td"},"X\u8ef8\u5713\u5fc3\u4f4d\u7f6e"),"\u548c",(0,n.kt)("em",{parentName:"td"},"Y\u8ef8\u5713\u5fc3\u4f4d\u7f6e"),"\u6307\u5b9a\u9032\u5ea6\u5713\u74b0\u7684\u5713\u5fc3\u76f8\u5c0d\u65bc\u5176\u2018\u5713\u5f62\u9032\u5ea6\u689d\u2019\u7236\u8996\u7a97\u7684\u4f4d\u7f6e\u3002",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("em",{parentName:"td"},"\u8d77\u59cb\u89d2\u5ea6& \u7d50\u675f\u89d2\u5ea6"),"\u6307\u5b9a\u6240\u7e6a\u5713\u74b0\u7684\u8d77\u59cb\u548c\u7d50\u675f\u89d2\u5ea6\u3002",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("em",{parentName:"td"},"\u534a\u5f91"),"\u6307\u5b9a\u9032\u5ea6\u5713\u74b0\u7684\u5927\u5c0f\u3002",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("em",{parentName:"td"},"\u7dda\u689d\u5bec\u5ea6"),"\u6307\u5b9a\u9032\u5ea6\u5713\u74b0\u7684\u7dda\u689d\u5bec\u5ea6\u3002 \u5982\u679c\u8a72\u503c\u70ba0\uff0c\u5247\u9032\u5ea6\u5713\u74b0\u8207\u534a\u5f91\u4e00\u6a23\u5927\u3002 \u5426\u5247\uff0c\u5c07\u70ba\u9032\u5ea6\u5713\u74b0\u914d\u7f6e\u6307\u5b9a\u7684\u5bec\u5ea6\uff08\u5f9e\u5916\u5074\u958b\u59cb\uff0c\u5411\u5167\u5074\u79fb\u52d5\uff09\u3002",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("em",{parentName:"td"},"\u7aef\u9ede\u6a23\u5f0f"),"\u6307\u5b9a\u7dda\u689d\u7684\u7aef\u9ede\u6a23\u5f0f\u3002",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("em",{parentName:"td"},"Alpha"),"\u6307\u5b9a\u5c0f\u90e8\u4ef6\u7684\u900f\u660e\u5ea6\u3002 ",(0,n.kt)("em",{parentName:"td"},"\u5c0f\u90e8\u4ef6\u7684Alpha\u503c\u4ecb\u65bc0\u548c255\u4e4b\u9593\u3002 0\u70ba\u5b8c\u5168\u900f\u660e\uff0c255\u70ba\u5be6\u5fc3\u3002"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",N({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Mixin")),(0,n.kt)("td",N({parentName:"tr"},{align:null}),(0,n.kt)("em",{parentName:"td"},"\u53ef\u62d6\u52d5")," \u6307\u5b9a\u5728\u904b\u884c\u6642\u5c0f\u90e8\u4ef6\u662f\u5426\u53ef\u62d6\u52d5\u3002",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("em",{parentName:"td"},"ClickListener")," \u6307\u5b9a\u5c0f\u90e8\u4ef6\u88ab\u9ede\u64ca\u6642\u662f\u5426\u6703\u547c\u53ebcallback\u51fd\u6578\u3002",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("em",{parentName:"td"},"FadeAnimator")," \u6307\u5b9a\u5c0f\u90e8\u4ef6\u662f\u5426\u53ef\u7e6a\u88fd\u5176 ",(0,n.kt)("em",{parentName:"td"},"Alpha")," \u503c\u8b8a\u5316\u7684\u52d5\u756b\u3002",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("em",{parentName:"td"},"MoveAnimator")," \u6307\u5b9a\u5c0f\u90e8\u4ef6\u662f\u5426\u53ef\u7e6a\u88fd ",(0,n.kt)("em",{parentName:"td"},"X")," \u548c ",(0,n.kt)("em",{parentName:"td"},"Y")," \u503c\u8b8a\u5316\u7684\u52d5\u756b\u3002")))),(0,n.kt)("h2",N({},{id:"interactions"}),"\u4ea4\u4e92"),(0,n.kt)("p",null,"\u4e0b\u9762\u7684\u90e8\u5206\u4ecb\u7d39\u4e86\u201c\u5713\u5f62\u9032\u5ea6\u689d\u201d\u652f\u63f4\u7684\u64cd\u4f5c\u548c\u89f8\u767c\u689d\u4ef6\u3002"),(0,n.kt)("h3",N({},{id:"actions"}),"\u64cd\u4f5c"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",N({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"th"},"\u5c0f\u90e8\u4ef6\u7279\u6709\u7684\u64cd\u4f5c")),(0,n.kt)("th",N({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"th"},"\u8aaa\u660e")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",N({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Set value")),(0,n.kt)("td",N({parentName:"tr"},{align:null}),"\u8a2d\u7f6e\u9032\u5ea6\u6307\u793a\u5668\u7684\u503c\u3002")))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",N({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"th"},"\u6a19\u6e96\u5c0f\u90e8\u4ef6\u64cd\u4f5c")),(0,n.kt)("th",N({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"th"},"\u8aaa\u660e")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",N({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Move widget")),(0,n.kt)("td",N({parentName:"tr"},{align:null}),"\u96a8\u6642\u9593\u7684\u63a8\u79fb\u5c07\u5c0f\u90e8\u4ef6\u79fb\u52d5\u5230\u65b0\u4f4d\u7f6e\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",N({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Fade widget")),(0,n.kt)("td",N({parentName:"tr"},{align:null}),"\u96a8\u6642\u9593\u7684\u63a8\u79fb\u6539\u8b8a\u5c0f\u90e8\u4ef6\u7684Alpha\u503c\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",N({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Hide widget")),(0,n.kt)("td",N({parentName:"tr"},{align:null}),"\u96b1\u85cf\u5c0f\u90e8\u4ef6\uff08\u5c07visibility\u8a2d\u7f6e\u70bafalse\uff09\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",N({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Show widget")),(0,n.kt)("td",N({parentName:"tr"},{align:null}),"\u4f7f\u96b1\u85cf\u7684\u5c0f\u90e8\u4ef6\u53ef\u898b\uff08\u5c07\u53ef\u898b\u6027\u8a2d\u7f6e\u70batrue\uff09\u3002")))),(0,n.kt)("h3",N({},{id:"triggers"}),"\u89f8\u767c\u689d\u4ef6"),(0,n.kt)("p",null,"\u5713\u5f62\u9032\u5ea6\u689d\u4e0d\u6703\u7522\u751f\u4efb\u4f55\u89f8\u767c\u689d\u4ef6\u3002"),(0,n.kt)("h2",N({},{id:"performance"}),"\u6027\u80fd"),(0,n.kt)("p",null,"\u5713\u5f62\u9032\u5ea6\u689d\u5305\u542b\u4e00\u500b\u5713\u74b0\u548c\u4e00\u5e45\u80cc\u666f\u5716\u50cf\u3002 \u8a72\u5713\u74b0\u57fa\u65bcCanvasWidget\uff0c\u9ad8\u5ea6\u4f9d\u8cf4\u65bcMCU\u9032\u884c\u6e32\u67d3\u3002 \u56e0\u6b64\uff0c\u5728\u5927\u90e8\u5206\u5e73\u81fa\u4e0a\uff0c\u6703\u5c07\u5713\u5f62\u9032\u5ea6\u689d\u8996\u70ba\u6548\u80fd\u8981\u6c42\u9ad8\u7684\u5c0f\u90e8\u4ef6\u3002"),(0,n.kt)("p",null,"\u66f4\u591a\u95dc\u65bcCanvasWidget\u7e6a\u88fd\u6027\u80fd\u7684\u8cc7\u8a0a\uff0c\u8acb\u95b1\u8b80",(0,n.kt)("a",N({parentName:"p"},{href:"../general-ui-component-performance"}),"\u901a\u7528UI\u5143\u4ef6\u6027\u80fd"),"\u90e8\u5206\u3002"),(0,n.kt)("h2",N({},{id:"examples"}),"\u7bc4\u4f8b"),(0,n.kt)("h3",N({},{id:"generated-code"}),"\u751f\u6210\u7a0b\u5f0f\u78bc"),(0,n.kt)("p",null,"\u5728\u751f\u6210\u7684\u8996\u5716\u57fa\u985e\u7684\u7a0b\u5f0f\u78bc\u4e2d\uff0c\u53ef\u4ee5\u67e5\u770bTouchGFX Designer\u662f\u5982\u4f55\u5275\u5efa\u201c\u5713\u5f62\u9032\u5ea6\u689d\u201d\u7684\u3002"),(0,n.kt)(c.Z,{mdxType:"CodeHeader"},"Screen1ViewBase.cpp"),(0,n.kt)("pre",null,(0,n.kt)("code",N({parentName:"pre"},{className:"language-cpp"}),"circleProgress.setXY(188, 84);\ncircleProgress.setProgressIndicatorPosition(0, 0, 104, 104);\ncircleProgress.setRange(0, 100);\ncircleProgress.setCenter(52, 52);\ncircleProgress.setRadius(50);\ncircleProgress.setLineWidth(0);\ncircleProgress.setStartEndAngle(0, 360);\ncircleProgress.setBackground(touchgfx::Bitmap(BITMAP_BLUE_PROGRESSINDICATORS_BG_MEDIUM_CIRCLE_INDICATOR_BG_FULL_ID));\ncircleProgressPainter.setBitmap(touchgfx::Bitmap(BITMAP_BLUE_PROGRESSINDICATORS_FILL_MEDIUM_CIRCLE_INDICATOR_FILL_FULL_ID));\ncircleProgress.setPainter(circleProgress1Painter);\ncircleProgress.setValue(0);\n")),(0,n.kt)("h3",N({},{id:"user-code"}),"\u7528\u6236\u7a0b\u5f0f\u78bc"),(0,n.kt)("p",null,"\u4e0b\u9762\u7684\u7bc4\u4f8b\u6f14\u793a\u4e86\u5982\u4f55\u5be6\u73fe",(0,n.kt)("inlineCode",{parentName:"p"},"handleTickEvent()"),"\u51fd\u6578\u4ee5\u985e\u6bd4\u9032\u5ea6\u3002 \u904b\u884c\u9019\u6bb5\u7a0b\u5f0f\u78bc\u5c07\u5275\u5efa",(0,n.kt)("a",N({parentName:"p"},{href:"circle-progress"}),"\u672c\u6587\u958b\u982d\u6240\u793a\u7684\u61c9\u7528"),"\u3002"),(0,n.kt)(c.Z,{mdxType:"CodeHeader"},"Screen1View.hpp"),(0,n.kt)("pre",null,(0,n.kt)("code",N({parentName:"pre"},{className:"language-cpp"}),"class Screen1View : public Screen1ViewBase\n{\npublic:\n    Screen1View();\n    virtual ~Screen1View() {}\n    virtual void setupScreen();\n    virtual void tearDownScreen();\n    virtual void handleTickEvent();\nprotected:\n    bool increase = true;\n};\n")),(0,n.kt)(c.Z,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,n.kt)("pre",null,(0,n.kt)("code",N({parentName:"pre"},{className:"language-cpp"}),"void Screen1View::handleTickEvent()\n{\n    int currentValue = boxProgress.getValue();\n    int16_t max;\n    int16_t min;\n    boxProgress.getRange(min, max);\n\n    if (currentValue == min)\n    {\n        increase = true;\n    }\n    else if (currentValue == max)\n    {\n        increase = false;\n    }\n\n    int nextValue = increase == true ? currentValue+1 : currentValue-1;\n\n    circleProgress.setValue(nextValue);\n}\n")),(0,n.kt)(i.Z,{mdxType:"Tip"},"\u60a8\u53ef\u4ee5\u5728\u7528\u6236\u7a0b\u5f0f\u78bc\u4e2d\u4f7f\u7528CircleProgress\u985e\u4e2d\u7684\u9019\u4e9b\u51fd\u6578\u548c\u5176\u4ed6\u53ef\u7528\u51fd\u6578\u3002 \u5982\u679c\u66f4\u6539\u4e86\u5c0f\u90e8\u4ef6\u7684\u5916\u89c0\uff0c\u8acb\u5fc5\u9808\u547c\u53eb ",(0,n.kt)(o.Z,{mdxType:"InlineCode"},"circleProgress1.invalidate()")," \u4ee5\u5f37\u5236\u91cd\u7e6a\u3002"),(0,n.kt)("h3",N({},{id:"touchgfx-designer-examples"}),"TouchGFX Designer\u7bc4\u4f8b"),(0,n.kt)("p",null,"\u5982\u9700\u9032\u4e00\u6b65\u77ad\u89e3\u201c\u5713\u5f62\u9032\u5ea6\u689d\u201d\uff0c\u8acb\u5617\u8a66\u5728TouchGFX Designer\u4e2d\u4f7f\u7528\u4ee5\u4e0bUI\u7bc4\u672c\u5275\u5efa\u65b0\u61c9\u7528\uff1a"),(0,n.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-templates/progress-indicator-example-v4.17.png",mdxType:"Figure"},"TouchGFX Designer\u4e2d\u7684\u9032\u5ea6\u6307\u793a\u5668UI\u7bc4\u672c"),(0,n.kt)("h2",N({},{id:"api-reference"}),"API\u53c3\u8003"),(0,n.kt)(l.Z,{mdxType:"FurtherReading"},(0,n.kt)("li",null,(0,n.kt)(p.Z,{to:"../../../../api/classes/classtouchgfx_1_1_circle_progress",mdxType:"Link"},"CircleProgress\u985e\u7684API\u53c3\u8003"))))}P.isMDXComponent=!0}}]);