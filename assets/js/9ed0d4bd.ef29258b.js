"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[862],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return g}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),d=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=d(r),g=n,u=m["".concat(l,".").concat(g)]||m[g]||c[g]||i;return r?a.createElement(u,o(o({ref:t},s),{},{components:r})):a.createElement(u,o({ref:t},s))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:n,o[1]=p;for(var d=2;d<i;d++)o[d]=r[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5368:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return p},metadata:function(){return d},toc:function(){return c}});var a=r(3117),n=r(102),i=(r(7294),r(3905)),o=["components"],p={title:"Embed MicroStrategy Library home page",description:"The Embedding SDK allows you to quickly integrate a MicroStrategy Library home page into a web application in a responsive manner. It also provides resources to add functionality such as toggling the navigation bar and sidebar, and getting group data of the current user."},l=void 0,d={unversionedId:"embed-library-main-page/embed-library-main-page",id:"embed-library-main-page/embed-library-main-page",title:"Embed MicroStrategy Library home page",description:"The Embedding SDK allows you to quickly integrate a MicroStrategy Library home page into a web application in a responsive manner. It also provides resources to add functionality such as toggling the navigation bar and sidebar, and getting group data of the current user.",source:"@site/docs/embed-library-main-page/embed-library-main-page.md",sourceDirName:"embed-library-main-page",slug:"/embed-library-main-page/",permalink:"/embedding-sdk-docs/embed-library-main-page/",draft:!1,editUrl:"https://github.com/MicroStrategy/embedding-sdk-docs/tree/public/docs/embed-library-main-page/embed-library-main-page.md",tags:[],version:"current",lastUpdatedBy:"magua-io",lastUpdatedAt:1665688641,formattedLastUpdatedAt:"Oct 13, 2022",frontMatter:{title:"Embed MicroStrategy Library home page",description:"The Embedding SDK allows you to quickly integrate a MicroStrategy Library home page into a web application in a responsive manner. It also provides resources to add functionality such as toggling the navigation bar and sidebar, and getting group data of the current user."},sidebar:"tutorialSidebar",previous:{title:"How to handle dossier link in email",permalink:"/embedding-sdk-docs/add-functionality/use-custom-dossier-link"},next:{title:"Properties for an embedded MicroStrategy Library home page",permalink:"/embedding-sdk-docs/embed-library-main-page/embed-library-properties"}},s={},c=[],m={toc:c};function g(e){var t=e.components,r=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The Embedding SDK allows you to quickly integrate a MicroStrategy Library home page into a web application in a responsive manner. It also provides resources to add functionality such as toggling the navigation bar and sidebar, and getting group data of the current user."),(0,i.kt)("p",null,"There are three basic steps for embedding a MicroStrategy Library home page."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the initial page of your web application, add a link to the MicroStrategy JavaScript Embedding SDK."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<script src="{YOUR_LIBRARY_SERVER_URL}/javascript/embeddinglib.js"><\/script>\n')),(0,i.kt)("p",{parentName:"li"},"Replace ",(0,i.kt)("inlineCode",{parentName:"p"},"{YOUR_LIBRARY_SERVER_URL}")," with your actual MicroStrategy Library Server URL, e.g., ",(0,i.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary"},"https://demo.microstrategy.com/MicroStrategyLibrary"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create a\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"<div>"),"\xa0as the placeholder where you want to embed the dossier."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<div id="dossierContainer"></div>\n'))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Call the\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"microstrategy.embeddingContexts.embedLibraryPage(props)"),"\xa0method when the application has finished loading."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-js"},'microstrategy.embeddingContexts.embedLibraryPage({\n  serverUrl: "{YOUR_LIBRARY_SERVER_URL}",\n  placeholder: document.getElementById("dossierContainer"),\n});\n')))),(0,i.kt)("p",null,"To help you get started, we have provided a number of simple applications with sample code and explanations."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/embedding-sdk-docs/embed-library-main-page/embed-library-properties"},"Properties for an embedded MicroStrategy Library home page")),(0,i.kt)("p",{parentName:"li"},"Describes the properties that can be set for an embedded MicroStrategy Library home page.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/embedding-sdk-docs/embed-library-main-page/library-page-apis"},"Library page APIs")),(0,i.kt)("p",{parentName:"li"},"Describes which Embedding SDK APIs are available on the MicroStrategy Library home page."))))}g.isMDXComponent=!0}}]);