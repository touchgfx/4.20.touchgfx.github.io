"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[2454],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),k=u(n),m=a,d=k["".concat(i,".").concat(m)]||k[m]||c[m]||l;return n?r.createElement(d,o(o({ref:t},s),{},{components:n})):r.createElement(d,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=k;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},22425:function(e,t,n){var r=n(67294);class a extends r.Component{render(){return r.createElement("div",{className:"code-header"},r.createElement("div",null,r.createElement("h5",null,this.props.children)))}}t.Z=a},50201:function(e,t,n){n.r(t),n.d(t,{assets:function(){return y},contentTitle:function(){return g},default:function(){return b},frontMatter:function(){return d},metadata:function(){return f},toc:function(){return v}});var r=n(3905),a=n(39130),l=n(22425),o=Object.defineProperty,p=Object.defineProperties,i=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,k=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&k(e,n,t[n]);if(u)for(var n of u(t))c.call(t,n)&&k(e,n,t[n]);return e};const d={id:"operating-system",title:"\uc6b4\uc601 \uccb4\uc81c"},g=void 0,f={unversionedId:"basic-concepts/operating-system",id:"basic-concepts/operating-system",title:"\uc6b4\uc601 \uccb4\uc81c",description:"",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/basic-concepts/operating-system.mdx",sourceDirName:"basic-concepts",slug:"/basic-concepts/operating-system",permalink:"/4.20/ko/docs/basic-concepts/operating-system",draft:!1,tags:[],version:"current",frontMatter:{id:"operating-system",title:"\uc6b4\uc601 \uccb4\uc81c"},sidebar:"docs",previous:{title:"\uc131\ub2a5",permalink:"/4.20/ko/docs/basic-concepts/performance"},next:{title:"\uba54\ubaa8\ub9ac \uc0ac\uc6a9\ub7c9",permalink:"/4.20/ko/docs/basic-concepts/memory-usage"}},y={},v=[{value:"\uc11c\ub860",id:"introduction",level:2},{value:"\ub2e4\ub978 \uc791\uc5c5\uacfc \uc0ac\uc6a9\uc790 \uc778\ud130\ud398\uc774\uc2a4\uc758 \uad50\ucc28 \uc2e4\ud589",id:"interleaving-other-tasks-with-the-user-interface",level:3},{value:"\uc608\uc2dc",id:"an-example",level:3},{value:"RTOS",id:"rtos",level:2},{value:"\uc791\uc5c5 \ud1b5\uc2e0",id:"task-communication",level:3},{value:"\uc778\ud130\ub7fd\ud2b8 \ucc98\ub9ac",id:"handling-interrupts",level:3},{value:"FreeRTOS",id:"freertos",level:3},{value:"TouchGFX OS Wrappers",id:"touchgfx-os-wrappers",level:3},{value:"RTOS \ubbf8\uc0ac\uc6a9",id:"no-rtos",level:2},{value:"Model::tick",id:"modeltick",level:3},{value:"OSWrappers",id:"oswrappers",level:3}],h={toc:v};function b(e){var t,n=e,{components:o}=n,k=((e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&u)for(var r of u(e))t.indexOf(r)<0&&c.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=m(m({},h),k),p(t,i({components:o,mdxType:"MDXLayout"}))),(0,r.kt)("h2",m({},{id:"introduction"}),"\uc11c\ub860"),(0,r.kt)("p",null,"\uc774 \uc139\uc158\uc5d0\uc11c\ub294 \uadf8\ub798\ud53d \uc0ac\uc6a9\uc790 \uc778\ud130\ud398\uc774\uc2a4 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc758 \uc6b4\uc601 \uccb4\uc81c \uc0ac\uc6a9\uc5d0 \ub300\ud574 \uc54c\uc544\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc784\ubca0\ub514\ub4dc \uc7a5\uce58\ub294 \uac08\uc218\ub85d \uc9c4\ud654\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4. \ub300\ubd80\ubd84\uc758 \uc6b4\uc601 \uccb4\uc81c\uac00 \uadf8\ub798\ud53d \uc0ac\uc6a9\uc790 \uc778\ud130\ud398\uc774\uc2a4\ubfd0\ub9cc \uc544\ub2c8\ub77c \ubcf5\uc7a1\ud55c \uc81c\uc5b4 \uc54c\uace0\ub9ac\uc998\uacfc \uc791\uc5c5\uae4c\uc9c0 \ucc98\ub9ac\ud558\uae30 \ub54c\ubb38\uc785\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc608\ub97c \ub4e4\uba74 \ubaa8\ud130 \uc81c\uc5b4, \ub370\uc774\ud130 \uc218\uc9d1, \ubcf4\uc548 \uad00\ub828 \uc791\uc5c5 \ub4f1\uc774 \uc788\uc2b5\ub2c8\ub2e4. \uc624\ub298\ub0a0 \ub300\ubd80\ubd84\uc758 \uc7a5\uce58\uc5d0\ub294 \ub370\uc774\ud130 \uc13c\ud130\uc640\uc758 \ud1b5\uc2e0\uc744 \uc704\ud55c TCP/IP \uac19\uc740 \ud1b5\uc2e0 \ud504\ub85c\ud1a0\ucf5c \uc2a4\ud0dd\uc774, \ub610\ub294 \ub2e4\ub978 \ub85c\uceec \uc7a5\uce58\uc640\uc758 \ud1b5\uc2e0\uc744 \uc704\ud55c \ube14\ub8e8\ud22c\uc2a4 \uac19\uc740 \ubb34\uc120 \uc2a4\ud0dd\uc774 \ud3ec\ud568\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h3",m({},{id:"interleaving-other-tasks-with-the-user-interface"}),"\ub2e4\ub978 \uc791\uc5c5\uacfc \uc0ac\uc6a9\uc790 \uc778\ud130\ud398\uc774\uc2a4\uc758 \uad50\ucc28 \uc2e4\ud589"),(0,r.kt)("p",null,"\uc5d0\uadf8 \ud0c0\uc774\uba38\uc640 \uac19\uc774 \uadf8\ub798\ud53d \uc0ac\uc6a9\uc790 \uc778\ud130\ud398\uc774\uc2a4\uc640 \uba87 \uac00\uc9c0 \ub2e8\uc21c\ud55c \uc9c0\uc6d0 \uc791\uc5c5\uc774 \ud3ec\ud568\ub41c \uc7a5\uce58\uc5d0\uc11c\ub294 \uc0ac\uc6a9\uc790 \uc778\ud130\ud398\uc774\uc2a4 \ucf54\ub4dc\ub97c \uc911\uc2ec\uc73c\ub85c \uc804\uccb4 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uad6c\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub7ec\ud55c \uacbd\uc6b0\uc5d0\ub294 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc774 \uc815\uae30\uc801\uc778 \uc0ac\uc6a9\uc790 \uc778\ud130\ud398\uc774\uc2a4 \uc5c5\ub370\uc774\ud2b8\ub97c \uc81c\uc678\ud558\uace0 \ub2e4\ub978 \uc791\uc5c5\uc744 \uac70\uc758 \uc218\ud589\ud558\uc9c0 \uc54a\uae30 \ub54c\ubb38\uc5d0 \ub2e4\ub978 \uc2e4\ud589 \uc791\uc5c5\uc744 \uc0ac\uc6a9\uc790 \uc778\ud130\ud398\uc774\uc2a4 \ucf54\ub4dc\uc5d0 \uc0bd\uc785\ud558\ub294 \ub370 \ubcc4 \ubb38\uc81c\uac00 \uc5c6\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ud558\uc9c0\ub9cc \ubaa8\ud130 \uc870\uc808\uacfc \uac19\uc740 \ud0c0\uc774\ubc0d \uc694\uac74\uacfc \ud568\uaed8 \u201c\ubc31\uadf8\ub77c\uc6b4\ub4dc\uc5d0\uc11c \uc2e4\ud589\u201d\ub418\ub294 \uace0\uae09 \uae30\ub2a5\uc744 \ucd94\uac00\ud558\uac8c \ub418\uba74 \ud0c0\uc774\ubc0d \uc694\uac74\uc744 \uc9c0\uc6d0\ud558\ub294 \ub3d9\uc2dc\uc5d0 \ub450 \uac00\uc9c0 \uc791\uc5c5\uc744 \uc0ac\uc6a9\uc790 \uc778\ud130\ud398\uc774\uc2a4\uc5d0 \ud1b5\ud569\ud558\uae30\uac00 \uc5b4\ub824\uc6cc\uc9d1\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc774\uc804 \uc139\uc158\uc5d0\uc11c\ub3c4 \uc5b8\uae09\ud588\uc9c0\ub9cc \uadf8\ub798\ud53d \uc5d4\uc9c4\uc740 \uc0c8\ub85c\uc6b4 \ud504\ub808\uc784\uc744 \ub04a\uc784\uc5c6\uc774 \uadf8\ub824\uc11c \uc790\uc5f0\uc2a4\ub7ec\uc6b4 \uc0ac\uc6a9\uc790 \uc778\ud130\ud398\uc774\uc2a4\ub97c \uc9c0\uc6d0\ud574\uc57c \ud569\ub2c8\ub2e4. \uadf8\ub798\ud53d \uc5d4\uc9c4\uc774 \ub2e4\ub978 \uc791\uc5c5\uc744 \uc2e4\ud589\ud558\ub290\ub77c \uadf8\ub9ac\uae30\ub97c \uba48\ucd98\ub2e4\uba74 \ud504\ub808\uc784 \uc18d\ub3c4\uac00 \ub5a8\uc5b4\uc9c0\uac8c \ub429\ub2c8\ub2e4. \ub9c8\ucc2c\uac00\uc9c0\ub85c \ub2e4\ub978 \uc791\uc5c5\ub4e4\uc774 \ud504\ub808\uc784 \uc0ac\uc774\uc5d0, \uc989 \uc720\ud734 \uc2dc\uac04\uc5d0\ub9cc \uc2e4\ud589\ub41c\ub2e4\uace0 \uac00\uc815\ud560 \uacbd\uc6b0 \uc0ac\uc6a9\uc790 \uc778\ud130\ud398\uc774\uc2a4\uac00 \ubcf5\uc7a1\ud55c \uc7a5\uba74\uc744 \ub80c\ub354\ub9c1\ud558\uc5ec \uc720\ud734 \uc2dc\uac04\uc774 \ube44\uad50\uc801 \uc801\uc744 \ub54c\ub294 \ub2e4\ub978 \uc791\uc5c5\ub4e4\uc774 \uc5b4\ub835\uc2b5\ub2c8\ub2e4. \uc774\ub7ec\ud55c \uc774\uc720\ub4e4\ub85c \uc778\ud574 UI \uc791\uc5c5\uc744 \ub2e4\ub978 \ubcf5\uc7a1\ud55c \uc791\uc5c5\uacfc \ubc88\uac08\uc544 \uac00\uba70 \uc218\ub3d9\uc73c\ub85c \uc2e4\ud589\ud558\uae30\uac00 \ub9e4\uc6b0 \uae4c\ub2e4\ub86d\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h3",m({},{id:"an-example"}),"\uc608\uc2dc"),(0,r.kt)("p",null,"\uc774\uc81c\ubd80\ud130 \ub514\uc2a4\ud50c\ub808\uc774\uac00 \uc7a5\ucc29\ub41c \ube14\ub8e8\ud22c\uc2a4 \uc2a4\ud53c\ucee4\ub97c \uac1c\ubc1c\ud55c\ub2e4\uace0 \uac00\uc815\ud558\uaca0\uc2b5\ub2c8\ub2e4. \uc5ec\uae30\uc11c \ud06c\uac8c \uc138 \uac00\uc9c0 \uc791\uc5c5\uc744 \uc218\ud589\ud574\uc57c \ud558\ub294\ub370, \ubc14\ub85c \uadf8\ub798\ud53d \uc0ac\uc6a9\uc790 \uc778\ud130\ud398\uc774\uc2a4 \uc2e4\ud589, \uc2a4\ud53c\ucee4\uc5d0 \uc74c\uc545 \uc804\uc1a1, \ub2e4\ub978 \uc7a5\uce58\uc640 \ud1b5\uc2e0\ud560 \uc218 \uc788\ub294 \ube14\ub8e8\ud22c\uc2a4 \uc2a4\ud0dd \ucc98\ub9ac\uc785\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc0ac\uc6a9\uc790 \uc778\ud130\ud398\uc774\uc2a4 \uae30\ubc18 \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uc544\ud0a4\ud14d\ucc98\uc758 \uc131\ub2a5 \uc800\ud558 \uc5ec\ubd80\ub97c \uc54c\uc544\ubcf4\ub294 \uac83\uc740 \uc5b4\ub835\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4 \uc74c\uc545 \ucf54\ub4dc\ub97c \uc0ac\uc6a9\uc790 \uc778\ud130\ud398\uc774\uc2a4\uc640 \ube14\ub80c\ub529\ud55c \ud6c4 \uc0ac\uc6a9\uc790 \uc778\ud130\ud398\uc774\uc2a4\uc758 \ubc84\ud2bc \uc774\ubca4\ud2b8 \ud578\ub4e4\ub7ec\ub85c \uc7ac\uc0dd\uc744 \uc2dc\uc791\ud560 \uc218 \uc788\ub3c4\ub85d \ucf54\ub4dc\ub97c \uc0bd\uc785\ud569\ub2c8\ub2e4. \uc774\uc81c \uc74c\uc545\uc744 \uc2dc\uc791\ud558\ub294 \ub3d9\uc548 \uc0ac\uc6a9\uc790 \uc778\ud130\ud398\uc774\uc2a4\uac00 \uc7a0\uae41\ub2c8\ub2e4. \uc560\ub2c8\uba54\uc774\uc158 \uc2e4\ud589\ub3c4 \uc911\ub2e8\ub429\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc77c\ubc18\uc801\uc73c\ub85c \uc0ac\uc6a9\uc790 \uc778\ud130\ud398\uc774\uc2a4\uc758 \uc751\ub2f5\uc740 \uc74c\uc545 \uc791\uc5c5(\uc2dc\uc791, \uc815\uc9c0, \ub2e4\uc74c \ub4f1)\uc774 \uc2e4\ud589\ub418\ub294 \uc2dc\uac04\uc5d0 \ub530\ub77c \ub2ec\ub77c\uc9d1\ub2c8\ub2e4. \uc774\ub294 \uc77c\ubc18\uc801\uc778 \ubb38\uc81c\ub85c, \ub098\uc911\uc5d0 \uc790\uc138\ud788 \uc0b4\ud3b4\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uadf8\ub807\ub2e4\uba74 \ube14\ub8e8\ud22c\uc2a4\uc5d0\uc11c\ub3c4 \uc74c\uc545\uc744 \uc2dc\uc791\ud558\uace0 \uc2f6\ub2e4\uba74 \uc5b4\ub5bb\uac8c \ub420\uae4c\uc694? \uc0ac\uc6a9\uc790 \uc778\ud130\ud398\uc774\uc2a4\ub3c4 \uc5b4\ub5a4 \uc2dd\uc73c\ub85c\ub4e0 \uc5ec\uae30\uc5d0 \uc5f0\uad00\ub418\uc5b4\uc57c \ud560\uae4c\uc694?"),(0,r.kt)("p",null,"\ub610\ud55c \uc74c\uc545\uc774 \uba48\ucd94\uc9c0 \uc54a\uac8c \ud558\ub824\uba74 \uc74c\uc545 \uc791\uc5c5\uc5d0 \uc6b0\uc120\uc21c\uc704\ub97c \uc5b4\ub5bb\uac8c \ubd80\uc5ec\ud574\uc57c \ud560\uae4c\uc694? \uc774\uc640 \ub3d9\uc2dc\uc5d0 \uc2e4\ud589\ud560 \uc74c\uc545 \uc791\uc5c5\uc774 \uc5c6\uc744 \ub54c\ub294 \uc0ac\uc6a9\uc790 \uc778\ud130\ud398\uc774\uc2a4\uc758 \uc2e4\ud589 \uc131\ub2a5\uc744 \uadf9\ub300\ud654\ud558\ub824\uace0 \ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc791\uc5c5, \ud1b5\uc2e0 \uc218\ub2e8 \ubc0f \ub3d9\uae30\ud654\ub97c \ubaa8\ub450 \uac16\ucd98 \uc6b4\uc601 \uccb4\uc81c\ub97c \uc0ac\uc6a9\ud558\uba74 \uc774\ub7ec\ud55c \ubb38\uc81c\ub97c \ubaa8\ub450 \ud574\uacb0\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h2",m({},{id:"rtos"}),"RTOS"),(0,r.kt)("p",null,"\uc2e4\uc2dc\uac04 \uc6b4\uc601 \uccb4\uc81c(RTOS)\ub294 \uac04\ub2e8\ud55c \uc18c\ud504\ud2b8\uc6e8\uc5b4\ub85c\uc11c \ub2e4\uc591\ud55c \uc11c\ube44\uc2a4\ub85c \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uc9c0\uc6d0\ud558\ub294 \ub3d9\uc2dc\uc5d0 \ucef4\ud4e8\ud305 \ub9ac\uc18c\uc2a4\ub97c \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uc791\uc5c5\uc5d0 \ud560\ub2f9\ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"RTOS\ub97c \uc0ac\uc6a9\ud558\uba74 \ub3c5\ub9bd\uc801\uc774\uc9c0\ub9cc \uc11c\ub85c \uc5f0\uacc4\ub41c \uc791\uc5c5\ub4e4\ub85c \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uad6c\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uad6c\uc870\ud654\ub97c \ub9c8\uce5c \uc791\uc5c5\ub4e4\uc740 \ud544\uc694\ud560 \ub54c \uc6b0\uc120\uc21c\uc704\uc5d0 \ub530\ub77c RTOS\ub97c \ud1b5\ud574 \ud568\uaed8 \uc2e4\ud589\ub429\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc791\uc5c5\uc744 \ub192\uc740 \uc6b0\uc120\uc21c\uc704\uc640 \ub0ae\uc740 \uc6b0\uc120\uc21c\uc704\ub85c \ub098\ub20c \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4. \ube14\ub8e8\ud22c\uc2a4 \ub370\uc774\ud130\uac00 \uc218\uc2e0\ub418\uba74 \ub370\uc774\ud130\ub97c \ubc84\ud37c\uc5d0\uc11c \ub9e4\uc6b0 \ube60\ub974\uac8c \uc77d\uc5b4\uc640\uc11c \uc6a9\ub7c9\uc774 \ub354 \ud070 \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \ubc84\ud37c\uc5d0 \uc800\uc7a5\ud574\uc57c \ud55c\ub2e4\uace0 \uac00\uc815\ud558\uaca0\uc2b5\ub2c8\ub2e4. \uc774\ub54c \ub370\uc774\ud130 \ucc98\ub9ac\uac00 \uc7a0\uc2dc \uc9c0\uc5f0\ub420 \uc218 \uc788\uc9c0\ub9cc \uc774\ub7ec\ud55c \ubc29\uc2dd\uc73c\ub85c \uacb0\uad6d \ub450 \uac00\uc9c0 \ube14\ub8e8\ud22c\uc2a4 \uc791\uc5c5\uc744 \ub9c8\uce58\uac8c \ub429\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc608\ub97c \ub4e4\uc5b4 \uc544\ub798\uc640 \uac19\uc774 main\uc5d0\uc11c \ub124 \uac00\uc9c0 \uc791\uc5c5\uc744 \uc2dc\uc791\ud569\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-cpp"}),"int main() {\n  ...\n  os_start_task(gui_task,      medium_priority);\n  os_start_task(music_task,    low_priority);\n  os_start_task(bt_comm_task,  high_priority);\n  os_start_task(bt_appl_task,  low_priority);\n  os_start_scheduler();\n}\n")),(0,r.kt)("p",null,"\uc74c\uc545 \uc791\uc5c5\uc5d0\uc11c\ub3c4 \ube44\uc2b7\ud55c \ubd84\ud560\uc774 \uac00\ub2a5\ud558\uc5ec \ub370\uc774\ud130\ub97c \uc2a4\ud53c\ucee4\uc5d0 \uc804\uc1a1\ud558\ub294 \uc791\uc5c5\uc5d0 \ub192\uc740 \uc6b0\uc120\uc21c\uc704\ub97c, \uadf8\ub9ac\uace0 \uc7ac\uc0dd\ud558\ub294 \ub178\ub798\ub97c \uc81c\uc5b4\ud558\ub294 \uc791\uc5c5\uc774\ub098 \uc0ac\uc6a9\uc790 \uc778\ud130\ud398\uc774\uc2a4\uc5d0 \uc54c\ub9bc\uc744 \uc804\uc1a1\ud558\ub294 \uc791\uc5c5\uc5d0 \ub0ae\uc740 \uc6b0\uc120\uc21c\uc704\ub97c \ubd80\uc5ec\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc704\uc640 \uac19\uc774 \uc6b0\uc120\uc21c\uc704\ub97c \ub2e4\ub974\uac8c \uc0ac\uc6a9\ud558\uba74 \ucc98\ub9ac\ud560 \ub370\uc774\ud130\uac00 \uc788\uc744 \ub54c bt_comm_task\uac00 \uc2e4\ud589\ub418\uace0, \uadf8\ub807\uc9c0 \uc54a\uc744 \ub54c \uc0ac\uc6a9\uc790 \uc778\ud130\ud398\uc774\uc2a4 \uc791\uc5c5\uc774 \uc2e4\ud589\ub429\ub2c8\ub2e4. \uc0ac\uc6a9\uc790 \uc778\ud130\ud398\uc774\uc2a4 \uc791\uc5c5\uc774 \ub514\uc2a4\ud50c\ub808\uc774 \uc2e0\ud638\ub97c \uae30\ub2e4\ub9b4 \ub54c\ub294 \uc6b0\uc120\uc21c\uc704\uac00 \ub0ae\uc740 \uc791\uc5c5 2\uac1c\uac00 \uc2e4\ud589\ub429\ub2c8\ub2e4. \uc6b4\uc601 \uccb4\uc81c \uc2a4\ucf00\uc904\ub7ec\uac00 \uc774\ub7ec\ud55c \uc2dc\uac04 \ubd84\ubc30\ub97c \uc790\ub3d9\uc73c\ub85c \ucc98\ub9ac\ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc77c\ubc18\uc801\uc778 TouchGFX \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0\uc11c\ub294 \uc0ac\uc6a9\uc790 \uc778\ud130\ud398\uc774\uc2a4\uac00 \ubaa8\ub4e0 \ud504\ub808\uc784\uc5d0\uc11c \ub514\uc2a4\ud50c\ub808\uc774 \uc2e0\ud638\ub97c \uae30\ub2e4\ub9b4 \ubfd0\ub9cc \uc544\ub2c8\ub77c \uadf8\ub798\ud53d \uac00\uc18d\uae30\uc778 ChromArt\uac00 \uc694\uc18c \uadf8\ub9ac\uae30\ub97c \ub9c8\uce60 \ub54c\uae4c\uc9c0 \uc8fc\uae30\uc801\uc73c\ub85c \uae30\ub2e4\ub9bd\ub2c8\ub2e4. \uc774\ub294 \uc7a0\uae50\uc529 \uc815\uc9c0\ub418\ub294 \uc77c\uc774 \ub9ce\uace0, \uc774\ub54c \uc6b0\uc120\uc21c\uc704\uac00 \ub0ae\uc740 \uc791\uc5c5\ub4e4\uc774 \uc2e4\ud589\ub41c\ub2e4\ub294 \uac83\uc744 \uc758\ubbf8\ud569\ub2c8\ub2e4. \uc6b0\uc120\uc21c\uc704\uac00 \ub192\uc740 \uc791\uc5c5\ub4e4\uc774 \uae30\ub2e4\ub9b4 \ub54c \uc6b4\uc601 \uccb4\uc81c \uc2a4\ucf00\uc904\ub7ec\uac00 MCU\ub97c \uc790\ub3d9\uc73c\ub85c \ubcc0\uacbd\ud558\uc5ec \uc6b0\uc120\uc21c\uc704\uac00 \ub0ae\uc740 \uc791\uc5c5\ub4e4\uc744 \uc2e4\ud589\ud569\ub2c8\ub2e4."),(0,r.kt)("h3",m({},{id:"task-communication"}),"\uc791\uc5c5 \ud1b5\uc2e0"),(0,r.kt)("p",null,"\ub2e4\uc218\uc758 \uc791\uc5c5\ub4e4\uc744 \uc0ac\uc6a9\ud560 \ub54c\ub294 \uc791\uc5c5 \uc0ac\uc774\uc5d0\uc11c \uc548\uc804\ud558\uac8c \ud1b5\uc2e0\ud560 \uc218 \uc788\ub294 \ubc29\ubc95\ub3c4 \ud544\uc694\ud569\ub2c8\ub2e4. \uac04\ub2e8\ud55c \uc608\ub85c, \uc0ac\uc6a9\uc790 \uc778\ud130\ud398\uc774\uc2a4\uc5d0\uc11c \uc74c\uc545 \uc791\uc5c5\uc73c\ub85c \ud1b5\uc2e0\ud558\ub294 \uacbd\uc6b0\ub97c \ub4e4\uc5b4\ubcf4\uaca0\uc2b5\ub2c8\ub2e4. \uc5ec\uae30\uc5d0\uc11c\ub294 \ub2e4\ub978 \ubb34\uc5c7\ubcf4\ub2e4 gui_task\uac00 \uc74c\uc545 \uc7ac\uc0dd\uc744 \uc2dc\uc791\ud558\ub3c4\ub85d \uc694\uccad\ud560 \ub54c\uae4c\uc9c0 \uc74c\uc545 \uc791\uc5c5\uc774 \uae30\ub2e4\ub824\uc57c \ud569\ub2c8\ub2e4. \uc774\ub54c\ub294 \uba54\uc2dc\uc9c0 \ub300\uae30\uc5f4\uc744 \uc0ac\uc6a9\ud558\uba74 \uac04\ub2e8\ud558\uac8c \ud574\uacb0\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uadf8\ub7ec\uba74 \ub300\uae30\uc5f4\uc5d0 \uba54\uc2dc\uc9c0\uac00 \uc788\uc744 \ub54c\uae4c\uc9c0 \uc74c\uc545 \uc791\uc5c5\uc774 \ub300\uae30\ud569\ub2c8\ub2e4. \uc774\ud6c4 \uba54\uc2dc\uc9c0\uac00 \ub300\uae30\uc5f4\ub85c \uc804\uc1a1\ub418\uace0 \uc6b0\uc120\uc21c\uc704\uac00 \ub354\uc6b1 \ub192\uc740 \uc791\uc5c5\uc774 \uc5c6\uc73c\uba74 \uc2a4\ucf00\uc904\ub7ec\uac00 \uc74c\uc545 \uc791\uc5c5\uc744 \uc2e4\ud589\ud569\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-cpp"}),"   ...\n   music_task_input_queue = os_create_queue(10); //10 element queue\n   ...\n")),(0,r.kt)("p",null,'\uc0ac\uc6a9\uc790 \uc778\ud130\ud398\uc774\uc2a4\uc5d0\uc11c "Play"\ub97c \ub204\ub974\uba74 \uba54\uc2dc\uc9c0\uac00 \uc74c\uc545 \uc791\uc5c5\uc758 \ub300\uae30\uc5f4\ub85c \uc804\uc1a1\ub429\ub2c8\ub2e4.'),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-cpp"}),"void ScreenMusic::handlePlayPressed()\n{\n   os_send_message(music_task_input_queue, play_message);\n}\n")),(0,r.kt)("p",null,"\uc74c\uc545 \uc791\uc5c5\uc740 \ub300\uae30\uc5f4\uc744 \uc77d\uc73c\uba74\uc11c \uba54\uc2dc\uc9c0\ub97c \uae30\ub2e4\ub9bd\ub2c8\ub2e4. \uc774\ub97c \ud1b5\ud574 \uba54\uc2dc\uc9c0\uac00 \uc218\uc2e0\ub420 \ub54c\uae4c\uc9c0 \uc74c\uc545 \uc791\uc5c5\uc774 \ucc28\ub2e8\ub429\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-cpp"}),"...\nMessage message;\nos_receive_message(music_task_input_queue, &message);\n")),(0,r.kt)("p",null,"\uba54\uc2dc\uc9c0\uac00 \uc74c\uc545 \uc791\uc5c5 \ub300\uae30\uc5f4\uc5d0 \ucd94\uac00\ub41c \ud6c4\uc5d0\ub3c4 \uc0ac\uc6a9\uc790 \uc778\ud130\ud398\uc774\uc2a4\ub294 \uacc4\uc18d \uc2e4\ud589\ub418\uc5b4 \ud504\ub808\uc784\uc744 \ucd5c\ub300\ud55c \ube60\ub974\uac8c \ub80c\ub354\ub9c1\ud569\ub2c8\ub2e4. \uc7ac\uc0dd \uba54\uc2dc\uc9c0\ub97c \ubc14\ub85c \ucc98\ub9ac\ud558\ub294 \ub370 \uc2dc\uac04\uc744 \uc18c\ube44\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \uc624\ud788\ub824 \ub80c\ub354\ub9c1\uc774 \uc644\ub8cc\ub418\uc5b4 UI \uc791\uc5c5\uc774 \ub2e4\uc74c \ud504\ub808\uc784\uc744 \ub80c\ub354\ub9c1\ud560 \ub54c\uae4c\uc9c0 \uae30\ub2e4\ub9ac\ub294 \ub3d9\uc548 \uc2a4\ucf00\uc904\ub7ec\uac00 \uc74c\uc545 \uc791\uc5c5\uc73c\ub85c \ubc14\uafd4 \uc2e4\ud589\ud558\uc5ec \uc218\uc2e0\ub418\ub294 \uba54\uc2dc\uc9c0\ub97c \ucc98\ub9ac\ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ub9c8\ucc2c\uac00\uc9c0\ub85c \uc0ac\uc6a9\uc790 \uc778\ud130\ud398\uc774\uc2a4\uc5d0\ub3c4 \uc785\ub825 \ub300\uae30\uc5f4\uc744 \ubd80\uc5ec\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uadf8\ub7ec\uba74 \uc608\ub97c \ub4e4\uc5b4 \ub178\ub798\uac00 \ub05d\ub0ac\uc744 \ub54c \uc74c\uc545 \uc791\uc5c5\uc774 \uc54c\ub9bc \uba54\uc2dc\uc9c0\ub97c \uc804\uc1a1\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc0ac\uc6a9\uc790 \uc778\ud130\ud398\uc774\uc2a4\uac00 \uba54\uc2dc\uc9c0\ub97c \uae30\ub2e4\ub9b4 \ud544\uc694\ub294 \uc5c6\uc9c0\ub9cc \ucc28\ub2e8 \uc5c6\uc774 \uba54\uc2dc\uc9c0 \uc720\ubb34\ub97c \ube60\ub974\uac8c \ud655\uc778\ud558\uc5ec \uba54\uc2dc\uc9c0\ub97c \uc77d\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc774\ub7ec\ud55c \uc124\uc815\uc740 \uc2dc\uc2a4\ud15c\uc5d0\uc11c \uc791\uc5c5 \uc0ac\uc774\uc5d0 \ub9e4\uc6b0 \ub290\uc2a8\ud55c \uc5f0\uacb0\uc744 \uad6c\uc131\ud569\ub2c8\ub2e4. \uc2e4\uc81c\ub85c \uc0ac\uc6a9\uc790 \uc778\ud130\ud398\uc774\uc2a4\ub97c \uc0ac\uc6a9\ud558\uc9c0 \uc54a\uace0 \uc74c\uc545 \uc791\uc5c5\uc744 \ud14c\uc2a4\ud2b8\ud558\uac70\ub098, \ube14\ub8e8\ud22c\uc2a4 \uc791\uc5c5\uc5d0\uc11c\ub3c4 \uc74c\uc545\uc744 \uc190\uc27d\uac8c \uc7ac\uc0dd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h3",m({},{id:"handling-interrupts"}),"\uc778\ud130\ub7fd\ud2b8 \ucc98\ub9ac"),(0,r.kt)("p",null,"\uc791\uc5c5 \uc911\uc5d0\ub294 \uc778\ud130\ub7fd\ud2b8\uc5d0 \ub300\ud55c \uc751\ub2f5\uc73c\ub85c \uc2e4\ud589\ub418\ub294 \uc791\uc5c5\ub3c4 \uc788\ub294\ub370, \ube14\ub8e8\ud22c\uc2a4 \ud1b5\uc2e0 \uc791\uc5c5\ub3c4 \uc5ec\uae30\uc5d0 \ud574\ub2f9\ud569\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4 \ube14\ub8e8\ud22c\uc2a4 \uce69\uc5d0 \uc0c8\ub85c\uc6b4 \ud328\ud0a4\uc9c0\uac00 \uc788\uc744 \ub54c \ube14\ub8e8\ud22c\uc2a4 \ud1b5\uc2e0 \uc791\uc5c5\uc744 \uc2e4\ud589\ud558\ub824\uace0 \ud569\ub2c8\ub2e4. \uc774\ub7ec\ud55c \uacbd\uc6b0\uc5d0 \uc778\ud130\ub7fd\ud2b8\uac00 \ubc1c\uc0dd\ud55c\ub2e4\uace0 \uac00\uc815\ud558\uba74 \uc778\ud130\ub7fd\ud2b8 \ud578\ub4e4\ub7ec\uc5d0\uc11c \uba54\uc2dc\uc9c0\ub97c \ubcf4\ub0bc \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-cpp"}),"void BT_DataAvailable_Handler(void)\n{\n  os_send_message(bt_data_queue, data_available_message);\n}\n")),(0,r.kt)("p",null,"\ub300\uae30\uc5f4 \uc678\uc5d0 \ub2e4\ub978 \ub3d9\uae30\ud654 \uc11c\ube44\uc2a4\ub3c4 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4 \uc138\ub9c8\ud3ec\uc5b4\uc640 \ubba4\ud14d\uc2a4\ub3c4 \uc5ec\ub7ec \uc6b4\uc601 \uccb4\uc81c\uc5d0\uc11c \ubc1c\uacac\ub429\ub2c8\ub2e4."),(0,r.kt)("h3",m({},{id:"freertos"}),"FreeRTOS"),(0,r.kt)("p",null,"TouchGFX\ub294 \uac1c\ubc1c \uacfc\uc815\uc5d0\uc11c FreeRTOS \uc6b4\uc601 \uccb4\uc81c\ub85c \ud14c\uc2a4\ud2b8\ub429\ub2c8\ub2e4. TouchGFX\ub294 \uc694\uad6c \uc0ac\ud56d\uc774 \uac70\uc758 \uc5c6\uc5b4\uc11c \uc5ec\ub7ec \uc6b4\uc601 \uccb4\uc81c\uc5d0\uc11c \uc2e4\ud589\uc774 \uac00\ub2a5\ud558\uc9c0\ub9cc \uad6c\uccb4\uc801\uc778 \uc694\uac74\uc774 \uc5c6\ub2e4\uba74 FreeRTOS\uac00 \uc88b\uc740 \ucd9c\ubc1c\uc810\uc774 \ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"FreeRTOS\ub294 \uc0c1\uc6a9 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0\uc11c \ubb34\ub8cc\ub85c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 \uac04\ub2e8\ud55c \uc6b4\uc601 \uccb4\uc81c\uc785\ub2c8\ub2e4. \uc774 \uc6b4\uc601 \uccb4\uc81c\ub294 STM32Cube \ud38c\uc6e8\uc5b4\uc640 \ud568\uaed8 \uc18c\uc2a4 \ucf54\ub4dc\ub85c \uc81c\uacf5\ub418\uba70, \uc774 \ud38c\uc6e8\uc5b4\uc5d0\ub294 \uc5b8\uc81c\ub4e0\uc9c0 \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 STM32 \ub9c8\uc774\ud06c\ub85c\ucee8\ud2b8\ub864\ub7ec \uc608\uc81c \ucf54\ub4dc\ub3c4 \ud3ec\ud568\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"FreeRTOS\uc5d0 \ub300\ud55c \uc790\uc138\ud55c \ub0b4\uc6a9\uacfc \ub77c\uc774\uc120\uc2a4 \uc870\uac74\uc740 ",(0,r.kt)(a.Z,{to:"https://www.freertos.org/",mdxType:"Link"},"freertos.org"),"\ub97c \ucc38\uc870\ud558\uc2ed\uc2dc\uc624."),(0,r.kt)("h3",m({},{id:"touchgfx-os-wrappers"}),"TouchGFX OS Wrappers"),(0,r.kt)("p",null,"TouchGFX\ub294 \uae30\ubcf8\uc801\uc73c\ub85c FreeRTOS\uc5d0\uc11c \uc2e4\ud589\ub418\uba70, \ub2e8\uc77c \uba54\uc2dc\uc9c0 \ub300\uae30\uc5f4\uc744 \uc0ac\uc6a9\ud574 \ub514\uc2a4\ud50c\ub808\uc774 \ucee8\ud2b8\ub864\ub7ec\uc640 \ub3d9\uae30\ud654\ud558\uace0, \uc138\ub9c8\ud3ec\uc5b4\ub97c \uc0ac\uc6a9\ud574 \ud504\ub808\uc784\ubc84\ud37c\uc5d0 \ub300\ud55c \uc561\uc138\uc2a4\ub97c \ubcf4\ud638\ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc774\uac83\uc744 \ucc98\ub9ac\ud558\ub294 \uac83\uc740 ",(0,r.kt)("inlineCode",{parentName:"p"},"touchgfx/os/OSWrappers.cpp"),"\uc5d0\uc11c \uc815\uc758\ud55c OSWrappers \ud074\ub798\uc2a4\uc785\ub2c8\ub2e4. \uc774 \ud074\ub798\uc2a4\uc5d0\uc11c \uc0ac\uc6a9\ud558\ub294 \uba54\uc18c\ub4dc\ub294 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",m({parentName:"tr"},{align:null}),"\uba54\uc18c\ub4dc"),(0,r.kt)("th",m({parentName:"tr"},{align:null}),"\ud45c\ud604"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"signalVSync()"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"\uc774 \uba54\uc18c\ub4dc\ub294 \ub514\uc2a4\ud50c\ub808\uc774\uac00 \ub2e4\uc74c \ud504\ub808\uc784\uc744 \uc704\ud55c \uc900\ube44\ub97c \ub9c8\ucce4\uc744 \ub54c \ub514\uc2a4\ud50c\ub808\uc774 \ub4dc\ub77c\uc774\ubc84\uc5d0\uc11c \ud638\ucd9c\ub418\uc5b4\uc57c \ud569\ub2c8\ub2e4.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"waitForVSync()"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"\ub300\uae30\ud558\uae30 \uc704\ud574 \uadf8\ub798\ud53d \uc5d4\uc9c4\uc5d0\uc11c \ud638\ucd9c\ub418\uba70, signalVSync\uac00 \ud638\ucd9c\ub420 \ub54c\uae4c\uc9c0 \ubc18\ud658\ud574\uc11c\ub294 \uc548 \ub429\ub2c8\ub2e4.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"isVSyncAvailable()"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"(\uc120\ud0dd \uc0ac\ud56d) VSync\uac00 \ubc1c\uc0dd\ud558\uba74 true\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4. waitForVSync\uc5d0\uc11c\uc758 \ucc28\ub2e8\uc744 \ubc29\uc9c0\ud558\ub294 \ub370 \uc0ac\uc6a9\ub429\ub2c8\ub2e4.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"signalRenderingDone()"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"(\uc120\ud0dd \uc0ac\ud56d) \ub300\uae30 \uc911\uc778 VSync \uc2e0\ud638\ub97c \ubaa8\ub450 \uc81c\uac70\ud569\ub2c8\ub2e4.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"takeFrameBufferSemaphore()"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"\uadf8\ub798\ud53d \uc5d4\uc9c4\uacfc \uac00\uc18d\uae30\uc5d0\uc11c \ud504\ub808\uc784\ubc84\ud37c\uc5d0 \ub300\ud55c \uc9c1\uc811 \uc561\uc138\uc2a4 \uad8c\ud55c\uc744 \uc5bb\uc744 \ubaa9\uc801\uc73c\ub85c \ud638\ucd9c\ub429\ub2c8\ub2e4.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"giveFrameBufferSemaphore()"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"\uc9c1\uc811 \uc561\uc138\uc2a4 \uad8c\ud55c\uc744 \ub2e4\uc2dc \ud574\uc81c\ud560 \ubaa9\uc801\uc73c\ub85c \ud638\ucd9c\ub429\ub2c8\ub2e4.")))),(0,r.kt)("p",null,"\uae30\ubcf8 \uad6c\ud604\uccb4\ub294 \uba54\uc2dc\uc9c0 \ub300\uae30\uc5f4\uc744 \uc0ac\uc6a9\ud574 VSync(\ud504\ub808\uc784) \ub3d9\uae30\ud654\ub97c \uad6c\ud604\ud569\ub2c8\ub2e4. \uadf8\ub798\ud53d \uc5d4\uc9c4 \uc791\uc5c5\uc740 \ub2e4\uc74c VSync\uac00 \uc218\uc2e0\ub420 \ub54c\uae4c\uc9c0 \ub300\uae30\ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc774 OSWrapper \ud074\ub798\uc2a4\ub294 TouchGFX Generator\uc5d0\uc11c \uc0dd\uc131\ub429\ub2c8\ub2e4. Generator\uc5d0 \ub300\ud55c \uc790\uc138\ud55c \ub0b4\uc6a9\uc740 ",(0,r.kt)("a",m({parentName:"p"},{href:"../development/touchgfx-hal-development/touchgfx-generator#real-time-operating-system"}),"\uc5ec\uae30"),"\ub97c \ucc38\uc870\ud558\uc2ed\uc2dc\uc624."),(0,r.kt)("h2",m({},{id:"no-rtos"}),"RTOS \ubbf8\uc0ac\uc6a9"),(0,r.kt)("p",null,"TouchGFX\ub294 \uc6b4\uc601 \uccb4\uc81c \uc5c6\uc774\ub3c4 \uc2e4\ud589\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4. \ub2e4\ub9cc, \uc774\ub54c\ub294 main\uc5d0\uc11c \uc9c1\uc811 \uadf8\ub798\ud53d \uc5d4\uc9c4 \uba54\uc778 \ub8e8\ud504\ub97c \uc2dc\uc791\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-cpp"}),"int main()\n{\n    ...\n    touchgfx::HAL::getInstance()->taskEntry();\n\n    //never returns\n}\n")),(0,r.kt)("p",null,"RTOS\ub97c \uc0ac\uc6a9\ud558\uc9c0 \uc54a\ub294\ub2e4\uace0 \ud574\uc11c TouchGFX\uc758 \uc131\ub2a5\uc774 \ub5a8\uc5b4\uc9c0\ub294 \uac83\uc740 \uc544\ub2d9\ub2c8\ub2e4. \ub2e4\ub9cc MCU \ubd80\ud558\uac00 \uc99d\uac00\ud558\uc5ec TouchGFX\uc640 \ud568\uaed8 \ub2e4\ub978 \uc791\uc5c5\uc744 \uc2e4\ud589\ud558\uae30\uac00 \ub354\uc6b1 \uc5b4\ub824\uc6cc\uc9c8 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc704\uc5d0\uc11c\ub3c4 \uc124\uba85\ud588\uc9c0\ub9cc \uc774\ub54c\ub294 main\uc5d0\uc11c \uc0ac\uc6a9\uc790 \uc778\ud130\ud398\uc774\uc2a4\uac00 \uc2e4\ud589 \uc911\uc77c \ub54c \ub2e4\ub978 \uc791\uc5c5\uc744 \uc218\ub3d9\uc73c\ub85c \uc2e4\ud589\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,r.kt)("h3",m({},{id:"modeltick"}),"Model::tick"),(0,r.kt)("p",null,"\ud55c \uac00\uc9c0 \ubc29\ubc95\uc740 \ubaa8\ub4e0 \ud504\ub808\uc784\ub9c8\ub2e4 \ud55c \ubc88\uc529 Model \ud074\ub798\uc2a4\uc5d0\uc11c \uc791\uc5c5 \ud655\uc778\uc744 \uc218\ud589\ud558\ub294 \uac83\uc785\ub2c8\ub2e4."),(0,r.kt)(l.Z,{mdxType:"CodeHeader"},"Model.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-cpp"}),"void Model::tick()\n{\n   //run other tasks here\n   music_task_tick();\n   bluetooth_task_tick();\n}\n")),(0,r.kt)("p",null,"\uc774 \uba54\uc18c\ub4dc\ub97c \uc0ac\uc6a9\ud558\uba74 \ubaa8\ub4e0 \uc791\uc5c5\uc774 \ud504\ub808\uc784\ub9c8\ub2e4 \ud55c \ubc88\uc529 \uc2e4\ud589\ub429\ub2c8\ub2e4. \uadf8\ub7ec\uba74 \uc791\uc5c5 \uc18c\uc694 \uc2dc\uac04\uc774 \uc0ac\uc6a9\uc790 \uc778\ud130\ud398\uc774\uc2a4\uc758 \ub80c\ub354\ub9c1 \uc2dc\uac04\uc5d0 \ucd94\uac00\ub429\ub2c8\ub2e4. \uac04\ub2e8\ud55c \ubc29\ubc95\uc774\uae30 \ub54c\ubb38\uc5d0 \ubaa8\ub4e0 \uc791\uc5c5\uc774 \ube60\ub974\uac8c \uc885\ub8cc\ub420 \uc218 \uc788\ub294 \ub2e8\uc21c \uc2dc\uc2a4\ud15c\uc774\ub77c\uba74 \uc218\uc6a9\ud560 \ub9cc\ud55c \ud574\uacb0\ucc45\uc785\ub2c8\ub2e4."),(0,r.kt)("h3",m({},{id:"oswrappers"}),"OSWrappers"),(0,r.kt)("p",null,"\uc774 \uc678\uc5d0 OSWrappers \ud074\ub798\uc2a4\uc5d0\uc11c \ud6c4\ud06c\ub97c \uc0ac\uc6a9\ud558\ub294 \ubc29\ubc95\ub3c4 \uc788\uc2b5\ub2c8\ub2e4. \uc704\uc5d0\uc11c \uc124\uba85\ud588\ub4ef\uc774 \uadf8\ub798\ud53d \uc5d4\uc9c4\uc740 \uc774\ubca4\ud2b8\ub97c \uae30\ub2e4\ub824\uc57c \ud560 \ub54c \uc774 \ud074\ub798\uc2a4\uc5d0\uc11c \uba54\uc18c\ub4dc\ub97c \ud638\ucd9c\ud569\ub2c8\ub2e4. \uc774\ubca4\ud2b8\ub97c \uae30\ub2e4\ub9b4 \ub54c \ub2e4\uc74c\uacfc \uac19\uc740 \uba54\uc18c\ub4dc\ub85c \ub2e4\ub978 \uc791\uc5c5\uc744 \uc2e4\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)(l.Z,{mdxType:"CodeHeader"},"OSWrappers.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-cpp"}),"static volatile uint8_t vsync_sem = 0;\n\nvoid OSWrappers::signalVSync()\n{\n    vsync_sem = 1;\n}\n\nvoid OSWrappers::waitForVSync()\n{\n    vsync_sem = 0; //clear the flag, so we wait for the next vsync\n    do {\n        // Perform other work while waiting\n        music_task_tick();\n        bluetooth_task_tick();\n    } while(!vsync_sem);\n}\n")),(0,r.kt)("p",null,"\uc774 \uba54\uc18c\ub4dc\ub97c \uc0ac\uc6a9\ud558\uba74 \ub2e4\ub978 \uc791\uc5c5\uc5d0\uc11c \ud504\ub808\uc784 \uac04 \uc720\ud734 \uc791\uc5c5\uc744 \ubaa8\ub450 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc9c0\ub9cc \uc791\uc5c5\uc5d0 \uc18c\uc694\ub418\ub294 \uc2dc\uac04\uc5d0\ub294 \ucc28\uc774\uac00 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uadf8 \ubc16\uc5d0 OSWrappers::isVSyncAvailable \ud568\uc218\uc640 OSWrappers::signalRenderingDone \ud568\uc218\ub97c \uc0ac\uc6a9\ud558\ub294 \ubc29\ubc95\ub3c4 \uc788\uc2b5\ub2c8\ub2e4. \uc774 \uacbd\uc6b0 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc774 \ub2e4\uc218\uc758 while-\ub8e8\ud504\ub97c \ud53c\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub450 \ud568\uc218\ub294 \uc6b4\uc601 \uccb4\uc81c\uac00 \uc5c6\ub294 \uad6c\uc131\uc744 \uc120\ud0dd\ud588\uc744 \ub54c TouchGFX Generator\uc5d0\uc11c \uc0ac\uc6a9\ub429\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc774\ub54c\ub294 \uc791\uc5c5\uc744 1\ubc00\ub9ac\ucd08 \uc815\ub3c4\uc758 \ub2e8\uacc4\ub85c \uc138\ubd84\ud654\ud558\uc5ec \ub098\ub20c \uc218 \uc788\ub2e4\ub294 \uc810\uc774 \uc911\uc694\ud569\ub2c8\ub2e4. \uadf8\ub807\uc9c0 \uc54a\uc73c\uba74 \uc0ac\uc6a9\uc790 \uc778\ud130\ud398\uc774\uc2a4\uc758 \uc131\ub2a5\uc774 \ub5a8\uc5b4\uc9c0\uae30 \ub54c\ubb38\uc785\ub2c8\ub2e4."))}b.isMDXComponent=!0}}]);