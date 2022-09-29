"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[273],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=r.createContext({}),u=function(e){var t=r.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=u(e.components);return r.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),h=u(a),m=n,c=h["".concat(d,".").concat(m)]||h[m]||s[m]||i;return a?r.createElement(c,l(l({ref:t},p),{},{components:a})):r.createElement(c,l({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=h;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var u=2;u<i;u++)l[u]=a[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},6664:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return d},default:function(){return m},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return s}});var r=a(3117),n=a(102),i=(a(7294),a(3905)),l=["components"],o={title:"Properties for an embedded MicroStrategy Library home page",description:"Describes the properties that can be set for an embedded MicroStrategy Library home page."},d=void 0,u={unversionedId:"embed-library-main-page/embed-library-properties",id:"embed-library-main-page/embed-library-properties",title:"Properties for an embedded MicroStrategy Library home page",description:"Describes the properties that can be set for an embedded MicroStrategy Library home page.",source:"@site/docs/embed-library-main-page/embed-library-properties.md",sourceDirName:"embed-library-main-page",slug:"/embed-library-main-page/embed-library-properties",permalink:"/embedding-sdk-docs/embed-library-main-page/embed-library-properties",draft:!1,editUrl:"https://github.com/MicroStrategy/embedding-sdk-docs/tree/public/docs/embed-library-main-page/embed-library-properties.md",tags:[],version:"current",lastUpdatedBy:"magua-io",lastUpdatedAt:1664482178,formattedLastUpdatedAt:"Sep 29, 2022",frontMatter:{title:"Properties for an embedded MicroStrategy Library home page",description:"Describes the properties that can be set for an embedded MicroStrategy Library home page."},sidebar:"tutorialSidebar",previous:{title:"Embed MicroStrategy Library home page",permalink:"/embedding-sdk-docs/embed-library-main-page/"},next:{title:"Library page APIs",permalink:"/embedding-sdk-docs/embed-library-main-page/library-page-apis"}},p={},s=[{value:"Method",id:"method",level:2},{value:"<code>microstrategy.embeddingContexts.embedLibraryPage(props)</code>",id:"microstrategyembeddingcontextsembedlibrarypageprops",level:3},{value:"Return value",id:"return-value",level:4},{value:"Properties",id:"properties",level:2},{value:"<code>placeholder</code>",id:"placeholder",level:3},{value:"Required?",id:"required",level:4},{value:"Default value",id:"default-value",level:4},{value:"Sample",id:"sample",level:4},{value:"<code>serverUrl</code>",id:"serverurl",level:3},{value:"Required?",id:"required-1",level:4},{value:"Default value",id:"default-value-1",level:4},{value:"Sample",id:"sample-1",level:4},{value:"<code>containerHeight</code>",id:"containerheight",level:3},{value:"Required?",id:"required-2",level:4},{value:"Default value",id:"default-value-2",level:4},{value:"Sample",id:"sample-2",level:4},{value:"<code>containerWidth</code>",id:"containerwidth",level:3},{value:"Required?",id:"required-3",level:4},{value:"Default value",id:"default-value-3",level:4},{value:"Sample",id:"sample-3",level:4},{value:"<code>enableCustomAuthentication</code>",id:"enablecustomauthentication",level:3},{value:"Required?",id:"required-4",level:4},{value:"Default value",id:"default-value-4",level:4},{value:"Sample",id:"sample-4",level:4},{value:"<code>customAuthenticationType</code>",id:"customauthenticationtype",level:3},{value:"Required?",id:"required-5",level:4},{value:"Default value",id:"default-value-5",level:4},{value:"Sample",id:"sample-5",level:4},{value:"<code>getLoginToken</code>",id:"getlogintoken",level:3},{value:"Required?",id:"required-6",level:4},{value:"Default value",id:"default-value-6",level:4},{value:"Sample",id:"sample-6",level:4},{value:"<code>disableCustomErrorHandlerOnCreate</code>",id:"disablecustomerrorhandleroncreate",level:3},{value:"Required?",id:"required-7",level:4},{value:"Default Value",id:"default-value-7",level:4},{value:"Sample",id:"sample-7",level:4},{value:"<code>errorHandler</code>",id:"errorhandler",level:3},{value:"Required?",id:"required-8",level:4},{value:"Default value",id:"default-value-8",level:4},{value:"Sample",id:"sample-8",level:4},{value:"<code>sessionErrorHandler</code>",id:"sessionerrorhandler",level:3},{value:"Required?",id:"required-9",level:4},{value:"Default value",id:"default-value-9",level:4},{value:"Sample",id:"sample-9",level:4},{value:"<code>customApplicationId</code>",id:"customapplicationid",level:3},{value:"Required?",id:"required-10",level:4},{value:"Default value",id:"default-value-10",level:4},{value:"Sample",id:"sample-10",level:4},{value:"<code>customUi</code>",id:"customui",level:3},{value:"Required?",id:"required-11",level:4},{value:"Default value",id:"default-value-11",level:4},{value:"Sample",id:"sample-11",level:4},{value:"The navigation bar custom setting behavior",id:"the-navigation-bar-custom-setting-behavior",level:4},{value:"The sidebar custom setting behavior",id:"the-sidebar-custom-setting-behavior",level:4},{value:"<code>currentPage</code>",id:"currentpage",level:3},{value:"Required?",id:"required-12",level:4},{value:"Default value",id:"default-value-12",level:4},{value:"Sample",id:"sample-12",level:4}],h={toc:s};function m(e){var t=e.components,o=(0,n.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"When you embed a MicroStrategy Library home page into a web page, you use the\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"embedLibraryPage(props)"),"\xa0method under the\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"microstrategy.embeddingContexts"),"\xa0namespace."),(0,i.kt)("h2",{id:"method"},"Method"),(0,i.kt)("h3",{id:"microstrategyembeddingcontextsembedlibrarypageprops"},(0,i.kt)("inlineCode",{parentName:"h3"},"microstrategy.embeddingContexts.embedLibraryPage(props)")),(0,i.kt)("p",null,"This method creates an iFrame on the web page (in the location specified by the ",(0,i.kt)("inlineCode",{parentName:"p"},"placeholder")," property) and inserts a link to the MicroStrategy Library home page URL (specified by the ",(0,i.kt)("inlineCode",{parentName:"p"},"serverUrl")," property)."),(0,i.kt)("h4",{id:"return-value"},"Return value"),(0,i.kt)("p",null,"This method returns a promise, which is resolved when the MicroStrategy Library home page is loaded."),(0,i.kt)("p",null,"The\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"props"),"\xa0parameter contains required key:value pairs that defines the Library Server URL and the\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"<div>"),"\xa0placeholder where the iFrame containing the MicroStrategy Library home page will be created. It can also contain other optional key:value pairs to customize the UI, authentication and custom error handler."),(0,i.kt)("p",null,"The\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"props"),"\xa0parameter could contain the following key:value pairs:"),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"placeholder"},(0,i.kt)("inlineCode",{parentName:"h3"},"placeholder")),(0,i.kt)("p",null,"Reference for the container ",(0,i.kt)("inlineCode",{parentName:"p"},"<div>"),"."),(0,i.kt)("h4",{id:"required"},"Required?"),(0,i.kt)("p",null,"Yes"),(0,i.kt)("h4",{id:"default-value"},"Default value"),(0,i.kt)("p",null,"N/A"),(0,i.kt)("h4",{id:"sample"},"Sample"),(0,i.kt)("p",null,"N/A"),(0,i.kt)("h3",{id:"serverurl"},(0,i.kt)("inlineCode",{parentName:"h3"},"serverUrl")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"serverUrl")," refers to the MicroStrategy Library server URL."),(0,i.kt)("h4",{id:"required-1"},"Required?"),(0,i.kt)("p",null,"Yes"),(0,i.kt)("h4",{id:"default-value-1"},"Default value"),(0,i.kt)("p",null,"N/A"),(0,i.kt)("h4",{id:"sample-1"},"Sample"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'microstrategy.embeddingContexts.embedLibraryPage({\n  placeholder: placeholderDiv,\n  url: "http://{host}:{port}/{Library}",\n});\n')),(0,i.kt)("h3",{id:"containerheight"},(0,i.kt)("inlineCode",{parentName:"h3"},"containerHeight")),(0,i.kt)("p",null,"Sets the height of the placeholder."),(0,i.kt)("p",null,"If the style of the placeholder has a height value, the containerHeight property is ignored."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"containerHeight"),' property is applied as a style: style="height: $(containerHeight)".'),(0,i.kt)("h4",{id:"required-2"},"Required?"),(0,i.kt)("p",null,"No"),(0,i.kt)("h4",{id:"default-value-2"},"Default value"),(0,i.kt)("p",null,"600px"),(0,i.kt)("h4",{id:"sample-2"},"Sample"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'microstrategy.embeddingContexts.embedLibraryPage({\n  placeholder: placeholderDiv,\n  url: "http://{host}:{port}/{Library}",\n  containerHeight: "600px",\n});\n')),(0,i.kt)("h3",{id:"containerwidth"},(0,i.kt)("inlineCode",{parentName:"h3"},"containerWidth")),(0,i.kt)("p",null,"Sets the width of the placeholder."),(0,i.kt)("p",null,"If the style of the placeholder has a width value, the containerWidth property is ignored."),(0,i.kt)("h4",{id:"required-3"},"Required?"),(0,i.kt)("p",null,"No"),(0,i.kt)("h4",{id:"default-value-3"},"Default value"),(0,i.kt)("p",null,"800px"),(0,i.kt)("h4",{id:"sample-3"},"Sample"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'microstrategy.embeddingContexts.embedLibraryPage({\n  placeholder: placeholderDiv,\n  url: "http://{host}:{port}/{Library}",\n  containerWidth: "800px",\n});\n')),(0,i.kt)("h3",{id:"enablecustomauthentication"},(0,i.kt)("inlineCode",{parentName:"h3"},"enableCustomAuthentication")),(0,i.kt)("p",null,"Specifies whether custom authentication is enabled."),(0,i.kt)("h4",{id:"required-4"},"Required?"),(0,i.kt)("p",null,"No"),(0,i.kt)("h4",{id:"default-value-4"},"Default value"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"false")),(0,i.kt)("p",null,"User needs to log in from the default login page."),(0,i.kt)("h4",{id:"sample-4"},"Sample"),(0,i.kt)("p",null,"N/A"),(0,i.kt)("h3",{id:"customauthenticationtype"},(0,i.kt)("inlineCode",{parentName:"h3"},"customAuthenticationType")),(0,i.kt)("p",null,"Specifies the token type returned by the getLoginToken function. There are two possible values, which can be provided by the CustomAuthenticationType enumeration."),(0,i.kt)("h4",{id:"required-5"},"Required?"),(0,i.kt)("p",null,"No"),(0,i.kt)("h4",{id:"default-value-5"},"Default value"),(0,i.kt)("p",null,"microstrategy.dossier.CustomAuthenticationType.IDENTITY_TOKEN"),(0,i.kt)("h4",{id:"sample-5"},"Sample"),(0,i.kt)("p",null,"N/A"),(0,i.kt)("h3",{id:"getlogintoken"},(0,i.kt)("inlineCode",{parentName:"h3"},"getLoginToken")),(0,i.kt)("p",null,"Specifies a function that returns a promise, which is resolved with either authorization token (",(0,i.kt)("inlineCode",{parentName:"p"},"authToken"),") or the identity token (",(0,i.kt)("inlineCode",{parentName:"p"},"identityToken"),") The token type is specified by the customAuthenticationType property."),(0,i.kt)("h4",{id:"required-6"},"Required?"),(0,i.kt)("p",null,"No"),(0,i.kt)("h4",{id:"default-value-6"},"Default value"),(0,i.kt)("p",null,"See the sample code in the next column for the default implementation of this function."),(0,i.kt)("h4",{id:"sample-6"},"Sample"),(0,i.kt)("p",null,"When ",(0,i.kt)("inlineCode",{parentName:"p"},"customAuthenticationType")," is set to ",(0,i.kt)("inlineCode",{parentName:"p"},"CustomAuthenticationType.AUTH_TOKEN"),", the following sample demonstrates how to send a fetch request to get ",(0,i.kt)("inlineCode",{parentName:"p"},"authToken")," with your credentials. You can do this using an ",(0,i.kt)("inlineCode",{parentName:"p"},"XMLHttpRequest"),", if your browser does not support ",(0,i.kt)("inlineCode",{parentName:"p"},"fetch"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'microstrategy.embeddingContexts.embedLibraryPage({\n  placeholder: placeholderDiv,\n  serverUrl: "https://{host}:{port}/{Library}",\n  enableCustomerAuthentication: true,\n  customAuthenticationType: microstrategy.dossier.CustomAuthenticationType.AUTH_TOKEN,\n  //The following function is the default implementation. User can provide custom implementation.\n  getLoginToken: function () {\n    return fetch("https://{host}:{port}/{Library}/api/auth/login", {\n      method: "POST",\n      credentials: "include", //including cookie\n      mode: "cors", //setting as CORS mode for cross origin\n      headers: { "Content-Type": "application/json" },\n      body: JSON.stringify({\n        loginMode: 1, // Standard mode\n        username: "input your username",\n        password: "input your password",\n      }),\n    }).then(function (response) {\n      if (response && response.ok) {\n        return response.headers.get("X-MSTR-authToken");\n      }\n    });\n  },\n});\n')),(0,i.kt)("p",null,"When ",(0,i.kt)("inlineCode",{parentName:"p"},"customAuthenticationType")," is set to ",(0,i.kt)("inlineCode",{parentName:"p"},"CustomAuthenticationType.IDENTITY_TOKEN"),", you need to add a component to your web server. Refer to Use Custom Authentication for more information."),(0,i.kt)("h3",{id:"disablecustomerrorhandleroncreate"},(0,i.kt)("inlineCode",{parentName:"h3"},"disableCustomErrorHandlerOnCreate")),(0,i.kt)("p",null,"To disable the custom error handler, set ",(0,i.kt)("inlineCode",{parentName:"p"},"disableCustomErrorHandlerOnCreate")," to true."),(0,i.kt)("p",null,"If this flag is set, all the errors occur in the initial loading process and manual actions would be handled by OOTB Library itself, an error dialog would pop up."),(0,i.kt)("p",null,"You could also refer to ",(0,i.kt)("a",{parentName:"p",href:"/embedding-sdk-docs/add-functionality/error-handling#custom-error-handling-during-dossier-creation"},"Custom Error Handling During Dossier Creation")," to see the usage of this parameter in ",(0,i.kt)("inlineCode",{parentName:"p"},"microstrategy.dossier.create"),", which has the same effect as in ",(0,i.kt)("inlineCode",{parentName:"p"},"microstrategy.embeddingContexts.embedLibraryPage")," function."),(0,i.kt)("h4",{id:"required-7"},"Required?"),(0,i.kt)("p",null,"No"),(0,i.kt)("h4",{id:"default-value-7"},"Default Value"),(0,i.kt)("p",null,"false"),(0,i.kt)("h4",{id:"sample-7"},"Sample"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"microstrategy.embeddingContexts.embedLibraryPage({\n  serverUrl: url,\n  placeholder: container,\n  disableCustomErrorHandlerOnCreate: true,\n});\n")),(0,i.kt)("h3",{id:"errorhandler"},(0,i.kt)("inlineCode",{parentName:"h3"},"errorHandler")),(0,i.kt)("p",null,"The custom error handler that executes when the error occurs in the initial loading process. It's a callback function that contains one parameter, ",(0,i.kt)("inlineCode",{parentName:"p"},"error"),". The error object has the property ",(0,i.kt)("inlineCode",{parentName:"p"},"message"),", which contains the detailed error message."),(0,i.kt)("p",null,"Whether ",(0,i.kt)("inlineCode",{parentName:"p"},"errorHandler")," is set, the error occured inside the library home page would output an error in the browser console. The detailed behavior could be seen in ",(0,i.kt)("a",{parentName:"p",href:"/embedding-sdk-docs/add-functionality/error-handling#the-overall-microstrategy-library-error-behavior-in-embed-case"},"The overall MicroStrategy Library error behavior in embed case"),"."),(0,i.kt)("h4",{id:"required-8"},"Required?"),(0,i.kt)("p",null,"No"),(0,i.kt)("h4",{id:"default-value-8"},"Default value"),(0,i.kt)("p",null,"N/A"),(0,i.kt)("h4",{id:"sample-8"},"Sample"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'microstrategy.embeddingContexts.embedLibraryPage({\n  serverUrl: url,\n  placeholder: container,\n  errorHandler: function (error) {\n    console.log("catch error during creation: " + error.message);\n    //Do something to handle the error\n  },\n});\n')),(0,i.kt)("h3",{id:"sessionerrorhandler"},(0,i.kt)("inlineCode",{parentName:"h3"},"sessionErrorHandler")),(0,i.kt)("p",null,"The custom error handler that executes when an session expiration error occurs. It's a callback function that contains one parameter, ",(0,i.kt)("inlineCode",{parentName:"p"},"error"),". The error object has the property ",(0,i.kt)("inlineCode",{parentName:"p"},"message"),", which contains the detailed error message."),(0,i.kt)("p",null,"When session expires:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If ",(0,i.kt)("inlineCode",{parentName:"li"},"sessionErrorHandler")," is not set, the embedded page would redirect to the OOTB library login page."),(0,i.kt)("li",{parentName:"ul"},"If ",(0,i.kt)("inlineCode",{parentName:"li"},"sessionErrorHandler")," is set, the session error handler would be triggered and the embedded page would not change for 1 minute. If after 1 minute, the error handler doesn't do anything(like reauthentication and refresh page) to renew the session, the embedded page would redirect to the OOTB Library login page.")),(0,i.kt)("h4",{id:"required-9"},"Required?"),(0,i.kt)("p",null,"No"),(0,i.kt)("h4",{id:"default-value-9"},"Default value"),(0,i.kt)("p",null,"N/A"),(0,i.kt)("h4",{id:"sample-9"},"Sample"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'microstrategy.embeddingContexts.embedLibraryPage({\n  serverUrl: url,\n  placeholder: container,\n  sessionErrorHandler: function (error) {\n    console.log("catch session error: " + error.message);\n    //Do something to handle the error\n  },\n});\n')),(0,i.kt)("h3",{id:"customapplicationid"},(0,i.kt)("inlineCode",{parentName:"h3"},"customApplicationId")),(0,i.kt)("p",null,"Specifies the application that the user wants to show in the embedded page."),(0,i.kt)("p",null,"The application in MicroStrategy has 2 categories:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If the application selects library home page as its home screen, the library home page would be embedded with the application's configuration."),(0,i.kt)("li",{parentName:"ul"},"If the application selects a dossier as its home screen, the embedding would fail and an error would occur.")),(0,i.kt)("h4",{id:"required-10"},"Required?"),(0,i.kt)("p",null,"No"),(0,i.kt)("h4",{id:"default-value-10"},"Default value"),(0,i.kt)("p",null,"N/A"),(0,i.kt)("h4",{id:"sample-10"},"Sample"),(0,i.kt)("p",null,"N/A"),(0,i.kt)("h3",{id:"customui"},(0,i.kt)("inlineCode",{parentName:"h3"},"customUi")),(0,i.kt)("p",null,"Specifies the custom UI settings on the embedded page."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"customUi")," format:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"{\n  library: {\n    navigationBar: {\n      enabled: false\n    },\n    sidebar: {\n      show: false\n    }\n  }\n}\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"customUi.library.navigationBar.enabled"),": This field specifies whether enabling the library home page navigation bar or not when embedding the library home page.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"customUi.library.sidebar.show"),": This field specifies whether expanding the sidebar or not when embedding the library home page."))),(0,i.kt)("h4",{id:"required-11"},"Required?"),(0,i.kt)("p",null,"No"),(0,i.kt)("h4",{id:"default-value-11"},"Default value"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"customUi.library.navigationBar.enabled"),": true"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"customUi.library.sidebar.show"),": false"),(0,i.kt)("h4",{id:"sample-11"},"Sample"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"microstrategy.embeddingContexts.embedLibraryPage({\n  serverUrl: url,\n  placeholder: container,\n  customUi: {\n    library: {\n      navigationBar: {\n        enabled: true,\n      },\n      sidebar: {\n        show: false,\n      },\n    },\n  },\n});\n")),(0,i.kt)("h4",{id:"the-navigation-bar-custom-setting-behavior"},"The navigation bar custom setting behavior"),(0,i.kt)("p",null,"The property ",(0,i.kt)("inlineCode",{parentName:"p"},"customUi.library.navigationBar.enabled")," would affect the library home page UI together with the navigation bar setting in the application settings. There are 2 related item in the application settings in MicroStrategy Workstation:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Disable toolbar"),(0,i.kt)("li",{parentName:"ul"},"Collapse toolbar by default")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Application navigation bar settings",src:a(465).Z,width:"1930",height:"648"})),(0,i.kt)("p",null,"The detailed embedding behavior is as below:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If ",(0,i.kt)("inlineCode",{parentName:"p"},"customUi.library.navigationBar.enabled")," is false, the navigation bar is disabled by the Embedding SDK settings, and it would never be shown on the embedded library page.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If ",(0,i.kt)("inlineCode",{parentName:"p"},"customUi.library.navigationBar.enabled")," is true, the setting would still be combined with the settings in the application, to determine the final visibility of the navigation bar:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If the current application disables the navigation bar, the navigation bar would never be shown.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If the current application enables the navigation bar:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},'If you choose "Collapse toolbar by default" in application settings, the navigation bar is collapsible:'),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If ",(0,i.kt)("inlineCode",{parentName:"p"},"customUi.library.sidebar.show")," is false or not set, on the embedded library page, the navigation bar would be collapsed at the start, and only would be expanded/visible when the user expands it manually.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If ",(0,i.kt)("inlineCode",{parentName:"p"},"customUi.library.sidebar.show")," is true, as on the OOTB library page, the sidebar couldn\u2019t be expand unless the navigation bar is visible, the navigation bar would be expanded and shown in this case.")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},'If you don\'t choose "Collapse toolbar by default", the navigation bar would be shown on the embedded library page.'))))))),(0,i.kt)("h4",{id:"the-sidebar-custom-setting-behavior"},"The sidebar custom setting behavior"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"customUi.library.navigationBar.enabled")," would also affect the library home page UI together with the sidebar setting in the application settings:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Application sidebar settings",src:a(3681).Z,width:"1920",height:"662"})),(0,i.kt)("p",null,"The special behaviors are as below:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If sidebar is disabled in the application settings, whether setting ",(0,i.kt)("inlineCode",{parentName:"li"},"customUi.library.sidebar.show")," to true or false, the sidebar couldn't be shown."),(0,i.kt)("li",{parentName:"ul"},"If the navigation bar is enabled in ",(0,i.kt)("inlineCode",{parentName:"li"},"customUi.library.navigationBar.enabled"),' and application settings, and "Collapse toolbar by default" is enabled by default, when ',(0,i.kt)("inlineCode",{parentName:"li"},"customUi.library.sidebar.show")," is true, the navigation bar would be expanded and shown.")),(0,i.kt)("h3",{id:"currentpage"},(0,i.kt)("inlineCode",{parentName:"h3"},"currentPage")),(0,i.kt)("p",null,"Specifies the page on the sidebar entries that you want to embed."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"currentPage")," format:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  key: "string",\n  targetGroup: {\n    id: "string",\n    name: "string",\n  }\n};\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"currentPage.key"),": This field specifies the key of the page that the user wants to embed. Its available values are the menu items in the sidebar, which could be in ","['all', 'myContent', 'favorites', 'recents', 'insights', 'subscriptions', 'defaultGroups', 'myGroups']",".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"currentPage.targetGroup"),": This field is only necessary when ",(0,i.kt)("inlineCode",{parentName:"p"},"currentPage.key")," is 'defaultGroups' or 'myGroups', as on library home page the user can't select these 2 menu items but only could select the group items under them. It specifies which group item the user wants to select.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"currentPage.targetGroup.id"),": The id of the group the user wants to select. Its available values could be got from the API ",(0,i.kt)("inlineCode",{parentName:"p"},"EmbeddingContext.libraryPage.getAllMyGroups()")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"EmbeddingContext.libraryPage.getAllDefaultGroups()"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"currentPage.targetGroup.name"),": The name of the group the user wants to select."))),(0,i.kt)("h4",{id:"required-12"},"Required?"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"currentPage"),": Not required"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"currentPage.key"),": Required if ",(0,i.kt)("inlineCode",{parentName:"li"},"currentPage")," is provided"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"currentPage.targetGroup.id")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"currentPage.targetGroup.name"),": The user must at least provide one of them. When both of them are provided, ",(0,i.kt)("inlineCode",{parentName:"li"},"currentPage.targetGroup.id")," would have higher priority.")),(0,i.kt)("h4",{id:"default-value-12"},"Default value"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"currentPage.key"),': "all"'),(0,i.kt)("h4",{id:"sample-12"},"Sample"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'microstrategy.embeddingContexts.embedLibraryPage({\n  serverUrl: url,\n  placeholder: container,\n  currentPage: {\n    key: "myGroups",\n    targetGroup: {\n      id: "0A88CE2CF43C4242A86A5439850C3EAA",\n      name: "GroupA",\n    },\n  },\n});\n')))}m.isMDXComponent=!0},465:function(e,t,a){t.Z=a.p+"assets/images/custom-app-navbar-setting-106faa2458f3bbea61be91a73d5fa0d4.png"},3681:function(e,t,a){t.Z=a.p+"assets/images/custom-app-sidebar-setting-cf6df10f758608de61e4d25861945741.png"}}]);