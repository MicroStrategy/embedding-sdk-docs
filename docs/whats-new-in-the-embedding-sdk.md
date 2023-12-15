---
title: What's new in the Embedding SDK
description: In each release, changes are made to make the MicroStrategy SDK more powerful and easier to use.
---

In each release, changes are made to make the MicroStrategy SDK more powerful and easier to use.


## 2021 Update 12

- [Embed MicroStrategy bot consumption page](./embed-bot-consumption-page/embed-bot-consumption-page.md)
  - You can use a new Embedding SDK API to embed a bot consumption page. The user also could do some UI customizations.


## 2021 Update 11 

- [Embed MicroStrategy dossier consumption page](./embed-dossier-consumption-page/embed-dossier-consumption-page.md)
  - You can use a new Embedding SDK API to embed a dossier consumption page, in which we support the user to navigate between the dossier and the homepage.
- [Dossier consumption page APIs](./embedding-context/dossier-consumption-page-apis.md)
  - You can call new APIs on the dossier consumption page to get and set the selected components.

## 2021 Update 9

[Native Embedding SDK](./native-embedding-architecture/native-embedding-architecture.md)

- You can use the Native Embedding SDK to embed visualizations from separate containers to improve performance.
- Users can interact with the embedded visualization.
- Users can use APIs to perform manipulations such as filtering.

## 2021 Update 8

- [Embed MicroStrategy report page.](./embed-report-page/embed-report-page.md)
  - Users can embed MicroStrategy report consumption page.
  - Users can control the visibility of the navigation bar of the report consumption page.
- [Ability to customize dossier pages from embedding Library home page](./embed-library-main-page/embed-custom-ui-on-all-pages.md)
- [Ability to customize Library home page from embedding dossier page](./add-functionality/methods-and-properties.md#customui)

## 2021 Update 7

[Embed MicroStrategy Library home page.](./embed-library-main-page/embed-library-main-page.md)

- Users can embed MicroStrategy Library home page and use any child page accessed from the sidebar.
- Users can control the visibility of the navigation bar and the sidebar of the library home page.

## 2021 Update 4

- [Enhancements to authoring an embedded dossier.](./add-functionality/authoring-library.md)
  - Control the display of items in the authoring toolbar.
  - Control the display of authoring panels.
  - Support for creating a new dossier.
- [Show or hide all entries for a subscription.](./add-functionality/methods-and-properties.md#methods-and-properties#sharefeature)

## 2021 Update 3

- [Author an embedded dossier.](./add-functionality/authoring-library.md)
- [Enable the selection of attribute elements.](./add-functionality/attribute-element-selection.md)

## 2021 Update 2

- [Interact with panel stacks in dossiers.](./add-functionality/panel-stacks.md)
- [Embed a single visualization.](./add-functionality/embed-vis.md)

## 2021

- [More updates in error handling.](./add-functionality/error-handling.md)
- [Apply multiple filters after a dossier is rendered.](./add-functionality/filters.md#apply-multiple-filters-after-the-dossier-is-rendered)
- [Show or hide the `shareDossier` function.](./add-functionality/methods-and-properties.md#sharefeature)

## 2020 Update 3

[Error handling.](./add-functionality/error-handling.md)

## 2020 Update 2

A new method to [remove an embedded dossier](./add-functionality/methods-and-properties.md#method-for-removing-an-embedded-dossier).

## 2019

A new property, [dossierFeature](./add-functionality/methods-and-properties.md#dossierfeature), allows you to customize dossier features on the UI. Use the readOnly detailed property to enable or disable all context menus. This includes the visualization right-click context menu and the context menu on the top right of the visualization that includes such options as **Export**.

## 11.0

- A new property allows you to [pass filters during dossier execution](./add-functionality/methods-and-properties.md#filters).
- New properties allow you to [customize features and the UI](./add-functionality/methods-and-properties.md) for an embedded dossier.

## 10.9

The Embedding SDK was introduced in 10.9.

- This new SDK was added to the MicroStrategy Developer Library to support embedding MicroStrategy content in third-party web applications or portals.
