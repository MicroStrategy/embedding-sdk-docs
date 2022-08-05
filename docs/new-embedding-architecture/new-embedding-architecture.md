---
title: The New Embedding Architecture
---

If you want to gain better performance when embedding multiple separate visualizations, we suggest you use a new set of API. To know how to use it, you need to view the pages below:

- [Embed Multiple Visualizations in a page](./embed-multiple-viz.html)

  This introductory sample embeds multiple single visualizations in a simple application. This sample can be used as is. These APIs could only support to embed readonly visualizations now.

- [Destroy Visualizations in a page](./destroy-multiple-viz.html)

  Because we only support to embed the visualizations from one dossier, we need the functionality to switch from the current dossier to another dossier. This introductory sample shows how to destroy the current visualizations before embedding a new set of visualizations.

The new set of APIs are still in a pre-release early version(**alpha version**), and might have significant changes in the future. Currently, it has the constraints below:

- All the interaction widgets, like action buttons, RMC menus and scroll to the next page, would be disabled temporarily. Our product could only show readonly visualizations now.
- It doesn't support the custom visualizations and maps.
- It doesn't support the visualizations in panels.
- It doesn't support showing the visualizations from different dossiers or servers.
