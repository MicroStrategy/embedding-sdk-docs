---
title: Visualization manipulation on graphics
description: You can do manipulation on the embedded visualizations after they have been refreshed.
---

<Available since="2021 Update 9 (May 2023)"/>

The embedded visualizations can be manipulated the same way as they are seen on MicroStrategy Library dashboard pages.

Currently, the supported manipulation types include element selection inside a visualization, actions inside the right-click menu, and actions triggered by clicking, dragging, and scrolling inside a visualization

Let's say we already have the `MstrEnvironment` and `MstrDossier` objects, and embedded visualizations have been rendered.

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
  await mstrDossier.refresh([
    {
      key: "K66",
      container: document.getElementById("container1"),
    },
  ]);
  // Your custom logic
} catch (error) {
  // Your own error handling code
}
```

## Element selection in the visualization

Once the embedded visualizations are rendered, clicking on the elements in the visualization highlights the selected attribute or metric elements. Additionally, when the visualization is a filtered source that targets other embedded visualizations on the same page, selecting an element triggers filtering, and all target visualizations are updated to display the latest data. However, if the target visualizations are on a different page than the filtered source visualization, the auto-refresh feature is not triggered.

## Right click menu in the visualization

After the embedded visualizations have been rendered, you can right-click on the visualization. Normally, this manipulation triggers a pop-up menu and you can click a menu option to apply an action.

MicroStrategy supports most of the manipulations in the right-click menu within Library, except clicking the `Show Data` and `Go To Page` items in the right-click menu of visualization. These two icons are hidden.

## Click, drag, and scroll in the visualization

After the embedded visualizations have been rendered, you can click the icon to open a pop-up menu with multiple actions you can select.
You can also click a column line and drag it, click the legend and drag it, scroll down to load more data, and so on.

MicroStrategy supports most of the manipulations within Library, except clicking the menu or maximize icons in the top-right corner of visualization. These two icons are hidden.

## How actions affect the loading bar

When interacting with the visualization, if any action sends an XHR request, the loading icon overloads all of the visualizations in the same environment.
