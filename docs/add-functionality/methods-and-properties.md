---
title: Methods and Properties for an Embedded Dossier
description: When you embed a MicroStrategy dossier into a web page, you use the `create(props)` method under the `microstrategy.dossier` namespace.
---

When you embed a MicroStrategy dossier into a web page, you use the `create(props)` method under the `microstrategy.dossier` namespace.

## Method

### microstrategy.dossier.create(props)

This method creates an iFrame on the web page (in the location specified by the `placeholder` property) and inserts a link to the URL (specified by the `url` property) where the dossier to be embedded is located.

#### Return Value

This method returns a promise, which is resolved when the dossier instance is created.

The `props` parameter contains required key:value pairs that define the URL where the dossier is located and the ID of the `<div>` placeholder where the iFrame containing the dossier instance will be created. It can also contain other optional key:value pairs to customize the UI, features, and authentication.

The `props` parameter can contain the following key:value pairs:

## Properties

### placeholder

Reference for the container `<div>`.

#### Required?

Yes

#### Default Value

N/A

#### Sample

N/A

### url or serverURL, application ID, objectID, and pageKey

url refers to the full URL of the dossier to embed. There are two ways to configure the URL to embed the dossier in Library:

1. Use the full URL

1. Build the URL using: serverURL + '/app/' + applicationID + '/' + objectID + '/' + pageKey

#### Required?

- `url` is required

- `serverURL`, `application ID`, and `objectID` are required, while `pageKey` is optional.

#### Default Value

N/A

#### Sample

```js
microstrategy.dossier.create({
  placeholder: placeholderDiv,
  url: "http://{host}:{port}/{Library}/app/{ProjectID}/{DossierID>}",
});
```

### containerHeight

Sets the height of the placeholder.

If the style of the placeholder has a height value, the containerHeight property is ignored.

If the enableResponsive property is set to true, the containerWidth property is ignored and the containerHeight property takes effect.

The containerHeight property is applied as a style: style="height: $(containerHeight)".

You should not set the containerHeight property to 100% if the `<div>` container has no parent container, but is attached directly to the `<body>`.

#### Required?

No

#### Default Value

600px

#### Sample

N/A

### containerWidth

Sets the width of the placeholder.

If the style of the placeholder has a width value, the containerWidth property is ignored.

If the enableResponsive property is set to true, the containerWidth property is ignored and the width is adjusted to fit the viewport.

#### Required?

No

#### Default Value

800px

#### Sample

N/A

### customAuthenticationType

Specifies the token type returned by the getLoginToken function. There are two possible values, which can be provided by the CustomAuthenticationType enumeration.

#### Required?

No

#### Default Value

Custom Authentication Type.IDENTITY_TOKEN

#### Sample

N/A

### disableNotification

Specifies whether to display messages, such as Add to library in the notification bar. If this property is set to true, message do not appear in the notification bar.

Manipulations are not affected by this property. They persist in the same way as the default dossier status.

#### Required?

No

#### Default Value

`true`

#### Sample

N/A

### dockedComment

Use this property to configure the Comment panel on the UI.

`dockedPosition` - Only "left" or "right" is accepted as the position of the docked panel.

`canClose` - `Boolean`. If set to false, the panel is forced to appear.

`dockChangeable` - `Boolean`. If set to false, the dock/pin button is hidden. The docked status of this panel is controlled by `isDocked`.

`isDocked` - `Boolean`. This configures whether the panel is docked.

#### Required?

No

#### Default Value

`null`

The default status is used on the dossier.

#### Sample

Docked Comment:

```js
microstrategy.dossier.create({
  placeholder: placeholderDiv,
  url: "http://{host}:{port}/{Library}/app/{ProjectID}/{DossierID>}",
  dockedComment: {
    dockedPosition: "left",
    canClose: false,
    dockChangeable: false,
    isDocked: true,
  },
});
```

### dockedFilter

Use this property to configure the Comment panel on the UI.

`dockedPosition` - Only "left" or "right" is accepted as the position of the docked panel.

`canClose` - `Boolean`. If set to false, the panel is forced to appear.

`dockChangeable` - `Boolean`. If set to false, the dock/pin button is hidden. The docked status of this panel is controlled by `isDocked`.

`isDocked` - Boolean. This configures whether the panel is docked.

#### Required?

No

#### Default Value

`null`

The default status is used on the dossier.

#### Sample

Docked Filter:

```js
microstrategy.dossier.create({
  placeholder: placeholderDiv,
  url: "http://{host}:{port}/{Library}/app/{ProjectID}/{DossierID>}",
  dockedFilter: {
    dockedPosition: "left",
    canClose: false,
    dockChangeable: false,
    isDocked: true,
  },
});
```

### dockedTOC

Use this property to configure the Comment panel on the UI.

`dockedPosition` - Only "left" or "right" is accepted as the position of the docked panel.

`canClose` - `Boolean`. If set to false, the panel is forced to appear.

`dockChangeable` - `Boolean`. If set to false, the dock/pin button is hidden. The docked status of this panel is controlled by `isDocked`.

`isDocked` - `Boolean`. This configures whether the panel is docked.

#### Required?

No

#### Default Value

`null`

The default status is used on the dossier.

#### Sample

Docked TOC:

```js
microstrategy.dossier.create({
  placeholder: placeholderDiv,
  url: "http://{host}:{port}/{Library}/app/{ProjectID}/{DossierID>}",
  dockedTOC: {
    dockedPosition: "left",
    theme: "light",
    canClose: false,
    dockChangeable: false,
    isDocked: true,
  },
});
```

### dossierFeature

Use this property to customize the dossier feature on the UI.

`readonly` - Enable or disable context menus. If this property is set to true, all context menus are disabled. This includes the visualization right-mouse click context menu and the context menu at the top right of the visualization, that contains such options as Export.

#### Required?

No

#### Default Value

`null`

The default status is used on the dossier.

#### Sample

dossierFeature:

```js
microstrategy.dossier.create({
  placeholder: placeholderDiv,
  url: "http://{host}:{port}/{Library}/app/{ProjectID}/{DossierID>}",
  dossierFeature: {
    readonly: true,
  },
});
```

### enableCollaboration

Use this Boolean property to enable or disable collaboration-related controls of Library.

#### Required?

No

#### Default Value

`null`

The default status is used on the dossier.

#### Sample

enableCollaboration:

```js
microstrategy.dossier.create({
  placeholder: placeholderDiv,
  url: "http://{host}:{port}/{Library}/app/{ProjectID}/{DossierID>}",
  enableCollaboration: true,
});
```

### enableCustomAuthentication

Specifies whether custom authentication is enabled.

#### Required?

No

#### Default Value

`false`

User needs to log in from the default login page.

#### Sample

N/A

### enableResponsive

Specifies whether to enable responsive design.

When this is set to true, the placeholder is adjusted to fit the width of the viiewpoint and the existing width/height ratio is used to provide the height.

#### Required?

No

#### Default Value

`false`

#### Sample

N/A

### filterFeature

Use this property to customize the filter functionality on the UI. All detailed properties below are Boolean.

`enabled` - Enable or disable filter features.

`edit` - Show or hide the filter edit function. Enable or disable editing on the filter panel.

`summary` - Show or hide the filter summary bar.

#### Required?

No

#### Default Value

`null`

The default status is used on the dossier.

#### Sample

Filter Feature:

```js
microstrategy.dossier.create({
  placeholder: placeholderDiv,
  url: "http://{host}:{port}/{Library}/app/{ProjectID}/{DossierID>}",
  filterFeature: {
    enabled: true,
    edit: false,
    summary: true,
  },
});
```

### filters

Use this property to apply attribute selection or attribute search filters during the execution of a dossier. It supports passing multiple filter definitions with multiple selectors. <br/><br/>Filter Format: <pre>[{ "key": "string", <br/> "name": "string", <br/> "selections": [{ <br/> "id": "string", <br/> "name": "string" <br/> }] <br/>}]</pre> Filter Key/Filter Name Identifies the filter. At least one of the two is required.<br/><br/>Element ID/Element Name Identifies the filter. At least one of the two is required. <br/><br/>Only attribute selection filters and attribute search filters are supported. Attribute slider, calendar, and metric filters are not supported.

#### Required?

No

#### Default Value

`null`

No filters are applied during execution.

#### Sample

Filter Key with Element ID:

```js
microstrategy.dossier.create({
  placeholder: placeholderDiv,
  url: "http://{host}:{port}/{Library>}/app/{ProjectID}/{DossierID}",
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
  url: "http://{host}:{port}/{Library}/app/{ProjectID}/{DossierID>}",
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

### getLoginToken

Specifies a function that returns a promise, which is resolved with either authorization token (`authToken`) or the identity token (`identityToken`) The token type is specified by the customAuthenticationType property.

#### Required?

No

#### Default Value

See the sample code in the next column for the default implementation of this function.

#### Sample

When `customAuthenticationType` is set to `CustomAuthenticationType.AUTH_TOKEN`, the following sample demonstrates how to send a fetch request to get `authToken` with your credentials. You can do this using an `XMLHttpRequest`, if your browser does not support `fetch`.

```js
microstrategy.dossier.create({
  placeholder: placeholderDiv,
  url: "http://{host}:{port}/{Library>}/app/{ProjectID}/{DossierID}",
  enableCustomerAuthentication: true,
  customAuthenticationType: microstrategy.dossier.CustomAuthenticationType.AUTH_TOKEN,
  //The following function is the default implementation. User can provide custom implementation.
  getLoginToken: function () {
    return fetch("http://{host}:{port}/{Library}/api/auth/login", {
      method: "POST",
      credentials: "include", //including cookie
      mode: "cors", //setting as CORS mode for cross origin
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        loginMode: 1, // Standard mode
        username: "input your username",
        password: "input your password",
      }),
    }).then(function (response) {
      if (response && response.ok) {
        return response.headers.get("X-MSTR-authToken");
      }
    });
  },
});
```

When `customAuthenticationType` is set to `CustomAuthenticationType.IDENTITY_TOKEN`, you need to add a component to your web server. Refer to Use Custom Authentication for more information.

### instance

Use this property to specify the instance information for the embedded dossier.

`mid` - This instance ID.

`id` - Instance ID for a report-based in-memory dossier

`partialManipulation` - `Boolean` that indicates the personal view partial execution status. If this is set to true, a personal view is in partial execution.

`status` - The personal view partial execution status. If this is true, it indicates a personal view is in partial execution.

#### Required?

No

#### Default Value

`null`

#### Sample

Pass existing instance:

```js
microstrategy.dossier.create({
  placeholder: "placeholderDiv",
  url: "http://{host}:{port}/{Library}/app/{ProjectID}/{DossierID>}",
  instance: {
    mid: "CC9F19A411EA1084548F0080EF05D751",
    status: 1,
  },
});
```

### navigationBar

Use this property to customize the navigation bar on the UI. All detailed properties below are Boolean.

`enabled` - Enable or disable the navigation bar.

`gotoLibrary` - Show or hide the gotoLibrary icon.

`title` - Show or hide the dossier title.

`toc` - Show or hide the TOC icon.

`reset` - Show or hide the reset icon.

`reprompt` - Show or hide the reprompt icon.

`share` - Show or hide the share icon.

`comment` - Show or hide the comment icon.

`notification` - Show or hide the notification icon.

`filter` - Show or hide the filter icon.

`options` - Show or hide the options icon.

`search` - Show or hide the search icon.

`bookmark` - Show or hide the bookmark icon.

#### Required?

No

#### Default Value

`null`

The navigation bar is hidden by default.

#### Sample

Navigation Bar Configuration:

```js
microstrategy.dossier.create({
  placeholder: placeholderDiv,
  url: "http://{host}:{port}/{Library}/app/{ProjectID}/{DossierID>}",
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
    search: false,
    bookmark: true,
  },
});
```

### optionsFeature

Use this property to customize the Options feature on the UI. All detailed properties below are Boolean.

`enabled` - Enable or disable the options features.

`help` - Show or hide help functionality.

`logout` - Show or hide the logout functionality.

`manage` - Show or hide manage functionality.

`showTutorials` - Show or hide tutorial functionality.

#### Required?

No

#### Default Value

`null`

The default status is used on the dossier.

#### Sample

Options Feature:

```js
microstrategy.dossier.create({
  placeholder: placeholderDiv,
  url: "http://{host}:{port}/{Library}/app/{ProjectID}/{DossierID>}",
  optionsFeature: {
    enabled: true,
    help: false,
    logout: true,
    manage: false,
    showTutorials: true,
  },
});
```

### shareFeature

Use this property to customize the Share feature on the UI. All detailed properties below are Boolean.

`enabled` - Enable or disable share features.

`invite` - Show or hide invite functionality.

`link` - Show or hide link functionality.

`email` - Show or hide email functionality.

`export` - Show or hide export functionality.

`download` - Show or hide download functionality.

`shareDossier` - Show or hide the shareDossier function.

`subscribe` - Show or hide all entries for a subscription.

#### Required?

No

#### Default Value

`null`

The default status is used on the dossier.

#### Sample

Share Feature:

```js
microstrategy.dossier.create({
  placeholder: placeholderDiv,
  url: "http://{host}:{port}/{Library}/app/{ProjectID}/{DossierID>}",
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

### smartBanner

Use this property to enable or disable the smart banner feature when a user opens an embedded dossier in a mobile browser.

This property is supported on the dossier and login pages, but not the Library page. If credentials are not provided, the user is redirected to the login page and the property setting in the original URL remains in effect.

#### Required?

No

#### Default Value

`false`

The smart banner does not appear by default.

#### Sample

Smart Banner:

```js
microstrategy.dossier.create({
  placeholder: placeholderDiv,
  url: "http://{host}:{port}/{Library}/app/{ProjectID}/{DossierID>}",
  smartBanner: false,
});
```

### tocFeature

Use this property to customize the TOC feature on the UI.

`enabled` - Use a Boolean to enable or disable TOC features.

#### Required?

No

#### Default Value

`null`

The default status is used on the dossier.

#### Sample

TOC Feature:

```js
microstrategy.dossier.create({
  placeholder: placeholderDiv,
  url: "http://{host}:{port}/{Library}/app/{ProjectID}/{DossierID>}",
  tocFeature: {
    enabled: true,
  },
});
```

### uiMessage

Use this property to customize the message features on the UI. If disableNotification is set to true, this property is ignored and all messages are hidden. All detailed properties below are Boolean.

`enabled` - Enable or disable all messages.

`addToLibrary` - Show or hide the addToLibrary message.

#### Required?

No

#### Default Value

`null`

Depends on the default status of the dossier and the value in the disableNotification property.

#### Sample

UI Message:

```js
microstrategy.dossier.create({
  placeholder: placeholderDiv,
  url: "http://{host}:{port}/{Library}/app/{ProjectID}/{DossierID>}",
  uiMessage: {
    enabled: true,
    addToLibrary: false,
  },
});
```

### visibleTutorials

Use this property to customize the visibility of tutorials. All detailed properties below are Boolean.

`welcome` - Enable or disable the welcome tutorial.

`library` - Enable or disable the Library tutorial.

`dossier` - Enable or disable the dossier tutorial.

`notification` - Enable or disable the notification tutorial.

If the welcome tutorial is enabled, the Library tutorial is also automatically enabled.

#### Required?

No

#### Default Value

`null`

The default status is used on the dossier.

#### Sample

Visible Tutorials:

```js
microstrategy.dossier.create({
  placeholder: placeholderDiv,
  url: "http://{host}:{port}/{Library}/app/{ProjectID}/{DossierID>}",
  visibleTutorials: {
    library: true,
    welcome: false,
    dossier: true,
    notification: false,
  },
});
```

### visualizationAppearances

Use this property to assign which visualization needs to be resized in the initial loading process, and whether the user could see the resize button of the visualization. See Embed a Single Visualization for more information.

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

`visualizationKey` - The visualization node key input by you.

`size` - Set to "normal" or "maximized", to restore or maximize this visualization.

`resizeButtonVisible` - Determines whether the resize button is visible. If a Boolean is not provided, the visibility remains the same.

#### Required?

No

#### Default Value

`null`

No visualization needs to be maximized or restored during initial loading

#### Sample

N/A

## Method for Removing an Embedded Dossier

### microstrategy.dossier.destroy({placeholder: placeholderDiv})

Destroy the embedded dossier in the same placeholder you used when calling `microstrategy.dossier.create.`.

#### Return Value

`null`
