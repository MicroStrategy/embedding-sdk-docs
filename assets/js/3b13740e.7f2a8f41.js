"use strict";(self.webpackChunkembedding_sdk_docs=self.webpackChunkembedding_sdk_docs||[]).push([[2046],{6269:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=i(5893),a=i(1151);const o={title:"How to handle dashboard link in email notifications when sharing content",description:"The client application could get the embed URL from the application settings."},r=void 0,s={id:"add-functionality/use-custom-dossier-link",title:"How to handle dashboard link in email notifications when sharing content",description:"The client application could get the embed URL from the application settings.",source:"@site/docs/add-functionality/use-custom-dossier-link.md",sourceDirName:"add-functionality",slug:"/add-functionality/use-custom-dossier-link",permalink:"/embedding-sdk-docs/add-functionality/use-custom-dossier-link",draft:!1,unlisted:!1,editUrl:"https://github.com/MicroStrategy/embedding-sdk-docs/tree/public/docs/add-functionality/use-custom-dossier-link.md",tags:[],version:"current",lastUpdatedBy:"Aran0011",lastUpdatedAt:1710401361,formattedLastUpdatedAt:"Mar 14, 2024",frontMatter:{title:"How to handle dashboard link in email notifications when sharing content",description:"The client application could get the embed URL from the application settings."},sidebar:"tutorialSidebar",previous:{title:"Author an embedded dashboard",permalink:"/embedding-sdk-docs/add-functionality/authoring-library"},next:{title:"Embed MicroStrategy Library home page",permalink:"/embedding-sdk-docs/embed-library-main-page/"}},d={},c=[];function l(e){const t={code:"code",img:"img",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:'In a client application that embeds a dashboard page, if you want the share link in the embedded dashboard page to be the client application URL instead of the embedded dashboard URL, you need to configure the "Host Web Portal" in the client application settings:'}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Host Web Portal",src:i(2073).Z+"",width:"1924",height:"1472"})}),"\n",(0,n.jsx)(t.p,{children:'If you set the "Host Web Portal" value to be the URL of the client application, when you share the dashboard via email:'}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Share Dashboard Email",src:i(6397).Z+"",width:"1606",height:"1526"})}),"\n",(0,n.jsx)(t.p,{children:"The link in the email would be a url like:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-url",children:"http://{hostWebPortal}?mstrLibraryLink=https%3A%2F%2Fdemo%2Emicrostrategy%2Ecom%3A8080%2FMicroStrategyLibrary%2Fapp%2F9D8A49D54E04E0BE62C877ACC18A5A0A%2F0627433046E1B80BCE681C87E48F5C28%2Fbookmarks%3Fids%3D77776092475755EE696EEABF94CF3A61\n"})}),"\n",(0,n.jsxs)(t.p,{children:["You can see it's the client application URL, not the embedded dashboard URL. However, in this URL, the url-encoded result of the embedded dashboard url is still stored in the value of the query parameter ",(0,n.jsx)(t.code,{children:"mstrLibraryLink"}),". In the above case, it's the url-encoded result of"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-url",children:"https://demo.microstrategy.com:8080/MicroStrategyLibrary/app/9D8A49D54E04E0BE62C877ACC18A5A0A/0627433046E1B80BCE681C87E48F5C28/bookmarks?ids=77776092475755EE696EEABF94CF3A61\n"})}),"\n",(0,n.jsxs)(t.p,{children:["So the client application could use this URL to recover the status of the embedded dashboard page. It could get the embedded dashboard url via the parameter ",(0,n.jsx)(t.code,{children:"mstrLibraryLink"})," like this:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:'// The original embeded dashboard URL. Would be used if there is no "mstrLibraryLink" parameter\nlet dossierUrl =\n  "https://demo.microstrategy.com:8080/MicroStrategyLibrary/app/9D8A49D54E04E0BE62C877ACC18A5A0A/0627433046E1B80BCE681C87E48F5C28";\n// The logic to get the embedded dashboard URL\nconst url = new URL(window.location.href);\nconst mstrLibraryLink = url.searchParams.get("mstrLibraryLink");\n// Use this URL to replace the original URL if you want\nif (mstrLibraryLink) {\n  dossierUrl = mstrLibraryLink;\n}\n\nmicrostrategy.dossier.create({\n  url: dossierUrl,\n  placeholder: document.getElementById("containerA"),\n});\n'})})]})}function h(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},2073:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/application-config-9e97ce0d047d3028727bc69e5829b361.png"},6397:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/dossier-email-04b2e5903972ff3549f0df3a9c28bcb6.png"},1151:(e,t,i)=>{i.d(t,{Z:()=>s,a:()=>r});var n=i(7294);const a={},o=n.createContext(a);function r(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);