---
title: Introduction to the Embedding SDK
date: Last Modified
slug: /
eleventyNavigation:
  key: Introduction to the Embedding SDK
---

The Embedding SDK allows you to quickly integrate a MicroStrategy dossier into a web application in a responsive manner. It also provides resources to add functionality such as controlling navigation, retrieving and applying filters, setting properties, and managing events, and supports several different authentication environments.

There are three basic steps for embedding a dossier.

1. In the initial page of your web application, add a link to the MicroStrategy JavaScript Embedding SDK.

   ```html
   <script src="{YOUR_LIBRARY_SERVER_URL}/javascript/embeddinglib.js"></script>
   ```

   Replace `{YOUR_LIBRARY_SERVER_URL}` with your actual MicroStrategy Library Server URL, e.g., <https://demo.microstrategy.com/MicroStrategyLibrary>.

2. Create a `<div>` as the placeholder where you want to embed the dossier.

   ```html
   <div id="dossierContainer"></div>
   ```

3. Call the `microstrategy.dossier.create(props)` method when the application has finished loading.

   ```js
   var placeholderDiv = document.getElementById("dossierContainer");
   microstrategy.dossier.create({
     placeholder: placeholderDiv,
     url: { YOUR_LIBRARY_SERVER_URL } / app / { PROJECT_ID } / { DOSSIER_ID },
   });
   ```

To help you get started, we have provided a number of simple applications with sample code and explanations.

- [Support for Different Authentication Environments](./support-for-different-authentication-environments)

  Samples that display an embedded dossier in different authentication environments

- [Add Functionality](./add-functionality/index)

  Samples that add functionality, such as controlling navigation, retrieving and applying filters, setting properties, and managing events like page changes

- [Workflow to Use REST APIs and the Embedding SDK](./workflow)

  Sample workflow using REST APIs to authenticate and search for documents in a specific folder, and then use the JavaScript Embedding SDK to embed a document selected from the search results

- [More Embedding SDK Samples on Github](https://microstrategy.github.io/embedding-sdk-samples/)

  A collection of samples highlighting functionality and workflows of the Embedding SDK. You can play with the samples with no setup.

> If the application server is different from the server running the MicroStrategyLibrary application, you may need to [perform additional configuration to support Cross-Origin Requests (CORS)](./config).

To see changes to the Embedding SDK in the current release, refer to [What's New](./whats-new-in-the-embedding-sdk).

To maintain your current customizations and take advantage of new features, refer to [Upgrading to a newer version of MicroStrategy](./upgrade).

For earlier versions of the Embedding SDK, refer to [Previous Releases.](https://lw.microstrategy.com/msdz/MSDL/GARelease_Current/docs/previousReleases.html)

To see examples and explore functionalities of Embedding SDK, visit [Embedding SDK Playground](https://microstrategy.github.io/playground/)
