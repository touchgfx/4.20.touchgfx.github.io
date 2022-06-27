"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[1477],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return s}});var a=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var c=a.createContext({}),u=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=u(e.components);return a.createElement(c.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(t),s=l,g=d["".concat(c,".").concat(s)]||d[s]||m[s]||r;return t?a.createElement(g,o(o({ref:n},p),{},{components:t})):a.createElement(g,o({ref:n},p))}));function s(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,o=new Array(r);o[0]=d;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var u=2;u<r;u++)o[u]=t[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},22425:function(e,n,t){var a=t(67294);class l extends a.Component{render(){return a.createElement("div",{className:"code-header"},a.createElement("div",null,a.createElement("h5",null,this.props.children)))}}n.Z=l},44035:function(e,n,t){var a=t(67294),l=t(25026);n.Z=function(e){const n=e.noShadow||!1,t=e.width,r=e.height,o=(0,l.Z)(e.imageSource);return n?a.createElement("div",{className:"figure noshadow"},a.createElement("a",{href:o,target:"_blank"},a.createElement("img",{width:t,height:r,src:o})),a.createElement("p",null,e.children)):a.createElement("div",{className:"figure"},a.createElement("a",{href:o,target:"_blank"},a.createElement("img",{width:t,height:r,src:o})),a.createElement("p",null,e.children))}},29415:function(e,n,t){var a=t(67294),l=t(88678);const r=a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class o extends a.Component{render(){return a.createElement(l.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:r},this.props.children)}}n.Z=o},88678:function(e,n,t){var a=t(67294);class l extends a.Component{render(){const e=`highlight highlight-${this.props.type}`;return a.createElement("div",{className:e},a.createElement("div",{className:"highlight-heading"},a.createElement("h5",null,a.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),a.createElement("div",{className:"highlight-content"},this.props.children))}}n.Z=l},31217:function(e,n,t){var a=t(67294);class l extends a.Component{render(){return a.createElement("code",null,this.props.children)}}n.Z=l},37793:function(e,n,t){var a=t(67294),l=t(88678);const r=a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class o extends a.Component{render(){return a.createElement(l.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:r},this.props.children)}}n.Z=o},40994:function(e,n,t){t.r(n),t.d(n,{assets:function(){return b},contentTitle:function(){return N},default:function(){return _},frontMatter:function(){return f},metadata:function(){return C},toc:function(){return w}});var a=t(3905),l=t(44035),r=t(29415),o=t(37793),i=t(31217),c=t(39130),u=t(22425),p=Object.defineProperty,m=Object.defineProperties,d=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,h=(e,n,t)=>n in e?p(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,v=(e,n)=>{for(var t in n||(n={}))g.call(n,t)&&h(e,t,n[t]);if(s)for(var t of s(n))k.call(n,t)&&h(e,t,n[t]);return e};const f={id:"analog-clock",title:"Analog Clock\uff08\u30a2\u30ca\u30ed\u30b0\uff65\u30af\u30ed\u30c3\u30af\uff09"},N=void 0,C={unversionedId:"development/ui-development/ui-components/miscellaneous/analog-clock",id:"development/ui-development/ui-components/miscellaneous/analog-clock",title:"Analog Clock\uff08\u30a2\u30ca\u30ed\u30b0\uff65\u30af\u30ed\u30c3\u30af\uff09",description:"",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/development/ui-development/ui-components/miscellaneous/analog-clock.mdx",sourceDirName:"development/ui-development/ui-components/miscellaneous",slug:"/development/ui-development/ui-components/miscellaneous/analog-clock",permalink:"/4.20/ja/docs/development/ui-development/ui-components/miscellaneous/analog-clock",tags:[],version:"current",frontMatter:{id:"analog-clock",title:"Analog Clock\uff08\u30a2\u30ca\u30ed\u30b0\uff65\u30af\u30ed\u30c3\u30af\uff09"},sidebar:"docs",previous:{title:"Text Area\uff08\u30c6\u30ad\u30b9\u30c8\uff65\u30a8\u30ea\u30a2\uff09",permalink:"/4.20/ja/docs/development/ui-development/ui-components/miscellaneous/text-area"},next:{title:"Digital Clock\uff08\u30c7\u30b8\u30bf\u30eb\uff65\u30af\u30ed\u30c3\u30af\uff09",permalink:"/4.20/ja/docs/development/ui-development/ui-components/miscellaneous/digital-clock"}},b={},w=[{value:"\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\uff65\u30b0\u30eb\u30fc\u30d7",id:"widget-group",level:2},{value:"\u30d7\u30ed\u30d1\u30c6\u30a3",id:"properties",level:2},{value:"Time",id:"time",level:3},{value:"Clock Hands",id:"clock-hands",level:3},{value:"Hour Hand\u3001Minute Hand\u3001Second Hand",id:"hour-minute-and-second-hands",level:4},{value:"Animations",id:"animation",level:3},{value:"\u30a4\u30f3\u30bf\u30e9\u30af\u30b7\u30e7\u30f3",id:"interactions",level:2},{value:"\u30a2\u30af\u30b7\u30e7\u30f3",id:"actions",level:3},{value:"\u30c8\u30ea\u30ac",id:"triggers",level:3},{value:"\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9",id:"performance",level:2},{value:"\u4f8b",id:"examples",level:2},{value:"\u751f\u6210\u6e08\u307f\u30b3\u30fc\u30c9",id:"generated-code",level:3},{value:"\u30e6\u30fc\u30b6\uff65\u30b3\u30fc\u30c9",id:"user-code",level:3},{value:"TouchGFX Designer\u306e\u4f8b",id:"touchgfx-designer-examples",level:3},{value:"API\u53c2\u7167",id:"api-reference",level:2}],y={toc:w};function _(e){var n,t=e,{components:p}=t,h=((e,n)=>{var t={};for(var a in e)g.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&s)for(var a of s(e))n.indexOf(a)<0&&k.call(e,a)&&(t[a]=e[a]);return t})(t,["components"]);return(0,a.kt)("wrapper",(n=v(v({},y),h),m(n,d({components:p,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"Analog Clock\u306f\u3001\u6642\u9593\u3092\u30c6\u30ad\u30b9\u30c8\u3067\u8868\u793a\u3059\u308b",(0,a.kt)("a",v({parentName:"p"},{href:"digital-clock"}),"DigitalClock"),"\u3068\u306f\u5bfe\u7167\u7684\u306b\u3001\u5f93\u6765\u306e\u30a2\u30ca\u30ed\u30b0\u6642\u8a08\u306e\u8868\u793a\u3092\u53ef\u80fd\u306b\u3059\u308b\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3067\u3059\u3002 \u3053\u306e\u30af\u30ed\u30c3\u30af\u306f\u3001\u6642\u8a08\u306e\u8868\u9762\u306b\u30d0\u30c3\u30af\u30b0\u30e9\u30a6\u30f3\u30c9\u753b\u50cf\u3092\u4f7f\u7528\u3057\u3066\u3044\u307e\u3059\u3002 \u6642\u91dd\u3001\u5206\u91dd\u3001\u79d2\u91dd\u306f\u305d\u308c\u305e\u308c\u306e\u753b\u50cf\u3092\u4f7f\u7528\u3057\u3001\u8a2d\u5b9a\u53ef\u80fd\u306a\u4e2d\u5fc3\u30dd\u30a4\u30f3\u30c8\u306e\u5468\u56f2\u3092\u56de\u8ee2\u3057\u3066\u3044\u307e\u3059\u3002"),(0,a.kt)(l.Z,{imageSource:"/img/development/ui-development/ui-components/analog-clock/widget-appearance.gif",mdxType:"Figure"},"\u30b7\u30df\u30e5\u30ec\u30fc\u30bf\u3067\u5b9f\u884c\u3055\u308c\u308bAnalog Clock\uff08\u901f\u5ea6\u3092\u4e0a\u3052\u305f\u6620\u50cf\uff09"),(0,a.kt)("h2",v({},{id:"widget-group"}),"\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\uff65\u30b0\u30eb\u30fc\u30d7"),(0,a.kt)("p",null,"Analog Clock\u306f\u3001TouchGFX Designer\u306eMiscellaneous\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\uff65\u30b0\u30eb\u30fc\u30d7\u5185\u306b\u3042\u308a\u307e\u3059\u3002"),(0,a.kt)(l.Z,{imageSource:"/img/development/ui-development/ui-components/analog-clock/widget-group-v4.17.png",mdxType:"Figure"},"TouchGFX Designer\u306eAnalog Clock"),(0,a.kt)("h2",v({},{id:"properties"}),"\u30d7\u30ed\u30d1\u30c6\u30a3"),(0,a.kt)("p",null,"TouchGFX Designer\u306eAnalog Clock\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u306f\u4ee5\u4e0b\u306e\u3068\u304a\u308a\u3067\u3059\u3002"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",v({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\u30d7\u30ed\u30d1\u30c6\u30a3\uff65\u30b0\u30eb\u30fc\u30d7")),(0,a.kt)("th",v({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\u30d7\u30ed\u30d1\u30c6\u30a3\u306e\u8aac\u660e")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",v({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Name")),(0,a.kt)("td",v({parentName:"tr"},{align:null}),"\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u540d\u524d\u3002 Name\u306f\u3001TouchGFX Designer\u304a\u3088\u3073\u30b3\u30fc\u30c9\u3067\u4f7f\u7528\u3055\u308c\u308b\u4e00\u610f\u306e\u8b58\u5225\u5b50\u3067\u3059\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",v({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Location")),(0,a.kt)("td",v({parentName:"tr"},{align:null}),"X\u304a\u3088\u3073Y\u306f\u3001\u89aa\u3092\u57fa\u6e96\u3068\u3057\u3066\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u5de6\u4e0a\u9685\u306e\u4f4d\u7f6e\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002",(0,a.kt)("br",null),(0,a.kt)("br",null),"W\u304a\u3088\u3073H\u306f\u3001\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u5e45\u3068\u9ad8\u3055\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002",(0,a.kt)("br",null),"Analog Clock\u306e\u30b5\u30a4\u30ba\u306f\u95a2\u9023\u4ed8\u3051\u3089\u308c\u308b\u753b\u50cf\u306e\u30b5\u30a4\u30ba\u304b\u3089\u53d6\u5f97\u3055\u308c\u3001\u305d\u306e\u753b\u50cf\u3092\u5909\u66f4\u3057\u306a\u3044\u9650\u308a\u5909\u66f4\u3067\u304d\u307e\u305b\u3093\u3002",(0,a.kt)("br",null),(0,a.kt)("br",null),"Lock\u306f\u3001\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3092\u73fe\u5728\u306eX\u3001Y\u3001W\u3001H\u3067\u30ed\u30c3\u30af\u3059\u308b\u304b\u3069\u3046\u304b\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002",(0,a.kt)("br",null),"\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3092\u30ed\u30c3\u30af\u3059\u308b\u3068\u3001\u30b9\u30af\u30ea\u30fc\u30f3\u3092\u901a\u3057\u305f\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3068\u306e\u30a4\u30f3\u30bf\u30e9\u30af\u30b7\u30e7\u30f3\u3082\u7121\u52b9\u306b\u306a\u308a\u307e\u3059\u3002",(0,a.kt)("br",null),(0,a.kt)("br",null),"Visible\u306f\u3001\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u53ef\u8996\u6027\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002 \u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3092\u975e\u8868\u793a\u306b\u3059\u308b\u3068\u3001\u30b9\u30af\u30ea\u30fc\u30f3\u3092\u901a\u3057\u305f\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3068\u306e\u30a4\u30f3\u30bf\u30e9\u30af\u30b7\u30e7\u30f3\u3082\u7121\u52b9\u306b\u306a\u308a\u307e\u3059\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",v({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Style")),(0,a.kt)("td",v({parentName:"tr"},{align:null}),"Style\u306f\u3001\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u4e8b\u524d\u5b9a\u7fa9\u306e\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002\u9078\u629e\u30d7\u30ed\u30d1\u30c6\u30a3\u304c\u4e8b\u524d\u5b9a\u7fa9\u3055\u308c\u305f\u5024\u306b\u8a2d\u5b9a\u3055\u308c\u307e\u3059\u3002",(0,a.kt)("br",null),"\u3053\u308c\u3089\u306e\u30b9\u30bf\u30a4\u30eb\u306b\u306f\u3001\u81ea\u7531\u306b\u4f7f\u7528\u3067\u304d\u308b\u753b\u50cf\u304c\u542b\u307e\u308c\u3066\u3044\u307e\u3059\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",v({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Appearance")),(0,a.kt)("td",v({parentName:"tr"},{align:null}),"Image\u306f\u3001\u30d0\u30c3\u30af\u30b0\u30e9\u30a6\u30f3\u30c9\u306b\u4f7f\u7528\u3059\u308b\u753b\u50cf\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002",(0,a.kt)("br",null),(0,a.kt)("br",null),"Rotation Center X\u304a\u3088\u3073Rotation Center Y\u306f\u3001\u6642\u8a08\u306e\u91dd\u306e\u56de\u8ee2\u306e\u4e2d\u5fc3\u30dd\u30a4\u30f3\u30c8\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",v({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Time")),(0,a.kt)("td",v({parentName:"tr"},{align:null}),"Use Am/Pm\u306f\u3001\u6642\u9593\u8868\u793a\u309212\u6642\u9593\u5f62\u5f0f\u306b\u3059\u308b\u306e\u304b24\u6642\u9593\u5f62\u5f0f\u306b\u3059\u308b\u306e\u304b\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002",(0,a.kt)("br",null),(0,a.kt)("br",null),"Initial Time\u306f\u3001\u6642\u8a08\u304c\u8868\u793a\u3059\u308b\u521d\u671f\u6642\u9593\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",v({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Clock Hands")),(0,a.kt)("td",v({parentName:"tr"},{align:null}),"Clock Hands\u306f\u3001Analog Clock\u3067\u8868\u793a\u3059\u308b\u91dd\uff08\u79d2\u91dd\u3001\u5206\u91dd\u3001\u6642\u91dd\uff09\u3068\u3001\u305d\u308c\u3089\u306e\u91dd\u306e\u9806\u5e8f\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002",(0,a.kt)("br",null),"\u6642\u8a08\u306e\u91dd\u3054\u3068\u306bHand Image\u3092\u8a2d\u5b9a\u3067\u304d\u3001Rotation Position X\u3068Rotation Position Y\u3092\u8a2d\u5b9a\u3059\u308b\u3053\u3068\u3067\u56de\u8ee2\u30dd\u30a4\u30f3\u30c8\u3092\u8a2d\u5b9a\u3067\u304d\u307e\u3059\u3002",(0,a.kt)("br",null),(0,a.kt)("br",null),"\u5206\u91dd\u3068\u6642\u91dd\u306b\u306f\u30b9\u30a4\u30fc\u30d7\uff65\u30cf\u30f3\u30c9\uff65\u30e2\u30fc\u30b7\u30e7\u30f3\uff08\u91dd\u306e\u30b9\u30e0\u30fc\u30ba\u306a\u52d5\u304d\uff09\u3092\u4f7f\u7528\u3059\u308b\u30aa\u30d7\u30b7\u30e7\u30f3\u304c\u3042\u308a\u307e\u3059\u3002\u3053\u306e\u305f\u3081\u306b\u306fSweeping Movement\u3092\u8a2d\u5b9a\u3057\u307e\u3059\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",v({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Animations")),(0,a.kt)("td",v({parentName:"tr"},{align:null}),"Animate Clock Hand Movement\u306f\u3001\u6642\u8a08\u306e\u91dd\u306e\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u3092\u6709\u52b9\u306b\u3059\u308b\u304b\u3069\u3046\u304b\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002",(0,a.kt)("br",null),(0,a.kt)("br",null),"Duration\u306f\u3001\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u306e\u6642\u9593\u306e\u9577\u3055\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002",(0,a.kt)("br",null),(0,a.kt)("br",null),"Easing\u304a\u3088\u3073Easing Option\u306f\u3001\uff08\u52d5\u304d\u306b\u7de9\u6025\u3092\u3064\u3051\u308b\u305f\u3081\u306b\uff09\u4f7f\u7528\u3059\u308b\u30a4\u30fc\u30b8\u30f3\u30b0\u306e\u5f0f\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",v({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Mixins")),(0,a.kt)("td",v({parentName:"tr"},{align:null}),"Draggable\u306f\u3001\u5b9f\u884c\u6642\u306b\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3092\u30c9\u30e9\u30c3\u30b0\u53ef\u80fd\u306b\u3059\u308b\u304b\u3069\u3046\u304b\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002",(0,a.kt)("br",null),(0,a.kt)("br",null),"ClickListener\u306f\u3001\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u304c\u30af\u30ea\u30c3\u30af\u3055\u308c\u305f\u3068\u304d\u306b\u30b3\u30fc\u30eb\u30d0\u30c3\u30af\u3092\u767a\u884c\u3059\u308b\u304b\u3069\u3046\u304b\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002",(0,a.kt)("br",null),(0,a.kt)("br",null),"MoveAnimator\u306f\u3001\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u304cX\u304a\u3088\u3073Y\u5024\u3078\u306e\u5909\u66f4\u3092\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u5316\u3067\u304d\u308b\u304b\u3069\u3046\u304b\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002")))),(0,a.kt)("h3",v({},{id:"time"}),"Time"),(0,a.kt)("p",null,"Time\u30d7\u30ed\u30d1\u30c6\u30a3\uff65\u30b0\u30eb\u30fc\u30d7\u3067\u306f\u3001\u30af\u30ed\u30c3\u30af\uff65\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u521d\u671f\u6642\u9593\u3092\u8a2d\u5b9a\u3057\u3001Am/Pm\u306e\u8868\u793a\u65b9\u5f0f\u3092\u4f7f\u7528\u3059\u308b\u304b\u3069\u3046\u304b\u3092\u8a2d\u5b9a\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,a.kt)("p",null,"Am/Pm\u3092\u9078\u629e\u3059\u308b\u3068\u3001\u30b3\u30fc\u30c9\u751f\u6210\u304c\u308f\u305a\u304b\u306b\u5909\u66f4\u3055\u308c\u307e\u3059\u3002 \u6642\u9593\u3092\u521d\u671f\u5316\u3059\u308b\u305f\u3081\u306b\u3001Analog Clock\u3067\u6b21\u306e\u95a2\u6570:",(0,a.kt)("br",null)," ",(0,a.kt)("inlineCode",{parentName:"p"},"initializeTime24Hour(uint8_t hour, uint8_t minute, uint8_t second)")),(0,a.kt)("p",null,"\u3092\u4f7f\u7528\u3059\u308b\u4ee3\u308f\u308a\u306b\u3001\u6b21\u306e\u95a2\u6570\u304c\u4f7f\u7528\u3055\u308c\u307e\u3059\uff0812\u6642\u9593\u8868\u793a\u306e\u5834\u5408\uff09:",(0,a.kt)("br",null)," ",(0,a.kt)("inlineCode",{parentName:"p"},"initializeTime12Hour(uint8_t hour, uint8_t minute, uint8_t second, bool am)")),(0,a.kt)("p",null,"\u30af\u30ed\u30c3\u30af\u306b\u3088\u3063\u3066\u8868\u793a\u3055\u308c\u308b\u6642\u9593\u3092\u66f4\u65b0\u3059\u308b\u306b\u306f\u3001\u6b21\u306e\u95a2\u6570\u306e\u3044\u305a\u308c\u304b\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002",(0,a.kt)("br",null)," ",(0,a.kt)("inlineCode",{parentName:"p"},"setTime24Hour(uint8_t hour, uint8_t minute, uint8_t second)"),(0,a.kt)("br",null)," ",(0,a.kt)("inlineCode",{parentName:"p"},"setTime12Hour(uint8_t hour, uint8_t minute, uint8_t second, bool am)")),(0,a.kt)("h3",v({},{id:"clock-hands"}),"Clock Hands"),(0,a.kt)("p",null,"Clock Hands\u30d7\u30ed\u30d1\u30c6\u30a3\uff65\u30b0\u30eb\u30fc\u30d7\u3067\u306f\u3001\u4f7f\u7528\u3059\u308b\u91dd\u3068\u305d\u306eZ\u65b9\u5411\u306e\u9806\u756a\u3092\u5b9a\u7fa9\u3067\u304d\u307e\u3059\u3002 \u6700\u521d\u306b\u5b9a\u7fa9\u3057\u305f\u91dd\u304c\u305d\u306e\u4ed6\u306e\u91dd\u306e\u4e0a\u306b\u63cf\u753b\u3055\u308c\u307e\u3059\u3002"),(0,a.kt)("h4",v({},{id:"hour-minute-and-second-hands"}),"Hour Hand\u3001Minute Hand\u3001Second Hand"),(0,a.kt)("p",null,"\u91dd\u3054\u3068\u306b\u753b\u50cf\u3068\u56de\u8ee2\u4f4d\u7f6e\u3092\u8a2d\u5b9a\u3059\u308b\u3053\u3068\u304c\u5fc5\u8981\u3067\u3059\u3002 \u56de\u8ee2\u4f4d\u7f6e\u306f\u3001\u5b9a\u7fa9\u3055\u308c\u305f\u91dd\u306e\u753b\u50cf\u304c\u56de\u8ee2\u3059\u308b\u4e2d\u5fc3\u3068\u306a\u308b\u30dd\u30a4\u30f3\u30c8\u3092\u6c7a\u3081\u307e\u3059\u3002"),(0,a.kt)(l.Z,{imageSource:"/img/development/ui-development/ui-components/analog-clock/analog-clock-hands-props-v4.17.png",mdxType:"Figure"},"\u6642\u8a08\u306e\u91dd\u306e\u30d7\u30ed\u30d1\u30c6\u30a3"),(0,a.kt)("p",null,"\u6642\u91dd\u3068\u5206\u91dd\u3067\u306fSweeping Movement\u3092\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002 \u3053\u306e\u30aa\u30d7\u30b7\u30e7\u30f3\u3092\u6709\u52b9\u306b\u3059\u308b\u3068\u3001\u91dd\u304c\u3042\u308b\u4f4d\u7f6e\u304b\u3089\u6b21\u306e\u4f4d\u7f6e\u306b\u77ac\u6642\u306b\u30b8\u30e3\u30f3\u30d7\u3057\u306a\u304f\u306a\u308a\u307e\u3059\u3002"),(0,a.kt)(l.Z,{imageSource:"/img/development/ui-development/ui-components/analog-clock/analog-clock-no-sweeping-movement.gif",mdxType:"Figure"},"Sweeping movement\u3092\u7121\u52b9\u306b\u3057\u305f\u5834\u5408"),(0,a.kt)(l.Z,{imageSource:"/img/development/ui-development/ui-components/analog-clock/analog-clock-with-sweeping-movement.gif",mdxType:"Figure"},"Sweeping movement\u3092\u6709\u52b9\u306b\u3057\u305f\u5834\u5408"),(0,a.kt)("h3",v({},{id:"animation"}),"Animations"),(0,a.kt)("p",null,"\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u3067\u306f\u3001\u3055\u3089\u306b\u9ad8\u5ea6\u306a\u91dd\u306e\u52d5\u304d\u3092\u5b9a\u7fa9\u3067\u304d\u307e\u3059\u3002 \u305f\u3060\u3057\u3001\u6642\u91dd\u3068\u5206\u91dd\u3067Sweeping Movement\u304c\u6709\u52b9\u306b\u306a\u3063\u3066\u3044\u308b\u5834\u5408\u3001\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u5316\u306f\u884c\u308f\u308c\u307e\u305b\u3093\u3002"),(0,a.kt)("p",null,"\u6b21\u306e\u4f8b\u3067\u306f\u3001\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u306e\u9577\u3055\u304c\u300c30\u300d\u306b\u8a2d\u5b9a\u3055\u308c\u3001\u30a4\u30fc\u30b8\u30f3\u30b0\uff65\u30aa\u30d7\u30b7\u30e7\u30f3\u3067\u30a4\u30fc\u30b8\u30f3\u30b0\u304c\u300cBounce\u300d\u3067\u300cOut\u300d\u306b\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u307e\u3059\u3002"),(0,a.kt)(l.Z,{imageSource:"/img/development/ui-development/ui-components/analog-clock/analog-clock-animation.gif",mdxType:"Figure"},"\u6642\u8a08\u306e\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u306e\u4f8b"),(0,a.kt)("h2",v({},{id:"interactions"}),"\u30a4\u30f3\u30bf\u30e9\u30af\u30b7\u30e7\u30f3"),(0,a.kt)("p",null,"\u4ee5\u4e0b\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u3067\u306f\u3001Analog Clock\u306b\u3088\u3063\u3066\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u308b\u30a2\u30af\u30b7\u30e7\u30f3\u3068\u30c8\u30ea\u30ac\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u307e\u3059\u3002"),(0,a.kt)("h3",v({},{id:"actions"}),"\u30a2\u30af\u30b7\u30e7\u30f3"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",v({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\u6a19\u6e96\u306e\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\uff65\u30a2\u30af\u30b7\u30e7\u30f3")),(0,a.kt)("th",v({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\u8aac\u660e")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",v({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Move widget")),(0,a.kt)("td",v({parentName:"tr"},{align:null}),"\u6642\u9593\u306e\u7d4c\u904e\u306b\u4f34\u3063\u3066\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3092\u65b0\u3057\u3044\u4f4d\u7f6e\u306b\u79fb\u52d5\u3057\u307e\u3059\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",v({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Hide widget")),(0,a.kt)("td",v({parentName:"tr"},{align:null}),"\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3092\u975e\u8868\u793a\u306b\u3057\u307e\u3059\uff08\u53ef\u8996\u6027\u3092false\u306b\u8a2d\u5b9a\u3057\u307e\u3059\uff09\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",v({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Show widget")),(0,a.kt)("td",v({parentName:"tr"},{align:null}),"\u975e\u8868\u793a\u306e\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3092\u8868\u793a\u3057\u307e\u3059\uff08\u53ef\u8996\u6027\u3092true\u306b\u8a2d\u5b9a\u3057\u307e\u3059\uff09\u3002")))),(0,a.kt)("h3",v({},{id:"triggers"}),"\u30c8\u30ea\u30ac"),(0,a.kt)("p",null,"Analog Clock\u306f\u30c8\u30ea\u30ac\u3092\u767a\u884c\u3057\u307e\u305b\u3093\u3002"),(0,a.kt)("h2",v({},{id:"performance"}),"\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9"),(0,a.kt)("p",null,"Analog Clock\u306f\u30011\u3064\u306e",(0,a.kt)("a",v({parentName:"p"},{href:"../images/image"}),"Image"),"\u30683\u3064\u306e",(0,a.kt)("a",v({parentName:"p"},{href:"../images/texture-mapper"}),"Texture Mapper"),"\u3067\u69cb\u6210\u3055\u308c\u3066\u304a\u308a\u3001\u3053\u308c\u3089\u306f\u30de\u30a4\u30af\u30ed\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u306e\u30ea\u30bd\u30fc\u30b9\u8ca0\u8377\u306e\u9ad8\u3044\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3067\u3059\u3002 \u3053\u306e\u305f\u3081\u3001Analog Clock\u306f\u3001\u307b\u3068\u3093\u3069\u306e\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u4e0a\u3067\u8981\u6c42\u306e\u53b3\u3057\u3044\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3067\u3042\u308b\u3068\u898b\u306a\u3055\u308c\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u63cf\u753b\u306e\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u306e\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001\u300c",(0,a.kt)("a",v({parentName:"p"},{href:"../general-ui-component-performance"}),"\u4e00\u822c\u7684\u306aUI\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9"),"\u300d\u30bb\u30af\u30b7\u30e7\u30f3\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,a.kt)("h2",v({},{id:"examples"}),"\u4f8b"),(0,a.kt)("h3",v({},{id:"generated-code"}),"\u751f\u6210\u6e08\u307f\u30b3\u30fc\u30c9"),(0,a.kt)("p",null,"\u30d3\u30e5\u30fc\u306e\u57fa\u5e95\u30af\u30e9\u30b9\u306e\u751f\u6210\u6e08\u307f\u30b3\u30fc\u30c9\u3092\u898b\u308b\u3068\u3001TouchGFX Designer\u306b\u3088\u308bAnalog Clock\u306e\u8a2d\u5b9a\u65b9\u6cd5\u304c\u308f\u304b\u308a\u307e\u3059\u3002"),(0,a.kt)(u.Z,{mdxType:"CodeHeader"},"mainViewBase.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",v({parentName:"pre"},{className:"language-cpp"}),'#include <gui_generated/main_screen/mainViewBase.hpp>\n#include "BitmapDatabase.hpp"\n\nmainViewBase::mainViewBase()\n{\n    analogClock.setXY(124, 15);\n    analogClock.setBackground(BITMAP_BLUE_CLOCKS_BACKGROUNDS_CLOCK_STANDARD_BACKGROUND_ID, 116, 116);\n    analogClock.setupMinuteHand(BITMAP_BLUE_CLOCKS_HANDS_CLOCK_STANDARD_MINUTE_HAND_ID, 7, 67);\n    analogClock.setMinuteHandSecondCorrection(false);\n    analogClock.setupHourHand(BITMAP_BLUE_CLOCKS_HANDS_CLOCK_STANDARD_HOUR_HAND_ID, 7, 52);\n    analogClock.setHourHandMinuteCorrection(false);\n    analogClock.setupSecondHand(BITMAP_BLUE_CLOCKS_HANDS_CLOCK_STANDARD_SECOND_HAND_ID, 3, 66);\n    analogClock.initializeTime24Hour(10, 10, 0);\n\n    add(analogClock);\n}\n\nvoid mainViewBase::setupScreen()\n{\n\n}\n')),(0,a.kt)(o.Z,{mdxType:"Tip"},"\u30e6\u30fc\u30b6\uff65\u30b3\u30fc\u30c9\u3067\u306f\u3001\u3053\u308c\u3089\u306e\u95a2\u6570\u3084\u3001AnalogClock\u30af\u30e9\u30b9\u3067\u4f7f\u7528\u53ef\u80fd\u306a\u305d\u306e\u4ed6\u306e\u95a2\u6570\u3092\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002 \u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u5916\u89b3\u3092\u5909\u66f4\u3059\u308b\u5834\u5408\u306b\u306f\u3001 ",(0,a.kt)(i.Z,{mdxType:"InlineCode"},"analogClock.invalidate()")," \u3092\u547c\u3073\u51fa\u3057\u3066\u3001\u518d\u63cf\u753b\u3092\u884c\u3046\u5fc5\u8981\u304c\u3042\u308b\u3053\u3068\u3092\u5fd8\u308c\u306a\u3044\u3067\u304f\u3060\u3055\u3044\u3002"),(0,a.kt)("h3",v({},{id:"user-code"}),"\u30e6\u30fc\u30b6\uff65\u30b3\u30fc\u30c9"),(0,a.kt)("p",null,"\u6b21\u306e\u4f8b\u306f\u3001\u30af\u30ed\u30c3\u30af\u306e\u52d5\u304d\u306e\u8a2d\u5b9a\u65b9\u6cd5\u3092\u793a\u3057\u3066\u3044\u307e\u3059\u3002"),(0,a.kt)(u.Z,{mdxType:"CodeHeader"},"mainView.hpp"),(0,a.kt)("pre",null,(0,a.kt)("code",v({parentName:"pre"},{className:"language-cpp"}),"#ifndef MAINVIEW_HPP\n#define MAINVIEW_HPP\n\n#include <gui_generated/main_screen/mainViewBase.hpp>\n#include <gui/main_screen/mainPresenter.hpp>\n\nclass mainView : public mainViewBase\n{\npublic:\n    mainView();\n    virtual ~mainView() {}\n    virtual void setupScreen();\n    virtual void tearDownScreen();\n    virtual void handleTickEvent();\n\nprotected:\n    int tickCounter;\n    int analogHours;\n    int analogMinutes;\n    int analogSeconds;\n};\n\n#endif // MAINVIEW_HPP\n\n")),(0,a.kt)(u.Z,{mdxType:"CodeHeader"},"mainView.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",v({parentName:"pre"},{className:"language-cpp"}),"#include <gui/main_screen/mainView.hpp>\n\nmainView::mainView()\n{\n}\n\nvoid mainView::setupScreen()\n{\n    mainViewBase::setupScreen();\n    analogHours = analogClock.getCurrentHour();\n    analogMinutes = analogClock.getCurrentMinute();\n    analogSeconds = analogClock.getCurrentSecond();\n}\n\nvoid mainView::tearDownScreen()\n{\n    mainViewBase::tearDownScreen();\n}\n\nvoid mainView::handleTickEvent()\n{\n    tickCounter++;\n\n    if (tickCounter % 60 == 0)\n    {\n        if (++analogSeconds >= 60)\n        {\n            analogSeconds = 0;\n            if (++analogMinutes >= 60)\n            {\n                analogMinutes = 0;\n                if (++analogHours >= 24)\n                {\n                    analogHours = 0;\n                }\n            }\n        }\n\n        // Update the clocks\n        analogClock.setTime24Hour(analogHours, analogMinutes, analogSeconds);\n    }\n}\n")),(0,a.kt)("h3",v({},{id:"touchgfx-designer-examples"}),"TouchGFX Designer\u306e\u4f8b"),(0,a.kt)("p",null,"Analog Clock\u3092\u3055\u3089\u306b\u63a2\u7d22\u3059\u308b\u306b\u306f\u3001\u6b21\u306e\u4f8b\u3092\u4f7f\u7528\u3057\u3066\u3001TouchGFX Designer\u5185\u3067\u65b0\u3057\u3044\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u4f5c\u6210\u3057\u3066\u307f\u3066\u304f\u3060\u3055\u3044\u3002"),(0,a.kt)(l.Z,{imageSource:"/img/development/ui-development/ui-templates/clock-example-v4.17.png",mdxType:"Figure"},"TouchGFX Designer\u306eClock Example"),(0,a.kt)("h2",v({},{id:"api-reference"}),"API\u53c2\u7167"),(0,a.kt)(r.Z,{mdxType:"FurtherReading"},(0,a.kt)("li",null,(0,a.kt)(c.Z,{to:"../../../../api/classes/classtouchgfx_1_1_analog_clock",mdxType:"Link"},"AnalogClock\u30af\u30e9\u30b9\u306eAPI\u53c2\u7167"))))}_.isMDXComponent=!0}}]);