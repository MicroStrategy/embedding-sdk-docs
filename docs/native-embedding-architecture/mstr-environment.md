---
title: MstrEnvironment namespace
description: MstrEnvironment namespace
---

The instance of this class is the object returned from the `microstrategy.embeddingComponent.environments.create()` function, which allows access to the MicroStrategy application. MstrEnvironment class represents one MicroStrategy Library Application identified by a URL.

## APIs

### 1. The load dossier API

#### Function

`async loadDossier(props)`

#### Input Parameters

| Parameter Name   | Data Type | Description                                                                                                  | Is Required |
| ---------------- | --------- | ------------------------------------------------------------------------------------------------------------ | ----------- |
| props.projectId  | String    | The project ID, which must be a GUID.                                                                        | true        |
| props.objectId   | String    | The dossier id. Should be a valid dossier ID. If the ID is a document id or report ID, would report an error | true        |
| props.instanceId | String    | The dossier instance ID, if it already exists.                                                               | false       |

The `projectId` + `objectId` is used as the dossier identifier. If the function is called twice with the same parameter, the same MstrDossier object is returned in the callback.

#### Response

This API returns a promise object that resolves to a MstrDossier object.

#### Example

```js
try {
  const environment = await microstrategy.embeddingComponent.environments.create({
    serverUrl: "https://demo.microstrategy.com/MicroStrategyLibrary",
    getAuthToken: () => {
      // Logic similar to the existing Embedding SDK, but only standard auth login is allowed
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

| Error Case                                 | Error Category | Handling Module | Error Handling                              |
| ------------------------------------------ | -------------- | --------------- | ------------------------------------------- |
| The input parameter fails input validation | Invalid input  | Embedding SDK   | Caught by the catch() of the promise object |
| Other REST API errors                      | Other          | Embedding SDK   | Caught by the catch() of the promise object |

### 2. The destroy dossier API

#### Function

async unloadDossier(dossier)

#### Input Parameters

| Parameter Name | Data Type         | Description                                                | Is Required |
| -------------- | ----------------- | ---------------------------------------------------------- | ----------- |
| dossier        | MstrDossier class | The MstrDossier object created by the loadDossier function | true        |

#### Response

This API returns a promise object that resolves to a MstrDossier object.

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
