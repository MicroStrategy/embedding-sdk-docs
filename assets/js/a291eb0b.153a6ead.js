"use strict";(self.webpackChunkembedding_sdk_docs=self.webpackChunkembedding_sdk_docs||[]).push([[2186],{1275:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var n=i(5893),s=i(1151);const r={title:"MstrDossier class",description:"MstrDossier class"},d=void 0,a={id:"native-embedding-architecture/mstr-dossier",title:"MstrDossier class",description:"MstrDossier class",source:"@site/docs/native-embedding-architecture/mstr-dossier.md",sourceDirName:"native-embedding-architecture",slug:"/native-embedding-architecture/mstr-dossier",permalink:"/embedding-sdk-docs/native-embedding-architecture/mstr-dossier",draft:!1,unlisted:!1,editUrl:"https://github.com/MicroStrategy/embedding-sdk-docs/tree/public/docs/native-embedding-architecture/mstr-dossier.md",tags:[],version:"current",lastUpdatedBy:"Aran0011",lastUpdatedAt:1705978927,formattedLastUpdatedAt:"Jan 23, 2024",frontMatter:{title:"MstrDossier class",description:"MstrDossier class"},sidebar:"tutorialSidebar",previous:{title:"MstrEnvironment class",permalink:"/embedding-sdk-docs/native-embedding-architecture/mstr-environment"},next:{title:"Visualization manipulation on graphics",permalink:"/embedding-sdk-docs/native-embedding-architecture/vis-manipulation"}},o={},c=[{value:"APIs",id:"apis",level:2},{value:"The show visualizations API",id:"the-show-visualizations-api",level:3},{value:"Function",id:"function",level:4},{value:"Input Parameters",id:"input-parameters",level:4},{value:"Response",id:"response",level:4},{value:"Example",id:"example",level:4},{value:"API Errors",id:"api-errors",level:4},{value:"The get infomation API",id:"the-get-infomation-api",level:3}];function l(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components},{Available:i}=t;return i||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Available",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i,{since:"2021 Update 9 (May 2023)"}),"\n",(0,n.jsxs)(t.p,{children:["The object returned from the ",(0,n.jsx)(t.code,{children:"MstrEnvironment.loadDossier()"})," function, which allows access to the MicroStrategy dossier object."]}),"\n",(0,n.jsx)(t.h2,{id:"apis",children:"APIs"}),"\n",(0,n.jsx)(t.h3,{id:"the-show-visualizations-api",children:"The show visualizations API"}),"\n",(0,n.jsx)(t.h4,{id:"function",children:"Function"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:"async refresh(props)"})}),"\n",(0,n.jsx)(t.h4,{id:"input-parameters",children:"Input Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Parameter Name"}),(0,n.jsx)(t.th,{children:"Data Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Is Required"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"props"}),(0,n.jsx)(t.td,{children:"Array"}),(0,n.jsxs)(t.td,{children:["This parameter cannot be empty. It describes the visualizations that must appear on the page. Each visualization must have a valid container. If you call ",(0,n.jsx)(t.code,{children:"refresh()"})," for a second time, the visualizations rendered in the former ",(0,n.jsx)(t.code,{children:"refresh()"})," call are destroyed first, then all the visualizations specified in the second ",(0,n.jsx)(t.code,{children:"refresh()"})," call are shown on page by page."]}),(0,n.jsx)(t.td,{children:"true"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"props[i].key"}),(0,n.jsx)(t.td,{children:"String"}),(0,n.jsx)(t.td,{children:"The visualization key id."}),(0,n.jsx)(t.td,{children:"true"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"props[i].container"}),(0,n.jsx)(t.td,{children:"HTMLElement"}),(0,n.jsxs)(t.td,{children:["The HTML element used for displaying the visualization. The HTML element must be in the current DOM tree of the client\u2019s page. All elements must exist and cannot be in iframes. The ",(0,n.jsx)(t.code,{children:"Node.contains()"})," function is used to determine this and is compatible with all browsers."]}),(0,n.jsx)(t.td,{children:"true"})]})]})]}),"\n",(0,n.jsx)(t.h4,{id:"response",children:"Response"}),"\n",(0,n.jsx)(t.p,{children:"This API returns a promise object that resolves to nothing."}),"\n",(0,n.jsx)(t.h4,{id:"example",children:"Example"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:'try {\n  const environment = await microstrategy.embeddingComponent.environments.create({\n    serverUrl: "https://demo.microstrategy.com/MicroStrategyLibrary",\n    getAuthToken: () => {\n      // Logic similar to the existing Native Embedding SDK, but only standard auth login is allowed\n    },\n  });\n  const dossier = await environment.loadDossier({\n    projectId: "B19DEDCC11D4E0EFC000EB9495D0F44F",\n    objectId: "D9AB379D11EC92C1D9DC0080EFD415BB",\n  });\n  // Begin here\n  const containerHtmlElement = document.getElementById("containerA");\n  await dossier.refresh([\n    {\n      key: "K66",\n      container: containerHtmlElement,\n    },\n  ]);\n  // Your own code after the visualizations are all loaded\n} catch (error) {\n  // Add your own handling logic here\n}\n'})}),"\n",(0,n.jsx)(t.h4,{id:"api-errors",children:"API Errors"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Error Case"}),(0,n.jsx)(t.th,{children:"Error Category"}),(0,n.jsx)(t.th,{children:"Handling Module"}),(0,n.jsx)(t.th,{children:"Error Handling"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"The input parameter fails input validation"}),(0,n.jsx)(t.td,{children:"Invalid input"}),(0,n.jsx)(t.td,{children:"Native Embedding SDK"}),(0,n.jsxs)(t.td,{children:["Caught by the ",(0,n.jsx)(t.code,{children:"catch()"})," of the promise object"]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"The user wants to show more than one visualization in one container in input params"}),(0,n.jsx)(t.td,{children:"Invalid input"}),(0,n.jsx)(t.td,{children:"Native Embedding SDK"}),(0,n.jsxs)(t.td,{children:["Caught by the ",(0,n.jsx)(t.code,{children:"catch()"})," of the promise object"]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"The user wants to show one visualization in multiple containers"}),(0,n.jsx)(t.td,{children:"Invalid input"}),(0,n.jsx)(t.td,{children:"Native Embedding SDK"}),(0,n.jsxs)(t.td,{children:["Caught by the ",(0,n.jsx)(t.code,{children:"catch()"})," of the promise object"]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Visualization key isn't a valid visualization key in the dossier"}),(0,n.jsx)(t.td,{children:"Invalid input"}),(0,n.jsx)(t.td,{children:"Native Embedding SDK"}),(0,n.jsxs)(t.td,{children:["Caught by the ",(0,n.jsx)(t.code,{children:"catch()"})," of the promise object"]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"The container isn\u2019t a valid HTML element in the DOM tree"}),(0,n.jsx)(t.td,{children:"Invalid input"}),(0,n.jsx)(t.td,{children:"Native Embedding SDK"}),(0,n.jsxs)(t.td,{children:["Caught by the ",(0,n.jsx)(t.code,{children:"catch()"})," of the promise object"]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"A container has children that are not shown in the visualization"}),(0,n.jsx)(t.td,{children:"Invalid input"}),(0,n.jsx)(t.td,{children:"Native Embedding SDK"}),(0,n.jsxs)(t.td,{children:["Caught by the ",(0,n.jsx)(t.code,{children:"catch()"})," of the promise object"]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"A container is occupied by other dossiers"}),(0,n.jsx)(t.td,{children:"Invalid input"}),(0,n.jsx)(t.td,{children:"Native Embedding SDK"}),(0,n.jsxs)(t.td,{children:["Caught by the ",(0,n.jsx)(t.code,{children:"catch()"})," of the promise object"]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Other REST API errors"}),(0,n.jsx)(t.td,{children:"Other"}),(0,n.jsx)(t.td,{children:"Native Embedding SDK"}),(0,n.jsxs)(t.td,{children:["Caught by the ",(0,n.jsx)(t.code,{children:"catch()"})," of the promise object"]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"The key is the visualization key of the visualization in the panel"}),(0,n.jsx)(t.td,{children:"Invalid input"}),(0,n.jsx)(t.td,{children:"Native Embedding SDK"}),(0,n.jsxs)(t.td,{children:['console err message in console "The visualization ',(0,n.jsx)(t.code,{children:"${VisualizationKey}"})," is a visualization in a panel, which isn't supported.\""]})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"the-get-infomation-api",children:"The get infomation API"}),"\n",(0,n.jsxs)(t.p,{children:["You can see the API at the ",(0,n.jsx)(t.a,{href:"dossier-info-api",children:"Getting dossier info via APIs document"})]})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},1151:(e,t,i)=>{i.d(t,{Z:()=>a,a:()=>d});var n=i(7294);const s={},r=n.createContext(s);function d(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);