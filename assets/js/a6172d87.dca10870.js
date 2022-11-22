"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[525],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return c}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=d(n),c=i,g=m["".concat(s,".").concat(c)]||m[c]||p[c]||r;return n?a.createElement(g,l(l({ref:t},u),{},{components:n})):a.createElement(g,l({ref:t},u))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var d=2;d<r;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8538:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return p}});var a=n(3117),i=n(102),r=(n(7294),n(3905)),l=["components"],o={title:"Enable the selection of attribute elements",description:"Attribute element selection within dossiers provides end-users with the ability to conveniently select attribute elements in visualizations in an embedding way. To provide continuity with our existing APIs and enable embedded applications to take advantage of this new design concept, we have updated existing endpoints and provided new embedding SDK functions."},s=void 0,d={unversionedId:"add-functionality/attribute-element-selection",id:"add-functionality/attribute-element-selection",title:"Enable the selection of attribute elements",description:"Attribute element selection within dossiers provides end-users with the ability to conveniently select attribute elements in visualizations in an embedding way. To provide continuity with our existing APIs and enable embedded applications to take advantage of this new design concept, we have updated existing endpoints and provided new embedding SDK functions.",source:"@site/docs/add-functionality/attribute-element-selection.md",sourceDirName:"add-functionality",slug:"/add-functionality/attribute-element-selection",permalink:"/embedding-sdk-docs/add-functionality/attribute-element-selection",draft:!1,editUrl:"https://github.com/MicroStrategy/embedding-sdk-docs/tree/public/docs/add-functionality/attribute-element-selection.md",tags:[],version:"current",lastUpdatedBy:"xdumstr",lastUpdatedAt:1669134491,formattedLastUpdatedAt:"Nov 22, 2022",frontMatter:{title:"Enable the selection of attribute elements",description:"Attribute element selection within dossiers provides end-users with the ability to conveniently select attribute elements in visualizations in an embedding way. To provide continuity with our existing APIs and enable embedded applications to take advantage of this new design concept, we have updated existing endpoints and provided new embedding SDK functions."},sidebar:"tutorialSidebar",previous:{title:"Embed a single visualization",permalink:"/embedding-sdk-docs/add-functionality/embed-vis"},next:{title:"Author an embedded dossier",permalink:"/embedding-sdk-docs/add-functionality/authoring-library"}},u={},p=[{value:"Embedding SDK functionalities",id:"embedding-sdk-functionalities",level:2},{value:"Embedding SDK APIs and examples",id:"embedding-sdk-apis-and-examples",level:2},{value:"API for attribute element selection in a dossier",id:"api-for-attribute-element-selection-in-a-dossier",level:3},{value:"Function",id:"function",level:4},{value:"Input parameters",id:"input-parameters",level:4},{value:"Request",id:"request",level:4},{value:"Response",id:"response",level:4},{value:"Errors",id:"errors",level:4},{value:"API for selecting attribute elements in multiple visualizations on initial dossier load",id:"api-for-selecting-attribute-elements-in-multiple-visualizations-on-initial-dossier-load",level:3},{value:"Function",id:"function-1",level:4},{value:"Input parameters",id:"input-parameters-1",level:4},{value:"Request",id:"request-1",level:4},{value:"Response",id:"response-1",level:4},{value:"Errors",id:"errors-1",level:4},{value:"API for getting available elements",id:"api-for-getting-available-elements",level:3},{value:"Function",id:"function-2",level:4},{value:"Input parameters",id:"input-parameters-2",level:4},{value:"Response",id:"response-2",level:4},{value:"Errors",id:"errors-2",level:4},{value:"Callback for monitoring the changing of visualization elements",id:"callback-for-monitoring-the-changing-of-visualization-elements",level:3},{value:"Event name",id:"event-name",level:4},{value:"Callback format",id:"callback-format",level:4},{value:"Response",id:"response-3",level:4}],m={toc:p};function c(e){var t=e.components,n=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The MicroStrategy 2021 Update 3 release exposes attribute element selection within dossiers. This provides end-users with the ability to conveniently select attribute elements in visualizations in an embedding way. To provide continuity with our existing APIs and enable embedded applications to take advantage of this new design concept, we have updated existing endpoints and provided new embedding SDK functions."),(0,r.kt)("h2",{id:"embedding-sdk-functionalities"},"Embedding SDK functionalities"),(0,r.kt)("p",null,"With the visualization element selection feature, the Embedding SDK could do the things below:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Support programmatic selecting of attribute elements in visualizations. This involves the following:"),(0,r.kt)("p",{parentName:"li"},"a. Select attribute elements from a single visualization after the dossier is rendered."),(0,r.kt)("p",{parentName:"li"},"b. Select attribute elements in multiple visualizations on the initial loading of the dossier.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Support programmatic retrieval of available elements in a visualization.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Enables the user to register an event handler to notify the parent application when the attribute element selection is changed. Incorporate the ability to register and unregister events for a callback. This enables the parent application to know when the attribute element selection is changed and provide information about the newly selected attribute elements."))),(0,r.kt)("h2",{id:"embedding-sdk-apis-and-examples"},"Embedding SDK APIs and examples"),(0,r.kt)("h3",{id:"api-for-attribute-element-selection-in-a-dossier"},"API for attribute element selection in a dossier"),(0,r.kt)("h4",{id:"function"},"Function"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Dossier.selectVizElement(props)")),(0,r.kt)("p",null,"The Dossier object created using ",(0,r.kt)("inlineCode",{parentName:"p"},"microstrategy.dossier.create(props)"),". See ",(0,r.kt)("a",{parentName:"p",href:"/embedding-sdk-docs/add-functionality/methods-and-properties"},"Methods and properties for an embedded dossier")," for more information."),(0,r.kt)("h4",{id:"input-parameters"},"Input parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Required?"),(0,r.kt)("th",{parentName:"tr",align:null},"Sample"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"props"),(0,r.kt)("td",{parentName:"tr",align:null},"Object"),(0,r.kt)("td",{parentName:"tr",align:null},"Parameters include visualization key, selection action, and selection data."),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"See the JSON below.")))),(0,r.kt)("h4",{id:"request"},"Request"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "vizKey": "W64",\n  "action": "replace", // Optional. Available values are "replace", "add", and "remove". Default: replace\n  "selection": {\n    "attributeElements": [\n      {\n        "attribute": {\n          "id": "8D679D3611D3E4981000E787EC6DE8A4",\n          "name": "Category" // Not required\n        },\n        "elements": [\n          {\n            "id": "h6;8D679D3611D3E4981000E787EC6DE8A4",\n            "name": "Spring 2012" // Not required\n          }\n        ]\n      }\n    ]\n  }\n}\n')),(0,r.kt)("h4",{id:"response"},"Response"),(0,r.kt)("p",null,"This API returns a promise object, similar to the one shown below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'myDossier\n  .selectVizElement({\n    vizKey: "W64",\n    action: "replace",\n    selection: {\n      attributeElements: [\n        {\n          attribute: {\n            id: "8D679D3611D3E4981000E787EC6DE8A4",\n            name: "Category",\n          },\n          elements: [\n            {\n              id: "h6;8D679D3611D3E4981000E787EC6DE8A4",\n              name: "Spring 2012",\n            },\n          ],\n        },\n      ],\n    },\n  })\n  .then(() => {\n    // ..\n  })\n  .catch((error) => {\n    // ..\n  });\n')),(0,r.kt)("p",null,"Since the target state is specified in the API parameters, the callback parameters for the resolve case are not necessary."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"),(0,r.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"error"),(0,r.kt)("td",{parentName:"tr",align:null},"Error Object"),(0,r.kt)("td",{parentName:"tr",align:null},"new Error(\u201cinvalid operation!\u201c)"),(0,r.kt)("td",{parentName:"tr",align:null},"See Errors for more information.")))),(0,r.kt)("h4",{id:"errors"},"Errors"),(0,r.kt)("p",null,"When an error occurs, this API returns a promise object that in turn returns an error object in rejected cases."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Error Case"),(0,r.kt)("th",{parentName:"tr",align:null},"Error Category"),(0,r.kt)("th",{parentName:"tr",align:null},"Handling Module"),(0,r.kt)("th",{parentName:"tr",align:null},"Error Handling"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"The attribute or element ID in elements is missing."),(0,r.kt)("td",{parentName:"tr",align:null},"Invalid input"),(0,r.kt)("td",{parentName:"tr",align:null},"Embedding SDK"),(0,r.kt)("td",{parentName:"tr",align:null},"Caught by the catch() of the promise object.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"The attribute ID in elements isn't string."),(0,r.kt)("td",{parentName:"tr",align:null},"Invalid input"),(0,r.kt)("td",{parentName:"tr",align:null},"Embedding SDK"),(0,r.kt)("td",{parentName:"tr",align:null},"Caught by the catch() of the promise object.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"The action isn't a valid value."),(0,r.kt)("td",{parentName:"tr",align:null},"Invalid input"),(0,r.kt)("td",{parentName:"tr",align:null},"Embedding SDK"),(0,r.kt)("td",{parentName:"tr",align:null},"Caught by the catch() of the promise object.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"A required parameter is missed or it is not in the correct format."),(0,r.kt)("td",{parentName:"tr",align:null},"Invalid input"),(0,r.kt)("td",{parentName:"tr",align:null},"Web Dossier"),(0,r.kt)("td",{parentName:"tr",align:null},"Caught by the catch() of the promise object.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},'The action is not "replace" and the current visualization selection mode is metric cell selection.'),(0,r.kt)("td",{parentName:"tr",align:null},"Invalid input"),(0,r.kt)("td",{parentName:"tr",align:null},"Web Dossier"),(0,r.kt)("td",{parentName:"tr",align:null},"Caught by the catch() of the promise object.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"The visualization is a filter and the target visualization is loading, so elements could not be selected."),(0,r.kt)("td",{parentName:"tr",align:null},"Other"),(0,r.kt)("td",{parentName:"tr",align:null},"Web Dossier"),(0,r.kt)("td",{parentName:"tr",align:null},"Caught by the catch() of the promise object.")))),(0,r.kt)("h3",{id:"api-for-selecting-attribute-elements-in-multiple-visualizations-on-initial-dossier-load"},"API for selecting attribute elements in multiple visualizations on initial dossier load"),(0,r.kt)("h4",{id:"function-1"},"Function"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"microstrategy.dossier.create(props)")),(0,r.kt)("h4",{id:"input-parameters-1"},"Input parameters"),(0,r.kt)("p",null,"An optional visualizationSelectedElements field has been added to the props object in 2021 Update 3. This field is an array that contains objects for each visualization attribute element selection. See ",(0,r.kt)("a",{parentName:"p",href:"/embedding-sdk-docs/add-functionality/methods-and-properties"},"Methods and properties for an embedded dossier")," for more information about the fields in the props input parameter."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required?"),(0,r.kt)("th",{parentName:"tr",align:null},"Default Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"props.visualizationSelectedElements","[i]",".visualizationkey"),(0,r.kt)("td",{parentName:"tr",align:null},"The visualization node key input by you."),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"props.visualizationSelectedElements","[i]",".action"),(0,r.kt)("td",{parentName:"tr",align:null},'Set to "replace", "add", or "remove".'),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"replace")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"props.visualizationSelectedElements","[i]",".selection"),(0,r.kt)("td",{parentName:"tr",align:null},"Selected attribute elements in the visualization"),(0,r.kt)("td",{parentName:"tr",align:null},"Object"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A")))),(0,r.kt)("h4",{id:"request-1"},"Request"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'microstrategy.dossier.create({\n  // the other initial parameters\n  visualizationSelectedElements: [\n    {\n      visualizationkey: "K52",\n      selection: {\n        attributeElements: [\n          {\n            attribute: {\n              id: "8D679D3611D3E4981000E787EC6DE8A4",\n              name: "Category",\n            },\n            elements: [\n              {\n                id: "h6;8D679D3611D3E4981000E787EC6DE8A4",\n                name: "Spring 2012",\n              },\n            ],\n          },\n        ],\n      },\n    },\n  ],\n});\n')),(0,r.kt)("p",null,"If you do not enter a value for visualizationSelectedElements, the dossier runs using the old behavior and no new attribute elements are selected in the visualization."),(0,r.kt)("h4",{id:"response-1"},"Response"),(0,r.kt)("p",null,"This API returns a dossier promise object in the resolved case, which can be used to call other dossier-owned Embedding SDK APIs."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'var placeholderDiv = document.getElementById("dossierContainer");\nvar myDossier;\nmicrostrategy.dossier\n  .create({\n    // The initial parameters above\n  })\n  .then(function (dossier) {\n    myDossier = dossier;\n    myDossier.goToNextPage();\n    // The other\n  });\n')),(0,r.kt)("h4",{id:"errors-1"},"Errors"),(0,r.kt)("p",null,"When an error occurs, this API returns a promise object that in turn returns an error object in rejected cases."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Error Case"),(0,r.kt)("th",{parentName:"tr",align:null},"Error Category"),(0,r.kt)("th",{parentName:"tr",align:null},"Handling Module"),(0,r.kt)("th",{parentName:"tr",align:null},"Error Handling"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"A required parameter is missed or it is not in the correct format."),(0,r.kt)("td",{parentName:"tr",align:null},"Invalid input"),(0,r.kt)("td",{parentName:"tr",align:null},"Embedding SDK"),(0,r.kt)("td",{parentName:"tr",align:null},"Display an error message and an alert dialog.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"The visKey isn't a valid visualization key or it is not in the current page or panel stack."),(0,r.kt)("td",{parentName:"tr",align:null},"Invalid input"),(0,r.kt)("td",{parentName:"tr",align:null},"Web Dossier"),(0,r.kt)("td",{parentName:"tr",align:null},"Caught by the catch() of the promise object.")))),(0,r.kt)("h3",{id:"api-for-getting-available-elements"},"API for getting available elements"),(0,r.kt)("h4",{id:"function-2"},"Function"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Dossier.getAvailableElements(visKey)")),(0,r.kt)("h4",{id:"input-parameters-2"},"Input parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required?"),(0,r.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"visKey"),(0,r.kt)("td",{parentName:"tr",align:null},"The visualization node key. It is the result of the getCurrentPageVisualizationList API."),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A"),(0,r.kt)("td",{parentName:"tr",align:null},'"K52"')))),(0,r.kt)("h4",{id:"response-2"},"Response"),(0,r.kt)("p",null,"This API returns a promise object, similar to the one below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"myDossier\n  .getAvailableElements(visKey)\n  .then((availableElements) => {\n    // ...\n  })\n  .catch((error) => {\n    // ...\n  });\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"availableElements")," is an array representing all the available elements. Here is an example."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "attribute": {\n      "id": "8D679D3611D3E4981000E787EC6DE8A4",\n      "name": "Category"\n    },\n    "elements": [\n      {\n        "id": "h6;8D679D3611D3E4981000E787EC6DE8A4",\n        "name": "Spring 2012"\n      }\n    ]\n  }\n]\n')),(0,r.kt)("h4",{id:"errors-2"},"Errors"),(0,r.kt)("p",null,"When an error occurs, this API returns a promise object that in turn returns an error object in rejected cases."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Error Case"),(0,r.kt)("th",{parentName:"tr",align:null},"Error Category"),(0,r.kt)("th",{parentName:"tr",align:null},"Handling Module"),(0,r.kt)("th",{parentName:"tr",align:null},"Error Handling"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"The visKey isn't a valid visualization key or it is not in the current page or panel stack"),(0,r.kt)("td",{parentName:"tr",align:null},"Invalid input"),(0,r.kt)("td",{parentName:"tr",align:null},"Web Dossier"),(0,r.kt)("td",{parentName:"tr",align:null},"Caught by the catch() of the promise object.")))),(0,r.kt)("h3",{id:"callback-for-monitoring-the-changing-of-visualization-elements"},"Callback for monitoring the changing of visualization elements"),(0,r.kt)("p",null,"In some instances, the available elements may change when visualization data is changed by a user\u2019s manual actions. An onVisualizationElementsChanged event monitors this action and enables the user to update their available elements immediately when the data is changed."),(0,r.kt)("h4",{id:"event-name"},"Event name"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"onVisualizationElementsChanged")),(0,r.kt)("h4",{id:"callback-format"},"Callback format"),(0,r.kt)("p",null,"The following code example includes ",(0,r.kt)("inlineCode",{parentName:"p"},"registerEventHandler"),", which is an existing API."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'myDossier.registerEventHandler(microstrategy.dossier.EventType.ON_VIZ_ELEMENT_CHANGED, function (availableElements) {\n  console.log("The available elements: ", availableElements);\n  // The other handling logic after getting these available elements\n});\n')),(0,r.kt)("p",null,"The callback parameter's availableElements are shown below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "visualizationKey": "K52",\n    "attributeElements": [\n      {\n        "attribute": {\n          "id": "8D679D3611D3E4981000E787EC6DE8A4",\n          "name": "Category"\n        },\n        "elements": [\n          {\n            "id": "h6;8D679D3611D3E4981000E787EC6DE8A4",\n            "name": "Spring 2012"\n          }\n        ]\n      }\n    ]\n  }\n]\n')),(0,r.kt)("h4",{id:"response-3"},"Response"),(0,r.kt)("p",null,"This API returns a ",(0,r.kt)("inlineCode",{parentName:"p"},"dossier")," promise object in the resolved case, which can be used to call other dossier-owned Embedding SDK APIs."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'var placeholderDiv = document.getElementById("dossierContainer");\nvar myDossier;\nmicrostrategy.dossier\n  .create({\n    url: url,\n    placeholder: placeholderDiv,\n  })\n  .then(function (dossier) {\n    myDossier = dossier;\n    // The other handling logics\n  });\n')))}c.isMDXComponent=!0}}]);