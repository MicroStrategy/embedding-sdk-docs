---
title: Hide irrelevant allowed origins in the CSP response header
description: Enable the features.hideIrrelevantAllowOrigins feature flag on the Library server so that the Content-Security-Policy response header only exposes the allowed origins relevant to the current requester, and use wildcard allowed origins to cover subdomains.
---

<Available since="Strategy ONE November 2026"/>

When the Library server has multiple allowed origins configured, the `Content-Security-Policy: frame-ancestors` response header of an embedded page lists all of them on every request. If one Library server serves several web applications or tenants, each application can discover the other applications' domains from the response header, which raises a privacy concern. The Library server can hide these irrelevant allowed origins so that each requester only sees the allowed origins relevant to itself.

## Why the allowed origins are exposed

To embed Strategy content into web applications hosted on different domains, you add those domains to the server's allowed origins. See [Enable Cross-Origin Resource Sharing (CORS)](./enable-cors.md).

For a request to an embedded page, the server returns a response header similar to the following:

```text
content-security-policy:
frame-ancestors 'self' local://plugins https://app1.example.com https://app2.example.com
```

Both `https://app1.example.com` and `https://app2.example.com` are listed even if the request comes from a page hosted on `https://app1.example.com` only. This discloses the domain of the second application to the first application's users.

## How the filtering works

The behavior is controlled by the server-side feature flag `features.hideIrrelevantAllowOrigins`, which is disabled (`false`) by default. When it is enabled:

- The server keeps `'self'`, `local://plugins`, and the configured allowed origins that cover the current requester's embedding origin. A configured origin covers the requester when it matches the embedding origin exactly, or when it is a wildcard origin such as `https://*.example.com` and the embedding origin is a subdomain of it. All other configured allowed origins are removed from the response header.
- The requester's embedding origin is determined from the request's `Referer` header. The Embedding SDK also appends the embedding page's origin to the embedded iframe URL automatically, so the filtering still works when the iframe is redirected through the Library login page in non-custom authentication environments. No change to your embedding code is required.
- If the `Referer` header is absent, no filtering is applied and all configured allowed origins are listed, preserving the original behavior.
- For background API calls made with `XMLHttpRequest`, the server does not return the `frame-ancestors` directive at all, regardless of the flag. The directive has no meaning for a response consumed by script, and suppressing it avoids leaking the allowed origins list on API responses.

With the flag enabled, a request from a page hosted on `https://app1.example.com` receives:

```text
content-security-policy:
frame-ancestors 'self' local://plugins https://app1.example.com
```

## Enable the origin filtering on the Library server

1. Navigate to `MicroStrategyLibrary/WEB-INF/classes/config/configOverride.properties` on the Library server.
1. Add the following line, or replace it if already present:

   `features.hideIrrelevantAllowOrigins=true`

1. Restart your Library web application hosted on the application server.

The flag applies to the whole server and to all types of embedded pages, including the Library home page, dashboard consumption pages, document consumption pages, report pages, and agent consumption pages. The Embedding SDK needs no new property or code change.

## Use wildcard allowed origins

Filtering by exact origin match requires one allowed origin entry per domain. When your applications are spread across subdomains, or the embedded page is nested inside intermediate iframes, you can configure a wildcard allowed origin instead, such as `https://*.example.com`.

1. Configure the allowed origins in the same way as regular allowed origins. For example, add the following line to `MicroStrategyLibrary/WEB-INF/classes/config/configOverride.properties`:

   `security.allowedOrigins=https://*.example.com`

1. Restart your Library web application hosted on the application server.

The wildcard allowed origin follows these rules:

- The protocol is required and the wildcard is only allowed as the leftmost label of the host, for example, `https://*.example.com`.
- It covers any subdomain at any depth, for example, `a.example.com` and `tenant.a.example.com`, but it does not cover the bare domain `example.com` itself. If the bare domain is also an embedding host, add it as a separate allowed origin entry.
- The protocol must match exactly. For example, `https://*.example.com` does not cover a page hosted on `http://a.example.com`. When a port is specified, the port must also match.

For example, with `security.allowedOrigins=https://*.zebra.com` configured and the flag enabled, a nested embedding structure like the following still works:

```text
-- root page with domain 'a.zebra.com'
    -- intermediate iframe with domain 'b.zebra.com'
        -- embedded Library page with domain 'lib.example.cloud.strategy.com'
```

The response's `frame-ancestors` value only contains `https://*.zebra.com`, which covers every ancestor page in the chain.

:::warning Confirm your embedding structure before enabling the flag

The filtering can break nested embedding when the pages in the iframe chain are hosted on different root domains. For example, a root page on `a.example.com` embeds an intermediate iframe on `b.other.com`, which embeds the Library page. The intermediate iframe's domain is the direct parent of the Library page, so the filtering keeps only the entry covering `b.other.com` and removes `a.example.com`. Since `frame-ancestors` requires every ancestor page in the chain to be allowed, the embedding stops working.

Only enable `features.hideIrrelevantAllowOrigins` after you confirm that, in all of your embedding chains, the root page and any intermediate iframe are covered by the same wildcard allowed origin, or by the requester's exact allowed origin.

:::

When the flag is enabled, wildcard allowed origins are also honored when the server validates the host portal used in shared links, so a host portal on a subdomain of a wildcard entry can still be used.

## Verify the filtering

1. Open your embedding page in the browser and open the developer tools.
1. In the network tab, inspect the response of a request to the embedded page on the Library server.
1. Confirm that the `content-security-policy` header only contains `'self'`, `local://plugins`, and the allowed origin entries that cover the current embedding page, and that the embedded page still renders as expected.
