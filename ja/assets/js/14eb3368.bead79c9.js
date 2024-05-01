"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[9817,7918],{43786:function(e,t,r){r.d(t,{Z:function(){return j}});var n=r(67294),a=r(86010),i=r(83631),o=r(99492),l=r(3044),c=r(39130),s=r(25026),m=r(33084),u=Object.defineProperty,d=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,f=(e,t,r)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;function v(e){return n.createElement("svg",((e,t)=>{for(var r in t||(t={}))b.call(t,r)&&f(e,r,t[r]);if(d)for(var r of d(t))p.call(t,r)&&f(e,r,t[r]);return e})({viewBox:"0 0 24 24"},e),n.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}var h={breadcrumbsContainer:"breadcrumbsContainer_Z_bl",breadcrumbHomeIcon:"breadcrumbHomeIcon_OVgt"},g=Object.defineProperty,E=Object.defineProperties,y=Object.getOwnPropertyDescriptors,O=Object.getOwnPropertySymbols,N=Object.prototype.hasOwnProperty,Z=Object.prototype.propertyIsEnumerable,w=(e,t,r)=>t in e?g(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;function k({children:e,href:t,isLast:r}){const a="breadcrumbs__link";return r?n.createElement("span",{className:a,itemProp:"name"},e):t?n.createElement(c.Z,{className:a,href:t,itemProp:"item"},n.createElement("span",{itemProp:"name"},e)):n.createElement("span",{className:a},e)}function P({children:e,active:t,index:r,addMicrodata:i}){return n.createElement("li",(o=((e,t)=>{for(var r in t||(t={}))N.call(t,r)&&w(e,r,t[r]);if(O)for(var r of O(t))Z.call(t,r)&&w(e,r,t[r]);return e})({},i&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"}),l={className:(0,a.Z)("breadcrumbs__item",{"breadcrumbs__item--active":t})},E(o,y(l))),e,n.createElement("meta",{itemProp:"position",content:String(r+1)}));var o,l}function _(){const e=(0,s.Z)("/");return n.createElement("li",{className:"breadcrumbs__item"},n.createElement(c.Z,{"aria-label":(0,m.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:(0,a.Z)("breadcrumbs__link",h.breadcrumbsItemLink),href:e},n.createElement(v,{className:h.breadcrumbHomeIcon})))}function j(){const e=(0,o.s1)(),t=(0,l.Ns)();return e?n.createElement("nav",{className:(0,a.Z)(i.k.docs.docBreadcrumbs,h.breadcrumbsContainer),"aria-label":(0,m.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},n.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&n.createElement(_,null),e.map(((t,r)=>{const a=r===e.length-1;return n.createElement(P,{key:r,active:a,index:r,addMicrodata:!!t.href},n.createElement(k,{href:t.href,isLast:a},t.label))})))):null}},84541:function(e,t,r){r.d(t,{Z:function(){return h}});var n=r(67294),a=r(86010),i=r(99492),o=r(39130),l=r(35096),c=r(33084),s="cardContainer_fWXF",m="cardTitle_rnsV",u="cardDescription_PWke";function d({href:e,children:t}){return n.createElement(o.Z,{href:e,className:(0,a.Z)("card padding--lg",s)},t)}function b({href:e,icon:t,title:r,description:i}){return n.createElement(d,{href:e},n.createElement("h2",{className:(0,a.Z)("text--truncate",m),title:r},t," ",r),i&&n.createElement("p",{className:(0,a.Z)("text--truncate",u),title:i},i))}function p({item:e}){const t=(0,i.Wl)(e);return t?n.createElement(b,{href:t,icon:"\ud83d\uddc3\ufe0f",title:e.label,description:(0,c.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e.items.length})}):null}function f({item:e}){var t;const r=(0,l.Z)(e.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,i.xz)(null!=(t=e.docId)?t:void 0);return n.createElement(b,{href:e.href,icon:r,title:e.label,description:null==a?void 0:a.description})}function v({item:e}){switch(e.type){case"link":return n.createElement(f,{item:e});case"category":return n.createElement(p,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}function h({items:e,className:t}){return n.createElement("section",{className:(0,a.Z)("row",t)},function(e){return e.filter((e=>"category"!==e.type||!!(0,i.Wl)(e)))}(e).map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(v,{item:e})))))}},84007:function(e,t,r){r.r(t),r.d(t,{default:function(){return w}});var n=r(67294),a=r(94469),i=r(99492),o=r(25026),l=r(84541),c=r(30106),s=r(48704),m=r(3560),u=r(43786),d=r(55199),b="generatedIndexPage_vN6x",p="list_eTzJ",f="title_kItE",v=Object.defineProperty,h=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable,y=(e,t,r)=>t in e?v(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,O=(e,t)=>{for(var r in t||(t={}))g.call(t,r)&&y(e,r,t[r]);if(h)for(var r of h(t))E.call(t,r)&&y(e,r,t[r]);return e};function N({categoryGeneratedIndex:e}){return n.createElement(a.d,{title:e.title,description:e.description,keywords:e.keywords,image:(0,o.Z)(e.image)})}function Z({categoryGeneratedIndex:e}){const t=(0,i.jA)();return n.createElement("div",{className:b},n.createElement(s.Z,null),n.createElement(u.Z,null),n.createElement(m.Z,null),n.createElement("header",null,n.createElement(d.Z,{as:"h1",className:f},e.title),e.description&&n.createElement("p",null,e.description)),n.createElement("article",{className:"margin-top--lg"},n.createElement(l.Z,{items:t.items,className:p})),n.createElement("footer",{className:"margin-top--lg"},n.createElement(c.Z,{previous:e.navigation.previous,next:e.navigation.next})))}function w(e){return n.createElement(n.Fragment,null,n.createElement(N,O({},e)),n.createElement(Z,O({},e)))}},30106:function(e,t,r){r.d(t,{Z:function(){return h}});var n=r(67294),a=r(33084),i=r(86010),o=r(39130);function l(e){const{permalink:t,title:r,subLabel:a,isNext:l}=e;return n.createElement(o.Z,{className:(0,i.Z)("pagination-nav__link",l?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},a&&n.createElement("div",{className:"pagination-nav__sublabel"},a),n.createElement("div",{className:"pagination-nav__label"},r))}var c=Object.defineProperty,s=Object.defineProperties,m=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,f=(e,t)=>{for(var r in t||(t={}))d.call(t,r)&&p(e,r,t[r]);if(u)for(var r of u(t))b.call(t,r)&&p(e,r,t[r]);return e},v=(e,t)=>s(e,m(t));function h(e){const{previous:t,next:r}=e;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,a.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},t&&n.createElement(l,v(f({},t),{subLabel:n.createElement(a.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),r&&n.createElement(l,v(f({},r),{subLabel:n.createElement(a.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}},3560:function(e,t,r){r.d(t,{Z:function(){return c}});var n=r(67294),a=r(86010),i=r(33084),o=r(83631),l=r(92879);function c({className:e}){const t=(0,l.E)();return t.badge?n.createElement("span",{className:(0,a.Z)(e,o.k.docs.docVersionBadge,"badge badge--secondary")},n.createElement(i.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:t.label}},"Version: {versionLabel}")):null}},55199:function(e,t,r){r.d(t,{Z:function(){return g}});var n=r(67294),a=r(86010),i=r(33084),o=r(57343),l="anchorWithStickyNavbar_LWe7",c="anchorWithHideOnScrollNavbar_WYt5",s=Object.defineProperty,m=Object.defineProperties,u=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,f=(e,t,r)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,v=(e,t)=>{for(var r in t||(t={}))b.call(t,r)&&f(e,r,t[r]);if(d)for(var r of d(t))p.call(t,r)&&f(e,r,t[r]);return e},h=(e,t)=>m(e,u(t));function g(e){var t=e,{as:r,id:s}=t,m=((e,t)=>{var r={};for(var n in e)b.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&d)for(var n of d(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r})(t,["as","id"]);const{navbar:{hideOnScroll:u}}=(0,o.L)();return"h1"!==r&&s?n.createElement(r,h(v({},m),{className:(0,a.Z)("anchor",u?c:l),id:s}),m.children,n.createElement("a",{className:"hash-link",href:`#${s}`,title:(0,i.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):n.createElement(r,h(v({},m),{id:void 0}))}},48704:function(e,t,r){r.d(t,{Z:function(){return O}});var n=r(67294),a=r(86010),i=r(11368),o=r(39130),l=r(33084),c=r(2686),s=r(83631),m=r(74742),u=r(92879),d=Object.defineProperty,b=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,v=(e,t,r)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;const h={unreleased:function({siteTitle:e,versionMetadata:t}){return n.createElement(l.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:e,versionLabel:n.createElement("b",null,t.label)}},"This is unreleased documentation for TouchGFX {versionLabel} version.")},unmaintained:function({siteTitle:e,versionMetadata:t}){return n.createElement(l.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:e,versionLabel:n.createElement("b",null,t.label)}},"This is documentation for TouchGFX {versionLabel}, which is no longer actively maintained.")}};function g(e){const t=h[e.versionMetadata.banner];return n.createElement(t,((e,t)=>{for(var r in t||(t={}))p.call(t,r)&&v(e,r,t[r]);if(b)for(var r of b(t))f.call(t,r)&&v(e,r,t[r]);return e})({},e))}function E({to:e,onClick:t}){return n.createElement(l.Z,{id:"touchgfx.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{latestVersionLink:n.createElement("b",null,n.createElement(o.Z,{to:e,onClick:t,autoAddBaseUrl:!1},n.createElement(l.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink}.")}function y({className:e,versionMetadata:t}){const{siteConfig:{title:r,url:z}}=(0,i.Z)(),{pluginId:o}=(0,c.gA)({failfast:!0}),{savePreferredVersionName:l}=(0,m.J)(o),{latestVersionSuggestion:u}=(0,c.Jo)(o),{activeDoc:d}=(0,c.Iw)(o);return n.createElement("div",{id:"doc-version-banner-identifier",className:(0,a.Z)(e,s.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(g,{siteTitle:r,versionMetadata:t})),n.createElement("div",{className:"margin-top--md"},n.createElement(E,{to:`${z}/docs/${d.id}`,onClick:()=>l(u.name)})))}function O({className:e}){const t=(0,u.E)();return t.banner?n.createElement(y,{className:e,versionMetadata:t}):null}}}]);