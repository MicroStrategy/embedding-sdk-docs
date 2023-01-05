"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[754],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),m=l(n),u=i,f=m["".concat(s,".").concat(u)]||m[u]||c[u]||r;return n?a.createElement(f,o(o({ref:t},p),{},{components:n})):a.createElement(f,o({ref:t},p))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var d={};for(var s in t)hasOwnProperty.call(t,s)&&(d[s]=t[s]);d.originalType=e,d.mdxType="string"==typeof e?e:i,o[1]=d;for(var l=2;l<r;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9630:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return d},metadata:function(){return l},toc:function(){return c}});var a=n(3117),i=n(102),r=(n(7294),n(3905)),o=["components"],d={title:"Add functionality to an embedded dossier",description:"Once you have embedded a dossier, you can use helper methods in the Embedding SDK to add other functionality. The topics in this section describe how to implement different kinds of functionalities with code examples."},s=void 0,l={unversionedId:"add-functionality/add-functionality",id:"add-functionality/add-functionality",title:"Add functionality to an embedded dossier",description:"Once you have embedded a dossier, you can use helper methods in the Embedding SDK to add other functionality. The topics in this section describe how to implement different kinds of functionalities with code examples.",source:"@site/docs/add-functionality/add-functionality.md",sourceDirName:"add-functionality",slug:"/add-functionality/",permalink:"/embedding-sdk-docs/add-functionality/",draft:!1,editUrl:"https://github.com/MicroStrategy/embedding-sdk-docs/tree/public/docs/add-functionality/add-functionality.md",tags:[],version:"current",lastUpdatedBy:"xdumstr",lastUpdatedAt:1672935481,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{title:"Add functionality to an embedded dossier",description:"Once you have embedded a dossier, you can use helper methods in the Embedding SDK to add other functionality. The topics in this section describe how to implement different kinds of functionalities with code examples."},sidebar:"tutorialSidebar",previous:{title:"Seamless login using identity token",permalink:"/embedding-sdk-docs/support-for-different-authentication-environments/seamless-login"},next:{title:"Methods and properties for an embedded dossier",permalink:"/embedding-sdk-docs/add-functionality/methods-and-properties"}},p={},c=[],m={toc:c};function u(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Once you have embedded a dossier, you can use helper methods in the Embedding SDK to add other functionality. The topics in this section describe how to implement different kinds of functionalities with code examples."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/embedding-sdk-docs/add-functionality/methods-and-properties"},"Methods and properties for an embedded dossier")),(0,r.kt)("p",{parentName:"li"},"Describes the properties that can be set for an embedded dossier. Provides an example that modifies UI elements like the navigation bar and size of the embedded dossier through properties.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/embedding-sdk-docs/add-functionality/add-nav"},"Add navigation")),(0,r.kt)("p",{parentName:"li"},"Describes the methods that can be used for navigation within an embedded dossier. For example, the Embedding SDK lets you add code to get the table of contents for the dossier, go to the previous or next page, navigate to a specific page, get the current page or chapter, get a specific page, or get a list of pages, chapters and visualizations. Provides an example that illustrates how to include navigation controls to allow users to page through the various chapters and pages of an embedded dossier.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/embedding-sdk-docs/add-functionality/add-event"},"Add event handling")),(0,r.kt)("p",{parentName:"li"},"Describes events that an embedded dossier can use to communicate with the container page and methods and wrapper functions for registering event handlers. For example, the Embedding SDK lets you add code to capture selection events from one dossier and apply them as a filter to a second dossier. Provides an example that illustrates how to capture selection events from one embedded dossier and apply them as a filter to a second dossier.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/embedding-sdk-docs/add-functionality/filters"},"Retrieve and apply filters")),(0,r.kt)("p",{parentName:"li"},"Describes how to retrieve and apply filters for an embedded dossier and shows the filter details for each filter type, with code examples. For example, you can apply different kinds of filters to a chapter in a dossier, either during execution or after a dossier has been rendered. Provides examples on how to retrieve filters and apply each different type of filter.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/embedding-sdk-docs/add-functionality/error-handling"},"Error handling")),(0,r.kt)("p",{parentName:"li"},"Describes how to implement custom error handler to handle errors.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/embedding-sdk-docs/add-functionality/panel-stacks"},"Interact with panel stacks")),(0,r.kt)("p",{parentName:"li"},"Describes how to interact with panel stacks within dossier. Provides an example on panel-related APIs.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/embedding-sdk-docs/add-functionality/embed-vis"},"Embed a single visualization")),(0,r.kt)("p",{parentName:"li"},"Describes how to embed a single visualization and set it to be maximized. Provides an example that shows embedding a dossier with a single visualization maximized and options to change which visualization to be maximized.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/embedding-sdk-docs/add-functionality/attribute-element-selection"},"Enable the selection of attribute elements")),(0,r.kt)("p",{parentName:"li"},"Describes how to programmatically make attribute element selections on an embedded dossier and capture the selection events.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/embedding-sdk-docs/add-functionality/authoring-library"},"Author an embedded dossier")),(0,r.kt)("p",{parentName:"li"},"Describes how to embed a dossier in authoring or edit mode during the initial dossier load and after the dossier is loaded."))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If you plan to use Embedding SDK on a web page on a different domain from your MicroStrategy environment, please also meet the following requirements. More information in"),(0,r.kt)("ol",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/embedding-sdk-docs/config"},"Enable Cross-Origin Resource Sharing (CORS)")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/embedding-sdk-docs/config#allow-samesite-cookies"},"Allow SameSite cookies"))),(0,r.kt)("p",{parentName:"admonition"},"If you plan to use Embedding SDK on the same domain as your MicroStrategy, the above changes are not required.")))}u.isMDXComponent=!0}}]);