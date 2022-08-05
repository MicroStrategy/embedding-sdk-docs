---
title: MstrEnvironment Namespace
---

This instance of this class is the object returned from `microstrategy.embeddingComponent.environments.create()` function, which allows access to the MicroStrategy application.

## APIs

### The Load Dossier API

#### Function

async loadDossier(props)

#### Input Parameters

| Parameter Name   | Data Type | Description                                                                                                  | Is Required |
| ---------------- | --------- | ------------------------------------------------------------------------------------------------------------ | ----------- |
| props.projectId  | String    | The project ID. Should be a GUID                                                                             | true        |
| props.objectId   | String    | The dossier ID. Should be a valid dossier ID. If the ID is a document ID or report ID, would report an error | true        |
| props.instanceId | String    | The dossier instance ID, if it already exists.                                                               | false       |

The `projectId` + `objectId` would be used as the identifier of the dossier. If the function is called 2 times with the same parameter, in their callback, the same MstrDossier object would be returned.

#### Response

This API would return a Promise object that resolves to a MstrDossier object.

#### Example

```js
try {
  const environment = await microstrategy.embeddingComponent.environments.create({
    serverUrl: "https://example.com/MicroStrategyLibrary",
    getAuthToken: () => {
      // The similar logic as existing Embedding SDK, but only allows standard auth login
    },
  });
  // Begin here
  const dossier = await environment.loadDossier({
    projectId: "B19DEDCC11D4E0EFC000EB9495D0F44F",
    objectId: "D9AB379D11EC92C1D9DC0080EFD415BB",
  });
} catch (error) {
  // Your own error handling logic
}
```

#### API Errors

| Error Case                                                  | Error Category   | Handling Module | Error Handling                              |
| ----------------------------------------------------------- | ---------------- | --------------- | ------------------------------------------- |
| The input parameter fails input validation                  | Invalid input    | Embedding SDK   | Caught by the catch() of the promise object |
| The user wants to load more than 1 dossier in 1 environment | Unsupported case | Embedding SDK   | Caught by the catch() of the promise object |
| The REST API errors                                         | Other            | Embedding SDK   | Caught by the catch() of the promise object |

### The Destroy Dossier API

#### Function

async unloadDossier(dossier)

#### Input Parameters

| Parameter Name | Data Type         | Description                                                | Is Required |
| -------------- | ----------------- | ---------------------------------------------------------- | ----------- |
| dossier        | MstrDossier class | The MstrDossier object created by the loadDossier function | true        |

#### Response

This API would return a Promise object that resolves to a MstrDossier object.

#### Example

```js
try {
  // The logic to generate a MstrDossier object
  await environment.unloadDossier(dossier);
} catch (error) {
  // Your own error handling logic
}
```

#### API Errors

| Error Case                                       | Error Category | Handling Module | Error Handling                              |
| ------------------------------------------------ | -------------- | --------------- | ------------------------------------------- |
| The input parameter isn’t a valid dossier object | Invalid input  | Embedding SDK   | Caught by the catch() of the promise object |
