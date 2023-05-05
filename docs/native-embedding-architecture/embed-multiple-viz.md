---
title: Embed multiple visualizations on a page
description: Embed multiple visualizations on a page
---

<Available since="2021 Update 9 (May 2023)"/>

## Purpose

You can use the Native Embedding SDK to embed multiple visualizations in a client's webpage, with high performance that is similar to loading one out-of-the-box Library dossier page.

Custom visualizations are also supported. To embed custom visualizations, you should deploy them on MicroStrategy Library first. To deploy custom visualizations on MicroStrategy Library, refer to [Deploy a custom visualization](https://www2.microstrategy.com/producthelp/Current/VisSDK/Content/topics/HTML5/Deploying_a_custom_visualization.htm).

## Requirements

You must use the js bundle, `native-embedding-sdk.js`:

```html
<script
  type="text/javascript"
  src="https://demo.microstrategy.com/MicroStrategyLibrary/javascript/native-embedding-sdk.js"
></script>
```

The js bundle is also in the web-dossier war, in the same directory as `embeddinglib.js`.

## Example code

### Embed visualizations from one dossier

To embed multiple visualizations from one dossier, after referring `native-embedding-sdk.js`, use the code shown below:

```js
try {
  const environment = await microstrategy.embeddingComponent.environments.create({
    serverUrl: "https://demo.microstrategy.com/MicroStrategyLibrary",
    // The following function is the default implementation. User can provide custom implementation.
    // Only support standard authentication now.
    getAuthToken() {
      return fetch("https://{host}:{port}/{Library}/api/auth/login", {
        method: "POST",
        credentials: "include", // including cookie
        mode: "cors", // setting as CORS mode for cross origin
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          loginMode: 1, // Standard mode
          username: "input your username",
          password: "input your password",
        }),
      })
        .then((response) => {
          if (response && response.ok) {
            return response.headers.get("X-MSTR-authToken");
          }
          throw Error("Failed to fetch auth token.");
        })
        .catch((error) => {
          console.log("Error:", error);
        });
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

`applicationType` must be unset or equal to `35`. Because the implementation of Native Embedding SDK is based on login as a Library user, which uses the param of `applicationType:35`.

### Display a loading bar during the entire visualization embedding process

During the existing visualization embedding process, the Native Embedding SDK knows which container to use when you call the `dossier.refresh` API, and the loading bar appears at that time.
If you want to see the loading bar during the entire embedding process, create an implementation like this:

```html
<body>
  <div id="container1"></div>
</body>
```

```css
#container1 {
  width: 200px;
  height: 300px;
}

#mstrLoadingBarParent {
  width: 100%;
  height: 100%;
  background-color: white;
  position: relative;
}

#mstrLoadingBar {
  width: 100%;
  height: 100%;
  background: transparent url(yourLoadingIconUrl) no-repeat center;
  background-color: white;
  position: absolute;
  left: 0px;
  top: 0px;
  display: block;
}
```

You need to set the height and length with the container element.
We haven't had a default height and length when we call `dossier.refresh` API to embed a viz. If the container element hasn't had the height and length, you can't see your embed visualization.

Find the `getAuthToken` function in [the Native Embedding SDK doc](./embed-multiple-viz.md#example-code)

```js
try {
  const showLoadingBar = (container) => {
    // the position of the loading bar parent element should be relative
    const loadingBarParentDiv = document.createElement("div");
    loadingBarParentDiv.id = "mstrLoadingBarParent";
    // create the div
    const loadingBarDiv = document.createElement("div");
    loadingBarDiv.id = "mstrLoadingBar";
    loadingBarParentDiv.appendChild(loadingBarDiv);
    container.appendChild(loadingBarParentDiv);
  };

  const hideLoadingBar = (container) => {
    container.querySelector("#mstrLoadingBar").remove();
  };

  const container1 = document.getElementById("container1");

  showLoadingBar(container1);

  const environment = await microstrategy.embeddingComponent.environments.create({
    serverUrl: "https://demo.microstrategy.com/MicroStrategyLibrary",
    getAuthToken: () => {
      // Logic similar to the existing Native Embedding SDK, but only standard auth login is allowed
    },
  });
  const dossier = await environment.loadDossier({
    projectId: "B19DEDCC11D4E0EFC000EB9495D0F44F",
    objectId: "D9AB379D11EC92C1D9DC0080EFD415BB",
  });

  hideLoadingBar(container1);

  await dossier.refresh([
    {
      key: "K66",
      container: container1,
    },
  ]);
  // Your own code after the visualizations are all loaded
} catch (error) {
  // Your own error handling code
}
```

### Embed visualizations from multiple dossiers

If you want to embed visualizations from multiple dossiers, you must turn on this functionality by setting the feature flag as shown below before calling the APIs:

```js
window.microstrategy.nativeEmbedding.featureFlags.multipleDossiers = true;
```

Then you can embed the visualizations from multiple dossiers in parallel like this:

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
        // Logic similar to the existing Embedding SDK, but only standard auth login is allowed
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

## More available operations

After you embed multiple visualizations on a page, you can do some deeper manipulation of them.

- [Visualization manipulation on graphics](vis-manipulation.md)

  This introductory shows what kinds of manipulation can we do and some behavior in the Native Embedding SDK.

- [Add event handling](event-handling.md)

  You can listen to these events and handle the events in the handler functions.

- [Retrieve and apply filters](apply-filter.md)

  You can manipulate the chapter-level filters, on-page selectors, and visualizations used as filters via the Native Embedding SDK available since 2021 Update 9.

- [Getting dossier info via APIs](dossier-info-api.md)

  You can use the Native Embedding SDK to get the definition or data from the dossier.

## References

This piece of code contains a function from the following namespace and classes:

- [`microstrategy.embeddingComponent.environments`](embedding-components.md) Namespace

  This namespace is responsible for creating and destroying `MstrEnvironment` objects.

- [`MstrEnvironment`](mstr-environment.md) Class

  This class is the object returned from the `microstrategy.embeddingComponent.environments.create()` function, which is responsible for creating and destroying `MstrDossier` objects.

- [`MstrDossier`](mstr-dossier.md) Class

  This class is returned from the `MstrEnvironment.loadDossier()` function, which is responsible for showing visualizations in containers.
