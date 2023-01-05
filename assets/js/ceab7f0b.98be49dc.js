"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[13],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return g}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=p(a),g=i,m=c["".concat(s,".").concat(g)]||c[g]||u[g]||r;return a?n.createElement(m,l(l({ref:t},d),{},{components:a})):n.createElement(m,l({ref:t},d))}));function g(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},8693:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return u}});var n=a(3117),i=a(102),r=(a(7294),a(3905)),l=["components"],o={title:"Add navigation",description:"Once you have embedded a dossier, you can use helper methods in the Embedding SDK to let users navigate within the dossier. For example, you can add code to get the table of contents for the dossier, go to the previous or next page, navigate to a specific page, get the current page or chapter, get a specific page, or get a list of pages, chapters and visualizations."},s=void 0,p={unversionedId:"add-functionality/add-nav",id:"add-functionality/add-nav",title:"Add navigation",description:"Once you have embedded a dossier, you can use helper methods in the Embedding SDK to let users navigate within the dossier. For example, you can add code to get the table of contents for the dossier, go to the previous or next page, navigate to a specific page, get the current page or chapter, get a specific page, or get a list of pages, chapters and visualizations.",source:"@site/docs/add-functionality/add-nav.md",sourceDirName:"add-functionality",slug:"/add-functionality/add-nav",permalink:"/embedding-sdk-docs/add-functionality/add-nav",draft:!1,editUrl:"https://github.com/MicroStrategy/embedding-sdk-docs/tree/public/docs/add-functionality/add-nav.md",tags:[],version:"current",lastUpdatedBy:"xdumstr",lastUpdatedAt:1672935481,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{title:"Add navigation",description:"Once you have embedded a dossier, you can use helper methods in the Embedding SDK to let users navigate within the dossier. For example, you can add code to get the table of contents for the dossier, go to the previous or next page, navigate to a specific page, get the current page or chapter, get a specific page, or get a list of pages, chapters and visualizations."},sidebar:"tutorialSidebar",previous:{title:"Methods and properties for an embedded dossier",permalink:"/embedding-sdk-docs/add-functionality/methods-and-properties"},next:{title:"Add event handling",permalink:"/embedding-sdk-docs/add-functionality/add-event"}},d={},u=[{value:"Helper methods for navigation",id:"helper-methods-for-navigation",level:2},{value:"getTableContent()",id:"gettablecontent",level:3},{value:"Class",id:"class",level:4},{value:"Return type",id:"return-type",level:4},{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"goToPrevPage()",id:"gotoprevpage",level:3},{value:"Class",id:"class-1",level:4},{value:"Return type",id:"return-type-1",level:4},{value:"Description",id:"description-1",level:4},{value:"Example",id:"example-1",level:4},{value:"goToNextPage()",id:"gotonextpage",level:3},{value:"Class",id:"class-2",level:4},{value:"Return type",id:"return-type-2",level:4},{value:"Description",id:"description-2",level:4},{value:"Example",id:"example-2",level:4},{value:"navigateToPage(page:Page)",id:"navigatetopagepagepage",level:3},{value:"Class",id:"class-3",level:4},{value:"Return type",id:"return-type-3",level:4},{value:"Description",id:"description-3",level:4},{value:"Example",id:"example-3",level:4},{value:"getCurrentChapter()",id:"getcurrentchapter",level:3},{value:"Class",id:"class-4",level:4},{value:"Return type",id:"return-type-4",level:4},{value:"Description",id:"description-4",level:4},{value:"Example",id:"example-4",level:4},{value:"getCurrentPage()",id:"getcurrentpage",level:3},{value:"Class",id:"class-5",level:4},{value:"Return type",id:"return-type-5",level:4},{value:"Description",id:"description-5",level:4},{value:"Example",id:"example-5",level:4},{value:"getPageByNodeKey(nodeKey)",id:"getpagebynodekeynodekey",level:3},{value:"Class",id:"class-6",level:4},{value:"Return type",id:"return-type-6",level:4},{value:"Description",id:"description-6",level:4},{value:"Example",id:"example-6",level:4},{value:"getChapterList()",id:"getchapterlist",level:3},{value:"Class",id:"class-7",level:4},{value:"Return type",id:"return-type-7",level:4},{value:"Description",id:"description-7",level:4},{value:"Example",id:"example-7",level:4},{value:"getCurrentPageVisualizationList()",id:"getcurrentpagevisualizationlist",level:3},{value:"Class",id:"class-8",level:4},{value:"Return type",id:"return-type-8",level:4},{value:"Description",id:"description-8",level:4},{value:"Example",id:"example-8",level:4},{value:"openFilterSummaryBar()",id:"openfiltersummarybar",level:3},{value:"Class",id:"class-9",level:4},{value:"Return type",id:"return-type-9",level:4},{value:"Description",id:"description-9",level:4},{value:"Example",id:"example-9",level:4},{value:"closeFilterSummaryBar()",id:"closefiltersummarybar",level:3},{value:"Class",id:"class-10",level:4},{value:"Return type",id:"return-type-10",level:4},{value:"Description",id:"description-10",level:4},{value:"Example",id:"example-10",level:4},{value:"getPageList()",id:"getpagelist",level:3},{value:"Class",id:"class-11",level:4},{value:"Return type",id:"return-type-11",level:4},{value:"Description",id:"description-11",level:4},{value:"Example",id:"example-11",level:4}],c={toc:u};function g(e){var t=e.components,a=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The Embedding SDK allows you to quickly integrate dossiers into a web application in a responsive manner. Once you have embedded a dossier, you can use helper methods in the Embedding SDK to let users navigate within the dossier. For example, you can add code to get the table of contents for the dossier, go to the previous or next page, navigate to a specific page, get the current page or chapter, get a specific page, or get a list of pages, chapters and visualizations."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"To help you get started, we have provided a ",(0,r.kt)("a",{parentName:"p",href:"https://microstrategy.github.io/playground/?example=g14"},"page navigation example in the Embedding SDK Playground"),".")),(0,r.kt)("h2",{id:"helper-methods-for-navigation"},"Helper methods for navigation"),(0,r.kt)("p",null,"You can use the methods described below to navigate within the dossier. You can get the table of contents for the dossier, go to the previous or next page, navigate to a specific page, get the current page or chapter, get a specific page, or get a list of pages, chapters and visualizations."),(0,r.kt)("p",null,"Most of the navigation is performed using methods of the Dossier class, but there is one method for navigation in the Chapter class."),(0,r.kt)("h3",{id:"gettablecontent"},"getTableContent()"),(0,r.kt)("h4",{id:"class"},"Class"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Dossier")),(0,r.kt)("h4",{id:"return-type"},"Return type"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Object")),(0,r.kt)("h4",{id:"description"},"Description"),(0,r.kt)("p",null,"Return the structure of the embedded dossier in the following format:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "chapters": [\n    {\n      "name": "Chapter01",\n      "nodeKey": "K36",\n      "pages": [\n        {\n          "name": "Page1",\n          "nodeKey": "K53--K46"\n        },\n        {\n          "name": "Page2",\n          "nodeKey": "K53--K48"\n        }\n      ]\n    },\n    {\n      "name": "Chapter01",\n      "nodeKey": "K36",\n      "pages": [\n        {\n          "name": "Page1",\n          "nodeKey": "K53--K46"\n        }\n      ]\n    }\n  ]\n}\n')),(0,r.kt)("h4",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"embedDossier.getTableContent();\n")),(0,r.kt)("h3",{id:"gotoprevpage"},"goToPrevPage()"),(0,r.kt)("h4",{id:"class-1"},"Class"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Dossier")),(0,r.kt)("h4",{id:"return-type-1"},"Return type"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise")),(0,r.kt)("h4",{id:"description-1"},"Description"),(0,r.kt)("p",null,"Go to the previous page of the embedded dossier."),(0,r.kt)("p",null,"Return a promise, resolved with"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "valid": true,\n  "message": "page loading success!"\n}\n')),(0,r.kt)("p",null,"when navigation is successful."),(0,r.kt)("p",null,"Rejected with an error when navigation fails."),(0,r.kt)("h4",{id:"example-1"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"embedDossier.goToPrevPage();\n")),(0,r.kt)("h3",{id:"gotonextpage"},"goToNextPage()"),(0,r.kt)("h4",{id:"class-2"},"Class"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Dossier")),(0,r.kt)("h4",{id:"return-type-2"},"Return type"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise")),(0,r.kt)("h4",{id:"description-2"},"Description"),(0,r.kt)("p",null,"Go to the next page of the embedded dossier."),(0,r.kt)("p",null,"Return a promise, resolved with"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "valid": true,\n  "message": "page loading success!"\n}\n')),(0,r.kt)("p",null,"when navigation is successful."),(0,r.kt)("p",null,"Rejected with an error when navigation fails."),(0,r.kt)("h4",{id:"example-2"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"embedDossier.goToNextPage();\n")),(0,r.kt)("h3",{id:"navigatetopagepagepage"},"navigateToPage(page:Page)"),(0,r.kt)("h4",{id:"class-3"},"Class"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Dossier")),(0,r.kt)("h4",{id:"return-type-3"},"Return type"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise")),(0,r.kt)("h4",{id:"description-3"},"Description"),(0,r.kt)("p",null,"Switch to the specified page of the embedded dossier."),(0,r.kt)("p",null,"Return a promise, resolved with"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "valid": true,\n  "message": "page loading success!"\n}\n')),(0,r.kt)("p",null,"when navigation is successful."),(0,r.kt)("p",null,"Rejected with an error when navigation fails."),(0,r.kt)("h4",{id:"example-3"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const lastPageOfChapter = embedDossier.getCurrentChapter().getLastPage();\nembedDossier.navigateToPage(lastPageOfChapter);\n")),(0,r.kt)("h3",{id:"getcurrentchapter"},"getCurrentChapter()"),(0,r.kt)("h4",{id:"class-4"},"Class"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Dossier")),(0,r.kt)("h4",{id:"return-type-4"},"Return type"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Chapter")),(0,r.kt)("h4",{id:"description-4"},"Description"),(0,r.kt)("p",null,"Return the current chapter of the embedded dossier."),(0,r.kt)("h4",{id:"example-4"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"embedDossier.getCurrentChapter();\n")),(0,r.kt)("h3",{id:"getcurrentpage"},"getCurrentPage()"),(0,r.kt)("h4",{id:"class-5"},"Class"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Dossier")),(0,r.kt)("h4",{id:"return-type-5"},"Return type"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Page")),(0,r.kt)("h4",{id:"description-5"},"Description"),(0,r.kt)("p",null,"Return the current page of the embedded dossier."),(0,r.kt)("h4",{id:"example-5"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"embedDossier.getCurrentPage();\n")),(0,r.kt)("h3",{id:"getpagebynodekeynodekey"},"getPageByNodeKey(nodeKey)"),(0,r.kt)("h4",{id:"class-6"},"Class"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Dossier")),(0,r.kt)("h4",{id:"return-type-6"},"Return type"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Page")),(0,r.kt)("h4",{id:"description-6"},"Description"),(0,r.kt)("p",null,"Return the page of the embedded dossier with the specified ",(0,r.kt)("inlineCode",{parentName:"p"},"nodeKey"),"."),(0,r.kt)("p",null,"You can get the ",(0,r.kt)("inlineCode",{parentName:"p"},"nodeKey")," from the return value of ",(0,r.kt)("inlineCode",{parentName:"p"},"getTableContent()"),", or You can get the ",(0,r.kt)("inlineCode",{parentName:"p"},"nodeKey")," from the ",(0,r.kt)("inlineCode",{parentName:"p"},"nodeKey")," property of the Page object (",(0,r.kt)("inlineCode",{parentName:"p"},"Page.nodeKey"),")."),(0,r.kt)("h4",{id:"example-6"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'embedDossier.getPageByNodeKey("K52");\n')),(0,r.kt)("h3",{id:"getchapterlist"},"getChapterList()"),(0,r.kt)("h4",{id:"class-7"},"Class"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Dossier")),(0,r.kt)("h4",{id:"return-type-7"},"Return type"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Chapter[]")),(0,r.kt)("h4",{id:"description-7"},"Description"),(0,r.kt)("p",null,"Return a list of all chapters in the embedded dossier."),(0,r.kt)("h4",{id:"example-7"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"embedDossier.getChapterList();\n")),(0,r.kt)("h3",{id:"getcurrentpagevisualizationlist"},"getCurrentPageVisualizationList()"),(0,r.kt)("h4",{id:"class-8"},"Class"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Dossier")),(0,r.kt)("h4",{id:"return-type-8"},"Return type"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise([{key:vizKey, name: vizName}])")),(0,r.kt)("h4",{id:"description-8"},"Description"),(0,r.kt)("p",null,"Return an array of all the visualizations in the current page of the embedded dossier."),(0,r.kt)("h4",{id:"example-8"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"embedDossier.getCurrentPageVisualizationList();\n")),(0,r.kt)("h3",{id:"openfiltersummarybar"},"openFilterSummaryBar()"),(0,r.kt)("h4",{id:"class-9"},"Class"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Dossier")),(0,r.kt)("h4",{id:"return-type-9"},"Return type"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"null")),(0,r.kt)("h4",{id:"description-9"},"Description"),(0,r.kt)("p",null,"Open the filter summary bar."),(0,r.kt)("h4",{id:"example-9"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"embedDossier.openFilterSummaryBar();\n")),(0,r.kt)("h3",{id:"closefiltersummarybar"},"closeFilterSummaryBar()"),(0,r.kt)("h4",{id:"class-10"},"Class"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Dossier")),(0,r.kt)("h4",{id:"return-type-10"},"Return type"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"null")),(0,r.kt)("h4",{id:"description-10"},"Description"),(0,r.kt)("p",null,"Close the filter summary bar."),(0,r.kt)("h4",{id:"example-10"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"embedDossier.closeFilterSummaryBar();\n")),(0,r.kt)("h3",{id:"getpagelist"},"getPageList()"),(0,r.kt)("h4",{id:"class-11"},"Class"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Chapter")),(0,r.kt)("h4",{id:"return-type-11"},"Return type"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Page[]")),(0,r.kt)("h4",{id:"description-11"},"Description"),(0,r.kt)("p",null,"Return an array of all the pages in this chapter of the embedded dossier."),(0,r.kt)("h4",{id:"example-11"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"chapter.getPageList();\n")))}g.isMDXComponent=!0}}]);