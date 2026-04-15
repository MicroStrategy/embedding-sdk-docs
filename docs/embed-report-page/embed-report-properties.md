---
title: Properties for an embedded Strategy report page
description: Describes the properties that can be set for an embedded Strategy report page.
---

To embed a Strategy report page into a web page, use the `embedReportPage(props)` method under the `microstrategy.embeddingContexts` namespace.

## Method

### `microstrategy.embeddingContexts.embedReportPage(props)`

This method creates an iFrame on the web page, in the location specified by the `placeholder` property, and inserts a link to the Strategy report page URL. The report page URL is built using `serverUrl` + '/app/' + `projectId` + '/' + `objectId` + '/' + `pageKey`.

#### Return value

This method returns a promise, which is resolved when the Strategy report page is loaded.

The `props` parameter contains following required key-value pairs:

- `serverUrl`, `projectId`, and `objectId` define the full report page URL.
- `placeholder` specifies where the iFrame containing the Strategy report page will be created.

It can also contain other optional key-value pairs to customize the UI, authentication, and custom error handler.

The `props` parameter can contain the following key-value pairs:

## Properties

### `placeholder`

Reference for the `<div>` container.

#### Required?

Yes

#### Default value

N/A

#### Sample

N/A

### `serverUrl`,`projectId`,`objectId`, and `pageKey`

These properties build the full report page URL to be embedded.
The Embedding SDK builds the URL using `serverUrl` + '/app/' + `projectId` + '/' + `objectId` + '/' + `pageKey`.

#### Required?

`serverUrl`,`projectId`,`objectId` is required, while `pageKey` is optional.

#### Default value

N/A

#### Sample

```js
const embeddingContext = await microstrategy.embeddingContexts.embedReportPage({
  serverUrl: "https://demo.microstrategy.com/MicroStrategyLibrary",
  projectId: "B19DEDCC11D4E0EFC000EB9495D0F44F",
  objectId: "A409D6EC2245D4417C4FBEA5CD87D3A1",
  placeholder: document.getElementById("embedding-report-container"),
});
```

### `serverUrlParams`

Additional query parameters to append to the server URL. This property accepts an object where the keys are parameter names and the values can be strings, numbers, or booleans. All parameter values will be URL-encoded before being appended to the server URL.

#### Required?

No

#### Default value

N/A

#### Sample

```js
const embeddingContext = await microstrategy.embeddingContexts.embedReportPage({
  serverUrl: "https://demo.microstrategy.com/MicroStrategyLibrary",
  projectId: "B19DEDCC11D4E0EFC000EB9495D0F44F",
  objectId: "A409D6EC2245D4417C4FBEA5CD87D3A1",
  placeholder: document.getElementById("embedding-report-container"),
  serverUrlParams: {
    token: "abc",
    sessionMode: "stateless",
    debug: true,
    timeout: 3000,
  },
});
```

In the example above, the parameters will be URL-encoded and appended to the server URL, resulting in a URL like:
`https://demo.microstrategy.com/MicroStrategyLibrary/app/B19DEDCC11D4E0EFC000EB9495D0F44F/A409D6EC2245D4417C4FBEA5CD87D3A1?token=abc&sessionMode=stateless&debug=true&timeout=3000`

:::note

- Parameter names must start with a letter and can contain letters, numbers, dots (.), underscores (\_), and hyphens (-).
- All parameter values are automatically URL-encoded for safe transmission.
  :::

### `containerHeight`

Sets the height of the placeholder.

If the style of the placeholder has a height value, the `containerHeight` property is ignored.

The `containerHeight` property is applied as a style: style="height: $(containerHeight)".

#### Required?

No

#### Default value

600px

#### Sample

```js
const embeddingContext = await microstrategy.embeddingContexts.embedReportPage({
  serverUrl: "https://demo.microstrategy.com/MicroStrategyLibrary",
  projectId: "B19DEDCC11D4E0EFC000EB9495D0F44F",
  objectId: "A409D6EC2245D4417C4FBEA5CD87D3A1",
  placeholder: document.getElementById("embedding-report-container"),
  containerHeight: "600px",
});
```

### `containerWidth`

Sets the width of the placeholder.

If the style of the placeholder has a width value, the `containerWidth` property is ignored.

#### Required?

No

#### Default value

800px

#### Sample

```js
const embeddingContext = await microstrategy.embeddingContexts.embedReportPage({
  serverUrl: "https://demo.microstrategy.com/MicroStrategyLibrary",
  projectId: "B19DEDCC11D4E0EFC000EB9495D0F44F",
  objectId: "A409D6EC2245D4417C4FBEA5CD87D3A1",
  placeholder: document.getElementById("embedding-report-container"),
  containerWidth: "800px",
});
```

### `enableCustomAuthentication`

Specifies whether custom authentication is enabled.

#### Required?

No

#### Default value

`false`

The user must log in from the default login page.

#### Sample

N/A

### `embeddingHostPortal`

Specifies the URL of the host portal that embeds the page. This replaces the host in shared dashboard links, with the actual dashboard link passed as the `mstrLibraryLink` query parameter.

#### Required?

No

#### Default value

N/A

#### Sample

```js
const embeddingContext = await microstrategy.embeddingContexts.embedReportPage({
  serverUrl: "https://demo.microstrategy.com/MicroStrategyLibrary",
  projectId: "B19DEDCC11D4E0EFC000EB9495D0F44F",
  objectId: "A409D6EC2245D4417C4FBEA5CD87D3A1",
  placeholder: document.getElementById("embedding-report-container"),
  embeddingHostPortal: "https://example.com",
});
```

### `customAuthenticationType`

Specifies the token type returned by the `getLoginToken` function. There are two possible values, which can be provided by the `CustomAuthenticationType` enumeration.

#### Required?

No

#### Default value

`microstrategy.dossier.CustomAuthenticationType.IDENTITY_TOKEN`

#### Sample

N/A

### `getLoginToken`

Specifies a function that returns a promise, which is resolved with either an authorization (`authToken`) or identity (`identityToken`) token. The token type is specified by the `customAuthenticationType` property.

#### Required?

No

#### Default value

See the sample code in the next column for the default implementation of this function.

#### Sample

When `customAuthenticationType` is set to `CustomAuthenticationType.AUTH_TOKEN`, the following sample demonstrates how to send a fetch request to get `authToken` with your credentials. You can do this using an `XMLHttpRequest`, if your browser does not support `fetch`.

The `getLoginToken` function can be found in [the `getLoginToken` doc](../add-functionality/methods-and-properties#getlogintoken)

```js
microstrategy.embeddingContexts.embedReportPage({
  placeholder: placeholderDiv,
  serverUrl: "https://demo.microstrategy.com/MicroStrategyLibrary",
  projectId: "B19DEDCC11D4E0EFC000EB9495D0F44F",
  objectId: "A409D6EC2245D4417C4FBEA5CD87D3A1",
  enableCustomAuthentication: true,
  customAuthenticationType: microstrategy.dossier.CustomAuthenticationType.AUTH_TOKEN,
  // The following function is the default implementation. User can provide custom implementation.
  getLoginToken() {
    // The similar logic as getLoginToken in existing Embedding SDK
  },
});
```

When `customAuthenticationType` is set to `CustomAuthenticationType.IDENTITY_TOKEN`, you must add a component to your web server. Refer to [Use Custom Authentication](../support-for-different-authentication-environments/seamless-login.md) for more information.

### `disableCustomErrorHandlerOnCreate`

To disable the custom error handler, set `disableCustomErrorHandlerOnCreate` to true.

If this flag is set, all errors that occur in the initial loading process as the result of manual actions are handled by OOTB Library and an error dialog appears.

Refer to [Custom error handling during dashboard creation](../add-functionality/error-handling.md#custom-error-handling-during-dashboard-creation) to see the usage of this parameter in `microstrategy.dossier.create`, which has the same effect as in the `microstrategy.embeddingContexts.embedReportPage` function.

#### Required?

No

#### Default value

false

#### Sample

```js
microstrategy.embeddingContexts.embedReportPage({
  serverUrl: "https://demo.microstrategy.com/MicroStrategyLibrary",
  projectId: "B19DEDCC11D4E0EFC000EB9495D0F44F",
  objectId: "A409D6EC2245D4417C4FBEA5CD87D3A1",
  placeholder: container,
  disableCustomErrorHandlerOnCreate: true,
});
```

### `errorHandler`

The custom error handler that executes when the error occurs in the initial loading process. It's a callback function that contains one parameter, `error`. The error object has a `message` property, which contains the detailed error message.

When `errorHandler` is set, errors that occur inside the report page produce an error in the browser console. See the detailed behavior in [The overall Library error behavior in embed case](../add-functionality/error-handling.md#the-overall-library-error-behavior-in-embed-case).

#### Required?

No

#### Default value

N/A

#### Sample

```js
microstrategy.embeddingContexts.embedReportPage({
  serverUrl: "https://demo.microstrategy.com/MicroStrategyLibrary",
  projectId: "B19DEDCC11D4E0EFC000EB9495D0F44F",
  objectId: "A409D6EC2245D4417C4FBEA5CD87D3A1",
  placeholder: container,
  errorHandler(error) {
    console.log(`catch error during creation: ${error.message}`);
    // Do something to handle the error
  },
});
```

### `sessionErrorHandler`

The custom error handler that executes when a session expiration error occurs. It's a callback function that contains one parameter, `error`. The error object has a `message` property that contains the detailed error message.

When the session expires:

- If `sessionErrorHandler` is not set, the embedded page redirects to the OOTB Library login page.
- If `sessionErrorHandler` is set, the session error handler is triggered and the embedded page does not change for one minute. If the error handler doesn't do anything after one minute, such as reauthentication and refreshing the page to renew the session, the embedded page redirects to the OOTB Library login page.

#### Required?

No

#### Default value

N/A

#### Sample

```js
microstrategy.embeddingContexts.embedReportPage({
  serverUrl: "https://demo.microstrategy.com/MicroStrategyLibrary",
  projectId: "B19DEDCC11D4E0EFC000EB9495D0F44F",
  objectId: "A409D6EC2245D4417C4FBEA5CD87D3A1",
  placeholder: container,
  sessionErrorHandler(error) {
    console.log(`catch session error: ${error.message}`);
    // Do something to handle the error
  },
});
```

### `customApplicationId`

Specifies the application that the user wants to show in the embedded page.

The application in Strategy has two categories:

- If the application selects the Library home page as its home screen, the Library home page is embedded with the application's configuration.
- If the application selects a dashboard as its home screen, the embedding fails and an error occurs.

#### Required?

No

#### Default value

N/A

#### Sample

N/A

### `customUi`

Specifies the custom UI settings on the embedded pages, including the Library home, dashboard consumption，dashboard authoring, and report consumption pages.

#### Properties

See all properties in [The customized UI settings in Embedding SDK](../embed-library-main-page/embed-custom-ui-on-all-pages.md).

#### The navigation bar custom setting behavior

The `customUi.reportConsumption.navigationBar.enabled` property affects the report page UI together with the navigation bar setting in the application settings. There are two related items in the Workstation application settings:

- Disable toolbar
- Collapse toolbar by default

The detailed embedding behavior is below:

- If `customUi.reportConsumption.navigationBar.enabled` is false, the navigation bar is disabled by the Embedding SDK settings and it is not shown on the embedded report page.

- If `customUi.reportConsumption.navigationBar.enabled` is true, the setting is combined with the settings in the application, to determine the final visibility of the navigation bar:

  - If the current application disables the navigation bar, the navigation bar is not shown.

  - If the current application enables the navigation bar:

    - If you choose "Collapse toolbar by default" in the application settings, the navigation bar is collapsed at the start and is only expanded/visible when the user expands it manually.

    - If you don't choose "Collapse toolbar by default", the navigation bar is shown on the embedded report page.

### `settings`

#### Required?

No

#### Properties

##### `reportConsumption`

Use the `reportConsumption` object to customize the options on the report consumption page. The detailed properties contain:

- `disableManipulationsAutoSaving`

  - Disable the report instance manipulation auto saving or not.
  - Default value: `false`.

### `instance`

Use this `instance` object to specify a report based dashboard instance for the embedded report. If you would like to make some manipulation to the report based dashboard instance before it is embedded, you can use this property, e.g., sorting a column. If the `instance` is used, the Embedding SDK will use it instead of creating a new report based dashboard instance.

#### Required?

No

#### Properties

- `mid` - This instance ID.

#### Default value

`null`
