"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[2351],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return u}});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,c=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=p(n),u=l,k=d["".concat(c,".").concat(u)]||d[u]||s[u]||a;return n?r.createElement(k,i(i({ref:t},m),{},{components:n})):r.createElement(k,i({ref:t},m))}));function u(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},22425:function(e,t,n){var r=n(67294);class l extends r.Component{render(){return r.createElement("div",{className:"code-header"},r.createElement("div",null,r.createElement("h5",null,this.props.children)))}}t.Z=l},44035:function(e,t,n){var r=n(67294),l=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,a=e.height,i=(0,l.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:i,target:"_blank"},r.createElement("img",{width:n,height:a,src:i})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:i,target:"_blank"},r.createElement("img",{width:n,height:a,src:i})),r.createElement("p",null,e.children))}},29415:function(e,t,n){var r=n(67294),l=n(88678);const a=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class i extends r.Component{render(){return r.createElement(l.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:a},this.props.children)}}t.Z=i},88678:function(e,t,n){var r=n(67294);class l extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{className:e},r.createElement("div",{className:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{className:"highlight-content"},this.props.children))}}t.Z=l},31217:function(e,t,n){var r=n(67294);class l extends r.Component{render(){return r.createElement("code",null,this.props.children)}}t.Z=l},37793:function(e,t,n){var r=n(67294),l=n(88678);const a=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class i extends r.Component{render(){return r.createElement(l.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:a},this.props.children)}}t.Z=i},14865:function(e,t,n){n.r(t),n.d(t,{assets:function(){return w},contentTitle:function(){return f},default:function(){return I},frontMatter:function(){return v},metadata:function(){return b},toc:function(){return C}});var r=n(3905),l=n(44035),a=n(29415),i=n(37793),o=n(31217),c=n(39130),p=n(22425),m=Object.defineProperty,s=Object.defineProperties,d=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,k=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,g=(e,t,n)=>t in e?m(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,N=(e,t)=>{for(var n in t||(t={}))k.call(t,n)&&g(e,n,t[n]);if(u)for(var n of u(t))h.call(t,n)&&g(e,n,t[n]);return e};const v={id:"scroll-wheel",title:"\u6eda\u8f6e"},f=void 0,b={unversionedId:"development/ui-development/ui-components/containers/scroll-wheel",id:"development/ui-development/ui-components/containers/scroll-wheel",title:"\u6eda\u8f6e",description:"",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/ui-development/ui-components/containers/scroll-wheel.mdx",sourceDirName:"development/ui-development/ui-components/containers",slug:"/development/ui-development/ui-components/containers/scroll-wheel",permalink:"/4.20/zh-CN/docs/development/ui-development/ui-components/containers/scroll-wheel",draft:!1,tags:[],version:"current",frontMatter:{id:"scroll-wheel",title:"\u6eda\u8f6e"},sidebar:"docs",previous:{title:"\u6eda\u52a8\u5217\u8868",permalink:"/4.20/zh-CN/docs/development/ui-development/ui-components/containers/scroll-list"},next:{title:"\u6ed1\u52a8\u83dc\u5355",permalink:"/4.20/zh-CN/docs/development/ui-development/ui-components/containers/slide-menu"}},w={},C=[{value:"\u63a7\u4ef6\u7ec4",id:"widget-group",level:2},{value:"\u5c5e\u6027",id:"properties",level:2},{value:"\u9879\u76ee\u6a21\u677f",id:"item-templates",level:3},{value:"\u4ea4\u4e92",id:"interactions",level:2},{value:"\u64cd\u4f5c",id:"actions",level:3},{value:"\u89e6\u53d1\u6761\u4ef6",id:"triggers",level:3},{value:"\u6027\u80fd",id:"performance",level:2},{value:"\u793a\u4f8b",id:"examples",level:2},{value:"\u751f\u6210\u4ee3\u7801",id:"generated-code",level:3},{value:"\u7528\u6237\u4ee3\u7801",id:"user-code",level:3},{value:"TouchGFX Designer\u793a\u4f8b",id:"touchgfx-designer-examples",level:3},{value:"API\u53c2\u8003",id:"api-reference",level:2}],x={toc:C};function I(e){var t,n=e,{components:m}=n,g=((e,t)=>{var n={};for(var r in e)k.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&u)for(var r of u(e))t.indexOf(r)<0&&h.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=N(N({},x),g),s(t,d({components:m,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"\u6eda\u8f6e\u662f\u5305\u542b\u591a\u4e2a\u9879\u76ee\u7684\u53ef\u6eda\u52a8\u83dc\u5355\uff0c\u6eda\u52a8\u6d4f\u89c8\u83dc\u5355\u4e2d\u7684\u9879\u76ee\u65f6\uff0c\u8fd9\u4e9b\u9879\u76ee\u4f1a\u52a8\u6001\u66f4\u65b0\uff0c\u4e14\u88ab\u9009\u4e2d\u7684\u9879\u76ee\u5c06\u7a81\u51fa\u663e\u793a\u3002 \u542f\u7528\u54cd\u5e94\u4e0e\u6eda\u8f6e\u4ea4\u4e92\u7684\u4ee3\u7801\u540e\uff0c\u53ef\u57fa\u4e8e\u4e0e\u8f6e\u4e2d\u9879\u76ee\u7684\u4ea4\u4e92\u8c03\u7528\u4e0d\u540c\u7684\u56de\u8c03\u51fd\u6570\u3002"),(0,r.kt)(l.Z,{imageSource:"/img/development/ui-development/ui-components/scroll-wheel/widget-appearance.gif",mdxType:"Figure"},"\u5728\u6a21\u62df\u5668\u4e2d\u8fd0\u884c\u7684\u6eda\u8f6e"),(0,r.kt)("h2",N({},{id:"widget-group"}),"\u63a7\u4ef6\u7ec4"),(0,r.kt)("p",null,"\u6eda\u8f6e\u4f4d\u4e8eTouchGFX Designer\u4e2d\u7684\u5bb9\u5668\u63a7\u4ef6\u7ec4\u4e2d\u3002"),(0,r.kt)(l.Z,{imageSource:"/img/development/ui-development/ui-components/scroll-wheel/widget-group-v4.17.png",mdxType:"Figure"},"TouchGFX Designer\u4e2d\u7684\u6eda\u8f6e"),(0,r.kt)("h2",N({},{id:"properties"}),"\u5c5e\u6027"),(0,r.kt)("p",null,"TouchGFX Designer\u4e2d\u6eda\u8f6e\u7684\u5c5e\u6027\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",N({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u5c5e\u6027\u7ec4")),(0,r.kt)("th",N({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u5c5e\u6027\u8bf4\u660e")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",N({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"\u540d\u79f0")),(0,r.kt)("td",N({parentName:"tr"},{align:null}),"\u63a7\u4ef6\u7684",(0,r.kt)("em",{parentName:"td"},"\u540d\u79f0"),"\u3002 ",(0,r.kt)("em",{parentName:"td"},"\u540d\u79f0\u662fTouchGFX Designer\u548c\u4ee3\u7801\u4e2d\u4f7f\u7528\u7684\u552f\u4e00\u6807\u8bc6\u7b26"),"\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",N({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"\u7c7b\u578b")),(0,r.kt)("td",N({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"\u7c7b\u578b"),"\u6307\u5b9a\u6eda\u8f6e\u65b9\u5411\u4e3a\u5782\u76f4\u65b9\u5411\u6216\u6c34\u5e73\u65b9\u5411\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",N({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"\u4f4d\u7f6e")),(0,r.kt)("td",N({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"X")," \u548c",(0,r.kt)("em",{parentName:"td"},"Y")," \u6307\u5b9a\u63a7\u4ef6\u5de6\u4e0a\u89d2\u76f8\u5bf9\u4e8e\u5176\u7236\u7684\u4f4d\u7f6e\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"W")," \u548c ",(0,r.kt)("em",{parentName:"td"},"H")," \u6307\u5b9a\u63a7\u4ef6\u7684\u5bbd\u5ea6\u548c\u9ad8\u5ea6\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"\u9501\u5b9a"),"\u6307\u5b9a\u63a7\u4ef6\u662f\u5426\u5e94\u9501\u5b9a\u4e3a\u5176\u5f53\u524d\u7684X\u3001Y\u3001W\u548cH\u3002",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"\u5982\u679c\u9501\u5b9a\u63a7\u4ef6\uff0c\u8fd8\u4f1a\u7981\u6b62\u901a\u8fc7\u5c4f\u5e55\u4e0e\u63a7\u4ef6\u8fdb\u884c\u4ea4\u4e92\u3002"),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"\u53ef\u89c1")," \u6307\u5b9a\u63a7\u4ef6\u7684\u53ef\u89c1\u6027\u3002",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"\u5982\u679c\u5c06\u63a7\u4ef6\u6807\u8bb0\u4e3a\u4e0d\u53ef\u89c1\uff0c\u8fd8\u4f1a\u7981\u6b62\u901a\u8fc7\u5c4f\u5e55\u4e0e\u63a7\u4ef6\u8fdb\u884c\u4ea4\u4e92\u3002"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",N({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"\u9879\u76ee\u6a21\u677f")),(0,r.kt)("td",N({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"\u9879\u76ee\u6a21\u677f")," \u6307\u5b9a\u7528\u4f5c\u6a21\u677f\u7684CustomContainer\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"\u9009\u9879\u6570")," \u6307\u5b9a\u6eda\u52a8\u5217\u8868\u4e2d\u5b58\u5728\u7684\u9879\u76ee\u6570\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"\u9996\u9009\u9879\u76ee")," \u6307\u5b9a\u9996\u5148\u9009\u62e9\u54ea\u4e2a\u9879\u76ee\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"\u4f7f\u7528\u5df2\u9009\u6837\u5f0f\u6a21\u677f")," \u6307\u5b9a\u662f\u5426\u4e3a\u6240\u9009\u9879\u76ee\u4f7f\u7528\u5355\u72ec\u7684\u6a21\u677f\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"\u5df2\u9009\u6837\u5f0f\u6a21\u677f")," \u6307\u5b9a\u7528\u4f5c\u9009\u5b9a\u6a21\u677f\u7684CustomContainer\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",N({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"\u5217\u8868\u5916\u89c2")),(0,r.kt)("td",N({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"\u5faa\u73af")," \u6307\u5b9a\u5230\u8fbe\u5217\u8868\u672b\u5c3e\u540e\uff0c\u6eda\u8f6e\u4e2d\u7684\u9879\u76ee\u662f\u5426\u5c06\u5faa\u73af\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"\u9009\u4e2d\u9879\u504f\u79fb\u91cf")," \u6307\u5b9a\u9009\u5b9a\u9879\u76ee\u7684\u4f4d\u7f6e\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"\u9879\u76ee\u8fb9\u8ddd")," \u6307\u5b9a\u9879\u76ee\u4e4b\u95f4\u7684\u95f4\u8ddd\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"\u524d\u65b9\u989d\u5916\u5c3a\u5bf8"),"\u548c",(0,r.kt)("em",{parentName:"td"},"\u540e\u65b9\u989d\u5916\u5c3a\u5bf8")," \u6307\u5b9a\u663e\u793a",(0,r.kt)("em",{parentName:"td"},"\u5df2\u9009\u6837\u5f0f\u6a21\u677f"),"\u7684\u533a\u57df\u7684\u5927\u5c0f\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"\u524d\u8fb9\u8ddd"),"\u548c",(0,r.kt)("em",{parentName:"td"},"\u540e\u8fb9\u8ddd"),"\u6307\u5b9a\u663e\u793a",(0,r.kt)("em",{parentName:"td"},"\u5df2\u9009\u6837\u5f0f\u6a21\u677f"),"\u7684\u533a\u57df\u524d\u540e\u7684\u8fb9\u8ddd\u5927\u5c0f\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",N({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"\u52a8\u753b")),(0,r.kt)("td",N({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"\u7f13\u52a8"),"\u548c",(0,r.kt)("em",{parentName:"td"},"\u7f13\u52a8\u9009\u9879"),"\u6307\u5b9a\u52a8\u753b\u4f7f\u7528\u7684\u7f13\u52a8\u65b9\u7a0b\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Swipe Acc.")," \u548c ",(0,r.kt)("em",{parentName:"td"},"Drag Acc.")," \u6307\u5b9a\u6eda\u52a8\u65f6\u7684\u52a0\u901f\u5ea6\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",N({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Mixin")),(0,r.kt)("td",N({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"\u53ef\u62d6\u52a8")," \u6307\u5b9a\u5728\u8fd0\u884c\u65f6\u63a7\u4ef6\u662f\u5426\u53ef\u62d6\u52a8\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"ClickListener")," \u6307\u5b9a\u63a7\u4ef6\u88ab\u70b9\u51fb\u65f6\u662f\u5426\u4f1a\u8c03\u7528\u56de\u8c03\u51fd\u6570\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"MoveAnimator")," \u6307\u5b9a\u63a7\u4ef6\u662f\u5426\u53ef\u7ed8\u5236 ",(0,r.kt)("em",{parentName:"td"},"X")," \u548c ",(0,r.kt)("em",{parentName:"td"},"Y")," \u503c\u53d8\u5316\u7684\u52a8\u753b\u3002")))),(0,r.kt)("h3",N({},{id:"item-templates"}),"\u9879\u76ee\u6a21\u677f"),(0,r.kt)("p",null,"\u6eda\u52a8\u5217\u8868\u4e2d\u7684\u9879\u76ee\u57fa\u4e8e\u540d\u4e3a",(0,r.kt)("em",{parentName:"p"},"\u201c\u9879\u76ee\u6a21\u677f\u201d"),"\u7684\u6982\u5ff5\uff0c\u9879\u76ee\u6a21\u677f\u5c5e\u4e8e",(0,r.kt)("a",N({parentName:"p"},{href:"../../touchgfx-engine-features/custom-containers"}),"CustomContainer"),"\uff0c\u7528\u4f5c\u6eda\u8f6e\u4e2d\u5404\u9879\u76ee\u56fe\u5f62\u5143\u7d20\u7684\u57fa\u7840\u3002 \u4e3a\u4e86\u7a81\u51fa\u663e\u793a\u6240\u9009\u9879\u76ee\uff0c\u6eda\u8f6e\u5305\u542b\u7528\u4e8e\u9009\u62e9\u540d\u4e3a\u201c",(0,r.kt)("em",{parentName:"p"},"\u5df2\u9009\u6837\u5f0f\u6a21\u677f"),"\u201d\u7684\u9879\u76ee\u6a21\u677f\u7684\u9009\u9879\uff0c\u5df2\u9009\u6837\u5f0f\u6a21\u677f\u4ec5\u53ef\u7528\u4e8e\u5df2\u9009\u9879\u76ee\u3002 \u521b\u5efa\u6eda\u8f6e\u4e4b\u524d\uff0c\u5e94\u4e3a\u9879\u76ee\u6a21\u677f\u4ee5\u53ca",(0,r.kt)("em",{parentName:"p"},"\u5df2\u9009\u9879\u76ee\u6a21\u677f"),"\uff08\u82e5\u542f\u7528\uff09\u521b\u5efaCustomContainer\u3002"),(0,r.kt)("p",null,"\u521b\u5efa\u6eda\u8f6e\u540e\uff0c\u53ef\u5728",(0,r.kt)("em",{parentName:"p"},"\u9879\u76ee\u6a21\u677f"),"\u5c5e\u6027\u4e0b\u9009\u62e9CustomContainer\u3002 \u4e3a",(0,r.kt)("em",{parentName:"p"},"\u9879\u76ee\u6a21\u677f"),"\u9009\u62e9\u81ea\u5b9a\u4e49\u5bb9\u5668\u65f6\uff0c\u4f1a\u8c03\u6574\u6eda\u8f6e\u5927\u5c0f\uff0c\u4ee5\u9002\u5e94\u6240\u9009\u81ea\u5b9a\u4e49\u5bb9\u5668\u4e0d\u5728\u53ef\u6eda\u52a8\u65b9\u5411\u4e0a\u7684\u7684\u5c3a\u5bf8\u5c5e\u6027\uff08",(0,r.kt)("em",{parentName:"p"},"\u5782\u76f4\u65b9\u5411\u7684\u5bbd\u5ea6\u3001\u6c34\u5e73\u65b9\u5411\u7684\u9ad8\u5ea6"),"\uff09\u3002 \u66f4\u6539\u5176\u4ed6\u5c3a\u5bf8\u5c5e\u6027\uff08",(0,r.kt)("em",{parentName:"p"},"\u5782\u76f4\u65b9\u5411\u7684\u9ad8\u5ea6\u3001\u6c34\u5e73\u65b9\u5411\u7684\u5bbd\u5ea6"),"\uff09\u51b3\u5b9a\u4e86\u53ef\u89c1\u7684\u9879\u76ee\u6570\u3002"),(0,r.kt)("h2",N({},{id:"interactions"}),"\u4ea4\u4e92"),(0,r.kt)("p",null,"\u4e0b\u9762\u7684\u90e8\u5206\u4ecb\u7ecd\u4e86\u6eda\u8f6e\u652f\u6301\u7684\u64cd\u4f5c\u548c\u89e6\u53d1\u6761\u4ef6\u3002"),(0,r.kt)("h3",N({},{id:"actions"}),"\u64cd\u4f5c"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",N({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u6807\u51c6\u63a7\u4ef6\u64cd\u4f5c")),(0,r.kt)("th",N({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u8bf4\u660e")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",N({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"\u9690\u85cf\u63a7\u4ef6")),(0,r.kt)("td",N({parentName:"tr"},{align:null}),"\u9690\u85cf\u63a7\u4ef6\uff08\u5c06\u53ef\u89c1\u6027\u8bbe\u7f6e\u4e3afalse\uff09\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",N({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"\u663e\u793a\u63a7\u4ef6")),(0,r.kt)("td",N({parentName:"tr"},{align:null}),"\u4f7f\u9690\u85cf\u7684\u63a7\u4ef6\u53ef\u89c1\uff08\u5c06\u53ef\u89c1\u6027\u8bbe\u7f6e\u4e3atrue\uff09\u3002")))),(0,r.kt)("h3",N({},{id:"triggers"}),"\u89e6\u53d1\u6761\u4ef6"),(0,r.kt)("p",null,"\u6eda\u8f6e\u4e0d\u4f1a\u4ea7\u751f\u4efb\u4f55\u89e6\u53d1\u6761\u4ef6\u3002"),(0,r.kt)("h2",N({},{id:"performance"}),"\u6027\u80fd"),(0,r.kt)("p",null,"\u6eda\u8f6e\u4e3a",(0,r.kt)("a",N({parentName:"p"},{href:"container"}),"Container"),"\u7c7b\u578b\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u4e0d\u4f1a\u51fa\u73b0\u5728\u7ed8\u56fe\u94fe\u4e2d\u3002 \u56e0\u6b64\uff0c\u6027\u80fd\u5b8c\u5168\u53d6\u51b3\u4e8e\u63a7\u4ef6\u7684\u7ed8\u56fe\u6027\u80fd\u3002"),(0,r.kt)("p",null,"\u66f4\u591a\u5173\u4e8e\u7ed8\u56fe\u6027\u80fd\u7684\u4fe1\u606f\uff0c\u8bf7\u9605\u8bfb",(0,r.kt)("a",N({parentName:"p"},{href:"../general-ui-component-performance"}),"\u5e38\u89c4UI\u7ec4\u4ef6\u6027\u80fd"),"\u90e8\u5206\u3002"),(0,r.kt)("h2",N({},{id:"examples"}),"\u793a\u4f8b"),(0,r.kt)("h3",N({},{id:"generated-code"}),"\u751f\u6210\u4ee3\u7801"),(0,r.kt)("p",null,"\u5728\u751f\u6210\u7684\u89c6\u56fe\u57fa\u7c7b\u7684\u4ee3\u7801\u4e2d\uff0c\u53ef\u4ee5\u67e5\u770bTouchGFX Designer\u662f\u5982\u4f55\u521b\u5efa\u6eda\u8f6e\u7684\u3002"),(0,r.kt)(p.Z,{mdxType:"CodeHeader"},"Screen1ViewBase.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",N({parentName:"pre"},{className:"language-cpp"}),'#include <gui_generated/screen1_screen/Screen1ViewBase.hpp>\n#include "BitmapDatabase.hpp"\n\nScreen1ViewBase::Screen1ViewBase() :\n    updateItemCallback(this, &Screen1ViewBase::updateItemCallbackHandler)\n{\n    scrollWheel.setPosition(140, 10, 200, 252);\n    scrollWheel.setHorizontal(false);\n    scrollWheel.setCircular(false);\n    scrollWheel.setEasingEquation(touchgfx::EasingEquations::backEaseIn);\n    scrollWheel.setSwipeAcceleration(10);\n    scrollWheel.setDragAcceleration(10);\n    scrollWheel.setNumberOfItems(60);\n    scrollWheel.setSelectedItemOffset(100);\n    scrollWheel.setSelectedItemExtraSize(0, 0);\n    scrollWheel.setSelectedItemMargin(0, 0);\n    scrollWheel.setDrawableSize(50, 3);\n    scrollWheel.setDrawables(scrollWheelListItems, updateItemCallback,\n                              scrollWheelSelectedListItems, updateItemCallback);\n    scrollWheel.animateToItem(0, 0);\n\n    add(scrollWheel);\n}\n\nvoid Screen1ViewBase::setupScreen()\n{\n    scrollWheel.initialize();\n    for (int i = 0; i < scrollWheelListItems.getNumberOfDrawables(); i++)\n    {\n        scrollWheelListItems[i].initialize();\n    }\n    for (int i = 0; i < scrollWheelSelectedListItems.getNumberOfDrawables(); i++)\n    {\n        scrollWheelSelectedListItems[i].initialize();\n    }\n}\n\nvoid Screen1ViewBase::updateItemCallbackHandler(touchgfx::DrawableListItemsInterface* items, int16_t containerIndex, int16_t itemIndex)\n{\n    if (items == &scrollWheelListItems)\n    {\n        touchgfx::Drawable* d = items->getDrawable(containerIndex);\n        TextContainer* cc = (TextContainer*)d;\n        scrollWheelUpdateItem(*cc, itemIndex);\n    }\n    else if (items == &scrollWheelSelectedListItems)\n    {\n        touchgfx::Drawable* d = items->getDrawable(containerIndex);\n        TextCenterContainer* cc = (TextCenterContainer*)d;\n        scrollWheelUpdateCenterItem(*cc, itemIndex);\n    }\n}\n')),(0,r.kt)(i.Z,{mdxType:"Tip"},"\u60a8\u53ef\u4ee5\u5728\u7528\u6237\u4ee3\u7801\u4e2d\u4f7f\u7528ScrollWheel\u7c7b\u4e2d\u7684\u8fd9\u4e9b\u51fd\u6570\u548c\u5176\u4ed6\u53ef\u7528\u51fd\u6570\u3002 \u5982\u679c\u66f4\u6539\u63a7\u4ef6\u7684\u5916\u89c2\uff0c ",(0,r.kt)(o.Z,{mdxType:"InlineCode"},"\u8bf7\u5fc5\u987b\u8c03\u7528scrollWheel.invalidate")," ()\u5f3a\u5236\u8fdb\u884c\u91cd\u65b0\u7ed8\u5236\u3002"),(0,r.kt)("h3",N({},{id:"user-code"}),"\u7528\u6237\u4ee3\u7801"),(0,r.kt)("p",null,"\u8bbe\u7f6e\u5b8c\u6eda\u8f6e\u7684\u56fe\u5f62\u5143\u7d20\u53ca\u5176\u5c5e\u6027\u540e\uff0c\u53ef\u7f16\u5199\u7528\u6237\u4ee3\u7801\u66f4\u65b0\u6eda\u8f6e\u4e2d\u7684\u9879\u76ee\u3002 \u4e0b\u6587\u7ed9\u51fa\u4e86\u7531TouchGFX Designer\u751f\u6210\u7684Screen1ViewBase\u7c7b\u7684\u5934\u6587\u4ef6\uff1a"),(0,r.kt)(p.Z,{mdxType:"CodeHeader"},"Screen1ViewBase.hpp"),(0,r.kt)("pre",null,(0,r.kt)("code",N({parentName:"pre"},{className:"language-cpp",metastring:"{8-11,13-16}","{8-11,13-16}":!0}),"class Screen1ViewBase : public touchgfx::View\n{\npublic:\n    Screen1ViewBase();\n    virtual ~Screen1ViewBase() {}\n    virtual void setupScreen();\n\n    virtual void scrollWheel1UpdateItem(CustomContainer1& item, int16_t itemIndex)\n    {\n        // Override and implement this function in Screen1\n    }\n\n    virtual void scrollWheel1UpdateCenterItem(CustomContainer2& item, int16_t itemIndex)\n    {\n        // Override and implement this function in Screen1\n    }\n\nprotected:\n    FrontendApplication& application() {\n        return *static_cast<FrontendApplication*>(Application::getInstance());\n    }\n\n    touchgfx::BoxWithBorder boxWithBorder1;\n    touchgfx::ScrollWheelWithSelectionStyle scrollWheel1;\n    touchgfx::DrawableListItems<CustomContainer1, 6> scrollWheel1ListItems;\n    touchgfx::DrawableListItems<CustomContainer2, 2> scrollWheel1SelectedListItems;\n\nprivate:\n    void updateItemCallbackHandler(DrawableListItemsInterface* items, int16_t containerIndex, int16_t itemIndex);\n    touchgfx::Callback<Screen1ViewBase, DrawableListItemsInterface*, int16_t, int16_t> updateItemCallback;\n\n};\n")),(0,r.kt)("p",null,"TouchGFX Designer\u751f\u6210\u6eda\u8f6e\u4ee3\u7801\u65f6\uff0c\u4f1a\u521b\u5efa\u4e0a\u6587\u4e2d\u7a81\u51fa\u663e\u793a\u7684\u51fd\u6570 ",(0,r.kt)("inlineCode",{parentName:"p"},"scrollWheel1UpdateItem")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"scrollWheel1UpdateCenterItem"),"\uff0c\u7528\u6237\u53ef\u4f7f\u7528\u8fd9\u4e9b\u51fd\u6570\u8986\u76d6\u548c\u66f4\u65b0\u6eda\u8f6e\u4e2d\u7684\u9879\u76ee\u3002"),(0,r.kt)("p",null,"\u59cb\u7ec8\u4f1a\u4e3a\u6eda\u8f6e\u751f\u6210 ",(0,r.kt)("inlineCode",{parentName:"p"},"UpdateItem")," \u51fd\u6570\uff0c\u5e76\u53ef\u5b9e\u73b0\u8be5\u51fd\u6570\u4ee5\u66f4\u65b0\u5305\u542b\u7684\u9879\u76ee\uff0c ",(0,r.kt)("inlineCode",{parentName:"p"},"UpdateCenterItem "),"\u51fd\u6570\u4f1a\u57fa\u4e8e",(0,r.kt)("em",{parentName:"p"},"\u5df2\u9009\u6837\u5f0f\u6a21\u677f"),"\u66f4\u65b0\u9879\u76ee\uff0c\u56e0\u6b64\uff0c\u4ec5\u5f53\u9009\u62e9\u4f7f\u7528",(0,r.kt)("em",{parentName:"p"},"\u5df2\u9009\u6837\u5f0f\u6a21\u677f"),"\u65f6\uff0c\u624d\u4f1a\u751f\u6210\u6b64\u51fd\u6570\u3002 \u9664\u4e86\u66f4\u65b0\u4e0d\u540c\u9879\u76ee\u4e4b\u5916\uff0c\u8fd9\u4e24\u4e2a\u51fd\u6570\u8fd8\u5305\u542b\u76f8\u540c\u7684\u53c2\u6570\uff0c\u7528\u4e8e\u66f4\u65b0\u6eda\u8f6e\u4e2d\u7684\u9879\u76ee\u3002"),(0,r.kt)("p",null,"\u53c2\u6570 ",(0,r.kt)("inlineCode",{parentName:"p"},"itemIndex")," \u5305\u542b\u9879\u76ee\u7684\u7d22\u5f15\u503c\uff0c\u8be5\u503c\u7528\u4e8e\u6807\u8bc6\u6b63\u5728\u66f4\u65b0\u7684\u9879\u76ee\u3002 \u53c2\u6570 ",(0,r.kt)("inlineCode",{parentName:"p"},"item")," \u662f\u5bf9\u6eda\u8f6e\u4e2d\u7684\u53ef\u89c1\u9879\u76ee\u7684\u5f15\u7528\u3002 \u66f4\u65b0\u53c2\u6570 ",(0,r.kt)("inlineCode",{parentName:"p"},"item")," \u7684\u5916\u89c2\u4f1a\u66f4\u65b0\u4e3a\u6eda\u8f6e\u4e2d\u53ef\u89c1\u9879\u76ee\u7684\u6e32\u67d3\u3002"),(0,r.kt)("p",null,"\u4e0b\u6587\u7ed9\u51fa\u4e86\u5728\u7528\u6237\u4ee3\u7801\u6587\u4ef6 ",(0,r.kt)("inlineCode",{parentName:"p"},"Screen1View.hpp")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"Screen1View.cpp")," \u4e2d\u5b9e\u73b0 ",(0,r.kt)("inlineCode",{parentName:"p"},"scrollWheel1UpdateItem")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"scrollWheel1UpdateCenterItem")," \u7684\u793a\u4f8b\uff1a"),(0,r.kt)(p.Z,{mdxType:"CodeHeader"},"Screen1View.hpp"),(0,r.kt)("pre",null,(0,r.kt)("code",N({parentName:"pre"},{className:"language-cpp"}),"#ifndef SCREEN1_VIEW_HPP\n#define SCREEN1_VIEW_HPP\n\n#include <gui_generated/screen1_screen/Screen1ViewBase.hpp>\n#include <gui/screen1_screen/Screen1Presenter.hpp>\n\nclass Screen1View : public Screen1ViewBase\n{\npublic:\n    Screen1View();\n    virtual~Screen1View() {}\n    virtual void setupScreen();\n    virtual void tearDownScreen();\n\n    virtual void scrollWheel1UpdateItem(CustomContainer1& item, int16_t itemIndex);\n    virtual void scrollWheel1UpdateCenterItem(CustomContainer2& item, int16_t itemIndex);\nprotected:\n};\n\n#endif // SCREEN1_VIEW_HPP\n")),(0,r.kt)(p.Z,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",N({parentName:"pre"},{className:"language-cpp"}),"#include <gui/screen1_screen/Screen1View.hpp>\n\nScreen1View::Screen1View()\n{\n\n}\n\nvoid Screen1View::setupScreen()\n{\n    Screen1ViewBase::setupScreen();\n}\n\nvoid Screen1View::tearDownScreen()\n{\n    Screen1ViewBase::tearDownScreen();\n}\n\nvoid Screen1View::scrollWheel1UpdateItem(CustomContainer1& item, int16_t itemIndex)\n{\n    item.setIndex(itemIndex);\n}\n\nvoid Screen1View::scrollWheel1UpdateCenterItem(CustomContainer2& item, int16_t itemIndex)\n{\n    item.setIndex(itemIndex);\n}\n")),(0,r.kt)("p",null,"\u5728\u5934\u6587\u4ef6",(0,r.kt)("inlineCode",{parentName:"p"},"Screen1View.hpp"),"\u4e2d\uff0c\u4f1a\u8986\u76d6",(0,r.kt)("inlineCode",{parentName:"p"},"scrollWheel1UpdateItem")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"scrollWheel1UpdateCenterItem"),"\u51fd\u6570\uff0c\u7136\u540e\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"Screen1View.cpp"),"\u4e2d\u5b9e\u73b0\u8be5\u51fd\u6570\u3002"),(0,r.kt)("p",null,"\u672c\u793a\u4f8b\u7684\u76ee\u6807\u662f\u66f4\u65b0\u5177\u6709\u53ef\u89c1\u9879\u76ee\u7d22\u5f15\u503c\u7684\u9879\u76ee\u6a21\u677f\u4e2d\u7684\u6587\u672c\uff0c\u4e0e",(0,r.kt)("a",N({parentName:"p"},{href:"scroll-wheel"}),"\u672c\u90e8\u5206\u5f00\u5934"),"\u7ed9\u51fa\u7684\u793a\u4f8b\u76f8\u4f3c\u3002 \u7531\u4e8e\u9879\u76ee\u6a21\u677f\u548c\u6240\u9009\u6837\u5f0f\u6a21\u677f\u5747\u57fa\u4e8eCustomContainer\uff0c\u56e0\u6b64\u4f1a\u4e3a\u8fd9\u4e24\u4e2aCustomContainer\u521b\u5efa ",(0,r.kt)("inlineCode",{parentName:"p"},"setIndex")," \u51fd\u6570\u3002 ",(0,r.kt)("inlineCode",{parentName:"p"},"setIndex")," \u51fd\u6570\u80fd\u591f\u83b7\u53d6 ",(0,r.kt)("inlineCode",{parentName:"p"},"itemIndex")," \u53c2\u6570\u5e76\u66f4\u65b0\u9879\u76ee\u6a21\u677f\u548c\u6240\u9009\u6837\u5f0f\u6a21\u677f\u4e2d\u7684\u6587\u672c\u3002 \u4e3a\u9879\u76ee\u8c03\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"setIndex")," \u4f1a\u66f4\u65b0\u53ef\u89c1\u9879\u76ee\u7684\u5916\u89c2\uff0c\u4ece\u800c\u4f1a\u663e\u793a\u5176\u7d22\u5f15\u503c\u3002"),(0,r.kt)("h3",N({},{id:"touchgfx-designer-examples"}),"TouchGFX Designer\u793a\u4f8b"),(0,r.kt)("p",null,"\u5982\u9700\u8fdb\u4e00\u6b65\u4e86\u89e3\u6eda\u8f6e\uff0c\u8bf7\u5c1d\u8bd5\u5728TouchGFX Designer\u4e2d\u4f7f\u7528\u4e0b\u5217UI\u6a21\u677f\u4e4b\u4e00\u521b\u5efa\u65b0\u5e94\u7528\uff1a"),(0,r.kt)(l.Z,{imageSource:"/img/development/ui-development/ui-templates/scroll-wheel-and-list-example-v4.17.png",mdxType:"Figure"},"TouchGFX Designer\u4e2d\u7684\u6eda\u8f6e\u548c\u5217\u8868\u793a\u4f8bUI\u6a21\u677f"),(0,r.kt)("h2",N({},{id:"api-reference"}),"API\u53c2\u8003"),(0,r.kt)(a.Z,{mdxType:"FurtherReading"},(0,r.kt)("li",null,(0,r.kt)(c.Z,{to:"../../../../api/classes/classtouchgfx_1_1_scroll_wheel",mdxType:"Link"},"ScrollWheel\u7c7b\u7684API\u53c2\u8003"))))}I.isMDXComponent=!0}}]);