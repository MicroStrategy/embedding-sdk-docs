---
title: Destroy visualizations on a page
description: Destroy visualizations on a page
---

<Available since="2021 Update 9 (May 2023)"/>

## Purpose

After using [Native Embedding SDK](embed-multiple-viz.md) to embed multiple visualizations in a client's webpage, you can also destroy them to clear your page, or embed the visualizations from another dossier.

## Example code

Let's say you already have `MstrEnvironment` and `MstrDossier` objects:

```js
try {
  const mstrEnvironment = await microstrategy.embeddingComponent.environments.create({
    serverUrl: "https://demo.microstrategy.com/MicroStrategyLibrary",
    getAuthToken: () => {
      // Logic similar to the existing Native Embedding SDK
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

To destroy the embedded visualizations, you can destroy the `MstrDossier` object that owns them:

```js
try {
  await mstrEnvironment.unloadDossier(mstrDossier);
} catch (error) {
  // Your own error handling code
}
```

or destroy the `MstrEnvironment` object that owns these visualizations:

```js
try {
  await microstrategy.embeddingComponent.environments(mstrEnvironment);
} catch (error) {
  // Your own error handling code
}
```

## References

This piece of code contains a function from the following namespace and classes:

- [`microstrategy.embeddingComponent.environments`](embedding-components.md) Namespace

  This namespace is responsible for creating and destroying `MstrEnvironment` objects.

- [`MstrEnvironment`](mstr-environment.md) Class

  This class is the object returned from the `microstrategy.embeddingComponent.environments.create()` function, which is responsible for creating and destroying `MstrDossier` objects.

- [`MstrDossier`](mstr-dossier.md) Class

  This class is returned from the `MstrEnvironment.loadDossier()` function, which is responsible for showing visualizations in containers.
