---
title: Methods and properties for an embedded dossier
description: When you embed a MicroStrategy dossier into a web page, you use the `create(props)` method under the `microstrategy.dossier` namespace.
---

When you embed a MicroStrategy dossier into a web page, you use the `create(props)` method under the `microstrategy.dossier` namespace.

:::tip

To help you get started, we have provided an [example on playground](https://microstrategy.github.io/playground/?example=g1) that sets properties on an embedded dossier. Use the `create(props)` method under the `microstrategy.dossier` namespace to set properties. The props parameter contains optional key-value pairs to customize the UI, features, and authentication, in addition to the required key-value pairs that define the URL where the dossier is located and the ID of the `<div>` placeholder where the iFrame containing the dossier instance will be created.

This example is provided as an HTML file, which must be hosted on a web server. It cannot be run as a standalone file.

:::

## Method

### microstrategy.dossier.create(props)

This method creates an iFrame on the web page (in the location specified by the `placeholder` property) and inserts a link to the URL (specified by the `url` property) where the dossier to be embedded is located.

#### Return value

This method returns a promise, which is resolved to a `Dossier` object when the dossier instance is created.

The `props` parameter contains required key-value pairs that define the URL where the dossier is located and the ID of the `<div>` placeholder where the iFrame containing the dossier instance will be created. It can also contain other optional key-value pairs to customize the UI, features, and authentication.

Embedding too many pages using the Embedding SDK can lead to performance problems and even browser crashes due to limited browser resources. To ensure stable performance, it's recommended to embed the MicroStrategy Library page in no more than 4 to 6 containers.

The other similar APIs like `microstrategy.embeddingContexts.embedReportPage(props)` and `microstrategy.embeddingContexts.embedLibraryPage(props)` follow this rule.

The `props` parameter is explained in [Properties](#properties).

### Dossier.getDossierInstanceId()

After calling `microstrategy.dossier.create(props)` to embed a dossier and get a `Dossier` object, you can use `Dossier.getDossierInstanceId()` to get the embedded dossier's instance id.

#### Return value

This method returns a promise, which is resolved to the dossier instance id. An example is as below:

#### Sample

```js
const myDossier = await microstrategy.dossier.create({
  url: "https://demo.microstrategy.com/MicroStrategyLibrary/app/B7CA92F04B9FAE8D941C3E9B7E0CD754/27D332AC6D43352E0928B9A1FCAF4AB0",
  placeholder: document.getElementById("embedding-dossier-container"),
});
const instanceId = await myDossier.getDossierInstanceId();
```

The `instanceId` is a unique GUID, which is different each time you embed a dossier into a container.

## Properties

### `placeholder`

The `placeholder` property refers to the DOM object of the container `<div>`.

#### Required?

Yes

#### Default value

No

### `url`, `serverURL`, `applicationID`, `objectID`, and `pageKey`

The `url` property refers to the full URL of the dossier to be embedded. There are two ways to configure the URL to embed a dossier:

1. Use the `url` property to specify a full URL.
1. Use `serverURL`, `applicationID`, `objectID`, and `pageKey` properties. Embedding SDK will build the URL using: `serverURL` + '/app/' + `applicationID` + '/' + `objectID` + '/' + `pageKey`.

#### Required?

One of the following is required:

- `url` is required.
- `serverURL`, `applicationID`, and `objectID` are required, while `pageKey` is optional.

#### Default value

No

#### Sample

```js
microstrategy.dossier.create({
  url: "https://demo.microstrategy.com/MicroStrategyLibrary/app/B7CA92F04B9FAE8D941C3E9B7E0CD754/27D332AC6D43352E0928B9A1FCAF4AB0",
  placeholder: document.getElementById("embedding-dossier-container"),
});
```

or

```js
microstrategy.dossier.create({
  serverURL: "https://demo.microstrategy.com/MicroStrategyLibrary",
  applicationID: "B7CA92F04B9FAE8D941C3E9B7E0CD754",
  objectID: "27D332AC6D43352E0928B9A1FCAF4AB0",
  placeholder: document.getElementById("embedding-dossier-container"),
});
```

### `containerHeight`

The `containerHeight` property sets the height of the placeholder.

- If the style of the placeholder has a height value, the `containerHeight` property is ignored.
- If the `enableResponsive` property is set to true, the `containerWidth` property is ignored and the `containerHeight` property takes effect.
- The `containerHeight` property is applied as a style: `style="height: $(containerHeight)"`.
- You should not set the `containerHeight` property to `100%` if the `<div>` container has no parent container, but is attached directly to the `<body>`.

#### Required?

No

#### Default value

`600px`

### `containerWidth`

The `containerWidth` property sets the width of the placeholder.

- If the style of the placeholder has a width value, the `containerWidth` property is ignored.
- If the `enableResponsive` property is set to true, the `containerWidth` property is ignored and the width is adjusted to fit the viewport.

#### Required?

No

#### Default value

`800px`

### `customAuthenticationType`

The `customAuthenticationType` property specifies the token type returned by the `getLoginToken` function. There are two possible values, which can be provided by the `CustomAuthenticationType` enumeration.

- `CustomAuthenticationType.IDENTITY_TOKEN`
- `CustomAuthenticationType.AUTH_TOKEN`

#### Required?

No

#### Default value

`CustomAuthenticationType.IDENTITY_TOKEN`

### `disableNotification`

The `disableNotification` property specifies whether to display messages, such as "Add to Library" in the notification bar. If this property is set to true, message does not appear in the notification bar.

Manipulations are not affected by this property. They persist in the same way as the default dossier status.

#### Required?

No

#### Default value

`true`

### `disableErrorPopupWindow`

The `disableErrorPopupWindow` property specifies to disable the popup window caused by the alert which will show when error happens, and throw the error directly.
The deatail of when the error will shown in alert, can be seen [at the error-handling page](error-handling.md#error-handling-before-starting-embed-page-to-library)

#### Required?

No

#### Default value

`undefined`

#### Sample

```js
microstrategy.dossier
  .create({
    placeholder: placeholderDiv,
    url: "https://demo.microstrategy.com/MicroStrategyLibrary/app/B7CA92F04B9FAE8D941C3E9B7E0CD754/27D332AC6D43352E0928B9A1FCAF4AB0",
    disableErrorPopupWindow: true,
  })
  .catch((err) => {
    // add error handler logic here
  });
```

### `dockedComment`

The `dockedComment` object is used to configure the comments panel on the Dossier page.

- `dockedPosition` - Only `"left"` or `"right"` is accepted as the position of the docked panel.
- `canClose` - `Boolean`. If set to `false`, the panel is forced to appear.
- `dockChangeable` - `Boolean`. If set to `false`, the dock pin button is hidden. The docked status of this panel is controlled by `isDocked`.
- `isDocked` - `Boolean`. This configures whether the panel is docked.

#### Required?

No

#### Default value

`null`

If `dockedComment` is not specified, the MicroStrategy Library default behavior is used.

#### Sample

The following code will dock the comments panel to the left.

```js
microstrategy.dossier.create({
  placeholder: placeholderDiv,
  url: "https://demo.microstrategy.com/MicroStrategyLibrary/app/B7CA92F04B9FAE8D941C3E9B7E0CD754/27D332AC6D43352E0928B9A1FCAF4AB0",
  dockedComment: {
    dockedPosition: "left",
    canClose: false,
    dockChangeable: false,
    isDocked: true,
  },
});
```

### `dockedFilter`

The `dockedFilter` object is used to configure the filter panel on the Dossier page.

- `dockedPosition` - Only `"left"` or `"right"` is accepted as the position of the docked panel.
- `canClose` - `Boolean`. If set to `false`, the panel is forced to appear.
- `dockChangeable` - `Boolean`. If set to `false`, the dock pin button is hidden. The docked status of this panel is controlled by `isDocked`.
- `isDocked` - `Boolean`. This configures whether the panel is docked.

#### Required?

No

#### Default value

`null`

If this object is not specified, the MicroStrategy Library default behavior is used.

#### Sample

The following code will dock the filter panel to the left.

```js
microstrategy.dossier.create({
  placeholder: placeholderDiv,
  url: "https://demo.microstrategy.com/MicroStrategyLibrary/app/B7CA92F04B9FAE8D941C3E9B7E0CD754/27D332AC6D43352E0928B9A1FCAF4AB0",
  dockedFilter: {
    dockedPosition: "left",
    canClose: false,
    dockChangeable: false,
    isDocked: true,
  },
});
```

### `dockedTOC`

The `dockedTOC` object is used to configure the Table of Contents (TOC) panel on the Dossier page.

- `dockedPosition` - Only `"left"` or `"right"` is accepted as the position of the docked panel.
- `theme` - The color theme of the page. Only `"light"` or `"dark"` is accepted. The default is `"light"`.
- `canClose` - `Boolean`. If set to `false`, the panel is forced to appear.
- `dockChangeable` - `Boolean`. If set to `false`, the dock/pin button is hidden. The docked status of this panel is controlled by `isDocked`.
- `isDocked` - `Boolean`. This configures whether the panel is docked.

#### Required?

No

#### Default value

`null`

If this object is not specified, the MicroStrategy Library default behavior is used.

#### Sample

```js
microstrategy.dossier.create({
  placeholder: placeholderDiv,
  url: "https://demo.microstrategy.com/MicroStrategyLibrary/app/B7CA92F04B9FAE8D941C3E9B7E0CD754/27D332AC6D43352E0928B9A1FCAF4AB0",
  dockedTOC: {
    dockedPosition: "left",
    theme: "light",
    canClose: false,
    dockChangeable: false,
    isDocked: true,
  },
});
```

### `dossierFeature`

The `dossierFeature` object is used to customize the dossier feature on the Dossier page.

- `readonly` - Enable or disable context menus. If this property is set to `true`, all context menus are disabled. This includes the visualization right-mouse-click context menu and the context menu at the top right of the visualization that contains options such as Export.

#### Required?

No

#### Default value

If this object is not specified, the MicroStrategy Library default behavior is used.

#### Sample

dossierFeature:

```js
microstrategy.dossier.create({
  placeholder: placeholderDiv,
  url: "https://demo.microstrategy.com/MicroStrategyLibrary/app/B7CA92F04B9FAE8D941C3E9B7E0CD754/27D332AC6D43352E0928B9A1FCAF4AB0",
  dossierFeature: {
    readonly: true,
  },
});
```

### `enableCollaboration`

Use `enableCollaboration` property to enable or disable collaboration-related controls of the embedded page.

#### Required?

No

#### Default value

`true`

#### Sample

enableCollaboration:

```js
microstrategy.dossier.create({
  placeholder: placeholderDiv,
  url: "https://demo.microstrategy.com/MicroStrategyLibrary/app/B7CA92F04B9FAE8D941C3E9B7E0CD754/27D332AC6D43352E0928B9A1FCAF4AB0",
  enableCollaboration: false,
});
```

### `enableCustomAuthentication`

The `enableCustomAuthentication` property specifies whether custom authentication is used.

#### Required?

No

#### Default value

`false`

User needs to log in from the default login page.

### `enableResponsive`

Specifies whether to enable responsive design.

When this is set to `true`, the placeholder is adjusted to fit the width of the viewpoint and the existing width to height ratio is used to provide the height.

#### Required?

No

#### Default value

`false`

### `filterFeature`

Use this property to customize the filter functionality on the page. All types of the properties below are `Boolean`.

- `enabled` - Enable or disable filter features. The default is `true`.
- `edit` - Show or hide the filter edit function. Enable or disable editing on the filter panel. The default is `true`.
- `summary` - Show or hide the filter summary bar. The default is `true`.

#### Required?

No

#### Default value

`null`

If this object is not specified, the MicroStrategy Library default behavior is used.

#### Sample

```js
microstrategy.dossier.create({
  placeholder: placeholderDiv,
  url: "https://demo.microstrategy.com/MicroStrategyLibrary/app/B7CA92F04B9FAE8D941C3E9B7E0CD754/27D332AC6D43352E0928B9A1FCAF4AB0",
  filterFeature: {
    enabled: true,
    edit: false,
    summary: true,
  },
});
```

### `filters`

Use the `filters` object to apply attribute selection or attribute search filters during the execution of a dossier. It supports passing multiple filter definitions with multiple selectors.

Filter Format:

```json
[
  {
    "key": "string",
    "name": "string",
    "selections": [
      {
        "id": "string",
        "name": "string"
      }
    ]
  }
]
```

- The Filter `key` or `name` identifies the filter. At least one of the two is required.
- The Element `id` or `name` identifies the selector. At least one of the two is required.

#### Required?

No

#### Default value

`null`

No filters are applied during execution.

#### Sample

Filter Key with Element ID:

```js
microstrategy.dossier.create({
  placeholder: placeholderDiv,
  url: "http://{host}:{port}/{Library}/app/{ProjectID}/{DossierID}",
  filters: [
    {
      key: "WC8587FF21995453CBE5F0B66702BF56F",
      selections: [
        {
          id: "h1;8D679D4111D3E4981000E787EC6DE8A4;20K and Under",
        },
        {
          id: "h2;8D679D4111D3E4981000E787EC6DE8A4;20K-30K",
        },
        {
          id: "h3;8D679D4111D3E4981000E787EC6DE8A4;30K-40K",
        },
      ],
    },
    {
      key: "W7EE7B7046845417E9D7743799FE7C699",
      selections: [
        {
          id: "h4;8D679D4B11D3E4981000E787EC6DE8A4;Central",
        },
        {
          id: "h2;8D679D4B11D3E4981000E787EC6DE8A4;Mid-Atlantic",
        },
      ],
    },
  ],
});
```

Filter Name with Element Name:

```js
microstrategy.dossier.create({
  placeholder: placeholderDiv,
  url: "http://{host}:{port}/{Library}/app/{ProjectID}/{DossierID}",
  filters: [
    {
      name: "Income Bracket",
      selections: [
        {
          name: "20K and Under",
        },
        {
          name: "20K-30K",
        },
        {
          name: "30K-40K",
        },
      ],
    },
  ],
});
```

### `getLoginToken`

The `getLoginToken` property specifies a function that returns a promise, which is resolved with either the authorization token (`authToken`) or the identity token (`identityToken`) The token type is specified by the `customAuthenticationType` property.

#### Required?

No

#### Default value

See the sample code in the next column for the default implementation of this function.

#### Sample

When `customAuthenticationType` is set to `CustomAuthenticationType.AUTH_TOKEN`, the following sample demonstrates how to send a fetch request to get `authToken` with your credentials. You can do this using an `XMLHttpRequest`, if your browser does not support `fetch`.

```js
microstrategy.dossier.create({
  placeholder: placeholderDiv,
  url: "http://{host}:{port}/{Library}/app/{ProjectID}/{DossierID}",
  enableCustomerAuthentication: true,
  customAuthenticationType: microstrategy.dossier.CustomAuthenticationType.AUTH_TOKEN,
  // The following function is the default implementation. User can provide custom implementation.
  getLoginToken() {
    return fetch("http://{host}:{port}/{Library}/api/auth/login", {
      method: "POST",
      credentials: "include", // including cookie
      mode: "cors", // setting as CORS mode for cross origin
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        loginMode: 1, // Standard mode
        username: "input your username",
        password: "input your password",
      }),
    })
      .then((response) => {
        if (response && response.ok) {
          return response.headers.get("X-MSTR-authToken");
        }
        throw Error("Failed to fetch auth token");
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  },
});
```

When `customAuthenticationType` is set to `CustomAuthenticationType.IDENTITY_TOKEN`, you need to provide an identity token with `getLoginToken` function.

### `instance`

Use this `instance` object to specify a dossier instance for the embedded dossier. If you would like to make some manipulation to the dossier before it is embedded, you can use this property, e.g., answering prompts. If the `instance` is used, the Embedding SDK will use it instead of creating a dossier instance.

- `mid` - This instance ID.
- `id` - Instance ID for a report-based in-memory dossier.
- `partialManipulation` - `Boolean` that indicates the personal view's partial execution status. If this is set to `true`, a personal view is in partial execution.
- `status` - The personal view's partial execution status. If this is true, it indicates a personal view is in partial execution.

#### Required?

No

#### Default value

`null`

#### Sample

Passing existing instance:

```js
microstrategy.dossier.create({
  placeholder: "placeholderDiv",
  url: "http://{host}:{port}/{Library}/app/{ProjectID}/{DossierID}",
  instance: {
    mid: "CC9F19A411EA1084548F0080EF05D751",
    status: 1,
  },
});
```

### `navigationBar`

Use the `navigationBar` object to customize the navigation bar on the page. All detailed properties below are `Boolean`.

- `enabled` - Enable or disable the navigation bar. The default is `false`.
- `gotoLibrary` - Show or hide the gotoLibrary icon. The default is `true`.
- `title` - Show or hide the dossier title. The default is `true`.
- `toc` - Show or hide the TOC icon. The default is `true`.
- `reset` - Show or hide the reset icon. The default is `true`.
- `reprompt` - Show or hide the reprompt icon. The default is `true`.
- `share` - Show or hide the share icon. The default is `true`.
- `comment` - Show or hide the comment icon. The default is `true`.
- `notification` - Show or hide the notification icon. The default is `true`.
- `filter` - Show or hide the filter icon. The default is `true`.
- `options` - Show or hide the options icon. The default is `true`.
- `bookmark` - Show or hide the bookmark icon. The default is `true`.
- `edit` - Show or hide the edit icon. The default is `false`.

#### Required?

No

#### Default value

- If `navigationBar` is `null`, the navigation bar is hidden by default.
- If `navigationBar` is not `null`, the default values of its properties take effect.

#### Sample

Navigation Bar Configuration:

```js
microstrategy.dossier.create({
  placeholder: placeholderDiv,
  url: "http://{host}:{port}/{Library}/app/{ProjectID}/{DossierID}",
  navigationBar: {
    enabled: true,
    gotoLibrary: false,
    title: false,
    toc: true,
    reset: true,
    reprompt: false,
    share: false,
    comment: true,
    notification: false,
    filter: true,
    options: true,
    bookmark: true,
    edit: false,
  },
});
```

### `customUi`

Use the `customUi` object to customize the UI component visibilities except the dossier consumption and authoring pages. The detailed properties are as below:

- `library` - This field is used to customized the UI components on the MicroStrategy Library home page. Its details could be seen in [The customized UI settings in Embedding SDK](../embed-library-main-page/embed-custom-ui-on-all-pages.md#propscustomuilibrary)
- `reportConsumption` - This field is used to customize the UI components on the report consumption page. Its details could be seen in [The customized UI settings in Embedding SDK](../embed-library-main-page/embed-custom-ui-on-all-pages.md#propscustomuireportconsumption).

#### Required?

No

#### Default value

`null`

If `customUi` or `customUi.library` is `null`, all the UI components on MicroStrategy Library home page would be visible.

#### Sample

```js
microstrategy.dossier.create({
  placeholder: placeholderDiv,
  url: "http://{host}:{port}/{Library}/app/{ProjectID}/{DossierID}",
  customUi: {
    library: {
      navigationBar: {
        enabled: true,
        sortAndFilter: true,
        title: true,
        searchBar: true,
        createNew: {
          enabled: true,
        },
        notifications: true,
        multiSelect: {
          enabled: true,
        },
        account: {
          enabled: true,
        },
      },
      sideBar: {
        enabled: true,
        show: false,
      },
    },
  },
});
```

### `optionsFeature`

Use the `optionsFeature` object to customize the Options feature on the page. All detailed properties below are `Boolean`, with `true` as the default value.

- `enabled` - Enable or disable the options feature.
- `help` - Show or hide help functionality.
- `logout` - Show or hide the logout functionality.
- `manage` - Show or hide manage functionality.
- `showTutorials` - Show or hide tutorial functionality.
- `myLibraries` - Show or hide the "My Libraries" functionality.
- `preferences` - Show or hide the preferences functionality.

#### Required?

No

#### Default value

`null`

If `optionsFeature` is `null`, the Options features are enabled. Whether you will see the interface is based on the `navigationBar` object.

#### Sample

Options Feature:

```js
microstrategy.dossier.create({
  placeholder: placeholderDiv,
  url: "http://{host}:{port}/{Library}/app/{ProjectID}/{DossierID}",
  optionsFeature: {
    enabled: true,
    help: false,
    logout: true,
    manage: false,
    showTutorials: true,
    myLibraries: true,
    preferences: false,
  },
});
```

### `shareFeature`

Use the `shareFeature` object to customize the Share features on the page. All detailed properties below are Boolean, with `true` as the default value.

- `enabled` - Enable or disable share features.
- `invite` - Show or hide invite functionality.
- `link` - Show or hide link functionality.
- `email` - Show or hide email functionality.
- `export` - Show or hide export functionality.
- `download` - Show or hide download functionality.
- `shareDossier` - Show or hide the shareDossier function.
- `subscribe` - Show or hide all entries for a subscription.

#### Required?

No

#### Default value

`null`

If `optionsFeature` is `null`, the Share features are enabled. Whether you will see the interface is based on the `navigationBar` object.

#### Sample

Share Feature:

```js
microstrategy.dossier.create({
  placeholder: placeholderDiv,
  url: "http://{host}:{port}/{Library}/app/{ProjectID}/{DossierID}",
  shareFeature: {
    enabled: true,
    invite: false,
    link: true,
    email: false,
    export: true,
    download: false,
  },
});
```

### `smartBanner`

Use the `smartBanner` property to enable or disable the smart banner feature when a user opens an embedded dossier in a mobile browser.

This property is supported on the dossier and login pages, but not the Library page. If credentials are not provided, the user is redirected to the login page and the property setting in the original URL remains in effect.

#### Required?

No

#### Default value

`false`

The smart banner does not appear by default.

#### Sample

Smart Banner:

```js
microstrategy.dossier.create({
  placeholder: placeholderDiv,
  url: "http://{host}:{port}/{Library}/app/{ProjectID}/{DossierID}",
  smartBanner: false,
});
```

### `tocFeature`

Use this property to customize the Table of Contents (TOC) feature on the page.

`enabled` - Use a Boolean to enable or disable TOC features.

#### Required?

No

#### Default value

`null`

If this object is not specified, the MicroStrategy Library default behavior is used.

#### Sample

TOC Feature:

```js
microstrategy.dossier.create({
  placeholder: placeholderDiv,
  url: "http://{host}:{port}/{Library}/app/{ProjectID}/{DossierID}",
  tocFeature: {
    enabled: true,
  },
});
```

### `uiMessage`

Use this property to customize the message features on the UI. If `disableNotification` is set to `true`, this property is ignored and all messages are hidden. All detailed properties below are `Boolean`.

- `enabled` - Enable or disable all messages.
- `addToLibrary` - Show or hide the addToLibrary message.

#### Required?

No

#### Default value

`null`

Depends on the default status of the dossier and the value in the `disableNotification` property.

#### Sample

UI Message:

```js
microstrategy.dossier.create({
  placeholder: placeholderDiv,
  url: "http://{host}:{port}/{Library}/app/{ProjectID}/{DossierID}",
  uiMessage: {
    enabled: true,
    addToLibrary: false,
  },
});
```

### `visibleTutorials`

Use this property to customize the visibility of tutorials. All detailed properties below are `Boolean`.

- `welcome` - Enable or disable the welcome tutorial.
- `library` - Enable or disable the Library tutorial.
- `dossier` - Enable or disable the dossier tutorial.
- `notification` - Enable or disable the notification tutorial.

If the welcome tutorial is enabled, the Library tutorial is also automatically enabled.

#### Required?

No

#### Default value

`null`

If this object is not specified, the MicroStrategy Library default behavior is used.

#### Sample

Visible Tutorials:

```js
microstrategy.dossier.create({
  placeholder: placeholderDiv,
  url: "http://{host}:{port}/{Library}/app/{ProjectID}/{DossierID}",
  visibleTutorials: {
    library: true,
    welcome: false,
    dossier: true,
    notification: false,
  },
});
```

### `visualizationAppearances`

If you want to show just one visualization on the dossier page, use the `visualizationAppearances` object to assign which visualization needs to be resized in the initial loading process and whether the user could see the resize button of the visualization. See [Embed a single visualization](./embed-vis.md) for more information about the feature.

Format:

```json
[
  {
    "visualizationKey": "K52",
    "size": "maximized",
    "resizeButtonVisible": false
  }
]
```

- `visualizationKey` - The key for the visualization.
- `size` - Set to `"normal"` or `"maximized"`, to restore or maximize this visualization. The default value is `"normal"`.
- `resizeButtonVisible` - Determines whether the resize button is visible. The default value is `true`.

#### Required?

No

#### Default value

`null`

No visualization needs to be maximized or restored during initial loading.

### `authoring`

The `authoring` object controls the dossier interface in authoring mode. See [Author an embedded dossier](./authoring-library.md#api-for-controlling-the-authoring-ui) for details.

### `errorHandler`

The custom error handler that is executed when an error occurs in the dossier-creating process. See [Custom error handling](./error-handling.md#custom-error-handling) for details.

### `sessionErrorHandler`

The custom error handler that is executed when the session expires in the embedding lifetime. See [Custom error handling](./error-handling.md#session-error-handling) for details.

## Method for removing an embedded dossier

### microstrategy.dossier.destroy(config)

The config parameter:

```json
  {"placeholder": placeholderDiv}
```

This method removes the embedded dossier in the same placeholder you used when calling `microstrategy.dossier.create`. The `placeholder` refers to the DOM object of the container `<div>`.

#### Return value

`null`

#### Sample

```js
microstrategy.dossier.destroy({
  placeholder: document.getElementById("embedding-dossier-container"),
});
```
