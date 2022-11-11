"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[6631],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=s(n),p=r,m=h["".concat(c,".").concat(p)]||h[p]||d[p]||i;return n?a.createElement(m,o(o({ref:t},u),{},{components:n})):a.createElement(m,o({ref:t},u))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},44035:function(e,t,n){var a=n(67294),r=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,i=e.height,o=(0,r.Z)(e.imageSource);return t?a.createElement("div",{className:"figure noshadow"},a.createElement("a",{href:o,target:"_blank"},a.createElement("img",{width:n,height:i,src:o})),a.createElement("p",null,e.children)):a.createElement("div",{className:"figure"},a.createElement("a",{href:o,target:"_blank"},a.createElement("img",{width:n,height:i,src:o})),a.createElement("p",null,e.children))}},29415:function(e,t,n){var a=n(67294),r=n(88678);const i=a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class o extends a.Component{render(){return a.createElement(r.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:i},this.props.children)}}t.Z=o},88678:function(e,t,n){var a=n(67294);class r extends a.Component{render(){const e=`highlight highlight-${this.props.type}`;return a.createElement("div",{className:e},a.createElement("div",{className:"highlight-heading"},a.createElement("h5",null,a.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),a.createElement("div",{className:"highlight-content"},this.props.children))}}t.Z=r},40939:function(e,t,n){n.r(t),n.d(t,{assets:function(){return k},contentTitle:function(){return g},default:function(){return w},frontMatter:function(){return f},metadata:function(){return b},toc:function(){return y}});var a=n(3905),r=n(44035),i=n(29415),o=n(39130),l=Object.defineProperty,c=Object.defineProperties,s=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))d.call(t,n)&&p(e,n,t[n]);if(u)for(var n of u(t))h.call(t,n)&&p(e,n,t[n]);return e};const f={id:"02-cpu-running",title:"2. CPU Running",sidebar_label:"2. CPU Running"},g=void 0,b={unversionedId:"development/board-bring-up/how-to/02-cpu-running",id:"development/board-bring-up/how-to/02-cpu-running",title:"2. CPU Running",description:"",source:"@site/docs/development/board-bring-up/how-to/02-cpu-running.mdx",sourceDirName:"development/board-bring-up/how-to",slug:"/development/board-bring-up/how-to/02-cpu-running",permalink:"/touchgfx-test.github.io/docs/development/board-bring-up/how-to/02-cpu-running",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"02-cpu-running",title:"2. CPU Running",sidebar_label:"2. CPU Running"},sidebar:"docs",previous:{title:"1. Create Project",permalink:"/touchgfx-test.github.io/docs/development/board-bring-up/how-to/01-create-project"},next:{title:"3. Display with framebuffer in internal RAM",permalink:"/touchgfx-test.github.io/docs/development/board-bring-up/how-to/03-display-internal"}},k={},y=[{value:"Motivation",id:"motivation",level:2},{value:"Goal",id:"goal",level:2},{value:"Verification",id:"verification",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Do",id:"do",level:2},{value:"System Clock",id:"system-clock",level:3},{value:"Flash and RAM size and speed",id:"flash-and-ram-size-and-speed",level:3},{value:"Linker script",id:"linker-script",level:3},{value:"Cache on F7 and H7",id:"cache-on-f7-and-h7",level:3},{value:"TouchGFX internal DCache State Machine",id:"touchgfx-internal-dcache-state-machine",level:4},{value:"Further Readings",id:"further-readings",level:2}],v={toc:y};function w(e){var t,n=e,{components:l}=n,p=((e,t)=>{var n={};for(var a in e)d.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&u)for(var a of u(e))t.indexOf(a)<0&&h.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=m(m({},v),p),c(t,s({components:l,mdxType:"MDXLayout"}))),(0,a.kt)("h2",m({},{id:"motivation"}),"Motivation"),(0,a.kt)("p",null,"In this section we will make sure that the MCU core, internal RAM and\nflash are running at the desired clock speed."),(0,a.kt)("p",null,"TouchGFX can run on any MCU speeds, but a wrong clock configuration\ncan lead to lower than necessary performance. Later in your board\nbring up you need to configure specific timing parameters, e.g. an I2C\nclock for the Touch Controller. This is impossible without ensuring\nthat the MCU runs with the correct speed."),(0,a.kt)("p",null,"For STM32 microcontrollers you setup up a system clock. This clock is\nthen divided down to generate the FCLK core clock and various\nperipheral clocks like APB1 peripheral clock."),(0,a.kt)("h2",m({},{id:"goal"}),"Goal"),(0,a.kt)("p",null,"The goal for this section is to modify your project to get the correct\nclock configuration. You should also verify that your internal RAM and\nflash are running at the expected speed."),(0,a.kt)("h3",m({},{id:"verification"}),"Verification"),(0,a.kt)("p",null,"Here are the verification points for this section:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Verification Point"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Rationale"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"SystemCoreClock variable's value is correct"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"The microcontroller is configured to run at the desired frequency.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Internal RAM is readable"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"The microcontroller has the expected amount of internal RAM, it is readable, and the speed is measured")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Internal Flash is readable"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"The microcontroller has the expected amount of internal flash, it is readable, and the speed is measured")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Caching is disabled"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Running with caches disabled makes the system less complex and easier to understand.")))),(0,a.kt)("h2",m({},{id:"prerequisites"}),"Prerequisites"),(0,a.kt)("p",null,"The following are the prerequisites for this step:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Information about the clock source on your hardware. It is common to\nuse a crystal, but other solutions are also possible.")),(0,a.kt)("h2",m({},{id:"do"}),"Do"),(0,a.kt)("p",null,"We will now go through the steps of adjusting the clock configuration\nof our project to get the required MCU frequency. Afterwards we will\ndiscuss how to measure read speed of the internal flash."),(0,a.kt)("h3",m({},{id:"system-clock"}),"System Clock"),(0,a.kt)("p",null,'In STM32CubeMX click on the "Clock Configuration" tab. This gives you an\noverview of the clock tree for your specific MCU:'),(0,a.kt)(r.Z,{imageSource:"/img/development/board-bring-up/cpu-running/img-01.png",noShadow:!1,width:"600",mdxType:"Figure"},"Clock Configuration"),(0,a.kt)("p",null,"In this example the clock source is selected to be HSI. Many projects\nuse an external crystal and must use HSE with a suitable divider (/M)\nand multiplier (/N). It is out the scope of this guide to advice on\nthe clock configuration. After you have changed the clock\nconfiguration you must regenerate the project in STM32CubeMX (click\nGenerate Code in upper right corner)."),(0,a.kt)("p",null,"The core clock (HCLK) can be calculated at runtime by the generated\ncode and saved in a variable. This variable can be used by application\ncode to correctly convert between clock cycles and seconds, and e.g\nstart timers. To get the variable recalculated you must call the\n",(0,a.kt)("em",{parentName:"p"},"SystemCoreClockUpdate()")," function. Insert a call in main.c (in a user\ncode section):"),(0,a.kt)(r.Z,{imageSource:"/img/development/board-bring-up/cpu-running/img-02.png",noShadow:!1,width:"600",mdxType:"Figure"},"SystemCoreClockUpdate"),(0,a.kt)("p",null,"If we set a breakpoint at the end of that function we can see the core\nclock (according to the configuration):"),(0,a.kt)(r.Z,{imageSource:"/img/development/board-bring-up/cpu-running/img-03.png",noShadow:!1,width:"600",mdxType:"Figure"},"SystemCoreClock"),(0,a.kt)("p",null,"Another important point to test is the System Timer. This timer is\nrunning on HCLK divided down to give an interrupt every 1 ms. This\ntimer is used by the STM32Cube Firmware to implement millisecond delays."),(0,a.kt)("p",null,"We can test this by inserting a delay of e.g 5 seconds in main. Verify\nthis with a stop watch or similar means:"),(0,a.kt)(r.Z,{imageSource:"/img/development/board-bring-up/cpu-running/img-04.png",noShadow:!1,width:"600",mdxType:"Figure"},"Measure delay"),(0,a.kt)("h3",m({},{id:"flash-and-ram-size-and-speed"}),"Flash and RAM size and speed"),(0,a.kt)("p",null,"It is easy to check the reading speed of memory by using the System\nTimer. The System Timer interrupt increments a variable each\nmillisecond. By reading this variable before and after a piece of\ncode, we can measure the running time of the code (with 1 ms\nresolution). This scheme can be used to measure a time period in many\ndifferent places in your application. It is not very precise, but can\nbe done without external devices like oscilloscopes."),(0,a.kt)("p",null,"To do that we first need two volatile variable to save the result. If\nwe don't save the result here, the optimizing compiler will in some\ncase remove the measuring code:"),(0,a.kt)(r.Z,{imageSource:"/img/development/board-bring-up/cpu-running/img-05.png",noShadow:!1,width:"600",mdxType:"Figure"},"Global volatile variables to hold measurement results"),(0,a.kt)("p",null,"Here is an example where we read the flash from 0x08000000 to 0x08020000 (128 Kb) and time the code:"),(0,a.kt)(r.Z,{imageSource:"/img/development/board-bring-up/cpu-running/img-06.png",noShadow:!1,width:"600",mdxType:"Figure"},"Timing a read loop"),(0,a.kt)("p",null,"You can use code like this to verify the speed of your different\nmemories. Once you have created a setup in STM32CubeMX you can measure the\nread speed and make a note of the result. The measurements can then be\nrepeated later and verified.  If you want to measure the bandwidth of\nyour memory (the read speed in kb/s), you can compare the amount of\ndata with the time measured."),(0,a.kt)("p",null,"On a 16 MHz STM32F429 the code runs in 12 ms giving us a read speed of\nthe internal flash (using this method) of\n128kb/0.012s = 10,666 kb/s."),(0,a.kt)("p",null,"The same loop above can easily be changed to verify that all the\ninternal flash is enabled and readable. Just change the start and end\naddresses."),(0,a.kt)("p",null,"The code can also check the internal RAM. On the F429 the RAM starts\nat address 0x20000000. The core coupled memory is at 0x10000000. Check\nthe datasheet for your specific MCU for the relevant memory addresses."),(0,a.kt)("p",null,"You should make a few measurements on your different memories and make\na note of the result. For RAM test both the read and write speed."),(0,a.kt)("h3",m({},{id:"linker-script"}),"Linker script"),(0,a.kt)("p",null,"Another thing to look at is the linker script. This configuration file\ntells your linker what are the addresses of the RAM and flashes in\nyour system. The linker script is generated by CubeMX together with\nthe project, but it can be good to study it. Later you will in most\ncases have to modify it to suit your project's needs."),(0,a.kt)("h3",m({},{id:"cache-on-f7-and-h7"}),"Cache on F7 and H7"),(0,a.kt)("p",null,"The ARM Cortex-M7 based STM32F7 and STM32H7 microcontrollers include\ndata and instruction caches. It is recommended to disable at least the\ndata cache until you have a stable platform. The data cache improves\nthe performance significantly in many cases, but it also introduces\ncomplexity during testing."),(0,a.kt)("p",null,"When you have a stable platform, you can enable the data cache. It is\neasier at that point to identify that a given problem originates from\ndata cache management, since the platform is otherwise functional."),(0,a.kt)("p",null,"The complexity of the data cache comes from the fact that the MCU core\nreads and writes to the cache, whereas peripherals like DMA2 and LTDC\nread directly from memory (and not in the cache). For this reason, you\ncan be in a situation where you write data to e.g. your framebuffer,\nbut some of the data is not seen on the display. This is because the\nLTDC did not find the new data in the RAM because it is only written\nto the cache so far. The solution is to flush the cache at certain\npoints in your project, but we recommend to deal with this at a later\npoint."),(0,a.kt)("p",null,"Caching can be disabled/enabled in STM32CubeMX in the System Core section."),(0,a.kt)("h4",m({},{id:"touchgfx-internal-dcache-state-machine"}),"TouchGFX internal DCache State Machine"),(0,a.kt)("p",null,"TouchGFX engine keeps track of the current and last rendering operation, there are two states ",(0,a.kt)("inlineCode",{parentName:"p"},"HARDWARE")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"SOFTWARE"),". The initial state is set to ",(0,a.kt)("inlineCode",{parentName:"p"},"HARDWARE")," as the mijority of draw operations are done by hardware. When a state switch occurs the state machine will call the appropriate virtual function to handle cache invalidation. When the state transit from ",(0,a.kt)("inlineCode",{parentName:"p"},"HARDWARE")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"SOFTWARE")," it will call the virtual method ",(0,a.kt)("inlineCode",{parentName:"p"},"void touchgfx::HAL::InvalidateCache()")," and when the state transitions from ",(0,a.kt)("inlineCode",{parentName:"p"},"SOFTWARE")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"HARDWARE")," it will call the virtual method ",(0,a.kt)("inlineCode",{parentName:"p"},"void touchgfx::HAL::FlushCache()"),". The functionality of these two functions is left for the user to implement in the derived HAL class."),(0,a.kt)(r.Z,{imageSource:"/img/development/board-bring-up/cpu-running/cm7-cache-invalidation-statemachine.svg",noShadow:!1,mdxType:"Figure"},"TouchGFX engine internal DCache State Machine"),(0,a.kt)("p",null,"If using TouchGFX Generator the implementation of these derived methods will be created in the TouchGFXGeneratedHAL class with function calls to DCache invalidation and no further action is needed."),(0,a.kt)("h2",m({},{id:"further-readings"}),"Further Readings"),(0,a.kt)("p",null,"The documents linked here contains more information about STM32CubeMX and the STM32 caches:"),(0,a.kt)(i.Z,{mdxType:"FurtherReading"},(0,a.kt)("ul",null,(0,a.kt)("li",null,"Section on Clock configuration in the ",(0,a.kt)(o.Z,{to:"https://www.st.com/content/ccc/resource/technical/document/user_manual/10/c5/1a/43/3a/70/43/7d/DM00104712.pdf/files/DM00104712.pdf/jcr:content/translations/en.DM00104712.pdf",mdxType:"Link"},"STM32CubeMX User Manual")),(0,a.kt)("li",null,(0,a.kt)(o.Z,{to:"https://www.st.com/content/ccc/resource/technical/document/application_note/group0/08/dd/25/9c/4d/83/43/12/DM00272913/files/DM00272913.pdf/jcr:content/translations/en.DM00272913.pdf",mdxType:"Link"},"Level 1 cache on STM32F7 and STM32H7")))))}w.isMDXComponent=!0}}]);