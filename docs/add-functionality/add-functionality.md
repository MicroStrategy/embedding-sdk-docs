---
title: Add functionality to an embedded dashboard
description: Once you have embedded a dossier, you can use helper methods in the Embedding SDK to add other functionality. The topics in this section describe how to implement different kinds of functionalities with code examples.
---

Once you have embedded a dossier, you can use helper methods in the Embedding SDK to add other functionality. The topics in this section describe how to implement different kinds of functionalities with code examples.

- [Methods and properties for an embedded dashboard](./methods-and-properties.md)

  Describes the properties that can be set for an embedded dashboard. Provides an example that modifies UI elements like the navigation bar and size of the embedded dashboard through properties.

- [Add navigation](./add-nav.md)

  Describes the methods that can be used for navigation within an embedded dashboard. For example, the Embedding SDK lets you add code to get the table of contents for the dossier, go to the previous or next page, navigate to a specific page, get the current page or chapter, get a specific page, or get a list of pages, chapters and visualizations. Provides an example that illustrates how to include navigation controls to allow users to page through the various chapters and pages of an embedded dashboard.

- [Add event handling](./add-event.md)

  Describes events that an embedded dashboard can use to communicate with the container page and methods and wrapper functions for registering event handlers. For example, the Embedding SDK lets you add code to capture selection events from one dashboard and apply them as a filter to a second dashboard. Provides an example that illustrates how to capture selection events from one embedded dashboard and apply them as a filter to a second dashboard.

- [Retrieve and apply filters](./filters.md)

  Describes how to retrieve and apply filters for an embedded dashboard and shows the filter details for each filter type, with code examples. For example, you can apply different kinds of filters to a chapter in a dossier, either during execution or after a dashboard has been rendered. Provides examples on how to retrieve filters and apply each different type of filter.

- [Error handling](./error-handling.md)

  Describes how to implement custom error handler to handle errors.

- [Interact with panel stacks](./panel-stacks.md)

  Describes how to interact with panel stacks within dashboard. Provides an example on panel-related APIs.

- [Embed a single visualization](./embed-vis.md)

  Describes how to embed a single visualization and set it to be maximized. Provides an example that shows embedding a dashboard with a single visualization maximized and options to change which visualization to be maximized.

- [Enable the selection of attribute elements](./attribute-element-selection.md)

  Describes how to programmatically make attribute element selections on an embedded dashboard and capture the selection events.

- [Author an embedded dashboard](./authoring-library.md)

  Describes how to embed a dashboard in authoring or edit mode during the initial dashboard load and after the dashboard is loaded.

:::tip

If you plan to use Embedding SDK on a web page on a different domain from your MicroStrategy environment, please also meet the following requirements. More information in

1. [Enable Cross-Origin Resource Sharing (CORS)](../config.md)
1. [Allow SameSite cookies](../config.md#allow-samesite-cookies)

If you plan to use Embedding SDK on the same domain as your MicroStrategy, the above changes are not required.

:::
