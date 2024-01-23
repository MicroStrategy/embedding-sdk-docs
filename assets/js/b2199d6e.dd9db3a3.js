"use strict";(self.webpackChunkembedding_sdk_docs=self.webpackChunkembedding_sdk_docs||[]).push([[3051],{8505:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var o=n(5893),i=n(1151);const r={title:"Embed MicroStrategy bot consumption page",description:"The Embedding SDK allows you to quickly integrate a MicroStrategy bot consumption page into a web application in a responsive manner."},s=void 0,a={id:"embed-bot-consumption-page/embed-bot-consumption-page",title:"Embed MicroStrategy bot consumption page",description:"The Embedding SDK allows you to quickly integrate a MicroStrategy bot consumption page into a web application in a responsive manner.",source:"@site/docs/embed-bot-consumption-page/embed-bot-consumption-page.md",sourceDirName:"embed-bot-consumption-page",slug:"/embed-bot-consumption-page/",permalink:"/embedding-sdk-docs/embed-bot-consumption-page/",draft:!1,unlisted:!1,editUrl:"https://github.com/MicroStrategy/embedding-sdk-docs/tree/public/docs/embed-bot-consumption-page/embed-bot-consumption-page.md",tags:[],version:"current",lastUpdatedBy:"ryu_mstr",lastUpdatedAt:1705977266,formattedLastUpdatedAt:"Jan 23, 2024",frontMatter:{title:"Embed MicroStrategy bot consumption page",description:"The Embedding SDK allows you to quickly integrate a MicroStrategy bot consumption page into a web application in a responsive manner."},sidebar:"tutorialSidebar",previous:{title:"Properties for an embedded MicroStrategy dossier consumption page",permalink:"/embedding-sdk-docs/embed-dossier-consumption-page/embed-dossier-consumption-properties"},next:{title:"Properties for an embedded MicroStrategy bot consumption page",permalink:"/embedding-sdk-docs/embed-bot-consumption-page/embed-bot-consumption-properties"}},d={},c=[];function p(e){const t={a:"a",code:"code",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"The Embedding SDK allows you to quickly integrate a MicroStrategy bot consumption page into a web application in a responsive manner."}),"\n",(0,o.jsx)(t.p,{children:"There are three basic steps for embedding a MicroStrategy bot consumption page."}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:"In the initial page of your web application, add a link to the MicroStrategy JavaScript Embedding SDK."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-html",children:'<script src="{YOUR_LIBRARY_SERVER_URL}/javascript/embeddinglib.js"><\/script>\n'})}),"\n",(0,o.jsxs)(t.p,{children:["Replace ",(0,o.jsx)(t.code,{children:"{YOUR_LIBRARY_SERVER_URL}"})," with your actual MicroStrategy Library Server URL, e.g., ",(0,o.jsx)(t.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary",children:"https://demo.microstrategy.com/MicroStrategyLibrary"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["Create a\xa0",(0,o.jsx)(t.code,{children:"<div>"}),"\xa0as the placeholder where you want to embed the bot consumption page."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-html",children:'<div id="container"></div>\n'})}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["Call the\xa0",(0,o.jsx)(t.code,{children:"microstrategy.embeddingContexts.embedBotConsumptionPage(props)"}),"\xa0method to embed the bot consumption page in the container."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:'microstrategy.embeddingContexts.embedBotConsumptionPage({\n  serverUrl: "{YOUR_LIBRARY_SERVER_URL}",\n  projectId: "{YOUR_PROJECT_ID}",\n  objectId: "{YOUR_OBJECT_ID}",\n  placeholder: document.getElementById("container"),\n});\n'})}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"To help you get started, we have provided a number of simple applications with sample code and explanations."}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"/embedding-sdk-docs/embed-bot-consumption-page/embed-bot-consumption-properties",children:"Properties for an embedded MicroStrategy bot consumption page"})}),"\n",(0,o.jsx)(t.p,{children:"Describes the properties that can be set for an embedded MicroStrategy bot consumption page."}),"\n"]}),"\n"]})]})}function m(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>s});var o=n(7294);const i={},r=o.createContext(i);function s(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);