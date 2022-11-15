"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[1101],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),m=p(n),d=i,h=m["".concat(u,".").concat(d)]||m[d]||s[d]||o;return n?r.createElement(h,l(l({ref:t},c),{},{components:n})):r.createElement(h,l({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=m;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:i,l[1]=a;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},70814:function(e,t,n){var r=n(67294),i=n(88678);const o=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},r.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}));class l extends r.Component{render(){return r.createElement(i.Z,{color:"var(--highlight-color-caution)",header:"Caution",type:"caution",icon:o},this.props.children)}}t.Z=l},44035:function(e,t,n){var r=n(67294),i=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,o=e.height,l=(0,i.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:l,target:"_blank"},r.createElement("img",{width:n,height:o,src:l})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:l,target:"_blank"},r.createElement("img",{width:n,height:o,src:l})),r.createElement("p",null,e.children))}},88678:function(e,t,n){var r=n(67294);class i extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{className:e},r.createElement("div",{className:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{className:"highlight-content"},this.props.children))}}t.Z=i},83068:function(e,t,n){n.r(t),n.d(t,{assets:function(){return k},contentTitle:function(){return g},default:function(){return w},frontMatter:function(){return h},metadata:function(){return f},toc:function(){return v}});var r=n(3905),i=n(70814),o=n(44035),l=Object.defineProperty,a=Object.defineProperties,u=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&m(e,n,t[n]);if(p)for(var n of p(t))s.call(t,n)&&m(e,n,t[n]);return e};const h={id:"file-menu",title:"File Menu"},g=void 0,f={unversionedId:"development/ui-development/designer-user-guide/file-menu",id:"development/ui-development/designer-user-guide/file-menu",title:"File Menu",description:"",source:"@site/docs/development/ui-development/designer-user-guide/file-menu.mdx",sourceDirName:"development/ui-development/designer-user-guide",slug:"/development/ui-development/designer-user-guide/file-menu",permalink:"/4.20/docs/development/ui-development/designer-user-guide/file-menu",draft:!1,tags:[],version:"current",frontMatter:{id:"file-menu",title:"File Menu"},sidebar:"docs",previous:{title:"Lobby",permalink:"/4.20/docs/development/ui-development/designer-user-guide/startup-window"},next:{title:"Main Window",permalink:"/4.20/docs/development/ui-development/designer-user-guide/main-window"}},k={},v=[{value:"File",id:"file",level:2},{value:"Edit",id:"edit",level:2},{value:"Help",id:"help",level:2}],b={toc:v};function w(e){var t,n=e,{components:l}=n,m=((e,t)=>{var n={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&p)for(var r of p(e))t.indexOf(r)<0&&s.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=d(d({},b),m),a(t,u({components:l,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"The File Menu of TouchGFX Designer consists of a ",(0,r.kt)("a",d({parentName:"p"},{href:"#file"}),"File"),"-, ",(0,r.kt)("a",d({parentName:"p"},{href:"#edit"}),"Edit"),"- and ",(0,r.kt)("a",d({parentName:"p"},{href:"#help"}),"Help")," menu item."),(0,r.kt)("h2",d({},{id:"file"}),"File"),(0,r.kt)(o.Z,{imageSource:"/img/development/ui-development/designer-user-guide/file-menu/designer-file-menu-file-4.17.png",mdxType:"Figure"},"File menu item in File Menu"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"New"),(0,r.kt)("br",null),"\nClicking the New button, will open the ",(0,r.kt)("a",d({parentName:"p"},{href:"startup-window"}),"Lobby"),", where a new project can be created."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Open"),(0,r.kt)("br",null),"\nClicking the Open button, will open a file explorer, allowing for navigation to and loading of a TouchGFX Designer project file (.touchgfx)"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Save"),(0,r.kt)("br",null),"\nClicking the Save button, will save the project that is currently open, into its TouchGFX Designer project.",(0,r.kt)("br",null),"\nThe project is also saved when running the simulator, flashing to target and generating code."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Switch to Dark theme"),(0,r.kt)("br",null),"\nClicking the Switch to Dark theme button will change the theme of the TouchGFX Designer to a dark theme."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Recent"),(0,r.kt)("br",null),"\nHovering/clicking the Recent button, will reveal the projects that have most recently been created, opened or modified, clicking any of these will load that project."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Exit"),(0,r.kt)("br",null),"\nClicking the Exit button, will shutdown the TouchGFX Designer."),(0,r.kt)("h2",d({},{id:"edit"}),"Edit"),(0,r.kt)(o.Z,{imageSource:"/img/development/ui-development/designer-user-guide/file-menu/designer-file-menu-edit-4.17.png",mdxType:"Figure"},"Edit menu item in File Menu"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Undo"),(0,r.kt)("br",null),"\nClicking the Undo button, will undo changes made in the ",(0,r.kt)("a",d({parentName:"p"},{href:"canvas-view"}),"Canvas View"),". This button may be grayed out if there are no changes to undo, or the Canvas View is not currently selected."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Redo"),(0,r.kt)("br",null),"\nClicking the Redo button, will redo changes made in the ",(0,r.kt)("a",d({parentName:"p"},{href:"canvas-view"}),"Canvas View"),". This button may be grayed out if there are no changes to redo, or the Canvas View is not currently selected."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Select All"),(0,r.kt)("br",null),"\nClicking the Select All button, will select all widgets added to the Screen or Custom Container that is currently visible in the ",(0,r.kt)("a",d({parentName:"p"},{href:"canvas-view"}),"Canvas View"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Copy"),(0,r.kt)("br",null),"\nClicking the Copy button, will add the Widget, Screen or Custom Container that is currently selected in the ",(0,r.kt)("a",d({parentName:"p"},{href:"canvas-view"}),"Canvas View"),", to the copy/paste buffer."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Paste"),(0,r.kt)("br",null),"\nClicking the Paste button, will paste the Widget, Screen or Custom Container that is currently in the copy/paste buffer. Paste is not available if no object has been copied."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Delete"),(0,r.kt)("br",null),"\nClicking the Delete button, will delete the Widget, Screen or Custom Container that is currently selected in the ",(0,r.kt)("a",d({parentName:"p"},{href:"canvas-view"}),"Canvas View"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Import GUI"),(0,r.kt)("br",null),"\nClicking the Import Gui button, will open the Import GUI window."),(0,r.kt)(o.Z,{imageSource:"/img/development/ui-development/designer-user-guide/file-menu/designer-file-menu-import-gui-4.17.png",mdxType:"Figure"},"Import UI window in TouchGFX Designer"),(0,r.kt)("p",null,"Here a UI can be imported into the project that is currently open. A UI can be chosen from the Examples and Demo's provided by STMicroelectronics, or by clicking 'Browse' allowing for selection of a TouchGFX Designer project (.touchgfx) to be imported into the current project."),(0,r.kt)(i.Z,{mdxType:"Caution"},"Importing a UI will overwrite the UI that is already present in a project"),(0,r.kt)("h2",d({},{id:"help"}),"Help"),(0,r.kt)(o.Z,{imageSource:"/img/development/ui-development/designer-user-guide/file-menu/designer-file-menu-help-4.17.png",mdxType:"Figure"},"Help menu item in File Menu"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Documentation"),(0,r.kt)("br",null),"\nClicking the Documentation button, will open ",(0,r.kt)("a",d({parentName:"p"},{href:"https://support.touchgfx.com"}),"https://support.touchgfx.com")," in your operating systems default browser."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Q&A"),(0,r.kt)("br",null),"\nClicking the Q&A button, will open ",(0,r.kt)("a",d({parentName:"p"},{href:"https://community.st.com/touchgfx"}),"https://community.st.com/touchgfx")," in your operating systems default browser."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Request Feature"),(0,r.kt)("br",null),"\nClicking the Request Feature button, will open ",(0,r.kt)("a",d({parentName:"p"},{href:"https://community.st.com/s/ideazone"}),"https://community.st.com/s/ideazone")," in your operating systems default browser."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Keyboard Shortcuts"),(0,r.kt)("br",null),"\nClicking the Keyboard Shortcuts button, will open ",(0,r.kt)("a",d({parentName:"p"},{href:"https://support.touchgfx.com/docs/development/ui-development/working-with-touchgfx/keyboard-shortcuts"}),"https://support.touchgfx.com/docs/development/ui-development/working-with-touchgfx/keyboard-shortcuts")," in your operating systems default browser."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"About"),(0,r.kt)("br",null),"\nClicking the About button, will open a window containing the Software License Agreement."))}w.isMDXComponent=!0}}]);