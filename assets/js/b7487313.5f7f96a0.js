"use strict";(self.webpackChunkembedding_sdk_docs=self.webpackChunkembedding_sdk_docs||[]).push([[3145],{7292:(e,r,i)=>{i.r(r),i.d(r,{assets:()=>a,contentTitle:()=>d,default:()=>c,frontMatter:()=>t,metadata:()=>o,toc:()=>l});var n=i(5893),s=i(1151);const t={title:"Author an embedded dossier",description:"To allow users to conveniently edit a dossier, Embedding SDK allows embedding a dossier in the authoring mode, whether it is during the initial load or in the view mode of the dossier."},d=void 0,o={id:"add-functionality/authoring-library",title:"Author an embedded dossier",description:"To allow users to conveniently edit a dossier, Embedding SDK allows embedding a dossier in the authoring mode, whether it is during the initial load or in the view mode of the dossier.",source:"@site/docs/add-functionality/authoring-library.md",sourceDirName:"add-functionality",slug:"/add-functionality/authoring-library",permalink:"/embedding-sdk-docs/add-functionality/authoring-library",draft:!1,unlisted:!1,editUrl:"https://github.com/MicroStrategy/embedding-sdk-docs/tree/public/docs/add-functionality/authoring-library.md",tags:[],version:"current",lastUpdatedBy:"Aran0011",lastUpdatedAt:1705978927,formattedLastUpdatedAt:"Jan 23, 2024",frontMatter:{title:"Author an embedded dossier",description:"To allow users to conveniently edit a dossier, Embedding SDK allows embedding a dossier in the authoring mode, whether it is during the initial load or in the view mode of the dossier."},sidebar:"tutorialSidebar",previous:{title:"Enable the selection of attribute elements",permalink:"/embedding-sdk-docs/add-functionality/attribute-element-selection"},next:{title:"How to handle dossier link in email notifications when sharing content",permalink:"/embedding-sdk-docs/add-functionality/use-custom-dossier-link"}},a={},l=[{value:"Embedding SDK functionalities",id:"embedding-sdk-functionalities",level:2},{value:"Authoring mode constraints",id:"authoring-mode-constraints",level:2},{value:"The availability of existing Embedding SDK APIs",id:"the-availability-of-existing-embedding-sdk-apis",level:3},{value:"Events",id:"events",level:3},{value:"Initial parameters",id:"initial-parameters",level:3},{value:"Embedding SDK APIs and examples",id:"embedding-sdk-apis-and-examples",level:2},{value:"API for entering authoring mode or disabling authoring mode in the initial loading",id:"api-for-entering-authoring-mode-or-disabling-authoring-mode-in-the-initial-loading",level:3},{value:"Function",id:"function",level:4},{value:"Input parameters",id:"input-parameters",level:4},{value:"Response",id:"response",level:4},{value:"Errors",id:"errors",level:4},{value:"API for switching to authoring mode",id:"api-for-switching-to-authoring-mode",level:3},{value:"Function",id:"function-1",level:4},{value:"Input parameters",id:"input-parameters-1",level:4},{value:"Response",id:"response-1",level:4},{value:"Errors",id:"errors-1",level:4},{value:"Callback for monitoring when the dossier is saved or closed",id:"callback-for-monitoring-when-the-dossier-is-saved-or-closed",level:3},{value:"Event name",id:"event-name",level:4},{value:"Callback format",id:"callback-format",level:4},{value:"API for hiding the edit button",id:"api-for-hiding-the-edit-button",level:3},{value:"Function",id:"function-2",level:4},{value:"Input parameters",id:"input-parameters-2",level:4},{value:"Response",id:"response-2",level:4},{value:"API for controlling the authoring UI",id:"api-for-controlling-the-authoring-ui",level:3},{value:"Function",id:"function-3",level:4},{value:"Input parameters",id:"input-parameters-3",level:4},{value:"Response",id:"response-3",level:4},{value:"Errors",id:"errors-2",level:4},{value:"API for creating a new dossier for authoring",id:"api-for-creating-a-new-dossier-for-authoring",level:3},{value:"Function",id:"function-4",level:4},{value:"Input parameters",id:"input-parameters-4",level:4},{value:"Response",id:"response-4",level:4},{value:"Errors",id:"errors-3",level:4}];function h(e){const r={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"Embedding MicroStrategy content within critical business applications empowers users to make smarter decisions by taking advantage of the dossier development efforts that occur behind the scenes. To allow users to conveniently edit a dossier, Embedding SDK allows embedding a dossier in the authoring mode, whether it is during the initial load or in the view mode of the dossier."}),"\n",(0,n.jsx)(r.admonition,{type:"tip",children:(0,n.jsxs)(r.p,{children:["To help you get started, we have provided an ",(0,n.jsx)(r.a,{href:"https://microstrategy.github.io/playground/?example=g16",children:"example in the Embedding SDK Playground"})," that will embed a dossier in authoring mode along with an edit button that you can use to switch to authoring mode. You need to modify the environment url and dossier url to use your dossier and environment. See the steps to do this in ",(0,n.jsx)(r.a,{href:"../",children:"Introduction to Embedding SDK"}),"."]})}),"\n",(0,n.jsx)(r.h2,{id:"embedding-sdk-functionalities",children:"Embedding SDK functionalities"}),"\n",(0,n.jsx)(r.p,{children:"With the Authoring Library feature, the Embedding SDK could enable the users to the things below:"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsxs)(r.p,{children:["Call ",(0,n.jsx)(r.code,{children:"microstrategy.dossier.create"})," API with specific initialized parameters to:"]}),"\n",(0,n.jsx)(r.p,{children:"a. Enter the authoring Library page to edit a dossier directly."}),"\n",(0,n.jsx)(r.p,{children:"b. Hiding the Edit button in the navigation bar of the consumption Library page, to disable the user to edit the dossier."}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsxs)(r.p,{children:["Call the ",(0,n.jsx)(r.code,{children:"Dossier.switchToMode"})," API to switch from view mode to authoring mode."]}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsx)(r.p,{children:"Register events to notify the parent application when the dossier is saved or closed."}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"authoring-mode-constraints",children:"Authoring mode constraints"}),"\n",(0,n.jsx)(r.h3,{id:"the-availability-of-existing-embedding-sdk-apis",children:"The availability of existing Embedding SDK APIs"}),"\n",(0,n.jsx)(r.p,{children:"In authoring mode, most dossier-related APIs are disabled as they are designed for the consumption dossier instance. The remaining APIs supported in authoring mode are shown below."}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Supported API"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"microstrategy.dossier.create"}),(0,n.jsx)(r.td,{children:"Creates or destroys the embedded dossier view."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"microstrategy.dossier.destroy"}),(0,n.jsx)(r.td,{children:"Creates or destroys the embedded dossier view."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Dossier.switchToMode"}),(0,n.jsx)(r.td,{children:"The API added in this feature used in authoring mode."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Dossier.registerEventHandler"}),(0,n.jsx)(r.td,{children:"Adds an event handler."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Dossier.removeEventHandler"}),(0,n.jsx)(r.td,{children:"Removes an event handler."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Dossier.registerFilterUpdateHandler"}),(0,n.jsx)(r.td,{children:"Calls the same dossier functions in Web with Dossier.registerEventHandler so all could be used in authoring mode."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Dossier.registerPageSwitchHandler"}),(0,n.jsx)(r.td,{children:"Calls the same dossier functions in Web with Dossier.registerEventHandler so all could be used in authoring mode."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Dossier.registerDossierInstanceIDChangeHandler"}),(0,n.jsx)(r.td,{children:"Calls the same dossier functions in Web with Dossier.registerEventHandler so all could be used in authoring mode."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Dossier.registerGraphicsSelectEventHandlerToViz"}),(0,n.jsx)(r.td,{children:"Calls the same dossier functions in Web with Dossier.registerEventHandler so all could be used in authoring mode."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Dossier.addCustomErrorHandler"}),(0,n.jsx)(r.td,{children:"Handles the error handlers."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Dossier.removeCustomErrorhandler"}),(0,n.jsx)(r.td,{children:"Handles the error handlers."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Dossier.addSessionErrorHandler"}),(0,n.jsx)(r.td,{children:"Handles the error handlers."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Dossier.removeSessionErrorhandler"}),(0,n.jsx)(r.td,{children:"Handles the error handlers."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Dossier.makeSureSessionAlive"}),(0,n.jsx)(r.td,{children:"Checks the session. If it is expired, you should refresh it."})]})]})]}),"\n",(0,n.jsx)(r.p,{children:'The other APIs are disabled in authoring mode. If a disabled API is called in authoring mode, an error is returned with the message, "The API ${funcName} isn\'t supported in the authoring mode!"'}),"\n",(0,n.jsx)(r.h3,{id:"events",children:"Events"}),"\n",(0,n.jsx)(r.p,{children:"To avoid unexpected events, except the newly added events (see the callback event API and example), you cannot receive Embedding SDK events in authoring mode as they are designed for consumption mode."}),"\n",(0,n.jsx)(r.h3,{id:"initial-parameters",children:"Initial parameters"}),"\n",(0,n.jsxs)(r.p,{children:["The props parameter contains many fields. See ",(0,n.jsx)(r.a,{href:"/embedding-sdk-docs/add-functionality/methods-and-properties",children:"Methods and properties for an embedded dossier"})," for more information."]}),"\n",(0,n.jsxs)(r.p,{children:["The existing parameters can be roughly divided into three categories and their behaviors can be set with ",(0,n.jsx)(r.code,{children:"dossierRenderingMode = authoring"}),"."]}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsxs)(r.p,{children:["The parameters shared by both modes, for example, ",(0,n.jsx)(r.code,{children:"URL"}),", ",(0,n.jsx)(r.code,{children:"serverURL"}),", ",(0,n.jsx)(r.code,{children:"applicationID"}),", ",(0,n.jsx)(r.code,{children:"objectID"}),", and ",(0,n.jsx)(r.code,{children:"placeholder"}),". These parameters only involve the embedding framework and are effective on both modes."]}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsx)(r.p,{children:"The parameters used for some UI customization in consumption mode, for example, navigationBar.enabled. You can still use these parameters with dossierRenderingMode = authoring, but their effects can only be seen when switching back to consumption mode."}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsx)(r.p,{children:"The parameters used for some extra dossier instance manipulation, for example, filter and visualizationAppearances. These parameters are implementations of some embedding SDK APIs (for example, filter-related functions in the dossier class and changeVisualizationSize) for the initial workflow. As these embedding SDK APIs are forbidden in authoring mode, you must also forbid these parameters in the initial parameter in authoring mode to keep the consistent behavior. A complete list of these parameters are shown below."}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Field Name"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"filters"}),(0,n.jsx)(r.td,{children:"Applies filters to the dossier instance in consumption mode."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"visualizationAppearances"}),(0,n.jsx)(r.td,{children:"Applies visualization appearance manipulations to the dossier instance in consumption mode."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"visualizationSelectedElements"}),(0,n.jsx)(r.td,{children:"Applies visualization element selections to the dossier instance in consumption mode."})]})]})]}),"\n",(0,n.jsxs)(r.p,{children:["If you have set values for these fields when setting ",(0,n.jsx)(r.code,{children:"dossierRenderingMode = authoring"}),", a dialog appears with the error message:"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-text",children:'The fields ["filters", "visualizationAppearances", "visualizationSelectedElements"] are not allowed to be used when "dossierRenderingMode" is "authoring". Please remove these forbidden fields and try again.\n'})}),"\n",(0,n.jsx)(r.h2,{id:"embedding-sdk-apis-and-examples",children:"Embedding SDK APIs and examples"}),"\n",(0,n.jsx)(r.h3,{id:"api-for-entering-authoring-mode-or-disabling-authoring-mode-in-the-initial-loading",children:"API for entering authoring mode or disabling authoring mode in the initial loading"}),"\n",(0,n.jsx)(r.h4,{id:"function",children:"Function"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.code,{children:"microstrategy.dossier.create(props)"})}),"\n",(0,n.jsx)(r.h4,{id:"input-parameters",children:"Input parameters"}),"\n",(0,n.jsxs)(r.p,{children:["An optional ",(0,n.jsx)(r.code,{children:"props.dossierRenderingMode"})," field has been added to the props object in 2021 Update 3. The ",(0,n.jsx)(r.code,{children:"props"})," parameter contains many fields. See ",(0,n.jsx)(r.a,{href:"/embedding-sdk-docs/add-functionality/methods-and-properties",children:"Methods and properties for an embedded dossier"})," for more information."]}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Parameter Name"}),(0,n.jsx)(r.th,{children:"Data Type"}),(0,n.jsx)(r.th,{children:"Default Value"}),(0,n.jsx)(r.th,{children:"Available Values"}),(0,n.jsx)(r.th,{children:"Description"}),(0,n.jsx)(r.th,{children:"Required?"})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"props.dossierRenderingMode"}),(0,n.jsx)(r.td,{children:"String"}),(0,n.jsx)(r.td,{children:"consumption"}),(0,n.jsx)(r.td,{children:'["consumption", "authoring"]'}),(0,n.jsxs)(r.td,{children:["The value is either ",(0,n.jsx)(r.code,{children:"consumption"})," or ",(0,n.jsx)(r.code,{children:"authoring"}),". ",(0,n.jsx)("br",{})," If it is ",(0,n.jsx)(r.code,{children:"authoring"})," and the configuration ",(0,n.jsx)(r.code,{children:"feature.dossier.authoring"})," isn't set, or its value isn't ",(0,n.jsx)(r.code,{children:"true"}),", then an error is returned."]}),(0,n.jsx)(r.td,{children:"No"})]})})]}),"\n",(0,n.jsx)(r.p,{children:"Example:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-js",children:'microstrategy.dossier.create({\n  // ...\n  dossierRenderingMode: "authoring",\n});\n'})}),"\n",(0,n.jsx)(r.h4,{id:"response",children:"Response"}),"\n",(0,n.jsxs)(r.p,{children:["This API returns a promise ",(0,n.jsx)(r.code,{children:"dossier"})," object in the resolved case, which can be used to call other dossier-owned embedding SDK APIs."]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-js",children:'const placeholderDiv = document.getElementById("dossierContainer");\nlet myDossier;\nmicrostrategy.dossier\n  .create({\n    // ...\n  })\n  .then((dossier) => {\n    myDossier = dossier;\n    // ...\n  });\n'})}),"\n",(0,n.jsx)(r.h4,{id:"errors",children:"Errors"}),"\n",(0,n.jsx)(r.p,{children:"When an error occurs, this API returns a promise object that in turn returns an error object in rejected cases."}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Error Case"}),(0,n.jsx)(r.th,{children:"Error Category"}),(0,n.jsx)(r.th,{children:"Handling Module"}),(0,n.jsx)(r.th,{children:"Error Handling"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"The dossierRenderingMode parameter has the wrong input type."}),(0,n.jsx)(r.td,{children:"Invalid input"}),(0,n.jsx)(r.td,{children:"Embedded SDK"}),(0,n.jsx)(r.td,{children:"Display an error message and an alert dialog."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"The dossierRenderingMode parameter is neither \u201cconsumption\u201c nor \u201cauthoring\u201c."}),(0,n.jsx)(r.td,{children:"Invalid input"}),(0,n.jsx)(r.td,{children:"Embedded SDK"}),(0,n.jsx)(r.td,{children:"Display an error message and an alert dialog."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"A required parameter is missed or it is not in the correct format."}),(0,n.jsx)(r.td,{children:"Invalid input in the unsupported case"}),(0,n.jsx)(r.td,{children:"Web Dossier"}),(0,n.jsx)(r.td,{children:"Caught by error handler."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsxs)(r.td,{children:["The unsupported fields in the authoring mode include:",(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:"filters"}),(0,n.jsx)("li",{children:"visualizationAppearances"}),(0,n.jsx)("li",{children:"visualizationSelectedElements"})]})]}),(0,n.jsx)(r.td,{children:"Unsupported case"}),(0,n.jsx)(r.td,{children:"Embedded SDK"}),(0,n.jsx)(r.td,{children:"Display an error message and an alert dialog."})]})]})]}),"\n",(0,n.jsx)(r.h3,{id:"api-for-switching-to-authoring-mode",children:"API for switching to authoring mode"}),"\n",(0,n.jsxs)(r.p,{children:["This API, similar to the ",(0,n.jsx)(r.code,{children:"Dossier.resizeVisualization"})," API, can ignore the restriction of the initial ",(0,n.jsx)(r.code,{children:"navigationBar.edit"})," parameter. This means when ",(0,n.jsx)(r.code,{children:"navigationBar.edit"})," is set to false, you cannot enter authoring mode via manual actions, but are able to via this API."]}),"\n",(0,n.jsx)(r.h4,{id:"function-1",children:"Function"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.code,{children:"Dossier.switchToMode(mode)"})}),"\n",(0,n.jsx)(r.h4,{id:"input-parameters-1",children:"Input parameters"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Parameter Name"}),(0,n.jsx)(r.th,{children:"Description"}),(0,n.jsx)(r.th,{children:"Data Type"}),(0,n.jsx)(r.th,{children:"Available Values"}),(0,n.jsx)(r.th,{children:"Default Value"})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"mode"}),(0,n.jsxs)(r.td,{children:['This is in the array ["authoring"]. ',(0,n.jsx)("br",{}),' Using API to return to consumption mode is not supported, so the input "consumption" returns an error.']}),(0,n.jsx)(r.td,{children:"String"}),(0,n.jsx)(r.td,{children:'["authoring"]'}),(0,n.jsx)(r.td,{children:"N/A"})]})})]}),"\n",(0,n.jsx)(r.h4,{id:"response-1",children:"Response"}),"\n",(0,n.jsx)(r.p,{children:"This API returns a promise object, similar to the ones shown below."}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-js",children:'myDossier\n  .switchToMode("authoring")\n  .then(() => {\n    // ...\n  })\n  .catch((error) => {\n    // ...\n  });\n'})}),"\n",(0,n.jsx)(r.p,{children:"Since additional feedback information is not required, the callback parameters for the resolve case are not necessary."}),"\n",(0,n.jsxs)(r.p,{children:["Similar to the behavior of the existing ",(0,n.jsx)(r.code,{children:"goToPage"})," API, the user's callback should be invoked when the editing page completes loading."]}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Parameter Name"}),(0,n.jsx)(r.th,{children:"Data Type"}),(0,n.jsx)(r.th,{children:"Example"}),(0,n.jsx)(r.th,{children:"Comments"})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"error"}),(0,n.jsx)(r.td,{children:"Error object"}),(0,n.jsx)(r.td,{children:"new Error(\u201cinvalid operation!\u201c)"}),(0,n.jsx)(r.td,{children:"See Errors for more information."})]})})]}),"\n",(0,n.jsx)(r.h4,{id:"errors-1",children:"Errors"}),"\n",(0,n.jsx)(r.p,{children:"When an error occurs, the API returns a promise object that in turn returns an error object in rejected cases."}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Error Case"}),(0,n.jsx)(r.th,{children:"Error Category"}),(0,n.jsx)(r.th,{children:"Handling Module"}),(0,n.jsx)(r.th,{children:"Error Handling"})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Dossier authoring isn\u2019t allowed."}),(0,n.jsx)(r.td,{children:"Unsupported case"}),(0,n.jsx)(r.td,{children:"Web Dossier"}),(0,n.jsx)(r.td,{children:"Caught by the catch() of the promise object."})]})})]}),"\n",(0,n.jsx)(r.h3,{id:"callback-for-monitoring-when-the-dossier-is-saved-or-closed",children:"Callback for monitoring when the dossier is saved or closed"}),"\n",(0,n.jsx)(r.p,{children:"When the Save or Close button is clicked in authoring mode, an event is raised that notifies your application."}),"\n",(0,n.jsx)(r.h4,{id:"event-name",children:"Event name"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Parameter Name"}),(0,n.jsx)(r.th,{children:"Trigger"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"onDossierAuthoringSaved"}),(0,n.jsx)(r.td,{children:"When the dossier is saved in authoring mode."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"onDossierAuthoringClosed"}),(0,n.jsx)(r.td,{children:"When the dossier is closed in authoring mode."})]})]})]}),"\n",(0,n.jsx)(r.h4,{id:"callback-format",children:"Callback format"}),"\n",(0,n.jsxs)(r.p,{children:["The following code example includes ",(0,n.jsx)(r.code,{children:"registerEventHandler"}),", which is an existing API."]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-js",children:"myDossier.registerEventHandler(microstrategy.dossier.EventType.ON_DOSSIER_AUTHORING_SAVED, () => {\n  // The handling logic receiving the save event\n  // ...\n});\n\nmyDossier.registerEventHandler(microstrategy.dossier.EventType.ON_DOSSIER_AUTHORING_CLOSED, () => {\n  // The handling logic receiving the close event\n  // ...\n});\n"})}),"\n",(0,n.jsx)(r.h3,{id:"api-for-hiding-the-edit-button",children:"API for hiding the edit button"}),"\n",(0,n.jsx)(r.h4,{id:"function-2",children:"Function"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.code,{children:"microstrategy.dossier.create(props)"})}),"\n",(0,n.jsx)(r.h4,{id:"input-parameters-2",children:"Input parameters"}),"\n",(0,n.jsxs)(r.p,{children:["An optional ",(0,n.jsx)(r.code,{children:"props.navigationBar.edit"})," field has been added to the ",(0,n.jsx)(r.code,{children:"props"})," object. The ",(0,n.jsx)(r.code,{children:"props"})," parameter contains many fields. See ",(0,n.jsx)(r.a,{href:"/embedding-sdk-docs/add-functionality/methods-and-properties",children:"Methods and properties for an embedded dossier"})," for more information."]}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Parameter Name"}),(0,n.jsx)(r.th,{children:"Data Type"}),(0,n.jsx)(r.th,{children:"Default Value"}),(0,n.jsx)(r.th,{children:"Description"}),(0,n.jsx)(r.th,{children:"Required?"})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"props.navigationBar.edit"}),(0,n.jsx)(r.td,{children:"Boolean"}),(0,n.jsx)(r.td,{children:"false"}),(0,n.jsx)(r.td,{children:"The visibility of the Edit button on the navigation bar. If it's true, the edit button is the same as the OOTB Library; If it's false or not input, the edit button would be hidden."}),(0,n.jsx)(r.td,{children:"No"})]})})]}),"\n",(0,n.jsx)(r.p,{children:"Example:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-js",children:"microstrategy.dossier.create({\n  // ...\n  navigationBar: {\n    edit: false,\n  },\n});\n"})}),"\n",(0,n.jsxs)(r.p,{children:["If you do not enter a value for ",(0,n.jsx)(r.code,{children:"navigationBar"}),", the dossier runs using the old behavior and the navigation bar is hidden."]}),"\n",(0,n.jsx)(r.h4,{id:"response-2",children:"Response"}),"\n",(0,n.jsxs)(r.p,{children:["This API returns a ",(0,n.jsx)(r.code,{children:"dossier"})," promise object in the resolved case, which can be used to call other dossier-owned embedding SDK APIs."]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-js",children:'const placeholderDiv = document.getElementById("dossierContainer");\nlet myDossier;\nmicrostrategy.dossier\n  .create({\n    // ...\n  })\n  .then((dossier) => {\n    myDossier = dossier;\n    // ...\n  });\n'})}),"\n",(0,n.jsx)(r.h3,{id:"api-for-controlling-the-authoring-ui",children:"API for controlling the authoring UI"}),"\n",(0,n.jsx)(r.h4,{id:"function-3",children:"Function"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.code,{children:"microstrategy.dossier.create(props)"})}),"\n",(0,n.jsx)(r.h4,{id:"input-parameters-3",children:"Input parameters"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Parameter Names"}),(0,n.jsx)(r.th,{children:"Data Type"}),(0,n.jsx)(r.th,{children:"Default Value"}),(0,n.jsx)(r.th,{children:"Description"}),(0,n.jsx)(r.th,{children:"Required?"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"props.authoring.menubar.library.visible"}),(0,n.jsx)(r.td,{children:"Boolean"}),(0,n.jsx)(r.td,{children:"true"}),(0,n.jsx)(r.td,{children:"Show or hide corresponding Library home button in the authoring UI."}),(0,n.jsx)(r.td,{children:"No"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsxs)(r.td,{children:["props.authoring.toolbar.tableOfContents.visible ",(0,n.jsx)("br",{}),"props.authoring.toolbar.undo.visible ",(0,n.jsx)("br",{}),"props.authoring.toolbar.redo.visible ",(0,n.jsx)("br",{}),"props.authoring.toolbar.refresh.visible ",(0,n.jsx)("br",{}),"props.authoring.toolbar.pauseDataRetrieval.visible ",(0,n.jsx)("br",{}),"props.authoring.toolbar.reprompt.visible ",(0,n.jsx)("br",{}),"props.authoring.toolbar.dividerLeft.visible ",(0,n.jsx)("br",{}),"props.authoring.toolbar.addData.visible ",(0,n.jsx)("br",{}),"props.authoring.toolbar.addChapter.visible ",(0,n.jsx)("br",{}),"props.authoring.toolbar.addPage.visible ",(0,n.jsx)("br",{}),"props.authoring.toolbar.insertVisualization.visible ",(0,n.jsx)("br",{}),"props.authoring.toolbar.insertFilter.visible ",(0,n.jsx)("br",{}),"props.authoring.toolbar.insertText.visible ",(0,n.jsx)("br",{}),"props.authoring.toolbar.insertImage.visible ",(0,n.jsx)("br",{}),"props.authoring.toolbar.insertHtml.visible ",(0,n.jsx)("br",{}),"props.authoring.toolbar.insertShape.visible ",(0,n.jsx)("br",{}),"props.authoring.toolbar.insertPanelStack.visible ",(0,n.jsx)("br",{}),"props.authoring.toolbar.insertInfoWindow.visible ",(0,n.jsx)("br",{}),"props.authoring.toolbar.save.visible ",(0,n.jsx)("br",{}),"props.authoring.toolbar.dividerRight.visible ",(0,n.jsx)("br",{}),"props.authoring.toolbar.more.visible ",(0,n.jsx)("br",{}),"props.authoring.toolbar.freeformLayout.visible ",(0,n.jsx)("br",{}),"props.authoring.toolbar.nlp.visible ",(0,n.jsx)("br",{}),"props.authoring.toolbar.responsiveViewEditor.visible ",(0,n.jsx)("br",{}),"props.authoring.toolbar.responsivePreview.visible"]}),(0,n.jsx)(r.td,{children:"Boolean"}),(0,n.jsx)(r.td,{children:"true"}),(0,n.jsx)(r.td,{children:"Show or hide corresponding buttons on the toolbar in the authoring UI."}),(0,n.jsx)(r.td,{children:"No"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsxs)(r.td,{children:["props.authoring.panelVisibility.contents ",(0,n.jsx)("br",{}),"props.authoring.panelVisibility.datasets ",(0,n.jsx)("br",{}),"props.authoring.panelVisibility.editor ",(0,n.jsx)("br",{}),"props.authoring.panelVisibility.filter ",(0,n.jsx)("br",{}),"props.authoring.panelVisibility.format ",(0,n.jsx)("br",{}),"props.authoring.panelVisibility.layers"]}),(0,n.jsx)(r.td,{children:"Boolean"}),(0,n.jsx)(r.td,{children:"true"}),(0,n.jsx)(r.td,{children:"Show or hide corresponding authoring panels."}),(0,n.jsx)(r.td,{children:"No"})]})]})]}),"\n",(0,n.jsxs)(r.p,{children:["The ",(0,n.jsx)(r.code,{children:"props"})," parameter contains many fields. See ",(0,n.jsx)(r.a,{href:"/embedding-sdk-docs/add-functionality/methods-and-properties",children:"Methods and properties for an embedded dossier"})," for more information."]}),"\n",(0,n.jsx)(r.p,{children:"Example:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-js",children:'microstrategy.dossier.create({\n  placeholder: placeholderDiv,\n  url: "https://demo.microstrategy.com/MicroStrategyLibrary/app/EC70648611E7A2F962E90080EFD58751/19A95FA711EC45A93E0B0080AFAB8FDF", // {host}:{port}/{Library}/app/{ProjectID}/{DossierID}\n  authoring: {\n    menubar: { library: { visible: false } },\n    toolbar: { tableOfContents: { visible: false } },\n    panelVisibility: { contents: false },\n  },\n});\n'})}),"\n",(0,n.jsx)(r.h4,{id:"response-3",children:"Response"}),"\n",(0,n.jsxs)(r.p,{children:["This API returns a ",(0,n.jsx)(r.code,{children:"dossier"})," promise object in the resolved case, which can be used to call other dossier-owned embedding SDK APIs."]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-js",children:'const placeholderDiv = document.getElementById("dossierContainer");\nlet myDossier;\nmicrostrategy.dossier\n  .create({\n    // ...\n  })\n  .then((dossier) => {\n    myDossier = dossier;\n    // ...\n  });\n'})}),"\n",(0,n.jsx)(r.h4,{id:"errors-2",children:"Errors"}),"\n",(0,n.jsx)(r.p,{children:"When an error occurs, the API returns a promise object that in turn returns an error object in rejected cases."}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Error Case"}),(0,n.jsx)(r.th,{children:"Error Category"}),(0,n.jsx)(r.th,{children:"Handling Module"}),(0,n.jsx)(r.th,{children:"Error Handling"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"The authoring parameter has the wrong input type."}),(0,n.jsx)(r.td,{children:"Invalid input"}),(0,n.jsx)(r.td,{children:"Embedded SDK"}),(0,n.jsx)(r.td,{children:"Display an error message and an alert dialog."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"The authoring.${key} has the wrong input type."}),(0,n.jsx)(r.td,{children:"Invalid input"}),(0,n.jsx)(r.td,{children:"Embedded SDK"}),(0,n.jsx)(r.td,{children:"Display an error message and an alert dialog."})]})]})]}),"\n",(0,n.jsx)(r.h3,{id:"api-for-creating-a-new-dossier-for-authoring",children:"API for creating a new dossier for authoring"}),"\n",(0,n.jsx)(r.h4,{id:"function-4",children:"Function"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.code,{children:"microstrategy.dossier.create(props)"})}),"\n",(0,n.jsx)(r.h4,{id:"input-parameters-4",children:"Input parameters"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Parameter Names"}),(0,n.jsx)(r.th,{children:"Data Type"}),(0,n.jsx)(r.th,{children:"Default Value"}),(0,n.jsx)(r.th,{children:"Description"}),(0,n.jsx)(r.th,{children:"Required?"})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"props.newDossier"}),(0,n.jsx)(r.td,{children:"Boolean"}),(0,n.jsx)(r.td,{children:"false"}),(0,n.jsxs)(r.td,{children:["Use when creating a new dossier from scratch. When set to ",(0,n.jsx)(r.code,{children:"true"}),", a new dossier instance is created from a blank dossier template. In this case, the ",(0,n.jsx)(r.code,{children:"instance"}),", ",(0,n.jsx)(r.code,{children:"objectID"}),", or ",(0,n.jsx)(r.code,{children:"url"})," parameters don't have to and shouldn't be provided."]}),(0,n.jsx)(r.td,{children:"No"})]})})]}),"\n",(0,n.jsxs)(r.p,{children:["The ",(0,n.jsx)(r.code,{children:"props"})," parameter contains many fields. See ",(0,n.jsx)(r.a,{href:"/embedding-sdk-docs/add-functionality/methods-and-properties",children:"Methods and properties for an embedded dossier"})," for more information."]}),"\n",(0,n.jsx)(r.p,{children:"Example:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-js",children:"microstrategy.dossier.create({\n  placeholder: placeholderDiv,\n  newDossier: true,\n  dossierRenderingMode: true,\n});\n"})}),"\n",(0,n.jsx)(r.h4,{id:"response-4",children:"Response"}),"\n",(0,n.jsxs)(r.p,{children:["This API returns a ",(0,n.jsx)(r.code,{children:"dossier"})," promise object in the resolved case, which can be used to call other dossier-owned embedding SDK APIs."]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-js",children:'const placeholderDiv = document.getElementById("dossierContainer");\nlet myDossier;\nmicrostrategy.dossier\n  .create({\n    // ...\n  })\n  .then((dossier) => {\n    myDossier = dossier;\n    // ...\n  });\n'})}),"\n",(0,n.jsx)(r.h4,{id:"errors-3",children:"Errors"}),"\n",(0,n.jsx)(r.p,{children:"When an error occurs, the API returns a promise object that in turn returns an error object in rejected cases."}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Error Case"}),(0,n.jsx)(r.th,{children:"Error Category"}),(0,n.jsx)(r.th,{children:"Handling Module"}),(0,n.jsx)(r.th,{children:"Error Handling"})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:'There are inconsistent parameters with \u201cnewDossier".'}),(0,n.jsx)(r.td,{children:"Invalid input"}),(0,n.jsx)(r.td,{children:"Embedded SDK"}),(0,n.jsx)(r.td,{children:"Display an error message and an alert dialog."})]})})]})]})}function c(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},1151:(e,r,i)=>{i.d(r,{Z:()=>o,a:()=>d});var n=i(7294);const s={},t=n.createContext(s);function d(e){const r=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),n.createElement(t.Provider,{value:r},e.children)}}}]);