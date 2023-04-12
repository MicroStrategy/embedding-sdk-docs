---
title: Embed multiple visualizations on a page
description: Embed multiple visualizations on a page
---

## Purpose

You can use the new Embedding SDK API to embed multiple visualizations in a client's webpage, with high performance that is similar to loading an out-of-the-box Library dossier page.

Custom visualizations are also supported. To embed custom visualizations, you should deploy them on MicroStrategy Library first. To deploy custom visualizations on MicroStrategy Library, refer to [Deploy a Custom Visualization](https://www2.microstrategy.com/producthelp/Current/VisSDK/Content/topics/HTML5/Deploying_a_custom_visualization.htm).

## Requirements

You must use the js bundle, `embedding-component-alpha.js`:

```html
<script
  type="text/javascript"
  src="https://demo.microstrategy.com/MicroStrategyLibrary/javascript/embedding-component-alpha.js"
></script>
```

The js bundle is also in the web-dossier war, in the same directory as `embeddinglib.js`.

## Example Code

To embed multiple visualizations from 1 dossier, after referring `embedding-component-alpha.js`, use the code shown below:

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

If you want to embed visualizations from multiple dossiers, you need to turn on this functionality by setting the feature flag as below before calling the APIs:

```js
window.microstrategy.nativeEmbedding.featureFlags.multipleDossiers = true;
```

then you can embed the visualizations from multiple dossiers in parallel like this:

```js
async function loadVisualizationsFromDossier({
  mstrEnvironment,
  projectId,
  dossierId,
  vizAndContainers,
}) {
  const mstrDossier = await mstrEnvironment.loadDossier({
    projectId,
    objectId: dossierId,
  });
  // The function here would keep the old behavior, to load the visualizations page by page
  await mstrDossier.refresh(vizAndContainers);
}

async function loadVisualizationsFromDossiers() {
  try {
    // The preparation code starts here
    const mstrEnvironment = await microstrategy.embeddingComponent.environments.create({
      serverUrl: "https://demo.microstrategy.com/MicroStrategyLibrary",
      getAuthToken: () => {
        // The similar logic as the existing Embedding SDK, but only allows standard auth login
      },
    });
    const projectId = "B19DEDCC11D4E0EFC000EB9495D0F44F";
    const dossierAndVisualizations = [
      {
        dossierId: "DCB5909744F164E1D190B3B0137EEC5F",
        vizAndContainers: [
          {
            key: "W70",
            container: document.getElementById("containerA"),
          },
          {
            key: "W112",
            container: document.getElementById("containerB"),
          },
        ],
      },
      {
        dossierId: "EDBA3FAE4F6A21187BD2CD92AE954802",
        vizAndContainers: [
          {
            key: "W115",
            container: document.getElementById("containerC"),
          },
          {
            key: "W116",
            container: document.getElementById("containerD"),
          },
        ],
      },
    ];
    // Non-blocking concurrent loadings for visualizations from different dossiers
    await Promise.all(
      dossierAndVisualizations.map((dossierAndVisualization) =>
        loadVisualizationsFromDossier({
          mstrEnvironment,
          projectId,
          dossierId: dossierAndVisualization.dossierId,
          vizAndContainers: dossierAndVisualization.vizAndContainers,
        })
      )
    );
  } catch (err) {
    // Your custom error handling logic here
  }
}
```

## References

This piece of code contains a function from the following namespace and classes:

- [`microstrategy.embeddingComponent.environments`](embedding-components.md) Namespace

  This namespace is responsible for creating and destroying MstrEnvironment objects.

- [`MstrEnvironment`](mstr-environment.md) Class

  This class is responsible for creating and destroying MstrDossier objects.

- [`MstrDossier`](mstr-dossier.md) Class

  This class is responsible for showing visualizations in containers.
