---
title: Retrieve and apply filters
description: Filters can be applied both during the execution of an embedded dashboard and after it has been rendered.
---

<Available since="2021 Update 9 (May 2023)"/>

Filters can be applied both during the execution of an embedded dashboard and after it has been rendered. After using [Native Embedding SDK](embed-multiple-viz.md) to embed multiple visualizations in a client's webpage, you can manipulate the chapter-level filters, on-page selectors, and visualizations used as filters via the Native Embedding SDK available since 2021 Update 9. For chapter-level filters and on-page selectors, MicroStrategy only supports attribute element list selectors.

Let's say you already have the `MstrEnvironment` and `MstrDossier` objects:

```js
try {
  const mstrEnvironment = await microstrategy.embeddingComponent.environments.create({
    serverUrl: "https://demo.microstrategy.com/MicroStrategyLibrary",
    getAuthToken: () => {
      // Logic similar to the existing Native Embedding SDK
    },
  });
  const mstrDossier = await mstrEnvironment.loadDossier({
    projectId: "B19DEDCC11D4E0EFC000EB9495D0F44F",
    objectId: "D9AB379D11EC92C1D9DC0080EFD415BB",
  });
  await mstrDossier.refresh([
    {
      key: "K66",
      container: document.getElementById("container1"),
    },
  ]);
  // Your custom logic
} catch (error) {
  // Your own error handling code
}
```

## Get available filter elements

To apply filters to the dossier, the client may need to get the list of available attribute elements of the filters or selectors. You can use the `MstrDossier.getFilterAvailableElements()` function in the Native Embedding SDK to retrieve the available attribute elements of the filters or selectors.

| `getFilterAvailableElements()` |                                                          |
| ------------------------------ | -------------------------------------------------------- |
| Class                          | `MstrDossier`                                            |
| Return Type                    | `Promise<AttributeElement[]>`                            |
| Description                    | Get the attribute element list of the filter or selector |
| Example                        | `mstrDossier.getFilterAvailableElements()`               |

### `MstrDossier.getFilterAvailableElements` examples

```js
try {
  await mstrDossier.getFilterAvailableElements({
    filterKey: "W67", // filter key
    searchPattern: "o", // pattern to match with the element list, optional
    offset: 0, // optional
    limit: 100, // optional
  });
} catch (error) {
  // Your own error handling code
}
```

Example of the attribute element list in the resolved value:

```json
[
  {
    "name": "Books",
    "id": "h1;;Books"
  },
  {
    "name": "Electronics",
    "id": "h2;;Electronics"
  }
]
```

## Apply filters after embedded visualizations are rendered

After embedded visualizations have been rendered, you can use the `MstrDossier.getDossierDefinition()` function in the Native Embedding SDK to retrieve information about filters, selectors, and visualizations used as filters in the dashboard. After you have the key of the filter, selector, or visualization used as a filter, you can use the `MstrDossier.applyFilter()` function to manipulate it.

:::note
For filters and selectors, we currently only support manipulating the selector type of the attribute element list.
:::

| `applyFilter()` |                                               |
| --------------- | --------------------------------------------- |
| Class           | `MstrDossier`                                 |
| Parameter       | `FilterSelectionDefinition`                   |
| Return Type     | `Promise<void>`                               |
| Description     | Apply filters with the selection in the input |
| Example         | `mstrDossier.applyFilter()`                   |

### Filter types and filter details

The sections below show the filter details for each filter type.

#### Chapter-level filters

For the chapter-level filter with an `attribute_element_list` type, you can get its key and source attribute definition from the dashboard definition with the `MstrDossier.getDossierDefinition()` function. Then you can manipulate the filter with the `MstrDossier.applyFilter()` function as follows. After the function successfully returns, all embedded visualizations on the same chapter as the filter are refreshed to reflect the latest data.

```js
try {
  await mstrDossier.applyFilter({
    key: `${filterKey}`,
    currentSelection: {
      selectionStatus: "<string>", // optional, values: ['unfiltered', 'included', 'excluded'], default: 'included'
      allSelected: "<boolean>", // optional, default: false,
      elements: [
        {
          id: "<string>", // attribute element id, required
          name: "<string>", // attribute element name, optional
        },
      ],
    },
  });
} catch (error) {
  // Your own error handling code
}
```

#### On-Page selectors

For on-page selectors with an `attribute_element_list` type, you can get its key from the dashboard definition and source attribute definition with the `MstrDossier.getDossierDefinition()` function. Then you can manipulate the filter with the `MstrDossier.applyFilter()` function as follows. After the function successfully returns, all embedded visualizations that are the targets of the selector are refreshed to reflect the latest data.

```js
try {
  await mstrDossier.applyFilter({
    key: `${selectorKey}`,
    currentSelection: {
      selectionStatus: "<string>", // optional, values: ['unfiltered', 'included', 'excluded'], default: 'included'
      allSelected: "<boolean>", // optional, default: false,
      elements: [
        {
          id: "<string>", // attribute element id, required
          name: "<string>", // attribute element name, optional
        },
      ],
    },
  });
} catch (error) {
  // Your own error handling code
}
```

#### Visualizations used as filters

For a visualization used as a filter, you need its key from the dashboard definition with the `MstrDossier.getDossierDefinition()` function. Then you can manipulate the visualization used as a filter with `MstrDossier.applyFilter()` function as follows. After the function successfully returns, the elements of the visualization used as a filter are highlighted accordingly, and all embedded visualizations that are the targets of the visualization as the filter are refreshed to reflect the latest data.

- attribute element selection

  To select multiple attribute elements in the visualizations used as filters, you can use `MstrDossier.applyFilter()` with the following input:

  ```js
  try {
    await mstrDossier.applyFilter({
      key: `${visualizationKey}`,
      currentSelection: {
        selectionStatus: "included", // optional
        type: "attribute_element_list", // required
        selections: [
          {
            attribute: {
              id: "<string>", // attribute id, required
              name: "<string>", // attribute name, optional
            },
            elements: [
              {
                id: "<string>", // attribute element id, required
                name: "<string>", // attribute element name, optional
              },
            ],
          },
        ],
      },
    });
  } catch (error) {
    // Your own error handling code
  }
  ```

- metric element selection

  To select multiple metric elements in the visualizations used as filters, you need to provide the full list of attributes in the visualization and every metric element selection should be the combination of attribute elements from every attribute. You can use `MstrDossier.applyFilter()` with the following input:

  ```js
  try {
    await mstrDossier.applyFilter({
      key: `${visualizationKey}`,
      currentSelection: {
        selectionStatus: "included", // optional
        type: "metric_element_list", // required
        attributes: [
          // should be the same list as all attributes in the visualization
          {
            id: "<string>", // attribute id, required
            name: "<string>", // attribute name, optional
          },
        ],
        selections: [
          [
            // one metric element selection
            {
              id: "<string>", // attribute element id, required
              name: "<string>", // attribute element name, optional
            },
          ],
        ],
      },
    });
  } catch (error) {
    // Your own error handling code
  }
  ```

### `MstrDossier.applyFilter` examples

Here are some examples for the filter object in the `MstrDossier.applyFilter()` function parameter:

- [Chapter-Level filters](#chapter-level-filters)
- [On-Page selectors](#on-page-selectors)
- [Visualizations used as filters](#visualizations-used-as-filters)

#### Chapter-Level filters

- Select the element list of the filter

  ```js
  try {
    await mstrDossier.applyFilter({
      key: "W87",
      currentSelection: {
        elements: [
          {
            id: "<string>",
            name: "<string>",
          },
        ],
      },
    });
  } catch (error) {
    // Your own error handling code
  }
  ```

- Select all elements of the filter

  ```js
  try {
    await mstrDossier.applyFilter({
      key: "W87",
      currentSelection: {
        allSelected: true,
      },
    });
  } catch (error) {
    // Your own error handling code
  }
  ```

- Unset the filter selection.

  ```js
  try {
    await mstrDossier.applyFilter({
      key: "W87",
      currentSelection: {
        selectionStatus: "unfiltered",
      },
    });
  } catch (error) {
    // Your own error handling code
  }
  ```

#### On-Page selectors

To apply selections to on-page selectors, use the same input as chapter-level filters.

- Select the element list of the selector

  ```js
  try {
    await mstrDossier.applyFilter({
      key: "W76",
      currentSelection: {
        elements: [
          {
            id: "<string>",
            name: "<string>",
          },
        ],
      },
    });
  } catch (error) {
    // Your own error handling code
  }
  ```

- Select all elements of the selector

  ```js
  try {
    await mstrDossier.applyFilter({
      key: "W76",
      currentSelection: {
        allSelected: true,
      },
    });
  } catch (error) {
    // Your own error handling code
  }
  ```

- Unset the selection of the selector

  ```js
  try {
    await mstrDossier.applyFilter({
      key: "W76",
      currentSelection: {
        selectionStatus: "unfiltered",
      },
    });
  } catch (error) {
    // Your own error handling code
  }
  ```

#### Visualizations used as filters

- Select attribute elements of the visualization

Select the `June, April` elements of the `Month of Year` attribute and the `2014` element of the `Year` attribute.

```js
try {
  await mstrDossier.applyFilter({
    key: "K52",
    currentSelection: {
      selectionStatus: "included",
      type: "attribute_element_list",
      selections: [
        {
          attribute: {
            id: "8D679D4511D3E4981000E787EC6DE8A4",
            name: "Month of Year",
          },
          elements: [
            {
              id: "h6;8D679D4511D3E4981000E787EC6DE8A4",
              name: "June",
            },
            {
              id: "h4;8D679D4511D3E4981000E787EC6DE8A4",
              name: "April",
            },
          ],
        },
        {
          attribute: {
            id: "8D679D5111D3E4981000E787EC6DE8A4",
            name: "Year",
          },
          elements: [
            {
              id: "h2014;8D679D5111D3E4981000E787EC6DE8A4",
              name: "2014",
            },
          ],
        },
      ],
    },
  });
} catch (error) {
  // Your own error handling code
}
```

- Select metric elements of the visualization

  Select metric elements identified by the `June,2014` and `September,2014` attribute elements.

  ```js
  try {
    await mstrDossier.applyFilter({
      key: "K52",
      currentSelection: {
        selectionStatus: "included",
        type: "metric_element_list",
        attributes: [
          {
            id: "8D679D4511D3E4981000E787EC6DE8A4",
            name: "Month of Year",
          },
          {
            id: "8D679D5111D3E4981000E787EC6DE8A4",
            name: "Year",
          },
        ],
        selections: [
          [
            {
              id: "h6;8D679D4511D3E4981000E787EC6DE8A4",
              name: "June",
            },
            {
              id: "h2014;8D679D5111D3E4981000E787EC6DE8A4",
              name: "2014",
            },
          ],
          [
            {
              id: "h9;8D679D4511D3E4981000E787EC6DE8A4",
              name: "September",
            },
            {
              id: "h2014;8D679D5111D3E4981000E787EC6DE8A4",
              name: "2014",
            },
          ],
        ],
      },
    });
  } catch (error) {
    // Your own error handling code
  }
  ```

- Clear the element selections of the visualization

  ```js
  try {
    await mstrDossier.applyFilter({
      key: "K52",
      currentSelection: {
        selectionStatus: "unfiltered",
      },
    });
  } catch (error) {
    // Your own error handling code
  }
  ```
