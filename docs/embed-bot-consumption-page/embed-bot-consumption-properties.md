---
title: Properties for an embedded Strategy bot consumption page
description: Describes the properties that can be set for an embedded Strategy bot consumption page.
---

When you embed a Strategy bot consumption page into a web page, you use
the `embedBotConsumptionPage(props)` method under the `microstrategy.embeddingContexts` namespace.

## Method

### `microstrategy.embeddingContexts.embedBotConsumptionPage(props)`

This method creates an iFrame on the web page (in the location specified by the `placeholder`
property) and inserts a link to the Strategy bot consumption page URL (specified by the `serverUrl`
property).

#### Return value

This method returns a promise, which is resolved when the Strategy bot consumption page is loaded.

#### Input parameters

The `props` parameter contains required key:value pairs that defines the Library Server URL and
the `<div>` placeholder where the iFrame containing the Strategy bot consumption page will be
created. It can also contain other optional key:value pairs to customize the UI, authentication and
custom error handler.

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
microstrategy.embeddingContexts.embedBotConsumptionPage({
  placeholder: document.getElementById("container"),
  serverUrl: "https://demo.microstrategy.com/MicroStrategyLibrary",
  projectId: "B19DEDCC11D4E0EFC000EB9495D0F44F",
  objectId: "D9AB379D11EC92C1D9DC0080EFD415BB",
});
```

### `serverUrl`, `projectId`, `objectId`

The required parameters in the bot URL.

These properties build the full report page URL to be embedded. The Embedding SDK builds the URL
using `serverUrl` + '/app/' + `projectId` + '/' + `objectId` + '/' + `pageKey`.

#### Required?

Yes

#### Default value

N/A

#### Sample

```js
microstrategy.embeddingContexts.embedBotConsumptionPage({
  placeholder: document.getElementById("container"),
  serverUrl: "https://demo.microstrategy.com/MicroStrategyLibrary",
  projectId: "B19DEDCC11D4E0EFC000EB9495D0F44F",
  objectId: "D9AB379D11EC92C1D9DC0080EFD415BB",
});
```

### `customApplicationId`, `pageKey`

The optional parameters in the bot URL.

Specifies the application and page that the user wants to show in the embedded page.

When these parameters are specified, the embeded page URL would become `serverUrl` +
'/app/config/' + `customApplicationId` + '/' + `projectId` + '/' + `objectId` + '/' + `pageKey`.

#### Required?

No

#### Default value

N/A

#### Sample

```js
microstrategy.embeddingContexts.embedBotConsumptionPage({
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
microstrategy.embeddingContexts.embedBotConsumptionPage({
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
microstrategy.embeddingContexts.embedBotConsumptionPage({
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

Specifies the token type returned by the `getLoginToken` function. There are two possible values,
which can be provided by the CustomAuthenticationType enumeration.

#### Required?

No

#### Default value

microstrategy.bot.CustomAuthenticationType.IDENTITY_TOKEN

#### Sample

N/A

### `getLoginToken`

Specifies a function that returns a promise, which is resolved with either authorization token
(`authToken`) or the identity token (`identityToken`) The token type is specified by the
customAuthenticationType property.

#### Required?

No

#### Default value

See the sample code in the next column for the default implementation of this function.

#### Sample

When `customAuthenticationType` is set to `CustomAuthenticationType.AUTH_TOKEN`, the following
sample demonstrates how to send a fetch request to get `authToken` with your credentials. You can do
this using an `XMLHttpRequest`, if your browser does not support `fetch`.

The `getLoginToken` function can be found in
[the `getLoginToken` doc](../add-functionality/methods-and-properties#getlogintoken)

```js
microstrategy.embeddingContexts.embedBotConsumptionPage({
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

When `customAuthenticationType` is set to `CustomAuthenticationType.IDENTITY_TOKEN`, you need to add
a component to your web server. Refer to Use Custom Authentication for more information.

### `disableCustomErrorHandlerOnCreate`

To disable the custom error handler, set `disableCustomErrorHandlerOnCreate` to true.

If this flag is set, all the errors occur in the initial loading process and manual actions would be
handled by OOTB Library itself, an error dialog would pop up.

You could also refer to
[Custom error handling during bot creation](../add-functionality/error-handling.md#custom-error-handling-during-bot-creation).

#### Required?

No

#### Default value

false

#### Sample

N/A

### `errorHandler`

The custom error handler that executes when the error occurs in the initial loading process. It's a
callback function that contains one parameter, `error`. The error object has the property `message`,
which contains the detailed error message.

Whether `errorHandler` is set, the error occured inside the embeded page would output an error in
the browser console. The detailed behavior could be seen in
[The overall Strategy Library error behavior in embed case](../add-functionality/error-handling.md#the-overall-microstrategy-library-error-behavior-in-embed-case).

#### Required?

No

#### Default value

N/A

#### Sample

```js
microstrategy.embeddingContexts.embedBotConsumptionPage({
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

The custom error handler that executes when an session expiration error occurs. It's a callback
function that contains one parameter, `error`. The error object has the property `message`, which
contains the detailed error message.

When session expires:

- If `sessionErrorHandler` is not set, the embedded page would redirect to the OOTB library login
  page.
- If `sessionErrorHandler` is set, the session error handler would be triggered and the embedded
  page would not change for 1 minute. If after 1 minute, the error handler doesn't do anything(like
  reauthentication and refresh page) to renew the session, the embedded page would redirect to the
  OOTB Library login page.

#### Required?

No

#### Default value

N/A

#### Sample

```js
microstrategy.embeddingContexts.embedBotConsumptionPage({
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

### `disableHyper`

<Available since="2024 Update6" />
Use the `disableHyper` boolean value to decide if the hyper extension should highlight the bot consumption page or not

#### Required?

No

#### Default value

undefined

#### Sample

```js
microstrategy.embeddingContexts.embedBotConsumptionPage({
  serverUrl: "https://demo.microstrategy.com/MicroStrategyLibrary",
  projectId: "B19DEDCC11D4E0EFC000EB9495D0F44F",
  objectId: "D9AB379D11EC92C1D9DC0080EFD415BB",
  placeholder: document.getElementById("container"),
  disableHyper: true,
});
```

### `customUi`

Specifies the custom UI settings on the embedded pages, including Strategy Library home page, bot
consumption page，bot authoring page, and report consumption page.

#### Properties

##### `addToLibraryBanner`

Use the `addToLibraryBanner` object to customize the "Add To Library" banner on the Strategy bot
consumption page. All detailed properties below are `Boolean`.

- `enabled`
  - Enable the Library "Add To Library" banner or not. If the banner is disabled in custom
    application, the true value wouldn’t take effect.
  - Default value: `false`.

#### `theme`

<Available since="2024 Update6" />
Use the `theme` object to customize the "theme" in the Strategy Library including bot consumption page. All detailed properties below are `Boolean`.

- `enabled`
  - Enable the Library "theme" colors or not. The value can be true or false. If the value isn't
    defined, the default is true.

##### `botConsumption`

Use the `botConsumption` object to customize UI of the bot consumption page. All detailed properties
below are `Boolean`.

- `snapshot.enabled` <Deprecated since="2024 Update6" />

  - Enable the snapshot panel on the bot consumption page or not.
  - Default value: `true`.

- `topicsPanel.enabled` <Deprecated since="2024 Update6" />

  - Enable the topics panel on the bot consumption page or not.
  - Default value is undefined, which falls back to true.

- `navigationBar.enabled`

  - Enable the navigation bar on the bot consumption page or not.
  - Default value: `false`.

- `aiBot` <Available since="2024 Update6" />

  - Enable title bars, the snapshot panel, topics panel, chat panel(show clear history, show give
    topics, show welcome page bot image, should load history, should save to history) on the bot
    consumption page or not.
  - Default value is undefined, which falls back to the following:

  ```javascript
   {
      titleBar: {
        enabled: true,
      },
      snapshotPanel: {
        enabled: true,
      },
      topicsPanel: {
        enabled: true,
      },
      chatPanel: {
        showClearHistory: true,
        showGiveTopics: true,
        showWelcomePageBotImg: true,
        showCopyBtn: true,
        shouldExpandRelatedSuggestionsOnInit: true,
        shouldLoadHistory: true,
        shouldSaveToHistory: true,
      }
    }
  ```

- `aiBot.titleBar.enabled`: This field specifies whether to enable the title bar of chat panel,
  snapshot panel and topic panel on the bot consumption page or not. The value can be true or false.
  If this field isn't defined, the default is true. However, it's ignored when the field isn't
  defined or defined as true. Only when the value is false, the title bars of panels are hidden.
- `aiBot.snapshotPanel.enabled`: This field specifies whether to enable the snapshot panel on the
  bot consumption page or not. The value can be true or false. If this field isn't defined, the
  default is true.
- `aiBot.topicsPanel.enabled`: This field specifies whether to enable the topic panel on the bot
  consumption page or not. The value can be true or false. If this field isn't defined, the default
  is true.
- `aiBot.chatPanel.showClearHistory`: This field specifies whether to show clear history in the chat
  panel on the bot consumption page or not. The value can be true or false. If this field isn't
  defined, the default is true.
- `aiBot.chatPanel.showGiveTopics`: This field specifies whether to show give topics in the chat
  panel on the bot consumption page or not. The value can be true or false. If this field isn't
  defined, the default is true.
- `aiBot.chatPanel.showWelcomePageBotImg`: This field specifies whether to show bot image in the
  welcome page of the chat panel on the bot consumption page or not. The value can be true or false.
  If this field isn't defined, the default is true.
- `aiBot.chatPanel.showCopyBtn`: This field specifies whether to show copy button in the chat panel
  on the bot consumption page or not. The value can be true or false. If this field isn't defined,
  the default is true.
- `aiBot.chatPanel.shouldExpandRelatedSuggestionsOnInit`: This field specifies whether to show the
  related suggestions list in the chat panel as expanded or not. The value can be true or false. If
  this field isn't defined, the default is true.
- `aiBot.chatPanel.shouldLoadHistory`: This field specifies whether to load chat history in the chat
  panel on the bot consumption page or not. The value can be true or false. If this field isn't
  defined, the default is true.
- `aiBot.chatPanel.shouldSaveToHistory`: This field specifies whether to save chat history in the
  chat panel on the bot consumption page or not. The value can be true or false. If this field isn't
  defined, the default is true.

#### Sample

```js
microstrategy.embeddingContexts.embedBotConsumptionPage({
  serverUrl: "https://demo.microstrategy.com/MicroStrategyLibrary",
  projectId: "B19DEDCC11D4E0EFC000EB9495D0F44F",
  objectId: "D9AB379D11EC92C1D9DC0080EFD415BB",
  placeholder: document.getElementById("container"),
  customUi: {
    addToLibraryBanner: {
      enabled: true,
    },
    theme: {
      enabled: false,
    },
    botConsumption: {
      aiBot: {
        titleBar: {
          enabled: false,
        },
        snapshotPanel: {
          enabled: false,
        },
        topicsPanel: {
          enabled: false,
        },
        chatPanel: {
          showClearHistory: false,
          showGiveTopics: false,
          showWelcomePageBotImg: false,
          showCopyBtn: false,
          shouldLoadHistory: false,
          shouldSaveToHistory: false,
        },
      },
      navigationBar: {
        enabled: true,
      },
    },
  },
});
```

### `permissions`

Specify the permissions on the embedded bot consumption page.

#### Required?

No

#### Properties

##### `allowClipboardWrite`

To grant the "ClipboardWrite" permission or not. Could be used to enable the copy functionality on a
bot message or not. It's worthy note that the copy functionality also requires the Library server to
be HTTPS. If it's an HTTP server, the copy functionality would be disabled, regardless of the value
of this flag.

##### Default value

`false`

#### Sample

```js
microstrategy.embeddingContexts.embedBotConsumptionPage({
  serverUrl: "https://demo.microstrategy.com/MicroStrategyLibrary",
  projectId: "B19DEDCC11D4E0EFC000EB9495D0F44F",
  objectId: "D9AB379D11EC92C1D9DC0080EFD415BB",
  placeholder: document.getElementById("container"),
  permissions: {
    allowClipboardWrite: true,
  },
});
```

### `settings`

Specify the custom settings on the embedding pages. Including the non-UI settings of bot consumption
page.

#### Required?

No

#### Properties

##### `botConsumption`

Use the `botConsumption` object to customize the options on the bot consumption page. The detailed
properties contain:

- `disableManipulationsAutoSaving`

  - Disable the bot instance manipulation auto saving or not.
  - Default value: `false`.

#### Sample

```js
microstrategy.embeddingContexts.embedBotConsumptionPage({
  serverUrl: "https://demo.microstrategy.com/MicroStrategyLibrary",
  projectId: "B19DEDCC11D4E0EFC000EB9495D0F44F",
  objectId: "D9AB379D11EC92C1D9DC0080EFD415BB",
  placeholder: document.getElementById("container"),
  settings: {
    botConsumption: {
      disableManipulationsAutoSaving: true,
    },
  },
});
```
