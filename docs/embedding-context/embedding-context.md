---
title: Embedding context
description:
  Describes the object that is used for manipulating the embeded pages in the whole embedding
  lifecycle.
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

The `embedLibraryPage()` function above can be replaced to the other functions under the
`embeddingContexts` namespace, include:

- `embedDossierConsumptionPage(props)`
- `embedReportPage(props)`

This `embeddingContext` object could be used when the user navigates between different types of
pages. It has several fields:

- `libraryPage`: used for call the APIs that interact with the Library homepage. The detailed APIs could be seen in [Library page APIs](./library-page-apis.md)
- `dossierConsumption`: used for call the APIs that interact with the dashboard consumption page. The detailed APIs could be seen in [Dashboard consumption page APIs](./dossier-consumption-page-apis.md)
- `documentConsumption`: used for call the APIs that interact with the document consumption page. The detailed APIs could be seen in [Document consumption page APIs](./document-consumption-page-apis.md)
- `botConsumptionService` used for call the APIs that interact withe the bot consumption page. The detailed APIs could be seen in [Bot consumption page APIs](./bot-consumption-page-apis.md)

If the current embedded page is the Library homepage, and the user uses the manipulation object of
the other pages, like `embeddingContext.dossierConsumption` to call the APIs of the other page,
there would be an error.

Besides the APIs on different types of pages, there are still some APIs that could be used on all
kinds of pages, so we put them under the `embeddingContext` object. Include:

## Embedding context APIs

### `registerEventHandler(evtName, handler)`

#### Class

`EmbeddingContext`

#### Description

See the identical function in
[Event handlers](../add-functionality/add-event#registereventhandlerevtname-handler).

### `removeEventHandler(evtName, handler)`

#### Class

`EmbeddingContext`

#### Description

See the identical function in
[Event handlers](../add-functionality/add-event#removeeventhandlerevtname-handler).

### `addCustomErrorHandler(handler, showErrorPopup)`

#### Class

`EmbeddingContext`

#### Description

See the identical function in
[Custom error handling after dashboard creation](../add-functionality/error-handling#custom-error-handling-after-dashboard-creation).

### `removeCustomErrorHandler()`

#### Class

`EmbeddingContext`

#### Description

See the identical function in
[Custom error handling after dashboard creation](../add-functionality/error-handling#custom-error-handling-after-dashboard-creation).

### `addSessionErrorHandler(handler)`

#### Class

`EmbeddingContext`

#### Description

See the identical function in
[Session error handling after dashboard creation](../add-functionality/error-handling#session-error-handling-after-dossier-creation).

### `removeSessionErrorhandler()`

#### Class

`EmbeddingContext`

#### Description

See the identical function in
[Session error handling after dashboard creation](../add-functionality/error-handling#session-error-handling-after-dossier-creation).

### `goToPage(pageInfo)`

#### Description

This API could be used to navigate to an arbitrary page on the OOTB Library.

#### Class

`EmbeddingContext`

#### Input Parameters

| Parameter Name         | Data Type | Description                                     | Is Required |
| ---------------------- | --------- | ----------------------------------------------- | ----------- |
| pageInfo.applicationId | string    | The application ID, which must be a GUID.       | false       |
| pageInfo.projectId     | string    | The project ID, which must be a GUID.           | false       |
| pageInfo.objectId      | string    | The object ID, which must be a valid object id. | false       |
| pageInfo.pageKey       | string    | The page key.                                   | false       |
| pageInfo.isAuthoring   | boolean   | Go to the authoring page or not.                | false       |

The API call like `embeddingContext.goToPage()` will navigate to the homepage.

#### Return type

This API would return a Promise that resolves to an object, whose serialized json is like:

```json
{
  "redirect": true
}
```

The value of the `redirect` field denotes the page is changed or not. For the case that input
`pageInfo` points to the current page, the value of `redirect` would be `false`.

If it encounters an error in its executing process, the error would be thrown and could be caught.

#### Example

```js
try {
  await embeddingContext.goToPage({
    applicationId: "3580143DAA42D06B0440D7814C39E562",
    projectId: "B19DEDCC11D4E0EFC000EB9495D0F44F",
    objectId: "EC70648611E7A2F962E90080EFD58751",
    pageKey: "W69",
    isAuthoring: false,
  });
} catch (err) {
  // The other error handling logic here
}
```

#### API Errors

| Error Case                                                                   | Error Category | Handling Module      | Error Handling                                |
| ---------------------------------------------------------------------------- | -------------- | -------------------- | --------------------------------------------- |
| The input parameter fails input validation                                   | Invalid input  | Native Embedding SDK | Caught by the `catch()` of the promise object |
| The request url isn’t valid, like the invalid project, object id, or pageKey | Invalid input  | Native Embedding SDK | Caught by the `catch()` of the promise object |
| The other cases that the user can’t open the page                            | Other          | Native Embedding SDK | Caught by the `catch()` of the promise object |

The case "the input parameter fails input validation" contains:

- The field value's data type isn't right
- `objectId` and `projectId` don't exist at the same time
- `pageKey`, `isAuthoring` appears when `objectId` and `projectId` don't exist
