---
title: Track embedded usage with client telemetry
description: Enable client telemetry on the Library server so that usage of your embedded dashboards and widgets is recorded in Platform Analytics, separate from standard Library usage.
---

<Available since="Strategy ONE November 2026"/>

Client telemetry records what end users do inside embedded pages — dashboards, documents, reports, and visualizations — and sends the records to Platform Analytics. This allows you to measure adoption and engagement of your embedded analytics separately from standard Library usage. Both embedding surfaces are supported: the iframe-based Embedding SDK (`microstrategy.embeddingContexts`) and the Native Embedding SDK (`microstrategy.embeddingComponent`).

Telemetry is disabled for embedded sessions until it is enabled on the Library server. No property or code change is required in your embedding application: the SDKs read the server configuration automatically.

## How it works

When an end user interacts with an embedded page, the Embedding SDK builds a telemetry record and hands it to the Platform Analytics telemetry pipeline. Each record identifies:

- The embedding surface, through the `embed_mode_id` dimension: `1` for the iframe-based Embedding SDK and `2` for the Native Embedding SDK. Standard Library sessions are not tagged as embedded, so embedded usage can be filtered and compared in Platform Analytics.
- The embedding context, through `embed_context_uri`: the URL of your embedding page, without the query string. For iframe embedding, the Embedding SDK passes the host page's URL to the embedded page automatically.
- The target of the interaction: the project, the dashboard, and, for interactions on a specific visualization, the visualization name and id.

The device and environment (browser, operating system, Library version) are recorded once per session.

Record delivery is resilient: telemetry failures never block or break the embedding, and a record that fails to send immediately is buffered locally and retried.

## Prerequisites

1. Platform Analytics is deployed in your environment, and client telemetry is enabled for the project that contains the embedded content. Records are only sent for projects with client telemetry enabled in the Platform Analytics telemetry settings.
1. Enable telemetry for embedded sessions on the Library server. Navigate to `MicroStrategyLibrary/WEB-INF/classes/config/configOverride.properties` and add the following line, or replace it if already present:

   `features.telemetry.embedEnabled=true`

1. Restart your Library web application hosted on the application server.

Optionally, you can control how records are delivered with `features.telemetry.immediateSend` in the same properties file. When it is `true` (the default), each record is sent to Platform Analytics as soon as it completes; when it is `false`, records are buffered in the browser's IndexedDB and flushed when the user returns.

## What is recorded

### In iframe-embedded pages

The following user interactions are recorded in pages embedded with the Embedding SDK:

- Dashboard manipulations, such as filtering, sorting, drilling, and page switching, including the name and id of the visualization the user acted on.
- Link clicks: URL links, links to reports or documents, contextual links to the same or another dashboard, and links to a dashboard in another project.
- Toolbar and sharing actions: exporting to PDF, CSV, Excel, Google Sheets, or plain text, subscribing, applying a bookmark, answering prompts, copying a share link, posting a comment, viewing the data behind a visualization, and resetting the dashboard.

### In natively embedded dashboards and visualizations

For dashboards and visualizations embedded with the Native Embedding SDK:

- Manipulations: sorting (including clearing a sort), drilling, keep-only and exclude, selectors, panel selectors, and showing totals, with the visualization name and id. When several dashboards are embedded on one page, each dashboard instance carries its own stable action id, so their records can be told apart.
- Link clicks, with the same link types as iframe embedding.

Some interactions are intentionally not recorded in native embedding: page load and render events, and filtering applied through the SDK's `applyFilter` or `applyManipulations` APIs by the embedding application itself. Only direct end-user interactions are counted, so programmatic changes from the host application are not double-counted as usage.

## View the data in Platform Analytics

The records are written to the Platform Analytics client telemetry data. In the Client Telemetry reports, you can:

- Filter usage by the `embed_mode_id` dimension to separate iframe-embedded usage, natively embedded usage, and standard Library usage.
- Break usage down by the embedding page (`embed_context_uri`), by dashboard, or by visualization.
- Review the interaction types, such as filter, sort, drill, export, and link clicks, with the recorded request duration of each manipulation.

Since the host page URL is recorded without its query string, personal data that may be carried in query parameters is not collected.
