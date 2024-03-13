---
title: MstrBotVisualization class
description: MstrBotVisualization class
---

<Available since="2024 Update 3"/>

The object returned from the `MstrBot.renderVisualization()` function, which allows access to the MicroStrategy bot visualization object.

## APIs

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
  const botViz = await bot.renderVisualization(dataId, document.getElementById("container"));
  // do some other things...
  await botViz.destroy();
} catch (error) {
  // Add your own handling logic here
}
```

#### API Errors

N/A
