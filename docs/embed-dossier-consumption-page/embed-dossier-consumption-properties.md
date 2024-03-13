---
title: Properties for an embedded MicroStrategy dashboard consumption page
description: Describes the properties that can be set for an embedded MicroStrategy dashboard consumption page.
---

When you embed a MicroStrategy dashboard consumption page into a web page, you use the `embedDossierConsumptionPage(props)` method under the `microstrategy.embeddingContexts` namespace.

## Method

### `microstrategy.embeddingContexts.embedDossierConsumptionPage(props)`

This method creates an iFrame on the web page (in the location specified by the `placeholder` property) and inserts a link to the MicroStrategy dashboard consumption page URL (specified by the `serverUrl` property).

#### Return value

This method returns a promise, which is resolved when the MicroStrategy dashboard consumption page is loaded.

#### Input parameters

The `props` parameter contains required key:value pairs that defines the Library Server URL and the `<div>` placeholder where the iFrame containing the MicroStrategy dashboard consumption page will be created. It can also contain other optional key:value pairs to customize the UI, authentication and custom error handler.

The `props` parameter could contain the following key:value pairs:

## Properties

### `placeholder`

Reference for the container `<div>`.

#### Required?

Yes

#### Default value

N/A

#### Sample

```js
microstrategy.embeddingContexts.embedDossierConsumptionPage({
  placeholder: document.getElementById("container"),
  serverUrl: "https://demo.microstrategy.com/MicroStrategyLibrary",
  projectId: "B19DEDCC11D4E0EFC000EB9495D0F44F",
  objectId: "D9AB379D11EC92C1D9DC0080EFD415BB",
});
```

### `serverUrl`, `projectId`, `objectId`

The required parameters in the dashboard URL.

These properties build the full report page URL to be embedded.
The Embedding SDK builds the URL using `serverUrl` + '/app/' + `projectId` + '/' + `objectId` + '/' + `pageKey`.

#### Required?

Yes

#### Default value

N/A

#### Sample

```js
microstrategy.embeddingContexts.embedDossierConsumptionPage({
  placeholder: document.getElementById("container"),
  serverUrl: "https://demo.microstrategy.com/MicroStrategyLibrary",
  projectId: "B19DEDCC11D4E0EFC000EB9495D0F44F",
  objectId: "D9AB379D11EC92C1D9DC0080EFD415BB",
});
```

### `customApplicationId`, `pageKey`

The optional parameters in the dashboard URL.

Specifies the application and page that the user wants to show in the embedded page.

When these parameters are specified, the embeded page URL would become `serverUrl` + '/app/config/' + `customApplicationId` + '/' + `projectId` + '/' + `objectId` + '/' + `pageKey`.

#### Required?

No

#### Default value

N/A

#### Sample

```js
microstrategy.embeddingContexts.embedDossierConsumptionPage({
  placeholder: document.getElementById("container"),
  serverUrl: "https://demo.microstrategy.com/MicroStrategyLibrary",
  projectId: "B19DEDCC11D4E0EFC000EB9495D0F44F",
  objectId: "D9AB379D11EC92C1D9DC0080EFD415BB",
  customApplicationId: "2AAC5EA4C57449FE9C0F69FE751DCFDB",
  pageKey: "K53--K46",
});
```

### `containerHeight`

Sets the height of the placeholder.

If the style of the placeholder has a height value, the containerHeight property is ignored.

The `containerHeight` property is applied as a style: style="height: $(containerHeight)".

#### Required?

No

#### Default value

600px

#### Sample

```js
microstrategy.embeddingContexts.embedDossierConsumptionPage({
  placeholder: document.getElementById("container"),
  serverUrl: "https://demo.microstrategy.com/MicroStrategyLibrary",
  projectId: "B19DEDCC11D4E0EFC000EB9495D0F44F",
  objectId: "D9AB379D11EC92C1D9DC0080EFD415BB",
  containerHeight: "600px",
});
```

### `containerWidth`

Sets the width of the placeholder.

If the style of the placeholder has a width value, the containerWidth property is ignored.

#### Required?

No

#### Default value

800px

#### Sample

```js
microstrategy.embeddingContexts.embedDossierConsumptionPage({
  placeholder: document.getElementById("container"),
  serverUrl: "https://demo.microstrategy.com/MicroStrategyLibrary",
  projectId: "B19DEDCC11D4E0EFC000EB9495D0F44F",
  objectId: "D9AB379D11EC92C1D9DC0080EFD415BB",
  containerWidth: "800px",
});
```

### `enableCustomAuthentication`

Specifies whether custom authentication is enabled.

#### Required?

No

#### Default value

`false`

User needs to log in from the default login page.

#### Sample

N/A

### `customAuthenticationType`

Specifies the token type returned by the `getLoginToken` function. There are two possible values, which can be provided by the CustomAuthenticationType enumeration.

#### Required?

No

#### Default value

microstrategy.dossier.CustomAuthenticationType.IDENTITY_TOKEN

#### Sample

N/A

### `getLoginToken`

Specifies a function that returns a promise, which is resolved with either authorization token (`authToken`) or the identity token (`identityToken`) The token type is specified by the customAuthenticationType property.

#### Required?

No

#### Default value

See the sample code in the next column for the default implementation of this function.

#### Sample

When `customAuthenticationType` is set to `CustomAuthenticationType.AUTH_TOKEN`, the following sample demonstrates how to send a fetch request to get `authToken` with your credentials. You can do this using an `XMLHttpRequest`, if your browser does not support `fetch`.

The `getLoginToken` function can be found in [the `getLoginToken` doc](../add-functionality/methods-and-properties#getlogintoken)

```js
microstrategy.embeddingContexts.embedDossierConsumptionPage({
  placeholder: document.getElementById("container"),
  serverUrl: "https://demo.microstrategy.com/MicroStrategyLibrary",
  projectId: "B19DEDCC11D4E0EFC000EB9495D0F44F",
  objectId: "D9AB379D11EC92C1D9DC0080EFD415BB",
  enableCustomAuthentication: true,
  customAuthenticationType: microstrategy.dossier.CustomAuthenticationType.AUTH_TOKEN,
  // The following function is the default implementation. User can provide custom implementation.
  getLoginToken() {
    // The similar logic as getLoginToken in existing Embedding SDK
  },
});
```

When `customAuthenticationType` is set to `CustomAuthenticationType.IDENTITY_TOKEN`, you need to add a component to your web server. Refer to Use Custom Authentication for more information.

### `disableCustomErrorHandlerOnCreate`

To disable the custom error handler, set `disableCustomErrorHandlerOnCreate` to true.

If this flag is set, all the errors occur in the initial loading process and manual actions would be handled by OOTB Library itself, an error dialog would pop up.

You could also refer to [Custom error handling during dashboard creation](../add-functionality/error-handling.md#custom-error-handling-during-dossier-creation).

#### Required?

No

#### Default value

false

#### Sample

N/A

### `errorHandler`

The custom error handler that executes when the error occurs in the initial loading process. It's a callback function that contains one parameter, `error`. The error object has the property `message`, which contains the detailed error message.

Whether `errorHandler` is set, the error occured inside the embeded page would output an error in the browser console. The detailed behavior could be seen in [The overall MicroStrategy Library error behavior in embed case](../add-functionality/error-handling.md#the-overall-microstrategy-library-error-behavior-in-embed-case).

#### Required?

No

#### Default value

N/A

#### Sample

```js
microstrategy.embeddingContexts.embedDossierConsumptionPage({
  serverUrl: "https://demo.microstrategy.com/MicroStrategyLibrary",
  projectId: "B19DEDCC11D4E0EFC000EB9495D0F44F",
  objectId: "D9AB379D11EC92C1D9DC0080EFD415BB",
  placeholder: document.getElementById("container"),
  errorHandler: (error) => {
    console.log(`catch error during creation: ${error.message}`);
    // Do something to handle the error
  },
});
```

### `sessionErrorHandler`

The custom error handler that executes when an session expiration error occurs. It's a callback function that contains one parameter, `error`. The error object has the property `message`, which contains the detailed error message.

When session expires:

- If `sessionErrorHandler` is not set, the embedded page would redirect to the OOTB library login page.
- If `sessionErrorHandler` is set, the session error handler would be triggered and the embedded page would not change for 1 minute. If after 1 minute, the error handler doesn't do anything(like reauthentication and refresh page) to renew the session, the embedded page would redirect to the OOTB Library login page.

#### Required?

No

#### Default value

N/A

#### Sample

```js
microstrategy.embeddingContexts.embedDossierConsumptionPage({
  serverUrl: "https://demo.microstrategy.com/MicroStrategyLibrary",
  projectId: "B19DEDCC11D4E0EFC000EB9495D0F44F",
  objectId: "D9AB379D11EC92C1D9DC0080EFD415BB",
  placeholder: document.getElementById("container"),
  sessionErrorHandler: (error) => {
    console.log(`catch session error: ${error.message}`);
    // Do something to handle the error
  },
});
```

### `customUi`

Specifies the custom UI settings on the embedded pages, including MicroStrategy Library home page, dashboard consumption page，dashboard authoring page, and report consumption page.

#### Properties

Please see all the properties in [The customized UI settings in Embedding SDK](../embed-library-main-page/embed-custom-ui-on-all-pages.md)

### `settings`

Specify the custom settings on the embedding pages. Including the non-UI settings of dashboard consumption page.

#### Required?

No

#### Properties

##### `dossierConsumption`

Use the `dossierConsumption` object to customize the options on the dashboard consumption page. The detailed properties contain:

- `componentSelectionMode`

  - To assign the selection mode of the visualizations or groups on the dashboard consumption page.
  - Available values: ["noSelection", "singleSelection", "multipleSelection"]
  - Default value: "noSelection".

- `disableManipulationsAutoSaving`
  - Disable the dashboard instance manipulation auto saving or not.
  - Default value: `false`.

#### Sample

```js
microstrategy.embeddingContexts.embedDossierConsumptionPage({
  serverUrl: "https://demo.microstrategy.com/MicroStrategyLibrary",
  projectId: "B19DEDCC11D4E0EFC000EB9495D0F44F",
  objectId: "D9AB379D11EC92C1D9DC0080EFD415BB",
  placeholder: document.getElementById("container"),
  settings: {
    dossierConsumption: {
      componentSelectionMode: "multipleSelection",
      disableManipulationsAutoSaving: false,
    },
  },
});
```
