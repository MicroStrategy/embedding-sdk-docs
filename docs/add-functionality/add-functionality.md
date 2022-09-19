---
title: Add functionality to an embedded dossier
description: Once you have embedded a dossier, you can use helper methods in the Embedding SDK to add other functionality. The topics in this section describe how to implement different kinds of functionalities with code examples.
---

Once you have embedded a dossier, you can use helper methods in the Embedding SDK to add other functionality. The topics in this section describe how to implement different kinds of functionalities with code examples.

- [Methods and Properties for an Embedded Dossier](./methods-and-properties)

  Describes the properties that can be set for an embedded dossier. Provides an example that modifies UI elements like the navigation bar and size of the embedded dossier through properties.

- [Add Navigation](./add-nav)

  Describes the methods that can be used for navigation within an embedded dossier. For example, the Embedding SDK lets you add code to get the table of contents for the dossier, go to the previous or next page, navigate to a specific page, get the current page or chapter, get a specific page, or get a list of pages, chapters and visualizations. Provides an example that illustrates how to include navigation controls to allow users to page through the various chapters and pages of an embedded dossier.

- [Add Event Handling](./add-event)

  Describes events that an embedded dossier can use to communicate with the container page and methods and wrapper functions for registering event handlers. For example, the Embedding SDK lets you add code to capture selection events from one dossier and apply them as a filter to a second dossier. Provides an example that illustrates how to capture selection events from one embedded dossier and apply them as a filter to a second dossier.

- [Retrieve and Apply Filters](./filters)

  Describes how to retrieve and apply filters for an embedded dossier and shows the filter details for each filter type, with code examples. For example, you can apply different kinds of filters to a chapter in a dossier, either during execution or after a dossier has been rendered. Provides examples on how to retrieve filters and apply each different type of filter.

- [Error Handling](./error-handling)

  Describes how to implement custom error handler to handle errors.

- [Interact with Panel Stacks](./panel-stacks)

  Describes how to interact with panel stacks within dossier. Provides an example on panel-related APIs.

- [Embed a Single Visualization](./embed-vis)

  Describes how to embed a single visualization and set it to be maximized. Provides an example that shows embedding a dossier with a single visualization maximized and options to change which visualization to be maximized.

- [Enable the Selection of Attribute Elements](./attribute-element-selection)

  Describes how to programmatically make attribute element selections on an embedded dossier and capture the selection events.

- [Author an Embedded Dossier](./authoring-library)

  Describes how to embed a dossier in authoring or edit mode during the initial dossier load and after the dossier is loaded.

:::tip

If you plan to use Embedding SDK on a web page on a different domain from your MicroStrategy environment, please also meet the following requirements. More information in

1. [Enable Cross-Origin Resource Sharing (CORS)](../config)
1. [Allow Cross-Origin Cookies](../config#allow-cross-origin-cookies)

If you plan to use Embedding SDK on the same domain as your MicroStrategy, the above changes are not required.

:::
