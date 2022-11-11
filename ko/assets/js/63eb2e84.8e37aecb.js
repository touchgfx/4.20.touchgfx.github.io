"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[4612],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=u(r),f=o,d=m["".concat(l,".").concat(f)]||m[f]||s[f]||i;return r?n.createElement(d,a(a({ref:t},p),{},{components:r})):n.createElement(d,a({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},44035:function(e,t,r){var n=r(67294),o=r(25026);t.Z=function(e){const t=e.noShadow||!1,r=e.width,i=e.height,a=(0,o.Z)(e.imageSource);return t?n.createElement("div",{className:"figure noshadow"},n.createElement("a",{href:a,target:"_blank"},n.createElement("img",{width:r,height:i,src:a})),n.createElement("p",null,e.children)):n.createElement("div",{className:"figure"},n.createElement("a",{href:a,target:"_blank"},n.createElement("img",{width:r,height:i,src:a})),n.createElement("p",null,e.children))}},27912:function(e,t,r){r.r(t),r.d(t,{assets:function(){return g},contentTitle:function(){return d},default:function(){return b},frontMatter:function(){return f},metadata:function(){return v},toc:function(){return h}});var n=r(3905),o=r(44035),i=Object.defineProperty,a=Object.defineProperties,c=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))u.call(t,r)&&s(e,r,t[r]);if(l)for(var r of l(t))p.call(t,r)&&s(e,r,t[r]);return e};const f={id:"model-view-presenter-design-pattern",title:"\ubaa8\ub378-\ubdf0-\ud504\ub9ac\uc820\ud130 \uc124\uacc4 \ud328\ud134"},d=void 0,v={unversionedId:"development/ui-development/software-architecture/model-view-presenter-design-pattern",id:"development/ui-development/software-architecture/model-view-presenter-design-pattern",title:"\ubaa8\ub378-\ubdf0-\ud504\ub9ac\uc820\ud130 \uc124\uacc4 \ud328\ud134",description:"",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/development/ui-development/software-architecture/model-view-presenter-design-pattern.mdx",sourceDirName:"development/ui-development/software-architecture",slug:"/development/ui-development/software-architecture/model-view-presenter-design-pattern",permalink:"/touchgfx-test.github.io/ko/docs/development/ui-development/software-architecture/model-view-presenter-design-pattern",draft:!1,tags:[],version:"current",frontMatter:{id:"model-view-presenter-design-pattern",title:"\ubaa8\ub378-\ubdf0-\ud504\ub9ac\uc820\ud130 \uc124\uacc4 \ud328\ud134"},sidebar:"docs",previous:{title:"Software Architecture",permalink:"/touchgfx-test.github.io/ko/docs/category/software-architecture"},next:{title:"\uc2a4\ud06c\ub9b0 \uac1c\ub150",permalink:"/touchgfx-test.github.io/ko/docs/development/ui-development/software-architecture/screen-definition-and-mvp"}},g={},h=[],w={toc:h};function b(e){var t,r=e,{components:i}=r,s=((e,t)=>{var r={};for(var n in e)u.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=m(m({},w),s),a(t,c({components:i,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"TouchGFX \uc0ac\uc6a9\uc790 \uc778\ud130\ud398\uc774\uc2a4\ub294 Model-View-Controller(MVC) \ud328\ud134\uc5d0\uc11c \ud30c\uc0dd\ub41c Model-View-Presenter(MVP)\ub77c\ub294 \uc544\ud0a4\ud14d\ucc98 \ud328\ud134\uc744 \ub530\ub985\ub2c8\ub2e4. \ub458 \ub2e4 \uc0ac\uc6a9\uc790 \uc778\ud130\ud398\uc774\uc2a4 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uad6c\ucd95\ud560 \ub54c \ub110\ub9ac \uc0ac\uc6a9\ub418\ub294 \ud328\ud134\uc785\ub2c8\ub2e4."),(0,n.kt)("p",null,"MVP \ud328\ud134\uc758 \uac00\uc7a5 \ud070 \uc774\uc810\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\uad00\uc2ec \uc601\uc5ed \ubd84\ub9ac"),": \ucf54\ub4dc\ub97c \uac01\uc790\uc758 \ucc45\uc784\uc744 \uac00\uc9c4 \ubcc4\uac1c\uc758 \uc601\uc5ed\uc73c\ub85c \ubd84\ud560\ud569\ub2c8\ub2e4. \uc774\ub807\uac8c \ud558\uba74 \ucf54\ub4dc\uac00 \ub354 \ub2e8\uc21c\ud574\uc838\uc11c \uc7ac\uc0ac\uc6a9\ud558\uae30 \uc27d\uace0 \uc720\uc9c0 \uad00\ub9ac\ub3c4 \uc26c\uc6cc\uc9d1\ub2c8\ub2e4."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\uc720\ub2db \ud14c\uc2a4\ud2b8"),": UI \ub85c\uc9c1(presenter)\uc774 \uc2dc\uac01\uc801 \uacc4\uce35(view)\uacfc \ubd84\ub9ac\ub418\uc5b4 \uc788\uae30 \ub54c\ubb38\uc5d0 \uc774\ub7ec\ud55c \ubd80\ubd84\uc744 \ud6e8\uc52c \uc27d\uac8c \ub2e8\ub3c5\uc73c\ub85c \ud14c\uc2a4\ud2b8\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,n.kt)("p",null,"MVP\uc5d0\uc11c\ub294 \uc138 \uac00\uc9c0 \ud074\ub798\uc2a4\uac00 \ub2e4\uc74c\uacfc \uac19\uc774 \uc815\uc758\ub429\ub2c8\ub2e4."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"model"),"\uc740 \uc0ac\uc6a9\uc790 \uc778\ud130\ud398\uc774\uc2a4\uc5d0 \ud45c\uc2dc\ud558\uac70\ub098, \uadf8 \ubc16\uc5d0 \uc2e4\ud589\ud560 \ub370\uc774\ud130\ub97c \uc815\uc758\ud558\ub294 \uc778\ud130\ud398\uc774\uc2a4\uc785\ub2c8\ub2e4."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"view"),"\ub294 (model\uc5d0\uc11c) \ub370\uc774\ud130\ub97c \ud45c\uc2dc\ud558\uace0 \ud574\ub2f9 \ub370\uc774\ud130\ub97c \uc2e4\ud589\ud560 \ud504\ub9ac\uc820\ud130\uc5d0\uac8c \uc0ac\uc6a9\uc790 \uba85\ub839(\uc774\ubca4\ud2b8)\uc744 \uc804\ub2ec\ud558\ub294 \ud328\uc2dc\ube0c \uc778\ud130\ud398\uc774\uc2a4\uc785\ub2c8\ub2e4."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"presenter"),"\ub294 model\uacfc view\uc5d0 \ub530\ub77c \uc2e4\ud589\ub429\ub2c8\ub2e4. \uc800\uc7a5\uc18c(\ubaa8\ub378)\uc5d0\uc11c \ub370\uc774\ud130\ub97c \uac00\uc838\uc628 \ud6c4 \ubdf0\uc5d0 \ud45c\uc2dc\ud560 \uc218 \uc788\ub3c4\ub85d \ud615\uc2dd\uc744 \uc9c0\uc815\ud569\ub2c8\ub2e4.")),(0,n.kt)(o.Z,{imageSource:"/img/basic-concepts/software-architecture-mvp/mvp.png",noShadow:!0,mdxType:"Figure"},"\ubaa8\ub378-\ubdf0-\ud504\ub9ac\uc820\ud130 \uc124\uacc4 \ud328\ud134"),(0,n.kt)("p",null,"TouchGFX\uc5d0\uc11c\ub294 Model \ud074\ub798\uc2a4\ub97c \ud1b5\ud574\uc11c \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0\uc11c \ubc31\uc5d4\ub4dc \uc2dc\uc2a4\ud15c\uc73c\ub85c \ubd88\ub9ac\ub294 UI\uac00 \uc544\ub2cc \uc601\uc5ed\uacfc \ud1b5\uc2e0\uc774 \uc774\ub8e8\uc5b4\uc9d1\ub2c8\ub2e4. \ubc31\uc5d4\ub4dc \uc2dc\uc2a4\ud15c\uc740 \uc0c8\ub85c\uc6b4 \uc13c\uc11c \uce21\uc815 \uac12\uacfc \uac19\uc740 \uc774\ubca4\ud2b8\ub97c UI\ub85c\ubd80\ud130 \uc218\uc2e0\ud558\uac70\ub098 UI\ub85c \uc804\uc1a1\ud558\ub294 \uc18c\ud504\ud2b8\uc6e8\uc5b4 \uad6c\uc131\uc694\uc18c\uc785\ub2c8\ub2e4. \ubc31\uc5d4\ub4dc \uc2dc\uc2a4\ud15c\uc740 \ub3d9\uc77c\ud55c MCU\uc5d0\uc11c, \ud639\uc740 \ubd84\ub9ac\ub41c \ud504\ub85c\uc138\uc11c, \ud074\ub77c\uc6b0\ub4dc \ubaa8\ub4c8 \ub610\ub294 \uadf8 \ubc16\uc5d0 \ub2e4\ub978 \uc704\uce58\uc5d0\uc11c \ubcc4\ub3c4 \uc791\uc5c5\uc73c\ub85c \uc2e4\ud589\ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4. TouchGFX\uc758 \uad00\uc810\uc5d0\uc11c \ubcfc \ub54c, \ud1b5\uc2e0\uc774 \uac00\ub2a5\ud55c \uad6c\uc131\uc694\uc18c\ub77c\uba74 \ubd84\ub9ac \uc5ec\ubd80\ub294 \uc911\uc694\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."),(0,n.kt)("p",null,"\uc5ec\uae30\uc5d0 \uc0ac\uc6a9\ub418\ub294 \ud1b5\uc2e0 \ud504\ub85c\ud1a0\ucf5c\uc740 TouchGFX\uc5d0\uc11c \uad00\ub9ac\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \ub2e8\uc21c\ud788 TouchGFX\ub97c \uc2e4\ud589\ud560 \ub54c\ub9c8\ub2e4 \ud638\ucd9c\ub418\ub294 \ud568\uc218\ub97c \uc81c\uacf5\ud558\uc5ec \uc5ec\uae30\uc5d0 \ud544\uc694\ud55c \ud1b5\uc2e0\uc744 \ucc98\ub9ac\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc790\uc138\ud55c \ub0b4\uc6a9\uc740 ",(0,n.kt)("a",m({parentName:"p"},{href:"../touchgfx-engine-features/backend-communication"}),"\ubc31\uc5d4\ub4dc \ud1b5\uc2e0"),"\uc5d0\uc11c \ud655\uc778\ud558\uc2ed\uc2dc\uc624."),(0,n.kt)(o.Z,{imageSource:"/img/basic-concepts/software-architecture-mvp/mvp-2.png",noShadow:!0,mdxType:"Figure"},"Model-View-Presenter \ubc0f \uc678\ubd80 \ud1b5\uc2e0"),(0,n.kt)("p",null,"TouchGFX UI \uac1c\ubc1c \uc2dc MVP \uad6c\ud604 \ubc0f \uc0ac\uc6a9 \ubc29\uc2dd\uc5d0 \uad00\ud55c \uc790\uc138\ud55c \ub0b4\uc6a9\uc740 ",(0,n.kt)("a",m({parentName:"p"},{href:"code-structure"}),"\ucf54\ub4dc \uad6c\uc870")," \uc139\uc158\uc744 \ucc38\uc870\ud558\uc2ed\uc2dc\uc624."))}b.isMDXComponent=!0}}]);