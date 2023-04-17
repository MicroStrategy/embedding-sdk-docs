---
title: Visualization manipulation on graphics
description: You can do manipulation on the embedded visualizations after they have been refreshed.
---

After using [new Embedding SDK API](./embed-multiple-viz.md) to embed multiple visualizations in a client's webpage, you can manipulate these embedded visualizations on the graphics the same way as you are working on MicroStrategy Library.

Currently, the supported manipulation types include visualization element selection, actions triggered by a click, dragging inside a visualization, and the actions inside the right-click menu.

Let's say we already have the MstrEnvironment and MstrDossier objects, and embedded visualizations have been rendered.

```js
try {
  const mstrEnvironment = await microstrategy.embeddingComponent.environments.create({
    serverUrl: "https://demo.microstrategy.com/MicroStrategyLibrary",
    getAuthToken: () => {
      // Logic similar to the existing Embedding SDK, but only standard auth login is allowed
    },
  });
  const mstrDossier = await mstrEnvironment.loadDossier({
    projectId: "B19DEDCC11D4E0EFC000EB9495D0F44F",
    objectId: "D9AB379D11EC92C1D9DC0080EFD415BB",
  });
  await mstrDossier.refresh([
    {
      key: "K66",
      container: document.getElementById("container1"),
    },
  ]);
  // The custom logic of yours
} catch (error) {
  // Your own error handling code
}
```

## Element selection in the visualization

After the embedded visualizations have been rendered, you can click the elements in the visualization. Normally, this manipulation highlights the selected attribute or metric elements.

When the visualization is a filtered source, targeting other visualizations that are also embedded on the client's page, the selection manipulation triggers the filtering and all target visualizations are updated to reflect the latest data. If the target visualizations are not on the same page as the visualization used as a filter, this auto-refreshing is not be triggered.

## Right click menu in the visualization

After the embedded visualizations have been rendered, you can right-click on the visualization. Normally, this manipulation triggers a pop-up menu and you can click a menu option to apply an action.

The `Show Data` and `Go To Page` right-click menu options are not supported in Library. These options are hidden.

## Click, drag, and scroll in the visualization

After the embedded visualizations have been rendered, you can click the icon to open a pop-up menu with multiple actions you can select.
You can also click a column line and drag it, click the legend and drag it, scroll down to load more data, and so on.

Currently, we support most of the manipulation with Library in this type of manipulation except of click the menu icon or the maximize icon on the top-right corner of visualization, these two icons will be hidden.

## How actions affect the loading bar

When interacting with the visualization, if any action sends an XHR request, the loading icon overloads all of the visualizations in the same environment.
