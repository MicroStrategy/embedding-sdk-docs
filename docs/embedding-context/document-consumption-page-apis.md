---
title: Document consumption page APIs
description: Describes which Embedding SDK APIs are available on the MicroStrategy Document consumption page.
---

The `documentConsumption` object is the manipulator of the MicroStrategy dashboard consumption page. It could be got by `embeddingContext.documentConsumption`.

The details of the `embeddingContext` object could be seen in [Embedding context](./embedding-context.md).

The APIs under embed botConsumption page object are as below.

### `selectLayouts(layoutKeys)`

#### Description

This API can be used to select layouts on an embedded document consumption page which is already loaded.
If the document consumption page is loading, then the layout selection will be triggered after it is initialized.

#### Class

`DocumentConsumptionService`

#### Input Parameters

- `layoutKeys`:

  **Data Type**

  `array`

  **Required?**

  Yes

#### Return type

This API would return a Promise object that resolves to nothing.

#### Example

```js
await embeddingContext.documentConsumption.selectLayouts(["K52", "W63"]);
```

#### API errors

This API would report an error in these cases:

- When the document page is not in the component selection mode.
- When the layout key does not exist.
- When the document page is in the single selection mode, but the `layoutKeys` contain more than 1 layout key.
