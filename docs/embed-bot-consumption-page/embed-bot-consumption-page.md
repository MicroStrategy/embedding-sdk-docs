---
title: Embed Strategy agent consumption page
description: The Embedding SDK allows you to quickly integrate a Strategy agent consumption page into a web application in a responsive manner.
---

The Embedding SDK allows you to quickly integrate a Strategy agent consumption page into a web application in a responsive manner.

There are three basic steps for embedding a Strategy agent consumption page.

1. In the initial page of your web application, add a link to the Strategy JavaScript Embedding SDK.

   ```html
   <script src="{YOUR_LIBRARY_SERVER_URL}/javascript/embeddinglib.js"></script>
   ```

   Replace `{YOUR_LIBRARY_SERVER_URL}` with your actual Library Server URL, e.g., [https://demo.microstrategy.com/MicroStrategyLibrary](https://demo.microstrategy.com/MicroStrategyLibrary).

1. Create a `<div>` as the placeholder where you want to embed the agent consumption page.

   ```html
   <div id="container"></div>
   ```

1. Call the `microstrategy.embeddingContexts.embedBotConsumptionPage(props)` method to embed the agent consumption page in the container.

   ```js
   microstrategy.embeddingContexts.embedBotConsumptionPage({
     serverUrl: "{YOUR_LIBRARY_SERVER_URL}",
     projectId: "{YOUR_PROJECT_ID}",
     objectId: "{YOUR_OBJECT_ID}",
     placeholder: document.getElementById("container"),
   });
   ```

To help you get started, we have provided a number of simple applications with sample code and explanations.

- [Properties for an embedded Strategy agent consumption page](./embed-bot-consumption-properties.md)

  Describes the properties that can be set for an embedded Strategy agent consumption page.

- [Add agent event handling](./add-agent-event.md)

  Describes how to register event handlers for Strategy agent events.
