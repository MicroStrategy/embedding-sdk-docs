---
title: SAML and OIDC authentication APIs
description: Describes the Embedding SDK APIs that are available for SAML and OIDC authentication.
---

To simplify the SAML and OIDC login workflow, we expose 2 new APIs
`microstrategy.auth.samlLogin(serverUrl)` and `microstrategy.auth.oidcLogin(serverUrl)`. You can see
the examples in the [playground](https://microstrategy.github.io/playground/?example=g17).

The details of these 2 APIs are as below:

### `microstrategy.auth.samlLogin(serverUrl)`

#### Description

This API can be used to start the SAML login workflow on the embedding scenario.

#### Input Parameters

The input parameter `serverUrl` is the url of a Library server, which has configured the SAML login
mode successfully.

#### Return type

This API would return a Promise object that resolves to a string, which is the auth token.

#### Example

```js
microstrategy.embeddingContexts.embedLibraryPage({
  serverUrl: "{YOUR_LIBRARY_SERVER_URL}",
  placeholder: document.getElementById("LibraryHomePageContainer"),
  enableCustomAuthentication: true,
  customAuthenticationType: microstrategy.dossier.CustomAuthenticationType.AUTH_TOKEN,
  getLoginToken: () => microstrategy.auth.samlLogin("{YOUR_LIBRARY_SERVER_URL}"),
});
```

#### API errors

This API would have the wrong behavior or report an error in the cases below:

- When `serverUrl` is not a Library server that supports SAML login.
- When the client application can't get the Strategy login window because of
  [COOP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cross-Origin-Opener-Policy)
  setting is too strict.

### `microstrategy.auth.oidcLogin(serverUrl)`

#### Description

This API can be used to start the OIDC login workflow on the embedding scenario.

#### Input Parameters

The input parameter `serverUrl` is the url of a Library server, which has configured the OIDC login
mode successfully.

#### Return type

This API would return a Promise object that resolves to a string, which is the auth token.

#### Example

```js
microstrategy.embeddingContexts.embedLibraryPage({
  serverUrl: "{YOUR_LIBRARY_SERVER_URL}",
  placeholder: document.getElementById("LibraryHomePageContainer"),
  enableCustomAuthentication: true,
  customAuthenticationType: microstrategy.dossier.CustomAuthenticationType.AUTH_TOKEN,
  getLoginToken: () => microstrategy.auth.oidcLogin("{YOUR_LIBRARY_SERVER_URL}"),
});
```

#### API errors

This API would have the wrong behavior or report an error in the cases below:

- When `serverUrl` is not a Library server that supports OIDC login.
- When the client application can't get the Strategy login window because of
  [COOP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cross-Origin-Opener-Policy)
  setting is too strict.
