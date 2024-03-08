---
title: Getting dashboard info via APIs
description: You can get dashboard information, such as definition and visualization data, with Native Embedding SDK.
---

<Available since="2021 Update 9 (May 2023)"/>

Filters can be applied both during the execution of an embedded dashboard and after it has been rendered. After using [Native Embedding SDK](embed-multiple-viz.md) to load the dashboard in a client's webpage, you can use the Native Embedding SDK to get the definition or data from the dashboard.

Let's say you already have `MstrEnvironment` and `MstrDossier` objects:

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
  // Your custom logic
} catch (error) {
  // Your own error handling code
}
```

## Get dashboard definition

You can use the `MstrDossier.getDossierDefinition()` function in the Native Embedding SDK to retrieve the definition of the dashboard.

| `getDossierDefinition()` |                                      |
| ------------------------ | ------------------------------------ |
| Class                    | `MstrDossier`                        |
| Return Type              | `Promise<DossierDefinition>`         |
| Description              | Get the definition of the dashboard. |

### `MstrDossier.getDossierDefinition` examples

```js
try {
  const dossierDefinition = await mstrDossier.getDossierDefinition();
  // Your own code
} catch (error) {
  // Your own error handling code
}
```

<details>
  <summary>Example of the dashboard definition in the resolved value:</summary>

```json
{
  "id": "829F892C7C418AA0242AE08F0F6B89DE",
  "name": "zdeng test dossier",
  "currentChapter": "K36",
  "chapters": [
    {
      "key": "K36",
      "name": "Chapter 1",
      "pages": [
        {
          "key": "K53",
          "name": "Page 1",
          "visualizations": [
            {
              "key": "K52",
              "name": "Visualization 1",
              "visualizationType": "grid"
            }
          ]
        }
      ],
      "filters": []
    }
  ],
  "datasets": [
    {
      "name": "New Dataset 1",
      "id": "84C31F8AD04B29C9A56616A7EF9669A4",
      "availableObjects": [
        {
          "id": "8D679D5111D3E4981000E787EC6DE8A4",
          "name": "Year",
          "type": "attribute",
          "forms": [
            {
              "id": "45C11FA478E745FEA08D781CEA190FE5",
              "name": "ID",
              "dataType": "integer",
              "baseFormCategory": "ID",
              "baseFormType": "number"
            }
          ]
        },
        {
          "id": "7FD5B69611D5AC76C000D98A4CC5F24F",
          "name": "Cost",
          "type": "metric"
        }
      ]
    }
  ]
}
```

</details>

## Get visualization data

You can use the `MstrDossier.getVisualizationData()` function in the Native Embedding SDK to retrieve the data of a single visualization.

| `getVisualizationData()` |                                                          |
| ------------------------ | -------------------------------------------------------- |
| Class                    | `MstrDossier`                                            |
| Return Type              | `Promise<VisualizationData>`                             |
| Description              | Get the definition and data of a specific visualization. |

### `MstrDossier.getVisualizationData` examples

```js
try {
  const dossierDefinition = await mstrDossier.getVisualizationData({
    visualizationKey: "K52", // visualization key, required
    offset: 0, // data offset, optional
    limit: 100, // data limit, optional
  });
  // Your own code
} catch (error) {
  // Your own error handling code
}
```

<details>
  <summary>Example of the visualization data in the resolved value:</summary>

```json
{
  "k": "K52",
  "n": "Visualization 1",
  "key": "K52",
  "name": "Visualization 1",
  "isGrid": true,
  "visualizationType": "grid",
  "definition": {
    "grid": {
      "crossTab": false,
      "metricsPosition": {
        "axis": "columns",
        "index": 0
      },
      "rows": [
        {
          "name": "Year",
          "id": "8D679D5111D3E4981000E787EC6DE8A4",
          "type": "attribute",
          "forms": [
            {
              "id": "45C11FA478E745FEA08D781CEA190FE5",
              "name": "ID",
              "dataType": "integer",
              "baseFormCategory": "ID",
              "baseFormType": "number"
            }
          ],
          "elements": [
            {
              "formValues": ["2014"],
              "id": "h2014;8D679D5111D3E4981000E787EC6DE8A4"
            },
            {
              "formValues": ["2015"],
              "id": "h2015;8D679D5111D3E4981000E787EC6DE8A4"
            },
            {
              "formValues": ["2016"],
              "id": "h2016;8D679D5111D3E4981000E787EC6DE8A4"
            }
          ]
        }
      ],
      "columns": [
        {
          "name": "Metrics",
          "id": "00000000000000000000000000000000",
          "type": "templateMetrics",
          "elements": [
            {
              "name": "Cost",
              "id": "7FD5B69611D5AC76C000D98A4CC5F24F",
              "type": "metric",
              "min": 7343097.059599997,
              "max": 12609466.811,
              "dataType": "double",
              "numberFormatting": {
                "category": 1,
                "decimalPlaces": 0,
                "thousandSeparator": true,
                "currencySymbol": "$",
                "currencyPosition": 0,
                "formatString": "\"$\"#,##0",
                "negativeType": 1
              }
            }
          ]
        }
      ],
      "sorting": {
        "rows": [],
        "columns": [],
        "pageBy": []
      },
      "thresholds": []
    }
  },
  "data": {
    "paging": {
      "total": 3,
      "current": 3,
      "offset": 0,
      "limit": 1000
    },
    "headers": {
      "rows": [[0], [1], [2]],
      "columns": [[0]]
    },
    "metricValues": {
      "raw": [[7343097.059599997], [9777520.649800004], [12609466.811]],
      "formatted": [["$7,343,097"], ["$9,777,521"], ["$12,609,467"]],
      "extras": [[{}], [{}], [{}]]
    }
  },
  "promptOrdering": []
}
```

</details>
