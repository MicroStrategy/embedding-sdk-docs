---
title: Visualization manipulation on graphics
description: You can do manipulation on the embedded visualizations after they have been refreshed.
---

After using [new Embedding SDK API](./embed-multiple-viz.md) to embed multiple visualizations in a client's webpage, you can manipulate these embedded visualizations on the graphics the same way as you are working on MicroStrategy Library. Currently, the supported manipulation types include visualization element selection.

Suppose we already have the MstrEnvironment object and MstrDossier object and embedded visualizations have been rendered.

```js
try {
  const mstrEnvironment = await microstrategy.embeddingComponent.environments.create({
    serverUrl: "https://example.com/MicroStrategyLibrary",
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

## Visualization Element Selection

After the embedded visualizations have been rendered, you can click the elements on the visualization. Normally, this manipulation will highlight the selected attribute elements or metric elements.

When the visualization is a filtered source targetting other visualizations that are also embedded on the client's page, the selection manipulation will trigger the filtering and all target visualizations will be updated to reflect the latest data. Note that if the target visualizations are not on the same page as the visualization as the filter, this auto-refreshing will not be triggered.
