"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[53],{1109:function(e){e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"Introduction to the Embedding SDK","href":"/embedding-sdk-docs/","docId":"index"},{"type":"link","label":"What\'s new in the Embedding SDK","href":"/embedding-sdk-docs/whats-new-in-the-embedding-sdk","docId":"whats-new-in-the-embedding-sdk"},{"type":"link","label":"Configure Library Server for embedding","href":"/embedding-sdk-docs/config","docId":"config"},{"type":"link","label":"Embedding SDK Playground","href":"/embedding-sdk-docs/playground","docId":"playground"},{"type":"category","label":"Support for different authentication environments","items":[{"type":"link","label":"Use guest authentication","href":"/embedding-sdk-docs/support-for-different-authentication-environments/guest-authentication-mode-only","docId":"support-for-different-authentication-environments/guest-authentication-mode-only"},{"type":"link","label":"Use guest authentication with multiple authentication modes enabled","href":"/embedding-sdk-docs/support-for-different-authentication-environments/multiple-modes","docId":"support-for-different-authentication-environments/multiple-modes"},{"type":"link","label":"Use SAML or OIDC authentication","href":"/embedding-sdk-docs/support-for-different-authentication-environments/authentication-saml","docId":"support-for-different-authentication-environments/authentication-saml"},{"type":"link","label":"Seamless login using identity token","href":"/embedding-sdk-docs/support-for-different-authentication-environments/seamless-login","docId":"support-for-different-authentication-environments/seamless-login"}],"collapsed":true,"collapsible":true,"href":"/embedding-sdk-docs/support-for-different-authentication-environments/"},{"type":"category","label":"Add functionality to an embedded dossier","items":[{"type":"link","label":"Methods and properties for an embedded dossier","href":"/embedding-sdk-docs/add-functionality/methods-and-properties","docId":"add-functionality/methods-and-properties"},{"type":"link","label":"Add navigation","href":"/embedding-sdk-docs/add-functionality/add-nav","docId":"add-functionality/add-nav"},{"type":"link","label":"Add event handling","href":"/embedding-sdk-docs/add-functionality/add-event","docId":"add-functionality/add-event"},{"type":"link","label":"Retrieve and apply filters","href":"/embedding-sdk-docs/add-functionality/filters","docId":"add-functionality/filters"},{"type":"link","label":"Error handling","href":"/embedding-sdk-docs/add-functionality/error-handling","docId":"add-functionality/error-handling"},{"type":"link","label":"Interact with panel stacks","href":"/embedding-sdk-docs/add-functionality/panel-stacks","docId":"add-functionality/panel-stacks"},{"type":"link","label":"Embed a single visualization","href":"/embedding-sdk-docs/add-functionality/embed-vis","docId":"add-functionality/embed-vis"},{"type":"link","label":"Enable the selection of attribute elements","href":"/embedding-sdk-docs/add-functionality/attribute-element-selection","docId":"add-functionality/attribute-element-selection"},{"type":"link","label":"Author an embedded dossier","href":"/embedding-sdk-docs/add-functionality/authoring-library","docId":"add-functionality/authoring-library"},{"type":"link","label":"How to handle dossier link in email notifications when sharing content","href":"/embedding-sdk-docs/add-functionality/use-custom-dossier-link","docId":"add-functionality/use-custom-dossier-link"}],"collapsed":true,"collapsible":true,"href":"/embedding-sdk-docs/add-functionality/"},{"type":"category","label":"Embed MicroStrategy Library home page","items":[{"type":"link","label":"Properties for an embedded MicroStrategy Library home page","href":"/embedding-sdk-docs/embed-library-main-page/embed-library-properties","docId":"embed-library-main-page/embed-library-properties"},{"type":"link","label":"Library page APIs","href":"/embedding-sdk-docs/embed-library-main-page/library-page-apis","docId":"embed-library-main-page/library-page-apis"},{"type":"link","label":"The customized UI settings in Embedding SDK","href":"/embedding-sdk-docs/embed-library-main-page/embed-custom-ui-on-all-pages","docId":"embed-library-main-page/embed-custom-ui-on-all-pages"}],"collapsed":true,"collapsible":true,"href":"/embedding-sdk-docs/embed-library-main-page/"},{"type":"link","label":"More examples","href":"/embedding-sdk-docs/samples","docId":"samples"}]},"docs":{"add-functionality/add-event":{"id":"add-functionality/add-event","title":"Add event handling","description":"Events allow an embedded dossier to communicate with the container page. You can listen for these events and provide event handler functions to respond to them. You use helper methods in the Embedding SDK to add event handling. For example, you can add code to capture selection events from one dossier and apply them as a filter to a second dossier.","sidebar":"tutorialSidebar"},"add-functionality/add-functionality":{"id":"add-functionality/add-functionality","title":"Add functionality to an embedded dossier","description":"Once you have embedded a dossier, you can use helper methods in the Embedding SDK to add other functionality. The topics in this section describe how to implement different kinds of functionalities with code examples.","sidebar":"tutorialSidebar"},"add-functionality/add-nav":{"id":"add-functionality/add-nav","title":"Add navigation","description":"Once you have embedded a dossier, you can use helper methods in the Embedding SDK to let users navigate within the dossier. For example, you can add code to get the table of contents for the dossier, go to the previous or next page, navigate to a specific page, get the current page or chapter, get a specific page, or get a list of pages, chapters and visualizations.","sidebar":"tutorialSidebar"},"add-functionality/attribute-element-selection":{"id":"add-functionality/attribute-element-selection","title":"Enable the selection of attribute elements","description":"Attribute element selection within dossiers provides end-users with the ability to conveniently select attribute elements in visualizations in an embedding way. To provide continuity with our existing APIs and enable embedded applications to take advantage of this new design concept, we have updated existing endpoints and provided new embedding SDK functions.","sidebar":"tutorialSidebar"},"add-functionality/authoring-library":{"id":"add-functionality/authoring-library","title":"Author an embedded dossier","description":"To allow users to conveniently edit a dossier, Embedding SDK allows embedding a dossier in the authoring mode, whether it is during the initial load or in the view mode of the dossier.","sidebar":"tutorialSidebar"},"add-functionality/embed-vis":{"id":"add-functionality/embed-vis","title":"Embed a single visualization","description":"You can use the Embedding SDK to embed a dossier with a single visualization maximized. This gives the appearance of embedding a single visualization onto a page.","sidebar":"tutorialSidebar"},"add-functionality/error-handling":{"id":"add-functionality/error-handling","title":"Error handling","description":"MicroStrategy provides custom error handling in two stages, during dossier creation and after dossier creation.","sidebar":"tutorialSidebar"},"add-functionality/filters":{"id":"add-functionality/filters","title":"Retrieve and apply filters","description":"You can apply filters both when an embedded dossier is being executed and after the dossier has been rendered.","sidebar":"tutorialSidebar"},"add-functionality/methods-and-properties":{"id":"add-functionality/methods-and-properties","title":"Methods and properties for an embedded dossier","description":"When you embed a MicroStrategy dossier into a web page, you use the\xa0`create(props)`\xa0method under the\xa0`microstrategy.dossier`\xa0namespace.","sidebar":"tutorialSidebar"},"add-functionality/panel-stacks":{"id":"add-functionality/panel-stacks","title":"Interact with panel stacks","description":"Panel stacks provide end users with the ability to conveniently reuse segments of space within a dossier to represent data in multiple ways. MicroStrategy supports one level of nesting within panel stacks. You can switch panel stacks by using a selector or the panel stack header. An application can now develop external controls to paginate through the various displays within a panel stack. In addition, if the panel stack is switched by a user\'s manual input, an event handler notifies the parent application of this action, allowing it to perform filtering or any other desirable action.","sidebar":"tutorialSidebar"},"add-functionality/use-custom-dossier-link":{"id":"add-functionality/use-custom-dossier-link","title":"How to handle dossier link in email notifications when sharing content","description":"The client application could get the embed URL from the application settings.","sidebar":"tutorialSidebar"},"config":{"id":"config","title":"Configure Library Server for embedding","description":"If you plan to use Embedding SDK on a different domain from your MicroStrategy environment, please enable Cross-Origin Resource Sharing (CORS) and allow SameSite cookies.","sidebar":"tutorialSidebar"},"embed-library-main-page/embed-custom-ui-on-all-pages":{"id":"embed-library-main-page/embed-custom-ui-on-all-pages","title":"The customized UI settings in Embedding SDK","description":"The Embedding SDK enables you to customize the UI components of all embedded pages, like MicroStrategy home page, dossier consumption page, and dossier authoring page.","sidebar":"tutorialSidebar"},"embed-library-main-page/embed-library-main-page":{"id":"embed-library-main-page/embed-library-main-page","title":"Embed MicroStrategy Library home page","description":"The Embedding SDK allows you to quickly integrate a MicroStrategy Library home page into a web application in a responsive manner. It also provides resources to add functionality such as toggling the navigation bar and sidebar, and getting group data of the current user.","sidebar":"tutorialSidebar"},"embed-library-main-page/embed-library-properties":{"id":"embed-library-main-page/embed-library-properties","title":"Properties for an embedded MicroStrategy Library home page","description":"Describes the properties that can be set for an embedded MicroStrategy Library home page.","sidebar":"tutorialSidebar"},"embed-library-main-page/library-page-apis":{"id":"embed-library-main-page/library-page-apis","title":"Library page APIs","description":"Describes which Embedding SDK APIs are available on the MicroStrategy Library home page.","sidebar":"tutorialSidebar"},"index":{"id":"index","title":"Introduction to the Embedding SDK","description":"The Embedding SDK allows you to quickly integrate a MicroStrategy dossier into a web application in a responsive manner. It also provides resources to add functionality such as controlling navigation, retrieving and applying filters, setting properties, and managing events, and supports several different authentication environments.","sidebar":"tutorialSidebar"},"playground":{"id":"playground","title":"Embedding SDK Playground","description":"MicroStrategy\u2019s Embedding SDK Playground is the one-stop shop for developers to build impactful, interactive analytics experiences that integrate seamlessly with websites and applications.","sidebar":"tutorialSidebar"},"samples":{"id":"samples","title":"More examples","description":"There are examples hosted on [GitHub](https://microstrategy.github.io/embedding-sdk-samples/), from the simple example to showcase one specific feature of Embedding SDK to more complicated application with a lot of integration with MicroStrategy\'s REST API and third-party SDK.","sidebar":"tutorialSidebar"},"support-for-different-authentication-environments/authentication-saml":{"id":"support-for-different-authentication-environments/authentication-saml","title":"Use SAML or OIDC authentication","description":"The example in this topic illustrates how to display an embedded dossier using SAML authentication. The same code works for OIDC except the `loginMode` parameter.","sidebar":"tutorialSidebar"},"support-for-different-authentication-environments/guest-authentication-mode-only":{"id":"support-for-different-authentication-environments/guest-authentication-mode-only","title":"Use guest authentication","description":"The example in this topic illustrates how to seamlessly display an embedded dossier using Guest authentication when Guest is the only authentication mode that is enabled.","sidebar":"tutorialSidebar"},"support-for-different-authentication-environments/multiple-modes":{"id":"support-for-different-authentication-environments/multiple-modes","title":"Use guest authentication with multiple authentication modes enabled","description":"The example in this topic illustrates how to seamlessly display an embedded dossier using Guest authentication when multiple authentication modes are enabled.","sidebar":"tutorialSidebar"},"support-for-different-authentication-environments/seamless-login":{"id":"support-for-different-authentication-environments/seamless-login","title":"Seamless login using identity token","description":"How to do seamless login with identity token","sidebar":"tutorialSidebar"},"support-for-different-authentication-environments/support-for-different-authentication-environments":{"id":"support-for-different-authentication-environments/support-for-different-authentication-environments","title":"Support for different authentication environments","description":"When you embed a dossier in an application, you want it to display as easily and quickly as possible. This can mean seamlessly, without requiring that the user enter credentials at all, or simply scanning a QR\xa0code by integrating with Badge. The code you write to achieve this depends on how authentication is configured for the environment where the embedded dossier is hosted. Samples or sample code are provided for different authentication environments.","sidebar":"tutorialSidebar"},"whats-new-in-the-embedding-sdk":{"id":"whats-new-in-the-embedding-sdk","title":"What\'s new in the Embedding SDK","description":"In each release, changes are made to make the MicroStrategy SDK more powerful and easier to use.","sidebar":"tutorialSidebar"}}}')}}]);