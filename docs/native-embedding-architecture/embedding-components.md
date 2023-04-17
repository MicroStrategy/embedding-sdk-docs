---
title: Embedding components namespace
description: Embedding components namespace
---

This is the entry point of the new Native Embedding SDK.

## APIs

### 1. The create environment API

#### Function

`async microstrategy.embeddingComponent.environments.create(props)`

#### Input Parameters

| Parameter Name     | Data Type | Description                                                                                                                                                                                                                                                               | Is Required |
| ------------------ | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| props.serverUrl    | String    | The base URL of the Library server                                                                                                                                                                                                                                        | true        |
| props.getAuthToken | function  | The function for getting the login token. <br/>Similar to the getAuthToken in microstrategy.dossier.create. But in the first release, we would only support the login logic that fulfills both conditions below: <br/> - Standard authentication <br/> - AUTH_TOKEN login | true        |

#### Response

This API returns a promise object that resolves to a MstrEnvironment object.

#### Example

Find the `getLoginToken` function in [the getLoginToken doc](../add-functionality/methods-and-properties#getlogintoken)

```js
try {
  const environment = await microstrategy.embeddingComponent.environments.create({
    serverUrl: "https://demo.microstrategy.com/MicroStrategyLibrary",
    getAuthToken: () => {
      // The similar logic as getLoginToken existing Embedding SDK, but only support standard authentication now
    },
  });
  // Your own code
} catch (error) {
  // Error handling logic
}
```

#### API Errors

The errors caught in this function include:
| Error Case | Error Category | Handling Module | Error Handling |
| ----------------------------------------------------- | ---------------- | --------------- | ------------------------------------------- |
| The input parameter fails input validation | Invalid input | Embedding SDK | Caught by the catch() of the promise object |
| There is already another existing environment | Unsupported case | Embedding SDK | Caught by the catch() of the promise object |
| Invalid authentication info or incorrect CORS setting | Other | Embedding SDK | Caught by the catch() of the promise object |
| Other REST API errors | Other | Embedding SDK | Caught by the catch() of the promise object |

### 2. The destroy environment API

#### Function

`async microstrategy.embeddingComponent.environments.destroy(environment)`

#### Input Parameters

| Parameter Name | Data Type             | Description                                                                                                                                              | Is Required |
| -------------- | --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| environment    | MstrEnvironment class | The environment returned by the `create` function. <br/> When it’s not provided, the Embedding SDK destroys all environments in the current page. | true        |

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
| Error Case | Error Category | Handling Module | Error Handling |
| -------------------------------------------------- | -------------- | --------------- | ------------------------------------------- |
| The environment doesn't exist in the client’s page | Invalid input | Embedding SDK | Caught by the catch() of the promise object |
