"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[7918],{48704:function(e,t,n){var a=n(67294),i=n(11368),o=n(39130),r=n(33084),s=n(88773),l=n(39670),c=Object.defineProperty,u=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,b=(e,t,n)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const v={unreleased:function({siteTitle:e,versionMetadata:t}){return a.createElement(r.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:e,versionLabel:a.createElement("b",null,t.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function({siteTitle:e,versionMetadata:t}){return a.createElement(r.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:e,versionLabel:a.createElement("b",null,t.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function h(e){const t=v[e.versionMetadata.banner];return a.createElement(t,((e,t)=>{for(var n in t||(t={}))d.call(t,n)&&b(e,n,t[n]);if(u)for(var n of u(t))m.call(t,n)&&b(e,n,t[n]);return e})({},e))}function f({to:e,onClick:t}){return a.createElement(r.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{latestVersionLink:a.createElement("b",null,a.createElement(o.Z,{to:e,onClick:t},a.createElement(r.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink}.")}function p({versionMetadata:e}){const{siteConfig:{title:t,url:n,customFields:o}}=(0,i.Z)(),{pluginId:r}=(0,s.gA)({failfast:!0}),{savePreferredVersionName:c}=(0,l.J)(r),{latestVersionSuggestion:u}=(0,s.Jo)(r),[d,m]=(0,a.useState)([]);(0,a.useEffect)((()=>{fetch("/newestVersion.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){return e.json()})).then((function(e){m(e)}))}),[]);return void 0===d[0]||d[0]===u.label?a.createElement(a.Fragment,null):a.createElement("div",{className:"alert alert--warning margin-bottom--md",role:"alert"},a.createElement("div",null,a.createElement(h,{siteTitle:t,versionMetadata:e})),a.createElement("div",{className:"margin-top--md"},a.createElement(f,{to:n,onClick:()=>c(u.name)})))}t.Z=function({versionMetadata:e}){return a.createElement(p,{versionMetadata:e})}}}]);