---
title: Native Embedding SDK Feature Flags
description: Native Embedding SDK Feature Flags
---

The Native Embedding SDK has some client-side feature flags, which enables the customer open or close some functionalites flexibly. These feature flags can be set via js global variables.

## Feature Flags

### MULTIPLE_DOSSIERS

When this feature flag is set to `true`, the Native Embedding SDK allows the user to embed the visualizations from different dossiers.

This feature flag can be set by:

```js
window.microstrategy.nativeEmbedding.featureFlags.multipleDossiers = true;
```

A full example can be seen in [Embed multiple dossier visualizations on a page](http://localhost:3000/native-embedding-architecture/embed-multiple-viz#embed-visualizations-from-multiple-dossiers)

### ENABLE_PROFILE

When this feature flag is set to `true`, the Native Embedding SDK will generate a detailed performance profile in the global variable `window.mstrEmbedProfile`.

This feature flag can be set by:

```js
window.microstrategy.nativeEmbedding.featureFlags.enableProfile = true;
```

A full example is as below:

```js
try {
  window.microstrategy.nativeEmbedding.featureFlags.enableProfile = true;
  // configuration for the target dossier
  const configs = {
    projectId: "EC70648611E7A2F962E90080EFD58751",
    objectId: "27D332AC6D43352E0928B9A1FCAF4AB0",
  };
  const environment = await microstrategy.embeddingComponent.environments.create({
    serverUrl: `https://demo.microstrategy.com/MicroStrategyLibrary`,
    getAuthToken() {
      return fetch(`https://demo.microstrategy.com/MicroStrategyLibrary/api/auth/login`, {
        method: "POST",
        credentials: "include", // including cookie
        mode: "cors", // setting as CORS mode for cross origin
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          // here we login as guest user, you can log in as normal user with `username` and `password` as well
          // username: "input your username",
          // password: "input your password",
          loginMode: 8, // 8 means guest login, use `1` if you log in as normal user
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
  const mstrBot = await environment.loadBot({
    projectId: configs.projectId,
    objectId: configs.objectId,
  });
  // the data id can be obtained from the `mstrBot.getQuestions() API`
  const dataIdAndContainers = [
    {
      dataId: "A1F3431F2CA2481BB966EC8F35A9AC3A",
      container: document.getElementById("container1"),
    },
    {
      dataId: "B1F3431F2CA2481BB966EC8F35A9AC3A",
      container: document.getElementById("container2"),
    },
  ];
  const botVizList = await Promise.all(
    dataIdAndContainers.map((dataIdAndContainer) => {
      const { dataId, container } = dataIdAndContainer;
      return mstrBot.renderVisualization(dataId, container);
    })
  );
} catch (e) {
  console.error(e.message);
}
```
