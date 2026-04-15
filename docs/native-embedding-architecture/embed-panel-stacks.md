---
title: Embed panel stacks
description: Embed panel stacks as single embedding components in Native Embedding SDK
---

<Available since="Strategy ONE April 2026"/>

With the Native Embedding SDK, you can now embed panel stacks as single embedding components, allowing you to display and control panel stacks independently in your application.

Note the following limitations:

- Nested panel stacks are not supported for Native Embedding.
- Selector panels and form panels are not supported for Native Embedding. You cannot use the Native Embedding SDK API to embed them.
- Embedding an info window and opening an info window from components inside an embedded panel stack are not supported.

## Overview

A panel stack is a container that holds multiple panels, where only one panel is visible at a time. Users can switch between panels to view different content. When embedding panel stacks in the Native Embedding SDK, you can:

- Embed panel stacks as independent components alongside visualizations
- Programmatically switch between panels within a panel stack
- Apply manipulations (filters and panel switches) in batch operations

## Embed a panel stack

To embed a panel stack, use the `MstrDossier.refresh()` function with the panel stack key. The process is similar to embedding visualizations.

### Prerequisites

Before embedding a panel stack, you need:

1. A `MstrDossier` object created from `MstrEnvironment.loadDossier()`
1. The panel stack key from the dashboard definition

### Get the panel stack key

Use `MstrDossier.getDossierDefinition()` to retrieve the dashboard definition and find the panel stack keys:

```js
try {
  const dossierDefinition = await mstrDossier.getDossierDefinition();
  // Navigate through chapters and pages to find panel stacks
  const { chapters } = dossierDefinition;
  // Panel stacks are listed under each page's widgets or visualizations
} catch (error) {
  // Your error handling code
}
```

### Example: Embed a panel stack

```js
try {
  const environment = await microstrategy.embeddingComponent.environments.create({
    serverUrl: "https://demo.microstrategy.com/MicroStrategyLibrary",
    getAuthToken: () => {
      // Your authentication logic
    },
  });

  const dossier = await environment.loadDossier({
    projectId: "B19DEDCC11D4E0EFC000EB9495D0F44F",
    objectId: "D9AB379D11EC92C1D9DC0080EFD415BB",
  });

  // Embed a panel stack
  const panelStackContainer = document.getElementById("panelStackContainer");
  await dossier.refresh([
    {
      key: "W61", // Panel stack key
      container: panelStackContainer,
    },
  ]);
} catch (error) {
  // Your error handling code
}
```

## Apply manipulations

The `applyManipulations()` API allows you to apply multiple manipulations (filters and panel switches) in a single batch operation. This is useful when you need to apply several changes at once for better performance.

### Function

`async applyManipulations(manipulations)`

| Parameter     | Data Type               | Description                               | Required |
| ------------- | ----------------------- | ----------------------------------------- | -------- |
| manipulations | `DossierManipulation[]` | An array of manipulation actions to apply | Yes      |

### Manipulation types

#### Set filter manipulation

Applies a filter selection to the dashboard.

```typescript
type DossierSetFilterManipulation = {
  action: "setFilter";
  filterKey: string;
  currentSelection: FilterSelection;
  isVizAsFilter?: boolean;
};
```

The `currentSelection` format is the same as in `MstrDossier.applyFilter()` API. You can see its details in the [apply filter page](./apply-filter.md).

#### Set current panel manipulation

Switches to a specific panel within a panel stack.

```typescript
type DossierSetCurrentPanelManipulation = {
  action: "setCurrentPanel";
  panelKey: string;
};
```

### Example: Apply multiple manipulations

```js
try {
  // Apply filter and switch panel in a single batch operation
  await mstrDossier.applyManipulations([
    {
      action: "setFilter",
      filterKey: "K46",
      currentSelection: {
        selectionStatus: "included",
        elements: [{ id: "h2014;8D679D5111D3E4981000E787EC6DE8A4", name: "2014" }],
      },
    },
    {
      action: "setCurrentPanel",
      panelKey: "W63",
    },
  ]);

  // Both manipulations are applied and affected widgets are refreshed
} catch (error) {
  // Your error handling code
}
```

### Example: Switch panel only

```js
try {
  await mstrDossier.applyManipulations([
    {
      action: "setCurrentPanel",
      panelKey: "W63", // The key of the panel to switch to
    },
  ]);

  // The panel is switched and the panel stack is refreshed
} catch (error) {
  // Your error handling code
}
```

## Get panel information

To get information about panels within a panel stack, use the `getDossierDefinition()` API. The definition includes panel stack and panel keys that you need for embedding and manipulation.

### Example: Get panel information

```js
try {
  const definition = await mstrDossier.getDossierDefinition();

  // The definition contains information about panel stacks and panels
  // You can navigate the structure to find:
  // - Panel stack keys
  // - Panel keys within each panel stack
  // - Current panel for each panel stack
} catch (error) {
  // Your error handling code
}
```

## Panel information structure

When you retrieve the dashboard definition, panel stacks and their panels are included in the structure. Each panel has a unique key that you use for embedding and switching.

```json
{
  "key": "W61",
  "name": "Panel Stack 1",
  "type": "panelStack",
  "currentPanel": "W63",
  "panels": [
    {
      "key": "W63",
      "name": "Panel 1"
    },
    {
      "key": "W65",
      "name": "Panel 2"
    }
  ]
}
```

## Error handling

The `applyManipulations` API can throw errors in the following cases:

| Error Case              | Error Category | Description                                              |
| ----------------------- | -------------- | -------------------------------------------------------- |
| Invalid action type     | Invalid input  | The action is not 'setFilter' or 'setCurrentPanel'       |
| Invalid filter key      | Invalid input  | The filter key does not exist in the dossier             |
| Invalid panel key       | Invalid input  | The panel key does not exist or is not a valid panel     |
| Panel in info window    | Invalid input  | Cannot set panel inside an info window                   |
| Non-generic panel stack | Invalid input  | Only generic panel stacks support programmatic switching |
| REST API error          | Other          | An error occurred while communicating with the server    |

### Example: Error handling

```js
try {
  await mstrDossier.applyManipulations([
    {
      action: "setCurrentPanel",
      panelKey: "INVALID_KEY",
    },
  ]);
} catch (error) {
  console.error("Failed to apply manipulations:", error.message);
  // Handle the error appropriately
}
```

## API reference

### applyManipulations

| Property    | Value                                                                          |
| ----------- | ------------------------------------------------------------------------------ |
| Class       | `MstrDossier`                                                                  |
| Parameter   | `DossierManipulation[]`                                                        |
| Return Type | `Promise<ValidatedManipulation[]>`                                             |
| Description | Apply multiple manipulations (filters and panel switches) in a batch operation |

### DossierManipulation type

```typescript
type DossierManipulation = DossierSetFilterManipulation | DossierSetCurrentPanelManipulation;
```

### Related APIs

- [applyFilter()](./apply-filter.md) - Apply a single filter
- [applyFilters()](./apply-filter.md) - Apply multiple filters
- [getDossierDefinition()](./dossier-info-api.md) - Get dashboard definition including panel stack info
