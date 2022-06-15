---
sidebar_position: 5
title: Add Functionality to an Embedded Dossier
date: Last Modified
permalink:
eleventyNavigation:
  key: Add Functionality to an Embedded Dossier
---

Once you have embedded a dossier, you can use helper methods in the Embedding SDK to add other functionality. The topics in this section describe how to implement different kinds of functionality, with code samples, descriptions of parameters, and sample applications.

- [Add Navigation to an Embedded Dossier](./add-nav)

  Describes the methods that can be used for navigation within an embedded dossier. For example, the Embedding SDK lets you add code to get the table of contents for the dossier, go to the previous or next page, navigate to a specific page, get the current page or chapter, get a specific page, or get a list of pages, chapters and visualizations. Provides a sample that illustrates how to include navigation controls to allow users to page through the various chapters and pages of an embedded dossier.

- [Add Event Handling to an Embedded Dossier](./add-event)

  Describes events that an embedded dossier can use to communicate with the container page and methods and wrapper functions for registering event handlers. For example, the Embedding SDK lets you add code to capture selection events from one dossier and apply them as a filter to a second dossier. Provides a sample that illustrates how to capture selection events from one embedded dossier and apply them as a filter to a second dossier.

- [Retrieve and Apply Filters to an Embedded Dossier](./filters)

  Describes how to retrieve and apply filters for an embedded dossier and shows the filter details for each filter type, with code samples. For example, you can apply different kinds of filters to a chapter in a dossier, either during execution or after a dossier has been rendered.

- [Deploy a Sample Application to Set Dossier Properties](./set-properties)

  Provides sample code for setting dossier properties. Properties can be set to customize the UI, features, and authentication. For example, you can add properties to set the height and width of the placeholder where the iFrame containing the dossier instance will be created and specify whether responsive design should be enabled; you can enable and disable many features; and you can set properties for custom authentication.

- [Methods and Properties for an Embedded Dossier](./methods-and-properties)

  Describes the properties that can be set for an embedded dossier.

|The sample applications are provided as HTML files. These files must be hosted on a web server and cannot be run as standalone files. Without the web server, the host returns null which causes an error based on the security measures of the Embedding SDK. The server does not need to be publicly accessible; for example, it could be a local host deployment.
