---
title: Introduction to the Embedding SDK
slug: /
description: The Embedding SDK allows you to quickly integrate a MicroStrategy dossier into a web application in a responsive manner. It also provides resources to add functionality such as controlling navigation, retrieving and applying filters, setting properties, and managing events, and supports several different authentication environments.
---

The Embedding SDK allows you to quickly integrate a MicroStrategy dossier into a web application in a responsive manner. It also provides resources to add functionality such as controlling navigation, retrieving and applying filters, setting properties, and managing events, and supports several different authentication environments.

There are three basic steps for embedding a dossier.

1. In the initial page of your web application, add a link to the MicroStrategy JavaScript Embedding SDK.

   ```html
   <script src="{YOUR_LIBRARY_SERVER_URL}/javascript/embeddinglib.js"></script>
   ```

   Replace `{YOUR_LIBRARY_SERVER_URL}` with your actual MicroStrategy Library Server URL, e.g., <https://demo.microstrategy.com/MicroStrategyLibrary>.

   :::tip

   If the application server is different from the server running the MicroStrategyLibrary application, you may need to [perform additional configuration to support Cross-Origin Resource Sharing (CORS)](./config.md).

   :::

1. Create a `<div>` as the placeholder where you want to embed the dossier.

   ```html
   <div id="dossierContainer"></div>
   ```

1. Call the `microstrategy.dossier.create(props)` method when the application has finished loading.

   ```js
   var placeholderDiv = document.getElementById("dossierContainer");
   microstrategy.dossier.create({
     placeholder: placeholderDiv,
     url: "{YOUR_LIBRARY_SERVER_URL}/app/{PROJECT_ID}/{DOSSIER_ID}",
   });
   ```

   :::tip

   Check out all the [properties](./add-functionality/methods-and-properties.md#properties) you can set in the `microstrategy.dossier.create(props)` method. You can do many things with the [properties](./add-functionality/methods-and-properties.md#properties). To name a few, you can set filters, show/hide UI elements, and adjust the size of the embedded dossier.

   :::

To help you get started, we have provided a number of simple applications with sample code and explanations.

- [Support for different authentication environments](./support-for-different-authentication-environments/support-for-different-authentication-environments.md)

  Examples that display an embedded dossier in different authentication environments

- [Add functionality](./add-functionality/add-functionality.md)

  Examples that add functionality, such as controlling navigation, retrieving and applying filters, setting properties, and managing events like page changes

- [Embedding SDK Playground](https://microstrategy.github.io/playground/)

  A playground for developers to build impactful, interactive analytics experiences that integrate seamlessly with websites and applications.

- [More Embedding SDK examples on Github](https://microstrategy.github.io/embedding-sdk-samples/)

  A collection of examples highlighting functionality and workflows of the Embedding SDK. You can play with the examples with no setup.

To see changes to the Embedding SDK in the current release, refer to [What's new](./whats-new-in-the-embedding-sdk.md).
