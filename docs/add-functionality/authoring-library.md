---
title: Author an embedded dossier
description: To allow users to conveniently edit a dossier, Embedding SDK allows embedding a dossier in the authoring mode, whether it is during the initial load or in the view mode of the dossier.
---

Embedding MicroStrategy content within critical business applications empowers users to make smarter decisions by taking advantage of the dossier development efforts that occur behind the scenes. To allow users to conveniently edit a dossier, Embedding SDK allows embedding a dossier in the authoring mode, whether it is during the initial load or in the view mode of the dossier.

:::tip

To help you get started, we have provided an [example in the Embedding SDK Playground](https://microstrategy.github.io/playground/?example=g16) that will embed a dossier in authoring mode along with an edit button that you can use to switch to authoring mode. You need to modify the environment url and dossier url to use your dossier and environment. See the steps to do this in [Introduction to Embedding SDK](../).

:::

## Embedding SDK functionalities

With the Authoring Library feature, the Embedding SDK could enable the users to the things below:

- Call `microstrategy.dossier.create` API with specific initialized parameters to:

  a. Enter the authoring Library page to edit a dossier directly.

  b. Hiding the Edit button in the navigation bar of the consumption Library page, to disable the user to edit the dossier.

- Call the `Dossier.switchToMode` API to switch from view mode to authoring mode.

- Register events to notify the parent application when the dossier is saved or closed.

## Authoring mode constraints

### The availability of existing Embedding SDK APIs

In authoring mode, most dossier-related APIs are disabled as they are designed for the consumption dossier instance. The remaining APIs supported in authoring mode are shown below.

| Supported API                                   | Description                                                                                                       |
| ----------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| microstrategy.dossier.create                    | Creates or destroys the embedded dossier view.                                                                    |
| microstrategy.dossier.destroy                   | Creates or destroys the embedded dossier view.                                                                    |
| Dossier.switchToMode                            | The API added in this feature used in authoring mode.                                                             |
| Dossier.registerEventHandler                    | Adds an event handler.                                                                                            |
| Dossier.removeEventHandler                      | Removes an event handler.                                                                                         |
| Dossier.registerFilterUpdateHandler             | Calls the same dossier functions in Web with Dossier.registerEventHandler so all could be used in authoring mode. |
| Dossier.registerPageSwitchHandler               | Calls the same dossier functions in Web with Dossier.registerEventHandler so all could be used in authoring mode. |
| Dossier.registerDossierInstanceIDChangeHandler  | Calls the same dossier functions in Web with Dossier.registerEventHandler so all could be used in authoring mode. |
| Dossier.registerGraphicsSelectEventHandlerToViz | Calls the same dossier functions in Web with Dossier.registerEventHandler so all could be used in authoring mode. |
| Dossier.addCustomErrorHandler                   | Handles the error handlers.                                                                                       |
| Dossier.removeCustomErrorhandler                | Handles the error handlers.                                                                                       |
| Dossier.addSessionErrorHandler                  | Handles the error handlers.                                                                                       |
| Dossier.removeSessionErrorhandler               | Handles the error handlers.                                                                                       |
| Dossier.makeSureSessionAlive                    | Checks the session. If it is expired, you should refresh it.                                                      |

The other APIs are disabled in authoring mode. If a disabled API is called in authoring mode, an error is returned with the message, "The API ${funcName} isn't supported in the authoring mode!"

### Events

To avoid unexpected events, except the newly added events (see the callback event API and example), you cannot receive Embedding SDK events in authoring mode as they are designed for consumption mode.

### Initial parameters

The props parameter contains many fields. See [Methods and properties for an embedded dossier](./methods-and-properties.md) for more information.

The existing parameters can be roughly divided into three categories and their behaviors can be set with `dossierRenderingMode = authoring`.

- The parameters shared by both modes, for example, `URL`, `serverURL`, `applicationID`, `objectID`, and `placeholder`. These parameters only involve the embedding framework and are effective on both modes.

- The parameters used for some UI customization in consumption mode, for example, navigationBar.enabled. You can still use these parameters with dossierRenderingMode = authoring, but their effects can only be seen when switching back to consumption mode.

- The parameters used for some extra dossier instance manipulation, for example, filter and visualizationAppearances. These parameters are implementations of some embedding SDK APIs (for example, filter-related functions in the dossier class and changeVisualizationSize) for the initial workflow. As these embedding SDK APIs are forbidden in authoring mode, you must also forbid these parameters in the initial parameter in authoring mode to keep the consistent behavior. A complete list of these parameters are shown below.

| Field Name                    | Description                                                                                 |
| ----------------------------- | ------------------------------------------------------------------------------------------- |
| filters                       | Applies filters to the dossier instance in consumption mode.                                |
| visualizationAppearances      | Applies visualization appearance manipulations to the dossier instance in consumption mode. |
| visualizationSelectedElements | Applies visualization element selections to the dossier instance in consumption mode.       |

If you have set values for these fields when setting `dossierRenderingMode = authoring`, a dialog appears with the error message:

```text
The fields ["filters", "visualizationAppearances", "visualizationSelectedElements"] are not allowed to be used when "dossierRenderingMode" is "authoring". Please remove these forbidden fields and try again.
```

## Embedding SDK APIs and examples

### API for entering authoring mode or disabling authoring mode in the initial loading

#### Function

`microstrategy.dossier.create(props)`

#### Input parameters

An optional `props.dossierRenderingMode` field has been added to the props object in 2021 Update 3. The `props` parameter contains many fields. See [Methods and properties for an embedded dossier](./methods-and-properties.md) for more information.

| Parameter Name             | Data Type | Default Value | Available Values             | Description                                                                                                                                                                                     | Required? |
| -------------------------- | --------- | ------------- | ---------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| props.dossierRenderingMode | String    | consumption   | ["consumption", "authoring"] | The value is either `consumption` or `authoring`. <br/> If it is `authoring` and the configuration `feature.dossier.authoring` isn't set, or its value isn't `true`, then an error is returned. | No        |

Example:

```js
microstrategy.dossier.create({
  // ...
  dossierRenderingMode: "authoring",
});
```

#### Response

This API returns a promise `dossier` object in the resolved case, which can be used to call other dossier-owned embedding SDK APIs.

```js
const placeholderDiv = document.getElementById("dossierContainer");
let myDossier;
microstrategy.dossier
  .create({
    // ...
  })
  .then((dossier) => {
    myDossier = dossier;
    // ...
  });
```

#### Errors

When an error occurs, this API returns a promise object that in turn returns an error object in rejected cases.

| Error Case                                                                                                                                            | Error Category                        | Handling Module | Error Handling                                |
| ----------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------- | --------------- | --------------------------------------------- |
| The dossierRenderingMode parameter has the wrong input type.                                                                                          | Invalid input                         | Embedded SDK    | Display an error message and an alert dialog. |
| The dossierRenderingMode parameter is neither “consumption“ nor “authoring“.                                                                          | Invalid input                         | Embedded SDK    | Display an error message and an alert dialog. |
| A required parameter is missed or it is not in the correct format.                                                                                    | Invalid input in the unsupported case | Web Dossier     | Caught by error handler.                      |
| The unsupported fields in the authoring mode include:<ul><li>filters</li><li>visualizationAppearances</li><li>visualizationSelectedElements</li></ul> | Unsupported case                      | Embedded SDK    | Display an error message and an alert dialog. |

### API for switching to authoring mode

This API, similar to the `Dossier.resizeVisualization` API, can ignore the restriction of the initial `navigationBar.edit` parameter. This means when `navigationBar.edit` is set to false, you cannot enter authoring mode via manual actions, but are able to via this API.

#### Function

`Dossier.switchToMode(mode)`

#### Input parameters

| Parameter Name | Description                                                                                                                                      | Data Type | Available Values | Default Value |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ | --------- | ---------------- | ------------- |
| mode           | This is in the array ["authoring"]. <br/> Using API to return to consumption mode is not supported, so the input "consumption" returns an error. | String    | ["authoring"]    | N/A           |

#### Response

This API returns a promise object, similar to the ones shown below.

```js
myDossier
  .switchToMode("authoring")
  .then(() => {
    // ...
  })
  .catch((error) => {
    // ...
  });
```

Since additional feedback information is not required, the callback parameters for the resolve case are not necessary.

Similar to the behavior of the existing `goToPage` API, the user's callback should be invoked when the editing page completes loading.

| Parameter Name | Data Type    | Example                         | Comments                         |
| -------------- | ------------ | ------------------------------- | -------------------------------- |
| error          | Error object | new Error(“invalid operation!“) | See Errors for more information. |

#### Errors

When an error occurs, the API returns a promise object that in turn returns an error object in rejected cases.

| Error Case                       | Error Category   | Handling Module | Error Handling                               |
| -------------------------------- | ---------------- | --------------- | -------------------------------------------- |
| Dossier authoring isn’t allowed. | Unsupported case | Web Dossier     | Caught by the catch() of the promise object. |

### Callback for monitoring when the dossier is saved or closed

When the Save or Close button is clicked in authoring mode, an event is raised that notifies your application.

#### Event name

| Parameter Name           | Trigger                                       |
| ------------------------ | --------------------------------------------- |
| onDossierAuthoringSaved  | When the dossier is saved in authoring mode.  |
| onDossierAuthoringClosed | When the dossier is closed in authoring mode. |

#### Callback format

The following code example includes `registerEventHandler`, which is an existing API.

```js
myDossier.registerEventHandler(microstrategy.dossier.EventType.ON_DOSSIER_AUTHORING_SAVED, () => {
  // The handling logic receiving the save event
  // ...
});

myDossier.registerEventHandler(microstrategy.dossier.EventType.ON_DOSSIER_AUTHORING_CLOSED, () => {
  // The handling logic receiving the close event
  // ...
});
```

### API for hiding the edit button

#### Function

`microstrategy.dossier.create(props)`

#### Input parameters

An optional `props.navigationBar.edit` field has been added to the `props` object. The `props` parameter contains many fields. See [Methods and properties for an embedded dossier](./methods-and-properties.md) for more information.

| Parameter Name           | Data Type | Default Value | Description                                                                                                                                                                          | Required? |
| ------------------------ | --------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------- |
| props.navigationBar.edit | Boolean   | false         | The visibility of the Edit button on the navigation bar. If it's true, the edit button is the same as the OOTB Library; If it's false or not input, the edit button would be hidden. | No        |

Example:

```js
microstrategy.dossier.create({
  // ...
  navigationBar: {
    edit: false,
  },
});
```

If you do not enter a value for `navigationBar`, the dossier runs using the old behavior and the navigation bar is hidden.

#### Response

This API returns a `dossier` promise object in the resolved case, which can be used to call other dossier-owned embedding SDK APIs.

```js
const placeholderDiv = document.getElementById("dossierContainer");
let myDossier;
microstrategy.dossier
  .create({
    // ...
  })
  .then((dossier) => {
    myDossier = dossier;
    // ...
  });
```

### API for controlling the authoring UI

#### Function

`microstrategy.dossier.create(props)`

#### Input parameters

| Parameter Names                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Data Type | Default Value | Description                                                            | Required? |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ------------- | ---------------------------------------------------------------------- | --------- |
| props.authoring.menubar.library.visible                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Boolean   | true          | Show or hide corresponding Library home button in the authoring UI.    | No        |
| props.authoring.toolbar.tableOfContents.visible <br/>props.authoring.toolbar.undo.visible <br/>props.authoring.toolbar.redo.visible <br/>props.authoring.toolbar.refresh.visible <br/>props.authoring.toolbar.pauseDataRetrieval.visible <br/>props.authoring.toolbar.reprompt.visible <br/>props.authoring.toolbar.dividerLeft.visible <br/>props.authoring.toolbar.addData.visible <br/>props.authoring.toolbar.addChapter.visible <br/>props.authoring.toolbar.addPage.visible <br/>props.authoring.toolbar.insertVisualization.visible <br/>props.authoring.toolbar.insertFilter.visible <br/>props.authoring.toolbar.insertText.visible <br/>props.authoring.toolbar.insertImage.visible <br/>props.authoring.toolbar.insertHtml.visible <br/>props.authoring.toolbar.insertShape.visible <br/>props.authoring.toolbar.insertPanelStack.visible <br/>props.authoring.toolbar.insertInfoWindow.visible <br/>props.authoring.toolbar.save.visible <br/>props.authoring.toolbar.dividerRight.visible <br/>props.authoring.toolbar.more.visible <br/>props.authoring.toolbar.freeformLayout.visible <br/>props.authoring.toolbar.nlp.visible <br/>props.authoring.toolbar.responsiveViewEditor.visible <br/>props.authoring.toolbar.responsivePreview.visible | Boolean   | true          | Show or hide corresponding buttons on the toolbar in the authoring UI. | No        |
| props.authoring.panelVisibility.contents <br/>props.authoring.panelVisibility.datasets <br/>props.authoring.panelVisibility.editor <br/>props.authoring.panelVisibility.filter <br/>props.authoring.panelVisibility.format <br/>props.authoring.panelVisibility.layers                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Boolean   | true          | Show or hide corresponding authoring panels.                           | No        |

The `props` parameter contains many fields. See [Methods and properties for an embedded dossier](./methods-and-properties.md) for more information.

Example:

```js
microstrategy.dossier.create({
  placeholder: placeholderDiv,
  url: "https://demo.microstrategy.com/MicroStrategyLibrary/app/EC70648611E7A2F962E90080EFD58751/19A95FA711EC45A93E0B0080AFAB8FDF", // {host}:{port}/{Library}/app/{ProjectID}/{DossierID}
  authoring: {
    menubar: { library: { visible: false } },
    toolbar: { tableOfContents: { visible: false } },
    panelVisibility: { contents: false },
  },
});
```

#### Response

This API returns a `dossier` promise object in the resolved case, which can be used to call other dossier-owned embedding SDK APIs.

```js
const placeholderDiv = document.getElementById("dossierContainer");
let myDossier;
microstrategy.dossier
  .create({
    // ...
  })
  .then((dossier) => {
    myDossier = dossier;
    // ...
  });
```

#### Errors

When an error occurs, the API returns a promise object that in turn returns an error object in rejected cases.

| Error Case                                        | Error Category | Handling Module | Error Handling                                |
| ------------------------------------------------- | -------------- | --------------- | --------------------------------------------- |
| The authoring parameter has the wrong input type. | Invalid input  | Embedded SDK    | Display an error message and an alert dialog. |
| The authoring.{key} has the wrong input type.     | Invalid input  | Embedded SDK    | Display an error message and an alert dialog. |

### API for creating a new dossier for authoring

#### Function

`microstrategy.dossier.create(props)`

#### Input parameters

| Parameter Names  | Data Type | Default Value | Description                                                                                                                                                                                                                               | Required? |
| ---------------- | --------- | ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| props.newDossier | Boolean   | false         | Use when creating a new dossier from scratch. When set to `true`, a new dossier instance is created from a blank dossier template. In this case, the `instance`, `objectID`, or `url` parameters don't have to and shouldn't be provided. | No        |

The `props` parameter contains many fields. See [Methods and properties for an embedded dossier](./methods-and-properties.md) for more information.

Example:

```js
microstrategy.dossier.create({
  placeholder: placeholderDiv,
  newDossier: true,
  dossierRenderingMode: true,
});
```

#### Response

This API returns a `dossier` promise object in the resolved case, which can be used to call other dossier-owned embedding SDK APIs.

```js
const placeholderDiv = document.getElementById("dossierContainer");
let myDossier;
microstrategy.dossier
  .create({
    // ...
  })
  .then((dossier) => {
    myDossier = dossier;
    // ...
  });
```

#### Errors

When an error occurs, the API returns a promise object that in turn returns an error object in rejected cases.

| Error Case                                           | Error Category | Handling Module | Error Handling                                |
| ---------------------------------------------------- | -------------- | --------------- | --------------------------------------------- |
| There are inconsistent parameters with “newDossier". | Invalid input  | Embedded SDK    | Display an error message and an alert dialog. |
