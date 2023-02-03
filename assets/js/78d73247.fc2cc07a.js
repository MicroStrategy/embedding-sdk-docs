"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[740],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return k}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var u=n.createContext({}),p=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,l=e.originalType,u=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=p(a),k=i,N=d["".concat(u,".").concat(k)]||d[k]||s[k]||l;return a?n.createElement(N,r(r({ref:t},m),{},{components:a})):n.createElement(N,r({ref:t},m))}));function k(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=a.length,r=new Array(l);r[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var p=2;p<l;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},8012:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return u},default:function(){return k},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return s}});var n=a(3117),i=a(102),l=(a(7294),a(3905)),r=["components"],o={title:"The customized UI settings in Embedding SDK",description:"The Embedding SDK enables you to customize the UI components of all embedded pages, like MicroStrategy home page, dossier consumption page, dossier authoring page, and report consumption page."},u=void 0,p={unversionedId:"embed-library-main-page/embed-custom-ui-on-all-pages",id:"embed-library-main-page/embed-custom-ui-on-all-pages",title:"The customized UI settings in Embedding SDK",description:"The Embedding SDK enables you to customize the UI components of all embedded pages, like MicroStrategy home page, dossier consumption page, dossier authoring page, and report consumption page.",source:"@site/docs/embed-library-main-page/embed-custom-ui-on-all-pages.md",sourceDirName:"embed-library-main-page",slug:"/embed-library-main-page/embed-custom-ui-on-all-pages",permalink:"/embedding-sdk-docs/embed-library-main-page/embed-custom-ui-on-all-pages",draft:!1,editUrl:"https://github.com/MicroStrategy/embedding-sdk-docs/tree/public/docs/embed-library-main-page/embed-custom-ui-on-all-pages.md",tags:[],version:"current",lastUpdatedBy:"magua-io",lastUpdatedAt:1675450462,formattedLastUpdatedAt:"Feb 3, 2023",frontMatter:{title:"The customized UI settings in Embedding SDK",description:"The Embedding SDK enables you to customize the UI components of all embedded pages, like MicroStrategy home page, dossier consumption page, dossier authoring page, and report consumption page."},sidebar:"tutorialSidebar",previous:{title:"Library page APIs",permalink:"/embedding-sdk-docs/embed-library-main-page/library-page-apis"},next:{title:"Embed MicroStrategy Report page",permalink:"/embedding-sdk-docs/embed-report-page/"}},m={},s=[{value:"props.customUi.library",id:"propscustomuilibrary",level:3},{value:"Properties",id:"properties",level:4},{value:"sidebar",id:"sidebar",level:5},{value:"navigationBar",id:"navigationbar",level:5},{value:"Required?",id:"required",level:4},{value:"props.customUi.dossierConsumption",id:"propscustomuidossierconsumption",level:3},{value:"Properties",id:"properties-1",level:4},{value:"navigationBar",id:"navigationbar-1",level:5},{value:"Required?",id:"required-1",level:4},{value:"props.customUi.dossierAuthoring",id:"propscustomuidossierauthoring",level:3},{value:"Properties",id:"properties-2",level:4},{value:"toolbar",id:"toolbar",level:5},{value:"menubar",id:"menubar",level:5},{value:"props.customUi.reportConsumption",id:"propscustomuireportconsumption",level:3},{value:"Properties",id:"properties-3",level:4},{value:"navigationBar",id:"navigationbar-2",level:5},{value:"Required?",id:"required-2",level:4}],d={toc:s};function k(e){var t=e.components,a=(0,i.Z)(e,r);return(0,l.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The embedding SDK supports the user to customize the UI components of all embedded pages, including MicroStrategy home page, dossier consumption page, dossier authoring page, and report consumption page. To do this, you need to set the input parameters ",(0,l.kt)("inlineCode",{parentName:"p"},"props.customUi")," in the functions below:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"microstrategy.embeddingContexts.embedLibraryPage(props)")),(0,l.kt)("p",null,"Here is an example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'microstrategy.embeddingContexts.embedLibraryPage({\n  serverUrl: "{YOUR_LIBRARY_SERVER_URL}",\n  placeholder: document.getElementById("container"),\n  customUi: {\n    reportConsumption: {\n      navigationBar: {\n        enabled: true,\n        gotoLibrary: true,\n        pageBy: true,\n        reset: true,\n        reExecute: true,\n        filter: true,\n        share: {\n          enabled: true,\n        },\n        account: {\n          enabled: true,\n        },\n        reprompt: true,\n      },\n    },\n    library: {\n      navigationBar: {\n        enabled: true,\n        sortAndFilter: true,\n        title: true,\n        searchBar: true,\n        createNew: {\n          enabled: true,\n        },\n        notifications: true,\n        multiSelect: {\n          enabled: true,\n        },\n        account: {\n          enabled: true,\n        },\n      },\n      sideBar: {\n        enabled: true,\n        show: false,\n      },\n    },\n    dossierConsumption: {\n      navigationBar: {\n        enabled: true,\n        gotoLibrary: false,\n        title: false,\n        toc: true,\n        reset: true,\n        reprompt: false,\n        share: false,\n        comment: true,\n        notification: false,\n        filter: true,\n        options: true,\n        search: false,\n        bookmark: true,\n        edit: false,\n      },\n    },\n    dossierAuthoring: {\n      toolbar: {\n        tableOfContents: {\n          visible: false,\n        },\n        undo: {\n          visible: false,\n        },\n        redo: {\n          visible: false,\n        },\n        refresh: {\n          visible: false,\n        },\n        pauseDataRetrieval: {\n          visible: false,\n        },\n        dividerLeft: {\n          visible: false,\n        },\n        addData: {\n          visible: false,\n        },\n        addChapter: {\n          visible: false,\n        },\n        addPage: {\n          visible: false,\n        },\n        insertVisualization: {\n          visible: false,\n        },\n        insertFilter: {\n          visible: false,\n        },\n        insertText: {\n          visible: false,\n        },\n        insertImage: {\n          visible: false,\n        },\n        insertHtml: {\n          visible: false,\n        },\n        insertShape: {\n          visible: false,\n        },\n        insertPanelStack: {\n          visible: false,\n        },\n        insertInfoWindow: {\n          visible: false,\n        },\n        save: {\n          visible: false,\n        },\n        dividerRight: {\n          visible: false,\n        },\n        more: {\n          visible: false,\n        },\n        freeformLayout: {\n          visible: false,\n        },\n        nlp: {\n          visible: false,\n        },\n        responsiveViewEditor: {\n          visible: false,\n        },\n        responsivePreview: {\n          visible: false,\n        },\n      },\n      menubar: {\n        library: {\n          visible: false,\n        },\n      },\n    },\n  },\n});\n')),(0,l.kt)("p",null,"In the example above, the user uses ",(0,l.kt)("inlineCode",{parentName:"p"},"microstrategy.embeddingContexts.embedLibraryPage"),' to embed a MicroStrategy Library home page. After the embedded page is loaded, the user may click a dossier in the dossier list to go to a dossier consumption page, or RMC the "Edit" menu to go to a dossier authoring page. The user could use fields ',(0,l.kt)("inlineCode",{parentName:"p"},"props.customUi.dossierConsumption")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"props.customUi.dossierAuthoring")," to show or hide the components in these 2 pages."),(0,l.kt)("p",null,"The details of ",(0,l.kt)("inlineCode",{parentName:"p"},"props.customUi")," are as below:"),(0,l.kt)("h3",{id:"propscustomuilibrary"},"props.customUi.library"),(0,l.kt)("p",null,"This field is used to customized the UI components on the MicroStrategy Library home page. It has 2 properties: ",(0,l.kt)("inlineCode",{parentName:"p"},"sidebar")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"navigationBar"),"."),(0,l.kt)("h4",{id:"properties"},"Properties"),(0,l.kt)("h5",{id:"sidebar"},"sidebar"),(0,l.kt)("p",null,"Use the ",(0,l.kt)("inlineCode",{parentName:"p"},"sidebar")," object to customize the sidebar on the MicroStrategy Library home page. All detailed properties below are ",(0,l.kt)("inlineCode",{parentName:"p"},"Boolean"),"."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"show"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Show the Library home page sidebar or not. If the sidebar is disabled in custom application, or ",(0,l.kt)("inlineCode",{parentName:"li"},"prop.customUi.library.sidebar.enabled")," is false, the true value wouldn\u2019t take effect."),(0,l.kt)("li",{parentName:"ul"},"Default value: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"enabled"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},'Show the "show sidebar" icon or not.'),(0,l.kt)("li",{parentName:"ul"},"Default value: ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),".")))),(0,l.kt)("h5",{id:"navigationbar"},"navigationBar"),(0,l.kt)("p",null,"Use the ",(0,l.kt)("inlineCode",{parentName:"p"},"navigationBar")," object to customize navigation bar on the MicroStrategy Library home page. All detailed properties below are ",(0,l.kt)("inlineCode",{parentName:"p"},"Boolean"),"."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"enabled"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Show the Library home page navigation bar or not. If the navigation bar is disabled in custom application, the true value wouldn\u2019t take effect, which is the same as the original dossier navigation bar icons behavior."),(0,l.kt)("li",{parentName:"ul"},"Default value: ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),"."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"sortAndFilter"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Show the library filter icon and the search bar on the Library home page navigation bar or not."),(0,l.kt)("li",{parentName:"ul"},"Default value: ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),"."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"title"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},'Show the title "Library" on the Library home page navigation bar or not.'),(0,l.kt)("li",{parentName:"ul"},"Default value: ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),"."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"searchBar"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Show the search bar on the Library home page navigation bar or not."),(0,l.kt)("li",{parentName:"ul"},"Default value: ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),"."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"createNew.enabled"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},'Show the "Create New" button on the Library home page navigation bar or not.'),(0,l.kt)("li",{parentName:"ul"},"Default value: ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),"."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"notifications"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Show the notification button on the Library home page navigation bar or not."),(0,l.kt)("li",{parentName:"ul"},"Default value: ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),"."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"multiSelect.enabled"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Show the multi-select button on the Library home page navigation bar or not."),(0,l.kt)("li",{parentName:"ul"},"Default value: ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),"."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"account.enabled"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Show the account button on the Library home page navigation bar or not."),(0,l.kt)("li",{parentName:"ul"},"Default value: ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),".")))),(0,l.kt)("h4",{id:"required"},"Required?"),(0,l.kt)("p",null,"No"),(0,l.kt)("h3",{id:"propscustomuidossierconsumption"},"props.customUi.dossierConsumption"),(0,l.kt)("p",null,"This field is used to customized the UI components on the dossier consumption page. It has 1 property: ",(0,l.kt)("inlineCode",{parentName:"p"},"navigationBar"),"."),(0,l.kt)("h4",{id:"properties-1"},"Properties"),(0,l.kt)("h5",{id:"navigationbar-1"},"navigationBar"),(0,l.kt)("p",null,"Use the ",(0,l.kt)("inlineCode",{parentName:"p"},"navigationBar")," object to customize the navigation bar on the page. All detailed properties below are ",(0,l.kt)("inlineCode",{parentName:"p"},"Boolean"),"."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"enabled"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Enable or disable the navigation bar."),(0,l.kt)("li",{parentName:"ul"},"Default value: ",(0,l.kt)("inlineCode",{parentName:"li"},"false")," if this field is in ",(0,l.kt)("inlineCode",{parentName:"li"},"microstrategy.dossier.create()"),", and ",(0,l.kt)("inlineCode",{parentName:"li"},"true")," if this field is in ",(0,l.kt)("inlineCode",{parentName:"li"},"microstrategy.embedddingContexts.embedLibraryPage()"),"."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"gotoLibrary"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Show or hide the gotoLibrary icon."),(0,l.kt)("li",{parentName:"ul"},"Default value: ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),"."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"title"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Show or hide the dossier title."),(0,l.kt)("li",{parentName:"ul"},"Default value: ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),"."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"toc"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Show or hide the TOC icon."),(0,l.kt)("li",{parentName:"ul"},"Default value: ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),"."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"reset"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Show or hide the reset icon."),(0,l.kt)("li",{parentName:"ul"},"Default value: ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),"."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"reprompt"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Show or hide the reprompt icon."),(0,l.kt)("li",{parentName:"ul"},"Default value: ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),"."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"share"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Show or hide the share icon."),(0,l.kt)("li",{parentName:"ul"},"Default value: ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),"."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"comment"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Show or hide the comment icon."),(0,l.kt)("li",{parentName:"ul"},"Default value: ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),"."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"notification"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Show or hide the notification icon."),(0,l.kt)("li",{parentName:"ul"},"Default value: ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),"."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"filter"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Show or hide the filter icon."),(0,l.kt)("li",{parentName:"ul"},"Default value: ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),"."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"options"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Show or hide the options icon."),(0,l.kt)("li",{parentName:"ul"},"Default value: ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),"."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"search"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Show or hide the search icon."),(0,l.kt)("li",{parentName:"ul"},"Default value: ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),"."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"bookmark"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Show or hide the bookmark icon."),(0,l.kt)("li",{parentName:"ul"},"Default value: ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),"."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"edit"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Show or hide the edit icon."),(0,l.kt)("li",{parentName:"ul"},"Default value: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),".")))),(0,l.kt)("h4",{id:"required-1"},"Required?"),(0,l.kt)("p",null,"No"),(0,l.kt)("h3",{id:"propscustomuidossierauthoring"},"props.customUi.dossierAuthoring"),(0,l.kt)("p",null,"This field is used to customized the UI components on the dossier authoring page. It has 2 properties: ",(0,l.kt)("inlineCode",{parentName:"p"},"toolbar")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"menubar"),"."),(0,l.kt)("h4",{id:"properties-2"},"Properties"),(0,l.kt)("h5",{id:"toolbar"},"toolbar"),(0,l.kt)("p",null,"Use the ",(0,l.kt)("inlineCode",{parentName:"p"},"toolbar")," object to customize the visibilities of the toolbar icons on the dossier authoring page. All detailed properties below are ",(0,l.kt)("inlineCode",{parentName:"p"},"Boolean"),"."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"tableOfContents.visible"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Show the TOC button on the dossier authoring page toolbar or not."),(0,l.kt)("li",{parentName:"ul"},"Default value: ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),"."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"undo.visible"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Show the undo button on the dossier authoring page toolbar or not."),(0,l.kt)("li",{parentName:"ul"},"Default value: ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),"."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"redo.visible"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Show the redo button on the dossier authoring page toolbar or not."),(0,l.kt)("li",{parentName:"ul"},"Default value: ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),"."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"refresh.visible"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Show the refresh button on the dossier authoring page toolbar or not."),(0,l.kt)("li",{parentName:"ul"},"Default value: ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),"."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"pauseDataRetrieval.visible"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},'Show the "pauseDataRetrieval" button on the dossier authoring page toolbar or not.'),(0,l.kt)("li",{parentName:"ul"},"Default value: ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),"."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"dividerLeft.visible"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Show the left divider on the dossier authoring page toolbar or not."),(0,l.kt)("li",{parentName:"ul"},"Default value: ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),"."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"addData.visible"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},'Show the "Add Data" button on the dossier authoring page toolbar or not.'),(0,l.kt)("li",{parentName:"ul"},"Default value: ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),"."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"addChapter.visible"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},'Show the "Add Chapter" button on the dossier authoring page toolbar or not.'),(0,l.kt)("li",{parentName:"ul"},"Default value: ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),"."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"addPage.visible"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},'Show the "Add Page" button on the dossier authoring page toolbar or not.'),(0,l.kt)("li",{parentName:"ul"},"Default value: ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),"."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"insertVisualization.visible"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},'Show the "Visualization" button on the dossier authoring page toolbar or not.'),(0,l.kt)("li",{parentName:"ul"},"Default value: ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),"."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"insertFilter.visible"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},'Show the "Filter" button on the dossier authoring page toolbar or not.'),(0,l.kt)("li",{parentName:"ul"},"Default value: ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),"."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"insertText.visible"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},'Show the "Text" button on the dossier authoring page toolbar or not.'),(0,l.kt)("li",{parentName:"ul"},"Default value: ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),"."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"insertImage.visible"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},'Show the "Image" button on the dossier authoring page toolbar or not.'),(0,l.kt)("li",{parentName:"ul"},"Default value: ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),"."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"insertHtml.visible"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},'Show the "Html" button on the dossier authoring page toolbar or not.'),(0,l.kt)("li",{parentName:"ul"},"Default value: ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),"."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"insertShape.visible"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},'Show the "Shape" button on the dossier authoring page toolbar or not.'),(0,l.kt)("li",{parentName:"ul"},"Default value: ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),"."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"insertPanelStack.visible"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},'Show the "Panel Stack" button on the dossier authoring page toolbar or not.'),(0,l.kt)("li",{parentName:"ul"},"Default value: ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),"."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"insertInfoWindow.visible"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},'Show the "Information Window" button on the dossier authoring page toolbar or not.'),(0,l.kt)("li",{parentName:"ul"},"Default value: ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),"."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"save.visible"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Show the save button on the dossier authoring page toolbar or not."),(0,l.kt)("li",{parentName:"ul"},"Default value: ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),"."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"dividerRight.visible"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Show the right divider on the dossier authoring page toolbar or not."),(0,l.kt)("li",{parentName:"ul"},"Default value: ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),"."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"more.visible"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},'Show the "More" button(Only shown in small window) on the dossier authoring page toolbar or not.'),(0,l.kt)("li",{parentName:"ul"},"Default value: ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),"."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"freeformLayout.visible"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},'Show the "Freeform Layout" button on the dossier authoring page toolbar or not.'),(0,l.kt)("li",{parentName:"ul"},"Default value: ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),"."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"nlp.visible"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Show the nlp button on the dossier authoring page toolbar or not."),(0,l.kt)("li",{parentName:"ul"},"Default value: ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),"."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"responsiveViewEditor.visible"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},'Show the "Responsive View Editor" button on the dossier authoring page toolbar or not.'),(0,l.kt)("li",{parentName:"ul"},"Default value: ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),"."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"responsivePreview.visible"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},'Show the "Responsive Preview" button on the dossier authoring page toolbar or not.'),(0,l.kt)("li",{parentName:"ul"},"Default value: ",(0,l.kt)("inlineCode",{parentName:"li"},"true"))))),(0,l.kt)("h5",{id:"menubar"},"menubar"),(0,l.kt)("p",null,"Use the ",(0,l.kt)("inlineCode",{parentName:"p"},"menubar")," object to customize the visibilities of the menubar items on the dossier authoring page. All detailed properties below are ",(0,l.kt)("inlineCode",{parentName:"p"},"Boolean"),"."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"library.visible"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Show the Library home icon on the dossier authoring page menubar or not."),(0,l.kt)("li",{parentName:"ul"},"Default value: ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),".")))),(0,l.kt)("h3",{id:"propscustomuireportconsumption"},"props.customUi.reportConsumption"),(0,l.kt)("p",null,"This field is used to customize the UI components on the report consumption page. It has 1 property: ",(0,l.kt)("inlineCode",{parentName:"p"},"navigationBar"),"."),(0,l.kt)("h4",{id:"properties-3"},"Properties"),(0,l.kt)("h5",{id:"navigationbar-2"},"navigationBar"),(0,l.kt)("p",null,"Use the ",(0,l.kt)("inlineCode",{parentName:"p"},"navigationBar")," object to customize the navigation bar on the page. All detailed properties below are ",(0,l.kt)("inlineCode",{parentName:"p"},"Boolean"),"."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"enabled"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Enable or disable the navigation bar in Report consumption page."),(0,l.kt)("li",{parentName:"ul"},"Default value: ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),"."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"gotoLibrary"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Show or hide the gotoLibrary icon."),(0,l.kt)("li",{parentName:"ul"},"Default value: ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),"."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"pageBy"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Show or hide the pageBy icon."),(0,l.kt)("li",{parentName:"ul"},"Default value: ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),"."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"reset"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Show or hide the reset icon."),(0,l.kt)("li",{parentName:"ul"},"Default value: ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),"."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"reExecute"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Show or hide the reExecute icon."),(0,l.kt)("li",{parentName:"ul"},"Default value: ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),"."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"filter"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Show or hide the filter icon."),(0,l.kt)("li",{parentName:"ul"},"Default value: ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),"."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"reprompt"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Show or hide the re-prompt icon."),(0,l.kt)("li",{parentName:"ul"},"Default value: ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),"."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"share.enabled"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Show or hide the share icon."),(0,l.kt)("li",{parentName:"ul"},"Default value: ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),"."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"account.enabled"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Show or hide the account icon."),(0,l.kt)("li",{parentName:"ul"},"Default value: ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),".")))),(0,l.kt)("h4",{id:"required-2"},"Required?"),(0,l.kt)("p",null,"No"))}k.isMDXComponent=!0}}]);