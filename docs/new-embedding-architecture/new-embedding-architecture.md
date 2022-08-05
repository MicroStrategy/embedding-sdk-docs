---
title: The New Embedding Architecture
---

If you want to gain better performance when embedding multiple separate visualizations, we recommend you use the new set of APIs. To know how to use it, view the pages below:

- [Embed Multiple Visualizations in a page](./embed-multiple-viz)

  This introductory sample embeds multiple single visualizations in a simple application. This sample can be used as is. These APIs could only support embedding read-only visualizations now.

- [Destroy Visualizations in a page](./destroy-multiple-viz)

  Because we only support embedding the visualizations from one dossier, we need the functionality to switch from the current dossier to another dossier. This introductory sample shows how to destroy the current visualizations before embedding a new set of visualizations.

The new set of APIs is still in a pre-GA stage (**alpha version**), and it might have significant changes in the future. Currently, it has the following limitations:

- All the interaction widgets, like action buttons, right-mouse-click menus, and scroll to the next page are disabled temporarily. Our product could only show read-only visualizations now.
- It doesn't support the custom visualizations and maps.
- It doesn't support the visualizations in panels.
- It doesn't support showing the visualizations from different dossiers or servers.
