---
title: Deploy a Sample Application to Set Dossier Properties
description: When you embed a dossier, you can set properties to customize the user interface, the features that are available or visible, and authentication.
---

When you embed a dossier, you can [set properties](./methods-and-properties) to customize the user interface, the features that are available or visible, and authentication.

:::note

To help you get started, we have provided an [example on playground](https://microstrategy.github.io/playground/?example=g1) that sets properties on an embedded dossier. Use the `create(props)` method under the `microstrategy.dossier` namespace to set properties. The props parameter contains optional key:value pairs to customize the UI, features, and authentication, in addition to the required key:value pairs that define the URL where the dossier is located and the ID of the `<div>` placeholder where the iFrame containing the dossier instance will be created.

This example is provided as an HTML file, which must be hosted on a web server. It cannot be run as a standalone file.

:::
