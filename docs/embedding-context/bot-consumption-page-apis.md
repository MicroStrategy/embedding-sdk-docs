---
title: Bot consumption page APIs
description: Describes which Embedding SDK APIs are available on the MicroStrategy Bot consumption page.
---

The `embedBotConsumptionPage` object is the manipulator of the MicroStrategy dashboard consumption page. It could be got by `embeddingContext.embedBotConsumptionPage`.

The details of the `embeddingContext` object could be seen in [Embedding context](./embedding-context.md).

The APIs under embed botConsumption page object are as below.

### `askQuestion(questionParams)`

#### Description

This API could be used to send a question to bot consumption page, which is all delegated to the mstr-chatbot's onSend function to ask a question

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
await embeddingContext.botConsumptionService.setSidebarVisibility({
  questionText: "how are you?",
  type: "text",
});
```

#### API errors

This API would report an error in these 3 cases:

- When the whole `questionParams` is not provided.
- When `questionText` is not provided.
- When `type` is not provided.
