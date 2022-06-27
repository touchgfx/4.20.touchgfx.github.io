"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[5522],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var o=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=o.createContext({}),u=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=u(e.components);return o.createElement(c.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(t),d=i,h=m["".concat(c,".").concat(d)]||m[d]||s[d]||r;return t?o.createElement(h,a(a({ref:n},p),{},{components:t})):o.createElement(h,a({ref:n},p))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,a=new Array(r);a[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var u=2;u<r;u++)a[u]=t[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},22425:function(e,n,t){var o=t(67294);class i extends o.Component{render(){return o.createElement("div",{className:"code-header"},o.createElement("div",null,o.createElement("h5",null,this.props.children)))}}n.Z=i},44035:function(e,n,t){var o=t(67294),i=t(25026);n.Z=function(e){const n=e.noShadow||!1,t=e.width,r=e.height,a=(0,i.Z)(e.imageSource);return n?o.createElement("div",{className:"figure noshadow"},o.createElement("a",{href:a,target:"_blank"},o.createElement("img",{width:t,height:r,src:a})),o.createElement("p",null,e.children)):o.createElement("div",{className:"figure"},o.createElement("a",{href:a,target:"_blank"},o.createElement("img",{width:t,height:r,src:a})),o.createElement("p",null,e.children))}},29415:function(e,n,t){var o=t(67294),i=t(88678);const r=o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},o.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class a extends o.Component{render(){return o.createElement(i.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:r},this.props.children)}}n.Z=a},88678:function(e,n,t){var o=t(67294);class i extends o.Component{render(){const e=`highlight highlight-${this.props.type}`;return o.createElement("div",{className:e},o.createElement("div",{className:"highlight-heading"},o.createElement("h5",null,o.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),o.createElement("div",{className:"highlight-content"},this.props.children))}}n.Z=i},45135:function(e,n,t){var o=t(67294);class i extends o.Component{render(){var e=`https://www.youtube.com/embed/${function(e){const n=/https:\/\/www\.youtube\.com\/watch\?v=(\w+)/;if(n.test(e))return n.exec(e)[1];const t=/https:\/\/youtu\.be\/(\w+)/;if(t.test(e))return t.exec(e)[1];return e}(this.props.url)}`;return o.createElement("div",{className:"videoWrapper"},o.createElement("iframe",{src:e,frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))}}n.Z=i},95613:function(e,n,t){t.r(n),t.d(n,{assets:function(){return k},contentTitle:function(){return y},default:function(){return M},frontMatter:function(){return C},metadata:function(){return v},toc:function(){return x}});var o=t(3905),i=t(45135),r=t(22425),a=t(29415),l=t(44035),c=t(39130),u=Object.defineProperty,p=Object.defineProperties,s=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,g=(e,n,t)=>n in e?u(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,f=(e,n)=>{for(var t in n||(n={}))d.call(n,t)&&g(e,t,n[t]);if(m)for(var t of m(n))h.call(n,t)&&g(e,t,n[t]);return e};const C={id:"custom-containers",title:"\u30ab\u30b9\u30bf\u30e0\uff65\u30b3\u30f3\u30c6\u30ca"},y=void 0,v={unversionedId:"development/ui-development/touchgfx-engine-features/custom-containers",id:"development/ui-development/touchgfx-engine-features/custom-containers",title:"\u30ab\u30b9\u30bf\u30e0\uff65\u30b3\u30f3\u30c6\u30ca",description:"",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/development/ui-development/touchgfx-engine-features/custom-containers.mdx",sourceDirName:"development/ui-development/touchgfx-engine-features",slug:"/development/ui-development/touchgfx-engine-features/custom-containers",permalink:"/4.20/ja/docs/development/ui-development/touchgfx-engine-features/custom-containers",tags:[],version:"current",frontMatter:{id:"custom-containers",title:"\u30ab\u30b9\u30bf\u30e0\uff65\u30b3\u30f3\u30c6\u30ca"},sidebar:"docs",previous:{title:"Position and size",permalink:"/4.20/ja/docs/development/ui-development/touchgfx-engine-features/position-size"},next:{title:"\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\u306e\u30ad\u30e3\u30c3\u30b7\u30e5",permalink:"/4.20/ja/docs/development/ui-development/touchgfx-engine-features/caching-bitmaps"}},k={},x=[{value:"TouchGFX Designer\u3067\u306e\u64cd\u4f5c",id:"in-touchgfx-designer",level:2},{value:"\u8907\u5408\u7684\u306a\u30ab\u30b9\u30bf\u30e0\uff65\u30b3\u30f3\u30c6\u30ca",id:"composite-custom-containers",level:3},{value:"\u30ab\u30b9\u30bf\u30e0\uff65\u30c8\u30ea\u30ac\u3068\u30ab\u30b9\u30bf\u30e0\uff65\u30a2\u30af\u30b7\u30e7\u30f3",id:"custom-triggers-and-actions",level:3},{value:"\u30b3\u30fc\u30c9\u3067\u306e\u64cd\u4f5c",id:"in-code",level:2},{value:"touchgfx::Container\u30af\u30e9\u30b9\u3092\u62e1\u5f35\u3059\u308b\u30af\u30e9\u30b9\u3092\u4f5c\u6210",id:"create-a-class-that-extends-the-touchgfxcontainer-class",level:3},{value:"\u30b3\u30f3\u30c6\u30ca\u306e\u3059\u3079\u3066\u306e\u5b50\u3092\u30e1\u30f3\u30d0\u30fc\u5909\u6570\u3068\u3057\u3066\u5ba3\u8a00",id:"declaring-all-children-of-the-container-as-member-variables",level:3},{value:"\u30b3\u30f3\u30c6\u30ca\u306e\u5e45\u3068\u9ad8\u3055\u3092\u8a2d\u5b9a",id:"setting-the-width-and-height-of-the-container",level:3},{value:"\u5b50\u3092\u305d\u308c\u305e\u308c\u8a2d\u5b9a",id:"setting-up-each-of-the-children",level:3},{value:"\u5b50\u3092\u305d\u308c\u305e\u308c\u9069\u5207\u306a\u9806\u5e8f\u3067\u968e\u5c64\u306b\u8ffd\u52a0",id:"adding-each-of-the-children-to-the-hierarchy-in-the-right-order",level:3},{value:"\u30e1\u30bd\u30c3\u30c9\u3068\u30b3\u30fc\u30eb\u30d0\u30c3\u30af\u3092\u4f7f\u7528\u3057\u3066\u3001\u76ee\u7684\u306e\u52d5\u4f5c\u3092\u5b9f\u88c5",id:"implementing-the-desired-behaviour-via-methods-and-callbacks",level:3}],b={toc:x};function M(e){var n,t=e,{components:u}=t,g=((e,n)=>{var t={};for(var o in e)d.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&m)for(var o of m(e))n.indexOf(o)<0&&h.call(e,o)&&(t[o]=e[o]);return t})(t,["components"]);return(0,o.kt)("wrapper",(n=f(f({},b),g),p(n,s({components:u,mdxType:"MDXLayout"}))),(0,o.kt)("p",null,"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u4f5c\u6210\u6642\u306b\u306f\u3001TouchGFX\u306b\u542b\u307e\u308c\u308b\u6a19\u6e96\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\uff65\u30bb\u30c3\u30c8\u306b\u306f\u306a\u3044\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u304c\u5fc5\u8981\u306b\u306a\u308b\u5834\u5408\u3082\u3042\u308a\u307e\u3059\u3002"),(0,o.kt)("p",null,"\u72ec\u81ea\u306e\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3092\u4f5c\u6210\u3059\u308b1\u3064\u306e\u65b9\u6cd5\u306f\u3001\u30ab\u30b9\u30bf\u30e0\uff65\u30b3\u30f3\u30c6\u30ca\u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\u3067\u3059\u3002 \u30ab\u30b9\u30bf\u30e0\uff65\u30b3\u30f3\u30c6\u30ca\u306f\u3001\u4ed6\u306e\u65e2\u5b58\u306e\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3092\u542b\u307f\u3001\u305d\u308c\u3089\u306e\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u5916\u89b3\u3084\u52d5\u4f5c\u3092\u7d44\u307f\u5408\u308f\u305b\u305f\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3067\u3059\u3002 \u3053\u308c\u306f\u3001\u5f93\u6765\u306e\u8907\u5408\u30c7\u30b6\u30a4\u30f3\u30d1\u30bf\u30fc\u30f3\u3068\u540c\u3058\u3067\u3042\u308a\u3001\u542b\u307e\u308c\u3066\u3044\u308b\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3092\u30b3\u30f3\u30c6\u30ca\u30fc\u306e\u5b50\u3068\u3082\u547c\u3073\u307e\u3059\u3002"),(0,o.kt)("p",null,"\u30ab\u30b9\u30bf\u30e0\uff65\u30b3\u30f3\u30c6\u30ca\u306e\u63cf\u753b\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u306f\u3001\u4e00\u822c\u7684\u306b\u975e\u5e38\u306b\u9ad8\u304f\u306a\u308a\u307e\u3059\u3002 TouchGFX\u306e\u57fa\u76e4\u3068\u306a\u308b\u63cf\u753b\u30e1\u30ab\u30cb\u30ba\u30e0\u3092\u6d3b\u7528\u3057\u3001\u518d\u63cf\u753b\u306e\u5fc5\u8981\u304c\u3042\u308b\u30b3\u30f3\u30c6\u30ca\u306e\u30d1\u30fc\u30c4\u3068\u5b50\u3092\u81ea\u52d5\u7684\u306b\u6c7a\u5b9a\u3057\u307e\u3059\u3002 \u3064\u307e\u308a\u3001\u30b3\u30f3\u30c6\u30ca\u306e\u4f7f\u7528\u6642\u306b\u63cf\u753b\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u3092\u5fc3\u914d\u3059\u308b\u5fc5\u8981\u304c\u306a\u304f\u306a\u308b\u306e\u3067\u3059\u3002"),(0,o.kt)("p",null,"\u305f\u3060\u3057\u3001\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u30d5\u30c3\u30c8\u30d7\u30ea\u30f3\u30c8\u3092\u7e2e\u5c0f\u3059\u308b\u5fc5\u8981\u304c\u751f\u3058\u308b\u3053\u3068\u304c\u3042\u308a\u3001\u305d\u3046\u3044\u3063\u305f\u30b7\u30ca\u30ea\u30aa\u3067\u306f\u3001",(0,o.kt)("a",f({parentName:"p"},{href:"custom-widgets"}),"\u30ab\u30b9\u30bf\u30e0\uff65\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8"),"\u3068\u547c\u3070\u308c\u308b\u9ad8\u5ea6\u306a\u30a2\u30d7\u30ed\u30fc\u30c1\u306e\u65b9\u304c\u9069\u3057\u3066\u3044\u308b\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002"),(0,o.kt)("h2",f({},{id:"in-touchgfx-designer"}),"TouchGFX Designer\u3067\u306e\u64cd\u4f5c"),(0,o.kt)("p",null,"TouchGFX Designer\u3067\u30ab\u30b9\u30bf\u30e0\uff65\u30b3\u30f3\u30c6\u30ca\u3092\u4f5c\u6210\u3057\u3066\u4f7f\u7528\u3059\u308b\u5834\u5408\u306f\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u5185\u3067\u306e\u4e00\u822c\u7684\u306a\u4f7f\u7528\u624b\u9806\u3092\u793a\u3057\u305f\u6b21\u306e\u30d3\u30c7\u30aa\u3092\u3054\u89a7\u304f\u3060\u3055\u3044\u3002"),(0,o.kt)(i.Z,{url:"https://youtu.be/nX1nCAA4pyA",mdxType:"YouTube"}),(0,o.kt)("h3",f({},{id:"composite-custom-containers"}),"\u8907\u5408\u7684\u306a\u30ab\u30b9\u30bf\u30e0\uff65\u30b3\u30f3\u30c6\u30ca"),(0,o.kt)("p",null,"\u4ed6\u306e\u30ab\u30b9\u30bf\u30e0\u30b3\u30f3\u30c6\u30ca\u3067\u69cb\u6210\u3055\u308c\u308b\u30ab\u30b9\u30bf\u30e0\u30b3\u30f3\u30c6\u30ca\u3092\u4f5c\u6210\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002 \u3053\u308c\u306f\u3001\u5c0f\u3055\u3044\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3067\u69cb\u6210\u3055\u308c\u308b\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u69cb\u7bc9\u3059\u308b\u305f\u3081\u306e\u5f37\u529b\u306a\u65b9\u6cd5\u3067\u3059\u3002 \u3053\u306e\u305f\u3081\u306b\u306f\u3001\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\uff65\u30e1\u30cb\u30e5\u30fc\u306b\u3042\u308b\u4e8b\u524d\u5b9a\u7fa9\u6e08\u307f\u306e\u30ab\u30b9\u30bf\u30e0\uff65\u30b3\u30f3\u30c6\u30ca\u306e\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3092\u8ffd\u52a0\u3057\u307e\u3059\u3002"),(0,o.kt)(l.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/custom-containers/composite-custom-containers-4.17.png",mdxType:"Figure"},"\u30ab\u30b9\u30bf\u30e0\uff65\u30b3\u30f3\u30c6\u30ca\u306e\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306e\u633f\u5165"),(0,o.kt)("p",null,"TouchGFX Designer\u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\u3067\u3001\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306e\u633f\u5165\u304c\u3001\u30ab\u30b9\u30bf\u30e0\uff65\u30b3\u30f3\u30c6\u30ca\u306e\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3092\u305d\u308c\u81ea\u8eab\u306e\u5b9a\u7fa9\u306b\u8ffd\u52a0\u3059\u308b\u306a\u3069\u306e\u5faa\u74b0\u53c2\u7167\u306b\u9665\u308b\u3053\u3068\u3092\u9632\u6b62\u3067\u304d\u307e\u3059\u3002"),(0,o.kt)(l.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/custom-containers/circular-reference-4.17.png",mdxType:"Figure"},"\u5faa\u74b0\u53c2\u7167\u306e\u53ef\u80fd\u6027\u304c\u3042\u308b\u305f\u3081\u3001\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306e\u633f\u5165\u6a5f\u80fd\u304c\u7121\u52b9\u5316\u3055\u308c\u3066\u3044\u307e\u3059\u3002"),(0,o.kt)("h3",f({},{id:"custom-triggers-and-actions"}),"\u30ab\u30b9\u30bf\u30e0\uff65\u30c8\u30ea\u30ac\u3068\u30ab\u30b9\u30bf\u30e0\uff65\u30a2\u30af\u30b7\u30e7\u30f3"),(0,o.kt)("p",null,"\u30ab\u30b9\u30bf\u30e0\uff65\u30b3\u30f3\u30c6\u30ca\u306e\u5f37\u529b\u306a\u7279\u5fb4\u306e1\u3064\u306f\u3001\u30ab\u30b9\u30bf\u30e0\uff65\u30c8\u30ea\u30ac\uff08\u30b3\u30fc\u30eb\u30d0\u30c3\u30af\uff09\u3068\u30ab\u30b9\u30bf\u30e0\uff65\u30a2\u30af\u30b7\u30e7\u30f3\uff08\u30e1\u30bd\u30c3\u30c9\uff09\u3092\u5b9a\u7fa9\u3067\u304d\u308b\u3053\u3068\u3067\u3059\u3002 \u3064\u307e\u308a\u3001\u30ab\u30b9\u30bf\u30e0\uff65\u30b3\u30f3\u30c6\u30ca\u306b\u7d71\u5408\u52d5\u4f5c\u3092\u5b9a\u7fa9\u3067\u304d\u308b\u306e\u3067\u3001\u5358\u306b\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u518d\u5229\u7528\u53ef\u80fd\u306a\u30b3\u30ec\u30af\u30b7\u30e7\u30f3\u3067\u3042\u308b\u3060\u3051\u3067\u306a\u304f\u3001\u4ed6\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3068\u3084\u308a\u53d6\u308a\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308b\u306e\u3067\u3059\u3002"),(0,o.kt)(a.Z,{mdxType:"FurtherReading"},"\u3053\u306e\u6a5f\u80fd\u306e\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001\u300c",(0,o.kt)(c.Z,{to:"custom-triggers-and-actions",mdxType:"Link"},"\u30ab\u30b9\u30bf\u30e0\uff65\u30c8\u30ea\u30ac\u3068\u30ab\u30b9\u30bf\u30e0\uff65\u30a2\u30af\u30b7\u30e7\u30f3"),"\u300d\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,o.kt)("h2",f({},{id:"in-code"}),"\u30b3\u30fc\u30c9\u3067\u306e\u64cd\u4f5c"),(0,o.kt)("p",null,"\u30ab\u30b9\u30bf\u30e0\uff65\u30b3\u30f3\u30c6\u30ca\u306e\u5f37\u529b\u306a\u7279\u5fb4\u306e1\u3064\u306f\u3001\u30ab\u30b9\u30bf\u30e0\uff65\u30c8\u30ea\u30ac\uff08\u30b3\u30fc\u30eb\u30d0\u30c3\u30af\uff09\u3068\u30ab\u30b9\u30bf\u30e0\uff65\u30a2\u30af\u30b7\u30e7\u30f3\uff08\u30e1\u30bd\u30c3\u30c9\uff09\u3092\u5b9a\u7fa9\u3067\u304d\u308b\u3053\u3068\u3067\u3059\u3002 \u3064\u307e\u308a\u3001\u30ab\u30b9\u30bf\u30e0\uff65\u30b3\u30f3\u30c6\u30ca\u306b\u7d71\u5408\u52d5\u4f5c\u3092\u5b9a\u7fa9\u3067\u304d\u308b\u306e\u3067\u3001\u5358\u306b\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u518d\u5229\u7528\u53ef\u80fd\u306a\u30b3\u30ec\u30af\u30b7\u30e7\u30f3\u3067\u3042\u308b\u3060\u3051\u3067\u306a\u304f\u3001\u4ed6\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3068\u3084\u308a\u53d6\u308a\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308b\u306e\u3067\u3059\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"touchgfx::Container\u30af\u30e9\u30b9\u3092\u62e1\u5f35\u3059\u308b\u30af\u30e9\u30b9\u3092\u4f5c\u6210"),(0,o.kt)("li",{parentName:"ul"},"\u30b3\u30f3\u30c6\u30ca\u306e\u3059\u3079\u3066\u306e\u5b50\u3092\u30e1\u30f3\u30d0\u30fc\u5909\u6570\u3068\u3057\u3066\u5ba3\u8a00"),(0,o.kt)("li",{parentName:"ul"},"\u30b3\u30f3\u30c6\u30ca\u306e\u5e45\u3068\u9ad8\u3055\u3092\u8a2d\u5b9a"),(0,o.kt)("li",{parentName:"ul"},"\u5b50\u3092\u305d\u308c\u305e\u308c\u8a2d\u5b9a"),(0,o.kt)("li",{parentName:"ul"},"\u5b50\u3092\u305d\u308c\u305e\u308c\u9069\u5207\u306a\u9806\u5e8f\u3067\u968e\u5c64\u306b\u8ffd\u52a0"),(0,o.kt)("li",{parentName:"ul"},"\u30e1\u30bd\u30c3\u30c9\u3068\u30b3\u30fc\u30eb\u30d0\u30c3\u30af\u3092\u4f7f\u7528\u3057\u3066\u3001\u76ee\u7684\u306e\u52d5\u4f5c\u3092\u5b9f\u88c5")),(0,o.kt)("p",null,"\u3053\u3053\u3067\u306f\u30b3\u30fc\u30c9\u306e\u69cb\u7bc9\u3092\u30bc\u30ed\u304b\u3089\u30b9\u30bf\u30fc\u30c8\u3057\u3066\u3001\u6700\u7d42\u7684\u306b\u306f\u30b7\u30f3\u30d7\u30eb\u304b\u3064\u5b8c\u5168\u6a5f\u80fd\u306e\u30ab\u30b9\u30bf\u30e0\uff65\u30b3\u30f3\u30c6\u30ca\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002"),(0,o.kt)("h3",f({},{id:"create-a-class-that-extends-the-touchgfxcontainer-class"}),"touchgfx::Container\u30af\u30e9\u30b9\u3092\u62e1\u5f35\u3059\u308b\u30af\u30e9\u30b9\u3092\u4f5c\u6210"),(0,o.kt)("p",null,"\u307e\u305a\u3001\u4ee5\u4e0b\u306e\u30b3\u30fc\u30c9\u3092\u4f7f\u7528\u3057\u3066\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"MyCustomContainer.hpp"),"\u30d8\u30c3\u30c0\uff65\u30d5\u30a1\u30a4\u30eb\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002 C++\u306e\u7d99\u627f\u3092\u4f7f\u7528\u3057\u3066\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"touchgfx::Container"),"\u306e\u30e1\u30bd\u30c3\u30c9\u3068\u30e1\u30f3\u30d0\u30fc\u3078\u306e\u30a2\u30af\u30bb\u30b9\u3092\u53d6\u5f97\u3057\u307e\u3059\uff08",(0,o.kt)("inlineCode",{parentName:"p"},"Container.hpp"),"\u306e\u30d8\u30c3\u30c0\uff65\u30d5\u30a1\u30a4\u30eb\u3092\u542b\u3081\u308b\u3053\u3068\u3092\u5fd8\u308c\u306a\u3044\u3067\u304f\u3060\u3055\u3044\uff09\u3002"),(0,o.kt)(r.Z,{mdxType:"CodeHeader"},"MyCustomContainer.hpp"),(0,o.kt)("pre",null,(0,o.kt)("code",f({parentName:"pre"},{className:"language-cpp",metastring:"{2,4}","{2,4}":!0}),"#include <gui/common/FrontendApplication.hpp>\n#include <touchgfx/containers/Container.hpp>\n\nclass MyCustomContainer : public touchgfx::Container\n{\npublic:\n    MyCustomContainer();\n    virtual ~MyCustomContainer() {}\n    virtual void initialize();\n\nprotected:\n    FrontendApplication& application() {\n        return *static_cast<FrontendApplication*>(touchgfx::Application::getInstance());\n    }\n\nprivate:\n\n};\n")),(0,o.kt)("h3",f({},{id:"declaring-all-children-of-the-container-as-member-variables"}),"\u30b3\u30f3\u30c6\u30ca\u306e\u3059\u3079\u3066\u306e\u5b50\u3092\u30e1\u30f3\u30d0\u30fc\u5909\u6570\u3068\u3057\u3066\u5ba3\u8a00"),(0,o.kt)("p",null,"\u30ab\u30b9\u30bf\u30e0\uff65\u30b3\u30f3\u30c6\u30ca\u3092\u69cb\u6210\u3059\u308b\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3092\u3001\u30d8\u30c3\u30c0\uff65\u30d5\u30a1\u30a4\u30eb\u5185\u3067\u5ba3\u8a00\u3057\u307e\u3059\u3002 \u3053\u306e\u4f8b\u3067\u306f\u3001\u30dc\u30c3\u30af\u30b9",(0,o.kt)("inlineCode",{parentName:"p"},"myBox"),"\u3068\u30dc\u30bf\u30f3",(0,o.kt)("inlineCode",{parentName:"p"},"myButton"),"\u3092\u8ffd\u52a0\u3059\u308b\u3060\u3051\u3067\u3059\u3002"),(0,o.kt)(r.Z,{mdxType:"CodeHeader"},"MyCustomContainer.hpp"),(0,o.kt)("pre",null,(0,o.kt)("code",f({parentName:"pre"},{className:"language-cpp",metastring:"{19-20}","{19-20}":!0}),"#include <gui/common/FrontendApplication.hpp>\n#include <touchgfx/containers/Container.hpp>\n\nclass MyCustomContainer : public touchgfx::Container\n{\npublic:\n    MyCustomContainer();\n    virtual ~MyCustomContainer() {}\n    virtual void initialize();\n\nprotected:\n    FrontendApplication& application() {\n        return *static_cast<FrontendApplication*>(touchgfx::Application::getInstance());\n    }\n\n    /*\n     * Member Declarations\n     */\n    touchgfx::Box myBox;\n    touchgfx::Button myButton;\n\nprivate:\n\n};\n")),(0,o.kt)("h3",f({},{id:"setting-the-width-and-height-of-the-container"}),"\u30b3\u30f3\u30c6\u30ca\u306e\u5e45\u3068\u9ad8\u3055\u3092\u8a2d\u5b9a"),(0,o.kt)("p",null,"\u4e0a\u3067\u4f5c\u6210\u3057\u305f\u30d8\u30c3\u30c0\uff65\u30d5\u30a1\u30a4\u30eb\u3092\u542b\u3080cpp\u30d5\u30a1\u30a4\u30eb\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"MyCustomContainer.cpp"),"\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002 \u30b3\u30f3\u30b9\u30c8\u30e9\u30af\u30bf\u5185\u3067",(0,o.kt)("inlineCode",{parentName:"p"},"setWidth()"),"\u304a\u3088\u3073",(0,o.kt)("inlineCode",{parentName:"p"},"setHeight()"),"\u30e1\u30bd\u30c3\u30c9\u3092\u4f7f\u7528\u3057\u3066\u3001\u30ab\u30b9\u30bf\u30e0\uff65\u30b3\u30f3\u30c6\u30ca\u306e\u30b5\u30a4\u30ba\u3092\u8a2d\u5b9a\u3057\u307e\u3059\u3002"),(0,o.kt)(r.Z,{mdxType:"CodeHeader"},"MyCustomContainer.cpp"),(0,o.kt)("pre",null,(0,o.kt)("code",f({parentName:"pre"},{className:"language-cpp",metastring:"{1,5-6}","{1,5-6}":!0}),"#include <gui/include/containers/MyCustomContainer.hpp>\n\nMyCustomContainer::MyCustomContainer()\n{\n    setWidth(250);\n    setHeight(250);\n}\n\nvoid MyCustomContainer::initialize()\n{\n\n}\n")),(0,o.kt)("h3",f({},{id:"setting-up-each-of-the-children"}),"\u5b50\u3092\u305d\u308c\u305e\u308c\u8a2d\u5b9a"),(0,o.kt)("p",null,"\u6b21\u306b\u3001\u5404\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u30b3\u30f3\u30b9\u30c8\u30e9\u30af\u30bf\u5185\u3067\u8a2d\u5b9a\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,o.kt)(r.Z,{mdxType:"CodeHeader"},"MyCustomContainer.cpp"),(0,o.kt)("pre",null,(0,o.kt)("code",f({parentName:"pre"},{className:"language-cpp",metastring:"{8-12}","{8-12}":!0}),"#include <gui/include/containers/MyCustomContainer.hpp>\n\nMyCustomContainer::MyCustomContainer()\n{\n    setWidth(250);\n    setHeight(250);\n\n    myBox.setPosition(0, 0, 250, 250);\n    myBox.setColor(touchgfx::Color::getColorFromRGB(255, 255, 255));\n\n    myButton.setXY(40, 95);\n    myButton.setBitmaps(touchgfx::Bitmap(BITMAP_BLUE_BUTTONS_ROUND_EDGE_SMALL_ID), touchgfx::Bitmap(BITMAP_BLUE_BUTTONS_ROUND_EDGE_SMALL_PRESSED_ID));\n}\n\nvoid MyCustomContainer::initialize()\n{\n\n}\n")),(0,o.kt)("h3",f({},{id:"adding-each-of-the-children-to-the-hierarchy-in-the-right-order"}),"\u5b50\u3092\u305d\u308c\u305e\u308c\u9069\u5207\u306a\u9806\u5e8f\u3067\u968e\u5c64\u306b\u8ffd\u52a0"),(0,o.kt)("p",null,"\u30b3\u30f3\u30b9\u30c8\u30e9\u30af\u30bf\u5185\u3067",(0,o.kt)("inlineCode",{parentName:"p"},"add()"),"\u30e1\u30bd\u30c3\u30c9\u3092\u4f7f\u7528\u3057\u3066\u3001\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3092\u30ab\u30b9\u30bf\u30e0\uff65\u30b3\u30f3\u30c6\u30ca\u306e\u5b50\u3068\u3057\u3066\u8ffd\u52a0\u3057\u307e\u3059\u3002"),(0,o.kt)(r.Z,{mdxType:"CodeHeader"},"MyCustomContainer.cpp"),(0,o.kt)("pre",null,(0,o.kt)("code",f({parentName:"pre"},{className:"language-cpp",metastring:"{14-15}","{14-15}":!0}),"#include <gui/containers/MyCustomContainer.hpp>\n\nMyCustomContainer::MyCustomContainer()\n{\n    setWidth(250);\n    setHeight(250);\n\n    myBox.setPosition(0, 0, 250, 250);\n    myBox.setColor(touchgfx::Color::getColorFromRGB(255, 255, 255));\n\n    myButton.setXY(40, 95);\n    myButton.setBitmaps(touchgfx::Bitmap(BITMAP_BLUE_BUTTONS_ROUND_EDGE_SMALL_ID), touchgfx::Bitmap(BITMAP_BLUE_BUTTONS_ROUND_EDGE_SMALL_PRESSED_ID));\n\n    add(myBox);\n    add(myButton);\n}\n\nvoid MyCustomContainer::initialize()\n{\n\n}\n")),(0,o.kt)("h3",f({},{id:"implementing-the-desired-behaviour-via-methods-and-callbacks"}),"\u30e1\u30bd\u30c3\u30c9\u3068\u30b3\u30fc\u30eb\u30d0\u30c3\u30af\u3092\u4f7f\u7528\u3057\u3066\u3001\u76ee\u7684\u306e\u52d5\u4f5c\u3092\u5b9f\u88c5"),(0,o.kt)("p",null,"\u30ab\u30b9\u30bf\u30e0\uff65\u30b3\u30f3\u30c6\u30ca\u306b\u52d5\u4f5c\u3092\u8ffd\u52a0\u3059\u308b\u305f\u3081\u306b\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"MyCustomContainer.hpp"),"\u3067\u30e1\u30bd\u30c3\u30c9\u3068\u30b3\u30fc\u30eb\u30d0\u30c3\u30af\u3092\u3044\u304f\u3064\u304b\u5b9a\u7fa9\u3057\u307e\u3059\u3002 \u3053\u306e\u4f8b\u3067\u306f\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"doSomething()"),"\u3068\u3044\u3046\u30e1\u30bd\u30c3\u30c9\u3092\u5b9a\u7fa9\u3057\u307e\u3059\u3002\u3053\u308c\u306f\u30b3\u30fc\u30eb\u30d0\u30c3\u30af",(0,o.kt)("inlineCode",{parentName:"p"},"somethingHappened"),"\u3092\u767a\u884c\u3059\u308b\u3053\u3068\u306e\u307f\u3092\u76ee\u7684\u3068\u3057\u307e\u3059\u3002"),(0,o.kt)(r.Z,{mdxType:"CodeHeader"},"MyCustomContainer.hpp"),(0,o.kt)("pre",null,(0,o.kt)("code",f({parentName:"pre"},{className:"language-cpp",metastring:"{14-17,22,32-38,51}","{14-17,22,32-38,51}":!0}),"#include <gui/common/FrontendApplication.hpp>\n#include <touchgfx/containers/Container.hpp>\n\nclass MyCustomContainer : public touchgfx::Container\n{\npublic:\n    MyCustomContainerBase();\n    virtual ~MyCustomContainerBase() {}\n    virtual void initialize();\n\n    /*\n     * Callback Setters\n     */\n    void setSomethingHappenedCallback(touchgfx::GenericCallback<>& callback)\n    {\n        somethingHappenedCallback = &callback;\n    }\n\n    /*\n     * Methods\n     */\n    virtual void doSomething();\n\nprotected:\n    FrontendApplication& application() {\n        return *static_cast<FrontendApplication*>(touchgfx::Application::getInstance());\n    }\n\n    /*\n     * Callback Emitters\n     */\n    virtual void emitSomethingHappenedCallback()\n    {\n        if (somethingHappenedCallback && somethingHappenedCallback->isValid())\n        {\n            somethingHappenedCallback->execute();\n        }\n    }\n\n    /*\n     * Member Declarations\n     */\n    touchgfx::Box myBox;\n    touchgfx::Button myButton;\n\nprivate:\n\n    /*\n     * Callback Declarations\n     */\n    touchgfx::GenericCallback<>* somethingHappenedCallback;\n\n};\n")),(0,o.kt)("p",null,"\u6b21\u306b\u3001\u4e0a\u8a18\u306e\u30e1\u30bd\u30c3\u30c9\u304a\u3088\u3073\u30b3\u30fc\u30eb\u30d0\u30c3\u30af\u306b\u52d5\u4f5c\u3092\u8ffd\u52a0\u3059\u308b\u305f\u3081\u306b\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"MyCustomContainer.cpp"),"\u30d5\u30a1\u30a4\u30eb\u5185\u3067\u5b9a\u7fa9\u3092\u884c\u3044\u307e\u3059\u3002 \u3053\u306e\u30b7\u30f3\u30d7\u30eb\u306a\u8868\u9762\u7684\u306a\u4f8b\u3067\u306f\u3001\u5358\u306b",(0,o.kt)("inlineCode",{parentName:"p"},"somethingHappened"),"\u30b3\u30fc\u30eb\u30d0\u30c3\u30af\u3092\u767a\u884c\u3059\u308b\u306e\u307f\u3067\u3059\u304c\u3001\u76ee\u7684\u306b\u5408\u308f\u305b\u3066\u3053\u308c\u3092\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,o.kt)(r.Z,{mdxType:"CodeHeader"},"MyCustomContainer.cpp"),(0,o.kt)("pre",null,(0,o.kt)("code",f({parentName:"pre"},{className:"language-cpp",metastring:"{23-26}","{23-26}":!0}),"#include <gui/containers/MyCustomContainer.hpp>\n\nMyCustomContainer::MyCustomContainer()\n{\n    setWidth(250);\n    setHeight(250);\n\n    myBox.setPosition(0, 0, 250, 250);\n    myBox.setColor(touchgfx::Color::getColorFromRGB(255, 255, 255));\n\n    myButton.setXY(40, 95);\n    myButton.setBitmaps(touchgfx::Bitmap(BITMAP_BLUE_BUTTONS_ROUND_EDGE_SMALL_ID), touchgfx::Bitmap(BITMAP_BLUE_BUTTONS_ROUND_EDGE_SMALL_PRESSED_ID));\n\n    add(myBox);\n    add(myButton);\n}\n\nvoid MyCustomContainer::initialize()\n{\n\n}\n\nvoid MyCustomContainer::doSomething()\n{\n    MyCustomContainer::emitSomethingHappenedCallback();\n}\n")),(0,o.kt)(a.Z,{mdxType:"FurtherReading"},"\u30ab\u30b9\u30bf\u30e0\uff65\u30b3\u30f3\u30c6\u30ca\u306e\u4f5c\u6210\u304a\u3088\u3073\u4f7f\u7528\u65b9\u6cd5\u306e\u8a73\u7d30\u306a\u4f8b\u306b\u3064\u3044\u3066\u306f\u3001\u300c",(0,o.kt)(c.Z,{to:"../../../tutorials/tutorial-04",mdxType:"Link"},"Tutorial 4: Creating a Scroll Wheel with custom behavior"),"\u300d\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"))}M.isMDXComponent=!0}}]);