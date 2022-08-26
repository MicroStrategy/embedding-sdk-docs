---
title: Retrieve and Apply Filters
description: You can apply filters both when an embedded dossier is being executed and after the dossier has been rendered.
---

You can apply filters both when an embedded dossier is being executed and after the dossier has been rendered.

- **Apply filters during execution**

  You can pass filters as properties when an embedded dossier is being executed. You use the `dossier.create(props)` method in the Embedding SDK and define the filters to apply using the [filters](./set-properties) property. Currently, only attribute selection filters and attribute search filters are supported; attribute slider, calendar, and metric filters are not supported in this release.

- **Apply and retrieve filters after execution**

  Once you have used the `dossier.create(props)` method to embed a dossier into a third-party web page, you can use methods in the Embedding SDK to retrieve and apply filters.

  - [Retrieve Filters After a Dossier is Rendered](#retrieve-filters-after-a-dossier-is-rendered)

    After an embedded dossier has been rendered, you can use the `getFilterList()` method of the `Dossier` class to retrieve information about filters that were applied to chapters in the dossier.

  - [Apply Filters After a Dossier is Rendered](#apply-a-filter-after-the-dossier-is-rendered)

    After an embedded dossier has been rendered, you can apply different kinds of filters to chapters in the dossier using a number of different methods on the Embedding SDK. Chapter is the only filter type that is currently supported.

  - [Apply Multiple Filters After a Dossier is Rendered](#apply-multiple-filters-after-the-dossier-is-rendered)

    This section introduces how you can cache the results of several filters and apply them together.

:::note

To help you get started, we have provided an [example in the Embedding SDK Playground](https://microstrategy.github.io/playground/?example=g6) that will embed a dossier with `attributeSelector` filters.

:::

## Retrieve Filters After a Dossier is Rendered

After an embedded dossier has been rendered, you can use the `getFilterList()` method of the `Dossier` class in the Embedding SDK to retrieve information about filters that were applied to chapters in the dossier.

| `getFilterList()` |                                                           |
| ----------------- | --------------------------------------------------------- |
| Class             | `Dossier`                                                 |
| Return Type       | `Promise<filter[]>`                                       |
| Description       | Returns a list of filters defined on the current chapter. |
| Example           | `dossier.getFilterList()`                                 |

`getFilterList()` returns an array of JSON objects that each describe a specific filter. Each JSON filter object has the following fields:

| Field          | Description                                                                                 |
| -------------- | ------------------------------------------------------------------------------------------- |
| `filterKey`    | Key for the filter                                                                          |
| `filterName`   | Name for the filter (which is the same as the name of the data used by the filter)          |
| `filterType`   | String representing the filter type, in an easy-to-read format                              |
| `filterDetail` | The expressions and values that define the filter. They are different for each filter type. |
| `isExclude`    | Specify whether to include or exclude the selections for the filter                         |
|                |                                                                                             |

### Filter types and filter details

The sections below show the filter details for each filter type.

#### metricQualByValue

- `from/to` or `value` or `null`

  If the filter operator is 'between' or 'notBetween', the `filterDetail` will be:

  ```javascript
  {
    operatorId:
    from:
    to:
  }
  ```

  If the filter operator is not 'isNull' or 'isNoNull', the `filterDetail` will only have `operatorId`:

  ```javascript
  {
    operatorId:
  }
  ```

  For the remaining filter operators, the `filterDetail` will be:

  ```javascript
  {
    operatorId:
    value:
  }
  ```

- `operatorId`

  String that refers to a specific function type used by the metric qualifier filter. Only the `qualByValue` qualify type is supported.

#### metricQualByRank

- `value`

  User-inputted value that specifies the rank used in the filter expression.

- `qualType`

  Number that refers to a specific qualify type used by the metric qualifier filter. Qualify types include Highest, Lowest, Highest%, and Lowest%.

#### metricSliderByValue

- `maxValue`

  Maximum allowed value for the metric slider filter. If the user-inputted value is greater than this value, it will be set to maxValue automatically.

- `minValue`

  Minimum allowed value for the metric sSlider filter. If the user-inputted value is less than this value, it will be set to minValue automatically.

- `from`

  User-inputted value that specifies the beginning of the metric range used in the filter expression for the metric slider filter.

- `to`

  User-inputted value that specifies the ending of the metric range used in the filter expression for the metric slider filter.

#### metricSliderByRank

- `value`

  User-inputted value that specifies the rank used in the filter expression for the metric slider filter.

- `qualType`

  Number that refers to a specific qualify type used by the metric qualifier filter. Qualify types include Highest, Lowest, Highest%, and Lowest%.

#### attributeSearchSelector

- `supportMultiple`

  Specifies whether multiple search selections can be applied to the metric slider filter. If it is not true, only one selection will be applied to the filter.

- `items`

  Items that are currently selected.

#### attributeSelector

- `supportMultiple`

  Specifies whether multiple selections can be applied to the metric slider filter. If it is not true, only one selection will be applied to the filter.

- `items`

  Array of attribute items, containing names, IDs and selection status of all attribute items

  ```javascript
  {
    name: item name to show
    value: item ID used to do filter
    selected: if this item is selected
  }
  ```

#### attributeSlider

- `supportMultiple`

  Specifies whether multiple selections can be applied to the filter. If it is not true, only one selection will be applied to the filter.

- `selection`

  Range or selection applied to the filter.

- `items`

  Array of attribute items, containing names, IDs and selection status of all attribute items <pre>{<br/><br/> name: item name to show<br/><br/> value: item ID used to do filter<br/><br/> selected: if this item is selected<br/><br/>}</pre>

#### calendar

- `maxDate`

  Latest date for the calendar filter.

- `minDate`

  Earliest date for the calendar filter.

- `from`

  User-inputted value that specifies the beginning of the date range.

- `to`

  User-inputted value that specifies the ending of the date range.

### Filter Type Examples

Some examples for the JSON filter object in the return array of `getFilterList()`:

- [attributeSelector](#filter-type-attributeselector)
- [attributeSearchSelector](#filter-type-attributeSearchSelector)
- [attributeSlider](#filter-type-attributeSlider)
- [calendar](#filter-type-calendar)
- [metricQualByValue](#filter-type-metricQualByValue)
- [metricQualByRank](#filter-type-metricQualByRank)
- [metricSliderByValue](#filter-type-metricSliderByValue)
- [metricSliderByRank](#filter-type-metricSliderByRank)

#### Filter type: attributeSelector

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

#### Filter type: attributeSearchSelector

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

#### Filter type: attributeSlider

```json
{
  "filterKey": "IGK228",
  "filterName": "Month of Year",
  "isExclude": false,
  "filterType": "attributeSlider",
  "filterDetail": {
    "indexInfo": {},
    "items": [
      {
        "name": "January",
        "value": "h1;8D679D4511D3E4981000E787EC6DE8A4",
        "selected": false
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

#### Filter type: calendar

```json
[
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
]
```

#### Filter type: metricQualByValue

```js
[
  {
    filterKey: "W116",
    filterName: "Cost",
    isExclude: false,
    filterType: "metricQualByValue",
    filterDetail: {
      operator: "between",
      from: 400000,
      to: 800000,
    },
  },
];
```

or

```js
[
  {
    filterKey: "W116",
    filterName: "Cost",
    isExclude: false,
    filterType: "metricQualByValue",
    filterDetail: {
      operator: "is null",
    },
  },
];
```

or

```js
[
  {
    filterKey: "W116",
    filterName: "Cost",
    isExclude: false,
    filterType: "metricQualByValue",
    filterDetail: {
      operator: "greater",
      value: 400000,
    },
  },
];
```

#### Filter type: metricQualByRank

```js
[
  {
    filterKey: "IGK263",
    filterName: "Cost",
    isExclude: false,
    filterType: "metricQualByRank",
    filterDetail: {
      qualType: "highest percent",
      value: 20,
    },
  },
];
```

#### Filter type: metricSliderByValue

```js
[
  {
    filterKey: "IGK311",
    filterName: "Cost",
    isExclude: false,
    filterType: "metricSliderByValue",
    filterDetail: {
      indexInfo: {
        itemLength: 149,
        itemStep: 5995,
        from: 51,
        to: 148,
      },
      min: 28271,
      max: 921453,
      from: 334016,
      to: 921453,
    },
  },
  {
    filterKey: "W392",
    filterName: "Profit",
    isExclude: false,
    filterType: "metricSliderByValue",
    filterDetail: {
      indexInfo: {
        itemLength: 149,
        itemStep: 1385,
        from: 0,
        to: 148,
      },
      min: -372,
      max: 205973,
      from: -372,
      to: 205973,
    },
  },
];
```

#### Filter type: metricSliderByRank

```js
[
  {
    filterKey: "IGK359",
    filterName: "Cost",
    isExclude: false,
    filterType: "metricSliderByRank",
    filterDetail: {
      indexInfo: {
        itemLength: 144,
        itemStep: 1,
        value: 143,
      },
      min: 1,
      max: 144,
      qualType: "highest",
      value: 144,
    },
  },
];
```

## Apply a Filter After the Dossier is Rendered

After an embedded dossier has been rendered, you can apply different kinds of filters to chapters in the dossier using methods on the Embedding SDK. In this release, `getFilterList()` only exposes filters defined in the current chapter.

### Dossier.filterSelectAllAttributes

Select all the attributes for the filter with `key` and apply the change immediately.

#### Parameters

```javascript
{
  filterInfo: {
    key: string
  },
  holdSubmit: boolean
}
```

#### Example

```json
{
  "filterInfo": {
    "key": "IGK359"
  },
  "holdSubmit": false
}
```

### Dossier.filterDeselectAllAttributes

Deselect all the attributes for the filter with `key` and save the change to client side.

Since `holdSubmit` is set to true, this change is applied and rendered together with other cached changes in an "Apply Filter request" where `holdSubmit` has a falsy value, typically `filterApplyAll`.

#### Parameters

```javascript
{
  filterInfo: {
    key: string
  },
  holdSubmit: boolean
}
```

#### Example

```json
{
  "filterInfo": {
    "key": "IGK359"
  },
  "holdSubmit": true
}
```

### Dossier.filterSelectSingleAttribute

Select single attributes for the filter with `key`.

Use this API for filters that support single selection.

Use either `name` or `value` to do the selection. `value` is the attribute element ID. You can get it from the `getFilterList` API. `name` should be the attribute element name, if you provide the name, it is converted to a value (ID).

#### Parameters

```javascript
{
  filterInfo: {
  key: string,
  },
  selection: {
    value: string
    (name: string)
  },
  holdSubmit: boolean
}
```

#### Example

```json
{
  "filterInfo": {
    "key": "W394"
  },
  "selection": {
    "value": "h1;8D679D3711D3E4981000E787EC6DE8A4"
  },
  "holdSubmit": false
}
```

or

```json
{
  "filterInfo": {
    "key": "W394"
  },
  "selection": {
    "name": "Books"
  },
  "holdSubmit": false
}
```

### Dossier.filterSelectMultiAttributes

Select multiple attributes for the filter with `key`.

Use this API for filters that support multiple selections.

Use either `name` or `value` to do the selection. `value` is the attribute element ID. You can get it from the `getFilterList` API. `name` should be the attribute element name, if you provide the name, it is converted to a value (ID).

#### Parameters

```javascript
{
  filterInfo: {
    key: string,
  },
  selections: [
    {
      value: string
      (name: string)
    }
  ],
  holdSubmit: boolean
}
```

#### Example

```json
{
  "filterInfo": {
    "key": "W394"
  },
  "selections": [
    {
      "value": "h1;8D679D3711D3E4981000E787EC6DE8A4"
    },
    {
      "value": "h2;8D679D3711D3E4981000E787EC6DE8A4"
    }
  ],
  "holdSubmit": false
}
```

or

```json
{
  "filterInfo": {
    "key": "W394"
  },
  "selections": [
    {
      "name": "Books"
    },
    {
      "name": "Electronics"
    }
  ],
  "holdSubmit": false
}
```

### Dossier.filterSearchSingleAttribute

Select single attribute for the search filter with `key`.

Use this API for filters that support single selection.

`value` is the attribute element ID, which is required.

`name` is the attribute element name.

#### Parameters

```javascript
{
  filterInfo: {
    key: string,
  },
  selection: {
    name: string,
    value: string
  },
  holdSubmit: boolean
}
```

#### Example

```json
{
  "filterInfo": {
    "key": "W394"
  },
  "selections": [
    {
      "name": "Books",
      "value": "h1;8D679D3711D3E4981000E787EC6DE8A4"
    },
    {
      "name": "Movies",
      "value": "h2;8D679D3711D3E4981000E787EC6DE8A4"
    }
  ],
  "holdSubmit": false
}
```

### Dossier.filterSearchMultiAttributes

Select multiple attributes for the search filter with `key`.

Use this API for filters that support multiple selection.

`value` is the attribute element ID, which is required.

`name` is the attribute element name.

#### Parameters

```javascript
{
  filterInfo: {
    key: string,
  },
  selections: [
    {
      name: string,
      value: string
    }
  ],
  holdSubmit: boolean
}
```

#### Example

```json
{
  "filterInfo": {
    "key": "W394"
  },
  "selections": [
    {
      "name": "Books",
      "value": "h1;8D679D3711D3E4981000E787EC6DE8A4"
    },
    {
      "name": "Movies",
      "value": "h2;8D679D3711D3E4981000E787EC6DE8A4"
    }
  ],
  "holdSubmit": false
}
```

### Dossier.filterAttributeSingleSlider

Select single attributes for the filter with `key` using the slider style. Selection is the index of the attribute in the attributes items' `getFilterInfos` result.

Use this API for filters that support single selection.

#### Parameters

```javascript
{
 filterInfo: {
  key: string,
 },
 selection: number,
 holdSubmit: boolean
}
```

#### Example

```json
{
  "filterInfo": {
    "key": "W227"
  },
  "selection": 2,
  "holdSubmit": false
}
```

### Dossier.filterAttributeMultiSlider

Select multiple attributes for the filter with `key` using the slider style. The from and to values in `selections` refer to the starting and ending attribute indexes for attribute items in the `getFilterInfos` result.

Use this API for filters that support multiple selection.

#### Parameters

```javascript
{
  filterInfo: {
    key: string,
  },
  selection: [
    from,
    to
  ],
  holdSubmit: boolean
}
```

#### Example

```json
{
  "filterInfo": {
    "key": "IGK228"
  },
  "selections": [2, 8],
  "holdSubmit": false
}
```

### Dossier.filterSetDateRange

Select the from and to date range for the date range filter with `key`.

If `from` is missing, the dataset start date is used.

If `to` is missing, the dataset end date is used.

The from and to strings should a format recognized by the `Date.parse()` method. This format should beIETF-compliant RFC 2822 or ISO8601.

#### Parameters

```javascript
{
  filterInfo: {
    key: string
  },
  date: {
    from: string,
    to: string
  },
  holdSubmit: boolean
}
```

#### Example

```json
{
  "filterInfo": {
    "key": "W113"
  },
  "date": {
    "from": "01/01/2007 11:59:00 PM",
    "to": "01/30/2007 11:59:00 PM"
  },
  "holdSubmit": false
}
```

### Dossier.filterSetMetricQualByValue

Apply a metric qualify by value filter.

`key` - The filterKey

`operator` - An enum of "equals", "not equals", "greater", "greater equal", "less", "less equal", "between", "not between", "in", "not in"', "is null", or "is not null"

`firstValue` – The number in the top input box

`lastValue` – The number in the bottom input box

#### Parameters

```javascript
{
  filterInfo: {
    key: string
  },
  exp: {
    operator: enum string,
    firstValue: number(optional),
    lastValue: number(optional)
  },
  holdSubmit: boolean
}
```

#### Example

```json
{
  "filterInfo": {
    "key": "W116"
  },
  "exp": {
    "operator": "between",
    "firstValue": 400000,
    "lastValue": 800000
  },
  "holdSubmit": false
}
```

### Dossier.filterSetMetricQualByRank

Apply metric qualify by rank filter.

`key` – The filterKey

`qualType` – An enum of "highest", "lowest", "highest percent", or "lowest percent"

`value` – The rank value

#### Parameters

```javascript
{
  filterInfo: {
    key: string,
  },
  exp: {
    qualType: enum string,
    value: number
  },
  holdSubmit: boolean
}
```

#### Example

```json
{
  "filterInfo": {
    "key": "IGK263"
  },
  "exp": {
    "qualType": "highest",
    "value": 20
  },
  "holdSubmit": false
}
```

### Dossier.filterSetMetricSliderByValue

Apply metric slider by range filter.

`key` – The filterKey

`range` – The metric range

Since a slider has fixed steps, the metric range you enter is converted to an index of step items.

Example:

The step items are: [0, 10, 20, 30, 40, 50]

You enter a metric range of [13, 26], which is converted to the index of step items [1, 3]. This refers to the value range of 10~30.

#### Parameters

```javascript
{
  filterInfo: {
    key: string,
  },
  exp: {
    range: [number, number]
  },
  holdSubmit: boolean
}
```

#### Example

```json
{
  "filterInfo": {
    "key": "IGK311"
  },
  "exp": {
    "range": [400000, 600000],
    "holdSubmit": false
  }
}
```

### Dossier.filterSetMetricSliderByRank

Apply metric slider by rank filter

`key` – The filterKey

`qualType` – An enum of "highest", "lowest", "highest percent", or "lowest percent".

`value` – The rank value

Since a slider has fixed steps, the metric range you enter is converted to an index of step items.

#### Parameters

```javascript
{
  filterInfo: {
    key: string,
  },
  exp: {
    qualType: enum string,
    value: number
  },
  holdSubmit: boolean
}
```

#### Example

```json
{
  "filterInfo": {
    "key": "IGK359"
  },
  "exp": {
    "qualType": "highest",
    "value": 10
  },
  "holdSubmit": false
}
```

### Dossier.filterClearAll

Clears all filters.

#### Parameters

No parameters

#### Example

No Example

### Dossier.filterClear

Clear filter with `key`.

#### Parameters

```javascript
{
  filterInfo: {
    key: string
  },
  holdSubmit: boolean
}
```

#### Example

```json
{
  "filterInfo": {
    "key": "IGK359"
  },
  "holdSubmit": false
}
```

### Dossier.filterSetInclude

Set filter as include.

#### Parameters

```javascript
{
  filterInfo: {
    key: string
  },
  holdSubmit: boolean
}
```

#### Example

```json
{
  "filterInfo": {
    "key": "IGK359"
  },
  "holdSubmit": false
}
```

### Dossier.filterSetExclude

Set filter as exclude.

#### Parameters

```javascript
{
  filterInfo: {
    key: string
  },
  holdSubmit: boolean
}
```

#### Example

```json
{
  "filterInfo": {
    "key": "IGK359"
  },
  "holdSubmit": false
}
```

### Dossier.filterApplyAll

Applies all changes cached by `holdSubmit`.

#### Parameters

No parameters

#### Example

No Example

## Apply Multiple Filters After the Dossier is Rendered

This section introduces how you can cache the results of several filters and apply them together. Let's say you have the following filters:

> The items in bold are selected.

- A multi-selection filter that binds checkboxes:

  Category: **Books**, **Movies**, Games, Sports

- A single selection filter that binds radio buttons:

  Gender: Male, **Female**

Take the following steps:

1. Apply `filterSelectMultiAttributes`, set `selections` as `Books` and `Movies`, and set `holdSubmit` as `true`.
1. Apply `filterSelectSingleAttribute`, set `selection` as `Female`, and set `holdSubMit` as `true`.
1. Apply `filterApplyAll`.

   The result returned from server is filtered by Books, Movies, and Female.

### Raise Event

We use events to communicate with the container page. You can listen on these events and provide the `eventHandler` function.

- `Dossier.registerEventHandler(evtName, handler)`

  Register the event `handler` on `evtName`.

- `Dossier.removeEventHandler(evtName, handler)`

  Remove the event `handler` on `evtName`.

### Event Name and Event Context

You can get the `EventType` from `mstr.dossier.EventType`.

#### onGraphicsSelected

Raised when a user select graphics in the visualization. This event is only raised when the visualization supports "Use as filter."

##### Event Enum

`EventType.ON_GRAPHICS_SELECTED`

##### Data

Attribute element list for each selected graphic.

##### Usage Example

```javascript
embedDossier.registerEventHandler(EventType.ON_GRAPHICS_SELECTED, graphicsSelectedHandler);
```

##### Event Content Example

[See below](#event-content-example-foreventtypeon_graphics_selected)

#### onPageSwitched

Raised when the user switches pages.

##### Event Enum

`EventType.ON_PAGE_SWITCHED`

##### Data

Current page path.

##### Usage Example

```javascript
embedDossier.registerEventHandler(EventType.ON_PAGE_SWITCHED, pageSwitchedHandler);
```

##### Event Content Example

```javascript
{
  key: "K52";
}
```

#### onFilterUpdated

Raised when the user changes the filter.

##### Event Enum

`EventType.ON_FILTER_UPDATED`

##### Data

Changed filter into.

##### Usage Example

```javascript
embedDossier.registerEventHandler(EventType.ON_FILTER_UPDATED, filterUpdatedHandler);
```

##### Event Content Example

same as `getFilterList`.

### Event Content Example for `EventType.ON_GRAPHICS_SELECTED`

```javascript
{
   name: "onGraphicsSelected",
   value: {
      vizKey: 'K52',
      //an array containing all the selected graphics info, each item is one graphic
      graphics: [
      // an array containing the attribute combination for one graphic
         [
            //n: attribute name, v: attribute value
            {n: "Category", v: "Electronics"},
            {n: "Quarter", v: "2009 Q4"}
         ],[
            {n: "Category", v: "Electronics"},
            {n: "Quarter", v: "2009 Q3"}
         ]
      ]
   }
}
```

The following wrapper functions make it easy to register event handlers for certain events.

- `Dossier.registerGraphicsSelectEventHandlerToViz(vizKey, handler)`

  A wrapper function for `registerEventHandler` for `EventType.ON_GRAPHICS_SELECTED` on visualizations with a node key of `vizKey`.

- `Dossier.registerFilterUpdateHandler(handler)`

  A wrapper function for `registerEventHandler` for `EventType.ON_FILTER_UPDATED`.

  Equal to `registerEventHandler( EventType.ON_FILTER_UPDATED, filterUpdatedHandler)`.

- `Dossier.registerPageSwitchHandler(handler)`

  A wrapper function for `registerEventHandler` for `EventType.ON_PAGE_SWITCHED`.

  Equal to `registerEventHandler( EventType.ON_PAGE_SWITCHED, pageSwitchedHandler)`.

In map visualizations with multiple map layers, the selected graphics may come from a different map layer, so the event raised for `EventType.ON_GRAPHICS_SELECTED` is different with other visualizations. See the following example:

```javascript
{
 name: "graphicsSelected",
 value: {
  //primary key for the map visualization
  vizKey: 'W99',
  graphics: [
   //each object represent the selected graphics info for one layer
   {
    //layer key
    key: "W99",
    //layer name
    name: "Layer 1",
    graphics: [
     [
      {n: "Category", v: "Electronics"},
      {n: "Quarter", v: "2009 Q4"}
     ],[
      {n: "Category", v: "Electronics"},
       {n: "Quarter", v: "2009 Q3"}
     ]
    ]
   },{
    key: "W100",
    name: "Layer 2",
    graphics: [
     [
      {n: "Category", v: "Books"},
      {n: "Year", v: "2009"}
     ],[
      {n: "Category", v: "Movies"},
       {n: "Year", v: "2008"}
     ]
    ]

   }

  ]
 }
}
```
