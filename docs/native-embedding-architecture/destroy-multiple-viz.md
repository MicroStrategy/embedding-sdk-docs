---
title: Destroy visualizations on a page
description: Destroy visualizations on a page
---

## Purpose

After using [Native Embedding SDK](./embed-multiple-viz.md) to embed multiple visualizations in a client's webpage, you also can destroy them to clear your page, or embed the visualizations from another dossier.

## Example code

Let's say you already have MstrEnvironment and MstrDossier objects:

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

This piece of code contains a function from three different namespaces or classes:

- [`microstrategy.embeddingComponent.environments`](embedding-components.md) Namespace

  This namespace is responsible for creating and destroying MstrEnvironment objects.

- [`MstrEnvironment`](mstr-environment.md) Class

  This class is responsible for creating and destroying MstrDossier objects.
