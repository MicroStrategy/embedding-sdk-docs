---
title: MstrDossier class
description: MstrDossier class
---

<Available since="2021 Update 9 (May 2023)"/>

The object returned from the `MstrEnvironment.loadDossier()` function, which allows access to the MicroStrategy dossier object.

## APIs

### The show visualizations API

#### Function

`async refresh(props)`

#### Input Parameters

| Parameter Name     | Data Type   | Description                                                                                                                                                                                                                                                                                                                                                              | Is Required |
| ------------------ | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------- |
| props              | Array       | This parameter cannot be empty. It describes the visualizations that must appear on the page. Each visualization must have a valid container. If you call `refresh()` for a second time, the visualizations rendered in the former `refresh()` call are destroyed first, then all the visualizations specified in the second `refresh()` call are shown on page by page. | true        |
| props[i].key       | String      | The visualization key id.                                                                                                                                                                                                                                                                                                                                                | true        |
| props[i].container | HTMLElement | The HTML element used for displaying the visualization. The HTML element must be in the current DOM tree of the client’s page. All elements must exist and cannot be in iframes. The `Node.contains()` function is used to determine this and is compatible with all browsers.                                                                                           | true        |

#### Response

This API returns a promise object that resolves to nothing.

#### Example

```js
try {
  const environment = await microstrategy.embeddingComponent.environments.create({
    serverUrl: "https://demo.microstrategy.com/MicroStrategyLibrary",
    getAuthToken: () => {
      // Logic similar to the existing Native Embedding SDK, but only standard auth login is allowed
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

#### API Errors

| Error Case                                                                          | Error Category | Handling Module      | Error Handling                                                                                                                 |
| ----------------------------------------------------------------------------------- | -------------- | -------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| The input parameter fails input validation                                          | Invalid input  | Native Embedding SDK | Caught by the `catch()` of the promise object                                                                                  |
| The user wants to show more than one visualization in one container in input params | Invalid input  | Native Embedding SDK | Caught by the `catch()` of the promise object                                                                                  |
| The user wants to show one visualization in multiple containers                     | Invalid input  | Native Embedding SDK | Caught by the `catch()` of the promise object                                                                                  |
| Visualization key isn't a valid visualization key in the dossier                    | Invalid input  | Native Embedding SDK | Caught by the `catch()` of the promise object                                                                                  |
| The container isn’t a valid HTML element in the DOM tree                            | Invalid input  | Native Embedding SDK | Caught by the `catch()` of the promise object                                                                                  |
| A container has children that are not shown in the visualization                    | Invalid input  | Native Embedding SDK | Caught by the `catch()` of the promise object                                                                                  |
| A container is occupied by other dossiers                                           | Invalid input  | Native Embedding SDK | Caught by the `catch()` of the promise object                                                                                  |
| Other REST API errors                                                               | Other          | Native Embedding SDK | Caught by the `catch()` of the promise object                                                                                  |
| The key is the visualization key of the visualization in the panel                  | Invalid input  | Native Embedding SDK | console err message in console "The visualization `${VisualizationKey}` is a visualization in a panel, which isn't supported." |

### The get infomation API

You can see the API at the [Getting dossier info via APIs document](dossier-info-api)
