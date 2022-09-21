---
title: Seamless login using identity token
description: How to do seamless login with identity token
---

When you embed a MicroStrategy dossier in your application, you can provide a seamless login experience for users who are already authenticated on your server so that they don't have to authenticate again on the MicroStrategy Server.

For example, assume that a user is already authenticated with a third-party server and this 3rd-party server is managing the user credentials so that it can authenticate with other applications on the user's behalf. (The third-party server is responsible for securing the data and initiating authentication on HTTPS.) If a user has already logged into MicroStrategy Web, you can also get an identity token using MicroStrategy Task API.

MicroStrategy Embedding SDK supports [identity token](../add-functionality/methods-and-properties.md#customauthenticationtype) as a custom authentication type.

The authentication workflow is the following:

![Seamless login](../images/seamless_login.png)

1. The third-party application server logs in, invoking the REST API login endpoint (`POST /api/auth/login`) and providing the user's credential information.
1. Once the user is logged in, the identity token can be retrieved with the authorization token, using `POST /api/auth/identityToken`. The MicroStrategy Library Server returns an identity token to the caller in the response header. The identity token has a very short duration.
1. The client provides the identity token to the Embedding SDK, which is used for embedding a dossier.
1. The SDK will exchange the identity token for an authorization token and use the authorization token to communicate with the Library Server in the subsequent requests.

:::tip

A live example can be seen on [GitHub](https://microstrategy.github.io/embedding-sdk-samples/feature_showcase/3_Use_IdentityToken.html), which shows how to pass the identity token to Embedding SDK. Also check out [other examples](https://microstrategy.github.io/embedding-sdk-samples/).

:::
