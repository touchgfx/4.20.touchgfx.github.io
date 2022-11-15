"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[5188],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=o,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||i;return n?r.createElement(h,a(a({ref:t},d),{},{components:n})):r.createElement(h,a({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},44035:function(e,t,n){var r=n(67294),o=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,i=e.height,a=(0,o.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:a,target:"_blank"},r.createElement("img",{width:n,height:i,src:a})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:a,target:"_blank"},r.createElement("img",{width:n,height:i,src:a})),r.createElement("p",null,e.children))}},82985:function(e,t,n){var r=n(67294);class o extends r.Component{render(){return r.createElement("code",{className:"shortcut"},this.props.children)}}t.Z=o},31149:function(e,t,n){n.r(t),n.d(t,{assets:function(){return w},contentTitle:function(){return g},default:function(){return T},frontMatter:function(){return h},metadata:function(){return b},toc:function(){return k}});var r=n(3905),o=n(44035),i=n(82985),a=Object.defineProperty,l=Object.defineProperties,s=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))d.call(t,n)&&c(e,n,t[n]);if(p)for(var n of p(t))u.call(t,n)&&c(e,n,t[n]);return e};const h={id:"startup-window",title:"Lobby"},g=void 0,b={unversionedId:"development/ui-development/designer-user-guide/startup-window",id:"development/ui-development/designer-user-guide/startup-window",title:"Lobby",description:"",source:"@site/docs/development/ui-development/designer-user-guide/startup-window.mdx",sourceDirName:"development/ui-development/designer-user-guide",slug:"/development/ui-development/designer-user-guide/startup-window",permalink:"/4.20/docs/development/ui-development/designer-user-guide/startup-window",draft:!1,tags:[],version:"current",frontMatter:{id:"startup-window",title:"Lobby"},sidebar:"docs",previous:{title:"Designer User Guide",permalink:"/4.20/docs/category/designer-user-guide"},next:{title:"File Menu",permalink:"/4.20/docs/development/ui-development/designer-user-guide/file-menu"}},w={},k=[{value:"Home",id:"home",level:2},{value:"Create",id:"create",level:2},{value:"Examples",id:"examples",level:2},{value:"Demos",id:"demos",level:2}],f={toc:k};function T(e){var t,n=e,{components:a}=n,c=((e,t)=>{var n={};for(var r in e)d.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&p)for(var r of p(e))t.indexOf(r)<0&&u.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=m(m({},f),c),l(t,s({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"The Lobby is the first window that is presented when starting the TouchGFX Designer. From the Lobby new projects can be created, demo projects can be explored and existing projects can be opened from.",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"p"},"The Lobby can also be entered from a opened project by pressing the TouchGFX icon, in the top left corner, or by pressing")," ",(0,r.kt)(i.Z,{mdxType:"Shortcut"},"CTRL + N"),".",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"p"},"Creating a project from an opened project results in an new instance of the TouchGFX Designer being opened.")),(0,r.kt)("p",null,"When running the TouchGFX Designer for the first time the welcome pop-up and an option to select between ",(0,r.kt)("a",m({parentName:"p"},{href:"main-window#theme"}),"light and dark theme")," will appear before entering the Lobby."),(0,r.kt)(o.Z,{imageSource:"/img/development/ui-development/designer-user-guide/startup-window/designer-lobby-welcome-pop-up.png",width:"630",height:"455",mdxType:"Figure"},"Welcome pop-up"),(0,r.kt)(o.Z,{imageSource:"/img/development/ui-development/designer-user-guide/startup-window/designer-lobby-theme-selector-pop-up.png",width:"630",height:"420",mdxType:"Figure"},"Theme selector pop-up"),(0,r.kt)("h2",m({},{id:"home"}),"Home"),(0,r.kt)("p",null,"In the Home tab new projects based on recently used TouchGFX Board Setups (TBS) can be created and projects can be opend."),(0,r.kt)(o.Z,{imageSource:"/img/development/ui-development/designer-user-guide/startup-window/designer-lobby-home.png",mdxType:"Figure"},"The Home tab in the Lobby"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Recently used TouchGFX Board Setups"),(0,r.kt)("br",null),"\nIn this section the TBS that are used in the most recent projects can be selected, and be used for creating a new project combined with Blank UI. Selecting a TBS presents the same options as selecting a TBS under ",(0,r.kt)("a",m({parentName:"p"},{href:"#create"}),"Create"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"My Recent Projects"),(0,r.kt)("br",null),"\nThis section allows users to quickly open a recent project."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Open"),(0,r.kt)("br",null),"\nPressing the Open button opens a file browser allowing for manual navigation and opening of a .touchgfx project file."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Create New"),(0,r.kt)("br",null),"\nPressing the Create New button changes the tab in the Lobby from Home to Create."),(0,r.kt)("h2",m({},{id:"create"}),"Create"),(0,r.kt)("p",null,"In the Create tab, TBS can be selected to use for a new project, combined with the Blank UI."),(0,r.kt)(o.Z,{imageSource:"/img/development/ui-development/designer-user-guide/startup-window/designer-lobby-create.png",mdxType:"Figure"},"The Create tab in the Lobby"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Searchbar"),(0,r.kt)("br",null),"\nThe Searchbar is used for filtering the TBS by the name of a board."),(0,r.kt)(o.Z,{imageSource:"/img/development/ui-development/designer-user-guide/startup-window/designer-lobby-create-searchbar.png",mdxType:"Figure"},"The Searchbar"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Producer Filter"),(0,r.kt)("br",null),"\nThe producer filter is divided into three filters, ",(0,r.kt)("em",{parentName:"p"},"Show All"),", which shows all TBSs, ",(0,r.kt)("em",{parentName:"p"},"By STMicroelectronics"),", which shows the TBSs created by STMicroelectronics, and ",(0,r.kt)("em",{parentName:"p"},"By Partners"),", which shows the TBSs created by our partners."),(0,r.kt)(o.Z,{imageSource:"/img/development/ui-development/designer-user-guide/startup-window/designer-lobby-create-filter.png",mdxType:"Figure"},"The producer filter"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"TBS List"),(0,r.kt)("br",null),"\nBased the selected filter a list of TBS is shown. The properties shown on each TBS is the name, the operating system and the resolution."),(0,r.kt)(o.Z,{imageSource:"/img/development/ui-development/designer-user-guide/startup-window/designer-lobby-create-tbs-list.png",mdxType:"Figure"},"Example of the TBS List"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Selected TBS"),(0,r.kt)("br",null),"\nWhen selecting a TBS, the section in the right side shows more information about the TBS and the options to create a new project based on the TBS."),(0,r.kt)(o.Z,{imageSource:"/img/development/ui-development/designer-user-guide/startup-window/designer-lobby-create-tbs-info-and-create.png",mdxType:"Figure"},"Selected TBS with description and options"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Application Name"),(0,r.kt)("br",null),"\nThis will determine the name of the new project, as well as the name of the folder the new project will be contained in."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Application Directory"),(0,r.kt)("br",null),"\nThis will determine the location of the new project."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Color Depth"),(0,r.kt)("br",null),"\nThis dropdown will contain the color depths supported by the selected TBS."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Versions"),(0,r.kt)("br",null),"\nThis dropdown will contain the different versions supported by the selected TBS."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Resolution"),(0,r.kt)("br",null),"\nThe adjustment of the resolution varies depending on which TBS has been selected. The Simulator TBS will support any resolution size between 0 x 0 and 2000 x 2000."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Create"),(0,r.kt)("br",null),"\nPressing the Create button, creates a new project based on the selected TBS and Blank UI, with the settings from above."),(0,r.kt)("h2",m({},{id:"examples"}),"Examples"),(0,r.kt)("p",null,"In the Examples tab, new projects can be created based on an example and a TBS."),(0,r.kt)(o.Z,{imageSource:"/img/development/ui-development/designer-user-guide/startup-window/designer-lobby-examples.png",mdxType:"Figure"},"The Examples tab in the Lobby"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Searchbar"),(0,r.kt)("br",null),"\nThe Searchbar is used for filtering the Examples by name."),(0,r.kt)(o.Z,{imageSource:"/img/development/ui-development/designer-user-guide/startup-window/designer-lobby-create-searchbar.png",mdxType:"Figure"},"The Searchbar"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Examples List"),(0,r.kt)("br",null),"\nBased the selected filter, a list of examples is shown. The properties shown on each example is name and the resolutions the example is compatible with."),(0,r.kt)(o.Z,{imageSource:"/img/development/ui-development/designer-user-guide/startup-window/designer-lobby-examples-example-list.png",mdxType:"Figure"},"Example of the examples list"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Select Board Setup"),(0,r.kt)("br",null),"\nThe Select Board Setup button opens a pop-up from where a TBS can be selected."),(0,r.kt)(o.Z,{imageSource:"/img/development/ui-development/designer-user-guide/startup-window/designer-lobby-examples-select-board-setup.png",mdxType:"Figure"},"The Select Board Setup pop-up"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Searchbar"),(0,r.kt)("br",null),"\nThe Searchbar is used for filtering the TBS by name."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Producer Filter"),(0,r.kt)("br",null),"\nThe producer filter is divided into three filters, ",(0,r.kt)("em",{parentName:"p"},"Show All"),", which shows all TBSs, ",(0,r.kt)("em",{parentName:"p"},"By STMicroelectronics"),", which shows the TBSs created by STMicroelectronics, and ",(0,r.kt)("em",{parentName:"p"},"By Partners"),", which shows the TBSs created by our partners."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"TBS List"),(0,r.kt)("br",null),"\nBased on the selected filter, a list of TBS is shown. The properties shown on each TBS is the name, the operating system and the resolution."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"TBS Info"),(0,r.kt)("br",null),"\nWhen selecting a TBS, the section in the right side shows more information about the TBS, the option to set the versionon the Select button to select the TBS.",(0,r.kt)("br",null)),(0,r.kt)("p",null,"The selected TBS is shown instead of the Select Board Setup button and the examples not matching the resolution are greyed out.",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"p"},"Creating a project without having selected a board results in a project based on the Simulator")),(0,r.kt)(o.Z,{imageSource:"/img/development/ui-development/designer-user-guide/startup-window/designer-lobby-examples-selected-board.png",mdxType:"Figure"},"The examples list with the selected TBS on top and the examples with a resolution that is incompatible with the TBS greyed out"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Selected Example"),(0,r.kt)("br",null),"\nWhen selecting an example, the section in the right side shows a description and the option to create a new project based on the example.",(0,r.kt)("br",null)),(0,r.kt)(o.Z,{imageSource:"/img/development/ui-development/designer-user-guide/startup-window/designer-lobby-examples-selected-example.png",mdxType:"Figure"},"Selected example with description and options"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Application Name"),(0,r.kt)("br",null),"\nThis will determine the name of the new project, as well as the name of the folder the new project will be contained in."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Application Directory"),(0,r.kt)("br",null),"\nThis will determine the location of the new project."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Color Depth"),(0,r.kt)("br",null),"\nThis dropdown will contain the color depths supported by the selected example and TBS."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Versions"),(0,r.kt)("br",null),"\nThis dropdown will contain the different versions of the example."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Resolution"),(0,r.kt)("br",null),"\nThe adjustment of the resolution vary depending on which example and TBS has been selected. The Blank UI combined with the Simulator will support any resolution size between 0 x 0 and 2000 x 2000."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Create"),(0,r.kt)("br",null),"\nPressing the Create button creates a new project based on the selected Example and TBS, with the settings from above."),(0,r.kt)("h2",m({},{id:"demos"}),"Demos"),(0,r.kt)("p",null,"In the Demos tab, projects based on a Demos and a TBS or a Board Specifc Demo (BSD) can be created."),(0,r.kt)(o.Z,{imageSource:"/img/development/ui-development/designer-user-guide/startup-window/designer-lobby-demos-demo.png",mdxType:"Figure"},"The Demos tab in the Lobby"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Demos Filter"),(0,r.kt)("br",null),"\nIn the filter in the top Demo or Board Specific Demo can be selected, which results in either demos oer BSDs to be shown."),(0,r.kt)(o.Z,{imageSource:"/img/development/ui-development/designer-user-guide/startup-window/designer-lobby-demos-filter.png",mdxType:"Figure"},"The demo filter"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Searchbar"),(0,r.kt)("br",null),"\nThe Searchbar is used for filtering the Demos or BSDs by name."),(0,r.kt)(o.Z,{imageSource:"/img/development/ui-development/designer-user-guide/startup-window/designer-lobby-create-searchbar.png",mdxType:"Figure"},"The searchbar"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Demos List"),(0,r.kt)("br",null),"\nBased the selected filter, a list of demos is shown. The properties shown on each Demo or BSD is the name and the resolution required."),(0,r.kt)(o.Z,{imageSource:"/img/development/ui-development/designer-user-guide/startup-window/designer-lobby-demos-demo-list.png",mdxType:"Figure"},"List of demos with the demo filter applied"),(0,r.kt)(o.Z,{imageSource:"/img/development/ui-development/designer-user-guide/startup-window/designer-lobby-demos-board-specific-demo-list.png",mdxType:"Figure"},"List of demos with the Board Specific Demo filter applied"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Select Board Setup"),(0,r.kt)("br",null),"\nThe Select Board Setup button opens a pop-up from where a TBS can be selected",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"p"},"The Select Board Setup button is only available under the demo filter, since BSDs are a demo and and TBS combined")),(0,r.kt)(o.Z,{imageSource:"/img/development/ui-development/designer-user-guide/startup-window/designer-lobby-examples-select-board-setup.png",mdxType:"Figure"},"The Select Board Setup pop-up"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Selected Demo or BSD"),(0,r.kt)("br",null),"\nWhen selecting an example the section in the right side shows a description, and the option to create a new project based on the example.",(0,r.kt)("br",null)),(0,r.kt)(o.Z,{imageSource:"/img/development/ui-development/designer-user-guide/startup-window/designer-lobby-demos-selected-demo-or-bsd.png",mdxType:"Figure"},"Selected demo or BSD with description and options"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Application Name"),(0,r.kt)("br",null),"\nThis will determine the name of the new project, as well as the name of the folder the new project will be contained in."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Application Directory"),(0,r.kt)("br",null),"\nThis will determine the location of the new project."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Color Depth"),(0,r.kt)("br",null),"\nThis dropdown will contain the color depths supported by the selected Demo and TBS or BSD."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Versions"),(0,r.kt)("br",null),"\nThis dropdown will contain the different versions of the Demo or BSD."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Resolution"),(0,r.kt)("br",null),"\nThe adjustment of the resolution varies depending on which demo and TBS or BSD which is selected. The Blank UI combined with the Simulator will support any resolution size between 0 x 0 and 2000 x 2000."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Create"),(0,r.kt)("br",null),"\nPressing the Create button creates a new project based on the selected Demo and TBS or BSD, with the settings from above."))}T.isMDXComponent=!0}}]);