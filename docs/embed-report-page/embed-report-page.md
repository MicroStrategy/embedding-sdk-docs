---
title: Embed MicroStrategy report page
description: The Embedding SDK allows you to quickly integrate a MicroStrategy report page into a web application in a responsive manner. It also provides resources to add functionalities such as toggling the navigation bar and setting the visibility of icons in the navigation bar.
---

The Embedding SDK allows you to quickly integrate a MicroStrategy report page into a web application in a responsive manner. It also provides resources to add functionalities such as toggling the navigation bar and setting the visibility of icons in the navigation bar.

There are three basic steps for embedding a MicroStrategy report page.

1. In the initial page of your web application, add a link to the MicroStrategy JavaScript Embedding SDK.

   ```html
   <script src="{YOUR_LIBRARY_SERVER_URL}/javascript/embeddinglib.js"></script>
   ```

   Replace `{YOUR_LIBRARY_SERVER_URL}` with your actual MicroStrategy Library Server URL, e.g., [https://demo.microstrategy.com/MicroStrategyLibrary](https://demo.microstrategy.com/MicroStrategyLibrary).

1. Create a `<div>` as the placeholder where you want to embed the report.

   ```html
   <div id="reportContainer"></div>
   ```

1. Call the `microstrategy.embeddingContexts.embedReportPage(props)` method when the application has finished loading.

   ```js
   microstrategy.embeddingContexts.embedReportPage({
     serverUrl: "{YOUR_LIBRARY_SERVER_URL}",
     projectId: "{YOUR_PROJECT_ID}",
     objectId: "{YOUR_OBJECT_ID}",
     placeholder: document.getElementById("reportContainer"),
   });
   ```

To help you get started, we have provided a number of simple applications with sample code and explanations.

- [Properties for an embedded MicroStrategy report page](./embed-report-properties.md)

  Describes the properties that can be set for an embedded MicroStrategy report page.
