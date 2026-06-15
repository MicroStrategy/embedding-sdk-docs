---
title: Incremental Rendering
description: Use the Native Embedding SDK addWidgets API to render additional visualizations into an already-loaded dossier instance without re-rendering existing ones.
---

<Available since="Strategy ONE June 2026"/>

The `addWidgets` API allows you to render additional visualizations into an already-loaded dossier instance incrementally. This avoids re-rendering existing visualizations and enables lazy-loading patterns where visualizations are added on demand — for example, as the user scrolls or navigates within your application.

## Example Case

### Initial rendering with refresh()

At the start, the user creates an environment, loads a dossier, and embeds one or more visualizations using the `refresh` API:

```js
const mstrEnvironment = await microstrategy.embeddingComponent.environments.create({
  serverUrl: configs.serverUrl,
  getAuthToken,
});
const mstrDossier = await mstrEnvironment.loadDossier({
  projectId: configs.projectId,
  objectId: configs.objectId,
});
await mstrDossier.refresh([
  {
    key: "K52",
    container: document.getElementById("container1"),
  },
]);
```

### Add a visualization or a panel stack

After the initial render, you can add another visualization or panel stack either from the same page or from a different page within the same chapter or another chapter. The existing visualization is not re-rendered:

```js
await mstrDossier.addWidgets([
  {
    key: "W66",
    container: document.getElementById("container2"),
  },
]);
```

### Add multiple visualizations at once

Multiple visualizations or panel stacks can be added in a single `addWidgets` call. They may come from different pages or chapters:

```js
await mstrDossier.addWidgets([
  {
    key: "W66",
    container: document.getElementById("container2"),
  },
  {
    key: "W75",
    container: document.getElementById("container3"),
  },
]);
```

## API

### MstrDossier.addWidgets(widgetAndContainers)

#### Function

`async MstrDossier.addWidgets(widgetAndContainers)`

#### Input Parameters

| Parameter name                  | Data Type   | Description                                                           | Default Value | Is Required |
| ------------------------------- | ----------- | --------------------------------------------------------------------- | ------------- | ----------- |
| widgetAndContainers             | Array       | An array of objects specifying visualizations or panle stacks to add. | N/A           | true        |
| widgetAndContainers[].key       | string      | The visualization or panel stack key to render.                       | N/A           | true        |
| widgetAndContainers[].container | HTMLElement | The DOM container element to render the viz into.                     | N/A           | true        |

#### Response

A Promise that resolves when all visualizations have been rendered.

#### Prerequisites

- The dossier must have been rendered with `refresh()` at least once before calling `addWidgets`.
- The container elements must already exist in the DOM and have a defined width and height.

#### API Errors

| Error case                                            | Error handling                   | Error message                              |
| ----------------------------------------------------- | -------------------------------- | ------------------------------------------ |
| `addWidgets` called before `refresh`                  | The error object could be caught | The validation error                       |
| Invalid viz key (not found in the dossier definition) | The error object could be caught | The validation error                       |
| The background REST API fails                         | Caught by custom error handler   | The error message provided by the REST API |

## Notes

- `addWidgets` does not re-render visualizations/panel stacks that were already rendered by `refresh()` or previous `addWidgets` calls.
- Visualizations/panel stacks from different pages and chapters can be added incrementally. The SDK fetches the necessary page data internally.
- Filters and manipulations applied after `addWidgets` will affect all rendered visualizations that are targeted by the filter/selector.
