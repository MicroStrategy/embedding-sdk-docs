"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[79],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=r.createContext({}),p=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,d=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=o,h=c["".concat(d,".").concat(m)]||c[m]||u[m]||i;return n?r.createElement(h,a(a({ref:t},l),{},{components:n})):r.createElement(h,a({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=c;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3876:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return d},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var r=n(3117),o=n(102),i=(n(7294),n(3905)),a=["components"],s={title:"Use guest authentication",description:"The example in this topic illustrates how to seamlessly display an embedded dossier using Guest authentication when Guest is the only authentication mode that is enabled."},d=void 0,p={unversionedId:"support-for-different-authentication-environments/guest-authentication-mode-only",id:"support-for-different-authentication-environments/guest-authentication-mode-only",title:"Use guest authentication",description:"The example in this topic illustrates how to seamlessly display an embedded dossier using Guest authentication when Guest is the only authentication mode that is enabled.",source:"@site/docs/support-for-different-authentication-environments/guest-authentication-mode-only.md",sourceDirName:"support-for-different-authentication-environments",slug:"/support-for-different-authentication-environments/guest-authentication-mode-only",permalink:"/embedding-sdk-docs/support-for-different-authentication-environments/guest-authentication-mode-only",draft:!1,editUrl:"https://github.com/MicroStrategy/embedding-sdk-docs/tree/public/docs/support-for-different-authentication-environments/guest-authentication-mode-only.md",tags:[],version:"current",lastUpdatedBy:"magua-io",lastUpdatedAt:1675450462,formattedLastUpdatedAt:"Feb 3, 2023",frontMatter:{title:"Use guest authentication",description:"The example in this topic illustrates how to seamlessly display an embedded dossier using Guest authentication when Guest is the only authentication mode that is enabled."},sidebar:"tutorialSidebar",previous:{title:"Support for different authentication environments",permalink:"/embedding-sdk-docs/support-for-different-authentication-environments/"},next:{title:"Use guest authentication with multiple authentication modes enabled",permalink:"/embedding-sdk-docs/support-for-different-authentication-environments/multiple-modes"}},l={},u=[],c={toc:u};function m(e){var t=e.components,s=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The Embedding SDK allows you to quickly integrate dossiers into a web application in a responsive manner. The code required for the dossier to be displayed without requesting credentials depends on the how authentication is configured for the environment where the embedded dossier is hosted. The example in this topic illustrates how to seamlessly display an embedded dossier using Guest authentication when Guest is the only authentication mode that is enabled."),(0,i.kt)("p",null,"To help you get started, we have provided ",(0,i.kt)("a",{parentName:"p",href:"https://microstrategy.github.io/playground/?example=g2"},"a live example")," in the ",(0,i.kt)("a",{parentName:"p",href:"https://microstrategy.github.io/playground/"},"Embedding SDK Playground"),". By design, the code in this example only shows how to embed a dossier and nothing else, and it embeds an existing dossier from the MicroStrategy Library demo site, which has only Guest authentication enabled."),(0,i.kt)("p",null,"We have provided simple instructions and code snippets to help you configure the example to use a dossier from your MicroStrategy Library Server. If you customize the example, however, you must configure your Library Server to support only Guest authentication."),(0,i.kt)("p",null,"Please also check out the examples in ",(0,i.kt)("a",{parentName:"p",href:"https://microstrategy.github.io/playground/"},"Embedding SDK Playground"),' from the "Start over" button and ',(0,i.kt)("a",{parentName:"p",href:"https://microstrategy.github.io/embedding-sdk-samples"},"https://microstrategy.github.io/embedding-sdk-samples"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="utf-8" />\n    <script\n      type="text/javascript"\n      src="https://demo.microstrategy.com/MicroStrategyLibrary/javascript/embeddinglib.js"\n    ><\/script>\n  </head>\n  <body>\n    <div id="embedding-dossier-container"></div>\n    <script>\n      let url =\n        "https://demo.microstrategy.com/MicroStrategyLibrary/app/B7CA92F04B9FAE8D941C3E9B7E0CD754/27D332AC6D43352E0928B9A1FCAF4AB0"; // https://{env-url}/{libraryName}/app/{projectId}/{dossierId}\n      let dossier; // Variable to store the dossier created. Used by Event Handler do not remove!\n      let config; // Variable to store the configuration settings for dossier.\n      async function runCode() {\n        // For more details on configuration properties, see https://www2.microstrategy.com/producthelp/Current/EmbeddingSDK/Content/topics/dossier_properties.htm\n        config = {\n          url: url,\n          placeholder: document.getElementById("embedding-dossier-container"),\n        };\n\n        // Embed the dossier with the configuration settings\n        try {\n          dossier = await window.microstrategy.dossier.create(config);\n        } catch (error) {\n          console.error(error);\n        }\n      }\n      runCode();\n    <\/script>\n  </body>\n</html>\n')),(0,i.kt)("p",null,"Run the code in browser or in the Playground. You should see the dossier shown below."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Embedded Dossier",src:n(6710).Z,width:"816",height:"619"})),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Because this simple embedding example uses a dossier on the demo server, you are not prompted for credentials. However, when you use a dossier in your environment, you will be prompted for credentials unless you enable single sign-on. In the other topics, you will learn how to enable single sign-on.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"To customize the example to use your MicroStrategy Library Server"),":"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Decide where you want to have the HTML page. If the domain is different from your MicroStrategy Library Server's domain, you may need to ",(0,i.kt)("a",{parentName:"p",href:"/embedding-sdk-docs/config"},"perform additional configuration to support Cross-Origin Resource Sharing (CORS)"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In an IDE, text editor or ",(0,i.kt)("a",{parentName:"p",href:"https://microstrategy.github.io/playground/"},"Embedding SDK Playground"),", open the HTML file and configure it to reflect the values in your environment:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Set the value of the\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"src"),"\xa0attribute in the first\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"<script>"),"\xa0node to the path to your MicroStrategy Library installation. Replace ",(0,i.kt)("inlineCode",{parentName:"p"},"demo.microstrategy.com")," with your server path."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<script\n  type="text/javascript"\n  src="https://demo.microstrategy.com/MicroStrategyLibrary/javascript/embeddinglib.js"\n><\/script>\n')),(0,i.kt)("p",{parentName:"li"},"The\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"embeddinglib.js"),"\xa0file, which contains the Embedding SDK, is included in the\xa0MicroStrategyLibrary\xa0web application.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Set the value for\xa0url\xa0to reference a dossier in a project in your environment. First, replace\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"demo.microstrategy.com")," with your server path and then replace\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"B7CA92F04B9FAE8D941C3E9B7E0CD754")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"27D332AC6D43352E0928B9A1FCAF4AB0")," with your Project ID and Dossier ID."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-js"},'url =\n  "https://demo.microstrategy.com/MicroStrategyLibrary/app/B7CA92F04B9FAE8D941C3E9B7E0CD754/27D332AC6D43352E0928B9A1FCAF4AB0";\n')))),(0,i.kt)("admonition",{parentName:"li",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"You can obtain the value of your Project ID and Dossier ID by running a dossier in MicroStrategy Library and copying the URL."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Once you have customized the code for your environment, save your HTML file.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Configure your environment so that only guest authentication is enabled."),(0,i.kt)("p",{parentName:"li"},"If guest authentication is the only authentication mode that is enabled, the application will open and the dossier will be displayed without asking for credentials. However, if multiple authentication modes are enabled, the dossier will not be displayed seamlessly. You need to add additional code that enables guest authentication. ",(0,i.kt)("a",{parentName:"p",href:"/embedding-sdk-docs/support-for-different-authentication-environments/multiple-modes"},"Using guest authentication when there are multiple authentication modes")," provides a simple example and an explanation of how to add the necessary code.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Open the page URL in a browser or run it in ",(0,i.kt)("a",{parentName:"p",href:"https://microstrategy.github.io/playground/"},"Embedding SDK Playground"),". The embedded dossier should be displayed in the application."))),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"If the dossier does not render on the page, you can use the browser developer tools to review any exceptions or errors being thrown. When you make an XHR\xa0request for\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"POST /auth/login"),", you only need to wait until the response headers are returned. The expected status code will be 204 (Success no content). Review\xa0",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState"},"the documentation on\xa0",(0,i.kt)("inlineCode",{parentName:"a"},"XMLHTTPRequest.readyState"))," to understand what is necessary to obtain the request header.")))}m.isMDXComponent=!0},6710:function(e,t,n){t.Z=n.p+"assets/images/EmbeddedDossier-9d637a5f5e6c59174b3c3128dcc4d5e9.png"}}]);