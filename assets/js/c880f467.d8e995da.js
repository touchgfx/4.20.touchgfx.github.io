"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[4434],{3905:function(e,t,n){n.d(t,{Zo:function(){return h},kt:function(){return u}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},h=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),p=d(n),u=i,g=p["".concat(l,".").concat(u)]||p[u]||c[u]||r;return n?a.createElement(g,o(o({ref:t},h),{},{components:n})):a.createElement(g,o({ref:t},h))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var d=2;d<r;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},22425:function(e,t,n){var a=n(67294);class i extends a.Component{render(){return a.createElement("div",{className:"code-header"},a.createElement("div",null,a.createElement("h5",null,this.props.children)))}}t.Z=i},44035:function(e,t,n){var a=n(67294),i=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,r=e.height,o=(0,i.Z)(e.imageSource);return t?a.createElement("div",{className:"figure noshadow"},a.createElement("a",{href:o,target:"_blank"},a.createElement("img",{width:n,height:r,src:o})),a.createElement("p",null,e.children)):a.createElement("div",{className:"figure"},a.createElement("a",{href:o,target:"_blank"},a.createElement("img",{width:n,height:r,src:o})),a.createElement("p",null,e.children))}},29415:function(e,t,n){var a=n(67294),i=n(88678);const r=a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class o extends a.Component{render(){return a.createElement(i.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:r},this.props.children)}}t.Z=o},88678:function(e,t,n){var a=n(67294);class i extends a.Component{render(){const e=`highlight highlight-${this.props.type}`;return a.createElement("div",{className:e},a.createElement("div",{className:"highlight-heading"},a.createElement("h5",null,a.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),a.createElement("div",{className:"highlight-content"},this.props.children))}}t.Z=i},93054:function(e,t,n){var a=n(67294),i=n(88678);const r=a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));class o extends a.Component{render(){return a.createElement(i.Z,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:r},this.props.children)}}t.Z=o},1594:function(e,t,n){n.r(t),n.d(t,{assets:function(){return w},contentTitle:function(){return T},default:function(){return k},frontMatter:function(){return f},metadata:function(){return y},toc:function(){return b}});var a=n(3905),i=n(39130),r=n(44035),o=n(29415),s=n(22425),l=n(93054),d=Object.defineProperty,h=Object.defineProperties,c=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,x=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&m(e,n,t[n]);if(p)for(var n of p(t))g.call(t,n)&&m(e,n,t[n]);return e};const f={id:"texts-and-fonts",title:"Texts and Fonts"},T=void 0,y={unversionedId:"development/ui-development/touchgfx-engine-features/texts-and-fonts",id:"development/ui-development/touchgfx-engine-features/texts-and-fonts",title:"Texts and Fonts",description:"",source:"@site/docs/development/ui-development/touchgfx-engine-features/texts-and-fonts.mdx",sourceDirName:"development/ui-development/touchgfx-engine-features",slug:"/development/ui-development/touchgfx-engine-features/texts-and-fonts",permalink:"/4.20/docs/development/ui-development/touchgfx-engine-features/texts-and-fonts",draft:!1,tags:[],version:"current",frontMatter:{id:"texts-and-fonts",title:"Texts and Fonts"},sidebar:"docs",previous:{title:"Mixins",permalink:"/4.20/docs/development/ui-development/touchgfx-engine-features/mixins"},next:{title:"Languages and Characters",permalink:"/4.20/docs/development/ui-development/touchgfx-engine-features/languages-and-characters"}},w={},b=[{value:"Texts and Typographies",id:"texts-and-typographies",level:2},{value:"The Text Converter",id:"the-text-converter",level:2},{value:"Translations",id:"translations",level:3},{value:"Recommendations",id:"recommendations",level:4},{value:"The Font Converter",id:"the-font-converter",level:2},{value:"Character Memory Optimization",id:"character-memory-optimization",level:2},{value:"Wildcards",id:"wildcards",level:2},{value:"Using Wildcards in TouchGFX Designer",id:"using-wildcards-in-touchgfx-designer",level:3},{value:"Using Wildcards in User Code",id:"using-wildcards-in-user-code",level:3},{value:"Text Placement",id:"text-placement",level:2},{value:"Alignment",id:"alignment",level:3},{value:"Setting the Correct Width and Height of a TextArea",id:"setting-the-correct-width-and-height-of-a-textarea",level:3},{value:"Setting the Correct X and Y for a TextArea",id:"setting-the-correct-x-and-y-for-a-textarea",level:3},{value:"Automatic Wrapping of Long Text Lines",id:"automatic-wrapping-of-long-text-lines",level:3},{value:"Available Wide Text Actions",id:"available-wide-text-actions",level:4},{value:"Switching Language",id:"switching-language",level:2},{value:"In TouchGFX Designer",id:"in-touchgfx-designer",level:3}],v={toc:b};function k(e){var t,n=e,{components:d}=n,m=((e,t)=>{var n={};for(var a in e)u.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&p)for(var a of p(e))t.indexOf(a)<0&&g.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=x(x({},v),m),h(t,c({components:d,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"Texts and fonts are very important aspects of modern graphical user interfaces. It is important to be able to display high quality anti-aliased texts in all the languages that your application supports."),(0,a.kt)("p",null,"TouchGFX supports the creation and modification of texts and typographies through the ",(0,a.kt)("a",x({parentName:"p"},{href:"../designer-user-guide/texts-view"}),"Texts View")," of TouchGFX Designer. TouchGFX Designer outputs text and typography configurations into a database located at ",(0,a.kt)("inlineCode",{parentName:"p"},"assets/texts/texts.xml"),".\nThis database, along with font files are fed to the font- and text-converter tools, producing generated C++ code files, that TouchGFX can render."),(0,a.kt)("p",null,"This article introduces the text and font converter tools and explains how to use the generated texts in an application through code and TouchGFX Designer."),(0,a.kt)("h2",x({},{id:"texts-and-typographies"}),"Texts and Typographies"),(0,a.kt)("p",null,"The texts and typographies in a TouchGFX application are stored in the ",(0,a.kt)("inlineCode",{parentName:"p"},"assets/texts/texts.xml"),' database. This database contains the texts with translations and the typographies used in the application. The database is commonly referred to as the "text database".'),(0,a.kt)("p",null,"The texts and typographies can be edited in TouchGFX Designer with the ",(0,a.kt)("a",x({parentName:"p"},{href:"../designer-user-guide/texts-view"}),"Texts View"),", which enables easy and convenient editing."),(0,a.kt)("p",null,"It is, however, possible to edit the typographies and texts directly in the texts.xml and to assist this editing, an XML schema is supplied for validation ",(0,a.kt)("inlineCode",{parentName:"p"},"assets/texts/texts.xsd"),". Many known text editors have an XML plugin to support XML schema validation, e.g. VS code, Notepad++ or Emacs, Visual Studio. In general it is recommended to use TouchGFX Designer when editing texts and typographies to avoid inconsistencies in typographies and missing translations, which the XML schema cannot validate."),(0,a.kt)("p",null,"To support working with text translations outside TouchGFX Designer, e.g. using an external translator for translations, the text-converter now has a new stand-alone tool that allows exporting text translations from the text database to an Excel spreadsheet. This Excel spreadsheet can then be shared with external translators. When the translations have been updated, the same tool can be used to import the Excel spreadsheet back into the text database. More about working with ",(0,a.kt)("a",x({parentName:"p"},{href:"#translations"}),"Translations"),"."),(0,a.kt)(o.Z,{mdxType:"FurtherReading"},"To learn more about how to create and edit typographies, texts, translations and languages go to ",(0,a.kt)(i.Z,{to:"../designer-user-guide/texts-view",mdxType:"Link"},"Texts View")),(0,a.kt)("h2",x({},{id:"the-text-converter"}),"The Text Converter"),(0,a.kt)("p",null,"The text converter is the tool that converts the text information in the text database to an internal C++ format used by TouchGFX applications. The tool is an integrated part of the build tool-chain and will be executed automatically when building the application. The text converter will only generate new C++ code if the translations or text properties in the text database have been modified or new texts or translations has been added."),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/texts-and-fonts/text-converter-4.18.png",mdxType:"Figure"}),(0,a.kt)(l.Z,{mdxType:"Note"},"The output directory of the text converter is `generated/texts/`."),(0,a.kt)("p",null,"The text converter converts all the texts specified in the text database into the text format used by TouchGFX. The format is wrapped in an object called ",(0,a.kt)("inlineCode",{parentName:"p"},"TypedText"),". A ",(0,a.kt)("inlineCode",{parentName:"p"},"TypedText")," in TouchGFX is a combined entity of the text contents itself and the typography of the text. The typography contains the font and font size of the text and the bits per pixel (bpp) used in anti-aliasing the glyphs of the font."),(0,a.kt)("p",null,"The text converter generates a file called ",(0,a.kt)("inlineCode",{parentName:"p"},"generated/texts/include/texts/TextKeysAndLanguages.hpp"),". This file contains an enum ",(0,a.kt)("inlineCode",{parentName:"p"},"TEXTS")," that references all texts in the text database."),(0,a.kt)("p",null,"Notice that all entries in the enum are generated from the id stated in each text node in the text database, but with a T_ prepended and converted to uppercase. These enum values are used in applications to initialize TypedTexts."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"TextKeysAndLanguages.hpp")," also contains an enum ",(0,a.kt)("inlineCode",{parentName:"p"},"LANGUAGES")," that specifies all the languages that are present in the text database. The naming is the same as in the language column in the text database."),(0,a.kt)(s.Z,{mdxType:"CodeHeader"},"generated/texts/include/texts/TextKeysAndLanguages.hpp"),(0,a.kt)("pre",null,(0,a.kt)("code",x({parentName:"pre"},{className:"language-cpp"}),"/* DO NOT EDIT THIS FILE */\n/* This file is autogenerated by the text-database code generator */\n\n#ifndef TEXT_KEYS_AND_LANGUAGES_HPP\n#define TEXT_KEYS_AND_LANGUAGES_HPP\n\n\ntypedef enum {\n    GB,\n    DE,\n    NUMBER_OF_LANGUAGES\n} LANGUAGES;\n\n\ntypedef enum {\n    T_TEMPERATURE_READOUT,\n    T_TEMPERATURE_HEADLINE,\n    NUMBER_OF_TEXT_KEYS\n} TEXTS;\n\n#endif /* TEXT_KEYS_AND_LANGUAGES_HPP */\n")),(0,a.kt)("h3",x({},{id:"translations"}),"Translations"),(0,a.kt)("p",null,"This section gives a brief description of the workflow when exporting and importing text translations."),(0,a.kt)("p",null,"Consider the scenario where a developer has created an application containing texts and these texts needs to be translated to several different languages. The developer uses an external translator and needs to export the texts so they can be sent to the translator."),(0,a.kt)("p",null,"To export the texts, the developer uses the new tool, which is located in ",(0,a.kt)("inlineCode",{parentName:"p"},"touchgfx/framework/tools/textconvert/translations.rb"),". The tool can be run in the TouchGFX Environment. Running the tool without any arguments, will print the following help text:"),(0,a.kt)("pre",null,(0,a.kt)("code",x({parentName:"pre"},{}),'$ translations.rb\nExport and import the text database for translation using e.g. Excel\n\nUsage: translations.rb {export|import} assets/texts/texts.xml translations.xlsx [language]*\n\nExport: Will create the "translations.xlsx" by extracting the texts for\n        all languages from the given assets/texts/texts.xml\n\nImport: Will merge the text translations from "translations.xlsx" into\n        the given assets/texts/texts.xml. Only the actual texts are\n        imported, not alignment and text direction.\n\nIf no languages are specified, all languages will be handled,\notherwise only the specified languages are imported/exported.\n')),(0,a.kt)("p",null,"To export all languages do:"),(0,a.kt)("pre",null,(0,a.kt)("code",x({parentName:"pre"},{}),"$ translations.rb export assets/texts/texts.xml translations.xlsx\n")),(0,a.kt)("p",null,"To export specific languages, e.g. English, French and Arabic do:"),(0,a.kt)("pre",null,(0,a.kt)("code",x({parentName:"pre"},{}),"$ translations.rb export assets/texts/texts.xml translations.xlsx English French Arabic\n")),(0,a.kt)("p",null,"Now the Excel spreadsheet ",(0,a.kt)("inlineCode",{parentName:"p"},"touchgfx/framework/tools/textconvert/translations.xlsx")," can be shared with the translator, see example below."),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/texts-and-fonts/spreadsheet-empty-translations.png",mdxType:"Figure"},"Excel spreadsheet - empty translations"),(0,a.kt)(l.Z,{mdxType:"Note"},(0,a.kt)("li",null,"Languages must be added in TouchGFX Designer and not in the Excel spreadsheet."),(0,a.kt)("li",null,"Typographies, alignments and directions must be set in TouchGFX Designer and not in the Excel spreadsheet."),(0,a.kt)("li",null,"Only cells containing translations are unlocked for editing in the Excel spreadsheet.")),(0,a.kt)("p",null,"The corresponding Texts View in TouchGFX Designer."),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/texts-and-fonts/texts-view-empty-translations.png",mdxType:"Figure"},"Texts View - empty translations"),(0,a.kt)("p",null,"When the translations are done and returned to the developer they can be imported into the text database."),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/texts-and-fonts/spreadsheet-updated-translations.png",mdxType:"Figure"},"Excel spreadsheet - updated translations"),(0,a.kt)("p",null,"To import all languages do:"),(0,a.kt)("pre",null,(0,a.kt)("code",x({parentName:"pre"},{}),"$ translations.rb import assets/texts/texts.xml translations.xlsx\n")),(0,a.kt)("p",null,"To import specific languages, e.g. French and Arabic do:"),(0,a.kt)("pre",null,(0,a.kt)("code",x({parentName:"pre"},{}),"$ translations.rb import assets/texts/texts.xml translations.xlsx French Arabic\n")),(0,a.kt)("p",null,"Now the text database is updated with the translations."),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/texts-and-fonts/texts-view-updated-translations.png",mdxType:"Figure"},"Texts View - updated translations"),(0,a.kt)("h4",x({},{id:"recommendations"}),"Recommendations"),(0,a.kt)("p",null,"Exporting texts for translation and importing them again, should be done on the same baseline of the text database, that way potential conflicts are avoided during the import process. If you are using a version control system, e.g. Git, it is recommended to make a branch before exporting and then update this branch with the text translations after they are done and finally merge the branch back to the main branch."),(0,a.kt)("p",null,"The figure below illustrates an example where Arabic and French translations are imported to a translation branch and merged back to the main branch. It is also shown how you should be careful when making changes to the text database on the main branch while work is done on a translation branch, as merge conflicts will arise."),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/texts-and-fonts/branch-example.png",mdxType:"Figure"},"Branch example"),(0,a.kt)("p",null,"Merge conflicts will arise in these cases:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Deleting a text id in the text database on the main branch"),(0,a.kt)("li",{parentName:"ul"},"Adding a text id in the text database on the main branch"),(0,a.kt)("li",{parentName:"ul"},"Renaming a text id in the text database on the main branch")),(0,a.kt)("h2",x({},{id:"the-font-converter"}),"The Font Converter"),(0,a.kt)("p",null,"The font converter is a tool that combines the information in font files with information in the text database and generates the characters needed by the application. The output format is an internal C++ format used by TouchGFX applications. The tool is an integrated part of the build tool-chain and will be executed automatically when building the simulator."),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/texts-and-fonts/font-converter-4.18.png",mdxType:"Figure"}),(0,a.kt)("p",null,"The Font Converter accepts"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"TrueType (.ttf)"),(0,a.kt)("li",{parentName:"ul"},"OpenType (.otf)"),(0,a.kt)("li",{parentName:"ul"},"Glyph Bitmap Distribution Format (.bdf).")),(0,a.kt)(l.Z,{mdxType:"Note"},"For Glyph Bitmap Distribution Format fonts (.bdf), not all font sizes can be rendered with the font. If the given size in the typography sheet does not match with the given font, the font convert utility will report the supported font sizes. Updating the size in the Typography Sheet to one of the supported sizes will solve the problem."),(0,a.kt)("p",null,"Simply place the font in the ",(0,a.kt)("inlineCode",{parentName:"p"},"assets/fonts/")," folder and the font will be available for reference in TouchGFX Designer ",(0,a.kt)("em",{parentName:"p"},"(If the font is added while TouchGFX Designer is running, it must be restarted to update the available fonts)"),"."),(0,a.kt)("p",null,"In TouchGFX Designer, it is also possible to use the fonts installed in Windows, selecting any of these fonts will automatically add them to the ",(0,a.kt)("inlineCode",{parentName:"p"},"assets/fonts/")," folder"),(0,a.kt)("p",null,"The Font Converter supports kerning by using the kerning information in the supplied font."),(0,a.kt)(l.Z,{mdxType:"Note"},(0,a.kt)("li",null,"Using TouchGFX does not in any way provide licenses for commercial use of any TrueType, OpenType or Bitmap fonts."),(0,a.kt)("li",null,"The output directory of the font converter is generated/fonts/.")),(0,a.kt)("h2",x({},{id:"character-memory-optimization"}),"Character Memory Optimization"),(0,a.kt)("p",null,"TouchGFX is optimized for low memory consumption. By analyzing the characters used for a specific typography, the number of generated characters (in internal C++ format) are minimized to the characters that are actually used by the application."),(0,a.kt)("p",null,"Text memory consumption is also optimized by compacting texts that use common suffixes by enabling the option to remap texts in the ",(0,a.kt)("a",x({parentName:"p"},{href:"../designer-user-guide/config-view#text-configuration"}),"Text Configuration"),"."),(0,a.kt)("h2",x({},{id:"wildcards"}),"Wildcards"),(0,a.kt)("p",null,"It is possible to use runtime values as part of texts. This is possible by use of wildcards in the texts. These are specified in the given format ",(0,a.kt)("inlineCode",{parentName:"p"},"<*>"),", where the * represents an optional helping text which will not be included in the resulting text. It is possible to have up to two wildcards in one text."),(0,a.kt)("p",null,"All translations for a given text must contain the same number of wildcards. The wildcard values are inserted at runtime in the application C++ code."),(0,a.kt)("p",null,"Example of wildcard usage: ",(0,a.kt)("strong",{parentName:"p"},"The temperature is ","<","insert_temperature",">","\xb0")),(0,a.kt)("p",null,'One detail to notice is that due to the character memory optimization (see section above) the only characters that are generated for a specific typography are the ones used in texts having this typography. To force the font generator to include certain characters, you can use "',(0,a.kt)("em",{parentName:"p"},"Wildcard Characters"),'" and "',(0,a.kt)("em",{parentName:"p"},"Character Ranges"),'" for each typography.'),(0,a.kt)("p",null,"The wildcard format ",(0,a.kt)("inlineCode",{parentName:"p"},"<*>")," can be escaped by using backslash notation like this: ",(0,a.kt)("strong",{parentName:"p"},"\\","<","not a wildcard\\",">"),'. This will result in the literal text "',(0,a.kt)("em",{parentName:"p"},"<","not a wildcard",">"),'" being used in the application.'),(0,a.kt)("h3",x({},{id:"using-wildcards-in-touchgfx-designer"}),"Using Wildcards in TouchGFX Designer"),(0,a.kt)("p",null,"In TouchGFX Designer, wildcards can be added to regular TextAreas. Effectively this now makes the TextArea widget cover the functionality previously covered by the TextAreaWithOneWildcard/TextAreaWithTwoWildcards widgets, although there is no changes to how the code is generated in TouchGFX."),(0,a.kt)("p",null,"In TouchGFX Designer you can add Wildcards to TextAreas by simply clicking the '+' button ",(0,a.kt)("em",{parentName:"p"},"Add Wildcard")," in properties for the selected TextArea. Click the corresponding '-' button to remove wildcards. A well-known example is adding a temperature reading to a TextArea, which could say ",(0,a.kt)("em",{parentName:"p"},"The temperature is \xb0"),". In this case it could be an outdoor temperature reading. Here we want to insert a Wildcard that not only displays a static number, but also updates according to temperature readings. The Wildcard will be added to the current position of the in-text caret:"),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/texts-and-fonts/adding-wild-card-to-text-area-4.17.png",mdxType:"Figure"},"Adding a wildcard to a Text Area widget"),(0,a.kt)("p",null,"Now our text in properties will display ",(0,a.kt)("em",{parentName:"p"},"The temperature is ","<","value",">","\xb0"),", while our text on canvas displays ",(0,a.kt)("em",{parentName:"p"},"The temperature is  \xb0"),":"),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/texts-and-fonts/temperature-wildcard-example.png",mdxType:"Figure"},"Text Area widget with wildcard in TouchGFX Designer"),(0,a.kt)("p",null,"To set up the specific wildcard you can click the corresponding Wildcard button (in this example Wildcard 1), which allows editing the Wildcard we just added."),(0,a.kt)("p",null,"Here you can choose how you will update the wildcard. Either with predefined resource texts or by dynamic run-time created texts. In both cases, you can update the text at run-time. To use an auto-generated text, click the '+' ",(0,a.kt)("em",{parentName:"p"},"Create auto-generated text")," or select an existing text. Use a wildcard buffer if dynamic text is needed. Such a buffer is created by selecting the ",(0,a.kt)("em",{parentName:"p"},"Use wildcard Buffer")," check mark. In this case you also need to specify a size (number of characters) of the buffer. If you want to be memory efficient, you need to match the specified size as closely as possible with your actual needed text size. Remember to add one extra space for the string termination (\u2018\\0\u2019)."),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/texts-and-fonts/wildcard-add-auto-generated-text.png",mdxType:"Figure"},"Add auto-generated text to wildcard in TouchGFX Designer"),(0,a.kt)("p",null,"You can also set an initial value for the Wildcard, enabling you to see how the final TextArea could look with a temperature reading:"),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/texts-and-fonts/wildcard-setup-in-touchgfx-deisgner-4.17.png",mdxType:"Figure"},"Wildcard settings in TouchGFX Designer"),(0,a.kt)("h3",x({},{id:"using-wildcards-in-user-code"}),"Using Wildcards in User Code"),(0,a.kt)("p",null,"Wildcards can also be added and updated via User Code as shown in the code example below, where a ",(0,a.kt)("inlineCode",{parentName:"p"},"Unicode::UnicodeChar")," array is managed and updated."),(0,a.kt)(s.Z,{mdxType:"CodeHeader"},"gui/include/gui/some_screen/SomeView.hpp"),(0,a.kt)("pre",null,(0,a.kt)("code",x({parentName:"pre"},{className:"language-cpp"}),"#include <touchgfx/widgets/TextAreaWithWildcard.hpp>\n...\nclass SomeView : public View<SomePresenter>\n{\n  TextAreaWithOneWildcard txt;\n  Unicode::UnicodeChar txtBuffer[10];\n}\n")),(0,a.kt)(s.Z,{mdxType:"CodeHeader"},"gui/src/some_screen/SomeView.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",x({parentName:"pre"},{className:"language-cpp"}),'#include <texts/TextKeysAndLanguages.hpp>\n\nvoid SomeView::setupScreen()\n{\n  txt.setTypedText(TypedText(T_TEMPERATURE_READOUT));\n  txt.setXY(10, 20);\n  txt.setWildcard(txtBuffer);\n  add(txt);\n\n  updateTxt(5);\n}\n\nvoid SomeView::updateTxt(int newValue)\n{\n  Unicode::snprintf(txtBuffer, 10, "%d", newValue);\n  txt.invalidate();\n}\n')),(0,a.kt)("h2",x({},{id:"text-placement"}),"Text Placement"),(0,a.kt)("p",null,"As for all TouchGFX widgets a TextArea is placed on the screen by specifying a position (X and Y) and a dimension (width and height). This is easily done via TouchGFX Designer in the widgets properties, However the rendering of text in TouchGFX Designer is not always 100% acurrate compared to how the text is rendered by TouchGFX."),(0,a.kt)("p",null,"There are also a few more details and possibilites to be aware of when dealing with texts, decribed in this section."),(0,a.kt)("h3",x({},{id:"alignment"}),"Alignment"),(0,a.kt)("p",null,"The text inside the TextArea is aligned according to the alignment specified for the chosen text entry in the text database. The text is aligned with respect to the area of the TextArea. In the following screenshots the area of the TextArea is highlighted in blue."),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/texts-and-fonts/text-left-align.png",mdxType:"Figure"},"Left aligned text"),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/texts-and-fonts/text-center-align.png",mdxType:"Figure"},"Center aligned text"),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/texts-and-fonts/text-right-align.png",mdxType:"Figure"},"Right aligned text"),(0,a.kt)("p",null,"These settings can be set in TouchGFX Designer ",(0,a.kt)("a",x({parentName:"p"},{href:"../designer-user-guide/texts-view"}),"Texts View"),"."),(0,a.kt)("h3",x({},{id:"setting-the-correct-width-and-height-of-a-textarea"}),"Setting the Correct Width and Height of a TextArea"),(0,a.kt)("p",null,"A TextArea is able to adjust its width and height according to the currently selected text. This is done by calling the ",(0,a.kt)("inlineCode",{parentName:"p"},"TextArea::resizeToCurrentText()")," method."),(0,a.kt)(l.Z,{mdxType:"Note"},"`resizeToCurrentText()` is called automatically when instantiating a TextArea with a new TypedText if the width and height are not set."),(0,a.kt)("p",null,"When using center/right aligned text you most often do not want to resize the width and height because your text needs to be centered/right aligned in a fixed area. In this case set the width and height manually. This can be done by calling ",(0,a.kt)("inlineCode",{parentName:"p"},"TextArea::setPosition(x, y, width, height)"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"TextArea::setWidth(width)")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"TextArea::setHeight(height)"),"."),(0,a.kt)("p",null,"If your width and/or height is too small to fit the text, the text will be clipped to the area as can be seen below."),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/texts-and-fonts/text-cutoff.png",mdxType:"Figure"},"Text cut off by the bounds of the TextArea widget size"),(0,a.kt)("h3",x({},{id:"setting-the-correct-x-and-y-for-a-textarea"}),"Setting the Correct X and Y for a TextArea"),(0,a.kt)("p",null,"To place a TextArea at the correct X and Y position, you need to be aware of the fact that the font used will have some extra spacing above the characters to allow for large characters. This makes it a bit hard to place a TextArea according to a Y position for the upper left corner, since you do not know the exact spacing above your text.\nOne way of placing a text is to specify the position where you believe it should be and then fine tune the position by inspecting the placement in the simulator. This is most often a fairly simple task but it has to be redone if you change the font or font size later on."),(0,a.kt)("p",null,'A more robust way of doing it is to use text baseline. The baseline is the line upon which most letters "sit" and below which descenders (characters like p and j) extend.'),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/texts-and-fonts/text-baseline.png",mdxType:"Figure"},"Baseline for text"),(0,a.kt)("p",null,"To set a text baseline use the ",(0,a.kt)("inlineCode",{parentName:"p"},"TextArea::setBaselineY(y)")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"TextArea::setXBaselineY(x, y)"),". For these methods you do not specify the upper left corner of the TextArea but instead the baseline of the first text line. This will take the font size and spacing into account and set the Y position of the TextArea accordingly."),(0,a.kt)("p",null,"The baseline functionality is not available in TouchGFX Designer, since TextArea widget placement is easily done via TouchGFX Designer Canvas, and can therefore only be used in User Code."),(0,a.kt)(l.Z,{mdxType:"Note"},"The TextArea needs to have its TypedText set before calling setBaselineY since it relies on the font. Also be aware that you need to call `setBaselineY` again if you change the TextAreas TypedText to one with a different font or font size."),(0,a.kt)("h3",x({},{id:"automatic-wrapping-of-long-text-lines"}),"Automatic Wrapping of Long Text Lines"),(0,a.kt)("p",null,"Sometimes a TextArea needs to contain a text which is very long. By default, such text is simply written as a single line and all text that does not fit inside the TextArea is simpy cut off. If instead the text should be wrapped at spaces and re-flowed to fill several lines, simply call:"),(0,a.kt)("pre",null,(0,a.kt)("code",x({parentName:"pre"},{className:"language-cpp"}),"myTextArea.setWideTextAction(WIDE_TEXT_WORDWRAP); // Default is WIDE_TEXT_NONE\n")),(0,a.kt)("h4",x({},{id:"available-wide-text-actions"}),"Available Wide Text Actions"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"WIDE_TEXT_NONE"),": Do nothing, simply cut the text in the middle of any character that extends beyond the width of the TextArea."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"WIDE_TEXT_WORDWRAP"),': Wrap between words, ellipsis anywhere "Very long t...".'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"WIDE_TEXT_WORDWRAP_ELLIPSIS_AFTER_SPACE"),': Wrap between words, ellipsis anywhere only after space "Very long ...".'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"WIDE_TEXT_CHARWRAP"),": Wrap between any two characters, ellipsis anywhere, as used in Chinese."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"WIDE_TEXT_CHARWRAP_DOUBLE_ELLIPSIS"),":Wrap between any two characters, double ellipsis anywhere, as used in Chinese.")),(0,a.kt)(o.Z,{mdxType:"FurtherReading"},(0,a.kt)(i.Z,{to:"../../../api/namespacetouchgfx#ad7afabd7637aed4278f7e26434b860c7",mdxType:"Link"},"API Reference for the WideTextAction enum")),(0,a.kt)("p",null,"This will probably make the TextArea need more vertical space. This can either be achieved by increasing the height of the TextArea in the Designer or it can be done in user code as follows."),(0,a.kt)("pre",null,(0,a.kt)("code",x({parentName:"pre"},{className:"language-cpp"}),"myTextArea.setWidth(200);\nmyTextArea.resizeHeightToCurrentText(); // Will set height by wrapping text at 200px long lines\nmyTextArea.invalidate();\n")),(0,a.kt)("p",null,"Remember to call ",(0,a.kt)("inlineCode",{parentName:"p"},"myTextArea.invalidate()")," before resizing ",(0,a.kt)("inlineCode",{parentName:"p"},"myTextArea")," if you are decreasing the text area size. If not, you will still see part of the old text area, since it is not covered by the new smaller text area."),(0,a.kt)("h2",x({},{id:"switching-language"}),"Switching Language"),(0,a.kt)("p",null,"TouchGFX supports multi language interfaces. The current language used in the interface can be changed by calling the static method ",(0,a.kt)("inlineCode",{parentName:"p"},"Texts::setLanguage"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",x({parentName:"pre"},{className:"language-cpp"}),"Texts::setLanguage(GB);\n")),(0,a.kt)("p",null,"The value ",(0,a.kt)("em",{parentName:"p"},"GB")," is found in the ",(0,a.kt)("inlineCode",{parentName:"p"},"LANGUAGES")," enum in the ",(0,a.kt)("inlineCode",{parentName:"p"},"TextKeysAndLanguages.hpp")," as shown in the example in ",(0,a.kt)("a",x({parentName:"p"},{href:"#the-text-converter"}),"The Text Converter")," section."),(0,a.kt)("p",null,"After this call, invalidate all widgets that display texts (or simply invalidate the entire screen) and they will display texts in the newly selected language."),(0,a.kt)("h3",x({},{id:"in-touchgfx-designer"}),"In TouchGFX Designer"),(0,a.kt)("p",null,"You can switch between languages, enabling testing for all translations. This is done from ",(0,a.kt)("a",x({parentName:"p"},{href:"../designer-user-guide/config-view#general"}),"General section of the Config view"),". Here you simply change the startup language of the application by changing the ",(0,a.kt)("em",{parentName:"p"},"Selected Language"),"."))}k.isMDXComponent=!0}}]);