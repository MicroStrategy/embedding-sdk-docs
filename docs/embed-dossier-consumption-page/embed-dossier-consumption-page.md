---
title: Embed MicroStrategy dossier consumption page
description: The Embedding SDK allows you to quickly integrate a MicroStrategy dossier consumption page into a web application in a responsive manner. It also provides resources to add functionalities such as toggling the navigation bar and setting the visibility of icons in the navigation bar.
---

The Embedding SDK allows you to quickly integrate a MicroStrategy dossier consumption page into a web application in a responsive manner. It also provides resources to add functionalities such as toggling the navigation bar and setting the visibility of icons in the navigation bar.

There are three basic steps for embedding a MicroStrategy dossier consumption page.

1. In the initial page of your web application, add a link to the MicroStrategy JavaScript Embedding SDK.

   ```html
   <script src="{YOUR_LIBRARY_SERVER_URL}/javascript/embeddinglib.js"></script>
   ```

   Replace `{YOUR_LIBRARY_SERVER_URL}` with your actual MicroStrategy Library Server URL, e.g., [https://demo.microstrategy.com/MicroStrategyLibrary](https://demo.microstrategy.com/MicroStrategyLibrary).

1. Create a `<div>` as the placeholder where you want to embed the dossier consumption page.

   ```html
   <div id="container"></div>
   ```

1. Call the `microstrategy.embeddingContexts.embedDossierConsumptionPage(props)` method to embed the dossier consumption page in the container.

   ```js
   microstrategy.embeddingContexts.embedDossierConsumptionPage({
     serverUrl: "{YOUR_LIBRARY_SERVER_URL}",
     projectId: "{YOUR_PROJECT_ID}",
     objectId: "{YOUR_OBJECT_ID}",
     placeholder: document.getElementById("container"),
   });
   ```

The `microstrategy.embeddingContexts.embedDossierConsumptionPage(props)` API is an upgraded version of `microstrategy.dossier.create(props)`. Both of these 2 APIs embed the dossier consumption page after the initial loading, but `microstrategy.embeddingContexts.embedDossierConsumptionPage(props)` supports the user to navigate between the dossier consumption pages and the other types of pages, like Library homepage and report pages, while `microstrategy.dossier.create(props)` doesn't support that.

To help you get started, we have provided a number of simple applications with sample code and explanations.

- [Properties for an embedded MicroStrategy dossier consumption page](./embed-dossier-consumption-properties.md)

  Describes the properties that can be set for an embedded MicroStrategy dossier consumption page.

- [Dossier consumption page APIs](../embedding-context/dossier-consumption-page-apis.md)

  Describes which Embedding SDK APIs are available on the MicroStrategy dossier consumption page.
