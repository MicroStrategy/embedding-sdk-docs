"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[971],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return u}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=d(n),u=a,g=m["".concat(p,".").concat(u)]||m[u]||c[u]||i;return n?r.createElement(g,o(o({ref:t},l),{},{components:n})):r.createElement(g,o({ref:t},l))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1269:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return c}});var r=n(3117),a=n(102),i=(n(7294),n(3905)),o=["components"],s={title:"Introduction to the Embedding SDK",slug:"/",description:"The Embedding SDK allows you to quickly integrate a MicroStrategy dossier into a web application in a responsive manner. It also provides resources to add functionality such as controlling navigation, retrieving and applying filters, setting properties, and managing events, and supports several different authentication environments."},p=void 0,d={unversionedId:"index",id:"index",title:"Introduction to the Embedding SDK",description:"The Embedding SDK allows you to quickly integrate a MicroStrategy dossier into a web application in a responsive manner. It also provides resources to add functionality such as controlling navigation, retrieving and applying filters, setting properties, and managing events, and supports several different authentication environments.",source:"@site/docs/index.md",sourceDirName:".",slug:"/",permalink:"/embedding-sdk-docs/",draft:!1,editUrl:"https://github.com/MicroStrategy/embedding-sdk-docs/tree/public/docs/index.md",tags:[],version:"current",lastUpdatedBy:"elinmstr",lastUpdatedAt:1677601456,formattedLastUpdatedAt:"Feb 28, 2023",frontMatter:{title:"Introduction to the Embedding SDK",slug:"/",description:"The Embedding SDK allows you to quickly integrate a MicroStrategy dossier into a web application in a responsive manner. It also provides resources to add functionality such as controlling navigation, retrieving and applying filters, setting properties, and managing events, and supports several different authentication environments."},sidebar:"tutorialSidebar",next:{title:"What's new in the Embedding SDK",permalink:"/embedding-sdk-docs/whats-new-in-the-embedding-sdk"}},l={},c=[],m={toc:c};function u(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The Embedding SDK allows you to quickly integrate a MicroStrategy dossier into a web application in a responsive manner. It also provides resources to add functionality such as controlling navigation, retrieving and applying filters, setting properties, and managing events, and supports several different authentication environments."),(0,i.kt)("p",null,"There are three basic steps for embedding a dossier."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the initial page of your web application, add a link to the MicroStrategy JavaScript Embedding SDK."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<script src="{YOUR_LIBRARY_SERVER_URL}/javascript/embeddinglib.js"><\/script>\n')),(0,i.kt)("p",{parentName:"li"},"Replace ",(0,i.kt)("inlineCode",{parentName:"p"},"{YOUR_LIBRARY_SERVER_URL}")," with your actual MicroStrategy Library Server URL, e.g., ",(0,i.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary"},"https://demo.microstrategy.com/MicroStrategyLibrary"),"."),(0,i.kt)("admonition",{parentName:"li",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"If the application server is different from the server running the\xa0MicroStrategyLibrary\xa0application, you may need to ",(0,i.kt)("a",{parentName:"p",href:"/embedding-sdk-docs/config"},"perform additional configuration to support Cross-Origin Resource Sharing (CORS)"),"."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create a\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"<div>"),"\xa0as the placeholder where you want to embed the dossier."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<div id="dossierContainer"></div>\n'))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Call the\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"microstrategy.dossier.create(props)"),"\xa0method when the application has finished loading."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-js"},'const placeholderDiv = document.getElementById("dossierContainer");\nmicrostrategy.dossier.create({\n  placeholder: placeholderDiv,\n  url: "{YOUR_LIBRARY_SERVER_URL}/app/{PROJECT_ID}/{DOSSIER_ID}",\n});\n')),(0,i.kt)("admonition",{parentName:"li",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Check out all the ",(0,i.kt)("a",{parentName:"p",href:"/embedding-sdk-docs/add-functionality/methods-and-properties#properties"},"properties")," you can set in the ",(0,i.kt)("inlineCode",{parentName:"p"},"microstrategy.dossier.create(props)"),"\xa0method. You can do many things with the ",(0,i.kt)("a",{parentName:"p",href:"/embedding-sdk-docs/add-functionality/methods-and-properties#properties"},"properties"),". To name a few, you can set filters, show/hide UI elements, and adjust the size of the embedded dossier.")))),(0,i.kt)("p",null,"To help you get started, we have provided a number of simple applications with sample code and explanations."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/embedding-sdk-docs/support-for-different-authentication-environments/"},"Support for different authentication environments")),(0,i.kt)("p",{parentName:"li"},"Examples that display an embedded dossier in different authentication environments")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/embedding-sdk-docs/add-functionality/"},"Add functionality")),(0,i.kt)("p",{parentName:"li"},"Examples that add functionality, such as controlling navigation, retrieving and applying filters, setting properties, and managing events like page changes")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://microstrategy.github.io/playground/"},"Embedding SDK Playground")),(0,i.kt)("p",{parentName:"li"},"A playground for developers to build impactful, interactive analytics experiences that integrate seamlessly with websites and applications.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://microstrategy.github.io/embedding-sdk-samples/"},"More Embedding SDK examples on Github")),(0,i.kt)("p",{parentName:"li"},"A collection of examples highlighting functionality and workflows of the Embedding SDK. You can play with the examples with no setup."))),(0,i.kt)("p",null,"To see changes to the Embedding SDK in the current release, refer to\xa0",(0,i.kt)("a",{parentName:"p",href:"/embedding-sdk-docs/whats-new-in-the-embedding-sdk"},"What's new"),"."))}u.isMDXComponent=!0}}]);