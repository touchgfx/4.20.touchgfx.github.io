"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[6094],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=o.createContext({}),s=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=s(e.components);return o.createElement(u.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=i,g=p["".concat(u,".").concat(m)]||p[m]||h[m]||a;return n?o.createElement(g,r(r({ref:t},c),{},{components:n})):o.createElement(g,r({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=p;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var s=2;s<a;s++)r[s]=n[s];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},44035:function(e,t,n){var o=n(67294),i=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,a=e.height,r=(0,i.Z)(e.imageSource);return t?o.createElement("div",{className:"figure noshadow"},o.createElement("a",{href:r,target:"_blank"},o.createElement("img",{width:n,height:a,src:r})),o.createElement("p",null,e.children)):o.createElement("div",{className:"figure"},o.createElement("a",{href:r,target:"_blank"},o.createElement("img",{width:n,height:a,src:r})),o.createElement("p",null,e.children))}},39487:function(e,t,n){var o=n(67294),i=n(25026);t.Z=function(e){const t=e.width,n=e.height,a=e.points||[],r=(0,i.Z)(e.imageSource);return o.createElement("div",{style:{position:"relative"}},o.createElement("div",{className:"figure"},o.createElement("a",{href:r,target:"_blank"},o.createElement("img",{width:t,height:n,src:r})),a.map((function(e,t){return o.createElement("svg",{style:{position:"absolute",top:0,left:0,pointerEvents:"none"},viewBox:"0 0 500 500"},o.createElement("g",{transform:"translate("+e[0]+", "+e[1]+")"},o.createElement("path",{id:"p1",d:"M12 2c3.196 0 6 2.618 6 5.602 0 2.238-1.058 3.488-2.659 5.381-1.078 1.274-2.303 2.722-3.341 4.697-1.038-1.976-2.263-3.423-3.341-4.697-1.601-1.893-2.659-3.143-2.659-5.381 0-2.984 2.804-5.602 6-5.602z",fill:"white",stroke:"black"}),o.createElement("text",{x:"11.7",y:"9.5","font-size":"x-small","dominant-baseline":"middle","text-anchor":"middle"},t+1)))})),o.createElement("p",null,e.children)))}},88678:function(e,t,n){var o=n(67294);class i extends o.Component{render(){const e=`highlight highlight-${this.props.type}`;return o.createElement("div",{className:e},o.createElement("div",{className:"highlight-heading"},o.createElement("h5",null,o.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),o.createElement("div",{className:"highlight-content"},this.props.children))}}t.Z=i},93054:function(e,t,n){var o=n(67294),i=n(88678);const a=o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},o.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));class r extends o.Component{render(){return o.createElement(i.Z,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:a},this.props.children)}}t.Z=r},82985:function(e,t,n){var o=n(67294);class i extends o.Component{render(){return o.createElement("code",{className:"shortcut"},this.props.children)}}t.Z=i},92305:function(e,t,n){n.r(t),n.d(t,{assets:function(){return k},contentTitle:function(){return w},default:function(){return x},frontMatter:function(){return y},metadata:function(){return T},toc:function(){return v}});var o=n(3905),i=n(44035),a=n(39487),r=n(82985),l=n(93054),u=n(39130),s=Object.defineProperty,c=Object.defineProperties,h=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,f=(e,t)=>{for(var n in t||(t={}))m.call(t,n)&&d(e,n,t[n]);if(p)for(var n of p(t))g.call(t,n)&&d(e,n,t[n]);return e};const y={id:"tutorial-01",title:"Tutorial 1: Trying Out the Examples"},w=void 0,T={unversionedId:"tutorials/tutorial-01",id:"tutorials/tutorial-01",title:"Tutorial 1: Trying Out the Examples",description:"",source:"@site/docs/tutorials/tutorial-01.mdx",sourceDirName:"tutorials",slug:"/tutorials/tutorial-01",permalink:"/4.20/docs/tutorials/tutorial-01",draft:!1,tags:[],version:"current",frontMatter:{id:"tutorial-01",title:"Tutorial 1: Trying Out the Examples"},sidebar:"docs",previous:{title:"Tutorials",permalink:"/4.20/docs/category/tutorials"},next:{title:"Tutorial 2: Creating Your Own Application",permalink:"/4.20/docs/tutorials/tutorial-02"}},k={},v=[{value:"Getting Started",id:"getting-started",level:2},{value:"Running an Example Using TouchGFX Simulator",id:"running-an-example-using-touchgfx-simulator",level:2},{value:"Selecting Theme",id:"selecting-theme",level:3},{value:"Selecting a UI Template",id:"selecting-a-ui-template",level:3},{value:"Creating a Project",id:"creating-a-project",level:3},{value:"Running TouchGFX Simulator",id:"running-touchgfx-simulator",level:3},{value:"Running an Example on an STM32 Evaluation Kit",id:"running-an-example-on-an-stm32-evaluation-kit",level:2}],b={toc:v};function x(e){var t,n=e,{components:s}=n,d=((e,t)=>{var n={};for(var o in e)m.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&p)for(var o of p(e))t.indexOf(o)<0&&g.call(e,o)&&(n[o]=e[o]);return n})(n,["components"]);return(0,o.kt)("wrapper",(t=f(f({},b),d),c(t,h({components:s,mdxType:"MDXLayout"}))),(0,o.kt)("p",null,"Follow this tutorial to learn the very basics of TouchGFX. You will see how to install TouchGFX and how to run the provided examples on TouchGFX Simulator and on an STM32 Evaluation Kit."),(0,o.kt)("h2",f({},{id:"getting-started"}),"Getting Started"),(0,o.kt)("p",null,"First of all make sure you have TouchGFX Designer installed. Read more on how to download and install TouchGFX ",(0,o.kt)("a",f({parentName:"p"},{href:"../introduction/installation"}),"here"),"."),(0,o.kt)("h2",f({},{id:"running-an-example-using-touchgfx-simulator"}),"Running an Example Using TouchGFX Simulator"),(0,o.kt)("p",null,"TouchGFX has a lot of UI examples available through TouchGFX Designer. These examples can help you learn more about specific TouchGFX topics, as they all focus on one particular TouchGFX topic or widget."),(0,o.kt)("h3",f({},{id:"selecting-theme"}),"Selecting Theme"),(0,o.kt)("p",null,"The TouchGFX Designer has two color schemes, light and dark. The first\ntime you start the TouchGFX Designer, you are asked to select a\nscheme. This can be changed later."),(0,o.kt)(a.Z,{points:[[270,172]],imageSource:"/img/tutorials/tutorial-01/select-theme.png",mdxType:"FigureWithPoints"},"Selecting a theme"),(0,o.kt)("p",null,'Select a theme and click "OK" (1). In this tutorial we will use the light scheme.'),(0,o.kt)("h3",f({},{id:"selecting-a-ui-template"}),"Selecting a UI Template"),(0,o.kt)("p",null,"You can use the examples as starting points for your own projects or use them as reference examples. The examples can run either on your PC using TouchGFX Simulator, on a STM32 Evaluation Kit or even on your custom STM32 based hardware."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'To start a project from an example click the "Examples" icon in the top left corner (1):')),(0,o.kt)(a.Z,{points:[[10,30]],imageSource:"/img/tutorials/tutorial-01/select-examples.png",mdxType:"FigureWithPoints"},"Opening the examples"),(0,o.kt)("p",null,"TouchGFX Designer will now show you a window with the available UI examples."),(0,o.kt)(a.Z,{points:[[110,50]],imageSource:"/img/tutorials/tutorial-01/all-examples.png",mdxType:"FigureWithPoints"},"Selecting an example"),(0,o.kt)("p",null,'Select the "Animated Image Example" (1).'),(0,o.kt)(a.Z,{points:[[420,200]],imageSource:"/img/tutorials/tutorial-01/animated-image-selected.png",mdxType:"FigureWithPoints"},"Animated Image Example selected"),(0,o.kt)("h3",f({},{id:"creating-a-project"}),"Creating a Project"),(0,o.kt)("p",null,'The TouchGFX Designer is ready to create a project for you. Here we have given the project the name "MyAnimatedImageExample" in the right-hand side. Note that you can also select the folder where the project is placed (1).'),(0,o.kt)("p",null,'Click "Create" to create the project. TouchGFX Designer will now create a complete project based on the example. This process takes various amounts of time, depending on your download speed.'),(0,o.kt)("h3",f({},{id:"running-touchgfx-simulator"}),"Running TouchGFX Simulator"),(0,o.kt)("p",null,'TouchGFX Designer is now showing the combined project. To run the Windows simulator, click the "Run Simulator" button in the lower right part (1) or ',(0,o.kt)(r.Z,{mdxType:"Shortcut"},"F5")," on your keyboard."),(0,o.kt)(a.Z,{points:[[463,245]],imageSource:"/img/tutorials/tutorial-01/the-project-is-ready-4-17.png",mdxType:"FigureWithPoints"},"The project is ready"),(0,o.kt)("p",null,'TouchGFX Simulator is now showing as a regular Windows application. The titlebar shows the application name. Click the "Start" button to interact with the example.'),(0,o.kt)(i.Z,{width:"50%",imageSource:"/img/tutorials/tutorial-01/the-touchgfx-simulator-4-17.png",mdxType:"Figure"},"The TouchGFX Simulator"),(0,o.kt)("p",null,"Before moving on with the tutorial you can try out some more examples if you want. Just click File->New and select a new UI Template as before."),(0,o.kt)("h2",f({},{id:"running-an-example-on-an-stm32-evaluation-kit"}),"Running an Example on an STM32 Evaluation Kit"),(0,o.kt)("p",null,"In this step you will learn how to start a project for a STM32F746-Disco board and how to run one of the TouchGFX examples on that board. If you have no STM32 Evaluation Kit you can simply skip this step. If you have a different SMT32 Evaluation Kit have a look at the list of supported boards and see if you can find it there."),(0,o.kt)("p",null,'TouchGFX Designer comes with a list of premade Application Templates that matches a wide range of STM32 Evaluation Kit. To base your project on such a template, start out again by creating a new project in TouchGFX Designer, by clicking "Examples" icon in the top left corner.'),(0,o.kt)(a.Z,{points:[[10,30]],imageSource:"/img/tutorials/tutorial-01/select-examples.png",mdxType:"FigureWithPoints"},"Starting from examples"),(0,o.kt)("p",null,'Select the "Animated Image Example" (if it is not already selected). Click the "Select Hardware" button to select a specific hardware. The default "Simulator" will only allow you to run on Windows.'),(0,o.kt)(a.Z,{points:[[70,10]],imageSource:"/img/tutorials/tutorial-01/animated-image-selected.png",mdxType:"FigureWithPoints"},"Animated Image Example selected"),(0,o.kt)("p",null,"The TouchGFX Designer now shows the available hardware configurations:"),(0,o.kt)(a.Z,{points:[[176,140],[440,215]],imageSource:"/img/tutorials/tutorial-01/select-hardware.png",mdxType:"FigureWithPoints"},"Animated Image Example selected"),(0,o.kt)("p",null,'For this step we will use the STM32F746-Disco board, so click on the "STM32F746G Discovery Kit" (1) and click "Select" (2).'),(0,o.kt)("p",null,'You are now ready to create the project. You can change the application name if you like. Here we have changed it to "MyAnimatedImageExample746". Click the "Create" button to continue.'),(0,o.kt)(a.Z,{points:[[460,240]],imageSource:"/img/tutorials/tutorial-01/create-the-final-project-4-17.png",mdxType:"FigureWithPoints"},"Create the project"),(0,o.kt)("p",null,'The look of the project is similar to what we saw in the previous step. The only difference is that we now also have a "Run Target" button next (1) to the "Run Simulator" button (2). When you press this button (or ',(0,o.kt)(r.Z,{mdxType:"Shortcut"},"F6"),' /> on your keyboard), TouchGFX Designer compiles your project using the GNU ARM C++-compiler and flashes the application to your target. This process can take minutes, depending on your computer speed and the complexity of the application. The progress will be output in the status bar in the bottom of TouchGFX Designer. You can press the "Detailed Log" (3) (or ',(0,o.kt)(r.Z,{mdxType:"Shortcut"},"CTRL + L")," on your keyboard) button if you want more details on the build and flashing step."),(0,o.kt)(a.Z,{points:[[480,250],[465,250],[100,250],[0,240]],imageSource:"/img/tutorials/tutorial-01/the-project-is-ready-2-4-17.png",mdxType:"FigureWithPoints"},"The project is ready"),(0,o.kt)("p",null,'TouchGFX Designer will write "Flashing Done" in the status bar when flashing is completed. You should now see the application running on your board.'),(0,o.kt)(l.Z,{mdxType:"Note"},"You will need to have STM32CubeProgrammer / ST-Link Utility installed to flash a target:",(0,o.kt)("ul",null,(0,o.kt)("li",null,(0,o.kt)(u.Z,{to:"https://www.st.com/en/development-tools/stm32cubeprog.html",target:"_blank",mdxType:"Link"},"STM32CubeProgrammer")),(0,o.kt)("li",null,(0,o.kt)(u.Z,{to:"https://www.st.com/en/development-tools/stsw-link004.html",target:"_blank",mdxType:"Link"},"STM32 ST-LINK Utility")))),(0,o.kt)("p",null,'If you click the Files" button in the bottom right (4), TouchGFX Designer will open a file browser showing the directory where the new project is located. Navigating to ',(0,o.kt)("inlineCode",{parentName:"p"},"build\\bin")," you can see the following files:"),(0,o.kt)(i.Z,{imageSource:"/img/tutorials/tutorial-01/the-projects-binary-files.png",mdxType:"Figure"},"The binary files of the project"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"target.hex")," file is the STM32 application for your board. This is the file TouchGFX Designer just programmed to your board."),(0,o.kt)("p",null,"You can also manually flash your board using STM32CubeProgrammer or ST-Link Utility. See the ",(0,o.kt)("a",f({parentName:"p"},{href:"../development/ui-development/working-with-touchgfx/compiling-and-flashing"}),"Compiling & Flashing page")," for more details."))}x.isMDXComponent=!0}}]);