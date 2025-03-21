---
title: Bot consumption page APIs
description: Describes which Embedding SDK APIs are available on the Strategy Bot consumption page.
---

The `embedBotConsumptionPage` object is the manipulator of the Strategy dashboard consumption page. It could be got by `embeddingContext.embedBotConsumptionPage`.

The details of the `embeddingContext` object could be seen in [Embedding context](./embedding-context.md).

The APIs under embed botConsumption page object are as below.

### `askQuestion(questionParams)`

#### Description

This API can be used to ask a question to a bot consumption page which is already loaded.
If the bot consumption page is loading then the question will be triggered after it is initialized

#### Class

`BotConsumptionService`

#### Input Parameters

- `questionParams`:

  **Data Type**

  `object`

  **Required?**

  Yes

#### Return type

This API would return a Promise object that resolves to nothing.

#### Example

```js
await embeddingContext.botConsumptionService.askQuestion({
  questionText: "how are you?",
  type: "text",
});
```

#### API errors

This API would report an error in these 3 cases:

- When the whole `questionParams` is not provided.
- When `questionText` is not provided.
- When `type` is not provided.
