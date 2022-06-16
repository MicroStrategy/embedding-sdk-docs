---
sidebar_position: 3
title: Upgrade to a Newer Version of MicroStrategy
---

The JavaScript library for embedding dossiers is included in the MicroStrategy installation so it is automatically updated when you upgrade to a newer version of MicroStrategy. However, you need to follow certain practices to preserve settings you have made and customizations you have created in the current version.

In addition, you should always check [What's New](./whats-new-in-the-embedding-sdk) to see whether any new functionality is available for customizations in the version you are upgrading to.

## CORS Configuration

CORS configuration is maintained in the `configOverride.properties` file. If you configured CORS in your current MicroStrategy installation and you used the installer to deploy your WAR file, the CORS configuration setting should remain after the upgrade. However, if you deployed the WAR file manually, you will need to reconfigure CORS after you have upgraded.

1. Open the Library Admin page.
1. Navigate to **Library Server -> Security Settings**.
1. Choose the appropriate setting for **Allow Library embedding in other sites** to reconfigure CORS.

![Library Admin CORS Setting](./images/LibraryAdmin_CORSsetting.png)

You should test an appropriate embedded dossier to confirm that the CORS configuration is working correctly.

## Custom Authentication

To support custom authentication, you provide a servlet on the web server that gets the identity token and modify `web.xml` to configure and map this servlet. To preserve custom authentication, you need to do the following after you upgrade:

1. Confirm that the servlet is still available on the web server.
1. Modify the upgraded `web.xml` file to configure and map the custom authentication servlet.
1. Test an embedded dossier to confirm that custom authentication is working correctly.
