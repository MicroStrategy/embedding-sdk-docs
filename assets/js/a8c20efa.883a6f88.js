"use strict";(self.webpackChunkembedding_sdk_docs=self.webpackChunkembedding_sdk_docs||[]).push([[7046],{7487:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var i=t(5893),s=t(1151);const r={title:"Destroy visualizations on a page",description:"Destroy visualizations on a page"},o=void 0,d={id:"native-embedding-architecture/destroy-multiple-viz",title:"Destroy visualizations on a page",description:"Destroy visualizations on a page",source:"@site/docs/native-embedding-architecture/destroy-multiple-viz.md",sourceDirName:"native-embedding-architecture",slug:"/native-embedding-architecture/destroy-multiple-viz",permalink:"/embedding-sdk-docs/native-embedding-architecture/destroy-multiple-viz",draft:!1,unlisted:!1,editUrl:"https://github.com/MicroStrategy/embedding-sdk-docs/tree/public/docs/native-embedding-architecture/destroy-multiple-viz.md",tags:[],version:"current",lastUpdatedBy:"Aran0011",lastUpdatedAt:1710401361,formattedLastUpdatedAt:"Mar 14, 2024",frontMatter:{title:"Destroy visualizations on a page",description:"Destroy visualizations on a page"},sidebar:"tutorialSidebar",previous:{title:"Embed multiple dossier visualizations on a page",permalink:"/embedding-sdk-docs/native-embedding-architecture/embed-multiple-viz"},next:{title:"Embed multiple bot visualizations on a page",permalink:"/embedding-sdk-docs/native-embedding-architecture/embed-bot-visualizations"}},a={},c=[{value:"Purpose",id:"purpose",level:2},{value:"Example code",id:"example-code",level:2},{value:"References",id:"references",level:2}];function l(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components},{Available:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Available",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t,{since:"2021 Update 9 (May 2023)"}),"\n",(0,i.jsx)(n.h2,{id:"purpose",children:"Purpose"}),"\n",(0,i.jsxs)(n.p,{children:["After using ",(0,i.jsx)(n.a,{href:"/embedding-sdk-docs/native-embedding-architecture/embed-multiple-viz",children:"Native Embedding SDK"})," to embed multiple visualizations in a client's webpage, you can also destroy them to clear your page, or embed the visualizations from another dossier."]}),"\n",(0,i.jsx)(n.h2,{id:"example-code",children:"Example code"}),"\n",(0,i.jsxs)(n.p,{children:["Let's say you already have ",(0,i.jsx)(n.code,{children:"MstrEnvironment"})," and ",(0,i.jsx)(n.code,{children:"MstrDossier"})," objects:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'try {\n  const mstrEnvironment = await microstrategy.embeddingComponent.environments.create({\n    serverUrl: "https://demo.microstrategy.com/MicroStrategyLibrary",\n    getAuthToken: () => {\n      // Logic similar to the existing Native Embedding SDK\n    },\n  });\n  const mstrDossier = await mstrEnvironment.loadDossier({\n    projectId: "B19DEDCC11D4E0EFC000EB9495D0F44F",\n    objectId: "D9AB379D11EC92C1D9DC0080EFD415BB",\n  });\n  await mstrDossier.refresh([\n    {\n      key: "K66",\n      container: document.getElementById("container1"),\n    },\n  ]);\n  // Your custom logic\n} catch (error) {\n  // Your own error handling code\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["To destroy the embedded visualizations, you can destroy the ",(0,i.jsx)(n.code,{children:"MstrDossier"})," object that owns them:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"try {\n  await mstrEnvironment.unloadDossier(mstrDossier);\n} catch (error) {\n  // Your own error handling code\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["or destroy the ",(0,i.jsx)(n.code,{children:"MstrEnvironment"})," object that owns these visualizations:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"try {\n  await microstrategy.embeddingComponent.environments(mstrEnvironment);\n} catch (error) {\n  // Your own error handling code\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"references",children:"References"}),"\n",(0,i.jsx)(n.p,{children:"This piece of code contains a function from the following namespace and classes:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/embedding-sdk-docs/native-embedding-architecture/embedding-components",children:(0,i.jsx)(n.code,{children:"microstrategy.embeddingComponent.environments"})})," Namespace"]}),"\n",(0,i.jsxs)(n.p,{children:["This namespace is responsible for creating and destroying ",(0,i.jsx)(n.code,{children:"MstrEnvironment"})," objects."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/embedding-sdk-docs/native-embedding-architecture/mstr-environment",children:(0,i.jsx)(n.code,{children:"MstrEnvironment"})})," Class"]}),"\n",(0,i.jsxs)(n.p,{children:["This class is the object returned from the ",(0,i.jsx)(n.code,{children:"microstrategy.embeddingComponent.environments.create()"})," function, which is responsible for creating and destroying ",(0,i.jsx)(n.code,{children:"MstrDossier"})," objects."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/embedding-sdk-docs/native-embedding-architecture/mstr-dossier",children:(0,i.jsx)(n.code,{children:"MstrDossier"})})," Class"]}),"\n",(0,i.jsxs)(n.p,{children:["This class is returned from the ",(0,i.jsx)(n.code,{children:"MstrEnvironment.loadDossier()"})," function, which is responsible for showing visualizations in containers."]}),"\n"]}),"\n"]})]})}function m(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>d,a:()=>o});var i=t(7294);const s={},r=i.createContext(s);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);