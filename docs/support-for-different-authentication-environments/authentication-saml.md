---
sidebar_position: 3
title: Use SAML or OIDC Authentication
---

The JavaScript Embedding SDK allows you to quickly integrate dossiers into a web application in a responsive manner. The authentication required to display a dossier depends on your environment. The sample in this topic illustrates how to display an embedded dossier using SAML authentication. The same code works for OIDC except the `loginMode` parameter.

A live example can be seen on [GitHub](https://microstrategy.github.io/embedding-sdk-samples/feature_showcase/4_Use_SAML.html). Also check out [other examples](https://microstrategy.github.io/embedding-sdk-samples/).

This example requires MicroStrategy's REST API.

## The Workflow

1. Client Application checks if auth token is still valid. If yes, jumps to Step 4.

1. Client Application opens the MicroStrategy Library Web Login page in a new tab. The Login page will be responsible for showing a login dialog.

1. After the user finishes logging in, the login page will send a JavaScript message to inform the Client Application.

1. The Client Application gets the message, fetches the auth token, and uses it to make REST API calls or uses it in MicroStrategy’s Embedding SDK.

## Requirements

If you plan to use Embedding SDK on a Web page on a different domain from your MicroStrategy environment, please also meet the following requirements. More information in

1. [Enable Cross-Origin Resource Sharing (CORS)](../config)
1. [Allow Cross-Origin Cookies](../config#allow-cross-origin-cookies)

If we plan to use Embedding SDK on the same domain as your MicroStrategy, the above changes are not required.
