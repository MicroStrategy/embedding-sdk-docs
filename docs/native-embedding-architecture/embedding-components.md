---
title: embeddingComponent.environments namespace
description: embeddingComponent.environments namespace
---

<Available since="2021 Update 9 (May 2023)"/>

This is the entry point of the Native Embedding SDK.

## APIs

### The create environment API

#### Function

`async microstrategy.embeddingComponent.environments.create(props)`

#### Input Parameters

| Parameter Name     | Data Type | Description                                                                                                                                                                                                                                 | Is Required |
| ------------------ | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| props.serverUrl    | String    | The base URL of the Library server                                                                                                                                                                                                          | true        |
| props.getAuthToken | function  | The function for getting the login token. <br/>This function is similar to `getAuthToken` in `microstrategy.dossier.create`. <br />In 2021 Update 9, MicroStrategy only supports auth token. You can get the auth token with any auth mode. | true        |

#### Response

This API returns a promise object that resolves to a `MstrEnvironment` object.

#### Example

Find the `getAuthToken` function in [the Native Embedding SDK doc](./embed-multiple-viz.md#example-code)

```js
try {
  const environment = await microstrategy.embeddingComponent.environments.create({
    serverUrl: "https://demo.microstrategy.com/MicroStrategyLibrary",
    getAuthToken: () => {
      // Logic similar to the existing Native Embedding SDK.
    },
  });
  // Your own code
} catch (error) {
  // Error handling logic
}
```

#### API Errors

The errors caught in this function include:

| Error Case                                            | Error Category   | Handling Module      | Error Handling                                |
| ----------------------------------------------------- | ---------------- | -------------------- | --------------------------------------------- |
| The input parameter fails input validation            | Invalid input    | Native Embedding SDK | Caught by the `catch()` of the promise object |
| There is already another existing environment         | Unsupported case | Native Embedding SDK | Caught by the `catch()` of the promise object |
| Invalid authentication info or incorrect CORS setting | Other            | Native Embedding SDK | Caught by the `catch()` of the promise object |
| Other REST API errors                                 | Other            | Native Embedding SDK | Caught by the `catch()` of the promise object |

### The destroy environment API

#### Function

`async microstrategy.embeddingComponent.environments.destroy(environment)`

#### Input Parameters

| Parameter Name | Data Type               | Description                                                                                                                                              | Is Required |
| -------------- | ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| environment    | `MstrEnvironment` class | The environment returned by the `create` function. <br/> When it’s not provided, the Native Embedding SDK destroys all environments in the current page. | true        |

#### Response

This API returns a promise object, that resolves to nothing.

#### Example

```js
try {
  await microstrategy.embeddingComponent.environments.destroy(environment);
} catch (error) {
  // Your own error handling logic
}
```

#### API Errors

The errors caught in this function include:

| Error Case                                         | Error Category | Handling Module      | Error Handling                                |
| -------------------------------------------------- | -------------- | -------------------- | --------------------------------------------- |
| The environment doesn't exist in the client’s page | Invalid input  | Native Embedding SDK | Caught by the `catch()` of the promise object |
