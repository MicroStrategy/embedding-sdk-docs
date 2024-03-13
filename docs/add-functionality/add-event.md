---
title: Add event handling
description: Events allow an embedded dashboard to communicate with the container page. You can listen for these events and provide event handler functions to respond to them. You use helper methods in the Embedding SDK to add event handling. For example, you can add code to capture selection events from one dashboard and apply them as a filter to a second dashboard.
---

Events allow an embedded dashboard to communicate with the container page. You can listen to these events and provide event handler functions to respond to them. You use helper methods in the Embedding SDK to add event handlers. For example, you can add code to capture selection events from one dashboard and apply them as a filter to a second dashboard.

:::tip

To help you get started, we have provided an [example in the Embedding SDK Playground](https://microstrategy.github.io/playground/?example=g5) that embeds a dashboard and adds event handling, as well as a description of [events](#events), [event handlers](#event-handlers), and [wrapper functions](#wrapper-functions) you can use to handle additional events.

:::

Once you have used the `dossier.create(props)` method to embed a dashboard into a third-party web page, you can use the methods described below to communicate between the dashboard and the container page. You can register [event handlers](#event-handlers) for the [events](#events) that are automatically raised when a visualization is selected or when a page or filter is changed. [Wrapper functions](#wrapper-functions) are provided to make it easy to register event handlers for specific events.

## Events

Each supported event is described in the table below. You get the EventType from `microstrategy.dossier.EventType`.

### onGraphicsSelected

#### Event enumeration

`EventType.ON_GRAPHICS_SELECTED`

#### Description

Raised when a graphic in the visualization is selected. This event is raised only if the visualization supports "use as filter".

#### Content

Attribute element list for each selected graphic.

#### Code example

```js
embedDossier.registerEventHandler(EventType.ON_GRAPHICS_SELECTED, graphicsSelectedHandler);
```

#### Content example

```json
{
  "vizKey": "K52",
  "graphics": [
    //an array containing all the selected graphics info, each item is one graphic
    [
      // an array containing the attribute combination for one graphic
      //n: attribute name, v: attribute value
      { "n": "Category", "v": "Electronics" },
      { "n": "Quarter", "v": "2009 Q4" }
    ],
    [
      { "n": "Category", "v": "Electronics" },
      { "n": "Quarter", "v": "2009 Q3" }
    ]
  ]
}
```

### onPageSwitched

#### Event enumeration

`EventType.ON_PAGE_SWITCHED`

#### Description

Raised when the page is switched.

#### Content

Object containing the key of the page you switched to.

#### Code example

```js
embedDossier.registerEventHandler(EventType.ON_PAGE_SWITCHED, pageSwitchedHandler);
```

#### Content example

```json
{
  "key": "K52"
}
```

### onFilterUpdated

#### Event enumeration

`EventType.ON_FILTER_UPDATED`

#### Description

Raised when a filter is changed.

#### Content

Object containing changed filter information.

#### Code example

```js
embedDossier.registerEventHandler(EventType.ON_FILTER_UPDATED, filterUpdatedHandler);
```

#### Content example

```json
{
  "filterInfo": [
    {
      "filterKey": "W132",
      "filterName": "Year",
      "isExclude": false,
      "filterType": "attributeSelector",
      "filterDetail": {
        "items": [
          {
            "name": "2014",
            "value": "h2014;8D679D5111D3E4981000E787EC6DE8A4",
            "selected": false
          },
          {
            "name": "2015",
            "value": "h2015;8D679D5111D3E4981000E787EC6DE8A4",
            "selected": true
          },
          {
            "name": "2016",
            "value": "h2016;8D679D5111D3E4981000E787EC6DE8A4",
            "selected": false
          }
        ],
        "supportMultiple": false
      }
    }
  ]
}
```

### onPageLoaded

#### Event enumeration

`EventType.ON_PAGE_LOADED`

#### Description

Raised when the page is loaded for the first time.

#### Content

None

#### Code example

```js
embedDossier.registerEventHandler(EventType.ON_PAGE_LOADED, onPageLoadedHandler);
```

### onLayoutChanged

#### Event enumeration

`EventType.ON_LAYOUT_CHANGED`

#### Description

Raised when the layout changes.

#### Content

Object containing layout changed information.

#### Code example

```js
embedDossier.registerEventHandler(EventType.ON_LAYOUT_CHANGED, layoutChangedHandler);
```

#### Content example

```json
{
  "layoutMode": 2,
  "dimension": {
    "height": 600,
    "width": 716,
    "offsetTop": 0
  }
}
```

### onPromptAnswered

#### Event enumeration

`EventType.ON_PROMPT_ANSWERED`

#### Description

Raised when a prompt is answered.

#### Content

Object containing prompt answers information.

#### Code example

```js
embedDossier.registerEventHandler(EventType.ON_PROMPT_ANSWERED, promptAnsweredHandler);
```

#### Content example

```json
{
  "messageName": "Sales Dashboard (w/ Attribute Element Prompt)",
  "answers": [
    {
      "key": "3ECF2592C947B909B01624BCF690D6EA@0@10",
      "values": ["8D679D4F11D3E4981000E787EC6DE8A4:14~1048576~Books - Miscellaneous"],
      "useDefault": false
    }
  ]
}
```

### onPromptLoaded

#### Event enumeration

`EventType.ON_PROMPT_LOADED`

#### Description

Raised when a prompt is loaded.

#### Content

None

#### Code example

```js
embedDossier.registerEventHandler(EventType.ON_PROMPT_LOADED, promptLoadedHandler);
```

### onVizSelectionChanged

#### Event enumeration

`EventType.ON_VIZ_SELECTION_CHANGED`

#### Description

Raised when a visualization selection is changed. Need visualization selection to be enabled.

#### Content

Object containing visualization selection information.

#### Code example

```js
embedDossier.registerEventHandler(EventType.ON_VIZ_SELECTION_CHANGED, vizSelectionChangedHandler);
```

#### Content example

```json
{
  "K36": {
    "K52": true,
    "visualizationLocation": {
      "K52": {
        "pageKey": "K53"
      }
    }
  }
}
```

### onVisualizationElementsChanged

#### Event enumeration

`EventType.ON_VIZ_ELEMENT_CHANGED`

#### Description

Raised when a visualization element is changed.

#### Content

Array of objects containing visualization element changed information.

#### Code example

```js
embedDossier.registerEventHandler(EventType.ON_VIZ_ELEMENT_CHANGED, vizElementChangedHandler);
```

#### Content example

```json
[
  {
    "visualizationKey": "K52",
    "attributeElements": [
      {
        "attribute": {
          "id": "70BACB0C3844364E12D005B61DC8C718",
          "name": "Product"
        },
        "elements": [
          {
            "id": "h20129;70BACB0C3844364E12D005B61DC8C718",
            "name": "Sebixtex"
          },
          {
            "id": "h20114;70BACB0C3844364E12D005B61DC8C718",
            "name": "Ecin"
          }
        ]
      }
    ]
  }
]
```

### onVisualizationResized

#### Event enumeration

`EventType.ON_VISUALIZATION_RESIZED`

#### Description

Raised when a visualization changes size.

#### Content

Object containing the visualization that changed size information.

#### Code example

```js
embedDossier.registerEventHandler(EventType.ON_VISUALIZATION_RESIZED, vizResizedChangedHandler);
```

#### Content example

```json
{
  "visualizationKey": "W367",
  "size": "normal"
}
```

### onLibraryItemSelected

#### Event enumeration

`EventType.ON_LIBRARY_ITEM_SELECTED`

#### Description

Raised when a library item selected. Need library item select mode to be enabled.

#### Content

Object containing library item selection information.

#### Code example

```js
embedDossier.registerEventHandler(EventType.ON_LIBRARY_ITEM_SELECTED, libraryItemSelectionHandler);
```

#### Content example

```json
[
  {
    "id": "A7B1C43C4ABA7E499D4E1789A2EBCD55",
    "docId": "BFB749B340572473A1288E9A2F6EDDA6",
    "projectId": "B19DEDCC11D4E0EFC000EB9495D0F44F",
    "name": "Distribution Center & Brands",
    "type": 55,
    "subtype": null
  }
]
```

### onLibraryMenuSelected

#### Event enumeration

`EventType.ON_LIBRARY_MENU_SELECTED`

#### Description

Raised when a library menu selected.

#### Content

Object containing library menu selection information.

#### Code example

```js
embedDossier.registerEventHandler(EventType.ON_LIBRARY_MENU_SELECTED, libraryMenuSelectionHandler);
```

#### Content example

```json
{
  "menuKey": "myContent",
  "groupId": null
}
```

### onLibraryItemSelectionCleared

#### Event enumeration

`EventType.ON_LIBRARY_ITEM_SELECTION_CLEARED`

#### Description

Raised when a library item selection cleared.

#### Content

None

#### Code example

```js
embedDossier.registerEventHandler(
  EventType.ON_LIBRARY_ITEM_SELECTION_CLEARED,
  libraryItemSelectioClearnHandler
);
```

### onDossierInstanceIDChange

#### Event enumeration

`EventType.ON_DOSSIER_INSTANCE_ID_CHANGE`

#### Description

Raised when the embedded dashboard instance id changes.

#### Content

String of the new instance id.

#### Code example

```js
embedDossier.registerEventHandler(EventType.ON_DOSSIER_INSTANCE_ID_CHANGE, dossierChangedHandler);
```

#### Content example

"003EB6548141F191CC73308269BB2635"

### onDossierAuthoringSaved

#### Event enumeration

`EventType.ON_DOSSIER_AUTHORING_SAVED`

#### Description

Raised when a dashboard is saved after authoring or editing.

#### Content

None

#### Code example

```js
embedDossier.registerEventHandler(
  EventType.ON_DOSSIER_AUTHORING_SAVED,
  dossierAuthoringSavedHandler
);
```

### onDossierAuthoringClosed

#### Event enumeration

`EventType.ON_DOSSIER_AUTHORING_CLOSED`

#### Description

Raised when the authoring or edit mode of dashboard is closed.

#### Content

None

#### Code example

```js
embedDossier.registerEventHandler(
  EventType.ON_DOSSIER_AUTHORING_CLOSED,
  dossierAuthoringClosedHandler
);
```

### onPageRenderFinished

#### Event enumeration

`EventType.ON_PAGE_RENDER_FINISHED`

#### Description

Raised when the dashboard consumption page finishes rendering.

#### Content

None

#### Code example

```js
embedDossier.registerEventHandler(EventType.ON_PAGE_RENDER_FINISHED, pageRenderFinishedHandler);
```

### onDossierInstanceChanged

#### Event enumeration

`EventType.ON_DOSSIER_INSTANCE_CHANGED`

#### Description

Raised when the a new dashboard instance is created on a dashboard consumption page.

#### Content

The event callback parameters contain the project id, dashboard id and the instance id.

#### Code example

```js
embedDossier.registerEventHandler(EventType.ON_DOSSIER_INSTANCE_CHANGED, (content) => {
  // Use the content here
});
```

#### Content example

```json
{
  "projectId": "B19DEDCC11D4E0EFC000EB9495D0F44F",
  "dossierId": "D9AB379D11EC92C1D9DC0080EFD415BB",
  "instanceId": "EC003BC7A046E75DE83373A254824F20"
}
```

### onComponentSelectionChanged

#### Event enumeration

`EventType.ON_COMPONENT_SELECTION_CHANGED`

#### Description

Raised when the dashboard consumption page finishes rendering.

#### Content

The information of the selected components.

#### Code example

```js
embedDossier.registerEventHandler(EventType.ON_COMPONENT_SELECTION_CHANGED, (content) => {
  // Use the content here
});
```

#### Content example

```json
{
  "projectId": "B19DEDCC11D4E0EFC000EB9495D0F44F",
  "dossierId": "EC5441154009D3C39D5BD6AD75865EF4",
  "selectedComponents": [
    {
      "key": "K52",
      "type": "visualization",
      "chapterKey": "K36",
      "pageKey": "K53",
      "dimensions": {
        "width": 300.45,
        "height": 400.45
      }
    },
    {
      "key": "53ACF03646491B5F5F5A7B83EB1BB0BE",
      "type": "group",
      "chapterKey": "K87",
      "pageKey": "K67",
      "dimensions": {
        "width": 700,
        "height": 1000
      }
    }
  ]
}
```

## Event handlers

There are two methods for registering and removing an event handler.

### registerEventHandler(evtName, handler)

#### Class

`Dossier`

#### Description

Register the event handler `handler` on `evtName`.

### removeEventHandler(evtName, handler)

#### Class

`Dossier`

#### Description

Remove the event handler `handler` on `evtName`.

## Wrapper functions

The following wrapper functions make it easy to register event handlers for specific events.

### registerGraphicsSelectEventHandlerToViz(vizKey, handler)

#### Class

`Dossier`

#### Description

Wrapper function for `registerEventHandler` for `EventType.ON_GRAPHICS_SELECTED` on certain visualizations (whose node key is equal to `vizKey`).

### registerFilterUpdateHandler(handler)

#### Class

`Dossier`

#### Description

Wrapper function for `registerEventHandler` for `EventType.ON_FILTER_UPDATED`.

Equal to `registerEventHandler(EventType.ON_FILTER_UPDATED, filterUpdatedHandler)`.

### registerPageSwitchHandler(handler)

#### Class

`Dossier`

#### Description

Wrapper function for `registerEventHandler` for `EventType.ON_PAGE_SWITCHED`.

Equal to `registerEventHandler(EventType.ON_PAGE_SWITCHED, pageSwitchedHandler)`.

Because the Map visualization can have multiple map layers, the selected graphics can come from different map layers. As a result, the event raised for `EventType.ON_GRAPHICS_SELECTED` for the Map visualization is different from the event raised for other visualizations. See the following example.

```json
{
  //primary key for the map visualization
  "vizKey": "W99",
  "graphics": [
    //each object represent the selected graphics info for one layer
    {
      //layer key
      "key": "W99",
      //layer name
      "name": "Layer 1",
      "graphics": [
        [
          { "n": "Category", "v": "Electronics" },
          { "n": "Quarter", "v": "2009 Q4" }
        ],
        [
          { "n": "Category", "v": "Electronics" },
          { "n": "Quarter", "v": "2009 Q3" }
        ]
      ]
    },
    {
      "key": "W100",
      "name": "Layer 2",
      "graphics": [
        [
          { "n": "Category", "v": "Books" },
          { "n": "Year", "v": "2009" }
        ],
        [
          { "n": "Category", "v": "Movies" },
          { "n": "Year", "v": "2008" }
        ]
      ]
    }
  ]
}
```

### registerDossierInstanceIDChangeHandler(handler)

#### Class

`Dossier`

#### Description

Wrapper function for `registerEventHandler` for `EventType.ON_DOSSIER_INSTANCE_ID_CHANGE`.

Equal to `registerEventHandler(EventType.ON_DOSSIER_INSTANCE_ID_CHANGE, dossierInstanceIdChangeHandler)`.
