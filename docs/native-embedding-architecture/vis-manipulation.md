---
title: Visualization manipulation on graphics
description: You can do manipulation on the embedded visualizations after they have been refreshed.
---

After using [new Embedding SDK API](./embed-multiple-viz.md) to embed multiple visualizations in a client's webpage, you can manipulate these embedded visualizations on the graphics the same way as you are working on MicroStrategy Library.

Currently, the supported manipulation types include visualization element selection, the action triggered by click, drag in the viz and the action inside right-click menu.

Suppose we already have the MstrEnvironment object and MstrDossier object and embedded visualizations have been rendered.

```js
try {
  const mstrEnvironment = await microstrategy.embeddingComponent.environments.create({
    serverUrl: "https://demo.microstrategy.com/MicroStrategyLibrary",
    getAuthToken: () => {
      // The similar logic as the existing Embedding SDK, but only allows standard auth login
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

After the embedded visualizations have been rendered, you can click the elements on the visualization. Normally, this manipulation will highlight the selected attribute elements or metric elements.

When the visualization is a filtered source targetting other visualizations that are also embedded on the client's page, the selection manipulation will trigger the filtering and all target visualizations will be updated to reflect the latest data. Note that if the target visualizations are not on the same page as the visualization as the filter, this auto-refreshing will not be triggered.

## Right click menu in the visualization

After the embedded visualizations have been rendered, you can right-click on the visualization. Normally, this manipulation will pop-up a menu, we can click the item in this menu to apply our action.

Currently, we support most of the manipulation with Library in the right-click menu except of `Show Data` and `Go To Page`, these two items will be hide.

## Click, drag, and scroll in the visualization

After the embedded visualizations have been rendered, you can single-click on the icon to raise a menu and then click the item in it on the visualization. Normally, this manipulation will pop up a menu, we can click the item in this menu to apply our action.
We can also click the column line and drag it, click the Legend and drag, scroll down to load more data, and so on on the visualization.

Currently, we support most of the manipulation with Library in this type of manipulation except of click the menu icon or the maximize icon on the top-right corner of visualization, these two icons will be hidden.

## The loading bar after doing the action

After we do an interactive with the visualization, if the action sends an XHR request, the loading icon will overload all of the visualizations in the same environment.
