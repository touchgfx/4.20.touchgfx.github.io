"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[8062],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return s}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=d(n),s=a,g=c["".concat(p,".").concat(s)]||c[s]||u[s]||l;return n?r.createElement(g,i(i({ref:t},m),{},{components:n})):r.createElement(g,i({ref:t},m))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},22425:function(e,t,n){var r=n(67294);class a extends r.Component{render(){return r.createElement("div",{className:"code-header"},r.createElement("div",null,r.createElement("h5",null,this.props.children)))}}t.Z=a},44035:function(e,t,n){var r=n(67294),a=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,l=e.height,i=(0,a.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:i,target:"_blank"},r.createElement("img",{width:n,height:l,src:i})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:i,target:"_blank"},r.createElement("img",{width:n,height:l,src:i})),r.createElement("p",null,e.children))}},29415:function(e,t,n){var r=n(67294),a=n(88678);const l=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class i extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:l},this.props.children)}}t.Z=i},88678:function(e,t,n){var r=n(67294);class a extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{className:e},r.createElement("div",{className:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{className:"highlight-content"},this.props.children))}}t.Z=a},65407:function(e,t,n){var r=n(67294),a=n(25026);t.Z=function(e){var t,n;const l=(0,a.Z)(e.url),i=null!=(t=e.width)?t:"100%",o=null!=(n=e.height)?n:"100%";return r.createElement("div",{className:"loop-video"},r.createElement("video",{muted:!0,loop:!0,playsInline:!0,autoPlay:!0,width:i,height:o},r.createElement("source",{src:l,type:"video/mp4"}),"Your browser does not support the video tag."),r.createElement("p",null,e.children))}},92633:function(e,t,n){n.r(t),n.d(t,{assets:function(){return b},contentTitle:function(){return N},default:function(){return x},frontMatter:function(){return v},metadata:function(){return f},toc:function(){return y}});var r=n(3905),a=n(44035),l=n(29415),i=n(39130),o=n(22425),p=n(65407),d=Object.defineProperty,m=Object.defineProperties,u=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,k=(e,t,n)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,h=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&k(e,n,t[n]);if(c)for(var n of c(t))g.call(t,n)&&k(e,n,t[n]);return e};const v={id:"video",title:"Video"},N=void 0,f={unversionedId:"development/ui-development/ui-components/miscellaneous/video",id:"development/ui-development/ui-components/miscellaneous/video",title:"Video",description:"",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/development/ui-development/ui-components/miscellaneous/video.mdx",sourceDirName:"development/ui-development/ui-components/miscellaneous",slug:"/development/ui-development/ui-components/miscellaneous/video",permalink:"/4.20/ko/docs/development/ui-development/ui-components/miscellaneous/video",draft:!1,tags:[],version:"current",frontMatter:{id:"video",title:"Video"},sidebar:"docs",previous:{title:"Gauge",permalink:"/4.20/ko/docs/development/ui-development/ui-components/miscellaneous/gauge"},next:{title:"\uc77c\ubc18 UI \uad6c\uc131\uc694\uc18c \uc131\ub2a5",permalink:"/4.20/ko/docs/development/ui-development/ui-components/general-ui-component-performance"}},b={},y=[{value:"\uc704\uc82f \uadf8\ub8f9",id:"widget-group",level:2},{value:"\uc18d\uc131",id:"properties",level:2},{value:"\uc778\ud130\ub799\uc158",id:"interactions",level:2},{value:"\uc561\uc158",id:"actions",level:3},{value:"\ud2b8\ub9ac\uac70",id:"triggers",level:3},{value:"\uc131\ub2a5",id:"performance",level:2},{value:"Examples",id:"examples",level:2},{value:"\uc0dd\uc131 \ucf54\ub4dc",id:"generated-code",level:3},{value:"TouchGFX Designer Example",id:"touchgfx-designer-examples",level:3},{value:"API \ucc38\uc870",id:"api-reference",level:2}],w={toc:y};function x(e){var t,n=e,{components:d}=n,k=((e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&c)for(var r of c(e))t.indexOf(r)<0&&g.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=h(h({},w),k),m(t,u({components:d,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"Video\ub294 Motion JPEG \ube44\ub514\uc624\ub97c AVI \ud615\uc2dd\uc73c\ub85c \uc7ac\uc0dd\ud560 \uc218 \uc788\ub294 \uc704\uc82f\uc785\ub2c8\ub2e4."),(0,r.kt)(p.Z,{width:"484",height:"302",url:"/img/development/ui-development/ui-components/video/widget-appearance.mp4",mdxType:"LoopVideo"},"\uc2dc\ubbac\ub808\uc774\ud130\uc5d0\uc11c \uc2e4\ud589 \uc911\uc778 Video"),(0,r.kt)("h2",h({},{id:"widget-group"}),"\uc704\uc82f \uadf8\ub8f9"),(0,r.kt)("p",null,"Video\ub294 TouchGFX Designer\uc758 Miscellaneous \uc704\uc82f \uadf8\ub8f9\uc5d0 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-components/video/widget-group.png",mdxType:"Figure"},"TouchGFX Designer\uc758 Video"),(0,r.kt)("h2",h({},{id:"properties"}),"\uc18d\uc131"),(0,r.kt)("p",null,"TouchGFX Designer\uc5d0\uc11c Video\uc758 \uc18d\uc131\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",h({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\uc18d\uc131 \uadf8\ub8f9")),(0,r.kt)("th",h({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\uc18d\uc131 \uc124\uba85")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",h({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Name")),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"\uc704\uc82f\uc758 ",(0,r.kt)("em",{parentName:"td"},"\uc774\ub984"),"\uc785\ub2c8\ub2e4. ",(0,r.kt)("em",{parentName:"td"},"\uc774\ub294 TouchGFX Designer\uc640 \ucf54\ub4dc\uc5d0\uc11c \uc0ac\uc6a9\ub418\ub294 \uace0\uc720 \uc2dd\ubcc4\uc790\uc785\ub2c8\ub2e4"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",h({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Location")),(0,r.kt)("td",h({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"X"),"\uc640 ",(0,r.kt)("em",{parentName:"td"},"Y"),"\ub294 \uc0c1\uc704 \ub178\ub4dc\uc5d0 \ube44\ub840\ud558\ub294 \uc704\uc82f\uc758 \uc0c1\ub2e8 \uc88c\uce21 \ubaa8\uc11c\ub9ac\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"W"),"\uc640 ",(0,r.kt)("em",{parentName:"td"},"H"),"\ub294 \uc704\uc82f\uc758 \uac00\ub85c\uc640 \uc138\ub85c\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Lock"),"\uc740 \ud604\uc7ac X, Y, W \ubc0f H \uac12\uc5d0 \ub300\ud55c \uc704\uc82f\uc758 \uc7a0\uae08 \uc5ec\ubd80\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4.",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"\uc704\uc82f\uc744 \uc7a0\uadf8\uba74 \uc2a4\ud06c\ub9b0\uc744 \ud1b5\ud55c \uc704\uc82f \uc778\ud130\ub799\uc158\ub3c4 \ube44\ud65c\uc131\ud654\ub429\ub2c8\ub2e4."),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Visible"),"\uc740 \uc704\uc82f\uc758 \ud45c\uc2dc \uc5ec\ubd80\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4. ",(0,r.kt)("em",{parentName:"td"},"\uc704\uc82f\uc744 \ubcf4\uc774\uc9c0 \uc54a\uac8c \ud558\uba74 \uc2a4\ud06c\ub9b0\uc744 \ud1b5\ud55c \uc704\uc82f \uc778\ud130\ub799\uc158\ub3c4 \ube44\ud65c\uc131\ud654\ub429\ub2c8\ub2e4."))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",h({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Sample")),(0,r.kt)("td",h({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"Sample"),"\uc740 \uc704\uc82f\uc5d0 \uc0ac\uc6a9\ud560 \ube44\ub514\uc624 \uc0d8\ud50c\uc744 \uc9c0\uc815\ud569\ub2c8\ub2e4.",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"\uc774\ub7ec\ud55c \uc0d8\ud50c\uc740 \ubb34\ub8cc\ub85c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",h({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Video")),(0,r.kt)("td",h({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"Video"),"\ub294 \uc704\uc82f\uc5d0\uc11c \uc0ac\uc6a9\ud560 \ube44\ub514\uc624\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Auto Play"),"\ub294 \uc2a4\ud06c\ub9b0 \uc804\ud658 \uc2dc \ube44\ub514\uc624\uc758 \uc790\ub3d9 \uc7ac\uc0dd \uc5ec\ubd80\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Loop"),"\ub294 \ube44\ub514\uc624\uc758 \ubc18\ubcf5 \uc7ac\uc0dd \uc5ec\ubd80\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",h({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"\ubbf9\uc2a4\uc778")),(0,r.kt)("td",h({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"Draggable"),"\uc740 \ub7f0\ud0c0\uc784 \uc2dc \uc704\uc82f\uc758 \ub4dc\ub798\uadf8 \uac00\ub2a5 \uc5ec\ubd80\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"ClickListener"),"\ub294 \ud074\ub9ad\ud588\uc744 \ub54c \uc704\uc82f\uc758 \ucf5c\ubc31 \uc2e4\ud589 \uc5ec\ubd80\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"MoveAnimator"),"\ub294 \uc704\uc82f\uc758 ",(0,r.kt)("em",{parentName:"td"},"X")," \ubc0f ",(0,r.kt)("em",{parentName:"td"},"Y")," \uac12 \ubcc0\uacbd\uc5d0 \ub300\ud55c \uc560\ub2c8\uba54\uc774\uc158 \ucc98\ub9ac \uc5ec\ubd80\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4.")))),(0,r.kt)("h2",h({},{id:"interactions"}),"\uc778\ud130\ub799\uc158"),(0,r.kt)("p",null,"TouchGFX Designer\uc758 Video\uc5d0\uc11c \uc9c0\uc6d0\ub418\ub294 \uc561\uc158\uacfc \ud2b8\ub9ac\uac70\ub294 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h3",h({},{id:"actions"}),"\uc561\uc158"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",h({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\uc704\uc82f\ubcc4 \uc561\uc158")),(0,r.kt)("th",h({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\ud45c\ud604")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",h({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Play")),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"\ube44\ub514\uc624 \uc7ac\uc0dd")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",h({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Pause")),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"\ube44\ub514\uc624 \uc77c\uc2dc \uc815\uc9c0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",h({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Stop")),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"\ube44\ub514\uc624 \uc815\uc9c0")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",h({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\ud45c\uc900 \uc704\uc82f \uc561\uc158")),(0,r.kt)("th",h({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\ud45c\ud604")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",h({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Move widget")),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"\uc2dc\uac04\uc774 \uc9c0\ub098\uba74\uc11c \uc704\uc82f\uc744 \uc0c8\ub85c\uc6b4 \uc704\uce58\ub85c \uc774\ub3d9\uc2dc\ud0b5\ub2c8\ub2e4.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",h({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Hide widget")),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"\uc704\uc82f\uc744 \uc228\uae41\ub2c8\ub2e4(visibility\ub97c false\ub85c \uc124\uc815).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",h({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Show widget")),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"\uc228\uae34 \uc704\uc82f\uc774 \ubcf4\uc774\ub3c4\ub85d \ub9cc\ub4ed\ub2c8\ub2e4(visibility\ub97c true\ub85c \uc124\uc815).")))),(0,r.kt)("h3",h({},{id:"triggers"}),"\ud2b8\ub9ac\uac70"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",h({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\uc778\ud130\ub799\uc158\uc744")),(0,r.kt)("th",h({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\ud45c\ud604")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",h({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Video is done")),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"\ube44\ub514\uc624 \uc704\uc82f\uc774 \ube44\ub514\uc624 \uc7ac\uc0dd\uc744 \ub9c8\ucce4\uc2b5\ub2c8\ub2e4.")))),(0,r.kt)("h2",h({},{id:"performance"}),"\uc131\ub2a5"),(0,r.kt)("p",null,"Video Widget\uc740 \ub9ac\uc18c\uc2a4\ub97c \ub9ce\uc774 \uc0ac\uc6a9\ud558\ub294 \uad6c\uc131\uc694\uc18c\uc785\ub2c8\ub2e4. \ub530\ub77c\uc11c \ube44\ub514\uc624\ub294 \ub300\ubd80\ubd84\uc758 \ud50c\ub7ab\ud3fc\uc5d0\uc11c \uae4c\ub2e4\ub85c\uc6b4 \uc704\uc82f\uc73c\ub85c \uc54c\ub824\uc838 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uadf8\ub9ac\uae30 \uc131\ub2a5\uc5d0 \ub300\ud55c \uc790\uc138\ud55c \ub0b4\uc6a9\uc740 ",(0,r.kt)("a",h({parentName:"p"},{href:"../general-ui-component-performance"}),"\uc77c\ubc18 UI \uad6c\uc131\uc694\uc18c \uc131\ub2a5")," \uc139\uc158 \ub610\ub294 ",(0,r.kt)("a",h({parentName:"p"},{href:"../../touchgfx-engine-features/video"}),"MJPEG Video")," \ud398\uc774\uc9c0\ub97c \ucc38\uc870\ud558\uc2ed\uc2dc\uc624."),(0,r.kt)("h2",h({},{id:"examples"}),"Examples"),(0,r.kt)("h3",h({},{id:"generated-code"}),"\uc0dd\uc131 \ucf54\ub4dc"),(0,r.kt)("p",null,"View \uae30\ubcf8 \ud074\ub798\uc2a4\uc758 \uc0dd\uc131 \ucf54\ub4dc\ub97c \ubcf4\uba74 Designer\uc5d0\uc11c Video\uac00 \uc5b4\ub5bb\uac8c \uc124\uc815\ub418\ub294\uc9c0 \uc54c \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)(o.Z,{mdxType:"CodeHeader"},"Screen1ViewBase.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",h({parentName:"pre"},{className:"language-cpp"}),"#include <gui_generated/main_screen/mainViewBase.hpp>\n#include <videos/VideoDatabase.hpp>\n\nmainViewBase::mainViewBase()\n{\n    video.setPosition(0, 0, 480, 272);\n    video.setRepeat(true);\n    video.setVideoData(video_SampleVideo1_480x272_bin_start, video_SampleVideo1_480x272_bin_length);\n    video.play();\n\n    add(video);\n}\n")),(0,r.kt)("h3",h({},{id:"touchgfx-designer-examples"}),"TouchGFX Designer Example"),(0,r.kt)("p",null,"Video\uc5d0 \ub300\ud574 \uc790\uc138\ud788 \uc54c\uc544\ubcf4\ub824\uba74 TouchGFX Designer\uc5d0\uc11c \ub2e4\uc74c UI \ud15c\ud50c\ub9bf \uc911 \ud558\ub098\ub97c \uc0ac\uc6a9\ud574 \uc0c8\ub85c\uc6b4 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uc0dd\uc131\ud558\uc2ed\uc2dc\uc624."),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-templates/video-example.png",mdxType:"Figure"},"TouchGFX Designer\uc758 Video Example UI \ud15c\ud50c\ub9bf"),(0,r.kt)("h2",h({},{id:"api-reference"}),"API \ucc38\uc870"),(0,r.kt)(l.Z,{mdxType:"FurtherReading"},(0,r.kt)("li",null,(0,r.kt)(i.Z,{to:"../../../../api/classes/classtouchgfx_1_1_video_widget",mdxType:"Link"},"VideoWidget \ud074\ub798\uc2a4\uc5d0 \ub300\ud55c API \ucc38\uc870")),(0,r.kt)("li",null,(0,r.kt)(i.Z,{to:"../../touchgfx-engine-features/video",mdxType:"Link"},"Video"))))}x.isMDXComponent=!0}}]);