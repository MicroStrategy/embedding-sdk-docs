"use strict";(self.webpackChunkembedding_sdk_docs=self.webpackChunkembedding_sdk_docs||[]).push([[3013],{1434:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>t,metadata:()=>d,toc:()=>o});var s=i(5893),a=i(1151);const t={title:"Add navigation",description:"Once you have embedded a dossier, you can use helper methods in the Embedding SDK to let users navigate within the dashboard. For example, you can add code to get the table of contents for the dossier, go to the previous or next page, navigate to a specific page, get the current page or chapter, get a specific page, or get a list of pages, chapters and visualizations."},r=void 0,d={id:"add-functionality/add-nav",title:"Add navigation",description:"Once you have embedded a dossier, you can use helper methods in the Embedding SDK to let users navigate within the dashboard. For example, you can add code to get the table of contents for the dossier, go to the previous or next page, navigate to a specific page, get the current page or chapter, get a specific page, or get a list of pages, chapters and visualizations.",source:"@site/docs/add-functionality/add-nav.md",sourceDirName:"add-functionality",slug:"/add-functionality/add-nav",permalink:"/embedding-sdk-docs/add-functionality/add-nav",draft:!1,unlisted:!1,editUrl:"https://github.com/MicroStrategy/embedding-sdk-docs/tree/public/docs/add-functionality/add-nav.md",tags:[],version:"current",lastUpdatedBy:"Aran0011",lastUpdatedAt:1710401361,formattedLastUpdatedAt:"Mar 14, 2024",frontMatter:{title:"Add navigation",description:"Once you have embedded a dossier, you can use helper methods in the Embedding SDK to let users navigate within the dashboard. For example, you can add code to get the table of contents for the dossier, go to the previous or next page, navigate to a specific page, get the current page or chapter, get a specific page, or get a list of pages, chapters and visualizations."},sidebar:"tutorialSidebar",previous:{title:"Methods and properties for an embedded dashboard",permalink:"/embedding-sdk-docs/add-functionality/methods-and-properties"},next:{title:"Add event handling",permalink:"/embedding-sdk-docs/add-functionality/add-event"}},l={},o=[{value:"Helper methods for navigation",id:"helper-methods-for-navigation",level:2},{value:"getTableContent()",id:"gettablecontent",level:3},{value:"Class",id:"class",level:4},{value:"Return type",id:"return-type",level:4},{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"goToPrevPage()",id:"gotoprevpage",level:3},{value:"Class",id:"class-1",level:4},{value:"Return type",id:"return-type-1",level:4},{value:"Description",id:"description-1",level:4},{value:"Example",id:"example-1",level:4},{value:"goToNextPage()",id:"gotonextpage",level:3},{value:"Class",id:"class-2",level:4},{value:"Return type",id:"return-type-2",level:4},{value:"Description",id:"description-2",level:4},{value:"Example",id:"example-2",level:4},{value:"navigateToPage(page)",id:"navigatetopagepage",level:3},{value:"Class",id:"class-3",level:4},{value:"Return type",id:"return-type-3",level:4},{value:"Description",id:"description-3",level:4},{value:"Example",id:"example-3",level:4},{value:"getCurrentChapter()",id:"getcurrentchapter",level:3},{value:"Class",id:"class-4",level:4},{value:"Return type",id:"return-type-4",level:4},{value:"Description",id:"description-4",level:4},{value:"Example",id:"example-4",level:4},{value:"getCurrentPage()",id:"getcurrentpage",level:3},{value:"Class",id:"class-5",level:4},{value:"Return type",id:"return-type-5",level:4},{value:"Description",id:"description-5",level:4},{value:"Example",id:"example-5",level:4},{value:"getPageByNodeKey(nodeKey)",id:"getpagebynodekeynodekey",level:3},{value:"Class",id:"class-6",level:4},{value:"Return type",id:"return-type-6",level:4},{value:"Description",id:"description-6",level:4},{value:"Example",id:"example-6",level:4},{value:"getChapterList()",id:"getchapterlist",level:3},{value:"Class",id:"class-7",level:4},{value:"Return type",id:"return-type-7",level:4},{value:"Description",id:"description-7",level:4},{value:"Example",id:"example-7",level:4},{value:"getCurrentPageVisualizationList()",id:"getcurrentpagevisualizationlist",level:3},{value:"Class",id:"class-8",level:4},{value:"Return type",id:"return-type-8",level:4},{value:"Description",id:"description-8",level:4},{value:"Example",id:"example-8",level:4},{value:"openFilterSummaryBar()",id:"openfiltersummarybar",level:3},{value:"Class",id:"class-9",level:4},{value:"Return type",id:"return-type-9",level:4},{value:"Description",id:"description-9",level:4},{value:"Example",id:"example-9",level:4},{value:"closeFilterSummaryBar()",id:"closefiltersummarybar",level:3},{value:"Class",id:"class-10",level:4},{value:"Return type",id:"return-type-10",level:4},{value:"Description",id:"description-10",level:4},{value:"Example",id:"example-10",level:4},{value:"getPageList()",id:"getpagelist",level:3},{value:"Class",id:"class-11",level:4},{value:"Return type",id:"return-type-11",level:4},{value:"Description",id:"description-11",level:4},{value:"Example",id:"example-11",level:4}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"The Embedding SDK allows you to quickly integrate dossiers into a web application in a responsive manner. Once you have embedded a dossier, you can use helper methods in the Embedding SDK to let users navigate within the dashboard. For example, you can add code to get the table of contents for the dossier, go to the previous or next page, navigate to a specific page, get the current page or chapter, get a specific page, or get a list of pages, chapters and visualizations."}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["To help you get started, we have provided a ",(0,s.jsx)(n.a,{href:"https://microstrategy.github.io/playground/?example=g14",children:"page navigation example in the Embedding SDK Playground"}),"."]})}),"\n",(0,s.jsx)(n.h2,{id:"helper-methods-for-navigation",children:"Helper methods for navigation"}),"\n",(0,s.jsx)(n.p,{children:"You can use the methods described below to navigate within the dashboard. You can get the table of contents for the dossier, go to the previous or next page, navigate to a specific page, get the current page or chapter, get a specific page, or get a list of pages, chapters and visualizations."}),"\n",(0,s.jsx)(n.p,{children:"Most of the navigation is performed using methods of the Dossier class, but there is one method for navigation in the Chapter class."}),"\n",(0,s.jsx)(n.h3,{id:"gettablecontent",children:"getTableContent()"}),"\n",(0,s.jsx)(n.h4,{id:"class",children:"Class"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"Dossier"})}),"\n",(0,s.jsx)(n.h4,{id:"return-type",children:"Return type"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"Object"})}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"Return the structure of the embedded dashboard in the following format:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "chapters": [\n    {\n      "name": "Chapter01",\n      "nodeKey": "K36",\n      "pages": [\n        {\n          "name": "Page1",\n          "nodeKey": "K53--K46"\n        },\n        {\n          "name": "Page2",\n          "nodeKey": "K53--K48"\n        }\n      ]\n    },\n    {\n      "name": "Chapter01",\n      "nodeKey": "K36",\n      "pages": [\n        {\n          "name": "Page1",\n          "nodeKey": "K53--K46"\n        }\n      ]\n    }\n  ]\n}\n'})}),"\n",(0,s.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"embedDossier.getTableContent();\n"})}),"\n",(0,s.jsx)(n.h3,{id:"gotoprevpage",children:"goToPrevPage()"}),"\n",(0,s.jsx)(n.h4,{id:"class-1",children:"Class"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"Dossier"})}),"\n",(0,s.jsx)(n.h4,{id:"return-type-1",children:"Return type"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"Promise"})}),"\n",(0,s.jsx)(n.h4,{id:"description-1",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"Go to the previous page of the embedded dashboard."}),"\n",(0,s.jsx)(n.p,{children:"Return a promise, resolved with"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "valid": true,\n  "message": "page loading success!"\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"when navigation is successful."}),"\n",(0,s.jsx)(n.p,{children:"Rejected with an error when navigation fails."}),"\n",(0,s.jsx)(n.h4,{id:"example-1",children:"Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"embedDossier.goToPrevPage();\n"})}),"\n",(0,s.jsx)(n.h3,{id:"gotonextpage",children:"goToNextPage()"}),"\n",(0,s.jsx)(n.h4,{id:"class-2",children:"Class"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"Dossier"})}),"\n",(0,s.jsx)(n.h4,{id:"return-type-2",children:"Return type"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"Promise"})}),"\n",(0,s.jsx)(n.h4,{id:"description-2",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"Go to the next page of the embedded dashboard."}),"\n",(0,s.jsx)(n.p,{children:"Return a promise, resolved with"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "valid": true,\n  "message": "page loading success!"\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"when navigation is successful."}),"\n",(0,s.jsx)(n.p,{children:"Rejected with an error when navigation fails."}),"\n",(0,s.jsx)(n.h4,{id:"example-2",children:"Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"embedDossier.goToNextPage();\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"navigatetopagepage",children:["navigateToPage(page",":Page",")"]}),"\n",(0,s.jsx)(n.h4,{id:"class-3",children:"Class"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"Dossier"})}),"\n",(0,s.jsx)(n.h4,{id:"return-type-3",children:"Return type"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"Promise"})}),"\n",(0,s.jsx)(n.h4,{id:"description-3",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"Switch to the specified page of the embedded dashboard."}),"\n",(0,s.jsx)(n.p,{children:"Return a promise, resolved with"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "valid": true,\n  "message": "page loading success!"\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"when navigation is successful."}),"\n",(0,s.jsx)(n.p,{children:"Rejected with an error when navigation fails."}),"\n",(0,s.jsx)(n.h4,{id:"example-3",children:"Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"const lastPageOfChapter = embedDossier.getCurrentChapter().getLastPage();\nembedDossier.navigateToPage(lastPageOfChapter);\n"})}),"\n",(0,s.jsx)(n.h3,{id:"getcurrentchapter",children:"getCurrentChapter()"}),"\n",(0,s.jsx)(n.h4,{id:"class-4",children:"Class"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"Dossier"})}),"\n",(0,s.jsx)(n.h4,{id:"return-type-4",children:"Return type"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"Chapter"})}),"\n",(0,s.jsx)(n.h4,{id:"description-4",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"Return the current chapter of the embedded dashboard."}),"\n",(0,s.jsx)(n.h4,{id:"example-4",children:"Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"embedDossier.getCurrentChapter();\n"})}),"\n",(0,s.jsx)(n.h3,{id:"getcurrentpage",children:"getCurrentPage()"}),"\n",(0,s.jsx)(n.h4,{id:"class-5",children:"Class"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"Dossier"})}),"\n",(0,s.jsx)(n.h4,{id:"return-type-5",children:"Return type"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"Page"})}),"\n",(0,s.jsx)(n.h4,{id:"description-5",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"Return the current page of the embedded dashboard."}),"\n",(0,s.jsx)(n.h4,{id:"example-5",children:"Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"embedDossier.getCurrentPage();\n"})}),"\n",(0,s.jsx)(n.h3,{id:"getpagebynodekeynodekey",children:"getPageByNodeKey(nodeKey)"}),"\n",(0,s.jsx)(n.h4,{id:"class-6",children:"Class"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"Dossier"})}),"\n",(0,s.jsx)(n.h4,{id:"return-type-6",children:"Return type"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"Page"})}),"\n",(0,s.jsx)(n.h4,{id:"description-6",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["Return the page of the embedded dashboard with the specified ",(0,s.jsx)(n.code,{children:"nodeKey"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["You can get the ",(0,s.jsx)(n.code,{children:"nodeKey"})," from the return value of ",(0,s.jsx)(n.code,{children:"getTableContent()"}),", or You can get the ",(0,s.jsx)(n.code,{children:"nodeKey"})," from the ",(0,s.jsx)(n.code,{children:"nodeKey"})," property of the Page object (",(0,s.jsx)(n.code,{children:"Page.nodeKey"}),")."]}),"\n",(0,s.jsx)(n.h4,{id:"example-6",children:"Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'embedDossier.getPageByNodeKey("K52");\n'})}),"\n",(0,s.jsx)(n.h3,{id:"getchapterlist",children:"getChapterList()"}),"\n",(0,s.jsx)(n.h4,{id:"class-7",children:"Class"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"Dossier"})}),"\n",(0,s.jsx)(n.h4,{id:"return-type-7",children:"Return type"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"Chapter[]"})}),"\n",(0,s.jsx)(n.h4,{id:"description-7",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"Return a list of all chapters in the embedded dashboard."}),"\n",(0,s.jsx)(n.h4,{id:"example-7",children:"Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"embedDossier.getChapterList();\n"})}),"\n",(0,s.jsx)(n.h3,{id:"getcurrentpagevisualizationlist",children:"getCurrentPageVisualizationList()"}),"\n",(0,s.jsx)(n.h4,{id:"class-8",children:"Class"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"Dossier"})}),"\n",(0,s.jsx)(n.h4,{id:"return-type-8",children:"Return type"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"Promise([{key:vizKey, name: vizName}])"})}),"\n",(0,s.jsx)(n.h4,{id:"description-8",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"Return an array of all the visualizations in the current page of the embedded dashboard."}),"\n",(0,s.jsx)(n.h4,{id:"example-8",children:"Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"embedDossier.getCurrentPageVisualizationList();\n"})}),"\n",(0,s.jsx)(n.h3,{id:"openfiltersummarybar",children:"openFilterSummaryBar()"}),"\n",(0,s.jsx)(n.h4,{id:"class-9",children:"Class"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"Dossier"})}),"\n",(0,s.jsx)(n.h4,{id:"return-type-9",children:"Return type"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"null"})}),"\n",(0,s.jsx)(n.h4,{id:"description-9",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"Open the filter summary bar."}),"\n",(0,s.jsx)(n.h4,{id:"example-9",children:"Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"embedDossier.openFilterSummaryBar();\n"})}),"\n",(0,s.jsx)(n.h3,{id:"closefiltersummarybar",children:"closeFilterSummaryBar()"}),"\n",(0,s.jsx)(n.h4,{id:"class-10",children:"Class"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"Dossier"})}),"\n",(0,s.jsx)(n.h4,{id:"return-type-10",children:"Return type"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"null"})}),"\n",(0,s.jsx)(n.h4,{id:"description-10",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"Close the filter summary bar."}),"\n",(0,s.jsx)(n.h4,{id:"example-10",children:"Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"embedDossier.closeFilterSummaryBar();\n"})}),"\n",(0,s.jsx)(n.h3,{id:"getpagelist",children:"getPageList()"}),"\n",(0,s.jsx)(n.h4,{id:"class-11",children:"Class"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"Chapter"})}),"\n",(0,s.jsx)(n.h4,{id:"return-type-11",children:"Return type"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"Page[]"})}),"\n",(0,s.jsx)(n.h4,{id:"description-11",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"Return an array of all the pages in this chapter of the embedded dashboard."}),"\n",(0,s.jsx)(n.h4,{id:"example-11",children:"Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"chapter.getPageList();\n"})})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>d,a:()=>r});var s=i(7294);const a={},t=s.createContext(a);function r(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);