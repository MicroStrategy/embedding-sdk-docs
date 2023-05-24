"use strict";(self.webpackChunkembedding_sdk_docs=self.webpackChunkembedding_sdk_docs||[]).push([[5],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=d(n),u=a,k=c["".concat(s,".").concat(u)]||c[u]||m[u]||i;return n?r.createElement(k,l(l({ref:t},p),{},{components:n})):r.createElement(k,l({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2541:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return d},default:function(){return g},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var r,a=n(3117),i=n(102),l=(n(7294),n(3905)),o=["components"],s={title:"MstrEnvironment class",description:"MstrEnvironment class"},d=void 0,p={unversionedId:"native-embedding-architecture/mstr-environment",id:"native-embedding-architecture/mstr-environment",title:"MstrEnvironment class",description:"MstrEnvironment class",source:"@site/docs/native-embedding-architecture/mstr-environment.md",sourceDirName:"native-embedding-architecture",slug:"/native-embedding-architecture/mstr-environment",permalink:"/embedding-sdk-docs/native-embedding-architecture/mstr-environment",draft:!1,editUrl:"https://github.com/MicroStrategy/embedding-sdk-docs/tree/public/docs/native-embedding-architecture/mstr-environment.md",tags:[],version:"current",lastUpdatedBy:"elinmstr",lastUpdatedAt:1684941589,formattedLastUpdatedAt:"May 24, 2023",frontMatter:{title:"MstrEnvironment class",description:"MstrEnvironment class"},sidebar:"tutorialSidebar",previous:{title:"embeddingComponent.environments namespace",permalink:"/embedding-sdk-docs/native-embedding-architecture/embedding-components"},next:{title:"MstrDossier class",permalink:"/embedding-sdk-docs/native-embedding-architecture/mstr-dossier"}},m={},c=[{value:"APIs",id:"apis",level:2},{value:"The load dossier API",id:"the-load-dossier-api",level:3},{value:"Function",id:"function",level:4},{value:"Input Parameters",id:"input-parameters",level:4},{value:"Response",id:"response",level:4},{value:"Example",id:"example",level:4},{value:"API Errors",id:"api-errors",level:4},{value:"The destroy dossier API",id:"the-destroy-dossier-api",level:3},{value:"Function",id:"function-1",level:4},{value:"Input Parameters",id:"input-parameters-1",level:4},{value:"Response",id:"response-1",level:4},{value:"Example",id:"example-1",level:4},{value:"API Errors",id:"api-errors-1",level:4}],u=(r="Available",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",e)}),k={toc:c};function g(e){var t=e.components,n=(0,i.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(u,{since:"2021 Update 9 (May 2023)",mdxType:"Available"}),(0,l.kt)("p",null,"The instance of this class is the object returned from the ",(0,l.kt)("inlineCode",{parentName:"p"},"microstrategy.embeddingComponent.environments.create()")," function, which allows access to the MicroStrategy application. ",(0,l.kt)("inlineCode",{parentName:"p"},"MstrEnvironment")," class represents one MicroStrategy Library Application identified by a URL."),(0,l.kt)("h2",{id:"apis"},"APIs"),(0,l.kt)("h3",{id:"the-load-dossier-api"},"The load dossier API"),(0,l.kt)("h4",{id:"function"},"Function"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"async loadDossier(props)")),(0,l.kt)("h4",{id:"input-parameters"},"Input Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Is Required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"props.projectId"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"The project ID, which must be a GUID."),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"props.objectId"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"The dossier ID, which must be valid. If the ID is a document or report ID, an error is reported."),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"props.instanceId"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"The dossier instance ID, if it already exists."),(0,l.kt)("td",{parentName:"tr",align:null},"false")))),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"projectId")," + ",(0,l.kt)("inlineCode",{parentName:"p"},"objectId")," is used as the dossier identifier. If the function is called twice with the same parameter, the same ",(0,l.kt)("inlineCode",{parentName:"p"},"MstrDossier")," object is returned in the callback."),(0,l.kt)("h4",{id:"response"},"Response"),(0,l.kt)("p",null,"This API returns a promise object that resolves to a ",(0,l.kt)("inlineCode",{parentName:"p"},"MstrDossier")," object."),(0,l.kt)("h4",{id:"example"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'try {\n  const environment = await microstrategy.embeddingComponent.environments.create({\n    serverUrl: "https://demo.microstrategy.com/MicroStrategyLibrary",\n    getAuthToken: () => {\n      // Logic similar to the existing Native Embedding SDK, but only standard auth login is allowed\n    },\n  });\n  // Begin here\n  const dossier = await environment.loadDossier({\n    projectId: "B19DEDCC11D4E0EFC000EB9495D0F44F",\n    objectId: "D9AB379D11EC92C1D9DC0080EFD415BB",\n  });\n} catch (error) {\n  // Your own error handling logic\n}\n')),(0,l.kt)("h4",{id:"api-errors"},"API Errors"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Error Case"),(0,l.kt)("th",{parentName:"tr",align:null},"Error Category"),(0,l.kt)("th",{parentName:"tr",align:null},"Handling Module"),(0,l.kt)("th",{parentName:"tr",align:null},"Error Handling"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"The input parameter fails input validation"),(0,l.kt)("td",{parentName:"tr",align:null},"Invalid input"),(0,l.kt)("td",{parentName:"tr",align:null},"Native Embedding SDK"),(0,l.kt)("td",{parentName:"tr",align:null},"Caught by the ",(0,l.kt)("inlineCode",{parentName:"td"},"catch()")," of the promise object")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Other REST API errors"),(0,l.kt)("td",{parentName:"tr",align:null},"Other"),(0,l.kt)("td",{parentName:"tr",align:null},"Native Embedding SDK"),(0,l.kt)("td",{parentName:"tr",align:null},"Caught by the ",(0,l.kt)("inlineCode",{parentName:"td"},"catch()")," of the promise object")))),(0,l.kt)("h3",{id:"the-destroy-dossier-api"},"The destroy dossier API"),(0,l.kt)("h4",{id:"function-1"},"Function"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"async unloadDossier(dossier)")),(0,l.kt)("h4",{id:"input-parameters-1"},"Input Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Is Required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"dossier"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"MstrDossier")," class"),(0,l.kt)("td",{parentName:"tr",align:null},"The ",(0,l.kt)("inlineCode",{parentName:"td"},"MstrDossier")," object created by the loadDossier function"),(0,l.kt)("td",{parentName:"tr",align:null},"true")))),(0,l.kt)("h4",{id:"response-1"},"Response"),(0,l.kt)("p",null,"This API returns a promise object that resolves to a ",(0,l.kt)("inlineCode",{parentName:"p"},"MstrDossier")," object."),(0,l.kt)("h4",{id:"example-1"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"try {\n  // The logic to generate a MstrDossier object\n  await environment.unloadDossier(dossier);\n} catch (error) {\n  // Your own error handling logic\n}\n")),(0,l.kt)("h4",{id:"api-errors-1"},"API Errors"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Error Case"),(0,l.kt)("th",{parentName:"tr",align:null},"Error Category"),(0,l.kt)("th",{parentName:"tr",align:null},"Handling Module"),(0,l.kt)("th",{parentName:"tr",align:null},"Error Handling"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"The input parameter isn\u2019t a valid dossier object"),(0,l.kt)("td",{parentName:"tr",align:null},"Invalid input"),(0,l.kt)("td",{parentName:"tr",align:null},"Native Embedding SDK"),(0,l.kt)("td",{parentName:"tr",align:null},"Caught by the ",(0,l.kt)("inlineCode",{parentName:"td"},"catch()")," of the promise object")))))}g.isMDXComponent=!0}}]);