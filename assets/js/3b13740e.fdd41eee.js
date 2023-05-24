"use strict";(self.webpackChunkembedding_sdk_docs=self.webpackChunkembedding_sdk_docs||[]).push([[46],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=i,f=p["".concat(l,".").concat(m)]||p[m]||u[m]||o;return n?r.createElement(f,a(a({ref:t},d),{},{components:n})):r.createElement(f,a({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8950:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var r=n(3117),i=n(102),o=(n(7294),n(3905)),a=["components"],s={title:"How to handle dossier link in email notifications when sharing content",description:"The client application could get the embed URL from the application settings."},l=void 0,c={unversionedId:"add-functionality/use-custom-dossier-link",id:"add-functionality/use-custom-dossier-link",title:"How to handle dossier link in email notifications when sharing content",description:"The client application could get the embed URL from the application settings.",source:"@site/docs/add-functionality/use-custom-dossier-link.md",sourceDirName:"add-functionality",slug:"/add-functionality/use-custom-dossier-link",permalink:"/embedding-sdk-docs/add-functionality/use-custom-dossier-link",draft:!1,editUrl:"https://github.com/MicroStrategy/embedding-sdk-docs/tree/public/docs/add-functionality/use-custom-dossier-link.md",tags:[],version:"current",lastUpdatedBy:"elinmstr",lastUpdatedAt:1684941589,formattedLastUpdatedAt:"May 24, 2023",frontMatter:{title:"How to handle dossier link in email notifications when sharing content",description:"The client application could get the embed URL from the application settings."},sidebar:"tutorialSidebar",previous:{title:"Author an embedded dossier",permalink:"/embedding-sdk-docs/add-functionality/authoring-library"},next:{title:"Embed MicroStrategy Library home page",permalink:"/embedding-sdk-docs/embed-library-main-page/"}},d={},u=[],p={toc:u};function m(e){var t=e.components,s=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'In a client application that embeds a dossier page, if you want the share link in the embedded dossier page to be the client application URL instead of the embedded dossier URL, you need to configure the "Host Web Portal" in the client application settings:'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Host Web Portal",src:n(7558).Z,width:"1924",height:"1472"})),(0,o.kt)("p",null,'If you set the "Host Web Portal" value to be the URL of the client application, when you share the dossier via email:'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Share Dossier Email",src:n(7142).Z,width:"1606",height:"1526"})),(0,o.kt)("p",null,"The link in the email would be a url like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-url"},"http://{hostWebPortal}?mstrLibraryLink=https%3A%2F%2Fdemo%2Emicrostrategy%2Ecom%3A8080%2FMicroStrategyLibrary%2Fapp%2F9D8A49D54E04E0BE62C877ACC18A5A0A%2F0627433046E1B80BCE681C87E48F5C28%2Fbookmarks%3Fids%3D77776092475755EE696EEABF94CF3A61\n")),(0,o.kt)("p",null,"You can see it's the client application URL, not the embedded dossier URL. However, in this URL, the url-encoded result of the embedded dossier url is still stored in the value of the query parameter ",(0,o.kt)("inlineCode",{parentName:"p"},"mstrLibraryLink"),". In the above case, it's the url-encoded result of"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-url"},"https://demo.microstrategy.com:8080/MicroStrategyLibrary/app/9D8A49D54E04E0BE62C877ACC18A5A0A/0627433046E1B80BCE681C87E48F5C28/bookmarks?ids=77776092475755EE696EEABF94CF3A61\n")),(0,o.kt)("p",null,"So the client application could use this URL to recover the status of the embedded dossier page. It could get the embedded dossier url via the parameter ",(0,o.kt)("inlineCode",{parentName:"p"},"mstrLibraryLink")," like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'// The original embeded dossier URL. Would be used if there is no "mstrLibraryLink" parameter\nlet dossierUrl =\n  "https://demo.microstrategy.com:8080/MicroStrategyLibrary/app/9D8A49D54E04E0BE62C877ACC18A5A0A/0627433046E1B80BCE681C87E48F5C28";\n// The logic to get the embedded dossier URL\nconst url = new URL(window.location.href);\nconst mstrLibraryLink = url.searchParams.get("mstrLibraryLink");\n// Use this URL to replace the original URL if you want\nif (mstrLibraryLink) {\n  dossierUrl = mstrLibraryLink;\n}\n\nmicrostrategy.dossier.create({\n  url: dossierUrl,\n  placeholder: document.getElementById("containerA"),\n});\n')))}m.isMDXComponent=!0},7558:function(e,t,n){t.Z=n.p+"assets/images/application-config-9e97ce0d047d3028727bc69e5829b361.png"},7142:function(e,t,n){t.Z=n.p+"assets/images/dossier-email-04b2e5903972ff3549f0df3a9c28bcb6.png"}}]);