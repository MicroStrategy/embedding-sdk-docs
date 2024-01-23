"use strict";(self.webpackChunkembedding_sdk_docs=self.webpackChunkembedding_sdk_docs||[]).push([[5754],{8393:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>r,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var t=i(5893),d=i(1151);const s={title:"Add functionality to an embedded dossier",description:"Once you have embedded a dossier, you can use helper methods in the Embedding SDK to add other functionality. The topics in this section describe how to implement different kinds of functionalities with code examples."},o=void 0,a={id:"add-functionality/add-functionality",title:"Add functionality to an embedded dossier",description:"Once you have embedded a dossier, you can use helper methods in the Embedding SDK to add other functionality. The topics in this section describe how to implement different kinds of functionalities with code examples.",source:"@site/docs/add-functionality/add-functionality.md",sourceDirName:"add-functionality",slug:"/add-functionality/",permalink:"/embedding-sdk-docs/add-functionality/",draft:!1,unlisted:!1,editUrl:"https://github.com/MicroStrategy/embedding-sdk-docs/tree/public/docs/add-functionality/add-functionality.md",tags:[],version:"current",lastUpdatedBy:"Aran0011",lastUpdatedAt:1705984794,formattedLastUpdatedAt:"Jan 23, 2024",frontMatter:{title:"Add functionality to an embedded dossier",description:"Once you have embedded a dossier, you can use helper methods in the Embedding SDK to add other functionality. The topics in this section describe how to implement different kinds of functionalities with code examples."},sidebar:"tutorialSidebar",previous:{title:"Seamless login using identity token",permalink:"/embedding-sdk-docs/support-for-different-authentication-environments/seamless-login"},next:{title:"Methods and properties for an embedded dossier",permalink:"/embedding-sdk-docs/add-functionality/methods-and-properties"}},r={},l=[];function c(e){const n={a:"a",admonition:"admonition",li:"li",ol:"ol",p:"p",ul:"ul",...(0,d.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Once you have embedded a dossier, you can use helper methods in the Embedding SDK to add other functionality. The topics in this section describe how to implement different kinds of functionalities with code examples."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/embedding-sdk-docs/add-functionality/methods-and-properties",children:"Methods and properties for an embedded dossier"})}),"\n",(0,t.jsx)(n.p,{children:"Describes the properties that can be set for an embedded dossier. Provides an example that modifies UI elements like the navigation bar and size of the embedded dossier through properties."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/embedding-sdk-docs/add-functionality/add-nav",children:"Add navigation"})}),"\n",(0,t.jsx)(n.p,{children:"Describes the methods that can be used for navigation within an embedded dossier. For example, the Embedding SDK lets you add code to get the table of contents for the dossier, go to the previous or next page, navigate to a specific page, get the current page or chapter, get a specific page, or get a list of pages, chapters and visualizations. Provides an example that illustrates how to include navigation controls to allow users to page through the various chapters and pages of an embedded dossier."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/embedding-sdk-docs/add-functionality/add-event",children:"Add event handling"})}),"\n",(0,t.jsx)(n.p,{children:"Describes events that an embedded dossier can use to communicate with the container page and methods and wrapper functions for registering event handlers. For example, the Embedding SDK lets you add code to capture selection events from one dossier and apply them as a filter to a second dossier. Provides an example that illustrates how to capture selection events from one embedded dossier and apply them as a filter to a second dossier."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/embedding-sdk-docs/add-functionality/filters",children:"Retrieve and apply filters"})}),"\n",(0,t.jsx)(n.p,{children:"Describes how to retrieve and apply filters for an embedded dossier and shows the filter details for each filter type, with code examples. For example, you can apply different kinds of filters to a chapter in a dossier, either during execution or after a dossier has been rendered. Provides examples on how to retrieve filters and apply each different type of filter."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/embedding-sdk-docs/add-functionality/error-handling",children:"Error handling"})}),"\n",(0,t.jsx)(n.p,{children:"Describes how to implement custom error handler to handle errors."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/embedding-sdk-docs/add-functionality/panel-stacks",children:"Interact with panel stacks"})}),"\n",(0,t.jsx)(n.p,{children:"Describes how to interact with panel stacks within dossier. Provides an example on panel-related APIs."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/embedding-sdk-docs/add-functionality/embed-vis",children:"Embed a single visualization"})}),"\n",(0,t.jsx)(n.p,{children:"Describes how to embed a single visualization and set it to be maximized. Provides an example that shows embedding a dossier with a single visualization maximized and options to change which visualization to be maximized."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/embedding-sdk-docs/add-functionality/attribute-element-selection",children:"Enable the selection of attribute elements"})}),"\n",(0,t.jsx)(n.p,{children:"Describes how to programmatically make attribute element selections on an embedded dossier and capture the selection events."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/embedding-sdk-docs/add-functionality/authoring-library",children:"Author an embedded dossier"})}),"\n",(0,t.jsx)(n.p,{children:"Describes how to embed a dossier in authoring or edit mode during the initial dossier load and after the dossier is loaded."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.admonition,{type:"tip",children:[(0,t.jsx)(n.p,{children:"If you plan to use Embedding SDK on a web page on a different domain from your MicroStrategy environment, please also meet the following requirements. More information in"}),(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/embedding-sdk-docs/config",children:"Enable Cross-Origin Resource Sharing (CORS)"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/embedding-sdk-docs/config#allow-samesite-cookies",children:"Allow SameSite cookies"})}),"\n"]}),(0,t.jsx)(n.p,{children:"If you plan to use Embedding SDK on the same domain as your MicroStrategy, the above changes are not required."})]})]})}function h(e={}){const{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>a,a:()=>o});var t=i(7294);const d={},s=t.createContext(d);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);