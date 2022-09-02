---
title: Support for Different Authentication Environments
description: When you embed a dossier in an application, you want it to display as easily and quickly as possible. This can mean seamlessly, without requiring that the user enter credentials at all, or simply scanning a QR code by integrating with Badge. The code you write to achieve this depends on how authentication is configured for the environment where the embedded dossier is hosted. Samples or sample code are provided for different authentication environments.
---

When you embed a dossier in an application, you want it to display as easily and quickly as possible. This can mean seamlessly, without requiring that the user enter credentials at all, or simply scanning a QR code by integrating with Badge. The code you write to achieve this depends on how authentication is configured for the environment where the embedded dossier is hosted. Samples or sample code are provided for different authentication environments.

The sample applications are provided as HTML files. These files must be hosted on a web server and cannot be run as standalone files. Without the web server, the host returns null which causes an error based on the security measures of the Embedding SDK. The server does not need to be publicly accessible; for example, it could be a local host deployment.

- [Use Guest Authentication](./guest-authentication-mode-only)

  This introductory sample embeds an existing dossier on the MicroStrategy demo server in a simple application. This sample can be used as is. Because only Guest authentication is enabled on the demo server, no credentials are required and the embedded dossier is displayed seamlessly in the application. The code in the application has only the three basic requirements.

  There are also instructions for customizing the sample to use a different server and dossier. In order for the embedded dossier to be displayed seamlessly in that environment, the server you use must be configured to have only Guest authentication. The next sample illustrates how to do that.

- [Use Guest Authentication with Multiple Authentication Modes Enabled](./multiple-modes)

  If multiple authentication modes are enabled for the environment and you want the embedded dossier to be displayed seamlessly when Guest authentication is used, you need to add code to specifically enable Guest authentication on the server.

  This sample illustrates how to seamlessly display an embedded dossier in a simple application using Guest authentication, in an environment with multiple authentication modes enabled. The application includes code that specifically enables Guest authentication for the embedded dossier.

- [Use SAML or OIDC Authentication](./authentication-saml)

  This sample illustrates how to display an embedded dossier by simply scanning a QR code. This is how embedding works when the application is integrated with Badge.

:::tip

If you plan to use Embedding SDK on a web page on a different domain from your MicroStrategy environment, please also meet the following requirements. More information in

1. [Enable Cross-Origin Resource Sharing (CORS)](../config)
1. [Allow Cross-Origin Cookies](../config#allow-cross-origin-cookies)

If we plan to use Embedding SDK on the same domain as your MicroStrategy, the above changes are not required.

:::
