"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[4511],{3905:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return p}});var i=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=i.createContext({}),u=function(e){var n=i.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=u(e.components);return i.createElement(d.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},s=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,d=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),s=u(t),p=r,g=s["".concat(d,".").concat(p)]||s[p]||c[p]||a;return t?i.createElement(g,o(o({ref:n},m),{},{components:t})):i.createElement(g,o({ref:n},m))}));function p(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=s;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<a;u++)o[u]=t[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}s.displayName="MDXCreateElement"},44035:function(e,n,t){var i=t(67294),r=t(25026);n.Z=function(e){const n=e.noShadow||!1,t=e.width,a=e.height,o=(0,r.Z)(e.imageSource);return n?i.createElement("div",{className:"figure noshadow"},i.createElement("a",{href:o,target:"_blank"},i.createElement("img",{width:t,height:a,src:o})),i.createElement("p",null,e.children)):i.createElement("div",{className:"figure"},i.createElement("a",{href:o,target:"_blank"},i.createElement("img",{width:t,height:a,src:o})),i.createElement("p",null,e.children))}},65407:function(e,n,t){var i=t(67294),r=t(25026);n.Z=function(e){var n,t;const a=(0,r.Z)(e.url),o=null!=(n=e.width)?n:"100%",l=null!=(t=e.height)?t:"100%";return i.createElement("div",{className:"loop-video"},i.createElement("video",{muted:!0,loop:!0,playsInline:!0,autoPlay:!0,width:o,height:l},i.createElement("source",{src:a,type:"video/mp4"}),"Your browser does not support the video tag."),i.createElement("p",null,e.children))}},82985:function(e,n,t){var i=t(67294);class r extends i.Component{render(){return i.createElement("code",{className:"shortcut"},this.props.children)}}n.Z=r},60913:function(e,n,t){t.r(n),t.d(n,{assets:function(){return v},contentTitle:function(){return f},default:function(){return y},frontMatter:function(){return h},metadata:function(){return w},toc:function(){return k}});var i=t(3905),r=t(44035),a=t(82985),o=t(65407),l=Object.defineProperty,d=Object.defineProperties,u=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,n,t)=>n in e?l(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,g=(e,n)=>{for(var t in n||(n={}))c.call(n,t)&&p(e,t,n[t]);if(m)for(var t of m(n))s.call(n,t)&&p(e,t,n[t]);return e};const h={id:"main-window",title:"Main Window"},f=void 0,w={unversionedId:"development/ui-development/designer-user-guide/main-window",id:"development/ui-development/designer-user-guide/main-window",title:"Main Window",description:"",source:"@site/docs/development/ui-development/designer-user-guide/main-window.mdx",sourceDirName:"development/ui-development/designer-user-guide",slug:"/development/ui-development/designer-user-guide/main-window",permalink:"/4.20/docs/development/ui-development/designer-user-guide/main-window",draft:!1,tags:[],version:"current",frontMatter:{id:"main-window",title:"Main Window"},sidebar:"docs",previous:{title:"File Menu",permalink:"/4.20/docs/development/ui-development/designer-user-guide/file-menu"},next:{title:"Canvas View",permalink:"/4.20/docs/development/ui-development/designer-user-guide/canvas-view"}},v={},k=[{value:"Navigation Bar",id:"navigation-bar",level:2},{value:"Commands",id:"commands",level:2},{value:"Generate Code",id:"generate-code",level:3},{value:"Run Simulator",id:"run-simulator",level:3},{value:"Run Target",id:"run-target",level:3},{value:"Notification Bar",id:"notification-bar",level:2},{value:"Detailed Log",id:"detailed-log",level:2},{value:"Theme",id:"theme",level:2}],b={toc:k};function y(e){var n,t=e,{components:l}=t,p=((e,n)=>{var t={};for(var i in e)c.call(e,i)&&n.indexOf(i)<0&&(t[i]=e[i]);if(null!=e&&m)for(var i of m(e))n.indexOf(i)<0&&s.call(e,i)&&(t[i]=e[i]);return t})(t,["components"]);return(0,i.kt)("wrapper",(n=g(g({},b),p),d(n,u({components:l,mdxType:"MDXLayout"}))),(0,i.kt)("p",null,"The Main Window of TouchGFX Designer consists of a ",(0,i.kt)("a",g({parentName:"p"},{href:"#navigation-bar"}),"Navigation Bar"),", ",(0,i.kt)("a",g({parentName:"p"},{href:"#commands"}),"Command Buttons"),", ",(0,i.kt)("a",g({parentName:"p"},{href:"#notification-bar"}),"Notification Bar"),", and ",(0,i.kt)("a",g({parentName:"p"},{href:"#detailed-log"}),"Detailed log"),".\nThe Main Window forms a frame around the 'View' ",(0,i.kt)("em",{parentName:"p"},"(The 'View' area, is the area that has been blurred in the image below)")),(0,i.kt)(r.Z,{imageSource:"/img/development/ui-development/designer-user-guide/main-window/designer-main-window-4.17.png",mdxType:"Figure"},"Main window of TouchGFX Designer"),(0,i.kt)("h2",g({},{id:"navigation-bar"}),"Navigation Bar"),(0,i.kt)("p",null,"In TouchGFX Designer, navigation is done through the Navigation Bar (see image below), here the View can be changed to one of the following views:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",g({parentName:"li"},{href:"canvas-view"}),"Canvas")," used for drag and drop application building."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",g({parentName:"li"},{href:"images-view"}),"Images")," used for management of the images used in a project."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",g({parentName:"li"},{href:"texts-view"}),"Texts")," used for management of texts and typographies in a project."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",g({parentName:"li"},{href:"config-view"}),"Config")," used for configuration of various settings for a project.")),(0,i.kt)("p",null,"Furthermore you can easily browse the code by clicking ",(0,i.kt)("strong",{parentName:"p"},"Files"),", which will open the project directory in a new File Explorer window."),(0,i.kt)(r.Z,{imageSource:"/img/development/ui-development/designer-user-guide/main-window/designer-main-window-navigation-4.17.png",mdxType:"Figure"},"Navigation bar in TouchGFX Designer"),(0,i.kt)("h2",g({},{id:"commands"}),"Commands"),(0,i.kt)("p",null,"In the Commands section of TouchGFX Designer three buttons can be found: 'Generate Code', 'Run Simulator' and 'Run Target'. ",(0,i.kt)("em",{parentName:"p"},"(See image below)."),"\nThese buttons each execute a combination of commands."),(0,i.kt)(r.Z,{imageSource:"/img/development/ui-development/designer-user-guide/main-window/designer-main-window-actions-4.17.png",mdxType:"Figure"},"Command buttons in TouchGFX Designer"),(0,i.kt)("p",null,"The commands these buttons execute can be overwritten in the ",(0,i.kt)("a",g({parentName:"p"},{href:"config-view#build"}),"Build")," section in Config."),(0,i.kt)("h3",g({},{id:"generate-code"}),"Generate Code"),(0,i.kt)("p",null,"The Generate Code command triggers a complete code generation, then executes following commands:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Generate Assets Command"),(0,i.kt)("li",{parentName:"ul"},"Post Generate Command"),(0,i.kt)("li",{parentName:"ul"},"Post Generate Target Command")),(0,i.kt)("h3",g({},{id:"run-simulator"}),"Run Simulator"),(0,i.kt)("p",null,"The Run Simulator command triggers a complete code generation, then executes the following commands:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Generate Assets Command"),(0,i.kt)("li",{parentName:"ul"},"Post Generate Command"),(0,i.kt)("li",{parentName:"ul"},"Compile Simulator Command"),(0,i.kt)("li",{parentName:"ul"},"Run Simulator command")),(0,i.kt)("p",null,"The Run Simulator command can also be triggered by pressing ",(0,i.kt)(a.Z,{mdxType:"Shortcut"},"F5")),(0,i.kt)("h3",g({},{id:"run-target"}),"Run Target"),(0,i.kt)("p",null,"The Run Target command triggers a complete code generation, then executes following commands:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Generate Assets Command"),(0,i.kt)("li",{parentName:"ul"},"Post Generate Command"),(0,i.kt)("li",{parentName:"ul"},"Generate Target Command"),(0,i.kt)("li",{parentName:"ul"},"Compile Target Command"),(0,i.kt)("li",{parentName:"ul"},"Flash Target command")),(0,i.kt)("p",null,"The Run Target command can also be triggered by pressing ",(0,i.kt)(a.Z,{mdxType:"Shortcut"},"F6")),(0,i.kt)("p",null,"The Generate Code command can also be triggered by pressing ",(0,i.kt)(a.Z,{mdxType:"Shortcut"},"F7")),(0,i.kt)("h2",g({},{id:"notification-bar"}),"Notification Bar"),(0,i.kt)("p",null,"The Notification Bar at the bottom of the Main Window, shows the status of the current command being run. If a command fails, the text in the bar will turn red and an error icon will be displayed along with the command that failed.\nCommands that succeed will first turn green and then will be cleared from the Notification Bar, whereas commands that fail will continue to be displayed until another command is started."),(0,i.kt)(o.Z,{url:"/videos/development/ui-development/designer-user-guide/main-window/notification-bar-success.mp4",mdxType:"LoopVideo"},"Notification bar success in TouchGFX Designer"),(0,i.kt)(o.Z,{url:"/videos/development/ui-development/designer-user-guide/main-window/notification-bar-fail.mp4",mdxType:"LoopVideo"},"Notification bar failed in TouchGFX Designer"),(0,i.kt)("h2",g({},{id:"detailed-log"}),"Detailed Log"),(0,i.kt)("p",null,"Pressing anywhere on the Notification Bar opens a window showing the full log of the last command that was run by the designer. The output of a command will stream into this window ",(0,i.kt)("em",{parentName:"p"},"(See GIF below)"),", the window can also be undocked/docked from the Main Window, by pressing the undock/dock icon in the top right corner of the Detailed Log window."),(0,i.kt)("p",null,"The Detailed Log window can also be toggled with ",(0,i.kt)(a.Z,{mdxType:"Shortcut"},"CTRL + L")),(0,i.kt)(o.Z,{url:"/videos/development/ui-development/designer-user-guide/main-window/designer-main-window-log.mp4",mdxType:"LoopVideo"},"Detailed log in TouchGFX Designer"),(0,i.kt)("h2",g({},{id:"theme"}),"Theme"),(0,i.kt)("p",null,"The TouchGFX Designer supports a Light and Dark theme (see images below). You can switch the theme to your liking in the ",(0,i.kt)("a",g({parentName:"p"},{href:"file-menu#file"}),"File Menu"),"."),(0,i.kt)(r.Z,{imageSource:"/img/development/ui-development/designer-user-guide/main-window/designer-main-window-light.png",mdxType:"Figure"},"TouchGFX Designer Light Theme"),(0,i.kt)(r.Z,{imageSource:"/img/development/ui-development/designer-user-guide/main-window/designer-main-window-dark.png",mdxType:"Figure"},"TouchGFX Designer Dark Theme"))}y.isMDXComponent=!0}}]);