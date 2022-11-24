---
title: Destroy Visualizations in a page
description: Destroy Visualizations in a page
---

## Purpose

After using [new Embedding SDK API](./embed-multiple-viz.md) to embed multiple visualizations in a client's webpage, you also can destroy them to clear your page, or embed the visualizations from another dossier.

## Example Code

Suppose we already have the MstrEnvironment object and MstrDossier object:

```js
try {
  const mstrEnvironment = await microstrategy.embeddingComponent.environments.create({
    serverUrl: "https://example.com/MicroStrategyLibrary",
    getAuthToken: () => {
      // The similar logic as existing Embedding SDK, but only allows standard auth login
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

To destroy the embedded visualizations, you can destroy the MstrDossier object that owns them:

```js
try {
  await mstrEnvironment.unloadDossier(mstrDossier);
} catch (error) {
  // Your own error handling code
}
```

or destroy the MstrEnvironment object that owns these visualizations:

```js
try {
  // eslint-disable-next-line
  await microstrategy.embeddingComponent.environments(mstrEnvironment);
} catch (error) {
  // Your own error handling code
}
```

## References

This piece of code contains the function from 3 different namespace or classes:

- [microstrategy.embeddingComponent.environments](./embedding-components.html) Namespace

  This namespace is responsible for creating and destroying MstrEnvironment objects.

- [MstrEnvironment](./mstr-environment.html) Class

  This class is responsible for creating and destroying MstrDossier objects.
