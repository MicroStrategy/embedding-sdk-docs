---
title: MstrDossier Class
---

An instance of this class is returned from `MstrEnvironment.loadDossier()` function, which allows access to the MicroStrategy Dossier object.

## APIs

### The Show Visualizations API

#### Function

async refresh(props)

#### Input Parameters

| Parameter Name     | Data Type   | Description                                                                                                                                                                                                                                                                                                                                                                         | Is Required |
| ------------------ | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| props              | Array       | Couldn’t be empty. <br/> It describes the visualizations that needs to shown on the page. Each visualization must have a valid container. <br/> If you call `refresh()` for the second time, the visualizations rendered in the former `refresh()` call would be destroyed first, then all the visualizations specified in the second `refresh()` call would be shown page by page. | true        |
| props[i].key       | String      | The visualization key id.                                                                                                                                                                                                                                                                                                                                                           | true        |
| props[i].container | HTMLElement | The HTML element that is used for showing the visualization.<br/> The HTML element must be in the current dom tree of the client’s page. The non-exist element or the element in an iframe couldn’t work. We would use the function Node.contains() to do this judgement, which is compatible in all browsers.                                                                      | true        |

#### Response

This API would return a Promise object that resolves to nothing.

#### Example

```js
try {
  const environment = await microstrategy.embeddingComponent.environments.create({
    serverUrl: "https://example.com/MicroStrategyLibrary",
    getAuthToken: () => {
      // The similar logic as existing Embedding SDK, but only allows standard auth login
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

| Error Case                                                                        | Error Category | Handling Module | Error Handling                              |
| --------------------------------------------------------------------------------- | -------------- | --------------- | ------------------------------------------- |
| The input parameter fails input validation                                        | Invalid input  | Embedding SDK   | Caught by the catch() of the promise object |
| The user wants to show more than 1 visualization in one container in input params | Invalid input  | Embedding SDK   | Caught by the catch() of the promise object |
| The user wants to show 1 visualization in multiple containers                     | Invalid input  | Embedding SDK   | Caught by the catch() of the promise object |
| Visualization key isn't a valid visualization key in the dossier                  | Invalid input  | Embedding SDK   | Caught by the catch() of the promise object |
| The container isn’t a valid HTML element in the DOM tree                          | Invalid input  | Embedding SDK   | Caught by the catch() of the promise object |
| Some container has children that are not our shown visualization                  | Invalid input  | Embedding SDK   | Caught by the catch() of the promise object |
| The REST API errors                                                               | Other          | Embedding SDK   | Caught by the catch() of the promise object |
