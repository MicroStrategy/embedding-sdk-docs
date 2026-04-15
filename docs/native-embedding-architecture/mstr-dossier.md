---
title: MstrDossier class
description: MstrDossier class
---

<Available since="2021 Update 9 (May 2023)"/>

The object returned from the `MstrEnvironment.loadDossier()` function, which allows access to the Strategy dashboard object.

## APIs

### The show visualizations API

#### Function

`async refresh(props, options)`

#### Input Parameters

| Parameter Name             | Data Type   | Description                                                                                                                                                                                                                                                                                                                                                              | Is Required |
| -------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------- |
| props                      | Array       | This parameter cannot be empty. It describes the visualizations that must appear on the page. Each visualization must have a valid container. If you call `refresh()` for a second time, the visualizations rendered in the former `refresh()` call are destroyed first, then all the visualizations specified in the second `refresh()` call are shown on page by page. | true        |
| props[i].key               | String      | The visualization key id.                                                                                                                                                                                                                                                                                                                                                | true        |
| props[i].container         | HTMLElement | The HTML element used for displaying the visualization. The HTML element must be in the current DOM tree of the client's page. All elements must exist and cannot be in iframes. The `Node.contains()` function is used to determine this and is compatible with all browsers.                                                                                           | true        |
| props[i].infoWindow        | Object      | An object that controls the information window behavior for the visualization.                                                                                                                                                                                                                                                                                           | false       |
| props[i].infoWindow.enable | Boolean     | When set to `true`, enables the information window rendering for the visualization.                                                                                                                                                                                                                                                                                      | false       |
| options                    | Object      | An object containing optional parameters to control the behavior of the `refresh()` function.                                                                                                                                                                                                                                                                            | false       |
| options.signal             | AbortSignal | An `AbortSignal` object that allows you to abort the refresh operation. This signal is typically created by an `AbortController` and can be used to cancel the operation by calling `AbortController.abort()` if needed.                                                                                                                                                 | false       |

#### Response

This API returns a promise object that resolves to nothing.

#### Example

```js
try {
  const environment = await microstrategy.embeddingComponent.environments.create({
    serverUrl: "https://demo.microstrategy.com/MicroStrategyLibrary",
    getAuthToken: () => {
      // Logic similar to the existing Native Embedding SDK.
    },
  });
  const dossier = await environment.loadDossier({
    projectId: "B19DEDCC11D4E0EFC000EB9495D0F44F",
    objectId: "D9AB379D11EC92C1D9DC0080EFD415BB",
  });
  // Begin here
  const containerHtmlElement = document.getElementById("containerA");
  await dossier.refresh([
    {
      key: "K66",
      container: containerHtmlElement,
    },
  ]);
  // Your own code after the visualizations are all loaded
} catch (error) {
  // Add your own handling logic here
}
```

With AbortController:

```js
const abortController = new AbortController();
try {
  const environment = await microstrategy.embeddingComponent.environments.create({
    serverUrl: "https://demo.microstrategy.com/MicroStrategyLibrary",
    getAuthToken: () => {
      // Logic similar to the existing Native Embedding SDK.
    },
  });
  const dossier = await environment.loadDossier({
    projectId: "B19DEDCC11D4E0EFC000EB9495D0F44F",
    objectId: "D9AB379D11EC92C1D9DC0080EFD415BB",
  });
  // Begin here
  const containerHtmlElement = document.getElementById("containerA");
  // Use the abortController's signal
  dossier.refresh(
    [
      {
        key: "K66",
        container: containerHtmlElement,
      },
    ],
    { signal: abortController.signal }
  );
  // Your own code after the visualizations are all loaded
} catch (error) {
  // Add your own handling logic here
}

if (shouldAbortRefresh) {
  abortController.abort();
}
```

With InfoWindow:

```js
try {
  const environment = await microstrategy.embeddingComponent.environments.create({
    serverUrl: "https://demo.microstrategy.com/MicroStrategyLibrary",
    getAuthToken: () => {
      // Logic similar to the existing Native Embedding SDK.
    },
  });
  const dossier = await environment.loadDossier({
    projectId: "B19DEDCC11D4E0EFC000EB9495D0F44F",
    objectId: "D9AB379D11EC92C1D9DC0080EFD415BB",
  });
  // Begin here
  const containerHtmlElement = document.getElementById("containerA");
  await dossier.refresh([
    {
      key: "K66",
      container: containerHtmlElement,
      infoWindow: {
        enable: true,
      },
    },
  ]);
  // Your own code after the visualizations are all loaded
} catch (error) {
  // Add your own handling logic here
}
```

#### API Errors

| Error Case                                                                                               | Error Category | Handling Module      | Error Handling                                                                                                                 |
| -------------------------------------------------------------------------------------------------------- | -------------- | -------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| The input parameter fails input validation                                                               | Invalid input  | Native Embedding SDK | Caught by the `catch()` of the promise object                                                                                  |
| The user wants to show more than one visualization in one container in input params                      | Invalid input  | Native Embedding SDK | Caught by the `catch()` of the promise object                                                                                  |
| The user wants to show one visualization in multiple containers                                          | Invalid input  | Native Embedding SDK | Caught by the `catch()` of the promise object                                                                                  |
| Visualization key isn't a valid visualization key in the dashboard                                       | Invalid input  | Native Embedding SDK | Caught by the `catch()` of the promise object                                                                                  |
| The container isn’t a valid HTML element in the DOM tree                                                 | Invalid input  | Native Embedding SDK | Caught by the `catch()` of the promise object                                                                                  |
| A container has children that are not shown in the visualization                                         | Invalid input  | Native Embedding SDK | Caught by the `catch()` of the promise object                                                                                  |
| A container is occupied by other dossiers                                                                | Invalid input  | Native Embedding SDK | Caught by the `catch()` of the promise object                                                                                  |
| Other REST API errors                                                                                    | Other          | Native Embedding SDK | Caught by the `catch()` of the promise object                                                                                  |
| The key is the visualization key of the visualization in the panel                                       | Invalid input  | Native Embedding SDK | console err message in console "The visualization `${VisualizationKey}` is a visualization in a panel, which isn't supported." |
| Info window is not found for the specified visualization key                                             | Invalid input  | Native Embedding SDK | Console error message: `Info window is not found for visualization key:${vizKey}.`                                             |
| Object you pass to AbortController.abort(), or `AbortError: signal is aborted without reason` otherwise. | Abort Error    | Native Embedding SDK | Caught by the `catch()` of the promise object                                                                                  |

### The get information API

You can see the API at the [Getting dashboard info via APIs document](dossier-info-api)

### The apply manipulation actions API

#### Function

`async applyManipulations(manipulations)`

#### Input Parameters

| Parameter Name                    | Data Type | Description                                                                                                                               | Is Required |
| --------------------------------- | --------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| manipulations                     | Array     | An array of manipulation actions to apply in a batch operation. Each manipulation can be either a filter action or a panel switch action. | true        |
| manipulations[i].action           | String    | The type of manipulation action. Supported values: `'setFilter'`, `'setCurrentPanel'`                                                     | true        |
| manipulations[i].filterKey        | String    | (Required for 'setFilter' action) The filter key to apply the selection to                                                                | false       |
| manipulations[i].currentSelection | Object    | (Required for 'setFilter' action) The filter selection object                                                                             | false       |
| manipulations[i].panelKey         | String    | (Required for 'setCurrentPanel' action) The panel key to switch to                                                                        | false       |

#### Response

This API returns a promise object that resolves to an array of validated manipulations.

#### Example

Apply filter and switch panel in a single batch operation:

```js
try {
  await mstrDossier.applyManipulations([
    {
      action: "setFilter",
      filterKey: "K46",
      currentSelection: {
        selectionStatus: "included",
        elements: [{ id: "h2014;8D679D5111D3E4981000E787EC6DE8A4", name: "2014" }],
      },
    },
    {
      action: "setCurrentPanel",
      panelKey: "W63",
    },
  ]);
} catch (error) {
  // Your error handling code
}
```

Switch panel only:

```js
try {
  await mstrDossier.applyManipulations([
    {
      action: "setCurrentPanel",
      panelKey: "W63",
    },
  ]);
} catch (error) {
  // Your error handling code
}
```

#### API Errors

| Error Case                        | Error Category | Handling Module      | Error Handling                                |
| --------------------------------- | -------------- | -------------------- | --------------------------------------------- |
| Invalid action type               | Invalid input  | Native Embedding SDK | Caught by the `catch()` of the promise object |
| Invalid filter key                | Invalid input  | Native Embedding SDK | Caught by the `catch()` of the promise object |
| Invalid panel key                 | Invalid input  | Native Embedding SDK | Caught by the `catch()` of the promise object |
| Panel is inside an info window    | Invalid input  | Native Embedding SDK | Caught by the `catch()` of the promise object |
| Panel stack is not a generic type | Invalid input  | Native Embedding SDK | Caught by the `catch()` of the promise object |
| Other REST API errors             | Other          | Native Embedding SDK | Caught by the `catch()` of the promise object |

For more information about embedding panel stacks and using manipulation actions, see [Embed panel stacks](embed-panel-stacks.md).
