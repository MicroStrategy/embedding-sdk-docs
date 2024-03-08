---
title: Embed multiple bot visualizations on a page
description: Embed multiple bot visualizations on a page
---

<Available since="2024 Update 3"/>

## Purpose

You can use the Native Embedding SDK to embed multiple visualizations from a bot in a client's webpage, with high performance that is similar to loading one out-of-the-box Library dashboard page.

## Requirements

You must use the js bundle, `native-embedding-sdk.js`:

```html
<script
  type="text/javascript"
  src="https://demo.microstrategy.com/MicroStrategyLibrary/javascript/native-embedding-sdk.js"
></script>
```

## Example code

### Embed visualizations from one bot

To embed multiple visualizations from one dossier, after referring `native-embedding-sdk.js`, use the code shown below:
(please use `<meta charset="UTF-8" />` character encoding tag)

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title></title>
    <script
      type="text/javascript"
      src="https://demo.microstrategy.com/MicroStrategyLibrary/javascript/native-embedding-sdk.js"
    ></script>
  </head>
  <body>
    <div id="container1" style="height: 500px;"></div>
    <div id="container2" style="height: 500px;"></div>
    <script type="text/javascript">
      const nativeEmbedInDemoPage = async () => {
        try {
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
      };
      nativeEmbedInDemoPage();
    </script>
  </body>
</html>
```

### Destroy one visualization

You can destroy one of these visualizations by calling `MstrBotVisualization.destroy()` API. For example, if you want to destroy the first visualization in the above code:

```js
try {
  // Follow the code above to get the array botVizList
  await botVizList[0].destroy();
} catch (error) {
  // Add your own handling logic here
}
```

### Destroy visualizations from one bot

You can destroy all the visualizations from a bot by calling `MstrBot.destroy()` API:

```js
try {
  // Follow the code above to get the mstrBot object
  await mstrBot.destroy();
} catch (error) {
  // Add your own handling logic here
}
```

## References

This piece of code contains a function from the following namespace and classes:

- [`microstrategy.embeddingComponent.environments`](embedding-components.md) Namespace

  This namespace is responsible for creating and destroying `MstrEnvironment` objects.

- [`MstrEnvironment`](mstr-environment.md) Class

  This class is the object returned from the `microstrategy.embeddingComponent.environments.create()` function, which is responsible for creating and destroying `MstrDossier` objects.

- [`MstrBot`](mstr-bot.md) Class

  This class is returned from the `MstrEnvironment.loadBot()` function, which is responsible for showing bot visualizations in containers.
