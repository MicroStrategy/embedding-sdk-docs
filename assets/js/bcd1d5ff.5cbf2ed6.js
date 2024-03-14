"use strict";(self.webpackChunkembedding_sdk_docs=self.webpackChunkembedding_sdk_docs||[]).push([[8826],{9873:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>l,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var o=t(5893),i=t(1151);const r={title:"Use standard authentication",description:"The example in this topic illustrates how to seamlessly display an embedded dashboard using standard authentication"},s=void 0,a={id:"support-for-different-authentication-environments/standard-authentication",title:"Use standard authentication",description:"The example in this topic illustrates how to seamlessly display an embedded dashboard using standard authentication",source:"@site/docs/support-for-different-authentication-environments/standard-authentication.md",sourceDirName:"support-for-different-authentication-environments",slug:"/support-for-different-authentication-environments/standard-authentication",permalink:"/embedding-sdk-docs/support-for-different-authentication-environments/standard-authentication",draft:!1,unlisted:!1,editUrl:"https://github.com/MicroStrategy/embedding-sdk-docs/tree/public/docs/support-for-different-authentication-environments/standard-authentication.md",tags:[],version:"current",lastUpdatedBy:"Aran0011",lastUpdatedAt:1710401361,formattedLastUpdatedAt:"Mar 14, 2024",frontMatter:{title:"Use standard authentication",description:"The example in this topic illustrates how to seamlessly display an embedded dashboard using standard authentication"},sidebar:"tutorialSidebar",previous:{title:"Use guest authentication with multiple authentication modes enabled",permalink:"/embedding-sdk-docs/support-for-different-authentication-environments/multiple-modes"},next:{title:"Use SAML or OIDC authentication",permalink:"/embedding-sdk-docs/support-for-different-authentication-environments/authentication-saml"}},d={},c=[{value:"Set up Library Server",id:"set-up-library-server",level:2},{value:"Import Embedding SDK",id:"import-embedding-sdk",level:2},{value:"Embed dashboard with custom authentication properties",id:"embed-dashboard-with-custom-authentication-properties",level:2},{value:"Authentication through REST API using Standard authentication",id:"authentication-through-rest-api-using-standard-authentication",level:2},{value:"Putting it all together",id:"putting-it-all-together",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"The example in this topic showcases how to display an embedded dashboard using Standard authentication"}),"\n",(0,o.jsxs)(n.p,{children:["To help you get started, we have provided ",(0,o.jsx)(n.a,{href:"https://microstrategy.github.io/playground/?example=g17",children:"a live example"})," in the ",(0,o.jsx)(n.a,{href:"https://microstrategy.github.io/playground/",children:"Embedding SDK Playground"}),". By design, the code in this example only shows how to embed a dashboard and authenticate using Standard authentication."]}),"\n",(0,o.jsx)(n.p,{children:"The workflow consists of:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#set-up-library-server",children:"Set up Library Server"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#import-embedding-sdk",children:"Import Embedding SDK"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#embed-dashboard-with-custom-authentication-properties",children:"Embed dashboard with custom authentication properties"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#authentication-through-rest-api-using-standard-authentication",children:"Authentication through REST API using standard authentication"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#putting-it-all-together",children:"Putting it all together"})}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"set-up-library-server",children:"Set up Library Server"}),"\n",(0,o.jsx)(n.p,{children:"Enable Standard and optionally other authentication modes in MicroStrategy Library Admin."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"MSTR Library Admin Guest Auth",src:t(6161).Z+"",width:"628",height:"546"})}),"\n",(0,o.jsx)(n.h2,{id:"import-embedding-sdk",children:"Import Embedding SDK"}),"\n",(0,o.jsxs)(n.p,{children:["Import Embedding SDK from your Library Server to your HTML page. In the code sample below, the SDK is imported into the head section of the HTML file. You can replace the url, ",(0,o.jsx)(n.code,{children:"https://demo.microstrategy.com/MicroStrategyLibraryInsights/javascript/embeddinglib.js"}),", with your own typically in the form ",(0,o.jsx)(n.code,{children:"https://{env-url}/{libraryName}/javascript/embeddinglib.js"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-html",children:'<head>\n  <script\n    type="text/javascript"\n    src="https://demo.microstrategy.com/MicroStrategyLibraryInsights/javascript/embeddinglib.js"\n  ><\/script>\n</head>\n'})}),"\n",(0,o.jsx)(n.h2,{id:"embed-dashboard-with-custom-authentication-properties",children:"Embed dashboard with custom authentication properties"}),"\n",(0,o.jsxs)(n.p,{children:["The sample code below shows how to embed a sample dashboard with properties set to enable custom authentication mode where you have to provide the auth token to log in. Note: the ",(0,o.jsx)(n.code,{children:"login"})," function will be implemented in the ",(0,o.jsx)(n.a,{href:"#authentication-through-rest-api-using-standard-authentication",children:"next section"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-html",children:'<body>\n  <div id="embedding-dossier-container"></div>\n  <script>\n    let baseServerUrl = "https://demo.microstrategy.com";\n    let libraryName = "MicroStrategyLibraryInsights";\n    // https://{env-url}/{libraryName}/app/{projectId}/{dossierId}\n    let url =\n      baseServerUrl +\n      "/" +\n      libraryName +\n      "/app/EC70648611E7A2F962E90080EFD58751/837B57D711E941BF000000806FA1298F";\n    let dossier; // Variable to store the dashboard created. Used by Event Handler do not remove!\n    let config; // Variable to store the configuration settings for dashboard.\n\n    async function runCode() {\n      // For more details on configuration properties, see https://microstrategy.github.io/embedding-sdk-docs/add-functionality/methods-and-properties\n      config = {\n        url: url,\n        placeholder: document.getElementById("embedding-dossier-container"),\n        containerHeight: "600px",\n        containerWidth: "800px",\n        customAuthenticationType: microstrategy.dossier.CustomAuthenticationType.AUTH_TOKEN,\n        enableCustomAuthentication: true,\n        enableResponsive: true,\n        getLoginToken: login,\n        navigationBar: {\n          enabled: false,\n        },\n      };\n\n      // This function is not implemented yet. But should return the auth token. Continue to next section to see how this should be implemented.\n      async function login() {\n        return null;\n      }\n      // INSERT PROPERTIES BELOW HERE\n\n      // INSERT PROPERTIES ABOVE HERE\n\n      // Embed the dashboard with the configuration settings\n      try {\n        dashboard = await window.microstrategy.dossier.create(config);\n      } catch (error) {\n        console.error(error);\n      }\n\n      // INSERT METHODS BELOW THIS\n\n      // INSERT METHODS ABOVE THIS\n    }\n    runCode();\n  <\/script>\n</body>\n'})}),"\n",(0,o.jsx)(n.h2,{id:"authentication-through-rest-api-using-standard-authentication",children:"Authentication through REST API using Standard authentication"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"getAuthToken()"})," function will make a REST API call to see if there is an existing login session. The endpoint used is ",(0,o.jsx)(n.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/getAuthToken",children:"GET /api/auth/token"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"createAuthToken()"})," function will authenticate the user using Standard authentication. The endpoint used is ",(0,o.jsx)(n.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin",children:"POST /api/auth/login"}),". The main points are to change the ",(0,o.jsx)(n.code,{children:"loginMode"})," to 1 for Standard authentication and to provide the ",(0,o.jsx)(n.code,{children:"username"})," and ",(0,o.jsx)(n.code,{children:"password"})," unlike Guest authentication."]}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"login()"})," function should be used for ",(0,o.jsx)(n.a,{href:"../add-functionality/methods-and-properties#getlogintoken",children:(0,o.jsx)(n.code,{children:"getLoginToken"})}),". This function return the existing auth token if it exists using ",(0,o.jsx)(n.code,{children:"getAuthToken()"})," and create a new one to return if it doesn't exist using ",(0,o.jsx)(n.code,{children:"createAuthToken()"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-html",children:'<script>\n  // Check if the user has an existing login session through getting the authToken\n  async function getAuthToken() {\n    const options = {\n      method: "GET",\n      credentials: "include", // Including cookie\n      mode: "cors", // Setting as cors mode for cross origin\n      headers: { "content-type": "application/json" },\n    };\n\n    return await fetch(baseServerUrl + "/" + libraryName + "/api/auth/token", options)\n      .then((response) => {\n        if (response.ok) return response.headers.get("x-mstr-authtoken");\n        else response.json().then((json) => console.log(json));\n      })\n      .catch((error) => console.error("Failed to retrieve authToken with error:", error));\n  }\n\n  // Create new authToken\n  async function createAuthToken() {\n    // Make a call to REST API to log the user in, if there is not a valid authToken\n    const options = {\n      method: "POST",\n      credentials: "include", // Including cookie\n      mode: "cors", // Setting as cors mode for cross origin\n      headers: { "content-type": "application/json" },\n      body: JSON.stringify({\n        loginMode: 1, // 1 means Standard login\n        username: prompt("Please enter your username"), // use guest / no password to test\n        password: prompt("Please enter your password"),\n      }),\n    };\n    return fetch(baseServerUrl + "/" + libraryName + "/api/auth/login", options)\n      .then((response) => {\n        if (response.ok) {\n          console.log("A new standard login session has been created successfully, logging in");\n          return response.headers.get("x-mstr-authtoken");\n        } else response.json().then((json) => console.log(json));\n      })\n      .catch((error) => console.error("Failed Standard Login with error:", error));\n  }\n\n  // Reuse login session. If not found, create a new authToken.\n  async function login() {\n    let authToken = await getAuthToken().catch((error) => console.error(error));\n    // If the authToken is available, return it\n    if (!!authToken) {\n      console.log("An existing login session has been found, logging in");\n      return authToken;\n    }\n    return await createAuthToken();\n  }\n<\/script>\n'})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"applicationType"})," must be unset or equal to ",(0,o.jsx)(n.code,{children:"35"}),". Because the implementation of Embedding SDK is based on login as a Library user, which uses the param of ",(0,o.jsx)(n.code,{children:"applicationType:35"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"putting-it-all-together",children:"Putting it all together"}),"\n",(0,o.jsx)(n.p,{children:"Here's how it would look if you follow the steps above.\nAdjust as needed."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-html",children:'<!doctype html>\n<html lang="en">\n  <head>\n    <meta charset="utf-8" />\n    <script\n      type="text/javascript"\n      src="https://demo.microstrategy.com/MicroStrategyLibraryInsights/javascript/embeddinglib.js"\n    ><\/script>\n  </head>\n\n  <body>\n    <div id="embedding-dossier-container"></div>\n    <script>\n      let baseServerUrl = "https://demo.microstrategy.com";\n      let libraryName = "MicroStrategyLibraryInsights";\n      // https://{env-url}/{libraryName}/app/{projectId}/{dossierId}\n      let url =\n        baseServerUrl +\n        "/" +\n        libraryName +\n        "/app/EC70648611E7A2F962E90080EFD58751/837B57D711E941BF000000806FA1298F";\n      let dossier; // Variable to store the dashboard created. Used by Event Handler do not remove!\n      let config; // Variable to store the configuration settings for dashboard.\n      async function runCode() {\n        // For more details on configuration properties, see https://microstrategy.github.io/embedding-sdk-docs/add-functionality/methods-and-properties\n        config = {\n          url: url,\n          placeholder: document.getElementById("embedding-dossier-container"),\n          containerHeight: "600px",\n          containerWidth: "800px",\n          customAuthenticationType: microstrategy.dossier.CustomAuthenticationType.AUTH_TOKEN,\n          enableCustomAuthentication: true,\n          enableResponsive: true,\n          getLoginToken: login,\n          navigationBar: {\n            enabled: false,\n          },\n        };\n\n        // Check if the user has an existing login session through getting the authToken\n        async function getAuthToken() {\n          const options = {\n            method: "GET",\n            credentials: "include", // Including cookie\n            mode: "cors", // Setting as cors mode for cross origin\n            headers: { "content-type": "application/json" },\n          };\n\n          return await fetch(baseServerUrl + "/" + libraryName + "/api/auth/token", options)\n            .then((response) => {\n              if (response.ok) return response.headers.get("x-mstr-authtoken");\n              else response.json().then((json) => console.log(json));\n            })\n            .catch((error) => console.error("Failed to retrieve authToken with error:", error));\n        }\n\n        // Create new authToken\n        async function createAuthToken() {\n          // Make a call to REST API to log the user in, if there is not a valid authToken\n          const options = {\n            method: "POST",\n            credentials: "include", // Including cookie\n            mode: "cors", // Setting as cors mode for cross origin\n            headers: { "content-type": "application/json" },\n            body: JSON.stringify({\n              loginMode: 1, // 1 means Standard login\n              username: prompt("Please enter your username"), // use guest / no password to test\n              password: prompt("Please enter your password"),\n            }),\n          };\n          return fetch(baseServerUrl + "/" + libraryName + "/api/auth/login", options)\n            .then((response) => {\n              if (response.ok) {\n                console.log(\n                  "A new standard login session has been created successfully, logging in"\n                );\n                return response.headers.get("x-mstr-authtoken");\n              } else response.json().then((json) => console.log(json));\n            })\n            .catch((error) => console.error("Failed Standard Login with error:", error));\n        }\n\n        // Reuse login session. If not found, create a new authToken.\n        async function login() {\n          let authToken = await getAuthToken().catch((error) => console.error(error));\n          // If the authToken is available, return it\n          if (!!authToken) {\n            console.log("An existing login session has been found, logging in");\n            return authToken;\n          }\n          return await createAuthToken();\n        }\n\n        // INSERT PROPERTIES BELOW HERE\n\n        // INSERT PROPERTIES ABOVE HERE\n\n        // Embed the dashboard with the configuration settings\n        try {\n          dashboard = await window.microstrategy.dossier.create(config);\n        } catch (error) {\n          console.error(error);\n        }\n\n        // INSERT METHODS BELOW THIS\n\n        // INSERT METHODS ABOVE THIS\n      }\n      runCode();\n    <\/script>\n  </body>\n</html>\n'})})]})}function l(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},6161:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/MstrLibraryAdmin_GuestAuth-170680210cd31e54c113bd06cd3fbe66.png"},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>s});var o=t(7294);const i={},r=o.createContext(i);function s(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);