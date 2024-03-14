---
title: Use SAML or OIDC authentication
description: The example in this topic illustrates how to display an embedded dashboard using SAML authentication. The same code works for OIDC except the `loginMode` parameter.
---

The example in this topic illustrates how to display an embedded dashboard using SAML authentication. The same code works for OIDC except the `loginMode` parameter.

A live example can be seen on [GitHub](https://microstrategy.github.io/embedding-sdk-samples/feature_showcase/4_Use_SAML.html). Also check out [other examples](https://microstrategy.github.io/embedding-sdk-samples/).

## The workflow

Here is the workflow of the example.

1. Client Application checks if auth token is still valid. If yes, jumps to Step 4.

1. Client Application opens the MicroStrategy Library Web login page (`https://[Your MicroStrategy Environment]/MicroStrategyLibrary/auth/login-dialog.jsp`) in a new tab. The login page will be responsible for showing a login dialog.

1. After the user finishes logging in, the login page will send a JavaScript message to inform the Client Application.

1. The Client Application gets the message, fetches the auth token, and uses it to make REST API calls or uses it in MicroStrategy’s Embedding SDK.
