"use strict";(self.webpackChunkembedding_sdk_docs=self.webpackChunkembedding_sdk_docs||[]).push([[7701],{3024:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var i=n(5893),o=n(1151);const s={title:"Use SAML or OIDC authentication",description:"The example in this topic illustrates how to display an embedded dashboard using SAML authentication. The same code works for OIDC except the `loginMode` parameter."},a=void 0,r={id:"support-for-different-authentication-environments/authentication-saml",title:"Use SAML or OIDC authentication",description:"The example in this topic illustrates how to display an embedded dashboard using SAML authentication. The same code works for OIDC except the `loginMode` parameter.",source:"@site/docs/support-for-different-authentication-environments/authentication-saml.md",sourceDirName:"support-for-different-authentication-environments",slug:"/support-for-different-authentication-environments/authentication-saml",permalink:"/embedding-sdk-docs/support-for-different-authentication-environments/authentication-saml",draft:!1,unlisted:!1,editUrl:"https://github.com/MicroStrategy/embedding-sdk-docs/tree/public/docs/support-for-different-authentication-environments/authentication-saml.md",tags:[],version:"current",lastUpdatedBy:"Aran0011",lastUpdatedAt:1710401361,formattedLastUpdatedAt:"Mar 14, 2024",frontMatter:{title:"Use SAML or OIDC authentication",description:"The example in this topic illustrates how to display an embedded dashboard using SAML authentication. The same code works for OIDC except the `loginMode` parameter."},sidebar:"tutorialSidebar",previous:{title:"Use standard authentication",permalink:"/embedding-sdk-docs/support-for-different-authentication-environments/standard-authentication"},next:{title:"Seamless login using identity token",permalink:"/embedding-sdk-docs/support-for-different-authentication-environments/seamless-login"}},d={},l=[{value:"The workflow",id:"the-workflow",level:2}];function c(e){const t={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["The example in this topic illustrates how to display an embedded dashboard using SAML authentication. The same code works for OIDC except the ",(0,i.jsx)(t.code,{children:"loginMode"})," parameter."]}),"\n",(0,i.jsxs)(t.p,{children:["A live example can be seen on ",(0,i.jsx)(t.a,{href:"https://microstrategy.github.io/embedding-sdk-samples/feature_showcase/4_Use_SAML.html",children:"GitHub"}),". Also check out ",(0,i.jsx)(t.a,{href:"https://microstrategy.github.io/embedding-sdk-samples/",children:"other examples"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"the-workflow",children:"The workflow"}),"\n",(0,i.jsx)(t.p,{children:"Here is the workflow of the example."}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Client Application checks if auth token is still valid. If yes, jumps to Step 4."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Client Application opens the MicroStrategy Library Web login page (",(0,i.jsx)(t.code,{children:"https://[Your MicroStrategy Environment]/MicroStrategyLibrary/auth/login-dialog.jsp"}),") in a new tab. The login page will be responsible for showing a login dialog."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"After the user finishes logging in, the login page will send a JavaScript message to inform the Client Application."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"The Client Application gets the message, fetches the auth token, and uses it to make REST API calls or uses it in MicroStrategy\u2019s Embedding SDK."}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>a});var i=n(7294);const o={},s=i.createContext(o);function a(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);