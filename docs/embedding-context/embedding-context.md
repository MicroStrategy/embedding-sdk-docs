---
title: Embedding context
description: Describes the object that is used for manipulating the embeded pages in the whole embedding lifecycle.
---

The `embeddingContext` object a service object that would persist in the whole embedding lifecycle.

The `embeddingContext` object could be created as below:

```js
try {
  const embeddingContext = await microstrategy.embeddingContexts.embedLibraryPage({
    serverUrl: "https://demo.microstrategy.com/MicroStrategyLibrary",
    placeholder: document.getElementById("dossierContainer"),
  });
} catch (err) {
  // Your custom error handling logic here
}
```

The `embedLibraryPage()` function above can be replaced to the other functions under the `embeddingContexts` namespace, include:

- `embedDossierConsumptionPage(props)`
- `embedReportPage(props)`

This `embeddingContext` object could be used when the user navigates between different types of pages. It has several fields:

- `libraryPage`: used for call the APIs that interact with the Library homepage. The detailed APIs could be seen in [Library page APIs](./library-page-apis.md)
- `dossierConsumption`: used for call the APIs that interact with the dossier consumption page. The detailed APIs could be seen in [Dossier consumption page APIs](./dossier-consumption-page-apis.md)

If the current embedded page is the Library homepage, and the user uses the manipulation object of the other pages, like `embeddingContext.dossierConsumption` to call the APIs of the other page, there would be an error.

Besides the APIs on different types of pages, there are still some APIs that could be used on all kinds of pages, so we put them under the `embeddingContext` object. Include:

## Embedding context APIs

### `registerEventHandler(evtName, handler)`

#### Class

`EmbeddingContext`

#### Description

See the identical function in [Event handlers](../add-functionality/add-event#registereventhandlerevtname-handler).

### `removeEventHandler(evtName, handler)`

#### Class

`EmbeddingContext`

#### Description

See the identical function in [Event handlers](../add-functionality/add-event#removeeventhandlerevtname-handler).

### `addCustomErrorHandler(handler, showErrorPopup)`

#### Class

`EmbeddingContext`

#### Description

See the identical function in [Custom error handling after dossier creation](../add-functionality/error-handling#custom-error-handling-after-dossier-creation).

### `removeCustomErrorHandler()`

#### Class

`EmbeddingContext`

#### Description

See the identical function in [Custom error handling after dossier creation](../add-functionality/error-handling#custom-error-handling-after-dossier-creation).

### `addSessionErrorHandler(handler)`

#### Class

`EmbeddingContext`

#### Description

See the identical function in [Session error handling after dossier creation](../add-functionality/error-handling#session-error-handling-after-dossier-creation).

### `removeSessionErrorhandler()`

#### Class

`EmbeddingContext`

#### Description

See the identical function in [Session error handling after dossier creation](../add-functionality/error-handling#session-error-handling-after-dossier-creation).
