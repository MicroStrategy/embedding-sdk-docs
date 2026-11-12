---
title: Configure Library Server for embedding
description: The Library server supports additional configuration for embedding, including enabling Cross-Origin Resource Sharing (CORS), hiding irrelevant allowed origins in the Content-Security-Policy response header, and sending client telemetry for embedded sessions to Platform Analytics.
---

To embed Strategy content into your web application, the Library server can be configured to support cross-domain embedding, protect the domains configured in your security settings, and report usage of embedded content to Platform Analytics.

- [Enable Cross-Origin Resource Sharing (CORS)](./enable-cors.md)

  If you use the Embedding SDK on a different domain from your Strategy environment, enable CORS on the Library server and allow SameSite cookies, so that the embedded pages can communicate with the Library server across domains.

- [Hide irrelevant allowed origins in the CSP response header](./hide-irrelevant-allowed-origins.md)

  When multiple allowed origins are configured on the Library server, enable the `features.hideIrrelevantAllowOrigins` feature flag so that the `Content-Security-Policy` response header only exposes the allowed origins relevant to the current requester, and use wildcard allowed origins to cover subdomains.

- [Track embedded usage with client telemetry](./client-telemetry.md)

  Enable the `features.telemetry.embedEnabled` feature flag so that usage of your embedded dashboards and widgets is recorded in Platform Analytics, separate from standard Library usage.
