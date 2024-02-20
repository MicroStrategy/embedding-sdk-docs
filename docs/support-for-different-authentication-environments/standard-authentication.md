---
title: Use standard authentication
description: The example in this topic illustrates how to seamlessly display an embedded dashboard using standard authentication
---

The example in this topic showcases how to display an embedded dashboard using Standard authentication

To help you get started, we have provided [a live example](https://microstrategy.github.io/playground/?example=g17) in the [Embedding SDK Playground](https://microstrategy.github.io/playground/). By design, the code in this example only shows how to embed a dashboard and authenticate using Standard authentication.

The workflow consists of:

- [Set up Library Server](#set-up-library-server)
- [Import Embedding SDK](#import-embedding-sdk)
- [Embed dashboard with custom authentication properties](#embed-dashboard-with-custom-authentication-properties)
- [Authentication through REST API using standard authentication](#authentication-through-rest-api-using-standard-authentication)
- [Putting it all together](#putting-it-all-together)

## Set up Library Server

Enable Standard and optionally other authentication modes in MicroStrategy Library Admin.

![MSTR Library Admin Guest Auth](../images/MstrLibraryAdmin_GuestAuth.png)

## Import Embedding SDK

Import Embedding SDK from your Library Server to your HTML page. In the code sample below, the SDK is imported into the head section of the HTML file. You can replace the url, `https://demo.microstrategy.com/MicroStrategyLibraryInsights/javascript/embeddinglib.js`, with your own typically in the form `https://{env-url}/{libraryName}/javascript/embeddinglib.js`.

```html
<head>
  <script
    type="text/javascript"
    src="https://demo.microstrategy.com/MicroStrategyLibraryInsights/javascript/embeddinglib.js"
  ></script>
</head>
```

## Embed dashboard with custom authentication properties

The sample code below shows how to embed a sample dashboard with properties set to enable custom authentication mode where you have to provide the auth token to log in. Note: the `login` function will be implemented in the [next section](#authentication-through-rest-api-using-standard-authentication).

```html
<body>
  <div id="embedding-dossier-container"></div>
  <script>
    let baseServerUrl = "https://demo.microstrategy.com";
    let libraryName = "MicroStrategyLibraryInsights";
    // https://{env-url}/{libraryName}/app/{projectId}/{dossierId}
    let url =
      baseServerUrl +
      "/" +
      libraryName +
      "/app/EC70648611E7A2F962E90080EFD58751/837B57D711E941BF000000806FA1298F";
    let dossier; // Variable to store the dashboard created. Used by Event Handler do not remove!
    let config; // Variable to store the configuration settings for dashboard.

    async function runCode() {
      // For more details on configuration properties, see https://microstrategy.github.io/embedding-sdk-docs/add-functionality/methods-and-properties
      config = {
        url: url,
        placeholder: document.getElementById("embedding-dossier-container"),
        containerHeight: "600px",
        containerWidth: "800px",
        customAuthenticationType: microstrategy.dossier.CustomAuthenticationType.AUTH_TOKEN,
        enableCustomAuthentication: true,
        enableResponsive: true,
        getLoginToken: login,
        navigationBar: {
          enabled: false,
        },
      };

      // This function is not implemented yet. But should return the auth token. Continue to next section to see how this should be implemented.
      async function login() {
        return null;
      }
      // INSERT PROPERTIES BELOW HERE

      // INSERT PROPERTIES ABOVE HERE

      // Embed the dashboard with the configuration settings
      try {
        dashboard = await window.microstrategy.dossier.create(config);
      } catch (error) {
        console.error(error);
      }

      // INSERT METHODS BELOW THIS

      // INSERT METHODS ABOVE THIS
    }
    runCode();
  </script>
</body>
```

## Authentication through REST API using Standard authentication

The `getAuthToken()` function will make a REST API call to see if there is an existing login session. The endpoint used is [GET /api/auth/token](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/getAuthToken).

The `createAuthToken()` function will authenticate the user using Standard authentication. The endpoint used is [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin). The main points are to change the `loginMode` to 1 for Standard authentication and to provide the `username` and `password` unlike Guest authentication.

The `login()` function should be used for [`getLoginToken`](../add-functionality/methods-and-properties#getlogintoken). This function return the existing auth token if it exists using `getAuthToken()` and create a new one to return if it doesn't exist using `createAuthToken()`.

```html
<script>
  // Check if the user has an existing login session through getting the authToken
  async function getAuthToken() {
    const options = {
      method: "GET",
      credentials: "include", // Including cookie
      mode: "cors", // Setting as cors mode for cross origin
      headers: { "content-type": "application/json" },
    };

    return await fetch(baseServerUrl + "/" + libraryName + "/api/auth/token", options)
      .then((response) => {
        if (response.ok) return response.headers.get("x-mstr-authtoken");
        else response.json().then((json) => console.log(json));
      })
      .catch((error) => console.error("Failed to retrieve authToken with error:", error));
  }

  // Create new authToken
  async function createAuthToken() {
    // Make a call to REST API to log the user in, if there is not a valid authToken
    const options = {
      method: "POST",
      credentials: "include", // Including cookie
      mode: "cors", // Setting as cors mode for cross origin
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        loginMode: 1, // 1 means Standard login
        username: prompt("Please enter your username"), // use guest / no password to test
        password: prompt("Please enter your password"),
      }),
    };
    return fetch(baseServerUrl + "/" + libraryName + "/api/auth/login", options)
      .then((response) => {
        if (response.ok) {
          console.log("A new standard login session has been created successfully, logging in");
          return response.headers.get("x-mstr-authtoken");
        } else response.json().then((json) => console.log(json));
      })
      .catch((error) => console.error("Failed Standard Login with error:", error));
  }

  // Reuse login session. If not found, create a new authToken.
  async function login() {
    let authToken = await getAuthToken().catch((error) => console.error(error));
    // If the authToken is available, return it
    if (!!authToken) {
      console.log("An existing login session has been found, logging in");
      return authToken;
    }
    return await createAuthToken();
  }
</script>
```

`applicationType` must be unset or equal to `35`. Because the implementation of Embedding SDK is based on login as a Library user, which uses the param of `applicationType:35`.

## Putting it all together

Here's how it would look if you follow the steps above.
Adjust as needed.

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <script
      type="text/javascript"
      src="https://demo.microstrategy.com/MicroStrategyLibraryInsights/javascript/embeddinglib.js"
    ></script>
  </head>

  <body>
    <div id="embedding-dossier-container"></div>
    <script>
      let baseServerUrl = "https://demo.microstrategy.com";
      let libraryName = "MicroStrategyLibraryInsights";
      // https://{env-url}/{libraryName}/app/{projectId}/{dossierId}
      let url =
        baseServerUrl +
        "/" +
        libraryName +
        "/app/EC70648611E7A2F962E90080EFD58751/837B57D711E941BF000000806FA1298F";
      let dossier; // Variable to store the dashboard created. Used by Event Handler do not remove!
      let config; // Variable to store the configuration settings for dashboard.
      async function runCode() {
        // For more details on configuration properties, see https://microstrategy.github.io/embedding-sdk-docs/add-functionality/methods-and-properties
        config = {
          url: url,
          placeholder: document.getElementById("embedding-dossier-container"),
          containerHeight: "600px",
          containerWidth: "800px",
          customAuthenticationType: microstrategy.dossier.CustomAuthenticationType.AUTH_TOKEN,
          enableCustomAuthentication: true,
          enableResponsive: true,
          getLoginToken: login,
          navigationBar: {
            enabled: false,
          },
        };

        // Check if the user has an existing login session through getting the authToken
        async function getAuthToken() {
          const options = {
            method: "GET",
            credentials: "include", // Including cookie
            mode: "cors", // Setting as cors mode for cross origin
            headers: { "content-type": "application/json" },
          };

          return await fetch(baseServerUrl + "/" + libraryName + "/api/auth/token", options)
            .then((response) => {
              if (response.ok) return response.headers.get("x-mstr-authtoken");
              else response.json().then((json) => console.log(json));
            })
            .catch((error) => console.error("Failed to retrieve authToken with error:", error));
        }

        // Create new authToken
        async function createAuthToken() {
          // Make a call to REST API to log the user in, if there is not a valid authToken
          const options = {
            method: "POST",
            credentials: "include", // Including cookie
            mode: "cors", // Setting as cors mode for cross origin
            headers: { "content-type": "application/json" },
            body: JSON.stringify({
              loginMode: 1, // 1 means Standard login
              username: prompt("Please enter your username"), // use guest / no password to test
              password: prompt("Please enter your password"),
            }),
          };
          return fetch(baseServerUrl + "/" + libraryName + "/api/auth/login", options)
            .then((response) => {
              if (response.ok) {
                console.log(
                  "A new standard login session has been created successfully, logging in"
                );
                return response.headers.get("x-mstr-authtoken");
              } else response.json().then((json) => console.log(json));
            })
            .catch((error) => console.error("Failed Standard Login with error:", error));
        }

        // Reuse login session. If not found, create a new authToken.
        async function login() {
          let authToken = await getAuthToken().catch((error) => console.error(error));
          // If the authToken is available, return it
          if (!!authToken) {
            console.log("An existing login session has been found, logging in");
            return authToken;
          }
          return await createAuthToken();
        }

        // INSERT PROPERTIES BELOW HERE

        // INSERT PROPERTIES ABOVE HERE

        // Embed the dashboard with the configuration settings
        try {
          dashboard = await window.microstrategy.dossier.create(config);
        } catch (error) {
          console.error(error);
        }

        // INSERT METHODS BELOW THIS

        // INSERT METHODS ABOVE THIS
      }
      runCode();
    </script>
  </body>
</html>
```
