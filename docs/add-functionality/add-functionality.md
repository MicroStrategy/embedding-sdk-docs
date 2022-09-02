---
title: Add Functionality to an Embedded Dossier
description: Once you have embedded a dossier, you can use helper methods in the Embedding SDK to add other functionality. The topics in this section describe how to implement different kinds of functionalities with code examples.
---

Once you have embedded a dossier, you can use helper methods in the Embedding SDK to add other functionality. The topics in this section describe how to implement different kinds of functionalities with code examples.

- [Add Navigation](./add-nav)

  Describes the methods that can be used for navigation within an embedded dossier. For example, the Embedding SDK lets you add code to get the table of contents for the dossier, go to the previous or next page, navigate to a specific page, get the current page or chapter, get a specific page, or get a list of pages, chapters and visualizations. Provides an example that illustrates how to include navigation controls to allow users to page through the various chapters and pages of an embedded dossier.

- [Add Event Handling](./add-event)

  Describes events that an embedded dossier can use to communicate with the container page and methods and wrapper functions for registering event handlers. For example, the Embedding SDK lets you add code to capture selection events from one dossier and apply them as a filter to a second dossier. Provides an example that illustrates how to capture selection events from one embedded dossier and apply them as a filter to a second dossier.

- [Retrieve and Apply Filters](./filters)

  Describes how to retrieve and apply filters for an embedded dossier and shows the filter details for each filter type, with code examples. For example, you can apply different kinds of filters to a chapter in a dossier, either during execution or after a dossier has been rendered.

- [Deploy a Sample Application to Set Dossier Properties](./set-properties)

  Provides sample code for setting dossier properties. Properties can be set to customize the UI, features, and authentication. For example, you can add properties to set the height and width of the placeholder where the iFrame containing the dossier instance will be created and specify whether responsive design should be enabled; you can enable and disable many features; and you can set properties for custom authentication.

- [Methods and Properties for an Embedded Dossier](./methods-and-properties)

  Describes the properties that can be set for an embedded dossier.

:::tip

If you plan to use Embedding SDK on a web page on a different domain from your MicroStrategy environment, please also meet the following requirements. More information in

1. [Enable Cross-Origin Resource Sharing (CORS)](../config)
1. [Allow Cross-Origin Cookies](../config#allow-cross-origin-cookies)

If we plan to use Embedding SDK on the same domain as your MicroStrategy, the above changes are not required.

:::
