---
title: What's new in the Embedding SDK
description: In each release, changes are made to make the MicroStrategy SDK more powerful and easier to use.
---

In each release, changes are made to make the MicroStrategy SDK more powerful and easier to use.

## Strategy ONE July 2025

- [Get the dashboard instance ID](./native-embedding-architecture/dossier-info-api#get-dashboard-instance-id)
  - Support to get the dashboard instance id via the new API `MstrDossier.getDossierInstanceId()` in Native Embedding SDK.
- [Add a new parameter to improve performance](./native-embedding-architecture/embedding-components)
  - Add `suppressAutoRecovery` parameter in `microstrategy.embeddingComponent.environments.create()` function to improve the initial load performance.
- [Add a new feature flag to get performance profiles](./native-embedding-architecture/feature-flags#enable_profile)
  - Add a new feature flag `window.microstrategy.nativeEmbedding.featureFlags.enableProfile` to record the performance profiles in Native Embedding SDK.

## Strategy ONE June 2025

- [Information Window](./native-embedding-architecture/information-window.md)
  - Introduce the Information Window feature in Native Embedding SDK to enhance data visualization interactivity by providing contextual details in a dynamic overlay.
- [Retrieve and apply filters](./native-embedding-architecture/apply-filter#attributemetric-selector)
  - Support the Attribute/Metric selector in `MstrDossier.applyFilter()` and `MstrDossier.applyFilters()` in Native Embedding SDK.

## Strategy ONE April 2025

- [Properties for an embedded Library home page.](./embed-library-main-page/embed-library-properties.md#settings)
  - Introduce `settings.filter.projects` to filter the library to display content from a specific project.

## Strategy ONE March 2025

- [Embed MicroStrategy document consumption page.](./embed-document-consumption-page/embed-document-consumption-page.md)
  - Provide API to embed a document consumption page.
- [Embed MicroStrategy dashboard consumption page.](./embed-dossier-consumption-page/embed-dossier-consumption-properties#dossierconsumption)
  - Introduce `panelSelectionMode` to enable panel selection on a dashboard consumption page.
- [Native Embedding SDK - Retrieve and apply filters](./native-embedding-architecture/apply-filter.md#mstrdossierapplyfilters-examples)
  - Introduce `MstrDossier.applyFilters` to apply multiple filters in one API.
- [A new embedding context API.](./embedding-context/dossier-consumption-page-apis#selectpanelspanelkeys)
  - Introduce a new API, `selectPanels(panelKeys)`, to programmatically select panels on the dossier consumption page.

## MicroStrategy ONE December 2024

- [Embed MicroStrategy dashboard consumption page.](./embed-dossier-consumption-page/embed-dossier-consumption-page.md)
  - Introduce `disableGroupSelection` property to disable group selection in the component selection mode on Microstrategy dashboard consumption page.

## MicroStrategy ONE September 2024

- [Embed MicroStrategy dashboard consumption page.](./embed-dossier-consumption-page/embed-dossier-consumption-page.md)
  - Introduce `enablePageSelection` property to customize displaying page selectors in the TOC panel of Microstrategy dashboard consumption page.
- [The customized UI settings in Embedding SDK.](./embed-library-main-page/embed-custom-ui-on-all-pages.md)
  - Introduce `customUi` object property `dockedToc` to customize default values of `isOpen` and `isDocked` of the TOC panel in the UI of Microstrategy dashboard consumption page.
- [Embed Dashboard Visualizations with Native Embedding SDK.](./native-embedding-architecture/mstr-dossier.md)
  - Introduce `AbortController` support to cancel `MstrDossier.refresh()` calls.
- [Native Embedding MstrEnvironment Class](./native-embedding-architecture/mstr-environment.md)

  - Introduce optional `applicationId` input parameter for `MstrEnvironment.loadDossier()` and `MstrEnvironment.loadBot()`.
  - Introduce `MstrEnvironment.getAuthToken()` function.

- [Properties for an embedded MicroStrategy Library home page.](./embed-library-main-page/embed-library-properties.md)
  - Change the available values of `currentPage.key` according to the Library UI change and new API functionalities: Remove 'all', 'myContent', 'favorites' and 'recents'; add 'home' and 'contentDiscovery'.

## MicroStrategy ONE June 2024

- [Embed MicroStrategy bot consumption page.](./embed-bot-consumption-page/embed-bot-consumption-page.md)
  - Deprecate `botConsumption` object property `snapshot.enabled` to customize UI of the bot consumption page.
  - Deprecate `botConsumption` object property `topicsPanel.enabled` to customize UI of the bot consumption page.
  - Introduce `botConsumption` object property `aiBot` to customize UI of the bot consumption page.
  - Introduce `customUi` object property `theme` to customize UI of Microstrategy Library including bot consumption page.
  - Introduce `botConsumption` boolean property `disableHyper` to customize if you want to disable hyper extension highlight service in bot consumption page.
- [Bot consumption page APIs.](./embedding-context/bot-consumption-page-apis.md)
  - You can call new APIs on the bot consumption page to interact with Microstrategy bot.
- [New dashboard consumption page APIs.](./embedding-context/dossier-consumption-page-apis.md)
  - You can call the [dashboard APIs](./add-functionality/add-functionality.md) via the `embeddingContext.dossierConsumption` object on a dashboard consumption page.
- [A new embedding context API.](./embedding-context/#gotopagepageinfo)
  - You can call the new API `embeddingContext.goToPage(page)` to navigate to an arbitrary page on the OOTB Library.
- [New OAuth APIs for SAML and OIDC login.](./support-for-different-authentication-environments/new-authentication-apis.md)
  - You can call the new APIs to simplify the original SAML or OIDC workflow.

## MicroStrategy ONE March 2024

- Rename 'dossier' into 'dashboard'.
- [Embed Bot Visualizations with Native Embedding SDK.](./native-embedding-architecture/embed-bot-visualizations.md)
  - You can use the new Embedding SDK APIs to embed the visualizations on a bot consumption page.

## 2021 Update 12

[Embed MicroStrategy bot consumption page.](./embed-bot-consumption-page/embed-bot-consumption-page.md)

- You can use a new Embedding SDK API to embed a bot consumption page. The user also could do some UI customizations.

## 2021 Update 11

- [Embed MicroStrategy dashboard consumption page.](./embed-dossier-consumption-page/embed-dossier-consumption-page.md)
  - You can use a new Embedding SDK API to embed a dashboard consumption page, in which we support the user to navigate between the dashboard and the homepage.
- [Dashboard consumption page APIs.](./embedding-context/dossier-consumption-page-apis.md)
  - You can call new APIs on the dashboard consumption page to get and set the selected components.

## 2021 Update 9

[The Native Embedding SDK.](./native-embedding-architecture/native-embedding-architecture.md)

- You can use the Native Embedding SDK to embed visualizations from separate containers to improve performance.
- Users can interact with the embedded visualization.
- Users can use APIs to perform manipulations such as filtering.

## 2021 Update 8

- [Embed MicroStrategy report page.](./embed-report-page/embed-report-page.md)
  - Users can embed MicroStrategy report consumption page.
  - Users can control the visibility of the navigation bar of the report consumption page.
- [Ability to customize dashboard pages from embedding Library home page](./embed-library-main-page/embed-custom-ui-on-all-pages.md)
- [Ability to customize Library home page from embedding dashboard page](./add-functionality/methods-and-properties.md#customui)

## 2021 Update 7

[Embed MicroStrategy Library home page.](./embed-library-main-page/embed-library-main-page.md)

- Users can embed MicroStrategy Library home page and use any child page accessed from the sidebar.
- Users can control the visibility of the navigation bar and the sidebar of the library home page.

## 2021 Update 4

- [Enhancements to authoring an embedded dashboard.](./add-functionality/authoring-library.md)
  - Control the display of items in the authoring toolbar.
  - Control the display of authoring panels.
  - Support for creating a new dashboard.
- [Show or hide all entries for a subscription.](./add-functionality/methods-and-properties.md#properties)

## 2021 Update 3

- [Author an embedded dashboard.](./add-functionality/authoring-library.md)
- [Enable the selection of attribute elements.](./add-functionality/attribute-element-selection.md)

## 2021 Update 2

- [Interact with panel stacks in dossiers.](./add-functionality/panel-stacks.md)
- [Embed a single visualization.](./add-functionality/embed-vis.md)

## 2021

- [More updates in error handling.](./add-functionality/error-handling.md)
- [Apply multiple filters after a dashboard is rendered.](./add-functionality/filters.md#apply-multiple-filters-after-the-dashboard-is-rendered)
- [Show or hide the `shareDossier` function.](./add-functionality/methods-and-properties.md#sharefeature)

## 2020 Update 3

[Error handling.](./add-functionality/error-handling.md)

## 2020 Update 2

A new method to [remove an embedded dashboard](./add-functionality/methods-and-properties.md#method-for-removing-an-embedded-dashboard).

## 2019

A new property, [dossierFeature](./add-functionality/methods-and-properties.md#dossierfeature), allows you to customize dashboard features on the UI. Use the readOnly detailed property to enable or disable all context menus. This includes the visualization right-click context menu and the context menu on the top right of the visualization that includes such options as **Export**.

## 11.0

- A new property allows you to [pass filters during dashboard execution](./add-functionality/methods-and-properties.md#filters).
- New properties allow you to [customize features and the UI](./add-functionality/methods-and-properties.md) for an embedded dashboard.

## 10.9

The Embedding SDK was introduced in 10.9.

- This new SDK was added to the MicroStrategy Developer Library to support embedding MicroStrategy content in third-party web applications or portals.
