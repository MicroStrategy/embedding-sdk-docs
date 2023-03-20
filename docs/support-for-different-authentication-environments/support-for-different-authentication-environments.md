---
title: Support for different authentication environments
description: When you embed a dossier in an application, you want it to display as easily and quickly as possible. This can mean seamlessly, without requiring that the user enter credentials at all, or simply scanning a QR code by integrating with Badge. The code you write to achieve this depends on how authentication is configured for the environment where the embedded dossier is hosted. Samples or sample code are provided for different authentication environments.
---

When you embed a dossier in an application, you want it to display as easily and quickly as possible. This can mean seamlessly, without requiring that the user enter credentials at all, or simply scanning a QR code. The code you write to achieve this depends on how authentication is configured for the environment where the embedded dossier is hosted. Examples or sample code are provided for different authentication environments.

- [Use guest authentication](./guest-authentication-mode-only.md)

  This introductory sample embeds an existing dossier on the MicroStrategy demo server. Because only Guest authentication is enabled on the demo server, no credentials are required and the embedded dossier is displayed seamlessly in the application.

  There are also instructions for customizing the sample to use a different server and dossier. In order for the embedded dossier to be displayed seamlessly in that environment, the server you use must be configured to have only Guest authentication.

- [Use guest authentication with multiple authentication modes enabled](./multiple-modes.md)

  This sample illustrates how to seamlessly display an embedded dossier in a simple application using Guest authentication, in an environment with multiple authentication modes enabled. The application includes code that specifically enables Guest authentication for the embedded dossier.

- [Use standard authentication](./standard-authentication.md)

- [Use SAML or OIDC authentication](./authentication-saml.md)

  This sample illustrates how to embed a dossier using SAML and OIDC authentication.

- [Seamless login using identity token](./seamless-login.md)

  This page shows you the workflow and implementation of a seamless login experience if your user has already authenticated.

:::tip

If you plan to use Embedding SDK on a web page on a different domain from your MicroStrategy environment, please also meet the following requirements. More information in

1. [Enable Cross-Origin Resource Sharing (CORS)](../config.md)
1. [Allow SameSite cookies](../config.md#allow-samesite-cookies)

If you plan to use Embedding SDK on the same domain as your MicroStrategy, the above changes are not required.

:::
