---
title: Retrieve and Apply Filters
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

## Retrieve Filters After a Dossier is Rendered

After an embedded dossier has been rendered, you can use the `getFilterList()` method of the `Dossier` class in the Embedding SDK to retrieve information about filters that were applied to chapters in the dossier.

| Class     | Method            | Return Type         | Description                                              | Example                   |
| --------- | ----------------- | ------------------- | -------------------------------------------------------- | ------------------------- |
| `Dossier` | `getFilterList()` | `Promise<filter[]>` | Returns a list of filters defined on the current chapter | `dossier.getFilterList()` |
|           |                   |                     |                                                          |                           |

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

The table below shows the filter details for each filter type.

|     | filterType                | filterDetail                   | Description                                                                                                                                                                                                                                                                                                                                                                                |
| --- | ------------------------- | ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
|     | `metricQualByValue`       | `from/to` or `value` or `null` | If the filter operator is 'between' or 'notBetween', the `filterDetail` will be: {<pre>{<br/> operatorId:<br/> from:<br/> to:<br/>}<br/></pre> If the filter operator is not 'isNull' or 'isNoNull', the `filterDetail` will only have 'operatorId' <pre>{<br/> operatorId:<br/>}</pre> For the remaining filter operators, the `filterDetail` will be: <pre>{ operatorId: value: } </pre> |
|     |                           | `operatorId`                   | String that refers to a specific function type used by the metric qualifier filter. Only the `qualByValue` qualify type is supported.                                                                                                                                                                                                                                                      |
|     | `metricQualByRank`        | `value`                        | User-inputted value that specifies the rank used in the filter expression                                                                                                                                                                                                                                                                                                                  |
|     |                           | `qualType`                     | Number that refers to a specific qualify type used by the metric qualifier filter. Qualify types include Highest, Lowest, Highest%, and Lowest%                                                                                                                                                                                                                                            |
|     | `metricSliderByValue`     | `maxValue`                     | Maximum allowed value for the metric slider filter. If the user-inputted value is greater than this value, it will be set to maxValue automatically.                                                                                                                                                                                                                                       |
|     |                           | `minValue`                     | Minimum allowed value for the metric sSlider filter. If the user-inputted value is less than this value, it will be set to minValue automatically                                                                                                                                                                                                                                          |
|     |                           | `from`                         | User-inputted value that specifies the beginning of the metric range used in the filter expression for the metric slider filter.                                                                                                                                                                                                                                                           |
|     |                           | `to`                           | User-inputted value that specifies the ending of the metric range used in the filter expression for the metric slider filter.                                                                                                                                                                                                                                                              |
|     | `metricSliderByRank`      | `value`                        | User-inputted value that specifies the rank used in the filter expression for the metric slider filter.                                                                                                                                                                                                                                                                                    |
|     |                           | `qualType`                     | Number that refers to a specific qualify type used by the metric qualifier filter. Qualify types include Highest, Lowest, Highest%, and Lowest%.                                                                                                                                                                                                                                           |
|     | `attributeSearchSelector` | `supportMultiple`              | Specifies whether multiple search selections can be applied to the metric slider filter. If it is not true, only one selection will be applied to the filter.                                                                                                                                                                                                                              |
|     |                           | `items`                        | Items that are currently selected                                                                                                                                                                                                                                                                                                                                                          |
|     | `attributeSelector`       | `supportMultiple`              | Specifies whether multiple selections can be applied to the metric slider filter. If it is not true, only one selection will be applied to the filter.                                                                                                                                                                                                                                     |
|     |                           | `items`                        | Array of attribute items, containing names, IDs and selection status of all attribute items <pre>{<br/><br/> name: item name to show<br/><br/> value: item ID used to do filter<br/><br/> selected: if this item is selected<br/><br/>}</pre>                                                                                                                                              |
|     | `attributeSlider`         | `supportMultiple`              | Specifies whether multiple selections can be applied to the filter. If it is not true, only one selection will be applied to the filter.                                                                                                                                                                                                                                                   |
|     |                           | `selection`                    | Range or selection applied to the filter                                                                                                                                                                                                                                                                                                                                                   |
|     |                           | `items`                        | Array of attribute items, containing names, IDs and selection status of all attribute items <pre>{<br/><br/> name: item name to show<br/><br/> value: item ID used to do filter<br/><br/> selected: if this item is selected<br/><br/>}</pre>                                                                                                                                              |
|     | `calendar`                | `maxDate`                      | Latest date for the calendar filter.                                                                                                                                                                                                                                                                                                                                                       |
|     |                           | `minDate`                      | Earliest date for the calendar filter.                                                                                                                                                                                                                                                                                                                                                     |
|     |                           | `from`                         | User-inputted value that specifies the beginning of the date range                                                                                                                                                                                                                                                                                                                         |
|     |                           | `to`                           | User-inputted value that specifies define the ending of the date range                                                                                                                                                                                                                                                                                                                     |
|     |                           |                                |

### Filter Type Examples

Some examples for the JSON filter object in the return array of `getFilterList()`:

- [attributeSelector](#attributeSelector)
- [attributeSearchSelector](#attributeSearchSelector)
- [attributeSlider](#attributeSlider)
- [calendar](#calendar)
- [metricQualByValue](#metricQualByValue)
- [metricQualByRank](#metricQualByRank)
- [metricSliderByValue](#metricSliderByValue)
- [metricSliderByRank](#metricSliderByRank)

<a name="attributeSelector"></a> **Filter type:** attributeSelector

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
```

<a name="attributeSearchSelector"></a> **Filter type:** attributeSearchSelector

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
      },
    ],
    "supportMultiple": true
  }
```

<a name="attributeSlider"></a> **Filter type:** attributeSlider

```json
{
   "filterKey":"IGK228",
   "filterName":"Month of Year",
   "isExclude":false,
   "filterType":"attributeSlider",
   "filterDetail":{
      "indexInfo":{},
      "items":[
         {
            "name":"January",
            "value":"h1;8D679D4511D3E4981000E787EC6DE8A4",
            "selected":false
         },
         {
            "name":"February",
            "value":"h2;8D679D4511D3E4981000E787EC6DE8A4",
            "selected":false
         },
         {
            "name":"March",
            "value":"h3;8D679D4511D3E4981000E787EC6DE8A4",
            "selected":false
         },
         {
            "name":"April",
            "value":"h4;8D679D4511D3E4981000E787EC6DE8A4",
            "selected":false
         },
         {
            "name":"May",
            "value":"h5;8D679D4511D3E4981000E787EC6DE8A4",
            "selected":false
         },
         {
            "name":"June",
            "value":"h6;8D679D4511D3E4981000E787EC6DE8A4",
            "selected":false
         },
         {
            "name":"July",
            "value":"h7;8D679D4511D3E4981000E787EC6DE8A4",
            "selected":false
         },
         {
            "name":"August",
            "value":"h8;8D679D4511D3E4981000E787EC6DE8A4",
            "selected":false
         },
         {
            "name":"September",
            "value":"h9;8D679D4511D3E4981000E787EC6DE8A4",
            "selected":false
         },
         {
            "name":"October",
            "value":"h10;8D679D4511D3E4981000E787EC6DE8A4",
            "selected":false
         },
         {
            "name":"November",
            "value":"h11;8D679D4511D3E4981000E787EC6DE8A4",
            "selected":false
         },
         {
            "name":"December",
            "value":"h12;8D679D4511D3E4981000E787EC6DE8A4",
            "selected":false
         }
      ],
      "supportMultiple":true
   }
```

<a name="calendar"></a> **Filter type:** calendar

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

<a name="metricQualByValue"></a> **Filter type:** metricQualByValue

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

<a name="metricQualByRank"></a> **Filter type:** metricQualByRank

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

<a name="metricSliderByValue"></a> **Filter type:** metricSliderByValue

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
    filterName: "Profi",
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

<a name="metricSliderByRank"></a> **Filter type:** metricSliderByRank

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

After an embedded dossier has been rendered, you can apply different kinds of filters to chapters in the dossier using methods on the Embedding SDK. In this release, getFilterList() only exposes filters defined in the current chapter.

| Class   | SDK API Name                   | Parameters                                                                                                                                                                                                       | Example                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Description                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ------- | ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Dossier | `filterSelectAllAttributes`    | <pre>{<br/> filterInfo: {<br/> key: string<br/> }，<br/><br/> holdSubmit: boolean<br/>}</pre>                                                                                                                    | <pre>{<br/> "filterInfo": {<br/> "key": "IGK359"<br/> },<br/> "holdSubmit": false<br/>}</pre>                                                                                                                                                                                                                                                                                                                                                                            | Select all the attributes for the filter with "`key`" and apply the change immediately.                                                                                                                                                                                                                                                                                                                                                    |
|         | `filterDeselectAllAttributes`  | <pre>{<br/> filterInfo: {<br/> key: string<br/> },<br/><br/> holdSubmit: boolean<br/>}</pre>                                                                                                                     | <pre>{<br/> "filterInfo": {<br/> "key": "IGK359"<br/> },<br/> "holdSubmit": true<br/>}</pre>                                                                                                                                                                                                                                                                                                                                                                             | Deselect all the attributes for the filter with "`key`" and save the change to client side. <br/><br/>Since "`holdSubmit`" is set to true, this change is applied and rendered together with other cached changes in an "Apply Filter request" where "holdSubmit" has a falsy value, typically "`filterApplyAll`".                                                                                                                         |
|         | `filterSelectSingleAttribute`  | <pre>{<br/> filterInfo: {<br/> key: string,<br/> },<br/> selection: {<br/> value: string<br/> (name: string)<br/> },<br/><br/> holdSubmit: boolean<br/>}</pre>                                                   | <pre>{<br/> "filterInfo": {<br/> "key": "W394"<br/> },<br/> "selection": {<br/> "value": "h1;8D679D3711D3E4981000E787EC6DE8A4"<br/> },<br/> "holdSubmit": false<br/>}<br/>or<br/><br/>{<br/> "filterInfo": {<br/> "key": "W394"<br/> },<br/> "selection": {<br/> "name": "Books"<br/> },<br/> "holdSubmit": false<br/>}</pre>                                                                                                                                            | Select single attributes for the filter with "`key`". <br/><br/>Use this API for filters that support single selection <br/><br/>Use either "name" or "`value`" to do the selection. "`value`" is the attribute element ID. You can get it from the "`getFilterList`" API. "`name`" should be the attribute element name, if you provide the name, it is converted to a value (ID).                                                        |
|         | `filterSelectMultiAttributes`  | <pre>{<br/> filterInfo: {<br/> key: string,<br/> },<br/> selections: [{<br/> value: string<br/> (name: string)<br/> }],<br/><br/> holdSubmit: boolean<br/>}</pre>                                                | <pre>{<br/> "filterInfo": {<br/> "key": "W394"<br/> },<br/> "selections": [<br/> {<br/> "value": "h1;8D679D3711D3E4981000E787EC6DE8A4"<br/> },<br/> {<br/> "value": "h2;8D679D3711D3E4981000E787EC6DE8A4"<br/> }<br/> ],<br/> "holdSubmit": false<br/>}<br/>or<br/><br/>{<br/> "filterInfo": {<br/> "key": "W394"<br/> },<br/> "selections": [<br/> {<br/> "name": "Books"<br/> },<br/> {<br/> "name": "Electronics"<br/> }<br/> ],<br/> "holdSubmit": false<br/>}</pre> | Select multiple attributes for the filter with "`key`". <br/><br/>Use this API for filters that support multiple selections. <br/><br/>Use either "`name`" or "`value`" to do the selection. "`value`" is the attribute element ID. You can get it from the "`getFilterList`" API. "name" should be the attribute element name, if you provide the name, it is converted to a value (ID).                                                  |
|         | `filterSearchSingleAttribute`  | <pre>{<br/> filterInfo: {<br/> key: string,<br/> },<br/> selection: {<br/> name: string,<br/> value: string<br/> },<br/> holdSubmit: boolean<br/>}</pre>                                                         | <pre>{<br/> "filterInfo": {<br/> "key": "W394"<br/> },<br/> "selections": [<br/> {<br/> "name": "Books",<br/> "value": "h1;8D679D3711D3E4981000E787EC6DE8A4"<br/> },<br/> {<br/> "name": "Movies",<br/> "value": "h2;8D679D3711D3E4981000E787EC6DE8A4"<br/> }<br/> ],<br/> "holdSubmit": false<br/>}</pre>                                                                                                                                                               | Select single attribute for the search filter with "key". <br/><br/>Use this API for filters that support single selection. <br/><br/>"value" is the attribute element ID, which is required. <br/><br/>"name" is the attribute element name                                                                                                                                                                                               |
|         | `filterSearchMultiAttributes`  | <pre>{<br/> filterInfo: {<br/> key: string,<br/> },<br/> selections: [{<br/> name: string,<br/> value: string<br/> }],<br/> holdSubmit: boolean<br/>}</pre>                                                      | <pre>{<br/> "filterInfo": {<br/> "key": "W394"<br/> },<br/> "selections": [<br/> {<br/> "name": "Books",<br/> "value": "h1;8D679D3711D3E4981000E787EC6DE8A4"<br/> },<br/> {<br/> "name": "Movies",<br/> "value": "h2;8D679D3711D3E4981000E787EC6DE8A4"<br/> }<br/> ],<br/> "holdSubmit": false<br/>}</pre>                                                                                                                                                               | Select multiple attributes for the search filter with "`key`". <br/><br/>Use this API for filters that support multiple selection. <br/><br/>"`value`" is the attribute element ID, which is required. <br/><br/>"`name`" is the attribute element name.                                                                                                                                                                                   |
|         | `filterAttributeSingleSlider`  | <pre>{<br/> filterInfo: {<br/> key: string,<br/> },<br/> selection: number,<br/> holdSubmit: boolean<br/>}</pre>                                                                                                 | <pre>{<br/> "filterInfo": {<br/> "key": "W227"<br/> },<br/> "selection": 2<br/> "holdSubmit": false<br/>}</pre>                                                                                                                                                                                                                                                                                                                                                          | Select single attributes for the filter with "`key`" using the slider style. Selection is the index of the attribute in the attributes items' `getFilterInfos` result. <br/><br/>Use this API for filters that support single selection.                                                                                                                                                                                                   |
|         | `filterAttributeMultiSlider`   | <pre>{<br/> filterInfo: {<br/> key: string,<br/> },<br/> selection: [from, to],<br/> holdSubmit: boolean<br/>}</pre>                                                                                             | <pre>{<br/> "filterInfo": {<br/> "key": "IGK228"<br/> },<br/> "selections": [<br/> 2,<br/> 8<br/> ],<br/> "holdSubmit": false<br/>}</pre>                                                                                                                                                                                                                                                                                                                                | Select multiple attributes for the filter with "`key`" using the slider style. The from and to values in "`selections`" refer to the starting and ending attribute indexes for attribute items in the `getFilterInfos` result. <br/><br/>Use this API for filters that support multiple selection.                                                                                                                                         |
|         | `filterSetDateRange`           | <pre>{<br/> filterInfo: {<br/> key: string<br/> },<br/> date: {<br/> from: string,<br/> to: string<br/> },<br/><br/> holdSubmit: boolean <br/>}</pre>                                                            | <pre>{<br/> "filterInfo": {<br/> "key": "W113"<br/> },<br/> "date": {<br/> "from": "01/01/2007 11:59:00 PM"<br/> "to": "01/30/2007 11:59:00 PM"<br/> },<br/> "holdSubmit": false<br/>}</pre>                                                                                                                                                                                                                                                                             | Select the from and to date range for the date range filter with "`key`". <br/><br/>If `from` is missing, the dataset start date is used. <br/><br/>If `to` is missing, the dataset end date is used. <br/><br/>The from and to strings should a format recognized by the `Date.parse()` method. This format should beIETF-compliant RFC 2822 or ISO8601.                                                                                  |
|         | `filterSetMetricQualByValue`   | <pre>{<br/> filterInfo: {<br/> key: string<br/> },<br/> exp: {<br/> operator: enum string,<br/> firstValue: number(optional),<br/> lastValue: number(optional)<br/> },<br/><br/> holdSubmit: boolean<br/>}</pre> | <pre>{<br/> "filterInfo": {<br/> "key": "W116"<br/> },<br/> "exp": {<br/> "operator": "between",<br/> "firstValue": 400000,<br/> "lastValue": 800000<br/> },<br/> "holdSubmit": false<br/>}</pre>                                                                                                                                                                                                                                                                        | Apply a metric qualify by value filter. <br/><br/>key - The filterKey <br/><br/>operator - An enum of "equals", "not equals", "greater", "greater equal", "less", "less equal", "between", "not between", "in", "not in"', "is null", or "is not null" <br/><br/>firstValue – The number in the top input box <br/><br/>lastValue – The number in the bottom input box                                                                     |
|         | `filterSetMetricQualByRank`    | <pre>{<br/> filterInfo: {<br/> key: string,<br/> },<br/> exp: {<br/> qualType: enum string,<br/> value: number<br/> },<br/><br/> holdSubmit: boolean<br/>}</pre>                                                 | <pre>{<br/> "filterInfo": {<br/> "key": "IGK263"<br/> },<br/> "exp": {<br/> "qualType": "highest",<br/> "value": 20<br/> },<br/> "holdSubmit": false<br/>}</pre>                                                                                                                                                                                                                                                                                                         | Apply metric qualify by rank filter. <br/><br/>key – The filterKey <br/><br/>qualType – An enum of "highest", "lowest", "highest percent", or "lowest percent" <br/><br/>value – The rank value                                                                                                                                                                                                                                            |
|         | `filterSetMetricSliderByValue` | <pre>{<br/> filterInfo: {<br/> key: string,<br/> },<br/> exp: {<br/> range: [number, number]<br/> },<br/><br/> holdSubmit: boolean<br/>}</pre>                                                                   | <pre>{<br/> "filterInfo": {<br/> "key": "IGK311"<br/> },<br/> "exp": {<br/> "range": [<br/> 400000,<br/> 600000<br/> ],<br/> "holdSubmit": false<br/> }<br/>}</pre>                                                                                                                                                                                                                                                                                                      | Apply metric slider by range filter. <br/><br/>key – The filterKey <br/><br/>range – The metric range <br/><br/>Since a slider has fixed steps, the metric range you enter is converted to an index of step items. <br/><br/>Example: <br/><br/>The step items are: [0, 10, 20, 30, 40, 50] <br/><br/>You enter a metric range of [13, 26], which is converted to the index of step items [1, 3]. This refers to the value range of 10~30. |
|         | `filterSetMetricSliderByRank`  | <pre>{<br/> filterInfo: {<br/> key: string,<br/> },<br/> exp: {<br/> qualType: enum string,<br/> value: number<br/> },<br/><br/> holdSubmit: boolean<br/>}</pre>                                                 | <pre>{<br/> "filterInfo": {<br/> "key": "IGK359"<br/> },<br/> "exp": {<br/> "qualType": "highest",<br/> "value": 10<br/> },<br/> "holdSubmit": false<br/>}</pre>                                                                                                                                                                                                                                                                                                         | Apply metric slider by rank filter <br/><br/>key – The filterKey <br/><br/>qualType – An enum of "highest", "lowest", "highest percent", or "lowest percent". <br/><br/>value – The rank value <br/><br/>Since a slider has fixed steps, the metric range you enter is converted to an index of step items.                                                                                                                                |
|         | `filterClearAll`               | No parameters                                                                                                                                                                                                    |                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Clears all filters                                                                                                                                                                                                                                                                                                                                                                                                                         |
|         | `filterClear`                  | <pre>{<br/> filterInfo: {<br/> key: string<br/> },<br/> holdSubmit: boolean <br/>}</pre>                                                                                                                         | <pre>{<br/> "filterInfo": {<br/> "key": "IGK359"<br/> },<br/> "holdSubmit": false<br/>}</pre>                                                                                                                                                                                                                                                                                                                                                                            | Clear filter with "`key`"                                                                                                                                                                                                                                                                                                                                                                                                                  |
|         | `filterSetInclude`             | <pre>{<br/> filterInfo: {<br/> key: string<br/> },<br/> holdSubmit: boolean <br/>}</pre>                                                                                                                         | <pre>{<br/> "filterInfo": {<br/> "key": "IGK359"<br/> },<br/> "holdSubmit": false<br/>}</pre>                                                                                                                                                                                                                                                                                                                                                                            | Sets filter as include                                                                                                                                                                                                                                                                                                                                                                                                                     |
|         | `filterSetExclude`             | <pre>{<br/> filterInfo: {<br/> key: string<br/> },<br/> holdSubmit: boolean <br/>}</pre>                                                                                                                         | <pre>{<br/> "filterInfo": {<br/> "key": "IGK359"<br/> },<br/> "holdSubmit": false<br/>}</pre>                                                                                                                                                                                                                                                                                                                                                                            | Sets filter as exclude                                                                                                                                                                                                                                                                                                                                                                                                                     |
|         | `filterApplyAll`               | No parameters                                                                                                                                                                                                    |                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Applies all changes cached by "`holdSubmit`"                                                                                                                                                                                                                                                                                                                                                                                               |

## Apply Multiple Filters After the Dossier is Rendered

This section introduces how you can cache the results of several filters and apply them together. Let's say you have the following filters:

> The items in bold are selected.

- A multi-selection filter that binds checkboxes:

  Category: **Books**, **Movies**, Games, Sports

- A single selection filter that binds radio buttons:

  Gender: Male, **Female**

Take the following steps:

1. Apply `filterSelectMultiAttributes`, set "`selections`" as `Books` and `Movies`, and set "`holdSubmit`" as `true`.
1. Apply `filterSelectSingleAttribute`, set "`selection`" as `Female`, and set "`holdSubMit`" as `true`.
1. Apply `filterApplyAll`.

   The result returned from server is filtered by Books, Movies, and Female.

### Raise Event

We use events to communicate with the container page. You can listen on these events and provide the `eventHandler` function.

| Class     | Method                                   | Description                                |
| --------- | ---------------------------------------- | ------------------------------------------ |
| `Dossier` | `registerEventHandler(evtName, handler)` | Register the event `handler` on `evtName`. |
|           | `removeEventHandler(evtName, handler)`   | Remove the event `handler` on `evtName`.   |
|           |                                          |                                            |

### Event Name and Event Context

You can get the `EventType` from `mstr.dossier.EventType`.

| Event enum                       | Event Name             | Description                                                                                                                         | Data                                             |                                                                                                                     | Event Content Example   |
| -------------------------------- | ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| `EventType.ON_GRAPHICS_SELECTED` | "`onGraphicsSelected`" | Raised when a user select graphics in the visualization. This event is only raised when the visualization supports "Use as filter." | Attribute element list for each selected graphic | <pre>embedDossier.registerEventHandler( <br/> EventType.ON_GRAPHICS_SELECTED, <br/> graphicsSelectedHandler )</pre> | See below               |
| `EventType.ON_PAGE_SWITCHED`     | "`onPageSwitched`"     | Raised when the user switches pages                                                                                                 | Current page path                                | <pre>embedDossier.registerEventHandler( <br/> EventType.ON_PAGE_SWITCHED, <br/> pageSwitchedHandler)</pre>          | `{key: 'K52'}`          |
| `EventType.ON_FILTER_UPDATED`    | "`onFilterUpdated`"    | Raised when the user changes the filter                                                                                             | Changed filter into                              | <pre>embedDossier.registerEventHandler(<br/> EventType.ON_FILTER_UPDATED, <br/> filterUpdatedHandler)</pre>         | same as `getFilterList` |
|                                  |                        |                                                                                                                                     |                                                  |                                                                                                                     |                         |

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

| Class     | Method                                                     | Description                                                                                                                                                                    |
| --------- | ---------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `Dossier` | `registerGraphicsSelectEventHandlerToViz(vizKey, handler)` | A wrapper function for `registerEventHandler` for `EventType.ON_GRAPHICS_SELECTED` on visualizations with a node key of "`vizKey`".                                            |
|           | `registerFilterUpdateHandler(handler)`                     | A wrapper function for `registerEventHandler` for `EventType.ON_FILTER_UPDATED`. <br/><br/>Equal to `registerEventHandler( EventType.ON_FILTER_UPDATED, filterUpdatedHandler)` |
|           | `registerPageSwitchHandler(handler)`                       | A wrapper function for `registerEventHandler` for `EventType.ON_PAGE_SWITCHED`. <br/><br/>Equal to `registerEventHandler( EventType.ON_PAGE_SWITCHED, pageSwitchedHandler)`    |
|           |                                                            |                                                                                                                                                                                |

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
