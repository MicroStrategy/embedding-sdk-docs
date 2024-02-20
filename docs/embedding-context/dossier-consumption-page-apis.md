---
title: Dashboard consumption page APIs
description: Describes which Embedding SDK APIs are available on the MicroStrategy dashboard consumption page.
---

The `dossierConsumption` object is the manipulator of the MicroStrategy dashboard consumption page. It could be got by `embeddingContext.dossierConsumption`.

The details of the `embeddingContext` object could be seen in [Embedding context](./embedding-context.md).

The APIs under Library page object are as below.

## Dashboard consumption page APIs

### `getDossierDefinition()`

#### Description

This API is used for getting the dashboard definition. Its result contains the dashboard id, name, project id and TOC information.

#### Class

`DossierConsumption`

#### Return type

This API would return a Promise object that resolves to an object that contains the dashboard definition. Its serialized JSON string is as below:

```json
{
  "id": "EC5441154009D3C39D5BD6AD75865EF4",
  "name": "DDA_Dossier_filter_SearchBox_style",
  "projectId": "B19DEDCC11D4E0EFC000EB9495D0F44F",
  "chapters": [
    {
      "key": "K36",
      "name": "Chapter 1",
      "pages": [
        {
          "key": "K53",
          "name": "Page 1"
        },
        {
          "key": "W78",
          "name": "Page 2"
        }
      ]
    }
  ]
}
```

If the API encounters an error in its executing process, the error would be thrown and could be caught.

#### Example

```js
try {
  const dossierDefinition = await embeddingContext.dossierConsumption.getDossierDefinition();
} catch (err) {
  // The error handling logic here
  console.error(err);
}
```

### `selectComponents(componentKeys)`

#### Description

This API could be used to select visualizations or groups on a dashboard consumption page.

#### Class

`DossierConsumption`

#### Input Parameters

- `componentKeys`:

  **Data Type**

  `array`

  **Required?**

  Yes

#### Return type

This API would return a Promise object that resolves to void. If it encounters an error in its executing process, the error would be thrown and could be caught.

#### Example

```js
try {
  const response = await embeddingContext.dossierConsumption.selectComponents([
    "K53",
    "53ACF03646491B5F5F5A7B83EB1BB0BE",
  ]);
} catch (err) {
  // The other error handling logic here
}
```

### `getSelectedComponents()`

#### Description

This API could be used to get currently selected visualizations and groups on a dashboard consumption page.

#### Class

`DossierConsumption`

#### Return type

This API would return a Promise object that resolves to an object that contains the selected components. Its serialized JSON string is as below:

```json
{
  "projectId": "B19DEDCC11D4E0EFC000EB9495D0F44F",
  "dossierId": "EC5441154009D3C39D5BD6AD75865EF4",
  "selectedComponents": [
    {
      "key": "K52",
      "type": "visualization",
      "chapterKey": "K36",
      "pageKey": "K53"
    },
    {
      "key": "53ACF03646491B5F5F5A7B83EB1BB0BE",
      "type": "group",
      "chapterKey": "K87",
      "pageKey": "K67"
    }
  ]
}
```

If the API encounters an error in its executing process, the error would be thrown and could be caught.

#### Example

```js
try {
  const selectedComponents = await embeddingContext.dossierConsumption.getSelectedComponents();
} catch (err) {
  // The other error handling logic here
  console.error(err);
}
```

### `getDossierInstanceId()`

#### Description

The API details are identical to [Dossier.getDossierInstanceId()](../add-functionality/methods-and-properties#dossiergetdossierinstanceid)

### `getCurrentPageVisualizationList()`

#### Description

The API details are identical to [Dossier.getCurrentPageVisualizationList()](../add-functionality/add-nav#getcurrentpagevisualizationlist)

### `changeVisualizationSize(props)`

#### Description

The API details are identical to [Dossier.changeVisualizationSize(props)](../add-functionality/embed-vis#1-change-the-visualization-size)

### `getCurrentPagePanelStacks()`

#### Description

The API details are identical to [Dossier.getCurrentPagePanelStacks()](../add-functionality/panel-stacks#1-get-the-panel-stack-definitions-from-the-current-page)

### `switchPanel(panelKey)`

#### Description

The API details are identical to [Dossier.switchPanel(panelKey)](../add-functionality/panel-stacks#2-switch-panels-on-the-current-page)

### `getAvailableElements(vizKey)`

#### Description

The API details are identical to [Dossier.getAvailableElements(visKey)](../add-functionality/attribute-element-selection#api-for-getting-available-elements)

### `selectVisualizationElements(props)`

#### Description

The API details are identical to [Dossier.selectVizElement(props)](../add-functionality/attribute-element-selection#api-for-attribute-element-selection-in-a-dossier)
