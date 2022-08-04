---
title: Deploy a Sample Application to Set Dossier Properties
---

When you embed a dossier, you can [set properties](./methods-and-properties) to customize the user interface, the features that are available or visible, and authentication.

To help you get started, we have provided a [sample application](#sample-application) that sets properties on an embedded dossier. Use the `create(props)` method under the `microstrategy.dossier` namespace to set properties. The props parameter contains optional key:value pairs to customize the UI, features, and authentication, in addition to the required key:value pairs that define the URL where the dossier is located and the ID of the `<div>` placeholder where the iFrame containing the dossier instance will be created.

:::note

This sample is provided as an HTML file, which must be hosted on a web server. It cannot be run as a standalone file.

:::

## Sample Application

The following sample shows how to leverage the Embedding SDK to add properties to an embedded dossier. You use the sample application that is provided for you and configure the code for your environment.

To deploy this sample in your environment, either:

1. Save the [code sample](#code-for-the-sample-application) below to an HTML file hosted on the same web application server as the MicroStrategy Library application. If the application server is different from the server running the `MicroStrategyLibrary` application, you may need to [perform additional configuration to support Cross-Origin Requests (CORS)](../config).

   OR

   [Download](https://www2.microstrategy.com/producthelp/2021/downloads/EmbeddingSDK/EmbeddingSample_SetProperties.zip)  the HTML file provided for you. This file contains the [sample code](#code-for-the-sample-application) shown below.

1. Configure the HTML file for your environment. Edit the value of the `src` attribute in the `<script>` tag shown below so that it points to the `embeddinglib.js` within the `javascript` folder of your MicroStrategyLibrary application.

   ```html
   <!-- Replace path to point to the embeddingLib in your environment -->
   <script src="https://<YOUR_SERVER>/MicroStrategyLibrary/javascript/embeddinglib.js"></script>
   <script>
   ```

1. Set the property variables located between the tags shown below.

```js
//BEGIN CONFIG PROPERTY VARIABLES -----------------------------------------
var BASE_URL = "https://<YOUR_SERVER>/MicroStrategyLibrary";
var userName = "<USER_NAME>";
var passWord = "<PASSWORD>";
var projectId = "<PROJECT_ID>";
var dossierId = "<DOSSIER_ID>";
var nav = { enabled: true };
var filterList = [
  {
    //You can change to the actual attributename.
    name: "Category",
    //You can change to the actual attribute element name.
    selections: [{ name: "Books" }],
  },
];
//END CONFIG PROPERTY VARIABLES -----------------------------------------
```

### Code for the Sample Application

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Simple Sample for Setting Properties</title>
    <!-- Replace path to point to the embeddingLib in your environment -->
    <script type="text/javascript" src="https://<YOUR_SERVER>/MicroStrategyLibrary/javascript/embeddinglib.js"></script>
  </head>
  <body onload="showDossier()">
    <div id="myDossier"></div>
    <script type="text/javascript">
      //BEGIN CONFIG PROPERTY VARIABLES ------------------------------------------------
      var BASE_URL = "https://<YOUR_SERVER>/MicroStrategyLibrary";
      var userName = "<USER_NAME>";
      var passWord = "<PASSWORD>";
      var projectId = "<PROJECT_ID>";
      var dossierId = "<DOSSIER_ID>";
      var nav = {
        enabled: true,
      };
      var filterList = [
        {
          name: "Category", //You can change to the actual attribute name.
          selections: [
            { name: "Books" }, //You can change to the actual attribute element name.
          ],
        },
      ];
      //END  CONFIG PROPERTY VARIABLES -------------------------------------------------
      function showDossier() {
        var placeHolderDiv = document.getElementById("myDossier");
        var dossierUrl = BASE_URL + "/app/" + projectId + "/" + dossierId;
        microstrategy.dossier.create({
          // set properties
          placeholder: placeHolderDiv,
          url: dossierUrl,
          enableCustomAuthentication: true,
          enableResponsive: true,
          customAuthenticationType: microstrategy.dossier.CustomAuthenticationType.AUTH_TOKEN,
          getLoginToken: login,
          navigationBar: nav, //enable navigation bar
          filters: filterList, //pass filter during dossier execution
        });
      }
      function login() {
        var options = {
          method: "POST",
          credentials: "include", //include cookie
          mode: "cors", //set as CORS mode for cross origin resource sharing
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            loginMode: 1, //standard authentication mode
            username: userName,
            password: passWord,
          }),
        };
        return fetch(BASE_URL + "/api/auth/login", options)
          .then(function (response) {
            if (response.ok) {
              return response.headers.get("x-mstr-authToken");
            } else {
              response.json().then(function (json) {
                console.log(json);
              });
            }
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    </script>
  </body>
</html>
```
