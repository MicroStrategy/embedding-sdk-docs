"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[787],{3905:function(e,a,t){t.d(a,{Zo:function(){return c},kt:function(){return u}});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=n.createContext({}),p=function(e){var a=n.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},c=function(e){var a=p(e.components);return n.createElement(o.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},h=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=p(t),u=r,k=h["".concat(o,".").concat(u)]||h[u]||d[u]||i;return t?n.createElement(k,l(l({ref:a},c),{},{components:t})):n.createElement(k,l({ref:a},c))}));function u(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=h;var s={};for(var o in a)hasOwnProperty.call(a,o)&&(s[o]=a[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var p=2;p<i;p++)l[p]=t[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}h.displayName="MDXCreateElement"},3698:function(e,a,t){t.r(a),t.d(a,{assets:function(){return c},contentTitle:function(){return o},default:function(){return u},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return d}});var n=t(3117),r=t(102),i=(t(7294),t(3905)),l=["components"],s={title:"Interact with panel stacks",description:"Panel stacks provide end users with the ability to conveniently reuse segments of space within a dossier to represent data in multiple ways. MicroStrategy supports one level of nesting within panel stacks. You can switch panel stacks by using a selector or the panel stack header. An application can now develop external controls to paginate through the various displays within a panel stack. In addition, if the panel stack is switched by a user's manual input, an event handler notifies the parent application of this action, allowing it to perform filtering or any other desirable action."},o=void 0,p={unversionedId:"add-functionality/panel-stacks",id:"add-functionality/panel-stacks",title:"Interact with panel stacks",description:"Panel stacks provide end users with the ability to conveniently reuse segments of space within a dossier to represent data in multiple ways. MicroStrategy supports one level of nesting within panel stacks. You can switch panel stacks by using a selector or the panel stack header. An application can now develop external controls to paginate through the various displays within a panel stack. In addition, if the panel stack is switched by a user's manual input, an event handler notifies the parent application of this action, allowing it to perform filtering or any other desirable action.",source:"@site/docs/add-functionality/panel-stacks.md",sourceDirName:"add-functionality",slug:"/add-functionality/panel-stacks",permalink:"/embedding-sdk-docs/add-functionality/panel-stacks",draft:!1,editUrl:"https://github.com/MicroStrategy/embedding-sdk-docs/tree/public/docs/add-functionality/panel-stacks.md",tags:[],version:"current",lastUpdatedBy:"magua-io",lastUpdatedAt:1664482178,formattedLastUpdatedAt:"Sep 29, 2022",frontMatter:{title:"Interact with panel stacks",description:"Panel stacks provide end users with the ability to conveniently reuse segments of space within a dossier to represent data in multiple ways. MicroStrategy supports one level of nesting within panel stacks. You can switch panel stacks by using a selector or the panel stack header. An application can now develop external controls to paginate through the various displays within a panel stack. In addition, if the panel stack is switched by a user's manual input, an event handler notifies the parent application of this action, allowing it to perform filtering or any other desirable action."},sidebar:"tutorialSidebar",previous:{title:"Error handling",permalink:"/embedding-sdk-docs/add-functionality/error-handling"},next:{title:"Embed a single visualization",permalink:"/embedding-sdk-docs/add-functionality/embed-vis"}},c={},d=[{value:"Embedding behavior details",id:"embedding-behavior-details",level:2},{value:"Embedding workflow",id:"embedding-workflow",level:2},{value:"1. Get the panel stack definitions from the current page",id:"1-get-the-panel-stack-definitions-from-the-current-page",level:3},{value:"Function",id:"function",level:4},{value:"Input parameters",id:"input-parameters",level:4},{value:"Response",id:"response",level:4},{value:"2. Switch panels on the current page",id:"2-switch-panels-on-the-current-page",level:3},{value:"Function",id:"function-1",level:4},{value:"Input parameters",id:"input-parameters-1",level:4},{value:"Response",id:"response-1",level:4},{value:"3. Raise a switch panel event",id:"3-raise-a-switch-panel-event",level:3},{value:"4. Modify the select visualization callback data",id:"4-modify-the-select-visualization-callback-data",level:3},{value:"Embedding SDK errors",id:"embedding-sdk-errors",level:2},{value:"Dossier.getCurrentPagePanelStacks()",id:"dossiergetcurrentpagepanelstacks",level:3},{value:"Error case: The API was called while the page was still loading",id:"error-case-the-api-was-called-while-the-page-was-still-loading",level:4},{value:"Error handler callback parameter",id:"error-handler-callback-parameter",level:5},{value:"Error message",id:"error-message",level:5},{value:"Dossier.switchPanel(panelKey)",id:"dossierswitchpanelpanelkey",level:3},{value:"Error case: The panelKey is missing",id:"error-case-the-panelkey-is-missing",level:4},{value:"Error handler callback parameter",id:"error-handler-callback-parameter-1",level:5},{value:"Error message",id:"error-message-1",level:5},{value:"Error case: The panelKey is invalid. It does not exist or it is not in the current page",id:"error-case-the-panelkey-is-invalid-it-does-not-exist-or-it-is-not-in-the-current-page",level:4},{value:"Error handler callback parameter",id:"error-handler-callback-parameter-2",level:5},{value:"Error message",id:"error-message-2",level:5},{value:"Error case: The API was called while the page was still loading and users cannot switch panels by manually clicking on them",id:"error-case-the-api-was-called-while-the-page-was-still-loading-and-users-cannot-switch-panels-by-manually-clicking-on-them",level:4},{value:"Error handler callback parameter",id:"error-handler-callback-parameter-3",level:5},{value:"Error message",id:"error-message-3",level:5},{value:"Error case: REST API error",id:"error-case-rest-api-error",level:4},{value:"Error handler callback parameter",id:"error-handler-callback-parameter-4",level:5},{value:"Error message",id:"error-message-4",level:5}],h={toc:d};function u(e){var a=e.components,s=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},h,s,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The MicroStrategy 2021 Update 1 release exposed\xa0",(0,i.kt)("a",{parentName:"p",href:"https://www2.microstrategy.com/producthelp/2021/Workstation/WebHelp/Lang_1033/Content/panel_stacks.htm"},"panel stacks")," within dossiers. This provides end users with the ability to conveniently reuse segments of space within a dossier to represent data in multiple ways. To provide continuity with our existing APIs and enable embedded applications to take advantage of this new design concept, we have updated existing endpoints and provided new Embedding SDK functions."),(0,i.kt)("p",null,"MicroStrategy supports one level of nesting within panel stacks. You can switch panel stacks by using a selector or the panel stack header."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"panel stacks",src:t(7198).Z,width:"1008",height:"625"})),(0,i.kt)("p",null,"Similar to providing navigation capabilities through provided embedded SDK functions, an application can now develop external controls to paginate through the various displays within a panel stack. In addition, if the panel stack is switched by a user's manual input, an event handler notifies the parent application of this action, allowing it to perform filtering or any other desirable action."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"To help you get started, we have provided an ",(0,i.kt)("a",{parentName:"p",href:"https://microstrategy.github.io/playground/?example=g23"},"example in the Embedding SDK Playground")," that will embed a dossier with a panel stack and the option to switch between panels.")),(0,i.kt)("h2",{id:"embedding-behavior-details"},"Embedding behavior details"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Develop a JavaScript function call to support programmatic pagination through a given panel stack. This approach is similar to what is currently done for page navigation. This involves the following:"),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Go to a specific panel, based on the panel identifier (key)"),(0,i.kt)("li",{parentName:"ol"},"Get the current panel identifier"),(0,i.kt)("li",{parentName:"ol"},"Get the available panels"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Provide a JavaScript event handler to notify the parent application when the visible panel in a panel stack is changed. This approach should mimic the\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"pageSwitched"),"\xa0handler that currently exists for page navigation.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Use hooks to interact or switch to the selected panel. This should work in both situations where a separate panel selector exists and when a normal panel selector exists in the panel header.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Incorporate the ability to register and unregister events for callback. This enables the parent application to know when a panel stack is switched and provide information about the new panel stack."))),(0,i.kt)("h2",{id:"embedding-workflow"},"Embedding workflow"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"panel stack workflow",src:t(5983).Z,width:"977",height:"566"})),(0,i.kt)("h3",{id:"1-get-the-panel-stack-definitions-from-the-current-page"},"1. Get the panel stack definitions from the current page"),(0,i.kt)("h4",{id:"function"},"Function"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Dossier.getCurrentPagePanelStacks()")),(0,i.kt)("h4",{id:"input-parameters"},"Input parameters"),(0,i.kt)("p",null,"none"),(0,i.kt)("h4",{id:"response"},"Response"),(0,i.kt)("p",null,"This API\xa0returns a promise object, similar to:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"myDossier &&\n  myDossier\n    .getCurrentPagePanelStacks()\n    .then((currentPagePanelStacks) => {\n      // ...\n    })\n    .catch((error) => {\n      // ...\n    });\n")),(0,i.kt)("p",null,"In which the callback parameters are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"currentPagePanelStacks")),(0,i.kt)("p",{parentName:"li"},"The panel stack definitions on the current page. Its format is similar to the example shown below."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "key": "{panel stack key}",\n    "name": "{panel stack name}",\n    "currentPanel": "{current panel key}",\n    "panels": [\n      {\n        "key": "{panel key}",\n        "name": "{panel name}",\n        "panelStacks": [\n          {\n            "key": "{nested panel stack key}",\n            "name": "{nested panel stack name}",\n            "currentPanel": "{current panel key}",\n            "panels": [\n              {\n                "key": "{panel key}",\n                "name": "{panel name}"\n              }\n            ]\n          }\n        ]\n      }\n    ]\n  }\n]\n')),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Data Type")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"Object")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Sample")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "panelStackKey": "W61",\n  "currentPanel": "W63"\n}\n'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"error")),(0,i.kt)("p",{parentName:"li"},"Error information"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Data Type")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"Error Object")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Sample")),(0,i.kt)("p",{parentName:"li"},"Error Message(",(0,i.kt)("inlineCode",{parentName:"p"},"error.message"),"):"),(0,i.kt)("p",{parentName:"li"},'"You couldn\u2019t get the current page panel stacks or switch to a panel when the page data is not ready. Please wait a few seconds to call this function again."'))),(0,i.kt)("h3",{id:"2-switch-panels-on-the-current-page"},"2. Switch panels on the current page"),(0,i.kt)("h4",{id:"function-1"},"Function"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Dossier.switchPanel(panelKey)")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"The\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"Dossier"),"\xa0object is created using\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"microstrategy.dossier.create(props)"),". See\xa0",(0,i.kt)("a",{parentName:"p",href:"/embedding-sdk-docs/add-functionality/methods-and-properties"},"Methods and properties for an embedded dossier")," for more information.")),(0,i.kt)("h4",{id:"input-parameters-1"},"Input parameters"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"panelKey")),(0,i.kt)("p",{parentName:"li"},"The panel key from the result of ",(0,i.kt)("inlineCode",{parentName:"p"},"getCurrentPagePanelStacks"),"."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Data Type")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"String")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Required?")),(0,i.kt)("p",{parentName:"li"},"Yes"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Sample")),(0,i.kt)("p",{parentName:"li"},'"W63"'))),(0,i.kt)("h4",{id:"response-1"},"Response"),(0,i.kt)("p",null,"This API returns a promise object, similar to:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"myDossier &&\n  myDossier\n    .switchPanel(panelKey)\n    .then((switchedPanel) => {\n      // ...\n    })\n    .catch((error) => {\n      // ...\n    });\n")),(0,i.kt)("p",null,"in which the callback parameters are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"switchedPanel")),(0,i.kt)("p",{parentName:"li"},"The switched panel information, in the format shown below."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "panelStackKey": "panel stack key",\n  "currentPanel": "current panel key"\n}\n')),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Data Type")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"Object")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Sample")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "panelStackKey": "W61",\n  "currentPanel": "W63"\n}\n'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"error")),(0,i.kt)("p",{parentName:"li"},"Error information"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Data Type")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"Error Object")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Sample")),(0,i.kt)("p",{parentName:"li"},"Error Message(",(0,i.kt)("inlineCode",{parentName:"p"},"error.message"),"):"),(0,i.kt)("p",{parentName:"li"},'"You couldn\u2019t get the current page panel stacks or switch to a panel when the page data is not ready. Please wait a few seconds to call this function again."'))),(0,i.kt)("h3",{id:"3-raise-a-switch-panel-event"},"3. Raise a switch panel event"),(0,i.kt)("p",null,"If the panel is switched in an inner or outer window, it raises a switch panel event that enables you to listen for it. The event detail is shown below."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'// event: onPanelSwitched\n// event payload:\n{\n  "panelStackKey": "panel stack key",\n  "currentPanel": "current panel key"\n}\n')),(0,i.kt)("h3",{id:"4-modify-the-select-visualization-callback-data"},"4. Modify the select visualization callback data"),(0,i.kt)("p",null,"You must also change the callback data of the existing ",(0,i.kt)("inlineCode",{parentName:"p"},"ON_VIZ_SELECTION_CHANGED")," event. Before any changes, the data returned from the event is similar to that shown below."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  // Chapter key\n  "K32": {\n    // Visualization key\n    "K62": true\n  }\n}\n')),(0,i.kt)("p",null,"This data only contains the selected visualization key and chapter key. If the visualization is inside a panel, you need to provide the panel and panel stack information for it."),(0,i.kt)("p",null,"You can add code to invoke the callback:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'myDossier &&\n  myDossier.registerPanelSwitchEventHandler("onVizSelectionChanged", (selectedVis) => {\n    // The handling logic\n    // ...\n  });\n')),(0,i.kt)("p",null,"in which the data format of selectedVis is similar to:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "K32": {\n    "K62": true,\n    "visualizationLocation": {\n      "K62": {\n        "pageKey": "K53",\n        // If the visualization is not in a panel, it is undefined.\n        "panelStackKey": "W110",\n        // If the visualization is not in a panel, it is undefined.\n        "panelKey": "W113"\n      }\n    }\n  }\n}\n')),(0,i.kt)("h2",{id:"embedding-sdk-errors"},"Embedding SDK errors"),(0,i.kt)("p",null,"Since you cannot set the callback parameters, it's impossible for these parameters to produce errors. When an error occurs for other reasons, the Embedding SDK returns a promise object that in turn returns an error object in rejected cases. The possible errors are shown below."),(0,i.kt)("h3",{id:"dossiergetcurrentpagepanelstacks"},"Dossier.getCurrentPagePanelStacks()"),(0,i.kt)("h4",{id:"error-case-the-api-was-called-while-the-page-was-still-loading"},"Error case: The API was called while the page was still loading"),(0,i.kt)("h5",{id:"error-handler-callback-parameter"},"Error handler callback parameter"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Error Object")),(0,i.kt)("h5",{id:"error-message"},"Error message"),(0,i.kt)("p",null,"You couldn\u2019t get the current page panel stacks or switch to a panel when the page data is not ready. Please wait a few seconds to call this function again."),(0,i.kt)("h3",{id:"dossierswitchpanelpanelkey"},"Dossier.switchPanel(panelKey)"),(0,i.kt)("h4",{id:"error-case-the-panelkey-is-missing"},"Error case: The panelKey is missing"),(0,i.kt)("h5",{id:"error-handler-callback-parameter-1"},"Error handler callback parameter"),(0,i.kt)("p",null,"N/A"),(0,i.kt)("h5",{id:"error-message-1"},"Error message"),(0,i.kt)("p",null,"The panel key can not be empty!"),(0,i.kt)("h4",{id:"error-case-the-panelkey-is-invalid-it-does-not-exist-or-it-is-not-in-the-current-page"},"Error case: The panelKey is invalid. It does not exist or it is not in the current page"),(0,i.kt)("h5",{id:"error-handler-callback-parameter-2"},"Error handler callback parameter"),(0,i.kt)("p",null,"N/A"),(0,i.kt)("h5",{id:"error-message-2"},"Error message"),(0,i.kt)("p",null,"There isn\u2019t a panel whose key is ",(0,i.kt)("inlineCode",{parentName:"p"},"${panelKey}")," in the current page and selected panels. Please check whether your input parameter of ",(0,i.kt)("inlineCode",{parentName:"p"},"switchPanel")," function is correct."),(0,i.kt)("h4",{id:"error-case-the-api-was-called-while-the-page-was-still-loading-and-users-cannot-switch-panels-by-manually-clicking-on-them"},"Error case: The API was called while the page was still loading and users cannot switch panels by manually clicking on them"),(0,i.kt)("h5",{id:"error-handler-callback-parameter-3"},"Error handler callback parameter"),(0,i.kt)("p",null,"N/A"),(0,i.kt)("h5",{id:"error-message-3"},"Error message"),(0,i.kt)("p",null,"You couldn\u2019t switch a panel when the dossier is busy for loading data. Please wait for a while..."),(0,i.kt)("h4",{id:"error-case-rest-api-error"},"Error case: REST API error"),(0,i.kt)("h5",{id:"error-handler-callback-parameter-4"},"Error handler callback parameter"),(0,i.kt)("p",null,"N/A"),(0,i.kt)("h5",{id:"error-message-4"},"Error message"),(0,i.kt)("p",null,"The manipulation API has encountered an error when switching to panel ",(0,i.kt)("inlineCode",{parentName:"p"},"${panelKey}"),". Please try again later."))}u.isMDXComponent=!0},5983:function(e,a,t){a.Z=t.p+"assets/images/panel_stack_workflow-8b9ebc2c316e62c10c870eedb3e17527.png"},7198:function(e,a,t){a.Z=t.p+"assets/images/panel_stacks-78c32386f8ccf6bb7d087d07d4c0f01a.png"}}]);