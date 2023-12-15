---
title: Embed MicroStrategy Library home page
description: The Embedding SDK allows you to quickly integrate a MicroStrategy Library home page into a web application in a responsive manner. It also provides resources to add functionality such as toggling the navigation bar and sidebar, and getting group data for the current user.
---

The Embedding SDK allows you to quickly integrate a MicroStrategy Library home page into a web application in a responsive manner. It also provides resources to add functionality such as toggling the navigation bar and sidebar, and getting group data for the current user.

There are three basic steps for embedding a MicroStrategy Library home page.

1. In the initial page of your web application, add a link to the MicroStrategy JavaScript Embedding SDK.

   ```html
   <script src="{YOUR_LIBRARY_SERVER_URL}/javascript/embeddinglib.js"></script>
   ```

   Replace `{YOUR_LIBRARY_SERVER_URL}` with your actual MicroStrategy Library Server URL, e.g., [https://demo.microstrategy.com/MicroStrategyLibrary](https://demo.microstrategy.com/MicroStrategyLibrary).

1. Create a `<div>` as the placeholder where you want to embed the Library home page.

   ```html
   <div id="LibraryHomePageContainer"></div>
   ```

1. Call the `microstrategy.embeddingContexts.embedLibraryPage(props)` method when the application has finished loading.

   ```js
   microstrategy.embeddingContexts.embedLibraryPage({
     serverUrl: "{YOUR_LIBRARY_SERVER_URL}",
     placeholder: document.getElementById("LibraryHomePageContainer"),
   });
   ```

To help you get started, we have provided a number of simple applications with sample code and explanations.

- [Properties for an embedded MicroStrategy Library home page](./embed-library-properties.md)

  Describes the properties that can be set for an embedded MicroStrategy Library home page.

- [Library page APIs](../embedding-context/library-page-apis.md)

  Describes which Embedding SDK APIs are available on the MicroStrategy Library home page.
