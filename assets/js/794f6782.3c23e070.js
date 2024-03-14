"use strict";(self.webpackChunkembedding_sdk_docs=self.webpackChunkembedding_sdk_docs||[]).push([[6676],{9829:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>d,toc:()=>c});var t=i(5893),s=i(1151);const a={title:"Getting dashboard info via APIs",description:"You can get dashboard information, such as definition and visualization data, with Native Embedding SDK."},r=void 0,d={id:"native-embedding-architecture/dossier-info-api",title:"Getting dashboard info via APIs",description:"You can get dashboard information, such as definition and visualization data, with Native Embedding SDK.",source:"@site/docs/native-embedding-architecture/dossier-info-api.md",sourceDirName:"native-embedding-architecture",slug:"/native-embedding-architecture/dossier-info-api",permalink:"/embedding-sdk-docs/native-embedding-architecture/dossier-info-api",draft:!1,unlisted:!1,editUrl:"https://github.com/MicroStrategy/embedding-sdk-docs/tree/public/docs/native-embedding-architecture/dossier-info-api.md",tags:[],version:"current",lastUpdatedBy:"Aran0011",lastUpdatedAt:1710401361,formattedLastUpdatedAt:"Mar 14, 2024",frontMatter:{title:"Getting dashboard info via APIs",description:"You can get dashboard information, such as definition and visualization data, with Native Embedding SDK."},sidebar:"tutorialSidebar",previous:{title:"Visualization manipulation on graphics",permalink:"/embedding-sdk-docs/native-embedding-architecture/vis-manipulation"},next:{title:"Retrieve and apply filters",permalink:"/embedding-sdk-docs/native-embedding-architecture/apply-filter"}},o={},c=[{value:"Get dashboard definition",id:"get-dashboard-definition",level:2},{value:"<code>MstrDossier.getDossierDefinition</code> examples",id:"mstrdossiergetdossierdefinition-examples",level:3},{value:"Get visualization data",id:"get-visualization-data",level:2},{value:"<code>MstrDossier.getVisualizationData</code> examples",id:"mstrdossiergetvisualizationdata-examples",level:3}];function l(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components},{Available:i,Details:a}=n;return i||m("Available",!0),a||m("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i,{since:"2021 Update 9 (May 2023)"}),"\n",(0,t.jsxs)(n.p,{children:["Filters can be applied both during the execution of an embedded dashboard and after it has been rendered. After using ",(0,t.jsx)(n.a,{href:"/embedding-sdk-docs/native-embedding-architecture/embed-multiple-viz",children:"Native Embedding SDK"})," to load the dashboard in a client's webpage, you can use the Native Embedding SDK to get the definition or data from the dashboard."]}),"\n",(0,t.jsxs)(n.p,{children:["Let's say you already have ",(0,t.jsx)(n.code,{children:"MstrEnvironment"})," and ",(0,t.jsx)(n.code,{children:"MstrDossier"})," objects:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'try {\n  const mstrEnvironment = await microstrategy.embeddingComponent.environments.create({\n    serverUrl: "https://demo.microstrategy.com/MicroStrategyLibrary",\n    getAuthToken: () => {\n      // Logic similar to the existing Native Embedding SDK\n    },\n  });\n  const mstrDossier = await mstrEnvironment.loadDossier({\n    projectId: "B19DEDCC11D4E0EFC000EB9495D0F44F",\n    objectId: "D9AB379D11EC92C1D9DC0080EFD415BB",\n  });\n  // Your custom logic\n} catch (error) {\n  // Your own error handling code\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"get-dashboard-definition",children:"Get dashboard definition"}),"\n",(0,t.jsxs)(n.p,{children:["You can use the ",(0,t.jsx)(n.code,{children:"MstrDossier.getDossierDefinition()"})," function in the Native Embedding SDK to retrieve the definition of the dashboard."]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:(0,t.jsx)(n.code,{children:"getDossierDefinition()"})}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Class"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"MstrDossier"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Return Type"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Promise<DossierDefinition>"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Description"}),(0,t.jsx)(n.td,{children:"Get the definition of the dashboard."})]})]})]}),"\n",(0,t.jsxs)(n.h3,{id:"mstrdossiergetdossierdefinition-examples",children:[(0,t.jsx)(n.code,{children:"MstrDossier.getDossierDefinition"})," examples"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"try {\n  const dossierDefinition = await mstrDossier.getDossierDefinition();\n  // Your own code\n} catch (error) {\n  // Your own error handling code\n}\n"})}),"\n",(0,t.jsxs)(a,{children:[(0,t.jsx)("summary",{children:"Example of the dashboard definition in the resolved value:"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "id": "829F892C7C418AA0242AE08F0F6B89DE",\n  "name": "zdeng test dossier",\n  "currentChapter": "K36",\n  "chapters": [\n    {\n      "key": "K36",\n      "name": "Chapter 1",\n      "pages": [\n        {\n          "key": "K53",\n          "name": "Page 1",\n          "visualizations": [\n            {\n              "key": "K52",\n              "name": "Visualization 1",\n              "visualizationType": "grid"\n            }\n          ]\n        }\n      ],\n      "filters": []\n    }\n  ],\n  "datasets": [\n    {\n      "name": "New Dataset 1",\n      "id": "84C31F8AD04B29C9A56616A7EF9669A4",\n      "availableObjects": [\n        {\n          "id": "8D679D5111D3E4981000E787EC6DE8A4",\n          "name": "Year",\n          "type": "attribute",\n          "forms": [\n            {\n              "id": "45C11FA478E745FEA08D781CEA190FE5",\n              "name": "ID",\n              "dataType": "integer",\n              "baseFormCategory": "ID",\n              "baseFormType": "number"\n            }\n          ]\n        },\n        {\n          "id": "7FD5B69611D5AC76C000D98A4CC5F24F",\n          "name": "Cost",\n          "type": "metric"\n        }\n      ]\n    }\n  ]\n}\n'})})]}),"\n",(0,t.jsx)(n.h2,{id:"get-visualization-data",children:"Get visualization data"}),"\n",(0,t.jsxs)(n.p,{children:["You can use the ",(0,t.jsx)(n.code,{children:"MstrDossier.getVisualizationData()"})," function in the Native Embedding SDK to retrieve the data of a single visualization."]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:(0,t.jsx)(n.code,{children:"getVisualizationData()"})}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Class"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"MstrDossier"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Return Type"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Promise<VisualizationData>"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Description"}),(0,t.jsx)(n.td,{children:"Get the definition and data of a specific visualization."})]})]})]}),"\n",(0,t.jsxs)(n.h3,{id:"mstrdossiergetvisualizationdata-examples",children:[(0,t.jsx)(n.code,{children:"MstrDossier.getVisualizationData"})," examples"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'try {\n  const dossierDefinition = await mstrDossier.getVisualizationData({\n    visualizationKey: "K52", // visualization key, required\n    offset: 0, // data offset, optional\n    limit: 100, // data limit, optional\n  });\n  // Your own code\n} catch (error) {\n  // Your own error handling code\n}\n'})}),"\n",(0,t.jsxs)(a,{children:[(0,t.jsx)("summary",{children:"Example of the visualization data in the resolved value:"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "k": "K52",\n  "n": "Visualization 1",\n  "key": "K52",\n  "name": "Visualization 1",\n  "isGrid": true,\n  "visualizationType": "grid",\n  "definition": {\n    "grid": {\n      "crossTab": false,\n      "metricsPosition": {\n        "axis": "columns",\n        "index": 0\n      },\n      "rows": [\n        {\n          "name": "Year",\n          "id": "8D679D5111D3E4981000E787EC6DE8A4",\n          "type": "attribute",\n          "forms": [\n            {\n              "id": "45C11FA478E745FEA08D781CEA190FE5",\n              "name": "ID",\n              "dataType": "integer",\n              "baseFormCategory": "ID",\n              "baseFormType": "number"\n            }\n          ],\n          "elements": [\n            {\n              "formValues": ["2014"],\n              "id": "h2014;8D679D5111D3E4981000E787EC6DE8A4"\n            },\n            {\n              "formValues": ["2015"],\n              "id": "h2015;8D679D5111D3E4981000E787EC6DE8A4"\n            },\n            {\n              "formValues": ["2016"],\n              "id": "h2016;8D679D5111D3E4981000E787EC6DE8A4"\n            }\n          ]\n        }\n      ],\n      "columns": [\n        {\n          "name": "Metrics",\n          "id": "00000000000000000000000000000000",\n          "type": "templateMetrics",\n          "elements": [\n            {\n              "name": "Cost",\n              "id": "7FD5B69611D5AC76C000D98A4CC5F24F",\n              "type": "metric",\n              "min": 7343097.059599997,\n              "max": 12609466.811,\n              "dataType": "double",\n              "numberFormatting": {\n                "category": 1,\n                "decimalPlaces": 0,\n                "thousandSeparator": true,\n                "currencySymbol": "$",\n                "currencyPosition": 0,\n                "formatString": "\\"$\\"#,##0",\n                "negativeType": 1\n              }\n            }\n          ]\n        }\n      ],\n      "sorting": {\n        "rows": [],\n        "columns": [],\n        "pageBy": []\n      },\n      "thresholds": []\n    }\n  },\n  "data": {\n    "paging": {\n      "total": 3,\n      "current": 3,\n      "offset": 0,\n      "limit": 1000\n    },\n    "headers": {\n      "rows": [[0], [1], [2]],\n      "columns": [[0]]\n    },\n    "metricValues": {\n      "raw": [[7343097.059599997], [9777520.649800004], [12609466.811]],\n      "formatted": [["$7,343,097"], ["$9,777,521"], ["$12,609,467"]],\n      "extras": [[{}], [{}], [{}]]\n    }\n  },\n  "promptOrdering": []\n}\n'})})]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}function m(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},1151:(e,n,i)=>{i.d(n,{Z:()=>d,a:()=>r});var t=i(7294);const s={},a=t.createContext(s);function r(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);