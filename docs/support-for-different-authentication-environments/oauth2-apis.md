---
title: Library OAuth2 authentication APIs
description: Describes the Embedding SDK APIs that is available for Library OAuth2 authentication.
---

To simplify the [Library OAuth2](https://doc-dev.microstrategy.com/producthelp/2021/Workstation/en-us/Content/oauth2.htm) login workflow, we expose new APIs

`microstrategy.auth.oauthLogin(serverUrl, options)`

`microstrategy.auth.oauthRefreshToken(serverUrl, options)`

The details of those new APIs are as below:

### `microstrategy.auth.oauthLogin(serverUrl, options)`

#### Description

This API can be used to start the Library OAuth2 login workflow on the embedding scenario.

#### Input Parameters

- `serverUrl` (`string`):  
  The URL of a Library server that has been successfully configured with OAuth2.

- `options` (`OAuth2LoginOptions`):  
  An object containing the following fields:

  - `clientId` (`string`):  
    The client identifier issued by the authorization server during OAuth2 client registration.
  - `clientSecret` (`string`, optional):  
    The client secret corresponding to the clientId, used to authenticate the client with the authorization server.

    If provided together with `requireRefreshToken: true`, a refresh token will be issued as part of the login response.

  - `requireRefreshToken` (`boolean`, optional):  
    Specifies whether a refresh token should be requested during login.

    Only takes effect if `clientSecret` is provided.

    If true, both an access token and a refresh token will be returned.

    If false (or omitted), only an access token will be returned.

#### Return type

Returns a `Promise` that resolves to an object containing the following fields:

```ts
{
  accessToken: string;
  refreshToken?: string;
}
```

- accessToken: The OAuth2 access token for authenticating subsequent requests.
- refreshToken (optional): The refresh token that can be used to obtain a new access token when the
  current one expires.

#### Example

```js
microstrategy.embeddingContexts.embedLibraryPage({
  serverUrl: "{YOUR_LIBRARY_SERVER_URL}",
  placeholder: document.getElementById("LibraryHomePageContainer"),
  enableCustomAuthentication: true,
  customAuthenticationType: microstrategy.dossier.CustomAuthenticationType.AUTH_TOKEN,
  getLoginToken: async () => {
    const data = await microstrategy.auth.oauthLogin("{YOUR_LIBRARY_SERVER_URL}", {
      clientId: "{YOUR_OAUTH2_CLIENT_ID}",
      clientSecret: "{YOUR_OAUTH2_CLIENT_SECRET}",
      requireRefreshToken: true,
    });
    return data.accessToken;
  },
});
```

### `microstrategy.auth.oauthRefreshToken(serverUrl, options)`

#### Description

This API allows obtaining a new access token using a previously acquired refresh token.

#### Input Parameters

- `serverUrl` (`string`):  
  The URL of a Library server that has been successfully configured with OAuth2.

- `options` (`OAuth2RefreshTokenOptions`):  
  An object containing the following fields:

  - `clientId` (`string`):  
    The client identifier issued by the authorization server during OAuth2 client registration.

  - `clientSecret` (`string`):  
    The client secret corresponding to the clientId, used to authenticate the client with the authorization server.

  - `refreshToken` (`string`):  
    The refresh token that was previously obtained during login.

#### Return type

Returns a `Promise` that resolves to an object containing the following fields:

```ts
{
  accessToken: string;
  refreshToken: string;
}
```

- accessToken: The OAuth2 access token for authenticating subsequent requests.
- refreshToken: The refresh token that can be used to obtain a new access token when the
  current one expires.

#### Example

```js
const data = await microstrategy.auth.oauthRefreshToken("{YOUR_LIBRARY_SERVER_URL}", {
  clientId: "{YOUR_OAUTH2_CLIENT_ID}",
  clientSecret: "{YOUR_OAUTH2_CLIENT_SECRET}",
  refreshToken: "{YOUR_REFRESH_TOKEN}",
});
const { accessToken } = data;
const { refreshToken } = data;
```

#### API errors

This API would have the wrong behavior or report an error in the cases below:

- When `serverUrl` is not a Library server that supports OAuth2 login.
- If you receive a `HTTP Status 400 - Bad Request` response, ensure that the redirectUrl is [correctly configured](https://doc-dev.microstrategy.com/producthelp/2021/Workstation/en-us/Content/config_oauth2.htm). The expected format for the redirectUrl is: `YOUR_LIBRARY_SERVER_URL/static/embedding/auth-end.html?origin=YOUR_EMBEDDING_ORIGIN` and Make sure to replace:

  - `YOUR_LIBRARY_SERVER_URL` with the actual Library server URL.
  - `YOUR_EMBEDDING_ORIGIN` with the origin of the embedding application. For example, if your embedding page URL is `https://example.com:8443/path/demo.html`, then the origin is `https://example.com:8443`.

- When the client application can't get the Strategy login window because of
  [COOP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cross-Origin-Opener-Policy)
  setting is too strict.
