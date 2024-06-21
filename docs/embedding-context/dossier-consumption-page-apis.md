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

### `getCurrentPageInfo()`

#### Description

This API could be used to get the currently chapter and page information.

#### Class

`DossierConsumption`

#### Return type

This API would return a Promise object that resolves to an object that contains the current chapter and page. Its serialized JSON string is as below:

```json
{
  "chapterKey": "K36",
  "pageKey": "W58"
}
```

#### Example

```js
try {
  const currentPageInfo = await embeddingContext.dossierConsumption.getCurrentPageInfo();
} catch (err) {
  // The other error handling logic here
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

### `getTableContent()`

#### Description

This API is deprecated. You can use [getDossierDefinition()](./dossier-consumption-page-apis#getdossierdefinition) to get table content.
The API details are identical to [Dossier.getTableContent()](../add-functionality/add-nav#gettablecontent).

### `getChapterList()`

#### Description

This API is deprecated. You can use [getDossierDefinition()](./dossier-consumption-page-apis#getdossierdefinition) to get table content.
The API details are identical to [Dossier.getChapterList()](../add-functionality/add-nav#getchapterlist).

### `getCurrentChapter()`

#### Description

This API is deprecated. You can use [getCurrentPageInfo()](./dossier-consumption-page-apis#getcurrentpageinfo) to get the current chapter and page information.
The API details are identical to [Dossier.getCurrentChapter()](../add-functionality/add-nav#getcurrentchapter).

### `getCurrentPage()`

#### Description

This API is deprecated. You can use [getCurrentPageInfo()](./dossier-consumption-page-apis#getcurrentpageinfo) to get the current chapter and page information.
The API details are identical to [Dossier.getCurrentPage()](../add-functionality/add-nav#getcurrentpage).

### `getPageByNodeKey(nodeKey)`

#### Description

This API is deprecated. You can use [EmbeddingContext.goToPage(pageInfo)](../embedding-context/#gotopagepageinfo) to navigate to a page without such preparations.
The API details are identical to [Dossier.getPageByNodeKey(nodeKey)](../add-functionality/add-nav#getpagebynodekeynodekey).

### `goToPrevPage()`

#### Description

The API details are identical to [Dossier.goToPrevPage()](../add-functionality/add-nav#gotoprevpage).

### `goToNextPage()`

#### Description

The API details are identical to [Dossier.goToNextPage()](../add-functionality/add-nav#gotonextpage).

### `navigateToPage(page)`

#### Description

The API details are identical to [Dossier.navigateToPage(page)](../add-functionality/add-nav#navigatetopagepage).

### `openFilterSummaryBar()`

#### Description

The API details are identical to [Dossier.openFilterSummaryBar()](../add-functionality/add-nav#openfiltersummarybar).

### `closeFilterSummaryBar()`

#### Description

The API details are identical to [Dossier.closeFilterSummaryBar()](../add-functionality/add-nav#closefiltersummarybar).

### `filterSelectAllAttributes(filterJson)`

#### Description

This API is deprecated. You can use [filterSelectAllAttributeElements(filterJson)](./dossier-consumption-page-apis#filterselectallattributeelementsfilterjson) instead.

The API details are identical to [Dossier.filterSelectAllAttributes(filterJson)](../add-functionality/filters#dossierfilterselectallattributesfilterjson).

### `filterSelectAllAttributeElements(filterJson)`

#### Description

The API details are identical to [Dossier.filterSelectAllAttributes(filterJson)](../add-functionality/filters#dossierfilterselectallattributesfilterjson).

### `filterDeselectAllAttributes(filterJson)`

#### Description

This API is deprecated. You can use [filterDeselectAllAttributeElements(filterJson)](./dossier-consumption-page-apis#filterdeselectallattributeelementsfilterjson)instead.

The API details are identical to [Dossier.filterDeselectAllAttributes(filterJson)](../add-functionality/filters#dossierfilterdeselectallattributesfilterjson).

### `filterDeselectAllAttributeElements(filterJson)`

#### Description

The API details are identical to [Dossier.filterDeselectAllAttributes(filterJson)](../add-functionality/filters#dossierfilterdeselectallattributesfilterjson).

### `filterSelectMultiAttributes(filterJson)`

#### Description

The API details are identical to [Dossier.filterSelectMultiAttributes(filterJson)](../add-functionality/filters#dossierfilterselectmultiattributesfilterjson).

### `filterSelectSingleAttribute(filterJson)`

#### Description

The API details are identical to [Dossier.filterSelectSingleAttribute(filterJson)](../add-functionality/filters#dossierfilterselectsingleattributefilterjson).

### `filterSearchSingleAttribute(filterJson)`

#### Description

The API details are identical to [Dossier.filterSearchSingleAttribute(filterJson)](../add-functionality/filters#dossierfiltersearchsingleattributefilterjson).

### `filterSearchMultiAttributes(filterJson)`

#### Description

The API details are identical to [Dossier.filterSearchMultiAttributes(filterJson)](../add-functionality/filters#dossierfilterselectmultiattributesfilterjson).

### `filterSetDateRange(filterJson)`

#### Description

The API details are identical to [Dossier.filterSetDateRange(filterJson)](../add-functionality/filters#dossierfiltersetdaterangefilterjson).

### `filterSetMetricQualByValue(filterJson)`

#### Description

The API details are identical to [Dossier.filterSetMetricQualByValue(filterJson)](../add-functionality/filters#dossierfiltersetmetricqualbyvaluefilterjson).

### `filterSetMetricQualByRank(filterJson)`

#### Description

The API details are identical to [Dossier.filterSetMetricQualByRank(filterJson)](../add-functionality/filters#dossierfiltersetmetricqualbyrankfilterjson).

### `filterAttributeSingleSlider(filterJson)`

#### Description

The API details are identical to [Dossier.filterAttributeSingleSlider(filterJson)](../add-functionality/filters#dossierfilterattributesinglesliderfilterjson).

### `filterAttributeMultiSlider(filterJson)`

#### Description

The API details are identical to [Dossier.filterAttributeMultiSlider(filterJson)](../add-functionality/filters#dossierfilterattributemultisliderfilterjson).

### `filterApplyAll()`

#### Description

The API details are identical to [Dossier.filterApplyAll()](../add-functionality/filters#dossierfilterapplyall).

### `filterClearAll()`

#### Description

The API details are identical to [Dossier.filterClearAll()](../add-functionality/filters#dossierfilterclearall).

### `filterClear(filterJson)`

#### Description

The API details are identical to [Dossier.filterClear(filterJson)](../add-functionality/filters#dossierfilterclearfilterjson).

### `filterSetInclude(filterJson)`

#### Description

The API details are identical to [Dossier.filterSetInclude(filterJson)](../add-functionality/filters#dossierfiltersetincludefilterjson).

### `filterSetExclude(filterJson)`

#### Description

The API details are identical to [Dossier.filterSetExclude(filterJson)](../add-functionality/filters#dossierfiltersetexcludefilterjson).

### `getFilterList()`

#### Description

The API details are identical to [Dossier.getFilterList()](../add-functionality/filters#retrieve-filters-after-a-dashboard-is-rendered).
