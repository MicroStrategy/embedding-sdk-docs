"use strict";(self.webpackChunkembedding_sdk_docs=self.webpackChunkembedding_sdk_docs||[]).push([[7770],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return c}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),d=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=d(n),c=a,f=m["".concat(o,".").concat(c)]||m[c]||u[c]||i;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var d=2;d<i;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2335:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return m}});var r,a=n(3117),i=n(102),l=(n(7294),n(3905)),s=["components"],o={title:"Retrieve and apply filters",description:"Filters can be applied both during the execution of an embedded dossier and after it has been rendered."},d=void 0,p={unversionedId:"native-embedding-architecture/apply-filter",id:"native-embedding-architecture/apply-filter",title:"Retrieve and apply filters",description:"Filters can be applied both during the execution of an embedded dossier and after it has been rendered.",source:"@site/docs/native-embedding-architecture/apply-filter.md",sourceDirName:"native-embedding-architecture",slug:"/native-embedding-architecture/apply-filter",permalink:"/embedding-sdk-docs/native-embedding-architecture/apply-filter",draft:!1,editUrl:"https://github.com/MicroStrategy/embedding-sdk-docs/tree/public/docs/native-embedding-architecture/apply-filter.md",tags:[],version:"current",lastUpdatedBy:"Darren Holmblad",lastUpdatedAt:1702664682,formattedLastUpdatedAt:"Dec 15, 2023",frontMatter:{title:"Retrieve and apply filters",description:"Filters can be applied both during the execution of an embedded dossier and after it has been rendered."},sidebar:"tutorialSidebar",previous:{title:"Getting dossier info via APIs",permalink:"/embedding-sdk-docs/native-embedding-architecture/dossier-info-api"},next:{title:"Add event handling",permalink:"/embedding-sdk-docs/native-embedding-architecture/event-handling"}},u={},m=[{value:"Get available filter elements",id:"get-available-filter-elements",level:2},{value:"<code>MstrDossier.getFilterAvailableElements</code> examples",id:"mstrdossiergetfilteravailableelements-examples",level:3},{value:"Apply filters after embedded visualizations are rendered",id:"apply-filters-after-embedded-visualizations-are-rendered",level:2},{value:"Filter types and filter details",id:"filter-types-and-filter-details",level:3},{value:"Chapter-level filters",id:"chapter-level-filters",level:4},{value:"On-Page selectors",id:"on-page-selectors",level:4},{value:"Visualizations used as filters",id:"visualizations-used-as-filters",level:4},{value:"<code>MstrDossier.applyFilter</code> examples",id:"mstrdossierapplyfilter-examples",level:3},{value:"Chapter-Level filters",id:"chapter-level-filters-1",level:4},{value:"On-Page selectors",id:"on-page-selectors-1",level:4},{value:"Visualizations used as filters",id:"visualizations-used-as-filters-1",level:4}],c=(r="Available",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",e)}),f={toc:m};function h(e){var t=e.components,n=(0,i.Z)(e,s);return(0,l.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(c,{since:"2021 Update 9 (May 2023)",mdxType:"Available"}),(0,l.kt)("p",null,"Filters can be applied both during the execution of an embedded dossier and after it has been rendered. After using ",(0,l.kt)("a",{parentName:"p",href:"/embedding-sdk-docs/native-embedding-architecture/embed-multiple-viz"},"Native Embedding SDK")," to embed multiple visualizations in a client's webpage, you can manipulate the chapter-level filters, on-page selectors, and visualizations used as filters via the Native Embedding SDK available since 2021 Update 9. For chapter-level filters and on-page selectors, MicroStrategy only supports attribute element list selectors."),(0,l.kt)("p",null,"Let's say you already have the ",(0,l.kt)("inlineCode",{parentName:"p"},"MstrEnvironment")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"MstrDossier")," objects:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'try {\n  const mstrEnvironment = await microstrategy.embeddingComponent.environments.create({\n    serverUrl: "https://demo.microstrategy.com/MicroStrategyLibrary",\n    getAuthToken: () => {\n      // Logic similar to the existing Native Embedding SDK, but only standard auth login is allowed\n    },\n  });\n  const mstrDossier = await mstrEnvironment.loadDossier({\n    projectId: "B19DEDCC11D4E0EFC000EB9495D0F44F",\n    objectId: "D9AB379D11EC92C1D9DC0080EFD415BB",\n  });\n  await mstrDossier.refresh([\n    {\n      key: "K66",\n      container: document.getElementById("container1"),\n    },\n  ]);\n  // Your custom logic\n} catch (error) {\n  // Your own error handling code\n}\n')),(0,l.kt)("h2",{id:"get-available-filter-elements"},"Get available filter elements"),(0,l.kt)("p",null,"To apply filters to the dossier, the client may need to get the list of available attribute elements of the filters or selectors. You can use the ",(0,l.kt)("inlineCode",{parentName:"p"},"MstrDossier.getFilterAvailableElements()")," function in the Native Embedding SDK to retrieve the available attribute elements of the filters or selectors."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"th"},"getFilterAvailableElements()")),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Class"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"MstrDossier"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Return Type"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Promise<AttributeElement[]>"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Description"),(0,l.kt)("td",{parentName:"tr",align:null},"Get the attribute element list of the filter or selector")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Example"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"mstrDossier.getFilterAvailableElements()"))))),(0,l.kt)("h3",{id:"mstrdossiergetfilteravailableelements-examples"},(0,l.kt)("inlineCode",{parentName:"h3"},"MstrDossier.getFilterAvailableElements")," examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'try {\n  await mstrDossier.getFilterAvailableElements({\n    filterKey: "W67", // filter key\n    searchPattern: "o", // pattern to match with the element list, optional\n    offset: 0, // optional\n    limit: 100, // optional\n  });\n} catch (error) {\n  // Your own error handling code\n}\n')),(0,l.kt)("p",null,"Example of the attribute element list in the resolved value:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "name": "Books",\n    "id": "h1;;Books"\n  },\n  {\n    "name": "Electronics",\n    "id": "h2;;Electronics"\n  }\n]\n')),(0,l.kt)("h2",{id:"apply-filters-after-embedded-visualizations-are-rendered"},"Apply filters after embedded visualizations are rendered"),(0,l.kt)("p",null,"After embedded visualizations have been rendered, you can use the\xa0",(0,l.kt)("inlineCode",{parentName:"p"},"MstrDossier.getDossierDefinition()"),"\xa0function in the Native Embedding SDK\xa0to retrieve information about filters, selectors, and visualizations used as filters in the dossier. After you have the key of the filter, selector, or visualization used as a filter, you can use the ",(0,l.kt)("inlineCode",{parentName:"p"},"MstrDossier.applyFilter()")," function to manipulate it."),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"For filters and selectors, we currently only support manipulating the selector type of the attribute element list.")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"th"},"applyFilter()")),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Class"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"MstrDossier"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"FilterSelectionDefinition"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Return Type"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Promise<void>"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Description"),(0,l.kt)("td",{parentName:"tr",align:null},"Apply filters with the selection in the input")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Example"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"mstrDossier.applyFilter()"))))),(0,l.kt)("h3",{id:"filter-types-and-filter-details"},"Filter types and filter details"),(0,l.kt)("p",null,"The sections below show the filter details for each filter type."),(0,l.kt)("h4",{id:"chapter-level-filters"},"Chapter-level filters"),(0,l.kt)("p",null,"For the chapter-level filter with an ",(0,l.kt)("inlineCode",{parentName:"p"},"attribute_element_list")," type, you can get its key and source attribute definition from the dossier definition with the ",(0,l.kt)("inlineCode",{parentName:"p"},"MstrDossier.getDossierDefinition()")," function. Then you can manipulate the filter with the ",(0,l.kt)("inlineCode",{parentName:"p"},"MstrDossier.applyFilter()")," function as follows. After the function successfully returns, all embedded visualizations on the same chapter as the filter are refreshed to reflect the latest data."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"try {\n  await mstrDossier.applyFilter({\n    key: `${filterKey}`,\n    currentSelection: {\n      selectionStatus: \"<string>\", // optional, values: ['unfiltered', 'included', 'excluded'], default: 'included'\n      allSelected: \"<boolean>\", // optional, default: false,\n      elements: [\n        {\n          id: \"<string>\", // attribute element id, required\n          name: \"<string>\", // attribute element name, optional\n        },\n      ],\n    },\n  });\n} catch (error) {\n  // Your own error handling code\n}\n")),(0,l.kt)("h4",{id:"on-page-selectors"},"On-Page selectors"),(0,l.kt)("p",null,"For on-page selectors with an ",(0,l.kt)("inlineCode",{parentName:"p"},"attribute_element_list")," type, you can get its key from the dossier definition and source attribute definition with the ",(0,l.kt)("inlineCode",{parentName:"p"},"MstrDossier.getDossierDefinition()")," function. Then you can manipulate the filter with the ",(0,l.kt)("inlineCode",{parentName:"p"},"MstrDossier.applyFilter()")," function as follows. After the function successfully returns, all embedded visualizations that are the targets of the selector are refreshed to reflect the latest data."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"try {\n  await mstrDossier.applyFilter({\n    key: `${selectorKey}`,\n    currentSelection: {\n      selectionStatus: \"<string>\", // optional, values: ['unfiltered', 'included', 'excluded'], default: 'included'\n      allSelected: \"<boolean>\", // optional, default: false,\n      elements: [\n        {\n          id: \"<string>\", // attribute element id, required\n          name: \"<string>\", // attribute element name, optional\n        },\n      ],\n    },\n  });\n} catch (error) {\n  // Your own error handling code\n}\n")),(0,l.kt)("h4",{id:"visualizations-used-as-filters"},"Visualizations used as filters"),(0,l.kt)("p",null,"For a visualization used as a filter, you need its key from the dossier definition with the ",(0,l.kt)("inlineCode",{parentName:"p"},"MstrDossier.getDossierDefinition()")," function. Then you can manipulate the visualization used as a filter with ",(0,l.kt)("inlineCode",{parentName:"p"},"MstrDossier.applyFilter()")," function as follows. After the function successfully returns, the elements of the visualization used as a filter are highlighted accordingly, and all embedded visualizations that are the targets of the visualization as the filter are refreshed to reflect the latest data."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"attribute element selection"),(0,l.kt)("p",{parentName:"li"},"To select multiple attribute elements in the visualizations used as filters, you can use ",(0,l.kt)("inlineCode",{parentName:"p"},"MstrDossier.applyFilter()")," with the following input:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-js"},'try {\n  await mstrDossier.applyFilter({\n    key: `${visualizationKey}`,\n    currentSelection: {\n      selectionStatus: "included", // optional\n      type: "attribute_element_list", // required\n      selections: [\n        {\n          attribute: {\n            id: "<string>", // attribute id, required\n            name: "<string>", // attribute name, optional\n          },\n          elements: [\n            {\n              id: "<string>", // attribute element id, required\n              name: "<string>", // attribute element name, optional\n            },\n          ],\n        },\n      ],\n    },\n  });\n} catch (error) {\n  // Your own error handling code\n}\n'))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"metric element selection"),(0,l.kt)("p",{parentName:"li"},"To select multiple metric elements in the visualizations used as filters, you need to provide the full list of attributes in the visualization and every metric element selection should be the combination of attribute elements from every attribute. You can use ",(0,l.kt)("inlineCode",{parentName:"p"},"MstrDossier.applyFilter()")," with the following input:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-js"},'try {\n  await mstrDossier.applyFilter({\n    key: `${visualizationKey}`,\n    currentSelection: {\n      selectionStatus: "included", // optional\n      type: "metric_element_list", // required\n      attributes: [\n        // should be the same list as all attributes in the visualization\n        {\n          id: "<string>", // attribute id, required\n          name: "<string>", // attribute name, optional\n        },\n      ],\n      selections: [\n        [\n          // one metric element selection\n          {\n            id: "<string>", // attribute element id, required\n            name: "<string>", // attribute element name, optional\n          },\n        ],\n      ],\n    },\n  });\n} catch (error) {\n  // Your own error handling code\n}\n')))),(0,l.kt)("h3",{id:"mstrdossierapplyfilter-examples"},(0,l.kt)("inlineCode",{parentName:"h3"},"MstrDossier.applyFilter")," examples"),(0,l.kt)("p",null,"Here are some examples for the filter object in the\xa0",(0,l.kt)("inlineCode",{parentName:"p"},"MstrDossier.applyFilter()")," function parameter:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#chapter-level-filters"},"Chapter-Level filters")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#on-page-selectors"},"On-Page selectors")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#visualizations-used-as-filters"},"Visualizations used as filters"))),(0,l.kt)("h4",{id:"chapter-level-filters-1"},"Chapter-Level filters"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Select the element list of the filter"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-js"},'try {\n  await mstrDossier.applyFilter({\n    key: "W87",\n    currentSelection: {\n      elements: [\n        {\n          id: "<string>",\n          name: "<string>",\n        },\n      ],\n    },\n  });\n} catch (error) {\n  // Your own error handling code\n}\n'))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Select all elements of the filter"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-js"},'try {\n  await mstrDossier.applyFilter({\n    key: "W87",\n    currentSelection: {\n      allSelected: true,\n    },\n  });\n} catch (error) {\n  // Your own error handling code\n}\n'))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Unset the filter selection."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-js"},'try {\n  await mstrDossier.applyFilter({\n    key: "W87",\n    currentSelection: {\n      selectionStatus: "unfiltered",\n    },\n  });\n} catch (error) {\n  // Your own error handling code\n}\n')))),(0,l.kt)("h4",{id:"on-page-selectors-1"},"On-Page selectors"),(0,l.kt)("p",null,"To apply selections to on-page selectors, use the same input as chapter-level filters."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Select the element list of the selector"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-js"},'try {\n  await mstrDossier.applyFilter({\n    key: "W76",\n    currentSelection: {\n      elements: [\n        {\n          id: "<string>",\n          name: "<string>",\n        },\n      ],\n    },\n  });\n} catch (error) {\n  // Your own error handling code\n}\n'))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Select all elements of the selector"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-js"},'try {\n  await mstrDossier.applyFilter({\n    key: "W76",\n    currentSelection: {\n      allSelected: true,\n    },\n  });\n} catch (error) {\n  // Your own error handling code\n}\n'))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Unset the selection of the selector"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-js"},'try {\n  await mstrDossier.applyFilter({\n    key: "W76",\n    currentSelection: {\n      selectionStatus: "unfiltered",\n    },\n  });\n} catch (error) {\n  // Your own error handling code\n}\n')))),(0,l.kt)("h4",{id:"visualizations-used-as-filters-1"},"Visualizations used as filters"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Select attribute elements of the visualization")),(0,l.kt)("p",null,"Select the ",(0,l.kt)("inlineCode",{parentName:"p"},"June, April")," elements of the ",(0,l.kt)("inlineCode",{parentName:"p"},"Month of Year")," attribute and the ",(0,l.kt)("inlineCode",{parentName:"p"},"2014")," element of the ",(0,l.kt)("inlineCode",{parentName:"p"},"Year")," attribute."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'try {\n  await mstrDossier.applyFilter({\n    key: "K52",\n    currentSelection: {\n      selectionStatus: "included",\n      type: "attribute_element_list",\n      selections: [\n        {\n          attribute: {\n            id: "8D679D4511D3E4981000E787EC6DE8A4",\n            name: "Month of Year",\n          },\n          elements: [\n            {\n              id: "h6;8D679D4511D3E4981000E787EC6DE8A4",\n              name: "June",\n            },\n            {\n              id: "h4;8D679D4511D3E4981000E787EC6DE8A4",\n              name: "April",\n            },\n          ],\n        },\n        {\n          attribute: {\n            id: "8D679D5111D3E4981000E787EC6DE8A4",\n            name: "Year",\n          },\n          elements: [\n            {\n              id: "h2014;8D679D5111D3E4981000E787EC6DE8A4",\n              name: "2014",\n            },\n          ],\n        },\n      ],\n    },\n  });\n} catch (error) {\n  // Your own error handling code\n}\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Select metric elements of the visualization"),(0,l.kt)("p",{parentName:"li"},"Select metric elements identified by the ",(0,l.kt)("inlineCode",{parentName:"p"},"June,2014")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"September,2014")," attribute elements."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-js"},'try {\n  await mstrDossier.applyFilter({\n    key: "K52",\n    currentSelection: {\n      selectionStatus: "included",\n      type: "metric_element_list",\n      attributes: [\n        {\n          id: "8D679D4511D3E4981000E787EC6DE8A4",\n          name: "Month of Year",\n        },\n        {\n          id: "8D679D5111D3E4981000E787EC6DE8A4",\n          name: "Year",\n        },\n      ],\n      selections: [\n        [\n          {\n            id: "h6;8D679D4511D3E4981000E787EC6DE8A4",\n            name: "June",\n          },\n          {\n            id: "h2014;8D679D5111D3E4981000E787EC6DE8A4",\n            name: "2014",\n          },\n        ],\n        [\n          {\n            id: "h9;8D679D4511D3E4981000E787EC6DE8A4",\n            name: "September",\n          },\n          {\n            id: "h2014;8D679D5111D3E4981000E787EC6DE8A4",\n            name: "2014",\n          },\n        ],\n      ],\n    },\n  });\n} catch (error) {\n  // Your own error handling code\n}\n'))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Clear the element selections of the visualization"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-js"},'try {\n  await mstrDossier.applyFilter({\n    key: "K52",\n    currentSelection: {\n      selectionStatus: "unfiltered",\n    },\n  });\n} catch (error) {\n  // Your own error handling code\n}\n')))))}h.isMDXComponent=!0}}]);