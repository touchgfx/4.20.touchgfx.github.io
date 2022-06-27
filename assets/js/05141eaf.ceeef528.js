"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[4735],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),h=s(n),d=o,g=h["".concat(l,".").concat(d)]||h[d]||p[d]||a;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=h;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},70814:function(e,t,n){var r=n(67294),o=n(88678);const a=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},r.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}));class i extends r.Component{render(){return r.createElement(o.Z,{color:"var(--highlight-color-caution)",header:"Caution",type:"caution",icon:a},this.props.children)}}t.Z=i},44035:function(e,t,n){var r=n(67294),o=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,a=e.height,i=(0,o.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:i,target:"_blank"},r.createElement("img",{width:n,height:a,src:i})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:i,target:"_blank"},r.createElement("img",{width:n,height:a,src:i})),r.createElement("p",null,e.children))}},88678:function(e,t,n){var r=n(67294);class o extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{className:e},r.createElement("div",{className:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{className:"highlight-content"},this.props.children))}}t.Z=o},82985:function(e,t,n){var r=n(67294);class o extends r.Component{render(){return r.createElement("code",{className:"shortcut"},this.props.children)}}t.Z=o},56562:function(e,t,n){n.r(t),n.d(t,{assets:function(){return w},contentTitle:function(){return f},default:function(){return x},frontMatter:function(){return m},metadata:function(){return v},toc:function(){return y}});var r=n(3905),o=n(44035),a=n(70814),i=n(82985),c=Object.defineProperty,l=Object.defineProperties,s=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,g=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&d(e,n,t[n]);if(u)for(var n of u(t))h.call(t,n)&&d(e,n,t[n]);return e};const m={id:"updating-to-a-new-touchgfx-version",title:"Updating to a new TouchGFX Version"},f=void 0,v={unversionedId:"miscellaneous/updating-to-a-new-touchgfx-version",id:"miscellaneous/updating-to-a-new-touchgfx-version",title:"Updating to a new TouchGFX Version",description:"",source:"@site/docs/miscellaneous/updating-to-a-new-touchgfx-version.mdx",sourceDirName:"miscellaneous",slug:"/miscellaneous/updating-to-a-new-touchgfx-version",permalink:"/4.20/docs/miscellaneous/updating-to-a-new-touchgfx-version",tags:[],version:"current",frontMatter:{id:"updating-to-a-new-touchgfx-version",title:"Updating to a new TouchGFX Version"},sidebar:"docs",previous:{title:"Miscellaneous",permalink:"/4.20/docs/category/miscellaneous-1"},next:{title:"Getting Help",permalink:"/4.20/docs/miscellaneous/getting-help"}},w={},y=[{value:"Update TouchGFX Generator",id:"update-touchgfx-generator",level:2}],b={toc:y};function x(e){var t,n=e,{components:c}=n,d=((e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&u)for(var r of u(e))t.indexOf(r)<0&&h.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=g(g({},b),d),l(t,s({components:c,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"When a TouchGFX Designer application is created, the .touchgfx project file created will have the same version as the TouchGFX version used to create the application. But this does not mean that you are only able to use that specific version of TouchGFX to further develop your application."),(0,r.kt)("p",null,"TouchGFX is backwards-compatible by design and in most cases it requires a very simple procedure to make an older versioned application work with a new version of TouchGFX."),(0,r.kt)("p",null,"Simply open your newly installed version of TouchGFX Designer and try to open your older application either through recent applications or the Open dialog. You will be greeted with the following popup:"),(0,r.kt)(o.Z,{imageSource:"/img/miscellaneous/updating-to-a-new-touchgfx-version/update-popup-4-17.png",mdxType:"Figure"},"Update popup"),(0,r.kt)(a.Z,{mdxType:"Caution"},"As stated in the popup, it is recommended to always have a backup of your application before running the updater."),(0,r.kt)("p",null,"Press 'Yes' and the updater will start. After it is finished, the application will open as normal in TouchGFX Designer and you are ready to use the new version."),(0,r.kt)("p",null,"In rare cases, you will have to do some manual changes to an application to make it fully updated to a new TouchGFX version. Consult the ",(0,r.kt)("a",g({parentName:"p"},{href:"known-issues"}),"Known Issues section")," if you are having additional problems updating an application to a new version."),(0,r.kt)("h2",g({},{id:"update-touchgfx-generator"}),"Update TouchGFX Generator"),(0,r.kt)("p",null,"After installing X-Cube-TouchGFX-4.17.0 in STM32CubeMX 6.2.1 or later by following ",(0,r.kt)("a",g({parentName:"p"},{href:"../introduction/installation#installing-touchgfx-generator-in-stm32cubemx"}),"Installing TouchGFX Generator in STM32CubeMX")," open the project and navigate to ",(0,r.kt)("inlineCode",{parentName:"p"},"Software Packs")," -> ",(0,r.kt)("inlineCode",{parentName:"p"},"Select Components")," (or press ",(0,r.kt)(i.Z,{mdxType:"Shortcut"},"Alt + U"),")"),(0,r.kt)(o.Z,{imageSource:"/img/miscellaneous/migrate-x-cube-touchgfx/migrate-x-cube-touchgfx.png",mdxType:"Figure"},"Software Pack Component Selector"),(0,r.kt)("p",null,"In the details and warnings pane select the version to migrate to and press try. STM32CubeMX will perform a trail migration and present the result, some refparameters are not able to be migrated to the new version and therefore will be presented as null values. Select accept to save the migration and then press OK to close the Software Pack Component Selector window."),(0,r.kt)(o.Z,{imageSource:"/img/miscellaneous/migrate-x-cube-touchgfx/migrate-x-cube-touchgfx-migrate-to.png",mdxType:"Figure"},"Software Pack Component Selector : Migrate Parameters for TouchGFX Generator"),(0,r.kt)("p",null,"Now TouchGFX Generator is migrated to the new version and the changes are saved in the .ioc file. Please validate the configuration of TouchGFX Generator before generating code with STM32CubeMX. After generating code with STM32CubeMX open TouchGFX Designer and validate the ui before generating code from TouchGFX Designer."),(0,r.kt)(a.Z,{mdxType:"Caution"},(0,r.kt)("li",null,"The migration is a two step process to update TouchGFX to the new version. It requires code generation from both STM32CubeMX and TouchGFX Designer."),(0,r.kt)("li",null,"C++ code provided by TouchGFX Generator is first written to disk after the Generate Code button in STM32CubeMX has been pressed.")))}x.isMDXComponent=!0}}]);