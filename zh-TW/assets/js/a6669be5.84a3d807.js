"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[6135],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return s}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=d(n),s=a,k=u["".concat(p,".").concat(s)]||u[s]||m[s]||i;return n?r.createElement(k,l(l({ref:t},c),{},{components:n})):r.createElement(k,l({ref:t},c))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},22425:function(e,t,n){var r=n(67294);class a extends r.Component{render(){return r.createElement("div",{className:"code-header"},r.createElement("div",null,r.createElement("h5",null,this.props.children)))}}t.Z=a},44035:function(e,t,n){var r=n(67294),a=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,i=e.height,l=(0,a.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:l,target:"_blank"},r.createElement("img",{width:n,height:i,src:l})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:l,target:"_blank"},r.createElement("img",{width:n,height:i,src:l})),r.createElement("p",null,e.children))}},29415:function(e,t,n){var r=n(67294),a=n(88678);const i=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class l extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:i},this.props.children)}}t.Z=l},88678:function(e,t,n){var r=n(67294);class a extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{className:e},r.createElement("div",{className:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{className:"highlight-content"},this.props.children))}}t.Z=a},31217:function(e,t,n){var r=n(67294);class a extends r.Component{render(){return r.createElement("code",null,this.props.children)}}t.Z=a},37793:function(e,t,n){var r=n(67294),a=n(88678);const i=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class l extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:i},this.props.children)}}t.Z=l},6706:function(e,t,n){n.r(t),n.d(t,{assets:function(){return y},contentTitle:function(){return N},default:function(){return T},frontMatter:function(){return v},metadata:function(){return b},toc:function(){return w}});var r=n(3905),a=n(44035),i=n(29415),l=n(37793),o=n(31217),p=n(39130),d=n(22425),c=Object.defineProperty,m=Object.defineProperties,u=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,k=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,h=(e,t,n)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,f=(e,t)=>{for(var n in t||(t={}))k.call(t,n)&&h(e,n,t[n]);if(s)for(var n of s(t))g.call(t,n)&&h(e,n,t[n]);return e};const v={id:"digital-clock",title:"\u6578\u4f4d\u6642\u9418"},N=void 0,b={unversionedId:"development/ui-development/ui-components/miscellaneous/digital-clock",id:"development/ui-development/ui-components/miscellaneous/digital-clock",title:"\u6578\u4f4d\u6642\u9418",description:"",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/development/ui-development/ui-components/miscellaneous/digital-clock.mdx",sourceDirName:"development/ui-development/ui-components/miscellaneous",slug:"/development/ui-development/ui-components/miscellaneous/digital-clock",permalink:"/4.20/zh-TW/docs/development/ui-development/ui-components/miscellaneous/digital-clock",tags:[],version:"current",frontMatter:{id:"digital-clock",title:"\u6578\u4f4d\u6642\u9418"},sidebar:"docs",previous:{title:"\u985e\u6bd4\u6642\u9418",permalink:"/4.20/zh-TW/docs/development/ui-development/ui-components/miscellaneous/analog-clock"},next:{title:"Static Graph",permalink:"/4.20/zh-TW/docs/development/ui-development/ui-components/miscellaneous/static-graph"}},y={},w=[{value:"\u5c0f\u90e8\u4ef6\u7d44",id:"widget-group",level:2},{value:"\u5c6c\u6027",id:"properties",level:2},{value:"Time",id:"time",level:3},{value:"\u4ea4\u4e92",id:"interactions",level:2},{value:"\u64cd\u4f5c",id:"actions",level:3},{value:"\u89f8\u767c\u689d\u4ef6",id:"triggers",level:3},{value:"\u6027\u80fd",id:"performance",level:2},{value:"\u7bc4\u4f8b",id:"examples",level:2},{value:"\u751f\u6210\u7a0b\u5f0f\u78bc",id:"generated-code",level:3},{value:"\u7528\u6236\u7a0b\u5f0f\u78bc",id:"user-code",level:3},{value:"TouchGFX Designer\u7bc4\u4f8b",id:"touchgfx-designer-examples",level:3},{value:"API\u53c3\u8003",id:"api-reference",level:2}],x={toc:w};function T(e){var t,n=e,{components:c}=n,h=((e,t)=>{var n={};for(var r in e)k.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&s)for(var r of s(e))t.indexOf(r)<0&&g.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=f(f({},x),h),m(t,u({components:c,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"TouchGFX\u4e2d\u7684\u6578\u4f4d\u6642\u9418(Digital Clock)\u662f\u4e00\u500b\u5c0f\u90e8\u4ef6\uff0c\u5141\u8a31\u61c9\u7528\u4ee5\u6578\u4f4d\u6587\u5b57\u7684\u5f62\u5f0f\u986f\u793a\u6642\u9593\uff0c\u800c\u8207\u6b64\u76f8\u5c0d\u7684",(0,r.kt)("a",f({parentName:"p"},{href:"analog-clock"}),"\u985e\u6bd4\u6642\u9418"),"\u4f7f\u7528\u985e\u6bd4\u6642\u9418\u6307\u6a19\u986f\u793a\u6642\u9593\u3002"),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-components/digital-clock/widget-appearance.gif",mdxType:"Figure"},"\u6a21\u64ec\u5668\u4e2d\u904b\u884c\u7684\u6578\u4f4d\u6642\u9418\uff08\u52a0\u901f\u93e1\u982d\uff09"),(0,r.kt)("h2",f({},{id:"widget-group"}),"\u5c0f\u90e8\u4ef6\u7d44"),(0,r.kt)("p",null,"\u6578\u4f4d\u6642\u9418\u4f4d\u65bcTouchGFX Designer\u4e2d\u7684Miscellaneous\u5c0f\u90e8\u4ef6\u7d44\u4e2d\u3002"),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-components/digital-clock/widget-group-v4.17.png",mdxType:"Figure"},"TouchGFX Designer\u4e2d\u7684\u6578\u4f4d\u6642\u9418"),(0,r.kt)("h2",f({},{id:"properties"}),"\u5c6c\u6027"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",f({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u5c6c\u6027\u7d44")),(0,r.kt)("th",f({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u5c6c\u6027\u8aaa\u660e")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Name")),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"\u5c0f\u90e8\u4ef6\u7684",(0,r.kt)("em",{parentName:"td"},"\u540d\u7a31"),"\u3002 ",(0,r.kt)("em",{parentName:"td"},"Name\u662fTouchGFX Designer\u548c\u7a0b\u5f0f\u78bc\u4e2d\u4f7f\u7528\u7684\u552f\u4e00\u8b58\u5225\u78bc"),"\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Location")),(0,r.kt)("td",f({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"X")," \u548c",(0,r.kt)("em",{parentName:"td"},"Y")," \u6307\u5b9a\u5c0f\u90e8\u4ef6\u5de6\u4e0a\u89d2\u76f8\u5c0d\u4e8e\u5176\u7236\u7684\u4f4d\u7f6e\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"W")," \u548c ",(0,r.kt)("em",{parentName:"td"},"H")," \u6307\u5b9a\u5c0f\u90e8\u4ef6\u7684\u5bec\u5ea6\u548c\u9ad8\u5ea6\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"\u9396\u5b9a"),"\u6307\u5b9a\u5c0f\u90e8\u4ef6\u662f\u5426\u61c9\u9396\u5b9a\u70ba\u5176\u7576\u524d\u7684X\u3001Y\u3001W\u548cH\u3002",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"\u5982\u679c\u9396\u5b9a\u5c0f\u90e8\u4ef6\uff0c\u9084\u6703\u7981\u6b62\u901a\u904e\u87a2\u5e55\u8207\u5c0f\u90e8\u4ef6\u9032\u884c\u4ea4\u4e92\u3002"),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"\u53ef\u898b")," \u6307\u5b9a\u5c0f\u90e8\u4ef6\u7684\u53ef\u898b\u6027\u3002 ",(0,r.kt)("em",{parentName:"td"},"\u4f7f\u5c0f\u90e8\u4ef6\u4e0d\u53ef\u898b\u9084\u5c07\u7981\u7528\u8207\u5c0f\u90e8\u4ef6\u4e4b\u9593\u901a\u904e\u87a2\u5e55\u9032\u884c\u7684\u4ea4\u4e92\u3002"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Time")),(0,r.kt)("td",f({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"\u4f7f\u7528Am/Pm")," \u6307\u5b9a\u6642\u9593\u683c\u5f0f\u662f12\u5c0f\u6642\u5236\u9084\u662f24\u5c0f\u6642\u5236\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"\u986f\u793a\u5c0f\u6642\u7684\u524d\u7f6e\u5b57\u5143\u70ba\u96f6"),"\u6307\u5b9a\u662f\u5426\u61c9\u8a72\u555f\u7528\u5c0f\u6642\u7684\u524d\u7f6e\u5b57\u5143\u70ba\u96f6\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"\u986f\u793a\u79d2\u6578")," \u6307\u5b9a\u662f\u5426\u986f\u793a\u79d2\u6578\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"\u521d\u59cb\u6642\u9593"),"\u6307\u5b9a\u6642\u9418\u986f\u793a\u7684\u521d\u59cb\u6642\u9593\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Text")),(0,r.kt)("td",f({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"ID")," specifies the text that is used. ",(0,r.kt)("em",{parentName:"td"},"If the widget uses an auto-generated text, the ID will display 'Auto-generated'"),".",(0,r.kt)("br",null),(0,r.kt)("br",null)," ",(0,r.kt)("em",{parentName:"td"},"Translation")," specifies the content of the text to be displayed. ",(0,r.kt)("em",{parentName:"td"},"Text must have a wildcard to function properly."),(0,r.kt)("br",null),(0,r.kt)("br",null)," ",(0,r.kt)("em",{parentName:"td"},"Typography")," specifies the format of the text.",(0,r.kt)("br",null),(0,r.kt)("br",null)," ",(0,r.kt)("em",{parentName:"td"},"Alignment")," specifies the horizontal alignment of the text.",(0,r.kt)("br",null),(0,r.kt)("br",null)," For more details on text configuration, refer to the ",(0,r.kt)("a",f({parentName:"td"},{href:"../../touchgfx-engine-features/texts-and-fonts"}),"Using texts and fonts")," section.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Appearance")),(0,r.kt)("td",f({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"\u6587\u5b57\u8272\u5f69"),"\u6307\u5b9a\u6578\u4f4d\u5143\u6642\u9418\u4e2d\u6587\u5b57\u7684\u984f\u8272\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Alpha"),"\u6307\u5b9a\u5c0f\u90e8\u4ef6\u7684\u900f\u660e\u5ea6\u3002",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"\u5c0f\u90e8\u4ef6Alpha\u503c\u7684\u7bc4\u570d\u662f0\u5230255\u3002 0\u70ba\u5b8c\u5168\u900f\u660e\uff0c255\u70ba\u5be6\u5fc3\u3002"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Mixin")),(0,r.kt)("td",f({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"\u53ef\u62d6\u52d5")," \u6307\u5b9a\u5728\u904b\u884c\u6642\u5c0f\u90e8\u4ef6\u662f\u5426\u53ef\u62d6\u52d5\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"ClickListener")," \u6307\u5b9a\u5c0f\u90e8\u4ef6\u88ab\u9ede\u64ca\u6642\u662f\u5426\u6703\u547c\u53ebcallback\u51fd\u6578\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"FadeAnimator")," \u6307\u5b9a\u5c0f\u90e8\u4ef6\u662f\u5426\u53ef\u7e6a\u88fd\u5176 ",(0,r.kt)("em",{parentName:"td"},"Alpha")," \u503c\u8b8a\u5316\u7684\u52d5\u756b\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"MoveAnimator")," \u6307\u5b9a\u5c0f\u90e8\u4ef6\u662f\u5426\u53ef\u7e6a\u88fd ",(0,r.kt)("em",{parentName:"td"},"X")," \u548c ",(0,r.kt)("em",{parentName:"td"},"Y")," \u503c\u8b8a\u5316\u7684\u52d5\u756b\u3002")))),(0,r.kt)("h3",f({},{id:"time"}),"Time"),(0,r.kt)("p",null,'"Time"\u5c6c\u6027\u7d44\u7528\u65bc\u901a\u904e\u66f4\u6539\u4e0d\u540c\u7684\u5c6c\u6027\u4f86\u8abf\u6574\u6642\u9593\u5728\u61c9\u7528\u4e2d\u7684\u986f\u793a\u65b9\u5f0f\u3002 \u53ef\u4ee5\u9078\u64c7\u4f7f\u752824\u5c0f\u6642\u5236\u621612\u5c0f\u6642\uff08AM/PM\uff09\u5236\uff0c\u65b9\u6cd5\u662f\u5207\u63db',(0,r.kt)("em",{parentName:"p"},"\u4f7f\u7528Am/Pm"),"\u3002 \u5207\u63db",(0,r.kt)("em",{parentName:"p"},"\u986f\u793a\u5c0f\u6642\u7684\u524d\u7f6e\u5b57\u5143\u70ba\u96f6"),"\u6307\u5b9a\u5982\u4f55\u986f\u793a10\u6642\u4e4b\u524d\u7684\u6642\u9593\uff08\u4f8b\u598209:10:00\u62169:10:00\uff09\uff0c",(0,r.kt)("em",{parentName:"p"},"\u986f\u793a\u79d2\u6578"),"\u958b\u555f\u3001\u95dc\u9589\u201c\u986f\u793a\u79d2\u6578\u201d\u529f\u80fd\uff08\u4f8b\u5982\uff0c9:10:00\u62169:10\uff09\u3002"),(0,r.kt)("p",null,"\u9078\u64c7Am/Pm\u9084\u6703\u5c0e\u81f4\u7a0b\u5f0f\u78bc\u751f\u6210\u7684\u7d30\u5fae\u8b8a\u5316\u3002 \u800c\u4e0d\u662f\u5728\u985e\u6bd4\u6642\u9418\u4e2d\u4f7f\u7528\u4e0b\u9762\u7684\u51fd\u6578\u521d\u59cb\u5316\u6642\u9593\uff1a",(0,r.kt)("br",null)," ",(0,r.kt)("inlineCode",{parentName:"p"},"initializeTime24Hour(uint8_t hour, uint8_t minute, uint8_t second)")),(0,r.kt)("p",null,"\u5982\u679c\u63a1\u752812\u5c0f\u6642\u6a19\u8a18\u6cd5\uff0c\u5c07\u4f7f\u7528\u4ee5\u4e0b\u51fd\u6578\uff1a",(0,r.kt)("br",null)," ",(0,r.kt)("inlineCode",{parentName:"p"},"initializeTime12Hour(uint8_t hour, uint8_t minute, uint8_t second, bool am)")),(0,r.kt)("p",null,"\u5982\u8981\u66f4\u65b0\u6642\u9418\u986f\u793a\u7684\u6642\u9593\uff0c\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u51fd\u6578\u4e4b\u4e00\u3002",(0,r.kt)("br",null)," ",(0,r.kt)("inlineCode",{parentName:"p"},"setTime24Hour(uint8_t hour, uint8_t minute, uint8_t second)"),(0,r.kt)("br",null)," ",(0,r.kt)("inlineCode",{parentName:"p"},"setTime12Hour(uint8_t hour, uint8_t minute, uint8_t second, bool am)")),(0,r.kt)("h2",f({},{id:"interactions"}),"\u4ea4\u4e92"),(0,r.kt)("p",null,"\u4e0b\u9762\u7684\u90e8\u5206\u4ecb\u7d39\u4e86\u6578\u4f4d\u6642\u9418\u652f\u63f4\u7684\u64cd\u4f5c\u548c\u89f8\u767c\u689d\u4ef6\u3002"),(0,r.kt)("h3",f({},{id:"actions"}),"\u64cd\u4f5c"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",f({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u6a19\u6e96\u5c0f\u90e8\u4ef6\u64cd\u4f5c")),(0,r.kt)("th",f({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u8aaa\u660e")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Move widget")),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"\u96a8\u6642\u9593\u7684\u63a8\u79fb\u5c07\u5c0f\u90e8\u4ef6\u79fb\u52d5\u5230\u65b0\u4f4d\u7f6e\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Fade widget")),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"\u96a8\u6642\u9593\u7684\u63a8\u79fb\u6539\u8b8a\u5c0f\u90e8\u4ef6\u7684Alpha\u503c\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Hide widget")),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"\u96b1\u85cf\u5c0f\u90e8\u4ef6\uff08\u5c07\u53ef\u898b\u6027\u8a2d\u7f6e\u70bafalse\uff09\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Show widget")),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"\u4f7f\u96b1\u85cf\u7684\u5c0f\u90e8\u4ef6\u53ef\u898b\uff08\u5c07\u53ef\u898b\u6027\u8a2d\u7f6e\u70batrue\uff09\u3002")))),(0,r.kt)("h3",f({},{id:"triggers"}),"\u89f8\u767c\u689d\u4ef6"),(0,r.kt)("p",null,"\u6578\u4f4d\u6642\u9418\u4e0d\u6703\u7522\u751f\u4efb\u4f55\u89f8\u767c\u689d\u4ef6\u3002"),(0,r.kt)("h2",f({},{id:"performance"}),"\u6027\u80fd"),(0,r.kt)("p",null,"\u6578\u4f4d\u6642\u9418\u5305\u542b\u4e00\u500b",(0,r.kt)("a",f({parentName:"p"},{href:"text-area"}),"\u6587\u5b57\u5340\u57df"),"\uff0c\u5b83\u4e0d\u6703\u4ee5\u4efb\u4f55\u6709\u610f\u7fa9\u7684\u65b9\u5f0f\u5f71\u97ff\u6027\u80fd\u3002 \u56e0\u6b64\uff0c\u5927\u90e8\u5206\u5e73\u81fa\u6703\u5c07\u6578\u4f4d\u6642\u9418\u8996\u70ba\u975e\u5e38\u5feb\u901f\u7684\u5c0f\u90e8\u4ef6\u3002"),(0,r.kt)("p",null,"\u95dc\u65bc\u7e6a\u5716\u6027\u80fd\u7684\u66f4\u591a\u8cc7\u8a0a\uff0c\u8acb\u95b1\u8b80",(0,r.kt)("a",f({parentName:"p"},{href:"../general-ui-component-performance"}),"\u901a\u7528UI\u5143\u4ef6\u6027\u80fd"),"\u90e8\u5206\u3002"),(0,r.kt)("h2",f({},{id:"examples"}),"\u7bc4\u4f8b"),(0,r.kt)("h3",f({},{id:"generated-code"}),"\u751f\u6210\u7a0b\u5f0f\u78bc"),(0,r.kt)("p",null,"\u5728\u70baView\u57fa\u985e\u751f\u6210\u7684\u7a0b\u5f0f\u78bc\u4e2d\uff0c\u53ef\u4ee5\u770b\u5230TouchGFX Designer\u5982\u4f55\u8a2d\u7f6e\u6309\u9215\u3002"),(0,r.kt)(d.Z,{mdxType:"CodeHeader"},"mainViewBase.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",f({parentName:"pre"},{className:"language-cpp"}),'#include <gui_generated/main_screen/mainViewBase.hpp>\n#include "BitmapDatabase.hpp"\n#include <texts/TextKeysAndLanguages.hpp>\n\nmainViewBase::mainViewBase()\n{\n    digitalClock.setPosition(75, 88, 331, 97);\n    digitalClock.setColor(touchgfx::Color::getColorFromRGB(0, 30, 65));\n    digitalClock.setTypedText(touchgfx::TypedText(T_SINGLEUSEID2));\n    digitalClock.displayLeadingZeroForHourIndicator(true);\n    digitalClock.setDisplayMode(touchgfx::DigitalClock::DISPLAY_24_HOUR);\n    digitalClock.setTime24Hour(7, 7, 0);\n\n    add(digitalClock);\n}\n\nvoid mainViewBase::setupScreen()\n{\n\n}\n')),(0,r.kt)(l.Z,{mdxType:"Tip"},"\u60a8\u53ef\u4ee5\u5728\u7528\u6236\u7a0b\u5f0f\u78bc\u4e2d\u4f7f\u7528DigitalClock\u985e\u4e2d\u7684\u9019\u4e9b\u51fd\u6578\u548c\u5176\u4ed6\u53ef\u7528\u51fd\u6578\u3002 \u5982\u679c\u66f4\u6539\u4e86\u5c0f\u90e8\u4ef6\u7684\u5916\u89c0\uff0c\u8acb\u5fc5\u9808\u547c\u53eb ",(0,r.kt)(o.Z,{mdxType:"InlineCode"},"digitalClock.invalidate()")," \u4ee5\u5f37\u5236\u91cd\u7e6a\u3002"),(0,r.kt)("h3",f({},{id:"user-code"}),"\u7528\u6236\u7a0b\u5f0f\u78bc"),(0,r.kt)("p",null,"\u4e0b\u9762\u7684\u7bc4\u4f8b\u6f14\u793a\u5982\u4f55\u8a2d\u7f6e\u6642\u9418\u555f\u52d5\u3002"),(0,r.kt)(d.Z,{mdxType:"CodeHeader"},"mainView.hpp"),(0,r.kt)("pre",null,(0,r.kt)("code",f({parentName:"pre"},{className:"language-cpp"}),"#ifndef MAINVIEW_HPP\n#define MAINVIEW_HPP\n\n#include <gui_generated/main_screen/mainViewBase.hpp>\n#include <gui/main_screen/mainPresenter.hpp>\n\nclass mainView : public mainViewBase\n{\npublic:\n    mainView();\n    virtual ~mainView() {}\n    virtual void setupScreen();\n    virtual void tearDownScreen();\n    virtual void handleTickEvent();\n\nprotected:\n    int tickCounter;\n    int digitalHours;\n    int digitalMinutes;\n    int digitalSeconds;\n};\n\n#endif // MAINVIEW_HPP\n\n")),(0,r.kt)(d.Z,{mdxType:"CodeHeader"},"mainView.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",f({parentName:"pre"},{className:"language-cpp"}),"#include <gui/main_screen/mainView.hpp>\n\nmainView::mainView()\n{\n}\n\nvoid mainView::setupScreen()\n{\n    mainViewBase::setupScreen();\n    digitalHours = digitalClock.getCurrentHour();\n    digitalMinutes = digitalClock.getCurrentMinute();\n    digitalSeconds = digitalClock.getCurrentSecond();\n}\n\nvoid mainView::tearDownScreen()\n{\n    mainViewBase::tearDownScreen();\n}\n\nvoid mainView::handleTickEvent()\n{\n    tickCounter++;\n\n    if (tickCounter % 60 == 0)\n    {\n        if (++digitalSeconds >= 60)\n        {\n            digitalSeconds = 0;\n            if (++digitalMinutes >= 60)\n            {\n                digitalMinutes = 0;\n                if (++digitalHours >= 24)\n                {\n                    digitalHours = 0;\n                }\n            }\n        }\n\n        // Update the clock\n        digitalClock.setTime24Hour(digitalHours, digitalMinutes, digitalSeconds);\n    }\n}\n")),(0,r.kt)("h3",f({},{id:"touchgfx-designer-examples"}),"TouchGFX Designer\u7bc4\u4f8b"),(0,r.kt)("p",null,"\u5982\u9700\u9032\u4e00\u6b65\u77ad\u89e3\u985e\u6bd4\u6642\u9418\uff0c\u8acb\u5617\u8a66\u5728TouchGFX Designer\u4e2d\u4f7f\u7528\u4ee5\u4e0b\u7bc4\u4f8b\u5275\u5efa\u65b0\u61c9\u7528\uff1a"),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-templates/clock-example-v4.17.png",mdxType:"Figure"},"TouchGFX Designer\u4e2d\u7684\u6642\u9418\u7bc4\u4f8b"),(0,r.kt)("h2",f({},{id:"api-reference"}),"API\u53c3\u8003"),(0,r.kt)(i.Z,{mdxType:"FurtherReading"},(0,r.kt)("li",null,(0,r.kt)(p.Z,{to:"../../../../api/classes/classtouchgfx_1_1_digital_clock",mdxType:"Link"},"DigitalClock\u985e\u7684API\u53c3\u8003"))))}T.isMDXComponent=!0}}]);