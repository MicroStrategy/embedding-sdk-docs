"use strict";(self.webpackChunkembedding_sdk_docs=self.webpackChunkembedding_sdk_docs||[]).push([[178],{3905:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return u}});var i=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=i.createContext({}),l=function(e){var n=i.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=l(e.components);return i.createElement(d.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},p=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,d=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=l(t),u=a,g=p["".concat(d,".").concat(u)]||p[u]||c[u]||r;return t?i.createElement(g,o(o({ref:n},m),{},{components:t})):i.createElement(g,o({ref:n},m))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=p;var s={};for(var d in n)hasOwnProperty.call(n,d)&&(s[d]=n[d]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<r;l++)o[l]=t[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}p.displayName="MDXCreateElement"},6618:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return d},metadata:function(){return m},toc:function(){return p}});var i,a=t(3117),r=t(102),o=(t(7294),t(3905)),s=["components"],d={title:"Embed multiple visualizations on a page",description:"Embed multiple visualizations on a page"},l=void 0,m={unversionedId:"native-embedding-architecture/embed-multiple-viz",id:"native-embedding-architecture/embed-multiple-viz",title:"Embed multiple visualizations on a page",description:"Embed multiple visualizations on a page",source:"@site/docs/native-embedding-architecture/embed-multiple-viz.md",sourceDirName:"native-embedding-architecture",slug:"/native-embedding-architecture/embed-multiple-viz",permalink:"/embedding-sdk-docs/native-embedding-architecture/embed-multiple-viz",draft:!1,editUrl:"https://github.com/MicroStrategy/embedding-sdk-docs/tree/public/docs/native-embedding-architecture/embed-multiple-viz.md",tags:[],version:"current",lastUpdatedBy:"magua-io",lastUpdatedAt:1683298781,formattedLastUpdatedAt:"May 5, 2023",frontMatter:{title:"Embed multiple visualizations on a page",description:"Embed multiple visualizations on a page"},sidebar:"tutorialSidebar",previous:{title:"The Native Embedding SDK",permalink:"/embedding-sdk-docs/native-embedding-architecture/"},next:{title:"Destroy visualizations on a page",permalink:"/embedding-sdk-docs/native-embedding-architecture/destroy-multiple-viz"}},c={},p=[{value:"Purpose",id:"purpose",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Example code",id:"example-code",level:2},{value:"Embed visualizations from one dossier",id:"embed-visualizations-from-one-dossier",level:3},{value:"Display a loading bar during the entire visualization embedding process",id:"display-a-loading-bar-during-the-entire-visualization-embedding-process",level:3},{value:"Embed visualizations from multiple dossiers",id:"embed-visualizations-from-multiple-dossiers",level:3},{value:"More available operations",id:"more-available-operations",level:2},{value:"References",id:"references",level:2}],u=(i="Available",function(e){return console.warn("Component "+i+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)}),g={toc:p};function h(e){var n=e.components,t=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)(u,{since:"2021 Update 9 (May 2023)",mdxType:"Available"}),(0,o.kt)("h2",{id:"purpose"},"Purpose"),(0,o.kt)("p",null,"You can use the Native Embedding SDK to embed multiple visualizations in a client's webpage, with high performance that is similar to loading one out-of-the-box Library dossier page."),(0,o.kt)("p",null,"Custom visualizations are also supported. To embed custom visualizations, you should deploy them on MicroStrategy Library first. To deploy custom visualizations on MicroStrategy Library, refer to ",(0,o.kt)("a",{parentName:"p",href:"https://www2.microstrategy.com/producthelp/Current/VisSDK/Content/topics/HTML5/Deploying_a_custom_visualization.htm"},"Deploy a custom visualization"),"."),(0,o.kt)("h2",{id:"requirements"},"Requirements"),(0,o.kt)("p",null,"You must use the js bundle, ",(0,o.kt)("inlineCode",{parentName:"p"},"native-embedding-sdk.js"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<script\n  type="text/javascript"\n  src="https://demo.microstrategy.com/MicroStrategyLibrary/javascript/native-embedding-sdk.js"\n><\/script>\n')),(0,o.kt)("p",null,"The js bundle is also in the web-dossier war, in the same directory as ",(0,o.kt)("inlineCode",{parentName:"p"},"embeddinglib.js"),"."),(0,o.kt)("h2",{id:"example-code"},"Example code"),(0,o.kt)("h3",{id:"embed-visualizations-from-one-dossier"},"Embed visualizations from one dossier"),(0,o.kt)("p",null,"To embed multiple visualizations from one dossier, after referring ",(0,o.kt)("inlineCode",{parentName:"p"},"native-embedding-sdk.js"),", use the code shown below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'try {\n  const environment = await microstrategy.embeddingComponent.environments.create({\n    serverUrl: "https://demo.microstrategy.com/MicroStrategyLibrary",\n    // The following function is the default implementation. User can provide custom implementation.\n    // Only support standard authentication now.\n    getAuthToken() {\n      return fetch("https://{host}:{port}/{Library}/api/auth/login", {\n        method: "POST",\n        credentials: "include", // including cookie\n        mode: "cors", // setting as CORS mode for cross origin\n        headers: { "Content-Type": "application/json" },\n        body: JSON.stringify({\n          loginMode: 1, // Standard mode\n          username: "input your username",\n          password: "input your password",\n        }),\n      })\n        .then((response) => {\n          if (response && response.ok) {\n            return response.headers.get("X-MSTR-authToken");\n          }\n          throw Error("Failed to fetch auth token.");\n        })\n        .catch((error) => {\n          console.log("Error:", error);\n        });\n    },\n  });\n  const dossier = await environment.loadDossier({\n    projectId: "B19DEDCC11D4E0EFC000EB9495D0F44F",\n    objectId: "D9AB379D11EC92C1D9DC0080EFD415BB",\n  });\n\n  await dossier.refresh([\n    {\n      key: "K66",\n      container: document.getElementById("container1"),\n    },\n    {\n      key: "K52",\n      container: document.getElementById("container2"),\n    },\n  ]);\n  // Your own code after the visualizations are all loaded\n} catch (error) {\n  // Your own error handling code\n}\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"applicationType")," must be unset or equal to ",(0,o.kt)("inlineCode",{parentName:"p"},"35"),". Because the implementation of Native Embedding SDK is based on login as a Library user, which uses the param of ",(0,o.kt)("inlineCode",{parentName:"p"},"applicationType:35"),"."),(0,o.kt)("h3",{id:"display-a-loading-bar-during-the-entire-visualization-embedding-process"},"Display a loading bar during the entire visualization embedding process"),(0,o.kt)("p",null,"During the existing visualization embedding process, the Native Embedding SDK knows which container to use when you call the ",(0,o.kt)("inlineCode",{parentName:"p"},"dossier.refresh")," API, and the loading bar appears at that time.\nIf you want to see the loading bar during the entire embedding process, create an implementation like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<body>\n  <div id="container1"></div>\n</body>\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css"},"#container1 {\n  width: 200px;\n  height: 300px;\n}\n\n#mstrLoadingBarParent {\n  width: 100%;\n  height: 100%;\n  background-color: white;\n  position: relative;\n}\n\n#mstrLoadingBar {\n  width: 100%;\n  height: 100%;\n  background: transparent url(yourLoadingIconUrl) no-repeat center;\n  background-color: white;\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  display: block;\n}\n")),(0,o.kt)("p",null,"You need to set the height and length with the container element.\nWe haven't had a default height and length when we call ",(0,o.kt)("inlineCode",{parentName:"p"},"dossier.refresh")," API to embed a viz. If the container element hasn't had the height and length, you can't see your embed visualization."),(0,o.kt)("p",null,"Find the ",(0,o.kt)("inlineCode",{parentName:"p"},"getAuthToken")," function in ",(0,o.kt)("a",{parentName:"p",href:"/embedding-sdk-docs/native-embedding-architecture/embed-multiple-viz#example-code"},"the Native Embedding SDK doc")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'try {\n  const showLoadingBar = (container) => {\n    // the position of the loading bar parent element should be relative\n    const loadingBarParentDiv = document.createElement("div");\n    loadingBarParentDiv.id = "mstrLoadingBarParent";\n    // create the div\n    const loadingBarDiv = document.createElement("div");\n    loadingBarDiv.id = "mstrLoadingBar";\n    loadingBarParentDiv.appendChild(loadingBarDiv);\n    container.appendChild(loadingBarParentDiv);\n  };\n\n  const hideLoadingBar = (container) => {\n    container.querySelector("#mstrLoadingBar").remove();\n  };\n\n  const container1 = document.getElementById("container1");\n\n  showLoadingBar(container1);\n\n  const environment = await microstrategy.embeddingComponent.environments.create({\n    serverUrl: "https://demo.microstrategy.com/MicroStrategyLibrary",\n    getAuthToken: () => {\n      // Logic similar to the existing Native Embedding SDK, but only standard auth login is allowed\n    },\n  });\n  const dossier = await environment.loadDossier({\n    projectId: "B19DEDCC11D4E0EFC000EB9495D0F44F",\n    objectId: "D9AB379D11EC92C1D9DC0080EFD415BB",\n  });\n\n  hideLoadingBar(container1);\n\n  await dossier.refresh([\n    {\n      key: "K66",\n      container: container1,\n    },\n  ]);\n  // Your own code after the visualizations are all loaded\n} catch (error) {\n  // Your own error handling code\n}\n')),(0,o.kt)("h3",{id:"embed-visualizations-from-multiple-dossiers"},"Embed visualizations from multiple dossiers"),(0,o.kt)("p",null,"If you want to embed visualizations from multiple dossiers, you must turn on this functionality by setting the feature flag as shown below before calling the APIs:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"window.microstrategy.nativeEmbedding.featureFlags.multipleDossiers = true;\n")),(0,o.kt)("p",null,"Then you can embed the visualizations from multiple dossiers in parallel like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'async function loadVisualizationsFromDossier({\n  mstrEnvironment,\n  projectId,\n  dossierId,\n  vizAndContainers,\n}) {\n  const mstrDossier = await mstrEnvironment.loadDossier({\n    projectId,\n    objectId: dossierId,\n  });\n  // The function here would keep the old behavior, to load the visualizations page by page\n  await mstrDossier.refresh(vizAndContainers);\n}\n\nasync function loadVisualizationsFromDossiers() {\n  try {\n    // The preparation code starts here\n    const mstrEnvironment = await microstrategy.embeddingComponent.environments.create({\n      serverUrl: "https://demo.microstrategy.com/MicroStrategyLibrary",\n      getAuthToken: () => {\n        // Logic similar to the existing Embedding SDK, but only standard auth login is allowed\n      },\n    });\n    const projectId = "B19DEDCC11D4E0EFC000EB9495D0F44F";\n    const dossierAndVisualizations = [\n      {\n        dossierId: "DCB5909744F164E1D190B3B0137EEC5F",\n        vizAndContainers: [\n          {\n            key: "W70",\n            container: document.getElementById("containerA"),\n          },\n          {\n            key: "W112",\n            container: document.getElementById("containerB"),\n          },\n        ],\n      },\n      {\n        dossierId: "EDBA3FAE4F6A21187BD2CD92AE954802",\n        vizAndContainers: [\n          {\n            key: "W115",\n            container: document.getElementById("containerC"),\n          },\n          {\n            key: "W116",\n            container: document.getElementById("containerD"),\n          },\n        ],\n      },\n    ];\n    // Non-blocking concurrent loadings for visualizations from different dossiers\n    await Promise.all(\n      dossierAndVisualizations.map((dossierAndVisualization) =>\n        loadVisualizationsFromDossier({\n          mstrEnvironment,\n          projectId,\n          dossierId: dossierAndVisualization.dossierId,\n          vizAndContainers: dossierAndVisualization.vizAndContainers,\n        })\n      )\n    );\n  } catch (err) {\n    // Your custom error handling logic here\n  }\n}\n')),(0,o.kt)("h2",{id:"more-available-operations"},"More available operations"),(0,o.kt)("p",null,"After you embed multiple visualizations on a page, you can do some deeper manipulation of them."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/embedding-sdk-docs/native-embedding-architecture/vis-manipulation"},"Visualization manipulation on graphics")),(0,o.kt)("p",{parentName:"li"},"This introductory shows what kinds of manipulation can we do and some behavior in the Native Embedding SDK.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/embedding-sdk-docs/native-embedding-architecture/event-handling"},"Add event handling")),(0,o.kt)("p",{parentName:"li"},"You can listen to these events and handle the events in the handler functions.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/embedding-sdk-docs/native-embedding-architecture/apply-filter"},"Retrieve and apply filters")),(0,o.kt)("p",{parentName:"li"},"You can manipulate the chapter-level filters, on-page selectors, and visualizations used as filters via the Native Embedding SDK available since 2021 Update 9.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/embedding-sdk-docs/native-embedding-architecture/dossier-info-api"},"Getting dossier info via APIs")),(0,o.kt)("p",{parentName:"li"},"You can use the Native Embedding SDK to get the definition or data from the dossier."))),(0,o.kt)("h2",{id:"references"},"References"),(0,o.kt)("p",null,"This piece of code contains a function from the following namespace and classes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/embedding-sdk-docs/native-embedding-architecture/embedding-components"},(0,o.kt)("inlineCode",{parentName:"a"},"microstrategy.embeddingComponent.environments"))," Namespace"),(0,o.kt)("p",{parentName:"li"},"This namespace is responsible for creating and destroying ",(0,o.kt)("inlineCode",{parentName:"p"},"MstrEnvironment")," objects.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/embedding-sdk-docs/native-embedding-architecture/mstr-environment"},(0,o.kt)("inlineCode",{parentName:"a"},"MstrEnvironment"))," Class"),(0,o.kt)("p",{parentName:"li"},"This class is the object returned from the ",(0,o.kt)("inlineCode",{parentName:"p"},"microstrategy.embeddingComponent.environments.create()")," function, which is responsible for creating and destroying ",(0,o.kt)("inlineCode",{parentName:"p"},"MstrDossier")," objects.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/embedding-sdk-docs/native-embedding-architecture/mstr-dossier"},(0,o.kt)("inlineCode",{parentName:"a"},"MstrDossier"))," Class"),(0,o.kt)("p",{parentName:"li"},"This class is returned from the ",(0,o.kt)("inlineCode",{parentName:"p"},"MstrEnvironment.loadDossier()")," function, which is responsible for showing visualizations in containers."))))}h.isMDXComponent=!0}}]);