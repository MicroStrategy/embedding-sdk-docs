"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[213],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return k}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=d(a),k=i,c=m["".concat(s,".").concat(k)]||m[k]||u[k]||r;return a?n.createElement(c,l(l({ref:t},p),{},{components:a})):n.createElement(c,l({ref:t},p))}));function k(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var d=2;d<r;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5331:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return k},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return u}});var n=a(3117),i=a(102),r=(a(7294),a(3905)),l=["components"],o={title:"Embed a single visualization",description:"You can use the Embedding SDK to embed a dossier with a single visualization maximized. This gives the appearance of embedding a single visualization onto a page."},s=void 0,d={unversionedId:"add-functionality/embed-vis",id:"add-functionality/embed-vis",title:"Embed a single visualization",description:"You can use the Embedding SDK to embed a dossier with a single visualization maximized. This gives the appearance of embedding a single visualization onto a page.",source:"@site/docs/add-functionality/embed-vis.md",sourceDirName:"add-functionality",slug:"/add-functionality/embed-vis",permalink:"/embedding-sdk-docs/add-functionality/embed-vis",draft:!1,editUrl:"https://github.com/MicroStrategy/embedding-sdk-docs/tree/public/docs/add-functionality/embed-vis.md",tags:[],version:"current",lastUpdatedBy:"Liang, Jiapei",lastUpdatedAt:1663794107,formattedLastUpdatedAt:"Sep 21, 2022",frontMatter:{title:"Embed a single visualization",description:"You can use the Embedding SDK to embed a dossier with a single visualization maximized. This gives the appearance of embedding a single visualization onto a page."},sidebar:"tutorialSidebar",previous:{title:"Interact with panel stacks",permalink:"/embedding-sdk-docs/add-functionality/panel-stacks"},next:{title:"Enable the selection of attribute elements",permalink:"/embedding-sdk-docs/add-functionality/attribute-element-selection"}},p={},u=[{value:"Embedding workflow",id:"embedding-workflow",level:2},{value:"1. Change the visualization size",id:"1-change-the-visualization-size",level:3},{value:"Function",id:"function",level:4},{value:"Input parameters",id:"input-parameters",level:4},{value:"Response",id:"response",level:4},{value:"2. Embed the dossier with a single visualization maximized",id:"2-embed-the-dossier-with-a-single-visualization-maximized",level:3},{value:"Function",id:"function-1",level:4},{value:"Input parameters",id:"input-parameters-1",level:4},{value:"Response",id:"response-1",level:4},{value:"3. The resize visualization callback",id:"3-the-resize-visualization-callback",level:3},{value:"Event name",id:"event-name",level:4},{value:"Callback format",id:"callback-format",level:4},{value:"API errors",id:"api-errors",level:2}],m={toc:u};function k(e){var t=e.components,o=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,n.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"You can use the Embedding SDK to embed a dossier with a single visualization maximized. This gives the appearance of embedding a single visualization onto a page."),(0,r.kt)("p",null,"This functionality allows you to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Target between a maximized view of a single visualization or a normal view of the entire dossier."),(0,r.kt)("li",{parentName:"ul"},"Add event handling so the parent portal is aware of the maximizing action performed by the user."),(0,r.kt)("li",{parentName:"ul"},"Select a single visualization to appear by default when the dossier opens."),(0,r.kt)("li",{parentName:"ul"},"Hide the maximize button so viewers cannot view the entire dossier."),(0,r.kt)("li",{parentName:"ul"},"Choose any visualization on the dossier to appear by default, even if it's not on the current page.")),(0,r.kt)("p",null,"Check out the video below to see how it's done!"),(0,r.kt)("iframe",{width:"556",height:"311",src:"https://www.youtube.com/embed/S7uYiWo0Zug",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"To help you get started, we have provided an ",(0,r.kt)("a",{parentName:"p",href:"https://microstrategy.github.io/playground/?example=g15"},"example in the Embedding SDK Playground")," that will embed a dossier with a single visualization maximized with options to switch between ",(0,r.kt)("inlineCode",{parentName:"p"},"Max Size")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Normal Size"),".")),(0,r.kt)("h2",{id:"embedding-workflow"},"Embedding workflow"),(0,r.kt)("p",null,"When initializing a dossier page, you must specify which visualization will be maximized and the visibility of its resize button. When the visualization is resized, whether it's by a manual click or the Embedding SDK, the dossier page raises an event to invoke a callback in your application."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"maximize_viz_workflow",src:a(3544).Z,width:"1022",height:"699"})),(0,r.kt)("h3",{id:"1-change-the-visualization-size"},"1. Change the visualization size"),(0,r.kt)("h4",{id:"function"},"Function"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Dossier.changeVisualizationSize(props)")),(0,r.kt)("p",null,"The\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"Dossier"),"\xa0object is created using\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"microstrategy.dossier.create(props)"),". See\xa0",(0,r.kt)("a",{parentName:"p",href:"/embedding-sdk-docs/add-functionality/methods-and-properties"},"Methods and properties for an embedded dossier")," for more information."),(0,r.kt)("h4",{id:"input-parameters"},"Input parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required?"),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"props.visualizationKey")),(0,r.kt)("td",{parentName:"tr",align:null},"The visualization node key entered by you or from the result of ",(0,r.kt)("inlineCode",{parentName:"td"},"getCurrentPageVisualizationList"),"."),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"props.size")),(0,r.kt)("td",{parentName:"tr",align:null},"The visualization sizing of ",(0,r.kt)("inlineCode",{parentName:"td"},"normal")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"maximized"),". If a string is not provided, the visualization size remains the same."),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"props.resizeButtonVisible")),(0,r.kt)("td",{parentName:"tr",align:null},"Determines whether the resize button is visible. If a Boolean is not provided, the visibility remains the same."),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h4",{id:"response"},"Response"),(0,r.kt)("p",null,"This API\xa0returns a promise object, similar to:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'myDossier &&\n  myDossier\n    .changeVisualizationSize({\n      visualizationKey: "K52",\n      size: "maximized",\n      resizeButtonVisible: true,\n    })\n    .then(() => {\n      // ...\n    })\n    .catch((error) => {\n      // ...\n    });\n')),(0,r.kt)("p",null,"Since the target state is specified in the API parameters, the callback parameters for the resolve case are not necessary."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"),(0,r.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"error")),(0,r.kt)("td",{parentName:"tr",align:null},"Error Object"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'new Error("invalid operation!")')),(0,r.kt)("td",{parentName:"tr",align:null},"See\xa0",(0,r.kt)("a",{parentName:"td",href:"#api-errors"},"API\xa0Errors"),"\xa0for more information.")))),(0,r.kt)("h3",{id:"2-embed-the-dossier-with-a-single-visualization-maximized"},"2. Embed the dossier with a single visualization maximized"),(0,r.kt)("h4",{id:"function-1"},"Function"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"microstrategy.dossier.create(props)")),(0,r.kt)("h4",{id:"input-parameters-1"},"Input parameters"),(0,r.kt)("p",null,"The\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"props"),"\xa0parameter contains several fields. See\xa0",(0,r.kt)("a",{parentName:"p",href:"/embedding-sdk-docs/add-functionality/methods-and-properties"},"Methods and properties for an embedded dossier")," for more information about these fields. In the\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"props"),"\xa0object, you must add a new optional field called\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"visualizationAppearances"),". The\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"props"),"\xa0object contains the fields shown below."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required?"),(0,r.kt)("th",{parentName:"tr",align:null},"Default Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"props.visualizationAppearances[i].visualizationKey")),(0,r.kt)("td",{parentName:"tr",align:null},"The visualization node key input by you."),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"props.visualizationAppearances[i].size")),(0,r.kt)("td",{parentName:"tr",align:null},"Set to ",(0,r.kt)("inlineCode",{parentName:"td"},"normal")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"maximized"),"."),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"props.visualizationAppearances[i].resizeButtonVisible")),(0,r.kt)("td",{parentName:"tr",align:null},"Determines whether the resize button is visible. If a Boolean is not provided, the visibility remains the same."),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A")))),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'microstrategy.dossier.create({\n  // ...\n  visualizationAppearances: [\n    {\n      visualizationKey: "K52",\n      size: "maximized",\n      resizeButtonVisible: false,\n    },\n  ],\n});\n')),(0,r.kt)("p",null,"If you don't enter values for\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"visualizationAppearances"),", the dossier runs using the default behavior."),(0,r.kt)("p",null,"Multiple visualizations are not supported. This is because\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"size"),"\xa0is coupled on different visualizations, in which only one visualization can be maximized."),(0,r.kt)("h4",{id:"response-1"},"Response"),(0,r.kt)("p",null,"This API returns a\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"dossier"),"\xa0promise object in the resolved case, which can be used to call other dossier-owned Embedding SDK APIs."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'var placeholderDiv = document.getElementById("dossierContainer");\nvar myDossier;\nmicrostrategy.dossier\n  .create({\n    // ...\n  })\n  .then(function (dossier) {\n    myDossier = dossier;\n    myDossier.goToNextPage();\n    // ...\n  });\n')),(0,r.kt)("h3",{id:"3-the-resize-visualization-callback"},"3. The resize visualization callback"),(0,r.kt)("p",null,"When a user manually clicks the resize button for a visualization, an event is raised that notifies your application."),(0,r.kt)("h4",{id:"event-name"},"Event name"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Dossier.onVisualizationResized")),(0,r.kt)("p",null,"The\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"Dossier"),"\xa0object is created using\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"microstrategy.dossier.create(props)"),". See\xa0",(0,r.kt)("a",{parentName:"p",href:"/embedding-sdk-docs/add-functionality/methods-and-properties"},"Methods and properties for an embedded dossier")," for more information."),(0,r.kt)("h4",{id:"callback-format"},"Callback format"),(0,r.kt)("p",null,"In the example below,\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"registerEventHandler"),"\xa0is an existing API:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'myDossier &&\n  myDossier.registerEventHandler("onVisualizationResized", function (resizedVisualization) {\n    // ... The handling logic after resizing the visualization\n  });\n')),(0,r.kt)("p",null,"in which the\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"resizedVisualization"),"\xa0callback parameter uses the following format:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Sample"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"resizedVisualization")),(0,r.kt)("td",{parentName:"tr",align:null},"The resized visualization information, similar to:",(0,r.kt)("pre",null,"{",(0,r.kt)("br",null),' visualizationKey: "string",',(0,r.kt)("br",null),' size: "maximized" ',(0,r.kt)("br",null),"}",(0,r.kt)("br",null))," ",(0,r.kt)("inlineCode",{parentName:"td"},"size")," is ",(0,r.kt)("inlineCode",{parentName:"td"},"normal")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"maximized"),"."),(0,r.kt)("td",{parentName:"tr",align:null},"Object"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("br",null),(0,r.kt)("pre",null,"{",(0,r.kt)("br",null),' visualizationKey: "K52",',(0,r.kt)("br",null),' size: "maximized"',(0,r.kt)("br",null),"}"))))),(0,r.kt)("h2",{id:"api-errors"},"API errors"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Since you cannot set the callback parameters, it's impossible for these parameters to produce errors. When an error occurs for other reasons, the Embedding SDK returns a promise object that in turn returns an error object in rejected cases. The possible errors are shown below."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Related APIs"),(0,r.kt)("th",{parentName:"tr",align:null},"Error Case"),(0,r.kt)("th",{parentName:"tr",align:null},"Error Handler Callback Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Error Message"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Dossier.changeVisualizationSize(props)")),(0,r.kt)("td",{parentName:"tr",align:null},"The ",(0,r.kt)("inlineCode",{parentName:"td"},"visKey")," is not a valid visualization key or it is not in the current page or panel stack."),(0,r.kt)("td",{parentName:"tr",align:null},"Error Object"),(0,r.kt)("td",{parentName:"tr",align:null},"There isn\u2019t a visualization whose key is \u201c${0}\u201c. Please check whether your input visKey is correct.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"The dossier page is still loading."),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"You couldn\u2019t manipulate a visualization when the page data is not ready. Please wait a few seconds to call this function again.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"The dossier\u2019s manipulation is not finished, so maximize or restore could not be performed. This may occur when the last maximize or restore is in progress."),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"You couldn\u2019t resize a visualization when the dossier is busy for loading data.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Another visualization is already maximized."),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},'Another visualization ${maximizedSiblingKey} is already maximized. Please call dossier.changeVisualizationSize({visualizationKey: "${maximizedSiblingKey}", size: "normal"}) to restore it first.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"visualizationKey")," is missing."),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Invalid input for Dossier.changeVisualizationSize(props): data should have required property 'visualizationKey'")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"size")," is not a valid value."),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},'Invalid input for Dossier.changeVisualizationSize(props): data.size should match pattern "(^(maximized',"|",'normal)$)"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"resizeButtonVisible")," is not a valid value,"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Invalid input for Dossier.changeVisualizationSize(props): data.resizeButtonVisible should be boolean")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"microstrategy.dossier.create(props)")," ",(0,r.kt)("inlineCode",{parentName:"td"},"Dossier.changeVisualizationSize(props)")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"visualizationKey")," is missing"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Error when valid parameter for microstrategy.dossier.create: data.visualizationAppearances","[0]"," should have required property 'visualizationKey'")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"size")," is not a valid value."),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Error when valid parameter for microstrategy.dossier.create: data.visualizationAppearances","[0]",'.size should match pattern "(^(maximized',"|",'normal)$)"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"resizeButtonVisible")," isn\u2019t a valid value."),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Error when valid parameter for microstrategy.dossier.create: data.visualizationAppearances","[0]",".resizeButtonVisible should be boolean")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"The value of ",(0,r.kt)("inlineCode",{parentName:"td"},"visualizationKey")," is not a valid visualization key or it is not in the current page or panel stack ."),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"There isn\u2019t a visualization whose key is '${vizAppearance.visualizationKey}' in the current page. Please check whether your input 'visualizationKey' is correct.")))))}k.isMDXComponent=!0},3544:function(e,t,a){t.Z=a.p+"assets/images/maximize_viz_workflow-6086bcdf39f681005e9906cd75f1dfb4.png"}}]);