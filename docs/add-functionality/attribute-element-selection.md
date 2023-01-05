---
title: Enable the selection of attribute elements
description: Attribute element selection within dossiers provides end-users with the ability to conveniently select attribute elements in visualizations in an embedding way. To provide continuity with our existing APIs and enable embedded applications to take advantage of this new design concept, we have updated existing endpoints and provided new embedding SDK functions.
---

The MicroStrategy 2021 Update 3 release exposes attribute element selection within dossiers. This provides end-users with the ability to conveniently select attribute elements in visualizations in an embedding way. To provide continuity with our existing APIs and enable embedded applications to take advantage of this new design concept, we have updated existing endpoints and provided new embedding SDK functions.

## Embedding SDK functionalities

With the visualization element selection feature, the Embedding SDK could do the things below:

- Support programmatic selecting of attribute elements in visualizations. This involves the following:

  a. Select attribute elements from a single visualization after the dossier is rendered.

  b. Select attribute elements in multiple visualizations on the initial loading of the dossier.

- Support programmatic retrieval of available elements in a visualization.

- Enables the user to register an event handler to notify the parent application when the attribute element selection is changed. Incorporate the ability to register and unregister events for a callback. This enables the parent application to know when the attribute element selection is changed and provide information about the newly selected attribute elements.

## Embedding SDK APIs and examples

### API for attribute element selection in a dossier

#### Function

`Dossier.selectVizElement(props)`

The Dossier object created using `microstrategy.dossier.create(props)`. See [Methods and properties for an embedded dossier](./methods-and-properties.md) for more information.

#### Input parameters

| Parameter Name | Data Type | Description                                                                 | Required? | Sample              |
| -------------- | --------- | --------------------------------------------------------------------------- | --------- | ------------------- |
| props          | Object    | Parameters include visualization key, selection action, and selection data. | Yes       | See the JSON below. |

#### Request

```json
{
  "vizKey": "W64",
  "action": "replace", // Optional. Available values are "replace", "add", and "remove". Default: replace
  "selection": {
    "attributeElements": [
      {
        "attribute": {
          "id": "8D679D3611D3E4981000E787EC6DE8A4",
          "name": "Category" // Not required
        },
        "elements": [
          {
            "id": "h6;8D679D3611D3E4981000E787EC6DE8A4",
            "name": "Spring 2012" // Not required
          }
        ]
      }
    ]
  }
}
```

#### Response

This API returns a promise object, similar to the one shown below.

```js
myDossier
  .selectVizElement({
    vizKey: "W64",
    action: "replace",
    selection: {
      attributeElements: [
        {
          attribute: {
            id: "8D679D3611D3E4981000E787EC6DE8A4",
            name: "Category",
          },
          elements: [
            {
              id: "h6;8D679D3611D3E4981000E787EC6DE8A4",
              name: "Spring 2012",
            },
          ],
        },
      ],
    },
  })
  .then(() => {
    // ..
  })
  .catch((error) => {
    // ..
  });
```

Since the target state is specified in the API parameters, the callback parameters for the resolve case are not necessary.

| Parameter Name | Data Type    | Example                         | Comments                         |
| -------------- | ------------ | ------------------------------- | -------------------------------- |
| error          | Error Object | new Error(“invalid operation!“) | See Errors for more information. |

#### Errors

When an error occurs, this API returns a promise object that in turn returns an error object in rejected cases.

| Error Case                                                                                                | Error Category | Handling Module | Error Handling                               |
| --------------------------------------------------------------------------------------------------------- | -------------- | --------------- | -------------------------------------------- |
| The attribute or element ID in elements is missing.                                                       | Invalid input  | Embedding SDK   | Caught by the catch() of the promise object. |
| The attribute ID in elements isn't string.                                                                | Invalid input  | Embedding SDK   | Caught by the catch() of the promise object. |
| The action isn't a valid value.                                                                           | Invalid input  | Embedding SDK   | Caught by the catch() of the promise object. |
| A required parameter is missed or it is not in the correct format.                                        | Invalid input  | Web Dossier     | Caught by the catch() of the promise object. |
| The action is not "replace" and the current visualization selection mode is metric cell selection.        | Invalid input  | Web Dossier     | Caught by the catch() of the promise object. |
| The visualization is a filter and the target visualization is loading, so elements could not be selected. | Other          | Web Dossier     | Caught by the catch() of the promise object. |

### API for selecting attribute elements in multiple visualizations on initial dossier load

#### Function

`microstrategy.dossier.create(props)`

#### Input parameters

An optional visualizationSelectedElements field has been added to the props object in 2021 Update 3. This field is an array that contains objects for each visualization attribute element selection. See [Methods and properties for an embedded dossier](./methods-and-properties.md) for more information about the fields in the props input parameter.

| Parameter Name                                          | Description                                      | Data Type | Required? | Default Value |
| ------------------------------------------------------- | ------------------------------------------------ | --------- | --------- | ------------- |
| props.visualizationSelectedElements[i].visualizationkey | The visualization node key input by you.         | String    | Yes       | N/A           |
| props.visualizationSelectedElements[i].action           | Set to "replace", "add", or "remove".            | String    | No        | replace       |
| props.visualizationSelectedElements[i].selection        | Selected attribute elements in the visualization | Object    | Yes       | N/A           |

#### Request

```js
microstrategy.dossier.create({
  // the other initial parameters
  visualizationSelectedElements: [
    {
      visualizationkey: "K52",
      selection: {
        attributeElements: [
          {
            attribute: {
              id: "8D679D3611D3E4981000E787EC6DE8A4",
              name: "Category",
            },
            elements: [
              {
                id: "h6;8D679D3611D3E4981000E787EC6DE8A4",
                name: "Spring 2012",
              },
            ],
          },
        ],
      },
    },
  ],
});
```

If you do not enter a value for visualizationSelectedElements, the dossier runs using the old behavior and no new attribute elements are selected in the visualization.

#### Response

This API returns a dossier promise object in the resolved case, which can be used to call other dossier-owned Embedding SDK APIs.

```js
var placeholderDiv = document.getElementById("dossierContainer");
var myDossier;
microstrategy.dossier
  .create({
    // The initial parameters above
  })
  .then(function (dossier) {
    myDossier = dossier;
    myDossier.goToNextPage();
    // The other
  });
```

#### Errors

When an error occurs, this API returns a promise object that in turn returns an error object in rejected cases.

| Error Case                                                                                  | Error Category | Handling Module | Error Handling                                |
| ------------------------------------------------------------------------------------------- | -------------- | --------------- | --------------------------------------------- |
| A required parameter is missed or it is not in the correct format.                          | Invalid input  | Embedding SDK   | Display an error message and an alert dialog. |
| The visKey isn't a valid visualization key or it is not in the current page or panel stack. | Invalid input  | Web Dossier     | Caught by the catch() of the promise object.  |

### API for getting available elements

#### Function

`Dossier.getAvailableElements(visKey)`

#### Input parameters

| Parameter Name | Description                                                                              | Data Type | Required? | Default Value | Example |
| -------------- | ---------------------------------------------------------------------------------------- | --------- | --------- | ------------- | ------- |
| visKey         | The visualization node key. It is the result of the getCurrentPageVisualizationList API. | String    | Yes       | N/A           | "K52"   |

#### Response

This API returns a promise object, similar to the one below.

```js
myDossier
  .getAvailableElements(visKey)
  .then((availableElements) => {
    // ...
  })
  .catch((error) => {
    // ...
  });
```

The `availableElements` is an array representing all the available elements. Here is an example.

```json
[
  {
    "attribute": {
      "id": "8D679D3611D3E4981000E787EC6DE8A4",
      "name": "Category"
    },
    "elements": [
      {
        "id": "h6;8D679D3611D3E4981000E787EC6DE8A4",
        "name": "Spring 2012"
      }
    ]
  }
]
```

#### Errors

When an error occurs, this API returns a promise object that in turn returns an error object in rejected cases.

| Error Case                                                                                 | Error Category | Handling Module | Error Handling                               |
| ------------------------------------------------------------------------------------------ | -------------- | --------------- | -------------------------------------------- |
| The visKey isn't a valid visualization key or it is not in the current page or panel stack | Invalid input  | Web Dossier     | Caught by the catch() of the promise object. |

### Callback for monitoring the changing of visualization elements

In some instances, the available elements may change when visualization data is changed by a user’s manual actions. An onVisualizationElementsChanged event monitors this action and enables the user to update their available elements immediately when the data is changed.

#### Event name

`onVisualizationElementsChanged`

#### Callback format

The following code example includes `registerEventHandler`, which is an existing API.

```js
myDossier.registerEventHandler(
  microstrategy.dossier.EventType.ON_VIZ_ELEMENT_CHANGED,
  function (availableElements) {
    console.log("The available elements: ", availableElements);
    // The other handling logic after getting these available elements
  }
);
```

The callback parameter's availableElements are shown below.

```json
[
  {
    "visualizationKey": "K52",
    "attributeElements": [
      {
        "attribute": {
          "id": "8D679D3611D3E4981000E787EC6DE8A4",
          "name": "Category"
        },
        "elements": [
          {
            "id": "h6;8D679D3611D3E4981000E787EC6DE8A4",
            "name": "Spring 2012"
          }
        ]
      }
    ]
  }
]
```

#### Response

This API returns a `dossier` promise object in the resolved case, which can be used to call other dossier-owned Embedding SDK APIs.

```js
var placeholderDiv = document.getElementById("dossierContainer");
var myDossier;
microstrategy.dossier
  .create({
    url: url,
    placeholder: placeholderDiv,
  })
  .then(function (dossier) {
    myDossier = dossier;
    // The other handling logics
  });
```
