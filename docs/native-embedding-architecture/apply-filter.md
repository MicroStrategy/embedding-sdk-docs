---
title: Retrieve and apply filters
description: Filters can be applied both during the execution of an embedded dashboard and after it has been rendered.
---

<Available since="2021 Update 9 (May 2023)"/>

Filters can be applied both during the execution of an embedded dashboard and after it has been rendered. After using [Native Embedding SDK](embed-multiple-viz.md) to embed multiple visualizations in a client's webpage, you can manipulate the chapter-level filters, on-page selectors, and visualizations used as filters via the Native Embedding SDK available since 2021 Update 9.

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

## Apply filters after embedded visualizations are rendered

After embedded visualizations have been rendered, you can use the `MstrDossier.getDossierDefinition()` function in the Native Embedding SDK to retrieve information about filters, selectors, and visualizations used as filters in the dashboard. After you have the key of the filter, selector, or visualization used as a filter, you can use the `MstrDossier.applyFilter()` or `MstrDossier.applyFilters()` function to manipulate it.

:::note
The `applyFilter()` or `applyFilters()` functions will first call REST API to apply filter on the current dossier instance, then **refresh the affected visualizations automatically**.
:::

| `applyFilter()` |                                               |
| --------------- | --------------------------------------------- |
| Class           | `MstrDossier`                                 |
| Parameter       | `FilterSelectionDefinition`                   |
| Return Type     | `Promise<void>`                               |
| Description     | Apply filters with the selection in the input |
| Example         | `mstrDossier.applyFilter()`                   |

### `MstrDossier.applyFilter` example

The `MstrDossier.applyFilters(filters)` function can apply a new filter content on the current dashboard instance, then the related embedded visualizations would be refreshed.
An example is like this:

```js
try {
  await mstrDossier.applyFilter({
    key: "K46", // The filter key
    currentSelection,
  });
} catch (error) {
  // Your own error handling code
}
```

### `MstrDossier.applyFilters` example

The `MstrDossier.applyFilters(filters)` function is the batch version of `MstrDossier.applyFilter(filter)` API. Its parameter `filters` is an array of different filters. That is, you can use this API to apply multiple filters at the same time. All the embedded visualizations that would be affected by these filters would be refreshed after the filters are applied.

An example is like this:

```js
try {
  await mstrDossier.applyFilters([
    {
      key: "K46",
      currentSelection: currentSelectionA,
    },
    {
      key: "K67",
      currentSelection: currentSelectionB,
    },
  ]);
} catch (error) {
  // Your own error handling code
}
```

## The scope of a filter impacts

When the user creates a filter on a dossier authoring page, he can choose the location of the filter. If the filter he created is on the filter panel, it's a chapter-level filter; If the filter is inside a dossier page, it's called on-page selector.

Though chapter-level and on-page filters are in different locations, their API inputs are the same if they are of the same filter type. However, their different locations give them different impact scopes:

- For chapter-level filter, its scope of impact is all the visualizations inside this chapter.
- For on-page selector, the user can select its target freely, but the targets must be inside the current page.

### The auto-refreshed visualizations after applyFilter

In general, in Native Embedding SDK, the `MstrDossier.applyFilter({key: filterKey, currentSelection})` API does 2 things:

- Call the REST API to apply the new filter content;
- Refresh all the visualizations that are inside the impact scope of this filter after the REST API executes successfully. The other visualizations will not be refreshed.

For `MstrDossier.applyFilters()` API, the whole impact scope will be the union of the impact scope of all the filters. So all the visualizations inside this whole impact scope will be refreshed.

An exceptional case is the parameter filters. The parameter can be used everywhere across the whole dossier, so its impact scope is the whole dossier.

## Filter types and filter details

We can see that for all types of filters, their top-level data structure are the same, which is like:

```js
mstrDossier.applyFilter({
  key: filterKey,
  currentSelection,
});
```

However, the detailed `currentSelection` data structure depends on the concrete filter type.

The filter has different types below:

- Attribute element filter
- Metric qualification filter
- Attribute qualification filter
- Object replacement selector
- Value parameter filter
- Visualizations as filters

So there are 6 different filter types in total. For all those filters, you can get the filter key (or visualization key for visualizations used as filters) from the dashboard definition with the `MstrDossier.getDossierDefinition()` function.

The sections below show the input details for each filter type.

### Attribute element filter

You can manipulate the filter with the `MstrDossier.applyFilter()` function as follows:

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

There are several typical cases here:

- Select an element list of the selector

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

### Metric qualification filter

To apply selections on a metric qualification filter, you can use the following input:

```js
try {
  await mstrDossier.applyFilter({
    key: `${filterKey}`, // Required
    currentSelection: {
      selectionStatus: "<string>", // optional, values: ['unfiltered', 'included', 'excluded'], default: 'included'
      expression: {
        operator: "<string>", // The metric qualification operator/function
        operands: "<array>", // The metric qualification operation nodes
      },
    },
  });
} catch (error) {
  // Your own error handling code
}
```

The expression of metric qualification filter can be very flexible. If you are uncertain about how to construct the `expression` object of a specific metric qualification, you can:

- Save a qualification on the authoring page and then save the dossier;
- Use REST API or `MstrDossier.getDossierDefinition()` API to see the metric qualification's expression;
- Follow the expression to construct your own expression.

Some examples:

- Apply a metric qualification

  ```js
  try {
    await mstrDossier.applyFilter({
      key: "W76", // Required
      currentSelection: {
        expression: {
          operator: "Rank.Top",
          operands: [
            {
              type: "metric",
              id: "90FA8FED3942B6FF7119C69742D82117",
              name: "Flights Delayed",
            },
            {
              type: "constant",
              dataType: "Real",
              value: "5",
            },
          ],
        },
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

### Attribute qualification filter

To apply selections on an attribute qualification filter, you can use the following input:

```js
try {
  await mstrDossier.applyFilter({
    key: `${filterKey}`, // Required
    currentSelection: {
      selectionStatus: "<string>", // optional, values: ['included', 'unfiltered'], default: 'included'
      expression: {
        operator: "<string>", // The attribute qualification operator/function
        operands: "<array>", // The attribute qualification operation nodes
      },
    },
  });
} catch (error) {
  // Your own error handling code
}
```

For attribute qualification filters, `currentSelection.expression` is required when `selectionStatus` is not `unfiltered`.

Some examples:

- Apply an attribute qualification

  ```js
  try {
    await mstrDossier.applyFilter({
      key: "W76", // Required
      currentSelection: {
        selectionStatus: "included",
        expression: {
          operator: "Between",
          operands: [
            {
              type: "form",
              attribute: {
                id: "96ED3EC811D5B117C000E78A4CC5F24F",
                name: "Daytime",
              },
              form: {
                id: "45C11FA478E745FEA08D781CEA190FE5",
                name: "ID",
              },
            },
            {
              type: "constant",
              dataType: "TimeStamp",
              value: "1/1/2016 12:00:14 AM",
            },
            {
              type: "constant",
              dataType: "TimeStamp",
              value: "12/31/2016 11:59:59 PM",
            },
          ],
        },
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

### Object replacement selector

To apply selections on an object replacement selector inside a page, you can use the following input:

```js
try {
  await mstrDossier.applyFilter({
    key: `${filterKey}`, // Required
    currentSelection: {
      selectionStatus: "<string>", // optional, values: ['unfiltered', 'included'], default: 'included'
      objectItems: [
        {
          id: "<string>", // The replacement object ID, required
          name: "<string>",
        },
      ],
    },
  });
} catch (error) {
  // Your own error handling code
}
```

Some examples:

- Select the object list of the selector

  ```js
  try {
    await mstrDossier.applyFilter({
      key: "W76",
      currentSelection: {
        objectItems: [
          {
            id: "8D679D4511D3E4981000E787EC6DE8A4",
            name: "Month",
          },
        ],
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

### Value parameter filter

To apply values for a value parameter filter, you can use the following input:

```js
try {
  await mstrDossier.applyFilter({
    key: `${filterKey}`, // Required
    currentSelection: {
      value: "<string>", // Required
    },
  });
} catch (error) {
  // Your own error handling code
}
```

An example:

```js
try {
  await mstrDossier.applyFilter({
    key: "W76",
    currentSelection: {
      value: "Profit",
    },
  });
} catch (error) {
  // Your own error handling code
}
```

Then the value parameter's value changes, which affects all the visualizations that use the related value parameter.

### Visualizations used as filters

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

Here are some examples:

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

## Get available filter elements

To apply filters to the dashboard, the client may need to get the list of available attribute elements of the filters or selectors. You can use the `MstrDossier.getFilterAvailableElements()` function in the Native Embedding SDK to retrieve the available attribute elements of the filters or selectors.

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
    filterKey: "W67", // filter key. Must be an attribute element filter
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
