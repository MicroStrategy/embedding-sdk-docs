"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[145],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=d(n),h=r,g=m["".concat(s,".").concat(h)]||m[h]||u[h]||i;return n?a.createElement(g,l(l({ref:t},p),{},{components:n})):a.createElement(g,l({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9915:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return u}});var a=n(3117),r=n(102),i=(n(7294),n(3905)),l=["components"],o={title:"Author an embedded dossier",description:"To allow users to conveniently edit a dossier, Embedding SDK allows embedding a dossier in the authoring mode, whether it is during the initial load or in the view mode of the dossier."},s=void 0,d={unversionedId:"add-functionality/authoring-library",id:"add-functionality/authoring-library",title:"Author an embedded dossier",description:"To allow users to conveniently edit a dossier, Embedding SDK allows embedding a dossier in the authoring mode, whether it is during the initial load or in the view mode of the dossier.",source:"@site/docs/add-functionality/authoring-library.md",sourceDirName:"add-functionality",slug:"/add-functionality/authoring-library",permalink:"/embedding-sdk-docs/add-functionality/authoring-library",draft:!1,editUrl:"https://github.com/MicroStrategy/embedding-sdk-docs/tree/public/docs/add-functionality/authoring-library.md",tags:[],version:"current",lastUpdatedBy:"elinmstr",lastUpdatedAt:1677601456,formattedLastUpdatedAt:"Feb 28, 2023",frontMatter:{title:"Author an embedded dossier",description:"To allow users to conveniently edit a dossier, Embedding SDK allows embedding a dossier in the authoring mode, whether it is during the initial load or in the view mode of the dossier."},sidebar:"tutorialSidebar",previous:{title:"Enable the selection of attribute elements",permalink:"/embedding-sdk-docs/add-functionality/attribute-element-selection"},next:{title:"How to handle dossier link in email notifications when sharing content",permalink:"/embedding-sdk-docs/add-functionality/use-custom-dossier-link"}},p={},u=[{value:"Embedding SDK functionalities",id:"embedding-sdk-functionalities",level:2},{value:"Authoring mode constraints",id:"authoring-mode-constraints",level:2},{value:"The availability of existing Embedding SDK APIs",id:"the-availability-of-existing-embedding-sdk-apis",level:3},{value:"Events",id:"events",level:3},{value:"Initial parameters",id:"initial-parameters",level:3},{value:"Embedding SDK APIs and examples",id:"embedding-sdk-apis-and-examples",level:2},{value:"API for entering authoring mode or disabling authoring mode in the initial loading",id:"api-for-entering-authoring-mode-or-disabling-authoring-mode-in-the-initial-loading",level:3},{value:"Function",id:"function",level:4},{value:"Input parameters",id:"input-parameters",level:4},{value:"Response",id:"response",level:4},{value:"Errors",id:"errors",level:4},{value:"API for switching to authoring mode",id:"api-for-switching-to-authoring-mode",level:3},{value:"Function",id:"function-1",level:4},{value:"Input parameters",id:"input-parameters-1",level:4},{value:"Response",id:"response-1",level:4},{value:"Errors",id:"errors-1",level:4},{value:"Callback for monitoring when the dossier is saved or closed",id:"callback-for-monitoring-when-the-dossier-is-saved-or-closed",level:3},{value:"Event name",id:"event-name",level:4},{value:"Callback format",id:"callback-format",level:4},{value:"API for hiding the edit button",id:"api-for-hiding-the-edit-button",level:3},{value:"Function",id:"function-2",level:4},{value:"Input parameters",id:"input-parameters-2",level:4},{value:"Response",id:"response-2",level:4},{value:"API for controlling the authoring UI",id:"api-for-controlling-the-authoring-ui",level:3},{value:"Function",id:"function-3",level:4},{value:"Input parameters",id:"input-parameters-3",level:4},{value:"Response",id:"response-3",level:4},{value:"Errors",id:"errors-2",level:4},{value:"API for creating a new dossier for authoring",id:"api-for-creating-a-new-dossier-for-authoring",level:3},{value:"Function",id:"function-4",level:4},{value:"Input parameters",id:"input-parameters-4",level:4},{value:"Response",id:"response-4",level:4},{value:"Errors",id:"errors-3",level:4}],m={toc:u};function h(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Embedding MicroStrategy content within critical business applications empowers users to make smarter decisions by taking advantage of the dossier development efforts that occur behind the scenes. To allow users to conveniently edit a dossier, Embedding SDK allows embedding a dossier in the authoring mode, whether it is during the initial load or in the view mode of the dossier."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"To help you get started, we have provided an ",(0,i.kt)("a",{parentName:"p",href:"https://microstrategy.github.io/playground/?example=g16"},"example in the Embedding SDK Playground")," that will embed a dossier in authoring mode along with an edit button that you can use to switch to authoring mode. You need to modify the environment url and dossier url to use your dossier and environment. See the steps to do this in ",(0,i.kt)("a",{parentName:"p",href:"../"},"Introduction to Embedding SDK"),".")),(0,i.kt)("h2",{id:"embedding-sdk-functionalities"},"Embedding SDK functionalities"),(0,i.kt)("p",null,"With the Authoring Library feature, the Embedding SDK could enable the users to the things below:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Call ",(0,i.kt)("inlineCode",{parentName:"p"},"microstrategy.dossier.create")," API with specific initialized parameters to:"),(0,i.kt)("p",{parentName:"li"},"a. Enter the authoring Library page to edit a dossier directly."),(0,i.kt)("p",{parentName:"li"},"b. Hiding the Edit button in the navigation bar of the consumption Library page, to disable the user to edit the dossier.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Call the ",(0,i.kt)("inlineCode",{parentName:"p"},"Dossier.switchToMode")," API to switch from view mode to authoring mode.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Register events to notify the parent application when the dossier is saved or closed."))),(0,i.kt)("h2",{id:"authoring-mode-constraints"},"Authoring mode constraints"),(0,i.kt)("h3",{id:"the-availability-of-existing-embedding-sdk-apis"},"The availability of existing Embedding SDK APIs"),(0,i.kt)("p",null,"In authoring mode, most dossier-related APIs are disabled as they are designed for the consumption dossier instance. The remaining APIs supported in authoring mode are shown below."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Supported API"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"microstrategy.dossier.create"),(0,i.kt)("td",{parentName:"tr",align:null},"Creates or destroys the embedded dossier view.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"microstrategy.dossier.destroy"),(0,i.kt)("td",{parentName:"tr",align:null},"Creates or destroys the embedded dossier view.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Dossier.switchToMode"),(0,i.kt)("td",{parentName:"tr",align:null},"The API added in this feature used in authoring mode.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Dossier.registerEventHandler"),(0,i.kt)("td",{parentName:"tr",align:null},"Adds an event handler.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Dossier.removeEventHandler"),(0,i.kt)("td",{parentName:"tr",align:null},"Removes an event handler.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Dossier.registerFilterUpdateHandler"),(0,i.kt)("td",{parentName:"tr",align:null},"Calls the same dossier functions in Web with Dossier.registerEventHandler so all could be used in authoring mode.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Dossier.registerPageSwitchHandler"),(0,i.kt)("td",{parentName:"tr",align:null},"Calls the same dossier functions in Web with Dossier.registerEventHandler so all could be used in authoring mode.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Dossier.registerDossierInstanceIDChangeHandler"),(0,i.kt)("td",{parentName:"tr",align:null},"Calls the same dossier functions in Web with Dossier.registerEventHandler so all could be used in authoring mode.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Dossier.registerGraphicsSelectEventHandlerToViz"),(0,i.kt)("td",{parentName:"tr",align:null},"Calls the same dossier functions in Web with Dossier.registerEventHandler so all could be used in authoring mode.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Dossier.addCustomErrorHandler"),(0,i.kt)("td",{parentName:"tr",align:null},"Handles the error handlers.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Dossier.removeCustomErrorhandler"),(0,i.kt)("td",{parentName:"tr",align:null},"Handles the error handlers.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Dossier.addSessionErrorHandler"),(0,i.kt)("td",{parentName:"tr",align:null},"Handles the error handlers.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Dossier.removeSessionErrorhandler"),(0,i.kt)("td",{parentName:"tr",align:null},"Handles the error handlers.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Dossier.makeSureSessionAlive"),(0,i.kt)("td",{parentName:"tr",align:null},"Checks the session. If it is expired, you should refresh it.")))),(0,i.kt)("p",null,'The other APIs are disabled in authoring mode. If a disabled API is called in authoring mode, an error is returned with the message, "The API ${funcName} isn\'t supported in the authoring mode!"'),(0,i.kt)("h3",{id:"events"},"Events"),(0,i.kt)("p",null,"To avoid unexpected events, except the newly added events (see the callback event API and example), you cannot receive Embedding SDK events in authoring mode as they are designed for consumption mode."),(0,i.kt)("h3",{id:"initial-parameters"},"Initial parameters"),(0,i.kt)("p",null,"The props parameter contains many fields. See ",(0,i.kt)("a",{parentName:"p",href:"/embedding-sdk-docs/add-functionality/methods-and-properties"},"Methods and properties for an embedded dossier")," for more information."),(0,i.kt)("p",null,"The existing parameters can be roughly divided into three categories and their behaviors can be set with ",(0,i.kt)("inlineCode",{parentName:"p"},"dossierRenderingMode = authoring"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The parameters shared by both modes, for example, ",(0,i.kt)("inlineCode",{parentName:"p"},"URL"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"serverURL"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"applicationID"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"objectID"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"placeholder"),". These parameters only involve the embedding framework and are effective on both modes.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The parameters used for some UI customization in consumption mode, for example, navigationBar.enabled. You can still use these parameters with dossierRenderingMode = authoring, but their effects can only be seen when switching back to consumption mode.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The parameters used for some extra dossier instance manipulation, for example, filter and visualizationAppearances. These parameters are implementations of some embedding SDK APIs (for example, filter-related functions in the dossier class and changeVisualizationSize) for the initial workflow. As these embedding SDK APIs are forbidden in authoring mode, you must also forbid these parameters in the initial parameter in authoring mode to keep the consistent behavior. A complete list of these parameters are shown below."))),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Field Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"instance"),(0,i.kt)("td",{parentName:"tr",align:null},"An existing instance injected to the embedding SDK that is used for pre-handlings, like an answer prompt.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"filters"),(0,i.kt)("td",{parentName:"tr",align:null},"Applies filters to the dossier instance in consumption mode.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"visualizationAppearances"),(0,i.kt)("td",{parentName:"tr",align:null},"Applies visualization appearance manipulations to the dossier instance in consumption mode.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"visualizationSelectedElements"),(0,i.kt)("td",{parentName:"tr",align:null},"Applies visualization element selections to the dossier instance in consumption mode.")))),(0,i.kt)("p",null,"If you have set values for these fields when setting ",(0,i.kt)("inlineCode",{parentName:"p"},"dossierRenderingMode = authoring"),", a dialog appears with the error message:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},'The fields ["instance", "filters", "visualizationAppearances", "visualizationSelectedElements"] are not allowed to be used when "dossierRenderingMode" is "authoring". Please remove these forbidden fields and try again.\n')),(0,i.kt)("h2",{id:"embedding-sdk-apis-and-examples"},"Embedding SDK APIs and examples"),(0,i.kt)("h3",{id:"api-for-entering-authoring-mode-or-disabling-authoring-mode-in-the-initial-loading"},"API for entering authoring mode or disabling authoring mode in the initial loading"),(0,i.kt)("h4",{id:"function"},"Function"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"microstrategy.dossier.create(props)")),(0,i.kt)("h4",{id:"input-parameters"},"Input parameters"),(0,i.kt)("p",null,"An optional ",(0,i.kt)("inlineCode",{parentName:"p"},"props.dossierRenderingMode")," field has been added to the props object in 2021 Update 3. The ",(0,i.kt)("inlineCode",{parentName:"p"},"props")," parameter contains many fields. See ",(0,i.kt)("a",{parentName:"p",href:"/embedding-sdk-docs/add-functionality/methods-and-properties"},"Methods and properties for an embedded dossier")," for more information."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,i.kt)("th",{parentName:"tr",align:null},"Available Values"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Required?"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"props.dossierRenderingMode"),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"consumption"),(0,i.kt)("td",{parentName:"tr",align:null},'["consumption", "authoring"]'),(0,i.kt)("td",{parentName:"tr",align:null},"The value is either ",(0,i.kt)("inlineCode",{parentName:"td"},"consumption")," or ",(0,i.kt)("inlineCode",{parentName:"td"},"authoring"),". ",(0,i.kt)("br",null)," If it is ",(0,i.kt)("inlineCode",{parentName:"td"},"authoring")," and the configuration ",(0,i.kt)("inlineCode",{parentName:"td"},"feature.dossier.authoring")," isn't set, or its value isn't ",(0,i.kt)("inlineCode",{parentName:"td"},"true"),", then an error is returned."),(0,i.kt)("td",{parentName:"tr",align:null},"No")))),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'microstrategy.dossier.create({\n  // ...\n  dossierRenderingMode: "authoring",\n});\n')),(0,i.kt)("h4",{id:"response"},"Response"),(0,i.kt)("p",null,"This API returns a promise ",(0,i.kt)("inlineCode",{parentName:"p"},"dossier")," object in the resolved case, which can be used to call other dossier-owned embedding SDK APIs."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'const placeholderDiv = document.getElementById("dossierContainer");\nlet myDossier;\nmicrostrategy.dossier\n  .create({\n    // ...\n  })\n  .then((dossier) => {\n    myDossier = dossier;\n    // ...\n  });\n')),(0,i.kt)("h4",{id:"errors"},"Errors"),(0,i.kt)("p",null,"When an error occurs, this API returns a promise object that in turn returns an error object in rejected cases."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Error Case"),(0,i.kt)("th",{parentName:"tr",align:null},"Error Category"),(0,i.kt)("th",{parentName:"tr",align:null},"Handling Module"),(0,i.kt)("th",{parentName:"tr",align:null},"Error Handling"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"The dossierRenderingMode parameter has the wrong input type."),(0,i.kt)("td",{parentName:"tr",align:null},"Invalid input"),(0,i.kt)("td",{parentName:"tr",align:null},"Embedded SDK"),(0,i.kt)("td",{parentName:"tr",align:null},"Display an error message and an alert dialog.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"The dossierRenderingMode parameter is neither \u201cconsumption\u201c nor \u201cauthoring\u201c."),(0,i.kt)("td",{parentName:"tr",align:null},"Invalid input"),(0,i.kt)("td",{parentName:"tr",align:null},"Embedded SDK"),(0,i.kt)("td",{parentName:"tr",align:null},"Display an error message and an alert dialog.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"A required parameter is missed or it is not in the correct format."),(0,i.kt)("td",{parentName:"tr",align:null},"Invalid input in the unsupported case"),(0,i.kt)("td",{parentName:"tr",align:null},"Web Dossier"),(0,i.kt)("td",{parentName:"tr",align:null},"Caught by error handler.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"The unsupported fields in the authoring mode include:",(0,i.kt)("ul",null,(0,i.kt)("li",null,"instance"),(0,i.kt)("li",null,"filters"),(0,i.kt)("li",null,"visualizationAppearances"),(0,i.kt)("li",null,"visualizationSelectedElements"))),(0,i.kt)("td",{parentName:"tr",align:null},"Unsupported case"),(0,i.kt)("td",{parentName:"tr",align:null},"Embedded SDK"),(0,i.kt)("td",{parentName:"tr",align:null},"Display an error message and an alert dialog.")))),(0,i.kt)("h3",{id:"api-for-switching-to-authoring-mode"},"API for switching to authoring mode"),(0,i.kt)("p",null,"This API, similar to the ",(0,i.kt)("inlineCode",{parentName:"p"},"Dossier.resizeVisualization")," API, can ignore the restriction of the initial ",(0,i.kt)("inlineCode",{parentName:"p"},"navigationBar.edit")," parameter. This means when ",(0,i.kt)("inlineCode",{parentName:"p"},"navigationBar.edit")," is set to false, you cannot enter authoring mode via manual actions, but are able to via this API."),(0,i.kt)("h4",{id:"function-1"},"Function"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Dossier.switchToMode(mode)")),(0,i.kt)("h4",{id:"input-parameters-1"},"Input parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Available Values"),(0,i.kt)("th",{parentName:"tr",align:null},"Default Value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"mode"),(0,i.kt)("td",{parentName:"tr",align:null},"This is in the array ",'["authoring"]',". ",(0,i.kt)("br",null),' Using API to return to consumption mode is not supported, so the input "consumption" returns an error.'),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},'["authoring"]'),(0,i.kt)("td",{parentName:"tr",align:null},"N/A")))),(0,i.kt)("h4",{id:"response-1"},"Response"),(0,i.kt)("p",null,"This API returns a promise object, similar to the ones shown below."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'myDossier\n  .switchToMode("authoring")\n  .then(() => {\n    // ...\n  })\n  .catch((error) => {\n    // ...\n  });\n')),(0,i.kt)("p",null,"Since additional feedback information is not required, the callback parameters for the resolve case are not necessary."),(0,i.kt)("p",null,"Similar to the behavior of the existing ",(0,i.kt)("inlineCode",{parentName:"p"},"goToPage")," API, the user's callback should be invoked when the editing page completes loading."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Example"),(0,i.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"error"),(0,i.kt)("td",{parentName:"tr",align:null},"Error object"),(0,i.kt)("td",{parentName:"tr",align:null},"new Error(\u201cinvalid operation!\u201c)"),(0,i.kt)("td",{parentName:"tr",align:null},"See Errors for more information.")))),(0,i.kt)("h4",{id:"errors-1"},"Errors"),(0,i.kt)("p",null,"When an error occurs, the API returns a promise object that in turn returns an error object in rejected cases."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Error Case"),(0,i.kt)("th",{parentName:"tr",align:null},"Error Category"),(0,i.kt)("th",{parentName:"tr",align:null},"Handling Module"),(0,i.kt)("th",{parentName:"tr",align:null},"Error Handling"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Dossier authoring isn\u2019t allowed."),(0,i.kt)("td",{parentName:"tr",align:null},"Unsupported case"),(0,i.kt)("td",{parentName:"tr",align:null},"Web Dossier"),(0,i.kt)("td",{parentName:"tr",align:null},"Caught by the catch() of the promise object.")))),(0,i.kt)("h3",{id:"callback-for-monitoring-when-the-dossier-is-saved-or-closed"},"Callback for monitoring when the dossier is saved or closed"),(0,i.kt)("p",null,"When the Save or Close button is clicked in authoring mode, an event is raised that notifies your application."),(0,i.kt)("h4",{id:"event-name"},"Event name"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Trigger"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"onDossierAuthoringSaved"),(0,i.kt)("td",{parentName:"tr",align:null},"When the dossier is saved in authoring mode.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"onDossierAuthoringClosed"),(0,i.kt)("td",{parentName:"tr",align:null},"When the dossier is closed in authoring mode.")))),(0,i.kt)("h4",{id:"callback-format"},"Callback format"),(0,i.kt)("p",null,"The following code example includes ",(0,i.kt)("inlineCode",{parentName:"p"},"registerEventHandler"),", which is an existing API."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"myDossier.registerEventHandler(microstrategy.dossier.EventType.ON_DOSSIER_AUTHORING_SAVED, () => {\n  // The handling logic receiving the save event\n  // ...\n});\n\nmyDossier.registerEventHandler(microstrategy.dossier.EventType.ON_DOSSIER_AUTHORING_CLOSED, () => {\n  // The handling logic receiving the close event\n  // ...\n});\n")),(0,i.kt)("h3",{id:"api-for-hiding-the-edit-button"},"API for hiding the edit button"),(0,i.kt)("h4",{id:"function-2"},"Function"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"microstrategy.dossier.create(props)")),(0,i.kt)("h4",{id:"input-parameters-2"},"Input parameters"),(0,i.kt)("p",null,"An optional ",(0,i.kt)("inlineCode",{parentName:"p"},"props.navigationBar.edit")," field has been added to the ",(0,i.kt)("inlineCode",{parentName:"p"},"props")," object. The ",(0,i.kt)("inlineCode",{parentName:"p"},"props")," parameter contains many fields. See ",(0,i.kt)("a",{parentName:"p",href:"/embedding-sdk-docs/add-functionality/methods-and-properties"},"Methods and properties for an embedded dossier")," for more information."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Required?"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"props.navigationBar.edit"),(0,i.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,i.kt)("td",{parentName:"tr",align:null},"false"),(0,i.kt)("td",{parentName:"tr",align:null},"The visibility of the Edit button on the navigation bar. If it's true, the edit button is the same as the OOTB Library; If it's false or not input, the edit button would be hidden."),(0,i.kt)("td",{parentName:"tr",align:null},"No")))),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"microstrategy.dossier.create({\n  // ...\n  navigationBar: {\n    edit: false,\n  },\n});\n")),(0,i.kt)("p",null,"If you do not enter a value for ",(0,i.kt)("inlineCode",{parentName:"p"},"navigationBar"),", the dossier runs using the old behavior and the navigation bar is hidden."),(0,i.kt)("h4",{id:"response-2"},"Response"),(0,i.kt)("p",null,"This API returns a ",(0,i.kt)("inlineCode",{parentName:"p"},"dossier")," promise object in the resolved case, which can be used to call other dossier-owned embedding SDK APIs."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'const placeholderDiv = document.getElementById("dossierContainer");\nlet myDossier;\nmicrostrategy.dossier\n  .create({\n    // ...\n  })\n  .then((dossier) => {\n    myDossier = dossier;\n    // ...\n  });\n')),(0,i.kt)("h3",{id:"api-for-controlling-the-authoring-ui"},"API for controlling the authoring UI"),(0,i.kt)("h4",{id:"function-3"},"Function"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"microstrategy.dossier.create(props)")),(0,i.kt)("h4",{id:"input-parameters-3"},"Input parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter Names"),(0,i.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Required?"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"props.authoring.menubar.library.visible"),(0,i.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,i.kt)("td",{parentName:"tr",align:null},"true"),(0,i.kt)("td",{parentName:"tr",align:null},"Show or hide corresponding Library home button in the authoring UI."),(0,i.kt)("td",{parentName:"tr",align:null},"No")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"props.authoring.toolbar.tableOfContents.visible ",(0,i.kt)("br",null),"props.authoring.toolbar.undo.visible ",(0,i.kt)("br",null),"props.authoring.toolbar.redo.visible ",(0,i.kt)("br",null),"props.authoring.toolbar.refresh.visible ",(0,i.kt)("br",null),"props.authoring.toolbar.pauseDataRetrieval.visible ",(0,i.kt)("br",null),"props.authoring.toolbar.reprompt.visible ",(0,i.kt)("br",null),"props.authoring.toolbar.dividerLeft.visible ",(0,i.kt)("br",null),"props.authoring.toolbar.addData.visible ",(0,i.kt)("br",null),"props.authoring.toolbar.addChapter.visible ",(0,i.kt)("br",null),"props.authoring.toolbar.addPage.visible ",(0,i.kt)("br",null),"props.authoring.toolbar.insertVisualization.visible ",(0,i.kt)("br",null),"props.authoring.toolbar.insertFilter.visible ",(0,i.kt)("br",null),"props.authoring.toolbar.insertText.visible ",(0,i.kt)("br",null),"props.authoring.toolbar.insertImage.visible ",(0,i.kt)("br",null),"props.authoring.toolbar.insertHtml.visible ",(0,i.kt)("br",null),"props.authoring.toolbar.insertSurvey.visible ",(0,i.kt)("br",null),"props.authoring.toolbar.insertShape.visible ",(0,i.kt)("br",null),"props.authoring.toolbar.insertPanelStack.visible ",(0,i.kt)("br",null),"props.authoring.toolbar.insertInfoWindow.visible ",(0,i.kt)("br",null),"props.authoring.toolbar.save.visible ",(0,i.kt)("br",null),"props.authoring.toolbar.dividerRight.visible ",(0,i.kt)("br",null),"props.authoring.toolbar.more.visible ",(0,i.kt)("br",null),"props.authoring.toolbar.freeformLayout.visible ",(0,i.kt)("br",null),"props.authoring.toolbar.nlp.visible ",(0,i.kt)("br",null),"props.authoring.toolbar.responsiveViewEditor.visible ",(0,i.kt)("br",null),"props.authoring.toolbar.responsivePreview.visible"),(0,i.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,i.kt)("td",{parentName:"tr",align:null},"true"),(0,i.kt)("td",{parentName:"tr",align:null},"Show or hide corresponding buttons on the toolbar in the authoring UI."),(0,i.kt)("td",{parentName:"tr",align:null},"No")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"props.authoring.panelVisibility.contents ",(0,i.kt)("br",null),"props.authoring.panelVisibility.datasets ",(0,i.kt)("br",null),"props.authoring.panelVisibility.editor ",(0,i.kt)("br",null),"props.authoring.panelVisibility.filter ",(0,i.kt)("br",null),"props.authoring.panelVisibility.format ",(0,i.kt)("br",null),"props.authoring.panelVisibility.layers"),(0,i.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,i.kt)("td",{parentName:"tr",align:null},"true"),(0,i.kt)("td",{parentName:"tr",align:null},"Show or hide corresponding authoring panels."),(0,i.kt)("td",{parentName:"tr",align:null},"No")))),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"props")," parameter contains many fields. See ",(0,i.kt)("a",{parentName:"p",href:"/embedding-sdk-docs/add-functionality/methods-and-properties"},"Methods and properties for an embedded dossier")," for more information."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'microstrategy.dossier.create({\n  placeholder: placeholderDiv,\n  url: "https://demo.microstrategy.com/MicroStrategyLibrary/app/EC70648611E7A2F962E90080EFD58751/19A95FA711EC45A93E0B0080AFAB8FDF", // {host}:{port}/{Library}/app/{ProjectID}/{DossierID}\n  authoring: {\n    menubar: { library: { visible: false } },\n    toolbar: { tableOfContents: { visible: false } },\n    panelVisibility: { contents: false },\n  },\n});\n')),(0,i.kt)("h4",{id:"response-3"},"Response"),(0,i.kt)("p",null,"This API returns a ",(0,i.kt)("inlineCode",{parentName:"p"},"dossier")," promise object in the resolved case, which can be used to call other dossier-owned embedding SDK APIs."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'const placeholderDiv = document.getElementById("dossierContainer");\nlet myDossier;\nmicrostrategy.dossier\n  .create({\n    // ...\n  })\n  .then((dossier) => {\n    myDossier = dossier;\n    // ...\n  });\n')),(0,i.kt)("h4",{id:"errors-2"},"Errors"),(0,i.kt)("p",null,"When an error occurs, the API returns a promise object that in turn returns an error object in rejected cases."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Error Case"),(0,i.kt)("th",{parentName:"tr",align:null},"Error Category"),(0,i.kt)("th",{parentName:"tr",align:null},"Handling Module"),(0,i.kt)("th",{parentName:"tr",align:null},"Error Handling"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"The authoring parameter has the wrong input type."),(0,i.kt)("td",{parentName:"tr",align:null},"Invalid input"),(0,i.kt)("td",{parentName:"tr",align:null},"Embedded SDK"),(0,i.kt)("td",{parentName:"tr",align:null},"Display an error message and an alert dialog.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"The authoring.{key} has the wrong input type."),(0,i.kt)("td",{parentName:"tr",align:null},"Invalid input"),(0,i.kt)("td",{parentName:"tr",align:null},"Embedded SDK"),(0,i.kt)("td",{parentName:"tr",align:null},"Display an error message and an alert dialog.")))),(0,i.kt)("h3",{id:"api-for-creating-a-new-dossier-for-authoring"},"API for creating a new dossier for authoring"),(0,i.kt)("h4",{id:"function-4"},"Function"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"microstrategy.dossier.create(props)")),(0,i.kt)("h4",{id:"input-parameters-4"},"Input parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter Names"),(0,i.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Required?"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"props.newDossier"),(0,i.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,i.kt)("td",{parentName:"tr",align:null},"false"),(0,i.kt)("td",{parentName:"tr",align:null},"Use when creating a new dossier from scratch. When set to ",(0,i.kt)("inlineCode",{parentName:"td"},"true"),", a new dossier instance is created from a blank dossier template. In this case, the ",(0,i.kt)("inlineCode",{parentName:"td"},"instance"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"objectID"),", or ",(0,i.kt)("inlineCode",{parentName:"td"},"url")," parameters don't have to and shouldn't be provided."),(0,i.kt)("td",{parentName:"tr",align:null},"No")))),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"props")," parameter contains many fields. See ",(0,i.kt)("a",{parentName:"p",href:"/embedding-sdk-docs/add-functionality/methods-and-properties"},"Methods and properties for an embedded dossier")," for more information."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"microstrategy.dossier.create({\n  placeholder: placeholderDiv,\n  newDossier: true,\n  dossierRenderingMode: true,\n});\n")),(0,i.kt)("h4",{id:"response-4"},"Response"),(0,i.kt)("p",null,"This API returns a ",(0,i.kt)("inlineCode",{parentName:"p"},"dossier")," promise object in the resolved case, which can be used to call other dossier-owned embedding SDK APIs."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'const placeholderDiv = document.getElementById("dossierContainer");\nlet myDossier;\nmicrostrategy.dossier\n  .create({\n    // ...\n  })\n  .then((dossier) => {\n    myDossier = dossier;\n    // ...\n  });\n')),(0,i.kt)("h4",{id:"errors-3"},"Errors"),(0,i.kt)("p",null,"When an error occurs, the API returns a promise object that in turn returns an error object in rejected cases."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Error Case"),(0,i.kt)("th",{parentName:"tr",align:null},"Error Category"),(0,i.kt)("th",{parentName:"tr",align:null},"Handling Module"),(0,i.kt)("th",{parentName:"tr",align:null},"Error Handling"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},'There are inconsistent parameters with \u201cnewDossier".'),(0,i.kt)("td",{parentName:"tr",align:null},"Invalid input"),(0,i.kt)("td",{parentName:"tr",align:null},"Embedded SDK"),(0,i.kt)("td",{parentName:"tr",align:null},"Display an error message and an alert dialog.")))))}h.isMDXComponent=!0}}]);