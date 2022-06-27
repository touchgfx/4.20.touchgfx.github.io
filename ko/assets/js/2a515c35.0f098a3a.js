"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[1757],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=l(r),f=o,d=m["".concat(u,".").concat(f)]||m[f]||s[f]||c;return r?n.createElement(d,a(a({ref:t},p),{},{components:r})):n.createElement(d,a({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,a=new Array(c);a[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var l=2;l<c;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},44035:function(e,t,r){var n=r(67294),o=r(25026);t.Z=function(e){const t=e.noShadow||!1,r=e.width,c=e.height,a=(0,o.Z)(e.imageSource);return t?n.createElement("div",{className:"figure noshadow"},n.createElement("a",{href:a,target:"_blank"},n.createElement("img",{width:r,height:c,src:a})),n.createElement("p",null,e.children)):n.createElement("div",{className:"figure"},n.createElement("a",{href:a,target:"_blank"},n.createElement("img",{width:r,height:c,src:a})),n.createElement("p",null,e.children))}},45135:function(e,t,r){var n=r(67294);class o extends n.Component{render(){var e=`https://www.youtube.com/embed/${function(e){const t=/https:\/\/www\.youtube\.com\/watch\?v=(\w+)/;if(t.test(e))return t.exec(e)[1];const r=/https:\/\/youtu\.be\/(\w+)/;if(r.test(e))return r.exec(e)[1];return e}(this.props.url)}`;return n.createElement("div",{className:"videoWrapper"},n.createElement("iframe",{src:e,frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))}}t.Z=o},78451:function(e,t,r){r.r(t),r.d(t,{assets:function(){return g},contentTitle:function(){return b},default:function(){return k},frontMatter:function(){return h},metadata:function(){return y},toc:function(){return v}});var n=r(3905),o=r(39130),c=r(44035),a=r(45135),i=Object.defineProperty,u=Object.defineProperties,l=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,f=(e,t,r)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&f(e,r,t[r]);if(p)for(var r of p(t))m.call(t,r)&&f(e,r,t[r]);return e};const h={id:"welcome",title:"TouchGFX \uc124\uba85\uc11c",sidebar_label:"\ud658\uc601 \ud398\uc774\uc9c0",description:"TouchGFX\uc5d0 \ub300\ud55c \uc124\uba85\uc11c \uc0ac\uc774\ud2b8 - \uac15\ub825\ud55c \uc784\ubca0\ub514\ub4dc \ud130\uce58 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uc0dd\uc131\ud558\uae30 \uc704\ud55c \uc0ac\uc6a9\uc790 \uce5c\ud654\uc801\uc778 \uadf8\ub798\ud53d C++ \ub3c4\uad6c\uc785\ub2c8\ub2e4."},b=void 0,y={unversionedId:"introduction/welcome",id:"introduction/welcome",title:"TouchGFX \uc124\uba85\uc11c",description:"TouchGFX\uc5d0 \ub300\ud55c \uc124\uba85\uc11c \uc0ac\uc774\ud2b8 - \uac15\ub825\ud55c \uc784\ubca0\ub514\ub4dc \ud130\uce58 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uc0dd\uc131\ud558\uae30 \uc704\ud55c \uc0ac\uc6a9\uc790 \uce5c\ud654\uc801\uc778 \uadf8\ub798\ud53d C++ \ub3c4\uad6c\uc785\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/introduction/welcome.mdx",sourceDirName:"introduction",slug:"/introduction/welcome",permalink:"/4.20/ko/docs/introduction/welcome",tags:[],version:"current",frontMatter:{id:"welcome",title:"TouchGFX \uc124\uba85\uc11c",sidebar_label:"\ud658\uc601 \ud398\uc774\uc9c0",description:"TouchGFX\uc5d0 \ub300\ud55c \uc124\uba85\uc11c \uc0ac\uc774\ud2b8 - \uac15\ub825\ud55c \uc784\ubca0\ub514\ub4dc \ud130\uce58 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uc0dd\uc131\ud558\uae30 \uc704\ud55c \uc0ac\uc6a9\uc790 \uce5c\ud654\uc801\uc778 \uadf8\ub798\ud53d C++ \ub3c4\uad6c\uc785\ub2c8\ub2e4."},sidebar:"docs",previous:{title:"Introduction",permalink:"/4.20/ko/docs/category/introduction"},next:{title:"What is TouchGFX?",permalink:"/4.20/ko/docs/introduction/what-is-touchgfx"}},g={},v=[{value:"\uc124\uba85\uc11c \uc18c\uac1c",id:"about-this-documentation",level:2},{value:"\ub300\uc0c1 \uc0ac\uc6a9\uc790",id:"target-user",level:3}],w={toc:v};function k(e){var t,r=e,{components:i}=r,f=((e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&p)for(var n of p(e))t.indexOf(n)<0&&m.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=d(d({},w),f),u(t,l({components:i,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"TouchGFX\uc758 \uacf5\uc2dd \uc124\uba85\uc11c\uc5d0 \uc624\uc2e0 \uac83\uc744 \ud658\uc601\ud569\ub2c8\ub2e4!"),(0,n.kt)(a.Z,{url:"https://youtu.be/t0SlRZnERms",mdxType:"YouTube"}),(0,n.kt)("p",null,"\ubcf8 \uc124\uba85\uc11c\uc640 TouchGFX\ub97c \ucc98\uc74c \uc811\ud558\uc2dc\ub294 \ubd84\ub4e4\uc740 \uc804\ubc18\uc801\uc778 \uc774\ud574\ub97c \ub3d5\uae30 \uc704\ud574 \uc77d\uc5b4\ubcf4\uc2dc\uae30 \ubc14\ub78d\ub2c8\ub2e4. \uc0ac\uc774\ub4dc\ubc14\uc758 \ubaa9\ucc28\uc5d0\uc11c \uad00\uc2ec \uc788\ub294 \uc8fc\uc81c\uc5d0 \ub300\ud55c \ub0b4\uc6a9\uc744 \uc27d\uac8c \ucc3e\uc73c\uc2e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc624\ub978\ucabd \uc0c1\ub2e8\uc758 \uac80\uc0c9 \uae30\ub2a5\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,n.kt)("h2",d({},{id:"about-this-documentation"}),"\uc124\uba85\uc11c \uc18c\uac1c"),(0,n.kt)("p",null,"\uc0ac\uc774\ud2b8\uc5d0 \ub300\ud55c \uc774 \uc8fc\uc694 \uc124\uba85\uc11c\ub294 \ub2e4\uc74c\uacfc \uac19\uc740 \uc139\uc158\uc73c\ub85c \uad6c\uc131\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"what-is-touchgfx"}),(0,n.kt)("strong",{parentName:"a"},"\uc18c\uac1c(Introduction)"))," \xa0- TouchGFX \ubc0f \uc124\uce58 \uac00\uc774\ub4dc\uc5d0 \ub300\ud55c \uae30\ubcf8 \uc815\ubcf4 \uc81c\uacf5."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"../basic-concepts/embedded-graphics"}),(0,n.kt)("strong",{parentName:"a"},"\uae30\ubcf8 \uac1c\ub150(Basic Concepts)"))," \xa0- \uadf8\ub798\ud53d \uc8fc\uc694 \uac1c\ub150 \uc18c\uac1c."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"../development/development-introduction"}),(0,n.kt)("strong",{parentName:"a"},"\uac1c\ubc1c(Development)"))," \xa0- \uad6c\uc870, \uc6cc\ud06c\ud50c\ub85c, \ub3c4\uad6c \ub4f1\uc744 \ud3ec\ud568\ud55c TouchGFX \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uac1c\ubc1c \ubc29\ubc95."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"../tutorials/tutorial-01"}),(0,n.kt)("strong",{parentName:"a"},"\ud29c\ud1a0\ub9ac\uc5bc(Tutorials)")),"\xa0- TouchGFX \ud29c\ud1a0\ub9ac\uc5bc \ubaa8\uc74c")),(0,n.kt)(c.Z,{imageSource:"/img/introduction/welcome/frontpage-4.17.png",noShadow:"true",mdxType:"Figure"}),(0,n.kt)("h3",d({},{id:"target-user"}),"\ub300\uc0c1 \uc0ac\uc6a9\uc790"),(0,n.kt)("p",null,"TouchGFX \uc124\uba85\uc11c\ub294 TouchGFX \uc124\uba85\uc11c\ub294 C++\uacfc STM32\uc5d0\uc11c\uc758 \uc784\ubca0\ub514\ub4dc GUI \uac1c\ubc1c\uc5d0 \uad00\ud55c \uae30\ubcf8\uc801\uc778 \uc2a4\ud0ac\uc744 \uac16\ucd98 \uc18c\ud504\ud2b8\uc6e8\uc5b4 \uac1c\ubc1c\uc790\ub97c \ub300\uc0c1\uc73c\ub85c \ud569\ub2c8\ub2e4. \uc784\ubca0\ub514\ub4dc GUI \uac1c\ubc1c\uc774 \ucc98\uc74c\uc774\uc2e0 \ubd84\ub4e4\uc740 Basic Concepts \uc139\uc158\uc744 \ucc38\uc870\ud558\uc2dc\uba74 \ub429\ub2c8\ub2e4. \ub610\ud55c \ub2e8\uacc4\ubcc4 \uac00\uc774\ub4dc\uc640 \ud29c\ud1a0\ub9ac\uc5bc\uc774 \uc81c\uacf5\ub418\uae30 \ub54c\ubb38\uc5d0 \ub204\uad6c\ub098 TouchGFX \uac1c\ubc1c \ubc29\ubc95\uc744 \uc190\uc27d\uac8c \ubc30\uc6b8 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"TouchGFX\ub294 \uc124\uba85\uc11c\uc758 \ub0b4\uc6a9\uc744 \uac1c\uc120\ud574 \ub098\uac00\uace0\uc790 \ud569\ub2c8\ub2e4.\xa0")," ",(0,n.kt)("em",{parentName:"p"},"\uc124\uba85\uc11c\uc5d0\uc11c \uc774\ud574\uac00 \ub418\uc9c0 \uc54a\ub294 \ubd80\ubd84\uc774 \uc788\uac70\ub098 \ucc3e\ub294 \ub0b4\uc6a9\uc774 \uc5c6\ub294 \uacbd\uc6b0\uc5d0\ub294 ",(0,n.kt)(o.Z,{to:"https://community.st.com/s/topic/0TO0X0000003iw6WAA/touchgfx",target:"_blank",mdxType:"Link"},"\ud3ec\ub7fc"),"!"),"\uc5d0 \ucc38\uc5ec\ud558\uc2dc\uc5b4 \uc124\uba85\uc11c\ub97c \uac1c\uc120\ud558\ub294 \ub370 \ub3c4\uc6c0\uc744 \uc8fc\uc2dc\uae30 \ubc14\ub78d\ub2c8\ub2e4!"))}k.isMDXComponent=!0}}]);