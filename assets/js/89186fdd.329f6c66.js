"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[2652],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),u=i,h=m["".concat(s,".").concat(u)]||m[u]||d[u]||o;return n?a.createElement(h,r(r({ref:t},p),{},{components:n})):a.createElement(h,r({ref:t},p))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},22425:function(e,t,n){var a=n(67294);class i extends a.Component{render(){return a.createElement("div",{className:"code-header"},a.createElement("div",null,a.createElement("h5",null,this.props.children)))}}t.Z=i},44035:function(e,t,n){var a=n(67294),i=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,o=e.height,r=(0,i.Z)(e.imageSource);return t?a.createElement("div",{className:"figure noshadow"},a.createElement("a",{href:r,target:"_blank"},a.createElement("img",{width:n,height:o,src:r})),a.createElement("p",null,e.children)):a.createElement("div",{className:"figure"},a.createElement("a",{href:r,target:"_blank"},a.createElement("img",{width:n,height:o,src:r})),a.createElement("p",null,e.children))}},7966:function(e,t,n){n.r(t),n.d(t,{assets:function(){return b},contentTitle:function(){return f},default:function(){return w},frontMatter:function(){return h},metadata:function(){return g},toc:function(){return k}});var a=n(3905),i=n(44035),o=n(22425),r=Object.defineProperty,l=Object.defineProperties,s=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&m(e,n,t[n]);if(c)for(var n of c(t))d.call(t,n)&&m(e,n,t[n]);return e};const h={id:"graphics-engine",title:"Graphics Engine"},f=void 0,g={unversionedId:"basic-concepts/graphics-engine",id:"basic-concepts/graphics-engine",title:"Graphics Engine",description:"",source:"@site/docs/basic-concepts/graphics-engine.mdx",sourceDirName:"basic-concepts",slug:"/basic-concepts/graphics-engine",permalink:"/4.20/docs/basic-concepts/graphics-engine",draft:!1,tags:[],version:"current",frontMatter:{id:"graphics-engine",title:"Graphics Engine"},sidebar:"docs",previous:{title:"Framebuffer",permalink:"/4.20/docs/basic-concepts/framebuffer"},next:{title:"Main Loop",permalink:"/4.20/docs/basic-concepts/rendering"}},b={},k=[{value:"Scene model",id:"scene-model",level:2},{value:"Manipulate the model",id:"manipulate-the-model",level:2},{value:"Issue drawing commands",id:"issue-drawing-commands",level:2},{value:"Main Loop",id:"main-loop",level:2},{value:"Platform adaptibility",id:"platform-adaptibility",level:2}],y={toc:k};function w(e){var t,n=e,{components:r}=n,m=((e,t)=>{var n={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&c)for(var a of c(e))t.indexOf(a)<0&&d.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=u(u({},y),m),l(t,s({components:r,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"TouchGFX graphics engine's main responsibility is drawing graphics on the display of an embedded device."),(0,a.kt)("p",null,"This section will give an overview of what kind of graphics engine TouchGFX is and provide some background on why it is this way."),(0,a.kt)("h2",u({},{id:"scene-model"}),"Scene model"),(0,a.kt)("p",null,"Graphics engines can be divided into two main categories."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Immediate mode graphics engines")," provide an API that enables an application to directly draw things to the display. It is the responsibility of the application to ensure that the correct drawing operations are invoked at the right time."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Retained mode graphics engines")," let the user manipulate an abstract model of the components being displayed. The engine takes care of translating this component model into the correct graphics drawing operations at the right times.")),(0,a.kt)("p",null,"TouchGFX follows the retained mode graphics principles. In short this means that TouchGFX provides a model that can be manipulated by the user and TouchGFX then takes care of translating from this model into an optimized set of rendering method calls."),(0,a.kt)(i.Z,{imageSource:"/img/basic-concepts/retained-mode-graphics2.svg",noShadow:"true",width:480,mdxType:"Figure"},"Retained mode graphics"),(0,a.kt)("p",null,"The benefits of TouchGFX being retained are many. Primary ones are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Ease of use:")," A retained graphics engine is easy to use. The user adresses the configuration of components on screen, by invoking methods on the internal model and does not think in terms of actual drawing operations."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Performance:")," TouchGFX analyses the scene model and optimizes the drawing calls needed to realize the model on screen. This includes deliberately not drawing hidden components, drawing and transferring only changed parts of components, managing framebuffers, and much more."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"State management:")," TouchGFX keeps track of which part of the scene model is active. This in turn makes it easier for the user to optimize the scene model contents.")),(0,a.kt)("p",null,"The main drawback of TouchGFX adhering to the retained mode graphics scheme is:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Memory consumption:")," Representing the scene model takes up some memory. TouchGFX reaches its performance levels, typically rendering 60 frames per second, by analyzing the scene model and optimizing the corresponding rendering done.\nGreat effort has gone into reducing the amount of memory used by the scene model of TouchGFX. In typical applications the amount of memory for this model is well below one kilobyte.")),(0,a.kt)("h2",u({},{id:"manipulate-the-model"}),"Manipulate the model"),(0,a.kt)("p",null,"The scene model consists of components."),(0,a.kt)(i.Z,{imageSource:"/img/basic-concepts/scene-model.svg",noShadow:"true",width:280,mdxType:"Figure"},"A tree of widgets"),(0,a.kt)("p",null,"Each of the components in the model has exactly one associated parent component.\nThe parent component itself is also part of the scene model. Such a model is widely referred to as a ",(0,a.kt)("a",u({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Tree_(data_structure)"}),"tree"),"."),(0,a.kt)("p",null,"We will often refer to a component in this tree as a UI component or a widget."),(0,a.kt)("p",null,"From the point of view of the application, the displayed graphics are updated by setting up and manipulating the widgets in the scene model.\nAn example setup of a button, with position, images and added to the scene model, is:"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-cpp"}),"myButton.setXY(100,50);\nmyButton.setBitmaps(Bitmap(BITMAP_BUTTON_RELEASED_ID), Bitmap(BITMAP_BUTTON_PRESSED_ID));\nadd(myButton);\n")),(0,a.kt)("h2",u({},{id:"issue-drawing-commands"}),"Issue drawing commands"),(0,a.kt)("p",null,"Ultimately, when rendering the scene model, TouchGFX will utilize its drawing API. This drawing API has methods for drawing graphics primitives, such as boxes, images, texts, lines, polygons, textured triangles, etc."),(0,a.kt)("p",null,"As an example, the ",(0,a.kt)("a",u({parentName:"p"},{href:"../development/ui-development/ui-components/buttons/button"}),"Button")," widget in TouchGFX, when rendered, uses the ",(0,a.kt)("a",u({parentName:"p"},{href:"../api/classes/classtouchgfx_1_1_l_c_d#function-drawpartialbitmap"}),"drawPartialBitmap method")," for drawing images. The source code for the drawing of the button widget in TouchGFX looks close to:"),(0,a.kt)(o.Z,{mdxType:"CodeHeader"},"touchgfx/widgets/button.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-cpp"}),"void Button::draw(const Rect& invalidatedArea) const\n{\n    // calculate the part of the bitmap to draw\n    api.drawPartialBitmap(bitmap, x, y, part, alpha);\n}\n")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"inspect the actual source in ",(0,a.kt)("inlineCode",{parentName:"em"},"touchgfx/widgets/button.cpp")," for details.")),(0,a.kt)("p",null,"TouchGFX includes optimized implementations of the drawing API.\nThe ",(0,a.kt)("a",u({parentName:"p"},{href:"../api/classes/classtouchgfx_1_1_l_c_d#function-drawpartialbitmap"}),"drawPartialBitmap")," method for instance utilizes the underlying hardware (Chrom-ART if available) to draw the bitmap."),(0,a.kt)("p",null,"One can utilize these API drawing methods when extending the scene model with new types of widgets. See the section on creating your own ",(0,a.kt)("a",u({parentName:"p"},{href:"../development/ui-development/touchgfx-engine-features/custom-widgets"}),"custom widget"),"."),(0,a.kt)("p",null,"The implementation of the drawing API methods is platform specific and highly optimized for each specific MCU."),(0,a.kt)("h2",u({},{id:"main-loop"}),"Main Loop"),(0,a.kt)("p",null,"The workings of many game engines, graphics engines and in particular TouchGFX can be thought of as an infinite loop."),(0,a.kt)("p",null,"Within the main loop of TouchGFX there are three main activities:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Collect events:"),"\nCollect events from the touch screen, presses of physical buttons, messages from backend system, ..."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Update scene model:"),"\nReact to the collected events, updating the positions, animations, colors, images, ... of the model"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Render scene model:"),"\nRedraw the parts of the model that has been updated and make them appear on the display")),(0,a.kt)("p",null,"A diagrammatic version of the main loop is:"),(0,a.kt)(i.Z,{imageSource:"/img/basic-concepts/engine-cycle.png",noShadow:"true",width:320,mdxType:"Figure"},"Main loop"),(0,a.kt)("p",null,"Each execution of the main loop is denoted a tick of the application."),(0,a.kt)("h2",u({},{id:"platform-adaptibility"}),"Platform adaptibility"),(0,a.kt)("p",null,"As TouchGFX is designed for running on all STM32 embedded setups the above activities can be tailored."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The collection of events is handled by a dedicated abstraction layer. The tailoring of this layer is the subject of the section on ",(0,a.kt)("a",u({parentName:"li"},{href:"../development/touchgfx-hal-development/touchgfx-al-development-introduction"}),"TouchGFX AL Development"),"."),(0,a.kt)("li",{parentName:"ul"},"The updating of the model is completely up to the application. The details on how to do this update is the subject of ",(0,a.kt)("a",u({parentName:"li"},{href:"../development/ui-development/ui-development-introduction"}),"UI Development"),"."),(0,a.kt)("li",{parentName:"ul"},"The rendering of graphics to the framebuffer is handled by TouchGFX and will in general not need to be customized. The transferring of the pixels in the framebuffer to the display is platform specific, see ",(0,a.kt)("a",u({parentName:"li"},{href:"../development/board-bring-up/board-introduction"}),"Board Bring Up")," and ",(0,a.kt)("a",u({parentName:"li"},{href:"../development/touchgfx-hal-development/touchgfx-al-development-introduction"}),"TouchGFX AL Development")," for how to customize this to specific platforms.")),(0,a.kt)("p",null,"Read on to get more specifics on the main loop of TouchGFX."))}w.isMDXComponent=!0}}]);