---
title: Retrieve and apply filters
description: Filters can be applied both during the execution of an embedded dossier and after it has been rendered.
---

Filters can be applied both during the execution of an embedded dossier and after it has been rendered.

- **Apply filters during execution**

  You can pass filters as properties when an embedded dossier is being executed. You use the `dossier.create(props)` method in the Embedding SDK and define the filters to apply using the [filters](./methods-and-properties.md#filters) property.

- **Apply and retrieve filters after execution**

  Once you have used the `dossier.create(props)` method to embed a dossier into a third-party web page, you can use methods in the Embedding SDK to retrieve and apply filters.

  - [Retrieve filters after a dossier is rendered](#retrieve-filters-after-a-dossier-is-rendered)

    After an embedded dossier has been rendered, you can use the `getFilterList()` method of the `Dossier` class to retrieve information about filters that were applied to chapters in the dossier.

  - [Apply filters after a dossier is rendered](#apply-a-filter-after-the-dossier-is-rendered)

    After an embedded dossier has been rendered, you can apply different kinds of filters to chapters in the dossier using a number of different methods on the Embedding SDK. Chapter is the only filter type that is currently supported.

  - [Apply multiple filters after a dossier is rendered](#apply-multiple-filters-after-the-dossier-is-rendered)

    This section introduces how you can cache the results of several filters and apply them together.

:::tip

To help you get started, we have provided a set of filter examples in the Embedding SDK Playground.

- [Attribute Selector Filter Example](https://microstrategy.github.io/playground/?example=g6)
- [Attribute Search Filter Example](https://microstrategy.github.io/playground/?example=g7)
- [Attribute Slider Filter Example](https://microstrategy.github.io/playground/?example=g8)
- [Calendar Example](https://microstrategy.github.io/playground/?example=g9)
- [Metric Qualification by Rank Example](https://microstrategy.github.io/playground/?example=g10)
- [Metric Qualification by Value Example](https://microstrategy.github.io/playground/?example=g11)
- [Metric Slider by Rank Example](https://microstrategy.github.io/playground/?example=g12)
- [Metric Slider by Value Example](https://microstrategy.github.io/playground/?example=g13)

:::

## Retrieve filters after a dossier is rendered

After an embedded dossier has been rendered, you can use the `getFilterList()` method of the `Dossier` class in the Embedding SDK to retrieve information about filters that were applied to chapters in the dossier.

| `getFilterList()` |                                                           |
| ----------------- | --------------------------------------------------------- |
| Class             | `Dossier`                                                 |
| Return Type       | `Promise<filter[]>`                                       |
| Description       | Returns a list of filters defined in the current chapter. |
| Example           | `dossier.getFilterList()`                                 |

`getFilterList()` returns an array of JSON objects that each describe a specific filter. Each JSON filter object has the following fields:

| Field          | Description                                                                                                   |
| -------------- | ------------------------------------------------------------------------------------------------------------- |
| `filterKey`    | A string to represent the key for the filter.                                                                 |
| `filterName`   | A string to represent the name for the filter (which is the same as the name of the data used by the filter). |
| `filterType`   | A string to represent the filter type, in an easy-to-read format.                                             |
| `filterDetail` | An object to show the expressions and values that define the filter. They are different for each filter type. |
| `isExclude`    | A boolean to specify whether to include or exclude the selections for the filter.                             |

### Filter types and filter details

The sections below show the filter details for each filter type.

#### `metricQualByValue`

- `from`, `to`, `value`, and `null`

  If the filter operator is "between" or "not between", the `filterDetail` will be:

  ```json
  {
    "operator": "between", // An enum string in ["equals", "not equals", "greater", "greater equal", "less", "less equal", "between", "not between", "in", "not in", "is null", "is not null"]
    "from": 0, // Number
    "to": 100 // Number
  }
  ```

  If the filter operator is not "is null" or "is not null", the `filterDetail` will only have `operator`:

  ```json
  {
    "operator": "is null" // An enum string in ["equals", "not equals", "greater", "greater equal", "less", "less equal", "between", "not between", "in", "not in", "is null", "is not null"]
  }
  ```

  For the remaining filter operators, the `filterDetail` will be:

  ```json
  {
    "operator": "greater", // An enum string in ["equals", "not equals", "greater", "greater equal", "less", "less equal", "between", "not between", "in", "not in", "is null", "is not null"]
    "value": 1 // Number
  }
  ```

- `operator`

  A `string` that refers to a specific function type used by the metric qualifier filter. Only the `qualByValue` qualify type is supported. Possible values are "equals", "not equals", "greater", "greater equal", "less", "less equal", "between", "not between", "in", "not in", "is null", or "is not null".

#### `metricQualByRank`

- `value`

  User-inputted value that specifies the rank used in the filter expression.

- `qualType`

  A `string` that refers to a specific qualify type used by the metric qualifier filter. Qualify types include "highest", "lowest", "highest percent", "lowest percent".

#### `metricSliderByValue`

- `max`

  Maximum allowed value for the metric slider filter. If the user-inputted value is greater than this value, it will be set to max automatically.

- `min`

  Minimum allowed value for the metric slider filter. If the user-inputted value is less than this value, it will be set to min automatically.

- `from`

  User-inputted value that specifies the beginning of the metric range used in the filter expression for the metric slider filter.

- `to`

  User-inputted value that specifies the ending of the metric range used in the filter expression for the metric slider filter.

- `indexInfo`

  JSON object that specifies the total number of items and selection indexes of the items.

  ```json
  {
    "itemLength": 150,
    "itemStep": 7016,
    "from": 50,
    "to": 106
  }
  ```

#### `metricSliderByRank`

- `max`

  Maximum allowed value for the metric slider filter. If the user-inputted value is greater than this value, it will be set to max automatically.

- `min`

  Minimum allowed value for the metric slider filter. If the user-inputted value is less than this value, it will be set to min automatically.

- `value`

  User-inputted value that specifies the rank used in the filter expression for the metric slider filter.

- `qualType`

  Number that refers to a specific qualify type used by the metric qualifier filter. Qualify types include "highest", "lowest", "highest percent", "lowest percent".

- `indexInfo`

  JSON object that specifies the total number of items and selection index of the item.

  ```json
  {
    "itemLength": 35,
    "itemStep": 1,
    "value": 1
  }
  ```

#### `attributeSearchSelector`

- `supportMultiple`

  Specifies whether multiple search selections can be applied to the metric slider filter. If it is not true, only one selection will be applied to the filter.

- `items`

  Array of attribute items, containing names, IDs and selection status of all attribute items

  ```json
  {
    "name": "item name to show",
    "value": "item ID used to do filter",
    "selected": true // if this item is selected
  }
  ```

#### `attributeSelector`

- `supportMultiple`

  Specifies whether multiple selections can be applied to the metric slider filter. If it is not true, only one selection will be applied to the filter.

- `items`

  Array of attribute items, containing names, IDs and selection status of all attribute items

  ```json
  {
    "name": "item name to show",
    "value": "item ID used to do filter",
    "selected": true // if this item is selected
  }
  ```

#### `attributeSlider`

- `supportMultiple`

  Specifies whether multiple selections can be applied to the filter. If it is not true, only one selection will be applied to the filter.

- `indexInfo`

  JSON object that specifies the total number of items and selection index of the item(s).

  If `supportMultiple` is true:

  ```json
  {
    "itemLength": 20, // The length of the items array
    "from": 0, // The starting position of selected elements in the items array
    "to": 19 // The ending position of selected elements in the items array
  }
  ```

  If `supportMultiple` is false:

  ```json
  {
    "itemLength": 20, // The length of the items array
    "value": 0 // The position of the selected element in the items array
  }
  ```

- `items`

  Array of attribute items, containing names, IDs and selection status of all attribute items

  ```json
  [
    {
      "name": "item name to show",
      "value": "item ID used to do filter",
      "selected": true // if this item is selected
    }
  ]
  ```

#### `calendar`

- `maxDate`

  Latest date for the calendar filter.

- `minDate`

  Earliest date for the calendar filter.

- `from`

  User-inputted value that specifies the beginning of the date range.

- `to`

  User-inputted value that specifies the ending of the date range.

### Filter type examples

Some examples for the JSON filter object in the return array of `getFilterList()`:

- [attributeSelector](#filter-type-attributeselector)
- [attributeSearchSelector](#filter-type-attributesearchselector)
- [attributeSlider](#filter-type-attributeslider)
- [calendar](#filter-type-calendar)
- [metricQualByValue](#filter-type-metricqualbyvalue)
- [metricQualByRank](#filter-type-metricqualbyrank)
- [metricSliderByValue](#filter-type-metricsliderbyvalue)
- [metricSliderByRank](#filter-type-metricsliderbyrank)

#### Filter type: `attributeSelector`

```json
{
  "filterKey": "W394",
  "filterName": "Category",
  "isExclude": false,
  "filterType": "attributeSelector",
  "filterDetail": {
    "items": [
      {
        "name": "Books",
        "value": "h1;8D679D3711D3E4981000E787EC6DE8A4",
        "selected": true
      },
      {
        "name": "Electronics",
        "value": "h2;8D679D3711D3E4981000E787EC6DE8A4",
        "selected": true
      },
      {
        "name": "Movies",
        "value": "h3;8D679D3711D3E4981000E787EC6DE8A4",
        "selected": false
      },
      {
        "name": "Music",
        "value": "h4;8D679D3711D3E4981000E787EC6DE8A4",
        "selected": false
      }
    ],
    "supportMultiple": true
  }
}
```

#### Filter type: `attributeSearchSelector`

```json
{
  "filterKey": "W76",
  "filterName": "Year",
  "isExclude": false,
  "filterType": "attributeSearchSelector",
  "filterDetail": {
    "items": [
      {
        "name": "2007",
        "value": "h2007;8D679D5111D3E4981000E787EC6DE8A4",
        "selected": true
      },
      {
        "name": "2008",
        "value": "h2008;8D679D3711D3E4981000E787EC6DE8A4",
        "selected": true
      }
    ],
    "supportMultiple": true
  }
}
```

#### Filter type: `attributeSlider`

```json
{
  "filterKey": "IGK228",
  "filterName": "Month of Year",
  "isExclude": false,
  "filterType": "attributeSlider",
  "filterDetail": {
    "indexInfo": {
      "itemsLength": 12,
      "from": 0,
      "to": 0
    },
    "items": [
      {
        "name": "January",
        "value": "h1;8D679D4511D3E4981000E787EC6DE8A4",
        "selected": true
      },
      {
        "name": "February",
        "value": "h2;8D679D4511D3E4981000E787EC6DE8A4",
        "selected": false
      },
      {
        "name": "March",
        "value": "h3;8D679D4511D3E4981000E787EC6DE8A4",
        "selected": false
      },
      {
        "name": "April",
        "value": "h4;8D679D4511D3E4981000E787EC6DE8A4",
        "selected": false
      },
      {
        "name": "May",
        "value": "h5;8D679D4511D3E4981000E787EC6DE8A4",
        "selected": false
      },
      {
        "name": "June",
        "value": "h6;8D679D4511D3E4981000E787EC6DE8A4",
        "selected": false
      },
      {
        "name": "July",
        "value": "h7;8D679D4511D3E4981000E787EC6DE8A4",
        "selected": false
      },
      {
        "name": "August",
        "value": "h8;8D679D4511D3E4981000E787EC6DE8A4",
        "selected": false
      },
      {
        "name": "September",
        "value": "h9;8D679D4511D3E4981000E787EC6DE8A4",
        "selected": false
      },
      {
        "name": "October",
        "value": "h10;8D679D4511D3E4981000E787EC6DE8A4",
        "selected": false
      },
      {
        "name": "November",
        "value": "h11;8D679D4511D3E4981000E787EC6DE8A4",
        "selected": false
      },
      {
        "name": "December",
        "value": "h12;8D679D4511D3E4981000E787EC6DE8A4",
        "selected": false
      }
    ],
    "supportMultiple": true
  }
}
```

#### Filter type: `calendar`

```json
{
  "filterKey": "W65",
  "filterName": "Daytime",
  "isExclude": false,
  "filterType": "calendar",
  "filterDetail": {
    "from": "1/30/2007 11:59:00 PM",
    "to": "5/30/2007 11:59:00 PM",
    "maxDate": "12/31/2010 11:59:59 PM",
    "minDate": "01/01/2007 12:00:00 AM"
  }
}
```

#### Filter type: `metricQualByValue`

```json
{
  "filterKey": "W116",
  "filterName": "Cost",
  "isExclude": false,
  "filterType": "metricQualByValue",
  "filterDetail": {
    "operator": "between",
    "from": 400000,
    "to": 800000
  }
}
```

or

```json
{
  "filterKey": "W116",
  "filterName": "Cost",
  "isExclude": false,
  "filterType": "metricQualByValue",
  "filterDetail": {
    "operator": "is null"
  }
}
```

or

```json
{
  "filterKey": "W116",
  "filterName": "Cost",
  "isExclude": false,
  "filterType": "metricQualByValue",
  "filterDetail": {
    "operator": "greater",
    "value": 400000
  }
}
```

#### Filter type: `metricQualByRank`

```json
{
  "filterKey": "IGK263",
  "filterName": "Cost",
  "isExclude": false,
  "filterType": "metricQualByRank",
  "filterDetail": {
    "qualType": "highest percent",
    "value": 20
  }
}
```

#### Filter type: `metricSliderByValue`

```json
[
  {
    "filterKey": "IGK311",
    "filterName": "Cost",
    "isExclude": false,
    "filterType": "metricSliderByValue",
    "filterDetail": {
      "indexInfo": {
        "itemLength": 149,
        "itemStep": 5995,
        "from": 51,
        "to": 148
      },
      "min": 28271,
      "max": 921453,
      "from": 334016,
      "to": 921453
    }
  },
  {
    "filterKey": "W392",
    "filterName": "Profit",
    "isExclude": false,
    "filterType": "metricSliderByValue",
    "filterDetail": {
      "indexInfo": {
        "itemLength": 149,
        "itemStep": 1385,
        "from": 0,
        "to": 148
      },
      "min": -372,
      "max": 205973,
      "from": -372,
      "to": 205973
    }
  }
]
```

#### Filter type: `metricSliderByRank`

```json
{
  "filterKey": "IGK359",
  "filterName": "Cost",
  "isExclude": false,
  "filterType": "metricSliderByRank",
  "filterDetail": {
    "indexInfo": {
      "itemLength": 144,
      "itemStep": 1,
      "value": 143
    },
    "min": 1,
    "max": 144,
    "qualType": "highest",
    "value": 144
  }
}
```

## Apply a filter after the dossier is rendered

After an embedded dossier has been rendered, you can apply different kinds of filters to chapters in the dossier using methods on the Embedding SDK. In this release, `getFilterList()` only exposes filters defined in the current chapter.

### Dossier.filterSelectAllAttributes(filterJson)

Select all the attributes for the filter with `key` and apply the change immediately.

#### Example of `filterJson` parameter

```json
{
  "filterInfo": {
    "key": "IGK359" // String. The filter key.
  },
  "holdSubmit": false // Boolean. Determines whether or not to hold off applying the filter until Dossier.filterApplyAll() is called.
}
```

### Dossier.filterDeselectAllAttributes(filterJson)

Deselect all the attributes for the filter with `key` and save the change to client side.

Since `holdSubmit` is set to true, this change is applied and rendered together with other cached changes in an "Apply Filter request" where `holdSubmit` has a falsy value, typically `filterApplyAll`.

#### Example of `filterJson` parameter

```json
{
  "filterInfo": {
    "key": "IGK359" // String. The filter key.
  },
  "holdSubmit": true // Boolean. Determines whether or not to hold off applying the filter until Dossier.filterApplyAll() is called.
}
```

### Dossier.filterSelectSingleAttribute(filterJson)

Select single attributes for the filter with `key`.

Use this API for filters that support single selection.

Use either `name` or `value` to do the selection. `value` is the attribute element ID. You can get it from the `getFilterList` API. `name` should be the attribute element name, if you provide the name, it is converted to a value (ID).

#### Example of `filterJson` parameter

```json
{
  "filterInfo": {
    "key": "W394" // String. The filter key.
  },
  "selection": {
    "value": "h1;8D679D3711D3E4981000E787EC6DE8A4" // String. The id of the attribute element. Use either "value" or "name".
  },
  "holdSubmit": false // Boolean. Determines whether or not to hold off applying the filter until Dossier.filterApplyAll() is called.
}
```

or

```json
{
  "filterInfo": {
    "key": "W394" // String. The filter key.
  },
  "selection": {
    "name": "Books" // String. The name of the attribute element. Use either "value" or "name".
  },
  "holdSubmit": false // Boolean. Determines whether or not to hold off applying the filter until Dossier.filterApplyAll() is called.
}
```

### Dossier.filterSelectMultiAttributes(filterJson)

Select multiple attributes for the filter with `key`.

Use this API for filters that support multiple selections.

Use either `name` or `value` to do the selection. `value` is the attribute element ID. You can get it from the `getFilterList` API. `name` should be the attribute element name, if you provide the name, it is converted to a value (ID).

#### Example of `filterJson` parameter

```json
{
  "filterInfo": {
    "key": "W394" // String. The filter key.
  },
  "selections": [
    {
      "value": "h1;8D679D3711D3E4981000E787EC6DE8A4" // String. The id of the attribute element. Use either "value" or "name".
    },
    {
      "value": "h2;8D679D3711D3E4981000E787EC6DE8A4" // String. The id of the attribute element. Use either "value" or "name".
    }
  ],
  "holdSubmit": false // Boolean. Determines whether or not to hold off applying the filter until Dossier.filterApplyAll() is called.
}
```

or

```json
{
  "filterInfo": {
    "key": "W394" // String. The filter key.
  },
  "selections": [
    {
      "name": "Books" // String. The name of the attribute element. Use either "value" or "name".
    },
    {
      "name": "Electronics" // String. The name of the attribute element. Use either "value" or "name".
    }
  ],
  "holdSubmit": false // Boolean. Determines whether or not to hold off applying the filter until Dossier.filterApplyAll() is called.
}
```

### Dossier.filterSearchSingleAttribute(filterJson)

Select single attribute for the search filter with `key`.

Use this API for filters that support single selection.

`value` is the attribute element ID, which is required.

`name` is the attribute element name.

#### Example of `filterJson` parameter

```json
{
  "filterInfo": {
    "key": "W394" // String. The filter key.
  },
  "selections": [
    {
      "name": "Books", // String. The name of the attribute element. Use either "value" or "name".
      "value": "h1;8D679D3711D3E4981000E787EC6DE8A4" // String. The id of the attribute element. Use either "value" or "name".
    },
    {
      "name": "Movies", // String. The name of the attribute element. Use either "value" or "name".
      "value": "h2;8D679D3711D3E4981000E787EC6DE8A4" // String. The id of the attribute element. Use either "value" or "name".
    }
  ],
  "holdSubmit": false // Boolean. Determines whether or not to hold off applying the filter until Dossier.filterApplyAll() is called.
}
```

### Dossier.filterSearchMultiAttributes(filterJson)

Select multiple attributes for the search filter with `key`.

Use this API for filters that support multiple selection.

`value` is the attribute element ID, which is required.

`name` is the attribute element name.

#### Example of `filterJson` parameter

```json
{
  "filterInfo": {
    "key": "W394" // String. The filter key.
  },
  "selections": [
    {
      "name": "Books", // String. The name of the attribute element. Use either "value" or "name".
      "value": "h1;8D679D3711D3E4981000E787EC6DE8A4" // String. The id of the attribute element. Use either "value" or "name".
    },
    {
      "name": "Movies", // String. The name of the attribute element. Use either "value" or "name".
      "value": "h2;8D679D3711D3E4981000E787EC6DE8A4" // String. The id of the attribute element. Use either "value" or "name".
    }
  ],
  "holdSubmit": false // Boolean. Determines whether or not to hold off applying the filter until Dossier.filterApplyAll() is called.
}
```

### Dossier.filterAttributeSingleSlider(filterJson)

Select single attributes for the filter with `key` using the slider style. Selection is the index of the attribute in the attributes items `getFilterInfos` result.

Use this API for filters that support single selection.

#### Example of `filterJson` parameter

```json
{
  "filterInfo": {
    "key": "W227" // String. The filter key.
  },
  "selection": 2, // Number. The index of the selection in items array.
  "holdSubmit": false // Boolean. Determines whether or not to hold off applying the filter until Dossier.filterApplyAll() is called.
}
```

### Dossier.filterAttributeMultiSlider(filterJson)

Select multiple attributes for the filter with `key` using the slider style. The from and to values in `selections` refer to the starting and ending attribute indexes for attribute items in the `getFilterInfos` result.

Use this API for filters that support multiple selection.

#### Example of `filterJson` parameter

```json
{
  "filterInfo": {
    "key": "IGK228" // String. The filter key.
  },
  "selections": [2, 8], // [from: Number, to: Number]. The index of starting and ending positions in items array of the selection.
  "holdSubmit": false // Boolean. Determines whether or not to hold off applying the filter until Dossier.filterApplyAll() is called.
}
```

### Dossier.filterSetDateRange(filterJson)

Select the from and to date range for the date range filter with `key`.

If `from` is missing, the dataset start date is used.

If `to` is missing, the dataset end date is used.

The from and to strings should a format recognized by the `Date.parse()` method. This format should beIETF-compliant RFC 2822 or ISO8601.

#### Example of `filterJson` parameter

```json
{
  "filterInfo": {
    "key": "W113" // String. The filter key.
  },
  "date": {
    "from": "01/01/2007 11:59:00 PM", // String. The starting date of selection.
    "to": "01/30/2007 11:59:00 PM" // String. The ending date of selection.
  },
  "holdSubmit": false // Boolean. Determines whether or not to hold off applying the filter until Dossier.filterApplyAll() is called.
}
```

### Dossier.filterSetMetricQualByValue(filterJson)

Apply a metric qualify by value filter.

`key` - The filterKey

`operator` - An enum of "equals", "not equals", "greater", "greater equal", "less", "less equal", "between", "not between", "in", "not in", "is null", or "is not null"

`firstValue` – The number in the top input box

`lastValue` – The number in the bottom input box

#### Example of `filterJson` parameter

```json
{
  "filterInfo": {
    "key": "W116" // String. The filter key.
  },
  "exp": {
    "operator": "between", // String
    "firstValue": 400000, // Number.
    "lastValue": 800000 // Number.
  },
  "holdSubmit": false // Boolean. Determines whether or not to hold off applying the filter until Dossier.filterApplyAll() is called.
}
```

### Dossier.filterSetMetricQualByRank(filterJson)

Apply metric qualify by rank filter.

`key` – The filterKey

`qualType` – An enum of "highest", "lowest", "highest percent", or "lowest percent"

`value` – The rank value

#### Example of `filterJson` parameter

```json
{
  "filterInfo": {
    "key": "IGK263" // String. The filter key.
  },
  "exp": {
    "qualType": "highest", // String.
    "value": 20 // Number.
  },
  "holdSubmit": false // Boolean. Determines whether or not to hold off applying the filter until Dossier.filterApplyAll() is called.
}
```

### Dossier.filterSetMetricSliderByValue(filterJson)

Apply metric slider by range filter.

`key` – The filterKey

`range` – The metric range

Since a slider has fixed steps, the metric range you enter is converted to an index of step items.

Example:

The step items are: [0, 10, 20, 30, 40, 50]

You enter a metric range of [13, 26], which is converted to the index of step items [1, 3]. This refers to the value range of 10~30.

#### Example of `filterJson` parameter

```json
{
  "filterInfo": {
    "key": "IGK311" // String. The filter key.
  },
  "exp": {
    "range": [400000, 600000], // [from: Number, to: Number]. The range of numbers starting at "from" and ending at "to".
    "holdSubmit": false // Boolean. Determines whether or not to hold off applying the filter until Dossier.filterApplyAll() is called.
  }
}
```

### Dossier.filterSetMetricSliderByRank(filterJson)

Apply metric slider by rank filter

`key` – The filterKey

`qualType` – An enum of "highest", "lowest", "highest percent", or "lowest percent".

`value` – The rank value

Since a slider has fixed steps, the metric range you enter is converted to an index of step items.

#### Example of `filterJson` parameter

```json
{
  "filterInfo": {
    "key": "IGK359" // String. The filter key.
  },
  "exp": {
    "qualType": "highest", // String.
    "value": 10 // Number.
  },
  "holdSubmit": false // Boolean. Determines whether or not to hold off applying the filter until Dossier.filterApplyAll() is called.
}
```

### Dossier.filterClearAll()

Clears all filters.

No parameters

### Dossier.filterClear(filterJson)

Clear filter with `key`.

#### Example of `filterJson` parameter

```json
{
  "filterInfo": {
    "key": "IGK359" // String. The filter key.
  },
  "holdSubmit": false // Boolean. Determines whether or not to hold off applying the filter until Dossier.filterApplyAll() is called.
}
```

### Dossier.filterSetInclude(filterJson)

Set filter as include.

#### Example of `filterJson` parameter

```json
{
  "filterInfo": {
    "key": "IGK359" // String. The filter key.
  },
  "holdSubmit": false // Boolean. Determines whether or not to hold off applying the filter until Dossier.filterApplyAll() is called.
}
```

### Dossier.filterSetExclude(filterJson)

Set filter as exclude.

#### Example of `filterJson` parameter

```json
{
  "filterInfo": {
    "key": "IGK359" // String. The filter key.
  },
  "holdSubmit": false // Boolean. Determines whether or not to hold off applying the filter until Dossier.filterApplyAll() is called.
}
```

### Dossier.filterApplyAll()

Applies all changes cached by `holdSubmit`.

No parameters

## Apply multiple filters after the dossier is rendered

This section introduces how you can cache the results of several filters and apply them together. Let's say you have the following filters:

:::note

The items in bold are selected.

:::

- A multi-selection filter that binds checkboxes:

  Category: **Books**, **Movies**, Games, Sports

- A single selection filter that binds radio buttons:

  Gender: Male, **Female**

Take the following steps:

1. Apply [`filterSelectMultiAttributes`](#dossierfilterselectmultiattributesfilterjson), set `selections` as `Books` and `Movies`, and set `holdSubmit` as `true`.
1. Apply [`filterSelectSingleAttribute`](#dossierfilterselectsingleattributefilterjson), set `selection` as `Female`, and set `holdSubmit` as `true`.
1. Apply [`filterApplyAll`](#dossierfilterapplyall).

   The result returned from server is filtered by Books, Movies, and Female.

## Events

There are two events that are fired on the embedded dossier when a filter is applied after rendering.

- [onFilterUpdated](./add-event.md#onfilterupdated)
- [onVisualizationElementsChanged](./add-event.md#onvisualizationelementschanged)
