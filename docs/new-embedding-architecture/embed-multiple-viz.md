---
title: Embed Multiple Visualizations in a page
---

## Purpose

You can use the new Embedding SDK API to embed multiple visualizations in a webpage, with high performance that is similar to loading one MicroStrategy Dossier page.

## Requirements

You need to use a new js bundle `embedding-component-alpha.js`:

```html
<script type="text/javascript" src="https://demo.microstrategy.com/MicroStrategyLibrary/javascript/embedding-component-alpha.js"></script>
```

The js bundle is also in the MicroStrategyLibrary web application, in the same directory as `embeddinglib.js`.

## Example Code

To embed multiple visualizations, after refering `embedding-component-alpha.js`, you need to write the code as below:

```js
try {
  // eslint-disable-next-line
  const environment = await microstrategy.embeddingComponent.environments.create({
    serverUrl: "https://demo.microstrategy.com/MicroStrategyLibrary",
    getAuthToken: () => {
      // The similar logic as getLoginToken in existing Embedding SDK, but only support standard authentication now
    },
  });
  const dossier = await environment.loadDossier({
    projectId: "B19DEDCC11D4E0EFC000EB9495D0F44F",
    objectId: "D9AB379D11EC92C1D9DC0080EFD415BB",
  });

  await dossier.refresh([
    {
      key: "K66",
      container: document.getElementById("container1"),
    },
    {
      key: "K52",
      container: document.getElementById("container2"),
    },
  ]);
  // Your own code after the visualizations are all loaded
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

- [MstrDossier](./mstr-dossier.html) Class

  This class is responsible for showing visualizations in containers.
