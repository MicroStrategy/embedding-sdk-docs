---
title: Add event handling
description: Events allow the custom application page to listen to events from the embedded visualizations. You can listen to these events and provide event handler functions to respond to them. For example, you can add code to capture element selection events from embedded visualizations and apply them as a filter.
---

<Available since="2021 Update 9 (May 2023)"/>

Event handling allows a custom application page to listen to events from embedded visualizations. You can listen to these events and handle the events in the handler functions. For example, you can add code to capture element selection events from embedded visualizations and apply them as a filter.

Let's say you already have `MstrEnvironment` and `MstrDossier` objects. Then you can use `MstrDossier.registerEventHandler` to register handlers for events. You can also use `MstrDossier.registerErrorHandler` to register handlers for errors that occur during graphic manipulations of embedded visualizations.

```js
try {
  const mstrEnvironment = await microstrategy.embeddingComponent.environments.create({
    serverUrl: "https://demo.microstrategy.com/MicroStrategyLibrary",
    getAuthToken: () => {
      // Logic similar to the existing Native Embedding SDK.
    },
  });
  const mstrDossier = await mstrEnvironment.loadDossier({
    projectId: "B19DEDCC11D4E0EFC000EB9495D0F44F",
    objectId: "D9AB379D11EC92C1D9DC0080EFD415BB",
  });
  // register event handler and error handler
  mstrDossier.registerEventHandler(eventName, (event) => {
    // Your own event handling code
  });
  mstrDossier.registerErrorHandler((error) => {
    // Your own error handling code
  });
  // Your custom logic
} catch (error) {
  // Your own error handling code
}
```

## Event handlers

There is a method for registering an event handler.

### `registerEventHandler(eventName, handler)`

#### Class

`MstrDossier`

#### Description

Register the `handler` event handler on `eventName`.

## Error handlers

There is a method for registering an error handler.

### `registerErrorHandler(handler)`

#### Class

`MstrDossier`

#### Description

Register the `handler` error handler to handle errors during graphic manipulations of embedded visualizations.

## Events

Each supported event is described in the table below.

### `onVizElementSelectionChanged`

#### Event name

`onVizElementSelectionChanged`

#### Description

Raised when elements in visualizations are selected or unselected in graphics.

#### Content

Attribute element list or metric element list for the currently selected elements in the visualization.

#### Code example

```js
mstrDossier.registerEventHandler(
  "onVizElementSelectionChanged",
  onVizElementSelectionChangedHandler
);
```

#### Content example

The event data passed to the registered event handler is as follows:

- attribute element selection
  <details>
    <summary>Example for attribute element selection</summary>

  ```json
  {
    "visualizationKey": "K52",
    "currentSelection": {
      "selectionStatus": "included",
      "type": "attribute_element_list",
      "selections": [
        {
          "attribute": {
            "id": "8D679D4511D3E4981000E787EC6DE8A4",
            "name": "Month of Year"
          },
          "elements": [
            {
              "id": "h6;8D679D4511D3E4981000E787EC6DE8A4",
              "name": "June"
            },
            {
              "id": "h4;8D679D4511D3E4981000E787EC6DE8A4",
              "name": "April"
            }
          ]
        },
        {
          "attribute": {
            "id": "8D679D5111D3E4981000E787EC6DE8A4",
            "name": "Year"
          },
          "elements": [
            {
              "id": "h2014;8D679D5111D3E4981000E787EC6DE8A4",
              "name": "2014"
            }
          ]
        }
      ]
    }
  }
  ```

  </details>

- metric element selection
  <details>
    <summary>Example for metric element selection</summary>

  ```json
  {
    "key": "K52",
    "currentSelection": {
      "selectionStatus": "included",
      "type": "metric_element_list",
      "attributes": [
        {
          "id": "8D679D4511D3E4981000E787EC6DE8A4",
          "name": "Month of Year"
        },
        {
          "id": "8D679D5111D3E4981000E787EC6DE8A4",
          "name": "Year"
        }
      ],
      "selections": [
        [
          {
            "id": "h6;8D679D4511D3E4981000E787EC6DE8A4",
            "name": "June"
          },
          {
            "id": "h2014;8D679D5111D3E4981000E787EC6DE8A4",
            "name": "2014"
          }
        ],
        [
          {
            "id": "h9;8D679D4511D3E4981000E787EC6DE8A4",
            "name": "September"
          },
          {
            "id": "h2014;8D679D5111D3E4981000E787EC6DE8A4",
            "name": "2014"
          }
        ]
      ]
    }
  }
  ```

  </details>

- map layer element selection

  For map visualizations, each layer has its corresponding attribute element selection object or metric element selection object.

  <details>
    <summary>Example for map layer element selection</summary>

  ```json
  {
    "visualizationKey": "K52",
    "currentSelection": {
      "type": "map_layers_element",
      "layers": [
        {
          "key": "K52",
          "name": "Layer 1",
          "currentSelection": {
            "selectionStatus": "included",
            "type": "metric_element_list",
            "attributes": [
              {
                "id": "CE7009ED794959855954969DBC62CEF2",
                "name": "latitude ID"
              },
              {
                "id": "A3AD18663D4E7A5AC945BCA1D9C66451",
                "name": "longitude ID"
              }
            ],
            "selections": [
              [
                {
                  "id": "h55.3675;CE7009ED794959855954969DBC62CEF2",
                  "name": "55.3675"
                },
                {
                  "id": "h-154.0944;A3AD18663D4E7A5AC945BCA1D9C66451",
                  "name": "-154.0944"
                }
              ]
            ]
          }
        },
        {
          "key": "W67",
          "name": "Layer 2",
          "currentSelection": {
            "selectionStatus": "unfiltered"
          }
        },
        {
          "key": "W76",
          "name": "Layer 3",
          "currentSelection": {
            "selectionStatus": "unfiltered"
          }
        }
      ]
    }
  }
  ```

  </details>
