---
title: Add Event Handling
description: Events allow an embedded dossier to communicate with the container page. You can listen for these events and provide event handler functions to respond to them. You use helper methods in the Embedding SDK to add event handling. For example, you can add code to capture selection events from one dossier and apply them as a filter to a second dossier.
---

Events allow an embedded dossier to communicate with the container page. You can listen to these events and provide event handler functions to respond to them. You use helper methods in the Embedding SDK to add event handlers. For example, you can add code to capture selection events from one dossier and apply them as a filter to a second dossier.

:::tip

To help you get started, we have provided an [example in the Embedding SDK Playground](https://microstrategy.github.io/playground/?example=g5) that embeds a dossier and adds event handling, as well as a description of [events](#events), [event handlers](#event-handlers), and [wrapper functions](#wrapper-functions) you can use to handle additional events.

:::

## Events, Event Handlers, and Wrapper Functions

Once you have used the `dossier.create(props)` method to embed a dossier into a third-party web page, you can use the methods described below to communicate between the dossier and the container page. You can register [event handlers](#event-handlers) for the [events](#events) that are automatically raised when a visualization is selected or when a page or filter is changed. [Wrapper functions](#wrapper-functions) are provided to make it easy to register event handlers for specific events.

### Events

Each supported event is described in the table below. You get the EventType from mstr.dossier.EventType.

#### onGraphicsSelected

##### Event Enumeration

`EventType.ON_GRAPHICS+SELECTED`

##### Description

Raised when a graphic in the visualization is selected <br/> <br/>This event is raised only if the visualization supports "use as filter".

##### Data

Attribute element list for each selected graphic.

##### Code Example

```js
embedDossier.registerEventHandler(EventType.ON_GRAPHICS_SELECTED, graphicsSelectedHandler);
```

##### Content Example

```json
{
  "name": "onGraphicsSelected",
  "value": {
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
}
```

#### onPageSwitched

##### Event Enumeration

`EventType.ON_PAGE_SWITCHED`

##### Description

Raised when the page is switched.

##### Data

Current page path.

##### Code Example

```js
embedDossier.registerEventHandler(EventType.ON_PAGE_SWITCHED, pageSwitchedHandler);
```

##### Content Example

```json
{
  "key": "K52"
}
```

#### onFilterUpdated

##### Event Enumeration

`EventType.ON_FILTER_UPDATED`

##### Description

Raised when a filter is changed.

##### Data

Changed filter information.

##### Code Example

```js
embedDossier.registerEventHandler(EventType.ON_FILTER_UPDATED, filterUpdatedHandler);
```

##### Content Example

```js
getFilterList;
```

### Event Handlers

There are two methods for registering and removing an event handler.

#### registerEventHandler(evtName, handler)

##### Class

`Dossier`

##### Description

Register the event handler `handler` on `evtName`.

#### removeEventHandler(evtName, handler)

##### Class

`Dossier`

##### Description

Remove the event handler `handler` on `evtName`.

### Wrapper Functions

The following wrapper functions make it easy to register event handlers for specific events.

#### registerGraphicsSelectEventHandlerToViz(vizKey, handler)

##### Class

`Dossier`

##### Description

Wrapper function for `registerEventHandler` for `EventType.ON_GRAPHICS_SELECTED` on certain visualizations (whose node key is equal to `vizKey`).

#### registerFilterUpdateHandler(handler)

##### Class

`Dossier`

##### Description

Wrapper function for `registerEventHandler` for `EventType.ON_FILTER_UPDATED`.

Equal to `registerEventHandler(EventType.ON_FILTER_UPDATED, filterUpdatedHandler)`.

#### registerPageSwitchHandler(handler)

##### Class

`Dossier`

##### Description

Wrapper function for `registerEventHandler` for `EventType.ON_PAGE_SWITCHED`.

Equal to `registerEventHandler(EventType.ON_PAGE_SWITCHED, pageSwitchedHandler)`.

Because the Map visualization can have multiple map layers, the selected graphics can come from different map layers. As a result, the event raised for `EventType.ON_GRAPHICS_SELECTED` for the Map visualization is different from the event raised for other visualizations. See the following example.

```json
{
  "name": "graphicsSelected",
  "value": {
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
}
```
