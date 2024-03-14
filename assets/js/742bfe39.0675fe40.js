"use strict";(self.webpackChunkembedding_sdk_docs=self.webpackChunkembedding_sdk_docs||[]).push([[5],{4585:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>o,contentTitle:()=>d,default:()=>l,frontMatter:()=>i,metadata:()=>c,toc:()=>a});var n=t(5893),s=t(1151);const i={title:"MstrEnvironment class",description:"MstrEnvironment class"},d=void 0,c={id:"native-embedding-architecture/mstr-environment",title:"MstrEnvironment class",description:"MstrEnvironment class",source:"@site/docs/native-embedding-architecture/mstr-environment.md",sourceDirName:"native-embedding-architecture",slug:"/native-embedding-architecture/mstr-environment",permalink:"/embedding-sdk-docs/native-embedding-architecture/mstr-environment",draft:!1,unlisted:!1,editUrl:"https://github.com/MicroStrategy/embedding-sdk-docs/tree/public/docs/native-embedding-architecture/mstr-environment.md",tags:[],version:"current",lastUpdatedBy:"Aran0011",lastUpdatedAt:1710401361,formattedLastUpdatedAt:"Mar 14, 2024",frontMatter:{title:"MstrEnvironment class",description:"MstrEnvironment class"},sidebar:"tutorialSidebar",previous:{title:"embeddingComponent.environments namespace",permalink:"/embedding-sdk-docs/native-embedding-architecture/embedding-components"},next:{title:"MstrDossier class",permalink:"/embedding-sdk-docs/native-embedding-architecture/mstr-dossier"}},o={},a=[{value:"APIs",id:"apis",level:2},{value:"The load dashboard API",id:"the-load-dashboard-api",level:3},{value:"Function",id:"function",level:4},{value:"Input Parameters",id:"input-parameters",level:4},{value:"Response",id:"response",level:4},{value:"Example",id:"example",level:4},{value:"API Errors",id:"api-errors",level:4},{value:"The destroy dashboard API",id:"the-destroy-dashboard-api",level:3},{value:"Function",id:"function-1",level:4},{value:"Input Parameters",id:"input-parameters-1",level:4},{value:"Response",id:"response-1",level:4},{value:"Example",id:"example-1",level:4},{value:"API Errors",id:"api-errors-1",level:4},{value:"The load bot API",id:"the-load-bot-api",level:3},{value:"Function",id:"function-2",level:4},{value:"Input Parameters",id:"input-parameters-2",level:4},{value:"Response",id:"response-2",level:4},{value:"Example",id:"example-2",level:4},{value:"API Errors",id:"api-errors-2",level:4}];function h(e){const r={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components},{Available:t}=r;return t||function(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Available",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t,{since:"2021 Update 9 (May 2023)"}),"\n",(0,n.jsxs)(r.p,{children:["The instance of this class is the object returned from the ",(0,n.jsx)(r.code,{children:"microstrategy.embeddingComponent.environments.create()"})," function, which allows access to the MicroStrategy application. ",(0,n.jsx)(r.code,{children:"MstrEnvironment"})," class represents one MicroStrategy Library Application identified by a URL."]}),"\n",(0,n.jsx)(r.h2,{id:"apis",children:"APIs"}),"\n",(0,n.jsx)(r.h3,{id:"the-load-dashboard-api",children:"The load dashboard API"}),"\n",(0,n.jsx)(r.h4,{id:"function",children:"Function"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.code,{children:"async loadDossier(props)"})}),"\n",(0,n.jsx)(r.h4,{id:"input-parameters",children:"Input Parameters"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Parameter Name"}),(0,n.jsx)(r.th,{children:"Data Type"}),(0,n.jsx)(r.th,{children:"Description"}),(0,n.jsx)(r.th,{children:"Is Required"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"props.projectId"}),(0,n.jsx)(r.td,{children:"String"}),(0,n.jsx)(r.td,{children:"The project ID, which must be a GUID."}),(0,n.jsx)(r.td,{children:"true"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"props.objectId"}),(0,n.jsx)(r.td,{children:"String"}),(0,n.jsx)(r.td,{children:"The dashboard ID, which must be valid. If the ID is a document, report, or bot ID, an error is reported."}),(0,n.jsx)(r.td,{children:"true"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"props.instanceId"}),(0,n.jsx)(r.td,{children:"String"}),(0,n.jsx)(r.td,{children:"The dashboard instance ID, if it already exists."}),(0,n.jsx)(r.td,{children:"false"})]})]})]}),"\n",(0,n.jsxs)(r.p,{children:["The ",(0,n.jsx)(r.code,{children:"projectId"})," + ",(0,n.jsx)(r.code,{children:"objectId"})," is used as the dashboard identifier. If the function is called twice with the same parameter, the same ",(0,n.jsx)(r.code,{children:"MstrDossier"})," object is returned in the callback."]}),"\n",(0,n.jsx)(r.h4,{id:"response",children:"Response"}),"\n",(0,n.jsxs)(r.p,{children:["This API returns a promise object that resolves to a ",(0,n.jsx)(r.code,{children:"MstrDossier"})," object."]}),"\n",(0,n.jsx)(r.h4,{id:"example",children:"Example"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-js",children:'try {\n  const environment = await microstrategy.embeddingComponent.environments.create({\n    serverUrl: "https://demo.microstrategy.com/MicroStrategyLibrary",\n    getAuthToken: () => {\n      // Logic similar to the existing Native Embedding SDK.\n    },\n  });\n  // Begin here\n  const dossier = await environment.loadDossier({\n    projectId: "B19DEDCC11D4E0EFC000EB9495D0F44F",\n    objectId: "D9AB379D11EC92C1D9DC0080EFD415BB",\n  });\n} catch (error) {\n  // Your own error handling logic\n}\n'})}),"\n",(0,n.jsx)(r.h4,{id:"api-errors",children:"API Errors"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Error Case"}),(0,n.jsx)(r.th,{children:"Error Category"}),(0,n.jsx)(r.th,{children:"Handling Module"}),(0,n.jsx)(r.th,{children:"Error Handling"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"The input parameter fails input validation"}),(0,n.jsx)(r.td,{children:"Invalid input"}),(0,n.jsx)(r.td,{children:"Native Embedding SDK"}),(0,n.jsxs)(r.td,{children:["Caught by the ",(0,n.jsx)(r.code,{children:"catch()"})," of the promise object"]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Other REST API errors"}),(0,n.jsx)(r.td,{children:"Other"}),(0,n.jsx)(r.td,{children:"Native Embedding SDK"}),(0,n.jsxs)(r.td,{children:["Caught by the ",(0,n.jsx)(r.code,{children:"catch()"})," of the promise object"]})]})]})]}),"\n",(0,n.jsx)(r.h3,{id:"the-destroy-dashboard-api",children:"The destroy dashboard API"}),"\n",(0,n.jsx)(r.h4,{id:"function-1",children:"Function"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.code,{children:"async unloadDossier(dossier)"})}),"\n",(0,n.jsx)(r.h4,{id:"input-parameters-1",children:"Input Parameters"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Parameter Name"}),(0,n.jsx)(r.th,{children:"Data Type"}),(0,n.jsx)(r.th,{children:"Description"}),(0,n.jsx)(r.th,{children:"Is Required"})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"dossier"}),(0,n.jsxs)(r.td,{children:[(0,n.jsx)(r.code,{children:"MstrDossier"})," class"]}),(0,n.jsxs)(r.td,{children:["The ",(0,n.jsx)(r.code,{children:"MstrDossier"})," object created by the loadDossier function"]}),(0,n.jsx)(r.td,{children:"true"})]})})]}),"\n",(0,n.jsx)(r.h4,{id:"response-1",children:"Response"}),"\n",(0,n.jsxs)(r.p,{children:["This API returns a promise object that resolves to a ",(0,n.jsx)(r.code,{children:"MstrDossier"})," object."]}),"\n",(0,n.jsx)(r.h4,{id:"example-1",children:"Example"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-js",children:"try {\n  // The logic to generate a MstrDossier object\n  await environment.unloadDossier(dossier);\n} catch (error) {\n  // Your own error handling logic\n}\n"})}),"\n",(0,n.jsx)(r.h4,{id:"api-errors-1",children:"API Errors"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Error Case"}),(0,n.jsx)(r.th,{children:"Error Category"}),(0,n.jsx)(r.th,{children:"Handling Module"}),(0,n.jsx)(r.th,{children:"Error Handling"})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"The input parameter isn\u2019t a valid dashboard object"}),(0,n.jsx)(r.td,{children:"Invalid input"}),(0,n.jsx)(r.td,{children:"Native Embedding SDK"}),(0,n.jsxs)(r.td,{children:["Caught by the ",(0,n.jsx)(r.code,{children:"catch()"})," of the promise object"]})]})})]}),"\n",(0,n.jsx)(r.h3,{id:"the-load-bot-api",children:"The load bot API"}),"\n",(0,n.jsx)(r.h4,{id:"function-2",children:"Function"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.code,{children:"async loadBot(props)"})}),"\n",(0,n.jsx)(r.h4,{id:"input-parameters-2",children:"Input Parameters"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Parameter Name"}),(0,n.jsx)(r.th,{children:"Data Type"}),(0,n.jsx)(r.th,{children:"Description"}),(0,n.jsx)(r.th,{children:"Is Required"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"props.projectId"}),(0,n.jsx)(r.td,{children:"String"}),(0,n.jsx)(r.td,{children:"The project ID, which must be a GUID."}),(0,n.jsx)(r.td,{children:"true"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"props.objectId"}),(0,n.jsx)(r.td,{children:"String"}),(0,n.jsx)(r.td,{children:"The bot ID, which must be valid. If the ID is a dashboard, document or report ID, an error is reported."}),(0,n.jsx)(r.td,{children:"true"})]})]})]}),"\n",(0,n.jsxs)(r.p,{children:["The ",(0,n.jsx)(r.code,{children:"projectId"})," + ",(0,n.jsx)(r.code,{children:"objectId"})," is used as the bot identifier. If the function is called twice with the same parameter, the same ",(0,n.jsx)(r.code,{children:"MstrBot"})," object is returned in the callback."]}),"\n",(0,n.jsx)(r.h4,{id:"response-2",children:"Response"}),"\n",(0,n.jsxs)(r.p,{children:["This API returns a promise object that resolves to a ",(0,n.jsx)(r.code,{children:"MstrBot"})," object."]}),"\n",(0,n.jsx)(r.h4,{id:"example-2",children:"Example"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-js",children:'try {\n  const environment = await microstrategy.embeddingComponent.environments.create({\n    serverUrl: "https://demo.microstrategy.com/MicroStrategyLibrary",\n    getAuthToken: () => {\n      // Logic similar to the existing Native Embedding SDK.\n    },\n  });\n  // Begin here\n  const bot = await environment.loadBot({\n    projectId: "B19DEDCC11D4E0EFC000EB9495D0F44F",\n    objectId: "E9AB379D11EC92C1D9DC0080EFD415BB",\n  });\n} catch (error) {\n  // Your own error handling logic\n}\n'})}),"\n",(0,n.jsx)(r.h4,{id:"api-errors-2",children:"API Errors"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Error Case"}),(0,n.jsx)(r.th,{children:"Error Category"}),(0,n.jsx)(r.th,{children:"Handling Module"}),(0,n.jsx)(r.th,{children:"Error Handling"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"The input parameter fails input validation"}),(0,n.jsx)(r.td,{children:"Invalid input"}),(0,n.jsx)(r.td,{children:"Native Embedding SDK"}),(0,n.jsxs)(r.td,{children:["Caught by the ",(0,n.jsx)(r.code,{children:"catch()"})," of the promise object"]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Other REST API errors"}),(0,n.jsx)(r.td,{children:"Other"}),(0,n.jsx)(r.td,{children:"Native Embedding SDK"}),(0,n.jsxs)(r.td,{children:["Caught by the ",(0,n.jsx)(r.code,{children:"catch()"})," of the promise object"]})]})]})]})]})}function l(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},1151:(e,r,t)=>{t.d(r,{Z:()=>c,a:()=>d});var n=t(7294);const s={},i=n.createContext(s);function d(e){const r=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),n.createElement(i.Provider,{value:r},e.children)}}}]);