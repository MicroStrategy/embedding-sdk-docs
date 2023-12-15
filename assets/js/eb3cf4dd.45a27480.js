"use strict";(self.webpackChunkembedding_sdk_docs=self.webpackChunkembedding_sdk_docs||[]).push([[4724],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=i.createContext({}),u=function(e){var t=i.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return i.createElement(d.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(n),m=r,f=c["".concat(d,".").concat(m)]||c[m]||l[m]||o;return n?i.createElement(f,a(a({ref:t},p),{},{components:n})):i.createElement(f,a({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=c;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var u=2;u<o;u++)a[u]=n[u];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3575:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return d},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return l}});var i=n(3117),r=n(102),o=(n(7294),n(3905)),a=["components"],s={title:"Support for different authentication environments",description:"When you embed a dossier in an application, you want it to display as easily and quickly as possible. This can mean seamlessly, without requiring that the user enter credentials at all, or simply scanning a QR\xa0code by integrating with Badge. The code you write to achieve this depends on how authentication is configured for the environment where the embedded dossier is hosted. Samples or sample code are provided for different authentication environments."},d=void 0,u={unversionedId:"support-for-different-authentication-environments/support-for-different-authentication-environments",id:"support-for-different-authentication-environments/support-for-different-authentication-environments",title:"Support for different authentication environments",description:"When you embed a dossier in an application, you want it to display as easily and quickly as possible. This can mean seamlessly, without requiring that the user enter credentials at all, or simply scanning a QR\xa0code by integrating with Badge. The code you write to achieve this depends on how authentication is configured for the environment where the embedded dossier is hosted. Samples or sample code are provided for different authentication environments.",source:"@site/docs/support-for-different-authentication-environments/support-for-different-authentication-environments.md",sourceDirName:"support-for-different-authentication-environments",slug:"/support-for-different-authentication-environments/",permalink:"/embedding-sdk-docs/support-for-different-authentication-environments/",draft:!1,editUrl:"https://github.com/MicroStrategy/embedding-sdk-docs/tree/public/docs/support-for-different-authentication-environments/support-for-different-authentication-environments.md",tags:[],version:"current",lastUpdatedBy:"Darren Holmblad",lastUpdatedAt:1702664682,formattedLastUpdatedAt:"Dec 15, 2023",frontMatter:{title:"Support for different authentication environments",description:"When you embed a dossier in an application, you want it to display as easily and quickly as possible. This can mean seamlessly, without requiring that the user enter credentials at all, or simply scanning a QR\xa0code by integrating with Badge. The code you write to achieve this depends on how authentication is configured for the environment where the embedded dossier is hosted. Samples or sample code are provided for different authentication environments."},sidebar:"tutorialSidebar",previous:{title:"Embedding SDK Playground",permalink:"/embedding-sdk-docs/playground"},next:{title:"Use guest authentication",permalink:"/embedding-sdk-docs/support-for-different-authentication-environments/guest-authentication-mode-only"}},p={},l=[],c={toc:l};function m(e){var t=e.components,n=(0,r.Z)(e,a);return(0,o.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"When you embed a dossier in an application, you want it to display as easily and quickly as possible. This can mean seamlessly, without requiring that the user enter credentials at all, or simply scanning a QR\xa0code. The code you write to achieve this depends on how authentication is configured for the environment where the embedded dossier is hosted. Examples or sample code are provided for different authentication environments."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/embedding-sdk-docs/support-for-different-authentication-environments/guest-authentication-mode-only"},"Use guest authentication")),(0,o.kt)("p",{parentName:"li"},"This introductory sample embeds an existing dossier on the MicroStrategy demo server. Because only Guest authentication is enabled on the demo server, no credentials are required and the embedded dossier is displayed seamlessly in the application."),(0,o.kt)("p",{parentName:"li"},"There are also instructions for customizing the sample to use a different server and dossier. In order for the embedded dossier to be displayed seamlessly in that environment, the server you use must be configured to have only Guest authentication.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/embedding-sdk-docs/support-for-different-authentication-environments/multiple-modes"},"Use guest authentication with multiple authentication modes enabled")),(0,o.kt)("p",{parentName:"li"},"This sample illustrates how to seamlessly display an embedded dossier in a simple application using Guest authentication, in an environment with multiple authentication modes enabled. The application includes code that specifically enables Guest authentication for the embedded dossier.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/embedding-sdk-docs/support-for-different-authentication-environments/standard-authentication"},"Use standard authentication"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/embedding-sdk-docs/support-for-different-authentication-environments/authentication-saml"},"Use SAML or OIDC authentication")),(0,o.kt)("p",{parentName:"li"},"This sample illustrates how to embed a dossier using SAML and OIDC authentication.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/embedding-sdk-docs/support-for-different-authentication-environments/seamless-login"},"Seamless login using identity token")),(0,o.kt)("p",{parentName:"li"},"This page shows you the workflow and implementation of a seamless login experience if your user has already authenticated."))),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"If you plan to use Embedding SDK on a web page on a different domain from your MicroStrategy environment, please also meet the following requirements. More information in"),(0,o.kt)("ol",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"/embedding-sdk-docs/config"},"Enable Cross-Origin Resource Sharing (CORS)")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"/embedding-sdk-docs/config#allow-samesite-cookies"},"Allow SameSite cookies"))),(0,o.kt)("p",{parentName:"admonition"},"If you plan to use Embedding SDK on the same domain as your MicroStrategy, the above changes are not required.")))}m.isMDXComponent=!0}}]);