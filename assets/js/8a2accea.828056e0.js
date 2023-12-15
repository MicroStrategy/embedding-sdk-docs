"use strict";(self.webpackChunkembedding_sdk_docs=self.webpackChunkembedding_sdk_docs||[]).push([[9943],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var d=a.createContext({}),p=function(e){var t=a.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=p(r),m=n,h=c["".concat(d,".").concat(m)]||c[m]||u[m]||i;return r?a.createElement(h,o(o({ref:t},s),{},{components:r})):a.createElement(h,o({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=c;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},5499:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return d},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var a=r(3117),n=r(102),i=(r(7294),r(3905)),o=["components"],l={title:"Properties for an embedded MicroStrategy report page",description:"Describes the properties that can be set for an embedded MicroStrategy report page."},d=void 0,p={unversionedId:"embed-report-page/embed-report-properties",id:"embed-report-page/embed-report-properties",title:"Properties for an embedded MicroStrategy report page",description:"Describes the properties that can be set for an embedded MicroStrategy report page.",source:"@site/docs/embed-report-page/embed-report-properties.md",sourceDirName:"embed-report-page",slug:"/embed-report-page/embed-report-properties",permalink:"/embedding-sdk-docs/embed-report-page/embed-report-properties",draft:!1,editUrl:"https://github.com/MicroStrategy/embedding-sdk-docs/tree/public/docs/embed-report-page/embed-report-properties.md",tags:[],version:"current",lastUpdatedBy:"Darren Holmblad",lastUpdatedAt:1702664682,formattedLastUpdatedAt:"Dec 15, 2023",frontMatter:{title:"Properties for an embedded MicroStrategy report page",description:"Describes the properties that can be set for an embedded MicroStrategy report page."},sidebar:"tutorialSidebar",previous:{title:"Embed MicroStrategy report page",permalink:"/embedding-sdk-docs/embed-report-page/"},next:{title:"Embedding context",permalink:"/embedding-sdk-docs/embedding-context/"}},s={},u=[{value:"Method",id:"method",level:2},{value:"<code>microstrategy.embeddingContexts.embedReportPage(props)</code>",id:"microstrategyembeddingcontextsembedreportpageprops",level:3},{value:"Return value",id:"return-value",level:4},{value:"Properties",id:"properties",level:2},{value:"<code>placeholder</code>",id:"placeholder",level:3},{value:"Required?",id:"required",level:4},{value:"Default value",id:"default-value",level:4},{value:"Sample",id:"sample",level:4},{value:"<code>serverUrl</code>,<code>projectId</code>,<code>objectId</code>, and <code>pageKey</code>",id:"serverurlprojectidobjectid-and-pagekey",level:3},{value:"Required?",id:"required-1",level:4},{value:"Default value",id:"default-value-1",level:4},{value:"Sample",id:"sample-1",level:4},{value:"<code>containerHeight</code>",id:"containerheight",level:3},{value:"Required?",id:"required-2",level:4},{value:"Default value",id:"default-value-2",level:4},{value:"Sample",id:"sample-2",level:4},{value:"<code>containerWidth</code>",id:"containerwidth",level:3},{value:"Required?",id:"required-3",level:4},{value:"Default value",id:"default-value-3",level:4},{value:"Sample",id:"sample-3",level:4},{value:"<code>enableCustomAuthentication</code>",id:"enablecustomauthentication",level:3},{value:"Required?",id:"required-4",level:4},{value:"Default value",id:"default-value-4",level:4},{value:"Sample",id:"sample-4",level:4},{value:"<code>customAuthenticationType</code>",id:"customauthenticationtype",level:3},{value:"Required?",id:"required-5",level:4},{value:"Default value",id:"default-value-5",level:4},{value:"Sample",id:"sample-5",level:4},{value:"<code>getLoginToken</code>",id:"getlogintoken",level:3},{value:"Required?",id:"required-6",level:4},{value:"Default value",id:"default-value-6",level:4},{value:"Sample",id:"sample-6",level:4},{value:"<code>disableCustomErrorHandlerOnCreate</code>",id:"disablecustomerrorhandleroncreate",level:3},{value:"Required?",id:"required-7",level:4},{value:"Default value",id:"default-value-7",level:4},{value:"Sample",id:"sample-7",level:4},{value:"<code>errorHandler</code>",id:"errorhandler",level:3},{value:"Required?",id:"required-8",level:4},{value:"Default value",id:"default-value-8",level:4},{value:"Sample",id:"sample-8",level:4},{value:"<code>sessionErrorHandler</code>",id:"sessionerrorhandler",level:3},{value:"Required?",id:"required-9",level:4},{value:"Default value",id:"default-value-9",level:4},{value:"Sample",id:"sample-9",level:4},{value:"<code>customApplicationId</code>",id:"customapplicationid",level:3},{value:"Required?",id:"required-10",level:4},{value:"Default value",id:"default-value-10",level:4},{value:"Sample",id:"sample-10",level:4},{value:"<code>customUi</code>",id:"customui",level:3},{value:"Properties",id:"properties-1",level:4},{value:"The navigation bar custom setting behavior",id:"the-navigation-bar-custom-setting-behavior",level:4}],c={toc:u};function m(e){var t=e.components,r=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"To embed a MicroStrategy report page into a web page, use the\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"embedReportPage(props)"),"\xa0method under the\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"microstrategy.embeddingContexts"),"\xa0namespace."),(0,i.kt)("h2",{id:"method"},"Method"),(0,i.kt)("h3",{id:"microstrategyembeddingcontextsembedreportpageprops"},(0,i.kt)("inlineCode",{parentName:"h3"},"microstrategy.embeddingContexts.embedReportPage(props)")),(0,i.kt)("p",null,"This method creates an iFrame on the web page, in the location specified by the ",(0,i.kt)("inlineCode",{parentName:"p"},"placeholder")," property, and inserts a link to the MicroStrategy report page URL. The report page URL is built using ",(0,i.kt)("inlineCode",{parentName:"p"},"serverUrl")," + '/app/' + ",(0,i.kt)("inlineCode",{parentName:"p"},"projectId")," + '/' + ",(0,i.kt)("inlineCode",{parentName:"p"},"objectId")," + '/' + ",(0,i.kt)("inlineCode",{parentName:"p"},"pageKey"),"."),(0,i.kt)("h4",{id:"return-value"},"Return value"),(0,i.kt)("p",null,"This method returns a promise, which is resolved when the MicroStrategy report page is loaded."),(0,i.kt)("p",null,"The\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"props"),"\xa0parameter contains following required key-value pairs:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"serverUrl"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"projectId"),", and ",(0,i.kt)("inlineCode",{parentName:"li"},"objectId")," define the full report page URL."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"placeholder")," specifies where the iFrame containing the MicroStrategy report page will be created.")),(0,i.kt)("p",null,"It can also contain other optional key-value pairs to customize the UI, authentication, and custom error handler."),(0,i.kt)("p",null,"The\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"props"),"\xa0parameter can contain the following key-value pairs:"),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"placeholder"},(0,i.kt)("inlineCode",{parentName:"h3"},"placeholder")),(0,i.kt)("p",null,"Reference for the ",(0,i.kt)("inlineCode",{parentName:"p"},"<div>")," container."),(0,i.kt)("h4",{id:"required"},"Required?"),(0,i.kt)("p",null,"Yes"),(0,i.kt)("h4",{id:"default-value"},"Default value"),(0,i.kt)("p",null,"N/A"),(0,i.kt)("h4",{id:"sample"},"Sample"),(0,i.kt)("p",null,"N/A"),(0,i.kt)("h3",{id:"serverurlprojectidobjectid-and-pagekey"},(0,i.kt)("inlineCode",{parentName:"h3"},"serverUrl"),",",(0,i.kt)("inlineCode",{parentName:"h3"},"projectId"),",",(0,i.kt)("inlineCode",{parentName:"h3"},"objectId"),", and ",(0,i.kt)("inlineCode",{parentName:"h3"},"pageKey")),(0,i.kt)("p",null,"These properties build the full report page URL to be embedded.\nThe Embedding SDK builds the URL using ",(0,i.kt)("inlineCode",{parentName:"p"},"serverUrl")," + '/app/' + ",(0,i.kt)("inlineCode",{parentName:"p"},"projectId")," + '/' + ",(0,i.kt)("inlineCode",{parentName:"p"},"objectId")," + '/' + ",(0,i.kt)("inlineCode",{parentName:"p"},"pageKey"),"."),(0,i.kt)("h4",{id:"required-1"},"Required?"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"serverUrl"),",",(0,i.kt)("inlineCode",{parentName:"p"},"projectId"),",",(0,i.kt)("inlineCode",{parentName:"p"},"objectId")," is required, while ",(0,i.kt)("inlineCode",{parentName:"p"},"pageKey")," is optional."),(0,i.kt)("h4",{id:"default-value-1"},"Default value"),(0,i.kt)("p",null,"N/A"),(0,i.kt)("h4",{id:"sample-1"},"Sample"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'const embeddingContext = await microstrategy.embeddingContexts.embedReportPage({\n  serverUrl: "https://demo.microstrategy.com/MicroStrategyLibrary",\n  projectId: "B19DEDCC11D4E0EFC000EB9495D0F44F",\n  objectId: "A409D6EC2245D4417C4FBEA5CD87D3A1",\n  placeholder: document.getElementById("embedding-report-container"),\n});\n')),(0,i.kt)("h3",{id:"containerheight"},(0,i.kt)("inlineCode",{parentName:"h3"},"containerHeight")),(0,i.kt)("p",null,"Sets the height of the placeholder."),(0,i.kt)("p",null,"If the style of the placeholder has a height value, the ",(0,i.kt)("inlineCode",{parentName:"p"},"containerHeight")," property is ignored."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"containerHeight"),' property is applied as a style: style="height: $(containerHeight)".'),(0,i.kt)("h4",{id:"required-2"},"Required?"),(0,i.kt)("p",null,"No"),(0,i.kt)("h4",{id:"default-value-2"},"Default value"),(0,i.kt)("p",null,"600px"),(0,i.kt)("h4",{id:"sample-2"},"Sample"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'const embeddingContext = await microstrategy.embeddingContexts.embedReportPage({\n  serverUrl: "https://demo.microstrategy.com/MicroStrategyLibrary",\n  projectId: "B19DEDCC11D4E0EFC000EB9495D0F44F",\n  objectId: "A409D6EC2245D4417C4FBEA5CD87D3A1",\n  placeholder: document.getElementById("embedding-report-container"),\n  containerHeight: "600px",\n});\n')),(0,i.kt)("h3",{id:"containerwidth"},(0,i.kt)("inlineCode",{parentName:"h3"},"containerWidth")),(0,i.kt)("p",null,"Sets the width of the placeholder."),(0,i.kt)("p",null,"If the style of the placeholder has a width value, the ",(0,i.kt)("inlineCode",{parentName:"p"},"containerWidth")," property is ignored."),(0,i.kt)("h4",{id:"required-3"},"Required?"),(0,i.kt)("p",null,"No"),(0,i.kt)("h4",{id:"default-value-3"},"Default value"),(0,i.kt)("p",null,"800px"),(0,i.kt)("h4",{id:"sample-3"},"Sample"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'const embeddingContext = await microstrategy.embeddingContexts.embedReportPage({\n  serverUrl: "https://demo.microstrategy.com/MicroStrategyLibrary",\n  projectId: "B19DEDCC11D4E0EFC000EB9495D0F44F",\n  objectId: "A409D6EC2245D4417C4FBEA5CD87D3A1",\n  placeholder: document.getElementById("embedding-report-container"),\n  containerWidth: "800px",\n});\n')),(0,i.kt)("h3",{id:"enablecustomauthentication"},(0,i.kt)("inlineCode",{parentName:"h3"},"enableCustomAuthentication")),(0,i.kt)("p",null,"Specifies whether custom authentication is enabled."),(0,i.kt)("h4",{id:"required-4"},"Required?"),(0,i.kt)("p",null,"No"),(0,i.kt)("h4",{id:"default-value-4"},"Default value"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"false")),(0,i.kt)("p",null,"The user must log in from the default login page."),(0,i.kt)("h4",{id:"sample-4"},"Sample"),(0,i.kt)("p",null,"N/A"),(0,i.kt)("h3",{id:"customauthenticationtype"},(0,i.kt)("inlineCode",{parentName:"h3"},"customAuthenticationType")),(0,i.kt)("p",null,"Specifies the token type returned by the ",(0,i.kt)("inlineCode",{parentName:"p"},"getLoginToken")," function. There are two possible values, which can be provided by the ",(0,i.kt)("inlineCode",{parentName:"p"},"CustomAuthenticationType")," enumeration."),(0,i.kt)("h4",{id:"required-5"},"Required?"),(0,i.kt)("p",null,"No"),(0,i.kt)("h4",{id:"default-value-5"},"Default value"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"microstrategy.dossier.CustomAuthenticationType.IDENTITY_TOKEN")),(0,i.kt)("h4",{id:"sample-5"},"Sample"),(0,i.kt)("p",null,"N/A"),(0,i.kt)("h3",{id:"getlogintoken"},(0,i.kt)("inlineCode",{parentName:"h3"},"getLoginToken")),(0,i.kt)("p",null,"Specifies a function that returns a promise, which is resolved with either an authorization (",(0,i.kt)("inlineCode",{parentName:"p"},"authToken"),") or identity (",(0,i.kt)("inlineCode",{parentName:"p"},"identityToken"),") token. The token type is specified by the ",(0,i.kt)("inlineCode",{parentName:"p"},"customAuthenticationType")," property."),(0,i.kt)("h4",{id:"required-6"},"Required?"),(0,i.kt)("p",null,"No"),(0,i.kt)("h4",{id:"default-value-6"},"Default value"),(0,i.kt)("p",null,"See the sample code in the next column for the default implementation of this function."),(0,i.kt)("h4",{id:"sample-6"},"Sample"),(0,i.kt)("p",null,"When ",(0,i.kt)("inlineCode",{parentName:"p"},"customAuthenticationType")," is set to ",(0,i.kt)("inlineCode",{parentName:"p"},"CustomAuthenticationType.AUTH_TOKEN"),", the following sample demonstrates how to send a fetch request to get ",(0,i.kt)("inlineCode",{parentName:"p"},"authToken")," with your credentials. You can do this using an ",(0,i.kt)("inlineCode",{parentName:"p"},"XMLHttpRequest"),", if your browser does not support ",(0,i.kt)("inlineCode",{parentName:"p"},"fetch"),"."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"getLoginToken")," function can be found in ",(0,i.kt)("a",{parentName:"p",href:"../add-functionality/methods-and-properties#getlogintoken"},"the ",(0,i.kt)("inlineCode",{parentName:"a"},"getLoginToken")," doc")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'microstrategy.embeddingContexts.embedReportPage({\n  placeholder: placeholderDiv,\n  serverUrl: "https://demo.microstrategy.com/MicroStrategyLibrary",\n  projectId: "B19DEDCC11D4E0EFC000EB9495D0F44F",\n  objectId: "A409D6EC2245D4417C4FBEA5CD87D3A1",\n  enableCustomerAuthentication: true,\n  customAuthenticationType: microstrategy.dossier.CustomAuthenticationType.AUTH_TOKEN,\n  // The following function is the default implementation. User can provide custom implementation.\n  getLoginToken() {\n    // The similar logic as getLoginToken in existing Embedding SDK\n  },\n});\n')),(0,i.kt)("p",null,"When ",(0,i.kt)("inlineCode",{parentName:"p"},"customAuthenticationType")," is set to ",(0,i.kt)("inlineCode",{parentName:"p"},"CustomAuthenticationType.IDENTITY_TOKEN"),", you must add a component to your web server. Refer to ",(0,i.kt)("a",{parentName:"p",href:"/embedding-sdk-docs/support-for-different-authentication-environments/seamless-login"},"Use Custom Authentication")," for more information."),(0,i.kt)("h3",{id:"disablecustomerrorhandleroncreate"},(0,i.kt)("inlineCode",{parentName:"h3"},"disableCustomErrorHandlerOnCreate")),(0,i.kt)("p",null,"To disable the custom error handler, set ",(0,i.kt)("inlineCode",{parentName:"p"},"disableCustomErrorHandlerOnCreate")," to true."),(0,i.kt)("p",null,"If this flag is set, all errors that occur in the initial loading process as the result of manual actions are handled by OOTB Library and an error dialog appears."),(0,i.kt)("p",null,"Refer to ",(0,i.kt)("a",{parentName:"p",href:"/embedding-sdk-docs/add-functionality/error-handling#custom-error-handling-during-dossier-creation"},"Custom error handling during dossier creation")," to see the usage of this parameter in ",(0,i.kt)("inlineCode",{parentName:"p"},"microstrategy.dossier.create"),", which has the same effect as in the ",(0,i.kt)("inlineCode",{parentName:"p"},"microstrategy.embeddingContexts.embedReportPage")," function."),(0,i.kt)("h4",{id:"required-7"},"Required?"),(0,i.kt)("p",null,"No"),(0,i.kt)("h4",{id:"default-value-7"},"Default value"),(0,i.kt)("p",null,"false"),(0,i.kt)("h4",{id:"sample-7"},"Sample"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'microstrategy.embeddingContexts.embedReportPage({\n  serverUrl: "https://demo.microstrategy.com/MicroStrategyLibrary",\n  projectId: "B19DEDCC11D4E0EFC000EB9495D0F44F",\n  objectId: "A409D6EC2245D4417C4FBEA5CD87D3A1",\n  placeholder: container,\n  disableCustomErrorHandlerOnCreate: true,\n});\n')),(0,i.kt)("h3",{id:"errorhandler"},(0,i.kt)("inlineCode",{parentName:"h3"},"errorHandler")),(0,i.kt)("p",null,"The custom error handler that executes when the error occurs in the initial loading process. It's a callback function that contains one parameter, ",(0,i.kt)("inlineCode",{parentName:"p"},"error"),". The error object has a ",(0,i.kt)("inlineCode",{parentName:"p"},"message")," property, which contains the detailed error message."),(0,i.kt)("p",null,"When ",(0,i.kt)("inlineCode",{parentName:"p"},"errorHandler")," is set, errors that occur inside the report page produce an error in the browser console. See the detailed behavior in ",(0,i.kt)("a",{parentName:"p",href:"/embedding-sdk-docs/add-functionality/error-handling#the-overall-microstrategy-library-error-behavior-in-embed-case"},"The overall MicroStrategy Library error behavior in embed case"),"."),(0,i.kt)("h4",{id:"required-8"},"Required?"),(0,i.kt)("p",null,"No"),(0,i.kt)("h4",{id:"default-value-8"},"Default value"),(0,i.kt)("p",null,"N/A"),(0,i.kt)("h4",{id:"sample-8"},"Sample"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'microstrategy.embeddingContexts.embedReportPage({\n  serverUrl: "https://demo.microstrategy.com/MicroStrategyLibrary",\n  projectId: "B19DEDCC11D4E0EFC000EB9495D0F44F",\n  objectId: "A409D6EC2245D4417C4FBEA5CD87D3A1",\n  placeholder: container,\n  errorHandler(error) {\n    console.log(`catch error during creation: ${error.message}`);\n    // Do something to handle the error\n  },\n});\n')),(0,i.kt)("h3",{id:"sessionerrorhandler"},(0,i.kt)("inlineCode",{parentName:"h3"},"sessionErrorHandler")),(0,i.kt)("p",null,"The custom error handler that executes when a session expiration error occurs. It's a callback function that contains one parameter, ",(0,i.kt)("inlineCode",{parentName:"p"},"error"),". The error object has a ",(0,i.kt)("inlineCode",{parentName:"p"},"message")," property that contains the detailed error message."),(0,i.kt)("p",null,"When the session expires:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If ",(0,i.kt)("inlineCode",{parentName:"li"},"sessionErrorHandler")," is not set, the embedded page redirects to the OOTB Library login page."),(0,i.kt)("li",{parentName:"ul"},"If ",(0,i.kt)("inlineCode",{parentName:"li"},"sessionErrorHandler")," is set, the session error handler is triggered and the embedded page does not change for one minute. If the error handler doesn't do anything after one minute, such as reauthentication and refreshing the page to renew the session, the embedded page redirects to the OOTB Library login page.")),(0,i.kt)("h4",{id:"required-9"},"Required?"),(0,i.kt)("p",null,"No"),(0,i.kt)("h4",{id:"default-value-9"},"Default value"),(0,i.kt)("p",null,"N/A"),(0,i.kt)("h4",{id:"sample-9"},"Sample"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'microstrategy.embeddingContexts.embedReportPage({\n  serverUrl: "https://demo.microstrategy.com/MicroStrategyLibrary",\n  projectId: "B19DEDCC11D4E0EFC000EB9495D0F44F",\n  objectId: "A409D6EC2245D4417C4FBEA5CD87D3A1",\n  placeholder: container,\n  sessionErrorHandler(error) {\n    console.log(`catch session error: ${error.message}`);\n    // Do something to handle the error\n  },\n});\n')),(0,i.kt)("h3",{id:"customapplicationid"},(0,i.kt)("inlineCode",{parentName:"h3"},"customApplicationId")),(0,i.kt)("p",null,"Specifies the application that the user wants to show in the embedded page."),(0,i.kt)("p",null,"The application in MicroStrategy has two categories:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If the application selects the Library home page as its home screen, the Library home page is embedded with the application's configuration."),(0,i.kt)("li",{parentName:"ul"},"If the application selects a dossier as its home screen, the embedding fails and an error occurs.")),(0,i.kt)("h4",{id:"required-10"},"Required?"),(0,i.kt)("p",null,"No"),(0,i.kt)("h4",{id:"default-value-10"},"Default value"),(0,i.kt)("p",null,"N/A"),(0,i.kt)("h4",{id:"sample-10"},"Sample"),(0,i.kt)("p",null,"N/A"),(0,i.kt)("h3",{id:"customui"},(0,i.kt)("inlineCode",{parentName:"h3"},"customUi")),(0,i.kt)("p",null,"Specifies the custom UI settings on the embedded pages, including the MicroStrategy Library home, dossier consumption\uff0cdossier authoring, and report consumption pages."),(0,i.kt)("h4",{id:"properties-1"},"Properties"),(0,i.kt)("p",null,"See all properties in ",(0,i.kt)("a",{parentName:"p",href:"/embedding-sdk-docs/embed-library-main-page/embed-custom-ui-on-all-pages"},"The customized UI settings in Embedding SDK"),"."),(0,i.kt)("h4",{id:"the-navigation-bar-custom-setting-behavior"},"The navigation bar custom setting behavior"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"customUi.reportConsumption.navigationBar.enabled")," property affects the report page UI together with the navigation bar setting in the application settings. There are two related items in the MicroStrategy Workstation application settings:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Disable toolbar"),(0,i.kt)("li",{parentName:"ul"},"Collapse toolbar by default")),(0,i.kt)("p",null,"The detailed embedding behavior is below:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If ",(0,i.kt)("inlineCode",{parentName:"p"},"customUi.reportConsumption.navigationBar.enabled")," is false, the navigation bar is disabled by the Embedding SDK settings and it is not shown on the embedded report page.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If ",(0,i.kt)("inlineCode",{parentName:"p"},"customUi.reportConsumption.navigationBar.enabled")," is true, the setting is combined with the settings in the application, to determine the final visibility of the navigation bar:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If the current application disables the navigation bar, the navigation bar is not shown.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If the current application enables the navigation bar:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},'If you choose "Collapse toolbar by default" in the application settings, the navigation bar is collapsed at the start and is only expanded/visible when the user expands it manually.')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},'If you don\'t choose "Collapse toolbar by default", the navigation bar is shown on the embedded report page.'))))))))}m.isMDXComponent=!0}}]);