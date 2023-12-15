---
title: Use guest authentication
description: The example in this topic illustrates how to seamlessly display an embedded dossier using Guest authentication when Guest is the only authentication mode that is enabled.
---

The Embedding SDK allows you to quickly integrate dossiers into a web application in a responsive manner. The code required for the dossier to be displayed without requesting credentials depends on the how authentication is configured for the environment where the embedded dossier is hosted. The example in this topic illustrates how to seamlessly display an embedded dossier using Guest authentication when Guest is the only authentication mode that is enabled.

To help you get started, we have provided [a live example](https://microstrategy.github.io/playground/?example=g2) in the [Embedding SDK Playground](https://microstrategy.github.io/playground/). By design, the code in this example only shows how to embed a dossier and nothing else, and it embeds an existing dossier from the MicroStrategy Library demo site, which has only Guest authentication enabled.

We have provided simple instructions and code snippets to help you configure the example to use a dossier from your MicroStrategy Library Server. If you customize the example, however, you must configure your Library Server to support only Guest authentication.

Please also check out the examples in [Embedding SDK Playground](https://microstrategy.github.io/playground/) from the "Start over" button and [https://microstrategy.github.io/embedding-sdk-samples](https://microstrategy.github.io/embedding-sdk-samples).

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <script
      type="text/javascript"
      src="https://demo.microstrategy.com/MicroStrategyLibrary/javascript/embeddinglib.js"
    ></script>
  </head>
  <body>
    <div id="embedding-dossier-container"></div>
    <script>
      let url =
        "https://demo.microstrategy.com/MicroStrategyLibrary/app/B7CA92F04B9FAE8D941C3E9B7E0CD754/27D332AC6D43352E0928B9A1FCAF4AB0"; // https://{env-url}/{libraryName}/app/{projectId}/{dossierId}
      let dossier; // Variable to store the dossier created. Used by Event Handler do not remove!
      let config; // Variable to store the configuration settings for dossier.
      async function runCode() {
        // For more details on configuration properties, see https://www2.microstrategy.com/producthelp/Current/EmbeddingSDK/Content/topics/dossier_properties.htm
        config = {
          url: url,
          placeholder: document.getElementById("embedding-dossier-container"),
        };

        // Embed the dossier with the configuration settings
        try {
          dossier = await window.microstrategy.dossier.create(config);
        } catch (error) {
          console.error(error);
        }
      }
      runCode();
    </script>
  </body>
</html>
```

Run the code in browser or in the Playground. You should see the dossier shown below.

![Embedded Dossier](../images/EmbeddedDossier.png)

:::tip

Because this simple embedding example uses a dossier on the demo server, you are not prompted for credentials. However, when you use a dossier in your environment, you will be prompted for credentials unless you enable single sign-on. In the other topics, you will learn how to enable single sign-on.

:::tip

**To customize the example to use your MicroStrategy Library Server**:

1. Decide where you want to have the HTML page. If the domain is different from your MicroStrategy Library Server's domain, you may need to [perform additional configuration to support Cross-Origin Resource Sharing (CORS)](../config.md).

1. In an IDE, text editor or [Embedding SDK Playground](https://microstrategy.github.io/playground/), open the HTML file and configure it to reflect the values in your environment:

   - Set the value of the `src` attribute in the first `<script>` node to the path to your MicroStrategy Library installation. Replace `demo.microstrategy.com` with your server path.

     ```html
     <script
       type="text/javascript"
       src="https://demo.microstrategy.com/MicroStrategyLibrary/javascript/embeddinglib.js"
     ></script>
     ```

     The `embeddinglib.js` file, which contains the Embedding SDK, is included in the MicroStrategyLibrary web application.

   - Set the value for url to reference a dossier in a project in your environment. First, replace `demo.microstrategy.com` with your server path and then replace `B7CA92F04B9FAE8D941C3E9B7E0CD754` and `27D332AC6D43352E0928B9A1FCAF4AB0` with your Project ID and Dossier ID.

     ```js
     url =
       "https://demo.microstrategy.com/MicroStrategyLibrary/app/B7CA92F04B9FAE8D941C3E9B7E0CD754/27D332AC6D43352E0928B9A1FCAF4AB0";
     ```

   :::tip

   You can obtain the value of your Project ID and Dossier ID by running a dossier in MicroStrategy Library and copying the URL.

   :::

1. Once you have customized the code for your environment, save your HTML file.

1. Configure your environment so that only guest authentication is enabled.

   If guest authentication is the only authentication mode that is enabled, the application will open and the dossier will be displayed without asking for credentials. However, if multiple authentication modes are enabled, the dossier will not be displayed seamlessly. You need to add additional code that enables guest authentication. [Using guest authentication when there are multiple authentication modes](./multiple-modes.md) provides a simple example and an explanation of how to add the necessary code.

1. Open the page URL in a browser or run it in [Embedding SDK Playground](https://microstrategy.github.io/playground/). The embedded dossier should be displayed in the application.

:::tip

If the dossier does not render on the page, you can use the browser developer tools to review any exceptions or errors being thrown. When you make an XHR request for `POST /auth/login`, you only need to wait until the response headers are returned. The expected status code will be 204 (Success no content). Review [the documentation on `XMLHTTPRequest.readyState`](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState) to understand what is necessary to obtain the request header.

:::
