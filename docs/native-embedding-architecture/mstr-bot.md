---
title: MstrBot class
description: MstrBot class
---

<Available since="2024 Update 3"/>

The object returned from the `MstrEnvironment.loadBot()` function, which allows access to the MicroStrategy bot object.

## APIs

### The Get Questions API

#### Function

`async getQuestions()`

#### Input Parameters

N/A

#### Response

This API returns a promise object that resolves to the result of GET `/api/bots/{botId}/questions` API. A data sample is like this:

<details>
  <summary>Example of the questions in the resolved value:</summary>

```json
{
  "questions": [
    {
      "id": "D0AEE8DB0BE7471E8CA3FCAF412DB096",
      "text": "List all orders from the call center",
      "answers": [
        {
          "text": "The customer with the highest revenue is Simonetti with a total revenue of $11,619.",
          "type": "markdown"
        }
      ],
      "creationDate": "2024-01-05T06:36:36.755+0000"
    },
    {
      "id": "D0AEE8DB0BE7471E8CA3FCAF412DB097",
      "text": "List all orders from the call center",
      "answers": [
        {
          "text": "The customer with the highest revenue is Simonetti with a total revenue of $11,619.",
          "type": "visualization",
          "data": {
            "id": "A9D9247C28FB4708B8F8E4D81D192ED8"
          }
        }
      ],
      "creationDate": "2024-01-05T06:36:36.755+0000"
    }
  ]
}
```

</details>

#### Example

```js
try {
  const environment = await microstrategy.embeddingComponent.environments.create({
    serverUrl: "https://demo.microstrategy.com/MicroStrategyLibrary",
    getAuthToken: () => {
      // Logic similar to the existing Native Embedding SDK.
    },
  });
  // Begin here
  const bot = await environment.loadBot({
    projectId: "B19DEDCC11D4E0EFC000EB9495D0F44F",
    objectId: "E9AB379D11EC92C1D9DC0080EFD415BB",
  });
  const questions = await bot.getQuestions();
} catch (error) {
  // Your own error handling logic
}
```

#### API Errors

| Error Case      | Error Category | Handling Module      | Error Handling                                |
| --------------- | -------------- | -------------------- | --------------------------------------------- |
| REST API errors | Other          | Native Embedding SDK | Caught by the `catch()` of the promise object |

### The Render Visualization API

#### Function

`async renderVisualization(dataId, container)`

#### Input Parameters

| Parameter Name | Data Type   | Description                                                                                                                                                                                                                                                                    | Is Required |
| -------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------- |
| dataId         | String      | The data cache id. Could be got from `getQuestions()` API.                                                                                                                                                                                                                     | true        |
| container      | HTMLElement | The HTML element used for displaying the visualization. The HTML element must be in the current DOM tree of the client’s page. All elements must exist and cannot be in iframes. The `Node.contains()` function is used to determine this and is compatible with all browsers. | true        |

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
  // Begin here
  const bot = await environment.loadBot({
    projectId: "B19DEDCC11D4E0EFC000EB9495D0F44F",
    objectId: "E9AB379D11EC92C1D9DC0080EFD415BB",
  });
  // Get data id from the result of this API
  const questions = await bot.getQuestions();
  const botViz = await bot.renderVisualization(dataId, document.getElementById("container"));
} catch (error) {
  // Your own error handling logic
}
```

#### API Errors

| Error Case                                               | Error Category | Handling Module      | Error Handling                                |
| -------------------------------------------------------- | -------------- | -------------------- | --------------------------------------------- |
| The input parameter fails input validation               | Invalid input  | Native Embedding SDK | Caught by the `catch()` of the promise object |
| data id isn't a valid data cache id                      | Invalid input  | Native Embedding SDK | Caught by the `catch()` of the promise object |
| The container isn’t a valid HTML element in the DOM tree | Invalid input  | Native Embedding SDK | Caught by the `catch()` of the promise object |
| A container has children                                 | Invalid input  | Native Embedding SDK | Caught by the `catch()` of the promise object |
| Other REST API errors                                    | Other          | Native Embedding SDK | Caught by the `catch()` of the promise object |

### The Destroy API

#### Function

`async destroy()`

#### Input Parameters

N/A

#### Response

This API returns a promise object that resolves to nothing.

#### Example

```js
try {
  // Create bot object from the MstrEnvironment.loadBot() API
  await bot.destry();
} catch (error) {
  // Add your own handling logic here
}
```

#### API Errors

N/A |
